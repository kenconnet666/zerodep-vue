import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { LoaderCircle } from '@lucide/icons';
import type { LucideIconData } from '@lucide/icons';
import type { ButtonHTMLAttributes, Ref } from 'vue';
import { computed } from 'vue';
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
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: ButtonProps) => {
    const s = useCss();
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
    const variants = {
      solid: undefined,
      soft: s.borderColor('transparent'),
      outline: s.backgroundColor('transparent'),
      dashed: s.backgroundColor('transparent').borderStyle('dashed'),
      text: s
        .backgroundColor('transparent')
        .borderColor('transparent')
        .select('&:enabled:hover', s.backgroundColor('_surfaceHover'))
        .select('&:enabled:active', s.backgroundColor('_surfacePressed'))
        .select(
          '&[aria-pressed="true"], &[aria-pressed="mixed"]',
          s.backgroundColor('_surfaceSelected'),
        ),
    };
    // tone 直接表达最终 CSS；:where 不增加优先级，外部颜色和 class 仍能按原顺序覆盖。
    const toneStyles = {
      neutral: s
        .color('_textPrimary')
        .select(
          '&:where([data-zv-variant="solid"])',
          s
            .color('_textInverse')
            .backgroundColor('_textPrimary')
            .borderColor('_textPrimary')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_textSecondary').borderColor('_textSecondary'),
            )
            .select(
              '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_textTertiary').borderColor('_textTertiary'),
            ),
        )
        .select(
          '&:where([data-zv-variant="soft"])',
          s
            .backgroundColor('_surfaceMuted')
            .select('&:enabled:hover', s.color('_textSecondary').borderColor('_border'))
            .select('&:enabled:active', s.color('_textTertiary').borderColor('_textPrimary'))
            .select(
              '&[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.borderColor('_textPrimary'),
            ),
        )
        .select(
          '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])',
          s
            .borderColor('_border')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_surfaceMuted').borderColor('_textPrimary'),
            )
            .select(
              '&:enabled:active',
              s
                .color('_textTertiary')
                .backgroundColor('_surfaceMuted')
                .borderColor('_textTertiary'),
            )
            .select(
              '&[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_surfaceMuted').borderColor('_textPrimary'),
            ),
        )
        .select('&:where([data-zv-variant="text"]):enabled:active', s.color('_textTertiary')),
      primary: s
        .color('_primary')
        .select(
          '&:where([data-zv-variant="solid"])',
          s
            .color('_textOnPrimary')
            .backgroundColor('_primary')
            .borderColor('_primary')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_primaryHover').borderColor('_primaryHover'),
            )
            .select(
              '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_primaryPressed').borderColor('_primaryPressed'),
            ),
        )
        .select(
          '&:where([data-zv-variant="soft"])',
          s
            .backgroundColor('_primarySubtleBackground')
            .select('&:enabled:hover', s.color('_primaryHover').borderColor('_primaryBorder'))
            .select('&:enabled:active', s.color('_primaryPressed').borderColor('_primary'))
            .select('&[aria-pressed="true"], &[aria-pressed="mixed"]', s.borderColor('_primary')),
        )
        .select(
          '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])',
          s
            .borderColor('_primaryBorder')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_primarySubtleBackground').borderColor('_primary'),
            )
            .select(
              '&:enabled:active',
              s
                .color('_primaryPressed')
                .backgroundColor('_primarySubtleBackground')
                .borderColor('_primaryPressed'),
            )
            .select(
              '&[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_primarySubtleBackground').borderColor('_primary'),
            ),
        )
        .select('&:where([data-zv-variant="text"]):enabled:active', s.color('_primaryPressed')),
      info: s
        .color('_info')
        .select(
          '&:where([data-zv-variant="solid"])',
          s
            .color('_textOnInfo')
            .backgroundColor('_info')
            .borderColor('_info')
            .select('&:enabled:hover', s.backgroundColor('_infoHover').borderColor('_infoHover'))
            .select(
              '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_infoPressed').borderColor('_infoPressed'),
            ),
        )
        .select(
          '&:where([data-zv-variant="soft"])',
          s
            .backgroundColor('_infoSubtleBackground')
            .select('&:enabled:hover', s.color('_infoHover').borderColor('_infoBorder'))
            .select('&:enabled:active', s.color('_infoPressed').borderColor('_info'))
            .select('&[aria-pressed="true"], &[aria-pressed="mixed"]', s.borderColor('_info')),
        )
        .select(
          '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])',
          s
            .borderColor('_infoBorder')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_infoSubtleBackground').borderColor('_info'),
            )
            .select(
              '&:enabled:active',
              s
                .color('_infoPressed')
                .backgroundColor('_infoSubtleBackground')
                .borderColor('_infoPressed'),
            )
            .select(
              '&[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_infoSubtleBackground').borderColor('_info'),
            ),
        )
        .select('&:where([data-zv-variant="text"]):enabled:active', s.color('_infoPressed')),
      success: s
        .color('_success')
        .select(
          '&:where([data-zv-variant="solid"])',
          s
            .color('_textOnSuccess')
            .backgroundColor('_success')
            .borderColor('_success')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_successHover').borderColor('_successHover'),
            )
            .select(
              '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_successPressed').borderColor('_successPressed'),
            ),
        )
        .select(
          '&:where([data-zv-variant="soft"])',
          s
            .backgroundColor('_successSubtleBackground')
            .select('&:enabled:hover', s.color('_successHover').borderColor('_successBorder'))
            .select('&:enabled:active', s.color('_successPressed').borderColor('_success'))
            .select('&[aria-pressed="true"], &[aria-pressed="mixed"]', s.borderColor('_success')),
        )
        .select(
          '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])',
          s
            .borderColor('_successBorder')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_successSubtleBackground').borderColor('_success'),
            )
            .select(
              '&:enabled:active',
              s
                .color('_successPressed')
                .backgroundColor('_successSubtleBackground')
                .borderColor('_successPressed'),
            )
            .select(
              '&[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_successSubtleBackground').borderColor('_success'),
            ),
        )
        .select('&:where([data-zv-variant="text"]):enabled:active', s.color('_successPressed')),
      warning: s
        .color('_warning')
        .select(
          '&:where([data-zv-variant="solid"])',
          s
            .color('_textOnWarning')
            .backgroundColor('_warning')
            .borderColor('_warning')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_warningHover').borderColor('_warningHover'),
            )
            .select(
              '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_warningPressed').borderColor('_warningPressed'),
            ),
        )
        .select(
          '&:where([data-zv-variant="soft"])',
          s
            .backgroundColor('_warningSubtleBackground')
            .select('&:enabled:hover', s.color('_warningHover').borderColor('_warningBorder'))
            .select('&:enabled:active', s.color('_warningPressed').borderColor('_warning'))
            .select('&[aria-pressed="true"], &[aria-pressed="mixed"]', s.borderColor('_warning')),
        )
        .select(
          '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])',
          s
            .borderColor('_warningBorder')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_warningSubtleBackground').borderColor('_warning'),
            )
            .select(
              '&:enabled:active',
              s
                .color('_warningPressed')
                .backgroundColor('_warningSubtleBackground')
                .borderColor('_warningPressed'),
            )
            .select(
              '&[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_warningSubtleBackground').borderColor('_warning'),
            ),
        )
        .select('&:where([data-zv-variant="text"]):enabled:active', s.color('_warningPressed')),
      danger: s
        .color('_danger')
        .select(
          '&:where([data-zv-variant="solid"])',
          s
            .color('_textOnDanger')
            .backgroundColor('_danger')
            .borderColor('_danger')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_dangerHover').borderColor('_dangerHover'),
            )
            .select(
              '&:enabled:active, &[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_dangerPressed').borderColor('_dangerPressed'),
            ),
        )
        .select(
          '&:where([data-zv-variant="soft"])',
          s
            .backgroundColor('_dangerSubtleBackground')
            .select('&:enabled:hover', s.color('_dangerHover').borderColor('_dangerBorder'))
            .select('&:enabled:active', s.color('_dangerPressed').borderColor('_danger'))
            .select('&[aria-pressed="true"], &[aria-pressed="mixed"]', s.borderColor('_danger')),
        )
        .select(
          '&:where([data-zv-variant="outline"], [data-zv-variant="dashed"])',
          s
            .borderColor('_dangerBorder')
            .select(
              '&:enabled:hover',
              s.backgroundColor('_dangerSubtleBackground').borderColor('_danger'),
            )
            .select(
              '&:enabled:active',
              s
                .color('_dangerPressed')
                .backgroundColor('_dangerSubtleBackground')
                .borderColor('_dangerPressed'),
            )
            .select(
              '&[aria-pressed="true"], &[aria-pressed="mixed"]',
              s.backgroundColor('_dangerSubtleBackground').borderColor('_danger'),
            ),
        )
        .select('&:where([data-zv-variant="text"]):enabled:active', s.color('_dangerPressed')),
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
        ref={elementRef}
        type={type}
        disabled={disabled || loading}
        aria-busy={loading || ariaBusy}
        data-zv-variant={variant}
        class={cx(
          style,
          spacing[density],
          iconGeometry.value && s.padding(0),
          variants[variant],
          toneStyles[tone],
          // 和变体保持同一选择器作用域，使 null 也能清除颜色，而不仅是覆盖已有值。
          overrides.select(
            '&:where([data-zv-variant="solid"]), &:where([data-zv-variant="soft"]), &:where([data-zv-variant="outline"], [data-zv-variant="dashed"]), &:where([data-zv-variant="text"])',
            overrides,
          ),
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
