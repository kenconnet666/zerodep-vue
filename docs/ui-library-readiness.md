# 组件库启动前检查与 API 取舍

检查日期：2026-10-14，Asia/Singapore。清理和初次检查基于 `1cb84e0ffb106a0bc44b3f24c54de5ef826f8792`；交付前已合并远程 `8f2feec601eb4f3ffe937025db2c0381cf6c1515`，下文 API 结论以合并后的实现为准。

结论：继续沿用现有 Vue VDOM、`_component`、Vue Ref 和不可变链式 CSS。当前没有证据要求重做工具库 API。用户随后已授权建立 packages/ui 基础工程，`fixtures/controls` 中的 Button、ToggleButton、TextInput 仍是验证夹具，不能直接等同于可发布组件。

用户已同意按推荐验证和完善，并明确要求先不做 Button 等正式组件。当前在 compiler/core 之外新增 ui 子项目，安装基础依赖并配置目录、类型、构建和测试；不实现产品组件，不扩大到模板编译或其他 renderer。最新确认：Zod 4 直接使用、依赖不重导出、Lucide 只用资源且图标自行实现，见 [UI 基础计划](ui-foundation.md)。

本轮验证采用同一主题上下文、Ref 编辑模型和显式操作回调：先覆盖主题来源对象/Ref 容器替换、嵌套区域与 SSR，再覆盖原生属性转发、公开方法、输入法组合及表单重置。浏览器和安装包验证继续由 CI 负责；IDE 与当前 MCP 的提示/导航分别核对，不用一个服务的结果代替另一个。

## 已完成的清理

清理前 Git 工作区无未提交改动。逐项验证绝对路径、Git 跟踪状态及忽略规则后，移除了 3,148 个普通文件、11 个废弃依赖链接和 1,019 个目录，文件大小合计 66,429,929 字节，约 63.4 MiB。删除链接时没有访问链接目标，目录仅在其内容删除后移除。

- 合包后遗留的 `packages/css`、`packages/tsx`：只有旧 dist、增量缓存和废弃包自己的依赖链接，没有现存源码或包声明。
- `packages/compiler/dist` 和 compiler、legacy-tsx 的旧 `tsconfig.tsbuildinfo`。
- `artifacts/1.0.0-de5973b` 的旧三包 tarball、dist 副本和下载的测试证据。
- `fixtures/naive-ui/.generated` 与配套 `test-results`：本地 Naive 报告属于旧编译器提交 `2fd1ab7`，整批清理以避免旧库、声明和报告混用。
- 空的 `.tmp`、`fixtures/browser/.generated` 以及清理后空的 `artifacts`。

保留当前依赖、共享 pnpm store、Git、IDE/MCP 本机设置、固定上游源码及测试快照。`.cache/upstream/naive-ui` 仍是当前 `source.json` 使用的源码缓存。源码树没有零字节文件。

仓库内开发继续通过 `zerodep-vue-source` 条件读取源码。独立消费者需要当前提交的 core/compiler 构建包；浏览器夹具需要同一提交的 Naive fork 库、声明及报告。需要这些验证时由对应 CI 任务生成，不能把已删旧产物放回冒充当前结果。本次未在本地重建这些完整产物。

历史提交和包哈希仍保留在 [验收记录](acceptance.md)。远程 artifact 在保留期内可重新下载；过期后需从对应提交重新构建或运行验证，不能再依赖已删除的本机交付目录。

## 已确认的阻碍与修复

