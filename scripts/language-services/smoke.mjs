import assert from 'node:assert/strict';
import { connect } from './client.mjs';

// 读取 codex mcp get --json 的实际结果，不能另造一套更容易成功的启动配置。
let input = '';
for await (const chunk of process.stdin) input += chunk;
const configurations = JSON.parse(input.replace(/^\uFEFF/u, ''));
for (const configuration of Array.isArray(configurations) ? configurations : [configurations]) {
  assert.equal(configuration.enabled, true);
  const connection = await connect(configuration.transport);
  try {
    const names = (await connection.client.listTools()).tools.map((tool) => tool.name).sort();
    assert.deepEqual(names, ['completions', 'definitions', 'diagnostics', 'hover', 'references']);
    const diagnostic = await connection.call('diagnostics', {
      filePath: 'fixtures/legacy-tsx/src/Counter.tsx',
    });
    assert.equal(diagnostic.complete, true);
    assert.equal(diagnostic.errors, 0, JSON.stringify(diagnostic));
    console.log(JSON.stringify({ server: configuration.name, tools: names, diagnostic }));
  } finally {
    await connection.close();
  }
}
