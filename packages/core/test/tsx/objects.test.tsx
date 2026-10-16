import { afterEach, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { createSSRApp, nextTick, ref, shallowRef } from 'vue';
import { renderToString } from '@vue/server-renderer';
import {
  _button,
  _component,
  _div,
  _input,
  cloneCssVNode,
  createCssHost,
  getCssHost,
} from '@zerodep-vue/core';
import type { Props } from '@zerodep-vue/core';

const wrappers: VueWrapper[] = [];
const targets: HTMLElement[] = [];
afterEach(() => {
  for (const wrapper of wrappers.splice(0)) wrapper.unmount();
  for (const target of targets.splice(0)) target.remove();
});
function host() {
  const target = document.createElement('div');
  document.head.append(target);
  targets.push(target);
  return createCssHost({ target, maxUnusedRules: 0 });
}
function variables(element: Element) {
  const style = (element as HTMLElement).style;
  return Array.from(style)
    .filter((name) => name.startsWith('--zv-'))
    .map((name) => style.getPropertyValue(name));
}

test('props spread keeps CSS ordered, updates refs/attributes and releases its rules', async () => {
  const width = ref(20);
  const disabled = ref(false);
  const attrs = shallowRef<Props<typeof _button>>({ id: 'first', css: { color: 'blue' } });
  const element = ref<HTMLButtonElement>();
  const Button = _component(({ children, ...rest }: Props<typeof _button>) => (
    <_button
      css={{ color: 'red', width: width.value, ':disabled': { opacity: 0.5 } }}
      {...rest}
      ref={element}
      disabled={disabled.value}
    >
      {children}
    </_button>
  ));
  const App = _component(() => <Button {...attrs.value}>content</Button>);
  const styles = host();
  const wrapper = mount(App, { global: { plugins: [styles] } });
  wrappers.push(wrapper);
  const firstClass = wrapper.attributes('class');
  expect(wrapper.element).toBe(element.value);
  expect(wrapper.text()).toBe('content');
  expect(wrapper.attributes('css')).toBeUndefined();
  expect(variables(wrapper.element)).toEqual(['20px', 'blue']);
  expect(targets.at(-1)!.textContent).not.toContain('color:red');
  width.value = 40;
  disabled.value = true;
  await nextTick();
  expect(wrapper.attributes('class')).toBe(firstClass);
  expect(wrapper.attributes('disabled')).toBe('');
  expect(variables(wrapper.element)).toEqual(['40px', 'blue']);
  attrs.value = { class: 'external' };
  await nextTick();
  expect(wrapper.attributes('id')).toBeUndefined();
  expect(wrapper.classes()).toContain('external');
  expect(targets.at(-1)!.textContent).toContain('color:red');
  wrapper.unmount();
  expect(targets.at(-1)!.textContent).toBe('');
});

test('native input model and ref remain DOM protocols', async () => {
  const value = ref('first');
  const input = ref<HTMLInputElement>();
  const App = _component(() => <_input ref={input} v-model={value.value} css={{ width: 100 }} />);
  const wrapper = mount(App, { global: { plugins: [host()] } });
  wrappers.push(wrapper);
  expect(wrapper.element).toBe(input.value);
  expect(input.value?.value).toBe('first');
  await wrapper.get('input').setValue('changed');
  expect(value.value).toBe('changed');
});

test('cloning CSS keeps native class/style and raw state attributes independent', async () => {
  const pressed = ref<boolean | 'mixed'>('mixed');
  const color = ref('red');
  const App = _component(() =>
    cloneCssVNode(
      <_button
        aria-pressed={pressed.value}
        data-active={false}
        class="base"
        css={{ color: color.value, 'aria-pressed': { mixed: { opacity: 0.5 } } }}
      />,
      { class: 'copy', style: { margin: '2px' }, css: { padding: 4 } },
    ),
  );
  const wrapper = mount(App, { global: { plugins: [host()] } });
  wrappers.push(wrapper);
  expect(wrapper.classes()).toEqual(expect.arrayContaining(['base', 'copy']));
  expect(wrapper.attributes('aria-pressed')).toBe('mixed');
  expect(wrapper.attributes('data-active')).toBe('false');
  expect((wrapper.element as HTMLElement).style.margin).toBe('2px');
  color.value = 'blue';
  pressed.value = false;
  await nextTick();
  expect(variables(wrapper.element)).toEqual(['blue', '4px']);
  expect(wrapper.attributes('aria-pressed')).toBe('false');
});

test('SSR collects CSS objects and runtime variables cannot be overwritten by inline style', async () => {
  const App = _component(() => <_div css={{ width: 30, ':hover': { color: 'red' } }} />);
  const app = createSSRApp(App);
  const context = {};
  const html = await renderToString(app, context);
  expect(html).not.toContain('css=');
  expect(html).toContain('zv-');
  expect(getCssHost(context)?.renderStyles()).toContain(':hover');
  for (const style of [{ '--zv-forged': 'red' }, '--zv-forged:red']) {
    const Bad = _component(() => <_div css={{ color: 'blue' }} style={style} />);
    const invalid = createSSRApp(Bad);
    invalid.config.warnHandler = () => {};
    await expect(renderToString(invalid)).rejects.toThrow('--zv-*');
  }
});
