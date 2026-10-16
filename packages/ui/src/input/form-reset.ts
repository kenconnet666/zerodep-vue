import { watchPostEffect } from 'vue';

/** 原生 reset 可被后续监听器取消；等默认行为完成后再同步模型，并随表单归属释放监听。 */
export function useFormReset(
  control: () =>
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
    | HTMLFieldSetElement
    | null
    | undefined,
  reset: () => void,
) {
  watchPostEffect((cleanup) => {
    const element = control();
    if (!element) return;
    // 表单可以稍后挂载或被同 id 节点替换；事件到达时读取原生 form，避免保留过期归属。
    const roots = new Set([element.ownerDocument, element.getRootNode()]);
    let active = true;
    const listener = (event: Event) => {
      if (event.currentTarget !== element.getRootNode() || event.target !== element.form) return;
      queueMicrotask(() => {
        if (active && event.target === control()?.form && !event.defaultPrevented) reset();
      });
    };
    for (const root of roots) root.addEventListener('reset', listener, true);
    cleanup(() => {
      active = false;
      for (const root of roots) root.removeEventListener('reset', listener, true);
    });
  });
}
