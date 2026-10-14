import { css, bx, keywords, keyframes } from '@zerodep-vue/css';
import { themedKeywords, themedKeyframes, themed, themedGlobalCss } from './theme-types.tsx';

themedGlobalCss('page', {
  body: { color: themedKeywords.color._brand, ':hover': { display: keywords.display.flex } },
});
// @ts-expect-error 全局选择器内仍检查属性与主题引用。
themedGlobalCss('invalid', { body: { padding: themedKeywords.color._brand } });
themed({ color: themedKeywords.color._brand, ':hover': { gap: bx('12px') } });
themed({ '@starting-style': { color: themedKeywords.color._brand } });
// 自定义变量使用普通 CSS 声明，名称及 fallback 由作者显式书写。
css({ '--control-gap': bx('12px'), gap: 'var(--control-gap, 8px)' });
const fade = themedKeyframes({
  from: { opacity: bx(0), color: themedKeywords.color._brand },
  '50%, to': { opacity: 1 },
});
css({ animationName: fade });
// @ts-expect-error 动画引用只能用于动画属性。
css({ color: fade });
// @ts-expect-error 关键帧内不允许另一个动画。
keyframes({ from: { animationName: fade } });
// @ts-expect-error 关键帧只接受声明，不接受选择器。
keyframes({ from: { ':hover': { color: 'red' } } });
// @ts-expect-error 系统关键字仍受目标属性约束。
keyframes({ from: { padding: keywords.display.flex } });
