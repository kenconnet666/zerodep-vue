# 上游与当前边界

官方编译基线为 [vuejs/babel-plugin-jsx v3.0.0](https://github.com/vuejs/babel-plugin-jsx/tree/11b8af5db89c189008d14418c1bca482281e1692)，提交为 11b8af5db89c189008d14418c1bca482281e1692。

compiler 根入口已使用 `packages/compiler/src/upstream` 内的真实 fork 源码，不再转发官方 npm 插件。`packages/compiler/upstream.json` 记录来源提交、每个原始文件的 SHA-256 和本地对应路径；MIT 许可随 compiler 包保留。官方 npm 插件仍作为开发依赖，用于相同输入与选项的差分对照。

JSX 核心保留 TypeScript 6.0.3 严格检查适配，并增加一个可选的 CSS VNode 工厂 hook。未启用 CSS 增强的文件继续使用原工厂和 patch flags；增强文件对可能携带 class 元数据的节点使用助手，普通字面量仍用 Vue 工厂。CSS 可增加/撤去属性，因此增强文件的优化 flags 保留 FULL_PROPS，覆盖跨 JSX 分支复用时的隐式 style 删除。

增强文件中，单个调用表达式作为组件 children 时，上游对象 slot 探测会先在父 render 求值。结果可能是节点数组，因此不能标记成已规范化的编译 slot，也不能假设其快照永久稳定。fork 对这一分支交给 Vue 的普通 slot 规范化，并设置动态 slot 更新标记；保证优化模式下列表重排、离场及无动态 props 的消费者仍更新。未增强文件的生成结果继续与固定上游对照。

`@zerodep-vue/compiler` 的 `vitePlugin` 提供 Vite 8 接入。HMR 与 SSR 模块登记参考官方 vite-plugin-vue 的 a03675e92eb55c02a6a393e311d610ddb3603744 快照；文件筛选、JSX 转换、TypeScript 擦除、source map、导入别名与默认导出由本项目适配，组件发现按导入身份判断。普通 Vue 组件使用 Vue HMR reload，不能将其表述为增强 TSX 已实现保留状态的样式更新。

`@vue/babel-plugin-resolve-type@3.0.0` 与 `@vue/babel-helper-vue-transform-on@3.0.0` 保持精确依赖，直接复用，不复制一套无必要的辅助实现。更新这些版本时必须与 JSX 基线一同验收。

DevTools 8.2.1 的声明间接引用 vue-router 类型。开发依赖 vue-router 4.6.4 的实验分组记录显式允许 name/path/hash 为 undefined，但其基类没有对应的值域，导致 exactOptionalPropertyTypes 下 TS2430。patches/vue-router@4.6.4.patch 只为这三个基类可选字段补充 undefined，保留严格检查且不改运行代码；上游修复后应移除此补丁。该路由依赖仅用于本库开发期类型检查。

上游 JSX 五个测试文件、全部快照及 resolve-type 的测试已复制到 compiler 的 test/upstream 与 test/upstream-resolve-type。只调整被测插件的导入位置；断言与快照保持原样。`vitest.upstream.config.ts` 将同一套测试分别交给官方版和 fork 版，运行时 TSX 使用对应插件实际编译。完整回归在远程按编译器和两份 shard 并行执行，本地只选必要短例。

自有 _component 转换位于 compiler/src/transforms/component，在上游 Program.enter 之前处理明确导入的宏。props 元数据复用 Vue compiler-sfc 的类型解析与 parser，实例默认值和 rest/children 位于 core/src/tsx/runtime.ts。For 直接使用 Vue Fragment。compiler/src/transforms/css.ts 捕获 bx 并接入 JSX/cloneVNode；各转换共用 bindings.ts 的导入身份识别，CSS 声明和规则在 core/src/css 内运行时处理。完整实现与证据见 progress.md。

项目 LSP 桥接参考了相邻 zerodep-css 的已验证实现，保留 TypeScript 分支，移除 Vue 模板和 Svelte 服务。对应 MIT 许可保存在 scripts/language-services/LICENSE。Vue JSX、Vite 参考实现及 CSS 类型/说明的许可证保存在对应发布包中，根目录不再重复保存副本。语言服务启动配置和依赖解析只引用当前仓库。
