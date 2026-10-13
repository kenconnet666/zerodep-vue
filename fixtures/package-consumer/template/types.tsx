/** @jsxImportSource @zerodep-vue/tsx */
import { computed, ref } from 'vue';
import type { Ref, VNodeChild } from 'vue';
import { _component, For } from '@zerodep-vue/tsx';
import { css } from '@zerodep-vue/css';
import type { Css } from '@zerodep-vue/css';
import { Field, Palette, themed } from './App';

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
css({ padding: css.keywords.display.flex });
// @ts-expect-error 业务主题成员不能退化成任意字符串。
themed.keywords.color._missing;

const display = css.keywords.display.flex; /*hover:flex*/
const brand = themed.keywords.color._brand; /*hover:brand*/
css({ display, color: brand, ':hover': { color: themed.keywords.color._brand } });

export function reusable<T extends Palette>(author: Css<T>) {
  return author({ color: author.keywords.color._brand });
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
