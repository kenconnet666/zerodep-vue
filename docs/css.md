# 运行时 CSS 与 JSX 接线

CSS 声明、组合、规则生成与缓存都在运行时执行；编译器捕获 bx 表达式，并在 Vue 归一化 class 之前保留它的元数据。作者只写 class，变量 style 自动接入。

```tsx
import { ref } from 'vue';
import { _component } from '@zerodep-vue/tsx';
import { css, bx } from '@zerodep-vue/css';

export const Position = _component(() => {
  const x = ref(10);
  const y = ref(20);
  return (
    <div
      class={css({
        transform: `translate(${bx(x.value)}px, ${bx(y.value)}px)`,
        ':hover': { color: 'white', backgroundColor: '#2563eb' },
      })}
      style={{ minWidth: '80px' }}
    />
  );
});
```

样式 class 可以在模块、setup、函数返回值、数组中保存和组合。读取绑定时参与实际消费组件的 Vue render 追踪，不另建一套响应式系统。普通 setup 中预先创建的 JSX 仍是 Vue VNode 快照；需要更新的节点放在 render 返回表达式中，复用时保存 class 描述或普通渲染函数。

## 接入范围

导入本库 CSS 或 TSX 工具的文件自动接入 class 协议。已有普通 Vue 文件如果只从项目共享模块导入 class 值，可以在编译/Vite 选项中设置 `zerodep: { css: true }`，让这些文件也接入；不需要改写为 _component。`zerodep.css: false` 用于明确关闭 CSS 增强的文件配置。自定义 pragma 需要能表达 Vue VNode 协议，当前 CSS 入口会给出明确诊断。

未启用增强的旧 TSX 保持官方转换。自有组件之间通过内部字段传递原始 class，字段不属于作者 props，也不进入第三方组件或 DOM。旧 Vue 组件接收普通 class/style，它把属性应用到哪个节点仍由自身实现决定。

## 声明、组合与覆盖

```tsx
const styles = css.create({
  base: { color: 'red', ':hover': { color: 'blue' } },
  compact: { padding: '4px 8px' },
});

<button class={[styles.base, compact.value && styles.compact, css({ color: 'black' })]} />;
```

同一目标的同名属性作为完整声明组被后项替换，因此这里 color 的默认值和 hover 都被覆盖。伪元素和后代目标独立组合。属性 undefined 不提供声明，null 清除前项的声明组；条件组合中的空值、false、0 跳过。中间组合保留清除信息，嵌套组合与直接组合结果一致。

同一条件中的简写与长写保留声明顺序，具体值解释、逻辑方向和浏览器层叠使用 CSS 本身的规则。普通外部类名不被反向解析。`css.firstThatWorks(首选, 备选)` 按正确的降级声明顺序输出。数值长度补 px，unitless 属性和自定义变量保留数字。

同一组规则由多个元素共用，bx 的当前值只进入各自的内联变量。变量更新不会重新生成规则；完整声明变成 initial/inherit/unset/revert/revert-layer 时改为原生关键字并撤去无用变量，后续正常值可以恢复。

显式 style 位于自动变量之后，因此作者明确提供的值优先。事件、spread、class 条件对象沿用 Vue 规则；作者的表达式不会为提取绑定而额外求值。

## 宿主与 SSR

浏览器默认按应用取得宿主并共享目标容器中的相同规则。挂载、更新、卸载控制租约，已无消费者的规则使用有上限的缓存；需要独立样式容器时可 `app.use(createCssHost({ target }))`。一个显式宿主可由多个应用共同使用，卸载其中一个不清除其他应用的活动样式。

Transition 的逻辑卸载可能早于 DOM 离场结束，样式及动画规则因此保留到实际节点移除。KeepAlive 缓存项仍拥有租约，激活/停用时更新 DOM 根观察位置，淘汰后释放。ShadowRoot 等容器重建内容后，再次消费缓存规则会恢复被清空的 style 节点。

SSR 使用本次 renderToString context 收集样式：

```ts
const context = {};
const html = await renderToString(createSSRApp(App), context);
const styles = getCssHost(context)?.renderStyles() ?? '';
```

将 styles 写入页面 head。客户端按规则内容采用已有 style 标签，多个请求不共享变量或收集结果。宿主可配置固定 layer 和 nonce；它们属于宿主配置，不按每次组合新建层。

同一运行环境中的独立 CSS 模块实例，通过以实际 app/context 为弱键的登记表共享宿主。因此 SSR runtime 被打入另一 bundle 后，外部 getCssHost 仍能取得完整请求结果；不同请求和冻结的 context 保持独立，不增加请求历史表。

## 变量组与动画

```tsx
const vars = css.defineVars('button', { color: '#2563eb', gap: '8px' });
const dark = css.createTheme(vars, {
  color: '#93c5fd',
  ':hover': { color: 'white' },
});
const base = css({ color: vars.color, gap: vars.gap });
<button class={[base, dark]}>保存</button>;
```

命名空间是组件库或应用中的稳定名称，同一命名空间和成员对应同一 CSS 变量。引用自带默认值，只有覆盖 class 实际被消费时才登记覆盖规则。变量遵循原生 CSS 继承；Teleport 的 DOM 移动不自动继承原 DOM 祖先变量，弹层需要将相同覆盖 class 应用于其容器，或直接使用保留 Vue 逻辑来源的继承主题引用。自定义变量的数字不补 px，长度应写 `'8px'`。

```tsx
const Fade = _component(() => {
  const start = ref(0.2);
  const fade = css.keyframes({
    from: { opacity: bx(start.value) },
    to: { opacity: 1 },
  });
  return <div class={css({ animation: `${fade} 1s ease` })}>内容</div>;
});
```

关键帧接受 from/to、百分比和逗号分隔的位置。内部只写声明，可使用主题、bx 和 animationTimingFunction；嵌套选择器及其他动画控制属性会被拒绝。也可直接写 `animationName: fade` 并分别提供 duration 等属性。动画引用在实际消费时解析，更新变量复用规则；多个元素共享资源但保有独立动态值，最后一个消费者移除后按宿主缓存策略释放。

## 全局规则

```tsx
const Page = _component(() => {
  const color = ref('#111827');
  css.global('page-base', {
    'body, main': {
      color: bx(color.value),
      '@media (prefers-reduced-motion: reduce)': { scrollBehavior: 'auto' },
    },
  });
  return <main>内容</main>;
});
```

根键是全局选择器，内部沿用普通 CSS 对象和条件分组。`css.global` 返回可提前撤销的函数，组件作用域销毁时也会停止订阅并释放规则。组件之外提供 `css.global(name, rules, { host })`，由该宿主负责最终清理；rules 也可为 Vue Ref，替换整个选择器映射。

全局规则没有接收内联变量的元素，因此 bx、主题和动画在独立 Vue effect 中输出当前字面 CSS。更新保留同一 style 节点及插入位置。相同静态定义可共用同一名称，动态命名规则应在应用或区域入口只注册一次；多个所有者不能争写不同内容。SSR 按请求隔离并保持与普通规则的收集顺序，客户端采用已有标签。

主题用法见 [themes.md](themes.md)。完整浏览器、源码调试和生产验收仍在推进；兼容声明以 BLUEPRINT.md 的最终验收和 docs/progress.md 的实际证据为准。
