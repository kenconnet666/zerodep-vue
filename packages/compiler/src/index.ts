// 普通 TSX 使用固定上游的真实源码；自有增强在独立模块接入，避免全局改写旧语义。
export { default } from './upstream/index.ts';
export type { VueJSXPluginOptions } from './upstream/interface.ts';
