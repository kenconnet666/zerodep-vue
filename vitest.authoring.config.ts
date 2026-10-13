import { defineConfig } from 'vitest/config';
import vueTsx from './packages/compiler/src/vite.ts';

export default defineConfig(({ mode }) => ({
  plugins: [vueTsx({ optimize: mode === 'optimized' })],
  resolve: { conditions: ['zerodep-vue-source'] },
  test: {
    environment: 'jsdom',
    include: ['packages/tsx/test/**/*.test.tsx'],
    maxWorkers: 2,
  },
}));
