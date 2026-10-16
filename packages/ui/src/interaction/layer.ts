import { computed, inject, onBeforeUnmount, provide, watch } from 'vue';
import type { InjectionKey, Ref } from 'vue';

export type OverlayCloseReason = 'escape' | 'outside' | 'trigger' | 'close';
interface LayerContext {
  id: symbol;
  ancestors: readonly symbol[];
  active: Readonly<Ref<boolean>>;
  portal: Readonly<Ref<HTMLElement | undefined>>;
}
const layerKey: InjectionKey<LayerContext> = Symbol('UI overlay ownership');
interface LayerEntry {
  id: symbol;
  ancestors: readonly symbol[];
  panel: HTMLElement;
  reference: HTMLElement | undefined;
  escape: () => boolean;
  outside: () => boolean;
  outsideFocus: () => boolean;
  close: (reason: OverlayCloseReason) => void;
}
interface LayerStack {
  entries: LayerEntry[];
  dispose(): void;
}
const stacks = new WeakMap<Document, LayerStack>();

/** 同一文档的最顶层独占关闭输入；浮层内容可通过 Teleport 保留 Vue 所有权。 */
export function useLayerContext(
  open: () => boolean,
  portal?: Readonly<Ref<HTMLElement | undefined>>,
) {
  const parent = inject(layerKey, undefined);
  const context: LayerContext = {
    id: Symbol('UI layer'),
    ancestors: parent ? [...parent.ancestors, parent.id] : [],
    active: computed(() => open() && (parent?.active.value ?? true)),
    portal: computed(() => portal?.value ?? parent?.portal.value),
  };
  provide(layerKey, context);
  return context;
}

export function useLayer(options: {
  context: LayerContext;
  panel: Readonly<Ref<HTMLElement | undefined>>;
  reference?: Readonly<Ref<HTMLElement | undefined>>;
  enabled?: () => boolean;
  escape(): boolean;
  outside(): boolean;
  outsideFocus?: () => boolean;
  restoreFocus(): boolean;
  close(reason: OverlayCloseReason): void;
}) {
  let focusedAtClose = false;
  let unmounting = false;
  const captureFocus = () => {
    const panel = options.panel.value;
    if (!panel) return;
    const document = panel.ownerDocument;
    const owned =
      stacks
        .get(document)
        ?.entries.filter(
          (entry) =>
            entry.id === options.context.id || entry.ancestors.includes(options.context.id),
        ) ?? [];
    focusedAtClose =
      panel.contains(document.activeElement) ||
      owned.some((entry) => entry.panel.contains(document.activeElement));
  };
  // render 移除浮层后 activeElement 已可能回到 body，必须先记录逻辑子层的焦点。
  watch(
    () => options.context.active.value,
    (active) => {
      if (!active) captureFocus();
      else focusedAtClose = false;
    },
    { flush: 'sync' },
  );
  onBeforeUnmount(() => {
    unmounting = true;
    captureFocus();
  });
  watch(
    () =>
      [
        options.context.active.value && (options.enabled?.() ?? true),
        options.panel.value,
        options.reference?.value,
      ] as const,
    ([active, panel, reference], _old, cleanup) => {
      if (!active || !panel) return;
      const document = panel.ownerDocument;
      let stack = stacks.get(document);
      if (!stack) {
        const entries: LayerEntry[] = [];
        const keydown = (event: KeyboardEvent) => {
          if (event.key !== 'Escape' || event.defaultPrevented || event.isComposing) return;
          const top = entries.at(-1);
          if (!top) return;
          // 即使顶层禁止 Escape，也不让原生 dialog 或父浮层接管本次按键。
          event.preventDefault();
          event.stopPropagation();
          if (top.escape()) top.close('escape');
        };
        const pointerdown = (event: PointerEvent) => {
          if (event.defaultPrevented || event.button !== 0) return;
          const top = entries.at(-1);
          if (!top || !top.outside()) return;
          const path = event.composedPath();
          if (path.includes(top.panel) || (top.reference && path.includes(top.reference))) return;
          top.close('outside');
        };
        const focusin = (event: FocusEvent) => {
          const top = entries.at(-1);
          if (!top || !top.outsideFocus()) return;
          const path = event.composedPath();
          if (!path.includes(top.panel) && (!top.reference || !path.includes(top.reference)))
            top.close('outside');
        };
        document.addEventListener('keydown', keydown);
        document.addEventListener('pointerdown', pointerdown);
        document.addEventListener('focusin', focusin);
        stack = {
          entries,
          dispose() {
            document.removeEventListener('keydown', keydown);
            document.removeEventListener('pointerdown', pointerdown);
            document.removeEventListener('focusin', focusin);
            stacks.delete(document);
          },
        };
        stacks.set(document, stack);
      }
      let reason: OverlayCloseReason | undefined;
      const entry: LayerEntry = {
        id: options.context.id,
        ancestors: options.context.ancestors,
        panel,
        reference,
        escape: options.escape,
        outside: options.outside,
        outsideFocus: options.outsideFocus ?? (() => false),
        close(value) {
          reason = value;
          options.close(value);
        },
      };
      // 父层替换触发器或 DOM 后重新注册，仍应排在已打开的子层下面。
      const childIndex = stack.entries.findIndex((item) => item.ancestors.includes(entry.id));
      if (childIndex < 0) stack.entries.push(entry);
      else stack.entries.splice(childIndex, 0, entry);
      cleanup(() => {
        const index = stack.entries.indexOf(entry);
        if (index >= 0) stack.entries.splice(index, 1);
        if (!stack.entries.length) stack.dispose();
        const focused = panel.contains(document.activeElement);
        if (
          reference?.isConnected &&
          !reference.closest('[inert]') &&
          !reference.matches(':disabled') &&
          options.restoreFocus() &&
          reason !== 'outside' &&
          (!options.context.active.value || unmounting) &&
          (focused || focusedAtClose || reason === 'escape')
        )
          reference.focus({ preventScroll: true });
      });
    },
    { flush: 'post', immediate: true },
  );
}

const locks = new WeakMap<Document, { count: number; restore(): void }>();
/** 原生 dialog 负责模态焦点和 inert；滚动锁按文档引用计数，嵌套关闭不会提前解锁。 */
export function lockDocumentScroll(document: Document) {
  let lock = locks.get(document);
  if (!lock) {
    const root = document.documentElement;
    const view = document.defaultView;
    const overflow = root.style.overflow;
    const padding = root.style.paddingInlineEnd;
    const oldWidth = root.clientWidth;
    const computedPadding =
      Number.parseFloat(view?.getComputedStyle(root).paddingInlineEnd ?? '0') || 0;
    root.style.overflow = 'hidden';
    const difference = Math.max(0, root.clientWidth - oldWidth);
    const appliedPadding = difference ? `${computedPadding + difference}px` : padding;
    if (difference) root.style.paddingInlineEnd = appliedPadding;
    lock = {
      count: 0,
      restore() {
        if (root.style.overflow === 'hidden') root.style.overflow = overflow;
        if (root.style.paddingInlineEnd === appliedPadding) root.style.paddingInlineEnd = padding;
        locks.delete(document);
      },
    };
    locks.set(document, lock);
  }
  lock.count++;
  let released = false;
  return () => {
    if (!released) {
      released = true;
      if (--lock.count === 0) lock.restore();
    }
  };
}
