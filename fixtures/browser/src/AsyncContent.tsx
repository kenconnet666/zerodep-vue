import { _component } from '@zerodep-vue/tsx';
import { css } from '@zerodep-vue/css';
export default _component(() => (
  <p data-testid="async" class={css({ color: 'purple' })}>
    异步组件已加载
  </p>
));
