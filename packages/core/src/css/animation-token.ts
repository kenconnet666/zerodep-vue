import type { CssClass } from './style-value.ts';
export const ANIMATION = Symbol.for('@zerodep-vue/core/animation/v1');

/** 动画描述在实际使用时取得宿主租约，声明本身不插入规则。 */
export interface CssAnimation {
  readonly [ANIMATION]: readonly { readonly at: string; readonly style: CssClass }[];
}
export function isAnimation(value: unknown): value is CssAnimation {
  return !!value && typeof value === 'object' && ANIMATION in value;
}
