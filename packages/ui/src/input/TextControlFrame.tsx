import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssInput, CssValue } from '@zerodep-vue/core';
import { X } from '@lucide/icons';
import { computed } from 'vue';
import type { StyleValue, VNodeChild } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementSlotProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { Button } from './Button.tsx';
import type { ButtonProps } from './Button.tsx';

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
  class?: CssInput;
  style?: StyleValue;
  clearable?: boolean;
  prefix?: VNodeChild;
  suffix?: VNodeChild;
  slotPrefix?: ElementSlotProps;
  slotSuffix?: ElementSlotProps;
  slotClear?: Omit<ButtonProps, 'children' | 'type' | 'disabled' | 'loading' | 'icon'>;
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
    const s = useCss();
    const lang = useLang();
    const palette = computed(() => {
      switch (status) {
        case 'error':
          return '_danger';
        case 'warning':
          return '_warning';
        case 'success':
          return '_success';
        default:
          return '_border';
      }
    });
    const control = s
      .display('inline-flex')
      .alignItems(bx(multiline ? 'flex-start' : 'center'))
      .boxSizing('border-box')
      .verticalAlign('middle')
      .minWidth(0)
      .width(bx(width))
      .fontSize(bx(size))
      .lineHeight('_normal')
      .minHeight(
        bx(density === 'compact' ? '_small' : density === 'comfortable' ? '_large' : '_medium'),
      )
      .gap('0.5em')
      .paddingInline('0.75em')
      .paddingBlock(
        bx(density === 'compact' ? '0.125em' : density === 'comfortable' ? '0.5em' : '0.25em'),
      )
      .borderStyle('solid')
      .borderWidth('0.0625em')
      .borderRadius('_small')
      .color('_textPrimary')
      .backgroundColor('_surface')
      .borderColor(bx(palette.value))
      .transitionProperty('border-color, background-color, box-shadow')
      .transitionDuration('_fast')
      .select('&:hover', s.borderColor(bx(status ? palette.value : '_borderStrong')))
      .select(
        '&:focus-within',
        s
          .borderColor(bx(status ? palette.value : '_primary'))
          .outlineStyle('solid')
          .outlineWidth('0.125em')
          .outlineOffset('0.0625em')
          .outlineColor('_focusRing'),
      )
      .select(
        '&:has([data-zv-text-value]:disabled)',
        s.backgroundColor('_surfaceDisabled').color('_textDisabled').cursor('not-allowed'),
      )
      .select('@media (prefers-reduced-motion: reduce)', s.transitionDuration('0ms'))
      .select(
        '@media (forced-colors: active)',
        s.borderColor('ButtonText').select('&:focus-within', s.outlineColor('Highlight')),
      );
    const variants = {
      outline: undefined,
      filled: s.backgroundColor('_surfaceMuted').borderColor('transparent'),
      underlined: s.borderRadius(0).borderWidth('0 0 0.0625em').backgroundColor('transparent'),
    };
    const overrides = s
      .color(bx(color))
      .backgroundColor(bx(backgroundColor))
      .borderColor(bx(borderColor));
    return (
      <span
        data-zv-text-control=""
        style={style}
        class={cx(
          control,
          variants[variant],
          s.borderColor(bx(status ? palette.value : undefined)),
          overrides,
          overrides.select('&:hover, &:focus-within', overrides),
          className,
        )}
      >
        {prefix != null && (
          <span
            {...slotRest(slotPrefix)}
            class={cx(s.display('inline-flex').flexShrink(0), slotPrefix?.class)}
          >
            {prefix}
          </span>
        )}
        {children}
        {clearable && !readOnly && (
          <Button
            {...slotRest(slotClear)}
            type="button"
            variant={slotClear?.variant ?? 'text'}
            tone={slotClear?.tone ?? 'neutral'}
            density={slotClear?.density ?? 'compact'}
            iconOnly
            icon={X}
            disabled={disabled}
            aria-label={slotClear?.['aria-label'] ?? lang.clear}
            class={cx(
              s
                .fontSize('0.875em')
                .visibility(bx(hasValue ? 'visible' : 'hidden'))
                .flexShrink(0),
              slotClear?.class,
            )}
            onPointerdown={(event) => {
              if (!event.defaultPrevented) event.preventDefault();
            }}
            onClick={(event) => {
              if (!event.defaultPrevented) onClear();
            }}
          />
        )}
        {suffix != null && (
          <span
            {...slotRest(slotSuffix)}
            class={cx(s.display('inline-flex').flexShrink(0), slotSuffix?.class)}
          >
            {suffix}
          </span>
        )}
      </span>
    );
  },
);
