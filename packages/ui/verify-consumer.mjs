import assert from 'node:assert/strict';
import { createHash, randomUUID } from 'node:crypto';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { basename, isAbsolute, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  copyFile,
  lstat,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rmdir,
  unlink,
  writeFile,
} from 'node:fs/promises';
import { command } from '../../scripts/build-utils.mjs';

const ui = fileURLToPath(new URL('./', import.meta.url));
const root = await realpath(join(ui, '../..'));
const artifacts = join(root, 'test-results/packages');
const output = join(ui, 'test-results/consumer');
const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));
const pack = await readJson(join(artifacts, 'pack.json'));
const commit = command('git', ['rev-parse', 'HEAD'], root).trim();
assert.equal(pack.commit, commit, 'Consumer must verify artifacts from the current commit.');
assert.equal(pack.success, true);
const pnpm = process.env.npm_execpath;
assert(pnpm && /pnpm\.(?:c?js|mjs)$/.test(pnpm), 'Run through pnpm test:consumer.');
const require = createRequire(import.meta.url);
const version = (name) => require(`${name}/package.json`).version;
const parent = await realpath(tmpdir());
const directory = await mkdtemp(join(parent, 'zerodep-vue-consumer-'));
const owner = randomUUID();
const marker = join(directory, '.consumer-owner');
await writeFile(marker, owner, { flag: 'wx' });
const report = { commit, platform: process.platform, success: false, cleaned: false, checks: {} };
await mkdir(output, { recursive: true });

try {
  // 先规范化路径；跨盘符的 relative 结果可能是绝对路径，不能只检查 ../。
  const fromRoot = relative(root, await realpath(directory));
  assert(
    isAbsolute(fromRoot) ||
      fromRoot === '..' ||
      fromRoot.startsWith(`..${process.platform === 'win32' ? '\\' : '/'}`),
  );
  report.outsideWorkspace = true;
  const dependencies = {};
  for (const item of pack.packages) {
    assert.equal(item.file, basename(item.file));
    const archive = join(artifacts, item.file);
    const bytes = await readFile(archive);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), item.sha256);
    const manifest = JSON.parse(command('tar', ['-xOf', archive, 'package/package.json'], root));
    Object.assign(dependencies, manifest.peerDependencies);
  }
  for (const item of pack.packages)
    dependencies[item.name] = pathToFileURL(join(artifacts, item.file)).href;
  for (const name of [
    '@babel/core',
    '@vue/server-renderer',
    'vite',
    'typescript',
    'jsdom',
    '@types/node',
  ])
    dependencies[name] = version(name);
  await writeFile(
    join(directory, 'package.json'),
    JSON.stringify(
      {
        name: 'zerodep-vue-installed-consumer',
        private: true,
        type: 'module',
        dependencies,
        packageManager: (await readJson(join(root, 'package.json'))).packageManager,
      },
      null,
      2,
    ),
  );
  await writeFile(
    join(directory, 'pnpm-workspace.yaml'),
    'packages: []\nstrictPeerDependencies: true\nautoInstallPeers: false\nallowBuilds:\n  esbuild: true\n',
  );
  await writeFile(
    join(directory, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2023',
          lib: ['ES2023', 'DOM', 'DOM.Iterable'],
          module: 'ESNext',
          moduleResolution: 'Bundler',
          jsx: 'preserve',
          strict: true,
          exactOptionalPropertyTypes: true,
          noUncheckedIndexedAccess: true,
          skipLibCheck: true,
          noEmit: true,
          types: [],
          customConditions: [],
        },
        include: ['*.tsx'],
      },
      null,
      2,
    ),
  );
  for (const entry of await readdir(join(ui, 'test/consumer')))
    await copyFile(join(ui, 'test/consumer', entry), join(directory, entry));
  command(process.execPath, [pnpm, 'install', '--no-frozen-lockfile'], directory);
  await copyFile(
    join(directory, 'pnpm-lock.yaml'),
    join(output, `consumer-${process.platform}.lock.yaml`),
  );
  for (const phase of ['types', 'build', 'ssr', 'hydrate']) {
    console.log(`Installed consumer: ${phase}`);
    command(process.execPath, ['verify.mjs', phase], directory);
    report.checks[phase] = await readJson(join(directory, `${phase}.json`));
  }
  report.success = true;
} catch (error) {
  report.error = error.stack ?? String(error);
  throw error;
} finally {
  try {
    assert.equal(await realpath(directory), directory);
    assert.equal(relative(parent, directory), basename(directory));
    assert.equal(await readFile(marker, 'utf8'), owner);
    // 只枚举本次 mkdtemp 的目录；链接逐项 unlink，绝不进入 pnpm 链接目标或共享 store。
    const removeOwned = async (path) => {
      const info = await lstat(path);
      if (info.isDirectory() && !info.isSymbolicLink()) {
        for (const name of await readdir(path)) await removeOwned(join(path, name));
        await rmdir(path);
      } else await unlink(path);
    };
    await removeOwned(directory);
    report.cleaned = true;
  } finally {
    await writeFile(
      join(output, `consumer-${process.platform}.json`),
      JSON.stringify(report, null, 2) + '\n',
    );
  }
}
