import { createHash } from 'node:crypto';
import type { NodePath } from '@babel/core';
import * as t from '@babel/types';
import type { State } from '../upstream/interface.ts';
import { assertSynchronous, coreModule, importedName, runtimeImports } from './bindings.ts';

/** 显式开启可处理只导入项目共享样式的普通 Vue 文件；省略时按工具导入自动接入。 */
export interface CssOptions {
  css?: boolean;
}

function preventsMemo(node: t.Node): boolean {
  switch (node.type) {
    case 'ThisExpression':
    case 'Super':
    case 'AwaitExpression':
    case 'YieldExpression':
    case 'AssignmentExpression':
    case 'UpdateExpression':
      return true;
    case 'UnaryExpression':
      return node.operator === 'delete';
    default:
      return false;
  }
}

/** 分析完整表达式，再决定是否缓存；traverse 不访问根节点，不能漏掉根赋值等操作。 */
function memoInputs(expression: NodePath<t.Expression>): t.Identifier[] | undefined {
  let calls = expression.isCallExpression() || expression.isOptionalCallExpression();
  let safe = !preventsMemo(expression.node);
  const inputs = new Map<object, t.Identifier>();
  expression.traverse({
    enter(reference) {
      // as/satisfies/泛型参数中的名称没有运行时值。
      if (reference.isTSType()) {
        reference.skip();
        return;
      }
      if (preventsMemo(reference.node)) safe = false;
    },
    CallExpression() {
      calls = true;
    },
    OptionalCallExpression() {
      calls = true;
    },
    ReferencedIdentifier(reference) {
      if (!t.isIdentifier(reference.node) || reference.node.name === 'arguments') {
        safe = false;
        return;
      }
      const binding = reference.scope.getBinding(reference.node.name);
      if (
        !binding ||
        binding.path === expression ||
        binding.path.findParent((parent) => parent === expression)
      )
        return;
      // 回调局部值也参与缓存输入，循环重排或新闭包不能继续使用旧参数。
      inputs.set(binding, t.cloneNode(reference.node));
    },
  });
  return calls && safe ? [...inputs.values()] : undefined;
}

/** JSX 之前只捕获表达式和传递元数据，声明组合与 CSS 生成仍全部在运行时完成。 */
export function transformCss(
  program: NodePath<t.Program>,
  state: State,
  options?: CssOptions,
): boolean {
  const hasRuntime = program.node.body.some(
    (node) => t.isImportDeclaration(node) && node.source.value === coreModule,
  );
  if (options?.css === false || (options?.css !== true && !hasRuntime)) return false;
  if (
    state.opts.pragma ||
    state.file.ast.comments?.some((comment) => /@jsx\s+(?!ImportSource\b)/.test(comment.value))
  )
    throw program.buildCodeFrameError(
      '[ZV_CSS_PRAGMA] CSS 接线需要标准 Vue VNode 工厂；普通自定义 pragma 文件可关闭 zerodep.css。',
    );
  const helper = runtimeImports(program);
  const captures = new WeakSet<t.Node>();
  const memoVersion = createHash('sha256').update(state.file.code).digest('hex').slice(0, 16);
  let memoSite = 0;
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
    JSXAttribute: {
      exit(path) {
        if (
          !t.isJSXIdentifier(path.node.name, { name: 'class' }) ||
          !t.isJSXExpressionContainer(path.node.value) ||
          !path.findParent((parent) => parent.node.extra?.zerodepAuthoring === true)
        )
          return;
        const container = path.get('value');
        if (!container.isJSXExpressionContainer()) return;
        const expression = container.get('expression');
        if (!expression.isExpression()) return;
        const inputs = memoInputs(expression);
        if (!inputs) return;
        expression.replaceWith(
          t.callExpression(helper('memoClass'), [
            t.stringLiteral(`${memoVersion}:${memoSite++}`),
            t.arrowFunctionExpression([], t.arrayExpression(inputs)),
            t.arrowFunctionExpression([], expression.node),
          ]),
        );
      },
    },
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
      if (importedName(path.scope, path.node.callee, coreModule) !== 'bx') return;
      if (path.findParent((parent) => captures.has(parent.node)))
        throw path.buildCodeFrameError('[ZV_BX_NESTED] 一个 bx 表达式中无需再次调用 bx。');
      const argument = path.node.arguments[0];
      if (path.node.arguments.length !== 1 || !t.isExpression(argument))
        throw path.buildCodeFrameError('[ZV_BX_ARGUMENT] bx 需要一个普通表达式。');
      if (t.isFunction(argument))
        throw path.buildCodeFrameError(
          '[ZV_BX_ARGUMENT] bx 直接接收值表达式，不需要 getter 回调。',
        );
      assertSynchronous(
        path.get('arguments.0'),
        '[ZV_BX_ASYNC] bx 必须同步读取值，不能直接捕获 await 或 yield；请先完成异步操作，再传入结果或读取 Vue 状态。',
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
  return true;
}

export function connectCss(program: NodePath<t.Program>, state: State) {
  const helper = runtimeImports(program);
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
