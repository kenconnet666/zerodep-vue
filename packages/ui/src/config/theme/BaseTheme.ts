import { SystemKeywords } from '@zerodep-vue/core';
import type { UiTheme } from './types.ts';

/** 明暗主题共用排版、尺寸和动效；配色与阴影由具体主题提供，所有属性组属于各自实例。 */
export abstract class BaseTheme extends SystemKeywords implements UiTheme {
  abstract override readonly color: UiTheme['color'];
  abstract override readonly boxShadow: UiTheme['boxShadow'];

  override readonly fontFamily: UiTheme['fontFamily'] = {
    _ui: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
    _mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  };

  override readonly fontSize: UiTheme['fontSize'] = {
    _caption: 12,
    _small: 13,
    _body: 14,
    _large: 16,
    _title: 20,
    _heading: 24,
  };
  override readonly fontWeight: UiTheme['fontWeight'] = {
    _regular: 400,
    _medium: 500,
    _semibold: 600,
    _bold: 700,
  };
  override readonly lineHeight: UiTheme['lineHeight'] = {
    _tight: 1.25,
    _body: 1.5,
    _relaxed: 1.75,
  };

  override readonly height: UiTheme['height'] = {
    _xs: 24,
    _sm: 28,
    _control: 32,
    _lg: 40,
    _xl: 48,
  };
  override readonly minHeight: UiTheme['minHeight'] = { ...this.height };
  override readonly padding: UiTheme['padding'] = {
    _none: 0,
    _xs: 4,
    _sm: 8,
    _md: 12,
    _lg: 16,
    _xl: 24,
    _xxl: 32,
  };
  // 共用初始刻度，但各 CSS 属性组独立；修改某一组不会隐式改变其他组。
  override readonly margin: UiTheme['margin'] = { ...this.padding };
  override readonly gap: UiTheme['gap'] = { ...this.padding };
  override readonly borderRadius: UiTheme['borderRadius'] = {
    _none: 0,
    _sm: 4,
    _control: 6,
    _lg: 12,
    _pill: 9999,
  };
  override readonly borderWidth: UiTheme['borderWidth'] = { _thin: 1, _strong: 2 };
  override readonly opacity: UiTheme['opacity'] = { _disabled: 0.5 };
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
    _dropdown: 1000,
    _overlay: 1100,
    _modal: 1200,
    _notification: 1300,
    _tooltip: 1400,
  };
}
