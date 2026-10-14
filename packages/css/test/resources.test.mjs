import assert from 'node:assert/strict';
import test from 'node:test';
import { css, createTheme, SystemKeywords, keywords, keyframes } from '../src/index.ts';
import { binding, template } from '../src/values.ts';
import { resolveClass } from '../src/resolve.ts';

test('plain CSS custom properties retain native fallbacks and condition composition', () => {
  const resolved = resolveClass(
    css({
      '--control-color': 'green',
      color: 'var(--control-color, red)',
      gap: 'var(--control-gap, 8px)',
      ':hover': { '--control-opacity': 1 },
      '@starting-style': { '--control-color': 'blue' },
      ':nth-child(2n)': { '--control-gap': '4px' },
      '@supports (display: grid)': { display: keywords.display.grid },
    }),
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
  const { css: themed, keywords } = createTheme(new Theme());
  let padding = '12px';
  const style = themed({
    '--card-accent': keywords.color._brand,
    '--card-padding': binding(() => padding),
  });
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
