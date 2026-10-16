import { _component, _div, _span } from '@zerodep-vue/core';
import { useCss } from '../config/Provider.tsx';
import type { ElementProps } from '../config/props.ts';
export interface DividerProps extends ElementProps {
  /** 分隔线方向，默认 horizontal。 */
  orientation?: 'horizontal' | 'vertical';
  /** 纯装饰分隔，不向辅助技术声明 separator。 */
  decorative?: boolean;
}

/** 有语义的分隔线；文字可通过 children 放在线段中间。 */
export const Divider = _component(
  ({
    orientation = 'horizontal',
    decorative = false,
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: DividerProps) => {
    const css = useCss();
    const style = css(() => ({
      display: 'flex',
      alignItems: 'center',
      gap: '0.75em',
      color: '_divider',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      alignSelf: 'stretch',
      flexShrink: 0,
      minWidth: 0,
      minHeight: 0,
    }));
    const line = css(() => ({
      backgroundColor: 'currentColor',
      flex: '1 1 auto',
      minWidth: orientation === 'vertical' ? '0.0625em' : '1em',
      minHeight: orientation === 'vertical' ? '1em' : '0.0625em',
    }));
    return (
      <_div
        css={[style, cssProp]}
        {...rest}
        role={decorative ? 'none' : 'separator'}
        aria-orientation={decorative ? undefined : orientation}
      >
        <_span css={line} aria-hidden="true" />
        {children != null && (
          <>
            <_span
              css={css({
                color: '_textSecondary',
              })}
            >
              {children}
            </_span>
            <_span css={line} aria-hidden="true" />
          </>
        )}
      </_div>
    );
  },
);
