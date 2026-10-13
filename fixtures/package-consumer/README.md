# 发布包消费验收

此夹具不参与工作区依赖链接。`packages:pack` 在构建完成后检查 JS source map 与当前 src 内容一致，再打包三个包，检查全部条件导出目标、声明、源码映射目标、README 和许可文件。报告记录提交、包清单和 tarball SHA-256。

`test:packages` 在系统临时目录创建有独立所有权标记的消费者，复制 tarball 并核对哈希，再通过 pnpm 的 file 覆盖安装包间依赖。消费者没有工作区 path alias 或源码条件，也不通过 link 指回 checkout；CLI 子进程从这个目录执行，检查模块真实路径位于独立安装内。

验证包含：

- Node 24 的 Babel/Vite、CSS、TSX ESM/CommonJS 入口。
- 每个包解析到同一个 Vue 实例。
- Babel 直接转换与 Vite 客户端/SSR 构建，以及默认值、Ref、For、内容、异步组件和 CSS 资源消费。
- SSR bundle 内外使用不同 CSS 模块实例时，外部收集入口仍取得完整请求样式。
- TypeScript 6.0.3 从 dist 声明检查普通与泛型 TSX、可写/只读输入和负向用例。
- 发布声明消费中的中文 hover、补全详情、定义跳转和主题映射。定义可沿 declaration map 跳到包内源码，但类型检查本身必须使用 dist 声明。

Linux/Windows 使用独立 CI job；完整打包、安装、类型和构建留在远程运行。成功后逐文件清理本次临时目录，不跟随符号链接，也不删除 pnpm store。失败时保留自己的目录并记录路径供复现；报告和生成的消费者锁文件上传到对应提交的 artifact。

工作流只创建 tarball 并验证安装，不调用 npm publish。仓库与包的 private 标记保持，包内容及安装能力可以先独立验收。
