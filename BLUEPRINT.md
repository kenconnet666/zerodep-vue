# zerodep-vue TSX 与运行时 CSS 工具库实施蓝图

更新日期：2026-10-14，Asia/Singapore。

本项目以官方 `@vue/babel-plugin-jsx@3.0.0` 为固定起点，建立小范围 fork。自有插件负责兼容已有 Vue TSX，并通过明确入口增加更方便的组件、状态传递和运行时 CSS 写法。编译目标只有 Vue VDOM：复用 Vue 组件、VNode、响应式与调度，不建设 Vapor、直接 DOM 编译后端或自有 renderer。

最终交付目标是成熟可用的工具库，具备稳定的作者接口、完整的约定能力、可靠的类型提示、可定位的诊断、运行与 SSR 一致性、资源清理和准确文档。分阶段实施用于组织工作，不能降低最终交付标准，也不能以演示可运行代替完整验收。

最终验收必须包括：正确编译锁定版本的 Naive UI 生产 TSX 源码，并让编译产物与我们的组件在同一个纯 TSX 应用中共同运行。只成功导入 Naive UI 的 npm 预编译包，或只通过几个自建示例，不算完成兼容性验收。

当前已建立真实 JSX v3.0.0 源码 fork、Vite 入口、组件作者转换、运行时 class/bx 接线与系统/继承主题。Naive UI 的 301 个生产 TSX 已纳入完整三组编译、构建与 SSR 对照；浏览器混用及最终生产验收仍需完成。下面的示例是完整实施契约，具体实现和提交证据见 docs/progress.md，不能将部分能力通过推论为全部完成。

## 1 已确定的方向与范围

### 1.1 交付范围

| 交付物             | 责任                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------ |
| 编译插件           | fork 官方 JSX 转换核心，保留普通 TSX 行为，增加明确启用的作者增强                    |
| Vite 接入入口      | 对接该编译插件，处理 TSX 文件筛选、HMR、source map、开发和生产构建                   |
| TSX 工具包         | `_component`、`For`、类型和少量 Vue 组件桥接                                         |
| 运行时 CSS 工具包  | 声明与组合、系统关键字、继承扩展的主题关键字、泛型作者入口、动画、动态变量和样式宿主 |
| 文档与私有验证工程 | 说明语义，验证旧项目替换、Naive UI 源码编译及 TSX 混用                               |

UI 产品库和 docs 站点不在本项目交付范围内。文中的 RefInput、Panel、Select 等自有组件是验证夹具，不代表同时立项一套完整组件库。

### 1.2 采用与排除

- 同一个编译插件处理普通 Vue TSX 和我们的增强 TSX。接入时替换对应 JSX 编译入口，不在同一文件上再执行另一套 JSX lowering。
- 普通 TSX 保留官方行为；新语义通过 `_component`、来自本库的宏绑定及 `class={css(...)}` 等明确的工具使用启用。
- 合理支持双向 TSX 嵌套、共享 Ref、普通 props、函数回调、Vue slots、公开方法和同一 Vue 应用内的 provide/inject。
- 共享响应式不代表自动统一 model、slot、事件、样式协议；在组件边界使用双方实际提供的接口。
- 我们的组件首先服务纯 TSX。模板编译、模板宏、模板 Ref 自动解包补偿和完整模板插槽适配不作为交付目标。
- 模板宿主若能直接挂载编译后的普通 Vue 组件、传普通值和回调、使用公开方法，可以保留这些基础能力；只做小量冒烟验证，不增加专用适配层。
- 不重写 Vue 响应式、路由、状态容器、DOM renderer、指令运行时和生命周期。
- 状态能力直接使用从 `vue` 导入的 `ref`、`reactive`、`computed`、`toRef`、`toRefs`、`watch` 等 API，不为了少量包装再发布一套同义状态辅助函数。
- 编译产物统一为 Vue VDOM。Naive UI 的其他构建路径不成为本项目的后端或验收路线。

### 1.3 作者接口基线

| 项目               | 决定                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| 状态               | 直接使用 Vue 的 `ref` / `reactive`；字段引用用 `toRef` / `toRefs`，持续派生及可写派生用 `computed` |
| 自有组件           | `_component`；初始化一次，直接返回的表达式在 render 中求值                                         |
| props 默认值       | 在组件参数解构中集中写 `prop = defaultValue`；默认值类型与实例隔离纳入验收                         |
| 无参数内容         | `footer={JSX}`、`header={JSX}`、普通 children                                                      |
| 需要组件数据的内容 | `renderItem={(item) => JSX}`；参数由正常函数作用域提供                                             |
| 自有事件           | 普通函数 props，直接调用                                                                           |
| 原有事件           | 保留原有 emits、listeners、`onUpdate:*` 编译规则                                                   |
| 列表               | `For`，不加下划线，也保留普通 `.map()`                                                             |
| DOM 引用           | Vue 的 `ref={elementRef}`，无需另造 `bind:this`                                                    |
| 表单               | 优先复用 JSX `v-model`；自有 Ref-prop 组件直接接收 Ref                                             |
| CSS                | 运行时 CSS 加辅助编译工具；返回 class，编译器隐式接入绑定对应的内联 style                          |
| 动态 CSS           | `bx(expression)`，作者无需写 `() => expression`                                                    |
| 命名               | 容易与现有 Vue 概念混淆的新框架 API 加 `_`；`For`、`css`、`bx` 保留原名                            |

旧蓝图中的“优先选择其他 JSX 后端，再决定是否 fork”已取消。全局 JSX 惰性化、全局改写 class 对象和另建 `bind:*` 指令不属于采用的设计；原因与替代方案见第 4、5、7 节。

### 1.4 能力取舍原则

已确认的 Vue VDOM、纯 TSX、Vue 原生状态、class 入口和运行时 CSS 是设计约束。尚未验证的实现细节不能自动变成“不支持”的结论；先看现有 Vue 机制、上游插件入口和一个针对性的语义用例，再决定如何接入。

- 已有机制能直接满足的能力优先复用，按其真实行为写示例和验收，不另造包装。例如 attrs、函数 ref、组件公开方法与 Vue 内置 VDOM 组件。
- 对同一能力，优先比较保留 Vue 默认行为与增加局部接线的成本，避免为降低编译器实现难度而让所有作者承担额外样板。
- 不足以作出结论时，把问题写成待验证的语义边界，给出证据需求；不要以一句笼统的限制替代分析。
- 新发现的系统性能力先与用户讨论，再决定是否进入正式计划；讨论候选不直接写成蓝图中的已确认功能。

## 2 固定上游与替换边界

### 2.1 编译核心

已核对本地 `../babel-plugin-jsx`：

| 项目              | 固定基线                                    |
| ----------------- | ------------------------------------------- |
| 上游仓库          | `vuejs/babel-plugin-jsx`                    |
| tag               | `v3.0.0`                                    |
| commit            | `11b8af5db89c189008d14418c1bca482281e1692`  |
| Babel peer        | `@babel/core: ^8.0.0`                       |
| 上游 Node engines | `^22.18.0 \|\| >=24.11.0`                   |
| 许可证            | MIT；复制或修改的源码保留相应许可和版权信息 |

阶段 0 按该提交建立来源清单，保留主要源码结构和测试对应关系。新增能力优先放在独立扩展模块，由少量明确的 AST 接入点调用。每个偏离上游的地方记录用途和覆盖测试，避免顺手重构整个插件。

可以复用上游的 props、directives、slots、VNode 与优化处理，以及类型提取中已使用的 Vue 编译器能力。`@vue/compiler-sfc` 的类型分析工具可作为构建期依赖；这不等于增加模板编译目标，也不把编译器依赖带进浏览器。

### 2.2 “替换插件”的准确含义

- Babel 项目：用我们的 Babel 入口替换 `@vue/babel-plugin-jsx`，保留原有选项和其他必要的转换。
- Vite 项目：用我们的 Vite 入口替换该工程原来的 JSX 接入入口；一个 TSX 模块只经过一次 JSX lowering。
- 宿主自己的 `.vue` 编译插件可以继续存在，处理它负责的文件。我们不接管模板转换。
- 从 Babel 7 工具链迁移到基于 v3.0.0 的 Babel 8，需要显式调整对应构建依赖。兼容已有 TSX 源码，不表示任意旧 Node、Babel 插件和构建配置均可原样运行。
- 不要求旧代码手写自有运行时导入，不要求把所有组件改成 `_component`，也不强制替换整个项目的 JSX 类型命名空间。CSS 接线所需的薄运行时助手由编译器管理，并随发布依赖正确解析。

截至本轮核对的 Vite JSX 插件源码快照，`@vitejs/plugin-vue-jsx` 的包版本字段是 `5.1.6`，其依赖仍包括 Babel 7 和 `@vue/babel-plugin-jsx ^2.0.1`。这是固定提交的证据，不是对 npm 最新版的声明。因此 Babel v3 fork 和 Vite 适配要分别验证；不能把我们的完整转换插件追加到已有 `babelPlugins` 数组后，就视为完成后端替换。

参考快照：`vitejs/vite-plugin-vue@a03675e92eb55c02a6a393e311d610ddb3603744`。

### 2.3 保留的上游选项

| 选项                | v3.0.0 行为与默认值                                        |
| ------------------- | ---------------------------------------------------------- |
| `transformOn`       | 默认 false                                                 |
| `optimize`          | 默认 false；开启时保留 PatchFlags 与 SlotFlags 语义        |
| `mergeProps`        | 默认 true；保留 class、style、listeners 与 spread 合并行为 |
| `isCustomElement`   | 保留作者提供的标签判断                                     |
| `enableObjectSlots` | 默认 true                                                  |
| `pragma`            | 保留自定义 VNode 工厂与上游 `@jsx` 注释行为                |
| `resolveType`       | 默认 false；保留 boolean 和 options 对象两种形态           |

