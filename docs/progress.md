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

运行时 CSS 已有对象/条件声明、完整属性组覆盖、null 清除、有序组合、结构化多绑定模板、关键字撤销/恢复、宿主与继承主题实现。变量组、动画、全局规则、完整浏览器及发布包验收仍未完成，不能把阶段性实现当作完整 CSS 产品验收。

- 完成组件边界回归：默认值依赖/诊断、局部类型与泛型、可写/只读 Ref、异步与 expose 的源码及发布类型体验。
- 实现运行时 CSS 描述、确定组合、class 元数据与 VNode 接线、样式宿主和资源生命周期。
- 实现 bx 捕获、多变量、CSS-wide keyword 撤销/恢复、系统关键字、继承主题及泛型/JSDoc。
- 建立真实浏览器混用、SSR/hydrate、主题 Teleport、HMR 状态保留和来源调试的完整验收。
- 验证打包后安装消费、声明与注释、上游差异、接入文档及最终回归。不能将阶段性绿色结果标记为生产交付完成。
