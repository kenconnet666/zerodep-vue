import { afterEach, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { renderToString } from '@vue/server-renderer';
import { createApp, createSSRApp, defineComponent, h, nextTick, ref, shallowRef } from 'vue';
import type { Component } from 'vue';
import { _component, createCssHost, getCssHost } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import {
  DarkTheme,
  Heading,
  LightTheme,
  Link,
  Paragraph,
  Provider,
  Text,
  useCss,
} from '../src/index.ts';
import type { HeadingProps, UiTheme } from '../src/index.ts';

const cleanup: (() => void)[] = [];
afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
});

function render(component: Component) {
  const target = document.createElement('style');
  document.head.append(target);
  const host = createCssHost({ target, maxUnusedRules: 0 });
  const wrapper = mount(component, { global: { plugins: [host] } });
  cleanup.push(() => {
    wrapper.unmount();
    const references = host.stats().ownedReferences;
    host.dispose();
    target.remove();
    expect(references).toBe(0);
  });
  return { wrapper, css: () => target.textContent ?? '' };
}

test('native text elements forward attributes and one event without leaking style props', async () => {
  const caption = ref('first');
  const title = ref<string | undefined>('hint');
  const click = vi.fn((event: MouseEvent) => event.preventDefault());
  const { wrapper } = render(
    _component(() => (
      <div>
        <Text id="text" title={title.value} lang="zh-CN" dir="rtl" size="_small">
          {caption.value}
          <strong>!</strong>
        </Text>
        <Paragraph id="paragraph" textAlign="end">
          正文 <em>{caption.value}</em>
        </Paragraph>
        <Heading id="heading" level={2} aria-label="区块标题">
          {caption.value}
        </Heading>
        <Link id="link" href="/first" data-purpose="navigation" onClick={click}>
          {caption.value}
        </Link>
      </div>
    )),
  );
  expect(wrapper.get('#text').element.tagName).toBe('SPAN');
  expect(wrapper.get('#paragraph').element.tagName).toBe('P');
  expect(wrapper.get('#heading').element.tagName).toBe('H2');
  expect(wrapper.get('#link').element.tagName).toBe('A');
  expect(wrapper.get('#text').attributes()).toMatchObject({
    title: 'hint',
    lang: 'zh-CN',
    dir: 'rtl',
  });
  expect(wrapper.get('#heading').attributes('aria-label')).toBe('区块标题');
  expect(wrapper.get('#link').attributes('data-purpose')).toBe('navigation');
  for (const element of wrapper.findAll('#text, #paragraph, #heading, #link')) {
    for (const key of ['size', 'color', 'fontWeight', 'lineHeight', 'textAlign', 'level'])
      expect(element.element.hasAttribute(key)).toBe(false);
  }
  await wrapper.get('#link').trigger('click', { ctrlKey: true });
  expect(click).toHaveBeenCalledTimes(1);
  expect(click.mock.calls[0]![0].ctrlKey).toBe(true);
  caption.value = 'updated';
  title.value = undefined;
  await nextTick();
  expect(wrapper.get('#text').text()).toBe('updated!');
  expect(wrapper.get('#paragraph').text()).toBe('正文 updated');
  expect(wrapper.get('#heading').text()).toBe('updated');
  expect(wrapper.get('#link').text()).toBe('updated');
  expect(wrapper.get('#text').attributes('title')).toBeUndefined();
});

test('all text variants react to shared style props and inherited theme replacement', async () => {
  const theme = shallowRef<UiTheme>(new LightTheme());
  const color = ref<CssValue<'color', UiTheme>>('_textSecondary');
  const size = ref<CssValue<'fontSize', UiTheme>>(18);
  const fontWeight = ref<CssValue<'fontWeight', UiTheme>>(600);
  const lineHeight = ref<CssValue<'lineHeight', UiTheme>>(1.8);
  const { wrapper } = render(
    _component(() => (
      <Provider theme={theme}>
        <Text
          data-text
          color={color.value}
          size={size.value}
          fontWeight={fontWeight.value}
          lineHeight={lineHeight.value}
        >
          文字
        </Text>
        <Paragraph
          data-text
          color={color.value}
          size={size.value}
          fontWeight={fontWeight.value}
          lineHeight={lineHeight.value}
        >
          段落
        </Paragraph>
        <Heading
          data-text
          level={3}
          color={color.value}
          size={size.value}
          fontWeight={fontWeight.value}
          lineHeight={lineHeight.value}
        >
          标题
        </Heading>
        <Link
          data-text
          href="/detail"
          color={color.value}
          size={size.value}
          fontWeight={fontWeight.value}
          lineHeight={lineHeight.value}
        >
          链接
        </Link>
      </Provider>
    )),
  );
  for (const element of wrapper.findAll('[data-text]'))
    expect(element.attributes('style')).toEqual(expect.stringContaining('18px'));
  theme.value = new DarkTheme();
  size.value = 22;
  fontWeight.value = '_bold';
  lineHeight.value = '_relaxed';
  await nextTick();
  for (const element of wrapper.findAll('[data-text]')) {
    const style = element.attributes('style');
    for (const value of ['#cbd5e1', '22px', '700', '1.75']) expect(style).toContain(value);
  }
  size.value = undefined;
  color.value = null;
  fontWeight.value = null;
  lineHeight.value = null;
  await nextTick();
  for (const element of wrapper.findAll('[data-text]')) {
    const style = element.attributes('style') ?? '';
    for (const value of ['#cbd5e1', '22px', '700', '1.75']) expect(style).not.toContain(value);
  }
});

