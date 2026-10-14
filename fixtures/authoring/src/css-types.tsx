import { useCss, bx, cx, _component } from '@zerodep-vue/core';
import { ref } from 'vue';
import type { CssInput } from '@zerodep-vue/core';
const s = useCss();
const width = ref('120px');
const styles = {
  root: s.display('flex').select(':hover', s.color('red')),
  label: s.fontWeight(600),
};
export const Box = _component(({ class: external }: { class?: CssInput }) => (
  <div class={cx(styles.root, external, 'selected')} />
));
export const usage = <Box class={s.width(bx(width.value)).transform(`translateX(${bx(12)}px)`)} />;
// @ts-expect-error 属性方法需要准确拼写。
s.color('red').colro('blue');
// @ts-expect-error 命名集合不开放任意成员。
styles.missing;
// @ts-expect-error 颜色属性不接受数值绑定。
s.color(bx(123));
s.select(':hover', styles.label)
  .select(':nth-child(2n)', s.color('red'))
  .select('[data-active]', styles.root);
s.display('flex').select('@supports (display: grid)', s.display(s.keywords.display.grid));
// @ts-expect-error 组合不接受旧 CSS 对象，也不猜测条件类名对象。
cx({ color: 'red' });
// @ts-expect-error 布尔真值不是样式。
cx(true);
// @ts-expect-error cx 不再批量定义具名样式。
cx({ root: s.color('red') });
// @ts-expect-error 普通类名不能在嵌套选择器中重写。
s.select(':hover', 'external');
