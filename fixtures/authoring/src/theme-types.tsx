import { keywords, SystemKeywords, createTheme, useCss, cx, bx } from '@zerodep-vue/core';
import type { Css, CssInput } from '@zerodep-vue/core';
import { shallowRef } from 'vue';
const s = useCss();

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
export const themedKeywords = appTheme.keywords;
export const inferredContext = createTheme(new AppTheme());
export const inferred = inferredContext.useCss();
export const inferredKeywords = inferredContext.keywords;
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
export const inheritedContext = createTheme(child);
export const inherited = inheritedContext.useCss();
export const inheritedKeywords = inheritedContext.keywords;
inherited
  .color(inheritedKeywords.color._brand)
  .select(':disabled', inherited.color(inheritedKeywords.color._danger));

export function reusable<T extends AppTheme>(s: Css<T>) {
  return s.color(bx('_brand')).select(':hover', s.backgroundColor('_brand')).display('flex');
}

/** 泛型作者保留主题字面量；组合只接收已经检查的样式值。 */
export function reusableGroup<T extends AppTheme>(s: Css<T>, external?: CssInput) {
  const named = { base: s.display('flex').color('_brand'), active: s.color('_brand') };
  return cx(named.base, s.select(':hover', [named.active, s.padding('_control')]), external);
}
reusableGroup(inherited, inherited.select(':hover', inherited.color('_danger')));
// @ts-expect-error 颜色主题名不能用于间距。
themed.padding('_brand');
// @ts-expect-error 未声明主题名不能被宽泛 CSS 字符串吞掉。
themed.backgroundColor('_missing');
// @ts-expect-error 默认系统作者没有业务主题名。
s.color('_brand');
// @ts-expect-error 作者没有关键词成员，显式引用使用独立 keywords。
s.keywords;
// @ts-expect-error 动态绑定中的已知错误主题字面量也被拒绝。
themed.color(bx('_missing'));
