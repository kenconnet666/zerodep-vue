import { SystemKeywords } from '@zerodep-vue/core';
import type { UiTheme } from './types.ts';

/** @internal 按 14px 设计字号换算内置尺寸；保留六位小数，实际缩放由浏览器按组件字号完成。 */
export function em(px: number): string {
  return `${Number((px / 14).toFixed(6))}em`;
}

/** 明暗主题共用排版、尺寸和动效；配色与阴影由具体主题提供，所有属性组属于各自实例。 */
export abstract class BaseTheme extends SystemKeywords implements UiTheme {
  abstract override readonly color: UiTheme['color'];
  abstract override readonly boxShadow: UiTheme['boxShadow'];

  override readonly fontFamily: UiTheme['fontFamily'] = {
    _ui: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
    _mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  };

  override readonly fontSize: UiTheme['fontSize'] = {
    _extraSmall: '0.75rem',
    _small: '0.8125rem',
    _medium: '0.875rem',
    _large: '1rem',
    _extraLarge: '1.25rem',
    _extraExtraLarge: '1.5rem',
  };
  override readonly fontWeight: UiTheme['fontWeight'] = {
    _regular: 400,
    _medium: 500,
    _semibold: 600,
    _bold: 700,
  };
  override readonly lineHeight: UiTheme['lineHeight'] = {
    _tight: 1.25,
    _normal: 1.5,
    _relaxed: 1.75,
  };

  override readonly height: UiTheme['height'] = {
    _extraSmall: em(24),
    _small: em(28),
    _medium: em(32),
    _large: em(40),
    _extraLarge: em(48),
  };
  override readonly minHeight: UiTheme['minHeight'] = { ...this.height };
  override readonly padding: UiTheme['padding'] = {
    _none: 0,
    _extraSmall: em(4),
    _small: em(8),
    _medium: em(12),
    _large: em(16),
    _extraLarge: em(24),
    _extraExtraLarge: em(32),
  };
  // 共用初始刻度，但各 CSS 属性组独立；修改某一组不会隐式改变其他组。
  override readonly margin: UiTheme['margin'] = { ...this.padding };
  override readonly paddingInline: UiTheme['paddingInline'] = { ...this.padding };
  override readonly paddingBlock: UiTheme['paddingBlock'] = { ...this.padding };
  override readonly marginInline: UiTheme['marginInline'] = { ...this.padding };
  override readonly marginBlock: UiTheme['marginBlock'] = { ...this.padding };
  override readonly gap: UiTheme['gap'] = { ...this.padding };
  override readonly rowGap: UiTheme['rowGap'] = { ...this.padding };
  override readonly columnGap: UiTheme['columnGap'] = { ...this.padding };
  override readonly borderRadius: UiTheme['borderRadius'] = {
    _none: 0,
    _small: em(4),
    _medium: em(6),
    _large: em(12),
    _pill: em(9999),
    _circle: '50%',
  };
  override readonly borderWidth: UiTheme['borderWidth'] = { _none: 0, _thin: em(1), _thick: em(2) };
  override readonly strokeWidth: UiTheme['strokeWidth'] = { _thin: 1, _medium: 2, _thick: 3 };
  override readonly opacity: UiTheme['opacity'] = { _disabled: 0.5, _ripple: 0.16 };
  override readonly transitionDuration: UiTheme['transitionDuration'] = {
    _fast: '100ms',
    _normal: '180ms',
    _slow: '280ms',
  };
  override readonly transitionTimingFunction: UiTheme['transitionTimingFunction'] = {
    _standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    _enter: 'cubic-bezier(0, 0, 0.2, 1)',
    _leave: 'cubic-bezier(0.4, 0, 1, 1)',
  };
  override readonly zIndex: UiTheme['zIndex'] = {
    _affix: 100,
    _floating: 200,
    _dropdown: 1000,
    _backdrop: 1100,
    _modal: 1200,
    _notification: 1300,
    _tooltip: 1400,
  };
}
