import assert from 'node:assert/strict';
import { mkdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  artifacts,
  command,
  files,
  names,
  pnpm,
  readJson,
  report,
  root,
  sha256,
} from './common.mjs';

await mkdir(artifacts, { recursive: true });
const commit = command('git', ['rev-parse', 'HEAD'], root).trim();
const license = (await readFile(join(root, 'LICENSE'), 'utf8')).replaceAll('\r\n', '\n');
const result = { commit, node: process.version, packages: [], success: false };
try {
  for (const name of names) {
    const directory = join(root, 'packages', name);
    const manifest = await readJson(join(directory, 'package.json'));
    const sources = new Set(await files(join(directory, 'src')));
    // 删除源码后 tsc 不会自动删旧输出；拒绝把已移除的桥接入口打进新包。
    for (const emitted of await files(join(directory, 'dist'))) {
      const stem = emitted.replace(/(?:\.d\.ts|\.js)(?:\.map)?$/, '');
      if (stem === emitted) continue;
      assert(
        sources.has(stem + '.ts') || sources.has(stem + '.tsx'),
        `Orphan emit ${name}/dist/${emitted}; remove stale output before packing.`,
      );
    }
    // 验证发射物对应当前源码，避免本地误把旧 dist 标成新提交的包。
    for (const source of sources) {
      if (!/\.(?:ts|tsx)$/.test(source) || source.endsWith('.d.ts')) continue;
      const map = await readJson(join(directory, 'dist', source.replace(/\.tsx?$/, '.js.map')));
      const text = (await readFile(join(directory, 'src', source), 'utf8')).replaceAll(
        '\r\n',
        '\n',
      );
      assert(
        map.sourcesContent?.some((content) => content?.replaceAll('\r\n', '\n') === text),
        `Stale or missing emit for ${name}/${source}; build before packing.`,
      );
    }
    const filename = `zerodep-vue-${name}-${manifest.version}.tgz`;
    pnpm(['pack', '--json', '--out', join(artifacts, filename)], directory);
    const archive = join(artifacts, filename);
    const listed = command('tar', ['-tzf', archive], root).trim().split(/\r?\n/).filter(Boolean);
    assert(
      listed.every((file) => file.startsWith('package/') && !file.split('/').includes('..')),
      'Tarball contains unsafe paths.',
    );
    const contents = new Set(listed.map((file) => file.slice(8)));
    const packed = JSON.parse(command('tar', ['-xOf', archive, 'package/package.json'], root));
    assert.deepEqual(Object.keys(packed.exports), ['.'], 'Packages expose only their root index.');
    assert.equal(packed.license, 'MIT');
    assert(
      !JSON.stringify(packed).includes('workspace:') &&
        !JSON.stringify(packed).includes('catalog:'),
      'Unresolved workspace dependency in packed manifest.',
    );
    for (const required of ['LICENSE', 'dist/index.js', 'dist/index.d.ts', 'src/index.ts'])
      assert(contents.has(required), `Missing ${name}/${required}`);
    assert.equal(
      command('tar', ['-xOf', archive, 'package/LICENSE'], root).replaceAll('\r\n', '\n'),
      license,
      `Packed ${name}/LICENSE must match the shared root license.`,
    );
    if (name === 'compiler')
      for (const required of ['upstream.json', 'src/editor/plugin.cjs'])
        assert(contents.has(required));
    const checkExport = (value) => {
      if (typeof value === 'string')
        assert(contents.has(value.replace(/^\.\//, '')), `Unpacked export target: ${value}`);
      else for (const child of Object.values(value)) checkExport(child);
    };
    checkExport(packed.exports);
    assert(
      !listed.some((file) => /\/(?:node_modules|test|\.codex|\.cache)\//.test(file)),
      'Development data leaked into tarball.',
    );
    const bytes = await readFile(archive);
    result.packages.push({
      name: packed.name,
      version: packed.version,
      file: filename,
      sha256: sha256(bytes),
      bytes: bytes.length,
      files: listed.length,
      exports: packed.exports,
    });
    console.log(`Packed ${packed.name}: ${listed.length} files, ${bytes.length} bytes.`);
  }
  result.success = true;
} catch (error) {
  result.error = error.stack ?? String(error);
  throw error;
} finally {
  await report('pack.json', result);
}
