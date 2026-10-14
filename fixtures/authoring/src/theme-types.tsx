import { SystemKeywords, createTheme, css, keywords } from '@zerodep-vue/core';
import type { CssContext, CssInput, CssObject } from '@zerodep-vue/core';
import { shallowRef } from 'vue';

export class AppTheme extends SystemKeywords {
  override readonly color = {
    /** 品牌主色，用于强调内容和交互控件。 */
    _brand: '#2563eb',
  };
  override readonly padding = {
    /** 控件的纵向与横向内边距。 */
    _control: '8px 12px',
  };

  constructor(brand = '#2563eb') {
    super();
    this.color._brand = brand;
  }
}
export const themes = { light: new AppTheme(), dark: new AppTheme('#93c5fd') };
const source = shallowRef(themes.light);
export function selectTheme(theme: AppTheme) {
  source.value = theme;
}
selectTheme(themes.dark);
// @ts-expect-error 每套主题都必须提供应用主题约定的成员。
selectTheme(new SystemKeywords());
export const {
  css: themed,
  cx: themedCx,
  keywords: themedKeywords,
  keyframes: themedKeyframes,
  globalCss: themedGlobalCss,
} = createTheme<AppTheme>(source);
export const { css: inferred, keywords: inferredKeywords } = createTheme(new AppTheme());
export const styles: CssObject<AppTheme> = {
  display: themedKeywords.display.flex,
  color: themedKeywords.color._brand,
  backgroundColor: themedKeywords.color._brand,
  borderColor: inferredKeywords.color._brand,
  padding: themedKeywords.padding._control,
  ':hover': { color: themedKeywords.color._brand },
};
themed(styles);
// @ts-expect-error 泛型不能替代真实来源。
createTheme<AppTheme>();
// @ts-expect-error 系统基类没有业务主题名。
keywords.color._brand;
// @ts-expect-error 主题成员名不能被任意字符串索引吞掉。
themedKeywords.color._missing;
// @ts-expect-error 颜色主题引用不能作为间距。
themed({ padding: themedKeywords.color._brand });
// @ts-expect-error 固定系统关键字也按目标属性的真实关键字集合检查。
css({ padding: keywords.display.flex });
// @ts-expect-error cx 的嵌套样式保留主题引用约束。
themedCx({ root: { ':hover': { padding: themedKeywords.color._brand } } });

class InvalidTheme extends SystemKeywords {
  override readonly color = { brand: 'red' };
}
// @ts-expect-error 自定义主题成员使用 _ 前缀，不能覆盖系统层。
createTheme(new InvalidTheme());

export const child = new (class extends AppTheme {
  override readonly color = { ...new AppTheme().color, _danger: 'red' };
})();
export const { css: inherited, keywords: inheritedKeywords } = createTheme(child);
inherited({
  color: inheritedKeywords.color._brand,
  ':disabled': { color: inheritedKeywords.color._danger },
});

export function reusable<T extends AppTheme>({ css, keywords }: CssContext<T>) {
  return css({
    color: keywords.color._brand,
    ':hover': { backgroundColor: keywords.color._brand },
  });
}

/** 泛型作者同时保留系统和基类/派生主题成员；外部输入也使用同一个 T。 */
export function reusableGroup<T extends AppTheme>(
  { css, cx, keywords }: CssContext<T>,
  external?: CssInput<T>,
) {
  const named = cx({
    base: { display: keywords.display.flex, color: keywords.color._brand },
    active: { color: keywords.color._brand },
  });
  const object: CssObject<T> = {
    ':hover': [named.active, { padding: keywords.padding._control }],
    '@media (width < 600px)': { color: keywords.color._brand },
  };
  return css(named.base, object, external);
}
reusableGroup(createTheme(child), { ':hover': { color: inheritedKeywords.color._danger } });
// @ts-expect-error 嵌套数组中的对象仍检查泛型 T 的属性兼容性。
themed({ ':hover': [{ padding: themedKeywords.color._brand }] });
