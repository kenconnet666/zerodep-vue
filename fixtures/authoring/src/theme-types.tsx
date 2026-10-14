import { SystemKeywords, createCssContext, cx, bx } from '@zerodep-vue/core';
import type { Css, CssInput } from '@zerodep-vue/core';
import { shallowRef, ref } from 'vue';
const { useCss } = createCssContext(new SystemKeywords());

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
export const appTheme = createCssContext(source);
export const themed = appTheme.useCss();
export const theme = appTheme.useTheme();
export const inferredContext = createCssContext(new AppTheme());
export const inferred = inferredContext.useCss();
export const styles = themed
  .display('flex')
  .color('_brand')
  .backgroundColor('_brand')
  .borderColor('_brand')
  .padding('_control')
  .select(':hover', themed.color('_brand'));
cx(styles);
// @ts-expect-error 泛型不能替代真实来源。
createCssContext<AppTheme>();
// @ts-expect-error 系统作者不接受虚构的主题泛型。
useCss<AppTheme>();
// @ts-expect-error 区域覆盖必须保持相同主题约定。
appTheme.provideTheme(new SystemKeywords());
// @ts-expect-error 系统基类的映射没有业务主题名。
createCssContext(new SystemKeywords()).useTheme().color._brand;
// @ts-expect-error 成员名不能被任意索引吞掉。
theme.color._missing;
// @ts-expect-error 封闭属性仍按目标属性的真实值域检查。
s.boxSizing('flex');
// @ts-expect-error 已知对象直接访问成员，不再提供 Ref 的 .value 入口。
theme.value;

class RefTheme extends SystemKeywords {
  override readonly color = { _brand: ref('red') };
}
const reactiveTheme = createCssContext(new RefTheme()).useTheme();
export const unwrappedBrand: string = reactiveTheme.color._brand;
reactiveTheme.color._brand = 'blue';
// @ts-expect-error reactive 已解包对象中的 Ref 成员。
reactiveTheme.color._brand.value;

class InvalidTheme extends SystemKeywords {
  override readonly color = { brand: 'red' };
}
// @ts-expect-error 主题成员使用 _ 前缀。
createCssContext(new InvalidTheme());
export const child = new (class extends AppTheme {
  override readonly color = { ...new AppTheme().color, _danger: 'red' };
})();
export const inheritedContext = createCssContext(child);
export const inherited = inheritedContext.useCss();
inherited.color('_brand').select(':disabled', inherited.color('_danger'));

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
// @ts-expect-error 作者没有关键词对象，直接使用字面量。
s.keywords;
// @ts-expect-error 上下文也不再提供关键词视图。
appTheme.keywords;
// @ts-expect-error 动态绑定中的已知错误主题字面量也被拒绝。
themed.color(bx('_missing'));
