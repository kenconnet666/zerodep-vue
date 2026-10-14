# @zerodep-vue/compiler

Vue JSX v3.0.0 的源码 fork，输出 Vue VDOM，提供普通 Vue TSX 兼容转换与自有 TSX 作者能力。

```ts
import { defineConfig } from 'vite';
import vueTsx from '@zerodep-vue/compiler/vite';

export default defineConfig({ plugins: [vueTsx()] });
```

用此入口替换已有 Vue JSX 插件。Babel 单独接入时使用 `@zerodep-vue/compiler`，TypeScript 擦除阶段须保留 JSX 给本插件处理。TS 配置使用 `jsx: 'preserve'`；自有组件的严格 JSX 类型来自 `jsxImportSource: '@zerodep-vue/tsx'`，也可以按文件使用同名 pragma。

Node 24 下 Babel/Vite 入口均可通过 ESM import 或 CommonJS require 加载。compiler 只导出这两个构建入口；生成代码按能力引用 `@zerodep-vue/tsx/runtime`、`@zerodep-vue/css/runtime`，客户端开发检查和热更新直接引用 CSS 包的 devtools/hmr 子入口。compiler 不再提供运行时转导，也不把 CSS 包作为分发依赖。

使用增强 TSX 或 CSS 的应用将对应运行时包放在 dependencies，compiler 放在 devDependencies。仅使用普通 Vue JSX 时不必安装 CSS 包；开发预优化按应用实际安装的 CSS/TSX 路径处理。发布包包含 dist、声明与映射、对应源码和上游来源清单，默认入口解析至 dist。

具体作者协议见 [作者文档](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/authoring.md)，选项与兼容范围见 [蓝图](https://github.com/kenconnet666/zerodep-vue/blob/master/BLUEPRINT.md)，准确版本与验证结果见 [实施记录](https://github.com/kenconnet666/zerodep-vue/blob/master/docs/progress.md)。

LICENSE 保留 Vue JSX 上游 MIT 许可，VITE-LICENSE 保留 Vite 参考实现的许可，ZERODEP-VUE-LICENSE 覆盖本项目新增代码。来源文件与 SHA 位于 upstream.json。
