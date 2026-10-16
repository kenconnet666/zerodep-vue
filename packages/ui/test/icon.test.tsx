import { afterEach, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, nextTick, reactive, ref, shallowRef } from 'vue';
import type { Component } from 'vue';
import { Search, Heart, LoaderCircle } from '@lucide/icons';
import type { LucideIconData } from '@lucide/icons';
import { _component, bx, createCssHost, getCssHost } from '@zerodep-vue/core';
import { DarkTheme, Icon, LightTheme, Provider, useCss } from '../src/index.ts';
import type { IconProps } from '../src/index.ts';

const cleanup: (() => void)[] = [];

function render(component: Component) {
  const target = document.createElement('div');
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
  return { wrapper, host, css: () => target.textContent ?? '' };
}

afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
});

test('one SVG inherits text size and color, forwards attributes and updates the icon and event once', async () => {
  const icon = shallowRef(Search);
  const click = vi.fn();
  const rest = reactive({ id: 'search', 'data-state': 'ready', onClick: click });
  const { wrapper, css } = render(_component(() => <Icon icon={icon.value} {...rest} />));
  const svg = wrapper.get('svg').element as SVGSVGElement;
  expect(svg.tagName).toBe('svg');
  expect(svg.namespaceURI).toBe('http://www.w3.org/2000/svg');
  expect(svg.getAttribute('width')).toBe('1em');
  expect(svg.getAttribute('height')).toBe('1em');
  expect(svg.getAttribute('viewBox')).toBe('0 0 24 24');
  expect(svg.getAttribute('stroke')).toBe('currentColor');
  expect(svg.getAttribute('stroke-width')).toBe('2');
  expect(svg.hasAttribute('icon')).toBe(false);
  expect(css()).not.toContain('font-size:');
  expect(css()).not.toContain('color:');
  expect(svg.getAttribute('aria-hidden')).toBe('true');
  expect(svg.getAttribute('focusable')).toBe('false');
  expect(svg.hasAttribute('role')).toBe(false);
  expect(svg.children.length).toBe(Search.node.length);
  await wrapper.trigger('click');
  expect(click).toHaveBeenCalledTimes(1);

  const before = svg.innerHTML;
  icon.value = Heart;
  rest.id = 'heart';
  rest['data-state'] = 'changed';
  await nextTick();
  expect(svg.innerHTML).not.toBe(before);
  expect(svg.querySelector('path')!.getAttribute('d')).toBe(Heart.node[0]![1].d);
  expect(svg.id).toBe('heart');
  expect(svg.dataset.state).toBe('changed');
});