新配置集中在自己的命名空间，例如 `zerodep`。不得为了支持 `_component`，强制为所有旧组件开启 `resolveType`、修改 `optimize` 默认值或替换全部 pragma。

自有增强首先保证标准 Vue VNode 工厂路径；某个自定义 pragma 无法表达增强时，应对该增强给出明确诊断，不能让普通旧 pragma 项目受到影响。

## 3 工作区与包边界

采用 pnpm workspace、一份锁文件和精确记录的工具链。基础分包与 fixture 目录已建立，下面列出完整实施结构，尚未实施的文档及夹具内容随阶段补充：

```text
packages/
  compiler/                 # Babel fork；/vite 接入入口
  tsx/                      # 作者 API、类型、Vue 桥接
  css/                      # 运行时样式描述、解析和宿主
fixtures/
  legacy-tsx/               # 普通 Vue TSX，含选项组合
  authoring/                # 我们的新写法
  mixed-tsx/                # 普通 TSX 与增强 TSX 双向嵌套
  naive-ui/                 # 锁定源码、构建适配与验收脚本
  ssr/                      # VDOM SSR、hydrate、样式收集
docs/
  authoring.md
  css.md
  compatibility.md
  upstream.md
BLUEPRINT.md
```

工作区包名为 `@zerodep-vue/compiler`、`@zerodep-vue/tsx` 和 `@zerodep-vue/css`，当前全部 private，不代表已发布或已取得 npm 名称。普通 TSX fixture 已有源码，其余 fixture 目录先保留位置；不为尚未实现的 API 提供假实现。

- `compiler` 只运行在构建环境，持有 Babel 和必要的类型分析依赖。
- `tsx` 使用 Vue 组件机制；按需要引用 `css` 的内部接线入口。
- `css` 内部区分纯描述/组合、Vue 接线、浏览器宿主和服务端宿主，不反向依赖 `tsx` 或 `compiler`。
- Vue 作为共享 peer dependency，发布构建 externalize。fixture 保证唯一且兼容的 Vue 运行时；不能打包另一份 Vue 后宣称 Ref 可以可靠共享。
- 不生成无关的自有组件运行时导入。class 来源可静态确认是普通值时保留上游路径；需要判断动态 class 来源时，可以由编译器引入薄 CSS 助手，对普通值走等价的快速旁路，不能要求作者额外手写接线。

本仓库按用户决定精确使用 TypeScript 6.0.3，并通过 catalog、锁文件和 override 统一版本。当前开发基线为 Node 24.18.0、pnpm 11.22.0、Vue 3.5.43、Babel 8.0.6，Vite 开发依赖固定 8.3.1；Vite 自有适配仍待实现。相邻 `zerodep-js` 的 TypeScript 7.1 dev 约束不继承到本仓库。

### 3.1 项目 LSP

`zerodep_vue_lsp` 通过本仓库 TypeScript 6.0.3 和 typescript-language-server 提供 TS/TSX 诊断、hover、definitions、references 与 completions。语言服务桥接不依赖相邻仓库，不加载 SFC 或 Svelte 服务。

运行 `pnpm lsp:setup` 从 `.codex/config.example.toml` 生成被忽略的本机配置；`pnpm lsp:verify` 验证错误→修复、依赖刷新、语义工具和工作区隔离。WebStorm 与工作区编辑器配置使用本地 TypeScript SDK。重启前的独立检查不能代替重启后本会话原生 MCP 调用的确认。

LSP 当前只承诺已有标准 TSX 的 TypeScript 能力。作者宏的声明、默认值/children 类型和 CSS 提示按对应阶段实施，不把基础语言服务配置当成这些新语法的完成证据。

2026-10-13 重启后，已在本项目会话直接调用五个 MCP 工具：普通 TSX 诊断返回 TypeScript 6.0.3、complete=true、errors=0，Ref 类型查看、定义跳转、引用和补全均得到实际结果。此记录证明基础 LSP 已加载，不代表尚未实现的 CSS API 已通过类型验收。

## 4 编译器如何增加能力而不改变旧 TSX

### 4.1 激活规则

1. `_component`、`css`、`bx` 等工具按导入来源和 binding 身份识别，支持导入别名；同名局部变量、遮蔽绑定和其他库的同名函数不转换。
2. `_component` 的组件参数和返回边界可以增强，普通 `defineComponent`、普通函数和其局部变量仍遵循上游行为。CSS 工具可以在普通 Vue TSX 中使用，不要求先改写组件声明。
3. `css(...)` 返回用于 `class` 的值，`css.create(...)` 的成员也是 class 值。运行时内部保留样式组合与绑定元数据，作者不需要另传样式描述 prop 或拆出 style。
4. 编译器在 JSX class、spread 与 VNode props 接线处识别本库产生的 class，先保留其元数据，再交给 Vue 归一化。普通字符串、class 数组和条件对象保持原来的行为；不能只因普通对象具有某些键就把它当 CSS。
5. 绑定信息随 class 的变量、数组组合和自有组件转发保留；在最终元素边界隐式解析并合并对应的内联 style。经过第三方组件边界时，由编译器先生成它能接收的常规 class/style。
6. `For` 是有类型的 Vue 工具组件，不靠全局识别名称 `For` 改写任意 JSX。

作者始终使用 `class={css(...)}`、`class={styles.root}` 或 `class={[styles.root, external]}`。`css` 和 `bx` 保留原名，不增加专用 JSX 样式属性，也不要求手写 props 展开适配。编译器的内部承载方式不成为组件使用者需要维护的 API。

直接导入 CSS/TSX 工具的文件自动启用 class 协议。普通 Vue 文件只从项目共享模块取得 class 值时，可在编译/Vite 配置中统一开启 `zerodep.css`；这只选择需要接线的文件，不改变作者 JSX。明确关闭的普通文件继续使用官方路径。增强文件需要保留 class/style 增删所需的完整 props 比较，不能让 optimize 模式漏掉隐式变量更新或分支切换清理。

### 4.2 旧 TSX 回归范围

必须继承上游对以下内容的处理：

- JSXElement、Fragment、文本与空白、表达式、spread、key、ref、普通元素、组件及自定义元素。
- class 字符串/数组/条件对象，style 对象/数组，以及原本的合并顺序。
- 默认插槽、具名插槽、对象插槽、函数插槽和 `v-slots`。
- `v-model` 的参数、修饰符、动态参数，`v-show`、`v-html`、`v-text`、自定义指令。
- 上游仍支持的旧 `v-models` 写法。弃用不构成此次替换时擅自删除支持的理由。
- emits、listener、事件合并、`onUpdate:*`、HMR 所需的组件导出形态。
- `optimize` 开关下的 patch/slot flags 与 hydration 事件标记。
- 所有已支持上游选项，以及项目实际使用的选项组合。

未使用新入口的文件，以未修改的 v3.0.0 作为差分基线。可以忽略无语义的生成标识符或位置信息差异，不能把求值顺序、helper、指令、flags 或事件调用差异过滤掉。输出文本不必逐字相同，运行语义必须相同。

### 4.3 实现顺序

先识别扩展绑定与作用域，再在上游 JSX 转换消费节点前完成必要的局部 lowering；其余节点继续走上游代码。样式接线使用 props/VNode 构造处的明确 AST hook，在 Vue 归一化 class 之前接管本库的 class 值并保留元数据；不能等它被压成普通字符串后再猜测绑定，也不对生成后的 JavaScript 做字符串补丁。

Babel 的 visitor 会按遍历过程交错执行，插件数组顺序不等于整文件先后完成两轮转换。阶段 0 必须验证宏降低与上游 JSX exit visitor 的时机，不把执行顺序留作隐含假设。

类型擦除不能先于宏所需的类型提取。属性、回调及模型表达式求值一次，source map 指向作者表达式；条件分支和列表回调内的绑定不得被提到作用域之外。

### 4.4 源码诊断与开发更新

编译增强必须同时降低书写和排错成本。转换错误指向原始 TSX 表达式，说明实际语义与可用写法；不能只暴露生成代码中的 helper 名称。对初始化快照、在渲染中使用的非响应式局部值等情况，只在有明确依据时提供可抑制的提示，不将合法的初始化计算判为错误，也不静默改写普通 JS。

开发态保留组件、样式声明及绑定的源码位置。复用 Vue DevTools 的组件树和 inspector 扩展，展示本库样式的组合来源、被覆盖或清除的声明、绑定最近一次实际消费值与所属实例。检查界面不能额外执行用户表达式来猜测依赖；记录随组件和样式宿主释放，生产产物不携带调试历史。第三方普通 CSS 的最终层叠继续由浏览器检查工具负责。

实施通过开发专用来源包装和解析观察接口取得快照：普通 class/bx 求值完成后记录结果，检查阶段只读取当前 VNode 树及活动全局租约。源码标记和节点结果使用弱关联，SSR 请求不进入客户端检查表。DevTools 原组件面板与自定义 CSS inspector 共享同一份被动快照；生产构建检查模块清单排除开发入口。具体用法与边界见 docs/devtools.md。

HMR 区分样式、渲染和初始化变更。能够独立更新的样式应保留表单值、展开状态和组件实例；渲染更新在闭包及实例状态兼容时复用实例，初始化逻辑变化采用明确的重建策略。复用 Vite/Vue 更新与清理机制，不重新执行任意 setup 来取得新渲染函数，也不保留已经失效的闭包。运行时 CSS 仍在运行时求值，不为实现热更新引入静态 CSS 提取要求。

实施采用运行时函数替换：独立 render/样式函数读取原实例环境，其余初始化 AST 构成兼容签名。原实例的变量读写、回调接收者和 setup 快照语义保持；签名改变则使用 Vue reload。样式模块保留稳定 class/变量/动画视图及全局规则所有者，dispose/prune 和作用域负责清理。开发专用入口不进入生产或 SSR 转换，完整边界见 docs/hmr.md。

