import assert from 'node:assert/strict';
import test from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { createRequire } from 'node:module';

test('line-clamp object declarations retain supported vertical and deprecated layout documentation', () => {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../../..');
  const file = resolve(root, 'packages/core/test/css/__compatibility_probe__.ts');
  const source = `import { createCssContext, SystemKeywords } from '../../src/index.ts';
const css = createCssContext(new SystemKeywords()).useCss();
css({ WebkitBoxOrient: 'vertical' });
css({ WebkitBoxOrient: 'horizontal' });
`;
  const config = ts.readConfigFile(resolve(root, 'tsconfig.base.json'), ts.sys.readFile);
  const { options } = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
  const readFile = (path) => (resolve(path) === file ? source : ts.sys.readFile(path));
  const service = ts.createLanguageService({
    getScriptFileNames: () => [file],
    getScriptVersion: () => '1',
    getScriptSnapshot: (path) => {
      const text = readFile(path);
      return text === undefined ? undefined : ts.ScriptSnapshot.fromString(text);
    },
    getCurrentDirectory: () => root,
    getCompilationSettings: () => options,
    getDefaultLibFileName: ts.getDefaultLibFilePath,
    fileExists: (path) => resolve(path) === file || ts.sys.fileExists(path),
    readFile,
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  });
  try {
    assert.deepEqual(service.getSyntacticDiagnostics(file), []);
    assert.deepEqual(service.getSemanticDiagnostics(file), []);
    const plugin = createRequire(import.meta.url)('../../../compiler/src/editor/plugin.cjs');
    const enhanced = plugin({ typescript: ts }).create({ languageService: service });
    const position = source.indexOf('WebkitBoxOrient');
    const info = enhanced.getCompletionEntryDetails(
      file,
      position,
      'WebkitBoxOrient',
      {},
      undefined,
      {},
    );
    assert(info);
    assert(!info.tags?.some(({ name }) => name === 'deprecated'));
    assert(ts.displayPartsToString(info.documentation).includes('多行省略'));
    const vertical = enhanced.getQuickInfoAtPosition(file, source.indexOf("'vertical'") + 2);
    const horizontal = enhanced.getQuickInfoAtPosition(file, source.indexOf("'horizontal'") + 2);
    assert(!vertical.tags?.some(({ name }) => name === 'deprecated'));
    assert(horizontal.tags?.some(({ name }) => name === 'deprecated'));
  } finally {
    service.dispose();
  }
});
