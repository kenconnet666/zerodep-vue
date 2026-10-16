export type { CssAnimation } from './css/animation-token.ts';
export { keyframes } from './css/animation.ts';
export type { Keyframes } from './css/animation.ts';
export { getCssHost } from './css/context.ts';
export { SystemKeywords } from './css/generated/system.ts';
export { globalCss } from './css/global.ts';
export type { GlobalOptions, GlobalRules } from './css/global.ts';
export { createCssHost, cssHostKey } from './css/host.ts';
export type { CssHost, CssHostOptions } from './css/host.ts';
export { createCssContext } from './css/theme.ts';
export type { CssCondition, CssContext, CssValue, ThemeSource } from './css/types.ts';

export type {
  CssDeclarations,
  CssFactory,
  CssInput,
  CssObject,
  CssStyle,
  DataAttributes,
} from './css/object-types.ts';
export { mergeAttrs } from './tsx/attrs.ts';
export { _component } from './tsx/component.ts';
export type { NativeElement, NativeProps } from './tsx/element.ts';
export * from './tsx/elements.ts';
export type { Props, PropsOf, Slot, TypedProps } from './tsx/props.ts';
/** @internal CSS 对象的编译接线。 */
export { staticCss } from './css/object.ts';
/** @internal 让组件推断声明可通过公共入口命名，无需每个组件重复 ReturnType 注解。 */
export { For } from './tsx/For.ts';
export type { ForProps } from './tsx/For.ts';
export type { AuthorProps } from './tsx/component.ts';
// 类型转导会保留在 .d.ts 中；空的 import type 会被发射器移除，丢失 JSX 注册。
export type {} from './tsx/jsx.ts';

/** @internal VNode 接线由编译器生成。 */
export { cloneCssVNode, createCssVNode, inspectCssVNode, renderCss } from './css/vnode.ts';
/** @internal 组件初始化和属性接线由编译器生成。 */
export { componentMarker, createComponent, resolveProps, restProps } from './tsx/runtime.ts';
/** @internal 仅开发转换引用；导入根入口不会安装检查器或创建 HMR 状态。 */
export { compatible, registerModule } from './development/hmr.ts';
/** @internal 开发转换和检查器集成使用。 */
export {
  cloneCssVNode as cloneInspectedVNode,
  createCssVNode as createInspectedVNode,
  enableInspection,
  inspectApp,
  inspectionSnapshot,
  traceCss,
  traceGlobal,
} from './development/inspector.ts';
export type { CssSnapshot, InspectedNode, SourceLocation } from './development/inspector.ts';
