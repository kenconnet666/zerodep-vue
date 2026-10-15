import { SystemKeywords } from '@zerodep-vue/core';
import type { Ref } from 'vue';

/** UI 主题的完整基础契约和默认亮色值；派生类保留必要字段，Provider 按整套主题切换。 */
export class UiTheme extends SystemKeywords {
  override readonly color: {
    /** 品牌主色，用于主要操作和强调内容。 */
    _brand: string | Ref<string>;
    /** 主要文字颜色。 */
    _text: string | Ref<string>;
    /** 次要说明文字颜色。 */
    _textMuted: string | Ref<string>;
    /** 内容表面的背景色。 */
    _surface: string | Ref<string>;
    /** 常规边框颜色。 */
    _border: string | Ref<string>;
    /** 错误和危险操作的强调色。 */
    _danger: string | Ref<string>;
  } = {
    _brand: '#2563eb',
    _text: '#0f172a',
    _textMuted: '#64748b',
    _surface: '#ffffff',
    _border: '#cbd5e1',
    _danger: '#dc2626',
  };

  override readonly fontFamily: {
    /** UI 的默认字体族，优先使用系统界面字体。 */
    _ui: string | Ref<string>;
  } = {
    _ui: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  override readonly fontSize: {
    /** 正文字号；数字由 CSS 运行时按 px 处理。 */
    _body: string | number | Ref<string | number>;
  } = { _body: 14 };

  override readonly borderRadius: {
    /** 常规控件圆角；数字由 CSS 运行时按 px 处理。 */
    _control: string | number | Ref<string | number>;
  } = { _control: 6 };
}
