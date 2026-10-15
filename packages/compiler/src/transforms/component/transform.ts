import { addNamed } from '@babel/helper-module-imports';
import type { NodePath, Scope } from '@babel/core';
import * as t from '@babel/types';
import { runtimeProps } from './types.ts';
import { prepareDefaults } from './defaults.ts';
import { writableModels } from './writes.ts';
import type { State } from '../../upstream/interface.ts';
import { assertSynchronous, coreModule, importedName, propertyName } from '../bindings.ts';

type Binding = Scope['bindings'][string];

/** 把本函数的第一个返回分支及后续语句放入 render；嵌套函数的 return 不改变边界。 */
function lowerRender(
  setup: NodePath<t.ArrowFunctionExpression | t.FunctionExpression | t.FunctionDeclaration>,
) {
  const asyncMessage =
    '[ZV_RENDER_ASYNC] render 必须同步返回内容；请在 async setup 的返回分支之前完成 await，再把结果用于渲染。';
  if (!t.isBlockStatement(setup.node.body)) {
    assertSynchronous(setup.get('body'), asyncMessage);
    setup.node.body = t.blockStatement([
      t.returnStatement(t.arrowFunctionExpression([], setup.node.body)),
    ]);
    return;
  }
  const statements = setup.get('body').get('body') as NodePath<t.Statement>[];
  const boundary = statements.findIndex((statement) => {
    if (statement.isReturnStatement()) return true;
    if (statement.isFunctionDeclaration()) return false;
    let found = false;
    statement.traverse({
      Function(path) {
        path.skip();
      },
      ReturnStatement() {
        found = true;
      },
    });
    return found;
  });
  if (boundary < 0)
    throw setup.buildCodeFrameError('[ZV_RENDER] _component 需要返回内容；空内容可明确返回 null。');
  setup.scope.crawl();
  const bodyPath = setup.get('body');
  const renderRoots = new Set<t.Node>(statements.slice(boundary).map((path) => path.node));
  const inRender = (path: NodePath) => {
    let current: NodePath | null = path;
    while (current && current.parentPath !== bodyPath) current = current.parentPath;
    return !!current && renderRoots.has(current.node);
  };
  const retained = new Set<Binding>();
  const runtimeReferences = (binding: Binding) =>
    [...binding.referencePaths, ...binding.constantViolations].filter(
      (path) => !path.findParent((parent) => t.isTSType(parent.node)),
    );
  const retain = (binding: Binding, reference: NodePath) => {
    if (!inRender(binding.path) || retained.has(binding)) return;
    if (
      binding.kind !== 'var' &&
      !(binding.path.isFunctionDeclaration() && binding.path.parentPath === bodyPath)
    )
      throw reference.buildCodeFrameError(
        `[ZV_RENDER_SCOPE] ${binding.identifier.name} 属于渲染局部作用域，初始化代码不能跨边界捕获它；请把依赖它的函数也放在渲染分支内。`,
      );
    retained.add(binding);
  };
  for (const binding of Object.values(setup.scope.bindings)) {
    for (const reference of runtimeReferences(binding)) {
      if (!inRender(reference)) retain(binding, reference);
    }
  }
  // 只保留确实被初始化阶段捕获的声明；渲染 helper 继续拥有每次渲染的局部闭包。
  for (const binding of retained) {
    if (!binding.path.isFunctionDeclaration()) continue;
    for (const dependency of Object.values(setup.scope.bindings)) {
      const reference = runtimeReferences(dependency).find((path) =>
        path.findParent((parent) => parent === binding.path),
      );
      if (reference) retain(dependency, reference);
    }
  }
  const hoisted: t.Statement[] = [];
  const variables = new Set<string>();
  const lowerVar = (path: NodePath<t.VariableDeclaration>) => {
    if (
      path.node.kind !== 'var' ||
      path.findParent((parent) => parent.isFunction() || parent.isStaticBlock()) !== setup
    )
      return;
    const names = Object.keys(t.getBindingIdentifiers(path.node));
    if (
      !names.some((name) => {
        const binding = setup.scope.getOwnBinding(name);
        return binding && (!inRender(binding.path) || retained.has(binding));
      })
    )
      return;
    for (const name of names) variables.add(name);
    const assignments = path.node.declarations.flatMap((declaration) => {
      if (!declaration.init) return [];
      if (t.isVoidPattern(declaration.id))
        throw path.buildCodeFrameError('[ZV_RENDER_SCOPE] 无法保留此 var 声明的提升绑定。');
      return [t.assignmentExpression('=', declaration.id, declaration.init)];
    });
    if (
      (path.parentPath.isForOfStatement() || path.parentPath.isForInStatement()) &&
      path.key === 'left'
    ) {
      path.replaceWith(path.node.declarations[0]!.id);
    } else if (path.parentPath.isForStatement() && path.key === 'init') {
      if (assignments.length) path.replaceWith(t.sequenceExpression(assignments));
      else path.remove();
    } else if (assignments.length)
      path.replaceWith(t.expressionStatement(t.sequenceExpression(assignments)));
    else path.remove();
  };
  for (const statement of statements.slice(boundary)) {
    if (statement.isFunctionDeclaration()) {
      const binding = statement.node.id && setup.scope.getBinding(statement.node.id.name);
      if (binding && retained.has(binding)) {
        hoisted.push(statement.node);
        statement.remove();
      }
      continue;
    }
    if (statement.isVariableDeclaration()) lowerVar(statement);
    else statement.traverse({ VariableDeclaration: lowerVar });
  }
  if (variables.size)
    hoisted.push(
      t.variableDeclaration(
        'var',
        [...variables].map((name) => t.variableDeclarator(t.identifier(name))),
      ),
    );
  const renderPaths = (setup.get('body').get('body') as NodePath<t.Statement>[]).slice(boundary);
  for (const statement of renderPaths) assertSynchronous(statement, asyncMessage);
  if (!statements[boundary]!.isReturnStatement()) {
    for (const statement of renderPaths) {
      if (statement.isFunctionDeclaration()) continue;
      statement.traverse({
        Function(path) {
          path.skip();
        },
        CallExpression(path) {
          const name = importedName(path.scope, path.node.callee, 'vue');
          if (!name) return;
          if (
            /^on[A-Z]/.test(name) ||
            [
              'ref',
              'shallowRef',
              'reactive',
              'shallowReactive',
              'computed',
              'watch',
              'watchEffect',
              'watchSyncEffect',
              'watchPostEffect',
              'effectScope',
              'provide',
            ].includes(name)
          ) {
            throw path.buildCodeFrameError(
              '[ZV_RENDER_INIT] 返回分支之后仍有 Vue 初始化操作。请把初始化放到渲染分支之前，或把分支移入渲染时调用的函数。',
            );
          }
        },
      });
    }
  }
  const renderStatements = setup.node.body.body.splice(boundary);
  setup.node.body.body.push(...hoisted);
  setup.node.body.body.push(
    t.returnStatement(t.arrowFunctionExpression([], t.blockStatement(renderStatements))),
  );
}

