import { onMounted, shallowRef, toValue, watchEffect } from 'vue';
import type { MaybeRefOrGetter } from 'vue';

/** 首次渲染与 SSR 一致；挂载后读取环境，离开作用域时移除监听。 */
export function useMediaQuery(query: MaybeRefOrGetter<string>) {
  const matches = shallowRef(false);
  onMounted(() => {
    watchEffect((cleanup) => {
      if (typeof window.matchMedia !== 'function') return;
      const media = window.matchMedia(toValue(query));
      const update = () => {
        matches.value = media.matches;
      };
      update();
      media.addEventListener('change', update);
      cleanup(() => media.removeEventListener('change', update));
    });
  });
  return matches;
}
