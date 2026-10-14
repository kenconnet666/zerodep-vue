# @zerodep-vue/core

Vue TSX 作者、不可变链式 CSS、继承主题和样式宿主的统一入口。内部按 css、tsx、development 组织。

```tsx
import { ref } from 'vue';
import { _component, useCss, cx, bx } from '@zerodep-vue/core';

export const Panel = _component(() => {
  const s = useCss();
  const width = ref(120);
  return (
    <div class={cx(s.width(bx(width.value)).padding(8), s.select(':hover', s.color('blue')))} />
  );
});
```

属性调用返回新样式，原样式不变；可直接用于 class，cx 按顺序组合。具名样式使用普通对象。旧 css 对象作者和 cx 批量命名入口已移除。

业务主题继承 SystemKeywords，通过 createTheme(实例或 Ref) 返回带类型的 useCss/provide；关键词使用 s.keywords。keyframes 的帧映射、globalCss 的选择器映射统一接收链式样式。bx 由 @zerodep-vue/compiler 捕获，运行时消费 class 时隐式接入 style。

_component 初始化一次，返回区域进入 Vue render；props 解构、默认值和共享 Ref 保持更新语义。列表使用 For 或普通 map。TypeScript 使用 jsx: 'preserve'，不设置 jsxImportSource；导入 core 自动载入增强 JSX 声明。普通 Vue 文件可以用 /** @jsxImportSource vue */ 保留原生类型。生命周期、Ref、expose、Teleport 和 Suspense 使用 Vue API。
