import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import prettier from 'prettier';
import docs from './property-docs.json' with { type: 'json' };
import { aliases, summaries } from './compat-docs.mjs';
import { propertyGroup, propertyGroups } from './property-groups.mjs';

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
const interfaceNames = (name) =>
  new Set(
    checker
      .getPropertiesOfType(
        checker.getTypeAtLocation(
          ast.statements.find((node) => ts.isInterfaceDeclaration(node) && node.name.text === name),
        ),
      )
      .map((property) => property.name),
  );
const svg = interfaceNames('SvgProperties');
const obsolete = interfaceNames('ObsoleteProperties');
const groups = new Map(propertyGroups.map(([name]) => [name, []]));
for (const [name, group] of Object.entries({
  display: 'Layout',
  color: 'Colors',
  gap: 'Spacing',
  boxSizing: 'Sizing',
  fill: 'Svg',
  WebkitLineClamp: 'Compatibility',
}))
  assert.equal(propertyGroup(name, svg, obsolete), group, `Unexpected property category: ${name}`);
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
    (detail?.commonValues?.length
      ? '\n\n常用值：' + detail.commonValues.map((value) => `\`${value}\``).join('、') + '。'
      : '') +
    (initial ? `\n\nCSS 规范初始值：\`${initial}\`，不同于浏览器默认样式表。` : '') +
    (detail?.examples?.length
      ? '\n' + detail.examples.map((example) => '@example\n' + example).join('\n')
      : '') +
    (obsolete.has(name) ? '\n@deprecated 历史属性；新代码优先使用标准替代属性。' : '') +
    `\n@category ${propertyGroups.find(([group]) => group === propertyGroup(name, svg, obsolete))[1]}` +
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
      ...(entry.examples ?? []).map((example) => '@example\n' + example),
    ]
      .filter(Boolean)
      .join('\n\n');
  if (value === '-moz-initial') return '旧版 Gecko 的初始值关键字；现代样式优先使用 initial。';
  if (value === 'auto') return '由当前属性的布局或排版规则自动决定，不等同于数值 0。';
  if (value === 'none') return '关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。';
  if (value === 'normal') return '使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。';
  if (color) return `CSS 颜色关键字 ${value}；系统颜色会随用户环境和配色设置变化。`;
  return `${cssName(name)} 的原生 ${value} 值；具体布局或绘制效果见该属性参考。\n@see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/${cssName(name)}`;
}

const runtimeSets = [];
const interfaces = [];
const slotLines = [];
const viewLines = [];
const runtimeLines = [];
const colorNames = [];
const header = '// 由 scripts/css/generate.mjs 从固定 csstype@3.2.3 生成。说明只进入类型声明。\n';
const literalValues = (type) =>
  [
    ...new Set(
      (type.isUnion() ? type.types : [type])
        .filter((part) => part.flags & ts.TypeFlags.StringLiteral)
        .map((part) => part.value),
    ),
  ].sort();
const dataTypes = ast.statements.find(
  (node) => ts.isModuleDeclaration(node) && node.name.text === 'DataType',
);
const commonGroups = [
  ['Globals', 'CssWideKeywords'],
  ['NamedColor', 'NamedColorKeywords'],
  ['SystemColor', 'SystemColorKeywords'],
  ['DeprecatedSystemColor', 'DeprecatedSystemColorKeywords'],
].map(([source, name]) => {
  const nodes = source === 'Globals' ? ast.statements : dataTypes.body.statements;
  const node = nodes.find((item) => ts.isTypeAliasDeclaration(item) && item.name.text === source);
  assert(node, `Missing csstype value group: ${source}`);
  return { name, values: literalValues(checker.getTypeAtLocation(node)) };
});
// 每个关键字只提供一种成员拼写；CSS 字符串仍使用原生拼写。
const memberName = (value) =>
  value === 'currentcolor'
    ? 'currentColor'
    : value.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
const field = (property, value, color) =>
  jsdoc(keywordDoc(property, value, color)) +
  `readonly ${JSON.stringify(memberName(value))}: SystemKeyword<Key, ${JSON.stringify(value)}>;`;
