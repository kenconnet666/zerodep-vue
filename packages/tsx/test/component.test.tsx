/** @jsxImportSource @zerodep-vue/tsx */
import { afterEach, describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import {
  computed,
  createApp,
  defineComponent,
  nextTick,
  readonly,
  ref,
  shallowReactive,
  toRef,
} from 'vue';
import type { Ref, VNodeChild } from 'vue';
import { _component, For } from '@zerodep-vue/tsx';
import type { Choices, SharedProps } from './props.ts';

const mounted: VueWrapper[] = [];
afterEach(() => {
  for (const wrapper of mounted.splice(0)) wrapper.unmount();
});

describe('_component', () => {
  test('parent-evaluated children update a plain consumer without dynamic props', async () => {
    const rows = ref(['first']);
    let calls = 0;
    const Consumer = defineComponent({
      setup(_props, { slots }) {
        return () => <section>{slots.default?.()}</section>;
      },
    });
    const App = _component(() => {
      const renderRows = () => {
        calls++;
        return rows.value.map((row) => <b key={row}>{row}</b>);
      };
      return <Consumer>{renderRows()}</Consumer>;
    });
    const wrapper = mount(App);
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('first');
    expect(calls).toBe(1);
    rows.value = ['second', 'third'];
    await nextTick();
    expect(wrapper.findAll('b').map((node) => node.text())).toEqual(['second', 'third']);
    expect(calls).toBe(2);
  });

  test('editable models diagnose native readonly sources while writable computed keeps writeback', async () => {
    const Edit = _component(({ model: state }: { model: Ref<string> }) => (
      <input v-model={state.value} />
    ));
    const Direct = _component((props: { model: Ref<string> }) => (
      <button
        onClick={() => {
          props.model.value += '!';
        }}
      >
        {props.model.value}
      </button>
    ));
    const value = ref('start');
    const writable = computed({
      get: () => value.value,
      set: (next: string) => {
        value.value = next;
      },
    });
    const wrapper = mount(Edit, { props: { model: writable } });
    mounted.push(wrapper);
    await wrapper.get('input').setValue('updated');
    expect(value.value).toBe('updated');
    for (const source of [computed(() => value.value), toRef(() => value.value), readonly(value)]) {
      for (const View of [Edit, Direct]) {
        const errors: unknown[] = [];
        const app = createApp(View, { model: source });
        app.config.errorHandler = (error) => {
          errors.push(error);
        };
        try {
          app.mount(document.createElement('div'));
          expect(errors.some((error) => String(error).includes('[ZV_READONLY_MODEL] model'))).toBe(
            true,
          );
        } finally {
          app.unmount();
        }
      }
    }
    expect(value.value).toBe('updated');
    const Display = _component(({ model }: { model: Readonly<Ref<string>> }) => (
      <span>{model.value}</span>
    ));
    const display = mount(Display, { props: { model: computed(() => value.value) } });
    mounted.push(display);
    expect(display.text()).toBe('updated');
  });

  test('default expressions keep their parameter scope and cache earlier dependencies per instance', async () => {
    const outer = 'outer';
    const number = ref(2);
    const Card = _component(
      ({
        title = outer,
        read = () => outer,
        first = number.value,
        second = first + 1,
      }: {
        title?: string;
        read?: () => string;
        first?: number;
        second?: number;
      }) => {
        const outer = 'body';
        return (
          <p>
            {title}/{read()}/{outer}/{first}/{second}
          </p>
        );
      },
    );
    const one = mount(Card);
    const two = mount(Card, { props: { first: 5 } });
    mounted.push(one, two);
    expect(one.text()).toBe('outer/outer/body/2/3');
    expect(two.text()).toBe('outer/outer/body/5/6');
    number.value = 8;
    await nextTick();
    expect(one.text()).toBe('outer/outer/body/2/3');
    await two.setProps({ first: undefined });
    expect(two.text()).toBe('outer/outer/body/8/6');
  });

  test('resolves imported generic props and callback values', async () => {
    const List = _component(<T,>({ items, renderItem }: Choices<T>) => (
      <div>{items.map(renderItem)}</div>
    ));
    const Display = _component(({ value, renderItem }: SharedProps) => (
      <section>{renderItem(value.value)}</section>
    ));
    const value = ref('A');
    const App = _component(() => (
      <>
        <List items={[{ name: 'Ada' }]} renderItem={(item) => <b>{item.name}</b>} />
        <Display value={value} renderItem={(text) => <i>{text}</i>} />
      </>
    ));
    const wrapper = mount(App);
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('AdaA');
    value.value = 'B';
    await nextTick();
    expect(wrapper.text()).toBe('AdaB');
  });

  test('default dependencies read earlier props and callbacks preserve this', async () => {
    let receiver: unknown = 'not-called';
    const callback = function (this: unknown) {
      receiver = this;
    };
    const Button = _component(
      ({ a = 'A', b = a, click = callback }: { a?: string; b?: string; click?: () => void }) => (
        <button onClick={() => click()}>{b}</button>
      ),
    );
    const wrapper = mount(Button);
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('A');
    await wrapper.trigger('click');
    expect(receiver).toBeUndefined();
  });

  test('copies named setup without changing its ordinary use', async () => {
    function setup({ label }: { label: string }) {
      return <b>{label}</b>;
    }
    const Component = _component(setup);
    expect(setup({ label: 'plain' }).type).toBe('b');
    const wrapper = mount(Component, { props: { label: 'wrapped' } });
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('wrapped');
    await wrapper.setProps({ label: 'changed' });
    expect(wrapper.text()).toBe('changed');
  });

  test('forwards setup context attrs once and exposes methods', async () => {
    let calls = 0;
    const Button = _component((_props: {}, { attrs, expose }) => {
      expose({ read: () => 'public' });
      return <button {...attrs}>action</button>;
    });
    const wrapper = mount(Button, { attrs: { onClick: () => calls++ } });
    mounted.push(wrapper);
    await wrapper.trigger('click');
    expect(calls).toBe(1);
    expect((wrapper.vm as unknown as { read(): string }).read()).toBe('public');
  });

  test('initializes once and updates render expressions', async () => {
    let setups = 0;
    const Counter = _component(() => {
      setups++;
      const count = ref(0);
      const doubled = computed(() => count.value * 2);
      return <button onClick={() => count.value++}>{doubled.value}</button>;
    });
    const wrapper = mount(Counter);
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('0');
    await wrapper.trigger('click');
    expect(wrapper.text()).toBe('2');
    expect(setups).toBe(1);
  });

  test('updates destructured aliases, supports Ref replacement and cached defaults', async () => {
    let factories = 0;
    const Field = _component(
      ({
        value = (factories++, ref('fallback')),
        label: caption = 'Value',
      }: {
        value?: Ref<string>;
        label?: string;
      }) => (
        <button onClick={() => (value.value += '!')}>
          {caption}:{value.value}
        </button>
      ),
    );
    const first = ref('one');
    // 用真实父组件验证 Ref 替换；test-utils 的初始 refs 分组不会被 setProps 更新。
    const supplied = shallowReactive<{ value: Ref<string> | undefined }>({ value: first });
    const label = ref('A');
    const Parent = defineComponent(() => () => (
      <Field value={supplied.value} label={label.value} />
    ));
    const wrapper = mount(Parent);
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('A:one');
    const second = ref('two');
    supplied.value = second;
    label.value = 'B';
    await nextTick();
    await wrapper.trigger('click');
    expect(wrapper.text()).toBe('B:two!');
    expect(first.value).toBe('one');
    supplied.value = undefined;
    await nextTick();
    expect(wrapper.text()).toBe('B:fallback');
    await wrapper.trigger('click');
    supplied.value = first;
    await nextTick();
    supplied.value = undefined;
    await nextTick();
    expect(wrapper.text()).toBe('B:fallback!');
    expect(factories).toBe(1);
  });

  test('preserves false/null and Boolean defaults without coercing them first', async () => {
    const View = _component(
      ({ enabled = true, text = 'default' }: { enabled?: boolean; text?: string | null }) => (
        <span>
          {String(enabled)}:{String(text)}
        </span>
      ),
    );
    const wrapper = mount(View);
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('true:default');
    await wrapper.setProps({ enabled: false, text: null });
    expect(wrapper.text()).toBe('false:null');
    await wrapper.setProps({ enabled: undefined, text: undefined });
    expect(wrapper.text()).toBe('true:default');
  });

  test('keeps callback defaults as values and instance state separate', async () => {
    let calls = 0;
    const Field = _component(
      ({
        value = ref(''),
        commit = () => calls++,
      }: {
        value?: Ref<string>;
        commit?: () => void;
      }) => (
        <button
          onClick={() => {
            value.value += 'x';
            commit();
          }}
        >
          {value.value}
        </button>
      ),
    );
    const a = mount(Field);
    const b = mount(Field);
    mounted.push(a, b);
    expect(calls).toBe(0);
    await a.trigger('click');
    expect(calls).toBe(1);
    expect(a.text()).toBe('x');
    expect(b.text()).toBe('');
  });

  test('reads ordinary props and bridges children at render time', async () => {
    const count = ref(0);
    const Panel = _component((props: { footer?: VNodeChild; children?: VNodeChild }) => (
      <section>
        <main>{props.children}</main>
        <footer>{props.footer}</footer>
      </section>
    ));
    const App = _component(() => (
      <Panel footer={<b>{count.value}</b>}>
        <span>{count.value}</span>
      </Panel>
    ));
    const wrapper = mount(App);
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('00');
    count.value = 2;
    await nextTick();
    expect(wrapper.text()).toBe('22');
  });

  test('forwards rest attrs once and reflects deletions', async () => {
    let calls = 0;
    const props = ref<Record<string, unknown>>({ title: 'first', onClick: () => calls++ });
    const Button = _component(({ label = 'save', ...rest }: { label?: string }) => (
      <button {...rest}>{label}</button>
    ));
    const App = defineComponent(() => () => <Button {...props.value} />);
    const wrapper = mount(App);
    mounted.push(wrapper);
    await wrapper.get('button').trigger('click');
    expect(calls).toBe(1);
    expect(wrapper.get('button').attributes('title')).toBe('first');
    props.value = {};
    await nextTick();
    expect(wrapper.get('button').attributes('title')).toBeUndefined();
    await wrapper.get('button').trigger('click');
    expect(calls).toBe(1);
    props.value = { title: 'second', onClick: () => (calls += 2) };
    await nextTick();
    expect(wrapper.get('button').attributes('title')).toBe('second');
    await wrapper.get('button').trigger('click');
    expect(calls).toBe(3);
  });

  test('keeps early returns reactive and nested functions ordinary', async () => {
    const status = ref<'loading' | 'ready'>('loading');
    const View = _component(() => {
      const suffix = ref('!');
      if (status.value === 'loading') return <span>loading</span>;
      return <b>ready{suffix.value}</b>;
    });
    const wrapper = mount(View);
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('loading');
    status.value = 'ready';
    await nextTick();
    expect(wrapper.text()).toBe('ready!');
  });

  test('For renders data callbacks, stable keys and direct fallback', async () => {
    const data = ref([
      { id: 'a', label: 'A' },
      { id: 'b', label: 'B' },
    ]);
    const App = _component(() => (
      <For each={data.value} getKey={(item) => item.id} fallback={<i>empty</i>}>
        {(item, index) => (
          <span data-id={item.id}>
            {index}:{item.label}
          </span>
        )}
      </For>
    ));
    const wrapper = mount(App);
    mounted.push(wrapper);
    const a = wrapper.get('[data-id=a]').element;
    data.value.reverse();
    await nextTick();
    expect(wrapper.findAll('span').map((item) => item.text())).toEqual(['0:B', '1:A']);
    expect(wrapper.get('[data-id=a]').element).toBe(a);
    data.value = [];
    await nextTick();
    expect(wrapper.text()).toBe('empty');
  });
});
