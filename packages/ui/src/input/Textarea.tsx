import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { computed, ref, shallowRef } from 'vue';
import type { Ref, TextareaHTMLAttributes } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { callCallbacks } from '../interaction/callbacks.ts';
import { slotRest } from '../config/props.ts';
import type { DataAttributes, ElementSlotProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { ControlFrame } from './ControlFrame.tsx';
import type { ControlAppearance } from './ControlFrame.tsx';
import { textControlStyle, useTextControl } from './text-control.ts';
import type { TextValueProps } from './text-control.ts';

export interface TextareaProps
  extends
    TextValueProps,
    ControlAppearance,
    DataAttributes,
    /* @vue-ignore */ Omit<
      TextareaHTMLAttributes,
      keyof ControlAppearance | keyof TextValueProps | 'rows'
    > {
  /** 初始可见行数，默认 3，必须为正整数。 */
  rows?: number;
  /** 原生 textarea 引用，直接调用浏览器 focus/select 等方法。 */
  inputRef?: Ref<HTMLTextAreaElement | null | undefined>;
  resize?: CssValue<'resize', UiTheme>;
  minHeight?: CssValue<'minHeight', UiTheme>;
  maxHeight?: CssValue<'maxHeight', UiTheme>;
  slotTextarea?: Omit<ElementSlotProps, 'id' | 'role' | 'tabindex'>;
}

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
    onFocusout,
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
  }: TextareaProps) => {
    const s = useCss();
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
      <ControlFrame
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
        onFocusout={onFocusout}
        multiline
      >
        <textarea
          {...slotRest(slotTextarea)}
          {...rest}
          ref={inputRef}
          form={form}
          rows={lineCount.value}
          data-zv-control-value=""
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
      </ControlFrame>
    );
  },
);
