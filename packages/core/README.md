# @zerodep-vue/core

Vue TSX 作者 API、运行时 CSS、继承主题和样式宿主的统一入口。`_component`、`For`、`css`、`cx`、`bx`、`keywords`、`createTheme` 等从本包根入口导入；内部按 css、tsx、development 组织，不再拆分发行。

```tsx
import { ref } from 'vue';
import { _component, bx, css } from '@zerodep-vue/core';

export const Panel = _component(() => {
  const width = ref(120);
  return <div class={css({ width: bx(width.value), ':hover': { color: 'blue' } })} />;
});
```

配合 `@zerodep-vue/compiler` 使用。css 返回可组合的 class 描述；样式、主题和绑定值都在运行时处理。系统关键字有类型提示与中文说明，继承主题通过 `createTheme<T>(实际来源)` 绑定。

`_component` 由编译器转换：初始化执行一次，返回区域进入 Vue render，参数解构与实例默认值保留更新语义。列表使用 For 或普通 map。TypeScript 保持 `jsx: 'preserve'`，不设置 jsxImportSource；导入 core 自动载入增强 JSX 声明。普通 Vue 文件可用 `/** @jsxImportSource vue */` 保留原生类型。生命周期、Ref、expose、Teleport 和 Suspense 使用正常 Vue API。

`css(...)` 声明和组合样式，`cx({...})` 定义具名样式，`createTheme(...)`、`keyframes(...)`、`globalCss(...)` 各自独立导出，关键字使用 `keywords.xx`。唯一的主题入口 `createTheme` 接收继承 SystemKeywords 的实例或 Vue Ref，返回 `CssContext<T>`，按需解构所需入口，保持泛型 T 与实际来源一致；普通值和 `@supports` 足以表达兼容条件。

完整组合、覆盖、关键字撤销和资源生命周期见 [CSS 文档](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/css.md)，继承和泛型用法见 [主题文档](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/themes.md)。SSR 每个请求独立收集，使用 `getCssHost(context)?.renderStyles()` 输出样式。

普通字符串字面量保留具名值声明。需要 TypeScript 服务提供中文补全详情、hover 与直接导航时，在 tsconfig 的 compilerOptions.plugins 中加入 `{ "name": "@zerodep-vue/compiler/src/editor/plugin.cjs" }`。该扩展随 compiler 提供，仅用于编辑，不改变类型检查、编译或运行时输出。

默认导出条件使用 dist，包内源码供映射与导航。Node 24 下支持 ESM 和 CommonJS 加载。项目采用 MIT；生成类型与说明的数据来源及保留许可见 THIRD_PARTY_NOTICES.md。

core 不依赖 compiler 或构建工具，exports 只保留根入口。编译器使用的助手也从 index 导出并标记 @internal；开发检查按需安装，未使用的开发实现由生产打包移除。
