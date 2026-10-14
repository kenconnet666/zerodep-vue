import type { PropertyName } from './types.ts';

export const KEYWORD = Symbol.for('@zerodep-vue/core/keyword/v1');
export const THEME = Symbol.for('@zerodep-vue/core/theme-reference/v1');
export const THEME_SOURCE = Symbol.for('@zerodep-vue/core/theme-source/v1');

/** 固定系统值；品牌类型根据实际关键字集合检查可使用的 CSS 属性。 */
export interface SystemKeyword<
  out Key extends PropertyName = PropertyName,
  out Value extends string = string,
> {
  readonly [KEYWORD]: { readonly property: Key; readonly value: Value };
}
/** 主题引用保留真实来源；同名成员不依赖全局“当前主题”。 */
export interface ThemeReference<
  out Key extends PropertyName = PropertyName,
  out Name extends string = string,
> {
  readonly [THEME]: { readonly property: Key; readonly name: Name; readonly read: () => unknown };
}

export type ThemeResolver = (property: string, name: string) => ThemeReference;

export function isKeyword(value: unknown): value is SystemKeyword {
  return !!value && typeof value === 'object' && KEYWORD in value;
}
export function isThemeReference(value: unknown): value is ThemeReference {
  return !!value && typeof value === 'object' && THEME in value;
}
export function keyword<Key extends PropertyName, Value extends string>(
  property: Key,
  value: Value,
): SystemKeyword<Key, Value> {
  return Object.freeze({
    [KEYWORD]: Object.freeze({ property, value }),
    [Symbol.toPrimitive]: () => value,
  });
}
