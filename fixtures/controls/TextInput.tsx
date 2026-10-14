import type { Ref } from 'vue';
import { _component, cx } from '@zerodep-vue/core';
import type { CssInput } from '@zerodep-vue/core';
import { useCss } from './theme.ts';

export interface TextInputProps {
  model: Ref<string>;
  label: string;
  name?: string;
  disabled?: boolean;
  class?: CssInput;
}

export const TextInput = _component(
  ({ model, label, name, disabled = false, class: external }: TextInputProps) => {
    const s = useCss();
    return (
      <input
        aria-label={label}
        name={name}
        disabled={disabled}
        v-model={model.value}
        class={cx(s.padding(8).border('1px solid').borderColor('_brand'), external)}
      />
    );
  },
);
