import { createHash } from 'node:crypto';
import { addNamed } from '@babel/helper-module-imports';
import type { NodePath, Scope } from '@babel/core';
import * as t from '@babel/types';

export interface HotTransform {
  signature: string;
  compatible: string;
  managed: boolean;
}
const cssModule = '@zerodep-vue/css';
const runtimeModule = '@zerodep-vue/tsx/runtime';

function property(
  node: t.MemberExpression | t.ObjectProperty | t.ObjectMethod,
): string | undefined {
  const value = 'property' in node ? node.property : node.key;
  return !node.computed && t.isIdentifier(value)
    ? value.name
    : t.isStringLiteral(value)
      ? value.value
      : undefined;
}
function imported(scope: Scope, node: t.Node, source: string, name: string): boolean {
  if (t.isIdentifier(node)) {
    const binding = scope.getBinding(node.name);
    return (
      !!binding?.path.isImportSpecifier() &&
      binding.path.parentPath.isImportDeclaration() &&
      binding.path.parentPath.node.source.value === source &&
      (t.isIdentifier(binding.path.node.imported)
        ? binding.path.node.imported.name
        : binding.path.node.imported.value) === name
    );
  }
  if (t.isMemberExpression(node) && t.isIdentifier(node.object) && property(node) === name) {
    const binding = scope.getBinding(node.object.name);
    return (
      !!binding?.path.isImportNamespaceSpecifier() &&
      binding.path.parentPath.isImportDeclaration() &&
      binding.path.parentPath.node.source.value === source
    );
  }
  return false;
}
function context(scope: Scope, node: t.Node, seen = new Set<t.Node>()): boolean {
  if (t.isCallExpression(node)) return imported(scope, node.callee, cssModule, 'createTheme');
  if (!t.isIdentifier(node)) return false;
  const binding = scope.getBinding(node.name);
  if (!binding?.constant || !binding.path.isVariableDeclarator() || seen.has(binding.path.node))
    return false;
  seen.add(binding.path.node);
  const init = binding.path.node.init;
  return !!init && t.isIdentifier(binding.path.node.id) && context(binding.path.scope, init, seen);
}

/** 按真实 binding 追踪默认导入、命名空间、主题上下文与解构别名，局部同名对象不接管。 */
function entry(scope: Scope, node: t.Node, name: string, seen = new Set<t.Node>()): boolean {
  if (imported(scope, node, cssModule, name)) return true;
  if (t.isMemberExpression(node)) return property(node) === name && context(scope, node.object);
  if (!t.isIdentifier(node)) return false;
  const binding = scope.getBinding(node.name);
  if (!binding?.constant || !binding.path.isVariableDeclarator() || seen.has(binding.path.node))
    return false;
  seen.add(binding.path.node);
  const { id, init } = binding.path.node;
  if (!init) return false;
  if (t.isIdentifier(id)) return entry(binding.path.scope, init, name, seen);
  return (
    t.isObjectPattern(id) &&
    context(binding.path.scope, init) &&
    id.properties.some(
      (item) =>
        t.isObjectProperty(item) &&
        property(item) === name &&
        t.isIdentifier(item.value, { name: node.name }),
    )
  );
}

const cssEntries = new Map([
  ['css', 'class'],
  ['cx', 'create'],
  ['keyframes', 'keyframes'],
  ['globalCss', 'global'],
]);
export function cssCallKind(scope: Scope, node: t.Node): string | undefined {
  for (const [name, kind] of cssEntries) if (entry(scope, node, name)) return kind;
}

