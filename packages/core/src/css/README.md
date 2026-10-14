# CSS 实现阅读顺序

作者写法仍是 `const s = useCss()`、`s.color('_brand')`、`cx(...)` 和 `bx(...)`。先区分输入检查与运行时描述，再阅读求值和 VNode 生命周期，不需要从生成文件开始。

| 位置                           | 负责什么                                         | 不负责什么                     |
| ------------------------------ | ------------------------------------------------ | ------------------------------ |
| types.ts                       | 属性输入、主题名称、关键字视图与上下文的类型契约 | 不创建对象或缓存               |
| style-value.ts                 | CssClass、声明、组合输入和稳定描述登记           | 不校验主题泛型                 |
| tokens.ts / bindings.ts        | 系统/主题/动态值的运行时标记与读取协议           | 不订阅 Vue，也不插入 CSS       |
| author.ts                      | 共享不可变前缀，追加声明                         | 不再保存主题视图或携带主题泛型 |
| theme.ts                       | 来源校验、按需关键字视图、区域注入与作者复用     | 不跨请求保存主题当前值         |
| composition.ts / resolve.ts    | 有序覆盖、必要值的读取、规则与变量输出           | 不拥有 DOM 或组件生命周期      |
| host.ts / vnode.ts / global.ts | 样式宿主、实际消费与释放                         | 不重新决定作者类型约束         |

## 两个容易混淆的类型

`PropertyValue<Key, T>` 描述该属性可以使用哪些值。`PropertyInput<Key, T, Value>` 还要检查本次调用的实际字面量：

```ts
// Value 捕获本次参数；PropertyValue 限定属性值域；最后的约束检查 _ 开头的主题名。
type PropertyInput<Key extends PropertyName, T extends SystemKeywords, Value> = Value &
  PropertyValue<Key, T> &
  CheckedPropertyValue<Key, T, Value>;
```

这就是 types.ts 中的输入约束。只保留属性联合类型会让 color 的自由字符串同时接受 `_missing`，包括 `bx('_missing')`。泛型 `T extends AppTheme` 也必须保留上界里已知的主题成员，不能随意用条件类型替代 keyof 交集。

`ThemeSource<T>` 同时保留原始实例/Ref 形状和校验后的形状。前者帮助推断 T，后者检查名称与值域；只留下后者会损坏 `createCssContext(shallowRef(new AppTheme()))` 的主题推断。

## 类型检查结束后

属性方法先检查输入，再交给不带主题泛型的 CssAuthor。作者只保存 ThemeResolver 和声明链。主题引用仍记住自己的来源，解析器不需要继续传递 T；`CssBinding<unknown>` 表示此时具体值域已被入口检查，并非把公开输入放宽成 any。

`CssInput` 是 cx 的严格组合输入；`ClassValue` 为 Vue 兼容边界额外接受对象、数字和布尔。两者承担不同职责，不能为了少一个类型而合并。

组合先确定后项覆盖，仅为判断 undefined 回退读取必要候选。解析阶段再组装完整 CSS 值和变量；不能改为先求值所有绑定再做覆盖。主题、绑定、动画与缓存的对象身份也不能在整理时丢失。

generated/ 中的声明、中文说明和属性方法由 scripts/css/generate.mjs 生成。维护生成器与对应类型契约，不手改生成结果；type-only 导入形成的类型引用不会给运行时增加加载依赖。
