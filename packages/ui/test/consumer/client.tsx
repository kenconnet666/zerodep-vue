import { createSSRApp, nextTick } from 'vue';
import { createCssHost } from '@zerodep-vue/core';
import { App } from './app';

const host = createCssHost({ target: document.head, maxUnusedRules: 0 });
const app = createSSRApp(App).use(host);
app.mount('#app');
document.dispatchEvent(new CustomEvent('consumer-ready', { detail: { app, host, nextTick } }));
