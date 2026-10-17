import { _component, bx, cx } from '@zerodep-vue/core';
import { Check, Minus } from '@lucide/icons';
import { ref, shallowRef } from 'vue';
import type { InputHTMLAttributes } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { DataAttributes, ElementSlotProps } from '../config/props.ts';
import { Icon } from '../display/Icon.tsx';
import { callCallbacks } from '../interaction/callbacks.ts';
import { ChoiceControlFrame } from './ChoiceControlFrame.tsx';
import type { ChoiceControlAppearance } from './ChoiceControlFrame.tsx';
import { choiceInputStyle, useChoiceControl } from './choice-control.ts';
import type { ChoiceValueProps } from './choice-control.ts';

export interface CheckboxProps
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
  /** 受控混合态，只影响标记与无障碍读值，不改变 value 或表单提交值。 */
  indeterminate?: boolean;
  slotInput?: Omit<ElementSlotProps, 'id' | 'role' | 'aria-checked' | 'aria-readonly'>;
  slotIndicator?: Omit<ElementSlotProps, 'aria-hidden'>;
}
/** 原生 checkbox 保留标签、键盘和表单语义，标记使用自有 Icon。 */
export const Checkbox = _component(
  ({
    value = ref(false),
    resetValue,
    formValue = 'on',
    inputRef = shallowRef<HTMLInputElement | null | undefined>(),
    disabled = false,
    readonly: readOnly = false,
    indeterminate = false,
    size,
    color,
    accentColor,
    status,
    slotInput,
    slotIndicator,
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
  }: CheckboxProps) => {
    const s = useCss();
    const control = useChoiceControl({
      value: () => value,
      resetValue: () => resetValue,
      disabled: () => disabled,
      readOnly: () => readOnly,
      element: () => inputRef.value,
      indeterminate: () => indeterminate,
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
            value={formValue}
            checked={value.value}
            indeterminate={indeterminate}
            disabled={disabled}
            aria-checked={indeterminate ? 'mixed' : value.value}
            aria-readonly={readOnly || undefined}
            aria-invalid={status === 'error' || ariaInvalid}
            class={cx(choiceInputStyle(s).width('1.125em').height('1.125em'), slotInput?.class)}
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
                .display('inline-flex')
                .alignItems('center')
                .justifyContent('center')
                .boxSizing('border-box')
                .flexShrink(0)
                .width('1.125em')
                .height('1.125em')
                .borderStyle('solid')
                .borderWidth('0.0625em')
                .borderRadius('0.25em')
                .color('_textOnPrimary')
                .backgroundColor(
                  bx(
                    value.value || indeterminate
                      ? accentColor === undefined
                        ? '_primary'
                        : accentColor
                      : '_surface',
                  ),
                )
                .borderColor(
                  bx(
                    value.value || indeterminate
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
                    .backgroundColor(bx(value.value || indeterminate ? 'Highlight' : 'Canvas'))
                    .borderColor('ButtonText')
                    .color('HighlightText'),
                ),
              status === 'error' && s.borderColor('_danger'),
              status === 'warning' && s.borderColor('_warning'),
              status === 'success' && s.borderColor('_success'),
              slotIndicator?.class,
            )}
          >
            <Icon
              icon={indeterminate ? Minus : Check}
              size="0.875em"
              strokeWidth={3}
              aria-hidden={true}
              class={s.visibility(bx(value.value || indeterminate ? 'visible' : 'hidden'))}
            />
          </span>
        }
      >
        {children}
      </ChoiceControlFrame>
    );
  },
);
