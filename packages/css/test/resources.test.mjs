import assert from 'node:assert/strict';
import test from 'node:test';
import {
  css,
  createCss,
  SystemKeywords,
  keywords,
  keyframes,
  defineVars,
  createTheme,
} from '../src/index.ts';
import { binding, template } from '../src/values.ts';
import { resolveClass } from '../src/resolve.ts';

test('variable groups have stable names, native fallbacks and composable condition overrides', () => {
  const tokens = defineVars('control', { color: 'red', gap: '8px', opacity: 0.8 });
  const same = defineVars('control', { color: 'blue' });
  assert.equal(tokens.color.name, same.color.name);
  assert.notEqual(defineVars('a:b', { c: '' }).c.name, defineVars('a', { 'b:c': '' })['b:c'].name);
  const override = createTheme(tokens, { color: 'green', ':hover': { opacity: 1 } });
  const resolved = resolveClass(
    css(override, { color: tokens.color, gap: tokens.gap, opacity: tokens.opacity }),
  );
  assert(resolved.cssText.includes(`${tokens.color.name}:green`));
  assert(resolved.cssText.includes(`color:var(${tokens.color.name},red)`));
  assert(resolved.cssText.includes(`gap:var(${tokens.gap.name},8px)`));
  assert(resolved.cssText.includes(`:hover{${tokens.opacity.name}:1;}`));
  assert.deepEqual(resolved.variables, {});
  assert.throws(() => createTheme(tokens, { missing: 'red' }), /变量组中没有/);
  assert.throws(() => defineVars('', { a: 0 }), /命名空间/);
  const start = resolveClass(
    createTheme(tokens, {
      '@starting-style': { color: 'blue' },
      ':nth-child(2n)': { gap: '4px' },
    }),
  );
  assert(start.cssText.includes('@starting-style'));
  assert(start.cssText.includes(':nth-child(2n)'));
  const fallback = resolveClass(
    css({
      display: 'flex',
      '@supports (display: grid)': { display: keywords.display.grid },
      gap: tokens.gap,
    }),
  );
  assert(fallback.cssText.includes('@supports (display: grid)'));
  assert(fallback.cssText.includes(`gap:var(${tokens.gap.name},8px);`));
});

test('variable theme overrides share dynamic and inherited theme resolution', () => {
  class Theme extends SystemKeywords {
    color = { _brand: 'purple' };
  }
  const { keywords: themedKeywords, createTheme: themedCreateTheme } = createCss(new Theme());
  const vars = defineVars('card', { accent: 'black', padding: '8px' });
  let padding = '12px';
  const style = themedCreateTheme(vars, {
    accent: themedKeywords.color._brand,
    padding: binding(() => padding),
  });
  const first = resolveClass(style);
  assert.deepEqual(Object.values(first.variables), ['purple', '12px']);
  padding = 'initial';
  const next = resolveClass(style);
  assert.deepEqual(Object.values(next.variables), ['purple']);
  assert(next.cssText.includes(`${vars.padding.name}:initial`));
});

test('dynamic keyframes keep per-frame and per-animation variables distinct and stable', () => {
  let a = 0.2;
  let b = 0.8;
  const first = keyframes({
    from: { opacity: binding(() => a) },
    to: { opacity: binding(() => b) },
  });
  const second = keyframes({
    from: { opacity: binding(() => b) },
    to: { opacity: binding(() => a) },
  });
  const style = css({ animation: template([first, ' 1s linear, ', second, ' 2s ease']) });
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
    to: {
      opacity: binding(() => {
        throw new Error('unused');
      }),
    },
  });
  const resolved = resolveClass(css({ animationName: bad }, { animationName: 'none' }));
  assert.deepEqual(resolved.resources, []);
  const good = keyframes({ '0%, 50%': { opacity: 0 }, to: { opacity: 1 } });
  const dynamic = resolveClass(css({ animation: template([binding(() => good), ' 1s']) }));
  assert.equal(dynamic.resources.length, 1);
  assert.equal(Object.values(dynamic.variables)[0], dynamic.resources[0].name);
  assert.throws(() => resolveClass(css({ color: good })), /只能用于/);
});

test('invalid keyframe structures and animation controls are diagnosed', () => {
  assert.throws(() => keyframes({ '101%': { opacity: 1 } }), /无效关键帧位置/);
  assert.throws(() => keyframes({ from: { ':hover': { opacity: 1 } } }), /嵌套选择器/);
  assert.throws(() => keyframes({ from: { animationDuration: '1s' } }), /动画控制属性/);
  assert.throws(
    () => resolveClass(css({ animationName: keyframes({ from: { color: 'red!important' } }) })),
    /important/,
  );
  assert.throws(() => css(keyframes({ from: { opacity: 0 } })), /属性值请放入/);
  assert(keyframes({ 'from, to': { animationTimingFunction: 'ease', '--step': 1 } }));
});
