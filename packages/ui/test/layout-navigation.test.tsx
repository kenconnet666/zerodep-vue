import { afterEach, expect, test, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { createSSRApp, nextTick, ref } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { _component } from '@zerodep-vue/core';
import { Anchor, BackTop, Button, Collapse, CollapseItem, Split, SplitPane } from '../src/index.ts';
import { fitSplit, splitPercent } from '../src/layout/split-layout.ts';

const cleanup: (() => void)[] = [];
afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
  vi.restoreAllMocks();
});

test('slot event handlers run once and preventDefault stops internal actions', async () => {
  const expanded = ref<readonly string[]>([]);
  const click = vi.fn((event: MouseEvent) => event.preventDefault());
  const wrapper = mount(
    _component(() => (
      <Collapse expandedKeys={expanded}>
        <CollapseItem name="a" title="标题" slotTrigger={{ onClick: click }}>
          内容
        </CollapseItem>
      </Collapse>
    )),
  );
  cleanup.push(() => wrapper.unmount());
  await wrapper.get('button').trigger('click');
  expect(click).toHaveBeenCalledTimes(1);
  expect(expanded.value).toEqual([]);
});

test('back top and anchor compose native actions without swallowing child handlers', async () => {
  const container = document.createElement('div');
  container.scrollTo = vi.fn();
  container.scrollTop = 250;
  document.body.append(container);
  cleanup.push(() => container.remove());
  const click = vi.fn((event: MouseEvent) => event.preventDefault());
  const wrapper = mount(
    _component(() => (
      <div>
        <h2 id="anchor-target">目标</h2>
        <Anchor
          target={container}
          items={[
            {
              href: '#anchor-target',
              label: '目录',
              children: [{ href: '#other', label: '子项' }],
            },
          ]}
          slotList={{ id: 'root-list' }}
          slotLink={{ onClick: click }}
        />
        <BackTop target={container} slotButton={{ onClick: click }} />
      </div>
    )),
    { attachTo: container },
  );
  cleanup.push(() => wrapper.unmount());
  await nextTick();
  await flushPromises();
  await wrapper.get('a').trigger('click');
  await wrapper.get('button').trigger('click');
  expect(click).toHaveBeenCalledTimes(2);
  expect(container.scrollTo).not.toHaveBeenCalled();
  expect(wrapper.findAll('#root-list')).toHaveLength(1);
  expect(wrapper.get('button').attributes('aria-label')).toBe('回到顶部');
});

test('button preserves explicit busy state while loading overrides it', async () => {
  const loading = ref(false);
  const wrapper = mount(
    _component(() => (
      <Button aria-busy={true} loading={loading.value}>
        保存
      </Button>
    )),
  );
  cleanup.push(() => wrapper.unmount());
  expect(wrapper.get('button').attributes('aria-busy')).toBe('true');
  loading.value = true;
  await nextTick();
  loading.value = false;
  await nextTick();
  expect(wrapper.get('button').attributes('aria-busy')).toBe('true');
});

test('split constraints fill space and resolve over-constrained minimums deterministically', () => {
  expect(splitPercent('10em', 400, 20, 16)).toBe(50);
  expect(splitPercent('5rem', 400, 20, 16)).toBe(20);
  expect(() => splitPercent('calc(100% - 1px)' as '1px', 100, 16, 16)).toThrow();
  const first = fitSplit(
    [10, 30, 60],
    [
      { min: 20, max: 50, collapsed: false },
      { min: 10, max: 30, collapsed: false },
      { min: 0, max: 100, collapsed: false },
    ],
  );
  expect(first.sizes.reduce((a, b) => a + b, 0)).toBeCloseTo(100);
  first.sizes.forEach((size, i) => {
    expect(size).toBeGreaterThanOrEqual(first.bounds[i]!.min);
    expect(size).toBeLessThanOrEqual(first.bounds[i]!.max);
  });
  expect(
    fitSplit(
      [50, 50],
      [
        { min: 80, max: 100, collapsed: false },
        { min: 80, max: 100, collapsed: false },
      ],
    ).sizes,
  ).toEqual([50, 50]);
  expect(
    fitSplit(
      [50, 50],
      [
        { min: 0, max: 20, collapsed: false },
        { min: 0, max: 20, collapsed: false },
      ],
    ).sizes,
  ).toEqual([50, 50]);
});

