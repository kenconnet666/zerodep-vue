# 远程 CI 工作流

完整验证入口为 [.github/workflows/ci.yml](../.github/workflows/ci.yml)，在分支 push、pull request 和手动触发时运行。各 job 使用独立 checkout；Node 从 .node-version 读取，pnpm 从 packageManager 读取，安装使用 frozen lockfile 和 pnpm store 缓存。

## 任务划分

| 任务                        | 验证内容                                                                    | 并行方式                                            |
| --------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------- |
| Format                      | 全仓已支持格式的文件检查                                                    | 独立 job                                            |
| Types                       | 两包及 legacy-tsx、authoring 类型夹具                                       | 四个矩阵 job，fail-fast=false                       |
| Compiler and SSR            | 普通 TSX 编译和 Vue SSR 对照                                                | 独立 job                                            |
| Upstream                    | 原始 JSX/resolve-type 断言与快照                                            | official/fork × 两个 shard，共四个 job              |
| TSX authoring               | 运行测试的类型，以及初始化、props/default、Ref、内容、attrs、For 与共享控件 | default/optimized 两个 job，类型检查仅 default 执行 |
| Naive production TSX        | 301 个生产 TSX 清单、全量发射、库构建与 SSR                                 | classic/official/fork 三个独立 job                  |
| Core runtime contracts      | 生成一致性、CSS/主题、宿主、HMR 与检查器契约                                | 独立 job                                            |
| Browser                     | 真实混用、按钮/表单、SSR/hydrate、500 次循环及生命周期                      | development/production × Chromium/Firefox           |
| Development tools           | HMR 状态保留、错误恢复、真实 DevTools 协议                                  | Chromium/Firefox，依赖 Naive 构建产物               |
| Build and package artifacts | 两包构建、来源一致性和 tarball 内容                                         | 构建后顺序验证与打包                                |
| Installed packages          | 仓库外安装、ESM/CJS、SSR、声明和中文提示                                    | Linux/Windows，依赖当前提交的 tarball               |
| LSP                         | 错误修复、依赖刷新、语义查询、补全和隔离                                    | Linux/Windows 两个矩阵 job                          |
| CI result                   | 所有验证任务必须成功                                                        | 等待依赖完成后汇总，不吞掉失败、取消或跳过          |

LSP 自检会改写自己的临时源码，因此与类型检查隔离在不同 runner 中；不要为了并行把它们放进同一个工作目录。浏览器与包消费者分别下载同一提交的 Naive／包产物并核对来源。矩阵设置并发上限，HMR 与 inspector 使用独立服务进程，避免语法错误恢复用例干扰普通页面。

构建产物及成功生成的 LSP 报告按 SHA/平台上传，保留七天。Actions 固定到已核对的提交 SHA。工作流只申请读取仓库权限，不执行包发布或生产部署；需要发布能力时另行定义目标和权限。

任务数量由工作流矩阵决定，CI result 汇总全部验证任务。增加能力时，按职责补入真实断言；新增 job 也必须接入 CI result。不能将尚未实现的测试声明为已覆盖，也不能用 continue-on-error 或删除必要断言换取绿色状态。

公开入口由安装包消费者统一验证 ESM/CJS 身份及实际编译、SSR 行为，工作流不再内嵌另一份导出清单。打包步骤检查声明/入口文件存在及源码来源，避免重复维护的旧 API 检查阻断真实消费验证。

CSS 单元契约、浏览器行为、开发工具和发布声明分别保留证据，任何一项都不能代替其他层。HMR 自动化采用 100ms 文件轮询，避开 Chokidar 对 50ms 内 change 事件的去重；仍通过真实文件变化和 Vite 更新协议验证，每次修改都要求浏览器显示相应结果。

## 真实控件与断言边界

fixtures/controls 是私有共享组件夹具：Button、ToggleButton、TextInput 和区域主题，分别进入默认/优化作者测试与浏览器。它们不作为 core 的产品组件导出。原生 HTML 属性通过 Vue attrs 转发并保留类型，控件自己声明 disabled、type、loading、回调和模型等运行时 props；标准 Vue 类型解析无法展开全部 DOM 事件映射，因此基类使用 Vue 的 @vue-ignore，透传行为有真实断言。

Node/组件层检查回调次数、默认属性、加载与禁用恢复、Ref 容器替换、class 转发、规则复用和卸载释放。ThemeRegion 补充对象/Ref 来源替换、跨模块嵌套及 Teleport；TextInput 补充原生 attrs、可写 computed、显式公开句柄和 IME 组合事件协议。SSR 检查实际 HTML、样式收集与请求隔离，结束后规则保留但元素租约释放。

浏览器负责键盘 Enter/Space、focus-visible/active、真实 disabled/fieldset/readonly、表单 submit/reset 与 change 通知、label/help/error 关联、变体与外部覆盖、区域来源替换及 SSR 后交互，不用合成事件冒充浏览器原生行为。完整矩阵都消费同一份 [私有夹具](../fixtures/controls/README.md)，不代表已有正式 UI 组件库。

`packages/core/test/tsx/tsconfig.json` 为运行测试提供与源码一致的 JSX、源码解析条件和严格选项；避免编辑器把没有归属配置的测试当作默认 React JSX 工程。default 作者任务先执行 `pnpm check:authoring`，不因 Vitest 转换成功就跳过测试代码的类型验收。

mixed 套件显式包含 mixed.spec、controls.spec 和 css-values.spec，development/production × Chromium/Firefox 都执行。CSS 值用例直接检查 transform、伪元素 content、URL 背景和关键帧的计算结果，以及动态 important 切换和后项描述覆盖；不只检查变量表。未知 PW_SUITE 或 BROWSER_MODE 立即报错，不能静默回退到另一套测试。普通套件共享页面错误与 Vue 警告检查；HMR 只在故意制造语法错误的阶段允许预期错误。

资源验证检查非零的实际消费、缓存上界和释放；不要求缓存恰好填满才能通过。浏览器样式从真实 style 节点/计算样式检查，SSR 收集结果单独验证。完整长测试仍只由 CI 执行。

## 提交节奏

1. 本地完成改动，只验证修改相关的 LSP、格式、语法或少量短测试。
2. 准备下一次提交时，按 SHA 核对上一轮远程 CI。若失败，先读取具体失败日志并定点修复，再做对应的短验证。
3. 按可审阅阶段提交并推送，继续下一项有用工作，不等待刚启动的长测试。
4. 若上一轮仍在排队或运行，记录 pending 和链接，不将它写成通过，也不阻塞无关工作。新提交可能取消旧运行，必须区分主动取消与测试失败。
5. 没有后续工作时报告当前提交与远程运行状态；下一次提交前继续核对，不建立无目标的轮询循环。

按实际提交筛选运行：

```powershell
gh run list --repo kenconnet666/zerodep-vue --workflow CI --branch master --limit 5 --json databaseId,headSha,status,conclusion,url
```

确认对应 run ID 后，通过 `gh run view <run-id> --log-failed` 读取失败日志。不要拿其他分支或较早提交的成功替代当前提交的验收。

完整的 check、build、test、format:check 和 lsp:verify 脚本保留为 CI 入口，不代表每次本地改动都应全部执行。

## 已有远程证据

当前交付证据见 [验收矩阵](acceptance.md)，各阶段的准确 SHA、失败原因和修复见 [实施记录](progress.md)。首次基础流程曾由 b4c8a7f2ca19ca737c652c32b94f46871cf66d6e 的 [CI 运行](https://github.com/kenconnet666/zerodep-vue/actions/runs/38418824193) 验证；该历史基础运行不能替代现有完整矩阵。
