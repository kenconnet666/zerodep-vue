# 系统关键字、继承主题与泛型

默认 keywords 具有系统关键字，没有业务主题名。createCss 将主题类型与真实实例或 Vue Ref 一起绑定，返回可按需解构的 CssContext<T>。css、cx、keywords 以及需要主题约束的 keyframes、createTheme、globalCss 共享同一个 T；defineVars 不依赖主题来源，直接从包导入。主题成员使用 _ 前缀，避免覆盖系统值。

```tsx
import { shallowRef } from 'vue';
import { SystemKeywords, createCss } from '@zerodep-vue/css';

class AppTheme extends SystemKeywords {
  override readonly color = {
    /** 品牌主色，用于强调内容。 */
    _brand: '#2563eb',
  };
  override readonly padding = {
    /** 常规控件的纵向与横向内边距。 */
    _control: '8px 12px',
  };
}

const theme = shallowRef(new AppTheme());
const { css, cx, keywords } = createCss<AppTheme>(theme);
const styles = cx({
  root: {
    display: keywords.display.flex,
    color: keywords.color._brand,
    padding: keywords.padding._control,
    ':hover': { borderColor: keywords.color._brand },
  },
});
```

`createCss(new AppTheme())` 可推断 T；显式泛型适用于固定库边界。仅写 `createCss<AppTheme>()` 没有真实来源会被拒绝。Css<T>、Cx<T>、CssContext<T>、CssObject<T> 和嵌套条件保留主题约束，不使用全局 module augmentation。

系统关键字引用是固定值，在 CSS 中直接发射。主题引用在消费时读取真实来源，并使用元素级变量。替换 theme.value 会更新实际消费元素，定义 styles 时不会冻结初始颜色。普通非响应式主题对象仍遵循 JavaScript；需要自动更新时使用 Vue 的 ref/reactive。成员值也可以使用 Vue Ref。

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

主题来源属于每个 createCss 作者；没有全局可变的“当前主题”。多个区域可以使用不同来源，Teleport 中的元素继续消费原来绑定的主题来源。SSR 每次请求分别收集规则，变量值写入相应内容，而不是依赖原 DOM 祖先或写入全局 body。

嵌套区域可以用 Vue provide/inject 传递实际主题 Ref，再用 computed 选择当前覆盖或父级来源，最后交给 createCss。这样未覆盖区域跟随父主题，覆盖区域保持独立；Teleport 仍使用逻辑组件树中的来源。若 prop 中的 Ref 本身也可能被替换，在 computed 中读取该 prop 的 .value，可同时跟随容器替换和值更新，无需新增主题组件协议。

属性、系统关键字和主题成员提供 JSDoc。T 以 SystemKeywords 为基础，KeywordView<T> 合并系统视图与 T 的继承主题成员；`T extends AppTheme` 的共享函数也保留系统关键字、主题成员及成员注释。对象、具名样式、嵌套条件和组件外部 `CssInput<T>` 都使用同一 T，默认系统作者仍拒绝未声明的主题引用。

当前生成器覆盖 857 个属性，按布局、尺寸、间距、排版等 14 类组织类型与 @category 文档；厂商和历史属性独立归入兼容类，作者对象仍然使用标准 camelCase 属性。关键字类型使用 DisplayKeywords 等语义命名，共享 CSS-wide、命名颜色和系统颜色定义。成员使用 inlineFlex、currentColor、revertLayer 等规范化拼写，不重复提供连字符别名；原生 CSS 字符串继续接受原始拼写。72 个单色兼容属性仍由固定类型数据生成。

属性文档提供中文用途、常用值、规范初始值与对象 API 示例。旧链式示例不进入新声明。源码和生成文件由固定依赖复现，说明与许可来源见 CSS 包的 THIRD_PARTY_NOTICES.md。发布声明中的泛型、成员补全详情及定义跳转由独立包消费者在远程验证。
