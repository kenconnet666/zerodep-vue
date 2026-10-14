import { computed, ref } from 'vue';
import type { Ref, VNodeChild } from 'vue';
import {
  _component,
  For,
  bx as bind,
  createTheme,
  SystemKeywords,
  useCss,
  cx,
} from '@zerodep-vue/core';

import type { Css, CssInput } from '@zerodep-vue/core';
import { Field, Palette, palettes, themed, themedKeywords } from './App';
const s = useCss();
const keywords = s.keywords;

export function selectedTheme() {
  const current = ref(palettes.light);
  const context = createTheme(current);
  current.value = palettes.dark;
  // @ts-expect-error 切换的实例仍必须具有同一套主题成员。
  current.value = new SystemKeywords();
  // @ts-expect-error 主题入口必须接收继承实例或对应 Ref。
  createTheme({ color: { _brand: 'red' } });
  const s = context.useCss();
  return s.color(s.keywords.color._brand);
}

const value = ref('typed');
const writable = computed({
  get: () => value.value,
  set: (next: string) => {
    value.value = next;
  },
});
export const input = <Field model={writable} />;
// @ts-expect-error 公布的声明仍拒绝 getter-only computed 进入可编辑 Ref。
export const readonlyInput = <Field model={computed(() => value.value)} />;
// @ts-expect-error 系统关键字不能用于不兼容属性。
s.padding(keywords.display.flex);
// @ts-expect-error 业务主题成员不能退化成任意字符串。
themedKeywords.color._missing;

const display = keywords.display.flex; /*hover:flex*/
const brand = themedKeywords.color._brand; /*hover:brand*/
export const literalStyles = s
  .font('inherit')
  // literal:font
  .select(':hover', s.display('inline-flex')); // literal:display
export const transform = keywords.transformStyle.preserve3d; /*hover:preserve3d*/
// @ts-expect-error 规范化成员只保留点访问拼写；CSS 字符串仍可使用 preserve-3d。
keywords.transformStyle['preserve-3d'];
export function expressionLiterals<T extends Palette>(s: Css<T>, active: boolean) {
  const keywords = s.keywords;
  return (
    s
      .display(active ? 'none' : 'inline-flex')
      // literal:conditional
      .position(bind(active ? 'static' : 'relative'))
      // literal:binding
      .boxSizing('border-box' as const)
      // literal:assertion
      .transformStyle('preserve-3d')
      // literal:transform
      .color(keywords.color._brand)
  );
}
themed.display(display).color(brand).select(':hover', themed.color(themedKeywords.color._brand));
// @ts-expect-error 默认作者只声明系统关键字，业务主题值使用对应的泛型作者入口。
s.color(brand);
// 不同作者生成的 class 仍可直接组合。
cx(themed.color(brand), s.padding(4));

export function reusable<T extends Palette>(s: Css<T>, external?: CssInput) {
  const keywords = s.keywords;
  const genericBrand = keywords.color._brand; /*hover:genericBrand*/
  const genericFlex = keywords.display.flex; /*hover:genericFlex*/
  const named = { root: s.color(genericBrand).display(genericFlex), active: s.color(genericBrand) };
  const nested = s
    .select(':hover', [named.active, s.color(genericBrand)])
    .select('@media (width < 600px)', s.display(genericFlex));
  return cx(named.root, nested, external);
}
const List = _component(
  <T,>({ items, renderItem }: { items: readonly T[]; renderItem: (item: T) => VNodeChild }) => (
    <div>{items.map(renderItem)}</div>
  ),
);
export const list = (
  <List items={[{ label: 'ok' }]} renderItem={(row) => <span>{row.label}</span>} />
);
export const invalidList = (
  <List
    items={[{ label: 'ok' }]}
    renderItem={(row) => {
      // @ts-expect-error 泛型回调仍精确推断行字段。
      return row.unknown;
    }}
  />
);
export const rows = <For each={[{ id: 1 }]}>{(row) => <span>{row.id}</span>}</For>;
export const Display = _component(({ model }: { model: Readonly<Ref<string>> }) => (
  <span>{model.value}</span>
));
export const readonlyDisplay = <Display model={computed(() => value.value)} />;
