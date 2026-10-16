import { _component, cx } from '@zerodep-vue/core';
import { ref, shallowRef } from 'vue';
import type { InputHTMLAttributes, Ref } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { callCallbacks } from '../interaction/callbacks.ts';
import { slotRest } from '../config/props.ts';
import type { DataAttributes, ElementSlotProps } from '../config/props.ts';
import { TextControlFrame } from './TextControlFrame.tsx';
import type { TextControlAppearance } from './TextControlFrame.tsx';
import { textControlStyle, useTextControl } from './text-control.ts';
import type { TextValueProps } from './text-control.ts';

export interface InputProps
  extends
    TextValueProps,
    TextControlAppearance,
    DataAttributes,
    /* @vue-ignore */ Omit<
      InputHTMLAttributes,
      keyof TextControlAppearance | keyof TextValueProps | 'type'
    > {
  /** 只接收文本类输入；数字和日期的业务值由专门组件管理。 */
  type?: 'text' | 'search' | 'password' | 'email' | 'url' | 'tel';
  /** 原生 input 引用；挂载、卸载和来源替换遵循 Vue DOM ref 语义。 */
  inputRef?: Ref<HTMLInputElement | null | undefined>;
  slotInput?: Omit<ElementSlotProps, 'id' | 'role' | 'tabindex'>;
}

/** 原生 input 组合共用外观和模型工具；保留 Vue v-model 的组合输入及普通属性语义。 */
export const Input = _component(
  ({
    value = ref(''),
    inputRef = shallowRef<HTMLInputElement | null | undefined>(),
    resetValue,
    type = 'text',
    size,
    width,
    density,
    variant,
    status,
    color,
    backgroundColor,
    borderColor,
    clearable,
    prefix,
    suffix,
    slotInput,
    slotPrefix,
    slotSuffix,
    slotClear,
    onValueChange,
    onValueCommit,
    onValueReset,
    onClear,
    disabled = false,
    readonly: readOnly = false,
    form,
    class: className,
    style,
    'aria-invalid': ariaInvalid,
    children: _children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: InputProps) => {
    const s = useCss();
    const control = useTextControl<HTMLInputElement>({
      element: () => inputRef.value,
      value: () => value,
      resetValue: () => resetValue,
      disabled: () => disabled,
      readOnly: () => readOnly,
      change: (next) => callCallbacks(onValueChange, next),
      commit: (next) => callCallbacks(onValueCommit, next),
      reset: (next) => callCallbacks(onValueReset, next),
      clear: () => callCallbacks(onClear),
    });
    return (
      <TextControlFrame
        {...{
          size,
          width,
          density,
          variant,
          status,
          color,
          backgroundColor,
          borderColor,
          clearable,
          prefix,
          suffix,
          slotPrefix,
          slotSuffix,
          slotClear,
          style,
        }}
        class={className}
        hasValue={!!value.value}
        disabled={disabled}
        readOnly={readOnly}
        onClear={control.clear}
      >
        <input
          {...slotRest(slotInput)}
          {...rest}
          ref={inputRef}
          type={type}
          form={form}
          data-zv-text-value=""
          disabled={disabled}
          readonly={readOnly}
          aria-invalid={status === 'error' || ariaInvalid}
          v-model={control.model.value}
          class={cx(textControlStyle(s), slotInput?.class)}
          onChange={control.commit}
        />
      </TextControlFrame>
    );
  },
);
