import { transformAsync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import officialJsx from '@vue/babel-plugin-jsx';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { babelPlugin as forkJsx } from './src/index.ts';

// 两组任务使用同一批上游断言与快照；仅切换编译器，避免把基线缺陷归因于 fork。
export default defineConfig(({ mode }) => {
  const official = mode === 'official';
  const jsx = official ? officialJsx : forkJsx;
  return {
    root: fileURLToPath(new URL('.', import.meta.url)),
    oxc: { jsx: 'preserve' },
    resolve: {
      alias: {
        '@zerodep-vue/compiler-under-test': official
          ? fileURLToPath(import.meta.resolve('@vue/babel-plugin-jsx'))
          : fileURLToPath(new URL('./src/plugins/babel.ts', import.meta.url)),
      },
    },
    plugins: [
      {
        name: 'zerodep-upstream-test-transform',
        enforce: 'pre',
        async transform(code, id) {
          if (!/\.[jt]sx$/.test(id) || id.includes('/node_modules/')) return;
          const result = await transformAsync(code, {
            filename: id,
            babelrc: false,
            configFile: false,
            sourceMaps: true,
            plugins: [
              [jsx, { optimize: true, isCustomElement: (tag: string) => tag.startsWith('x-') }],
            ],
            presets: [presetTypeScript],
          });
          return result?.code ? { code: result.code, map: result.map } : undefined;
        },
      },
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['test/upstream*/**/*.test.{ts,tsx}'],
      maxWorkers: 2,
    },
  };
});
