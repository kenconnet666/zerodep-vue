import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { nextTick, onMounted, onScopeDispose, shallowRef, watch } from 'vue';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import { slotRest } from '../config/props.ts';
import { useCss } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';
import { useMediaQuery } from '../interaction/media.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { Callback } from '../interaction/callbacks.ts';

export interface CollapseTransitionProps extends ElementProps {
  /** 是否展开；动画组件本身不修改调用方状态。 */
  show?: boolean;
  /** vertical 动画高度，horizontal 动画宽度。 */
  axis?: 'vertical' | 'horizontal';
  /** 同时淡入淡出，默认 true。 */
  fade?: boolean;
  /** 首次挂载时是否执行入场，默认 false；SSR 始终输出最终初始状态。 */
  appear?: boolean;
  duration?: CssValue<'transitionDuration', UiTheme>;
  /** 首次展开前不创建内容。 */
  lazy?: boolean;
  /** 收起动画完成后销毁内容；默认保留表单等子组件状态。 */
  unmountOnHide?: boolean;
  slotContent?: ElementSlotProps;
  onAfterEnter?: Callback<[]>;
  onAfterLeave?: Callback<[]>;
}

/** 自然尺寸与零之间的过渡；反向切换从当前画面继续，结束后释放尺寸控制。 */
export const CollapseTransition = _component(
  ({
    show = true,
    axis = 'vertical',
    fade = true,
    appear = false,
    duration = '_normal',
    lazy = false,
    unmountOnHide = false,
    slotContent,
    onAfterEnter,
    onAfterLeave,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: CollapseTransitionProps) => {
    const s = useCss();
    const root = shallowRef<HTMLDivElement>();
    const content = shallowRef<HTMLDivElement>();
    const present = shallowRef(show);
    const visited = shallowRef(show);
    const animating = shallowRef(false);
    const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
    let mounted = false;
    let version = 0;
    let animation: Animation | undefined;
    let targetSize = 0;
    function naturalSize() {
      const element = root.value;
      const child = content.value;
      const view = element?.ownerDocument.defaultView;
      if (!element || !child || !view) return 0;
      const style = view.getComputedStyle(element);
      const extra =
        axis === 'vertical'
          ? [style.paddingTop, style.paddingBottom, style.borderTopWidth, style.borderBottomWidth]
          : [style.paddingLeft, style.paddingRight, style.borderLeftWidth, style.borderRightWidth];
      return (
        (axis === 'vertical' ? child.offsetHeight : child.offsetWidth) +
        extra.reduce((sum, value) => sum + (Number.parseFloat(value) || 0), 0)
      );
    }
    async function transition(opened: boolean) {
      const current = ++version;
      const element = root.value;
      const view = element?.ownerDocument.defaultView;
      const property = axis === 'vertical' ? 'height' : 'width';
      const previous = element && view ? view.getComputedStyle(element) : undefined;
      const reversing = Boolean(animation);
      const beforeSize = previous ? Number.parseFloat(previous[property]) || 0 : 0;
      const beforeOpacity = Number.parseFloat(previous?.opacity ?? '1');
      animation?.cancel();
      animation = undefined;
      if (opened) {
        present.value = true;
        visited.value = true;
      }
      await nextTick();
      if (current !== version || !mounted || !element || !view) return;
      const style = view.getComputedStyle(element);
      const time = style.transitionDuration.split(',')[0] ?? '0s';
      const milliseconds = (Number.parseFloat(time) || 0) * (time.endsWith('ms') ? 1 : 1000);
      targetSize = opened ? naturalSize() : 0;
      const finish = async () => {
        if (current !== version) return;
        present.value = opened;
        await nextTick();
        if (current !== version) return;
        animation?.cancel();
        animation = undefined;
        animating.value = false;
        if (opened) callCallbacks(onAfterEnter);
        else callCallbacks(onAfterLeave);
      };
      if (
        reduced.value ||
        milliseconds <= 0 ||
        !element.animate ||
        !element.getClientRects().length
      ) {
        await finish();
        return;
      }
      animating.value = true;
      const from: Keyframe = { [property]: `${reversing || !opened ? beforeSize : 0}px` };
      const to: Keyframe = { [property]: `${targetSize}px` };
      if (fade) {
        from.opacity = reversing || !opened ? beforeOpacity : 0;
        to.opacity = opened ? Number.parseFloat(style.opacity) || 1 : 0;
      }
      animation = element.animate([from, to], {
        duration: milliseconds,
        easing: style.transitionTimingFunction || 'ease',
        fill: 'both',
      });
      void animation.finished.then(finish, () => {});
    }
    watch(
      () => [show, axis, reduced.value],
      () => {
        if (mounted) void transition(show);
        else {
          present.value = show;
          if (show) visited.value = true;
        }
      },
      { flush: 'post' },
    );
    onMounted(() => {
      mounted = true;
      if (appear && show) void transition(true);
      const observer =
        typeof ResizeObserver === 'undefined'
          ? undefined
          : new ResizeObserver(() => {
              if (animation && show && Math.abs(naturalSize() - targetSize) > 0.5)
                void transition(true);
            });
      const stop = watch(
        content,
        (element, previous) => {
          if (previous) observer?.unobserve(previous);
          if (element) observer?.observe(element);
        },
        { immediate: true, flush: 'post' },
      );
      onScopeDispose(() => {
        stop();
        observer?.disconnect();
      });
    });
    onScopeDispose(() => {
      mounted = false;
      version++;
      animation?.cancel();
    });
    const style = s
      .display(bx(axis === 'horizontal' ? 'inline-block' : 'block'))
      .boxSizing('border-box')
      .minWidth(0)
      .minHeight(0)
      .overflow(bx(animating.value ? 'hidden' : undefined))
      .transitionDuration(bx(duration))
      .transitionTimingFunction('_standard')
      .select('&[hidden]', s.display('none'));
    return (
      <div
        {...rest}
        ref={root}
        hidden={!present.value}
        inert={!show || undefined}
        aria-hidden={!show || undefined}
        data-zv-collapse-state={show ? 'open' : 'closed'}
        class={cx(style, className)}
      >
        {(!lazy || visited.value) && (!unmountOnHide || present.value) && (
          <div
            {...slotRest(slotContent)}
            ref={content}
            class={cx(
              s.display('flow-root').width(bx(axis === 'horizontal' ? 'max-content' : undefined)),
              slotContent?.class,
            )}
          >
            {children}
          </div>
        )}
      </div>
    );
  },
);
