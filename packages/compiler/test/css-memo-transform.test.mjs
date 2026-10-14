import assert from 'node:assert/strict';
import test from 'node:test';
import { transformSync } from '@babel/core';
import { babelPlugin } from '../src/index.ts';

const compile = (source) =>
  transformSync(source, {
    filename: 'memo.tsx',
    configFile: false,
    babelrc: false,
    plugins: [babelPlugin],
  }).code;

test('only owned class call expressions receive dependency-aware memo wiring', () => {
  const code = compile(`import { _component, cx } from '@zerodep-vue/core';
    const rows = []; const styles = {};
    export const App = _component(() => <main>{rows.map((row, index) => <div class={cx(styles, row, index)}/>)}</main>);`);
  assert.match(code, /memoClass as/);
  assert.match(code, /\[cx, styles, row, index\]/);
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
