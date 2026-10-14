import { afterEach, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import type { Ref } from 'vue';
import {
  _component,
  bx,
  createCssContext,
  createCssHost,
  cx,
  For,
  SystemKeywords,
} from '@zerodep-vue/core';
import type { CssHost } from '@zerodep-vue/core';

const { useCss } = createCssContext(new SystemKeywords());
const mounted: { wrapper: VueWrapper; host: CssHost; target: HTMLElement }[] = [];
function render(App: Parameters<typeof mount>[0]) {
  const target = document.createElement('div');
  document.head.append(target);
  const host = createCssHost({ target, maxUnusedRules: 0 });
  const wrapper = mount(App, { global: { plugins: [host] } });
  mounted.push({ wrapper, host, target });
  return { wrapper, host, target };
}
afterEach(() => {
  for (const { wrapper, host, target } of mounted.splice(0)) {
    wrapper.unmount();
    expect(host.stats().ownedReferences).toBe(0);
    host.dispose();
    target.remove();
  }
});

test('class builders rerun for their reactive dependencies, not unrelated render or bx updates', async () => {
  const unrelated = ref(0);
  const color = ref('red');
  const width = ref(10);
  let calls = 0;
  const s = useCss();
  const build = () => {
    calls++;
    return cx(s.color(color.value), s.width(bx(width.value)));
  };
  const App = _component(() => (
    <section>
      <span>{unrelated.value}</span>
      <div data-test="styled" class={build()} />
    </section>
  ));
  const { wrapper, target } = render(App);
  const styled = wrapper.get('[data-test=styled]');
  expect(calls).toBe(1);
  unrelated.value++;
  await nextTick();
  expect(wrapper.get('span').text()).toBe('1');
  expect(calls).toBe(1);
  width.value = 20;
  await nextTick();
  expect(styled.attributes('style')).toContain('20px');
  expect(calls).toBe(1);
  color.value = 'blue';
  await nextTick();
  expect(target.textContent).toContain('color:blue;');
  expect(calls).toBe(2);
});

test.each(['map', 'For'] as const)(
  'callback-local inputs follow replacement, reorder and removal (%s)',
  async (mode) => {
    const unrelated = ref(0);
    const rows = ref([
      { id: 1, color: 'red' },
      { id: 2, color: 'blue' },
    ]);
    const calls = new Map<number, number>();
    const s = useCss();
    let parentCalls = 0;
    const parentStyle = () => {
      parentCalls++;
      return s.display('block');
    };
    const build = (row: { id: number; color: string }, index: number) => {
      calls.set(row.id, (calls.get(row.id) ?? 0) + 1);
      return s.color(row.color).padding(index);
    };
    const App = _component(() => (
      <section class={parentStyle()}>
        {unrelated.value}
        {mode === 'map' ? (
          rows.value.map((row, index) => (
            <div key={row.id} data-row={row.id} class={build(row, index)} />
          ))
        ) : (
          <For each={rows.value} getKey={(row) => row.id}>
            {(row, index) => <div data-row={row.id} class={build(row, index)} />}
          </For>
        )}
      </section>
    ));
    const { wrapper, target } = render(App);
    expect([...calls.values()]).toEqual([1, 1]);
    expect(parentCalls).toBe(1);
    unrelated.value++;
    await nextTick();
    expect([...calls.values()]).toEqual([1, 1]);
    expect(parentCalls).toBe(1);
    rows.value[0]!.color = 'green';
    await nextTick();
    expect([...calls.values()]).toEqual([2, 1]);
    expect(target.textContent).toContain('color:green;');
    rows.value.reverse();
    await nextTick();
    expect(wrapper.findAll('[data-row]').map((node) => node.attributes('data-row'))).toEqual([
      '2',
      '1',
    ]);
    expect([...calls.values()]).toEqual([3, 2]);
    rows.value = [];
    await nextTick();
    expect(wrapper.findAll('[data-row]')).toHaveLength(0);
    rows.value = [{ id: 1, color: 'purple' }];
    await nextTick();
    expect(target.textContent).toContain('color:purple;');
    expect(calls.get(1)).toBe(4);
  },
);

test('class memos are lazy per branch and isolated per component instance', async () => {
  const first = ref('red');
  const second = ref('blue');
  const visible = ref(false);
  const unrelated = ref(0);
  const calls: string[] = [];
  const s = useCss();
  const build = (value: string) => {
    calls.push(value);
    return s.color(value);
  };
  const Child = _component(({ color }: { color: Ref<string> }) => (
    <div class={build(color.value)} />
  ));
  const App = _component(() => (
    <section>
      {unrelated.value}
      {visible.value && (
        <>
          <Child color={first} />
          <Child color={second} />
        </>
      )}
    </section>
  ));
  const { target } = render(App);
  expect(calls).toEqual([]);
  visible.value = true;
  await nextTick();
  expect(calls).toEqual(['red', 'blue']);
  unrelated.value++;
  await nextTick();
  expect(calls).toEqual(['red', 'blue']);
  first.value = 'green';
  await nextTick();
  expect(calls).toEqual(['red', 'blue', 'green']);
  expect(target.textContent).toContain('color:blue;');
  expect(target.textContent).toContain('color:green;');
});
