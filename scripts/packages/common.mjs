import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const artifacts = resolve(root, 'test-results/packages');
export const names = ['core', 'compiler', 'ui'];
export const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));
export const sha256 = (data) => createHash('sha256').update(data).digest('hex');
export async function files(directory, prefix = '') {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const name = prefix + entry.name;
    if (entry.isDirectory()) result.push(...(await files(join(directory, entry.name), name + '/')));
    else result.push(name);
  }
  return result.sort();
}
export function command(executable, args, cwd, options = {}) {
  const result = spawnSync(executable, args, {
    cwd,
    encoding: 'utf8',
    windowsHide: true,
    maxBuffer: 32 * 1024 * 1024,
    timeout: 180000,
    ...options,
  });
  if (result.error || result.status !== 0) {
    process.stderr.write((result.stdout ?? '') + (result.stderr ?? ''));
    throw result.error ?? new Error(`${executable} exited ${result.status}: ${args.join(' ')}`);
  }
  return result.stdout;
}
export function pnpm(args, cwd, options) {
  const entry = process.env.npm_execpath;
  assert(
    entry && /pnpm\.(?:c?js|mjs)$/.test(entry),
    'Run this workflow through pnpm packages:pack.',
  );
  return command(process.execPath, [entry, ...args], cwd, options);
}
export async function report(name, data) {
  await mkdir(artifacts, { recursive: true });
  await writeFile(join(artifacts, name), JSON.stringify(data, null, 2) + '\n');
}
