import { test as base, expect } from '@playwright/test';
import type {} from '../src/contracts.ts';

const test = base.extend<{ errors: string[] }>({
  errors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (
          message.type() === 'error' ||
          (message.type() === 'warning' && message.text().includes('[Vue warn]'))
        )
          errors.push(message.text());
      });
      await use(errors);
      expect(errors).toEqual([]);
    },
    { auto: true },
  ],
});

test('Naive and own inputs share values across reset, Ref replacement, focus and slots', async ({
  page,
}) => {
  await page.goto('/');
  const native = page.getByRole('textbox', { name: '自有输入' });
  const naive = page.getByRole('textbox', { name: 'Naive 输入' });
  await naive.fill('from-naive');
  await expect(native).toHaveValue('from-naive');
  await native.fill('from-own');
  await expect(naive).toHaveValue('from-own');
  await expect(page.getByTestId('state')).toHaveText('from-own');
  await expect(page.getByTestId('reset')).toHaveCSS('background-color', 'rgb(160, 32, 240)');
  await page.getByTestId('reset').click();
  await expect(native).toHaveValue('reset');
  await page.getByRole('button', { name: '替换 Ref' }).click();
  await expect(native).toHaveValue('replacement');
  await native.fill('after-replacement');
  await expect(naive).toHaveValue('after-replacement');
  await page.getByRole('button', { name: '聚焦', exact: true }).click();
  await expect(native).toBeFocused();
  await expect(page.getByTestId('reset')).toHaveText('user:重置');
  await expect(
    page.locator('.n-data-table').getByText('user:Alice', { exact: true }),
  ).toBeVisible();
});

test('compiled Select teleports options and table render callbacks keep their injection context', async ({
  page,
}) => {
  await page.goto('/');
  await page.locator('.n-base-selection').click();
  const option = page.getByText('Beta', { exact: true });
  await expect(option).toBeVisible();
  expect(
    await option.evaluate((element) => !document.querySelector('#app')!.contains(element)),
  ).toBe(true);
  await option.click();
  await expect(page.getByTestId('selection')).toHaveText('b');
  await expect(page.locator('.n-data-table').getByText('user:Bob', { exact: true })).toBeVisible();
  const row = page.getByTestId('row-1');
  await row.evaluate((element) => element.setAttribute('data-identity', 'retained'));
  await page.getByRole('button', { name: '反转列表' }).click();
  await expect(row).toHaveAttribute('data-identity', 'retained');
  await page.getByRole('button', { name: '动态加载' }).click();
  await expect(page.getByTestId('async')).toHaveText('异步组件已加载');
});

test('runtime CSS computes states, removes and restores variables, and releases resources', async ({
  page,
}) => {
  await page.goto('/');
  const button = page.getByTestId('styled');
  await expect(button).toHaveCSS('width', '120px');
  await expect(page.getByTestId('variables')).toHaveCSS('padding-top', '120px');
  await button.hover();
  await expect(button).toHaveCSS('color', 'rgb(40, 50, 60)');
  await expect(button).toHaveCSS('background-color', 'rgb(200, 200, 200)');
  await page.getByRole('button', { name: '调整宽度' }).click();
  await expect(button).toHaveCSS('width', '180px');
  await page.getByRole('button', { name: '撤销宽度绑定' }).click();
  expect(await button.getAttribute('style')).not.toContain('--zv-');
  await page.getByRole('button', { name: '恢复宽度绑定' }).click();
  await expect(button).toHaveCSS('width', '120px');
  await page.getByRole('button', { name: '切换禁用' }).click();
  await expect(button).toBeDisabled();
  await button.hover();
  await expect(button).toHaveCSS('color', 'rgb(70, 80, 90)');
  await expect(page.getByTestId('animation')).toHaveCSS('animation-name', /^zva-/);
  expect(
    await page.getByTestId('animation').evaluate((element) => element.getAnimations().length),
  ).toBe(1);
  await page.evaluate(() => window.__fixture!.unmount());
  const stats = await page.evaluate(() => window.__fixture!.host.stats());
  expect(stats.ownedReferences).toBe(0);
  expect(stats.globalRules).toBe(0);
  expect(stats.rules).toBeLessThanOrEqual(12);
});

test('theme sources stay independent through Teleport, replacement and conditional removal', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.getByTestId('region-a')).toHaveCSS('color', 'rgb(255, 0, 0)');
  await expect(page.getByTestId('region-b')).toHaveCSS('color', 'rgb(0, 0, 255)');
  await page.getByRole('button', { name: '更换主题' }).click();
  await expect(page.getByTestId('region-a')).toHaveCSS('color', 'rgb(0, 128, 0)');
  await expect(page.getByTestId('region-b')).toHaveCSS('color', 'rgb(0, 0, 255)');
  await page.getByRole('button', { name: '切换区域' }).click();
  await expect(page.getByTestId('region-a')).toHaveCount(0);
  await expect(page.getByTestId('region-b')).toHaveCSS('color', 'rgb(0, 0, 255)');
  await expect(page.getByTestId('animation')).toHaveCount(0);
});

test('SSR isolates requests and hydration adopts CSS and Teleport nodes before interactions', async ({
  page,
  request,
}) => {
  const [a, b] = await Promise.all([
    request.get('/ssr?text=request-a&color=red'),
    request.get('/ssr?text=request-b&color=blue'),
  ]);
  expect(a.ok()).toBe(true);
  expect(b.ok()).toBe(true);
  expect(await a.text()).toContain('request-a');
  expect(await a.text()).not.toContain('request-b');
  expect(await b.text()).not.toContain('request-a');
  await page.goto('/ssr?text=hydrated&color=purple');
  await page.waitForFunction(() => window.__mounted);
  await expect(page.getByRole('textbox', { name: '自有输入' })).toHaveValue('hydrated');
  await expect(page.getByTestId('region-a')).toHaveCSS('color', 'rgb(128, 0, 128)');
  const adopted = await page.evaluate(() => ({
    before: window.__beforeHydrate!.length,
    retained: window.__beforeHydrate!.every((node) => node.isConnected),
    rules: [...document.querySelectorAll('style[data-zv-rule]')].map((node) =>
      node.getAttribute('data-zv-rule'),
    ),
  }));
  expect(adopted.before).toBeGreaterThan(0);
  expect(adopted.retained).toBe(true);
  expect(new Set(adopted.rules).size).toBe(adopted.rules.length);
  await page.getByRole('textbox', { name: 'Naive 输入' }).fill('after-hydration');
  await expect(page.getByTestId('state')).toHaveText('after-hydration');
});
