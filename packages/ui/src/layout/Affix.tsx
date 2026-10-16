import type { CssValue } from '@zerodep-vue/core';
import { _component, _div } from '@zerodep-vue/core';
import { useCss } from '../config/Provider.tsx';
import type { ElementProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
export interface AffixProps extends ElementProps {
  /** 粘附的视口边缘，默认 top。 */
  side?: 'top' | 'bottom';
  /** 相对最近滚动祖先的边缘距离，默认 0。 */
  offset?: CssValue<'top', UiTheme>;
  zIndex?: CssValue<'zIndex', UiTheme>;
}

/** 原生 sticky 固钉：保留布局位置，并受父容器边界约束。 */
export const Affix = _component(
  ({
    side = 'top',
    offset = 0,
    zIndex = '_affix',
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: AffixProps) => {
    const css = useCss();
    return (
      <_div
        css={[
          css(() => ({
            position: 'sticky',
            zIndex: zIndex,
            top: side === 'top' ? offset : 'auto',
            bottom: side === 'bottom' ? offset : 'auto',
            alignSelf: 'flex-start',
            minWidth: 0,
          })),
          cssProp,
        ]}
        {...rest}
      >
        {children}
      </_div>
    );
  },
);
