import assert from 'node:assert/strict';
import { mkdir, symlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';
import ts from 'typescript';
import { languageServiceHost } from '../../fixtures/package-consumer/template/language-service-host.mjs';
import { createOwnedDirectory, removeOwnedDirectory } from './owned-directory.mjs';

test('consumer language host follows isolated package links to transitive declarations', async () => {
  const owned = await createOwnedDirectory();
  const modules = join(owned.root, 'node_modules');
  const store = join(modules, '.pnpm/outer/node_modules');
  let service;
  try {
    for (const name of ['outer', 'inner']) {
      await mkdir(join(store, name), { recursive: true });
      await writeFile(
        join(store, name, 'package.json'),
        JSON.stringify({ name, version: '1.0.0', types: 'index.d.ts' }),
      );
    }
    await writeFile(join(store, 'outer/index.d.ts'), 'export { value } from "inner";');
    await writeFile(join(store, 'inner/index.d.ts'), 'export declare const value: number;');
    await symlink(
      join(store, 'outer'),
      join(modules, 'outer'),
      process.platform === 'win32' ? 'junction' : 'dir',
    );
    const file = join(owned.root, 'main.ts');
    const code = 'import { value } from "outer"; const result: number = value;';
    await writeFile(file, code);
    const options = {
      strict: true,
      noLib: true,
      noEmit: true,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      types: [],
    };
    service = ts.createLanguageService(languageServiceHost(ts, owned.root, [file], options));
    assert.deepEqual(service.getSemanticDiagnostics(file), []);
    const info = service.getQuickInfoAtPosition(file, code.lastIndexOf('value') + 1);
    assert(ts.displayPartsToString(info.displayParts).includes('number'));
  } finally {
    service?.dispose();
    await removeOwnedDirectory(owned);
  }
});
