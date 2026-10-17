import { afterEach, expect, test, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { computed, createSSRApp, nextTick, ref, shallowRef, watch } from 'vue';
import type { Component } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { z } from 'zod';
import { _component } from '@zerodep-vue/core';
import { Field, Input, Listbox, Select, useField } from '../src/index.ts';

const cleanup: (() => void)[] = [];
afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
  vi.useRealTimers();
});
function attach(component: Component) {
  const node = document.createElement('div');
  document.body.append(node);
  const wrapper = mount(component, { attachTo: node });
  cleanup.push(() => {
    wrapper.unmount();
    node.remove();
  });
  return wrapper;
}
function key(element: Element, value: string) {
  element.dispatchEvent(
    new KeyboardEvent('keydown', { key: value, bubbles: true, cancelable: true }),
  );
}
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];
const getKey = (user: (typeof users)[number]) => user.id;
const getLabel = (user: (typeof users)[number]) => user.name;

test('listbox separates active navigation, selection, disabled items and typeahead', async () => {
  const value = shallowRef<(typeof users)[number] | null>(null);
  const changed = vi.fn();
  const committed = vi.fn();
  const wrapper = attach(
    _component(() => (
      <Listbox
        value={value}
        options={users}
        getKey={getKey}
        getLabel={getLabel}
        isOptionDisabled={(user) => user.id === 2}
        aria-label="用户"
        onValueChange={changed}
        onValueCommit={committed}
      />
    )),
  );
  const list = wrapper.get('[role=listbox]');
  key(list.element, 'ArrowDown');
  await nextTick();
  expect(value.value).toBeNull();
  expect(wrapper.get('[data-active]').attributes('aria-label')).toBe('Charlie');
  key(list.element, 'Enter');
  await nextTick();
  expect(value.value).toBe(users[2]);
  expect(changed).toHaveBeenCalledOnce();
  expect(committed).toHaveBeenCalledOnce();
  key(list.element, 'Home');
  key(list.element, 'b');
  await nextTick();
  expect(wrapper.get('[data-active]').attributes('aria-label')).toBe('Alice');
  key(list.element, 'c');
  await nextTick();
  // 连续输入 bc 不应错误跳到 Charlie。
  expect(wrapper.get('[data-active]').attributes('aria-label')).toBe('Alice');
  key(list.element, 'Enter');
  await nextTick();
  expect(value.value).toBe(users[0]);
  expect(wrapper.findAll('[role=option][tabindex="0"]')).toHaveLength(0);
});

test('stable keys preserve objects across refresh, missing options and callback rollback', async () => {
  const value = shallowRef<(typeof users)[number] | null>(users[0]!);
  const options = shallowRef(users);
  const revert = ref(false);
  const replacement = { id: 1, name: 'Updated Alice' };
  const wrapper = attach(
    _component(() => (
      <Listbox
        value={value}
        options={options.value}
        getKey={getKey}
        getLabel={getLabel}
        onValueChange={() => {
          if (revert.value) value.value = users[0]!;
        }}
      />
    )),
  );
  options.value = [replacement, users[1]!];
  await nextTick();
  expect(value.value).toBe(users[0]);
  expect(wrapper.get('[aria-selected="true"]').text()).toBe('Updated Alice');
  await wrapper.get('[aria-selected="true"]').trigger('click');
  expect(value.value).toBe(replacement);
  revert.value = true;
  await wrapper.get('[aria-label="Bob"]').trigger('click');
  expect(value.value).toBe(users[0]);
  expect(wrapper.get('[aria-selected="true"]').text()).toBe('Updated Alice');
  options.value = [];
  await nextTick();
  expect(value.value).toBe(users[0]);
  expect(wrapper.get('[role=status]').text()).toBe('暂无选项');
  expect(wrapper.get('[role=listbox]').attributes('aria-activedescendant')).toBeUndefined();
});

test('duplicate and invalid keys fail explicitly while numeric and string keys stay distinct', () => {
  expect(() =>
    mount(_component(() => <Listbox options={['a', 'b']} getKey={() => 1} getLabel={(v) => v} />)),
  ).toThrow(/唯一/);
  expect(() =>
    mount(_component(() => <Listbox options={['a']} getKey={() => NaN} getLabel={(v) => v} />)),
  ).toThrow(/有限/);
  const value = shallowRef<string | number | null>(1);
  const wrapper = attach(
    _component(() => (
      <Listbox value={value} options={[1, '1']} getKey={(v) => v} getLabel={String} />
    )),
  );
  expect(wrapper.findAll('[aria-selected="true"]')).toHaveLength(1);
});