/** HMR 不依赖源码排版、位置或临时 raw 文本，只比较未被隔离的初始化结构。 */
function signature(node: t.Program): string {
  // render 新增文本/运算可新增编译助手，不能因此误判成 setup 变更。
  // 作者自己的 import 保留源码位置，仍参与模块初始化签名。
  const program = {
    ...node,
    body: node.body.filter(
      (statement) =>
        !t.isImportDeclaration(statement) ||
        statement.specifiers.some((specifier) => specifier.loc),
    ),
  };
  return createHash('sha256')
    .update(
      JSON.stringify(program, (key, value) =>
        value?.extra?.zerodepSource
          ? { type: 'ObjectExpression', properties: [] }
          : [
                'start',
                'end',
                'loc',
                'extra',
                'leadingComments',
                'innerComments',
                'trailingComments',
                'comments',
              ].includes(key)
            ? undefined
            : value,
      ),
    )
    .digest('hex')
    .slice(0, 24);
}
function inside(path: NodePath, root: NodePath): boolean {
  return path === root || !!path.findParent((parent) => parent === root);
}
function assignmentTarget(path: NodePath): boolean {
  let current = path;
  for (;;) {
    const parent = current.parentPath;
    if (!parent) return false;
    if (parent.isAssignmentExpression()) return current.key === 'left';
    if (parent.isUpdateExpression()) return current.key === 'argument';
    if (parent.isObjectProperty() && current.key === 'value' && parent.parentPath.isObjectPattern())
      current = parent.parentPath;
    else if (
      parent.isArrayPattern() ||
      parent.isRestElement() ||
      (parent.isAssignmentPattern() && current.key === 'left')
    )
      current = parent;
    else return false;
  }
}
function liftable(root: NodePath): boolean {
  let safe = true;
  root.traverse({
    Super() {
      safe = false;
    },
    AwaitExpression(path) {
      const owner = path.getFunctionParent();
      if (!owner || !inside(owner, root)) safe = false;
    },
    YieldExpression(path) {
      const owner = path.getFunctionParent();
      if (!owner || !inside(owner, root)) safe = false;
    },
    MetaProperty(path) {
      if (path.node.meta.name !== 'import') safe = false;
    },
    CallExpression(path) {
      if (t.isIdentifier(path.node.callee, { name: 'eval' }) && !path.scope.getBinding('eval'))
        safe = false;
    },
  });
  return safe;
}

