import type { Placement } from '@floating-ui/dom';
import type { Slot } from '@zerodep-vue/core';
import { _component } from '@zerodep-vue/core';
import type { Ref, VNodeChild } from 'vue';
import { ref, shallowRef, useId, watch } from 'vue';
import { FloatingPanel } from '../interaction/FloatingPanel.tsx';
import type { Callback } from '../interaction/callbacks.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { OverlayCloseReason } from '../interaction/layer.ts';
export interface FloatingTriggerProps {
  elementRef: Ref<HTMLElement | null | undefined>;
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
  /** Button/Link 可直接展开；原生节点需将 elementRef 映射到 ref，其余绑定展开。 */
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
    | 'tabindex'
    | 'surface'
    | 'scrollable'
    | 'restoreFocus'
  >;
  children?: VNodeChild;
  onOpenChange?: Callback<[open: boolean, reason: OverlayCloseReason]>;
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
    const element = shallowRef<HTMLElement | null | undefined>();
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
          elementRef: element,
          'aria-haspopup': 'dialog',
          'aria-expanded': open.value && !disabled,
          'aria-controls': open.value && !disabled ? id : undefined,
          onClick: (event) => {
            if (!event.defaultPrevented && !disabled) {
              open.value = !open.value;
              callCallbacks(onOpenChange, open.value, 'trigger');
            }
          },
        })}
        {!disabled && (
          <FloatingPanel
            {...slotPanel}
            id={id}
            role="dialog"
            aria-label={slotPanel?.['aria-label'] ?? label}
            open={open}
            reference={element.value ?? undefined}
            placement={placement}
            offset={offset}
            matchWidth={matchWidth}
            focus={focus}
            closeOnEscape={closeOnEscape}
            closeOnOutside={closeOnOutside}
            closeOnFocusOutside={closeOnFocusOutside}
            onClose={(reason) => callCallbacks(onOpenChange, false, reason)}
          >
            {children}
          </FloatingPanel>
        )}
      </>
    );
  },
);
