# 表单与校验

直接接收和使用 Zod 4 原生 schema；应用从 zod 显式导入，不建立 Standard Schema、Valibot 兼容层或另一套规则 DSL。字段值保持单一 Ref 来源，后续实现登记、dirty/touched、异步校验失效、reset 和提交。校验输入与转换后输出分开，不能用后台校验悄悄覆盖编辑中的值。当前没有 Form/Field API。
