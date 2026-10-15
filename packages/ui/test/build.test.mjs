import { expect, test } from 'vitest';
import { emitModule } from '../build.mjs';

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
