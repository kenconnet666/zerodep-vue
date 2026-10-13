/** @jsxImportSource @zerodep-vue/tsx */
import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createSSRApp, nextTick, ref } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { _component } from '@zerodep-vue/tsx';
import { bx, css, createCssHost, getCssHost } from '@zerodep-vue/css';

test('keyframes share rule leases, update inline values and release on the last removal', async () => {
  const target = document.createElement('div');
  document.head.appendChild(target);
  const host = createCssHost({ target, maxUnusedRules: 0 });
  const opacity = ref(0.2);
  const show = ref(true);
  const App = _component(() => {
    const fade = css.keyframes({ from: { opacity: bx(opacity.value) }, to: { opacity: 1 } });
    const style = css({ animation: `${fade} 1s linear` });
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
    const fade = css.keyframes({ from: { opacity: bx(start) }, to: { opacity: 1 } });
    return <div class={css({ animationName: fade, animationDuration: '1s' })} />;
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
