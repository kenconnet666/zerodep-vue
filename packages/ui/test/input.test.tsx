import { afterEach, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref, shallowRef } from 'vue';
import { _component } from '@zerodep-vue/core';
import { Input, Textarea } from '../src/index.ts';
import type { InputInstance } from '../src/index.ts';

const cleanup: (() => void)[] = [];
afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
});

test('input uses Vue composition handling and notifies only user value changes', async () => {
  const value = ref('initial');
  const changed = vi.fn();
  const committed = vi.fn();
  const native = vi.fn();
  const wrapper = mount(
    _component(() => (
      <Input
        value={value}
        onValueChange={changed}
        onValueCommit={committed}
        onInput={native}
        name="query"
      />
    )),
  );
  cleanup.push(() => wrapper.unmount());
  const input = wrapper.get('input');
  await input.trigger('compositionstart');
  input.element.value = '拼';
  await input.trigger('input');
  expect(value.value).toBe('initial');
  expect(changed).not.toHaveBeenCalled();
  input.element.value = '拼音';
  await input.trigger('compositionend');
  expect(value.value).toBe('拼音');
  expect(changed).toHaveBeenCalledExactlyOnceWith('拼音');
  await input.trigger('change');
  expect(committed).toHaveBeenCalledExactlyOnceWith('拼音');
  expect(native).toHaveBeenCalledTimes(2);
  value.value = 'external';
  await nextTick();
  expect(input.element.value).toBe('external');
  expect(changed).toHaveBeenCalledOnce();
  expect(input.attributes('name')).toBe('query');
});

test('input clear preserves focus and exposes its native element while read-only and disabled block changes', async () => {
  const value = ref('hello');
  const readOnly = ref(false);
  const disabled = ref(false);
  const instance = shallowRef<InputInstance>();
  const changed = vi.fn();
  const container = document.createElement('div');
  document.body.append(container);
  const wrapper = mount(
    _component(() => (
      <Input
        ref={instance}
        value={value}
        clearable
        readonly={readOnly.value}
        disabled={disabled.value}
        onValueChange={changed}
      />
    )),
    { attachTo: container },
  );
  cleanup.push(() => {
    wrapper.unmount();
    container.remove();
  });
  expect(instance.value?.element).toBe(wrapper.get('input').element);
  await wrapper.get('button').trigger('click');
  expect(value.value).toBe('');
  expect(document.activeElement).toBe(instance.value?.element);
  expect(changed).toHaveBeenCalledExactlyOnceWith('');
  value.value = 'protected';
  readOnly.value = true;
  await nextTick();
  expect(wrapper.find('button').exists()).toBe(false);
  await wrapper.get('input').setValue('ignored');
  expect(value.value).toBe('protected');
  readOnly.value = false;
  disabled.value = true;
  await nextTick();
  expect(wrapper.get('button').attributes('disabled')).toBeDefined();
  expect(changed).toHaveBeenCalledOnce();
});

test('native form reset restores the declared baseline, respects cancellation and follows form reassociation', async () => {
  const value = ref('initial');
  const owner = ref('first');
  const reset = vi.fn();
  const container = document.createElement('div');
  document.body.append(container);
  const wrapper = mount(
    _component(() => (
      <div>
        <form id="first" />
        <form id="second" />
        <Input value={value} resetValue="baseline" form={owner.value} onValueReset={reset} />
      </div>
    )),
    { attachTo: container },
  );
  cleanup.push(() => {
    wrapper.unmount();
    container.remove();
  });
  const first = wrapper.get<HTMLFormElement>('#first').element;
  const second = wrapper.get<HTMLFormElement>('#second').element;
  value.value = 'changed';
  await nextTick();
  first.reset();
  await Promise.resolve();
  await nextTick();
  expect(value.value).toBe('baseline');
  expect(wrapper.get('input').element.value).toBe('baseline');
  expect(reset).toHaveBeenCalledExactlyOnceWith('baseline');
  owner.value = 'second';
  value.value = 'new';
  await nextTick();
  first.reset();
  await Promise.resolve();
  expect(value.value).toBe('new');
  second.addEventListener('reset', (event) => event.preventDefault(), { once: true });
  second.reset();
  await Promise.resolve();
  expect(value.value).toBe('new');
  second.reset();
  await Promise.resolve();
  expect(value.value).toBe('baseline');
});

