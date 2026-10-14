import assert from 'node:assert/strict';
import { mkdir, readFile, unlink, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { connect } from './client.mjs';
import { root, requireProject } from './environment.mjs';

const shared = 'packages/tsx/src/__lsp_shared__.ts';
const probe = 'packages/tsx/src/__lsp_probe__.tsx';
const created = new Set();
const report = { versions: {}, checks: [] };
for (const name of ['typescript', 'typescript-language-server', 'vue'])
  report.versions[name] = requireProject(name + '/package.json').version;
assert.equal(report.versions.typescript, '6.0.3');

async function save(file, text) {
  await writeFile(resolve(root, file), text, {
    encoding: 'utf8',
    flag: created.has(file) ? 'w' : 'wx',
  });
  created.add(file);
}
function sharedSource(type = 'number') {
  return (
    'export const tokens = { primary: "red" } as const;\n' +
    'export function pixels(value: ' +
    type +
    '): string { return String(value); }\n'
  );
}
function source(valid) {
  return [
    "import { ref } from 'vue';",
    "import { tokens, pixels } from './__lsp_shared__.js';",
    'const count = ref(0);',
    'const amount: number = ' + (valid ? '1' : '"wrong"') + ';',
    'const tone = tokens.' + (valid ? 'primary' : 'missing') + ';',
    'const width = pixels(' + (valid ? '12' : '"wrong"') + ');',
    'export const view = () => <button disabled={false} style={{ color: tone }}',
    '  onClick={() => count.value++}>{count.value}{amount}{width}</button>;',
    '',
  ].join('\n');
}
async function position(needle, offset = 0) {
  const text = await readFile(resolve(root, probe), 'utf8');
  const index = text.indexOf(needle);
  assert(index >= 0, 'Missing probe: ' + needle);
  const before = text.slice(0, index + offset);
  return {
    filePath: probe,
    line: before.split('\n').length,
    column: before.length - before.lastIndexOf('\n'),
  };
}

let connection;
try {
  await save(shared, sharedSource());
  await save(probe, source(false));
  connection = await connect();
  const names = (await connection.client.listTools()).tools.map((tool) => tool.name).sort();
  assert.deepEqual(names, ['completions', 'definitions', 'diagnostics', 'hover', 'references']);

  for (const valid of [false, true]) {
    await save(probe, source(valid));
    const result = await connection.call('diagnostics', { filePath: probe });
    assert.equal(result.complete, true);
    assert.equal(result.typescript.version, '6.0.3');
    if (valid) assert.equal(result.errors, 0, JSON.stringify(result));
    else {
      for (const code of [2322, 2339, 2345])
        assert(
          result.diagnostics.some((item) => Number(item.code) === code),
          JSON.stringify(result),
        );
    }
    report.checks.push({ name: valid ? 'error-to-clean' : 'seeded-type-errors', result });
    console.log(
      JSON.stringify({ check: valid ? 'clean' : 'seeded errors', errors: result.errors }),
    );
  }

  const hover = await connection.call('hover', await position('pixels(12)'));
  assert(JSON.stringify(hover.contents).includes('number'), JSON.stringify(hover));
  const definitions = await connection.call('definitions', await position('pixels(12)'));
  assert(
    definitions.items.some((item) => item.filePath.includes('__lsp_shared__')),
    JSON.stringify(definitions),
  );
  const references = await connection.call('references', await position('count.value'));
  assert(references.total >= 2, JSON.stringify(references));
  const completions = await connection.call('completions', {
    ...(await position('tokens.primary', 'tokens.'.length)),
    prefix: 'pri',
    resolveLimit: 1,
  });
  assert(
    completions.items.some((item) => item.label === 'primary'),
    JSON.stringify(completions),
  );
  const jsx = await connection.call('completions', {
    ...(await position('disabled={false}', 3)),
    prefix: 'dis',
  });
  // 上游标签用 disabled? 表示可选属性，验收实际插入文本，不能伪造补全标签。
  assert(
    jsx.items.some((item) => (item.textEdit?.newText ?? item.insertText) === 'disabled'),
    JSON.stringify(jsx),
  );
  report.checks.push({
    name: 'semantic-tools-and-tsx-completion',
    hover,
    definitions,
    references,
    completions,
    jsx,
  });

  // 修改被 import 的文件，而不是只修改当前打开的文档，验证依赖刷新。
  await save(shared, sharedSource('string'));
  await connection.call('diagnostics', { filePath: shared });
  const changed = await connection.call('diagnostics', { filePath: probe });
  assert(
    changed.diagnostics.some((item) => Number(item.code) === 2345),
    JSON.stringify(changed),
  );
  await save(shared, sharedSource());
  await connection.call('diagnostics', { filePath: shared });
  const restored = await connection.call('diagnostics', { filePath: probe });
  assert.equal(restored.errors, 0, JSON.stringify(restored));
  report.checks.push({ name: 'dependency-error-to-clean', changed, restored });

  await save(probe, source(true) + 'const broken = ;\n');
  const syntax = await connection.call('diagnostics', { filePath: probe });
  assert(
    syntax.errors > 0 && syntax.diagnostics.some((item) => Number(item.code) === 1109),
    JSON.stringify(syntax),
  );
  await save(probe, source(true));
  assert.equal((await connection.call('diagnostics', { filePath: probe })).errors, 0);
  report.checks.push({ name: 'syntax-error-to-clean', syntax });

  const outside = await connection.client.callTool({
    name: 'diagnostics',
    arguments: { filePath: process.execPath },
  });
  assert(outside.isError && outside.content[0].text.includes('outside the configured workspace'));
  report.checks.push({ name: 'workspace-isolation', passed: true });
  for (const filePath of [
    'packages/compiler/src/index.ts',
    'packages/tsx/src/index.ts',
    'packages/css/src/index.ts',
    'fixtures/legacy-tsx/src/Counter.tsx',
  ]) {
    const result = await connection.call('diagnostics', { filePath });
    assert(result.complete && result.errors === 0, JSON.stringify(result));
    report.checks.push({ name: 'workspace-file', result });
  }
  // 同一泛型作者视图必须同时保留系统成员和继承主题成员，不能只证明默认 css 可用。
  const themeFile = 'fixtures/authoring/src/theme-types.tsx';
  const themeText = await readFile(resolve(root, themeFile), 'utf8');
  const themeDiagnostics = await connection.call('diagnostics', { filePath: themeFile });
  assert(
    themeDiagnostics.complete && themeDiagnostics.errors === 0,
    JSON.stringify(themeDiagnostics),
  );
  for (const [needle, member] of [
    ['keywords.color._brand', '_brand'],
    ['keywords.display.flex', 'flex'],
  ]) {
    const genericStart = themeText.indexOf('export function reusable');
    const match = themeText.indexOf(needle, genericStart);
    assert(genericStart >= 0 && match >= 0);
    const index = match + needle.lastIndexOf('.') + 1;
    const before = themeText.slice(0, index);
    const query = {
      filePath: themeFile,
      line: before.split('\n').length,
      column: before.length - before.lastIndexOf('\n'),
    };
    const hover = await connection.call('hover', query);
    assert(/\p{Script=Han}/u.test(JSON.stringify(hover.contents)), JSON.stringify(hover));
    const completions = await connection.call('completions', {
      ...query,
      prefix: member,
      resolveLimit: 1,
    });
    assert(
      completions.items.some((item) => item.label === member),
      JSON.stringify(completions),
    );
    assert(/\p{Script=Han}/u.test(JSON.stringify(completions.items)), JSON.stringify(completions));
    report.checks.push({ name: 'generic-theme-keyword', member, hover, completions });
  }
  const literalFile = 'fixtures/authoring/src/literal-types.tsx';
  const literalText = await readFile(resolve(root, literalFile), 'utf8');
  for (const [marker, value] of [
    ['font', 'inherit'],
    ['display', 'inline-flex'],
    ['conditional', 'inline-flex'],
    ['binding', 'relative'],
    ['assertion', 'border-box'],
  ]) {
    const end = literalText.indexOf('// literal:' + marker);
    assert(end > 0);
    const close = literalText.lastIndexOf("'", end);
    const index = literalText.lastIndexOf("'", close - 1) + 2;
    const before = literalText.slice(0, index);
    const query = {
      filePath: literalFile,
      line: before.split('\n').length,
      column: before.length - before.lastIndexOf('\n'),
    };
    const hover = await connection.call('hover', query);
    const definitions = await connection.call('definitions', query);
    const completions = await connection.call('completions', {
      ...query,
      prefix: value,
      resolveLimit: 1,
    });
    assert(/\p{Script=Han}/u.test(JSON.stringify(hover.contents)));
    assert(definitions.items.some((entry) => /literal-values\.ts$/.test(entry.filePath)));
    assert(
      completions.items.some(
        (entry) =>
          entry.label === value && /\p{Script=Han}/u.test(JSON.stringify(entry.documentation)),
      ),
    );
    report.checks.push({ name: 'literal-keyword', value, hover, definitions, completions });
  }
  await mkdir(resolve(root, 'test-results/language-services'), { recursive: true });
  await writeFile(
    resolve(root, 'test-results/language-services/verification.json'),
    JSON.stringify(report, null, 2) + '\n',
  );
  console.log(
    'VERIFIED: TypeScript 6.0.3 diagnostics, hover, definitions, references, TSX completions, dependency refresh and isolation.',
  );
} catch (error) {
  console.error(connection?.log ?? '');
  console.error(error);
  process.exitCode = 1;
} finally {
  await connection?.close();
  for (const file of created) await unlink(resolve(root, file));
}
