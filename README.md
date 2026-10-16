# zerodep-vue

Vue VDOM TSX 编译器、运行时 CSS 和自有 UI 组件库。仅维护 Vue VDOM，不扩展模板编译或其他 renderer。

## 工程

- `packages/compiler`：官方 Vue JSX v3.0.0 源码 fork、Babel/Vite 接入和编辑器扩展；来源记录在 `upstream.json`。
- `packages/core`：`_component`、`For`、运行时 CSS、继承主题、HMR 与 DevTools 接线。
- `packages/ui`：组件库及其集成测试；已提供 Provider、主题与语言、文字图标、布局、按钮、滑轨、滚动、折叠、浮层和站点导航组件，详见下文。
- `packages/core/scripts/css`：CSS 生成和体积检查；各包的测试配置及命令由本包维护。
- `scripts/pack.mjs`：工作区打包；`scripts/build-utils.mjs` 提供打包、CSS 和 UI 构建共用的文件遍历及命令执行。
- `scripts/lsp`：项目语言服务、MCP 桥接和配置生成。

三个包都通过根入口使用。UI 依赖 core，业务组件不进入 core/compiler；第三方能力通过显式 peer 依赖使用，不从 UI 重新导出。

## 环境与接入

Node 和 pnpm 版本以根 `package.json` 为准，子包不重复声明。依赖由 `pnpm-workspace.yaml` 的单一 catalog 和唯一的 `pnpm-lock.yaml` 固定。

```powershell
pnpm install --frozen-lockfile
```

Vite 使用 `@zerodep-vue/compiler` 的命名导出 `vitePlugin`，Babel 使用同一入口的 `babelPlugin`。不要叠加另一份 Vue JSX 转换。

```ts
import { defineConfig } from 'vite';
import { vitePlugin } from '@zerodep-vue/compiler';

export default defineConfig({ plugins: [vitePlugin()] });
```

状态直接使用 Vue API。应用主题模块从 `createCssContext(source)` 解构导出 `useCss`、`provideTheme`、`useTheme`；组件内统一写 `const s = useCss()`，样式通过 `class` 传入。

`_component` 从声明变量名自动生成组件名，默认关闭 Vue 的隐式属性透传。作者 setup 只接收一个 Props 参数，参数解构后的剩余 Props 统一命名 `rest`，通过 `{...rest}` 或逐项赋值决定传给哪个节点；原生属性也包含在同一个 Props 只读视图中。状态传可写 Ref，事件传回调，内容传 children 或明确的渲染函数；不公开 emit、Vue slots、expose 或组件实例。DOM 引用通过 `elementRef/inputRef/viewportRef` 等普通 Props 接收，再传给内部原生节点的 ref。`key` 和 VNode 生命周期保留 Vue 语义；原生元素和普通 Vue 组件仍可使用 Vue 自己的 ref、slots 与模型指令。无需重复写 `{ name: 'Provider', inheritAttrs: false }`；`_component` 的第二参数是组件选项，只有明确需要 Vue 自动透传时才显式设为 `inheritAttrs: true`。

```tsx
import { _component, createCssContext, SystemKeywords } from '@zerodep-vue/core';

const { useCss } = createCssContext(new SystemKeywords());

export const Example = _component(() => {
  const s = useCss();
  return <div class={s.display('inline-flex').padding(12)}>内容</div>;
});
```

系统值和主题名使用字面量；`useTheme()` 返回当前区域的 reactive 对象。动态样式显式使用 `bx`，编译器负责内联 style 接线；`cx` 只负责有序组合，不新增 JSX 样式属性。

CSS 方法先通过普通重载接收已知关键字和主题名，使 `s.overflow('hidden')` 定位到 `OverflowValues.hidden`，`s.color('_primaryHover')` 定位到当前主题的成员说明。自由 CSS 值、数字、`bx` 和模板仍通过泛型重载检查，未知 `_` 主题名继续报错，不需要导入值常量。

WebStorm 2026.3 实测需要在 **Settings → Languages & Frameworks → TypeScript → Vue** 关闭 **Enable service-powered type engine**，保留语言服务和项目 TypeScript 6.0.3，才能让 IDE 的字面量跳转和悬浮保留 `keyof` 声明来源。语言服务返回唯一结果不代表 IDE 的解析也已正确；修改后需在真实使用位置检查跳转和中文注释。

`_component` 支持 async setup：先在初始化阶段完成 `await`，再返回 JSX；返回分支及其后的渲染代码必须同步执行。嵌套的 async 事件回调保留正常 JavaScript 语义。`bx` 也同步读取值，异步结果应先取得或写入 Vue 状态，不能直接把 `await`、`yield` 放进绑定表达式。

普通 helper 的 `return` 不划分组件渲染边界；具名 setup 保留声明处的词法环境及普通调用语义。初始化阶段捕获的函数可以使用同一 setup 的提升声明，但不能跨边界捕获每次渲染新建的 `let`、`const` 或 class；这类代码会得到 `ZV_RENDER_SCOPE`，应把 helper 与其依赖放在同一阶段。编译器也识别直接导入及不可变 `const` helper 别名，按真实绑定区分同名变量，不跟随可变或循环别名。

## UI Provider

`Provider` 渲染一个 `div`，通过 Vue 组件树向下传递 `theme` 和 `lang`。消费配置与 `children` 后，其余 Props 通过 `...rest` 显式转发到根 div，包括原生属性、事件、`style` 和支持链式 CSS 的 `class`。`lang` 是 UI 语言配置，不作为 HTML 的 lang 属性透传；嵌套 Provider 会产生嵌套 div。默认使用白色主题 `LightTheme`、简体中文 `zhCN` 和上海时区 `Asia/Shanghai`。后代在 setup 中调用 UI 包的 `useCss()`、`useTheme()` 和 `useLang()`；主题和语言都是稳定的只读 reactive 对象，直接读取字段，无需 `.value`。

