import assert from 'node:assert/strict';
import test from 'node:test';
import { vitePlugin as vueTsx } from '../src/index.ts';

const source = `import {_component} from '@zerodep-vue/core';
import {css,bx} from '@zerodep-vue/core';
import {ref} from 'vue';
export const App = _component(()=>{
  const width=ref('20px');
  const style=css({width:bx(width.value)});
  return <div class={style}/>;
});`;
async function compile(command, ssr = false) {
  const plugin = vueTsx();
  plugin.configResolved({
    root: '/project',
    command,
    isProduction: command === 'build',
    build: { sourcemap: true },
    plugins: [],
  });
  return plugin.transform(source, '/project/App.tsx', { ssr });
}

test('development traces keep source locations and the browser-only inspector entry', async () => {
  const result = await compile('serve');
  assert(result.code.includes('@zerodep-vue/core'));
  assert(!result.code.includes('@zerodep-vue/compiler'));
  assert(result.code.includes('enableInspection'));
  const column = source.split('\n')[5].indexOf('width.value') + 1;
  assert.match(result.code, new RegExp(`line: 6,\\s*column: ${column},\\s*kind: "binding"`));
  assert(result.code.includes('kind: "class"'));
  assert(JSON.parse(result.map).sources.includes('/project/App.tsx'));
});
test('production and SSR contain no inspection imports or source-location metadata', async () => {
  for (const result of [await compile('build'), await compile('serve', true)]) {
    assert(!result.code.includes('enableInspection'));
    assert(!result.code.includes('createInspectedVNode'));
    assert(!result.code.includes('traceCss'));
    assert(!result.code.includes('kind: "binding"'));
  }
});
