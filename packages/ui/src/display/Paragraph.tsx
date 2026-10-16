import type { CssValue } from '@zerodep-vue/core';
import { _component, _p } from '@zerodep-vue/core';
import { useCss } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';
import type { TextProps } from './Text.tsx';

/** 原生段落；内容应为文字及行内元素，块级区域交给布局容器。 */
export interface ParagraphProps extends TextProps {
  /** CSS textAlign；支持 start/end，跟随当前文字方向。 */
  textAlign?: CssValue<'textAlign', UiTheme>;
}

/** 原生 p，默认正文行高、零外边距，字号和颜色继续继承。 */
export const Paragraph = _component(
  ({
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
  }: ParagraphProps) => {
    const css = useCss();
    const style = css(() => [
      {
        margin: 0,
        lineHeight: '_normal',
        color: color,
        fontSize: size,
        fontWeight: fontWeight,
      },
      {
        lineHeight: lineHeight,
        textAlign: textAlign,
      },
    ]);
    return (
      <_p css={[style, cssProp]} {...rest}>
        {children}
      </_p>
    );
  },
);
