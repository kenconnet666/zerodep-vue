import type { Ref } from 'vue';
import type { PropertyName, Properties } from './types.ts';
import type { ColorProperty, SystemValue } from './generated/keywords.ts';
import type { SystemKeywords } from './generated/system.ts';

export const KEYWORD = Symbol.for('@zerodep-vue/css/keyword/v1');
export const THEME = Symbol.for('@zerodep-vue/css/theme-reference/v1');
export const THEME_SOURCE = Symbol.for('@zerodep-vue/css/theme-source/v1');

/** 固定系统值；品牌类型根据实际关键字集合检查可使用的 CSS 属性。 */
export interface SystemKeyword<
  out Key extends PropertyName = PropertyName,
  out Value extends string = string,
> {
  readonly [KEYWORD]: { readonly property: Key; readonly value: Value };
}
/** 具名视图投影同一份字面量声明，保留 JSDoc 和导航，避免复制第二份同名成员。 */
export type SystemKeywordView<Values, Key extends PropertyName> = {
  readonly [Name in keyof Values]: SystemKeyword<Key, Values[Name] & string>;
};
/** 主题引用保留真实来源；同名成员不依赖全局“当前主题”。 */
export interface ThemeReference<
  out Key extends PropertyName = PropertyName,
  out Name extends string = string,
> {
  readonly [THEME]: { readonly property: Key; readonly name: Name; readonly read: () => unknown };
}

export type AllowedSystem<Key extends PropertyName> = SystemKeyword<PropertyName, SystemValue<Key>>;
// 交集保留泛型上界中已知的成员；Extract 的延迟条件会丢失 T extends AppTheme 的可赋值关系。
export type ThemeNames<T extends SystemKeywords, Key extends PropertyName> = keyof T[Key] &
  `_${string}`;
export type AllowedTheme<T extends SystemKeywords, Key extends PropertyName> =
  | ThemeReference<Key, ThemeNames<T, Key>>
  | (Key extends ColorProperty ? ThemeReference<'color', ThemeNames<T, 'color'>> : never);
export type ThemeMemberValue<Key extends PropertyName> =
  Properties[Key] | AllowedSystem<Key> | null | Ref<Properties[Key] | AllowedSystem<Key> | null>;
export type CheckedTheme<T extends SystemKeywords> = T & {
  readonly [Key in PropertyName]: {
    readonly [Name in keyof T[Key]]: Name extends `_${string}` ? ThemeMemberValue<Key> : never;
  };
};

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
