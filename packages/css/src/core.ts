import { CLASS, isCssClass } from './types.ts';
import type { ClassPart, CssClass, CssInput, CssObject, Declaration } from './types.ts';
import { isBinding, isFallback, isTemplate } from './values.ts';
import { selectors, validateFragment } from './syntax.ts';
import type { SelectorContext } from './syntax.ts';

function declarations(object: CssObject): readonly Declaration[] {
  const result: Declaration[] = [];
  const active = new Set<object>();
  const visit = (style: CssObject, context: SelectorContext) => {
    if (active.has(style)) throw new Error('CSS 声明包含循环对象。');
    active.add(style);
    try {
      for (const [property, value] of Object.entries(style)) {
        if (value === undefined) continue;
        if (property.startsWith('@')) {
          if (!/^@(media|supports|container)\s+\S|^@starting-style$/.test(property))
            throw new Error(`不支持的局部条件：${property}`);
          validateFragment(property);
          if (!value || typeof value !== 'object') throw new Error(`${property} 需要 CSS 对象。`);
          visit(value as CssObject, { ...context, conditions: [...context.conditions, property] });
        } else if (property.startsWith(':') || property.includes('&') || property.startsWith('[')) {
          if (!value || typeof value !== 'object') throw new Error(`${property} 需要 CSS 对象。`);
          for (const selected of selectors(context, property)) visit(value as CssObject, selected);
        } else {
          if (!/^(?:--[\w-]+|[a-zA-Z][\w-]*)$/.test(property))
            throw new Error(`无效 CSS 属性：${property}`);
          if (
            value !== null &&
            typeof value !== 'string' &&
            typeof value !== 'number' &&
            !isBinding(value) &&
            !isTemplate(value) &&
            !isFallback(value)
          )
            throw new Error(`CSS 属性 ${property} 需要值；嵌套选择器请用 &。`);
          result.push(Object.freeze({ ...context, property, value }));
        }
      }
    } finally {
      active.delete(style);
    }
  };
  visit(object, { selector: '&', target: '&', conditions: [] });
  return Object.freeze(result);
}

/** 运行时声明与有序组合。创建 class 不要求 DOM，也不立即写入样式。 */
export function css(...inputs: readonly CssInput[]): CssClass {
  const parts: ClassPart[] = [];
  const arrays = new Set<readonly CssInput[]>();
  const collect = (input: CssInput): void => {
    if (input == null || input === false || input === 0) return;
    if (typeof input === 'string') {
      if (input) parts.push(input);
      return;
    }
    if (isCssClass(input)) {
      parts.push(...input[CLASS]);
      return;
    }
    if (Array.isArray(input)) {
      if (arrays.has(input)) throw new Error('CSS 组合包含循环数组。');
      arrays.add(input);
      try {
        for (const item of input) collect(item);
      } finally {
        arrays.delete(input);
      }
      return;
    }
    parts.push(Object.freeze({ declarations: declarations(input as CssObject) }));
  };
  for (const input of inputs) collect(input);
  return Object.freeze({
    [CLASS]: Object.freeze(parts),
    [Symbol.toPrimitive](): never {
      throw new Error('CSS class 值直接交给 class 或 css 组合，不能通过字符串转换丢弃绑定。');
    },
  });
}

/** 具名 class 集合；保留精确成员名供补全和组件间复用。 */
export function create<const Name extends string>(
  styles: Record<Name, CssInput>,
): { readonly [Key in Name]: CssClass } {
  return Object.freeze(
    Object.fromEntries(Object.entries(styles).map(([key, value]) => [key, css(value)])),
  ) as { readonly [Key in Name]: CssClass };
}

/** 后项替换同一目标/属性的完整声明组；保留清除标记的来源，保证组合可结合。 */
export function compose(parts: readonly ClassPart[]): {
  declarations: Declaration[];
  classes: string[];
} {
  const groups = new Map<string, { entry: Declaration; order: number }[]>();
  const classes: string[] = [];
  let order = 0;
  for (const part of parts) {
    if (typeof part === 'string') {
      classes.push(part);
      continue;
    }
    const current = new Map<string, { entry: Declaration; order: number }[]>();
    for (const entry of part.declarations) {
      const key = JSON.stringify([entry.target, entry.property]);
      let values = current.get(key);
      if (!values) current.set(key, (values = []));
      if (entry.value !== null) values.push({ entry, order });
      order++;
    }
    for (const [key, values] of current) groups.set(key, values);
  }
  return {
    declarations: [...groups.values()]
      .flat()
      .sort((a, b) => a.order - b.order)
      .map(({ entry }) => entry),
    classes,
  };
}
