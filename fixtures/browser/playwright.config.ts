import { defineConfig, devices } from '@playwright/test';

const mode = process.env.BROWSER_MODE ?? 'development';
const browser = process.env.PW_BROWSER ?? 'local';
const suite = process.env.PW_SUITE ?? 'mixed';
const suites: Record<string, string[]> = {
  mixed: ['**/mixed.spec.ts', '**/controls.spec.ts', '**/css-values.spec.ts'],
  hmr: ['**/hmr.spec.ts'],
  inspector: ['**/inspector.spec.ts'],
  stability: ['**/stability.spec.ts'],
};
if (!Object.hasOwn(suites, suite)) throw new Error('Unknown PW_SUITE: ' + suite);
if (!['development', 'production'].includes(mode)) throw new Error('Unknown BROWSER_MODE: ' + mode);
export default defineConfig({
  testDir: './tests',
  testMatch: suites[suite]!,
  fullyParallel: suite !== 'hmr',
  workers: suite === 'hmr' ? 1 : 2,
  forbidOnly: !!process.env.CI,
  retries: 0,
  timeout: 30000,
  expect: { timeout: 10000 },
  outputDir: `../../test-results/browser/${suite}/${mode}/${browser}/traces`,
  reporter: [
    ['list'],
    ['json', { outputFile: `../../test-results/browser/${suite}/${mode}/${browser}/report.json` }],
  ],
  use: {
    baseURL: 'http://127.0.0.1:4178',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        ...(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {}),
      },
    },
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
