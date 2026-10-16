import { afterEach, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref, shallowRef } from 'vue';
import type { Component } from 'vue';
import { _component } from '@zerodep-vue/core';
import { Checkbox } from '../src/input/Checkbox.tsx';
import { Switch } from '../src/input/Switch.tsx';

const cleanup: (() => void)[] = [];
afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
});

function mountChoice(component: Component) {
  // 原生 checkbox 的 change/default activation 需要节点连接到文档。
  const container = document.createElement('div');
  document.body.append(container);
  const wrapper = mount(component, { attachTo: container });
  cleanup.push(() => {
    wrapper.unmount();
    container.remove();
  });
  return wrapper;
}

test.each([
  ['checkbox', Checkbox],
  ['switch', Switch],
] as const)(
  '%s keeps a writable Ref and notifies merged callbacks once per native activation',
  async (_, Control) => {
    const value = ref(false);
    const calls: string[] = [];
    const first = vi.fn((next: boolean) => calls.push(`first:${next}`));
    const second = vi.fn((next: boolean) => calls.push(`second:${next}`));
    const commit = vi.fn((next: boolean) => calls.push(`commit:${next}`));
    const slotClick = vi.fn();
    const click = vi.fn();
    const wrapper = mountChoice(
      _component(() => (
        <Control
          {...{ onValueChange: first }}
          value={value}
          onValueChange={second}
          onValueCommit={[commit]}
          onClick={click}
          slotInput={{ onClick: slotClick }}
        >
          接受通知
        </Control>
      )),
    );
    const input = wrapper.get<HTMLInputElement>('input');
    input.element.click();
    await nextTick();
    expect(value.value).toBe(true);
    expect(input.element.checked).toBe(true);
    expect(calls).toEqual(['first:true', 'second:true', 'commit:true']);
    expect(slotClick).toHaveBeenCalledOnce();
    expect(click).toHaveBeenCalledOnce();
    value.value = false;
    await nextTick();
    expect(input.element.checked).toBe(false);
    expect(first).toHaveBeenCalledOnce();
    expect(second).toHaveBeenCalledOnce();
    expect(commit).toHaveBeenCalledOnce();
  },
);

test.each([
  ['checkbox', Checkbox],
  ['switch', Switch],
] as const)(
  '%s keeps read-only focus and submission while native disabled fieldsets block activation',
  async (_, Control) => {
    const value = ref(true);
    const readOnly = ref(true);
    const disabled = ref(false);
    const changed = vi.fn();
    const wrapper = mountChoice(
      _component(() => (
        <form>
          <fieldset disabled={disabled.value}>
            <Control
              value={value}
              readonly={readOnly.value}
              name="enabled"
              formValue="yes"
              onValueChange={changed}
            >
              启用
            </Control>
          </fieldset>
        </form>
      )),
    );
    const input = wrapper.get<HTMLInputElement>('input');
    const form = wrapper.get<HTMLFormElement>('form').element;
    input.element.focus();
    wrapper.get('label').element.click();
    await nextTick();
    expect(value.value).toBe(true);
    expect(input.element.checked).toBe(true);
    expect(document.activeElement).toBe(input.element);
    expect(input.attributes('aria-readonly')).toBe('true');
    expect(new FormData(form).get('enabled')).toBe('yes');
    disabled.value = true;
    readOnly.value = false;
    await nextTick();
    input.element.click();
    await nextTick();
    expect(value.value).toBe(true);
    expect(new FormData(form).has('enabled')).toBe(false);
    expect(changed).not.toHaveBeenCalled();
    disabled.value = false;
    await nextTick();
    input.element.click();
    await nextTick();
    expect(value.value).toBe(false);
    expect(changed).toHaveBeenCalledExactlyOnceWith(false);
  },
);

test('checkbox preserves the controlled mixed state, replacement Refs and native inputRef', async () => {
  const source = shallowRef({ value: ref(false) });
  const indeterminate = ref(true);
  const visible = ref(true);
  const inputRef = shallowRef<HTMLInputElement | null | undefined>();
  const targetRef = shallowRef({ input: inputRef });
  const changed = vi.fn();
  const wrapper = mountChoice(
    _component(() => (
      <div>
        {visible.value && (
          <Checkbox
            inputRef={targetRef.value.input}
            value={source.value.value}
            indeterminate={indeterminate.value}
            onValueChange={changed}
          >
            全部选择
          </Checkbox>
        )}
      </div>
    )),
  );
  const input = wrapper.get<HTMLInputElement>('input');
  expect(inputRef.value).toBe(input.element);
  expect(input.element.indeterminate).toBe(true);
  expect(input.attributes('aria-checked')).toBe('mixed');
  input.element.click();
  await nextTick();
  expect(source.value.value.value).toBe(true);
  expect(input.element.indeterminate).toBe(true);
  expect(changed).toHaveBeenCalledExactlyOnceWith(true);
  source.value = { value: ref(false) };
  indeterminate.value = false;
  await nextTick();
  expect(input.element.checked).toBe(false);
  expect(input.element.indeterminate).toBe(false);
  expect(input.attributes('aria-checked')).toBe('false');
  const replacementRef = shallowRef<HTMLInputElement | null | undefined>();
  targetRef.value = { input: replacementRef };
  await nextTick();
  expect(inputRef.value).toBeNull();
  expect(replacementRef.value).toBe(input.element);
  visible.value = false;
  await nextTick();
  expect(replacementRef.value).toBeNull();
});

