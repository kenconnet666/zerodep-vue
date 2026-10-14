import assert from 'node:assert/strict';
import test from 'node:test';
import { lazy } from '../../src/css/lazy.ts';
import {
  getSystemValues,
  hasSystemProperty,
  systemPropertyNames,
} from '../../src/css/generated/keywords.ts';

test('lazy factories run on first use, share their result and retry a failed initialization', () => {
  let calls = 0;
  const value = lazy(() => {
    calls++;
    if (calls === 1) throw new Error('retry');
    return Object.freeze({ ready: true });
  });
  assert.equal(calls, 0);
  assert.throws(value, /retry/);
  const ready = value();
  assert.equal(value(), ready);
  assert.equal(calls, 2);
  const display = getSystemValues('display');
  assert.equal(display.inlineFlex, 'inline-flex');
  assert.equal(getSystemValues('display'), display);
  assert(Object.isFrozen(display));
  assert(hasSystemProperty('display'));
  assert(!hasSystemProperty('unknown'));
  assert.equal(systemPropertyNames(), systemPropertyNames());
});
