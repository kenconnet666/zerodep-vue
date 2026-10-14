# zerodep-vue

Vue VDOM TSX 编译与运行时 CSS 工具库，基于官方 Vue JSX v3.0.0 的源码 fork。完整作者协议和维护契约见 [BLUEPRINT.md](BLUEPRINT.md)，交付版本及远程证据见 [验收矩阵](docs/acceptance.md)。

CSS 采用运行时处理加辅助编译工具：系统关键字由基础层提供，主题通过继承扩展，并提供贯穿链式样式和关键字视图的泛型 T 入口。属性、关键字与主题成员的类型提示、中文说明及声明消费体验是交付要求；作者仍使用 class，绑定对应的内联 style 由编译器隐式接线。

提供 `_component`、For、props/default/children、class/bx、系统/继承主题、动画和全局规则，以及兼容实例的 HMR 与 Vue DevTools 样式检查。状态直接使用 Vue Ref 和 computed。作者写法见 [authoring.md](docs/authoring.md)、[CSS 文档](docs/css.md) 和 [主题文档](docs/themes.md)。

已有 Vue TSX 项目可将 Vite 配置中的 JSX 插件替换为 `@zerodep-vue/compiler` 的命名导出 `vitePlugin`；Babel 使用同一入口的 `babelPlugin`。选项沿用官方 JSX，Vite 入口另提供 include、exclude 和 babelPlugins。不要同时保留另一份 Vue JSX 转换；原有 Vue SFC 插件不受此限制。完整接入示例与混用边界见 [兼容与迁移](docs/compatibility.md)。开发态更新行为见 [HMR](docs/hmr.md)，源码定位、绑定消费值和 Vue DevTools 集成见 [开发检查](docs/devtools.md)。

## 环境

分发结构、tarball 安装及仓库外消费者验证见 [打包与独立安装](docs/packages.md)。项目新增代码沿用 MIT；上游和生成数据的许可在对应包中单独保留。

最终交付条件及当前证据范围见 [验收矩阵](docs/acceptance.md)。

- Node 24；当前固定本机基线 24.18.0。
- pnpm 11.22.0。
- TypeScript 精确固定 6.0.3，Vue 3.5.43，Babel 8.0.6。
- 依赖在 pnpm-workspace.yaml 的 catalog 中精确记录，安装使用唯一 pnpm-lock.yaml。

## 目录

- packages/compiler：Babel/Vite 接入、TSX 转换、编辑器扩展和固定官方 JSX fork。
- packages/core：运行时 CSS、继承主题、组件作者 API、For、JSX 类型与开发工具。
- packages/ui：自有组件库的基础工程、显式 peer 依赖、TSX 测试与构建；当前尚未导出产品组件。
- fixtures：普通 Vue TSX、作者类型、Naive 固定生产源码、真实浏览器混用和仓库外包消费。
- scripts/language-services：仅 TS/TSX 的项目 LSP 与 MCP 桥接。
- docs/upstream.md：来源与实现边界。

三个包都只提供根入口；src 根目录只保留 index.ts，其余实现按职责放入子目录。UI 从 core 使用运行能力，编译和编辑器能力由 compiler 提供；Zod、Decimal、日期、定位与 Lucide 数据由应用显式安装并从原包导入，UI 不重新导出。

UI 工程已按授权建立，配置和依赖决策见 [UI 基础计划](docs/ui-foundation.md)。[组件库准备评审](docs/ui-library-readiness.md) 保留清理、基础契约和正式组件的实施顺序。当前只建立基础，不把目录或依赖安装当作组件实现。

阅读实现时，先看 [CSS 类型与运行时阅读说明](packages/core/src/css/README.md)，再看对应职责模块；不必从生成声明入手。全仓简化的范围、取舍与验证见 [可维护性记录](docs/maintainability.md)。

## 本地开发与远程验证

```powershell
pnpm install --frozen-lockfile
pnpm lsp:setup
pnpm lsp:inspect fixtures/legacy-tsx/src/Counter.tsx
pnpm exec prettier --check README.md .github/workflows/ci.yml
```

上面的文件路径是示例，按本次改动选择对应文件。修改完成后，本地只查相关 LSP 诊断或运行必要的少量短测试；小型、确定性修改通过即可提交。不要将全仓类型检查、完整构建或全量 LSP 验证作为每次本地提交的前置步骤。

完整验证由 [GitHub Actions CI](.github/workflows/ci.yml) 负责：包与夹具类型、编译/SSR、上游分片、运行时 CSS、Naive 三组完整源码构建、四组浏览器与稳定性、开发工具、构建打包及 Linux/Windows 独立消费者和 LSP 分工运行，最后由 CI result 汇总。每个任务覆盖的行为及准确提交见验收矩阵。

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

2026-10-13 已在重启后的项目会话直接验证五个 MCP 工具：TypeScript 6.0.3，普通 TSX 文件完整诊断为 0 错误，类型查看、补全、定义及引用查询正常。CSS 和主题的源码类型夹具另验证泛型、负向输入、中文 hover 与补全；打包声明由独立消费者验证。

WebStorm 使用本项目 node_modules/typescript 作为 SDK；本机 .idea/compiler.xml 已配置该路径。.vscode/settings.json 同样指向工作区 TypeScript。未修改全局 IDE 设置或老项目配置。

项目级 MCP 配置格式参见 [OpenAI 官方 MCP 文档](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)；项目配置的加载与信任范围见 [OpenAI 官方配置文档](https://learn.chatgpt.com/docs/config-file/config-advanced#project-config-files-codexconfigtoml)。
