import { ref } from 'vue';
import type { InputHTMLAttributes, Ref, StyleValue } from 'vue';
import { _component, cx } from '@zerodep-vue/core';
import type { CssInput } from '@zerodep-vue/core';
import { useCss } from './theme.ts';

/** fixture 的显式句柄；组件 ref 不等同于内部 input 元素。 */
export interface TextInputHandle {
  /** 将焦点移入当前挂载的输入元素。 */
  focus(options?: FocusOptions): void;
}

export interface TextInputProps extends /* @vue-ignore */ Omit<
  InputHTMLAttributes,
  'class' | 'style' | 'value' | 'type' | 'disabled' | 'onChange'
> {
  /** 当前编辑来源；外部替换 Ref 后继续写入新的来源。 */
  model: Ref<string>;
  /** 输入元素的可访问名称。 */
  label: string;
  disabled?: boolean;
  class?: CssInput;
  style?: StyleValue;
  /** 仅响应原生 change；父级重置或替换模型不产生用户操作通知。 */
  onCommit?: (value: string) => void;
}

/** 私有输入夹具，用于验证模型、原生 attrs、IME 和公开方法，不作为产品组件发布。 */
export const TextInput = _component(
  (
    { model, label, disabled = false, class: external, style, onCommit, ...rest }: TextInputProps,
    { expose },
  ) => {
    const s = useCss();
    const input = ref<HTMLInputElement | null>(null);
    expose({
      focus: (options?: FocusOptions) => input.value?.focus(options),
    } satisfies TextInputHandle);
    return (
      <input
        {...rest}
        ref={input}
        type="text"
        aria-label={label}
        disabled={disabled}
        v-model={model.value}
        onChange={() => onCommit?.(model.value)}
        class={cx(s.padding(8).border('1px solid').borderColor('_brand'), external)}
        style={style}
      />
    );
  },
);
