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

## 当前 CSS API 修订（待本次远程验收）

入口进一步收敛为独立函数：css 声明/组合，cx 定义具名样式，keywords 独立取值，defineVars/createTheme/keyframes/globalCss 各自导出。createCss 返回携带同一 T 的 CssContext，支持解构和别名；编译器、HMR 与 DevTools 同步追踪绑定身份。已移除降级辅助函数及其类型、运行时和调试分支，兼容条件使用普通 CSS 与 @supports。前一轮 f19426b 的 CI 已全部成功，本轮新入口和删除项仍以新提交结果为准。

2026-10-14 按作者约定调整 CSS：按选择器、条件路径与属性合并，后项添加或覆盖当前位置，null 只删除当前位置；组件样式统一经过 css()，外部输入使用 CssInput<T>。嵌套条件支持结构化样式复用和条件数组，普通类名给出明确诊断。条件类型在声明和变量覆盖之间统一。

生成器保留系统基础和继承主题 T，采用语义关键字类型、公共值集合和 14 类属性接口。关键字只保留规范化成员拼写，94 个旧链式示例改成对象 API。泛型作者的正反向类型夹具、系统/主题 hover 与补全、发布声明消费者同步扩展。本地只做受影响文件的 LSP 及短测试；完整构建、跨平台声明消费和浏览器语义以本次新提交 CI 为准，不能沿用下面的旧版本通过结论。

## 已验收的 1.0.0 基线

三个工具包 1.0.0 的交付源码为 de5973b42c181839a9735576a9ef901ab34cca6c，[完整 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38497045742) 的 29 个任务全部成功。已下载 18 个 artifact，复核三个 tarball 和 Naive bundle 的 SHA-256、301 个源码命中、官方/fork 各 108 项原始测试、32 项浏览器用例及两个系统的独立运行/声明/清理报告；逐项证据与范围见 acceptance.md。

交付文件保存在本机 artifacts/1.0.0-de5973b；已验收 dist 同步到工作区后，两个消费样例的原生 MCP 诊断均为 TypeScript 6.0.3、complete=true、errors=0。文档整理只更新接入说明、过时进度与验收记录，不更改该版本的包源码或构建输入。

## 实施历史（从新到旧）

以下待验收描述记录对应阶段当时的状态；当前结论统一见 acceptance.md。

9bb858fd92ee19b21bc7329ff4afc095fec2d4c3 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38495642526) 中，上游、两种作者模式、全部浏览器/稳定性、HMR/DevTools、类型、LSP、打包均成功。Linux/Windows 的仓库外运行时消费也通过，声明检查准确拒绝了样例中两处把业务主题引用交给默认系统 css 的调用；样例已改用对应 themed 入口，并保留该误用为负向类型检查。版本及安装说明整理为 1.0.0 候选，完整声明消费结果仍待候选 CI 确认。

c631f83d30adc3ee26ad0e730b32f591800ab7fe 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38492258325) 中，四组浏览器完成了普通混用、嵌套主题、水合及每组 500 次稳定性循环，HMR/DevTools、上游、CSS、构建、类型和 LSP 均成功。优化作者模式发现提前计算的节点数组被标为编译 slot，Vue 跳过规范化而使 TransitionGroup 丢失离场行为；已仅在增强分支使用普通 slot 规范化和动态更新标记，优化重排/离场与无动态 props 的消费回归通过。

包消费者已走到真实声明检查：语言服务宿主缺少 realpath，pnpm 链接包的传递依赖无法定位；Windows 的短 TEMP 路径又让 ESM/CJS 形成不同的模块路径身份。现已补齐 SDK 路径解析，并在创建消费者之前规范化临时父目录。链接依赖解析和规范路径/所有权清理短测通过；其中 Windows junction 父目录触发的原生 mkdtemp 异常循环已通过先解析父目录消除，本次探针进程及目录已清理。完整包消费仍以修复提交的远程结果为准。

