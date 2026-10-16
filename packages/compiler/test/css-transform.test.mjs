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
  ).code;

test('factory aliases follow their declaration scope and mutable or shadowed calls stay ordinary', async () => {
  const code = await compile(`import * as api from '@zerodep-vue/core';
    const context = api.createCssContext(new api.SystemKeywords());
    const {useCss: usePaint} = context; const css = usePaint(); const alias=css;
    export const first=alias({color:'red',width:read()});
    let mutable=css; mutable=other; export const second=mutable({color:'blue'});
    function shadow(alias){return alias({color:'black'});}
  `);
  assert.equal((code.match(/_staticCss\(/g) ?? []).length, 1);
  assert.match(code, /\["width"\]/);
  assert.match(code, /mutable\(\{/);
  assert.match(code, /return alias\(\{/);
  const cycle = await compile(
    `import {_div} from '@zerodep-vue/core'; const first=second; const second=first; first({color:'red'});`,
  );
  assert(!cycle.includes('staticCss as'));
});

test('interpolation remains normal JS with one complete dynamic property value', async () => {
  const code =
    await compile(`import {_div,createCssContext,SystemKeywords} from '@zerodep-vue/core';
    const {useCss}=createCssContext(new SystemKeywords()); const css=useCss();
    const x=1,y=2; export const render=()=> <_div css={{transform:\`translate(\${x}px, \${y}px)\`}}/>;
    const reusable=css(()=>({width:x, color:'red'}));
    const tagged=tag\`a\${x}\`; const joined='a'+x;
  `);
  assert(code.includes('createCssVNode as'));
  assert.match(code, /\["transform"\]/);
  assert.match(code, /\["width"\]/);
  assert(code.includes('tag`a${x}`'));
  assert(!code.includes('_template'));
  assert(!code.includes('valueBinding'));
  await parseAsync(code, { sourceType: 'module' });
});

test('ordinary Vue can explicitly enable CSS wiring and a custom pragma is diagnosed', async () => {
  const code = await compile(
    'import {styles} from "./styles"; export const render=()=> <div css={styles.root}/>;',
    { zerodep: { css: true } },
  );
  assert(code.includes('createCssVNode as'));
  assert(!code.includes('@zerodep-vue/compiler'));
  await assert.rejects(
    compile('import {_div} from "@zerodep-vue/core"; <_div css={{color:"red"}}/>;', {
      pragma: 'custom',
    }),
    /ZV_CSS_PRAGMA/,
  );
});

test('CSS does not move await or yield across a new function boundary', async () => {
  for (const [fn, value] of [
    ['async function', 'await load()'],
    ['function*', 'yield 20'],
  ]) {
    const code = await compile(
      `import {_div} from '@zerodep-vue/core'; ${fn} paint(){return <_div css={{width:${value}}}/>;}`,
    );
    assert(code.includes(value));
    await parseAsync(code, { sourceType: 'module' });
  }
});

test('clone aliases use CSS-aware cloning while unrelated helpers stay untouched', async () => {
  const code = await compile(`import {_div} from '@zerodep-vue/core'; import * as vue from 'vue';
    const clone=vue.cloneVNode; const element=<_div css={{color:'red'}}/>;
    export const next=clone(element,{css:{color:'blue'}});
    function local(vue){return vue.cloneVNode(element);}
  `);
  assert(code.includes('cloneCssVNode as'));
  assert(code.includes('return vue.cloneVNode(element)'));
  const business = await compile(
    `import {css} from './business'; export const value=css({color:'red'});`,
  );
  assert(!business.includes('staticCss'));
});
