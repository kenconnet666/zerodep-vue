import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import {
  core,
  vue,
  dyn,
  objectCss,
  resolveCss,
  serial,
  root,
  openBrowser,
  writeReport,
  autoSnapshotCss,
} from './prototype.mjs';
const require = createRequire(resolve(root, 'package.json'));
const compilerRequire = createRequire(resolve(root, 'packages/compiler/package.json'));
const { transformAsync, types: t } = require('@babel/core');
const presetTypeScript = compilerRequire('@babel/preset-typescript').default;
const { babelPlugin } = await import(
  pathToFileURL(resolve(root, 'packages/compiler/src/index.ts')).href
);
const { renderToString } = await import(
  pathToFileURL(require.resolve('@vue/server-renderer')).href
);
const coreUrl = pathToFileURL(resolve(root, 'packages/core/src/index.ts')).href;
const vueUrl = pathToFileURL(require.resolve('vue')).href;
const adapterUrl = new URL('./prototype.mjs', import.meta.url).href;
const results = [];
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
async function compile(source, proposed, automatic = false) {
  let code = (
    await transformAsync(source, {
      filename: resolve(root, 'packages/compiler/test/__probe_css_forwarding.tsx'),
      babelrc: false,
      configFile: false,
      plugins: automatic ? [autoSnapshotCss, babelPlugin] : [babelPlugin],
      presets: [presetTypeScript],
    })
  ).code;
  code = (
    await transformAsync(code, {
      babelrc: false,
      configFile: false,
      plugins: [
        () => ({
          visitor: {
            ImportDeclaration(path) {
              if (path.node.source.value === '@zerodep-vue/core') {
                const moved = path.node.specifiers.filter(
                  (x) =>
                    t.isImportSpecifier(x) && t.isIdentifier(x.imported, { name: 'mergeCssProps' }),
                );
                if (proposed && moved.length) {
                  path.node.specifiers = path.node.specifiers.filter((x) => !moved.includes(x));
                  path.insertAfter(
                    t.importDeclaration(
                      moved.map((x) => t.importSpecifier(x.local, t.identifier('mergeAttrs'))),
                      t.stringLiteral(adapterUrl),
                    ),
                  );
                }
                path.node.source.value = coreUrl;
              } else if (path.node.source.value === 'vue') path.node.source.value = vueUrl;
              else if (path.node.source.value === 'probe-base') path.node.source.value = adapterUrl;
            },
          },
        }),
      ],
    })
  ).code;
  return {
    code,
    module: await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64')),
  };
}
const authorSource = `import {_component,bx,_button,_span} from '@zerodep-vue/core';
import type {VNodeChild} from 'vue';
interface ButtonProps{
 css?:unknown;
 slotIcon?:{css?:unknown;title?:string;'aria-hidden'?:boolean};
 children?:VNodeChild;
 disabled?:boolean;
}
const Button=_component(({slotIcon,children,disabled=false,...rest}:ButtonProps)=>
 <_button css={{padding:4,':hover':{opacity:.8},'aria-pressed':{true:{borderWidth:2,borderStyle:'solid'}}}} {...rest} disabled={disabled}>
  <_span css={{display:'inline-block',width:4}} {...slotIcon} aria-hidden={true}>icon</_span>
  {children}
 </_button>);
const Wrapper=_component((props:ButtonProps)=>
 <Button slotIcon={{css:{height:6},title:'wrapper'}} {...props}/>);
interface PageProps{width:number;tint:string;pressed?:boolean}
export const App=_component(({width,tint,pressed=false}:PageProps)=>
 <Wrapper aria-pressed={pressed} css={{width:bx(width),color:bx(tint)}} style={{marginTop:'7px','--public-gap':'3px'}}
 slotIcon={{css:{width:bx(width/2)},'aria-hidden':false}}>body</Wrapper>);
`;
const current = await compile(authorSource, false);
const proposed = await compile(authorSource, true);
async function renderApp(App, props) {
  const context = {};
  const html = await renderToString(vue.createSSRApp(App, props), context);
  const host = core.getCssHost(context);
  return { html, css: host?.cssText() ?? '', styles: host?.renderStyles() ?? '' };
}
let red, blue;
await test(
  'core CSS merging preserves root defaults; slot bag merging remains a separate migration',
  async () => {
    const r = await renderApp(current.module.App, { width: 40, tint: 'red' });
    assert(r.css.includes('padding:4px'));
    assert(!r.css.includes('height:6px'));
    assert(!r.html.includes('6px'));
    return { cssMergeImplemented: true, slotMergeImplemented: false };
  },
  'boundary',
);
await test('prototype css and registered slot merge preserve wrapper defaults and bindings', async () => {
  red = await renderApp(proposed.module.App, { width: 40, tint: 'red', pressed: true });
  blue = await renderApp(proposed.module.App, { width: 80, tint: 'blue', pressed: false });
  assert(red.css.includes('padding:4px'));
  assert(red.html.includes('6px'));
  assert(red.html.includes('40px'));
  assert(red.html.includes('20px'));
  assert(red.html.includes('margin-top:7px'));
  assert(red.html.includes('--public-gap:3px'));
  assert(red.html.includes('aria-hidden="true"'));
  assert(red.html.includes('title="wrapper"'));
  assert(!red.html.includes(' css='));
  assert(!red.html.includes('[object Object]'));
  assert(blue.html.includes('80px'));
  assert(blue.html.includes('40px'));
  assert(blue.html.includes('blue'));
  assert(!blue.html.includes('red;'));
  assert.equal(red.css, blue.css);
  return { sameRuleTextAcrossRequests: true, rootAndSlotVariablesPresent: true, html: red.html };
});
await test(
  'component compilation accepts complex Props and Slot without runtime type extraction',
  async () => {
    const sample = `import {_component} from '@zerodep-vue/core';
 type Base={__props:{disabled?:boolean;css?:unknown;children?:unknown}};
 declare const _button:Base;
 type Props<B extends Base,E extends object={}> = Omit<B['__props'],keyof E>&E;
 type Slot<B extends Base,K extends keyof B['__props']=never> = Partial<Omit<B['__props'],K>>&{[P in K]?:never};
 type ButtonProps=Props<typeof _button,{loading?:boolean;slotIcon?:Slot<typeof _button,'disabled'>}>;
 export const Button=_component<ButtonProps>(({loading=false,...rest})=><button {...rest}>{String(loading)}</button>);`;
    const code = (
      await transformAsync(sample, {
        filename: resolve(root, 'packages/compiler/test/__probe_props.tsx'),
        babelrc: false,
        configFile: false,
        plugins: [babelPlugin],
        presets: [presetTypeScript],
      })
    ).code;
    assert(code.includes('createComponent'));
    assert(!code.includes('mergeSlot'));
    return { compileSupported: true, slotPolicyRuntimeMetadataGenerated: false };
  },
  'boundary',
);
await test('inline CSS values can bind automatically without bx and preserve stable SSR rules', async () => {
  const plain = authorSource
    .replaceAll('bx(width/2)', 'width/2')
    .replaceAll('bx(width)', 'width')
    .replaceAll('bx(tint)', 'tint');
  const { module } = await compile(plain, true, true);
  const first = await renderApp(module.App, { width: 40, tint: 'red' });
  const second = await renderApp(module.App, { width: 80, tint: 'blue' });
  assert.equal(first.css, second.css);
  assert(first.html.includes('40px'));
  assert(first.html.includes('20px'));
  assert(first.html.includes('red'));
  assert(second.html.includes('80px'));
  assert(second.html.includes('40px'));
  assert(second.html.includes('blue'));
  return { automaticLeafBinding: true, slotLeafBinding: true };
});
await test('automatic binding evaluates CSS expressions once in normal source order', async () => {
  const source =
    "import {_component,_button} from '@zerodep-vue/core';export const calls=[];function take(name,value){calls.push(name);return value;}export const App=_component(()=><_button css={[{color:take('base','red')},{color:take('override','blue')}]}/>);";
  const { module } = await compile(source, true, true);
  const first = await renderApp(module.App, {});
  assert.deepEqual(module.calls, ['base', 'override']);
  assert(first.html.includes('blue'));
  assert(!first.html.includes('red;'));
  return { overriddenExpressionStillEvaluated: true, reads: module.calls };
});

