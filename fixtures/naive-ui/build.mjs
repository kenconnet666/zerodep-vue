import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import { basename, dirname, relative, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { transformAsync, types as t } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import officialJsx from '@vue/babel-plugin-jsx';
import { build, transformWithOxc } from 'vite';
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import forkJsx from '../../packages/compiler/src/index.ts';
import { fixtureRoot, prepare, root, source, sourceRoot } from './prepare.mjs';
import { inventory, productionFiles } from './inventory.mjs';
import { emitDeclarations } from './declarations.mjs';

const mode = process.argv[2];
assert(['classic', 'official', 'fork'].includes(mode), 'Choose classic, official, or fork.');
await prepare();
const expected = JSON.parse(await readFile(resolve(fixtureRoot, 'production-tsx.json'), 'utf8'));
assert.deepEqual(await inventory(), expected, 'Production input manifest changed.');
const output = resolve(fixtureRoot, '.generated', mode);
const reportPath = resolve(root, 'test-results', `naive-${mode}.json`);
await mkdir(dirname(reportPath), { recursive: true });
await mkdir(output, { recursive: true });
const require = createRequire(import.meta.url);
const report = {
  source,
  mode,
  toolchain: {
    node: process.version,
    vue: require('vue/package.json').version,
    babel: require('@babel/core/package.json').version,
    typescript: require('typescript/package.json').version,
    vite: require('vite/package.json').version,
    compilerCommit: process.env.GITHUB_SHA ?? 'local-worktree',
  },
  transformed: [],
  success: false,
};

try {
  // 每个生产文件均显式经过所选路径。独立发射后再打包，tree shaking 不会掩盖未命中的 TSX。
  for (const file of productionFiles()) {
    const target = resolve(output, file.replace(/\.tsx?$/, '.js'));
    await mkdir(dirname(target), { recursive: true });
    if (!/\.tsx?$/.test(file)) {
      await copyFile(resolve(sourceRoot, file), target);
      continue;
    }
    const code = await readFile(resolve(sourceRoot, file), 'utf8');
    const filename = resolve(sourceRoot, file);
    let result;
    let jsxNodes = 0;
    if (mode === 'classic') {
      result = await transformWithOxc(code, filename, {
        jsx: { runtime: 'classic', pragma: 'h', pragmaFrag: 'Fragment', development: false },
        sourcemap: true,
      });
    } else {
      result = await transformAsync(code, {
        filename,
        sourceMaps: true,
        babelrc: false,
        configFile: false,
        plugins: [
          () => ({
            visitor: {
              Program(path) {
                t.traverseFast(path.node, (node) => {
                  if (t.isJSXElement(node) || t.isJSXFragment(node)) jsxNodes++;
                });
              },
            },
          }),
          [mode === 'fork' ? forkJsx : officialJsx, { optimize: false }],
          () => ({
            post(file) {
              t.traverseFast(file.ast, (node) => {
                assert(
                  !t.isJSXElement(node) && !t.isJSXFragment(node),
                  'JSX remained after the selected plugin.',
                );
              });
            },
          }),
        ],
        presets: [presetTypeScript],
      });
    }
    assert(result?.code !== undefined && result.code !== null, `No emitted code: ${file}`);
    await writeFile(
      target,
      result.code + (result.map ? `\n//# sourceMappingURL=${basename(target)}.map\n` : ''),
    );
    if (result.map)
      await writeFile(
        target + '.map',
        typeof result.map === 'string' ? result.map : JSON.stringify(result.map),
      );
    if (file.endsWith('.tsx'))
      report.transformed.push({
        input: file,
        output: relative(fixtureRoot, target).replaceAll('\\', '/'),
        jsxNodes: mode === 'classic' ? null : jsxNodes,
      });
  }
  assert.deepEqual(
    report.transformed.map((item) => item.input),
    expected.files.map((item) => item.path),
  );
  await copyFile(resolve(sourceRoot, 'LICENSE'), resolve(output, 'LICENSE'));
  await build({
    configFile: false,
    root: fixtureRoot,
    logLevel: 'warn',
    define: { __DEV__: 'false', 'process.env.NODE_ENV': '"production"' },
    resolve: { dedupe: ['vue'] },
    build: {
      outDir: resolve(output, 'bundle'),
      emptyOutDir: false,
      sourcemap: true,
      minify: false,
      lib: { entry: resolve(output, 'src/index.js'), formats: ['es'], fileName: () => 'naive.mjs' },
      rolldownOptions: { external: ['vue'] },
    },
  });
  const library = await import(pathToFileURL(resolve(output, 'bundle/naive.mjs')).href);
  for (const name of ['NButton', 'NInput', 'NSelect', 'NConfigProvider', 'NDataTable'])
    assert(library[name], `Missing built export ${name}`);
  const html = await renderToString(
    createSSRApp({
      render: () =>
        h(library.NConfigProvider, null, {
          default: () => [
            h(library.NButton, null, { default: () => 'Source compiled button' }),
            h(library.NInput, { value: 'shared-state' }),
          ],
        }),
    }),
  );
  assert(html.includes('Source compiled button'));
  assert(html.includes('shared-state'));
  if (mode === 'fork') report.declarations = emitDeclarations(output);
  report.bundleSha256 = createHash('sha256')
    .update(await readFile(resolve(output, 'bundle/naive.mjs')))
    .digest('hex');
  report.success = true;
  report.exports = Object.keys(library).length;
  report.ssr = true;
  console.log(
    `${mode}: compiled ${report.transformed.length} production TSX files; built ${report.exports} exports; SSR passed.`,
  );
} catch (error) {
  report.error = error.stack ?? String(error);
  throw error;
} finally {
  await writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');
}
