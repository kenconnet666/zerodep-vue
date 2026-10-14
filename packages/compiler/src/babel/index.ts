// 普通 TSX 使用固定上游的真实源码；自有增强在独立模块接入，避免全局改写旧语义。
import { declare } from '@babel/helper-plugin-utils';
import type { NodePath, Visitor } from '@babel/core';
import type * as t from '@babel/types';
import upstream from '../upstream/index.ts';
import type { State, VueJSXPluginOptions } from '../upstream/interface.ts';
import { transformComponents } from '../transforms/component/index.ts';
import { connectCss, transformCss } from '../transforms/css.ts';
import type { CssOptions } from '../transforms/css.ts';

export interface CompilerOptions extends VueJSXPluginOptions {
  /** 自有增强的配置；普通上游选项保持原有含义。 */
  zerodep?: CssOptions;
}

const plugin = declare<State, CompilerOptions>((api, options, dirname) => {
  const base = upstream(api, options, dirname);
  // 固定上游在 Program.enter 注册 helper；自有 lowering 必须在其 JSX visitor 消费节点前完成。
  const program = base.visitor!.Program as { enter(path: NodePath<t.Program>, state: State): void };
  return {
    ...base,
    name: 'zerodep-vue:jsx',
    visitor: {
      ...base.visitor,
      Program: {
        enter(path, state) {
          transformComponents(path, state);
          const runtime = transformCss(path, state, options.zerodep);
          program.enter(path, state);
          if (runtime) connectCss(path, state, runtime);
        },
      },
    } as Visitor<State>,
  };
});
export default plugin;
export type { VueJSXPluginOptions } from '../upstream/interface.ts';
