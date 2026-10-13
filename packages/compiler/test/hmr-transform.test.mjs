import assert from 'node:assert/strict';
import test from 'node:test';
import { parseAsync } from '@babel/core';
import vueTsx from '../src/vite.ts';

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
const source = `import {ref} from 'vue'; import {_component} from '@zerodep-vue/tsx'; import {css,bx} from '@zerodep-vue/css';
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
  assert(original.includes('set ["plain"]'));
  assert.match(original, /_environment\d*\["plain"\]\+\+/);
  await parseAsync(original, { sourceType: 'module' });
  assert(!(await compile(source, 'build')).includes('@zerodep-vue/compiler/hmr'));
  assert(!(await compile(source, 'serve', true)).includes('@zerodep-vue/compiler/hmr'));
});

test('CSS module hot factories preserve callback receivers, globals and variable descriptions', async () => {
  const source = `import {css,createCss} from '@zerodep-vue/css';
    const invoke=function(){ if(this!==undefined) throw Error('receiver'); return 'red'; };
    export const styles=css.create({root:{color:invoke()}});
    export const vars=css.defineVars('control',{gap:'8px'});
  `;
  const code = await compile(source);
  assert(code.includes('"create"'));
  assert(code.includes('"defineVars"'));
  assert.match(code, /\(0, _environment\d*\["invoke"\]\)\(\)/);
  assert(code.includes('import.meta.hot.invalidate'));
  const globals = await compile(
    `import {css,createCssHost} from '@zerodep-vue/css'; const host=createCssHost(); css.global('reset',{body:{color:'red'}},{host});`,
  );
  assert(globals.includes('.onceGlobal('));
  assert(globals.includes('import.meta.hot.accept'));
});
