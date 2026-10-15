# zerodep-vue

Vue VDOM TSX 编译器、运行时 CSS 和自有 UI 组件库。仅维护 Vue VDOM，不扩展模板编译或其他 renderer。

## 工程

- `packages/compiler`：官方 Vue JSX v3.0.0 源码 fork、Babel/Vite 接入和编辑器扩展；来源记录在 `upstream.json`。
- `packages/core`：`_component`、`For`、运行时 CSS、继承主题、HMR 与 DevTools 接线。
- `packages/ui`：组件库及其集成测试；当前只有基础工程和工具链验证，尚未导出正式组件。
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

## 开发与验证

本地选择改动文件做 LSP 诊断，按需运行少量短测试：

```powershell
pnpm lsp:setup
pnpm lsp:inspect packages/ui/test/foundation.test.tsx
pnpm --filter @zerodep-vue/ui test test/build.test.mjs
```

包专用命令直接通过 `pnpm --filter <包名>` 执行；根 `package.json` 只保留工作区聚合构建/检查、格式化、打包和 LSP 工具。共享 TypeScript 基础与构建选项保留在根配置，各包配置负责自己的源码和测试范围。

多个包共用的开发依赖统一放在根目录，独立工具放在所属包。各包仍显式声明发布所需的运行时依赖与 peer。src 根目录只保留 index.ts 和职责目录；Babel/Vite 入口统一收纳到 `compiler/src/plugins`，单文件构建工具直接使用 `ui/build.mjs`。

`lsp:setup` 从 `.codex/config.example.toml` 生成被忽略的本机配置。MCP 名为 `zerodep_vue_lsp`，提供 diagnostics、hover、definitions、references、completions；配置生成、独立 stdio 验证与重启后会话可调用是三个不同状态。

[远程 CI](.github/workflows/ci.yml) 负责完整类型检查、编译器与上游对照、core 运行时、TSX 作者测试、UI 两种编译模式、构建打包和 Linux/Windows LSP。项目源码保持严格类型检查；`skipLibCheck` 跳过第三方声明内部检查，不再维护第三方声明补丁。

后续组件交互、浏览器与安装消费验证围绕 `packages/ui` 建立。旧的独立夹具、Naive UI 构建和浏览器验收已移除；当前 CI 通过只代表现有测试通过，不能作为这些覆盖已恢复或组件库已完成的证据。

协作约定集中在 [AGENTS.md](AGENTS.md)。提交前核对上一轮提交的远程 CI；推送后记录新运行状态，不等待长测试或反复轮询。

## 许可

许可证文件统一保存在根 [LICENSE](LICENSE)，合并记录本项目、Vue JSX、Vite、csstype 和 zerodep-js 的 MIT 许可与版权；CSS 规范元数据来源 mdn-data 使用 CC0-1.0。打包产物携带这份统一许可，第三方 peer 依赖仍携带各自许可。
