import unitless from '@emotion/unitless';
import { TokenType, tokenizer } from '@csstools/css-tokenizer';
import { normalizeClass } from 'vue';
import { compose } from './composition.ts';
import { CLASS, isCssClass } from './types.ts';
import type { ClassPart, ClassValue, Declaration } from './types.ts';
import { BINDING, TEMPLATE, isBinding, isTemplate } from './bindings.ts';
import type { CssBinding, Scalar } from './bindings.ts';
import { inheritsVariables, scopedSelector, validateFragment } from './syntax.ts';
import { KEYWORD, THEME, isKeyword, isThemeReference } from './tokens.ts';
import type { ThemeReference } from './tokens.ts';
import { ANIMATION, isAnimation } from './animation-token.ts';
import type { CssAnimation } from './animation-token.ts';
import type { CssRule } from './host.ts';
import { inspectionHooks } from './inspection-hooks.ts';

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
  /** 同一消费拥有的动画等附属规则，与主规则一同取得和释放租约。 */
  resources: readonly CssRule[];
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
  if (isKeyword(value)) value = value[KEYWORD].value;
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new Error(`CSS ${property ?? '片段'} 不能使用非有限数字。`);
    const normalized = property?.replace(
      /^(?:Webkit|Moz|ms|O|Khtml)([A-Z])/,
      (_match, first: string) => first.toLowerCase(),
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
  reads = new Map<object, unknown>(),
  options: { namespace?: string; literal?: boolean } = {},
): ResolvedClass {
  const parts: ClassPart[] = [];
  const observer = inspectionHooks();
  const observedValues = observer ? new Map<Declaration, readonly string[]>() : undefined;
  const observedFrames: ResolvedClass[] | undefined = observer ? [] : undefined;
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
  const variables: string[] = [];
  const prepared: Prepared[] = [];
  let dynamic = false;
  const resources: CssRule[] = [];
  const resourceVariables: Record<string, string> = {};
  const animations = new Map<CssAnimation, { bound?: string; literal?: string }>();
  let animationIndex = 0;
  const animation = (value: CssAnimation, property: string, literal: boolean): string => {
    if (!/^(?:-[a-z]+-)?animation(?:-name)?$/.test(propertyName(property)))
      throw new Error('动画引用只能用于 animation 或 animationName。');
    const mode = literal ? 'literal' : 'bound';
    const existing = animations.get(value) ?? {};
    if (existing[mode]) return existing[mode]!;
    const ordinal = animationIndex++;
    const body = value[ANIMATION].map((frame) => {
      const frameStyle = resolveClass(frame.style, reads, {
        namespace: `${options.namespace ?? ''}animation:${ordinal}:${frame.at}`,
        ...(literal ? { literal: true } : {}),
      });
      observedFrames?.push(frameStyle);
      dynamic ||= frameStyle.dynamic;
      Object.assign(resourceVariables, frameStyle.variables);
      const content = frameStyle.cssText
        ? frameStyle.cssText.slice(frameStyle.cssText.indexOf('{') + 1, -1)
        : '';
      if (/!\s*important/i.test(content)) throw new Error('关键帧不能使用 !important。');
      return `${frame.at}{${content}}`;
    }).join('');
    const name = 'zva-' + hash(body);
    existing[mode] = name;
    animations.set(value, existing);
    resources.push({ name, cssText: `@keyframes ${name}{${body}}` });
    return name;
  };
  const renderValue = (value: unknown, property?: string, literal = false): string =>
    isAnimation(value) ? animation(value, property ?? '', literal) : scalar(value, property);
  const evaluating = new Set<object>();
  const read = (input: CssBinding<unknown> | ThemeReference): unknown => {
    dynamic = true;
    if (!reads.has(input)) {
      if (evaluating.has(input)) throw new Error('CSS 绑定或主题引用包含循环。');
      evaluating.add(input);
      try {
        let value = isThemeReference(input) ? input[THEME].read() : input[BINDING]();
        if (isThemeReference(value) || isBinding(value)) value = read(value);
        reads.set(input, isKeyword(value) ? value[KEYWORD].value : value);
      } finally {
        evaluating.delete(input);
      }
    }
    return reads.get(input);
  };
  const valueOf = (input: unknown, declaration: Declaration): unknown => {
    if (isThemeReference(input)) return read(input);
    if (!isBinding(input)) return input;
    const current = read(input);
    return typeof current === 'string' && current.startsWith('_') && declaration.resolveTheme
      ? read(declaration.resolveTheme(declaration.property, current))
      : current;
  };
  const composed = compose(parts, (declaration) => {
    const input = declaration.value;
    return isTemplate(input)
      ? input[TEMPLATE].some((part) => valueOf(part, declaration) === undefined)
      : valueOf(input, declaration) === undefined;
  });
  const inheritance = new Map<string, boolean>();
  for (const declaration of composed.declarations) {
    const { value: input, property } = declaration;
    if (!inheritance.has(declaration.target))
      inheritance.set(declaration.target, inheritsVariables(declaration.target));
    const literal = options.literal || !inheritance.get(declaration.target);
    if (input === null) continue;
    let parts: Part[];
    if (isBinding(input) || isThemeReference(input)) {
      const current = valueOf(input, declaration);
      if (current == null) continue;
      const text = renderValue(current, property, literal);
      const keyword = cssWide(text);
      parts = keyword || literal ? [keyword ?? text] : [{ variable: variables.push(text) - 1 }];
    } else if (isTemplate(input)) {
      const evaluated = input[TEMPLATE].map((part) => valueOf(part, declaration));
      if (evaluated.some((part) => part == null)) continue;
      // 静态模板片段可以是不完整的括号前缀；单个绑定值与最终声明才需要完整语法。
      const strings = evaluated.map((part, index) =>
        isBinding(input[TEMPLATE][index]) || isThemeReference(input[TEMPLATE][index])
          ? isAnimation(part)
            ? animation(part, property, literal)
            : renderValue(part)
          : isAnimation(part)
            ? animation(part, property, literal)
            : String(part),
      );
      const keyword = cssWide(strings.join(''));
      if (keyword) parts = [keyword];
      else {
        parts = input[TEMPLATE].map((part, index) => {
          const text = strings[index]!;
          if (!isBinding(part) && !isThemeReference(part)) return text;
          if (cssWide(text))
            throw new Error(`CSS ${property} 的复合值不能把 CSS-wide keyword 当作普通片段。`);
          return literal ? text : { variable: variables.push(text) - 1 };
        });
        validateFragment(strings.join(''));
      }
    } else parts = [renderValue(input, property, literal)];
    prepared.push({
      selector: declaration.selector,
      conditions: declaration.conditions,
      property: propertyName(property),
      parts,
    });
    observedValues?.set(declaration, [
      parts.map((part) => (typeof part === 'string' ? part : variables[part.variable])).join(''),
    ]);
  }
  const ruleName = prepared.length
    ? 'zv-' + hash((options.namespace ?? '') + JSON.stringify(prepared))
    : '';
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
  const result: ResolvedClass = {
    className: normalizeClass([...composed.classes, ruleName]),
    ruleName,
    cssText,
    resources,
    variables: { ...resourceVariables, ...cssVariables },
    hasCss,
    dynamic,
    declarations: composed.declarations,
  };
  if (observer) observer.resolved(result, parts, observedValues!, reads, observedFrames!);
  return result;
}
