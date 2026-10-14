# 变更记录

## 1.0.0 交付候选

本版本面向 Vue VDOM 与纯 TSX。候选源码和 tarball 必须经过完整 CI 及 docs/acceptance.md 的逐项核对；版本号本身不代表验收已经通过。

- 基于 Vue JSX v3.0.0 的真实源码 fork，保留普通 Vue TSX、指令、slots、emits 和既有 props 行为，并提供 Babel 与 Vite 入口。
- `_component` 提供初始化/渲染边界、参数默认值、实时 props 别名和 rest、普通回调与 JSX 内容。状态直接使用 Vue Ref、computed、toRef 等 API；`For` 使用 Vue keyed Fragment。
- 运行时 CSS 支持按状态分组的声明、有序组合、完整属性组覆盖、清除标记、系统关键字、继承主题和泛型来源；`bx` 由编译器捕获，并通过 class 隐式接入内联变量。
- 提供变量组、主题覆盖、关键帧、降级值和全局规则。资源按元素、组件作用域、应用与请求管理，覆盖离场动画、KeepAlive、ShadowRoot 复用及 SSR/hydrate。
- 开发模式支持兼容的样式/render 热替换保留实例状态、源码映射和 Vue DevTools 被动样式检查。生产与 SSR 转换不引入这些开发记录。
- 验收固定 Naive UI 2.45.3 的 301 个生产 TSX 源码，进行 classic/official/fork 对照及真实混用。浏览器按开发/生产与 Chromium/Firefox 分组，发布声明和 tarball 在 Linux/Windows 的仓库外消费者中验证。

固定验收工具链：TypeScript 6.0.3、Vue 3.5.43、Babel 8.0.6、Vite 8.3.1、Node 24.18.0、pnpm 11.22.0。兼容性声明以实际验证的组合为准。

源码与包保留 private 标记，交付以 CI 生成的 tarball 为单位；工作流不会执行 npm publish。安装和文件名见 docs/packages.md，准确提交与结果见 docs/progress.md。
