import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { ArrowUp } from '@lucide/icons';
import { computed, shallowRef } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { Button } from '../input/Button.tsx';
import type { ButtonProps } from '../input/Button.tsx';
import { useMediaQuery } from '../interaction/media.ts';
import { observeScroll, scrollTop, useScrollTarget } from '../interaction/scroll.ts';
import type { ScrollTargetSource } from '../interaction/scroll.ts';

export interface BackTopProps extends ElementProps {
  target?: ScrollTargetSource;
  /** 滚动超过多少 px 后显示，默认 200。 */
  threshold?: number;
  /** 默认 smooth；减少动态效果时改用 instant。 */
  behavior?: ScrollBehavior;
  /** 浮动按钮相对视口的逻辑末端和底部距离。 */
  insetInlineEnd?: CssValue<'insetInlineEnd', UiTheme>;
  insetBlockEnd?: CssValue<'insetBlockEnd', UiTheme>;
  slotButton?: Omit<ButtonProps, 'children' | 'type'>;
}

/** 组合 Button；滚动目标与浮动位置各自独立，默认定位在当前视口右下角。 */
export const BackTop = _component(
  ({
    target,
    threshold = 200,
    behavior = 'smooth',
    insetInlineEnd = '2em',
    insetBlockEnd = '2em',
    slotButton,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: BackTopProps) => {
    const s = useCss();
    const lang = useLang();
    const root = shallowRef<HTMLDivElement>();
    const position = shallowRef(0);
    const focused = shallowRef(false);
    const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
    const scrollTarget = useScrollTarget(() => target, root);
    observeScroll(scrollTarget, (current) => {
      position.value = scrollTop(current);
    });
    // 键盘激活后保留焦点，直到用户主动离开；隐藏控件不把焦点丢回 body。
    const visible = computed(() => position.value > Math.max(0, threshold) || focused.value);
    return (
      <div
        {...rest}
        ref={root}
        hidden={!visible.value}
        class={cx(
          s
            .position('fixed')
            .insetInlineEnd(bx(insetInlineEnd))
            .insetBlockEnd(bx(insetBlockEnd))
            .zIndex('_floating'),
          className,
        )}
      >
        <Button
          {...slotRest(slotButton)}
          type="button"
          icon={children == null ? (slotButton?.icon ?? ArrowUp) : slotButton?.icon}
          shape={slotButton?.shape ?? 'circle'}
          tone={slotButton?.tone ?? 'primary'}
          aria-label={slotButton?.['aria-label'] ?? lang.backTop}
          class={slotButton?.class}
          onFocus={() => {
            focused.value = true;
          }}
          onBlur={() => {
            focused.value = false;
          }}
          onClick={(event) => {
            if (!event.defaultPrevented)
              scrollTarget.value?.scrollTo({
                top: 0,
                behavior: reduced.value ? 'instant' : behavior,
              });
          }}
        >
          {children}
        </Button>
      </div>
    );
  },
);
