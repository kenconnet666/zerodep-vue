# UI 子项目约定

- 组件 DOM、交互和公开 API 自行实现，不引入无样式组件库或 headless 表单/表格底座。
- 作者统一使用 core 根入口、Vue API 和现有 TSX 编译器，样式沿用 class、useCss 和 cx；UI 业务不进入 core/compiler。
- 校验直接使用 Zod 4，不接入 Standard Schema、Valibot 或多校验库适配，也不另建校验 DSL。
- 第三方依赖不从 UI 重新导出。运行时依赖作为显式 peer，开发版本由根 catalog 固定；应用自行安装并从原包导入。
- 图标使用 @lucide/icons 的原始数据，自有 Icon 负责渲染；不安装现成的 Lucide Vue 组件，不遍历/注册全量图标。
- 业务值使用 Decimal、CalendarDate/Time 等明确类型；输入草稿与业务值分离，提交时显式转换。不擅自修改 Decimal 全局配置。
- 当前只建立工程基础。Button、Input、Icon 等具体组件在后续实现，临时交互只放 test 或 fixtures；未实现能力不导出占位 API。
- 验证继承根项目策略：本地文件诊断和少量短测；完整类型、构建、两模式、安装消费和浏览器交由 CI。