const { browser, page } = await openBrowser();
const vueDev = require.resolve('vue/dist/vue.global.js');
const warnings = [];
page.on('console', (m) => {
  if (['warning', 'error'].includes(m.type())) warnings.push(m.text());
});
try {
  await test('prototype component SSR output has actual root and slot computed styles', async () => {
    await page.setContent(red.styles + red.html);
    assert.equal(await page.locator('button').evaluate((e) => getComputedStyle(e).width), '40px');
    assert.equal(
      await page.locator('button').evaluate((e) => getComputedStyle(e).paddingTop),
      '4px',
    );
    assert.equal(
      await page.locator('button>span').evaluate((e) => getComputedStyle(e).width),
      '20px',
    );
    assert.equal(
      await page.locator('button>span').evaluate((e) => getComputedStyle(e).height),
      '6px',
    );
    assert.equal(
      await page.locator('button').evaluate((e) => getComputedStyle(e).borderTopWidth),
      '2px',
    );
  });
  await test('Vue hydration preserves SSR node and subsequent style updates remove stale vars', async () => {
    let width = 32;
    const style = { width: dyn(() => width), opacity: 0.9 };
    const first = resolveCss(style);
    width = 64;
    const second = resolveCss(style);
    width = null;
    const cleared = resolveCss(style);
    width = 32;
    const View = vue.defineComponent({
      setup() {
        return () =>
          core.renderCss(() =>
            core.createCssVNode(
              'div',
              {
                id: 'target',
                class: objectCss(style),
                style: { marginTop: '7px', '--public-gap': '3px' },
              },
              'bound',
            ),
          );
      },
    });
    const context = {};
    const html = await renderToString(vue.createSSRApp(View), context);
    const host = core.getCssHost(context);
    await page.setContent(host.renderStyles() + '<div id="app">' + html + '</div>');
    await page.addStyleTag({ content: cleared.cssText });
    await page.addScriptTag({ path: vueDev });
    await page.evaluate(
      ({ first, second, cleared }) => {
        const states = [first, second, cleared];
        const step = Vue.ref(0);
        const old = document.getElementById('target');
        const App = {
          render() {
            const r = states[step.value];
            return Vue.h(
              'div',
              {
                id: 'target',
                class: r.className,
                style: { ...r.variables, marginTop: '7px', '--public-gap': '3px' },
              },
              'bound',
            );
          },
        };
        const app = Vue.createSSRApp(App);
        app.mount('#app');
        window.probe = { app, step, old };
      },
      { first: serial(first), second: serial(second), cleared: serial(cleared) },
    );
    assert.equal(
      await page.evaluate(() => window.probe.old === document.getElementById('target')),
      true,
    );
    assert.equal(await page.locator('#target').evaluate((e) => getComputedStyle(e).width), '32px');
    await page.evaluate(async () => {
      window.probe.step.value = 1;
      await Vue.nextTick();
    });
    assert.equal(await page.locator('#target').evaluate((e) => getComputedStyle(e).width), '64px');
    await page.evaluate(async () => {
      window.probe.step.value = 2;
      await Vue.nextTick();
    });
    const state = await page.locator('#target').evaluate((e) => ({
      generated: Array.from(e.style).filter((x) => x.startsWith('--zv-')),
      public: e.style.getPropertyValue('--public-gap'),
      margin: getComputedStyle(e).marginTop,
    }));
    assert.deepEqual(state.generated, []);
    assert.equal(state.public, '3px');
    assert.equal(state.margin, '7px');
    assert.equal(warnings.filter((x) => /hydration/i.test(x)).length, 0);
    await page.evaluate(() => window.probe.app.unmount());
    assert.equal(await page.locator('#target').count(), 0);
    return { hydrationWarnings: 0, nodeReused: true, staleVariablesRemoved: true };
  });
  await test('Teleport follows physical CSS inheritance and explicit forwarding restores value', async () => {
    await page.setContent('<div id="app"></div><div id="portal"></div>');
    await page.addScriptTag({ path: vueDev });
    await page.evaluate(() => {
      const forwarded = Vue.ref(false);
      const app = Vue.createApp({
        render() {
          return Vue.h('section', { style: { '--accent': 'red' } }, [
            Vue.h(
              Vue.Teleport,
              { to: '#portal' },
              Vue.h(
                'span',
                {
                  id: 'teleported',
                  style: {
                    color: 'var(--accent, purple)',
                    ...(forwarded.value ? { '--accent': 'red' } : {}),
                  },
                },
                'p',
              ),
            ),
          ]);
        },
      });
      app.mount('#app');
      window.tp = { app, forwarded };
    });
    assert.equal(
      await page.locator('#teleported').evaluate((e) => getComputedStyle(e).color),
      'rgb(128, 0, 128)',
    );
    await page.evaluate(async () => {
      window.tp.forwarded.value = true;
      await Vue.nextTick();
    });
    assert.equal(
      await page.locator('#teleported').evaluate((e) => getComputedStyle(e).color),
      'rgb(255, 0, 0)',
    );
    await page.evaluate(() => window.tp.app.unmount());
  });
} finally {
  await browser.close();
}
writeReport('ssr-results.json', { results, warnings });
console.log(
  JSON.stringify({
    total: results.length,
    passed: results.filter((x) => x.status === 'passed').length,
    failed: results.filter((x) => x.status === 'failed').length,
  }),
);
if (results.some((x) => x.status === 'failed')) process.exitCode = 1;
