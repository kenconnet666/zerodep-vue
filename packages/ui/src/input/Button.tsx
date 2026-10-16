import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { LoaderCircle } from '@lucide/icons';
import type { LucideIconData } from '@lucide/icons';
import type { ButtonHTMLAttributes } from 'vue';
import { computed, shallowRef } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { Icon } from '../display/Icon.tsx';
import type { IconProps } from '../display/Icon.tsx';
import { Ripple } from '../feedback/Ripple.tsx';

export interface ButtonProps
  extends
    Omit<ElementProps, 'color'>,
    /* @vue-ignore */ Omit<ButtonHTMLAttributes, keyof ElementProps | 'disabled'> {
  /** 按钮外观，默认 solid。 */
  variant?: 'solid' | 'soft' | 'outline' | 'dashed' | 'text';
  /** 语义色，默认 primary；neutral 使用中性色。 */
  tone?: 'neutral' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
  /** 字号，默认继承；与 Text/Icon 的 size 值域相同。 */
  size?: CssValue<'fontSize', UiTheme>;
  /** 只改变几何尺寸，不改变字号。 */
  density?: 'compact' | 'normal' | 'comfortable';
  /** 圆角形状；circle 适合仅图标操作，并优先于 block。 */
  shape?: 'default' | 'round' | 'circle';
  /** 仅图标时使用等宽高几何；需要 aria-label。 */
  iconOnly?: boolean;
  /** 占满所在行。 */
  block?: boolean;
  /** 图标位于文字的逻辑起始侧或结束侧。 */
  iconPlacement?: 'start' | 'end';
  disabled?: boolean;
  /** 忙碌时阻止激活并保留原有内容宽度。 */
  loading?: boolean;
  /** 指针或键盘激活时显示水波纹，默认开启。 */
  ripple?: boolean;
  /** 图标子组件的属性，icon 数据与装饰语义由 Button 管理。 */
  slotIcon?: Omit<IconProps, 'icon' | 'aria-hidden'>;
  /** 加载图标的属性，图标数据、旋转与装饰语义由 Button 管理。 */
  slotLoading?: Omit<IconProps, 'icon' | 'spin' | 'aria-hidden'>;
  /** 文字与普通图标的内容容器属性。 */
  slotContent?: ElementSlotProps;
  /** 原始 Lucide 图标数据；仅图标按钮必须提供 aria-label。 */
  icon?: LucideIconData;
  /** 覆盖文字与图标颜色。 */
  color?: CssValue<'color', UiTheme>;
  /** 显式背景色在悬停、按下和 aria-pressed 状态中保持。 */
  backgroundColor?: CssValue<'backgroundColor', UiTheme>;
  /** 显式边框颜色在各交互状态中保持。 */
  borderColor?: CssValue<'borderColor', UiTheme>;
}

export interface ButtonInstance {
  readonly element: HTMLButtonElement | undefined;
  focus(options?: FocusOptions): void;
}

const tones = {
  neutral: {
    base: '_textPrimary',
    hover: '_textSecondary',
    pressed: '_textTertiary',
    soft: '_surfaceMuted',
    border: '_border',
    on: '_textInverse',
  },
  primary: {
    base: '_primary',
    hover: '_primaryHover',
    pressed: '_primaryPressed',
    soft: '_primarySubtleBackground',
    border: '_primaryBorder',
    on: '_textOnPrimary',
  },
  info: {
    base: '_info',
    hover: '_infoHover',
    pressed: '_infoPressed',
    soft: '_infoSubtleBackground',
    border: '_infoBorder',
    on: '_textOnInfo',
  },
  success: {
    base: '_success',
    hover: '_successHover',
    pressed: '_successPressed',
    soft: '_successSubtleBackground',
    border: '_successBorder',
    on: '_textOnSuccess',
  },
  warning: {
    base: '_warning',
    hover: '_warningHover',
    pressed: '_warningPressed',
    soft: '_warningSubtleBackground',
    border: '_warningBorder',
    on: '_textOnWarning',
  },
  danger: {
    base: '_danger',
    hover: '_dangerHover',
    pressed: '_dangerPressed',
    soft: '_dangerSubtleBackground',
    border: '_dangerBorder',
    on: '_textOnDanger',
  },
} satisfies Record<
  NonNullable<ButtonProps['tone']>,
  Record<'base' | 'hover' | 'pressed' | 'soft' | 'border' | 'on', keyof UiTheme['color']>
>;

