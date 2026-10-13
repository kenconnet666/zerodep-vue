/** @jsxImportSource @zerodep-vue/tsx */
import { ref } from 'vue';
import { _component } from '@zerodep-vue/tsx';
import { bx, css } from '@zerodep-vue/css';
import type {} from './contracts.ts';

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
  const base = css({ width: bx(readWidth()), color: bx(ignoredColor()), padding: 8 });
  const overrides = css({ color: 'green', padding: null });
  css.global('inspected-global', { body: { margin: 0 } });
  window.__inspectionReads = () => ({ used, unused });
  return (
    <section>
      {visible.value && (
        <div data-testid="inspected" class={css(base, overrides)}>
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
