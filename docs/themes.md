# 系统关键字、继承主题与泛型

core 不导出 useCss 或 keywords，也不创建默认上下文。应用在主题模块创建自己的上下文；只需要系统关键字时传入 new SystemKeywords()。业务主题继承 SystemKeywords，再通过 createCssContext(实例或 Vue Ref) 创建带具体类型的上下文。它提供 useCss、provideTheme 和独立的 keywords 视图；cx、keyframes、globalCss 从根入口独立导入。

```tsx
import { shallowRef } from 'vue';
import { SystemKeywords, createCssContext } from '@zerodep-vue/core';

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
export const { useCss, provideTheme, keywords } = createCssContext(currentTheme);

const s = useCss();
const styles = {
  root: s.display('flex').color('_brand').padding('_control'),
};
currentTheme.value = themes.dark;
const button = <button class={styles.root}>保存</button>;
```

主题引用在消费时读取来源，不在定义时冻结颜色。系统关键字直接输出原生值。主题引用使用元素变量，多套实例可共享规则而不共享变量。普通非响应式对象保持 JavaScript 语义，主题成员也可用 Vue Ref。

## 区域与请求隔离

主题边界在 setup 调用 provideTheme(区域实例或Ref)，向逻辑子树提供同类型作者；返回值供当前组件使用。子组件调用从同一主题模块导入的 useCss() 获取最近的覆盖。没有覆盖时使用 createCssContext 的默认来源，组件之外也使用默认来源。不同 createCssContext 实例使用不同注入键。

应用在创建主题的模块直接解构并导出自己的 useCss，组件使用 import { useCss } from './theme'，然后只写 const s = useCss()，不在组件里调用主题对象的方法。没有 useCss<AppTheme>() 这种缺少真实来源的类型承诺。createCssContext<AppTheme>() 缺少来源也会被拒绝。

包装主题边界时，普通传参不会自动追踪之后的 prop 替换。若来源 prop 可以从对象切成 Ref，或更换 Ref 容器，在 setup 中写 `provideTheme(computed(() => unref(theme)))`，让 getter 读取最新 prop；只传入初始 `theme` 会保留那次调用的来源。跨模块、嵌套、Teleport 与 SSR 的实际用例见 [私有控件夹具](../fixtures/controls/README.md)，这不引入新的 Provider 产品 API。

SSR 的请求专属主题应在请求根 setup 中 provideTheme，或按请求创建上下文；不要让多个请求改写同一个模块级 Ref。Teleport 使用逻辑组件树来源，不依赖原 DOM 祖先，不向全局 body 注入局部主题。嵌套区域可用 computed 选择父级与覆盖来源。

## 字面量与独立关键字视图

常规样式使用 s.display('inline-flex').backgroundColor('_brand')。系统字面量保留原生 CSS 值；以 _ 开头的完整属性值是主题名，按目标属性查找，颜色属性同时接受共享 color 组，同名时目标属性自身的成员优先。类型检查会拒绝已知的错误主题字面量；运行时字符串和 bx 的结果也会在消费时校验，不把未知名称静默输出成 CSS。

关键词自动补全、中文说明和定义跳转覆盖普通字面量、bx、条件分支与泛型作者。无需手写 keywords 路径才能获得提示。

需要显式引用时使用独立的 keywords，从应用主题模块导入 keywords，该模块从 createCssContext 的结果解构并导出视图。显式引用固定指向创建该视图的来源；区域继承使用 useCss 取得的作者及主题字面量，不用默认来源的显式引用替代区域覆盖。自定义 CSS 变量中的普通字符串保留原值。

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

生成器借鉴 zerodep-js 的简短输入别名，属性方法统一使用 PropertyInput；原生数值与自由字符串范围在生成时展开，关键字注释只维护一份，主题名称与 bx 仍参与检查。规范初始值和继承标记取自固定 mdn-data，简写属性展开子属性初始值；数据缺项时明确说明，不混同浏览器默认样式表。

TypeScript 6 不自动为普通字符串候选附上对应成员注释。编辑器扩展根据真实生成方法读取字面值词典和公开 Css<T> 的主题参数，补充 hover、补全详情和定义跳转；不会修改诊断、输出或普通业务方法。主题说明不依赖发布声明中被擦除类型的私有字段。

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

WebStorm 同时拥有自身类型引擎和 TypeScript language service。若 Ctrl+B 仍将 inherit 匹配到无关依赖中的同名字段，可检查 TypeScript 设置中的 Enable service-powered type engine，并使用项目 TypeScript 6.0.3；这是待实测的 IDE 路径，不以插件的单目标结果替代 IDE 验收。参见 [JetBrains 官方说明](https://www.jetbrains.com/help/webstorm/settings-languages-typescript.html)。
