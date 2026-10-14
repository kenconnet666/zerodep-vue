# 运行时 CSS 与 JSX 接线

CSS 使用不可变链式声明和 cx 有序组合。属性调用返回可直接交给 class 的样式值；声明、组合、规则生成和缓存都在运行时完成。编译器捕获 bx 表达式，在 Vue 归一化 class 前保留元数据，变量 style 自动接入。

```tsx
import { ref } from 'vue';
import { _component, cx, bx } from '@zerodep-vue/core';
import { useCss } from './theme';

export const Position = _component(({ compact = false }) => {
  const s = useCss();
  const x = ref(10);
  const y = ref(20);
  const base = s.display('inline-flex').alignItems('center');
  return (
    <div
      class={cx(
        base,
        s.padding(12).transform(`translate(${bx(x.value)}px, ${bx(y.value)}px)`),
        compact && s.padding(6),
        s.select(':hover', s.color('white').backgroundColor('#2563eb')),
      )}
      style={{ minWidth: '80px' }}
    />
  );
});
```

## 声明与复用

```ts
const s = useCss();
const base = s.padding(8).color('black');
const compact = base.padding(4);
const danger = base.color('red');
const styles = { root: base, compact, danger };
```

base、compact、danger 互不修改；同一个 s 可重复开启独立链。链共享不可变前缀，追加属性不复制旧声明。cx 快照组合输入，首次消费时才展开稳定的链；未使用的分支不创建完整声明数组。裸写 s.color('red') 后丢弃返回值不会产生样式，也不会改变 s。

稳定且没有动态绑定的描述可复用解析结果；动态绑定值按当前消费读取。HMR 代理和外部自定义描述不被一次展开缓存冻结。注册规则和订阅仍归最终消费节点所有，声明本身不占用 DOM 样式资源。

按布局、间距、文字、状态等用途组织短链，用 cx 组合。具名集合使用普通对象，不再提供批量命名函数。旧 css({...})、对象声明类型和 cx({...}) 命名入口已移除，无兼容层。

## 组合与覆盖

```tsx
const base = s.color('red').select(':hover', s.color('blue').opacity(0.8));
<button class={cx(base, s.color('black'), externalClass)} />;
```

后项只覆盖同一选择器、条件路径和属性；此例默认颜色为 black，hover 的 blue 与 opacity 继续保留。后项只写 hover 时也保留默认值和其他状态。简写、长写按最后一次声明的位置参与 CSS 级联，不手工展开逻辑属性或发明额外覆盖模式。

同名属性的前项即使带 !important，也会被后面的有效声明替换；最终是否 important 由最后生效的声明决定。不同属性的简写/长写和不同选择器仍遵循原生 CSS 层叠。

组合项 false、0、null、undefined 跳过；属性 undefined 不提供覆盖，属性 null 清除当前位置的前项。中间组合保留清除标记，因此 cx(cx(a, b), c) 与 cx(a, b, c) 等价。外部样式输入使用 CssInput：它只包含已经检查过的样式、普通类名和条件数组，泛型 T 在链式声明时检查。ClassValue 留给 Vue 兼容边界。

动态绑定也遵循这个规则：s.width(100).width(bx(optional.value)) 在 optional 为 undefined 时保留 100px，变成 null 时清除该位置。只有为判断回退而必需的候选会读取，已被有效值覆盖的 getter 不执行。

cx 不接受普通对象。条件类名使用 enabled && 'active'。与 Emotion 的注册样式组合思路一致，本库样式描述保留可合并信息；组件的 external class 传入这些描述时，按后项规则覆盖。普通外部类名的规则不会被反向解析，覆盖关系仍由浏览器层叠决定；可按应用策略配置宿主 layer，不扫描 CSSOM 或假称 class 字符串靠右就会获胜。

## 选择器、条件与变量

```tsx
const selected = s
  .select(':hover', [styles.danger, enabled && s.opacity(0.8)])
  .select('& > span', s.fontWeight(600))
  .select('@supports (display: grid)', s.display('grid'))
  .select('@starting-style', s.opacity(0));
<div class={selected} />;
```

select 将传入样式相对当前条件展开，支持嵌套 select、伪类、函数伪类、属性选择器、伪元素、后代及 media/supports/container。被复用的样式不变；包含普通类名的组合不能进入 select，因为其选择器无法重新限定。

原生自定义属性使用 s.variable('--button-gap', '8px').gap('var(--button-gap, 4px)')。名称和 fallback 由作者管理；数字不自动补 px。普通长度属性的数字补 px，unitless 属性保留数字。主题及属性关键字见 [themes.md](themes.md)。

## 动态值与求值时机

