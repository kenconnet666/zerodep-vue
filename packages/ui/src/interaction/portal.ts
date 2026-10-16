import { shallowRef, watchPostEffect } from 'vue';
import type { Ref } from 'vue';

/** Teleport 后继续继承触发位置的字体与方向，而非 body 的样式。 */
export function usePortalStyle(source: Readonly<Ref<HTMLElement | null | undefined>>) {
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
