import path from 'node:path';

/** relative 在跨 Windows 盘符时返回绝对路径；不能只依赖 .. 判断目录外部。 */
export function outsideDirectory(root, candidate, paths = path) {
  const relative = paths.relative(root, candidate);
  return paths.isAbsolute(relative) || relative === '..' || relative.startsWith('..' + paths.sep);
}
