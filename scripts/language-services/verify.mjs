import assert from 'node:assert/strict';
import { mkdir, readFile, unlink, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';
import { connect } from './client.mjs';
import { root, requireProject } from './environment.mjs';

const shared = 'packages/ui/test/__lsp_shared__.ts';
const probe = 'packages/ui/test/__lsp_probe__.tsx';
const created = new Set();
const report = { versions: {}, checks: [] };
for (const name of ['typescript', 'typescript-language-server'])
  report.versions[name] = requireProject(name + '/package.json').version;
report.versions.vue = createRequire(resolve(root, 'packages/ui/package.json'))(
  'vue/package.json',
).version;
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
    'packages/core/vitest.config.ts',
    'packages/compiler/vitest.config.ts',
    'packages/compiler/src/index.ts',
    'packages/core/src/index.ts',
    'packages/ui/test/foundation.test.tsx',
  ]) {
    const result = await connection.call('diagnostics', { filePath });
    assert(result.complete && result.errors === 0, JSON.stringify(result));
    report.checks.push({ name: 'workspace-file', result });
  }
  // 在 UI 的真实测试组件中核对 CSS 字面量说明与定义定位。
  const filePath = 'packages/ui/test/foundation.test.tsx';
  const text = await readFile(resolve(root, filePath), 'utf8');
  const offset = text.indexOf("'block'") + 2;
  assert(offset > 1);
  const before = text.slice(0, offset);
  const query = {
    filePath,
    line: before.split('\n').length,
    column: before.length - before.lastIndexOf('\n'),
  };
  const cssHover = await connection.call('hover', query);
  const cssDefinitions = await connection.call('definitions', query);
  const cssCompletions = await connection.call('completions', {
    ...query,
    prefix: 'block',
    resolveLimit: 1,
  });
  assert(/\p{Script=Han}/u.test(JSON.stringify(cssHover.contents)));
  assert(cssDefinitions.items.some((entry) => /literal-values\.ts$/.test(entry.filePath)));
  assert(cssCompletions.items.some((entry) => entry.label === 'block'));
  report.checks.push({
    name: 'ui-css-literal',
    hover: cssHover,
    definitions: cssDefinitions,
    completions: cssCompletions,
  });
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
