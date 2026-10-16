import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'vitest';
import ts from 'typescript';

test(
  'CSS object properties and literals retain typed completion, Chinese docs and source navigation',
  { timeout: 20_000 },
  () => {
    const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
    const file = resolve(root, 'packages/ui/test/__literal_navigation_probe__.tsx');
    const source = [
      "import { _button } from '@zerodep-vue/core';",
      "import { useCss } from '../src/index.ts';",
      'const css = useCss();',
      "css({ color: '_primaryHover' });",
      "css({ overflow: 'hidden' });",
      "css({ borderStyle: 'hidden' });",
      "css({ outlineColor: '_focusRing' });",
      "css({ font: 'inherit' });",
      "css({ animationName: ['none'] });",
      "css(() => ({ color: '_primary' }));",
      "css({ ':hover': { color: '_danger' } });",
      "css({ padding: '0.125em 0', fontSize: 16, width: null });",
      'css({ width: undefined });',
      "<_button css={{ display: 'flex' }} />;",
      "declare const tone: 'primary' | 'danger';",
      "<_button data-tone={tone} css={{ 'data-tone': { danger: { display: 'block' } } }} />;",
      '// @ts-expect-error unknown theme token',
      "css({ color: '_missing' });",
      '// @ts-expect-error factories preserve theme validation',
      "css(() => ({ color: '_missing' }));",
      '// @ts-expect-error another theme property group',
      "css({ color: '_small' });",
      '// @ts-expect-error property domain',
      'css({ width: true });',
      "const business = { color: 'red' };",
      "const ordinary = (value: { color: string }) => value; ordinary({ color: 'blue' });",
      "const arbitrary = { css: { color: 'black' } };",
    ].join('\n');
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
      useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
      fileExists: (path) => resolve(path) === file || ts.sys.fileExists(path),
      readFile,
      readDirectory: ts.sys.readDirectory,
      directoryExists: ts.sys.directoryExists,
      getDirectories: ts.sys.getDirectories,
      realpath: ts.sys.realpath,
    });
    try {
      assert.deepEqual(
        [...service.getSyntacticDiagnostics(file), ...service.getSemanticDiagnostics(file)].map(
          (item) => ts.flattenDiagnosticMessageText(item.messageText, '\n'),
        ),
        [],
      );
      const plugin = createRequire(import.meta.url)('../../compiler/src/editor/plugin.cjs');
      const enhanced = plugin({ typescript: ts }).create({ languageService: service });
      const position = source.indexOf("color: '_primaryHover'");
      for (const api of [service, enhanced]) {
        const completions = api.getCompletionsAtPosition(file, position, {});
        assert.equal(completions.entries.filter((entry) => entry.name === 'color').length, 1);
        const details = api.getCompletionEntryDetails(file, position, 'color', {}, undefined, {});
        assert(ts.displayPartsToString(details.documentation).includes('设置文字前景色'));
        assert(details.tags.some((tag) => tag.name === 'default'));
        assert(details.tags.some((tag) => tag.name === 'extend'));
      }
      for (const [call, value, target, container, documentation] of [
        [
          "css({ overflow: 'hidden' })",
          'hidden',
          'literal-values.ts',
          'OverflowValues',
          '裁剪溢出',
        ],
        [
          "css({ borderStyle: 'hidden' })",
          'hidden',
          'literal-values.ts',
          'BorderStyleValues',
          '边框',
        ],
        [
          "css({ color: '_primaryHover' })",
          '_primaryHover',
          'types.ts',
          'UiTheme.color',
          '主操作的悬停色',
        ],
        [
          "css({ outlineColor: '_focusRing' })",
          '_focusRing',
          'types.ts',
          'UiTheme.color',
          '键盘焦点轮廓颜色',
        ],
        ["css({ font: 'inherit' })", 'inherit', 'literal-values.ts', 'CssWideValues', '父元素'],
        [
          "css({ animationName: ['none'] })",
          'none',
          'literal-values.ts',
          'AnimationNameValues',
          '关闭',
        ],
        ["css(() => ({ color: '_primary' }))", '_primary', 'types.ts', 'UiTheme.color', '主操作色'],
        ["css({ ':hover': { color: '_danger' } })", '_danger', 'types.ts', 'UiTheme.color', '危险'],
        ["css={{ display: 'flex' }}", 'flex', 'literal-values.ts', 'DisplayValues', '弹性'],
        ["danger: { display: 'block' }", 'block', 'literal-values.ts', 'DisplayValues', '块'],
      ]) {
        const point = source.indexOf(call) + call.indexOf("'" + value + "'") + 2;
        const definitions = enhanced.getDefinitionAtPosition(file, point);
        assert.equal(definitions?.length, 1, call);
        assert(definitions[0].fileName.endsWith(target), call);
        assert.equal(definitions[0].containerName, container, call);
        assert.equal(enhanced.getDefinitionAndBoundSpan(file, point).definitions.length, 1, call);
        const hover = enhanced.getQuickInfoAtPosition(file, point);
        assert(
          ts.displayPartsToString(hover.documentation).includes(documentation),
          call + ': ' + ts.displayPartsToString(hover.documentation),
        );
        assert.equal(
          enhanced
            .getCompletionsAtPosition(file, point, {})
            .entries.filter((entry) => entry.name === value).length,
          1,
          call,
        );
        const details = enhanced.getCompletionEntryDetails(file, point, value, {}, undefined, {});
        assert.equal(
          ts.displayPartsToString(details.documentation),
          ts.displayPartsToString(hover.documentation),
        );
      }
      for (const value of ['red', 'blue', 'black']) {
        const point = source.lastIndexOf("'" + value + "'") + 2;
        assert(
          !(enhanced.getDefinitionAtPosition(file, point) ?? []).some((definition) =>
            /literal-values/.test(definition.fileName),
          ),
        );
      }
    } finally {
      service.dispose();
    }
  },
);
