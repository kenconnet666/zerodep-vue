import type { NodePath } from '@babel/core';
import * as t from '@babel/types';

/** 默认值搬到实例 getter 前，保留参数环境对外层绑定的解析和声明顺序。 */
export function prepareDefaults(
  fn: NodePath<t.ArrowFunctionExpression | t.FunctionExpression | t.FunctionDeclaration>,
) {
  const parameter = fn.get('params')[0];
  if (!parameter?.isObjectPattern()) return;
  const properties = parameter.get('properties');
  const positions = new Map<string, number>();
  for (const [index, property] of properties.entries())
    for (const name of Object.keys(t.getBindingIdentifiers(property.node)))
      positions.set(name, index);
  const shadows = new Set<string>();
  for (const [index, property] of properties.entries()) {
    if (!property.isObjectProperty()) continue;
    const value = property.get('value');
    if (!value.isAssignmentPattern()) continue;
    const right = value.get('right');
    const inspect = (reference: NodePath<t.Identifier | t.JSXIdentifier>) => {
      for (
        let parent: NodePath | null = reference.parentPath;
        parent && parent !== right.parentPath;
        parent = parent.parentPath
      )
        if (t.isTSType(parent.node)) return;
      const name = reference.node.name;
      const resolved = reference.scope.getBinding(name);
      const local = fn.scope.getOwnBinding(name);
      const position = positions.get(name);
      if (
        resolved === local &&
        position !== undefined &&
        position >= index &&
        reference.getFunctionParent() === fn
      )
        throw reference.buildCodeFrameError(
          `[ZV_DEFAULT_ORDER] 默认值不能直接读取自身或后续参数 ${name}；把依赖放到更早参数，或在 setup 中使用 computed。`,
        );
      // Babel 保留参数与函数体的独立环境；生成 getter 后该环境会消失。
      // 仅重命名函数体中冲突的绑定，不能顺手改写默认表达式所捕获的外层对象。
      if (local && resolved !== local) shadows.add(name);
    };
    if (right.isReferencedIdentifier()) inspect(right as NodePath<t.Identifier>);
    right.traverse({ ReferencedIdentifier: inspect });
  }
  for (const name of shadows) fn.scope.rename(name, fn.scope.generateUidIdentifier(name).name);
}
