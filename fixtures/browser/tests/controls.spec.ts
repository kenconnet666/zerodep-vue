import { test, expect } from './test.ts';

test('native button keyboard activation, form types and replacement models work after hydration', async ({
  page,
}) => {
  await page.goto('/ssr');
  await page.waitForFunction(() => window.__mounted);
  const input = page.getByRole('textbox', { name: '控件标题' });
  const action = page.getByRole('button', { name: '执行操作', exact: true });
  await input.fill('keyboard draft');
  await input.press('Tab');
  await expect(action).toBeFocused();
  await expect(action).toHaveCSS('outline-style', 'solid');
  await expect(action).toHaveCSS('outline-width', '3px');
  await action.press('Enter');
  await expect(page.getByTestId('action-count')).toHaveText('1');
  await action.press('Space');
  await expect(page.getByTestId('action-count')).toHaveText('2');
  await expect(page.getByTestId('submit-count')).toHaveText('0');
  const toggle = page.getByRole('button', { name: '固定项目', exact: true });
  await toggle.focus();
  await toggle.press('Space');
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByTestId('toggle-state')).toHaveText('true');
  await expect(page.getByTestId('sibling-label')).toHaveCSS('color', 'rgb(37, 99, 235)');
  expect((await page.getByTestId('sibling-source').getAttribute('style')) ?? '').not.toContain(
    '--zv-',
  );
  await page.getByRole('button', { name: '提交控件表单' }).click();
  await expect(page.getByTestId('submit-count')).toHaveText('1');
  await expect(page.getByTestId('submitted-title')).toHaveText('keyboard draft');
  await page.getByRole('button', { name: '重置控件表单' }).click();
  await expect(input).toHaveValue('draft');
  await expect(page.getByTestId('reset-count')).toHaveText('1');
  await page.getByRole('button', { name: '替换控件 Ref' }).click();
  await expect(input).toHaveValue('replacement');
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await toggle.click();
  await expect(page.getByTestId('toggle-state')).toHaveText('false');
  await expect(page.getByTestId('sibling-label')).toHaveCSS('color', 'rgb(0, 0, 0)');
  await page.getByRole('button', { name: '增加次数', exact: true }).click();
  await expect(page.getByTestId('action-count')).toHaveText('3');
});

test('loading, disabled props and disabled fieldsets stop activation and recover', async ({
  page,
}) => {
  await page.goto('/');
  const action = page.getByTestId('action-button');
  const toggle = page.getByTestId('toggle-button');
  await page.getByRole('checkbox', { name: '加载状态' }).check();
  await expect(action).toBeDisabled();
  await expect(toggle).toBeDisabled();
  await expect(action).toHaveAttribute('aria-busy', 'true');
  await expect(action.getByRole('status', { name: '正在处理' })).toBeVisible();
  // 使用真实指针，避免 force click 或派发合成事件绕过浏览器的 disabled 规则。
  await action.scrollIntoViewIfNeeded();
  const bounds = await action.boundingBox();
  expect(bounds).not.toBeNull();
  await page.mouse.click(bounds!.x + bounds!.width / 2, bounds!.y + bounds!.height / 2);
  await expect(page.getByTestId('action-count')).toHaveText('0');
  await page.getByRole('checkbox', { name: '禁用控件' }).check();
  await page.getByRole('checkbox', { name: '加载状态' }).uncheck();
  await expect(action).toBeDisabled();
  await expect(action).not.toHaveAttribute('aria-busy');
  await expect(action.getByRole('status')).toHaveCount(0);
  await page.getByRole('checkbox', { name: '禁用控件' }).uncheck();
  await action.click();
  await expect(page.getByTestId('action-count')).toHaveText('1');
  await page.getByRole('checkbox', { name: '禁用字段组' }).check();
  const field = page.getByRole('button', { name: '字段组操作' });
  await expect(field).toBeDisabled();
  await field.scrollIntoViewIfNeeded();
  const fieldBounds = await field.boundingBox();
  expect(fieldBounds).not.toBeNull();
  await page.mouse.click(
    fieldBounds!.x + fieldBounds!.width / 2,
    fieldBounds!.y + fieldBounds!.height / 2,
  );
  await expect(page.getByTestId('fieldset-count')).toHaveText('0');
  await page.getByRole('checkbox', { name: '禁用字段组' }).uncheck();
  await field.click();
  await expect(page.getByTestId('fieldset-count')).toHaveText('1');
});

