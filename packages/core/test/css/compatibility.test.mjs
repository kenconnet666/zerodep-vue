import assert from 'node:assert/strict';
import test from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

test('line-clamp vertical compatibility resolves without deprecation while obsolete layout values still warn', () => {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../../..');
  const file = resolve(root, 'packages/core/test/css/__compatibility_probe__.ts');
  const source = `import { createCssContext, SystemKeywords } from '../../src/index.ts';
const s = createCssContext(new SystemKeywords()).useCss();
s.WebkitBoxOrient('vertical');
s.WebkitBoxOrient('horizontal');
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
    const deprecated = service
      .getSuggestionDiagnostics(file)
      .filter(({ code }) => code === 6385 || code === 6387);
    assert.equal(deprecated.length, 1);
    assert(deprecated[0].start >= source.indexOf("s.WebkitBoxOrient('horizontal')"));
    const info = service.getQuickInfoAtPosition(file, source.indexOf('WebkitBoxOrient'));
    assert(info);
    assert(!info.tags?.some(({ name }) => name === 'deprecated'));
  } finally {
    service.dispose();
  }
});
