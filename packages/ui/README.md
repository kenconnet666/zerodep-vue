# @zerodep-vue/ui

业务后台与复杂表单的 Vue TSX 组件库子项目。当前版本为工程基础：已配置依赖、类型检查、TSX 编译、测试和打包路径；尚未实现或导出 Button、Input、Icon、Form 等组件。

组件与交互自行实现，运行能力只使用 core 根入口。校验直接使用 Zod 4，不使用 Standard Schema、Valibot 或其他兼容层。金额、日期等业务值保留 Decimal、CalendarDate/Time 类型，输入草稿由控件管理，提交时显式转换。

## 安装与导入边界

当前包为 private，只通过同一提交的 CI tarball 验证，不声称已经发布到 npm。应用显式安装 UI、core、Vue 和全部运行时 peer；开发时也直接安装编译器和构建工具。

```sh
pnpm add ./artifacts/zerodep-vue-ui-0.1.0.tgz ./artifacts/zerodep-vue-core-1.0.0.tgz vue@3.5.43 @floating-ui/dom@1.8.0 @internationalized/date@3.12.4 @lucide/icons@1.56.0 decimal.js@10.6.0 tabbable@6.5.0 zod@4.6.7
pnpm add -D ./artifacts/zerodep-vue-compiler-1.0.0.tgz @babel/core@8.0.6 vite@8.3.1 typescript@6.0.3
```

版本以当前 tarball 的 manifest 和 pack.json 为准。运行时依赖声明为 peerDependencies，仓库开发版本另列在 devDependencies，统一由根 catalog 固定。包构建保留 import，不将依赖复制进 dist。UI 不重新导出第三方类型、函数、schema 或图标数据。

```ts
import { z } from 'zod';
import { Decimal } from 'decimal.js';
import { CalendarDate, Time } from '@internationalized/date';
import { House } from '@lucide/icons';
```

Lucide 使用 `@lucide/icons` 的原始节点数据。Icon 的 Vue TSX 渲染、可访问名称、尺寸和样式由我们实现；不安装 `@lucide/vue`/`lucide-vue-next`，不为动态名称注册全量图标。

## 基础目录

| 目录           | 责任                                            |
| -------------- | ----------------------------------------------- |
| src/config     | 区域语言、方向、时区等配置的来源和生命周期      |
| src/theme      | 自有语义主题与 createCssContext 接线            |
| src/overlay    | 定位、弹层顺序、焦点和资源清理                  |
| src/form       | Zod 4 校验调度、字段登记、错误及表单状态        |
| src/values     | Decimal/日期的输入、比较、显示和提交边界        |
| src/icons      | Lucide 数据到自有 Icon 的适配                   |
| src/components | 后续具体 UI 组件实现                            |
| test           | 私有依赖接入与 TSX/SSR 验证，不作为产品组件导出 |
| scripts        | 保留模块和源映射的生产 TSX 发射                 |

目录内的说明记录实现边界；没有用空组件、空工厂或第三方重导出占据公共 API。src/index.ts 当前只建立模块入口，后续仅导出已实现的自有能力。

## 工具链与验证

沿用 Node 24、pnpm 11.22.0、TypeScript 6.0.3 和唯一 pnpm-lock.yaml。tsconfig 使用 jsx: preserve，不使用 jsxImportSource；Vue VDOM 转换统一交给本仓库 compiler。

- `pnpm --filter @zerodep-vue/ui check`：源码、测试和测试配置的严格类型检查。
- `pnpm test:ui`：默认 TSX 测试；`pnpm test:ui --mode optimized` 使用优化模式。
- `pnpm --filter @zerodep-vue/ui test:watch`：开发期间按文件选择测试。
- `pnpm --filter @zerodep-vue/ui build`：先生成声明与声明映射，再用 Babel 和自有编译器逐模块生成 JS/源映射；运行时依赖保持外部导入。
- `pnpm build` / `pnpm packages:pack`：CI 按依赖顺序构建并打包 core、compiler、ui；独立消费者显式安装 peer 并验证包边界。

日常本地只运行修改文件 LSP 与少量定点测试。完整类型、构建、两模式和双平台安装消费交给 CI。`@axe-core/playwright` 已作为开发依赖预备，待真实 UI 浏览器夹具建立后接入；当前基础测试不冒充 UI 交互或完整无障碍验收。

详细决策与后续顺序见 [UI 基础计划](../../docs/ui-foundation.md)。
