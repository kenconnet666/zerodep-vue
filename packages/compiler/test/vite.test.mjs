import assert from 'node:assert/strict';
import test from 'node:test';
import { parseSync } from '@babel/core';
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
    assert(installed.include.includes('@zerodep-vue/core > @vue/shared'));
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

test('Vite recognizes namespace components while ignoring business lookalikes', async () => {
  for (const expression of ['Vue.defineComponent', 'Vue["defineComponent"]']) {
    const code = `import * as Vue from 'vue'; export default ${expression}(() => () => <div/>);`;
    const hmr = await configured().transform(code, '/project/Namespace.tsx');
    assert(hmr.code.includes('__VUE_HMR_RUNTIME__.createRecord'));
    assert(hmr.code.includes('updated["default"]'));
    const ssr = await configured().transform(code, '/project/Namespace.tsx', { ssr: true });
    assert(ssr.code.includes('virtual:zerodep-vue/ssr-register'));
    assert(!ssr.code.includes('import.meta.hot'));
  }
  const business = `const Vue = {defineComponent: value => value};
    export const App = Vue.defineComponent(() => <div/>);`;
  const result = await configured().transform(business, '/project/Business.tsx', { ssr: true });
  assert(!result.code.includes('virtual:zerodep-vue/ssr-register'));
});

test('SSR registration helpers avoid user bindings and retain original source maps', async () => {
  const code = `import {defineComponent} from 'vue';
    const __zdRegister = 1;
    const _register = 2;
    export const App = defineComponent(() => () => <div>{__zdRegister + _register}</div>);`;
  const result = await configured().transform(code, '/project/Bindings.tsx', { ssr: true });
  const ast = parseSync(result.code, { sourceType: 'module' });
  const registration = ast.program.body.find(
    (node) =>
      node.type === 'ImportDeclaration' && node.source.value === 'virtual:zerodep-vue/ssr-register',
  );
  assert(registration);
  const local = registration.specifiers[0].local.name;
  assert(!['__zdRegister', '_register'].includes(local));
  assert(
    ast.program.body.some(
      (node) =>
        node.type === 'ExpressionStatement' &&
        node.expression.type === 'CallExpression' &&
        node.expression.callee.name === local,
    ),
  );
  assert.deepEqual(JSON.parse(result.map).sourcesContent, [code]);
});
