import assert from 'node:assert/strict';
import test from 'node:test';
import { objectClass, staticCss, valueBinding, createCssFactory } from '../../src/css/object.ts';
import { resolveClass } from '../../src/css/resolve.ts';
import { THEME } from '../../src/css/tokens.ts';
import { createCssVNode } from '../../src/css/vnode.ts';

const resolve = (input, options) => resolveClass(objectClass(input), undefined, options);

test('plain objects keep dynamic rules stable and numbers retain CSS property units', () => {
  const first = resolve({ width: 10, opacity: 0.5, zIndex: 2, '--gap': 3 });
  const next = resolve({ width: 30, opacity: 0.8, zIndex: 4, '--gap': 5 });
  assert.equal(first.ruleName, next.ruleName);
  assert.equal(first.cssText, next.cssText);
  assert.deepEqual(Object.values(first.variables), ['10px', '0.5', '2', '3']);
  assert.deepEqual(Object.values(next.variables), ['30px', '0.8', '4', '5']);
  const compiled = resolve(staticCss({ display: 'flex', width: valueBinding(20) }));
  assert(compiled.cssText.includes('display:flex'));
  assert.deepEqual(Object.values(compiled.variables), ['20px']);
});

test('arrays preserve shorthand order and null clears only equivalent simple state paths', () => {
  const style = resolve([
    staticCss({
      marginTop: 8,
      margin: 2,
      'aria-pressed': { true: { ':hover': { color: 'red' } } },
    }),
    staticCss({ marginTop: 4, ':hover': { 'aria-pressed': { true: { color: null } } } }),
  ]);
  assert(style.cssText.includes('margin:2px;margin-top:4px'));
  assert(!style.cssText.includes('color'));
  assert(resolve([staticCss({ width: 10 }), { width: undefined }]).cssText.includes('width:10px'));
  assert.equal(resolve([{ width: 10 }, { width: null }]).cssText, '');
});

test('ARIA and data values use escaped selectors, including false and nested media', () => {
  const state = 'quote"slash\\\nline';
  const result = resolve(
    staticCss({
      'aria-pressed': { false: { color: 'red' }, mixed: { color: 'blue' } },
      'data-name': { [state]: { '@media (width > 10em)': { ':focus-visible': { opacity: 0.8 } } } },
    }),
  );
  assert(result.cssText.includes('[aria-pressed="false"]'));
  assert(result.cssText.includes('[aria-pressed="mixed"]'));
  assert(result.cssText.includes('@media (width > 10em)'));
  assert(!result.cssText.includes('\n'));
  assert(result.cssText.includes(':focus-visible'));
});

test('CSS-wide keywords and important stay on declarations; siblings use literal fallback', () => {
  const result = resolve({
    color: 'inherit',
    width: '20px !important',
    '& + *': { height: 25 },
    '::before': { content: '"label"' },
  });
  assert(result.cssText.includes('color:inherit'));
  assert.match(result.cssText, /width:var\(--zv-[^)]+\)\s*!important/);
  assert(result.cssText.includes('height:25px'));
  assert.deepEqual(Object.values(result.variables), ['20px', '"label"']);
});

test('factories are evaluated once per consumption and theme lookup keeps camelCase keys', () => {
  let width = 20;
  let reads = 0;
  const source = () => {
    reads++;
    return { width };
  };
  assert.deepEqual(Object.values(resolve([source, source]).variables), ['20px']);
  assert.equal(reads, 1);
  width = 40;
  assert.deepEqual(Object.values(resolve(source).variables), ['40px']);
  assert.equal(reads, 2);
  let color = 'red';
  const css = createCssFactory((property, name) => {
    assert.equal(property, 'backgroundColor');
    assert.equal(name, '_brand');
    return { [THEME]: { property, name, read: () => color } };
  });
  const styled = css({ backgroundColor: '_brand' });
  assert.deepEqual(Object.values(resolve(styled).variables), ['red']);
  color = 'blue';
  assert.deepEqual(Object.values(resolve(styled).variables), ['blue']);
});

test('invalid object inputs cannot masquerade as styles or overwrite runtime variables', () => {
  const cyclic = [];
  cyclic.push(cyclic);
  const recursive = () => recursive;
  for (const input of [
    cyclic,
    recursive,
    Promise.resolve({ width: 20 }),
    { width: true },
    'class-name',
    { '--zv-own': 'red' },
  ])
    assert.throws(() => resolve(input));
  assert.throws(() => resolve({ '@font-face': { fontFamily: 'bad' } }), /局部/);
  assert.throws(() => resolve({ 'aria-pressed': true }), /状态映射/);
});

test('empty CSS inputs are no-ops and do not require a render owner', () => {
  for (const css of [undefined, null, false, [], {}]) {
    const node = createCssVNode('div', { css, title: 'plain', style: { color: 'red' } });
    assert.equal(node.props.title, 'plain');
    assert.equal(node.props.style.color, 'red');
    assert(!('css' in node.props));
    assert(!('class' in node.props));
  }
});
