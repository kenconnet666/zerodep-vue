import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import prettier from 'prettier';
import docs from './property-docs.json' with { type: 'json' };
import { aliases, summaries } from './compat-docs.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const require = createRequire(resolve(root, 'packages/css/package.json'));
assert.equal(ts.version, '6.0.3');
assert.equal(require('csstype/package.json').version, '3.2.3');
const filename = require.resolve('csstype/index.d.ts');
const program = ts.createProgram([filename], {
  target: ts.ScriptTarget.ESNext,
  noEmit: true,
  skipLibCheck: true,
});
const checker = program.getTypeChecker();
const ast = program.getSourceFile(filename);
const declaration = ast.statements.find(
  (node) => ts.isInterfaceDeclaration(node) && node.name.text === 'Properties',
);
const properties = checker
  .getPropertiesOfType(checker.getTypeAtLocation(declaration))
  .sort((a, b) => a.name.localeCompare(b.name, 'en'));
const names = new Set(properties.map((property) => property.name));
const nativeDocs = new Map(
  properties.map((property) => [
    property.name,
    ts.displayPartsToString(property.getDocumentationComment(checker)),
  ]),
);
const normalize = (name) =>
  name.replace(/^(?:Webkit|Moz|ms|O|Khtml)([A-Z])/, (_match, first) => first.toLowerCase());
const cssName = (name) =>
  name.replace(/[A-Z]/g, (letter) => '-' + letter.toLowerCase()).replace(/^ms-/, '-ms-');
const adapt = (text) =>
  text.replace(/\b([a-zA-Z]\w*)\((['"][^'"()]+['"])\)/g, (original, name, value) =>
    names.has(name) ? `${name}: ${value}` : original,
  );
const jsdoc = (text) =>
  '/**\n' +
  adapt(text)
    .replaceAll('*/', '* /')
    .split('\n')
    .map((line) => ' * ' + line)
    .join('\n') +
  '\n */\n';

function description(name) {
  const base = normalize(name);
  const direct = docs.properties[name] ?? summaries[base] ?? docs.properties[base];
  const alias = aliases[name] ?? aliases[base];
  const summary = direct ?? (alias && docs.properties[alias]);
  assert(
    summary && /[\u4e00-\u9fff]/.test(summary),
    `Missing Chinese property documentation: ${name}`,
  );
  const compatibility =
    !docs.properties[name] && (name !== base || alias)
      ? `兼容属性 ${cssName(name)}；优先参考标准属性${alias ? ' ' + alias : ''}及浏览器支持范围。\n`
      : '';
  const detail = docs.details[name] ?? docs.details[base];
  const initial = nativeDocs.get(name)?.match(/\*\*Initial value\*\*: `([^`]+)`/)?.[1];
  return (
    compatibility +
    summary +
    [detail?.remarks, detail?.usage && '适用场景：' + detail.usage]
      .filter(Boolean)
      .map((part) => '\n\n' + part)
      .join('') +
    (initial ? `\n\nCSS 规范初始值：\`${initial}\`，不同于浏览器默认样式表。` : '') +
    `\n@see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/${cssName(name)}`
  );
}

function keywordDoc(name, value, color) {
  const base = normalize(name);
  const alias = docs.keywordAliases[name] ?? docs.keywordAliases[base];
  const entry =
    docs.keywords[name]?.[value] ??
    docs.keywords[base]?.[value] ??
    docs.keywords[alias]?.[value] ??
    docs.globalKeywords[value] ??
    docs.valueKeywords[value] ??
    docs.valueKeywords[value === 'currentcolor' ? 'currentColor' : value];
  if (typeof entry === 'string') return entry;
  if (entry)
    return [
      entry.summary,
      entry.effect,
      entry.comparison && '区别：' + entry.comparison,
      entry.usage && '适用场景：' + entry.usage,
      entry.notes,
    ]
      .filter(Boolean)
      .join('\n\n');
  if (value === '-moz-initial') return '旧版 Gecko 的初始值关键字；现代样式优先使用 initial。';
  if (value === 'auto') return '由当前属性的布局或排版规则自动决定，不等同于数值 0。';
  if (value === 'none') return '关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。';
  if (value === 'normal') return '使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。';
  if (color) return `CSS 颜色关键字 ${value}；系统颜色会随用户环境和配色设置变化。`;
  return `选择当前属性的原生 ${value} 取值。\n${description(name).split('\n@see')[0]}`;
}

