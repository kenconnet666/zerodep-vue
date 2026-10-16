import type { CssValue, Slot } from '@zerodep-vue/core';
import { _component, _div, _label } from '@zerodep-vue/core';
import type { VNodeChild } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import type { ElementProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { Text } from '../display/Text.tsx';
import { Grid } from '../layout/Grid.tsx';
import type { FieldViewState } from './useField.ts';
export interface FieldProps extends ElementProps {
  /** 每个 state 关联一个控件；子控件显式展开 state.control。 */
  state: FieldViewState;
  label: VNodeChild;
  help?: VNodeChild;
  orientation?: 'vertical' | 'horizontal';
  labelWidth?: CssValue<'width', UiTheme>;
  slotLabel?: Slot<typeof _label, 'id' | 'for'>;
  slotControl?: Slot<typeof Grid, 'gap'>;
  slotHelp?: Slot<typeof Text>;
  slotError?: Slot<typeof Text, 'id'>;
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
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: FieldProps) => {
    const css = useCss();
    const lang = useLang();
    return (
      <Grid
        css={cssProp}
        {...rest}
        columns={orientation === 'horizontal' ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr)'}
        gap="_small"
        align="start"
        aria-busy={state.pending.value || undefined}
      >
        <_label
          css={css(() => ({
            width: labelWidth,
            fontWeight: '_medium',
          }))}
          {...slotLabel}
          id={state.labelId}
          for={state.id}
        >
          <Text>{label}</Text>
          {state.required && (
            <Text aria-hidden={true} color="_danger">
              {' '}
              *
            </Text>
          )}
        </_label>
        <Grid {...slotControl} gap="_extraSmall">
          {children}
          <_div id={state.descriptionId} aria-live="polite">
            {help != null && (
              <Text
                css={css({
                  display: 'block',
                })}
                {...slotHelp}
                color={slotHelp?.color === undefined ? '_textSecondary' : slotHelp.color}
                size={slotHelp?.size === undefined ? '0.875em' : slotHelp.size}
              >
                {help}
              </Text>
            )}
            {Array.from(new Set(state.issues.value.map((issue) => issue.message))).map(
              (message) => (
                <Text
                  css={css({
                    display: 'block',
                  })}
                  key={message}
                  {...slotError}
                  color={slotError?.color === undefined ? '_danger' : slotError.color}
                  size={slotError?.size === undefined ? '0.875em' : slotError.size}
                >
                  {message}
                </Text>
              ),
            )}
            {state.failure.value && (
              <Text
                css={css({
                  display: 'block',
                })}
                {...slotError}
                color={slotError?.color === undefined ? '_danger' : slotError.color}
                size={slotError?.size === undefined ? '0.875em' : slotError.size}
              >
                {lang.validationFailed}
              </Text>
            )}
          </_div>
        </Grid>
      </Grid>
    );
  },
);
