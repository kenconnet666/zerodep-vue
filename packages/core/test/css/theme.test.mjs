import assert from 'node:assert/strict';
import test from 'node:test';
import {
  shallowRef,
  ref,
  toRef,
  isRef,
  isReactive,
  toRaw,
  watchSyncEffect,
  createSSRApp,
  defineComponent,
  h,
} from 'vue';
import { renderToString } from '@vue/server-renderer';
import { cx, createCssContext, SystemKeywords } from '../../src/index.ts';
import * as api from '../../src/index.ts';
import { resolveClass } from '../../src/css/resolve.ts';
import { binding, template } from '../../src/css/bindings.ts';
const { useCss } = createCssContext(new SystemKeywords());

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
  const { useCss, useTheme } = createCssContext(source);
  const s = useCss();
  const theme = useTheme();
  const style = s.color('_brand').backgroundColor('_brand');
  assert.deepEqual(Object.values(resolveClass(style).variables), ['red', 'black']);
  assert.deepEqual(
    Object.values(resolveClass(s.backgroundColor(binding(() => theme.color._brand))).variables),
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
    const mapping = theme.useTheme();
    const other = independent.useCss();
    const style = s.color('_brand');
    assert.deepEqual(Object.values(resolveClass(style).variables), [mapping.color._brand]);
    assert.equal(independent.useTheme().color._brand, 'red');
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
  const styles = { root: s.display('flex'), active: s.opacity(0.5) };
  assert.equal(typeof useCss, 'function');
  assert.equal(typeof cx, 'function');
  assert.equal('css' in api, false);
  assert.equal('useCss' in api, false);
  assert.equal('useTheme' in api, false);
  assert.equal('keywords' in api, false);
  assert.equal('keywords' in s, false);
  const result = resolveClass(cx(styles.root, styles.active));
  assert(result.cssText.includes('display:flex'));
  assert(result.cssText.includes('opacity:0.5'));
});

test('native CSS literals need no named keyword view or variable output', () => {
  const themedContext = createCssContext(new Theme());
  const themed = themedContext.useCss();
  const style = resolveClass(
    themed.display('flex').color('currentColor').width('initial').transformStyle('preserve-3d'),
  );
  assert(style.cssText.includes('display:flex'));
  assert(style.cssText.toLowerCase().includes('color:currentcolor'));
  assert(style.cssText.includes('width:initial'));
  assert(style.cssText.includes('transform-style:preserve-3d'));
  assert(
    resolveClass(s.WebkitTransformStyle('preserve-3d')).cssText.includes(
      '-webkit-transform-style:preserve-3d',
    ),
  );
  assert.deepEqual(style.variables, {});
  assert.equal('keywords' in themedContext, false);
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
  const style = themed.color('_brand').backgroundColor('_accent');
  const first = resolveClass(style);
  assert.deepEqual(Object.values(first.variables), ['red', 'orange']);
  source.value = themes.dark;
  const second = resolveClass(style);
  assert.equal(first.ruleName, second.ruleName);
  assert.deepEqual(Object.values(second.variables), ['blue', 'purple']);
  const otherContext = createCssContext(themes.light);
  const other = otherContext.useCss();
  assert.deepEqual(Object.values(resolveClass(other.color('_brand')).variables), ['red']);
  source.value = themes.light;
  assert.deepEqual(Object.values(resolveClass(style).variables), ['red', 'orange']);
});

