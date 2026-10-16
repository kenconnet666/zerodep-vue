import { afterEach, expect, test, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { createSSRApp, nextTick, ref } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { _component, createCssHost } from '@zerodep-vue/core';
import {
  Button,
  Collapse,
  CollapseItem,
  Divider,
  Flex,
  Grid,
  GridItem,
  LightTheme,
  Provider,
  Scrollbar,
} from '../src/index.ts';
import type { ButtonProps } from '../src/index.ts';

const cleanup: (() => void)[] = [];
afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
  vi.restoreAllMocks();
});

test('scrollbar forwards merged scroll listeners to the native viewport in order', async () => {
  const calls: string[] = [];
  let stop = false;
  const listeners = {
    onScroll(event: Event) {
      calls.push('first');
      if (stop) event.stopImmediatePropagation();
    },
  };
  const last = vi.fn((event: Event) => {
    calls.push('last');
    expect(event.currentTarget).toBe(viewport.element);
  });
  const wrapper = mount(
    _component(() => (
      <Scrollbar
        {...listeners}
        onScroll={last}
        slotViewport={{ onScroll: () => calls.push('viewport') }}
      >
        内容
      </Scrollbar>
    )),
  );
  cleanup.push(() => wrapper.unmount());
  const viewport = wrapper.get('[data-zv-scroll-viewport]');
  await viewport.trigger('scroll');
  expect(calls).toEqual(['viewport', 'first', 'last']);
  stop = true;
  await viewport.trigger('scroll');
  expect(calls).toEqual(['viewport', 'first', 'last', 'viewport', 'first']);
  expect(last).toHaveBeenCalledOnce();
});

test('layout props stay reactive, forward native attributes and keep direct children', async () => {
  const direction = ref<'row' | 'column'>('row');
  const columns = ref('1fr 2fr');
  const child = ref('first');
  const click = vi.fn();
  const wrapper = mount(
    _component(() => (
      <Provider>
        <Flex id="flex" as="section" direction={direction.value} gap="_small" onClick={click}>
          <span>{child.value}</span>
          <span>second</span>
        </Flex>
        <Grid id="grid" columns={columns.value} gap="_medium">
          <GridItem id="item" column="span 2">
            item
          </GridItem>
        </Grid>
        <Divider id="divider" aria-label="分区" />
        <Divider id="decorative" decorative />
      </Provider>
    )),
  );
  cleanup.push(() => wrapper.unmount());
  expect(wrapper.get('#flex').element.tagName).toBe('SECTION');
  expect(wrapper.get('#flex').element.children).toHaveLength(2);
  expect(wrapper.get('#flex').attributes('direction')).toBeUndefined();
  expect(wrapper.get('#flex').attributes('gap')).toBeUndefined();
  expect(wrapper.get('#divider').attributes('role')).toBe('separator');
  expect(wrapper.get('#decorative').attributes('role')).toBe('none');
  await wrapper.get('#flex').trigger('click');
  expect(click).toHaveBeenCalledOnce();
  direction.value = 'column';
  columns.value = 'repeat(3, 1fr)';
  child.value = 'updated';
  await nextTick();
  expect(wrapper.get('#flex').attributes('style')).toContain('column');
  expect(wrapper.get('#grid').attributes('style')).toContain('repeat(3, 1fr)');
  expect(wrapper.get('#flex').text()).toContain('updated');
});

test('native buttons default to non-submit, disable activation while loading and retain label content', async () => {
  const loading = ref(false);
  const disabled = ref(false);
  const clicks = vi.fn();
  const wrapper = mount(
    _component(() => (
      <Button id="save" loading={loading.value} disabled={disabled.value} onClick={clicks}>
        保存
      </Button>
    )),
  );
  cleanup.push(() => wrapper.unmount());
  expect(wrapper.get('button').attributes('type')).toBe('button');
  expect(wrapper.find('[data-zv-ripple]').exists()).toBe(true);
  await wrapper.get('button').trigger('click');
  expect(clicks).toHaveBeenCalledTimes(1);
  loading.value = true;
  await nextTick();
  expect(wrapper.get('button').element.disabled).toBe(true);
  expect(wrapper.get('button').attributes('aria-busy')).toBe('true');
  expect(wrapper.text()).toBe('保存');
  expect(wrapper.get('button > span').attributes('aria-hidden')).toBeUndefined();
  wrapper.get('button').element.click();
  expect(clicks).toHaveBeenCalledTimes(1);
  loading.value = false;
  disabled.value = true;
  await nextTick();
  expect(wrapper.get('button').element.disabled).toBe(true);
  disabled.value = false;
  await nextTick();
  wrapper.get('button').element.click();
  expect(clicks).toHaveBeenCalledTimes(2);
});

