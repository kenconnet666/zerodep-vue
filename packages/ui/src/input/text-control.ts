import { computed, shallowRef, watchPostEffect } from 'vue';
import type { Ref } from 'vue';
import type { Css } from '@zerodep-vue/core';
import type { UiTheme } from '../config/theme/types.ts';
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
  onValueChange?: (value: string) => void;
  /** 原生 change 或清空时提交；外部赋值和 reset 不提交。 */
  onValueCommit?: (value: string) => void;
  onValueReset?: (value: string) => void;
  onClear?: () => void;
}

export interface TextControlInstance<Element extends HTMLInputElement | HTMLTextAreaElement> {
  readonly element: Element | undefined;
  focus(options?: FocusOptions): void;
  select(): void;
}

/** Input/Textarea 共用模型与表单生命周期，组合输入仍由各原生节点的 Vue v-model 负责。 */
export function useTextControl<Element extends HTMLInputElement | HTMLTextAreaElement>(options: {
  value(): Ref<string>;
  resetValue(): string | undefined;
  disabled(): boolean;
  readOnly(): boolean;
  form(): string | undefined;
  change(value: string): void;
  commit(value: string): void;
  reset(value: string): void;
  clear(): void;
}) {
  const element = shallowRef<Element>();
  const initialValue = options.value().value;
  const blocked = () =>
    options.disabled() || options.readOnly() || !!element.value?.matches(':disabled');
  const model = computed({
    get: () => options.value().value,
    set: (next: string) => {
      const value = options.value();
      if (blocked() || value.value === next) return;
      value.value = next;
      options.change(next);
    },
  });
  const instance: TextControlInstance<Element> = {
    get element() {
      return element.value;
    },
    focus(focusOptions?: FocusOptions) {
      element.value?.focus(focusOptions);
    },
    select() {
      element.value?.select();
    },
  };
  watchPostEffect(() => {
    if (element.value) element.value.defaultValue = options.resetValue() ?? initialValue;
  });
  useFormReset(
    () => {
      // form 属性可以在同一 DOM 节点上改变，读取来源使监听随更新重新注册。
      options.form();
      return element.value?.form;
    },
    () => {
      const next = options.resetValue() ?? initialValue;
      options.value().value = next;
      if (element.value) element.value.value = next;
      options.reset(next);
    },
  );
  return {
    element,
    model,
    instance,
    commit(event: Event) {
      if (!event.defaultPrevented && !blocked()) options.commit(model.value);
    },
    clear() {
      if (blocked() || !model.value) return;
      model.value = '';
      options.commit('');
      options.clear();
      instance.focus({ preventScroll: true });
    },
  };
}

/** 文本节点的共同重置样式；几何和后续覆盖由具体 input/textarea 补充。 */
export function textControlStyle(s: Css<UiTheme>) {
  return s
    .font('inherit')
    .lineHeight('inherit')
    .color('inherit')
    .minWidth(0)
    .width('100%')
    .flex('1 1 auto')
    .padding(0)
    .border(0)
    .outline('none')
    .backgroundColor('transparent')
    .select('&::placeholder', s.color('_textPlaceholder'))
    .select('&:disabled', s.cursor('not-allowed'));
}
