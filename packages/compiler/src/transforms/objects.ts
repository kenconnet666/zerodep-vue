import type { NodePath } from '@babel/core';
import * as t from '@babel/types';
import { isHTMLTag, isSVGTag } from '@vue/shared';
import { coreModule, importedName, propertyName, runtimeImports } from './bindings.ts';

/** 在组件参数重写前捕获 CSS 叶子；表达式仍在原位置求值，不能改成隐式 getter。 */
export function transformObjects(program: NodePath<t.Program>): void {
  const helper = runtimeImports(program);
  const input = (node: t.Expression): t.Expression => {
    if (t.isObjectExpression(node)) {
      let complete = true;
      for (const property of node.properties) {
        if (!t.isObjectProperty(property) || property.computed || !t.isExpression(property.value)) {
          complete = false;
          continue;
        }
        const key = propertyName(property);
        if (key && /^(aria|data)-/.test(key)) {
          if (!t.isObjectExpression(property.value)) {
            complete = false;
            continue;
          }
          for (const state of property.value.properties) {
            if (t.isObjectProperty(state) && t.isExpression(state.value))
              state.value = input(state.value);
            else complete = false;
          }
        } else if (key && /^[:[&@]/.test(key)) property.value = input(property.value);
        else if (!t.isLiteral(property.value)) {
          property.shorthand = false;
          property.value = t.callExpression(helper('valueBinding'), [property.value]);
        }
      }
      return complete ? t.callExpression(helper('staticCss'), [node]) : node;
    }
    if (t.isArrayExpression(node)) {
      node.elements = node.elements.map((item) => (t.isExpression(item) ? input(item) : item));
    } else if (t.isConditionalExpression(node)) {
      node.consequent = input(node.consequent);
      node.alternate = input(node.alternate);
    } else if (t.isLogicalExpression(node)) {
      node.left = input(node.left);
      node.right = input(node.right);
    } else if (t.isArrowFunctionExpression(node) && t.isExpression(node.body))
      node.body = input(node.body);
    else if (
      t.isTSAsExpression(node) ||
      t.isTSSatisfiesExpression(node) ||
      t.isTSNonNullExpression(node)
    )
      node.expression = input(node.expression);
    return node;
  };
  program.traverse({
    JSXElement(path) {
      const name = path.node.openingElement.name;
      const expression = (
        name: t.JSXElement['openingElement']['name'],
      ): t.Expression | undefined => {
        if (t.isJSXIdentifier(name)) return t.identifier(name.name);
        if (t.isJSXMemberExpression(name)) {
          const object = expression(name.object);
          if (object) return t.memberExpression(object, t.identifier(name.property.name));
        }
      };
      const reference = expression(name);
      const imported = reference && importedName(path.scope, reference, coreModule);
      const tag = imported?.startsWith('_') ? imported.slice(1) : undefined;
      if (
        tag &&
        (isHTMLTag(tag) ||
          isSVGTag(tag) ||
          tag === 'noindex' ||
          tag === 'keygen' ||
          tag === 'webview')
      ) {
        path.node.openingElement.name = t.jsxIdentifier(tag);
        if (path.node.closingElement) path.node.closingElement.name = t.jsxIdentifier(tag);
      }
    },
    JSXAttribute(path) {
      if (
        t.isJSXIdentifier(path.node.name, { name: 'css' }) &&
        t.isJSXExpressionContainer(path.node.value) &&
        t.isExpression(path.node.value.expression)
      )
        path.node.value.expression = input(path.node.value.expression);
    },
  });
  // 替换叶子后重新登记参数引用；否则组件解构重写会沿旧 NodePath 丢弃 valueBinding。
  program.scope.crawl();
}
