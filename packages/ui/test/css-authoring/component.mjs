import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('../../../../', import.meta.url));
const require = createRequire(resolve(root, 'package.json'));
const compilerRequire = createRequire(resolve(root, 'packages/compiler/package.json'));
const { JSDOM } = require('jsdom');
const dom = new JSDOM(
  '<!doctype html><html><head></head><body><div id="app"></div></body></html>',
  { url: 'http://localhost/' },
);
for (const key of [
  'window',
  'document',
  'navigator',
  'Element',
  'HTMLElement',
  'SVGElement',
  'Node',
  'Event',
  'MouseEvent',
  'MutationObserver',
  'ShadowRoot',
  'CSSStyleSheet',
])
  if (dom.window[key] !== undefined)
    Object.defineProperty(globalThis, key, {
      value: dom.window[key],
      configurable: true,
      writable: true,
    });
const { core, vue, writeReport } = await import('./prototype.mjs');
const { transformAsync, types: t } = require('@babel/core');
const presetTypeScript = compilerRequire('@babel/preset-typescript').default;
const { babelPlugin } = await import(
  pathToFileURL(resolve(root, 'packages/compiler/src/index.ts')).href
);
const coreUrl = pathToFileURL(resolve(root, 'packages/core/src/index.ts')).href;
const vueUrl = pathToFileURL(require.resolve('vue')).href;
const adapterUrl = new URL('./prototype.mjs', import.meta.url).href;
const source = `import {_component,bx,_button} from '@zerodep-vue/core';
import {ref,shallowRef} from 'vue';
type Base={__props:{disabled?:boolean;css?:unknown;id?:string;title?:string;model?:unknown}};
declare const ButtonBase:Base;
type Props<B extends Base,E extends object={}> = Omit<B['__props'],keyof E>&E;
type ChildProps=Props<typeof ButtonBase,{label?:string}>;
export const model=ref(1);
export const width=ref(24);
export const active=ref(true);
export const calls=[];
export let getModel;
export const inputs=shallowRef({id:'target',title:'first',disabled:false,label:'initial',model});
const Child=_component<ChildProps>(({disabled=true,label='fallback',model,...rest})=>{
 getModel=()=>model;
 return <_button {...rest} disabled={disabled} data-label={label}/>;
});
export const App=_component(()=>
 <Child {...inputs.value} css={{width:bx(width.value)}} onClick={active.value ? ()=>calls.push('clicked') : undefined}/>);
`;
let code = (
  await transformAsync(source, {
    filename: resolve(root, 'packages/compiler/test/__probe_live_props.tsx'),
    babelrc: false,
    configFile: false,
    plugins: [babelPlugin],
    presets: [presetTypeScript],
  })
).code;
code = (
  await transformAsync(code, {
    babelrc: false,
    configFile: false,
    plugins: [
      () => ({
        visitor: {
          ImportDeclaration(path) {
            if (path.node.source.value === '@zerodep-vue/core') {
              const moved = path.node.specifiers.filter(
                (x) =>
                  t.isImportSpecifier(x) && t.isIdentifier(x.imported, { name: 'mergeCssProps' }),
              );
              if (moved.length) {
                path.node.specifiers = path.node.specifiers.filter((x) => !moved.includes(x));
                path.insertAfter(
                  t.importDeclaration(
                    moved.map((x) => t.importSpecifier(x.local, t.identifier('mergeAttrs'))),
                    t.stringLiteral(adapterUrl),
                  ),
                );
              }
              path.node.source.value = coreUrl;
            } else if (path.node.source.value === 'vue') path.node.source.value = vueUrl;
            else if (path.node.source.value === 'probe-base') path.node.source.value = adapterUrl;
          },
        },
      }),
    ],
  })
).code;
const module = await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
const results = [];
const host = core.createCssHost({ target: document.head, maxUnusedRules: 0 });
const app = vue.createApp(module.App).use(host);
const warnings = [];
app.config.warnHandler = (message) => warnings.push(message);
const test = async (name, run) => {
  try {
    const evidence = await run();
    results.push({ name, status: 'passed', evidence });
    console.log('PASS ' + name);
  } catch (e) {
    results.push({ name, status: 'failed', error: e.stack });
    console.log('FAIL ' + name + ': ' + e.message);
  }
};
try {
  app.mount('#app');
  await test('component without runtime type extraction keeps scalar props and Ref identity', async () => {
    const el = document.querySelector('button');
    assert.equal(el.disabled, false);
    assert.equal(el.dataset.label, 'initial');
    assert.equal(el.title, 'first');
    assert.equal(module.getModel(), module.model);
    el.click();
    assert.equal(module.calls.length, 1);
  });
  await test('live rest follows attribute deletion and defaults preserve absence versus false', async () => {
    module.inputs.value = { id: 'target', model: module.model };
    await vue.nextTick();
    const el = document.querySelector('button');
    assert.equal(el.hasAttribute('title'), false);
    assert.equal(el.dataset.label, 'fallback');
    assert.equal(el.disabled, true);
  });
  await test('CSS binding forwarded through component still updates', async () => {
    module.width.value = 48;
    await vue.nextTick();
    const el = document.querySelector('button');
    assert(
      Array.from(el.style).some(
        (name) => name.startsWith('--zv-') && el.style.getPropertyValue(name) === '48px',
      ),
    );
  });
  await test('listener removal and explicit false update survive the plain props path', async () => {
    module.inputs.value = { id: 'target', disabled: false, model: module.model };
    module.active.value = false;
    await vue.nextTick();
    const el = document.querySelector('button');
    assert.equal(el.disabled, false);
    el.click();
    assert.equal(module.calls.length, 1);
    assert.equal(module.getModel(), module.model);
  });
  await test('unmount releases this task DOM and CSS leases', async () => {
    app.unmount();
    await vue.nextTick();
    assert.equal(document.querySelector('button'), null);
    assert.equal(document.head.querySelectorAll('style[data-zv-rule]').length, 0);
  });
} finally {
  if (document.querySelector('button')) app.unmount();
  host.dispose();
  dom.window.close();
}
writeReport('live-results.json', { results, warnings });
console.log(
  JSON.stringify({
    total: results.length,
    passed: results.filter((x) => x.status === 'passed').length,
    failed: results.filter((x) => x.status === 'failed').length,
    warnings,
  }),
);
if (results.some((x) => x.status === 'failed')) process.exitCode = 1;
