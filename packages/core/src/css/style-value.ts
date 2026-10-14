import type { CssAnimation } from './animation-token.ts';
import type { CssBinding, CssTemplate, Scalar } from './bindings.ts';
import type { ThemeReference, ThemeResolver } from './tokens.ts';

export const CLASS = Symbol.for('@zerodep-vue/core/class/v1');

/** 作者入口已检查属性和值的对应关系；运行时统一保存声明，不再携带主题泛型。 */
export interface Declaration {
  readonly selector: string;
  /** 实际承接变量的元素，用于判断伪元素/后代能否继承当前元素的变量。 */
  readonly target: string;
  readonly conditions: readonly string[];
  readonly property: string;
  readonly value: Scalar | CssBinding<unknown> | ThemeReference | CssAnimation | CssTemplate | null;
  readonly resolveTheme?: ThemeResolver;
}
export interface StyleSource {
  readonly declarations: readonly Declaration[];
}
export type ClassPart = StyleSource | string;

/** 可传递的样式描述；只有最终消费节点才解析绑定、登记规则。 */
export interface CssClass {
  readonly [CLASS]: readonly ClassPart[];
}

/** 本库的组合输入。普通对象不能混入，避免把业务对象误当作条件类名。 */
export type CssInput = CssClass | string | false | 0 | null | undefined | readonly CssInput[];
/** 嵌套样式必须能重新限定选择器，所以不接收普通字符串类名。 */
export type CssNestedInput = CssClass | false | 0 | null | undefined | readonly CssNestedInput[];
/** Vue 兼容边界额外接受对象/布尔/数字；组件的外部样式参数仍使用 CssInput。 */
export type ClassValue =
  | CssClass
  | string
  | boolean
  | number
  | null
  | undefined
  | Readonly<Record<string, unknown>>
  | readonly ClassValue[];

export function isCssClass(value: unknown): value is CssClass {
  return typeof value === 'object' && value !== null && CLASS in value;
}

// 稳定描述只在本模块登记；HMR/外部代理不能因一次展开而失去后续变化。
const stableParts = new WeakSet<object>();
export function markStableParts<Value extends CssClass>(value: Value): Value {
  stableParts.add(value);
  return value;
}
export function hasStableParts(value: CssClass): boolean {
  return stableParts.has(value);
}
