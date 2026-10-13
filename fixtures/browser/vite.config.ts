import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vueTsx from '../../packages/compiler/src/vite.ts';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  appType: 'custom',
  plugins: [
    vueTsx({ optimize: process.env.BROWSER_MODE === 'production' }),
    {
      name: 'verify-production-debug-exclusion',
      generateBundle(_options, bundle) {
        if (process.env.BROWSER_MODE !== 'production') return;
        for (const output of Object.values(bundle)) {
          if (output.type !== 'chunk') continue;
          const debug = Object.keys(output.modules).filter((id) =>
            /(?:packages\/(?:css|compiler)\/src\/(?:devtools|hmr)\.ts|@vue[+/]devtools)/.test(
              id.replaceAll('\\', '/'),
            ),
          );
          if (
            debug.length ||
            output.code.includes('__zerodepHmr') ||
            output.code.includes('zerodep-vue-css')
          )
            throw new Error(
              `Production output includes development inspection/HMR code: ${debug.join(', ')}`,
            );
        }
      },
    },
  ],
  resolve: {
    conditions: ['zerodep-vue-source', 'module', 'browser', 'development|production'],
    alias: {
      '@fixture/hmr': fileURLToPath(new URL('./.generated/hmr/Subject.tsx', import.meta.url)),
      '@fixture/naive': fileURLToPath(
        new URL('../naive-ui/.generated/fork/bundle/naive.mjs', import.meta.url),
      ),
    },
  },
  ssr: {
    noExternal: ['@zerodep-vue/css', '@zerodep-vue/tsx'],
    resolve: { conditions: ['zerodep-vue-source', 'module', 'node', 'development|production'] },
  },
  optimizeDeps: { include: ['@vue/devtools-kit'] },
  server: {
    host: '127.0.0.1',
    // 自动化保存比用户编辑快；100ms 的真实文件轮询避开 Chokidar 的 50ms change 去重。
    ...(process.env.PW_SUITE === 'hmr' ? { watch: { usePolling: true, interval: 100 } } : {}),
  },
  build: { sourcemap: true, outDir: '.generated/client', emptyOutDir: false },
});
