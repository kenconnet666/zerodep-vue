import assert from 'node:assert/strict';
import { existsSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import ts from 'typescript';
import { languageServiceHost } from './language-service-host.mjs';

assert.equal(ts.version, '6.0.3');
const root = process.cwd();
const config = ts.readConfigFile(resolve('tsconfig.json'), ts.sys.readFile);
assert(!config.error);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
assert.equal(parsed.errors.length, 0);
const options = parsed.options;
const paths = parsed.fileNames;
assert(!options.customConditions?.includes('zerodep-vue-source'));
const host = languageServiceHost(ts, root, paths, options);
const service = ts.createLanguageService(host);
try {
  const program = service.getProgram();
  const diagnostics = ts.getPreEmitDiagnostics(program);
  assert.equal(
    diagnostics.length,
    0,
    ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCanonicalFileName: (file) => file,
      getCurrentDirectory: () => root,
      getNewLine: () => '\n',
    }),
  );
  const declarations = program
    .getSourceFiles()
    .filter((file) => file.fileName.includes('@zerodep-vue'));
  assert(declarations.length > 5);
  assert(
    declarations.every((file) => realpathSync(file.fileName).startsWith(realpathSync(root))),
    'Declaration resolution escaped the installed consumer.',
  );
  assert(
    declarations.every((file) => /\/dist\/.+\.d\.ts$/.test(file.fileName.replaceAll('\\', '/'))),
    'Type checking must consume dist declarations, not workspace or packaged source.',
  );
  const filename = resolve(root, 'types.tsx');
  const text = readFileSync(filename, 'utf8');
  const evidence = {};
  for (const name of ['flex', 'brand']) {
    let position = text.indexOf(`/*hover:${name}*/`) - 1;
    while (/\s/.test(text[position])) position--;
    const quick = service.getQuickInfoAtPosition(filename, position);
    assert(quick);
    const type = ts.displayPartsToString(quick.displayParts);
    const docs = ts.displayPartsToString(quick.documentation);
    assert(!/\bany\b/.test(type), `Lost type for ${name}: ${type}`);
    assert(/\p{Script=Han}/u.test(docs), `Missing Chinese JSDoc for ${name}.`);
    const definitions = service.getDefinitionAtPosition(filename, position);
    assert(definitions?.length);
    for (const entry of definitions) {
      assert(existsSync(entry.fileName));
      assert(
        realpathSync(entry.fileName).startsWith(realpathSync(root)),
        'Definition escaped installed consumer.',
      );
      assert(!entry.fileName.includes(process.env.ZV_FORBIDDEN_WORKSPACE));
    }
    const token = name === 'flex' ? 'css.keywords.display.' : 'themed.keywords.color.';
    const completionPosition = text.lastIndexOf(token, position) + token.length;
    const completions = service.getCompletionsAtPosition(filename, completionPosition, {});
    const member = name === 'flex' ? 'flex' : '_brand';
    assert(
      completions?.entries.some((entry) => entry.name === member),
      `Missing completion ${member}`,
    );
    const completion = completions.entries.find((entry) => entry.name === member);
    const detail = service.getCompletionEntryDetails(
      filename,
      completionPosition,
      member,
      {},
      completion.source,
      {},
      completion.data,
    );
    assert(
      detail && /\p{Script=Han}/u.test(ts.displayPartsToString(detail.documentation)),
      `Missing completion documentation for ${member}`,
    );
    evidence[name] = {
      type,
      docs,
      definitions: definitions.map((entry) => ({
        file: entry.fileName.replace(root, '.'),
        start: entry.textSpan.start,
      })),
      completion: ts.displayPartsToString(detail.displayParts),
    };
  }
  writeFileSync(
    'types-report.json',
    JSON.stringify(
      { typescript: ts.version, declarationFiles: declarations.length, diagnostics: 0, evidence },
      null,
      2,
    ),
  );
  console.log(
    'Packed declarations: types, generic inference, negative cases, hover, completion docs and definitions passed.',
  );
} finally {
  service.dispose();
}
