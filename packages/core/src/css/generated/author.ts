// 由 scripts/css/generate.mjs 从固定 csstype@3.2.3 生成；请勿手改。
import type { PropertyInput } from '../types.ts';
import type { SystemKeywords } from './system.ts';
import { CssAuthor } from '../author.ts';
/** 不可变链式样式；每次调用返回新值，泛型 T 保留主题约束。 */
export class Css<T extends SystemKeywords = SystemKeywords> extends CssAuthor<T> {
  /**
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  alignContent<const Value>(value: PropertyInput<'alignContent', T, Value>): this {
    return this.write('alignContent', value);
  }
  /**
   * 设置容器内项目在交叉轴或块轴上的默认对齐方式。
   *
   * Flex 中沿交叉轴对齐；Grid 中通常沿块轴对齐。单个项目可以用 align-self 覆盖。
   *
   * 适用场景：图标与文字居中、表单控件基线对齐或项目拉伸。
   *
   * 常用值：`stretch`、`center`、`baseline`、`start`、`end`。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("flex").alignItems("center")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  alignItems<const Value>(value: PropertyInput<'alignItems', T, Value>): this {
    return this.write('alignItems', value);
  }
  /**
   * 选择行内或 SVG 文本参与对齐时使用的基线。
   *
   * CSS 规范初始值：baseline。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  alignmentBaseline<const Value>(value: PropertyInput<'alignmentBaseline', T, Value>): this {
    return this.write('alignmentBaseline', value);
  }
  /**
   * 单独覆盖一个项目的交叉轴或块轴对齐方式。
   *
   * 适用场景：只改变某一个项目的交叉轴或块轴对齐，不改变同组其他项目。
   *
   * 常用值：`auto`、`stretch`、`baseline`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.alignSelf("center")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  alignSelf<const Value>(value: PropertyInput<'alignSelf', T, Value>): this {
    return this.write('alignSelf', value);
  }
  /**
   * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  alignTracks<const Value>(value: PropertyInput<'alignTracks', T, Value>): this {
    return this.write('alignTracks', value);
  }
  /**
   * 为元素声明锚点名称，供锚点定位的元素引用。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  anchorName<const Value>(value: PropertyInput<'anchorName', T, Value>): this {
    return this.write('anchorName', value);
  }
  /**
   * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  anchorScope<const Value>(value: PropertyInput<'anchorScope', T, Value>): this {
    return this.write('anchorScope', value);
  }
  /**
   * 设置定位元素相对于其定位参照的下侧偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  bottom<const Value>(value: PropertyInput<'bottom', T, Value>): this {
    return this.write('bottom', value);
  }
  /**
   * 要求元素避让指定侧的前置浮动元素。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  clear<const Value>(value: PropertyInput<'clear', T, Value>): this {
    return this.write('clear', value);
  }
  /**
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  columnCount<const Value>(value: PropertyInput<'columnCount', T, Value>): this {
    return this.write('columnCount', value);
  }
  /**
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：balance。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  columnFill<const Value>(value: PropertyInput<'columnFill', T, Value>): this {
    return this.write('columnFill', value);
  }
  /**
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * CSS 规范初始值：column-width: auto；column-count: auto；column-height: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  columns<const Value>(value: PropertyInput<'columns', T, Value>): this {
    return this.write('columns', value);
  }
  /**
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  columnSpan<const Value>(value: PropertyInput<'columnSpan', T, Value>): this {
    return this.write('columnSpan', value);
  }
  /**
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  columnWidth<const Value>(value: PropertyInput<'columnWidth', T, Value>): this {
    return this.write('columnWidth', value);
  }
  /**
   * 决定元素是否生成布局盒子，以及元素自身和内部内容如何排版。
   *
   * 外部显示类型决定元素自身以块级还是行内级方式参与周围布局；内部布局方式决定内容使用普通流、Flex 或 Grid 等布局。此属性不继承；例如 div 通常由浏览器默认样式设置为 block。
   *
   * 适用场景：选择容器的布局方式；具体对齐、间距和换行由对应布局属性控制。
   *
   * 常用值：`block`、`inline`、`flex`、`inline-flex`、`grid`、`none`。
   *
   * CSS 规范初始值：inline。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("flex").alignItems("center").gap("0.5rem")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  display<const Value>(value: PropertyInput<'display', T, Value>): this {
    return this.write('display', value);
  }
  /**
   * 集中设置弹性项目的增长系数、收缩系数和基础尺寸。
   *
   * 依次对应 flex-grow、flex-shrink、flex-basis。作用于弹性项目，应先由父容器建立 Flex 布局。
   *
   * 适用场景：分配弹性布局中的剩余空间，或让项目保持自身尺寸。
   *
   * 常用值：`auto`、`none`。
   *
   * CSS 规范初始值：flex-grow: 0；flex-shrink: 1；flex-basis: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.flex("1 1 0%")
   * @example
   * s.flex("none")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  flex<const Value>(value: PropertyInput<'flex', T, Value>): this {
    return this.write('flex', value);
  }
  /**
   * 设置弹性项目分配剩余空间之前的主轴基础尺寸。
   *
   * 在剩余空间分配前确定项目的主轴基础尺寸；设置为 auto 时先参考对应的 width/height。
   *
   * 适用场景：为侧栏、内容区或重复项目指定弹性分配的起始尺寸。
   *
   * 常用值：`auto`、`content`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.flexBasis("16rem")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  flexBasis<const Value>(value: PropertyInput<'flexBasis', T, Value>): this {
    return this.write('flexBasis', value);
  }
  /**
   * 设置弹性容器的主轴方向及项目排列方向。
   *
   * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
   *
   * 常用值：`row`、`column`、`row-reverse`、`column-reverse`。
   *
   * CSS 规范初始值：row。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("flex").flexDirection("column").gap("1rem")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
   */
  flexDirection<const Value>(value: PropertyInput<'flexDirection', T, Value>): this {
    return this.write('flexDirection', value);
  }
  /**
   * 同时设置弹性布局的主轴方向和换行方式。
   *
   * CSS 规范初始值：flex-direction: row；flex-wrap: nowrap。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  flexFlow<const Value>(value: PropertyInput<'flexFlow', T, Value>): this {
    return this.write('flexFlow', value);
  }
  /**
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * 数值是分配正剩余空间的相对权重，不是最终宽度百分比。只有容器存在剩余空间时才发挥作用。
   *
   * 适用场景：让主内容区填充工具栏或行布局的剩余空间。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.flexGrow(1)
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
   */
  flexGrow<const Value>(value: PropertyInput<'flexGrow', T, Value>): this {
    return this.write('flexGrow', value);
  }
  /**
   * 设置弹性项目空间不足时的收缩系数。
   *
   * 实际收缩还与 flex-basis 成比例；自动最小尺寸可能阻止项目继续缩小。
   *
   * 适用场景：控制空间不足时是否允许缩小；设置为 0 可避免图标或固定控件收缩。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.flexShrink(0)
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
   */
  flexShrink<const Value>(value: PropertyInput<'flexShrink', T, Value>): this {
    return this.write('flexShrink', value);
  }
  /**
   * 设置弹性项目是否换行，以及多行的排列方向。
   *
   * 适用场景：标签、按钮等项目不足一行时允许分行。
   *
   * 常用值：`nowrap`、`wrap`、`wrap-reverse`。
   *
   * CSS 规范初始值：nowrap。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("flex").flexWrap("wrap").gap("0.5rem")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  flexWrap<const Value>(value: PropertyInput<'flexWrap', T, Value>): this {
    return this.write('flexWrap', value);
  }
  /**
   * 将元素浮动到指定侧，使相邻行内内容围绕它排列。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  float<const Value>(value: PropertyInput<'float', T, Value>): this {
    return this.write('float', value);
  }
  /**
   * 集中设置显式和隐式网格的轨道、区域及自动放置方式。
   *
   * CSS 规范初始值：grid-template-rows: none；grid-template-columns: none；grid-template-areas: none；grid-auto-rows: auto；grid-auto-columns: auto；grid-auto-flow: row；grid-column-gap: 0；grid-row-gap: 0；column-gap: normal；row-gap: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  grid<const Value>(value: PropertyInput<'grid', T, Value>): this {
    return this.write('grid', value);
  }
  /**
   * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。
   *
   * CSS 规范初始值：grid-row-start: auto；grid-column-start: auto；grid-row-end: auto；grid-column-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  gridArea<const Value>(value: PropertyInput<'gridArea', T, Value>): this {
    return this.write('gridArea', value);
  }
  /**
   * 设置隐式生成的网格列尺寸。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  gridAutoColumns<const Value>(value: PropertyInput<'gridAutoColumns', T, Value>): this {
    return this.write('gridAutoColumns', value);
  }
  /**
   * 设置网格自动放置算法的行列方向及是否密集填洞。
   *
   * dense 可能改变视觉顺序，但不改变 DOM 和键盘导航顺序。
   *
   * 适用场景：控制未明确指定位置的网格项目如何自动填入轨道。
   *
   * 常用值：`row`、`column`、`dense`。
   *
   * CSS 规范初始值：row。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("grid").gridAutoFlow("row")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
   */
  gridAutoFlow<const Value>(value: PropertyInput<'gridAutoFlow', T, Value>): this {
    return this.write('gridAutoFlow', value);
  }
  /**
   * 设置隐式生成的网格行尺寸。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  gridAutoRows<const Value>(value: PropertyInput<'gridAutoRows', T, Value>): this {
    return this.write('gridAutoRows', value);
  }
  /**
   * 设置网格项目的列起点和列终点。
   *
   * CSS 规范初始值：grid-column-start: auto；grid-column-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  gridColumn<const Value>(value: PropertyInput<'gridColumn', T, Value>): this {
    return this.write('gridColumn', value);
  }
  /**
   * 设置网格项目的列终止线或跨越范围。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  gridColumnEnd<const Value>(value: PropertyInput<'gridColumnEnd', T, Value>): this {
    return this.write('gridColumnEnd', value);
  }
  /**
   * 设置网格项目的列起始线或跨越范围。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  gridColumnStart<const Value>(value: PropertyInput<'gridColumnStart', T, Value>): this {
    return this.write('gridColumnStart', value);
  }
  /**
   * 设置网格项目的行起点和行终点。
   *
   * CSS 规范初始值：grid-row-start: auto；grid-row-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  gridRow<const Value>(value: PropertyInput<'gridRow', T, Value>): this {
    return this.write('gridRow', value);
  }
  /**
   * 设置网格项目的行终止线或跨越范围。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  gridRowEnd<const Value>(value: PropertyInput<'gridRowEnd', T, Value>): this {
    return this.write('gridRowEnd', value);
  }
  /**
   * 设置网格项目的行起始线或跨越范围。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  gridRowStart<const Value>(value: PropertyInput<'gridRowStart', T, Value>): this {
    return this.write('gridRowStart', value);
  }
  /**
   * 集中设置显式网格的行、列和命名区域。
   *
   * CSS 规范初始值：grid-template-columns: none；grid-template-rows: none；grid-template-areas: none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  gridTemplate<const Value>(value: PropertyInput<'gridTemplate', T, Value>): this {
    return this.write('gridTemplate', value);
  }
  /**
   * 用区域名称矩阵定义网格布局区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  gridTemplateAreas<const Value>(value: PropertyInput<'gridTemplateAreas', T, Value>): this {
    return this.write('gridTemplateAreas', value);
  }
  /**
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * 每个轨道值定义一列；fr 分配剩余空间。需要允许长内容所在列缩小时，可使用 minmax(0, 1fr)。
   *
   * 适用场景：响应式卡片、表单标签与输入框的列布局。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.gridTemplateColumns("repeat(3, minmax(0, 1fr))")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  gridTemplateColumns<const Value>(value: PropertyInput<'gridTemplateColumns', T, Value>): this {
    return this.write('gridTemplateColumns', value);
  }
  /**
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * 每个轨道值定义一行，未显式定义的行使用 grid-auto-rows。
   *
   * 适用场景：区分固定工具栏和可伸缩内容区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.gridTemplateRows("auto minmax(0, 1fr)")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  gridTemplateRows<const Value>(value: PropertyInput<'gridTemplateRows', T, Value>): this {
    return this.write('gridTemplateRows', value);
  }
  /**
   * 同时设置定位元素的上、右、下、左偏移。
   *
   * CSS 规范初始值：top: auto；bottom: auto；left: auto；right: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  inset<const Value>(value: PropertyInput<'inset', T, Value>): this {
    return this.write('inset', value);
  }
  /**
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   *
   * CSS 规范初始值：inset-block-start: auto；inset-block-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  insetBlock<const Value>(value: PropertyInput<'insetBlock', T, Value>): this {
    return this.write('insetBlock', value);
  }
  /**
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  insetBlockEnd<const Value>(value: PropertyInput<'insetBlockEnd', T, Value>): this {
    return this.write('insetBlockEnd', value);
  }
  /**
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  insetBlockStart<const Value>(value: PropertyInput<'insetBlockStart', T, Value>): this {
    return this.write('insetBlockStart', value);
  }
  /**
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   *
   * CSS 规范初始值：inset-inline-start: auto；inset-inline-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  insetInline<const Value>(value: PropertyInput<'insetInline', T, Value>): this {
    return this.write('insetInline', value);
  }
  /**
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  insetInlineEnd<const Value>(value: PropertyInput<'insetInlineEnd', T, Value>): this {
    return this.write('insetInlineEnd', value);
  }
  /**
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  insetInlineStart<const Value>(value: PropertyInput<'insetInlineStart', T, Value>): this {
    return this.write('insetInlineStart', value);
  }
  /**
   * 分配布局主轴或行内轴的剩余空间，控制内容整体对齐。
   *
   * Flex 中沿主轴分配空间，Grid 中沿行内轴对齐网格整体。没有剩余空间时，空间分配效果可能不明显。
   *
   * 常用值：`center`、`space-between`、`space-around`、`space-evenly`。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("flex").justifyContent("space-between")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  justifyContent<const Value>(value: PropertyInput<'justifyContent', T, Value>): this {
    return this.write('justifyContent', value);
  }
  /**
   * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。
   *
   * CSS 规范初始值：legacy。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  justifyItems<const Value>(value: PropertyInput<'justifyItems', T, Value>): this {
    return this.write('justifyItems', value);
  }
  /**
   * 单独设置项目在其布局区域内的行内轴对齐方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  justifySelf<const Value>(value: PropertyInput<'justifySelf', T, Value>): this {
    return this.write('justifySelf', value);
  }
  /**
   * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  justifyTracks<const Value>(value: PropertyInput<'justifyTracks', T, Value>): this {
    return this.write('justifyTracks', value);
  }
  /**
   * 设置定位元素相对于其定位参照的左侧偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  left<const Value>(value: PropertyInput<'left', T, Value>): this {
    return this.write('left', value);
  }
  /**
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
   */
  order<const Value>(value: PropertyInput<'order', T, Value>): this {
    return this.write('order', value);
  }
  /**
   * 同时设置 align-content 与 justify-content。
   *
   * CSS 规范初始值：align-content: normal；justify-content: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  placeContent<const Value>(value: PropertyInput<'placeContent', T, Value>): this {
    return this.write('placeContent', value);
  }
  /**
   * 同时设置 align-items 与 justify-items。
   *
   * CSS 规范初始值：align-items: normal；justify-items: legacy。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  placeItems<const Value>(value: PropertyInput<'placeItems', T, Value>): this {
    return this.write('placeItems', value);
  }
  /**
   * 同时设置 align-self 与 justify-self。
   *
   * CSS 规范初始值：align-self: auto；justify-self: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  placeSelf<const Value>(value: PropertyInput<'placeSelf', T, Value>): this {
    return this.write('placeSelf', value);
  }
  /**
   * 设置元素的定位方式，并决定偏移属性如何参与布局。
   *
   * 偏移通常通过 top/right/bottom/left 或逻辑 inset 属性设置。fixed 和 absolute 的包含块也可能由 transform 等属性建立。
   *
   * 适用场景：建立定位参照、覆盖层、固定区域或滚动吸附内容。
   *
   * 常用值：`static`、`relative`、`absolute`、`fixed`、`sticky`。
   *
   * CSS 规范初始值：static。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.position("sticky").top("0px")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  position<const Value>(value: PropertyInput<'position', T, Value>): this {
    return this.write('position', value);
  }
  /**
   * 选择绝对定位元素使用的默认锚点。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  positionAnchor<const Value>(value: PropertyInput<'positionAnchor', T, Value>): this {
    return this.write('positionAnchor', value);
  }
  /**
   * 选择相对于锚点的定位区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  positionArea<const Value>(value: PropertyInput<'positionArea', T, Value>): this {
    return this.write('positionArea', value);
  }
  /**
   * 同时设置锚点定位的候选回退方式及尝试顺序。
   *
   * CSS 规范初始值：position-try-fallbacks: none；position-try-order: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  positionTry<const Value>(value: PropertyInput<'positionTry', T, Value>): this {
    return this.write('positionTry', value);
  }
  /**
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  positionTryFallbacks<const Value>(value: PropertyInput<'positionTryFallbacks', T, Value>): this {
    return this.write('positionTryFallbacks', value);
  }
  /**
   * 设置锚点定位候选方案的尝试顺序。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  positionTryOrder<const Value>(value: PropertyInput<'positionTryOrder', T, Value>): this {
    return this.write('positionTryOrder', value);
  }
  /**
   * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。
   *
   * CSS 规范初始值：anchors-visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  positionVisibility<const Value>(value: PropertyInput<'positionVisibility', T, Value>): this {
    return this.write('positionVisibility', value);
  }
  /**
   * 设置定位元素相对于其定位参照的右侧偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  right<const Value>(value: PropertyInput<'right', T, Value>): this {
    return this.write('right', value);
  }
  /**
   * 设置定位元素相对于其定位参照的上侧偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  top<const Value>(value: PropertyInput<'top', T, Value>): this {
    return this.write('top', value);
  }
  /**
   * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。
   *
   * CSS 规范初始值：baseline。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  verticalAlign<const Value>(value: PropertyInput<'verticalAlign', T, Value>): this {
    return this.write('verticalAlign', value);
  }
  /**
   * 设置元素在所属层叠上下文中的层叠级别。
   *
   * 数值只在所属层叠上下文内比较；更大的数值不保证盖过其他层叠上下文。Flex/Grid 项目也可以使用 z-index。
   *
   * 适用场景：控制同一层叠上下文中的浮层顺序，排查遮挡时先确认祖先层叠上下文。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.position("relative").zIndex(1)
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
   */
  zIndex<const Value>(value: PropertyInput<'zIndex', T, Value>): this {
    return this.write('zIndex', value);
  }
  /**
   * 设置盒子的首选宽高比，参与自动尺寸计算。
   *
   * 通常需要至少一个轴为自动尺寸才参与尺寸计算；两个轴都被明确尺寸约束时，不会强行保持比例。
   *
   * 适用场景：图片占位、视频和卡片封面区域。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.aspectRatio("16 / 9").width("100%")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
   */
  aspectRatio<const Value>(value: PropertyInput<'aspectRatio', T, Value>): this {
    return this.write('aspectRatio', value);
  }
  /**
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * 水平书写时通常对应 height，竖直书写时通常对应 width。
   *
   * 适用场景：使用逻辑轴表达内容块尺寸。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.blockSize("10rem")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  blockSize<const Value>(value: PropertyInput<'blockSize', T, Value>): this {
    return this.write('blockSize', value);
  }
  /**
   * 决定 width、height 等尺寸是否包含内边距和边框。
   *
   * 适用场景：确定组件声明宽高时是否把 padding 和 border 算在尺寸内。
   *
   * 常用值：`content-box`、`border-box`。
   *
   * CSS 规范初始值：content-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.boxSizing("border-box").width("20rem").padding("1rem")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
   */
  boxSizing<const Value>(value: PropertyInput<'boxSizing', T, Value>): this {
    return this.write('boxSizing', value);
  }
  /**
   * 设置元素的物理高度，盒子范围受 box-sizing 影响。
   *
   * 百分比高度能否解析取决于包含块的尺寸确定方式；设置 100% 不自动等于视口高度。
   *
   * 适用场景：控制物理高度；滚动面板通常结合 max-height 和 overflow。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.maxHeight("20rem").overflowY("auto")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  height<const Value>(value: PropertyInput<'height', T, Value>): this {
    return this.write('height', value);
  }
  /**
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * 水平书写时通常对应 width，竖直书写时通常对应 height。实际尺寸还受 min-inline-size/max-inline-size 和 box-sizing 约束。
   *
   * 适用场景：希望布局尺寸跟随书写模式变化的组件。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.inlineSize("20rem")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  inlineSize<const Value>(value: PropertyInput<'inlineSize', T, Value>): this {
    return this.write('inlineSize', value);
  }
  /**
   * 限制元素逻辑块轴的最大尺寸。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  maxBlockSize<const Value>(value: PropertyInput<'maxBlockSize', T, Value>): this {
    return this.write('maxBlockSize', value);
  }
  /**
   * 限制元素的最大物理高度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  maxHeight<const Value>(value: PropertyInput<'maxHeight', T, Value>): this {
    return this.write('maxHeight', value);
  }
  /**
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  maxInlineSize<const Value>(value: PropertyInput<'maxInlineSize', T, Value>): this {
    return this.write('maxInlineSize', value);
  }
  /**
   * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  maxLines<const Value>(value: PropertyInput<'maxLines', T, Value>): this {
    return this.write('maxLines', value);
  }
  /**
   * 限制元素的最大物理宽度。
   *
   * 限制最终宽度，不会单独要求元素达到该宽度。最小尺寸约束可能优先于较小的最大尺寸。
   *
   * 适用场景：限制正文行长、弹窗宽度或响应式内容区。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.width("100%").maxWidth("48rem")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  maxWidth<const Value>(value: PropertyInput<'maxWidth', T, Value>): this {
    return this.write('maxWidth', value);
  }
  /**
   * 设置元素逻辑块轴的最小尺寸。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  minBlockSize<const Value>(value: PropertyInput<'minBlockSize', T, Value>): this {
    return this.write('minBlockSize', value);
  }
  /**
   * 设置元素的最小物理高度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  minHeight<const Value>(value: PropertyInput<'minHeight', T, Value>): this {
    return this.write('minHeight', value);
  }
  /**
   * 设置元素逻辑行内轴的最小尺寸。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  minInlineSize<const Value>(value: PropertyInput<'minInlineSize', T, Value>): this {
    return this.write('minInlineSize', value);
  }
  /**
   * 设置元素的最小物理宽度。
   *
   * Flex/Grid 项目的 auto 最小尺寸可能由内容决定。需要允许其收缩时，可以按布局目的设置 min-width:0。
   *
   * 适用场景：给控件设置最小可用宽度，或用 0 允许 Flex/Grid 子项突破自动内容最小宽度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.minWidth("0px")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  minWidth<const Value>(value: PropertyInput<'minWidth', T, Value>): this {
    return this.write('minWidth', value);
  }
  /**
   * 设置元素的物理宽度，盒子范围受 box-sizing 影响。
   *
   * 百分比依据包含块解析；auto、内部尺寸和最小/最大约束共同决定最终使用尺寸。
   *
   * 适用场景：控制物理宽度；支持书写模式的布局可优先考虑 inline-size。
   *
   * 常用值：`auto`、`min-content`、`max-content`、`fit-content`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.width("20rem")
   * @example
   * s.width("clamp(12rem, 50vw, 40rem)")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  width<const Value>(value: PropertyInput<'width', T, Value>): this {
    return this.write('width', value);
  }
  /**
   * 设置布局中相邻列之间的间距。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  columnGap<const Value>(value: PropertyInput<'columnGap', T, Value>): this {
    return this.write('columnGap', value);
  }
  /**
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。
   *
   * 两个值依次为 row-gap 和 column-gap；在 Flex 中对应项目还是行间距取决于 flex-direction。它不增加容器外缘的间距。
   *
   * 适用场景：给 Flex/Grid 项目设置统一间隔，避免逐个项目添加 margin。
   *
   * CSS 规范初始值：row-gap: normal；column-gap: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.gap("8px 16px")
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
   */
  gap<const Value>(value: PropertyInput<'gap', T, Value>): this {
    return this.write('gap', value);
  }
  /**
   * 设置盒子四周的外边距，可使用负值或自动外边距。
   *
   * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。块布局中的垂直外边距可能折叠。
   *
   * 适用场景：控制盒子外侧与相邻内容的距离；布局项统一间隔可考虑容器 gap。
   *
   * CSS 规范初始值：margin-bottom: 0；margin-left: 0；margin-right: 0；margin-top: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.margin("8px 16px")
   * @example
   * s.margin("0 auto")
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
   */
  margin<const Value>(value: PropertyInput<'margin', T, Value>): this {
    return this.write('margin', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的外边距。
   *
   * CSS 规范初始值：margin-block-start: 0；margin-block-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  marginBlock<const Value>(value: PropertyInput<'marginBlock', T, Value>): this {
    return this.write('marginBlock', value);
  }
  /**
   * 设置逻辑块轴结束侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  marginBlockEnd<const Value>(value: PropertyInput<'marginBlockEnd', T, Value>): this {
    return this.write('marginBlockEnd', value);
  }
  /**
   * 设置逻辑块轴起始侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  marginBlockStart<const Value>(value: PropertyInput<'marginBlockStart', T, Value>): this {
    return this.write('marginBlockStart', value);
  }
  /**
   * 设置下外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  marginBottom<const Value>(value: PropertyInput<'marginBottom', T, Value>): this {
    return this.write('marginBottom', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的外边距。
   *
   * CSS 规范初始值：margin-inline-start: 0；margin-inline-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  marginInline<const Value>(value: PropertyInput<'marginInline', T, Value>): this {
    return this.write('marginInline', value);
  }
  /**
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  marginInlineEnd<const Value>(value: PropertyInput<'marginInlineEnd', T, Value>): this {
    return this.write('marginInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  marginInlineStart<const Value>(value: PropertyInput<'marginInlineStart', T, Value>): this {
    return this.write('marginInlineStart', value);
  }
  /**
   * 设置左外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  marginLeft<const Value>(value: PropertyInput<'marginLeft', T, Value>): this {
    return this.write('marginLeft', value);
  }
  /**
   * 设置右外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  marginRight<const Value>(value: PropertyInput<'marginRight', T, Value>): this {
    return this.write('marginRight', value);
  }
  /**
   * 设置上外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  marginTop<const Value>(value: PropertyInput<'marginTop', T, Value>): this {
    return this.write('marginTop', value);
  }
  /**
   * 控制容器边缘处子元素外边距的裁减。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  marginTrim<const Value>(value: PropertyInput<'marginTrim', T, Value>): this {
    return this.write('marginTrim', value);
  }
  /**
   * 设置内容与边框之间的四边内边距，不接受负值。
   *
   * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。不能使用负值或 auto。
   *
   * 适用场景：控制文字或子元素与组件边框之间的留白。
   *
   * CSS 规范初始值：padding-bottom: 0；padding-left: 0；padding-right: 0；padding-top: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.padding("0.5rem 1rem")
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
   */
  padding<const Value>(value: PropertyInput<'padding', T, Value>): this {
    return this.write('padding', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的内边距。
   *
   * CSS 规范初始值：padding-block-start: 0；padding-block-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  paddingBlock<const Value>(value: PropertyInput<'paddingBlock', T, Value>): this {
    return this.write('paddingBlock', value);
  }
  /**
   * 设置逻辑块轴结束侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  paddingBlockEnd<const Value>(value: PropertyInput<'paddingBlockEnd', T, Value>): this {
    return this.write('paddingBlockEnd', value);
  }
  /**
   * 设置逻辑块轴起始侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  paddingBlockStart<const Value>(value: PropertyInput<'paddingBlockStart', T, Value>): this {
    return this.write('paddingBlockStart', value);
  }
  /**
   * 设置下内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  paddingBottom<const Value>(value: PropertyInput<'paddingBottom', T, Value>): this {
    return this.write('paddingBottom', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的内边距。
   *
   * CSS 规范初始值：padding-inline-start: 0；padding-inline-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  paddingInline<const Value>(value: PropertyInput<'paddingInline', T, Value>): this {
    return this.write('paddingInline', value);
  }
  /**
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  paddingInlineEnd<const Value>(value: PropertyInput<'paddingInlineEnd', T, Value>): this {
    return this.write('paddingInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  paddingInlineStart<const Value>(value: PropertyInput<'paddingInlineStart', T, Value>): this {
    return this.write('paddingInlineStart', value);
  }
  /**
   * 设置左内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  paddingLeft<const Value>(value: PropertyInput<'paddingLeft', T, Value>): this {
    return this.write('paddingLeft', value);
  }
  /**
   * 设置右内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  paddingRight<const Value>(value: PropertyInput<'paddingRight', T, Value>): this {
    return this.write('paddingRight', value);
  }
  /**
   * 设置上内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  paddingTop<const Value>(value: PropertyInput<'paddingTop', T, Value>): this {
    return this.write('paddingTop', value);
  }
  /**
   * 设置布局中相邻行之间的间距。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  rowGap<const Value>(value: PropertyInput<'rowGap', T, Value>): this {
    return this.write('rowGap', value);
  }
  /**
   * 设置文本基本方向，参与双向文本及部分布局计算。
   *
   * CSS 规范初始值：ltr。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  direction<const Value>(value: PropertyInput<'direction', T, Value>): this {
    return this.write('direction', value);
  }
  /**
   * 集中设置字体样式、粗细、大小、行高和字体族等信息。
   *
   * 简写会把未显式指定的字体子属性重置为各自初始值。只改字号或字重时可使用 fontSize、fontWeight；按钮和输入控件跟随正文时可使用 inherit。
   *
   * 适用场景：统一字体配置，或让控件继承父级字体。
   *
   * 常用值：`inherit`、`italic 600 16px/1.5 system-ui`。
   *
   * CSS 规范初始值：font-style: normal；font-variant: normal；font-weight: normal；font-stretch: normal；font-size: medium；line-height: normal；font-family: 由浏览器决定。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.font('inherit')
   * @example
   * s.font('600 14px/1.5 system-ui')
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  font<const Value>(value: PropertyInput<'font', T, Value>): this {
    return this.write('font', value);
  }
  /**
   * 设置按优先级排列的字体族及通用字体回退。
   *
   * CSS 规范初始值：由浏览器决定。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  fontFamily<const Value>(value: PropertyInput<'fontFamily', T, Value>): this {
    return this.write('fontFamily', value);
  }
  /**
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  fontFeatureSettings<const Value>(value: PropertyInput<'fontFeatureSettings', T, Value>): this {
    return this.write('fontFeatureSettings', value);
  }
  /**
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  fontKerning<const Value>(value: PropertyInput<'fontKerning', T, Value>): this {
    return this.write('fontKerning', value);
  }
  /**
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  fontLanguageOverride<const Value>(value: PropertyInput<'fontLanguageOverride', T, Value>): this {
    return this.write('fontLanguageOverride', value);
  }
  /**
   * 控制支持光学尺寸轴的字体是否按字号优化字形。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  fontOpticalSizing<const Value>(value: PropertyInput<'fontOpticalSizing', T, Value>): this {
    return this.write('fontOpticalSizing', value);
  }
  /**
   * 选择或覆盖彩色字体使用的调色板。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  fontPalette<const Value>(value: PropertyInput<'fontPalette', T, Value>): this {
    return this.write('fontPalette', value);
  }
  /**
   * 设置字体大小，也影响 em 等相对单位的计算。
   *
   * 改变字形大小，并影响 em 等相对长度；行盒高度还由 line-height 决定。
   *
   * 适用场景：建立文字层级，根字号相对尺寸可用 rem 表达。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.fontSize("1rem").lineHeight(1.5)
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  fontSize<const Value>(value: PropertyInput<'fontSize', T, Value>): this {
    return this.write('fontSize', value);
  }
  /**
   * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  fontSizeAdjust<const Value>(value: PropertyInput<'fontSizeAdjust', T, Value>): this {
    return this.write('fontSizeAdjust', value);
  }
  /**
   * 控制字体平滑的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  fontSmooth<const Value>(value: PropertyInput<'fontSmooth', T, Value>): this {
    return this.write('fontSmooth', value);
  }
  /**
   * 选择正常、斜体或倾斜字体样式。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  fontStyle<const Value>(value: PropertyInput<'fontStyle', T, Value>): this {
    return this.write('fontStyle', value);
  }
  /**
   * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。
   *
   * CSS 规范初始值：weight style small-caps position 。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  fontSynthesis<const Value>(value: PropertyInput<'fontSynthesis', T, Value>): this {
    return this.write('fontSynthesis', value);
  }
  /**
   * 控制浏览器是否可以合成上标和下标字形。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  fontSynthesisPosition<const Value>(
    value: PropertyInput<'fontSynthesisPosition', T, Value>,
  ): this {
    return this.write('fontSynthesisPosition', value);
  }
  /**
   * 控制浏览器是否可以合成小型大写字形。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  fontSynthesisSmallCaps<const Value>(
    value: PropertyInput<'fontSynthesisSmallCaps', T, Value>,
  ): this {
    return this.write('fontSynthesisSmallCaps', value);
  }
  /**
   * 控制浏览器是否可以合成倾斜字体。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  fontSynthesisStyle<const Value>(value: PropertyInput<'fontSynthesisStyle', T, Value>): this {
    return this.write('fontSynthesisStyle', value);
  }
  /**
   * 控制浏览器是否可以合成加粗字体。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  fontSynthesisWeight<const Value>(value: PropertyInput<'fontSynthesisWeight', T, Value>): this {
    return this.write('fontSynthesisWeight', value);
  }
  /**
   * 集中设置字体的连字、大小写、数字及其他变体。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  fontVariant<const Value>(value: PropertyInput<'fontVariant', T, Value>): this {
    return this.write('fontVariant', value);
  }
  /**
   * 选择字体提供的替代字形。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  fontVariantAlternates<const Value>(
    value: PropertyInput<'fontVariantAlternates', T, Value>,
  ): this {
    return this.write('fontVariantAlternates', value);
  }
  /**
   * 设置小型大写等大小写字形变体。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  fontVariantCaps<const Value>(value: PropertyInput<'fontVariantCaps', T, Value>): this {
    return this.write('fontVariantCaps', value);
  }
  /**
   * 设置东亚文字字形及宽度变体。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  fontVariantEastAsian<const Value>(value: PropertyInput<'fontVariantEastAsian', T, Value>): this {
    return this.write('fontVariantEastAsian', value);
  }
  /**
   * 设置字符优先采用文本字形还是 emoji 字形。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  fontVariantEmoji<const Value>(value: PropertyInput<'fontVariantEmoji', T, Value>): this {
    return this.write('fontVariantEmoji', value);
  }
  /**
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  fontVariantLigatures<const Value>(value: PropertyInput<'fontVariantLigatures', T, Value>): this {
    return this.write('fontVariantLigatures', value);
  }
  /**
   * 设置数字的等宽、比例、分数及其他排版变体。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  fontVariantNumeric<const Value>(value: PropertyInput<'fontVariantNumeric', T, Value>): this {
    return this.write('fontVariantNumeric', value);
  }
  /**
   * 选择字体提供的上标或下标字形。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  fontVariantPosition<const Value>(value: PropertyInput<'fontVariantPosition', T, Value>): this {
    return this.write('fontVariantPosition', value);
  }
  /**
   * 直接设置可变字体各个轴的数值。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  fontVariationSettings<const Value>(
    value: PropertyInput<'fontVariationSettings', T, Value>,
  ): this {
    return this.write('fontVariationSettings', value);
  }
  /**
   * 设置字体粗细，实际可用字重取决于字体。
   *
   * 最终字形取决于已加载字体和可用字重；变量字体可支持连续的字重范围。
   *
   * 适用场景：正文、强调文字和标题的视觉层级。
   *
   * 常用值：`normal`、`bold`、`bolder`、`lighter`。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.fontWeight(600)
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
   */
  fontWeight<const Value>(value: PropertyInput<'fontWeight', T, Value>): this {
    return this.write('fontWeight', value);
  }
  /**
   * 选择字体的宽窄字面，不是通过变换拉伸元素。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  fontWidth<const Value>(value: PropertyInput<'fontWidth', T, Value>): this {
    return this.write('fontWidth', value);
  }
  /**
   * 控制标点是否可以悬挂在行盒边缘之外。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  hangingPunctuation<const Value>(value: PropertyInput<'hangingPunctuation', T, Value>): this {
    return this.write('hangingPunctuation', value);
  }
  /**
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：manual。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  hyphens<const Value>(value: PropertyInput<'hyphens', T, Value>): this {
    return this.write('hyphens', value);
  }
  /**
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  initialLetter<const Value>(value: PropertyInput<'initialLetter', T, Value>): this {
    return this.write('initialLetter', value);
  }
  /**
   * 设置首字下沉时字形与正文使用的对齐基线。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  initialLetterAlign<const Value>(value: PropertyInput<'initialLetterAlign', T, Value>): this {
    return this.write('initialLetterAlign', value);
  }
  /**
   * 设置字符之间额外增加或减少的间距。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  letterSpacing<const Value>(value: PropertyInput<'letterSpacing', T, Value>): this {
    return this.write('letterSpacing', value);
  }
  /**
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  lineBreak<const Value>(value: PropertyInput<'lineBreak', T, Value>): this {
    return this.write('lineBreak', value);
  }
  /**
   * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  lineClamp<const Value>(value: PropertyInput<'lineClamp', T, Value>): this {
    return this.write('lineClamp', value);
  }
  /**
   * 设置行盒高度；无单位数值按元素自身字号计算。
   *
   * 无单位数字作为倍数继承；长度值按长度继承。单独设置行高不会自动实现多行文本垂直居中。
   *
   * 适用场景：控制正文行间节奏；可继承的字号倍数通常比固定长度更适合嵌套文字。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.lineHeight(1.5)
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
   */
  lineHeight<const Value>(value: PropertyInput<'lineHeight', T, Value>): this {
    return this.write('lineHeight', value);
  }
  /**
   * 设置行盒高度向上取整使用的步长。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  lineHeightStep<const Value>(value: PropertyInput<'lineHeightStep', T, Value>): this {
    return this.write('lineHeightStep', value);
  }
  /**
   * 设置生成引号所用的开闭字符对。
   *
   * CSS 规范初始值：由浏览器决定。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  quotes<const Value>(value: PropertyInput<'quotes', T, Value>): this {
    return this.write('quotes', value);
  }
  /**
   * 设置注音文字与基底文字之间剩余空间的分配方式。
   *
   * CSS 规范初始值：space-around。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  rubyAlign<const Value>(value: PropertyInput<'rubyAlign', T, Value>): this {
    return this.write('rubyAlign', value);
  }
  /**
   * 设置相邻注音容器的合并方式；使用前核对目标浏览器。
   *
   * CSS 规范初始值：separate。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  rubyMerge<const Value>(value: PropertyInput<'rubyMerge', T, Value>): this {
    return this.write('rubyMerge', value);
  }
  /**
   * 控制注音文字是否可以悬伸到相邻文本上方。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  rubyOverhang<const Value>(value: PropertyInput<'rubyOverhang', T, Value>): this {
    return this.write('rubyOverhang', value);
  }
  /**
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：alternate。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  rubyPosition<const Value>(value: PropertyInput<'rubyPosition', T, Value>): this {
    return this.write('rubyPosition', value);
  }
  /**
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：8。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  tabSize<const Value>(value: PropertyInput<'tabSize', T, Value>): this {
    return this.write('tabSize', value);
  }
  /**
   * 设置块容器中行内内容的水平或逻辑方向对齐。
   *
   * 控制块容器中的行内内容，不是块盒自身的位置，也不是 Flex/Grid 项目的对齐。
   *
   * 适用场景：正文、标题和表格单元格中的文本对齐。
   *
   * 常用值：`start`、`end`、`center`、`justify`。
   *
   * CSS 规范初始值：随书写方向采用起始侧对齐。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.textAlign("start")
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  textAlign<const Value>(value: PropertyInput<'textAlign', T, Value>): this {
    return this.write('textAlign', value);
  }
  /**
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  textAlignLast<const Value>(value: PropertyInput<'textAlignLast', T, Value>): this {
    return this.write('textAlignLast', value);
  }
  /**
   * 设置 SVG 文本片段相对于定位点的锚定方式。
   *
   * CSS 规范初始值：start。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  textAnchor<const Value>(value: PropertyInput<'textAnchor', T, Value>): this {
    return this.write('textAnchor', value);
  }
  /**
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  textAutospace<const Value>(value: PropertyInput<'textAutospace', T, Value>): this {
    return this.write('textAutospace', value);
  }
  /**
   * 同时设置文本盒边缘参照及首尾空白裁减。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  textBox<const Value>(value: PropertyInput<'textBox', T, Value>): this {
    return this.write('textBox', value);
  }
  /**
   * 选择文本盒裁减或对齐使用的字体边缘度量。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  textBoxEdge<const Value>(value: PropertyInput<'textBoxEdge', T, Value>): this {
    return this.write('textBoxEdge', value);
  }
  /**
   * 裁减文本块开头或结尾的额外行高空白。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  textBoxTrim<const Value>(value: PropertyInput<'textBoxTrim', T, Value>): this {
    return this.write('textBoxTrim', value);
  }
  /**
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  textCombineUpright<const Value>(value: PropertyInput<'textCombineUpright', T, Value>): this {
    return this.write('textCombineUpright', value);
  }
  /**
   * 集中设置文本装饰线的位置、线型、颜色及粗细。
   *
   * CSS 规范初始值：text-decoration-color: currentcolor；text-decoration-style: solid；text-decoration-line: none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  textDecoration<const Value>(value: PropertyInput<'textDecoration', T, Value>): this {
    return this.write('textDecoration', value);
  }
  /**
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  textDecorationColor<const Value>(value: PropertyInput<'textDecorationColor', T, Value>): this {
    return this.write('textDecorationColor', value);
  }
  /**
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  textDecorationLine<const Value>(value: PropertyInput<'textDecorationLine', T, Value>): this {
    return this.write('textDecorationLine', value);
  }
  /**
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：objects。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  textDecorationSkip<const Value>(value: PropertyInput<'textDecorationSkip', T, Value>): this {
    return this.write('textDecorationSkip', value);
  }
  /**
   * 设置装饰线是否避让字形的笔画。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  textDecorationSkipInk<const Value>(
    value: PropertyInput<'textDecorationSkipInk', T, Value>,
  ): this {
    return this.write('textDecorationSkipInk', value);
  }
  /**
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：solid。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  textDecorationStyle<const Value>(value: PropertyInput<'textDecorationStyle', T, Value>): this {
    return this.write('textDecorationStyle', value);
  }
  /**
   * 设置文本装饰线粗细。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  textDecorationThickness<const Value>(
    value: PropertyInput<'textDecorationThickness', T, Value>,
  ): this {
    return this.write('textDecorationThickness', value);
  }
  /**
   * 同时设置文字着重号的样式和颜色。
   *
   * CSS 规范初始值：text-emphasis-style: none；text-emphasis-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  textEmphasis<const Value>(value: PropertyInput<'textEmphasis', T, Value>): this {
    return this.write('textEmphasis', value);
  }
  /**
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  textEmphasisColor<const Value>(value: PropertyInput<'textEmphasisColor', T, Value>): this {
    return this.write('textEmphasisColor', value);
  }
  /**
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  textEmphasisPosition<const Value>(value: PropertyInput<'textEmphasisPosition', T, Value>): this {
    return this.write('textEmphasisPosition', value);
  }
  /**
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  textEmphasisStyle<const Value>(value: PropertyInput<'textEmphasisStyle', T, Value>): this {
    return this.write('textEmphasisStyle', value);
  }
  /**
   * 设置文本行的缩进距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  textIndent<const Value>(value: PropertyInput<'textIndent', T, Value>): this {
    return this.write('textIndent', value);
  }
  /**
   * 设置两端对齐时增加间距的算法。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  textJustify<const Value>(value: PropertyInput<'textJustify', T, Value>): this {
    return this.write('textJustify', value);
  }
  /**
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：mixed。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  textOrientation<const Value>(value: PropertyInput<'textOrientation', T, Value>): this {
    return this.write('textOrientation', value);
  }
  /**
   * 设置被裁剪的行内溢出文本如何提示，例如显示省略号。
   *
   * 本属性不自行制造溢出。单行省略通常还需要受限宽度、overflow:hidden 和 white-space:nowrap。
   *
   * 适用场景：受限宽度中的单行标题或标签。多行截断需要单独的布局和截行方案。
   *
   * 常用值：`ellipsis`、`clip`。
   *
   * CSS 规范初始值：clip。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.maxWidth("12rem").whiteSpace("nowrap").overflow("hidden").textOverflow("ellipsis")
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
   */
  textOverflow<const Value>(value: PropertyInput<'textOverflow', T, Value>): this {
    return this.write('textOverflow', value);
  }
  /**
   * 向渲染器提供文本速度、可读性或几何精度的偏好。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  textRendering<const Value>(value: PropertyInput<'textRendering', T, Value>): this {
    return this.write('textRendering', value);
  }
  /**
   * 设置文字及其装饰的阴影，可叠加多层。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  textShadow<const Value>(value: PropertyInput<'textShadow', T, Value>): this {
    return this.write('textShadow', value);
  }
  /**
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：支持文本放大的移动浏览器为 auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  textSizeAdjust<const Value>(value: PropertyInput<'textSizeAdjust', T, Value>): this {
    return this.write('textSizeAdjust', value);
  }
  /**
   * 设置东亚文字标点等字符周围空白的裁减。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  textSpacingTrim<const Value>(value: PropertyInput<'textSpacingTrim', T, Value>): this {
    return this.write('textSpacingTrim', value);
  }
  /**
   * 设置文字显示时的大小写、全角或其他字形转换。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  textTransform<const Value>(value: PropertyInput<'textTransform', T, Value>): this {
    return this.write('textTransform', value);
  }
  /**
   * 设置下划线相对于默认位置的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  textUnderlineOffset<const Value>(value: PropertyInput<'textUnderlineOffset', T, Value>): this {
    return this.write('textUnderlineOffset', value);
  }
  /**
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  textUnderlinePosition<const Value>(
    value: PropertyInput<'textUnderlinePosition', T, Value>,
  ): this {
    return this.write('textUnderlinePosition', value);
  }
  /**
   * 同时设置文本是否换行及换行策略。
   *
   * CSS 规范初始值：wrap。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  textWrap<const Value>(value: PropertyInput<'textWrap', T, Value>): this {
    return this.write('textWrap', value);
  }
  /**
   * 设置文本是否允许软换行。
   *
   * CSS 规范初始值：wrap。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  textWrapMode<const Value>(value: PropertyInput<'textWrapMode', T, Value>): this {
    return this.write('textWrapMode', value);
  }
  /**
   * 设置文本换行的排版策略，例如平衡各行长度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  textWrapStyle<const Value>(value: PropertyInput<'textWrapStyle', T, Value>): this {
    return this.write('textWrapStyle', value);
  }
  /**
   * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  unicodeBidi<const Value>(value: PropertyInput<'unicodeBidi', T, Value>): this {
    return this.write('unicodeBidi', value);
  }
  /**
   * 设置空白折叠和换行处理方式。
   *
   * 同时影响空白折叠和软换行。它不负责给溢出内容添加省略号。
   *
   * 适用场景：单行标签、保留换行的用户文本和代码片段。
   *
   * 常用值：`normal`、`nowrap`、`pre`、`pre-wrap`、`pre-line`、`break-spaces`。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.whiteSpace("pre-wrap")
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  whiteSpace<const Value>(value: PropertyInput<'whiteSpace', T, Value>): this {
    return this.write('whiteSpace', value);
  }
  /**
   * 设置空格、制表符和换行符如何折叠或保留。
   *
   * CSS 规范初始值：collapse。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  whiteSpaceCollapse<const Value>(value: PropertyInput<'whiteSpaceCollapse', T, Value>): this {
    return this.write('whiteSpaceCollapse', value);
  }
  /**
   * 设置单词内部或文字之间的断行规则。
   *
   * 按字符和语言控制断行。仅需避免超长单词溢出时，通常先考虑 overflow-wrap。
   *
   * 常用值：`normal`、`break-all`、`keep-all`。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.wordBreak("normal")
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  wordBreak<const Value>(value: PropertyInput<'wordBreak', T, Value>): this {
    return this.write('wordBreak', value);
  }
  /**
   * 设置单词或词间分隔符的额外间距。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  wordSpacing<const Value>(value: PropertyInput<'wordSpacing', T, Value>): this {
    return this.write('wordSpacing', value);
  }
  /**
   * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  wordWrap<const Value>(value: PropertyInput<'wordWrap', T, Value>): this {
    return this.write('wordWrap', value);
  }
  /**
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：horizontal-tb。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  writingMode<const Value>(value: PropertyInput<'writingMode', T, Value>): this {
    return this.write('writingMode', value);
  }
  /**
   * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  accentColor<const Value>(value: PropertyInput<'accentColor', T, Value>): this {
    return this.write('accentColor', value);
  }
  /**
   * 集中设置背景颜色、图像、位置、尺寸、重复及绘制区域。
   *
   * CSS 规范初始值：background-image: none；background-position: 0% 0%；background-size: auto auto；background-repeat: repeat；background-origin: padding-box；background-clip: border-box；background-attachment: scroll；background-color: transparent。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  background<const Value>(value: PropertyInput<'background', T, Value>): this {
    return this.write('background', value);
  }
  /**
   * 设置背景图像相对于视口、元素或局部滚动内容的固定方式。
   *
   * CSS 规范初始值：scroll。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  backgroundAttachment<const Value>(value: PropertyInput<'backgroundAttachment', T, Value>): this {
    return this.write('backgroundAttachment', value);
  }
  /**
   * 设置背景图层彼此之间以及与背景色之间的混合模式。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  backgroundBlendMode<const Value>(value: PropertyInput<'backgroundBlendMode', T, Value>): this {
    return this.write('backgroundBlendMode', value);
  }
  /**
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：border-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  backgroundClip<const Value>(value: PropertyInput<'backgroundClip', T, Value>): this {
    return this.write('backgroundClip', value);
  }
  /**
   * 设置元素背景颜色，位于背景图像下方。
   *
   * CSS 规范初始值：transparent。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  backgroundColor<const Value>(value: PropertyInput<'backgroundColor', T, Value>): this {
    return this.write('backgroundColor', value);
  }
  /**
   * 设置一个或多个背景图像或渐变图层。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  backgroundImage<const Value>(value: PropertyInput<'backgroundImage', T, Value>): this {
    return this.write('backgroundImage', value);
  }
  /**
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：padding-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  backgroundOrigin<const Value>(value: PropertyInput<'backgroundOrigin', T, Value>): this {
    return this.write('backgroundOrigin', value);
  }
  /**
   * 设置背景图像在定位区域内的位置。
   *
   * CSS 规范初始值：0% 0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  backgroundPosition<const Value>(value: PropertyInput<'backgroundPosition', T, Value>): this {
    return this.write('backgroundPosition', value);
  }
  /**
   * 设置背景图像的水平位置。
   *
   * CSS 规范初始值：0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  backgroundPositionX<const Value>(value: PropertyInput<'backgroundPositionX', T, Value>): this {
    return this.write('backgroundPositionX', value);
  }
  /**
   * 设置背景图像的垂直位置。
   *
   * CSS 规范初始值：0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  backgroundPositionY<const Value>(value: PropertyInput<'backgroundPositionY', T, Value>): this {
    return this.write('backgroundPositionY', value);
  }
  /**
   * 设置背景图像在水平和垂直方向上的重复方式。
   *
   * CSS 规范初始值：repeat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  backgroundRepeat<const Value>(value: PropertyInput<'backgroundRepeat', T, Value>): this {
    return this.write('backgroundRepeat', value);
  }
  /**
   * 设置背景图像尺寸，以及覆盖或完整容纳图像的缩放方式。
   *
   * 改变背景图像的尺寸，不改变元素尺寸；位置由 background-position 决定。
   *
   * 适用场景：背景封面或需要完整显示的背景装饰。
   *
   * 常用值：`auto`、`contain`、`cover`。
   *
   * CSS 规范初始值：auto auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.backgroundSize("cover").backgroundPosition("center")
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
   */
  backgroundSize<const Value>(value: PropertyInput<'backgroundSize', T, Value>): this {
    return this.write('backgroundSize', value);
  }
  /**
   * 设置可编辑内容中的文本插入光标颜色。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  caretColor<const Value>(value: PropertyInput<'caretColor', T, Value>): this {
    return this.write('caretColor', value);
  }
  /**
   * 设置文字前景色，同时作为 currentColor 的来源。
   *
   * 改变文字和 currentColor 的来源，不会自动改变背景。颜色函数方法返回完整 color 声明。
   *
   * CSS 规范初始值：canvastext。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.color("rgb(255 0 0 / 0.5)")
   * @example
   * s.color("oklch(0.7 0.15 250)")
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
   */
  color<const Value>(value: PropertyInput<'color', T, Value>): this {
    return this.write('color', value);
  }
  /**
   * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。
   *
   * CSS 规范初始值：economy。不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  colorAdjust<const Value>(value: PropertyInput<'colorAdjust', T, Value>): this {
    return this.write('colorAdjust', value);
  }
  /**
   * 设置 SVG 图形颜色插值所用的色彩空间。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  colorInterpolation<const Value>(value: PropertyInput<'colorInterpolation', T, Value>): this {
    return this.write('colorInterpolation', value);
  }
  /**
   * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。
   *
   * CSS 规范初始值：linearRGB。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  colorInterpolationFilters<const Value>(
    value: PropertyInput<'colorInterpolationFilters', T, Value>,
  ): this {
    return this.write('colorInterpolationFilters', value);
  }
  /**
   * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  colorRendering<const Value>(value: PropertyInput<'colorRendering', T, Value>): this {
    return this.write('colorRendering', value);
  }
  /**
   * 声明元素支持的配色方案，影响原生控件、滚动条等浏览器绘制内容。
   *
   * 声明支持的方案不等于为应用生成主题颜色；文字、背景和业务 token 仍需自行定义。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  colorScheme<const Value>(value: PropertyInput<'colorScheme', T, Value>): this {
    return this.write('colorScheme', value);
  }
  /**
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：economy。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  printColorAdjust<const Value>(value: PropertyInput<'printColorAdjust', T, Value>): this {
    return this.write('printColorAdjust', value);
  }
  /**
   * 同时设置四边边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-width: 见其子属性；border-style: 见其子属性；border-color: 见其子属性。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  border<const Value>(value: PropertyInput<'border', T, Value>): this {
    return this.write('border', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的边框。
   *
   * CSS 规范初始值：border-block-width: medium；border-block-style: none；border-block-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  borderBlock<const Value>(value: PropertyInput<'borderBlock', T, Value>): this {
    return this.write('borderBlock', value);
  }
  /**
   * 设置逻辑块轴两侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  borderBlockColor<const Value>(value: PropertyInput<'borderBlockColor', T, Value>): this {
    return this.write('borderBlockColor', value);
  }
  /**
   * 设置逻辑块轴结束侧边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-top-width: medium；border-top-style: none；border-top-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  borderBlockEnd<const Value>(value: PropertyInput<'borderBlockEnd', T, Value>): this {
    return this.write('borderBlockEnd', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  borderBlockEndColor<const Value>(value: PropertyInput<'borderBlockEndColor', T, Value>): this {
    return this.write('borderBlockEndColor', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  borderBlockEndStyle<const Value>(value: PropertyInput<'borderBlockEndStyle', T, Value>): this {
    return this.write('borderBlockEndStyle', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  borderBlockEndWidth<const Value>(value: PropertyInput<'borderBlockEndWidth', T, Value>): this {
    return this.write('borderBlockEndWidth', value);
  }
  /**
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-width: 见其子属性；border-style: 见其子属性；color: canvastext。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  borderBlockStart<const Value>(value: PropertyInput<'borderBlockStart', T, Value>): this {
    return this.write('borderBlockStart', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  borderBlockStartColor<const Value>(
    value: PropertyInput<'borderBlockStartColor', T, Value>,
  ): this {
    return this.write('borderBlockStartColor', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  borderBlockStartStyle<const Value>(
    value: PropertyInput<'borderBlockStartStyle', T, Value>,
  ): this {
    return this.write('borderBlockStartStyle', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  borderBlockStartWidth<const Value>(
    value: PropertyInput<'borderBlockStartWidth', T, Value>,
  ): this {
    return this.write('borderBlockStartWidth', value);
  }
  /**
   * 设置逻辑块轴两侧的边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  borderBlockStyle<const Value>(value: PropertyInput<'borderBlockStyle', T, Value>): this {
    return this.write('borderBlockStyle', value);
  }
  /**
   * 设置逻辑块轴两侧的边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  borderBlockWidth<const Value>(value: PropertyInput<'borderBlockWidth', T, Value>): this {
    return this.write('borderBlockWidth', value);
  }
  /**
   * 设置下边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-bottom-width: medium；border-bottom-style: none；border-bottom-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  borderBottom<const Value>(value: PropertyInput<'borderBottom', T, Value>): this {
    return this.write('borderBottom', value);
  }
  /**
   * 设置下边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  borderBottomColor<const Value>(value: PropertyInput<'borderBottomColor', T, Value>): this {
    return this.write('borderBottomColor', value);
  }
  /**
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  borderBottomLeftRadius<const Value>(
    value: PropertyInput<'borderBottomLeftRadius', T, Value>,
  ): this {
    return this.write('borderBottomLeftRadius', value);
  }
  /**
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  borderBottomRightRadius<const Value>(
    value: PropertyInput<'borderBottomRightRadius', T, Value>,
  ): this {
    return this.write('borderBottomRightRadius', value);
  }
  /**
   * 设置下边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  borderBottomStyle<const Value>(value: PropertyInput<'borderBottomStyle', T, Value>): this {
    return this.write('borderBottomStyle', value);
  }
  /**
   * 设置下边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  borderBottomWidth<const Value>(value: PropertyInput<'borderBottomWidth', T, Value>): this {
    return this.write('borderBottomWidth', value);
  }
  /**
   * 设置表格相邻单元格边框合并还是分离。
   *
   * CSS 规范初始值：separate。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  borderCollapse<const Value>(value: PropertyInput<'borderCollapse', T, Value>): this {
    return this.write('borderCollapse', value);
  }
  /**
   * 设置四边边框颜色，支持按上、右、下、左顺序简写。
   *
   * CSS 规范初始值：border-top-color: currentcolor；border-right-color: currentcolor；border-bottom-color: currentcolor；border-left-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  borderColor<const Value>(value: PropertyInput<'borderColor', T, Value>): this {
    return this.write('borderColor', value);
  }
  /**
   * 设置逻辑块轴结束侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  borderEndEndRadius<const Value>(value: PropertyInput<'borderEndEndRadius', T, Value>): this {
    return this.write('borderEndEndRadius', value);
  }
  /**
   * 设置逻辑块轴结束侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  borderEndStartRadius<const Value>(value: PropertyInput<'borderEndStartRadius', T, Value>): this {
    return this.write('borderEndStartRadius', value);
  }
  /**
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * CSS 规范初始值：border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  borderImage<const Value>(value: PropertyInput<'borderImage', T, Value>): this {
    return this.write('borderImage', value);
  }
  /**
   * 设置边框图像超出边框盒的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  borderImageOutset<const Value>(value: PropertyInput<'borderImageOutset', T, Value>): this {
    return this.write('borderImageOutset', value);
  }
  /**
   * 设置边框图像切片沿边框的重复或拉伸方式。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  borderImageRepeat<const Value>(value: PropertyInput<'borderImageRepeat', T, Value>): this {
    return this.write('borderImageRepeat', value);
  }
  /**
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：100%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  borderImageSlice<const Value>(value: PropertyInput<'borderImageSlice', T, Value>): this {
    return this.write('borderImageSlice', value);
  }
  /**
   * 指定边框使用的图像或渐变。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  borderImageSource<const Value>(value: PropertyInput<'borderImageSource', T, Value>): this {
    return this.write('borderImageSource', value);
  }
  /**
   * 设置边框图像各边的绘制宽度。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  borderImageWidth<const Value>(value: PropertyInput<'borderImageWidth', T, Value>): this {
    return this.write('borderImageWidth', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的边框。
   *
   * CSS 规范初始值：border-inline-width: medium；border-inline-style: none；border-inline-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  borderInline<const Value>(value: PropertyInput<'borderInline', T, Value>): this {
    return this.write('borderInline', value);
  }
  /**
   * 设置逻辑行内轴两侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  borderInlineColor<const Value>(value: PropertyInput<'borderInlineColor', T, Value>): this {
    return this.write('borderInlineColor', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-width: 见其子属性；border-style: 见其子属性；color: canvastext。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  borderInlineEnd<const Value>(value: PropertyInput<'borderInlineEnd', T, Value>): this {
    return this.write('borderInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  borderInlineEndColor<const Value>(value: PropertyInput<'borderInlineEndColor', T, Value>): this {
    return this.write('borderInlineEndColor', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  borderInlineEndStyle<const Value>(value: PropertyInput<'borderInlineEndStyle', T, Value>): this {
    return this.write('borderInlineEndStyle', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  borderInlineEndWidth<const Value>(value: PropertyInput<'borderInlineEndWidth', T, Value>): this {
    return this.write('borderInlineEndWidth', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-width: 见其子属性；border-style: 见其子属性；color: canvastext。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  borderInlineStart<const Value>(value: PropertyInput<'borderInlineStart', T, Value>): this {
    return this.write('borderInlineStart', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  borderInlineStartColor<const Value>(
    value: PropertyInput<'borderInlineStartColor', T, Value>,
  ): this {
    return this.write('borderInlineStartColor', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  borderInlineStartStyle<const Value>(
    value: PropertyInput<'borderInlineStartStyle', T, Value>,
  ): this {
    return this.write('borderInlineStartStyle', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  borderInlineStartWidth<const Value>(
    value: PropertyInput<'borderInlineStartWidth', T, Value>,
  ): this {
    return this.write('borderInlineStartWidth', value);
  }
  /**
   * 设置逻辑行内轴两侧边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  borderInlineStyle<const Value>(value: PropertyInput<'borderInlineStyle', T, Value>): this {
    return this.write('borderInlineStyle', value);
  }
  /**
   * 设置逻辑行内轴两侧边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  borderInlineWidth<const Value>(value: PropertyInput<'borderInlineWidth', T, Value>): this {
    return this.write('borderInlineWidth', value);
  }
  /**
   * 设置左边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-left-width: medium；border-left-style: none；border-left-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  borderLeft<const Value>(value: PropertyInput<'borderLeft', T, Value>): this {
    return this.write('borderLeft', value);
  }
  /**
   * 设置左边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  borderLeftColor<const Value>(value: PropertyInput<'borderLeftColor', T, Value>): this {
    return this.write('borderLeftColor', value);
  }
  /**
   * 设置左边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  borderLeftStyle<const Value>(value: PropertyInput<'borderLeftStyle', T, Value>): this {
    return this.write('borderLeftStyle', value);
  }
  /**
   * 设置左边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  borderLeftWidth<const Value>(value: PropertyInput<'borderLeftWidth', T, Value>): this {
    return this.write('borderLeftWidth', value);
  }
  /**
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   *
   * CSS 规范初始值：border-top-left-radius: 0；border-top-right-radius: 0；border-bottom-right-radius: 0；border-bottom-left-radius: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.borderRadius("8px")
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
   */
  borderRadius<const Value>(value: PropertyInput<'borderRadius', T, Value>): this {
    return this.write('borderRadius', value);
  }
  /**
   * 设置右边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-right-width: medium；border-right-style: none；border-right-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  borderRight<const Value>(value: PropertyInput<'borderRight', T, Value>): this {
    return this.write('borderRight', value);
  }
  /**
   * 设置右边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  borderRightColor<const Value>(value: PropertyInput<'borderRightColor', T, Value>): this {
    return this.write('borderRightColor', value);
  }
  /**
   * 设置右边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  borderRightStyle<const Value>(value: PropertyInput<'borderRightStyle', T, Value>): this {
    return this.write('borderRightStyle', value);
  }
  /**
   * 设置右边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  borderRightWidth<const Value>(value: PropertyInput<'borderRightWidth', T, Value>): this {
    return this.write('borderRightWidth', value);
  }
  /**
   * 设置分离边框模型下表格单元格之间的水平和垂直间距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  borderSpacing<const Value>(value: PropertyInput<'borderSpacing', T, Value>): this {
    return this.write('borderSpacing', value);
  }
  /**
   * 设置逻辑块轴起始侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  borderStartEndRadius<const Value>(value: PropertyInput<'borderStartEndRadius', T, Value>): this {
    return this.write('borderStartEndRadius', value);
  }
  /**
   * 设置逻辑块轴起始侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  borderStartStartRadius<const Value>(
    value: PropertyInput<'borderStartStartRadius', T, Value>,
  ): this {
    return this.write('borderStartStartRadius', value);
  }
  /**
   * 设置四边边框线型。
   *
   * CSS 规范初始值：border-top-style: none；border-right-style: none；border-bottom-style: none；border-left-style: none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  borderStyle<const Value>(value: PropertyInput<'borderStyle', T, Value>): this {
    return this.write('borderStyle', value);
  }
  /**
   * 设置上边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-top-width: medium；border-top-style: none；border-top-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  borderTop<const Value>(value: PropertyInput<'borderTop', T, Value>): this {
    return this.write('borderTop', value);
  }
  /**
   * 设置上边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  borderTopColor<const Value>(value: PropertyInput<'borderTopColor', T, Value>): this {
    return this.write('borderTopColor', value);
  }
  /**
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  borderTopLeftRadius<const Value>(value: PropertyInput<'borderTopLeftRadius', T, Value>): this {
    return this.write('borderTopLeftRadius', value);
  }
  /**
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  borderTopRightRadius<const Value>(value: PropertyInput<'borderTopRightRadius', T, Value>): this {
    return this.write('borderTopRightRadius', value);
  }
  /**
   * 设置上边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  borderTopStyle<const Value>(value: PropertyInput<'borderTopStyle', T, Value>): this {
    return this.write('borderTopStyle', value);
  }
  /**
   * 设置上边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  borderTopWidth<const Value>(value: PropertyInput<'borderTopWidth', T, Value>): this {
    return this.write('borderTopWidth', value);
  }
  /**
   * 设置四边边框宽度；可见边框通常还需要非 none 的线型。
   *
   * CSS 规范初始值：border-top-width: medium；border-right-width: medium；border-bottom-width: medium；border-left-width: medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  borderWidth<const Value>(value: PropertyInput<'borderWidth', T, Value>): this {
    return this.write('borderWidth', value);
  }
  /**
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * CSS 规范初始值：column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  columnRule<const Value>(value: PropertyInput<'columnRule', T, Value>): this {
    return this.write('columnRule', value);
  }
  /**
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  columnRuleColor<const Value>(value: PropertyInput<'columnRuleColor', T, Value>): this {
    return this.write('columnRuleColor', value);
  }
  /**
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  columnRuleStyle<const Value>(value: PropertyInput<'columnRuleStyle', T, Value>): this {
    return this.write('columnRuleStyle', value);
  }
  /**
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  columnRuleWidth<const Value>(value: PropertyInput<'columnRuleWidth', T, Value>): this {
    return this.write('columnRuleWidth', value);
  }
  /**
   * 设置盒子外围轮廓线的宽度、线型和颜色，不占布局空间。
   *
   * 不占布局空间，可用 outline-offset 调整距离；键盘焦点指示不应被无替代地移除。
   *
   * 适用场景：控件焦点指示和不影响布局的轮廓。
   *
   * CSS 规范初始值：outline-width: medium；outline-style: none；outline-color: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.select(":focus-visible", s.outline("2px solid currentColor").outlineOffset("2px"))
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
   */
  outline<const Value>(value: PropertyInput<'outline', T, Value>): this {
    return this.write('outline', value);
  }
  /**
   * 设置轮廓线颜色。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  outlineColor<const Value>(value: PropertyInput<'outlineColor', T, Value>): this {
    return this.write('outlineColor', value);
  }
  /**
   * 设置轮廓线与边框边缘之间的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  outlineOffset<const Value>(value: PropertyInput<'outlineOffset', T, Value>): this {
    return this.write('outlineOffset', value);
  }
  /**
   * 设置轮廓线线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  outlineStyle<const Value>(value: PropertyInput<'outlineStyle', T, Value>): this {
    return this.write('outlineStyle', value);
  }
  /**
   * 设置轮廓线宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  outlineWidth<const Value>(value: PropertyInput<'outlineWidth', T, Value>): this {
    return this.write('outlineWidth', value);
  }
  /**
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  backdropFilter<const Value>(value: PropertyInput<'backdropFilter', T, Value>): this {
    return this.write('backdropFilter', value);
  }
  /**
   * 设置盒子的外部或内部阴影，可叠加多层。
   *
   * 阴影不占布局空间，可用逗号叠加；与 border/outline 的用途和绘制位置不同。
   *
   * 适用场景：浮层层次、卡片边缘或内凹效果。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.boxShadow("0 2px 8px rgb(0 0 0 / 0.15)")
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
   */
  boxShadow<const Value>(value: PropertyInput<'boxShadow', T, Value>): this {
    return this.write('boxShadow', value);
  }
  /**
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  clipPath<const Value>(value: PropertyInput<'clipPath', T, Value>): this {
    return this.write('clipPath', value);
  }
  /**
   * 设置 SVG 裁剪路径判断内部区域所用的填充规则。
   *
   * CSS 规范初始值：nonzero。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  clipRule<const Value>(value: PropertyInput<'clipRule', T, Value>): this {
    return this.write('clipRule', value);
  }
  /**
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  filter<const Value>(value: PropertyInput<'filter', T, Value>): this {
    return this.write('filter', value);
  }
  /**
   * 设置图像是否按元数据等信息调整方向。
   *
   * CSS 规范初始值：from-image。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  imageOrientation<const Value>(value: PropertyInput<'imageOrientation', T, Value>): this {
    return this.write('imageOrientation', value);
  }
  /**
   * 向浏览器指定图像缩放时的插值与清晰度偏好。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  imageRendering<const Value>(value: PropertyInput<'imageRendering', T, Value>): this {
    return this.write('imageRendering', value);
  }
  /**
   * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。
   *
   * CSS 规范初始值：1dppx。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  imageResolution<const Value>(value: PropertyInput<'imageResolution', T, Value>): this {
    return this.write('imageResolution', value);
  }
  /**
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   *
   * CSS 规范初始值：mask-image: none；mask-mode: match-source；mask-repeat: repeat；mask-position: 0% 0%；mask-clip: border-box；mask-origin: border-box；mask-size: auto；mask-composite: add。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  mask<const Value>(value: PropertyInput<'mask', T, Value>): this {
    return this.write('mask', value);
  }
  /**
   * 设置基于九宫格图像切片的边框遮罩。
   *
   * CSS 规范初始值：mask-border-mode: alpha；mask-border-outset: 0；mask-border-repeat: stretch；mask-border-slice: 0；mask-border-source: none；mask-border-width: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  maskBorder<const Value>(value: PropertyInput<'maskBorder', T, Value>): this {
    return this.write('maskBorder', value);
  }
  /**
   * 设置边框遮罩使用 alpha 还是亮度信息。
   *
   * CSS 规范初始值：alpha。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  maskBorderMode<const Value>(value: PropertyInput<'maskBorderMode', T, Value>): this {
    return this.write('maskBorderMode', value);
  }
  /**
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  maskBorderOutset<const Value>(value: PropertyInput<'maskBorderOutset', T, Value>): this {
    return this.write('maskBorderOutset', value);
  }
  /**
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  maskBorderRepeat<const Value>(value: PropertyInput<'maskBorderRepeat', T, Value>): this {
    return this.write('maskBorderRepeat', value);
  }
  /**
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  maskBorderSlice<const Value>(value: PropertyInput<'maskBorderSlice', T, Value>): this {
    return this.write('maskBorderSlice', value);
  }
  /**
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  maskBorderSource<const Value>(value: PropertyInput<'maskBorderSource', T, Value>): this {
    return this.write('maskBorderSource', value);
  }
  /**
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  maskBorderWidth<const Value>(value: PropertyInput<'maskBorderWidth', T, Value>): this {
    return this.write('maskBorderWidth', value);
  }
  /**
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：border-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  maskClip<const Value>(value: PropertyInput<'maskClip', T, Value>): this {
    return this.write('maskClip', value);
  }
  /**
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：add。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  maskComposite<const Value>(value: PropertyInput<'maskComposite', T, Value>): this {
    return this.write('maskComposite', value);
  }
  /**
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  maskImage<const Value>(value: PropertyInput<'maskImage', T, Value>): this {
    return this.write('maskImage', value);
  }
  /**
   * 设置遮罩按 alpha、亮度或源类型解释。
   *
   * CSS 规范初始值：match-source。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  maskMode<const Value>(value: PropertyInput<'maskMode', T, Value>): this {
    return this.write('maskMode', value);
  }
  /**
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：border-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  maskOrigin<const Value>(value: PropertyInput<'maskOrigin', T, Value>): this {
    return this.write('maskOrigin', value);
  }
  /**
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：0% 0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  maskPosition<const Value>(value: PropertyInput<'maskPosition', T, Value>): this {
    return this.write('maskPosition', value);
  }
  /**
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：repeat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  maskRepeat<const Value>(value: PropertyInput<'maskRepeat', T, Value>): this {
    return this.write('maskRepeat', value);
  }
  /**
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  maskSize<const Value>(value: PropertyInput<'maskSize', T, Value>): this {
    return this.write('maskSize', value);
  }
  /**
   * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。
   *
   * CSS 规范初始值：luminance。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  maskType<const Value>(value: PropertyInput<'maskType', T, Value>): this {
    return this.write('maskType', value);
  }
  /**
   * 设置元素整体与其背后内容的颜色混合方式。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  mixBlendMode<const Value>(value: PropertyInput<'mixBlendMode', T, Value>): this {
    return this.write('mixBlendMode', value);
  }
  /**
   * 设置替换元素的内容如何适应其内容盒，例如图像的裁切和缩放。
   *
   * 控制 img、video 等替换内容在盒子内部的缩放与裁剪；不改变盒子本身的 width/height。
   *
   * 适用场景：封面裁剪、头像和完整图像预览。
   *
   * 常用值：`fill`、`contain`、`cover`、`none`、`scale-down`。
   *
   * CSS 规范初始值：fill。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.width("80px").height("80px").objectFit("cover")
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  objectFit<const Value>(value: PropertyInput<'objectFit', T, Value>): this {
    return this.write('objectFit', value);
  }
  /**
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * CSS 规范初始值：50% 50%。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  objectPosition<const Value>(value: PropertyInput<'objectPosition', T, Value>): this {
    return this.write('objectPosition', value);
  }
  /**
   * 设置替换元素内容的可视区域，控制用于呈现的图像范围。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  objectViewBox<const Value>(value: PropertyInput<'objectViewBox', T, Value>): this {
    return this.write('objectViewBox', value);
  }
  /**
   * 设置元素及其子树合成后的整体不透明度。
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.opacity(0.5)
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
   */
  opacity<const Value>(value: PropertyInput<'opacity', T, Value>): this {
    return this.write('opacity', value);
  }
  /**
   * 设置从图像 alpha 信息提取环绕形状时的阈值。
   *
   * CSS 规范初始值：0.0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  shapeImageThreshold<const Value>(value: PropertyInput<'shapeImageThreshold', T, Value>): this {
    return this.write('shapeImageThreshold', value);
  }
  /**
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  shapeMargin<const Value>(value: PropertyInput<'shapeMargin', T, Value>): this {
    return this.write('shapeMargin', value);
  }
  /**
   * 设置浮动元素周围行内内容所环绕的形状。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  shapeOutside<const Value>(value: PropertyInput<'shapeOutside', T, Value>): this {
    return this.write('shapeOutside', value);
  }
  /**
   * 向 SVG 渲染器提供图形绘制精度与速度的偏好。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  shapeRendering<const Value>(value: PropertyInput<'shapeRendering', T, Value>): this {
    return this.write('shapeRendering', value);
  }
  /**
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * CSS 规范初始值：animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  animation<const Value>(value: PropertyInput<'animation', T, Value>): this {
    return this.write('animation', value);
  }
  /**
   * 设置动画效果与底层属性值的替换、叠加或累积方式。
   *
   * CSS 规范初始值：replace。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  animationComposition<const Value>(value: PropertyInput<'animationComposition', T, Value>): this {
    return this.write('animationComposition', value);
  }
  /**
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  animationDelay<const Value>(value: PropertyInput<'animationDelay', T, Value>): this {
    return this.write('animationDelay', value);
  }
  /**
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  animationDirection<const Value>(value: PropertyInput<'animationDirection', T, Value>): this {
    return this.write('animationDirection', value);
  }
  /**
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  animationDuration<const Value>(value: PropertyInput<'animationDuration', T, Value>): this {
    return this.write('animationDuration', value);
  }
  /**
   * 设置动画在有效播放区间之外是否应用关键帧样式。
   *
   * 控制动画有效播放区间之外的样式，不会把最终值写回普通 CSS 声明。
   *
   * 适用场景：控制延迟阶段和播放结束后的动画呈现。
   *
   * 常用值：`none`、`forwards`、`backwards`、`both`。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.animationFillMode("forwards")
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
   */
  animationFillMode<const Value>(value: PropertyInput<'animationFillMode', T, Value>): this {
    return this.write('animationFillMode', value);
  }
  /**
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  animationIterationCount<const Value>(
    value: PropertyInput<'animationIterationCount', T, Value>,
  ): this {
    return this.write('animationIterationCount', value);
  }
  /**
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  animationName<const Value>(value: PropertyInput<'animationName', T, Value>): this {
    return this.write('animationName', value);
  }
  /**
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：running。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  animationPlayState<const Value>(value: PropertyInput<'animationPlayState', T, Value>): this {
    return this.write('animationPlayState', value);
  }
  /**
   * 设置动画附着到时间线的起止范围。
   *
   * CSS 规范初始值：animation-range-start: normal；animation-range-end: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  animationRange<const Value>(value: PropertyInput<'animationRange', T, Value>): this {
    return this.write('animationRange', value);
  }
  /**
   * 设置动画在时间线上的附着范围终点。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  animationRangeEnd<const Value>(value: PropertyInput<'animationRangeEnd', T, Value>): this {
    return this.write('animationRangeEnd', value);
  }
  /**
   * 设置动画在时间线上的附着范围起点。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  animationRangeStart<const Value>(value: PropertyInput<'animationRangeStart', T, Value>): this {
    return this.write('animationRangeStart', value);
  }
  /**
   * 选择驱动动画的时间线，例如文档时间或滚动进度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  animationTimeline<const Value>(value: PropertyInput<'animationTimeline', T, Value>): this {
    return this.write('animationTimeline', value);
  }
  /**
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  animationTimingFunction<const Value>(
    value: PropertyInput<'animationTimingFunction', T, Value>,
  ): this {
    return this.write('animationTimingFunction', value);
  }
  /**
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  backfaceVisibility<const Value>(value: PropertyInput<'backfaceVisibility', T, Value>): this {
    return this.write('backfaceVisibility', value);
  }
  /**
   * 集中设置运动路径、起始位置、距离、方向和锚点。
   *
   * CSS 规范初始值：offset-position: normal；offset-path: none；offset-distance: 0；offset-anchor: auto；offset-rotate: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  offset<const Value>(value: PropertyInput<'offset', T, Value>): this {
    return this.write('offset', value);
  }
  /**
   * 设置元素沿运动路径移动时与路径相接的内部锚点。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  offsetAnchor<const Value>(value: PropertyInput<'offsetAnchor', T, Value>): this {
    return this.write('offsetAnchor', value);
  }
  /**
   * 设置元素沿运动路径行进的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  offsetDistance<const Value>(value: PropertyInput<'offsetDistance', T, Value>): this {
    return this.write('offsetDistance', value);
  }
  /**
   * 设置元素运动所沿用的路径。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  offsetPath<const Value>(value: PropertyInput<'offsetPath', T, Value>): this {
    return this.write('offsetPath', value);
  }
  /**
   * 设置运动路径的初始位置。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  offsetPosition<const Value>(value: PropertyInput<'offsetPosition', T, Value>): this {
    return this.write('offsetPosition', value);
  }
  /**
   * 设置元素沿运动路径移动时的方向和附加旋转。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  offsetRotate<const Value>(value: PropertyInput<'offsetRotate', T, Value>): this {
    return this.write('offsetRotate', value);
  }
  /**
   * 设置路径旋转的旧名称；新代码使用 offset-rotate。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotation
   */
  offsetRotation<const Value>(value: PropertyInput<'offsetRotation', T, Value>): this {
    return this.write('offsetRotation', value);
  }
  /**
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  perspective<const Value>(value: PropertyInput<'perspective', T, Value>): this {
    return this.write('perspective', value);
  }
  /**
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：50% 50%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  perspectiveOrigin<const Value>(value: PropertyInput<'perspectiveOrigin', T, Value>): this {
    return this.write('perspectiveOrigin', value);
  }
  /**
   * 独立设置元素旋转，不必重写 transform 中的其他变换。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  rotate<const Value>(value: PropertyInput<'rotate', T, Value>): this {
    return this.write('rotate', value);
  }
  /**
   * 独立设置元素的缩放比例。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  scale<const Value>(value: PropertyInput<'scale', T, Value>): this {
    return this.write('scale', value);
  }
  /**
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.transform("translateX(8px) scale(1.05)")
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
   */
  transform<const Value>(value: PropertyInput<'transform', T, Value>): this {
    return this.write('transform', value);
  }
  /**
   * 设置变换及其原点所依据的参照盒。
   *
   * CSS 规范初始值：view-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  transformBox<const Value>(value: PropertyInput<'transformBox', T, Value>): this {
    return this.write('transformBox', value);
  }
  /**
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：50% 50% 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  transformOrigin<const Value>(value: PropertyInput<'transformOrigin', T, Value>): this {
    return this.write('transformOrigin', value);
  }
  /**
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：flat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  transformStyle<const Value>(value: PropertyInput<'transformStyle', T, Value>): this {
    return this.write('transformStyle', value);
  }
  /**
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   *
   * CSS 规范初始值：transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.transition("opacity 160ms ease")
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  transition<const Value>(value: PropertyInput<'transition', T, Value>): this {
    return this.write('transition', value);
  }
  /**
   * 控制离散属性是否可以启动 CSS 过渡。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  transitionBehavior<const Value>(value: PropertyInput<'transitionBehavior', T, Value>): this {
    return this.write('transitionBehavior', value);
  }
  /**
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  transitionDelay<const Value>(value: PropertyInput<'transitionDelay', T, Value>): this {
    return this.write('transitionDelay', value);
  }
  /**
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  transitionDuration<const Value>(value: PropertyInput<'transitionDuration', T, Value>): this {
    return this.write('transitionDuration', value);
  }
  /**
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * CSS 规范初始值：all。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  transitionProperty<const Value>(value: PropertyInput<'transitionProperty', T, Value>): this {
    return this.write('transitionProperty', value);
  }
  /**
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  transitionTimingFunction<const Value>(
    value: PropertyInput<'transitionTimingFunction', T, Value>,
  ): this {
    return this.write('transitionTimingFunction', value);
  }
  /**
   * 独立设置元素在二维或三维空间中的平移。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  translate<const Value>(value: PropertyInput<'translate', T, Value>): this {
    return this.write('translate', value);
  }
  /**
   * 为视图过渡的快照伪元素分组，以便共用样式。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  viewTransitionClass<const Value>(value: PropertyInput<'viewTransitionClass', T, Value>): this {
    return this.write('viewTransitionClass', value);
  }
  /**
   * 为视图过渡中的元素命名，以匹配前后状态的快照。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  viewTransitionName<const Value>(value: PropertyInput<'viewTransitionName', T, Value>): this {
    return this.write('viewTransitionName', value);
  }
  /**
   * 设置内容超出盒子时的裁剪和滚动行为。
   *
   * 一个值同时设置两轴；两个值依次设置 overflow-x、overflow-y。通常需要尺寸约束才会出现可滚动的溢出。
   *
   * 适用场景：滚动面板、内容裁剪和受限尺寸区域。
   *
   * 常用值：`visible`、`hidden`、`clip`、`auto`、`scroll`。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.maxHeight("20rem").overflow("auto")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  overflow<const Value>(value: PropertyInput<'overflow', T, Value>): this {
    return this.write('overflow', value);
  }
  /**
   * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  overflowAnchor<const Value>(value: PropertyInput<'overflowAnchor', T, Value>): this {
    return this.write('overflowAnchor', value);
  }
  /**
   * 设置逻辑块轴上的溢出行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  overflowBlock<const Value>(value: PropertyInput<'overflowBlock', T, Value>): this {
    return this.write('overflowBlock', value);
  }
  /**
   * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：padding-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  overflowClipBox<const Value>(value: PropertyInput<'overflowClipBox', T, Value>): this {
    return this.write('overflowClipBox', value);
  }
  /**
   * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。
   *
   * CSS 规范初始值：0px。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  overflowClipMargin<const Value>(value: PropertyInput<'overflowClipMargin', T, Value>): this {
    return this.write('overflowClipMargin', value);
  }
  /**
   * 设置逻辑行内轴上的溢出行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  overflowInline<const Value>(value: PropertyInput<'overflowInline', T, Value>): this {
    return this.write('overflowInline', value);
  }
  /**
   * 设置不可正常断开的长文本是否允许额外换行。
   *
   * 适用场景：防止 URL、标识符等长文本撑破容器。
   *
   * 常用值：`normal`、`anywhere`、`break-word`。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.overflowWrap("anywhere")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  overflowWrap<const Value>(value: PropertyInput<'overflowWrap', T, Value>): this {
    return this.write('overflowWrap', value);
  }
  /**
   * 设置水平方向的溢出行为。
   *
   * 和 overflow-y 的组合可能改变计算值；例如另一轴是 auto 时，visible 可能按 auto 计算。
   *
   * 适用场景：横向滚动标签、宽表格或水平内容裁剪。
   *
   * 常用值：`auto`、`hidden`、`clip`。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.overflowX("auto")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  overflowX<const Value>(value: PropertyInput<'overflowX', T, Value>): this {
    return this.write('overflowX', value);
  }
  /**
   * 设置垂直方向的溢出行为。
   *
   * 通常配合 height/max-height 或可收缩的布局区域使用。
   *
   * 适用场景：纵向列表和弹窗内容区。
   *
   * 常用值：`auto`、`hidden`、`clip`。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.maxHeight("20rem").overflowY("auto")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  overflowY<const Value>(value: PropertyInput<'overflowY', T, Value>): this {
    return this.write('overflowY', value);
  }
  /**
   * 控制滚动到边界后的滚动链和越界反馈行为。
   *
   * 适用场景：阻止弹窗或内部滚动面板到达边界后继续滚动外层页面。
   *
   * 常用值：`auto`、`contain`、`none`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.overflowY("auto").overscrollBehavior("contain")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
   */
  overscrollBehavior<const Value>(value: PropertyInput<'overscrollBehavior', T, Value>): this {
    return this.write('overscrollBehavior', value);
  }
  /**
   * 控制逻辑块轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  overscrollBehaviorBlock<const Value>(
    value: PropertyInput<'overscrollBehaviorBlock', T, Value>,
  ): this {
    return this.write('overscrollBehaviorBlock', value);
  }
  /**
   * 控制逻辑行内轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  overscrollBehaviorInline<const Value>(
    value: PropertyInput<'overscrollBehaviorInline', T, Value>,
  ): this {
    return this.write('overscrollBehaviorInline', value);
  }
  /**
   * 控制水平方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  overscrollBehaviorX<const Value>(value: PropertyInput<'overscrollBehaviorX', T, Value>): this {
    return this.write('overscrollBehaviorX', value);
  }
  /**
   * 控制垂直方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  overscrollBehaviorY<const Value>(value: PropertyInput<'overscrollBehaviorY', T, Value>): this {
    return this.write('overscrollBehaviorY', value);
  }
  /**
   * 设置滚动条滑块和轨道的颜色。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  scrollbarColor<const Value>(value: PropertyInput<'scrollbarColor', T, Value>): this {
    return this.write('scrollbarColor', value);
  }
  /**
   * 设置是否预留滚动条槽位，以减少滚动条出现时的布局变化。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  scrollbarGutter<const Value>(value: PropertyInput<'scrollbarGutter', T, Value>): this {
    return this.write('scrollbarGutter', value);
  }
  /**
   * 设置滚动条采用正常、较细或隐藏的外观。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  scrollbarWidth<const Value>(value: PropertyInput<'scrollbarWidth', T, Value>): this {
    return this.write('scrollbarWidth', value);
  }
  /**
   * 设置由导航或滚动 API 触发的滚动采用即时还是平滑方式。
   *
   * 主要影响导航和滚动 API 触发的滚动，不会把所有用户滚动强制变成动画。
   *
   * 适用场景：锚点跳转或程序化滚动；应同时考虑减少动态效果的用户偏好。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.scrollBehavior("smooth")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  scrollBehavior<const Value>(value: PropertyInput<'scrollBehavior', T, Value>): this {
    return this.write('scrollBehavior', value);
  }
  /**
   * 将元素声明为祖先滚动容器首次呈现时的候选滚动吸附目标。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  scrollInitialTarget<const Value>(value: PropertyInput<'scrollInitialTarget', T, Value>): this {
    return this.write('scrollInitialTarget', value);
  }
  /**
   * 设置元素滚动目标区域的四边外扩距离，不改变普通布局外边距。
   *
   * CSS 规范初始值：scroll-margin-bottom: 0；scroll-margin-left: 0；scroll-margin-right: 0；scroll-margin-top: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  scrollMargin<const Value>(value: PropertyInput<'scrollMargin', T, Value>): this {
    return this.write('scrollMargin', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴两侧的外扩距离。
   *
   * CSS 规范初始值：scroll-margin-block-start: 0；scroll-margin-block-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  scrollMarginBlock<const Value>(value: PropertyInput<'scrollMarginBlock', T, Value>): this {
    return this.write('scrollMarginBlock', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴结束侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  scrollMarginBlockEnd<const Value>(value: PropertyInput<'scrollMarginBlockEnd', T, Value>): this {
    return this.write('scrollMarginBlockEnd', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴起始侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  scrollMarginBlockStart<const Value>(
    value: PropertyInput<'scrollMarginBlockStart', T, Value>,
  ): this {
    return this.write('scrollMarginBlockStart', value);
  }
  /**
   * 设置滚动目标区域下侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  scrollMarginBottom<const Value>(value: PropertyInput<'scrollMarginBottom', T, Value>): this {
    return this.write('scrollMarginBottom', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴两侧的外扩距离。
   *
   * CSS 规范初始值：scroll-margin-inline-start: 0；scroll-margin-inline-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  scrollMarginInline<const Value>(value: PropertyInput<'scrollMarginInline', T, Value>): this {
    return this.write('scrollMarginInline', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴结束侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  scrollMarginInlineEnd<const Value>(
    value: PropertyInput<'scrollMarginInlineEnd', T, Value>,
  ): this {
    return this.write('scrollMarginInlineEnd', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴起始侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  scrollMarginInlineStart<const Value>(
    value: PropertyInput<'scrollMarginInlineStart', T, Value>,
  ): this {
    return this.write('scrollMarginInlineStart', value);
  }
  /**
   * 设置滚动目标区域左侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  scrollMarginLeft<const Value>(value: PropertyInput<'scrollMarginLeft', T, Value>): this {
    return this.write('scrollMarginLeft', value);
  }
  /**
   * 设置滚动目标区域右侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  scrollMarginRight<const Value>(value: PropertyInput<'scrollMarginRight', T, Value>): this {
    return this.write('scrollMarginRight', value);
  }
  /**
   * 设置滚动目标区域上侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  scrollMarginTop<const Value>(value: PropertyInput<'scrollMarginTop', T, Value>): this {
    return this.write('scrollMarginTop', value);
  }
  /**
   * 设置滚动容器最佳可视区域的四边内缩距离。
   *
   * CSS 规范初始值：scroll-padding-bottom: auto；scroll-padding-left: auto；scroll-padding-right: auto；scroll-padding-top: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  scrollPadding<const Value>(value: PropertyInput<'scrollPadding', T, Value>): this {
    return this.write('scrollPadding', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴两侧的内缩距离。
   *
   * CSS 规范初始值：scroll-padding-block-start: auto；scroll-padding-block-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  scrollPaddingBlock<const Value>(value: PropertyInput<'scrollPaddingBlock', T, Value>): this {
    return this.write('scrollPaddingBlock', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴结束侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  scrollPaddingBlockEnd<const Value>(
    value: PropertyInput<'scrollPaddingBlockEnd', T, Value>,
  ): this {
    return this.write('scrollPaddingBlockEnd', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴起始侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  scrollPaddingBlockStart<const Value>(
    value: PropertyInput<'scrollPaddingBlockStart', T, Value>,
  ): this {
    return this.write('scrollPaddingBlockStart', value);
  }
  /**
   * 设置滚动容器最佳可视区域下侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  scrollPaddingBottom<const Value>(value: PropertyInput<'scrollPaddingBottom', T, Value>): this {
    return this.write('scrollPaddingBottom', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴两侧的内缩距离。
   *
   * CSS 规范初始值：scroll-padding-inline-start: auto；scroll-padding-inline-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  scrollPaddingInline<const Value>(value: PropertyInput<'scrollPaddingInline', T, Value>): this {
    return this.write('scrollPaddingInline', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴结束侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd<const Value>(
    value: PropertyInput<'scrollPaddingInlineEnd', T, Value>,
  ): this {
    return this.write('scrollPaddingInlineEnd', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴起始侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  scrollPaddingInlineStart<const Value>(
    value: PropertyInput<'scrollPaddingInlineStart', T, Value>,
  ): this {
    return this.write('scrollPaddingInlineStart', value);
  }
  /**
   * 设置滚动容器最佳可视区域左侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  scrollPaddingLeft<const Value>(value: PropertyInput<'scrollPaddingLeft', T, Value>): this {
    return this.write('scrollPaddingLeft', value);
  }
  /**
   * 设置滚动容器最佳可视区域右侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  scrollPaddingRight<const Value>(value: PropertyInput<'scrollPaddingRight', T, Value>): this {
    return this.write('scrollPaddingRight', value);
  }
  /**
   * 设置滚动容器最佳可视区域上侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  scrollPaddingTop<const Value>(value: PropertyInput<'scrollPaddingTop', T, Value>): this {
    return this.write('scrollPaddingTop', value);
  }
  /**
   * 设置元素作为滚动吸附目标时在块轴和行内轴上的对齐位置。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  scrollSnapAlign<const Value>(value: PropertyInput<'scrollSnapAlign', T, Value>): this {
    return this.write('scrollSnapAlign', value);
  }
  /**
   * 设置滚动吸附区域外扩的旧名称；新代码使用 scroll-margin。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin
   */
  scrollSnapMargin<const Value>(value: PropertyInput<'scrollSnapMargin', T, Value>): this {
    return this.write('scrollSnapMargin', value);
  }
  /**
   * 设置滚动吸附区域下侧外扩的旧名称；新代码使用 scroll-margin-bottom。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-bottom
   */
  scrollSnapMarginBottom<const Value>(
    value: PropertyInput<'scrollSnapMarginBottom', T, Value>,
  ): this {
    return this.write('scrollSnapMarginBottom', value);
  }
  /**
   * 设置滚动吸附区域左侧外扩的旧名称；新代码使用 scroll-margin-left。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-left
   */
  scrollSnapMarginLeft<const Value>(value: PropertyInput<'scrollSnapMarginLeft', T, Value>): this {
    return this.write('scrollSnapMarginLeft', value);
  }
  /**
   * 设置滚动吸附区域右侧外扩的旧名称；新代码使用 scroll-margin-right。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-right
   */
  scrollSnapMarginRight<const Value>(
    value: PropertyInput<'scrollSnapMarginRight', T, Value>,
  ): this {
    return this.write('scrollSnapMarginRight', value);
  }
  /**
   * 设置滚动吸附区域上侧外扩的旧名称；新代码使用 scroll-margin-top。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-top
   */
  scrollSnapMarginTop<const Value>(value: PropertyInput<'scrollSnapMarginTop', T, Value>): this {
    return this.write('scrollSnapMarginTop', value);
  }
  /**
   * 设置滚动时是否允许越过该元素的吸附位置。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  scrollSnapStop<const Value>(value: PropertyInput<'scrollSnapStop', T, Value>): this {
    return this.write('scrollSnapStop', value);
  }
  /**
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.scrollSnapType("x mandatory")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  scrollSnapType<const Value>(value: PropertyInput<'scrollSnapType', T, Value>): this {
    return this.write('scrollSnapType', value);
  }
  /**
   * 同时声明滚动进度时间线的名称和轴。
   *
   * CSS 规范初始值：scroll-timeline-name: none；scroll-timeline-axis: block。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  scrollTimeline<const Value>(value: PropertyInput<'scrollTimeline', T, Value>): this {
    return this.write('scrollTimeline', value);
  }
  /**
   * 设置滚动进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：block。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  scrollTimelineAxis<const Value>(value: PropertyInput<'scrollTimelineAxis', T, Value>): this {
    return this.write('scrollTimelineAxis', value);
  }
  /**
   * 声明基于当前容器滚动进度的时间线名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  scrollTimelineName<const Value>(value: PropertyInput<'scrollTimelineName', T, Value>): this {
    return this.write('scrollTimelineName', value);
  }
  /**
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  appearance<const Value>(value: PropertyInput<'appearance', T, Value>): this {
    return this.write('appearance', value);
  }
  /**
   * 集中设置文本插入光标的颜色和形状。
   *
   * CSS 规范初始值：caret-color: auto；caret-animation: auto；caret-shape: auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  caret<const Value>(value: PropertyInput<'caret', T, Value>): this {
    return this.write('caret', value);
  }
  /**
   * 设置文本插入光标的形状。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  caretShape<const Value>(value: PropertyInput<'caretShape', T, Value>): this {
    return this.write('caretShape', value);
  }
  /**
   * 控制是否渲染元素内容，并允许浏览器跳过暂时不可见的子树。
   *
   * 允许跳过子树渲染；跳过时的占位尺寸可由 contain-intrinsic-size 提供。
   *
   * 适用场景：页面中较长、暂时位于视口外的独立内容区域。
   *
   * 常用值：`visible`、`auto`、`hidden`。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.contentVisibility("auto")
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
   */
  contentVisibility<const Value>(value: PropertyInput<'contentVisibility', T, Value>): this {
    return this.write('contentVisibility', value);
  }
  /**
   * 设置指针位于元素上方时显示的光标。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  cursor<const Value>(value: PropertyInput<'cursor', T, Value>): this {
    return this.write('cursor', value);
  }
  /**
   * 设置元素何时可以成为指针命中目标；SVG 还支持按填充和描边命中。
   *
   * 控制指针命中，不等同于原生 disabled，也不会单独阻止键盘交互。
   *
   * 适用场景：允许指针穿过装饰层；可交互控件的禁用应同时处理行为和语义。
   *
   * 常用值：`auto`、`none`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.pointerEvents("none")
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  pointerEvents<const Value>(value: PropertyInput<'pointerEvents', T, Value>): this {
    return this.write('pointerEvents', value);
  }
  /**
   * 设置用户是否能调整元素尺寸以及可调整的方向。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  resize<const Value>(value: PropertyInput<'resize', T, Value>): this {
    return this.write('resize', value);
  }
  /**
   * 声明浏览器可以处理的触摸平移与缩放手势。
   *
   * 描述浏览器可接管的触摸手势，手势开始后再修改通常不会改变当前手势的处理。
   *
   * 适用场景：拖拽控件与页面滚动之间分配触摸方向；保留用户所需的缩放能力。
   *
   * 常用值：`manipulation`、`pan-x`、`pan-y`、`none`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.touchAction("pan-y")
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  touchAction<const Value>(value: PropertyInput<'touchAction', T, Value>): this {
    return this.write('touchAction', value);
  }
  /**
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.userSelect("all")
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  userSelect<const Value>(value: PropertyInput<'userSelect', T, Value>): this {
    return this.write('userSelect', value);
  }
  /**
   * 设置元素是否可见；隐藏通常保留布局空间。
   *
   * 适用场景：需要隐藏内容但通常保留其布局占位的场景。
   *
   * 常用值：`visible`、`hidden`、`collapse`。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.visibility("hidden")
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
   */
  visibility<const Value>(value: PropertyInput<'visibility', T, Value>): this {
    return this.write('visibility', value);
  }
  /**
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  breakAfter<const Value>(value: PropertyInput<'breakAfter', T, Value>): this {
    return this.write('breakAfter', value);
  }
  /**
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  breakBefore<const Value>(value: PropertyInput<'breakBefore', T, Value>): this {
    return this.write('breakBefore', value);
  }
  /**
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  breakInside<const Value>(value: PropertyInput<'breakInside', T, Value>): this {
    return this.write('breakInside', value);
  }
  /**
   * 设置表格标题相对于表格的放置侧。
   *
   * CSS 规范初始值：top。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  captionSide<const Value>(value: PropertyInput<'captionSide', T, Value>): this {
    return this.write('captionSide', value);
  }
  /**
   * 声明尺寸、布局、绘制或样式隔离，限制子树对外部的影响。
   *
   * 不同隔离类型会改变布局和绘制语义，不能仅当作无副作用的性能开关。
   *
   * 适用场景：边界明确且尺寸、溢出行为经过验证的独立区域。
   *
   * 常用值：`content`、`strict`、`size`、`paint`、`style`。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.contain("content")
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  contain<const Value>(value: PropertyInput<'contain', T, Value>): this {
    return this.write('contain', value);
  }
  /**
   * 同时声明查询容器的名称和类型。
   *
   * CSS 规范初始值：container-name: none；container-type: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  container<const Value>(value: PropertyInput<'container', T, Value>): this {
    return this.write('container', value);
  }
  /**
   * 为查询容器命名，供 @container 条件规则选择。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  containerName<const Value>(value: PropertyInput<'containerName', T, Value>): this {
    return this.write('containerName', value);
  }
  /**
   * 建立指定类型的查询容器，并施加所需的隔离行为。
   *
   * 建立尺寸查询容器会同时引入必要的隔离语义；容器本身的样式通常由祖先查询容器决定。
   *
   * 适用场景：让组件按所在容器尺寸响应，而不是只按视口响应。
   *
   * 常用值：`normal`、`inline-size`、`size`。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.containerType("inline-size")
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  containerType<const Value>(value: PropertyInput<'containerType', T, Value>): this {
    return this.write('containerType', value);
  }
  /**
   * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  containIntrinsicBlockSize<const Value>(
    value: PropertyInput<'containIntrinsicBlockSize', T, Value>,
  ): this {
    return this.write('containIntrinsicBlockSize', value);
  }
  /**
   * 设置高度隔离或跳过内容渲染时使用的替代内部高度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  containIntrinsicHeight<const Value>(
    value: PropertyInput<'containIntrinsicHeight', T, Value>,
  ): this {
    return this.write('containIntrinsicHeight', value);
  }
  /**
   * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  containIntrinsicInlineSize<const Value>(
    value: PropertyInput<'containIntrinsicInlineSize', T, Value>,
  ): this {
    return this.write('containIntrinsicInlineSize', value);
  }
  /**
   * 集中设置尺寸隔离时使用的替代内部宽高。
   *
   * CSS 规范初始值：contain-intrinsic-width: none；contain-intrinsic-height: none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  containIntrinsicSize<const Value>(value: PropertyInput<'containIntrinsicSize', T, Value>): this {
    return this.write('containIntrinsicSize', value);
  }
  /**
   * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  containIntrinsicWidth<const Value>(
    value: PropertyInput<'containIntrinsicWidth', T, Value>,
  ): this {
    return this.write('containIntrinsicWidth', value);
  }
  /**
   * 设置生成内容、替换内容或伪元素的内容。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  content<const Value>(value: PropertyInput<'content', T, Value>): this {
    return this.write('content', value);
  }
  /**
   * 增加或减少指定 CSS 计数器的值。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  counterIncrement<const Value>(value: PropertyInput<'counterIncrement', T, Value>): this {
    return this.write('counterIncrement', value);
  }
  /**
   * 创建或重置 CSS 计数器。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  counterReset<const Value>(value: PropertyInput<'counterReset', T, Value>): this {
    return this.write('counterReset', value);
  }
  /**
   * 设置已有 CSS 计数器的值，必要时创建计数器。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  counterSet<const Value>(value: PropertyInput<'counterSet', T, Value>): this {
    return this.write('counterSet', value);
  }
  /**
   * 控制分离边框表格中空单元格的边框和背景是否绘制。
   *
   * CSS 规范初始值：show。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  emptyCells<const Value>(value: PropertyInput<'emptyCells', T, Value>): this {
    return this.write('emptyCells', value);
  }
  /**
   * 集中设置列表标记的类型、图像和位置。
   *
   * CSS 规范初始值：list-style-type: disc；list-style-position: outside；list-style-image: none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  listStyle<const Value>(value: PropertyInput<'listStyle', T, Value>): this {
    return this.write('listStyle', value);
  }
  /**
   * 设置用作列表标记的图像。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  listStyleImage<const Value>(value: PropertyInput<'listStyleImage', T, Value>): this {
    return this.write('listStyleImage', value);
  }
  /**
   * 设置列表标记位于主块盒内部还是外部。
   *
   * CSS 规范初始值：outside。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  listStylePosition<const Value>(value: PropertyInput<'listStylePosition', T, Value>): this {
    return this.write('listStylePosition', value);
  }
  /**
   * 设置列表标记或计数器的样式。
   *
   * CSS 规范初始值：disc。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  listStyleType<const Value>(value: PropertyInput<'listStyleType', T, Value>): this {
    return this.write('listStyleType', value);
  }
  /**
   * 设置分页或分栏断点前需保留的最少行数。
   *
   * CSS 规范初始值：2。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  orphans<const Value>(value: PropertyInput<'orphans', T, Value>): this {
    return this.write('orphans', value);
  }
  /**
   * 选择分页媒体中使用的命名页面类型。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  page<const Value>(value: PropertyInput<'page', T, Value>): this {
    return this.write('page', value);
  }
  /**
   * 设置表格列宽采用自动还是固定布局算法。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  tableLayout<const Value>(value: PropertyInput<'tableLayout', T, Value>): this {
    return this.write('tableLayout', value);
  }
  /**
   * 设置分页或分栏断点后需保留的最少行数。
   *
   * CSS 规范初始值：2。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  widows<const Value>(value: PropertyInput<'widows', T, Value>): this {
    return this.write('widows', value);
  }
  /**
   * 使 SVG 文本基线相对于其基准位置偏移。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  baselineShift<const Value>(value: PropertyInput<'baselineShift', T, Value>): this {
    return this.write('baselineShift', value);
  }
  /**
   * 选择 SVG 文本布局的主导基线及基线表。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  dominantBaseline<const Value>(value: PropertyInput<'dominantBaseline', T, Value>): this {
    return this.write('dominantBaseline', value);
  }
  /**
   * 设置 SVG 图形内部的填充绘制方式。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  fill<const Value>(value: PropertyInput<'fill', T, Value>): this {
    return this.write('fill', value);
  }
  /**
   * 设置 SVG 填充的不透明度，不影响描边。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  fillOpacity<const Value>(value: PropertyInput<'fillOpacity', T, Value>): this {
    return this.write('fillOpacity', value);
  }
  /**
   * 设置复杂 SVG 路径的内部区域判定规则。
   *
   * CSS 规范初始值：nonzero。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  fillRule<const Value>(value: PropertyInput<'fillRule', T, Value>): this {
    return this.write('fillRule', value);
  }
  /**
   * 设置 SVG feFlood 或相关滤镜的洪泛颜色。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  floodColor<const Value>(value: PropertyInput<'floodColor', T, Value>): this {
    return this.write('floodColor', value);
  }
  /**
   * 设置 SVG 洪泛滤镜颜色的不透明度。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  floodOpacity<const Value>(value: PropertyInput<'floodOpacity', T, Value>): this {
    return this.write('floodOpacity', value);
  }
  /**
   * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  glyphOrientationVertical<const Value>(
    value: PropertyInput<'glyphOrientationVertical', T, Value>,
  ): this {
    return this.write('glyphOrientationVertical', value);
  }
  /**
   * 设置 SVG 光照滤镜使用的光源颜色。
   *
   * CSS 规范初始值：white。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  lightingColor<const Value>(value: PropertyInput<'lightingColor', T, Value>): this {
    return this.write('lightingColor', value);
  }
  /**
   * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。
   *
   * CSS 规范初始值：marker-start: none；marker-mid: none；marker-end: none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  marker<const Value>(value: PropertyInput<'marker', T, Value>): this {
    return this.write('marker', value);
  }
  /**
   * 设置 SVG 路径终点的标记图形。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  markerEnd<const Value>(value: PropertyInput<'markerEnd', T, Value>): this {
    return this.write('markerEnd', value);
  }
  /**
   * 设置 SVG 路径中间顶点的标记图形。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  markerMid<const Value>(value: PropertyInput<'markerMid', T, Value>): this {
    return this.write('markerMid', value);
  }
  /**
   * 设置 SVG 路径起点的标记图形。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  markerStart<const Value>(value: PropertyInput<'markerStart', T, Value>): this {
    return this.write('markerStart', value);
  }
  /**
   * 设置 SVG 填充、描边和标记的绘制先后顺序。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  paintOrder<const Value>(value: PropertyInput<'paintOrder', T, Value>): this {
    return this.write('paintOrder', value);
  }
  /**
   * 设置 SVG 渐变 stop 节点的颜色。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  stopColor<const Value>(value: PropertyInput<'stopColor', T, Value>): this {
    return this.write('stopColor', value);
  }
  /**
   * 设置 SVG 渐变 stop 节点的不透明度。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  stopOpacity<const Value>(value: PropertyInput<'stopOpacity', T, Value>): this {
    return this.write('stopOpacity', value);
  }
  /**
   * 设置 SVG 图形轮廓的描边绘制方式。
   *
   * CSS 规范初始值：stroke-dasharray: none；stroke-dashoffset: 0；stroke-linecap: butt；stroke-linejoin: miter；stroke-miterlimit: 4；stroke-opacity: 1；stroke-width: 1px。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  stroke<const Value>(value: PropertyInput<'stroke', T, Value>): this {
    return this.write('stroke', value);
  }
  /**
   * 设置 SVG 描边虚线中线段与空隙的长度序列。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  strokeDasharray<const Value>(value: PropertyInput<'strokeDasharray', T, Value>): this {
    return this.write('strokeDasharray', value);
  }
  /**
   * 设置 SVG 虚线描边相对于路径起点的偏移。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  strokeDashoffset<const Value>(value: PropertyInput<'strokeDashoffset', T, Value>): this {
    return this.write('strokeDashoffset', value);
  }
  /**
   * 设置开放 SVG 子路径端点的描边形状。
   *
   * CSS 规范初始值：butt。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  strokeLinecap<const Value>(value: PropertyInput<'strokeLinecap', T, Value>): this {
    return this.write('strokeLinecap', value);
  }
  /**
   * 设置 SVG 路径转角处描边的连接形状。
   *
   * CSS 规范初始值：miter。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  strokeLinejoin<const Value>(value: PropertyInput<'strokeLinejoin', T, Value>): this {
    return this.write('strokeLinejoin', value);
  }
  /**
   * 限制尖角连接的延伸比例，超过阈值时改变连接形状。
   *
   * CSS 规范初始值：4。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  strokeMiterlimit<const Value>(value: PropertyInput<'strokeMiterlimit', T, Value>): this {
    return this.write('strokeMiterlimit', value);
  }
  /**
   * 设置 SVG 描边的不透明度，不影响填充。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  strokeOpacity<const Value>(value: PropertyInput<'strokeOpacity', T, Value>): this {
    return this.write('strokeOpacity', value);
  }
  /**
   * 设置 SVG 描边宽度。
   *
   * CSS 规范初始值：1px。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  strokeWidth<const Value>(value: PropertyInput<'strokeWidth', T, Value>): this {
    return this.write('strokeWidth', value);
  }
  /**
   * 设置 SVG 图形变换时对描边等矢量效果的处理。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  vectorEffect<const Value>(value: PropertyInput<'vectorEffect', T, Value>): this {
    return this.write('vectorEffect', value);
  }
  /**
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  boxAlign<const Value>(value: PropertyInput<'boxAlign', T, Value>): this {
    return this.write('boxAlign', value);
  }
  /**
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-direction
   */
  boxDirection<const Value>(value: PropertyInput<'boxDirection', T, Value>): this {
    return this.write('boxDirection', value);
  }
  /**
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex
   */
  boxFlex<const Value>(value: PropertyInput<'boxFlex', T, Value>): this {
    return this.write('boxFlex', value);
  }
  /**
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex-group
   */
  boxFlexGroup<const Value>(value: PropertyInput<'boxFlexGroup', T, Value>): this {
    return this.write('boxFlexGroup', value);
  }
  /**
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：single。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  boxLines<const Value>(value: PropertyInput<'boxLines', T, Value>): this {
    return this.write('boxLines', value);
  }
  /**
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-ordinal-group
   */
  boxOrdinalGroup<const Value>(value: PropertyInput<'boxOrdinalGroup', T, Value>): this {
    return this.write('boxOrdinalGroup', value);
  }
  /**
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：inline-axis。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  boxOrient<const Value>(value: PropertyInput<'boxOrient', T, Value>): this {
    return this.write('boxOrient', value);
  }
  /**
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：start。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  boxPack<const Value>(value: PropertyInput<'boxPack', T, Value>): this {
    return this.write('boxPack', value);
  }
  /**
   * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  clip<const Value>(value: PropertyInput<'clip', T, Value>): this {
    return this.write('clip', value);
  }
  /**
   * 选择字体的宽窄字面；font-width 是其较新的名称。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  fontStretch<const Value>(value: PropertyInput<'fontStretch', T, Value>): this {
    return this.write('fontStretch', value);
  }
  /**
   * 兼容属性 grid-column-gap；优先参考标准属性 columnGap及浏览器支持范围。
   * 设置布局中相邻列之间的间距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-gap
   */
  gridColumnGap<const Value>(value: PropertyInput<'gridColumnGap', T, Value>): this {
    return this.write('gridColumnGap', value);
  }
  /**
   * 兼容属性 grid-gap；优先参考标准属性 gap及浏览器支持范围。
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。
   *
   * CSS 规范初始值：grid-row-gap: 0；grid-column-gap: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-gap
   */
  gridGap<const Value>(value: PropertyInput<'gridGap', T, Value>): this {
    return this.write('gridGap', value);
  }
  /**
   * 兼容属性 grid-row-gap；优先参考标准属性 rowGap及浏览器支持范围。
   * 设置布局中相邻行之间的间距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-gap
   */
  gridRowGap<const Value>(value: PropertyInput<'gridRowGap', T, Value>): this {
    return this.write('gridRowGap', value);
  }
  /**
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  imeMode<const Value>(value: PropertyInput<'imeMode', T, Value>): this {
    return this.write('imeMode', value);
  }
  /**
   * 兼容属性 inset-area；优先参考标准属性 positionArea及浏览器支持范围。
   * 选择相对于锚点的定位区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  insetArea<const Value>(value: PropertyInput<'insetArea', T, Value>): this {
    return this.write('insetArea', value);
  }
  /**
   * 兼容属性 -khtml-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-align
   */
  KhtmlBoxAlign<const Value>(value: PropertyInput<'KhtmlBoxAlign', T, Value>): this {
    return this.write('KhtmlBoxAlign', value);
  }
  /**
   * 兼容属性 -khtml-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-direction
   */
  KhtmlBoxDirection<const Value>(value: PropertyInput<'KhtmlBoxDirection', T, Value>): this {
    return this.write('KhtmlBoxDirection', value);
  }
  /**
   * 兼容属性 -khtml-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-flex
   */
  KhtmlBoxFlex<const Value>(value: PropertyInput<'KhtmlBoxFlex', T, Value>): this {
    return this.write('KhtmlBoxFlex', value);
  }
  /**
   * 兼容属性 -khtml-box-flex-group；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-flex-group
   */
  KhtmlBoxFlexGroup<const Value>(value: PropertyInput<'KhtmlBoxFlexGroup', T, Value>): this {
    return this.write('KhtmlBoxFlexGroup', value);
  }
  /**
   * 兼容属性 -khtml-box-lines；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：single。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-lines
   */
  KhtmlBoxLines<const Value>(value: PropertyInput<'KhtmlBoxLines', T, Value>): this {
    return this.write('KhtmlBoxLines', value);
  }
  /**
   * 兼容属性 -khtml-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-ordinal-group
   */
  KhtmlBoxOrdinalGroup<const Value>(value: PropertyInput<'KhtmlBoxOrdinalGroup', T, Value>): this {
    return this.write('KhtmlBoxOrdinalGroup', value);
  }
  /**
   * 兼容属性 -khtml-box-orient；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：inline-axis。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  KhtmlBoxOrient<const Value>(value: PropertyInput<'KhtmlBoxOrient', T, Value>): this {
    return this.write('KhtmlBoxOrient', value);
  }
  /**
   * 兼容属性 -khtml-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：start。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-pack
   */
  KhtmlBoxPack<const Value>(value: PropertyInput<'KhtmlBoxPack', T, Value>): this {
    return this.write('KhtmlBoxPack', value);
  }
  /**
   * 兼容属性 -khtml-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-line-break
   */
  KhtmlLineBreak<const Value>(value: PropertyInput<'KhtmlLineBreak', T, Value>): this {
    return this.write('KhtmlLineBreak', value);
  }
  /**
   * 兼容属性 -khtml-opacity；优先参考标准属性及浏览器支持范围。
   * 设置元素及其子树合成后的整体不透明度。
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.opacity(0.5)
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-opacity
   */
  KhtmlOpacity<const Value>(value: PropertyInput<'KhtmlOpacity', T, Value>): this {
    return this.write('KhtmlOpacity', value);
  }
  /**
   * 兼容属性 -khtml-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.userSelect("all")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-user-select
   */
  KhtmlUserSelect<const Value>(value: PropertyInput<'KhtmlUserSelect', T, Value>): this {
    return this.write('KhtmlUserSelect', value);
  }
  /**
   * 兼容属性 -moz-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * CSS 规范初始值：animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  MozAnimation<const Value>(value: PropertyInput<'MozAnimation', T, Value>): this {
    return this.write('MozAnimation', value);
  }
  /**
   * 兼容属性 -moz-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-delay
   */
  MozAnimationDelay<const Value>(value: PropertyInput<'MozAnimationDelay', T, Value>): this {
    return this.write('MozAnimationDelay', value);
  }
  /**
   * 兼容属性 -moz-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  MozAnimationDirection<const Value>(
    value: PropertyInput<'MozAnimationDirection', T, Value>,
  ): this {
    return this.write('MozAnimationDirection', value);
  }
  /**
   * 兼容属性 -moz-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-duration
   */
  MozAnimationDuration<const Value>(value: PropertyInput<'MozAnimationDuration', T, Value>): this {
    return this.write('MozAnimationDuration', value);
  }
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
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.animationFillMode("forwards")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-fill-mode
   */
  MozAnimationFillMode<const Value>(value: PropertyInput<'MozAnimationFillMode', T, Value>): this {
    return this.write('MozAnimationFillMode', value);
  }
  /**
   * 兼容属性 -moz-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-iteration-count
   */
  MozAnimationIterationCount<const Value>(
    value: PropertyInput<'MozAnimationIterationCount', T, Value>,
  ): this {
    return this.write('MozAnimationIterationCount', value);
  }
  /**
   * 兼容属性 -moz-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-name
   */
  MozAnimationName<const Value>(value: PropertyInput<'MozAnimationName', T, Value>): this {
    return this.write('MozAnimationName', value);
  }
  /**
   * 兼容属性 -moz-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：running。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-play-state
   */
  MozAnimationPlayState<const Value>(
    value: PropertyInput<'MozAnimationPlayState', T, Value>,
  ): this {
    return this.write('MozAnimationPlayState', value);
  }
  /**
   * 兼容属性 -moz-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  MozAnimationTimingFunction<const Value>(
    value: PropertyInput<'MozAnimationTimingFunction', T, Value>,
  ): this {
    return this.write('MozAnimationTimingFunction', value);
  }
  /**
   * 兼容属性 -moz-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：none（浏览器默认样式表可能覆盖）。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  MozAppearance<const Value>(value: PropertyInput<'MozAppearance', T, Value>): this {
    return this.write('MozAppearance', value);
  }
  /**
   * 兼容属性 -moz-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-backface-visibility
   */
  MozBackfaceVisibility<const Value>(
    value: PropertyInput<'MozBackfaceVisibility', T, Value>,
  ): this {
    return this.write('MozBackfaceVisibility', value);
  }
  /**
   * 兼容属性 -moz-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：border-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  MozBackgroundClip<const Value>(value: PropertyInput<'MozBackgroundClip', T, Value>): this {
    return this.write('MozBackgroundClip', value);
  }
  /**
   * 兼容属性 -moz-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：padding-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  MozBackgroundOrigin<const Value>(value: PropertyInput<'MozBackgroundOrigin', T, Value>): this {
    return this.write('MozBackgroundOrigin', value);
  }
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
   * CSS 规范初始值：auto auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.backgroundSize("cover").backgroundPosition("center")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-size
   */
  MozBackgroundSize<const Value>(value: PropertyInput<'MozBackgroundSize', T, Value>): this {
    return this.write('MozBackgroundSize', value);
  }
  /**
   * 兼容属性 -moz-binding；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的 XBL 绑定入口；仅描述历史兼容行为，不适用于现代组件实现。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-binding
   */
  MozBinding<const Value>(value: PropertyInput<'MozBinding', T, Value>): this {
    return this.write('MozBinding', value);
  }
  /**
   * 兼容属性 -moz-border-bottom-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的下边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-bottom-colors
   */
  MozBorderBottomColors<const Value>(
    value: PropertyInput<'MozBorderBottomColors', T, Value>,
  ): this {
    return this.write('MozBorderBottomColors', value);
  }
  /**
   * 兼容属性 -moz-border-end-color；优先参考标准属性 borderInlineEndColor及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-color
   */
  MozBorderEndColor<const Value>(value: PropertyInput<'MozBorderEndColor', T, Value>): this {
    return this.write('MozBorderEndColor', value);
  }
  /**
   * 兼容属性 -moz-border-end-style；优先参考标准属性 borderInlineEndStyle及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  MozBorderEndStyle<const Value>(value: PropertyInput<'MozBorderEndStyle', T, Value>): this {
    return this.write('MozBorderEndStyle', value);
  }
  /**
   * 兼容属性 -moz-border-end-width；优先参考标准属性 borderInlineEndWidth及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  MozBorderEndWidth<const Value>(value: PropertyInput<'MozBorderEndWidth', T, Value>): this {
    return this.write('MozBorderEndWidth', value);
  }
  /**
   * 兼容属性 -moz-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * CSS 规范初始值：border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  MozBorderImage<const Value>(value: PropertyInput<'MozBorderImage', T, Value>): this {
    return this.write('MozBorderImage', value);
  }
  /**
   * 兼容属性 -moz-border-left-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的左边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-left-colors
   */
  MozBorderLeftColors<const Value>(value: PropertyInput<'MozBorderLeftColors', T, Value>): this {
    return this.write('MozBorderLeftColors', value);
  }
  /**
   * 兼容属性 -moz-border-radius；优先参考标准属性及浏览器支持范围。
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   *
   * CSS 规范初始值：border-top-left-radius: 0；border-top-right-radius: 0；border-bottom-right-radius: 0；border-bottom-left-radius: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.borderRadius("8px")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius
   */
  MozBorderRadius<const Value>(value: PropertyInput<'MozBorderRadius', T, Value>): this {
    return this.write('MozBorderRadius', value);
  }
  /**
   * 兼容属性 -moz-border-radius-bottomleft；优先参考标准属性 borderBottomLeftRadius及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-bottomleft
   */
  MozBorderRadiusBottomleft<const Value>(
    value: PropertyInput<'MozBorderRadiusBottomleft', T, Value>,
  ): this {
    return this.write('MozBorderRadiusBottomleft', value);
  }
  /**
   * 兼容属性 -moz-border-radius-bottomright；优先参考标准属性 borderBottomRightRadius及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-bottomright
   */
  MozBorderRadiusBottomright<const Value>(
    value: PropertyInput<'MozBorderRadiusBottomright', T, Value>,
  ): this {
    return this.write('MozBorderRadiusBottomright', value);
  }
  /**
   * 兼容属性 -moz-border-radius-topleft；优先参考标准属性 borderTopLeftRadius及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-topleft
   */
  MozBorderRadiusTopleft<const Value>(
    value: PropertyInput<'MozBorderRadiusTopleft', T, Value>,
  ): this {
    return this.write('MozBorderRadiusTopleft', value);
  }
  /**
   * 兼容属性 -moz-border-radius-topright；优先参考标准属性 borderTopRightRadius及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-topright
   */
  MozBorderRadiusTopright<const Value>(
    value: PropertyInput<'MozBorderRadiusTopright', T, Value>,
  ): this {
    return this.write('MozBorderRadiusTopright', value);
  }
  /**
   * 兼容属性 -moz-border-right-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的右边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-right-colors
   */
  MozBorderRightColors<const Value>(value: PropertyInput<'MozBorderRightColors', T, Value>): this {
    return this.write('MozBorderRightColors', value);
  }
  /**
   * 兼容属性 -moz-border-start-color；优先参考标准属性 borderInlineStartColor及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-color
   */
  MozBorderStartColor<const Value>(value: PropertyInput<'MozBorderStartColor', T, Value>): this {
    return this.write('MozBorderStartColor', value);
  }
  /**
   * 兼容属性 -moz-border-start-style；优先参考标准属性 borderInlineStartStyle及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  MozBorderStartStyle<const Value>(value: PropertyInput<'MozBorderStartStyle', T, Value>): this {
    return this.write('MozBorderStartStyle', value);
  }
  /**
   * 兼容属性 -moz-border-top-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的上边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-top-colors
   */
  MozBorderTopColors<const Value>(value: PropertyInput<'MozBorderTopColors', T, Value>): this {
    return this.write('MozBorderTopColors', value);
  }
  /**
   * 兼容属性 -moz-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-align
   */
  MozBoxAlign<const Value>(value: PropertyInput<'MozBoxAlign', T, Value>): this {
    return this.write('MozBoxAlign', value);
  }
  /**
   * 兼容属性 -moz-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-direction
   */
  MozBoxDirection<const Value>(value: PropertyInput<'MozBoxDirection', T, Value>): this {
    return this.write('MozBoxDirection', value);
  }
  /**
   * 兼容属性 -moz-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-flex
   */
  MozBoxFlex<const Value>(value: PropertyInput<'MozBoxFlex', T, Value>): this {
    return this.write('MozBoxFlex', value);
  }
  /**
   * 兼容属性 -moz-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-ordinal-group
   */
  MozBoxOrdinalGroup<const Value>(value: PropertyInput<'MozBoxOrdinalGroup', T, Value>): this {
    return this.write('MozBoxOrdinalGroup', value);
  }
  /**
   * 兼容属性 -moz-box-orient；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：inline-axis。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  MozBoxOrient<const Value>(value: PropertyInput<'MozBoxOrient', T, Value>): this {
    return this.write('MozBoxOrient', value);
  }
  /**
   * 兼容属性 -moz-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：start。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-pack
   */
  MozBoxPack<const Value>(value: PropertyInput<'MozBoxPack', T, Value>): this {
    return this.write('MozBoxPack', value);
  }
  /**
   * 兼容属性 -moz-box-shadow；优先参考标准属性及浏览器支持范围。
   * 设置盒子的外部或内部阴影，可叠加多层。
   *
   * 阴影不占布局空间，可用逗号叠加；与 border/outline 的用途和绘制位置不同。
   *
   * 适用场景：浮层层次、卡片边缘或内凹效果。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.boxShadow("0 2px 8px rgb(0 0 0 / 0.15)")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-shadow
   */
  MozBoxShadow<const Value>(value: PropertyInput<'MozBoxShadow', T, Value>): this {
    return this.write('MozBoxShadow', value);
  }
  /**
   * 兼容属性 -moz-box-sizing；优先参考标准属性及浏览器支持范围。
   * 决定 width、height 等尺寸是否包含内边距和边框。
   *
   * 适用场景：确定组件声明宽高时是否把 padding 和 border 算在尺寸内。
   *
   * 常用值：`content-box`、`border-box`。
   *
   * CSS 规范初始值：content-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.boxSizing("border-box").width("20rem").padding("1rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-sizing
   */
  MozBoxSizing<const Value>(value: PropertyInput<'MozBoxSizing', T, Value>): this {
    return this.write('MozBoxSizing', value);
  }
  /**
   * 兼容属性 -moz-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-count
   */
  MozColumnCount<const Value>(value: PropertyInput<'MozColumnCount', T, Value>): this {
    return this.write('MozColumnCount', value);
  }
  /**
   * 兼容属性 -moz-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：balance。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-fill
   */
  MozColumnFill<const Value>(value: PropertyInput<'MozColumnFill', T, Value>): this {
    return this.write('MozColumnFill', value);
  }
  /**
   * 兼容属性 -moz-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * CSS 规范初始值：column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule
   */
  MozColumnRule<const Value>(value: PropertyInput<'MozColumnRule', T, Value>): this {
    return this.write('MozColumnRule', value);
  }
  /**
   * 兼容属性 -moz-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-color
   */
  MozColumnRuleColor<const Value>(value: PropertyInput<'MozColumnRuleColor', T, Value>): this {
    return this.write('MozColumnRuleColor', value);
  }
  /**
   * 兼容属性 -moz-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  MozColumnRuleStyle<const Value>(value: PropertyInput<'MozColumnRuleStyle', T, Value>): this {
    return this.write('MozColumnRuleStyle', value);
  }
  /**
   * 兼容属性 -moz-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  MozColumnRuleWidth<const Value>(value: PropertyInput<'MozColumnRuleWidth', T, Value>): this {
    return this.write('MozColumnRuleWidth', value);
  }
  /**
   * 兼容属性 -moz-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * CSS 规范初始值：column-width: auto；column-count: auto；column-height: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-columns
   */
  MozColumns<const Value>(value: PropertyInput<'MozColumns', T, Value>): this {
    return this.write('MozColumns', value);
  }
  /**
   * 兼容属性 -moz-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-width
   */
  MozColumnWidth<const Value>(value: PropertyInput<'MozColumnWidth', T, Value>): this {
    return this.write('MozColumnWidth', value);
  }
  /**
   * 兼容属性 -moz-context-properties；优先参考标准属性及浏览器支持范围。
   * 声明可传递给被引用 SVG 图像的上下文绘制属性，如 fill 和 stroke。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  MozContextProperties<const Value>(value: PropertyInput<'MozContextProperties', T, Value>): this {
    return this.write('MozContextProperties', value);
  }
  /**
   * 兼容属性 -moz-float-edge；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定浮动元素边缘计算使用的盒子范围。
   *
   * CSS 规范初始值：content-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  MozFloatEdge<const Value>(value: PropertyInput<'MozFloatEdge', T, Value>): this {
    return this.write('MozFloatEdge', value);
  }
  /**
   * 兼容属性 -moz-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-feature-settings
   */
  MozFontFeatureSettings<const Value>(
    value: PropertyInput<'MozFontFeatureSettings', T, Value>,
  ): this {
    return this.write('MozFontFeatureSettings', value);
  }
  /**
   * 兼容属性 -moz-font-language-override；优先参考标准属性及浏览器支持范围。
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-language-override
   */
  MozFontLanguageOverride<const Value>(
    value: PropertyInput<'MozFontLanguageOverride', T, Value>,
  ): this {
    return this.write('MozFontLanguageOverride', value);
  }
  /**
   * 兼容属性 -moz-force-broken-image-icon；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中控制损坏图像占位图标的显示。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-force-broken-image-icon
   */
  MozForceBrokenImageIcon<const Value>(
    value: PropertyInput<'MozForceBrokenImageIcon', T, Value>,
  ): this {
    return this.write('MozForceBrokenImageIcon', value);
  }
  /**
   * 兼容属性 -moz-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：manual。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-hyphens
   */
  MozHyphens<const Value>(value: PropertyInput<'MozHyphens', T, Value>): this {
    return this.write('MozHyphens', value);
  }
  /**
   * 兼容属性 -moz-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-end
   */
  MozMarginEnd<const Value>(value: PropertyInput<'MozMarginEnd', T, Value>): this {
    return this.write('MozMarginEnd', value);
  }
  /**
   * 兼容属性 -moz-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-start
   */
  MozMarginStart<const Value>(value: PropertyInput<'MozMarginStart', T, Value>): this {
    return this.write('MozMarginStart', value);
  }
  /**
   * 兼容属性 -moz-opacity；优先参考标准属性及浏览器支持范围。
   * 设置元素及其子树合成后的整体不透明度。
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.opacity(0.5)
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-opacity
   */
  MozOpacity<const Value>(value: PropertyInput<'MozOpacity', T, Value>): this {
    return this.write('MozOpacity', value);
  }
  /**
   * 兼容属性 -moz-orient；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定特定控件的显示方向，作用依赖控件类型。
   *
   * CSS 规范初始值：inline。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  MozOrient<const Value>(value: PropertyInput<'MozOrient', T, Value>): this {
    return this.write('MozOrient', value);
  }
  /**
   * 兼容属性 -moz-osx-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 macOS 上文字抗锯齿方式；效果依赖平台和字体渲染实现。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  MozOsxFontSmoothing<const Value>(value: PropertyInput<'MozOsxFontSmoothing', T, Value>): this {
    return this.write('MozOsxFontSmoothing', value);
  }
  /**
   * 兼容属性 -moz-outline；优先参考标准属性及浏览器支持范围。
   * 设置盒子外围轮廓线的宽度、线型和颜色，不占布局空间。
   *
   * 不占布局空间，可用 outline-offset 调整距离；键盘焦点指示不应被无替代地移除。
   *
   * 适用场景：控件焦点指示和不影响布局的轮廓。
   *
   * CSS 规范初始值：outline-width: medium；outline-style: none；outline-color: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.select(":focus-visible", s.outline("2px solid currentColor").outlineOffset("2px"))
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline
   */
  MozOutline<const Value>(value: PropertyInput<'MozOutline', T, Value>): this {
    return this.write('MozOutline', value);
  }
  /**
   * 兼容属性 -moz-outline-color；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线颜色。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-color
   */
  MozOutlineColor<const Value>(value: PropertyInput<'MozOutlineColor', T, Value>): this {
    return this.write('MozOutlineColor', value);
  }
  /**
   * 兼容属性 -moz-outline-radius；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的轮廓圆角简写；不同于元素边框本身的圆角。
   *
   * CSS 规范初始值：-moz-outline-radius-topleft: 0；-moz-outline-radius-topright: 0；-moz-outline-radius-bottomright: 0；-moz-outline-radius-bottomleft: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius
   */
  MozOutlineRadius<const Value>(value: PropertyInput<'MozOutlineRadius', T, Value>): this {
    return this.write('MozOutlineRadius', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-bottomleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左下角的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomleft
   */
  MozOutlineRadiusBottomleft<const Value>(
    value: PropertyInput<'MozOutlineRadiusBottomleft', T, Value>,
  ): this {
    return this.write('MozOutlineRadiusBottomleft', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-bottomright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右下角的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomright
   */
  MozOutlineRadiusBottomright<const Value>(
    value: PropertyInput<'MozOutlineRadiusBottomright', T, Value>,
  ): this {
    return this.write('MozOutlineRadiusBottomright', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-topleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左上角的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topleft
   */
  MozOutlineRadiusTopleft<const Value>(
    value: PropertyInput<'MozOutlineRadiusTopleft', T, Value>,
  ): this {
    return this.write('MozOutlineRadiusTopleft', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-topright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右上角的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topright
   */
  MozOutlineRadiusTopright<const Value>(
    value: PropertyInput<'MozOutlineRadiusTopright', T, Value>,
  ): this {
    return this.write('MozOutlineRadiusTopright', value);
  }
  /**
   * 兼容属性 -moz-outline-style；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  MozOutlineStyle<const Value>(value: PropertyInput<'MozOutlineStyle', T, Value>): this {
    return this.write('MozOutlineStyle', value);
  }
  /**
   * 兼容属性 -moz-outline-width；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-width
   */
  MozOutlineWidth<const Value>(value: PropertyInput<'MozOutlineWidth', T, Value>): this {
    return this.write('MozOutlineWidth', value);
  }
  /**
   * 兼容属性 -moz-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-end
   */
  MozPaddingEnd<const Value>(value: PropertyInput<'MozPaddingEnd', T, Value>): this {
    return this.write('MozPaddingEnd', value);
  }
  /**
   * 兼容属性 -moz-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-start
   */
  MozPaddingStart<const Value>(value: PropertyInput<'MozPaddingStart', T, Value>): this {
    return this.write('MozPaddingStart', value);
  }
  /**
   * 兼容属性 -moz-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective
   */
  MozPerspective<const Value>(value: PropertyInput<'MozPerspective', T, Value>): this {
    return this.write('MozPerspective', value);
  }
  /**
   * 兼容属性 -moz-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：50% 50%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  MozPerspectiveOrigin<const Value>(value: PropertyInput<'MozPerspectiveOrigin', T, Value>): this {
    return this.write('MozPerspectiveOrigin', value);
  }
  /**
   * 兼容属性 -moz-stack-sizing；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 堆叠布局中决定子项尺寸是否参与堆叠容器的尺寸计算。
   *
   * CSS 规范初始值：stretch-to-fit。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  MozStackSizing<const Value>(value: PropertyInput<'MozStackSizing', T, Value>): this {
    return this.write('MozStackSizing', value);
  }
  /**
   * 兼容属性 -moz-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：8。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-tab-size
   */
  MozTabSize<const Value>(value: PropertyInput<'MozTabSize', T, Value>): this {
    return this.write('MozTabSize', value);
  }
  /**
   * 兼容属性 -moz-text-align-last；优先参考标准属性及浏览器支持范围。
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  MozTextAlignLast<const Value>(value: PropertyInput<'MozTextAlignLast', T, Value>): this {
    return this.write('MozTextAlignLast', value);
  }
  /**
   * 兼容属性 -moz-text-blink；优先参考标准属性及浏览器支持范围。
   * 旧版文字闪烁效果开关；现代内容不应依赖该兼容属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-blink
   */
  MozTextBlink<const Value>(value: PropertyInput<'MozTextBlink', T, Value>): this {
    return this.write('MozTextBlink', value);
  }
  /**
   * 兼容属性 -moz-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-color
   */
  MozTextDecorationColor<const Value>(
    value: PropertyInput<'MozTextDecorationColor', T, Value>,
  ): this {
    return this.write('MozTextDecorationColor', value);
  }
  /**
   * 兼容属性 -moz-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  MozTextDecorationLine<const Value>(
    value: PropertyInput<'MozTextDecorationLine', T, Value>,
  ): this {
    return this.write('MozTextDecorationLine', value);
  }
  /**
   * 兼容属性 -moz-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：solid。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-style
   */
  MozTextDecorationStyle<const Value>(
    value: PropertyInput<'MozTextDecorationStyle', T, Value>,
  ): this {
    return this.write('MozTextDecorationStyle', value);
  }
  /**
   * 兼容属性 -moz-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：支持文本放大的移动浏览器为 auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-size-adjust
   */
  MozTextSizeAdjust<const Value>(value: PropertyInput<'MozTextSizeAdjust', T, Value>): this {
    return this.write('MozTextSizeAdjust', value);
  }
  /**
   * 兼容属性 -moz-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.transform("translateX(8px) scale(1.05)")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform
   */
  MozTransform<const Value>(value: PropertyInput<'MozTransform', T, Value>): this {
    return this.write('MozTransform', value);
  }
  /**
   * 兼容属性 -moz-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：50% 50% 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  MozTransformOrigin<const Value>(value: PropertyInput<'MozTransformOrigin', T, Value>): this {
    return this.write('MozTransformOrigin', value);
  }
  /**
   * 兼容属性 -moz-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：flat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-style
   */
  MozTransformStyle<const Value>(value: PropertyInput<'MozTransformStyle', T, Value>): this {
    return this.write('MozTransformStyle', value);
  }
  /**
   * 兼容属性 -moz-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   *
   * CSS 规范初始值：transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.transition("opacity 160ms ease")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  MozTransition<const Value>(value: PropertyInput<'MozTransition', T, Value>): this {
    return this.write('MozTransition', value);
  }
  /**
   * 兼容属性 -moz-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-delay
   */
  MozTransitionDelay<const Value>(value: PropertyInput<'MozTransitionDelay', T, Value>): this {
    return this.write('MozTransitionDelay', value);
  }
  /**
   * 兼容属性 -moz-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-duration
   */
  MozTransitionDuration<const Value>(
    value: PropertyInput<'MozTransitionDuration', T, Value>,
  ): this {
    return this.write('MozTransitionDuration', value);
  }
  /**
   * 兼容属性 -moz-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * CSS 规范初始值：all。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-property
   */
  MozTransitionProperty<const Value>(
    value: PropertyInput<'MozTransitionProperty', T, Value>,
  ): this {
    return this.write('MozTransitionProperty', value);
  }
  /**
   * 兼容属性 -moz-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  MozTransitionTimingFunction<const Value>(
    value: PropertyInput<'MozTransitionTimingFunction', T, Value>,
  ): this {
    return this.write('MozTransitionTimingFunction', value);
  }
  /**
   * 兼容属性 -moz-user-focus；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Gecko 元素的用户焦点行为，现代交互优先使用标准焦点机制。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  MozUserFocus<const Value>(value: PropertyInput<'MozUserFocus', T, Value>): this {
    return this.write('MozUserFocus', value);
  }
  /**
   * 兼容属性 -moz-user-input；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Gecko 元素是否接受用户输入，现代控件使用标准 disabled/readonly 等语义。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-input
   */
  MozUserInput<const Value>(value: PropertyInput<'MozUserInput', T, Value>): this {
    return this.write('MozUserInput', value);
  }
  /**
   * 兼容属性 -moz-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * CSS 规范初始值：read-only。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  MozUserModify<const Value>(value: PropertyInput<'MozUserModify', T, Value>): this {
    return this.write('MozUserModify', value);
  }
  /**
   * 兼容属性 -moz-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.userSelect("all")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-select
   */
  MozUserSelect<const Value>(value: PropertyInput<'MozUserSelect', T, Value>): this {
    return this.write('MozUserSelect', value);
  }
  /**
   * 兼容属性 -moz-window-dragging；优先参考标准属性及浏览器支持范围。
   * 控制区域能否作为宿主窗口的拖动区域，作用限于支持它的特定环境。
   *
   * CSS 规范初始值：drag。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  MozWindowDragging<const Value>(value: PropertyInput<'MozWindowDragging', T, Value>): this {
    return this.write('MozWindowDragging', value);
  }
  /**
   * 兼容属性 -moz-window-shadow；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Gecko 宿主窗口阴影的预设，效果依赖窗口与操作系统。
   *
   * CSS 规范初始值：default。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  MozWindowShadow<const Value>(value: PropertyInput<'MozWindowShadow', T, Value>): this {
    return this.write('MozWindowShadow', value);
  }
  /**
   * 兼容属性 -ms-accelerator；优先参考标准属性及浏览器支持范围。
   * 旧版 Microsoft 浏览器中控制快捷键提示字符是否显示。
   *
   * CSS 规范初始值：false。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-accelerator
   */
  msAccelerator<const Value>(value: PropertyInput<'msAccelerator', T, Value>): this {
    return this.write('msAccelerator', value);
  }
  /**
   * 兼容属性 -ms-block-progression；优先参考标准属性及浏览器支持范围。
   * 旧版块内容的排列方向，现代排版优先使用 writing-mode。
   *
   * CSS 规范初始值：tb。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  msBlockProgression<const Value>(value: PropertyInput<'msBlockProgression', T, Value>): this {
    return this.write('msBlockProgression', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-chaining；优先参考标准属性及浏览器支持范围。
   * 控制缩放操作到达边界后是否继续传递给父级缩放区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-chaining
   */
  msContentZoomChaining<const Value>(
    value: PropertyInput<'msContentZoomChaining', T, Value>,
  ): this {
    return this.write('msContentZoomChaining', value);
  }
  /**
   * 兼容属性 -ms-content-zooming；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 触控内容缩放是否启用。
   *
   * CSS 规范初始值：顶层文档为 zoom，其余为 none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zooming
   */
  msContentZooming<const Value>(value: PropertyInput<'msContentZooming', T, Value>): this {
    return this.write('msContentZooming', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版触控内容缩放的最小和最大倍率。
   *
   * CSS 规范初始值：-ms-content-zoom-limit-max: 400%；-ms-content-zoom-limit-min: 100%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit
   */
  msContentZoomLimit<const Value>(value: PropertyInput<'msContentZoomLimit', T, Value>): this {
    return this.write('msContentZoomLimit', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-limit-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最大倍率。
   *
   * CSS 规范初始值：400%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-max
   */
  msContentZoomLimitMax<const Value>(
    value: PropertyInput<'msContentZoomLimitMax', T, Value>,
  ): this {
    return this.write('msContentZoomLimitMax', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-limit-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最小倍率。
   *
   * CSS 规范初始值：100%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-min
   */
  msContentZoomLimitMin<const Value>(
    value: PropertyInput<'msContentZoomLimitMin', T, Value>,
  ): this {
    return this.write('msContentZoomLimitMin', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-snap；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版内容缩放吸附的方式和位置。
   *
   * CSS 规范初始值：-ms-content-zoom-snap-type: none；-ms-content-zoom-snap-points: snapInterval(0%, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  msContentZoomSnap<const Value>(value: PropertyInput<'msContentZoomSnap', T, Value>): this {
    return this.write('msContentZoomSnap', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-snap-points；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放操作可以吸附的倍率位置。
   *
   * CSS 规范初始值：snapInterval(0%, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-points
   */
  msContentZoomSnapPoints<const Value>(
    value: PropertyInput<'msContentZoomSnapPoints', T, Value>,
  ): this {
    return this.write('msContentZoomSnapPoints', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-snap-type；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放吸附的强制程度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-type
   */
  msContentZoomSnapType<const Value>(
    value: PropertyInput<'msContentZoomSnapType', T, Value>,
  ): this {
    return this.write('msContentZoomSnapType', value);
  }
  /**
   * 兼容属性 -ms-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：""。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-filter
   */
  msFilter<const Value>(value: PropertyInput<'msFilter', T, Value>): this {
    return this.write('msFilter', value);
  }
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
   * CSS 规范初始值：flex-grow: 0；flex-shrink: 1；flex-basis: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.flex("1 1 0%")
   * @example
   * s.flex("none")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  msFlex<const Value>(value: PropertyInput<'msFlex', T, Value>): this {
    return this.write('msFlex', value);
  }
  /**
   * 兼容属性 -ms-flex-direction；优先参考标准属性及浏览器支持范围。
   * 设置弹性容器的主轴方向及项目排列方向。
   *
   * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
   *
   * 常用值：`row`、`column`、`row-reverse`、`column-reverse`。
   *
   * CSS 规范初始值：row。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("flex").flexDirection("column").gap("1rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-direction
   */
  msFlexDirection<const Value>(value: PropertyInput<'msFlexDirection', T, Value>): this {
    return this.write('msFlexDirection', value);
  }
  /**
   * 兼容属性 -ms-flex-positive；优先参考标准属性 flexGrow及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-positive
   */
  msFlexPositive<const Value>(value: PropertyInput<'msFlexPositive', T, Value>): this {
    return this.write('msFlexPositive', value);
  }
  /**
   * 兼容属性 -ms-flow-from；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中指定接收哪个命名内容流。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-from
   */
  msFlowFrom<const Value>(value: PropertyInput<'msFlowFrom', T, Value>): this {
    return this.write('msFlowFrom', value);
  }
  /**
   * 兼容属性 -ms-flow-into；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中把元素内容放入指定命名流。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-into
   */
  msFlowInto<const Value>(value: PropertyInput<'msFlowInto', T, Value>): this {
    return this.write('msFlowInto', value);
  }
  /**
   * 兼容属性 -ms-grid-columns；优先参考标准属性 gridTemplateColumns及浏览器支持范围。
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  msGridColumns<const Value>(value: PropertyInput<'msGridColumns', T, Value>): this {
    return this.write('msGridColumns', value);
  }
  /**
   * 兼容属性 -ms-grid-rows；优先参考标准属性 gridTemplateRows及浏览器支持范围。
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  msGridRows<const Value>(value: PropertyInput<'msGridRows', T, Value>): this {
    return this.write('msGridRows', value);
  }
  /**
   * 兼容属性 -ms-high-contrast-adjust；优先参考标准属性及浏览器支持范围。
   * 控制旧版高对比度模式是否调整作者颜色；现代环境优先使用 forced-color-adjust。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-high-contrast-adjust
   */
  msHighContrastAdjust<const Value>(value: PropertyInput<'msHighContrastAdjust', T, Value>): this {
    return this.write('msHighContrastAdjust', value);
  }
  /**
   * 兼容属性 -ms-hyphenate-limit-chars；优先参考标准属性及浏览器支持范围。
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-chars
   */
  msHyphenateLimitChars<const Value>(
    value: PropertyInput<'msHyphenateLimitChars', T, Value>,
  ): this {
    return this.write('msHyphenateLimitChars', value);
  }
  /**
   * 兼容属性 -ms-hyphenate-limit-lines；优先参考标准属性及浏览器支持范围。
   * 限制连续使用断字连字符的文本行数。
   *
   * CSS 规范初始值：no-limit。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-lines
   */
  msHyphenateLimitLines<const Value>(
    value: PropertyInput<'msHyphenateLimitLines', T, Value>,
  ): this {
    return this.write('msHyphenateLimitLines', value);
  }
  /**
   * 兼容属性 -ms-hyphenate-limit-zone；优先参考标准属性及浏览器支持范围。
   * 指定允许开始断字处理的行末区域。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-zone
   */
  msHyphenateLimitZone<const Value>(value: PropertyInput<'msHyphenateLimitZone', T, Value>): this {
    return this.write('msHyphenateLimitZone', value);
  }
  /**
   * 兼容属性 -ms-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：manual。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphens
   */
  msHyphens<const Value>(value: PropertyInput<'msHyphens', T, Value>): this {
    return this.write('msHyphens', value);
  }
  /**
   * 兼容属性 -ms-ime-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版输入法候选窗口相对于编辑区域的对齐位置。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-align
   */
  msImeAlign<const Value>(value: PropertyInput<'msImeAlign', T, Value>): this {
    return this.write('msImeAlign', value);
  }
  /**
   * 兼容属性 -ms-ime-mode；优先参考标准属性及浏览器支持范围。
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-mode
   */
  msImeMode<const Value>(value: PropertyInput<'msImeMode', T, Value>): this {
    return this.write('msImeMode', value);
  }
  /**
   * 兼容属性 -ms-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  msLineBreak<const Value>(value: PropertyInput<'msLineBreak', T, Value>): this {
    return this.write('msLineBreak', value);
  }
  /**
   * 兼容属性 -ms-order；优先参考标准属性及浏览器支持范围。
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-order
   */
  msOrder<const Value>(value: PropertyInput<'msOrder', T, Value>): this {
    return this.write('msOrder', value);
  }
  /**
   * 兼容属性 -ms-overflow-style；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Microsoft 浏览器滚动条的呈现方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  msOverflowStyle<const Value>(value: PropertyInput<'msOverflowStyle', T, Value>): this {
    return this.write('msOverflowStyle', value);
  }
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
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.overflowX("auto")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-x
   */
  msOverflowX<const Value>(value: PropertyInput<'msOverflowX', T, Value>): this {
    return this.write('msOverflowX', value);
  }
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
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.maxHeight("20rem").overflowY("auto")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-y
   */
  msOverflowY<const Value>(value: PropertyInput<'msOverflowY', T, Value>): this {
    return this.write('msOverflowY', value);
  }
  /**
   * 兼容属性 -ms-scrollbar3dlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的亮边颜色。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar3dlight-color
   */
  msScrollbar3dlightColor<const Value>(
    value: PropertyInput<'msScrollbar3dlightColor', T, Value>,
  ): this {
    return this.write('msScrollbar3dlightColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-arrow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条箭头颜色。
   *
   * CSS 规范初始值：ButtonText。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-arrow-color
   */
  msScrollbarArrowColor<const Value>(
    value: PropertyInput<'msScrollbarArrowColor', T, Value>,
  ): this {
    return this.write('msScrollbarArrowColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-base-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条的基础颜色。
   *
   * CSS 规范初始值：由浏览器决定。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-base-color
   */
  msScrollbarBaseColor<const Value>(value: PropertyInput<'msScrollbarBaseColor', T, Value>): this {
    return this.write('msScrollbarBaseColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-darkshadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的深阴影颜色。
   *
   * CSS 规范初始值：ThreeDDarkShadow。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-darkshadow-color
   */
  msScrollbarDarkshadowColor<const Value>(
    value: PropertyInput<'msScrollbarDarkshadowColor', T, Value>,
  ): this {
    return this.write('msScrollbarDarkshadowColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-face-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条滑块表面颜色。
   *
   * CSS 规范初始值：ThreeDFace。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-face-color
   */
  msScrollbarFaceColor<const Value>(value: PropertyInput<'msScrollbarFaceColor', T, Value>): this {
    return this.write('msScrollbarFaceColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条高亮边缘颜色。
   *
   * CSS 规范初始值：ThreeDHighlight。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-highlight-color
   */
  msScrollbarHighlightColor<const Value>(
    value: PropertyInput<'msScrollbarHighlightColor', T, Value>,
  ): this {
    return this.write('msScrollbarHighlightColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-shadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条阴影边缘颜色。
   *
   * CSS 规范初始值：ThreeDDarkShadow。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-shadow-color
   */
  msScrollbarShadowColor<const Value>(
    value: PropertyInput<'msScrollbarShadowColor', T, Value>,
  ): this {
    return this.write('msScrollbarShadowColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-track-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条轨道颜色。
   *
   * CSS 规范初始值：Scrollbar。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-track-color
   */
  msScrollbarTrackColor<const Value>(
    value: PropertyInput<'msScrollbarTrackColor', T, Value>,
  ): this {
    return this.write('msScrollbarTrackColor', value);
  }
  /**
   * 兼容属性 -ms-scroll-chaining；优先参考标准属性及浏览器支持范围。
   * 控制滚动到达边界后是否传递给祖先滚动容器。
   *
   * CSS 规范初始值：chained。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-chaining
   */
  msScrollChaining<const Value>(value: PropertyInput<'msScrollChaining', T, Value>): this {
    return this.write('msScrollChaining', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版滚动区域的水平和垂直边界。
   *
   * CSS 规范初始值：-ms-scroll-limit-x-min: 0；-ms-scroll-limit-y-min: 0；-ms-scroll-limit-x-max: auto；-ms-scroll-limit-y-max: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit
   */
  msScrollLimit<const Value>(value: PropertyInput<'msScrollLimit', T, Value>): this {
    return this.write('msScrollLimit', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-x-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大水平位置。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-max
   */
  msScrollLimitXMax<const Value>(value: PropertyInput<'msScrollLimitXMax', T, Value>): this {
    return this.write('msScrollLimitXMax', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-x-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小水平位置。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-min
   */
  msScrollLimitXMin<const Value>(value: PropertyInput<'msScrollLimitXMin', T, Value>): this {
    return this.write('msScrollLimitXMin', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-y-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大垂直位置。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-max
   */
  msScrollLimitYMax<const Value>(value: PropertyInput<'msScrollLimitYMax', T, Value>): this {
    return this.write('msScrollLimitYMax', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-y-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小垂直位置。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-min
   */
  msScrollLimitYMin<const Value>(value: PropertyInput<'msScrollLimitYMin', T, Value>): this {
    return this.write('msScrollLimitYMin', value);
  }
  /**
   * 兼容属性 -ms-scroll-rails；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控滚动是否锁定主要滚动轴。
   *
   * CSS 规范初始值：railed。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-rails
   */
  msScrollRails<const Value>(value: PropertyInput<'msScrollRails', T, Value>): this {
    return this.write('msScrollRails', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-points-x；优先参考标准属性及浏览器支持范围。
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：snapInterval(0px, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-x
   */
  msScrollSnapPointsX<const Value>(value: PropertyInput<'msScrollSnapPointsX', T, Value>): this {
    return this.write('msScrollSnapPointsX', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-points-y；优先参考标准属性及浏览器支持范围。
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：snapInterval(0px, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-y
   */
  msScrollSnapPointsY<const Value>(value: PropertyInput<'msScrollSnapPointsY', T, Value>): this {
    return this.write('msScrollSnapPointsY', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-type；优先参考标准属性及浏览器支持范围。
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.scrollSnapType("x mandatory")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-type
   */
  msScrollSnapType<const Value>(value: PropertyInput<'msScrollSnapType', T, Value>): this {
    return this.write('msScrollSnapType', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-x；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版水平滚动吸附方式和位置。
   *
   * CSS 规范初始值：-ms-scroll-snap-type: none；-ms-scroll-snap-points-x: snapInterval(0px, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-x
   */
  msScrollSnapX<const Value>(value: PropertyInput<'msScrollSnapX', T, Value>): this {
    return this.write('msScrollSnapX', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-y；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版垂直滚动吸附方式和位置。
   *
   * CSS 规范初始值：-ms-scroll-snap-type: none；-ms-scroll-snap-points-y: snapInterval(0px, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-y
   */
  msScrollSnapY<const Value>(value: PropertyInput<'msScrollSnapY', T, Value>): this {
    return this.write('msScrollSnapY', value);
  }
  /**
   * 兼容属性 -ms-scroll-translation；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 环境中的滚动位移呈现方式。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-translation
   */
  msScrollTranslation<const Value>(value: PropertyInput<'msScrollTranslation', T, Value>): this {
    return this.write('msScrollTranslation', value);
  }
  /**
   * 兼容属性 -ms-text-autospace；优先参考标准属性及浏览器支持范围。
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  msTextAutospace<const Value>(value: PropertyInput<'msTextAutospace', T, Value>): this {
    return this.write('msTextAutospace', value);
  }
  /**
   * 兼容属性 -ms-text-combine-horizontal；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-combine-horizontal
   */
  msTextCombineHorizontal<const Value>(
    value: PropertyInput<'msTextCombineHorizontal', T, Value>,
  ): this {
    return this.write('msTextCombineHorizontal', value);
  }
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
   * CSS 规范初始值：clip。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.maxWidth("12rem").whiteSpace("nowrap").overflow("hidden").textOverflow("ellipsis")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-overflow
   */
  msTextOverflow<const Value>(value: PropertyInput<'msTextOverflow', T, Value>): this {
    return this.write('msTextOverflow', value);
  }
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
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.touchAction("pan-y")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  msTouchAction<const Value>(value: PropertyInput<'msTouchAction', T, Value>): this {
    return this.write('msTouchAction', value);
  }
  /**
   * 兼容属性 -ms-touch-select；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控文字选择的交互方式。
   *
   * CSS 规范初始值：grippers。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-select
   */
  msTouchSelect<const Value>(value: PropertyInput<'msTouchSelect', T, Value>): this {
    return this.write('msTouchSelect', value);
  }
  /**
   * 兼容属性 -ms-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.transform("translateX(8px) scale(1.05)")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform
   */
  msTransform<const Value>(value: PropertyInput<'msTransform', T, Value>): this {
    return this.write('msTransform', value);
  }
  /**
   * 兼容属性 -ms-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：50% 50% 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  msTransformOrigin<const Value>(value: PropertyInput<'msTransformOrigin', T, Value>): this {
    return this.write('msTransformOrigin', value);
  }
  /**
   * 兼容属性 -ms-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   *
   * CSS 规范初始值：transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.transition("opacity 160ms ease")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  msTransition<const Value>(value: PropertyInput<'msTransition', T, Value>): this {
    return this.write('msTransition', value);
  }
  /**
   * 兼容属性 -ms-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-delay
   */
  msTransitionDelay<const Value>(value: PropertyInput<'msTransitionDelay', T, Value>): this {
    return this.write('msTransitionDelay', value);
  }
  /**
   * 兼容属性 -ms-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-duration
   */
  msTransitionDuration<const Value>(value: PropertyInput<'msTransitionDuration', T, Value>): this {
    return this.write('msTransitionDuration', value);
  }
  /**
   * 兼容属性 -ms-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * CSS 规范初始值：all。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-property
   */
  msTransitionProperty<const Value>(value: PropertyInput<'msTransitionProperty', T, Value>): this {
    return this.write('msTransitionProperty', value);
  }
  /**
   * 兼容属性 -ms-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  msTransitionTimingFunction<const Value>(
    value: PropertyInput<'msTransitionTimingFunction', T, Value>,
  ): this {
    return this.write('msTransitionTimingFunction', value);
  }
  /**
   * 兼容属性 -ms-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：text。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.userSelect("all")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-user-select
   */
  msUserSelect<const Value>(value: PropertyInput<'msUserSelect', T, Value>): this {
    return this.write('msUserSelect', value);
  }
  /**
   * 兼容属性 -ms-word-break；优先参考标准属性及浏览器支持范围。
   * 设置单词内部或文字之间的断行规则。
   *
   * 按字符和语言控制断行。仅需避免超长单词溢出时，通常先考虑 overflow-wrap。
   *
   * 常用值：`normal`、`break-all`、`keep-all`。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @example
   * s.wordBreak("normal")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-word-break
   */
  msWordBreak<const Value>(value: PropertyInput<'msWordBreak', T, Value>): this {
    return this.write('msWordBreak', value);
  }
  /**
   * 兼容属性 -ms-wrap-flow；优先参考标准属性及浏览器支持范围。
   * 控制旧版排斥形状周围的内容环绕方向。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  msWrapFlow<const Value>(value: PropertyInput<'msWrapFlow', T, Value>): this {
    return this.write('msWrapFlow', value);
  }
  /**
   * 兼容属性 -ms-wrap-margin；优先参考标准属性及浏览器支持范围。
   * 设置旧版排斥形状与环绕内容之间的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-margin
   */
  msWrapMargin<const Value>(value: PropertyInput<'msWrapMargin', T, Value>): this {
    return this.write('msWrapMargin', value);
  }
  /**
   * 兼容属性 -ms-wrap-through；优先参考标准属性及浏览器支持范围。
   * 控制旧版元素是否参与排斥形状的内容环绕。
   *
   * CSS 规范初始值：wrap。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-through
   */
  msWrapThrough<const Value>(value: PropertyInput<'msWrapThrough', T, Value>): this {
    return this.write('msWrapThrough', value);
  }
  /**
   * 兼容属性 -ms-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：horizontal-tb。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  msWritingMode<const Value>(value: PropertyInput<'msWritingMode', T, Value>): this {
    return this.write('msWritingMode', value);
  }
  /**
   * 兼容属性 -o-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * CSS 规范初始值：animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  OAnimation<const Value>(value: PropertyInput<'OAnimation', T, Value>): this {
    return this.write('OAnimation', value);
  }
  /**
   * 兼容属性 -o-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-delay
   */
  OAnimationDelay<const Value>(value: PropertyInput<'OAnimationDelay', T, Value>): this {
    return this.write('OAnimationDelay', value);
  }
  /**
   * 兼容属性 -o-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-direction
   */
  OAnimationDirection<const Value>(value: PropertyInput<'OAnimationDirection', T, Value>): this {
    return this.write('OAnimationDirection', value);
  }
  /**
   * 兼容属性 -o-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-duration
   */
  OAnimationDuration<const Value>(value: PropertyInput<'OAnimationDuration', T, Value>): this {
    return this.write('OAnimationDuration', value);
  }
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
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.animationFillMode("forwards")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-fill-mode
   */
  OAnimationFillMode<const Value>(value: PropertyInput<'OAnimationFillMode', T, Value>): this {
    return this.write('OAnimationFillMode', value);
  }
  /**
   * 兼容属性 -o-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-iteration-count
   */
  OAnimationIterationCount<const Value>(
    value: PropertyInput<'OAnimationIterationCount', T, Value>,
  ): this {
    return this.write('OAnimationIterationCount', value);
  }
  /**
   * 兼容属性 -o-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-name
   */
  OAnimationName<const Value>(value: PropertyInput<'OAnimationName', T, Value>): this {
    return this.write('OAnimationName', value);
  }
  /**
   * 兼容属性 -o-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：running。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-play-state
   */
  OAnimationPlayState<const Value>(value: PropertyInput<'OAnimationPlayState', T, Value>): this {
    return this.write('OAnimationPlayState', value);
  }
  /**
   * 兼容属性 -o-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  OAnimationTimingFunction<const Value>(
    value: PropertyInput<'OAnimationTimingFunction', T, Value>,
  ): this {
    return this.write('OAnimationTimingFunction', value);
  }
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
   * CSS 规范初始值：auto auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.backgroundSize("cover").backgroundPosition("center")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-background-size
   */
  OBackgroundSize<const Value>(value: PropertyInput<'OBackgroundSize', T, Value>): this {
    return this.write('OBackgroundSize', value);
  }
  /**
   * 兼容属性 -o-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * CSS 规范初始值：border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-border-image
   */
  OBorderImage<const Value>(value: PropertyInput<'OBorderImage', T, Value>): this {
    return this.write('OBorderImage', value);
  }
  /**
   * 兼容属性 offset-block；优先参考标准属性 insetBlock及浏览器支持范围。
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   *
   * CSS 规范初始值：inset-block-start: auto；inset-block-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block
   */
  offsetBlock<const Value>(value: PropertyInput<'offsetBlock', T, Value>): this {
    return this.write('offsetBlock', value);
  }
  /**
   * 兼容属性 offset-block-end；优先参考标准属性 insetBlockEnd及浏览器支持范围。
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block-end
   */
  offsetBlockEnd<const Value>(value: PropertyInput<'offsetBlockEnd', T, Value>): this {
    return this.write('offsetBlockEnd', value);
  }
  /**
   * 兼容属性 offset-block-start；优先参考标准属性 insetBlockStart及浏览器支持范围。
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block-start
   */
  offsetBlockStart<const Value>(value: PropertyInput<'offsetBlockStart', T, Value>): this {
    return this.write('offsetBlockStart', value);
  }
  /**
   * 兼容属性 offset-inline；优先参考标准属性 insetInline及浏览器支持范围。
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   *
   * CSS 规范初始值：inset-inline-start: auto；inset-inline-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline
   */
  offsetInline<const Value>(value: PropertyInput<'offsetInline', T, Value>): this {
    return this.write('offsetInline', value);
  }
  /**
   * 兼容属性 offset-inline-end；优先参考标准属性 insetInlineEnd及浏览器支持范围。
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline-end
   */
  offsetInlineEnd<const Value>(value: PropertyInput<'offsetInlineEnd', T, Value>): this {
    return this.write('offsetInlineEnd', value);
  }
  /**
   * 兼容属性 offset-inline-start；优先参考标准属性 insetInlineStart及浏览器支持范围。
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline-start
   */
  offsetInlineStart<const Value>(value: PropertyInput<'offsetInlineStart', T, Value>): this {
    return this.write('offsetInlineStart', value);
  }
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
   * CSS 规范初始值：fill。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.width("80px").height("80px").objectFit("cover")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-fit
   */
  OObjectFit<const Value>(value: PropertyInput<'OObjectFit', T, Value>): this {
    return this.write('OObjectFit', value);
  }
  /**
   * 兼容属性 -o-object-position；优先参考标准属性及浏览器支持范围。
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * CSS 规范初始值：50% 50%。不同于浏览器默认样式表。
   * 是否继承：是。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-position
   */
  OObjectPosition<const Value>(value: PropertyInput<'OObjectPosition', T, Value>): this {
    return this.write('OObjectPosition', value);
  }
  /**
   * 兼容属性 -o-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：8。不同于浏览器默认样式表。
   * 是否继承：是。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-tab-size
   */
  OTabSize<const Value>(value: PropertyInput<'OTabSize', T, Value>): this {
    return this.write('OTabSize', value);
  }
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
   * CSS 规范初始值：clip。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.maxWidth("12rem").whiteSpace("nowrap").overflow("hidden").textOverflow("ellipsis")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-text-overflow
   */
  OTextOverflow<const Value>(value: PropertyInput<'OTextOverflow', T, Value>): this {
    return this.write('OTextOverflow', value);
  }
  /**
   * 兼容属性 -o-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.transform("translateX(8px) scale(1.05)")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform
   */
  OTransform<const Value>(value: PropertyInput<'OTransform', T, Value>): this {
    return this.write('OTransform', value);
  }
  /**
   * 兼容属性 -o-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：50% 50% 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform-origin
   */
  OTransformOrigin<const Value>(value: PropertyInput<'OTransformOrigin', T, Value>): this {
    return this.write('OTransformOrigin', value);
  }
  /**
   * 兼容属性 -o-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   *
   * CSS 规范初始值：transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.transition("opacity 160ms ease")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  OTransition<const Value>(value: PropertyInput<'OTransition', T, Value>): this {
    return this.write('OTransition', value);
  }
  /**
   * 兼容属性 -o-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-delay
   */
  OTransitionDelay<const Value>(value: PropertyInput<'OTransitionDelay', T, Value>): this {
    return this.write('OTransitionDelay', value);
  }
  /**
   * 兼容属性 -o-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-duration
   */
  OTransitionDuration<const Value>(value: PropertyInput<'OTransitionDuration', T, Value>): this {
    return this.write('OTransitionDuration', value);
  }
  /**
   * 兼容属性 -o-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * CSS 规范初始值：all。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-property
   */
  OTransitionProperty<const Value>(value: PropertyInput<'OTransitionProperty', T, Value>): this {
    return this.write('OTransitionProperty', value);
  }
  /**
   * 兼容属性 -o-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  OTransitionTimingFunction<const Value>(
    value: PropertyInput<'OTransitionTimingFunction', T, Value>,
  ): this {
    return this.write('OTransitionTimingFunction', value);
  }
  /**
   * 兼容属性 page-break-after；优先参考标准属性 breakAfter及浏览器支持范围。
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  pageBreakAfter<const Value>(value: PropertyInput<'pageBreakAfter', T, Value>): this {
    return this.write('pageBreakAfter', value);
  }
  /**
   * 兼容属性 page-break-before；优先参考标准属性 breakBefore及浏览器支持范围。
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  pageBreakBefore<const Value>(value: PropertyInput<'pageBreakBefore', T, Value>): this {
    return this.write('pageBreakBefore', value);
  }
  /**
   * 兼容属性 page-break-inside；优先参考标准属性 breakInside及浏览器支持范围。
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-inside
   */
  pageBreakInside<const Value>(value: PropertyInput<'pageBreakInside', T, Value>): this {
    return this.write('pageBreakInside', value);
  }
  /**
   * 兼容属性 position-try-options；优先参考标准属性 positionTryFallbacks及浏览器支持范围。
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  positionTryOptions<const Value>(value: PropertyInput<'positionTryOptions', T, Value>): this {
    return this.write('positionTryOptions', value);
  }
  /**
   * 指定旧版滚动子项的吸附坐标，现代布局使用 scroll-snap-align。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  scrollSnapCoordinate<const Value>(value: PropertyInput<'scrollSnapCoordinate', T, Value>): this {
    return this.write('scrollSnapCoordinate', value);
  }
  /**
   * 指定旧版滚动容器中吸附位置对齐的目标坐标。
   *
   * CSS 规范初始值：0px 0px。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  scrollSnapDestination<const Value>(
    value: PropertyInput<'scrollSnapDestination', T, Value>,
  ): this {
    return this.write('scrollSnapDestination', value);
  }
  /**
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-x
   */
  scrollSnapPointsX<const Value>(value: PropertyInput<'scrollSnapPointsX', T, Value>): this {
    return this.write('scrollSnapPointsX', value);
  }
  /**
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-y
   */
  scrollSnapPointsY<const Value>(value: PropertyInput<'scrollSnapPointsY', T, Value>): this {
    return this.write('scrollSnapPointsY', value);
  }
  /**
   * 控制旧版水平滚动吸附的强制程度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-x
   */
  scrollSnapTypeX<const Value>(value: PropertyInput<'scrollSnapTypeX', T, Value>): this {
    return this.write('scrollSnapTypeX', value);
  }
  /**
   * 控制旧版垂直滚动吸附的强制程度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-y
   */
  scrollSnapTypeY<const Value>(value: PropertyInput<'scrollSnapTypeY', T, Value>): this {
    return this.write('scrollSnapTypeY', value);
  }
  /**
   * 兼容属性 -webkit-align-content；优先参考标准属性及浏览器支持范围。
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  WebkitAlignContent<const Value>(value: PropertyInput<'WebkitAlignContent', T, Value>): this {
    return this.write('WebkitAlignContent', value);
  }
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
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("flex").alignItems("center")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-items
   */
  WebkitAlignItems<const Value>(value: PropertyInput<'WebkitAlignItems', T, Value>): this {
    return this.write('WebkitAlignItems', value);
  }
  /**
   * 兼容属性 -webkit-align-self；优先参考标准属性及浏览器支持范围。
   * 单独覆盖一个项目的交叉轴或块轴对齐方式。
   *
   * 适用场景：只改变某一个项目的交叉轴或块轴对齐，不改变同组其他项目。
   *
   * 常用值：`auto`、`stretch`、`baseline`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.alignSelf("center")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  WebkitAlignSelf<const Value>(value: PropertyInput<'WebkitAlignSelf', T, Value>): this {
    return this.write('WebkitAlignSelf', value);
  }
  /**
   * 兼容属性 -webkit-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * CSS 规范初始值：animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  WebkitAnimation<const Value>(value: PropertyInput<'WebkitAnimation', T, Value>): this {
    return this.write('WebkitAnimation', value);
  }
  /**
   * 兼容属性 -webkit-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-delay
   */
  WebkitAnimationDelay<const Value>(value: PropertyInput<'WebkitAnimationDelay', T, Value>): this {
    return this.write('WebkitAnimationDelay', value);
  }
  /**
   * 兼容属性 -webkit-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  WebkitAnimationDirection<const Value>(
    value: PropertyInput<'WebkitAnimationDirection', T, Value>,
  ): this {
    return this.write('WebkitAnimationDirection', value);
  }
  /**
   * 兼容属性 -webkit-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-duration
   */
  WebkitAnimationDuration<const Value>(
    value: PropertyInput<'WebkitAnimationDuration', T, Value>,
  ): this {
    return this.write('WebkitAnimationDuration', value);
  }
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
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.animationFillMode("forwards")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-fill-mode
   */
  WebkitAnimationFillMode<const Value>(
    value: PropertyInput<'WebkitAnimationFillMode', T, Value>,
  ): this {
    return this.write('WebkitAnimationFillMode', value);
  }
  /**
   * 兼容属性 -webkit-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-iteration-count
   */
  WebkitAnimationIterationCount<const Value>(
    value: PropertyInput<'WebkitAnimationIterationCount', T, Value>,
  ): this {
    return this.write('WebkitAnimationIterationCount', value);
  }
  /**
   * 兼容属性 -webkit-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-name
   */
  WebkitAnimationName<const Value>(value: PropertyInput<'WebkitAnimationName', T, Value>): this {
    return this.write('WebkitAnimationName', value);
  }
  /**
   * 兼容属性 -webkit-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：running。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-play-state
   */
  WebkitAnimationPlayState<const Value>(
    value: PropertyInput<'WebkitAnimationPlayState', T, Value>,
  ): this {
    return this.write('WebkitAnimationPlayState', value);
  }
  /**
   * 兼容属性 -webkit-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  WebkitAnimationTimingFunction<const Value>(
    value: PropertyInput<'WebkitAnimationTimingFunction', T, Value>,
  ): this {
    return this.write('WebkitAnimationTimingFunction', value);
  }
  /**
   * 兼容属性 -webkit-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：none（浏览器默认样式表可能覆盖）。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  WebkitAppearance<const Value>(value: PropertyInput<'WebkitAppearance', T, Value>): this {
    return this.write('WebkitAppearance', value);
  }
  /**
   * 兼容属性 -webkit-backdrop-filter；优先参考标准属性及浏览器支持范围。
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backdrop-filter
   */
  WebkitBackdropFilter<const Value>(value: PropertyInput<'WebkitBackdropFilter', T, Value>): this {
    return this.write('WebkitBackdropFilter', value);
  }
  /**
   * 兼容属性 -webkit-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backface-visibility
   */
  WebkitBackfaceVisibility<const Value>(
    value: PropertyInput<'WebkitBackfaceVisibility', T, Value>,
  ): this {
    return this.write('WebkitBackfaceVisibility', value);
  }
  /**
   * 兼容属性 -webkit-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：border-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  WebkitBackgroundClip<const Value>(value: PropertyInput<'WebkitBackgroundClip', T, Value>): this {
    return this.write('WebkitBackgroundClip', value);
  }
  /**
   * 兼容属性 -webkit-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：padding-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  WebkitBackgroundOrigin<const Value>(
    value: PropertyInput<'WebkitBackgroundOrigin', T, Value>,
  ): this {
    return this.write('WebkitBackgroundOrigin', value);
  }
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
   * CSS 规范初始值：auto auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.backgroundSize("cover").backgroundPosition("center")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-size
   */
  WebkitBackgroundSize<const Value>(value: PropertyInput<'WebkitBackgroundSize', T, Value>): this {
    return this.write('WebkitBackgroundSize', value);
  }
  /**
   * 兼容属性 -webkit-border-before；优先参考标准属性 borderBlockStart及浏览器支持范围。
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-width: 见其子属性；border-style: 见其子属性；color: canvastext。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before
   */
  WebkitBorderBefore<const Value>(value: PropertyInput<'WebkitBorderBefore', T, Value>): this {
    return this.write('WebkitBorderBefore', value);
  }
  /**
   * 兼容属性 -webkit-border-before-color；优先参考标准属性 borderBlockStartColor及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-color
   */
  WebkitBorderBeforeColor<const Value>(
    value: PropertyInput<'WebkitBorderBeforeColor', T, Value>,
  ): this {
    return this.write('WebkitBorderBeforeColor', value);
  }
  /**
   * 兼容属性 -webkit-border-before-style；优先参考标准属性 borderBlockStartStyle及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  WebkitBorderBeforeStyle<const Value>(
    value: PropertyInput<'WebkitBorderBeforeStyle', T, Value>,
  ): this {
    return this.write('WebkitBorderBeforeStyle', value);
  }
  /**
   * 兼容属性 -webkit-border-before-width；优先参考标准属性 borderBlockStartWidth及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  WebkitBorderBeforeWidth<const Value>(
    value: PropertyInput<'WebkitBorderBeforeWidth', T, Value>,
  ): this {
    return this.write('WebkitBorderBeforeWidth', value);
  }
  /**
   * 兼容属性 -webkit-border-bottom-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-left-radius
   */
  WebkitBorderBottomLeftRadius<const Value>(
    value: PropertyInput<'WebkitBorderBottomLeftRadius', T, Value>,
  ): this {
    return this.write('WebkitBorderBottomLeftRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-bottom-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-right-radius
   */
  WebkitBorderBottomRightRadius<const Value>(
    value: PropertyInput<'WebkitBorderBottomRightRadius', T, Value>,
  ): this {
    return this.write('WebkitBorderBottomRightRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * CSS 规范初始值：border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  WebkitBorderImage<const Value>(value: PropertyInput<'WebkitBorderImage', T, Value>): this {
    return this.write('WebkitBorderImage', value);
  }
  /**
   * 兼容属性 -webkit-border-image-slice；优先参考标准属性及浏览器支持范围。
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：100%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image-slice
   */
  WebkitBorderImageSlice<const Value>(
    value: PropertyInput<'WebkitBorderImageSlice', T, Value>,
  ): this {
    return this.write('WebkitBorderImageSlice', value);
  }
  /**
   * 兼容属性 -webkit-border-radius；优先参考标准属性及浏览器支持范围。
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   *
   * CSS 规范初始值：border-top-left-radius: 0；border-top-right-radius: 0；border-bottom-right-radius: 0；border-bottom-left-radius: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.borderRadius("8px")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-radius
   */
  WebkitBorderRadius<const Value>(value: PropertyInput<'WebkitBorderRadius', T, Value>): this {
    return this.write('WebkitBorderRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-top-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-left-radius
   */
  WebkitBorderTopLeftRadius<const Value>(
    value: PropertyInput<'WebkitBorderTopLeftRadius', T, Value>,
  ): this {
    return this.write('WebkitBorderTopLeftRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-top-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-right-radius
   */
  WebkitBorderTopRightRadius<const Value>(
    value: PropertyInput<'WebkitBorderTopRightRadius', T, Value>,
  ): this {
    return this.write('WebkitBorderTopRightRadius', value);
  }
  /**
   * 兼容属性 -webkit-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-align
   */
  WebkitBoxAlign<const Value>(value: PropertyInput<'WebkitBoxAlign', T, Value>): this {
    return this.write('WebkitBoxAlign', value);
  }
  /**
   * 兼容属性 -webkit-box-decoration-break；优先参考标准属性及浏览器支持范围。
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：slice。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-decoration-break
   */
  WebkitBoxDecorationBreak<const Value>(
    value: PropertyInput<'WebkitBoxDecorationBreak', T, Value>,
  ): this {
    return this.write('WebkitBoxDecorationBreak', value);
  }
  /**
   * 兼容属性 -webkit-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-direction
   */
  WebkitBoxDirection<const Value>(value: PropertyInput<'WebkitBoxDirection', T, Value>): this {
    return this.write('WebkitBoxDirection', value);
  }
  /**
   * 兼容属性 -webkit-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-flex
   */
  WebkitBoxFlex<const Value>(value: PropertyInput<'WebkitBoxFlex', T, Value>): this {
    return this.write('WebkitBoxFlex', value);
  }
  /**
   * 兼容属性 -webkit-box-flex-group；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-flex-group
   */
  WebkitBoxFlexGroup<const Value>(value: PropertyInput<'WebkitBoxFlexGroup', T, Value>): this {
    return this.write('WebkitBoxFlexGroup', value);
  }
  /**
   * 兼容属性 -webkit-box-lines；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：single。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-lines
   */
  WebkitBoxLines<const Value>(value: PropertyInput<'WebkitBoxLines', T, Value>): this {
    return this.write('WebkitBoxLines', value);
  }
  /**
   * 兼容属性 -webkit-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-ordinal-group
   */
  WebkitBoxOrdinalGroup<const Value>(
    value: PropertyInput<'WebkitBoxOrdinalGroup', T, Value>,
  ): this {
    return this.write('WebkitBoxOrdinalGroup', value);
  }
  /**
   * 指定旧版弹性盒的排列方向；仅为多行截断兼容保留，常规布局请使用 Flex/Grid。
   *
   * CSS 规范初始值：inline-axis。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  WebkitBoxOrient<const Value>(value: PropertyInput<'WebkitBoxOrient', T, Value>): this {
    return this.write('WebkitBoxOrient', value);
  }
  /**
   * 兼容属性 -webkit-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：start。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-pack
   */
  WebkitBoxPack<const Value>(value: PropertyInput<'WebkitBoxPack', T, Value>): this {
    return this.write('WebkitBoxPack', value);
  }
  /**
   * 兼容属性 -webkit-box-reflect；优先参考标准属性及浏览器支持范围。
   * 在指定方向生成元素的镜像，并可设置镜像间距和遮罩。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  WebkitBoxReflect<const Value>(value: PropertyInput<'WebkitBoxReflect', T, Value>): this {
    return this.write('WebkitBoxReflect', value);
  }
  /**
   * 兼容属性 -webkit-box-shadow；优先参考标准属性及浏览器支持范围。
   * 设置盒子的外部或内部阴影，可叠加多层。
   *
   * 阴影不占布局空间，可用逗号叠加；与 border/outline 的用途和绘制位置不同。
   *
   * 适用场景：浮层层次、卡片边缘或内凹效果。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.boxShadow("0 2px 8px rgb(0 0 0 / 0.15)")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-shadow
   */
  WebkitBoxShadow<const Value>(value: PropertyInput<'WebkitBoxShadow', T, Value>): this {
    return this.write('WebkitBoxShadow', value);
  }
  /**
   * 兼容属性 -webkit-box-sizing；优先参考标准属性及浏览器支持范围。
   * 决定 width、height 等尺寸是否包含内边距和边框。
   *
   * 适用场景：确定组件声明宽高时是否把 padding 和 border 算在尺寸内。
   *
   * 常用值：`content-box`、`border-box`。
   *
   * CSS 规范初始值：content-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.boxSizing("border-box").width("20rem").padding("1rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-sizing
   */
  WebkitBoxSizing<const Value>(value: PropertyInput<'WebkitBoxSizing', T, Value>): this {
    return this.write('WebkitBoxSizing', value);
  }
  /**
   * 兼容属性 -webkit-clip-path；优先参考标准属性及浏览器支持范围。
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  WebkitClipPath<const Value>(value: PropertyInput<'WebkitClipPath', T, Value>): this {
    return this.write('WebkitClipPath', value);
  }
  /**
   * 兼容属性 -webkit-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-count
   */
  WebkitColumnCount<const Value>(value: PropertyInput<'WebkitColumnCount', T, Value>): this {
    return this.write('WebkitColumnCount', value);
  }
  /**
   * 兼容属性 -webkit-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：balance。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-fill
   */
  WebkitColumnFill<const Value>(value: PropertyInput<'WebkitColumnFill', T, Value>): this {
    return this.write('WebkitColumnFill', value);
  }
  /**
   * 兼容属性 -webkit-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * CSS 规范初始值：column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule
   */
  WebkitColumnRule<const Value>(value: PropertyInput<'WebkitColumnRule', T, Value>): this {
    return this.write('WebkitColumnRule', value);
  }
  /**
   * 兼容属性 -webkit-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-color
   */
  WebkitColumnRuleColor<const Value>(
    value: PropertyInput<'WebkitColumnRuleColor', T, Value>,
  ): this {
    return this.write('WebkitColumnRuleColor', value);
  }
  /**
   * 兼容属性 -webkit-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  WebkitColumnRuleStyle<const Value>(
    value: PropertyInput<'WebkitColumnRuleStyle', T, Value>,
  ): this {
    return this.write('WebkitColumnRuleStyle', value);
  }
  /**
   * 兼容属性 -webkit-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  WebkitColumnRuleWidth<const Value>(
    value: PropertyInput<'WebkitColumnRuleWidth', T, Value>,
  ): this {
    return this.write('WebkitColumnRuleWidth', value);
  }
  /**
   * 兼容属性 -webkit-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * CSS 规范初始值：column-width: auto；column-count: auto；column-height: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-columns
   */
  WebkitColumns<const Value>(value: PropertyInput<'WebkitColumns', T, Value>): this {
    return this.write('WebkitColumns', value);
  }
  /**
   * 兼容属性 -webkit-column-span；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-span
   */
  WebkitColumnSpan<const Value>(value: PropertyInput<'WebkitColumnSpan', T, Value>): this {
    return this.write('WebkitColumnSpan', value);
  }
  /**
   * 兼容属性 -webkit-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-width
   */
  WebkitColumnWidth<const Value>(value: PropertyInput<'WebkitColumnWidth', T, Value>): this {
    return this.write('WebkitColumnWidth', value);
  }
  /**
   * 兼容属性 -webkit-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-filter
   */
  WebkitFilter<const Value>(value: PropertyInput<'WebkitFilter', T, Value>): this {
    return this.write('WebkitFilter', value);
  }
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
   * CSS 规范初始值：flex-grow: 0；flex-shrink: 1；flex-basis: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.flex("1 1 0%")
   * @example
   * s.flex("none")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  WebkitFlex<const Value>(value: PropertyInput<'WebkitFlex', T, Value>): this {
    return this.write('WebkitFlex', value);
  }
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
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.flexBasis("16rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  WebkitFlexBasis<const Value>(value: PropertyInput<'WebkitFlexBasis', T, Value>): this {
    return this.write('WebkitFlexBasis', value);
  }
  /**
   * 兼容属性 -webkit-flex-direction；优先参考标准属性及浏览器支持范围。
   * 设置弹性容器的主轴方向及项目排列方向。
   *
   * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
   *
   * 常用值：`row`、`column`、`row-reverse`、`column-reverse`。
   *
   * CSS 规范初始值：row。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("flex").flexDirection("column").gap("1rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-direction
   */
  WebkitFlexDirection<const Value>(value: PropertyInput<'WebkitFlexDirection', T, Value>): this {
    return this.write('WebkitFlexDirection', value);
  }
  /**
   * 兼容属性 -webkit-flex-flow；优先参考标准属性及浏览器支持范围。
   * 同时设置弹性布局的主轴方向和换行方式。
   *
   * CSS 规范初始值：flex-direction: row；flex-wrap: nowrap。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  WebkitFlexFlow<const Value>(value: PropertyInput<'WebkitFlexFlow', T, Value>): this {
    return this.write('WebkitFlexFlow', value);
  }
  /**
   * 兼容属性 -webkit-flex-grow；优先参考标准属性及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * 数值是分配正剩余空间的相对权重，不是最终宽度百分比。只有容器存在剩余空间时才发挥作用。
   *
   * 适用场景：让主内容区填充工具栏或行布局的剩余空间。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.flexGrow(1)
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-grow
   */
  WebkitFlexGrow<const Value>(value: PropertyInput<'WebkitFlexGrow', T, Value>): this {
    return this.write('WebkitFlexGrow', value);
  }
  /**
   * 兼容属性 -webkit-flex-shrink；优先参考标准属性及浏览器支持范围。
   * 设置弹性项目空间不足时的收缩系数。
   *
   * 实际收缩还与 flex-basis 成比例；自动最小尺寸可能阻止项目继续缩小。
   *
   * 适用场景：控制空间不足时是否允许缩小；设置为 0 可避免图标或固定控件收缩。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.flexShrink(0)
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-shrink
   */
  WebkitFlexShrink<const Value>(value: PropertyInput<'WebkitFlexShrink', T, Value>): this {
    return this.write('WebkitFlexShrink', value);
  }
  /**
   * 兼容属性 -webkit-flex-wrap；优先参考标准属性及浏览器支持范围。
   * 设置弹性项目是否换行，以及多行的排列方向。
   *
   * 适用场景：标签、按钮等项目不足一行时允许分行。
   *
   * 常用值：`nowrap`、`wrap`、`wrap-reverse`。
   *
   * CSS 规范初始值：nowrap。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("flex").flexWrap("wrap").gap("0.5rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-wrap
   */
  WebkitFlexWrap<const Value>(value: PropertyInput<'WebkitFlexWrap', T, Value>): this {
    return this.write('WebkitFlexWrap', value);
  }
  /**
   * 兼容属性 -webkit-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-feature-settings
   */
  WebkitFontFeatureSettings<const Value>(
    value: PropertyInput<'WebkitFontFeatureSettings', T, Value>,
  ): this {
    return this.write('WebkitFontFeatureSettings', value);
  }
  /**
   * 兼容属性 -webkit-font-kerning；优先参考标准属性及浏览器支持范围。
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-kerning
   */
  WebkitFontKerning<const Value>(value: PropertyInput<'WebkitFontKerning', T, Value>): this {
    return this.write('WebkitFontKerning', value);
  }
  /**
   * 兼容属性 -webkit-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 WebKit 平台的字体平滑方式；不是通用的跨浏览器排版开关。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  WebkitFontSmoothing<const Value>(value: PropertyInput<'WebkitFontSmoothing', T, Value>): this {
    return this.write('WebkitFontSmoothing', value);
  }
  /**
   * 兼容属性 -webkit-font-variant-ligatures；优先参考标准属性及浏览器支持范围。
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  WebkitFontVariantLigatures<const Value>(
    value: PropertyInput<'WebkitFontVariantLigatures', T, Value>,
  ): this {
    return this.write('WebkitFontVariantLigatures', value);
  }
  /**
   * 兼容属性 -webkit-hyphenate-character；优先参考标准属性及浏览器支持范围。
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphenate-character
   */
  WebkitHyphenateCharacter<const Value>(
    value: PropertyInput<'WebkitHyphenateCharacter', T, Value>,
  ): this {
    return this.write('WebkitHyphenateCharacter', value);
  }
  /**
   * 兼容属性 -webkit-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：manual。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphens
   */
  WebkitHyphens<const Value>(value: PropertyInput<'WebkitHyphens', T, Value>): this {
    return this.write('WebkitHyphens', value);
  }
  /**
   * 兼容属性 -webkit-initial-letter；优先参考标准属性及浏览器支持范围。
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-initial-letter
   */
  WebkitInitialLetter<const Value>(value: PropertyInput<'WebkitInitialLetter', T, Value>): this {
    return this.write('WebkitInitialLetter', value);
  }
  /**
   * 兼容属性 -webkit-justify-content；优先参考标准属性及浏览器支持范围。
   * 分配布局主轴或行内轴的剩余空间，控制内容整体对齐。
   *
   * Flex 中沿主轴分配空间，Grid 中沿行内轴对齐网格整体。没有剩余空间时，空间分配效果可能不明显。
   *
   * 常用值：`center`、`space-between`、`space-around`、`space-evenly`。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.display("flex").justifyContent("space-between")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-justify-content
   */
  WebkitJustifyContent<const Value>(value: PropertyInput<'WebkitJustifyContent', T, Value>): this {
    return this.write('WebkitJustifyContent', value);
  }
  /**
   * 兼容属性 -webkit-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  WebkitLineBreak<const Value>(value: PropertyInput<'WebkitLineBreak', T, Value>): this {
    return this.write('WebkitLineBreak', value);
  }
  /**
   * 限制多行文本显示的行数；与 display: -webkit-box、WebkitBoxOrient('vertical') 和 overflow: hidden 配合，不删除文本内容。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-clamp
   */
  WebkitLineClamp<const Value>(value: PropertyInput<'WebkitLineClamp', T, Value>): this {
    return this.write('WebkitLineClamp', value);
  }
  /**
   * 兼容属性 -webkit-logical-height；优先参考标准属性 blockSize及浏览器支持范围。
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  WebkitLogicalHeight<const Value>(value: PropertyInput<'WebkitLogicalHeight', T, Value>): this {
    return this.write('WebkitLogicalHeight', value);
  }
  /**
   * 兼容属性 -webkit-logical-width；优先参考标准属性 inlineSize及浏览器支持范围。
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  WebkitLogicalWidth<const Value>(value: PropertyInput<'WebkitLogicalWidth', T, Value>): this {
    return this.write('WebkitLogicalWidth', value);
  }
  /**
   * 兼容属性 -webkit-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-end
   */
  WebkitMarginEnd<const Value>(value: PropertyInput<'WebkitMarginEnd', T, Value>): this {
    return this.write('WebkitMarginEnd', value);
  }
  /**
   * 兼容属性 -webkit-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-start
   */
  WebkitMarginStart<const Value>(value: PropertyInput<'WebkitMarginStart', T, Value>): this {
    return this.write('WebkitMarginStart', value);
  }
  /**
   * 兼容属性 -webkit-mask；优先参考标准属性及浏览器支持范围。
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   *
   * CSS 规范初始值：-webkit-mask-image: none；-webkit-mask-repeat: repeat；-webkit-mask-attachment: scroll；-webkit-mask-position: 0% 0%；-webkit-mask-origin: padding；-webkit-mask-clip: border。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  WebkitMask<const Value>(value: PropertyInput<'WebkitMask', T, Value>): this {
    return this.write('WebkitMask', value);
  }
  /**
   * 兼容属性 -webkit-mask-attachment；优先参考标准属性及浏览器支持范围。
   * 指定旧版遮罩图像是否随内容滚动。
   *
   * CSS 规范初始值：scroll。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  WebkitMaskAttachment<const Value>(value: PropertyInput<'WebkitMaskAttachment', T, Value>): this {
    return this.write('WebkitMaskAttachment', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image；优先参考标准属性 maskBorder及浏览器支持范围。
   * 设置基于九宫格图像切片的边框遮罩。
   *
   * CSS 规范初始值：mask-border-mode: alpha；mask-border-outset: 0；mask-border-repeat: stretch；mask-border-slice: 0；mask-border-source: none；mask-border-width: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  WebkitMaskBoxImage<const Value>(value: PropertyInput<'WebkitMaskBoxImage', T, Value>): this {
    return this.write('WebkitMaskBoxImage', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-outset；优先参考标准属性 maskBorderOutset及浏览器支持范围。
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-outset
   */
  WebkitMaskBoxImageOutset<const Value>(
    value: PropertyInput<'WebkitMaskBoxImageOutset', T, Value>,
  ): this {
    return this.write('WebkitMaskBoxImageOutset', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-repeat；优先参考标准属性 maskBorderRepeat及浏览器支持范围。
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  WebkitMaskBoxImageRepeat<const Value>(
    value: PropertyInput<'WebkitMaskBoxImageRepeat', T, Value>,
  ): this {
    return this.write('WebkitMaskBoxImageRepeat', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-slice；优先参考标准属性 maskBorderSlice及浏览器支持范围。
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-slice
   */
  WebkitMaskBoxImageSlice<const Value>(
    value: PropertyInput<'WebkitMaskBoxImageSlice', T, Value>,
  ): this {
    return this.write('WebkitMaskBoxImageSlice', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-source；优先参考标准属性 maskBorderSource及浏览器支持范围。
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-source
   */
  WebkitMaskBoxImageSource<const Value>(
    value: PropertyInput<'WebkitMaskBoxImageSource', T, Value>,
  ): this {
    return this.write('WebkitMaskBoxImageSource', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-width；优先参考标准属性 maskBorderWidth及浏览器支持范围。
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-width
   */
  WebkitMaskBoxImageWidth<const Value>(
    value: PropertyInput<'WebkitMaskBoxImageWidth', T, Value>,
  ): this {
    return this.write('WebkitMaskBoxImageWidth', value);
  }
  /**
   * 兼容属性 -webkit-mask-clip；优先参考标准属性及浏览器支持范围。
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：border。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  WebkitMaskClip<const Value>(value: PropertyInput<'WebkitMaskClip', T, Value>): this {
    return this.write('WebkitMaskClip', value);
  }
  /**
   * 兼容属性 -webkit-mask-composite；优先参考标准属性及浏览器支持范围。
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：source-over。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  WebkitMaskComposite<const Value>(value: PropertyInput<'WebkitMaskComposite', T, Value>): this {
    return this.write('WebkitMaskComposite', value);
  }
  /**
   * 兼容属性 -webkit-mask-image；优先参考标准属性及浏览器支持范围。
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-image
   */
  WebkitMaskImage<const Value>(value: PropertyInput<'WebkitMaskImage', T, Value>): this {
    return this.write('WebkitMaskImage', value);
  }
  /**
   * 兼容属性 -webkit-mask-origin；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：padding。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  WebkitMaskOrigin<const Value>(value: PropertyInput<'WebkitMaskOrigin', T, Value>): this {
    return this.write('WebkitMaskOrigin', value);
  }
  /**
   * 兼容属性 -webkit-mask-position；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：0% 0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  WebkitMaskPosition<const Value>(value: PropertyInput<'WebkitMaskPosition', T, Value>): this {
    return this.write('WebkitMaskPosition', value);
  }
  /**
   * 兼容属性 -webkit-mask-position-x；优先参考标准属性 backgroundPositionX及浏览器支持范围。
   * 设置遮罩图像的水平位置，可使用长度、百分比或位置关键字。
   *
   * CSS 规范初始值：0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  WebkitMaskPositionX<const Value>(value: PropertyInput<'WebkitMaskPositionX', T, Value>): this {
    return this.write('WebkitMaskPositionX', value);
  }
  /**
   * 兼容属性 -webkit-mask-position-y；优先参考标准属性 backgroundPositionY及浏览器支持范围。
   * 设置遮罩图像的垂直位置，可使用长度、百分比或位置关键字。
   *
   * CSS 规范初始值：0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  WebkitMaskPositionY<const Value>(value: PropertyInput<'WebkitMaskPositionY', T, Value>): this {
    return this.write('WebkitMaskPositionY', value);
  }
  /**
   * 兼容属性 -webkit-mask-repeat；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：repeat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  WebkitMaskRepeat<const Value>(value: PropertyInput<'WebkitMaskRepeat', T, Value>): this {
    return this.write('WebkitMaskRepeat', value);
  }
  /**
   * 兼容属性 -webkit-mask-repeat-x；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在水平方向的重复方式。
   *
   * CSS 规范初始值：repeat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  WebkitMaskRepeatX<const Value>(value: PropertyInput<'WebkitMaskRepeatX', T, Value>): this {
    return this.write('WebkitMaskRepeatX', value);
  }
  /**
   * 兼容属性 -webkit-mask-repeat-y；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在垂直方向的重复方式。
   *
   * CSS 规范初始值：repeat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  WebkitMaskRepeatY<const Value>(value: PropertyInput<'WebkitMaskRepeatY', T, Value>): this {
    return this.write('WebkitMaskRepeatY', value);
  }
  /**
   * 兼容属性 -webkit-mask-size；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：auto auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-size
   */
  WebkitMaskSize<const Value>(value: PropertyInput<'WebkitMaskSize', T, Value>): this {
    return this.write('WebkitMaskSize', value);
  }
  /**
   * 兼容属性 -webkit-max-inline-size；优先参考标准属性及浏览器支持范围。
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  WebkitMaxInlineSize<const Value>(value: PropertyInput<'WebkitMaxInlineSize', T, Value>): this {
    return this.write('WebkitMaxInlineSize', value);
  }
  /**
   * 兼容属性 -webkit-order；优先参考标准属性及浏览器支持范围。
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-order
   */
  WebkitOrder<const Value>(value: PropertyInput<'WebkitOrder', T, Value>): this {
    return this.write('WebkitOrder', value);
  }
  /**
   * 兼容属性 -webkit-overflow-scrolling；优先参考标准属性及浏览器支持范围。
   * 选择特定旧版 WebKit 触控环境的滚动方式，包括惯性滚动。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-overflow-scrolling
   */
  WebkitOverflowScrolling<const Value>(
    value: PropertyInput<'WebkitOverflowScrolling', T, Value>,
  ): this {
    return this.write('WebkitOverflowScrolling', value);
  }
  /**
   * 兼容属性 -webkit-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-end
   */
  WebkitPaddingEnd<const Value>(value: PropertyInput<'WebkitPaddingEnd', T, Value>): this {
    return this.write('WebkitPaddingEnd', value);
  }
  /**
   * 兼容属性 -webkit-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-start
   */
  WebkitPaddingStart<const Value>(value: PropertyInput<'WebkitPaddingStart', T, Value>): this {
    return this.write('WebkitPaddingStart', value);
  }
  /**
   * 兼容属性 -webkit-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective
   */
  WebkitPerspective<const Value>(value: PropertyInput<'WebkitPerspective', T, Value>): this {
    return this.write('WebkitPerspective', value);
  }
  /**
   * 兼容属性 -webkit-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：50% 50%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  WebkitPerspectiveOrigin<const Value>(
    value: PropertyInput<'WebkitPerspectiveOrigin', T, Value>,
  ): this {
    return this.write('WebkitPerspectiveOrigin', value);
  }
  /**
   * 兼容属性 -webkit-print-color-adjust；优先参考标准属性及浏览器支持范围。
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：economy。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-print-color-adjust
   */
  WebkitPrintColorAdjust<const Value>(
    value: PropertyInput<'WebkitPrintColorAdjust', T, Value>,
  ): this {
    return this.write('WebkitPrintColorAdjust', value);
  }
  /**
   * 兼容属性 -webkit-ruby-position；优先参考标准属性及浏览器支持范围。
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：alternate。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  WebkitRubyPosition<const Value>(value: PropertyInput<'WebkitRubyPosition', T, Value>): this {
    return this.write('WebkitRubyPosition', value);
  }
  /**
   * 兼容属性 -webkit-scroll-snap-type；优先参考标准属性及浏览器支持范围。
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.scrollSnapType("x mandatory")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-scroll-snap-type
   */
  WebkitScrollSnapType<const Value>(value: PropertyInput<'WebkitScrollSnapType', T, Value>): this {
    return this.write('WebkitScrollSnapType', value);
  }
  /**
   * 兼容属性 -webkit-shape-margin；优先参考标准属性及浏览器支持范围。
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-shape-margin
   */
  WebkitShapeMargin<const Value>(value: PropertyInput<'WebkitShapeMargin', T, Value>): this {
    return this.write('WebkitShapeMargin', value);
  }
  /**
   * 兼容属性 -webkit-tap-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置 WebKit 触控点击链接或可交互区域时的高亮颜色。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-tap-highlight-color
   */
  WebkitTapHighlightColor<const Value>(
    value: PropertyInput<'WebkitTapHighlightColor', T, Value>,
  ): this {
    return this.write('WebkitTapHighlightColor', value);
  }
  /**
   * 兼容属性 -webkit-text-combine；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-combine
   */
  WebkitTextCombine<const Value>(value: PropertyInput<'WebkitTextCombine', T, Value>): this {
    return this.write('WebkitTextCombine', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-color
   */
  WebkitTextDecorationColor<const Value>(
    value: PropertyInput<'WebkitTextDecorationColor', T, Value>,
  ): this {
    return this.write('WebkitTextDecorationColor', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  WebkitTextDecorationLine<const Value>(
    value: PropertyInput<'WebkitTextDecorationLine', T, Value>,
  ): this {
    return this.write('WebkitTextDecorationLine', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-skip；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：objects。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  WebkitTextDecorationSkip<const Value>(
    value: PropertyInput<'WebkitTextDecorationSkip', T, Value>,
  ): this {
    return this.write('WebkitTextDecorationSkip', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：solid。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  WebkitTextDecorationStyle<const Value>(
    value: PropertyInput<'WebkitTextDecorationStyle', T, Value>,
  ): this {
    return this.write('WebkitTextDecorationStyle', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis；优先参考标准属性及浏览器支持范围。
   * 同时设置文字着重号的样式和颜色。
   *
   * CSS 规范初始值：text-emphasis-style: none；text-emphasis-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis
   */
  WebkitTextEmphasis<const Value>(value: PropertyInput<'WebkitTextEmphasis', T, Value>): this {
    return this.write('WebkitTextEmphasis', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis-color；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-color
   */
  WebkitTextEmphasisColor<const Value>(
    value: PropertyInput<'WebkitTextEmphasisColor', T, Value>,
  ): this {
    return this.write('WebkitTextEmphasisColor', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis-position；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-position
   */
  WebkitTextEmphasisPosition<const Value>(
    value: PropertyInput<'WebkitTextEmphasisPosition', T, Value>,
  ): this {
    return this.write('WebkitTextEmphasisPosition', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis-style；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  WebkitTextEmphasisStyle<const Value>(
    value: PropertyInput<'WebkitTextEmphasisStyle', T, Value>,
  ): this {
    return this.write('WebkitTextEmphasisStyle', value);
  }
  /**
   * 兼容属性 -webkit-text-fill-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形内部填充色，可独立于文字描边色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-fill-color
   */
  WebkitTextFillColor<const Value>(value: PropertyInput<'WebkitTextFillColor', T, Value>): this {
    return this.write('WebkitTextFillColor', value);
  }
  /**
   * 兼容属性 -webkit-text-orientation；优先参考标准属性及浏览器支持范围。
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：mixed。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  WebkitTextOrientation<const Value>(
    value: PropertyInput<'WebkitTextOrientation', T, Value>,
  ): this {
    return this.write('WebkitTextOrientation', value);
  }
  /**
   * 兼容属性 -webkit-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：支持文本放大的移动浏览器为 auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-size-adjust
   */
  WebkitTextSizeAdjust<const Value>(value: PropertyInput<'WebkitTextSizeAdjust', T, Value>): this {
    return this.write('WebkitTextSizeAdjust', value);
  }
  /**
   * 兼容属性 -webkit-text-stroke；优先参考标准属性及浏览器支持范围。
   * 合并设置文字字形描边的宽度和颜色。
   *
   * CSS 规范初始值：-webkit-text-stroke-width: 0；-webkit-text-stroke-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke
   */
  WebkitTextStroke<const Value>(value: PropertyInput<'WebkitTextStroke', T, Value>): this {
    return this.write('WebkitTextStroke', value);
  }
  /**
   * 兼容属性 -webkit-text-stroke-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-color
   */
  WebkitTextStrokeColor<const Value>(
    value: PropertyInput<'WebkitTextStrokeColor', T, Value>,
  ): this {
    return this.write('WebkitTextStrokeColor', value);
  }
  /**
   * 兼容属性 -webkit-text-stroke-width；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边宽度。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-width
   */
  WebkitTextStrokeWidth<const Value>(
    value: PropertyInput<'WebkitTextStrokeWidth', T, Value>,
  ): this {
    return this.write('WebkitTextStrokeWidth', value);
  }
  /**
   * 兼容属性 -webkit-text-underline-position；优先参考标准属性及浏览器支持范围。
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  WebkitTextUnderlinePosition<const Value>(
    value: PropertyInput<'WebkitTextUnderlinePosition', T, Value>,
  ): this {
    return this.write('WebkitTextUnderlinePosition', value);
  }
  /**
   * 兼容属性 -webkit-touch-callout；优先参考标准属性及浏览器支持范围。
   * 控制特定 WebKit 触控环境是否显示长按内容菜单。
   *
   * CSS 规范初始值：default。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-touch-callout
   */
  WebkitTouchCallout<const Value>(value: PropertyInput<'WebkitTouchCallout', T, Value>): this {
    return this.write('WebkitTouchCallout', value);
  }
  /**
   * 兼容属性 -webkit-transform；优先参考标准属性及浏览器支持范围。
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.transform("translateX(8px) scale(1.05)")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform
   */
  WebkitTransform<const Value>(value: PropertyInput<'WebkitTransform', T, Value>): this {
    return this.write('WebkitTransform', value);
  }
  /**
   * 兼容属性 -webkit-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：50% 50% 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  WebkitTransformOrigin<const Value>(
    value: PropertyInput<'WebkitTransformOrigin', T, Value>,
  ): this {
    return this.write('WebkitTransformOrigin', value);
  }
  /**
   * 兼容属性 -webkit-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：flat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-style
   */
  WebkitTransformStyle<const Value>(value: PropertyInput<'WebkitTransformStyle', T, Value>): this {
    return this.write('WebkitTransformStyle', value);
  }
  /**
   * 兼容属性 -webkit-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   *
   * CSS 规范初始值：transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.transition("opacity 160ms ease")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  WebkitTransition<const Value>(value: PropertyInput<'WebkitTransition', T, Value>): this {
    return this.write('WebkitTransition', value);
  }
  /**
   * 兼容属性 -webkit-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-delay
   */
  WebkitTransitionDelay<const Value>(
    value: PropertyInput<'WebkitTransitionDelay', T, Value>,
  ): this {
    return this.write('WebkitTransitionDelay', value);
  }
  /**
   * 兼容属性 -webkit-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-duration
   */
  WebkitTransitionDuration<const Value>(
    value: PropertyInput<'WebkitTransitionDuration', T, Value>,
  ): this {
    return this.write('WebkitTransitionDuration', value);
  }
  /**
   * 兼容属性 -webkit-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * CSS 规范初始值：all。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-property
   */
  WebkitTransitionProperty<const Value>(
    value: PropertyInput<'WebkitTransitionProperty', T, Value>,
  ): this {
    return this.write('WebkitTransitionProperty', value);
  }
  /**
   * 兼容属性 -webkit-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  WebkitTransitionTimingFunction<const Value>(
    value: PropertyInput<'WebkitTransitionTimingFunction', T, Value>,
  ): this {
    return this.write('WebkitTransitionTimingFunction', value);
  }
  /**
   * 兼容属性 -webkit-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * CSS 规范初始值：read-only。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  WebkitUserModify<const Value>(value: PropertyInput<'WebkitUserModify', T, Value>): this {
    return this.write('WebkitUserModify', value);
  }
  /**
   * 兼容属性 -webkit-user-select；优先参考标准属性及浏览器支持范围。
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.userSelect("all")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-select
   */
  WebkitUserSelect<const Value>(value: PropertyInput<'WebkitUserSelect', T, Value>): this {
    return this.write('WebkitUserSelect', value);
  }
  /**
   * 兼容属性 -webkit-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：horizontal-tb。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  WebkitWritingMode<const Value>(value: PropertyInput<'WebkitWritingMode', T, Value>): this {
    return this.write('WebkitWritingMode', value);
  }
  /**
   * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。
   *
   * CSS 规范初始值：无独立的实际初始值。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  all<const Value>(value: PropertyInput<'all', T, Value>): this {
    return this.write('all', value);
  }
  /**
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：slice。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  boxDecorationBreak<const Value>(value: PropertyInput<'boxDecorationBreak', T, Value>): this {
    return this.write('boxDecorationBreak', value);
  }
  /**
   * 设置 SVG 圆或椭圆中心的横坐标。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  cx<const Value>(value: PropertyInput<'cx', T, Value>): this {
    return this.write('cx', value);
  }
  /**
   * 设置 SVG 圆或椭圆中心的纵坐标。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  cy<const Value>(value: PropertyInput<'cy', T, Value>): this {
    return this.write('cy', value);
  }
  /**
   * 设置 SVG path 元素的路径数据。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  d<const Value>(value: PropertyInput<'d', T, Value>): this {
    return this.write('d', value);
  }
  /**
   * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。
   *
   * CSS 规范初始值：fixed。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  fieldSizing<const Value>(value: PropertyInput<'fieldSizing', T, Value>): this {
    return this.write('fieldSizing', value);
  }
  /**
   * 控制元素是否参与系统强制颜色模式的自动替换。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  forcedColorAdjust<const Value>(value: PropertyInput<'forcedColorAdjust', T, Value>): this {
    return this.write('forcedColorAdjust', value);
  }
  /**
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  hyphenateCharacter<const Value>(value: PropertyInput<'hyphenateCharacter', T, Value>): this {
    return this.write('hyphenateCharacter', value);
  }
  /**
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  hyphenateLimitChars<const Value>(value: PropertyInput<'hyphenateLimitChars', T, Value>): this {
    return this.write('hyphenateLimitChars', value);
  }
  /**
   * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。
   *
   * CSS 规范初始值：numeric-only。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  interpolateSize<const Value>(value: PropertyInput<'interpolateSize', T, Value>): this {
    return this.write('interpolateSize', value);
  }
  /**
   * 控制元素是否建立独立的层叠上下文，隔离混合效果。
   *
   * 适用场景：建立局部层叠边界，或限制混合模式影响范围。
   *
   * 常用值：`auto`、`isolate`。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @example
   * s.isolation("isolate")
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
   */
  isolation<const Value>(value: PropertyInput<'isolation', T, Value>): this {
    return this.write('isolation', value);
  }
  /**
   * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：pack。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  masonryAutoFlow<const Value>(value: PropertyInput<'masonryAutoFlow', T, Value>): this {
    return this.write('masonryAutoFlow', value);
  }
  /**
   * 设置数学公式的嵌套深度，用于数学字号等排版计算。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  mathDepth<const Value>(value: PropertyInput<'mathDepth', T, Value>): this {
    return this.write('mathDepth', value);
  }
  /**
   * 控制数学上标采用正常还是压缩的垂直偏移。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  mathShift<const Value>(value: PropertyInput<'mathShift', T, Value>): this {
    return this.write('mathShift', value);
  }
  /**
   * 设置数学公式采用正常还是紧凑排版。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  mathStyle<const Value>(value: PropertyInput<'mathStyle', T, Value>): this {
    return this.write('mathStyle', value);
  }
  /**
   * 设置运动路径的旧式简写；对应现代 offset 属性族。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  motion<const Value>(value: PropertyInput<'motion', T, Value>): this {
    return this.write('motion', value);
  }
  /**
   * 设置沿运动路径行进距离的旧属性；对应 offset-distance。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-distance
   */
  motionDistance<const Value>(value: PropertyInput<'motionDistance', T, Value>): this {
    return this.write('motionDistance', value);
  }
  /**
   * 设置运动路径的旧属性；对应 offset-path。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  motionPath<const Value>(value: PropertyInput<'motionPath', T, Value>): this {
    return this.write('motionPath', value);
  }
  /**
   * 设置运动路径旋转方式的旧属性；对应 offset-rotate。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-rotation
   */
  motionRotation<const Value>(value: PropertyInput<'motionRotation', T, Value>): this {
    return this.write('motionRotation', value);
  }
  /**
   * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  overlay<const Value>(value: PropertyInput<'overlay', T, Value>): this {
    return this.write('overlay', value);
  }
  /**
   * 设置 SVG 圆的半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  r<const Value>(value: PropertyInput<'r', T, Value>): this {
    return this.write('r', value);
  }
  /**
   * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  rx<const Value>(value: PropertyInput<'rx', T, Value>): this {
    return this.write('rx', value);
  }
  /**
   * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  ry<const Value>(value: PropertyInput<'ry', T, Value>): this {
    return this.write('ry', value);
  }
  /**
   * 设置语音呈现时文字、数字和标点的朗读方式；使用前核对语音媒体支持。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  speakAs<const Value>(value: PropertyInput<'speakAs', T, Value>): this {
    return this.write('speakAs', value);
  }
  /**
   * 设置描边颜色的扩展属性；常规 SVG 优先使用 stroke 并核对支持情况。
   *
   * CSS 规范初始值：transparent。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  strokeColor<const Value>(value: PropertyInput<'strokeColor', T, Value>): this {
    return this.write('strokeColor', value);
  }
  /**
   * 扩大命名动画时间线的可引用作用域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  timelineScope<const Value>(value: PropertyInput<'timelineScope', T, Value>): this {
    return this.write('timelineScope', value);
  }
  /**
   * 同时声明基于元素可见进度的时间线名称与轴。
   *
   * CSS 规范初始值：view-timeline-name: none；view-timeline-axis: block。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  viewTimeline<const Value>(value: PropertyInput<'viewTimeline', T, Value>): this {
    return this.write('viewTimeline', value);
  }
  /**
   * 设置可见进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：block。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  viewTimelineAxis<const Value>(value: PropertyInput<'viewTimelineAxis', T, Value>): this {
    return this.write('viewTimelineAxis', value);
  }
  /**
   * 设置可见进度时间线使用的滚动视口内缩范围。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  viewTimelineInset<const Value>(value: PropertyInput<'viewTimelineInset', T, Value>): this {
    return this.write('viewTimelineInset', value);
  }
  /**
   * 声明基于元素进入和离开滚动视口的时间线名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  viewTimelineName<const Value>(value: PropertyInput<'viewTimelineName', T, Value>): this {
    return this.write('viewTimelineName', value);
  }
  /**
   * 提前告知浏览器可能发生变化的属性，便于准备优化资源。
   *
   * 仅对即将发生的变化短期使用；长期或大量声明可能占用额外资源，并提前改变层叠上下文。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  willChange<const Value>(value: PropertyInput<'willChange', T, Value>): this {
    return this.write('willChange', value);
  }
  /**
   * 设置适用 SVG 元素的水平几何坐标。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  x<const Value>(value: PropertyInput<'x', T, Value>): this {
    return this.write('x', value);
  }
  /**
   * 设置适用 SVG 元素的垂直几何坐标。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  y<const Value>(value: PropertyInput<'y', T, Value>): this {
    return this.write('y', value);
  }
  /**
   * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  zoom<const Value>(value: PropertyInput<'zoom', T, Value>): this {
    return this.write('zoom', value);
  }
}