开发体验验收使用真实有状态页面：填写表单并打开弹层，修改样式后内容和状态保持，错误修复后恢复更新，多次更新不积累无主规则、绑定或监听。不能仅以 dev server 成功启动代替 HMR 验收。

## 5 自有 TSX 作者契约

### 5.1 初始化一次，渲染表达式持续更新

```tsx
import { computed, ref } from 'vue';
import { _component } from '@zerodep-vue/tsx';

export const Counter = _component(() => {
  const count = ref(0);
  const doubled = computed(() => count.value * 2);

  return <button onClick={() => count.value++}>{doubled.value}</button>;
});
```

目标输出是真实的 Vue stateful component：setup 初始化执行一次，末尾返回的表达式进入 Vue render 函数。不能每次渲染重新创建 Ref，也不能只返回并永久复用初始化时创建的 VNode。

组件初始化与 render 的求值边界必须清楚。常规作者写法使用末尾返回表达式；复杂动态渲染控制流放进渲染时调用的普通函数：

```tsx
function renderBody() {
  if (loading.value) return <Spinner />;
  if (error.value) return <Alert>{error.value.message}</Alert>;
  return <Editor value={record} />;
}

return <Panel>{renderBody()}</Panel>;
```

对包含提前 JSX return 的常见 if/switch 结构，先验证能否用普通 AST 分析明确区分初始化与渲染区域，不能在分析之前整类排除。能够保持初始化次数、作用域及动态更新语义的结构应支持；确有歧义或副作用无法安全分离时，给出带位置和具体原因的诊断，并展示原生渲染函数的可用写法。嵌套渲染函数的正常 early return 按 JS 语义执行；这些路径都要有编译和更新测试。

初始化代码中的普通计算仍是快照：

```ts
const initial = count.value;
const live = computed(() => count.value);
```

宏只改变已声明的组件返回边界，不把所有普通 JS 读取变成 computed。

### 5.2 内容与 slots

```tsx
<Panel
  header={<strong>编辑资料</strong>}
  footer={<button onClick={save}>保存</button>}
>
  <Editor value={record} />
</Panel>

<Select
  items={users.value}
  renderItem={(user) => <span>{user.name}</span>}
/>
```

- 无参数 JSX 内容是普通内容 prop，类型基于 Vue `VNodeChild`，不发明另一套通用惰性节点类型。
- 需要子组件提供数据时，使用真实函数参数，例如 `renderItem={(user) => ...}`。函数 props 不按名称被自动调用。
- `_component` 的内容 children 提供对 Vue 默认 slot 的薄桥接，在渲染中读取；外部显式 children prop 和嵌套 children 同时出现时给出冲突诊断。
- `header`、`footer` 等具名内容是普通 props，不自动变成同名 Vue slot。对旧组件需要具名插槽时继续写 `v-slots`。
- 组件确有必要兼收具名 slot 时，可在实现中使用原生 setup context 的 `slots`；不在所有组件上增加同名 prop/slot 猜测规则。
- 默认 slot 里的 Ref 读取继续由 Vue 的 slot/render 追踪机制管理，不在 setup 中预先调用 slot。

普通 JSX 的创建时机必须明确：

```tsx
const snapshotFooter = <span>{count.value}</span>;
const renderFooter = () => <span>{count.value}</span>;

return <Panel footer={renderFooter()} />;
```

如果这段代码位于 setup 初始化区域，`snapshotFooter` 按普通 Vue JSX 创建一次，其中已读取的数字不会自动重算。直接在返回表达式中写 `footer={<span>{count.value}</span>}`，或在其中调用 `renderFooter()`，即可更新。这里删除旧蓝图对任意 JSX 变量的隐式惰性承诺，以保证旧 TSX 的求值行为不变。

### 5.3 Ref 传递与字段引用

```tsx
<Input value={name} disabled={saving.value} />
<Toggle checked={enabled}>启用</Toggle>
<Dialog open={opened}>{content}</Dialog>
```

自有可编辑模型明确接收可写 Ref，组件直接操作 `.value`；普通配置仍传普通值。不默认使用 `T | Ref<T>` 并猜测写回方式，不在组件边界自动解包 Ref。

业务函数拿到同一个 Ref 后可读写并创建 computed。普通值参数仍是普通值；把 `name.value` 传给函数，不会让该值参数获得写回能力。

Vue 已有的解包规则仍然存在，例如从组件公开实例的 `this` 或某些 reactive 对象属性读取 Ref，可能拿到的是值。共享 Ref 的接口要传真实容器，必要时用闭包保留原 Ref，或用 `toRef` 建立字段引用；编译器不全局撤销 Vue 的解包行为。

字段引用直接复用 Vue API。对于对象身份稳定、只修改字段的状态，用 `toRef` 创建单个字段引用，需要拆出多个字段时用 `toRefs`：

```tsx
const form = reactive({ name: '', age: 18 });
const name = toRef(form, 'name');
const { age } = toRefs(form);

<Input value={name} />;

// 两种写法修改同一份状态。
name.value = '新用户';
form.age = 20;
```

如果使用 `ref` 保存对象，并且会整体替换 `form.value`，用 Vue 可写 computed 表达当前字段的读写：

```tsx
const form = ref({ name: '', age: 18 });
const name = computed({
  get: () => form.value.name,
  set: (value: string) => {
    form.value.name = value;
  },
});

<Input value={name} />;

// computed 的读写访问当前对象，替换后继续生效。
form.value = { name: '新用户', age: 20 };
```

`toRef(form.value, 'name')` 关联的是调用时传入的对象，不能替代上面跟随根对象替换的写法。`toRef(() => form.value.name)` 可以跟随当前读取，但返回只读引用；需要编辑时使用带 get/set 的 computed。字段引用不会把只读 props 自动变成可写状态。

这些能力已经覆盖字段读写、多个字段解构和根对象替换。本项目不新增字段引用 API，也不在编译器中发明另一套状态管理语义。

可编辑位置不能接受只读 computed。需要同时核对 TypeScript 的可赋值性边界和 Vue 可识别只读对象的开发期诊断，不能仅凭接口名字 `Ref` 声称已经排除所有只读来源。

自有 JSX 的可写 Ref 输入复用 Vue computed 的类型标记，排除 getter-only computed，接受普通 Ref 和带 get/set 的 computed；声明为 `Readonly<Ref<T>>` 的展示输入仍允许只读来源。TypeScript 的结构可赋值性不能排除所有 `Readonly<Ref<T>>`，因此编译器识别直接 `.value` 赋值、更新、解构赋值和 v-model，在读取对应 prop 时通过 Vue isReadonly 诊断实际只读对象。间接业务函数或任意强制类型转换仍受 Vue 自身边界约束，不承诺静态证明所有读写路径。

### 5.4 props 默认值、参数、回调和属性透传

默认值是自有组件的基础能力。作者在 `_component` 参数解构中集中设置默认值，直接使用 TypeScript 的 `=` 写法；普通 Vue 组件已有的 `props.default` 及工厂函数写法继续原样支持。

```tsx
type Props = {
  value?: Ref<string>;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  placeholder?: string;
  onCommit?: (value: string) => void;
};

const Field = _component(
  ({
    value = ref(''),
    size = 'md',
    disabled = false,
    placeholder = '请输入',
    onCommit,
    ...rest
  }: Props) => {
    return (
      <input
        {...rest}
        data-size={size}
        disabled={disabled}
        placeholder={placeholder}
        v-model={value.value}
        onBlur={() => onCommit?.(value.value)}
      />
    );
  },
);

<Field />;
<Field size="lg" placeholder="用户名" value={name} />;
```

默认值契约：

| 场景                                     | 行为                                                                                   |
| ---------------------------------------- | -------------------------------------------------------------------------------------- |
| 属性未传或显式传 `undefined`             | 使用声明的默认值                                                                       |
| 显式传 `null`、`false`、`0` 或空字符串   | 保留调用方的值；不能用真值判断或 `??` 代替默认规则，是否允许 null 由类型决定           |
| 数组、对象字面量和 `ref(...)` 默认表达式 | 每个实例独立求值，实例内的 fallback 保持稳定，不提升为模块共享对象                     |
| 默认值引用作者定义的共享常量             | 保留该引用的正常 JS 语义，不擅自克隆                                                   |
| 函数作为默认 prop 值                     | 保留为回调，不误当默认值工厂执行                                                       |
| 父级更新属性                             | 参数别名读取最新输入；有值时使用输入，撤去或改为 undefined 后回到本实例默认值          |
| 调用方与组件内部类型                     | 可省略属性用可选类型声明；有非 undefined 默认值后，组件内部获得相应的非 undefined 类型 |

作者可以直接写 `items = []`、`options = { ... }`、`value = ref('')`；编译器负责需要的实例工厂或 fallback 接线。默认值是首次需要时求值的初始值，不是隐式持续派生；持续派生继续使用 Vue `computed`。不用再维护单独的 Defaults 对象或默认值宏。

参数解构增强只发生在 `_component` 的参数边界：

- 参数别名的后续读取获得最新 prop；父级替换 Ref 后，不继续固定读取旧 prop。
- 默认 Ref 每个组件实例独立，首次需要 fallback 时创建并在实例内复用。外部 Ref 撤去后回到该实例的 fallback，不复制外部状态。
- 默认值只由 `undefined` 触发，`null` 保留其显式含义。
- 默认表达式按声明顺序处理；引用更早参数可支持，循环或无法安全降低的模式需诊断。
- 默认表达式保留原参数词法环境，不被 setup 函数体中的同名绑定遮蔽。直接读取自身或后续参数给出源码诊断，回调闭包在稍后执行时读取其他参数仍遵循正常 JavaScript 行为。
- 普通局部解构、函数传参和已交给业务函数的 Ref 身份继续遵循 JS；不会追踪并重定向所有旧引用。
- rest 的转发反映当前未消费 props/attrs 的新增、修改和删除，不是 setup 时复制的快照。
- 对 import type、类型别名、泛型、可选 props 和函数 props 的支持，以阶段 2 的类型夹具为准；不能通过无差别 `any` 获得“兼容”。
- 局部类型与外层泛型按实际词法层级交给 Vue 解析，不能把所有接口简单拼到一个根作用域而误合并同名声明。

