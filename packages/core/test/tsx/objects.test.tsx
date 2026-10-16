import { renderToString } from '@vue/server-renderer';
import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import type { Props, Slot } from '@zerodep-vue/core';
import {
  _button,
  _component,
  _div,
  _input,
  cloneCssVNode,
  createCssHost,
  getCssHost,
} from '@zerodep-vue/core';
import { afterEach, expect, test } from 'vitest';
import { createSSRApp, nextTick, ref, shallowRef } from 'vue';

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

test('plain props spread forwards children through wrappers and removes replaced content', async () => {
  const label = ref('first');
  const Forward = _component((props: Props<typeof _div>) => <_div {...props} />);
  const Wrapper = _component((props: Props<typeof Forward>) => <Forward {...props} />);
  const App = _component(() => (
    <Wrapper>
      <span>{label.value}</span>
    </Wrapper>
  ));
  const wrapper = mount(App);
  wrappers.push(wrapper);
  expect(wrapper.text()).toBe('first');
  expect(wrapper.attributes('children')).toBeUndefined();
  label.value = 'next';
  await nextTick();
  expect(wrapper.text()).toBe('next');
  const Explicit = _component(() => <_div children="explicit" />);
  const explicit = mount(Explicit);
  wrappers.push(explicit);
  expect(explicit.text()).toBe('explicit');
});

test('slot attributes compose across wrappers, then owned state wins on the actual child', async () => {
  type WithSlot = Props<typeof _div, { slotButton?: Slot<typeof _button, 'disabled'> }>;
  const width = ref(20);
  const calls: string[] = [];
  const attrs = shallowRef<WithSlot>({
    slotButton: { class: 'external', css: { width: 20 }, onClick: () => calls.push('external') },
  });
  const Child = _component(({ slotButton, ...rest }: WithSlot) => (
    <_div {...rest}>
      <_button css={{ color: 'red', width: width.value }} {...slotButton} disabled={false}>
        child
      </_button>
    </_div>
  ));
  const Wrapper = _component((props: WithSlot) => (
    <Child
      slotButton={{ title: 'default', css: { padding: 4 }, onClick: () => calls.push('wrapper') }}
      {...props}
    />
  ));
  const App = _component(() => <Wrapper {...attrs.value} />);
  const wrapper = mount(App, { global: { plugins: [host()] } });
  wrappers.push(wrapper);
  const button = wrapper.get('button');
  expect(button.attributes('title')).toBe('default');
  expect(button.classes()).toContain('external');
  expect(button.attributes('disabled')).toBeUndefined();
  expect(variables(button.element)).toEqual(['4px', '20px']);
  await button.trigger('click');
  expect(calls).toEqual(['wrapper', 'external']);
  attrs.value = {};
  width.value = 40;
  await nextTick();
  expect(button.classes()).not.toContain('external');
  expect(variables(button.element)).toEqual(['40px', '4px']);
  await button.trigger('click');
  expect(calls).toEqual(['wrapper', 'external', 'wrapper']);
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
