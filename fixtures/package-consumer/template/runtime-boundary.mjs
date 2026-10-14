import assert from 'node:assert/strict';
import { parseAsync, types as t } from '@babel/core';

const normalized = (id) => id.replaceAll('\\', '/').split('?')[0];
const buildDependency = (id) =>
  /(?:^|\/)(?:@zerodep-vue\/compiler|@babel\/[^/]+|typescript|@vue\/compiler-(?:sfc|core|dom|ssr)|vite|rolldown)(?:\/|$)/.test(
    normalized(id),
  ) || /(?:^|\/)packages\/compiler\/(?:src|dist)\//.test(normalized(id));
const developmentDependency = (id) =>
  /(?:^|\/)(?:@zerodep-vue\/core|packages\/core)\/(?:(?:src|dist)\/css\/)?(?:devtools|hmr)(?:\.|\/|$)/.test(
    normalized(id),
  );

function dependency(id, label) {
  assert(!buildDependency(id), `${label}: build dependency in runtime output: ${id}`);
  assert(
    !developmentDependency(id),
    `${label}: development dependency in production output: ${id}`,
  );
}

/** 检查实际依赖语法，不把 source map 路径、注释或普通业务字符串当作模块导入。 */
export async function assertRuntimeCode(code, label) {
  const ast = await parseAsync(code, {
    sourceType: 'unambiguous',
    babelrc: false,
    configFile: false,
  });
  assert(ast, `No parsed runtime output: ${label}`);
  t.traverseFast(ast, (node) => {
    let source;
    if (
      t.isImportDeclaration(node) ||
      t.isExportNamedDeclaration(node) ||
      t.isExportAllDeclaration(node)
    )
      source = node.source;
    else if (t.isImportExpression(node)) source = node.source;
    else if (
      t.isCallExpression(node) &&
      (t.isIdentifier(node.callee, { name: 'require' }) || t.isImport(node.callee))
    )
      source = node.arguments[0];
    if (t.isStringLiteral(source)) dependency(source.value, label);
  });
  return ast;
}

/** 外部依赖看 imports，打入 bundle 的依赖看实际参与输出的模块，二者分别校验。 */
export async function assertRuntimeChunks(result, label) {
  const chunks = (Array.isArray(result) ? result : [result])
    .flatMap((item) => item.output)
    .filter((item) => item.type === 'chunk');
  assert(chunks.length, `${label}: no emitted chunks`);
  for (const chunk of chunks) {
    const location = `${label}/${chunk.fileName}`;
    for (const id of [...chunk.imports, ...chunk.dynamicImports]) dependency(id, location);
    for (const [id, info] of Object.entries(chunk.modules))
      if (info.renderedLength > 0) dependency(id, location);
    const ast = await assertRuntimeCode(chunk.code, location);
    t.traverseFast(ast, (node) => {
      if (t.isStringLiteral(node))
        assert(
          !['zerodep-vue-core', '__zerodepHmr'].includes(node.value),
          `Development registry in ${location}`,
        );
    });
  }
  return chunks;
}
