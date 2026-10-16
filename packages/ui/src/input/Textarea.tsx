import type { CssValue, Props, Slot } from '@zerodep-vue/core';
import { _component, _textarea } from '@zerodep-vue/core';
import type { Ref } from 'vue';
import { computed, ref, shallowRef } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { TextControlAppearance } from './TextControlFrame.tsx';
import { TextControlFrame } from './TextControlFrame.tsx';
import type { TextValueProps } from './text-control.ts';
import { textControlStyle, useTextControl } from './text-control.ts';
export type TextareaProps = Props<
  typeof _textarea,
  TextValueProps &
    TextControlAppearance & {
      /** 初始可见行数，默认 3，必须为正整数。 */
      rows?: number;
      /** 原生 textarea 引用，直接调用浏览器 focus/select 等方法。 */
      inputRef?: Ref<HTMLTextAreaElement | null | undefined>;
      resize?: CssValue<'resize', UiTheme>;
      minHeight?: CssValue<'minHeight', UiTheme>;
      maxHeight?: CssValue<'maxHeight', UiTheme>;
      slotTextarea?: Slot<
        typeof _textarea,
        'form' | 'rows' | 'data-zv-text-value' | 'disabled' | 'readonly' | 'aria-invalid' | 'value'
      >;
      innerHTML?: never;
      textContent?: never;
    }
>;

/** 原生多行输入；与 Input 共享清空、表单重置和外观，保留换行与浏览器缩放手柄。 */
export const Textarea = _component(
  ({
    value = ref(''),
    inputRef = shallowRef<HTMLTextAreaElement | null | undefined>(),
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
    css: cssProp,
    style,
    'aria-invalid': ariaInvalid,
    children: _children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: TextareaProps) => {
    const css = useCss();
    const lineCount = computed(() => {
      if (!Number.isInteger(rows) || rows < 1) throw new RangeError('Textarea rows 必须为正整数。');
      return rows;
    });
    const control = useTextControl<HTMLTextAreaElement>({
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
        class={className}
        css={cssProp}
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
        hasValue={!!value.value}
        disabled={disabled}
        readOnly={readOnly}
        onClear={control.clear}
        multiline
      >
        <_textarea
          css={css(() => [
            textControlStyle(css),
            {
              resize: resize,
              minHeight: minHeight,
              maxHeight: maxHeight,
            },
          ])}
          {...slotTextarea}
          {...rest}
          ref={inputRef}
          form={form}
          rows={lineCount.value}
          data-zv-text-value=""
          disabled={disabled}
          readonly={readOnly}
          aria-invalid={status === 'error' || ariaInvalid}
          v-model={control.model.value}
          onChange={control.commit}
        />
      </TextControlFrame>
    );
  },
);
