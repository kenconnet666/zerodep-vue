import assert from 'node:assert/strict';
import test from 'node:test';
import { parseAsync } from '@babel/core';
import { vitePlugin as vueTsx } from '../src/index.ts';

async function compile(source, command = 'serve', ssr = false) {
  const plugin = vueTsx();
  plugin.configResolved({
    root: '/project',
    command,
    isProduction: command === 'build',
    build: { sourcemap: true },
    plugins: [],
  });
  return (await plugin.transform(source, '/project/App.tsx', { ssr })).code;
}
const stamp = (code) => code.match(/import\.meta\.hot,\s*"([a-f0-9]{24})"/)?.[1];
const source = `import { ref } from 'vue'; import { _component } from '@zerodep-vue/core'; import { css, bx, cx, globalCss } from '@zerodep-vue/core';
  export const App = _component(()=> { const count=ref(1); let plain=0;
    const style=css({color:'red',width:bx(count.value)});
    return <button class={style} onClick={()=>{count.value++;plain++;}}>{count.value}:{plain}</button>;
  });`;

test('hot signatures distinguish isolated style/render edits from initialization changes', async () => {
  const original = await compile(source);
  const style = await compile(source.replace("color:'red'", "color:'blue'"));
  const render = await compile(
    source.replace('{count.value}:{plain}', 'Count {count.value + 1}:{plain}'),
  );
  const setup = await compile(source.replace('ref(1)', 'ref(2)'));
  assert(stamp(original));
  assert.equal(stamp(original), stamp(style));
  assert.equal(stamp(original), stamp(render));
  assert.notEqual(stamp(original), stamp(setup));
  assert(original.includes('.render('));
  assert(original.includes('.style('));
  assert(original.includes('@zerodep-vue/core/hmr'));
  assert(!original.includes('@zerodep-vue/compiler'));
  assert(original.includes('set ["plain"]'));
  assert.match(original, /_environment\d*\["plain"\]\+\+/);
  await parseAsync(original, { sourceType: 'module' });
  assert(!(await compile(source, 'build')).includes('@zerodep-vue/core/hmr'));
  assert(!(await compile(source, 'serve', true)).includes('@zerodep-vue/core/hmr'));
});

test('CSS module hot factories preserve callback receivers, globals and custom properties', async () => {
  const source = `import { css, cx, globalCss } from '@zerodep-vue/core';
    const invoke=function(){ if(this!==undefined) throw Error('receiver'); return 'red'; };
    export const styles=cx({root:{color:invoke()}});
    export const variables=css({'--control-gap':'8px'});
  `;
  const code = await compile(source);
  assert(code.includes('"create"'));
  assert(code.includes('"class"'));
  assert.match(code, /\(0, _environment\d*\["invoke"\]\)\(\)/);
  assert(code.includes('import.meta.hot.invalidate'));
  const globals = await compile(
    `import { createCssHost, globalCss } from '@zerodep-vue/core'; const host=createCssHost(); globalCss('reset',{body:{color:'red'}},{host});`,
  );
  assert(globals.includes('.onceGlobal('));
  assert(globals.includes('import.meta.hot.accept'));
});

test('independent CSS entries and destructured theme aliases retain hot factories', async () => {
  const source = `import * as api from '@zerodep-vue/core';
    import {cx as named, keyframes as animation} from '@zerodep-vue/core';
    const context=api.createTheme(new api.SystemKeywords());
    const {css:paint,cx:styles,keywords:k,keyframes:frames}=context;
    const compose=paint;
    export const first=named({root:{color:'red'}});
    export const second=styles({root:{display:k.display.flex}});
    export const value=compose(first.root,second.root);
    export const fade=frames({from:{opacity:0},to:{opacity:1}});
    export const another=animation({from:{opacity:0},to:{opacity:1}});
  `;
  const before = await compile(source);
  const after = await compile(source.replace("color:'red'", "color:'blue'"));
  assert(stamp(before));
  assert.equal(stamp(before), stamp(after));
  for (const kind of ['create', 'class', 'keyframes']) assert(before.includes(`"${kind}"`), before);
  const shadow = await compile(`import {cx} from '@zerodep-vue/core';
    export function user(cx){return cx({root:{color:'red'}});}`);
  assert(!shadow.includes('registerModule'));
  assert(!shadow.includes('traceCss'));
  // createTheme 建立真实主题上下文，不能再被旧逻辑当作一个 class 包装。
  const factoryOnly =
    await compile(`import {createTheme as theme, SystemKeywords} from '@zerodep-vue/core';
    export const context=theme(new SystemKeywords());`);
  assert(!factoryOnly.includes('registerModule'));
  assert(!factoryOnly.includes('traceCss'));
});
