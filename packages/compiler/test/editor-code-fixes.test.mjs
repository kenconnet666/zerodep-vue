import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import test from 'node:test';
import ts from 'typescript';

test('stale argument-count fixes cannot crash editing while current native fixes remain available', () => {
  const file = resolve('editor-code-fixes-probe.ts');
  let source =
    'class Css { color(value: string, opacity: number) { return this; } }\nconst s = new Css();\ns.color("red");';
  let version = 0;
  const service = ts.createLanguageService({
    getScriptFileNames: () => [file],
    getScriptVersion: () => String(version),
    getScriptSnapshot: (path) => {
      const text = resolve(path) === file ? source : ts.sys.readFile(path);
      return text === undefined ? undefined : ts.ScriptSnapshot.fromString(text);
    },
    getCurrentDirectory: () => process.cwd(),
    getCompilationSettings: () => ({ strict: true, target: ts.ScriptTarget.ESNext, types: [] }),
    getDefaultLibFileName: ts.getDefaultLibFilePath,
    fileExists: (path) => resolve(path) === file || ts.sys.fileExists(path),
    readFile: (path) => (resolve(path) === file ? source : ts.sys.readFile(path)),
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  });
  const plugin = createRequire(import.meta.url)('../src/editor/plugin.cjs');
  const enhanced = plugin({ typescript: ts }).create({ languageService: service });
  try {
    const old = service.getSemanticDiagnostics(file).find((item) => item.code === 2554);
    assert(old);
    const start = old.start;
    const end = start + old.length;
    source = source.replace('s.color(', 's.co(');
    version++;
    const current = service.getSemanticDiagnostics(file).find((item) => item.code === 2339);
    assert(current);
    // 真实 IDE 日志中的过期范围和错误码组合，在固定的 TS 6.0.3 上会触发这个异常。
    assert.throws(
      () => service.getCodeFixesAtPosition(file, start, end, [2554], {}, {}),
      /reading 'declarations'/,
    );
    assert.deepEqual(enhanced.getCodeFixesAtPosition(file, start, end, [2554], {}, {}), []);
    const missingMember = service.getCodeFixesAtPosition(file, start, end, [2339], {}, {});
    assert(missingMember.length > 0);
    assert.deepEqual(
      enhanced.getCodeFixesAtPosition(file, start, end, [2554, 2339], {}, {}),
      missingMember,
    );
    assert.deepEqual(enhanced.getSemanticDiagnostics(file), service.getSemanticDiagnostics(file));

    source = 'class Css { color() { return this; } }\nconst s = new Css();\ns.color("red");';
    version++;
    const valid = service.getSemanticDiagnostics(file).find((item) => item.code === 2554);
    assert(valid);
    const expected = service.getCodeFixesAtPosition(
      file,
      valid.start,
      valid.start + valid.length,
      [2554],
      {},
      {},
    );
    assert(expected.length > 0);
    assert.deepEqual(
      enhanced.getCodeFixesAtPosition(
        file,
        valid.start,
        valid.start + valid.length,
        [2554],
        {},
        {},
      ),
      expected,
    );
  } finally {
    service.dispose();
  }
});
