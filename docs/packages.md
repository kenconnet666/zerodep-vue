# 打包与独立安装

三个包分别承担编译、TSX 作者接口和运行时 CSS。构建后的默认入口均指向 dist；compiler 的 Babel/Vite 入口及 CSS/TSX 入口可在 Node 24 通过 ESM import 或 CommonJS require 加载。

compiler 只有根 Babel 入口和 /vite 入口，不提供 /runtime、/hmr、/devtools 转导。应用运行时引用 TSX/CSS 包；普通 JSX 工程可只使用 compiler 与 Vue。启用增强能力时，应用安装相应运行时包，开发预优化也从实际安装位置解析依赖。

包包含 JS、声明、source map、declaration map 及对应 src，源码用于导航和排查。正常消费者不设置 `zerodep-vue-source` 条件：验收明确检查运行入口和类型解析均使用 dist，避免工作区源文件掩盖发射缺口。

远程构建任务先执行 `pnpm build`，随后执行 `pnpm packages:pack`。打包前检查每个源文件与 JS map 的内嵌源码一致，防止将陈旧 dist 误标为当前版本；再检查全部导出目标、README、项目和第三方许可是否进入 tarball。`test-results/packages/pack.json` 保存提交与每个包的文件名、字节数、内容清单数量和 SHA-256。

没有对应源码的旧 JS、声明及映射也会被拒绝，避免源码删除后遗留的 dist 文件进入 tarball。独立消费者同时检查 Babel 输出、Vite 客户端与 SSR 产物：外部导入和实际打入 bundle 的模块均不得依赖 compiler、Babel、TypeScript 等构建模块，生产产物不得带入开发检查与 HMR 实现。检查依赖语法和模块清单，不把注释或普通字符串中的包名当成运行时导入。

当前通过 CI artifact 提供 tarball，工作流不执行 npm publish。安装时从同一次构建取得三个包；包间依赖需指向这些本地文件。例如当前 1.0.0 包可在消费者的 pnpm-workspace.yaml 中设置：

```yaml
overrides:
  '@zerodep-vue/css': file:./artifacts/zerodep-vue-css-1.0.0.tgz
  '@zerodep-vue/tsx': file:./artifacts/zerodep-vue-tsx-1.0.0.tgz
```

```sh
pnpm add ./artifacts/zerodep-vue-css-1.0.0.tgz ./artifacts/zerodep-vue-tsx-1.0.0.tgz vue@3.5.43
pnpm add -D ./artifacts/zerodep-vue-compiler-1.0.0.tgz @babel/core@8.0.6 vite@8.3.1 typescript@6.0.3
```

版本变化后以 pack.json 的真实文件名为准。现有 Vue 项目将原 JSX 插件换成 `@zerodep-vue/compiler/vite`，TypeScript 保留 JSX 给本插件；自己的 TSX 页面可按文件设置 `@jsxImportSource @zerodep-vue/tsx`。原生 Vue 响应式、路由接入和应用实例继续由项目管理。

`pnpm test:packages` 在系统临时目录中建立真正的消费者，使用独立 pnpm 配置及本地 tarball 覆盖。子进程的 cwd、模块解析和语言服务均来自该安装；不链接工作区，不启用源码条件。它验证 Babel/Vite、ESM/CJS、单个 Vue 实例、实际 SSR 与 CSS 资源，以及声明模式中的泛型、负向类型、中文 hover、补全详情和定义跳转。相关模板位于 fixtures/package-consumer。

SSR 收集按 app／请求 context 的弱键共享，支持 runtime 被打入不同 bundle 后由外部 getCssHost 读取。不同请求仍各自拥有收集结果，冻结的 context 也无需被修改。构建 SSR 库时仍推荐 externalize Vue，保持应用使用同一响应式实例。

成功的消费者逐文件清理自身临时目录，目录链接只移除链接。清理不触及 pnpm store；失败目录和报告留作复现。Linux/Windows 的完整消费测试由 CI 执行，日常本地只运行变更相关短验证。

消费者创建前先解析临时父目录的真实路径，避免 Windows 短路径/目录链接使安装路径和 ESM/CJS 模块身份不一致。声明语言服务使用当前安装的 TypeScript SDK，并提供 realpath 等完整文件系统能力，使 pnpm 的隔离包布局能正确解析传递声明；这不添加工作区 alias，也不跳过依赖类型检查。
