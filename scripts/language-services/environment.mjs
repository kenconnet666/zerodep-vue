import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const directory = dirname(fileURLToPath(import.meta.url));
export const root = resolve(process.argv[2] ?? resolve(directory, '../..'));
export const requireProject = createRequire(resolve(root, 'package.json'));

export function serviceConfig() {
  const typescriptVersion = requireProject('typescript/package.json').version;
  if (typescriptVersion !== '6.0.3')
    throw new Error('This workspace requires TypeScript 6.0.3, found ' + typescriptVersion);
  return {
    command: process.execPath,
    args: [requireProject.resolve('typescript-language-server/lib/cli.mjs'), '--stdio'],
    initializationOptions: {
      hostInfo: 'Codex zerodep-vue',
      disableAutomaticTypingAcquisition: true,
      plugins: [{ name: '@zerodep-vue/core/language-service', location: root }],
      // 使用本仓库的完整语义服务，不回退到全局 SDK 或只做语法的进程。
      tsserver: {
        path: resolve(root, 'node_modules/typescript/lib'),
        useSyntaxServer: 'never',
      },
    },
    typescriptVersion,
  };
}
