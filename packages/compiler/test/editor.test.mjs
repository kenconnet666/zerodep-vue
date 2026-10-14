import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { languageServiceHost } from '../../../fixtures/package-consumer/template/language-service-host.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const init = createRequire(import.meta.url)(
  ts.resolveJSModule('@zerodep-vue/compiler/src/editor/plugin.cjs', root, ts.sys),
);

test('CSS literal completion documentation and navigation use real generated declarations', () => {
  assert.equal(ts.version, '6.0.3');
  const configPath = resolve(root, 'fixtures/authoring/tsconfig.json');
  const config = ts.readConfigFile(configPath, ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, dirname(configPath));
  const filename = resolve(root, 'fixtures/authoring/src/literal-types.tsx');
  const host = languageServiceHost(ts, root, [filename], parsed.options);
  let source =
    ts.sys.readFile(filename) +
    `export const escapedLiteral = s.font('in\\u0068erit'); // literal:escaped
export const freeString = s.font('18px system-ui'); // literal:free
export const ordinaryObject = { font: 'inherit' }; // literal:ordinary
import { bx as bind, keyframes, globalCss } from '@zerodep-vue/core';
import * as cssTools from '@zerodep-vue/core';
import { AppTheme } from './theme-types';
import type { KeywordView } from '@zerodep-vue/core';

declare const active: boolean;
declare const business: string;
const bindAlias = bind;
const namespaceAlias = cssTools.bx;
s.display(bindAlias(active ? 'none' : 'inline-flex')); // literal:alias
s.display(cssTools.bx('inline-flex')); // literal:namespace
s.display(namespaceAlias('inline-flex')); // literal:namespaceAlias
s.display(('inline-flex' satisfies Parameters<Css['display']>[0])); // literal:satisfiesValue
s.font(('inherit')); // literal:parentheses
s.display((active ? 'none' : ('inline-flex' as const))); // literal:wrappedBranch
s.display('inline-flex'!); // literal:nonNull
s.display('inline-flex') satisfies Css; // literal:satisfiesObject
keyframes({from: s.display('inline-flex')}); // literal:animation
globalCss('probe', {'.probe': s.display('inline-flex')}); // literal:global
s.transformStyle('preserve-3d'); // literal:transform
s.pointerEvents('visibleFill'); // literal:pointer
s.touchAction('pan-up'); // literal:touch
s.maxWidth('none'); // literal:maximum
function genericTheme<T extends AppTheme>(s: Css<T>, keywords: KeywordView<T>) {
  s.display(bind(active ? 'none' : 'inline-flex')).color(keywords.color._brand); // literal:genericTheme
  // @ts-expect-error 表达式增强不改变泛型 T 的属性边界。
  s.padding(keywords.color._brand);
}
class ExtendedTheme extends AppTheme {
  override readonly color = {
    ...new AppTheme().color,
    /** 危险操作的强调色。 */
    _danger: 'red',
  };
}
function inheritedTheme<T extends ExtendedTheme>(s: Css<T>, keywords: KeywordView<T>) {
  return s.color(keywords.color._danger).backgroundColor(keywords.color._brand);
}
function themeLiterals<T extends ExtendedTheme>(s: Css<T>) {
  s.backgroundColor('_brand'); // theme:brand
  s.borderColor(bind(active ? '_danger' : 'red')); // theme:danger
  s.padding('_control'); // theme:control
}
function identity<T>(value: T): T { return value; }
s.display(identity('inline-flex')); // literal:otherFunction
function shadowed(bx: typeof bind) {
  s.display(bx('inline-flex')); // literal:shadowed
}
const typedImpostor: typeof bind = value => bind(value);
s.display(typedImpostor('inline-flex')); // literal:typedImpostor
let mutableAlias = bind;
s.display(mutableAlias('inline-flex')); // literal:mutableAlias
s.display(business === 'inline-flex' ? 'none' : 'flex'); // literal:condition
s.display('inline-flex' + business); // literal:concatenation
// @ts-expect-error 闭合值域不能因断言中的补全而放宽。
s.boxSizing('not-a-box-model' as const);
`;
  const snapshot = host.getScriptSnapshot.bind(host);
  // 模拟发布声明：真实作者私有字段的类型会被发射器擦除，不能靠它查主题。
  const authorFile = resolve(root, 'packages/core/src/css/author.ts');
  const authorDeclaration = ts.transpileDeclaration(ts.sys.readFile(authorFile), {
    fileName: authorFile,
  }).outputText;
  assert.match(authorDeclaration, /private readonly theme;/);
  let version = 0;
  const scriptVersion = host.getScriptVersion.bind(host);
  host.getScriptVersion = (file) =>
    resolve(file) === filename ? String(version) : scriptVersion(file);
  host.getScriptSnapshot = (file) =>
    resolve(file) === filename
      ? ts.ScriptSnapshot.fromString(source)
      : resolve(file) === authorFile
        ? ts.ScriptSnapshot.fromString(authorDeclaration)
        : snapshot(file);
  const service = ts.createLanguageService(host);
  const enhanced = init({ typescript: ts }).create({ languageService: service });
  try {
    assert.deepEqual(
      enhanced
        .getSemanticDiagnostics(filename)
        .map((item) => ts.flattenDiagnosticMessageText(item.messageText, '\n')),
      [],
    );
    const fontMethod = source.indexOf(".font('inherit')") + 2;
    const fontInfo = enhanced.getQuickInfoAtPosition(filename, fontMethod);
    const fontDocs = ts.displayPartsToString(fontInfo.documentation);
    assert(
      fontDocs.includes('font-size: medium') && fontDocs.includes('font-family: 由浏览器决定'),
    );
    assert(fontDocs.includes('是否继承：是'));
    assert(!ts.displayPartsToString(fontInfo.displayParts).includes('CheckedPropertyValue'));
    for (const [marker, value] of Object.entries({
      font: 'inherit',
      display: 'inline-flex',
      nested: 'red',
      media: 'relative',
      named: 'grid',
      object: 'center',
      generic: 'inherit',
      escaped: 'inherit',
      conditional: 'inline-flex',
      binding: 'relative',
      parentheses: 'inherit',
      assertion: 'border-box',
      alias: 'inline-flex',
      namespace: 'inline-flex',
      namespaceAlias: 'inline-flex',
      satisfiesValue: 'inline-flex',
      wrappedBranch: 'inline-flex',
      nonNull: 'inline-flex',
      satisfiesObject: 'inline-flex',
      animation: 'inline-flex',
      global: 'inline-flex',
      genericTheme: 'inline-flex',
      transform: 'preserve-3d',
      pointer: 'visibleFill',
      touch: 'pan-up',
      maximum: 'none',
    })) {
      const end = source.indexOf('// literal:' + marker + '\n');
      assert(end > 0, marker);
      const raw = marker === 'escaped' ? String.raw`in\u0068erit` : value;
      const start = source.lastIndexOf("'" + raw + "'", end) + 1;
      const position = start + 1;
      const hover = enhanced.getQuickInfoAtPosition(filename, position);
      assert(/\p{Script=Han}/u.test(ts.displayPartsToString(hover?.documentation)), marker);
      const expected = {
        transform: '不继承',
        pointer: 'SVG',
        touch: '手指最初向下',
        maximum: '尺寸上限',
      }[marker];
      if (expected) assert(ts.displayPartsToString(hover.documentation).includes(expected), marker);
      assert.equal(hover.textSpan.length, raw.length, marker);
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
    for (const [marker, value] of Object.entries({
      ordinary: 'inherit',
      free: '18px system-ui',
      otherFunction: 'inline-flex',
      shadowed: 'inline-flex',
      typedImpostor: 'inline-flex',
      mutableAlias: 'inline-flex',
      condition: 'inline-flex',
      concatenation: 'inline-flex',
    })) {
      const end = source.indexOf('// literal:' + marker + '\n');
      assert(end > 0, marker);
      const position = source.lastIndexOf("'" + value + "'", end) + 2;
      assert.deepEqual(
        enhanced.getQuickInfoAtPosition(filename, position),
        service.getQuickInfoAtPosition(filename, position),
      );
      assert.deepEqual(
        enhanced.getDefinitionAtPosition(filename, position),
        service.getDefinitionAtPosition(filename, position),
      );
      const completions = enhanced.getCompletionsAtPosition(filename, position, {});
      const native = service.getCompletionsAtPosition(filename, position, {});
      if (marker === 'free') {
        // 自由 CSS 值仍有当前属性的关键词提示，但保留原生候选，不伪造 hover/定义。
        for (const entry of native?.entries ?? [])
          assert(completions.entries.some((item) => item.name === entry.name));
        assert(completions.entries.some((item) => item.name === 'inherit'));
        assert(!completions.entries.some((item) => item.name === 'border-box'));
      } else assert.deepEqual(completions, native);
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
      ts.resolveJSModule('@zerodep-vue/compiler/src/editor/plugin.cjs', root, ts.sys),
      /plugin\.cjs$/,
    );
    for (const [member, description] of [
      ['_brand', '品牌主色'],
      ['_danger', '危险操作'],
    ]) {
      const position =
        source.indexOf('keywords.color.' + member, source.indexOf('function inheritedTheme')) +
        'keywords.color.'.length;
      assert(
        ts
          .displayPartsToString(enhanced.getQuickInfoAtPosition(filename, position)?.documentation)
          .includes(description),
      );
      assert.equal(enhanced.getDefinitionAtPosition(filename, position)?.length, 1);
      assert(
        enhanced
          .getCompletionsAtPosition(filename, position, {})
          ?.entries.some((entry) => entry.name === member),
      );
    }
    const complete = source;
    for (const [marker, member, description] of [
      ['brand', '_brand', '品牌主色'],
      ['danger', '_danger', '危险操作'],
      ['control', '_control', '纵向与横向'],
    ]) {
      const end = source.indexOf('// theme:' + marker);
      const position = source.lastIndexOf("'" + member + "'", end) + 2;
      const entries = enhanced.getCompletionsAtPosition(filename, position, {}).entries;
      assert(entries.some((item) => item.name === member));
      assert(
        !entries.some((item) => item.name === (member === '_control' ? '_brand' : '_control')),
      );
      const detail = enhanced.getCompletionEntryDetails(filename, position, member, {});
      assert(ts.displayPartsToString(detail.documentation).includes(description));
      assert(
        ts
          .displayPartsToString(enhanced.getQuickInfoAtPosition(filename, position).documentation)
          .includes(description),
      );
      const definitions = enhanced.getDefinitionAtPosition(filename, position);
      assert.equal(definitions.length, 1);
      assert(!definitions[0].fileName.includes('/generated/'));
    }
    // 实际输入期间的空字符串、部分词和缺失引号都要有候选，随后切回业务对象不能残留上下文。
    for (const expression of ["s.display(bind('", "s.display(bind('in", "s.display('')"]) {
      source = complete + '\n' + expression;
      version++;
      const position = expression.endsWith(')') ? source.lastIndexOf("''") + 1 : source.length;
      const completions = enhanced.getCompletionsAtPosition(filename, position, {});
      assert(
        completions?.entries.some((entry) => entry.name === 'inline-flex'),
        expression,
      );
      assert(!completions.entries.some((entry) => entry.name === 'border-box'), expression);
      assert(
        /\p{Script=Han}/u.test(
          ts.displayPartsToString(
            enhanced.getCompletionEntryDetails(filename, position, 'inline-flex', {})
              ?.documentation,
          ),
        ),
        expression,
      );
    }
    source = complete + "\nconst businessObject = { display: 'in";
    version++;
    assert.deepEqual(
      enhanced.getCompletionsAtPosition(filename, source.length, {}),
      service.getCompletionsAtPosition(filename, source.length, {}),
    );
  } finally {
    enhanced.dispose();
  }
});
