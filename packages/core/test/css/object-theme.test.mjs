import assert from 'node:assert/strict';
import test from 'node:test';
import { effectScope, ref, shallowRef } from 'vue';
import {
  createCssContext,
  createCssHost,
  globalCss,
  keyframes,
  SystemKeywords,
} from '../../src/index.ts';
import { objectClass } from '../../src/css/object.ts';
import { resolveClass } from '../../src/css/resolve.ts';

const resolve = (input) => resolveClass(objectClass(input));
class Theme extends SystemKeywords {
  color = { _brand: 'red' };
  padding = { _control: '4px 8px' };
}

test('the themed object factory retains source scope, property groups and replacement reactivity', () => {
  const source = shallowRef(new Theme());
  const { useCss, useTheme } = createCssContext(source);
  const css = useCss();
  const theme = useTheme();
  const width = ref(20);
  const style = css(() => ({ backgroundColor: '_brand', padding: '_control', width: width.value }));
  const first = resolve(style);
  assert.deepEqual(Object.values(first.variables), ['red', '4px 8px', '20px']);
  const next = new Theme();
  next.color._brand = 'blue';
  source.value = next;
  width.value = 40;
  const second = resolve(style);
  assert.equal(second.ruleName, first.ruleName);
  assert.deepEqual(Object.values(second.variables), ['blue', '4px 8px', '40px']);
  assert.equal(theme.color._brand, 'blue');
  const other = createCssContext(new Theme()).useCss();
  assert.deepEqual(Object.values(resolve(other({ color: '_brand' })).variables), ['red']);
  assert.throws(() => resolve(css({ color: '_missing' })), /没有关键字|缺少/);
});

test('object keyframes read factories on consumption and keep animation variables on the element', () => {
  const offset = ref(20);
  let reads = 0;
  const motion = keyframes({
    from: { opacity: 0 },
    to: () => {
      reads++;
      return { transform: `translateX(${offset.value}px)`, opacity: 1 };
    },
  });
  assert.equal(reads, 0);
  const first = resolve({ animationName: motion, animationDuration: '100ms' });
  offset.value = 50;
  const next = resolve({ animationName: motion, animationDuration: '100ms' });
  assert.equal(reads, 2);
  assert.equal(first.ruleName, next.ruleName);
  assert.equal(first.resources[0].cssText, next.resources[0].cssText);
  assert(Object.values(next.variables).includes('translateX(50px)'));
  assert.throws(
    () => resolve({ animationName: keyframes({ from: { ':hover': { color: 'red' } } }) }),
    /嵌套选择器/,
  );
});

test('global object factories update literal rules and stop reading after scope disposal', () => {
  const width = ref(20);
  const theme = new Theme();
  const css = createCssContext(theme).useCss();
  const host = createCssHost({ target: null });
  const scope = effectScope();
  let reads = 0;
  scope.run(() =>
    globalCss(
      'object-theme',
      () => {
        reads++;
        return { '.example': css({ color: '_brand', width: width.value }) };
      },
      { host },
    ),
  );
  assert.match(host.cssText(), /color:red;width:20px/);
  assert(!host.cssText().includes('var(--zv-'));
  width.value = 40;
  assert.match(host.cssText(), /color:red;width:40px/);
  const last = reads;
  scope.stop();
  width.value = 60;
  assert.equal(reads, last);
  assert.equal(host.cssText(), '');
  host.dispose();
});
