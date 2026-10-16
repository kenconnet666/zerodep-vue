/** 编译器只捕获已求值的完整 CSS 值；标记不进入公开 Props 值域。 */
export const BINDING = Symbol.for('@zerodep-vue/core/binding/v1');
export type Scalar = string | number;
export interface CssBinding<out Value> {
  readonly [BINDING]: () => Value;
}
export function isBinding(value: unknown): value is CssBinding<unknown> {
  return value !== null && typeof value === 'object' && BINDING in value;
}
/** @internal 读取与订阅由最终消费的 Vue render/effect 所有。 */
export function binding<Value>(read: () => Value): CssBinding<Value> {
  return Object.freeze({ [BINDING]: read });
}
