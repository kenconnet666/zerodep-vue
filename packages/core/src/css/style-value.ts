import type { CssAnimation } from './animation-token.ts';
import type { CssBinding, Scalar } from './bindings.ts';
import type { ThemeReference, ThemeResolver } from './tokens.ts';

export const CLASS = Symbol.for('@zerodep-vue/core/class/v1');

/** 作者入口已检查属性和值的对应关系；运行时统一保存声明，不再携带主题泛型。 */
export interface Declaration {
  readonly selector: string;
  /** 实际承接变量的元素，用于判断伪元素/后代能否继承当前元素的变量。 */
  readonly target: string;
  readonly conditions: readonly string[];
  readonly property: string;
  readonly value: Scalar | CssBinding<unknown> | ThemeReference | CssAnimation | null;
  readonly resolveTheme?: ThemeResolver;
  /** 开发来源只携带描述身份；检查器不会重新读取用户代码。 */
  readonly origin?: object;
}
export interface StyleSource {
  readonly declarations: readonly Declaration[];
  readonly origin?: object;
}
export type ClassPart = StyleSource | string;

/** 可传递的样式描述；只有最终消费节点才解析绑定、登记规则。 */
export interface CssClass {
  readonly [CLASS]: readonly ClassPart[];
}

/** 后端组合已经展开的声明与原生 class；不作为作者样式入口导出。 */
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
