import { spawnSync } from 'node:child_process';
import {
  mkdtempSync,
  readFileSync,
  readdirSync,
  lstatSync,
  realpathSync,
  unlinkSync,
  rmdirSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const cases = ['types', 'browser', 'ssr', 'component'];
const requested = process.argv.slice(2);
const selected = requested.length ? requested : cases;
if (selected.some((name) => !cases.includes(name)))
  throw new Error('只支持 types、browser、ssr、component，省略时顺序运行全部短探测。');
const parent = realpathSync(tmpdir());
const directory = mkdtempSync(join(parent, 'zerodep-vue-css-probe-'));
const reports = new Set([
  'types-results.json',
  'browser-results.json',
  'ssr-results.json',
  'live-results.json',
]);
let failed = false;
try {
  for (const name of selected) {
    const result = spawnSync(
      process.execPath,
      [resolve(root, 'packages/ui/test/css-authoring', name + '.mjs')],
      {
        cwd: root,
        stdio: 'inherit',
        env: { ...process.env, ZERODEP_CSS_PROBE_RESULTS: directory },
        // 浏览器操作各自有短超时；不硬杀 Node，保证其 finally 能关闭浏览器后代进程。
      },
    );
    if (result.error) process.stderr.write(result.error.message + '\n');
    if (result.status !== 0) {
      failed = true;
      break;
    }
  }
  const summaries = [];
  for (const file of readdirSync(directory)) {
    if (!reports.has(file)) continue;
    const report = JSON.parse(readFileSync(join(directory, file), 'utf8'));
    const entries = report.results ?? [];
    summaries.push({
      file,
      total: entries.length,
      passed: entries.filter((entry) => entry.status === 'passed').length,
      failed: entries.filter((entry) => entry.status === 'failed').length,
      boundaries: entries.filter((entry) => entry.kind === 'boundary' || entry.kind === 'tradeoff')
        .length,
    });
  }
  process.stdout.write(JSON.stringify({ probe: 'css-authoring', summaries }, null, 2) + '\n');
} finally {
  // 只删除本次进程创建的报告；未知文件或链接会被保留，不递归清理。
  const actual = realpathSync(directory);
  if (!actual.startsWith(parent + sep)) throw new Error('探测报告目录越出了临时目录。');
  for (const file of readdirSync(actual)) {
    const target = join(actual, file);
    if (!reports.has(file) || !lstatSync(target).isFile() || lstatSync(target).isSymbolicLink())
      throw new Error('存在未识别的探测产物，已保留：' + target);
    unlinkSync(target);
  }
  rmdirSync(actual);
  process.stdout.write('已删除本次临时探测报告及空目录。\n');
}
if (failed) process.exitCode = 1;
