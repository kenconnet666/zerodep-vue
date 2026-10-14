import assert from 'node:assert/strict';
import { mkdir, readFile, realpath, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { transformAsync } from '@babel/core';
import presetTypescript from '@babel/preset-typescript';
import { build } from 'vite';
import { createSSRApp, ref } from 'vue';
import { renderToString } from '@vue/server-renderer';
import compiler from '@zerodep-vue/compiler';
import vueTsx from '@zerodep-vue/compiler/vite';
import { getCssHost } from '@zerodep-vue/css';
import { assertRuntimeCode, assertRuntimeChunks } from './runtime-boundary.mjs';

const root = process.cwd();
const require = createRequire(import.meta.url);
assert.equal(typeof require('@zerodep-vue/compiler'), 'function');
assert.equal(typeof require('@zerodep-vue/compiler/vite'), 'function');
for (const entry of ['runtime', 'hmr', 'devtools'])
  assert.throws(() => require.resolve(`@zerodep-vue/compiler/${entry}`), {
    code: 'ERR_PACKAGE_PATH_NOT_EXPORTED',
  });
assert.equal(typeof require('@zerodep-vue/css').css, 'function');
assert.equal(typeof require('@zerodep-vue/css').createTheme, 'function');
assert.equal('createCss' in require('@zerodep-vue/css'), false);
assert.equal('defineVars' in require('@zerodep-vue/css'), false);
assert.equal(typeof require('@zerodep-vue/tsx')._component, 'function');
const entries = {};
for (const name of ['compiler', 'css', 'tsx']) {
  const entry = await realpath(require.resolve(`@zerodep-vue/${name}`));
  assert(
    entry.startsWith(await realpath(root)) && entry.includes('dist'),
    'Package entry escaped the consumer or selected source.',
  );
  assert(!entry.includes(process.env.ZV_FORBIDDEN_WORKSPACE));
  entries[name] = entry.replace(root, '.');
  const peer = createRequire(entry)('vue');
  assert.equal(peer.ref, ref, `${name} loaded a different Vue instance.`);
}
assert.equal(require('typescript/package.json').version, '6.0.3');
await mkdir('.output', { recursive: true });
const source = await readFile('App.tsx', 'utf8');
const transformed = await transformAsync(source, {
  filename: resolve('App.tsx'),
  babelrc: false,
  configFile: false,
  plugins: [compiler],
  presets: [presetTypescript],
  sourceMaps: true,
});
assert(transformed?.code && transformed.map);
await assertRuntimeCode(transformed.code, 'Babel ESM');
await writeFile('.output/babel.mjs', transformed.code);
const artifacts = [];
const check = async (module, label) => {
  const context = {};
  try {
    const html = await renderToString(createSSRApp(module.App), context);
    const styles = getCssHost(context)?.renderStyles();
    for (const expected of ['package-state', 'typed-row', 'footer-content', 'async-package-ready'])
      assert(html.includes(expected), `${label} omitted ${expected}`);
    assert(
      styles?.includes('@keyframes') && styles.includes('body{margin:0;}'),
      `${label} did not collect all CSS.`,
    );
    assert(html.includes('--zv-') && html.includes('#2563eb'));
    artifacts.push({ label, html, styles, cssRules: getCssHost(context).snapshot().length });
  } finally {
    getCssHost(context)?.dispose();
  }
};
await check(await import(pathToFileURL(resolve('.output/babel.mjs')).href), 'Babel ESM');
const plugins = [vueTsx({ optimize: true })];
const base = {
  root,
  configFile: false,
  logLevel: 'error',
  plugins,
  resolve: { dedupe: ['vue'] },
  build: { emptyOutDir: false, sourcemap: true, minify: false },
};
const client = await build({
  ...base,
  build: {
    ...base.build,
    outDir: '.output/client',
    lib: { entry: resolve('App.tsx'), formats: ['es'], fileName: () => 'consumer.mjs' },
    rolldownOptions: { external: ['vue'] },
  },
});
const chunks = await assertRuntimeChunks(client, 'Vite client');
assert(chunks.some((chunk) => chunk.code.includes('package-state')));
// 将运行时也打入 SSR bundle，核对外部 getCssHost 仍能读取同一个请求；不依赖模块单例偶合。
const server = await build({
  ...base,
  ssr: { noExternal: ['@zerodep-vue/css', '@zerodep-vue/tsx'] },
  build: {
    ...base.build,
    ssr: resolve('App.tsx'),
    outDir: '.output/server',
    rolldownOptions: { output: { entryFileNames: 'consumer.mjs' } },
  },
});
const serverChunks = await assertRuntimeChunks(server, 'Vite SSR');
await check(
  await import(pathToFileURL(resolve('.output/server/consumer.mjs')).href),
  'Vite SSR bundled runtime',
);
assert.equal(artifacts[0].html, artifacts[1].html);
assert.equal(artifacts[0].styles, artifacts[1].styles);
await writeFile(
  'runtime-report.json',
  JSON.stringify(
    {
      entries,
      commonjs: true,
      esm: true,
      singleVue: true,
      runtimeBoundary: {
        babel: true,
        clientChunks: chunks.length,
        serverChunks: serverChunks.length,
      },
      artifacts,
      clientChunks: chunks.map((chunk) => ({ file: chunk.fileName, bytes: chunk.code.length })),
    },
    null,
    2,
  ),
);
console.log(
  'Packed runtime: ESM/CJS, single Vue, Babel, Vite client/SSR and cross-bundle CSS collection passed.',
);
