import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { createCssHost } from '../src/host.ts';
import { css } from '../src/core.ts';
import { resolveClass } from '../src/resolve.ts';

const rule = (color) => {
  const resolved = resolveClass(css({ color }));
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
