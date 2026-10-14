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
  let source =
    ts.sys.readFile(filename) +
    String.raw`
export const escapedLiteral = css({ font: 'in\u0068erit' }); // literal:escaped
export const freeString = css({ font: '18px system-ui' }); // literal:free
export const ordinaryObject = { font: 'inherit' }; // literal:ordinary
import { bx as bind, keyframes, globalCss } from '@zerodep-vue/css';
import * as cssTools from '@zerodep-vue/css';
import { AppTheme } from './theme-types';
declare const active: boolean;
declare const business: string;
const bindAlias = bind;
const namespaceAlias = cssTools.bx;
css({ display: bindAlias(active ? 'none' : 'inline-flex') }); // literal:alias
css({ display: cssTools.bx('inline-flex') }); // literal:namespace
css({ display: namespaceAlias('inline-flex') }); // literal:namespaceAlias
css({ display: ('inline-flex' satisfies CssObject['display']) }); // literal:satisfiesValue
css({ font: ('inherit') }); // literal:parentheses
css({ display: (active ? 'none' : ('inline-flex' as const)) }); // literal:wrappedBranch
css({ display: 'inline-flex'! }); // literal:nonNull
({ display: 'inline-flex' } satisfies CssObject); // literal:satisfiesObject
keyframes({ from: { display: 'inline-flex' } }); // literal:animation
globalCss('probe', { '.probe': { display: 'inline-flex' } }); // literal:global
css({ transformStyle: 'preserve-3d' }); // literal:transform
css({ pointerEvents: 'visibleFill' }); // literal:pointer
css({ touchAction: 'pan-up' }); // literal:touch
css({ maxWidth: 'none' }); // literal:maximum
function genericTheme<T extends AppTheme>({ css, keywords }: CssContext<T>) {
  css({ display: bind(active ? 'none' : 'inline-flex'), color: keywords.color._brand }); // literal:genericTheme
  // @ts-expect-error 表达式增强不改变泛型 T 的属性边界。
  css({ padding: keywords.color._brand });
}
class ExtendedTheme extends AppTheme {
  override readonly color = {
    ...new AppTheme().color,
    /** 危险操作的强调色。 */
    _danger: 'red',
  };
}
function inheritedTheme<T extends ExtendedTheme>({ css, keywords }: CssContext<T>) {
  return css({ color: keywords.color._danger, backgroundColor: keywords.color._brand });
}
function identity<T>(value: T): T { return value; }
css({ display: identity('inline-flex') }); // literal:otherFunction
function shadowed(bx: typeof bind) {
  css({ display: bx('inline-flex') }); // literal:shadowed
}
const typedImpostor: typeof bind = value => bind(value);
css({ display: typedImpostor('inline-flex') }); // literal:typedImpostor
let mutableAlias = bind;
css({ display: mutableAlias('inline-flex') }); // literal:mutableAlias
css({ display: business === 'inline-flex' ? 'none' : 'flex' }); // literal:condition
css({ display: 'inline-flex' + business }); // literal:concatenation
// @ts-expect-error 闭合值域不能因断言中的补全而放宽。
css({ boxSizing: 'not-a-box-model' as const });
`;
  const snapshot = host.getScriptSnapshot.bind(host);
  let version = 0;
  const scriptVersion = host.getScriptVersion.bind(host);
  host.getScriptVersion = (file) =>
    resolve(file) === filename ? String(version) : scriptVersion(file);
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
      assert.deepEqual(
        enhanced.getCompletionsAtPosition(filename, position, {}),
        service.getCompletionsAtPosition(filename, position, {}),
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
    // 实际输入期间的空字符串、部分词和缺失引号都要有候选，随后切回业务对象不能残留上下文。
    for (const expression of [
      "css({ display: bind('",
      "css({ display: bind('in",
      "css({ display: '' })",
    ]) {
      source = complete + '\n' + expression;
      version++;
      const position = expression.endsWith('})') ? source.lastIndexOf("''") + 1 : source.length;
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
