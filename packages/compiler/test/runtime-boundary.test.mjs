import assert from 'node:assert/strict';
import test from 'node:test';
import {
  assertRuntimeCode,
  assertRuntimeChunks,
} from '../../../fixtures/package-consumer/template/runtime-boundary.mjs';

test('runtime boundary checks imports, re-exports and dynamic loading without matching ordinary strings', async () => {
  await assertRuntimeCode(
    `import {css} from '@zerodep-vue/css';
    export {For} from '@zerodep-vue/tsx';
    const label='@zerodep-vue/compiler';
    // node_modules/typescript/lib/typescript.js
  `,
    'allowed',
  );
  for (const code of [
    "import '@zerodep-vue/compiler/runtime';",
    "export * from '@babel/core';",
    "export {parse} from '@vue/compiler-sfc';",
    "const module = import('typescript');",
    "const module = require('@zerodep-vue/compiler');",
    "import '@zerodep-vue/css/hmr';",
  ])
    await assert.rejects(assertRuntimeCode(code, 'rejected'), /dependency in/);
});

test('runtime boundary also rejects bundled modules and external imports on either platform', async () => {
  const build = (overrides = {}) => ({
    output: [
      {
        type: 'chunk',
        fileName: 'app.js',
        code: 'export const value = 1;',
        imports: [],
        dynamicImports: [],
        modules: {},
        ...overrides,
      },
    ],
  });
  for (const id of [
    '/consumer/node_modules/typescript/lib/typescript.js',
    'C:\\consumer\\node_modules\\@babel\\core\\lib\\index.js',
    '/consumer/node_modules/@zerodep-vue/compiler/dist/index.js',
    'C:\\code\\zerodep-vue\\packages\\compiler\\src\\runtime.ts',
    '/consumer/node_modules/@zerodep-vue/css/dist/devtools.js',
  ]) {
    await assert.rejects(
      assertRuntimeChunks(build({ modules: { [id]: { renderedLength: 12 } } }), 'client'),
      /dependency in/,
    );
    await assertRuntimeChunks(build({ modules: { [id]: { renderedLength: 0 } } }), 'unused');
  }
  await assert.rejects(
    assertRuntimeChunks(build({ imports: ['@babel/core'] }), 'SSR'),
    /build dependency/,
  );
  await assert.rejects(
    assertRuntimeChunks(build({ dynamicImports: ['typescript'] }), 'client'),
    /build dependency/,
  );
});
