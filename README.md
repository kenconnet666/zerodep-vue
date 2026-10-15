# zerodep-vue

Vue VDOM TSX 编译器、运行时 CSS 和自有 UI 组件库。仅维护 Vue VDOM，不扩展模板编译或其他 renderer。

## 工程

- `packages/compiler`：官方 Vue JSX v3.0.0 源码 fork、Babel/Vite 接入和编辑器扩展；来源记录在 `upstream.json`。
- `packages/core`：`_component`、`For`、运行时 CSS、继承主题、HMR 与 DevTools 接线。
- `packages/ui`：组件库及其集成测试；目前提供 `Provider`、UI 主题和语言配置，其他交互组件尚未实现。
- `packages/core/scripts/css`：CSS 生成和体积检查；各包的测试配置及命令由本包维护。
- `scripts/pack.mjs`：工作区打包；`scripts/build-utils.mjs` 提供打包、CSS 和 UI 构建共用的文件遍历及命令执行。
- `scripts/lsp`：项目语言服务、MCP 桥接和配置生成。

三个包都通过根入口使用。UI 依赖 core，业务组件不进入 core/compiler；第三方能力通过显式 peer 依赖使用，不从 UI 重新导出。

## 环境与接入

Node 和 pnpm 版本以根 `package.json` 为准，子包不重复声明。依赖由 `pnpm-workspace.yaml` 的单一 catalog 和唯一的 `pnpm-lock.yaml` 固定。

```powershell
pnpm install --frozen-lockfile
```

Vite 使用 `@zerodep-vue/compiler` 的命名导出 `vitePlugin`，Babel 使用同一入口的 `babelPlugin`。不要叠加另一份 Vue JSX 转换。

```ts
import { defineConfig } from 'vite';
import { vitePlugin } from '@zerodep-vue/compiler';

export default defineConfig({ plugins: [vitePlugin()] });
```

状态直接使用 Vue API。应用主题模块从 `createCssContext(source)` 解构导出 `useCss`、`provideTheme`、`useTheme`；组件内统一写 `const s = useCss()`，样式通过 `class` 传入。

```tsx
import { _component, createCssContext, SystemKeywords } from '@zerodep-vue/core';

const { useCss } = createCssContext(new SystemKeywords());

export const Example = _component(() => {
  const s = useCss();
  return <div class={s.display('inline-flex').padding(12)}>内容</div>;
});
```

系统值和主题名使用字面量；`useTheme()` 返回当前区域的 reactive 对象。动态样式显式使用 `bx`，编译器负责内联 style 接线；`cx` 只负责有序组合，不新增 JSX 样式属性。

## UI Provider

`Provider` 通过 Vue 组件树向下传递 `theme` 和 `lang`，没有额外 DOM 容器。后代在 setup 中调用 UI 包的 `useCss()`、`useTheme()` 和 `useLang()`；主题和语言都是稳定的只读 reactive 视图，直接读取字段，无需 `.value`。

实现位于 `packages/ui/src/config`：`lang/` 收纳语言配置和 `types.ts` 类型定义，`theme/` 收纳主题实现和 `context.ts` CSS 上下文，`Provider.tsx` 负责继承和覆盖。

```tsx
import { reactive } from 'vue';
import { _component } from '@zerodep-vue/core';
import { Provider, UiTheme, enUS, zhCN, useCss, useLang, useTheme } from '@zerodep-vue/ui';

class BrandTheme extends UiTheme {
  override readonly color = { ...new UiTheme().color, _brand: '#7c3aed' };
}

const Status = _component(() => {
  const s = useCss();
  const theme = useTheme();
  const lang = useLang();
  return (
    <output class={s.color('_brand')} data-brand={theme.color._brand}>
      {lang.confirm} / {lang.locale} / {lang.timeZone}
    </output>
  );
});

export const App = _component(() => {
  const theme = reactive(new BrandTheme());
  const lang = reactive({ ...zhCN, timeZone: 'Asia/Shanghai' });
  return (
    <Provider theme={theme} lang={lang}>
      <Status />
      <Provider lang={enUS}>
        <Status />
      </Provider>
    </Provider>
  );
});
```

