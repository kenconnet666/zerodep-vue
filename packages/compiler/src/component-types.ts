import type { NodePath } from '@babel/core';
import template from '@babel/template';
import * as t from '@babel/types';
import {
  babelParse,
  extractRuntimeProps,
  registerTS,
  resolveTypeElements,
} from '@vue/compiler-sfc';
import type { SimpleTypeResolveContext } from '@vue/compiler-sfc';
import ts from 'typescript';
import type { State } from './upstream/interface.ts';

registerTS(() => ts);

type ParserStatement = ReturnType<typeof babelParse>['program']['body'][number];
type TypeNode =
  | Extract<ParserStatement, { type: 'TSTypeAliasDeclaration' }>['typeAnnotation']
  | NonNullable<Extract<ParserStatement, { type: 'TSTypeAliasDeclaration' }>['typeParameters']>;

function originalNode(
  tree: object,
  start: number | null | undefined,
  type: string,
): { node: TypeNode; ancestors: Record<string, unknown>[] } | undefined {
  if (start == null) return;
  const pending: { value: unknown; ancestors: Record<string, unknown>[] }[] = [
    { value: tree, ancestors: [] },
  ];
  const visited = new WeakSet<object>();
  while (pending.length) {
    const { value, ancestors } = pending.pop()!;
    if (!value || typeof value !== 'object') continue;
    if (visited.has(value)) continue;
    visited.add(value);
    const node = value as Record<string, unknown>;
    if (node.start === start && node.type === type) return { node: value as TypeNode, ancestors };
    for (const [key, item] of Object.entries(node)) {
      if (
        !key.startsWith('_') &&
        key !== 'loc' &&
        key !== 'extra' &&
        item &&
        typeof item === 'object'
      )
        pending.push({ value: item, ancestors: [...ancestors, node] });
    }
  }
}

/** 复用 Vue 的类型解析，支持导入类型与泛型容器，不实现第二套 TypeScript 类型系统。 */
export function runtimeProps(
  call: NodePath<t.CallExpression>,
  setup: t.ArrowFunctionExpression | t.FunctionExpression,
  state: State,
): t.ObjectExpression {
  const parameter = setup.params[0];
  const annotation = parameter && 'typeAnnotation' in parameter && parameter.typeAnnotation;
  const type =
    annotation && t.isTSTypeAnnotation(annotation)
      ? annotation.typeAnnotation
      : call.node.typeArguments?.params[0];
  if (!type) return t.objectExpression([]);
  // Babel 8 改变了类型参数字段。用 Vue 自己导出的 parser 读取同一源码并按位置对应，
  // 避免把不兼容 AST 强制断言后交给类型解析器；每个文件仅补充解析一次。
  let pristine = state.file.get('zerodep:vue-type-ast') as
    ReturnType<typeof babelParse> | undefined;
  if (!pristine) {
    pristine = babelParse(state.file.code, {
      sourceType: 'module',
      plugins: ['typescript', 'jsx'],
    });
    state.file.set('zerodep:vue-type-ast', pristine);
  }
  // Vue 类型解析会附加 _ownerScope 等循环引用；各组件使用私有副本，不能污染原始缓存。
  const parsed = structuredClone(pristine);
  const original = originalNode(parsed, type.start ?? type.loc?.start.index, type.type);
  if (!original) throw call.buildCodeFrameError('[ZV_PROPS_TYPE] 无法定位 props 的原始类型声明。');
  const context: Omit<SimpleTypeResolveContext, 'ast' | 'propsTypeDecl'> & {
    ast: ParserStatement[];
    propsTypeDecl: TypeNode;
  } = {
    filename: (state.file.opts.filename ?? 'component.tsx').replaceAll('\\', '/'),
    source: state.file.code,
    ast: parsed.program.body,
    options: { fs: { fileExists: ts.sys.fileExists, readFile: ts.sys.readFile }, isProd: false },
    isCE: false,
    propsTypeDecl: original.node,
    propsRuntimeDefaults: undefined,
    propsDestructuredBindings: {},
    emitsTypeDecl: undefined,
    helper(name) {
      throw call.buildCodeFrameError(`[ZV_TYPE_HELPER] 未预期的 props 类型助手：${name}`);
    },
    warn(message) {
      console.warn(`[zerodep-vue] ${message}`);
    },
    error(message) {
      throw call.buildCodeFrameError(`[ZV_PROPS_TYPE] ${message}`);
    },
    getString(node) {
      return state.file.code.slice(node.start ?? 0, node.end ?? 0);
    },
  };
  // 逐级让 Vue 建立真实词法作用域。直接把局部接口拼到根 ast 会错误地合并同名接口，
  // 还会让外层别名意外改用内层声明；各级 _ownerScope 必须保持独立。
  const bodies: ParserStatement[][] = [parsed.program.body];
  for (const ancestor of original.ancestors) {
    const parameters = ancestor.typeParameters as TypeNode | undefined;
    if (parameters?.type === 'TSTypeParameterDeclaration') {
      bodies.push(
        parameters.params.map((parameter) => ({
          type: 'TSTypeAliasDeclaration',
          id: { type: 'Identifier', name: parameter.name },
          typeAnnotation: parameter.constraint ?? { type: 'TSUnknownKeyword' },
        })),
      );
    }
    if (ancestor.type === 'BlockStatement' || ancestor.type === 'TSModuleBlock')
      bodies.push(ancestor.body as ParserStatement[]);
  }
  let parent: SimpleTypeResolveContext['scope'];
  for (const body of bodies) {
    const current = { ...context, ast: body } as unknown as SimpleTypeResolveContext;
    resolveTypeElements(current, { type: 'TSTypeLiteral', members: [] });
    if (parent) {
      Object.setPrototypeOf(current.scope!.types, parent.types);
      Object.setPrototypeOf(current.scope!.declares, parent.declares);
      Object.setPrototypeOf(current.scope!.imports, parent.imports);
    }
    parent = current.scope;
  }
  if (parent) context.scope = parent;
  // 固定 Vue 运行时读取 Babel 7 字段，声明中的 @babel/types 可能解析到 Babel 8。
  // 只在已校验 parser 来源的调用边界适配声明，绝不将 Babel 8 节点直接传进去。
  const code = extractRuntimeProps(context as unknown as SimpleTypeResolveContext);
  if (!code) return t.objectExpression([]);
  const expression = template.expression.ast(code);
  if (!t.isObjectExpression(expression))
    throw call.buildCodeFrameError('[ZV_PROPS_TYPE] props 类型必须能解析为具名属性。');
  return expression;
}
