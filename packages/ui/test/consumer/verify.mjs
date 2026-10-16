import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFile, realpath, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const phase = process.argv[2];
const report = {};
const root = process.cwd();
const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));
switch (phase) {
  case 'types': {
    const { default: ts } = await import('typescript');
    const { languageServicePlugin } = await import('@zerodep-vue/compiler');
    const require = createRequire(import.meta.url);
    const vue = await realpath(require.resolve('vue'));
    for (const name of ['core', 'ui']) {
      const entry = require.resolve(`@zerodep-vue/${name}`);
      assert.match(entry.replaceAll('\\', '/'), /\/dist\/index\.js$/);
      assert.equal(await realpath(createRequire(entry).resolve('vue')), vue);
    }
    report.singleVue = true;
    const config = ts.readConfigFile(resolve(root, 'tsconfig.json'), ts.sys.readFile);
    const { options, fileNames, errors } = ts.parseJsonConfigFileContent(
      config.config,
      ts.sys,
      root,
    );
    assert.deepEqual(errors, []);
    const service = ts.createLanguageService({
      ...ts.sys,
      getCompilationSettings: () => options,
      getCurrentDirectory: () => root,
      getScriptFileNames: () => fileNames,
      getScriptVersion: () => '1',
      getScriptSnapshot: (path) => {
        const text = ts.sys.readFile(path);
        return text === undefined ? undefined : ts.ScriptSnapshot.fromString(text);
      },
      getDefaultLibFileName: ts.getDefaultLibFilePath,
      useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
    });
    try {
      const diagnostics = [
        ...service.getCompilerOptionsDiagnostics(),
        ...fileNames.flatMap((file) => [
          ...service.getSyntacticDiagnostics(file),
          ...service.getSemanticDiagnostics(file),
        ]),
      ];
      assert.deepEqual(
        diagnostics.map((item) => ts.flattenDiagnosticMessageText(item.messageText, '\n')),
        [],
      );
      const declarations = service
        .getProgram()
        .getSourceFiles()
        .filter((file) => /@zerodep-vue[\/\\+]/.test(file.fileName));
      assert(declarations.length > 20);
      assert(
        declarations.every(
          (file) => file.isDeclarationFile && /[\\/]dist[\\/]/.test(file.fileName),
        ),
      );
      const enhanced = languageServicePlugin({ typescript: ts }).create({
        languageService: service,
      });
      const file = resolve(root, 'contracts.tsx');
      const source = await readFile(file, 'utf8');
      for (const [call, value, text] of [
        ["s.overflow('hidden')", 'hidden', '裁剪溢出'],
        ["s.color('_primaryHover')", '_primaryHover', '主操作的悬停色'],
      ]) {
        const position = source.indexOf(call) + call.indexOf(`'${value}'`) + 2;
        const definitions = enhanced.getDefinitionAtPosition(file, position);
        assert.equal(definitions?.length, 1);
        assert.match(definitions[0].fileName.replaceAll('\\', '/'), /\/dist\/.*\.d\.ts$/);
        assert(
          ts
            .displayPartsToString(enhanced.getQuickInfoAtPosition(file, position)?.documentation)
            .includes(text),
        );
        assert.equal(
          enhanced
            .getCompletionsAtPosition(file, position, {})
            .entries.filter((entry) => entry.name === value).length,
          1,
        );
        assert(
          ts
            .displayPartsToString(
              enhanced.getCompletionEntryDetails(file, position, value, {}, undefined, {})
                .documentation,
            )
            .includes(text),
        );
      }
      report.diagnostics = 0;
      report.declarations = declarations.length;
      report.literalDocumentation = true;
    } finally {
      service.dispose();
    }
    break;
  }
  case 'build': {
    const { build } = await import('vite');
    const { vitePlugin } = await import('@zerodep-vue/compiler');
    await build({
      configFile: false,
      plugins: [vitePlugin()],
      build: { outDir: 'dist/client', manifest: true },
    });
    await build({
      configFile: false,
      plugins: [vitePlugin()],
      build: {
        ssr: 'app.tsx',
        outDir: 'dist/server',
        rollupOptions: { output: { entryFileNames: 'app.js' } },
      },
    });
    report.client = true;
    report.ssr = true;
    break;
  }
  case 'ssr': {
    assert.equal(typeof document, 'undefined');
    const { createSSRApp } = await import('vue');
    const { renderToString } = await import('@vue/server-renderer');
    const { getCssHost } = await import('@zerodep-vue/core');
    const { App } = await import('./dist/server/app.js');
    const context = {};
    try {
      const html = await renderToString(createSSRApp(App), context);
      const styles = getCssHost(context)?.renderStyles();
      assert(html.includes('安装消费') && html.includes('id="increment"'));
      assert(styles && styles.includes('<style'));
      await writeFile('rendered.json', JSON.stringify({ html, styles }));
      report.rendered = true;
    } finally {
      getCssHost(context)?.dispose();
    }
    break;
  }
  case 'hydrate': {
    const { JSDOM } = await import('jsdom');
    const { html, styles } = await readJson('rendered.json');
    const dom = new JSDOM(
      `<!doctype html><html><head>${styles}</head><body><div id="app">${html}</div></body></html>`,
      { url: 'http://localhost/', pretendToBeVisual: true },
    );
    for (const name of [
      'window',
      'document',
      'Document',
      'ShadowRoot',
      'navigator',
      'Node',
      'Element',
      'HTMLElement',
      'SVGElement',
      'MutationObserver',
      'CustomEvent',
      'Event',
      'getComputedStyle',
      'requestAnimationFrame',
      'cancelAnimationFrame',
    ])
      Object.defineProperty(globalThis, name, {
        configurable: true,
        value:
          typeof dom.window[name] === 'function' &&
          /^(getComputedStyle|requestAnimationFrame|cancelAnimationFrame)$/.test(name)
            ? dom.window[name].bind(dom.window)
            : dom.window[name],
      });
    const title = document.querySelector('#title');
    const button = document.querySelector('#increment');
    const input = document.querySelector('#query');
    const messages = [];
    const warn = console.warn;
    const error = console.error;
    let mounted;
    console.warn = console.error = (...args) => messages.push(args.map(String).join(' '));
    document.addEventListener(
      'consumer-ready',
      (event) => {
        mounted = event.detail;
      },
      { once: true },
    );
    try {
      const manifest = await readJson('dist/client/.vite/manifest.json');
      await import(pathToFileURL(resolve('dist/client', manifest['index.html'].file)).href);
      assert(mounted, 'The built client must mount.');
      assert.equal(document.querySelector('#title'), title);
      assert.equal(document.querySelector('#increment'), button);
      assert.equal(document.querySelector('#query'), input);
      assert.equal(input.value, 'installed');
      assert.equal(document.querySelector('#count').textContent, '0');
      button.click();
      await mounted.nextTick();
      assert.equal(document.querySelector('#count').textContent, '1');
      input.value = 'changed';
      input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
      await mounted.nextTick();
      assert.equal(document.querySelector('#query-value').textContent, 'changed');
      const notes = document.querySelector('#notes');
      assert.equal(notes.value, 'first\nsecond');
      notes.value = 'third\nfourth';
      notes.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
      await mounted.nextTick();
      assert.equal(document.querySelector('#notes-value').textContent, 'third\nfourth');
      const accepted = document.querySelector('#accepted');
      accepted.click();
      document.querySelector('input[type="radio"][value="weekly"]').click();
      await mounted.nextTick();
      const form = document.querySelector('#fields');
      const submitted = new dom.window.FormData(form);
      assert.equal(submitted.get('accepted'), 'on');
      assert.equal(submitted.get('notifications'), 'on');
      assert.equal(submitted.get('frequency'), 'weekly');
      form.reset();
      await Promise.resolve();
      await mounted.nextTick();
      assert.equal(input.value, 'installed');
      assert.equal(accepted.checked, false);
      assert.equal(document.querySelector('input[type="radio"][value="daily"]').checked, true);
      input.value = '';
      input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
      input.dispatchEvent(new dom.window.FocusEvent('focusout', { bubbles: true }));
      await new Promise((resolve) => setTimeout(resolve, 0));
      await mounted.nextTick();
      assert.equal(input.getAttribute('aria-invalid'), 'true');
      assert(
        document
          .getElementById(input.getAttribute('aria-describedby'))
          .textContent.includes('请输入查询内容'),
      );
      assert.deepEqual(messages, []);
      report.sameNodes = true;
      report.reactive = true;
    } finally {
      mounted?.app.unmount();
      if (mounted) {
        assert.equal(mounted.host.stats().ownedReferences, 0);
        mounted.host.dispose();
      }
      console.warn = warn;
      console.error = error;
      dom.window.close();
    }
    break;
  }
  default:
    throw new Error(`Unknown consumer phase: ${phase}`);
}
await writeFile(`${phase}.json`, JSON.stringify(report, null, 2) + '\n');
