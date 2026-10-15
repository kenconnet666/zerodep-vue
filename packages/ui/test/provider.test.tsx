import { afterEach, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { renderToString } from '@vue/server-renderer';
import {
  computed,
  createSSRApp,
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
import {
  DarkTheme,
  enUS,
  LightTheme,
  Provider,
  useCss,
  useLang,
  useTheme,
  zhCN,
} from '../src/index.ts';
import type { UiLanguageInput, UiTheme } from '../src/index.ts';

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

function luminance(hex: string): number {
  const weights = [0.2126, 0.7152, 0.0722];
  return weights.reduce((sum, weight, index) => {
    const channel = Number.parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16) / 255;
    const linear = channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    return sum + linear * weight;
  }, 0);
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
    expect(lang.confirm).toBe('确认');
    expect(lang.locale).toBe('zh-CN');
    expect(lang.timeZone).toBe('Asia/Shanghai');
    expect(theme.color._brand).toBe('#2563eb');
    expect(theme.color._surface).toBe('#ffffff');
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
  expect(inner.locale).toBe('fr-FR');
  expect(inner.timeZone).toBe('UTC');
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

  state.lang = zhCN;
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
  class BrandTheme extends LightTheme {
    override readonly color = { ...new LightTheme().color, _brand: ref('#7c3aed') };
  }
  const parent = reactive(new LightTheme());
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

  selected.value = new DarkTheme();
  await nextTick();
  expect(theme.color._brand).toBe('#60a5fa');
  expect(theme.color._surface).toBe('#0f172a');
  expect(theme.fontFamily._ui).toBe(parent.fontFamily._ui);
  expect(theme.fontSize._body).toBe(parent.fontSize._body);
  expect(theme.borderRadius._control).toBe(parent.borderRadius._control);
  expect(views.get('ref')!.theme.color._brand).toBe('#60a5fa');
  state.override = false;
  await nextTick();
  expect(theme.color._text).toBe('#ffffff');
  parent.color._brand = '#059669';
  await nextTick();
  expect(wrapper.get('[data-id="inner"]').attributes('data-brand')).toBe('#059669');
  expect(views.get('ref')!.theme.color._brand).toBe('#60a5fa');
  expect(views.get('inner')!.theme).toBe(theme);
});

test('shared theme scales resolve in CSS with the correct units and remain owned by each instance', async () => {
  const selected = shallowRef<UiTheme>(new LightTheme());
  const Styled = _component(() => {
    const s = useCss();
    return (
      <div
        class={s
          .backgroundColor('_surface')
          .color('_text')
          .height('_control')
          .padding('_md')
          .margin('_sm')
          .gap('_xs')
          .fontSize('_body')
          .fontWeight('_medium')
          .lineHeight('_body')
          .borderRadius('_control')
          .borderWidth('_thin')
          .boxShadow('_md')
          .opacity('_disabled')
          .transitionDuration('_normal')
          .transitionTimingFunction('_standard')
          .zIndex('_dropdown')}
      >
        Theme
      </div>
    );
  });
  const { wrapper } = render(
    _component(() => (
      <Provider theme={selected}>
        <Styled />
      </Provider>
    )),
  );
  const element = wrapper.get('div').element as HTMLElement;
  const values = Array.from(element.style).map((key) => element.style.getPropertyValue(key));
  expect(values).toEqual(
    expect.arrayContaining([
      '#ffffff',
      '#0f172a',
      '2.285714em',
      '0.857143em',
      '0.571429em',
      '0.285714em',
      '0.875rem',
      '500',
      '1.5',
      '0.428571em',
      '0.071429em',
      '0 0.285714em 0.857143em rgba(15, 23, 42, 0.14)',
      '0.5',
      '180ms',
      'cubic-bezier(0.4, 0, 0.2, 1)',
      '1000',
    ]),
  );
  const className = element.className;
  selected.value = new DarkTheme();
  await nextTick();
  expect(element.className).toBe(className);
  expect(element.getAttribute('style')).toContain('rgba(0, 0, 0, 0.4)');

  const customized = new LightTheme();
  customized.padding._md = '2em';
  customized.fontSize._body = '1rem';
  expect(new LightTheme().padding._md).toBe('0.857143em');
  expect(new LightTheme().fontSize._body).toBe('0.875rem');
  expect(customized.gap._md).toBe('0.857143em');
  expect(selected.value.fontSize._body).toBe('0.875rem');
});

test.each([
  ['light', LightTheme],
  ['dark', DarkTheme],
] as const)(
  '%s theme keeps readable text on its paired surfaces and semantic fills',
  (_name, Theme) => {
    const color = reactive(new Theme()).color;
    const pairs: [string, string][] = [
      [color._text, color._surface],
      [color._textSecondary, color._surface],
      [color._textMuted, color._surface],
      [color._textPlaceholder, color._surface],
      [color._textInverse, color._surfaceInverse],
    ];
    for (const [base, hover, active, soft, foreground] of [
      [color._brand, color._brandHover, color._brandActive, color._brandSoft, color._onBrand],
      [color._info, color._infoHover, color._infoActive, color._infoSoft, color._onInfo],
      [
        color._success,
        color._successHover,
        color._successActive,
        color._successSoft,
        color._onSuccess,
      ],
      [
        color._warning,
        color._warningHover,
        color._warningActive,
        color._warningSoft,
        color._onWarning,
      ],
      [color._danger, color._dangerHover, color._dangerActive, color._dangerSoft, color._onDanger],
    ] as const) {
      pairs.push([foreground, base], [foreground, hover], [foreground, active], [base, soft]);
    }
    for (const [foreground, background] of pairs) {
      const lighter = Math.max(luminance(foreground), luminance(background));
      const darker = Math.min(luminance(foreground), luminance(background));
      expect(
        (lighter + 0.05) / (darker + 0.05),
        `${foreground} on ${background}`,
      ).toBeGreaterThanOrEqual(4.5);
    }
  },
);

test('descendant views reject writes while caller-owned reactive sources remain editable', async () => {
  const lang = reactive({ ...enUS });
  const theme = reactive(new LightTheme());
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
  expect(view.lang.confirm).toBe('Changed by owner');
  expect(view.theme.color._brand).toBe('#f97316');
  await nextTick();

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
    { id: 'zh', lang: zhCN, color: '#7c3aed' },
    { id: 'en', lang: enUS, color: '#059669' },
  ].map(({ id, lang, color }) => {
    const theme = new LightTheme();
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

test('language formatting settings pass through without normalization', () => {
  render(
    _component(() => (
      <Provider lang={{ locale: 'en-us', timeZone: 'Etc/UTC' }}>
        <Probe />
      </Provider>
    )),
  );
  expect(views.get('value')!.lang.locale).toBe('en-us');
  expect(views.get('value')!.lang.timeZone).toBe('Etc/UTC');
});