test('normal class inheritance retains members and invalid source definitions are diagnosed', () => {
  class Extended extends Theme {
    color = { ...new Theme().color, _danger: 'crimson' };
  }
  const themedContext = createCssContext(new Extended());
  const themed = themedContext.useCss();
  assert.deepEqual(
    Object.values(resolveClass(themed.color('_brand').borderColor('_danger')).variables),
    ['red', 'crimson'],
  );
  assert.throws(() => createCssContext(), /真实主题实例/);
  class Invalid extends SystemKeywords {
    color = { initial: 'red' };
  }
  const invalid = createCssContext(new Invalid());
  assert.throws(() => invalid.useCss().color('_missing'), /不能覆盖系统关键字/);
  assert.throws(() => themed.color('_missing'), /没有关键字/);
  const style = themed.color('_brand');
  themedContext.useTheme().color = { _danger: 'crimson' };
  assert.throws(() => resolveClass(style), /当前主题缺少 color._brand/);
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
  const mappings = [];
  const Leaf = defineComponent(() => {
    authors.push(context.useCss());
    mappings.push(context.useTheme());
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
  assert(mappings.every((mapping) => mapping === mappings[0]));
  assert.equal(toRaw(mappings[0]), source.value);
  assert.equal(fallbackReads, 0);
  assert.equal(unusedReads, 0);
  const first = context.useCss();
  assert.equal(first, context.useCss());
  assert.equal(fallbackReads, 0);
  assert.deepEqual(Object.values(resolveClass(first.color('_brand')).variables), ['red']);
  assert.equal(unusedReads, 0);
});

test('useTheme exposes reactive objects, unwraps members and tracks replacement', () => {
  const plain = new Theme();
  const plainContext = createCssContext(plain);
  const plainMapping = plainContext.useTheme();
  assert.equal(plainMapping, plainContext.useTheme());
  assert.equal(toRaw(plainMapping), plain);
  assert(!isRef(plainMapping));
  assert(isReactive(plainMapping));
  const style = plainContext.useCss().color('_brand');
  const colors = [];
  const stopColors = watchSyncEffect(() =>
    colors.push(Object.values(resolveClass(style).variables)[0]),
  );
  try {
    plainMapping.color._brand = 'blue';
    assert.deepEqual(colors, ['red', 'blue']);
    assert.equal(plain.color._brand, 'blue');
    assert.equal(plainMapping.color._accent, 'orange');
  } finally {
    stopColors();
  }

  const first = new Theme();
  const source = shallowRef(first);
  const context = createCssContext(source);
  const mapping = context.useTheme();
  const seen = [];
  const stop = watchSyncEffect(() => seen.push(mapping.color._accent));
  try {
    first.color._accent.value = 'gold';
    const next = new Theme();
    next.color._accent.value = 'purple';
    source.value = next;
    first.color._accent.value = 'unused';
    mapping.color._accent = 'green';
    assert.deepEqual(seen, ['orange', 'gold', 'purple', 'green']);
    assert.equal(next.color._accent.value, 'green');
    assert.equal(toRaw(mapping), next);
    assert.equal(mapping, context.useTheme());
    assert(isReactive(mapping));
    assert(mapping instanceof Theme);
    assert(Object.keys(mapping).includes('padding'));
    mapping.padding = { _control: '2px' };
    assert.equal(next.padding._control, '2px');
    assert.equal(first.padding._control, '8px 12px');
    delete mapping.padding;
    assert(!('padding' in mapping));
    assert(!Object.keys(mapping).includes('padding'));
  } finally {
    stop();
  }
});

test('theme entries defer source reads, retry invalid sources and share only current consumption', () => {
  let sourceReads = 0;
  let sourceValue;
  const source = toRef(() => {
    sourceReads++;
    return sourceValue;
  });
  const context = createCssContext(source);
  const s = context.useCss();
  const mapping = context.useTheme();
  assert.equal(sourceReads, 0);
  assert.throws(() => mapping.color, /真实主题实例/);
  sourceValue = new Theme();
  let reads = 0;
  Object.defineProperty(sourceValue.color, '_brand', {
    get() {
      reads++;
      return 'red';
    },
  });
  const style = s.color('_brand').backgroundColor('_brand').borderColor('_brand');
  assert.equal(reads, 0);
  assert.deepEqual(Object.values(resolveClass(style).variables), ['red', 'red', 'red']);
  assert.equal(reads, 1);
  resolveClass(style);
  assert.equal(reads, 2);
  assert.equal(toRaw(mapping), sourceValue);
  sourceValue = { color: { _brand: 'wrong' } };
  assert.throws(() => resolveClass(style), /真实主题实例/);
});

test('live theme views reject structural locks without poisoning later reads or replacements', () => {
  for (const operation of [
    Object.freeze,
    Object.seal,
    Object.preventExtensions,
    (view) => Object.setPrototypeOf(view, {}),
    (view) => Object.defineProperty(view, 'color', { value: { _brand: 'locked' } }),
  ]) {
    const source = shallowRef(new Theme());
    const view = createCssContext(source).useTheme();
    assert.throws(() => operation(view), /可替换主题映射/);
    assert.equal(view.color._brand, 'red');
    assert(Object.keys(view).includes('color'));
    assert(Object.isExtensible(view));
    const next = new Theme();
    next.color._brand = 'blue';
    source.value = next;
    assert.equal(view.color._brand, 'blue');
  }
});

test('configurable theme definitions are forwarded to the current source', () => {
  const first = new Theme();
  const source = shallowRef(first);
  const view = createCssContext(source).useTheme();
  Object.defineProperty(view, 'padding', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: { _control: '2px' },
  });
  assert.equal(first.padding._control, '2px');
  const next = new Theme();
  source.value = next;
  assert.equal(view.padding._control, '8px 12px');
  Object.defineProperty(view, 'padding', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: { _control: '4px' },
  });
  assert.equal(next.padding._control, '4px');
  assert.equal(first.padding._control, '2px');
});
