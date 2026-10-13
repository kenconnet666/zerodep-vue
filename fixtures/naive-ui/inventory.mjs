import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { fixtureRoot, git, prepare, source, sourceRoot } from './prepare.mjs';

export const excluded = [
  'src/**/tests/** and src/**/__tests__/**: upstream test suites',
  'src/**/demos/**: documentation examples',
  'src/**/*.spec.* and src/**/*.test.*: test entries',
  'src/vitest-setup.ts: test environment',
  '**/*.d.ts: declaration-only files',
];

export function productionFiles() {
  return git(['ls-tree', '-r', '--name-only', '-z', source.commit, '--', 'src'])
    .split('\0')
    .filter(Boolean)
    .filter(
      (file) =>
        !/(?:^|\/)(?:tests|__tests__|demos)(?:\/|$)/.test(file) &&
        !/\.(?:spec|test)\./.test(file) &&
        file !== 'src/vitest-setup.ts' &&
        !file.endsWith('.d.ts') &&
        /\.(?:tsx?|m?js|json|css|svg)$/.test(file),
    )
    .sort();
}

export async function inventory() {
  const files = [];
  for (const path of productionFiles().filter((file) => file.endsWith('.tsx'))) {
    const content = (await readFile(resolve(sourceRoot, path), 'utf8')).replaceAll('\r\n', '\n');
    files.push({ path, sha256: createHash('sha256').update(content).digest('hex') });
  }
  if (!files.length)
    throw new Error('No production TSX found; source verification cannot be empty.');
  return { source, excluded, count: files.length, files };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await prepare();
  const result = await inventory();
  const path = resolve(fixtureRoot, 'production-tsx.json');
  if (process.argv.includes('--write'))
    await writeFile(path, JSON.stringify(result, null, 2) + '\n');
  else if (JSON.stringify(JSON.parse(await readFile(path, 'utf8'))) !== JSON.stringify(result))
    throw new Error('Production TSX inventory differs from the reviewed manifest.');
  console.log(
    `Naive UI ${source.version}: ${result.count} production TSX files at ${source.commit}.`,
  );
}
