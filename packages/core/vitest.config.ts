import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { vitePlugin as vueTsx } from '../compiler/src/index.ts';

export default defineConfig(({ mode }) => ({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [vueTsx({ optimize: mode === 'optimized' })],
  resolve: { conditions: ['zerodep-vue-source'] },
  test: {
    environment: 'jsdom',
    include: ['test/tsx/**/*.test.tsx'],
    maxWorkers: 2,
  },
}));
