import { expect, test } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import type { InspectedNode } from '@zerodep-vue/core/devtools';
import type {} from '../src/contracts.ts';

test('real DevTools inspector reports consumed provenance without executing getters', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/inspector');
  await expect(page.getByTestId('inspected')).toHaveCSS('width', '24px');
  const counts = await page.evaluate(() => window.__inspectionReads!());
  expect(counts).toEqual({ used: 1, unused: 0 });
  const snapshot = (await page.evaluate(() => window.__fixture!.inspectCss!())) as InspectedNode[];
  const node = snapshot.find((node) => node.label.startsWith('div'))!;
  expect(typeof node.ownerUid).toBe('number');
  const declarations = node.snapshot.sources.flatMap((source) => source.declarations);
  expect(
    declarations.find((value) => value.property === 'color' && value.status === '被覆盖')!
      .bindings[0]!.consumed,
  ).toBe(false);
  expect(declarations.some((value) => value.status === '清除标记')).toBe(true);
  const width = declarations.find((value) => value.property === 'width')!;
  expect(width.values).toEqual(['24px']);
  const location = width.bindings[0]!.source!;
  expect(location.file).toMatch(/Inspector\.tsx$/);
  const lines = (await readFile(new URL('../src/Inspector.tsx', import.meta.url), 'utf8')).split(
    /\r?\n/,
  );
  expect(lines[location.line - 1]!.slice(location.column - 1)).toMatch(/^readWidth\(\)/);

  await expect
    .poll(async () => (await page.evaluate(() => window.__fixture!.inspectorTree!())).length)
    .toBeGreaterThan(0);
  const tree = await page.evaluate(() => window.__fixture!.inspectorTree!());
  expect(tree.some((node) => node.label.includes('inspected-global'))).toBe(true);
  const state = await page.evaluate((id) => window.__fixture!.inspectorState!(id), node.id);
  expect(JSON.stringify(state)).toContain('24px');
  for (let index = 0; index < 8; index++)
    await page.evaluate((id) => window.__fixture!.inspectorState!(id), node.id);
  expect(await page.evaluate(() => window.__inspectionReads!())).toEqual(counts);

  await page.getByRole('button', { name: '更新绑定' }).click();
  await expect(page.getByTestId('inspected')).toHaveCSS('width', '40px');
  expect(JSON.stringify(await page.evaluate(() => window.__fixture!.inspectCss!()))).toContain(
    '40px',
  );
  expect(await page.evaluate(() => window.__inspectionReads!())).toEqual({ used: 2, unused: 0 });
  await page.getByRole('button', { name: '移除元素' }).click();
  expect(
    ((await page.evaluate(() => window.__fixture!.inspectCss!())) as InspectedNode[]).some((node) =>
      node.label.startsWith('div'),
    ),
  ).toBe(false);
  await page.evaluate(() => window.__fixture!.unmount());
  expect(await page.evaluate(() => window.__fixture!.inspectCss!())).toEqual([]);
  expect(await page.evaluate(() => window.__fixture!.host.stats().globalRules)).toBe(0);
  expect(errors).toEqual([]);
});
