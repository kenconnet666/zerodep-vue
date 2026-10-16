import { afterEach, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref, shallowRef } from 'vue';
import type { Component } from 'vue';
import { _component } from '@zerodep-vue/core';
import { RadioGroup } from '../src/input/RadioGroup.tsx';
import type { RadioGroupValue, RadioOption } from '../src/input/RadioGroup.tsx';

const cleanup: (() => void)[] = [];
afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
});

function mountGroup(component: Component) {
  const container = document.createElement('div');
  document.body.append(container);
  const wrapper = mount(component, { attachTo: container });
  cleanup.push(() => {
    wrapper.unmount();
    container.remove();
  });
  return wrapper;
}

test('radio group keeps typed values and notifies merged callbacks once per native selection', async () => {
  const value = ref<RadioGroupValue>(1);
  const callbacks: string[] = [];
  const first = (next: string | number) => callbacks.push(`first:${typeof next}:${next}`);
  const second = (next: string | number) => callbacks.push(`second:${typeof next}:${next}`);
  const commit = (next: string | number) => callbacks.push(`commit:${typeof next}:${next}`);
  const wrapper = mountGroup(
    _component(() => (
      <form>
        <RadioGroup
          {...{ onValueChange: first }}
          value={value}
          name="choice"
          label="选择"
          options={[
            { value: 1, label: '数值' },
            { value: '1', label: '字符串', formValue: 'string-one' },
          ]}
          onValueChange={second}
          onValueCommit={[commit]}
        />
      </form>
    )),
  );
  const inputs = wrapper.findAll<HTMLInputElement>('input');
  expect(inputs.map((input) => input.element.checked)).toEqual([true, false]);
  inputs[1]!.element.click();
  await nextTick();
  expect(value.value).toBe('1');
  expect(inputs.map((input) => input.element.checked)).toEqual([false, true]);
  expect(callbacks).toEqual(['first:string:1', 'second:string:1', 'commit:string:1']);
  expect(new FormData(wrapper.get<HTMLFormElement>('form').element).get('choice')).toBe(
    'string-one',
  );
  inputs[1]!.element.click();
  await nextTick();
  expect(callbacks).toHaveLength(3);
  value.value = 1;
  await nextTick();
  expect(inputs[0]!.element.checked).toBe(true);
  expect(callbacks).toHaveLength(3);
});

test('a synchronous callback can restore the previous selection without losing native checked state', async () => {
  const value = ref<RadioGroupValue>('a');
  const wrapper = mountGroup(
    _component(() => (
      <form>
        <RadioGroup
          value={value}
          name="choice"
          options={[
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
          ]}
          onValueChange={() => {
            value.value = 'a';
          }}
        />
      </form>
    )),
  );
  const inputs = wrapper.findAll<HTMLInputElement>('input');
  inputs[1]!.element.click();
  await nextTick();
  expect(value.value).toBe('a');
  expect(inputs.map((input) => input.element.checked)).toEqual([true, false]);
  expect(new FormData(wrapper.get('form').element).get('choice')).toBe('a');
});

test('dynamic options preserve the model while the group owns one initial reset baseline', async () => {
  const value = ref<RadioGroupValue>('initial');
  const options = shallowRef<readonly RadioOption[]>([
    { value: 'initial', label: '初始' },
    { value: 'other', label: '其他' },
  ]);
  const reset = vi.fn();
  const changed = vi.fn();
  const wrapper = mountGroup(
    _component(() => (
      <form>
        <RadioGroup
          value={value}
          name="dynamic"
          options={options.value}
          onValueReset={[reset]}
          onValueChange={changed}
        />
      </form>
    )),
  );
  value.value = 'unlisted';
  options.value = [
    { value: 'other', label: '其他' },
    { value: 'late', label: '后来加入' },
  ];
  await nextTick();
  expect(value.value).toBe('unlisted');
  expect(wrapper.findAll<HTMLInputElement>('input').every((input) => !input.element.checked)).toBe(
    true,
  );
  expect(changed).not.toHaveBeenCalled();
  options.value = [...options.value, { value: 'initial', label: '重新加入初始项' }];
  await nextTick();
  wrapper.get<HTMLFormElement>('form').element.reset();
  await Promise.resolve();
  await nextTick();
  expect(value.value).toBe('initial');
  expect(wrapper.findAll<HTMLInputElement>('input').map((input) => input.element.checked)).toEqual([
    false,
    false,
    true,
  ]);
  expect(reset).toHaveBeenCalledExactlyOnceWith('initial');
  expect(changed).not.toHaveBeenCalled();
});

