import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { renderToString } from '@vue/server-renderer';
import { computed, createApp, createSSRApp, nextTick, ref, shallowRef } from 'vue';
import type { Component } from 'vue';
import { _component, createCssHost, getCssHost } from '@zerodep-vue/core';
import { Ellipsis, Link, Provider, enUS } from '../src/index.ts';
import type { UiLanguageInput } from '../src/index.ts';

class ResizeProbe implements ResizeObserver {
  static instances: ResizeProbe[] = [];
  readonly targets = new Set<Element>();
  disconnected = false;
  constructor(private callback: ResizeObserverCallback) {
    ResizeProbe.instances.push(this);
  }
  observe(target: Element) {
    this.targets.add(target);
  }
  unobserve(target: Element) {
    this.targets.delete(target);
  }
  disconnect() {
    this.disconnected = true;
    this.targets.clear();
  }
  notify() {
    this.callback([], this);
  }
}

const cleanup: (() => void)[] = [];
const frames = new Map<number, FrameRequestCallback>();
let frameId = 0;
let geometry = { clientWidth: 100, clientHeight: 20, scrollWidth: 100, scrollHeight: 20 };
let fonts: EventTarget;
let originalFonts: PropertyDescriptor | undefined;

beforeEach(() => {
  geometry = { clientWidth: 100, clientHeight: 20, scrollWidth: 100, scrollHeight: 20 };
  frameId = 0;
  frames.clear();
  ResizeProbe.instances = [];
  vi.stubGlobal('ResizeObserver', ResizeProbe);
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    frames.set(++frameId, callback);
    return frameId;
  });
  vi.spyOn(window, 'cancelAnimationFrame').mockImplementation((id) => {
    frames.delete(id);
  });
  for (const name of ['clientWidth', 'clientHeight', 'scrollWidth', 'scrollHeight'] as const)
    vi.spyOn(Element.prototype, name, 'get').mockImplementation(function (this: Element) {
      return this.id.startsWith('zv-ellipsis-') ? geometry[name] : 0;
    });
  originalFonts = Object.getOwnPropertyDescriptor(document, 'fonts');
  fonts = Object.assign(new EventTarget(), { ready: Promise.resolve() });
  Object.defineProperty(document, 'fonts', { configurable: true, value: fonts });
});

afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
  if (originalFonts) Object.defineProperty(document, 'fonts', originalFonts);
  else Reflect.deleteProperty(document, 'fonts');
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  frames.clear();
});

async function flushLayout() {
  for (let attempt = 0; attempt < 6; attempt++) {
    await nextTick();
    await Promise.resolve();
    if (!frames.size) return;
    const pending = [...frames.values()];
    frames.clear();
    for (const callback of pending) callback(performance.now());
  }
  throw new Error('Ellipsis 测量未收敛。');
}

function render(component: Component) {
  const style = document.createElement('style');
  document.head.append(style);
  const target = document.createElement('div');
  document.body.append(target);
  const host = createCssHost({ target: style, maxUnusedRules: 0 });
  const wrapper = mount(component, { attachTo: target, global: { plugins: [host] } });
  let disposed = false;
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    wrapper.unmount();
    const references = host.stats().ownedReferences;
    host.dispose();
    style.remove();
    target.remove();
    expect(references).toBe(0);
  };
  cleanup.push(dispose);
  return { wrapper, dispose, css: () => style.textContent ?? '' };
}

test('pure CSS clipping keeps complete content, native attrs and reactive line counts without observers', async () => {
  const lines = ref(1);
  const text = ref('完整内容');
  const { wrapper, css } = render(
    _component(() => (
      <Ellipsis id="clip" dir="rtl" title="完整内容" lines={lines.value}>
        <em>{text.value}</em>
      </Ellipsis>
    )),
  );
  await flushLayout();
  expect(wrapper.attributes()).toMatchObject({ id: 'clip', dir: 'rtl', title: '完整内容' });
  expect(wrapper.get('em').text()).toBe('完整内容');
  expect(wrapper.find('button').exists()).toBe(false);
  expect(wrapper.get('span[id^="zv-ellipsis-"]').attributes('tabindex')).toBeUndefined();
  expect(css()).toContain('white-space:nowrap');
  expect(ResizeProbe.instances).toHaveLength(0);
  lines.value = 3;
  text.value = '内容更新后仍然完整';
  await flushLayout();
  expect(wrapper.text()).toBe('内容更新后仍然完整');
  expect(css()).toContain('-webkit-box-orient:vertical');
  expect(css()).toContain('-webkit-line-clamp:');
  expect(css()).toContain('line-clamp:');
  expect(wrapper.get('span[id^="zv-ellipsis-"]').attributes('style')).toContain('3');
  expect(wrapper.attributes('lines')).toBeUndefined();
  expect(wrapper.attributes('expanded')).toBeUndefined();
});