实现位于 `packages/ui/src/config`：`Provider.tsx` 集中管理上下文注入、读取和配置继承；`lang/` 收纳语言配置和类型；`theme/types.ts` 定义统一 `UiTheme` 接口，`BaseTheme` 提供公共值，`LightTheme`、`DarkTheme` 继承它并显式 `implements UiTheme`。所有主题必须提供完整配色和阴影，公共属性组属于各自实例。

```tsx
import { reactive } from 'vue';
import { _component } from '@zerodep-vue/core';
import {
  Provider,
  LightTheme,
  DarkTheme,
  enUS,
  zhCN,
  useCss,
  useLang,
  useTheme,
} from '@zerodep-vue/ui';

class BrandTheme extends LightTheme {
  override readonly color = {
    ...new LightTheme().color,
    _primary: '#7c3aed',
    _primaryHover: '#6d28d9',
    _primaryPressed: '#5b21b6',
    _primarySubtleBackground: '#f5f3ff',
    _primaryBorder: '#ddd6fe',
    _textOnPrimary: '#ffffff',
    _textSelected: '#6d28d9',
    _surfaceSelected: '#ede9fe',
    _borderSelected: '#7c3aed',
    _focusRing: '#7c3aed',
  };
}

const Status = _component(() => {
  const s = useCss();
  const theme = useTheme();
  const lang = useLang();
  return (
    <output class={s.color('_primary')} data-primary={theme.color._primary}>
      {lang.confirm} / {lang.locale} / {lang.timeZone}
    </output>
  );
});

export const App = _component(() => {
  const theme = reactive(new BrandTheme());
  const darkTheme = reactive(new DarkTheme());
  const lang = reactive({ ...zhCN });
  return (
    <Provider theme={theme} lang={lang}>
      <Status />
      <Provider theme={darkTheme} lang={enUS}>
        <Status />
      </Provider>
    </Provider>
  );
});
```

外层使用自定义白色主题，显示 `确认 / zh-CN / Asia/Shanghai`；内层使用暗色主题，显示 `Confirm / en-US / UTC`。`zhCN` 和 `enUS` 都是完整且不可修改的语言预设，包含 `confirm`、`cancel`、`clear`、`loading`、`locale`、`timeZone`；复制为自己的对象后可以修改。切换 `lang={enUS}`，或对自己的 reactive 对象执行 `Object.assign(lang, enUS)`，会同时切换文案、区域和时区；需要其他时区时在同一个对象中改写 `timeZone`。

嵌套配置遵循以下规则：

- `theme` 接收完整主题或 `UiThemeInput` 局部配置，例如 `theme={{ color: { _primary: '#7c3aed' } }}`。只覆盖写出的主题名，组内其他字段和其他属性组继续跟随父级。完整 `LightTheme`、`DarkTheme` 实例带齐所有字段，可完成整套切换；新主题可继承它们，也可以继承 `BaseTheme` 并实现 `UiTheme`。
- `lang` 接收完整配置或 `UiLanguageInput` 局部字段，如 `lang={{ confirm: '保存', timeZone: 'UTC' }}`。未设置的文案、区域和时区继续跟随父级，文案允许空字符串。
- `theme` 和 `lang` 都支持对象、Ref 和 computed。省略、删除字段或设为 `undefined` 会恢复对应的父级值；主题的整个属性组也可设为 `undefined`。整个 prop 或来源 Ref 的值设为 `undefined` 时恢复全部继承。根区域使用默认白色主题和简体中文上海时区配置。
- 所有语言字段直接从 `useLang()` 返回值读取：`lang.confirm`、`lang.locale`、`lang.timeZone`。没有 Provider 时使用 `zhCN`；Provider 只继承和传递配置，格式化由使用这些字段的组件负责。
- 调用方可修改自己的 reactive 配置或 Ref；后代只读视图不能反向修改来源。保留视图并在渲染或 computed 中读字段，直接解构出的普通值仍是 JavaScript 快照。

`Provider` 只覆盖 UI 包的 CSS 上下文。应用自行创建的 `createCssContext` 独立管理；在父组件 setup 中取得的主题或样式作者也不会被其返回 JSX 内部的 Provider 改写。Teleport 按 Vue 的逻辑组件树继承配置。SSR 每次请求使用自己的配置来源，首屏 hydration 使用相同值。

例如下面内层只改品牌色和确认文案，背景、文字颜色继续使用暗色主题，取消文案、区域和时区继续使用 `enUS`。父级换主题时，内层未覆盖的字段会同步更新。

```tsx
<Provider theme={new DarkTheme()} lang={enUS}>
  <Provider theme={{ color: { _primary: '#7c3aed' } }} lang={{ confirm: '保存' }}>
    <Status />
  </Provider>
</Provider>
```

