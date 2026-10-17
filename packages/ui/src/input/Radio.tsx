import { _component, bx, cx } from '@zerodep-vue/core';
import { shallowRef, watchPostEffect } from 'vue';
import type { VNodeChild } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementSlotProps } from '../config/props.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { Callback } from '../interaction/callbacks.ts';
import { ChoiceControlFrame } from './ChoiceControlFrame.tsx';
import type { ChoiceControlAppearance } from './ChoiceControlFrame.tsx';
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
  slotInput?: Omit<ElementSlotProps, 'id' | 'role' | 'aria-checked' | 'aria-readonly'>;
  slotIndicator?: Omit<ElementSlotProps, 'id' | 'aria-hidden'>;
  slotLabel?: Omit<NonNullable<ChoiceControlAppearance['slotLabel']>, 'id'>;
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
    style,
    slotInput,
    slotIndicator,
    slotLabel,
    onCheck,
  }: RadioProps) => {
    const s = useCss();
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
        {...{ size, color, readOnly, style, slotLabel }}
        class={className}
        input={
          <input
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
            {...slotRest(slotInput)}
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
            class={cx(choiceInputStyle(s).width('1.125em').height('1.125em'), slotInput?.class)}
            onChange={(event) => {
              const input = inputRef.value;
              if (!input) return;
              if (!event.defaultPrevented && !blocked() && input.checked) callCallbacks(onCheck);
              else input.checked = isChecked();
            }}
          />
        }
        indicator={
          <span
            {...slotRest(slotIndicator)}
            data-zv-choice-indicator=""
            aria-hidden={true}
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
                .borderRadius('_circle')
                .backgroundColor('_surface')
                .borderColor(
                  bx(
                    isChecked()
                      ? accentColor === undefined
                        ? '_primary'
                        : accentColor
                      : '_borderStrong',
                  ),
                )
                .transitionProperty('border-color')
                .transitionDuration('_fast')
                .select(
                  '&:where([data-zv-choice]:has(> input:enabled):hover > *)',
                  s.borderColor(bx(accentColor === undefined ? '_primaryHover' : accentColor)),
                )
                .select('@media (prefers-reduced-motion: reduce)', s.transitionDuration('0ms'))
                .select(
                  '@media (forced-colors: active)',
                  s.backgroundColor('Canvas').borderColor('ButtonText'),
                ),
              status === 'error' && s.borderColor('_danger'),
              status === 'warning' && s.borderColor('_warning'),
              status === 'success' && s.borderColor('_success'),
              slotIndicator?.class,
            )}
          >
            <span
              class={s
                .width('0.625em')
                .height('0.625em')
                .borderRadius('_circle')
                .backgroundColor(bx(accentColor === undefined ? '_primary' : accentColor))
                .visibility(bx(isChecked() ? 'visible' : 'hidden'))
                .select('@media (forced-colors: active)', s.backgroundColor('Highlight'))}
            />
          </span>
        }
      >
        {label}
      </ChoiceControlFrame>
    );
  },
);
