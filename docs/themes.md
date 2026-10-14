# 系统关键字、继承主题与泛型

默认 useCss() 返回只具备系统关键字的不可变作者。业务主题继承 SystemKeywords，再通过 createTheme(实例或 Vue Ref) 创建带具体类型的上下文。它提供 useCss、provide 和独立的 keywords 视图；cx、keyframes、globalCss 从根入口独立导入。

```tsx
import { shallowRef } from 'vue';
import { SystemKeywords, createTheme } from '@zerodep-vue/core';

class AppTheme extends SystemKeywords {
  override readonly color = {
    /** 品牌主色，用于强调内容。 */
    _brand: '#2563eb',
  };
  override readonly padding = {
    /** 常规控件的纵向与横向内边距。 */
    _control: '8px 12px',
  };
  constructor(brand = '#2563eb') {
    super();
    this.color._brand = brand;
  }
}

const themes = { light: new AppTheme(), dark: new AppTheme('#93c5fd') };
const currentTheme = shallowRef(themes.light);
export const appTheme = createTheme(currentTheme);
export const keywords = appTheme.keywords;
// 应用主题模块负责封装，组件从这个模块导入 useCss。
export function useCss() {
  return appTheme.useCss();
}

const s = useCss();
const styles = {
  root: s.display('flex').color('_brand').padding('_control'),
};
currentTheme.value = themes.dark;
const button = <button class={styles.root}>保存</button>;
```

主题引用在消费时读取来源，不在定义时冻结颜色。系统关键字直接输出原生值。主题引用使用元素变量，多套实例可共享规则而不共享变量。普通非响应式对象保持 JavaScript 语义，主题成员也可用 Vue Ref。

## 区域与请求隔离

组件 setup 调用 appTheme.provide(区域实例或Ref)，向逻辑子树提供同类型作者；返回值供当前组件使用。子组件调用该 appTheme 的 useCss() 获取最近的覆盖。没有覆盖时使用 createTheme 的默认来源，组件之外也使用默认来源。不同 createTheme 实例使用不同注入键。

应用在创建主题的模块封装并导出自己的 useCss，组件使用 import { useCss } from './theme'，然后只写 const s = useCss()，不在组件里调用主题对象的方法。没有 useCss<AppTheme>() 这种缺少真实来源的类型承诺。createTheme<AppTheme>() 缺少来源也会被拒绝。

SSR 的请求专属主题应在请求根 setup 中 provide，或按请求创建上下文；不要让多个请求改写同一个模块级 Ref。Teleport 使用逻辑组件树来源，不依赖原 DOM 祖先，不向全局 body 注入局部主题。嵌套区域可用 computed 选择父级与覆盖来源。

## 字面量与独立关键字视图

常规样式使用 s.display('inline-flex').backgroundColor('_brand')。系统字面量保留原生 CSS 值；以 _ 开头的完整属性值是主题名，按目标属性查找，颜色属性同时接受共享 color 组，同名时目标属性自身的成员优先。类型检查会拒绝已知的错误主题字面量；运行时字符串和 bx 的结果也会在消费时校验，不把未知名称静默输出成 CSS。

关键词自动补全、中文说明和定义跳转覆盖普通字面量、bx、条件分支与泛型作者。无需手写 keywords 路径才能获得提示。

需要显式引用时使用独立的 keywords，例如从 core 导入系统 keywords，或从 createTheme 的结果解构业务 keywords。显式引用固定指向创建该视图的来源；区域继承使用 useCss 取得的作者及主题字面量，不用默认来源的显式引用替代区域覆盖。自定义 CSS 变量中的普通字符串保留原值。

## 类型与继承

Css<T> 的属性方法和独立 KeywordView<T> 保留同一主题约束。共享工具接收 s: Css<T>，主题 T 可继续 extends AppTheme。组合接收已经检查的 CssClass/CssInput，不重复携带主题泛型，也不依靠全局 module augmentation。

主题成员使用 _ 前缀，系统成员不能被覆盖。颜色主题建议集中放在 color 组，可以用于 color、backgroundColor、borderColor 等 72 个兼容位置，不能作为 padding。系统引用也按目标属性允许的关键字集合检查；普通 CSS 字符串继续可用。

```ts
class DarkTheme extends AppTheme {
  override readonly color = {
    ...new AppTheme().color,
    _brand: '#93c5fd',
    /** 危险操作的强调色。 */
    _danger: '#f87171',
  };
}
```

类字段覆盖遵循普通 TypeScript/JavaScript 语义，覆盖整组时显式保留基础成员；不隐式合并。基础主题有构造资源时按正常代码组织共享值，不为合并重复创建实例。

## 补全与中文说明

固定生成器覆盖 857 个真实属性方法，按 14 类组织 @category 文档。属性方法说明用途、常用值、规范初始值和易错点，系统/主题成员保留中文 JSDoc。规范化成员使用 inlineFlex、currentColor、revertLayer、preserve3d 等点访问拼写；属性方法的字符串仍接受原生连字符拼写。

TypeScript 6 不自动为普通字符串候选附上对应成员注释。编辑器扩展根据真实链式方法的 PropertyValue 声明读取字面值词典，补充 hover、补全详情和定义跳转；不会修改诊断、输出或普通业务方法。

```tsx
s.display(active ? 'inline-flex' : 'none')
  .position(bx(active ? 'relative' : 'static'))
  .boxSizing('border-box' as const);
```

括号、satisfies、非空断言、条件结果分支、bx 别名和命名空间访问均保持属性上下文。业务同名方法、非 bx 包装函数、可重新赋值的别名、条件本身和字符串拼接保持原生服务行为。空字符串和未完成输入也提供属性候选。

```json
{
  "compilerOptions": {
    "plugins": [{ "name": "@zerodep-vue/compiler/src/editor/plugin.cjs" }]
  }
}
```

仓库已在 tsconfig 与独立 LSP 启动中配置。编辑器更新扩展后需重新加载 TypeScript 服务；源码及打包声明分别验证。MCP 成功不代表 IDE 服务已经刷新；声明与编辑器扩展不由 CSS 浏览器入口加载。
