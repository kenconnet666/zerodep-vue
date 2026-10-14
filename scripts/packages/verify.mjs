import assert from 'node:assert/strict';
import { cp, mkdir, readFile, writeFile, copyFile, realpath } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { artifacts, command, pnpm, readJson, report, root, sha256, names } from './common.mjs';
import { createOwnedDirectory, removeOwnedDirectory } from './owned-directory.mjs';
import { outsideDirectory } from './path-boundary.mjs';

const packed = await readJson(join(artifacts, 'pack.json'));
assert(
  packed.success && packed.packages.length === names.length,
  'Requires the core, compiler and ui tarballs from packages:pack.',
);
assert.deepEqual(
  packed.packages.map((entry) => entry.name).sort(),
  names.map((name) => `@zerodep-vue/${name}`).sort(),
);
if (process.env.GITHUB_SHA)
  assert.equal(packed.commit, process.env.GITHUB_SHA, 'Tarball commit differs from this CI run.');
const owned = await createOwnedDirectory();
const result = {
  commit: packed.commit,
  platform: process.platform,
  node: process.version,
  outsideWorkspace: false,
  success: false,
};
const env = { ...process.env, NODE_OPTIONS: '', ZV_FORBIDDEN_WORKSPACE: await realpath(root) };
for (const key of [
  'INIT_CWD',
  'PNPM_WORKSPACE_DIR',
  'PNPM_SCRIPT_SRC_DIR',
  'TS_NODE_PROJECT',
  'NODE_PATH',
])
  delete env[key];
try {
  assert(
    outsideDirectory(await realpath(root), await realpath(owned.root)),
    'Consumer must be outside the workspace.',
  );
  result.outsideWorkspace = true;
  await cp(join(root, 'fixtures/package-consumer/template'), owned.root, {
    recursive: true,
    force: false,
  });
  // 仓库中的模板按源码编辑；真正消费者必须使用独立配置，不能带入源码条件或路径。
  await copyFile(
    join(root, 'fixtures/package-consumer/tsconfig.consumer.json'),
    join(owned.root, 'tsconfig.json'),
  );
  await mkdir(join(owned.root, 'artifacts'));
  const dependencies = {};
  for (const entry of packed.packages) {
    const data = await readFile(join(artifacts, entry.file));
    assert.equal(sha256(data), entry.sha256, `Tarball hash mismatch: ${entry.name}`);
    await writeFile(join(owned.root, 'artifacts', entry.file), data);
    dependencies[entry.name] = `file:./artifacts/${entry.file}`;
  }
  // 使用真实 tarball 中已展开的 peer 版本；不能依赖工作区链接或安装器自动补齐。
  for (const entry of packed.packages) {
    const manifest = JSON.parse(
      command('tar', ['-xOf', join(artifacts, entry.file), 'package/package.json'], root),
    );
    for (const [name, version] of Object.entries(manifest.peerDependencies ?? {}))
      dependencies[name] ??= version;
  }
  const require = createRequire(join(root, 'package.json'));
  for (const name of [
    'vue',
    '@vue/server-renderer',
    '@babel/core',
    '@babel/preset-typescript',
    'vite',
    'typescript',
    '@types/node',
  ])
    dependencies[name] = require(`${name}/package.json`).version;
  await writeFile(
    join(owned.root, 'package.json'),
    JSON.stringify(
      {
        name: 'zerodep-vue-isolated-consumer',
        private: true,
        type: 'module',
        packageManager: (await readJson(join(root, 'package.json'))).packageManager,
        dependencies,
      },
      null,
      2,
    ),
  );
  await writeFile(
    join(owned.root, 'pnpm-workspace.yaml'),
    'packages: []\nlinkWorkspacePackages: false\nnodeLinker: isolated\nvirtualStoreDir: node_modules/.pnpm\nenableGlobalVirtualStore: false\nautoInstallPeers: false\nstrictPeerDependencies: true\n',
  );
  pnpm(['install', '--ignore-scripts', '--no-frozen-lockfile'], owned.root, { env });
  for (const script of ['verify-runtime.mjs', 'verify-types.mjs']) {
    const output = command(process.execPath, [script], owned.root, { env });
    console.log(output.trim());
  }
  result.runtime = await readJson(join(owned.root, 'runtime-report.json'));
  result.types = await readJson(join(owned.root, 'types-report.json'));
  await copyFile(
    join(owned.root, 'pnpm-lock.yaml'),
    join(artifacts, `consumer-${process.platform}-lock.yaml`),
  );
  result.success = true;
} catch (error) {
  result.error = error.stack ?? String(error);
  // 失败时保留自己创建的目录，以便使用原产物与依赖精确复现。
  result.retainedDirectory = owned.root;
  throw error;
} finally {
  try {
    if (result.success) {
      await removeOwnedDirectory(owned);
      result.cleaned = true;
    }
  } catch (error) {
    result.success = false;
    result.cleanupError = error.stack ?? String(error);
    result.retainedDirectory = owned.root;
    throw error;
  } finally {
    await report(`consumer-${process.platform}.json`, result);
  }
}
