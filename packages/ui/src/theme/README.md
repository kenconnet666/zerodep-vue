# 语义主题

后续在这里定义继承 SystemKeywords 的组件库基础主题，使用 core 根入口 createCssContext，直接导出自有 useCss、provideTheme 和 useTheme。组件统一 const s = useCss()，样式使用主题名字面量；需要当前区域的原始主题映射时使用 useTheme()，动态映射值通过 bx 读取。不重新导出 core 本身，也不在本轮提前固定产品配色、尺寸或组件 token。
