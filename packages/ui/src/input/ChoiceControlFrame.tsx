import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssInput, CssValue } from '@zerodep-vue/core';
import type { StyleValue, VNodeChild } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { Text } from '../display/Text.tsx';
import type { TextProps } from '../display/Text.tsx';

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
  class?: CssInput;
  style?: StyleValue;
  children?: VNodeChild;
  innerHTML?: never;
  textContent?: never;
  /** 标签复用 Text，内容仍由组件 children 管理。 */
  slotLabel?: Omit<TextProps, 'children'>;
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
    style,
    readOnly,
    input,
    indicator,
    slotLabel,
    children,
  }: ChoiceControlFrameProps) => {
    const s = useCss();
    return (
      <label
        data-zv-choice=""
        style={style}
        class={cx(
          s
            .position('relative')
            .display('inline-flex')
            .alignItems('center')
            .verticalAlign('middle')
            .gap('0.5em')
            .minWidth(0)
            .fontSize(bx(size))
            .lineHeight('_normal')
            .color(bx(color === undefined ? '_textPrimary' : color))
            .cursor(bx(readOnly ? 'default' : 'pointer'))
            .select('&:has(> input:disabled)', s.cursor('not-allowed').color('_textDisabled'))
            .select('&:has(> input:disabled) > [data-zv-choice-indicator]', s.opacity('_disabled'))
            .select(
              '&:has(> input:focus-visible) > [data-zv-choice-indicator]',
              s
                .outlineStyle('solid')
                .outlineWidth('0.125em')
                .outlineOffset('0.125em')
                .outlineColor('_focusRing'),
            )
            .select(
              '@media (forced-colors: active)',
              s.select(
                '&:has(> input:focus-visible) > [data-zv-choice-indicator]',
                s.outlineColor('Highlight'),
              ),
            ),
          className,
        )}
      >
        {input}
        {indicator}
        {children != null && (
          <Text {...slotRest(slotLabel)} class={cx(s.minWidth(0), slotLabel?.class)}>
            {children}
          </Text>
        )}
      </label>
    );
  },
);
