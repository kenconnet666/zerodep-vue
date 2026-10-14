# 系统关键字、继承主题与泛型

core 不导出默认 useCss/useTheme，也不创建默认上下文。应用在主题模块创建自己的上下文；只需要原生 CSS 值时传入 new SystemKeywords()。业务主题继承 SystemKeywords，再通过 createCssContext(实例或 Vue Ref) 创建带具体类型的上下文。它提供 useCss、provideTheme 和 useTheme；cx、keyframes、globalCss 从根入口独立导入。系统值与主题名统一写字面量，不再提供 keywords 对象视图。

创建上下文只登记来源，作者到首次 useCss 时才建立，映射入口到首次 useTheme 时才建立；已有上级覆盖时不会提前创建默认来源。同一个上下文按来源对象/Ref 的身份弱缓存两者，provideTheme 登记后，子树取得同一作者和映射入口。不同上下文使用独立注入键及缓存。

原生 CSS 字面量无需运行时字典；补全和中文说明保存在生成声明中。主题解析器直接查找实际用到的属性组，按首次访问检查，不为未使用的属性 getter 提前求值。无效来源容器立即报错，Ref 内实例与主题组在实际读取时检查。SystemKeywords 的属性槽仍为纯类型声明，不为每个实例创建 857 个空对象。

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
export const { useCss, provideTheme, useTheme } = createCssContext(currentTheme);

const s = useCss();
const styles = {
  root: s.display('flex').color('_brand').padding('_control'),
};
currentTheme.value = themes.dark;
const button = <button class={styles.root}>保存</button>;
```

主题引用在消费时读取来源，不在定义时冻结颜色。系统关键字直接输出原生值。主题引用使用元素变量，多套实例可共享规则而不共享变量。作者与 useTheme 共用 Vue reactive 读取来源；通过响应式映射修改成员可以更新已有样式。绕过代理直接修改原始对象仍遵循 Vue 的普通对象语义，不会触发更新。

## 区域与请求隔离

主题边界在 setup 调用 provideTheme(区域实例或Ref)，向逻辑子树提供同类型来源；返回作者供当前组件使用，当前组件的映射直接读取自己提供的来源。子组件调用同一主题模块的 useCss()/useTheme() 获取最近的祖先覆盖；与 Vue inject 一样，提供者自己的 hooks 仍读取其祖先。没有覆盖时使用 createCssContext 的默认来源，组件之外也使用默认来源。不同 createCssContext 实例使用不同注入键。

应用在创建主题的模块直接解构并导出自己的 useCss，组件使用 import { useCss } from './theme'，然后只写 const s = useCss()，不在组件里调用主题对象的方法。没有 useCss<AppTheme>() 这种缺少真实来源的类型承诺。createCssContext<AppTheme>() 缺少来源也会被拒绝。

包装主题边界时，普通传参不会自动追踪之后的 prop 替换。若来源 prop 可以从对象切成 Ref，或更换 Ref 容器，在 setup 中写 `provideTheme(computed(() => unref(theme)))`，让 getter 读取最新 prop；只传入初始 `theme` 会保留那次调用的来源。跨模块、嵌套、Teleport 与 SSR 的实际用例见 [私有控件夹具](../fixtures/controls/README.md)，这不引入新的 Provider 产品 API。

SSR 的请求专属主题应在请求根 setup 中 provideTheme，或按请求创建上下文；不要让多个请求改写同一个模块级 Ref。Teleport 使用逻辑组件树来源，不依赖原 DOM 祖先，不向全局 body 注入局部主题。嵌套区域可用 computed 选择父级与覆盖来源。

## 字面量与响应式主题对象

常规样式使用 s.display('inline-flex').backgroundColor('_brand')。系统字面量保留原生 CSS 值；以 _ 开头的完整属性值是主题名，按目标属性查找，颜色属性同时接受共享 color 组，同名时目标属性自身的成员优先。类型检查会拒绝已知的错误主题字面量；运行时字符串和 bx 的结果也会在消费时校验，不把未知名称静默输出成 CSS。

关键词自动补全、中文说明和定义跳转覆盖普通字面量、bx、条件分支与泛型作者。

需要对应映射时使用 useTheme()。主题已知是对象，返回 UnwrapNestedRefs<T>，直接读取 theme.color._brand，不需要外层 .value。属性组由 Vue reactive 按需代理，对象中的 Ref 成员按 Vue 规则自动解包；修改映射会写回当前来源，已有样式也能追踪这些修改。

普通实例直接复用 reactive 代理。来源是可整体替换的 Ref 时，仅增加一层稳定转发，使现有 theme 对象始终读取该区域的最新来源；不建立逐属性或逐关键字的包装对象。切换来源后停止追踪旧主题，成员枚举和写入也指向新来源。

可替换来源的视图不能被 freeze、seal 或 preventExtensions，也不能改写原型或定义不可配置字段；这些操作会锁死转发目标，因此在产生副作用前明确报错。需要固定对象结构时，在实际主题来源上定义约束；可配置的字段定义会转发到当前来源。普通成员赋值与来源替换不受影响。

```tsx
const s = useCss();
const theme = useTheme();
const brand = computed(() => theme.color._brand);

