/** @jsxImportSource @zerodep-vue/tsx */
import { ref } from 'vue';
import { _component } from '@zerodep-vue/tsx';
import { bx, css } from '@zerodep-vue/css';
import { NSelect } from '@fixture/naive';
import type {} from '../src/contracts.ts';

export default _component(() => {
  window.__hmrSetups = (window.__hmrSetups ?? 0) + 1;
  const count = ref(0);
  const text = ref('initial');
  const open = ref(false);
  const suffix = ref('!');
  const { panel } = css.create({
    panel: { color: 'rgb(255, 0, 0)', padding: 16, marginLeft: bx(count.value) },
  });
  css.global('hot-page', { body: { fontFamily: 'sans-serif' } });
  return (
    <section class={panel}>
      <h2>原始标题</h2>
      <input aria-label="热更新输入" v-model={text.value} />
      <button
        data-testid="hot-count"
        onClick={() => {
          count.value++;
        }}
      >
        {count.value}
      </button>
      <NSelect
        show={open.value}
        onUpdateShow={(value: boolean) => {
          open.value = value;
        }}
        options={[{ label: '保持展开', value: 'open' }]}
      />
      <output data-testid="hot-content">{text.value}</output>
    </section>
  );
});