test('external CSS wins over convenience props and native style stays on the actual element', () => {
  const { wrapper, css } = render(
    _component(() => {
      const s = useCss();
      return (
        <Text
          color="_primary"
          size={20}
          class={s.color('_danger').fontSize('2em')}
          style={{ letterSpacing: '0.1em' }}
        >
          内容
        </Text>
      );
    }),
  );
  expect(wrapper.attributes('style')).toContain(new LightTheme().color._danger);
  expect(wrapper.attributes('style')).toContain('0.1em');
  expect(wrapper.attributes('style')).not.toContain('#2563eb');
  expect(wrapper.attributes('style')).not.toContain('20px');
  expect(css()).toContain('font-size:2em');
});

test('heading levels remain reactive and independent of visual size', async () => {
  const level = ref<HeadingProps['level']>(1);
  const { wrapper, css } = render(
    _component(() => (
      <Heading level={level.value} id="title">
        标题
      </Heading>
    )),
  );
  for (const next of [1, 2, 3, 4, 5, 6] as const) {
    level.value = next;
    await nextTick();
    expect(wrapper.get('#title').element.tagName).toBe(`H${next}`);
  }
  expect(css()).toContain('font-size:inherit');
  expect(css()).toContain('margin:0');
  const errors: unknown[] = [];
  const app = createApp(Heading, { level: 0 });
  app.config.errorHandler = (error) => errors.push(error);
  app.mount(document.createElement('div'));
  try {
    expect(errors.some((error) => String(error).includes('Heading level 必须是 1 到 6'))).toBe(
      true,
    );
  } finally {
    app.unmount();
  }
});

test('link rel defaults follow target updates while explicit rel and anchor attributes retain native meaning', async () => {
  const target = ref<string | undefined>('_blank');
  const rel = ref<string | undefined>();
  const href = ref('/first');
  const { wrapper, css } = render(
    _component(() => (
      <Link href={href.value} target={target.value} rel={rel.value} download="report.txt">
        报告
      </Link>
    )),
  );
  expect(wrapper.attributes()).toMatchObject({
    href: '/first',
    target: '_blank',
    rel: 'noopener',
    download: 'report.txt',
  });
  target.value = '_self';
  href.value = '/second';
  await nextTick();
  expect(wrapper.attributes('rel')).toBeUndefined();
  expect(wrapper.attributes('href')).toBe('/second');
  target.value = '_BLANK';
  await nextTick();
  expect(wrapper.attributes('rel')).toBe('noopener');
  rel.value = 'external';
  await nextTick();
  expect(wrapper.attributes('rel')).toBe('external');
  rel.value = '';
  await nextTick();
  expect(wrapper.attributes('rel')).toBe('');
  for (const selector of [':hover', ':active', ':focus-visible', '@media (forced-colors: active)'])
    expect(css()).toContain(selector);
});

test('plain Vue host slots stay reactive and untyped DOM replacement cannot replace children', async () => {
  const text = ref('first');
  const Host = defineComponent(() => () => {
    const captured = text.value;
    return h(
      Paragraph,
      // 模拟没有 TypeScript 检查的宿主，验证被禁止的 DOM 属性仍会被排除。
      { innerHTML: 'bad', textContent: 'bad' } as any,
      { default: () => h('strong', captured) },
    );
  });
  const { wrapper } = render(Host);
  expect(wrapper.get('strong').text()).toBe('first');
  text.value = 'second';
  await nextTick();
  expect(wrapper.get('strong').text()).toBe('second');
  expect(wrapper.text()).not.toContain('bad');
});

test('text semantics and theme values survive SSR and hydration without replacing nodes', async () => {
  const App = _component(() => (
    <Provider theme={new DarkTheme()}>
      <Heading level={2} size="_extraLarge">
        标题
      </Heading>
      <Paragraph>
        <Text color="_textSecondary">
          正文 <em>强调</em>
        </Text>
      </Paragraph>
      <Link href="/detail" target="_blank">
        详情
      </Link>
    </Provider>
  ));
  const context = {};
  const html = await renderToString(createSSRApp(App), context);
  const serverHost = getCssHost(context)!;
  expect(html).toContain('<h2');
  expect(html).toContain('<p');
  expect(html).toContain('rel="noopener"');
  expect(html).toContain('#cbd5e1');
  const target = document.createElement('div');
  target.innerHTML = html;
  document.body.append(target);
  const heading = target.querySelector('h2');
  const host = createCssHost({ target: document.head, maxUnusedRules: 0 });
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  const error = vi.spyOn(console, 'error').mockImplementation(() => {});
  const app = createSSRApp(App).use(host);
  try {
    app.mount(target);
    expect(target.querySelector('h2')).toBe(heading);
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
  <Text color="_textSecondary" size="_small" fontWeight="_semibold" lineHeight="_normal" />;
  <Paragraph textAlign="end" />;
  <Heading level={6} size="2rem" />;
  <Link href="/detail" target="_blank" download />;
  // @ts-expect-error 标题层级必须明确。
  <Heading />;
  // @ts-expect-error 原生标题只有六级。
  <Heading level={7} />;
  // @ts-expect-error 导航地址必须明确。
  <Link />;
  // @ts-expect-error 链接不模拟禁用按钮。
  <Link href="/detail" disabled />;
  // @ts-expect-error 样式 Props 使用普通值，调用处读取 Ref。
  <Text size={ref(18)} />;
  // @ts-expect-error 子树由 children 管理。
  <Text innerHTML="<b>bad</b>" />;
}
void typeContracts;
