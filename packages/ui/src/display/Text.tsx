import type { CssValue, Props } from '@zerodep-vue/core';
import { _component, _span } from '@zerodep-vue/core';
import type { VNodeChild } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';

/** 行内文字的公共属性；字号、颜色和字重默认继承当前区域。 */
export type TextProps = Props<
  typeof _span,
  {
    /** CSS color；支持当前主题颜色名，默认继承文字颜色。 */
    color?: CssValue<'color', UiTheme>;
    /** CSS fontSize；沿用 Icon 的 size 命名，默认继承字号。 */
    size?: CssValue<'fontSize', UiTheme>;
    /** CSS fontWeight；仅改变字重，语义强调使用 strong 等原生标签。 */
    fontWeight?: CssValue<'fontWeight', UiTheme>;
    /** CSS lineHeight；数字表示无单位的字号倍数。 */
    lineHeight?: CssValue<'lineHeight', UiTheme>;
    /** 文字、图标及行内内容；不隐式解析 HTML 字符串。 */
    children?: VNodeChild;
    /** 内容由 children 管理，不接受替换子树的 DOM 属性。 */
    innerHTML?: never;
    textContent?: never;
  }
>;

/** 原生 span，不额外增加布局或交互。 */
export const Text = _component(
  ({
    color,
    size,
    fontWeight,
    lineHeight,
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: TextProps) => {
    const css = useCss();
    const style = css(() => ({
      color: color,
      fontSize: size,
      fontWeight: fontWeight,
      lineHeight: lineHeight,
    }));
    return (
      <_span css={[style, cssProp]} {...rest}>
        {children}
      </_span>
    );
  },
);
