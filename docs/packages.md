# 打包与独立安装

两个工具包分别承担构建和运行：compiler 根入口导出 babelPlugin、vitePlugin、languageServicePlugin；core 根入口统一导出 CSS、主题、TSX 作者 API 和相关类型。构建后的默认入口均指向 dist，在 Node 24 通过 ESM import 或 CommonJS require 加载。

两个包的 exports 均只有根入口。Babel 与 Vite 插件在同一个 index 中命名导出，因此编译包要求宿主安装 Babel 和 Vite。core 的作者 API 和编译器助手都从根入口导出，助手标记为 @internal。开发检查按需安装，根入口导入本身不安装检查器；sideEffects: false 允许打包器移除未引用实现，生产模块边界另有实际 bundle 检查。

编辑器扩展属于 compiler/src/editor。自建语言服务从 compiler 根入口取得 languageServicePlugin；TypeScript 的 plugins 加载器要求 CJS 工厂，配置为 `{ "name": "@zerodep-vue/compiler/src/editor/plugin.cjs" }`。这是 tsserver 的插件解析路径，不是供应用 import 的额外 exports；工厂与根入口共用同一实现，core 不携带语言服务。

包包含 JS、声明、source map、declaration map 及对应 src，源码用于导航和排查。正常消费者不设置 `zerodep-vue-source` 条件：验收明确检查运行入口和类型解析均使用 dist，避免工作区源文件掩盖发射缺口。

远程构建任务先执行 `pnpm build`，随后执行 `pnpm packages:pack`。打包前检查每个源文件与 JS map 的内嵌源码一致，防止将陈旧 dist 误标为当前版本；再检查全部导出目标、README、项目和第三方许可是否进入 tarball。`test-results/packages/pack.json` 保存提交与每个包的文件名、字节数、内容清单数量和 SHA-256。

没有对应源码的旧 JS、声明及映射也会被拒绝，避免源码删除后遗留的 dist 文件进入 tarball。独立消费者同时检查 Babel 输出、Vite 客户端与 SSR 产物：外部导入和实际打入 bundle 的模块均不得依赖 compiler、Babel、TypeScript 等构建模块，生产产物不得带入开发检查与 HMR 实现。检查依赖语法和模块清单，不把注释或普通字符串中的包名当成运行时导入。

当前通过 CI artifact 提供 tarball，工作流不执行 npm publish。安装时从同一次构建取得两个包。core 与 compiler 没有分发时的相互依赖，无需为旧的 CSS/TSX 包配置 workspace 或 tarball 覆盖。

```sh
pnpm add ./artifacts/zerodep-vue-core-1.0.0.tgz vue@3.5.43
pnpm add -D ./artifacts/zerodep-vue-compiler-1.0.0.tgz @babel/core@8.0.6 vite@8.3.1 typescript@6.0.3
```

版本变化后以 pack.json 的真实文件名为准。现有 Vue 项目从 `@zerodep-vue/compiler` 导入 vitePlugin 替换原 JSX 插件。TypeScript 使用 `jsx: 'preserve'` 并移除 jsxImportSource，导入 core 即载入增强 JSX 声明；原生 Vue 类型可按文件用 `/** @jsxImportSource vue */` 选择。原生 Vue 响应式、路由接入和应用实例继续由项目管理。

`pnpm test:packages` 在系统临时目录中建立真正的消费者，使用独立 pnpm 配置及本地 tarball 覆盖。子进程的 cwd、模块解析和语言服务均来自该安装；不链接工作区，不启用源码条件。它验证 Babel/Vite、ESM/CJS、单个 Vue 实例、实际 SSR 与 CSS 资源，以及声明模式中的泛型、负向类型、中文 hover、补全详情和定义跳转。相关模板位于 fixtures/package-consumer。

SSR 收集按 app／请求 context 的弱键共享，支持 runtime 被打入不同 bundle 后由外部 getCssHost 读取。不同请求仍各自拥有收集结果，冻结的 context 也无需被修改。构建 SSR 库时仍推荐 externalize Vue，保持应用使用同一响应式实例。

成功的消费者逐文件清理自身临时目录，目录链接只移除链接。清理不触及 pnpm store；失败目录和报告留作复现。Linux/Windows 的完整消费测试由 CI 执行，日常本地只运行变更相关短验证。

消费者创建前先解析临时父目录的真实路径，避免 Windows 短路径/目录链接使安装路径和 ESM/CJS 模块身份不一致。声明语言服务使用当前安装的 TypeScript SDK，并提供 realpath 等完整文件系统能力，使 pnpm 的隔离包布局能正确解析传递声明；这不添加工作区 alias，也不跳过依赖类型检查。
