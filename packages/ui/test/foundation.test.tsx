import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createSSRApp, nextTick, shallowRef } from 'vue';
import type { Ref } from 'vue';
import { renderToString } from '@vue/server-renderer';
import {
  _component,
  createCssContext,
  createCssHost,
  getCssHost,
  SystemKeywords,
} from '@zerodep-vue/core';
import { CalendarDate, Time } from '@internationalized/date';
import { Decimal } from 'decimal.js';
import { House } from '@lucide/icons';
import { z } from 'zod';
import * as ui from '../src/index.ts';

const { useCss } = createCssContext(new SystemKeywords());
const valueSchema = z.object({
  amount: z.instanceof(Decimal),
  date: z.instanceof(CalendarDate),
  time: z.instanceof(Time),
});

/** 验证 UI 工具链和 peer 值传递的测试组件。 */
const PeerProbe = _component(
  ({ amount, date, time }: { amount: Ref<Decimal>; date: Ref<CalendarDate>; time: Ref<Time> }) => {
    const s = useCss();
    return (
      <output class={s.display('block')} data-icon={House.name}>
        {amount.value.toFixed(2)} / {date.value.toString()} / {time.value.toString()}
      </output>
    );
  },
);

const values = () => ({
  amount: shallowRef(new Decimal('0.1').plus('0.2')),
  date: shallowRef(new CalendarDate(2026, 10, 14)),
  time: shallowRef(new Time(9, 30)),
});

test('explicit peer types retain identity and update through the UI TSX pipeline', async () => {
  const props = values();
  const parsed = valueSchema.parse({
    amount: props.amount.value,
    date: props.date.value,
    time: props.time.value,
  });
  expect(parsed.amount).toBe(props.amount.value);
  expect(parsed.date).toBe(props.date.value);
  expect(valueSchema.safeParse({ ...parsed, amount: '0.3' }).success).toBe(false);
  const host = createCssHost({ target: document.head, maxUnusedRules: 0 });
  const wrapper = mount(PeerProbe, { props, global: { plugins: [host] } });
  try {
    expect(wrapper.text()).toBe('0.30 / 2026-10-14 / 09:30:00');
    expect(wrapper.attributes('data-icon')).toBe(House.name);
    expect(House.node.length).toBeGreaterThan(0);
    props.amount.value = props.amount.value.plus('0.1');
    props.date.value = props.date.value.add({ days: 1 });
    await nextTick();
    expect(wrapper.text()).toBe('0.40 / 2026-10-15 / 09:30:00');
  } finally {
    wrapper.unmount();
    expect(host.stats().ownedReferences).toBe(0);
    host.dispose();
  }
});

test('the foundation imports on SSR without third-party re-exports', async () => {
  for (const name of [
    'z',
    'Decimal',
    'CalendarDate',
    'Time',
    'House',
    'computePosition',
    'tabbable',
  ])
    expect(ui).not.toHaveProperty(name);
  const context = {};
  try {
    const html = await renderToString(createSSRApp(PeerProbe, values()), context);
    expect(html).toContain('0.30 / 2026-10-14 / 09:30:00');
    expect(getCssHost(context)?.renderStyles()).toContain('display:block;');
  } finally {
    getCssHost(context)?.dispose();
  }
});
