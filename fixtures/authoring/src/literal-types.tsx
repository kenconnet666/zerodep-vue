import { css, cx, keywords } from '@zerodep-vue/css';
import type { CssContext, CssObject, SystemKeywords } from '@zerodep-vue/css';

export const literalStyle = css({
  font: 'inherit', // literal:font
  display: 'inline-flex', // literal:display
  ':hover': { color: 'red' }, // literal:nested
  '@media (width > 600px)': { position: 'relative' }, // literal:media
});
export const namedStyle = cx({ root: { display: 'grid' } }); // literal:named
export const reusableStyle: CssObject = { alignItems: 'center' }; // literal:object
export const namedKeywords = css({
  display: keywords.display.inlineFlex, // member:inlineFlex
  font: keywords.font.inherit, // member:inherit
  color: keywords.color.currentColor,
  width: keywords.width.revertLayer,
  transformStyle: keywords.transformStyle['preserve-3d'],
});

export function genericLiteral<T extends SystemKeywords>({ css }: CssContext<T>) {
  return css({ font: 'inherit' }); // literal:generic
}

// @ts-expect-error 封闭属性不能因补全文档而放宽为任意字符串。
css({ boxSizing: 'not-a-box-model' });
// @ts-expect-error 原本不接受数字的属性继续拒绝数字。
css({ color: 12 });
css({ padding: 12, lineHeight: 1.5, width: 'calc(100% - 2rem)' });
