import assert from 'node:assert/strict';
import test from 'node:test';
import { transformSync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import { babelPlugin } from '../src/index.ts';

const compile = (source) =>
  transformSync(source, {
    filename: 'memo.tsx',
    configFile: false,
    babelrc: false,
    plugins: [babelPlugin],
    presets: [presetTypeScript],
  }).code;

test('only owned class call expressions receive dependency-aware memo wiring', () => {
  const code = compile(`import { _component, cx } from '@zerodep-vue/core';
    const rows = []; const styles = {};
    export const App = _component(() => <main>{rows.map((row, index) => <div class={cx(styles, row, index)}/>)}</main>);`);
  assert.match(code, /memoClass as/);
  assert.match(code, /\(\) => \[cx, styles, row, index\]/);
  assert.match(code, /\(\) => cx\(styles, row, index\)/);
  const ordinary = compile(
    `import { cx } from '@zerodep-vue/core'; const styles={}; export const render=()=> <div class={cx(styles)}/>;`,
  );
  assert(!ordinary.includes('memoClass'));
  const mutated = compile(
    `import { _component, cx } from '@zerodep-vue/core'; let count=0; export const App=_component(()=> <div class={cx(count++)}/>);`,
  );
  assert(!mutated.includes('memoClass'));
});

test('memo wiring preserves root writes, deletion and suspended expressions', () => {
  for (const expression of [
    'saved = cx(styles)',
    '(saved ??= cx(styles))',
    'delete state[cx(styles)]',
    'cx(styles) && delete state.value',
  ]) {
    const code = compile(`import { _component, cx } from '@zerodep-vue/core';
      let saved; const state = {}; const styles = 'ready';
      export const App = _component(() => <div class={${expression}}/>);`);
    assert(!code.includes('memoClass'), expression);
  }
  for (const [fn, expression] of [
    ['async function', 'await cx(styles)'],
    ['function*', 'yield cx(styles)'],
  ]) {
    const code = compile(`import { _component, cx } from '@zerodep-vue/core';
      const styles = 'ready';
      export const App = _component(() => { const render = ${fn}() {
        return <div class={${expression}}/>;
      }; return null; });`);
    assert(!code.includes('memoClass'), expression);
  }
});

test('class memo inputs exclude erased TypeScript references', () => {
  for (const expression of [
    'cx(styles as CssInput)',
    'build<CssInput>(styles)',
    'cx(styles) satisfies CssInput',
    'cx(styles as typeof typeOnlyValue)',
  ]) {
    const code = compile(`import { _component, cx } from '@zerodep-vue/core';
      import type { CssInput } from '@zerodep-vue/core';
      declare const typeOnlyValue: string;
      const styles = 'ready'; const build = <T,>(value: T) => value;
      export const App = _component(() => <div class={${expression}}/>);`);
    assert(!code.includes('CssInput'), expression);
    assert(!code.includes('typeOnlyValue'), expression);
    assert.match(code, /\(\) => \[(cx|build), styles\]/);
  }
});
