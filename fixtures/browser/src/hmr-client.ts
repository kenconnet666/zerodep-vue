import { createApp } from 'vue';
import { createCssHost } from '@zerodep-vue/core';
import Subject from '@fixture/hmr';
import type {} from './contracts.ts';

const host = createCssHost({ maxUnusedRules: 3 });
const app = createApp(Subject).use(host);
app.mount('#app');
window.__fixture = { host, unmount: () => app.unmount() };
