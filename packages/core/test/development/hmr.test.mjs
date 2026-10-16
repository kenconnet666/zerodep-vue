import { objectClass, staticCss } from '../../src/css/object.ts';
import assert from 'node:assert/strict';
import test from 'node:test';
import { effectScope, ref, watchSyncEffect } from 'vue';
import {
  createCssHost,
  keyframes,
  globalCss,
  createCssContext,
  SystemKeywords,
} from '../../src/index.ts';
import { registerModule, compatible } from '../../src/development/hmr.ts';
import { resolveClass } from '../../src/css/resolve.ts';
const resolve = (input) => resolveClass(objectClass(input));
const { useCss } = createCssContext(new SystemKeywords());
const s = useCss();
const context = () => ({
  data: {},
  prune(callback) {
    this.cleanup = callback;
  },
  dispose(callback) {
    this.disposeCurrent = callback;
  },
});
test('retained style objects follow consecutive hot keyframe changes without losing dependencies', () => {
  const hot = context();
  const factories = (opacity) => ({
    animation: () =>
      keyframes({
        from: s(
          staticCss({
            opacity: opacity,
          }),
        ),
        to: s(
          staticCss({
            opacity: 1,
          }),
        ),
      }),
  });
  const runtime = registerModule(hot, 'same', factories(0.2));
  const animation = runtime.style('animation', {}, 'keyframes');
  const style = s(
    staticCss({
      animationName: animation,
    }),
  );
  const seen = [];
  const stop = watchSyncEffect(() => seen.push(resolve(style).resources[0].cssText));
  try {
    registerModule(hot, 'same', factories(0.4));
    registerModule(hot, 'same', factories(0.6));
    assert.equal(seen.length, 3);
    for (const [index, opacity] of [0.2, 0.4, 0.6].entries())
      assert(seen[index].includes(`opacity:${opacity};`));
  } finally {
    stop();
    hot.cleanup();
  }
  const stable = s(
    staticCss({
      animationName: keyframes({
        from: s(
          staticCss({
            opacity: 0,
          }),
        ),
        to: s(
          staticCss({
            opacity: 1,
          }),
        ),
      }),
    }),
  );
  assert.deepEqual(resolve(stable).resources, resolve(stable).resources);
});
test('test runners with an incomplete hot context retain ordinary evaluation', () => {
  const style = s(
    staticCss({
      color: 'red',
    }),
  );
  const runtime = registerModule({}, 'unit', {
    style: () => style,
    render: (env) => env.value,
  });
  assert.equal(runtime.style('style', {}, 'css'), style);
  assert.equal(
    runtime.render('render', {
      value: 7,
    })(),
    7,
  );
  assert.equal(compatible({}, 'unit'), false);
});
test('hot factories preserve closure writes and setup CSS snapshot semantics', () => {
  const hot = context();
  const count = ref(1);
  let plain = 2;
  const environment = {
    count,
    get plain() {
      return plain;
    },
    set plain(value) {
      plain = value;
    },
  };
  let factories = {
    render: (env) => {
      env.plain++;
      return env.count.value + env.plain;
    },
    style: (env) =>
      s([
        staticCss({
          width: env.count.value,
        }),
        () => ({
          height: env.count.value,
        }),
      ]),
  };
  const original = registerModule(hot, 'setup', factories);
  const render = original.render('render', environment);
  const style = original.style('style', environment, 'css');
  assert.equal(render(), 4);
  let resolved;
  const scope = effectScope();
  scope.run(() =>
    watchSyncEffect(() => {
      resolved = resolve(style);
    }),
  );
  assert(resolved.cssText.includes('width:1px'));
  count.value = 5;
  assert(resolved.cssText.includes('width:1px'));
  factories = {
    ...factories,
    style: (env) =>
      s([
        staticCss({
          width: env.count.value + 10,
        }),
        () => ({
          height: env.count.value,
        }),
      ]),
    render: (env) => env.count.value * env.plain,
  };
  registerModule(hot, 'setup', factories);
  assert.equal(render(), 15);
  assert(resolved.cssText.includes('width:15px'));
  count.value = 8;
  assert(resolved.cssText.includes('width:15px'));
  assert.deepEqual(Object.values(resolved.variables), ['8px']);
  assert.equal(compatible(hot, 'setup'), true);
  scope.stop();
});
test('hot named styles, custom properties, animations and globals retain live descriptions with bounded ownership', () => {
  const hot = context();
  const host = createCssHost({
    target: null,
  });
  const scope = effectScope();
  const factories = (value) => ({
    root: () =>
      s(
        staticCss({
          color: value,
          '--hot-color': value,
        }),
      ),
    animation: () =>
      keyframes({
        from: s(
          staticCss({
            color: value,
          }),
        ),
        to: s(
          staticCss({
            color: 'white',
          }),
        ),
      }),
    global: () => ({
      body: s(
        staticCss({
          color: value,
        }),
      ),
    }),
  });
  const first = registerModule(hot, 'same', factories('red'));
  const root = first.style('root', {}, 'css');
  const branch = [
    root,
    staticCss({
      padding: 8,
      color: 'green',
    }),
  ];
  const animation = first.style('animation', {}, 'keyframes');
  const source = first.style('global', {}, 'source');
  first.onceGlobal('global', () =>
    globalCss('hot', source, {
      host,
    }),
  );
  registerModule(hot, 'same', factories('blue')).onceGlobal('global', () => {
    throw new Error('registered twice');
  });
  assert(resolve(root).cssText.includes('color:blue'));
  assert(resolve(branch).cssText.includes('--hot-color:blue'));
  assert(resolve(branch).cssText.includes('color:green'));
  assert(resolve(branch).cssText.includes('padding:8px'));
  assert(resolve(root).cssText.includes('--hot-color:blue'));
  assert(
    resolve(
      s(
        staticCss({
          animationName: animation,
        }),
      ),
    ).resources[0].cssText.includes('color:blue'),
  );
  assert(host.cssText().includes('color:blue'));
  assert.equal(host.stats().ownedReferences, 1);
  hot.disposeCurrent();
  assert.equal(compatible(hot, 'same'), false);
  assert.equal(host.stats().ownedReferences, 0);
  registerModule(hot, 'changed-setup', factories('green'));
  assert.equal(compatible(hot, 'same'), false);
  assert.equal(host.stats().ownedReferences, 0);
  hot.cleanup();
  scope.stop();
  host.dispose();
});
test('HMR prune completes remaining cleanup after failure and permits reentry', () => {
  const hot = context();
  const module = registerModule(hot, 'same', {});
  const error = new Error('first cleanup failed');
  const calls = [];
  module.onceGlobal('first', () => () => {
    calls.push('first');
    hot.cleanup();
    throw error;
  });
  module.onceGlobal('last', () => () => {
    calls.push('last');
  });
  assert.throws(
    () => hot.cleanup(),
    (actual) => actual === error,
  );
  assert.deepEqual(calls, ['first', 'last']);
  hot.cleanup();
  assert.deepEqual(calls, ['first', 'last']);
});
test('failed HMR setup replacement clears old registrations and can be retried', () => {
  const hot = context();
  const module = registerModule(hot, 'old', {});
  const failures = [new Error('a'), new Error('b')];
  let calls = 0;
  for (const [index, failure] of failures.entries())
    module.onceGlobal(String(index), () => () => {
      calls++;
      throw failure;
    });
  assert.throws(
    () => registerModule(hot, 'new', {}),
    (error) => {
      assert(error instanceof AggregateError);
      assert.deepEqual(error.errors, failures);
      return true;
    },
  );
  const next = registerModule(hot, 'new', {});
  let stopped = 0;
  next.onceGlobal('new', () => () => {
    stopped++;
  });
  assert.equal(compatible(hot, 'new'), true);
  hot.cleanup();
  assert.equal(calls, 2);
  assert.equal(stopped, 1);
});
