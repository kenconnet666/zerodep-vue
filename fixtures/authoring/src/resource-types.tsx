import { css, bx, keywords, keyframes, defineVars, createTheme } from '@zerodep-vue/css';
import {
  themedKeywords,
  themedKeyframes,
  themedCreateTheme,
  themedGlobalCss,
} from './theme-types.tsx';

const vars = defineVars('button', { color: 'red', gap: '8px', opacity: 1 });
themedGlobalCss('page', {
  body: { color: themedKeywords.color._brand, ':hover': { display: keywords.display.flex } },
});
// @ts-expect-error 全局选择器内仍检查属性与主题引用。
themedGlobalCss('invalid', { body: { padding: themedKeywords.color._brand } });
createTheme(vars, { color: themedKeywords.color._brand, ':hover': { gap: bx('12px') } });
css({ color: vars.color, gap: vars.gap, opacity: vars.opacity });
themedCreateTheme(vars, { '@starting-style': { color: themedKeywords.color._brand } });
// @ts-expect-error 变量成员需要精确名称。
createTheme(vars, { missing: 'red' });
// @ts-expect-error 嵌套分组也检查变量成员名。
createTheme(vars, { ':hover': { missing: 'red' } });
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
