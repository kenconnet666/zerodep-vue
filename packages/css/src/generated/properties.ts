// 由 scripts/css/generate.mjs 从固定 csstype@3.2.3 生成。说明只进入类型声明。
import type { PropertyValue } from '../types.ts';
import type { SystemKeywords } from './system.ts';
/** 布局与定位；泛型 T 保留系统与继承主题关键字。 */
export interface LayoutProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly alignContent?: PropertyValue<'alignContent', T>;
  /**
   * 设置容器内项目在交叉轴或块轴上的默认对齐方式。
   *
   * Flex 中沿交叉轴对齐；Grid 中通常沿块轴对齐。单个项目可以用 align-self 覆盖。
   *
   * 适用场景：图标与文字居中、表单控件基线对齐或项目拉伸。
   *
   * 常用值：`stretch`、`center`、`baseline`、`start`、`end`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ display: "flex", alignItems: "center" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  readonly alignItems?: PropertyValue<'alignItems', T>;
  /**
   * 选择行内或 SVG 文本参与对齐时使用的基线。
   *
   * CSS 规范初始值：`baseline`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly alignmentBaseline?: PropertyValue<'alignmentBaseline', T>;
  /**
   * 单独覆盖一个项目的交叉轴或块轴对齐方式。
   *
   * 适用场景：只改变某一个项目的交叉轴或块轴对齐，不改变同组其他项目。
   *
   * 常用值：`auto`、`stretch`、`baseline`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ alignSelf: "center" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly alignSelf?: PropertyValue<'alignSelf', T>;
  /**
   * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly alignTracks?: PropertyValue<'alignTracks', T>;
  /**
   * 为元素声明锚点名称，供锚点定位的元素引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  readonly anchorName?: PropertyValue<'anchorName', T>;
  /**
   * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  readonly anchorScope?: PropertyValue<'anchorScope', T>;
  /**
   * 设置定位元素相对于其定位参照的下侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  readonly bottom?: PropertyValue<'bottom', T>;
  /**
   * 要求元素避让指定侧的前置浮动元素。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  readonly clear?: PropertyValue<'clear', T>;
  /**
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  readonly columnCount?: PropertyValue<'columnCount', T>;
  /**
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：`balance`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  readonly columnFill?: PropertyValue<'columnFill', T>;
  /**
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  readonly columns?: PropertyValue<'columns', T>;
  /**
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  readonly columnSpan?: PropertyValue<'columnSpan', T>;
  /**
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  readonly columnWidth?: PropertyValue<'columnWidth', T>;
  /**
   * 决定元素是否生成布局盒子，以及元素自身和内部内容如何排版。
   *
   * 外部显示类型决定元素自身以块级还是行内级方式参与周围布局；内部布局方式决定内容使用普通流、Flex 或 Grid 等布局。此属性不继承；例如 div 通常由浏览器默认样式设置为 block。
   *
   * 适用场景：选择容器的布局方式；具体对齐、间距和换行由对应布局属性控制。
   *
   * 常用值：`block`、`inline`、`flex`、`inline-flex`、`grid`、`none`。
   *
   * CSS 规范初始值：`inline`，不同于浏览器默认样式表。
   * @example
   * css({ display: "flex", alignItems: "center", gap: "0.5rem" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly display?: PropertyValue<'display', T>;
  /**
   * 集中设置弹性项目的增长系数、收缩系数和基础尺寸。
   *
   * 依次对应 flex-grow、flex-shrink、flex-basis。作用于弹性项目，应先由父容器建立 Flex 布局。
   *
   * 适用场景：分配弹性布局中的剩余空间，或让项目保持自身尺寸。
   *
   * 常用值：`auto`、`none`。
   * @example
   * css({ flex: "1 1 0%" })
   * @example
   * css({ flex: "none" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly flex?: PropertyValue<'flex', T>;
  /**
   * 设置弹性项目分配剩余空间之前的主轴基础尺寸。
   *
   * 在剩余空间分配前确定项目的主轴基础尺寸；设置为 auto 时先参考对应的 width/height。
   *
   * 适用场景：为侧栏、内容区或重复项目指定弹性分配的起始尺寸。
   *
   * 常用值：`auto`、`content`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ flexBasis: "16rem" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly flexBasis?: PropertyValue<'flexBasis', T>;
  /**
   * 设置弹性容器的主轴方向及项目排列方向。
   *
   * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
   *
   * 常用值：`row`、`column`、`row-reverse`、`column-reverse`。
   *
   * CSS 规范初始值：`row`，不同于浏览器默认样式表。
   * @example
   * css({ display: "flex", flexDirection: "column", gap: "1rem" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
   */
  readonly flexDirection?: PropertyValue<'flexDirection', T>;
  /**
   * 同时设置弹性布局的主轴方向和换行方式。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly flexFlow?: PropertyValue<'flexFlow', T>;
  /**
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * 数值是分配正剩余空间的相对权重，不是最终宽度百分比。只有容器存在剩余空间时才发挥作用。
   *
   * 适用场景：让主内容区填充工具栏或行布局的剩余空间。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @example
   * css({ flexGrow: 1 })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
   */
  readonly flexGrow?: PropertyValue<'flexGrow', T>;
  /**
   * 设置弹性项目空间不足时的收缩系数。
   *
   * 实际收缩还与 flex-basis 成比例；自动最小尺寸可能阻止项目继续缩小。
   *
   * 适用场景：控制空间不足时是否允许缩小；设置为 0 可避免图标或固定控件收缩。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @example
   * css({ flexShrink: 0 })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
   */
  readonly flexShrink?: PropertyValue<'flexShrink', T>;
  /**
   * 设置弹性项目是否换行，以及多行的排列方向。
   *
   * 适用场景：标签、按钮等项目不足一行时允许分行。
   *
   * 常用值：`nowrap`、`wrap`、`wrap-reverse`。
   *
   * CSS 规范初始值：`nowrap`，不同于浏览器默认样式表。
   * @example
   * css({ display: "flex", flexWrap: "wrap", gap: "0.5rem" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  readonly flexWrap?: PropertyValue<'flexWrap', T>;
  /**
   * 将元素浮动到指定侧，使相邻行内内容围绕它排列。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  readonly float?: PropertyValue<'float', T>;
  /**
   * 集中设置显式和隐式网格的轨道、区域及自动放置方式。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  readonly grid?: PropertyValue<'grid', T>;
  /**
   * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  readonly gridArea?: PropertyValue<'gridArea', T>;
  /**
   * 设置隐式生成的网格列尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  readonly gridAutoColumns?: PropertyValue<'gridAutoColumns', T>;
  /**
   * 设置网格自动放置算法的行列方向及是否密集填洞。
   *
   * dense 可能改变视觉顺序，但不改变 DOM 和键盘导航顺序。
   *
   * 适用场景：控制未明确指定位置的网格项目如何自动填入轨道。
   *
   * 常用值：`row`、`column`、`dense`。
   *
   * CSS 规范初始值：`row`，不同于浏览器默认样式表。
   * @example
   * css({ display: "grid", gridAutoFlow: "row" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
   */
  readonly gridAutoFlow?: PropertyValue<'gridAutoFlow', T>;
  /**
   * 设置隐式生成的网格行尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  readonly gridAutoRows?: PropertyValue<'gridAutoRows', T>;
  /**
   * 设置网格项目的列起点和列终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  readonly gridColumn?: PropertyValue<'gridColumn', T>;
  /**
   * 设置网格项目的列终止线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  readonly gridColumnEnd?: PropertyValue<'gridColumnEnd', T>;
  /**
   * 设置网格项目的列起始线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  readonly gridColumnStart?: PropertyValue<'gridColumnStart', T>;
  /**
   * 设置网格项目的行起点和行终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  readonly gridRow?: PropertyValue<'gridRow', T>;
  /**
   * 设置网格项目的行终止线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  readonly gridRowEnd?: PropertyValue<'gridRowEnd', T>;
  /**
   * 设置网格项目的行起始线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  readonly gridRowStart?: PropertyValue<'gridRowStart', T>;
  /**
   * 集中设置显式网格的行、列和命名区域。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  readonly gridTemplate?: PropertyValue<'gridTemplate', T>;
  /**
   * 用区域名称矩阵定义网格布局区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  readonly gridTemplateAreas?: PropertyValue<'gridTemplateAreas', T>;
  /**
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * 每个轨道值定义一列；fr 分配剩余空间。需要允许长内容所在列缩小时，可使用 minmax(0, 1fr)。
   *
   * 适用场景：响应式卡片、表单标签与输入框的列布局。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  readonly gridTemplateColumns?: PropertyValue<'gridTemplateColumns', T>;
  /**
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * 每个轨道值定义一行，未显式定义的行使用 grid-auto-rows。
   *
   * 适用场景：区分固定工具栏和可伸缩内容区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ gridTemplateRows: "auto minmax(0, 1fr)" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  readonly gridTemplateRows?: PropertyValue<'gridTemplateRows', T>;
  /**
   * 同时设置定位元素的上、右、下、左偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  readonly inset?: PropertyValue<'inset', T>;
  /**
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  readonly insetBlock?: PropertyValue<'insetBlock', T>;
  /**
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  readonly insetBlockEnd?: PropertyValue<'insetBlockEnd', T>;
  /**
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  readonly insetBlockStart?: PropertyValue<'insetBlockStart', T>;
  /**
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  readonly insetInline?: PropertyValue<'insetInline', T>;
  /**
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  readonly insetInlineEnd?: PropertyValue<'insetInlineEnd', T>;
  /**
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  readonly insetInlineStart?: PropertyValue<'insetInlineStart', T>;
  /**
   * 分配布局主轴或行内轴的剩余空间，控制内容整体对齐。
   *
   * Flex 中沿主轴分配空间，Grid 中沿行内轴对齐网格整体。没有剩余空间时，空间分配效果可能不明显。
   *
   * 常用值：`center`、`space-between`、`space-around`、`space-evenly`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ display: "flex", justifyContent: "space-between" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  readonly justifyContent?: PropertyValue<'justifyContent', T>;
  /**
   * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。
   *
   * CSS 规范初始值：`legacy`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly justifyItems?: PropertyValue<'justifyItems', T>;
  /**
   * 单独设置项目在其布局区域内的行内轴对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly justifySelf?: PropertyValue<'justifySelf', T>;
  /**
   * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly justifyTracks?: PropertyValue<'justifyTracks', T>;
  /**
   * 设置定位元素相对于其定位参照的左侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  readonly left?: PropertyValue<'left', T>;
  /**
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
   */
  readonly order?: PropertyValue<'order', T>;
  /**
   * 同时设置 align-content 与 justify-content。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly placeContent?: PropertyValue<'placeContent', T>;
  /**
   * 同时设置 align-items 与 justify-items。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly placeItems?: PropertyValue<'placeItems', T>;
  /**
   * 同时设置 align-self 与 justify-self。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly placeSelf?: PropertyValue<'placeSelf', T>;
  /**
   * 设置元素的定位方式，并决定偏移属性如何参与布局。
   *
   * 偏移通常通过 top/right/bottom/left 或逻辑 inset 属性设置。fixed 和 absolute 的包含块也可能由 transform 等属性建立。
   *
   * 适用场景：建立定位参照、覆盖层、固定区域或滚动吸附内容。
   *
   * 常用值：`static`、`relative`、`absolute`、`fixed`、`sticky`。
   *
   * CSS 规范初始值：`static`，不同于浏览器默认样式表。
   * @example
   * css({ position: "sticky", top: "0px" })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly position?: PropertyValue<'position', T>;
  /**
   * 选择绝对定位元素使用的默认锚点。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  readonly positionAnchor?: PropertyValue<'positionAnchor', T>;
  /**
   * 选择相对于锚点的定位区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly positionArea?: PropertyValue<'positionArea', T>;
  /**
   * 同时设置锚点定位的候选回退方式及尝试顺序。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly positionTry?: PropertyValue<'positionTry', T>;
  /**
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly positionTryFallbacks?: PropertyValue<'positionTryFallbacks', T>;
  /**
   * 设置锚点定位候选方案的尝试顺序。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  readonly positionTryOrder?: PropertyValue<'positionTryOrder', T>;
  /**
   * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。
   *
   * CSS 规范初始值：`anchors-visible`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  readonly positionVisibility?: PropertyValue<'positionVisibility', T>;
  /**
   * 设置定位元素相对于其定位参照的右侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  readonly right?: PropertyValue<'right', T>;
  /**
   * 设置定位元素相对于其定位参照的上侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  readonly top?: PropertyValue<'top', T>;
  /**
   * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。
   *
   * CSS 规范初始值：`baseline`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly verticalAlign?: PropertyValue<'verticalAlign', T>;
  /**
   * 设置元素在所属层叠上下文中的层叠级别。
   *
   * 数值只在所属层叠上下文内比较；更大的数值不保证盖过其他层叠上下文。Flex/Grid 项目也可以使用 z-index。
   *
   * 适用场景：控制同一层叠上下文中的浮层顺序，排查遮挡时先确认祖先层叠上下文。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ position: "relative", zIndex: 1 })
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
   */
  readonly zIndex?: PropertyValue<'zIndex', T>;
}
/** 尺寸与比例；泛型 T 保留系统与继承主题关键字。 */
export interface SizingProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 设置盒子的首选宽高比，参与自动尺寸计算。
   *
   * 通常需要至少一个轴为自动尺寸才参与尺寸计算；两个轴都被明确尺寸约束时，不会强行保持比例。
   *
   * 适用场景：图片占位、视频和卡片封面区域。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ aspectRatio: "16 / 9", width: "100%" })
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
   */
  readonly aspectRatio?: PropertyValue<'aspectRatio', T>;
  /**
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * 水平书写时通常对应 height，竖直书写时通常对应 width。
   *
   * 适用场景：使用逻辑轴表达内容块尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ blockSize: "10rem" })
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  readonly blockSize?: PropertyValue<'blockSize', T>;
  /**
   * 决定 width、height 等尺寸是否包含内边距和边框。
   *
   * 适用场景：确定组件声明宽高时是否把 padding 和 border 算在尺寸内。
   *
   * 常用值：`content-box`、`border-box`。
   *
   * CSS 规范初始值：`content-box`，不同于浏览器默认样式表。
   * @example
   * css({ boxSizing: "border-box", width: "20rem", padding: "1rem" })
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
   */
  readonly boxSizing?: PropertyValue<'boxSizing', T>;
  /**
   * 设置元素的物理高度，盒子范围受 box-sizing 影响。
   *
   * 百分比高度能否解析取决于包含块的尺寸确定方式；设置 100% 不自动等于视口高度。
   *
   * 适用场景：控制物理高度；滚动面板通常结合 max-height 和 overflow。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ maxHeight: "20rem", overflowY: "auto" })
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  readonly height?: PropertyValue<'height', T>;
  /**
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * 水平书写时通常对应 width，竖直书写时通常对应 height。实际尺寸还受 min-inline-size/max-inline-size 和 box-sizing 约束。
   *
   * 适用场景：希望布局尺寸跟随书写模式变化的组件。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ inlineSize: "20rem" })
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  readonly inlineSize?: PropertyValue<'inlineSize', T>;
  /**
   * 限制元素逻辑块轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  readonly maxBlockSize?: PropertyValue<'maxBlockSize', T>;
  /**
   * 限制元素的最大物理高度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly maxHeight?: PropertyValue<'maxHeight', T>;
  /**
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  readonly maxInlineSize?: PropertyValue<'maxInlineSize', T>;
  /**
   * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  readonly maxLines?: PropertyValue<'maxLines', T>;
  /**
   * 限制元素的最大物理宽度。
   *
   * 限制最终宽度，不会单独要求元素达到该宽度。最小尺寸约束可能优先于较小的最大尺寸。
   *
   * 适用场景：限制正文行长、弹窗宽度或响应式内容区。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ width: "100%", maxWidth: "48rem" })
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly maxWidth?: PropertyValue<'maxWidth', T>;
  /**
   * 设置元素逻辑块轴的最小尺寸。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  readonly minBlockSize?: PropertyValue<'minBlockSize', T>;
  /**
   * 设置元素的最小物理高度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly minHeight?: PropertyValue<'minHeight', T>;
  /**
   * 设置元素逻辑行内轴的最小尺寸。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  readonly minInlineSize?: PropertyValue<'minInlineSize', T>;
  /**
   * 设置元素的最小物理宽度。
   *
   * Flex/Grid 项目的 auto 最小尺寸可能由内容决定。需要允许其收缩时，可以按布局目的设置 min-width:0。
   *
   * 适用场景：给控件设置最小可用宽度，或用 0 允许 Flex/Grid 子项突破自动内容最小宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ minWidth: "0px" })
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly minWidth?: PropertyValue<'minWidth', T>;
  /**
   * 设置元素的物理宽度，盒子范围受 box-sizing 影响。
   *
   * 百分比依据包含块解析；auto、内部尺寸和最小/最大约束共同决定最终使用尺寸。
   *
   * 适用场景：控制物理宽度；支持书写模式的布局可优先考虑 inline-size。
   *
   * 常用值：`auto`、`min-content`、`max-content`、`fit-content`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ width: "20rem" })
   * @example
   * css({ width: "clamp(12rem, 50vw, 40rem)" })
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly width?: PropertyValue<'width', T>;
}
/** 内外间距；泛型 T 保留系统与继承主题关键字。 */
export interface SpacingProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 设置布局中相邻列之间的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  readonly columnGap?: PropertyValue<'columnGap', T>;
  /**
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。
   *
   * 两个值依次为 row-gap 和 column-gap；在 Flex 中对应项目还是行间距取决于 flex-direction。它不增加容器外缘的间距。
   *
   * 适用场景：给 Flex/Grid 项目设置统一间隔，避免逐个项目添加 margin。
   * @example
   * css({ gap: "8px 16px" })
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
   */
  readonly gap?: PropertyValue<'gap', T>;
  /**
   * 设置盒子四周的外边距，可使用负值或自动外边距。
   *
   * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。块布局中的垂直外边距可能折叠。
   *
   * 适用场景：控制盒子外侧与相邻内容的距离；布局项统一间隔可考虑容器 gap。
   * @example
   * css({ margin: "8px 16px" })
   * @example
   * css({ margin: "0 auto" })
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
   */
  readonly margin?: PropertyValue<'margin', T>;
  /**
   * 设置逻辑块轴起始侧和结束侧的外边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  readonly marginBlock?: PropertyValue<'marginBlock', T>;
  /**
   * 设置逻辑块轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  readonly marginBlockEnd?: PropertyValue<'marginBlockEnd', T>;
  /**
   * 设置逻辑块轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  readonly marginBlockStart?: PropertyValue<'marginBlockStart', T>;
  /**
   * 设置下外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  readonly marginBottom?: PropertyValue<'marginBottom', T>;
  /**
   * 设置逻辑行内轴起始侧和结束侧的外边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  readonly marginInline?: PropertyValue<'marginInline', T>;
  /**
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  readonly marginInlineEnd?: PropertyValue<'marginInlineEnd', T>;
  /**
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  readonly marginInlineStart?: PropertyValue<'marginInlineStart', T>;
  /**
   * 设置左外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  readonly marginLeft?: PropertyValue<'marginLeft', T>;
  /**
   * 设置右外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  readonly marginRight?: PropertyValue<'marginRight', T>;
  /**
   * 设置上外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  readonly marginTop?: PropertyValue<'marginTop', T>;
  /**
   * 控制容器边缘处子元素外边距的裁减。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  readonly marginTrim?: PropertyValue<'marginTrim', T>;
  /**
   * 设置内容与边框之间的四边内边距，不接受负值。
   *
   * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。不能使用负值或 auto。
   *
   * 适用场景：控制文字或子元素与组件边框之间的留白。
   * @example
   * css({ padding: "0.5rem 1rem" })
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
   */
  readonly padding?: PropertyValue<'padding', T>;
  /**
   * 设置逻辑块轴起始侧和结束侧的内边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  readonly paddingBlock?: PropertyValue<'paddingBlock', T>;
  /**
   * 设置逻辑块轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  readonly paddingBlockEnd?: PropertyValue<'paddingBlockEnd', T>;
  /**
   * 设置逻辑块轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  readonly paddingBlockStart?: PropertyValue<'paddingBlockStart', T>;
  /**
   * 设置下内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  readonly paddingBottom?: PropertyValue<'paddingBottom', T>;
  /**
   * 设置逻辑行内轴起始侧和结束侧的内边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  readonly paddingInline?: PropertyValue<'paddingInline', T>;
  /**
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  readonly paddingInlineEnd?: PropertyValue<'paddingInlineEnd', T>;
  /**
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  readonly paddingInlineStart?: PropertyValue<'paddingInlineStart', T>;
  /**
   * 设置左内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  readonly paddingLeft?: PropertyValue<'paddingLeft', T>;
  /**
   * 设置右内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  readonly paddingRight?: PropertyValue<'paddingRight', T>;
  /**
   * 设置上内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  readonly paddingTop?: PropertyValue<'paddingTop', T>;
  /**
   * 设置布局中相邻行之间的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  readonly rowGap?: PropertyValue<'rowGap', T>;
}
/** 文字与排版；泛型 T 保留系统与继承主题关键字。 */
export interface TypographyProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 设置文本基本方向，参与双向文本及部分布局计算。
   *
   * CSS 规范初始值：`ltr`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  readonly direction?: PropertyValue<'direction', T>;
  /**
   * 集中设置字体样式、粗细、大小、行高和字体族等信息。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  readonly font?: PropertyValue<'font', T>;
  /**
   * 设置按优先级排列的字体族及通用字体回退。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly fontFamily?: PropertyValue<'fontFamily', T>;
  /**
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  readonly fontFeatureSettings?: PropertyValue<'fontFeatureSettings', T>;
  /**
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  readonly fontKerning?: PropertyValue<'fontKerning', T>;
  /**
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  readonly fontLanguageOverride?: PropertyValue<'fontLanguageOverride', T>;
  /**
   * 控制支持光学尺寸轴的字体是否按字号优化字形。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  readonly fontOpticalSizing?: PropertyValue<'fontOpticalSizing', T>;
  /**
   * 选择或覆盖彩色字体使用的调色板。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  readonly fontPalette?: PropertyValue<'fontPalette', T>;
  /**
   * 设置字体大小，也影响 em 等相对单位的计算。
   *
   * 改变字形大小，并影响 em 等相对长度；行盒高度还由 line-height 决定。
   *
   * 适用场景：建立文字层级，根字号相对尺寸可用 rem 表达。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @example
   * css({ fontSize: "1rem", lineHeight: 1.5 })
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly fontSize?: PropertyValue<'fontSize', T>;
  /**
   * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  readonly fontSizeAdjust?: PropertyValue<'fontSizeAdjust', T>;
  /**
   * 控制字体平滑的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly fontSmooth?: PropertyValue<'fontSmooth', T>;
  /**
   * 选择正常、斜体或倾斜字体样式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  readonly fontStyle?: PropertyValue<'fontStyle', T>;
  /**
   * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。
   *
   * CSS 规范初始值：`weight style small-caps position `，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  readonly fontSynthesis?: PropertyValue<'fontSynthesis', T>;
  /**
   * 控制浏览器是否可以合成上标和下标字形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  readonly fontSynthesisPosition?: PropertyValue<'fontSynthesisPosition', T>;
  /**
   * 控制浏览器是否可以合成小型大写字形。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  readonly fontSynthesisSmallCaps?: PropertyValue<'fontSynthesisSmallCaps', T>;
  /**
   * 控制浏览器是否可以合成倾斜字体。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  readonly fontSynthesisStyle?: PropertyValue<'fontSynthesisStyle', T>;
  /**
   * 控制浏览器是否可以合成加粗字体。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  readonly fontSynthesisWeight?: PropertyValue<'fontSynthesisWeight', T>;
  /**
   * 集中设置字体的连字、大小写、数字及其他变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly fontVariant?: PropertyValue<'fontVariant', T>;
  /**
   * 选择字体提供的替代字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  readonly fontVariantAlternates?: PropertyValue<'fontVariantAlternates', T>;
  /**
   * 设置小型大写等大小写字形变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly fontVariantCaps?: PropertyValue<'fontVariantCaps', T>;
  /**
   * 设置东亚文字字形及宽度变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly fontVariantEastAsian?: PropertyValue<'fontVariantEastAsian', T>;
  /**
   * 设置字符优先采用文本字形还是 emoji 字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  readonly fontVariantEmoji?: PropertyValue<'fontVariantEmoji', T>;
  /**
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly fontVariantLigatures?: PropertyValue<'fontVariantLigatures', T>;
  /**
   * 设置数字的等宽、比例、分数及其他排版变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly fontVariantNumeric?: PropertyValue<'fontVariantNumeric', T>;
  /**
   * 选择字体提供的上标或下标字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  readonly fontVariantPosition?: PropertyValue<'fontVariantPosition', T>;
  /**
   * 直接设置可变字体各个轴的数值。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  readonly fontVariationSettings?: PropertyValue<'fontVariationSettings', T>;
  /**
   * 设置字体粗细，实际可用字重取决于字体。
   *
   * 最终字形取决于已加载字体和可用字重；变量字体可支持连续的字重范围。
   *
   * 适用场景：正文、强调文字和标题的视觉层级。
   *
   * 常用值：`normal`、`bold`、`bolder`、`lighter`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ fontWeight: 600 })
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
   */
  readonly fontWeight?: PropertyValue<'fontWeight', T>;
  /**
   * 选择字体的宽窄字面，不是通过变换拉伸元素。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly fontWidth?: PropertyValue<'fontWidth', T>;
  /**
   * 控制标点是否可以悬挂在行盒边缘之外。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  readonly hangingPunctuation?: PropertyValue<'hangingPunctuation', T>;
  /**
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  readonly hyphens?: PropertyValue<'hyphens', T>;
  /**
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  readonly initialLetter?: PropertyValue<'initialLetter', T>;
  /**
   * 设置首字下沉时字形与正文使用的对齐基线。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  readonly initialLetterAlign?: PropertyValue<'initialLetterAlign', T>;
  /**
   * 设置字符之间额外增加或减少的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  readonly letterSpacing?: PropertyValue<'letterSpacing', T>;
  /**
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  readonly lineBreak?: PropertyValue<'lineBreak', T>;
  /**
   * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  readonly lineClamp?: PropertyValue<'lineClamp', T>;
  /**
   * 设置行盒高度；无单位数值按元素自身字号计算。
   *
   * 无单位数字作为倍数继承；长度值按长度继承。单独设置行高不会自动实现多行文本垂直居中。
   *
   * 适用场景：控制正文行间节奏；可继承的字号倍数通常比固定长度更适合嵌套文字。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ lineHeight: 1.5 })
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
   */
  readonly lineHeight?: PropertyValue<'lineHeight', T>;
  /**
   * 设置行盒高度向上取整使用的步长。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  readonly lineHeightStep?: PropertyValue<'lineHeightStep', T>;
  /**
   * 设置生成引号所用的开闭字符对。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  readonly quotes?: PropertyValue<'quotes', T>;
  /**
   * 设置注音文字与基底文字之间剩余空间的分配方式。
   *
   * CSS 规范初始值：`space-around`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  readonly rubyAlign?: PropertyValue<'rubyAlign', T>;
  /**
   * 设置相邻注音容器的合并方式；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`separate`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  readonly rubyMerge?: PropertyValue<'rubyMerge', T>;
  /**
   * 控制注音文字是否可以悬伸到相邻文本上方。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  readonly rubyOverhang?: PropertyValue<'rubyOverhang', T>;
  /**
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：`alternate`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  readonly rubyPosition?: PropertyValue<'rubyPosition', T>;
  /**
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：`8`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  readonly tabSize?: PropertyValue<'tabSize', T>;
  /**
   * 设置块容器中行内内容的水平或逻辑方向对齐。
   *
   * 控制块容器中的行内内容，不是块盒自身的位置，也不是 Flex/Grid 项目的对齐。
   *
   * 适用场景：正文、标题和表格单元格中的文本对齐。
   *
   * 常用值：`start`、`end`、`center`、`justify`。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @example
   * css({ textAlign: "start" })
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly textAlign?: PropertyValue<'textAlign', T>;
  /**
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  readonly textAlignLast?: PropertyValue<'textAlignLast', T>;
  /**
   * 设置 SVG 文本片段相对于定位点的锚定方式。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  readonly textAnchor?: PropertyValue<'textAnchor', T>;
  /**
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly textAutospace?: PropertyValue<'textAutospace', T>;
  /**
   * 同时设置文本盒边缘参照及首尾空白裁减。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly textBox?: PropertyValue<'textBox', T>;
  /**
   * 选择文本盒裁减或对齐使用的字体边缘度量。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  readonly textBoxEdge?: PropertyValue<'textBoxEdge', T>;
  /**
   * 裁减文本块开头或结尾的额外行高空白。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  readonly textBoxTrim?: PropertyValue<'textBoxTrim', T>;
  /**
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  readonly textCombineUpright?: PropertyValue<'textCombineUpright', T>;
  /**
   * 集中设置文本装饰线的位置、线型、颜色及粗细。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  readonly textDecoration?: PropertyValue<'textDecoration', T>;
  /**
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  readonly textDecorationColor?: PropertyValue<'textDecorationColor', T>;
  /**
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly textDecorationLine?: PropertyValue<'textDecorationLine', T>;
  /**
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：`objects`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly textDecorationSkip?: PropertyValue<'textDecorationSkip', T>;
  /**
   * 设置装饰线是否避让字形的笔画。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  readonly textDecorationSkipInk?: PropertyValue<'textDecorationSkipInk', T>;
  /**
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：`solid`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  readonly textDecorationStyle?: PropertyValue<'textDecorationStyle', T>;
  /**
   * 设置文本装饰线粗细。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  readonly textDecorationThickness?: PropertyValue<'textDecorationThickness', T>;
  /**
   * 同时设置文字着重号的样式和颜色。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  readonly textEmphasis?: PropertyValue<'textEmphasis', T>;
  /**
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  readonly textEmphasisColor?: PropertyValue<'textEmphasisColor', T>;
  /**
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  readonly textEmphasisPosition?: PropertyValue<'textEmphasisPosition', T>;
  /**
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  readonly textEmphasisStyle?: PropertyValue<'textEmphasisStyle', T>;
  /**
   * 设置文本行的缩进距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  readonly textIndent?: PropertyValue<'textIndent', T>;
  /**
   * 设置两端对齐时增加间距的算法。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  readonly textJustify?: PropertyValue<'textJustify', T>;
  /**
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：`mixed`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  readonly textOrientation?: PropertyValue<'textOrientation', T>;
  /**
   * 设置被裁剪的行内溢出文本如何提示，例如显示省略号。
   *
   * 本属性不自行制造溢出。单行省略通常还需要受限宽度、overflow:hidden 和 white-space:nowrap。
   *
   * 适用场景：受限宽度中的单行标题或标签。多行截断需要单独的布局和截行方案。
   *
   * 常用值：`ellipsis`、`clip`。
   *
   * CSS 规范初始值：`clip`，不同于浏览器默认样式表。
   * @example
   * css({ maxWidth: "12rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" })
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
   */
  readonly textOverflow?: PropertyValue<'textOverflow', T>;
  /**
   * 向渲染器提供文本速度、可读性或几何精度的偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  readonly textRendering?: PropertyValue<'textRendering', T>;
  /**
   * 设置文字及其装饰的阴影，可叠加多层。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  readonly textShadow?: PropertyValue<'textShadow', T>;
  /**
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  readonly textSizeAdjust?: PropertyValue<'textSizeAdjust', T>;
  /**
   * 设置东亚文字标点等字符周围空白的裁减。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  readonly textSpacingTrim?: PropertyValue<'textSpacingTrim', T>;
  /**
   * 设置文字显示时的大小写、全角或其他字形转换。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly textTransform?: PropertyValue<'textTransform', T>;
  /**
   * 设置下划线相对于默认位置的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  readonly textUnderlineOffset?: PropertyValue<'textUnderlineOffset', T>;
  /**
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  readonly textUnderlinePosition?: PropertyValue<'textUnderlinePosition', T>;
  /**
   * 同时设置文本是否换行及换行策略。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  readonly textWrap?: PropertyValue<'textWrap', T>;
  /**
   * 设置文本是否允许软换行。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  readonly textWrapMode?: PropertyValue<'textWrapMode', T>;
  /**
   * 设置文本换行的排版策略，例如平衡各行长度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  readonly textWrapStyle?: PropertyValue<'textWrapStyle', T>;
  /**
   * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly unicodeBidi?: PropertyValue<'unicodeBidi', T>;
  /**
   * 设置空白折叠和换行处理方式。
   *
   * 同时影响空白折叠和软换行。它不负责给溢出内容添加省略号。
   *
   * 适用场景：单行标签、保留换行的用户文本和代码片段。
   *
   * 常用值：`normal`、`nowrap`、`pre`、`pre-wrap`、`pre-line`、`break-spaces`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ whiteSpace: "pre-wrap" })
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  readonly whiteSpace?: PropertyValue<'whiteSpace', T>;
  /**
   * 设置空格、制表符和换行符如何折叠或保留。
   *
   * CSS 规范初始值：`collapse`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  readonly whiteSpaceCollapse?: PropertyValue<'whiteSpaceCollapse', T>;
  /**
   * 设置单词内部或文字之间的断行规则。
   *
   * 按字符和语言控制断行。仅需避免超长单词溢出时，通常先考虑 overflow-wrap。
   *
   * 常用值：`normal`、`break-all`、`keep-all`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ wordBreak: "normal" })
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  readonly wordBreak?: PropertyValue<'wordBreak', T>;
  /**
   * 设置单词或词间分隔符的额外间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  readonly wordSpacing?: PropertyValue<'wordSpacing', T>;
  /**
   * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  readonly wordWrap?: PropertyValue<'wordWrap', T>;
  /**
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：`horizontal-tb`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly writingMode?: PropertyValue<'writingMode', T>;
}
/** 颜色与背景；泛型 T 保留系统与继承主题关键字。 */
export interface ColorsProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  readonly accentColor?: PropertyValue<'accentColor', T>;
  /**
   * 集中设置背景颜色、图像、位置、尺寸、重复及绘制区域。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  readonly background?: PropertyValue<'background', T>;
  /**
   * 设置背景图像相对于视口、元素或局部滚动内容的固定方式。
   *
   * CSS 规范初始值：`scroll`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  readonly backgroundAttachment?: PropertyValue<'backgroundAttachment', T>;
  /**
   * 设置背景图层彼此之间以及与背景色之间的混合模式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly backgroundBlendMode?: PropertyValue<'backgroundBlendMode', T>;
  /**
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  readonly backgroundClip?: PropertyValue<'backgroundClip', T>;
  /**
   * 设置元素背景颜色，位于背景图像下方。
   *
   * CSS 规范初始值：`transparent`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  readonly backgroundColor?: PropertyValue<'backgroundColor', T>;
  /**
   * 设置一个或多个背景图像或渐变图层。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  readonly backgroundImage?: PropertyValue<'backgroundImage', T>;
  /**
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  readonly backgroundOrigin?: PropertyValue<'backgroundOrigin', T>;
  /**
   * 设置背景图像在定位区域内的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  readonly backgroundPosition?: PropertyValue<'backgroundPosition', T>;
  /**
   * 设置背景图像的水平位置。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  readonly backgroundPositionX?: PropertyValue<'backgroundPositionX', T>;
  /**
   * 设置背景图像的垂直位置。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  readonly backgroundPositionY?: PropertyValue<'backgroundPositionY', T>;
  /**
   * 设置背景图像在水平和垂直方向上的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly backgroundRepeat?: PropertyValue<'backgroundRepeat', T>;
  /**
   * 设置背景图像尺寸，以及覆盖或完整容纳图像的缩放方式。
   *
   * 改变背景图像的尺寸，不改变元素尺寸；位置由 background-position 决定。
   *
   * 适用场景：背景封面或需要完整显示的背景装饰。
   *
   * 常用值：`auto`、`contain`、`cover`。
   *
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @example
   * css({ backgroundSize: "cover", backgroundPosition: "center" })
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
   */
  readonly backgroundSize?: PropertyValue<'backgroundSize', T>;
  /**
   * 设置可编辑内容中的文本插入光标颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  readonly caretColor?: PropertyValue<'caretColor', T>;
  /**
   * 设置文字前景色，同时作为 currentColor 的来源。
   *
   * 改变文字和 currentColor 的来源，不会自动改变背景。颜色函数方法返回完整 color 声明。
   *
   * CSS 规范初始值：`canvastext`，不同于浏览器默认样式表。
   * @example
   * css({ color: "rgb(255 0 0 / 0.5)" })
   * @example
   * css({ color: "oklch(0.7 0.15 250)" })
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
   */
  readonly color?: PropertyValue<'color', T>;
  /**
   * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  readonly colorAdjust?: PropertyValue<'colorAdjust', T>;
  /**
   * 设置 SVG 图形颜色插值所用的色彩空间。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  readonly colorInterpolation?: PropertyValue<'colorInterpolation', T>;
  /**
   * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。
   *
   * CSS 规范初始值：`linearRGB`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  readonly colorInterpolationFilters?: PropertyValue<'colorInterpolationFilters', T>;
  /**
   * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  readonly colorRendering?: PropertyValue<'colorRendering', T>;
  /**
   * 声明元素支持的配色方案，影响原生控件、滚动条等浏览器绘制内容。
   *
   * 声明支持的方案不等于为应用生成主题颜色；文字、背景和业务 token 仍需自行定义。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  readonly colorScheme?: PropertyValue<'colorScheme', T>;
  /**
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  readonly printColorAdjust?: PropertyValue<'printColorAdjust', T>;
}
/** 边框与轮廓；泛型 T 保留系统与继承主题关键字。 */
export interface BordersProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 同时设置四边边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  readonly border?: PropertyValue<'border', T>;
  /**
   * 设置逻辑块轴起始侧和结束侧的边框。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  readonly borderBlock?: PropertyValue<'borderBlock', T>;
  /**
   * 设置逻辑块轴两侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  readonly borderBlockColor?: PropertyValue<'borderBlockColor', T>;
  /**
   * 设置逻辑块轴结束侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  readonly borderBlockEnd?: PropertyValue<'borderBlockEnd', T>;
  /**
   * 设置逻辑块轴结束侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  readonly borderBlockEndColor?: PropertyValue<'borderBlockEndColor', T>;
  /**
   * 设置逻辑块轴结束侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly borderBlockEndStyle?: PropertyValue<'borderBlockEndStyle', T>;
  /**
   * 设置逻辑块轴结束侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  readonly borderBlockEndWidth?: PropertyValue<'borderBlockEndWidth', T>;
  /**
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  readonly borderBlockStart?: PropertyValue<'borderBlockStart', T>;
  /**
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  readonly borderBlockStartColor?: PropertyValue<'borderBlockStartColor', T>;
  /**
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly borderBlockStartStyle?: PropertyValue<'borderBlockStartStyle', T>;
  /**
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  readonly borderBlockStartWidth?: PropertyValue<'borderBlockStartWidth', T>;
  /**
   * 设置逻辑块轴两侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly borderBlockStyle?: PropertyValue<'borderBlockStyle', T>;
  /**
   * 设置逻辑块轴两侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  readonly borderBlockWidth?: PropertyValue<'borderBlockWidth', T>;
  /**
   * 设置下边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  readonly borderBottom?: PropertyValue<'borderBottom', T>;
  /**
   * 设置下边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  readonly borderBottomColor?: PropertyValue<'borderBottomColor', T>;
  /**
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  readonly borderBottomLeftRadius?: PropertyValue<'borderBottomLeftRadius', T>;
  /**
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  readonly borderBottomRightRadius?: PropertyValue<'borderBottomRightRadius', T>;
  /**
   * 设置下边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly borderBottomStyle?: PropertyValue<'borderBottomStyle', T>;
  /**
   * 设置下边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  readonly borderBottomWidth?: PropertyValue<'borderBottomWidth', T>;
  /**
   * 设置表格相邻单元格边框合并还是分离。
   *
   * CSS 规范初始值：`separate`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  readonly borderCollapse?: PropertyValue<'borderCollapse', T>;
  /**
   * 设置四边边框颜色，支持按上、右、下、左顺序简写。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  readonly borderColor?: PropertyValue<'borderColor', T>;
  /**
   * 设置逻辑块轴结束侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  readonly borderEndEndRadius?: PropertyValue<'borderEndEndRadius', T>;
  /**
   * 设置逻辑块轴结束侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  readonly borderEndStartRadius?: PropertyValue<'borderEndStartRadius', T>;
  /**
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  readonly borderImage?: PropertyValue<'borderImage', T>;
  /**
   * 设置边框图像超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  readonly borderImageOutset?: PropertyValue<'borderImageOutset', T>;
  /**
   * 设置边框图像切片沿边框的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  readonly borderImageRepeat?: PropertyValue<'borderImageRepeat', T>;
  /**
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：`100%`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  readonly borderImageSlice?: PropertyValue<'borderImageSlice', T>;
  /**
   * 指定边框使用的图像或渐变。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  readonly borderImageSource?: PropertyValue<'borderImageSource', T>;
  /**
   * 设置边框图像各边的绘制宽度。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  readonly borderImageWidth?: PropertyValue<'borderImageWidth', T>;
  /**
   * 设置逻辑行内轴起始侧和结束侧的边框。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  readonly borderInline?: PropertyValue<'borderInline', T>;
  /**
   * 设置逻辑行内轴两侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  readonly borderInlineColor?: PropertyValue<'borderInlineColor', T>;
  /**
   * 设置逻辑行内轴结束侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  readonly borderInlineEnd?: PropertyValue<'borderInlineEnd', T>;
  /**
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  readonly borderInlineEndColor?: PropertyValue<'borderInlineEndColor', T>;
  /**
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly borderInlineEndStyle?: PropertyValue<'borderInlineEndStyle', T>;
  /**
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  readonly borderInlineEndWidth?: PropertyValue<'borderInlineEndWidth', T>;
  /**
   * 设置逻辑行内轴起始侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  readonly borderInlineStart?: PropertyValue<'borderInlineStart', T>;
  /**
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  readonly borderInlineStartColor?: PropertyValue<'borderInlineStartColor', T>;
  /**
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly borderInlineStartStyle?: PropertyValue<'borderInlineStartStyle', T>;
  /**
   * 设置逻辑行内轴起始侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  readonly borderInlineStartWidth?: PropertyValue<'borderInlineStartWidth', T>;
  /**
   * 设置逻辑行内轴两侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly borderInlineStyle?: PropertyValue<'borderInlineStyle', T>;
  /**
   * 设置逻辑行内轴两侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  readonly borderInlineWidth?: PropertyValue<'borderInlineWidth', T>;
  /**
   * 设置左边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  readonly borderLeft?: PropertyValue<'borderLeft', T>;
  /**
   * 设置左边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  readonly borderLeftColor?: PropertyValue<'borderLeftColor', T>;
  /**
   * 设置左边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly borderLeftStyle?: PropertyValue<'borderLeftStyle', T>;
  /**
   * 设置左边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  readonly borderLeftWidth?: PropertyValue<'borderLeftWidth', T>;
  /**
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   * @example
   * css({ borderRadius: "8px" })
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
   */
  readonly borderRadius?: PropertyValue<'borderRadius', T>;
  /**
   * 设置右边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  readonly borderRight?: PropertyValue<'borderRight', T>;
  /**
   * 设置右边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  readonly borderRightColor?: PropertyValue<'borderRightColor', T>;
  /**
   * 设置右边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly borderRightStyle?: PropertyValue<'borderRightStyle', T>;
  /**
   * 设置右边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  readonly borderRightWidth?: PropertyValue<'borderRightWidth', T>;
  /**
   * 设置分离边框模型下表格单元格之间的水平和垂直间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  readonly borderSpacing?: PropertyValue<'borderSpacing', T>;
  /**
   * 设置逻辑块轴起始侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  readonly borderStartEndRadius?: PropertyValue<'borderStartEndRadius', T>;
  /**
   * 设置逻辑块轴起始侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  readonly borderStartStartRadius?: PropertyValue<'borderStartStartRadius', T>;
  /**
   * 设置四边边框线型。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  readonly borderStyle?: PropertyValue<'borderStyle', T>;
  /**
   * 设置上边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  readonly borderTop?: PropertyValue<'borderTop', T>;
  /**
   * 设置上边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  readonly borderTopColor?: PropertyValue<'borderTopColor', T>;
  /**
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  readonly borderTopLeftRadius?: PropertyValue<'borderTopLeftRadius', T>;
  /**
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  readonly borderTopRightRadius?: PropertyValue<'borderTopRightRadius', T>;
  /**
   * 设置上边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly borderTopStyle?: PropertyValue<'borderTopStyle', T>;
  /**
   * 设置上边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  readonly borderTopWidth?: PropertyValue<'borderTopWidth', T>;
  /**
   * 设置四边边框宽度；可见边框通常还需要非 none 的线型。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  readonly borderWidth?: PropertyValue<'borderWidth', T>;
  /**
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  readonly columnRule?: PropertyValue<'columnRule', T>;
  /**
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  readonly columnRuleColor?: PropertyValue<'columnRuleColor', T>;
  /**
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly columnRuleStyle?: PropertyValue<'columnRuleStyle', T>;
  /**
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  readonly columnRuleWidth?: PropertyValue<'columnRuleWidth', T>;
  /**
   * 设置盒子外围轮廓线的宽度、线型和颜色，不占布局空间。
   *
   * 不占布局空间，可用 outline-offset 调整距离；键盘焦点指示不应被无替代地移除。
   *
   * 适用场景：控件焦点指示和不影响布局的轮廓。
   * @example
   * css({ ':focus-visible': { outline: "2px solid currentColor", outlineOffset: "2px" } })
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
   */
  readonly outline?: PropertyValue<'outline', T>;
  /**
   * 设置轮廓线颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  readonly outlineColor?: PropertyValue<'outlineColor', T>;
  /**
   * 设置轮廓线与边框边缘之间的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  readonly outlineOffset?: PropertyValue<'outlineOffset', T>;
  /**
   * 设置轮廓线线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  readonly outlineStyle?: PropertyValue<'outlineStyle', T>;
  /**
   * 设置轮廓线宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  readonly outlineWidth?: PropertyValue<'outlineWidth', T>;
}
/** 视觉效果与图像；泛型 T 保留系统与继承主题关键字。 */
export interface EffectsProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  readonly backdropFilter?: PropertyValue<'backdropFilter', T>;
  /**
   * 设置盒子的外部或内部阴影，可叠加多层。
   *
   * 阴影不占布局空间，可用逗号叠加；与 border/outline 的用途和绘制位置不同。
   *
   * 适用场景：浮层层次、卡片边缘或内凹效果。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ boxShadow: "0 2px 8px rgb(0 0 0 / 0.15)" })
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
   */
  readonly boxShadow?: PropertyValue<'boxShadow', T>;
  /**
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly clipPath?: PropertyValue<'clipPath', T>;
  /**
   * 设置 SVG 裁剪路径判断内部区域所用的填充规则。
   *
   * CSS 规范初始值：`nonzero`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  readonly clipRule?: PropertyValue<'clipRule', T>;
  /**
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  readonly filter?: PropertyValue<'filter', T>;
  /**
   * 设置图像是否按元数据等信息调整方向。
   *
   * CSS 规范初始值：`from-image`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  readonly imageOrientation?: PropertyValue<'imageOrientation', T>;
  /**
   * 向浏览器指定图像缩放时的插值与清晰度偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  readonly imageRendering?: PropertyValue<'imageRendering', T>;
  /**
   * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。
   *
   * CSS 规范初始值：`1dppx`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  readonly imageResolution?: PropertyValue<'imageResolution', T>;
  /**
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly mask?: PropertyValue<'mask', T>;
  /**
   * 设置基于九宫格图像切片的边框遮罩。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  readonly maskBorder?: PropertyValue<'maskBorder', T>;
  /**
   * 设置边框遮罩使用 alpha 还是亮度信息。
   *
   * CSS 规范初始值：`alpha`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  readonly maskBorderMode?: PropertyValue<'maskBorderMode', T>;
  /**
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  readonly maskBorderOutset?: PropertyValue<'maskBorderOutset', T>;
  /**
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  readonly maskBorderRepeat?: PropertyValue<'maskBorderRepeat', T>;
  /**
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  readonly maskBorderSlice?: PropertyValue<'maskBorderSlice', T>;
  /**
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  readonly maskBorderSource?: PropertyValue<'maskBorderSource', T>;
  /**
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  readonly maskBorderWidth?: PropertyValue<'maskBorderWidth', T>;
  /**
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly maskClip?: PropertyValue<'maskClip', T>;
  /**
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：`add`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  readonly maskComposite?: PropertyValue<'maskComposite', T>;
  /**
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  readonly maskImage?: PropertyValue<'maskImage', T>;
  /**
   * 设置遮罩按 alpha、亮度或源类型解释。
   *
   * CSS 规范初始值：`match-source`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  readonly maskMode?: PropertyValue<'maskMode', T>;
  /**
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly maskOrigin?: PropertyValue<'maskOrigin', T>;
  /**
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  readonly maskPosition?: PropertyValue<'maskPosition', T>;
  /**
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly maskRepeat?: PropertyValue<'maskRepeat', T>;
  /**
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  readonly maskSize?: PropertyValue<'maskSize', T>;
  /**
   * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。
   *
   * CSS 规范初始值：`luminance`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  readonly maskType?: PropertyValue<'maskType', T>;
  /**
   * 设置元素整体与其背后内容的颜色混合方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly mixBlendMode?: PropertyValue<'mixBlendMode', T>;
  /**
   * 设置替换元素的内容如何适应其内容盒，例如图像的裁切和缩放。
   *
   * 控制 img、video 等替换内容在盒子内部的缩放与裁剪；不改变盒子本身的 width/height。
   *
   * 适用场景：封面裁剪、头像和完整图像预览。
   *
   * 常用值：`fill`、`contain`、`cover`、`none`、`scale-down`。
   *
   * CSS 规范初始值：`fill`，不同于浏览器默认样式表。
   * @example
   * css({ width: "80px", height: "80px", objectFit: "cover" })
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  readonly objectFit?: PropertyValue<'objectFit', T>;
  /**
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  readonly objectPosition?: PropertyValue<'objectPosition', T>;
  /**
   * 设置替换元素内容的可视区域，控制用于呈现的图像范围。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  readonly objectViewBox?: PropertyValue<'objectViewBox', T>;
  /**
   * 设置元素及其子树合成后的整体不透明度。
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @example
   * css({ opacity: 0.5 })
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
   */
  readonly opacity?: PropertyValue<'opacity', T>;
  /**
   * 设置从图像 alpha 信息提取环绕形状时的阈值。
   *
   * CSS 规范初始值：`0.0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  readonly shapeImageThreshold?: PropertyValue<'shapeImageThreshold', T>;
  /**
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  readonly shapeMargin?: PropertyValue<'shapeMargin', T>;
  /**
   * 设置浮动元素周围行内内容所环绕的形状。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  readonly shapeOutside?: PropertyValue<'shapeOutside', T>;
  /**
   * 向 SVG 渲染器提供图形绘制精度与速度的偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  readonly shapeRendering?: PropertyValue<'shapeRendering', T>;
}
/** 动画与变换；泛型 T 保留系统与继承主题关键字。 */
export interface MotionProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly animation?: PropertyValue<'animation', T>;
  /**
   * 设置动画效果与底层属性值的替换、叠加或累积方式。
   *
   * CSS 规范初始值：`replace`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  readonly animationComposition?: PropertyValue<'animationComposition', T>;
  /**
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  readonly animationDelay?: PropertyValue<'animationDelay', T>;
  /**
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  readonly animationDirection?: PropertyValue<'animationDirection', T>;
  /**
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  readonly animationDuration?: PropertyValue<'animationDuration', T>;
  /**
   * 设置动画在有效播放区间之外是否应用关键帧样式。
   *
   * 控制动画有效播放区间之外的样式，不会把最终值写回普通 CSS 声明。
   *
   * 适用场景：控制延迟阶段和播放结束后的动画呈现。
   *
   * 常用值：`none`、`forwards`、`backwards`、`both`。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ animationFillMode: "forwards" })
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
   */
  readonly animationFillMode?: PropertyValue<'animationFillMode', T>;
  /**
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  readonly animationIterationCount?: PropertyValue<'animationIterationCount', T>;
  /**
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  readonly animationName?: PropertyValue<'animationName', T>;
  /**
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  readonly animationPlayState?: PropertyValue<'animationPlayState', T>;
  /**
   * 设置动画附着到时间线的起止范围。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  readonly animationRange?: PropertyValue<'animationRange', T>;
  /**
   * 设置动画在时间线上的附着范围终点。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  readonly animationRangeEnd?: PropertyValue<'animationRangeEnd', T>;
  /**
   * 设置动画在时间线上的附着范围起点。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  readonly animationRangeStart?: PropertyValue<'animationRangeStart', T>;
  /**
   * 选择驱动动画的时间线，例如文档时间或滚动进度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  readonly animationTimeline?: PropertyValue<'animationTimeline', T>;
  /**
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly animationTimingFunction?: PropertyValue<'animationTimingFunction', T>;
  /**
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  readonly backfaceVisibility?: PropertyValue<'backfaceVisibility', T>;
  /**
   * 集中设置运动路径、起始位置、距离、方向和锚点。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly offset?: PropertyValue<'offset', T>;
  /**
   * 设置元素沿运动路径移动时与路径相接的内部锚点。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  readonly offsetAnchor?: PropertyValue<'offsetAnchor', T>;
  /**
   * 设置元素沿运动路径行进的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  readonly offsetDistance?: PropertyValue<'offsetDistance', T>;
  /**
   * 设置元素运动所沿用的路径。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly offsetPath?: PropertyValue<'offsetPath', T>;
  /**
   * 设置运动路径的初始位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  readonly offsetPosition?: PropertyValue<'offsetPosition', T>;
  /**
   * 设置元素沿运动路径移动时的方向和附加旋转。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  readonly offsetRotate?: PropertyValue<'offsetRotate', T>;
  /**
   * 设置路径旋转的旧名称；新代码使用 offset-rotate。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotation
   */
  readonly offsetRotation?: PropertyValue<'offsetRotation', T>;
  /**
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  readonly perspective?: PropertyValue<'perspective', T>;
  /**
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  readonly perspectiveOrigin?: PropertyValue<'perspectiveOrigin', T>;
  /**
   * 独立设置元素旋转，不必重写 transform 中的其他变换。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  readonly rotate?: PropertyValue<'rotate', T>;
  /**
   * 独立设置元素的缩放比例。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  readonly scale?: PropertyValue<'scale', T>;
  /**
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ transform: "translateX(8px) scale(1.05)" })
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
   */
  readonly transform?: PropertyValue<'transform', T>;
  /**
   * 设置变换及其原点所依据的参照盒。
   *
   * CSS 规范初始值：`view-box`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly transformBox?: PropertyValue<'transformBox', T>;
  /**
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  readonly transformOrigin?: PropertyValue<'transformOrigin', T>;
  /**
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：`flat`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  readonly transformStyle?: PropertyValue<'transformStyle', T>;
  /**
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   * @example
   * css({ transition: "opacity 160ms ease" })
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly transition?: PropertyValue<'transition', T>;
  /**
   * 控制离散属性是否可以启动 CSS 过渡。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  readonly transitionBehavior?: PropertyValue<'transitionBehavior', T>;
  /**
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  readonly transitionDelay?: PropertyValue<'transitionDelay', T>;
  /**
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  readonly transitionDuration?: PropertyValue<'transitionDuration', T>;
  /**
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  readonly transitionProperty?: PropertyValue<'transitionProperty', T>;
  /**
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly transitionTimingFunction?: PropertyValue<'transitionTimingFunction', T>;
  /**
   * 独立设置元素在二维或三维空间中的平移。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  readonly translate?: PropertyValue<'translate', T>;
  /**
   * 为视图过渡的快照伪元素分组，以便共用样式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  readonly viewTransitionClass?: PropertyValue<'viewTransitionClass', T>;
  /**
   * 为视图过渡中的元素命名，以匹配前后状态的快照。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  readonly viewTransitionName?: PropertyValue<'viewTransitionName', T>;
}
/** 滚动与溢出；泛型 T 保留系统与继承主题关键字。 */
export interface ScrollingProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 设置内容超出盒子时的裁剪和滚动行为。
   *
   * 一个值同时设置两轴；两个值依次设置 overflow-x、overflow-y。通常需要尺寸约束才会出现可滚动的溢出。
   *
   * 适用场景：滚动面板、内容裁剪和受限尺寸区域。
   *
   * 常用值：`visible`、`hidden`、`clip`、`auto`、`scroll`。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * css({ maxHeight: "20rem", overflow: "auto" })
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  readonly overflow?: PropertyValue<'overflow', T>;
  /**
   * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  readonly overflowAnchor?: PropertyValue<'overflowAnchor', T>;
  /**
   * 设置逻辑块轴上的溢出行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  readonly overflowBlock?: PropertyValue<'overflowBlock', T>;
  /**
   * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  readonly overflowClipBox?: PropertyValue<'overflowClipBox', T>;
  /**
   * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。
   *
   * CSS 规范初始值：`0px`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  readonly overflowClipMargin?: PropertyValue<'overflowClipMargin', T>;
  /**
   * 设置逻辑行内轴上的溢出行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  readonly overflowInline?: PropertyValue<'overflowInline', T>;
  /**
   * 设置不可正常断开的长文本是否允许额外换行。
   *
   * 适用场景：防止 URL、标识符等长文本撑破容器。
   *
   * 常用值：`normal`、`anywhere`、`break-word`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ overflowWrap: "anywhere" })
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  readonly overflowWrap?: PropertyValue<'overflowWrap', T>;
  /**
   * 设置水平方向的溢出行为。
   *
   * 和 overflow-y 的组合可能改变计算值；例如另一轴是 auto 时，visible 可能按 auto 计算。
   *
   * 适用场景：横向滚动标签、宽表格或水平内容裁剪。
   *
   * 常用值：`auto`、`hidden`、`clip`。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * css({ overflowX: "auto" })
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  readonly overflowX?: PropertyValue<'overflowX', T>;
  /**
   * 设置垂直方向的溢出行为。
   *
   * 通常配合 height/max-height 或可收缩的布局区域使用。
   *
   * 适用场景：纵向列表和弹窗内容区。
   *
   * 常用值：`auto`、`hidden`、`clip`。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * css({ maxHeight: "20rem", overflowY: "auto" })
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  readonly overflowY?: PropertyValue<'overflowY', T>;
  /**
   * 控制滚动到边界后的滚动链和越界反馈行为。
   *
   * 适用场景：阻止弹窗或内部滚动面板到达边界后继续滚动外层页面。
   *
   * 常用值：`auto`、`contain`、`none`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ overflowY: "auto", overscrollBehavior: "contain" })
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
   */
  readonly overscrollBehavior?: PropertyValue<'overscrollBehavior', T>;
  /**
   * 控制逻辑块轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  readonly overscrollBehaviorBlock?: PropertyValue<'overscrollBehaviorBlock', T>;
  /**
   * 控制逻辑行内轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  readonly overscrollBehaviorInline?: PropertyValue<'overscrollBehaviorInline', T>;
  /**
   * 控制水平方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  readonly overscrollBehaviorX?: PropertyValue<'overscrollBehaviorX', T>;
  /**
   * 控制垂直方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  readonly overscrollBehaviorY?: PropertyValue<'overscrollBehaviorY', T>;
  /**
   * 设置滚动条滑块和轨道的颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  readonly scrollbarColor?: PropertyValue<'scrollbarColor', T>;
  /**
   * 设置是否预留滚动条槽位，以减少滚动条出现时的布局变化。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  readonly scrollbarGutter?: PropertyValue<'scrollbarGutter', T>;
  /**
   * 设置滚动条采用正常、较细或隐藏的外观。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  readonly scrollbarWidth?: PropertyValue<'scrollbarWidth', T>;
  /**
   * 设置由导航或滚动 API 触发的滚动采用即时还是平滑方式。
   *
   * 主要影响导航和滚动 API 触发的滚动，不会把所有用户滚动强制变成动画。
   *
   * 适用场景：锚点跳转或程序化滚动；应同时考虑减少动态效果的用户偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ scrollBehavior: "smooth" })
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  readonly scrollBehavior?: PropertyValue<'scrollBehavior', T>;
  /**
   * 将元素声明为祖先滚动容器首次呈现时的候选滚动吸附目标。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  readonly scrollInitialTarget?: PropertyValue<'scrollInitialTarget', T>;
  /**
   * 设置元素滚动目标区域的四边外扩距离，不改变普通布局外边距。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  readonly scrollMargin?: PropertyValue<'scrollMargin', T>;
  /**
   * 设置滚动目标区域在逻辑块轴两侧的外扩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  readonly scrollMarginBlock?: PropertyValue<'scrollMarginBlock', T>;
  /**
   * 设置滚动目标区域在逻辑块轴结束侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  readonly scrollMarginBlockEnd?: PropertyValue<'scrollMarginBlockEnd', T>;
  /**
   * 设置滚动目标区域在逻辑块轴起始侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  readonly scrollMarginBlockStart?: PropertyValue<'scrollMarginBlockStart', T>;
  /**
   * 设置滚动目标区域下侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  readonly scrollMarginBottom?: PropertyValue<'scrollMarginBottom', T>;
  /**
   * 设置滚动目标区域在逻辑行内轴两侧的外扩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  readonly scrollMarginInline?: PropertyValue<'scrollMarginInline', T>;
  /**
   * 设置滚动目标区域在逻辑行内轴结束侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  readonly scrollMarginInlineEnd?: PropertyValue<'scrollMarginInlineEnd', T>;
  /**
   * 设置滚动目标区域在逻辑行内轴起始侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  readonly scrollMarginInlineStart?: PropertyValue<'scrollMarginInlineStart', T>;
  /**
   * 设置滚动目标区域左侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  readonly scrollMarginLeft?: PropertyValue<'scrollMarginLeft', T>;
  /**
   * 设置滚动目标区域右侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  readonly scrollMarginRight?: PropertyValue<'scrollMarginRight', T>;
  /**
   * 设置滚动目标区域上侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  readonly scrollMarginTop?: PropertyValue<'scrollMarginTop', T>;
  /**
   * 设置滚动容器最佳可视区域的四边内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  readonly scrollPadding?: PropertyValue<'scrollPadding', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴两侧的内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  readonly scrollPaddingBlock?: PropertyValue<'scrollPaddingBlock', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴结束侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  readonly scrollPaddingBlockEnd?: PropertyValue<'scrollPaddingBlockEnd', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴起始侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  readonly scrollPaddingBlockStart?: PropertyValue<'scrollPaddingBlockStart', T>;
  /**
   * 设置滚动容器最佳可视区域下侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  readonly scrollPaddingBottom?: PropertyValue<'scrollPaddingBottom', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴两侧的内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  readonly scrollPaddingInline?: PropertyValue<'scrollPaddingInline', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴结束侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  readonly scrollPaddingInlineEnd?: PropertyValue<'scrollPaddingInlineEnd', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴起始侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  readonly scrollPaddingInlineStart?: PropertyValue<'scrollPaddingInlineStart', T>;
  /**
   * 设置滚动容器最佳可视区域左侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  readonly scrollPaddingLeft?: PropertyValue<'scrollPaddingLeft', T>;
  /**
   * 设置滚动容器最佳可视区域右侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  readonly scrollPaddingRight?: PropertyValue<'scrollPaddingRight', T>;
  /**
   * 设置滚动容器最佳可视区域上侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  readonly scrollPaddingTop?: PropertyValue<'scrollPaddingTop', T>;
  /**
   * 设置元素作为滚动吸附目标时在块轴和行内轴上的对齐位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  readonly scrollSnapAlign?: PropertyValue<'scrollSnapAlign', T>;
  /**
   * 设置滚动吸附区域外扩的旧名称；新代码使用 scroll-margin。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin
   */
  readonly scrollSnapMargin?: PropertyValue<'scrollSnapMargin', T>;
  /**
   * 设置滚动吸附区域下侧外扩的旧名称；新代码使用 scroll-margin-bottom。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-bottom
   */
  readonly scrollSnapMarginBottom?: PropertyValue<'scrollSnapMarginBottom', T>;
  /**
   * 设置滚动吸附区域左侧外扩的旧名称；新代码使用 scroll-margin-left。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-left
   */
  readonly scrollSnapMarginLeft?: PropertyValue<'scrollSnapMarginLeft', T>;
  /**
   * 设置滚动吸附区域右侧外扩的旧名称；新代码使用 scroll-margin-right。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-right
   */
  readonly scrollSnapMarginRight?: PropertyValue<'scrollSnapMarginRight', T>;
  /**
   * 设置滚动吸附区域上侧外扩的旧名称；新代码使用 scroll-margin-top。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-top
   */
  readonly scrollSnapMarginTop?: PropertyValue<'scrollSnapMarginTop', T>;
  /**
   * 设置滚动时是否允许越过该元素的吸附位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  readonly scrollSnapStop?: PropertyValue<'scrollSnapStop', T>;
  /**
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ scrollSnapType: "x mandatory" })
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  readonly scrollSnapType?: PropertyValue<'scrollSnapType', T>;
  /**
   * 同时声明滚动进度时间线的名称和轴。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  readonly scrollTimeline?: PropertyValue<'scrollTimeline', T>;
  /**
   * 设置滚动进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：`block`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  readonly scrollTimelineAxis?: PropertyValue<'scrollTimelineAxis', T>;
  /**
   * 声明基于当前容器滚动进度的时间线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  readonly scrollTimelineName?: PropertyValue<'scrollTimelineName', T>;
}
/** 交互与显示控制；泛型 T 保留系统与继承主题关键字。 */
export interface InteractionProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly appearance?: PropertyValue<'appearance', T>;
  /**
   * 集中设置文本插入光标的颜色和形状。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  readonly caret?: PropertyValue<'caret', T>;
  /**
   * 设置文本插入光标的形状。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  readonly caretShape?: PropertyValue<'caretShape', T>;
  /**
   * 控制是否渲染元素内容，并允许浏览器跳过暂时不可见的子树。
   *
   * 允许跳过子树渲染；跳过时的占位尺寸可由 contain-intrinsic-size 提供。
   *
   * 适用场景：页面中较长、暂时位于视口外的独立内容区域。
   *
   * 常用值：`visible`、`auto`、`hidden`。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * css({ contentVisibility: "auto" })
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
   */
  readonly contentVisibility?: PropertyValue<'contentVisibility', T>;
  /**
   * 设置指针位于元素上方时显示的光标。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly cursor?: PropertyValue<'cursor', T>;
  /**
   * 设置元素何时可以成为指针命中目标；SVG 还支持按填充和描边命中。
   *
   * 控制指针命中，不等同于原生 disabled，也不会单独阻止键盘交互。
   *
   * 适用场景：允许指针穿过装饰层；可交互控件的禁用应同时处理行为和语义。
   *
   * 常用值：`auto`、`none`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ pointerEvents: "none" })
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  readonly pointerEvents?: PropertyValue<'pointerEvents', T>;
  /**
   * 设置用户是否能调整元素尺寸以及可调整的方向。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  readonly resize?: PropertyValue<'resize', T>;
  /**
   * 声明浏览器可以处理的触摸平移与缩放手势。
   *
   * 描述浏览器可接管的触摸手势，手势开始后再修改通常不会改变当前手势的处理。
   *
   * 适用场景：拖拽控件与页面滚动之间分配触摸方向；保留用户所需的缩放能力。
   *
   * 常用值：`manipulation`、`pan-x`、`pan-y`、`none`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ touchAction: "pan-y" })
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly touchAction?: PropertyValue<'touchAction', T>;
  /**
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ userSelect: "all" })
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  readonly userSelect?: PropertyValue<'userSelect', T>;
  /**
   * 设置元素是否可见；隐藏通常保留布局空间。
   *
   * 适用场景：需要隐藏内容但通常保留其布局占位的场景。
   *
   * 常用值：`visible`、`hidden`、`collapse`。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * css({ visibility: "hidden" })
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
   */
  readonly visibility?: PropertyValue<'visibility', T>;
}
/** 内容、容器与分页；泛型 T 保留系统与继承主题关键字。 */
export interface StructureProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly breakAfter?: PropertyValue<'breakAfter', T>;
  /**
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly breakBefore?: PropertyValue<'breakBefore', T>;
  /**
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  readonly breakInside?: PropertyValue<'breakInside', T>;
  /**
   * 设置表格标题相对于表格的放置侧。
   *
   * CSS 规范初始值：`top`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  readonly captionSide?: PropertyValue<'captionSide', T>;
  /**
   * 声明尺寸、布局、绘制或样式隔离，限制子树对外部的影响。
   *
   * 不同隔离类型会改变布局和绘制语义，不能仅当作无副作用的性能开关。
   *
   * 适用场景：边界明确且尺寸、溢出行为经过验证的独立区域。
   *
   * 常用值：`content`、`strict`、`size`、`paint`、`style`。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ contain: "content" })
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  readonly contain?: PropertyValue<'contain', T>;
  /**
   * 同时声明查询容器的名称和类型。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  readonly container?: PropertyValue<'container', T>;
  /**
   * 为查询容器命名，供 @container 条件规则选择。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  readonly containerName?: PropertyValue<'containerName', T>;
  /**
   * 建立指定类型的查询容器，并施加所需的隔离行为。
   *
   * 建立尺寸查询容器会同时引入必要的隔离语义；容器本身的样式通常由祖先查询容器决定。
   *
   * 适用场景：让组件按所在容器尺寸响应，而不是只按视口响应。
   *
   * 常用值：`normal`、`inline-size`、`size`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ containerType: "inline-size" })
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  readonly containerType?: PropertyValue<'containerType', T>;
  /**
   * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  readonly containIntrinsicBlockSize?: PropertyValue<'containIntrinsicBlockSize', T>;
  /**
   * 设置高度隔离或跳过内容渲染时使用的替代内部高度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  readonly containIntrinsicHeight?: PropertyValue<'containIntrinsicHeight', T>;
  /**
   * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  readonly containIntrinsicInlineSize?: PropertyValue<'containIntrinsicInlineSize', T>;
  /**
   * 集中设置尺寸隔离时使用的替代内部宽高。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  readonly containIntrinsicSize?: PropertyValue<'containIntrinsicSize', T>;
  /**
   * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  readonly containIntrinsicWidth?: PropertyValue<'containIntrinsicWidth', T>;
  /**
   * 设置生成内容、替换内容或伪元素的内容。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  readonly content?: PropertyValue<'content', T>;
  /**
   * 增加或减少指定 CSS 计数器的值。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  readonly counterIncrement?: PropertyValue<'counterIncrement', T>;
  /**
   * 创建或重置 CSS 计数器。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  readonly counterReset?: PropertyValue<'counterReset', T>;
  /**
   * 设置已有 CSS 计数器的值，必要时创建计数器。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  readonly counterSet?: PropertyValue<'counterSet', T>;
  /**
   * 控制分离边框表格中空单元格的边框和背景是否绘制。
   *
   * CSS 规范初始值：`show`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  readonly emptyCells?: PropertyValue<'emptyCells', T>;
  /**
   * 集中设置列表标记的类型、图像和位置。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  readonly listStyle?: PropertyValue<'listStyle', T>;
  /**
   * 设置用作列表标记的图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  readonly listStyleImage?: PropertyValue<'listStyleImage', T>;
  /**
   * 设置列表标记位于主块盒内部还是外部。
   *
   * CSS 规范初始值：`outside`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  readonly listStylePosition?: PropertyValue<'listStylePosition', T>;
  /**
   * 设置列表标记或计数器的样式。
   *
   * CSS 规范初始值：`disc`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  readonly listStyleType?: PropertyValue<'listStyleType', T>;
  /**
   * 设置分页或分栏断点前需保留的最少行数。
   *
   * CSS 规范初始值：`2`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  readonly orphans?: PropertyValue<'orphans', T>;
  /**
   * 选择分页媒体中使用的命名页面类型。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  readonly page?: PropertyValue<'page', T>;
  /**
   * 设置表格列宽采用自动还是固定布局算法。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  readonly tableLayout?: PropertyValue<'tableLayout', T>;
  /**
   * 设置分页或分栏断点后需保留的最少行数。
   *
   * CSS 规范初始值：`2`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  readonly widows?: PropertyValue<'widows', T>;
}
/** SVG 属性；泛型 T 保留系统与继承主题关键字。 */
export interface SvgProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 使 SVG 文本基线相对于其基准位置偏移。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  readonly baselineShift?: PropertyValue<'baselineShift', T>;
  /**
   * 选择 SVG 文本布局的主导基线及基线表。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly dominantBaseline?: PropertyValue<'dominantBaseline', T>;
  /**
   * 设置 SVG 图形内部的填充绘制方式。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  readonly fill?: PropertyValue<'fill', T>;
  /**
   * 设置 SVG 填充的不透明度，不影响描边。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  readonly fillOpacity?: PropertyValue<'fillOpacity', T>;
  /**
   * 设置复杂 SVG 路径的内部区域判定规则。
   *
   * CSS 规范初始值：`nonzero`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  readonly fillRule?: PropertyValue<'fillRule', T>;
  /**
   * 设置 SVG feFlood 或相关滤镜的洪泛颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  readonly floodColor?: PropertyValue<'floodColor', T>;
  /**
   * 设置 SVG 洪泛滤镜颜色的不透明度。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  readonly floodOpacity?: PropertyValue<'floodOpacity', T>;
  /**
   * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  readonly glyphOrientationVertical?: PropertyValue<'glyphOrientationVertical', T>;
  /**
   * 设置 SVG 光照滤镜使用的光源颜色。
   *
   * CSS 规范初始值：`white`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  readonly lightingColor?: PropertyValue<'lightingColor', T>;
  /**
   * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  readonly marker?: PropertyValue<'marker', T>;
  /**
   * 设置 SVG 路径终点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  readonly markerEnd?: PropertyValue<'markerEnd', T>;
  /**
   * 设置 SVG 路径中间顶点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  readonly markerMid?: PropertyValue<'markerMid', T>;
  /**
   * 设置 SVG 路径起点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  readonly markerStart?: PropertyValue<'markerStart', T>;
  /**
   * 设置 SVG 填充、描边和标记的绘制先后顺序。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  readonly paintOrder?: PropertyValue<'paintOrder', T>;
  /**
   * 设置 SVG 渐变 stop 节点的颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  readonly stopColor?: PropertyValue<'stopColor', T>;
  /**
   * 设置 SVG 渐变 stop 节点的不透明度。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  readonly stopOpacity?: PropertyValue<'stopOpacity', T>;
  /**
   * 设置 SVG 图形轮廓的描边绘制方式。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  readonly stroke?: PropertyValue<'stroke', T>;
  /**
   * 设置 SVG 描边虚线中线段与空隙的长度序列。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  readonly strokeDasharray?: PropertyValue<'strokeDasharray', T>;
  /**
   * 设置 SVG 虚线描边相对于路径起点的偏移。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  readonly strokeDashoffset?: PropertyValue<'strokeDashoffset', T>;
  /**
   * 设置开放 SVG 子路径端点的描边形状。
   *
   * CSS 规范初始值：`butt`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  readonly strokeLinecap?: PropertyValue<'strokeLinecap', T>;
  /**
   * 设置 SVG 路径转角处描边的连接形状。
   *
   * CSS 规范初始值：`miter`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  readonly strokeLinejoin?: PropertyValue<'strokeLinejoin', T>;
  /**
   * 限制尖角连接的延伸比例，超过阈值时改变连接形状。
   *
   * CSS 规范初始值：`4`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  readonly strokeMiterlimit?: PropertyValue<'strokeMiterlimit', T>;
  /**
   * 设置 SVG 描边的不透明度，不影响填充。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  readonly strokeOpacity?: PropertyValue<'strokeOpacity', T>;
  /**
   * 设置 SVG 描边宽度。
   *
   * CSS 规范初始值：`1px`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  readonly strokeWidth?: PropertyValue<'strokeWidth', T>;
  /**
   * 设置 SVG 图形变换时对描边等矢量效果的处理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  readonly vectorEffect?: PropertyValue<'vectorEffect', T>;
}
/** 厂商与历史兼容属性；泛型 T 保留系统与继承主题关键字。 */
export interface CompatibilityProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  readonly boxAlign?: PropertyValue<'boxAlign', T>;
  /**
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-direction
   */
  readonly boxDirection?: PropertyValue<'boxDirection', T>;
  /**
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex
   */
  readonly boxFlex?: PropertyValue<'boxFlex', T>;
  /**
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex-group
   */
  readonly boxFlexGroup?: PropertyValue<'boxFlexGroup', T>;
  /**
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：`single`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  readonly boxLines?: PropertyValue<'boxLines', T>;
  /**
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-ordinal-group
   */
  readonly boxOrdinalGroup?: PropertyValue<'boxOrdinalGroup', T>;
  /**
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  readonly boxOrient?: PropertyValue<'boxOrient', T>;
  /**
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  readonly boxPack?: PropertyValue<'boxPack', T>;
  /**
   * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  readonly clip?: PropertyValue<'clip', T>;
  /**
   * 选择字体的宽窄字面；font-width 是其较新的名称。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly fontStretch?: PropertyValue<'fontStretch', T>;
  /**
   * 兼容属性 grid-column-gap；优先参考标准属性 columnGap及浏览器支持范围。
   * 设置布局中相邻列之间的间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-gap
   */
  readonly gridColumnGap?: PropertyValue<'gridColumnGap', T>;
  /**
   * 兼容属性 grid-gap；优先参考标准属性 gap及浏览器支持范围。
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-gap
   */
  readonly gridGap?: PropertyValue<'gridGap', T>;
  /**
   * 兼容属性 grid-row-gap；优先参考标准属性 rowGap及浏览器支持范围。
   * 设置布局中相邻行之间的间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-gap
   */
  readonly gridRowGap?: PropertyValue<'gridRowGap', T>;
  /**
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  readonly imeMode?: PropertyValue<'imeMode', T>;
  /**
   * 兼容属性 inset-area；优先参考标准属性 positionArea及浏览器支持范围。
   * 选择相对于锚点的定位区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly insetArea?: PropertyValue<'insetArea', T>;
  /**
   * 兼容属性 -khtml-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-align
   */
  readonly KhtmlBoxAlign?: PropertyValue<'KhtmlBoxAlign', T>;
  /**
   * 兼容属性 -khtml-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-direction
   */
  readonly KhtmlBoxDirection?: PropertyValue<'KhtmlBoxDirection', T>;
  /**
   * 兼容属性 -khtml-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-flex
   */
  readonly KhtmlBoxFlex?: PropertyValue<'KhtmlBoxFlex', T>;
  /**
   * 兼容属性 -khtml-box-flex-group；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-flex-group
   */
  readonly KhtmlBoxFlexGroup?: PropertyValue<'KhtmlBoxFlexGroup', T>;
  /**
   * 兼容属性 -khtml-box-lines；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：`single`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-lines
   */
  readonly KhtmlBoxLines?: PropertyValue<'KhtmlBoxLines', T>;
  /**
   * 兼容属性 -khtml-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-ordinal-group
   */
  readonly KhtmlBoxOrdinalGroup?: PropertyValue<'KhtmlBoxOrdinalGroup', T>;
  /**
   * 兼容属性 -khtml-box-orient；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  readonly KhtmlBoxOrient?: PropertyValue<'KhtmlBoxOrient', T>;
  /**
   * 兼容属性 -khtml-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-pack
   */
  readonly KhtmlBoxPack?: PropertyValue<'KhtmlBoxPack', T>;
  /**
   * 兼容属性 -khtml-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-line-break
   */
  readonly KhtmlLineBreak?: PropertyValue<'KhtmlLineBreak', T>;
  /**
   * 兼容属性 -khtml-opacity；优先参考标准属性及浏览器支持范围。
   * 设置元素及其子树合成后的整体不透明度。
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @example
   * css({ opacity: 0.5 })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-opacity
   */
  readonly KhtmlOpacity?: PropertyValue<'KhtmlOpacity', T>;
  /**
   * 兼容属性 -khtml-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ userSelect: "all" })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-user-select
   */
  readonly KhtmlUserSelect?: PropertyValue<'KhtmlUserSelect', T>;
  /**
   * 兼容属性 -moz-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly MozAnimation?: PropertyValue<'MozAnimation', T>;
  /**
   * 兼容属性 -moz-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-delay
   */
  readonly MozAnimationDelay?: PropertyValue<'MozAnimationDelay', T>;
  /**
   * 兼容属性 -moz-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  readonly MozAnimationDirection?: PropertyValue<'MozAnimationDirection', T>;
  /**
   * 兼容属性 -moz-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-duration
   */
  readonly MozAnimationDuration?: PropertyValue<'MozAnimationDuration', T>;
  /**
   * 兼容属性 -moz-animation-fill-mode；优先参考标准属性及浏览器支持范围。
   * 设置动画在有效播放区间之外是否应用关键帧样式。
   *
   * 控制动画有效播放区间之外的样式，不会把最终值写回普通 CSS 声明。
   *
   * 适用场景：控制延迟阶段和播放结束后的动画呈现。
   *
   * 常用值：`none`、`forwards`、`backwards`、`both`。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ animationFillMode: "forwards" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-fill-mode
   */
  readonly MozAnimationFillMode?: PropertyValue<'MozAnimationFillMode', T>;
  /**
   * 兼容属性 -moz-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-iteration-count
   */
  readonly MozAnimationIterationCount?: PropertyValue<'MozAnimationIterationCount', T>;
  /**
   * 兼容属性 -moz-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-name
   */
  readonly MozAnimationName?: PropertyValue<'MozAnimationName', T>;
  /**
   * 兼容属性 -moz-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-play-state
   */
  readonly MozAnimationPlayState?: PropertyValue<'MozAnimationPlayState', T>;
  /**
   * 兼容属性 -moz-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly MozAnimationTimingFunction?: PropertyValue<'MozAnimationTimingFunction', T>;
  /**
   * 兼容属性 -moz-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozAppearance?: PropertyValue<'MozAppearance', T>;
  /**
   * 兼容属性 -moz-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-backface-visibility
   */
  readonly MozBackfaceVisibility?: PropertyValue<'MozBackfaceVisibility', T>;
  /**
   * 兼容属性 -moz-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  readonly MozBackgroundClip?: PropertyValue<'MozBackgroundClip', T>;
  /**
   * 兼容属性 -moz-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  readonly MozBackgroundOrigin?: PropertyValue<'MozBackgroundOrigin', T>;
  /**
   * 兼容属性 -moz-background-size；优先参考标准属性及浏览器支持范围。
   * 设置背景图像尺寸，以及覆盖或完整容纳图像的缩放方式。
   *
   * 改变背景图像的尺寸，不改变元素尺寸；位置由 background-position 决定。
   *
   * 适用场景：背景封面或需要完整显示的背景装饰。
   *
   * 常用值：`auto`、`contain`、`cover`。
   *
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @example
   * css({ backgroundSize: "cover", backgroundPosition: "center" })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-size
   */
  readonly MozBackgroundSize?: PropertyValue<'MozBackgroundSize', T>;
  /**
   * 兼容属性 -moz-binding；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的 XBL 绑定入口；仅描述历史兼容行为，不适用于现代组件实现。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-binding
   */
  readonly MozBinding?: PropertyValue<'MozBinding', T>;
  /**
   * 兼容属性 -moz-border-bottom-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的下边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-bottom-colors
   */
  readonly MozBorderBottomColors?: PropertyValue<'MozBorderBottomColors', T>;
  /**
   * 兼容属性 -moz-border-end-color；优先参考标准属性 borderInlineEndColor及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-color
   */
  readonly MozBorderEndColor?: PropertyValue<'MozBorderEndColor', T>;
  /**
   * 兼容属性 -moz-border-end-style；优先参考标准属性 borderInlineEndStyle及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly MozBorderEndStyle?: PropertyValue<'MozBorderEndStyle', T>;
  /**
   * 兼容属性 -moz-border-end-width；优先参考标准属性 borderInlineEndWidth及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  readonly MozBorderEndWidth?: PropertyValue<'MozBorderEndWidth', T>;
  /**
   * 兼容属性 -moz-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  readonly MozBorderImage?: PropertyValue<'MozBorderImage', T>;
  /**
   * 兼容属性 -moz-border-left-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的左边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-left-colors
   */
  readonly MozBorderLeftColors?: PropertyValue<'MozBorderLeftColors', T>;
  /**
   * 兼容属性 -moz-border-radius；优先参考标准属性及浏览器支持范围。
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   * @example
   * css({ borderRadius: "8px" })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius
   */
  readonly MozBorderRadius?: PropertyValue<'MozBorderRadius', T>;
  /**
   * 兼容属性 -moz-border-radius-bottomleft；优先参考标准属性 borderBottomLeftRadius及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-bottomleft
   */
  readonly MozBorderRadiusBottomleft?: PropertyValue<'MozBorderRadiusBottomleft', T>;
  /**
   * 兼容属性 -moz-border-radius-bottomright；优先参考标准属性 borderBottomRightRadius及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-bottomright
   */
  readonly MozBorderRadiusBottomright?: PropertyValue<'MozBorderRadiusBottomright', T>;
  /**
   * 兼容属性 -moz-border-radius-topleft；优先参考标准属性 borderTopLeftRadius及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-topleft
   */
  readonly MozBorderRadiusTopleft?: PropertyValue<'MozBorderRadiusTopleft', T>;
  /**
   * 兼容属性 -moz-border-radius-topright；优先参考标准属性 borderTopRightRadius及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-topright
   */
  readonly MozBorderRadiusTopright?: PropertyValue<'MozBorderRadiusTopright', T>;
  /**
   * 兼容属性 -moz-border-right-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的右边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-right-colors
   */
  readonly MozBorderRightColors?: PropertyValue<'MozBorderRightColors', T>;
  /**
   * 兼容属性 -moz-border-start-color；优先参考标准属性 borderInlineStartColor及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-color
   */
  readonly MozBorderStartColor?: PropertyValue<'MozBorderStartColor', T>;
  /**
   * 兼容属性 -moz-border-start-style；优先参考标准属性 borderInlineStartStyle及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly MozBorderStartStyle?: PropertyValue<'MozBorderStartStyle', T>;
  /**
   * 兼容属性 -moz-border-top-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的上边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-top-colors
   */
  readonly MozBorderTopColors?: PropertyValue<'MozBorderTopColors', T>;
  /**
   * 兼容属性 -moz-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-align
   */
  readonly MozBoxAlign?: PropertyValue<'MozBoxAlign', T>;
  /**
   * 兼容属性 -moz-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-direction
   */
  readonly MozBoxDirection?: PropertyValue<'MozBoxDirection', T>;
  /**
   * 兼容属性 -moz-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-flex
   */
  readonly MozBoxFlex?: PropertyValue<'MozBoxFlex', T>;
  /**
   * 兼容属性 -moz-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-ordinal-group
   */
  readonly MozBoxOrdinalGroup?: PropertyValue<'MozBoxOrdinalGroup', T>;
  /**
   * 兼容属性 -moz-box-orient；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  readonly MozBoxOrient?: PropertyValue<'MozBoxOrient', T>;
  /**
   * 兼容属性 -moz-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-pack
   */
  readonly MozBoxPack?: PropertyValue<'MozBoxPack', T>;
  /**
   * 兼容属性 -moz-box-shadow；优先参考标准属性及浏览器支持范围。
   * 设置盒子的外部或内部阴影，可叠加多层。
   *
   * 阴影不占布局空间，可用逗号叠加；与 border/outline 的用途和绘制位置不同。
   *
   * 适用场景：浮层层次、卡片边缘或内凹效果。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ boxShadow: "0 2px 8px rgb(0 0 0 / 0.15)" })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-shadow
   */
  readonly MozBoxShadow?: PropertyValue<'MozBoxShadow', T>;
  /**
   * 兼容属性 -moz-box-sizing；优先参考标准属性及浏览器支持范围。
   * 决定 width、height 等尺寸是否包含内边距和边框。
   *
   * 适用场景：确定组件声明宽高时是否把 padding 和 border 算在尺寸内。
   *
   * 常用值：`content-box`、`border-box`。
   *
   * CSS 规范初始值：`content-box`，不同于浏览器默认样式表。
   * @example
   * css({ boxSizing: "border-box", width: "20rem", padding: "1rem" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-sizing
   */
  readonly MozBoxSizing?: PropertyValue<'MozBoxSizing', T>;
  /**
   * 兼容属性 -moz-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-count
   */
  readonly MozColumnCount?: PropertyValue<'MozColumnCount', T>;
  /**
   * 兼容属性 -moz-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：`balance`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-fill
   */
  readonly MozColumnFill?: PropertyValue<'MozColumnFill', T>;
  /**
   * 兼容属性 -moz-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule
   */
  readonly MozColumnRule?: PropertyValue<'MozColumnRule', T>;
  /**
   * 兼容属性 -moz-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-color
   */
  readonly MozColumnRuleColor?: PropertyValue<'MozColumnRuleColor', T>;
  /**
   * 兼容属性 -moz-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly MozColumnRuleStyle?: PropertyValue<'MozColumnRuleStyle', T>;
  /**
   * 兼容属性 -moz-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  readonly MozColumnRuleWidth?: PropertyValue<'MozColumnRuleWidth', T>;
  /**
   * 兼容属性 -moz-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-columns
   */
  readonly MozColumns?: PropertyValue<'MozColumns', T>;
  /**
   * 兼容属性 -moz-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-width
   */
  readonly MozColumnWidth?: PropertyValue<'MozColumnWidth', T>;
  /**
   * 兼容属性 -moz-context-properties；优先参考标准属性及浏览器支持范围。
   * 声明可传递给被引用 SVG 图像的上下文绘制属性，如 fill 和 stroke。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  readonly MozContextProperties?: PropertyValue<'MozContextProperties', T>;
  /**
   * 兼容属性 -moz-float-edge；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定浮动元素边缘计算使用的盒子范围。
   *
   * CSS 规范初始值：`content-box`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  readonly MozFloatEdge?: PropertyValue<'MozFloatEdge', T>;
  /**
   * 兼容属性 -moz-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-feature-settings
   */
  readonly MozFontFeatureSettings?: PropertyValue<'MozFontFeatureSettings', T>;
  /**
   * 兼容属性 -moz-font-language-override；优先参考标准属性及浏览器支持范围。
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-language-override
   */
  readonly MozFontLanguageOverride?: PropertyValue<'MozFontLanguageOverride', T>;
  /**
   * 兼容属性 -moz-force-broken-image-icon；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中控制损坏图像占位图标的显示。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-force-broken-image-icon
   */
  readonly MozForceBrokenImageIcon?: PropertyValue<'MozForceBrokenImageIcon', T>;
  /**
   * 兼容属性 -moz-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-hyphens
   */
  readonly MozHyphens?: PropertyValue<'MozHyphens', T>;
  /**
   * 兼容属性 -moz-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-end
   */
  readonly MozMarginEnd?: PropertyValue<'MozMarginEnd', T>;
  /**
   * 兼容属性 -moz-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-start
   */
  readonly MozMarginStart?: PropertyValue<'MozMarginStart', T>;
  /**
   * 兼容属性 -moz-opacity；优先参考标准属性及浏览器支持范围。
   * 设置元素及其子树合成后的整体不透明度。
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @example
   * css({ opacity: 0.5 })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-opacity
   */
  readonly MozOpacity?: PropertyValue<'MozOpacity', T>;
  /**
   * 兼容属性 -moz-orient；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定特定控件的显示方向，作用依赖控件类型。
   *
   * CSS 规范初始值：`inline`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  readonly MozOrient?: PropertyValue<'MozOrient', T>;
  /**
   * 兼容属性 -moz-osx-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 macOS 上文字抗锯齿方式；效果依赖平台和字体渲染实现。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly MozOsxFontSmoothing?: PropertyValue<'MozOsxFontSmoothing', T>;
  /**
   * 兼容属性 -moz-outline；优先参考标准属性及浏览器支持范围。
   * 设置盒子外围轮廓线的宽度、线型和颜色，不占布局空间。
   *
   * 不占布局空间，可用 outline-offset 调整距离；键盘焦点指示不应被无替代地移除。
   *
   * 适用场景：控件焦点指示和不影响布局的轮廓。
   * @example
   * css({ ':focus-visible': { outline: "2px solid currentColor", outlineOffset: "2px" } })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline
   */
  readonly MozOutline?: PropertyValue<'MozOutline', T>;
  /**
   * 兼容属性 -moz-outline-color；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-color
   */
  readonly MozOutlineColor?: PropertyValue<'MozOutlineColor', T>;
  /**
   * 兼容属性 -moz-outline-radius；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的轮廓圆角简写；不同于元素边框本身的圆角。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius
   */
  readonly MozOutlineRadius?: PropertyValue<'MozOutlineRadius', T>;
  /**
   * 兼容属性 -moz-outline-radius-bottomleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左下角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomleft
   */
  readonly MozOutlineRadiusBottomleft?: PropertyValue<'MozOutlineRadiusBottomleft', T>;
  /**
   * 兼容属性 -moz-outline-radius-bottomright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右下角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomright
   */
  readonly MozOutlineRadiusBottomright?: PropertyValue<'MozOutlineRadiusBottomright', T>;
  /**
   * 兼容属性 -moz-outline-radius-topleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左上角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topleft
   */
  readonly MozOutlineRadiusTopleft?: PropertyValue<'MozOutlineRadiusTopleft', T>;
  /**
   * 兼容属性 -moz-outline-radius-topright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右上角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topright
   */
  readonly MozOutlineRadiusTopright?: PropertyValue<'MozOutlineRadiusTopright', T>;
  /**
   * 兼容属性 -moz-outline-style；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  readonly MozOutlineStyle?: PropertyValue<'MozOutlineStyle', T>;
  /**
   * 兼容属性 -moz-outline-width；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-width
   */
  readonly MozOutlineWidth?: PropertyValue<'MozOutlineWidth', T>;
  /**
   * 兼容属性 -moz-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-end
   */
  readonly MozPaddingEnd?: PropertyValue<'MozPaddingEnd', T>;
  /**
   * 兼容属性 -moz-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-start
   */
  readonly MozPaddingStart?: PropertyValue<'MozPaddingStart', T>;
  /**
   * 兼容属性 -moz-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective
   */
  readonly MozPerspective?: PropertyValue<'MozPerspective', T>;
  /**
   * 兼容属性 -moz-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  readonly MozPerspectiveOrigin?: PropertyValue<'MozPerspectiveOrigin', T>;
  /**
   * 兼容属性 -moz-stack-sizing；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 堆叠布局中决定子项尺寸是否参与堆叠容器的尺寸计算。
   *
   * CSS 规范初始值：`stretch-to-fit`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  readonly MozStackSizing?: PropertyValue<'MozStackSizing', T>;
  /**
   * 兼容属性 -moz-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：`8`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-tab-size
   */
  readonly MozTabSize?: PropertyValue<'MozTabSize', T>;
  /**
   * 兼容属性 -moz-text-align-last；优先参考标准属性及浏览器支持范围。
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  readonly MozTextAlignLast?: PropertyValue<'MozTextAlignLast', T>;
  /**
   * 兼容属性 -moz-text-blink；优先参考标准属性及浏览器支持范围。
   * 旧版文字闪烁效果开关；现代内容不应依赖该兼容属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-blink
   */
  readonly MozTextBlink?: PropertyValue<'MozTextBlink', T>;
  /**
   * 兼容属性 -moz-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-color
   */
  readonly MozTextDecorationColor?: PropertyValue<'MozTextDecorationColor', T>;
  /**
   * 兼容属性 -moz-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  readonly MozTextDecorationLine?: PropertyValue<'MozTextDecorationLine', T>;
  /**
   * 兼容属性 -moz-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：`solid`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-style
   */
  readonly MozTextDecorationStyle?: PropertyValue<'MozTextDecorationStyle', T>;
  /**
   * 兼容属性 -moz-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-size-adjust
   */
  readonly MozTextSizeAdjust?: PropertyValue<'MozTextSizeAdjust', T>;
  /**
   * 兼容属性 -moz-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ transform: "translateX(8px) scale(1.05)" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform
   */
  readonly MozTransform?: PropertyValue<'MozTransform', T>;
  /**
   * 兼容属性 -moz-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  readonly MozTransformOrigin?: PropertyValue<'MozTransformOrigin', T>;
  /**
   * 兼容属性 -moz-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：`flat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-style
   */
  readonly MozTransformStyle?: PropertyValue<'MozTransformStyle', T>;
  /**
   * 兼容属性 -moz-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   * @example
   * css({ transition: "opacity 160ms ease" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly MozTransition?: PropertyValue<'MozTransition', T>;
  /**
   * 兼容属性 -moz-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-delay
   */
  readonly MozTransitionDelay?: PropertyValue<'MozTransitionDelay', T>;
  /**
   * 兼容属性 -moz-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-duration
   */
  readonly MozTransitionDuration?: PropertyValue<'MozTransitionDuration', T>;
  /**
   * 兼容属性 -moz-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-property
   */
  readonly MozTransitionProperty?: PropertyValue<'MozTransitionProperty', T>;
  /**
   * 兼容属性 -moz-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly MozTransitionTimingFunction?: PropertyValue<'MozTransitionTimingFunction', T>;
  /**
   * 兼容属性 -moz-user-focus；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Gecko 元素的用户焦点行为，现代交互优先使用标准焦点机制。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly MozUserFocus?: PropertyValue<'MozUserFocus', T>;
  /**
   * 兼容属性 -moz-user-input；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Gecko 元素是否接受用户输入，现代控件使用标准 disabled/readonly 等语义。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-input
   */
  readonly MozUserInput?: PropertyValue<'MozUserInput', T>;
  /**
   * 兼容属性 -moz-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * CSS 规范初始值：`read-only`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  readonly MozUserModify?: PropertyValue<'MozUserModify', T>;
  /**
   * 兼容属性 -moz-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ userSelect: "all" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-select
   */
  readonly MozUserSelect?: PropertyValue<'MozUserSelect', T>;
  /**
   * 兼容属性 -moz-window-dragging；优先参考标准属性及浏览器支持范围。
   * 控制区域能否作为宿主窗口的拖动区域，作用限于支持它的特定环境。
   *
   * CSS 规范初始值：`drag`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  readonly MozWindowDragging?: PropertyValue<'MozWindowDragging', T>;
  /**
   * 兼容属性 -moz-window-shadow；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Gecko 宿主窗口阴影的预设，效果依赖窗口与操作系统。
   *
   * CSS 规范初始值：`default`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  readonly MozWindowShadow?: PropertyValue<'MozWindowShadow', T>;
  /**
   * 兼容属性 -ms-accelerator；优先参考标准属性及浏览器支持范围。
   * 旧版 Microsoft 浏览器中控制快捷键提示字符是否显示。
   *
   * CSS 规范初始值：`false`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-accelerator
   */
  readonly msAccelerator?: PropertyValue<'msAccelerator', T>;
  /**
   * 兼容属性 -ms-block-progression；优先参考标准属性及浏览器支持范围。
   * 旧版块内容的排列方向，现代排版优先使用 writing-mode。
   *
   * CSS 规范初始值：`tb`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  readonly msBlockProgression?: PropertyValue<'msBlockProgression', T>;
  /**
   * 兼容属性 -ms-content-zoom-chaining；优先参考标准属性及浏览器支持范围。
   * 控制缩放操作到达边界后是否继续传递给父级缩放区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-chaining
   */
  readonly msContentZoomChaining?: PropertyValue<'msContentZoomChaining', T>;
  /**
   * 兼容属性 -ms-content-zooming；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 触控内容缩放是否启用。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zooming
   */
  readonly msContentZooming?: PropertyValue<'msContentZooming', T>;
  /**
   * 兼容属性 -ms-content-zoom-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版触控内容缩放的最小和最大倍率。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit
   */
  readonly msContentZoomLimit?: PropertyValue<'msContentZoomLimit', T>;
  /**
   * 兼容属性 -ms-content-zoom-limit-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最大倍率。
   *
   * CSS 规范初始值：`400%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-max
   */
  readonly msContentZoomLimitMax?: PropertyValue<'msContentZoomLimitMax', T>;
  /**
   * 兼容属性 -ms-content-zoom-limit-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最小倍率。
   *
   * CSS 规范初始值：`100%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-min
   */
  readonly msContentZoomLimitMin?: PropertyValue<'msContentZoomLimitMin', T>;
  /**
   * 兼容属性 -ms-content-zoom-snap；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版内容缩放吸附的方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  readonly msContentZoomSnap?: PropertyValue<'msContentZoomSnap', T>;
  /**
   * 兼容属性 -ms-content-zoom-snap-points；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放操作可以吸附的倍率位置。
   *
   * CSS 规范初始值：`snapInterval(0%, 100%)`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-points
   */
  readonly msContentZoomSnapPoints?: PropertyValue<'msContentZoomSnapPoints', T>;
  /**
   * 兼容属性 -ms-content-zoom-snap-type；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放吸附的强制程度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-type
   */
  readonly msContentZoomSnapType?: PropertyValue<'msContentZoomSnapType', T>;
  /**
   * 兼容属性 -ms-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-filter
   */
  readonly msFilter?: PropertyValue<'msFilter', T>;
  /**
   * 兼容属性 -ms-flex；优先参考标准属性及浏览器支持范围。
   * 集中设置弹性项目的增长系数、收缩系数和基础尺寸。
   *
   * 依次对应 flex-grow、flex-shrink、flex-basis。作用于弹性项目，应先由父容器建立 Flex 布局。
   *
   * 适用场景：分配弹性布局中的剩余空间，或让项目保持自身尺寸。
   *
   * 常用值：`auto`、`none`。
   * @example
   * css({ flex: "1 1 0%" })
   * @example
   * css({ flex: "none" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  readonly msFlex?: PropertyValue<'msFlex', T>;
  /**
   * 兼容属性 -ms-flex-direction；优先参考标准属性及浏览器支持范围。
   * 设置弹性容器的主轴方向及项目排列方向。
   *
   * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
   *
   * 常用值：`row`、`column`、`row-reverse`、`column-reverse`。
   *
   * CSS 规范初始值：`row`，不同于浏览器默认样式表。
   * @example
   * css({ display: "flex", flexDirection: "column", gap: "1rem" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-direction
   */
  readonly msFlexDirection?: PropertyValue<'msFlexDirection', T>;
  /**
   * 兼容属性 -ms-flex-positive；优先参考标准属性 flexGrow及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-positive
   */
  readonly msFlexPositive?: PropertyValue<'msFlexPositive', T>;
  /**
   * 兼容属性 -ms-flow-from；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中指定接收哪个命名内容流。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-from
   */
  readonly msFlowFrom?: PropertyValue<'msFlowFrom', T>;
  /**
   * 兼容属性 -ms-flow-into；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中把元素内容放入指定命名流。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-into
   */
  readonly msFlowInto?: PropertyValue<'msFlowInto', T>;
  /**
   * 兼容属性 -ms-grid-columns；优先参考标准属性 gridTemplateColumns及浏览器支持范围。
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  readonly msGridColumns?: PropertyValue<'msGridColumns', T>;
  /**
   * 兼容属性 -ms-grid-rows；优先参考标准属性 gridTemplateRows及浏览器支持范围。
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  readonly msGridRows?: PropertyValue<'msGridRows', T>;
  /**
   * 兼容属性 -ms-high-contrast-adjust；优先参考标准属性及浏览器支持范围。
   * 控制旧版高对比度模式是否调整作者颜色；现代环境优先使用 forced-color-adjust。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-high-contrast-adjust
   */
  readonly msHighContrastAdjust?: PropertyValue<'msHighContrastAdjust', T>;
  /**
   * 兼容属性 -ms-hyphenate-limit-chars；优先参考标准属性及浏览器支持范围。
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-chars
   */
  readonly msHyphenateLimitChars?: PropertyValue<'msHyphenateLimitChars', T>;
  /**
   * 兼容属性 -ms-hyphenate-limit-lines；优先参考标准属性及浏览器支持范围。
   * 限制连续使用断字连字符的文本行数。
   *
   * CSS 规范初始值：`no-limit`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-lines
   */
  readonly msHyphenateLimitLines?: PropertyValue<'msHyphenateLimitLines', T>;
  /**
   * 兼容属性 -ms-hyphenate-limit-zone；优先参考标准属性及浏览器支持范围。
   * 指定允许开始断字处理的行末区域。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-zone
   */
  readonly msHyphenateLimitZone?: PropertyValue<'msHyphenateLimitZone', T>;
  /**
   * 兼容属性 -ms-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphens
   */
  readonly msHyphens?: PropertyValue<'msHyphens', T>;
  /**
   * 兼容属性 -ms-ime-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版输入法候选窗口相对于编辑区域的对齐位置。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-align
   */
  readonly msImeAlign?: PropertyValue<'msImeAlign', T>;
  /**
   * 兼容属性 -ms-ime-mode；优先参考标准属性及浏览器支持范围。
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-mode
   */
  readonly msImeMode?: PropertyValue<'msImeMode', T>;
  /**
   * 兼容属性 -ms-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  readonly msLineBreak?: PropertyValue<'msLineBreak', T>;
  /**
   * 兼容属性 -ms-order；优先参考标准属性及浏览器支持范围。
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-order
   */
  readonly msOrder?: PropertyValue<'msOrder', T>;
  /**
   * 兼容属性 -ms-overflow-style；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Microsoft 浏览器滚动条的呈现方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  readonly msOverflowStyle?: PropertyValue<'msOverflowStyle', T>;
  /**
   * 兼容属性 -ms-overflow-x；优先参考标准属性及浏览器支持范围。
   * 设置水平方向的溢出行为。
   *
   * 和 overflow-y 的组合可能改变计算值；例如另一轴是 auto 时，visible 可能按 auto 计算。
   *
   * 适用场景：横向滚动标签、宽表格或水平内容裁剪。
   *
   * 常用值：`auto`、`hidden`、`clip`。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * css({ overflowX: "auto" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-x
   */
  readonly msOverflowX?: PropertyValue<'msOverflowX', T>;
  /**
   * 兼容属性 -ms-overflow-y；优先参考标准属性及浏览器支持范围。
   * 设置垂直方向的溢出行为。
   *
   * 通常配合 height/max-height 或可收缩的布局区域使用。
   *
   * 适用场景：纵向列表和弹窗内容区。
   *
   * 常用值：`auto`、`hidden`、`clip`。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * css({ maxHeight: "20rem", overflowY: "auto" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-y
   */
  readonly msOverflowY?: PropertyValue<'msOverflowY', T>;
  /**
   * 兼容属性 -ms-scrollbar3dlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的亮边颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar3dlight-color
   */
  readonly msScrollbar3dlightColor?: PropertyValue<'msScrollbar3dlightColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-arrow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条箭头颜色。
   *
   * CSS 规范初始值：`ButtonText`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-arrow-color
   */
  readonly msScrollbarArrowColor?: PropertyValue<'msScrollbarArrowColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-base-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条的基础颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-base-color
   */
  readonly msScrollbarBaseColor?: PropertyValue<'msScrollbarBaseColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-darkshadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的深阴影颜色。
   *
   * CSS 规范初始值：`ThreeDDarkShadow`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-darkshadow-color
   */
  readonly msScrollbarDarkshadowColor?: PropertyValue<'msScrollbarDarkshadowColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-face-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条滑块表面颜色。
   *
   * CSS 规范初始值：`ThreeDFace`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-face-color
   */
  readonly msScrollbarFaceColor?: PropertyValue<'msScrollbarFaceColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条高亮边缘颜色。
   *
   * CSS 规范初始值：`ThreeDHighlight`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-highlight-color
   */
  readonly msScrollbarHighlightColor?: PropertyValue<'msScrollbarHighlightColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-shadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条阴影边缘颜色。
   *
   * CSS 规范初始值：`ThreeDDarkShadow`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-shadow-color
   */
  readonly msScrollbarShadowColor?: PropertyValue<'msScrollbarShadowColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-track-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条轨道颜色。
   *
   * CSS 规范初始值：`Scrollbar`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-track-color
   */
  readonly msScrollbarTrackColor?: PropertyValue<'msScrollbarTrackColor', T>;
  /**
   * 兼容属性 -ms-scroll-chaining；优先参考标准属性及浏览器支持范围。
   * 控制滚动到达边界后是否传递给祖先滚动容器。
   *
   * CSS 规范初始值：`chained`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-chaining
   */
  readonly msScrollChaining?: PropertyValue<'msScrollChaining', T>;
  /**
   * 兼容属性 -ms-scroll-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版滚动区域的水平和垂直边界。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit
   */
  readonly msScrollLimit?: PropertyValue<'msScrollLimit', T>;
  /**
   * 兼容属性 -ms-scroll-limit-x-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大水平位置。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-max
   */
  readonly msScrollLimitXMax?: PropertyValue<'msScrollLimitXMax', T>;
  /**
   * 兼容属性 -ms-scroll-limit-x-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小水平位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-min
   */
  readonly msScrollLimitXMin?: PropertyValue<'msScrollLimitXMin', T>;
  /**
   * 兼容属性 -ms-scroll-limit-y-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大垂直位置。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-max
   */
  readonly msScrollLimitYMax?: PropertyValue<'msScrollLimitYMax', T>;
  /**
   * 兼容属性 -ms-scroll-limit-y-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小垂直位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-min
   */
  readonly msScrollLimitYMin?: PropertyValue<'msScrollLimitYMin', T>;
  /**
   * 兼容属性 -ms-scroll-rails；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控滚动是否锁定主要滚动轴。
   *
   * CSS 规范初始值：`railed`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-rails
   */
  readonly msScrollRails?: PropertyValue<'msScrollRails', T>;
  /**
   * 兼容属性 -ms-scroll-snap-points-x；优先参考标准属性及浏览器支持范围。
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`snapInterval(0px, 100%)`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-x
   */
  readonly msScrollSnapPointsX?: PropertyValue<'msScrollSnapPointsX', T>;
  /**
   * 兼容属性 -ms-scroll-snap-points-y；优先参考标准属性及浏览器支持范围。
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`snapInterval(0px, 100%)`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-y
   */
  readonly msScrollSnapPointsY?: PropertyValue<'msScrollSnapPointsY', T>;
  /**
   * 兼容属性 -ms-scroll-snap-type；优先参考标准属性及浏览器支持范围。
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ scrollSnapType: "x mandatory" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-type
   */
  readonly msScrollSnapType?: PropertyValue<'msScrollSnapType', T>;
  /**
   * 兼容属性 -ms-scroll-snap-x；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版水平滚动吸附方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-x
   */
  readonly msScrollSnapX?: PropertyValue<'msScrollSnapX', T>;
  /**
   * 兼容属性 -ms-scroll-snap-y；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版垂直滚动吸附方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-y
   */
  readonly msScrollSnapY?: PropertyValue<'msScrollSnapY', T>;
  /**
   * 兼容属性 -ms-scroll-translation；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 环境中的滚动位移呈现方式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-translation
   */
  readonly msScrollTranslation?: PropertyValue<'msScrollTranslation', T>;
  /**
   * 兼容属性 -ms-text-autospace；优先参考标准属性及浏览器支持范围。
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  readonly msTextAutospace?: PropertyValue<'msTextAutospace', T>;
  /**
   * 兼容属性 -ms-text-combine-horizontal；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-combine-horizontal
   */
  readonly msTextCombineHorizontal?: PropertyValue<'msTextCombineHorizontal', T>;
  /**
   * 兼容属性 -ms-text-overflow；优先参考标准属性及浏览器支持范围。
   * 设置被裁剪的行内溢出文本如何提示，例如显示省略号。
   *
   * 本属性不自行制造溢出。单行省略通常还需要受限宽度、overflow:hidden 和 white-space:nowrap。
   *
   * 适用场景：受限宽度中的单行标题或标签。多行截断需要单独的布局和截行方案。
   *
   * 常用值：`ellipsis`、`clip`。
   *
   * CSS 规范初始值：`clip`，不同于浏览器默认样式表。
   * @example
   * css({ maxWidth: "12rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-overflow
   */
  readonly msTextOverflow?: PropertyValue<'msTextOverflow', T>;
  /**
   * 兼容属性 -ms-touch-action；优先参考标准属性及浏览器支持范围。
   * 声明浏览器可以处理的触摸平移与缩放手势。
   *
   * 描述浏览器可接管的触摸手势，手势开始后再修改通常不会改变当前手势的处理。
   *
   * 适用场景：拖拽控件与页面滚动之间分配触摸方向；保留用户所需的缩放能力。
   *
   * 常用值：`manipulation`、`pan-x`、`pan-y`、`none`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ touchAction: "pan-y" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly msTouchAction?: PropertyValue<'msTouchAction', T>;
  /**
   * 兼容属性 -ms-touch-select；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控文字选择的交互方式。
   *
   * CSS 规范初始值：`grippers`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-select
   */
  readonly msTouchSelect?: PropertyValue<'msTouchSelect', T>;
  /**
   * 兼容属性 -ms-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ transform: "translateX(8px) scale(1.05)" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform
   */
  readonly msTransform?: PropertyValue<'msTransform', T>;
  /**
   * 兼容属性 -ms-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  readonly msTransformOrigin?: PropertyValue<'msTransformOrigin', T>;
  /**
   * 兼容属性 -ms-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   * @example
   * css({ transition: "opacity 160ms ease" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly msTransition?: PropertyValue<'msTransition', T>;
  /**
   * 兼容属性 -ms-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-delay
   */
  readonly msTransitionDelay?: PropertyValue<'msTransitionDelay', T>;
  /**
   * 兼容属性 -ms-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-duration
   */
  readonly msTransitionDuration?: PropertyValue<'msTransitionDuration', T>;
  /**
   * 兼容属性 -ms-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-property
   */
  readonly msTransitionProperty?: PropertyValue<'msTransitionProperty', T>;
  /**
   * 兼容属性 -ms-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly msTransitionTimingFunction?: PropertyValue<'msTransitionTimingFunction', T>;
  /**
   * 兼容属性 -ms-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：`text`，不同于浏览器默认样式表。
   * @example
   * css({ userSelect: "all" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-user-select
   */
  readonly msUserSelect?: PropertyValue<'msUserSelect', T>;
  /**
   * 兼容属性 -ms-word-break；优先参考标准属性及浏览器支持范围。
   * 设置单词内部或文字之间的断行规则。
   *
   * 按字符和语言控制断行。仅需避免超长单词溢出时，通常先考虑 overflow-wrap。
   *
   * 常用值：`normal`、`break-all`、`keep-all`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ wordBreak: "normal" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-word-break
   */
  readonly msWordBreak?: PropertyValue<'msWordBreak', T>;
  /**
   * 兼容属性 -ms-wrap-flow；优先参考标准属性及浏览器支持范围。
   * 控制旧版排斥形状周围的内容环绕方向。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  readonly msWrapFlow?: PropertyValue<'msWrapFlow', T>;
  /**
   * 兼容属性 -ms-wrap-margin；优先参考标准属性及浏览器支持范围。
   * 设置旧版排斥形状与环绕内容之间的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-margin
   */
  readonly msWrapMargin?: PropertyValue<'msWrapMargin', T>;
  /**
   * 兼容属性 -ms-wrap-through；优先参考标准属性及浏览器支持范围。
   * 控制旧版元素是否参与排斥形状的内容环绕。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-through
   */
  readonly msWrapThrough?: PropertyValue<'msWrapThrough', T>;
  /**
   * 兼容属性 -ms-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：`horizontal-tb`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly msWritingMode?: PropertyValue<'msWritingMode', T>;
  /**
   * 兼容属性 -o-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly OAnimation?: PropertyValue<'OAnimation', T>;
  /**
   * 兼容属性 -o-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-delay
   */
  readonly OAnimationDelay?: PropertyValue<'OAnimationDelay', T>;
  /**
   * 兼容属性 -o-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-direction
   */
  readonly OAnimationDirection?: PropertyValue<'OAnimationDirection', T>;
  /**
   * 兼容属性 -o-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-duration
   */
  readonly OAnimationDuration?: PropertyValue<'OAnimationDuration', T>;
  /**
   * 兼容属性 -o-animation-fill-mode；优先参考标准属性及浏览器支持范围。
   * 设置动画在有效播放区间之外是否应用关键帧样式。
   *
   * 控制动画有效播放区间之外的样式，不会把最终值写回普通 CSS 声明。
   *
   * 适用场景：控制延迟阶段和播放结束后的动画呈现。
   *
   * 常用值：`none`、`forwards`、`backwards`、`both`。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ animationFillMode: "forwards" })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-fill-mode
   */
  readonly OAnimationFillMode?: PropertyValue<'OAnimationFillMode', T>;
  /**
   * 兼容属性 -o-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-iteration-count
   */
  readonly OAnimationIterationCount?: PropertyValue<'OAnimationIterationCount', T>;
  /**
   * 兼容属性 -o-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-name
   */
  readonly OAnimationName?: PropertyValue<'OAnimationName', T>;
  /**
   * 兼容属性 -o-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-play-state
   */
  readonly OAnimationPlayState?: PropertyValue<'OAnimationPlayState', T>;
  /**
   * 兼容属性 -o-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly OAnimationTimingFunction?: PropertyValue<'OAnimationTimingFunction', T>;
  /**
   * 兼容属性 -o-background-size；优先参考标准属性及浏览器支持范围。
   * 设置背景图像尺寸，以及覆盖或完整容纳图像的缩放方式。
   *
   * 改变背景图像的尺寸，不改变元素尺寸；位置由 background-position 决定。
   *
   * 适用场景：背景封面或需要完整显示的背景装饰。
   *
   * 常用值：`auto`、`contain`、`cover`。
   *
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @example
   * css({ backgroundSize: "cover", backgroundPosition: "center" })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-background-size
   */
  readonly OBackgroundSize?: PropertyValue<'OBackgroundSize', T>;
  /**
   * 兼容属性 -o-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-border-image
   */
  readonly OBorderImage?: PropertyValue<'OBorderImage', T>;
  /**
   * 兼容属性 offset-block；优先参考标准属性 insetBlock及浏览器支持范围。
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block
   */
  readonly offsetBlock?: PropertyValue<'offsetBlock', T>;
  /**
   * 兼容属性 offset-block-end；优先参考标准属性 insetBlockEnd及浏览器支持范围。
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block-end
   */
  readonly offsetBlockEnd?: PropertyValue<'offsetBlockEnd', T>;
  /**
   * 兼容属性 offset-block-start；优先参考标准属性 insetBlockStart及浏览器支持范围。
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block-start
   */
  readonly offsetBlockStart?: PropertyValue<'offsetBlockStart', T>;
  /**
   * 兼容属性 offset-inline；优先参考标准属性 insetInline及浏览器支持范围。
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline
   */
  readonly offsetInline?: PropertyValue<'offsetInline', T>;
  /**
   * 兼容属性 offset-inline-end；优先参考标准属性 insetInlineEnd及浏览器支持范围。
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline-end
   */
  readonly offsetInlineEnd?: PropertyValue<'offsetInlineEnd', T>;
  /**
   * 兼容属性 offset-inline-start；优先参考标准属性 insetInlineStart及浏览器支持范围。
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline-start
   */
  readonly offsetInlineStart?: PropertyValue<'offsetInlineStart', T>;
  /**
   * 兼容属性 -o-object-fit；优先参考标准属性及浏览器支持范围。
   * 设置替换元素的内容如何适应其内容盒，例如图像的裁切和缩放。
   *
   * 控制 img、video 等替换内容在盒子内部的缩放与裁剪；不改变盒子本身的 width/height。
   *
   * 适用场景：封面裁剪、头像和完整图像预览。
   *
   * 常用值：`fill`、`contain`、`cover`、`none`、`scale-down`。
   *
   * CSS 规范初始值：`fill`，不同于浏览器默认样式表。
   * @example
   * css({ width: "80px", height: "80px", objectFit: "cover" })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-fit
   */
  readonly OObjectFit?: PropertyValue<'OObjectFit', T>;
  /**
   * 兼容属性 -o-object-position；优先参考标准属性及浏览器支持范围。
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-position
   */
  readonly OObjectPosition?: PropertyValue<'OObjectPosition', T>;
  /**
   * 兼容属性 -o-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：`8`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-tab-size
   */
  readonly OTabSize?: PropertyValue<'OTabSize', T>;
  /**
   * 兼容属性 -o-text-overflow；优先参考标准属性及浏览器支持范围。
   * 设置被裁剪的行内溢出文本如何提示，例如显示省略号。
   *
   * 本属性不自行制造溢出。单行省略通常还需要受限宽度、overflow:hidden 和 white-space:nowrap。
   *
   * 适用场景：受限宽度中的单行标题或标签。多行截断需要单独的布局和截行方案。
   *
   * 常用值：`ellipsis`、`clip`。
   *
   * CSS 规范初始值：`clip`，不同于浏览器默认样式表。
   * @example
   * css({ maxWidth: "12rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-text-overflow
   */
  readonly OTextOverflow?: PropertyValue<'OTextOverflow', T>;
  /**
   * 兼容属性 -o-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ transform: "translateX(8px) scale(1.05)" })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform
   */
  readonly OTransform?: PropertyValue<'OTransform', T>;
  /**
   * 兼容属性 -o-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform-origin
   */
  readonly OTransformOrigin?: PropertyValue<'OTransformOrigin', T>;
  /**
   * 兼容属性 -o-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   * @example
   * css({ transition: "opacity 160ms ease" })
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly OTransition?: PropertyValue<'OTransition', T>;
  /**
   * 兼容属性 -o-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-delay
   */
  readonly OTransitionDelay?: PropertyValue<'OTransitionDelay', T>;
  /**
   * 兼容属性 -o-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-duration
   */
  readonly OTransitionDuration?: PropertyValue<'OTransitionDuration', T>;
  /**
   * 兼容属性 -o-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-property
   */
  readonly OTransitionProperty?: PropertyValue<'OTransitionProperty', T>;
  /**
   * 兼容属性 -o-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly OTransitionTimingFunction?: PropertyValue<'OTransitionTimingFunction', T>;
  /**
   * 兼容属性 page-break-after；优先参考标准属性 breakAfter及浏览器支持范围。
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  readonly pageBreakAfter?: PropertyValue<'pageBreakAfter', T>;
  /**
   * 兼容属性 page-break-before；优先参考标准属性 breakBefore及浏览器支持范围。
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  readonly pageBreakBefore?: PropertyValue<'pageBreakBefore', T>;
  /**
   * 兼容属性 page-break-inside；优先参考标准属性 breakInside及浏览器支持范围。
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-inside
   */
  readonly pageBreakInside?: PropertyValue<'pageBreakInside', T>;
  /**
   * 兼容属性 position-try-options；优先参考标准属性 positionTryFallbacks及浏览器支持范围。
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly positionTryOptions?: PropertyValue<'positionTryOptions', T>;
  /**
   * 指定旧版滚动子项的吸附坐标，现代布局使用 scroll-snap-align。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  readonly scrollSnapCoordinate?: PropertyValue<'scrollSnapCoordinate', T>;
  /**
   * 指定旧版滚动容器中吸附位置对齐的目标坐标。
   *
   * CSS 规范初始值：`0px 0px`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  readonly scrollSnapDestination?: PropertyValue<'scrollSnapDestination', T>;
  /**
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-x
   */
  readonly scrollSnapPointsX?: PropertyValue<'scrollSnapPointsX', T>;
  /**
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-y
   */
  readonly scrollSnapPointsY?: PropertyValue<'scrollSnapPointsY', T>;
  /**
   * 控制旧版水平滚动吸附的强制程度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-x
   */
  readonly scrollSnapTypeX?: PropertyValue<'scrollSnapTypeX', T>;
  /**
   * 控制旧版垂直滚动吸附的强制程度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-y
   */
  readonly scrollSnapTypeY?: PropertyValue<'scrollSnapTypeY', T>;
  /**
   * 兼容属性 -webkit-align-content；优先参考标准属性及浏览器支持范围。
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly WebkitAlignContent?: PropertyValue<'WebkitAlignContent', T>;
  /**
   * 兼容属性 -webkit-align-items；优先参考标准属性及浏览器支持范围。
   * 设置容器内项目在交叉轴或块轴上的默认对齐方式。
   *
   * Flex 中沿交叉轴对齐；Grid 中通常沿块轴对齐。单个项目可以用 align-self 覆盖。
   *
   * 适用场景：图标与文字居中、表单控件基线对齐或项目拉伸。
   *
   * 常用值：`stretch`、`center`、`baseline`、`start`、`end`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ display: "flex", alignItems: "center" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-items
   */
  readonly WebkitAlignItems?: PropertyValue<'WebkitAlignItems', T>;
  /**
   * 兼容属性 -webkit-align-self；优先参考标准属性及浏览器支持范围。
   * 单独覆盖一个项目的交叉轴或块轴对齐方式。
   *
   * 适用场景：只改变某一个项目的交叉轴或块轴对齐，不改变同组其他项目。
   *
   * 常用值：`auto`、`stretch`、`baseline`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ alignSelf: "center" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly WebkitAlignSelf?: PropertyValue<'WebkitAlignSelf', T>;
  /**
   * 兼容属性 -webkit-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly WebkitAnimation?: PropertyValue<'WebkitAnimation', T>;
  /**
   * 兼容属性 -webkit-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-delay
   */
  readonly WebkitAnimationDelay?: PropertyValue<'WebkitAnimationDelay', T>;
  /**
   * 兼容属性 -webkit-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  readonly WebkitAnimationDirection?: PropertyValue<'WebkitAnimationDirection', T>;
  /**
   * 兼容属性 -webkit-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-duration
   */
  readonly WebkitAnimationDuration?: PropertyValue<'WebkitAnimationDuration', T>;
  /**
   * 兼容属性 -webkit-animation-fill-mode；优先参考标准属性及浏览器支持范围。
   * 设置动画在有效播放区间之外是否应用关键帧样式。
   *
   * 控制动画有效播放区间之外的样式，不会把最终值写回普通 CSS 声明。
   *
   * 适用场景：控制延迟阶段和播放结束后的动画呈现。
   *
   * 常用值：`none`、`forwards`、`backwards`、`both`。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ animationFillMode: "forwards" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-fill-mode
   */
  readonly WebkitAnimationFillMode?: PropertyValue<'WebkitAnimationFillMode', T>;
  /**
   * 兼容属性 -webkit-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-iteration-count
   */
  readonly WebkitAnimationIterationCount?: PropertyValue<'WebkitAnimationIterationCount', T>;
  /**
   * 兼容属性 -webkit-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-name
   */
  readonly WebkitAnimationName?: PropertyValue<'WebkitAnimationName', T>;
  /**
   * 兼容属性 -webkit-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-play-state
   */
  readonly WebkitAnimationPlayState?: PropertyValue<'WebkitAnimationPlayState', T>;
  /**
   * 兼容属性 -webkit-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly WebkitAnimationTimingFunction?: PropertyValue<'WebkitAnimationTimingFunction', T>;
  /**
   * 兼容属性 -webkit-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly WebkitAppearance?: PropertyValue<'WebkitAppearance', T>;
  /**
   * 兼容属性 -webkit-backdrop-filter；优先参考标准属性及浏览器支持范围。
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backdrop-filter
   */
  readonly WebkitBackdropFilter?: PropertyValue<'WebkitBackdropFilter', T>;
  /**
   * 兼容属性 -webkit-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backface-visibility
   */
  readonly WebkitBackfaceVisibility?: PropertyValue<'WebkitBackfaceVisibility', T>;
  /**
   * 兼容属性 -webkit-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  readonly WebkitBackgroundClip?: PropertyValue<'WebkitBackgroundClip', T>;
  /**
   * 兼容属性 -webkit-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  readonly WebkitBackgroundOrigin?: PropertyValue<'WebkitBackgroundOrigin', T>;
  /**
   * 兼容属性 -webkit-background-size；优先参考标准属性及浏览器支持范围。
   * 设置背景图像尺寸，以及覆盖或完整容纳图像的缩放方式。
   *
   * 改变背景图像的尺寸，不改变元素尺寸；位置由 background-position 决定。
   *
   * 适用场景：背景封面或需要完整显示的背景装饰。
   *
   * 常用值：`auto`、`contain`、`cover`。
   *
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @example
   * css({ backgroundSize: "cover", backgroundPosition: "center" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-size
   */
  readonly WebkitBackgroundSize?: PropertyValue<'WebkitBackgroundSize', T>;
  /**
   * 兼容属性 -webkit-border-before；优先参考标准属性 borderBlockStart及浏览器支持范围。
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before
   */
  readonly WebkitBorderBefore?: PropertyValue<'WebkitBorderBefore', T>;
  /**
   * 兼容属性 -webkit-border-before-color；优先参考标准属性 borderBlockStartColor及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-color
   */
  readonly WebkitBorderBeforeColor?: PropertyValue<'WebkitBorderBeforeColor', T>;
  /**
   * 兼容属性 -webkit-border-before-style；优先参考标准属性 borderBlockStartStyle及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly WebkitBorderBeforeStyle?: PropertyValue<'WebkitBorderBeforeStyle', T>;
  /**
   * 兼容属性 -webkit-border-before-width；优先参考标准属性 borderBlockStartWidth及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  readonly WebkitBorderBeforeWidth?: PropertyValue<'WebkitBorderBeforeWidth', T>;
  /**
   * 兼容属性 -webkit-border-bottom-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-left-radius
   */
  readonly WebkitBorderBottomLeftRadius?: PropertyValue<'WebkitBorderBottomLeftRadius', T>;
  /**
   * 兼容属性 -webkit-border-bottom-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-right-radius
   */
  readonly WebkitBorderBottomRightRadius?: PropertyValue<'WebkitBorderBottomRightRadius', T>;
  /**
   * 兼容属性 -webkit-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  readonly WebkitBorderImage?: PropertyValue<'WebkitBorderImage', T>;
  /**
   * 兼容属性 -webkit-border-image-slice；优先参考标准属性及浏览器支持范围。
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：`100%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image-slice
   */
  readonly WebkitBorderImageSlice?: PropertyValue<'WebkitBorderImageSlice', T>;
  /**
   * 兼容属性 -webkit-border-radius；优先参考标准属性及浏览器支持范围。
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   * @example
   * css({ borderRadius: "8px" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-radius
   */
  readonly WebkitBorderRadius?: PropertyValue<'WebkitBorderRadius', T>;
  /**
   * 兼容属性 -webkit-border-top-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-left-radius
   */
  readonly WebkitBorderTopLeftRadius?: PropertyValue<'WebkitBorderTopLeftRadius', T>;
  /**
   * 兼容属性 -webkit-border-top-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-right-radius
   */
  readonly WebkitBorderTopRightRadius?: PropertyValue<'WebkitBorderTopRightRadius', T>;
  /**
   * 兼容属性 -webkit-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-align
   */
  readonly WebkitBoxAlign?: PropertyValue<'WebkitBoxAlign', T>;
  /**
   * 兼容属性 -webkit-box-decoration-break；优先参考标准属性及浏览器支持范围。
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：`slice`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-decoration-break
   */
  readonly WebkitBoxDecorationBreak?: PropertyValue<'WebkitBoxDecorationBreak', T>;
  /**
   * 兼容属性 -webkit-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-direction
   */
  readonly WebkitBoxDirection?: PropertyValue<'WebkitBoxDirection', T>;
  /**
   * 兼容属性 -webkit-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-flex
   */
  readonly WebkitBoxFlex?: PropertyValue<'WebkitBoxFlex', T>;
  /**
   * 兼容属性 -webkit-box-flex-group；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-flex-group
   */
  readonly WebkitBoxFlexGroup?: PropertyValue<'WebkitBoxFlexGroup', T>;
  /**
   * 兼容属性 -webkit-box-lines；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：`single`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-lines
   */
  readonly WebkitBoxLines?: PropertyValue<'WebkitBoxLines', T>;
  /**
   * 兼容属性 -webkit-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-ordinal-group
   */
  readonly WebkitBoxOrdinalGroup?: PropertyValue<'WebkitBoxOrdinalGroup', T>;
  /**
   * 指定旧版弹性盒的排列方向；仅为多行截断兼容保留，常规布局请使用 Flex/Grid。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  readonly WebkitBoxOrient?: PropertyValue<'WebkitBoxOrient', T>;
  /**
   * 兼容属性 -webkit-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-pack
   */
  readonly WebkitBoxPack?: PropertyValue<'WebkitBoxPack', T>;
  /**
   * 兼容属性 -webkit-box-reflect；优先参考标准属性及浏览器支持范围。
   * 在指定方向生成元素的镜像，并可设置镜像间距和遮罩。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  readonly WebkitBoxReflect?: PropertyValue<'WebkitBoxReflect', T>;
  /**
   * 兼容属性 -webkit-box-shadow；优先参考标准属性及浏览器支持范围。
   * 设置盒子的外部或内部阴影，可叠加多层。
   *
   * 阴影不占布局空间，可用逗号叠加；与 border/outline 的用途和绘制位置不同。
   *
   * 适用场景：浮层层次、卡片边缘或内凹效果。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ boxShadow: "0 2px 8px rgb(0 0 0 / 0.15)" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-shadow
   */
  readonly WebkitBoxShadow?: PropertyValue<'WebkitBoxShadow', T>;
  /**
   * 兼容属性 -webkit-box-sizing；优先参考标准属性及浏览器支持范围。
   * 决定 width、height 等尺寸是否包含内边距和边框。
   *
   * 适用场景：确定组件声明宽高时是否把 padding 和 border 算在尺寸内。
   *
   * 常用值：`content-box`、`border-box`。
   *
   * CSS 规范初始值：`content-box`，不同于浏览器默认样式表。
   * @example
   * css({ boxSizing: "border-box", width: "20rem", padding: "1rem" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-sizing
   */
  readonly WebkitBoxSizing?: PropertyValue<'WebkitBoxSizing', T>;
  /**
   * 兼容属性 -webkit-clip-path；优先参考标准属性及浏览器支持范围。
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly WebkitClipPath?: PropertyValue<'WebkitClipPath', T>;
  /**
   * 兼容属性 -webkit-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-count
   */
  readonly WebkitColumnCount?: PropertyValue<'WebkitColumnCount', T>;
  /**
   * 兼容属性 -webkit-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：`balance`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-fill
   */
  readonly WebkitColumnFill?: PropertyValue<'WebkitColumnFill', T>;
  /**
   * 兼容属性 -webkit-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule
   */
  readonly WebkitColumnRule?: PropertyValue<'WebkitColumnRule', T>;
  /**
   * 兼容属性 -webkit-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-color
   */
  readonly WebkitColumnRuleColor?: PropertyValue<'WebkitColumnRuleColor', T>;
  /**
   * 兼容属性 -webkit-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly WebkitColumnRuleStyle?: PropertyValue<'WebkitColumnRuleStyle', T>;
  /**
   * 兼容属性 -webkit-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  readonly WebkitColumnRuleWidth?: PropertyValue<'WebkitColumnRuleWidth', T>;
  /**
   * 兼容属性 -webkit-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-columns
   */
  readonly WebkitColumns?: PropertyValue<'WebkitColumns', T>;
  /**
   * 兼容属性 -webkit-column-span；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-span
   */
  readonly WebkitColumnSpan?: PropertyValue<'WebkitColumnSpan', T>;
  /**
   * 兼容属性 -webkit-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-width
   */
  readonly WebkitColumnWidth?: PropertyValue<'WebkitColumnWidth', T>;
  /**
   * 兼容属性 -webkit-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-filter
   */
  readonly WebkitFilter?: PropertyValue<'WebkitFilter', T>;
  /**
   * 兼容属性 -webkit-flex；优先参考标准属性及浏览器支持范围。
   * 集中设置弹性项目的增长系数、收缩系数和基础尺寸。
   *
   * 依次对应 flex-grow、flex-shrink、flex-basis。作用于弹性项目，应先由父容器建立 Flex 布局。
   *
   * 适用场景：分配弹性布局中的剩余空间，或让项目保持自身尺寸。
   *
   * 常用值：`auto`、`none`。
   * @example
   * css({ flex: "1 1 0%" })
   * @example
   * css({ flex: "none" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  readonly WebkitFlex?: PropertyValue<'WebkitFlex', T>;
  /**
   * 兼容属性 -webkit-flex-basis；优先参考标准属性及浏览器支持范围。
   * 设置弹性项目分配剩余空间之前的主轴基础尺寸。
   *
   * 在剩余空间分配前确定项目的主轴基础尺寸；设置为 auto 时先参考对应的 width/height。
   *
   * 适用场景：为侧栏、内容区或重复项目指定弹性分配的起始尺寸。
   *
   * 常用值：`auto`、`content`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ flexBasis: "16rem" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly WebkitFlexBasis?: PropertyValue<'WebkitFlexBasis', T>;
  /**
   * 兼容属性 -webkit-flex-direction；优先参考标准属性及浏览器支持范围。
   * 设置弹性容器的主轴方向及项目排列方向。
   *
   * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
   *
   * 常用值：`row`、`column`、`row-reverse`、`column-reverse`。
   *
   * CSS 规范初始值：`row`，不同于浏览器默认样式表。
   * @example
   * css({ display: "flex", flexDirection: "column", gap: "1rem" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-direction
   */
  readonly WebkitFlexDirection?: PropertyValue<'WebkitFlexDirection', T>;
  /**
   * 兼容属性 -webkit-flex-flow；优先参考标准属性及浏览器支持范围。
   * 同时设置弹性布局的主轴方向和换行方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly WebkitFlexFlow?: PropertyValue<'WebkitFlexFlow', T>;
  /**
   * 兼容属性 -webkit-flex-grow；优先参考标准属性及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * 数值是分配正剩余空间的相对权重，不是最终宽度百分比。只有容器存在剩余空间时才发挥作用。
   *
   * 适用场景：让主内容区填充工具栏或行布局的剩余空间。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @example
   * css({ flexGrow: 1 })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-grow
   */
  readonly WebkitFlexGrow?: PropertyValue<'WebkitFlexGrow', T>;
  /**
   * 兼容属性 -webkit-flex-shrink；优先参考标准属性及浏览器支持范围。
   * 设置弹性项目空间不足时的收缩系数。
   *
   * 实际收缩还与 flex-basis 成比例；自动最小尺寸可能阻止项目继续缩小。
   *
   * 适用场景：控制空间不足时是否允许缩小；设置为 0 可避免图标或固定控件收缩。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @example
   * css({ flexShrink: 0 })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-shrink
   */
  readonly WebkitFlexShrink?: PropertyValue<'WebkitFlexShrink', T>;
  /**
   * 兼容属性 -webkit-flex-wrap；优先参考标准属性及浏览器支持范围。
   * 设置弹性项目是否换行，以及多行的排列方向。
   *
   * 适用场景：标签、按钮等项目不足一行时允许分行。
   *
   * 常用值：`nowrap`、`wrap`、`wrap-reverse`。
   *
   * CSS 规范初始值：`nowrap`，不同于浏览器默认样式表。
   * @example
   * css({ display: "flex", flexWrap: "wrap", gap: "0.5rem" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-wrap
   */
  readonly WebkitFlexWrap?: PropertyValue<'WebkitFlexWrap', T>;
  /**
   * 兼容属性 -webkit-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-feature-settings
   */
  readonly WebkitFontFeatureSettings?: PropertyValue<'WebkitFontFeatureSettings', T>;
  /**
   * 兼容属性 -webkit-font-kerning；优先参考标准属性及浏览器支持范围。
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-kerning
   */
  readonly WebkitFontKerning?: PropertyValue<'WebkitFontKerning', T>;
  /**
   * 兼容属性 -webkit-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 WebKit 平台的字体平滑方式；不是通用的跨浏览器排版开关。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly WebkitFontSmoothing?: PropertyValue<'WebkitFontSmoothing', T>;
  /**
   * 兼容属性 -webkit-font-variant-ligatures；优先参考标准属性及浏览器支持范围。
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly WebkitFontVariantLigatures?: PropertyValue<'WebkitFontVariantLigatures', T>;
  /**
   * 兼容属性 -webkit-hyphenate-character；优先参考标准属性及浏览器支持范围。
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphenate-character
   */
  readonly WebkitHyphenateCharacter?: PropertyValue<'WebkitHyphenateCharacter', T>;
  /**
   * 兼容属性 -webkit-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphens
   */
  readonly WebkitHyphens?: PropertyValue<'WebkitHyphens', T>;
  /**
   * 兼容属性 -webkit-initial-letter；优先参考标准属性及浏览器支持范围。
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-initial-letter
   */
  readonly WebkitInitialLetter?: PropertyValue<'WebkitInitialLetter', T>;
  /**
   * 兼容属性 -webkit-justify-content；优先参考标准属性及浏览器支持范围。
   * 分配布局主轴或行内轴的剩余空间，控制内容整体对齐。
   *
   * Flex 中沿主轴分配空间，Grid 中沿行内轴对齐网格整体。没有剩余空间时，空间分配效果可能不明显。
   *
   * 常用值：`center`、`space-between`、`space-around`、`space-evenly`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * css({ display: "flex", justifyContent: "space-between" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-justify-content
   */
  readonly WebkitJustifyContent?: PropertyValue<'WebkitJustifyContent', T>;
  /**
   * 兼容属性 -webkit-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  readonly WebkitLineBreak?: PropertyValue<'WebkitLineBreak', T>;
  /**
   * 限制多行文本显示的行数；与 display: -webkit-box、WebkitBoxOrient: 'vertical' 和 overflow: hidden 配合，不删除文本内容。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-clamp
   */
  readonly WebkitLineClamp?: PropertyValue<'WebkitLineClamp', T>;
  /**
   * 兼容属性 -webkit-logical-height；优先参考标准属性 blockSize及浏览器支持范围。
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly WebkitLogicalHeight?: PropertyValue<'WebkitLogicalHeight', T>;
  /**
   * 兼容属性 -webkit-logical-width；优先参考标准属性 inlineSize及浏览器支持范围。
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly WebkitLogicalWidth?: PropertyValue<'WebkitLogicalWidth', T>;
  /**
   * 兼容属性 -webkit-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-end
   */
  readonly WebkitMarginEnd?: PropertyValue<'WebkitMarginEnd', T>;
  /**
   * 兼容属性 -webkit-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-start
   */
  readonly WebkitMarginStart?: PropertyValue<'WebkitMarginStart', T>;
  /**
   * 兼容属性 -webkit-mask；优先参考标准属性及浏览器支持范围。
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly WebkitMask?: PropertyValue<'WebkitMask', T>;
  /**
   * 兼容属性 -webkit-mask-attachment；优先参考标准属性及浏览器支持范围。
   * 指定旧版遮罩图像是否随内容滚动。
   *
   * CSS 规范初始值：`scroll`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  readonly WebkitMaskAttachment?: PropertyValue<'WebkitMaskAttachment', T>;
  /**
   * 兼容属性 -webkit-mask-box-image；优先参考标准属性 maskBorder及浏览器支持范围。
   * 设置基于九宫格图像切片的边框遮罩。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  readonly WebkitMaskBoxImage?: PropertyValue<'WebkitMaskBoxImage', T>;
  /**
   * 兼容属性 -webkit-mask-box-image-outset；优先参考标准属性 maskBorderOutset及浏览器支持范围。
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-outset
   */
  readonly WebkitMaskBoxImageOutset?: PropertyValue<'WebkitMaskBoxImageOutset', T>;
  /**
   * 兼容属性 -webkit-mask-box-image-repeat；优先参考标准属性 maskBorderRepeat及浏览器支持范围。
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  readonly WebkitMaskBoxImageRepeat?: PropertyValue<'WebkitMaskBoxImageRepeat', T>;
  /**
   * 兼容属性 -webkit-mask-box-image-slice；优先参考标准属性 maskBorderSlice及浏览器支持范围。
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-slice
   */
  readonly WebkitMaskBoxImageSlice?: PropertyValue<'WebkitMaskBoxImageSlice', T>;
  /**
   * 兼容属性 -webkit-mask-box-image-source；优先参考标准属性 maskBorderSource及浏览器支持范围。
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-source
   */
  readonly WebkitMaskBoxImageSource?: PropertyValue<'WebkitMaskBoxImageSource', T>;
  /**
   * 兼容属性 -webkit-mask-box-image-width；优先参考标准属性 maskBorderWidth及浏览器支持范围。
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-width
   */
  readonly WebkitMaskBoxImageWidth?: PropertyValue<'WebkitMaskBoxImageWidth', T>;
  /**
   * 兼容属性 -webkit-mask-clip；优先参考标准属性及浏览器支持范围。
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：`border`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly WebkitMaskClip?: PropertyValue<'WebkitMaskClip', T>;
  /**
   * 兼容属性 -webkit-mask-composite；优先参考标准属性及浏览器支持范围。
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：`source-over`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly WebkitMaskComposite?: PropertyValue<'WebkitMaskComposite', T>;
  /**
   * 兼容属性 -webkit-mask-image；优先参考标准属性及浏览器支持范围。
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-image
   */
  readonly WebkitMaskImage?: PropertyValue<'WebkitMaskImage', T>;
  /**
   * 兼容属性 -webkit-mask-origin；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：`padding`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly WebkitMaskOrigin?: PropertyValue<'WebkitMaskOrigin', T>;
  /**
   * 兼容属性 -webkit-mask-position；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  readonly WebkitMaskPosition?: PropertyValue<'WebkitMaskPosition', T>;
  /**
   * 兼容属性 -webkit-mask-position-x；优先参考标准属性 backgroundPositionX及浏览器支持范围。
   * 设置遮罩图像的水平位置，可使用长度、百分比或位置关键字。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  readonly WebkitMaskPositionX?: PropertyValue<'WebkitMaskPositionX', T>;
  /**
   * 兼容属性 -webkit-mask-position-y；优先参考标准属性 backgroundPositionY及浏览器支持范围。
   * 设置遮罩图像的垂直位置，可使用长度、百分比或位置关键字。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  readonly WebkitMaskPositionY?: PropertyValue<'WebkitMaskPositionY', T>;
  /**
   * 兼容属性 -webkit-mask-repeat；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly WebkitMaskRepeat?: PropertyValue<'WebkitMaskRepeat', T>;
  /**
   * 兼容属性 -webkit-mask-repeat-x；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在水平方向的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  readonly WebkitMaskRepeatX?: PropertyValue<'WebkitMaskRepeatX', T>;
  /**
   * 兼容属性 -webkit-mask-repeat-y；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在垂直方向的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  readonly WebkitMaskRepeatY?: PropertyValue<'WebkitMaskRepeatY', T>;
  /**
   * 兼容属性 -webkit-mask-size；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-size
   */
  readonly WebkitMaskSize?: PropertyValue<'WebkitMaskSize', T>;
  /**
   * 兼容属性 -webkit-max-inline-size；优先参考标准属性及浏览器支持范围。
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  readonly WebkitMaxInlineSize?: PropertyValue<'WebkitMaxInlineSize', T>;
  /**
   * 兼容属性 -webkit-order；优先参考标准属性及浏览器支持范围。
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-order
   */
  readonly WebkitOrder?: PropertyValue<'WebkitOrder', T>;
  /**
   * 兼容属性 -webkit-overflow-scrolling；优先参考标准属性及浏览器支持范围。
   * 选择特定旧版 WebKit 触控环境的滚动方式，包括惯性滚动。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-overflow-scrolling
   */
  readonly WebkitOverflowScrolling?: PropertyValue<'WebkitOverflowScrolling', T>;
  /**
   * 兼容属性 -webkit-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-end
   */
  readonly WebkitPaddingEnd?: PropertyValue<'WebkitPaddingEnd', T>;
  /**
   * 兼容属性 -webkit-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-start
   */
  readonly WebkitPaddingStart?: PropertyValue<'WebkitPaddingStart', T>;
  /**
   * 兼容属性 -webkit-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective
   */
  readonly WebkitPerspective?: PropertyValue<'WebkitPerspective', T>;
  /**
   * 兼容属性 -webkit-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  readonly WebkitPerspectiveOrigin?: PropertyValue<'WebkitPerspectiveOrigin', T>;
  /**
   * 兼容属性 -webkit-print-color-adjust；优先参考标准属性及浏览器支持范围。
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-print-color-adjust
   */
  readonly WebkitPrintColorAdjust?: PropertyValue<'WebkitPrintColorAdjust', T>;
  /**
   * 兼容属性 -webkit-ruby-position；优先参考标准属性及浏览器支持范围。
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：`alternate`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  readonly WebkitRubyPosition?: PropertyValue<'WebkitRubyPosition', T>;
  /**
   * 兼容属性 -webkit-scroll-snap-type；优先参考标准属性及浏览器支持范围。
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ scrollSnapType: "x mandatory" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-scroll-snap-type
   */
  readonly WebkitScrollSnapType?: PropertyValue<'WebkitScrollSnapType', T>;
  /**
   * 兼容属性 -webkit-shape-margin；优先参考标准属性及浏览器支持范围。
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-shape-margin
   */
  readonly WebkitShapeMargin?: PropertyValue<'WebkitShapeMargin', T>;
  /**
   * 兼容属性 -webkit-tap-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置 WebKit 触控点击链接或可交互区域时的高亮颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-tap-highlight-color
   */
  readonly WebkitTapHighlightColor?: PropertyValue<'WebkitTapHighlightColor', T>;
  /**
   * 兼容属性 -webkit-text-combine；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-combine
   */
  readonly WebkitTextCombine?: PropertyValue<'WebkitTextCombine', T>;
  /**
   * 兼容属性 -webkit-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-color
   */
  readonly WebkitTextDecorationColor?: PropertyValue<'WebkitTextDecorationColor', T>;
  /**
   * 兼容属性 -webkit-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly WebkitTextDecorationLine?: PropertyValue<'WebkitTextDecorationLine', T>;
  /**
   * 兼容属性 -webkit-text-decoration-skip；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：`objects`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly WebkitTextDecorationSkip?: PropertyValue<'WebkitTextDecorationSkip', T>;
  /**
   * 兼容属性 -webkit-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：`solid`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  readonly WebkitTextDecorationStyle?: PropertyValue<'WebkitTextDecorationStyle', T>;
  /**
   * 兼容属性 -webkit-text-emphasis；优先参考标准属性及浏览器支持范围。
   * 同时设置文字着重号的样式和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis
   */
  readonly WebkitTextEmphasis?: PropertyValue<'WebkitTextEmphasis', T>;
  /**
   * 兼容属性 -webkit-text-emphasis-color；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-color
   */
  readonly WebkitTextEmphasisColor?: PropertyValue<'WebkitTextEmphasisColor', T>;
  /**
   * 兼容属性 -webkit-text-emphasis-position；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-position
   */
  readonly WebkitTextEmphasisPosition?: PropertyValue<'WebkitTextEmphasisPosition', T>;
  /**
   * 兼容属性 -webkit-text-emphasis-style；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  readonly WebkitTextEmphasisStyle?: PropertyValue<'WebkitTextEmphasisStyle', T>;
  /**
   * 兼容属性 -webkit-text-fill-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形内部填充色，可独立于文字描边色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-fill-color
   */
  readonly WebkitTextFillColor?: PropertyValue<'WebkitTextFillColor', T>;
  /**
   * 兼容属性 -webkit-text-orientation；优先参考标准属性及浏览器支持范围。
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：`mixed`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  readonly WebkitTextOrientation?: PropertyValue<'WebkitTextOrientation', T>;
  /**
   * 兼容属性 -webkit-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-size-adjust
   */
  readonly WebkitTextSizeAdjust?: PropertyValue<'WebkitTextSizeAdjust', T>;
  /**
   * 兼容属性 -webkit-text-stroke；优先参考标准属性及浏览器支持范围。
   * 合并设置文字字形描边的宽度和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke
   */
  readonly WebkitTextStroke?: PropertyValue<'WebkitTextStroke', T>;
  /**
   * 兼容属性 -webkit-text-stroke-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-color
   */
  readonly WebkitTextStrokeColor?: PropertyValue<'WebkitTextStrokeColor', T>;
  /**
   * 兼容属性 -webkit-text-stroke-width；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边宽度。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-width
   */
  readonly WebkitTextStrokeWidth?: PropertyValue<'WebkitTextStrokeWidth', T>;
  /**
   * 兼容属性 -webkit-text-underline-position；优先参考标准属性及浏览器支持范围。
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  readonly WebkitTextUnderlinePosition?: PropertyValue<'WebkitTextUnderlinePosition', T>;
  /**
   * 兼容属性 -webkit-touch-callout；优先参考标准属性及浏览器支持范围。
   * 控制特定 WebKit 触控环境是否显示长按内容菜单。
   *
   * CSS 规范初始值：`default`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-touch-callout
   */
  readonly WebkitTouchCallout?: PropertyValue<'WebkitTouchCallout', T>;
  /**
   * 兼容属性 -webkit-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * css({ transform: "translateX(8px) scale(1.05)" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform
   */
  readonly WebkitTransform?: PropertyValue<'WebkitTransform', T>;
  /**
   * 兼容属性 -webkit-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  readonly WebkitTransformOrigin?: PropertyValue<'WebkitTransformOrigin', T>;
  /**
   * 兼容属性 -webkit-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：`flat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-style
   */
  readonly WebkitTransformStyle?: PropertyValue<'WebkitTransformStyle', T>;
  /**
   * 兼容属性 -webkit-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   * @example
   * css({ transition: "opacity 160ms ease" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly WebkitTransition?: PropertyValue<'WebkitTransition', T>;
  /**
   * 兼容属性 -webkit-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-delay
   */
  readonly WebkitTransitionDelay?: PropertyValue<'WebkitTransitionDelay', T>;
  /**
   * 兼容属性 -webkit-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-duration
   */
  readonly WebkitTransitionDuration?: PropertyValue<'WebkitTransitionDuration', T>;
  /**
   * 兼容属性 -webkit-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-property
   */
  readonly WebkitTransitionProperty?: PropertyValue<'WebkitTransitionProperty', T>;
  /**
   * 兼容属性 -webkit-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly WebkitTransitionTimingFunction?: PropertyValue<'WebkitTransitionTimingFunction', T>;
  /**
   * 兼容属性 -webkit-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * CSS 规范初始值：`read-only`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  readonly WebkitUserModify?: PropertyValue<'WebkitUserModify', T>;
  /**
   * 兼容属性 -webkit-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ userSelect: "all" })
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-select
   */
  readonly WebkitUserSelect?: PropertyValue<'WebkitUserSelect', T>;
  /**
   * 兼容属性 -webkit-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：`horizontal-tb`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly WebkitWritingMode?: PropertyValue<'WebkitWritingMode', T>;
}
/** 其他标准属性；泛型 T 保留系统与继承主题关键字。 */
export interface OtherProperties<T extends SystemKeywords = SystemKeywords> {
  /**
   * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  readonly all?: PropertyValue<'all', T>;
  /**
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：`slice`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  readonly boxDecorationBreak?: PropertyValue<'boxDecorationBreak', T>;
  /**
   * 设置 SVG 圆或椭圆中心的横坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  readonly cx?: PropertyValue<'cx', T>;
  /**
   * 设置 SVG 圆或椭圆中心的纵坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  readonly cy?: PropertyValue<'cy', T>;
  /**
   * 设置 SVG path 元素的路径数据。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  readonly d?: PropertyValue<'d', T>;
  /**
   * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。
   *
   * CSS 规范初始值：`fixed`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  readonly fieldSizing?: PropertyValue<'fieldSizing', T>;
  /**
   * 控制元素是否参与系统强制颜色模式的自动替换。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  readonly forcedColorAdjust?: PropertyValue<'forcedColorAdjust', T>;
  /**
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  readonly hyphenateCharacter?: PropertyValue<'hyphenateCharacter', T>;
  /**
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  readonly hyphenateLimitChars?: PropertyValue<'hyphenateLimitChars', T>;
  /**
   * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。
   *
   * CSS 规范初始值：`numeric-only`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  readonly interpolateSize?: PropertyValue<'interpolateSize', T>;
  /**
   * 控制元素是否建立独立的层叠上下文，隔离混合效果。
   *
   * 适用场景：建立局部层叠边界，或限制混合模式影响范围。
   *
   * 常用值：`auto`、`isolate`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * css({ isolation: "isolate" })
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
   */
  readonly isolation?: PropertyValue<'isolation', T>;
  /**
   * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`pack`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  readonly masonryAutoFlow?: PropertyValue<'masonryAutoFlow', T>;
  /**
   * 设置数学公式的嵌套深度，用于数学字号等排版计算。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  readonly mathDepth?: PropertyValue<'mathDepth', T>;
  /**
   * 控制数学上标采用正常还是压缩的垂直偏移。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  readonly mathShift?: PropertyValue<'mathShift', T>;
  /**
   * 设置数学公式采用正常还是紧凑排版。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  readonly mathStyle?: PropertyValue<'mathStyle', T>;
  /**
   * 设置运动路径的旧式简写；对应现代 offset 属性族。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly motion?: PropertyValue<'motion', T>;
  /**
   * 设置沿运动路径行进距离的旧属性；对应 offset-distance。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-distance
   */
  readonly motionDistance?: PropertyValue<'motionDistance', T>;
  /**
   * 设置运动路径的旧属性；对应 offset-path。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly motionPath?: PropertyValue<'motionPath', T>;
  /**
   * 设置运动路径旋转方式的旧属性；对应 offset-rotate。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-rotation
   */
  readonly motionRotation?: PropertyValue<'motionRotation', T>;
  /**
   * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  readonly overlay?: PropertyValue<'overlay', T>;
  /**
   * 设置 SVG 圆的半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  readonly r?: PropertyValue<'r', T>;
  /**
   * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  readonly rx?: PropertyValue<'rx', T>;
  /**
   * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  readonly ry?: PropertyValue<'ry', T>;
  /**
   * 设置语音呈现时文字、数字和标点的朗读方式；使用前核对语音媒体支持。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  readonly speakAs?: PropertyValue<'speakAs', T>;
  /**
   * 设置描边颜色的扩展属性；常规 SVG 优先使用 stroke 并核对支持情况。
   *
   * CSS 规范初始值：`transparent`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  readonly strokeColor?: PropertyValue<'strokeColor', T>;
  /**
   * 扩大命名动画时间线的可引用作用域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  readonly timelineScope?: PropertyValue<'timelineScope', T>;
  /**
   * 同时声明基于元素可见进度的时间线名称与轴。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  readonly viewTimeline?: PropertyValue<'viewTimeline', T>;
  /**
   * 设置可见进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：`block`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  readonly viewTimelineAxis?: PropertyValue<'viewTimelineAxis', T>;
  /**
   * 设置可见进度时间线使用的滚动视口内缩范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  readonly viewTimelineInset?: PropertyValue<'viewTimelineInset', T>;
  /**
   * 声明基于元素进入和离开滚动视口的时间线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  readonly viewTimelineName?: PropertyValue<'viewTimelineName', T>;
  /**
   * 提前告知浏览器可能发生变化的属性，便于准备优化资源。
   *
   * 仅对即将发生的变化短期使用；长期或大量声明可能占用额外资源，并提前改变层叠上下文。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  readonly willChange?: PropertyValue<'willChange', T>;
  /**
   * 设置适用 SVG 元素的水平几何坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  readonly x?: PropertyValue<'x', T>;
  /**
   * 设置适用 SVG 元素的垂直几何坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  readonly y?: PropertyValue<'y', T>;
  /**
   * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  readonly zoom?: PropertyValue<'zoom', T>;
}
export interface CssProperties<T extends SystemKeywords = SystemKeywords>
  extends
    LayoutProperties<T>,
    SizingProperties<T>,
    SpacingProperties<T>,
    TypographyProperties<T>,
    ColorsProperties<T>,
    BordersProperties<T>,
    EffectsProperties<T>,
    MotionProperties<T>,
    ScrollingProperties<T>,
    InteractionProperties<T>,
    StructureProperties<T>,
    SvgProperties<T>,
    CompatibilityProperties<T>,
    OtherProperties<T> {}
