import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import {
  computed,
  onScopeDispose,
  onUpdated,
  provide,
  reactive,
  shallowRef,
  useId,
  watchPostEffect,
} from 'vue';
import type { Ref } from 'vue';
import type { UiTheme } from '../config/theme/types.ts';
import { slotRest } from '../config/props.ts';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import { useCss, useLang } from '../config/Provider.tsx';
import { inlineScroll, scrollTargetKey, setInlineScroll } from '../interaction/scroll.ts';
import { usePointerDrag } from '../interaction/pointer.ts';
import { measureTrack, trackProgress } from '../interaction/track.ts';

export interface ScrollbarProps extends ElementProps {
  /** 实际滚动视口，通过普通 Ref Props 访问浏览器 scrollTo/scrollBy 等能力。 */
  viewportRef?: Ref<HTMLDivElement | null | undefined>;
  /** 默认同时允许横纵滚动。 */
  axis?: 'vertical' | 'horizontal' | 'both';
  /** 有溢出时始终显示轨道；默认在悬停、焦点、滚动或拖动期间显示。 */
  always?: boolean;
  height?: CssValue<'height', UiTheme>;
  maxHeight?: CssValue<'maxHeight', UiTheme>;
  /** 视觉滑块厚度，默认 0.5em；不占用内容布局宽度。 */
  thickness?: CssValue<'width', UiTheme>;
  /** 滚动后保持显示的毫秒数，默认 800。 */
  hideDelay?: number;
  /** 原生滚动视口属性，内部 id、tabindex 和测量 ref 仍由组件管理。 */
  slotViewport?: ElementSlotProps;
  /** 内容包装节点属性。 */
  slotContent?: ElementSlotProps;
  slotVerticalRail?: ElementSlotProps;
  slotHorizontalRail?: ElementSlotProps;
  slotVerticalThumb?: ElementSlotProps;
  slotHorizontalThumb?: ElementSlotProps;
}
/** 原生滚动视口加半透明浮动滑块；溢出、显隐、拖动均不改变内容可用宽度。 */
export const Scrollbar = _component(
  ({
    axis = 'both',
    viewportRef = shallowRef<HTMLDivElement | null | undefined>(),
    always = false,
    height,
    maxHeight,
    thickness = '0.5em',
    hideDelay = 800,
    class: className,
    slotViewport,
    slotContent,
    slotVerticalRail,
    slotHorizontalRail,
    slotVerticalThumb,
    slotHorizontalThumb,
    children,
    onScroll,
    tabindex = 0,
    role,
    'aria-label': label,
    'aria-labelledby': labelledBy,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: ScrollbarProps) => {
    const s = useCss();
    const lang = useLang();
    const root = shallowRef<HTMLDivElement>();
    const content = shallowRef<HTMLDivElement>();
    const verticalRail = shallowRef<HTMLDivElement>();
    const horizontalRail = shallowRef<HTMLDivElement>();
    const active = shallowRef(false);
    const rtl = shallowRef(false);
    const { dragging, start, cancel } = usePointerDrag();
    const geometry = reactive({
      xRange: 0,
      yRange: 0,
      xSize: 0,
      ySize: 0,
      xTravel: 0,
      yTravel: 0,
      x: 0,
      y: 0,
      xValue: 0,
      yValue: 0,
    });
    const vertical = computed(() => axis !== 'horizontal' && geometry.yRange > 0.5);
    const horizontal = computed(() => axis !== 'vertical' && geometry.xRange > 0.5);
    const viewportId = `zv-scroll-${useId()}`;
    let schedule = () => {};
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    provide(
      scrollTargetKey,
      computed(() => viewportRef.value ?? undefined),
    );
    const reveal = () => {
      active.value = true;
      clearTimeout(hideTimer);
      hideTimer = setTimeout(
        () => {
          active.value = false;
        },
        Math.max(0, hideDelay),
      );
    };
    const measure = () => {
      const element = viewportRef.value;
      const view = element?.ownerDocument.defaultView;
      if (!element || !view) return;
      rtl.value = view.getComputedStyle(element).direction === 'rtl';
      geometry.xRange = Math.max(0, element.scrollWidth - element.clientWidth);
      geometry.yRange = Math.max(0, element.scrollHeight - element.clientHeight);
      const xLength = horizontalRail.value?.clientWidth ?? 0;
      const yLength = verticalRail.value?.clientHeight ?? 0;
      const minimum = (Number.parseFloat(view.getComputedStyle(element).fontSize) || 16) * 1.5;
      geometry.xSize = element.scrollWidth
        ? Math.min(
            xLength,
            Math.max(minimum, (xLength * element.clientWidth) / element.scrollWidth),
          )
        : 0;
      geometry.ySize = element.scrollHeight
        ? Math.min(
            yLength,
            Math.max(minimum, (yLength * element.clientHeight) / element.scrollHeight),
          )
        : 0;
      geometry.xTravel = Math.max(0, xLength - geometry.xSize);
      geometry.yTravel = Math.max(0, yLength - geometry.ySize);
      geometry.xValue = inlineScroll(element, rtl.value);
      geometry.yValue = Math.max(0, Math.min(geometry.yRange, element.scrollTop));
      geometry.x = geometry.xRange ? (geometry.xValue / geometry.xRange) * geometry.xTravel : 0;
      geometry.y = geometry.yRange ? (geometry.yValue / geometry.yRange) * geometry.yTravel : 0;
    };
    watchPostEffect((cleanup) => {
      const element = viewportRef.value;
      const child = content.value;
      const container = root.value;
      const view = element?.ownerDocument.defaultView;
      // 这些输入改变溢出轴或几何约束，需要下一帧重新测量。
      void axis;
      void height;
      void maxHeight;
      void thickness;
      if (!element || !child || !container || !view) return;
      let frame: number | undefined;
      let live = true;
      const request = () => {
        if (frame !== undefined) return;
        frame = view.requestAnimationFrame(() => {
          frame = undefined;
          if (live) measure();
        });
      };
      schedule = request;
      const resize =
        typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(request);
      for (const observed of [container, element, child, verticalRail.value, horizontalRail.value])
        if (observed) resize?.observe(observed);
      const mutation = new MutationObserver(request);
      mutation.observe(child, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
      });
      // 方向及继承字号变化不会总是改变 viewport 的 border box。
      for (
        let ancestor: HTMLElement | null = container;
        ancestor;
        ancestor = ancestor.parentElement
      )
        mutation.observe(ancestor, {
          attributes: true,
          attributeFilter: ['dir', 'class', 'style', 'hidden'],
        });
      element.addEventListener('load', request, true);
      view.addEventListener('resize', request);
      const fonts = element.ownerDocument.fonts;
      fonts?.addEventListener('loadingdone', request);
      fonts?.ready.then(
        () => {
          if (live) request();
        },
        () => {},
      );
      request();
      cleanup(() => {
        live = false;
        schedule = () => {};
        if (frame !== undefined) view.cancelAnimationFrame(frame);
        resize?.disconnect();
        mutation.disconnect();
        element.removeEventListener('load', request, true);
        view.removeEventListener('resize', request);
        fonts?.removeEventListener('loadingdone', request);
        cancel();
      });
    });
    onUpdated(() => schedule());
    onScopeDispose(() => clearTimeout(hideTimer));
    const moveTo = (direction: 'x' | 'y', value: number) => {
      const element = viewportRef.value;
      if (!element) return;
      if (direction === 'x') setInlineScroll(element, value, rtl.value);
      else element.scrollTop = Math.max(0, Math.min(geometry.yRange, value));
      measure();
      reveal();
    };
    const drag = (event: PointerEvent, direction: 'x' | 'y') => {
      if (event.defaultPrevented) return;
      const rail = direction === 'x' ? horizontalRail.value : verticalRail.value;
      if (!rail) return;
      measure();
      const range = direction === 'x' ? geometry.xRange : geometry.yRange;
      const thumb = event.currentTarget;
      if (!(thumb instanceof HTMLElement)) return;
      const track = measureTrack(rail, thumb, direction === 'y', direction === 'x' && rtl.value);
      const box = thumb.getBoundingClientRect();
      const grab = direction === 'x' ? event.clientX - box.left : event.clientY - box.top;
      if (track.length <= track.thumb) return;
      start(
        event,
        (next) => {
          moveTo(
            direction,
            trackProgress(direction === 'x' ? next.clientX : next.clientY, track, grab) * range,
          );
        },
        () => reveal(),
      );
    };
    const key = (event: KeyboardEvent, direction: 'x' | 'y') => {
      if (event.defaultPrevented) return;
      const element = viewportRef.value;
      if (!element) return;
      const value = direction === 'x' ? geometry.xValue : geometry.yValue;
      const page = direction === 'x' ? element.clientWidth : element.clientHeight;
      const range = direction === 'x' ? geometry.xRange : geometry.yRange;
      let next: number;
      switch (event.key) {
        case 'Home':
          next = 0;
          break;
        case 'End':
          next = range;
          break;
        case 'PageUp':
          next = value - page;
          break;
        case 'PageDown':
          next = value + page;
          break;
        case 'ArrowUp':
          if (direction !== 'y') return;
          next = value - 40;
          break;
        case 'ArrowDown':
          if (direction !== 'y') return;
          next = value + 40;
          break;
        case 'ArrowLeft':
          if (direction !== 'x') return;
          next = value + (rtl.value ? 40 : -40);
          break;
        case 'ArrowRight':
          if (direction !== 'x') return;
          next = value + (rtl.value ? -40 : 40);
          break;
        default:
          return;
      }
      event.preventDefault();
      event.stopPropagation();
      moveTo(direction, next);
    };
    const rootStyle = s
      .position('relative')
      .display('flex')
      .flexDirection('column')
      .minWidth(0)
      .minHeight(0)
      .height(bx(height))
      .maxHeight(bx(maxHeight))
      .overflow('hidden')
      .select(
        '&:hover > [data-zv-scrollbar-rail], &:focus-within > [data-zv-scrollbar-rail]',
        s.opacity(1),
      );
    const viewportStyle = s
      .flex('1 1 auto')
      .minWidth(0)
      .minHeight(0)
      .scrollbarWidth('none')
      .overflowX(bx(axis === 'vertical' ? 'hidden' : 'auto'))
      .overflowY(bx(axis === 'horizontal' ? 'hidden' : 'auto'))
      .select('&::-webkit-scrollbar', s.display('none'))
      .select(
        '&:focus-visible',
        s
          .outlineStyle('solid')
          .outlineColor('_focusRing')
          .outlineWidth('0.125em')
          .outlineOffset('-0.125em'),
      );
    const railStyle = s
      .position('absolute')
      .pointerEvents('none')
      .zIndex(1)
      .opacity(bx(always || active.value || dragging.value ? 1 : 0))
      .transitionProperty('opacity')
      .transitionDuration('_fast')
      .select('@media (prefers-reduced-motion: reduce)', s.transitionDuration('0ms'));
    const thumbStyle = s
      .position('absolute')
      .pointerEvents('auto')
      .touchAction('none')
      .borderRadius('_pill')
      .backgroundColor('_scrollbar')
      .cursor('default')
      .select('&:hover, &:active', s.backgroundColor('_scrollbarHover'))
      .select(
        '&:focus-visible',
        s
          .outlineColor('_focusRing')
          .outlineStyle('solid')
          .outlineWidth('0.125em')
          .outlineOffset('0.0625em'),
      )
      .select('@media (forced-colors: active)', s.backgroundColor('ButtonText'));
    return (
      <div {...rest} ref={root} class={cx(rootStyle, className)}>
        <div
          {...slotRest(slotViewport)}
          ref={viewportRef}
          id={viewportId}
          tabindex={tabindex}
          role={role ?? (label || labelledBy ? 'region' : undefined)}
          aria-label={label}
          aria-labelledby={labelledBy}
          data-zv-scroll-viewport=""
          class={cx(viewportStyle, slotViewport?.class)}
          onScroll={() => {
            schedule();
            reveal();
          }}
          // 外部 onScroll 也可能是 Vue 合并的数组，保留在原生视口的事件分发中。
          {...(onScroll ? { onScroll } : {})}
        >
          <div
            {...slotRest(slotContent)}
            ref={content}
            class={cx(
              s.display('flow-root').boxSizing('border-box').minWidth('100%'),
              slotContent?.class,
            )}
          >
            {children}
          </div>
        </div>
        <div
          {...slotRest(slotVerticalRail)}
          ref={verticalRail}
          data-zv-scrollbar-rail="vertical"
          aria-hidden={!vertical.value || undefined}
          class={cx(
            railStyle,
            s
              .display(bx(vertical.value ? 'block' : 'none'))
              .insetInlineEnd('0.125em')
              .insetBlockStart('0.125em')
              .insetBlockEnd(bx(horizontal.value ? '1em' : '0.125em'))
              .width(bx(thickness)),
            slotVerticalRail?.class,
          )}
        >
          <div
            {...slotRest(slotVerticalThumb)}
            role="scrollbar"
            tabindex={vertical.value ? 0 : -1}
            aria-controls={viewportId}
            aria-label={lang.verticalScrollbar}
            aria-orientation="vertical"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={
              geometry.yRange ? Math.round((geometry.yValue / geometry.yRange) * 100) : 0
            }
            class={cx(
              thumbStyle,
              s.width('100%').height(bx(geometry.ySize)).top(bx(geometry.y)),
              slotVerticalThumb?.class,
            )}
            onPointerdown={(event) => drag(event, 'y')}
            onKeydown={(event) => key(event, 'y')}
          />
        </div>
        <div
          {...slotRest(slotHorizontalRail)}
          ref={horizontalRail}
          data-zv-scrollbar-rail="horizontal"
          aria-hidden={!horizontal.value || undefined}
          class={cx(
            railStyle,
            s
              .display(bx(horizontal.value ? 'block' : 'none'))
              .insetInlineStart('0.125em')
              .insetBlockEnd('0.125em')
              .insetInlineEnd(bx(vertical.value ? '1em' : '0.125em'))
              .height(bx(thickness)),
            slotHorizontalRail?.class,
          )}
        >
          <div
            {...slotRest(slotHorizontalThumb)}
            role="scrollbar"
            tabindex={horizontal.value ? 0 : -1}
            aria-controls={viewportId}
            aria-label={lang.horizontalScrollbar}
            aria-orientation="horizontal"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={
              geometry.xRange ? Math.round((geometry.xValue / geometry.xRange) * 100) : 0
            }
            class={cx(
              thumbStyle,
              s.height('100%').width(bx(geometry.xSize)).insetInlineStart(bx(geometry.x)),
              slotHorizontalThumb?.class,
            )}
            onPointerdown={(event) => drag(event, 'x')}
            onKeydown={(event) => key(event, 'x')}
          />
        </div>
      </div>
    );
  },
);
