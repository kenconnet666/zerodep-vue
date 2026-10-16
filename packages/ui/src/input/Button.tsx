import type { LucideIconData } from '@lucide/icons';
import { LoaderCircle } from '@lucide/icons';
import type { CssValue, Props, Slot } from '@zerodep-vue/core';
import { _button, _component, _span } from '@zerodep-vue/core';
import type { Ref } from 'vue';
import { computed } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';
import { Icon } from '../display/Icon.tsx';
import { Ripple } from '../feedback/Ripple.tsx';
export type ButtonProps = Props<
  typeof _button,
  {
    /** 实际按钮 DOM 引用，通过普通 Props 提供。 */
    elementRef?: Ref<HTMLElement | null | undefined>;
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
    slotIcon?: Slot<typeof Icon, 'icon' | 'aria-hidden'>;
    /** 加载图标的属性，图标数据、旋转与装饰语义由 Button 管理。 */
    slotLoading?: Slot<typeof Icon, 'icon' | 'spin' | 'aria-hidden'>;
    /** 文字与普通图标的内容容器属性。 */
    slotContent?: Slot<typeof _span>;
    /** 原始 Lucide 图标数据；仅图标按钮必须提供 aria-label。 */
    icon?: LucideIconData;
    /** 覆盖文字与图标颜色。 */
    color?: CssValue<'color', UiTheme>;
    /** 显式背景色在悬停、按下和 aria-pressed 状态中保持。 */
    backgroundColor?: CssValue<'backgroundColor', UiTheme>;
    /** 显式边框颜色在各交互状态中保持。 */
    borderColor?: CssValue<'borderColor', UiTheme>;
    innerHTML?: never;
    textContent?: never;
  }
>;

