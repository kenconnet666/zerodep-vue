# 兼容与迁移

本库使用 Vue VDOM、响应式和组件生命周期。普通 Vue TSX 继续使用原来的组件、props、slots、emits 与指令；新的作者写法通过 `_component`、css 和 bx 的导入明确启用。兼容声明对应验收过的工具链，具体提交见 [验收矩阵](acceptance.md)。

| 项目                  | 固定验收版本或范围                                               |
| --------------------- | ---------------------------------------------------------------- |
| Vue JSX 上游          | v3.0.0，11b8af5db89c189008d14418c1bca482281e1692                 |
| Vue / server-renderer | 3.5.43；使用同一 Vue 实例                                        |
| TypeScript            | 6.0.3                                                            |
| Babel / Vite          | 8.0.6 / 8.3.1                                                    |
| Node / pnpm           | 24.18.0 / 11.22.0                                                |
| Naive UI              | 2.45.3，8b249214f17328a47eeb57dd5c7b80a47c94d116；301 个生产 TSX |
| 浏览器                | 固定 Playwright 1.64.0 对应的 Chromium、Firefox，开发和生产模式  |
| 独立包消费            | Linux / Windows，ESM、Node 24 CommonJS、Vite client / SSR        |

Naive 验收编译全部生产 TSX，再由浏览器实际消费本次生成的库。组件交互覆盖 Input、Button、ConfigProvider、Select 弹层和 DataTable 数据渲染；不把这些路径表述为重新验证 Naive 全部业务功能，也不自动承诺其其他版本。

## 已有 Vite 工程

按 [打包与安装](packages.md) 安装同次构建的两个 tarball。将原来的 Vue JSX 插件替换为下面的入口：

```ts
import { defineConfig } from 'vite';
import { vitePlugin } from '@zerodep-vue/compiler';

export default defineConfig({
  plugins: [vitePlugin()],
});
```

现有 `@vitejs/plugin-vue` 可保留处理 `.vue` 文件；一个 TSX 文件只执行一次 JSX lowering，不再同时调用旧 JSX 插件。原来的 `optimize`、`mergeProps`、`transformOn`、`enableObjectSlots`、`isCustomElement`、`pragma` 和 `resolveType` 仍可传给 `vitePlugin`，默认值不变。

TypeScript 保持 `jsx: "preserve"` 并移除 jsxImportSource。core 的根入口自动载入本工程的增强 JSX 声明：

```tsx
import { ref } from 'vue';
import { _component, bx, useCss, cx } from '@zerodep-vue/core';
const s = useCss();

export default _component(() => {
  const count = ref(0);
  return (
    <button
      class={s.padding(8).opacity(bx(count.value > 5 ? 0.6 : 1))}
      onClick={() => count.value++}
    >
      {count.value}
    </button>
  );
});
```

增强 JSX 类型中仍可调用普通 Vue 和 Naive 组件。需要保持原生 Vue 类型的旧文件使用 `/** @jsxImportSource vue */`，独立旧项目可在自己的 tsconfig 中设置 `jsxImportSource: "vue"`。不要额外载入 vue/jsx 的全局声明；显式 Vue 类型入口与 core 的全局 JSX 声明可并存。不设置工作区专用的 `zerodep-vue-source` 条件；正常安装使用包内 dist。

直接导入 CSS/TSX 工具的文件自动接入 class 协议。只通过项目共享模块取得 class 值的普通文件，可使用 `vitePlugin({ zerodep: { css: true } })` 统一接线。普通 class 字符串、条件对象和 style 继续按 Vue 规则处理。

## Babel 工程

用 `@zerodep-vue/compiler` 替换 `@vue/babel-plugin-jsx`，保留 TypeScript 擦除：

```js
import { babelPlugin } from '@zerodep-vue/compiler';

export default {
  plugins: [[babelPlugin, { optimize: false }]],
  presets: ['@babel/preset-typescript'],
};
```

输入文件保留 `.tsx` / `.jsx` 文件名，使 preset 正确选择解析方式。不要先让 TypeScript 或另一个插件把 JSX 发射掉。基于官方 v3 的 fork 使用 Babel 8；从 Babel 7 迁移时，构建插件也要满足 Babel 8 的要求。Vite 入口负责开发时的 HMR 和 DevTools 源码记录，单独使用 Babel 插件不等于获得整套 Vite 开发服务能力。

## 组件与状态边界

- 自有可编辑组件接收真正的 `Ref<T>`，直接读写 `.value`。Naive 等旧组件继续通过 value/update 或 `v-model:value` 接入同一状态，不能把 Ref 容器交给只接受字符串的 prop。
- 无参数内容用普通 JSX props 和 children；需要子组件数据时使用 `renderItem={(item) => JSX}`。旧组件的具名/作用域 slot 使用 `v-slots`，不猜测 footer 等同名 prop。
- 自有组件最后组合外部 class，可以覆盖其同属性的完整状态组。第三方接收常规 class/style，实际落点由该组件决定，其内部样式仍遵循浏览器层叠和公开主题接口。
- DOM ref、expose、provide/inject、Transition、TransitionGroup、KeepAlive、Teleport 和 Suspense 复用 Vue。异步 setup 在 await 之前注册生命周期和作用域副作用。
- 模板宿主的普通值 props、回调、默认 slot 和 expose 有基础验证。本库不增加模板宏、模板 bx 或 Ref 自动适配，也没有自有 renderer。

SSR 按 [CSS 文档](css.md) 输出当前请求的样式并在客户端采用；Vue 应保持共享 peer。生产与 SSR 转换不注入客户端开发检查/HMR 记录。默认值、解构、初始化快照等语义见 [作者文档](authoring.md)，热更新保留与重建边界见 [HMR](hmr.md)。
