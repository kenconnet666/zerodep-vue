import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import ts from 'typescript';
import { fixtureRoot, sourceRoot } from './prepare.mjs';
import { productionFiles } from './inventory.mjs';

/** 仅发射真实上游源码声明供混用夹具使用；不以声明发射代替源码运行验收。 */
export function emitDeclarations(output) {
  const require = createRequire(import.meta.url);
  const options = {
    target: ts.ScriptTarget.ES2023,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    jsx: ts.JsxEmit.Preserve,
    strict: true,
    declaration: true,
    emitDeclarationOnly: true,
    noCheck: true,
    types: [],
    rootDir: resolve(sourceRoot, 'src'),
    outDir: resolve(output, 'types'),
    paths: {
      'naive-ui': [resolve(sourceRoot, 'src/index.ts')],
      '*': [resolve(fixtureRoot, 'node_modules/*')],
    },
  };
  const host = ts.createCompilerHost(options);
  const write = host.writeFile;
  let count = 0;
  host.writeFile = (file, data, ...rest) => {
    assert(
      !data.includes('.pnpm/') && !data.includes('.cache/upstream'),
      `Nonportable declaration: ${file}`,
    );
    count++;
    write(file, data, ...rest);
  };
  const program = ts.createProgram({
    rootNames: [
      ...productionFiles()
        .filter((file) => /\.tsx?$/.test(file))
        .map((file) => resolve(sourceRoot, file)),
      require.resolve('vue/jsx'),
    ],
    options,
    host,
  });
  const result = program.emit();
  assert(!result.emitSkipped, 'Naive declaration emission skipped.');
  assert.equal(
    result.diagnostics.length,
    0,
    ts.formatDiagnosticsWithColorAndContext(result.diagnostics, {
      getCanonicalFileName: (file) => file,
      getCurrentDirectory: () => fixtureRoot,
      getNewLine: () => '\n',
    }),
  );
  assert(count > 0, 'No Naive declarations emitted.');
  return count;
}
