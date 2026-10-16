import { watchPostEffect } from 'vue';

/** 原生 reset 可被后续监听器取消；等默认行为完成后再同步模型，并随表单归属释放监听。 */
export function useFormReset(owner: () => HTMLFormElement | null | undefined, reset: () => void) {
  watchPostEffect((cleanup) => {
    const form = owner();
    if (!form) return;
    let active = true;
    const listener = (event: Event) =>
      queueMicrotask(() => {
        if (active && !event.defaultPrevented) reset();
      });
    form.addEventListener('reset', listener);
    cleanup(() => {
      active = false;
      form.removeEventListener('reset', listener);
    });
  });
}