for (const group of commonGroups) {
  interfaces.push(
    `export interface ${group.name}<Key extends PropertyName> {\n` +
      group.values
        .map((value) => {
          if (group.name === 'CssWideKeywords') return field('color', value, false);
          const named = group.name === 'NamedColorKeywords';
          const description = named
            ? `CSS 命名颜色 ${value}。`
            : `CSS 系统颜色 ${value}；实际颜色由浏览器和用户环境决定。`;
          return (
            jsdoc(
              description +
                (group.name === 'DeprecatedSystemColorKeywords'
                  ? '\n@deprecated 历史系统颜色；优先使用现代系统颜色。'
                  : '') +
                `\n@see https://developer.mozilla.org/docs/Web/CSS/${named ? 'named-color' : 'system-color'}`,
            ) +
            `readonly ${JSON.stringify(memberName(value))}: SystemKeyword<Key, ${JSON.stringify(value)}>;`
          );
        })
        .join('\n') +
      '\n}',
  );
}
for (const property of properties) {
  const name = property.name;
  const type = checker.getTypeOfSymbolAtLocation(property, property.valueDeclaration);
  const values = literalValues(type);
  const color = values.includes('red') && values.includes('blue');
  if (color) colorNames.push(name);
  const members = {};
  for (const value of values) {
    const member = memberName(value);
    assert(
      !members[member] || members[member].toLowerCase() === value.toLowerCase(),
      `Keyword member collision: ${name}.${member}`,
    );
    members[member] = value;
  }
  const common = commonGroups.filter((group) =>
    group.values.every((value) => values.includes(value)),
  );
  const shared = new Set(common.flatMap((group) => group.values));
  const fields = Object.values(members)
    .filter((value) => !shared.has(value))
    .map((value) => field(name, value, color))
    .join('\n');
  const typeName = name[0].toUpperCase() + name.slice(1) + 'Keywords';
  interfaces.push(
    `export interface ${typeName}<Key extends PropertyName>` +
      (common.length ? ' extends ' + common.map((group) => `${group.name}<Key>`).join(', ') : '') +
      ` {\n${fields}\n}`,
  );
  const comment = jsdoc(description(name));
  slotLines.push(comment + `declare readonly ${name}: {};`);
  groups
    .get(propertyGroup(name, svg, obsolete))
    .push(comment + `readonly ${name}?: PropertyValue<${JSON.stringify(name)}, T>;`);
  viewLines.push(comment + `readonly ${name}: ${typeName}<${JSON.stringify(name)}>;`);
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
    `import { THEME_SOURCE } from '../tokens.ts';\n` +
    `/** 系统关键字的主题扩展边界；子类在属性组中增加 _ 开头的主题成员。 */\nexport class SystemKeywords {\nreadonly [THEME_SOURCE] = true as const;\n${slotLines.join('\n')}\n}\n` +
    `export type { SystemViews } from './keyword-views.ts';\n`,
  'keyword-views.ts':
    header +
    `import type { PropertyName } from '../types.ts';\nimport type { SystemKeyword } from '../tokens.ts';\n` +
    interfaces.join('\n') +
    `\nexport interface SystemViews {\n${viewLines.join('\n')}\n}\n`,
  'properties.ts':
    header +
    `import type { PropertyValue } from '../types.ts';\nimport type { SystemKeywords } from './system.ts';\n` +
    propertyGroups
      .map(
        ([name, label]) =>
          `/** ${label}；泛型 T 保留系统与继承主题关键字。 */\nexport interface ${name}Properties<T extends SystemKeywords = SystemKeywords> {\n${groups.get(name).join('\n')}\n}`,
      )
      .join('\n') +
    `\nexport interface CssProperties<T extends SystemKeywords = SystemKeywords> extends ${propertyGroups.map(([name]) => `${name}Properties<T>`).join(', ')} {}\n`,
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
  `Generated ${properties.length} properties in ${groups.size} categories, named keyword views and ${colorNames.length} color-compatible properties.`,
);
