import { transformAsync, types as t } from '@babel/core';
import type { PluginItem, PluginObject } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import { createHash } from 'node:crypto';
import { relative } from 'node:path';
import { createFilter, normalizePath } from 'vite';
import type { FilterPattern, Plugin } from 'vite';
import jsx from './index.ts';
import type { CompilerOptions } from './index.ts';

/** Vue VDOM TSX 的 Vite 入口；与 Babel 入口共享全部 JSX 选项。 */
export interface ViteOptions extends CompilerOptions {
  /** 需要处理的文件；默认接入 JS/TSX，普通 TS 仅在引用自有工具时处理。 */
  include?: FilterPattern;
  /** 显式排除的源文件。 */
  exclude?: FilterPattern;
  /** 同一 Babel 遍历中的附加插件；不要再加入另一份 JSX lowering。 */
  babelPlugins?: PluginItem[];
}

interface ComponentExport {
  local: string;
  exported: string;
}

const ssrId = '\0zerodep-vue:ssr-register';
const ssrPublicId = 'virtual:zerodep-vue/ssr-register';
const ssrCode = `import { useSSRContext } from 'vue';
export function register(component, filename) {
  const setup = component.setup;
  component.setup = function(props, context) {
    const ssr = useSSRContext();
    if (ssr) (ssr.modules || (ssr.modules = new Set())).add(filename);
    return setup?.call(this, props, context);
  };
}`;

/**
 * HMR/SSR 的组件发现参考官方 vite-plugin-vue-jsx 的固定快照。
 * 使用 import binding 身份识别 defineComponent，避免误改同名业务函数。
 */
function componentMetadata(exports: ComponentExport[]): PluginObject {
  return {
    visitor: {
      Program: {
        exit(program) {
          const isComponent = (node: t.Node | null | undefined): boolean => {
            if (!t.isCallExpression(node)) return false;
            if (!t.isIdentifier(node.callee)) return false;
            const binding = program.scope.getBinding(node.callee.name);
            if (!binding?.path.isImportSpecifier()) return false;
            const parent = binding.path.parentPath;
            if (!parent.isImportDeclaration()) return false;
            const imported = binding.path.node.imported;
            const name = t.isIdentifier(imported) ? imported.name : imported.value;
            return (
              (parent.node.source.value === 'vue' && name === 'defineComponent') ||
              (parent.node.source.value === '@zerodep-vue/tsx' && name === '_component') ||
              (parent.node.source.value === '@zerodep-vue/tsx/runtime' &&
                name === 'createComponent')
            );
          };

          // 匿名 default 导出先获得稳定的局部引用，供 Vue HMR 和 SSR 注册使用。
          for (const statement of program.get('body')) {
            if (!statement.isExportDefaultDeclaration() || !isComponent(statement.node.declaration))
              continue;
            const name = program.scope.generateUidIdentifier('component');
            statement.replaceWithMultiple([
              t.variableDeclaration('const', [
                t.variableDeclarator(name, statement.node.declaration as t.CallExpression),
              ]),
              t.exportDefaultDeclaration(t.cloneNode(name)),
            ]);
          }
          const locals = new Set<string>();
          for (const statement of program.node.body) {
            const declaration = t.isExportNamedDeclaration(statement)
              ? statement.declaration
              : statement;
            if (!t.isVariableDeclaration(declaration)) continue;
            for (const item of declaration.declarations) {
              if (!t.isIdentifier(item.id) || !isComponent(item.init)) continue;
              locals.add(item.id.name);
              if (item.init) t.addComment(item.init, 'leading', '#__PURE__');
            }
          }
          for (const statement of program.node.body) {
            if (
              t.isExportDefaultDeclaration(statement) &&
              t.isIdentifier(statement.declaration) &&
              locals.has(statement.declaration.name)
            ) {
              exports.push({ local: statement.declaration.name, exported: 'default' });
            } else if (t.isExportNamedDeclaration(statement)) {
              if (t.isVariableDeclaration(statement.declaration)) {
                for (const item of statement.declaration.declarations) {
                  if (t.isIdentifier(item.id) && locals.has(item.id.name))
                    exports.push({ local: item.id.name, exported: item.id.name });
                }
              }
              if (statement.source) continue;
              for (const specifier of statement.specifiers) {
                if (
                  t.isExportSpecifier(specifier) &&
                  t.isIdentifier(specifier.local) &&
                  locals.has(specifier.local.name)
                )
                  exports.push({
                    local: specifier.local.name,
                    exported: t.isIdentifier(specifier.exported)
                      ? specifier.exported.name
                      : specifier.exported.value,
                  });
              }
            }
          }
        },
      },
    },
  };
}