test('split handles keyboard bounds, external collapse and keyed reorder', async () => {
  const sizes = ref<Readonly<Record<string, number>>>({ a: 30, b: 35, c: 35 });
  const collapsed = ref(false);
  const reverse = ref(false);
  const present = ref(true);
  const wrapper = mount(
    _component(() => (
      <Split sizes={sizes}>
        {present.value && (
          <SplitPane name="a" min="10%" collapsed={collapsed} collapsible label="侧栏">
            <input />
          </SplitPane>
        )}
        {reverse.value ? (
          <>
            <SplitPane name="c">C</SplitPane>
            <SplitPane name="b">B</SplitPane>
          </>
        ) : (
          <>
            <SplitPane name="b">B</SplitPane>
            <SplitPane name="c">C</SplitPane>
          </>
        )}
      </Split>
    )),
  );
  cleanup.push(() => wrapper.unmount());
  await wrapper.findAll('[role="separator"]')[0]!.trigger('keydown', { key: 'Home' });
  expect(sizes.value.a).toBeCloseTo(10);
  sizes.value = { a: 30, b: 35, c: 35 };
  await nextTick();
  collapsed.value = true;
  await nextTick();
  expect(wrapper.get('[data-zv-split-pane="a"]').attributes('inert')).toBeDefined();
  await wrapper.findAll('[role="separator"]')[1]!.trigger('keydown', { key: 'ArrowRight' });
  expect(sizes.value.a).toBe(0);
  collapsed.value = false;
  await nextTick();
  expect(sizes.value.a).toBeCloseTo(30);
  const previous = sizes.value.c;
  reverse.value = true;
  await nextTick();
  expect(
    wrapper.findAll('[data-zv-split-pane]').map((pane) => pane.attributes('data-zv-split-pane')),
  ).toEqual(['a', 'c', 'b']);
  expect(sizes.value.c).toBe(previous);
  present.value = false;
  await nextTick();
  expect(wrapper.findAll('[data-zv-split-pane]')).toHaveLength(2);
});

test('split SSR supports Fragment and prototype-looking names without mounting order dependence', async () => {
  const html = await renderToString(
    createSSRApp(
      _component(() => (
        <Split>
          <SplitPane name="constructor">第一块</SplitPane>
          <>
            <SplitPane name="__proto__">第二块</SplitPane>
          </>
        </Split>
      )),
    ),
  );
  expect(html).toContain('aria-valuenow="50"');
  expect(html).toContain('第一块');
  expect(html).toContain('第二块');
});

test('simultaneously reopening panes reserves all saved sizes before redistributing remaining space', async () => {
  const sizes = ref<Readonly<Record<string, number>>>({ a: 20, b: 20, c: 30, d: 30 });
  const a = ref(false);
  const b = ref(false);
  const wrapper = mount(
    _component(() => (
      <Split sizes={sizes}>
        <SplitPane name="a" collapsed={a} />
        <SplitPane name="b" collapsed={b} />
        <SplitPane name="c" />
        <SplitPane name="d" />
      </Split>
    )),
  );
  cleanup.push(() => wrapper.unmount());
  a.value = true;
  b.value = true;
  await nextTick();
  sizes.value = { a: 0, b: 0, c: 60, d: 40 };
  await nextTick();
  a.value = false;
  b.value = false;
  await nextTick();
  expect(sizes.value).toEqual({ a: 20, b: 20, c: 36, d: 24 });
});
