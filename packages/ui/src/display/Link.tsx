import type { Props } from '@zerodep-vue/core';
import { _a, _component } from '@zerodep-vue/core';
import type { Ref } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { TextProps } from './Text.tsx';

/** 原生链接属性直接透传；应用路由可通过 href 和 onClick 自行接入。 */
export type LinkProps = Props<
  typeof _a,
  TextProps & {
    /** 原生导航地址；执行操作应使用按钮。 */
    href: string;
    /** 禁用时移除原生导航地址及 Tab 停靠点，并阻止点击回调。 */
    disabled?: boolean;
    /** 实际链接 DOM 引用，供浮层和焦点操作通过 Props 组合。 */
    elementRef?: Ref<HTMLElement | null | undefined>;
  }
>;

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
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: LinkProps) => {
    const css = useCss();
    const style = css(() => [
      {
        color: '_primary',
        textDecorationLine: 'underline',
        textUnderlineOffset: '0.15em',
        textDecorationThickness: '0.0625em',
      },
      {
        color: color,
        fontSize: size,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        '&:hover': [
          {
            color: '_primaryHover',
          },
          {
            color: color,
          },
        ],
        '&:active': [
          {
            color: '_primaryPressed',
          },
          {
            color: color,
          },
        ],
        '&[aria-disabled="true"]': {
          color: '_textDisabled',
          cursor: 'not-allowed',
        },
        '&:focus-visible': {
          outlineColor: '_focusRing',
          outlineStyle: 'solid',
          outlineWidth: '0.125em',
          outlineOffset: '0.125em',
        },
        '@media (forced-colors: active)': {
          '&:focus-visible': {
            outlineColor: 'Highlight',
          },
        },
      },
    ]);
    // JSX spread 可能合并出处理器数组，直接交给 Vue DOM 事件层保留顺序和取消语义。
    return (
      <_a
        css={[style, cssProp]}
        {...rest}
        ref={elementRef}
        href={disabled ? undefined : href}
        tabindex={disabled ? -1 : tabindex}
        aria-disabled={disabled || ariaDisabled}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        onAuxclick={disabled ? (event) => event.preventDefault() : onAuxclick}
        target={target}
        rel={rel === undefined && target?.toLowerCase() === '_blank' ? 'noopener' : rel}
      >
        {children}
      </_a>
    );
  },
);
