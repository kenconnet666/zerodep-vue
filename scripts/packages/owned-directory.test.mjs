import assert from 'node:assert/strict';
import { mkdir, readFile, symlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';
import { createOwnedDirectory, removeOwnedDirectory } from './owned-directory.mjs';

test('scoped cleanup validates ownership and never follows a directory link', async () => {
  const owned = await createOwnedDirectory();
  const outside = await createOwnedDirectory();
  try {
    await writeFile(join(outside.root, 'keep.txt'), 'keep');
    await mkdir(join(owned.root, 'nested'));
    await writeFile(join(owned.root, 'nested/file.txt'), 'temporary');
    await symlink(
      outside.root,
      join(owned.root, 'link'),
      process.platform === 'win32' ? 'junction' : 'dir',
    );
    await assert.rejects(removeOwnedDirectory({ ...owned, token: 'wrong' }), /marker mismatch/);
    await removeOwnedDirectory(owned);
    assert.equal(await readFile(join(outside.root, 'keep.txt'), 'utf8'), 'keep');
  } finally {
    await removeOwnedDirectory(outside);
  }
});
