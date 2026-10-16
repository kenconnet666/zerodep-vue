import { X } from '@lucide/icons';
import type { CssInput, CssValue, Slot } from '@zerodep-vue/core';
import { _component, _span } from '@zerodep-vue/core';
import type { HTMLAttributes, StyleValue, VNodeChild } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';
import type { ButtonProps } from './Button.tsx';
import { Button } from './Button.tsx';
export interface TextControlAppearance {
  /** 继承字号，或使用主题字号；不对应 HTML input 的 size 属性。 */
  size?: CssValue<'fontSize', UiTheme>;
  width?: CssValue<'width', UiTheme>;
  /** 只改变内部高度与间距。 */
  density?: ButtonProps['density'];
  variant?: 'outline' | 'filled' | 'underlined';
  /** 状态颜色；error 同时由原生控件输出 aria-invalid。 */
  status?: 'error' | 'warning' | 'success';
  color?: CssValue<'color', UiTheme>;
  backgroundColor?: CssValue<'backgroundColor', UiTheme>;
  borderColor?: CssValue<'borderColor', UiTheme>;
  /** 外层容器样式；原生节点样式通过 slotInput/slotTextarea 提供。 */
  class?: HTMLAttributes['class'];
  css?: CssInput;
  style?: StyleValue;
  clearable?: boolean;
  prefix?: VNodeChild;
  suffix?: VNodeChild;
  slotPrefix?: Slot<typeof _span>;
  slotSuffix?: Slot<typeof _span>;
  slotClear?: Slot<typeof Button, 'type' | 'iconOnly' | 'disabled' | 'icon' | 'loading'>;
}
interface TextControlFrameProps extends TextControlAppearance {
  hasValue: boolean;
  disabled: boolean;
  readOnly: boolean;
  multiline?: boolean;
  onClear(): void;
  children?: VNodeChild;
}

/** 文本控件只共用外观与装饰节点；模型、原生属性和 ref 仍由具体控件持有。 */
export const TextControlFrame = _component(
  ({
    size,
    width,
    density = 'normal',
    variant = 'outline',
    status,
    color,
    backgroundColor,
    borderColor,
    class: className,
    css: cssProp,
    style,
    prefix,
    suffix,
    slotPrefix,
    slotSuffix,
    slotClear,
    clearable = false,
    hasValue,
    disabled,
    readOnly,
    multiline = false,
    onClear,
    children,
  }: TextControlFrameProps) => {
    const css = useCss();
    const lang = useLang();
    const control = css(() => ({
      display: 'inline-flex',
      alignItems: multiline ? 'flex-start' : 'center',
      boxSizing: 'border-box',
      verticalAlign: 'middle',
      minWidth: 0,
      width: width,
      fontSize: size,
      lineHeight: '_normal',
      minHeight:
        density === 'compact' ? '_small' : density === 'comfortable' ? '_large' : '_medium',
      gap: '0.5em',
      paddingInline: '0.75em',
      paddingBlock:
        density === 'compact' ? '0.125em' : density === 'comfortable' ? '0.5em' : '0.25em',
      borderStyle: 'solid',
      borderWidth: '0.0625em',
      borderRadius: '_small',
      color: '_textPrimary',
      backgroundColor: '_surface',
      borderColor: '_border',
      transitionProperty: 'border-color, background-color, box-shadow',
      transitionDuration: '_fast',
      '&:hover': {
        borderColor: '_borderStrong',
      },
      '&:focus-within': {
        borderColor: '_primary',
        outlineStyle: 'solid',
        outlineWidth: '0.125em',
        outlineOffset: '0.0625em',
        outlineColor: '_focusRing',
      },
      '&:has([data-zv-text-value]:disabled)': {
        backgroundColor: '_surfaceDisabled',
        color: '_textDisabled',
        cursor: 'not-allowed',
      },
      '@media (prefers-reduced-motion: reduce)': {
        transitionDuration: '0ms',
      },
      '@media (forced-colors: active)': {
        borderColor: 'ButtonText',
        '&:focus-within': {
          outlineColor: 'Highlight',
        },
      },
    }));
    const variants = {
      outline: undefined,
      filled: css({
        backgroundColor: '_surfaceMuted',
        borderColor: 'transparent',
      }),
      underlined: css({
        borderRadius: 0,
        borderWidth: '0 0 0.0625em',
        backgroundColor: 'transparent',
      }),
    };
    const states = {
      error: css({
        borderColor: '_danger',
        '&:hover, &:focus-within': {
          borderColor: '_danger',
        },
      }),
      warning: css({
        borderColor: '_warning',
        '&:hover, &:focus-within': {
          borderColor: '_warning',
        },
      }),
      success: css({
        borderColor: '_success',
        '&:hover, &:focus-within': {
          borderColor: '_success',
        },
      }),
    };
    const overrides = css(() => ({
      color: color,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
    }));
    return (
      <_span
        css={[
          control,
          variants[variant],
          status && states[status],
          overrides,
          css([
            overrides,
            {
              '&:hover, &:focus-within': overrides,
            },
          ]),
          cssProp,
        ]}
        data-zv-text-control=""
        class={className}
        style={style}
      >
        {prefix != null && (
          <_span
            css={css({
              display: 'inline-flex',
              flexShrink: 0,
            })}
            {...slotPrefix}
          >
            {prefix}
          </_span>
        )}
        {children}
        {clearable && !readOnly && (
          <Button
            css={css(() => ({
              fontSize: '0.875em',
              visibility: hasValue ? 'visible' : 'hidden',
              flexShrink: 0,
            }))}
            {...slotClear}
            type="button"
            variant={slotClear?.variant ?? 'text'}
            tone={slotClear?.tone ?? 'neutral'}
            density={slotClear?.density ?? 'compact'}
            iconOnly
            icon={X}
            disabled={disabled}
            loading={false}
            aria-label={slotClear?.['aria-label'] ?? lang.clear}
            onPointerdown={(event) => {
              if (!event.defaultPrevented) event.preventDefault();
            }}
            onClick={(event) => {
              if (!event.defaultPrevented) onClear();
            }}
          />
        )}
        {suffix != null && (
          <_span
            css={css({
              display: 'inline-flex',
              flexShrink: 0,
            })}
            {...slotSuffix}
          >
            {suffix}
          </_span>
        )}
      </_span>
    );
  },
);
