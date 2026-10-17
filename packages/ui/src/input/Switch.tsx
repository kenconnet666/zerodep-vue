import { _component, bx, cx } from '@zerodep-vue/core';
import { ref, shallowRef } from 'vue';
import type { InputHTMLAttributes } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { DataAttributes, ElementSlotProps } from '../config/props.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import { ChoiceControlFrame } from './ChoiceControlFrame.tsx';
import type { ChoiceControlAppearance } from './ChoiceControlFrame.tsx';
import { choiceInputStyle, useChoiceControl } from './choice-control.ts';
import type { ChoiceValueProps } from './choice-control.ts';

export interface SwitchProps
  extends
    ChoiceValueProps,
    ChoiceControlAppearance,
    DataAttributes,
    /* @vue-ignore */ Omit<
      InputHTMLAttributes,
      | keyof ChoiceValueProps
      | keyof ChoiceControlAppearance
      | 'type'
      | 'checked'
      | 'role'
      | 'aria-checked'
      | 'aria-readonly'
    > {
  slotInput?: Omit<ElementSlotProps, 'id' | 'role' | 'aria-checked' | 'aria-readonly'>;
  /** 轨道属性；内容由内部滑块管理。 */
  slotIndicator?: Omit<ElementSlotProps, 'aria-hidden'>;
  slotThumb?: Omit<ElementSlotProps, 'aria-hidden'>;
}
/** 原生 checkbox 提供开关的键盘和表单行为，role=switch 表达开/关语义。 */
export const Switch = _component(
  ({
    value = ref(false),
    resetValue,
    formValue = 'on',
    inputRef = shallowRef<HTMLInputElement | null | undefined>(),
    disabled = false,
    readonly: readOnly = false,
    size,
    color,
    accentColor,
    status,
    slotInput,
    slotIndicator,
    slotThumb,
    slotLabel,
    onValueChange,
    onValueCommit,
    onValueReset,
    class: className,
    style,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    'aria-invalid': ariaInvalid,
    ...rest
  }: SwitchProps) => {
    const s = useCss();
    const control = useChoiceControl({
      value: () => value,
      resetValue: () => resetValue,
      disabled: () => disabled,
      readOnly: () => readOnly,
      element: () => inputRef.value,
      change: (next) => callCallbacks(onValueChange, next),
      commit: (next) => callCallbacks(onValueCommit, next),
      reset: (next) => callCallbacks(onValueReset, next),
    });
    return (
      <ChoiceControlFrame
        {...{ size, color, readOnly, style, slotLabel }}
        class={className}
        input={
          <input
            onClick={control.guard}
            {...slotRest(slotInput)}
            {...rest}
            ref={inputRef}
            type="checkbox"
            role="switch"
            value={formValue}
            checked={value.value}
            disabled={disabled}
            aria-checked={value.value}
            aria-readonly={readOnly || undefined}
            aria-invalid={status === 'error' || ariaInvalid}
            class={cx(choiceInputStyle(s).width('2.25em').height('1.25em'), slotInput?.class)}
            onChange={control.change}
          />
        }
        indicator={
          <span
            {...slotRest(slotIndicator)}
            aria-hidden={true}
            data-zv-choice-indicator=""
            class={cx(
              s
                .position('relative')
                .display('inline-block')
                .boxSizing('border-box')
                .flexShrink(0)
                .width('2.25em')
                .height('1.25em')
                .borderStyle('solid')
                .borderWidth('0.0625em')
                .borderRadius('_pill')
                .backgroundColor(
                  bx(
                    value.value
                      ? accentColor === undefined
                        ? '_primary'
                        : accentColor
                      : '_surfaceMuted',
                  ),
                )
                .borderColor(
                  bx(
                    value.value
                      ? accentColor === undefined
                        ? '_primary'
                        : accentColor
                      : '_borderStrong',
                  ),
                )
                .transitionProperty('background-color, border-color')
                .transitionDuration('_fast')
                .select(
                  '&:where([data-zv-choice]:has(> input:enabled):hover > *)',
                  s.borderColor(bx(accentColor === undefined ? '_primaryHover' : accentColor)),
                )
                .select('@media (prefers-reduced-motion: reduce)', s.transitionDuration('0ms'))
                .select(
                  '@media (forced-colors: active)',
                  s
                    .backgroundColor(bx(value.value ? 'Highlight' : 'Canvas'))
                    .borderColor('ButtonText'),
                ),
              status === 'error' && s.borderColor('_danger'),
              status === 'warning' && s.borderColor('_warning'),
              status === 'success' && s.borderColor('_success'),
              slotIndicator?.class,
            )}
          >
            <span
              {...slotRest(slotThumb)}
              aria-hidden={true}
              class={cx(
                s
                  .position('absolute')
                  .insetBlockStart('0.125em')
                  .insetInlineStart(bx(value.value ? '1.125em' : '0.125em'))
                  .width('0.875em')
                  .height('0.875em')
                  .borderRadius('_circle')
                  .backgroundColor(bx(value.value ? '_textOnPrimary' : '_textTertiary'))
                  .transitionProperty('inset-inline-start, background-color')
                  .transitionDuration('_fast')
                  .select('@media (prefers-reduced-motion: reduce)', s.transitionDuration('0ms'))
                  .select(
                    '@media (forced-colors: active)',
                    s.backgroundColor(bx(value.value ? 'HighlightText' : 'ButtonText')),
                  ),
                slotThumb?.class,
              )}
            />
          </span>
        }
      >
        {children}
      </ChoiceControlFrame>
    );
  },
);
