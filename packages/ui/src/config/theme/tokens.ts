import type { CssValue, SystemKeywords } from '@zerodep-vue/core';
import type { Ref } from 'vue';

/** 主题保存具体 CSS 值；完整字段不接受 null/undefined，局部输入另行表达继承。 */
// Exclude 逐项去掉空值；NonNullable 的交叉会折叠 CssString，导致普通关键字补全丢失。
export type ThemeValue<Key extends Extract<keyof SystemKeywords, string>> =
  Exclude<CssValue<Key>, null | undefined> | Ref<Exclude<CssValue<Key>, null | undefined>>;

// 显式成员保留补全、中文说明与声明位置；不使用 Record 抹平 token 的来源。
// 来源字段可响应式修改，Provider 对外提供的主题视图才是只读。
/** 共享语义颜色，可用于 color、backgroundColor、borderColor 等颜色属性。 */
export interface UiColors {
  /** 主操作色，也用于对应低强调背景上的文字和图标。 */
  _primary: ThemeValue<'color'>;
  /** 主操作的悬停色。 */
  _primaryHover: ThemeValue<'color'>;
  /** 主操作按下期间的颜色，不代表持续选中。 */
  _primaryPressed: ThemeValue<'color'>;
  /** 主色的低强调背景，文字和图标使用 _primary；暗色主题也适用。 */
  _primarySubtleBackground: ThemeValue<'color'>;
  /** 主色低强调区域的装饰边框，不作为唯一状态标识。 */
  _primaryBorder: ThemeValue<'color'>;
  /** _primary 实色背景上的文字和图标色。 */
  _textOnPrimary: ThemeValue<'color'>;
  /** 中性信息提示色。 */
  _info: ThemeValue<'color'>;
  /** 信息操作的悬停色。 */
  _infoHover: ThemeValue<'color'>;
  /** 信息操作的按下色。 */
  _infoPressed: ThemeValue<'color'>;
  /** 信息提示的低强调背景，文字和图标使用 _info。 */
  _infoSubtleBackground: ThemeValue<'color'>;
  /** 信息提示的装饰边框，不作为唯一状态标识。 */
  _infoBorder: ThemeValue<'color'>;
  /** 信息实色背景上的文字和图标色。 */
  _textOnInfo: ThemeValue<'color'>;
  /** 成功状态色。 */
  _success: ThemeValue<'color'>;
  /** 成功操作的悬停色。 */
  _successHover: ThemeValue<'color'>;
  /** 成功操作的按下色。 */
  _successPressed: ThemeValue<'color'>;
  /** 成功提示的低强调背景，文字和图标使用 _success。 */
  _successSubtleBackground: ThemeValue<'color'>;
  /** 成功提示的装饰边框，不作为唯一状态标识。 */
  _successBorder: ThemeValue<'color'>;
  /** 成功实色背景上的文字和图标色。 */
  _textOnSuccess: ThemeValue<'color'>;
  /** 警告状态色。 */
  _warning: ThemeValue<'color'>;
  /** 警告操作的悬停色。 */
  _warningHover: ThemeValue<'color'>;
  /** 警告操作的按下色。 */
  _warningPressed: ThemeValue<'color'>;
  /** 警告提示的低强调背景，文字和图标使用 _warning。 */
  _warningSubtleBackground: ThemeValue<'color'>;
  /** 警告提示的装饰边框，不作为唯一状态标识。 */
  _warningBorder: ThemeValue<'color'>;
  /** 警告实色背景上的文字和图标色。 */
  _textOnWarning: ThemeValue<'color'>;
  /** 错误和危险操作的强调色。 */
  _danger: ThemeValue<'color'>;
  /** 危险操作的悬停色。 */
  _dangerHover: ThemeValue<'color'>;
  /** 危险操作的按下色。 */
  _dangerPressed: ThemeValue<'color'>;
  /** 错误提示的低强调背景，文字和图标使用 _danger。 */
  _dangerSubtleBackground: ThemeValue<'color'>;
  /** 错误提示的装饰边框，不作为唯一状态标识。 */
  _dangerBorder: ThemeValue<'color'>;
  /** 危险实色背景上的文字和图标色。 */
  _textOnDanger: ThemeValue<'color'>;
  /** 主要文字颜色。 */
  _textPrimary: ThemeValue<'color'>;
  /** 次级文字颜色。 */
  _textSecondary: ThemeValue<'color'>;
  /** 第三级文字，用于辅助说明；不表示禁用。 */
  _textTertiary: ThemeValue<'color'>;
  /** 持续选中项的文字和图标色，与 _surfaceSelected 配对。 */
  _textSelected: ThemeValue<'color'>;
  /** 占位文字颜色。 */
  _textPlaceholder: ThemeValue<'color'>;
  /** 禁用文字颜色。 */
  _textDisabled: ThemeValue<'color'>;
  /** 反色表面上的文字颜色。 */
  _textInverse: ThemeValue<'color'>;
  /** 页面底色。 */
  _pageBackground: ThemeValue<'color'>;
  /** 内容表面的背景色。 */
  _surface: ThemeValue<'color'>;
  /** 弹出层和浮动面板的背景色。 */
  _surfaceRaised: ThemeValue<'color'>;
  /** 次要内容区域的背景色。 */
  _surfaceMuted: ThemeValue<'color'>;
  /** 普通交互区域的悬停背景色。 */
  _surfaceHover: ThemeValue<'color'>;
  /** 普通交互区域的按下背景色。 */
  _surfacePressed: ThemeValue<'color'>;
  /** 菜单项、选项等持续选中时的背景，与瞬时按下区分。 */
  _surfaceSelected: ThemeValue<'color'>;
  /** 禁用控件的背景色。 */
  _surfaceDisabled: ThemeValue<'color'>;
  /** 反色表面的背景色，与 _textInverse 配对。 */
  _surfaceInverse: ThemeValue<'color'>;
  /** 常规边框颜色。 */
  _border: ThemeValue<'color'>;
  /** 需要强调边界时使用的边框颜色。 */
  _borderStrong: ThemeValue<'color'>;
  /** 持续选中项的强调边框。 */
  _borderSelected: ThemeValue<'color'>;
  /** 内容分隔线颜色。 */
  _divider: ThemeValue<'color'>;
  /** 键盘焦点轮廓颜色。 */
  _focusRing: ThemeValue<'color'>;
  /** 模态遮罩颜色。 */
  _backdrop: ThemeValue<'color'>;
  /** 滚动条滑块颜色。 */
  _scrollbar: ThemeValue<'color'>;
  /** 滚动条滑块的悬停颜色。 */
  _scrollbarHover: ThemeValue<'color'>;
}

