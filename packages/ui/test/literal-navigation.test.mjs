import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'vitest';
import ts from 'typescript';

test(
  'CSS literals retain a documented contextual overload without weakening free values or theme validation',
  { timeout: 20_000 },
  () => {
    const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
    const file = resolve(root, 'packages/ui/test/__literal_navigation_probe__.tsx');
    const source = `import { bx } from '@zerodep-vue/core';
import { ref } from 'vue';
import { useCss, LightTheme, type FontSizeTokens, type UiThemeInput } from '../src/index.ts';
const s = useCss();
s.overflow('hidden');
s.borderStyle('hidden');
s.color('_primaryHover');
s.outlineColor('_focusRing');
s.font('inherit');
s.color(Math.random() ? '_primary' : '_danger');
s.padding('0.125em 0');
s.fontSize(16);
s.width(null);
s.width(undefined);
s.color(bx('_primary'));
s.overflow(bx('hidden'));
s.transform('translateX(10px)');
s.fontSize('_medium');
s.fontSize('medium');
const fontSize: FontSizeTokens = new LightTheme().fontSize;
fontSize._medium = ref('large');
const theme: UiThemeInput = {
  fontSize: { _medium: 'medium' },
  fontWeight: { _regular: 'normal' },
  lineHeight: { _normal: 'normal' },
  zIndex: { _modal: 'auto' },
};
theme.fontSize = { _medium: ref(undefined) };
// @ts-expect-error 主题值不能混入其他原始值类型。
fontSize._medium = true;
// @ts-expect-error 完整主题字段不能为空，局部输入才允许 undefined 恢复继承。
fontSize._medium = undefined;
// @ts-expect-error 过渡时长必须带单位，不能接收数值。
const invalidTheme: UiThemeInput = { transitionDuration: { _fast: 100 } };
// @ts-expect-error 具名 token 接口不放宽未知成员。
const missingTheme: UiThemeInput = { fontSize: { _missing: '1rem' } };
const chain = s.display('flex').color('_primary').padding('_medium');
chain.color('_danger');
// @ts-expect-error 连续调用后仍保留主题名检查。
chain.color('_missing_chain');
// @ts-expect-error 自由 CSS 字符串不能放过未知主题名。
s.color('_missing');
// @ts-expect-error 绑定同样检查未知主题名。
s.color(bx('_missing'));
// @ts-expect-error 其他属性组的主题名不可串用。
s.color('_small');
// @ts-expect-error 原有属性值域约束仍有效。
s.width(true);
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
      useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
      fileExists: (path) => resolve(path) === file || ts.sys.fileExists(path),
      readFile,
      readDirectory: ts.sys.readDirectory,
      directoryExists: ts.sys.directoryExists,
      getDirectories: ts.sys.getDirectories,
      realpath: ts.sys.realpath,
    });
    try {
      const diagnostics = [
        ...service.getSyntacticDiagnostics(file),
        ...service.getSemanticDiagnostics(file),
      ];
      assert.deepEqual(
        diagnostics.map((item) => ts.flattenDiagnosticMessageText(item.messageText, '\n')),
        [],
      );
      const program = service.getProgram();
      const checker = program.getTypeChecker();
      const ast = program.getSourceFile(file);
      const statements = ast.statements.filter(ts.isExpressionStatement);
      // 普通关键字不能先推断成 Value 再交叉约束，否则 IDE 会丢失 keyof 的具体声明来源。
      for (const statement of statements.slice(0, 6)) {
        const signature = checker.getResolvedSignature(statement.expression);
        assert.equal(signature.declaration.typeParameters?.length ?? 0, 0, statement.getText(ast));
        assert.match(signature.declaration.parameters[0].type.getText(), /^KeywordInput</);
      }
      const raw = statements.find((node) => node.getText(ast).includes("padding('0.125em 0')"));
      assert.equal(
        checker.getResolvedSignature(raw.expression).declaration.typeParameters.length,
        1,
      );

      const plugin = createRequire(import.meta.url)('../../compiler/src/editor/plugin.cjs');
      const enhanced = plugin({ typescript: ts }).create({ languageService: service });
      // 成员下拉详情与调用位置 hover 是不同入口；分别检查原生服务与增强服务。
      for (const api of [service, enhanced]) {
        for (const call of ["s.color('_primaryHover')", "chain.color('_danger')"]) {
          const position = source.indexOf(call) + call.indexOf('.') + 1;
          const completions = api.getCompletionsAtPosition(file, position, {});
          assert.equal(completions.entries.filter((entry) => entry.name === 'color').length, 1);
          const details = api.getCompletionEntryDetails(file, position, 'color', {}, undefined, {});
          assert(ts.displayPartsToString(details.documentation).includes('设置文字前景色'));
          assert.match(ts.displayPartsToString(details.displayParts), /\): Css<UiTheme>/);
          assert(details.tags.some((tag) => tag.name === 'param'));
          assert(details.tags.some((tag) => tag.name === 'returns'));
        }
      }
      for (const [call, value, target, container, documentation] of [
        ["s.overflow('hidden')", 'hidden', 'literal-values.ts', 'OverflowValues', '裁剪溢出'],
        ["s.borderStyle('hidden')", 'hidden', 'literal-values.ts', 'BorderStyleValues', '边框'],
        ["s.color('_primaryHover')", '_primaryHover', 'tokens.ts', 'UiColors', '主操作的悬停色'],
        ["s.outlineColor('_focusRing')", '_focusRing', 'tokens.ts', 'UiColors', '键盘焦点轮廓颜色'],
        ["s.font('inherit')", 'inherit', 'literal-values.ts', 'CssWideValues', '父元素'],
        ["s.overflow(bx('hidden'))", 'hidden', 'literal-values.ts', 'OverflowValues', '裁剪溢出'],
        ["s.color(bx('_primary'))", '_primary', 'tokens.ts', 'UiColors', '主操作色'],
        ["s.fontSize('_medium')", '_medium', 'tokens.ts', 'FontSizeTokens', '中等字号'],
        [
          "s.fontSize('medium')",
          'medium',
          'literal-values.ts',
          'FontSizeValues',
          'font-size 的原生 medium 值',
        ],
      ]) {
        const position = source.indexOf(call) + call.indexOf(`'${value}'`) + 2;
        const definitions = enhanced.getDefinitionAtPosition(file, position);
        assert.equal(definitions.length, 1, call);
        assert(definitions[0].fileName.endsWith(target), call);
        assert.equal(definitions[0].containerName, container, call);
        assert.equal(
          enhanced.getDefinitionAndBoundSpan(file, position).definitions.length,
          1,
          call,
        );
        const hover = enhanced.getQuickInfoAtPosition(file, position);
        assert(ts.displayPartsToString(hover.documentation).includes(documentation), call);
        const completions = enhanced.getCompletionsAtPosition(file, position, {});
        assert.equal(completions.entries.filter((entry) => entry.name === value).length, 1, call);
        const details = enhanced.getCompletionEntryDetails(
          file,
          position,
          value,
          {},
          undefined,
          {},
        );
        assert.equal(
          ts.displayPartsToString(details.documentation),
          ts.displayPartsToString(hover.documentation),
        );
      }
      // 配置值直接复用对应 CSS 属性；原生 TS 服务也应提示关键字，不依赖插件补齐。
      for (const [expression, value, expected] of [
        ["_medium: 'medium'", 'medium', ['medium', 'large', 'smaller']],
        ["_regular: 'normal'", 'normal', ['normal', 'bold', 'bolder']],
        ["_normal: 'normal'", 'normal', ['normal', 'inherit']],
        ["_modal: 'auto'", 'auto', ['auto', 'inherit']],
      ]) {
        const position = source.indexOf(expression) + expression.indexOf(`'${value}'`) + 2;
        const names = new Set(
          service.getCompletionsAtPosition(file, position, {}).entries.map((entry) => entry.name),
        );
        for (const keyword of expected) assert(names.has(keyword), `${expression}: ${keyword}`);
        assert(!names.has('_medium'), '配置接收具体 CSS 值，不把主题名作为间接引用');
      }
    } finally {
      service.dispose();
    }
  },
);
