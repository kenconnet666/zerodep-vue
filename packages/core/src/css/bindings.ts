import { isThemeReference } from './tokens.ts';
import type { ThemeReference } from './tokens.ts';
import { isAnimation } from './animation-token.ts';
import type { CssAnimation } from './animation-token.ts';

/** 值标记与 class 标记分开，普通对象永远不会因键名相似被当作 CSS。 */
export const BINDING = Symbol.for('@zerodep-vue/core/binding/v1');
export const TEMPLATE = Symbol.for('@zerodep-vue/core/template/v1');
export type Scalar = string | number;

/** 动态属性值。由编译器捕获表达式，读取归实际消费节点所有。 */
export interface CssBinding<out T> {
  readonly [BINDING]: () => T;
}
type DeferredValue = CssBinding<unknown> | ThemeReference | CssAnimation;
type TemplateInput = string | DeferredValue | CssTemplate;
export interface CssTemplate {
  readonly [TEMPLATE]: readonly (string | DeferredValue)[];
}

export function isBinding(value: unknown): value is CssBinding<unknown> {
  return value !== null && typeof value === 'object' && BINDING in value;
}
export function isTemplate(value: unknown): value is CssTemplate {
  return value !== null && typeof value === 'object' && TEMPLATE in value;
}

function isInterpolation(value: unknown): value is DeferredValue | CssTemplate {
  return isBinding(value) || isTemplate(value) || isThemeReference(value) || isAnimation(value);
}

/** @internal 编译目标；不在声明时执行 getter，也不在这里建立订阅。 */
export function binding<T>(read: () => T): CssBinding<T> {
  return Object.freeze({
    [BINDING]: read,
    [Symbol.toPrimitive](): never {
      throw new Error('bx 值需要 CSS 编译接线，不能被普通字符串拼接提前丢弃。');
    },
  });
}

/** 显式标记同步持续读取的 CSS 值；作者无需手写 getter，异步结果先存入 Vue 状态。 */
export function bx<const T>(value: T): CssBinding<T> {
  void value;
  throw new Error('[bx] 此调用需要 @zerodep-vue/compiler 转换。');
}

/** @internal 按原模板的顺序完成普通片段的字符串转换，绑定仍保持结构化。 */
export function piece(value: unknown): TemplateInput {
  return isInterpolation(value) ? value : `${value}`;
}

/** @internal 多个 bx 独立捕获，消费时组装完整 CSS 值；不使用全局字符串 token 注册表。 */
export function template(parts: readonly TemplateInput[]): string | CssTemplate {
  const flattened = parts.flatMap((part) => (isTemplate(part) ? [...part[TEMPLATE]] : [part]));
  if (flattened.every((part) => typeof part === 'string')) return flattened.join('');
  return Object.freeze({
    [TEMPLATE]: Object.freeze(flattened),
    [Symbol.toPrimitive](): never {
      throw new Error('含 bx 的模板需要直接交给 CSS 属性。');
    },
  });
}

/** @internal 普通输入完整保留 JS +；含绑定的字符串拼接保留独立片段。 */
export function add(left: any, right: any): any {
  if (isInterpolation(left) || isInterpolation(right)) return template([piece(left), piece(right)]);
  return left + right;
}
