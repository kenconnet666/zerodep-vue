import assert from 'node:assert/strict';
import test from 'node:test';
import { objectClass, staticCss } from '../../src/css/object.ts';
import { resolveClass } from '../../src/css/resolve.ts';
const resolve = (input) => resolveClass(objectClass(input));

test('selector lists reject empty branches and preserve quoted ampersands', () => {
  for (const selector of [
    '&:hover,,&:focus',
    ',&:hover',
    '&:hover,',
    '&:hover, /* empty */, &:focus',
    ',',
  ])
    assert.throws(() => resolve({ [selector]: { color: 'red' } }), /选择器.*空|无效 CSS 属性/);
  const result = resolve({ '&:hover, &:focus': { color: 'red' } });
  assert.equal(result.declarations.length, 2);
  assert(!result.cssText.includes(`.${result.ruleName}{`));
  assert(
    resolve({ '&[data-text="a&b"]': { content: '"safe; value"' } }).cssText.includes(
      'data-text="a&b"',
    ),
  );
});

test('arrays retain normal identity and sources defer reads until each consumption', () => {
  let color = 'red',
    reads = 0;
  const source = () => {
    reads++;
    return { color };
  };
  const input = [source, { padding: 4 }];
  assert.equal(reads, 0);
  assert.deepEqual(Object.values(resolve(input).variables), ['red', '4px']);
  color = 'blue';
  assert.deepEqual(Object.values(resolve([input, source]).variables), ['4px', 'blue']);
  assert.equal(reads, 2);
  input.pop();
  assert.deepEqual(Object.values(resolve(input).variables), ['blue']);
  const circular = [];
  circular.push(circular);
  assert.throws(() => resolve(circular), /循环/);
});

test('ordered objects branch independently and preserve shorthand replacement order', () => {
  const base = staticCss({ padding: 8, color: 'black' });
  assert(resolve(base).cssText.includes('padding:8px;color:black;'));
  assert(resolve([base, staticCss({ padding: 4 })]).cssText.includes('color:black;padding:4px;'));
  assert(resolve([base, staticCss({ color: 'red' })]).cssText.includes('padding:8px;color:red;'));
  const ordered = resolve([
    staticCss({ marginTop: 4 }),
    staticCss({ margin: 0 }),
    staticCss({ marginTop: 8 }),
  ]);
  assert(ordered.cssText.includes('margin:0;margin-top:8px;'));
  assert(resolve(base).cssText.includes('color:black'));
});

test('partial states preserve unrelated paths and null clears only its own declaration', () => {
  const base = {
    color: 'red',
    ':hover': { color: 'blue', opacity: 0.8 },
    ':disabled': { color: 'gray' },
    '&::before': { color: 'purple' },
    '@media (width < 600px)': { color: 'orange' },
  };
  const removed = { ':hover': { color: null } };
  const patched = resolve([base, removed, { margin: 4 }]);
  assert.deepEqual(Object.values(patched.variables), [
    'red',
    '0.8',
    'gray',
    'purple',
    'orange',
    '4px',
  ]);
  assert(patched.cssText.includes(':hover{opacity:var('));
  const nestedArray = resolve([[base, removed], { padding: 2 }]);
  const flatArray = resolve([base, removed, { padding: 2 }]);
  assert.equal(nestedArray.cssText, flatArray.cssText);
  assert.deepEqual(nestedArray.variables, flatArray.variables);
  const nested = resolve({ ':hover': [base, { color: 'green' }] });
  assert(nested.cssText.includes(':disabled:hover'));
  assert(nested.cssText.includes('@media (width < 600px)'));
  assert.throws(() => resolve({ ':hover': 'external' }), /类名请写在 class/);
});

test('undefined preserves defaults and null clears; ordinary source expressions still execute', () => {
  let override,
    reads = 0;
  const source = () => [{ width: (reads++, 100) }, { width: override }];
  assert.deepEqual(Object.values(resolve(source).variables), ['100px']);
  override = 180;
  assert.deepEqual(Object.values(resolve(source).variables), ['180px']);
  override = null;
  assert.equal(resolve(source).cssText, '');
  assert.equal(reads, 3);
  assert.equal(resolve([{ width: 100 }, { width: null }, { width: undefined }]).cssText, '');
  assert.throws(
    () =>
      resolve(() => [
        {
          width: (() => {
            throw Error('ordinary JS');
          })(),
        },
        { width: 20 },
      ]),
    /ordinary JS/,
  );
});

test('complete interpolated values share rules while CSS-wide values remain real declarations', () => {
  const make = (x, y) => ({ transform: `translate(${x}px, ${y}px)` });
  const first = resolve(make(10, 20)),
    second = resolve(make(30, 40));
  assert.equal(first.ruleName, second.ruleName);
  assert.deepEqual(Object.values(second.variables), ['translate(30px, 40px)']);
  for (const keyword of ['initial', 'inherit', 'unset', 'revert', 'revert-layer']) {
    const result = resolve({ width: keyword.toUpperCase() });
    assert(result.cssText.includes(`width:${keyword}`));
    assert.deepEqual(result.variables, {});
  }
  assert.equal(resolve({ width: '200px' }).ruleName, resolve({ width: '300px' }).ruleName);
});

test('sibling targets use literals while descendants and pseudo elements inherit variables', () => {
  const make = (color) => ({
    color,
    '& + span': { color },
    '& > span + b': { color },
    '& + div > span': { color },
    '&::before': { color },
  });
  const first = resolve(make('red'));
  assert(first.cssText.includes(' + span{color:red;}'));
  assert(first.cssText.includes(' + div > span{color:red;}'));
  assert(first.cssText.includes(' > span + b{color:var('));
  assert(first.cssText.includes('::before{color:var('));
  assert.equal(Object.keys(first.variables).length, 3);
  const next = resolve(make('blue'));
  assert.notEqual(next.ruleName, first.ruleName);
  assert(!next.cssText.includes('color:red'));
});

test('declaration boundaries and priority preserve quoted text and native CSS syntax', () => {
  assert.throws(() => resolve({ color: 'red; background:black' }), /声明边界/);
  for (const text of ['inherit', '();[]; inherit !important', '_ordinary_text', 'a!important'])
    assert.deepEqual(Object.values(resolve({ content: `"${text}"` }).variables), [`"${text}"`]);
  assert.deepEqual(
    Object.values(resolve({ backgroundImage: 'url("data:image/svg+xml,%3Csvg/%3E")' }).variables),
    ['url("data:image/svg+xml,%3Csvg/%3E")'],
  );
  const important = resolve({ color: 'red /* value */ ! /* priority */ IMPORTANT' });
  assert(important.cssText.includes(') !important;'));
  assert.deepEqual(Object.values(important.variables), ['red /* value */']);
  assert(!resolve([{ color: 'red !important' }, { color: 'blue' }]).cssText.includes('important'));
  assert(resolve([{ color: 'red' }, { color: 'blue !important' }]).cssText.includes('!important'));
  assert(resolve({ color: 'inherit !important' }).cssText.includes('color:inherit !important;'));
});
