import { spawn, execFileSync } from 'node:child_process';
import { existsSync, realpathSync, watch } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { requireProject, root } from './environment.mjs';

const { createMessageConnection, StreamMessageReader, StreamMessageWriter } =
  requireProject('vscode-jsonrpc/node.js');
const children = new Set();
let pending;

function stop(child) {
  if (child.exitCode !== null || child.killed || !child.pid) return;
  // 只终止本桥接创建的进程树，不能按 node.exe 名称清理。
  if (process.platform === 'win32') {
    try {
      execFileSync('taskkill.exe', ['/PID', String(child.pid), '/T', '/F'], {
        windowsHide: true,
        stdio: 'ignore',
      });
    } catch {
      // 正常退出与兜底清理可能同时发生。
    }
  } else child.kill('SIGTERM');
}

async function start() {
  const typescriptVersion = requireProject('typescript/package.json').version;
  if (typescriptVersion !== '6.0.3')
    throw new Error('This workspace requires TypeScript 6.0.3, found ' + typescriptVersion);
  const child = spawn(
    process.execPath,
    [requireProject.resolve('typescript-language-server/lib/cli.mjs'), '--stdio'],
    {
      cwd: root,
      stdio: 'pipe',
      windowsHide: true,
    },
  );
  children.add(child);
  const connection = createMessageConnection(
    new StreamMessageReader(child.stdout),
    new StreamMessageWriter(child.stdin),
  );
  const watchers = new Map();
  const changes = new Map();
  let disposed = false;
  let timer;
  let activeVersion;
  child.stderr.on('data', (data) => process.stderr.write(data));
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    clearTimeout(timer);
    for (const watcher of watchers.values()) watcher.close();
    watchers.clear();
    connection.dispose();
  };
  child.on('error', dispose);
  child.on('exit', () => {
    children.delete(child);
    dispose();
    pending = undefined;
  });
  connection.onRequest('workspace/configuration', ({ items }) => items.map(() => ({})));
  connection.onRequest('client/registerCapability', () => null);
  connection.onRequest('client/unregisterCapability', () => null);
  connection.onRequest('window/workDoneProgress/create', () => null);
  connection.onRequest('workspace/diagnostic/refresh', () => null);
  connection.onRequest('workspace/applyEdit', () => ({
    applied: false,
    failureReason: 'Read-only language bridge.',
  }));
  connection.onNotification('$/typescriptVersion', (version) => {
    activeVersion = version;
  });
  connection.listen();

  async function request(method, params) {
    let timeout;
    try {
      return await Promise.race([
        connection.sendRequest(method, params),
        new Promise((_, reject) => {
          timeout = setTimeout(() => {
            stop(child);
            reject(new Error('Language service request timed out: ' + method));
          }, 45000);
        }),
      ]);
    } finally {
      clearTimeout(timeout);
    }
  }

  async function flushChanges() {
    clearTimeout(timer);
    if (disposed || !changes.size) return;
    const changed = [...changes.values()];
    changes.clear();
    await connection.sendNotification('workspace/didChangeWatchedFiles', { changes: changed });
  }

  function installWatcher(directory, recursive = false) {
    const folder = resolve(root, directory);
    if (watchers.has(folder) || !existsSync(folder)) return;
    try {
      // 使用 Windows 原生真实路径，避免短路径在 libuv watch 中触发原生断言。
      const watcher = watch(realpathSync.native(folder), { recursive }, (_event, filename) => {
        if (disposed || !filename) return;
        const name = filename.toString();
        if (!recursive && ['src', 'test', 'dist'].includes(name))
          installWatcher(directory + '/' + name, true);
        if (!/\.(?:[cm]?[jt]sx?|json|yaml)$/u.test(name)) return;
        const path = resolve(folder, name);
        const uri = pathToFileURL(path).href;
        changes.set(uri, { uri, type: existsSync(path) ? 2 : 3 });
        clearTimeout(timer);
        timer = setTimeout(() => {
          void flushChanges().catch((error) => process.stderr.write(String(error) + '\n'));
        }, 50);
      });
      watcher.on('error', (error) => {
        watcher.close();
        watchers.delete(folder);
        if (!['ENOENT', 'EPERM'].includes(error.code))
          process.stderr.write('Language watcher: ' + error.message + '\n');
      });
      watchers.set(folder, watcher);
    } catch (error) {
      if (!['ENOENT', 'EPERM'].includes(error.code)) throw error;
    }
  }

  try {
    const initialized = await request('initialize', {
      processId: process.pid,
      clientInfo: { name: 'zerodep-vue-language-bridge', version: '0.0.0' },
      rootUri: pathToFileURL(root).href,
      workspaceFolders: [{ name: 'zerodep-vue', uri: pathToFileURL(root).href }],
      capabilities: {
        workspace: { configuration: true },
        textDocument: {
          hover: { contentFormat: ['markdown', 'plaintext'] },
          definition: { linkSupport: true },
          publishDiagnostics: { versionSupport: true },
          completion: {
            completionItem: {
              snippetSupport: false,
              documentationFormat: ['markdown', 'plaintext'],
              resolveSupport: { properties: ['documentation', 'detail', 'additionalTextEdits'] },
            },
          },
        },
      },
      initializationOptions: {
        hostInfo: 'Codex zerodep-vue',
        disableAutomaticTypingAcquisition: true,
        plugins: [{ name: '@zerodep-vue/compiler/src/editor/plugin.cjs', location: root }],
        // 使用本仓库的完整语义服务，不回退到全局 SDK 或只做语法的进程。
        tsserver: {
          path: resolve(root, 'node_modules/typescript/lib'),
          useSyntaxServer: 'never',
        },
      },
    });
    await connection.sendNotification('initialized', {});
    installWatcher('');
    for (const entry of await readdir(resolve(root, 'packages'), { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const directory = 'packages/' + entry.name;
      installWatcher(directory);
      for (const leaf of ['src', 'test', 'dist']) installWatcher(directory + '/' + leaf, true);
    }
    installWatcher('scripts', true);
    let queue = Promise.resolve();
    let version = 0;
    return {
      capabilities: initialized.capabilities,
      request,
      get version() {
        return activeVersion ?? { version: typescriptVersion, source: 'configured-workspace' };
      },
      run(doc, read) {
        // 一次只打开一个磁盘快照；操作后关闭，避免覆盖 IDE 的真实缓冲区。
        const result = queue
          .catch(() => {})
          .then(async () => {
            await flushChanges();
            version++;
            await connection.sendNotification('textDocument/didOpen', {
              textDocument: {
                uri: doc.uri,
                languageId: doc.languageId,
                version,
                text: doc.text,
              },
            });
            try {
              return await read(version);
            } finally {
              await connection.sendNotification('textDocument/didClose', {
                textDocument: { uri: doc.uri },
              });
            }
          });
        queue = result;
        return result;
      },
      async close() {
        try {
          await request('shutdown', null);
          await connection.sendNotification('exit');
        } catch {
          // stdin 关闭或宿主退出时仍必须清理子进程。
        } finally {
          dispose();
          stop(child);
        }
      },
    };
  } catch (error) {
    dispose();
    stop(child);
    throw error;
  }
}

export function service() {
  pending ??= start().catch((error) => {
    pending = undefined;
    throw error;
  });
  return pending;
}

export async function closeService() {
  if (pending) await pending.then((language) => language.close()).catch(() => {});
  for (const child of children) stop(child);
}

process.on('exit', () => {
  for (const child of children) stop(child);
});
