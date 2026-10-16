import assert from 'node:assert/strict';
import {
  core,
  s,
  dyn,
  template,
  resolveCss,
  serial,
  attributeSelector,
  openBrowser,
  writeReport,
} from './prototype.mjs';
const results = [];
const { browser, page } = await openBrowser();
async function test(name, run, kind = 'check') {
  try {
    const evidence = await run();
    results.push({ name, kind, status: 'passed', evidence });
    console.log('PASS ' + name);
  } catch (error) {
    results.push({ name, kind, status: 'failed', error: error.stack });
    console.log('FAIL ' + name + ': ' + error.message);
  }
}
const get = (selector, property, pseudo) =>
  page
    .locator(selector)
    .evaluate(
      (el, { property, pseudo }) => getComputedStyle(el, pseudo).getPropertyValue(property),
      { property, pseudo },
    );
async function apply(selector, result, inline = {}) {
  await page.locator(selector).evaluate(
    (el, { result, inline }) => {
      for (const name of el.__probeVars ?? [])
        if (!(name in result.variables)) el.style.removeProperty(name);
      el.__probeVars = Object.keys(result.variables);
      el.className = result.className;
      for (const [name, value] of Object.entries(result.variables))
        el.style.setProperty(name, value);
      for (const [name, value] of Object.entries(inline)) {
        if (name.startsWith('--') || name.includes('-')) el.style.setProperty(name, String(value));
        else el.style[name] = String(value);
      }
    },
    { result: serial(result), inline },
  );
}
async function mount(result, html = '<div id="target">test</div>', inline = {}) {
  await page.setViewportSize({ width: 1000, height: 700 });
  await page.setContent(html);
  await page.mouse.move(950, 650);
  await page.addStyleTag({
    content: result.resources.map((x) => x.cssText).join('') + result.cssText,
  });
  await apply('#target', result, inline);
}
try {
  await test('dynamic values keep rule identity and normalize units', async () => {
    let width = 24,
      alpha = 0.4,
      x = 5;
    const input = {
      width: dyn(() => width),
      opacity: dyn(() => alpha),
      lineHeight: 1.25,
      transform: template(['translateX(', dyn(() => x), 'px)']),
    };
    const first = resolveCss(input);
    width = 48;
    alpha = 0.8;
    x = 11;
    const second = resolveCss(input);
    assert.equal(first.ruleName, second.ruleName);
    assert.equal(first.cssText, second.cssText);
    assert.deepEqual(Object.values(first.variables), ['24px', '0.4', 'translateX(5px)']);
    await mount(first);
    assert.equal(await get('#target', 'width'), '24px');
    await apply('#target', second);
    assert.equal(await get('#target', 'width'), '48px');
    assert.equal(await get('#target', 'opacity'), '0.8');
    assert.equal(await get('#target', 'transform'), 'matrix(1, 0, 0, 1, 11, 0)');
    return { classStable: true, variables: first.variables };
  });
  await test('two instances share CSS but not inline variable values', async () => {
    const a = resolveCss({ width: dyn(() => 23), color: dyn(() => 'red') });
    const b = resolveCss({ width: dyn(() => 47), color: dyn(() => 'blue') });
    assert.equal(a.ruleName, b.ruleName);
    await mount(a, '<div id="target"></div><div id="other"></div>');
    await apply('#other', b);
    assert.equal(await get('#target', 'width'), '23px');
    assert.equal(await get('#other', 'width'), '47px');
    assert.equal(await get('#target', 'color'), 'rgb(255, 0, 0)');
    assert.equal(await get('#other', 'color'), 'rgb(0, 0, 255)');
  });
  await test('dynamic hover changes variable without changing class', async () => {
    let color = 'blue';
    const input = { color: 'black', ':hover': { color: dyn(() => color) } };
    const first = resolveCss(input);
    await mount(first, '<button id="target">Hover</button>');
    assert.equal(await get('#target', 'color'), 'rgb(0, 0, 0)');
    await page.hover('#target');
    assert.equal(await get('#target', 'color'), 'rgb(0, 0, 255)');
    color = 'green';
    const next = resolveCss(input);
    assert.equal(first.ruleName, next.ruleName);
    await apply('#target', next);
    assert.equal(await get('#target', 'color'), 'rgb(0, 128, 0)');
  });
  await test('native disabled includes fieldset and respects first legend exception', async () => {
    const r = resolveCss({ opacity: 1, ':disabled': { opacity: 0.4 } });
    await mount(
      r,
      '<fieldset disabled><legend><button id="legend">Legend</button></legend><button id="target">Disabled</button></fieldset>',
    );
    await apply('#legend', r);
    assert.equal(await get('#target', 'opacity'), '0.4');
    assert.equal(await get('#legend', 'opacity'), '1');
    assert.equal(await page.locator('#target').getAttribute('disabled'), null);
  });
  await test('focus-visible is browser keyboard state', async () => {
    const r = resolveCss({ ':focus-visible': { outline: '2px solid blue' } });
    await mount(r, '<button id="target">Focus</button>');
    await page.keyboard.press('Tab');
    assert.equal(await page.locator('#target').evaluate((e) => e.matches(':focus-visible')), true);
    assert.equal(await get('#target', 'outline-width'), '2px');
  });
  await test('ARIA false mixed and omitted attributes remain distinct', async () => {
    const r = resolveCss({
      color: 'black',
      'aria-pressed': {
        true: { color: 'red' },
        false: { color: 'blue' },
        mixed: { color: 'purple' },
      },
    });
    await mount(r, '<button id="target">Toggle</button>');
    for (const [value, expected] of [
      [null, 'rgb(0, 0, 0)'],
      ['false', 'rgb(0, 0, 255)'],
      ['true', 'rgb(255, 0, 0)'],
      ['mixed', 'rgb(128, 0, 128)'],
    ]) {
      await page
        .locator('#target')
        .evaluate(
          (e, value) =>
            value === null
              ? e.removeAttribute('aria-pressed')
              : e.setAttribute('aria-pressed', value),
          value,
        );
      assert.equal(await get('#target', 'color'), expected);
    }
  });
  await test('data false is present and matches the false value branch', async () => {
    const r = resolveCss({ 'data-active': { false: { color: 'blue' }, true: { color: 'red' } } });
    await mount(r, '<div id="target" data-active="false"></div>');
    assert.equal(await page.locator('#target').evaluate((e) => e.matches('[data-active]')), true);
    assert.equal(await get('#target', 'color'), 'rgb(0, 0, 255)');
  });
  await test('attribute selector values escape quotes backslashes and ampersands', async () => {
    const value = 'a"b\\c&d';
    const r = resolveCss({ color: 'black', 'data-text': { [value]: { color: 'red' } } });
    await mount(r);
    await page.locator('#target').evaluate((e, v) => e.setAttribute('data-text', v), value);
    assert.equal(await get('#target', 'color'), 'rgb(255, 0, 0)');
    return { selector: attributeSelector('data-text', value) };
  });
  await test('nested attribute hover media and supports remain scoped', async () => {
    const r = resolveCss({
      paddingLeft: 2,
      'aria-expanded': {
        true: {
          ':hover': { color: 'blue' },
          '@media (min-width: 800px)': { paddingLeft: 30 },
          '@supports (display: grid)': { display: 'grid' },
        },
      },
    });
    await mount(r, '<button id="target" aria-expanded="true">Nested</button>');
    await page.hover('#target');
    assert.equal(await get('#target', 'color'), 'rgb(0, 0, 255)');
    assert.equal(await get('#target', 'padding-left'), '30px');
    assert.equal(await get('#target', 'display'), 'grid');
    await page.setViewportSize({ width: 600, height: 700 });
    assert.equal(await get('#target', 'padding-left'), '2px');
  });
  await test('pseudo element receives full quoted content value and inherited vars', async () => {
    let label = 'ready';
    const input = {
      '::before': { content: template(['"', dyn(() => label), '"']), color: dyn(() => 'red') },
    };
    const r = resolveCss(input);
    await mount(r);
    assert.equal(await get('#target', 'content', '::before'), '"ready"');
    assert.equal(await get('#target', 'color', '::before'), 'rgb(255, 0, 0)');
    label = 'done';
    const next = resolveCss(input);
    assert.equal(r.ruleName, next.ruleName);
    await apply('#target', next);
    assert.equal(await get('#target', 'content', '::before'), '"done"');
  });
  await test('descendants inherit variables but sibling targets require literals', async () => {
    let color = 'red';
    const input = { '& > span': { color: dyn(() => color) }, '& + b': { color: dyn(() => color) } };
    const a = resolveCss(input);
    assert.equal(Object.keys(a.variables).length, 1);
    await mount(
      a,
      '<div id="target"><span id="child">child</span></div><b id="sibling">sibling</b>',
    );
    assert.equal(await get('#child', 'color'), 'rgb(255, 0, 0)');
    assert.equal(await get('#sibling', 'color'), 'rgb(255, 0, 0)');
    color = 'blue';
    const b = resolveCss(input);
    assert.notEqual(a.ruleName, b.ruleName);
    await page.addStyleTag({ content: b.cssText });
    await apply('#target', b);
    assert.equal(await get('#child', 'color'), 'rgb(0, 0, 255)');
    assert.equal(await get('#sibling', 'color'), 'rgb(0, 0, 255)');
    return { siblingValueChangeRequiresNewRule: true };
  });
  await test('CSS-wide keywords stay on owning declaration', async () => {
    let color = 'red';
    const input = { color: dyn(() => color) };
    let r = resolveCss(input);
    await mount(r, '<section style="color:green"><div id="target">text</div></section>');
    for (const [value, expected] of [
      ['inherit', 'rgb(0, 128, 0)'],
      ['initial', 'rgb(0, 0, 0)'],
      ['unset', 'rgb(0, 128, 0)'],
    ]) {
      color = value;
      r = resolveCss(input);
      assert.equal(Object.keys(r.variables).length, 0);
      await page.addStyleTag({ content: r.cssText });
      await apply('#target', r);
      assert.equal(await get('#target', 'color'), expected);
    }
    return { wideValuesUseLiteralRule: true };
  });
  await test('important belongs to property not variable payload', async () => {
    const r = resolveCss({ color: dyn(() => 'red !important') });
    assert(Object.values(r.variables).every((v) => !v.includes('!important')));
    assert(r.cssText.includes('!important'));
    await mount(r, undefined, { color: 'blue' });
    assert.equal(await get('#target', 'color'), 'rgb(255, 0, 0)');
    await page.setContent(
      '<style>.x{color:var(--x)}</style><div id="target" class="x" style="--x:red !important;color:blue">x</div>',
    );
    assert.equal(await get('#target', 'color'), 'rgb(0, 0, 255)');
  });
  await test('undefined preserves earlier CSS value and null clears exact path', async () => {
    let value;
    const input = [{ width: 80 }, { width: dyn(() => value) }];
    assert(resolveCss(input).cssText.includes('width:80px'));
    value = 40;
    const r = resolveCss(input);
    await mount(r);
    assert.equal(await get('#target', 'width'), '40px');
    value = null;
    const cleared = resolveCss(input);
    assert.equal(cleared.cssText, '');
    assert.deepEqual(cleared.variables, {});
    value = undefined;
    assert(resolveCss(input).cssText.includes('width:80px'));
  });
  await test('ordered style sources preserve shorthand longhand override', async () => {
    const r = resolveCss([{ marginTop: 12, margin: 0 }, { marginTop: 8 }]);
    await mount(r);
    assert.equal(await get('#target', 'margin-top'), '8px');
    assert.equal(await get('#target', 'margin-right'), '0px');
  });
  await test(
    'object spread cannot recover overwritten property insertion order',
    async () => {
      const base = { marginTop: 12, margin: 0 };
      const r = resolveCss({ ...base, marginTop: 8 });
      await mount(r);
      assert.equal(await get('#target', 'margin-top'), '0px');
      return { orderedSources: '8px', plainObjectSpread: '0px' };
    },
    'boundary',
  );
  await test(
    'ordinary inline color blocks hover but inline custom property does not',
    async () => {
      await page.setContent(
        '<style>.x:hover{color:blue}</style><button id="target" class="x" style="color:red">x</button>',
      );
      await page.hover('#target');
      assert.equal(await get('#target', 'color'), 'rgb(255, 0, 0)');
      const r = resolveCss({ color: dyn(() => 'red'), ':hover': { color: 'blue' } });
      await mount(r, '<button id="target">x</button>');
      await page.hover('#target');
      assert.equal(await get('#target', 'color'), 'rgb(0, 0, 255)');
      return { directInline: 'red', variableChannel: 'blue' };
    },
    'boundary',
  );
  await test(
    'computed invalid var does not restore fallback or earlier declaration',
    async () => {
      await page.setContent(
        '<style>.a{color:red;color:var(--bad,blue);--bad:20px}.b{color:red;color:20px}</style><section style="color:green"><div id="target" class="a">a</div><div id="parse" class="b">b</div></section>',
      );
      assert.equal(await get('#target', 'color'), 'rgb(0, 128, 0)');
      assert.equal(await get('#parse', 'color'), 'rgb(255, 0, 0)');
      return { computedInvalid: 'inherited green', parseInvalid: 'earlier red' };
    },
    'boundary',
  );
  await test(
    'zero-specificity state can be overridden by later ordinary base style',
    async () => {
      await page.setContent(
        '<style>.x:where(:hover){color:blue}.x{color:red}</style><button id="target" class="x">x</button>',
      );
      await page.hover('#target');
      assert.equal(await get('#target', 'color'), 'rgb(255, 0, 0)');
      await page.addStyleTag({ content: '.x:hover{color:blue}' });
      assert.equal(await get('#target', 'color'), 'rgb(0, 0, 255)');
      return { whereState: 'red', nativeSpecificity: 'blue' };
    },
    'boundary',
  );
  await test(
    'equivalent nested selectors are not identical current composition keys',
    async () => {
      const first = { ':hover': { 'aria-pressed': { true: { color: 'red' } } } };
      const clear = { 'aria-pressed': { true: { ':hover': { color: null } } } };
      const r = resolveCss([first, clear]);
      assert(r.cssText.includes('color:red'));
      await mount(r, '<button id="target" aria-pressed="true">x</button>');
      await page.hover('#target');
      assert.equal(await get('#target', 'color'), 'rgb(255, 0, 0)');
      return { semanticClearNotImplemented: true, css: r.cssText };
    },
    'boundary',
  );
  await test(
    'private generated variable collision is observable in explicit style',
    async () => {
      const r = resolveCss({ color: dyn(() => 'red') });
      const name = Object.keys(r.variables)[0];
      await mount(r, undefined, { [name]: 'green' });
      assert.equal(await get('#target', 'color'), 'rgb(0, 128, 0)');
      return { requiresPrivateVariableNamespacePolicy: true };
    },
    'boundary',
  );
  await test(
    'inherits false registration breaks ordinary pseudo element variable inheritance',
    async () => {
      await page.setContent(
        '<style>@property --probe-color{syntax:"<color>";inherits:false;initial-value:blue}.root::before{content:"x";color:var(--probe-color)}.child{color:var(--probe-color)}</style><div id="target" class="root" style="--probe-color:red"><span id="child" class="child">x</span></div>',
      );
      assert.equal(await get('#target', 'color', '::before'), 'rgb(0, 0, 255)');
      assert.equal(await get('#child', 'color'), 'rgb(0, 0, 255)');
      return { pseudoAndChildUseRegisteredInitial: true };
    },
    'boundary',
  );
  await test(
    'binding every scalar keeps rule stable but expands inline payload',
    async () => {
      const a = resolveCss({ display: 'flex', width: 20, color: 'red' }, true);
      const b = resolveCss({ display: 'flex', width: 40, color: 'blue' }, true);
      assert.equal(a.ruleName, b.ruleName);
      assert.equal(Object.keys(a.variables).length, 3);
      assert.equal(
        Object.keys(resolveCss({ display: 'flex', width: 20, color: 'red' }).variables).length,
        0,
      );
      return { allBoundVariableCount: 3, allLiteralVariableCount: 0 };
    },
    'tradeoff',
  );
  await test('dynamic keyframe variables evaluate on the animated element', async () => {
    let alpha = 0.2;
    const animation = core.keyframes({ from: s.opacity(dyn(() => alpha)), to: s.opacity(1) });
    const r = resolveCss({
      animationName: animation,
      animationDuration: '1s',
      animationPlayState: 'paused',
      animationFillMode: 'both',
    });
    await mount(r);
    assert(Math.abs(Number(await get('#target', 'opacity')) - 0.2) < 0.01);
    alpha = 0.4;
    const next = resolveCss({
      animationName: animation,
      animationDuration: '1s',
      animationPlayState: 'paused',
      animationFillMode: 'both',
    });
    assert.equal(r.ruleName, next.ruleName);
    await apply('#target', next);
    assert(Math.abs(Number(await get('#target', 'opacity')) - 0.4) < 0.01);
  });
  const version = browser.version();
  writeReport('browser-results.json', { version, results });
  console.log(
    JSON.stringify({
      version,
      total: results.length,
      passed: results.filter((x) => x.status === 'passed').length,
      failed: results.filter((x) => x.status === 'failed').length,
    }),
  );
} finally {
  await browser.close();
}
if (results.some((x) => x.status === 'failed')) process.exitCode = 1;
