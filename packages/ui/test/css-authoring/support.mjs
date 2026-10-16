// 运行实际 core/compiler；这里只提供测试宿主、结果序列化及浏览器启动。
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { existsSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
export const root = fileURLToPath(new URL('../../../../', import.meta.url));
export * as core from '../../../core/src/index.ts';
export * as vue from 'vue';
import { objectClass } from '../../../core/src/css/object.ts';
export { staticCss } from '../../../core/src/css/object.ts';
import { resolveClass } from '../../../core/src/css/resolve.ts';
export const resolveCss = (input) => resolveClass(objectClass(input));
export function serial(result) {
  const { className, ruleName, cssText, variables, resources } = result;
  return { className, ruleName, cssText, variables, resources };
}
export function writeReport(filename, result) {
  const directory = process.env.ZERODEP_CSS_PROBE_RESULTS;
  if (directory) writeFileSync(join(directory, filename), JSON.stringify(result, null, 2));
}
export async function openBrowser() {
  const require = createRequire(resolve(root, 'packages/ui/package.json'));
  const { chromium } = require('@playwright/test');
  const paths = [
    chromium.executablePath(),
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    ...(process.env.LOCALAPPDATA
      ? [join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe')]
      : []),
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ];
  const executablePath = paths.find((path) => existsSync(path));
  if (!executablePath)
    throw new Error(
      'CSS 探测需要已安装的 Playwright Chromium 或系统 Chrome/Edge；探测不会自动下载浏览器。',
    );
  const browser = await chromium.launch({ headless: true, executablePath, timeout: 15000 });
  try {
    const page = await browser.newPage({ viewport: { width: 1000, height: 700 } });
    page.setDefaultTimeout(5000);
    page.setDefaultNavigationTimeout(10000);
    return { browser, page };
  } catch (error) {
    await browser.close();
    throw error;
  }
}
