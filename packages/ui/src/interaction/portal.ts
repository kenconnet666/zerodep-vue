import { shallowRef, watchPostEffect } from 'vue';
import type { ComponentPublicInstance, Ref } from 'vue';

/** Vue 原生 ref 兼容类型；支持 Element 和通过 expose 暴露 element 的基础组件。 */
export function referenceElement(
  value: Element | ComponentPublicInstance | null,
): HTMLElement | undefined {
  if (!value) return undefined;
  if (value instanceof HTMLElement) return value;
  if ('element' in value && value.element instanceof HTMLElement) return value.element;
  if ('$el' in value && value.$el instanceof HTMLElement) return value.$el;
  return undefined;
}

/** Teleport 后继续继承触发位置的字体与方向，而非 body 的样式。 */
export function usePortalStyle(source: Readonly<Ref<HTMLElement | undefined>>) {
  const appearance = shallowRef({
    fontSize: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'normal',
    direction: 'ltr' as 'ltr' | 'rtl',
  });
  watchPostEffect((cleanup) => {
    const element = source.value;
    const view = element?.ownerDocument.defaultView;
    if (!element || !view) return;
    const update = () => {
      const style = view.getComputedStyle(element);
      appearance.value = {
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
        lineHeight: style.lineHeight,
        direction: style.direction === 'rtl' ? 'rtl' : 'ltr',
      };
    };
    const mutation = new MutationObserver(update);
    for (let parent: HTMLElement | null = element; parent; parent = parent.parentElement)
      mutation.observe(parent, { attributes: true, attributeFilter: ['dir', 'style', 'class'] });
    const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(update);
    resize?.observe(element);
    view.addEventListener('resize', update);
    update();
    cleanup(() => {
      mutation.disconnect();
      resize?.disconnect();
      view.removeEventListener('resize', update);
    });
  });
  return appearance;
}
