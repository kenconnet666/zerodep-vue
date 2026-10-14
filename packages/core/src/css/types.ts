import type * as CSS from 'csstype';
import type { Ref } from 'vue';
import type { CssBinding, CssTemplate, Scalar } from './bindings.ts';
import type { SystemKeyword, ThemeReference } from './tokens.ts';
import type { SystemKeywords } from './generated/system.ts';
import type { SystemViews } from './generated/keyword-views.ts';
import type { ColorProperty, SystemValue } from './generated/keywords.ts';
import type { KeywordValues } from './generated/literal-values.ts';
import type { Css } from './generated/author.ts';
import type { CssAnimation } from './animation-token.ts';

// 本文件只描述作者契约。运行时声明和 class 标记见 style-value.ts，不在这里保存缓存。
export type Properties = CSS.Properties<Scalar>;
export type PropertyName = keyof Properties;
type ValueOrRef<Value> = Value | Ref<Value>;

/** 系统引用按实际值域兼容：同一个 inherit 可用于多个属性，而 flex 不能用于 padding。 */
type AllowedSystem<Key extends PropertyName> = SystemKeyword<PropertyName, SystemValue<Key>>;
// keyof 的交集保留 T extends AppTheme 的已知成员；Extract 条件类型会延迟判断并破坏赋值。
type ThemeNames<T extends SystemKeywords, Key extends PropertyName> = keyof T[Key] & `_${string}`;
/** 属性自身的主题名优先，颜色类属性还接受共享 color 组。 */
type ThemeLiteral<T extends SystemKeywords, Key extends PropertyName> =
  ThemeNames<T, Key> | (Key extends ColorProperty ? ThemeNames<T, 'color'> : never);
type AllowedTheme<T extends SystemKeywords, Key extends PropertyName> =
  | ThemeReference<Key, ThemeNames<T, Key>>
  | (Key extends ColorProperty ? ThemeReference<'color', ThemeNames<T, 'color'>> : never);
type AnimationProperty =
  | 'animation'
  | 'animationName'
  | 'WebkitAnimation'
  | 'WebkitAnimationName'
  | 'MozAnimation'
  | 'MozAnimationName';

/** 不经过 bx/template 包装时可直接传入的值，含系统值和有真实来源的主题引用。 */
type DirectPropertyValue<Key extends PropertyName, T extends SystemKeywords> =
  | KeywordValues[Key]
  | AllowedSystem<Key>
  | AllowedTheme<T, Key>
  | ThemeLiteral<T, Key>
  | (Key extends AnimationProperty ? CssAnimation : never);
/** 属性的完整值域；null 清除前项，原生值域中的 undefined 则保留前项。 */
export type PropertyValue<Key extends PropertyName, T extends SystemKeywords = SystemKeywords> =
  DirectPropertyValue<Key, T> | null | CssBinding<DirectPropertyValue<Key, T> | null> | CssTemplate;

/** 自由 CSS 字符串保留，已知的 _ 名称必须属于当前主题，避免被宽泛 string 吞掉。 */
type CheckedPropertyValue<Key extends PropertyName, T extends SystemKeywords, Value> =
  Value extends CssBinding<infer Bound>
    ? CssBinding<Exclude<Bound, `_${string}`> | ThemeLiteral<T, Key>>
    : Exclude<Value, `_${string}`> | ThemeLiteral<T, Key>;

/**
 * 三个约束各司其职：Value 捕获本次字面量，PropertyValue 检查属性值域，最后检查主题名。
 * 不能只用 PropertyValue：color 允许自由字符串，会同时放过 '_missing' 和 bx('_missing')。
 */
export type PropertyInput<Key extends PropertyName, T extends SystemKeywords, Value> = Value &
  PropertyValue<Key, T> &
  CheckedPropertyValue<Key, T, Value>;

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

/** 具名系统视图投影原字面量声明，保留中文 JSDoc 与导航来源。 */
export type SystemKeywordView<Values, Key extends PropertyName> = {
  readonly [Name in keyof Values]: SystemKeyword<Key, Values[Name] & string>;
};
type ThemeMembers<Group, Key extends PropertyName> = {
  readonly [Name in keyof Group]: Name extends string ? ThemeReference<Key, Name> : never;
};
/** 系统关键字和主题成员各保留自己的声明来源，不复制第二份业务成员。 */
export type KeywordView<T extends SystemKeywords> = {
  readonly [Key in keyof SystemViews]: SystemViews[Key] & ThemeMembers<T[Key], Key>;
};
type ThemeMemberValue<Key extends PropertyName> = ValueOrRef<
  Properties[Key] | AllowedSystem<Key> | null
>;
type CheckedTheme<T extends SystemKeywords> = T & {
  readonly [Key in PropertyName]: {
    readonly [Name in keyof T[Key]]: Name extends `_${string}` ? ThemeMemberValue<Key> : never;
  };
};
/**
 * 左侧先推断真实 T，右侧再验证成员；省去左侧会使 Ref 来源丢失主题名推断。
 * 例如 createCssContext(shallowRef(new AppTheme())) 仍须保留 '_brand'。
 */
export type ThemeSource<T extends SystemKeywords> = ValueOrRef<T> & ValueOrRef<CheckedTheme<T>>;

/** 每个上下文拥有独立注入键，区域覆盖只影响自己的逻辑子树。 */
export interface CssContext<T extends SystemKeywords> {
  /** 显式引用默认来源；区域样式优先通过 useCss() 写主题字面量。 */
  readonly keywords: KeywordView<T>;
  /** 取得当前区域的不可变作者；组件外使用默认来源。 */
  useCss(): Css<T>;
  /** 在 setup 中向下提供主题，返回相同作者供当前组件使用。 */
  provideTheme(source: ThemeSource<T>): Css<T>;
}