test('choice reset follows a later form owner and preserves cancellation and per-control baselines', async () => {
  const visible = ref(false);
  const checkbox = ref(false);
  const switched = ref(true);
  const resetCheckbox = vi.fn();
  const resetSwitch = vi.fn();
  const changed = vi.fn();
  const wrapper = mountChoice(
    _component(() => (
      <div>
        {visible.value && <form id="choice-owner" />}
        <Checkbox
          value={checkbox}
          resetValue
          form="choice-owner"
          onValueReset={[resetCheckbox]}
          onValueChange={changed}
        />
        <Switch
          value={switched}
          resetValue={false}
          form="choice-owner"
          onValueReset={resetSwitch}
          onValueChange={changed}
        />
      </div>
    )),
  );
  visible.value = true;
  await nextTick();
  const form = wrapper.get<HTMLFormElement>('form').element;
  form.addEventListener('reset', (event) => event.preventDefault(), { once: true });
  form.reset();
  await Promise.resolve();
  await nextTick();
  expect(checkbox.value).toBe(false);
  expect(switched.value).toBe(true);
  expect(resetCheckbox).not.toHaveBeenCalled();
  form.reset();
  await Promise.resolve();
  await nextTick();
  expect(checkbox.value).toBe(true);
  expect(switched.value).toBe(false);
  expect(resetCheckbox).toHaveBeenCalledExactlyOnceWith(true);
  expect(resetSwitch).toHaveBeenCalledExactlyOnceWith(false);
  expect(changed).not.toHaveBeenCalled();
  expect(wrapper.findAll<HTMLInputElement>('input').map((input) => input.element.checked)).toEqual([
    true,
    false,
  ]);
});

test('choice slots forward native events and lower Text props without taking ownership of the model', async () => {
  const value = ref(false);
  const cancelled = vi.fn((event: MouseEvent) => event.preventDefault());
  const wrapper = mountChoice(
    _component(() => (
      <Switch
        value={value}
        id="notifications"
        name="notifications"
        status="error"
        class="outer-choice"
        style={{ marginInlineStart: '1em' }}
        slotInput={{ 'data-testid': 'input', class: 'native-choice', onClick: cancelled }}
        slotIndicator={{ 'data-testid': 'indicator', class: 'track-choice' }}
        slotThumb={{ 'data-testid': 'thumb', class: 'thumb-choice' }}
        slotLabel={{ 'data-testid': 'label', color: '_textSecondary', class: 'label-choice' }}
      >
        通知
      </Switch>
    )),
  );
  const input = wrapper.get<HTMLInputElement>('[data-testid="input"]');
  expect(input.attributes()).toMatchObject({
    id: 'notifications',
    name: 'notifications',
    type: 'checkbox',
    role: 'switch',
    'aria-invalid': 'true',
  });
  expect(wrapper.get('label').classes()).toContain('outer-choice');
  expect(wrapper.get('label').attributes('style')).toContain('margin-inline-start: 1em');
  expect(input.classes()).toContain('native-choice');
  expect(wrapper.get('[data-testid="indicator"]').classes()).toContain('track-choice');
  expect(wrapper.get('[data-testid="thumb"]').classes()).toContain('thumb-choice');
  expect(wrapper.get('[data-testid="label"]').text()).toBe('通知');
  expect(wrapper.get('[data-testid="label"]').classes()).toContain('label-choice');
  input.element.click();
  await nextTick();
  expect(cancelled).toHaveBeenCalledOnce();
  expect(value.value).toBe(false);
  expect(input.element.checked).toBe(false);
});

function contracts() {
  <Checkbox value={ref(false)} indeterminate size="_medium" accentColor="_success" />;
  <Switch value={ref(true)} name="notify" formValue="yes" slotLabel={{ size: '_small' }} />;
  // @ts-expect-error 业务值固定为布尔 Ref，不通过字符串自动转换。
  <Checkbox value={ref('yes')} />;
  // @ts-expect-error checkbox 的提交值单独使用 formValue。
  <Switch value="yes" />;
  // @ts-expect-error 组件管理原生 checked，避免双模型来源。
  <Checkbox checked />;
}
void contracts;