setup 中 s.width(width.value) 保存当时的普通值；需要持续读取时使用 s.width(bx(width.value))。在 render 中重新调用普通属性方法仍遵循正常 Vue 追踪。没有另一套 CSS 响应式系统。

自有 _component 的 class 表达式包含函数调用时，编译器会接入按 Vue computed 依赖更新的缓存。无关文本/状态引起的 render 不重新调用 cx 或样式构造函数；构造自身读取的响应式条件变化才重算。bx getter 只在最终消费读取，因此 bx 的数值变化更新 CSS 值，不重建组合链。

缓存按组件实例、表达式位置及词法输入隔离，原生 map 与 For 都覆盖。列表参数或位置变化会重新计算，移除分支释放其记录；HMR 代码变化也会使对应缓存失效。class 构造应是纯函数，需要变化的输入使用 Vue 响应式来源，不依赖非响应式闭包变量或每次 render 的副作用。含显式赋值、自增、this/arguments、await/yield 的表达式、spread 的普通求值以及普通 Vue JSX 保持原来的求值路径。

bx 由编译器变为 getter，读取属于最终消费元素。模板中的多个 bx 独立捕获，消费时先组合成完整 CSS 值，再用一个变量承载，保留单位、字符串引号及 URL 的原生语法。先组合再读取，被覆盖的绑定不执行，同一绑定在一次消费内只读一次。完整声明变成 initial/inherit/unset/revert/revert-layer 时输出原生关键字并撤去无用变量，正常值恢复后重新接入变量。同一规则可由多个元素共享，变量值互不共享。

末尾顶层 !important 单独作为声明优先级发射，不放入变量值；静态、动态和模板使用同一解析。引号内的 !important 是普通文本，注释和大小写不会改变优先级识别。主题名字面量只识别完整属性值，引号内的 _ 文本不被误当主题引用。语法结构和声明边界由运行时检查，具体属性值的浏览器支持仍遵循原生 CSS。

元素变量只能由自身、伪元素和后代继承。选择器指向兄弟或其他外部元素时（如 & + span），动态值及其动画帧改为当前字面值，更新时替换对应规则，避免引用无法继承的元素变量。

显式 style 在自动变量之后合并，因此作者明确提供的值优先。class 可以通过变量、函数返回值、数组和组件传递；不能转成字符串丢失绑定。setup 中预先创建的普通 JSX 仍是 VNode 快照，需要更新的节点放在 render 返回表达式中。

## 动画与全局规则

```tsx
import { keyframes, globalCss } from '@zerodep-vue/core';

const fade = keyframes({
  from: s.opacity(bx(start.value)),
  '50%, to': s.opacity(1),
});
globalCss('page', { 'body, main': s.margin(0).color('CanvasText') });
<div class={s.animation(`${fade} 1s ease`)} />;
```

keyframes 的位置映射和 globalCss 的选择器映射保留普通对象，映射值统一为链式样式。关键帧限制在运行时根据真实声明检查：不能包含选择器、媒体条件、普通类名、!important 或动画控制属性，animationTimingFunction 除外。属性方法本身仍有精确类型，未使用或被覆盖的动画不求值。

globalCss 在 setup 注册；组件外必须提供 { host }。返回幂等清理函数，作用域或宿主销毁也会清理。全局规则没有元素承载变量，因此在独立 Vue effect 中输出当前字面值，更新保持同一 style 节点及层叠位置。source 可为 Vue Ref，支持替换整个映射。相同静态定义可共用名称；动态命名规则由应用或区域入口注册一次，多个所有者不能争写不同内容。

## 接入范围与宿主

导入本库工具的 TSX 文件自动接入 class 协议。只从共享模块导入样式的旧 TSX，可显式配置 zerodep: { css: true }；false 关闭增强。未启用增强的文件保持官方行为，自定义 pragma 需要能表达 Vue VNode 协议。

自有组件保留原始 class 到实际元素；第三方 Vue 组件接收普通 class/style，具体落在哪个节点由其实现决定。普通 Vue class 条件对象及 style 行为保持原样。

浏览器默认按应用取得宿主；挂载、更新和卸载管理租约，闲置规则使用有上限缓存。显式 app.use(createCssHost({ target })) 可共享或隔离目标容器。Transition 保留样式至实际 DOM 离场结束，KeepAlive 缓存项持有租约，淘汰后释放。容器重建时再次消费会恢复规则。

SSR 按请求收集：

```ts
const context = {};
const html = await renderToString(createSSRApp(App), context);
const styles = getCssHost(context)?.renderStyles() ?? '';
```

将 styles 写入 head；客户端按规则内容采用已有标签。独立模块实例以真实 app/context 为弱键共享宿主，不建立请求历史表。宿主统一配置 layer/nonce，不按组合新建层。全局规则与动画纳入相同的 SSR、hydrate 和资源清理机制。
