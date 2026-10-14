import { createApp } from 'vue';
import { devtoolsContext, initDevTools, toggleHighPerfMode } from '@vue/devtools-kit';
import { createCssHost } from '@zerodep-vue/core';
import { inspectApp } from '@zerodep-vue/core';
import Inspector from './Inspector.tsx';
import type {} from './contracts.ts';

// 使用真实 DevTools 后端注册与查询协议，和浏览器扩展/面板的 inspector 入口一致。
initDevTools();
// 对应用户打开面板：DevTools 默认省开销模式不会注册 inspector。
toggleHighPerfMode(false);
const host = createCssHost({ maxUnusedRules: 0 });
const app = createApp(Inspector).use(host);
app.mount('#app');
window.__fixture = {
  host,
  unmount: () => app.unmount(),
  inspectCss: () => inspectApp(app),
  inspectorTree: () =>
    devtoolsContext.api.getInspectorTree({ inspectorId: 'zerodep-vue-core', filter: '' }),
  inspectorState: (nodeId) =>
    devtoolsContext.api.getInspectorState({ inspectorId: 'zerodep-vue-core', nodeId }),
};
