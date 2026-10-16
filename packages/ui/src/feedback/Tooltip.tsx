import { _component, cx } from '@zerodep-vue/core';
import { onScopeDispose, ref, shallowRef, useId, watch } from 'vue';
import type { VNodeChild } from 'vue';
import type { Placement } from '@floating-ui/dom';
import { useCss } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementSlotProps } from '../config/props.ts';
import { FloatingPanel } from '../interaction/FloatingPanel.tsx';
import { referenceElement } from '../interaction/portal.ts';
import type { FloatingTriggerProps } from './Popover.tsx';

export interface TooltipProps {
  trigger: (props: FloatingTriggerProps) => VNodeChild;
  /** 简短的说明；可交互内容使用 Popover。 */
  content: VNodeChild;
  placement?: Placement;
  disabled?: boolean;
  openDelay?: number;
  closeDelay?: number;
  slotPanel?: Omit<ElementSlotProps, 'id' | 'role' | 'tabindex'>;
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
    const s = useCss();
    const open = ref(false);
    const element = shallowRef<HTMLElement>();
    const setReference: FloatingTriggerProps['ref'] = (value) => {
      element.value = referenceElement(value);
    };
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
      () => disabled,
      (value) => {
        if (value) {
          clearTimeout(timer);
          open.value = false;
        }
      },
    );
    onScopeDispose(() => clearTimeout(timer));
    return (
      <>
        {trigger({
          ref: setReference,
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
            {...slotRest(slotPanel)}
            id={id}
            role="tooltip"
            open={open}
            reference={element.value}
            placement={placement}
            surface="inverse"
            scrollable={false}
            restoreFocus={false}
            closeOnFocusOutside={false}
            class={cx(s.maxWidth('24em'), slotPanel?.class)}
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
