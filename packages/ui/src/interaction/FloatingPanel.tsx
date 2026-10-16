import type { Placement } from '@floating-ui/dom';
import {
  autoUpdate,
  computePosition,
  flip,
  offset as floatingOffset,
  hide,
  shift,
  size,
} from '@floating-ui/dom';
import { _component, _div } from '@zerodep-vue/core';
import { tabbable } from 'tabbable';
import type { Ref } from 'vue';
import { Teleport, nextTick, onMounted, shallowRef, watch } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { ElementProps } from '../config/props.ts';
import { Scrollbar } from '../layout/Scrollbar.tsx';
import type { Callback } from './callbacks.ts';
import { callCallbacks } from './callbacks.ts';
import type { OverlayCloseReason } from './layer.ts';
import { useLayer, useLayerContext } from './layer.ts';
import { usePortalStyle } from './portal.ts';
export interface FloatingPanelProps extends ElementProps {
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
  onClose?: Callback<[reason: OverlayCloseReason]>;
}

/** Popover/Tooltip 的共同面板；定位订阅只存在于可见期间。 */
export const FloatingPanel = _component(
  ({
    open,
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
    onClose,
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: FloatingPanelProps) => {
    const css = useCss();
    const panel = shallowRef<HTMLDivElement>();
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
      {
        flush: 'sync',
      },
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
          geometry.value = {
            ...geometry.value,
            visible: false,
          };
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
              shift({
                padding: 8,
              }),
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
      {
        flush: 'post',
        immediate: true,
      },
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
      event.preventDefault();
      const scope = anchor.closest('dialog[open]') ?? anchor.ownerDocument.body;
      const outside = tabbable(scope).filter((control) => !element.contains(control));
      const index = outside.indexOf(anchor);
      const next = event.shiftKey ? anchor : (outside[index + 1] ?? outside[0] ?? anchor);
      if (closeOnFocusOutside) close('outside');
      next.focus({
        preventScroll: true,
      });
    }
    return (
      <>
        {mounted.value && trigger.value && context.active.value && (
          <Teleport to={context.portal.value ?? trigger.value.ownerDocument.body}>
            <_div
              css={[
                css(() => [
                  {
                    position: 'fixed',
                    left: geometry.value.x,
                    top: geometry.value.y,
                    width: 'max-content',
                  },
                  {
                    width: geometry.value.width,
                    maxWidth: geometry.value.maxWidth || 'calc(100vw - 1em)',
                    maxHeight: geometry.value.maxHeight || 'calc(100dvh - 1em)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    visibility: geometry.value.visible ? 'visible' : 'hidden',
                    fontSize: appearance.value.fontSize,
                    fontFamily: appearance.value.fontFamily,
                    lineHeight: appearance.value.lineHeight,
                    boxSizing: 'border-box',
                    borderRadius: '_medium',
                    borderStyle: 'solid',
                    borderWidth: '_thin',
                    borderColor: '_border',
                    backgroundColor: surface === 'inverse' ? '_surfaceInverse' : '_surfaceRaised',
                    color: surface === 'inverse' ? '_textInverse' : '_textPrimary',
                    boxShadow: '_medium',
                    zIndex: surface === 'inverse' ? '_tooltip' : '_dropdown',
                  },
                ]),
                cssProp,
              ]}
              {...rest}
              ref={panel}
              tabindex={-1}
              onKeydown={keydown}
              dir={appearance.value.direction}
            >
              {scrollable ? (
                <Scrollbar
                  css={css({
                    flex: '1 1 auto',
                    minHeight: 0,
                  })}
                  tabindex={-1}
                  slotContent={{
                    css: css({
                      padding: '_medium',
                    }),
                  }}
                >
                  {children}
                </Scrollbar>
              ) : (
                <_div
                  css={css({
                    paddingBlock: '_small',
                    paddingInline: '_medium',
                  })}
                >
                  {children}
                </_div>
              )}
            </_div>
          </Teleport>
        )}
      </>
    );
  },
);
