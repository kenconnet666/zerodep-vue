import unitless from '@emotion/unitless';
import { TokenType, tokenizer } from '@csstools/css-tokenizer';
import { normalizeClass } from 'vue';
import { compose } from './composition.ts';
import { CLASS, hasStableParts, isCssClass } from './style-value.ts';
import type { ClassPart, ClassValue, CssClass, Declaration } from './style-value.ts';
import { BINDING, TEMPLATE, isBinding, isTemplate } from './bindings.ts';
import type { CssBinding, CssTemplate, Scalar } from './bindings.ts';
import { declarationValue, inheritsVariables, scopedSelector, validateFragment } from './syntax.ts';
import { THEME, isThemeReference } from './tokens.ts';
import type { ThemeReference } from './tokens.ts';
import { ANIMATION, hasStableAnimation, isAnimation } from './animation-token.ts';
import type { CssAnimation } from './animation-token.ts';
import type { CssRule } from './host.ts';
import { inspectionHooks } from './inspection-hooks.ts';

const wide = new Set(['initial', 'inherit', 'unset', 'revert', 'revert-layer']);
const staticResults = new WeakMap<CssClass, ResolvedClass>();
type PreparedValue = string | { variable: number };
interface PreparedDeclaration {
  selector: string;
  conditions: readonly string[];
  property: string;
  // 完整 CSS 值只占一个位置；保留既有序列化形状，使本轮整理不改变规则哈希。
  parts: readonly [PreparedValue];
  important?: true;
}
interface EvaluatedTemplate {
  values: unknown[];
  text?: string;
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
    switch (token[0]) {
      case TokenType.EOF:
        return keyword;
      case TokenType.Whitespace:
      case TokenType.Comment:
        continue;
      case TokenType.Ident: {
        if (keyword) return;
        const text = token[4].value.toLowerCase();
        if (!wide.has(text)) return;
        keyword = text;
        break;
      }
      default:
        return;
    }
  }
}

export function propertyName(property: string): string {
  if (property.startsWith('--')) return property;
  return property.replace(/[A-Z]/g, (letter) => '-' + letter.toLowerCase()).replace(/^ms-/, '-ms-');
}

function scalar(value: unknown, property?: string, checkSyntax = true): string {
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
  if (checkSyntax) validateFragment(value);
  return value;
}

