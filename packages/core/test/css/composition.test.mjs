import assert from 'node:assert/strict';
import test from 'node:test';
import { cx } from '../../src/css/composition.ts';
import { resolveClass } from '../../src/css/resolve.ts';
import { binding, template } from '../../src/css/bindings.ts';
import { CLASS } from '../../src/css/style-value.ts';
import { createCssContext, SystemKeywords } from '../../src/index.ts';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

test('cx defers flattening, snapshots input arrays and caches only stable static descriptions', () => {
  let reads = 0;
  let current = s.color('red');
  const live = {
    get [CLASS]() {
      reads++;
      return current[CLASS];
    },
  };
  const inputs = [live];
  const style = cx(cx(inputs), s.padding(4));
  inputs.length = 0;
  assert.equal(reads, 0);
  assert(resolveClass(style).cssText.includes('color:red'));
  current = s.color('blue');
  assert(resolveClass(style).cssText.includes('color:blue'));
  const stable = cx(s.color('red'), s.padding(4));
  assert.equal(stable[CLASS], stable[CLASS]);
  assert.equal(resolveClass(stable), resolveClass(stable));
  let width = 10;
  const dynamic = cx(s.width(binding(() => width)));
  const first = resolveClass(dynamic);
  width = 20;
  const second = resolveClass(dynamic);
  assert.notEqual(first, second);
  assert.deepEqual(Object.values(second.variables), ['20px']);
});

test('chains branch independently, retain declaration order and reject legacy objects', () => {
  const base = s.padding(8).color('black');
  const compact = base.padding(4);
  const danger = base.color('red');
  assert(resolveClass(base).cssText.includes('padding:8px;color:black;'));
  assert(resolveClass(compact).cssText.includes('color:black;padding:4px;'));
  assert(resolveClass(danger).cssText.includes('padding:8px;color:red;'));
  assert.equal(resolveClass(s).cssText, '');
  assert.equal(base.padding(undefined), base);
  assert(Object.isFrozen(base));
  assert(
    resolveClass(s.marginTop(4).margin(0).marginTop(8)).cssText.includes(
      'margin:0;margin-top:8px;',
    ),
  );
  assert.throws(() => cx({ color: 'red' }), /cx 只接受链式样式/);
  assert.throws(() => cx({ root: base }), /cx 只接受链式样式/);
  assert.throws(() => String(base), /不能转换成字符串/);
  const circular = [];
  circular.push(circular);
  assert.throws(() => cx(circular), /循环数组/);
});

test('later declarations replace only the same selector, condition and property', () => {
  const base = s
    .color('red')
    .select(':hover', s.color('blue').opacity(0.8))
    .select('&::before', s.color('green'))
    .select('& [data-part="icon"]', s.color('purple'));
  const result = resolveClass(cx(base, s.color('black')));
  assert(!result.cssText.includes('color:red'));
  assert(result.cssText.includes('color:blue'));
  assert(result.cssText.includes('opacity:0.8'));
  assert(result.cssText.includes('color:green'));
  assert(result.cssText.includes('color:purple'));
  assert(result.cssText.includes('color:black'));
});

test('partial states and media declarations preserve unrelated values and clear only their own path', () => {
  const base = s
    .color('red')
    .select(':hover', s.color('blue').opacity(0.8))
    .select(':disabled', s.color('gray'))
    .select('@media (width < 600px)', s.color('orange'));
  const patched = resolveClass(cx(base, s.select(':hover', s.color('green')).margin(4)));
  for (const value of [
    'color:red',
    'color:green',
    'opacity:0.8',
    'color:gray',
    'color:orange',
    'margin:4px',
  ])
    assert(patched.cssText.includes(value), patched.cssText);
  assert(!patched.cssText.includes('color:blue'));
  const removed = s.select(':hover', s.color(null));
  const cleared = resolveClass(cx(base, removed));
  assert(!cleared.cssText.includes('color:blue'));
  assert(cleared.cssText.includes('color:red'));
  assert.deepEqual(
    resolveClass(cx(cx(base, removed), s.padding(2))),
    resolveClass(cx(base, removed, s.padding(2))),
  );
  const reordered = resolveClass(cx(s.marginTop(1).margin(2), s.marginTop(3)));
  assert(reordered.cssText.includes('margin:2px;margin-top:3px;'));
});

