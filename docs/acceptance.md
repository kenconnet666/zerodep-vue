# 生产交付验收矩阵

本表对照 BLUEPRINT.md 的最终条件。只有同一候选提交的全部必要 CI 任务成功，并核对下列证据范围后，才能标记生产交付完成。局部测试用于定位问题，不替代完整验收。当前最近核对的完整运行是 c631f83；其浏览器、稳定性和开发工具均通过，优化作者分支及独立包消费的修复还需重新验收。

| 条件                             | 具体证据入口                                                                                     | 当前状态                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| 固定工具链与独立语言服务         | catalog/lockfile、Linux/Windows LSP job、当前 MCP 诊断                                           | 365d849 的对应任务通过                                      |
| Vue JSX v3.0.0 旧行为兼容        | upstream.json、原始上游测试/快照、official/fork 两组分片及差分测试                               | 365d849 通过                                                |
| Naive 全生产源码编译及真实消费   | 301 个 TSX 清单、classic/official/fork 报告、bundle 哈希、浏览器入口核验                         | 365d849 通过                                                |
| 作者 API 与状态/内容边界         | component-transform、component.test、authoring 类型夹具及两种优化模式                            | 已有契约通过，新增生命周期回归待当前提交 CI                 |
| CSS 声明、覆盖、变量与主题工具   | CSS Node 契约、生成一致性、默认/优化作者测试                                                     | 已有契约通过，离场/容器复用修复待当前提交 CI                |
| 真实 DOM、共享状态及旧组件混用   | mixed.spec 开发/生产 × Chromium/Firefox                                                          | 365d849 通过，嵌套主题扩展待当前提交 CI                     |
| 生命周期、引用与资源稳定性       | lifecycle.test；stability.spec 的 500 次挂载/更新/卸载、共享宿主和 ShadowRoot 重建               | c631f83 四组稳定性通过；优化 TransitionGroup 修复待重验     |
| Teleport、嵌套主题与 SSR/hydrate | mixed.spec 的父主题继承、局部覆盖、请求隔离、样式采用和卸载                                      | c631f83 四组浏览器通过                                      |
| HMR 与开发检查                   | development-tools 两组真实浏览器；source-map、inspector 协议与无额外 getter 读取                 | 365d849 通过                                                |
| 生产不携带调试实现               | 生产 chunk 模块清单、语法字面量和 SSR/生产转换检查                                               | 普通浏览器构建通过，包消费者的准确识别待重验                |
| 独立打包与发布声明               | pack.json/hash、Linux/Windows checkout 外安装、ESM/CJS、Babel/Vite/SSR、中文 hover/补全/定义跳转 | tarball 构建通过；消费者路径/标记检查已修复，完整消费待重验 |
| 文档、许可及交付版本             | 包 README、项目与上游许可、authoring/css/themes/hmr/devtools/packages 文档                       | 已同步，最终版本与证据还需汇总                              |

模板宿主的值 props、普通回调、默认 slot 与 expose 另有基础用例，复用 Vue 本身的模板能力；它是附加验证，不扩大为模板编译器或模板 Ref 自动适配任务。

最终审查还须检查：所有任务确实使用当前提交的源码/产物；没有通过空夹具、预编译 Naive 包、工作区类型别名、跳过声明检查或允许失败来取得通过；消费者清理没有触及外部文件；文档中的命令、版本和实现状态一致。最新结果与问题记录见 progress.md。