/** 只在当前消费中求值；同一绑定被多个声明引用时共享一次读取，不共享元素变量。 */
export function resolveClass(
  value: ClassValue,
  reads = new Map<object, unknown>(),
  options: { namespace?: string; literal?: boolean; keyframe?: boolean } = {},
): ResolvedClass {
  const parts: ClassPart[] = [];
  const observer = inspectionHooks();
  const cacheable =
    !observer &&
    !options.namespace &&
    !options.literal &&
    !options.keyframe &&
    isCssClass(value) &&
    hasStableParts(value);
  if (cacheable) {
    const cached = staticResults.get(value);
    if (cached) return cached;
  }
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
  const prepared: PreparedDeclaration[] = [];
  let dynamic = false;
  const resources: CssRule[] = [];
  const resourceVariables: Record<string, string> = {};
  const animations = new Map<CssAnimation, { bound?: string; literal?: string }>();
  let animationIndex = 0;
  const animation = (value: CssAnimation, property: string, literal: boolean): string => {
    if (!/^(?:-[a-z]+-)?animation(?:-name)?$/.test(propertyName(property)))
      throw new Error('动画引用只能用于 animation 或 animationName。');
    dynamic ||= !hasStableAnimation(value);
    const mode = literal ? 'literal' : 'bound';
    const existing = animations.get(value) ?? {};
    if (existing[mode]) return existing[mode]!;
    const ordinal = animationIndex++;
    const body = value[ANIMATION].map((frame) => {
      const frameStyle = resolveClass(frame.style, reads, {
        namespace: `${options.namespace ?? ''}animation:${ordinal}:${frame.at}`,
        keyframe: true,
        ...(literal ? { literal: true } : {}),
      });
      observedFrames?.push(frameStyle);
      dynamic ||= frameStyle.dynamic;
      Object.assign(resourceVariables, frameStyle.variables);
      const content = frameStyle.cssText
        ? frameStyle.cssText.slice(frameStyle.cssText.indexOf('{') + 1, -1)
        : '';
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
        reads.set(input, value);
      } finally {
        evaluating.delete(input);
      }
    }
    return reads.get(input);
  };
  const valueOf = (input: unknown, declaration: Declaration, fragment = false): unknown => {
    if (isThemeReference(input)) return read(input);
    if (!isBinding(input)) return input;
    const current = read(input);
    return !fragment &&
      typeof current === 'string' &&
      current.startsWith('_') &&
      declaration.resolveTheme
      ? read(declaration.resolveTheme(declaration.property, current))
      : current;
  };
  const templates = new Map<Declaration, EvaluatedTemplate | null | undefined>();
  const templateOf = (input: CssTemplate, declaration: Declaration) => {
    if (templates.has(declaration)) return templates.get(declaration);
    const values: unknown[] = [];
    for (const part of input[TEMPLATE]) {
      const value = valueOf(part, declaration, true);
      if (value === undefined) {
        templates.set(declaration, undefined);
        return undefined;
      }
      values.push(value);
    }
    if (values.some((value) => value === null)) {
      templates.set(declaration, null);
      return null;
    }
    let result: EvaluatedTemplate = { values };
    if (!values.some(isAnimation)) {
      let text = values.map((value) => scalar(value, undefined, false)).join('');
      // 主题名只识别完整属性值；引号或 URL 内的 _ 文本仍然是普通内容。
      if (text.startsWith('_') && declaration.resolveTheme) {
        const value = read(declaration.resolveTheme(declaration.property, text));
        if (value == null) {
          templates.set(declaration, value);
          return value;
        }
        text = scalar(value, declaration.property, false);
      }
      result = { values, text };
    }
    templates.set(declaration, result);
    return result;
  };
  const composed = compose(parts, (declaration) => {
    const input = declaration.value;
    return isTemplate(input)
      ? templateOf(input, declaration) === undefined
      : valueOf(input, declaration) === undefined;
  });
  const inheritance = new Map<string, boolean>();
  for (const declaration of composed.declarations) {
    const { value: input, property } = declaration;
    if (!inheritance.has(declaration.target))
      inheritance.set(declaration.target, inheritsVariables(declaration.target));
    const literal = options.literal || !inheritance.get(declaration.target);
    if (input === null) continue;
    let text: string;
    let bound = false;
    if (isBinding(input) || isThemeReference(input)) {
      const current = valueOf(input, declaration);
      if (current == null) continue;
      text = renderValue(current, property, literal);
      bound = true;
    } else if (isTemplate(input)) {
      const evaluated = templateOf(input, declaration);
      if (!evaluated) continue;
      // CSS var 替换的是 token，不是字符串；单位、引号和 URL 必须先组成完整值。
      text =
        evaluated.text ??
        evaluated.values
          .map((part, index) => {
            if (isAnimation(part)) return animation(part, property, literal);
            const original = input[TEMPLATE][index];
            // 静态片段可以是不完整的括号前缀；完整声明会在拼接后统一检查。
            if (isBinding(original) || isThemeReference(original))
              return scalar(part, undefined, false);
            return String(part);
          })
          .join('');
      validateFragment(text);
      bound = input[TEMPLATE].some((part) => isBinding(part) || isThemeReference(part));
    } else text = renderValue(input, property, literal);
    const parsed = declarationValue(text);
    if (options.keyframe && parsed.important) throw new Error('关键帧不能使用 !important。');
    const keyword = cssWide(parsed.value);
    const parts: readonly [PreparedValue] =
      bound && !literal && !keyword
        ? [{ variable: variables.push(parsed.value) - 1 }]
        : [keyword ?? parsed.value];
    prepared.push({
      selector: declaration.selector,
      conditions: declaration.conditions,
      property: propertyName(property),
      parts,
      ...(parsed.important ? { important: true } : {}),
    });
    observedValues?.set(declaration, [text]);
  }
  const ruleName = prepared.length
    ? 'zv-' + hash((options.namespace ?? '') + JSON.stringify(prepared))
    : '';
  const cssVariables = Object.fromEntries(
    variables.map((value, index) => [`--${ruleName}-${index}`, value]),
  );
  const blocks: { selector: string; conditions: readonly string[]; text: string }[] = [];
  for (const entry of prepared) {
    const [value] = entry.parts;
    const text = typeof value === 'string' ? value : `var(--${ruleName}-${value.variable})`;
    const content = text + (entry.important ? ' !important' : '');
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
  if (cacheable && !dynamic) {
    Object.freeze(result.variables);
    result.resources.forEach(Object.freeze);
    Object.freeze(result.resources);
    Object.freeze(result.declarations);
    Object.freeze(result);
    staticResults.set(value, result);
  }
  return result;
}
