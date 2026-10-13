import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { createServer as httpServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build, createServer } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));
const workspace = resolve(root, '../..');
const report = JSON.parse(
  await readFile(resolve(workspace, 'test-results/naive-fork.json'), 'utf8'),
);
const source = JSON.parse(await readFile(resolve(root, '../naive-ui/source.json'), 'utf8'));
assert(
  report.success &&
    report.mode === 'fork' &&
    report.transformed.length === 301 &&
    report.declarations > 0,
  'Browser fixture requires the complete compiled Naive fork artifact.',
);
assert.equal(report.source.commit, source.commit);
if (process.env.GITHUB_SHA)
  assert.equal(
    report.toolchain.compilerCommit,
    process.env.GITHUB_SHA,
    'Artifact belongs to another compiler commit.',
  );
const bundle = await readFile(resolve(root, '../naive-ui/.generated/fork/bundle/naive.mjs'));
assert.equal(
  createHash('sha256').update(bundle).digest('hex'),
  report.bundleSha256,
  'Naive bundle differs from its compile report.',
);

const production = process.env.BROWSER_MODE === 'production';
const configFile = resolve(root, 'vite.config.ts');
const clientRoot = resolve(root, '.generated/client');
let vite;
let render;
let template;
if (production) {
  await build({ configFile });
  await build({
    configFile,
    build: {
      ssr: resolve(root, 'src/render.ts'),
      outDir: resolve(root, '.generated/server'),
      emptyOutDir: false,
    },
  });
  ({ render } = await import(pathToFileURL(resolve(root, '.generated/server/render.js')).href));
  template = await readFile(resolve(clientRoot, 'index.html'), 'utf8');
} else {
  await mkdir(resolve(root, '.generated/hmr'), { recursive: true });
  await copyFile(resolve(root, 'hmr/Subject.tsx'), resolve(root, '.generated/hmr/Subject.tsx'));
  vite = await createServer({ configFile, server: { middlewareMode: true } });
  template = await readFile(resolve(root, 'index.html'), 'utf8');
}
for (const marker of ['<!--app-->', '<!--styles-->', '<!--state-->', '<!--teleports-->'])
  assert(template.includes(marker), `Missing HTML marker ${marker}`);
const mime = {
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.map': 'application/json',
  '.html': 'text/html',
};
const handler = async (request, response) => {
  try {
    const url = new URL(request.url, 'http://127.0.0.1');
    if (url.pathname === '/__health') {
      response.end('ready');
      return;
    }
    if (
      url.pathname !== '/' &&
      url.pathname !== '/ssr' &&
      !(['/hmr', '/inspector'].includes(url.pathname) && !production)
    ) {
      const path = resolve(clientRoot, '.' + decodeURIComponent(url.pathname));
      if (production && path.startsWith(clientRoot + sep)) {
        try {
          const data = await readFile(path);
          response.setHeader('Content-Type', mime[extname(path)] ?? 'application/octet-stream');
          response.end(data);
          return;
        } catch {}
      }
      response.statusCode = 404;
      response.end('not found');
      return;
    }
    const initial = {
      text: (url.searchParams.get('text') ?? 'initial').slice(0, 128),
      color: ['red', 'blue', 'purple'].includes(url.searchParams.get('color'))
        ? url.searchParams.get('color')
        : 'red',
    };
    const hydrate = url.pathname === '/ssr';
    const renderer =
      render ?? (hydrate ? (await vite.ssrLoadModule('/src/render.ts')).render : undefined);
    const result = hydrate ? await renderer(initial) : { html: '', styles: '', teleports: '' };
    const entry =
      url.pathname === '/hmr'
        ? '/src/hmr-client.ts'
        : url.pathname === '/inspector'
          ? '/src/inspector-client.ts'
          : '/src/client.ts';
    const source = template.replace('/src/client.ts', entry);
    let html = production ? source : await vite.transformIndexHtml(request.url, source);
    html = html
      .replace('<!--app-->', result.html)
      .replace('<!--styles-->', result.styles)
      .replace('<!--teleports-->', result.teleports)
      .replace(
        '<!--state-->',
        `<script>window.__hydrate=${hydrate};window.__initial=${JSON.stringify(initial).replaceAll('<', '\\u003c')};</script>`,
      );
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end(html);
  } catch (error) {
    vite?.ssrFixStacktrace(error);
    console.error(error);
    response.statusCode = 500;
    response.end(String(error.stack ?? error));
  }
};
const server = httpServer((request, response) => {
  if (vite && !request.url.startsWith('/__health'))
    vite.middlewares(request, response, () => {
      void handler(request, response);
    });
  else void handler(request, response);
});
server.listen(4178, '127.0.0.1', () =>
  console.log(
    `Browser ${production ? 'production' : 'development'} server ready at http://127.0.0.1:4178`,
  ),
);
async function stop() {
  await vite?.close();
  server.close();
}
process.on('SIGTERM', stop);
process.on('SIGINT', stop);
