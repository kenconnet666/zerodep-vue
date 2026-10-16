import type { CssValue } from '@zerodep-vue/core';
import { _component } from '@zerodep-vue/core';
import { useCss } from '../config/Provider.tsx';
import type { ElementProps, LayoutTag } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
export interface GridProps extends ElementProps {
  as?: LayoutTag;
  inline?: boolean;
  /** 原生列轨道，例如 repeat(auto-fit, minmax(16em, 1fr))；默认单列。 */
  columns?: CssValue<'gridTemplateColumns', UiTheme>;
  /** 原生行轨道。 */
  rows?: CssValue<'gridTemplateRows', UiTheme>;
  /** 命名区域，直接使用 CSS grid-template-areas 语法。 */
  areas?: CssValue<'gridTemplateAreas', UiTheme>;
  autoFlow?: CssValue<'gridAutoFlow', UiTheme>;
  autoRows?: CssValue<'gridAutoRows', UiTheme>;
  autoColumns?: CssValue<'gridAutoColumns', UiTheme>;
  align?: CssValue<'alignItems', UiTheme>;
  justify?: CssValue<'justifyItems', UiTheme>;
  gap?: CssValue<'gap', UiTheme>;
  rowGap?: CssValue<'rowGap', UiTheme>;
  columnGap?: CssValue<'columnGap', UiTheme>;
}

/** 二维原生 Grid；响应式轨道和容器查询继续使用 CSS，不引入另一套断点语法。 */
export const Grid = _component(
  ({
    as: Tag = 'div',
    inline = false,
    columns = 'minmax(0, 1fr)',
    rows,
    areas,
    autoFlow,
    autoRows,
    autoColumns,
    align,
    justify,
    gap,
    rowGap,
    columnGap,
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: GridProps) => {
    const css = useCss();
    const style = css(() => ({
      display: inline ? 'inline-grid' : 'grid',
      minWidth: 0,
      minHeight: 0,
      gridTemplateColumns: columns,
      gridTemplateRows: rows,
      gridTemplateAreas: areas,
      gridAutoFlow: autoFlow,
      gridAutoRows: autoRows,
      gridAutoColumns: autoColumns,
      alignItems: align,
      justifyItems: justify,
      gap: gap,
      rowGap: rowGap,
      columnGap: columnGap,
    }));
    return (
      <Tag css={[style, cssProp]} {...rest}>
        {children}
      </Tag>
    );
  },
);
