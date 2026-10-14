# 变更记录

## 当前源码修订

以下调整发生在下方固定验收基线之后，当前状态与对应 CI 见 [实施记录](docs/progress.md)：

- 合并为 compiler/core 两包，各自仅提供根入口，源码按编译、编辑器、CSS、TSX 和开发工具职责组织。
- 样式按相同选择器、条件和属性逐项覆盖；后面的声明可继续添加其他属性。
- 作者使用不可变属性链与 cx 组合；应用主题模块解构导出 createCssContext 返回的 useCss、provideTheme、keywords，core 无默认作者或关键字导出。
- 属性方法以 PropertyInput 收拢校验类型；生成文档补齐规范初始值、简写子属性初始值和继承说明，发布声明中的主题说明不再依赖私有字段。
- 补齐 JSX v-model 及修饰符、v-show、v-html、v-text、v-slots、v-models、命名模型的说明与编辑支持。
- 可选动态样式为 undefined 时保留前项，null 仍清除；兄弟元素动态样式和动画使用可生效的字面值。
- 删除 firstThatWorks、defineVars、createCss 及旧技术子入口；语言服务归入 compiler，保留字面量中文说明与跳转。

## 1.0.0 — 2026-10-14

本版本面向 Vue VDOM 与纯 TSX。源码 de5973b42c181839a9735576a9ef901ab34cca6c 与对应 tarball 已通过完整 CI 的 29 个任务，原始报告、包哈希及验证范围见 [验收矩阵](docs/acceptance.md)。

- 基于 Vue JSX v3.0.0 的真实源码 fork，保留普通 Vue TSX、指令、slots、emits 和既有 props 行为，并提供 Babel 与 Vite 入口。
- `_component` 提供初始化/渲染边界、参数默认值、实时 props 别名和 rest、普通回调与 JSX 内容。状态直接使用 Vue Ref、computed、toRef 等 API；`For` 使用 Vue keyed Fragment。
- 运行时 CSS 支持按状态分组的声明、有序组合、完整属性组覆盖、清除标记、系统关键字、继承主题和泛型来源；`bx` 由编译器捕获，并通过 class 隐式接入内联变量。
- 提供变量组、主题覆盖、关键帧、降级值和全局规则。资源按元素、组件作用域、应用与请求管理，覆盖离场动画、KeepAlive、ShadowRoot 复用及 SSR/hydrate。
- 开发模式支持兼容的样式/render 热替换保留实例状态、源码映射和 Vue DevTools 被动样式检查。生产与 SSR 转换不引入这些开发记录。
- 验收固定 Naive UI 2.45.3 的 301 个生产 TSX 源码，进行 classic/official/fork 对照及真实混用。浏览器按开发/生产与 Chromium/Firefox 分组，发布声明和 tarball 在 Linux/Windows 的仓库外消费者中验证。

固定验收工具链：TypeScript 6.0.3、Vue 3.5.43、Babel 8.0.6、Vite 8.3.1、Node 24.18.0、pnpm 11.22.0。兼容性声明以实际验证的组合为准。

源码与包保留 private 标记，交付以 CI 生成的 tarball 为单位；工作流不会执行 npm publish。安装和文件名见 docs/packages.md，准确提交与结果见 docs/progress.md。
