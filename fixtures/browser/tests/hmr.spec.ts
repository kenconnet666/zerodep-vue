import { expect, test } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import type {} from '../src/contracts.ts';

// 服务只复制当前夹具到 .generated，测试不会改写跟踪源码或其他工作区文件。
const file = fileURLToPath(new URL('../.generated/hmr/Subject.tsx', import.meta.url));

test('HMR retains state for style/render edits, recovers after errors and remounts changed setup', async ({
  page,
}) => {
  test.setTimeout(90000);
  const original = await readFile(file, 'utf8');
  let source = original;
  let syntaxError = false;
  const errors: string[] = [];
  page.on('pageerror', (error) => {
    if (!syntaxError) errors.push(error.message);
  });
  page.on('console', (message) => {
    if (
      !syntaxError &&
      (message.type() === 'error' ||
        (message.type() === 'warning' && message.text().includes('[Vue warn]')))
    )
      errors.push(message.text());
  });
  const change = async (next: string) => {
    source = next;
    await writeFile(file, source);
  };
  try {
    await page.goto('/hmr');
    await expect(page.getByRole('heading')).toHaveText('原始标题');
    await page.evaluate(() => {
      window.__hmrToken = 'same-document';
    });
    const input = page.getByRole('textbox', { name: '热更新输入' });
    await input.fill('保持输入');
    await page.getByTestId('hot-count').click();
    await page.locator('.n-base-selection').click();
    await expect(page.getByText('保持展开', { exact: true })).toBeVisible();
    const active = await page.evaluate(() => window.__fixture!.host.stats().ownedReferences);

    await change(source.replace('rgb(255, 0, 0)', 'rgb(0, 0, 255)'));
    await expect(page.locator('#app > section')).toHaveCSS('color', 'rgb(0, 0, 255)');
    await expect(input).toHaveValue('保持输入');
    await expect(page.getByTestId('hot-count')).toHaveText('1');
    await expect(page.getByText('保持展开', { exact: true })).toBeVisible();
    expect(await page.evaluate(() => window.__hmrSetups)).toBe(1);

    await change(
      source
        .replace('原始标题', '更新标题')
        .replace('count.value++;', 'count.value += 2;')
        .replace('{text.value}</output>', '{text.value}{suffix.value}</output>'),
    );
    await expect(page.getByRole('heading')).toHaveText('更新标题');
    await expect(page.getByTestId('hot-content')).toHaveText('保持输入!');
    await page.getByTestId('hot-count').click();
    await expect(page.getByTestId('hot-count')).toHaveText('3');
    expect(await page.evaluate(() => window.__hmrSetups)).toBe(1);

    syntaxError = true;
    await writeFile(file, source + '\n const broken = ;');
    await expect(page.locator('vite-error-overlay')).toBeAttached();
    await change(source.replace('更新标题', '恢复标题'));
    await expect(page.locator('vite-error-overlay')).toHaveCount(0);
    await expect(page.getByRole('heading')).toHaveText('恢复标题');
    await expect(input).toHaveValue('保持输入');
    syntaxError = false;

    for (let index = 1; index <= 12; index++) {
      await change(source.replace(/rgb\(\d+, \d+, \d+\)/, `rgb(${index}, 30, 90)`));
      await expect(page.locator('#app > section')).toHaveCSS('color', `rgb(${index}, 30, 90)`);
    }
    const stats = await page.evaluate(() => window.__fixture!.host.stats());
    expect(stats.ownedReferences).toBe(active);
    expect(stats.unusedRules).toBeLessThanOrEqual(3);
    expect(stats.globalRules).toBe(1);
    expect(await page.evaluate(() => window.__hmrSetups)).toBe(1);
    expect(await page.evaluate(() => window.__hmrToken)).toBe('same-document');

    await change(source.replace('const count = ref(0)', 'const count = ref(100)'));
    await expect(page.getByTestId('hot-count')).toHaveText('100');
    await expect(input).toHaveValue('initial');
    expect(await page.evaluate(() => window.__hmrSetups)).toBe(2);
    expect(await page.evaluate(() => window.__hmrToken)).toBe('same-document');
    await page.evaluate(() => window.__fixture!.unmount());
    expect(await page.evaluate(() => window.__fixture!.host.stats().ownedReferences)).toBe(0);
    expect(errors).toEqual([]);
  } finally {
    await writeFile(file, original);
  }
});
