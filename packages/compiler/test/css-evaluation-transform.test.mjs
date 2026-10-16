import assert from 'node:assert/strict';
import test from 'node:test';
import { transformSync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import { babelPlugin } from '../src/index.ts';
const compile = (source) =>
  transformSync(source, {
    filename: 'evaluation.tsx',
    configFile: false,
    babelrc: false,
    plugins: [babelPlugin],
    presets: [presetTypeScript],
  }).code;

test('native class expressions remain ordinary render code with no hidden cache', () => {
  const code = compile(`import {_component,_div} from '@zerodep-vue/core';
    const rows=[]; const build=(row,index)=>row+index;
    export const App=_component(()=> <main>{rows.map((row,index)=><_div class={build(row,index)}/>)}</main>);`);
  assert(!code.includes('memoClass'));
  assert.match(code, /"class": build\(row, index\)/);
});

test('assignments and deletion retain their original CSS expression position', () => {
  for (const expression of ['saved = 10', '(saved ??= 10)', '(delete state.value, 20)']) {
    const code = compile(`import {_component,_div} from '@zerodep-vue/core';
      let saved; const state={value:1}; export const App=_component(()=> <_div css={{width:${expression}}}/>);`);
    assert(!code.includes('memoClass'));
    assert.match(code, /width:/);
    assert.match(code, /\["width"\]/);
  }
});

test('type-only references erase without entering runtime CSS metadata', () => {
  for (const expression of [
    'styles as CssInput',
    'build<CssInput>(styles)',
    'styles satisfies CssInput',
    'styles as typeof typeOnlyValue',
  ]) {
    const code =
      compile(`import {_component,_div} from '@zerodep-vue/core'; import type {CssInput} from '@zerodep-vue/core';
      declare const typeOnlyValue: CssInput; const styles={width:10}; const build=<T,>(value:T)=>value;
      export const App=_component(()=> <_div css={${expression}}/>);`);
    assert(!code.includes('CssInput'));
    assert(!code.includes('typeOnlyValue'));
    assert(!code.includes('memoClass'));
    assert(code.includes('"css":'));
  }
});
