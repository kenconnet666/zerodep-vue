import { expect, test } from '@playwright/test';

const pageErrors = new WeakMap<object, Error[]>();

test.beforeEach(async ({ page }) => {
  const errors: Error[] = [];
  pageErrors.set(page, errors);
  page.on('pageerror', (error) => errors.push(error));
  await page.goto('/');
});
test.afterEach(({ page }) => {
  expect(pageErrors.get(page)).toEqual([]);
});

test('scrollbars preserve width, padded floating content does not overflow, and Tab leaves the popup', async ({
  page,
}) => {
  const viewport = page.getByTestId('scrollbar').locator('[data-zv-scroll-viewport]');
  const before = await viewport.evaluate((element) => element.clientWidth);
  await page.getByRole('button', { name: '切换溢出', exact: true }).click();
  await expect(
    page.getByTestId('scrollbar').getByRole('scrollbar', { name: '纵向滚动' }),
  ).toBeVisible();
  expect(await viewport.evaluate((element) => element.clientWidth)).toBe(before);
  await page
    .getByRole('navigation', { name: '顶部导航', exact: true })
    .getByRole('button', { name: '更多工具', exact: true })
    .click();
  const popup = page.getByRole('dialog', { name: '更多工具', exact: true });
  await expect(popup).toBeVisible();
  const dimensions = await popup
    .locator('[data-zv-scroll-viewport]')
    .evaluate((element) => ({ width: element.clientWidth, scrollWidth: element.scrollWidth }));
  expect(dimensions.scrollWidth).toBe(dimensions.width);
  await expect(popup.getByRole('link', { name: '导出记录' })).toBeFocused();
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await expect(popup).toHaveCount(0);
  await expect(page.getByRole('link', { name: '首页', exact: true })).toBeFocused();
});

test('slider and split keep pointer ownership and handle RTL and removal during a drag', async ({
  page,
}) => {
  await page.getByRole('button', { name: '切换方向', exact: true }).click();
  const slider = page.getByRole('slider', { name: '拖动进度' });
  await slider.scrollIntoViewIfNeeded();
  const rail = (await slider.locator('..').boundingBox())!;
  const thumb = (await slider.boundingBox())!;
  await page.mouse.move(thumb.x + 3, thumb.y + thumb.height / 2);
  await page.mouse.down();
  await page.mouse.move(rail.x + 3, thumb.y + thumb.height / 2, { steps: 8 });
  await page.mouse.up();
  await expect(slider).toHaveAttribute('aria-valuenow', '100');
  await page.getByRole('button', { name: '切换方向', exact: true }).click();
  const split = page.getByTestId('split');
  await split.scrollIntoViewIfNeeded();
  const first = split.getByRole('separator').first();
  const initial = Number(await first.getAttribute('aria-valuenow'));
  const box = (await first.boundingBox())!;
  await page.mouse.move(box.x + box.width / 2, box.y + box.height - 30);
  await page.mouse.down();
  await page.mouse.move(box.x + 50, box.y + box.height - 30, { steps: 8 });
  await expect
    .poll(async () => Number(await first.getAttribute('aria-valuenow')))
    .toBeGreaterThan(initial);
  await page.mouse.up();
  const last = (await split.getByRole('separator').last().boundingBox())!;
  await page.mouse.move(last.x + last.width / 2, last.y + last.height - 30);
  await page.mouse.down();
  await page.mouse.move(last.x + 20, last.y + last.height - 30);
  await page.getByRole('button', { name: '切换检查面板', exact: true }).evaluate((element) => {
    if (element instanceof HTMLElement) element.click();
  });
  await page.mouse.up();
  await expect(split.locator('[data-zv-split-pane]')).toHaveCount(2);
  expect(await page.evaluate(() => document.documentElement.style.userSelect)).toBe('');
});

test('sidebar preserves content across breakpoints and nested modal layers keep ownership', async ({
  page,
}) => {
  const draft = page.getByRole('textbox', { name: '侧栏草稿' });
  await draft.fill('跨断点的草稿');
  await draft.evaluate((element) => {
    element.dataset.testIdentity = 'same';
  });
  await page.setViewportSize({ width: 600, height: 900 });
  await page
    .locator('[data-zv-sidebar][aria-label="演示导航"]')
    .getByRole('button', { name: '展开导航', exact: true })
    .click();
  await expect(page.getByRole('dialog', { name: '演示导航', exact: true })).toBeVisible();
  await expect(draft).toHaveValue('跨断点的草稿');
  await expect(draft).toHaveAttribute('data-test-identity', 'same');
  await page.keyboard.press('Escape');
  await page.setViewportSize({ width: 1280, height: 1000 });
  await expect(
    page.locator('[data-zv-sidebar][aria-label="演示导航"]').getByRole('textbox'),
  ).toHaveValue('跨断点的草稿');
  await page.getByRole('button', { name: '打开抽屉', exact: true }).click();
  await page.getByRole('button', { name: '侧栏内浮层', exact: true }).click();
  const popup = page.getByRole('dialog', { name: '内联侧栏浮层', exact: true });
  await expect(popup).toBeVisible();
  expect(await popup.evaluate((element) => !!element.closest('dialog'))).toBe(true);
  await page.keyboard.press('Escape');
  await expect(popup).toHaveCount(0);
  await expect(page.getByRole('dialog', { name: '工作区设置', exact: true })).toBeVisible();
  await page.getByRole('button', { name: '打开第二层抽屉', exact: true }).click();
  await expect(page.getByRole('dialog', { name: '第二层', exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
  expect(await page.evaluate(() => document.documentElement.style.overflow)).toBe('hidden');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: '打开抽屉', exact: true })).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.style.overflow)).toBe('');
});
