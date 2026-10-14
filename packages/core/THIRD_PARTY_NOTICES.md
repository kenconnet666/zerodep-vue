# CSS 元数据与说明来源

CSS 属性名称、属性原始类型、固定关键字集合和初始值来自精确固定的 csstype 3.2.3，MIT 许可见 CSSTYPE-LICENSE。生成器使用 TypeScript 6.0.3 读取公开声明，没有编译或静态提取用户的 CSS。

中文说明参考 zerodep-js/scripts/css-author-docs.json，并适配不可变链式属性方法、返回值与示例。该参考项目的 MIT 许可见 ZERODEP-JS-LICENSE。兼容属性的补充说明独立保存在 scripts/css/compat-docs.mjs；完整属性覆盖由生成器断言。

生成的说明进入 TypeScript 源码和声明文件。运行时只使用去重后的系统值表和主题引用，不携带文档说明表。常用关键字解释来自维护的中文词条，兼容值以对应属性说明和标准文档链接为依据。

属性依赖的浏览器支持范围以实际目标环境为准；本项目保留 csstype 的兼容属性，不将旧厂商属性宣传为通用新方案。

2026-10-14 补充的常用值中文说明按下列 MDN 属性参考核对后编写，重点区分尺寸上下限、书写方向、空白与换行、SVG 命中、触摸方向及三维展平；不以短说明替代完整规范或兼容性资料：

- 布局与尺寸：[display](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display)、[min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/min-width)、[max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/max-width)。
- 对齐：[align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items)、[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-content)。
- 文本：[white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/white-space)、[white-space-collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/white-space-collapse)。
- 交互与变换：[pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/pointer-events)、[touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/touch-action)、[transform-style](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transform-style)。
