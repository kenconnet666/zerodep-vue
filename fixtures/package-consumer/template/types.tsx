import { computed, defineComponent, ref } from 'vue';
import * as ui from '@zerodep-vue/ui';
import { z } from 'zod';
import { Decimal } from 'decimal.js';
import { CalendarDate, Time } from '@internationalized/date';
import { House } from '@lucide/icons';
import type { Ref, VNodeChild } from 'vue';
import {
  _component,
  For,
  bx as bind,
  createCssContext,
  SystemKeywords,
  cx,
} from '@zerodep-vue/core';

import type { Css, CssInput } from '@zerodep-vue/core';
import { Field, Palette, palettes, themed, theme } from './App';
const { useCss } = createCssContext(new SystemKeywords());

// UI 不提供第三方代理入口；显式安装的 peer 声明必须在消费者中独立可用。
// @ts-expect-error Zod 从 zod 直接导入。
ui.z;
// @ts-expect-error Decimal 从 decimal.js 直接导入。
ui.Decimal;
// @ts-expect-error 图标数据从 @lucide/icons 直接导入。
ui.House;
export const typedUiValues = z
  .object({
    amount: z.instanceof(Decimal),
    date: z.instanceof(CalendarDate),
    time: z.instanceof(Time),
  })
  .parse({
    amount: new Decimal('0.1'),
    date: new CalendarDate(2026, 10, 14),
    time: new Time(9, 30),
  });
export const iconResourceName = House.name;

const s = useCss();

export function selectedTheme() {
  const current = ref(palettes.light);
  const context = createCssContext(current);
  current.value = palettes.dark;
  // @ts-expect-error 切换的实例仍必须具有同一套主题成员。
  current.value = new SystemKeywords();
  // @ts-expect-error 主题入口必须接收继承实例或对应 Ref。
  createCssContext({ color: { _brand: 'red' } });
  const s = context.useCss();
  return s.color('_brand');
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
// @ts-expect-error 封闭属性不能接收不兼容的原生值。
s.boxSizing('flex');
// @ts-expect-error 业务主题成员不能退化成任意字符串。
theme.value.color._missing;
// @ts-expect-error 只读映射入口不能替换主题来源。
theme.value = new Palette();

const display = 'flex';
const brand = '_brand';
const mappedBrand = theme.value.color._brand; /*hover:brand*/
themed.variable('--brand', bind(theme.value.color._brand));
export const literalStyles = s
  .font('inherit')
  // literal:font
  .select(':hover', s.display('inline-flex')); // literal:display
export function expressionLiterals<T extends Palette>(s: Css<T>, active: boolean) {
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
      .color('_brand') // literal:themeBrand
  );
}
themed.display(display).color(brand).select(':hover', themed.color('_brand'));
// @ts-expect-error 默认作者只声明系统关键字，业务主题值使用对应的泛型作者入口。
s.color(brand);
// 不同作者生成的 class 仍可直接组合。
cx(themed.color(brand), s.padding(4));

export function mappedValue<T extends Palette>(theme: Readonly<Ref<T>>) {
  return theme.value.color._brand; /*hover:genericBrand*/
}
export function reusable<T extends Palette>(s: Css<T>, external?: CssInput) {
  const named = { root: s.color('_brand').display('flex'), active: s.color('_brand') };
  const nested = s
    .select(':hover', [named.active, s.color('_brand')])
    .select('@media (width < 600px)', s.display('flex'));
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

const DirectiveField = defineComponent({
  props: ['value'],
  emits: ['update:value'],
  setup: () => () => null,
});
export const directiveUsage = (
  <>
    <input v-model_trim={value.value} v-show={true} />
    <DirectiveField v-model:value_number={value.value} v-slots={{ default: () => 'content' }} />
  </>
);
