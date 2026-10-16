import type { Placement } from '@floating-ui/dom';
import type { Slot } from '@zerodep-vue/core';
import { _component } from '@zerodep-vue/core';
import type { VNodeChild } from 'vue';
import { onScopeDispose, ref, shallowRef, useId, watch } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { FloatingPanel } from '../interaction/FloatingPanel.tsx';
import type { FloatingTriggerProps } from './Popover.tsx';
export interface TooltipProps {
  trigger: (props: FloatingTriggerProps) => VNodeChild;
  /** 简短的说明；可交互内容使用 Popover。 */
  content: VNodeChild;
  placement?: Placement;
  disabled?: boolean;
  openDelay?: number;
  closeDelay?: number;
  slotPanel?: Slot<
    typeof FloatingPanel,
    | 'id'
    | 'role'
    | 'open'
    | 'reference'
    | 'placement'
    | 'offset'
    | 'matchWidth'
    | 'focus'
    | 'closeOnEscape'
    | 'closeOnOutside'
    | 'closeOnFocusOutside'
    | 'onClose'
    | 'surface'
    | 'scrollable'
    | 'restoreFocus'
    | 'tabindex'
  >;
}

/** 指针悬停或键盘聚焦显示，焦点始终留在触发器。 */
export const Tooltip = _component(
  ({
    trigger,
    content,
    placement = 'top',
    disabled = false,
    openDelay = 300,
    closeDelay = 100,
    slotPanel,
  }: TooltipProps) => {
    const css = useCss();
    const open = ref(false);
    const element = shallowRef<HTMLElement | null | undefined>();
    const id = `zv-tooltip-${useId()}`;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let focused = false;
    let triggerHovered = false;
    let panelHovered = false;
    const schedule = (show: boolean, delay: number) => {
      clearTimeout(timer);
      if (!show && (focused || triggerHovered || panelHovered)) return;
      timer = setTimeout(
        () => {
          open.value = show && !disabled;
        },
        Math.max(0, delay),
      );
    };
    watch(
      element,
      (value, previous) => {
        if (value === previous) return;
        // 被替换的 DOM 不保证触发 blur/pointerleave；交互状态只属于当前触发器。
        clearTimeout(timer);
        triggerHovered = false;
        panelHovered = false;
        focused = value != null && value.ownerDocument.activeElement === value;
        open.value = focused && !disabled;
      },
      // 首次 ref 注册也必须即时完成，不能在随后 pointerenter 后才清掉它的计时器。
      {
        flush: 'sync',
      },
    );
    watch(
      () => disabled,
      (value) => {
        if (value) {
          clearTimeout(timer);
          // 禁用会直接移除面板，不会收到 pointerleave；旧面板不能继续持有悬停状态。
          panelHovered = false;
          open.value = false;
        }
      },
    );
    onScopeDispose(() => clearTimeout(timer));
    return (
      <>
        {trigger({
          elementRef: element,
          'aria-describedby': open.value && !disabled ? id : undefined,
          onPointerenter: (event) => {
            if (event.pointerType !== 'touch') {
              triggerHovered = true;
              schedule(true, openDelay);
            }
          },
          onPointerleave: () => {
            triggerHovered = false;
            schedule(false, closeDelay);
          },
          onFocus: () => {
            focused = true;
            clearTimeout(timer);
            if (!disabled) open.value = true;
          },
          onBlur: () => {
            focused = false;
            schedule(false, closeDelay);
          },
        })}
        {!disabled && (
          <FloatingPanel
            css={css({
              maxWidth: '24em',
            })}
            {...slotPanel}
            id={id}
            role="tooltip"
            open={open}
            reference={element.value ?? undefined}
            placement={placement}
            surface="inverse"
            scrollable={false}
            restoreFocus={false}
            closeOnFocusOutside={false}
            onPointerenter={() => {
              panelHovered = true;
              clearTimeout(timer);
            }}
            onPointerleave={() => {
              panelHovered = false;
              schedule(false, closeDelay);
            }}
            onClose={() => {
              clearTimeout(timer);
              panelHovered = false;
            }}
          >
            {content}
          </FloatingPanel>
        )}
      </>
    );
  },
);
