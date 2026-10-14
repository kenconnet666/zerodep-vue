import assert from 'node:assert/strict';
import { existsSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import ts from 'typescript';
import { createRequire } from 'node:module';
import { languageServicePlugin } from '@zerodep-vue/compiler';
import { languageServiceHost } from './language-service-host.mjs';

assert.equal(ts.version, '6.0.3');
const root = process.cwd();
const config = ts.readConfigFile(resolve('tsconfig.json'), ts.sys.readFile);
assert(!config.error);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
assert.equal(parsed.errors.length, 0);
const options = parsed.options;
const paths = parsed.fileNames;
assert(!config.config.extends, 'Installed consumer must not inherit workspace configuration.');
assert(
  !options.paths && !options.baseUrl,
  'Installed consumer must not use workspace path aliases.',
);
assert(!options.customConditions?.includes('zerodep-vue-source'));
const host = languageServiceHost(ts, root, paths, options);
const init = createRequire(import.meta.url)(
  ts.resolveJSModule('@zerodep-vue/compiler/src/editor/plugin.cjs', root, ts.sys),
);
assert.equal(
  init,
  languageServicePlugin,
  'Root export and tsserver must share one editor implementation.',
);
const service = init({ typescript: ts }).create({
  languageService: ts.createLanguageService(host),
});
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
  for (const [name, token, member] of [
    ['flex', 'keywords.display.', 'flex'],
    ['brand', 'themedKeywords.color.', '_brand'],
    ['genericBrand', 'keywords.color.', '_brand'],
    ['genericFlex', 'keywords.display.', 'flex'],
    ['preserve3d', 'keywords.transformStyle.', 'preserve3d'],
  ]) {
    const marker = text.indexOf(`/*hover:${name}*/`);
    assert(marker > 0, `Missing probe marker ${name}`);
    let position = marker - 1;
    // 格式化器可把尾随注释放到分号之后；查询应落在成员名上。
    while (/[\s;]/.test(text[position])) position--;
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
    const completionPosition = text.lastIndexOf(token, position) + token.length;
    const completions = service.getCompletionsAtPosition(filename, completionPosition, {});
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
  for (const [marker, value] of [
    ['font', 'inherit'],
    ['display', 'inline-flex'],
    ['conditional', 'inline-flex'],
    ['binding', 'relative'],
    ['assertion', 'border-box'],
    ['transform', 'preserve-3d'],
    ['themeBrand', '_brand'],
  ]) {
    const end = text.indexOf('// literal:' + marker);
    assert(end > 0);
    const close = text.lastIndexOf("'", end);
    const position = text.lastIndexOf("'", close - 1) + 2;
    const hover = service.getQuickInfoAtPosition(filename, position);
    assert(/\p{Script=Han}/u.test(ts.displayPartsToString(hover?.documentation)));
    const completions = service.getCompletionsAtPosition(filename, position, {});
    assert(completions?.entries.some((entry) => entry.name === value));
    const details = service.getCompletionEntryDetails(filename, position, value, {});
    assert(/\p{Script=Han}/u.test(ts.displayPartsToString(details?.documentation)));
    const definitions = service.getDefinitionAtPosition(filename, position);
    assert.equal(definitions?.length, 1);
    assert(realpathSync(definitions[0].fileName).startsWith(realpathSync(root)));
    assert(
      definitions[0].fileName
        .replaceAll('\\', '/')
        .endsWith(marker === 'themeBrand' ? '/App.tsx' : '/dist/css/generated/literal-values.d.ts'),
    );
    evidence['literal-' + marker] = {
      docs: ts.displayPartsToString(hover.documentation),
      definition: definitions[0].fileName.replace(root, '.'),
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
