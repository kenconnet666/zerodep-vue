import { onMounted, onScopeDispose, shallowRef } from 'vue';

/** 首次渲染与 SSR 一致；挂载后读取环境，离开作用域时移除监听。 */
export function useMediaQuery(query: string) {
  const matches = shallowRef(false);
  let cleanup: (() => void) | undefined;
  onMounted(() => {
    if (typeof window.matchMedia !== 'function') return;
    const media = window.matchMedia(query);
    const update = () => {
      matches.value = media.matches;
    };
    update();
    media.addEventListener('change', update);
    cleanup = () => media.removeEventListener('change', update);
  });
  onScopeDispose(() => cleanup?.());
  return matches;
}