test('CSS props resolve tokens, follow nested Provider changes and keep zero/null/undefined semantics', async () => {
  const theme = shallowRef(new LightTheme());
  const state = reactive({
    color: '_primary' as '_primary' | '_danger' | null | undefined,
    size: '1.25em' as string | number | null | undefined,
    opacity: '_disabled' as '_disabled' | number | undefined,
    strokeWidth: '_thick' as '_thick' | number | null,
  });
  const { wrapper, css } = render(
    _component(() => (
      <Provider theme={theme}>
        <Provider theme={{ opacity: { _disabled: 0.35 } }}>
          <Icon
            icon={Search}
            color={state.color}
            size={state.size}
            opacity={state.opacity}
            strokeWidth={state.strokeWidth}
            width="2em"
            height="_small"
            rotate="90deg"
          />
        </Provider>
      </Provider>
    )),
  );
  const svg = wrapper.get('svg').element as SVGSVGElement;
  const values = () => Array.from(svg.style).map((name) => svg.style.getPropertyValue(name));
  expect(values()).toEqual(
    expect.arrayContaining(['#2563eb', '1.25em', '0.35', '3', '2em', '90deg']),
  );
  expect(css()).toContain('stroke-width:');
  expect(svg.hasAttribute('strokeWidth')).toBe(false);
  const classes = svg.getAttribute('class');
  theme.value = new DarkTheme();
  await nextTick();
  expect(values()).toContain('#60a5fa');
  expect(svg.getAttribute('class')).toBe(classes);
  state.color = '_danger';
  state.size = 20;
  state.opacity = 0;
  state.strokeWidth = 0;
  await nextTick();
  expect(values()).toEqual(expect.arrayContaining(['#f87171', '20px', '0']));
  state.color = null;
  state.size = undefined;
  state.opacity = undefined;
  state.strokeWidth = null;
  await nextTick();
  expect(css()).not.toMatch(/(?:^|[;{])(?:color|font-size|opacity|stroke-width):/);
  expect(svg.getAttribute('stroke-width')).toBe('2');
});

test('filtered undefined SVG attributes retain defaults after updates', async () => {
  const rest = ref<{
    stroke?: string | undefined;
    viewBox?: string | undefined;
    focusable?: string | undefined;
  }>({
    stroke: undefined,
    viewBox: undefined,
    focusable: undefined,
  });
  const { wrapper } = render(_component(() => <Icon icon={Search} {...rest.value} />));
  for (const next of [
    { stroke: 'red', viewBox: '0 0 32 32', focusable: 'true' },
    { stroke: undefined, viewBox: undefined, focusable: undefined },
  ]) {
    rest.value = next;
    await nextTick();
    const svg = wrapper.get('svg');
    expect(svg.attributes('stroke')).toBe(next.stroke ?? 'currentColor');
    expect(svg.attributes('viewBox')).toBe(next.viewBox ?? '0 0 24 24');
    expect(svg.attributes('focusable')).toBe(String(next.focusable ?? false));
  }
});

test('external CSS overrides convenience props without leaking component options to the SVG', () => {
  const { wrapper, css } = render(
    _component(() => {
      const s = useCss();
      return (
        <Icon icon={Search} size={20} color="_primary" class={s.color('_danger').fontSize('2em')} />
      );
    }),
  );
  const svg = wrapper.get('svg').element as SVGSVGElement;
  const values = Array.from(svg.style).map((name) => svg.style.getPropertyValue(name));
  expect(values).toContain('#b91c1c');
  expect(values).not.toContain('#2563eb');
  expect(css()).toContain('font-size:2em;');
  expect(svg.hasAttribute('size')).toBe(false);
  expect(svg.hasAttribute('color')).toBe(false);
});

test('nested raw nodes keep geometry, node paint and ownership; nonScalingStroke applies to shapes', async () => {
  const custom: LucideIconData = {
    width: 32,
    height: 16,
    node: [
      [
        'g',
        { fill: 'currentColor' },
        [
          ['path', { d: 'M0 8h32', 'stroke-width': 4, key: 'line' }],
          ['circle', { cx: 8, cy: 8, r: 4, style: 'opacity:0.5;vector-effect:none' }],
        ],
      ],
    ],
  };
  const original = JSON.stringify(custom);
  const fixed = ref(true);
  const { wrapper } = render(
    _component(() => <Icon icon={custom} nonScalingStroke={fixed.value} />),
  );
  const svg = wrapper.get('svg').element as SVGSVGElement;
  expect(svg.getAttribute('viewBox')).toBe('0 0 32 16');
  expect(svg.querySelectorAll('g > *')).toHaveLength(2);
  const path = svg.querySelector('path')!;
  const circle = svg.querySelector('circle')!;
  expect(path.namespaceURI).toBe(svg.namespaceURI);
  expect(path.hasAttribute('key')).toBe(false);
  expect(path.getAttribute('stroke-width')).toBe('4');
  expect(path.style.vectorEffect).toBe('non-scaling-stroke');
  expect(circle.style.opacity).toBe('0.5');
  expect(circle.style.vectorEffect).toBe('non-scaling-stroke');
  expect(svg.querySelector('g')!.hasAttribute('style')).toBe(false);
  fixed.value = false;
  await nextTick();
  expect(path.style.vectorEffect).toBe('');
  expect(circle.style.vectorEffect).toBe('none');
  expect(JSON.stringify(custom)).toBe(original);
});

test('named icons and explicit ARIA overrides update, while untyped subtree replacement is ignored', async () => {
  const label = ref('搜索');
  const { wrapper } = render(
    _component(() => (
      <div>
        <Icon icon={Search} aria-label={label.value} />
        <Icon icon={Heart} aria-labelledby="favorite-label" />
        <Icon icon={Heart} aria-label="收藏" aria-hidden role="presentation" />
        <Icon
          icon={Search}
          {...({ innerHTML: '<rect/>', textContent: 'bad', children: 'bad' } as any)}
        />
      </div>
    )),
  );
  const icons = wrapper.findAll('svg');
  expect(icons[0]!.attributes('aria-label')).toBe('搜索');
  expect(icons[0]!.attributes('role')).toBe('img');
  expect(icons[0]!.attributes('aria-hidden')).toBeUndefined();
  expect(icons[1]!.attributes('aria-labelledby')).toBe('favorite-label');
  expect(icons[1]!.attributes('role')).toBe('img');
  expect(icons[2]!.attributes('aria-hidden')).toBe('true');
  expect(icons[2]!.attributes('role')).toBe('presentation');
  expect(icons[3]!.find('path').exists()).toBe(true);
  expect(icons[3]!.find('rect').exists()).toBe(false);
  expect(icons[3]!.text()).toBe('');
  label.value = '  ';
  await nextTick();
  expect(icons[0]!.attributes('aria-label')).toBe('  ');
  expect(icons[0]!.attributes('role')).toBeUndefined();
  expect(icons[0]!.attributes('aria-hidden')).toBe('true');
});

test('spin owns its keyframes, keeps static rotate separate and releases animation rules when stopped', async () => {
  const spin = ref(true);
  const { wrapper, css } = render(
    _component(() => <Icon icon={LoaderCircle} spin={spin.value} rotate="45deg" />),
  );
  expect(css()).toContain('@keyframes');
  expect(css()).toContain('transform:rotate(360deg)');
  expect(css()).toContain('@media (prefers-reduced-motion: reduce)');
  expect(css()).toContain('animation-name:none;');
  expect(css()).toContain('transform-origin:center;');
  expect(wrapper.attributes('style')).toContain('45deg');
  expect(wrapper.attributes('spin')).toBeUndefined();
  spin.value = false;
  await nextTick();
  expect(css()).not.toContain('@keyframes');
  expect(wrapper.attributes('style')).toContain('45deg');
});

test('SSR isolates theme values and hydrates the same SVG and animation without mismatch', async () => {
  const context = {};
  const App = _component(() => (
    <Provider theme={new DarkTheme()}>
      <Icon icon={LoaderCircle} color="_primary" spin aria-label="加载中" />
    </Provider>
  ));
  const html = await renderToString(createSSRApp(App), context);
  const serverHost = getCssHost(context)!;
  expect(html).toContain('#60a5fa');
  expect(html).toContain('role="img"');
  expect(serverHost.cssText()).toContain('@keyframes');
  const target = document.createElement('div');
  target.innerHTML = html;
  document.body.append(target);
  const svg = target.querySelector('svg');
  const host = createCssHost({ target: document.head, maxUnusedRules: 0 });
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  const error = vi.spyOn(console, 'error').mockImplementation(() => {});
  const app = createSSRApp(App).use(host);
  try {
    app.mount(target);
    expect(target.querySelector('svg')).toBe(svg);
    expect(warn).not.toHaveBeenCalled();
    expect(error).not.toHaveBeenCalled();
  } finally {
    app.unmount();
    target.remove();
    host.dispose();
    serverHost.dispose();
  }
});

test('unknown theme names fail in the shared CSS resolver instead of becoming invalid CSS', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  const context = {};
  try {
    await expect(
      renderToString(
        createSSRApp(_component(() => <Icon icon={Search} color="_missing" />)),
        context,
      ),
    ).rejects.toThrow(/color.*_missing/);
  } finally {
    getCssHost(context)?.dispose();
    warn.mockRestore();
  }
});

