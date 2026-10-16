import type { CssFactory } from '@zerodep-vue/core';
import type { Ref } from 'vue';
import { watchPostEffect } from 'vue';
import type { UiTheme } from '../config/theme/types.ts';
import type { Callback } from '../interaction/callbacks.ts';
import { useFormReset } from './form-reset.ts';
export interface ChoiceValueProps {
  /** 可写布尔值；省略时每个实例独立保存 false。 */
  value?: Ref<boolean>;
  /** 原生表单重置的值；省略时使用首次 setup 时的值。 */
  resetValue?: boolean;
  /** 原生表单提交的字符串，默认 on；未选中或禁用时遵循浏览器的不提交规则。 */
  formValue?: string;
  /** 原生 input 的引用，通过普通 Props 提供；Vue 在卸载或替换引用时写入 null。 */
  inputRef?: Ref<HTMLInputElement | null | undefined>;
  disabled?: boolean;
  /** 保留键盘焦点和表单提交，仅禁止用户切换；不同于 disabled。 */
  readonly?: boolean;
  /** 用户切换改变值后通知；外部赋值和 reset 不触发。 */
  onValueChange?: Callback<[value: boolean]>;
  /** 同一次有效用户切换提交一次；外部赋值和 reset 不提交。 */
  onValueCommit?: Callback<[value: boolean]>;
  onValueReset?: Callback<[value: boolean]>;
}

/** 两种布尔控件共用原生 checked 生命周期；标记外观仍由具体组件负责。 */
export function useChoiceControl(options: {
  value(): Ref<boolean>;
  resetValue(): boolean | undefined;
  disabled(): boolean;
  readOnly(): boolean;
  element(): HTMLInputElement | null | undefined;
  indeterminate?(): boolean;
  change(value: boolean): void;
  commit(value: boolean): void;
  reset(value: boolean): void;
}) {
  const initialValue = options.value().value;
  const blocked = () =>
    options.disabled() || options.readOnly() || !!options.element()?.matches(':disabled');
  watchPostEffect(() => {
    const input = options.element();
    if (!input) return;
    input.defaultChecked = options.resetValue() ?? initialValue;
    input.checked = options.value().value;
    input.indeterminate = options.indeterminate?.() ?? false;
  });
  useFormReset(
    () => options.element() ?? undefined,
    () => {
      const next = options.resetValue() ?? initialValue;
      options.value().value = next;
      const input = options.element();
      if (input) {
        input.checked = next;
        input.indeterminate = options.indeterminate?.() ?? false;
      }
      options.reset(next);
    },
  );
  return {
    guard(event: MouseEvent) {
      // checkbox 没有原生只读行为；取消 click 默认动作也覆盖键盘空格激活。
      if (blocked()) event.preventDefault();
    },
    change(event: Event) {
      const input = options.element();
      if (!input) return;
      if (!event.defaultPrevented && !blocked()) {
        const next = input.checked;
        const value = options.value();
        if (value.value !== next) {
          value.value = next;
          options.change(next);
          options.commit(next);
        }
      }
      // 原生激活会清掉 indeterminate；受控的混合态继续由调用者决定。
      input.checked = options.value().value;
      input.indeterminate = options.indeterminate?.() ?? false;
    },
  };
}

/** 透明原生 input 覆盖标记区域，保留浏览器焦点、键盘、标签与表单语义。 */
export function choiceInputStyle(css: CssFactory<UiTheme>) {
  return css({
    position: 'absolute',
    insetInlineStart: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 0,
    opacity: 0,
    cursor: 'inherit',
  });
}
