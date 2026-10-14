import { createApp, createSSRApp } from 'vue';
import { createCssHost } from '@zerodep-vue/core';
import { App } from './App.tsx';
import type {} from './contracts.ts';

if (location.pathname === '/stability') {
  void import('./stability-client.tsx');
} else {
  window.__beforeHydrate = [
    ...document.querySelectorAll('style[data-zv-rule],style[data-zv-global]'),
  ];
  const host = createCssHost({ maxUnusedRules: 12 });
  const app = (window.__hydrate ? createSSRApp : createApp)(App, {
    initial: window.__initial ?? { text: 'initial', color: 'red' },
  });
  app.use(host).mount('#app');
  window.__fixture = { host, unmount: () => app.unmount() };
}
