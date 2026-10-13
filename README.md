# zerodep-vue

目标是成熟可用的 Vue VDOM TSX 编译与运行时 CSS 工具库。完整作者协议、兼容范围和 Naive UI 验收条件见 [BLUEPRINT.md](BLUEPRINT.md)。分阶段实施不降低最终交付标准。

CSS 采用运行时处理加辅助编译工具：系统关键字由基础层提供，主题通过继承扩展，并提供贯穿对象样式和关键字视图的泛型 T 入口。属性、关键字与主题成员的类型提示、中文说明及声明消费体验是交付要求；作者仍使用 class，绑定对应的内联 style 由编译器隐式接线。

官方 JSX 源码 fork、Vite 入口、上游双基线和 Naive UI 301 个生产 TSX 的三条编译/构建/SSR 路径已通过远程验证。_component、For、props/default/children、class/bx 接线已有实现与阶段证据；当前继续验证系统关键字、继承主题和完整工具，最终浏览器验收仍在实施。准确进度见 [实施记录](docs/progress.md)，作者写法见 [authoring.md](docs/authoring.md)、[CSS 文档](docs/css.md) 和 [主题文档](docs/themes.md)。

已有 Vue TSX 项目可将 Vite 配置中的 JSX 插件替换为 `@zerodep-vue/compiler/vite` 的默认导出；Babel 直接使用 `@zerodep-vue/compiler`。选项沿用官方 JSX，Vite 入口另提供 include、exclude 和 babelPlugins。不要同时保留另一份 Vue JSX 转换；原有 Vue SFC 插件不受此限制。开发态提供普通 Vue 组件 HMR 和 SSR 模块登记，增强的状态保留体验随作者能力继续实施。

## 环境

- Node 24；当前固定本机基线 24.18.0。
- pnpm 11.22.0。
- TypeScript 精确固定 6.0.3，Vue 3.5.43，Babel 8.0.6。
- 依赖在 pnpm-workspace.yaml 的 catalog 中精确记录，安装使用唯一 pnpm-lock.yaml。

## 目录

- packages/compiler：官方 JSX 小范围 fork、来源清单与兼容性对照。
- packages/tsx：组件作者 API、For、Vue 组件接线和局部 JSX 类型入口。
- packages/css：运行时 CSS、class 组合、绑定解析、Vue 接线与样式宿主。
- fixtures：普通 Vue TSX、作者类型、Naive 固定生产源码及后续混用验收。
- scripts/language-services：仅 TS/TSX 的项目 LSP 与 MCP 桥接。
- docs/upstream.md：来源与实现边界。

## 本地开发与远程验证

```powershell
pnpm install --frozen-lockfile
pnpm lsp:setup
pnpm lsp:inspect fixtures/legacy-tsx/src/Counter.tsx
pnpm exec prettier --check README.md .github/workflows/ci.yml
```

上面的文件路径是示例，按本次改动选择对应文件。修改完成后，本地只查相关 LSP 诊断或运行必要的少量短测试；小型、确定性修改通过即可提交。不要将全仓类型检查、完整构建或全量 LSP 验证作为每次本地提交的前置步骤。

完整验证由 [GitHub Actions CI](.github/workflows/ci.yml) 负责：格式、四包类型、编译/SSR、构建入口，以及 Linux/Windows LSP 使用独立 job 并行运行，最后由 CI result 汇总。当前覆盖现有实现，完整上游、Naive UI 和浏览器验收按蓝图建立，不能用当前基础 CI 的绿色结果代替最终产品验收。

每个可审阅阶段提交并推送。准备下一次提交时，先按 SHA 检查上一轮 CI，读取失败日志并修复实际问题。推送后继续工作，不等待长测试、不反复轮询；pending、取消与通过分别报告。操作与任务划分见 [远程 CI 工作流](docs/ci.md)。

## 项目 LSP

```powershell
pnpm lsp:setup
pnpm lsp:inspect fixtures/legacy-tsx/src/Counter.tsx
```

setup 从已跟踪的 .codex/config.example.toml 生成当前机器的 .codex/config.toml，写入实际 Node 路径和工作目录。只替换自己的管理区块，保留其他项目设置；生成文件不提交。

MCP 名为 zerodep_vue_lsp，提供 diagnostics、hover、definitions、references、completions 五个只读工具。底层固定使用当前仓库 TypeScript 6.0.3 和 typescript-language-server，不需要模板语言服务。位置参数按 1 起始，补全编辑使用 LSP 的 0 起始 UTF-16 坐标。

`pnpm lsp:verify` 是完整语言服务自检，由远程 LSP job 执行：通过生成的真实启动配置验证类型错误→修复、语法错误→修复、依赖刷新、TSX 属性补全、语义查询和工作区隔离。它会创建并清理临时源码，不与同一 checkout 的类型检查并行。本地日常使用按文件的 inspect；完整自检只在用户明确要求的排障中手动运行。结果保留在忽略的 test-results/language-services/verification.json，CI 同时上传报告。

完成配置后，重新加载或重启以本仓库为工作目录的 Codex 会话。重启前的独立验证与重启后会话实际出现 MCP 工具是两个验收步骤；不要只依据配置存在就宣称客户端已加载。

2026-10-13 已在重启后的项目会话直接验证五个 MCP 工具：TypeScript 6.0.3，普通 TSX 文件完整诊断为 0 错误，类型查看、补全、定义及引用查询正常。CSS 新 API 的类型与注释仍需随实现单独验收。

WebStorm 使用本项目 node_modules/typescript 作为 SDK；本机 .idea/compiler.xml 已配置该路径。.vscode/settings.json 同样指向工作区 TypeScript。未修改全局 IDE 设置或老项目配置。

项目级 MCP 配置格式参见 [OpenAI 官方 MCP 文档](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)；项目配置的加载与信任范围见 [OpenAI 官方配置文档](https://learn.chatgpt.com/docs/config-file/config-advanced#project-config-files-codexconfigtoml)。
