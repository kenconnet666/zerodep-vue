import { _component, bx, cx } from '@zerodep-vue/core';
import type { ElementProps } from '../config/props.ts';
import { useCss } from '../config/Provider.tsx';

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
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: DividerProps) => {
    const s = useCss();
    const style = s
      .display('flex')
      .alignItems('center')
      .gap('0.75em')
      .color('_divider')
      .flexDirection(bx(orientation === 'vertical' ? 'column' : 'row'))
      .alignSelf('stretch')
      .flexShrink(0)
      .minWidth(0)
      .minHeight(0);
    const line = s
      .backgroundColor('currentColor')
      .flex('1 1 auto')
      .minWidth(bx(orientation === 'vertical' ? '0.0625em' : '1em'))
      .minHeight(bx(orientation === 'vertical' ? '1em' : '0.0625em'));
    return (
      <div
        {...rest}
        role={decorative ? 'none' : 'separator'}
        aria-orientation={decorative ? undefined : orientation}
        class={cx(style, className)}
      >
        <span aria-hidden="true" class={line} />
        {children != null && (
          <>
            <span class={s.color('_textSecondary')}>{children}</span>
            <span aria-hidden="true" class={line} />
          </>
        )}
      </div>
    );
  },
);
