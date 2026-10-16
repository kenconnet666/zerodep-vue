import { defineConfig } from '@playwright/test';
import { env } from 'node:process';

const mode = env.UI_BROWSER_MODE ?? 'development';
if (!['development', 'production'].includes(mode))
  throw new Error(`Unknown UI_BROWSER_MODE: ${mode}`);
const production = mode === 'production';

export default defineConfig({
  testDir: './test/browser',
  testMatch: '**/*.spec.ts',
  outputDir: './test-results/playwright',
  forbidOnly: !!env.CI,
  workers: 1,
  timeout: 30_000,
  reporter: [['list'], ['json', { outputFile: 'test-results/browser-report.json' }]],
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        ...(env.PLAYWRIGHT_CHANNEL ? { channel: env.PLAYWRIGHT_CHANNEL } : {}),
      },
    },
    { name: 'firefox', use: { browserName: 'firefox' } },
  ],
  use: {
    baseURL: 'http://127.0.0.1:4176',
    viewport: { width: 1280, height: 1000 },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: production
      ? 'pnpm build:components && pnpm preview:components'
      : 'pnpm dev:components',
    url: 'http://127.0.0.1:4176',
    reuseExistingServer: !env.CI && !production,
    timeout: 30_000,
  },
});
