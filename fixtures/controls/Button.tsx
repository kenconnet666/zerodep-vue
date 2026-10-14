import type { ButtonHTMLAttributes, StyleValue, VNodeChild } from 'vue';
import type { CssInput } from '@zerodep-vue/core';
import { _component, cx } from '@zerodep-vue/core';
import { useCss } from './theme.ts';

// 原生属性保留类型检查并经 Vue attrs 透传；运行时只声明本控件拥有的 props。
export interface ButtonProps extends /* @vue-ignore */ Omit<
  ButtonHTMLAttributes,
  'class' | 'style' | 'disabled' | 'type' | 'onClick'
> {
  children?: VNodeChild;
  variant?: 'solid' | 'outline';
  compact?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  class?: CssInput;
  style?: StyleValue;
  onClick?: (event: MouseEvent) => void;
}

/** 共享真实控件夹具：原生 button 的表单/键盘行为由浏览器验证。 */
export const Button = _component(
  ({
    children,
    variant = 'solid',
    compact = false,
    disabled = false,
    loading = false,
    type = 'button',
    class: external,
    style,
    onClick,
    ...rest
  }: ButtonProps) => {
    const s = useCss();
    const base = s
      .display('inline-flex')
      .alignItems('center')
      .justifyContent('center')
      .gap(6)
      .font('inherit')
      .padding('8px 12px')
      .border('1px solid transparent')
      .borderRadius(6)
      .cursor('pointer')
      .select(':disabled', s.cursor('not-allowed').opacity(0.5))
      .select(':focus-visible', s.outline('3px solid rgb(34, 197, 94)').outlineOffset(2))
      .select('&:enabled:active', s.transform('translateY(1px)'));
    const compactStyle = base.padding('4px 8px');
    const appearances = {
      solid: s
        .color('white')
        .backgroundColor('_brand')
        .select('&:enabled:hover', s.backgroundColor('_hover')),
      outline: s
        .color('_brand')
        .backgroundColor('transparent')
        .borderColor('_brand')
        .select('&:enabled:hover', s.backgroundColor('rgb(239, 246, 255)')),
    };
    return (
      <button
        {...rest}
        type={type}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        class={cx(compact ? compactStyle : base, appearances[variant], external)}
        style={style}
        onClick={(event) => {
          // 也约束主动派发的事件，防止加载期间调用方再次提交。
          if (!disabled && !loading) onClick?.(event);
        }}
      >
        {loading && (
          <span role="status" aria-label="正在处理">
            …
          </span>
        )}
        {children}
      </button>
    );
  },
);
