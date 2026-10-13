import { execFileSync } from 'node:child_process';
import { mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const fixtureRoot = dirname(fileURLToPath(import.meta.url));
export const root = resolve(fixtureRoot, '../..');
export const sourceRoot = resolve(root, '.cache/upstream/naive-ui');
export const source = JSON.parse(await readFile(new URL('./source.json', import.meta.url), 'utf8'));

export function git(args, options = {}) {
  return execFileSync('git', ['-C', sourceRoot, ...args], {
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
    ...options,
  });
}

/** 只取得固定提交，不执行上游安装、prepare、clean 或发布脚本。 */
export async function prepare() {
  let head;
  try {
    head = git(['rev-parse', 'HEAD'], { stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {}
  if (head && head !== source.commit)
    throw new Error(
      `Naive source cache is at ${head}, expected ${source.commit}; refusing to reset existing checkout.`,
    );
  if (!head) {
    await mkdir(sourceRoot, { recursive: true });
    git(['init', '--quiet']);
    git(['fetch', '--depth', '1', source.repository, source.commit], { stdio: 'inherit' });
    git(['checkout', '--detach', '--quiet', 'FETCH_HEAD']);
  }
  if (git(['rev-parse', 'HEAD']).trim() !== source.commit)
    throw new Error('Naive source revision mismatch.');
  if (git(['status', '--porcelain', '--untracked-files=no']).trim())
    throw new Error('Naive source contains modifications; restore intentionally before verifying.');
  const manifest = JSON.parse(await readFile(resolve(sourceRoot, 'package.json'), 'utf8'));
  if (manifest.version !== source.version)
    throw new Error('Naive source package version mismatch.');
  return manifest;
}
