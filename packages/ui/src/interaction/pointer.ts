import { onScopeDispose, shallowRef } from 'vue';

/** 每次拖动独占其监听与捕获；取消、丢失捕获和卸载共用同一释放路径。 */
export function usePointerDrag() {
  const dragging = shallowRef(false);
  let cancel = () => {};
  onScopeDispose(() => cancel());
  function start(
    event: PointerEvent,
    move: (event: PointerEvent) => void,
    end?: (cancelled: boolean) => void,
  ) {
    if (event.button !== 0 || event.isPrimary === false) return;
    const element = event.currentTarget;
    if (!(element instanceof HTMLElement)) return;
    cancel();
    const document = element.ownerDocument;
    const view = document.defaultView;
    const pointerId = event.pointerId;
    let finished = false;
    const priorSelection = document.documentElement.style.userSelect;
    document.documentElement.style.userSelect = 'none';
    const pointerMove = (next: PointerEvent) => {
      if (next.pointerId === pointerId) {
        next.preventDefault();
        move(next);
      }
    };
    const finish = (cancelled: boolean) => {
      if (finished) return;
      finished = true;
      document.removeEventListener('pointermove', pointerMove);
      document.removeEventListener('pointerup', pointerUp);
      document.removeEventListener('pointercancel', pointerCancel);
      element.removeEventListener('lostpointercapture', lostCapture);
      view?.removeEventListener('blur', blur);
      if (element.hasPointerCapture?.(pointerId)) element.releasePointerCapture(pointerId);
      document.documentElement.style.userSelect = priorSelection;
      dragging.value = false;
      cancel = () => {};
      end?.(cancelled);
    };
    const pointerUp = (next: PointerEvent) => {
      if (next.pointerId === pointerId) finish(false);
    };
    const pointerCancel = (next: PointerEvent) => {
      if (next.pointerId === pointerId) finish(true);
    };
    const lostCapture = (next: PointerEvent) => {
      if (next.pointerId === pointerId) finish(true);
    };
    const blur = () => finish(true);
    cancel = () => finish(true);
    dragging.value = true;
    event.preventDefault();
    element.focus({ preventScroll: true });
    document.addEventListener('pointermove', pointerMove, { passive: false });
    document.addEventListener('pointerup', pointerUp);
    document.addEventListener('pointercancel', pointerCancel);
    element.addEventListener('lostpointercapture', lostCapture);
    view?.addEventListener('blur', blur);
    element.setPointerCapture?.(pointerId);
  }
  return { dragging, start, cancel: () => cancel() };
}
