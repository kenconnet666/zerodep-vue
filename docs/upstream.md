# 上游与当前边界

官方编译基线为 [vuejs/babel-plugin-jsx v3.0.0](https://github.com/vuejs/babel-plugin-jsx/tree/11b8af5db89c189008d14418c1bca482281e1692)，提交为 11b8af5db89c189008d14418c1bca482281e1692。

compiler 根入口已使用 `packages/compiler/src/upstream` 内的真实 fork 源码，不再转发官方 npm 插件。`packages/compiler/upstream.json` 记录来源提交、每个原始文件的 SHA-256 和本地对应路径；MIT 许可随 compiler 包保留。官方 npm 插件仍作为开发依赖，用于相同输入与选项的差分对照。

当前 JSX 核心相对上游的变化仅为 TypeScript 6.0.3 严格检查适配：在已有长度/正则匹配条件保证的位置补充非空断言，将实际只产生表达式的 props AST 类型收窄为 Expression。没有改变普通 JSX 的转换流程或默认选项。自有组件和 CSS 增强尚未接入。

`@zerodep-vue/compiler/vite` 提供 Vite 8 接入。HMR 与 SSR 模块登记参考官方 vite-plugin-vue 的 a03675e92eb55c02a6a393e311d610ddb3603744 快照；文件筛选、JSX 转换、TypeScript 擦除、source map、导入别名与默认导出由本项目适配，组件发现按导入身份判断。普通 Vue 组件使用 Vue HMR reload，不能将其表述为增强 TSX 已实现保留状态的样式更新。

`@vue/babel-plugin-resolve-type@3.0.0` 与 `@vue/babel-helper-vue-transform-on@3.0.0` 保持精确依赖，直接复用，不复制一套无必要的辅助实现。更新这些版本时必须与 JSX 基线一同验收。

上游 JSX 五个测试文件、全部快照及 resolve-type 的测试已复制到 compiler 的 test/upstream 与 test/upstream-resolve-type。只调整被测插件的导入位置；断言与快照保持原样。`vitest.upstream.config.ts` 将同一套测试分别交给官方版和 fork 版，运行时 TSX 使用对应插件实际编译。完整回归在远程按编译器和两份 shard 并行执行，本地只选必要短例。

自有 _component 转换位于 compiler/src/component.ts，在上游 Program.enter 之前处理明确导入的宏；普通文件继续原有 visitor。props 元数据复用 Vue compiler-sfc 的类型解析与 parser，实例默认值和 rest/children 位于 tsx/src/runtime.ts。For 直接使用 Vue Fragment。CSS 包仍为空模块；完整实现与证据见 progress.md。

项目 LSP 桥接参考了相邻 zerodep-css 的已验证实现，保留 TypeScript 分支，移除 Vue 模板和 Svelte 服务。对应 MIT 许可保存在 licenses/zerodep-css.MIT.txt。语言服务启动配置和依赖解析只引用当前仓库。
