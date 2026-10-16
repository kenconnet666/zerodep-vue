import type { NodePath } from '@babel/core';
import * as t from '@babel/types';
import { isHTMLTag, isSVGTag } from '@vue/shared';
import { coreModule, cssCallKind, importedName, propertyName, runtimeImports } from './bindings.ts';

/** 在组件参数重写前捕获 CSS 叶子；表达式仍在原位置求值，不能改成隐式 getter。 */
export function transformObjects(program: NodePath<t.Program>): void {
  const helper = runtimeImports(program);
  const input = (node: t.Expression): t.Expression => {
    if (t.isObjectExpression(node)) {
      let complete = true;
      const dynamic: t.StringLiteral[] = [];
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
        else if (
          key &&
          !(
            t.isStringLiteral(property.value) ||
            t.isNumericLiteral(property.value) ||
            t.isNullLiteral(property.value) ||
            t.isBooleanLiteral(property.value) ||
            (t.isTemplateLiteral(property.value) && property.value.expressions.length === 0)
          )
        )
          dynamic.push(t.stringLiteral(key));
      }
      // 不完整对象也保留来源身份，但所有值保守绑定；不读取 spread/getter 或修改原对象。
      return t.inherits(
        t.callExpression(helper('staticCss'), [
          node,
          ...(!complete ? [t.nullLiteral()] : dynamic.length ? [t.arrayExpression(dynamic)] : []),
        ]),
        node,
      );
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
    CallExpression(path) {
      // 真实主题工厂与 JSX 字面量共享元数据分析；同名业务函数不接管。
      if (cssCallKind(path.scope, path.node.callee) === 'css') {
        const source = path.node.arguments[0];
        if (t.isExpression(source)) path.node.arguments[0] = input(source);
      }
    },
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
  // 包装对象后重新登记参数引用，组件参数改写继续沿当前 AST 读取普通字段值。
  program.scope.crawl();
}