365d849cb40ccfdd0db6dc9a00d2b3a75e90302d 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38486667515) 中，上游、作者、CSS、四组普通浏览器、两组 HMR/DevTools、类型、LSP 和真实 tarball 构建均成功。独立消费者停在两个检查问题：Windows 跨盘符 relative 返回绝对路径，原边界判断误拒绝；Linux 的生产标记检查会命中 tarball 路径注释。现已按路径语义、发射模块和 AST 字符串值检查，继续要求仓库外消费及生产无调试实现。Babel 公开类型依赖的 convert-source-map 声明也移入 compiler 分发依赖。

生命周期验收新增 KeepAlive、Transition/TransitionGroup、async setup/expose、等待中取消及原生模板基础挂载。定点测试复现并修复离场 DOM 仍存在时样式被提前释放，以及 ShadowRoot 重建后缓存样式节点没有恢复的问题。6 个相关运行用例分批通过，真实浏览器的离场/缓存与嵌套主题短例通过；500 次反复挂载、共享宿主保护、隐藏后不再读绑定、ShadowRoot 复用交给远程四组浏览器。最终条件逐项整理在 acceptance.md。

4e3d189ae9df8e6b9d431083073edcf5f56872ff 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38479626139) 中，旧基线和四组普通浏览器继续通过。类型/构建被路由开发依赖的 exactOptionalPropertyTypes 声明错误阻断；HMR 连续写入被 Chokidar 50ms 去重吞掉了文件事件；Chromium 检查页冷启动再优化时，trace 记录到两个 Vue URL，导致一次 setup 的响应式作用域错配。已增加最小声明补丁、为自动化启用真实文件轮询，并让插件预先优化生成代码的第三方依赖，保留原有断言及运行时 scope 检查。补丁的定点类型检查与 HMR/inspector 单例浏览器验证通过。

包分发链已建立，待本次远程首次完整执行：打包检查源/发射对应关系、导出目标、声明映射、源码、README 和许可；Linux/Windows 在 checkout 外安装同一提交的 tarball，核对默认 dist 解析、Vue 身份、ESM/CJS、Babel/Vite/异步 SSR，以及公开声明的泛型、中文 hover、补全详情和定义跳转。成功后使用所有权标记逐文件清理临时消费者，失败保留复现目录与报告。

包场景复现了独立 runtime 模块各自持有请求 WeakMap 导致外部 CSS 收集入口漏收的问题，已改为同一运行环境中以真实 app/context 为弱键的共享登记表。真实 Vue SSR 定点测试确认不同模块共享同一请求宿主、不同请求不混用、冻结 context 可用；没有放宽包消费者的跨 bundle 验收。

e21c1e79b110e875b93297d956ce3159c1754c2d 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38474909227) 中，Firefox HMR、四组普通浏览器及其他基线通过；两个作者任务因 Vitest 的不完整 import.meta.hot 缺少 data 失败，Chromium HMR 在错误遮罩关闭后过早进行下一次写入，恢复同步检查失败。已对不完整 hot context 保留普通求值路径，并让恢复用例等待新标题真实显示后继续；相关短测通过，完整结果待修复提交。

Vue DevTools 样式检查已接入开发编译，展示来源、声明覆盖/清除、消费值、动画帧和全局租约。Node 定点测试确认重复检查不执行 getter、覆盖绑定保持未消费、全局释放及 SSR 不留记录；真实 DevTools 后端协议的本机 Edge 浏览器用例通过（2.4 秒测试主体），并核对作者行列、更新值和卸载。开发/生产/SSR 的事件代码 source map 定点测试通过；远程新增真实 inspector 协议及生产模块排除检查。

c5a7a6bcf0c5a2a79864f06169445c64a7f3caf4 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38472077730) 全部成功，包括可写模型约束、旧基线与四组真实浏览器混用。

HMR 已实现独立 render/样式函数与原实例环境接线，初始化签名改变时交给 Vue reload。运行时保留 CSS 快照语义、稳定具名样式/变量/动画引用，模块级全局注册随签名变化或 prune 释放。编译及运行短测通过；本机已安装的 Edge 使用一个定点浏览器用例（5.5 秒测试主体）验证输入与 Select 展开状态、render/事件修改、语法错误恢复、12 次规则变化、setup 重建和卸载。远程新增独立 Chromium/Firefox HMR 两组，完整结果待本次提交。