// Props 使用普通 CSS 值，绑定属于内部实现；字面量和对象写法使用同一个接口。
if (false) {
  const s = useCss();
  const props: IconProps = { icon: Search, color: '_danger', size: '1.25em', strokeWidth: '_thin' };
  <Icon {...props} />;
  <Icon icon={Search} color="_danger" size="_medium" strokeWidth="_thin" opacity="_disabled" />;
  <Icon icon={Search} size="small" width="calc(100% - 1em)" color="currentColor" rotate="90deg" />;
  <Icon
    icon={Search}
    color={null}
    size={undefined}
    width={0}
    height="_large"
    opacity={0}
    strokeWidth={0}
  />;
  <Icon icon={Search} {...({ color: '_primary', size: '_large' } as const)} />;
  s.color('_danger').fontSize('_medium').strokeWidth('_thin').opacity('_disabled');
  // @ts-expect-error color 不接受数字。
  <Icon icon={Search} color={12} />;
  // @ts-expect-error rotate 与 CSS 方法一样必须带单位。
  <Icon icon={Search} rotate={90} />;
  // @ts-expect-error bx 属于内部 CSS 接线，不作为组件值输入。
  <Icon icon={Search} color={bx('red')} />;
  // @ts-expect-error Props 不接收 getter，响应式来源在调用处正常读取。
  <Icon icon={Search} size={() => 20} />;
  // @ts-expect-error 不接受外部子树。
  <Icon icon={Search}>text</Icon>;
  // @ts-expect-error 不接受字符串 SVG。
  <Icon icon="<svg/>" />;
  // @ts-expect-error 不接受替换节点的 DOM 属性。
  <Icon icon={Search} innerHTML="<path/>" />;
}
