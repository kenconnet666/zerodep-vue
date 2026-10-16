import type { CssValue, Slot } from '@zerodep-vue/core';
import { _component, _div } from '@zerodep-vue/core';
import { nextTick, onMounted, onScopeDispose, shallowRef, watch } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { ElementProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import type { Callback } from '../interaction/callbacks.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import { useMediaQuery } from '../interaction/media.ts';
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
  slotContent?: Slot<typeof _div>;
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
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: CollapseTransitionProps) => {
    const css = useCss();
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
      const from: Keyframe = {
        [property]: `${reversing || !opened ? beforeSize : 0}px`,
      };
      const to: Keyframe = {
        [property]: `${targetSize}px`,
      };
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
      {
        flush: 'post',
      },
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
        {
          immediate: true,
          flush: 'post',
        },
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
    const style = css(() => ({
      display: axis === 'horizontal' ? 'inline-block' : 'block',
      boxSizing: 'border-box',
      minWidth: 0,
      minHeight: 0,
      overflow: animating.value ? 'hidden' : undefined,
      transitionDuration: duration,
      transitionTimingFunction: '_standard',
      '&[hidden]': {
        display: 'none',
      },
    }));
    return (
      <_div
        css={[style, cssProp]}
        {...rest}
        ref={root}
        hidden={!present.value}
        inert={!show || undefined}
        aria-hidden={!show || undefined}
        data-zv-collapse-state={show ? 'open' : 'closed'}
      >
        {(!lazy || visited.value) && (!unmountOnHide || present.value) && (
          <_div
            css={css(() => ({
              display: 'flow-root',
              width: axis === 'horizontal' ? 'max-content' : undefined,
            }))}
            {...slotContent}
            ref={content}
          >
            {children}
          </_div>
        )}
      </_div>
    );
  },
);
