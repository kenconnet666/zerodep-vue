import { _component, useCss } from '@zerodep-vue/core';
const s = useCss();

export default _component(() => (
  <p data-testid="async" class={s.color('purple')}>
    异步组件已加载
  </p>
));
