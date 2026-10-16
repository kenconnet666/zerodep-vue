import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssInput, CssValue } from '@zerodep-vue/core';
import type { HTMLAttributes, VNodeChild } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';

/** 行内文字的公共属性；字号、颜色和字重默认继承当前区域。 */
export interface TextProps extends /* @vue-ignore */ Omit<HTMLAttributes, 'class' | 'color'> {
  /** 同 s.color(...)；支持当前主题颜色名，默认继承文字颜色。 */
  color?: CssValue<'color', UiTheme>;
  /** 同 s.fontSize(...)；沿用 Icon 的 size 命名，默认继承字号。 */
  size?: CssValue<'fontSize', UiTheme>;
  /** 同 s.fontWeight(...)；仅改变字重，语义强调使用 strong 等原生标签。 */
  fontWeight?: CssValue<'fontWeight', UiTheme>;
  /** 同 s.lineHeight(...)；数字表示无单位的字号倍数。 */
  lineHeight?: CssValue<'lineHeight', UiTheme>;
  /** 外部链式样式最后组合；普通类名和原生 style 遵循浏览器层叠。 */
  class?: CssInput;
  /** 文字、图标及行内内容；不隐式解析 HTML 字符串。 */
  children?: VNodeChild;
  /** 内容由 children 管理，不接受替换子树的 DOM 属性。 */
  innerHTML?: never;
  textContent?: never;
}

/** 原生 span，不额外增加布局或交互。 */
export const Text = _component(
  ({
    color,
    size,
    fontWeight,
    lineHeight,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: TextProps) => {
    const s = useCss();
    const style = s
      .color(bx(color))
      .fontSize(bx(size))
      .fontWeight(bx(fontWeight))
      .lineHeight(bx(lineHeight));
    return (
      <span {...rest} class={cx(style, className)}>
        {children}
      </span>
    );
  },
);
