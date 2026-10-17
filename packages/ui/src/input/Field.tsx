import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import type { VNodeChild } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { Grid } from '../layout/Grid.tsx';
import { Text } from '../display/Text.tsx';
import type { TextProps } from '../display/Text.tsx';
import type { FieldViewState } from './useField.ts';

export interface FieldProps extends ElementProps {
  /** 每个 state 关联一个控件；子控件显式展开 state.control。 */
  state: FieldViewState;
  label: VNodeChild;
  help?: VNodeChild;
  orientation?: 'vertical' | 'horizontal';
  labelWidth?: CssValue<'width', UiTheme>;
  slotLabel?: Omit<ElementSlotProps, 'id'>;
  slotControl?: ElementSlotProps;
  slotHelp?: Omit<TextProps, 'children'>;
  slotError?: Omit<TextProps, 'children' | 'id'>;
}

/** 字段视图组合 Grid/Text；不扫描或克隆子节点，也不把校验调度放进渲染组件。 */
export const Field = _component(
  ({
    state,
    label,
    help,
    orientation = 'vertical',
    labelWidth,
    slotLabel,
    slotControl,
    slotHelp,
    slotError,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: FieldProps) => {
    const s = useCss();
    const lang = useLang();
    return (
      <Grid
        {...rest}
        columns={orientation === 'horizontal' ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr)'}
        gap="_small"
        align="start"
        aria-busy={state.pending.value || undefined}
        class={className}
      >
        <label
          {...slotRest(slotLabel)}
          id={state.labelId}
          for={state.id}
          class={cx(s.width(bx(labelWidth)).fontWeight('_medium'), slotLabel?.class)}
        >
          <Text>{label}</Text>
          {state.required && (
            <Text aria-hidden={true} color="_danger">
              {' '}
              *
            </Text>
          )}
        </label>
        <Grid {...slotRest(slotControl)} gap="_extraSmall" class={slotControl?.class}>
          {children}
          <div id={state.descriptionId} aria-live="polite">
            {help != null && (
              <Text
                {...slotRest(slotHelp)}
                color={slotHelp?.color === undefined ? '_textSecondary' : slotHelp.color}
                size={slotHelp?.size === undefined ? '0.875em' : slotHelp.size}
                class={cx(s.display('block'), slotHelp?.class)}
              >
                {help}
              </Text>
            )}
            {Array.from(new Set(state.issues.value.map((issue) => issue.message))).map(
              (message) => (
                <Text
                  key={message}
                  {...slotRest(slotError)}
                  color={slotError?.color === undefined ? '_danger' : slotError.color}
                  size={slotError?.size === undefined ? '0.875em' : slotError.size}
                  class={cx(s.display('block'), slotError?.class)}
                >
                  {message}
                </Text>
              ),
            )}
            {state.failure.value && (
              <Text
                {...slotRest(slotError)}
                color={slotError?.color === undefined ? '_danger' : slotError.color}
                size={slotError?.size === undefined ? '0.875em' : slotError.size}
                class={cx(s.display('block'), slotError?.class)}
              >
                {lang.validationFailed}
              </Text>
            )}
          </div>
        </Grid>
      </Grid>
    );
  },
);
