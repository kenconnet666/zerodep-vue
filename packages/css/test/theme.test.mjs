import assert from 'node:assert/strict';
import test from 'node:test';
import { shallowRef, ref } from 'vue';
import { css, createCss, SystemKeywords } from '../src/index.ts';
import { resolveClass } from '../src/resolve.ts';

class Theme extends SystemKeywords {
  color = { _brand: 'red', _accent: ref('orange') };
  padding = { _control: '8px 12px' };
}

test('system keywords stay available beside typed theme members and remain literal values', () => {
  const themed = createCss(new Theme());
  const style = resolveClass(
    themed({
      display: themed.keywords.display.flex,
      color: themed.keywords.color.currentColor,
      width: themed.keywords.width.initial,
    }),
  );
  assert(style.cssText.includes('display:flex'));
  assert(style.cssText.toLowerCase().includes('color:currentcolor'));
  assert(style.cssText.includes('width:initial'));
  assert.deepEqual(style.variables, {});
  assert.equal(themed.keywords.color._brand, themed.keywords.color._brand);
  assert.equal(css.keywords.width.nonexistent, undefined);
});

test('theme references read live sources, support Ref replacement and keep instance values separate', () => {
  const source = shallowRef(new Theme());
  const themed = createCss(source);
  const style = themed({
    color: themed.keywords.color._brand,
    backgroundColor: themed.keywords.color._accent,
  });
  const first = resolveClass(style);
  assert.deepEqual(Object.values(first.variables), ['red', 'orange']);
  const next = new Theme();
  next.color._brand = 'blue';
  next.color._accent.value = 'purple';
  source.value = next;
  const second = resolveClass(style);
  assert.equal(first.ruleName, second.ruleName);
  assert.deepEqual(Object.values(second.variables), ['blue', 'purple']);
  const other = createCss(new Theme());
  assert.deepEqual(
    Object.values(resolveClass(other({ color: other.keywords.color._brand })).variables),
    ['red'],
  );
});

test('normal class inheritance retains members and invalid source definitions are diagnosed', () => {
  class Extended extends Theme {
    color = { ...new Theme().color, _danger: 'crimson' };
  }
  const themed = createCss(new Extended());
  assert.deepEqual(
    Object.values(
      resolveClass(
        themed({ color: themed.keywords.color._brand, borderColor: themed.keywords.color._danger }),
      ).variables,
    ),
    ['red', 'crimson'],
  );
  assert.throws(() => createCss(), /真实主题实例/);
  class Invalid extends SystemKeywords {
    color = { initial: 'red' };
  }
  assert.throws(() => createCss(new Invalid()), /不能覆盖系统关键字/);
  assert.throws(
    () => resolveClass(themed({ color: themed.keywords.color._missing })),
    /当前主题缺少/,
  );
});
