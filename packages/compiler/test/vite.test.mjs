import assert from 'node:assert/strict';
import test from 'node:test';
import vueTsx from '../src/vite.ts';

function configured(command = 'serve') {
  const plugin = vueTsx();
  plugin.configResolved({
    root: '/project',
    command,
    isProduction: command === 'build',
    build: { sourcemap: true },
    plugins: [],
  });
  return plugin;
}

test('Vite handles imported aliases, default exports and source maps', async () => {
  const plugin = configured();
  const result = await plugin.transform(
    'import { defineComponent as component } from "vue"; export default component(() => () => <div>Hello</div>);',
    '/project/App.tsx?import',
  );
  assert(JSON.parse(result.map).sources.includes('/project/App.tsx'));
  assert(result.code.includes('createVNode'));
  assert(result.code.includes('__VUE_HMR_RUNTIME__.createRecord'));
  assert(result.code.includes('updated["default"]'));
});

test('same-name business functions are not registered as Vue components', async () => {
  const result = await configured().transform(
    'const defineComponent = (x) => x; export const App = defineComponent(() => <div/>);',
    '/project/App.tsx',
  );
  assert(!result.code.includes('__VUE_HMR_RUNTIME__'));
});

test('SSR registers modules without client HMR and production removes HMR', async () => {
  const code =
    'import { defineComponent } from "vue"; export const App = defineComponent(() => () => <div/>);';
  const ssr = await configured().transform(code, '/project/App.tsx', { ssr: true });
  assert(ssr.code.includes('virtual:zerodep-vue/ssr-register'));
  assert(!ssr.code.includes('import.meta.hot'));
  const built = await configured('build').transform(code, '/project/App.tsx');
  assert(!built.code.includes('__VUE_HMR_RUNTIME__'));
  assert(built.code.includes('#__PURE__'));
});
