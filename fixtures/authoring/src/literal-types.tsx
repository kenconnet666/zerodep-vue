import { useCss, bx } from '@zerodep-vue/core';
import type { Css, SystemKeywords } from '@zerodep-vue/core';
const s = useCss();
const keywords = s.keywords;

export const literalStyle = s
  .font('inherit') // literal:font
  .display('inline-flex') // literal:display
  .select(':hover', s.color('red')) // literal:nested
  .select('@media (width > 600px)', s.position('relative')); // literal:media
export const namedStyle = { root: s.display('grid') }; // literal:named
export const reusableStyle = s.alignItems('center'); // literal:object
export const namedKeywords = s
  .display(keywords.display.inlineFlex) // member:inlineFlex
  .font(keywords.font.inherit) // member:inherit
  .color(keywords.color.currentColor)
  .width(keywords.width.revertLayer)
  .transformStyle(keywords.transformStyle.preserve3d);

export function genericLiteral<T extends SystemKeywords>(s: Css<T>) {
  return s.font('inherit'); // literal:generic
}

/** 包装表达式保留真实方法的属性上下文。 */
export function expressionLiterals<T extends SystemKeywords>(s: Css<T>, active: boolean) {
  return s
    .display(active ? 'none' : 'inline-flex') // literal:conditional
    .position(bx(active ? 'static' : 'relative')) // literal:binding
    .font('inherit')
    .boxSizing('border-box' as const); // literal:assertion
}

// @ts-expect-error 封闭属性不能因补全文档而放宽。
s.boxSizing('not-a-box-model');
// @ts-expect-error 颜色不接受数字。
s.color(12);
s.padding(12).lineHeight(1.5).width('calc(100% - 2rem)');
