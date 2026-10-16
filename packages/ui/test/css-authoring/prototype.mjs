// 候选作者协议的局部探测适配器；不会从包入口导出，也不表示新 API 已实现。
import { createRequire } from 'node:module';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { existsSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
export const root = fileURLToPath(new URL('../../../../', import.meta.url));
const use = (p) => import(pathToFileURL(resolve(root, p)).href);
export const core = await use('packages/core/src/index.ts');
export const vue = await import(
  pathToFileURL(createRequire(resolve(root, 'package.json')).resolve('vue')).href
);
const { resolveClass } = await use('packages/core/src/css/resolve.ts');
const { isBinding, isTemplate } = await use('packages/core/src/css/bindings.ts');
const require = createRequire(resolve(root, 'packages/core/package.json'));
const selectorParser = require('postcss-selector-parser');
const { useCss } = core.createCssContext(new core.SystemKeywords());
export const s = useCss();
export const dyn = core.binding;
export const template = core.template;
// 普通表达式先按 JS 规则求值，再把快照交给变量通道；不延迟或重复用户函数调用。
export function valueBinding(value) {
  return dyn(() => value);
}

export function autoSnapshotCss({ types: t }) {
  return {
    visitor: {
      Program(program) {
        let helper;
        const keyOf = (node) =>
          !node.computed && t.isIdentifier(node.key)
            ? node.key.name
            : t.isStringLiteral(node.key)
              ? node.key.value
              : undefined;
        const bind = (value) => {
          helper ??= program.scope.generateUidIdentifier('cssValue');
          return t.callExpression(t.cloneNode(helper), [value]);
        };
        const visit = (node) => {
          if (t.isArrayExpression(node)) {
            for (const element of node.elements) if (element) visit(element);
            return;
          }
          if (t.isConditionalExpression(node)) {
            visit(node.consequent);
            visit(node.alternate);
            return;
          }
          if (t.isLogicalExpression(node)) {
            visit(node.right);
            return;
          }
          if (!t.isObjectExpression(node)) return;
          for (const property of node.properties) {
            if (!t.isObjectProperty(property)) continue;
            const key = keyOf(property);
            if (key === undefined) continue;
            if (/^[:&[@]/.test(key)) {
              visit(property.value);
              continue;
            }
            if (/^(aria|data)-/.test(key)) {
              if (t.isObjectExpression(property.value))
                for (const branch of property.value.properties)
                  if (t.isObjectProperty(branch)) visit(branch.value);
              continue;
            }
            if (
              !t.isStringLiteral(property.value) &&
              !t.isNumericLiteral(property.value) &&
              !t.isNullLiteral(property.value) &&
              !t.isBooleanLiteral(property.value)
            )
              property.value = bind(property.value);
          }
        };
        program.traverse({
          JSXAttribute(path) {
            if (!t.isJSXIdentifier(path.node.name) || !t.isJSXExpressionContainer(path.node.value))
              return;
            if (path.node.name.name === 'css') visit(path.node.value.expression);
            // 探测中只识别已显式登记的 slotIcon；正式实现必须由组件契约提供字段信息。
            if (
              path.node.name.name === 'slotIcon' &&
              t.isObjectExpression(path.node.value.expression)
            )
              for (const property of path.node.value.expression.properties)
                if (t.isObjectProperty(property) && keyOf(property) === 'css')
                  visit(property.value);
          },
        });
        if (helper)
          program.unshiftContainer(
            'body',
            t.importDeclaration(
              [t.importSpecifier(helper, t.identifier('valueBinding'))],
              t.stringLiteral(import.meta.url),
            ),
          );
        // 改写叶子后刷新引用路径，后续 _component 参数改写不能沿旧路径覆盖掉包装调用。
        program.scope.crawl();
      },
    },
  };
}
export function attributeSelector(name, value) {
  const node = selectorParser.attribute({ attribute: name, operator: '=' });
  node.setValue(String(value), { quoteMark: '"' });
  return '&' + node.toString();
}
// 探测适配器：只把候选对象语法接到当前 CSS 后端，不是正式的新 API。
export function objectCss(input, bindScalars = false) {
  if (input == null || input === false) return core.cx();
  if (Array.isArray(input)) return core.cx(...input.map((part) => objectCss(part, bindScalars)));
  const parts = [];
  for (const [key, value] of Object.entries(input)) {
    if (key.startsWith(':') || key.startsWith('&') || key.startsWith('[') || key.startsWith('@')) {
      parts.push(s.select(key, objectCss(value, bindScalars)));
    } else if (/^(aria|data)-/.test(key)) {
      if (value == null) continue;
      for (const [match, body] of Object.entries(value))
        parts.push(s.select(attributeSelector(key, match), objectCss(body, bindScalars)));
    } else {
      const current =
        bindScalars && value != null && !isBinding(value) && !isTemplate(value)
          ? dyn(() => value)
          : value;
      if (key.startsWith('--')) parts.push(s.variable(key, current));
      else {
        const method = s[key];
        if (typeof method !== 'function' || ['select', 'variable', 'constructor'].includes(key))
          throw new Error('Unknown probe CSS property: ' + key);
        parts.push(method.call(s, current));
      }
    }
  }
  return core.cx(...parts);
}
export function resolveCss(input, bindScalars = false) {
  return resolveClass(objectCss(input, bindScalars));
}
export function serial(result) {
  return {
    className: result.className,
    ruleName: result.ruleName,
    cssText: result.cssText,
    variables: result.variables,
    resources: result.resources,
  };
}
export function mergeAttrs(...sources) {
  let rules = [];
  const slots = [];
  const props = [];
  for (const source of sources) {
    if (!source) continue;
    const next = {};
    for (const key of Object.keys(source)) {
      if (key === 'css') rules.push(source[key]);
      else if (key === 'slotIcon') slots.push(source[key]);
      else next[key] = source[key];
    }
    props.push(next);
  }
  const result = core.mergeCssProps(...props);
  if (rules.length) result.css = rules;
  // 本探测显式登记一个 slot 字段；尚未实现从 Slot 类型生成此元数据。
  if (slots.length) result.slotIcon = mergeAttrs(...slots);
  return result;
}
export function primitive(tag) {
  const render = (props, context) =>
    core.renderCss(() => {
      const source = { ...context?.attrs, ...props };
      const { css, class: className, ...rest } = source;
      return core.createCssVNode(
        tag,
        { ...rest, class: core.cx(objectCss(css), className) },
        context?.slots?.default?.(),
      );
    });
  render.props = ['css'];
  render.inheritAttrs = false;
  return render;
}
export const _button = primitive('button');
export const _span = primitive('span');
export const _div = primitive('div');

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
