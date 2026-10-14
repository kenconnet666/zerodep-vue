import assert from 'node:assert/strict';
import test from 'node:test';
import { shallowRef, ref, createSSRApp, defineComponent, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { cx, createCssContext, SystemKeywords } from '../../src/index.ts';
import * as api from '../../src/index.ts';
import { resolveClass } from '../../src/css/resolve.ts';
import { binding, template } from '../../src/css/bindings.ts';
const { keywords, useCss } = createCssContext(new SystemKeywords());

const s = useCss();

class Theme extends SystemKeywords {
  color = { _brand: 'red', _accent: ref('orange') };
  padding = { _control: '8px 12px' };
}

test('theme literals resolve per property and keep shared binding reads and source updates', () => {
  class Specific extends Theme {
    backgroundColor = { _brand: 'black' };
  }
  const source = shallowRef(new Specific());
  const { useCss, keywords } = createCssContext(source);
  const s = useCss();
  const style = s.color('_brand').backgroundColor('_brand');
  assert.deepEqual(Object.values(resolveClass(style).variables), ['red', 'black']);
  assert.deepEqual(
    Object.values(resolveClass(s.backgroundColor(keywords.color._brand)).variables),
    ['red'],
  );
  let reads = 0;
  let name = '_brand';
  const shared = binding(() => {
    reads++;
    return name;
  });
  const dynamic = s.color(shared).borderColor(shared);
  assert.deepEqual(Object.values(resolveClass(dynamic).variables), ['red', 'red']);
  assert.equal(reads, 1);
  const next = new Specific();
  next.color._brand = 'blue';
  source.value = next;
  assert.deepEqual(Object.values(resolveClass(style).variables), ['blue', 'black']);
  name = 'inherit';
  assert.deepEqual(resolveClass(dynamic).variables, {});
  name = '_missing';
  assert.throws(() => resolveClass(dynamic), /没有关键字 _missing/);
  assert.throws(() => s.padding('_brand'), /padding 没有关键字/);
  assert.throws(() => s.color('_missing'), /没有关键字/);
  assert.equal('keywords' in s, false);
  assert(resolveClass(s.variable('--raw', '_literal')).cssText.includes('--raw:_literal;'));
});

test('template theme names resolve only when they form the entire property value', () => {
  const { useCss } = createCssContext(new Theme());
  const s = useCss();
  const name = binding(() => '_brand');
  assert.deepEqual(Object.values(resolveClass(s.color(template([name]))).variables), ['red']);
  assert.deepEqual(Object.values(resolveClass(s.content(template(['"', name, '"']))).variables), [
    '"_brand"',
  ]);
});

test('typed theme hooks isolate nested providers, independent contexts and SSR requests', async () => {
  const theme = createCssContext(new Theme());
  const independent = createCssContext(new Theme());
  assert.throws(() => theme.provideTheme(new Theme()), /setup/);
  const Leaf = defineComponent(() => {
    const s = theme.useCss();
    const other = independent.useCss();
    const style = s.color('_brand');
    return () =>
      h(
        'span',
        Object.values(resolveClass(style).variables).join() +
          '/' +
          Object.values(resolveClass(other.color('_brand')).variables).join(),
      );
  });
  const Region = defineComponent({
    props: { color: String },
    setup(props) {
      const source = new Theme();
      source.color._brand = props.color;
      theme.provideTheme(source);
      return () => h(Leaf);
    },
  });
  const page = (color) =>
    createSSRApp(defineComponent(() => () => h('main', [h(Leaf), h(Region, { color }), h(Leaf)])));
  const [blue, green] = await Promise.all([
    renderToString(page('blue')),
    renderToString(page('green')),
  ]);
  assert.equal(blue, '<main><span>red/red</span><span>blue/red</span><span>red/red</span></main>');
  assert.equal(
    green,
    '<main><span>red/red</span><span>green/red</span><span>red/red</span></main>',
  );
});

test('immutable authors and ordinary named collections compose through cx without legacy APIs', () => {
  const styles = { root: s.display(keywords.display.flex), active: s.opacity(0.5) };
  assert.equal(typeof useCss, 'function');
  assert.equal(typeof cx, 'function');
  assert.equal('css' in api, false);
  assert.equal('useCss' in api, false);
  assert.equal('keywords' in api, false);
  assert.equal('keywords' in s, false);
  const result = resolveClass(cx(styles.root, styles.active));
  assert(result.cssText.includes('display:flex'));
  assert(result.cssText.includes('opacity:0.5'));
});

test('system keywords stay available beside typed theme members and remain literal values', () => {
  const themedContext = createCssContext(new Theme());
  const themed = themedContext.useCss();
  const themedKeywords = themedContext.keywords;
  const style = resolveClass(
    themed
      .display(themedKeywords.display.flex)
      .color(themedKeywords.color.currentColor)
      .width(themedKeywords.width.initial)
      .transformStyle(themedKeywords.transformStyle.preserve3d),
  );
  assert(style.cssText.includes('display:flex'));
  assert(style.cssText.toLowerCase().includes('color:currentcolor'));
  assert(style.cssText.includes('width:initial'));
  assert(style.cssText.includes('transform-style:preserve-3d'));
  assert.equal(keywords.transformStyle['preserve-3d'], undefined);
  assert(
    resolveClass(s.WebkitTransformStyle(keywords.WebkitTransformStyle.preserve3d)).cssText.includes(
      '-webkit-transform-style:preserve-3d',
    ),
  );
  for (const group of Object.values(keywords))
    for (const member of Object.keys(group)) assert.match(member, /^[A-Za-z_$][\w$]*$/);
  assert.deepEqual(style.variables, {});
  assert.equal(themedKeywords.color._brand, themedKeywords.color._brand);
  assert.equal(keywords.width.nonexistent, undefined);
});

test('predefined themes switch through one Ref while other regions keep their own source', () => {
  const light = new Theme();
  const dark = new Theme();
  dark.color._brand = 'blue';
  dark.color._accent.value = 'purple';
  const themes = { light, dark };
  const source = shallowRef(themes.light);
  const themedContext = createCssContext(source);
  const themed = themedContext.useCss();
  const themedKeywords = themedContext.keywords;
  const style = themed
    .color(themedKeywords.color._brand)
    .backgroundColor(themedKeywords.color._accent);
  const first = resolveClass(style);
  assert.deepEqual(Object.values(first.variables), ['red', 'orange']);
  source.value = themes.dark;
  const second = resolveClass(style);
  assert.equal(first.ruleName, second.ruleName);
  assert.deepEqual(Object.values(second.variables), ['blue', 'purple']);
  const otherContext = createCssContext(themes.light);
  const other = otherContext.useCss();
  const otherKeywords = otherContext.keywords;
  assert.deepEqual(Object.values(resolveClass(other.color(otherKeywords.color._brand)).variables), [
    'red',
  ]);
  source.value = themes.light;
  assert.deepEqual(Object.values(resolveClass(style).variables), ['red', 'orange']);
});

test('normal class inheritance retains members and invalid source definitions are diagnosed', () => {
  class Extended extends Theme {
    color = { ...new Theme().color, _danger: 'crimson' };
  }
  const themedContext = createCssContext(new Extended());
  const themed = themedContext.useCss();
  const themedKeywords = themedContext.keywords;
  assert.deepEqual(
    Object.values(
      resolveClass(
        themed.color(themedKeywords.color._brand).borderColor(themedKeywords.color._danger),
      ).variables,
    ),
    ['red', 'crimson'],
  );
  assert.throws(() => createCssContext(), /真实主题实例/);
  class Invalid extends SystemKeywords {
    color = { initial: 'red' };
  }
  const invalid = createCssContext(new Invalid());
  assert.throws(() => invalid.useCss().color('_missing'), /不能覆盖系统关键字/);
  assert.throws(() => resolveClass(themed.color(themedKeywords.color._missing)), /当前主题缺少/);
});

test('contexts defer unused groups and reuse provided source authors without creating the fallback', async () => {
  let fallbackReads = 0;
  const fallback = new Theme();
  Object.defineProperty(fallback, 'color', {
    get() {
      fallbackReads++;
      return { _brand: 'red' };
    },
  });
  let unusedReads = 0;
  Object.defineProperty(fallback, 'padding', {
    get() {
      unusedReads++;
      throw new Error('unused group');
    },
  });
  const context = createCssContext(fallback);
  assert.equal(fallbackReads, 0);
  const source = shallowRef(new Theme());
  const authors = [];
  const Leaf = defineComponent(() => {
    authors.push(context.useCss());
    return () => h('span', 'leaf');
  });
  const Region = defineComponent(() => {
    authors.push(context.provideTheme(source));
    return () => h(Leaf);
  });
  await renderToString(
    createSSRApp(defineComponent(() => () => h('main', [h(Region), h(Region)]))),
  );
  assert(authors.every((author) => author === authors[0]));
  assert.equal(fallbackReads, 0);
  assert.equal(unusedReads, 0);
  const first = context.useCss();
  assert.equal(first, context.useCss());
  assert.equal(fallbackReads, 0);
  assert.deepEqual(Object.values(resolveClass(first.color('_brand')).variables), ['red']);
  assert.equal(unusedReads, 0);
});
