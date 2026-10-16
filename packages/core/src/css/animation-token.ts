import type { CssClass } from './style-value.ts';
export const ANIMATION = Symbol.for('@zerodep-vue/core/animation/v1');

/** 动画描述在实际使用时取得宿主租约，声明本身不插入规则。 */
export interface CssAnimation {
  readonly [ANIMATION]: readonly { readonly at: string; readonly style: CssClass }[];
}
/** animationName 的逗号分隔列表；可混用自有动画和已有 CSS 动画名称。 */
export type CssAnimationNames = readonly (CssAnimation | string)[];
export function isAnimation(value: unknown): value is CssAnimation {
  return !!value && typeof value === 'object' && ANIMATION in value;
}
export function isAnimationNames(value: unknown): value is CssAnimationNames {
  return (
    Array.isArray(value) && value.every((name) => typeof name === 'string' || isAnimation(name))
  );
}
