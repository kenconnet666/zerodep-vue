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

SSR 使用本次 renderToString context 收集样式：

```ts
const context = {};
const html = await renderToString(createSSRApp(App), context);
const styles = getCssHost(context)?.renderStyles() ?? '';
```

将 styles 写入页面 head。客户端按规则内容采用已有 style 标签，多个请求不共享变量或收集结果。宿主可配置固定 layer 和 nonce；它们属于宿主配置，不按每次组合新建层。

当前基础声明、bx 和 Vue 接线已建立；继承主题、系统关键字视图、完整工具与源码调试仍在实施中。生产兼容声明以 BLUEPRINT.md 的最终验收和 docs/progress.md 的实际证据为准。
