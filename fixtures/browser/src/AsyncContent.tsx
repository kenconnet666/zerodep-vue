import { _component, css } from '@zerodep-vue/core';

export default _component(() => (
  <p data-testid="async" class={css({ color: 'purple' })}>
    异步组件已加载
  </p>
));