公共主题变量参考了 [Naive UI 的公共明暗主题](https://github.com/tusen-ai/naive-ui/tree/main/src/_styles/common)、[Radix 的颜色角色](https://www.radix-ui.com/themes/docs/theme/color)、[MUI 的语义配色](https://mui.com/material-ui/customization/palette/)与[间距](https://mui.com/material-ui/customization/spacing/)、[Element Plus 的公共变量](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss)，沿用本项目的 CSS 属性分组和 `_` 名称。具体值由本项目定义，无新增运行时依赖。

| 分组                                                       | 提供的内容                                                                                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `color`                                                    | 主操作、信息、成功、警告、危险的默认/悬停/按下/低强调背景/边框/配对文字色；文字、表面、选中、焦点、遮罩和滚动条层级 |
| `fontFamily`、`fontSize`、`fontWeight`、`lineHeight`       | 界面/等宽字体、0.75–1.5rem 字号、四档字重和三档无单位行高                                                           |
| `height`、`minHeight`                                      | em 控件尺寸；14px 字号下对应原设计的 24、28、32、40、48px                                                           |
| `padding`、`margin`、`gap`、`rowGap`、`columnGap`          | em 间距；14px 字号下对应原设计的 0、4、8、12、16、24、32px；各属性组独立修改                                        |
| `borderRadius`、`borderWidth`、`boxShadow`、`opacity`      | em 圆角、边框、阴影，以及无单位的禁用透明度                                                                         |
| `strokeWidth`                                              | SVG 图形坐标中的描边宽度：`_thin` 为 1、`_medium` 为 2、`_thick` 为 3；不换算为 em                                  |
| `transitionDuration`、`transitionTimingFunction`、`zIndex` | 三档时长、进入/离开曲线和基础浮层顺序                                                                               |

直接使用 `s.backgroundColor('_surface').color('_textPrimary').height('_medium').padding('_medium')`；颜色组也可用于 `borderColor` 等其他颜色属性。大小刻度统一为 `_extraSmall`、`_small`、`_medium`、`_large`、`_extraLarge`，需要第六档的字号和间距另有 `_extraExtraLarge`。刻度只表示各自组内的大小，不表示不同 CSS 属性使用同一个数值。圆角保留 `_none`、`_pill`，另有 `_circle: '50%'`；只有正方形元素使用 50% 圆角时才呈圆形。

颜色按用途配对：`_primary` 实色背景搭配 `_textOnPrimary`，`_primarySubtleBackground` 低强调背景搭配 `_primary` 文字和 `_primaryBorder` 装饰边框；其他四组语义色同理。`Pressed` 只表示按下期间，持久选中使用 `_surfaceSelected`、`_textSelected`、`_borderSelected`。`_textPrimary/_textSecondary/_textTertiary` 表示文字层级，禁用与占位另有名称。字段独立覆盖：只改 `_primary` 不会自动推导其他主色、焦点或选中颜色；整套定制时应同步考虑相关字段和文字对比度。

字号刻度以 `rem` 跟随页面基准，组件默认继承当前字号，内部长度以 `em` 等比缩放。内置长度按 14px 设计字号换算并保留六位小数：例如默认控件高度为 `2.285714em`，字号 14px 时约为 32px，改为 20px 后约为 45.71px。统一调整一组组件时在容器上设字号，避免每个子组件重新指定基准字号。自定义主题仍可使用其他合法 CSS 单位；数字长度遵循 core 的 px 规则。

## UI Icon

从 `@lucide/icons` 按需导入原始数据，交给自有 `Icon` 渲染为一个 SVG。默认宽高为 `1em`，颜色和字号继承周围文字，不安装现成图标组件，也不注册全量图标。

```tsx
import { Search, CircleCheck, LoaderCircle, ChevronRight, X } from '@lucide/icons';
import { _component } from '@zerodep-vue/core';
import { Icon, useCss } from '@zerodep-vue/ui';

export const Examples = _component(() => {
  const s = useCss();
  return (
    <div class={s.fontSize('1.25rem')}>
      <span>
        <Icon icon={Search} /> 搜索
      </span>
      <Icon icon={CircleCheck} color="_success" size="_large" aria-label="已完成" />
      <Icon icon={LoaderCircle} spin color="_primary" aria-label="加载中" />
      <Icon icon={ChevronRight} rotate="90deg" opacity="_disabled" />
      <Icon icon={Search} size="2em" strokeWidth="_thin" nonScalingStroke />
      <Icon icon={Search} color="_primary" class={s.color('_danger')} />
      <button aria-label="关闭">
        <Icon icon={X} />
      </button>
    </div>
  );
});
```

`IconProps` 是普通接口，样式字段直接复用 core 的 `CssValue<'属性', UiTheme>`。`color`、`opacity`、`width`、`height`、`strokeWidth`、`rotate` 对应同名 CSS 属性，`size` 对应 `fontSize`。例如 `color="_danger"` 与 `s.color('_danger')` 使用相同的主题解析；`size="small"` 是 CSS 关键字，`size="_small"` 才是主题字号。支持原生 CSS 字符串、CSS 变量和该属性允许的数字：`size={20}` 为 20px，`opacity={0.5}` 无单位，`rotate` 使用 `"90deg"` 等合法 CSS 值。`bx`、Ref 和 getter 不属于 Props 值域；响应式来源在调用处正常读取，例如 `size={size.value}`。

`undefined` 保留继承或默认值，`null` 清除便捷 Props 产生的 CSS 声明；SVG 默认宽高 `1em` 和描边宽度 2 仍会生效。显式 `width/height` 覆盖对应显示尺寸，图标数据中的 `size/width/height` 用于 viewBox 坐标，不会被当成显示像素。Props 保留 CSS 和主题候选补全，也接收自由 CSS 字符串；未知的 `_名称` 由共享主题解析器明确报错，不为此给组件增加逐字段泛型。

外部链式 `class` 最后组合，可覆盖同属性的便捷 Props；普通类名和内联 `style` 遵循浏览器层叠。原生 SVG 属性和事件透传，例如 `fill`、`stroke`、`viewBox`、`aria-*`；CSS `strokeWidth` 优先于根 SVG 的 `stroke-width` 属性，数据子节点自身的描边属性优先于继承。`nonScalingStroke` 作用于实际绘制节点，关闭后保留原始节点样式；`spin` 遵循减少动态效果的媒体设置，停止动画时仍保留 `rotate` 的静态角度。

没有非空 `aria-label/aria-labelledby` 时图标默认作为装饰隐藏；单独表达含义时提供名称，默认获得 `role="img"`。显式 `role`、`aria-hidden` 优先。图标按钮的可访问名称写在 button 上。自定义图标使用相同的可信节点数据结构，支持嵌套分组；不接收 children、HTML 字符串或替换子树的 DOM 属性，重复实例中的自定义 SVG ID 由数据作者保证唯一。

## UI 文字与排版

`Text`、`Heading`、`Paragraph`、`Link` 分别渲染原生 `span`、`h1`–`h6`、`p`、`a`，从包根入口直接导入。它们共用普通文字 Props，`size` 对应 `CssValue<'fontSize', UiTheme>`，`color`、`fontWeight`、`lineHeight` 对应同名 CSS 属性；`Heading` 和 `Paragraph` 另支持 `textAlign`。不传样式字段时保留继承或组件默认值，`null` 清除对应组件声明，之后遵循浏览器层叠与原生元素规则。

```tsx
import { _component } from '@zerodep-vue/core';
import { Heading, Link, Paragraph, Text } from '@zerodep-vue/ui';

export const ProjectDescription = _component(() => (
  <>
    <Heading as="h1" size="_extraExtraLarge">
      项目设置
    </Heading>
    <Paragraph lineHeight="_relaxed">
      当前项目有 <Text fontWeight="_semibold">12 位成员</Text>。
    </Paragraph>
    <Text color="_textSecondary" size="_small">
      修改后自动保存。
    </Text>
    <Link href="/members">查看成员</Link>
  </>
));
```

`Text` 默认继承字号、颜色、字重和行高。`Paragraph` 使用 `_normal` 行高；`Heading` 使用 `_semibold` 字重、`_tight` 行高，字号仍继承；两种块级文字都清除浏览器默认外边距，间距交给布局或 `class`。标题通过必填的 `as` 直接指定 `h1`–`h6`，决定文档层级，不决定视觉大小；标签和样式来源更新后都会反映到实际 DOM。段落和标题的内容应符合原生 HTML 语义，列表、卡片等块级区域使用布局容器。

`Link` 的 `href` 必填，导航、下载、键盘和修饰键点击都交给原生 `a`。默认颜色为 `_primary`，悬停和按下使用对应主题色，保留下划线和键盘可见焦点；显式 `color` 同时覆盖普通、悬停和按下颜色，外部 `class` 可继续定制各状态。`target="_blank"` 且未提供 `rel` 时默认补 `noopener`；显式 `rel` 保持原值，默认不修改引用来源策略。应用路由通过原生 `href`、`onClick` 自行接入，执行操作使用按钮。

内容统一通过 `children` 或普通 Vue 默认插槽传入，不解析 HTML 字符串，也不透传 `innerHTML`、`textContent` 覆盖子树。组件消费的属性显式解构，其余原生属性和事件由 `rest` 直接转发；外部链式 `class` 最后组合，原生 `style` 遵循浏览器层叠。强调语义使用 `strong`、`em` 等原生行内标签，字重 Props 只控制外观。

## UI 文字省略

`Ellipsis` 独立负责单行、多行省略及可选展开。内容保留为完整的文字和 VNode，由 CSS 裁剪；父级布局需要提供有效宽度。外层是块级显示的 `span`，默认 `min-width: 0`、`max-width: 100%`，可放入 Flex/Grid 项或段落；通过 `class` 约束宽度及继承字号等样式。

```tsx
import { ref } from 'vue';
import { _component } from '@zerodep-vue/core';
import { Ellipsis, useCss } from '@zerodep-vue/ui';

export const Description = _component(() => {
  const s = useCss();
  const expanded = ref(false);
  return (
    <Ellipsis lines={3} expandable expanded={expanded} class={s.maxWidth('30em')}>
      这里是完整描述，可以包含强调等非交互行内内容。展开与收起不会修改原始文本。
    </Ellipsis>
  );
});
```

`lines` 默认 1，必须是正整数；1 使用单行省略，多行同时提供标准 `line-clamp` 和 WebKit 兼容组合。`WebkitBoxOrient('vertical')` 对应 CSS Overflow 明确保留的多行省略兼容用法，其专用签名不标记弃用，其他旧版布局值仍提示弃用。`expanded` 是可写 `Ref<boolean>`，不传时每个实例独立创建；父级替换 Ref 或修改其值都能更新组件。`expandable` 默认关闭，仅决定是否提供内置控制，不限制父级直接控制展开状态。

开启 `expandable` 后，实际溢出时显示原生按钮，提供 `aria-expanded`、`aria-controls` 和 `type="button"`，支持键盘操作；按钮文字从 Provider 的 `lang.expand`、`lang.collapse` 继承，可局部覆盖。展开后收起保留按钮焦点；内容变短或容器变宽导致按钮消失时，将焦点交回内容。裁剪区域只支持文字和非交互行内片段，链接、按钮等交互控件应放在外部；启用 `expandable` 的 Ellipsis 不应嵌入另一个按钮或链接。未启用展开时不添加内容焦点入口，可作为 Link 的文字内容组合使用。

可选 `onOverflowChange(overflowing)` 在首次可测量及实际裁剪状态变化时调用；展开时为 `false`，不可测量的隐藏内容不提前报告。它可供调用方组合提示等交互，组件不内置浮层、复制或编辑功能。只有启用展开或溢出回调时才创建观察器；容器尺寸、内容、继承样式和字体加载变化会合并到下一动画帧测量，卸载时取消回调并释放观察器。SSR 不读取 DOM 尺寸，首屏保留完整内容，hydration 后才决定是否显示省略控制。

## UI 文本输入

`Input` 使用 `Ref<string>` 保存文本；省略 value 时每个实例独立持有空字符串。`type` 支持 text、search、password、email、url、tel，原生 id、name、required、maxlength、autocomplete、form 和事件通过 rest 转发给实际 input。`class/style` 作用于外层样式容器，`slotInput` 用于输入节点的 class、事件和附加属性。

```tsx
const query = ref('');
<label for="query">查询</label>;
<Input
  id="query"
  name="query"
  value={query}
  clearable
  prefix={<Icon icon={Search} />}
  width="20em"
  variant="outline"
  onValueCommit={(text) => search(text)}
/>;
```

输入法组合期间由 Vue 原生 v-model 保留 DOM 草稿，组合完成后写回字符串。`onValueChange` 只报告用户输入和清空，`onValueCommit` 对应原生 change 或清空；外部赋值不触发这两个回调。原生表单 reset 恢复首次 setup 的值，可通过 `resetValue` 指定基准，并通过 `onValueReset` 观察重置；取消的 reset 不修改值，form 属性切换后跟随新的表单。只读使用原生 `readonly`。

`variant="outline|filled|underlined"` 控制外观，`density` 控制内部尺寸，`size` 是字号，默认继承。`status="error|warning|success"` 提供状态颜色，error 同时输出 aria-invalid；名称和错误说明仍通过 label、aria-describedby 等原生方式关联。`prefix/suffix` 提供前后内容，`slotPrefix/slotSuffix/slotClear` 定制对应节点。清空按钮使用当前语言的 clear 文案，清空后聚焦输入；readonly 不显示清空操作。`inputRef={shallowRef<HTMLInputElement | null>()}` 接收真实 DOM，可直接调用原生 focus/select；卸载或引用替换时遵循 Vue DOM ref 的清空语义。

`Textarea` 使用同样的字符串模型、外观、清空和表单重置契约，保留换行。`rows` 默认 3 且必须为正整数；`resize` 默认 vertical，`minHeight/maxHeight` 接收 CSS 属性值。原生节点属性通过 `slotTextarea` 定制，`inputRef` 接收 `Ref<HTMLTextAreaElement | null | undefined>`。

两个组件组合内部的 TextControlFrame，并共用 useTextControl、原生节点样式和 useFormReset。外观层继续组合 Button/Icon，slotPrefix、slotSuffix、slotClear 逐层转发，外部 class 最后组合；Input/Textarea 各自持有实际 DOM、原生属性和 v-model。复杂组件的 `slotX` 只是节点属性 Props，不使用 Vue 插槽协议。业务回调接受单个函数或只读函数数组，逐个按顺序调用，支持上层 Props 展开时 Vue 的回调合并。

`Checkbox` 和 `Switch` 共享布尔 Ref、原生表单生命周期与 ChoiceControlFrame，标记分别组合 Icon 或滑块。`value` 默认 false，`resetValue` 默认初始值；`formValue` 是提交字符串，默认 on，与布尔模型分离。`readonly` 保留焦点与表单提交并阻止切换，`disabled` 使用原生禁用语义；Checkbox 的 `indeterminate` 受控，既不修改 value，也不改变提交值。`inputRef` 接收真实 input，`slotInput/slotIndicator/slotLabel` 逐层转发，Switch 另有 `slotThumb`。Switch 使用原生 checkbox 的键盘与表单行为，通过 role=switch 表达开关语义。

`RadioGroup` 组合 fieldset/legend、Flex 和内部 Radio，组独占模型和重置监听，叶子通过 Props 接收状态与通知。`options` 提供唯一的 string/number value、label、disabled 和可选 formValue；数值 1 与字符串 "1" 是不同业务值，提交值默认 String(value)。`value` 使用可写 Ref，null/undefined 表示未选择，动态移除选项不会自动改写模型。`orientation` 控制水平或垂直排列；原生同名单选按钮负责方向键和表单语义，readonly 保留焦点与提交并禁止切换。name 默认生成独立值以隔离原生分组，业务表单应显式传 name。`slotInput/slotIndicator/slotLabel/slotOption` 应用于每一项，不接受重复 id；`elementRef` 接收组的 fieldset。

`useField(value, schema, options)` 在 Vue setup 或 effectScope 中管理字段状态，直接接收 Zod 4 schema；effectScope 中必须显式提供 id。`control` 是可展开到控件的普通 Props 对象，保留原始 value Ref，并提供 id/name/required、描述与错误关联、状态、焦点离开与重置回调。`Field` 组合 Grid/Text，负责 label、help 和错误展示，子控件由调用者传入，不扫描或克隆 VNode。

```tsx
const name = ref('');
const field = useField(name, z.string().trim().min(1, '请填写姓名'), {
  name: 'name',
  required: true,
});
<Field state={field} label="姓名" help="用于显示称呼" slotError={{ color: '_danger' }}>
  <Input {...field.control} clearable />
</Field>;
```

默认 `validateOn="blur"` 在首次离开整个控件后校验，之后随编辑更新；`change` 每次变化校验，`submit` 只由 `validate()` 主动触发。组内焦点切换不算离开。`output` 保存 Zod 的解析结果，不将 trim/transform 写回编辑草稿；`issues` 保留原生问题信息，校验自身抛错单独放入 failure。旧请求、reset 前的请求和卸载后的结果均不会覆盖新状态；pending、valid、touched、dirty 是只读 computed。dirty 使用 Object.is 与重置基准比较，对象值按整体替换更新。`reset()` 恢复基准，`reset(next)` 同时替换模型和基准；原生表单 reset 与这份基准一致。

## UI 布局、导航与交互

`Split` / `SplitPane` 支持多面板、嵌套、指针与键盘调整以及可选折叠。直接子节点仅接受 SplitPane（允许 Fragment），每块有唯一 `name`；`sizes` 是按名称保存百分比的可写 `Ref<Readonly<Record<string, number>>>`，顺序变化不会错配尺寸。省略项均分剩余比例。Pane 的 `min/max` 接受明确的 `px/em/rem/%`（或数字 0）；百分比相对扣除内边距、分隔条后的可用长度，em 相对 Split 字号。容器太小时按比例压缩最小值，最大值总和不足时放宽以铺满。每根分隔条只调整相邻两块，不把拖动传给远端面板。

```tsx
const sizes = ref<Readonly<Record<string, number>>>({ navigation: 25, content: 75 });
<Split sizes={sizes} class={s.height('30em')}>
  <SplitPane name="navigation" label="导航" min="10em" collapsible>
    导航内容
  </SplitPane>
  <SplitPane name="content" min="15em">
    <Scrollbar height="100%">工作区内容</Scrollbar>
  </SplitPane>
</Split>;
```

`resizable={false}` 禁止拖动该面板；`collapsed` 可传可写 Ref，内部按钮和外部状态切换共用尺寸恢复逻辑。分隔条支持方向键、Shift 加速、Home/End 与 Enter 折叠主面板，折叠按钮可独立键盘访问。`onSizesChange` 通知实际交互比例，`onResizeStart/onResizeEnd` 提供前后面板名称与输入来源，取消拖动恢复原尺寸并通过 `cancelled` 标识结束。`slotSeparator` 定制分隔条，`slotContent` 定制 Pane 内容。滚动按需组合 Scrollbar，不自动给每块面板创建滚动容器。

`Affix` 使用原生 sticky，`side="top|bottom"` 和 `offset` 决定粘附边缘；浏览器选择最近滚动祖先，并受父容器边界约束。祖先 overflow 和容器高度会影响粘附，不提供跨容器 fixed 补偿。`BackTop` 组合 Button，按 `threshold` 显示并只滚动其 `target`；`Anchor` 组合 Link，通过 `items` 提供可嵌套页内目录、真实片段链接和 `aria-current="location"`。滚动目标都支持元素、Window、Ref 或 getter，省略时继承 Scrollbar 或最近滚动祖先；默认平滑滚动，尊重减少动态效果。BackTop 的浮动位置由 `insetInlineEnd/insetBlockEnd/class` 控制，与滚动目标独立；Anchor 的 `offset` 单位 px，点击时通过 `history="push|replace|none"` 决定地址更新，修饰键及新标签行为保留原生语义。

`Slider` 是单值滑轨，`value` 使用可写 `Ref<number>`，支持 `min/max/step`、水平/竖向、RTL、只读和禁用。`variant="line"` 是细线圆柄，`variant="rail"` 是宽轨道。`trackClick={false}` 只关闭轨道定位，仍保留拖动与键盘操作。指针抓取位置保持不变；取消拖动恢复原值，正常释放才调用 `onValueCommit`，数值变化调用 `onValueChange`。外部越界值裁剪显示但不自动反写；非法范围或非正步长抛出 `RangeError`，末端 `max` 始终可达。水平左右键按视觉方向变化，竖向上键增大；Home/End 到端点，PageUp/PageDown 跨十个步长。

```tsx
const progress = ref(0);
<Slider
  value={progress}
  variant="rail"
  trackClick={false}
  aria-label="拖动进度"
  slotThumb={{ class: s.borderRadius('_small') }}
  onValueCommit={(value) => submitProgress(value)}
>
  拖动滑块至末端
</Slider>;
```

轨道、填充、滑块和提示内容容器分别用 `slotTrack`、`slotFill`、`slotThumb`、`slotLabel` 属性定制；`thumb` 可提供装饰图标，`children` 提供提示，均不应嵌入交互控件。名称通过 `aria-label/aria-labelledby` 传给滑块，`formatValueText` 可提供带单位的读值。Slider 与 Scrollbar 共用指针生命周期和坐标换算，但分别保持数值输入和原生滚动语义。验证码页面可组合滑轨与业务校验；组件提交进度本身不表示验证成功。

`Flex` 提供一维布局，`Grid` / `GridItem` 提供原生二维轨道和跨行跨列，`Divider` 提供水平或垂直分隔。它们默认继承字号，样式值直接复用 `CssValue`，`class` 最后组合；响应式布局继续用原生 CSS `repeat/minmax`、媒体条件和容器查询。

`Button` 默认是 `type="button"` 的原生按钮并带水波纹，`variant` 支持 `solid`、`soft`、`outline`、`dashed`、`text`，`tone` 支持 `neutral`、`primary`、`info`、`success`、`warning`、`danger`。`size` 只控制字号，`density="compact|normal|comfortable"` 控制几何尺寸；`shape="default|round|circle"`、`iconOnly`、`block` 和 `iconPlacement` 负责外形和排列。仅图标按钮应提供 `aria-label`。加载时保留宽度与可访问名称，阻止激活；`color`、`backgroundColor`、`borderColor` 的显式值在各交互状态中保持。

复杂组件的子节点属性是直接的普通 Props，例如 `slotIcon`、`slotLoading`、`slotContent`，不需要额外的 `slotProps` 层。外部 class 最后组合；内容、测量 ref、状态和必要 ARIA 属性由组件管理。`Ripple` 也可独立放进 `position: relative` 的原生交互元素，监听父级指针和键盘操作，并响应减少动画偏好。

```tsx
<Button variant="soft" tone="success" icon={Search} slotIcon={{ size: '1.1em' }}>
  查询
</Button>
<Grid columns="repeat(auto-fit, minmax(16em, 1fr))" gap="_medium">
  <GridItem column="1 / -1">跨越全部列</GridItem>
</Grid>
```

`Scrollbar` 使用真实原生滚动视口，隐藏原生滚动槽，将半透明滑块浮动在内容上；有无溢出、轨道显隐都不预留或回收内容宽度。默认允许双向滚动，`axis` 可限制方向，`always` 可使有溢出的滑块持续显示。轨道不拦截内容点击，滑块支持指针拖动、方向键、PageUp/PageDown、Home/End。`height` / `maxHeight` 或外部布局约束决定可视尺寸。原生视口用 `slotViewport`，内容用 `slotContent`，轨道和滑块分别用 `slotVerticalRail` / `slotHorizontalRail` / `slotVerticalThumb` / `slotHorizontalThumb` 定制。

`viewportRef` 接收 `Ref<HTMLDivElement | null | undefined>`，需要程序滚动时直接调用真实视口的 scrollTo/scrollBy，也可将同一个 Ref 传给 Anchor/BackTop 的 target。内容变化、字体加载、尺寸和方向变化自动重测，不公开组件实例或手动 sync 方法。

`CollapseTransition` 根据 `show` 展开收起，支持 `axis`、`fade`、`appear`、主题 `duration`、`lazy` 和 `unmountOnHide`，快速反向切换从当前画面继续。`Collapse` / `CollapseItem` 提供真实标题和按钮语义；`expandedKeys` 使用可写 Ref，`multiple` 决定是否多开，item 的 `name` 在组内唯一。默认保留隐藏内容状态，关闭后内容不再进入焦点序列；方向键与 Home/End 只在当前组的标题之间移动。复杂内容可通过 item 的 `region` 显式声明命名区域。

```tsx
const expandedKeys = ref<readonly string[]>(['filters']);
<Collapse expandedKeys={expandedKeys}>
  <CollapseItem name="filters" title="筛选条件">
    {/* 表单内容 */}
  </CollapseItem>
</Collapse>;
```

主题已补充独立的逻辑方向间距组、`opacity._ripple`、`zIndex._affix` 和 `zIndex._floating`。本包的浏览器验收页面通过 `pnpm --filter @zerodep-vue/ui dev:components` 启动，默认地址为 `http://127.0.0.1:4176`。

### 浮层与导航

`Popover` 与 `Tooltip` 共用定位面板、浮层关闭顺序和 Teleport 继承处理。`trigger` 是普通渲染函数 Prop：Button/Link 可直接展开收到的绑定，原生节点需将 elementRef 映射到 ref，其余属性展开；不自动克隆任意 VNode 或读取组件实例。Popover 是非模态 dialog，通过 `label` 或 `slotPanel.aria-labelledby` 命名，默认聚焦第一个控件。`open` 使用可写 Ref；`placement/offset/matchWidth` 控制定位，`closeOnEscape/closeOnOutside/closeOnFocusOutside` 控制关闭。定位在打开期间随滚动和尺寸更新，越界时翻转和避让。子层优先处理 Escape，关闭后按焦点归属恢复触发器；外部点击和焦点切换不会被强行拉回。

```tsx
<Popover label="筛选条件" trigger={(props) => <Button {...props}>打开筛选</Button>}>
  {/* 可交互内容 */}
</Popover>
<Tooltip content="刷新当前数据" trigger={(props) => <Button {...props}>刷新</Button>} />
<Tooltip
  content="原生按钮"
  trigger={({ elementRef, ...rest }) => <button ref={elementRef} {...rest}>提示</button>}
/>
```

Tooltip 用于简短说明，保留触发器焦点，同时合并触发器悬停、面板悬停和键盘焦点；`openDelay/closeDelay` 单位 ms。它不承载可交互内容，较长或可操作内容使用 Popover。两个组件通过 `slotPanel` 定制面板属性；Popover 的长内容复用浮动 Scrollbar。

`Drawer` 用原生 `dialog.showModal()` 负责模态焦点和背景隔离，按文档引用计数锁定页面滚动；子浮层挂在所属 dialog 内。`open` 是可写 Ref，`placement="start|end|top|bottom"` 使用逻辑方向，`size` 决定展开方向尺寸。支持 title、label、footer 和 `slotPanel/slotHeader/slotBody/slotScrollbar/slotFooter/slotClose`。正文默认使用 Scrollbar，已有滚动容器可设置 `scrollable={false}`。默认关闭后保留内容，`unmountOnHide` 可选择卸载；`inline` 模式只显示正文，不启用模态交互，模式切换保留同一内容实例。模态层在客户端挂载后打开，SSR 不输出已激活的模态状态。

`Menu` 保留站点导航的 nav/list/link/disclosure 语义；原生链接保留新标签、修饰键和下载能力，不依赖路由库。`items` 支持普通项、分组、分隔线，key 在整棵树中唯一；条目可配置 label、href、icon、disabled、children 和独立 slotLink。`activeKey` 控制当前项，未提供时保存最近激活项，`onSelect` 可接入路由。`orientation="horizontal|vertical"`、`collapsed`、`density`、`variant="soft|line"` 控制排列与外观，slotList、slotItem、slotIcon 提供节点属性。禁用链接复用 Link.disabled：移除 DOM href、Tab 停靠并阻止激活回调，避免中键和右键仍能导航。

Menu 的 `expandedKeys`、`accordion`、`onExpandedChange` 只管理垂直内联分组的持久展开状态；横向与收窄模式使用临时 Popover，选择或焦点离开后关闭，切回内联时保留原展开项。带 href 的内联分组提供独立链接和展开按钮；浮层分组将父链接放在子菜单首部。组件不实现应用命令菜单的 `menu/menuitem` 键盘模型。

`Breadcrumb` 使用有序列表，最后一项标记 `aria-current="page"`；`maxItems` 为 0 时全部显示，至少为 3 时可把中间项折叠到 Popover。条目通过 key、label、href、slotLink 配置，separator 可自定义。

`Sidebar` 组合 Drawer、Scrollbar、Button，桌面 `collapsed` 与窄屏 `open` 使用两个独立 Ref。默认在 `(max-width: 48rem)` 切换到抽屉，`media=""` 禁用此切换；支持 width、collapsedWidth、header、footer、showToggle 以及 slotHeader、slotFooter、slotContent、slotToggle、slotDrawer。内容通过同一 Teleport 移动，跨断点保留输入 DOM 和子组件状态。后代 Menu 在未显式提供 collapsed 时自动继承侧栏收窄状态；窄屏恢复完整导航。

实现参考 [WAI-ARIA 导航披露模式](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)、[Window Splitter](https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/)、[Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)、[原生 dialog](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) 与 [Floating UI DOM](https://floating-ui.com/docs/computeposition)。当前边界为单值 Slider、相邻面板调整、原生 sticky、普通站点导航；多滑块输入、跨远端面板推挤和应用命令菜单不混入这些 API。

## 开发与验证

默认在本地检查，只运行本次修改直接相关的测试和必要的 LSP 诊断，不例行运行全仓类型检查、构建或全量测试：

```powershell
pnpm lsp:setup
pnpm lsp:inspect packages/ui/src/config/Provider.tsx
pnpm --filter @zerodep-vue/ui test test/provider.test.tsx
pnpm --filter @zerodep-vue/ui exec playwright install chromium
pnpm --filter @zerodep-vue/ui test:browser --project chromium -g "scrollbars preserve width"
```

包专用命令直接通过 `pnpm --filter <包名>` 执行；根 `package.json` 只保留工作区聚合构建/检查、格式化、打包和 LSP 工具。共享 TypeScript 基础与构建选项保留在根配置，各包配置负责自己的源码和测试范围。

多个包共用的开发依赖统一放在根目录，独立工具放在所属包。各包仍显式声明发布所需的运行时依赖与 peer。src 根目录只保留 index.ts 和职责目录；Babel/Vite 入口统一收纳到 `compiler/src/plugins`，单文件构建工具直接使用 `ui/build.mjs`。

`lsp:setup` 从 `.codex/config.example.toml` 生成被忽略的本机配置。MCP 名为 `zerodep_vue_lsp`，提供 diagnostics、hover、definitions、references、completions；配置生成、独立 stdio 验证与重启后会话可调用是三个不同状态。

[远程 CI](.github/workflows/ci.yml) 负责完整类型检查、编译器与上游对照、core 运行时、TSX 作者测试、UI 两种编译模式、开发/生产 × Chromium/Firefox 交互回归、构建打包及 Linux/Windows 的 LSP 和安装消费。浏览器测试复用 UI 包的同一页面，验证实际布局、指针拖动、键盘焦点、嵌套浮层和跨断点内容保留；`UI_BROWSER_MODE=production` 先构建再启动预览，默认使用开发服务器。已有本机 Chrome 时可在当前命令进程设置 `PLAYWRIGHT_CHANNEL=chrome` 并选择 `--project chromium`。项目源码保持严格类型检查；`skipLibCheck` 跳过第三方声明内部检查，不再维护第三方声明补丁。

`pnpm --filter @zerodep-vue/ui test:consumer` 使用当前 SHA 的 `test-results/packages` tarball，在仓库外临时安装三个包和显式 peer，依次检查发布声明与中文提示、Vite 客户端/SSR 构建、无 DOM 的 SSR、生产客户端 hydration 和事件更新。临时目录退出时逐项清理，报告和消费者锁文件保存在 UI 的 `test-results/consumer`。CI 消费任务依赖同一提交的 build artifact，不重新构建工作区，也不启用源码条件。检查脚本和探针属于 UI 包，没有额外的工作区工程。

后续组件交互、浏览器与安装消费验证围绕 `packages/ui` 建立。旧的独立夹具、Naive UI 构建和浏览器验收已移除；当前 CI 通过只代表现有测试通过，不能作为这些覆盖已恢复或组件库已完成的证据。

协作约定集中在 [AGENTS.md](AGENTS.md)。提交前核对上一轮提交的远程 CI；推送后记录新运行状态，不等待长测试或反复轮询。

## 实现状态与下一步

以下审查以当前源码、测试入口和 CI 配置为依据。安装消费、生产浏览器和交互组件声明检查已接入 CI；是否通过以对应 SHA 的运行报告为准，不代表组件库已全部完成。

| 范围            | 已有实现与验收入口                                                                                                        | 下一步                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| compiler / core | Vue JSX v3.0.0 真实源码 fork；Props 作者入口、CSS/主题、资源生命周期、SSR/HMR；双模式作者测试与跨平台 LSP                 | 随真实组件组合补齐回归，保持普通 Vue 组件兼容边界                 |
| 配置与展示      | Provider、Light/DarkTheme、zhCN/enUS；Icon、Text、Heading、Paragraph、Link、Ellipsis                                      | 组合 Alert、Tag/Badge、Empty、Skeleton，先确认实际复用与样式需求  |
| 布局与交互      | Flex、Grid/GridItem、Divider、Scrollbar、Collapse、Affix、BackTop、Anchor、Split、Button、Ripple、Slider                  | 保持原生语义，继续验证主题、RTL、缩放与减少动画                   |
| 表单基础        | Input/Textarea、Checkbox/Switch、RadioGroup、Field/useField；共享模型与 reset 工具，Zod 原生输入/输出、异步归属与错误说明 | 先建立 Listbox 的选项、焦点和键盘契约，再组合 Select/Autocomplete |
| 浮层与导航      | Popover、Tooltip、Drawer、Menu、Breadcrumb、Sidebar；共享定位、关闭栈、指针所有权与滚动工具                               | 新输入组件复用浮层与 Scrollbar，保留各自的焦点责任                |
| CI 与交付       | 三包类型/构建/打包、core/compiler/UI 测试、公开声明、跨平台 LSP/安装消费、开发/生产 × Chromium/Firefox                    | 结果按确切 SHA 核对；新增组件同步扩展消费与浏览器场景             |

原生事件交给 Vue DOM 层分发，业务通知通过共享 callCallbacks 按顺序处理合并后的函数。已建立的回归包括：中文输入法草稿与清空、原生 FormData/reset、回调合并、DOM 引用替换、Tooltip 禁用或触发器移除、单选组回调恢复旧值，以及 CSS null 清除。普通字段状态通过 Props 组合，不依赖组件实例或隐式查找子节点。

接下来的实施顺序按依赖推进：

1. **选择基础与上层输入。** 先实现可独立验收的 Listbox/选项视图，明确焦点移动、禁用项、选中值和可访问名称。Select 组合触发器、Popover、Listbox、Scrollbar；Autocomplete 再组合 Input 与同一选项基础，额外管理查询草稿、过滤和异步结果归属。选项业务值与键的公开契约先用真实场景评审，不预置万能数据源层。
2. **表单组合与反馈。** 在多个 useField 的实际提交场景上确定 Form 的校验与重置调度；Alert/Empty 等视图复用 Text、Icon、Button。仅抽取多个组件确实共用的职责，子节点属性沿 slotX 普通 Props 逐层转发。
3. **明确业务值的输入。** InputNumber 使用 Decimal，日期和时间输入使用 CalendarDate/Time；先完成草稿解析、提交、格式化和语言边界，再扩展 DatePicker/RangePicker。保持外部业务值与编辑草稿分离。
4. **数据展示。** 先用基础表格验证行标识、列渲染和排序，选择功能复用 Checkbox，分页组合 Button。虚拟化、树表和复杂编辑在明确数据量与交互要求后扩展。

每一阶段都保留同一条交付链路：相关文件的本地 LSP 与必要短测试、子代理独立复核、中文提交推送，再由 CI 执行全量与跨平台验收。运行中或排队的 CI 记为 pending，不以此前的绿色记录代替新代码验收。

## 许可

许可证文件统一保存在根 [LICENSE](LICENSE)，合并记录本项目、Vue JSX、Vite、csstype 和 zerodep-js 的 MIT 许可与版权；CSS 规范元数据来源 mdn-data 使用 CC0-1.0。打包产物携带这份统一许可，第三方 peer 依赖仍携带各自许可。