test('select composes the listbox and preserves form values, refresh, reset and callback merging', async () => {
  const value = shallowRef<(typeof users)[number] | null>(users[0]!);
  const options = shallowRef(users);
  const calls: string[] = [];
  const wrapper = attach(
    _component(() => (
      <form>
        <Select
          value={value}
          options={options.value}
          getKey={getKey}
          getLabel={getLabel}
          name="user"
          clearable
          aria-label="用户"
          {...{ onValueChange: () => calls.push('first') }}
          onValueChange={() => calls.push('second')}
          onValueCommit={() => calls.push('commit')}
          onValueReset={() => calls.push('reset')}
        />
      </form>
    )),
  );
  const form = wrapper.get('form').element;
  const trigger = wrapper.get('[aria-haspopup=listbox]');
  await trigger.trigger('click');
  await flushPromises();
  const bob = document.querySelector<HTMLElement>('[role=option][aria-label="Bob"]')!;
  bob.click();
  await nextTick();
  expect(value.value).toBe(users[1]);
  expect(calls).toEqual(['first', 'second', 'commit']);
  expect(new FormData(form).get('user')).toBe('2');
  expect(document.querySelector('[role=listbox]')).toBeNull();
  options.value = [];
  await nextTick();
  expect(trigger.text()).toContain('Bob');
  expect(new FormData(form).get('user')).toBe('2');
  form.reset();
  await Promise.resolve();
  await nextTick();
  expect(value.value).toBe(users[0]);
  expect(new FormData(form).get('user')).toBe('1');
  expect(calls.at(-1)).toBe('reset');
  await wrapper.get('button[aria-label="清空"]').trigger('click');
  expect(value.value).toBeNull();
  expect(new FormData(form).get('user')).toBe('');
});

test('select respects readonly, disabled fieldsets, cancelled reset and required focus', async () => {
  const value = shallowRef<(typeof users)[number] | null>(null);
  const readonly = ref(true);
  const disabled = ref(false);
  const wrapper = attach(
    _component(() => (
      <form>
        <fieldset disabled={disabled.value}>
          <Select
            value={value}
            options={users}
            getKey={getKey}
            getLabel={getLabel}
            readonly={readonly.value}
            required
            name="user"
          />
        </fieldset>
      </form>
    )),
  );
  const trigger = wrapper.get<HTMLButtonElement>('button');
  const form = wrapper.get('form').element;
  trigger.element.click();
  await nextTick();
  expect(trigger.attributes('aria-expanded')).toBe('false');
  expect(form.checkValidity()).toBe(true);
  readonly.value = false;
  await nextTick();
  expect(form.checkValidity()).toBe(false);
  expect(document.activeElement).toBe(trigger.element);
  disabled.value = true;
  await nextTick();
  trigger.element.click();
  await nextTick();
  expect(trigger.attributes('aria-expanded')).toBe('false');
  expect(new FormData(form).has('user')).toBe(false);
  disabled.value = false;
  value.value = users[1]!;
  await nextTick();
  form.addEventListener('reset', (event) => event.preventDefault(), { once: true });
  form.reset();
  await Promise.resolve();
  await nextTick();
  expect(value.value).toBe(users[1]);
  expect(new FormData(form).get('user')).toBe('2');
});

test('compound fields only validate after leaving input clear button or select portal', async () => {
  const inputValue = ref('text');
  const selected = shallowRef<(typeof users)[number] | null>(null);
  let touched: (() => boolean) | undefined;
  let inputTouched: (() => boolean) | undefined;
  const wrapper = attach(
    _component(() => {
      const field = useField(selected, z.object({ id: z.number(), name: z.string() }).nullable());
      const input = useField(inputValue, z.string());
      touched = () => field.touched.value;
      inputTouched = () => input.touched.value;
      return (
        <>
          <Field state={input} label="文本">
            <Input {...input.control} clearable />
          </Field>
          <Field state={field} label="用户">
            <Select
              {...field.control}
              options={users}
              getKey={getKey}
              getLabel={getLabel}
              clearable
            />
          </Field>
          <button id="outside">外部</button>
        </>
      );
    }),
  );
  const input = wrapper.get<HTMLInputElement>('input');
  input.element.focus();
  wrapper.get<HTMLButtonElement>('button[aria-label="清空"]').element.focus();
  expect(inputTouched?.()).toBe(false);
  const trigger = wrapper.get<HTMLButtonElement>('[aria-haspopup=listbox]');
  trigger.element.focus();
  trigger.element.click();
  await flushPromises();
  const list = document.querySelector<HTMLElement>('[role=listbox]')!;
  list.focus();
  expect(touched?.()).toBe(false);
  wrapper.get<HTMLButtonElement>('#outside').element.focus();
  await nextTick();
  expect(touched?.()).toBe(true);
  expect(inputTouched?.()).toBe(true);
});

