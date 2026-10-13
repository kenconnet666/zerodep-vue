# @zerodep-vue/tsx

基于 Vue VDOM 的 TSX 作者入口。状态仍使用 Vue ref、computed、toRef 等 API；组件使用普通 props、回调与 JSX 内容。

```tsx
/** @jsxImportSource @zerodep-vue/tsx */
import { _component } from '@zerodep-vue/tsx';
import type { Ref } from 'vue';

export const Input = _component(
  ({ model, placeholder = '输入内容' }: { model: Ref<string>; placeholder?: string }) => (
    <input placeholder={placeholder} v-model={model.value} />
  ),
);
```

`_component` 需要 `@zerodep-vue/compiler` 转换：初始化执行一次，返回区域进入 Vue render。参数边界的 props 解构保留更新，默认值按实例处理。列表可用 `For` 或普通 map；带数据的内容使用真实回调参数。

TypeScript 使用 `jsx: 'preserve'`。`jsx-runtime` 提供类型命名空间，JSX 仍由编译插件降低；不要把 TypeScript 的自动 JSX 发射作为宏转换的替代。Vue 生命周期、DOM ref、expose、Teleport、Suspense 等沿用 Vue 的协议。

完整用法、可写模型边界和 props/children 约定见 [作者文档](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/authoring.md)。默认入口使用 dist，包内源码供声明映射及导航；Node 24 支持 ESM 和 CommonJS 加载。采用 MIT 许可。