基线提交的 [CI 运行](https://github.com/kenconnet666/zerodep-vue/actions/runs/38536952356) 共 28 个任务：25 个成功，Linux/Windows 安装包消费者和最终汇总失败。编译、类型、上游、Naive、四组浏览器、开发工具、构建与双平台 LSP 均成功；两个消费者也先通过了真实包运行验证，随后在主题字面量的中文 hover 断言失败。

原因是编辑器通过 `CssAuthor.theme` 读取 `KeywordView<T>`，而 TypeScript 发射声明时将 `private readonly theme: KeywordView<T>` 写成无类型的私有字段。源码检查正常，发布声明中的主题信息却丢失。

远程 `8f2feec` 已将编辑器改为读取公开 `Css<T>` 的主题参数。合并时采用这一修复，保留 `theme` 的 private 边界，不再让编辑功能依赖私有存储类型。本轮新增定点测试在内存发射四份相关 `.d.ts` 并通过语言服务读取，确认 `_brand` 的中文 hover、补全详情和唯一导航恢复；安装消费者的失败消息补充具体探针名和值。

后续 A 方案整理已移除运行时作者重复保存的 theme 字段，主题泛型保留在作者类型层；编辑器继续读取公开 Css<T>，声明发射与导航回归仍保留。当前实现的阅读顺序见 [CSS 源码说明](../packages/core/src/css/README.md)。

8f2feec 的 [完整 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38547597118) 和 c202fd3 的 [完整 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38548207618) 现已确认成功；后者 28 个任务全部通过，包括 Linux/Windows 安装包声明与本轮前新增的真实 .d.ts 回归。发布声明缺口已经关闭。

后续 fixture、完整 CSS 动态值和延迟创建/class 缓存已包含在 `6157316f14a5450e325d9a32ed191de5da758ed3`，其 [完整 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38567686037) 已通过。缓存边界复查发现的根赋值/delete、短路分支 TDZ 和类型引用误采样另行修复并补回归；该轮新改动仍须核对自己的提交 CI，不能沿用 6157316 的成功结论。

编辑器需分别看待：当前 MCP 的文件诊断正常，但现有长驻会话对 `font('inherit')` 返回空 hover/零定义；新启动并正常关闭的独立 stdio 服务对同一位置返回中文说明和一个真实定义。这与旧插件缓存一致，当前会话仍需重载后再验收。WebStorm 对 `keywords.font.inherit` 返回正确中文说明和 generated/literal-values.ts 声明；字符串形式没有返回可用结果。IDE 的多目标解析探针因未安装 Kotlin 脚本引擎不可用，不能据此声称 Ctrl+B 已验证。未修改 IDE 设置或安装插件。

## 当前 fixture 验证结果

- 已增加跨模块 ThemeRegion，仅验证现有 createCssContext/provideTheme 的使用方式；覆盖对象、Ref 容器和值的替换、嵌套区域、Teleport、useTheme 与作者共用区域来源及并发 SSR。
- TextInput 仍是私有夹具，增加原生属性/style、显式 focus 句柄和 change 通知；验证可写 computed、模型替换、父级 reset、输入法组合事件和卸载引用清理。类型夹具拒绝只读模型、竞争 value 输入、错误回调类型及不存在的公开方法。
- 发现并补齐运行测试缺少 TypeScript 项目的问题：新增测试目录 tsconfig，相关文件诊断从错误的 React JSX/模块解析恢复为零错误；完整运行测试类型检查已接入 CI。
- 7 项相关组件短测分批通过，6 个修改 TS/TSX 文件的当前会话 MCP 完整诊断为零错误。新增两项浏览器场景进入既有 development/production × Chromium/Firefox 矩阵，本地不重建旧 Naive 产物来替代新提交 CI。

验证入口和边界见 [fixtures/controls](../fixtures/controls/README.md)。这些用例证明基础协议的已覆盖部分，不把单元组合事件等同于所有系统 IME 实测，也不把 Teleport 主题测试等同于完整弹层焦点系统。

## 组件库开始前需要明确的设计

### 1. 组件库拥有基础主题和上下文

现状：夹具使用自己的 `ControlTheme`，只有品牌色和 hover 色；每次 `createCssContext()` 都创建独立注入键。应用另建主题上下文不会自动覆盖组件库上下文。区域样式使用 `useCss()` 和主题名字面量，业务映射通过 `useTheme()` 读取同一区域来源。core 不导出默认 hooks，主题模块从上下文解构导出 `useCss`、`provideTheme` 和 `useTheme`。

| 路线                                                                   | 收益与代价                                                   | 建议     |
| ---------------------------------------------------------------------- | ------------------------------------------------------------ | -------- |
| 组件库定义基础主题及唯一上下文，应用继承并经库的 Provider 提供实例/Ref | 库不依赖应用路径；默认主题、局部覆盖和 Teleport 共用现有协议 | 采用     |
| 每个应用通过工厂生成整套组件，显式注入主题作者                         | 可以完全定制类型，但组件身份、构建导出和类型推导更复杂       | 暂不引入 |

建议先定义小而完整的语义值集合：表面、正文、弱化文字、边框、主操作、危险、禁用、焦点，以及控件尺寸、圆角和间距。不要先为每个组件堆独立 token。

组件内部继续 `const s = useCss()`，这个函数来自组件库主题模块。应用 Provider 调用同一个库上下文导出的 `provideTheme`；SSR 请求值通过请求根提供，禁止修改共享模块 Ref。应用可以继承基础主题增加成员，但库内组件只依赖它所声明的基础语义。

区域颜色优先写 `s.backgroundColor('_brand')`。字面量简化已移除 `keywords` 对象视图；需要当前映射时使用 `useTheme()`，动态样式通过 `bx(theme.value.color._brand)` 显式读取。提供者当前组件使用 provideTheme 返回的作者和自己提供的来源，子树 hooks 读取最近祖先的来源。

### 2. 明确表单组件的主要消费方式

| 路线                                               | 使用与维护边界                                                                        | 建议                              |
| -------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------- |
| 面向本工程 TSX，以 `model: Ref<T>` 传递可编辑状态  | 延续现有约定，父级重置、替换 Ref、可写 computed 可直接使用；模板不会自动保留 Ref 容器 | 当前首选                          |
| 面向通用 Vue，以 `modelValue` 与更新回调为公开接口 | 可以接入标准 `v-model`；需明确受控/非受控、默认值和更新回调，内部适配到一份状态       | 仅在通用 Vue 消费是明确目标时采用 |
| 同一个组件同时接收 Ref、值、默认值及多种更新事件   | 需要解决多个状态来源的优先级、模式切换及重复通知                                      | 不建议                            |

Vue 的标准 render/JSX 模型对应 `modelValue` 和 `onUpdate:modelValue`，见 [Vue 官方说明](https://vuejs.org/guide/extras/render-function#v-model)。现有工具没有修改模板自动解包规则，不能宣称 `Ref` props 已经等价支持普通模板 `v-model`。

在当前 TSX 方向下，建议统一编辑状态使用 `model`，操作通知用职责明确的回调，父级直接改 Ref 不再次触发用户操作通知。展示输入与编辑输入保持只读/可写区分。表单 reset 由表单所有者恢复模型；现有浏览器夹具也是在 `onReset` 中显式重置 Ref，尚不存在自动表单状态系统。

### 3. 保持作者 API，把产品责任放进组件库

| 能力           | 当前事实                                                                    | 组件库阶段需要完成的工作                                                                                       |
| -------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 样式与变体     | `cx`、不可变链、外部 class、伪类、bx 和主题已具备                           | 使用普通 `size`/`variant` 联合类型和样式表；先不用新 variants 宏。多部件组件按真实需要提供有类型的部件样式入口 |
| 原生属性与事件 | Button 已用原生属性类型、rest 和显式回调验证透传                            | 每个组件确定 attrs 落到哪个元素，避免包装根吞掉 input 属性或重复事件                                           |
| 内容           | 直接内容与带数据回调已有清楚边界                                            | 简单内容用 `VNodeChild`；选项/单元格用明确回调，不增加另一套隐式具名 slot 映射                                 |
| DOM 和公开方法 | `expose` 可用，但 `_component` 不自动从调用体推导公开句柄类型               | 组件导出明确的 Handle 类型，区分组件 ref 与内部元素 ref                                                        |
| 输入与表单     | fixture 已验证模型、原生 attrs、focus、change、readonly、输入法组合及 reset | 正式组件阶段明确 Field 与控件的 label/help/error 职责，避免重复状态来源和重复事件                              |
| 弹层           | Teleport 与区域主题已验证                                                   | Dialog/Select 之前实现并验证焦点进入/恢复、Escape、外点关闭、嵌套层级、滚动锁和销毁清理                        |
| 可访问性       | 原生按钮键盘、disabled、fieldset、focus-visible 已有浏览器测试              | 按组件验证键盘、语义及可访问名称；基础按钮通过不能代表组合框或对话框通过                                       |

Dialog 的焦点循环、关闭后焦点恢复等应按 [WAI-ARIA Dialog 模式](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)落实；Select/Autocomplete 的键盘导航、选中与展开状态应按 [Combobox 模式](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)落实。现有 Naive 兼容性测试检验的是编译和混用，不能代替自有组件的这些行为。

## 当前下一步：先完善工具和 fixtures

不再改名 useCss/provideTheme/cx，也不引入新的 variants 宏、全局类名反查或另一套状态系统。下一轮按以下顺序推进，各项完成后再决定是否需要新的基础 API。

| 顺序 | 工作                              | 完成条件                                                                                                                                                                                             |
| ---- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 扩展已有 class 缓存与生命周期夹具 | 在已有 KeepAlive/Transition/slot/SSR 用例中增加构造次数、失效更新和卸载断言；确认相关依赖更新、停用后恢复、缓存淘汰、回调参数替换和不同请求都正确，不以 DOM 颜色正确代替调用与资源边界检查。         |
| 2    | 扩展私有 ControlTheme 和变体用法  | 在 fixtures 中试验表面、文字、边框、主操作、危险、禁用、焦点及少量尺寸 token；使用普通联合类型、样式对象和 cx 验证 size/variant、外部覆盖、局部主题及来源替换。证明现有 API 足够后再迁移为 UI 主题。 |
| 3    | 关闭实际编辑与消费体验缺口        | 复用现有安装包消费者和作者示例；重载后分别验证当前 MCP 与 WebStorm 的 CSS 字面量补全、中文说明和真实导航。没有实际结果时继续保留未验收状态，不以独立 stdio 或 CI 代替当前 IDE。                      |

这些是尚待完成的扩展验证，不代表现有 KeepAlive、slot 或 SSR 完全没有覆盖。现有生命周期、样式资源、请求隔离与浏览器用例已通过上述基线 CI；下一轮针对新加入的 class 构造缓存补充组合场景。

## 后续正式组件阶段

1. 先完成上述工具与 fixture 清单，并核对相应提交的完整 CI 和重载后的 IDE/MCP 验收；当前仅建立 UI 基础工程。
2. `packages/ui` 已按用户授权建立，独立导出和验收；只从 core 根入口使用运行能力，compiler 作为构建工具。第三方显式安装且不重导出，具体配置见 UI 基础计划；UI 业务逻辑不进入 core。
3. 先完成一个正式 Button：语义主题、size/variant、loading/disabled、原生属性、外部样式、焦点、表单 type、中文声明说明和展示文档。沿用夹具用例验证新实现后，让夹具消费正式组件，避免维护两套 Button。审阅这个样板，再批量扩展。
4. TextInput 与 Field 验证模型、错误/帮助文本和表单生命周期；随后建立弹层基础并用 Dialog、Select 验证。基础稳定后再推进复杂表格、日期选择等组件。
5. 每阶段做本地文件诊断和相关短测，提交推送；完整类型、打包声明、两种作者模式、浏览器/SSR、资源稳定性由 CI 承担。UI 增加自己的安装消费和交互验证，不能仅继承工具库的通过结论。

当前已进入 UI 工程基础阶段，产品组件仍未创建。后续按实际授权逐项实现，不把目录职责说明视为已完成能力。
