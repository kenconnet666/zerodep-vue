# 上游与当前边界

官方编译基线为 [vuejs/babel-plugin-jsx v3.0.0](https://github.com/vuejs/babel-plugin-jsx/tree/11b8af5db89c189008d14418c1bca482281e1692)，提交为 11b8af5db89c189008d14418c1bca482281e1692。

当前 compiler 根入口只转发精确锁定的 @vue/babel-plugin-jsx@3.0.0，用于建立 Babel 8 + TypeScript 6.0.3 的普通 TSX 对照。它还不是完成自有增强的 fork，尚未提供自有 Vite 适配器。后续复制上游源码时保留上游 MIT 许可、源码对应关系和回归测试。

tsx 与 css 包目前为空模块，没有 _component、For、css 或 bx 的可用实现。其作者语义和最终 Naive UI 验收以根目录 BLUEPRINT.md 为准。

项目 LSP 桥接参考了相邻 zerodep-css 的已验证实现，保留 TypeScript 分支，移除 Vue 模板和 Svelte 服务。对应 MIT 许可保存在 licenses/zerodep-css.MIT.txt。语言服务启动配置和依赖解析只引用当前仓库。
