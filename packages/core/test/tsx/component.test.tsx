import { afterEach, describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { renderToString } from '@vue/server-renderer';
import type { VueWrapper } from '@vue/test-utils';
import {
  computed,
  createApp,
  createSSRApp,
  defineComponent,
  h,
  isReadonly,
  nextTick,
  readonly,
  ref,
  shallowReactive,
  toRef,
  toRaw,
} from 'vue';
import type { HTMLAttributes, Ref, VNodeChild } from 'vue';
import { _component, For } from '@zerodep-vue/core';
import type { Choices, SharedProps } from './props.ts';

const mounted: VueWrapper[] = [];
afterEach(() => {
  for (const wrapper of mounted.splice(0)) wrapper.unmount();
});

describe('_component', () => {
  test('readonly props and rest reject structural writes without poisoning later updates', async () => {
    let plain: object = {};
    let remaining: object = {};
    const Plain = _component((props: { label: string }) => {
      plain = props;
      return <button>{props.label}</button>;
    });
    const Forwarded = _component(({ label, ...rest }: { label: string }) => {
      remaining = rest;
      return <button {...rest}>{label}</button>;
    });
    const wrappers = [
      mount(Plain, { props: { label: 'initial' } }),
      mount(Forwarded, { props: { label: 'initial' }, attrs: { id: 'forwarded' } }),
    ];
    mounted.push(...wrappers);
    for (const input of [plain, remaining]) {
      const keys = Object.keys(input);
      for (const operation of [
        (value: object) =>
          Object.defineProperty(value, 'label', { value: 'mutated', configurable: true }),
        (value: object) => Object.defineProperty(value, 'hidden', { value: 'hidden' }),
        Object.freeze,
        Object.seal,
        Object.preventExtensions,
        (value: object) => Object.setPrototypeOf(value, {}),
      ]) {
        expect(() => operation(input)).toThrow(TypeError);
        expect(Object.keys(input)).toEqual(keys);
      }
    }
    expect(Reflect.get(plain, 'label')).toBe('initial');
    expect(Reflect.get(remaining, 'id')).toBe('forwarded');
    for (const wrapper of wrappers) {
      await wrapper.setProps({ label: 'changed' });
      expect(wrapper.text()).toBe('changed');
    }
  });

  test('unforwarded attributes never reach single or fragment roots, including SSR', async () => {
    let calls = 0;
    const Single = _component(() => <button>single</button>);
    const Multiple = _component(() => (
      <>
        <button>first</button>
        <span>second</span>
      </>
    ));
    const attrs = { id: 'outer', class: 'outer', style: { color: 'red' }, onClick: () => calls++ };
    for (const Component of [Single, Multiple]) {
      const wrapper = mount(Component, { attrs });
      mounted.push(wrapper);
      const button = wrapper.get('button');
      expect(button.attributes('id')).toBeUndefined();
      expect(button.attributes('class')).toBeUndefined();
      expect(button.attributes('style')).toBeUndefined();
      await button.trigger('click');
      const html = await renderToString(createSSRApp(Component, attrs));
      expect(html).not.toContain('outer');
      expect(html).not.toContain('color:');
    }
    expect(calls).toBe(0);
  });

  test('filtered rest forwards only selected attributes to the chosen descendant', async () => {
    let calls = 0;
    const attrs = ref<Record<string, unknown>>({
      id: 'first',
      title: 'discarded',
      onClick: () => calls++,
    });
    const Button = _component(({ ...rest }) => (
      <section>
        <button {...Object.fromEntries(Object.entries(rest).filter(([key]) => key !== 'title'))}>
          action
        </button>
      </section>
    ));
    const App = _component(() => <Button {...attrs.value} />);
    const wrapper = mount(App);
    mounted.push(wrapper);
    const button = wrapper.get('button');
    expect(wrapper.attributes('id')).toBeUndefined();
    expect(wrapper.attributes('title')).toBeUndefined();
    expect(button.attributes('id')).toBe('first');
    expect(button.attributes('title')).toBeUndefined();
    await button.trigger('click');
    expect(calls).toBe(1);
    attrs.value = {};
    await nextTick();
    expect(button.attributes('id')).toBeUndefined();
    await button.trigger('click');
    expect(calls).toBe(1);
  });

  test('ordinary props and rest expose the same native attributes and reflect removal', async () => {
    interface NativeProps extends /* @vue-ignore */ HTMLAttributes {
      label?: string;
    }
    let calls = 0;
    const attrs = ref<Record<string, unknown>>({
      id: 'first',
      title: 'title',
      onClick: () => calls++,
    });
    const Plain = _component((props: NativeProps) => (
      <button
        {...props}
        data-has-id={'id' in props}
        data-keys={Object.keys(props).sort().join(',')}
      >
        {props.id}
      </button>
    ));
    const Forwarded = _component(({ ...rest }: NativeProps) => (
      <button {...rest} data-has-id={'id' in rest} data-keys={Object.keys(rest).sort().join(',')}>
        {rest.id}
      </button>
    ));
    const App = _component(() => (
      <>
        <Plain {...attrs.value} />
        <Forwarded {...attrs.value} />
      </>
    ));
    const wrapper = mount(App);
    mounted.push(wrapper);
    const buttons = wrapper.findAll('button');
    expect(buttons[0]!.html()).toBe(buttons[1]!.html());
    expect(buttons[0]!.text()).toBe('first');
    expect(buttons[0]!.attributes('data-has-id')).toBe('true');
    await buttons[0]!.trigger('click');
    expect(calls).toBe(1);
    attrs.value = {};
    await nextTick();
    expect(buttons[0]!.html()).toBe(buttons[1]!.html());
    expect(buttons[0]!.attributes('id')).toBeUndefined();
    expect(buttons[0]!.attributes('data-has-id')).toBe('false');
    expect(buttons[0]!.text()).toBe('');
    await buttons[0]!.trigger('click');
    expect(calls).toBe(1);
  });

  test('computed native prop keys and presence update for both props and rest', async () => {
    interface NativeProps extends /* @vue-ignore */ HTMLAttributes {}
    const attrs = ref<Record<string, unknown>>({});
    const Plain = _component((props: NativeProps) => {
      const keys = computed(() => Object.keys(props).join(','));
      const hasId = computed(() => 'id' in props);
      const id = computed(() => Object.getOwnPropertyDescriptor(props, 'id')?.value);
      return (
        <output data-keys={keys.value} data-present={hasId.value}>
          {id.value}
        </output>
      );
    });
    const Forwarded = _component(({ ...rest }: NativeProps) => {
      const keys = computed(() => Object.keys(rest).join(','));
      const hasId = computed(() => 'id' in rest);
      return (
        <output data-keys={keys.value} data-present={hasId.value}>
          {rest.id}
        </output>
      );
    });
    const App = _component(() => (
      <>
        <Plain {...attrs.value} />
        <Forwarded {...attrs.value} />
      </>
    ));
    const wrapper = mount(App);
    mounted.push(wrapper);
    const outputs = wrapper.findAll('output');
    for (const next of [{ id: 'added' }, {}]) {
      attrs.value = next;
      await nextTick();
      for (const output of outputs) {
        expect(output.attributes('data-keys')).toBe('id' in next ? 'id' : '');
        expect(output.attributes('data-present')).toBe(String('id' in next));
        expect(output.text()).toBe('id' in next ? 'added' : '');
      }
    }
  });

  test('children and default slot conflicts are rejected after updates and can recover', async () => {
    const explicit = ref(false);
    const errors: unknown[] = [];
    const Child = _component(({ children }: { children?: VNodeChild }) => <p>{children}</p>);
    const Host = defineComponent(
      () => () =>
        h(Child, explicit.value ? { children: 'explicit' } : {}, { default: () => 'nested' }),
    );
    const wrapper = mount(Host, {
      global: { config: { errorHandler: (error) => errors.push(error) } },
    });
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('nested');
    explicit.value = true;
    await nextTick();
    expect(errors).toHaveLength(1);
    expect(String(errors[0])).toContain('不能同时接收显式 children prop 和嵌套 children');
    explicit.value = false;
    await nextTick();
    expect(wrapper.text()).toBe('nested');
  });

  test('rest keeps its own readonly proxy without exposing excluded inputs or internal class metadata', () => {
    const Button = _component(({ label, ...rest }: { label: string }) => {
      expect(isReadonly(rest)).toBe(true);
      expect(Object.keys(toRaw(rest))).toEqual(['id']);
      expect(Reflect.get(toRaw(rest), 'label')).toBeUndefined();
      expect(Reflect.get(toRaw(rest), '__zerodepVueClass')).toBeUndefined();
      return <button {...rest}>{label}</button>;
    });
    const wrapper = mount(Button, { props: { label: 'consumed' }, attrs: { id: 'forwarded' } });
    mounted.push(wrapper);
    expect(wrapper.attributes('id')).toBe('forwarded');
  });

  test('cached children still reject conflicts added by the Vue host, including explicit undefined', async () => {
    const added = ref(false);
    const errors: unknown[] = [];
    const Child = _component((props: { children?: VNodeChild }) => {
      const children = computed(() => props.children);
      return <p>{children.value}</p>;
    });
    const Host = defineComponent(
      () => () => h(Child, added.value ? { children: undefined } : {}, { default: () => 'nested' }),
    );
    const wrapper = mount(Host, {
      global: { config: { errorHandler: (error) => errors.push(error) } },
    });
    mounted.push(wrapper);
    expect(wrapper.text()).toBe('nested');
    added.value = true;
    await nextTick();
    expect(errors).toHaveLength(1);
    expect(String(errors[0])).toContain('不能同时接收显式 children prop 和嵌套 children');
    added.value = false;
    await nextTick();
    expect(wrapper.text()).toBe('nested');
  });

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

  test('computed children track captured host slots, removal and explicit props without losing local caching', async () => {
    const source = ref<{ kind: 'slot' | 'prop' | 'empty'; text?: string }>({
      kind: 'slot',
      text: 'first',
    });
    let reads = 0;
    const Child = _component(({ children = 'fallback' }: { children?: VNodeChild }) => {
      const cached = computed(() => {
        reads++;
        return children;
      });
      const count = ref(0);
      return (
        <section>
          <p>{cached.value}</p>
          <button onClick={() => count.value++}>{count.value}</button>
        </section>
      );
    });
    const Host = defineComponent(() => () => {
      // 插槽只捕获本次父级渲染的普通值，不能依赖插槽内部碰巧读取 Ref 来更新。
      const { kind, text } = source.value;
      switch (kind) {
        case 'slot':
          return h(Child, {}, { default: () => text });
        case 'prop':
          return h(Child, { children: text });
        default:
          return h(Child);
      }
    });
    const wrapper = mount(Host);
    mounted.push(wrapper);
    expect(wrapper.get('p').text()).toBe('first');
    expect(reads).toBe(1);
    await wrapper.get('button').trigger('click');
    expect(wrapper.get('button').text()).toBe('1');
    expect(reads).toBe(1);

    for (const next of [
      { kind: 'slot', text: 'second' },
      { kind: 'empty' },
      { kind: 'slot', text: 'restored' },
      { kind: 'prop', text: 'explicit' },
      { kind: 'prop' },
      { kind: 'slot', text: 'final' },
    ] as const) {
      source.value = next;
      await nextTick();
      expect(wrapper.get('p').text()).toBe('text' in next ? next.text : 'fallback');
    }
    expect(reads).toBe(7);
    expect(await renderToString(createSSRApp(Host))).toBe(
      '<section><p><!--[-->final<!--]--></p><button>0</button></section>',
    );
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
        first?: number | undefined;
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
      ({
        enabled = true,
        text = 'default',
      }: {
        enabled?: boolean | undefined;
        text?: string | null | undefined;
      }) => (
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

  test('forwards remaining props once and reflects deletions', async () => {
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
