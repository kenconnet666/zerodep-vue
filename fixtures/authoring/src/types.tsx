import { _component, For } from '@zerodep-vue/core';
import { computed, defineComponent, ref, toRef } from 'vue';
import type { Ref, VNodeChild } from 'vue';

const NoProps = _component(() => <div />);
export const noPropsClass = <NoProps class="external" style={{ color: 'red' }} ref={ref()} />;
// @ts-expect-error 无自定义 props 不意味着接受任意业务字段。
<NoProps unknown="invalid" />;

export const Select = _component(
  <T,>({ items, renderItem }: { items: readonly T[]; renderItem: (item: T) => VNodeChild }) => (
    <div>{items.map(renderItem)}</div>
  ),
);

const users = [{ id: 'a', name: 'Ada' }];
export const selected = <Select items={users} renderItem={(user) => <span>{user.name}</span>} />;
export const wrongRenderer = (
  <Select
    items={users}
    renderItem={(user) => {
      // @ts-expect-error renderer 的 item 来自 items，不得退化为 any。
      return user.unknown;
    }}
  />
);

export const Field = _component(({ value = ref('') }: { value?: Ref<string> }) => (
  <input v-model={value.value} />
));
export const field = <Field />;
export const explicitDefault = <Field value={undefined} />;
const source = ref('source');
const readOnly = computed(() => source.value);
const writable = computed({
  get: () => source.value,
  set: (value: string) => {
    source.value = value;
  },
});
export const computedInput = <Field value={writable} />;
// @ts-expect-error getter-only computed 不能传给可编辑 Ref prop。
export const readonlyInput = <Field value={readOnly} />;
const ReadonlyDisplay = _component(({ value }: { value: Readonly<Ref<string>> }) => (
  <span>{value.value}</span>
));
export const readonlyDisplay = <ReadonlyDisplay value={readOnly} />;
export const getterDisplay = <ReadonlyDisplay value={toRef(() => source.value)} />;

const Echo = _component(<T,>({ value, render }: { value: T; render: (value: T) => VNodeChild }) => (
  <div>{render(value)}</div>
));
export const echo = <Echo value="typed" render={(value) => value.toUpperCase()} />;
export const wrongEcho = (
  <Echo
    value="typed"
    render={(value) => {
      // @ts-expect-error 模型约束不能破坏普通泛型值的回调推断。
      return value.toFixed();
    }}
  />
);
// @ts-expect-error Ref 的值类型在跨组件传递时保持。
export const wrongField = <Field value={ref(123)} />;

export const Panel = _component(({ children }: { children?: VNodeChild }) => (
  <section>{children}</section>
));
export const panel = (
  <Panel>
    <span>content</span>
  </Panel>
);
// @ts-expect-error 无参数内容是 VNodeChild，不接受 renderer 函数。
export const wrongPanel = <Panel>{() => <span>content</span>}</Panel>;

export const rows = (
  <For each={users}>
    {(user, index) => (
      <span>
        {user.name}:{index.toFixed()}
      </span>
    )}
  </For>
);
// @ts-expect-error For 的 item 与 each 保持一致。
export const wrongRows = <For each={users}>{(user) => <span>{user.unknown}</span>}</For>;

const Legacy = defineComponent({
  setup(_props, { slots }) {
    return () => <div>{slots.default?.()}</div>;
  },
});
export const legacyChildren = (
  <Legacy>
    <span>ordinary Vue slot</span>
  </Legacy>
);
export const legacyFunction = <Legacy>{() => <span>ordinary Vue function slot</span>}</Legacy>;
