import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { effectScope, ref, shallowRef } from 'vue';
import { createCssHost, keyframes, globalCss } from '../src/index.ts';
import { binding } from '../src/values.ts';

test('global reactive rules keep cascade position and stop when their scope ends', () => {
  const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>');
  const host = createCssHost({ target: dom.window.document.head, maxUnusedRules: 0 });
  const scope = effectScope();
  const color = ref('red');
  let reads = 0;
  try {
    const rules = shallowRef({
      'body, main': {
        color: binding(() => {
          reads++;
          return color.value;
        }),
        ':hover': { opacity: 0.8 },
      },
    });
    scope.run(() => globalCss('page', rules, { host }));
    const node = dom.window.document.head.firstElementChild;
    const other = host.acquireGlobal('later', 'body{color:blue;}');
    assert.equal(reads, 1);
    assert(node.textContent.includes('body:hover{opacity:0.8;}'));
    assert(node.textContent.includes('main{color:red;}'));
    color.value = 'green';
    assert.equal(reads, 2);
    assert(node.textContent.includes('color:green'));
    assert.equal(dom.window.document.head.firstElementChild, node);
    rules.value = { ':root': { '--tone': 'black' } };
    assert.equal(node.textContent, ':root{--tone:black;}');
    color.value = 'purple';
    assert.equal(reads, 2);
    scope.stop();
    assert.equal(host.stats().ownedReferences, 1);
    assert.equal(node.parentNode, null);
    other.release();
  } finally {
    scope.stop();
    host.dispose();
    dom.window.close();
  }
});

test('global names protect other owners and a host disposal stops external reactive reads', () => {
  const host = createCssHost({ target: null });
  const value = ref('red');
  let reads = 0;
  const stop = globalCss(
    'reset',
    {
      body: {
        color: binding(() => {
          reads++;
          return value.value;
        }),
      },
    },
    { host },
  );
  const same = host.acquireGlobal('reset', 'body{color:red;}');
  assert.throws(() => host.acquireGlobal('reset', 'body{color:blue;}'), /名称冲突/);
  assert.throws(() => same.update('body{color:green;}'), /多个所有者/);
  same.release();
  host.dispose();
  stop();
  value.value = 'blue';
  assert.equal(reads, 1);
  assert.equal(host.stats().ownedReferences, 0);
  assert.equal(host.stats().globalRules, 0);
  assert.equal(host.renderStyles(), '');
});

test('failed initial global resolution leaves no reactive subscriptions', (t) => {
  t.mock.method(console, 'warn', () => {});
  const host = createCssHost({ target: null });
  const value = ref('red');
  let reads = 0;
  assert.throws(
    () =>
      globalCss(
        'invalid',
        {
          body: {
            color: binding(() => {
              reads++;
              return value.value;
            }),
          },
          '&': { opacity: 1 },
        },
        { host },
      ),
    /根选择器/,
  );
  // 在读取 color 后失败，确保已经发生的响应式读取也没有遗留订阅。
  assert.throws(
    () =>
      globalCss(
        'invalid-value',
        {
          body: {
            color: binding(() => {
              reads++;
              return value.value;
            }),
            width: 'broken(',
          },
        },
        { host },
      ),
    /语法或声明边界/,
  );
  const before = reads;
  assert(before > 0);
  value.value = 'blue';
  assert.equal(reads, before);
  assert.equal(host.stats().ownedReferences, 0);
  host.dispose();
});

test('SSR preserves global/ordinary collection order and client adopts the same global node', () => {
  const server = createCssHost({ target: null, nonce: 'nonce' });
  server.acquireGlobal('before', 'body{color:red;}');
  server.collect({ name: 'example', cssText: '.example{color:blue;}' });
  server.acquireGlobal('after', 'body{color:green;}');
  const styles = server.renderStyles();
  assert(styles.indexOf('color:red') < styles.indexOf('color:blue'));
  assert(styles.indexOf('color:blue') < styles.indexOf('color:green'));
  const dom = new JSDOM(`<!doctype html><head>${styles}</head><body></body>`);
  const host = createCssHost({ target: dom.window.document.head });
  try {
    const original = dom.window.document.head.firstElementChild;
    const lease = host.acquireGlobal('before', 'body{color:red;}');
    assert.equal(dom.window.document.head.children.length, 3);
    assert.equal(dom.window.document.head.firstElementChild, original);
    lease.update('body{color:purple;}');
    assert.equal(original.textContent, 'body{color:purple;}');
    assert.equal(dom.window.document.head.firstElementChild, original);
    lease.release();
    assert.equal(original.parentNode, null);
  } finally {
    host.dispose();
    server.dispose();
    dom.window.close();
  }
});

test('global rules resolve dynamic animations literally and reject invalid boundaries', () => {
  const host = createCssHost({ target: null });
  const value = ref(0.2);
  const fade = keyframes({ from: { opacity: binding(() => value.value) }, to: { opacity: 1 } });
  globalCss('animated', { body: { animationName: fade } }, { host });
  assert(host.cssText().includes('from{opacity:0.2;}'));
  assert(!host.cssText().includes('var(--zv-'));
  value.value = 0.8;
  assert(host.cssText().includes('from{opacity:0.8;}'));
  assert(!host.cssText().includes('opacity:0.2'));
  assert.equal(host.stats().globalRules, 1);
  assert.throws(() => globalCss('bad', { body: { color: 'red' } }), /显式 host/);
  assert.throws(() => globalCss('bad', { '&': { color: 'red' } }, { host }), /根选择器/);
  assert.throws(
    () => globalCss('bad', { 'body;html': { color: 'red' } }, { host }),
    /语法或声明边界/,
  );
  host.dispose();
});