`_component` 生成正确的运行时 props 元数据，使 Ref 和回调确实作为 props 接收。语义等价的默认值优先复用 Vue 现有 props/default 机制；需要实例作用域的表达式由局部接线处理，不能把它们粗暴提升到模块级。

Boolean prop 的强制转换不能抢先吞掉作者声明的默认值，例如 `disabled = true` 必须在未传属性时得到 true。可选 Boolean 未声明默认值时遵循 Vue 既有规则；需要保留 undefined 时可显式声明 `disabled = undefined`，编译到对应的默认规则。普通 `defineComponent` 的默认值和 Boolean 行为保持上游契约。

`_component` 优先复用 Vue 的 attrs 透传体验：单根组件保留自动透传，显式转发或多根组件通过 rest / setup context 的 attrs 选择接收元素，并可采用 Vue 的 `inheritAttrs: false`。显式转发示例中的事件和样式不得再自动应用第二次。

CSS 元数据在自动透传、VNode 克隆和最终根节点之间的接线需要单独验证，不能为绕开这一问题统一关闭所有自有组件的 attrs 继承。具体实现以保持原有行为、正确接线及减少作者样板为标准；普通旧组件的 inheritAttrs、emits 和 listeners 不变。

调用普通回调不隐式调用 emit。用户操作通知与 Ref 更新区分：父级直接改 Ref 不自动再触发 `onCommit`；监听所有变化用 `watch`。Promise 回调是否等待由接口声明，返回 false 不隐式阻止默认行为。消耗过的回调不能重复落入 DOM。

### 5.5 表单、DOM 引用与公开方法

```tsx
const name = ref('');
const enabled = ref(false);
const element = shallowRef<HTMLInputElement | null>(null);

onMounted(() => element.value?.focus());

return (
  <>
    <input ref={element} v-model={name.value} />
    <input type="checkbox" v-model={enabled.value} />
  </>
);
```

复用官方 JSX `v-model` 与 Vue 指令运行时，覆盖 input、textarea、checkbox、radio、select、组合输入和对应修饰符。已有组件继续使用它自己的 model prop，例如 `v-model:value={name.value}`。

表单绑定使用 Vue 已有的完整机制，不另设 `bind:value`、`bind:checked` 或 `bind:group` 同义接口。新增语法必须有明确的使用价值，并承担完整的类型与运行行为维护。

DOM `ref` 复用 Vue 已有的 Ref 对象和函数 ref，沿用挂载、更新、卸载和 SSR 时机；未挂载及卸载后可能为空。内部元素可通过明确的 `inputRef` prop 传出；组件上的 `ref` 保留组件公开接口含义。不要因为常用示例是 shallowRef，就把合法的函数 ref 或既有 TSX 引用写法排除。

传给 `_component` 的 setup 函数通过第二参数接入 Vue setup context，使用 `expose({ focus })` 公开方法，并为调用方提供相符类型。尺寸观察使用 ResizeObserver 配合 Vue 清理生命周期，不把 DOM 引用变化当作尺寸变化。

### 5.6 For

```tsx
<For each={users.value} getKey={(user) => user.id} fallback={<p>暂无用户</p>}>
  {(user, index) => <UserRow user={user} position={index + 1} />}
</For>
```

- each 接受数组、只读数组和空值。getKey 可省略；省略时按位置更新，不猜测 id，也不承诺重排后保持数据项的逻辑身份。
- 需要跨重排保持行状态时传 getKey，返回 Vue 支持的稳定唯一 key，类型沿用 PropertyKey。开发期诊断重复 key。
- item/index 是普通参数，index 从 0 开始；数据由回调提供，不进行模板式变量注入。
- 每项可返回多个节点，用 Fragment 分组，不增加 DOM 包装；提供 getKey 时使用 keyed Fragment。
- 按所选 key 模式复用 Vue 更新机制；有稳定 key 的重排保留兼容行实例，并将新数据更新到 props。静态说明列表不必为了使用 For 额外定义 key 函数。
- 回调可以重复执行；每行持久状态放在真实组件中，不能在回调里创建一次性 Ref 后期待自动保留。
- 删除项按 Vue 生命周期清理组件、DOM 引用和样式资源。
- 泛型推断要到达回调参数，不依赖作者给每个 item 手写类型；普通 `.map()` 始终可用。

### 5.7 TSX 类型与编辑器体验

普通旧 TSX 保留 Vue 原有类型入口。自有工具提供基于 Vue JSX 类型的增强入口，优先验证按文件或消费工程选择它的方式，不向所有用户全局注入宽泛的 JSX 声明。

阶段 2 的类型验收必须同时覆盖：

- 同一 TSX 文件里调用普通 Vue 组件、Naive UI 组件和 `_component`，各自的必填属性与回调参数仍准确。
- `children`、直接 JSX 内容和带参数 renderer 的区分，不通过允许所有组件接受任意 children 来消除错误。
- `For` 与泛型 Select 的 item 推断、可写模型与只读来源、DOM ref 和 expose 的公开类型。
- `css` 的返回值可直接赋给 `class`；自有组件的 class 转发、数组组合和内部目标的 class prop 有准确类型，普通 class 条件对象与第三方 props 不被整体拓宽成 `any`。
- 引用已打包的声明文件仍能获得相同提示，不依赖编译源码时临时生成的隐藏文件。

类型入口与 Babel 运行时 lowering 是两件事：不能因为采用某个 JSX 类型命名空间，就让 TypeScript 提前把 JSX 编译到另一种运行时。使用标准 TypeScript 声明与编辑器能力表达完整的作者契约；每项支持的语法都必须有可信类型与可验证的编辑器体验，不能只做到能运行。

## 6 TSX 混用的支持范围

### 6.1 共享状态示例

以下 RefInput 是我们的私有验证组件，Naive UI 来自用本插件编译的源码产物：

```tsx
import { defineComponent, ref, type Ref } from 'vue';
import { NButton, NConfigProvider, NInput, NSpace } from 'naive-ui';
import { _component } from '@zerodep-vue/tsx';

const RefInput = _component(({ value }: { value: Ref<string> }) => {
  return <input v-model={value.value} />;
});

export const MixedPage = _component(() => {
  const name = ref('');

  return (
    <NConfigProvider>
      <NSpace vertical>
        <NInput v-model:value={name.value} />
        <RefInput value={name} />
        <NButton
          onClick={() => {
            name.value = '';
          }}
        >
          清空
        </NButton>
        <output>{name.value}</output>
      </NSpace>
    </NConfigProvider>
  );
});

export const OrdinaryTsxPage = defineComponent({
  setup() {
    const name = ref('');
    return () => <RefInput value={name} />;
  },
});
```

这里共享的是 Vue 状态：自有输入组件接收 Ref，Naive UI 按自己的 value/update 协议接入。不向只接受字符串的 NInput 直接传 Ref，也不要求 Naive UI 改成我们的作者 API。

### 6.2 混用矩阵

| 边界                                | 支持方式                                                | 必须验证                                    |
| ----------------------------------- | ------------------------------------------------------- | ------------------------------------------- |
| 增强 TSX 使用普通 Vue/Naive UI 组件 | 正常组件标签、原有 props/slots/events                   | 安装、更新、卸载、状态变化                  |
| 普通 TSX 使用我们的组件             | 编译后是普通 Vue 组件，按声明传 props                   | 无需把父组件改成 `_component`               |
| 两边共享 Ref/reactive               | 同一 Vue runtime；Ref prop 原样传递                     | 双向修改、对象替换、无额外解包              |
| value/update 与 Ref 模型衔接        | `v-model` 或明确 value + update 回调                    | 写回一次、清空、外部重置、只读边界          |
| children/default slot               | Vue 默认 slot 与自有 children 桥接                      | 延迟读取、转发、条件内容、清理              |
| 具名或作用域 slot                   | 使用旧组件的 `v-slots` 接口                             | 由 slot 参数获得数据，不猜同名 prop         |
| 普通回调与 emits                    | 按目标组件已声明的接口调用                              | 不重复触发、不误透传为 DOM 事件             |
| provide/inject 与 Naive provider    | 保持同一 Vue 组件树和应用上下文                         | 自有包装层内外的 provider 仍生效            |
| ref/expose、Teleport、异步组件      | 复用 Vue 的 VDOM 能力                                   | 引用时机、卸载和挂载位置                    |
| 自有 CSS class 到旧组件             | 仍写 `class={css(...)}`，编译器隐式生成常规 class/style | 绑定更新、显式 style 优先、无内部元数据泄漏 |
| 模板挂载我们的组件                  | Vue 自然支持的基础用法，可选冒烟                        | 不作为 TSX 核心 API 的设计约束              |

普通 TSX 与增强 TSX 可以在同一模块中导出，也可以互相 import；不要求按目录使用两套互斥语言规则。是否增强由明确入口决定。

模板宿主中的普通组件挂载、值 props、回调、默认 slot 与公开方法，能沿用 Vue 行为的应覆盖基础用例。具体场景是否需要额外工作，要看它有没有改变我们已确定的 Ref/内容协议，不能仅因调用方是模板就提前判定不可用。

本项目仍不建设模板编译器。模板 Ref 自动解包与自有可写 Ref props 的自动适配、模板内 bx 等需要新增语义的能力，不因为基础挂载可行就默认承诺；有具体需求时单独讨论维护成本。

