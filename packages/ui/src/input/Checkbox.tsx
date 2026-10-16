import { Check, Minus } from '@lucide/icons';
import type { Props, Slot } from '@zerodep-vue/core';
import { _component, _input, _span } from '@zerodep-vue/core';
import { ref, shallowRef } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { Icon } from '../display/Icon.tsx';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { ChoiceControlAppearance } from './ChoiceControlFrame.tsx';
import { ChoiceControlFrame } from './ChoiceControlFrame.tsx';
import type { ChoiceValueProps } from './choice-control.ts';
import { choiceInputStyle, useChoiceControl } from './choice-control.ts';
export type CheckboxProps = Props<
  typeof _input,
  ChoiceValueProps &
    ChoiceControlAppearance & {
      /** 受控混合态，只影响标记与无障碍读值，不改变 value 或表单提交值。 */
      indeterminate?: boolean;
      slotInput?: Slot<
        typeof _input,
        | 'type'
        | 'value'
        | 'checked'
        | 'indeterminate'
        | 'disabled'
        | 'role'
        | 'aria-checked'
        | 'aria-readonly'
        | 'aria-invalid'
      >;
      slotIndicator?: Slot<typeof _span, 'aria-hidden' | 'data-zv-choice-indicator'>;
      type?: never;
      checked?: never;
      role?: never;
      'aria-checked'?: never;
      'aria-readonly'?: never;
    }
>;
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
    css: cssProp,
    style,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    'aria-invalid': ariaInvalid,
    ...rest
  }: CheckboxProps) => {
    const css = useCss();
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
        class={className}
        css={cssProp}
        {...{
          size,
          color,
          readOnly,
          style,
          slotLabel,
        }}
        input={
          <_input
            css={css([
              choiceInputStyle(css),
              {
                width: '1.125em',
                height: '1.125em',
              },
            ])}
            onClick={control.guard}
            {...slotInput}
            {...rest}
            ref={inputRef}
            type="checkbox"
            role="checkbox"
            value={formValue}
            checked={value.value}
            indeterminate={indeterminate}
            disabled={disabled}
            aria-checked={indeterminate ? 'mixed' : value.value}
            aria-readonly={readOnly || undefined}
            aria-invalid={status === 'error' || ariaInvalid}
            onChange={control.change}
          />
        }
        indicator={
          <_span
            css={[
              css(() => ({
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                flexShrink: 0,
                width: '1.125em',
                height: '1.125em',
                borderStyle: 'solid',
                borderWidth: '0.0625em',
                borderRadius: '0.25em',
                color: '_textOnPrimary',
                backgroundColor:
                  value.value || indeterminate
                    ? accentColor === undefined
                      ? '_primary'
                      : accentColor
                    : '_surface',
                borderColor:
                  value.value || indeterminate
                    ? accentColor === undefined
                      ? '_primary'
                      : accentColor
                    : '_borderStrong',
                transitionProperty: 'background-color, border-color',
                transitionDuration: '_fast',
                '&:where([data-zv-choice]:has(> input:enabled):hover > *)': {
                  borderColor: accentColor === undefined ? '_primaryHover' : accentColor,
                },
                '@media (prefers-reduced-motion: reduce)': {
                  transitionDuration: '0ms',
                },
                '@media (forced-colors: active)': {
                  backgroundColor: value.value || indeterminate ? 'Highlight' : 'Canvas',
                  borderColor: 'ButtonText',
                  color: 'HighlightText',
                },
              })),
              status === 'error' &&
                css({
                  borderColor: '_danger',
                }),
              status === 'warning' &&
                css({
                  borderColor: '_warning',
                }),
              status === 'success' &&
                css({
                  borderColor: '_success',
                }),
            ]}
            {...slotIndicator}
            aria-hidden={true}
            data-zv-choice-indicator=""
          >
            <Icon
              css={css(() => ({
                visibility: value.value || indeterminate ? 'visible' : 'hidden',
              }))}
              icon={indeterminate ? Minus : Check}
              size="0.875em"
              strokeWidth={3}
              aria-hidden={true}
            />
          </_span>
        }
      >
        {children}
      </ChoiceControlFrame>
    );
  },
);
