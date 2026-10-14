import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { languageServiceHost } from '../../../fixtures/package-consumer/template/language-service-host.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const init = createRequire(import.meta.url)('../language-service/index.cjs');

test('CSS literal completion documentation and navigation use real generated declarations', () => {
  assert.equal(ts.version, '6.0.3');
  const configPath = resolve(root, 'fixtures/authoring/tsconfig.json');
  const config = ts.readConfigFile(configPath, ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, dirname(configPath));
  const filename = resolve(root, 'fixtures/authoring/src/literal-types.tsx');
  const host = languageServiceHost(ts, root, [filename], parsed.options);
  const source =
    ts.sys.readFile(filename) +
    String.raw`
export const escapedLiteral = css({ font: 'in\u0068erit' }); // literal:escaped
export const freeString = css({ font: '18px system-ui' }); // literal:free
export const ordinaryObject = { font: 'inherit' }; // literal:ordinary
`;
  const snapshot = host.getScriptSnapshot.bind(host);
  host.getScriptSnapshot = (file) =>
    resolve(file) === filename ? ts.ScriptSnapshot.fromString(source) : snapshot(file);
  const service = ts.createLanguageService(host);
  const enhanced = init({ typescript: ts }).create({ languageService: service });
  try {
    assert.deepEqual(enhanced.getSemanticDiagnostics(filename), []);
    for (const [marker, value] of Object.entries({
      font: 'inherit',
      display: 'inline-flex',
      nested: 'red',
      media: 'relative',
      named: 'grid',
      object: 'center',
      generic: 'inherit',
      escaped: 'inherit',
    })) {
      const end = source.indexOf('// literal:' + marker);
      assert(end > 0, marker);
      const close = source.lastIndexOf("'", end);
      const start = source.lastIndexOf("'", close - 1) + 1;
      const position = start + 1;
      const hover = enhanced.getQuickInfoAtPosition(filename, position);
      assert(/\p{Script=Han}/u.test(ts.displayPartsToString(hover?.documentation)), marker);
      assert.equal(hover.textSpan.length, close - start, marker);
      const completions = enhanced.getCompletionsAtPosition(filename, position, {});
      assert(
        completions?.entries.some((entry) => entry.name === value),
        marker,
      );
      const details = enhanced.getCompletionEntryDetails(filename, position, value, {});
      assert(/\p{Script=Han}/u.test(ts.displayPartsToString(details?.documentation)), marker);
      const definitions = enhanced.getDefinitionAndBoundSpan(filename, position)?.definitions;
      assert.equal(definitions?.length, 1, marker);
      assert(
        definitions[0].fileName.replaceAll('\\', '/').endsWith('/generated/literal-values.ts'),
      );
      const target = service.getProgram().getSourceFile(definitions[0].fileName);
      let targetMember;
      function find(node) {
        if (ts.isPropertySignature(node) && node.name.getStart() === definitions[0].textSpan.start)
          targetMember = node;
        ts.forEachChild(node, find);
      }
      find(target);
      assert.equal(targetMember?.type?.literal?.text, value);
    }
    for (const marker of ['ordinary', 'free']) {
      const end = source.indexOf('// literal:' + marker);
      const position = source.lastIndexOf("'", source.lastIndexOf("'", end) - 1) + 2;
      assert.deepEqual(
        enhanced.getQuickInfoAtPosition(filename, position),
        service.getQuickInfoAtPosition(filename, position),
      );
      assert.deepEqual(
        enhanced.getDefinitionAtPosition(filename, position),
        service.getDefinitionAtPosition(filename, position),
      );
    }
    const namedEnd = source.indexOf('// member:inlineFlex');
    const namedPosition = source.lastIndexOf('inlineFlex', namedEnd);
    const namedHover = service.getQuickInfoAtPosition(filename, namedPosition);
    assert(/\p{Script=Han}/u.test(ts.displayPartsToString(namedHover?.documentation)));
    const namedDefinitions = service.getDefinitionAtPosition(filename, namedPosition);
    assert.equal(namedDefinitions?.length, 1);
    assert(
      namedDefinitions[0].fileName.replaceAll('\\', '/').endsWith('/generated/keyword-views.ts'),
    );
    const inheritEnd = source.indexOf('// member:inherit');
    const inheritPosition = source.lastIndexOf('inherit', inheritEnd);
    const sharedDefinitions = service.getDefinitionAtPosition(filename, inheritPosition);
    assert.equal(sharedDefinitions?.length, 1);
    assert(
      sharedDefinitions[0].fileName.replaceAll('\\', '/').endsWith('/generated/literal-values.ts'),
    );
    assert.match(
      ts.resolveJSModule('@zerodep-vue/css/language-service', root, ts.sys),
      /index\.cjs$/,
    );
  } finally {
    enhanced.dispose();
  }
});
