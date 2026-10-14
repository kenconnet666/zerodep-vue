# 系统关键字、继承主题与泛型

主题只有一种：用户继承 SystemKeywords，声明自己的主题关键字，创建多套实例使用。createTheme 接收主题实例或 Vue Ref，返回可按需解构的 CssContext<T>；css、cx、keywords、keyframes、globalCss 共享同一个 T。主题成员使用 _ 前缀，避免覆盖系统值。默认导入的 keywords 只有系统关键字。

```tsx
import { shallowRef } from 'vue';
import { SystemKeywords, createTheme } from '@zerodep-vue/css';

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

const themes = {
  light: new AppTheme(),
  dark: new AppTheme('#93c5fd'),
};
const currentTheme = shallowRef(themes.light);
const { css, cx, keywords } = createTheme(currentTheme);
const styles = cx({
  root: {
    display: keywords.display.flex,
    color: keywords.color._brand,
    padding: keywords.padding._control,
    ':hover': { borderColor: keywords.color._brand },
  },
});

// 切换现成实例，已定义的 styles 自动读取当前主题。
currentTheme.value = themes.dark;
const button = <button class={css(styles.root)}>保存</button>;
```

`createTheme(new AppTheme())` 可推断 T；显式泛型适用于固定库边界。仅写 `createTheme<AppTheme>()` 没有真实来源会被拒绝。Css<T>、Cx<T>、CssContext<T>、CssObject<T> 和嵌套条件保留主题约束，不使用全局 module augmentation。

系统关键字引用是固定值，在 CSS 中直接发射。主题引用在消费时读取真实来源，并使用元素级变量。替换 currentTheme.value 会更新实际消费元素，定义 styles 时不会冻结初始颜色。多套实例共享同一个 AppTheme 约定，不需要注册名称或重新定义样式。固定主题直接传 `createTheme(themes.light)`；响应式切换传 Vue Ref。普通非响应式对象仍遵循 JavaScript；成员值也可以使用 Vue Ref。

颜色主题建议集中放在 color 组，可在 color、backgroundColor、borderColor 等兼容位置复用。兼容位置由固定属性类型中的颜色取值生成，不把所有字符串型属性混为同一组；例如颜色主题不能用作 padding。系统引用也按目标属性实际允许的关键字集合检查，普通 CSS 字符串输入仍然可用。

类继承遵循 TypeScript/JavaScript 的正常语义。继承而未覆盖的属性组自然保留；重写整个对象字段时，明确合并要保留的基础成员：

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

这里不隐式改变类字段覆盖规则。如果基础主题有构造参数或资源，按普通业务代码组织基础值，不为了合并对象重复创建不必要的实例。

主题来源属于每个 createTheme 作者；没有全局可变的“当前主题”。多个区域可以使用不同来源，Teleport 中的元素继续消费原来绑定的主题来源。SSR 每次请求分别收集规则，变量值写入相应内容，而不是依赖原 DOM 祖先或写入全局 body。

嵌套区域可以用 Vue provide/inject 传递实际主题 Ref，再用 computed 选择当前覆盖或父级来源，最后交给 createTheme。这样未覆盖区域跟随父主题，覆盖区域保持独立；Teleport 仍使用逻辑组件树中的来源。若 prop 中的 Ref 本身也可能被替换，在 computed 中读取该 prop 的 .value，可同时跟随容器替换和值更新，无需新增主题组件协议。

属性、系统关键字和主题成员提供 JSDoc。T 以 SystemKeywords 为基础，KeywordView<T> 合并系统视图与 T 的继承主题成员；`T extends AppTheme` 的共享函数也保留系统关键字、主题成员及成员注释。对象、具名样式、嵌套条件和组件外部 `CssInput<T>` 都使用同一 T，默认系统作者仍拒绝未声明的主题引用。

当前生成器覆盖 857 个属性，按布局、尺寸、间距、排版等 14 类组织类型与 @category 文档；厂商和历史属性独立归入兼容类，作者对象仍然使用标准 camelCase 属性。分组规则检查重复命中，避免依靠顺序吞掉更具体的分类；anchorName、positionArea、positionTry 等锚点定位属性统一归入布局与定位类，columnGap 归入间距类。关键字类型使用 DisplayKeywords 等语义命名，共享 CSS-wide、命名颜色和系统颜色定义。成员使用 inlineFlex、currentColor、revertLayer、preserve3d 等规范化拼写，不重复提供连字符别名；原生 CSS 字符串继续接受原始拼写。72 个单色兼容属性仍由固定类型数据生成。

命名修订：原来的 `keywords.transformStyle['preserve-3d']` 改为 `keywords.transformStyle.preserve3d`，厂商前缀属性的对应成员同步调整。普通对象仍写 `transformStyle: 'preserve-3d'`。生成器同时检查成员可用于点访问及规范化后的重名冲突。

属性文档提供中文用途、常用值、规范初始值与对象 API 示例。旧链式示例不进入新声明。源码和生成文件由固定依赖复现，说明与许可来源见 CSS 包的 THIRD_PARTY_NOTICES.md。发布声明中的泛型、成员补全详情及定义跳转由独立包消费者在远程验证。

## 普通字面量的编辑体验

`css({ font: 'inherit', display: 'inline-flex' })`、cx、嵌套条件和泛型作者的普通字符串同样保留属性级候选。生成器通过带中文 JSDoc 的具体值成员及 keyof 连接字面量类型。同名系统成员由关键词视图投影原声明，inherit 等只有一个定义；inline-flex 与 inlineFlex 这类不同拼写保留各自明确的入口。开放字符串和数值范围沿用原属性类型，不为提示放宽封闭属性。

TypeScript 6 的原生服务没有自动为这些字符串候选返回成员注释。包提供编辑器专用的语言服务扩展，按当前 Program 中的真实 CSS 属性类型找到值声明，补充 hover、补全详情和定义位置。它不修改诊断、类型检查或 JavaScript 输出，也不接管普通业务对象。使用包的工程可在 tsconfig 中启用：

```json
{
  "compilerOptions": {
    "plugins": [{ "name": "@zerodep-vue/css/language-service" }]
  }
}
```

属性值中的括号、`as const`、`satisfies`、非空断言、三元表达式的结果分支和 `bx(...)` 也保留字面量编辑能力。空字符串、尚未写完的字符串同样可以取得属性候选。比如：

```tsx
css({
  display: active ? 'inline-flex' : 'none',
  position: bx(active ? 'relative' : 'static'),
  boxSizing: 'border-box' as const,
});
```

`bx` 按本库声明身份识别，支持导入别名、命名空间访问及 const 函数别名。业务同名函数、仅标注为 `typeof bx` 的包装函数和可重新赋值的别名不会被接管。三元条件本身、字符串拼接片段及其他函数参数也保持原生服务行为。编辑器补充候选不放宽属性类型，错误值仍由 TypeScript 报错；泛型作者继续沿用同一个 T 的主题成员和属性约束。

本仓库已在 tsconfig.base.json 和独立 LSP 启动配置中启用。编辑器首次加载或更新扩展后，需要重新加载 TypeScript 服务；源码与安装包分别验证，不能把 MCP 的 stdio 成功直接当成 IDE 提示已刷新。声明、注释和扩展不由 CSS 的浏览器运行入口导入。
