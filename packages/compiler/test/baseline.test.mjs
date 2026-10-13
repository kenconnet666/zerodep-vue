import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rmdir, unlink, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import test from 'node:test';
import { transformAsync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import jsx from '../src/index.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const filename = resolve(root, 'fixtures/legacy-tsx/src/Counter.tsx');

for (const optimize of [false, true]) {
  test(
    'Vue JSX source fork compiles ordinary TSX and renders with optimize=' + optimize,
    async () => {
      const transformed = await transformAsync(await readFile(filename, 'utf8'), {
        filename,
        babelrc: false,
        configFile: false,
        sourceMaps: true,
        plugins: [[jsx, { optimize }]],
        presets: [presetTypeScript],
      });
      assert(transformed?.code && transformed.map);
      assert(!transformed.code.includes('<button'));
      const temporaryRoot = resolve(root, '.tmp');
      await mkdir(temporaryRoot, { recursive: true });
      const folder = await mkdtemp(resolve(temporaryRoot, 'jsx-baseline-'));
      const output = resolve(folder, 'counter.mjs');
      try {
        await writeFile(output, transformed.code);
        const { Counter } = await import(pathToFileURL(output).href);
        const initial = await renderToString(createSSRApp(Counter));
        assert(initial.includes('计数：0'), initial);
        const custom = await renderToString(
          createSSRApp(Counter, { label: '<count>', initial: 3 }),
        );
        assert(custom.includes('&lt;count&gt;：3'), custom);
        assert(custom.includes('class="counter active"'), custom);
      } finally {
        await unlink(output).catch((error) => {
          if (error.code !== 'ENOENT') throw error;
        });
        await rmdir(folder);
      }
    },
  );
}