/** 替换项目现有 Vue JSX 插件；Vue SFC 插件可按项目需要继续使用。 */
export default function vueTsx(options: ViteOptions = {}): Plugin {
  const { include = /\.[jt]sx?$/, exclude, babelPlugins = [], ...jsxOptions } = options;
  const filter = createFilter(include, exclude);
  let root = '';
  let development = false;
  let sourceMaps = true;
  return {
    name: 'zerodep-vue:tsx',
    enforce: 'pre',
    config(config) {
      return {
        oxc: { jsx: 'preserve' },
        resolve: { dedupe: ['vue'] },
        define: {
          __VUE_OPTIONS_API__: config.define?.__VUE_OPTIONS_API__ ?? true,
          __VUE_PROD_DEVTOOLS__: config.define?.__VUE_PROD_DEVTOOLS__ ?? false,
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__:
            config.define?.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ ?? false,
        },
      };
    },
    configResolved(config) {
      root = config.root;
      development = config.command === 'serve' && !config.isProduction;
      sourceMaps = config.command === 'serve' || !!config.build.sourcemap;
      if (config.plugins.some((plugin) => plugin.name === 'vite:vue-jsx')) {
        throw new Error('zerodep-vue: 请用本插件替换 vite:vue-jsx，避免同一 TSX 被重复转换。');
      }
    },
    resolveId(id) {
      if (id === ssrPublicId) return ssrId;
    },
    load(id) {
      if (id === ssrId) return ssrCode;
    },
    async transform(code, id, context) {
      const file = id.split('?', 1)[0]!;
      if (!filter(file)) return;
      if (!/\.[jt]sx$/.test(file) && !code.includes('@zerodep-vue/')) return;
      const exports: ComponentExport[] = [];
      const result = await transformAsync(code, {
        filename: file,
        sourceFileName: normalizePath(file),
        configFile: false,
        babelrc: false,
        sourceMaps,
        plugins: [[jsx, jsxOptions], ...babelPlugins, () => componentMetadata(exports)],
        presets: /\.tsx?$/.test(file) ? [presetTypeScript] : [],
      });
      if (!result?.code) return;
      let output = result.code;
      if (context?.ssr && exports.length) {
        output += `\nimport { register as __zdRegister } from ${JSON.stringify(ssrPublicId)};`;
        for (const component of new Set(exports.map((item) => item.local))) {
          output += `\n__zdRegister(${component}, ${JSON.stringify(normalizePath(relative(root, file)))});`;
        }
      } else if (development && exports.length) {
        const updates: string[] = [];
        for (const item of exports) {
          const key = createHash('sha256')
            .update(normalizePath(file) + ':' + item.exported)
            .digest('hex')
            .slice(0, 16);
          output += `\n${item.local}.__file = ${JSON.stringify(normalizePath(file))};`;
          output += `\n${item.local}.__hmrId = ${JSON.stringify(key)};`;
          output += `\n__VUE_HMR_RUNTIME__.createRecord(${JSON.stringify(key)}, ${item.local});`;
          updates.push(
            `__VUE_HMR_RUNTIME__.reload(${JSON.stringify(key)}, updated[${JSON.stringify(item.exported)}]);`,
          );
        }
        output += `\nif (import.meta.hot) import.meta.hot.accept((updated) => { if (updated) { ${updates.join('\n')} } });`;
      }
      return { code: output, map: result.map ? JSON.stringify(result.map) : null };
    },
  };
}

export { vueTsx as 'module.exports' };
