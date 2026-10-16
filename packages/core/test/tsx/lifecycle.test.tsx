import type { VueWrapper } from '@vue/test-utils';
import { flushPromises, mount } from '@vue/test-utils';
import {
  SystemKeywords,
  _b,
  _button,
  _component,
  _div,
  _i,
  _input,
  _p,
  _span,
  createCssContext,
  createCssHost,
  globalCss,
  keyframes,
} from '@zerodep-vue/core';
import { afterEach, expect, test } from 'vitest';
import type { Ref, VNodeChild } from 'vue';
import {
  KeepAlive,
  Suspense,
  Transition,
  TransitionGroup,
  defineComponent,
  nextTick,
  onMounted,
  onScopeDispose,
  ref,
} from 'vue';
const { useCss } = createCssContext(new SystemKeywords());
const css = useCss();
const wrappers: VueWrapper[] = [];
const containers: HTMLElement[] = [];
afterEach(() => {
  for (const wrapper of wrappers.splice(0)) wrapper.unmount();
  for (const container of containers.splice(0)) container.remove();
});
function environment() {
  const target = document.createElement('div');
  const mountTo = document.createElement('div');
  document.head.appendChild(target);
  document.body.appendChild(mountTo);
  containers.push(target, mountTo);
  return {
    target,
    mountTo,
    host: createCssHost({
      target,
      maxUnusedRules: 0,
    }),
  };
}
test('Transition retains class and animation resources until its real DOM removal', async () => {
  const { host, target, mountTo } = environment();
  const visible = ref(true);
  let finish: (() => void) | undefined;
  const Leaf = _component(() => {
    const fade = keyframes({
      from: css({
        opacity: 1,
      }),
      to: css({
        opacity: 0,
      }),
    });
    return (
      <_div
        css={css({
          color: 'red',
          animationName: fade,
        })}
      >
        leaving
      </_div>
    );
  });
  const App = _component(() => (
    <Transition
      css={false}
      onLeave={(_element, done) => {
        finish = done;
      }}
    >
      {visible.value ? <Leaf /> : null}
    </Transition>
  ));
  const wrapper = mount(App, {
    attachTo: mountTo,
    global: {
      plugins: [host],
      stubs: {
        transition: false,
      },
    },
  });
  wrappers.push(wrapper);
  const node = wrapper.get('div').element;
  visible.value = false;
  await nextTick();
  expect(finish).toBeTypeOf('function');
  expect(node.isConnected).toBe(true);
  expect(host.stats().activeRules).toBe(2);
  expect(target.textContent).toContain('@keyframes');
  finish!();
  await nextTick();
  await Promise.resolve();
  expect(node.isConnected).toBe(false);
  expect(host.stats().ownedReferences).toBe(0);
});
test('KeepAlive preserves state and CSS leases across deactivation and cache eviction', async () => {
  const { host, mountTo } = environment();
  const current = ref('a');
  let setups = 0;
  let disposed = 0;
  const Page = _component(({ name }: { name: string }) => {
    setups++;
    const count = ref(0);
    onScopeDispose(() => {
      disposed++;
    });
    return (
      <_button
        css={css(() => ({
          width: count.value + 20,
          color: name === 'a' ? 'red' : 'blue',
        }))}
        data-page={name}
        onClick={() => count.value++}
      >
        {name}:{count.value}
      </_button>
    );
  });
  const App = _component(() => (
    <KeepAlive max={2}>
      <Page key={current.value} name={current.value} />
    </KeepAlive>
  ));
  const wrapper = mount(App, {
    attachTo: mountTo,
    global: {
      plugins: [host],
    },
  });
  wrappers.push(wrapper);
  const first = wrapper.get('button').element;
  await wrapper.get('button').trigger('click');
  current.value = 'b';
  await nextTick();
  expect(host.stats().ownedReferences).toBe(2);
  expect(first.isConnected).toBe(false);
  current.value = 'a';
  await nextTick();
  expect(wrapper.get('button').element).toBe(first);
  expect(wrapper.text()).toBe('a:1');
  expect(setups).toBe(2);
  current.value = 'c';
  await nextTick();
  expect(disposed).toBe(1);
  expect(host.stats().ownedReferences).toBe(2);
  wrapper.unmount();
  wrappers.splice(wrappers.indexOf(wrapper), 1);
  expect(disposed).toBe(3);
  expect(host.stats().ownedReferences).toBe(0);
});
test('TransitionGroup keeps a departing row styled while keyed rows retain identity', async () => {
  const { host, mountTo } = environment();
  const rows = ref(['a', 'b']);
  let finish: (() => void) | undefined;
  const Row = _component(({ name }: { name: string }) => (
    <_span
      css={css({
        color: 'green',
      })}
      data-row={name}
    >
      {name}
    </_span>
  ));
  const App = _component(() => (
    <TransitionGroup
      tag="div"
      css={false}
      onLeave={(_element, done) => {
        finish = done;
      }}
    >
      {rows.value.map((name) => (
        <Row key={name} name={name} />
      ))}
    </TransitionGroup>
  ));
  const wrapper = mount(App, {
    attachTo: mountTo,
    global: {
      plugins: [host],
      stubs: {
        'transition-group': false,
      },
    },
  });
  wrappers.push(wrapper);
  const a = wrapper.get('[data-row=a]').element;
  rows.value = ['b', 'a'];
  await nextTick();
  expect(wrapper.get('[data-row=a]').element).toBe(a);
  expect(wrapper.findAll('[data-row]').map((row) => row.attributes('data-row'))).toEqual([
    'b',
    'a',
  ]);
  rows.value = ['b'];
  await nextTick();
  expect(a.isConnected).toBe(true);
  expect(host.stats().ownedReferences).toBe(2);
  finish!();
  await nextTick();
  await Promise.resolve();
  expect(host.stats().ownedReferences).toBe(1);
});
test('async setup updates shared state and clears its ordinary DOM Ref prop on removal', async () => {
  const { host, mountTo } = environment();
  let ready!: () => void;
  const gate = new Promise<void>((resolve) => {
    ready = resolve;
  });
  let mounts = 0;
  let disposed = 0;
  const Async = _component(
    async ({ model, inputRef }: { model: Ref<string>; inputRef: Ref<HTMLInputElement | null> }) => {
      onMounted(() => {
        mounts++;
      });
      onScopeDispose(() => {
        disposed++;
      });
      await gate;
      return (
        <_input
          css={css(() => ({
            width: model.value.length * 10,
          }))}
          ref={inputRef}
          v-model={model.value}
        />
      );
    },
  );
  const model = ref('abc');
  const input = ref<HTMLInputElement | null>(null);
  const visible = ref(true);
  const App = _component(() => (
    <Suspense
      v-slots={{
        default: () =>
          visible.value ? <Async inputRef={input} model={model} /> : <_i>removed</_i>,
        fallback: () => <_b>loading</_b>,
      }}
    />
  ));
  const wrapper = mount(App, {
    attachTo: mountTo,
    global: {
      plugins: [host],
    },
  });
  wrappers.push(wrapper);
  expect(wrapper.text()).toBe('loading');
  ready();
  await flushPromises();
  expect(mounts).toBe(1);
  input.value!.focus();
  expect(document.activeElement).toBe(wrapper.get('input').element);
  await wrapper.get('input').setValue('updated');
  expect(model.value).toBe('updated');
  const element = wrapper.get('input').element;
  visible.value = false;
  await nextTick();
  expect(element.isConnected).toBe(false);
  expect(input.value).toBeNull();
  expect(disposed).toBe(1);
  expect(host.stats().ownedReferences).toBe(0);
});
test('a cancelled pending async component releases setup resources and never mounts later', async () => {
  const { host, mountTo } = environment();
  let ready!: () => void;
  const gate = new Promise<void>((resolve) => {
    ready = resolve;
  });
  let mounts = 0;
  let disposed = 0;
  const Pending = _component(async () => {
    onMounted(() => {
      mounts++;
    });
    onScopeDispose(() => {
      disposed++;
    });
    globalCss('pending-scope', {
      ':root': css({
        color: 'red',
      }),
    });
    await gate;
    return (
      <_div
        css={css({
          color: 'blue',
        })}
      >
        late
      </_div>
    );
  });
  const visible = ref(true);
  const App = _component(() => (
    <Suspense
      v-slots={{
        default: () => (visible.value ? <Pending /> : <_p>cancelled</_p>),
        fallback: () => <_i>pending</_i>,
      }}
    />
  ));
  const wrapper = mount(App, {
    attachTo: mountTo,
    global: {
      plugins: [host],
    },
  });
  wrappers.push(wrapper);
  expect(host.stats().globalRules).toBe(1);
  visible.value = false;
  await nextTick();
  expect(disposed).toBe(1);
  expect(host.stats().globalRules).toBe(0);
  ready();
  await flushPromises();
  expect(mounts).toBe(0);
  expect(wrapper.text()).toBe('cancelled');
  expect(host.stats().ownedReferences).toBe(0);
});
test('native Vue template hosting reuses props, callbacks, nested children and DOM Ref props', async () => {
  const { host, mountTo } = environment();
  const element = ref<HTMLButtonElement | null>(null);
  const Action = _component(
    ({
      label,
      children,
      elementRef,
      onCommit,
      ...rest
    }: {
      label: string;
      children?: VNodeChild;
      elementRef: Ref<HTMLButtonElement | null>;
      onCommit: (value: string) => void;
    }) => {
      return (
        <_button
          css={css({
            color: 'red',
          })}
          ref={elementRef}
          {...rest}
          onClick={() => onCommit(label)}
        >
          {label}
          {children}
        </_button>
      );
    },
  );
  const Host = defineComponent({
    components: {
      Action,
    },
    // 普通对象保留嵌套 Ref 身份，模板不会把它当作顶层模板 Ref 自动解包。
    setup: () => ({
      references: {
        element,
      },
    }),
    data: () => ({
      label: 'template',
      committed: '',
    }),
    template:
      '<Action :element-ref="references.element" class="host-class" :label="label" @commit="committed=$event"><i>slot</i></Action>',
  });
  const wrapper = mount(Host, {
    attachTo: mountTo,
    global: {
      plugins: [host],
    },
  });
  wrappers.push(wrapper);
  expect(wrapper.text()).toBe('templateslot');
  expect(wrapper.get('button').classes()).toContain('host-class');
  element.value!.focus();
  expect(document.activeElement).toBe(wrapper.get('button').element);
  await wrapper.setData({
    label: 'changed',
  });
  await wrapper.get('button').trigger('click');
  expect(wrapper.vm.committed).toBe('changed');
  expect(wrapper.text()).toBe('changedslot');
});
