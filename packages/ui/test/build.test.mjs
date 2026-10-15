import { expect, test } from 'vitest';
import { emitModule } from '../build.mjs';
import { dirname, resolve } from 'node:path';
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

test('inferred UI component declarations retain public prop types and comments without annotations', () => {
  const configPath = ts.findConfigFile(process.cwd(), ts.sys.fileExists, 'tsconfig.base.json');
  const root = dirname(configPath);
  const config = ts.readConfigFile(configPath, ts.sys.readFile);
  const { options } = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
  const files = ['display/Icon.tsx', 'config/Provider.tsx'].map((name) =>
    resolve(root, 'packages/ui/src', name),
  );
  // 只在内存中发射这两个入口的声明，不写 dist，也不运行全仓类型检查。
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
    expect(declaration).not.toMatch(/export declare const (Icon|Provider): any/);
    if (file.endsWith('Icon.tsx')) {
      expect(declaration).toContain("color?: CssValue<'color', UiTheme>");
      expect(declaration).toContain('默认继承文字颜色');
    }
  }
});
