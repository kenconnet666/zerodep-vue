import type { Ref } from 'vue';
import { _component } from '@zerodep-vue/core';
import { Button } from './Button.tsx';
import type { ButtonProps } from './Button.tsx';

export interface ToggleButtonProps extends Omit<ButtonProps, 'aria-pressed'> {
  pressed: Ref<boolean>;
}

/** 验证包装组件的 Ref 写回、class/attrs 和回调转发，不重复实现按钮外观。 */
export const ToggleButton = _component(
  ({ pressed, onClick, children, ...rest }: ToggleButtonProps) => (
    <Button
      {...rest}
      aria-pressed={pressed.value}
      onClick={(event) => {
        pressed.value = !pressed.value;
        onClick?.(event);
      }}
    >
      {children}
    </Button>
  ),
);
