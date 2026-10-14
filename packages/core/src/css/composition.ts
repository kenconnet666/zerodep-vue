import { CLASS, isCssClass } from './types.ts';
import type { ClassPart, CssClass, CssInput, CssNestedInput, Declaration } from './types.ts';
import { selectors } from './syntax.ts';
import type { SelectorContext } from './syntax.ts';

/** 只组合已声明样式和类名，不猜测普通对象的含义，也不提前读取绑定。 */
export function cx(...inputs: readonly CssInput[]): CssClass {
  const parts: ClassPart[] = [];
  const arrays = new Set<readonly unknown[]>();
  const collect = (input: unknown): void => {
    if (input == null || input === false || input === 0) return;
    if (typeof input === 'string') {
      if (input) parts.push(input);
    } else if (isCssClass(input)) parts.push(...input[CLASS]);
    else if (Array.isArray(input)) {
      if (arrays.has(input)) throw new Error('CSS 组合包含循环数组。');
      arrays.add(input);
      for (const item of input) collect(item);
      arrays.delete(input);
    } else throw new Error('cx 只接受链式样式、类名或条件数组。');
  };
  for (const input of inputs) collect(input);
  return Object.freeze({
    [CLASS]: Object.freeze(parts),
    [Symbol.toPrimitive](): never {
      throw new Error('CSS 样式直接交给 class 或 cx，不能转换成字符串丢弃绑定。');
    },
  });
}

/** 把已有声明移入局部或全局选择器；保留清除标记及主题、绑定的延迟求值。 */
export function declarations(
  input: CssNestedInput,
  context: SelectorContext = { selector: '&', target: '&', conditions: [] },
): readonly Declaration[] {
  const result: Declaration[] = [];
  for (const part of cx(input)[CLASS]) {
    if (typeof part === 'string')
      throw new Error('嵌套样式不能包含普通类名；其选择器无法重新限定。');
    for (const entry of part.declarations)
      for (const selected of selectors(context, entry.selector))
        result.push(
          Object.freeze({
            ...entry,
            ...selected,
            conditions: Object.freeze([...context.conditions, ...entry.conditions]),
          }),
        );
  }
  return Object.freeze(result);
}

/** 只覆盖同一选择器、条件路径与属性；其他状态继续保留，null 只清除当前位置。 */
export function compose(parts: readonly ClassPart[]): {
  declarations: Declaration[];
  classes: string[];
} {
  const entries = new Map<string, Declaration>();
  const classes: string[] = [];
  for (const part of parts) {
    if (typeof part === 'string') {
      classes.push(part);
      continue;
    }
    for (const entry of part.declarations) {
      const key = JSON.stringify([entry.selector, entry.conditions, entry.property]);
      // 覆盖后移到最后，保证简写和长写按最后一次声明的位置参与级联。
      entries.delete(key);
      if (entry.value !== null) entries.set(key, entry);
    }
  }
  return { declarations: [...entries.values()], classes };
}
