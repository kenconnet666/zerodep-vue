import { css as compose } from './core.ts';
import { CLASS } from './types.ts';
import type { CssClass, CssObject } from './types.ts';
import type { CssProperties } from './generated/properties.ts';
import type { SystemKeywords } from './generated/system.ts';
import { ANIMATION, VARIABLE, VARIABLE_GROUP } from './resource-tokens.ts';
import type { CssAnimation, CssVariable, VariableGroup } from './resource-tokens.ts';
import type { Scalar } from './values.ts';
import { validateFragment } from './syntax.ts';
import { hash } from './resolve.ts';

export type VariableOverrides<Values extends Record<string, Scalar>, T extends SystemKeywords> = {
  readonly [Name in keyof Values]?: CssObject<T>[`--${string}`];
} & {
  readonly [
    Condition in
      | `:${string}`
      | `&${string}`
      | `@media ${string}`
      | `@supports ${string}`
      | `@container ${string}`
  ]?: VariableOverrides<Values, T>;
};

/**
 * 声明具有稳定命名空间的变量组；相同命名空间/成员表示同一个 CSS 自定义属性。
 * 命名空间由作者明确选择，运行时无需模块全局计数器，也不依赖构建期值求解。
 */
export function defineVars<const Values extends Record<string, Scalar>>(
  namespace: string,
  values: Values,
): VariableGroup<Values> {
  if (!namespace.trim()) throw new Error('defineVars 需要稳定的非空命名空间。');
  const result: Record<string | symbol, unknown> = {};
  for (const [key, initial] of Object.entries(values)) {
    if (typeof initial !== 'string' && (typeof initial !== 'number' || !Number.isFinite(initial)))
      throw new Error(`变量 ${key} 需要字符串或有限数字默认值。`);
    validateFragment(String(initial));
    const name = `--zv-v-${hash(JSON.stringify([namespace, key]))}` as const;
    const variable: CssVariable = Object.freeze({
      name,
      [VARIABLE]: Object.freeze({ initial }),
      [Symbol.toPrimitive]: () => `var(${name},${initial})`,
    });
    Object.defineProperty(result, key, { value: variable, enumerable: true });
  }
  Object.defineProperty(result, VARIABLE_GROUP, {
    value: Object.freeze({ namespace, names: Object.freeze(Object.keys(values)) }),
  });
  return Object.freeze(result) as VariableGroup<Values>;
}

/** 变量覆盖也是 class，参与现有组合、条件、绑定和宿主协议。 */
export function createTheme<Values extends Record<string, Scalar>, T extends SystemKeywords>(
  group: VariableGroup<Values>,
  overrides: VariableOverrides<Values, T>,
): CssClass {
  if (!group || !group[VARIABLE_GROUP])
    throw new Error('createTheme 需要 defineVars 返回的变量组。');
  const convert = (values: object): Record<string, unknown> => {
    const output: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(values)) {
      if (Object.hasOwn(group, key)) output[(group[key] as CssVariable).name] = value;
      else if (
        /^(?::|&|@(?:media|supports|container)\s)/.test(key) &&
        value &&
        typeof value === 'object'
      )
        output[key] = convert(value);
      else throw new Error(`变量组中没有 ${key}。`);
    }
    return output;
  };
  return compose(convert(overrides));
}

type AnimationControl = {
  [Key in keyof CssProperties]: Key extends `${string}Animation${string}` | `animation${string}`
    ? Key extends `${string}TimingFunction` | 'animationTimingFunction'
      ? never
      : Key
    : never;
}[keyof CssProperties];
export type KeyframeStyle<T extends SystemKeywords> = Omit<
  CssProperties<T>,
  Exclude<AnimationControl, undefined>
> & { readonly [Key in `--${string}`]?: CssObject<T>[`--${string}`] };
type FramePosition = 'from' | 'to' | `${number}%`;
export type Keyframes<T extends SystemKeywords> = Readonly<
  Partial<Record<FramePosition | `${FramePosition},${string}`, KeyframeStyle<T>>>
>;

/** 声明可复用关键帧；实际使用时才解析主题/绑定并登记规则。 */
export function keyframes<T extends SystemKeywords>(frames: Keyframes<T>): CssAnimation {
  const result = Object.entries(frames).map(([at, style]) => {
    if (
      !at
        .split(',')
        .every(
          (value) =>
            /^(?:from|to|(?:\d+(?:\.\d+)?|\.\d+)%)$/.test(value.trim()) &&
            (!value.includes('%') || Number.parseFloat(value) <= 100),
        )
    )
      throw new Error(`无效关键帧位置：${at}`);
    const resolved = compose(style as CssObject<T>);
    for (const part of resolved[CLASS])
      if (typeof part !== 'string')
        for (const declaration of part.declarations) {
          if (declaration.selector !== '&' || declaration.conditions.length)
            throw new Error('关键帧只接受属性声明，不接受嵌套选择器或媒体条件。');
          if (
            /animation/i.test(declaration.property) &&
            !/animationTimingFunction$/i.test(declaration.property)
          )
            throw new Error('关键帧中只支持 animationTimingFunction 动画控制属性。');
        }
    return Object.freeze({ at, style: resolved });
  });
  if (!result.length) throw new Error('keyframes 至少需要一个帧。');
  return Object.freeze({
    [ANIMATION]: Object.freeze(result),
    [Symbol.toPrimitive](): never {
      throw new Error('动画引用直接用于 animationName 或经编译的 animation 模板。');
    },
  });
}
