import { css, bx } from '@zerodep-vue/css';
import { _component } from '@zerodep-vue/tsx';
import { ref } from 'vue';
import type { CssInput } from '@zerodep-vue/css';

const width = ref('120px');
const styles = css.create({
  root: { display: 'flex', ':hover': { color: 'red' } },
  label: { fontWeight: 600 },
});
export const Box = _component(({ class: external }: { class?: CssInput }) => (
  <div class={css(styles.root, external, 'selected')} />
));
export const usage = (
  <Box class={css({ width: bx(width.value), transform: `translateX(${bx(12)}px)` })} />
);

// @ts-expect-error 普通声明对象只接受已知 CSS 属性和条件。
css({ color: 'red', colro: 'blue' });
// @ts-expect-error create 中的嵌套声明同样需要检查属性拼写。
css.create({ root: { color: 'red', colro: 'blue' } });
// @ts-expect-error 具名样式不开放任意成员。
styles.missing;
// @ts-expect-error 颜色属性不接受数值绑定。
css({ color: bx(123) });

css({ ':hover': styles.label, ':nth-child(2n)': { color: 'red' }, '[data-active]': styles.root });
css({ display: css.firstThatWorks(css.keywords.display.grid, 'flex') });
// @ts-expect-error 条件类名对象不是 CSS 声明，用 enabled && 'selected'。
css({ selected: true });
// @ts-expect-error 无意义的布尔真值不是样式。
css(true);
