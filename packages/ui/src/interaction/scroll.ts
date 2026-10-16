import { computed, inject, onMounted, shallowRef, toValue, watchPostEffect } from 'vue';
import type { InjectionKey, MaybeRefOrGetter, Ref } from 'vue';

/** 原生滚动目标；不混用浮层的挂载位置。 */
export type ScrollTarget = HTMLElement | Window;
/** 元素尚未挂载时可为空，挂载后自动重新解析。 */
export type ScrollTargetSource = MaybeRefOrGetter<ScrollTarget | null | undefined>;

export const scrollTargetKey: InjectionKey<Readonly<Ref<HTMLElement | undefined>>> =
  Symbol('UI scroll target');
export function isWindow(target: ScrollTarget): target is Window {
  return 'window' in target && target.window === target;
}
export function scrollElement(target: ScrollTarget): HTMLElement {
  return isWindow(target) ? target.document.documentElement : target;
}
export function scrollTop(target: ScrollTarget): number {
  return isWindow(target) ? target.scrollY : target.scrollTop;
}
export function scrollViewport(target: ScrollTarget) {
  if (isWindow(target))
    return {
      top: 0,
      left: 0,
      width: target.document.documentElement.clientWidth,
      height: target.innerHeight,
    };
  const rect = target.getBoundingClientRect();
  return {
    top: rect.top + target.clientTop,
    left: rect.left + target.clientLeft,
    width: target.clientWidth,
    height: target.clientHeight,
  };
}

/** 显式目标 → Scrollbar 上下文 → 最近滚动祖先 → 当前文档窗口。 */
export function useScrollTarget(
  source: () => ScrollTargetSource | undefined,
  anchor: Readonly<Ref<HTMLElement | undefined>>,
) {
  const inherited = inject(scrollTargetKey, undefined);
  const mounted = shallowRef(false);
  onMounted(() => {
    mounted.value = true;
  });
  return computed(() => {
    if (!mounted.value) return undefined;
    const explicit = source();
    if (explicit !== undefined) return toValue(explicit) ?? undefined;
    if (inherited?.value) return inherited.value;
    const element = anchor.value;
    const view = element?.ownerDocument.defaultView;
    if (!element || !view) return undefined;
    for (let parent = element.parentElement; parent; parent = parent.parentElement) {
      const style = view.getComputedStyle(parent);
      if (/(auto|scroll|overlay)/.test(style.overflowY + style.overflowX)) return parent;
    }
    return view;
  });
}

/** 滚动及尺寸变化合并到一帧；目标替换会释放旧监听。回调只在客户端调用。 */
export function observeScroll(
  target: Readonly<Ref<ScrollTarget | undefined>>,
  update: (target: ScrollTarget) => void,
) {
  watchPostEffect((cleanup) => {
    const current = target.value;
    if (!current) return;
    const element = scrollElement(current);
    const view = element.ownerDocument.defaultView;
    if (!view) return;
    let frame: number | undefined;
    let active = true;
    const schedule = () => {
      if (frame !== undefined) return;
      frame = view.requestAnimationFrame(() => {
        frame = undefined;
        if (active) update(current);
      });
    };
    const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(schedule);
    resize?.observe(element);
    current.addEventListener('scroll', schedule, { passive: true });
    view.addEventListener('resize', schedule, { passive: true });
    update(current);
    cleanup(() => {
      active = false;
      if (frame !== undefined) view.cancelAnimationFrame(frame);
      resize?.disconnect();
      current.removeEventListener('scroll', schedule);
      view.removeEventListener('resize', schedule);
    });
  });
}

/** 只移动指定滚动目标，避免 scrollIntoView 连带滚动外部页面。 */
export function scrollToElement(
  target: ScrollTarget,
  element: HTMLElement,
  offset: number,
  behavior: ScrollBehavior,
) {
  const top = Math.max(
    0,
    element.getBoundingClientRect().top - scrollViewport(target).top + scrollTop(target) - offset,
  );
  target.scrollTo({ top, behavior });
}

type RtlMode = 'negative' | 'reverse' | 'default';
const rtlModes = new WeakMap<Document, RtlMode>();
function rtlMode(document: Document): RtlMode {
  const cached = rtlModes.get(document);
  if (cached) return cached;
  const outer = document.createElement('div');
  const inner = document.createElement('div');
  outer.dir = 'rtl';
  outer.style.cssText =
    'position:absolute;left:-10000px;top:-10000px;width:4px;height:1px;overflow:scroll;visibility:hidden;';
  inner.style.width = '8px';
  outer.append(inner);
  document.body.append(outer);
  let mode: RtlMode = 'default';
  if (outer.scrollLeft === 0) {
    outer.scrollLeft = 1;
    mode = outer.scrollLeft === 0 ? 'negative' : 'reverse';
  }
  outer.remove();
  rtlModes.set(document, mode);
  return mode;
}

/** 横向逻辑坐标始终从 inline-start 的 0 开始，并裁掉弹性滚动的越界值。 */
export function inlineScroll(element: HTMLElement, rtl: boolean): number {
  const maximum = Math.max(0, element.scrollWidth - element.clientWidth);
  let value = element.scrollLeft;
  if (rtl)
    switch (rtlMode(element.ownerDocument)) {
      case 'negative':
        value = -value;
        break;
      case 'default':
        value = maximum - value;
        break;
    }
  return Math.max(0, Math.min(maximum, value));
}
export function setInlineScroll(element: HTMLElement, value: number, rtl: boolean) {
  const maximum = Math.max(0, element.scrollWidth - element.clientWidth);
  let native = Math.max(0, Math.min(maximum, value));
  if (rtl)
    switch (rtlMode(element.ownerDocument)) {
      case 'negative':
        native = -native;
        break;
      case 'default':
        native = maximum - native;
        break;
    }
  element.scrollLeft = native;
}
