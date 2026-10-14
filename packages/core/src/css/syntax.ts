import { TokenType, tokenizer } from '@csstools/css-tokenizer';
import selectorParser from 'postcss-selector-parser';

/** 只校验声明/条件的结构边界，CSS 属性的实际支持与计算仍由浏览器负责。 */
export function validateFragment(value: string): void {
  const fail = (): never => {
    throw new Error(`CSS 值或条件包含不完整的语法或声明边界：${value}`);
  };
  const tokens = tokenizer({ css: value }, { onParseError: fail });
  const stack: TokenType[] = [];
  for (;;) {
    const type = tokens.nextToken()[0];
    switch (type) {
      case TokenType.EOF:
        if (stack.length) fail();
        return;
      case TokenType.OpenCurly:
      case TokenType.CloseCurly:
        fail();
        break;
      case TokenType.Semicolon:
        if (!stack.length) fail();
        break;
      case TokenType.Function:
      case TokenType.OpenParen:
        stack.push(TokenType.CloseParen);
        break;
      case TokenType.OpenSquare:
        stack.push(TokenType.CloseSquare);
        break;
      case TokenType.CloseParen:
      case TokenType.CloseSquare:
        if (stack.pop() !== type) fail();
        break;
    }
  }
}

/** important 是声明优先级；只识别末尾顶层 token，不误读字符串、函数或注释。 */
export function declarationValue(text: string): { value: string; important: boolean } {
  if (!text.includes('!')) return { value: text, important: false };
  const scanner = tokenizer({ css: text });
  const tail: ReturnType<typeof scanner.nextToken>[] = [];
  let depth = 0;
  let count = 0;
  for (;;) {
    const token = scanner.nextToken();
    const type = token[0];
    if (type === TokenType.EOF) break;
    if (type === TokenType.Whitespace || type === TokenType.Comment) continue;
    switch (type) {
      case TokenType.Function:
      case TokenType.OpenParen:
      case TokenType.OpenSquare:
        depth++;
        break;
      case TokenType.CloseParen:
      case TokenType.CloseSquare:
        depth--;
        break;
    }
    if (depth !== 0) continue;
    count++;
    tail.push(token);
    if (tail.length > 2) tail.shift();
  }
  const [bang, name] = tail;
  if (
    bang?.[0] !== TokenType.Delim ||
    bang[4].value !== '!' ||
    name?.[0] !== TokenType.Ident ||
    name[4].value.toLowerCase() !== 'important'
  ) {
    return { value: text, important: false };
  }
  if (count < 3) throw new Error('CSS !important 前需要属性值。');
  return { value: text.slice(0, bang[2]).trimEnd(), important: true };
}

export interface SelectorContext {
  selector: string;
  target: string;
  conditions: readonly string[];
}

/** 使用选择器 AST 展开 &，不会替换字符串/属性值中的同名字符。 */
export function selectors(parent: SelectorContext, input: string): SelectorContext[] {
  const parsed = selectorParser().astSync(input);
  return parsed.nodes.map((item) => {
    let part = item.toString().trim();
    let hasNesting = false;
    item.walkNesting(() => {
      hasNesting = true;
    });
    if (!hasNesting) part = /^[:[]/.test(part) ? `&${part}` : `& ${part}`;
    const ast = selectorParser().astSync(part).nodes[0]!;
    if (!ast.nodes.some((node) => node.type === 'nesting'))
      throw new Error('局部选择器需要直接的 & 作用域；全局规则使用 globalCss。');
    const lastCombinator = ast.nodes.findLastIndex((node) => node.type === 'combinator');
    const tail = ast.nodes.slice(lastCombinator + 1);
    const sameTarget =
      tail.some((node) => node.type === 'nesting') &&
      !tail.some((node) => node.type === 'pseudo' && node.value.startsWith('::'));
    const base = selectorParser().astSync(parent.selector).nodes[0]!;
    ast.walkNesting((node) => {
      node.replaceWith(...base.nodes.map((child) => child.clone()));
    });
    let target = parent.target;
    if (!sameTarget) {
      const identity = ast.clone();
      identity.walkPseudos((node) => {
        if (!node.value.startsWith('::')) node.remove();
      });
      target = identity.toString();
    }
    return { selector: ast.toString(), target, conditions: parent.conditions };
  });
}

export function scopedSelector(input: string, className: string): string {
  if (input === '&') return '.' + className;
  if (!input.includes('&')) return input;
  const ast = selectorParser().astSync(input);
  ast.walkNesting((node) => {
    node.replaceWith(selectorParser.className({ value: className }));
  });
  return ast.toString();
}

/** 元素变量只能供自身、伪元素和后代继承；根的兄弟/外部目标需输出当前字面值。 */
export function inheritsVariables(target: string): boolean {
  if (target === '&') return true;
  const nodes = selectorParser().astSync(target).nodes[0]?.nodes;
  if (!nodes) return false;
  const anchor = nodes.findLastIndex((node) => node.type === 'nesting');
  if (anchor < 0) return false;
  let descendant = false;
  for (const node of nodes.slice(anchor + 1)) {
    if (node.type !== 'combinator') continue;
    const combinator = node.value.trim();
    if (combinator === '' || combinator === '>') descendant = true;
    else if (combinator === '||' || !descendant) return false;
  }
  return true;
}
