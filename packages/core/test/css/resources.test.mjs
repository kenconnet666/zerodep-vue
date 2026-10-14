import assert from 'node:assert/strict';
import test from 'node:test';
import { createCssContext, SystemKeywords, keyframes, cx } from '../../src/index.ts';
import { binding, template } from '../../src/css/bindings.ts';
import { resolveClass } from '../../src/css/resolve.ts';
const { keywords, useCss } = createCssContext(new SystemKeywords());

const s = useCss();

test('shared animations keep literal sibling frames separate from element-bound frames', () => {
  let opacity = 0.2;
  const fade = keyframes({ from: s.opacity(binding(() => opacity)), to: s.opacity(1) });
  const style = s.animationName(fade).select('& + span', s.animationName(fade));
  const first = resolveClass(style);
  assert.equal(first.resources.length, 2);
  assert(first.resources.some((rule) => rule.cssText.includes('opacity:0.2;')));
  assert(first.resources.some((rule) => rule.cssText.includes('opacity:var(')));
  assert.equal(Object.keys(first.variables).length, 1);
  opacity = 0.7;
  const next = resolveClass(style);
  assert(next.resources.some((rule) => rule.cssText.includes('opacity:0.7;')));
  assert.equal(
    first.resources.find((rule) => rule.cssText.includes('var(')).name,
    next.resources.find((rule) => rule.cssText.includes('var(')).name,
  );
});

test('plain CSS custom properties retain native fallbacks and condition composition', () => {
  const resolved = resolveClass(
    s
      .variable('--control-color', 'green')
      .color('var(--control-color, red)')
      .gap('var(--control-gap, 8px)')
      .select(':hover', s.variable('--control-opacity', 1))
      .select('@starting-style', s.variable('--control-color', 'blue'))
      .select(':nth-child(2n)', s.variable('--control-gap', '4px'))
      .select('@supports (display: grid)', s.display(keywords.display.grid)),
  );
  assert(resolved.cssText.includes('--control-color:green'));
  assert(resolved.cssText.includes('color:var(--control-color, red)'));
  assert(resolved.cssText.includes(':hover{--control-opacity:1;}'));
  assert(resolved.cssText.includes('@starting-style'));
  assert(resolved.cssText.includes(':nth-child(2n)'));
  assert(resolved.cssText.includes('@supports (display: grid)'));
  assert.deepEqual(resolved.variables, {});
});

test('plain custom properties share dynamic and inherited theme resolution', () => {
  class Theme extends SystemKeywords {
    color = { _brand: 'purple' };
  }
  const themedContext = createCssContext(new Theme());
  const themed = themedContext.useCss();
  const keywords = themedContext.keywords;
  let padding = '12px';
  const style = themed.variable('--card-accent', keywords.color._brand).variable(
    '--card-padding',
    binding(() => padding),
  );
  const first = resolveClass(style);
  assert.deepEqual(Object.values(first.variables), ['purple', '12px']);
  padding = 'initial';
  const next = resolveClass(style);
  assert.deepEqual(Object.values(next.variables), ['purple']);
  assert(next.cssText.includes('--card-padding:initial'));
});

test('dynamic keyframes keep per-frame and per-animation variables distinct and stable', () => {
  let a = 0.2;
  let b = 0.8;
  const first = keyframes({ from: s.opacity(binding(() => a)), to: s.opacity(binding(() => b)) });
  const second = keyframes({ from: s.opacity(binding(() => b)), to: s.opacity(binding(() => a)) });
  const style = s.animation(template([first, ' 1s linear, ', second, ' 2s ease']));
  const one = resolveClass(style);
  assert.equal(one.resources.length, 2);
  assert.equal(new Set(one.resources.map((rule) => rule.name)).size, 2);
  assert.deepEqual(Object.values(one.variables), ['0.2', '0.8', '0.8', '0.2']);
  a = 0.4;
  b = 0.6;
  const two = resolveClass(style);
  assert.equal(one.ruleName, two.ruleName);
  assert.deepEqual(one.resources, two.resources);
  assert.deepEqual(Object.values(two.variables), ['0.4', '0.6', '0.6', '0.4']);
  const literal = resolveClass(style, new Map(), { literal: true });
  assert.deepEqual(literal.variables, {});
  assert(literal.resources[0].cssText.includes('from{opacity:0.4;}'));
});

test('overridden animation is never evaluated and dynamic animation templates retain resources', () => {
  const bad = keyframes({
    to: s.opacity(
      binding(() => {
        throw new Error('unused');
      }),
    ),
  });
  const resolved = resolveClass(cx(s.animationName(bad), s.animationName('none')));
  assert.deepEqual(resolved.resources, []);
  const good = keyframes({ '0%, 50%': s.opacity(0), to: s.opacity(1) });
  const dynamic = resolveClass(s.animation(template([binding(() => good), ' 1s'])));
  assert.equal(dynamic.resources.length, 1);
  assert.equal(Object.values(dynamic.variables)[0], dynamic.resources[0].name + ' 1s');
  assert.throws(() => resolveClass(s.color(good)), /只能用于/);
});

test('invalid keyframe structures and animation controls are diagnosed', () => {
  assert.throws(() => keyframes({ '101%': s.opacity(1) }), /无效关键帧位置/);
  assert.throws(() => keyframes({ from: s.select(':hover', s.opacity(1)) }), /嵌套选择器/);
  assert.throws(() => keyframes({ from: s.animationDuration('1s') }), /动画控制属性/);
  assert.throws(
    () => resolveClass(s.animationName(keyframes({ from: s.color('red!important') }))),
    /important/,
  );
  assert.throws(
    () =>
      resolveClass(s.animationName(keyframes({ from: s.color(binding(() => 'red!important')) }))),
    /important/,
  );
  assert(
    resolveClass(s.animationName(keyframes({ from: s.content('"!important"') }))).resources.length,
  );
  assert.throws(() => cx(keyframes({ from: s.opacity(0) })), /cx 只接受链式样式/);
  assert(keyframes({ 'from, to': s.animationTimingFunction('ease').variable('--step', 1) }));
});
