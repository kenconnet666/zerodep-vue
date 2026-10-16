import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import {
  SystemKeywords,
  _component,
  _div,
  createCssContext,
  createCssHost,
} from '@zerodep-vue/core';
import { afterEach, expect, test } from 'vitest';
import { computed, nextTick, ref } from 'vue';
const { useCss } = createCssContext(new SystemKeywords());
const wrappers: VueWrapper[] = [];
const hosts: ReturnType<typeof createCssHost>[] = [];
afterEach(() => {
  for (const wrapper of wrappers.splice(0)) wrapper.unmount();
  for (const host of hosts.splice(0)) host.dispose();
});
function show(component: Parameters<typeof mount>[0]) {
  const host = createCssHost({ target: document.head, maxUnusedRules: 0 });
  const wrapper = mount(component, { global: { plugins: [host] } });
  wrappers.push(wrapper);
  hosts.push(host);
  return wrapper;
}
function values(wrapper: VueWrapper) {
  const style = (wrapper.element as HTMLElement).style;
  return [...style]
    .filter((name) => name.startsWith('--zv-'))
    .map((name) => style.getPropertyValue(name));
}

test('setup snapshots stay fixed while explicit sources follow their reactive reads', async () => {
  const size = ref(10);
  const unrelated = ref('a');
  let snapshots = 0,
    reads = 0;
  const App = _component(() => {
    const css = useCss();
    const snapshot = css({ width: (snapshots++, size.value) });
    const live = css(() => {
      reads++;
      return { height: size.value };
    });
    return <_div css={[snapshot, live]} title={unrelated.value} />;
  });
  const wrapper = show(App);
  expect(values(wrapper)).toEqual(['10px', '10px']);
  size.value = 20;
  await nextTick();
  expect(values(wrapper)).toEqual(['10px', '20px']);
  unrelated.value = 'b';
  await nextTick();
  expect(snapshots).toBe(1);
  expect(reads).toBe(3);
});

test('Vue computed provides explicit caching independent of unrelated render updates', async () => {
  const size = ref(10),
    label = ref('a');
  let reads = 0;
  const App = _component(() => {
    const style = computed(() => {
      reads++;
      return { width: size.value };
    });
    return <_div css={style.value} title={label.value} />;
  });
  const wrapper = show(App);
  expect(reads).toBe(1);
  label.value = 'b';
  await nextTick();
  expect(reads).toBe(1);
  size.value = 25;
  await nextTick();
  expect(reads).toBe(2);
  expect(values(wrapper)).toEqual(['25px']);
});

test('conditional CSS sources remain lazy and independent across component instances', async () => {
  const enabled = ref(false);
  let reads = 0;
  const App = _component(() => {
    const css = useCss();
    const source = css(() => {
      reads++;
      return { width: 12 };
    });
    return <_div css={enabled.value && source} />;
  });
  const first = show(App),
    second = show(App);
  expect(reads).toBe(0);
  enabled.value = true;
  await nextTick();
  expect(reads).toBe(2);
  expect(values(first)).toEqual(values(second));
  enabled.value = false;
  await nextTick();
  expect(reads).toBe(2);
  expect(values(first)).toEqual([]);
});

test('CSS expressions and native class retain ordinary writes and branch evaluation', async () => {
  const update = ref(0),
    active = ref(false);
  let saved = 0;
  const state: { temporary?: string } = { temporary: 'temporary' };
  const App = _component(() => {
    const later = 'ready';
    return (
      <_div
        title={String(update.value)}
        class={active.value ? later : 'idle'}
        css={{ width: (saved += 1), opacity: (delete state.temporary, 1) }}
      />
    );
  });
  const wrapper = show(App);
  expect(saved).toBe(1);
  expect(state).toEqual({});
  expect(wrapper.classes()).toContain('idle');
  active.value = true;
  update.value++;
  await nextTick();
  expect(saved).toBe(2);
  expect(wrapper.classes()).toContain('ready');
  expect(values(wrapper)).toEqual(['2px', '1']);
});
