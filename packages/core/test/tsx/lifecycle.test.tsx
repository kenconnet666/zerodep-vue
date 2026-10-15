import { afterEach, expect, test } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import {
  KeepAlive,
  defineComponent,
  nextTick,
  onMounted,
  onScopeDispose,
  ref,
  Suspense,
  Transition,
  TransitionGroup,
} from 'vue';
import type { Ref, VNodeChild } from 'vue';
import {
  _component,
  bx,
  createCssHost,
  keyframes,
  globalCss,
  createCssContext,
  SystemKeywords,
} from '@zerodep-vue/core';

const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

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
  return { target, mountTo, host: createCssHost({ target, maxUnusedRules: 0 }) };
}

test('Transition retains class and animation resources until its real DOM removal', async () => {
  const { host, target, mountTo } = environment();
  const visible = ref(true);
  let finish: (() => void) | undefined;
  const Leaf = _component(() => {
    const fade = keyframes({ from: s.opacity(1), to: s.opacity(0) });
    return <div class={s.color('red').animationName(fade)}>leaving</div>;
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
    global: { plugins: [host], stubs: { transition: false } },
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
      <button
        data-page={name}
        class={s.width(bx(count.value + 20)).color(name === 'a' ? 'red' : 'blue')}
        onClick={() => count.value++}
      >
        {name}:{count.value}
      </button>
    );
  });
  const App = _component(() => (
    <KeepAlive max={2}>
      <Page key={current.value} name={current.value} />
    </KeepAlive>
  ));
  const wrapper = mount(App, { attachTo: mountTo, global: { plugins: [host] } });
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
    <span data-row={name} class={s.color('green')}>
      {name}
    </span>
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
    global: { plugins: [host], stubs: { 'transition-group': false } },
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

test('async setup exposes methods, updates shared Ref and clears DOM/component refs', async () => {
  const { host, mountTo } = environment();
  let ready!: () => void;
  const gate = new Promise<void>((resolve) => {
    ready = resolve;
  });
  let mounts = 0;
  let disposed = 0;
  const Async = _component(async ({ model }: { model: Ref<string> }, { expose }) => {
    const element = ref<HTMLInputElement | null>(null);
    onMounted(() => {
      mounts++;
    });
    onScopeDispose(() => {
      disposed++;
    });
    expose({ focus: () => element.value?.focus() });
    await gate;
    return (
      <input ref={element} v-model={model.value} class={s.width(bx(model.value.length * 10))} />
    );
  });
  const model = ref('abc');
  const handle = ref<{ focus(): void } | null>(null);
  const visible = ref(true);
  const App = _component(() => (
    <Suspense
      v-slots={{
        default: () => (visible.value ? <Async ref={handle} model={model} /> : <i>removed</i>),
        fallback: () => <b>loading</b>,
      }}
    />
  ));
  const wrapper = mount(App, { attachTo: mountTo, global: { plugins: [host] } });
  wrappers.push(wrapper);
  expect(wrapper.text()).toBe('loading');
  ready();
  await flushPromises();
  expect(mounts).toBe(1);
  handle.value!.focus();
  expect(document.activeElement).toBe(wrapper.get('input').element);
  await wrapper.get('input').setValue('updated');
  expect(model.value).toBe('updated');
  const input = wrapper.get('input').element;
  visible.value = false;
  await nextTick();
  expect(input.isConnected).toBe(false);
  expect(handle.value).toBeNull();
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
    globalCss('pending-scope', { ':root': s.color('red') });
    await gate;
    return <div class={s.color('blue')}>late</div>;
  });
  const visible = ref(true);
  const App = _component(() => (
    <Suspense
      v-slots={{
        default: () => (visible.value ? <Pending /> : <p>cancelled</p>),
        fallback: () => <i>pending</i>,
      }}
    />
  ));
  const wrapper = mount(App, { attachTo: mountTo, global: { plugins: [host] } });
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

test('native Vue template hosting reuses value props, callbacks, default slots and exposed methods', async () => {
  const { host, mountTo } = environment();
  const Action = _component(
    (
      {
        label,
        children,
        onCommit,
        ...rest
      }: { label: string; children?: VNodeChild; onCommit: (value: string) => void },
      { expose },
    ) => {
      const button = ref<HTMLButtonElement | null>(null);
      expose({ focus: () => button.value?.focus() });
      return (
        <button ref={button} class={s.color('red')} {...rest} onClick={() => onCommit(label)}>
          {label}
          {children}
        </button>
      );
    },
  );
  const Host = defineComponent({
    components: { Action },
    data: () => ({ label: 'template', committed: '' }),
    template:
      '<Action ref="action" class="host-class" :label="label" @commit="committed=$event"><i>slot</i></Action>',
  });
  const wrapper = mount(Host, { attachTo: mountTo, global: { plugins: [host] } });
  wrappers.push(wrapper);
  expect(wrapper.text()).toBe('templateslot');
  expect(wrapper.get('button').classes()).toContain('host-class');
  (wrapper.vm.$refs.action as { focus(): void }).focus();
  expect(document.activeElement).toBe(wrapper.get('button').element);
  await wrapper.setData({ label: 'changed' });
  await wrapper.get('button').trigger('click');
  expect(wrapper.vm.committed).toBe('changed');
  expect(wrapper.text()).toBe('changedslot');
});
