# @zerodep-vue/css

运行时 CSS 声明、组合、系统/继承主题、变量、动画和 Vue 样式宿主。作者使用 class；编译器捕获 bx 并隐式接入内联变量。

```tsx
import { ref } from 'vue';
import { _component } from '@zerodep-vue/tsx';
import { bx, css } from '@zerodep-vue/css';

export const Panel = _component(() => {
  const width = ref(120);
  return <div class={css({ width: bx(width.value), ':hover': { color: 'blue' } })} />;
});
```

配合 `@zerodep-vue/compiler` 使用。css 返回可组合的 class 描述；样式、主题和绑定值都在运行时处理。系统关键字有类型提示与中文说明，继承主题通过 `createCss<T>(实际来源)` 绑定。

`css(...)` 声明和组合样式，`cx({...})` 定义具名样式，`keyframes(...)`、`defineVars(...)`、`createTheme(...)`、`globalCss(...)` 各自独立导出，关键字使用 `keywords.xx`。主题工厂返回 `CssContext<T>`，按需解构所需入口，保持泛型 T 与实际来源一致；普通值和 `@supports` 足以表达兼容条件。

完整组合、覆盖、关键字撤销和资源生命周期见 [CSS 文档](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/css.md)，继承和泛型用法见 [主题文档](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/themes.md)。SSR 每个请求独立收集，使用 `getCssHost(context)?.renderStyles()` 输出样式。

普通字符串字面量保留具名值声明。需要 TypeScript 服务提供中文补全详情、hover 与直接导航时，在 tsconfig 的 compilerOptions.plugins 中加入 `{ "name": "@zerodep-vue/css/language-service" }`。该扩展仅用于编辑，不改变类型检查、编译或运行时输出。

默认导出条件使用 dist，包内源码供映射与导航。Node 24 下支持 ESM 和 CommonJS 加载。项目采用 MIT；生成类型与说明的数据来源及保留许可见 THIRD_PARTY_NOTICES.md。
