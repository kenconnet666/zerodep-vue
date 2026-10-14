import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import prettier from 'prettier';
import docs from './property-docs.json' with { type: 'json' };
import metadata from 'mdn-data/css/properties.json' with { type: 'json' };
import { aliases, summaries } from './compat-docs.mjs';
import { propertyGroup, propertyGroups } from './property-groups.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const require = createRequire(resolve(root, 'packages/core/package.json'));
assert.equal(ts.version, '6.0.3');
assert.equal(require('csstype/package.json').version, '3.2.3');
assert.equal(createRequire(import.meta.url)('mdn-data/package.json').version, '2.27.1');
const filename = require.resolve('csstype/index.d.ts');
const inputFile = resolve(root, 'packages/core/__css-generator-types__.ts');
const inputSource =
  "import type * as CSS from 'csstype'; type Input = CSS.Properties<string | number>;";
const options = {
  target: ts.ScriptTarget.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  module: ts.ModuleKind.ESNext,
  noEmit: true,
  strictNullChecks: true,
  skipLibCheck: true,
};
const host = ts.createCompilerHost(options);
const getSourceFile = host.getSourceFile.bind(host);
const fileExists = host.fileExists.bind(host);
host.fileExists = (path) => resolve(path) === inputFile || fileExists(path);
host.getSourceFile = (path, languageVersion, ...rest) =>
  resolve(path) === inputFile
    ? ts.createSourceFile(path, inputSource, languageVersion, true)
    : getSourceFile(path, languageVersion, ...rest);
const program = ts.createProgram([filename, inputFile], options, host);
const checker = program.getTypeChecker();
const ast = program.getSourceFile(filename);
const concrete = checker.getTypeAtLocation(program.getSourceFile(inputFile).statements[1]);
const declaration = ast.statements.find(
  (node) => ts.isInterfaceDeclaration(node) && node.name.text === 'Properties',
);
const properties = checker
  .getPropertiesOfType(checker.getTypeAtLocation(declaration))
  .sort((a, b) => a.name.localeCompare(b.name, 'en'));
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
  caretColor: 'Colors',
  columnGap: 'Spacing',
  contentVisibility: 'Interaction',
  positionArea: 'Layout',
  positionTryFallbacks: 'Layout',
  anchorName: 'Layout',
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
const jsdoc = (text) =>
  '/**\n' +
  text
    .replaceAll('*/', '* /')
    .split('\n')
    .map((line) => ' * ' + line)
    .join('\n') +
  '\n */\n';

