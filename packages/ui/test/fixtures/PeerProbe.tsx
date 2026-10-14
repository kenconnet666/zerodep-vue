import type { Ref } from 'vue';
import { _component, createCssContext, SystemKeywords } from '@zerodep-vue/core';
import { House } from '@lucide/icons';
import { CalendarDate, Time } from '@internationalized/date';
import { Decimal } from 'decimal.js';
import { z } from 'zod';

const { useCss } = createCssContext(new SystemKeywords());

export const valueSchema = z.object({
  amount: z.instanceof(Decimal),
  date: z.instanceof(CalendarDate),
  time: z.instanceof(Time),
});

/** 私有工具链接入探针，不是正式 UI 组件，也不渲染图标。 */
export const PeerProbe = _component(
  ({ amount, date, time }: { amount: Ref<Decimal>; date: Ref<CalendarDate>; time: Ref<Time> }) => {
    const s = useCss();
    return (
      <output class={s.display('block')} data-icon={House.name}>
        {amount.value.toFixed(2)} / {date.value.toString()} / {time.value.toString()}
      </output>
    );
  },
);
