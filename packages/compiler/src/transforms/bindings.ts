import type { NodePath, Scope } from '@babel/core';
import { addNamed } from '@babel/helper-module-imports';
import * as t from '@babel/types';

export const coreModule = '@zerodep-vue/core';

/** 搬入同步回调前检查暂停语法；嵌套函数自己的 body/params 仍保留原有边界。 */
export function assertSynchronous(root: NodePath, message: string): void {
  const inspect = (path: NodePath) => {
    for (
      let current: NodePath | null = path;
      current && current !== root;
      current = current.parentPath
    ) {
      if (
        current.parentPath?.isFunction() &&
        (current.key === 'body' || current.listKey === 'params')
      )
        return;
    }
    throw path.buildCodeFrameError(message);
  };
  if (
    root.isAwaitExpression() ||
    root.isYieldExpression() ||
    (root.isForOfStatement() && root.node.await) ||
    (root.isVariableDeclaration() && root.node.kind === 'await using')
  )
    inspect(root);
  root.traverse({
    AwaitExpression: inspect,
    YieldExpression: inspect,
    ForOfStatement(path) {
      if (path.node.await) inspect(path);
    },
    VariableDeclaration(path) {
      if (path.node.kind === 'await using') inspect(path);
    },
  });
}

/** 每次变换维护自己的导入缓存；返回副本，避免多个 AST 位置共用可变节点。 */
export function runtimeImports(program: NodePath<t.Program>) {
  const names = new Map<string, t.Identifier>();
  return (name: string): t.Identifier => {
    let identifier = names.get(name);
    if (!identifier) {
      identifier = addNamed(program, name, coreModule);
      names.set(name, identifier);
    }
    return t.cloneNode(identifier);
  };
}

/** 仅接受静态属性名，计算表达式留给正常 JavaScript 语义。 */
export function propertyName(
  node: t.MemberExpression | t.ObjectProperty | t.ObjectMethod,
): string | undefined {
  const value = 'property' in node ? node.property : node.key;
  if (!node.computed && t.isIdentifier(value)) return value.name;
  if (t.isStringLiteral(value)) return value.value;
}

/** 跟随真实导入与不可变 const 别名；可变来源、循环别名和局部同名变量不接管。 */
export function importedName(scope: Scope, node: t.Node, source: string): string | undefined {
  const seen = new Set<t.Node>();
  const resolve = (scope: Scope, node: t.Node): string | true | undefined => {
    if (
      t.isParenthesizedExpression(node) ||
      t.isTSAsExpression(node) ||
      t.isTSTypeAssertion(node) ||
      t.isTSNonNullExpression(node) ||
      t.isTSSatisfiesExpression(node)
    )
      return resolve(scope, node.expression);
    if (t.isMemberExpression(node))
      return resolve(scope, node.object) === true ? propertyName(node) : undefined;
    if (!t.isIdentifier(node)) return;
    const binding = scope.getBinding(node.name);
    if (!binding || seen.has(binding.path.node)) return;
    seen.add(binding.path.node);
    const declaration = binding.path.parentPath;
    if (declaration?.isImportDeclaration() && declaration.node.source.value === source) {
      if (binding.path.isImportNamespaceSpecifier()) return true;
      if (binding.path.isImportSpecifier()) {
        const imported = binding.path.node.imported;
        return t.isIdentifier(imported) ? imported.name : imported.value;
      }
    }
    if (
      binding.constant &&
      binding.path.isVariableDeclarator() &&
      declaration?.isVariableDeclaration({ kind: 'const' }) &&
      t.isIdentifier(binding.path.node.id) &&
      binding.path.node.init
    )
      return resolve(binding.path.scope, binding.path.node.init);
  };
  const resolved = resolve(scope, node);
  return typeof resolved === 'string' ? resolved : undefined;
}
