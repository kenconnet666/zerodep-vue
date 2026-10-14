import assert from 'node:assert/strict';
import { mkdir, readFile, realpath, symlink, writeFile } from 'node:fs/promises';
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

test('temporary consumers return a canonical path even when the temp parent is aliased', async () => {
  const parent = await createOwnedDirectory();
  const actual = join(parent.root, 'long-temporary-parent');
  const alias = join(parent.root, 'alias');
  const variable = process.platform === 'win32' ? 'TEMP' : 'TMPDIR';
  const original = process.env[variable];
  let child;
  try {
    await mkdir(actual);
    await symlink(actual, alias, process.platform === 'win32' ? 'junction' : 'dir');
    process.env[variable] = alias;
    child = await createOwnedDirectory();
    assert.equal(child.root, await realpath(child.root));
    assert(!child.root.includes(alias));
    await removeOwnedDirectory(child);
    child = undefined;
  } finally {
    if (child) await removeOwnedDirectory(child);
    if (original === undefined) delete process.env[variable];
    else process.env[variable] = original;
    await removeOwnedDirectory(parent);
  }
});
