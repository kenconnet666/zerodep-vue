# Naive UI 生产源码对照

这是编译器的兼容性测试夹具，不是我们发布的组件库，也不是 core 的运行依赖。它用于确认普通 Vue TSX 经过本项目编译器后，真实第三方组件仍能编译、运行，并与增强作者 API 混用。

跟踪的文件仅包含来源、生产清单、构建脚本和测试依赖声明。`.cache/upstream/naive-ui` 是可重新取得的源码缓存；`.generated` 是可重新构建或从 CI 下载的产物。浏览器夹具需要其中的 fork 库、声明和对应报告，因此清理时应按同一批产物处理，不能只删报告或声明而留下失配的库。

源码固定在 [8b249214](https://github.com/tusen-ai/naive-ui/tree/8b249214f17328a47eeb57dd5c7b80a47c94d116)，包版本 2.45.3。源码保存在被忽略的 `.cache/upstream/naive-ui`；fixture 的 package.json 仅安装其运行依赖，不安装 naive-ui 的 npm 预编译包，也不执行上游安装或清理脚本。

`source.json` 固定来源，`production-tsx.json` 记录生产 TSX 路径与 LF 归一化后的 SHA-256。清单排除上游 tests、**tests**、demos、spec/test 文件和测试环境；生产源文件不因没有被演示页引用而排除。`inventory.mjs` 每次核对实际来源与完整文件清单，变更基线必须显式重新生成并审阅。

远程三组任务使用相同源码和唯一工作区锁文件：

- classic：复现上游 vite.build.mts 的 Oxc classic `h` / `Fragment` 发射设置，保留 VDOM 路径。
- official：全部生产 TSX 进入固定的官方 JSX v3.0.0。
- fork：同样输入与选项进入本项目 compiler 的真实源码。

每组先逐文件发射所有生产 TypeScript/TSX，记录命中并检查 JSX 已转换，再以 src/index 的产物构建完整 ESM 库。输出只 externalize Vue，三组都使用工作区的 Vue 运行时。构建后实际导入库导出并用 NConfigProvider、NButton、NInput 运行 SSR；报告写到 test-results，库及报告上传为 CI artifact。

发射与构建产物位于本 fixture 的 `.generated/<mode>`，由 Git 忽略，避免覆盖原始源码或版本化快照。后续混用和浏览器用例必须消费这里的 fork 产物；当前源码编译与 SSR 冒烟不代表混用、交互、hydrate 或整个最终验收已经完成。

完整任务 `pnpm test:naive <classic|official|fork>` 仅交给远程 CI。本地可用 `pnpm naive:inventory` 做短的源码清单核对；`--write` 只用于有意识更新基线清单。
