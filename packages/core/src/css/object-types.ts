import type { AriaAttributes } from 'vue';
import type { CssAnimation } from './animation-token.ts';
import type { SystemKeywords } from './generated/system.ts';
import type { CssCondition, CssValue, PropertyInput, PropertyName } from './types.ts';
import type { CSS_STYLE } from './object.ts';

/** 原生 data-* 值；false 仍是存在的字符串属性，与 HTML 布尔属性不同。 */
export interface DataAttributes {
  [name: `data-${string}`]: string | number | boolean | null | undefined;
}

type StateKey<Attrs> = Extract<keyof Attrs, `aria-${string}` | `data-${string}`>;
type State<Value> = `${Extract<NonNullable<Value>, string | number | boolean>}`;
type AnimationProperty =
  'animation' | 'animationName' | `${'Webkit' | 'Moz'}Animation${'' | 'Name'}`;

/** 普通属性使用 camelCase；数字是否补 px 沿用各属性的 CSS 语义。 */
export type CssDeclarations<Theme extends SystemKeywords = SystemKeywords> = {
  [Key in PropertyName]?:
    CssValue<Key, Theme> | (Key extends AnimationProperty ? CssAnimation : never);
};

/** 属性条件观察完整目标契约；slot 可写字段的限制不会缩减这里的状态值。 */
export type CssObject<
  Attrs extends object = AriaAttributes,
  Theme extends SystemKeywords = SystemKeywords,
> = CssDeclarations<Theme> & { [Key in CssCondition]?: CssInput<Attrs, Theme> } & {
  [Key in StateKey<Attrs>]?: { [Value in State<Attrs[Key]>]?: CssInput<Attrs, Theme> };
} & { [Key in `--${string}`]?: string | number | null | undefined };

/** 可复用的样式描述；不持有 DOM 或订阅，实际消费节点拥有更新和清理。 */
export interface CssStyle {
  readonly [CSS_STYLE]: {
    readonly source: unknown;
    readonly resolveTheme?: import('./tokens.ts').ThemeResolver;
    readonly literal: boolean;
  };
}

/** 数组保留声明顺序；函数显式表示在消费时读取 Vue 状态，普通对象仍是 JS 快照。 */
export type CssInput<
  Attrs extends object = AriaAttributes,
  Theme extends SystemKeywords = SystemKeywords,
> =
  | CssObject<Attrs, Theme>
  | CssStyle
  | false
  | null
  | undefined
  | readonly CssInput<Attrs, Theme>[]
  | (() => CssInput<Attrs, Theme>);

/** 在上下文补全之外逐层检查实际键，避免泛型推断放过拼错属性或未知主题名。 */
type ObjectInput<Input> = Exclude<
  Input,
  CssStyle | false | null | undefined | readonly unknown[] | ((...args: any[]) => unknown)
>;
// 已声明的 CssInput 是递归契约，转发时不能再无限展开其数组/函数联合。
// 只有包含完整属性表的契约可走此分支；对象字面量仍逐层精确检查。
type DeclaredCss<Input> = [ObjectInput<Input>] extends [never]
  ? false
  : PropertyName extends keyof ObjectInput<Input>
    ? true
    : false;
/** 根据实际输入形状提供上下文，避免把对象与数组/函数联合做庞大的交叉展开。 */
export type CssContextual<
  Input,
  Attrs extends object,
  Theme extends SystemKeywords = SystemKeywords,
> = Input extends CssStyle | false | null | undefined
  ? Input
  : Input extends readonly unknown[]
    ? readonly CssInput<Attrs, Theme>[]
    : Input extends (...args: never[]) => unknown
      ? () => CssInput<Attrs, Theme>
      : CssObject<Attrs, Theme>;
export type CheckCss<Input, Attrs extends object, Theme extends SystemKeywords = SystemKeywords> =
  DeclaredCss<Input> extends true
    ? Input
    : unknown extends Input
      ? CssInput<Attrs, Theme>
      : Input extends CssStyle | false | null | undefined
        ? Input
        : Input extends (...args: never[]) => infer Result
          ? () => CheckCss<Result, Attrs, Theme>
          : Input extends readonly unknown[]
            ? { [Index in keyof Input]: CheckCss<Input[Index], Attrs, Theme> }
            : Input extends object
              ? PropertyName extends keyof Input
                ? Input
                : {
                    [Key in keyof Input]: Key extends PropertyName
                      ? PropertyInput<Key, Theme, Input[Key]>
                      : Key extends `--zv-${string}`
                        ? never
                        : Key extends `--${string}`
                          ? string | number | null | undefined
                          : Key extends CssCondition
                            ? CheckCss<Input[Key], Attrs, Theme>
                            : Key extends StateKey<Attrs>
                              ? {
                                  [Value in keyof Input[Key]]: Value extends State<Attrs[Key]>
                                    ? CheckCss<Input[Key][Value], Attrs, Theme>
                                    : never;
                                }
                              : never;
                  }
              : never;

/** 主题工厂只绑定解析上下文；返回值可组合、复用，并随所属区域的主题更新。 */
export interface CssFactory<Theme extends SystemKeywords> {
  <const Input>(
    source: Input &
      CssInput<AriaAttributes & DataAttributes, Theme> &
      CheckCss<Input, AriaAttributes & DataAttributes, Theme>,
  ): CssStyle;
}