/** 字体族。 */
export interface FontFamilyTokens {
  /** 默认界面字体，包含中文字体回退。 */
  _ui: ThemeValue<'fontFamily'>;
  /** 代码和等宽内容的字体。 */
  _mono: ThemeValue<'fontFamily'>;
}

/** 内置字号使用 rem 跟随页面基准；自定义数字仍按 CSS 运行时的 px 规则处理。 */
export interface FontSizeTokens {
  /** 极小字号，内置 0.75rem。 */
  _extraSmall: ThemeValue<'fontSize'>;
  /** 小字号，内置 0.8125rem。 */
  _small: ThemeValue<'fontSize'>;
  /** 中等字号，内置 0.875rem；组件仍默认继承父级字号。 */
  _medium: ThemeValue<'fontSize'>;
  /** 大字号，内置 1rem。 */
  _large: ThemeValue<'fontSize'>;
  /** 特大字号，内置 1.25rem。 */
  _extraLarge: ThemeValue<'fontSize'>;
  /** 超大字号，内置 1.5rem。 */
  _extraExtraLarge: ThemeValue<'fontSize'>;
}

/** 字重。 */
export interface FontWeightTokens {
  /** 常规正文。 */
  _regular: ThemeValue<'fontWeight'>;
  /** 中等强调。 */
  _medium: ThemeValue<'fontWeight'>;
  /** 标题或强操作。 */
  _semibold: ThemeValue<'fontWeight'>;
  /** 强调文字。 */
  _bold: ThemeValue<'fontWeight'>;
}

/** 内置行高使用无单位倍数；自定义值接受原生 CSS 行高。 */
export interface LineHeightTokens {
  /** 紧凑标题行高。 */
  _tight: ThemeValue<'lineHeight'>;
  /** 正文行高。 */
  _normal: ThemeValue<'lineHeight'>;
  /** 长文本行高。 */
  _relaxed: ThemeValue<'lineHeight'>;
}

/** 内置控件高度使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
export interface HeightTokens<Value> {
  /** 极紧凑控件。 */
  _extraSmall: Value;
  /** 小型控件。 */
  _small: Value;
  /** 中等单行控件高度，14px 字号下约为 32px。 */
  _medium: Value;
  /** 大型控件。 */
  _large: Value;
  /** 特大控件。 */
  _extraLarge: Value;
}