test('radio group reset respects cancellation and later external form association', async () => {
  const visible = ref(false);
  const value = ref<RadioGroupValue>('a');
  const reset = vi.fn();
  const wrapper = mountGroup(
    _component(() => (
      <div>
        {visible.value && <form id="radio-owner" />}
        <RadioGroup
          value={value}
          resetValue={null}
          form="radio-owner"
          name="external"
          options={[
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
          ]}
          onValueReset={reset}
        />
      </div>
    )),
  );
  visible.value = true;
  await nextTick();
  const form = wrapper.get<HTMLFormElement>('form').element;
  expect(
    wrapper.findAll<HTMLInputElement>('input').every((input) => input.element.form === form),
  ).toBe(true);
  form.addEventListener('reset', (event) => event.preventDefault(), { once: true });
  form.reset();
  await Promise.resolve();
  await nextTick();
  expect(value.value).toBe('a');
  expect(reset).not.toHaveBeenCalled();
  form.reset();
  await Promise.resolve();
  await nextTick();
  expect(value.value).toBeNull();
  expect(reset).toHaveBeenCalledExactlyOnceWith(null);
  expect(wrapper.findAll<HTMLInputElement>('input').every((input) => !input.element.checked)).toBe(
    true,
  );
});

test('radio group keeps required validation, read-only state and native fieldset disabling', async () => {
  const value = ref<RadioGroupValue>(null);
  const readOnly = ref(false);
  const disabled = ref(false);
  const wrapper = mountGroup(
    _component(() => (
      <form>
        <RadioGroup
          value={value}
          name="required"
          required
          readonly={readOnly.value}
          disabled={disabled.value}
          options={[
            { value: 'a', label: 'A' },
            { value: 'disabled', label: '禁用项', disabled: true },
            { value: 'b', label: 'B' },
          ]}
        />
      </form>
    )),
  );
  const form = wrapper.get<HTMLFormElement>('form').element;
  const inputs = wrapper.findAll<HTMLInputElement>('input');
  expect(form.checkValidity()).toBe(false);
  inputs[1]!.element.click();
  await nextTick();
  expect(value.value).toBeNull();
  inputs[0]!.element.click();
  await nextTick();
  expect(value.value).toBe('a');
  expect(form.checkValidity()).toBe(true);
  readOnly.value = true;
  await nextTick();
  expect(new FormData(form).get('required')).toBe('a');
  inputs[2]!.element.click();
  await nextTick();
  expect(value.value).toBe('a');
  // jsdom 取消 radio 点击时不会恢复同组旧选中项；该原生恢复行为由浏览器回归验证。
  const arrow = new KeyboardEvent('keydown', {
    key: 'ArrowRight',
    bubbles: true,
    cancelable: true,
  });
  inputs[0]!.element.dispatchEvent(arrow);
  expect(arrow.defaultPrevented).toBe(true);
  disabled.value = true;
  readOnly.value = false;
  await nextTick();
  inputs[2]!.element.click();
  await nextTick();
  expect(value.value).toBe('a');
  expect(new FormData(form).has('required')).toBe(false);
});

