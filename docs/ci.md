# 远程 CI 工作流

完整验证入口为 [.github/workflows/ci.yml](../.github/workflows/ci.yml)，在分支 push、pull request 和手动触发时运行。各 job 使用独立 checkout；Node 从 .node-version 读取，pnpm 从 packageManager 读取，安装使用 frozen lockfile 和 pnpm store 缓存。

## 任务划分

| 任务                    | 验证内容                                      | 并行方式                                   |
| ----------------------- | --------------------------------------------- | ------------------------------------------ |
| Format                  | 全仓已支持格式的文件检查                      | 独立 job                                   |
| Types                   | 三包及 legacy-tsx、authoring 类型夹具         | 五个矩阵 job，fail-fast=false              |
| Compiler and SSR        | 普通 TSX 编译和 Vue SSR 对照                  | 独立 job                                   |
| Upstream                | 原始 JSX/resolve-type 断言与快照              | official/fork × 两个 shard，共四个 job     |
| TSX authoring           | 初始化、props/default、Ref、内容、attrs、For  | default/optimized 两个 job                 |
| Naive production TSX    | 301 个生产 TSX 清单、全量发射、库构建与 SSR   | classic/official/fork 三个独立 job         |
| Build and package entry | 三包构建、实际导入 compiler、检查 JS/声明入口 | 独立 job，构建完成后顺序检查产物           |
| LSP                     | 错误修复、依赖刷新、语义查询、补全和隔离      | Linux/Windows 两个矩阵 job                 |
| CI result               | 所有验证任务必须成功                          | 等待依赖完成后汇总，不吞掉失败、取消或跳过 |

现有验证共二十个执行任务和一个汇总任务。LSP 自检会改写自己的临时源码，因此与类型检查隔离在不同 runner 中；不要为了并行把它们放进同一个工作目录。任务之间没有不必要的 needs 依赖，矩阵设置并发上限以控制资源使用。

构建产物及成功生成的 LSP 报告按 SHA/平台上传，保留七天。Actions 固定到已核对的提交 SHA。工作流只申请读取仓库权限，不执行包发布或生产部署；需要发布能力时另行定义目标和权限。

这些任务覆盖当前已经存在的实现。增加编译规则、运行时 CSS、Naive UI、浏览器或稳定性测试后，按职责补入真实 job，再接入 CI result。不能将尚未实现的测试声明为已覆盖，也不能用 continue-on-error 或删除必要断言换取绿色状态。

CSS 规则与宿主的完整契约在独立 Runtime CSS job 运行；浏览器计算样式、Vue 生命周期和 SSR/hydrate 接线仍需后续真实集成验收。

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

提交 b4c8a7f2ca19ca737c652c32b94f46871cf66d6e 的 [CI 运行](https://github.com/kenconnet666/zerodep-vue/actions/runs/38418824193) 已完成，十个任务全部成功。这证明基础远程流程已实际跑通；后续提交的状态仍按其自己的 SHA 判断。