Transition、TransitionGroup、KeepAlive、Teleport 和 defineAsyncComponent 等直接使用 Vue 导出，沿用其 VDOM 和 slot 协议，不增加同义工具。混用验收应覆盖相关挂载、缓存、切换、引用和清理行为，而不是只检查标签能否编译。

## 7 运行时 CSS 作者契约

本库定位为**运行时 CSS 加辅助编译工具**。CSS 声明、系统/主题关键字解析、组合、规则生成、缓存和宿主生命周期属于运行时；CSS 部分的编译职责是捕获 `bx` 表达式、保留 class 元数据、隐式合并 style，并产生必要诊断。标准 TSX 的组件宏仍按第 4、5 节处理。

普通 JS 函数、条件、对象和运行时主题值都可以参与样式。不能要求用户样式必须静态可求值，也不把运行时继承类实例化成构建期主题快照。生成属性类型、关键字元数据及 JSDoc 是库的维护工具，不等同于编译用户 CSS。

### 7.1 声明与常用工具

```tsx
const styles = css.create({
  root: {
    display: 'inline-flex',
    gap: '8px',
    color: 'white',
    backgroundColor: '#2563eb',

    ':hover': {
      color: '#eff6ff',
      backgroundColor: '#1d4ed8',
    },

    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },

    '@media (max-width: 640px)': {
      gap: '4px',
    },
  },
});
```

同一状态的多个属性按 `:hover`、`:disabled` 分组，支持伪元素、组合选择器及局部条件。常用选择器提供补全，复杂关系写 `&:hover:not(:disabled)` 等正常 CSS 形式。

`css(...)` 返回 class 值，`css.create(...)` 返回具名 class 集合，供作者直接写入 JSX 的 class。组合与绑定所需的描述由运行时在内部保留，不要求作者接触；创建时不要求 DOM、不立即插入样式。普通声明、条件与组合在运行时完成，不把 CSS API 变成必须静态求值的编译 DSL。

| API                                 | 用途                                                     |
| ----------------------------------- | -------------------------------------------------------- |
| `css(...)`                          | 单处对象声明、有序组合与条件项，返回 class               |
| `css.create({...})`                 | 有类型的具名 class 集合                                  |
| `createCss<T>(source)`              | 绑定实际主题来源，提供类型明确的运行时 CSS 作者入口      |
| `css.keywords`                      | 按属性提供系统/主题关键字视图，保留成员类型和注释        |
| `bx(expression)`                    | 捕获动态值，作者不写 getter                              |
| `css.defineVars`、`css.createTheme` | 类型化变量组与主题覆盖，复用继承主题相同的变量和宿主协议 |
| `css.keyframes`                     | 可复用动画资源                                           |
| `css.firstThatWorks`                | 按首选到备选传值，输出正确的 CSS 降级声明顺序            |
| `css.global`                        | 显式全局规则，注册和释放归宿主管理                       |

recipes、庞大的变体 DSL、原子 CSS 和字符串选择器解析语言不作为基础前提。用普通 JS 条件、对象索引和数组组合即可表达常见 variants。

#### 7.1.1 系统关键字与主题关键字分层

系统基础层提供属性本身的标准值和关键字，而不只是 CSS-wide keywords：

- 属性专属值，例如 display 的 `flex` / `grid` / `none`、position 的 `relative` / `absolute`、color 的 `currentColor`。候选根据当前属性提供，不把所有属性的值合成一个宽泛列表。
- 通用的 `initial`、`inherit`、`unset`、`revert`、`revert-layer` 等 CSS-wide keywords，保留各自的原始含义和第 7.6 节的绑定回退规则。
- 系统基类不内置 `brand`、`primary`、`surface` 等业务主题名。主题关键字由使用方继承关键字基类后增加，不能篡改系统关键字的意义。
- 无自定义主题时，默认 `css` 仍具备基础属性提示、系统关键字和普通 CSS 值输入能力。

采用 `SystemKeywords → AppTheme → 具体主题` 的继承方向。继承扩展的是关键字集合与主题约定，日常样式仍然使用对象，不要求作者回到属性方法链或 CSS 回调。

标准关键字集合与主题扩展槽分开维护。SystemKeywords 为各属性提供扩展边界；子类在 color 等组中声明主题成员时，不能覆盖或丢失该属性原有的系统值提示。运行时与类型层都必须保留这两类来源。

#### 7.1.2 泛型 T 与运行时主题入口

以 `T extends SystemKeywords = SystemKeywords` 作为主题类型入口，贯穿 `Css<T>`、`CssObject<T>`、属性值类型、主题关键字视图和具名样式。目标作者写法如下，实现必须在 TypeScript 6.0.3 上通过对应的类型与运行验收：

```tsx
class AppTheme extends SystemKeywords {
  override readonly color = {
    /** 品牌主色，用于正文中的强调内容。 */
    _brand: '#2563eb',
    /** 品牌交互色，用于相应的 hover 状态。 */
    _brandHover: '#1d4ed8',
  };

  override readonly padding = {
    /** 常规控件的纵向与横向内边距。 */
    _control: '8px 12px',
  };
}

const theme = shallowRef<AppTheme>(new AppTheme());
const css = createCss<AppTheme>(theme);

const styles = css.create({
  root: {
    display: 'inline-flex',
    color: css.keywords.color._brand,
    padding: css.keywords.padding._control,

    ':hover': {
      color: css.keywords.color._brandHover,
    },
  },
});

return <button class={styles.root}>确认</button>;
```

`createCss<T>(source)` 返回可调用、带 `create` 等工具方法的 `Css<T>`，因此仍可写 `class={css({...})}`。`createCss(new AppTheme())` 也应从实参推导 T；显式泛型用于共享工具、库边界和需要固定主题接口的场景。`createCss` 属于 CSS 工具，不加下划线。

`css.keywords` 是带类型和成员注释的关键字视图。系统值可以直接写字符串；主题成员通过具名引用保留来源、属性约束与说明，其结果是运行时主题引用，不能在定义样式时就冻结成第一次读取的颜色或间距。

泛型与继承必须满足：

- T 只影响类型，不能代替真实运行时数据。自定义 T 必须同时提供对应主题实例或 Vue Ref 来源；仅写 `createCss<AppTheme>()` 而没有主题来源应被拒绝。
- 默认入口的 T 为 `SystemKeywords`；应用主题不通过全局 module augmentation 污染其他组件库的补全。
- 子主题保留继承的成员与类型，可以增加主题关键字或覆盖已有主题值；系统关键字不能被当作主题 token 重定义。
- 类型化主题成员按兼容的 CSS 值域约束。颜色 token 应能在 color、backgroundColor、borderColor 等兼容的颜色位置复用，不要求复制同一主题值；不能把它用作 padding 的间距值。对应正反向用例必须验证，不能简单把所有主题值放宽为 string、数字或对象。
- T 必须传入伪类、伪元素、媒体条件、`css.create`、组合函数和可复用 `CssObject<T>`，不能进入嵌套对象后退化成 any。
- 主题来源可在运行时通过 Vue Ref 替换。值在使用范围解析，嵌套使用及 SSR 请求互相隔离，不建立一个可变的全局“当前主题”。
- `css.defineVars` / `css.createTheme` 与继承主题复用同一变量引用和宿主协议，不维护相互竞争的主题系统。

变量组用 `css.defineVars('稳定命名空间', { color: 'red', gap: '8px' })` 声明。显式命名空间保证独立服务端请求、客户端与重复模块加载得到一致名称，不依赖模块执行顺序或编译时值求解。每个引用携带原生 CSS var fallback，`css.createTheme(vars, { color: value })` 返回普通 class，可按状态分组并使用主题引用或 bx。自定义变量没有隐式单位，长度默认值明确写单位。

`css.keyframes({ from: {...}, to: {...} })` 返回动画引用，直接用于 animationName 或编译接线的 animation 模板。关键帧内主题和 bx 在使用动画的元素渲染时读取，各帧和各动画具有独立变量位置。资源随主规则一同收集、采用、取得与释放；覆盖掉的动画不求值，不维护永久全局动画表。

`css.global('稳定名称', { 'body, main': {...} })` 在组件 setup 注册显式全局规则；组件外必须提供 `{ host }`。返回幂等清理函数，Vue 作用域或宿主结束也会自动清理。它在自己的 Vue effect 中读取 bx/主题，写入字面 CSS 并原位更新同一 style 节点，保持层叠位置。相同静态定义可以共用；需要持续变化的命名规则由应用或区域入口注册一次，多个所有者争写不同值时报错。SSR 保持全局/普通规则的实际收集顺序，渲染结束停止读取，样式仍可从请求 context 输出。

- 原生 CSS 字符串和主题关键字引用须区分。保留原生自由输入时，不能让不存在的主题成员通过；如果提供主题名短写，也必须有独立的字面量校验和运行时诊断，不能被宽泛 string 类型吞掉。

#### 7.1.3 主题归属与弹层

运行时主题来源与实际消费节点保持明确关联。同一应用内的嵌套主题、独立页面及同时展示的不同主题互不串值；使用本库 CSS 的内容经 Vue Teleport 移动后，继续消费原来的主题来源。不能仅依赖原 DOM 祖先上的 CSS 变量，也不能将局部主题写入全局 body 而污染其他弹层。

实现优先复用已有 `createCss<T>(source)`、Vue 组件上下文和样式宿主，不因这个场景新增一套主题组件或样式 props。第三方组件使用自身公开主题入口，不猜测其内部节点。SSR 按请求与消费位置输出对应变量，hydrate 不以延迟补样式掩盖服务端缺失。验收至少包含两个主题区域同时打开 Teleport 内容、运行时切换主题和销毁其中一个区域。

#### 7.1.4 类型提示与说明注释

