import { expect, test } from 'vitest';
import { emitModule } from '../build.mjs';
import { basename, dirname, resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

test('production emission lowers TSX, preserves peers and maps the original source', async () => {
  const source = `import { _component } from '@zerodep-vue/core';
    import { z } from 'zod';
    import { format } from './format.ts';
    export const Probe = _component(() => <output>{format(z.string().parse('ready'))}</output>);`;
  const result = await emitModule(source, 'Probe.tsx', '../src/Probe.tsx');
  expect(result.code).toContain('createComponent');
  expect(result.code).not.toContain('<output>');
  expect(result.code).toContain('from "./format.js"');
  expect(result.code).toContain("from 'zod'");
  expect(result.code).not.toContain('__zerodepHmr');
  expect(result.map.sources).toEqual(['../src/Probe.tsx']);
  expect(result.map.sourcesContent).toEqual([source]);
});

test(
  'inferred UI component declarations retain public prop types and comments without annotations',
  { timeout: 30_000 },
  () => {
    const configPath = ts.findConfigFile(process.cwd(), ts.sys.fileExists, 'tsconfig.base.json');
    const root = dirname(configPath);
    const config = ts.readConfigFile(configPath, ts.sys.readFile);
    const { options } = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
    const entry = resolve(root, 'packages/ui/src/index.ts');
    const exports = ts.createSourceFile(
      entry,
      readFileSync(entry, 'utf8'),
      ts.ScriptTarget.Latest,
      true,
    );
    // 跟随真实公开入口，新增组件自动进入声明验收，避免维护过时的展示组件白名单。
    const files = [
      ...new Set(
        exports.statements.flatMap((node) =>
          ts.isExportDeclaration(node) &&
          node.moduleSpecifier &&
          ts.isStringLiteral(node.moduleSpecifier) &&
          node.moduleSpecifier.text.endsWith('.tsx')
            ? [resolve(dirname(entry), node.moduleSpecifier.text)]
            : [],
        ),
      ),
    ];
    expect(files.length).toBeGreaterThan(20);
    // 只在内存中发射公共组件的声明，不写 dist，也不运行全仓类型检查。
    const program = ts.createProgram(files, {
      ...options,
      noEmit: false,
      noEmitOnError: false,
      declaration: true,
      emitDeclarationOnly: true,
    });
    for (const file of files) {
      const source = program.getSourceFile(file);
      let declaration = '';
      const result = program.emit(
        source,
        (name, text) => {
          if (name.endsWith('.d.ts')) declaration = text;
        },
        undefined,
        true,
      );
      expect(program.getDeclarationDiagnostics(source)).toEqual([]);
      expect(result.diagnostics).toEqual([]);
      expect(declaration).toContain('DefineSetupFnComponent<');
      expect(declaration).toContain('import("@zerodep-vue/core").AuthorProps');
      expect(declaration).not.toContain(`export declare const ${basename(file, '.tsx')}: any`);
      if (file.endsWith('Icon.tsx')) {
        expect(declaration).toContain("color?: CssValue<'color', UiTheme>");
        expect(declaration).toContain('默认继承文字颜色');
      }
      if (file.endsWith('Text.tsx')) {
        expect(declaration).toContain("fontWeight?: CssValue<'fontWeight', UiTheme>");
        expect(declaration).toContain('默认继承字号');
      }
      if (file.endsWith('Heading.tsx'))
        expect(declaration).toContain("as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'");
      if (file.endsWith('Link.tsx')) expect(declaration).toContain('href: string');
      if (file.endsWith('Ellipsis.tsx')) {
        expect(declaration).toContain('expanded?: Ref<boolean>');
        expect(declaration).toContain('onOverflowChange?: (overflowing: boolean) => void');
      }
    }
  },
);