// 普通属性推荐主题名；自定义变量不做主题名解析，显式读取映射并用 bx 保持更新。
const style = s.color('_brand').variable('--brand', bx(theme.color._brand));
```

这里的 computed 从 vue 导入，bx 从 core 导入。直接解构 theme.color 或把成员值保存为普通变量，遵循 JavaScript 当次读取语义；需要跟随来源替换时在 computed/bx 内读取 theme.color._brand。自定义 CSS 变量中的普通字符串（包括 '_brand'）保留原值。原 keywords.color._brand 调用迁移到主题名字面量；若需要固定来源或跨属性组的实际值，明确捕获对应来源并通过 bx 读取。

## 类型与继承

Css<T> 的属性方法与 useTheme() 的响应式对象保留同一主题约束。共享样式工具接收 s: Css<T>，主题 T 可继续 extends AppTheme；需要映射的业务工具接收 UnwrapNestedRefs<T>。主题来源仍允许 T 或 Ref<T>；来源成员可以是 Ref，读取对象后则使用解包后的值类型。组合接收已经检查的 CssClass/CssInput，不重复携带主题泛型，也不依靠全局 module augmentation。

主题成员使用 _ 前缀，不能覆盖原生 CSS 关键字。颜色主题建议集中放在 color 组，可以用于 color、backgroundColor、borderColor 等 72 个兼容位置，其主题名不能用于 padding。原生值沿用该属性的 csstype 输入边界：封闭属性拒绝错误值，允许自由字符串的属性仍接受字符串；这里没有新增完整 CSS 语法类型检查器。

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

固定生成器覆盖 857 个真实属性方法，按 14 类组织 @category 文档。属性方法说明用途、常用值、规范初始值和易错点，原生字面量与主题成员保留中文 JSDoc。原生值直接使用 'inline-flex'、'currentColor'、'revert-layer'、'preserve-3d' 等 CSS 拼写，不再生成 camelCase 成员映射。

生成器借鉴 zerodep-js 的简短输入别名，属性方法统一使用 PropertyInput；原生数值与自由字符串范围在生成时展开，关键字注释只维护一份，主题名称与 bx 仍参与检查。规范初始值和继承标记取自固定 mdn-data，简写属性展开子属性初始值；数据缺项时明确说明，不混同浏览器默认样式表。

属性注释统一采用下面的格式，不生成 @example：

```ts
/**
 * 设置动画在有效播放区间之外是否应用关键帧样式。
 *
 * 常用值：`none`、`forwards`、`backwards`、`both`。
 *
 * @default:'none'
 * @extend:'否'
 */
```

@default 表示 CSS 规范初始值，不是方法默认参数或浏览器样式表值；@extend 是自定义的 CSS 继承性标记，不参与 TypeScript 类继承。缺少数据时省略对应标签，不用“否”代替未知。常用值是说明用的精选列表，不限制属性的真实类型范围。

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
