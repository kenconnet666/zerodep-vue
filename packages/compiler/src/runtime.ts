// 仅用于显式全文件 CSS 接线的运行时子入口，不导入 Babel 或 TypeScript。
export {
  createCssVNode,
  cloneCssVNode,
  mergeCssProps,
  binding,
  piece,
  template,
  add,
} from '@zerodep-vue/css/runtime';
