import type * as CSS from 'csstype';
import type { Ref, UnwrapNestedRefs } from 'vue';
import type { CssBinding, CssTemplate, Scalar } from './bindings.ts';
import type { SystemKeywords } from './generated/system.ts';
import type { ColorProperty } from './generated/metadata.ts';
import type { PropertyValues } from './generated/literal-values.ts';
import type { Css } from './generated/author.ts';
import type { CssAnimation } from './animation-token.ts';

// 本文件只描述作者契约。运行时声明和 class 标记见 style-value.ts，不在这里保存缓存。
export type Properties = CSS.Properties<Scalar>;
export type PropertyName = keyof Properties;
type ValueOrRef<Value> = Value | Ref<Value>;

// keyof 的交集保留 T extends AppTheme 的已知成员；Extract 条件类型会延迟判断并破坏赋值。
type ThemeNames<T extends SystemKeywords, Key extends PropertyName> = keyof T[Key] & `_${string}`;
/** 属性自身的主题名优先，颜色类属性还接受共享 color 组。 */
type ThemeLiteral<T extends SystemKeywords, Key extends PropertyName> =
  ThemeNames<T, Key> | (Key extends ColorProperty ? ThemeNames<T, 'color'> : never);
type AnimationProperty =
  | 'animation'
  | 'animationName'
  | 'WebkitAnimation'
  | 'WebkitAnimationName'
  | 'MozAnimation'
  | 'MozAnimationName';

/** CSS 属性的普通值：原生值、当前主题名及 null/undefined；组件 Props 直接复用，不暴露绑定实现。 */
export type CssValue<Key extends PropertyName, T extends SystemKeywords = SystemKeywords> =
  PropertyValues[Key] | ThemeLiteral<T, Key> | null;

/** 作者入口还可直接接收动画引用。 */
type DirectPropertyValue<Key extends PropertyName, T extends SystemKeywords> =
  CssValue<Key, T> | (Key extends AnimationProperty ? CssAnimation : never);
/** 属性的完整值域；null 清除前项，原生值域中的 undefined 则保留前项。 */
export type PropertyValue<Key extends PropertyName, T extends SystemKeywords = SystemKeywords> =
  DirectPropertyValue<Key, T> | CssBinding<DirectPropertyValue<Key, T>> | CssTemplate;

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
  Scalar | CssBinding<Scalar | null | undefined> | CssTemplate | null | undefined;

type ThemeMemberValue<Key extends PropertyName> = ValueOrRef<Properties[Key] | null>;
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
  /** 取得当前区域的不可变作者；组件外使用默认来源。 */
  useCss(): Css<T>;
  /** 取得当前区域的响应式主题对象；成员按 Vue reactive 解包，来源替换后仍读取最新主题。 */
  useTheme(): UnwrapNestedRefs<T>;
  /** 在 setup 中向下提供主题，返回相同作者供当前组件使用。 */
  provideTheme(source: ThemeSource<T>): Css<T>;
}
