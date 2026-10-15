import assert from 'node:assert/strict';
import test from 'node:test';
import { parseAsync, transformAsync } from '@babel/core';
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

test('immutable helper aliases follow declaration scopes without capturing mutable or shadowed bindings', async () => {
  const code =
    await compile(`import {bx} from '@zerodep-vue/core'; import * as api from '@zerodep-vue/core';
    const bind = bx as typeof bx; const chained = bind; const namespace = api;
    const first = chained('red'); const second = namespace.bx('blue');
    let mutable = bx; const untouched = mutable('green');
    function shadow(chained){ return chained('black'); }
  `);
  assert.equal((code.match(/_binding\(\(\) => /g) ?? []).length, 2);
  assert(code.includes("mutable('green')"));
  assert(code.includes("chained('black')"));
  const cycle = await compile(`import {bx} from '@zerodep-vue/core';
    const first = second; const second = first; const result = first('red');`);
  assert(!cycle.includes('binding as'));
});

test('bx diagnoses await and yield crossing the synchronous binding boundary', async () => {
  for (const source of [
    'async function paint(){ return bx(await load()); }',
    'function* paint(){ return bx(yield "red"); }',
    'function* paint(){ return bx(yield* ["red"]); }',
  ]) {
    await assert.rejects(compile(`import {bx} from '@zerodep-vue/core'; ${source}`), /ZV_BX_ASYNC/);
  }
  const valid = await compile(`import {bx} from '@zerodep-vue/core';
    async function paint(){ const color = await load(); return bx(color); }
    const color = bx((function*(){ yield 'red'; })().next().value);`);
  await parseAsync(valid, { sourceType: 'module' });
});

test('CSS captures aliased bindings before JSX and keeps multiple template pieces', async () => {
  const code = await compile(
    `import { bx as bind, cx } from "@zerodep-vue/core";
import { createCssContext, SystemKeywords } from '@zerodep-vue/core';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();
 const x=1,y=2; export const render=()=> <div class={s.transform(\`translate(\${bind(x)}px, \${bind(y)}px)\`)}/>;`,
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
    compile(
      `import { cx } from "@zerodep-vue/core";
import { createCssContext, SystemKeywords } from '@zerodep-vue/core';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();
 <div class={s.color("red")}/>;`,
      {
        pragma: 'custom',
      },
    ),
    /ZV_CSS_PRAGMA/,
  );
});

test('CSS lowering does not capture a shadowed bx or rewrite a tagged template', async () => {
  const code = await compile(
    'import { bx, cx } from "@zerodep-vue/core";\nimport { createCssContext, SystemKeywords } from \'@zerodep-vue/core\';\nconst { useCss } = createCssContext(new SystemKeywords());\n function use(bx){return bx(1);} const value=tag`a${1}`;',
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
