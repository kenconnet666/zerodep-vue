import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { parse } from 'smol-toml';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { root } from './environment.mjs';

export async function connect(configuration) {
  const config =
    configuration ??
    parse(await readFile(resolve(root, '.codex/config.toml'), 'utf8')).mcp_servers?.zerodep_vue_lsp;
  if (!config || config.enabled === false) throw new Error('Run pnpm lsp:setup first.');
  const client = new Client({ name: 'zerodep-vue-lsp-verification', version: '0.0.0' });
  const transport = new StdioClientTransport({
    command: config.command,
    args: config.args,
    cwd: config.cwd,
    stderr: 'pipe',
  });
  let log = '';
  transport.stderr?.on('data', (data) => {
    log = (log + data).slice(-12000);
  });
  try {
    await client.connect(transport, { timeout: 30000 });
  } catch (error) {
    await client.close();
    await transport.close();
    throw new Error(log + '\n' + error);
  }
  return {
    client,
    get log() {
      return log;
    },
    async call(name, args) {
      const result = await client.callTool({ name, arguments: args }, undefined, {
        timeout: 90000,
      });
      if (result.isError) throw new Error(result.content?.[0]?.text ?? 'MCP tool failed');
      return JSON.parse(result.content[0].text);
    },
    async close() {
      await client.close();
      await transport.close();
    },
  };
}
