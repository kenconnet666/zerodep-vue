import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createSSRApp, nextTick, ref } from 'vue';
import { renderToString } from '@vue/server-renderer';
import {
  _component,
  bx,
  createCssHost,
  getCssHost,
  keyframes,
  globalCss,
  createCssContext,
  SystemKeywords,
} from '@zerodep-vue/core';

const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

test('component global rules use its host and unmount stops all updates', async () => {
  const target = document.createElement('div');
  document.head.appendChild(target);
  const host = createCssHost({ target, maxUnusedRules: 0 });
  const color = ref('red');
  let reads = 0;
  const read = () => {
    reads++;
    return color.value;
  };
  const App = _component(() => {
    globalCss('document-colors', { ':root': s.color(bx(read())) });
    return <div class={s.opacity(1)} />;
  });
  const wrapper = mount(App, { global: { plugins: [host] } });
  try {
    expect(host.stats().globalRules).toBe(1);
    const node = target.firstElementChild;
    color.value = 'blue';
    await nextTick();
    expect(node?.textContent).toBe(':root{color:blue;}');
    expect(target.firstElementChild).toBe(node);
  } finally {
    wrapper.unmount();
    const before = reads;
    color.value = 'green';
    expect(reads).toBe(before);
    expect(target.children.length).toBe(0);
    target.remove();
  }
});

test('SSR global effects stop after rendering while request-specific styles remain collectible', async () => {
  const color = ref('red');
  const App = _component(() => {
    globalCss('request', { body: s.color(bx(color.value)) });
    return <div class={s.opacity(1)} />;
  });
  const first = {};
  await renderToString(
    createSSRApp(App).use(createCssHost({ target: null, layer: 'base', nonce: 'example' })),
    first,
  );
  const saved = getCssHost(first)!.renderStyles();
  color.value = 'blue';
  expect(getCssHost(first)!.renderStyles()).toBe(saved);
  expect(saved).toContain('@layer base{body{color:red;}}');
  expect(saved).toContain('nonce="example"');
  expect(saved.indexOf('data-zv-global')).toBeLessThan(saved.indexOf('data-zv-rule'));
  const second = {};
  await renderToString(createSSRApp(App), second);
  expect(getCssHost(second)!.cssText()).toContain('body{color:blue;}');
  expect(getCssHost(second)!.cssText()).not.toContain('color:red');
  getCssHost(first)?.dispose();
  getCssHost(second)?.dispose();
});

test('keyframes share rule leases, update inline values and release on the last removal', async () => {
  const target = document.createElement('div');
  document.head.appendChild(target);
  const host = createCssHost({ target, maxUnusedRules: 0 });
  const opacity = ref(0.2);
  const show = ref(true);
  const App = _component(() => {
    const fade = keyframes({ from: s.opacity(bx(opacity.value)), to: s.opacity(1) });
    const style = s.animation(`${fade} 1s linear`);
    return (
      <section>
        {show.value && <div class={style} />}
        <span class={style} />
      </section>
    );
  });
  const wrapper = mount(App, { global: { plugins: [host] } });
  try {
    expect(host.stats().activeRules).toBe(2);
    expect(host.stats().ownedReferences).toBe(4);
    const original = [...target.children];
    expect(target.textContent).toContain('@keyframes zva-');
    expect(wrapper.get('span').attributes('style')).toContain('0.2');
    opacity.value = 0.7;
    await nextTick();
    expect([...target.children]).toEqual(original);
    expect(wrapper.get('span').attributes('style')).toContain('0.7');
    show.value = false;
    await nextTick();
    expect(host.stats().ownedReferences).toBe(2);
    expect([...target.children]).toEqual(original);
  } finally {
    wrapper.unmount();
    expect(host.stats().activeRules).toBe(0);
    expect(target.children.length).toBe(0);
    target.remove();
  }
});

test('SSR collects animations with request-specific inline values and stable resource names', async () => {
  const Page = _component(({ start }: { start: number }) => {
    const fade = keyframes({ from: s.opacity(bx(start)), to: s.opacity(1) });
    return <div class={s.animationName(fade).animationDuration('1s')} />;
  });
  const first = {};
  const second = {};
  const a = await renderToString(createSSRApp(Page, { start: 0.2 }), first);
  const b = await renderToString(createSSRApp(Page, { start: 0.8 }), second);
  expect(a).toContain('0.2');
  expect(b).toContain('0.8');
  expect(getCssHost(first)?.snapshot()).toHaveLength(2);
  expect(getCssHost(first)?.cssText()).toContain('@keyframes');
  expect(getCssHost(first)?.cssText()).toBe(getCssHost(second)?.cssText());
});