test('overflow measures changes from size, inherited styles, content and fonts only when needed', async () => {
  const notify = vi.fn();
  const { wrapper } = render(_component(() => <Ellipsis onOverflowChange={notify}>内容</Ellipsis>));
  await flushLayout();
  expect(notify.mock.calls).toEqual([[false]]);
  const observer = ResizeProbe.instances[0]!;
  expect(observer.targets.size).toBe(2);
  geometry.scrollWidth = 220;
  observer.notify();
  observer.notify();
  await flushLayout();
  expect(notify.mock.calls).toEqual([[false], [true]]);
  geometry.scrollWidth = 100;
  fonts.dispatchEvent(new Event('loadingdone'));
  await flushLayout();
  expect(notify.mock.calls).toEqual([[false], [true], [false]]);
  geometry.scrollHeight = 40;
  wrapper.element.parentElement!.style.fontWeight = '700';
  await flushLayout();
  expect(notify.mock.calls.at(-1)).toEqual([true]);
  geometry.scrollHeight = 20;
  wrapper.get('span[id^="zv-ellipsis-"]').element.textContent = '宿主更新';
  await flushLayout();
  expect(notify.mock.calls.at(-1)).toEqual([false]);
  expect(notify).toHaveBeenCalledTimes(5);
});

test('inline overflow callbacks can update their parent without repeating notifications or observers', async () => {
  geometry.scrollWidth = 300;
  const reports = ref<boolean[]>([]);
  const { wrapper } = render(
    _component(() => (
      <div>
        <Ellipsis onOverflowChange={(value) => reports.value.push(value)}>长内容</Ellipsis>
        <output>{reports.value.join(',')}</output>
      </div>
    )),
  );
  await flushLayout();
  expect(reports.value).toEqual([true]);
  expect(wrapper.get('output').text()).toBe('true');
  expect(ResizeProbe.instances).toHaveLength(1);
  geometry.scrollWidth = 100;
  ResizeProbe.instances[0]!.notify();
  await flushLayout();
  expect(reports.value).toEqual([true, false]);
  expect(ResizeProbe.instances).toHaveLength(1);
});

test('a listener added after disclosure measurement still receives the initial observed state', async () => {
  geometry.scrollWidth = 300;
  const listener = shallowRef<((overflowing: boolean) => void) | undefined>();
  const notify = vi.fn();
  render(
    _component(() => (
      <Ellipsis expandable onOverflowChange={listener.value}>
        内容
      </Ellipsis>
    )),
  );
  await flushLayout();
  listener.value = notify;
  await flushLayout();
  expect(notify.mock.calls).toEqual([[true]]);
  expect(ResizeProbe.instances).toHaveLength(1);
});

test('expand and collapse write back the Ref, retain focus, inherit language and recover when content fits', async () => {
  geometry.scrollWidth = 300;
  const expanded = ref(false);
  const lang = ref<UiLanguageInput>({ expand: '查看全文' });
  const notify = vi.fn();
  const { wrapper } = render(
    _component(() => (
      <Provider lang={lang}>
        <Ellipsis id="clip" expandable expanded={expanded} onOverflowChange={notify}>
          长内容
        </Ellipsis>
      </Provider>
    )),
  );
  await flushLayout();
  const button = wrapper.get('button');
  const element = button.element;
  const content = wrapper.get('span[id^="zv-ellipsis-"]');
  expect(button.text()).toBe('查看全文');
  expect(button.attributes()).toMatchObject({
    type: 'button',
    'aria-expanded': 'false',
    'aria-controls': content.attributes('id'),
  });
  button.element.focus();
  await button.trigger('click');
  await flushLayout();
  expect(expanded.value).toBe(true);
  expect(wrapper.get('button').element).toBe(element);
  expect(document.activeElement).toBe(element);
  expect(wrapper.get('button').attributes('aria-expanded')).toBe('true');
  expect(wrapper.get('button').text()).toBe('收起');
  expect(notify.mock.calls.at(-1)).toEqual([false]);
  lang.value = enUS;
  await flushLayout();
  expect(wrapper.get('button').text()).toBe('Show less');
  await wrapper.get('button').trigger('click');
  await flushLayout();
  expect(expanded.value).toBe(false);
  expect(wrapper.get('button').element).toBe(element);
  expect(document.activeElement).toBe(element);
  expect(notify.mock.calls.at(-1)).toEqual([true]);
  geometry.scrollWidth = 100;
  ResizeProbe.instances[0]!.notify();
  await flushLayout();
  expect(wrapper.find('button').exists()).toBe(false);
  expect(document.activeElement).toBe(content.element);
});

