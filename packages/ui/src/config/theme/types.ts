import type { SystemKeywords } from '@zerodep-vue/core';
import type { Ref, UnwrapRef } from 'vue';

type ThemeValue<Value extends string | number = string> = Value | Ref<Value>;

/** 所有 UI 主题必须实现的完整契约；沿用 CSS 属性分组和 _ 名称，成员可使用 Vue Ref。 */
export interface UiTheme extends SystemKeywords {
  /** 共享语义颜色，可用于 color、backgroundColor、borderColor 等颜色属性。 */
  readonly color: {
    /** 主操作色，也用于对应低强调背景上的文字和图标。 */
    _primary: ThemeValue;
    /** 主操作的悬停色。 */
    _primaryHover: ThemeValue;
    /** 主操作按下期间的颜色，不代表持续选中。 */
    _primaryPressed: ThemeValue;
    /** 主色的低强调背景，文字和图标使用 _primary；暗色主题也适用。 */
    _primarySubtleBackground: ThemeValue;
    /** 主色低强调区域的装饰边框，不作为唯一状态标识。 */
    _primaryBorder: ThemeValue;
    /** _primary 实色背景上的文字和图标色。 */
    _textOnPrimary: ThemeValue;
    /** 中性信息提示色。 */
    _info: ThemeValue;
    /** 信息操作的悬停色。 */
    _infoHover: ThemeValue;
    /** 信息操作的按下色。 */
    _infoPressed: ThemeValue;
    /** 信息提示的低强调背景，文字和图标使用 _info。 */
    _infoSubtleBackground: ThemeValue;
    /** 信息提示的装饰边框，不作为唯一状态标识。 */
    _infoBorder: ThemeValue;
    /** 信息实色背景上的文字和图标色。 */
    _textOnInfo: ThemeValue;
    /** 成功状态色。 */
    _success: ThemeValue;
    /** 成功操作的悬停色。 */
    _successHover: ThemeValue;
    /** 成功操作的按下色。 */
    _successPressed: ThemeValue;
    /** 成功提示的低强调背景，文字和图标使用 _success。 */
    _successSubtleBackground: ThemeValue;
    /** 成功提示的装饰边框，不作为唯一状态标识。 */
    _successBorder: ThemeValue;
    /** 成功实色背景上的文字和图标色。 */
    _textOnSuccess: ThemeValue;
    /** 警告状态色。 */
    _warning: ThemeValue;
    /** 警告操作的悬停色。 */
    _warningHover: ThemeValue;
    /** 警告操作的按下色。 */
    _warningPressed: ThemeValue;
    /** 警告提示的低强调背景，文字和图标使用 _warning。 */
    _warningSubtleBackground: ThemeValue;
    /** 警告提示的装饰边框，不作为唯一状态标识。 */
    _warningBorder: ThemeValue;
    /** 警告实色背景上的文字和图标色。 */
    _textOnWarning: ThemeValue;
    /** 错误和危险操作的强调色。 */
    _danger: ThemeValue;
    /** 危险操作的悬停色。 */
    _dangerHover: ThemeValue;
    /** 危险操作的按下色。 */
    _dangerPressed: ThemeValue;
    /** 错误提示的低强调背景，文字和图标使用 _danger。 */
    _dangerSubtleBackground: ThemeValue;
    /** 错误提示的装饰边框，不作为唯一状态标识。 */
    _dangerBorder: ThemeValue;
    /** 危险实色背景上的文字和图标色。 */
    _textOnDanger: ThemeValue;
    /** 主要文字颜色。 */
    _textPrimary: ThemeValue;
    /** 次级文字颜色。 */
    _textSecondary: ThemeValue;
    /** 第三级文字，用于辅助说明；不表示禁用。 */
    _textTertiary: ThemeValue;
    /** 持续选中项的文字和图标色，与 _surfaceSelected 配对。 */
    _textSelected: ThemeValue;
    /** 占位文字颜色。 */
    _textPlaceholder: ThemeValue;
    /** 禁用文字颜色。 */
    _textDisabled: ThemeValue;
    /** 反色表面上的文字颜色。 */
    _textInverse: ThemeValue;
    /** 页面底色。 */
    _pageBackground: ThemeValue;
    /** 内容表面的背景色。 */
    _surface: ThemeValue;
    /** 弹出层和浮动面板的背景色。 */
    _surfaceRaised: ThemeValue;
    /** 次要内容区域的背景色。 */
    _surfaceMuted: ThemeValue;
    /** 普通交互区域的悬停背景色。 */
    _surfaceHover: ThemeValue;
    /** 普通交互区域的按下背景色。 */
    _surfacePressed: ThemeValue;
    /** 菜单项、选项等持续选中时的背景，与瞬时按下区分。 */
    _surfaceSelected: ThemeValue;
    /** 禁用控件的背景色。 */
    _surfaceDisabled: ThemeValue;
    /** 反色表面的背景色，与 _textInverse 配对。 */
    _surfaceInverse: ThemeValue;
    /** 常规边框颜色。 */
    _border: ThemeValue;
    /** 需要强调边界时使用的边框颜色。 */
    _borderStrong: ThemeValue;
    /** 持续选中项的强调边框。 */
    _borderSelected: ThemeValue;
    /** 内容分隔线颜色。 */
    _divider: ThemeValue;
    /** 键盘焦点轮廓颜色。 */
    _focusRing: ThemeValue;
    /** 模态遮罩颜色。 */
    _backdrop: ThemeValue;
    /** 滚动条滑块颜色。 */
    _scrollbar: ThemeValue;
    /** 滚动条滑块的悬停颜色。 */
    _scrollbarHover: ThemeValue;
  };
  /** 字体族。 */
  readonly fontFamily: {
    /** 默认界面字体，包含中文字体回退。 */
    _ui: ThemeValue;
    /** 代码和等宽内容的字体。 */
    _mono: ThemeValue;
  };
  /** 内置字号使用 rem 跟随页面基准；自定义数字仍按 CSS 运行时的 px 规则处理。 */
  readonly fontSize: {
    /** 极小字号，内置 0.75rem。 */
    _extraSmall: ThemeValue<string | number>;
    /** 小字号，内置 0.8125rem。 */
    _small: ThemeValue<string | number>;
    /** 中等字号，内置 0.875rem；组件仍默认继承父级字号。 */
    _medium: ThemeValue<string | number>;
    /** 大字号，内置 1rem。 */
    _large: ThemeValue<string | number>;
    /** 特大字号，内置 1.25rem。 */
    _extraLarge: ThemeValue<string | number>;
    /** 超大字号，内置 1.5rem。 */
    _extraExtraLarge: ThemeValue<string | number>;
  };
  /** 字重。 */
  readonly fontWeight: {
    /** 常规正文。 */
    _regular: ThemeValue<number>;
    /** 中等强调。 */
    _medium: ThemeValue<number>;
    /** 标题或强操作。 */
    _semibold: ThemeValue<number>;
    /** 强调文字。 */
    _bold: ThemeValue<number>;
  };
  /** 无单位行高，按当前字号的倍数计算。 */
  readonly lineHeight: {
    /** 紧凑标题行高。 */
    _tight: ThemeValue<number>;
    /** 正文行高。 */
    _normal: ThemeValue<number>;
    /** 长文本行高。 */
    _relaxed: ThemeValue<number>;
  };
  /** 内置控件高度使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly height: {
    /** 极紧凑控件。 */
    _extraSmall: ThemeValue<string | number>;
    /** 小型控件。 */
    _small: ThemeValue<string | number>;
    /** 中等单行控件高度，14px 字号下约为 32px。 */
    _medium: ThemeValue<string | number>;
    /** 大型控件。 */
    _large: ThemeValue<string | number>;
    /** 特大控件。 */
    _extraLarge: ThemeValue<string | number>;
  };
  /** 最小高度使用同一套控件尺寸名称。 */
  readonly minHeight: UiTheme['height'];
  /** 内置间距使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly padding: {
    /** 无间距。 */
    _none: ThemeValue<string | number>;
    /** 极小间距。 */
    _extraSmall: ThemeValue<string | number>;
    /** 小间距。 */
    _small: ThemeValue<string | number>;
    /** 中等内容间距。 */
    _medium: ThemeValue<string | number>;
    /** 大间距。 */
    _large: ThemeValue<string | number>;
    /** 区块间距。 */
    _extraLarge: ThemeValue<string | number>;
    /** 大区块间距。 */
    _extraExtraLarge: ThemeValue<string | number>;
  };
  /** 外边距使用同一套间距名称。 */
  readonly margin: UiTheme['padding'];
  /** Flex/Grid 间距使用同一套间距名称。 */
  readonly gap: UiTheme['padding'];
  /** 行间距使用同一套间距名称；修改此组不会修改 gap 或 columnGap。 */
  readonly rowGap: UiTheme['padding'];
  /** 列间距使用同一套间距名称；修改此组不会修改 gap 或 rowGap。 */
  readonly columnGap: UiTheme['padding'];
  /** 内置圆角使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly borderRadius: {
    /** 直角。 */
    _none: ThemeValue<string | number>;
    /** 小型区域圆角。 */
    _small: ThemeValue<string | number>;
    /** 中等圆角。 */
    _medium: ThemeValue<string | number>;
    /** 面板圆角。 */
    _large: ThemeValue<string | number>;
    /** 胶囊形圆角。 */
    _pill: ThemeValue<string | number>;
    /** 椭圆圆角；正方形元素呈圆形。 */
    _circle: ThemeValue<string | number>;
  };
  /** 内置边框宽度使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly borderWidth: {
    /** 无边框。 */
    _none: ThemeValue<string | number>;
    /** 常规边框。 */
    _thin: ThemeValue<string | number>;
    /** 强调边框。 */
    _thick: ThemeValue<string | number>;
  };
  /** SVG 描边刻度使用无单位图形坐标；通常随 viewBox 缩放，不换算为 em。 */
  readonly strokeWidth: {
    /** 细描边，内置 1 个图形坐标单位。 */
    _thin: ThemeValue<string | number>;
    /** 中等描边，内置 2 个图形坐标单位。 */
    _medium: ThemeValue<string | number>;
    /** 粗描边，内置 3 个图形坐标单位。 */
    _thick: ThemeValue<string | number>;
  };
  /** 阴影层级，由具体明暗主题提供；内置偏移和模糊半径使用 em。 */
  readonly boxShadow: {
    /** 无阴影。 */
    _none: ThemeValue;
    /** 轻微抬升。 */
    _small: ThemeValue;
    /** 浮动面板。 */
    _medium: ThemeValue;
    /** 模态弹层。 */
    _large: ThemeValue;
  };
  readonly opacity: {
    /** 整体禁用态透明度。 */
    _disabled: ThemeValue<number>;
  };
  /** 过渡时长，带 ms 或 s 单位；减少动态效果由组件的媒体条件处理。 */
  readonly transitionDuration: {
    /** 短反馈。 */
    _fast: ThemeValue;
    /** 常规状态切换。 */
    _normal: ThemeValue;
    /** 较大区域展开收起。 */
    _slow: ThemeValue;
  };
  readonly transitionTimingFunction: {
    /** 常规状态切换曲线。 */
    _standard: ThemeValue;
    /** 元素进入曲线。 */
    _enter: ThemeValue;
    /** 元素离开曲线。 */
    _leave: ThemeValue;
  };
  /** 同一层叠上下文内的基础层级；仍须服从实际 DOM 的层叠上下文。 */
  readonly zIndex: {
    /** 下拉菜单和浮动选项。 */
    _dropdown: ThemeValue<number>;
    /** 遮罩。 */
    _backdrop: ThemeValue<number>;
    /** 模态内容。 */
    _modal: ThemeValue<number>;
    /** 全局通知。 */
    _notification: ThemeValue<number>;
    /** 浮动提示。 */
    _tooltip: ThemeValue<number>;
  };
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
