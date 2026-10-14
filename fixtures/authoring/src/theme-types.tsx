import { SystemKeywords, createTheme, useCss, cx } from '@zerodep-vue/core';
import type { Css, CssInput } from '@zerodep-vue/core';
import { shallowRef } from 'vue';
const s = useCss();
const keywords = s.keywords;

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
// @ts-expect-error 每套主题必须提供应用约定成员。
selectTheme(new SystemKeywords());
export const appTheme = createTheme(source);
export const themed = appTheme.useCss();
export const themedKeywords = themed.keywords;
export const inferred = createTheme(new AppTheme()).useCss();
export const inferredKeywords = inferred.keywords;
export const styles = themed
  .display(themedKeywords.display.flex)
  .color(themedKeywords.color._brand)
  .backgroundColor(themedKeywords.color._brand)
  .borderColor(inferredKeywords.color._brand)
  .padding(themedKeywords.padding._control)
  .select(':hover', themed.color(themedKeywords.color._brand));
cx(styles);
// @ts-expect-error 泛型不能替代真实来源。
createTheme<AppTheme>();
// @ts-expect-error 系统作者不接受虚构的主题泛型。
useCss<AppTheme>();
// @ts-expect-error 区域覆盖必须保持相同主题约定。
appTheme.provide(new SystemKeywords());
// @ts-expect-error 系统基类没有业务主题名。
keywords.color._brand;
// @ts-expect-error 成员名不能被任意索引吞掉。
themedKeywords.color._missing;
// @ts-expect-error 颜色主题引用不能用作间距。
themed.padding(themedKeywords.color._brand);
// @ts-expect-error 系统关键字按目标属性的真实值域检查。
s.padding(keywords.display.flex);

class InvalidTheme extends SystemKeywords {
  override readonly color = { brand: 'red' };
}
// @ts-expect-error 主题成员使用 _ 前缀。
createTheme(new InvalidTheme());
export const child = new (class extends AppTheme {
  override readonly color = { ...new AppTheme().color, _danger: 'red' };
})();
export const inherited = createTheme(child).useCss();
export const inheritedKeywords = inherited.keywords;
inherited
  .color(inheritedKeywords.color._brand)
  .select(':disabled', inherited.color(inheritedKeywords.color._danger));

export function reusable<T extends AppTheme>(s: Css<T>) {
  const keywords = s.keywords;
  return s.color(keywords.color._brand).select(':hover', s.backgroundColor(keywords.color._brand));
}

/** 声明时保留 T；组合只接收已经检查的样式值，无需再次携带主题泛型。 */
export function reusableGroup<T extends AppTheme>(s: Css<T>, external?: CssInput) {
  const keywords = s.keywords;
  const named = {
    base: s.display(keywords.display.flex).color(keywords.color._brand),
    active: s.color(keywords.color._brand),
  };
  const nested = s
    .select(':hover', [named.active, s.padding(keywords.padding._control)])
    .select('@media (width < 600px)', s.color(keywords.color._brand));
  return cx(named.base, nested, external);
}
reusableGroup(
  inherited,
  inherited.select(':hover', inherited.color(inheritedKeywords.color._danger)),
);
// @ts-expect-error 嵌套数组也保留属性兼容性。
themed.select(':hover', [themed.padding(themedKeywords.color._brand)]);