/** 在已有 lowering 后隔离函数，继续使用原实例环境；不把任意 setup 再执行一遍。 */
export function transformHot(program: NodePath<t.Program>): HotTransform | undefined {
  program.scope.crawl();
  const renders: NodePath<t.ArrowFunctionExpression>[] = [];
  program.traverse({
    CallExpression(call) {
      if (!imported(call.scope, call.node.callee, runtimeModule, 'createComponent')) return;
      const options = call.get('arguments')[0];
      if (!options?.isObjectExpression()) return;
      const setup = options
        .get('properties')
        .find((path) => path.isObjectProperty() && property(path.node) === 'setup');
      if (!setup?.isObjectProperty()) return;
      const value = setup.get('value');
      if (!value.isFunctionExpression() && !value.isArrowFunctionExpression()) return;
      const body = value.get('body');
      if (!body.isBlockStatement()) return;
      const last = body.get('body').at(-1);
      if (!last?.isReturnStatement()) return;
      const render = last.get('argument');
      if (render.isArrowFunctionExpression() && liftable(render)) renders.push(render);
    },
  });
  interface Site {
    path: NodePath<t.Expression>;
    kind: string;
    global?: NodePath<t.CallExpression>;
  }
  const sites: Site[] = renders.map((path) => ({ path, kind: 'render' }));
  const roots = new Set<t.Node>(renders.map((path) => path.node));
  program.traverse({
    CallExpression(call) {
      if (call.findParent((parent) => roots.has(parent.node))) return;
      const callee = call.node.callee;
      let kind = call.node.extra?.zerodepCssKind as string | undefined;
      if (kind) {
        /* 开发来源包装与原 CSS 调用一起热替换。 */
      } else kind = cssCallKind(call.scope, callee);
      if (!kind) return;
      const target = kind === 'global' ? call.get('arguments')[1] : call;
      if (!target?.isExpression() || !liftable(target)) return;
      sites.push({
        path: target,
        kind: kind === 'global' ? 'source' : kind,
        ...(kind === 'global' && !call.getFunctionParent() ? { global: call } : {}),
      });
      roots.add(target.node);
    },
  });
  if (!sites.length) return;
  sites.sort((a, b) => (a.path.node.start ?? 0) - (b.path.node.start ?? 0));
  const hot = program.scope.generateUidIdentifier('hot');
  const factories: t.ObjectProperty[] = [];
  const globalCalls = new Set<t.Node>();
  for (const [index, site] of sites.entries()) {
    const path = site.path;
    const environment = path.scope.generateUidIdentifier('environment');
    const bindings = Object.values(path.scope.getAllBindings()).filter(
      (binding) => binding.kind !== 'module' && !inside(binding.path, path),
    );
    const bound = new Map(bindings.map((binding) => [binding.identifier.name, binding]));
    const extras = new Map<string, t.Expression>();
    const read = (name: string) =>
      t.memberExpression(t.cloneNode(environment), t.stringLiteral(name), true);
    const replace = (reference: NodePath<t.Identifier>) => {
      if (!reference.isReferencedIdentifier() && !assignmentTarget(reference)) return;
      const binding = reference.scope.getBinding(reference.node.name);
      const name = reference.node.name;
      if (binding) {
        if (bound.get(name) !== binding) return;
      } else if (name === 'arguments') {
        // 箭头 render 的 arguments 来自原函数环境；嵌套普通函数保留自己的 arguments。
        let parent = reference.getFunctionParent();
        while (parent && parent.isArrowFunctionExpression()) parent = parent.getFunctionParent();
        if (parent && inside(parent, path)) return;
        extras.set(name, t.identifier(name));
      } else return;
      if (reference.parentPath.isObjectProperty() && reference.parentPath.node.shorthand)
        reference.parentPath.node.shorthand = false;
      const parent = reference.parentPath;
      const bare =
        ((parent.isCallExpression() || parent.isOptionalCallExpression()) &&
          reference.key === 'callee') ||
        (parent.isTaggedTemplateExpression() && reference.key === 'tag');
      reference.replaceWith(
        bare ? t.sequenceExpression([t.numericLiteral(0), read(name)]) : read(name),
      );
      reference.skip();
    };
    if (path.isIdentifier()) replace(path);
    path.traverse({
      Identifier: replace,
      ThisExpression(reference) {
        let parent: NodePath | null = reference.parentPath;
        while (parent && parent !== path) {
          if ((parent.isFunction() && !parent.isArrowFunctionExpression()) || parent.isClass())
            return;
          parent = parent.parentPath;
        }
        extras.set('$this', t.thisExpression());
        reference.replaceWith(read('$this'));
      },
    });
    const accessors: t.ObjectMethod[] = [];
    const getter = (name: string, value: t.Expression) =>
      accessors.push(
        t.objectMethod(
          'get',
          t.stringLiteral(name),
          [],
          t.blockStatement([t.returnStatement(value)]),
          true,
        ),
      );
    for (const binding of bindings) {
      const name = binding.identifier.name;
      getter(name, t.identifier(name));
      if (['let', 'var', 'param', 'hoisted'].includes(binding.kind)) {
        const value = path.scope.generateUidIdentifier('value');
        accessors.push(
          t.objectMethod(
            'set',
            t.stringLiteral(name),
            [value],
            t.blockStatement([
              t.expressionStatement(
                t.assignmentExpression('=', t.identifier(name), t.cloneNode(value)),
              ),
            ]),
            true,
          ),
        );
      }
    }
    // this/arguments 是创建闭包时的词法值，不能放进普通 getter 方法后改变接收者。
    const environmentProperties: (t.ObjectMethod | t.ObjectProperty)[] = [
      ...accessors,
      ...[...extras].map(([name, value]) => t.objectProperty(t.stringLiteral(name), value, true)),
    ];
    const original = t.cloneNode(path.node, true);
    const factory =
      site.kind === 'render' && t.isArrowFunctionExpression(original)
        ? t.arrowFunctionExpression(
            [environment, ...original.params],
            original.body,
            original.async,
          )
        : t.arrowFunctionExpression([environment], original);
    factories.push(t.objectProperty(t.stringLiteral(String(index)), factory));
    path.replaceWith(
      t.callExpression(
        t.memberExpression(
          t.cloneNode(hot),
          t.identifier(site.kind === 'render' ? 'render' : 'style'),
        ),
        [
          t.stringLiteral(String(index)),
          t.objectExpression(environmentProperties),
          ...(site.kind === 'render' ? [] : [t.stringLiteral(site.kind)]),
        ],
      ),
    );
    if (site.global) {
      const call = site.global;
      call.replaceWith(
        t.callExpression(t.memberExpression(t.cloneNode(hot), t.identifier('onceGlobal')), [
          t.stringLiteral(String(index)),
          t.arrowFunctionExpression([], t.cloneNode(call.node, true)),
        ]),
      );
      globalCalls.add(call.node);
    }
  }
  const stamp = signature(program.node);
  // CSS 模块可自接收；带 mount 等其他顶层执行的入口交给 Vite 正常传播/刷新。
  const managed = program.node.body.every(
    (node) => !t.isExpressionStatement(node) || globalCalls.has(node.expression),
  );
  const register = addNamed(program, 'registerModule', '@zerodep-vue/compiler/hmr');
  const compatible = addNamed(program, 'compatible', '@zerodep-vue/compiler/hmr');
  program.unshiftContainer(
    'body',
    t.variableDeclaration('const', [
      t.variableDeclarator(
        hot,
        t.callExpression(register, [
          t.memberExpression(
            t.metaProperty(t.identifier('import'), t.identifier('meta')),
            t.identifier('hot'),
          ),
          t.stringLiteral(stamp),
          t.objectExpression(factories),
        ]),
      ),
    ]),
  );
  return { signature: stamp, compatible: compatible.name, managed };
}

export { imported as isImported };
