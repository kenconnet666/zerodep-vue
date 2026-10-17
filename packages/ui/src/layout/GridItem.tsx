import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { useCss } from '../config/Provider.tsx';
import type { ElementProps, LayoutTag } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';

export interface GridItemProps extends ElementProps {
  as?: LayoutTag;
  /** 列位置或跨度，例如 2 / 4、span 2。 */
  column?: CssValue<'gridColumn', UiTheme>;
  /** 行位置或跨度。 */
  row?: CssValue<'gridRow', UiTheme>;
  area?: CssValue<'gridArea', UiTheme>;
  align?: CssValue<'alignSelf', UiTheme>;
  justify?: CssValue<'justifySelf', UiTheme>;
}

/** 可选网格项目；普通元素也可直接作为 Grid 的子项。 */
export const GridItem = _component(
  ({
    as: Tag = 'div',
    column,
    row,
    area,
    align,
    justify,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: GridItemProps) => {
    const s = useCss();
    const style = s
      .minWidth(0)
      .minHeight(0)
      .gridArea(bx(area))
      .gridColumn(bx(column))
      .gridRow(bx(row))
      .alignSelf(bx(align))
      .justifySelf(bx(justify));
    return (
      <Tag {...rest} class={cx(style, className)}>
        {children}
      </Tag>
    );
  },
);
