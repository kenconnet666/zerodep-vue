# 生产交付验收矩阵

2026-10-14 不可变链式作者迁移：下表已通过证据属于历史提交；本轮 API、夹具及编辑器已迁移，完整验收等待对应新提交 CI，不据旧结果声明新 API 全部通过。

本表记录下述旧三包基线的固定提交验收，保留当时的版本、路径及产物信息。当前已调整为 compiler/core 两包，CSS API 和主题模型也已修订；当前提交的验证状态以 [实施记录](progress.md) 及对应 CI 为准，不能把本表的历史结论归给新源码。

1.0.0 已按 BLUEPRINT.md 的 Vue VDOM、纯 TSX 和运行时 CSS 范围完成交付验收。被验证的源码及 tarball 提交为 **de5973b42c181839a9735576a9ef901ab34cca6c**；[完整 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38497045742) 的 28 个验证任务与 CI result 均成功。核对日期为 2026-10-14。

随后整理的交付说明不改变该版本的包源码、锁文件或构建输入。更新实现后仍须重新执行完整候选验收，不能将本表结论直接归给新源码。

| 条件                             | 同一提交的实际证据                                                                                                                             | 结果                                        |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 固定工具链与语言服务             | catalog/lockfile；Linux/Windows 各 10 项 LSP 检查；当前会话 TS 6.0.3 原生 MCP 完整诊断                                                         | 通过                                        |
| Vue JSX v3.0.0 旧行为            | 原始断言和快照，official/fork 各两份分片、各 108 个测试；普通 TSX 差分与 SSR                                                                   | 通过，无失败或跳过                          |
| Naive 全生产源码与消费           | classic/official/fork 各 301 个生产 TSX，与固定清单逐路径核对；每份库 588 个导出、构建和 SSR；fork 另发射 1353 份声明                          | 通过，三个下载 bundle 的 SHA-256 均匹配报告 |
| 作者 API 与状态/内容边界         | default/optimized 两组运行契约；组件和夹具严格类型；初始化、默认值、rest、Ref、回调、children/slots、For、ref/expose                           | 通过                                        |
| CSS 声明、覆盖与主题工具         | Node 契约、生成一致性、默认/优化作者测试；完整属性组、null、bx 多变量、关键字撤销/恢复、主题泛型、变量、动画和 global                          | 通过                                        |
| 真实 DOM、旧组件混用及共享状态   | development/production × Chromium/Firefox，每组 5 项混用用例                                                                                   | 20 项通过                                   |
| 生命周期与资源稳定性             | 每组另 2 项真实浏览器用例，包含 500 次挂载/更新/卸载、共享宿主、ShadowRoot 重建；单元契约覆盖 Transition、TransitionGroup、KeepAlive、异步取消 | 四组共 8 项通过                             |
| Teleport、嵌套主题与 SSR/hydrate | 独立请求、父主题继承、局部覆盖、运行时替换、两个区域弹层、样式采用和卸载；包含在四组混用用例中                                                 | 通过                                        |
| HMR 与开发检查                   | Chromium/Firefox 各 1 项状态保留/错误恢复测试及 1 项真实 Vue DevTools 协议测试；开发/生产/SSR source map                                       | 4 项浏览器用例及编译契约通过                |
| 生产不携带调试实现               | 生产模块清单与语法字面量检查；SSR/生产转换检查；两个系统的已安装包构建                                                                         | 通过                                        |
| 独立打包与运行                   | pack 来源一致性、全部导出和许可；Linux/Windows 在仓库外安装同一批 tarball；ESM/CJS、单一 Vue、Babel、Vite client/SSR                           | 两个平台通过，下载包哈希再次核对一致        |
| 发布声明与中文提示               | 两个平台均实际读取 23 份 dist 声明，skipLibCheck=false；泛型及负向输入、系统/主题中文 hover、补全详情、定义位置                                | 零诊断，未使用工作区源码条件                |
| 资源清理                         | 两个独立消费者 success/cleaned/outsideWorkspace 均为 true；清理所有权和链接边界测试                                                            | 通过，保留共享 pnpm store                   |
| 文档、许可与版本                 | 三包 1.0.0；README、作者/CSS/主题/HMR/开发检查/迁移/安装文档；各来源许可随包分发                                                               | 已核对                                      |

12 份 Playwright 报告共 32 个用例，全部 expected，skipped/unexpected/flaky 均为 0，重试配置为 0。它们分别覆盖混用、稳定性、HMR 和 inspector；没有用一种任务的成功替代其他任务。

## 交付产物

同一运行的 `packages-de5973b42c181839a9735576a9ef901ab34cca6c` artifact 提供三个包。验收时曾将包与 18 个原始 artifact 下载到本机 `artifacts/1.0.0-de5973b/`，核对摘要、任务结果和消费者锁文件均随之保存。该旧三包副本已在 2026-10-14 按用户要求清理；下面保留当时核对的哈希，远程结果见本页链接。当前双包安装方式见 [packages.md](packages.md)。

| 文件                           |  字节数 | SHA-256                                                          |
| ------------------------------ | ------: | ---------------------------------------------------------------- |
| zerodep-vue-compiler-1.0.0.tgz |  114375 | 5581e7a1ece980e0a9419d008536bc6fa4aafa7c5143ff0dc789afd5338e7dc6 |
| zerodep-vue-tsx-1.0.0.tgz      |   14497 | 80acbcdb427809ddf8d261ed131f567906d8900dcfa2866cdd337d3b185bbd72 |
| zerodep-vue-css-1.0.0.tgz      | 1029621 | faa732b1d9cd8451875d025b176af004a02498101d3116f7e8f8aad64c41f93d |

验收时曾将同一次构建的 dist 放入当时的三个 packages 目录，并确认两个消费样例的原生 LSP 为 TypeScript 6.0.3、complete=true、errors=0；没有在本地重跑完整构建。这些旧输出现已清理，不能当作当前双包源码的验证结果。

包保留 private 标记，交付是可安装的 tarball；该次验收没有向 npm registry 发布。CI artifact 的远程保留期为七天；保留期内可重新下载，过期后需从对应提交重新构建或运行验证。本机旧交付目录已删除，清理范围见 [组件库准备评审](ui-library-readiness.md)。

## 验证边界

固定组合为 Vue 3.5.43、TypeScript 6.0.3、Babel 8.0.6、Vite 8.3.1、Node 24.18.0、pnpm 11.22.0、Naive UI 2.45.3 固定源码提交。兼容声明不自动扩展到其他版本、其他 renderer 或未测试浏览器。

Naive 全生产 TSX 的转换与库构建均已覆盖；交互清单聚焦 Input、Button、ConfigProvider、Select/Teleport、DataTable 以及与自有组件的状态和样式衔接，不声称重测 Naive 每个业务行为。Naive 声明从同一源码发射供调用方检查，不把该步骤表述为 Naive 内部全量类型检查。自己的发布声明由仓库外消费者严格检查。

模板宿主的值 props、普通回调、默认 slot 与 expose 另有基础运行用例，复用 Vue 本身的模板能力；未增加模板编译器、模板 bx 或 Ref 自动适配。长期运行证据是明确的 500 次循环/组及资源边界断言，不等同于对任意负载、浏览器或业务应用的无条件保证。
