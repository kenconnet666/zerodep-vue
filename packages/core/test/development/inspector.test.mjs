import assert from 'node:assert/strict';
import test from 'node:test';
import { createSSRApp, ref } from 'vue';
import {
  createCssHost,
  getCssHost,
  keyframes,
  globalCss,
  createCssContext,
  SystemKeywords,
} from '../../src/index.ts';
import { renderToString } from '@vue/server-renderer';
import { objectClass, staticCss } from '../../src/css/object.ts';
import { resolveClass } from '../../src/css/resolve.ts';
import {
  inspectApp,
  inspectionSnapshot,
  traceCss,
  traceGlobal,
} from '../../src/development/inspector.ts';
import { inspectionHooks } from '../../src/css/inspection-hooks.ts';

const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

const source = (line, kind = 'css') => ({ file: '/project/App.tsx', line, column: 3, kind });
const resolve = (input) => resolveClass(objectClass(input));

test('loading the root API leaves inspection disabled until explicitly used', () => {
  assert.equal(inspectionHooks(), undefined);
});

test('inspection uses consumed values, records override/clear provenance and never re-reads getters', () => {
  let reads = 0;
  const base = traceCss(
    s(() => {
      reads++;
      return { color: 'red', width: '24px', padding: 4 };
    }),
    source(5),
  );
  const override = traceCss(s({ color: 'green', padding: null }), source(12));
  const resolved = resolve([base, override]);
  const snapshot = inspectionSnapshot(resolved);
  assert.equal(reads, 1);
  assert.equal(snapshot.sources[0].source.line, 5);
  assert.equal(snapshot.sources[0].declarations[0].status, '被覆盖');
  assert.equal(snapshot.sources[0].declarations[0].bindings[0].consumed, false);
  assert.deepEqual(snapshot.sources[0].declarations[1].values, ['24px']);
  assert.equal(snapshot.sources[1].declarations[1].status, '清除标记');
  for (let i = 0; i < 20; i++) JSON.stringify(inspectionSnapshot(resolved));
  assert.equal(reads, 1);
});

test('animation frame inspection keeps frame locations without consuming factories twice', () => {
  let reads = 0;
  const fade = traceCss(
    keyframes({
      from: () => {
        reads++;
        return { opacity: 0.3 };
      },
      to: { opacity: 1 },
    }),
    source(20, 'keyframes'),
  );
  assert.equal(reads, 0);
  const snapshot = inspectionSnapshot(resolve({ animationName: fade }));
  assert.equal(snapshot.frames.length, 2);
  assert.equal(snapshot.frames[0].sources[0].source.name, 'from');
  assert.equal(snapshot.frames[0].sources[0].source.line, 20);
  assert.equal(snapshot.frames[0].sources[0].declarations[0].bindings[0].value, 0.3);
  assert.equal(reads, 1);
});

test('global inspection follows active leases and releases data with the host', () => {
  const host = createCssHost({ target: null });
  const app = createSSRApp({ render: () => null }).use(host);
  const color = ref('red');
  let reads = 0;
  const rules = traceGlobal(
    () => {
      reads++;
      return { body: { color: color.value } };
    },
    source(30, 'global'),
  );
  const stop = globalCss('page', rules, { host });
  assert.equal(inspectApp(app)[0].source.line, 30);
  assert.equal(inspectApp(app)[0].snapshot.cssText, 'body{color:red;}');
  assert.equal(reads, 1);
  color.value = 'blue';
  assert.equal(inspectApp(app)[0].snapshot.cssText, 'body{color:blue;}');
  assert.equal(reads, 2);
  stop();
  assert.deepEqual(inspectApp(app), []);
  host.dispose();
});

test('client development tooling does not retain SSR request registrations', async () => {
  const app = createSSRApp({
    setup() {
      globalCss('request', { body: { color: 'red' } });
      return () => null;
    },
  });
  const context = {};
  await renderToString(app, context);
  assert.deepEqual(inspectApp(app), []);
  assert(getCssHost(context).cssText().includes('color:red'));
  getCssHost(context).dispose();
});

test('partial object metadata retains identity and source without additional getter reads', () => {
  let reads = 0;
  const object = {
    ...{ opacity: 0.5 },
    get width() {
      reads++;
      return 24;
    },
  };
  const marked = traceCss(staticCss(object, null), source(42));
  assert.equal(marked, object);
  assert.equal(reads, 0);
  const resolved = resolve(marked);
  assert.equal(inspectionSnapshot(resolved).sources[0].source.line, 42);
  assert.deepEqual(Object.values(resolved.variables), ['0.5', '24px']);
  for (let i = 0; i < 20; i++) inspectionSnapshot(resolved);
  assert.equal(reads, 1);
});