良好的类型提示和注释属于交付条件。参考老项目的属性文档、系统关键字数据、继承类型及生成流程，只复用适用于当前对象 API 的部分；链式方法、旧返回值说明和旧编译限制不能照搬。

需要落实以下要求：

1. 属性名、当前属性的系统关键字、当前 T 中的主题成员、常用伪类和条件都有有意义的补全。写错属性、使用不存在的主题成员或跨属性组引用要有类型错误。
2. 保留对象的上下文类型、具名样式的精确键、继承成员和泛型推断。不能靠开放的字符串索引或 any 让全部输入通过；也不能为严格校验引入导致常见样式补全明显迟滞的递归类型。
3. 属性 JSDoc 说明用途、适用条件、重要交互和易错点；必要时提供 CSS 初始值，并区分规范初始值与浏览器默认样式。关键字说明解释它的实际效果，避免只把英文值翻译一遍。
4. 保留主题成员自己写的 JSDoc，使继承后的关键字视图也能显示。例如上例的 `_control` 应显示控件间距说明，而不只是 string。
5. 类型映射、包装和声明构建不能把注释丢失。必须在源码消费和打包后 `.d.ts` 消费两种模式下验证 hover、补全详情、定义跳转与泛型结果；对字符串字面量候选无法单独展示的说明，由属性文档或具名成员视图提供，不能虚报编辑器能力。
6. `bx`、class 组合、null 删除、CSS-wide keyword 回退与主题继承的注释应说明求值、覆盖及生命周期。实现注释解释为什么保留元数据、如何避免实例串值等原因，不逐行复述代码。
7. 属性/关键字数据可基于已经固定的 `csstype` 维护或生成，中文解释单独维护并校验缺漏。保留数据来源、规范链接和必要许可；说明注释进入源码与声明，不为展示文档向浏览器打包整套解释文本。

优先参考老项目的 `scripts/css-author-docs.mjs`、生成的 `KeywordValues` / 属性作者注释，以及主题和项目扩展类型夹具。新增对象类型需要自己的正反向用例；旧类型测试通过不等于新对象作者已经通过。

### 7.2 多样式组合与组件覆盖

```tsx
css(base, appearance, disabled && disabledStyle, external);
css(base, [size, [state, external]]);
css(base, { padding: '12px' });

<button class={[styles.root, appearance, external]} />;
```

`class` 接收本库返回的 class，也支持与普通类名、条件项和嵌套数组组合。普通 CSS 声明对象通过 `css(...)` 接入；直接写在 class 里的普通对象仍是 Vue 的条件类名对象，例如 `class={{ active: enabled.value }}`。本库 class 中的样式及绑定信息在组合时保留。

自有组件明确暴露可覆盖的目标：

```tsx
type ButtonProps = {
  class?: ClassValue;
  style?: StyleValue;
  iconClass?: ClassValue;
  children?: VNodeChild;
};

const Button = _component(({ class: className, style, iconClass, children }: ButtonProps) => {
  return (
    <button class={[styles.root, className]} style={style}>
      <span class={[styles.icon, iconClass]} />
      {children}
    </button>
  );
});

<Button
  class={css({
    color: 'black',
    ':hover': { color: '#333' },
  })}
  iconClass={css({ width: '20px' })}
>
  确认
</Button>;
```

`ClassValue` 是拟提供的 class 输入类型，覆盖本库返回值与 Vue 的常规 class 组合；`StyleValue` 复用 Vue 类型。根样式最后组合外部 `class`，内部目标通过 `iconClass` 等明确的 class prop 暴露；绑定随该值转发，在对应元素上自动接入。示例中的 style 只用于作者需要显式传入的内联样式，不要求作者转交或拼装 bx 变量表。覆盖规则在同一工具的内部描述层完成；不通过猜测第三方内部 class 名实现任意节点穿透。

组合采用以下确定规则：

- 组合项 `false/null/undefined` 跳过。
- 属性 `undefined` 表示不提供；属性 `null` 表示清除先前该属性的声明组。
- 同一目标、同一属性按完整声明组后者覆盖前者；默认值和各条件中的同名属性一起组成该组。
- 后项只写 hover 颜色，也会替换此前这个目标的完整颜色组；它不是“只修补旧 hover”的隐式操作。
- 根元素、伪元素和不同后代目标分开合并；根 color 覆盖不自动删掉 before 的 color。
- 中间结果保留清除标记和顺序，使 `css(css(a, b), c)` 与 `css(a, b, c)` 等价。
- 简写/长写按应用顺序处理。先覆盖 border 再补 borderColor，与相反顺序可以不同；逻辑属性和物理属性不能靠不完整的手写展开表随意合并。
- 普通外部 class 内部的规则不可被结构化重排，继续由浏览器层叠。

完整属性组替换可避免组件默认 hover 意外重新盖过使用方颜色。完整属性组替换与局部条件修补必须有不同且清楚的语义，不并列多套含义相近的 merge 函数。

### 7.3 class 的隐式内联 style 与第三方边界

作者只传 class，需要自己的内联覆盖时再显式写 style：

```tsx
<button
  class={[styles.root, override, 'analytics-target', active && 'is-active']}
  style={{ minWidth: '120px' }}
/>
```

编译器生成内部接线，在当前 render 中解析最终 class 及其有效绑定，得到 Vue 可消费的常规 class 和变量 style，再与作者显式 style 合并。作者不用额外调用解析函数、不用展开 props、不用维护变量表。

- class、spread 和显式 style 表达式按上游顺序求值，不重复执行。先保留原有 `mergeProps` 选项语义，再对实际生效的 class 接入绑定，不能偷偷恢复被后续 spread 覆盖的输入。
- 自动生成的变量 style 在前，作者显式 style 在后；保留未冲突的声明。同名属性由作者显式值优先，绑定撤销时只移除自动生成且已无消费者的项。
- 自有组件边界保留内部组合及绑定信息，直到最终元素才解析；不能因为 props 转发、rest、class 数组或函数返回而提前丢失。内部承载由编译器处理，不增加作者侧的 JSX 属性。
- 自动生成部分与显式 style 的来源应可区分，避免多层转发后把旧变量重新加入，或把作者手写值误删。
- 普通 class 字符串、数组、条件对象及普通 style 对象/数组遵循 Vue 行为；完全没有本库 class 的输入不能因接入助手而改变语义。

普通 Vue TSX 和 Naive UI 调用处也保持相同作者写法：

```tsx
return () => (
  <NButton class={css(styles.root, { color: bx(color.value) })} style={{ minWidth: '120px' }}>
    保存
  </NButton>
);
```

编译器在第三方边界隐式产生常规 class/style，绑定读取参与调用方当前 render 的 Vue 追踪；第三方组件接收的是它已有的属性协议。这里不要求把普通组件改成 `_component`，也不要求作者手工展开一对 class/style。

实际样式应用仍取决于目标组件对 class/style 的透传位置。第三方内部样式不受我们的结构化组合协议管理，与 Naive UI 自身样式的冲突按浏览器层叠及其公开主题/props 处理；不承诺自己的颜色总能盖过其内部 hover，也不猜测内部节点。

SSR 使用同样的 class/绑定解析协议，把变量 style 放入 VNode/HTML 产物；不能只在 mounted 后补写 DOM。挂载、更新和释放由样式宿主与 Vue 生命周期管理。

### 7.4 规则生成、layer 与资源所有权

作者拿到的是可传递、可组合的 class 值；内部解析最终组合后，输出一个可复用结果类，对应普通、伪类、伪元素和条件规则的集合。一次 `css` 调用不等于一个 style 标签，一个结果类也不等于只能有一个 CSS 规则块。

- 缓存依据有序规范化结果。静态值与条件结构参与键，`bx` 当前值不参与，避免随拖动数值生成无穷规则。
- 每个消费元素有独立的变量输出，多个元素可共用同一规则类。规则缓存和绑定实例分开：不能只按 class 的规则哈希保存某个组件的 getter，否则相同样式的不同实例会串值。
- 浏览器宿主按 app/目标样式容器管理共享规则、活动引用和有界缓存，不能删除其他活动消费者的规则。
- class 值创建、render 求值、真实消费和释放分开；内部元数据有明确所有权，未挂载或已卸载的分支不留下永久订阅或样式引用。
- SSR 宿主按请求隔离，类名与收集顺序可复现，hydrate 复用已有规则，不跨请求泄漏主题或变量。
- `css.global`、主题与 keyframes 使用同样清楚的宿主生命周期，不靠无界模块全局表。
- 默认按最终组合生成可复用规则类。规则共享或内部拆分类策略依据产物体积、运行开销与维护成本评估，并保持相同的作者组合语义；不把尚未验证的内部优化路线预先写成永久禁用项。

`@layer` 只作为可选的宿主整体配置。默认不强制开启，不为每次组合创建动态 layer，也不靠层名数量表达样式先后。`revert-layer` 保留 CSS 层回退含义，不能恢复已经在描述合并中被清除的旧项。

### 7.5 bx：无作者 getter，多变量与作用域

```tsx
const x = ref(0);
const y = ref(0);
const color = ref('tomato');

return (
  <div
    class={css({
      transform: `translate(${bx(x.value)}px, ${bx(y.value)}px)`,
      border: `1px solid ${bx(color.value)}`,
    })}
  />
);
```

