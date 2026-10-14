# 组件库前置契约夹具

这里的 Button、ToggleButton、TextInput、ThemeRegion 都是私有验证夹具，不从 core 导出，不是正式 UI 组件库。当前按用户要求先验证基础契约，不建立 UI 包或确定产品组件的外观/API。

同一份夹具同时被作者类型检查、default/optimized 运行测试和真实浏览器使用。不要为测试另写一份行为不同的假组件。

| 场景               | 具体断言                                                                                                                                | 验证入口                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 主题来源与生命周期 | 同一模块的上下文、普通对象/Ref 容器/Ref 值替换、旧来源停止影响、嵌套覆盖、Teleport、useTheme 与作者共用区域来源、样式规则复用与卸载释放 | `packages/core/test/tsx/controls.test.tsx`，浏览器 controls 套件 |
| SSR 请求边界       | 并发请求使用各自颜色和收集器；HTML 具有实际动态样式，结束后仍可输出规则而不持有元素租约                                                 | 同上组件运行测试                                                 |
| 可编辑模型         | Ref 与可写 computed 写回，替换来源后不写旧模型，父级更新/reset 不产生用户操作通知                                                       | 组件运行测试、作者正反向类型夹具、浏览器 controls 套件           |
| 原生输入属性       | id/name/maxlength/required/readonly、属性撤去、style、原生输入事件和 label/help/error 关联                                              | 组件运行测试与真实浏览器                                         |
| 公开方法           | 组件 ref 使用显式 TextInputHandle，focus 指向真实元素，卸载后 ref 归空                                                                  | 组件运行测试、作者类型夹具与浏览器                               |
| 输入法组合协议     | compositionstart 期间不写入中间值，compositionend 写入完成值，change 才发提交回调                                                       | 组件事件测试；不等同于所有操作系统 IME 的人工验收                |

ThemeRegion 在 setup 中使用 `provideTheme(computed(() => unref(theme)))`。普通调用 `provideTheme(theme)` 捕获的是当次传入的对象或 Ref；只有 getter 才同时跟随 prop 中 Ref 容器的替换。该模式使用 Vue 自身响应式，不要求编译器改变普通函数传参语义。

TextInput 的模型是唯一值来源，原生 value 不再作为第二个输入。onCommit 是原生 change 的通知，父级重置由表单所有者修改模型。浏览器夹具中的错误提示、readonly 和 reset 都是验证场景，不代表已建立表单状态管理系统。

本地只对修改文件运行 LSP 或按用例选择少量短测试。整个运行测试目录有自己的 `packages/core/test/tsx/tsconfig.json`，完整 `pnpm check:authoring` 由 CI 的 default 作者任务执行一次；default/optimized 两个任务继续执行全部运行契约。浏览器完整矩阵、Naive、发布包和长时间验证同样由 CI 执行。
