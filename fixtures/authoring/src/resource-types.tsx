import { bx, keyframes, globalCss, createCssContext, SystemKeywords } from '@zerodep-vue/core';
import { themedKeywords, themed } from './theme-types.tsx';

const { keywords, useCss } = createCssContext(new SystemKeywords());

const s = useCss();

globalCss('page', {
  body: themed
    .color(themedKeywords.color._brand)
    .select(':hover', themed.display(keywords.display.flex)),
});
// @ts-expect-error 全局规则中的链仍检查属性与主题引用。
globalCss('invalid', { body: themed.padding(themedKeywords.color._brand) });
themed.color(themedKeywords.color._brand).select(':hover', themed.gap(bx('12px')));
themed.select('@starting-style', themed.color(themedKeywords.color._brand));
s.variable('--control-gap', bx('12px')).gap('var(--control-gap, 8px)');
const fade = keyframes({
  from: themed.opacity(bx(0)).color(themedKeywords.color._brand),
  '50%, to': s.opacity(1),
});
s.animationName(fade);
// @ts-expect-error 动画引用只能用于动画属性。
s.color(fade);
// @ts-expect-error 不再接受对象属性声明。
keyframes({ from: { opacity: 0 } });
// @ts-expect-error 全局选择器的内容必须是结构化样式。
globalCss('object', { body: { color: 'red' } });
// @ts-expect-error 系统关键字仍受目标属性约束。
keyframes({ from: s.padding(keywords.display.flex) });
// @ts-expect-error 变量名必须使用原生 -- 前缀。
s.variable('gap', 12);
