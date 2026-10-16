import type { CssInput, CssValue, Slot } from '@zerodep-vue/core';
import { _component, _label } from '@zerodep-vue/core';
import type { HTMLAttributes, StyleValue, VNodeChild } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';
import { Text } from '../display/Text.tsx';
export interface ChoiceControlAppearance {
  /** 默认继承字号；标记和间距使用 em 随之缩放。 */
  size?: CssValue<'fontSize', UiTheme>;
  /** 标签文字颜色；选中标记使用 accentColor。 */
  color?: CssValue<'color', UiTheme>;
  /** 自绘选中标记的背景与边框色，默认 _primary；不是原生 accent-color 属性。 */
  accentColor?: CssValue<'backgroundColor', UiTheme>;
  /** 状态边框；error 同时输出 aria-invalid。 */
  status?: 'error' | 'warning' | 'success';
  /** 外层 label 样式；原生输入和标记样式通过对应 slotX 提供。 */
  class?: HTMLAttributes['class'];
  css?: CssInput;
  style?: StyleValue;
  children?: VNodeChild;
  innerHTML?: never;
  textContent?: never;
  /** 标签复用 Text，内容仍由组件 children 管理。 */
  slotLabel?: Slot<typeof Text>;
}
interface ChoiceControlFrameProps extends ChoiceControlAppearance {
  readOnly: boolean;
  input: VNodeChild;
  indicator: VNodeChild;
}

/** 共用 label 与 Text 布局，原生 input、标记、ref 和交互由具体控件持有。 */
export const ChoiceControlFrame = _component(
  ({
    size,
    color,
    class: className,
    css: cssProp,
    style,
    readOnly,
    input,
    indicator,
    slotLabel,
    children,
  }: ChoiceControlFrameProps) => {
    const css = useCss();
    return (
      <_label
        css={[
          css(() => ({
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            verticalAlign: 'middle',
            gap: '0.5em',
            minWidth: 0,
            fontSize: size,
            lineHeight: '_normal',
            color: color === undefined ? '_textPrimary' : color,
            cursor: readOnly ? 'default' : 'pointer',
            '&:has(> input:disabled)': {
              cursor: 'not-allowed',
              color: '_textDisabled',
            },
            '&:has(> input:disabled) > [data-zv-choice-indicator]': {
              opacity: '_disabled',
            },
            '&:has(> input:focus-visible) > [data-zv-choice-indicator]': {
              outlineStyle: 'solid',
              outlineWidth: '0.125em',
              outlineOffset: '0.125em',
              outlineColor: '_focusRing',
            },
            '@media (forced-colors: active)': {
              '&:has(> input:focus-visible) > [data-zv-choice-indicator]': {
                outlineColor: 'Highlight',
              },
            },
          })),
          cssProp,
        ]}
        data-zv-choice=""
        class={className}
        style={style}
      >
        {input}
        {indicator}
        {children != null && (
          <Text
            css={css({
              minWidth: 0,
            })}
            {...slotLabel}
          >
            {children}
          </Text>
        )}
      </_label>
    );
  },
);