/** 内置间距使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
export interface SpacingTokens<Value> {
  /** 无间距。 */
  _none: Value;
  /** 极小间距。 */
  _extraSmall: Value;
  /** 小间距。 */
  _small: Value;
  /** 中等内容间距。 */
  _medium: Value;
  /** 大间距。 */
  _large: Value;
  /** 区块间距。 */
  _extraLarge: Value;
  /** 大区块间距。 */
  _extraExtraLarge: Value;
}

/** 内置圆角使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
export interface BorderRadiusTokens {
  /** 直角。 */
  _none: ThemeValue<'borderRadius'>;
  /** 小型区域圆角。 */
  _small: ThemeValue<'borderRadius'>;
  /** 中等圆角。 */
  _medium: ThemeValue<'borderRadius'>;
  /** 面板圆角。 */
  _large: ThemeValue<'borderRadius'>;
  /** 胶囊形圆角。 */
  _pill: ThemeValue<'borderRadius'>;
  /** 椭圆圆角；正方形元素呈圆形。 */
  _circle: ThemeValue<'borderRadius'>;
}

/** 内置边框宽度使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
export interface BorderWidthTokens {
  /** 无边框。 */
  _none: ThemeValue<'borderWidth'>;
  /** 常规边框。 */
  _thin: ThemeValue<'borderWidth'>;
  /** 强调边框。 */
  _thick: ThemeValue<'borderWidth'>;
}

/** SVG 描边刻度使用无单位图形坐标；通常随 viewBox 缩放，不换算为 em。 */
export interface StrokeWidthTokens {
  /** 细描边，内置 1 个图形坐标单位。 */
  _thin: ThemeValue<'strokeWidth'>;
  /** 中等描边，内置 2 个图形坐标单位。 */
  _medium: ThemeValue<'strokeWidth'>;
  /** 粗描边，内置 3 个图形坐标单位。 */
  _thick: ThemeValue<'strokeWidth'>;
}

/** 阴影层级，由具体明暗主题提供；内置偏移和模糊半径使用 em。 */
export interface BoxShadowTokens {
  /** 无阴影。 */
  _none: ThemeValue<'boxShadow'>;
  /** 轻微抬升。 */
  _small: ThemeValue<'boxShadow'>;
  /** 浮动面板。 */
  _medium: ThemeValue<'boxShadow'>;
  /** 模态弹层。 */
  _large: ThemeValue<'boxShadow'>;
}

export interface OpacityTokens {
  /** 水波纹反馈层的最大不透明度。 */
  _ripple: ThemeValue<'opacity'>;
  /** 整体禁用态透明度。 */
  _disabled: ThemeValue<'opacity'>;
}

/** 过渡时长，带 ms 或 s 单位；减少动态效果由组件的媒体条件处理。 */
export interface TransitionDurationTokens {
  /** 短反馈。 */
  _fast: ThemeValue<'transitionDuration'>;
  /** 常规状态切换。 */
  _normal: ThemeValue<'transitionDuration'>;
  /** 较大区域展开收起。 */
  _slow: ThemeValue<'transitionDuration'>;
}

export interface TimingFunctionTokens {
  /** 常规状态切换曲线。 */
  _standard: ThemeValue<'transitionTimingFunction'>;
  /** 元素进入曲线。 */
  _enter: ThemeValue<'transitionTimingFunction'>;
  /** 元素离开曲线。 */
  _leave: ThemeValue<'transitionTimingFunction'>;
}

/** 同一层叠上下文内的基础层级；仍须服从实际 DOM 的层叠上下文。 */
export interface ZIndexTokens {
  /** 吸附在滚动视口边缘的内容。 */
  _affix: ThemeValue<'zIndex'>;
  /** 回到顶部等页面浮动操作，低于弹出层。 */
  _floating: ThemeValue<'zIndex'>;
  /** 下拉菜单和浮动选项。 */
  _dropdown: ThemeValue<'zIndex'>;
  /** 遮罩。 */
  _backdrop: ThemeValue<'zIndex'>;
  /** 模态内容。 */
  _modal: ThemeValue<'zIndex'>;
  /** 全局通知。 */
  _notification: ThemeValue<'zIndex'>;
  /** 浮动提示。 */
  _tooltip: ThemeValue<'zIndex'>;
}
