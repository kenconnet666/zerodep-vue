import { afterEach, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import {
  cloneVNode,
  createSSRApp,
  defineComponent,
  h,
  nextTick,
  ref,
  shallowRef,
  Teleport,
} from 'vue';
import type { Ref } from 'vue';
import { renderToString } from '@vue/server-renderer';
import {
  _component,
  bx,
  createCssContext,
  createCssHost,
  getCssHost,
  SystemKeywords,
  cx,
} from '@zerodep-vue/core';

import type { CssInput } from '@zerodep-vue/core';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

const mounted: VueWrapper[] = [];
const containers: HTMLElement[] = [];
afterEach(() => {
  for (const wrapper of mounted.splice(0)) wrapper.unmount();
  for (const container of containers.splice(0)) container.remove();
});
function setupHost() {
  const target = document.createElement('div');
  document.head.appendChild(target);
  containers.push(target);
  return createCssHost({ target, maxUnusedRules: 0 });
}
function variables(element: Element) {
  const style = (element as HTMLElement).style;
  return Object.fromEntries(
    Array.from(style)
      .filter((key) => key.startsWith('--zv-'))
      .map((key) => [key, style.getPropertyValue(key)]),
  );
}

test('automatic class override suppresses the unused default binding', () => {
  const unused = () => {
    throw new Error('overridden binding was evaluated');
  };
  const Button = _component(() => <button class={s.color(bx(unused()))}>button</button>);
  const App = _component(() => <Button class={s.color('black')} />);
  const host = setupHost();
  const wrapper = mount(App, { global: { plugins: [host] } });
  mounted.push(wrapper);
  expect(containers.at(-1)!.textContent).toContain('color:black');
});

test('optional bound props retain defaults after update and removal', async () => {
  const Box = _component(({ width }: { width?: number | null }) => (
    <div class={s.width(100).width(bx(width))}>box</div>
  ));
  const host = setupHost();
  const wrapper = mount(Box, { global: { plugins: [host] } });
  mounted.push(wrapper);
  const styleTarget = containers.at(-1)!;
  expect(styleTarget.textContent).toContain('width:100px;');
  await wrapper.setProps({ width: 180 });
  expect(wrapper.attributes('style')).toContain('180px');
  await wrapper.setProps({ width: undefined });
  expect(styleTarget.textContent).toContain('width:100px;');
  expect(wrapper.attributes('style') ?? '').not.toContain('--zv-');
  await wrapper.setProps({ width: null });
  expect(wrapper.attributes('class') ?? '').not.toContain('zv-');
});

test('Vue cloneVNode preserves style descriptions, bindings and ref ownership', async () => {
  const width = ref('10px');
  const element = ref<HTMLElement | null>(null);
  const App = _component(() => {
    return cloneVNode(<div ref={element} class={s.color('red').width(bx(width.value))} />, {
      class: s.color('blue'),
      title: 'clone',
    });
  });
  const host = setupHost();
  const wrapper = mount(App, { global: { plugins: [host] } });
  mounted.push(wrapper);
  expect(element.value).toBe(wrapper.element);
  expect(wrapper.attributes('title')).toBe('clone');
  expect(containers.at(-1)!.textContent).not.toContain('color:red');
  expect(containers.at(-1)!.textContent).toContain('color:blue');
  width.value = '20px';
  await nextTick();
  expect(Object.values(variables(wrapper.element))).toEqual(['20px']);
});

test('implicit class/style binding updates and removes CSS-wide keyword variables', async () => {
  const width = ref('200px');
  const enabled = ref(true);
  const host = setupHost();
  const App = _component(() => (
    <div
      title={width.value}
      class={enabled.value && s.width(bx(width.value))}
      style={{ opacity: 0.5 }}
    />
  ));
  const wrapper = mount(App, { global: { plugins: [host] } });
  mounted.push(wrapper);
  const element = wrapper.element;
  const name = element.className;
  expect(Object.values(variables(element))).toEqual(['200px']);
  expect(host.stats().ownedReferences).toBe(1);
  const ruleElement = containers.at(-1)!.firstElementChild;
  width.value = '210px';
  await nextTick();
  expect(containers.at(-1)!.firstElementChild).toBe(ruleElement);
  expect(Object.values(variables(element))).toEqual(['210px']);
  width.value = 'initial';
  await nextTick();
  expect(variables(element)).toEqual({});
  expect(element.className).not.toBe(name);
  expect(wrapper.attributes('title')).toBe('initial');
  width.value = '300px';
  await nextTick();
  expect(element.className).toBe(name);
  expect(Object.values(variables(element))).toEqual(['300px']);
  enabled.value = false;
  await nextTick();
  expect(variables(element)).toEqual({});
  expect(host.stats().ownedReferences).toBe(0);
  expect((element as HTMLElement).style.opacity).toBe('0.5');
});

test('multiple bx variables and aliases retain one style declaration across instances', async () => {
  const x = ref(10);
  const y = ref(20);
  const App = _component(() => {
    const horizontal = bx(x.value);
    const style = s.transform(`translate(${horizontal}px, ${bx(y.value)}px)`);
    return <div class={style} />;
  });
  const host = setupHost();
  const a = mount(App, { global: { plugins: [host] } });
  const b = mount(App, { global: { plugins: [host] } });
  mounted.push(a, b);
  expect(a.element.className).toBe(b.element.className);
  expect(Object.values(variables(a.element))).toEqual(['10', '20']);
  x.value = 30;
  await nextTick();
  expect(Object.values(variables(a.element))).toEqual(['30', '20']);
  expect(Object.values(variables(b.element))).toEqual(['30', '20']);
  expect(host.stats().activeRules).toBe(1);
  a.unmount();
  mounted.splice(mounted.indexOf(a), 1);
  expect(host.stats().activeRules).toBe(1);
  expect(containers.at(-1)!.childElementCount).toBe(1);
});

test('owned components compose through cx, retain states and transfer bindings without metadata leaks', async () => {
  const width = ref('120px');
  const Base = _component(({ class: external }: { class?: CssInput }) => (
    <button class={cx(s.color('red').select(':hover', s.color('blue')), external)}>owned</button>
  ));
  const Wrapper = _component(() => <Base />);
  const App = _component(() => (
    <Wrapper class={s.color('black').width(bx(width.value))} title="forwarded" />
  ));
  const host = setupHost();
  const wrapper = mount(App, { global: { plugins: [host] } });
  mounted.push(wrapper);
  expect(wrapper.attributes('title')).toBe('forwarded');
  expect(wrapper.html()).not.toContain('__zerodep');
  expect(wrapper.html()).not.toContain('[object Object]');
  expect(host.stats().ownedReferences).toBe(1);
  expect(containers.at(-1)!.textContent).not.toContain('color:red');
  expect(containers.at(-1)!.textContent).toContain('color:blue');
  expect(containers.at(-1)!.textContent).toContain('color:black');
  width.value = '240px';
  await nextTick();
  expect(Object.values(variables(wrapper.element))).toEqual(['240px']);
});

test('ordinary Vue receives only native class/style and updates generated style', async () => {
  const width = ref('100px');
  const Legacy = defineComponent({
    setup(_props, { attrs }) {
      return () => <div {...attrs}>legacy</div>;
    },
    inheritAttrs: false,
  });
  const App = _component(() => (
    <Legacy class={s.width(bx(width.value))} style={{ minWidth: '4px' }} />
  ));
  const host = setupHost();
  const wrapper = mount(App, { global: { plugins: [host] } });
  mounted.push(wrapper);
  expect(Object.values(variables(wrapper.element))).toEqual(['100px']);
  width.value = '150px';
  await nextTick();
  expect(Object.values(variables(wrapper.element))).toEqual(['150px']);
  expect((wrapper.element as HTMLElement).style.minWidth).toBe('4px');
  expect(wrapper.html()).not.toContain('__zerodep');
});

test('spread and callbacks evaluate once, merge in order, and preserve explicit style', async () => {
  let classes = 0;
  let spreads = 0;
  let calls = 0;
  const handler = () => calls++;
  const makeClass = () => {
    classes++;
    return s.color('red');
  };
  const props = () => {
    spreads++;
    return { class: s.color('blue'), onClick: handler };
  };
  const App = _component(() => (
    <button class={makeClass()} {...props()} onClick={handler} style={{ color: 'green' }} />
  ));
  const host = setupHost();
  const wrapper = mount(App, { global: { plugins: [host] } });
  mounted.push(wrapper);
  expect(classes).toBe(1);
  expect(spreads).toBe(1);
  await wrapper.trigger('click');
  expect(calls).toBe(1);
  expect((wrapper.element as HTMLElement).style.color).toBe('green');
  expect(containers.at(-1)!.textContent).toContain('color:blue');
  expect(containers.at(-1)!.textContent).not.toContain('color:red');
});

test('SSR collects rules and emits the same variable protocol per request', async () => {
  const App = _component(({ width }: { width: string }) => <div class={s.width(bx(width))} />);
  const a = {};
  const b = {};
  const htmlA = await renderToString(createSSRApp(App, { width: '100px' }), a);
  const htmlB = await renderToString(createSSRApp(App, { width: '200px' }), b);
  expect(htmlA).toContain('100px');
  expect(htmlB).toContain('200px');
  expect(htmlA).not.toContain('200px');
  expect(getCssHost(a)?.cssText()).toBe(getCssHost(b)?.cssText());
  expect(getCssHost(a)).not.toBe(getCssHost(b));
  expect(getCssHost(a)?.snapshot()).toHaveLength(1);
});

test('SSR preserves the selected host layer and nonce', async () => {
  const App = _component(() => <span class={s.color('red')}>layer</span>);
  const host = createCssHost({ target: null, layer: 'components', nonce: 'example' });
  const context = {};
  await renderToString(createSSRApp(App).use(host), context);
  expect(getCssHost(context)?.renderStyles()).toContain('@layer components');
  expect(getCssHost(context)?.renderStyles()).toContain('nonce="example"');
});

test('legacy slot can replace a styled element with a plain h node without retaining rules', async () => {
  const Legacy = defineComponent({
    setup(_props, { slots }) {
      const show = ref(true);
      return () => (
        <section>
          <button onClick={() => (show.value = !show.value)}>toggle</button>
          {slots.default?.({ show: show.value })}
        </section>
      );
    },
  });
  const App = _component(() => (
    <Legacy
      v-slots={{
        default: ({ show }: { show: boolean }) =>
          show ? <span class={s.color('red')}>styled</span> : h('span', 'plain'),
      }}
    />
  ));
  const host = setupHost();
  const wrapper = mount(App, { global: { plugins: [host] } });
  mounted.push(wrapper);
  expect(host.stats().ownedReferences).toBe(1);
  await wrapper.get('button').trigger('click');
  await Promise.resolve();
  expect(wrapper.get('span').text()).toBe('plain');
  expect(host.stats().ownedReferences).toBe(0);
});

test('different JSX branches remove implicit style while preserving the DOM node', async () => {
  const active = ref(true);
  const title = ref('title');
  const App = _component(() =>
    active.value ? (
      <div class={s.width(bx('100px'))} title={title.value} />
    ) : (
      <div class="plain" title={title.value} />
    ),
  );
  const host = setupHost();
  const wrapper = mount(App, { global: { plugins: [host] } });
  mounted.push(wrapper);
  const original = wrapper.element;
  active.value = false;
  await nextTick();
  await Promise.resolve();
  expect(wrapper.element).toBe(original);
  expect(wrapper.element.className).toBe('plain');
  expect(variables(wrapper.element)).toEqual({});
  expect(host.stats().ownedReferences).toBe(0);
});

class RegionTheme extends SystemKeywords {
  override readonly color: { _brand: string };
  constructor(value: string) {
    super();
    this.color = { _brand: value };
  }
}

test('independent runtime themes retain their values through Teleport and one region removal', async () => {
  const first = shallowRef(new RegionTheme('red'));
  const second = shallowRef(new RegionTheme('blue'));
  const showFirst = ref(true);
  const Region = _component(({ theme, name }: { theme: Ref<RegionTheme>; name: string }) => {
    const themedContext = createCssContext(theme);
    const themed = themedContext.useCss();
    const themedKeywords = themedContext.keywords;
    const style = themed.color(themedKeywords.color._brand).display(themedKeywords.display.block);
    return (
      <Teleport to="body">
        <div data-theme-region={name} class={style} />
      </Teleport>
    );
  });
  const App = _component(() => (
    <>
      {showFirst.value && <Region theme={first} name="a" />}
      <Region theme={second} name="b" />
    </>
  ));
  const host = setupHost();
  const wrapper = mount(App, { global: { plugins: [host] } });
  mounted.push(wrapper);
  const a = document.querySelector('[data-theme-region=a]')!;
  const b = document.querySelector('[data-theme-region=b]')!;
  expect(Object.values(variables(a))).toEqual(['red']);
  expect(Object.values(variables(b))).toEqual(['blue']);
  expect(a.className).toBe(b.className);
  first.value = new RegionTheme('green');
  await nextTick();
  expect(Object.values(variables(a))).toEqual(['green']);
  expect(Object.values(variables(b))).toEqual(['blue']);
  showFirst.value = false;
  await nextTick();
  expect(document.querySelector('[data-theme-region=a]')).toBeNull();
  expect(host.stats().ownedReferences).toBe(1);
  expect(Object.values(variables(b))).toEqual(['blue']);
});

test('SSR Teleport emits the correct per-request theme variables', async () => {
  const Page = _component(({ color }: { color: string }) => {
    const themedContext = createCssContext(new RegionTheme(color));
    const themed = themedContext.useCss();
    const themedKeywords = themedContext.keywords;
    return (
      <Teleport to="#dialogs">
        <div class={themed.color(themedKeywords.color._brand)}>theme</div>
      </Teleport>
    );
  });
  const a: { teleports?: Record<string, string> } = {};
  const b: { teleports?: Record<string, string> } = {};
  await renderToString(createSSRApp(Page, { color: 'red' }), a);
  await renderToString(createSSRApp(Page, { color: 'blue' }), b);
  expect(a.teleports?.['#dialogs']).toContain('red');
  expect(a.teleports?.['#dialogs']).not.toContain('blue');
  expect(b.teleports?.['#dialogs']).toContain('blue');
  expect(getCssHost(a)?.cssText()).toBe(getCssHost(b)?.cssText());
});
