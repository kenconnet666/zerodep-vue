import { CLASS, isCssClass } from './types.ts';
import type { ClassPart, CssClass, Declaration } from './types.ts';
import { isBinding, isTemplate } from './bindings.ts';
import { selectors, validateFragment } from './syntax.ts';
import type { SelectorContext } from './syntax.ts';
import { KEYWORD, isKeyword, isThemeReference } from './tokens.ts';
import { isAnimation } from './animation-token.ts';

export function declarations(
  object: object,
  context: SelectorContext = { selector: '&', target: '&', conditions: [] },
): readonly Declaration[] {
  const result: Declaration[] = [];
  const active = new Set<object>();
  const visit = (style: unknown, context: SelectorContext) => {
    if (style == null || style === false || style === 0) return;
    if (typeof style !== 'object')
      throw new Error('嵌套条件只接受 CSS 声明或结构化样式，不能接收普通类名。');
    if (active.has(style)) throw new Error('CSS 声明包含循环对象。');
    active.add(style);
    try {
      if (Array.isArray(style)) {
        for (const item of style) visit(item, context);
        return;
      }
      if (isCssClass(style)) {
        for (const part of style[CLASS]) {
          if (typeof part === 'string')
            throw new Error('嵌套样式不能包含普通类名；其选择器无法重新限定。');
          for (const entry of part.declarations)
            for (const selected of selectors(context, entry.selector))
              result.push(
                Object.freeze({
                  ...entry,
                  ...selected,
                  conditions: [...context.conditions, ...entry.conditions],
                }),
              );
        }
        return;
      }
      if (
        isKeyword(style) ||
        isThemeReference(style) ||
        isBinding(style) ||
        isAnimation(style) ||
        isTemplate(style)
      )
        throw new Error('CSS 属性值不能作为嵌套声明对象。');
      for (const [property, input] of Object.entries(style)) {
        const value = isKeyword(input) ? input[KEYWORD].value : input;
        if (value === undefined) continue;
        if (property.startsWith('@')) {
          if (!/^@(media|supports|container)\s+\S|^@starting-style$/.test(property))
            throw new Error(`不支持的局部条件：${property}`);
          validateFragment(property);
          visit(value, { ...context, conditions: [...context.conditions, property] });
        } else if (property.startsWith(':') || property.includes('&') || property.startsWith('[')) {
          for (const selected of selectors(context, property)) visit(value, selected);
        } else {
          if (!/^(?:--[\w-]+|[a-zA-Z][\w-]*)$/.test(property))
            throw new Error(`无效 CSS 属性：${property}`);
          if (
            value !== null &&
            typeof value !== 'string' &&
            typeof value !== 'number' &&
            !isBinding(value) &&
            !isTemplate(value) &&
            !isThemeReference(value) &&
            !isAnimation(value)
          )
            throw new Error(`CSS 属性 ${property} 需要值；嵌套选择器请用 &。`);
          result.push(Object.freeze({ ...context, property, value }));
        }
      }
    } finally {
      active.delete(style);
    }
  };
  visit(object, context);
  return Object.freeze(result);
}

/** 运行时声明与有序组合。创建 class 不要求 DOM，也不立即写入样式。 */
export function css(...inputs: readonly unknown[]): CssClass {
  const parts: ClassPart[] = [];
  const arrays = new Set<readonly unknown[]>();
  const collect = (input: unknown): void => {
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
    if (
      typeof input !== 'object' ||
      isKeyword(input) ||
      isThemeReference(input) ||
      isBinding(input) ||
      isAnimation(input) ||
      isTemplate(input)
    )
      throw new Error('css 需要声明对象或 class 值，属性值请放入对应属性。');
    parts.push(Object.freeze({ declarations: declarations(input) }));
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
  styles: Record<Name, unknown>,
): { readonly [Key in Name]: CssClass } {
  return Object.freeze(
    Object.fromEntries((Object.keys(styles) as Name[]).map((key) => [key, css(styles[key])])),
  ) as { readonly [Key in Name]: CssClass };
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
      // 覆盖后移到最后，避免旧键的位置让后写长属性被先前的简写重新覆盖。
      entries.delete(key);
      if (entry.value !== null) entries.set(key, entry);
    }
  }
  return {
    declarations: [...entries.values()],
    classes,
  };
}
