import { afterEach, expect, test, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { createSSRApp, nextTick, ref } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { _component } from '@zerodep-vue/core';
import { Breadcrumb, Button, Drawer, Menu, Popover, Sidebar, Tooltip } from '../src/index.ts';

const cleanup: (() => void)[] = [];
afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
function dialogMethods() {
  for (const name of ['showModal', 'close'] as const) {
    const descriptor = Object.getOwnPropertyDescriptor(HTMLDialogElement.prototype, name);
    Object.defineProperty(HTMLDialogElement.prototype, name, {
      configurable: true,
      value(this: HTMLDialogElement) {
        this.open = name === 'showModal';
      },
    });
    cleanup.push(() => {
      if (descriptor) Object.defineProperty(HTMLDialogElement.prototype, name, descriptor);
      else Reflect.deleteProperty(HTMLDialogElement.prototype, name);
    });
  }
}

test('programmatic popover close restores focus and nested trigger replacement keeps layer order', async () => {
  const open = ref(false);
  const child = ref(false);
  const version = ref(0);
  const wrapper = mount(
    _component(() => (
      <Popover
        open={open}
        label="父面板"
        trigger={(props) => (
          <Button key={version.value} {...props}>
            父触发器
          </Button>
        )}
      >
        <input aria-label="内容" />
        <Popover
          open={child}
          label="子面板"
          trigger={(props) => <Button {...props}>子触发器</Button>}
        >
          <input aria-label="子内容" />
        </Popover>
      </Popover>
    )),
    { attachTo: document.body },
  );
  cleanup.push(() => wrapper.unmount());
  await wrapper.get('button').trigger('click');
  await flushPromises();
  const input = document.querySelector<HTMLInputElement>('[aria-label="内容"]')!;
  input.focus();
  open.value = false;
  await nextTick();
  expect(document.activeElement?.textContent).toBe('父触发器');
  open.value = true;
  await nextTick();
  await flushPromises();
  child.value = true;
  await nextTick();
  await flushPromises();
  version.value++;
  await nextTick();
  await flushPromises();
  document.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }),
  );
  await nextTick();
  expect(child.value).toBe(false);
  expect(open.value).toBe(true);
});

test('tooltip remains while either hover or focus owns it, and Escape dismisses it', async () => {
  const wrapper = mount(
    _component(() => (
      <Tooltip
        content="说明"
        openDelay={0}
        closeDelay={0}
        trigger={(props) => <Button {...props}>提示</Button>}
      />
    )),
    { attachTo: document.body },
  );
  cleanup.push(() => wrapper.unmount());
  const button = wrapper.get('button');
  await button.trigger('pointerenter');
  await new Promise((resolve) => setTimeout(resolve, 5));
  await button.trigger('focus');
  await button.trigger('blur');
  await new Promise((resolve) => setTimeout(resolve, 5));
  expect(document.querySelector('[role="tooltip"]')?.textContent).toBe('说明');
  document.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }),
  );
  await nextTick();
  expect(document.querySelector('[role="tooltip"]')).toBeNull();
});

test('tooltip releases a removed hovered panel when disabled and re-enabled', async () => {
  const disabled = ref(false);
  const container = document.createElement('div');
  document.body.append(container);
  const wrapper = mount(
    _component(() => (
      <Tooltip
        disabled={disabled.value}
        content="说明"
        openDelay={0}
        closeDelay={0}
        trigger={(props) => <Button {...props}>提示</Button>}
      />
    )),
    { attachTo: container },
  );
  cleanup.push(() => {
    wrapper.unmount();
    container.remove();
  });
  const button = wrapper.get('button');
  await button.trigger('pointerenter');
  await new Promise((resolve) => setTimeout(resolve, 10));
  const panel = document.querySelector('[role="tooltip"]');
  expect(panel).not.toBeNull();
  panel!.dispatchEvent(new Event('pointerenter'));
  await button.trigger('pointerleave');
  disabled.value = true;
  await nextTick();
  expect(document.querySelector('[role="tooltip"]')).toBeNull();
  disabled.value = false;
  await nextTick();
  await button.trigger('pointerenter');
  await new Promise((resolve) => setTimeout(resolve, 10));
  expect(document.querySelector('[role="tooltip"]')).not.toBeNull();
  await button.trigger('pointerleave');
  await new Promise((resolve) => setTimeout(resolve, 10));
  expect(document.querySelector('[role="tooltip"]')).toBeNull();
});

test('drawer ignores an old close event after reopening and restores the last scroll lock', async () => {
  dialogMethods();
  const open = ref(false);
  const nested = ref(false);
  const wrapper = mount(
    _component(() => (
      <Drawer open={open} title="抽屉">
        <Drawer open={nested} title="嵌套" />
      </Drawer>
    )),
    { attachTo: document.body },
  );
  cleanup.push(() => wrapper.unmount());
  await nextTick();
  open.value = true;
  await nextTick();
  const element = Array.from(document.querySelectorAll('dialog')).find((dialog) => dialog.open)!;
  open.value = false;
  await nextTick();
  open.value = true;
  await nextTick();
  element.dispatchEvent(new Event('close'));
  await nextTick();
  expect(open.value).toBe(true);
  nested.value = true;
  await nextTick();
  nested.value = false;
  await nextTick();
  expect(document.documentElement.style.overflow).toBe('hidden');
  element.close();
  element.dispatchEvent(new Event('close'));
  await nextTick();
  expect(open.value).toBe(false);
  expect(document.documentElement.style.overflow).toBe('');
});

