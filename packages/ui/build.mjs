import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { transformAsync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import { babelPlugin } from '../compiler/src/index.ts';
import { files } from '../../scripts/build-utils.mjs';

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

// 测试只导入编译函数，直接执行脚本时才写入构建产物。
if (import.meta.main) {
  const root = fileURLToPath(new URL('./', import.meta.url));
  // 声明由前置 tsc 生成；JS 逐模块编译，避免打入第三方依赖或整套图标资源。
  for (const name of await files(join(root, 'src'))) {
    if (!/\.tsx?$/.test(name) || name.endsWith('.d.ts')) continue;
    const sourcePath = join(root, 'src', name);
    const outputPath = join(root, 'dist', name.replace(/\.tsx?$/, '.js'));
    const result = await emitModule(
      await readFile(sourcePath, 'utf8'),
      sourcePath,
      relative(dirname(outputPath), sourcePath).replaceAll('\\', '/'),
    );
    result.map.file = basename(outputPath);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(
      outputPath,
      `${result.code}\n//# sourceMappingURL=${basename(outputPath)}.map\n`,
    );
    await writeFile(`${outputPath}.map`, JSON.stringify(result.map));
  }
}
