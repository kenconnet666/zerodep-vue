import type { CssClass } from './types.ts';
import type { Scalar } from './values.ts';

export const VARIABLE = Symbol.for('@zerodep-vue/css/variable/v1');
export const VARIABLE_GROUP = Symbol.for('@zerodep-vue/css/variable-group/v1');
export const ANIMATION = Symbol.for('@zerodep-vue/css/animation/v1');

/** CSS 自定义属性引用。数值是无单位 token，长度默认值请明确写单位。 */
export interface CssVariable<out Value extends Scalar = Scalar> {
  readonly name: `--${string}`;
  readonly [VARIABLE]: { readonly initial: Value };
}
export type VariableGroup<Values extends Record<string, Scalar>> = {
  readonly [Name in keyof Values]: CssVariable<Values[Name]>;
} & {
  readonly [VARIABLE_GROUP]: {
    readonly namespace: string;
    readonly names: readonly (keyof Values)[];
  };
};

/** 动画描述在实际使用时取得宿主租约，声明本身不插入规则。 */
export interface CssAnimation {
  readonly [ANIMATION]: readonly { readonly at: string; readonly style: CssClass }[];
}
export function isVariable(value: unknown): value is CssVariable {
  return !!value && typeof value === 'object' && VARIABLE in value;
}
export function isAnimation(value: unknown): value is CssAnimation {
  return !!value && typeof value === 'object' && ANIMATION in value;
}
