import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { vitePlugin } from '../compiler/src/index.ts';

export default defineConfig({
  root: fileURLToPath(new URL('./test/browser', import.meta.url)),
  plugins: [vitePlugin({ optimize: true })],
  resolve: { conditions: ['zerodep-vue-source'] },
  server: { host: '127.0.0.1', strictPort: true, port: 4176 },
  preview: { host: '127.0.0.1', strictPort: true, port: 4176 },
  build: { outDir: '../../test-results/browser', emptyOutDir: false },
});
