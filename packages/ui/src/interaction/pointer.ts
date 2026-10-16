import { onScopeDispose, shallowRef } from 'vue';

// 一个文档只允许一条轨道拥有拖动；避免嵌套轨道恢复了另一次拖动的 user-select。
const owners = new WeakMap<Document, () => void>();

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
    owners.get(document)?.();
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
      owners.delete(document);
      dragging.value = false;
      cancel = () => {};
      end?.(cancelled);
    };
    const pointerUp = (next: PointerEvent) => {
      if (next.pointerId === pointerId) {
        move(next);
        finish(false);
      }
    };
    const pointerCancel = (next: PointerEvent) => {
      if (next.pointerId === pointerId) finish(true);
    };
    const lostCapture = (next: PointerEvent) => {
      if (next.pointerId === pointerId) finish(true);
    };
    const blur = () => finish(true);
    cancel = () => finish(true);
    owners.set(document, cancel);
    dragging.value = true;
    event.preventDefault();
    element.focus({ preventScroll: true });
    document.addEventListener('pointermove', pointerMove, { passive: false });
    document.addEventListener('pointerup', pointerUp);
    document.addEventListener('pointercancel', pointerCancel);
    element.addEventListener('lostpointercapture', lostCapture);
    view?.addEventListener('blur', blur);
    // 指针可能在启动期间已取消；文档监听仍能正确完成生命周期。
    try {
      element.setPointerCapture?.(pointerId);
    } catch {
      /* 无活动指针时不建立捕获。 */
    }
  }
  return { dragging, start, cancel: () => cancel() };
}
