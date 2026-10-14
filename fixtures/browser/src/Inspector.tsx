import { ref } from 'vue';
import { _component, bx, globalCss, useCss, cx } from '@zerodep-vue/core';

import type {} from './contracts.ts';
const s = useCss();

export default _component(() => {
  const width = ref('24px');
  const visible = ref(true);
  let used = 0;
  let unused = 0;
  const readWidth = () => {
    used++;
    return width.value;
  };
  const ignoredColor = () => {
    unused++;
    throw new Error('overridden binding was read');
  };
  const base = s.width(bx(readWidth())).color(bx(ignoredColor())).padding(8);
  const overrides = s.color('green').padding(null);
  globalCss('inspected-global', { body: s.margin(0) });
  window.__inspectionReads = () => ({ used, unused });
  return (
    <section>
      {visible.value && (
        <div data-testid="inspected" class={cx(base, overrides)}>
          inspected
        </div>
      )}
      <button
        onClick={() => {
          width.value = '40px';
        }}
      >
        更新绑定
      </button>
      <button
        onClick={() => {
          visible.value = false;
        }}
      >
        移除元素
      </button>
    </section>
  );
});
