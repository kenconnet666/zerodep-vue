import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { vitePlugin } from '../compiler/src/index.ts';

export default defineConfig(({ mode }) => ({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [vitePlugin({ optimize: mode === 'optimized' })],
  resolve: { conditions: ['zerodep-vue-source'] },
  test: {
    environment: 'jsdom',
    include: ['test/**/*.test.{ts,tsx,mjs}'],
    maxWorkers: 2,
    clearMocks: true,
    restoreMocks: true,
  },
}));
