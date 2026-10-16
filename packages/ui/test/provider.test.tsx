import { renderToString } from '@vue/server-renderer';
import { mount } from '@vue/test-utils';
import { _button, _component, _div, _output, createCssHost, getCssHost } from '@zerodep-vue/core';
import { afterEach, expect, test, vi } from 'vitest';
import type { Component } from 'vue';
import {
  Teleport,
  computed,
  createSSRApp,
  isReactive,
  isReadonly,
  isRef,
  nextTick,
  reactive,
  ref,
  shallowRef,
} from 'vue';
import type { ProviderProps, UiLanguageInput, UiTheme, UiThemeInput } from '../src/index.ts';
import {
  DarkTheme,
  LightTheme,
  Provider,
  enUS,
  useCss,
  useLang,
  useTheme,
  zhCN,
} from '../src/index.ts';
const views = new Map<
  string,
  {
    lang: ReturnType<typeof useLang>;
    theme: ReturnType<typeof useTheme>;
  }
>();
const cleanup: (() => void)[] = [];

// 同时读取配置和 CSS，验证 Provider 在真实 TSX 渲染链路中使用同一个主题来源。
const Probe = _component(({ id = 'value' }: { id?: string }) => {
  const css = useCss();
  const lang = useLang();
  const theme = useTheme();
  views.set(id, {
    lang,
    theme,
  });
  return (
    <_output
      css={css({
        color: '_primary',
      })}
      data-id={id}
      data-confirm={lang.confirm}
      data-cancel={lang.cancel}
      data-locale={lang.locale}
      data-zone={lang.timeZone}
      data-primary={theme.color._primary}
      data-text={theme.color._textPrimary}
    >
      {lang.confirm}
    </_output>
  );
});
function render(component: Component) {
  const host = createCssHost({
    target: document.head,
    maxUnusedRules: 0,
  });
  const wrapper = mount(component, {
    global: {
      plugins: [host],
    },
  });
  cleanup.push(() => {
    wrapper.unmount();
    const references = host.stats().ownedReferences;
    host.dispose();
    expect(references).toBe(0);
  });
  return {
    wrapper,
    host,
  };
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
test('Provider forwards rest to its div for explicit children and default slots', async () => {
  const click = vi.fn();
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  const rest = {
    class: 'provider',
    title: 'region',
    onClick: click,
  };
  const App = _component(() => (
    <>
      <Provider
        id="explicit"
        {...rest}
        theme={new DarkTheme()}
        lang={enUS}
        children={<_button>explicit</_button>}
      />
      <Provider id="nested" {...rest}>
        <_button>nested</_button>
      </Provider>
    </>
  ));
  const { wrapper } = render(App);
  expect(wrapper.findAll('div.provider')).toHaveLength(2);
  for (const div of wrapper.findAll('div.provider')) {
    expect(div.attributes('title')).toBe('region');
    expect(div.attributes('theme')).toBeUndefined();
    expect(div.attributes('lang')).toBeUndefined();
    expect(div.element.firstElementChild?.tagName).toBe('BUTTON');
  }
  for (const button of wrapper.findAll('button')) {
    expect(button.attributes('id')).toBeUndefined();
    expect(button.attributes('class')).toBeUndefined();
    await button.trigger('click');
  }
  expect(click).toHaveBeenCalledTimes(2);
  const html = await renderToString(createSSRApp(App));
  const markup = document.createElement('template');
  markup.innerHTML = html;
  expect(markup.content.querySelector('div#explicit.provider > button')?.textContent).toBe(
    'explicit',
  );
  expect(markup.content.querySelector('div#nested.provider > button')?.textContent).toBe('nested');
  expect(html).not.toContain('theme=');
  expect(html).not.toContain('lang=');
  expect(warn).not.toHaveBeenCalled();
});
test('Provider div updates and removes native props, CSS input and event listeners', async () => {
  const click = vi.fn();
  const rest = shallowRef<Pick<ProviderProps, 'id' | 'style' | 'onClick'>>({
    id: 'first',
    style: {
      padding: '2px',
    },
    onClick: click,
  });
  const styled = ref(true);
  const App = _component(() => {
    const css = useCss();
    return (
      <Provider
        css={
          styled.value
            ? css({
                color: 'red',
              })
            : undefined
        }
        {...rest.value}
      >
        <_button>action</_button>
      </Provider>
    );
  });
  const { wrapper, host } = render(App);
  expect(wrapper.element.tagName).toBe('DIV');
  expect(wrapper.attributes('id')).toBe('first');
  expect(wrapper.attributes('style')).toContain('padding: 2px');
  expect(wrapper.classes().some((name) => name.startsWith('zv-'))).toBe(true);
  expect(document.head.textContent).toContain('color:var(--zv-');
  expect(wrapper.attributes('style')).toContain('red');
  expect(host.stats().ownedReferences).toBe(1);
  expect(wrapper.get('button').attributes('class')).toBeUndefined();
  await wrapper.get('button').trigger('click');
  expect(click).toHaveBeenCalledTimes(1);
  rest.value = {};
  styled.value = false;
  await nextTick();
  expect(wrapper.attributes('id')).toBeUndefined();
  expect(wrapper.attributes('style') ?? '').toBe('');
  expect(wrapper.attributes('class') ?? '').toBe('');
  expect(host.stats().ownedReferences).toBe(0);
  await wrapper.get('button').trigger('click');
  expect(click).toHaveBeenCalledTimes(1);
});
test('defaults are available without Provider, and Provider renders one div', () => {
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
  expect(wrapper.findAll('*').map((node) => node.element.tagName)).toEqual([
    'OUTPUT',
    'DIV',
    'OUTPUT',
  ]);
  for (const id of ['outside', 'inside']) {
    const { lang, theme } = views.get(id)!;
    expect({
      ...lang,
    }).toEqual(zhCN);
    expect(lang.confirm).toBe('确认');
    expect(lang.locale).toBe('zh-CN');
    expect(lang.timeZone).toBe('Asia/Shanghai');
    expect(theme.color._primary).toBe('#2563eb');
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
  const parent = reactive({
    ...enUS,
    locale: 'en-GB',
    timeZone: 'Europe/London',
  });
  const local = reactive<UiLanguageInput>({
    confirm: 'Save',
    timeZone: 'UTC',
  });
  const state = reactive<{
    lang: UiLanguageInput | undefined;
  }>({
    lang: local,
  });
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
  expect({
    ...inner,
  }).toEqual({
    ...parent,
    confirm: 'Save',
    timeZone: 'UTC',
  });
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
  expect({
    ...inner,
  }).toEqual(parent);
  state.lang = zhCN;
  await nextTick();
  expect(inner.locale).toBe('zh-CN');
  expect(inner.timeZone).toBe('Asia/Shanghai');
  // 完整预设携带文案、locale 和 timeZone；切换对象时一起覆盖父级配置。
  state.lang = enUS;
  await nextTick();
  expect({
    ...inner,
  }).toEqual(enUS);
  state.lang = undefined;
  await nextTick();
  expect({
    ...inner,
  }).toEqual(parent);
  expect(views.get('inner')!.lang).toBe(inner);
});
test('partial theme fields follow the parent across source switches and resume inheritance', async () => {
  const parent = shallowRef<UiTheme>(reactive(new DarkTheme()));
  const brand = ref<string | undefined>('#7c3aed');
  const local = reactive<UiThemeInput>({
    color: {
      _primary: brand,
    },
    borderRadius: {
      _medium: 0,
    },
    opacity: {
      _disabled: 0,
    },
  });
  const state = reactive<{
    theme: UiThemeInput | undefined;
  }>({
    theme: local,
  });
  const { wrapper } = render(
    _component(() => (
      <Provider theme={parent}>
        <Provider theme={state.theme}>
          <Probe id="inner" />
          <Provider
            theme={{
              fontWeight: {
                _medium: 700,
              },
            }}
          >
            <Probe id="deeper" />
          </Provider>
        </Provider>
        <Probe id="sibling" />
      </Provider>
    )),
  );
  const theme = views.get('inner')!.theme;
  const colors = theme.color;
  const deeper = views.get('deeper')!.theme;
  expect(theme.color._primary).toBe('#7c3aed');
  expect(theme.color._surface).toBe('#0f172a');
  expect(theme.color._textPrimary).toBe('#f1f5f9');
  expect(theme.borderRadius._medium).toBe(0);
  expect(theme.opacity._disabled).toBe(0);
  expect(deeper.color._primary).toBe('#7c3aed');
  expect(deeper.fontWeight._medium).toBe(700);
  expect(views.get('sibling')!.theme.color._primary).toBe('#60a5fa');
  expect(parent.value.color._primary).toBe('#60a5fa');
  parent.value.color._textPrimary = '#e2e8f0';
  parent.value.fontSize._medium = '1rem';
  expect(theme.color._textPrimary).toBe('#e2e8f0');
  expect(deeper.fontSize._medium).toBe('1rem');
  parent.value = new LightTheme();
  expect(theme.color._primary).toBe('#7c3aed');
  expect(theme.color._surface).toBe('#ffffff');
  expect(deeper.color._textPrimary).toBe('#0f172a');
  expect(deeper.fontSize._medium).toBe('0.875rem');
  await nextTick();
  expect(wrapper.get('[data-id="inner"]').attributes('style')).toContain('#7c3aed');
  brand.value = undefined;
  expect(theme.color._primary).toBe('#2563eb');
  brand.value = '#e11d48';
  expect(deeper.color._primary).toBe('#e11d48');
  delete local.color!._primary;
  expect(theme.color._primary).toBe('#2563eb');
  local.color = {
    _primary: '#f97316',
  };
  expect(theme.color._primary).toBe('#f97316');
  local.color = undefined;
  expect(theme.color._primary).toBe('#2563eb');
  state.theme = undefined;
  await nextTick();
  expect(theme.borderRadius._medium).toBe(parent.value.borderRadius._medium);
  expect(theme.opacity._disabled).toBe(0.5);
  expect(views.get('inner')!.theme).toBe(theme);
  expect(theme.color).toBe(colors);
  expect(deeper.fontWeight._medium).toBe(700);
});
test('theme and language sources accept refs and computed values that restore inheritance', async () => {
  const theme = shallowRef<UiThemeInput | undefined>({
    color: {
      _primary: '#7c3aed',
    },
  });
  const lang = shallowRef<UiLanguageInput | undefined>({
    confirm: '保存',
    timeZone: 'Europe/London',
  });
  const selectedTheme = computed(() => theme.value);
  const selectedLang = computed(() => lang.value);
  const parentTheme = new DarkTheme();
  const { wrapper } = render(
    _component(() => (
      <Provider theme={parentTheme} lang={enUS}>
        <Provider theme={selectedTheme} lang={selectedLang}>
          <Probe id="computed" />
        </Provider>
        <Provider theme={theme} lang={lang}>
          <Probe id="ref" />
        </Provider>
      </Provider>
    )),
  );
  for (const id of ['computed', 'ref']) {
    const view = views.get(id)!;
    expect(view.theme.color._primary).toBe('#7c3aed');
    expect(view.theme.color._surface).toBe('#0f172a');
    expect({
      ...view.lang,
    }).toEqual({
      ...enUS,
      confirm: '保存',
      timeZone: 'Europe/London',
    });
  }
  theme.value = undefined;
  lang.value = undefined;
  for (const id of ['computed', 'ref']) {
    const view = views.get(id)!;
    expect(view.theme.color._primary).toBe('#60a5fa');
    expect({
      ...view.lang,
    }).toEqual(enUS);
  }
  await nextTick();
  expect(wrapper.get('[data-id="computed"]').text()).toBe('Confirm');
  expect(wrapper.get('[data-id="ref"]').attributes('style')).toContain('#60a5fa');
});
test('complete themes override every field and follow reactive fields, nested refs and source replacement', async () => {
  class BrandTheme extends LightTheme {
    override readonly color = {
      ...new LightTheme().color,
      _primary: ref('#7c3aed'),
    };
  }
  const parent = reactive(new LightTheme());
  parent.color._textPrimary = '#ffffff';
  const brand = new BrandTheme();
  const selected = shallowRef<UiTheme>(brand);
  const current = computed(() => selected.value);
  const state = reactive({
    override: true,
  });
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
  expect(theme.color._primary).toBe('#7c3aed');
  expect(theme.color._textPrimary).toBe('#0f172a');
  expect(views.get('sibling')!.theme.color._textPrimary).toBe('#ffffff');
  expect(host.stats().ownedReferences).toBe(3);
  expect(wrapper.get('[data-id="inner"]').attributes('style')).toContain('#7c3aed');
  expect(document.head.textContent).toContain('color:var(--zv-');
  brand.color._primary.value = '#e11d48';
  await nextTick();
  expect(wrapper.get('[data-id="inner"]').attributes('data-primary')).toBe('#e11d48');
  expect(wrapper.get('[data-id="inner"]').attributes('style')).toContain('#e11d48');
  selected.value = new DarkTheme();
  await nextTick();
  expect(theme.color._primary).toBe('#60a5fa');
  expect(theme.color._surface).toBe('#0f172a');
  expect(theme.fontFamily._ui).toBe(parent.fontFamily._ui);
  expect(theme.fontSize._medium).toBe(parent.fontSize._medium);
  expect(theme.borderRadius._medium).toBe(parent.borderRadius._medium);
  expect(views.get('ref')!.theme.color._primary).toBe('#60a5fa');
  state.override = false;
  await nextTick();
  expect(theme.color._textPrimary).toBe('#ffffff');
  parent.color._primary = '#059669';
  await nextTick();
  expect(wrapper.get('[data-id="inner"]').attributes('data-primary')).toBe('#059669');
  expect(views.get('ref')!.theme.color._primary).toBe('#60a5fa');
  expect(views.get('inner')!.theme).toBe(theme);
});
test('shared theme scales resolve in CSS with the correct units and remain owned by each instance', async () => {
  const selected = shallowRef<UiTheme>(new LightTheme());
  const Styled = _component(() => {
    const css = useCss();
    return (
      <_div
        css={css({
          backgroundColor: '_surface',
          color: '_textPrimary',
          height: '_medium',
          padding: '_medium',
          margin: '_small',
          gap: '_extraSmall',
          rowGap: '_small',
          columnGap: '_large',
          strokeWidth: '_medium',
          fontSize: '_medium',
          fontWeight: '_medium',
          lineHeight: '_normal',
          borderRadius: '_medium',
          borderWidth: '_thin',
          boxShadow: '_medium',
          opacity: '_disabled',
          transitionDuration: '_normal',
          transitionTimingFunction: '_standard',
          zIndex: '_dropdown',
        })}
        data-theme-scales=""
      >
        Theme
      </_div>
    );
  });
  const { wrapper } = render(
    _component(() => (
      <Provider theme={selected}>
        <Styled />
      </Provider>
    )),
  );
  const element = wrapper.get('[data-theme-scales]').element as HTMLElement;
  const values = Array.from(element.style).map((key) => element.style.getPropertyValue(key));
  expect(values).toEqual(
    expect.arrayContaining([
      '#ffffff',
      '#0f172a',
      '2.285714em',
      '0.857143em',
      '0.571429em',
      '0.285714em',
      '1.142857em',
      '2',
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
  customized.padding._medium = '2em';
  customized.fontSize._medium = '1rem';
  expect(new LightTheme().padding._medium).toBe('0.857143em');
  expect(new LightTheme().fontSize._medium).toBe('0.875rem');
  expect(customized.gap._medium).toBe('0.857143em');
  customized.rowGap._medium = '3em';
  expect(customized.columnGap._medium).toBe('0.857143em');
  expect(customized.gap._medium).toBe('0.857143em');
  expect(selected.value.fontSize._medium).toBe('0.875rem');
});
test.each([
  ['light', LightTheme],
  ['dark', DarkTheme],
] as const)(
  '%s theme keeps readable text on its paired surfaces and semantic fills',
  (_name, Theme) => {
    const color = reactive(new Theme()).color;
    const pairs: [string, string][] = [
      [color._textPrimary, color._surface],
      [color._textSecondary, color._surface],
      [color._textTertiary, color._surface],
      [color._textPlaceholder, color._surface],
      [color._textInverse, color._surfaceInverse],
      [color._textSelected, color._surfaceSelected],
      [color._textTertiary, color._surfaceMuted],
      [color._textPlaceholder, color._surfaceMuted],
      [color._textTertiary, color._surfaceHover],
    ];
    for (const [base, hover, active, soft, foreground] of [
      [
        color._primary,
        color._primaryHover,
        color._primaryPressed,
        color._primarySubtleBackground,
        color._textOnPrimary,
      ],
      [
        color._info,
        color._infoHover,
        color._infoPressed,
        color._infoSubtleBackground,
        color._textOnInfo,
      ],
      [
        color._success,
        color._successHover,
        color._successPressed,
        color._successSubtleBackground,
        color._textOnSuccess,
      ],
      [
        color._warning,
        color._warningHover,
        color._warningPressed,
        color._warningSubtleBackground,
        color._textOnWarning,
      ],
      [
        color._danger,
        color._dangerHover,
        color._dangerPressed,
        color._dangerSubtleBackground,
        color._textOnDanger,
      ],
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
  const lang = reactive({
    ...enUS,
  });
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
  Reflect.set(view.theme.color, '_primary', '#000000');
  expect(warn).toHaveBeenCalled();
  expect(lang.confirm).toBe(enUS.confirm);
  expect(theme.color._primary).toBe('#2563eb');
  lang.confirm = 'Changed by owner';
  theme.color._primary = '#f97316';
  expect(view.lang.confirm).toBe('Changed by owner');
  expect(view.theme.color._primary).toBe('#f97316');
  await nextTick();
  if (false) {
    // @ts-expect-error 后代只能读取语言配置。
    view.lang.confirm = 'Forbidden';
    // @ts-expect-error 后代只能读取主题字段。
    view.theme.color._primary = '#000000';
    // @ts-expect-error 文案直接位于 lang 上，不再保留 messages 层。
    view.lang.messages.confirm;
    // @ts-expect-error 局部主题也只接受已声明的主题名。
    <Provider
      theme={{
        color: {
          _missing: '#000000',
        },
      }}
    />;
    // @ts-expect-error 颜色字段不能使用数字。
    <Provider
      theme={{
        color: {
          _primary: 123,
        },
      }}
    />;
  }
});
test('teleported children keep the logical Provider context', async () => {
  const target = document.createElement('div');
  document.body.append(target);
  cleanup.push(() => target.remove());
  const lang = reactive({
    ...enUS,
    confirm: 'In portal',
    timeZone: 'Asia/Shanghai',
  });
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
    {
      id: 'zh',
      lang: zhCN,
      color: '#7c3aed',
    },
    {
      id: 'en',
      lang: enUS,
      color: '#059669',
    },
  ].map(({ id, lang, color }) => {
    const theme = id === 'zh' ? new LightTheme() : new DarkTheme();
    return {
      id,
      lang,
      color,
      theme,
      context: {},
      component: _component(() => (
        <Provider theme={theme} lang={lang}>
          <Provider
            theme={{
              color: {
                _primary: color,
              },
            }}
            lang={{
              confirm: lang.confirm,
            }}
          >
            <Probe id={id} />
          </Provider>
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
      expect(html[index]).toContain(`data-primary="${request.color}"`);
      expect(html[index]).toContain(`data-text="${request.theme.color._textPrimary}"`);
      expect(getCssHost(request.context)?.renderStyles()).toContain('color:var(--zv-');
      const markup = document.createElement('template');
      markup.innerHTML = html[index]!;
      expect(markup.content.querySelector('div > div > output')).not.toBeNull();
      expect(markup.content.querySelector('output')?.getAttribute('style')).toContain(
        request.color,
      );
    }
    expect(getCssHost(requests[0]!.context)).not.toBe(getCssHost(requests[1]!.context));
    const request = requests[0]!;
    const container = document.createElement('div');
    container.innerHTML = html[0]!;
    const original = container.querySelector('output');
    const originalProvider = container.firstElementChild;
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const app = createSSRApp(request.component);
    try {
      app.mount(container);
      expect(container.firstElementChild).toBe(originalProvider);
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
      <Provider
        lang={{
          locale: 'en-us',
          timeZone: 'Etc/UTC',
        }}
      >
        <Probe />
      </Provider>
    )),
  );
  expect(views.get('value')!.lang.locale).toBe('en-us');
  expect(views.get('value')!.lang.timeZone).toBe('Etc/UTC');
});
