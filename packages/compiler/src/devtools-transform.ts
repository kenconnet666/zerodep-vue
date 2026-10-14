import { addNamed } from '@babel/helper-module-imports';
import type { NodePath } from '@babel/core';
import * as t from '@babel/types';
import { cssCallKind, isImported } from './hot-transform.ts';

const runtime = '@zerodep-vue/compiler/devtools';
const sources = new Set([
  '@zerodep-vue/css/runtime',
  '@zerodep-vue/tsx/runtime',
  '@zerodep-vue/compiler/runtime',
]);
/** 只在 Vite 客户端开发转换中调用；位置常量与包装不进入生产及 SSR 输出。 */
export function instrumentDevtools(program: NodePath<t.Program>, filename: string): void {
  program.scope.crawl();
  const helpers = new Map<string, t.Identifier>();
  const helper = (name: string) => {
    if (!helpers.has(name)) helpers.set(name, addNamed(program, name, runtime));
    return t.cloneNode(helpers.get(name)!);
  };
  const location = (node: t.Node, kind: string) => {
    const value = t.objectExpression([
      t.objectProperty(t.identifier('file'), t.stringLiteral(filename)),
      t.objectProperty(t.identifier('line'), t.numericLiteral(node.loc?.start.line ?? 1)),
      t.objectProperty(t.identifier('column'), t.numericLiteral((node.loc?.start.column ?? 0) + 1)),
      t.objectProperty(t.identifier('kind'), t.stringLiteral(kind)),
    ]);
    value.extra = { zerodepSource: true };
    return value;
  };
  for (const statement of program.get('body')) {
    if (!statement.isImportDeclaration() || !sources.has(statement.node.source.value)) continue;
    for (const specifier of statement.node.specifiers) {
      if (!t.isImportSpecifier(specifier)) continue;
      const name = t.isIdentifier(specifier.imported)
        ? specifier.imported.name
        : specifier.imported.value;
      if (!['createCssVNode', 'cloneCssVNode'].includes(name)) continue;
      const references = [
        ...(program.scope.getBinding(specifier.local.name)?.referencePaths ?? []),
      ];
      for (const reference of references) reference.replaceWith(helper(name));
    }
  }
  program.traverse({
    CallExpression: {
      exit(call) {
        if (call.node.extra?.zerodepTraced) return;
        if (
          isImported(call.scope, call.node.callee, '@zerodep-vue/tsx/runtime', 'createComponent')
        ) {
          const options = call.get('arguments')[0];
          if (options?.isObjectExpression())
            for (const prop of options.get('properties')) {
              if (!prop.isObjectProperty() || !t.isIdentifier(prop.node.key, { name: 'setup' }))
                continue;
              const fn = prop.get('value');
              if (
                (fn.isArrowFunctionExpression() || fn.isFunctionExpression()) &&
                t.isBlockStatement(fn.node.body)
              )
                fn.node.body.body.unshift(
                  t.expressionStatement(t.callExpression(helper('enableInspection'), [])),
                );
            }
          return;
        }
        let kind = cssCallKind(call.scope, call.node.callee);
        let point: t.Node = call.node;
        if (!kind)
          for (const source of sources)
            if (isImported(call.scope, call.node.callee, source, 'binding')) {
              kind = 'binding';
              const getter = call.node.arguments[0];
              if (t.isArrowFunctionExpression(getter)) point = getter.body;
            }
        if (
          !kind ||
          ![
            'class',
            'create',
            'createTheme',
            'defineVars',
            'keyframes',
            'binding',
            'global',
          ].includes(kind)
        )
          return;
        call.node.extra = { ...call.node.extra, zerodepTraced: true };
        if (kind === 'global') {
          const value = call.get('arguments')[1];
          if (value?.isExpression())
            value.replaceWith(
              t.callExpression(helper('traceGlobal'), [
                t.cloneNode(value.node, true),
                location(point, kind),
              ]),
            );
          return;
        }
        const wrapped = t.callExpression(helper('traceCss'), [
          t.cloneNode(call.node, true),
          location(point, kind),
        ]);
        wrapped.extra = {
          zerodepTraced: true,
          ...(kind === 'binding'
            ? {}
            : { zerodepCssKind: kind === 'createTheme' ? 'class' : kind }),
        };
        call.replaceWith(wrapped);
        call.skip();
      },
    },
  });
}
