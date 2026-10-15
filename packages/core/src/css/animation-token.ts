import type { CssClass } from './style-value.ts';
export const ANIMATION = Symbol.for('@zerodep-vue/core/animation/v1');

/** 动画描述在实际使用时取得宿主租约，声明本身不插入规则。 */
export interface CssAnimation {
  readonly [ANIMATION]: readonly { readonly at: string; readonly style: CssClass }[];
}
export function isAnimation(value: unknown): value is CssAnimation {
  return !!value && typeof value === 'object' && ANIMATION in value;
}

// 只登记本库构造且帧结构稳定的描述；HMR 代理和外部 getter 不能继承静态缓存资格。
const stableAnimations = new WeakSet<object>();
export function markStableAnimation<Value extends CssAnimation>(value: Value): Value {
  stableAnimations.add(value);
  return value;
}
export function hasStableAnimation(value: CssAnimation): boolean {
  return stableAnimations.has(value);
}