/** 原生 button，默认 type=button；表单提交可显式指定 type=submit。 */
export const Button = _component(
  (
    {
      type = 'button',
      variant = 'solid',
      tone = 'primary',
      size,
      density = 'normal',
      shape = 'default',
      iconOnly = false,
      block = false,
      iconPlacement = 'start',
      disabled = false,
      loading = false,
      'aria-busy': ariaBusy,
      ripple = true,
      slotIcon,
      slotLoading,
      slotContent,
      icon,
      color,
      backgroundColor,
      borderColor,
      class: className,
      children,
      innerHTML: _innerHTML,
      textContent: _textContent,
      ...rest
    }: ButtonProps,
    { expose },
  ) => {
    const s = useCss();
    const element = shallowRef<HTMLButtonElement>();
    const instance: ButtonInstance = {
      get element() {
        return element.value;
      },
      focus(options) {
        element.value?.focus(options);
      },
    };
    expose(instance);
    const palette = computed(() => tones[tone]);
    const iconGeometry = computed(() => iconOnly || shape === 'circle');
    const densityHeight = computed(() => {
      switch (density) {
        case 'compact':
          return '_small';
        case 'comfortable':
          return '_large';
        default:
          return '_medium';
      }
    });
    const style = s
      .position('relative')
      .display(bx(block && !iconGeometry.value ? 'flex' : 'inline-flex'))
      .width(bx(block && !iconGeometry.value ? '100%' : undefined))
      .alignItems('center')
      .justifyContent('center')
      .verticalAlign('middle')
      .boxSizing('border-box')
      .font('inherit')
      .fontSize(bx(size))
      .lineHeight('_normal')
      .minHeight(bx(densityHeight.value))
      .height(bx(iconGeometry.value ? densityHeight.value : undefined))
      .aspectRatio(bx(iconGeometry.value ? 1 : undefined))
      .gap('0.5em')
      .borderStyle('solid')
      .borderWidth('0.0625em')
      .borderRadius(bx(shape === 'default' ? '_small' : '_pill'))
      .cursor('pointer')
      .textDecorationLine('none')
      .userSelect('none')
      .transitionProperty('color, background-color, border-color, opacity')
      .transitionDuration('_fast')
      .select(
        '&:focus-visible',
        s
          .outlineColor('_focusRing')
          .outlineStyle('solid')
          .outlineWidth('0.125em')
          .outlineOffset('0.125em'),
      )
      .select('&:disabled', s.opacity('_disabled').cursor('not-allowed'))
      .select('@media (prefers-reduced-motion: reduce)', s.transitionDuration('0ms'))
      .select(
        '@media (forced-colors: active)',
        s.borderColor('ButtonText').select('&:focus-visible', s.outlineColor('Highlight')),
      );
    const outlined = s
      .color(bx(palette.value.base))
      .backgroundColor('transparent')
      .borderColor(bx(palette.value.border))
      .select(
        '&:enabled:hover',
        s.backgroundColor(bx(palette.value.soft)).borderColor(bx(palette.value.base)),
      )
      .select(
        '&:enabled:active',
        s
          .color(bx(palette.value.pressed))
          .backgroundColor(bx(palette.value.soft))
          .borderColor(bx(palette.value.pressed)),
      )
      .select(
        '&[aria-pressed="true"], &[aria-pressed="mixed"]',
        s.backgroundColor(bx(palette.value.soft)).borderColor(bx(palette.value.base)),
      );
    const variants = {
      solid: s
        .color(bx(palette.value.on))
        .backgroundColor(bx(palette.value.base))
        .borderColor(bx(palette.value.base))
        .select(
          '&:enabled:hover',
          s.backgroundColor(bx(palette.value.hover)).borderColor(bx(palette.value.hover)),
        )
        .select(
          '&:enabled:active',
          s.backgroundColor(bx(palette.value.pressed)).borderColor(bx(palette.value.pressed)),
        )
        .select(
          '&[aria-pressed="true"], &[aria-pressed="mixed"]',
          s.backgroundColor(bx(palette.value.pressed)).borderColor(bx(palette.value.pressed)),
        ),
      soft: s
        .color(bx(palette.value.base))
        .backgroundColor(bx(palette.value.soft))
        .borderColor('transparent')
        .select(
          '&:enabled:hover',
          s.color(bx(palette.value.hover)).borderColor(bx(palette.value.border)),
        )
        .select(
          '&:enabled:active',
          s.color(bx(palette.value.pressed)).borderColor(bx(palette.value.base)),
        )
        .select(
          '&[aria-pressed="true"], &[aria-pressed="mixed"]',
          s.borderColor(bx(palette.value.base)),
        ),
      outline: outlined,
      dashed: outlined.borderStyle('dashed'),
      text: s
        .color(bx(palette.value.base))
        .backgroundColor('transparent')
        .borderColor('transparent')
        .select('&:enabled:hover', s.backgroundColor('_surfaceHover'))
        .select(
          '&:enabled:active',
          s.color(bx(palette.value.pressed)).backgroundColor('_surfacePressed'),
        )
        .select(
          '&[aria-pressed="true"], &[aria-pressed="mixed"]',
          s.backgroundColor('_surfaceSelected'),
        ),
    };
    const spacing = {
      compact: s.paddingBlock('0.125em').paddingInline('0.5em'),
      normal: s.paddingBlock('0.25em').paddingInline('0.875em'),
      comfortable: s.paddingBlock('0.5em').paddingInline('1em'),
    };
    const colors = s
      .color(bx(color))
      .backgroundColor(bx(backgroundColor))
      .borderColor(bx(borderColor));
    const overrides = colors
      .select('&:enabled:hover', colors)
      .select('&:enabled:active', colors)
      .select('&[aria-pressed="true"], &[aria-pressed="mixed"]', colors);
    const content = s
      .display('inline-flex')
      .alignItems('center')
      .justifyContent('center')
      .flexDirection(bx(iconPlacement === 'end' ? 'row-reverse' : 'row'))
      .gap('0.5em')
      .opacity(bx(loading ? 0 : 1));
    return (
      <button
        {...rest}
        ref={element}
        type={type}
        disabled={disabled || loading}
        aria-busy={loading || ariaBusy}
        class={cx(
          style,
          spacing[density],
          iconGeometry.value && s.padding(0),
          variants[variant],
          overrides,
          className,
        )}
      >
        <span {...slotRest(slotContent)} class={cx(content, slotContent?.class)}>
          {icon && (
            <Icon {...slotRest(slotIcon)} class={slotIcon?.class} icon={icon} aria-hidden={true} />
          )}
          {children}
        </span>
        {loading && (
          <span aria-hidden="true" class={s.position('absolute').display('inline-flex')}>
            <Icon
              {...slotRest(slotLoading)}
              class={slotLoading?.class}
              icon={LoaderCircle}
              spin
              aria-hidden={true}
            />
          </span>
        )}
        {ripple && <Ripple disabled={disabled || loading} />}
      </button>
    );
  },
);
