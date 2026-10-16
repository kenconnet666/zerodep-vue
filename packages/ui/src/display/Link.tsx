import { _component, bx, cx } from '@zerodep-vue/core';
import type { AnchorHTMLAttributes, Ref } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { TextProps } from './Text.tsx';

/** 原生链接属性直接透传；应用路由可通过 href 和 onClick 自行接入。 */
export interface LinkProps
  extends TextProps, /* @vue-ignore */ Omit<AnchorHTMLAttributes, keyof TextProps> {
  /** 原生导航地址；执行操作应使用按钮。 */
  href: string;
  /** 禁用时移除原生导航地址及 Tab 停靠点，并阻止点击回调。 */
  disabled?: boolean;
  /** 实际链接 DOM 引用，供浮层和焦点操作通过 Props 组合。 */
  elementRef?: Ref<HTMLElement | null | undefined>;
}

/** 原生 a，保留浏览器导航、键盘和修饰键行为。 */
export const Link = _component(
  ({
    href,
    disabled = false,
    elementRef,
    tabindex,
    onClick = () => {},
    onAuxclick = () => {},
    'aria-disabled': ariaDisabled,
    target,
    rel,
    color,
    size,
    fontWeight,
    lineHeight,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: LinkProps) => {
    const s = useCss();
    const style = s
      .color('_primary')
      .textDecorationLine('underline')
      .textUnderlineOffset('0.15em')
      .textDecorationThickness('0.0625em')
      .color(bx(color))
      .fontSize(bx(size))
      .fontWeight(bx(fontWeight))
      .lineHeight(bx(lineHeight))
      .select('&:hover', s.color('_primaryHover').color(bx(color)))
      .select('&:active', s.color('_primaryPressed').color(bx(color)))
      .select('&[aria-disabled="true"]', s.color('_textDisabled').cursor('not-allowed'))
      .select(
        '&:focus-visible',
        s
          .outlineColor('_focusRing')
          .outlineStyle('solid')
          .outlineWidth('0.125em')
          .outlineOffset('0.125em'),
      )
      .select(
        '@media (forced-colors: active)',
        s.select('&:focus-visible', s.outlineColor('Highlight')),
      );
    // JSX spread 可能合并出处理器数组，直接交给 Vue DOM 事件层保留顺序和取消语义。
    return (
      <a
        {...rest}
        ref={elementRef}
        href={disabled ? undefined : href}
        tabindex={disabled ? -1 : tabindex}
        aria-disabled={disabled || ariaDisabled}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        onAuxclick={disabled ? (event) => event.preventDefault() : onAuxclick}
        target={target}
        rel={rel === undefined && target?.toLowerCase() === '_blank' ? 'noopener' : rel}
        class={cx(style, className)}
      >
        {children}
      </a>
    );
  },
);
