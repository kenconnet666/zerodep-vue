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

test('text input keeps IME drafts, native form submission, reset and clear focus', async ({
  page,
}) => {
  const form = page.getByTestId('input-form');
  const input = page.getByRole('textbox', { name: '查询内容', exact: true });
  await input.focus();
  await input.dispatchEvent('compositionstart');
  await input.evaluate((element) => {
    (element as HTMLInputElement).value = '中文';
    element.dispatchEvent(new InputEvent('input', { bubbles: true, isComposing: true }));
  });
  await expect(page.getByTestId('input-value')).toHaveText('初始内容');
  await input.dispatchEvent('compositionend');
  await expect(page.getByTestId('input-value')).toHaveText('中文');
  await input.press('Enter');
  await expect(page.getByTestId('input-submissions')).toHaveText('1');
  expect(
    await form.evaluate((element) => new FormData(element as HTMLFormElement).get('query')),
  ).toBe('中文');
  await form.getByRole('button', { name: '重置输入', exact: true }).click();
  await expect(input).toHaveValue('初始内容');
  await input.locator('..').getByRole('button', { name: '清空', exact: true }).click();
  await expect(input).toHaveValue('');
  await expect(input).toBeFocused();
  await expect(input).toHaveAttribute('aria-invalid', 'true');
  await input.fill('原始值');
  await input.dispatchEvent('compositionstart');
  await input.evaluate((element) => {
    (element as HTMLInputElement).value = '组合草稿';
    element.dispatchEvent(new InputEvent('input', { bubbles: true, isComposing: true }));
  });
  await input.locator('..').getByRole('button', { name: '清空', exact: true }).click();
  await input.dispatchEvent('compositionend');
  await expect(input).toHaveValue('');
  await expect(page.getByTestId('input-value')).toHaveText('');
  const notes = page.getByRole('textbox', { name: '备注内容', exact: true });
  await notes.fill('修改\n保留换行');
  expect(
    await form.evaluate((element) => new FormData(element as HTMLFormElement).get('notes')),
  ).toBe('修改\n保留换行');
  await form.getByRole('button', { name: '重置输入', exact: true }).click();
  await expect(notes).toHaveValue('第一行\n第二行');
});

test('fields compose native choice controls, validation, keyboard movement and reset', async ({
  page,
}) => {
  const form = page.getByTestId('field-form');
  const input = form.getByRole('textbox', { name: '称呼', exact: true });
  await input.focus();
  await input.press('Tab');
  await expect(input).toHaveAttribute('aria-invalid', 'true');
  await expect(form.getByText('请填写称呼', { exact: true })).toBeVisible();
  await input.fill('  用户  ');
  await expect(page.getByTestId('field-output')).toHaveText('用户');
  await expect(input).toHaveValue('  用户  ');
  const accepted = form.getByRole('checkbox', { name: '接受条款', exact: true });
  await accepted.check();
  const daily = form.getByRole('radio', { name: '每天', exact: true });
  const weekly = form.getByRole('radio', { name: '每周', exact: true });
  await daily.focus();
  await daily.press('ArrowRight');
  await expect(weekly).toBeChecked();
  await expect(page.getByTestId('radio-touched')).toHaveText('false');
  await form.getByRole('button', { name: '切换选择只读', exact: true }).click();
  await daily.click();
  await expect(weekly).toBeChecked();
  await accepted.click();
  await expect(accepted).toBeChecked();
  expect(
    await form.evaluate((element) => Object.fromEntries(new FormData(element as HTMLFormElement))),
  ).toEqual({ nickname: '  用户  ', accepted: 'on', notifications: 'on', frequency: 'weekly' });
  await form.getByRole('button', { name: '切换选择只读', exact: true }).click();
  await form.getByRole('button', { name: '切换选择取消', exact: true }).click();
  await daily.click();
  await expect(weekly).toBeChecked();
  await form.getByRole('button', { name: '重置字段', exact: true }).click();
  await expect(daily).toBeChecked();
  await expect(accepted).not.toBeChecked();
  await expect(input).toHaveValue('');
  await expect(input).toHaveAttribute('aria-invalid', 'false');
  await expect(page.getByTestId('radio-touched')).toHaveText('false');
  await form.getByRole('button', { name: '切换选择取消', exact: true }).click();
  await form.getByRole('button', { name: '切换选择回退', exact: true }).click();
  await weekly.click();
  await expect(daily).toBeChecked();
  await expect(weekly).not.toBeChecked();
  expect(
    await form.evaluate((element) => new FormData(element as HTMLFormElement).get('frequency')),
  ).toBe('daily');
});

test('tooltip survives disable while hovered and theme, RTL and reduced motion remain reactive', async ({
  page,
}) => {
  await expect(page.getByRole('button', { name: 'dashed primary', exact: true })).toHaveCSS(
    'border-top-style',
    'dashed',
  );
  const custom = page.getByTestId('button-colors');
  await custom.hover();
  await expect(custom).toHaveCSS('color', 'rgb(102, 51, 153)');
  await expect(custom).toHaveCSS('background-color', 'rgb(255, 240, 245)');
  await expect(custom).toHaveCSS('border-top-color', 'rgb(0, 128, 128)');
  await custom.evaluate((element) => element.setAttribute('aria-pressed', 'true'));
  await expect(custom).toHaveCSS('background-color', 'rgb(255, 240, 245)');
  const trigger = page.getByRole('button', { name: '悬停提示', exact: true });
  await trigger.hover();
  const tooltip = page.getByRole('tooltip');
  await expect(tooltip).toBeVisible();
  await tooltip.hover();
  const toggle = page.getByRole('button', { name: '切换提示禁用', exact: true });
  await toggle.evaluate((element) => (element as HTMLButtonElement).click());
  await expect(tooltip).toHaveCount(0);
  await toggle.evaluate((element) => (element as HTMLButtonElement).click());
  await trigger.hover();
  await expect(tooltip).toBeVisible();
  await toggle.hover();
  await expect(tooltip).toHaveCount(0);
  const button = page.getByRole('button', { name: 'solid primary', exact: true });
  const color = await button.evaluate((element) => getComputedStyle(element).backgroundColor);
  await page.getByRole('button', { name: '切换主题', exact: true }).click();
  await expect
    .poll(() => button.evaluate((element) => getComputedStyle(element).backgroundColor))
    .not.toBe(color);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(button).toHaveCSS('transition-duration', '0s');
  await page.getByRole('button', { name: '切换方向', exact: true }).click();
  const slider = page.getByRole('slider', { name: '音量' });
  await slider.focus();
  await page.keyboard.press('ArrowRight');
  await expect(slider).toHaveAttribute('aria-valuenow', '29');
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
