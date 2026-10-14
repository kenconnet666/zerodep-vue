import { test, expect } from './test.ts';

test('class composition calls follow dependencies while bx updates values without rebuilding the chain', async ({
  page,
}) => {
  await page.goto('/');
  const node = page.getByTestId('css-memo');
  await expect(node).toHaveAttribute('data-compositions', '1');
  await expect(node).toHaveCSS('width', '10px');
  await page.getByRole('button', { name: '更新无关 CSS 状态' }).click();
  await expect(page.getByTestId('css-unrelated')).toHaveText('1');
  await expect(node).toHaveAttribute('data-compositions', '1');
  await page.getByRole('button', { name: '更新 CSS 验证值' }).click();
  await expect(node).toHaveCSS('width', '30px');
  await expect(node).toHaveAttribute('data-compositions', '1');
  await page.getByRole('button', { name: '更新 CSS 组合依赖' }).click();
  await expect(node).toHaveCSS('color', 'rgb(128, 0, 128)');
  await expect(node).toHaveAttribute('data-compositions', '2');
});

test('complete CSS values retain units, strings, URLs and keyframes after hydration and updates', async ({
  page,
}) => {
  await page.goto('/ssr');
  await page.waitForFunction(() => window.__mounted);
  const transform = page.getByTestId('css-template-transform');
  const animation = page.getByTestId('css-template-animation');
  const content = page.getByTestId('css-template-content');
  const name = await transform.getAttribute('class');
  await expect(transform).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 10, 20)');
  await expect(animation).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 10, 0)');
  expect(await content.evaluate((element) => getComputedStyle(element, '::before').content)).toBe(
    '"hello"',
  );
  await expect(page.getByTestId('css-template-url')).toHaveCSS(
    'background-image',
    'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E")',
  );
  await page.getByRole('button', { name: '更新 CSS 验证值' }).click();
  await expect(transform).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 30, 40)');
  await expect(animation).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 30, 0)');
  expect(await content.evaluate((element) => getComputedStyle(element, '::before').content)).toBe(
    '"updated ();"',
  );
  await expect(transform).toHaveAttribute('class', name!);
});

test('cx later descriptions win and dynamic important retains native priority against unknown classes', async ({
  page,
}) => {
  await page.goto('/');
  const dynamic = page.getByTestId('css-dynamic-important');
  await expect(page.getByTestId('css-later-wins')).toHaveCSS('color', 'rgb(0, 128, 0)');
  await expect(dynamic).toHaveCSS('color', 'rgb(255, 0, 0)');
  expect(await dynamic.getAttribute('style')).not.toContain('important');
  await page.getByRole('button', { name: '更新 CSS 验证值' }).click();
  await expect(dynamic).toHaveCSS('color', 'rgb(0, 0, 255)');
  await page.getByRole('button', { name: '恢复 CSS 优先级' }).click();
  await expect(dynamic).toHaveCSS('color', 'rgb(255, 0, 0)');
});
