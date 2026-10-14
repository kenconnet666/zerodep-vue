# UI 子项目基础与依赖决策

2026-10-14，Asia/Singapore。用户已授权在同仓库创建 packages/ui、安装依赖并建立基础配置；具体 Button 等组件仍未进入本轮范围。

## 已确认的边界

- 面向业务后台与复杂表单；日期、时间和范围选择保留时区扩展。
- 组件结构、交互与公开 API 自行实现，不使用无样式组件库或 headless 表单/表格底座。
- 校验直接使用 Zod 4，取代此前讨论的 Standard Schema 方案。不允许 Valibot 等替代实现或兼容层。
- 第三方依赖不由 UI 重新导出；应用显式安装、从原包导入。运行时采用 peerDependencies，工作区用 devDependencies + catalog 安装同一精确版本。
- 图标绑定 Lucide 原始资源包 @lucide/icons，图标组件由我们实现。
- model 使用 Decimal、CalendarDate/Time 等强类型值；控件内部保存未完成的文本，提交时显式转换。

## 当前基础

包名 @zerodep-vue/ui，private，版本 0.1.0，只开放根入口。当前入口没有产品 API，也没有第三方重导出；目录说明不能被当作组件实现。

| 能力                    | 固定版本 | 处理方式                                          |
| ----------------------- | -------- | ------------------------------------------------- |
| @floating-ui/dom        | 1.8.0    | 几何定位 peer，后续在 overlay 内接入 Vue 生命周期 |
| @internationalized/date | 3.12.4   | 日期/时间数据 peer                                |
| @lucide/icons           | 1.56.0   | 原始节点数据 peer，不安装现成 Vue 图标组件        |
| decimal.js              | 10.6.0   | 十进制 peer，独立配置与文本边界由自有代码管理     |
| tabbable                | 6.5.0    | DOM 焦点查询 peer                                 |
| zod                     | 4.6.7    | 原生校验 peer，与根语言服务共享 catalog 版本      |
| @axe-core/playwright    | 4.13.0   | 仅开发依赖，待真实 UI 浏览器用例接入              |

Vue、core 和 compiler 沿用当前工作区版本。Zod 从 languageServices 专属 catalog 移到默认 catalog，避免产品与工具各维护一份版本。Node 24、pnpm 11.22.0、TypeScript 6.0.3 和唯一锁文件保持不变。

Lucide 选择已满足安装器发布时间策略的 1.56.0；不为刚发布的 1.57.0 添加 minimumReleaseAgeExclude 例外。

构建复用现有 TypeScript 与 Babel/自有 TSX 编译器：tsc 发射声明，Babel 逐模块发射 JS，保留源映射与外部依赖。没有引入额外打包器、全局自动注册、图标全量入口或新的 JSX 样式协议。CI 打包和独立消费者扩展到第三个包，显式安装 peer 并检查第三方没有从 UI 导出。

## 下一阶段

1. 用私有 fixtures 验证 Floating UI 的懒启用、位置更新、停用和卸载，并明确弹层顺序/焦点所有权。
2. 直接围绕 Zod 4 验证字段注册、异步结果失效、错误与 reset；使用真实 Decimal/日期类型，不新造通用 schema/数据适配协议。
3. 确定小而完整的语义主题和区域配置，在已有控件夹具验证继承、来源替换与局部覆盖。
4. 实现自有 Icon 前验证 Lucide 按需导入、SVG 属性及可访问名称；只有实际实现后才从 UI 根入口导出。
5. 完成这些边界后再进入首个正式组件。浏览器与无障碍覆盖随真实组件加入，不能以依赖安装成功或空入口通过代替产品验收。

日常本地只做相关文件 LSP 和少量短测；完整类型、两种 TSX 模式、构建、tarball 和双平台独立安装由 CI 完成。准确提交与结果见 [实施记录](progress.md)。