function lower(call: NodePath<t.CallExpression>, state: State) {
  state.set('zerodep:authoring', true);
  let setup = call.get('arguments.0');
  let setupReference: t.Identifier | undefined;
  let namedSetup:
    NodePath<t.ArrowFunctionExpression | t.FunctionExpression | t.FunctionDeclaration> | undefined;
  // 私有副本留在原声明的词法环境，普通调用仍使用原函数；不能在调用处重新捕获自由变量。
  if (setup.isIdentifier()) {
    const binding = setup.scope.getBinding(setup.node.name);
    if (binding?.constant && binding.path.isFunctionDeclaration()) {
      const copy = t.cloneNode(binding.path.node, true);
      setupReference = binding.scope.generateUidIdentifier('setup');
      copy.id = t.cloneNode(setupReference);
      const statement =
        binding.path.parentPath.isExportNamedDeclaration() ||
        binding.path.parentPath.isExportDefaultDeclaration()
          ? binding.path.parentPath
          : binding.path;
      const [inserted] = statement.insertAfter(copy);
      if (inserted?.isFunctionDeclaration()) namedSetup = inserted;
    } else if (
      binding?.constant &&
      binding.path.isVariableDeclarator() &&
      t.isIdentifier(binding.path.node.id) &&
      (t.isArrowFunctionExpression(binding.path.node.init) ||
        t.isFunctionExpression(binding.path.node.init))
    ) {
      const copy = t.cloneNode(binding.path.node.init, true);
      setupReference = binding.scope.generateUidIdentifier('setup');
      let initializer: t.Expression = copy;
      if (t.isFunctionExpression(copy) && copy.id) {
        // 命名表达式的递归仍指向普通原函数，不递归调用已返回 render 的转换副本。
        const self = copy.id;
        copy.id = null;
        initializer = t.callExpression(t.arrowFunctionExpression([self], copy), [
          t.cloneNode(binding.path.node.id),
        ]);
      }
      const [inserted] = binding.path.insertAfter(
        t.variableDeclarator(t.cloneNode(setupReference), initializer),
      );
      if (inserted?.isVariableDeclarator()) {
        const value = inserted.get('init');
        if (value.isArrowFunctionExpression() || value.isFunctionExpression()) namedSetup = value;
        else if (value.isCallExpression()) {
          const copyPath = value.get('callee.body');
          if (copyPath.isFunctionExpression()) namedSetup = copyPath;
        }
      }
    }
  }
  if (!namedSetup && !setup.isArrowFunctionExpression() && !setup.isFunctionExpression())
    throw call.buildCodeFrameError(
      '[ZV_SETUP] _component 的 setup 必须是可分析的函数或局部常量函数。',
    );
  const fn = namedSetup ?? (setup as NodePath<t.ArrowFunctionExpression | t.FunctionExpression>);
  if (fn.node.generator)
    throw fn.buildCodeFrameError(
      '[ZV_SETUP] setup 不能是 generator；异步初始化使用 async 与 Vue Suspense。',
    );
  prepareDefaults(fn);
  const writable = writableModels(fn);
  const metadata = runtimeProps(call, fn.node, state);
  const first = fn.node.params[0];
  const contextParam = fn.node.params[1];
  const context = t.isIdentifier(contextParam)
    ? contextParam
    : fn.scope.generateUidIdentifier('context');
  const raw = fn.scope.generateUidIdentifier('rawProps');
  const props = fn.scope.generateUidIdentifier('props');
  const initializers: t.Statement[] = [];
  const defaults: t.ObjectProperty[] = [];
  const defaultProperties: { key: string; assignment: t.AssignmentPattern }[] = [];
  const consumed: string[] = [];

  if (first && !t.isIdentifier(first) && !t.isObjectPattern(first))
    throw fn.buildCodeFrameError('[ZV_PROPS] props 参数使用具名对象或顶层对象解构。');
  if (t.isObjectPattern(first)) {
    for (const property of first.properties) {
      if (t.isRestElement(property)) {
        if (!t.isIdentifier(property.argument))
          throw fn.buildCodeFrameError('[ZV_REST] rest 需要具名变量。');
        initializers.push(
          t.variableDeclaration('const', [
            t.variableDeclarator(
              t.cloneNode(property.argument),
              t.callExpression(addNamed(call, 'restProps', coreModule), [
                t.cloneNode(props),
                t.cloneNode(context),
                t.arrayExpression(
                  first.properties.flatMap((item) =>
                    t.isObjectProperty(item) ? [t.stringLiteral(propertyName(item) ?? '')] : [],
                  ),
                ),
              ]),
            ),
          ]),
        );
        continue;
      }
      if (!t.isObjectProperty(property))
        throw fn.buildCodeFrameError('[ZV_PROPS] props 解构不支持方法声明。');
      const key = propertyName(property);
      const local = t.isAssignmentPattern(property.value) ? property.value.left : property.value;
      if (!key || !t.isIdentifier(local))
        throw fn.buildCodeFrameError(
          '[ZV_PROPS] 嵌套或动态解构无法保留清楚的 prop 身份，请在 setup 中按普通 JS 显式处理。',
        );
      const binding = fn.scope.getBinding(local.name);
      if (binding?.constantViolations.length)
        throw fn.buildCodeFrameError(
          `[ZV_READONLY_PROP] ${local.name} 是只读 prop；可写 Ref 请修改 .value。`,
        );
      if (t.isAssignmentPattern(property.value)) {
        defaultProperties.push({ key, assignment: property.value });
      }
      for (const reference of binding?.referencePaths ?? []) {
        // object shorthand 必须展开；否则替换 value 会连带改写原属性名。
        if (reference.parentPath.isObjectProperty() && reference.parentPath.node.shorthand)
          reference.parentPath.node.shorthand = false;
        if (reference.isJSXIdentifier()) {
          if (!t.isValidIdentifier(key))
            throw reference.buildCodeFrameError(
              '[ZV_COMPONENT_PROP] 用作 JSX 标签的 prop 名称必须是合法标识符。',
            );
          reference.replaceWith(
            t.jsxMemberExpression(t.jsxIdentifier(props.name), t.jsxIdentifier(key)),
          );
        } else {
          const read = t.memberExpression(t.cloneNode(props), t.stringLiteral(key), true);
          const parent = reference.parentPath;
          const bareCall =
            ((parent.isCallExpression() || parent.isOptionalCallExpression()) &&
              reference.key === 'callee') ||
            (parent.isTaggedTemplateExpression() && reference.key === 'tag');
          // 解构出的普通回调保持无接收者调用，不能因改写成属性读取而改变 this。
          reference.replaceWith(
            bareCall ? t.sequenceExpression([t.numericLiteral(0), read]) : read,
          );
        }
      }
      consumed.push(key);
    }
  }

  // 引用替换结束后再读取默认表达式，包含 `b = a` 这种整个右值都是参数引用的情况。
  for (const item of defaultProperties)
    defaults.push(
      t.objectProperty(
        t.stringLiteral(item.key),
        t.arrowFunctionExpression([], item.assignment.right),
        true,
      ),
    );

  // metadata 只控制 Vue 的 props/attrs 分流与 Boolean 转换；实例默认值在 setup 内惰性求值。
  for (const key of consumed) {
    if (
      !metadata.properties.some((item) => t.isObjectProperty(item) && propertyName(item) === key)
    ) {
      metadata.properties.push(
        t.objectProperty(t.stringLiteral(key), t.objectExpression([]), true),
      );
    }
  }
  for (const item of metadata.properties) {
    if (!t.isObjectProperty(item)) continue;
    const key = propertyName(item);
    if (!t.isObjectExpression(item.value)) continue;
    if (key === 'children')
      item.value = t.objectExpression([t.objectProperty(t.identifier('type'), t.nullLiteral())]);
    if (defaults.some((value) => propertyName(value) === key)) {
      item.value.properties.push(
        t.objectProperty(t.identifier('default'), t.identifier('undefined')),
      );
    }
  }

  // 先划分作者代码，再加入自己的初始化，防止助手被放进 render 重复建立。
  lowerRender(fn);
  fn.node.extra = { ...fn.node.extra, zerodepAuthoring: true };
  const body = fn.node.body as t.BlockStatement;
  if (contextParam && !t.isIdentifier(contextParam)) {
    if (!t.isObjectPattern(contextParam))
      throw fn.buildCodeFrameError('[ZV_CONTEXT] setup context 使用具名对象或对象解构。');
    initializers.unshift(
      t.variableDeclaration('const', [t.variableDeclarator(contextParam, t.cloneNode(context))]),
    );
  }
  if (t.isIdentifier(first)) {
    initializers.unshift(
      t.variableDeclaration('const', [
        t.variableDeclarator(t.cloneNode(first), t.cloneNode(props)),
      ]),
    );
  }
  initializers.unshift(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.cloneNode(props),
        t.callExpression(addNamed(call, 'resolveProps', coreModule), [
          t.cloneNode(raw),
          t.cloneNode(context),
          t.objectExpression(defaults),
          t.arrayExpression(writable.map((name) => t.stringLiteral(name))),
        ]),
      ),
    ]),
  );
  body.body.unshift(...initializers);
  fn.node.params = [raw, context];

  const declaredName =
    call.parentPath.isVariableDeclarator() && t.isIdentifier(call.parentPath.node.id)
      ? call.parentPath.node.id.name
      : undefined;
  const options: (t.ObjectProperty | t.SpreadElement)[] = [];
  if (declaredName)
    options.push(t.objectProperty(t.identifier('name'), t.stringLiteral(declaredName)));
  // 作者通过 props/rest 决定转发位置；不因根节点或 spread 的写法恢复隐式透传。
  options.push(t.objectProperty(t.identifier('inheritAttrs'), t.booleanLiteral(false)));
  const extra = call.node.arguments[1];
  if (extra && t.isExpression(extra)) options.push(t.spreadElement(extra));
  const setupValue = setupReference ?? fn.node;
  if (!t.isExpression(setupValue))
    throw call.buildCodeFrameError('[ZV_SETUP] 私有 setup 副本缺少引用。');
  options.push(
    t.objectProperty(t.identifier('props'), metadata),
    t.objectProperty(t.identifier('setup'), setupValue),
  );
  call.replaceWith(
    t.callExpression(addNamed(call, 'createComponent', coreModule), [t.objectExpression(options)]),
  );
}

export function transformComponents(program: NodePath<t.Program>, state: State) {
  if (
    !program.node.body.some(
      (node) => t.isImportDeclaration(node) && node.source.value === '@zerodep-vue/core',
    )
  )
    return;
  program.traverse({
    CallExpression(call) {
      if (importedName(call.scope, call.node.callee, coreModule) === '_component')
        lower(call, state);
    },
  });
  program.scope.crawl();
}
