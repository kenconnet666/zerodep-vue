import { afterEach, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { nextTick, ref, shallowReactive, shallowRef } from 'vue';
import { _component, bx, createCssHost, useCss } from '@zerodep-vue/core';
import type { CssHost } from '@zerodep-vue/core';
import { Button } from '../../../../fixtures/controls/Button.tsx';
import { ToggleButton } from '../../../../fixtures/controls/ToggleButton.tsx';
import { TextInput } from '../../../../fixtures/controls/TextInput.tsx';
import { ControlTheme, controlTheme } from '../../../../fixtures/controls/theme.ts';

const mounted: {
  wrapper: VueWrapper;
  host: CssHost;
  target: HTMLElement;
  container: HTMLElement;
}[] = [];
afterEach(() => {
  for (const { wrapper, host, target, container } of mounted.splice(0)) {
    wrapper.unmount();
    expect(host.stats().ownedReferences).toBe(0);
    host.dispose();
    target.remove();
    container.remove();
  }
});
function render(App: Parameters<typeof mount>[0]) {
  const target = document.createElement('div');
  document.head.append(target);
  const host = createCssHost({ target, maxUnusedRules: 0 });
  const container = document.createElement('div');
  document.body.append(container);
  const wrapper = mount(App, { attachTo: container, global: { plugins: [host] } });
  mounted.push({ wrapper, host, target, container });
  return { wrapper, host, target };
}

test('button attrs, defaults and loading prevent duplicate callbacks and restore interaction', async () => {
  const loading = ref(false);
  const disabled = ref(false);
  let calls = 0;
  const App = _component(() => (
    <Button
      id="save"
      title="保存标题"
      loading={loading.value}
      disabled={disabled.value}
      onClick={() => {
        calls++;
      }}
    >
      保存
    </Button>
  ));
  const { wrapper } = render(App);
  const button = wrapper.get('button');
  expect(button.attributes()).toMatchObject({ id: 'save', title: '保存标题', type: 'button' });
  expect(button.text()).toBe('保存');
  await button.trigger('click');
  expect(calls).toBe(1);
  loading.value = true;
  await nextTick();
  expect(button.element.disabled).toBe(true);
  expect(button.attributes('aria-busy')).toBe('true');
  expect(button.get('[role=status]').attributes('aria-label')).toBe('正在处理');
  button.element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(calls).toBe(1);
  loading.value = false;
  disabled.value = true;
  await nextTick();
  expect(button.attributes('aria-busy')).toBeUndefined();
  expect(button.find('[role=status]').exists()).toBe(false);
  button.element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(calls).toBe(1);
  disabled.value = false;
  await nextTick();
  await button.trigger('click');
  expect(calls).toBe(2);
});

test('toggle and input wrappers follow replacement Refs and invoke each callback once', async () => {
  const firstPressed = ref(false);
  const firstText = ref('first');
  const holder = shallowReactive({ pressed: firstPressed, text: firstText });
  let calls = 0;
  const App = _component(() => (
    <>
      <ToggleButton
        pressed={holder.pressed}
        aria-label="固定"
        onClick={() => {
          calls++;
        }}
      >
        切换
      </ToggleButton>
      <TextInput model={holder.text} label="标题" />
    </>
  ));
  const { wrapper } = render(App);
  const toggle = wrapper.get('button');
  expect(toggle.attributes('aria-pressed')).toBe('false');
  await toggle.trigger('click');
  expect(firstPressed.value).toBe(true);
  expect(calls).toBe(1);
  await wrapper.get('input').setValue('edited');
  expect(firstText.value).toBe('edited');
  holder.pressed = ref(false);
  holder.text = ref('replacement');
  await nextTick();
  expect(toggle.attributes('aria-pressed')).toBe('false');
  expect(wrapper.get('input').element.value).toBe('replacement');
  await toggle.trigger('click');
  await wrapper.get('input').setValue('latest');
  expect(holder.pressed.value).toBe(true);
  expect(holder.text.value).toBe('latest');
  expect(firstText.value).toBe('edited');
  expect(firstPressed.value).toBe(true);
  expect(calls).toBe(2);
});

test('shared buttons preserve class forwarding, independent branches and reactive theme bindings', async () => {
  const palette = shallowRef(new ControlTheme());
  const width = ref(120);
  const compact = ref(false);
  const s = useCss();
  const App = _component(() => {
    controlTheme.provide(palette);
    return (
      <>
        <Button data-test="base">普通</Button>
        <Button
          data-test="custom"
          compact={compact.value}
          class={s.width(bx(width.value))}
          style={{ minWidth: '80px' }}
        >
          定制
        </Button>
      </>
    );
  });
  const { wrapper, host, target } = render(App);
  const base = wrapper.get('[data-test=base]');
  const custom = wrapper.get('[data-test=custom]');
  const baseClass = base.attributes('class');
  const customClass = custom.attributes('class');
  const rules = host.stats().activeRules;
  expect(rules).toBeGreaterThan(0);
  expect(custom.attributes('style')).toContain('120px');
  expect(custom.attributes('style')).toContain('min-width: 80px');
  width.value = 180;
  palette.value = new ControlTheme('rgb(126, 34, 206)');
  await nextTick();
  expect(base.attributes('class')).toBe(baseClass);
  expect(custom.attributes('class')).toBe(customClass);
  expect(custom.attributes('style')).toContain('180px');
  expect(base.attributes('style')).toContain('rgb(126, 34, 206)');
  expect(host.stats().activeRules).toBe(rules);
  compact.value = true;
  await nextTick();
  expect(custom.attributes('class')).not.toBe(customClass);
  expect(base.attributes('class')).toBe(baseClass);
  expect(target.textContent).toContain('padding:8px 12px;');
  expect(target.textContent).toContain('padding:4px 8px;');
});
