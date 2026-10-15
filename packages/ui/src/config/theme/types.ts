import type { SystemKeywords } from '@zerodep-vue/core';
import type { Ref } from 'vue';

type ThemeValue<Value extends string | number = string> = Value | Ref<Value>;

/** 所有 UI 主题必须实现的完整契约；沿用 CSS 属性分组和 _ 名称，成员可使用 Vue Ref。 */
export interface UiTheme extends SystemKeywords {
  /** 共享语义颜色，可用于 color、backgroundColor、borderColor 等颜色属性。 */
  readonly color: {
    /** 品牌主色，用于主要操作和强调内容。 */
    _brand: ThemeValue;
    /** 品牌操作的悬停色。 */
    _brandHover: ThemeValue;
    /** 品牌操作的按下色。 */
    _brandActive: ThemeValue;
    /** 品牌提示或选中区域的浅背景。 */
    _brandSoft: ThemeValue;
    /** 品牌实色背景上的文字和图标色。 */
    _onBrand: ThemeValue;
    /** 中性信息提示色。 */
    _info: ThemeValue;
    /** 信息操作的悬停色。 */
    _infoHover: ThemeValue;
    /** 信息操作的按下色。 */
    _infoActive: ThemeValue;
    /** 信息提示的浅背景。 */
    _infoSoft: ThemeValue;
    /** 信息实色背景上的文字和图标色。 */
    _onInfo: ThemeValue;
    /** 成功状态色。 */
    _success: ThemeValue;
    /** 成功操作的悬停色。 */
    _successHover: ThemeValue;
    /** 成功操作的按下色。 */
    _successActive: ThemeValue;
    /** 成功提示的浅背景。 */
    _successSoft: ThemeValue;
    /** 成功实色背景上的文字和图标色。 */
    _onSuccess: ThemeValue;
    /** 警告状态色。 */
    _warning: ThemeValue;
    /** 警告操作的悬停色。 */
    _warningHover: ThemeValue;
    /** 警告操作的按下色。 */
    _warningActive: ThemeValue;
    /** 警告提示的浅背景。 */
    _warningSoft: ThemeValue;
    /** 警告实色背景上的文字和图标色。 */
    _onWarning: ThemeValue;
    /** 错误和危险操作的强调色。 */
    _danger: ThemeValue;
    /** 危险操作的悬停色。 */
    _dangerHover: ThemeValue;
    /** 危险操作的按下色。 */
    _dangerActive: ThemeValue;
    /** 错误提示的浅背景。 */
    _dangerSoft: ThemeValue;
    /** 危险实色背景上的文字和图标色。 */
    _onDanger: ThemeValue;
    /** 主要文字颜色。 */
    _text: ThemeValue;
    /** 次级文字颜色。 */
    _textSecondary: ThemeValue;
    /** 辅助说明文字颜色。 */
    _textMuted: ThemeValue;
    /** 占位文字颜色。 */
    _textPlaceholder: ThemeValue;
    /** 禁用文字颜色。 */
    _textDisabled: ThemeValue;
    /** 反色表面上的文字颜色。 */
    _textInverse: ThemeValue;
    /** 页面底色。 */
    _canvas: ThemeValue;
    /** 内容表面的背景色。 */
    _surface: ThemeValue;
    /** 弹出层和浮动面板的背景色。 */
    _surfaceRaised: ThemeValue;
    /** 次要内容区域的背景色。 */
    _surfaceMuted: ThemeValue;
    /** 普通交互区域的悬停背景色。 */
    _surfaceHover: ThemeValue;
    /** 普通交互区域的按下背景色。 */
    _surfaceActive: ThemeValue;
    /** 禁用控件的背景色。 */
    _surfaceDisabled: ThemeValue;
    /** 反色表面的背景色，与 _textInverse 配对。 */
    _surfaceInverse: ThemeValue;
    /** 常规边框颜色。 */
    _border: ThemeValue;
    /** 需要强调边界时使用的边框颜色。 */
    _borderStrong: ThemeValue;
    /** 内容分隔线颜色。 */
    _divider: ThemeValue;
    /** 键盘焦点轮廓颜色。 */
    _focusRing: ThemeValue;
    /** 模态遮罩颜色。 */
    _overlay: ThemeValue;
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
    /** 紧凑注释字号。 */
    _caption: ThemeValue<string | number>;
    /** 小号说明文字。 */
    _small: ThemeValue<string | number>;
    /** 默认正文字号。 */
    _body: ThemeValue<string | number>;
    /** 大号正文或控件文字。 */
    _large: ThemeValue<string | number>;
    /** 区域标题字号。 */
    _title: ThemeValue<string | number>;
    /** 页面标题字号。 */
    _heading: ThemeValue<string | number>;
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
    _body: ThemeValue<number>;
    /** 长文本行高。 */
    _relaxed: ThemeValue<number>;
  };
  /** 内置控件高度使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly height: {
    /** 极紧凑控件。 */
    _xs: ThemeValue<string | number>;
    /** 小型控件。 */
    _sm: ThemeValue<string | number>;
    /** 默认控件。 */
    _control: ThemeValue<string | number>;
    /** 大型控件。 */
    _lg: ThemeValue<string | number>;
    /** 特大控件。 */
    _xl: ThemeValue<string | number>;
  };
  /** 最小高度使用同一套控件尺寸名称。 */
  readonly minHeight: UiTheme['height'];
  /** 内置间距使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly padding: {
    /** 无间距。 */
    _none: ThemeValue<string | number>;
    /** 极小间距。 */
    _xs: ThemeValue<string | number>;
    /** 小间距。 */
    _sm: ThemeValue<string | number>;
    /** 默认内容间距。 */
    _md: ThemeValue<string | number>;
    /** 大间距。 */
    _lg: ThemeValue<string | number>;
    /** 区块间距。 */
    _xl: ThemeValue<string | number>;
    /** 大区块间距。 */
    _xxl: ThemeValue<string | number>;
  };
  /** 外边距使用同一套间距名称。 */
  readonly margin: UiTheme['padding'];
  /** Flex/Grid 间距使用同一套间距名称。 */
  readonly gap: UiTheme['padding'];
  /** 内置圆角使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly borderRadius: {
    /** 直角。 */
    _none: ThemeValue<string | number>;
    /** 小型区域圆角。 */
    _sm: ThemeValue<string | number>;
    /** 默认控件圆角。 */
    _control: ThemeValue<string | number>;
    /** 面板圆角。 */
    _lg: ThemeValue<string | number>;
    /** 胶囊形圆角。 */
    _pill: ThemeValue<string | number>;
  };
  /** 内置边框宽度使用 em 跟随组件字号；自定义数字仍按 px 处理。 */
  readonly borderWidth: {
    /** 常规边框。 */
    _thin: ThemeValue<string | number>;
    /** 强调边框。 */
    _strong: ThemeValue<string | number>;
  };
  /** 阴影层级，由具体明暗主题提供；内置偏移和模糊半径使用 em。 */
  readonly boxShadow: {
    /** 轻微抬升。 */
    _sm: ThemeValue;
    /** 浮动面板。 */
    _md: ThemeValue;
    /** 模态弹层。 */
    _lg: ThemeValue;
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
    _overlay: ThemeValue<number>;
    /** 模态内容。 */
    _modal: ThemeValue<number>;
    /** 全局通知。 */
    _notification: ThemeValue<number>;
    /** 浮动提示。 */
    _tooltip: ThemeValue<number>;
  };
}