/** 原生 button，默认 type=button；表单提交可显式指定 type=submit。 */
export const Button = _component(
  ({
    type = 'button',
    elementRef,
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
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: ButtonProps) => {
    const css = useCss();
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
    const style = css(() => ({
      position: 'relative',
      display: block && !iconGeometry.value ? 'flex' : 'inline-flex',
      width: block && !iconGeometry.value ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      font: 'inherit',
      fontSize: size,
      lineHeight: '_normal',
      minHeight: densityHeight.value,
      height: iconGeometry.value ? densityHeight.value : undefined,
      aspectRatio: iconGeometry.value ? 1 : undefined,
      gap: '0.5em',
      borderStyle: 'solid',
      borderWidth: '0.0625em',
      borderRadius: shape === 'default' ? '_small' : '_pill',
      cursor: 'pointer',
      textDecorationLine: 'none',
      userSelect: 'none',
      transitionProperty: 'color, background-color, border-color, opacity',
      transitionDuration: '_fast',
      '&:focus-visible': {
        outlineColor: '_focusRing',
        outlineStyle: 'solid',
        outlineWidth: '0.125em',
        outlineOffset: '0.125em',
      },
      '&:disabled': {
        opacity: '_disabled',
        cursor: 'not-allowed',
      },
      '@media (prefers-reduced-motion: reduce)': {
        transitionDuration: '0ms',
      },
      '@media (forced-colors: active)': {
        borderColor: 'ButtonText',
        '&:focus-visible': {
          outlineColor: 'Highlight',
        },
      },
    }));
    const variants = {
      solid: undefined,
      soft: css({
        borderColor: 'transparent',
      }),
      outline: css({
        backgroundColor: 'transparent',
      }),
      dashed: css({
        backgroundColor: 'transparent',
        borderStyle: 'dashed',
      }),
      text: css({
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&:enabled:hover': {
          backgroundColor: '_surfaceHover',
        },
        '&:enabled:active': {
          backgroundColor: '_surfacePressed',
        },
        '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
          backgroundColor: '_surfaceSelected',
        },
      }),
    };
    // tone 直接表达最终 CSS；:where 不增加优先级，外部颜色和 class 仍能按原顺序覆盖。
    const toneStyles = {
      neutral: css({
        color: '_textPrimary',
        '&:where([data-zv-variant="solid"])': {
          color: '_textInverse',
          backgroundColor: '_textPrimary',
          borderColor: '_textPrimary',
          '&:enabled:hover': {
            backgroundColor: '_textSecondary',
            borderColor: '_textSecondary',
          },
          '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_textTertiary',
            borderColor: '_textTertiary',
          },
        },
        '&:where([data-zv-variant="soft"])': {
          backgroundColor: '_surfaceMuted',
          '&:enabled:hover': {
            color: '_textSecondary',
            borderColor: '_border',
          },
          '&:enabled:active': {
            color: '_textTertiary',
            borderColor: '_textPrimary',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            borderColor: '_textPrimary',
          },
        },
        '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])': {
          borderColor: '_border',
          '&:enabled:hover': {
            backgroundColor: '_surfaceMuted',
            borderColor: '_textPrimary',
          },
          '&:enabled:active': {
            color: '_textTertiary',
            backgroundColor: '_surfaceMuted',
            borderColor: '_textTertiary',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_surfaceMuted',
            borderColor: '_textPrimary',
          },
        },
        '&:where([data-zv-variant="text"]):enabled:active': {
          color: '_textTertiary',
        },
      }),
      primary: css({
        color: '_primary',
        '&:where([data-zv-variant="solid"])': {
          color: '_textOnPrimary',
          backgroundColor: '_primary',
          borderColor: '_primary',
          '&:enabled:hover': {
            backgroundColor: '_primaryHover',
            borderColor: '_primaryHover',
          },
          '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_primaryPressed',
            borderColor: '_primaryPressed',
          },
        },
        '&:where([data-zv-variant="soft"])': {
          backgroundColor: '_primarySubtleBackground',
          '&:enabled:hover': {
            color: '_primaryHover',
            borderColor: '_primaryBorder',
          },
          '&:enabled:active': {
            color: '_primaryPressed',
            borderColor: '_primary',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            borderColor: '_primary',
          },
        },
        '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])': {
          borderColor: '_primaryBorder',
          '&:enabled:hover': {
            backgroundColor: '_primarySubtleBackground',
            borderColor: '_primary',
          },
          '&:enabled:active': {
            color: '_primaryPressed',
            backgroundColor: '_primarySubtleBackground',
            borderColor: '_primaryPressed',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_primarySubtleBackground',
            borderColor: '_primary',
          },
        },
        '&:where([data-zv-variant="text"]):enabled:active': {
          color: '_primaryPressed',
        },
      }),
      info: css({
        color: '_info',
        '&:where([data-zv-variant="solid"])': {
          color: '_textOnInfo',
          backgroundColor: '_info',
          borderColor: '_info',
          '&:enabled:hover': {
            backgroundColor: '_infoHover',
            borderColor: '_infoHover',
          },
          '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_infoPressed',
            borderColor: '_infoPressed',
          },
        },
        '&:where([data-zv-variant="soft"])': {
          backgroundColor: '_infoSubtleBackground',
          '&:enabled:hover': {
            color: '_infoHover',
            borderColor: '_infoBorder',
          },
          '&:enabled:active': {
            color: '_infoPressed',
            borderColor: '_info',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            borderColor: '_info',
          },
        },
        '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])': {
          borderColor: '_infoBorder',
          '&:enabled:hover': {
            backgroundColor: '_infoSubtleBackground',
            borderColor: '_info',
          },
          '&:enabled:active': {
            color: '_infoPressed',
            backgroundColor: '_infoSubtleBackground',
            borderColor: '_infoPressed',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_infoSubtleBackground',
            borderColor: '_info',
          },
        },
        '&:where([data-zv-variant="text"]):enabled:active': {
          color: '_infoPressed',
        },
      }),
      success: css({
        color: '_success',
        '&:where([data-zv-variant="solid"])': {
          color: '_textOnSuccess',
          backgroundColor: '_success',
          borderColor: '_success',
          '&:enabled:hover': {
            backgroundColor: '_successHover',
            borderColor: '_successHover',
          },
          '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_successPressed',
            borderColor: '_successPressed',
          },
        },
        '&:where([data-zv-variant="soft"])': {
          backgroundColor: '_successSubtleBackground',
          '&:enabled:hover': {
            color: '_successHover',
            borderColor: '_successBorder',
          },
          '&:enabled:active': {
            color: '_successPressed',
            borderColor: '_success',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            borderColor: '_success',
          },
        },
        '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])': {
          borderColor: '_successBorder',
          '&:enabled:hover': {
            backgroundColor: '_successSubtleBackground',
            borderColor: '_success',
          },
          '&:enabled:active': {
            color: '_successPressed',
            backgroundColor: '_successSubtleBackground',
            borderColor: '_successPressed',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_successSubtleBackground',
            borderColor: '_success',
          },
        },
        '&:where([data-zv-variant="text"]):enabled:active': {
          color: '_successPressed',
        },
      }),
      warning: css({
        color: '_warning',
        '&:where([data-zv-variant="solid"])': {
          color: '_textOnWarning',
          backgroundColor: '_warning',
          borderColor: '_warning',
          '&:enabled:hover': {
            backgroundColor: '_warningHover',
            borderColor: '_warningHover',
          },
          '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_warningPressed',
            borderColor: '_warningPressed',
          },
        },
        '&:where([data-zv-variant="soft"])': {
          backgroundColor: '_warningSubtleBackground',
          '&:enabled:hover': {
            color: '_warningHover',
            borderColor: '_warningBorder',
          },
          '&:enabled:active': {
            color: '_warningPressed',
            borderColor: '_warning',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            borderColor: '_warning',
          },
        },
        '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])': {
          borderColor: '_warningBorder',
          '&:enabled:hover': {
            backgroundColor: '_warningSubtleBackground',
            borderColor: '_warning',
          },
          '&:enabled:active': {
            color: '_warningPressed',
            backgroundColor: '_warningSubtleBackground',
            borderColor: '_warningPressed',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_warningSubtleBackground',
            borderColor: '_warning',
          },
        },
        '&:where([data-zv-variant="text"]):enabled:active': {
          color: '_warningPressed',
        },
      }),
      danger: css({
        color: '_danger',
        '&:where([data-zv-variant="solid"])': {
          color: '_textOnDanger',
          backgroundColor: '_danger',
          borderColor: '_danger',
          '&:enabled:hover': {
            backgroundColor: '_dangerHover',
            borderColor: '_dangerHover',
          },
          '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_dangerPressed',
            borderColor: '_dangerPressed',
          },
        },
        '&:where([data-zv-variant="soft"])': {
          backgroundColor: '_dangerSubtleBackground',
          '&:enabled:hover': {
            color: '_dangerHover',
            borderColor: '_dangerBorder',
          },
          '&:enabled:active': {
            color: '_dangerPressed',
            borderColor: '_danger',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            borderColor: '_danger',
          },
        },
        '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])': {
          borderColor: '_dangerBorder',
          '&:enabled:hover': {
            backgroundColor: '_dangerSubtleBackground',
            borderColor: '_danger',
          },
          '&:enabled:active': {
            color: '_dangerPressed',
            backgroundColor: '_dangerSubtleBackground',
            borderColor: '_dangerPressed',
          },
          '&[aria-pressed="true"], &[aria-pressed="mixed"]': {
            backgroundColor: '_dangerSubtleBackground',
            borderColor: '_danger',
          },
        },
        '&:where([data-zv-variant="text"]):enabled:active': {
          color: '_dangerPressed',
        },
      }),
    };
    const spacing = {
      compact: css({
        paddingBlock: '0.125em',
        paddingInline: '0.5em',
      }),
      normal: css({
        paddingBlock: '0.25em',
        paddingInline: '0.875em',
      }),
      comfortable: css({
        paddingBlock: '0.5em',
        paddingInline: '1em',
      }),
    };
    const colors = css(() => ({
      color: color,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
    }));
    const overrides = css([
      colors,
      {
        '&:enabled:hover': colors,
        '&:enabled:active': colors,
        '&[aria-pressed="true"], &[aria-pressed="mixed"]': colors,
      },
    ]);
    const content = css(() => ({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: iconPlacement === 'end' ? 'row-reverse' : 'row',
      gap: '0.5em',
      opacity: loading ? 0 : 1,
    }));
    return (
      <_button
        css={[
          style,
          spacing[density],
          iconGeometry.value &&
            css({
              padding: 0,
            }),
          variants[variant],
          toneStyles[tone],
          // 和变体保持同一选择器作用域，使 null 也能清除颜色，而不仅是覆盖已有值。
          css([
            overrides,
            {
              '&:where([data-zv-variant="solid"]), &:where([data-zv-variant="soft"]), &:where([data-zv-variant="outline"], [data-zv-variant="dashed"]), &:where([data-zv-variant="text"])':
                overrides,
            },
          ]),
          cssProp,
        ]}
        {...rest}
        ref={elementRef}
        type={type}
        disabled={disabled || loading}
        aria-busy={loading || ariaBusy}
        data-zv-variant={variant}
      >
        <_span css={content} {...slotContent}>
          {icon && <Icon {...slotIcon} icon={icon} aria-hidden={true} />}
          {children}
        </_span>
        {loading && (
          <_span
            css={css({
              position: 'absolute',
              display: 'inline-flex',
            })}
            aria-hidden="true"
          >
            <Icon {...slotLoading} icon={LoaderCircle} spin aria-hidden={true} />
          </_span>
        )}
        {ripple && <Ripple disabled={disabled || loading} />}
      </_button>
    );
  },
);
