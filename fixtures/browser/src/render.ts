import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { setup } from '@css-render/vue3-ssr';
import { getCssHost } from '@zerodep-vue/css';
import { App } from './App.tsx';
import type { InitialState } from './contracts.ts';

export async function render(initial: InitialState) {
  const app = createSSRApp(App, { initial });
  const naive = setup(app);
  const context: { teleports?: Record<string, string> } = {};
  try {
    const html = await renderToString(app, context);
    return {
      html,
      styles: naive.collect() + (getCssHost(context)?.renderStyles() ?? ''),
      teleports: context.teleports?.['#dialogs'] ?? '',
    };
  } finally {
    getCssHost(context)?.dispose();
  }
}
