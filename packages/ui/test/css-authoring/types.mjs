import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../../../..');
const core = join(root, 'packages/core/src/index.ts').replaceAll('\\', '/');
const require = createRequire(import.meta.url);
const tsPath = require.resolve('typescript', {
  paths: [join(root, 'packages/core'), join(root, 'packages/ui'), root],
});
const ts = createRequire(tsPath)('typescript');
const fileName = resolve(here, 'types-probe.tsx').replaceAll('\\', '/');

const source = `
import type { AuthorProps, CssValue } from '${core}';
import type { VNode } from 'vue';
type Native = AuthorProps & {
  disabled?: boolean;
  'aria-pressed'?: boolean | 'mixed';
  'data-tone'?: 'primary' | 'danger';
};
type Style = {
  color?: CssValue<'color'>;
  opacity?: CssValue<'opacity'>;
  margin?: CssValue<'margin'>;
};
type StateValue<Value> = Extract<NonNullable<Value>, string | number | boolean>;
type State<Value> = \u0060\u0024{StateValue<Value>}\u0060;
type DataKey<Props> = Extract<keyof Props, \u0060data-\u0024{string}\u0060>;
type Pseudo = ':hover' | ':disabled';
type CssShape<Props> = Style &
  { [Key in Pseudo]?: Style } &
  { 'aria-pressed'?: { true?: Style; false?: Style; mixed?: Style } } &
  { [Key in DataKey<Props>]?: { [Value in State<Props[Key]>]?: Style } } &
  { [Key in \u0060--\u0024{string}\u0060]?: string | number } &
  { '--gap'?: string | number };
type Cases<Value, Candidate> = {
  [Key in keyof Candidate]: Key extends string | number | boolean
    ? \u0060\u0024{Key}\u0060 extends State<Value>
      ? Style
      : never
    : never;
};
type ValidCss<Props, Candidate> = {
  [Key in keyof Candidate]: Key extends keyof Style
    ? Style[Key]
    : Key extends Pseudo
      ? Style
      : Key extends 'aria-pressed'
        ? Cases<boolean | 'mixed', Candidate[Key]>
        : Key extends \u0060data-\u0024{string}\u0060
          ? Key extends keyof Props
            ? Cases<Props[Key], Candidate[Key]>
            : never
          : Key extends \u0060--\u0024{string}\u0060
            ? string | number
            : never;
};
type ButtonProps<Props extends Native, Candidate extends object> = Props & {
  css?: Candidate & CssShape<NoInfer<Props>> & ValidCss<NoInfer<Props>, Candidate>;
};
declare function _button<const Props extends Native, const Candidate extends object>(
  props: ButtonProps<Props, Candidate>,
): VNode;

declare const pressed: boolean | 'mixed';
declare const tone: 'primary' | 'danger';
<_button
  disabled
  aria-pressed={pressed}
  data-tone={tone}
  css={{
    /*complete-top*/
    color: 'red',
    ':disabled': {
      /*complete-pseudo*/
      opacity: 0.5,
    },
    'aria-pressed': {
      true: { color: 'red' },
      /*complete-aria*/
    },
    'data-tone': {
      primary: { color: 'red' },
      /*complete-data*/
    },
    '--user-defined': 'var(--gap)',
  }}
/>;
<_button
  aria-pressed={pressed}
  data-tone={tone}
  css={{ 'aria-pressed': { mixed: { opacity: 0.8 } }, 'data-tone': { danger: { color: 'blue' } } }}
/>;
<_button css={{ /*complete-variable*/ }} />;

// @ts-expect-error CSS declaration value is not a CSS scalar.
<_button css={{ opacity: true }} />;
// @ts-expect-error Unknown pseudo selector is rejected.
<_button css={{ ':mystery': { color: 'red' } }} />;
// @ts-expect-error ARIA states are derived from the supplied native prop type.
<_button aria-pressed={pressed} css={{ 'aria-pressed': { pressed: { color: 'red' } } }} />;
// @ts-expect-error data-* state values are derived from the supplied native prop type.
<_button data-tone={tone} css={{ 'data-tone': { warning: { color: 'red' } } }} />;
// @ts-expect-error Unknown data attribute cannot be used as a CSS state selector.
<_button data-tone={tone} css={{ 'data-other': { primary: { color: 'red' } } }} />;
// Open custom-property names and free CSS strings are intentionally accepted.
<_button css={{ '--user-defined': 'calc(1px + var(--gap))', margin: '2/*complete-units*/qu' }} />;
`;

const markers = [
  'complete-top',
  'complete-pseudo',
  'complete-aria',
  'complete-data',
  'complete-variable',
  'complete-units',
];
const positions = new Map(markers.map((name) => [name, source.indexOf(`/*${name}*/`)]));
const cleanSource = [...positions.values()]
  .sort((a, b) => b - a)
  .reduce(
    (text, position) =>
      text.slice(0, position) + text.slice(position + text.slice(position).indexOf('*/') + 2),
    source,
  );
const cleanPositions = new Map(
  [...positions].map(([name, position]) => [
    name,
    position -
      [...positions]
        .filter(([, earlier]) => earlier < position)
        .reduce((sum, [key]) => sum + key.length + 4, 0),
  ]),
);

const configFile = ts.readConfigFile(join(root, 'tsconfig.base.json'), ts.sys.readFile);
if (configFile.error)
  throw new Error(ts.flattenDiagnosticMessageText(configFile.error.messageText, ' '));