55a4c03fd244622cf7b8b2e59163c11ada4c1ea2 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38471174414) 全部成功，包含新增 development/production × Chromium/Firefox 四组实际交互、CSS 计算、Teleport 和 SSR/hydrate。每组使用同一提交转换的 Naive fork 产物并校验报告及 bundle SHA-256；未安装 Naive 预编译包代替。默认值词法作用域与局部类型修复也通过完整回归。

可编辑 Ref 边界已进入验证：自有 JSX 复用 Vue computed 的类型标记排除 getter-only computed，保留可写 computed、明确只读展示输入和普通泛型回调推断。直接 .value 编辑及 v-model 的 prop 在读取时用 Vue isReadonly 检查来源，抛出带 prop 名的 ZV_READONLY_MODEL。局部类型正反例、编译识别及 Vue 原生只读/可写来源的短运行测试通过，完整回归交给本次提交。

6922299124943a12e92a8403e0c263e476e1d9d8 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38468559537) 全部成功，全局规则生命周期、SSR 读取停止和现有全部回归通过。

2fd1ab72fc016a1703581c283f64beb384051bb2 的 [首轮浏览器 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38469640274) 中，已有全部任务及 Naive 源码声明发射成功，Firefox 开发模式的四项交互/CSS/主题用例通过。SSR 入口缺少独立的 Vite server source condition，开发 SSR 和生产 SSR 构建因此失败；Chromium 开发任务被 Naive NInput 的联合监听类型导致的回调隐式 any 阻断。已分别补充 ssr.resolve.conditions 和单值输入的 string 参数类型，原验收断言保持。

已下载上述同一提交的 Naive 库、真实声明和报告，用于定点复现。修复后的 App.tsx LSP 为零错误，直接通过 Vite SSR 加载真实混用页的短测确认 HTML、全局 CSS 和 Teleport 内容生成成功。完整浏览器与 hydration 结果仍以修复提交的远程四组任务为准。

组件语义审查修复默认值移入 setup 后被函数体同名变量遮蔽的问题，增加直接前向/自依赖的源码诊断，保留延后回调的捕获语义。局部 props 类型改为复用 Vue 的独立词法作用域，局部同名接口、外层别名及外围泛型约束不再被混到根作用域。定点编译测试、实例默认值运行测试与修改文件 LSP 均通过，完整 default/optimized 回归交给远程。

4fa7863a4b043914b65359344c74e72c4a5defb0 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38467772874) 全部成功，变量组、关键帧、发布类型构建、两种作者模式及旧 TSX 基线没有退化。

globalCss 已接入 Vue effectScope 与样式宿主，支持命名规则原位更新、源 Ref 替换、显式提前释放、作用域/宿主清理、名称冲突诊断与 SSR 采用。请求收集器保持全局/普通规则顺序，SSR watcher 在渲染结束停止但结果仍可输出。局部测试覆盖作用域停止、首次求值失败无遗留订阅、多所有者保护、请求隔离及原节点采用；完整回归交给本次提交的远程 CI。

ad5043ebe93033895bc4b4ab89e0756adf10ad44 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38465021762) 全部成功，包括系统关键字生成一致性、继承主题、泛型类型、两个作者模式、上游及 Naive 全生产源码基线。

变量组和关键帧已接入现有 class 解析与资源租约。defineVars 使用明确命名空间与原生 fallback；createTheme 返回可组合 class；keyframes 支持多帧 bx/主题值，动态变量互不覆盖，SSR 收集动画资源。局部验证为资源 Node 测试 5 项、Vue/SSR 集成 2 项与正反向类型文件诊断。完整回归交给本次提交的远程任务。

0778bafcb2a7be594183b7ed24a373fedfe41bf9 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38458629564) 全部成功，覆盖 class/bx 编译、两种优化模式的组件接线、类型、CSS 核心、上游与 Naive 基线。

