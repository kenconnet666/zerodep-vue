import type { Props, Slot } from '@zerodep-vue/core';
import { _component, _fieldset, _legend, _span } from '@zerodep-vue/core';
import type { Ref, VNodeChild } from 'vue';
import { computed, ref, shallowRef, useId } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { Text } from '../display/Text.tsx';
import type { Callback } from '../interaction/callbacks.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import { Flex } from '../layout/Flex.tsx';
import type { ChoiceControlAppearance } from './ChoiceControlFrame.tsx';
import type { RadioProps } from './Radio.tsx';
import { Radio } from './Radio.tsx';
import { useFormReset } from './form-reset.ts';
export type RadioGroupValue = string | number | null | undefined;
export interface RadioOption {
  /** 组内唯一业务值；数值 1 和字符串 "1" 是不同选项。 */
  value: string | number;
  label: VNodeChild;
  disabled?: boolean;
  /** 原生表单提交值，默认 String(value)，不改变业务值类型。 */
  formValue?: string;
}
export type RadioGroupProps = Props<
  typeof _fieldset,
  Omit<ChoiceControlAppearance, 'children' | 'slotLabel'> & {
    /** 单一可写选中值；null/undefined 表示未选择，不因选项变化自动选择或清空。 */
    value?: Ref<RadioGroupValue>;
    /** 原生重置基准；undefined 沿用首次 setup 的值，null 显式重置为空。 */
    resetValue?: RadioGroupValue;
    options: readonly RadioOption[];
    /** 每组默认生成独立原生 name；指定业务字段名后可直接读取 FormData。 */
    name?: string;
    required?: boolean;
    disabled?: boolean;
    /** 禁止鼠标和键盘改变选中值，保留当前焦点和原生表单提交。 */
    readonly?: boolean;
    orientation?: 'horizontal' | 'vertical';
    /** 使用原生 legend；也可由外层 Field 或 aria-label 提供组名称。 */
    label?: VNodeChild;
    /** 直接绑定 fieldset；挂载、替换与卸载由 Vue 管理。 */
    elementRef?: Ref<HTMLFieldSetElement | null | undefined>;
    slotInput?: RadioProps['slotInput'];
    slotIndicator?: RadioProps['slotIndicator'];
    slotLabel?: RadioProps['slotLabel'];
    /** 各选项外层容器属性；多项共用，因此不接受 id。 */
    slotOption?: Slot<typeof _span, 'id'>;
    /** 每次有效用户选择通知一次；外部赋值和 reset 不触发。 */
    onValueChange?: Callback<[value: string | number]>;
    onValueCommit?: Callback<[value: string | number]>;
    /** 每次未被取消的原生 reset 只通知一次。 */
    onValueReset?: Callback<[value: RadioGroupValue]>;
    children?: never;
    role?: never;
    'aria-readonly'?: never;
    'aria-required'?: never;
    'aria-orientation'?: never;
  }
>;

/** fieldset/legend + Flex 组合单选组，唯一持有模型与 reset；叶子只通过 Props 接线。 */
export const RadioGroup = _component(
  ({
    value = ref<RadioGroupValue>(),
    resetValue,
    options,
    name,
    required = false,
    disabled = false,
    readonly: readOnly = false,
    orientation = 'horizontal',
    label,
    elementRef = shallowRef<HTMLFieldSetElement | null | undefined>(),
    size,
    color,
    accentColor,
    status,
    slotInput,
    slotIndicator,
    slotLabel,
    slotOption,
    onValueChange,
    onValueCommit,
    onValueReset,
    form,
    css: cssProp,
    style,
    children: _children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    'aria-invalid': ariaInvalid,
    ...rest
  }: RadioGroupProps) => {
    const css = useCss();
    const initialValue = value.value;
    const generatedName = `zv-radio-${useId()}`;
    const groupName = computed(() => name || generatedName);
    const baseline = computed(() => (resetValue === undefined ? initialValue : resetValue));
    const items = computed(() => {
      const seen = new Set<string | number>();
      for (const option of options) {
        if (seen.has(option.value)) throw new RangeError('RadioGroup 的选项 value 必须唯一。');
        seen.add(option.value);
      }
      return options;
    });
    useFormReset(
      () => elementRef.value,
      () => {
        value.value = baseline.value;
        callCallbacks(onValueReset, baseline.value);
      },
    );
    function check(option: RadioOption) {
      if (
        disabled ||
        readOnly ||
        option.disabled ||
        elementRef.value?.matches(':disabled') ||
        value.value === option.value
      )
        return;
      value.value = option.value;
      callCallbacks(onValueChange, option.value);
      callCallbacks(onValueCommit, option.value);
    }
    return (
      <_fieldset
        css={[
          css(() => ({
            minWidth: 0,
            margin: 0,
            padding: 0,
            border: 0,
            fontSize: size,
            color: color === undefined ? '_textPrimary' : color,
          })),
          cssProp,
        ]}
        {...rest}
        ref={elementRef}
        role="radiogroup"
        form={form}
        disabled={disabled}
        aria-required={required || undefined}
        aria-readonly={readOnly || undefined}
        aria-orientation={orientation}
        aria-invalid={status === 'error' || ariaInvalid}
        style={style}
      >
        {label != null && (
          <_legend
            css={css({
              padding: 0,
              marginBlockEnd: '0.5em',
            })}
          >
            <Text fontWeight="_medium">{label}</Text>
          </_legend>
        )}
        <Flex
          direction={orientation === 'vertical' ? 'column' : 'row'}
          wrap={orientation === 'vertical' ? 'nowrap' : 'wrap'}
          align="start"
          gap="_small"
          columnGap="_medium"
        >
          {items.value.map((option) => (
            <_span
              css={css({
                display: 'inline-flex',
                minWidth: 0,
              })}
              key={`${typeof option.value}:${String(option.value)}`}
              {...slotOption}
            >
              <Radio
                {...{
                  color,
                  accentColor,
                  status,
                  form,
                  required,
                  readOnly,
                  slotInput,
                  slotIndicator,
                  slotLabel,
                }}
                isChecked={() => value.value === option.value}
                defaultChecked={baseline.value === option.value}
                name={groupName.value}
                formValue={option.formValue ?? String(option.value)}
                disabled={disabled || !!option.disabled}
                label={option.label}
                onCheck={() => check(option)}
              />
            </_span>
          ))}
        </Flex>
      </_fieldset>
    );
  },
);
