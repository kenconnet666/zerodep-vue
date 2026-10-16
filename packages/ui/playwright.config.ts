import { defineConfig } from '@playwright/test';
import { env } from 'node:process';

export default defineConfig({
  testDir: './test/browser',
  testMatch: '**/*.spec.ts',
  outputDir: './test-results/playwright',
  forbidOnly: !!env.CI,
  workers: 1,
  timeout: 30_000,
  use: {
    ...(env.PLAYWRIGHT_CHANNEL ? { channel: env.PLAYWRIGHT_CHANNEL } : {}),
    baseURL: 'http://127.0.0.1:4176',
    viewport: { width: 1280, height: 1000 },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'pnpm dev:components',
    url: 'http://127.0.0.1:4176',
    reuseExistingServer: !env.CI,
    timeout: 30_000,
  },
});
