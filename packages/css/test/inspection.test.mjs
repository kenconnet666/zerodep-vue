import assert from 'node:assert/strict';
import test from 'node:test';
import { createSSRApp, ref } from 'vue';
import { css, createCssHost, getCssHost } from '../src/index.ts';
import { renderToString } from '@vue/server-renderer';
import { binding } from '../src/values.ts';
import { resolveClass } from '../src/resolve.ts';
import { inspectApp, inspectionSnapshot, traceCss, traceGlobal } from '../src/devtools.ts';

const source = (line, kind = 'class') => ({ file: '/project/App.tsx', line, column: 3, kind });

test('inspection uses consumed values, records override/clear provenance and never re-reads getters', () => {
  let reads = 0;
  const live = traceCss(
    binding(() => {
      reads++;
      return '24px';
    }),
    source(8, 'binding'),
  );
  const unused = traceCss(
    binding(() => {
      throw new Error('overridden binding ran');
    }),
    source(7, 'binding'),
  );
  const base = traceCss(css({ color: unused, width: live, padding: 4 }), source(5));
  const override = traceCss(css({ color: 'green', padding: null }), source(12));
  const resolved = resolveClass(css(base, override));
  const snapshot = inspectionSnapshot(resolved);
  assert.equal(reads, 1);
  assert.equal(snapshot.sources[0].source.line, 5);
  assert.equal(snapshot.sources[0].declarations[0].status, '被覆盖');
  assert.equal(snapshot.sources[0].declarations[0].bindings[0].consumed, false);
  assert.equal(snapshot.sources[0].declarations[1].bindings[0].source.line, 8);
  assert.deepEqual(snapshot.sources[0].declarations[1].values, ['24px']);
  assert.equal(snapshot.sources[1].declarations[1].status, '清除标记');
  for (let i = 0; i < 20; i++) JSON.stringify(inspectionSnapshot(resolved));
  assert.equal(reads, 1);
});

test('animation frame inspection keeps declaration and binding locations', () => {
  const fade = traceCss(
    css.keyframes({
      from: {
        opacity: traceCss(
          binding(() => 0.3),
          source(21, 'binding'),
        ),
      },
      to: { opacity: 1 },
    }),
    source(20, 'keyframes'),
  );
  const snapshot = inspectionSnapshot(resolveClass(css({ animationName: fade })));
  assert.equal(snapshot.frames.length, 2);
  assert.equal(snapshot.frames[0].sources[0].source.name, 'from');
  assert.equal(snapshot.frames[0].sources[0].declarations[0].bindings[0].source.line, 21);
  assert.equal(snapshot.frames[0].sources[0].declarations[0].bindings[0].value, 0.3);
});

test('global inspection follows active leases and releases data with the host', () => {
  const host = createCssHost({ target: null });
  const app = createSSRApp({ render: () => null }).use(host);
  const color = ref('red');
  let reads = 0;
  const rules = traceGlobal(
    {
      body: {
        color: binding(() => {
          reads++;
          return color.value;
        }),
      },
    },
    source(30, 'global'),
  );
  const stop = css.global('page', rules, { host });
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
      css.global('request', { body: { color: 'red' } });
      return () => null;
    },
  });
  const context = {};
  await renderToString(app, context);
  assert.deepEqual(inspectApp(app), []);
  assert(getCssHost(context).cssText().includes('color:red'));
  getCssHost(context).dispose();
});
