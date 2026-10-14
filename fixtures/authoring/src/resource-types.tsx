import { css, bx } from '@zerodep-vue/css';
import { themed } from './theme-types.tsx';

const vars = css.defineVars('button', { color: 'red', gap: '8px', opacity: 1 });
themed.global('page', {
  body: { color: themed.keywords.color._brand, ':hover': { display: css.keywords.display.flex } },
});
// @ts-expect-error 全局选择器内仍检查属性与主题引用。
themed.global('invalid', { body: { padding: themed.keywords.color._brand } });
css.createTheme(vars, { color: themed.keywords.color._brand, ':hover': { gap: bx('12px') } });
css({ color: vars.color, gap: vars.gap, opacity: vars.opacity });
css({ gap: css.firstThatWorks(vars.gap, '4px') });
themed.createTheme(vars, { '@starting-style': { color: themed.keywords.color._brand } });
// @ts-expect-error 变量成员需要精确名称。
css.createTheme(vars, { missing: 'red' });
// @ts-expect-error 嵌套分组也检查变量成员名。
css.createTheme(vars, { ':hover': { missing: 'red' } });
const fade = themed.keyframes({
  from: { opacity: bx(0), color: themed.keywords.color._brand },
  '50%, to': { opacity: 1 },
});
css({ animationName: fade });
// @ts-expect-error 动画引用只能用于动画属性。
css({ color: fade });
// @ts-expect-error 关键帧内不允许另一个动画。
css.keyframes({ from: { animationName: fade } });
// @ts-expect-error 关键帧只接受声明，不接受选择器。
css.keyframes({ from: { ':hover': { color: 'red' } } });
// @ts-expect-error 系统关键字仍受目标属性约束。
css.keyframes({ from: { padding: css.keywords.display.flex } });
