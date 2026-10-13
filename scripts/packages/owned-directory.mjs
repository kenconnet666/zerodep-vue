import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import {
  lstat,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rmdir,
  unlink,
  writeFile,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';

const marker = '.zerodep-package-consumer.json';
export async function createOwnedDirectory() {
  const root = await mkdtemp(join(tmpdir(), 'zerodep-vue-consumer-'));
  const token = randomUUID();
  await writeFile(join(root, marker), JSON.stringify({ token }));
  return { root, token };
}

/** 仅删除本次创建并标记的临时目录；逐项检查，符号链接只 unlink，不跟随目标。 */
export async function removeOwnedDirectory(owned) {
  const root = resolve(owned.root);
  assert(!(await lstat(root)).isSymbolicLink(), 'Owned root was replaced by a link.');
  const canonical = await realpath(root);
  const normalize = (path) => (process.platform === 'win32' ? path.toLowerCase() : path);
  assert.equal(
    normalize(dirname(canonical)),
    normalize(await realpath(tmpdir())),
    'Cleanup root must be a direct child of the temporary directory.',
  );
  assert.equal(
    JSON.parse(await readFile(join(root, marker), 'utf8')).token,
    owned.token,
    'Owned directory marker mismatch.',
  );
  async function remove(path) {
    const subpath = relative(root, resolve(path));
    assert(
      subpath && subpath !== '..' && !subpath.startsWith('..' + sep) && !isAbsolute(subpath),
      'Cleanup target escaped the owned directory.',
    );
    const info = await lstat(path);
    if (info.isSymbolicLink() || !info.isDirectory()) await unlink(path);
    else {
      for (const entry of await readdir(path)) await remove(join(path, entry));
      await rmdir(path);
    }
  }
  for (const entry of await readdir(root)) if (entry !== marker) await remove(join(root, entry));
  await unlink(join(root, marker));
  await rmdir(root);
}