const sets = [];
const runtimeSets = [];
const interfaces = [];
const propertyLines = [];
const slotLines = [];
const viewLines = [];
const runtimeLines = [];
const colorNames = [];
const header = '// 由 scripts/css/generate.mjs 从固定 csstype@3.2.3 生成。说明只进入类型声明。\n';
for (const property of properties) {
  const name = property.name;
  const type = checker.getTypeOfSymbolAtLocation(property, property.valueDeclaration);
  const values = [
    ...new Set(
      (type.isUnion() ? type.types : [type])
        .filter((type) => type.flags & ts.TypeFlags.StringLiteral)
        .map((type) => type.value),
    ),
  ].sort();
  const color = values.includes('red') && values.includes('blue');
  if (color) colorNames.push(name);
  const members = {};
  for (const value of values) {
    members[value] = value;
    const alias =
      value === 'currentcolor'
        ? 'currentColor'
        : value.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
    if (alias !== value && /^\w+$/.test(alias)) members[alias] = value;
  }
  const fields = Object.entries(members)
    .map(
      ([key, value]) =>
        jsdoc(keywordDoc(name, value, color)) +
        `readonly ${JSON.stringify(key)}: SystemKeyword<Key, ${JSON.stringify(value)}>;`,
    )
    .join('\n');
  const signature = JSON.stringify(members) + fields;
  let index = sets.findIndex((set) => set.signature === signature);
  if (index < 0) {
    index = sets.length;
    sets.push({ signature, members });
    interfaces.push(`interface KeywordSet${index}<Key extends PropertyName> {\n${fields}\n}`);
  }
  const comment = jsdoc(description(name));
  slotLines.push(comment + `declare readonly ${name}: {};`);
  propertyLines.push(comment + `readonly ${name}?: PropertyValue<${JSON.stringify(name)}, T>;`);
  viewLines.push(comment + `readonly ${name}: KeywordSet${index}<${JSON.stringify(name)}>;`);
  const runtimeSignature = JSON.stringify(members);
  let runtimeIndex = runtimeSets.findIndex((item) => JSON.stringify(item) === runtimeSignature);
  if (runtimeIndex < 0) {
    runtimeIndex = runtimeSets.length;
    runtimeSets.push(members);
  }
  runtimeLines.push(`${JSON.stringify(name)}: sets[${runtimeIndex}],`);
}
const outputs = {
  'system.ts':
    header +
    `import type { PropertyName } from '../types.ts';\nimport { THEME_SOURCE, type SystemKeyword } from '../tokens.ts';\n` +
    `/** 系统关键字的主题扩展边界；子类在属性组中增加 _ 开头的主题成员。 */\nexport class SystemKeywords {\nreadonly [THEME_SOURCE] = true as const;\n${slotLines.join('\n')}\n}\n` +
    interfaces.join('\n') +
    `\nexport interface SystemViews {\n${viewLines.join('\n')}\n}\n`,
  'properties.ts':
    header +
    `import type { PropertyValue } from '../types.ts';\nimport type { SystemKeywords } from './system.ts';\nexport interface CssProperties<T extends SystemKeywords = SystemKeywords> {\n${propertyLines.join('\n')}\n}\n`,
  'keywords.ts':
    header +
    `const sets = ${JSON.stringify(runtimeSets)} as const;\nexport const systemValues = {\n${runtimeLines.join('\n')}\n} as const;\nexport type ColorProperty = ${colorNames.map(JSON.stringify).join(' | ')};\nexport type SystemValue<Key extends keyof typeof systemValues> = Extract<(typeof systemValues)[Key][keyof (typeof systemValues)[Key]], string>;\n`,
};
const destination = resolve(root, 'packages/css/src/generated');
await mkdir(destination, { recursive: true });
const config = await prettier.resolveConfig(resolve(root, 'package.json'));
for (const [name, content] of Object.entries(outputs)) {
  const formatted = await prettier.format(content, { ...config, parser: 'typescript' });
  const path = resolve(destination, name);
  if (process.argv.includes('--check'))
    assert.equal(
      (await readFile(path, 'utf8')).replaceAll('\r\n', '\n'),
      formatted.replaceAll('\r\n', '\n'),
      `Generated file changed: ${name}`,
    );
  else await writeFile(path, formatted);
}
console.log(
  `Generated ${properties.length} documented properties, ${sets.length} keyword views and ${colorNames.length} color-compatible properties.`,
);
