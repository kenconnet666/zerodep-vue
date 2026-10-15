/** 构建工具统一入口；应用运行时代码从 @zerodep-vue/core 导入。 */
export { default as babelPlugin } from './plugins/babel.ts';
export { default as vitePlugin } from './plugins/vite.ts';
export type { CompilerOptions, VueJSXPluginOptions } from './plugins/babel.ts';
export type { ViteOptions } from './plugins/vite.ts';
export { languageServicePlugin } from './editor/language-service.ts';
