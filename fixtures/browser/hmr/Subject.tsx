import { ref } from 'vue';
import { _component, bx, globalCss, createCssContext, SystemKeywords } from '@zerodep-vue/core';

import { NSelect } from '@fixture/naive';

const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

export default _component(() => {
  window.__hmrSetups = (window.__hmrSetups ?? 0) + 1;
  const count = ref(0);
  const text = ref('initial');
  const open = ref(false);
  const suffix = ref('!');
  const { panel } = { panel: s.color('rgb(255, 0, 0)').padding(16).marginLeft(bx(count.value)) };
  globalCss('hot-page', { body: s.fontFamily('sans-serif') });
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