test('default models are per instance and observation follows reactive feature toggles', async () => {
  geometry.scrollWidth = 300;
  const expandable = ref(false);
  const { wrapper } = render(
    _component(() => (
      <div>
        <Ellipsis expandable={expandable.value}>一</Ellipsis>
        <Ellipsis expandable={expandable.value}>二</Ellipsis>
      </div>
    )),
  );
  await flushLayout();
  expect(ResizeProbe.instances).toHaveLength(0);
  expandable.value = true;
  await flushLayout();
  expect(wrapper.findAll('button')).toHaveLength(2);
  await wrapper.findAll('button')[0]!.trigger('click');
  await flushLayout();
  expect(wrapper.findAll('button').map((button) => button.attributes('aria-expanded'))).toEqual([
    'true',
    'false',
  ]);
  expandable.value = false;
  await flushLayout();
  expect(wrapper.find('button').exists()).toBe(false);
  expect(ResizeProbe.instances.every((observer) => observer.disconnected)).toBe(true);
});

test('unmount cancels pending frames and releases observers and event listeners', async () => {
  const notify = vi.fn();
  const { dispose } = render(_component(() => <Ellipsis onOverflowChange={notify}>内容</Ellipsis>));
  await flushLayout();
  const observer = ResizeProbe.instances[0]!;
  observer.notify();
  expect(frames.size).toBe(1);
  dispose();
  expect(observer.disconnected).toBe(true);
  expect(frames.size).toBe(0);
  observer.notify();
  fonts.dispatchEvent(new Event('loadingdone'));
  window.dispatchEvent(new Event('resize'));
  await flushLayout();
  expect(frames.size).toBe(0);
  expect(notify).toHaveBeenCalledTimes(1);
});

test('invalid line counts fail at the component boundary', () => {
  for (const lines of [0, -1, 1.5, Infinity, NaN]) {
    const errors: unknown[] = [];
    const app = createApp(Ellipsis, { lines });
    app.config.errorHandler = (error) => errors.push(error);
    app.mount(document.createElement('div'));
    try {
      expect(errors.some((error) => String(error).includes('Ellipsis lines 必须是正整数'))).toBe(
        true,
      );
    } finally {
      app.unmount();
    }
  }
});

test('SSR renders full content and stable disclosure ids before hydration measures layout', async () => {
  const App = _component(() => {
    const expanded = ref(true);
    return (
      <Provider lang={enUS}>
        <Link href="/detail">
          <Ellipsis lines={2}>完整文本一</Ellipsis>
        </Link>
        <Ellipsis lines={2} expandable expanded={expanded}>
          完整文本二
        </Ellipsis>
      </Provider>
    );
  });
  const context = {};
  const html = await renderToString(createSSRApp(App), context);
  const serverHost = getCssHost(context)!;
  expect(html).toContain('完整文本一');
  expect(html).toContain('完整文本二');
  expect(html.match(/<button/g)).toHaveLength(1);
  expect(ResizeProbe.instances).toHaveLength(0);
  const target = document.createElement('div');
  target.innerHTML = html;
  document.body.append(target);
  const ids = [...target.querySelectorAll('span[id]')].map((element) => element.id);
  expect(new Set(ids).size).toBe(2);
  expect(target.querySelector('a [tabindex]')).toBeNull();
  const button = target.querySelector('button');
  const host = createCssHost({ target: document.head, maxUnusedRules: 0 });
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  const error = vi.spyOn(console, 'error').mockImplementation(() => {});
  const app = createSSRApp(App).use(host);
  try {
    app.mount(target);
    await flushLayout();
    expect(target.querySelector('button')).toBe(button);
    expect([...target.querySelectorAll('span[id]')].map((element) => element.id)).toEqual(ids);
    expect(warn).not.toHaveBeenCalled();
    expect(error).not.toHaveBeenCalled();
  } finally {
    app.unmount();
    target.remove();
    host.dispose();
    serverHost.dispose();
  }
});

function typeContracts() {
  <Ellipsis
    lines={3}
    expandable
    expanded={ref(false)}
    onOverflowChange={(value) => {
      const overflowing: boolean = value;
      void overflowing;
    }}
  >
    内容
  </Ellipsis>;
  // @ts-expect-error 行数使用数字。
  <Ellipsis lines="3" />;
  // @ts-expect-error 展开状态使用可写 Ref。
  <Ellipsis expanded={false} />;
  // @ts-expect-error 不接受只读 computed 作为可写状态。
  <Ellipsis expanded={computed(() => false)} />;
  // @ts-expect-error 子树由 children 管理。
  <Ellipsis innerHTML="<b>bad</b>" />;
}
void typeContracts;
