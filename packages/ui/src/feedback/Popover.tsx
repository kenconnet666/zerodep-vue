import { _component } from '@zerodep-vue/core';
import { ref, shallowRef, useId, watch } from 'vue';
import type { ComponentPublicInstance, Ref, VNodeChild } from 'vue';
import type { Placement } from '@floating-ui/dom';
import type { ElementSlotProps } from '../config/props.ts';
import { slotRest } from '../config/props.ts';
import { FloatingPanel } from '../interaction/FloatingPanel.tsx';
import { referenceElement } from '../interaction/portal.ts';
import type { OverlayCloseReason } from '../interaction/layer.ts';

export interface FloatingTriggerProps {
  ref: (value: Element | ComponentPublicInstance | null) => void;
  'aria-expanded'?: boolean;
  'aria-controls'?: string | undefined;
  'aria-haspopup'?: 'dialog';
  'aria-describedby'?: string | undefined;
  onClick?: (event: MouseEvent) => void;
  onPointerenter?: (event: PointerEvent) => void;
  onPointerleave?: (event: PointerEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}
export interface PopoverProps {
  /** 明确将绑定展开到一个可聚焦触发节点上，兼容原生元素与 Button。 */
  trigger: (props: FloatingTriggerProps) => VNodeChild;
  open?: Ref<boolean>;
  disabled?: boolean;
  placement?: Placement;
  offset?: number;
  matchWidth?: boolean;
  /** 非模态对话面板的可访问名称。也可用 slotPanel.aria-labelledby。 */
  label?: string;
  /** 默认聚焦第一个控件；纯展示内容可选 none。 */
  focus?: 'first' | 'panel' | 'none';
  closeOnEscape?: boolean;
  closeOnOutside?: boolean;
  /** 焦点离开触发器与面板时关闭，默认 true。 */
  closeOnFocusOutside?: boolean;
  slotPanel?: Omit<ElementSlotProps, 'id' | 'role' | 'tabindex'>;
  children?: VNodeChild;
  onOpenChange?: (open: boolean, reason: OverlayCloseReason) => void;
}

/** 非模态浮层；触发器和内容不包裹额外的交互元素。 */
export const Popover = _component(
  ({
    trigger,
    open = ref(false),
    disabled = false,
    placement = 'bottom-start',
    offset = 8,
    matchWidth = false,
    label,
    focus = 'first',
    closeOnEscape = true,
    closeOnOutside = true,
    closeOnFocusOutside = true,
    slotPanel,
    children,
    onOpenChange,
  }: PopoverProps) => {
    const element = shallowRef<HTMLElement>();
    const setReference: FloatingTriggerProps['ref'] = (value) => {
      element.value = referenceElement(value);
    };
    const id = `zv-popover-${useId()}`;
    watch(
      () => disabled,
      (value) => {
        if (value) open.value = false;
      },
    );
    return (
      <>
        {trigger({
          ref: setReference,
          'aria-haspopup': 'dialog',
          'aria-expanded': open.value && !disabled,
          'aria-controls': open.value && !disabled ? id : undefined,
          onClick: (event) => {
            if (!event.defaultPrevented && !disabled) {
              open.value = !open.value;
              onOpenChange?.(open.value, 'trigger');
            }
          },
        })}
        {!disabled && (
          <FloatingPanel
            {...slotRest(slotPanel)}
            id={id}
            role="dialog"
            aria-label={slotPanel?.['aria-label'] ?? label}
            open={open}
            reference={element.value}
            placement={placement}
            offset={offset}
            matchWidth={matchWidth}
            focus={focus}
            closeOnEscape={closeOnEscape}
            closeOnOutside={closeOnOutside}
            closeOnFocusOutside={closeOnFocusOutside}
            class={slotPanel?.class}
            onClose={(reason) => onOpenChange?.(false, reason)}
          >
            {children}
          </FloatingPanel>
        )}
      </>
    );
  },
);