test('nested reusable styles rebase selectors and bindings without accepting opaque class names', () => {
  const styles = { emphasis: s.color('red').select('& > span', s.opacity(binding(() => 0.5))) };
  const result = resolveClass(s.select(':hover', [false, styles.emphasis, s.color('green')]));
  assert(result.cssText.includes(':hover{color:green;}'));
  assert(result.cssText.includes(':hover > span'));
  assert.deepEqual(Object.values(result.variables), ['0.5']);
  const media = resolveClass(s.select('@media (width > 600px)', styles.emphasis));
  assert(media.cssText.includes('@media (width > 600px)'));
  assert.throws(() => s.select(':hover', cx('external')), /普通类名/);
  assert.throws(
    () =>
      s.select(
        ':hover',
        binding(() => 'red'),
      ),
    /cx 只接受链式样式/,
  );
  assert.throws(() => cx(true), /cx 只接受链式样式/);
});

test('composition retains clear markers, skips undefined and is associative', () => {
  const a = s.color('red').padding(8);
  const b = s.color(null);
  const c = s.opacity(0.5).padding(undefined);
  assert.deepEqual(resolveClass(cx(cx(a, b), c)), resolveClass(cx(a, b, c)));
  assert(!resolveClass(cx(a, b, c)).cssText.includes('color:'));
  assert(resolveClass(cx(a, b, c)).cssText.includes('padding:8px'));
});

test('multiple bindings share rules across instances without sharing values', () => {
  const make = (x, y) =>
    s.transform(template(['translate(', binding(() => x), 'px, ', binding(() => y), 'px)']));
  const a = resolveClass(make(10, 20));
  const b = resolveClass(make(30, 40));
  assert.equal(a.ruleName, b.ruleName);
  assert.equal(a.cssText, b.cssText);
  assert.deepEqual(Object.values(a.variables), ['translate(10px, 20px)']);
  assert.deepEqual(Object.values(b.variables), ['translate(30px, 40px)']);
});

test('optional bindings preserve defaults and null clears them without reading overridden getters', () => {
  let override;
  let defaults = 0;
  let overrides = 0;
  const fallback = binding(() => {
    defaults++;
    return 100;
  });
  const optional = binding(() => {
    overrides++;
    return override;
  });
  const style = cx(s.width(fallback).marginTop(4).margin(0), s.width(optional).marginTop(optional));
  let result = resolveClass(style);
  assert.deepEqual(Object.values(result.variables), ['100px']);
  assert(result.cssText.includes('margin-top:4px;margin:0;'));
  assert.equal(defaults, 1);
  assert.equal(overrides, 1);
  override = 180;
  result = resolveClass(style);
  assert.deepEqual(Object.values(result.variables), ['180px', '180px']);
  assert.equal(defaults, 1);
  override = null;
  result = resolveClass(style);
  assert(!result.cssText.includes('width:'));
  assert(!result.cssText.includes('margin-top:'));
  assert.equal(defaults, 1);
  override = undefined;
  assert.deepEqual(resolveClass(cx(s.width(100), s.width(null), s.width(optional))).cssText, '');
  const invalid = binding(() => {
    throw new Error('overridden');
  });
  assert(resolveClass(cx(s.width(invalid), s.width(20))).cssText.includes('width:20px'));
  const partial = template(['translateX(', optional, 'px)']);
  assert(
    resolveClass(cx(s.transform('none'), s.transform(partial))).cssText.includes('transform:none'),
  );
});

test('full CSS-wide keywords remove variable output and later values restore it', () => {
  let width = '200px';
  const style = s.width(binding(() => width));
  const first = resolveClass(style);
  width = 'INITIAL';
  const reset = resolveClass(style);
  assert(reset.cssText.includes('width:initial'));
  assert.deepEqual(reset.variables, {});
  assert(reset.dynamic);
  width = '300px';
  const restored = resolveClass(style);
  assert.equal(restored.ruleName, first.ruleName);
  assert.deepEqual(Object.values(restored.variables), ['300px']);
});

test('an overridden binding is not read and a shared active binding is read once', () => {
  let reads = 0;
  const shared = binding(() => {
    reads++;
    return 10;
  });
  const removed = binding(() => {
    throw new Error('inactive');
  });
  const result = resolveClass(cx(s.width(removed), s.width(shared).height(shared)));
  assert.equal(reads, 1);
  assert.deepEqual(Object.values(result.variables), ['10px', '10px']);
});

