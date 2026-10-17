import { _component, bx, cx } from '@zerodep-vue/core';
import {
  autoUpdate,
  computePosition,
  offset as floatingOffset,
  flip,
  shift,
  size,
  hide,
} from '@floating-ui/dom';
import type { Placement } from '@floating-ui/dom';
import { computed, nextTick, onMounted, shallowRef, Teleport, watch } from 'vue';
import type { Ref } from 'vue';
import { tabbable } from 'tabbable';
import { useCss } from '../config/Provider.tsx';
import type { ElementProps } from '../config/props.ts';
import { useLayer, useLayerContext } from './layer.ts';
import type { OverlayCloseReason } from './layer.ts';
import { usePortalStyle } from './portal.ts';
import { callCallbacks } from './callbacks.ts';
import type { Callback } from './callbacks.ts';
import { Scrollbar } from '../layout/Scrollbar.tsx';
import type { ScrollbarProps } from '../layout/Scrollbar.tsx';
import { slotRest } from '../config/props.ts';

export interface FloatingPanelProps extends ElementProps {
  /** 面板 DOM 由 Vue 管理，上层可将它纳入自己的复合焦点边界。 */
  elementRef?: Ref<HTMLDivElement | null | undefined>;
  open: Ref<boolean>;
  reference?: HTMLElement;
  placement?: Placement;
  offset?: number;
  matchWidth?: boolean;
  closeOnEscape?: boolean;
  closeOnOutside?: boolean;
  closeOnFocusOutside?: boolean;
  focus?: 'none' | 'first' | 'panel';
  restoreFocus?: boolean;
  surface?: 'normal' | 'inverse';
  scrollable?: boolean;
  /** 滚动面板的视口、内容和样式；不替换所属内容。 */
  slotScrollbar?: Omit<ScrollbarProps, 'children'>;
  onClose?: Callback<[reason: OverlayCloseReason]>;
}

