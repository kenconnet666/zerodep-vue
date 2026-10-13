import { defineConfig, devices } from '@playwright/test';

const mode = process.env.BROWSER_MODE ?? 'development';
const browser = process.env.PW_BROWSER ?? 'local';
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  forbidOnly: !!process.env.CI,
  retries: 0,
  timeout: 30000,
  expect: { timeout: 10000 },
  outputDir: `../../test-results/browser/${mode}/${browser}/traces`,
  reporter: [
    ['list'],
    ['json', { outputFile: `../../test-results/browser/${mode}/${browser}/report.json` }],
  ],
  use: {
    baseURL: 'http://127.0.0.1:4178',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
  webServer: {
    command: 'node server.mjs',
    url: 'http://127.0.0.1:4178/__health',
    reuseExistingServer: false,
    timeout: 120000,
    stdout: 'pipe',
    stderr: 'pipe',
    gracefulShutdown: { signal: 'SIGTERM', timeout: 5000 },
  },
});
