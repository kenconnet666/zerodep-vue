import assert from 'node:assert/strict';
import test from 'node:test';
import { transformAsync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import { babelPlugin as plugin } from '../src/index.ts';

const compile = async (source, options = {}) =>
  (
    await transformAsync(source, {
      filename: 'css-contract.tsx',
      configFile: false,
      babelrc: false,
      plugins: [[plugin, options]],
      presets: [presetTypeScript],
    })
  )?.code;

test('CSS captures aliased bindings before JSX and keeps multiple template pieces', async () => {
  const code = await compile(
    'import {css,bx as bind} from "@zerodep-vue/core"; const x=1,y=2; export const render=()=> <div class={css({transform:`translate(${bind(x)}px, ${bind(y)}px)`})}/>;',
  );
  assert(code.includes('createCssVNode as'));
  assert.equal((code.match(/_binding\(\(\) => /g) ?? []).length, 2);
  assert(code.includes('_template'));
  assert(!code.includes('bind(x)'));
});

test('ordinary Vue can explicitly enable shared-style wiring, and custom pragma stays explicit', async () => {
  const code = await compile(
    'import {styles} from "./styles"; export const render=()=> <div class={styles.root}/>;',
    { zerodep: { css: true } },
  );
  assert(code.includes('@zerodep-vue/core'));
  assert(!code.includes('@zerodep-vue/compiler'));
  await assert.rejects(
    compile('import {css} from "@zerodep-vue/core"; <div class={css({color:"red"})}/>;', {
      pragma: 'custom',
    }),
    /ZV_CSS_PRAGMA/,
  );
});

test('CSS lowering does not capture a shadowed bx or rewrite a tagged template', async () => {
  const code = await compile(
    'import {bx,css} from "@zerodep-vue/core"; function use(bx){return bx(1);} const value=tag`a${1}`;',
  );
  assert(!code.includes('binding as'));
  assert(code.includes('tag`a${1}`'));
});

test('namespace bindings accept static keys while preserving dynamic and shadowed calls', async () => {
  const code = await compile(`import * as styles from '@zerodep-vue/core';
    const first=styles.bx(width);
    const second=styles['bx'](height);
    const dynamic=styles[key](height);
    function local(styles){ return styles.bx(width); }
  `);
  assert.equal((code.match(/_binding\(\(\) => /g) ?? []).length, 2);
  assert(code.includes('styles[key](height)'));
  assert(code.includes('return styles.bx(width)'));
  const unrelated = await compile(`import { bx } from './business'; const value=bx(width);`, {
    zerodep: { css: true },
  });
  assert(!unrelated.includes('binding as'));
});
