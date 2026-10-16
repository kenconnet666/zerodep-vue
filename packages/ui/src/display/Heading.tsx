import type { CssValue } from '@zerodep-vue/core';
import { _component } from '@zerodep-vue/core';
import { useCss } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';
import type { TextProps } from './Text.tsx';
export interface HeadingProps extends TextProps {
  /** 直接指定真实 h1–h6 标签；视觉大小由 size 独立控制。 */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** CSS textAlign；支持 start/end，跟随当前文字方向。 */
  textAlign?: CssValue<'textAlign', UiTheme>;
}

/** 原生语义标题，默认继承字号，使用主题标题字重和紧凑行高。 */
export const Heading = _component(
  ({
    as: Tag,
    color,
    size,
    fontWeight,
    lineHeight,
    textAlign,
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: HeadingProps) => {
    const css = useCss();
    const style = css(() => [
      {
        margin: 0,
        fontSize: 'inherit',
        fontWeight: '_semibold',
        lineHeight: '_tight',
        color: color,
      },
      {
        fontSize: size,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        textAlign: textAlign,
      },
    ]);
    return (
      <Tag css={[style, cssProp]} {...rest}>
        {children}
      </Tag>
    );
  },
);
