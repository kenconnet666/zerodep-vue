import type { SystemKeywords } from '@zerodep-vue/core';
import type { Ref, UnwrapRef } from 'vue';
import type {
  UiColors,
  FontFamilyTokens,
  FontSizeTokens,
  FontWeightTokens,
  LineHeightTokens,
  HeightTokens,
  SpacingTokens,
  BorderRadiusTokens,
  BorderWidthTokens,
  StrokeWidthTokens,
  BoxShadowTokens,
  OpacityTokens,
  TransitionDurationTokens,
  TimingFunctionTokens,
  ZIndexTokens,
  ThemeValue,
} from './tokens.ts';

/** 所有 UI 主题必须实现的完整契约；系统 CSS 关键字由 core 的作者类型合并。 */
export interface UiTheme extends SystemKeywords {
  /** 共享语义颜色，可用于 color、backgroundColor、borderColor 等颜色属性。 */
  readonly color: UiColors;
  /** 字体族。 */
  readonly fontFamily: FontFamilyTokens;
  /** 内置字号使用 rem 跟随页面基准；自定义数字仍按 CSS 运行时的 px 规则处理。 */
  readonly fontSize: FontSizeTokens;
  /** 字重。 */
  readonly fontWeight: FontWeightTokens;
  /** 内置行高使用无单位倍数；自定义值接受原生 CSS 行高。 */
  readonly lineHeight: LineHeightTokens;
  /** 内置控件高度使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly height: HeightTokens<ThemeValue<'height'>>;
  /** 最小高度使用同一套控件尺寸名称。 */
  readonly minHeight: HeightTokens<ThemeValue<'minHeight'>>;
  /** 内置间距使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly padding: SpacingTokens<ThemeValue<'padding'>>;
  /** 外边距使用同一套间距名称。 */
  readonly margin: SpacingTokens<ThemeValue<'margin'>>;
  /** 逻辑方向内边距刻度；各属性组可独立覆盖。 */
  readonly paddingInline: SpacingTokens<ThemeValue<'paddingInline'>>;
  readonly paddingBlock: SpacingTokens<ThemeValue<'paddingBlock'>>;
  /** 逻辑方向外边距刻度；各属性组可独立覆盖。 */
  readonly marginInline: SpacingTokens<ThemeValue<'marginInline'>>;
  readonly marginBlock: SpacingTokens<ThemeValue<'marginBlock'>>;
  /** Flex/Grid 间距使用同一套间距名称。 */
  readonly gap: SpacingTokens<ThemeValue<'gap'>>;
  /** 行间距使用同一套间距名称；修改此组不会修改 gap 或 columnGap。 */
  readonly rowGap: SpacingTokens<ThemeValue<'rowGap'>>;
  /** 列间距使用同一套间距名称；修改此组不会修改 gap 或 rowGap。 */
  readonly columnGap: SpacingTokens<ThemeValue<'columnGap'>>;
  /** 内置圆角使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly borderRadius: BorderRadiusTokens;
  /** 内置边框宽度使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly borderWidth: BorderWidthTokens;
  /** SVG 描边刻度使用无单位图形坐标；通常随 viewBox 缩放，不换算为 em。 */
  readonly strokeWidth: StrokeWidthTokens;
  /** 阴影层级，由具体明暗主题提供；内置偏移和模糊半径使用 em。 */
  readonly boxShadow: BoxShadowTokens;
  readonly opacity: OpacityTokens;
  /** 过渡时长，带 ms 或 s 单位；减少动态效果由组件的媒体条件处理。 */
  readonly transitionDuration: TransitionDurationTokens;
  readonly transitionTimingFunction: TimingFunctionTokens;
  /** 同一层叠上下文内的基础层级；仍须服从实际 DOM 的层叠上下文。 */
  readonly zIndex: ZIndexTokens;
}

/**
 * Provider 的主题输入：属性组和组内字段均可省略，undefined 恢复父级值。
 * 只保留 UiTheme 中实际声明了主题名的分组；不暴露 core 的空属性槽和内部标记。
 */
export type UiThemeInput = {
  -readonly [
    Group in keyof UiTheme as Group extends string
      ? keyof UiTheme[Group] extends never
        ? never
        : Group
      : never
  ]?:
    | {
        -readonly [Name in keyof UiTheme[Group]]?:
          UiTheme[Group][Name] | Ref<UnwrapRef<UiTheme[Group][Name]> | undefined> | undefined;
      }
    | undefined;
};
