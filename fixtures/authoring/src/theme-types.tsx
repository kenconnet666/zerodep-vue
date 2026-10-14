import { SystemKeywords, createCss, css } from '@zerodep-vue/css';
import type { Css, CssInput, CssObject } from '@zerodep-vue/css';
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
}
const source = shallowRef(new AppTheme());
export const themed = createCss<AppTheme>(source);
export const inferred = createCss(new AppTheme());
export const styles: CssObject<AppTheme> = {
  display: themed.keywords.display.flex,
  color: themed.keywords.color._brand,
  backgroundColor: themed.keywords.color._brand,
  borderColor: inferred.keywords.color._brand,
  padding: themed.keywords.padding._control,
  ':hover': { color: themed.keywords.color._brand },
};
themed(styles);
// @ts-expect-error 泛型不能替代真实来源。
createCss<AppTheme>();
// @ts-expect-error 系统基类没有业务主题名。
css.keywords.color._brand;
// @ts-expect-error 主题成员名不能被任意字符串索引吞掉。
themed.keywords.color._missing;
// @ts-expect-error 颜色主题引用不能作为间距。
themed({ padding: themed.keywords.color._brand });
// @ts-expect-error 固定系统关键字也按目标属性的真实关键字集合检查。
css({ padding: css.keywords.display.flex });
// @ts-expect-error create 的嵌套样式保留主题引用约束。
themed.create({ root: { ':hover': { padding: themed.keywords.color._brand } } });

class InvalidTheme extends SystemKeywords {
  override readonly color = { brand: 'red' };
}
// @ts-expect-error 自定义主题成员使用 _ 前缀，不能覆盖系统层。
createCss(new InvalidTheme());

export const child = new (class extends AppTheme {
  override readonly color = { ...new AppTheme().color, _danger: 'red' };
})();
export const inherited = createCss(child);
inherited({
  color: inherited.keywords.color._brand,
  ':disabled': { color: inherited.keywords.color._danger },
});

export function reusable<T extends AppTheme>(author: Css<T>) {
  return author({
    color: author.keywords.color._brand,
    ':hover': { backgroundColor: author.keywords.color._brand },
  });
}

/** 泛型作者同时保留系统和基类/派生主题成员；外部输入也使用同一个 T。 */
export function reusableGroup<T extends AppTheme>(author: Css<T>, external?: CssInput<T>) {
  const named = author.create({
    base: { display: author.keywords.display.flex, color: author.keywords.color._brand },
    active: { color: author.firstThatWorks(author.keywords.color._brand, 'red') },
  });
  const object: CssObject<T> = {
    ':hover': [named.active, { padding: author.keywords.padding._control }],
    '@media (width < 600px)': { color: author.keywords.color._brand },
  };
  return author(named.base, object, external);
}
reusableGroup(inherited, { ':hover': { color: inherited.keywords.color._danger } });
// @ts-expect-error 嵌套数组中的对象仍检查泛型 T 的属性兼容性。
themed({ ':hover': [{ padding: themed.keywords.color._brand }] });
