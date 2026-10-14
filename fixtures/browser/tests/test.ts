import { test as base, expect } from '@playwright/test';

/** 普通交互测试统一捕获页面错误及 Vue 警告；故意制造语法错误的 HMR 套件自行管理。 */
export const test = base.extend<{ errors: string[] }>({
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
export { expect };
