import type { NodePath } from '@babel/core';
import * as t from '@babel/types';
import type { State } from '../upstream/interface.ts';
import { coreModule, importedName, runtimeImports } from './bindings.ts';

/** 显式开启可处理只导入共享样式的普通 Vue 文件；省略时按 core 导入自动接入。 */
export interface CssOptions {
  css?: boolean;
}

/** 只接管 CSS/克隆边界；普通模板字符串、加法和函数求值保留 JavaScript 语义。 */
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
  program.traverse({
    ReferencedIdentifier(path) {
      if (importedName(path.scope, path.node, 'vue') === 'cloneVNode')
        path.replaceWith(helper('cloneCssVNode'));
    },
    MemberExpression(path) {
      if (importedName(path.scope, path.node, 'vue') === 'cloneVNode')
        path.replaceWith(helper('cloneCssVNode'));
    },
  });
  program.scope.crawl();
  return true;
}

export function connectCss(program: NodePath<t.Program>, state: State) {
  const helper = runtimeImports(program);
  const ordinary = state.get('createVNode');
  state.set('zerodep:createVNode', (path: NodePath<t.JSXElement>) => {
    const name = path.node.openingElement.name;
    const dynamicTag =
      t.isJSXMemberExpression(name) || (t.isJSXIdentifier(name) && /^[A-Z_$]/.test(name.name));
    const potential =
      dynamicTag ||
      path.node.openingElement.attributes.some(
        (attribute) =>
          t.isJSXSpreadAttribute(attribute) ||
          (t.isJSXIdentifier(attribute.name) &&
            (attribute.name.name === 'css' ||
              attribute.name.name === 'children' ||
              /^slot[A-Z]/.test(attribute.name.name))),
      );
    return potential ? helper('createCssVNode') : ordinary();
  });
  state.set('mergeProps', () => helper('mergeAttrs'));
}