test('ripple finishes cancelled pointer feedback and removes all nodes on disable', async () => {
  const descriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'animate');
  const cancellations: ReturnType<typeof vi.fn>[] = [];
  Object.defineProperty(Element.prototype, 'animate', {
    configurable: true,
    value: () => {
      const cancel = vi.fn();
      cancellations.push(cancel);
      return { finished: Promise.resolve(), cancel };
    },
  });
  cleanup.push(() => {
    if (descriptor) Object.defineProperty(Element.prototype, 'animate', descriptor);
    else Reflect.deleteProperty(Element.prototype, 'animate');
  });
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, 120, 40),
  );
  const disabled = ref(false);
  const wrapper = mount(_component(() => <Button disabled={disabled.value}>动作</Button>));
  cleanup.push(() => wrapper.unmount());
  const down = new MouseEvent('pointerdown', {
    button: 0,
    clientX: 10,
    clientY: 15,
    bubbles: true,
  });
  Object.defineProperty(down, 'pointerId', { value: 7 });
  wrapper.get('button').element.dispatchEvent(down);
  expect(wrapper.findAll('[data-zv-ripple] > span')).toHaveLength(1);
  const cancel = new Event('pointercancel');
  Object.defineProperty(cancel, 'pointerId', { value: 7 });
  document.dispatchEvent(cancel);
  await Promise.resolve();
  await Promise.resolve();
  expect(wrapper.findAll('[data-zv-ripple] > span')).toHaveLength(0);
  wrapper.get('button').element.dispatchEvent(down);
  disabled.value = true;
  await nextTick();
  expect(wrapper.findAll('[data-zv-ripple] > span')).toHaveLength(0);
  expect(cancellations.some((cancel) => cancel.mock.calls.length)).toBe(true);
});

test('button variants, tone, density and child props update without remounting', async () => {
  const variant = ref<ButtonProps['variant']>('solid');
  const density = ref<ButtonProps['density']>('compact');
  const tone = ref<ButtonProps['tone']>('primary');
  const shape = ref<ButtonProps['shape']>('default');
  const wrapper = mount(
    _component(() => (
      <Button
        variant={variant.value}
        density={density.value}
        tone={tone.value}
        shape={shape.value}
        ripple={false}
        slotContent={{ 'data-part': 'content' }}
      >
        动作
      </Button>
    )),
  );
  cleanup.push(() => wrapper.unmount());
  const element = wrapper.get('button').element;
  const initialClass = element.className;
  variant.value = 'dashed';
  density.value = 'comfortable';
  tone.value = 'danger';
  shape.value = 'round';
  await nextTick();
  expect(wrapper.get('button').element).toBe(element);
  expect(element.className).not.toBe(initialClass);
  expect(getComputedStyle(element).borderStyle).toBe('dashed');
  expect(wrapper.get('[data-part="content"]').text()).toBe('动作');
  expect(element.getAttribute('style')).toContain('#b91c1c');
  expect(wrapper.find('[data-zv-ripple]').exists()).toBe(false);
});

test('button null colors clear each variant back to native defaults', () => {
  const wrapper = mount(
    _component(() => (
      <div>
        <button data-native="">基准</button>
        {(['solid', 'soft', 'outline', 'dashed', 'text'] as const).map((variant) => (
          <Button
            key={variant}
            variant={variant}
            color={null}
            backgroundColor={null}
            borderColor={null}
            ripple={false}
          >
            清除
          </Button>
        ))}
      </div>
    )),
  );
  cleanup.push(() => wrapper.unmount());
  const native = getComputedStyle(wrapper.get('[data-native]').element);
  for (const button of wrapper.findAll('[data-zv-variant]')) {
    const actual = getComputedStyle(button.element);
    expect(actual.color).toBe(native.color);
    expect(actual.backgroundColor).toBe(native.backgroundColor);
    expect(actual.borderTopColor).toBe(native.borderTopColor);
  }
});

test('collapse changes one shared Ref, preserves hidden content and restores focus before closing', async () => {
  const expandedKeys = ref<readonly string[]>([]);
  const changed = vi.fn();
  const wrapper = mount(
    _component(() => (
      <Collapse expandedKeys={expandedKeys} onExpandedChange={changed}>
        <CollapseItem name="a" title="第一项">
          <input aria-label="内容" />
        </CollapseItem>
        <CollapseItem name="b" title="第二项">
          第二段
        </CollapseItem>
      </Collapse>
    )),
    { attachTo: document.body },
  );
  cleanup.push(() => wrapper.unmount());
  const triggers = wrapper.findAll<HTMLButtonElement>('[data-zv-collapse-trigger]');
  const input = wrapper.get<HTMLInputElement>('input').element;
  await triggers[0]!.trigger('click');
  await nextTick();
  expect(expandedKeys.value).toEqual(['a']);
  expect(triggers[0]!.attributes('aria-expanded')).toBe('true');
  input.focus();
  expandedKeys.value = [];
  await nextTick();
  await flushPromises();
  expect(document.activeElement).toBe(triggers[0]!.element);
  expect(wrapper.get('input').element).toBe(input);
  expect(wrapper.get('[data-zv-collapse-state]').attributes('hidden')).toBeDefined();
  await triggers[1]!.trigger('click');
  await nextTick();
  expect(expandedKeys.value).toEqual(['b']);
  await triggers[1]!.trigger('keydown', { key: 'Home' });
  expect(document.activeElement).toBe(triggers[0]!.element);
  expect(changed).toHaveBeenCalledTimes(2);
});

test('new theme groups are independent and base layouts render without DOM during SSR', async () => {
  const first = new LightTheme();
  const second = new LightTheme();
  first.paddingInline._small = '2em';
  expect(first.padding._small).not.toBe('2em');
  expect(second.paddingInline._small).not.toBe('2em');
  const host = createCssHost();
  const app = createSSRApp(
    _component(() => (
      <Provider>
        <Flex gap="_small">
          <Button loading>保存</Button>
        </Flex>
      </Provider>
    )),
  );
  app.use(host);
  try {
    const html = await renderToString(app);
    expect(html).toContain('保存');
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('data-zv-ripple');
  } finally {
    host.dispose();
  }
});