test('sibling targets use literal dynamic values while descendants retain inherited variables', () => {
  let color = 'red';
  let reads = 0;
  const value = binding(() => {
    reads++;
    return color;
  });
  const style = s
    .color(value)
    .select('& + span', s.color(value))
    .select('& > span + b', s.color(value))
    .select('& + div > span', s.color(value));
  const first = resolveClass(style);
  assert(first.cssText.includes(' + span{color:red;}'));
  assert(first.cssText.includes(' + div > span{color:red;}'));
  assert(first.cssText.includes(' > span + b{color:var('));
  assert.equal(Object.keys(first.variables).length, 2);
  assert.equal(reads, 1);
  color = 'blue';
  const next = resolveClass(style);
  assert(next.cssText.includes(' + span{color:blue;}'));
  assert.notEqual(next.ruleName, first.ruleName);
  assert(!next.cssText.includes('color:red'));
});

test('native classes, supports conditions and shorthands preserve declaration order', () => {
  const styles = {
    root: s
      .display('flex')
      .select('@supports (display: grid)', s.display('grid'))
      .select('@media (width < 600px)', s.padding(4)),
  };
  const result = resolveClass([
    'plain',
    { active: true, hidden: false },
    styles.root,
    cx(s.marginTop(1), s.margin(2)),
  ]);
  assert(result.className.startsWith('plain active zv-'));
  assert(result.cssText.includes('display:flex;'));
  assert(result.cssText.includes('@supports (display: grid)'));
  assert(result.cssText.includes('display:grid;'));
  assert(result.cssText.includes('@media (width < 600px)'));
  assert(result.cssText.includes('margin-top:1px;margin:2px;'));
});

test('selectors preserve ampersands inside attributes and invalid fragments are rejected', () => {
  const result = resolveClass(s.select('&[data-text="a&b"]', s.content('"safe; value"')));
  assert(result.cssText.includes('data-text="a&b"'));
  assert.throws(() => resolveClass(s.color('red; background:black')), /声明边界/);
  const quoted = resolveClass(s.content(template(['"', binding(() => 'inherit'), '"'])));
  assert.deepEqual(Object.values(quoted.variables), ['"inherit"']);
  const punctuation = resolveClass(
    s.content(template(['"', binding(() => '();[]; inherit !important'), '"'])),
  );
  assert.deepEqual(Object.values(punctuation.variables), ['"();[]; inherit !important"']);
  assert.deepEqual(
    Object.values(
      resolveClass(s.content(template(['"', binding(() => '_ordinary_text'), '"']))).variables,
    ),
    ['"_ordinary_text"'],
  );
});

test('templates bind complete CSS values and priority belongs to the final declaration', () => {
  let x = 10;
  let reads = 0;
  const part = binding(() => {
    reads++;
    return x;
  });
  const style = s.transform(template(['translate(', part, 'px, ', part, 'px)']));
  const first = resolveClass(style);
  assert.equal(reads, 1);
  assert.deepEqual(Object.values(first.variables), ['translate(10px, 10px)']);
  assert(!first.cssText.includes(')px'));
  x = 20;
  assert.equal(resolveClass(style).ruleName, first.ruleName);
  const url = resolveClass(
    s.backgroundImage(template(['url("data:image/svg+xml,', binding(() => '%3Csvg/%3E'), '")'])),
  );
  assert.deepEqual(Object.values(url.variables), ['url("data:image/svg+xml,%3Csvg/%3E")']);
  const content = resolveClass(s.content(template(['"', binding(() => 'a!important'), '"'])));
  assert.deepEqual(Object.values(content.variables), ['"a!important"']);
  assert(!content.cssText.includes('!important'));
  let value = 'red /* value */ ! /* priority */ IMPORTANT';
  const important = s.color(binding(() => value));
  const before = resolveClass(important);
  assert(before.cssText.includes(') !important;'));
  assert.deepEqual(Object.values(before.variables), ['red /* value */']);
  value = 'blue';
  const normal = resolveClass(important);
  assert(!normal.cssText.includes('important'));
  assert.notEqual(normal.ruleName, before.ruleName);
  value = 'inherit !important';
  assert(resolveClass(important).cssText.includes('color:inherit !important;'));
  assert.deepEqual(resolveClass(important).variables, {});
  assert(
    resolveClass(cx(s.color('red !important'), s.color('blue'))).cssText.includes('color:blue;'),
  );
  assert(
    !resolveClass(cx(s.color('red !important'), s.color('blue'))).cssText.includes('important'),
  );
  assert(
    resolveClass(cx(s.color('red'), s.color('blue !important'))).cssText.includes(
      'color:blue !important;',
    ),
  );
});