test('generated names isolate groups and slot props reach shared lower components', async () => {
  const first = ref<RadioGroupValue>('a');
  const second = ref<RadioGroupValue>('a');
  const native = vi.fn();
  const focusout = vi.fn();
  const options = [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
  ];
  const wrapper = mountGroup(
    _component(() => (
      <div>
        <RadioGroup
          value={first}
          options={options}
          orientation="vertical"
          class="radio-group"
          style={{ marginBlockStart: '1em' }}
          onFocusout={focusout}
          slotOption={{ 'data-testid': 'option', class: 'radio-option' }}
          slotInput={{ 'data-testid': 'input', class: 'radio-input', onChange: native }}
          slotIndicator={{ 'data-testid': 'indicator', class: 'radio-indicator' }}
          slotLabel={{ 'data-testid': 'label', size: '_small', class: 'radio-label' }}
        />
        <RadioGroup value={second} options={options} />
      </div>
    )),
  );
  const groups = wrapper.findAll('fieldset');
  const firstInputs = groups[0]!.findAll<HTMLInputElement>('input');
  const secondInputs = groups[1]!.findAll<HTMLInputElement>('input');
  expect(firstInputs[0]!.element.name).toBe(firstInputs[1]!.element.name);
  expect(firstInputs[0]!.element.name).not.toBe(secondInputs[0]!.element.name);
  secondInputs[1]!.element.click();
  await nextTick();
  expect(firstInputs[0]!.element.checked).toBe(true);
  firstInputs[1]!.element.click();
  await nextTick();
  expect(native).toHaveBeenCalledOnce();
  expect(groups[0]!.classes()).toContain('radio-group');
  expect(groups[0]!.attributes('style')).toContain('margin-block-start: 1em');
  expect(groups[0]!.attributes('aria-orientation')).toBe('vertical');
  expect(wrapper.get('[data-testid="option"]').classes()).toContain('radio-option');
  expect(wrapper.get('[data-testid="input"]').classes()).toContain('radio-input');
  expect(wrapper.get('[data-testid="indicator"]').classes()).toContain('radio-indicator');
  expect(wrapper.get('[data-testid="label"]').classes()).toContain('radio-label');
  firstInputs[1]!.element.dispatchEvent(
    new FocusEvent('focusout', { bubbles: true, relatedTarget: firstInputs[0]!.element }),
  );
  expect(focusout).toHaveBeenCalledOnce();
});

test('radio group elementRef follows native Vue replacement and unmount', async () => {
  const visible = ref(true);
  const original = shallowRef<HTMLFieldSetElement | null | undefined>();
  const replacement = shallowRef<HTMLFieldSetElement | null | undefined>();
  const source = shallowRef({ element: original });
  const wrapper = mountGroup(
    _component(() => (
      <div>
        {visible.value && (
          <RadioGroup elementRef={source.value.element} options={[{ value: 'a', label: 'A' }]} />
        )}
      </div>
    )),
  );
  const fieldset = wrapper.get('fieldset').element;
  expect(original.value).toBe(fieldset);
  source.value = { element: replacement };
  await nextTick();
  expect(original.value).toBeNull();
  expect(replacement.value).toBe(fieldset);
  visible.value = false;
  await nextTick();
  expect(replacement.value).toBeNull();
});

function contracts() {
  <RadioGroup
    value={ref<RadioGroupValue>(null)}
    options={[{ value: 1, label: '一' }]}
    accentColor={null}
  />;
  // @ts-expect-error 单选模型使用字符串、数值或空值。
  <RadioGroup value={ref(true)} options={[]} />;
  // @ts-expect-error 多项共享的原生属性不能产生重复 id。
  <RadioGroup options={[]} slotInput={{ id: 'duplicate' }} />;
  // @ts-expect-error 选项标签共享属性不能产生重复 id。
  <RadioGroup options={[]} slotLabel={{ id: 'duplicate' }} />;
  // @ts-expect-error 选项容器共享属性不能产生重复 id。
  <RadioGroup options={[]} slotOption={{ id: 'duplicate' }} />;
  // @ts-expect-error 选项只能使用明确的字符串或数值。
  <RadioGroup options={[{ value: true, label: '无效' }]} />;
}
void contracts;
