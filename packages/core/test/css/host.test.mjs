import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { createCssHost } from '../../src/css/host.ts';

import { resolveClass } from '../../src/css/resolve.ts';
import { createCssContext, SystemKeywords } from '../../src/index.ts';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

const rule = (color) => {
  const resolved = resolveClass(s.color(color));
  return { name: resolved.ruleName, cssText: resolved.cssText };
};

test('shared hosts protect active consumers and bound unused rules', () => {
  const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>');
  try {
    const target = dom.window.document.head;
    const a = createCssHost({ target, maxUnusedRules: 1 });
    const b = createCssHost({ target, maxUnusedRules: 1 });
    const releaseA = a.acquire(rule('red'));
    const releaseB = b.acquire(rule('red'));
    assert.equal(target.children.length, 1);
    releaseA();
    a.dispose();
    assert.equal(b.stats().activeRules, 1);
    const blue = b.acquire(rule('blue'));
    blue();
    const green = b.acquire(rule('green'));
    green();
    assert.equal(target.children.length, 2);
    assert.equal(b.stats().activeRules, 1);
    releaseB();
    releaseB();
    assert.equal(b.stats().unusedRules, 1);
    assert.equal(target.children.length, 1);
    b.dispose();
  } finally {
    dom.window.close();
  }
});

test('SSR collectors isolate requests and browser acquisition adopts identical styles', () => {
  const server = createCssHost({ target: null, nonce: 'safe"nonce' });
  const other = createCssHost({ target: null });
  server.collect(rule('red'));
  other.collect(rule('blue'));
  assert(!server.cssText().includes('blue'));
  assert(!other.cssText().includes('red'));
  const dom = new JSDOM(
    `<!doctype html><html><head>${server.renderStyles()}</head><body></body></html>`,
  );
  try {
    const target = dom.window.document.head;
    const initial = target.firstElementChild;
    const client = createCssHost({ target, maxUnusedRules: 0 });
    const release = client.acquire(rule('red'));
    assert.equal(target.children.length, 1);
    assert.equal(target.firstElementChild, initial);
    release();
    assert.equal(target.children.length, 0);
    client.dispose();
    server.dispose();
    other.dispose();
  } finally {
    dom.window.close();
  }
});

test('cached rules are restored after a reused ShadowRoot container is cleared', () => {
  const dom = new JSDOM('<!doctype html><html><body><div id="host"></div></body></html>');
  const shadow = dom.window.document.getElementById('host').attachShadow({ mode: 'open' });
  const host = createCssHost({ target: shadow, maxUnusedRules: 2 });
  try {
    const release = host.acquire(rule('red'));
    const original = shadow.firstElementChild;
    release();
    shadow.textContent = '';
    const again = host.acquire(rule('red'));
    assert.equal(shadow.firstElementChild, original);
    assert(shadow.textContent.includes('color:red'));
    again();
  } finally {
    host.dispose();
    dom.window.close();
  }
});

test('disposal continues after a callback fails and releases all host-owned rules', () => {
  const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>');
  const host = createCssHost({ target: dom.window.document.head, maxUnusedRules: 0 });
  try {
    host.acquire(rule('red'));
    host.acquireGlobal('page', 'body{color:blue;}');
    host.collect(rule('green'));
    const error = new Error('consumer cleanup failed');
    const calls = [];
    host.onDispose(() => {
      calls.push('first');
      throw error;
    });
    host.onDispose(() => {
      calls.push('last');
    });
    assert.throws(
      () => host.dispose(),
      (actual) => actual === error,
    );
    assert.deepEqual(calls, ['first', 'last']);
    assert.equal(host.stats().ownedReferences, 0);
    assert.equal(host.stats().globalRules, 0);
    assert.equal(host.stats().rules, 0);
    assert.equal(host.renderStyles(), '');
    assert.equal(dom.window.document.head.children.length, 0);
    host.dispose();
    assert.deepEqual(calls, ['first', 'last']);
  } finally {
    host.dispose();
    dom.window.close();
  }
});

test('disposal allows reentry and reports multiple failures after cleanup', () => {
  const host = createCssHost({ target: null });
  host.acquireGlobal('page', 'body{color:red;}');
  const first = new Error('first');
  const last = new Error('last');
  const calls = [];
  host.onDispose(() => {
    calls.push('first');
    host.dispose();
    throw first;
  });
  host.onDispose(() => {
    calls.push('last');
    throw last;
  });
  assert.throws(
    () => host.dispose(),
    (error) => {
      assert(error instanceof AggregateError);
      assert.deepEqual(error.errors, [first, last]);
      return true;
    },
  );
  assert.deepEqual(calls, ['first', 'last']);
  assert.equal(host.stats().ownedReferences, 0);
  assert.equal(host.renderStyles(), '');
  host.dispose();
});
