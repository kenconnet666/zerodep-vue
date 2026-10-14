/** 构建工具统一入口；应用运行时代码从 @zerodep-vue/core 导入。 */
export { default as babelPlugin } from './babel/index.ts';
export { default as vitePlugin } from './vite/index.ts';
export type { CompilerOptions, VueJSXPluginOptions } from './babel/index.ts';
export type { ViteOptions } from './vite/index.ts';
export { languageServicePlugin } from './editor/index.ts';