/** 浮层共用定位、层栈与可选滚动；内容语义和焦点策略由上层控件决定。 */
export const FloatingPanel = _component(
  ({
    open,
    elementRef = shallowRef<HTMLDivElement | null | undefined>(),
    reference,
    placement = 'bottom-start',
    offset = 8,
    matchWidth = false,
    closeOnEscape = true,
    closeOnOutside = true,
    closeOnFocusOutside = true,
    focus = 'none',
    restoreFocus = true,
    surface = 'normal',
    scrollable = true,
    slotScrollbar,
    onClose,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: FloatingPanelProps) => {
    const s = useCss();
    const panel = computed(() => elementRef.value ?? undefined);
    const trigger = shallowRef(reference);
    watch(
      () => reference,
      (value, _previous, cleanup) => {
        if (value) {
          trigger.value = value;
          return;
        }
        // DOM ref 替换先清空再赋新值；等本轮 Vue 更新结束，避免销毁仍属于同一浮层的内容。
        let active = true;
        cleanup(() => {
          active = false;
        });
        void nextTick(() => {
          if (active) trigger.value = undefined;
        });
      },
      { flush: 'sync' },
    );
    const mounted = shallowRef(false);
    const context = useLayerContext(() => open.value);
    const appearance = usePortalStyle(trigger);
    const geometry = shallowRef({
      x: 0,
      y: 0,
      width: undefined as number | undefined,
      maxWidth: 0,
      maxHeight: 0,
      visible: false,
    });
    onMounted(() => {
      mounted.value = true;
    });
    const close = (reason: OverlayCloseReason) => {
      if (!open.value) return;
      open.value = false;
      callCallbacks(onClose, reason);
    };
    useLayer({
      context,
      panel,
      reference: trigger,
      escape: () => closeOnEscape,
      outside: () => closeOnOutside,
      outsideFocus: () => closeOnFocusOutside,
      restoreFocus: () => restoreFocus,
      close,
    });
    let focusedPanel: HTMLElement | undefined;
    watch(
      () =>
        [
          context.active.value,
          trigger.value,
          panel.value,
          placement,
          offset,
          matchWidth,
          appearance.value,
        ] as const,
      ([active, anchor, element], _old, cleanup) => {
        if (!active || !anchor || !element) {
          focusedPanel = undefined;
          geometry.value = { ...geometry.value, visible: false };
          return;
        }
        let live = true;
        let request = 0;
        const update = async () => {
          const version = ++request;
          let availableWidth = 0;
          let availableHeight = 0;
          const result = await computePosition(anchor, element, {
            placement,
            strategy: 'fixed',
            middleware: [
              floatingOffset(offset),
              flip(),
              shift({ padding: 8 }),
              size({
                padding: 8,
                apply({ availableWidth: width, availableHeight: height }) {
                  availableWidth = Math.max(0, width);
                  availableHeight = Math.max(0, height);
                },
              }),
              hide(),
            ],
          });
          if (!live || version !== request) return;
          geometry.value = {
            x: result.x,
            y: result.y,
            width: matchWidth ? anchor.getBoundingClientRect().width : undefined,
            maxWidth: availableWidth,
            maxHeight: availableHeight,
            visible: !result.middlewareData.hide?.referenceHidden,
          };
          await nextTick();
          if (!live || version !== request) return;
          if (focusedPanel !== element) {
            focusedPanel = element;
            if (focus !== 'none')
              (focus === 'first' ? (tabbable(element)[0] ?? element) : element).focus({
                preventScroll: true,
              });
          }
        };
        const stop = autoUpdate(anchor, element, () => {
          void update();
        });
        cleanup(() => {
          live = false;
          stop();
        });
      },
      { flush: 'post', immediate: true },
    );
    function keydown(event: KeyboardEvent) {
      const element = panel.value;
      const anchor = trigger.value;
      if (event.defaultPrevented || event.key !== 'Tab' || !element || !anchor) return;
      const controls = tabbable(element);
      const focused = element.ownerDocument.activeElement;
      const leaving =
        !controls.length ||
        (event.shiftKey
          ? focused === controls[0] || focused === element
          : focused === controls.at(-1));
      if (!leaving) return;
      const scope = anchor.closest('dialog[open]') ?? anchor.ownerDocument.body;
      const outside = tabbable(scope).filter((control) => !element.contains(control));
      const index = outside.indexOf(anchor);
      const next = event.shiftKey ? anchor : outside[index + 1];
      if (closeOnFocusOutside) close('outside');
      if (next) {
        event.preventDefault();
        next.focus({ preventScroll: true });
      } else {
        // 页面末尾保留浏览器默认 Tab 行为，不循环回页面首个控件。
        anchor.focus({ preventScroll: true });
      }
    }
    return (
      <>
        {mounted.value && trigger.value && context.active.value && (
          <Teleport to={context.portal.value ?? trigger.value.ownerDocument.body}>
            <div
              {...rest}
              ref={elementRef}
              tabindex={-1}
              onKeydown={keydown}
              dir={appearance.value.direction}
              class={cx(
                s
                  .position('fixed')
                  .left(bx(geometry.value.x))
                  .top(bx(geometry.value.y))
                  .width('max-content')
                  .width(bx(geometry.value.width))
                  .maxWidth(bx(geometry.value.maxWidth || 'calc(100vw - 1em)'))
                  .maxHeight(bx(geometry.value.maxHeight || 'calc(100dvh - 1em)'))
                  .display('flex')
                  .flexDirection('column')
                  .overflow('hidden')
                  .visibility(bx(geometry.value.visible ? 'visible' : 'hidden'))
                  .fontSize(bx(appearance.value.fontSize))
                  .fontFamily(bx(appearance.value.fontFamily))
                  .lineHeight(bx(appearance.value.lineHeight))
                  .boxSizing('border-box')
                  .borderRadius('_medium')
                  .borderStyle('solid')
                  .borderWidth('_thin')
                  .borderColor('_border')
                  .backgroundColor(bx(surface === 'inverse' ? '_surfaceInverse' : '_surfaceRaised'))
                  .color(bx(surface === 'inverse' ? '_textInverse' : '_textPrimary'))
                  .boxShadow('_medium')
                  .zIndex(bx(surface === 'inverse' ? '_tooltip' : '_dropdown')),
                className,
              )}
            >
              {scrollable ? (
                <Scrollbar
                  {...slotRest(slotScrollbar)}
                  tabindex={slotScrollbar?.tabindex ?? -1}
                  class={cx(s.flex('1 1 auto').minHeight(0), slotScrollbar?.class)}
                  slotContent={{
                    ...slotScrollbar?.slotContent,
                    class: cx(s.padding('_medium'), slotScrollbar?.slotContent?.class),
                  }}
                >
                  {children}
                </Scrollbar>
              ) : (
                children
              )}
            </div>
          </Teleport>
        )}
      </>
    );
  },
);
