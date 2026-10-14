# 数值与日期边界

业务 model 使用 decimal.js 的 Decimal 和 @internationalized/date 的 CalendarDate、Time 等明确类型；应用从原包导入。控件内部保留未完成的输入文本，提交时显式序列化。后续适配集中处理输入、格式化、值比较与舍入，避免通过 Number 丢失精度，不修改 Decimal 全局配置，不另建通用类型插件框架。当前没有公开适配器。
