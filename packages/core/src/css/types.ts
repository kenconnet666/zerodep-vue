import type * as CSS from 'csstype';
import type { CssBinding, CssTemplate, Scalar } from './bindings.ts';
import type { AllowedSystem, AllowedTheme, SystemKeyword, ThemeReference } from './tokens.ts';
import type { SystemKeywords } from './generated/system.ts';
import type { KeywordValues } from './generated/literal-values.ts';
import type { CssAnimation } from './animation-token.ts';

export const CLASS = Symbol.for('@zerodep-vue/core/class/v1');
export type Properties = CSS.Properties<Scalar>;
export type PropertyName = keyof Properties;
type InputValue<Key extends PropertyName, T extends SystemKeywords> =
  | KeywordValues[Key]
  | AllowedSystem<Key>
  | AllowedTheme<T, Key>
  | (Key extends
      | 'animation'
      | 'animationName'
      | 'WebkitAnimation'
      | 'WebkitAnimationName'
      | 'MozAnimation'
      | 'MozAnimationName'
      ? CssAnimation
      : never);
export type PropertyValue<Key extends PropertyName, T extends SystemKeywords = SystemKeywords> =
  InputValue<Key, T> | null | CssBinding<InputValue<Key, T> | null> | CssTemplate;

/** 常用伪类保留补全，函数伪类、属性选择器与条件在各作者入口共用。 */
export type CssCondition =
  | CSS.Pseudos
  | `${CSS.AdvancedPseudos}(${string})`
  | `[${string}]`
  | `&${string}`
  | `@media ${string}`
  | `@supports ${string}`
  | `@container ${string}`
  | '@starting-style';
export type CustomPropertyValue =
  | Scalar
  | SystemKeyword
  | ThemeReference
  | CssBinding<Scalar | SystemKeyword | ThemeReference | null | undefined>
  | CssTemplate
  | null
  | undefined;

/** 嵌套样式必须能重新限定选择器；普通类名只参与最外层组合。 */
export type CssNestedInput = CssClass | false | 0 | null | undefined | readonly CssNestedInput[];

export interface Declaration {
  readonly selector: string;
  readonly target: string;
  readonly conditions: readonly string[];
  readonly property: string;
  readonly value: Scalar | CssBinding<unknown> | ThemeReference | CssAnimation | CssTemplate | null;
}
export interface StyleSource {
  readonly declarations: readonly Declaration[];
}
export type ClassPart = StyleSource | string;

/** 可传递和组合的 class 值；最终元素接线之前保留声明及绑定信息。 */
export interface CssClass {
  readonly [CLASS]: readonly ClassPart[];
}
export type CssInput = CssClass | string | false | 0 | null | undefined | readonly CssInput[];
/** Vue 兼容边界使用；本库组件的外部样式输入使用 CssInput 并经 cx() 组合。 */
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
