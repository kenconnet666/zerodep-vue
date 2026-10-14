import { defineConfig } from 'vitest/config';
import { vitePlugin as vueTsx } from './packages/compiler/src/index.ts';

export default defineConfig(({ mode }) => ({
  plugins: [vueTsx({ optimize: mode === 'optimized' })],
  resolve: { conditions: ['zerodep-vue-source'] },
  test: {
    environment: 'jsdom',
    include: ['packages/core/test/tsx/**/*.test.tsx'],
    maxWorkers: 2,
  },
}));
