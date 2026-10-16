import type { ClassPart, CssClass, Declaration } from './style-value.ts';
import { CLASS } from './style-value.ts';
import type { SelectorContext } from './syntax.ts';
import { selectors } from './syntax.ts';

/** 把已有声明移入局部或全局选择器；保留清除标记及主题、绑定的延迟求值。 */
export function declarations(
  input: CssClass,
  context: SelectorContext = { selector: '&', target: '&', conditions: [] },
): readonly Declaration[] {
  const result: Declaration[] = [];
  for (const part of input[CLASS]) {
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
