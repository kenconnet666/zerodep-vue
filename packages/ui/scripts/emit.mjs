import { transformAsync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import { babelPlugin } from '../../compiler/src/index.ts';

/** 与工具库共用真实 TSX 编译器；保留模块边界，所有 peer import 都交给使用方解析。 */
export async function emitModule(source, filename, sourceFileName) {
  const result = await transformAsync(source, {
    filename,
    sourceFileName,
    configFile: false,
    babelrc: false,
    plugins: [[babelPlugin, { optimize: true }]],
    presets: [[presetTypeScript, { rewriteImportExtensions: true }]],
    sourceMaps: true,
  });
  if (!result?.code || !result.map) throw new Error(`Missing UI emit or source map: ${filename}`);
  return { code: result.code, map: result.map };
}