外层显示 `确认 / zh-CN / Asia/Shanghai`，内层显示 `Confirm / en-US / UTC`。`zhCN` 和 `enUS` 都是完整且不可修改的语言预设，包含 `confirm`、`cancel`、`clear`、`loading`、`locale`、`timeZone`；复制为自己的对象后可以修改。切换 `lang={enUS}`，或对自己的 reactive 对象执行 `Object.assign(lang, enUS)`，会同时切换文案、区域和时区。两个预设都显式使用 `UTC`，需要其他时区时在同一个对象中改写 `timeZone`。

嵌套配置遵循以下规则：

- `theme` 接收完整 `UiTheme` 实例、Ref 或 computed；传入主题时整套替换，不和父主题合并。可继承 `UiTheme` 定义新主题，覆盖属性组时用展开语法保留必要字段。`theme={undefined}` 恢复父级主题，根区域默认使用 `UiTheme`。
- `lang` 接收完整配置或局部字段，如 `lang={{ confirm: '保存', timeZone: 'UTC' }}`。省略或设为 `undefined` 的字段继续跟随父级；`lang={undefined}` 恢复全部继承。文案允许空字符串。
- 所有语言字段直接从 `useLang()` 返回值读取：`lang.confirm`、`lang.locale`、`lang.timeZone`。没有 Provider 时使用 `zhCN`。`locale` 按 BCP 47 规范化，`timeZone` 由 `Intl` 校验并保留传入标识；错误配置在读取时报告具体字段，不回退到宿主默认值。
- 调用方可修改自己的 reactive 配置或 Ref；后代只读视图不能反向修改来源。保留视图并在渲染或 computed 中读字段，直接解构出的普通值仍是 JavaScript 快照。

`Provider` 只覆盖 UI 包的 CSS 上下文。应用自行创建的 `createCssContext` 独立管理；在父组件 setup 中取得的主题或样式作者也不会被其返回 JSX 内部的 Provider 改写。Teleport 按 Vue 的逻辑组件树继承配置。SSR 每次请求使用自己的配置来源，首屏 hydration 使用相同值。

## 开发与验证

本地选择改动文件做 LSP 诊断，按需运行少量短测试：

```powershell
pnpm lsp:setup
pnpm lsp:inspect packages/ui/src/config/Provider.tsx
pnpm --filter @zerodep-vue/ui test test/provider.test.tsx
```

包专用命令直接通过 `pnpm --filter <包名>` 执行；根 `package.json` 只保留工作区聚合构建/检查、格式化、打包和 LSP 工具。共享 TypeScript 基础与构建选项保留在根配置，各包配置负责自己的源码和测试范围。

多个包共用的开发依赖统一放在根目录，独立工具放在所属包。各包仍显式声明发布所需的运行时依赖与 peer。src 根目录只保留 index.ts 和职责目录；Babel/Vite 入口统一收纳到 `compiler/src/plugins`，单文件构建工具直接使用 `ui/build.mjs`。

`lsp:setup` 从 `.codex/config.example.toml` 生成被忽略的本机配置。MCP 名为 `zerodep_vue_lsp`，提供 diagnostics、hover、definitions、references、completions；配置生成、独立 stdio 验证与重启后会话可调用是三个不同状态。

[远程 CI](.github/workflows/ci.yml) 负责完整类型检查、编译器与上游对照、core 运行时、TSX 作者测试、UI 两种编译模式、构建打包和 Linux/Windows LSP。项目源码保持严格类型检查；`skipLibCheck` 跳过第三方声明内部检查，不再维护第三方声明补丁。

后续组件交互、浏览器与安装消费验证围绕 `packages/ui` 建立。旧的独立夹具、Naive UI 构建和浏览器验收已移除；当前 CI 通过只代表现有测试通过，不能作为这些覆盖已恢复或组件库已完成的证据。

协作约定集中在 [AGENTS.md](AGENTS.md)。提交前核对上一轮提交的远程 CI；推送后记录新运行状态，不等待长测试或反复轮询。

## 许可

许可证文件统一保存在根 [LICENSE](LICENSE)，合并记录本项目、Vue JSX、Vite、csstype 和 zerodep-js 的 MIT 许可与版权；CSS 规范元数据来源 mdn-data 使用 CC0-1.0。打包产物携带这份统一许可，第三方 peer 依赖仍携带各自许可。
