import { afterEach, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { renderToString } from '@vue/server-renderer';
import {
  computed,
  createApp,
  createSSRApp,
  h,
  isReactive,
  isReadonly,
  isRef,
  nextTick,
  reactive,
  ref,
  shallowRef,
  Teleport,
} from 'vue';
import type { Component } from 'vue';
import { _component, createCssHost, getCssHost } from '@zerodep-vue/core';
import { enUS, Provider, UiTheme, useCss, useLang, useTheme, zhCN } from '../src/index.ts';
import type { UiLanguageInput } from '../src/index.ts';

const views = new Map<
  string,
  { lang: ReturnType<typeof useLang>; theme: ReturnType<typeof useTheme> }
>();
const cleanup: (() => void)[] = [];

// 同时读取配置和 CSS，验证 Provider 在真实 TSX 渲染链路中使用同一个主题来源。
const Probe = _component(({ id = 'value' }: { id?: string }) => {
  const s = useCss();
  const lang = useLang();
  const theme = useTheme();
  views.set(id, { lang, theme });
  return (
    <output
      data-id={id}
      data-confirm={lang.confirm}
      data-cancel={lang.cancel}
      data-locale={lang.locale}
      data-zone={lang.timeZone}
      data-brand={theme.color._brand}
      data-text={theme.color._text}
      class={s.color('_brand')}
    >
      {lang.confirm}
    </output>
  );
});

function render(component: Component) {
  const host = createCssHost({ target: document.head, maxUnusedRules: 0 });
  const wrapper = mount(component, { global: { plugins: [host] } });
  cleanup.push(() => {
    wrapper.unmount();
    const references = host.stats().ownedReferences;
    host.dispose();
    expect(references).toBe(0);
  });
  return { wrapper, host };
}

afterEach(() => {
  try {
    while (cleanup.length) cleanup.pop()!();
  } finally {
    views.clear();
  }
});

test('defaults are available without Provider, and Provider adds no DOM container', () => {
  const { wrapper } = render(
    _component(() => (
      <>
        <Probe id="outside" />
        <Provider>
          <Probe id="inside" />
        </Provider>
      </>
    )),
  );
  expect(wrapper.findAll('*').map((node) => node.element.tagName)).toEqual(['OUTPUT', 'OUTPUT']);
  for (const id of ['outside', 'inside']) {
    const { lang, theme } = views.get(id)!;
    expect({ ...lang }).toEqual(zhCN);
    expect(theme.color._brand).toBe('#2563eb');
    for (const view of [lang, theme]) {
      expect(isRef(view)).toBe(false);
      expect(isReactive(view)).toBe(true);
      expect(isReadonly(view)).toBe(true);
    }
  }
  expect(useLang()).toEqual(zhCN);
});

test('reactive language fields inherit, override and resume independently in a stable view', async () => {
  const parent = reactive({ ...enUS, locale: 'en-GB', timeZone: 'Europe/London' });
  const local = reactive<UiLanguageInput>({ confirm: 'Save', timeZone: 'UTC' });
  const state = reactive<{ lang: UiLanguageInput | undefined }>({ lang: local });
  const { wrapper } = render(
    _component(() => (
      <Provider lang={parent}>
        <Provider lang={state.lang}>
          <Probe id="inner" />
        </Provider>
        <Probe id="sibling" />
      </Provider>
    )),
  );
  const inner = views.get('inner')!.lang;
  expect({ ...inner }).toEqual({ ...parent, confirm: 'Save', timeZone: 'UTC' });

  Object.assign(parent, {
    confirm: 'Yes',
    cancel: 'Stop',
    locale: 'fr-FR',
    timeZone: 'Europe/Paris',
  });
  await nextTick();
  expect(wrapper.get('[data-id="inner"]').attributes()).toMatchObject({
    'data-confirm': 'Save',
    'data-cancel': 'Stop',
    'data-locale': 'fr-FR',
    'data-zone': 'UTC',
  });
  expect(views.get('sibling')!.lang).toEqual(parent);

  local.confirm = '';
  await nextTick();
  expect(wrapper.get('[data-id="inner"]').text()).toBe('');
  local.confirm = undefined;
  local.timeZone = undefined;
  await nextTick();
  expect({ ...inner }).toEqual(parent);

  state.lang = { ...zhCN, timeZone: 'Asia/Shanghai' };
  await nextTick();
  expect(inner.locale).toBe('zh-CN');
  expect(inner.timeZone).toBe('Asia/Shanghai');
  // 完整预设携带文案、locale 和 timeZone；切换对象时一起覆盖父级配置。
  state.lang = enUS;
  await nextTick();
  expect({ ...inner }).toEqual(enUS);

  state.lang = undefined;
  await nextTick();
  expect({ ...inner }).toEqual(parent);
  expect(views.get('inner')!.lang).toBe(inner);
});

test('themes replace as a whole and follow reactive fields, nested refs and source replacement', async () => {
  class BrandTheme extends UiTheme {
    override readonly color = { ...new UiTheme().color, _brand: ref('#7c3aed') };
  }
  const parent = reactive(new UiTheme());
  parent.color._text = '#ffffff';
  const brand = new BrandTheme();
  const selected = shallowRef<UiTheme>(brand);
  const current = computed(() => selected.value);
  const state = reactive({ override: true });
  const { wrapper, host } = render(
    _component(() => (
      <Provider theme={parent}>
        <Provider theme={state.override ? current : undefined}>
          <Probe id="inner" />
        </Provider>
        <Provider theme={selected}>
          <Probe id="ref" />
        </Provider>
        <Probe id="sibling" />
      </Provider>
    )),
  );
  const theme = views.get('inner')!.theme;
  expect(theme.color._brand).toBe('#7c3aed');
  expect(theme.color._text).toBe('#0f172a');
  expect(views.get('sibling')!.theme.color._text).toBe('#ffffff');
  expect(host.stats().ownedReferences).toBe(3);
  expect(wrapper.get('[data-id="inner"]').attributes('style')).toContain('#7c3aed');
  expect(document.head.textContent).toContain('color:var(--zv-');

  brand.color._brand.value = '#e11d48';
  await nextTick();
  expect(wrapper.get('[data-id="inner"]').attributes('data-brand')).toBe('#e11d48');
  expect(wrapper.get('[data-id="inner"]').attributes('style')).toContain('#e11d48');

  selected.value = new UiTheme();
  await nextTick();
  expect(theme.color._brand).toBe('#2563eb');
  expect(views.get('ref')!.theme.color._brand).toBe('#2563eb');
  state.override = false;
  await nextTick();
  expect(theme.color._text).toBe('#ffffff');
  parent.color._brand = '#059669';
  await nextTick();
  expect(wrapper.get('[data-id="inner"]').attributes('data-brand')).toBe('#059669');
  expect(views.get('ref')!.theme.color._brand).toBe('#2563eb');
  expect(views.get('inner')!.theme).toBe(theme);
});

test('descendant views reject writes while caller-owned reactive sources remain editable', async () => {
  const lang = reactive({ ...enUS });
  const theme = reactive(new UiTheme());
  render(
    _component(() => (
      <Provider lang={lang} theme={theme}>
        <Probe />
      </Provider>
    )),
  );
  const view = views.get('value')!;
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  Reflect.set(view.lang, 'confirm', 'Changed by child');
  Reflect.set(view.theme.color, '_brand', '#000000');
  expect(warn).toHaveBeenCalled();
  expect(lang.confirm).toBe(enUS.confirm);
  expect(theme.color._brand).toBe('#2563eb');

  lang.confirm = 'Changed by owner';
  theme.color._brand = '#f97316';
  await nextTick();
  expect(view.lang.confirm).toBe('Changed by owner');
  expect(view.theme.color._brand).toBe('#f97316');

  if (false) {
    // @ts-expect-error 后代只能读取语言配置。
    view.lang.confirm = 'Forbidden';
    // @ts-expect-error 后代只能读取主题字段。
    view.theme.color._brand = '#000000';
    // @ts-expect-error 文案直接位于 lang 上，不再保留 messages 层。
    view.lang.messages.confirm;
  }
});

test('teleported children keep the logical Provider context', async () => {
  const target = document.createElement('div');
  document.body.append(target);
  cleanup.push(() => target.remove());
  const lang = reactive({ ...enUS, confirm: 'In portal', timeZone: 'Asia/Shanghai' });
  render(
    _component(() => (
      <Provider lang={lang}>
        <Teleport to={target}>
          <Probe />
        </Teleport>
      </Provider>
    )),
  );
  expect(target.querySelector('output')?.textContent).toBe('In portal');
  lang.confirm = 'Updated portal';
  await nextTick();
  expect(target.querySelector('output')?.textContent).toBe('Updated portal');
  expect(views.get('value')!.lang.timeZone).toBe('Asia/Shanghai');
});

test('SSR requests isolate configuration and hydrate the same resolved language and theme', async () => {
  const requests = [
    { id: 'zh', lang: { ...zhCN, timeZone: 'Asia/Shanghai' }, color: '#7c3aed' },
    { id: 'en', lang: enUS, color: '#059669' },
  ].map(({ id, lang, color }) => {
    const theme = new UiTheme();
    theme.color._brand = color;
    return {
      id,
      lang,
      color,
      context: {},
      component: _component(() => (
        <Provider theme={theme} lang={lang}>
          <Probe id={id} />
        </Provider>
      )),
    };
  });
  try {
    const html = await Promise.all(
      requests.map((request) => renderToString(createSSRApp(request.component), request.context)),
    );
    for (const [index, request] of requests.entries()) {
      expect(html[index]).toContain(`data-locale="${request.lang.locale}"`);
      expect(html[index]).toContain(`data-zone="${request.lang.timeZone}"`);
      expect(html[index]).toContain(`data-brand="${request.color}"`);
      expect(getCssHost(request.context)?.renderStyles()).toContain('color:var(--zv-');
      const markup = document.createElement('template');
      markup.innerHTML = html[index]!;
      expect(markup.content.querySelector('output')?.getAttribute('style')).toContain(
        request.color,
      );
    }
    expect(getCssHost(requests[0]!.context)).not.toBe(getCssHost(requests[1]!.context));

    const request = requests[0]!;
    const container = document.createElement('div');
    container.innerHTML = html[0]!;
    const original = container.querySelector('output');
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const app = createSSRApp(request.component);
    try {
      app.mount(container);
      expect(container.querySelector('output')).toBe(original);
      expect(container.textContent).toBe(zhCN.confirm);
      expect(warn).not.toHaveBeenCalled();
      expect(error).not.toHaveBeenCalled();
    } finally {
      app.unmount();
    }
  } finally {
    for (const request of requests) getCssHost(request.context)?.dispose();
  }
});

test('locale canonicalization preserves the explicit time-zone identifier', () => {
  render(
    _component(() => (
      <Provider lang={{ locale: 'en-us', timeZone: 'Etc/UTC' }}>
        <Probe />
      </Provider>
    )),
  );
  expect(views.get('value')!.lang.locale).toBe('en-US');
  expect(views.get('value')!.lang.timeZone).toBe('Etc/UTC');
});

test.each([
  [null, 'Provider.lang 需要配置对象'],
  [{ confirm: 42 }, 'Provider.lang.confirm 需要字符串'],
  [{ locale: '' }, 'Provider.lang.locale 无效'],
  [{ locale: 'not_a_locale' }, 'Provider.lang.locale 无效'],
  [{ timeZone: 'Mars/Olympus' }, 'Provider.lang.timeZone 无效'],
])(
  'invalid language input %j reports the field instead of silently inheriting',
  (lang, message) => {
    const errors: unknown[] = [];
    const app = createApp({
      render: () => h(Provider, { lang: lang as UiLanguageInput }, { default: () => h(Probe) }),
    });
    app.config.errorHandler = (error) => errors.push(error);
    try {
      app.mount(document.createElement('div'));
      expect(errors).toHaveLength(1);
      expect((errors[0] as Error).message).toContain(message);
    } finally {
      app.unmount();
    }
  },
);
