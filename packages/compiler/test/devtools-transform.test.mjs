import assert from 'node:assert/strict';
import test from 'node:test';
import { vitePlugin as vueTsx } from '../src/index.ts';

const source = `import { _component } from '@zerodep-vue/core';
import {ref} from 'vue';
import { createCssContext, SystemKeywords } from '@zerodep-vue/core';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

export const App = _component(()=>{
  const width=ref('20px');
  const style=s(()=>({width:width.value}));
  return <div css={{...{opacity:1}, width:width.value}}/>;
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
  const lines = source.split('\n');
  const line = lines.findIndex((text) => text.includes('width.value')) + 1;
  const column = lines[line - 1].indexOf('s(') + 1;
  assert.match(result.code, new RegExp(`line: ${line},\\s*column: ${column},\\s*kind: "css"`));
  const partialLine = lines.findIndex((text) => text.includes('css={{')) + 1;
  assert.match(result.code, new RegExp(`line: ${partialLine},\\s*column: \\d+,\\s*kind: "css"`));
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
