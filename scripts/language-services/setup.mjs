import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { parse } from 'smol-toml';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const requireProject = createRequire(resolve(root, 'package.json'));
if (requireProject('typescript/package.json').version !== '6.0.3')
  throw new Error('Run pnpm install with the pinned TypeScript 6.0.3 dependencies first.');
await access(requireProject.resolve('typescript-language-server/lib/cli.mjs'));
const template = await readFile(resolve(root, '.codex/config.example.toml'), 'utf8');
const managed = template
  .replace('__NODE__', JSON.stringify(process.execPath.replaceAll('\\', '/')))
  .replace('__ROOT__', JSON.stringify(root.replaceAll('\\', '/')))
  .slice(template.indexOf('# BEGIN ZERODEP VUE LANGUAGE SERVICES'))
  .trim();
const configPath = resolve(root, '.codex/config.toml');
const existing = await readFile(configPath, 'utf8').catch((error) => {
  if (error.code === 'ENOENT') return '';
  throw error;
});
const pattern =
  /^# BEGIN ZERODEP VUE LANGUAGE SERVICES\r?\n[\s\S]*?^# END ZERODEP VUE LANGUAGE SERVICES[^\r\n]*/mu;
let updated;
if (pattern.test(existing)) {
  updated = existing.replace(pattern, () => managed);
} else {
  if (parse(existing).mcp_servers?.zerodep_vue_lsp)
    throw new Error('Unmanaged zerodep_vue_lsp configuration already exists; preserving it.');
  updated = existing.trimEnd() + '\n' + managed;
}
updated = updated.trimStart().trimEnd() + '\n';
parse(updated);
await mkdir(dirname(configPath), { recursive: true });
await writeFile(configPath, updated);
console.log('Configured zerodep_vue_lsp in ' + configPath);
console.log('Inspect affected files with pnpm lsp:inspect, then reload this workspace session.');
