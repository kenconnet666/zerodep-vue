# @zerodep-vue/compiler

Vue JSX v3.0.0 的源码 fork，输出 Vue VDOM，提供普通 Vue TSX 兼容转换与自有 TSX 作者能力。

```ts
import { defineConfig } from 'vite';
import vueTsx from '@zerodep-vue/compiler/vite';

export default defineConfig({ plugins: [vueTsx()] });
```

用此入口替换已有 Vue JSX 插件。Babel 单独接入时使用 `@zerodep-vue/compiler`，TypeScript 擦除阶段须保留 JSX 给本插件处理。TS 配置使用 `jsx: 'preserve'`；自有组件的严格 JSX 类型来自 `jsxImportSource: '@zerodep-vue/tsx'`，也可以按文件使用同名 pragma。

Node 24 下 Babel/Vite 入口均可通过 ESM import 或 CommonJS require 加载。`runtime`、`hmr` 和 `devtools` 是生成代码的入口；后两者只由客户端开发转换引入。发布包包含 dist、声明与映射、对应源码和上游来源清单，默认入口解析至 dist。

具体作者协议见 [作者文档](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/authoring.md)，选项与兼容范围见 [蓝图](https://github.com/kenconnet666/zerodep-vue/blob/master/BLUEPRINT.md)，准确版本与验证结果见 [实施记录](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/progress.md)。

LICENSE 保留 Vue JSX 上游 MIT 许可，VITE-LICENSE 保留 Vite 参考实现的许可，ZERODEP-VUE-LICENSE 覆盖本项目新增代码。来源文件与 SHA 位于 upstream.json。
