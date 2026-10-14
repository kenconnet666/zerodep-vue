import assert from 'node:assert/strict';
import test from 'node:test';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, createServer } from 'vite';
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { vitePlugin as vueTsx } from '../src/index.ts';

const root = fileURLToPath(new URL('../../../', import.meta.url));
const entry = resolve(root, 'fixtures/legacy-tsx/src/Counter.tsx');

// 完整构建/SSR 入口由 CI 执行；本地修改只选 vite.test.mjs 的定点转换。
test('Vite builds ordinary TSX and loads the same source through SSR', async () => {
  const built = await build({
    root,
    configFile: false,
    logLevel: 'silent',
    plugins: [vueTsx()],
    build: {
      write: false,
      sourcemap: true,
      lib: { entry, formats: ['es'] },
      rolldownOptions: { external: ['vue'] },
    },
  });
  const outputs = (Array.isArray(built) ? built : [built]).flatMap((item) => item.output);
  const chunk = outputs.find((item) => item.type === 'chunk');
  assert(chunk?.code.includes('createVNode'));
  assert(chunk.map?.sources.some((source) => source.includes('Counter.tsx')));
  const server = await createServer({
    root,
    configFile: false,
    logLevel: 'silent',
    plugins: [vueTsx()],
    server: { middlewareMode: true },
  });
  try {
    const { Counter } = await server.ssrLoadModule(entry);
    const context = {};
    assert((await renderToString(createSSRApp(Counter), context)).includes('计数：0'));
    assert(context.modules.has('fixtures/legacy-tsx/src/Counter.tsx'));
  } finally {
    await server.close();
  }
});
