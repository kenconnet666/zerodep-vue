# 第三方依赖边界

本包源码使用 MIT。下面的能力由使用方显式安装的 peer 包提供，不复制其实现，不从 UI 根入口重新导出。

| 包                      | 许可       | 用途                         |
| ----------------------- | ---------- | ---------------------------- |
| @floating-ui/dom        | MIT        | 浮层几何定位                 |
| @internationalized/date | Apache-2.0 | 强类型日期、时间和日历运算   |
| @lucide/icons           | ISC        | 原始图标节点数据             |
| decimal.js              | MIT        | 精确十进制类型与运算         |
| tabbable                | MIT        | DOM 可聚焦元素判断           |
| zod                     | MIT        | 原生 Zod 4 schema 校验       |
| vue / @zerodep-vue/core | MIT        | Vue VDOM 与 TSX/CSS 运行能力 |

各依赖自己的 LICENSE/NOTICE 仍属于对应包。后续若复制或生成含 Lucide 资源的文件，须保留其来源与必要的许可声明；当前没有内嵌图标资源。开发期的 @axe-core/playwright 不进入运行时包。

来源：[Floating UI](https://github.com/floating-ui/floating-ui)、[Adobe 日期工具](https://github.com/adobe/react-spectrum)、[Lucide](https://github.com/lucide-icons/lucide)、[decimal.js](https://github.com/MikeMcl/decimal.js)、[tabbable](https://github.com/focus-trap/tabbable)、[Zod](https://github.com/colinhacks/zod)。
