# @zerodep-vue/compiler

Vue JSX v3.0.0 的源码 fork，输出 Vue VDOM，提供普通 Vue TSX 兼容转换与自有 TSX 作者能力。

```ts
import { defineConfig } from 'vite';
import { vitePlugin } from '@zerodep-vue/compiler';

export default defineConfig({ plugins: [vitePlugin()] });
```

用此入口替换已有 Vue JSX 插件。Babel 单独接入时从同一入口导入 `babelPlugin`，TypeScript 擦除阶段须保留 JSX 给本插件处理。TS 配置使用 `jsx: 'preserve'`，不设置 jsxImportSource；core 根入口载入增强 JSX 声明。需要原生 Vue 类型的文件使用 `/** @jsxImportSource vue */`。

Node 24 下 Babel/Vite 入口均可通过 ESM import 或 CommonJS require 加载。compiler 仅有根入口，命名导出 babelPlugin、vitePlugin 与 languageServicePlugin；所有生成代码都从 core 根入口取得助手。编译包与运行时包没有分发时的相互依赖。

src 根目录只有 index.ts，接入代码位于 babel、vite，转换位于 transforms，官方 fork 位于 upstream，语言服务位于 editor。tsconfig 的 plugins 使用 `{ "name": "@zerodep-vue/compiler/src/editor/plugin.cjs" }`，通过 TypeScript 的 CJS 插件加载协议与根入口共用语言服务实现。

使用增强 TSX 或 CSS 的应用将对应运行时包放在 dependencies，compiler 放在 devDependencies。仅使用普通 Vue JSX 时不必安装 core；开发预优化从应用安装的 core 解析依赖。编译包统一导出 Babel/Vite 插件，宿主需安装这两个构建工具。发布包包含 dist、声明与映射、对应源码和上游来源清单，默认入口解析至 dist。

具体作者协议见 [作者文档](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/authoring.md)，选项与兼容范围见 [蓝图](https://github.com/kenconnet666/zerodep-vue/blob/master/BLUEPRINT.md)，准确版本与验证结果见 [实施记录](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/progress.md)。

LICENSE 保留 Vue JSX 上游 MIT 许可，VITE-LICENSE 保留 Vite 参考实现的许可，ZERODEP-VUE-LICENSE 覆盖本项目新增代码。来源文件与 SHA 位于 upstream.json。