系统关键字与继承主题已进入验证：生成器读取固定 csstype 的 857 个属性，校验中文说明覆盖，生成固定关键字视图和 72 个颜色兼容位置。createCss<T> 必须绑定真实来源；静态系统引用直接发射，主题引用在消费时读取 Vue 来源。正反向类型夹具包含未知成员、错误属性、跨属性误用和 T extends AppTheme 的泛型共享工具。源码 LSP hover 已确认主题成员中文 JSDoc 与系统关键字的用途说明保留。

主题集成短测发现 Vue 类型解析会回写 AST 并产生循环作用域引用，已改为缓存原始树、每个组件使用私有副本，位置遍历也防止回访。修复后两个主题区域通过 Teleport 同时更新/移除的短测通过；完整生成一致性、主题和 SSR 回归交给对应提交的 CI。

fe589202f99e8a9856a586453079dcc2352d98fe 的 [远程运行](https://github.com/kenconnet666/zerodep-vue/actions/runs/38456895611) 中，compiler、上游、CSS、default/optimized 作者运行、Naive 与 LSP 任务通过；类型和构建被 cx 内部 Object.entries 对泛型 Record 的 unknown 推断阻断。修复改为按 Name 键读取原记录，保留外部属性拼写与值类型检查，不放宽作者契约。

class/bx 接线已进入整合验证：自有组件保留描述到实际元素，旧组件获得普通 class/style；自有 render 在完成外部 class 组合后统一解析，避免提前读取被覆盖的默认绑定。普通 Vue cloneVNode 的导入会接入同一元数据协议。局部短测覆盖多变量、关键字撤销、优化模式跨组件更新、覆盖与克隆；完整回归由下一次提交的远程任务执行。

清理回归已复现旧组件的 slot 用普通 h() 替换样式节点后残留租约的问题。Vue 不会调用已移除指令的卸载钩子，因此补充按实际 DOM 根共用的观察器，只核对 class 消费是否仍存在，最后一个租约释放后断开；正常更新/卸载仍走 Vue 生命周期。变量更新复用现有样式规则和 style 标签。

f69aef1a8d870837e175b6b2e68d0f04f3d77241 的 [远程 CI](https://github.com/kenconnet666/zerodep-vue/actions/runs/38443248784) 全部通过，包括新增运行时 CSS 核心及宿主契约。该提交仍未导出可直接写入 JSX 的 CSS 作者入口；下一步是编译/VNode 接线，再继续主题、浏览器与最终生产验收。

bc109b70ee7a8ba4626e69c429e7cf818bbfb8be 的 [远程回归](https://github.com/kenconnet666/zerodep-vue/actions/runs/38432525699) 发现 rest 属性撤去后 DOM 未删除旧值，default/optimized 两组都复现；其余组件用例、类型、上游、Naive 和工程任务通过。原因是自建实时代理没有触发 Vue 的 VNode props 快照。修复使用 Vue shallowReadonly，让正常 VNode 构造负责复制；补测属性及事件的新增、替换和删除，修复提交的完整结果单独核对。

组件阶段已接入 _component lowering、Vue 类型提取、参数解构、实例默认值、普通内容/default slot、attrs/rest、For 和局部 JSX 类型入口。针对初始化次数、Boolean 默认值、父级替换/撤回 Ref、导入泛型的短测试已通过；泛型回调、内容边界和错误输入类型夹具通过文件诊断。完整新增契约交给对应提交的 default/optimized 远程任务，结果必须另行记录。

类型解析复用 Vue compiler-sfc 导出的 parser；该固定版本运行时仍使用 Babel 7 类型参数字段，因此按原始位置取得兼容 AST，而非把 Babel 8 节点直接强制传入。测试 Ref 替换使用真实父组件，避免 Vue Test Utils 对初始 Ref props 的独立存储影响结论。

## 交付核对

实现阶段已经建立全部约定能力及真实验证路径。每次候选交付仍需核对同一提交的完整任务、301 个 Naive 源码哈希和消费路径、四组浏览器及稳定性报告、HMR/开发检查、两个系统的 tarball 运行与声明报告，确认没有失败、跳过或来自旧提交的替代证据。具体结论见 acceptance.md。
