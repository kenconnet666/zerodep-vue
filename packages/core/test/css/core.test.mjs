import assert from 'node:assert/strict';
import test from 'node:test';
import { css, create } from '../../src/css/core.ts';
import { resolveClass } from '../../src/css/resolve.ts';
import { binding, template } from '../../src/css/values.ts';

test('later declarations replace only the same selector, condition and property', () => {
  const base = css({
    color: 'red',
    ':hover': { color: 'blue', opacity: 0.8 },
    '&::before': { color: 'green' },
    '& [data-part="icon"]': { color: 'purple' },
  });
  const result = resolveClass(css(base, { color: 'black' }));
  assert(!result.cssText.includes('color:red'));
  assert(result.cssText.includes('color:blue'));
  assert(result.cssText.includes('opacity:0.8'));
  assert(result.cssText.includes('color:green'));
  assert(result.cssText.includes('color:purple'));
  assert(result.cssText.includes('color:black'));
});

test('partial states and media declarations preserve unrelated values and clear only their own path', () => {
  const base = css({
    color: 'red',
    ':hover': { color: 'blue', opacity: 0.8 },
    ':disabled': { color: 'gray' },
    '@media (width < 600px)': { color: 'orange' },
  });
  const patched = resolveClass(css(base, { ':hover': { color: 'green' }, margin: 4 }));
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
  const removed = css({ ':hover': { color: null } });
  const cleared = resolveClass(css(base, removed));
  assert(!cleared.cssText.includes('color:blue'));
  assert(cleared.cssText.includes('color:red'));
  assert.deepEqual(
    resolveClass(css(css(base, removed), { padding: 2 })),
    resolveClass(css(base, removed, { padding: 2 })),
  );
  const reordered = resolveClass(css({ marginTop: 1, margin: 2 }, { marginTop: 3 }));
  assert(reordered.cssText.includes('margin:2px;margin-top:3px;'));
});

test('nested reusable styles rebase selectors and bindings without accepting opaque class names', () => {
  const styles = create({
    emphasis: { color: 'red', '& > span': { opacity: binding(() => 0.5) } },
  });
  const result = resolveClass(css({ ':hover': [false, styles.emphasis, { color: 'green' }] }));
  assert(result.cssText.includes(':hover{color:green;}'));
  assert(result.cssText.includes(':hover > span'));
  assert.deepEqual(Object.values(result.variables), ['0.5']);
  const media = resolveClass(css({ '@media (width > 600px)': styles.emphasis }));
  assert(media.cssText.includes('@media (width > 600px)'));
  assert.throws(() => css({ ':hover': css('external') }), /普通类名/);
  assert.throws(() => css({ ':hover': binding(() => 'red') }), /属性值/);
  assert.throws(() => css(true), /css 需要/);
});

test('composition retains clear markers, skips undefined and is associative', () => {
  const a = css({ color: 'red', padding: 8 });
  const b = css({ color: null });
  const c = css({ opacity: 0.5, padding: undefined });
  assert.deepEqual(resolveClass(css(css(a, b), c)), resolveClass(css(a, b, c)));
  assert(!resolveClass(css(a, b, c)).cssText.includes('color:'));
  assert(resolveClass(css(a, b, c)).cssText.includes('padding:8px'));
});

test('multiple bindings share rules across instances without sharing values', () => {
  const make = (x, y) =>
    css({ transform: template(['translate(', binding(() => x), 'px, ', binding(() => y), 'px)']) });
  const a = resolveClass(make(10, 20));
  const b = resolveClass(make(30, 40));
  assert.equal(a.ruleName, b.ruleName);
  assert.equal(a.cssText, b.cssText);
  assert.deepEqual(Object.values(a.variables), ['10', '20']);
  assert.deepEqual(Object.values(b.variables), ['30', '40']);
});

test('full CSS-wide keywords remove variable output and later values restore it', () => {
  let width = '200px';
  const style = css({ width: binding(() => width) });
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
  const result = resolveClass(css({ width: removed }, { width: shared, height: shared }));
  assert.equal(reads, 1);
  assert.deepEqual(Object.values(result.variables), ['10px', '10px']);
});

test('native classes, supports conditions and shorthands preserve declaration order', () => {
  const styles = create({
    root: {
      display: 'flex',
      '@supports (display: grid)': { display: 'grid' },
      '@media (width < 600px)': { padding: 4 },
    },
  });
  const result = resolveClass([
    'plain',
    { active: true, hidden: false },
    styles.root,
    css({ marginTop: 1 }, { margin: 2 }),
  ]);
  assert(result.className.startsWith('plain active zv-'));
  assert(result.cssText.includes('display:flex;'));
  assert(result.cssText.includes('@supports (display: grid)'));
  assert(result.cssText.includes('display:grid;'));
  assert(result.cssText.includes('@media (width < 600px)'));
  assert(result.cssText.includes('margin-top:1px;margin:2px;'));
});

test('selectors preserve ampersands inside attributes and invalid fragments are rejected', () => {
  const result = resolveClass(css({ '&[data-text="a&b"]': { content: '"safe; value"' } }));
  assert(result.cssText.includes('data-text="a&b"'));
  assert.throws(() => resolveClass(css({ color: 'red; background:black' })), /声明边界/);
  assert.throws(
    () =>
      resolveClass(css({ transform: template(['translate(', binding(() => 'initial'), 'px)']) })),
    /复合值/,
  );
});