const parsedConfig = ts.parseJsonConfigFileContent(
  configFile.config,
  ts.sys,
  root,
  {},
  join(root, 'tsconfig.base.json'),
);
const options = { ...parsedConfig.options, noEmit: true, types: [] };
const compilerHost = ts.createCompilerHost(options);
const normalizePath = (path) => resolve(path).replaceAll('\\', '/').toLowerCase();
const host = {
  getScriptFileNames: () => [fileName],
  getScriptVersion: () => '0',
  getScriptSnapshot: (path) => {
    if (normalizePath(path) === normalizePath(fileName))
      return ts.ScriptSnapshot.fromString(cleanSource);
    const text = compilerHost.readFile(path);
    return text === undefined ? undefined : ts.ScriptSnapshot.fromString(text);
  },
  getScriptKind: (path) =>
    normalizePath(path) === normalizePath(fileName)
      ? ts.ScriptKind.TSX
      : ts.getScriptKindFromFileName(path),
  getCurrentDirectory: () => root,
  getCompilationSettings: () => options,
  getDefaultLibFileName: compilerHost.getDefaultLibFileName,
  fileExists: compilerHost.fileExists,
  readFile: compilerHost.readFile,
  readDirectory: compilerHost.readDirectory,
  directoryExists: ts.sys.directoryExists,
  getDirectories: ts.sys.getDirectories,
  realpath: ts.sys.realpath,
};
const service = ts.createLanguageService(host);
const diagnostics = service.getSemanticDiagnostics(fileName);
const expectedErrorCount = 5;
const unexpectedDiagnostics = diagnostics.filter((item) => item.code !== 2578);
const unusedExpectedErrors = diagnostics.filter((item) => item.code === 2578);
const diagnosticEvidence =
  unexpectedDiagnostics.length === 0 && unusedExpectedErrors.length === 0
    ? `${expectedErrorCount} expected errors rejected; no unexpected diagnostics`
    : `${unexpectedDiagnostics.map((item) => `${item.code}@${item.file?.getLineAndCharacterOfPosition(item.start ?? 0).line + 1}: ${ts.flattenDiagnosticMessageText(item.messageText, ' ')}`).join('; ')}; ${unusedExpectedErrors.length}/${expectedErrorCount} expected errors not detected`;
const completions = new Map(
  [...cleanPositions].map(([name, position]) => [
    name,
    service.getCompletionsAtPosition(fileName, position, {})?.entries.map((entry) => entry.name) ??
      [],
  ]),
);
const unitCompletion = completions.get('complete-units');

const checks = [
  ['TS 6.0.3 resolved', ts.version === '6.0.3', `found ${ts.version}`],
  [
    'valid JSX and five expected errors',
    unexpectedDiagnostics.length === 0 && unusedExpectedErrors.length === 0,
    diagnosticEvidence,
  ],
  [
    'top-level CSS keys complete',
    ['opacity', 'margin'].every((key) => completions.get('complete-top').includes(key)),
    completions.get('complete-top').slice(0, 20).join(', '),
  ],
  [
    'nested pseudo CSS keys complete',
    ['color', 'margin'].every((key) => completions.get('complete-pseudo').includes(key)),
    completions.get('complete-pseudo').slice(0, 20).join(', '),
  ],
  [
    'ARIA state values complete',
    completions.get('complete-aria').includes('false'),
    completions.get('complete-aria').join(', '),
  ],
  [
    'data state values complete',
    completions.get('complete-data').includes('danger'),
    completions.get('complete-data').join(', '),
  ],
  [
    'declared custom variable completes',
    completions.get('complete-variable').includes('"--gap"'),
    completions.get('complete-variable').slice(0, 20).join(', '),
  ],
];
const boundary = [
  'Open --${string} keys accept user variables but cannot enumerate names for completion.',
  `CssValue uses CSS.Properties<Scalar> where Scalar is string | number; 2qu is accepted and TS offered these completions after the number: ${unitCompletion.join(', ') || '(none)'}.`,
  'This validator probe covers one state-map level; nested selectors or nested state maps need a separate recursive typing contract.',
];

for (const [name, passed, detail] of checks)
  console.log(`${passed ? 'PASS' : 'FAIL'} ${name}${detail ? ` — ${detail}` : ''}`);
for (const detail of boundary) console.log(`BOUNDARY ${detail}`);
console.log(
  `SUMMARY ${checks.filter(([, passed]) => passed).length}/${checks.length} passed; ${boundary.length} known boundaries`,
);

if (process.env.ZERODEP_CSS_PROBE_RESULTS) {
  const outputDirectory = resolve(process.env.ZERODEP_CSS_PROBE_RESULTS);
  if (!fs.existsSync(outputDirectory))
    throw new Error(`Result directory does not exist: ${outputDirectory}`);
  fs.writeFileSync(
    join(outputDirectory, 'types-results.json'),
    JSON.stringify(
      {
        version: ts.version,
        results: [
          ...checks.map(([name, passed, evidence]) => ({
            name,
            status: passed ? 'passed' : 'failed',
            kind: 'check',
            evidence,
          })),
          ...boundary.map((evidence) => ({
            name: evidence.split(' ')[0],
            status: 'passed',
            kind: 'boundary',
            evidence,
          })),
        ],
      },
      null,
      2,
    ) + '\n',
  );
}

if (checks.some(([, passed]) => !passed)) process.exitCode = 1;
