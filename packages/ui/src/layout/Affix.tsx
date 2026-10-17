import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
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
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: AffixProps) => {
    const s = useCss();
    return (
      <div
        {...rest}
        class={cx(
          s
            .position('sticky')
            .zIndex(bx(zIndex))
            .top(bx(side === 'top' ? offset : 'auto'))
            .bottom(bx(side === 'bottom' ? offset : 'auto'))
            .alignSelf('flex-start')
            .minWidth(0),
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
