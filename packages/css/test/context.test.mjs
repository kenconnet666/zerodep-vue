import assert from 'node:assert/strict';
import test from 'node:test';
import { createSSRApp, getCurrentInstance } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { getCssHost, hostFor } from '../src/context.ts';

test('independent runtime modules share the same request collector without mixing requests', async () => {
  const duplicate = await import('../src/context.ts?independent-runtime');
  const render = async (color) => {
    const context = Object.freeze({});
    const app = createSSRApp({
      setup() {
        const owner = getCurrentInstance();
        const first = hostFor(owner);
        const second = duplicate.hostFor(owner);
        assert.equal(first, second);
        first.collect({ name: 'a-' + color, cssText: `.a{color:${color};}` });
        second.collect({ name: 'b-' + color, cssText: `.b{background:${color};}` });
        return () => null;
      },
    });
    await renderToString(app, context);
    assert.equal(getCssHost(context), duplicate.getCssHost(context));
    return { context, host: getCssHost(context) };
  };
  const a = await render('red');
  const b = await render('blue');
  assert.notEqual(a.host, b.host);
  assert.equal(a.host.snapshot().length, 2);
  assert(!a.host.cssText().includes('blue'));
  assert(!b.host.cssText().includes('red'));
  a.host.dispose();
  b.host.dispose();
});