- `bx(expression)` 是显式绑定标记。编译器保存表达式及词法作用域，作者不用手写 `() =>`。
- 支持一条声明里的多个 bx、模板字符串/拼接、局部绑定别名，以及 class 经过变量、数组、函数返回值和自有组件转发；所需内联变量由编译器隐式接入。
- 未包 bx 的值按普通 JS 求值。setup 中 `css({ width: width.value })` 是当时的值；需要保持绑定则写 `bx(width.value + 'px')`。
- 条件组合撤去本库 class 或其某个样式来源时，移除相应变量输出；重新加入时正确建立消费关系。
- 回调参数、参数别名、列表 item 和局部变量必须在实际作用域内读取，不能提升到模块或组件外。
- 函数返回、条件分支、短路求值和同名遮蔽有回归测试。不得通过重复执行 getter 来推断依赖。
- 绑定表达式应为无副作用的读取/计算；不要依赖它调用几次来修改业务状态。确定求值与缓存策略后写入 API 文档。
- 优先让消费组件 render 使用 Vue 的正常追踪，不为了每一个变量自行创建永久 watcher。若需要额外 effect，必须有实例和元素生命周期归属。

### 7.6 CSS 系统关键字与绑定撤销

对整条属性值的 `initial`、`inherit`、`unset`、`revert`、`revert-layer`，保留它们作为该 CSS 属性关键字的意义。不能直接把这些字面量写入普通自定义属性，再通过 `var(...)` 假装等价。

目标用例：

```tsx
const width = ref('240px');

return <div class={css({ width: bx(width.value) })} />;

// 之后：width.value = 'initial';
// width 声明改为字面的 initial，撤去这条声明不再使用的变量输出。
// 再改回 '300px' 时，恢复普通变量绑定。
```

撤去 DOM 变量输出不等于终止响应式追踪。关键字切换需要再次读到后续变化；规则缓存区分普通绑定形态和有限的关键字形态。

一条声明包含多个 bx 时，按最终声明是否仍需要变量清理；某个片段出现关键字，不能擅自把整个 `translate(...)` 或 shorthand 改成关键字。只在完整声明合法为 CSS-wide keyword 时执行回退，其余无效组合提供开发期诊断。

同一个绑定被多条声明共享时，只清理已无消费者的输出。属性 `null` 的工具层清除语义与 CSS 的 `unset` 不相同，文档和测试必须分开。

## 8 Naive UI 与最终验收

### 8.1 源码基线

本轮读取到的官方源码快照：

| 项目                  | 值                                                                |
| --------------------- | ----------------------------------------------------------------- |
| 仓库                  | `tusen-ai/naive-ui`                                               |
| commit                | `8b249214f17328a47eeb57dd5c7b80a47c94d116`                        |
| package.json 版本字段 | `2.45.3`                                                          |
| Vue peer              | `^3.0.0`；不代表我们已经验证整个范围                              |
| 快照构建现状          | 存在 classic JSX 与可选其他后端路径，需要建立明确的 VDOM 验收入口 |

此快照已作为固定验收基线，fixtures/naive-ui/production-tsx.json 记录 301 个生产 TSX 的路径与内容哈希；全量编译、构建和产物 SSR 对照交给远程 classic/official/fork 三组任务。源码提交、锁文件、转换选项与工具链随报告保存，尚未取得对应运行结果前不得宣称通过。之后更新基线必须重新验收，不能永远跟随移动的 main 分支。

不要求构建 Naive UI 的模板文档站。验收对象是其生产组件及其必要的 TypeScript、样式和资源依赖，以及我们的纯 TSX 混用应用。

### 8.2 源码必须实际经过本插件

1. 在受控 fixture 获取固定源码，保留其许可证；不修改邻接参考仓库，也不把开发者本机路径写死为 CI 前提。
2. 建立生产 TSX 文件清单，包括未被演示页面 import 的组件。演示、测试、文档目录的排除规则必须有明确清单和理由。
3. 用我们的插件转换清单内全部生产 TSX。TS 类型处理保留 JSX 直到本插件接手，不允许 tsc、Oxc/esbuild、旧 JSX 插件或依赖预构建提前消费 JSX。
4. 为转换记录输入路径、命中文件数、编译器版本及产物对应关系，检查零漏编、零残留 JSX、零绕过转换。支持 tree shaking 不代表可以跳过未引用源码的编译验收。
5. 允许必要的构建入口、alias、依赖版本和 TypeScript emit 配置适配；Naive UI 的组件 TSX 源码和公开 API 不为迁就我们的语法而重写。
6. 生成可消费的库产物，完成真实 import 与运行验证。正式发布包消费测试另做，不取代源码编译测试。
7. 混用工程 alias/依赖必须指向本次生成的 Naive UI 产物；防止测试实际使用了 node_modules 内未经本插件处理的预编译版本。

没有生成文件清单和运行证据时，不得把“build 命令退出码为 0”直接写成兼容性完成。

### 8.3 三层对照

- 原项目对照：锁定 Naive UI 自己的可用 VDOM 构建路径，记录原始行为与必要工具链条件。
- 官方插件对照：相同 TSX 源码进入未修改 v3.0.0 的受控 VDOM 构建，检查输入在该插件上的实际行为。
- fork 对照：同一输入和等价选项换成我们的插件，验证编译结果及行为。

若官方 v3.0.0 在该源码上已有缺口，也要记录并解决本项目最终验收所需的编译问题，或明确报告仍未完成；不能把目标组件从清单移走，或拿不同源码版本的结果替代。原项目的非 VDOM 构建结果不作为这三层中的通过证据。

测试应比较可观察行为，避免只比较生成文本。已有上游测试的基线失败、环境限制和 fork 引入的回归分别记录；未解决的必需用例不能标记为完成。

### 8.4 纯 TSX 混用必验场景

| 场景                                      | 行为要求                                                                                                 |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| NInput + 自有 RefInput + 同一个 Ref       | 任一输入修改、父级重置、外部替换后，显示与状态同步                                                       |
| 普通 TSX 父 → 自有组件 → Naive 组件       | 正常挂载、更新、卸载，属性无重复透传                                                                     |
| 自有父 → Naive 容器/slot → 自有组件       | VNode 上下文、slot 更新、生命周期保持正确                                                                |
| 默认/具名/作用域 slots 与 render callback | 无参内容方便传递；带数据内容参数、更新与调用次数正确                                                     |
| NConfigProvider 等 provider 跨自有包装层  | 同一应用里的配置与注入继续生效                                                                           |
| key、For、动态组件与条件移除              | 实例身份合理，状态、DOM ref、样式使用正确清理                                                            |
| Naive 弹层/选择/表格类交互                | 覆盖 Teleport、受控更新和内容回调等实际机制                                                              |
| class/style 与自有 CSS                    | `class={css(...)}` 隐式接入变量 style；class 转发、spread、显式覆盖和绑定清理正确，Naive 普通 class 不变 |
| DOM ref 与组件公开方法                    | 挂载后可用、卸载后正确清理、类型提示相符                                                                 |
| 构建与开发                                | 开发、生产、动态加载、HMR、source map 不因混用失效                                                       |
| SSR/hydrate                               | 选定混用页面无新增 hydration mismatch，样式正确收集与复用                                                |

具体 Naive 组件和用例在阶段 0 固定为清单，至少覆盖输入、按钮、配置容器、选择/弹层及一个数据渲染组件。不是要求替 Naive UI 重新证明全部业务功能，而是用完整生产源码编译、相关上游测试和明确交互路径检验我们的转换与混用。

验收报告必须列出实际覆盖与未覆盖范围。兼容声明只覆盖已完成验证的 Vue/Naive UI/工具链组合，不泛称所有版本兼容。

### 8.5 最终通过条件

以下条件全部满足才算完成本蓝图：

- v3.0.0 上游编译行为回归通过，普通旧 TSX fixture 可以替换插件后构建和运行。
- 固定 Naive UI 全部生产 TSX 经过我们的插件正确编译，库产物可消费。
- 混用应用实际使用上述产物，与自有组件共同运行并通过本节交互检查。
- 新 API、Ref/default/rest、内容/slots、For、DOM ref/expose 的运行及类型验收通过。
- 运行时 CSS 的 class 返回、跨组件组合与转发、内联 style 隐式合并、伪类、bx 多变量、关键字撤销与恢复、资源清理通过，作者无需额外接线 API。
- 系统关键字、主题继承、显式及推断的泛型 T、主题运行时切换与 SSR 隔离通过；嵌套对象的补全、负向类型检查及源码/发布声明中的说明注释均有实际验证。
- VDOM 开发/生产、HMR、SSR/hydrate、source map 和发布包消费通过约定检查；样式热更新保留兼容实例状态，源码诊断及开发态样式来源可检查，生产产物不携带调试记录。
- 嵌套主题、不同主题区域的 Teleport 内容、主题更新与卸载，以及对应 SSR/hydrate 用例通过。
- 文档说明接入、模型/slot 边界、模板非目标及验证过的版本，不把未实现能力写成可用 API。

基础模板冒烟可以附在报告中；它不能替代任何 TSX 必需用例，也不能扩大成另一套模板工具链任务。

## 9 分阶段实施与退出条件

阶段 0/1 固定基线、组件作者、class/bx、系统/继承主题、变量、动画与全局规则已有远程回归证据。Naive 301 个生产 TSX 三组编译/构建和开发/生产 × Chromium/Firefox 的实际混用及 SSR/hydrate 已通过。HMR 状态保留正在进入独立浏览器验收，开发检查与发布包最终验收仍需完成。准确版本与记录见 [docs/progress.md](docs/progress.md)，不把较早提交的成功归给新提交。

