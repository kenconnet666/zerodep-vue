import { addNamed } from '@babel/helper-module-imports';
import type { NodePath } from '@babel/core';
import * as t from '@babel/types';
import type { State } from './upstream/interface.ts';

/** 显式开启可处理只导入项目共享样式的普通 Vue 文件；省略时按工具导入自动接入。 */
export interface CssOptions {
  css?: boolean;
}

function isBx(path: NodePath<t.CallExpression>): boolean {
  const callee = path.node.callee;
  if (t.isIdentifier(callee)) {
    const binding = path.scope.getBinding(callee.name);
    if (
      !binding?.path.isImportSpecifier() ||
      !binding.path.parentPath.isImportDeclaration() ||
      binding.path.parentPath.node.source.value !== '@zerodep-vue/css'
    )
      return false;
    const imported = binding.path.node.imported;
    return (t.isIdentifier(imported) ? imported.name : imported.value) === 'bx';
  }
  if (
    t.isMemberExpression(callee) &&
    t.isIdentifier(callee.object) &&
    !callee.computed &&
    t.isIdentifier(callee.property, { name: 'bx' })
  ) {
    const binding = path.scope.getBinding(callee.object.name);
    return (
      !!binding?.path.isImportNamespaceSpecifier() &&
      binding.path.parentPath.isImportDeclaration() &&
      binding.path.parentPath.node.source.value === '@zerodep-vue/css'
    );
  }
  return false;
}

/** JSX 之前只捕获表达式和传递元数据，声明组合与 CSS 生成仍全部在运行时完成。 */
export function transformCss(
  program: NodePath<t.Program>,
  state: State,
  options?: CssOptions,
): string | undefined {
  const imports = program.node.body.filter(t.isImportDeclaration).map((node) => node.source.value);
  const hasCss = imports.includes('@zerodep-vue/css');
  const hasTsx = imports.some(
    (source) => source === '@zerodep-vue/tsx' || source === '@zerodep-vue/tsx/runtime',
  );
  if (options?.css === false || (options?.css !== true && !hasCss && !hasTsx)) return;
  if (
    state.opts.pragma ||
    state.file.ast.comments?.some((comment) => /@jsx\s+(?!ImportSource\b)/.test(comment.value))
  )
    throw program.buildCodeFrameError(
      '[ZV_CSS_PRAGMA] CSS 接线需要标准 Vue VNode 工厂；普通自定义 pragma 文件可关闭 zerodep.css。',
    );
  const runtime = hasTsx
    ? '@zerodep-vue/tsx/runtime'
    : hasCss
      ? '@zerodep-vue/css/runtime'
      : '@zerodep-vue/compiler/runtime';
  const helpers = new Map<string, t.Identifier>();
  const helper = (name: string) => {
    let identifier = helpers.get(name);
    if (!identifier) {
      identifier = addNamed(program, name, runtime);
      helpers.set(name, identifier);
    }
    return t.cloneNode(identifier);
  };
  const captures = new WeakSet<t.Node>();
  for (const statement of program.get('body')) {
    if (!statement.isImportDeclaration() || statement.node.source.value !== 'vue') continue;
    for (const specifier of statement.node.specifiers) {
      if (!t.isImportSpecifier(specifier)) continue;
      const name = t.isIdentifier(specifier.imported)
        ? specifier.imported.name
        : specifier.imported.value;
      if (name !== 'cloneVNode') continue;
      for (const reference of program.scope.getBinding(specifier.local.name)?.referencePaths ?? [])
        reference.replaceWith(helper('cloneCssVNode'));
    }
  }
  // 共享模块返回的绑定也能参加模板/拼接；普通输入仍由运行时保留 JS 原有运算。
  program.traverse({
    MemberExpression(path) {
      const { object, property, computed } = path.node;
      if (
        !t.isIdentifier(object) ||
        !(
          (!computed && t.isIdentifier(property, { name: 'cloneVNode' })) ||
          t.isStringLiteral(property, { value: 'cloneVNode' })
        )
      )
        return;
      const binding = path.scope.getBinding(object.name);
      if (
        binding?.path.isImportNamespaceSpecifier() &&
        binding.path.parentPath.isImportDeclaration() &&
        binding.path.parentPath.node.source.value === 'vue'
      )
        path.replaceWith(helper('cloneCssVNode'));
    },
    CallExpression(path) {
      if (!isBx(path)) return;
      if (path.findParent((parent) => captures.has(parent.node)))
        throw path.buildCodeFrameError('[ZV_BX_NESTED] 一个 bx 表达式中无需再次调用 bx。');
      const argument = path.node.arguments[0];
      if (path.node.arguments.length !== 1 || !t.isExpression(argument))
        throw path.buildCodeFrameError('[ZV_BX_ARGUMENT] bx 需要一个普通表达式。');
      if (t.isFunction(argument))
        throw path.buildCodeFrameError(
          '[ZV_BX_ARGUMENT] bx 直接接收值表达式，不需要 getter 回调。',
        );
      const getter = t.arrowFunctionExpression([], argument);
      captures.add(getter);
      path.replaceWith(t.callExpression(helper('binding'), [getter]));
    },
    TemplateLiteral: {
      exit(path) {
        if (
          !path.node.expressions.length ||
          path.parentPath.isTaggedTemplateExpression() ||
          path.findParent((parent) => captures.has(parent.node))
        )
          return;
        const parts: t.Expression[] = [];
        path.node.quasis.forEach((quasi, index) => {
          parts.push(t.stringLiteral(quasi.value.cooked ?? quasi.value.raw));
          const expression = path.node.expressions[index];
          if (expression && t.isExpression(expression))
            parts.push(t.callExpression(helper('piece'), [expression]));
        });
        path.replaceWith(t.callExpression(helper('template'), [t.arrayExpression(parts)]));
      },
    },
    BinaryExpression: {
      exit(path) {
        if (path.node.operator !== '+' || path.findParent((parent) => captures.has(parent.node)))
          return;
        path.replaceWith(
          t.callExpression(helper('add'), [path.node.left as t.Expression, path.node.right]),
        );
      },
    },
  });
  return runtime;
}

export function connectCss(program: NodePath<t.Program>, state: State, runtime: string) {
  const helpers = new Map<string, t.Identifier>();
  const helper = (name: string) => {
    let identifier = helpers.get(name);
    if (!identifier) {
      identifier = addNamed(program, name, runtime);
      helpers.set(name, identifier);
    }
    return t.cloneNode(identifier);
  };
  const ordinary = state.get('createVNode');
  state.set('zerodep:createVNode', (path: NodePath<t.JSXElement>) => {
    const potential = path.node.openingElement.attributes.some((attribute) => {
      if (t.isJSXSpreadAttribute(attribute)) return true;
      if (!t.isJSXIdentifier(attribute.name, { name: 'class' })) return false;
      if (!t.isJSXExpressionContainer(attribute.value)) return false;
      const value = attribute.value.expression;
      if (t.isLiteral(value)) return false;
      if (
        t.isObjectExpression(value) &&
        value.properties.every((property) => !t.isSpreadElement(property) && !property.computed)
      )
        return false;
      return true;
    });
    return potential ? helper('createCssVNode') : ordinary();
  });
  state.set('mergeProps', () => helper('mergeCssProps'));
}
