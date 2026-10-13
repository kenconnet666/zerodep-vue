# 实施记录与验收证据

目标模式持续实施 BLUEPRINT.md，只有完整生产验收通过才能结束。此文件记录阶段状态，不替代源码、测试报告和准确的提交 SHA。

## 已确认的远程结果

| 提交                                     | 内容                                                                           | 证据                                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 38e6bd513b162d839000e6dfb60b47c64534edfd | 开发诊断、HMR 与弹层主题的验收目标                                             | [CI 成功](https://github.com/kenconnet666/zerodep-vue/actions/runs/38424005010)           |
| a2be221977a80a171efee65a586a32b34e807c2d | 固定 JSX 源码 fork、许可、原始测试和 official/fork 双基线                      | [14 个任务全部成功](https://github.com/kenconnet666/zerodep-vue/actions/runs/38425118853) |
| 613dae8c1d0c5d19a6bafd07a2fa0f02a932da7d | Vite、ESM/CJS 入口、Naive 301 个生产 TSX 的 classic/official/fork 编译与库 SSR | [17 个任务全部成功](https://github.com/kenconnet666/zerodep-vue/actions/runs/38427232666) |
| e18d4cd18696ee85087a7fbe8173e63bfb285b5f | 组件契约及 rest 快照修复，default/optimized 类型与运行回归                     | [CI 全部成功](https://github.com/kenconnet666/zerodep-vue/actions/runs/38436316207)       |

Naive 三组任务各自编译完整生产清单并构建、导入生成的库；没有安装 naive-ui 预编译包来代替编译。上述结果尚不包含自有 CSS、交互混用或最终浏览器验收。

## 当前实施

55a4c03fd244622cf7b8b2e59163c11ada4c1ea2 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38471174414) 全部成功，包含新增 development/production × Chromium/Firefox 四组实际交互、CSS 计算、Teleport 和 SSR/hydrate。每组使用同一提交转换的 Naive fork 产物并校验报告及 bundle SHA-256；未安装 Naive 预编译包代替。默认值词法作用域与局部类型修复也通过完整回归。

可编辑 Ref 边界已进入验证：自有 JSX 复用 Vue computed 的类型标记排除 getter-only computed，保留可写 computed、明确只读展示输入和普通泛型回调推断。直接 .value 编辑及 v-model 的 prop 在读取时用 Vue isReadonly 检查来源，抛出带 prop 名的 ZV_READONLY_MODEL。局部类型正反例、编译识别及 Vue 原生只读/可写来源的短运行测试通过，完整回归交给本次提交。

6922299124943a12e92a8403e0c263e476e1d9d8 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38468559537) 全部成功，全局规则生命周期、SSR 读取停止和现有全部回归通过。

2fd1ab72fc016a1703581c283f64beb384051bb2 的 [首轮浏览器 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38469640274) 中，已有全部任务及 Naive 源码声明发射成功，Firefox 开发模式的四项交互/CSS/主题用例通过。SSR 入口缺少独立的 Vite server source condition，开发 SSR 和生产 SSR 构建因此失败；Chromium 开发任务被 Naive NInput 的联合监听类型导致的回调隐式 any 阻断。已分别补充 ssr.resolve.conditions 和单值输入的 string 参数类型，原验收断言保持。

已下载上述同一提交的 Naive 库、真实声明和报告，用于定点复现。修复后的 App.tsx LSP 为零错误，直接通过 Vite SSR 加载真实混用页的短测确认 HTML、全局 CSS 和 Teleport 内容生成成功。完整浏览器与 hydration 结果仍以修复提交的远程四组任务为准。

组件语义审查修复默认值移入 setup 后被函数体同名变量遮蔽的问题，增加直接前向/自依赖的源码诊断，保留延后回调的捕获语义。局部 props 类型改为复用 Vue 的独立词法作用域，局部同名接口、外层别名及外围泛型约束不再被混到根作用域。定点编译测试、实例默认值运行测试与修改文件 LSP 均通过，完整 default/optimized 回归交给远程。

4fa7863a4b043914b65359344c74e72c4a5defb0 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38467772874) 全部成功，变量组、关键帧、发布类型构建、两种作者模式及旧 TSX 基线没有退化。

css.global 已接入 Vue effectScope 与样式宿主，支持命名规则原位更新、源 Ref 替换、显式提前释放、作用域/宿主清理、名称冲突诊断与 SSR 采用。请求收集器保持全局/普通规则顺序，SSR watcher 在渲染结束停止但结果仍可输出。局部测试覆盖作用域停止、首次求值失败无遗留订阅、多所有者保护、请求隔离及原节点采用；完整回归交给本次提交的远程 CI。

ad5043ebe93033895bc4b4ab89e0756adf10ad44 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38465021762) 全部成功，包括系统关键字生成一致性、继承主题、泛型类型、两个作者模式、上游及 Naive 全生产源码基线。

