import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vueTsx from '../../packages/compiler/src/vite.ts';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  appType: 'custom',
  plugins: [vueTsx({ optimize: process.env.BROWSER_MODE === 'production' })],
  resolve: {
    conditions: ['zerodep-vue-source', 'module', 'browser', 'development|production'],
    alias: {
      '@fixture/naive': fileURLToPath(
        new URL('../naive-ui/.generated/fork/bundle/naive.mjs', import.meta.url),
      ),
    },
  },
  ssr: { noExternal: ['@zerodep-vue/css', '@zerodep-vue/tsx'] },
  server: { host: '127.0.0.1' },
  build: { sourcemap: true, outDir: '.generated/client', emptyOutDir: false },
});
