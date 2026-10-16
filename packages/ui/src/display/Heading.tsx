import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { computed } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';
import type { TextProps } from './Text.tsx';

export interface HeadingProps extends TextProps {
  /** 文档中的标题层级，决定真实 h1–h6 标签；视觉大小由 size 独立控制。 */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /** 同 s.textAlign(...)；支持 start/end，跟随当前文字方向。 */
  textAlign?: CssValue<'textAlign', UiTheme>;
}

/** 原生语义标题，默认继承字号，使用主题标题字重和紧凑行高。 */
export const Heading = _component(
  ({
    level,
    color,
    size,
    fontWeight,
    lineHeight,
    textAlign,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: HeadingProps) => {
    const s = useCss();
    const Tag = computed(() => {
      switch (level) {
        case 1:
          return 'h1';
        case 2:
          return 'h2';
        case 3:
          return 'h3';
        case 4:
          return 'h4';
        case 5:
          return 'h5';
        case 6:
          return 'h6';
        default:
          throw new RangeError('Heading level 必须是 1 到 6 的整数。');
      }
    });
    const style = s
      .margin(0)
      .fontSize('inherit')
      .fontWeight('_semibold')
      .lineHeight('_tight')
      .color(bx(color))
      .fontSize(bx(size))
      .fontWeight(bx(fontWeight))
      .lineHeight(bx(lineHeight))
      .textAlign(bx(textAlign));
    return (
      <Tag.value {...rest} class={cx(style, className)}>
        {children}
      </Tag.value>
    );
  },
);
