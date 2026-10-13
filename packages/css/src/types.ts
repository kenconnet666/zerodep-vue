import type * as CSS from 'csstype';
import type { CssBinding, CssFallback, CssTemplate, Scalar } from './values.ts';

export const CLASS = Symbol.for('@zerodep-vue/css/class/v1');
export type Properties = CSS.Properties<Scalar>;
export type PropertyName = keyof Properties;
export type PropertyValue<Key extends PropertyName> =
  | Properties[Key]
  | null
  | CssBinding<Properties[Key] | null>
  | CssTemplate
  | CssFallback<Exclude<Properties[Key], undefined>>;

type Conditions =
  | CSS.Pseudos
  | `&${string}`
  | `@media ${string}`
  | `@supports ${string}`
  | `@container ${string}`
  | '@starting-style';
/** 按状态组织 CSS；普通属性使用 csstype 的属性类型与编辑器说明。 */
export type CssObject = { readonly [Key in PropertyName]?: PropertyValue<Key> } & {
  readonly [Key in Conditions]?: CssObject;
} & {
  readonly [Key in `--${string}`]?:
    Scalar | CssBinding<Scalar | null | undefined> | CssTemplate | null | undefined;
};

export interface Declaration {
  readonly selector: string;
  readonly target: string;
  readonly conditions: readonly string[];
  readonly property: string;
  readonly value: Scalar | CssBinding<unknown> | CssTemplate | CssFallback<Scalar> | null;
}
export interface StyleSource {
  readonly declarations: readonly Declaration[];
}
export type ClassPart = StyleSource | string;

/** 可传递和组合的 class 值；最终元素接线之前保留声明及绑定信息。 */
export interface CssClass {
  readonly [CLASS]: readonly ClassPart[];
}
export type CssInput =
  CssObject | CssClass | string | false | 0 | null | undefined | readonly CssInput[];
/** 与 Vue 的 class 字符串、条件对象及数组组合共用一个 JSX 入口。 */
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
