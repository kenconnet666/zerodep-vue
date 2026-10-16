import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { useCss } from '../config/Provider.tsx';
import type { ElementProps, LayoutTag } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';

export interface FlexProps extends ElementProps {
  /** 原生容器标签，默认 div。 */
  as?: LayoutTag;
  /** 行内 Flex 容器。 */
  inline?: boolean;
  /** 主轴方向，默认 row；row 遵循当前 dir。 */
  direction?: CssValue<'flexDirection', UiTheme>;
  /** 换行方式，默认 nowrap。 */
  wrap?: CssValue<'flexWrap', UiTheme>;
  /** 交叉轴对齐。 */
  align?: CssValue<'alignItems', UiTheme>;
  /** 主轴剩余空间分配。 */
  justify?: CssValue<'justifyContent', UiTheme>;
  /** 项目间距，支持 _small 等主题刻度。 */
  gap?: CssValue<'gap', UiTheme>;
  rowGap?: CssValue<'rowGap', UiTheme>;
  columnGap?: CssValue<'columnGap', UiTheme>;
}

/** 一维布局，直接渲染子内容，不为每个项目增加包装节点。 */
export const Flex = _component(
  ({
    as: Tag = 'div',
    inline = false,
    direction = 'row',
    wrap = 'nowrap',
    align,
    justify,
    gap,
    rowGap,
    columnGap,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: FlexProps) => {
    const s = useCss();
    const style = s
      .display(bx(inline ? 'inline-flex' : 'flex'))
      .minWidth(0)
      .minHeight(0)
      .flexDirection(bx(direction))
      .flexWrap(bx(wrap))
      .alignItems(bx(align))
      .justifyContent(bx(justify))
      .gap(bx(gap))
      .rowGap(bx(rowGap))
      .columnGap(bx(columnGap));
    return (
      <Tag {...rest} class={cx(style, className)}>
        {children}
      </Tag>
    );
  },
);
