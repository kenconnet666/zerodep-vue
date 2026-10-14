import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { files } from '../../../scripts/packages/common.mjs';
import { emitModule } from './emit.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
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
  await writeFile(outputPath, `${result.code}\n//# sourceMappingURL=${basename(outputPath)}.map\n`);
  await writeFile(`${outputPath}.map`, JSON.stringify(result.map));
}
