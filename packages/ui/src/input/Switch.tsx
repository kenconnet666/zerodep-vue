import type { Props, Slot } from '@zerodep-vue/core';
import { _component, _input, _span } from '@zerodep-vue/core';
import { ref, shallowRef } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { ChoiceControlAppearance } from './ChoiceControlFrame.tsx';
import { ChoiceControlFrame } from './ChoiceControlFrame.tsx';
import type { ChoiceValueProps } from './choice-control.ts';
import { choiceInputStyle, useChoiceControl } from './choice-control.ts';
export type SwitchProps = Props<
  typeof _input,
  ChoiceValueProps &
    ChoiceControlAppearance & {
      slotInput?: Slot<
        typeof _input,
        | 'type'
        | 'role'
        | 'value'
        | 'checked'
        | 'indeterminate'
        | 'disabled'
        | 'aria-checked'
        | 'aria-readonly'
        | 'aria-invalid'
      >;
      /** 轨道属性；内容由内部滑块管理。 */
      slotIndicator?: Slot<typeof _span, 'aria-hidden' | 'data-zv-choice-indicator'>;
      slotThumb?: Slot<typeof _span, 'aria-hidden'>;
      type?: never;
      checked?: never;
      role?: never;
      'aria-checked'?: never;
      'aria-readonly'?: never;
    }
>;
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
    css: cssProp,
    style,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    'aria-invalid': ariaInvalid,
    ...rest
  }: SwitchProps) => {
    const css = useCss();
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
                width: '2.25em',
                height: '1.25em',
              },
            ])}
            onClick={control.guard}
            {...slotInput}
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
            onChange={control.change}
          />
        }
        indicator={
          <_span
            css={[
              css(() => ({
                position: 'relative',
                display: 'inline-block',
                boxSizing: 'border-box',
                flexShrink: 0,
                width: '2.25em',
                height: '1.25em',
                borderStyle: 'solid',
                borderWidth: '0.0625em',
                borderRadius: '_pill',
                backgroundColor: value.value
                  ? accentColor === undefined
                    ? '_primary'
                    : accentColor
                  : '_surfaceMuted',
                borderColor: value.value
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
                  backgroundColor: value.value ? 'Highlight' : 'Canvas',
                  borderColor: 'ButtonText',
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
            <_span
              css={css(() => ({
                position: 'absolute',
                insetBlockStart: '0.125em',
                insetInlineStart: value.value ? '1.125em' : '0.125em',
                width: '0.875em',
                height: '0.875em',
                borderRadius: '_circle',
                backgroundColor: value.value ? '_textOnPrimary' : '_textTertiary',
                transitionProperty: 'inset-inline-start, background-color',
                transitionDuration: '_fast',
                '@media (prefers-reduced-motion: reduce)': {
                  transitionDuration: '0ms',
                },
                '@media (forced-colors: active)': {
                  backgroundColor: value.value ? 'HighlightText' : 'ButtonText',
                },
              }))}
              {...slotThumb}
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
