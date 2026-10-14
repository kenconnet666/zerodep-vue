import assert from 'node:assert/strict';
import { SourceMap } from 'node:module';
import test from 'node:test';
import { vitePlugin as vueTsx } from '../src/index.ts';

test('render handler source maps point to author TSX in development, production and SSR', async () => {
  const source = `import { _component } from '@zerodep-vue/core';
import { bx, useCss, cx } from '@zerodep-vue/core';
import {ref} from 'vue';
const s = useCss();

export default _component(()=>{
  const count=ref(0);
  return <button class={s.width(bx(count.value))} onClick={()=>{throw new Error('mapped-throw')}}>test</button>;
});`;
  for (const [command, ssr] of [
    ['serve', false],
    ['build', false],
    ['serve', true],
  ]) {
    const plugin = vueTsx();
    plugin.configResolved({
      root: '/project',
      command,
      isProduction: command === 'build',
      build: { sourcemap: true },
      plugins: [],
    });
    const output = await plugin.transform(source, '/project/Map.tsx', { ssr });
    const prefix = output.code.slice(0, output.code.indexOf('new Error'));
    const lines = prefix.split('\n');
    const entry = new SourceMap(JSON.parse(output.map)).findEntry(
      lines.length - 1,
      lines.at(-1).length,
    );
    assert.equal(entry.originalSource, '/project/Map.tsx');
    const line = source.split('\n').findIndex((text) => text.includes('new Error'));
    assert.equal(entry.originalLine, line);
    assert.equal(entry.originalColumn, source.split('\n')[line].indexOf('new Error'));
  }
});
