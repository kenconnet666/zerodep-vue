# zerodep-vue

Vue VDOM TSX 编译器、运行时 CSS 和自有 UI 组件库。仅维护 Vue VDOM，不扩展模板编译或其他 renderer。

## 工程

- `packages/compiler`：官方 Vue JSX v3.0.0 源码 fork、Babel/Vite 接入和编辑器扩展；来源记录在 `upstream.json`。
- `packages/core`：`_component`、`For`、运行时 CSS、继承主题、HMR 与 DevTools 接线。
- `packages/ui`：组件库及其集成测试；目前提供 `Provider`、`Icon`、UI 主题和语言配置，其他交互组件尚未实现。
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

`_component` 从声明变量名自动生成组件名，默认关闭 Vue 的隐式属性透传。组件通过普通 Props 声明输入，参数解构后的剩余 Props 统一命名 `rest`，通过 `{...rest}` 或逐项赋值决定传给哪个节点；原生属性也包含在同一个 Props 只读视图中。Vue 的 `context.attrs` 保留官方字段名。无需重复写 `{ name: 'Provider', inheritAttrs: false }`。Vue 的 `key`、`ref` 和 VNode 生命周期属性仍按 Vue 保留语义处理。已有第二参数选项保留，只有明确需要 Vue 自动透传时才显式设为 `inheritAttrs: true`。

```tsx
import { _component, createCssContext, SystemKeywords } from '@zerodep-vue/core';

const { useCss } = createCssContext(new SystemKeywords());

export const Example = _component(() => {
  const s = useCss();
  return <div class={s.display('inline-flex').padding(12)}>内容</div>;
});
```

系统值和主题名使用字面量；`useTheme()` 返回当前区域的 reactive 对象。动态样式显式使用 `bx`，编译器负责内联 style 接线；`cx` 只负责有序组合，不新增 JSX 样式属性。

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
    <Heading level={1} size="_extraExtraLarge">
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

`Text` 默认继承字号、颜色、字重和行高。`Paragraph` 使用 `_normal` 行高；`Heading` 使用 `_semibold` 字重、`_tight` 行高，字号仍继承；两种块级文字都清除浏览器默认外边距，间距交给布局或 `class`。标题的 `level` 必填且只接受 1–6，决定文档层级，不决定视觉大小；层级和样式来源更新后都会反映到实际 DOM。段落和标题的内容应符合原生 HTML 语义，列表、卡片等块级区域使用布局容器。

`Link` 的 `href` 必填，导航、下载、键盘和修饰键点击都交给原生 `a`。默认颜色为 `_primary`，悬停和按下使用对应主题色，保留下划线和键盘可见焦点；显式 `color` 同时覆盖普通、悬停和按下颜色，外部 `class` 可继续定制各状态。`target="_blank"` 且未提供 `rel` 时默认补 `noopener`；显式 `rel` 保持原值，默认不修改引用来源策略。应用路由通过原生 `href`、`onClick` 自行接入，执行操作使用按钮。

内容统一通过 `children` 或普通 Vue 默认插槽传入，不解析 HTML 字符串，也不透传 `innerHTML`、`textContent` 覆盖子树。组件消费的属性显式解构，其余原生属性和事件由 `rest` 直接转发；外部链式 `class` 最后组合，原生 `style` 遵循浏览器层叠。强调语义使用 `strong`、`em` 等原生行内标签，字重 Props 只控制外观。

## 开发与验证

默认在本地检查，只运行本次修改直接相关的测试和必要的 LSP 诊断，不例行运行全仓类型检查、构建或全量测试：

```powershell
pnpm lsp:setup
pnpm lsp:inspect packages/ui/src/config/Provider.tsx
pnpm --filter @zerodep-vue/ui test test/provider.test.tsx
```

包专用命令直接通过 `pnpm --filter <包名>` 执行；根 `package.json` 只保留工作区聚合构建/检查、格式化、打包和 LSP 工具。共享 TypeScript 基础与构建选项保留在根配置，各包配置负责自己的源码和测试范围。

多个包共用的开发依赖统一放在根目录，独立工具放在所属包。各包仍显式声明发布所需的运行时依赖与 peer。src 根目录只保留 index.ts 和职责目录；Babel/Vite 入口统一收纳到 `compiler/src/plugins`，单文件构建工具直接使用 `ui/build.mjs`。

`lsp:setup` 从 `.codex/config.example.toml` 生成被忽略的本机配置。MCP 名为 `zerodep_vue_lsp`，提供 diagnostics、hover、definitions、references、completions；配置生成、独立 stdio 验证与重启后会话可调用是三个不同状态。

[远程 CI](.github/workflows/ci.yml) 负责完整类型检查、编译器与上游对照、core 运行时、TSX 作者测试、UI 两种编译模式、构建打包和 Linux/Windows LSP。项目源码保持严格类型检查；`skipLibCheck` 跳过第三方声明内部检查，不再维护第三方声明补丁。

后续组件交互、浏览器与安装消费验证围绕 `packages/ui` 建立。旧的独立夹具、Naive UI 构建和浏览器验收已移除；当前 CI 通过只代表现有测试通过，不能作为这些覆盖已恢复或组件库已完成的证据。

协作约定集中在 [AGENTS.md](AGENTS.md)。提交前核对上一轮提交的远程 CI；推送后记录新运行状态，不等待长测试或反复轮询。

## 许可

许可证文件统一保存在根 [LICENSE](LICENSE)，合并记录本项目、Vue JSX、Vite、csstype 和 zerodep-js 的 MIT 许可与版权；CSS 规范元数据来源 mdn-data 使用 CC0-1.0。打包产物携带这份统一许可，第三方 peer 依赖仍携带各自许可。
