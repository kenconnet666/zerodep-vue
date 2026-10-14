# 远程 CI 工作流

完整验证入口为 [.github/workflows/ci.yml](../.github/workflows/ci.yml)，在分支 push、pull request 和手动触发时运行。各 job 使用独立 checkout；Node 从 .node-version 读取，pnpm 从 packageManager 读取，安装使用 frozen lockfile 和 pnpm store 缓存。

## 任务划分

| 任务                    | 验证内容                                     | 并行方式                                   |
| ----------------------- | -------------------------------------------- | ------------------------------------------ |
| Format                  | 全仓已支持格式的文件检查                     | 独立 job                                   |
| Types                   | 三包及 legacy-tsx、authoring 类型夹具        | 五个矩阵 job，fail-fast=false              |
| Compiler and SSR        | 普通 TSX 编译和 Vue SSR 对照                 | 独立 job                                   |
| Upstream                | 原始 JSX/resolve-type 断言与快照             | official/fork × 两个 shard，共四个 job     |
| TSX authoring           | 初始化、props/default、Ref、内容、attrs、For | default/optimized 两个 job                 |
| Naive production TSX    | 301 个生产 TSX 清单、全量发射、库构建与 SSR  | classic/official/fork 三个独立 job         |
| Runtime CSS             | 生成一致性、组合、绑定、主题及宿主生命周期   | 独立 job                                   |
| Browser                 | 真实混用、SSR/hydrate、500 次循环及生命周期  | development/production × Chromium/Firefox  |
| Development tools       | HMR 状态保留、错误恢复、真实 DevTools 协议   | Chromium/Firefox，依赖 Naive 构建产物      |
| Build and package entry | 三包构建、入口、来源一致性和 tarball 内容    | 构建后顺序验证与打包                       |
| Installed packages      | 仓库外安装、ESM/CJS、SSR、声明和中文提示     | Linux/Windows，依赖当前提交的 tarball      |
| LSP                     | 错误修复、依赖刷新、语义查询、补全和隔离     | Linux/Windows 两个矩阵 job                 |
| CI result               | 所有验证任务必须成功                         | 等待依赖完成后汇总，不吞掉失败、取消或跳过 |

LSP 自检会改写自己的临时源码，因此与类型检查隔离在不同 runner 中；不要为了并行把它们放进同一个工作目录。浏览器与包消费者分别下载同一提交的 Naive／包产物并核对来源。矩阵设置并发上限，HMR 与 inspector 使用独立服务进程，避免语法错误恢复用例干扰普通页面。

构建产物及成功生成的 LSP 报告按 SHA/平台上传，保留七天。Actions 固定到已核对的提交 SHA。工作流只申请读取仓库权限，不执行包发布或生产部署；需要发布能力时另行定义目标和权限。

完整运行共有 28 个验证任务及一个 CI result 汇总任务。增加能力时，按职责补入真实断言；新增 job 也必须接入 CI result。不能将尚未实现的测试声明为已覆盖，也不能用 continue-on-error 或删除必要断言换取绿色状态。

CSS 单元契约、浏览器行为、开发工具和发布声明分别保留证据，任何一项都不能代替其他层。HMR 自动化采用 100ms 文件轮询，避开 Chokidar 对 50ms 内 change 事件的去重；仍通过真实文件变化和 Vite 更新协议验证，每次修改都要求浏览器显示相应结果。

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
