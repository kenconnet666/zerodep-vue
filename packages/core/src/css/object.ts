import selectorParser from 'postcss-selector-parser';
import { isAnimation } from './animation-token.ts';
import { binding, isBinding } from './bindings.ts';
import type { SystemKeywords } from './generated/system.ts';
import type { CssFactory, CssStyle } from './object-types.ts';
import type { CssClass, Declaration } from './style-value.ts';
import { CLASS, markStableParts } from './style-value.ts';
import type { SelectorContext } from './syntax.ts';
import { selectors, validateFragment } from './syntax.ts';
import type { ThemeResolver } from './tokens.ts';
import { isThemeReference } from './tokens.ts';

export const CSS_STYLE = Symbol.for('@zerodep-vue/core/css-object/v1');
const compiledObjects = new WeakMap<object, ReadonlySet<string> | null>();

/** @internal 已求值的 JS 快照；与显式 source 工厂的延迟读取分开。 */
export function valueBinding<Value>(value: Value) {
  return binding(() => value);
}

/** @internal 仅记录当前对象的动态字段，保持普通 Props 的对象身份与字段值。 */
export function staticCss<Source extends object>(
  source: Source,
  dynamic: readonly string[] | null = [],
): Source {
  compiledObjects.set(source, dynamic === null ? null : new Set(dynamic));
  return source;
}

export function createCssFactory<Theme extends SystemKeywords>(
  resolveTheme: ThemeResolver,
): CssFactory<Theme> {
  return (source: unknown) => ({ [CSS_STYLE]: { source, resolveTheme } });
}

const root: SelectorContext = { selector: '&', target: '&', conditions: [] };
const simplePseudos = new Set([
  ':hover',
  ':active',
  ':focus',
  ':focus-visible',
  ':focus-within',
  ':disabled',
  ':enabled',
  ':checked',
  ':indeterminate',
  ':required',
  ':optional',
  ':read-only',
  ':read-write',
  ':valid',
  ':invalid',
  ':placeholder-shown',
  ':empty',
  ':first-child',
  ':last-child',
  ':only-child',
]);

/** 只规范化可交换的根状态原子；复杂选择器保持原样，不尝试 CSS 逻辑等价推导。 */
function stateSelector(selector: string): string {
  const ast = selectorParser().astSync(selector);
  const item = ast.nodes[0];
  if (ast.nodes.length !== 1 || !item || item.nodes[0]?.type !== 'nesting') return selector;
  const atoms = item.nodes.slice(1);
  if (
    !atoms.every(
      (node) =>
        (node.type === 'pseudo' && simplePseudos.has(node.value) && !node.nodes?.length) ||
        (node.type === 'attribute' &&
          /^(aria|data)-[\w-]+$/.test(node.attribute) &&
          node.operator === '=' &&
          !node.insensitive),
    )
  )
    return selector;
  for (const node of atoms) node.remove();
  for (const node of atoms.sort((left, right) =>
    left.toString() < right.toString() ? -1 : left.toString() > right.toString() ? 1 : 0,
  )) {
    if (node.type === 'attribute') node.setValue(node.value ?? '', { quoteMark: '"' });
    item.append(node);
  }
  return ast.toString();
}

/** 将输入展开成已有后端的声明序列；生命周期、变量、动画及 SSR 仍共用同一解析器。 */
export function objectClass(input: unknown): CssClass {
  const entries: Declaration[] = [];
  const visiting = new Set<object>();
  const results = new Map<() => unknown, unknown>();
  const visit = (
    source: unknown,
    context: SelectorContext,
    resolveTheme?: ThemeResolver,
    origin?: object,
  ): void => {
    if (source == null || source === false) return;
    if (typeof source !== 'object' && typeof source !== 'function')
      throw new TypeError('css 需要样式对象、数组或同步样式函数；类名请写在 class。');
    if (visiting.has(source)) throw new TypeError('CSS 输入包含循环引用。');
    visiting.add(source);
    try {
      if (typeof source === 'function') {
        const read = source as () => unknown;
        if (!results.has(read)) results.set(read, read());
        visit(results.get(read), context, resolveTheme, origin);
        return;
      }
      if (CSS_STYLE in source) {
        const descriptor = (source as CssStyle)[CSS_STYLE];
        visit(descriptor.source, context, descriptor.resolveTheme ?? resolveTheme, source);
        return;
      }
      if (Array.isArray(source)) {
        for (const item of source) visit(item, context, resolveTheme, origin);
        return;
      }
      if (
        Object.getPrototypeOf(source) !== Object.prototype &&
        Object.getPrototypeOf(source) !== null
      )
        throw new TypeError('CSS 样式需要普通对象；Ref 请读取 .value，异步结果请先等待。');
      const dynamic = compiledObjects.get(source);
      if (!origin && compiledObjects.has(source)) origin = source;
      for (const [key, value] of Object.entries(source)) {
        if (value === undefined) continue;
        if (key.startsWith('@')) {
          validateFragment(key);
          if (!/^@(media|supports|container)\s+\S|^@starting-style$/.test(key))
            throw new TypeError(`不支持的局部 CSS 条件：${key}`);
          visit(
            value,
            { ...context, conditions: [...context.conditions, key] },
            resolveTheme,
            origin,
          );
        } else if (/^(aria|data)-/.test(key)) {
          if (
            !/^(aria|data)-[\w-]+$/.test(key) ||
            !value ||
            typeof value !== 'object' ||
            Array.isArray(value)
          )
            throw new TypeError(`CSS 属性条件 ${key} 需要状态映射对象。`);
          for (const [state, style] of Object.entries(value)) {
            const attribute = selectorParser.attribute({
              attribute: key,
              operator: '=',
              value: state,
              quoteMark: '"',
              raws: {},
            });
            attribute.setValue(state, { quoteMark: '"' });
            for (const next of selectors(context, `&${attribute}`))
              visit(style, next, resolveTheme, origin);
          }
        } else if (/^[:[&]/.test(key)) {
          validateFragment(key);
          for (const next of selectors(context, key)) visit(value, next, resolveTheme, origin);
        } else {
          if (!/^(?:[a-zA-Z][a-zA-Z\d]*|--[\w-]+)$/.test(key))
            throw new TypeError(`无效 CSS 属性：${key}；普通属性使用 camelCase。`);
          if (key.startsWith('--zv-'))
            throw new TypeError('--zv-* 由 CSS 运行时管理，请使用自己的变量前缀。');
          if (
            value !== null &&
            typeof value !== 'string' &&
            typeof value !== 'number' &&
            !isBinding(value) &&
            !isAnimation(value) &&
            !isThemeReference(value)
          )
            throw new TypeError(`CSS 属性 ${key} 需要字符串或数字；Vue Ref 请读取 .value。`);
          let resolved = value;
          if (
            resolveTheme &&
            !key.startsWith('--') &&
            typeof value === 'string' &&
            value.startsWith('_')
          )
            resolved = resolveTheme(key, value);
          else if (
            (!dynamic || dynamic.has(key)) &&
            (typeof value === 'string' || typeof value === 'number')
          )
            resolved = valueBinding(value);
          entries.push({
            ...context,
            selector: stateSelector(context.selector),
            property: key,
            value: resolved,
            ...(resolveTheme && !key.startsWith('--') ? { resolveTheme } : {}),
            ...(origin ? { origin } : {}),
          });
        }
      }
    } finally {
      visiting.delete(source);
    }
  };
  visit(input, root);
  // 此处稳定的是本次展开的快照，不缓存输入对象或函数的下一次求值。
  return markStableParts({ [CLASS]: [{ declarations: entries }] });
}
