import assert from 'node:assert/strict';
import test from 'node:test';
import { createCssContext, SystemKeywords, keyframes } from '../../src/index.ts';
import { objectClass, staticCss } from '../../src/css/object.ts';
import { resolveClass } from '../../src/css/resolve.ts';
const resolve = (source, options) => resolveClass(objectClass(source), new Map(), options);

test('shared animations separate literal sibling frames from element-owned frame variables', () => {
  let opacity = 0.2;
  const fade = keyframes({ from: () => ({ opacity }), to: staticCss({ opacity: 1 }) });
  const style = { animationName: fade, '& + span': { animationName: fade } };
  const first = resolve(style);
  assert.equal(first.resources.length, 2);
  assert(first.resources.some((rule) => rule.cssText.includes('opacity:0.2;')));
  assert(first.resources.some((rule) => rule.cssText.includes('opacity:var(')));
  assert.deepEqual(Object.values(first.variables), ['0.2']);
  opacity = 0.7;
  const next = resolve(style);
  assert(next.resources.some((rule) => rule.cssText.includes('opacity:0.7;')));
  assert.equal(
    first.resources.find((rule) => rule.cssText.includes('var(')).name,
    next.resources.find((rule) => rule.cssText.includes('var(')).name,
  );
});

test('custom properties retain fallbacks, nested conditions and native inheritance', () => {
  const result = resolve(
    staticCss({
      '--control-color': 'green',
      color: 'var(--control-color, red)',
      gap: 'var(--control-gap, 8px)',
      ':hover': staticCss({ '--control-opacity': 1 }),
      '@starting-style': staticCss({ '--control-color': 'blue' }),
      ':nth-child(2n)': staticCss({ '--control-gap': '4px' }),
      '@supports (display: grid)': staticCss({ display: 'grid' }),
    }),
  );
  for (const fragment of [
    '--control-color:green',
    'color:var(--control-color, red)',
    ':hover{--control-opacity:1;}',
    '@starting-style',
    ':nth-child(2n)',
    '@supports (display: grid)',
  ])
    assert(result.cssText.includes(fragment));
  assert.deepEqual(result.variables, {});
  class Theme extends SystemKeywords {
    color = { _brand: 'purple' };
  }
  const context = createCssContext(new Theme());
  const css = context.useCss(),
    theme = context.useTheme();
  let padding = '12px';
  const style = css(() => ({ '--card-accent': theme.color._brand, '--card-padding': padding }));
  assert.deepEqual(Object.values(resolve(style).variables), ['purple', '12px']);
  padding = 'initial';
  const next = resolve(style);
  assert.deepEqual(Object.values(next.variables), ['purple']);
  assert(next.cssText.includes('--card-padding:initial'));
});

test('multiple animations and frames retain distinct stable resource names and live values', () => {
  let a = 0.2,
    b = 0.8;
  const first = keyframes({ from: () => ({ opacity: a }), to: () => ({ opacity: b }) });
  const second = keyframes({ from: () => ({ opacity: b }), to: () => ({ opacity: a }) });
  const style = { animationName: [first, second], animationDuration: '1s, 2s' };
  const one = resolve(style);
  assert.equal(one.resources.length, 2);
  assert.equal(new Set(one.resources.map((rule) => rule.name)).size, 2);
  assert(
    one.cssText.includes(`animation-name:${one.resources.map((rule) => rule.name).join(', ')}`),
  );
  assert.deepEqual(Object.values(one.variables), ['0.2', '0.8', '0.8', '0.2', '1s, 2s']);
  a = 0.4;
  b = 0.6;
  const two = resolve(style);
  assert.equal(one.ruleName, two.ruleName);
  assert.deepEqual(one.resources, two.resources);
  assert.deepEqual(Object.values(two.variables), ['0.4', '0.6', '0.6', '0.4', '1s, 2s']);
  const literal = resolve(style, { literal: true });
  assert.deepEqual(literal.variables, {});
  assert(literal.resources[0].cssText.includes('from{opacity:0.4;}'));
  assert.equal(resolve({ animationName: [first, first, 'external'] }).resources.length, 1);
  const cleared = resolve([style, { animationName: [] }]);
  assert.deepEqual(cleared.resources, []);
  assert(cleared.cssText.includes('animation-name:none'));
  class Theme extends SystemKeywords {
    animationName = { _external: 'external' };
  }
  const context = createCssContext(new Theme());
  const themed = context.useCss()({ animationName: [first, '_external'] });
  assert(resolve(themed).cssText.includes(', external'));
  context.useTheme().animationName._external = null;
  assert(resolve(themed).cssText.includes(', none'));
  assert.throws(
    () => resolve(context.useCss()({ animationName: [first, '_missing'] })),
    /没有关键字/,
  );
});

test('unused animations do not evaluate frames and invalid boundaries fail when consumed', () => {
  const bad = keyframes({
    to: () => {
      throw Error('unused');
    },
  });
  assert.deepEqual(resolve([{ animationName: bad }, { animationName: 'none' }]).resources, []);
  const good = keyframes({ '0%, 50%': { opacity: 0 }, to: { opacity: 1 } });
  assert.equal(resolve({ animationName: good }).resources.length, 1);
  assert.throws(() => `${good} 1s`, /animationName/);
  assert.throws(() => resolve({ color: good }), /只能用于/);
  assert.throws(() => resolve({ color: [good] }), /动画名称列表只能用于 animationName/);
  assert.throws(() => keyframes({ '101%': { opacity: 1 } }), /无效关键帧位置/);
  for (const [frame, error] of [
    [{ ':hover': { opacity: 1 } }, /嵌套选择器/],
    [{ animationDuration: '1s' }, /动画控制属性/],
    [{ color: 'red!important' }, /important/],
    [() => ({ color: 'red!important' }), /important/],
  ])
    assert.throws(() => resolve({ animationName: keyframes({ from: frame }) }), error);
  assert(
    resolve({ animationName: keyframes({ from: { content: '"!important"' } }) }).resources.length,
  );
  assert(
    resolve({
      animationName: keyframes({ 'from, to': { animationTimingFunction: 'ease', '--step': 1 } }),
    }).resources.length,
  );
});