const initialLabels = {
  dependsOnUserAgent: '由浏览器决定',
  seeProse: '见该属性规范的具体规则',
  noPracticalInitialValue: '无独立的实际初始值',
  noneButOverriddenInUserAgentCSS: 'none（浏览器默认样式表可能覆盖）',
  zoomForTheTopLevelNoneForTheRest: '顶层文档为 zoom，其余为 none',
  startOrNamelessValueIfLTRRightIfRTL: '随书写方向采用起始侧对齐',
  autoForSmartphoneBrowsersSupportingInflation: '支持文本放大的移动浏览器为 auto',
};
function initialValue(value) {
  if (Array.isArray(value))
    return value
      .map((name) => {
        const initial = metadata[name]?.initial;
        return `${name}: ${Array.isArray(initial) ? '见其子属性' : (initialLabels[initial] ?? initial ?? '未记录')}`;
      })
      .join('；');
  return initialLabels[value] ?? value;
}

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
  const meta =
    metadata[cssName(name)] ?? metadata[cssName(base)] ?? (alias && metadata[cssName(alias)]);
  const initial =
    initialValue(meta?.initial) ??
    nativeDocs.get(name)?.match(/\*\*Initial value\*\*: `([^`]+)`/)?.[1];
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
    (initial
      ? `\n\nCSS 规范初始值：${initial}。不同于浏览器默认样式表。`
      : '\n\n初始值：当前固定数据源未记录，参见该属性规范。') +
    (meta ? `\n是否继承：${meta.inherited ? '是' : '否'}。` : '') +
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
const literalInterfaces = [];
const literalProperties = [];
const slotLines = [];
const viewLines = [];
const runtimeLines = [];
const colorNames = [];
const header = '// 由 scripts/css/generate.mjs 从固定 csstype@3.2.3 生成；请勿手改。\n';
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
    : value.replace(/-([a-z0-9])/g, (_match, letter) => letter.toUpperCase());
function keywordView(typeName, literalName, values, parents, comment) {
  const stable = values.filter((value) => memberName(value) === value);
  const bases = parents.map((name) => `${name}<Key>`);
  if (stable.length)
    bases.push(
      `SystemKeywordView<Pick<Values.${literalName}, ${stable.map(JSON.stringify).join(' | ')}>, Key>`,
    );
  // 同名成员直接投影原声明；只有不同拼写的 camelCase 别名需要自己的适配字段。
  const aliases = values
    .filter((value) => memberName(value) !== value)
    .map(
      (value) =>
        comment(value) +
        `readonly ${JSON.stringify(memberName(value))}: SystemKeyword<Key, ${JSON.stringify(value)}>;`,
    );
  return (
    `export interface ${typeName}<Key extends PropertyName>` +
    (bases.length ? ' extends ' + bases.join(', ') : '') +
    ` {\n${aliases.join('\n')}\n}`
  );
}
for (const group of commonGroups) {
  const literalName = group.name.replace(/Keywords$/, 'Values');
  const commentFor = (value) => {
    if (group.name === 'CssWideKeywords') {
      return jsdoc(keywordDoc('color', value, false));
    }
    const named = group.name === 'NamedColorKeywords';
    const description = named
      ? `CSS 命名颜色 ${value}。`
      : `CSS 系统颜色 ${value}；实际颜色由浏览器和用户环境决定。`;
    const comment = jsdoc(
      description +
        (group.name === 'DeprecatedSystemColorKeywords'
          ? '\n@deprecated 历史系统颜色；优先使用现代系统颜色。'
          : '') +
        `\n@see https://developer.mozilla.org/docs/Web/CSS/${named ? 'named-color' : 'system-color'}`,
    );
    return comment;
  };
  const literalFields = group.values.map(
    (value) => commentFor(value) + `readonly ${JSON.stringify(value)}: ${JSON.stringify(value)};`,
  );
  interfaces.push(keywordView(group.name, literalName, group.values, [], commentFor));
  literalInterfaces.push(`export interface ${literalName} {\n${literalFields.join('\n')}\n}`);
}
for (const property of properties) {
  const name = property.name;
  // 字面量取原始泛型，防止 TLength=string 把 auto/颜色等候选折叠掉；数值边界取实际实例化类型。
  const type = checker.getTypeOfSymbolAtLocation(property, property.valueDeclaration);
  const concreteType = checker.getTypeOfPropertyOfType(concrete, name);
  const values = literalValues(type);
  const color = values.includes('red') && values.includes('blue');
  if (color) colorNames.push(name);
  const members = {};
  for (const value of values) {
    const member = memberName(value);
    assert(
      /^[A-Za-z_$][\w$]*$/.test(member),
      `Keyword member needs a usable name: ${name}.${member}`,
    );
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
  const typeName = name[0].toUpperCase() + name.slice(1) + 'Keywords';
  const literalName = name[0].toUpperCase() + name.slice(1) + 'Values';
  literalInterfaces.push(
    `export interface ${literalName}` +
      (common.length
        ? ' extends ' + common.map((group) => group.name.replace(/Keywords$/, 'Values')).join(', ')
        : '') +
      ` {\n${values
        .filter((value) => !shared.has(value))
        .map(
          (value) =>
            jsdoc(keywordDoc(name, value, color)) +
            `readonly ${JSON.stringify(value)}: ${JSON.stringify(value)};`,
        )
        .join('\n')}\n}`,
  );
  // keyof 连接原生字面量声明，同名关键词视图通过同态映射共享这份来源。
  const scalars = [
    ...new Set(
      (concreteType.isUnion() ? concreteType.types : [concreteType])
        .filter((part) => !checker.isTypeAssignableTo(part, checker.getStringType()))
        .map((part) => {
          if (part.flags & ts.TypeFlags.Undefined) return 'undefined';
          if (part.flags & ts.TypeFlags.NumberLiteral) return String(part.value);
          assert(
            checker.isTypeAssignableTo(checker.getNumberType(), part),
            `Unexpected non-string CSS type: ${name} ${checker.typeToString(part)}`,
          );
          return 'number';
        }),
    ),
  ];
  const known =
    `readonly ${name}: keyof ${literalName}` + scalars.map((value) => ' | ' + value).join('');
  literalProperties.push(
    known +
      (checker.isTypeAssignableTo(checker.getStringType(), concreteType) ? ' | CssString' : '') +
      ';',
  );
  interfaces.push(
    keywordView(
      typeName,
      literalName,
      Object.values(members).filter((value) => !shared.has(value)),
      common.map((group) => group.name),
      (value) => jsdoc(keywordDoc(name, value, color)),
    ),
  );
  const comment = jsdoc(description(name));
  slotLines.push(comment + `declare readonly ${name}: {};`);
  groups
    .get(propertyGroup(name, svg, obsolete))
    .push(
      comment +
        `${name}<const Value>(value: PropertyInput<${JSON.stringify(name)}, T, Value>): this { return this.write(${JSON.stringify(name)}, value); }`,
    );
  viewLines.push(comment + `readonly ${name}: ${typeName}<${JSON.stringify(name)}>;`);
  const runtimeSignature = JSON.stringify(members);
  let runtimeIndex = runtimeSets.findIndex((item) => JSON.stringify(item) === runtimeSignature);
  if (runtimeIndex < 0) {
    runtimeIndex = runtimeSets.length;
    runtimeSets.push(members);
  }
  runtimeLines.push(`${JSON.stringify(name)}: ${runtimeIndex},`);
}
// 只保留属性到共享组的索引；大字典在实际读取该组时创建，并复用公共关键字集合。
const commonRuntime = commonGroups.map((group) =>
  Object.fromEntries(group.values.map((value) => [memberName(value), value])),
);
const runtimeFactories = runtimeSets.map((members) => {
  const used = commonRuntime.flatMap((group, index) =>
    Object.entries(group).every(([name, value]) => members[name] === value) ? [index] : [],
  );
  const shared = new Set(used.flatMap((index) => Object.keys(commonRuntime[index])));
  const own = Object.entries(members).filter(([name]) => !shared.has(name));
  const fields = [
    ...used.map((index) => `...common${index}(),`),
    ...own.map(([name, value]) => `${JSON.stringify(name)}: ${JSON.stringify(value)},`),
  ];
  return `lazy(() => Object.freeze({${fields.join('\n')}} as const))`;
});
const outputs = {
  'literal-values.ts':
    header +
    `/** 保留字面量候选，同时接收原属性允许的自由 CSS 字符串。 */\ntype CssString = string & {};\n` +
    literalInterfaces.join('\n') +
    `\n/** 生成时展开非字符串范围，关键词只引用一份说明来源。 */\nexport interface KeywordValues {\n${literalProperties.join('\n')}\n}\n`,
  'system.ts':
    header +
    `import { THEME_SOURCE } from '../tokens.ts';\n` +
    `/** 系统关键字的主题扩展边界；子类在属性组中增加 _ 开头的主题成员。 */\nexport class SystemKeywords {\nreadonly [THEME_SOURCE] = true as const;\n${slotLines.join('\n')}\n}\n` +
    `export type { SystemViews } from './keyword-views.ts';\n`,
  'keyword-views.ts':
    header +
    `import type { PropertyName, SystemKeywordView } from '../types.ts';\nimport type { SystemKeyword } from '../tokens.ts';\nimport type * as Values from './literal-values.ts';\n` +
    interfaces.join('\n') +
    `\nexport interface SystemViews {\n${viewLines.join('\n')}\n}\n`,
  'author.ts':
    header +
    `import type { PropertyInput } from '../types.ts';\nimport type { SystemKeywords } from './system.ts';\nimport { CssAuthor } from '../author.ts';\n` +
    `/** 不可变链式样式；每次调用返回新值，泛型 T 保留主题约束。 */\nexport class Css<T extends SystemKeywords = SystemKeywords> extends CssAuthor {\n${propertyGroups.map(([name]) => groups.get(name).join('\n')).join('\n')}\n}\n`,
  'keywords.ts':
    header +
    `import { lazy } from '../lazy.ts';\n` +
    commonRuntime
      .map(
        (group, index) =>
          `const common${index} = lazy(() => Object.freeze(${JSON.stringify(group)} as const));`,
      )
      .join('\n') +
    `\nconst sets = [${runtimeFactories.join(',\n')}] as const;\nconst propertySets = {\n${runtimeLines.join('\n')}\n} as const;\ntype Name = keyof typeof propertySets;\ntype Values<Key extends Name> = ReturnType<(typeof sets)[(typeof propertySets)[Key]]>;\nexport type SystemValue<Key extends Name> = Extract<Values<Key>[keyof Values<Key>], string>;\nexport function hasSystemProperty(name: string): name is Name { return Object.hasOwn(propertySets, name); }\nexport function getSystemValues(name: Name): Readonly<Record<string, string>> { return sets[propertySets[name]](); }\nexport const systemPropertyNames = lazy(() => Object.freeze(Object.keys(propertySets) as Name[]));\nexport const colorProperties = ${JSON.stringify(colorNames)} as const;\nexport type ColorProperty = (typeof colorProperties)[number];\n`,
};
const destination = resolve(root, 'packages/core/src/css/generated');
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
