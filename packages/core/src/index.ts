export { createCssContext } from './css/theme.ts';
export { cx } from './css/composition.ts';
export { keyframes } from './css/animation.ts';
export { globalCss } from './css/global.ts';
export type { Css } from './css/generated/author.ts';
export { SystemKeywords } from './css/generated/system.ts';
export type { CssContext, KeywordView, ThemeSource } from './css/types.ts';
export { bx } from './css/bindings.ts';
export { createCssHost, cssHostKey } from './css/host.ts';
export { getCssHost } from './css/context.ts';
export type { CssHost, CssHostOptions } from './css/host.ts';
export type { CssClass, ClassValue, CssInput, CssNestedInput } from './css/style-value.ts';
export type { CssCondition, PropertyValue, CustomPropertyValue } from './css/types.ts';
export type { CssBinding } from './css/bindings.ts';
export type { CssAnimation } from './css/animation-token.ts';
export type { Keyframes } from './css/animation.ts';
export type { GlobalRules, GlobalOptions } from './css/global.ts';

export { _component } from './tsx/component.ts';
export { For } from './tsx/For.ts';
export type { ForProps } from './tsx/For.ts';
// 类型转导会保留在 .d.ts 中；空的 import type 会被发射器移除，丢失 JSX 注册。
export type {} from './tsx/jsx.ts';

/** @internal 编译器生成代码与正常作者代码共用根入口。 */
export { binding, piece, template, add } from './css/bindings.ts';
/** @internal VNode 接线由编译器生成。 */
export {
  CLASS_PROP,
  createCssVNode,
  mergeCssProps,
  inheritClass,
  hasIncomingClass,
  renderCss,
  memoClass,
  cloneCssVNode,
  inspectCssVNode,
} from './css/vnode.ts';
/** @internal 组件初始化和属性接线由编译器生成。 */
export { createComponent, resolveProps, restProps, componentMarker } from './tsx/runtime.ts';
/** @internal 仅开发转换引用；导入根入口不会安装检查器或创建 HMR 状态。 */
export { registerModule, compatible } from './development/hmr.ts';
/** @internal 开发转换和检查器集成使用。 */
export {
  enableInspection,
  traceCss,
  traceGlobal,
  inspectApp,
  inspectionSnapshot,
  createCssVNode as createInspectedVNode,
  cloneCssVNode as cloneInspectedVNode,
} from './development/inspector.ts';
export type { InspectedNode, CssSnapshot, SourceLocation } from './development/inspector.ts';
