import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { languageServiceHost } from '../../../fixtures/package-consumer/template/language-service-host.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const init = createRequire(import.meta.url)('../src/editor/plugin.cjs');

test('JSX directives expose contextual completion, Chinese documentation and real definitions', () => {
  const filename = resolve(root, 'fixtures/authoring/src/directive-types.tsx');
  const configPath = resolve(root, 'fixtures/authoring/tsconfig.json');
  const config = ts.readConfigFile(configPath, ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, dirname(configPath));
  const host = languageServiceHost(ts, root, [filename], parsed.options);
  const original = ts.sys.readFile(filename);
  let source = original;
  let version = 0;
  const snapshot = host.getScriptSnapshot.bind(host);
  const scriptVersion = host.getScriptVersion.bind(host);
  host.getScriptSnapshot = (file) =>
    resolve(file) === filename ? ts.ScriptSnapshot.fromString(source) : snapshot(file);
  host.getScriptVersion = (file) =>
    resolve(file) === filename ? String(version) : scriptVersion(file);
  const native = ts.createLanguageService(host);
  const service = init({ typescript: ts }).create({ languageService: native });
  try {
    assert.deepEqual(
      service
        .getSemanticDiagnostics(filename)
        .map((item) => ts.flattenDiagnosticMessageText(item.messageText, '\n')),
      [],
    );
    for (const name of [
      'v-model',
      'v-model_trim',
      'v-model_lazy_number',
      'v-show',
      'v-text',
      'v-html',
      'v-slots',
      'v-models',
      'v-model:value',
      'v-model:value_trim',
    ]) {
      const position = source.indexOf(name + '=') + 2;
      assert(position > 1, name);
      const hover = service.getQuickInfoAtPosition(filename, position);
      assert(/\p{Script=Han}/u.test(ts.displayPartsToString(hover?.documentation)), name);
      const definitions = service.getDefinitionAndBoundSpan(filename, position)?.definitions;
      assert.equal(definitions?.length, 1, name);
      assert(definitions[0].fileName.replaceAll('\\', '/').endsWith('/tsx/directives.ts'), name);
    }
    for (const [tag, expected, excluded] of [
      [
        'input',
        ['v-model', 'v-model_trim', 'v-show', 'v-text'],
        ['v-slots', 'v-models', 'v-if', 'v-for'],
      ],
      ['div', ['v-show', 'v-text', 'v-html'], ['v-model', 'v-models', 'v-once', 'v-memo']],
      ['Field', ['v-model', 'v-models', 'v-slots'], ['v-if', 'v-for', 'v-on']],
    ]) {
      source = original + `\nconst probe = <${tag}  />;`;
      version++;
      const position = source.lastIndexOf('  />') + 1;
      const entries = service.getCompletionsAtPosition(filename, position, {}).entries;
      for (const name of expected) {
        assert(
          entries.some((entry) => entry.name === name),
          tag + ':' + name,
        );
        const details = service.getCompletionEntryDetails(filename, position, name, {});
        assert(/\p{Script=Han}/u.test(ts.displayPartsToString(details?.documentation)), name);
      }
      for (const name of excluded)
        assert(!entries.some((entry) => entry.name === name), tag + ':' + name);
    }
    source = original + '\nconst named = <Field v-model:va />;';
    version++;
    const position = source.lastIndexOf('v-model:va') + 'v-model:va'.length;
    assert(
      service
        .getCompletionsAtPosition(filename, position, {})
        .entries.some((entry) => entry.name === 'v-model:value'),
    );
    source = original + '\nconst custom = <input v-focus={true} disabled={false} />;';
    version++;
    for (const name of ['v-focus', 'disabled']) {
      const position = source.lastIndexOf(name) + 2;
      assert.deepEqual(
        service.getQuickInfoAtPosition(filename, position),
        native.getQuickInfoAtPosition(filename, position),
      );
    }
  } finally {
    service.dispose();
  }
});
