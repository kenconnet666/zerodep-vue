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
import { binding } from '../../src/css/bindings.ts';

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

test('test runners with an incomplete hot context retain ordinary evaluation', () => {
  const style = s.color('red');
  const runtime = registerModule({}, 'unit', { style: () => style, render: (env) => env.value });
  assert.equal(runtime.style('style', {}, 'class'), style);
  assert.equal(runtime.render('render', { value: 7 })(), 7);
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
    style: (env) => s.width(env.count.value).height(binding(() => env.count.value)),
  };
  const original = registerModule(hot, 'setup', factories);
  const render = original.render('render', environment);
  const style = original.style('style', environment, 'class');
  assert.throws(() => String(style), /不能转换成字符串/);
  assert.equal(render(), 4);
  let resolved;
  const scope = effectScope();
  scope.run(() =>
    watchSyncEffect(() => {
      resolved = resolveClass(style);
    }),
  );
  assert(resolved.cssText.includes('width:1px'));
  count.value = 5;
  assert(resolved.cssText.includes('width:1px'));
  factories = {
    ...factories,
    style: (env) => s.width(env.count.value + 10).height(binding(() => env.count.value)),
    render: (env) => env.count.value * env.plain,
  };
  registerModule(hot, 'setup', factories);
  assert.equal(render(), 15);
  assert(resolved.cssText.includes('width:15px'));
  count.value = 8;
  assert(resolved.cssText.includes('width:15px'));
  assert.equal(compatible(hot, 'setup'), true);
  scope.stop();
});

test('hot named styles, custom properties, animations and globals retain live descriptions with bounded ownership', () => {
  const hot = context();
  const host = createCssHost({ target: null });
  const scope = effectScope();
  const factories = (value) => ({
    root: () => s.color(value).variable('--hot-color', value),
    animation: () => keyframes({ from: s.color(value), to: s.color('white') }),
    global: () => ({ body: s.color(value) }),
  });
  const first = registerModule(hot, 'same', factories('red'));
  const root = first.style('root', {}, 'class');
  const branch = root.padding(8).color('green');
  const animation = first.style('animation', {}, 'keyframes');
  const source = first.style('global', {}, 'source');
  first.onceGlobal('global', () => globalCss('hot', source, { host }));
  registerModule(hot, 'same', factories('blue')).onceGlobal('global', () => {
    throw new Error('registered twice');
  });
  assert(resolveClass(root).cssText.includes('color:blue'));
  assert(resolveClass(branch).cssText.includes('--hot-color:blue'));
  assert(resolveClass(branch).cssText.includes('color:green'));
  assert(resolveClass(branch).cssText.includes('padding:8px'));
  assert(resolveClass(root).cssText.includes('--hot-color:blue'));
  assert(resolveClass(s.animationName(animation)).resources[0].cssText.includes('color:blue'));
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
