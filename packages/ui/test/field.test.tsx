import { afterEach, expect, test, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { effectScope, nextTick, ref } from 'vue';
import { z } from 'zod';
import { _component } from '@zerodep-vue/core';
import { Field, Input, useField } from '../src/index.ts';
import type { FieldState } from '../src/index.ts';

const cleanup: (() => void)[] = [];
afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
});

test('field composes labels and slots, preserves drafts and shares its updated native reset baseline', async () => {
  const value = ref('first');
  let field!: FieldState<string, number>;
  const container = document.createElement('div');
  document.body.append(container);
  const wrapper = mount(
    _component(() => {
      field = useField(
        value,
        z
          .string()
          .trim()
          .min(1, '请填写内容')
          .transform((text) => text.length),
        { required: true, name: 'query' },
      );
      return (
        <form>
          <Field
            state={field}
            label="内容"
            help="保留原始草稿"
            slotHelp={{ 'data-testid': 'help' }}
            slotError={{ 'data-testid': 'error' }}
          >
            <Input {...field.control} />
          </Field>
        </form>
      );
    }),
    { attachTo: container },
  );
  cleanup.push(() => {
    wrapper.unmount();
    container.remove();
  });
  const input = wrapper.get('input');
  expect(field.control.value).toBe(value);
  expect(wrapper.get('label').attributes('for')).toBe(input.attributes('id'));
  expect(document.getElementById(input.attributes('aria-describedby')!)).not.toBeNull();
  expect(wrapper.get('[data-testid="help"]').text()).toBe('保留原始草稿');
  await input.setValue('');
  await input.trigger('focusout');
  await flushPromises();
  expect(field.touched.value).toBe(true);
  expect(input.attributes('aria-invalid')).toBe('true');
  expect(wrapper.get('[data-testid="error"]').text()).toBe('请填写内容');
  await input.setValue('  text  ');
  await flushPromises();
  expect(field.output.value).toBe(4);
  expect(value.value).toBe('  text  ');
  expect(field.valid.value).toBe(true);
  field.reset('saved');
  await nextTick();
  await input.setValue('edited');
  wrapper.get('form').element.reset();
  await Promise.resolve();
  await nextTick();
  expect(value.value).toBe('saved');
  expect(input.element.value).toBe('saved');
  expect(field.dirty.value).toBe(false);
  expect(field.touched.value).toBe(false);
  expect(field.output.value).toBeUndefined();
});

test('async field validation ignores old values, resets and disposed scopes', async () => {
  const checks = new Map<string, (valid: boolean) => void>();
  const schema = z
    .string()
    .refine((text) => new Promise<boolean>((resolve) => checks.set(text, resolve)), {
      error: '不可用',
    });
  const value = ref('first');
  const scope = effectScope();
  const field = scope.run(() =>
    useField(value, schema, { id: 'async-field', validateOn: 'submit' }),
  )!;
  cleanup.push(() => scope.stop());
  const first = field.validate();
  value.value = 'second';
  const second = field.validate();
  checks.get('first')!(false);
  expect(await first).toBe(false);
  expect(field.pending.value).toBe(true);
  expect(field.issues.value).toEqual([]);
  checks.get('second')!(true);
  expect(await second).toBe(true);
  expect(field.output.value).toBe('second');
  value.value = 'reset';
  const resetting = field.validate();
  field.reset();
  checks.get('reset')!(false);
  expect(await resetting).toBe(false);
  expect(field.issues.value).toEqual([]);
  value.value = 'disposed';
  const disposed = field.validate();
  scope.stop();
  checks.get('disposed')!(true);
  expect(await disposed).toBe(false);
  expect(field.output.value).toBeUndefined();
});

test('validation failures stay distinct from rule issues and native reset does not start a new request', async () => {
  const value = ref('first');
  const validate = vi.fn(() => {
    throw new Error('service unavailable');
  });
  const scope = effectScope();
  const field = scope.run(() =>
    useField(value, z.string().refine(validate), { id: 'failure-field', validateOn: 'change' }),
  )!;
  cleanup.push(() => scope.stop());
  expect(await field.validate()).toBe(false);
  expect(field.failure.value?.message).toBe('service unavailable');
  expect(field.issues.value).toEqual([]);
  expect(field.valid.value).toBe(false);
  value.value = 'native baseline';
  field.control.onValueReset();
  await Promise.resolve();
  expect(validate).toHaveBeenCalledOnce();
  expect(value.value).toBe('native baseline');
  expect(field.dirty.value).toBe(false);
  expect(field.failure.value).toBeUndefined();
});

function contracts() {
  const schema = z.string().transform((text) => text.length);
  useField(ref(''), schema);
  // @ts-expect-error 模型必须匹配 Zod 的输入，不能按解析输出反推。
  useField(ref(1), schema);
}
void contracts;
