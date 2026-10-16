import type { CssFactory } from '@zerodep-vue/core';
import type { Ref } from 'vue';
import { computed, watchPostEffect } from 'vue';
import type { UiTheme } from '../config/theme/types.ts';
import type { Callback } from '../interaction/callbacks.ts';
import { useFormReset } from './form-reset.ts';
export interface TextValueProps {
  /** 文本内容由 value 管理，不接受子树替换入口。 */
  children?: never;
  innerHTML?: never;
  textContent?: never;
  /** 可写字符串；省略时每个实例独立持有空字符串。 */
  value?: Ref<string>;
  /** 原生表单重置的值；省略时使用首次 setup 时的值。 */
  resetValue?: string;
  disabled?: boolean;
  readonly?: boolean;
  /** 仅用户输入和清空通知，输入法组合期间保留 DOM 草稿。 */
  onValueChange?: Callback<[value: string]>;
  /** 原生 change 或清空时提交；外部赋值和 reset 不提交。 */
  onValueCommit?: Callback<[value: string]>;
  onValueReset?: Callback<[value: string]>;
  onClear?: Callback<[]>;
}

/** Input/Textarea 共用模型与表单生命周期，组合输入仍由各原生节点的 Vue v-model 负责。 */
export function useTextControl<Element extends HTMLInputElement | HTMLTextAreaElement>(options: {
  element(): Element | null | undefined;
  value(): Ref<string>;
  resetValue(): string | undefined;
  disabled(): boolean;
  readOnly(): boolean;
  change(value: string): void;
  commit(value: string): void;
  reset(value: string): void;
  clear(): void;
}) {
  const initialValue = options.value().value;
  const blocked = () =>
    options.disabled() || options.readOnly() || !!options.element()?.matches(':disabled');
  const model = computed({
    get: () => options.value().value,
    set: (next: string) => {
      const value = options.value();
      if (blocked() || value.value === next) return;
      value.value = next;
      options.change(next);
    },
  });
  watchPostEffect(() => {
    const element = options.element();
    if (element) element.defaultValue = options.resetValue() ?? initialValue;
  });
  useFormReset(options.element, () => {
    const next = options.resetValue() ?? initialValue;
    options.value().value = next;
    const element = options.element();
    if (element) element.value = next;
    options.reset(next);
  });
  return {
    model,
    commit(event: Event) {
      if (!event.defaultPrevented && !blocked()) options.commit(model.value);
    },
    clear() {
      const element = options.element();
      if (blocked() || (!model.value && !element?.value)) return;
      // Vue 在输入法组合期间保留 DOM 草稿；显式清空防止组合结束后旧草稿重新写回。
      if (element) element.value = '';
      model.value = '';
      options.commit('');
      options.clear();
      element?.focus({
        preventScroll: true,
      });
    },
  };
}

/** 文本节点的共同重置样式；几何和后续覆盖由具体 input/textarea 补充。 */
export function textControlStyle(css: CssFactory<UiTheme>) {
  return css({
    font: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
    minWidth: 0,
    width: '100%',
    flex: '1 1 auto',
    padding: 0,
    border: 0,
    outline: 'none',
    backgroundColor: 'transparent',
    '&::placeholder': {
      color: '_textPlaceholder',
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
  });
}
