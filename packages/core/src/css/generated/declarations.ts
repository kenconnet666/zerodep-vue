// 由 packages/core/scripts/css/generate.mjs 从固定 csstype@3.2.3 生成；请勿手改。
import type { CssDeclarationValue } from '../types.ts';
import type { SystemKeywords } from './system.ts';
/** CSS 对象的属性声明；中文说明和规范元数据由固定来源生成。 */
export interface CssDeclarations<T extends SystemKeywords = SystemKeywords> {
  /**
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  alignContent?: CssDeclarationValue<'alignContent', T>;
  /**
   * 设置容器内项目在交叉轴或块轴上的默认对齐方式。
   *
   * Flex 中沿交叉轴对齐；Grid 中通常沿块轴对齐。单个项目可以用 align-self 覆盖。
   *
   * 适用场景：图标与文字居中、表单控件基线对齐或项目拉伸。
   *
   * 常用值：`stretch`、`center`、`baseline`、`start`、`end`。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  alignItems?: CssDeclarationValue<'alignItems', T>;
  /**
   * 选择行内或 SVG 文本参与对齐时使用的基线。
   *
   * @default:'baseline'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  alignmentBaseline?: CssDeclarationValue<'alignmentBaseline', T>;
  /**
   * 单独覆盖一个项目的交叉轴或块轴对齐方式。
   *
   * 适用场景：只改变某一个项目的交叉轴或块轴对齐，不改变同组其他项目。
   *
   * 常用值：`auto`、`stretch`、`baseline`。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  alignSelf?: CssDeclarationValue<'alignSelf', T>;
  /**
   * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  alignTracks?: CssDeclarationValue<'alignTracks', T>;
  /**
   * 为元素声明锚点名称，供锚点定位的元素引用。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  anchorName?: CssDeclarationValue<'anchorName', T>;
  /**
   * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  anchorScope?: CssDeclarationValue<'anchorScope', T>;
  /**
   * 设置定位元素相对于其定位参照的下侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  bottom?: CssDeclarationValue<'bottom', T>;
  /**
   * 要求元素避让指定侧的前置浮动元素。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  clear?: CssDeclarationValue<'clear', T>;
  /**
   * 设置多栏布局的目标栏数。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  columnCount?: CssDeclarationValue<'columnCount', T>;
  /**
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * @default:'balance'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  columnFill?: CssDeclarationValue<'columnFill', T>;
  /**
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * @default:'column-width: auto；column-count: auto；column-height: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  columns?: CssDeclarationValue<'columns', T>;
  /**
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  columnSpan?: CssDeclarationValue<'columnSpan', T>;
  /**
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  columnWidth?: CssDeclarationValue<'columnWidth', T>;
  /**
   * 决定元素是否生成布局盒子，以及元素自身和内部内容如何排版。
   *
   * 外部显示类型决定元素自身以块级还是行内级方式参与周围布局；内部布局方式决定内容使用普通流、Flex 或 Grid 等布局。此属性不继承；例如 div 通常由浏览器默认样式设置为 block。
   *
   * 适用场景：选择容器的布局方式；具体对齐、间距和换行由对应布局属性控制。
   *
   * 常用值：`block`、`inline`、`flex`、`inline-flex`、`grid`、`none`。
   *
   * @default:'inline'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  display?: CssDeclarationValue<'display', T>;
  /**
   * 集中设置弹性项目的增长系数、收缩系数和基础尺寸。
   *
   * 依次对应 flex-grow、flex-shrink、flex-basis。作用于弹性项目，应先由父容器建立 Flex 布局。
   *
   * 适用场景：分配弹性布局中的剩余空间，或让项目保持自身尺寸。
   *
   * 常用值：`auto`、`none`。
   *
   * @default:'flex-grow: 0；flex-shrink: 1；flex-basis: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  flex?: CssDeclarationValue<'flex', T>;
  /**
   * 设置弹性项目分配剩余空间之前的主轴基础尺寸。
   *
   * 在剩余空间分配前确定项目的主轴基础尺寸；设置为 auto 时先参考对应的 width/height。
   *
   * 适用场景：为侧栏、内容区或重复项目指定弹性分配的起始尺寸。
   *
   * 常用值：`auto`、`content`。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  flexBasis?: CssDeclarationValue<'flexBasis', T>;
  /**
   * 设置弹性容器的主轴方向及项目排列方向。
   *
   * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
   *
   * 常用值：`row`、`column`、`row-reverse`、`column-reverse`。
   *
   * @default:'row'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
   */
  flexDirection?: CssDeclarationValue<'flexDirection', T>;
  /**
   * 同时设置弹性布局的主轴方向和换行方式。
   *
   * @default:'flex-direction: row；flex-wrap: nowrap'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  flexFlow?: CssDeclarationValue<'flexFlow', T>;
  /**
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * 数值是分配正剩余空间的相对权重，不是最终宽度百分比。只有容器存在剩余空间时才发挥作用。
   *
   * 适用场景：让主内容区填充工具栏或行布局的剩余空间。
   *
   * @default:'0'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
   */
  flexGrow?: CssDeclarationValue<'flexGrow', T>;
  /**
   * 设置弹性项目空间不足时的收缩系数。
   *
   * 实际收缩还与 flex-basis 成比例；自动最小尺寸可能阻止项目继续缩小。
   *
   * 适用场景：控制空间不足时是否允许缩小；设置为 0 可避免图标或固定控件收缩。
   *
   * @default:'1'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
   */
  flexShrink?: CssDeclarationValue<'flexShrink', T>;
  /**
   * 设置弹性项目是否换行，以及多行的排列方向。
   *
   * 适用场景：标签、按钮等项目不足一行时允许分行。
   *
   * 常用值：`nowrap`、`wrap`、`wrap-reverse`。
   *
   * @default:'nowrap'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  flexWrap?: CssDeclarationValue<'flexWrap', T>;
  /**
   * 将元素浮动到指定侧，使相邻行内内容围绕它排列。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  float?: CssDeclarationValue<'float', T>;
  /**
   * 集中设置显式和隐式网格的轨道、区域及自动放置方式。
   *
   * @default:'grid-template-rows: none；grid-template-columns: none；grid-template-areas: none；grid-auto-rows: auto；grid-auto-columns: auto；grid-auto-flow: row；grid-column-gap: 0；grid-row-gap: 0；column-gap: normal；row-gap: normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  grid?: CssDeclarationValue<'grid', T>;
  /**
   * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。
   *
   * @default:'grid-row-start: auto；grid-column-start: auto；grid-row-end: auto；grid-column-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  gridArea?: CssDeclarationValue<'gridArea', T>;
  /**
   * 设置隐式生成的网格列尺寸。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  gridAutoColumns?: CssDeclarationValue<'gridAutoColumns', T>;
  /**
   * 设置网格自动放置算法的行列方向及是否密集填洞。
   *
   * dense 可能改变视觉顺序，但不改变 DOM 和键盘导航顺序。
   *
   * 适用场景：控制未明确指定位置的网格项目如何自动填入轨道。
   *
   * 常用值：`row`、`column`、`dense`。
   *
   * @default:'row'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
   */
  gridAutoFlow?: CssDeclarationValue<'gridAutoFlow', T>;
  /**
   * 设置隐式生成的网格行尺寸。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  gridAutoRows?: CssDeclarationValue<'gridAutoRows', T>;
  /**
   * 设置网格项目的列起点和列终点。
   *
   * @default:'grid-column-start: auto；grid-column-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  gridColumn?: CssDeclarationValue<'gridColumn', T>;
  /**
   * 设置网格项目的列终止线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  gridColumnEnd?: CssDeclarationValue<'gridColumnEnd', T>;
  /**
   * 设置网格项目的列起始线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  gridColumnStart?: CssDeclarationValue<'gridColumnStart', T>;
  /**
   * 设置网格项目的行起点和行终点。
   *
   * @default:'grid-row-start: auto；grid-row-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  gridRow?: CssDeclarationValue<'gridRow', T>;
  /**
   * 设置网格项目的行终止线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  gridRowEnd?: CssDeclarationValue<'gridRowEnd', T>;
  /**
   * 设置网格项目的行起始线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  gridRowStart?: CssDeclarationValue<'gridRowStart', T>;
  /**
   * 集中设置显式网格的行、列和命名区域。
   *
   * @default:'grid-template-columns: none；grid-template-rows: none；grid-template-areas: none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  gridTemplate?: CssDeclarationValue<'gridTemplate', T>;
  /**
   * 用区域名称矩阵定义网格布局区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  gridTemplateAreas?: CssDeclarationValue<'gridTemplateAreas', T>;
  /**
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * 每个轨道值定义一列；fr 分配剩余空间。需要允许长内容所在列缩小时，可使用 minmax(0, 1fr)。
   *
   * 适用场景：响应式卡片、表单标签与输入框的列布局。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  gridTemplateColumns?: CssDeclarationValue<'gridTemplateColumns', T>;
  /**
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * 每个轨道值定义一行，未显式定义的行使用 grid-auto-rows。
   *
   * 适用场景：区分固定工具栏和可伸缩内容区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  gridTemplateRows?: CssDeclarationValue<'gridTemplateRows', T>;
  /**
   * 同时设置定位元素的上、右、下、左偏移。
   *
   * @default:'top: auto；bottom: auto；left: auto；right: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  inset?: CssDeclarationValue<'inset', T>;
  /**
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   *
   * @default:'inset-block-start: auto；inset-block-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  insetBlock?: CssDeclarationValue<'insetBlock', T>;
  /**
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  insetBlockEnd?: CssDeclarationValue<'insetBlockEnd', T>;
  /**
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  insetBlockStart?: CssDeclarationValue<'insetBlockStart', T>;
  /**
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   *
   * @default:'inset-inline-start: auto；inset-inline-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  insetInline?: CssDeclarationValue<'insetInline', T>;
  /**
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  insetInlineEnd?: CssDeclarationValue<'insetInlineEnd', T>;
  /**
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  insetInlineStart?: CssDeclarationValue<'insetInlineStart', T>;
  /**
   * 分配布局主轴或行内轴的剩余空间，控制内容整体对齐。
   *
   * Flex 中沿主轴分配空间，Grid 中沿行内轴对齐网格整体。没有剩余空间时，空间分配效果可能不明显。
   *
   * 常用值：`center`、`space-between`、`space-around`、`space-evenly`。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  justifyContent?: CssDeclarationValue<'justifyContent', T>;
  /**
   * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。
   *
   * @default:'legacy'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  justifyItems?: CssDeclarationValue<'justifyItems', T>;
  /**
   * 单独设置项目在其布局区域内的行内轴对齐方式。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  justifySelf?: CssDeclarationValue<'justifySelf', T>;
  /**
   * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  justifyTracks?: CssDeclarationValue<'justifyTracks', T>;
  /**
   * 设置定位元素相对于其定位参照的左侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  left?: CssDeclarationValue<'left', T>;
  /**
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * @default:'0'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
   */
  order?: CssDeclarationValue<'order', T>;
  /**
   * 同时设置 align-content 与 justify-content。
   *
   * @default:'align-content: normal；justify-content: normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  placeContent?: CssDeclarationValue<'placeContent', T>;
  /**
   * 同时设置 align-items 与 justify-items。
   *
   * @default:'align-items: normal；justify-items: legacy'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  placeItems?: CssDeclarationValue<'placeItems', T>;
  /**
   * 同时设置 align-self 与 justify-self。
   *
   * @default:'align-self: auto；justify-self: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  placeSelf?: CssDeclarationValue<'placeSelf', T>;
  /**
   * 设置元素的定位方式，并决定偏移属性如何参与布局。
   *
   * 偏移通常通过 top/right/bottom/left 或逻辑 inset 属性设置。fixed 和 absolute 的包含块也可能由 transform 等属性建立。
   *
   * 适用场景：建立定位参照、覆盖层、固定区域或滚动吸附内容。
   *
   * 常用值：`static`、`relative`、`absolute`、`fixed`、`sticky`。
   *
   * @default:'static'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  position?: CssDeclarationValue<'position', T>;
  /**
   * 选择绝对定位元素使用的默认锚点。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  positionAnchor?: CssDeclarationValue<'positionAnchor', T>;
  /**
   * 选择相对于锚点的定位区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  positionArea?: CssDeclarationValue<'positionArea', T>;
  /**
   * 同时设置锚点定位的候选回退方式及尝试顺序。
   *
   * @default:'position-try-fallbacks: none；position-try-order: normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  positionTry?: CssDeclarationValue<'positionTry', T>;
  /**
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  positionTryFallbacks?: CssDeclarationValue<'positionTryFallbacks', T>;
  /**
   * 设置锚点定位候选方案的尝试顺序。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  positionTryOrder?: CssDeclarationValue<'positionTryOrder', T>;
  /**
   * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。
   *
   * @default:'anchors-visible'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  positionVisibility?: CssDeclarationValue<'positionVisibility', T>;
  /**
   * 设置定位元素相对于其定位参照的右侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  right?: CssDeclarationValue<'right', T>;
  /**
   * 设置定位元素相对于其定位参照的上侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  top?: CssDeclarationValue<'top', T>;
  /**
   * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。
   *
   * @default:'baseline'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  verticalAlign?: CssDeclarationValue<'verticalAlign', T>;
  /**
   * 设置元素在所属层叠上下文中的层叠级别。
   *
   * 数值只在所属层叠上下文内比较；更大的数值不保证盖过其他层叠上下文。Flex/Grid 项目也可以使用 z-index。
   *
   * 适用场景：控制同一层叠上下文中的浮层顺序，排查遮挡时先确认祖先层叠上下文。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
   */
  zIndex?: CssDeclarationValue<'zIndex', T>;
  /**
   * 设置盒子的首选宽高比，参与自动尺寸计算。
   *
   * 通常需要至少一个轴为自动尺寸才参与尺寸计算；两个轴都被明确尺寸约束时，不会强行保持比例。
   *
   * 适用场景：图片占位、视频和卡片封面区域。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
   */
  aspectRatio?: CssDeclarationValue<'aspectRatio', T>;
  /**
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * 水平书写时通常对应 height，竖直书写时通常对应 width。
   *
   * 适用场景：使用逻辑轴表达内容块尺寸。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  blockSize?: CssDeclarationValue<'blockSize', T>;
  /**
   * 决定 width、height 等尺寸是否包含内边距和边框。
   *
   * 适用场景：确定组件声明宽高时是否把 padding 和 border 算在尺寸内。
   *
   * 常用值：`content-box`、`border-box`。
   *
   * @default:'content-box'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
   */
  boxSizing?: CssDeclarationValue<'boxSizing', T>;
  /**
   * 设置元素的物理高度，盒子范围受 box-sizing 影响。
   *
   * 百分比高度能否解析取决于包含块的尺寸确定方式；设置 100% 不自动等于视口高度。
   *
   * 适用场景：控制物理高度；滚动面板通常结合 max-height 和 overflow。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  height?: CssDeclarationValue<'height', T>;
  /**
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * 水平书写时通常对应 width，竖直书写时通常对应 height。实际尺寸还受 min-inline-size/max-inline-size 和 box-sizing 约束。
   *
   * 适用场景：希望布局尺寸跟随书写模式变化的组件。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  inlineSize?: CssDeclarationValue<'inlineSize', T>;
  /**
   * 限制元素逻辑块轴的最大尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  maxBlockSize?: CssDeclarationValue<'maxBlockSize', T>;
  /**
   * 限制元素的最大物理高度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  maxHeight?: CssDeclarationValue<'maxHeight', T>;
  /**
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  maxInlineSize?: CssDeclarationValue<'maxInlineSize', T>;
  /**
   * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  maxLines?: CssDeclarationValue<'maxLines', T>;
  /**
   * 限制元素的最大物理宽度。
   *
   * 限制最终宽度，不会单独要求元素达到该宽度。最小尺寸约束可能优先于较小的最大尺寸。
   *
   * 适用场景：限制正文行长、弹窗宽度或响应式内容区。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  maxWidth?: CssDeclarationValue<'maxWidth', T>;
  /**
   * 设置元素逻辑块轴的最小尺寸。
   *
   * @default:'0'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  minBlockSize?: CssDeclarationValue<'minBlockSize', T>;
  /**
   * 设置元素的最小物理高度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  minHeight?: CssDeclarationValue<'minHeight', T>;
  /**
   * 设置元素逻辑行内轴的最小尺寸。
   *
   * @default:'0'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  minInlineSize?: CssDeclarationValue<'minInlineSize', T>;
  /**
   * 设置元素的最小物理宽度。
   *
   * Flex/Grid 项目的 auto 最小尺寸可能由内容决定。需要允许其收缩时，可以按布局目的设置 min-width:0。
   *
   * 适用场景：给控件设置最小可用宽度，或用 0 允许 Flex/Grid 子项突破自动内容最小宽度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  minWidth?: CssDeclarationValue<'minWidth', T>;
  /**
   * 设置元素的物理宽度，盒子范围受 box-sizing 影响。
   *
   * 百分比依据包含块解析；auto、内部尺寸和最小/最大约束共同决定最终使用尺寸。
   *
   * 适用场景：控制物理宽度；支持书写模式的布局可优先考虑 inline-size。
   *
   * 常用值：`auto`、`min-content`、`max-content`、`fit-content`。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  width?: CssDeclarationValue<'width', T>;
  /**
   * 设置布局中相邻列之间的间距。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  columnGap?: CssDeclarationValue<'columnGap', T>;
  /**
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。
   *
   * 两个值依次为 row-gap 和 column-gap；在 Flex 中对应项目还是行间距取决于 flex-direction。它不增加容器外缘的间距。
   *
   * 适用场景：给 Flex/Grid 项目设置统一间隔，避免逐个项目添加 margin。
   *
   * @default:'row-gap: normal；column-gap: normal'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
   */
  gap?: CssDeclarationValue<'gap', T>;
  /**
   * 设置盒子四周的外边距，可使用负值或自动外边距。
   *
   * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。块布局中的垂直外边距可能折叠。
   *
   * 适用场景：控制盒子外侧与相邻内容的距离；布局项统一间隔可考虑容器 gap。
   *
   * @default:'margin-bottom: 0；margin-left: 0；margin-right: 0；margin-top: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
   */
  margin?: CssDeclarationValue<'margin', T>;
  /**
   * 设置逻辑块轴起始侧和结束侧的外边距。
   *
   * @default:'margin-block-start: 0；margin-block-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  marginBlock?: CssDeclarationValue<'marginBlock', T>;
  /**
   * 设置逻辑块轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  marginBlockEnd?: CssDeclarationValue<'marginBlockEnd', T>;
  /**
   * 设置逻辑块轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  marginBlockStart?: CssDeclarationValue<'marginBlockStart', T>;
  /**
   * 设置下外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  marginBottom?: CssDeclarationValue<'marginBottom', T>;
  /**
   * 设置逻辑行内轴起始侧和结束侧的外边距。
   *
   * @default:'margin-inline-start: 0；margin-inline-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  marginInline?: CssDeclarationValue<'marginInline', T>;
  /**
   * 设置逻辑行内轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  marginInlineEnd?: CssDeclarationValue<'marginInlineEnd', T>;
  /**
   * 设置逻辑行内轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  marginInlineStart?: CssDeclarationValue<'marginInlineStart', T>;
  /**
   * 设置左外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  marginLeft?: CssDeclarationValue<'marginLeft', T>;
  /**
   * 设置右外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  marginRight?: CssDeclarationValue<'marginRight', T>;
  /**
   * 设置上外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  marginTop?: CssDeclarationValue<'marginTop', T>;
  /**
   * 控制容器边缘处子元素外边距的裁减。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  marginTrim?: CssDeclarationValue<'marginTrim', T>;
  /**
   * 设置内容与边框之间的四边内边距，不接受负值。
   *
   * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。不能使用负值或 auto。
   *
   * 适用场景：控制文字或子元素与组件边框之间的留白。
   *
   * @default:'padding-bottom: 0；padding-left: 0；padding-right: 0；padding-top: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
   */
  padding?: CssDeclarationValue<'padding', T>;
  /**
   * 设置逻辑块轴起始侧和结束侧的内边距。
   *
   * @default:'padding-block-start: 0；padding-block-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  paddingBlock?: CssDeclarationValue<'paddingBlock', T>;
  /**
   * 设置逻辑块轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  paddingBlockEnd?: CssDeclarationValue<'paddingBlockEnd', T>;
  /**
   * 设置逻辑块轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  paddingBlockStart?: CssDeclarationValue<'paddingBlockStart', T>;
  /**
   * 设置下内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  paddingBottom?: CssDeclarationValue<'paddingBottom', T>;
  /**
   * 设置逻辑行内轴起始侧和结束侧的内边距。
   *
   * @default:'padding-inline-start: 0；padding-inline-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  paddingInline?: CssDeclarationValue<'paddingInline', T>;
  /**
   * 设置逻辑行内轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  paddingInlineEnd?: CssDeclarationValue<'paddingInlineEnd', T>;
  /**
   * 设置逻辑行内轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  paddingInlineStart?: CssDeclarationValue<'paddingInlineStart', T>;
  /**
   * 设置左内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  paddingLeft?: CssDeclarationValue<'paddingLeft', T>;
  /**
   * 设置右内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  paddingRight?: CssDeclarationValue<'paddingRight', T>;
  /**
   * 设置上内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  paddingTop?: CssDeclarationValue<'paddingTop', T>;
  /**
   * 设置布局中相邻行之间的间距。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  rowGap?: CssDeclarationValue<'rowGap', T>;
  /**
   * 设置文本基本方向，参与双向文本及部分布局计算。
   *
   * @default:'ltr'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  direction?: CssDeclarationValue<'direction', T>;
  /**
   * 集中设置字体样式、粗细、大小、行高和字体族等信息。
   *
   * 简写会把未显式指定的字体子属性重置为各自初始值。只改字号或字重时可使用 fontSize、fontWeight；按钮和输入控件跟随正文时可使用 inherit。
   *
   * 适用场景：统一字体配置，或让控件继承父级字体。
   *
   * 常用值：`inherit`、`italic 600 16px/1.5 system-ui`。
   *
   * @default:'font-style: normal；font-variant: normal；font-weight: normal；font-stretch: normal；font-size: medium；line-height: normal；font-family: 由浏览器决定'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  font?: CssDeclarationValue<'font', T>;
  /**
   * 设置按优先级排列的字体族及通用字体回退。
   *
   * @default:'由浏览器决定'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  fontFamily?: CssDeclarationValue<'fontFamily', T>;
  /**
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  fontFeatureSettings?: CssDeclarationValue<'fontFeatureSettings', T>;
  /**
   * 设置是否应用字体提供的字偶间距调整。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  fontKerning?: CssDeclarationValue<'fontKerning', T>;
  /**
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  fontLanguageOverride?: CssDeclarationValue<'fontLanguageOverride', T>;
  /**
   * 控制支持光学尺寸轴的字体是否按字号优化字形。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  fontOpticalSizing?: CssDeclarationValue<'fontOpticalSizing', T>;
  /**
   * 选择或覆盖彩色字体使用的调色板。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  fontPalette?: CssDeclarationValue<'fontPalette', T>;
  /**
   * 设置字体大小，也影响 em 等相对单位的计算。
   *
   * 改变字形大小，并影响 em 等相对长度；行盒高度还由 line-height 决定。
   *
   * 适用场景：建立文字层级，根字号相对尺寸可用 rem 表达。
   *
   * @default:'medium'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  fontSize?: CssDeclarationValue<'fontSize', T>;
  /**
   * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  fontSizeAdjust?: CssDeclarationValue<'fontSizeAdjust', T>;
  /**
   * 控制字体平滑的非标准属性；使用前核对目标浏览器。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  fontSmooth?: CssDeclarationValue<'fontSmooth', T>;
  /**
   * 选择正常、斜体或倾斜字体样式。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  fontStyle?: CssDeclarationValue<'fontStyle', T>;
  /**
   * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。
   *
   * @default:'weight style small-caps position '
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  fontSynthesis?: CssDeclarationValue<'fontSynthesis', T>;
  /**
   * 控制浏览器是否可以合成上标和下标字形。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  fontSynthesisPosition?: CssDeclarationValue<'fontSynthesisPosition', T>;
  /**
   * 控制浏览器是否可以合成小型大写字形。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  fontSynthesisSmallCaps?: CssDeclarationValue<'fontSynthesisSmallCaps', T>;
  /**
   * 控制浏览器是否可以合成倾斜字体。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  fontSynthesisStyle?: CssDeclarationValue<'fontSynthesisStyle', T>;
  /**
   * 控制浏览器是否可以合成加粗字体。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  fontSynthesisWeight?: CssDeclarationValue<'fontSynthesisWeight', T>;
  /**
   * 集中设置字体的连字、大小写、数字及其他变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  fontVariant?: CssDeclarationValue<'fontVariant', T>;
  /**
   * 选择字体提供的替代字形。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  fontVariantAlternates?: CssDeclarationValue<'fontVariantAlternates', T>;
  /**
   * 设置小型大写等大小写字形变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  fontVariantCaps?: CssDeclarationValue<'fontVariantCaps', T>;
  /**
   * 设置东亚文字字形及宽度变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  fontVariantEastAsian?: CssDeclarationValue<'fontVariantEastAsian', T>;
  /**
   * 设置字符优先采用文本字形还是 emoji 字形。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  fontVariantEmoji?: CssDeclarationValue<'fontVariantEmoji', T>;
  /**
   * 设置字体连字的启用方式。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  fontVariantLigatures?: CssDeclarationValue<'fontVariantLigatures', T>;
  /**
   * 设置数字的等宽、比例、分数及其他排版变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  fontVariantNumeric?: CssDeclarationValue<'fontVariantNumeric', T>;
  /**
   * 选择字体提供的上标或下标字形。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  fontVariantPosition?: CssDeclarationValue<'fontVariantPosition', T>;
  /**
   * 直接设置可变字体各个轴的数值。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  fontVariationSettings?: CssDeclarationValue<'fontVariationSettings', T>;
  /**
   * 设置字体粗细，实际可用字重取决于字体。
   *
   * 最终字形取决于已加载字体和可用字重；变量字体可支持连续的字重范围。
   *
   * 适用场景：正文、强调文字和标题的视觉层级。
   *
   * 常用值：`normal`、`bold`、`bolder`、`lighter`。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
   */
  fontWeight?: CssDeclarationValue<'fontWeight', T>;
  /**
   * 选择字体的宽窄字面，不是通过变换拉伸元素。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  fontWidth?: CssDeclarationValue<'fontWidth', T>;
  /**
   * 控制标点是否可以悬挂在行盒边缘之外。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  hangingPunctuation?: CssDeclarationValue<'hangingPunctuation', T>;
  /**
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  hyphens?: CssDeclarationValue<'hyphens', T>;
  /**
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  initialLetter?: CssDeclarationValue<'initialLetter', T>;
  /**
   * 设置首字下沉时字形与正文使用的对齐基线。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  initialLetterAlign?: CssDeclarationValue<'initialLetterAlign', T>;
  /**
   * 设置字符之间额外增加或减少的间距。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  letterSpacing?: CssDeclarationValue<'letterSpacing', T>;
  /**
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  lineBreak?: CssDeclarationValue<'lineBreak', T>;
  /**
   * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。
   *
   * @default:'none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  lineClamp?: CssDeclarationValue<'lineClamp', T>;
  /**
   * 设置行盒高度；无单位数值按元素自身字号计算。
   *
   * 无单位数字作为倍数继承；长度值按长度继承。单独设置行高不会自动实现多行文本垂直居中。
   *
   * 适用场景：控制正文行间节奏；可继承的字号倍数通常比固定长度更适合嵌套文字。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
   */
  lineHeight?: CssDeclarationValue<'lineHeight', T>;
  /**
   * 设置行盒高度向上取整使用的步长。
   *
   * @default:'0'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  lineHeightStep?: CssDeclarationValue<'lineHeightStep', T>;
  /**
   * 设置生成引号所用的开闭字符对。
   *
   * @default:'由浏览器决定'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  quotes?: CssDeclarationValue<'quotes', T>;
  /**
   * 设置注音文字与基底文字之间剩余空间的分配方式。
   *
   * @default:'space-around'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  rubyAlign?: CssDeclarationValue<'rubyAlign', T>;
  /**
   * 设置相邻注音容器的合并方式；使用前核对目标浏览器。
   *
   * @default:'separate'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  rubyMerge?: CssDeclarationValue<'rubyMerge', T>;
  /**
   * 控制注音文字是否可以悬伸到相邻文本上方。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  rubyOverhang?: CssDeclarationValue<'rubyOverhang', T>;
  /**
   * 设置注音文字相对于基底文字的位置。
   *
   * @default:'alternate'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  rubyPosition?: CssDeclarationValue<'rubyPosition', T>;
  /**
   * 设置保留制表符时每个制表位的宽度。
   *
   * @default:'8'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  tabSize?: CssDeclarationValue<'tabSize', T>;
  /**
   * 设置块容器中行内内容的水平或逻辑方向对齐。
   *
   * 控制块容器中的行内内容，不是块盒自身的位置，也不是 Flex/Grid 项目的对齐。
   *
   * 适用场景：正文、标题和表格单元格中的文本对齐。
   *
   * 常用值：`start`、`end`、`center`、`justify`。
   *
   * @default:'随书写方向采用起始侧对齐'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  textAlign?: CssDeclarationValue<'textAlign', T>;
  /**
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  textAlignLast?: CssDeclarationValue<'textAlignLast', T>;
  /**
   * 设置 SVG 文本片段相对于定位点的锚定方式。
   *
   * @default:'start'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  textAnchor?: CssDeclarationValue<'textAnchor', T>;
  /**
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  textAutospace?: CssDeclarationValue<'textAutospace', T>;
  /**
   * 同时设置文本盒边缘参照及首尾空白裁减。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  textBox?: CssDeclarationValue<'textBox', T>;
  /**
   * 选择文本盒裁减或对齐使用的字体边缘度量。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  textBoxEdge?: CssDeclarationValue<'textBoxEdge', T>;
  /**
   * 裁减文本块开头或结尾的额外行高空白。
   *
   * @default:'none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  textBoxTrim?: CssDeclarationValue<'textBoxTrim', T>;
  /**
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  textCombineUpright?: CssDeclarationValue<'textCombineUpright', T>;
  /**
   * 集中设置文本装饰线的位置、线型、颜色及粗细。
   *
   * @default:'text-decoration-color: currentcolor；text-decoration-style: solid；text-decoration-line: none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  textDecoration?: CssDeclarationValue<'textDecoration', T>;
  /**
   * 设置文本装饰线颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  textDecorationColor?: CssDeclarationValue<'textDecorationColor', T>;
  /**
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  textDecorationLine?: CssDeclarationValue<'textDecorationLine', T>;
  /**
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * @default:'objects'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  textDecorationSkip?: CssDeclarationValue<'textDecorationSkip', T>;
  /**
   * 设置装饰线是否避让字形的笔画。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  textDecorationSkipInk?: CssDeclarationValue<'textDecorationSkipInk', T>;
  /**
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * @default:'solid'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  textDecorationStyle?: CssDeclarationValue<'textDecorationStyle', T>;
  /**
   * 设置文本装饰线粗细。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  textDecorationThickness?: CssDeclarationValue<'textDecorationThickness', T>;
  /**
   * 同时设置文字着重号的样式和颜色。
   *
   * @default:'text-emphasis-style: none；text-emphasis-color: currentcolor'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  textEmphasis?: CssDeclarationValue<'textEmphasis', T>;
  /**
   * 设置文字着重号颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  textEmphasisColor?: CssDeclarationValue<'textEmphasisColor', T>;
  /**
   * 设置文字着重号位于文字的哪一侧。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  textEmphasisPosition?: CssDeclarationValue<'textEmphasisPosition', T>;
  /**
   * 设置文字着重号的形状和填充方式。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  textEmphasisStyle?: CssDeclarationValue<'textEmphasisStyle', T>;
  /**
   * 设置文本行的缩进距离。
   *
   * @default:'0'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  textIndent?: CssDeclarationValue<'textIndent', T>;
  /**
   * 设置两端对齐时增加间距的算法。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  textJustify?: CssDeclarationValue<'textJustify', T>;
  /**
   * 设置竖排模式下字符的方向。
   *
   * @default:'mixed'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  textOrientation?: CssDeclarationValue<'textOrientation', T>;
  /**
   * 设置被裁剪的行内溢出文本如何提示，例如显示省略号。
   *
   * 本属性不自行制造溢出。单行省略通常还需要受限宽度、overflow:hidden 和 white-space:nowrap。
   *
   * 适用场景：受限宽度中的单行标题或标签。多行截断需要单独的布局和截行方案。
   *
   * 常用值：`ellipsis`、`clip`。
   *
   * @default:'clip'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
   */
  textOverflow?: CssDeclarationValue<'textOverflow', T>;
  /**
   * 向渲染器提供文本速度、可读性或几何精度的偏好。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  textRendering?: CssDeclarationValue<'textRendering', T>;
  /**
   * 设置文字及其装饰的阴影，可叠加多层。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  textShadow?: CssDeclarationValue<'textShadow', T>;
  /**
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * @default:'支持文本放大的移动浏览器为 auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  textSizeAdjust?: CssDeclarationValue<'textSizeAdjust', T>;
  /**
   * 设置东亚文字标点等字符周围空白的裁减。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  textSpacingTrim?: CssDeclarationValue<'textSpacingTrim', T>;
  /**
   * 设置文字显示时的大小写、全角或其他字形转换。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  textTransform?: CssDeclarationValue<'textTransform', T>;
  /**
   * 设置下划线相对于默认位置的偏移。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  textUnderlineOffset?: CssDeclarationValue<'textUnderlineOffset', T>;
  /**
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  textUnderlinePosition?: CssDeclarationValue<'textUnderlinePosition', T>;
  /**
   * 同时设置文本是否换行及换行策略。
   *
   * @default:'wrap'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  textWrap?: CssDeclarationValue<'textWrap', T>;
  /**
   * 设置文本是否允许软换行。
   *
   * @default:'wrap'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  textWrapMode?: CssDeclarationValue<'textWrapMode', T>;
  /**
   * 设置文本换行的排版策略，例如平衡各行长度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  textWrapStyle?: CssDeclarationValue<'textWrapStyle', T>;
  /**
   * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  unicodeBidi?: CssDeclarationValue<'unicodeBidi', T>;
  /**
   * 设置空白折叠和换行处理方式。
   *
   * 同时影响空白折叠和软换行。它不负责给溢出内容添加省略号。
   *
   * 适用场景：单行标签、保留换行的用户文本和代码片段。
   *
   * 常用值：`normal`、`nowrap`、`pre`、`pre-wrap`、`pre-line`、`break-spaces`。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  whiteSpace?: CssDeclarationValue<'whiteSpace', T>;
  /**
   * 设置空格、制表符和换行符如何折叠或保留。
   *
   * @default:'collapse'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  whiteSpaceCollapse?: CssDeclarationValue<'whiteSpaceCollapse', T>;
  /**
   * 设置单词内部或文字之间的断行规则。
   *
   * 按字符和语言控制断行。仅需避免超长单词溢出时，通常先考虑 overflow-wrap。
   *
   * 常用值：`normal`、`break-all`、`keep-all`。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  wordBreak?: CssDeclarationValue<'wordBreak', T>;
  /**
   * 设置单词或词间分隔符的额外间距。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  wordSpacing?: CssDeclarationValue<'wordSpacing', T>;
  /**
   * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  wordWrap?: CssDeclarationValue<'wordWrap', T>;
  /**
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * @default:'horizontal-tb'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  writingMode?: CssDeclarationValue<'writingMode', T>;
  /**
   * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  accentColor?: CssDeclarationValue<'accentColor', T>;
  /**
   * 集中设置背景颜色、图像、位置、尺寸、重复及绘制区域。
   *
   * @default:'background-image: none；background-position: 0% 0%；background-size: auto auto；background-repeat: repeat；background-origin: padding-box；background-clip: border-box；background-attachment: scroll；background-color: transparent'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  background?: CssDeclarationValue<'background', T>;
  /**
   * 设置背景图像相对于视口、元素或局部滚动内容的固定方式。
   *
   * @default:'scroll'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  backgroundAttachment?: CssDeclarationValue<'backgroundAttachment', T>;
  /**
   * 设置背景图层彼此之间以及与背景色之间的混合模式。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  backgroundBlendMode?: CssDeclarationValue<'backgroundBlendMode', T>;
  /**
   * 设置背景允许绘制到的边界区域。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  backgroundClip?: CssDeclarationValue<'backgroundClip', T>;
  /**
   * 设置元素背景颜色，位于背景图像下方。
   *
   * @default:'transparent'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  backgroundColor?: CssDeclarationValue<'backgroundColor', T>;
  /**
   * 设置一个或多个背景图像或渐变图层。
   *
   * @default:'none'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  backgroundImage?: CssDeclarationValue<'backgroundImage', T>;
  /**
   * 设置背景图像定位所依据的盒子区域。
   *
   * @default:'padding-box'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  backgroundOrigin?: CssDeclarationValue<'backgroundOrigin', T>;
  /**
   * 设置背景图像在定位区域内的位置。
   *
   * @default:'0% 0%'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  backgroundPosition?: CssDeclarationValue<'backgroundPosition', T>;
  /**
   * 设置背景图像的水平位置。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  backgroundPositionX?: CssDeclarationValue<'backgroundPositionX', T>;
  /**
   * 设置背景图像的垂直位置。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  backgroundPositionY?: CssDeclarationValue<'backgroundPositionY', T>;
  /**
   * 设置背景图像在水平和垂直方向上的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  backgroundRepeat?: CssDeclarationValue<'backgroundRepeat', T>;
  /**
   * 设置背景图像尺寸，以及覆盖或完整容纳图像的缩放方式。
   *
   * 改变背景图像的尺寸，不改变元素尺寸；位置由 background-position 决定。
   *
   * 适用场景：背景封面或需要完整显示的背景装饰。
   *
   * 常用值：`auto`、`contain`、`cover`。
   *
   * @default:'auto auto'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
   */
  backgroundSize?: CssDeclarationValue<'backgroundSize', T>;
  /**
   * 设置可编辑内容中的文本插入光标颜色。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  caretColor?: CssDeclarationValue<'caretColor', T>;
  /**
   * 设置文字前景色，同时作为 currentColor 的来源。
   *
   * 改变文字和 currentColor 的来源，不会自动改变背景。颜色函数方法返回完整 color 声明。
   *
   * @default:'canvastext'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
   */
  color?: CssDeclarationValue<'color', T>;
  /**
   * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。
   *
   * @default:'economy'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  colorAdjust?: CssDeclarationValue<'colorAdjust', T>;
  /**
   * 设置 SVG 图形颜色插值所用的色彩空间。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  colorInterpolation?: CssDeclarationValue<'colorInterpolation', T>;
  /**
   * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。
   *
   * @default:'linearRGB'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  colorInterpolationFilters?: CssDeclarationValue<'colorInterpolationFilters', T>;
  /**
   * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  colorRendering?: CssDeclarationValue<'colorRendering', T>;
  /**
   * 声明元素支持的配色方案，影响原生控件、滚动条等浏览器绘制内容。
   *
   * 声明支持的方案不等于为应用生成主题颜色；文字、背景和业务 token 仍需自行定义。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  colorScheme?: CssDeclarationValue<'colorScheme', T>;
  /**
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * @default:'economy'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  printColorAdjust?: CssDeclarationValue<'printColorAdjust', T>;
  /**
   * 同时设置四边边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；border-color: 见其子属性'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  border?: CssDeclarationValue<'border', T>;
  /**
   * 设置逻辑块轴起始侧和结束侧的边框。
   *
   * @default:'border-block-width: medium；border-block-style: none；border-block-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  borderBlock?: CssDeclarationValue<'borderBlock', T>;
  /**
   * 设置逻辑块轴两侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  borderBlockColor?: CssDeclarationValue<'borderBlockColor', T>;
  /**
   * 设置逻辑块轴结束侧边框的宽度、线型和颜色。
   *
   * @default:'border-top-width: medium；border-top-style: none；border-top-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  borderBlockEnd?: CssDeclarationValue<'borderBlockEnd', T>;
  /**
   * 设置逻辑块轴结束侧的边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  borderBlockEndColor?: CssDeclarationValue<'borderBlockEndColor', T>;
  /**
   * 设置逻辑块轴结束侧的边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  borderBlockEndStyle?: CssDeclarationValue<'borderBlockEndStyle', T>;
  /**
   * 设置逻辑块轴结束侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  borderBlockEndWidth?: CssDeclarationValue<'borderBlockEndWidth', T>;
  /**
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  borderBlockStart?: CssDeclarationValue<'borderBlockStart', T>;
  /**
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  borderBlockStartColor?: CssDeclarationValue<'borderBlockStartColor', T>;
  /**
   * 设置逻辑块轴起始侧的边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  borderBlockStartStyle?: CssDeclarationValue<'borderBlockStartStyle', T>;
  /**
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  borderBlockStartWidth?: CssDeclarationValue<'borderBlockStartWidth', T>;
  /**
   * 设置逻辑块轴两侧的边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  borderBlockStyle?: CssDeclarationValue<'borderBlockStyle', T>;
  /**
   * 设置逻辑块轴两侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  borderBlockWidth?: CssDeclarationValue<'borderBlockWidth', T>;
  /**
   * 设置下边框的宽度、线型和颜色。
   *
   * @default:'border-bottom-width: medium；border-bottom-style: none；border-bottom-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  borderBottom?: CssDeclarationValue<'borderBottom', T>;
  /**
   * 设置下边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  borderBottomColor?: CssDeclarationValue<'borderBottomColor', T>;
  /**
   * 设置左下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  borderBottomLeftRadius?: CssDeclarationValue<'borderBottomLeftRadius', T>;
  /**
   * 设置右下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  borderBottomRightRadius?: CssDeclarationValue<'borderBottomRightRadius', T>;
  /**
   * 设置下边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  borderBottomStyle?: CssDeclarationValue<'borderBottomStyle', T>;
  /**
   * 设置下边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  borderBottomWidth?: CssDeclarationValue<'borderBottomWidth', T>;
  /**
   * 设置表格相邻单元格边框合并还是分离。
   *
   * @default:'separate'
   * @extend:'是'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  borderCollapse?: CssDeclarationValue<'borderCollapse', T>;
  /**
   * 设置四边边框颜色，支持按上、右、下、左顺序简写。
   *
   * @default:'border-top-color: currentcolor；border-right-color: currentcolor；border-bottom-color: currentcolor；border-left-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  borderColor?: CssDeclarationValue<'borderColor', T>;
  /**
   * 设置逻辑块轴结束侧与行内轴结束侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  borderEndEndRadius?: CssDeclarationValue<'borderEndEndRadius', T>;
  /**
   * 设置逻辑块轴结束侧与行内轴起始侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  borderEndStartRadius?: CssDeclarationValue<'borderEndStartRadius', T>;
  /**
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * @default:'border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  borderImage?: CssDeclarationValue<'borderImage', T>;
  /**
   * 设置边框图像超出边框盒的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  borderImageOutset?: CssDeclarationValue<'borderImageOutset', T>;
  /**
   * 设置边框图像切片沿边框的重复或拉伸方式。
   *
   * @default:'stretch'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  borderImageRepeat?: CssDeclarationValue<'borderImageRepeat', T>;
  /**
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * @default:'100%'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  borderImageSlice?: CssDeclarationValue<'borderImageSlice', T>;
  /**
   * 指定边框使用的图像或渐变。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  borderImageSource?: CssDeclarationValue<'borderImageSource', T>;
  /**
   * 设置边框图像各边的绘制宽度。
   *
   * @default:'1'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  borderImageWidth?: CssDeclarationValue<'borderImageWidth', T>;
  /**
   * 设置逻辑行内轴起始侧和结束侧的边框。
   *
   * @default:'border-inline-width: medium；border-inline-style: none；border-inline-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  borderInline?: CssDeclarationValue<'borderInline', T>;
  /**
   * 设置逻辑行内轴两侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  borderInlineColor?: CssDeclarationValue<'borderInlineColor', T>;
  /**
   * 设置逻辑行内轴结束侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  borderInlineEnd?: CssDeclarationValue<'borderInlineEnd', T>;
  /**
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  borderInlineEndColor?: CssDeclarationValue<'borderInlineEndColor', T>;
  /**
   * 设置逻辑行内轴结束侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  borderInlineEndStyle?: CssDeclarationValue<'borderInlineEndStyle', T>;
  /**
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  borderInlineEndWidth?: CssDeclarationValue<'borderInlineEndWidth', T>;
  /**
   * 设置逻辑行内轴起始侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  borderInlineStart?: CssDeclarationValue<'borderInlineStart', T>;
  /**
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  borderInlineStartColor?: CssDeclarationValue<'borderInlineStartColor', T>;
  /**
   * 设置逻辑行内轴起始侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  borderInlineStartStyle?: CssDeclarationValue<'borderInlineStartStyle', T>;
  /**
   * 设置逻辑行内轴起始侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  borderInlineStartWidth?: CssDeclarationValue<'borderInlineStartWidth', T>;
  /**
   * 设置逻辑行内轴两侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  borderInlineStyle?: CssDeclarationValue<'borderInlineStyle', T>;
  /**
   * 设置逻辑行内轴两侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  borderInlineWidth?: CssDeclarationValue<'borderInlineWidth', T>;
  /**
   * 设置左边框的宽度、线型和颜色。
   *
   * @default:'border-left-width: medium；border-left-style: none；border-left-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  borderLeft?: CssDeclarationValue<'borderLeft', T>;
  /**
   * 设置左边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  borderLeftColor?: CssDeclarationValue<'borderLeftColor', T>;
  /**
   * 设置左边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  borderLeftStyle?: CssDeclarationValue<'borderLeftStyle', T>;
  /**
   * 设置左边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  borderLeftWidth?: CssDeclarationValue<'borderLeftWidth', T>;
  /**
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   *
   * @default:'border-top-left-radius: 0；border-top-right-radius: 0；border-bottom-right-radius: 0；border-bottom-left-radius: 0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
   */
  borderRadius?: CssDeclarationValue<'borderRadius', T>;
  /**
   * 设置右边框的宽度、线型和颜色。
   *
   * @default:'border-right-width: medium；border-right-style: none；border-right-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  borderRight?: CssDeclarationValue<'borderRight', T>;
  /**
   * 设置右边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  borderRightColor?: CssDeclarationValue<'borderRightColor', T>;
  /**
   * 设置右边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  borderRightStyle?: CssDeclarationValue<'borderRightStyle', T>;
  /**
   * 设置右边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  borderRightWidth?: CssDeclarationValue<'borderRightWidth', T>;
  /**
   * 设置分离边框模型下表格单元格之间的水平和垂直间距。
   *
   * @default:'0'
   * @extend:'是'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  borderSpacing?: CssDeclarationValue<'borderSpacing', T>;
  /**
   * 设置逻辑块轴起始侧与行内轴结束侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  borderStartEndRadius?: CssDeclarationValue<'borderStartEndRadius', T>;
  /**
   * 设置逻辑块轴起始侧与行内轴起始侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  borderStartStartRadius?: CssDeclarationValue<'borderStartStartRadius', T>;
  /**
   * 设置四边边框线型。
   *
   * @default:'border-top-style: none；border-right-style: none；border-bottom-style: none；border-left-style: none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  borderStyle?: CssDeclarationValue<'borderStyle', T>;
  /**
   * 设置上边框的宽度、线型和颜色。
   *
   * @default:'border-top-width: medium；border-top-style: none；border-top-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  borderTop?: CssDeclarationValue<'borderTop', T>;
  /**
   * 设置上边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  borderTopColor?: CssDeclarationValue<'borderTopColor', T>;
  /**
   * 设置左上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  borderTopLeftRadius?: CssDeclarationValue<'borderTopLeftRadius', T>;
  /**
   * 设置右上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  borderTopRightRadius?: CssDeclarationValue<'borderTopRightRadius', T>;
  /**
   * 设置上边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  borderTopStyle?: CssDeclarationValue<'borderTopStyle', T>;
  /**
   * 设置上边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  borderTopWidth?: CssDeclarationValue<'borderTopWidth', T>;
  /**
   * 设置四边边框宽度；可见边框通常还需要非 none 的线型。
   *
   * @default:'border-top-width: medium；border-right-width: medium；border-bottom-width: medium；border-left-width: medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  borderWidth?: CssDeclarationValue<'borderWidth', T>;
  /**
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * @default:'column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  columnRule?: CssDeclarationValue<'columnRule', T>;
  /**
   * 设置多栏分隔线的颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  columnRuleColor?: CssDeclarationValue<'columnRuleColor', T>;
  /**
   * 设置多栏分隔线的线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  columnRuleStyle?: CssDeclarationValue<'columnRuleStyle', T>;
  /**
   * 设置多栏分隔线的宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  columnRuleWidth?: CssDeclarationValue<'columnRuleWidth', T>;
  /**
   * 设置盒子外围轮廓线的宽度、线型和颜色，不占布局空间。
   *
   * 不占布局空间，可用 outline-offset 调整距离；键盘焦点指示不应被无替代地移除。
   *
   * 适用场景：控件焦点指示和不影响布局的轮廓。
   *
   * @default:'outline-width: medium；outline-style: none；outline-color: auto'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
   */
  outline?: CssDeclarationValue<'outline', T>;
  /**
   * 设置轮廓线颜色。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  outlineColor?: CssDeclarationValue<'outlineColor', T>;
  /**
   * 设置轮廓线与边框边缘之间的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  outlineOffset?: CssDeclarationValue<'outlineOffset', T>;
  /**
   * 设置轮廓线线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  outlineStyle?: CssDeclarationValue<'outlineStyle', T>;
  /**
   * 设置轮廓线宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  outlineWidth?: CssDeclarationValue<'outlineWidth', T>;
  /**
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  backdropFilter?: CssDeclarationValue<'backdropFilter', T>;
  /**
   * 设置盒子的外部或内部阴影，可叠加多层。
   *
   * 阴影不占布局空间，可用逗号叠加；与 border/outline 的用途和绘制位置不同。
   *
   * 适用场景：浮层层次、卡片边缘或内凹效果。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
   */
  boxShadow?: CssDeclarationValue<'boxShadow', T>;
  /**
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  clipPath?: CssDeclarationValue<'clipPath', T>;
  /**
   * 设置 SVG 裁剪路径判断内部区域所用的填充规则。
   *
   * @default:'nonzero'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  clipRule?: CssDeclarationValue<'clipRule', T>;
  /**
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  filter?: CssDeclarationValue<'filter', T>;
  /**
   * 设置图像是否按元数据等信息调整方向。
   *
   * @default:'from-image'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  imageOrientation?: CssDeclarationValue<'imageOrientation', T>;
  /**
   * 向浏览器指定图像缩放时的插值与清晰度偏好。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  imageRendering?: CssDeclarationValue<'imageRendering', T>;
  /**
   * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。
   *
   * @default:'1dppx'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  imageResolution?: CssDeclarationValue<'imageResolution', T>;
  /**
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   *
   * @default:'mask-image: none；mask-mode: match-source；mask-repeat: repeat；mask-position: 0% 0%；mask-clip: border-box；mask-origin: border-box；mask-size: auto；mask-composite: add'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  mask?: CssDeclarationValue<'mask', T>;
  /**
   * 设置基于九宫格图像切片的边框遮罩。
   *
   * @default:'mask-border-mode: alpha；mask-border-outset: 0；mask-border-repeat: stretch；mask-border-slice: 0；mask-border-source: none；mask-border-width: auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  maskBorder?: CssDeclarationValue<'maskBorder', T>;
  /**
   * 设置边框遮罩使用 alpha 还是亮度信息。
   *
   * @default:'alpha'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  maskBorderMode?: CssDeclarationValue<'maskBorderMode', T>;
  /**
   * 设置边框遮罩超出边框盒的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  maskBorderOutset?: CssDeclarationValue<'maskBorderOutset', T>;
  /**
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * @default:'stretch'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  maskBorderRepeat?: CssDeclarationValue<'maskBorderRepeat', T>;
  /**
   * 设置边框遮罩图像的切片位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  maskBorderSlice?: CssDeclarationValue<'maskBorderSlice', T>;
  /**
   * 设置边框遮罩的源图像。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  maskBorderSource?: CssDeclarationValue<'maskBorderSource', T>;
  /**
   * 设置边框遮罩各边的宽度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  maskBorderWidth?: CssDeclarationValue<'maskBorderWidth', T>;
  /**
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  maskClip?: CssDeclarationValue<'maskClip', T>;
  /**
   * 设置多个遮罩图层之间的合成运算。
   *
   * @default:'add'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  maskComposite?: CssDeclarationValue<'maskComposite', T>;
  /**
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  maskImage?: CssDeclarationValue<'maskImage', T>;
  /**
   * 设置遮罩按 alpha、亮度或源类型解释。
   *
   * @default:'match-source'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  maskMode?: CssDeclarationValue<'maskMode', T>;
  /**
   * 设置遮罩图像定位所依据的盒子。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  maskOrigin?: CssDeclarationValue<'maskOrigin', T>;
  /**
   * 设置遮罩图像在定位区域中的位置。
   *
   * @default:'0% 0%'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  maskPosition?: CssDeclarationValue<'maskPosition', T>;
  /**
   * 设置遮罩图像的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  maskRepeat?: CssDeclarationValue<'maskRepeat', T>;
  /**
   * 设置遮罩图像的尺寸。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  maskSize?: CssDeclarationValue<'maskSize', T>;
  /**
   * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。
   *
   * @default:'luminance'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  maskType?: CssDeclarationValue<'maskType', T>;
  /**
   * 设置元素整体与其背后内容的颜色混合方式。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  mixBlendMode?: CssDeclarationValue<'mixBlendMode', T>;
  /**
   * 设置替换元素的内容如何适应其内容盒，例如图像的裁切和缩放。
   *
   * 控制 img、video 等替换内容在盒子内部的缩放与裁剪；不改变盒子本身的 width/height。
   *
   * 适用场景：封面裁剪、头像和完整图像预览。
   *
   * 常用值：`fill`、`contain`、`cover`、`none`、`scale-down`。
   *
   * @default:'fill'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  objectFit?: CssDeclarationValue<'objectFit', T>;
  /**
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * @default:'50% 50%'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  objectPosition?: CssDeclarationValue<'objectPosition', T>;
  /**
   * 设置替换元素内容的可视区域，控制用于呈现的图像范围。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  objectViewBox?: CssDeclarationValue<'objectViewBox', T>;
  /**
   * 设置元素及其子树合成后的整体不透明度。
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
   *
   * @default:'1'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
   */
  opacity?: CssDeclarationValue<'opacity', T>;
  /**
   * 设置从图像 alpha 信息提取环绕形状时的阈值。
   *
   * @default:'0.0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  shapeImageThreshold?: CssDeclarationValue<'shapeImageThreshold', T>;
  /**
   * 设置文字环绕形状之外的额外间距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  shapeMargin?: CssDeclarationValue<'shapeMargin', T>;
  /**
   * 设置浮动元素周围行内内容所环绕的形状。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  shapeOutside?: CssDeclarationValue<'shapeOutside', T>;
  /**
   * 向 SVG 渲染器提供图形绘制精度与速度的偏好。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  shapeRendering?: CssDeclarationValue<'shapeRendering', T>;
  /**
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * @default:'animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  animation?: CssDeclarationValue<'animation', T>;
  /**
   * 设置动画效果与底层属性值的替换、叠加或累积方式。
   *
   * @default:'replace'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  animationComposition?: CssDeclarationValue<'animationComposition', T>;
  /**
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  animationDelay?: CssDeclarationValue<'animationDelay', T>;
  /**
   * 设置动画按正向、反向或交替方向播放。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  animationDirection?: CssDeclarationValue<'animationDirection', T>;
  /**
   * 设置动画完成一次循环的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  animationDuration?: CssDeclarationValue<'animationDuration', T>;
  /**
   * 设置动画在有效播放区间之外是否应用关键帧样式。
   *
   * 控制动画有效播放区间之外的样式，不会把最终值写回普通 CSS 声明。
   *
   * 适用场景：控制延迟阶段和播放结束后的动画呈现。
   *
   * 常用值：`none`、`forwards`、`backwards`、`both`。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
   */
  animationFillMode?: CssDeclarationValue<'animationFillMode', T>;
  /**
   * 设置动画循环次数，或无限循环。
   *
   * @default:'1'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  animationIterationCount?: CssDeclarationValue<'animationIterationCount', T>;
  /**
   * 选择要播放的 @keyframes 动画名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  animationName?: CssDeclarationValue<'animationName', T>;
  /**
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * @default:'running'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  animationPlayState?: CssDeclarationValue<'animationPlayState', T>;
  /**
   * 设置动画附着到时间线的起止范围。
   *
   * @default:'animation-range-start: normal；animation-range-end: normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  animationRange?: CssDeclarationValue<'animationRange', T>;
  /**
   * 设置动画在时间线上的附着范围终点。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  animationRangeEnd?: CssDeclarationValue<'animationRangeEnd', T>;
  /**
   * 设置动画在时间线上的附着范围起点。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  animationRangeStart?: CssDeclarationValue<'animationRangeStart', T>;
  /**
   * 选择驱动动画的时间线，例如文档时间或滚动进度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  animationTimeline?: CssDeclarationValue<'animationTimeline', T>;
  /**
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  animationTimingFunction?: CssDeclarationValue<'animationTimingFunction', T>;
  /**
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  backfaceVisibility?: CssDeclarationValue<'backfaceVisibility', T>;
  /**
   * 集中设置运动路径、起始位置、距离、方向和锚点。
   *
   * @default:'offset-position: normal；offset-path: none；offset-distance: 0；offset-anchor: auto；offset-rotate: auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  offset?: CssDeclarationValue<'offset', T>;
  /**
   * 设置元素沿运动路径移动时与路径相接的内部锚点。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  offsetAnchor?: CssDeclarationValue<'offsetAnchor', T>;
  /**
   * 设置元素沿运动路径行进的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  offsetDistance?: CssDeclarationValue<'offsetDistance', T>;
  /**
   * 设置元素运动所沿用的路径。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  offsetPath?: CssDeclarationValue<'offsetPath', T>;
  /**
   * 设置运动路径的初始位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  offsetPosition?: CssDeclarationValue<'offsetPosition', T>;
  /**
   * 设置元素沿运动路径移动时的方向和附加旋转。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  offsetRotate?: CssDeclarationValue<'offsetRotate', T>;
  /**
   * 设置路径旋转的旧名称；新代码使用 offset-rotate。
   *
   * @default:'auto'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotation
   */
  offsetRotation?: CssDeclarationValue<'offsetRotation', T>;
  /**
   * 设置观察子元素三维变换时的透视距离。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  perspective?: CssDeclarationValue<'perspective', T>;
  /**
   * 设置三维透视的观察原点。
   *
   * @default:'50% 50%'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  perspectiveOrigin?: CssDeclarationValue<'perspectiveOrigin', T>;
  /**
   * 独立设置元素旋转，不必重写 transform 中的其他变换。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  rotate?: CssDeclarationValue<'rotate', T>;
  /**
   * 独立设置元素的缩放比例。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  scale?: CssDeclarationValue<'scale', T>;
  /**
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
   */
  transform?: CssDeclarationValue<'transform', T>;
  /**
   * 设置变换及其原点所依据的参照盒。
   *
   * @default:'view-box'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  transformBox?: CssDeclarationValue<'transformBox', T>;
  /**
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  transformOrigin?: CssDeclarationValue<'transformOrigin', T>;
  /**
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * @default:'flat'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  transformStyle?: CssDeclarationValue<'transformStyle', T>;
  /**
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   *
   * @default:'transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  transition?: CssDeclarationValue<'transition', T>;
  /**
   * 控制离散属性是否可以启动 CSS 过渡。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  transitionBehavior?: CssDeclarationValue<'transitionBehavior', T>;
  /**
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  transitionDelay?: CssDeclarationValue<'transitionDelay', T>;
  /**
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  transitionDuration?: CssDeclarationValue<'transitionDuration', T>;
  /**
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  transitionProperty?: CssDeclarationValue<'transitionProperty', T>;
  /**
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  transitionTimingFunction?: CssDeclarationValue<'transitionTimingFunction', T>;
  /**
   * 独立设置元素在二维或三维空间中的平移。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  translate?: CssDeclarationValue<'translate', T>;
  /**
   * 为视图过渡的快照伪元素分组，以便共用样式。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  viewTransitionClass?: CssDeclarationValue<'viewTransitionClass', T>;
  /**
   * 为视图过渡中的元素命名，以匹配前后状态的快照。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  viewTransitionName?: CssDeclarationValue<'viewTransitionName', T>;
  /**
   * 设置内容超出盒子时的裁剪和滚动行为。
   *
   * 一个值同时设置两轴；两个值依次设置 overflow-x、overflow-y。通常需要尺寸约束才会出现可滚动的溢出。
   *
   * 适用场景：滚动面板、内容裁剪和受限尺寸区域。
   *
   * 常用值：`visible`、`hidden`、`clip`、`auto`、`scroll`。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  overflow?: CssDeclarationValue<'overflow', T>;
  /**
   * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  overflowAnchor?: CssDeclarationValue<'overflowAnchor', T>;
  /**
   * 设置逻辑块轴上的溢出行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  overflowBlock?: CssDeclarationValue<'overflowBlock', T>;
  /**
   * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。
   *
   * @default:'padding-box'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  overflowClipBox?: CssDeclarationValue<'overflowClipBox', T>;
  /**
   * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。
   *
   * @default:'0px'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  overflowClipMargin?: CssDeclarationValue<'overflowClipMargin', T>;
  /**
   * 设置逻辑行内轴上的溢出行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  overflowInline?: CssDeclarationValue<'overflowInline', T>;
  /**
   * 设置不可正常断开的长文本是否允许额外换行。
   *
   * 适用场景：防止 URL、标识符等长文本撑破容器。
   *
   * 常用值：`normal`、`anywhere`、`break-word`。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  overflowWrap?: CssDeclarationValue<'overflowWrap', T>;
  /**
   * 设置水平方向的溢出行为。
   *
   * 和 overflow-y 的组合可能改变计算值；例如另一轴是 auto 时，visible 可能按 auto 计算。
   *
   * 适用场景：横向滚动标签、宽表格或水平内容裁剪。
   *
   * 常用值：`auto`、`hidden`、`clip`。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  overflowX?: CssDeclarationValue<'overflowX', T>;
  /**
   * 设置垂直方向的溢出行为。
   *
   * 通常配合 height/max-height 或可收缩的布局区域使用。
   *
   * 适用场景：纵向列表和弹窗内容区。
   *
   * 常用值：`auto`、`hidden`、`clip`。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  overflowY?: CssDeclarationValue<'overflowY', T>;
  /**
   * 控制滚动到边界后的滚动链和越界反馈行为。
   *
   * 适用场景：阻止弹窗或内部滚动面板到达边界后继续滚动外层页面。
   *
   * 常用值：`auto`、`contain`、`none`。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
   */
  overscrollBehavior?: CssDeclarationValue<'overscrollBehavior', T>;
  /**
   * 控制逻辑块轴上到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  overscrollBehaviorBlock?: CssDeclarationValue<'overscrollBehaviorBlock', T>;
  /**
   * 控制逻辑行内轴上到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  overscrollBehaviorInline?: CssDeclarationValue<'overscrollBehaviorInline', T>;
  /**
   * 控制水平方向到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  overscrollBehaviorX?: CssDeclarationValue<'overscrollBehaviorX', T>;
  /**
   * 控制垂直方向到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  overscrollBehaviorY?: CssDeclarationValue<'overscrollBehaviorY', T>;
  /**
   * 设置滚动条滑块和轨道的颜色。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  scrollbarColor?: CssDeclarationValue<'scrollbarColor', T>;
  /**
   * 设置是否预留滚动条槽位，以减少滚动条出现时的布局变化。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  scrollbarGutter?: CssDeclarationValue<'scrollbarGutter', T>;
  /**
   * 设置滚动条采用正常、较细或隐藏的外观。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  scrollbarWidth?: CssDeclarationValue<'scrollbarWidth', T>;
  /**
   * 设置由导航或滚动 API 触发的滚动采用即时还是平滑方式。
   *
   * 主要影响导航和滚动 API 触发的滚动，不会把所有用户滚动强制变成动画。
   *
   * 适用场景：锚点跳转或程序化滚动；应同时考虑减少动态效果的用户偏好。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  scrollBehavior?: CssDeclarationValue<'scrollBehavior', T>;
  /**
   * 将元素声明为祖先滚动容器首次呈现时的候选滚动吸附目标。
   *
   * @default:'none'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  scrollInitialTarget?: CssDeclarationValue<'scrollInitialTarget', T>;
  /**
   * 设置元素滚动目标区域的四边外扩距离，不改变普通布局外边距。
   *
   * @default:'scroll-margin-bottom: 0；scroll-margin-left: 0；scroll-margin-right: 0；scroll-margin-top: 0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  scrollMargin?: CssDeclarationValue<'scrollMargin', T>;
  /**
   * 设置滚动目标区域在逻辑块轴两侧的外扩距离。
   *
   * @default:'scroll-margin-block-start: 0；scroll-margin-block-end: 0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  scrollMarginBlock?: CssDeclarationValue<'scrollMarginBlock', T>;
  /**
   * 设置滚动目标区域在逻辑块轴结束侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  scrollMarginBlockEnd?: CssDeclarationValue<'scrollMarginBlockEnd', T>;
  /**
   * 设置滚动目标区域在逻辑块轴起始侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  scrollMarginBlockStart?: CssDeclarationValue<'scrollMarginBlockStart', T>;
  /**
   * 设置滚动目标区域下侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  scrollMarginBottom?: CssDeclarationValue<'scrollMarginBottom', T>;
  /**
   * 设置滚动目标区域在逻辑行内轴两侧的外扩距离。
   *
   * @default:'scroll-margin-inline-start: 0；scroll-margin-inline-end: 0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  scrollMarginInline?: CssDeclarationValue<'scrollMarginInline', T>;
  /**
   * 设置滚动目标区域在逻辑行内轴结束侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  scrollMarginInlineEnd?: CssDeclarationValue<'scrollMarginInlineEnd', T>;
  /**
   * 设置滚动目标区域在逻辑行内轴起始侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  scrollMarginInlineStart?: CssDeclarationValue<'scrollMarginInlineStart', T>;
  /**
   * 设置滚动目标区域左侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  scrollMarginLeft?: CssDeclarationValue<'scrollMarginLeft', T>;
  /**
   * 设置滚动目标区域右侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  scrollMarginRight?: CssDeclarationValue<'scrollMarginRight', T>;
  /**
   * 设置滚动目标区域上侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  scrollMarginTop?: CssDeclarationValue<'scrollMarginTop', T>;
  /**
   * 设置滚动容器最佳可视区域的四边内缩距离。
   *
   * @default:'scroll-padding-bottom: auto；scroll-padding-left: auto；scroll-padding-right: auto；scroll-padding-top: auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  scrollPadding?: CssDeclarationValue<'scrollPadding', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴两侧的内缩距离。
   *
   * @default:'scroll-padding-block-start: auto；scroll-padding-block-end: auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  scrollPaddingBlock?: CssDeclarationValue<'scrollPaddingBlock', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴结束侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  scrollPaddingBlockEnd?: CssDeclarationValue<'scrollPaddingBlockEnd', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴起始侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  scrollPaddingBlockStart?: CssDeclarationValue<'scrollPaddingBlockStart', T>;
  /**
   * 设置滚动容器最佳可视区域下侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  scrollPaddingBottom?: CssDeclarationValue<'scrollPaddingBottom', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴两侧的内缩距离。
   *
   * @default:'scroll-padding-inline-start: auto；scroll-padding-inline-end: auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  scrollPaddingInline?: CssDeclarationValue<'scrollPaddingInline', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴结束侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd?: CssDeclarationValue<'scrollPaddingInlineEnd', T>;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴起始侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  scrollPaddingInlineStart?: CssDeclarationValue<'scrollPaddingInlineStart', T>;
  /**
   * 设置滚动容器最佳可视区域左侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  scrollPaddingLeft?: CssDeclarationValue<'scrollPaddingLeft', T>;
  /**
   * 设置滚动容器最佳可视区域右侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  scrollPaddingRight?: CssDeclarationValue<'scrollPaddingRight', T>;
  /**
   * 设置滚动容器最佳可视区域上侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  scrollPaddingTop?: CssDeclarationValue<'scrollPaddingTop', T>;
  /**
   * 设置元素作为滚动吸附目标时在块轴和行内轴上的对齐位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  scrollSnapAlign?: CssDeclarationValue<'scrollSnapAlign', T>;
  /**
   * 设置滚动吸附区域外扩的旧名称；新代码使用 scroll-margin。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin
   */
  scrollSnapMargin?: CssDeclarationValue<'scrollSnapMargin', T>;
  /**
   * 设置滚动吸附区域下侧外扩的旧名称；新代码使用 scroll-margin-bottom。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-bottom
   */
  scrollSnapMarginBottom?: CssDeclarationValue<'scrollSnapMarginBottom', T>;
  /**
   * 设置滚动吸附区域左侧外扩的旧名称；新代码使用 scroll-margin-left。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-left
   */
  scrollSnapMarginLeft?: CssDeclarationValue<'scrollSnapMarginLeft', T>;
  /**
   * 设置滚动吸附区域右侧外扩的旧名称；新代码使用 scroll-margin-right。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-right
   */
  scrollSnapMarginRight?: CssDeclarationValue<'scrollSnapMarginRight', T>;
  /**
   * 设置滚动吸附区域上侧外扩的旧名称；新代码使用 scroll-margin-top。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-top
   */
  scrollSnapMarginTop?: CssDeclarationValue<'scrollSnapMarginTop', T>;
  /**
   * 设置滚动时是否允许越过该元素的吸附位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  scrollSnapStop?: CssDeclarationValue<'scrollSnapStop', T>;
  /**
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * @default:'none'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  scrollSnapType?: CssDeclarationValue<'scrollSnapType', T>;
  /**
   * 同时声明滚动进度时间线的名称和轴。
   *
   * @default:'scroll-timeline-name: none；scroll-timeline-axis: block'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  scrollTimeline?: CssDeclarationValue<'scrollTimeline', T>;
  /**
   * 设置滚动进度时间线所观察的滚动轴。
   *
   * @default:'block'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  scrollTimelineAxis?: CssDeclarationValue<'scrollTimelineAxis', T>;
  /**
   * 声明基于当前容器滚动进度的时间线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  scrollTimelineName?: CssDeclarationValue<'scrollTimelineName', T>;
  /**
   * 控制元素是否采用平台原生控件外观。
   *
   * @default:'none'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  appearance?: CssDeclarationValue<'appearance', T>;
  /**
   * 集中设置文本插入光标的颜色和形状。
   *
   * @default:'caret-color: auto；caret-animation: auto；caret-shape: auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  caret?: CssDeclarationValue<'caret', T>;
  /**
   * 设置文本插入光标的形状。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  caretShape?: CssDeclarationValue<'caretShape', T>;
  /**
   * 控制是否渲染元素内容，并允许浏览器跳过暂时不可见的子树。
   *
   * 允许跳过子树渲染；跳过时的占位尺寸可由 contain-intrinsic-size 提供。
   *
   * 适用场景：页面中较长、暂时位于视口外的独立内容区域。
   *
   * 常用值：`visible`、`auto`、`hidden`。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
   */
  contentVisibility?: CssDeclarationValue<'contentVisibility', T>;
  /**
   * 设置指针位于元素上方时显示的光标。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  cursor?: CssDeclarationValue<'cursor', T>;
  /**
   * 设置元素何时可以成为指针命中目标；SVG 还支持按填充和描边命中。
   *
   * 控制指针命中，不等同于原生 disabled，也不会单独阻止键盘交互。
   *
   * 适用场景：允许指针穿过装饰层；可交互控件的禁用应同时处理行为和语义。
   *
   * 常用值：`auto`、`none`。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  pointerEvents?: CssDeclarationValue<'pointerEvents', T>;
  /**
   * 设置用户是否能调整元素尺寸以及可调整的方向。
   *
   * @default:'none'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  resize?: CssDeclarationValue<'resize', T>;
  /**
   * 声明浏览器可以处理的触摸平移与缩放手势。
   *
   * 描述浏览器可接管的触摸手势，手势开始后再修改通常不会改变当前手势的处理。
   *
   * 适用场景：拖拽控件与页面滚动之间分配触摸方向；保留用户所需的缩放能力。
   *
   * 常用值：`manipulation`、`pan-x`、`pan-y`、`none`。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  touchAction?: CssDeclarationValue<'touchAction', T>;
  /**
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  userSelect?: CssDeclarationValue<'userSelect', T>;
  /**
   * 设置元素是否可见；隐藏通常保留布局空间。
   *
   * 适用场景：需要隐藏内容但通常保留其布局占位的场景。
   *
   * 常用值：`visible`、`hidden`、`collapse`。
   *
   * @default:'visible'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
   */
  visibility?: CssDeclarationValue<'visibility', T>;
  /**
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  breakAfter?: CssDeclarationValue<'breakAfter', T>;
  /**
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  breakBefore?: CssDeclarationValue<'breakBefore', T>;
  /**
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  breakInside?: CssDeclarationValue<'breakInside', T>;
  /**
   * 设置表格标题相对于表格的放置侧。
   *
   * @default:'top'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  captionSide?: CssDeclarationValue<'captionSide', T>;
  /**
   * 声明尺寸、布局、绘制或样式隔离，限制子树对外部的影响。
   *
   * 不同隔离类型会改变布局和绘制语义，不能仅当作无副作用的性能开关。
   *
   * 适用场景：边界明确且尺寸、溢出行为经过验证的独立区域。
   *
   * 常用值：`content`、`strict`、`size`、`paint`、`style`。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  contain?: CssDeclarationValue<'contain', T>;
  /**
   * 同时声明查询容器的名称和类型。
   *
   * @default:'container-name: none；container-type: normal'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  container?: CssDeclarationValue<'container', T>;
  /**
   * 为查询容器命名，供 @container 条件规则选择。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  containerName?: CssDeclarationValue<'containerName', T>;
  /**
   * 建立指定类型的查询容器，并施加所需的隔离行为。
   *
   * 建立尺寸查询容器会同时引入必要的隔离语义；容器本身的样式通常由祖先查询容器决定。
   *
   * 适用场景：让组件按所在容器尺寸响应，而不是只按视口响应。
   *
   * 常用值：`normal`、`inline-size`、`size`。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  containerType?: CssDeclarationValue<'containerType', T>;
  /**
   * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  containIntrinsicBlockSize?: CssDeclarationValue<'containIntrinsicBlockSize', T>;
  /**
   * 设置高度隔离或跳过内容渲染时使用的替代内部高度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  containIntrinsicHeight?: CssDeclarationValue<'containIntrinsicHeight', T>;
  /**
   * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  containIntrinsicInlineSize?: CssDeclarationValue<'containIntrinsicInlineSize', T>;
  /**
   * 集中设置尺寸隔离时使用的替代内部宽高。
   *
   * @default:'contain-intrinsic-width: none；contain-intrinsic-height: none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  containIntrinsicSize?: CssDeclarationValue<'containIntrinsicSize', T>;
  /**
   * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  containIntrinsicWidth?: CssDeclarationValue<'containIntrinsicWidth', T>;
  /**
   * 设置生成内容、替换内容或伪元素的内容。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  content?: CssDeclarationValue<'content', T>;
  /**
   * 增加或减少指定 CSS 计数器的值。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  counterIncrement?: CssDeclarationValue<'counterIncrement', T>;
  /**
   * 创建或重置 CSS 计数器。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  counterReset?: CssDeclarationValue<'counterReset', T>;
  /**
   * 设置已有 CSS 计数器的值，必要时创建计数器。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  counterSet?: CssDeclarationValue<'counterSet', T>;
  /**
   * 控制分离边框表格中空单元格的边框和背景是否绘制。
   *
   * @default:'show'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  emptyCells?: CssDeclarationValue<'emptyCells', T>;
  /**
   * 集中设置列表标记的类型、图像和位置。
   *
   * @default:'list-style-type: disc；list-style-position: outside；list-style-image: none'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  listStyle?: CssDeclarationValue<'listStyle', T>;
  /**
   * 设置用作列表标记的图像。
   *
   * @default:'none'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  listStyleImage?: CssDeclarationValue<'listStyleImage', T>;
  /**
   * 设置列表标记位于主块盒内部还是外部。
   *
   * @default:'outside'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  listStylePosition?: CssDeclarationValue<'listStylePosition', T>;
  /**
   * 设置列表标记或计数器的样式。
   *
   * @default:'disc'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  listStyleType?: CssDeclarationValue<'listStyleType', T>;
  /**
   * 设置分页或分栏断点前需保留的最少行数。
   *
   * @default:'2'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  orphans?: CssDeclarationValue<'orphans', T>;
  /**
   * 选择分页媒体中使用的命名页面类型。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  page?: CssDeclarationValue<'page', T>;
  /**
   * 设置表格列宽采用自动还是固定布局算法。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  tableLayout?: CssDeclarationValue<'tableLayout', T>;
  /**
   * 设置分页或分栏断点后需保留的最少行数。
   *
   * @default:'2'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  widows?: CssDeclarationValue<'widows', T>;
  /**
   * 使 SVG 文本基线相对于其基准位置偏移。
   *
   * @default:'0'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  baselineShift?: CssDeclarationValue<'baselineShift', T>;
  /**
   * 选择 SVG 文本布局的主导基线及基线表。
   *
   * @default:'auto'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  dominantBaseline?: CssDeclarationValue<'dominantBaseline', T>;
  /**
   * 设置 SVG 图形内部的填充绘制方式。
   *
   * @default:'black'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  fill?: CssDeclarationValue<'fill', T>;
  /**
   * 设置 SVG 填充的不透明度，不影响描边。
   *
   * @default:'1'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  fillOpacity?: CssDeclarationValue<'fillOpacity', T>;
  /**
   * 设置复杂 SVG 路径的内部区域判定规则。
   *
   * @default:'nonzero'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  fillRule?: CssDeclarationValue<'fillRule', T>;
  /**
   * 设置 SVG feFlood 或相关滤镜的洪泛颜色。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  floodColor?: CssDeclarationValue<'floodColor', T>;
  /**
   * 设置 SVG 洪泛滤镜颜色的不透明度。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  floodOpacity?: CssDeclarationValue<'floodOpacity', T>;
  /**
   * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  glyphOrientationVertical?: CssDeclarationValue<'glyphOrientationVertical', T>;
  /**
   * 设置 SVG 光照滤镜使用的光源颜色。
   *
   * @default:'white'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  lightingColor?: CssDeclarationValue<'lightingColor', T>;
  /**
   * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。
   *
   * @default:'marker-start: none；marker-mid: none；marker-end: none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  marker?: CssDeclarationValue<'marker', T>;
  /**
   * 设置 SVG 路径终点的标记图形。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  markerEnd?: CssDeclarationValue<'markerEnd', T>;
  /**
   * 设置 SVG 路径中间顶点的标记图形。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  markerMid?: CssDeclarationValue<'markerMid', T>;
  /**
   * 设置 SVG 路径起点的标记图形。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  markerStart?: CssDeclarationValue<'markerStart', T>;
  /**
   * 设置 SVG 填充、描边和标记的绘制先后顺序。
   *
   * @default:'normal'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  paintOrder?: CssDeclarationValue<'paintOrder', T>;
  /**
   * 设置 SVG 渐变 stop 节点的颜色。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  stopColor?: CssDeclarationValue<'stopColor', T>;
  /**
   * 设置 SVG 渐变 stop 节点的不透明度。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  stopOpacity?: CssDeclarationValue<'stopOpacity', T>;
  /**
   * 设置 SVG 图形轮廓的描边绘制方式。
   *
   * @default:'stroke-dasharray: none；stroke-dashoffset: 0；stroke-linecap: butt；stroke-linejoin: miter；stroke-miterlimit: 4；stroke-opacity: 1；stroke-width: 1px'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  stroke?: CssDeclarationValue<'stroke', T>;
  /**
   * 设置 SVG 描边虚线中线段与空隙的长度序列。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  strokeDasharray?: CssDeclarationValue<'strokeDasharray', T>;
  /**
   * 设置 SVG 虚线描边相对于路径起点的偏移。
   *
   * @default:'0'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  strokeDashoffset?: CssDeclarationValue<'strokeDashoffset', T>;
  /**
   * 设置开放 SVG 子路径端点的描边形状。
   *
   * @default:'butt'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  strokeLinecap?: CssDeclarationValue<'strokeLinecap', T>;
  /**
   * 设置 SVG 路径转角处描边的连接形状。
   *
   * @default:'miter'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  strokeLinejoin?: CssDeclarationValue<'strokeLinejoin', T>;
  /**
   * 限制尖角连接的延伸比例，超过阈值时改变连接形状。
   *
   * @default:'4'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  strokeMiterlimit?: CssDeclarationValue<'strokeMiterlimit', T>;
  /**
   * 设置 SVG 描边的不透明度，不影响填充。
   *
   * @default:'1'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  strokeOpacity?: CssDeclarationValue<'strokeOpacity', T>;
  /**
   * 设置 SVG 描边宽度。
   *
   * @default:'1px'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  strokeWidth?: CssDeclarationValue<'strokeWidth', T>;
  /**
   * 设置 SVG 图形变换时对描边等矢量效果的处理。
   *
   * @default:'none'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  vectorEffect?: CssDeclarationValue<'vectorEffect', T>;
  /**
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * @default:'stretch'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  boxAlign?: CssDeclarationValue<'boxAlign', T>;
  /**
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * @default:'normal'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-direction
   */
  boxDirection?: CssDeclarationValue<'boxDirection', T>;
  /**
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex
   */
  boxFlex?: CssDeclarationValue<'boxFlex', T>;
  /**
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex-group
   */
  boxFlexGroup?: CssDeclarationValue<'boxFlexGroup', T>;
  /**
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * @default:'single'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  boxLines?: CssDeclarationValue<'boxLines', T>;
  /**
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-ordinal-group
   */
  boxOrdinalGroup?: CssDeclarationValue<'boxOrdinalGroup', T>;
  /**
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * @default:'inline-axis'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  boxOrient?: CssDeclarationValue<'boxOrient', T>;
  /**
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * @default:'start'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  boxPack?: CssDeclarationValue<'boxPack', T>;
  /**
   * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  clip?: CssDeclarationValue<'clip', T>;
  /**
   * 选择字体的宽窄字面；font-width 是其较新的名称。
   *
   * @default:'normal'
   * @extend:'是'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  fontStretch?: CssDeclarationValue<'fontStretch', T>;
  /**
   * 兼容属性 grid-column-gap；优先参考标准属性 columnGap及浏览器支持范围。
   * 设置布局中相邻列之间的间距。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-gap
   */
  gridColumnGap?: CssDeclarationValue<'gridColumnGap', T>;
  /**
   * 兼容属性 grid-gap；优先参考标准属性 gap及浏览器支持范围。
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。
   *
   * @default:'grid-row-gap: 0；grid-column-gap: 0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-gap
   */
  gridGap?: CssDeclarationValue<'gridGap', T>;
  /**
   * 兼容属性 grid-row-gap；优先参考标准属性 rowGap及浏览器支持范围。
   * 设置布局中相邻行之间的间距。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-gap
   */
  gridRowGap?: CssDeclarationValue<'gridRowGap', T>;
  /**
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  imeMode?: CssDeclarationValue<'imeMode', T>;
  /**
   * 兼容属性 inset-area；优先参考标准属性 positionArea及浏览器支持范围。
   * 选择相对于锚点的定位区域。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  insetArea?: CssDeclarationValue<'insetArea', T>;
  /**
   * 兼容属性 -khtml-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * @default:'stretch'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-align
   */
  KhtmlBoxAlign?: CssDeclarationValue<'KhtmlBoxAlign', T>;
  /**
   * 兼容属性 -khtml-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * @default:'normal'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-direction
   */
  KhtmlBoxDirection?: CssDeclarationValue<'KhtmlBoxDirection', T>;
  /**
   * 兼容属性 -khtml-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-flex
   */
  KhtmlBoxFlex?: CssDeclarationValue<'KhtmlBoxFlex', T>;
  /**
   * 兼容属性 -khtml-box-flex-group；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-flex-group
   */
  KhtmlBoxFlexGroup?: CssDeclarationValue<'KhtmlBoxFlexGroup', T>;
  /**
   * 兼容属性 -khtml-box-lines；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * @default:'single'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-lines
   */
  KhtmlBoxLines?: CssDeclarationValue<'KhtmlBoxLines', T>;
  /**
   * 兼容属性 -khtml-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-ordinal-group
   */
  KhtmlBoxOrdinalGroup?: CssDeclarationValue<'KhtmlBoxOrdinalGroup', T>;
  /**
   * 兼容属性 -khtml-box-orient；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * @default:'inline-axis'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  KhtmlBoxOrient?: CssDeclarationValue<'KhtmlBoxOrient', T>;
  /**
   * 兼容属性 -khtml-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * @default:'start'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-pack
   */
  KhtmlBoxPack?: CssDeclarationValue<'KhtmlBoxPack', T>;
  /**
   * 兼容属性 -khtml-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * @default:'auto'
   * @extend:'是'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-line-break
   */
  KhtmlLineBreak?: CssDeclarationValue<'KhtmlLineBreak', T>;
  /**
   * 兼容属性 -khtml-opacity；优先参考标准属性及浏览器支持范围。
   * 设置元素及其子树合成后的整体不透明度。
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-opacity
   */
  KhtmlOpacity?: CssDeclarationValue<'KhtmlOpacity', T>;
  /**
   * 兼容属性 -khtml-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-user-select
   */
  KhtmlUserSelect?: CssDeclarationValue<'KhtmlUserSelect', T>;
  /**
   * 兼容属性 -moz-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * @default:'animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  MozAnimation?: CssDeclarationValue<'MozAnimation', T>;
  /**
   * 兼容属性 -moz-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-delay
   */
  MozAnimationDelay?: CssDeclarationValue<'MozAnimationDelay', T>;
  /**
   * 兼容属性 -moz-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  MozAnimationDirection?: CssDeclarationValue<'MozAnimationDirection', T>;
  /**
   * 兼容属性 -moz-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-duration
   */
  MozAnimationDuration?: CssDeclarationValue<'MozAnimationDuration', T>;
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
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-fill-mode
   */
  MozAnimationFillMode?: CssDeclarationValue<'MozAnimationFillMode', T>;
  /**
   * 兼容属性 -moz-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * @default:'1'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-iteration-count
   */
  MozAnimationIterationCount?: CssDeclarationValue<'MozAnimationIterationCount', T>;
  /**
   * 兼容属性 -moz-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-name
   */
  MozAnimationName?: CssDeclarationValue<'MozAnimationName', T>;
  /**
   * 兼容属性 -moz-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * @default:'running'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-play-state
   */
  MozAnimationPlayState?: CssDeclarationValue<'MozAnimationPlayState', T>;
  /**
   * 兼容属性 -moz-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  MozAnimationTimingFunction?: CssDeclarationValue<'MozAnimationTimingFunction', T>;
  /**
   * 兼容属性 -moz-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * @default:'none（浏览器默认样式表可能覆盖）'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  MozAppearance?: CssDeclarationValue<'MozAppearance', T>;
  /**
   * 兼容属性 -moz-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-backface-visibility
   */
  MozBackfaceVisibility?: CssDeclarationValue<'MozBackfaceVisibility', T>;
  /**
   * 兼容属性 -moz-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * @default:'border-box'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  MozBackgroundClip?: CssDeclarationValue<'MozBackgroundClip', T>;
  /**
   * 兼容属性 -moz-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * @default:'padding-box'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  MozBackgroundOrigin?: CssDeclarationValue<'MozBackgroundOrigin', T>;
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
   * @default:'auto auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-size
   */
  MozBackgroundSize?: CssDeclarationValue<'MozBackgroundSize', T>;
  /**
   * 兼容属性 -moz-binding；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的 XBL 绑定入口；仅描述历史兼容行为，不适用于现代组件实现。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-binding
   */
  MozBinding?: CssDeclarationValue<'MozBinding', T>;
  /**
   * 兼容属性 -moz-border-bottom-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的下边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-bottom-colors
   */
  MozBorderBottomColors?: CssDeclarationValue<'MozBorderBottomColors', T>;
  /**
   * 兼容属性 -moz-border-end-color；优先参考标准属性 borderInlineEndColor及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-color
   */
  MozBorderEndColor?: CssDeclarationValue<'MozBorderEndColor', T>;
  /**
   * 兼容属性 -moz-border-end-style；优先参考标准属性 borderInlineEndStyle及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  MozBorderEndStyle?: CssDeclarationValue<'MozBorderEndStyle', T>;
  /**
   * 兼容属性 -moz-border-end-width；优先参考标准属性 borderInlineEndWidth及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  MozBorderEndWidth?: CssDeclarationValue<'MozBorderEndWidth', T>;
  /**
   * 兼容属性 -moz-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * @default:'border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  MozBorderImage?: CssDeclarationValue<'MozBorderImage', T>;
  /**
   * 兼容属性 -moz-border-left-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的左边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-left-colors
   */
  MozBorderLeftColors?: CssDeclarationValue<'MozBorderLeftColors', T>;
  /**
   * 兼容属性 -moz-border-radius；优先参考标准属性及浏览器支持范围。
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   *
   * @default:'border-top-left-radius: 0；border-top-right-radius: 0；border-bottom-right-radius: 0；border-bottom-left-radius: 0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius
   */
  MozBorderRadius?: CssDeclarationValue<'MozBorderRadius', T>;
  /**
   * 兼容属性 -moz-border-radius-bottomleft；优先参考标准属性 borderBottomLeftRadius及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-bottomleft
   */
  MozBorderRadiusBottomleft?: CssDeclarationValue<'MozBorderRadiusBottomleft', T>;
  /**
   * 兼容属性 -moz-border-radius-bottomright；优先参考标准属性 borderBottomRightRadius及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-bottomright
   */
  MozBorderRadiusBottomright?: CssDeclarationValue<'MozBorderRadiusBottomright', T>;
  /**
   * 兼容属性 -moz-border-radius-topleft；优先参考标准属性 borderTopLeftRadius及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-topleft
   */
  MozBorderRadiusTopleft?: CssDeclarationValue<'MozBorderRadiusTopleft', T>;
  /**
   * 兼容属性 -moz-border-radius-topright；优先参考标准属性 borderTopRightRadius及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-topright
   */
  MozBorderRadiusTopright?: CssDeclarationValue<'MozBorderRadiusTopright', T>;
  /**
   * 兼容属性 -moz-border-right-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的右边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-right-colors
   */
  MozBorderRightColors?: CssDeclarationValue<'MozBorderRightColors', T>;
  /**
   * 兼容属性 -moz-border-start-color；优先参考标准属性 borderInlineStartColor及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-color
   */
  MozBorderStartColor?: CssDeclarationValue<'MozBorderStartColor', T>;
  /**
   * 兼容属性 -moz-border-start-style；优先参考标准属性 borderInlineStartStyle及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  MozBorderStartStyle?: CssDeclarationValue<'MozBorderStartStyle', T>;
  /**
   * 兼容属性 -moz-border-top-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的上边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-top-colors
   */
  MozBorderTopColors?: CssDeclarationValue<'MozBorderTopColors', T>;
  /**
   * 兼容属性 -moz-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * @default:'stretch'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-align
   */
  MozBoxAlign?: CssDeclarationValue<'MozBoxAlign', T>;
  /**
   * 兼容属性 -moz-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * @default:'normal'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-direction
   */
  MozBoxDirection?: CssDeclarationValue<'MozBoxDirection', T>;
  /**
   * 兼容属性 -moz-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-flex
   */
  MozBoxFlex?: CssDeclarationValue<'MozBoxFlex', T>;
  /**
   * 兼容属性 -moz-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-ordinal-group
   */
  MozBoxOrdinalGroup?: CssDeclarationValue<'MozBoxOrdinalGroup', T>;
  /**
   * 兼容属性 -moz-box-orient；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * @default:'inline-axis'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  MozBoxOrient?: CssDeclarationValue<'MozBoxOrient', T>;
  /**
   * 兼容属性 -moz-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * @default:'start'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-pack
   */
  MozBoxPack?: CssDeclarationValue<'MozBoxPack', T>;
  /**
   * 兼容属性 -moz-box-shadow；优先参考标准属性及浏览器支持范围。
   * 设置盒子的外部或内部阴影，可叠加多层。
   *
   * 阴影不占布局空间，可用逗号叠加；与 border/outline 的用途和绘制位置不同。
   *
   * 适用场景：浮层层次、卡片边缘或内凹效果。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-shadow
   */
  MozBoxShadow?: CssDeclarationValue<'MozBoxShadow', T>;
  /**
   * 兼容属性 -moz-box-sizing；优先参考标准属性及浏览器支持范围。
   * 决定 width、height 等尺寸是否包含内边距和边框。
   *
   * 适用场景：确定组件声明宽高时是否把 padding 和 border 算在尺寸内。
   *
   * 常用值：`content-box`、`border-box`。
   *
   * @default:'content-box'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-sizing
   */
  MozBoxSizing?: CssDeclarationValue<'MozBoxSizing', T>;
  /**
   * 兼容属性 -moz-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-count
   */
  MozColumnCount?: CssDeclarationValue<'MozColumnCount', T>;
  /**
   * 兼容属性 -moz-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * @default:'balance'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-fill
   */
  MozColumnFill?: CssDeclarationValue<'MozColumnFill', T>;
  /**
   * 兼容属性 -moz-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * @default:'column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule
   */
  MozColumnRule?: CssDeclarationValue<'MozColumnRule', T>;
  /**
   * 兼容属性 -moz-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-color
   */
  MozColumnRuleColor?: CssDeclarationValue<'MozColumnRuleColor', T>;
  /**
   * 兼容属性 -moz-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  MozColumnRuleStyle?: CssDeclarationValue<'MozColumnRuleStyle', T>;
  /**
   * 兼容属性 -moz-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  MozColumnRuleWidth?: CssDeclarationValue<'MozColumnRuleWidth', T>;
  /**
   * 兼容属性 -moz-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * @default:'column-width: auto；column-count: auto；column-height: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-columns
   */
  MozColumns?: CssDeclarationValue<'MozColumns', T>;
  /**
   * 兼容属性 -moz-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-width
   */
  MozColumnWidth?: CssDeclarationValue<'MozColumnWidth', T>;
  /**
   * 兼容属性 -moz-context-properties；优先参考标准属性及浏览器支持范围。
   * 声明可传递给被引用 SVG 图像的上下文绘制属性，如 fill 和 stroke。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  MozContextProperties?: CssDeclarationValue<'MozContextProperties', T>;
  /**
   * 兼容属性 -moz-float-edge；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定浮动元素边缘计算使用的盒子范围。
   *
   * @default:'content-box'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  MozFloatEdge?: CssDeclarationValue<'MozFloatEdge', T>;
  /**
   * 兼容属性 -moz-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-feature-settings
   */
  MozFontFeatureSettings?: CssDeclarationValue<'MozFontFeatureSettings', T>;
  /**
   * 兼容属性 -moz-font-language-override；优先参考标准属性及浏览器支持范围。
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-language-override
   */
  MozFontLanguageOverride?: CssDeclarationValue<'MozFontLanguageOverride', T>;
  /**
   * 兼容属性 -moz-force-broken-image-icon；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中控制损坏图像占位图标的显示。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-force-broken-image-icon
   */
  MozForceBrokenImageIcon?: CssDeclarationValue<'MozForceBrokenImageIcon', T>;
  /**
   * 兼容属性 -moz-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-hyphens
   */
  MozHyphens?: CssDeclarationValue<'MozHyphens', T>;
  /**
   * 兼容属性 -moz-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-end
   */
  MozMarginEnd?: CssDeclarationValue<'MozMarginEnd', T>;
  /**
   * 兼容属性 -moz-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-start
   */
  MozMarginStart?: CssDeclarationValue<'MozMarginStart', T>;
  /**
   * 兼容属性 -moz-opacity；优先参考标准属性及浏览器支持范围。
   * 设置元素及其子树合成后的整体不透明度。
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-opacity
   */
  MozOpacity?: CssDeclarationValue<'MozOpacity', T>;
  /**
   * 兼容属性 -moz-orient；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定特定控件的显示方向，作用依赖控件类型。
   *
   * @default:'inline'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  MozOrient?: CssDeclarationValue<'MozOrient', T>;
  /**
   * 兼容属性 -moz-osx-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 macOS 上文字抗锯齿方式；效果依赖平台和字体渲染实现。
   *
   * @default:'auto'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  MozOsxFontSmoothing?: CssDeclarationValue<'MozOsxFontSmoothing', T>;
  /**
   * 兼容属性 -moz-outline；优先参考标准属性及浏览器支持范围。
   * 设置盒子外围轮廓线的宽度、线型和颜色，不占布局空间。
   *
   * 不占布局空间，可用 outline-offset 调整距离；键盘焦点指示不应被无替代地移除。
   *
   * 适用场景：控件焦点指示和不影响布局的轮廓。
   *
   * @default:'outline-width: medium；outline-style: none；outline-color: auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline
   */
  MozOutline?: CssDeclarationValue<'MozOutline', T>;
  /**
   * 兼容属性 -moz-outline-color；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线颜色。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-color
   */
  MozOutlineColor?: CssDeclarationValue<'MozOutlineColor', T>;
  /**
   * 兼容属性 -moz-outline-radius；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的轮廓圆角简写；不同于元素边框本身的圆角。
   *
   * @default:'-moz-outline-radius-topleft: 0；-moz-outline-radius-topright: 0；-moz-outline-radius-bottomright: 0；-moz-outline-radius-bottomleft: 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius
   */
  MozOutlineRadius?: CssDeclarationValue<'MozOutlineRadius', T>;
  /**
   * 兼容属性 -moz-outline-radius-bottomleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左下角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomleft
   */
  MozOutlineRadiusBottomleft?: CssDeclarationValue<'MozOutlineRadiusBottomleft', T>;
  /**
   * 兼容属性 -moz-outline-radius-bottomright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右下角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomright
   */
  MozOutlineRadiusBottomright?: CssDeclarationValue<'MozOutlineRadiusBottomright', T>;
  /**
   * 兼容属性 -moz-outline-radius-topleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左上角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topleft
   */
  MozOutlineRadiusTopleft?: CssDeclarationValue<'MozOutlineRadiusTopleft', T>;
  /**
   * 兼容属性 -moz-outline-radius-topright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右上角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topright
   */
  MozOutlineRadiusTopright?: CssDeclarationValue<'MozOutlineRadiusTopright', T>;
  /**
   * 兼容属性 -moz-outline-style；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线线型。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  MozOutlineStyle?: CssDeclarationValue<'MozOutlineStyle', T>;
  /**
   * 兼容属性 -moz-outline-width；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-width
   */
  MozOutlineWidth?: CssDeclarationValue<'MozOutlineWidth', T>;
  /**
   * 兼容属性 -moz-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-end
   */
  MozPaddingEnd?: CssDeclarationValue<'MozPaddingEnd', T>;
  /**
   * 兼容属性 -moz-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-start
   */
  MozPaddingStart?: CssDeclarationValue<'MozPaddingStart', T>;
  /**
   * 兼容属性 -moz-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective
   */
  MozPerspective?: CssDeclarationValue<'MozPerspective', T>;
  /**
   * 兼容属性 -moz-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * @default:'50% 50%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  MozPerspectiveOrigin?: CssDeclarationValue<'MozPerspectiveOrigin', T>;
  /**
   * 兼容属性 -moz-stack-sizing；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 堆叠布局中决定子项尺寸是否参与堆叠容器的尺寸计算。
   *
   * @default:'stretch-to-fit'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  MozStackSizing?: CssDeclarationValue<'MozStackSizing', T>;
  /**
   * 兼容属性 -moz-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * @default:'8'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-tab-size
   */
  MozTabSize?: CssDeclarationValue<'MozTabSize', T>;
  /**
   * 兼容属性 -moz-text-align-last；优先参考标准属性及浏览器支持范围。
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  MozTextAlignLast?: CssDeclarationValue<'MozTextAlignLast', T>;
  /**
   * 兼容属性 -moz-text-blink；优先参考标准属性及浏览器支持范围。
   * 旧版文字闪烁效果开关；现代内容不应依赖该兼容属性。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-blink
   */
  MozTextBlink?: CssDeclarationValue<'MozTextBlink', T>;
  /**
   * 兼容属性 -moz-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-color
   */
  MozTextDecorationColor?: CssDeclarationValue<'MozTextDecorationColor', T>;
  /**
   * 兼容属性 -moz-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  MozTextDecorationLine?: CssDeclarationValue<'MozTextDecorationLine', T>;
  /**
   * 兼容属性 -moz-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * @default:'solid'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-style
   */
  MozTextDecorationStyle?: CssDeclarationValue<'MozTextDecorationStyle', T>;
  /**
   * 兼容属性 -moz-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * @default:'支持文本放大的移动浏览器为 auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-size-adjust
   */
  MozTextSizeAdjust?: CssDeclarationValue<'MozTextSizeAdjust', T>;
  /**
   * 兼容属性 -moz-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform
   */
  MozTransform?: CssDeclarationValue<'MozTransform', T>;
  /**
   * 兼容属性 -moz-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  MozTransformOrigin?: CssDeclarationValue<'MozTransformOrigin', T>;
  /**
   * 兼容属性 -moz-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * @default:'flat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-style
   */
  MozTransformStyle?: CssDeclarationValue<'MozTransformStyle', T>;
  /**
   * 兼容属性 -moz-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   *
   * @default:'transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  MozTransition?: CssDeclarationValue<'MozTransition', T>;
  /**
   * 兼容属性 -moz-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-delay
   */
  MozTransitionDelay?: CssDeclarationValue<'MozTransitionDelay', T>;
  /**
   * 兼容属性 -moz-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-duration
   */
  MozTransitionDuration?: CssDeclarationValue<'MozTransitionDuration', T>;
  /**
   * 兼容属性 -moz-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-property
   */
  MozTransitionProperty?: CssDeclarationValue<'MozTransitionProperty', T>;
  /**
   * 兼容属性 -moz-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  MozTransitionTimingFunction?: CssDeclarationValue<'MozTransitionTimingFunction', T>;
  /**
   * 兼容属性 -moz-user-focus；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Gecko 元素的用户焦点行为，现代交互优先使用标准焦点机制。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  MozUserFocus?: CssDeclarationValue<'MozUserFocus', T>;
  /**
   * 兼容属性 -moz-user-input；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Gecko 元素是否接受用户输入，现代控件使用标准 disabled/readonly 等语义。
   *
   * @default:'auto'
   * @extend:'是'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-input
   */
  MozUserInput?: CssDeclarationValue<'MozUserInput', T>;
  /**
   * 兼容属性 -moz-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * @default:'read-only'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  MozUserModify?: CssDeclarationValue<'MozUserModify', T>;
  /**
   * 兼容属性 -moz-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-select
   */
  MozUserSelect?: CssDeclarationValue<'MozUserSelect', T>;
  /**
   * 兼容属性 -moz-window-dragging；优先参考标准属性及浏览器支持范围。
   * 控制区域能否作为宿主窗口的拖动区域，作用限于支持它的特定环境。
   *
   * @default:'drag'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  MozWindowDragging?: CssDeclarationValue<'MozWindowDragging', T>;
  /**
   * 兼容属性 -moz-window-shadow；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Gecko 宿主窗口阴影的预设，效果依赖窗口与操作系统。
   *
   * @default:'default'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  MozWindowShadow?: CssDeclarationValue<'MozWindowShadow', T>;
  /**
   * 兼容属性 -ms-accelerator；优先参考标准属性及浏览器支持范围。
   * 旧版 Microsoft 浏览器中控制快捷键提示字符是否显示。
   *
   * @default:'false'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-accelerator
   */
  msAccelerator?: CssDeclarationValue<'msAccelerator', T>;
  /**
   * 兼容属性 -ms-block-progression；优先参考标准属性及浏览器支持范围。
   * 旧版块内容的排列方向，现代排版优先使用 writing-mode。
   *
   * @default:'tb'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  msBlockProgression?: CssDeclarationValue<'msBlockProgression', T>;
  /**
   * 兼容属性 -ms-content-zoom-chaining；优先参考标准属性及浏览器支持范围。
   * 控制缩放操作到达边界后是否继续传递给父级缩放区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-chaining
   */
  msContentZoomChaining?: CssDeclarationValue<'msContentZoomChaining', T>;
  /**
   * 兼容属性 -ms-content-zooming；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 触控内容缩放是否启用。
   *
   * @default:'顶层文档为 zoom，其余为 none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zooming
   */
  msContentZooming?: CssDeclarationValue<'msContentZooming', T>;
  /**
   * 兼容属性 -ms-content-zoom-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版触控内容缩放的最小和最大倍率。
   *
   * @default:'-ms-content-zoom-limit-max: 400%；-ms-content-zoom-limit-min: 100%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit
   */
  msContentZoomLimit?: CssDeclarationValue<'msContentZoomLimit', T>;
  /**
   * 兼容属性 -ms-content-zoom-limit-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最大倍率。
   *
   * @default:'400%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-max
   */
  msContentZoomLimitMax?: CssDeclarationValue<'msContentZoomLimitMax', T>;
  /**
   * 兼容属性 -ms-content-zoom-limit-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最小倍率。
   *
   * @default:'100%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-min
   */
  msContentZoomLimitMin?: CssDeclarationValue<'msContentZoomLimitMin', T>;
  /**
   * 兼容属性 -ms-content-zoom-snap；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版内容缩放吸附的方式和位置。
   *
   * @default:'-ms-content-zoom-snap-type: none；-ms-content-zoom-snap-points: snapInterval(0%, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  msContentZoomSnap?: CssDeclarationValue<'msContentZoomSnap', T>;
  /**
   * 兼容属性 -ms-content-zoom-snap-points；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放操作可以吸附的倍率位置。
   *
   * @default:'snapInterval(0%, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-points
   */
  msContentZoomSnapPoints?: CssDeclarationValue<'msContentZoomSnapPoints', T>;
  /**
   * 兼容属性 -ms-content-zoom-snap-type；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放吸附的强制程度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-type
   */
  msContentZoomSnapType?: CssDeclarationValue<'msContentZoomSnapType', T>;
  /**
   * 兼容属性 -ms-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * @default:'""'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-filter
   */
  msFilter?: CssDeclarationValue<'msFilter', T>;
  /**
   * 兼容属性 -ms-flex；优先参考标准属性及浏览器支持范围。
   * 集中设置弹性项目的增长系数、收缩系数和基础尺寸。
   *
   * 依次对应 flex-grow、flex-shrink、flex-basis。作用于弹性项目，应先由父容器建立 Flex 布局。
   *
   * 适用场景：分配弹性布局中的剩余空间，或让项目保持自身尺寸。
   *
   * 常用值：`auto`、`none`。
   *
   * @default:'flex-grow: 0；flex-shrink: 1；flex-basis: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  msFlex?: CssDeclarationValue<'msFlex', T>;
  /**
   * 兼容属性 -ms-flex-direction；优先参考标准属性及浏览器支持范围。
   * 设置弹性容器的主轴方向及项目排列方向。
   *
   * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
   *
   * 常用值：`row`、`column`、`row-reverse`、`column-reverse`。
   *
   * @default:'row'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-direction
   */
  msFlexDirection?: CssDeclarationValue<'msFlexDirection', T>;
  /**
   * 兼容属性 -ms-flex-positive；优先参考标准属性 flexGrow及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-positive
   */
  msFlexPositive?: CssDeclarationValue<'msFlexPositive', T>;
  /**
   * 兼容属性 -ms-flow-from；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中指定接收哪个命名内容流。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-from
   */
  msFlowFrom?: CssDeclarationValue<'msFlowFrom', T>;
  /**
   * 兼容属性 -ms-flow-into；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中把元素内容放入指定命名流。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-into
   */
  msFlowInto?: CssDeclarationValue<'msFlowInto', T>;
  /**
   * 兼容属性 -ms-grid-columns；优先参考标准属性 gridTemplateColumns及浏览器支持范围。
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  msGridColumns?: CssDeclarationValue<'msGridColumns', T>;
  /**
   * 兼容属性 -ms-grid-rows；优先参考标准属性 gridTemplateRows及浏览器支持范围。
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  msGridRows?: CssDeclarationValue<'msGridRows', T>;
  /**
   * 兼容属性 -ms-high-contrast-adjust；优先参考标准属性及浏览器支持范围。
   * 控制旧版高对比度模式是否调整作者颜色；现代环境优先使用 forced-color-adjust。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-high-contrast-adjust
   */
  msHighContrastAdjust?: CssDeclarationValue<'msHighContrastAdjust', T>;
  /**
   * 兼容属性 -ms-hyphenate-limit-chars；优先参考标准属性及浏览器支持范围。
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-chars
   */
  msHyphenateLimitChars?: CssDeclarationValue<'msHyphenateLimitChars', T>;
  /**
   * 兼容属性 -ms-hyphenate-limit-lines；优先参考标准属性及浏览器支持范围。
   * 限制连续使用断字连字符的文本行数。
   *
   * @default:'no-limit'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-lines
   */
  msHyphenateLimitLines?: CssDeclarationValue<'msHyphenateLimitLines', T>;
  /**
   * 兼容属性 -ms-hyphenate-limit-zone；优先参考标准属性及浏览器支持范围。
   * 指定允许开始断字处理的行末区域。
   *
   * @default:'0'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-zone
   */
  msHyphenateLimitZone?: CssDeclarationValue<'msHyphenateLimitZone', T>;
  /**
   * 兼容属性 -ms-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphens
   */
  msHyphens?: CssDeclarationValue<'msHyphens', T>;
  /**
   * 兼容属性 -ms-ime-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版输入法候选窗口相对于编辑区域的对齐位置。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-align
   */
  msImeAlign?: CssDeclarationValue<'msImeAlign', T>;
  /**
   * 兼容属性 -ms-ime-mode；优先参考标准属性及浏览器支持范围。
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-mode
   */
  msImeMode?: CssDeclarationValue<'msImeMode', T>;
  /**
   * 兼容属性 -ms-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  msLineBreak?: CssDeclarationValue<'msLineBreak', T>;
  /**
   * 兼容属性 -ms-order；优先参考标准属性及浏览器支持范围。
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-order
   */
  msOrder?: CssDeclarationValue<'msOrder', T>;
  /**
   * 兼容属性 -ms-overflow-style；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Microsoft 浏览器滚动条的呈现方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  msOverflowStyle?: CssDeclarationValue<'msOverflowStyle', T>;
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
   * @default:'visible'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-x
   */
  msOverflowX?: CssDeclarationValue<'msOverflowX', T>;
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
   * @default:'visible'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-y
   */
  msOverflowY?: CssDeclarationValue<'msOverflowY', T>;
  /**
   * 兼容属性 -ms-scrollbar3dlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的亮边颜色。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar3dlight-color
   */
  msScrollbar3dlightColor?: CssDeclarationValue<'msScrollbar3dlightColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-arrow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条箭头颜色。
   *
   * @default:'ButtonText'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-arrow-color
   */
  msScrollbarArrowColor?: CssDeclarationValue<'msScrollbarArrowColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-base-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条的基础颜色。
   *
   * @default:'由浏览器决定'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-base-color
   */
  msScrollbarBaseColor?: CssDeclarationValue<'msScrollbarBaseColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-darkshadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的深阴影颜色。
   *
   * @default:'ThreeDDarkShadow'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-darkshadow-color
   */
  msScrollbarDarkshadowColor?: CssDeclarationValue<'msScrollbarDarkshadowColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-face-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条滑块表面颜色。
   *
   * @default:'ThreeDFace'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-face-color
   */
  msScrollbarFaceColor?: CssDeclarationValue<'msScrollbarFaceColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条高亮边缘颜色。
   *
   * @default:'ThreeDHighlight'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-highlight-color
   */
  msScrollbarHighlightColor?: CssDeclarationValue<'msScrollbarHighlightColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-shadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条阴影边缘颜色。
   *
   * @default:'ThreeDDarkShadow'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-shadow-color
   */
  msScrollbarShadowColor?: CssDeclarationValue<'msScrollbarShadowColor', T>;
  /**
   * 兼容属性 -ms-scrollbar-track-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条轨道颜色。
   *
   * @default:'Scrollbar'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-track-color
   */
  msScrollbarTrackColor?: CssDeclarationValue<'msScrollbarTrackColor', T>;
  /**
   * 兼容属性 -ms-scroll-chaining；优先参考标准属性及浏览器支持范围。
   * 控制滚动到达边界后是否传递给祖先滚动容器。
   *
   * @default:'chained'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-chaining
   */
  msScrollChaining?: CssDeclarationValue<'msScrollChaining', T>;
  /**
   * 兼容属性 -ms-scroll-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版滚动区域的水平和垂直边界。
   *
   * @default:'-ms-scroll-limit-x-min: 0；-ms-scroll-limit-y-min: 0；-ms-scroll-limit-x-max: auto；-ms-scroll-limit-y-max: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit
   */
  msScrollLimit?: CssDeclarationValue<'msScrollLimit', T>;
  /**
   * 兼容属性 -ms-scroll-limit-x-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大水平位置。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-max
   */
  msScrollLimitXMax?: CssDeclarationValue<'msScrollLimitXMax', T>;
  /**
   * 兼容属性 -ms-scroll-limit-x-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小水平位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-min
   */
  msScrollLimitXMin?: CssDeclarationValue<'msScrollLimitXMin', T>;
  /**
   * 兼容属性 -ms-scroll-limit-y-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大垂直位置。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-max
   */
  msScrollLimitYMax?: CssDeclarationValue<'msScrollLimitYMax', T>;
  /**
   * 兼容属性 -ms-scroll-limit-y-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小垂直位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-min
   */
  msScrollLimitYMin?: CssDeclarationValue<'msScrollLimitYMin', T>;
  /**
   * 兼容属性 -ms-scroll-rails；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控滚动是否锁定主要滚动轴。
   *
   * @default:'railed'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-rails
   */
  msScrollRails?: CssDeclarationValue<'msScrollRails', T>;
  /**
   * 兼容属性 -ms-scroll-snap-points-x；优先参考标准属性及浏览器支持范围。
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-x
   */
  msScrollSnapPointsX?: CssDeclarationValue<'msScrollSnapPointsX', T>;
  /**
   * 兼容属性 -ms-scroll-snap-points-y；优先参考标准属性及浏览器支持范围。
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-y
   */
  msScrollSnapPointsY?: CssDeclarationValue<'msScrollSnapPointsY', T>;
  /**
   * 兼容属性 -ms-scroll-snap-type；优先参考标准属性及浏览器支持范围。
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-type
   */
  msScrollSnapType?: CssDeclarationValue<'msScrollSnapType', T>;
  /**
   * 兼容属性 -ms-scroll-snap-x；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版水平滚动吸附方式和位置。
   *
   * @default:'-ms-scroll-snap-type: none；-ms-scroll-snap-points-x: snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-x
   */
  msScrollSnapX?: CssDeclarationValue<'msScrollSnapX', T>;
  /**
   * 兼容属性 -ms-scroll-snap-y；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版垂直滚动吸附方式和位置。
   *
   * @default:'-ms-scroll-snap-type: none；-ms-scroll-snap-points-y: snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-y
   */
  msScrollSnapY?: CssDeclarationValue<'msScrollSnapY', T>;
  /**
   * 兼容属性 -ms-scroll-translation；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 环境中的滚动位移呈现方式。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-translation
   */
  msScrollTranslation?: CssDeclarationValue<'msScrollTranslation', T>;
  /**
   * 兼容属性 -ms-text-autospace；优先参考标准属性及浏览器支持范围。
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  msTextAutospace?: CssDeclarationValue<'msTextAutospace', T>;
  /**
   * 兼容属性 -ms-text-combine-horizontal；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-combine-horizontal
   */
  msTextCombineHorizontal?: CssDeclarationValue<'msTextCombineHorizontal', T>;
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
   * @default:'clip'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-overflow
   */
  msTextOverflow?: CssDeclarationValue<'msTextOverflow', T>;
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
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  msTouchAction?: CssDeclarationValue<'msTouchAction', T>;
  /**
   * 兼容属性 -ms-touch-select；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控文字选择的交互方式。
   *
   * @default:'grippers'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-select
   */
  msTouchSelect?: CssDeclarationValue<'msTouchSelect', T>;
  /**
   * 兼容属性 -ms-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform
   */
  msTransform?: CssDeclarationValue<'msTransform', T>;
  /**
   * 兼容属性 -ms-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  msTransformOrigin?: CssDeclarationValue<'msTransformOrigin', T>;
  /**
   * 兼容属性 -ms-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   *
   * @default:'transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  msTransition?: CssDeclarationValue<'msTransition', T>;
  /**
   * 兼容属性 -ms-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-delay
   */
  msTransitionDelay?: CssDeclarationValue<'msTransitionDelay', T>;
  /**
   * 兼容属性 -ms-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-duration
   */
  msTransitionDuration?: CssDeclarationValue<'msTransitionDuration', T>;
  /**
   * 兼容属性 -ms-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-property
   */
  msTransitionProperty?: CssDeclarationValue<'msTransitionProperty', T>;
  /**
   * 兼容属性 -ms-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  msTransitionTimingFunction?: CssDeclarationValue<'msTransitionTimingFunction', T>;
  /**
   * 兼容属性 -ms-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * @default:'text'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-user-select
   */
  msUserSelect?: CssDeclarationValue<'msUserSelect', T>;
  /**
   * 兼容属性 -ms-word-break；优先参考标准属性及浏览器支持范围。
   * 设置单词内部或文字之间的断行规则。
   *
   * 按字符和语言控制断行。仅需避免超长单词溢出时，通常先考虑 overflow-wrap。
   *
   * 常用值：`normal`、`break-all`、`keep-all`。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-word-break
   */
  msWordBreak?: CssDeclarationValue<'msWordBreak', T>;
  /**
   * 兼容属性 -ms-wrap-flow；优先参考标准属性及浏览器支持范围。
   * 控制旧版排斥形状周围的内容环绕方向。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  msWrapFlow?: CssDeclarationValue<'msWrapFlow', T>;
  /**
   * 兼容属性 -ms-wrap-margin；优先参考标准属性及浏览器支持范围。
   * 设置旧版排斥形状与环绕内容之间的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-margin
   */
  msWrapMargin?: CssDeclarationValue<'msWrapMargin', T>;
  /**
   * 兼容属性 -ms-wrap-through；优先参考标准属性及浏览器支持范围。
   * 控制旧版元素是否参与排斥形状的内容环绕。
   *
   * @default:'wrap'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-through
   */
  msWrapThrough?: CssDeclarationValue<'msWrapThrough', T>;
  /**
   * 兼容属性 -ms-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * @default:'horizontal-tb'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  msWritingMode?: CssDeclarationValue<'msWritingMode', T>;
  /**
   * 兼容属性 -o-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * @default:'animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  OAnimation?: CssDeclarationValue<'OAnimation', T>;
  /**
   * 兼容属性 -o-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * @default:'0s'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-delay
   */
  OAnimationDelay?: CssDeclarationValue<'OAnimationDelay', T>;
  /**
   * 兼容属性 -o-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * @default:'normal'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-direction
   */
  OAnimationDirection?: CssDeclarationValue<'OAnimationDirection', T>;
  /**
   * 兼容属性 -o-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-duration
   */
  OAnimationDuration?: CssDeclarationValue<'OAnimationDuration', T>;
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
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-fill-mode
   */
  OAnimationFillMode?: CssDeclarationValue<'OAnimationFillMode', T>;
  /**
   * 兼容属性 -o-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-iteration-count
   */
  OAnimationIterationCount?: CssDeclarationValue<'OAnimationIterationCount', T>;
  /**
   * 兼容属性 -o-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-name
   */
  OAnimationName?: CssDeclarationValue<'OAnimationName', T>;
  /**
   * 兼容属性 -o-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * @default:'running'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-play-state
   */
  OAnimationPlayState?: CssDeclarationValue<'OAnimationPlayState', T>;
  /**
   * 兼容属性 -o-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  OAnimationTimingFunction?: CssDeclarationValue<'OAnimationTimingFunction', T>;
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
   * @default:'auto auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-background-size
   */
  OBackgroundSize?: CssDeclarationValue<'OBackgroundSize', T>;
  /**
   * 兼容属性 -o-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * @default:'border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-border-image
   */
  OBorderImage?: CssDeclarationValue<'OBorderImage', T>;
  /**
   * 兼容属性 offset-block；优先参考标准属性 insetBlock及浏览器支持范围。
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   *
   * @default:'inset-block-start: auto；inset-block-end: auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block
   */
  offsetBlock?: CssDeclarationValue<'offsetBlock', T>;
  /**
   * 兼容属性 offset-block-end；优先参考标准属性 insetBlockEnd及浏览器支持范围。
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block-end
   */
  offsetBlockEnd?: CssDeclarationValue<'offsetBlockEnd', T>;
  /**
   * 兼容属性 offset-block-start；优先参考标准属性 insetBlockStart及浏览器支持范围。
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block-start
   */
  offsetBlockStart?: CssDeclarationValue<'offsetBlockStart', T>;
  /**
   * 兼容属性 offset-inline；优先参考标准属性 insetInline及浏览器支持范围。
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   *
   * @default:'inset-inline-start: auto；inset-inline-end: auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline
   */
  offsetInline?: CssDeclarationValue<'offsetInline', T>;
  /**
   * 兼容属性 offset-inline-end；优先参考标准属性 insetInlineEnd及浏览器支持范围。
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline-end
   */
  offsetInlineEnd?: CssDeclarationValue<'offsetInlineEnd', T>;
  /**
   * 兼容属性 offset-inline-start；优先参考标准属性 insetInlineStart及浏览器支持范围。
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline-start
   */
  offsetInlineStart?: CssDeclarationValue<'offsetInlineStart', T>;
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
   * @default:'fill'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-fit
   */
  OObjectFit?: CssDeclarationValue<'OObjectFit', T>;
  /**
   * 兼容属性 -o-object-position；优先参考标准属性及浏览器支持范围。
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * @default:'50% 50%'
   * @extend:'是'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-position
   */
  OObjectPosition?: CssDeclarationValue<'OObjectPosition', T>;
  /**
   * 兼容属性 -o-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * @default:'8'
   * @extend:'是'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-tab-size
   */
  OTabSize?: CssDeclarationValue<'OTabSize', T>;
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
   * @default:'clip'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-text-overflow
   */
  OTextOverflow?: CssDeclarationValue<'OTextOverflow', T>;
  /**
   * 兼容属性 -o-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform
   */
  OTransform?: CssDeclarationValue<'OTransform', T>;
  /**
   * 兼容属性 -o-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform-origin
   */
  OTransformOrigin?: CssDeclarationValue<'OTransformOrigin', T>;
  /**
   * 兼容属性 -o-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   *
   * @default:'transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  OTransition?: CssDeclarationValue<'OTransition', T>;
  /**
   * 兼容属性 -o-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-delay
   */
  OTransitionDelay?: CssDeclarationValue<'OTransitionDelay', T>;
  /**
   * 兼容属性 -o-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-duration
   */
  OTransitionDuration?: CssDeclarationValue<'OTransitionDuration', T>;
  /**
   * 兼容属性 -o-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-property
   */
  OTransitionProperty?: CssDeclarationValue<'OTransitionProperty', T>;
  /**
   * 兼容属性 -o-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  OTransitionTimingFunction?: CssDeclarationValue<'OTransitionTimingFunction', T>;
  /**
   * 兼容属性 page-break-after；优先参考标准属性 breakAfter及浏览器支持范围。
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  pageBreakAfter?: CssDeclarationValue<'pageBreakAfter', T>;
  /**
   * 兼容属性 page-break-before；优先参考标准属性 breakBefore及浏览器支持范围。
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  pageBreakBefore?: CssDeclarationValue<'pageBreakBefore', T>;
  /**
   * 兼容属性 page-break-inside；优先参考标准属性 breakInside及浏览器支持范围。
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-inside
   */
  pageBreakInside?: CssDeclarationValue<'pageBreakInside', T>;
  /**
   * 兼容属性 position-try-options；优先参考标准属性 positionTryFallbacks及浏览器支持范围。
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  positionTryOptions?: CssDeclarationValue<'positionTryOptions', T>;
  /**
   * 指定旧版滚动子项的吸附坐标，现代布局使用 scroll-snap-align。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  scrollSnapCoordinate?: CssDeclarationValue<'scrollSnapCoordinate', T>;
  /**
   * 指定旧版滚动容器中吸附位置对齐的目标坐标。
   *
   * @default:'0px 0px'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  scrollSnapDestination?: CssDeclarationValue<'scrollSnapDestination', T>;
  /**
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-x
   */
  scrollSnapPointsX?: CssDeclarationValue<'scrollSnapPointsX', T>;
  /**
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-y
   */
  scrollSnapPointsY?: CssDeclarationValue<'scrollSnapPointsY', T>;
  /**
   * 控制旧版水平滚动吸附的强制程度。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-x
   */
  scrollSnapTypeX?: CssDeclarationValue<'scrollSnapTypeX', T>;
  /**
   * 控制旧版垂直滚动吸附的强制程度。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-y
   */
  scrollSnapTypeY?: CssDeclarationValue<'scrollSnapTypeY', T>;
  /**
   * 兼容属性 -webkit-align-content；优先参考标准属性及浏览器支持范围。
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  WebkitAlignContent?: CssDeclarationValue<'WebkitAlignContent', T>;
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
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-items
   */
  WebkitAlignItems?: CssDeclarationValue<'WebkitAlignItems', T>;
  /**
   * 兼容属性 -webkit-align-self；优先参考标准属性及浏览器支持范围。
   * 单独覆盖一个项目的交叉轴或块轴对齐方式。
   *
   * 适用场景：只改变某一个项目的交叉轴或块轴对齐，不改变同组其他项目。
   *
   * 常用值：`auto`、`stretch`、`baseline`。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  WebkitAlignSelf?: CssDeclarationValue<'WebkitAlignSelf', T>;
  /**
   * 兼容属性 -webkit-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * @default:'animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  WebkitAnimation?: CssDeclarationValue<'WebkitAnimation', T>;
  /**
   * 兼容属性 -webkit-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-delay
   */
  WebkitAnimationDelay?: CssDeclarationValue<'WebkitAnimationDelay', T>;
  /**
   * 兼容属性 -webkit-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  WebkitAnimationDirection?: CssDeclarationValue<'WebkitAnimationDirection', T>;
  /**
   * 兼容属性 -webkit-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-duration
   */
  WebkitAnimationDuration?: CssDeclarationValue<'WebkitAnimationDuration', T>;
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
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-fill-mode
   */
  WebkitAnimationFillMode?: CssDeclarationValue<'WebkitAnimationFillMode', T>;
  /**
   * 兼容属性 -webkit-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * @default:'1'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-iteration-count
   */
  WebkitAnimationIterationCount?: CssDeclarationValue<'WebkitAnimationIterationCount', T>;
  /**
   * 兼容属性 -webkit-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-name
   */
  WebkitAnimationName?: CssDeclarationValue<'WebkitAnimationName', T>;
  /**
   * 兼容属性 -webkit-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * @default:'running'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-play-state
   */
  WebkitAnimationPlayState?: CssDeclarationValue<'WebkitAnimationPlayState', T>;
  /**
   * 兼容属性 -webkit-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  WebkitAnimationTimingFunction?: CssDeclarationValue<'WebkitAnimationTimingFunction', T>;
  /**
   * 兼容属性 -webkit-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * @default:'none（浏览器默认样式表可能覆盖）'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  WebkitAppearance?: CssDeclarationValue<'WebkitAppearance', T>;
  /**
   * 兼容属性 -webkit-backdrop-filter；优先参考标准属性及浏览器支持范围。
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backdrop-filter
   */
  WebkitBackdropFilter?: CssDeclarationValue<'WebkitBackdropFilter', T>;
  /**
   * 兼容属性 -webkit-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backface-visibility
   */
  WebkitBackfaceVisibility?: CssDeclarationValue<'WebkitBackfaceVisibility', T>;
  /**
   * 兼容属性 -webkit-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  WebkitBackgroundClip?: CssDeclarationValue<'WebkitBackgroundClip', T>;
  /**
   * 兼容属性 -webkit-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * @default:'padding-box'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  WebkitBackgroundOrigin?: CssDeclarationValue<'WebkitBackgroundOrigin', T>;
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
   * @default:'auto auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-size
   */
  WebkitBackgroundSize?: CssDeclarationValue<'WebkitBackgroundSize', T>;
  /**
   * 兼容属性 -webkit-border-before；优先参考标准属性 borderBlockStart及浏览器支持范围。
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before
   */
  WebkitBorderBefore?: CssDeclarationValue<'WebkitBorderBefore', T>;
  /**
   * 兼容属性 -webkit-border-before-color；优先参考标准属性 borderBlockStartColor及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-color
   */
  WebkitBorderBeforeColor?: CssDeclarationValue<'WebkitBorderBeforeColor', T>;
  /**
   * 兼容属性 -webkit-border-before-style；优先参考标准属性 borderBlockStartStyle及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框线型。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  WebkitBorderBeforeStyle?: CssDeclarationValue<'WebkitBorderBeforeStyle', T>;
  /**
   * 兼容属性 -webkit-border-before-width；优先参考标准属性 borderBlockStartWidth及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  WebkitBorderBeforeWidth?: CssDeclarationValue<'WebkitBorderBeforeWidth', T>;
  /**
   * 兼容属性 -webkit-border-bottom-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-left-radius
   */
  WebkitBorderBottomLeftRadius?: CssDeclarationValue<'WebkitBorderBottomLeftRadius', T>;
  /**
   * 兼容属性 -webkit-border-bottom-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-right-radius
   */
  WebkitBorderBottomRightRadius?: CssDeclarationValue<'WebkitBorderBottomRightRadius', T>;
  /**
   * 兼容属性 -webkit-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * @default:'border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  WebkitBorderImage?: CssDeclarationValue<'WebkitBorderImage', T>;
  /**
   * 兼容属性 -webkit-border-image-slice；优先参考标准属性及浏览器支持范围。
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * @default:'100%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image-slice
   */
  WebkitBorderImageSlice?: CssDeclarationValue<'WebkitBorderImageSlice', T>;
  /**
   * 兼容属性 -webkit-border-radius；优先参考标准属性及浏览器支持范围。
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   *
   * @default:'border-top-left-radius: 0；border-top-right-radius: 0；border-bottom-right-radius: 0；border-bottom-left-radius: 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-radius
   */
  WebkitBorderRadius?: CssDeclarationValue<'WebkitBorderRadius', T>;
  /**
   * 兼容属性 -webkit-border-top-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-left-radius
   */
  WebkitBorderTopLeftRadius?: CssDeclarationValue<'WebkitBorderTopLeftRadius', T>;
  /**
   * 兼容属性 -webkit-border-top-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-right-radius
   */
  WebkitBorderTopRightRadius?: CssDeclarationValue<'WebkitBorderTopRightRadius', T>;
  /**
   * 兼容属性 -webkit-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * @default:'stretch'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-align
   */
  WebkitBoxAlign?: CssDeclarationValue<'WebkitBoxAlign', T>;
  /**
   * 兼容属性 -webkit-box-decoration-break；优先参考标准属性及浏览器支持范围。
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * @default:'slice'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-decoration-break
   */
  WebkitBoxDecorationBreak?: CssDeclarationValue<'WebkitBoxDecorationBreak', T>;
  /**
   * 兼容属性 -webkit-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * @default:'normal'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-direction
   */
  WebkitBoxDirection?: CssDeclarationValue<'WebkitBoxDirection', T>;
  /**
   * 兼容属性 -webkit-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-flex
   */
  WebkitBoxFlex?: CssDeclarationValue<'WebkitBoxFlex', T>;
  /**
   * 兼容属性 -webkit-box-flex-group；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-flex-group
   */
  WebkitBoxFlexGroup?: CssDeclarationValue<'WebkitBoxFlexGroup', T>;
  /**
   * 兼容属性 -webkit-box-lines；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * @default:'single'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-lines
   */
  WebkitBoxLines?: CssDeclarationValue<'WebkitBoxLines', T>;
  /**
   * 兼容属性 -webkit-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-ordinal-group
   */
  WebkitBoxOrdinalGroup?: CssDeclarationValue<'WebkitBoxOrdinalGroup', T>;
  /**
   * 用于多行省略的兼容组合：与 display: -webkit-box（或 -webkit-inline-box）、-webkit-line-clamp 和 overflow: hidden 配合。此组合由 CSS Overflow 的兼容条款保留，不用于常规弹性布局。
   *
   * 指定旧版弹性盒的排列方向；仅为多行截断兼容保留，常规布局请使用 Flex/Grid。
   *
   * @default:'inline-axis'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   * @see https://drafts.csswg.org/css-overflow-4/#webkit-line-clamp
   */
  WebkitBoxOrient?: CssDeclarationValue<'WebkitBoxOrient', T>;
  /**
   * 兼容属性 -webkit-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * @default:'start'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-pack
   */
  WebkitBoxPack?: CssDeclarationValue<'WebkitBoxPack', T>;
  /**
   * 兼容属性 -webkit-box-reflect；优先参考标准属性及浏览器支持范围。
   * 在指定方向生成元素的镜像，并可设置镜像间距和遮罩。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  WebkitBoxReflect?: CssDeclarationValue<'WebkitBoxReflect', T>;
  /**
   * 兼容属性 -webkit-box-shadow；优先参考标准属性及浏览器支持范围。
   * 设置盒子的外部或内部阴影，可叠加多层。
   *
   * 阴影不占布局空间，可用逗号叠加；与 border/outline 的用途和绘制位置不同。
   *
   * 适用场景：浮层层次、卡片边缘或内凹效果。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-shadow
   */
  WebkitBoxShadow?: CssDeclarationValue<'WebkitBoxShadow', T>;
  /**
   * 兼容属性 -webkit-box-sizing；优先参考标准属性及浏览器支持范围。
   * 决定 width、height 等尺寸是否包含内边距和边框。
   *
   * 适用场景：确定组件声明宽高时是否把 padding 和 border 算在尺寸内。
   *
   * 常用值：`content-box`、`border-box`。
   *
   * @default:'content-box'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-sizing
   */
  WebkitBoxSizing?: CssDeclarationValue<'WebkitBoxSizing', T>;
  /**
   * 兼容属性 -webkit-clip-path；优先参考标准属性及浏览器支持范围。
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  WebkitClipPath?: CssDeclarationValue<'WebkitClipPath', T>;
  /**
   * 兼容属性 -webkit-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-count
   */
  WebkitColumnCount?: CssDeclarationValue<'WebkitColumnCount', T>;
  /**
   * 兼容属性 -webkit-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * @default:'balance'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-fill
   */
  WebkitColumnFill?: CssDeclarationValue<'WebkitColumnFill', T>;
  /**
   * 兼容属性 -webkit-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * @default:'column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule
   */
  WebkitColumnRule?: CssDeclarationValue<'WebkitColumnRule', T>;
  /**
   * 兼容属性 -webkit-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-color
   */
  WebkitColumnRuleColor?: CssDeclarationValue<'WebkitColumnRuleColor', T>;
  /**
   * 兼容属性 -webkit-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  WebkitColumnRuleStyle?: CssDeclarationValue<'WebkitColumnRuleStyle', T>;
  /**
   * 兼容属性 -webkit-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  WebkitColumnRuleWidth?: CssDeclarationValue<'WebkitColumnRuleWidth', T>;
  /**
   * 兼容属性 -webkit-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * @default:'column-width: auto；column-count: auto；column-height: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-columns
   */
  WebkitColumns?: CssDeclarationValue<'WebkitColumns', T>;
  /**
   * 兼容属性 -webkit-column-span；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-span
   */
  WebkitColumnSpan?: CssDeclarationValue<'WebkitColumnSpan', T>;
  /**
   * 兼容属性 -webkit-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-width
   */
  WebkitColumnWidth?: CssDeclarationValue<'WebkitColumnWidth', T>;
  /**
   * 兼容属性 -webkit-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-filter
   */
  WebkitFilter?: CssDeclarationValue<'WebkitFilter', T>;
  /**
   * 兼容属性 -webkit-flex；优先参考标准属性及浏览器支持范围。
   * 集中设置弹性项目的增长系数、收缩系数和基础尺寸。
   *
   * 依次对应 flex-grow、flex-shrink、flex-basis。作用于弹性项目，应先由父容器建立 Flex 布局。
   *
   * 适用场景：分配弹性布局中的剩余空间，或让项目保持自身尺寸。
   *
   * 常用值：`auto`、`none`。
   *
   * @default:'flex-grow: 0；flex-shrink: 1；flex-basis: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  WebkitFlex?: CssDeclarationValue<'WebkitFlex', T>;
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
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  WebkitFlexBasis?: CssDeclarationValue<'WebkitFlexBasis', T>;
  /**
   * 兼容属性 -webkit-flex-direction；优先参考标准属性及浏览器支持范围。
   * 设置弹性容器的主轴方向及项目排列方向。
   *
   * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
   *
   * 常用值：`row`、`column`、`row-reverse`、`column-reverse`。
   *
   * @default:'row'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-direction
   */
  WebkitFlexDirection?: CssDeclarationValue<'WebkitFlexDirection', T>;
  /**
   * 兼容属性 -webkit-flex-flow；优先参考标准属性及浏览器支持范围。
   * 同时设置弹性布局的主轴方向和换行方式。
   *
   * @default:'flex-direction: row；flex-wrap: nowrap'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  WebkitFlexFlow?: CssDeclarationValue<'WebkitFlexFlow', T>;
  /**
   * 兼容属性 -webkit-flex-grow；优先参考标准属性及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * 数值是分配正剩余空间的相对权重，不是最终宽度百分比。只有容器存在剩余空间时才发挥作用。
   *
   * 适用场景：让主内容区填充工具栏或行布局的剩余空间。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-grow
   */
  WebkitFlexGrow?: CssDeclarationValue<'WebkitFlexGrow', T>;
  /**
   * 兼容属性 -webkit-flex-shrink；优先参考标准属性及浏览器支持范围。
   * 设置弹性项目空间不足时的收缩系数。
   *
   * 实际收缩还与 flex-basis 成比例；自动最小尺寸可能阻止项目继续缩小。
   *
   * 适用场景：控制空间不足时是否允许缩小；设置为 0 可避免图标或固定控件收缩。
   *
   * @default:'1'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-shrink
   */
  WebkitFlexShrink?: CssDeclarationValue<'WebkitFlexShrink', T>;
  /**
   * 兼容属性 -webkit-flex-wrap；优先参考标准属性及浏览器支持范围。
   * 设置弹性项目是否换行，以及多行的排列方向。
   *
   * 适用场景：标签、按钮等项目不足一行时允许分行。
   *
   * 常用值：`nowrap`、`wrap`、`wrap-reverse`。
   *
   * @default:'nowrap'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-wrap
   */
  WebkitFlexWrap?: CssDeclarationValue<'WebkitFlexWrap', T>;
  /**
   * 兼容属性 -webkit-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-feature-settings
   */
  WebkitFontFeatureSettings?: CssDeclarationValue<'WebkitFontFeatureSettings', T>;
  /**
   * 兼容属性 -webkit-font-kerning；优先参考标准属性及浏览器支持范围。
   * 设置是否应用字体提供的字偶间距调整。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-kerning
   */
  WebkitFontKerning?: CssDeclarationValue<'WebkitFontKerning', T>;
  /**
   * 兼容属性 -webkit-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 WebKit 平台的字体平滑方式；不是通用的跨浏览器排版开关。
   *
   * @default:'auto'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  WebkitFontSmoothing?: CssDeclarationValue<'WebkitFontSmoothing', T>;
  /**
   * 兼容属性 -webkit-font-variant-ligatures；优先参考标准属性及浏览器支持范围。
   * 设置字体连字的启用方式。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  WebkitFontVariantLigatures?: CssDeclarationValue<'WebkitFontVariantLigatures', T>;
  /**
   * 兼容属性 -webkit-hyphenate-character；优先参考标准属性及浏览器支持范围。
   * 设置自动断词时插入的断字符号。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphenate-character
   */
  WebkitHyphenateCharacter?: CssDeclarationValue<'WebkitHyphenateCharacter', T>;
  /**
   * 兼容属性 -webkit-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphens
   */
  WebkitHyphens?: CssDeclarationValue<'WebkitHyphens', T>;
  /**
   * 兼容属性 -webkit-initial-letter；优先参考标准属性及浏览器支持范围。
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-initial-letter
   */
  WebkitInitialLetter?: CssDeclarationValue<'WebkitInitialLetter', T>;
  /**
   * 兼容属性 -webkit-justify-content；优先参考标准属性及浏览器支持范围。
   * 分配布局主轴或行内轴的剩余空间，控制内容整体对齐。
   *
   * Flex 中沿主轴分配空间，Grid 中沿行内轴对齐网格整体。没有剩余空间时，空间分配效果可能不明显。
   *
   * 常用值：`center`、`space-between`、`space-around`、`space-evenly`。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-justify-content
   */
  WebkitJustifyContent?: CssDeclarationValue<'WebkitJustifyContent', T>;
  /**
   * 兼容属性 -webkit-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  WebkitLineBreak?: CssDeclarationValue<'WebkitLineBreak', T>;
  /**
   * 限制多行文本显示的行数；与 display: -webkit-box、WebkitBoxOrient('vertical') 和 overflow: hidden 配合，不删除文本内容。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-clamp
   */
  WebkitLineClamp?: CssDeclarationValue<'WebkitLineClamp', T>;
  /**
   * 兼容属性 -webkit-logical-height；优先参考标准属性 blockSize及浏览器支持范围。
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  WebkitLogicalHeight?: CssDeclarationValue<'WebkitLogicalHeight', T>;
  /**
   * 兼容属性 -webkit-logical-width；优先参考标准属性 inlineSize及浏览器支持范围。
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  WebkitLogicalWidth?: CssDeclarationValue<'WebkitLogicalWidth', T>;
  /**
   * 兼容属性 -webkit-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-end
   */
  WebkitMarginEnd?: CssDeclarationValue<'WebkitMarginEnd', T>;
  /**
   * 兼容属性 -webkit-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-start
   */
  WebkitMarginStart?: CssDeclarationValue<'WebkitMarginStart', T>;
  /**
   * 兼容属性 -webkit-mask；优先参考标准属性及浏览器支持范围。
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   *
   * @default:'-webkit-mask-image: none；-webkit-mask-repeat: repeat；-webkit-mask-attachment: scroll；-webkit-mask-position: 0% 0%；-webkit-mask-origin: padding；-webkit-mask-clip: border'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  WebkitMask?: CssDeclarationValue<'WebkitMask', T>;
  /**
   * 兼容属性 -webkit-mask-attachment；优先参考标准属性及浏览器支持范围。
   * 指定旧版遮罩图像是否随内容滚动。
   *
   * @default:'scroll'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  WebkitMaskAttachment?: CssDeclarationValue<'WebkitMaskAttachment', T>;
  /**
   * 兼容属性 -webkit-mask-box-image；优先参考标准属性 maskBorder及浏览器支持范围。
   * 设置基于九宫格图像切片的边框遮罩。
   *
   * @default:'mask-border-mode: alpha；mask-border-outset: 0；mask-border-repeat: stretch；mask-border-slice: 0；mask-border-source: none；mask-border-width: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  WebkitMaskBoxImage?: CssDeclarationValue<'WebkitMaskBoxImage', T>;
  /**
   * 兼容属性 -webkit-mask-box-image-outset；优先参考标准属性 maskBorderOutset及浏览器支持范围。
   * 设置边框遮罩超出边框盒的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-outset
   */
  WebkitMaskBoxImageOutset?: CssDeclarationValue<'WebkitMaskBoxImageOutset', T>;
  /**
   * 兼容属性 -webkit-mask-box-image-repeat；优先参考标准属性 maskBorderRepeat及浏览器支持范围。
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * @default:'stretch'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  WebkitMaskBoxImageRepeat?: CssDeclarationValue<'WebkitMaskBoxImageRepeat', T>;
  /**
   * 兼容属性 -webkit-mask-box-image-slice；优先参考标准属性 maskBorderSlice及浏览器支持范围。
   * 设置边框遮罩图像的切片位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-slice
   */
  WebkitMaskBoxImageSlice?: CssDeclarationValue<'WebkitMaskBoxImageSlice', T>;
  /**
   * 兼容属性 -webkit-mask-box-image-source；优先参考标准属性 maskBorderSource及浏览器支持范围。
   * 设置边框遮罩的源图像。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-source
   */
  WebkitMaskBoxImageSource?: CssDeclarationValue<'WebkitMaskBoxImageSource', T>;
  /**
   * 兼容属性 -webkit-mask-box-image-width；优先参考标准属性 maskBorderWidth及浏览器支持范围。
   * 设置边框遮罩各边的宽度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-width
   */
  WebkitMaskBoxImageWidth?: CssDeclarationValue<'WebkitMaskBoxImageWidth', T>;
  /**
   * 兼容属性 -webkit-mask-clip；优先参考标准属性及浏览器支持范围。
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * @default:'border'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  WebkitMaskClip?: CssDeclarationValue<'WebkitMaskClip', T>;
  /**
   * 兼容属性 -webkit-mask-composite；优先参考标准属性及浏览器支持范围。
   * 设置多个遮罩图层之间的合成运算。
   *
   * @default:'source-over'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  WebkitMaskComposite?: CssDeclarationValue<'WebkitMaskComposite', T>;
  /**
   * 兼容属性 -webkit-mask-image；优先参考标准属性及浏览器支持范围。
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-image
   */
  WebkitMaskImage?: CssDeclarationValue<'WebkitMaskImage', T>;
  /**
   * 兼容属性 -webkit-mask-origin；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像定位所依据的盒子。
   *
   * @default:'padding'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  WebkitMaskOrigin?: CssDeclarationValue<'WebkitMaskOrigin', T>;
  /**
   * 兼容属性 -webkit-mask-position；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像在定位区域中的位置。
   *
   * @default:'0% 0%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  WebkitMaskPosition?: CssDeclarationValue<'WebkitMaskPosition', T>;
  /**
   * 兼容属性 -webkit-mask-position-x；优先参考标准属性 backgroundPositionX及浏览器支持范围。
   * 设置遮罩图像的水平位置，可使用长度、百分比或位置关键字。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  WebkitMaskPositionX?: CssDeclarationValue<'WebkitMaskPositionX', T>;
  /**
   * 兼容属性 -webkit-mask-position-y；优先参考标准属性 backgroundPositionY及浏览器支持范围。
   * 设置遮罩图像的垂直位置，可使用长度、百分比或位置关键字。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  WebkitMaskPositionY?: CssDeclarationValue<'WebkitMaskPositionY', T>;
  /**
   * 兼容属性 -webkit-mask-repeat；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  WebkitMaskRepeat?: CssDeclarationValue<'WebkitMaskRepeat', T>;
  /**
   * 兼容属性 -webkit-mask-repeat-x；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在水平方向的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  WebkitMaskRepeatX?: CssDeclarationValue<'WebkitMaskRepeatX', T>;
  /**
   * 兼容属性 -webkit-mask-repeat-y；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在垂直方向的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  WebkitMaskRepeatY?: CssDeclarationValue<'WebkitMaskRepeatY', T>;
  /**
   * 兼容属性 -webkit-mask-size；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的尺寸。
   *
   * @default:'auto auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-size
   */
  WebkitMaskSize?: CssDeclarationValue<'WebkitMaskSize', T>;
  /**
   * 兼容属性 -webkit-max-inline-size；优先参考标准属性及浏览器支持范围。
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  WebkitMaxInlineSize?: CssDeclarationValue<'WebkitMaxInlineSize', T>;
  /**
   * 兼容属性 -webkit-order；优先参考标准属性及浏览器支持范围。
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-order
   */
  WebkitOrder?: CssDeclarationValue<'WebkitOrder', T>;
  /**
   * 兼容属性 -webkit-overflow-scrolling；优先参考标准属性及浏览器支持范围。
   * 选择特定旧版 WebKit 触控环境的滚动方式，包括惯性滚动。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-overflow-scrolling
   */
  WebkitOverflowScrolling?: CssDeclarationValue<'WebkitOverflowScrolling', T>;
  /**
   * 兼容属性 -webkit-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-end
   */
  WebkitPaddingEnd?: CssDeclarationValue<'WebkitPaddingEnd', T>;
  /**
   * 兼容属性 -webkit-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-start
   */
  WebkitPaddingStart?: CssDeclarationValue<'WebkitPaddingStart', T>;
  /**
   * 兼容属性 -webkit-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective
   */
  WebkitPerspective?: CssDeclarationValue<'WebkitPerspective', T>;
  /**
   * 兼容属性 -webkit-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * @default:'50% 50%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  WebkitPerspectiveOrigin?: CssDeclarationValue<'WebkitPerspectiveOrigin', T>;
  /**
   * 兼容属性 -webkit-print-color-adjust；优先参考标准属性及浏览器支持范围。
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * @default:'economy'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-print-color-adjust
   */
  WebkitPrintColorAdjust?: CssDeclarationValue<'WebkitPrintColorAdjust', T>;
  /**
   * 兼容属性 -webkit-ruby-position；优先参考标准属性及浏览器支持范围。
   * 设置注音文字相对于基底文字的位置。
   *
   * @default:'alternate'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  WebkitRubyPosition?: CssDeclarationValue<'WebkitRubyPosition', T>;
  /**
   * 兼容属性 -webkit-scroll-snap-type；优先参考标准属性及浏览器支持范围。
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-scroll-snap-type
   */
  WebkitScrollSnapType?: CssDeclarationValue<'WebkitScrollSnapType', T>;
  /**
   * 兼容属性 -webkit-shape-margin；优先参考标准属性及浏览器支持范围。
   * 设置文字环绕形状之外的额外间距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-shape-margin
   */
  WebkitShapeMargin?: CssDeclarationValue<'WebkitShapeMargin', T>;
  /**
   * 兼容属性 -webkit-tap-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置 WebKit 触控点击链接或可交互区域时的高亮颜色。
   *
   * @default:'black'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-tap-highlight-color
   */
  WebkitTapHighlightColor?: CssDeclarationValue<'WebkitTapHighlightColor', T>;
  /**
   * 兼容属性 -webkit-text-combine；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-combine
   */
  WebkitTextCombine?: CssDeclarationValue<'WebkitTextCombine', T>;
  /**
   * 兼容属性 -webkit-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-color
   */
  WebkitTextDecorationColor?: CssDeclarationValue<'WebkitTextDecorationColor', T>;
  /**
   * 兼容属性 -webkit-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  WebkitTextDecorationLine?: CssDeclarationValue<'WebkitTextDecorationLine', T>;
  /**
   * 兼容属性 -webkit-text-decoration-skip；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * @default:'objects'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  WebkitTextDecorationSkip?: CssDeclarationValue<'WebkitTextDecorationSkip', T>;
  /**
   * 兼容属性 -webkit-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * @default:'solid'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  WebkitTextDecorationStyle?: CssDeclarationValue<'WebkitTextDecorationStyle', T>;
  /**
   * 兼容属性 -webkit-text-emphasis；优先参考标准属性及浏览器支持范围。
   * 同时设置文字着重号的样式和颜色。
   *
   * @default:'text-emphasis-style: none；text-emphasis-color: currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis
   */
  WebkitTextEmphasis?: CssDeclarationValue<'WebkitTextEmphasis', T>;
  /**
   * 兼容属性 -webkit-text-emphasis-color；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-color
   */
  WebkitTextEmphasisColor?: CssDeclarationValue<'WebkitTextEmphasisColor', T>;
  /**
   * 兼容属性 -webkit-text-emphasis-position；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号位于文字的哪一侧。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-position
   */
  WebkitTextEmphasisPosition?: CssDeclarationValue<'WebkitTextEmphasisPosition', T>;
  /**
   * 兼容属性 -webkit-text-emphasis-style；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号的形状和填充方式。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  WebkitTextEmphasisStyle?: CssDeclarationValue<'WebkitTextEmphasisStyle', T>;
  /**
   * 兼容属性 -webkit-text-fill-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形内部填充色，可独立于文字描边色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-fill-color
   */
  WebkitTextFillColor?: CssDeclarationValue<'WebkitTextFillColor', T>;
  /**
   * 兼容属性 -webkit-text-orientation；优先参考标准属性及浏览器支持范围。
   * 设置竖排模式下字符的方向。
   *
   * @default:'mixed'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  WebkitTextOrientation?: CssDeclarationValue<'WebkitTextOrientation', T>;
  /**
   * 兼容属性 -webkit-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * @default:'支持文本放大的移动浏览器为 auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-size-adjust
   */
  WebkitTextSizeAdjust?: CssDeclarationValue<'WebkitTextSizeAdjust', T>;
  /**
   * 兼容属性 -webkit-text-stroke；优先参考标准属性及浏览器支持范围。
   * 合并设置文字字形描边的宽度和颜色。
   *
   * @default:'-webkit-text-stroke-width: 0；-webkit-text-stroke-color: currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke
   */
  WebkitTextStroke?: CssDeclarationValue<'WebkitTextStroke', T>;
  /**
   * 兼容属性 -webkit-text-stroke-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-color
   */
  WebkitTextStrokeColor?: CssDeclarationValue<'WebkitTextStrokeColor', T>;
  /**
   * 兼容属性 -webkit-text-stroke-width；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边宽度。
   *
   * @default:'0'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-width
   */
  WebkitTextStrokeWidth?: CssDeclarationValue<'WebkitTextStrokeWidth', T>;
  /**
   * 兼容属性 -webkit-text-underline-position；优先参考标准属性及浏览器支持范围。
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  WebkitTextUnderlinePosition?: CssDeclarationValue<'WebkitTextUnderlinePosition', T>;
  /**
   * 兼容属性 -webkit-touch-callout；优先参考标准属性及浏览器支持范围。
   * 控制特定 WebKit 触控环境是否显示长按内容菜单。
   *
   * @default:'default'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-touch-callout
   */
  WebkitTouchCallout?: CssDeclarationValue<'WebkitTouchCallout', T>;
  /**
   * 兼容属性 -webkit-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform
   */
  WebkitTransform?: CssDeclarationValue<'WebkitTransform', T>;
  /**
   * 兼容属性 -webkit-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  WebkitTransformOrigin?: CssDeclarationValue<'WebkitTransformOrigin', T>;
  /**
   * 兼容属性 -webkit-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * @default:'flat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-style
   */
  WebkitTransformStyle?: CssDeclarationValue<'WebkitTransformStyle', T>;
  /**
   * 兼容属性 -webkit-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   *
   * @default:'transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  WebkitTransition?: CssDeclarationValue<'WebkitTransition', T>;
  /**
   * 兼容属性 -webkit-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-delay
   */
  WebkitTransitionDelay?: CssDeclarationValue<'WebkitTransitionDelay', T>;
  /**
   * 兼容属性 -webkit-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-duration
   */
  WebkitTransitionDuration?: CssDeclarationValue<'WebkitTransitionDuration', T>;
  /**
   * 兼容属性 -webkit-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-property
   */
  WebkitTransitionProperty?: CssDeclarationValue<'WebkitTransitionProperty', T>;
  /**
   * 兼容属性 -webkit-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  WebkitTransitionTimingFunction?: CssDeclarationValue<'WebkitTransitionTimingFunction', T>;
  /**
   * 兼容属性 -webkit-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * @default:'read-only'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  WebkitUserModify?: CssDeclarationValue<'WebkitUserModify', T>;
  /**
   * 兼容属性 -webkit-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-select
   */
  WebkitUserSelect?: CssDeclarationValue<'WebkitUserSelect', T>;
  /**
   * 兼容属性 -webkit-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * @default:'horizontal-tb'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  WebkitWritingMode?: CssDeclarationValue<'WebkitWritingMode', T>;
  /**
   * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。
   *
   * @default:'无独立的实际初始值'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  all?: CssDeclarationValue<'all', T>;
  /**
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * @default:'slice'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  boxDecorationBreak?: CssDeclarationValue<'boxDecorationBreak', T>;
  /**
   * 设置 SVG 圆或椭圆中心的横坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  cx?: CssDeclarationValue<'cx', T>;
  /**
   * 设置 SVG 圆或椭圆中心的纵坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  cy?: CssDeclarationValue<'cy', T>;
  /**
   * 设置 SVG path 元素的路径数据。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  d?: CssDeclarationValue<'d', T>;
  /**
   * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。
   *
   * @default:'fixed'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  fieldSizing?: CssDeclarationValue<'fieldSizing', T>;
  /**
   * 控制元素是否参与系统强制颜色模式的自动替换。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  forcedColorAdjust?: CssDeclarationValue<'forcedColorAdjust', T>;
  /**
   * 设置自动断词时插入的断字符号。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  hyphenateCharacter?: CssDeclarationValue<'hyphenateCharacter', T>;
  /**
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  hyphenateLimitChars?: CssDeclarationValue<'hyphenateLimitChars', T>;
  /**
   * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。
   *
   * @default:'numeric-only'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  interpolateSize?: CssDeclarationValue<'interpolateSize', T>;
  /**
   * 控制元素是否建立独立的层叠上下文，隔离混合效果。
   *
   * 适用场景：建立局部层叠边界，或限制混合模式影响范围。
   *
   * 常用值：`auto`、`isolate`。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
   */
  isolation?: CssDeclarationValue<'isolation', T>;
  /**
   * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。
   *
   * @default:'pack'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  masonryAutoFlow?: CssDeclarationValue<'masonryAutoFlow', T>;
  /**
   * 设置数学公式的嵌套深度，用于数学字号等排版计算。
   *
   * @default:'0'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  mathDepth?: CssDeclarationValue<'mathDepth', T>;
  /**
   * 控制数学上标采用正常还是压缩的垂直偏移。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  mathShift?: CssDeclarationValue<'mathShift', T>;
  /**
   * 设置数学公式采用正常还是紧凑排版。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  mathStyle?: CssDeclarationValue<'mathStyle', T>;
  /**
   * 设置运动路径的旧式简写；对应现代 offset 属性族。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  motion?: CssDeclarationValue<'motion', T>;
  /**
   * 设置沿运动路径行进距离的旧属性；对应 offset-distance。
   *
   * @default:'0'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-distance
   */
  motionDistance?: CssDeclarationValue<'motionDistance', T>;
  /**
   * 设置运动路径的旧属性；对应 offset-path。
   *
   * @default:'none'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  motionPath?: CssDeclarationValue<'motionPath', T>;
  /**
   * 设置运动路径旋转方式的旧属性；对应 offset-rotate。
   *
   * @default:'auto'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-rotation
   */
  motionRotation?: CssDeclarationValue<'motionRotation', T>;
  /**
   * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  overlay?: CssDeclarationValue<'overlay', T>;
  /**
   * 设置 SVG 圆的半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  r?: CssDeclarationValue<'r', T>;
  /**
   * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  rx?: CssDeclarationValue<'rx', T>;
  /**
   * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  ry?: CssDeclarationValue<'ry', T>;
  /**
   * 设置语音呈现时文字、数字和标点的朗读方式；使用前核对语音媒体支持。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  speakAs?: CssDeclarationValue<'speakAs', T>;
  /**
   * 设置描边颜色的扩展属性；常规 SVG 优先使用 stroke 并核对支持情况。
   *
   * @default:'transparent'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  strokeColor?: CssDeclarationValue<'strokeColor', T>;
  /**
   * 扩大命名动画时间线的可引用作用域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  timelineScope?: CssDeclarationValue<'timelineScope', T>;
  /**
   * 同时声明基于元素可见进度的时间线名称与轴。
   *
   * @default:'view-timeline-name: none；view-timeline-axis: block'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  viewTimeline?: CssDeclarationValue<'viewTimeline', T>;
  /**
   * 设置可见进度时间线所观察的滚动轴。
   *
   * @default:'block'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  viewTimelineAxis?: CssDeclarationValue<'viewTimelineAxis', T>;
  /**
   * 设置可见进度时间线使用的滚动视口内缩范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  viewTimelineInset?: CssDeclarationValue<'viewTimelineInset', T>;
  /**
   * 声明基于元素进入和离开滚动视口的时间线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  viewTimelineName?: CssDeclarationValue<'viewTimelineName', T>;
  /**
   * 提前告知浏览器可能发生变化的属性，便于准备优化资源。
   *
   * 仅对即将发生的变化短期使用；长期或大量声明可能占用额外资源，并提前改变层叠上下文。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  willChange?: CssDeclarationValue<'willChange', T>;
  /**
   * 设置适用 SVG 元素的水平几何坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  x?: CssDeclarationValue<'x', T>;
  /**
   * 设置适用 SVG 元素的垂直几何坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  y?: CssDeclarationValue<'y', T>;
  /**
   * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。
   *
   * @default:'1'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  zoom?: CssDeclarationValue<'zoom', T>;
}
