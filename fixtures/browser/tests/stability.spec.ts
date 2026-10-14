import { expect, test } from './test.ts';
import type {} from '../src/contracts.ts';

test('bounded CSS resources survive repeated updates, multiple apps and ShadowRoot reuse', async ({
  page,
}) => {
  test.setTimeout(120000);
  await page.goto('/stability');
  await page.waitForFunction(() => window.__stability);
  const result = await page.evaluate(() => window.__stability!.run(500));
  expect(result.setups).toBe(500);
  expect(result.disposed).toBe(500);
  expect(result.hiddenReads).toBe(0);
  expect(result.iterations).toBe(500);
  expect(result.maximumUnused).toBeGreaterThan(0);
  expect(result.maximumUnused).toBeLessThanOrEqual(8);
  expect(result.maximumRules).toBeLessThanOrEqual(9);
  expect(result.sharedConsumerColor).toBe('rgb(0, 0, 255)');
  expect(result.shadowColor).toBe('rgb(0, 20, 40)');
  expect(result.shadowWidth).toBe('10px');
  expect(result.shadowStyleIdentity).toBe(true);
  await page.evaluate(() => window.__stability!.dispose());
  expect(await page.evaluate(() => window.__fixture!.host.stats().ownedReferences)).toBe(0);
});

test('real leaving elements and cached components retain the required CSS', async ({ page }) => {
  await page.goto('/stability');
  await page.getByRole('button', { name: '开始离场' }).click();
  await expect(page.getByTestId('leaving')).toHaveCSS('color', 'rgb(128, 0, 128)');
  await expect(page.getByTestId('leaving')).toHaveCSS('animation-name', /^zva-/);
  await page.evaluate(() => window.__stability!.finishLeave());
  await expect(page.getByTestId('leaving')).toHaveCount(0);
  await page.getByTestId('cached').click();
  await expect(page.getByTestId('cached')).toHaveText('a:1');
  await page.getByRole('button', { name: '缓存 B' }).click();
  await expect(page.getByTestId('cached')).toHaveCSS('color', 'rgb(0, 128, 0)');
  await page.getByRole('button', { name: '缓存 A' }).click();
  await expect(page.getByTestId('cached')).toHaveText('a:1');
  await expect(page.getByTestId('cached')).toHaveCSS('width', '41px');
  await page.getByRole('button', { name: '缓存 C' }).click();
  expect(await page.evaluate(() => window.__stability!.lifecycle())).toMatchObject({
    setups: 3,
    disposed: 1,
    references: 2,
  });
  await page.evaluate(() => window.__stability!.dispose());
  expect(await page.evaluate(() => window.__stability!.lifecycle())).toMatchObject({
    disposed: 3,
    references: 0,
  });
});
