import type * as CSS from 'csstype';
import type { Ref, UnwrapNestedRefs } from 'vue';
import type { CssAnimation, CssAnimationNames } from './animation-token.ts';
import type { Scalar } from './bindings.ts';
import type { PropertyValues } from './generated/literal-values.ts';
import type { ColorProperty } from './generated/metadata.ts';
import type { SystemKeywords } from './generated/system.ts';
import type { CssFactory } from './object-types.ts';

// 本文件只描述作者契约。运行时声明和 class 标记见 style-value.ts，不在这里保存缓存。
export type Properties = CSS.Properties<Scalar>;
export type PropertyName = keyof Properties;
type ValueOrRef<Value> = Value | Ref<Value>;

// keyof 的交集保留 T extends AppTheme 的已知成员；Extract 条件类型会延迟判断并破坏赋值。
type ThemeNames<T extends SystemKeywords, Key extends PropertyName> = keyof T[Key] & `_${string}`;
/** 属性自身的主题名优先，颜色类属性还接受共享 color 组。 */
type ThemeLiteral<T extends SystemKeywords, Key extends PropertyName> =
  ThemeNames<T, Key> | (Key extends ColorProperty ? ThemeNames<T, 'color'> : never);

/** 上下文已经检查 CSS 值域；额外只检查可识别的主题字面量，避免重复交叉大型关键字联合。 */
export type CheckedCssValue<
  Key extends PropertyName,
  T extends SystemKeywords,
  Value,
> = Value extends readonly unknown[]
  ? { [Index in keyof Value]: CheckedCssValue<Key, T, Value[Index]> }
  : Value & (Exclude<Value, `_${string}`> | ThemeLiteral<T, Key>);

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
export type CssDeclarationValue<Key extends PropertyName, T extends SystemKeywords> =
  | CssValue<Key, T>
  | (Key extends AnimationProperty ? CssAnimation : never)
  | (Key extends 'animationName' | 'WebkitAnimationName' | 'MozAnimationName'
      ? CssAnimationNames
      : never);
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
  /** 取得当前区域的主题样式工厂；组件外使用默认来源，函数输入在消费时读取。 */
  useCss(): CssFactory<T>;
  /** 取得当前区域的响应式主题对象；成员按 Vue reactive 解包，来源替换后仍读取最新主题。 */
  useTheme(): UnwrapNestedRefs<T>;
  /** 在 setup 中向下提供主题，返回相同作者供当前组件使用。 */
  provideTheme(source: ThemeSource<T>): CssFactory<T>;
}