test('menu keeps link semantics, respects modifiers, expands groups and blocks disabled entries', async () => {
  const expanded = ref<readonly string[]>([]);
  const select = vi.fn();
  const wrapper = mount(
    _component(() => (
      <Menu
        activeKey="page"
        expandedKeys={expanded}
        onSelect={select}
        items={[
          {
            key: 'parent',
            label: '分组',
            children: [{ key: 'page', label: '页面', href: '#page' }],
          },
          { key: 'disabled', label: '禁用', href: '#disabled', disabled: true },
        ]}
      />
    )),
    { attachTo: document.body },
  );
  cleanup.push(() => wrapper.unmount());
  expect(wrapper.find('[role="menu"]').exists()).toBe(false);
  await wrapper.get('button').trigger('click');
  expect(expanded.value).toEqual(['parent']);
  const link = wrapper.get('a[href="#page"]');
  expect(link.attributes('aria-current')).toBe('page');
  await link.trigger('click', { ctrlKey: true });
  expect(select).not.toHaveBeenCalled();
  await link.trigger('click');
  expect(select).toHaveBeenCalledTimes(1);
  await wrapper.get('[aria-disabled="true"]').trigger('click');
  expect(select).toHaveBeenCalledTimes(1);
  expect(wrapper.get('[aria-disabled="true"]').attributes('href')).toBeUndefined();
  (link.element as HTMLElement).focus();
  expanded.value = [];
  await nextTick();
  expect(document.activeElement).toBe(wrapper.get('button').element);
});

test('sidebar reuses the same content node when media switches between inline and drawer', async () => {
  dialogMethods();
  const media = new EventTarget();
  let narrow = false;
  vi.stubGlobal('matchMedia', (query: string) => ({
    get matches() {
      return query.includes('max-width') && narrow;
    },
    addEventListener: media.addEventListener.bind(media),
    removeEventListener: media.removeEventListener.bind(media),
  }));
  const open = ref(false);
  const wrapper = mount(
    _component(() => (
      <Sidebar open={open}>
        <input aria-label="保留输入" />
      </Sidebar>
    )),
    { attachTo: document.body },
  );
  cleanup.push(() => wrapper.unmount());
  await nextTick();
  const input = document.querySelector<HTMLInputElement>('[aria-label="保留输入"]')!;
  input.value = '保留的草稿';
  narrow = true;
  media.dispatchEvent(new Event('change'));
  await nextTick();
  open.value = true;
  await nextTick();
  expect(document.querySelector('[aria-label="保留输入"]')).toBe(input);
  expect(input.closest('dialog')?.open).toBe(true);
  narrow = false;
  media.dispatchEvent(new Event('change'));
  await nextTick();
  expect(wrapper.get('input').element).toBe(input);
  expect(input.value).toBe('保留的草稿');
  expect(document.documentElement.style.overflow).toBe('');
});

test('SSR renders inline navigation once and keeps modal content hidden without DOM access', async () => {
  const html = await renderToString(
    createSSRApp(
      _component(() => (
        <>
          <Sidebar media="">
            <input value="SSR内容" />
          </Sidebar>
          <Breadcrumb
            maxItems={3}
            items={[
              { key: 'a', label: '一级', href: '#a' },
              { key: 'zv-overflow', label: '二级', href: '#b' },
              { key: 'c', label: '三级', href: '#c' },
              { key: 'd', label: '当前' },
            ]}
          />
          <Drawer open={ref(true)} title="待挂载抽屉">
            模态内容
          </Drawer>
        </>
      )),
    ),
  );
  expect(html.match(/SSR内容/g)).toHaveLength(1);
  expect(html).toContain('aria-current="page"');
  expect(html).not.toContain('role="menu"');
});

test('menu inherits sidebar compact state unless explicitly overridden', async () => {
  dialogMethods();
  const collapsed = ref(true);
  const wrapper = mount(
    _component(() => (
      <Sidebar media="" collapsed={collapsed}>
        <Menu
          items={[
            {
              key: 'section',
              label: '分组',
              children: [{ key: 'child', label: '子页', href: '#child' }],
            },
          ]}
        />
      </Sidebar>
    )),
    { attachTo: document.body },
  );
  cleanup.push(() => wrapper.unmount());
  await nextTick();
  expect(wrapper.get('nav button').attributes('aria-haspopup')).toBe('dialog');
  collapsed.value = false;
  await nextTick();
  expect(wrapper.get('nav button').attributes('aria-haspopup')).toBeUndefined();
});
