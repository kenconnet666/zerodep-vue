import type { Scope } from '@babel/core';
import * as t from '@babel/types';

export const coreModule = '@zerodep-vue/core';

/** 仅接受静态属性名，计算表达式留给正常 JavaScript 语义。 */
export function propertyName(
  node: t.MemberExpression | t.ObjectProperty | t.ObjectMethod,
): string | undefined {
  const value = 'property' in node ? node.property : node.key;
  if (!node.computed && t.isIdentifier(value)) return value.name;
  if (t.isStringLiteral(value)) return value.value;
}

/** 按作用域中的真实导入识别别名和命名空间，局部同名变量不会被接管。 */
export function importedName(scope: Scope, node: t.Node, source: string): string | undefined {
  const local = t.isIdentifier(node)
    ? node
    : t.isMemberExpression(node) && t.isIdentifier(node.object)
      ? node.object
      : undefined;
  if (!local) return;
  const binding = scope.getBinding(local.name);
  if (
    !binding?.path.parentPath?.isImportDeclaration() ||
    binding.path.parentPath.node.source.value !== source
  )
    return;
  if (t.isIdentifier(node) && binding.path.isImportSpecifier()) {
    const imported = binding.path.node.imported;
    return t.isIdentifier(imported) ? imported.name : imported.value;
  }
  if (t.isMemberExpression(node) && binding.path.isImportNamespaceSpecifier())
    return propertyName(node);
}