变量组和关键帧已接入现有 class 解析与资源租约。defineVars 使用明确命名空间与原生 fallback；createTheme 返回可组合 class；keyframes 支持多帧 bx/主题值，动态变量互不覆盖，SSR 收集动画资源。局部验证为资源 Node 测试 5 项、Vue/SSR 集成 2 项与正反向类型文件诊断。完整回归交给本次提交的远程任务。

0778bafcb2a7be594183b7ed24a373fedfe41bf9 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38458629564) 全部成功，覆盖 class/bx 编译、两种优化模式的组件接线、类型、CSS 核心、上游与 Naive 基线。

系统关键字与继承主题已进入验证：生成器读取固定 csstype 的 857 个属性，校验中文说明覆盖，生成固定关键字视图和 72 个颜色兼容位置。createCss<T> 必须绑定真实来源；静态系统引用直接发射，主题引用在消费时读取 Vue 来源。正反向类型夹具包含未知成员、错误属性、跨属性误用和 T extends AppTheme 的泛型共享工具。源码 LSP hover 已确认主题成员中文 JSDoc 与系统关键字的用途说明保留。

主题集成短测发现 Vue 类型解析会回写 AST 并产生循环作用域引用，已改为缓存原始树、每个组件使用私有副本，位置遍历也防止回访。修复后两个主题区域通过 Teleport 同时更新/移除的短测通过；完整生成一致性、主题和 SSR 回归交给对应提交的 CI。

fe589202f99e8a9856a586453079dcc2352d98fe 的 [远程运行](https://github.com/kenconnet666/zerodep-vue/actions/runs/38456895611) 中，compiler、上游、CSS、default/optimized 作者运行、Naive 与 LSP 任务通过；类型和构建被 css.create 内部 Object.entries 对泛型 Record 的 unknown 推断阻断。修复改为按 Name 键读取原记录，保留外部属性拼写与值类型检查，不放宽作者契约。

class/bx 接线已进入整合验证：自有组件保留描述到实际元素，旧组件获得普通 class/style；自有 render 在完成外部 class 组合后统一解析，避免提前读取被覆盖的默认绑定。普通 Vue cloneVNode 的导入会接入同一元数据协议。局部短测覆盖多变量、关键字撤销、优化模式跨组件更新、覆盖与克隆；完整回归由下一次提交的远程任务执行。

清理回归已复现旧组件的 slot 用普通 h() 替换样式节点后残留租约的问题。Vue 不会调用已移除指令的卸载钩子，因此补充按实际 DOM 根共用的观察器，只核对 class 消费是否仍存在，最后一个租约释放后断开；正常更新/卸载仍走 Vue 生命周期。变量更新复用现有样式规则和 style 标签。

f69aef1a8d870837e175b6b2e68d0f04f3d77241 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38443248784) 全部通过，包括新增运行时 CSS 核心及宿主契约。该提交仍未导出可直接写入 JSX 的 CSS 作者入口；下一步是编译/VNode 接线，再继续主题、浏览器与最终生产验收。

bc109b70ee7a8ba4626e69c429e7cf818bbfb8be 的 [远程回归](https://github.com/kenconnet666/zerodep-vue/actions/runs/38432525699) 发现 rest 属性撤去后 DOM 未删除旧值，default/optimized 两组都复现；其余组件用例、类型、上游、Naive 和工程任务通过。原因是自建实时代理没有触发 Vue 的 VNode props 快照。修复使用 Vue shallowReadonly，让正常 VNode 构造负责复制；补测属性及事件的新增、替换和删除，修复提交的完整结果单独核对。

组件阶段已接入 _component lowering、Vue 类型提取、参数解构、实例默认值、普通内容/default slot、attrs/rest、For 和局部 JSX 类型入口。针对初始化次数、Boolean 默认值、父级替换/撤回 Ref、导入泛型的短测试已通过；泛型回调、内容边界和错误输入类型夹具通过文件诊断。完整新增契约交给对应提交的 default/optimized 远程任务，结果必须另行记录。

类型解析复用 Vue compiler-sfc 导出的 parser；该固定版本运行时仍使用 Babel 7 类型参数字段，因此按原始位置取得兼容 AST，而非把 Babel 8 节点直接强制传入。测试 Ref 替换使用真实父组件，避免 Vue Test Utils 对初始 Ref props 的独立存储影响结论。

## 后续工作

运行时 CSS 已有对象/条件声明、完整属性组覆盖、null 清除、有序组合、结构化多绑定模板、关键字撤销/恢复、宿主、继承主题、变量组、动画与全局规则实现。完整浏览器及发布包验收仍未完成，不能把阶段性实现当作完整 CSS 产品验收。

- 完成组件边界回归：默认值依赖/诊断、局部类型与泛型、可写/只读 Ref、异步与 expose 的源码及发布类型体验。
- 通过真实浏览器核实 CSS 组合、状态优先级、跨组件元数据、动画/全局资源生命周期及稳定性。
- 建立真实浏览器混用、SSR/hydrate、主题 Teleport、HMR 状态保留和来源调试的完整验收。
- 验证打包后安装消费、声明与注释、上游差异、接入文档及最终回归。不能将阶段性绿色结果标记为生产交付完成。
