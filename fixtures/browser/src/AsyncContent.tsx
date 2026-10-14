import { _component, createCssContext, SystemKeywords } from '@zerodep-vue/core';

const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

export default _component(() => (
  <p data-testid="async" class={s.color('purple')}>
    异步组件已加载
  </p>
));
