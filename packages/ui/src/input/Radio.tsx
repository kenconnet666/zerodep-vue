import type { Slot } from '@zerodep-vue/core';
import { _component, _input, _span } from '@zerodep-vue/core';
import type { VNodeChild } from 'vue';
import { shallowRef, watchPostEffect } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { Text } from '../display/Text.tsx';
import type { Callback } from '../interaction/callbacks.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { ChoiceControlAppearance } from './ChoiceControlFrame.tsx';
import { ChoiceControlFrame } from './ChoiceControlFrame.tsx';
import { choiceInputStyle } from './choice-control.ts';
export interface RadioProps extends Omit<ChoiceControlAppearance, 'children' | 'slotLabel'> {
  /** 直接读取组的 Ref，使同一通知内恢复旧值也能同步原生同组按钮。 */
  isChecked(): boolean;
  defaultChecked: boolean;
  name: string;
  form?: string;
  formValue: string;
  required: boolean;
  disabled: boolean;
  readOnly: boolean;
  label: VNodeChild;
  slotInput?: Slot<
    typeof _input,
    | 'type'
    | 'name'
    | 'form'
    | 'value'
    | 'checked'
    | 'required'
    | 'disabled'
    | 'aria-checked'
    | 'id'
    | 'role'
    | 'aria-readonly'
  >;
  slotIndicator?: Slot<typeof _span, 'data-zv-choice-indicator' | 'aria-hidden' | 'id'>;
  slotLabel?: Slot<typeof Text, 'id'>;
  onCheck: Callback<[]>;
}

/** 内部单选叶子：只呈现父级 checked/defaultChecked，不持有业务模型或重置监听。 */
export const Radio = _component(
  ({
    isChecked,
    defaultChecked,
    name,
    form,
    formValue,
    required,
    disabled,
    readOnly,
    label,
    size,
    color,
    accentColor,
    status,
    class: className,
    css: cssProp,
    style,
    slotInput,
    slotIndicator,
    slotLabel,
    onCheck,
  }: RadioProps) => {
    const css = useCss();
    const inputRef = shallowRef<HTMLInputElement | null>();
    const blocked = () => disabled || readOnly || !!inputRef.value?.matches(':disabled');
    watchPostEffect(() => {
      const input = inputRef.value;
      if (!input) return;
      // 默认选中值由组唯一提供；先写默认值，再保留当前受控的显示值。
      input.defaultChecked = defaultChecked;
      input.checked = isChecked();
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
            onClick={(event) => {
              if (blocked()) event.preventDefault();
            }}
            onKeydown={(event) => {
              if (
                blocked() &&
                [' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)
              )
                event.preventDefault();
            }}
            {...slotInput}
            ref={inputRef}
            type="radio"
            name={name}
            form={form}
            value={formValue}
            checked={isChecked()}
            required={required}
            disabled={disabled}
            aria-checked={isChecked()}
            aria-invalid={status === 'error' || slotInput?.['aria-invalid']}
            onChange={(event) => {
              const input = inputRef.value;
              if (!input) return;
              if (!event.defaultPrevented && !blocked() && input.checked) callCallbacks(onCheck);
              else input.checked = isChecked();
            }}
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
                borderRadius: '_circle',
                backgroundColor: '_surface',
                borderColor: isChecked()
                  ? accentColor === undefined
                    ? '_primary'
                    : accentColor
                  : '_borderStrong',
                transitionProperty: 'border-color',
                transitionDuration: '_fast',
                '&:where([data-zv-choice]:has(> input:enabled):hover > *)': {
                  borderColor: accentColor === undefined ? '_primaryHover' : accentColor,
                },
                '@media (prefers-reduced-motion: reduce)': {
                  transitionDuration: '0ms',
                },
                '@media (forced-colors: active)': {
                  backgroundColor: 'Canvas',
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
            data-zv-choice-indicator=""
            aria-hidden={true}
          >
            <_span
              css={css(() => ({
                width: '0.625em',
                height: '0.625em',
                borderRadius: '_circle',
                backgroundColor: accentColor === undefined ? '_primary' : accentColor,
                visibility: isChecked() ? 'visible' : 'hidden',
                '@media (forced-colors: active)': {
                  backgroundColor: 'Highlight',
                },
              }))}
            />
          </_span>
        }
      >
        {label}
      </ChoiceControlFrame>
    );
  },
);
