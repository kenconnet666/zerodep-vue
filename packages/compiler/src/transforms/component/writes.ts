import type { NodePath, Scope } from '@babel/core';
import * as t from '@babel/types';
import { propertyName } from '../bindings.ts';

/** 标记直接 .value 编辑与 v-model 的 prop，便于接线时诊断 Vue 可识别的只读来源。 */
export function writableModels(
  fn: NodePath<t.ArrowFunctionExpression | t.FunctionExpression>,
): string[] {
  const first = fn.node.params[0];
  const aliases = new Map<string, string>();
  if (t.isObjectPattern(first))
    for (const property of first.properties) {
      if (!t.isObjectProperty(property)) continue;
      const name = propertyName(property);
      const local = t.isAssignmentPattern(property.value) ? property.value.left : property.value;
      if (name && t.isIdentifier(local)) aliases.set(local.name, name);
    }
  const result = new Set<string>();
  const inspect = (node: t.Node | null | undefined, scope: Scope) => {
    if (!node) return;
    switch (node.type) {
      case 'ObjectPattern':
        for (const item of node.properties)
          inspect(t.isRestElement(item) ? item.argument : item.value, scope);
        return;
      case 'ArrayPattern':
        for (const item of node.elements) inspect(item, scope);
        return;
      case 'AssignmentPattern':
        inspect(node.left, scope);
        return;
      case 'RestElement':
        inspect(node.argument, scope);
        return;
      case 'MemberExpression':
        if (propertyName(node) !== 'value') return;
        break;
      default:
        return;
    }
    const object = node.object;
    if (
      t.isIdentifier(object) &&
      aliases.has(object.name) &&
      scope.getBinding(object.name) === fn.scope.getBinding(object.name)
    )
      result.add(aliases.get(object.name)!);
    if (
      t.isMemberExpression(object) &&
      t.isIdentifier(first) &&
      t.isIdentifier(object.object, { name: first.name }) &&
      scope.getBinding(first.name) === fn.scope.getBinding(first.name)
    ) {
      const name = propertyName(object);
      if (name) result.add(name);
    }
  };
  fn.traverse({
    AssignmentExpression(path) {
      inspect(path.node.left, path.scope);
    },
    UpdateExpression(path) {
      inspect(path.node.argument, path.scope);
    },
    JSXAttribute(path) {
      const name = path.node.name;
      const directive = t.isJSXIdentifier(name) ? name.name : name.namespace.name;
      if (!/^v-model(?:s|_|$)/.test(directive) || !t.isJSXExpressionContainer(path.node.value))
        return;
      const expression = path.node.value.expression;
      if (t.isArrayExpression(expression)) {
        if (/^v-models(?:_|$)/.test(directive)) {
          for (const element of expression.elements)
            inspect(t.isArrayExpression(element) ? element.elements[0] : element, path.scope);
        } else inspect(expression.elements[0], path.scope);
      } else inspect(expression, path.scope);
    },
  });
  return [...result];
}
