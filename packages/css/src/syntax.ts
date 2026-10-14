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
    if (type === TokenType.EOF) {
      if (stack.length) fail();
      return;
    }
    if (
      type === TokenType.OpenCurly ||
      type === TokenType.CloseCurly ||
      (type === TokenType.Semicolon && !stack.length)
    )
      fail();
    if (type === TokenType.Function || type === TokenType.OpenParen)
      stack.push(TokenType.CloseParen);
    else if (type === TokenType.OpenSquare) stack.push(TokenType.CloseSquare);
    else if (
      (type === TokenType.CloseParen || type === TokenType.CloseSquare) &&
      stack.pop() !== type
    )
      fail();
  }
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
  const ast = selectorParser().astSync(input);
  ast.walkNesting((node) => {
    node.replaceWith(selectorParser.className({ value: className }));
  });
  return ast.toString();
}
