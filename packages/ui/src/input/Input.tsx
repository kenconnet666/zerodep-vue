import { _component, cx } from '@zerodep-vue/core';
import { ref } from 'vue';
import type { InputHTMLAttributes } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { DataAttributes, ElementSlotProps } from '../config/props.ts';
import { TextControlFrame } from './TextControlFrame.tsx';
import type { TextControlAppearance } from './TextControlFrame.tsx';
import { textControlStyle, useTextControl } from './text-control.ts';
import type { TextControlInstance, TextValueProps } from './text-control.ts';

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
  slotInput?: Omit<ElementSlotProps, 'id' | 'role' | 'tabindex'>;
}
export type InputInstance = TextControlInstance<HTMLInputElement>;

/** 原生 input 组合共用外观和模型工具；保留 Vue v-model 的组合输入及普通属性语义。 */
export const Input = _component(
  (
    {
      value = ref(''),
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
    }: InputProps,
    { expose },
  ) => {
    const s = useCss();
    const control = useTextControl<HTMLInputElement>({
      value: () => value,
      resetValue: () => resetValue,
      disabled: () => disabled,
      readOnly: () => readOnly,
      form: () => form,
      change: (next) => onValueChange?.(next),
      commit: (next) => onValueCommit?.(next),
      reset: (next) => onValueReset?.(next),
      clear: () => onClear?.(),
    });
    expose(control.instance);
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
          ref={control.element}
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
