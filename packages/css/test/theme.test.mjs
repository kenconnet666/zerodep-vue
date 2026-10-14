import assert from 'node:assert/strict';
import test from 'node:test';
import { shallowRef, ref } from 'vue';
import { css, cx, createTheme, SystemKeywords, keywords } from '../src/index.ts';
import * as api from '../src/index.ts';
import { resolveClass } from '../src/resolve.ts';

class Theme extends SystemKeywords {
  color = { _brand: 'red', _accent: ref('orange') };
  padding = { _control: '8px 12px' };
}

test('css and cx are independent functions and named styles compose through css', () => {
  const styles = cx({ root: { display: keywords.display.flex }, active: { opacity: 0.5 } });
  assert.equal(typeof css, 'function');
  assert.equal(typeof cx, 'function');
  assert.equal(css.create, undefined);
  assert.equal(cx.create, undefined);
  assert.equal(css.keywords, undefined);
  assert.equal('createCss' in api, false);
  assert.equal('defineVars' in api, false);
  assert.equal('createTheme' in createTheme(new Theme()), false);
  const result = resolveClass(css(styles.root, styles.active));
  assert(result.cssText.includes('display:flex'));
  assert(result.cssText.includes('opacity:0.5'));
});

test('system keywords stay available beside typed theme members and remain literal values', () => {
  const { css: themed, keywords: themedKeywords } = createTheme(new Theme());
  const style = resolveClass(
    themed({
      display: themedKeywords.display.flex,
      color: themedKeywords.color.currentColor,
      width: themedKeywords.width.initial,
      transformStyle: themedKeywords.transformStyle.preserve3d,
    }),
  );
  assert(style.cssText.includes('display:flex'));
  assert(style.cssText.toLowerCase().includes('color:currentcolor'));
  assert(style.cssText.includes('width:initial'));
  assert(style.cssText.includes('transform-style:preserve-3d'));
  assert.equal(keywords.transformStyle['preserve-3d'], undefined);
  assert(
    resolveClass(
      css({ WebkitTransformStyle: keywords.WebkitTransformStyle.preserve3d }),
    ).cssText.includes('-webkit-transform-style:preserve-3d'),
  );
  for (const group of Object.values(keywords))
    for (const member of Object.keys(group)) assert.match(member, /^[A-Za-z_$][\w$]*$/);
  assert.deepEqual(style.variables, {});
  assert.equal(themedKeywords.color._brand, themedKeywords.color._brand);
  assert.equal(keywords.width.nonexistent, undefined);
});

test('predefined themes switch through one Ref while other regions keep their own source', () => {
  const light = new Theme();
  const dark = new Theme();
  dark.color._brand = 'blue';
  dark.color._accent.value = 'purple';
  const themes = { light, dark };
  const source = shallowRef(themes.light);
  const { css: themed, keywords: themedKeywords } = createTheme(source);
  const style = themed({
    color: themedKeywords.color._brand,
    backgroundColor: themedKeywords.color._accent,
  });
  const first = resolveClass(style);
  assert.deepEqual(Object.values(first.variables), ['red', 'orange']);
  source.value = themes.dark;
  const second = resolveClass(style);
  assert.equal(first.ruleName, second.ruleName);
  assert.deepEqual(Object.values(second.variables), ['blue', 'purple']);
  const { css: other, keywords: otherKeywords } = createTheme(themes.light);
  assert.deepEqual(
    Object.values(resolveClass(other({ color: otherKeywords.color._brand })).variables),
    ['red'],
  );
  source.value = themes.light;
  assert.deepEqual(Object.values(resolveClass(style).variables), ['red', 'orange']);
});

test('normal class inheritance retains members and invalid source definitions are diagnosed', () => {
  class Extended extends Theme {
    color = { ...new Theme().color, _danger: 'crimson' };
  }
  const { css: themed, keywords: themedKeywords } = createTheme(new Extended());
  assert.deepEqual(
    Object.values(
      resolveClass(
        themed({ color: themedKeywords.color._brand, borderColor: themedKeywords.color._danger }),
      ).variables,
    ),
    ['red', 'crimson'],
  );
  assert.throws(() => createTheme(), /真实主题实例/);
  class Invalid extends SystemKeywords {
    color = { initial: 'red' };
  }
  assert.throws(() => createTheme(new Invalid()), /不能覆盖系统关键字/);
  assert.throws(
    () => resolveClass(themed({ color: themedKeywords.color._missing })),
    /当前主题缺少/,
  );
});
