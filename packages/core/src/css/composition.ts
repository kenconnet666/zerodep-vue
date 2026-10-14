import { CLASS, hasStableParts, isCssClass, markStableParts } from './style-value.ts';
import type { ClassPart, CssClass, CssInput, CssNestedInput, Declaration } from './style-value.ts';
import { selectors } from './syntax.ts';
import type { SelectorContext } from './syntax.ts';

/** 只组合已声明样式和类名，不猜测普通对象的含义，也不提前读取绑定。 */
export function cx(...inputs: readonly CssInput[]): CssClass {
  const roots: (CssClass | string)[] = [];
  const arrays = new Set<readonly unknown[]>();
  const collect = (input: unknown): void => {
    if (input == null || input === false || input === 0) return;
    if (typeof input === 'string') {
      if (input) roots.push(input);
      return;
    }
    if (isCssClass(input)) {
      roots.push(input);
      return;
    }
    if (!Array.isArray(input)) throw new Error('cx 只接受链式样式、类名或条件数组。');
    if (arrays.has(input)) throw new Error('CSS 组合包含循环数组。');
    arrays.add(input);
    for (const item of input) collect(item);
    arrays.delete(input);
  };
  for (const input of inputs) collect(input);
  const stable = roots.every((root) => typeof root === 'string' || hasStableParts(root));
  let parts: readonly ClassPart[] | undefined;
  const result = Object.freeze({
    // 快照组合输入但不展开样式链，未消费的分支不会创建完整声明数组。
    get [CLASS]() {
      const expand = () =>
        Object.freeze(
          roots.flatMap((root) => (typeof root === 'string' ? [root] : [...root[CLASS]])),
        );
      return stable ? (parts ??= expand()) : expand();
    },
    [Symbol.toPrimitive](): never {
      throw new Error('CSS 样式直接交给 class 或 cx，不能转换成字符串丢弃绑定。');
    },
  });
  return stable ? markStableParts(result) : result;
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
export function compose(
  parts: readonly ClassPart[],
  omitted: (entry: Declaration) => boolean,
): {
  declarations: Declaration[];
  classes: string[];
} {
  const entries = new Map<string, { entry: Declaration; position: number }[]>();
  const classes: string[] = [];
  let position = 0;
  for (const part of parts) {
    if (typeof part === 'string') {
      classes.push(part);
      continue;
    }
    for (const entry of part.declarations) {
      const key = JSON.stringify([entry.selector, entry.conditions, entry.property]);
      const candidates = entries.get(key) ?? [];
      candidates.push({ entry, position: position++ });
      // 先按最后一次声明的位置处理，避免改变普通有效绑定的求值顺序。
      entries.delete(key);
      entries.set(key, candidates);
    }
  }
  const selected: { entry: Declaration; position: number }[] = [];
  for (const candidates of entries.values()) {
    for (let index = candidates.length - 1; index >= 0; index--) {
      const candidate = candidates[index]!;
      if (candidate.entry.value === null) break;
      // 可选绑定为 undefined 时回退到前项，null 仍清除；被确定覆盖的 getter 不读取。
      if (omitted(candidate.entry)) continue;
      selected.push(candidate);
      break;
    }
  }
  selected.sort((left, right) => left.position - right.position);
  return { declarations: selected.map(({ entry }) => entry), classes };
}
