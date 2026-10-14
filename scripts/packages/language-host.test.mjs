import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { mkdir, symlink, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import ts from 'typescript';
import { languageServiceHost } from '../../fixtures/package-consumer/template/language-service-host.mjs';
import { createOwnedDirectory, removeOwnedDirectory } from './owned-directory.mjs';

test('emitted core root declaration loads JSX elements and generic children', () => {
  const directory = fileURLToPath(new URL('../../packages/core/src/', import.meta.url));
  const entry = join(directory, '__public-entry__.d.ts');
  const consumer = join(directory, '__declaration-consumer__.tsx');
  const source = readFileSync(join(directory, 'index.ts'), 'utf8');
  const emitted = ts.transpileDeclaration(source, { fileName: 'index.ts' });
  assert.deepEqual(emitted.diagnostics, []);
  const canonical = (file) => {
    const path = resolve(file).replaceAll('\\', '/');
    return ts.sys.useCaseSensitiveFileNames ? path : path.toLowerCase();
  };
  // 仅在内存中消费真实 index 的声明发射结果；不创建 dist 或改写工作区文件。
  const virtual = new Map([
    [canonical(entry), emitted.outputText],
    [
      canonical(consumer),
      `import {useCss, For} from './__public-entry__.js';
      export const rows = <For each={[{id: 1}]}>{row =>
        <span class={useCss().color('red')}>{row.id}</span>
      }</For>;
    `,
    ],
  ]);
  const options = {
    strict: true,
    noEmit: true,
    target: ts.ScriptTarget.ES2023,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    jsx: ts.JsxEmit.Preserve,
    allowImportingTsExtensions: true,
    types: [],
  };
  const host = ts.createCompilerHost(options);
  const { fileExists, getSourceFile } = host;
  host.fileExists = (file) => virtual.has(canonical(file)) || fileExists(file);
  host.getSourceFile = (file, languageVersion, ...rest) => {
    const code = virtual.get(canonical(file));
    return code === undefined
      ? getSourceFile(file, languageVersion, ...rest)
      : ts.createSourceFile(file, code, languageVersion, true);
  };
  const program = ts.createProgram([consumer], options, host);
  const diagnostics = program.getSemanticDiagnostics(program.getSourceFile(consumer));
  assert.deepEqual(
    diagnostics.map((item) => ts.flattenDiagnosticMessageText(item.messageText, '\n')),
    [],
  );
});

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