test('open state respects native fieldset changes and Home/End ignore the prior selection', async () => {
  const value = shallowRef<(typeof users)[number] | null>(users[1]!);
  const disabled = ref(true);
  const open = ref(true);
  const changed = vi.fn();
  const wrapper = attach(
    _component(() => (
      <fieldset disabled={disabled.value}>
        <Select
          value={value}
          options={users}
          getKey={getKey}
          getLabel={getLabel}
          open={open}
          onValueChange={changed}
        />
      </fieldset>
    )),
  );
  await flushPromises();
  expect(open.value).toBe(false);
  disabled.value = false;
  await flushPromises();
  expect(open.value).toBe(false);
  const trigger = wrapper.get('button');
  key(trigger.element, 'End');
  await flushPromises();
  expect(document.querySelector('[data-active]')?.getAttribute('aria-label')).toBe('Charlie');
  disabled.value = true;
  await flushPromises();
  expect(open.value).toBe(false);
  expect(document.querySelector('[role=listbox]')).toBeNull();
  expect(value.value).toBe(users[1]);
  expect(changed).not.toHaveBeenCalled();
  open.value = true;
  await nextTick();
  expect(open.value).toBe(false);
  disabled.value = false;
  await flushPromises();
  key(trigger.element, 'Home');
  await flushPromises();
  expect(document.querySelector('[data-active]')?.getAttribute('aria-label')).toBe('Alice');
});

test('select SSR preserves selected value and defers open portals until hydration', async () => {
  const App = _component(() => (
    <Select
      value={shallowRef(users[1]!)}
      options={users}
      getKey={getKey}
      getLabel={getLabel}
      open={ref(true)}
      name="user"
    />
  ));
  const html = await renderToString(createSSRApp(App));
  expect(html).toContain('Bob');
  expect(html).toContain('selected');
  expect(html).not.toContain('role="listbox"');
});

test('accepted selection reports callbacks even when its synchronous watcher disables the control', async () => {
  const value = shallowRef<(typeof users)[number] | null>(null);
  const calls: string[] = [];
  const wrapper = attach(
    _component(() => {
      const fieldset = shallowRef<HTMLFieldSetElement>();
      watch(
        value,
        () => {
          // 原生 DOM 状态立即变化，不依赖父组件下一次 render 才传下 disabled。
          if (fieldset.value) fieldset.value.disabled = true;
        },
        { flush: 'sync' },
      );
      return (
        <fieldset ref={fieldset}>
          <Select
            value={value}
            options={users}
            getKey={getKey}
            getLabel={getLabel}
            onValueChange={() => calls.push('change')}
            onValueCommit={() => calls.push('commit')}
          />
        </fieldset>
      );
    }),
  );
  await wrapper.get('button').trigger('click');
  await flushPromises();
  document.querySelector<HTMLElement>('[role=option][aria-label="Alice"]')!.click();
  await nextTick();
  expect(value.value).toBe(users[0]);
  expect(calls).toEqual(['change', 'commit']);
  expect(wrapper.get('button').element.matches(':disabled')).toBe(true);
});

test('selection rechecks native disabled before observer delivery', async () => {
  const value = shallowRef<(typeof users)[number] | null>(null);
  const changed = vi.fn();
  const wrapper = attach(
    _component(() => (
      <fieldset>
        <Select
          value={value}
          options={users}
          getKey={getKey}
          getLabel={getLabel}
          onValueChange={changed}
        />
      </fieldset>
    )),
  );
  await wrapper.get('button').trigger('click');
  await flushPromises();
  wrapper.get('fieldset').element.disabled = true;
  document.querySelector<HTMLElement>('[role=option][aria-label="Alice"]')!.click();
  expect(value.value).toBeNull();
  expect(changed).not.toHaveBeenCalled();
  await flushPromises();
  expect(document.querySelector('[role=listbox]')).toBeNull();
});

// 类型反例随 UI 的现有 CI types 任务检查；不要用类型断言掩盖泛型退化。
const model = shallowRef<(typeof users)[number] | null>(null);
<Select
  options={users}
  value={model}
  getKey={(option) => option.id}
  getLabel={(option) => option.name}
  renderOption={(option) => option.name}
/>;
// @ts-expect-error getter-only computed 不能作为模型。
<Select options={users} value={computed(() => model.value)} getKey={getKey} getLabel={getLabel} />;
// @ts-expect-error options 推导出的对象字段仍严格检查。
<Select options={users} getKey={(option) => option.missing} getLabel={getLabel} />;