test('input follows replacement Refs and keeps its input DOM and name across visual changes', async () => {
  const source = shallowRef({ model: ref('one') });
  const variant = ref<'outline' | 'filled' | 'underlined'>('outline');
  const status = ref<'error' | undefined>();
  const wrapper = mount(
    _component(() => (
      <Input
        value={source.value.model}
        variant={variant.value}
        status={status.value}
        id="email"
        type="email"
        required
        prefix="邮箱"
        suffix="@"
        slotInput={{ 'data-probe': 'native' }}
      />
    )),
  );
  cleanup.push(() => wrapper.unmount());
  const input = wrapper.get('input').element;
  source.value = { model: ref('replacement') };
  variant.value = 'underlined';
  status.value = 'error';
  await nextTick();
  expect(wrapper.get('input').element).toBe(input);
  expect(input.value).toBe('replacement');
  expect(wrapper.get('input').attributes()).toMatchObject({
    id: 'email',
    type: 'email',
    'aria-invalid': 'true',
    'data-probe': 'native',
  });
});

test('textarea composes the shared frame, forwards slot handlers and preserves multiline values', async () => {
  const value = ref('first\nsecond');
  const changed = vi.fn();
  const native = vi.fn();
  const slotNative = vi.fn();
  const cancel = vi.fn((event: MouseEvent) => event.preventDefault());
  const wrapper = mount(
    _component(() => (
      <Textarea
        value={value}
        clearable
        rows={4}
        variant="filled"
        prefix="备注"
        slotPrefix={{ 'data-testid': 'prefix' }}
        slotTextarea={{ onInput: slotNative, 'data-testid': 'textarea' }}
        slotClear={{
          onClick: cancel,
          'data-testid': 'clear',
          slotIcon: { 'data-testid': 'clear-icon' },
        }}
        onInput={native}
        onValueChange={changed}
      />
    )),
  );
  cleanup.push(() => wrapper.unmount());
  const textarea = wrapper.get('textarea');
  expect(textarea.attributes('rows')).toBe('4');
  expect(textarea.element.value).toBe('first\nsecond');
  expect(wrapper.get('[data-testid="prefix"]').text()).toBe('备注');
  expect(wrapper.get('[data-testid="clear-icon"]').element.tagName.toLowerCase()).toBe('svg');
  await textarea.setValue('third\nfourth');
  expect(value.value).toBe('third\nfourth');
  expect(changed).toHaveBeenCalledExactlyOnceWith('third\nfourth');
  expect(native).toHaveBeenCalledOnce();
  expect(slotNative).toHaveBeenCalledOnce();
  await wrapper.get('[data-testid="clear"]').trigger('click');
  expect(cancel).toHaveBeenCalledOnce();
  expect(value.value).toBe('third\nfourth');
});

function contracts() {
  <Input value={ref('')} width="20em" size="_medium" slotClear={{ 'aria-label': '清空姓名' }} />;
  // @ts-expect-error 字符串输入不接收数值 Ref。
  <Input value={ref(1)} />;
  // @ts-expect-error 不隐式转换 number 类型输入。
  <Input type="number" />;
  // @ts-expect-error 样式 Props 使用普通值，不接受 Ref 容器。
  <Input size={ref(18)} />;
  <Textarea value={ref('')} resize="none" maxHeight="15em" />;
  // @ts-expect-error 多行文本不接收数值模型。
  <Textarea value={ref(1)} />;
  // @ts-expect-error 文本内容由模型管理。
  <Textarea innerHTML="bad" />;
}
void contracts;
