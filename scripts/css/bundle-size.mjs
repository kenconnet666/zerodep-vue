import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { gzipSync } from 'node:zlib';
import { build } from 'vite';
import { command, root } from '../packages/common.mjs';

// 本地 --source 只跑内存探针；CI 默认检查已经构建的实际分发入口。
const source = process.argv.includes('--source');
assert(
  process.argv.slice(2).every((arg) => arg === '--source'),
  'Unknown bundle probe argument.',
);
const entry = resolve(root, '__css_bundle_probe__.ts').replaceAll('\\', '/');
const result = await build({
  root,
  configFile: false,
  logLevel: 'silent',
  ...(source ? { resolve: { conditions: ['zerodep-vue-source'] } } : {}),
  plugins: [
    {
      name: 'css-bundle-probe',
      resolveId(id) {
        if (id.replaceAll('\\', '/') === entry) return entry;
      },
      load(id) {
        if (id === entry)
          return "import {createCssContext,SystemKeywords} from '@zerodep-vue/core';export const style=createCssContext(new SystemKeywords()).useCss().display('flex');";
      },
    },
  ],
  build: {
    write: false,
    minify: true,
    target: 'esnext',
    lib: { entry, formats: ['es'], fileName: 'css-probe' },
    rolldownOptions: { external: ['vue'] },
  },
});
const chunks = (Array.isArray(result) ? result : [result])
  .flatMap((output) => output.output)
  .filter((output) => output.type === 'chunk');
assert.equal(chunks.length, 1);
const output = chunks[0];
const report = {
  commit: command('git', ['rev-parse', 'HEAD'], root).trim(),
  dirty: Boolean(command('git', ['status', '--porcelain'], root).trim()),
  node: process.version,
  source,
  vueExternal: true,
  minifiedBytes: Buffer.byteLength(output.code),
  gzipBytes: gzipSync(output.code).length,
  gzipBudget: 48000,
};
if (!source) {
  assert(!report.dirty, 'CI size evidence must come from a clean tracked checkout.');
  assert(
    Object.keys(output.modules).some((id) =>
      /packages\/core\/dist\//.test(id.replaceAll('\\', '/')),
    ),
    'Probe must consume the built core package.',
  );
  await mkdir(resolve(root, 'test-results'), { recursive: true });
  await writeFile(
    resolve(root, 'test-results/css-bundle.json'),
    JSON.stringify(report, null, 2) + '\n',
  );
}
console.log(JSON.stringify(report));
assert(
  report.gzipBytes <= report.gzipBudget,
  'CSS author entry exceeded its reviewed gzip budget.',
);
