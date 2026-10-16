import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { computed, ref } from 'vue';
import type { TextareaHTMLAttributes } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { DataAttributes, ElementSlotProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { TextControlFrame } from './TextControlFrame.tsx';
import type { TextControlAppearance } from './TextControlFrame.tsx';
import { textControlStyle, useTextControl } from './text-control.ts';
import type { TextControlInstance, TextValueProps } from './text-control.ts';

export interface TextareaProps
  extends
    TextValueProps,
    TextControlAppearance,
    DataAttributes,
    /* @vue-ignore */ Omit<
      TextareaHTMLAttributes,
      keyof TextControlAppearance | keyof TextValueProps | 'rows'
    > {
  /** 初始可见行数，默认 3，必须为正整数。 */
  rows?: number;
  resize?: CssValue<'resize', UiTheme>;
  minHeight?: CssValue<'minHeight', UiTheme>;
  maxHeight?: CssValue<'maxHeight', UiTheme>;
  slotTextarea?: Omit<ElementSlotProps, 'id' | 'role' | 'tabindex'>;
}
export type TextareaInstance = TextControlInstance<HTMLTextAreaElement>;

/** 原生多行输入；与 Input 共享清空、表单重置和外观，保留换行与浏览器缩放手柄。 */
export const Textarea = _component(
  (
    {
      value = ref(''),
      resetValue,
      rows = 3,
      resize = 'vertical',
      minHeight,
      maxHeight,
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
      slotTextarea,
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
    }: TextareaProps,
    { expose },
  ) => {
    const s = useCss();
    const lineCount = computed(() => {
      if (!Number.isInteger(rows) || rows < 1) throw new RangeError('Textarea rows 必须为正整数。');
      return rows;
    });
    const control = useTextControl<HTMLTextAreaElement>({
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
        multiline
      >
        <textarea
          {...slotRest(slotTextarea)}
          {...rest}
          ref={control.element}
          form={form}
          rows={lineCount.value}
          data-zv-text-value=""
          disabled={disabled}
          readonly={readOnly}
          aria-invalid={status === 'error' || ariaInvalid}
          v-model={control.model.value}
          class={cx(
            textControlStyle(s)
              .resize(bx(resize))
              .minHeight(bx(minHeight))
              .maxHeight(bx(maxHeight)),
            slotTextarea?.class,
          )}
          onChange={control.commit}
        />
      </TextControlFrame>
    );
  },
);
