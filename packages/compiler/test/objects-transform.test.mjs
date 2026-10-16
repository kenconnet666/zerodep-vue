import assert from 'node:assert/strict';
import test from 'node:test';
import { transformAsync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { babelPlugin } from '../src/index.ts';

const compile = async (source) =>
  (
    await transformAsync(source, {
      filename: 'objects-contract.tsx',
      configFile: false,
      babelrc: false,
      plugins: [babelPlugin],
      presets: [presetTypeScript],
    })
  ).code;
async function evaluate(source) {
  const code = (await compile(source))
    .replace(
      /(['"])@zerodep-vue\/core\1/g,
      JSON.stringify(new URL('../../core/src/index.ts', import.meta.url).href),
    )
    .replace(/(['"])vue\1/g, JSON.stringify(import.meta.resolve('vue')));
  return import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
}

test('native primitives keep Vue DOM model/directive semantics across aliases and namespaces', async () => {
  const code =
    await compile(`import {_input as Input} from '@zerodep-vue/core'; import * as core from '@zerodep-vue/core';
    const Alias = Input; let text = ''; const a = <Alias v-model={text}/>; const b = <core._div css={{color:'red'}}/>;`);
  assert(code.includes('vModelText'));
  assert.match(code, /createVNode\("input"/);
  assert.match(code, /createCssVNode\("div"/);
  assert(!code.includes('resolveComponent'));
  const shadow = await compile(
    `import {_button} from '@zerodep-vue/core'; function view(_button){return <_button/>}`,
  );
  assert.match(shadow, /createVNode\(_button/);
});

test('CSS snapshots preserve expression order, count and throwing behavior even when overridden', async () => {
  const { App, calls } = await evaluate(`import {_component, _div} from '@zerodep-vue/core';
    export const calls=[];
    function read(value){calls.push(value);return value;}
    export const App = _component(({width}) => <_div css={[{width:read(width),color:read('red')},{width:read(30)}]}/>);`);
  const html = await renderToString(createSSRApp(App, { width: 20 }));
  assert.deepEqual(calls, [20, 'red', 30]);
  assert(!html.includes('css='));
  assert(html.includes('30px'));
  const { Throw } = await evaluate(`import {_component, _div} from '@zerodep-vue/core';
    export const Throw = _component(() => <_div css={[{color:(()=>{throw Error('evaluated')})()},{color:'red'}]}/>);`);
  await assert.rejects(renderToString(createSSRApp(Throw)), /evaluated/);
});

test('nested conditions and partial objects retain normal object/array expressions', async () => {
  const { App } = await evaluate(`import {_component, _div} from '@zerodep-vue/core';
    export const App = _component(({gap}) => {
      const common={display:'flex'};
      return <_div css={[{...common,gap}, {'aria-pressed': {true:{':hover':{color:'red'}}}}]} aria-pressed/>;
    });`);
  const html = await renderToString(createSSRApp(App, { gap: 10 }));
  assert(html.includes('10px'));
  assert(html.includes('aria-pressed="true"'));
});

test('static parent objects do not turn unknown nested spreads or factories into literal values', async () => {
  const { App } = await evaluate(`import {_component, _div} from '@zerodep-vue/core';
    export const App = _component(({color}) => <_div css={{
      display:'flex', ':hover': {...{color}},
      ':focus': () => ({color}),
      'data-state': { active: {...{backgroundColor:color}} }
    }} data-state="active"/>);`);
  const first = await renderToString(createSSRApp(App, { color: 'red' }));
  const next = await renderToString(createSSRApp(App, { color: 'blue' }));
  assert.equal(first.match(/class="([^"]+)"/)[1], next.match(/class="([^"]+)"/)[1]);
  assert(first.includes('red'));
  assert(next.includes('blue'));
});
