import { createRequire } from 'node:module';
import type ts from 'typescript';

/** 编辑器使用注入的 TypeScript；与 tsserver 加载的 CJS 实现共用同一份逻辑。 */
export const languageServicePlugin: ts.server.PluginModuleFactory = createRequire(import.meta.url)(
  '../../src/editor/plugin.cjs',
);
