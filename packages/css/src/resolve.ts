import unitless from '@emotion/unitless';
import { TokenType, tokenizer } from '@csstools/css-tokenizer';
import { normalizeClass } from 'vue';
import { compose } from './core.ts';
import { CLASS, isCssClass } from './types.ts';
import type { ClassPart, ClassValue, Declaration } from './types.ts';
import { BINDING, FALLBACK, TEMPLATE, isBinding, isFallback, isTemplate } from './values.ts';
import type { CssBinding, Scalar } from './values.ts';
import { scopedSelector, validateFragment } from './syntax.ts';

const wide = new Set(['initial', 'inherit', 'unset', 'revert', 'revert-layer']);
type Part = string | { variable: number };
interface Prepared {
  selector: string;
  conditions: readonly string[];
  property: string;
  parts: Part[];
}

export interface ResolvedClass {
  /** 包括 Vue 普通类名以及本次确定组合的结果类。 */
  className: string;
  /** 自有规则类，空声明时为空字符串。 */
  ruleName: string;
  cssText: string;
  /** 元素级变量，值变化不参与普通规则缓存键。 */
  variables: Record<string, string>;
  hasCss: boolean;
  dynamic: boolean;
  /** 供开发检查使用的当前有效声明，不保存跨更新历史。 */
  declarations: readonly Declaration[];
}

/** 确定的 UTF-16 FNV-1a；登记器仍需检查同名而内容不同的碰撞。 */
export function hash(value: string): string {
  let result = 14695981039346656037n;
  for (let index = 0; index < value.length; index++)
    result = ((result ^ BigInt(value.charCodeAt(index))) * 1099511628211n) & 0xffffffffffffffffn;
  return result.toString(36);
}

function cssWide(value: string): string | undefined {
  const tokens = tokenizer({ css: value });
  let keyword: string | undefined;
  for (;;) {
    const token = tokens.nextToken();
    if (token[0] === TokenType.EOF) return keyword;
    if (token[0] === TokenType.Whitespace || token[0] === TokenType.Comment) continue;
    if (token[0] !== TokenType.Ident || keyword) return;
    const text = token[4].value.toLowerCase();
    if (!wide.has(text)) return;
    keyword = text;
  }
}

export function propertyName(property: string): string {
  if (property.startsWith('--')) return property;
  return property.replace(/[A-Z]/g, (letter) => '-' + letter.toLowerCase()).replace(/^ms-/, '-ms-');
}

function scalar(value: unknown, property?: string): string {
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new Error(`CSS ${property ?? '片段'} 不能使用非有限数字。`);
    const normalized = property?.replace(/^(?:Webkit|Moz|ms|O)([A-Z])/, (_match, first: string) =>
      first.toLowerCase(),
    );
    return value === 0 ||
      !property ||
      property.startsWith('--') ||
      unitless[property] ||
      (normalized && unitless[normalized])
      ? String(value)
      : value + 'px';
  }
  if (typeof value !== 'string')
    throw new Error(`CSS ${property ?? '片段'} 需要字符串或数字；Vue Ref 请读取 .value。`);
  validateFragment(value);
  return value;
}

/** 只在当前消费中求值；同一绑定被多个声明引用时共享一次读取，不共享元素变量。 */
export function resolveClass(
  value: ClassValue,
  reads = new Map<CssBinding<unknown>, unknown>(),
): ResolvedClass {
  const parts: ClassPart[] = [];
  let hasCss = false;
  const flatten = (item: ClassValue): void => {
    if (item == null || item === false) return;
    if (isCssClass(item)) {
      hasCss = true;
      parts.push(...item[CLASS]);
      return;
    }
    if (Array.isArray(item)) {
      for (const value of item) flatten(value);
      return;
    }
    const name = normalizeClass(item);
    if (name) parts.push(name);
  };
  flatten(value);
  const composed = compose(parts);
  const variables: string[] = [];
  const prepared: Prepared[] = [];
  let dynamic = false;
  const read = (input: CssBinding<unknown>): unknown => {
    dynamic = true;
    if (!reads.has(input)) reads.set(input, input[BINDING]());
    return reads.get(input);
  };
  for (const declaration of composed.declarations) {
    const { value: input, property } = declaration;
    if (input === null) continue;
    let values: Part[][];
    if (isBinding(input)) {
      const current = read(input);
      if (current == null) continue;
      const text = scalar(current, property);
      const keyword = cssWide(text);
      values = keyword ? [[keyword]] : [[{ variable: variables.push(text) - 1 }]];
    } else if (isTemplate(input)) {
      const evaluated = input[TEMPLATE].map((part) => (isBinding(part) ? read(part) : part));
      if (evaluated.some((part) => part == null)) continue;
      // 静态模板片段可以是不完整的括号前缀；单个绑定值与最终声明才需要完整语法。
      const strings = evaluated.map((part, index) =>
        isBinding(input[TEMPLATE][index]) ? scalar(part) : String(part),
      );
      const keyword = cssWide(strings.join(''));
      if (keyword) values = [[keyword]];
      else {
        values = [
          input[TEMPLATE].map((part, index) => {
            const text = strings[index]!;
            if (!isBinding(part)) return text;
            if (cssWide(text))
              throw new Error(`CSS ${property} 的复合值不能把 CSS-wide keyword 当作普通片段。`);
            return { variable: variables.push(text) - 1 };
          }),
        ];
        validateFragment(strings.join(''));
      }
    } else if (isFallback(input))
      values = [...input[FALLBACK]].reverse().map((item) => [scalar(item, property)]);
    else values = [[scalar(input, property)]];
    for (const parts of values)
      prepared.push({
        selector: declaration.selector,
        conditions: declaration.conditions,
        property: propertyName(property),
        parts,
      });
  }
  const ruleName = prepared.length ? 'zv-' + hash(JSON.stringify(prepared)) : '';
  const cssVariables = Object.fromEntries(
    variables.map((value, index) => [`--${ruleName}-${index}`, value]),
  );
  const blocks: { selector: string; conditions: readonly string[]; text: string }[] = [];
  for (const entry of prepared) {
    const content = entry.parts
      .map((part) => (typeof part === 'string' ? part : `var(--${ruleName}-${part.variable})`))
      .join('');
    const selector = scopedSelector(entry.selector, ruleName);
    const previous = blocks.at(-1);
    if (
      previous?.selector === selector &&
      JSON.stringify(previous.conditions) === JSON.stringify(entry.conditions)
    )
      previous.text += `${entry.property}:${content};`;
    else
      blocks.push({
        selector,
        conditions: entry.conditions,
        text: `${entry.property}:${content};`,
      });
  }
  const cssText = blocks
    .map(({ selector, conditions, text }) => {
      let block = `${selector}{${text}}`;
      for (const condition of [...conditions].reverse()) block = `${condition}{${block}}`;
      return block;
    })
    .join('');
  return {
    className: normalizeClass([...composed.classes, ruleName]),
    ruleName,
    cssText,
    variables: cssVariables,
    hasCss,
    dynamic,
    declarations: composed.declarations,
  };
}