test('button variants, external overrides, active state and region themes compute in the browser', async ({
  page,
}) => {
  await page.goto('/');
  const action = page.getByTestId('action-button');
  const outline = page.getByTestId('toggle-button');
  await expect(action).toHaveCSS('background-color', 'rgb(37, 99, 235)');
  await expect(outline).toHaveCSS('border-top-color', 'rgb(37, 99, 235)');
  await expect(outline).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
  await action.hover();
  await expect(action).toHaveCSS('background-color', 'rgb(29, 78, 216)');
  await page.mouse.down();
  try {
    await expect(action).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 1)');
  } finally {
    await page.mouse.up();
  }
  await page.getByRole('checkbox', { name: '紧凑按钮' }).check();
  await expect(action).toHaveCSS('padding-top', '4px');
  await expect(outline).toHaveCSS('padding-top', '8px');
  await page.getByRole('checkbox', { name: '外部样式覆盖' }).check();
  await expect(action).toHaveCSS('padding-top', '16px');
  await action.hover();
  await expect(action).toHaveCSS('background-color', 'rgb(150, 40, 110)');
  await page.getByRole('checkbox', { name: '外部样式覆盖' }).uncheck();
  await page.getByRole('button', { name: '切换控件主题' }).click();
  await expect(outline).toHaveCSS('border-top-color', 'rgb(126, 34, 206)');
  await expect(page.getByTestId('independent-button')).toHaveCSS(
    'background-color',
    'rgb(37, 99, 235)',
  );
  await action.hover();
  await expect(action).toHaveCSS('background-color', 'rgb(107, 33, 168)');
  const ruleCount = await page.evaluate(() => window.__fixture!.host.stats().activeRules);
  const className = await action.getAttribute('class');
  await page.getByRole('spinbutton', { name: '按钮宽度' }).fill('180');
  await expect(action).toHaveCSS('width', '180px');
  await expect(action).toHaveAttribute('class', className!);
  expect(await page.evaluate(() => window.__fixture!.host.stats().activeRules)).toBe(ruleCount);
  await page.evaluate(() => window.__fixture!.unmount());
  expect(await page.evaluate(() => window.__fixture!.host.stats().ownedReferences)).toBe(0);
});

test('input fixture retains native readonly, accessible associations and explicit commit semantics after hydration', async ({
  page,
}) => {
  await page.goto('/ssr');
  await page.waitForFunction(() => window.__mounted);
  const input = page.getByRole('textbox', { name: '控件标题' });
  const id = await input.getAttribute('id');
  expect(id).toBeTruthy();
  await expect(page.getByText('控件标题', { exact: true })).toHaveAttribute('for', id!);
  await expect(input).toHaveAttribute('maxlength', '32');
  const help = await input.getAttribute('aria-describedby');
  expect(help).toBeTruthy();
  await expect(page.getByText('用于验证原生属性与表单模型。')).toHaveAttribute('id', help!);
  await page.getByRole('checkbox', { name: '显示输入错误' }).check();
  await expect(input).toHaveAttribute('aria-invalid', 'true');
  const error = await page.getByText('标题需要修改。').getAttribute('id');
  await expect(input).toHaveAttribute('aria-describedby', `${help} ${error}`);
  await page.getByRole('checkbox', { name: '显示输入错误' }).uncheck();
  await expect(input).not.toHaveAttribute('aria-invalid');
  await expect(input).toHaveAttribute('aria-describedby', help!);
  await page.getByRole('button', { name: '聚焦控件输入' }).click();
  await expect(input).toBeFocused();
  await input.fill('native draft');
  await input.press('Tab');
  await expect(page.getByTestId('commit-count')).toHaveText('1');
  await expect(page.getByTestId('committed-title')).toHaveText('native draft');
  await page.getByRole('button', { name: '重置控件表单' }).click();
  await expect(input).toHaveValue('draft');
  await page.getByRole('button', { name: '替换控件 Ref' }).click();
  await expect(input).toHaveValue('replacement');
  await expect(page.getByTestId('commit-count')).toHaveText('1');
  await page.getByRole('checkbox', { name: '只读控件' }).check();
  await page.getByRole('button', { name: '聚焦控件输入' }).click();
  await input.press('End');
  await input.press('A');
  await expect(input).toHaveValue('replacement');
  await page.getByRole('checkbox', { name: '只读控件' }).uncheck();
  await input.fill('committed');
  await input.press('Tab');
  await expect(page.getByTestId('commit-count')).toHaveText('2');
  await expect(page.getByTestId('committed-title')).toHaveText('committed');
  await expect(input).toHaveAttribute('id', id!);
});

test('fixture theme boundary follows source object, Ref container and Ref value replacement', async ({
  page,
}) => {
  await page.goto('/');
  const control = page.getByTestId('replaceable-region');
  const className = await control.getAttribute('class');
  await expect(control).toHaveCSS('background-color', 'rgb(37, 99, 235)');
  await page.getByRole('button', { name: '替换区域对象' }).click();
  await expect(control).toHaveCSS('background-color', 'rgb(22, 163, 74)');
  await page.getByRole('button', { name: '替换区域 Ref', exact: true }).click();
  await expect(control).toHaveCSS('background-color', 'rgb(234, 88, 12)');
  await page.getByRole('button', { name: '更新区域 Ref' }).click();
  await expect(control).toHaveCSS('background-color', 'rgb(8, 145, 178)');
  await expect(control).toHaveAttribute('class', className!);
  await expect(page.getByTestId('independent-button')).toHaveCSS(
    'background-color',
    'rgb(37, 99, 235)',
  );
});