| 阶段                 | 工作                                                                                              | 退出条件                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 0 基线与可复现工程   | 建 pnpm workspace；固定官方 fork、工具链、许可、Naive 源码及生产文件清单；验证 Babel visitor 时机 | 来源可追溯；未改上游基线可运行；三个对照构建的入口和差异有记录                                                 |
| 1 普通 TSX 替换      | 建自己的 Babel/Vite 接入入口；继承选项、指令、slots、class/style；先做 Naive 全生产 TSX 转换      | 无增强的旧工程可替换；Naive 源码转换和产物消费成功；转换命中可核实                                             |
| 2 组件与类型         | 实现 `_component` setup/render、props 元数据、集中默认值、参数别名/rest、回调与 children 桥接     | 初始化/更新、泛型与回调类型，以及默认触发、Boolean、实例隔离、撤去输入、函数默认值和类型收窄通过；旧基线不退化 |
| 3 状态与 TSX 混用    | Vue Ref、toRef/toRefs、可写 computed、`For`、v-model/ref/expose；双向嵌套与 Naive 共享状态        | 字段双向读写与根对象替换，以及固定混用清单的 slots、provider、事件和清理通过                                   |
| 4 CSS 声明与覆盖     | class 返回、系统关键字、基础泛型类型、隐式 style 接线、组合/属性组/删除、伪类条件与规则宿主       | 普通 class 不变；属性和系统关键字补全、元数据转发、style 合并、缓存及生命周期通过                              |
| 5 bx 与动态恢复      | 捕获、多变量、别名、条件/回调作用域、CSS-wide keyword、变量撤销与恢复                             | 每类作用域和关键字回归通过；没有重复求值、失效订阅或无界规则增长                                               |
| 6 CSS 完整工具       | 继承主题、泛型 T 与运行时来源、变量、keyframes、降级值、global、类型和中文说明                    | 主题扩展及切换、属性组约束、SSR 隔离、声明消费中的补全/hover 注释与资源释放通过                                |
| 7 工程与最终兼容验收 | 完成 HMR、SSR/hydrate、source map、生产/开发、打包后消费；全量 Naive 与混用回归                   | 第 8.5 节全部达成，并保存输入版本、日志、文件命中和交互证据                                                    |
| 8 文档与发布准备     | 完成作者、CSS、兼容范围、上游差异与升级文档；检查包内容和许可                                     | 发布产物与文档一致；安装示例可复现；所有必需阶段有证据                                                         |

### 9.1 实现前必须验证的语义边界

以下边界用实际代码与类型用例验证；同时检查直接复用 Vue 是否已经足够，避免无证据扩展，也避免过早缩小可用能力：

1. `_component` 返回边界、常见 if/switch 分支、导入别名、shadowing 和宏/JSX visitor 顺序。
2. props 类型提取；默认值的缺省/undefined/null 区分、Boolean、对象/数组/Ref 实例隔离、函数默认值、撤去输入与类型收窄；rest 删除和父级替换 Ref。
3. children/default slot 的读取时机、具名内容 prop 与旧 slots 混用、单根自动 attrs 与显式转发，以及对象/函数 ref。
4. CSS class 在变量/数组/spread、自有组件和第三方边界中的元数据保留；隐式 style 合并、单次求值、绑定实例隔离与类型补全。
5. CSS 属性组覆盖、简写/长写、层叠顺序、系统关键字分支和样式释放。
6. 主题继承、泛型 T 推断与显式入口、运行时主题来源、嵌套属性补全，以及源码/发布声明中的 JSDoc 和负向类型用例。
7. Naive 全源码转换命中与消费产物路径，排除预编译依赖造成的假通过。

相关检查失败时必须修复语义和实现；如果设计存在内在冲突，需要明确说明并更新完整契约与验收，不能全局改变旧 TSX 语义或删除必需用例来绕过问题。

### 9.2 验证成本与日常流程

- 修改完成后，本地只运行受影响文件的 LSP 诊断和必要的少量短测试。小型、确定性修改通过这些检查即可提交；文档与配置只做对应的语法、链接或格式检查。
- 完整类型检查、构建、全量上游回归、Naive 源码编译、浏览器、SSR、打包消费、跨平台 LSP 和长时间稳定性验证由远程 CI/CD 负责，不因修改触及类型或工具链就重复在本地跑全量。
- 远程按能力与资源开销分成独立并行任务；需要前置产物的步骤保持顺序。LSP 探针会修改临时源码，不能与同一工作目录的类型检查并行，使用不同 job 的独立 checkout 隔离。
- 每个可审阅阶段中文提交并推送。准备下一次提交时，按提交 SHA 检查上一轮 CI；失败时先读实际日志、定点修复，再做本地相关短验证和提交。
- 推送后继续工作，不等待刚启动的长测试，不反复轮询。若上一轮仍排队或运行，记录 pending 和链接；不能将 pending、取消、未运行写成通过，也不空等阻塞无关工作。
- 当前工作流为 `.github/workflows/ci.yml`：格式、四包类型、编译/SSR、构建入口、Linux/Windows LSP 并行运行，`CI result` 汇总结果。它覆盖已存在的实现；完整上游及 Naive 验收随对应功能加入真实任务，不能用空测试占位。
- 阶段验收引用准确的提交、版本和结果。首次基础 CI 已在 `b4c8a7f2ca19ca737c652c32b94f46871cf66d6e` 运行成功，见 [CI 运行记录](https://github.com/kenconnet666/zerodep-vue/actions/runs/38418824193)；后续提交必须分别核对自己的结果。
- 测试资源只清理本次创建且已确认所有权的文件、fixture 产物与进程。文件清理使用明确范围的脚本或逐文件删除，再移除空目录；保留失败诊断所需证据。

历史项目的绑定事故只用来选回归用例：prop 读取提升、条件列表隐藏读取、同名宏遮蔽、CSS-wide keyword、回调局部绑定和重复表达式 source map。不能据此声称本项目已经出现或修好了这些问题。

## 10 升级与维护约束

- fork 记录上游 tag/SHA、来源路径、许可证、核心差异和相应测试。
- 升级上游先运行未修改的新版本对照，再移植小范围差异，最后重跑旧 TSX、Naive 源码和混用验收。
- 自有扩展默认只处理可识别入口；普通上游语义不得成为新功能的隐式副作用。
- 不复制与目标无关的上游演示站、完整发布基础设施或未使用的包；复用的代码保留来源。
- 不建立永久 Babel 7/8 双实现。需要支持的工具链在版本范围中明确，源码兼容与构建环境要求分开说明。
- 新 Vue/Naive UI 版本先进入验证矩阵，再扩大支持声明。
- 模板维护以共享 Vue 组件机制自然覆盖的基础能力为范围；直接可复用的用法通过用例确认，不因模板来源一概排除。新的模板编译语法、自动模型适配等另行讨论，不混入已确认的纯 TSX 目标。

## 11 参考与证据

这些资料提供实现依据；历史研究不覆盖本次已确定的 fork、VDOM 和 Naive UI 验收范围。

- [官方 JSX v3.0.0 固定源码](https://github.com/vuejs/babel-plugin-jsx/tree/11b8af5db89c189008d14418c1bca482281e1692)；本地 [package.json](../babel-plugin-jsx/packages/babel-plugin-jsx/package.json)、[选项定义](../babel-plugin-jsx/packages/babel-plugin-jsx/src/interface.ts)、[JSX 转换](../babel-plugin-jsx/packages/babel-plugin-jsx/src/transform-vue-jsx.ts)、[上游测试](../babel-plugin-jsx/packages/babel-plugin-jsx/test/)。
- [Vite JSX 插件包快照](https://github.com/vitejs/vite-plugin-vue/blob/a03675e92eb55c02a6a393e311d610ddb3603744/packages/plugin-vue-jsx/package.json)及[接入源码](https://github.com/vitejs/vite-plugin-vue/blob/a03675e92eb55c02a6a393e311d610ddb3603744/packages/plugin-vue-jsx/src/index.ts)：核心 Babel 插件与构建适配的责任不同。
- [Naive UI 固定源码 package.json](https://github.com/tusen-ai/naive-ui/blob/8b249214f17328a47eeb57dd5c7b80a47c94d116/package.json)、[构建配置](https://github.com/tusen-ai/naive-ui/blob/8b249214f17328a47eeb57dd5c7b80a47c94d116/vite.build.mts)、[Input 实现](https://github.com/tusen-ai/naive-ui/blob/8b249214f17328a47eeb57dd5c7b80a47c94d116/src/input/src/Input.tsx)：源码编译路线及 value/update 接口的实际依据。
- [Vue Render Functions & JSX](https://vuejs.org/guide/extras/render-function.html)、[响应式 API](https://vuejs.org/api/reactivity-core.html)、[toRef / toRefs](https://vuejs.org/api/reactivity-utilities.html)、[props](https://vuejs.org/guide/components/props.html)、[DOM 引用](https://vuejs.org/guide/essentials/template-refs.html)：普通 VNode、slot、Ref、字段引用与组件边界。
- [Babel plugin ordering](https://babeljs.io/docs/plugins#plugin-ordering)：转换阶段与 visitor 顺序不能混为一谈。
- [StyleX 使用样式](https://stylexjs.com/docs/learn/using-styles/)：组合与工具体验参考；本项目的运行时生成策略、选择器分组和绑定机制另行实现。
- [CSS Custom Properties](https://www.w3.org/TR/css-variables-1/)与[CSS Cascade](https://www.w3.org/TR/css-cascade-5/)：变量、系统关键字、层叠与 layer 的原始语义。
- [旧项目注释组织](../zerodep-js/scripts/css-author-docs.mjs)、[属性与系统关键字类型](../zerodep-js/packages/css/src/generated/keywords.ts)、[主题类型夹具](../zerodep-js/packages/css/test/types/theme.ts)、[项目扩展类型夹具](../zerodep-js/packages/css/test/types/project-extension.ts)：参考属性说明、继承与泛型检查，不照搬旧链式作者接口。
- [历史 Vue TSX 研究](../zerodep-js/VUE_TSX_RESEARCH.md)：保留状态、内容和 CSS 用例作为参考，不继承已取消的后端与兼容目标。
- [Vue DevTools 插件 API](https://devtools.vuejs.org/plugins/api)、[Vite HMR API](https://vite.dev/guide/api-hmr)、[Vue Teleport](https://vuejs.org/guide/built-ins/teleport)：复用开发工具与组件逻辑上下文，验证样式资源和 DOM 位置变化。
