import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtempSync, mkdirSync, writeFileSync, unlinkSync, rmdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { vitePlugin as vueTsx } from '../src/index.ts';

function configured(command = 'serve') {
  const plugin = vueTsx();
  plugin.configResolved({
    root: '/project',
    command,
    isProduction: command === 'build',
    build: { sourcemap: true },
    plugins: [],
  });
  return plugin;
}

test('Vite prebundles installed CSS dependencies without making them mandatory for ordinary JSX', () => {
  const root = mkdtempSync(join(tmpdir(), 'zerodep-vite-dependencies-'));
  const directories = [
    'node_modules',
    'node_modules/@zerodep-vue',
    'node_modules/@zerodep-vue/core',
  ].map((path) => join(root, path));
  const manifest = join(directories[2], 'package.json');
  const created = new Set();
  try {
    const config = (command) => vueTsx().config({ root }, { command, mode: 'development' });
    assert.deepEqual(config('serve').optimizeDeps.include, ['vue']);
    for (const directory of directories) mkdirSync(directory);
    // 不生成 dist；源码工作区也必须能在首次开发启动时完成预优化。
    writeFileSync(
      manifest,
      JSON.stringify({ name: '@zerodep-vue/core', exports: './dist/index.js' }),
    );
    created.add(manifest);
    const installed = config('serve').optimizeDeps;
    assert(installed.include.includes('@zerodep-vue/core > @vue/devtools-api'));
    assert(installed.include.every((id) => !id.includes('@zerodep-vue/compiler')));
    assert.equal(config('build').optimizeDeps, undefined);
  } finally {
    for (const file of created) unlinkSync(file);
    for (const directory of directories.toReversed()) {
      try {
        rmdirSync(directory);
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
    rmdirSync(root);
  }
});

test('Vite handles imported aliases, default exports and source maps', async () => {
  const plugin = configured();
  const result = await plugin.transform(
    'import { defineComponent as component } from "vue"; export default component(() => () => <div>Hello</div>);',
    '/project/App.tsx?import',
  );
  assert(JSON.parse(result.map).sources.includes('/project/App.tsx'));
  assert(result.code.includes('createVNode'));
  assert(result.code.includes('__VUE_HMR_RUNTIME__.createRecord'));
  assert(result.code.includes('updated["default"]'));
});

test('same-name business functions are not registered as Vue components', async () => {
  const result = await configured().transform(
    'const defineComponent = (x) => x; export const App = defineComponent(() => <div/>);',
    '/project/App.tsx',
  );
  assert(!result.code.includes('__VUE_HMR_RUNTIME__'));
});

test('SSR registers modules without client HMR and production removes HMR', async () => {
  const code =
    'import { defineComponent } from "vue"; export const App = defineComponent(() => () => <div/>);';
  const ssr = await configured().transform(code, '/project/App.tsx', { ssr: true });
  assert(ssr.code.includes('virtual:zerodep-vue/ssr-register'));
  assert(!ssr.code.includes('import.meta.hot'));
  const built = await configured('build').transform(code, '/project/App.tsx');
  assert(!built.code.includes('__VUE_HMR_RUNTIME__'));
  assert(built.code.includes('#__PURE__'));
});
