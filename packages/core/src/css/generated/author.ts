// 由 scripts/css/generate.mjs 从固定 csstype@3.2.3 生成；请勿手改。
import type { PropertyValue } from '../types.ts';
import type { SystemKeywords } from './system.ts';
import { CssAuthor } from '../author.ts';
/** 不可变链式样式；每次调用返回新值，泛型 T 保留主题约束。 */
export class Css<T extends SystemKeywords = SystemKeywords> extends CssAuthor<T> {
  /**
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  alignContent(value: PropertyValue<'alignContent', T>): this {
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
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.display("flex").alignItems("center")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  alignItems(value: PropertyValue<'alignItems', T>): this {
    return this.write('alignItems', value);
  }
  /**
   * 选择行内或 SVG 文本参与对齐时使用的基线。
   *
   * CSS 规范初始值：`baseline`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  alignmentBaseline(value: PropertyValue<'alignmentBaseline', T>): this {
    return this.write('alignmentBaseline', value);
  }
  /**
   * 单独覆盖一个项目的交叉轴或块轴对齐方式。
   *
   * 适用场景：只改变某一个项目的交叉轴或块轴对齐，不改变同组其他项目。
   *
   * 常用值：`auto`、`stretch`、`baseline`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.alignSelf("center")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  alignSelf(value: PropertyValue<'alignSelf', T>): this {
    return this.write('alignSelf', value);
  }
  /**
   * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  alignTracks(value: PropertyValue<'alignTracks', T>): this {
    return this.write('alignTracks', value);
  }
  /**
   * 为元素声明锚点名称，供锚点定位的元素引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  anchorName(value: PropertyValue<'anchorName', T>): this {
    return this.write('anchorName', value);
  }
  /**
   * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  anchorScope(value: PropertyValue<'anchorScope', T>): this {
    return this.write('anchorScope', value);
  }
  /**
   * 设置定位元素相对于其定位参照的下侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  bottom(value: PropertyValue<'bottom', T>): this {
    return this.write('bottom', value);
  }
  /**
   * 要求元素避让指定侧的前置浮动元素。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  clear(value: PropertyValue<'clear', T>): this {
    return this.write('clear', value);
  }
  /**
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  columnCount(value: PropertyValue<'columnCount', T>): this {
    return this.write('columnCount', value);
  }
  /**
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：`balance`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  columnFill(value: PropertyValue<'columnFill', T>): this {
    return this.write('columnFill', value);
  }
  /**
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  columns(value: PropertyValue<'columns', T>): this {
    return this.write('columns', value);
  }
  /**
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  columnSpan(value: PropertyValue<'columnSpan', T>): this {
    return this.write('columnSpan', value);
  }
  /**
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  columnWidth(value: PropertyValue<'columnWidth', T>): this {
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
   * CSS 规范初始值：`inline`，不同于浏览器默认样式表。
   * @example
   * s.display("flex").alignItems("center").gap("0.5rem")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  display(value: PropertyValue<'display', T>): this {
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
   * @example
   * s.flex("1 1 0%")
   * @example
   * s.flex("none")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  flex(value: PropertyValue<'flex', T>): this {
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
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.flexBasis("16rem")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  flexBasis(value: PropertyValue<'flexBasis', T>): this {
    return this.write('flexBasis', value);
  }
  /**
   * 设置弹性容器的主轴方向及项目排列方向。
   *
   * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
   *
   * 常用值：`row`、`column`、`row-reverse`、`column-reverse`。
   *
   * CSS 规范初始值：`row`，不同于浏览器默认样式表。
   * @example
   * s.display("flex").flexDirection("column").gap("1rem")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
   */
  flexDirection(value: PropertyValue<'flexDirection', T>): this {
    return this.write('flexDirection', value);
  }
  /**
   * 同时设置弹性布局的主轴方向和换行方式。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  flexFlow(value: PropertyValue<'flexFlow', T>): this {
    return this.write('flexFlow', value);
  }
  /**
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * 数值是分配正剩余空间的相对权重，不是最终宽度百分比。只有容器存在剩余空间时才发挥作用。
   *
   * 适用场景：让主内容区填充工具栏或行布局的剩余空间。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @example
   * s.flexGrow(1)
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
   */
  flexGrow(value: PropertyValue<'flexGrow', T>): this {
    return this.write('flexGrow', value);
  }
  /**
   * 设置弹性项目空间不足时的收缩系数。
   *
   * 实际收缩还与 flex-basis 成比例；自动最小尺寸可能阻止项目继续缩小。
   *
   * 适用场景：控制空间不足时是否允许缩小；设置为 0 可避免图标或固定控件收缩。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @example
   * s.flexShrink(0)
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
   */
  flexShrink(value: PropertyValue<'flexShrink', T>): this {
    return this.write('flexShrink', value);
  }
  /**
   * 设置弹性项目是否换行，以及多行的排列方向。
   *
   * 适用场景：标签、按钮等项目不足一行时允许分行。
   *
   * 常用值：`nowrap`、`wrap`、`wrap-reverse`。
   *
   * CSS 规范初始值：`nowrap`，不同于浏览器默认样式表。
   * @example
   * s.display("flex").flexWrap("wrap").gap("0.5rem")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  flexWrap(value: PropertyValue<'flexWrap', T>): this {
    return this.write('flexWrap', value);
  }
  /**
   * 将元素浮动到指定侧，使相邻行内内容围绕它排列。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  float(value: PropertyValue<'float', T>): this {
    return this.write('float', value);
  }
  /**
   * 集中设置显式和隐式网格的轨道、区域及自动放置方式。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  grid(value: PropertyValue<'grid', T>): this {
    return this.write('grid', value);
  }
  /**
   * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  gridArea(value: PropertyValue<'gridArea', T>): this {
    return this.write('gridArea', value);
  }
  /**
   * 设置隐式生成的网格列尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  gridAutoColumns(value: PropertyValue<'gridAutoColumns', T>): this {
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
   * CSS 规范初始值：`row`，不同于浏览器默认样式表。
   * @example
   * s.display("grid").gridAutoFlow("row")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
   */
  gridAutoFlow(value: PropertyValue<'gridAutoFlow', T>): this {
    return this.write('gridAutoFlow', value);
  }
  /**
   * 设置隐式生成的网格行尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  gridAutoRows(value: PropertyValue<'gridAutoRows', T>): this {
    return this.write('gridAutoRows', value);
  }
  /**
   * 设置网格项目的列起点和列终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  gridColumn(value: PropertyValue<'gridColumn', T>): this {
    return this.write('gridColumn', value);
  }
  /**
   * 设置网格项目的列终止线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  gridColumnEnd(value: PropertyValue<'gridColumnEnd', T>): this {
    return this.write('gridColumnEnd', value);
  }
  /**
   * 设置网格项目的列起始线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  gridColumnStart(value: PropertyValue<'gridColumnStart', T>): this {
    return this.write('gridColumnStart', value);
  }
  /**
   * 设置网格项目的行起点和行终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  gridRow(value: PropertyValue<'gridRow', T>): this {
    return this.write('gridRow', value);
  }
  /**
   * 设置网格项目的行终止线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  gridRowEnd(value: PropertyValue<'gridRowEnd', T>): this {
    return this.write('gridRowEnd', value);
  }
  /**
   * 设置网格项目的行起始线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  gridRowStart(value: PropertyValue<'gridRowStart', T>): this {
    return this.write('gridRowStart', value);
  }
  /**
   * 集中设置显式网格的行、列和命名区域。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  gridTemplate(value: PropertyValue<'gridTemplate', T>): this {
    return this.write('gridTemplate', value);
  }
  /**
   * 用区域名称矩阵定义网格布局区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  gridTemplateAreas(value: PropertyValue<'gridTemplateAreas', T>): this {
    return this.write('gridTemplateAreas', value);
  }
  /**
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * 每个轨道值定义一列；fr 分配剩余空间。需要允许长内容所在列缩小时，可使用 minmax(0, 1fr)。
   *
   * 适用场景：响应式卡片、表单标签与输入框的列布局。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.gridTemplateColumns("repeat(3, minmax(0, 1fr))")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  gridTemplateColumns(value: PropertyValue<'gridTemplateColumns', T>): this {
    return this.write('gridTemplateColumns', value);
  }
  /**
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * 每个轨道值定义一行，未显式定义的行使用 grid-auto-rows。
   *
   * 适用场景：区分固定工具栏和可伸缩内容区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.gridTemplateRows("auto minmax(0, 1fr)")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  gridTemplateRows(value: PropertyValue<'gridTemplateRows', T>): this {
    return this.write('gridTemplateRows', value);
  }
  /**
   * 同时设置定位元素的上、右、下、左偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  inset(value: PropertyValue<'inset', T>): this {
    return this.write('inset', value);
  }
  /**
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  insetBlock(value: PropertyValue<'insetBlock', T>): this {
    return this.write('insetBlock', value);
  }
  /**
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  insetBlockEnd(value: PropertyValue<'insetBlockEnd', T>): this {
    return this.write('insetBlockEnd', value);
  }
  /**
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  insetBlockStart(value: PropertyValue<'insetBlockStart', T>): this {
    return this.write('insetBlockStart', value);
  }
  /**
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  insetInline(value: PropertyValue<'insetInline', T>): this {
    return this.write('insetInline', value);
  }
  /**
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  insetInlineEnd(value: PropertyValue<'insetInlineEnd', T>): this {
    return this.write('insetInlineEnd', value);
  }
  /**
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  insetInlineStart(value: PropertyValue<'insetInlineStart', T>): this {
    return this.write('insetInlineStart', value);
  }
  /**
   * 分配布局主轴或行内轴的剩余空间，控制内容整体对齐。
   *
   * Flex 中沿主轴分配空间，Grid 中沿行内轴对齐网格整体。没有剩余空间时，空间分配效果可能不明显。
   *
   * 常用值：`center`、`space-between`、`space-around`、`space-evenly`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.display("flex").justifyContent("space-between")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  justifyContent(value: PropertyValue<'justifyContent', T>): this {
    return this.write('justifyContent', value);
  }
  /**
   * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。
   *
   * CSS 规范初始值：`legacy`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  justifyItems(value: PropertyValue<'justifyItems', T>): this {
    return this.write('justifyItems', value);
  }
  /**
   * 单独设置项目在其布局区域内的行内轴对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  justifySelf(value: PropertyValue<'justifySelf', T>): this {
    return this.write('justifySelf', value);
  }
  /**
   * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  justifyTracks(value: PropertyValue<'justifyTracks', T>): this {
    return this.write('justifyTracks', value);
  }
  /**
   * 设置定位元素相对于其定位参照的左侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  left(value: PropertyValue<'left', T>): this {
    return this.write('left', value);
  }
  /**
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
   */
  order(value: PropertyValue<'order', T>): this {
    return this.write('order', value);
  }
  /**
   * 同时设置 align-content 与 justify-content。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  placeContent(value: PropertyValue<'placeContent', T>): this {
    return this.write('placeContent', value);
  }
  /**
   * 同时设置 align-items 与 justify-items。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  placeItems(value: PropertyValue<'placeItems', T>): this {
    return this.write('placeItems', value);
  }
  /**
   * 同时设置 align-self 与 justify-self。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  placeSelf(value: PropertyValue<'placeSelf', T>): this {
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
   * CSS 规范初始值：`static`，不同于浏览器默认样式表。
   * @example
   * s.position("sticky").top("0px")
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  position(value: PropertyValue<'position', T>): this {
    return this.write('position', value);
  }
  /**
   * 选择绝对定位元素使用的默认锚点。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  positionAnchor(value: PropertyValue<'positionAnchor', T>): this {
    return this.write('positionAnchor', value);
  }
  /**
   * 选择相对于锚点的定位区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  positionArea(value: PropertyValue<'positionArea', T>): this {
    return this.write('positionArea', value);
  }
  /**
   * 同时设置锚点定位的候选回退方式及尝试顺序。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  positionTry(value: PropertyValue<'positionTry', T>): this {
    return this.write('positionTry', value);
  }
  /**
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  positionTryFallbacks(value: PropertyValue<'positionTryFallbacks', T>): this {
    return this.write('positionTryFallbacks', value);
  }
  /**
   * 设置锚点定位候选方案的尝试顺序。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  positionTryOrder(value: PropertyValue<'positionTryOrder', T>): this {
    return this.write('positionTryOrder', value);
  }
  /**
   * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。
   *
   * CSS 规范初始值：`anchors-visible`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  positionVisibility(value: PropertyValue<'positionVisibility', T>): this {
    return this.write('positionVisibility', value);
  }
  /**
   * 设置定位元素相对于其定位参照的右侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  right(value: PropertyValue<'right', T>): this {
    return this.write('right', value);
  }
  /**
   * 设置定位元素相对于其定位参照的上侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  top(value: PropertyValue<'top', T>): this {
    return this.write('top', value);
  }
  /**
   * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。
   *
   * CSS 规范初始值：`baseline`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  verticalAlign(value: PropertyValue<'verticalAlign', T>): this {
    return this.write('verticalAlign', value);
  }
  /**
   * 设置元素在所属层叠上下文中的层叠级别。
   *
   * 数值只在所属层叠上下文内比较；更大的数值不保证盖过其他层叠上下文。Flex/Grid 项目也可以使用 z-index。
   *
   * 适用场景：控制同一层叠上下文中的浮层顺序，排查遮挡时先确认祖先层叠上下文。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.position("relative").zIndex(1)
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
   */
  zIndex(value: PropertyValue<'zIndex', T>): this {
    return this.write('zIndex', value);
  }
  /**
   * 设置盒子的首选宽高比，参与自动尺寸计算。
   *
   * 通常需要至少一个轴为自动尺寸才参与尺寸计算；两个轴都被明确尺寸约束时，不会强行保持比例。
   *
   * 适用场景：图片占位、视频和卡片封面区域。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.aspectRatio("16 / 9").width("100%")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
   */
  aspectRatio(value: PropertyValue<'aspectRatio', T>): this {
    return this.write('aspectRatio', value);
  }
  /**
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * 水平书写时通常对应 height，竖直书写时通常对应 width。
   *
   * 适用场景：使用逻辑轴表达内容块尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.blockSize("10rem")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  blockSize(value: PropertyValue<'blockSize', T>): this {
    return this.write('blockSize', value);
  }
  /**
   * 决定 width、height 等尺寸是否包含内边距和边框。
   *
   * 适用场景：确定组件声明宽高时是否把 padding 和 border 算在尺寸内。
   *
   * 常用值：`content-box`、`border-box`。
   *
   * CSS 规范初始值：`content-box`，不同于浏览器默认样式表。
   * @example
   * s.boxSizing("border-box").width("20rem").padding("1rem")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
   */
  boxSizing(value: PropertyValue<'boxSizing', T>): this {
    return this.write('boxSizing', value);
  }
  /**
   * 设置元素的物理高度，盒子范围受 box-sizing 影响。
   *
   * 百分比高度能否解析取决于包含块的尺寸确定方式；设置 100% 不自动等于视口高度。
   *
   * 适用场景：控制物理高度；滚动面板通常结合 max-height 和 overflow。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.maxHeight("20rem").overflowY("auto")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  height(value: PropertyValue<'height', T>): this {
    return this.write('height', value);
  }
  /**
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * 水平书写时通常对应 width，竖直书写时通常对应 height。实际尺寸还受 min-inline-size/max-inline-size 和 box-sizing 约束。
   *
   * 适用场景：希望布局尺寸跟随书写模式变化的组件。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.inlineSize("20rem")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  inlineSize(value: PropertyValue<'inlineSize', T>): this {
    return this.write('inlineSize', value);
  }
  /**
   * 限制元素逻辑块轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  maxBlockSize(value: PropertyValue<'maxBlockSize', T>): this {
    return this.write('maxBlockSize', value);
  }
  /**
   * 限制元素的最大物理高度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  maxHeight(value: PropertyValue<'maxHeight', T>): this {
    return this.write('maxHeight', value);
  }
  /**
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  maxInlineSize(value: PropertyValue<'maxInlineSize', T>): this {
    return this.write('maxInlineSize', value);
  }
  /**
   * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  maxLines(value: PropertyValue<'maxLines', T>): this {
    return this.write('maxLines', value);
  }
  /**
   * 限制元素的最大物理宽度。
   *
   * 限制最终宽度，不会单独要求元素达到该宽度。最小尺寸约束可能优先于较小的最大尺寸。
   *
   * 适用场景：限制正文行长、弹窗宽度或响应式内容区。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.width("100%").maxWidth("48rem")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  maxWidth(value: PropertyValue<'maxWidth', T>): this {
    return this.write('maxWidth', value);
  }
  /**
   * 设置元素逻辑块轴的最小尺寸。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  minBlockSize(value: PropertyValue<'minBlockSize', T>): this {
    return this.write('minBlockSize', value);
  }
  /**
   * 设置元素的最小物理高度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  minHeight(value: PropertyValue<'minHeight', T>): this {
    return this.write('minHeight', value);
  }
  /**
   * 设置元素逻辑行内轴的最小尺寸。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  minInlineSize(value: PropertyValue<'minInlineSize', T>): this {
    return this.write('minInlineSize', value);
  }
  /**
   * 设置元素的最小物理宽度。
   *
   * Flex/Grid 项目的 auto 最小尺寸可能由内容决定。需要允许其收缩时，可以按布局目的设置 min-width:0。
   *
   * 适用场景：给控件设置最小可用宽度，或用 0 允许 Flex/Grid 子项突破自动内容最小宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.minWidth("0px")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  minWidth(value: PropertyValue<'minWidth', T>): this {
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
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.width("20rem")
   * @example
   * s.width("clamp(12rem, 50vw, 40rem)")
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  width(value: PropertyValue<'width', T>): this {
    return this.write('width', value);
  }
  /**
   * 设置布局中相邻列之间的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  columnGap(value: PropertyValue<'columnGap', T>): this {
    return this.write('columnGap', value);
  }
  /**
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。
   *
   * 两个值依次为 row-gap 和 column-gap；在 Flex 中对应项目还是行间距取决于 flex-direction。它不增加容器外缘的间距。
   *
   * 适用场景：给 Flex/Grid 项目设置统一间隔，避免逐个项目添加 margin。
   * @example
   * s.gap("8px 16px")
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
   */
  gap(value: PropertyValue<'gap', T>): this {
    return this.write('gap', value);
  }
  /**
   * 设置盒子四周的外边距，可使用负值或自动外边距。
   *
   * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。块布局中的垂直外边距可能折叠。
   *
   * 适用场景：控制盒子外侧与相邻内容的距离；布局项统一间隔可考虑容器 gap。
   * @example
   * s.margin("8px 16px")
   * @example
   * s.margin("0 auto")
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
   */
  margin(value: PropertyValue<'margin', T>): this {
    return this.write('margin', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的外边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  marginBlock(value: PropertyValue<'marginBlock', T>): this {
    return this.write('marginBlock', value);
  }
  /**
   * 设置逻辑块轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  marginBlockEnd(value: PropertyValue<'marginBlockEnd', T>): this {
    return this.write('marginBlockEnd', value);
  }
  /**
   * 设置逻辑块轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  marginBlockStart(value: PropertyValue<'marginBlockStart', T>): this {
    return this.write('marginBlockStart', value);
  }
  /**
   * 设置下外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  marginBottom(value: PropertyValue<'marginBottom', T>): this {
    return this.write('marginBottom', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的外边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  marginInline(value: PropertyValue<'marginInline', T>): this {
    return this.write('marginInline', value);
  }
  /**
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  marginInlineEnd(value: PropertyValue<'marginInlineEnd', T>): this {
    return this.write('marginInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  marginInlineStart(value: PropertyValue<'marginInlineStart', T>): this {
    return this.write('marginInlineStart', value);
  }
  /**
   * 设置左外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  marginLeft(value: PropertyValue<'marginLeft', T>): this {
    return this.write('marginLeft', value);
  }
  /**
   * 设置右外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  marginRight(value: PropertyValue<'marginRight', T>): this {
    return this.write('marginRight', value);
  }
  /**
   * 设置上外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  marginTop(value: PropertyValue<'marginTop', T>): this {
    return this.write('marginTop', value);
  }
  /**
   * 控制容器边缘处子元素外边距的裁减。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  marginTrim(value: PropertyValue<'marginTrim', T>): this {
    return this.write('marginTrim', value);
  }
  /**
   * 设置内容与边框之间的四边内边距，不接受负值。
   *
   * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。不能使用负值或 auto。
   *
   * 适用场景：控制文字或子元素与组件边框之间的留白。
   * @example
   * s.padding("0.5rem 1rem")
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
   */
  padding(value: PropertyValue<'padding', T>): this {
    return this.write('padding', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的内边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  paddingBlock(value: PropertyValue<'paddingBlock', T>): this {
    return this.write('paddingBlock', value);
  }
  /**
   * 设置逻辑块轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  paddingBlockEnd(value: PropertyValue<'paddingBlockEnd', T>): this {
    return this.write('paddingBlockEnd', value);
  }
  /**
   * 设置逻辑块轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  paddingBlockStart(value: PropertyValue<'paddingBlockStart', T>): this {
    return this.write('paddingBlockStart', value);
  }
  /**
   * 设置下内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  paddingBottom(value: PropertyValue<'paddingBottom', T>): this {
    return this.write('paddingBottom', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的内边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  paddingInline(value: PropertyValue<'paddingInline', T>): this {
    return this.write('paddingInline', value);
  }
  /**
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  paddingInlineEnd(value: PropertyValue<'paddingInlineEnd', T>): this {
    return this.write('paddingInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  paddingInlineStart(value: PropertyValue<'paddingInlineStart', T>): this {
    return this.write('paddingInlineStart', value);
  }
  /**
   * 设置左内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  paddingLeft(value: PropertyValue<'paddingLeft', T>): this {
    return this.write('paddingLeft', value);
  }
  /**
   * 设置右内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  paddingRight(value: PropertyValue<'paddingRight', T>): this {
    return this.write('paddingRight', value);
  }
  /**
   * 设置上内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  paddingTop(value: PropertyValue<'paddingTop', T>): this {
    return this.write('paddingTop', value);
  }
  /**
   * 设置布局中相邻行之间的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  rowGap(value: PropertyValue<'rowGap', T>): this {
    return this.write('rowGap', value);
  }
  /**
   * 设置文本基本方向，参与双向文本及部分布局计算。
   *
   * CSS 规范初始值：`ltr`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  direction(value: PropertyValue<'direction', T>): this {
    return this.write('direction', value);
  }
  /**
   * 集中设置字体样式、粗细、大小、行高和字体族等信息。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  font(value: PropertyValue<'font', T>): this {
    return this.write('font', value);
  }
  /**
   * 设置按优先级排列的字体族及通用字体回退。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  fontFamily(value: PropertyValue<'fontFamily', T>): this {
    return this.write('fontFamily', value);
  }
  /**
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  fontFeatureSettings(value: PropertyValue<'fontFeatureSettings', T>): this {
    return this.write('fontFeatureSettings', value);
  }
  /**
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  fontKerning(value: PropertyValue<'fontKerning', T>): this {
    return this.write('fontKerning', value);
  }
  /**
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  fontLanguageOverride(value: PropertyValue<'fontLanguageOverride', T>): this {
    return this.write('fontLanguageOverride', value);
  }
  /**
   * 控制支持光学尺寸轴的字体是否按字号优化字形。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  fontOpticalSizing(value: PropertyValue<'fontOpticalSizing', T>): this {
    return this.write('fontOpticalSizing', value);
  }
  /**
   * 选择或覆盖彩色字体使用的调色板。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  fontPalette(value: PropertyValue<'fontPalette', T>): this {
    return this.write('fontPalette', value);
  }
  /**
   * 设置字体大小，也影响 em 等相对单位的计算。
   *
   * 改变字形大小，并影响 em 等相对长度；行盒高度还由 line-height 决定。
   *
   * 适用场景：建立文字层级，根字号相对尺寸可用 rem 表达。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @example
   * s.fontSize("1rem").lineHeight(1.5)
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  fontSize(value: PropertyValue<'fontSize', T>): this {
    return this.write('fontSize', value);
  }
  /**
   * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  fontSizeAdjust(value: PropertyValue<'fontSizeAdjust', T>): this {
    return this.write('fontSizeAdjust', value);
  }
  /**
   * 控制字体平滑的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  fontSmooth(value: PropertyValue<'fontSmooth', T>): this {
    return this.write('fontSmooth', value);
  }
  /**
   * 选择正常、斜体或倾斜字体样式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  fontStyle(value: PropertyValue<'fontStyle', T>): this {
    return this.write('fontStyle', value);
  }
  /**
   * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。
   *
   * CSS 规范初始值：`weight style small-caps position `，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  fontSynthesis(value: PropertyValue<'fontSynthesis', T>): this {
    return this.write('fontSynthesis', value);
  }
  /**
   * 控制浏览器是否可以合成上标和下标字形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  fontSynthesisPosition(value: PropertyValue<'fontSynthesisPosition', T>): this {
    return this.write('fontSynthesisPosition', value);
  }
  /**
   * 控制浏览器是否可以合成小型大写字形。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  fontSynthesisSmallCaps(value: PropertyValue<'fontSynthesisSmallCaps', T>): this {
    return this.write('fontSynthesisSmallCaps', value);
  }
  /**
   * 控制浏览器是否可以合成倾斜字体。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  fontSynthesisStyle(value: PropertyValue<'fontSynthesisStyle', T>): this {
    return this.write('fontSynthesisStyle', value);
  }
  /**
   * 控制浏览器是否可以合成加粗字体。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  fontSynthesisWeight(value: PropertyValue<'fontSynthesisWeight', T>): this {
    return this.write('fontSynthesisWeight', value);
  }
  /**
   * 集中设置字体的连字、大小写、数字及其他变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  fontVariant(value: PropertyValue<'fontVariant', T>): this {
    return this.write('fontVariant', value);
  }
  /**
   * 选择字体提供的替代字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  fontVariantAlternates(value: PropertyValue<'fontVariantAlternates', T>): this {
    return this.write('fontVariantAlternates', value);
  }
  /**
   * 设置小型大写等大小写字形变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  fontVariantCaps(value: PropertyValue<'fontVariantCaps', T>): this {
    return this.write('fontVariantCaps', value);
  }
  /**
   * 设置东亚文字字形及宽度变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  fontVariantEastAsian(value: PropertyValue<'fontVariantEastAsian', T>): this {
    return this.write('fontVariantEastAsian', value);
  }
  /**
   * 设置字符优先采用文本字形还是 emoji 字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  fontVariantEmoji(value: PropertyValue<'fontVariantEmoji', T>): this {
    return this.write('fontVariantEmoji', value);
  }
  /**
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  fontVariantLigatures(value: PropertyValue<'fontVariantLigatures', T>): this {
    return this.write('fontVariantLigatures', value);
  }
  /**
   * 设置数字的等宽、比例、分数及其他排版变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  fontVariantNumeric(value: PropertyValue<'fontVariantNumeric', T>): this {
    return this.write('fontVariantNumeric', value);
  }
  /**
   * 选择字体提供的上标或下标字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  fontVariantPosition(value: PropertyValue<'fontVariantPosition', T>): this {
    return this.write('fontVariantPosition', value);
  }
  /**
   * 直接设置可变字体各个轴的数值。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  fontVariationSettings(value: PropertyValue<'fontVariationSettings', T>): this {
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
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.fontWeight(600)
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
   */
  fontWeight(value: PropertyValue<'fontWeight', T>): this {
    return this.write('fontWeight', value);
  }
  /**
   * 选择字体的宽窄字面，不是通过变换拉伸元素。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  fontWidth(value: PropertyValue<'fontWidth', T>): this {
    return this.write('fontWidth', value);
  }
  /**
   * 控制标点是否可以悬挂在行盒边缘之外。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  hangingPunctuation(value: PropertyValue<'hangingPunctuation', T>): this {
    return this.write('hangingPunctuation', value);
  }
  /**
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  hyphens(value: PropertyValue<'hyphens', T>): this {
    return this.write('hyphens', value);
  }
  /**
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  initialLetter(value: PropertyValue<'initialLetter', T>): this {
    return this.write('initialLetter', value);
  }
  /**
   * 设置首字下沉时字形与正文使用的对齐基线。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  initialLetterAlign(value: PropertyValue<'initialLetterAlign', T>): this {
    return this.write('initialLetterAlign', value);
  }
  /**
   * 设置字符之间额外增加或减少的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  letterSpacing(value: PropertyValue<'letterSpacing', T>): this {
    return this.write('letterSpacing', value);
  }
  /**
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  lineBreak(value: PropertyValue<'lineBreak', T>): this {
    return this.write('lineBreak', value);
  }
  /**
   * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  lineClamp(value: PropertyValue<'lineClamp', T>): this {
    return this.write('lineClamp', value);
  }
  /**
   * 设置行盒高度；无单位数值按元素自身字号计算。
   *
   * 无单位数字作为倍数继承；长度值按长度继承。单独设置行高不会自动实现多行文本垂直居中。
   *
   * 适用场景：控制正文行间节奏；可继承的字号倍数通常比固定长度更适合嵌套文字。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.lineHeight(1.5)
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
   */
  lineHeight(value: PropertyValue<'lineHeight', T>): this {
    return this.write('lineHeight', value);
  }
  /**
   * 设置行盒高度向上取整使用的步长。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  lineHeightStep(value: PropertyValue<'lineHeightStep', T>): this {
    return this.write('lineHeightStep', value);
  }
  /**
   * 设置生成引号所用的开闭字符对。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  quotes(value: PropertyValue<'quotes', T>): this {
    return this.write('quotes', value);
  }
  /**
   * 设置注音文字与基底文字之间剩余空间的分配方式。
   *
   * CSS 规范初始值：`space-around`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  rubyAlign(value: PropertyValue<'rubyAlign', T>): this {
    return this.write('rubyAlign', value);
  }
  /**
   * 设置相邻注音容器的合并方式；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`separate`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  rubyMerge(value: PropertyValue<'rubyMerge', T>): this {
    return this.write('rubyMerge', value);
  }
  /**
   * 控制注音文字是否可以悬伸到相邻文本上方。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  rubyOverhang(value: PropertyValue<'rubyOverhang', T>): this {
    return this.write('rubyOverhang', value);
  }
  /**
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：`alternate`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  rubyPosition(value: PropertyValue<'rubyPosition', T>): this {
    return this.write('rubyPosition', value);
  }
  /**
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：`8`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  tabSize(value: PropertyValue<'tabSize', T>): this {
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
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @example
   * s.textAlign("start")
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  textAlign(value: PropertyValue<'textAlign', T>): this {
    return this.write('textAlign', value);
  }
  /**
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  textAlignLast(value: PropertyValue<'textAlignLast', T>): this {
    return this.write('textAlignLast', value);
  }
  /**
   * 设置 SVG 文本片段相对于定位点的锚定方式。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  textAnchor(value: PropertyValue<'textAnchor', T>): this {
    return this.write('textAnchor', value);
  }
  /**
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  textAutospace(value: PropertyValue<'textAutospace', T>): this {
    return this.write('textAutospace', value);
  }
  /**
   * 同时设置文本盒边缘参照及首尾空白裁减。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  textBox(value: PropertyValue<'textBox', T>): this {
    return this.write('textBox', value);
  }
  /**
   * 选择文本盒裁减或对齐使用的字体边缘度量。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  textBoxEdge(value: PropertyValue<'textBoxEdge', T>): this {
    return this.write('textBoxEdge', value);
  }
  /**
   * 裁减文本块开头或结尾的额外行高空白。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  textBoxTrim(value: PropertyValue<'textBoxTrim', T>): this {
    return this.write('textBoxTrim', value);
  }
  /**
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  textCombineUpright(value: PropertyValue<'textCombineUpright', T>): this {
    return this.write('textCombineUpright', value);
  }
  /**
   * 集中设置文本装饰线的位置、线型、颜色及粗细。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  textDecoration(value: PropertyValue<'textDecoration', T>): this {
    return this.write('textDecoration', value);
  }
  /**
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  textDecorationColor(value: PropertyValue<'textDecorationColor', T>): this {
    return this.write('textDecorationColor', value);
  }
  /**
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  textDecorationLine(value: PropertyValue<'textDecorationLine', T>): this {
    return this.write('textDecorationLine', value);
  }
  /**
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：`objects`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  textDecorationSkip(value: PropertyValue<'textDecorationSkip', T>): this {
    return this.write('textDecorationSkip', value);
  }
  /**
   * 设置装饰线是否避让字形的笔画。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  textDecorationSkipInk(value: PropertyValue<'textDecorationSkipInk', T>): this {
    return this.write('textDecorationSkipInk', value);
  }
  /**
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：`solid`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  textDecorationStyle(value: PropertyValue<'textDecorationStyle', T>): this {
    return this.write('textDecorationStyle', value);
  }
  /**
   * 设置文本装饰线粗细。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  textDecorationThickness(value: PropertyValue<'textDecorationThickness', T>): this {
    return this.write('textDecorationThickness', value);
  }
  /**
   * 同时设置文字着重号的样式和颜色。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  textEmphasis(value: PropertyValue<'textEmphasis', T>): this {
    return this.write('textEmphasis', value);
  }
  /**
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  textEmphasisColor(value: PropertyValue<'textEmphasisColor', T>): this {
    return this.write('textEmphasisColor', value);
  }
  /**
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  textEmphasisPosition(value: PropertyValue<'textEmphasisPosition', T>): this {
    return this.write('textEmphasisPosition', value);
  }
  /**
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  textEmphasisStyle(value: PropertyValue<'textEmphasisStyle', T>): this {
    return this.write('textEmphasisStyle', value);
  }
  /**
   * 设置文本行的缩进距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  textIndent(value: PropertyValue<'textIndent', T>): this {
    return this.write('textIndent', value);
  }
  /**
   * 设置两端对齐时增加间距的算法。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  textJustify(value: PropertyValue<'textJustify', T>): this {
    return this.write('textJustify', value);
  }
  /**
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：`mixed`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  textOrientation(value: PropertyValue<'textOrientation', T>): this {
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
   * CSS 规范初始值：`clip`，不同于浏览器默认样式表。
   * @example
   * s.maxWidth("12rem").whiteSpace("nowrap").overflow("hidden").textOverflow("ellipsis")
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
   */
  textOverflow(value: PropertyValue<'textOverflow', T>): this {
    return this.write('textOverflow', value);
  }
  /**
   * 向渲染器提供文本速度、可读性或几何精度的偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  textRendering(value: PropertyValue<'textRendering', T>): this {
    return this.write('textRendering', value);
  }
  /**
   * 设置文字及其装饰的阴影，可叠加多层。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  textShadow(value: PropertyValue<'textShadow', T>): this {
    return this.write('textShadow', value);
  }
  /**
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  textSizeAdjust(value: PropertyValue<'textSizeAdjust', T>): this {
    return this.write('textSizeAdjust', value);
  }
  /**
   * 设置东亚文字标点等字符周围空白的裁减。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  textSpacingTrim(value: PropertyValue<'textSpacingTrim', T>): this {
    return this.write('textSpacingTrim', value);
  }
  /**
   * 设置文字显示时的大小写、全角或其他字形转换。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  textTransform(value: PropertyValue<'textTransform', T>): this {
    return this.write('textTransform', value);
  }
  /**
   * 设置下划线相对于默认位置的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  textUnderlineOffset(value: PropertyValue<'textUnderlineOffset', T>): this {
    return this.write('textUnderlineOffset', value);
  }
  /**
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  textUnderlinePosition(value: PropertyValue<'textUnderlinePosition', T>): this {
    return this.write('textUnderlinePosition', value);
  }
  /**
   * 同时设置文本是否换行及换行策略。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  textWrap(value: PropertyValue<'textWrap', T>): this {
    return this.write('textWrap', value);
  }
  /**
   * 设置文本是否允许软换行。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  textWrapMode(value: PropertyValue<'textWrapMode', T>): this {
    return this.write('textWrapMode', value);
  }
  /**
   * 设置文本换行的排版策略，例如平衡各行长度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  textWrapStyle(value: PropertyValue<'textWrapStyle', T>): this {
    return this.write('textWrapStyle', value);
  }
  /**
   * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  unicodeBidi(value: PropertyValue<'unicodeBidi', T>): this {
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
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.whiteSpace("pre-wrap")
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  whiteSpace(value: PropertyValue<'whiteSpace', T>): this {
    return this.write('whiteSpace', value);
  }
  /**
   * 设置空格、制表符和换行符如何折叠或保留。
   *
   * CSS 规范初始值：`collapse`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  whiteSpaceCollapse(value: PropertyValue<'whiteSpaceCollapse', T>): this {
    return this.write('whiteSpaceCollapse', value);
  }
  /**
   * 设置单词内部或文字之间的断行规则。
   *
   * 按字符和语言控制断行。仅需避免超长单词溢出时，通常先考虑 overflow-wrap。
   *
   * 常用值：`normal`、`break-all`、`keep-all`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.wordBreak("normal")
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  wordBreak(value: PropertyValue<'wordBreak', T>): this {
    return this.write('wordBreak', value);
  }
  /**
   * 设置单词或词间分隔符的额外间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  wordSpacing(value: PropertyValue<'wordSpacing', T>): this {
    return this.write('wordSpacing', value);
  }
  /**
   * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  wordWrap(value: PropertyValue<'wordWrap', T>): this {
    return this.write('wordWrap', value);
  }
  /**
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：`horizontal-tb`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  writingMode(value: PropertyValue<'writingMode', T>): this {
    return this.write('writingMode', value);
  }
  /**
   * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  accentColor(value: PropertyValue<'accentColor', T>): this {
    return this.write('accentColor', value);
  }
  /**
   * 集中设置背景颜色、图像、位置、尺寸、重复及绘制区域。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  background(value: PropertyValue<'background', T>): this {
    return this.write('background', value);
  }
  /**
   * 设置背景图像相对于视口、元素或局部滚动内容的固定方式。
   *
   * CSS 规范初始值：`scroll`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  backgroundAttachment(value: PropertyValue<'backgroundAttachment', T>): this {
    return this.write('backgroundAttachment', value);
  }
  /**
   * 设置背景图层彼此之间以及与背景色之间的混合模式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  backgroundBlendMode(value: PropertyValue<'backgroundBlendMode', T>): this {
    return this.write('backgroundBlendMode', value);
  }
  /**
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  backgroundClip(value: PropertyValue<'backgroundClip', T>): this {
    return this.write('backgroundClip', value);
  }
  /**
   * 设置元素背景颜色，位于背景图像下方。
   *
   * CSS 规范初始值：`transparent`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  backgroundColor(value: PropertyValue<'backgroundColor', T>): this {
    return this.write('backgroundColor', value);
  }
  /**
   * 设置一个或多个背景图像或渐变图层。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  backgroundImage(value: PropertyValue<'backgroundImage', T>): this {
    return this.write('backgroundImage', value);
  }
  /**
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  backgroundOrigin(value: PropertyValue<'backgroundOrigin', T>): this {
    return this.write('backgroundOrigin', value);
  }
  /**
   * 设置背景图像在定位区域内的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  backgroundPosition(value: PropertyValue<'backgroundPosition', T>): this {
    return this.write('backgroundPosition', value);
  }
  /**
   * 设置背景图像的水平位置。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  backgroundPositionX(value: PropertyValue<'backgroundPositionX', T>): this {
    return this.write('backgroundPositionX', value);
  }
  /**
   * 设置背景图像的垂直位置。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  backgroundPositionY(value: PropertyValue<'backgroundPositionY', T>): this {
    return this.write('backgroundPositionY', value);
  }
  /**
   * 设置背景图像在水平和垂直方向上的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  backgroundRepeat(value: PropertyValue<'backgroundRepeat', T>): this {
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
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @example
   * s.backgroundSize("cover").backgroundPosition("center")
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
   */
  backgroundSize(value: PropertyValue<'backgroundSize', T>): this {
    return this.write('backgroundSize', value);
  }
  /**
   * 设置可编辑内容中的文本插入光标颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  caretColor(value: PropertyValue<'caretColor', T>): this {
    return this.write('caretColor', value);
  }
  /**
   * 设置文字前景色，同时作为 currentColor 的来源。
   *
   * 改变文字和 currentColor 的来源，不会自动改变背景。颜色函数方法返回完整 color 声明。
   *
   * CSS 规范初始值：`canvastext`，不同于浏览器默认样式表。
   * @example
   * s.color("rgb(255 0 0 / 0.5)")
   * @example
   * s.color("oklch(0.7 0.15 250)")
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
   */
  color(value: PropertyValue<'color', T>): this {
    return this.write('color', value);
  }
  /**
   * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  colorAdjust(value: PropertyValue<'colorAdjust', T>): this {
    return this.write('colorAdjust', value);
  }
  /**
   * 设置 SVG 图形颜色插值所用的色彩空间。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  colorInterpolation(value: PropertyValue<'colorInterpolation', T>): this {
    return this.write('colorInterpolation', value);
  }
  /**
   * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。
   *
   * CSS 规范初始值：`linearRGB`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  colorInterpolationFilters(value: PropertyValue<'colorInterpolationFilters', T>): this {
    return this.write('colorInterpolationFilters', value);
  }
  /**
   * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  colorRendering(value: PropertyValue<'colorRendering', T>): this {
    return this.write('colorRendering', value);
  }
  /**
   * 声明元素支持的配色方案，影响原生控件、滚动条等浏览器绘制内容。
   *
   * 声明支持的方案不等于为应用生成主题颜色；文字、背景和业务 token 仍需自行定义。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  colorScheme(value: PropertyValue<'colorScheme', T>): this {
    return this.write('colorScheme', value);
  }
  /**
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  printColorAdjust(value: PropertyValue<'printColorAdjust', T>): this {
    return this.write('printColorAdjust', value);
  }
  /**
   * 同时设置四边边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  border(value: PropertyValue<'border', T>): this {
    return this.write('border', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的边框。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  borderBlock(value: PropertyValue<'borderBlock', T>): this {
    return this.write('borderBlock', value);
  }
  /**
   * 设置逻辑块轴两侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  borderBlockColor(value: PropertyValue<'borderBlockColor', T>): this {
    return this.write('borderBlockColor', value);
  }
  /**
   * 设置逻辑块轴结束侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  borderBlockEnd(value: PropertyValue<'borderBlockEnd', T>): this {
    return this.write('borderBlockEnd', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  borderBlockEndColor(value: PropertyValue<'borderBlockEndColor', T>): this {
    return this.write('borderBlockEndColor', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  borderBlockEndStyle(value: PropertyValue<'borderBlockEndStyle', T>): this {
    return this.write('borderBlockEndStyle', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  borderBlockEndWidth(value: PropertyValue<'borderBlockEndWidth', T>): this {
    return this.write('borderBlockEndWidth', value);
  }
  /**
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  borderBlockStart(value: PropertyValue<'borderBlockStart', T>): this {
    return this.write('borderBlockStart', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  borderBlockStartColor(value: PropertyValue<'borderBlockStartColor', T>): this {
    return this.write('borderBlockStartColor', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  borderBlockStartStyle(value: PropertyValue<'borderBlockStartStyle', T>): this {
    return this.write('borderBlockStartStyle', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  borderBlockStartWidth(value: PropertyValue<'borderBlockStartWidth', T>): this {
    return this.write('borderBlockStartWidth', value);
  }
  /**
   * 设置逻辑块轴两侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  borderBlockStyle(value: PropertyValue<'borderBlockStyle', T>): this {
    return this.write('borderBlockStyle', value);
  }
  /**
   * 设置逻辑块轴两侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  borderBlockWidth(value: PropertyValue<'borderBlockWidth', T>): this {
    return this.write('borderBlockWidth', value);
  }
  /**
   * 设置下边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  borderBottom(value: PropertyValue<'borderBottom', T>): this {
    return this.write('borderBottom', value);
  }
  /**
   * 设置下边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  borderBottomColor(value: PropertyValue<'borderBottomColor', T>): this {
    return this.write('borderBottomColor', value);
  }
  /**
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  borderBottomLeftRadius(value: PropertyValue<'borderBottomLeftRadius', T>): this {
    return this.write('borderBottomLeftRadius', value);
  }
  /**
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  borderBottomRightRadius(value: PropertyValue<'borderBottomRightRadius', T>): this {
    return this.write('borderBottomRightRadius', value);
  }
  /**
   * 设置下边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  borderBottomStyle(value: PropertyValue<'borderBottomStyle', T>): this {
    return this.write('borderBottomStyle', value);
  }
  /**
   * 设置下边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  borderBottomWidth(value: PropertyValue<'borderBottomWidth', T>): this {
    return this.write('borderBottomWidth', value);
  }
  /**
   * 设置表格相邻单元格边框合并还是分离。
   *
   * CSS 规范初始值：`separate`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  borderCollapse(value: PropertyValue<'borderCollapse', T>): this {
    return this.write('borderCollapse', value);
  }
  /**
   * 设置四边边框颜色，支持按上、右、下、左顺序简写。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  borderColor(value: PropertyValue<'borderColor', T>): this {
    return this.write('borderColor', value);
  }
  /**
   * 设置逻辑块轴结束侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  borderEndEndRadius(value: PropertyValue<'borderEndEndRadius', T>): this {
    return this.write('borderEndEndRadius', value);
  }
  /**
   * 设置逻辑块轴结束侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  borderEndStartRadius(value: PropertyValue<'borderEndStartRadius', T>): this {
    return this.write('borderEndStartRadius', value);
  }
  /**
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  borderImage(value: PropertyValue<'borderImage', T>): this {
    return this.write('borderImage', value);
  }
  /**
   * 设置边框图像超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  borderImageOutset(value: PropertyValue<'borderImageOutset', T>): this {
    return this.write('borderImageOutset', value);
  }
  /**
   * 设置边框图像切片沿边框的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  borderImageRepeat(value: PropertyValue<'borderImageRepeat', T>): this {
    return this.write('borderImageRepeat', value);
  }
  /**
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：`100%`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  borderImageSlice(value: PropertyValue<'borderImageSlice', T>): this {
    return this.write('borderImageSlice', value);
  }
  /**
   * 指定边框使用的图像或渐变。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  borderImageSource(value: PropertyValue<'borderImageSource', T>): this {
    return this.write('borderImageSource', value);
  }
  /**
   * 设置边框图像各边的绘制宽度。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  borderImageWidth(value: PropertyValue<'borderImageWidth', T>): this {
    return this.write('borderImageWidth', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的边框。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  borderInline(value: PropertyValue<'borderInline', T>): this {
    return this.write('borderInline', value);
  }
  /**
   * 设置逻辑行内轴两侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  borderInlineColor(value: PropertyValue<'borderInlineColor', T>): this {
    return this.write('borderInlineColor', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  borderInlineEnd(value: PropertyValue<'borderInlineEnd', T>): this {
    return this.write('borderInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  borderInlineEndColor(value: PropertyValue<'borderInlineEndColor', T>): this {
    return this.write('borderInlineEndColor', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  borderInlineEndStyle(value: PropertyValue<'borderInlineEndStyle', T>): this {
    return this.write('borderInlineEndStyle', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  borderInlineEndWidth(value: PropertyValue<'borderInlineEndWidth', T>): this {
    return this.write('borderInlineEndWidth', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  borderInlineStart(value: PropertyValue<'borderInlineStart', T>): this {
    return this.write('borderInlineStart', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  borderInlineStartColor(value: PropertyValue<'borderInlineStartColor', T>): this {
    return this.write('borderInlineStartColor', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  borderInlineStartStyle(value: PropertyValue<'borderInlineStartStyle', T>): this {
    return this.write('borderInlineStartStyle', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  borderInlineStartWidth(value: PropertyValue<'borderInlineStartWidth', T>): this {
    return this.write('borderInlineStartWidth', value);
  }
  /**
   * 设置逻辑行内轴两侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  borderInlineStyle(value: PropertyValue<'borderInlineStyle', T>): this {
    return this.write('borderInlineStyle', value);
  }
  /**
   * 设置逻辑行内轴两侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  borderInlineWidth(value: PropertyValue<'borderInlineWidth', T>): this {
    return this.write('borderInlineWidth', value);
  }
  /**
   * 设置左边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  borderLeft(value: PropertyValue<'borderLeft', T>): this {
    return this.write('borderLeft', value);
  }
  /**
   * 设置左边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  borderLeftColor(value: PropertyValue<'borderLeftColor', T>): this {
    return this.write('borderLeftColor', value);
  }
  /**
   * 设置左边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  borderLeftStyle(value: PropertyValue<'borderLeftStyle', T>): this {
    return this.write('borderLeftStyle', value);
  }
  /**
   * 设置左边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  borderLeftWidth(value: PropertyValue<'borderLeftWidth', T>): this {
    return this.write('borderLeftWidth', value);
  }
  /**
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   * @example
   * s.borderRadius("8px")
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
   */
  borderRadius(value: PropertyValue<'borderRadius', T>): this {
    return this.write('borderRadius', value);
  }
  /**
   * 设置右边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  borderRight(value: PropertyValue<'borderRight', T>): this {
    return this.write('borderRight', value);
  }
  /**
   * 设置右边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  borderRightColor(value: PropertyValue<'borderRightColor', T>): this {
    return this.write('borderRightColor', value);
  }
  /**
   * 设置右边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  borderRightStyle(value: PropertyValue<'borderRightStyle', T>): this {
    return this.write('borderRightStyle', value);
  }
  /**
   * 设置右边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  borderRightWidth(value: PropertyValue<'borderRightWidth', T>): this {
    return this.write('borderRightWidth', value);
  }
  /**
   * 设置分离边框模型下表格单元格之间的水平和垂直间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  borderSpacing(value: PropertyValue<'borderSpacing', T>): this {
    return this.write('borderSpacing', value);
  }
  /**
   * 设置逻辑块轴起始侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  borderStartEndRadius(value: PropertyValue<'borderStartEndRadius', T>): this {
    return this.write('borderStartEndRadius', value);
  }
  /**
   * 设置逻辑块轴起始侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  borderStartStartRadius(value: PropertyValue<'borderStartStartRadius', T>): this {
    return this.write('borderStartStartRadius', value);
  }
  /**
   * 设置四边边框线型。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  borderStyle(value: PropertyValue<'borderStyle', T>): this {
    return this.write('borderStyle', value);
  }
  /**
   * 设置上边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  borderTop(value: PropertyValue<'borderTop', T>): this {
    return this.write('borderTop', value);
  }
  /**
   * 设置上边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  borderTopColor(value: PropertyValue<'borderTopColor', T>): this {
    return this.write('borderTopColor', value);
  }
  /**
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  borderTopLeftRadius(value: PropertyValue<'borderTopLeftRadius', T>): this {
    return this.write('borderTopLeftRadius', value);
  }
  /**
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  borderTopRightRadius(value: PropertyValue<'borderTopRightRadius', T>): this {
    return this.write('borderTopRightRadius', value);
  }
  /**
   * 设置上边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  borderTopStyle(value: PropertyValue<'borderTopStyle', T>): this {
    return this.write('borderTopStyle', value);
  }
  /**
   * 设置上边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  borderTopWidth(value: PropertyValue<'borderTopWidth', T>): this {
    return this.write('borderTopWidth', value);
  }
  /**
   * 设置四边边框宽度；可见边框通常还需要非 none 的线型。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  borderWidth(value: PropertyValue<'borderWidth', T>): this {
    return this.write('borderWidth', value);
  }
  /**
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  columnRule(value: PropertyValue<'columnRule', T>): this {
    return this.write('columnRule', value);
  }
  /**
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  columnRuleColor(value: PropertyValue<'columnRuleColor', T>): this {
    return this.write('columnRuleColor', value);
  }
  /**
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  columnRuleStyle(value: PropertyValue<'columnRuleStyle', T>): this {
    return this.write('columnRuleStyle', value);
  }
  /**
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  columnRuleWidth(value: PropertyValue<'columnRuleWidth', T>): this {
    return this.write('columnRuleWidth', value);
  }
  /**
   * 设置盒子外围轮廓线的宽度、线型和颜色，不占布局空间。
   *
   * 不占布局空间，可用 outline-offset 调整距离；键盘焦点指示不应被无替代地移除。
   *
   * 适用场景：控件焦点指示和不影响布局的轮廓。
   * @example
   * s.select(":focus-visible", s.outline("2px solid currentColor").outlineOffset("2px"))
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
   */
  outline(value: PropertyValue<'outline', T>): this {
    return this.write('outline', value);
  }
  /**
   * 设置轮廓线颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  outlineColor(value: PropertyValue<'outlineColor', T>): this {
    return this.write('outlineColor', value);
  }
  /**
   * 设置轮廓线与边框边缘之间的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  outlineOffset(value: PropertyValue<'outlineOffset', T>): this {
    return this.write('outlineOffset', value);
  }
  /**
   * 设置轮廓线线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  outlineStyle(value: PropertyValue<'outlineStyle', T>): this {
    return this.write('outlineStyle', value);
  }
  /**
   * 设置轮廓线宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  outlineWidth(value: PropertyValue<'outlineWidth', T>): this {
    return this.write('outlineWidth', value);
  }
  /**
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  backdropFilter(value: PropertyValue<'backdropFilter', T>): this {
    return this.write('backdropFilter', value);
  }
  /**
   * 设置盒子的外部或内部阴影，可叠加多层。
   *
   * 阴影不占布局空间，可用逗号叠加；与 border/outline 的用途和绘制位置不同。
   *
   * 适用场景：浮层层次、卡片边缘或内凹效果。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.boxShadow("0 2px 8px rgb(0 0 0 / 0.15)")
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
   */
  boxShadow(value: PropertyValue<'boxShadow', T>): this {
    return this.write('boxShadow', value);
  }
  /**
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  clipPath(value: PropertyValue<'clipPath', T>): this {
    return this.write('clipPath', value);
  }
  /**
   * 设置 SVG 裁剪路径判断内部区域所用的填充规则。
   *
   * CSS 规范初始值：`nonzero`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  clipRule(value: PropertyValue<'clipRule', T>): this {
    return this.write('clipRule', value);
  }
  /**
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  filter(value: PropertyValue<'filter', T>): this {
    return this.write('filter', value);
  }
  /**
   * 设置图像是否按元数据等信息调整方向。
   *
   * CSS 规范初始值：`from-image`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  imageOrientation(value: PropertyValue<'imageOrientation', T>): this {
    return this.write('imageOrientation', value);
  }
  /**
   * 向浏览器指定图像缩放时的插值与清晰度偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  imageRendering(value: PropertyValue<'imageRendering', T>): this {
    return this.write('imageRendering', value);
  }
  /**
   * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。
   *
   * CSS 规范初始值：`1dppx`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  imageResolution(value: PropertyValue<'imageResolution', T>): this {
    return this.write('imageResolution', value);
  }
  /**
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  mask(value: PropertyValue<'mask', T>): this {
    return this.write('mask', value);
  }
  /**
   * 设置基于九宫格图像切片的边框遮罩。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  maskBorder(value: PropertyValue<'maskBorder', T>): this {
    return this.write('maskBorder', value);
  }
  /**
   * 设置边框遮罩使用 alpha 还是亮度信息。
   *
   * CSS 规范初始值：`alpha`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  maskBorderMode(value: PropertyValue<'maskBorderMode', T>): this {
    return this.write('maskBorderMode', value);
  }
  /**
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  maskBorderOutset(value: PropertyValue<'maskBorderOutset', T>): this {
    return this.write('maskBorderOutset', value);
  }
  /**
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  maskBorderRepeat(value: PropertyValue<'maskBorderRepeat', T>): this {
    return this.write('maskBorderRepeat', value);
  }
  /**
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  maskBorderSlice(value: PropertyValue<'maskBorderSlice', T>): this {
    return this.write('maskBorderSlice', value);
  }
  /**
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  maskBorderSource(value: PropertyValue<'maskBorderSource', T>): this {
    return this.write('maskBorderSource', value);
  }
  /**
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  maskBorderWidth(value: PropertyValue<'maskBorderWidth', T>): this {
    return this.write('maskBorderWidth', value);
  }
  /**
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  maskClip(value: PropertyValue<'maskClip', T>): this {
    return this.write('maskClip', value);
  }
  /**
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：`add`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  maskComposite(value: PropertyValue<'maskComposite', T>): this {
    return this.write('maskComposite', value);
  }
  /**
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  maskImage(value: PropertyValue<'maskImage', T>): this {
    return this.write('maskImage', value);
  }
  /**
   * 设置遮罩按 alpha、亮度或源类型解释。
   *
   * CSS 规范初始值：`match-source`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  maskMode(value: PropertyValue<'maskMode', T>): this {
    return this.write('maskMode', value);
  }
  /**
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  maskOrigin(value: PropertyValue<'maskOrigin', T>): this {
    return this.write('maskOrigin', value);
  }
  /**
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  maskPosition(value: PropertyValue<'maskPosition', T>): this {
    return this.write('maskPosition', value);
  }
  /**
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  maskRepeat(value: PropertyValue<'maskRepeat', T>): this {
    return this.write('maskRepeat', value);
  }
  /**
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  maskSize(value: PropertyValue<'maskSize', T>): this {
    return this.write('maskSize', value);
  }
  /**
   * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。
   *
   * CSS 规范初始值：`luminance`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  maskType(value: PropertyValue<'maskType', T>): this {
    return this.write('maskType', value);
  }
  /**
   * 设置元素整体与其背后内容的颜色混合方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  mixBlendMode(value: PropertyValue<'mixBlendMode', T>): this {
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
   * CSS 规范初始值：`fill`，不同于浏览器默认样式表。
   * @example
   * s.width("80px").height("80px").objectFit("cover")
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  objectFit(value: PropertyValue<'objectFit', T>): this {
    return this.write('objectFit', value);
  }
  /**
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  objectPosition(value: PropertyValue<'objectPosition', T>): this {
    return this.write('objectPosition', value);
  }
  /**
   * 设置替换元素内容的可视区域，控制用于呈现的图像范围。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  objectViewBox(value: PropertyValue<'objectViewBox', T>): this {
    return this.write('objectViewBox', value);
  }
  /**
   * 设置元素及其子树合成后的整体不透明度。
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @example
   * s.opacity(0.5)
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
   */
  opacity(value: PropertyValue<'opacity', T>): this {
    return this.write('opacity', value);
  }
  /**
   * 设置从图像 alpha 信息提取环绕形状时的阈值。
   *
   * CSS 规范初始值：`0.0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  shapeImageThreshold(value: PropertyValue<'shapeImageThreshold', T>): this {
    return this.write('shapeImageThreshold', value);
  }
  /**
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  shapeMargin(value: PropertyValue<'shapeMargin', T>): this {
    return this.write('shapeMargin', value);
  }
  /**
   * 设置浮动元素周围行内内容所环绕的形状。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  shapeOutside(value: PropertyValue<'shapeOutside', T>): this {
    return this.write('shapeOutside', value);
  }
  /**
   * 向 SVG 渲染器提供图形绘制精度与速度的偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  shapeRendering(value: PropertyValue<'shapeRendering', T>): this {
    return this.write('shapeRendering', value);
  }
  /**
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  animation(value: PropertyValue<'animation', T>): this {
    return this.write('animation', value);
  }
  /**
   * 设置动画效果与底层属性值的替换、叠加或累积方式。
   *
   * CSS 规范初始值：`replace`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  animationComposition(value: PropertyValue<'animationComposition', T>): this {
    return this.write('animationComposition', value);
  }
  /**
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  animationDelay(value: PropertyValue<'animationDelay', T>): this {
    return this.write('animationDelay', value);
  }
  /**
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  animationDirection(value: PropertyValue<'animationDirection', T>): this {
    return this.write('animationDirection', value);
  }
  /**
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  animationDuration(value: PropertyValue<'animationDuration', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.animationFillMode("forwards")
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
   */
  animationFillMode(value: PropertyValue<'animationFillMode', T>): this {
    return this.write('animationFillMode', value);
  }
  /**
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  animationIterationCount(value: PropertyValue<'animationIterationCount', T>): this {
    return this.write('animationIterationCount', value);
  }
  /**
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  animationName(value: PropertyValue<'animationName', T>): this {
    return this.write('animationName', value);
  }
  /**
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  animationPlayState(value: PropertyValue<'animationPlayState', T>): this {
    return this.write('animationPlayState', value);
  }
  /**
   * 设置动画附着到时间线的起止范围。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  animationRange(value: PropertyValue<'animationRange', T>): this {
    return this.write('animationRange', value);
  }
  /**
   * 设置动画在时间线上的附着范围终点。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  animationRangeEnd(value: PropertyValue<'animationRangeEnd', T>): this {
    return this.write('animationRangeEnd', value);
  }
  /**
   * 设置动画在时间线上的附着范围起点。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  animationRangeStart(value: PropertyValue<'animationRangeStart', T>): this {
    return this.write('animationRangeStart', value);
  }
  /**
   * 选择驱动动画的时间线，例如文档时间或滚动进度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  animationTimeline(value: PropertyValue<'animationTimeline', T>): this {
    return this.write('animationTimeline', value);
  }
  /**
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  animationTimingFunction(value: PropertyValue<'animationTimingFunction', T>): this {
    return this.write('animationTimingFunction', value);
  }
  /**
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  backfaceVisibility(value: PropertyValue<'backfaceVisibility', T>): this {
    return this.write('backfaceVisibility', value);
  }
  /**
   * 集中设置运动路径、起始位置、距离、方向和锚点。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  offset(value: PropertyValue<'offset', T>): this {
    return this.write('offset', value);
  }
  /**
   * 设置元素沿运动路径移动时与路径相接的内部锚点。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  offsetAnchor(value: PropertyValue<'offsetAnchor', T>): this {
    return this.write('offsetAnchor', value);
  }
  /**
   * 设置元素沿运动路径行进的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  offsetDistance(value: PropertyValue<'offsetDistance', T>): this {
    return this.write('offsetDistance', value);
  }
  /**
   * 设置元素运动所沿用的路径。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  offsetPath(value: PropertyValue<'offsetPath', T>): this {
    return this.write('offsetPath', value);
  }
  /**
   * 设置运动路径的初始位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  offsetPosition(value: PropertyValue<'offsetPosition', T>): this {
    return this.write('offsetPosition', value);
  }
  /**
   * 设置元素沿运动路径移动时的方向和附加旋转。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  offsetRotate(value: PropertyValue<'offsetRotate', T>): this {
    return this.write('offsetRotate', value);
  }
  /**
   * 设置路径旋转的旧名称；新代码使用 offset-rotate。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotation
   */
  offsetRotation(value: PropertyValue<'offsetRotation', T>): this {
    return this.write('offsetRotation', value);
  }
  /**
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  perspective(value: PropertyValue<'perspective', T>): this {
    return this.write('perspective', value);
  }
  /**
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  perspectiveOrigin(value: PropertyValue<'perspectiveOrigin', T>): this {
    return this.write('perspectiveOrigin', value);
  }
  /**
   * 独立设置元素旋转，不必重写 transform 中的其他变换。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  rotate(value: PropertyValue<'rotate', T>): this {
    return this.write('rotate', value);
  }
  /**
   * 独立设置元素的缩放比例。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  scale(value: PropertyValue<'scale', T>): this {
    return this.write('scale', value);
  }
  /**
   * 按顺序组合平移、旋转、缩放等二维或三维变换。
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * 适用场景：平移、旋转和缩放的视觉效果；需要改变普通流占位时应调整布局属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.transform("translateX(8px) scale(1.05)")
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
   */
  transform(value: PropertyValue<'transform', T>): this {
    return this.write('transform', value);
  }
  /**
   * 设置变换及其原点所依据的参照盒。
   *
   * CSS 规范初始值：`view-box`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  transformBox(value: PropertyValue<'transformBox', T>): this {
    return this.write('transformBox', value);
  }
  /**
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  transformOrigin(value: PropertyValue<'transformOrigin', T>): this {
    return this.write('transformOrigin', value);
  }
  /**
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：`flat`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  transformStyle(value: PropertyValue<'transformStyle', T>): this {
    return this.write('transformStyle', value);
  }
  /**
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   * @example
   * s.transition("opacity 160ms ease")
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  transition(value: PropertyValue<'transition', T>): this {
    return this.write('transition', value);
  }
  /**
   * 控制离散属性是否可以启动 CSS 过渡。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  transitionBehavior(value: PropertyValue<'transitionBehavior', T>): this {
    return this.write('transitionBehavior', value);
  }
  /**
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  transitionDelay(value: PropertyValue<'transitionDelay', T>): this {
    return this.write('transitionDelay', value);
  }
  /**
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  transitionDuration(value: PropertyValue<'transitionDuration', T>): this {
    return this.write('transitionDuration', value);
  }
  /**
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  transitionProperty(value: PropertyValue<'transitionProperty', T>): this {
    return this.write('transitionProperty', value);
  }
  /**
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  transitionTimingFunction(value: PropertyValue<'transitionTimingFunction', T>): this {
    return this.write('transitionTimingFunction', value);
  }
  /**
   * 独立设置元素在二维或三维空间中的平移。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  translate(value: PropertyValue<'translate', T>): this {
    return this.write('translate', value);
  }
  /**
   * 为视图过渡的快照伪元素分组，以便共用样式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  viewTransitionClass(value: PropertyValue<'viewTransitionClass', T>): this {
    return this.write('viewTransitionClass', value);
  }
  /**
   * 为视图过渡中的元素命名，以匹配前后状态的快照。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  viewTransitionName(value: PropertyValue<'viewTransitionName', T>): this {
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
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * s.maxHeight("20rem").overflow("auto")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  overflow(value: PropertyValue<'overflow', T>): this {
    return this.write('overflow', value);
  }
  /**
   * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  overflowAnchor(value: PropertyValue<'overflowAnchor', T>): this {
    return this.write('overflowAnchor', value);
  }
  /**
   * 设置逻辑块轴上的溢出行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  overflowBlock(value: PropertyValue<'overflowBlock', T>): this {
    return this.write('overflowBlock', value);
  }
  /**
   * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  overflowClipBox(value: PropertyValue<'overflowClipBox', T>): this {
    return this.write('overflowClipBox', value);
  }
  /**
   * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。
   *
   * CSS 规范初始值：`0px`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  overflowClipMargin(value: PropertyValue<'overflowClipMargin', T>): this {
    return this.write('overflowClipMargin', value);
  }
  /**
   * 设置逻辑行内轴上的溢出行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  overflowInline(value: PropertyValue<'overflowInline', T>): this {
    return this.write('overflowInline', value);
  }
  /**
   * 设置不可正常断开的长文本是否允许额外换行。
   *
   * 适用场景：防止 URL、标识符等长文本撑破容器。
   *
   * 常用值：`normal`、`anywhere`、`break-word`。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.overflowWrap("anywhere")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  overflowWrap(value: PropertyValue<'overflowWrap', T>): this {
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
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * s.overflowX("auto")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  overflowX(value: PropertyValue<'overflowX', T>): this {
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
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * s.maxHeight("20rem").overflowY("auto")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  overflowY(value: PropertyValue<'overflowY', T>): this {
    return this.write('overflowY', value);
  }
  /**
   * 控制滚动到边界后的滚动链和越界反馈行为。
   *
   * 适用场景：阻止弹窗或内部滚动面板到达边界后继续滚动外层页面。
   *
   * 常用值：`auto`、`contain`、`none`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.overflowY("auto").overscrollBehavior("contain")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
   */
  overscrollBehavior(value: PropertyValue<'overscrollBehavior', T>): this {
    return this.write('overscrollBehavior', value);
  }
  /**
   * 控制逻辑块轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  overscrollBehaviorBlock(value: PropertyValue<'overscrollBehaviorBlock', T>): this {
    return this.write('overscrollBehaviorBlock', value);
  }
  /**
   * 控制逻辑行内轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  overscrollBehaviorInline(value: PropertyValue<'overscrollBehaviorInline', T>): this {
    return this.write('overscrollBehaviorInline', value);
  }
  /**
   * 控制水平方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  overscrollBehaviorX(value: PropertyValue<'overscrollBehaviorX', T>): this {
    return this.write('overscrollBehaviorX', value);
  }
  /**
   * 控制垂直方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  overscrollBehaviorY(value: PropertyValue<'overscrollBehaviorY', T>): this {
    return this.write('overscrollBehaviorY', value);
  }
  /**
   * 设置滚动条滑块和轨道的颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  scrollbarColor(value: PropertyValue<'scrollbarColor', T>): this {
    return this.write('scrollbarColor', value);
  }
  /**
   * 设置是否预留滚动条槽位，以减少滚动条出现时的布局变化。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  scrollbarGutter(value: PropertyValue<'scrollbarGutter', T>): this {
    return this.write('scrollbarGutter', value);
  }
  /**
   * 设置滚动条采用正常、较细或隐藏的外观。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  scrollbarWidth(value: PropertyValue<'scrollbarWidth', T>): this {
    return this.write('scrollbarWidth', value);
  }
  /**
   * 设置由导航或滚动 API 触发的滚动采用即时还是平滑方式。
   *
   * 主要影响导航和滚动 API 触发的滚动，不会把所有用户滚动强制变成动画。
   *
   * 适用场景：锚点跳转或程序化滚动；应同时考虑减少动态效果的用户偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.scrollBehavior("smooth")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  scrollBehavior(value: PropertyValue<'scrollBehavior', T>): this {
    return this.write('scrollBehavior', value);
  }
  /**
   * 将元素声明为祖先滚动容器首次呈现时的候选滚动吸附目标。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  scrollInitialTarget(value: PropertyValue<'scrollInitialTarget', T>): this {
    return this.write('scrollInitialTarget', value);
  }
  /**
   * 设置元素滚动目标区域的四边外扩距离，不改变普通布局外边距。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  scrollMargin(value: PropertyValue<'scrollMargin', T>): this {
    return this.write('scrollMargin', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴两侧的外扩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  scrollMarginBlock(value: PropertyValue<'scrollMarginBlock', T>): this {
    return this.write('scrollMarginBlock', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴结束侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  scrollMarginBlockEnd(value: PropertyValue<'scrollMarginBlockEnd', T>): this {
    return this.write('scrollMarginBlockEnd', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴起始侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  scrollMarginBlockStart(value: PropertyValue<'scrollMarginBlockStart', T>): this {
    return this.write('scrollMarginBlockStart', value);
  }
  /**
   * 设置滚动目标区域下侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  scrollMarginBottom(value: PropertyValue<'scrollMarginBottom', T>): this {
    return this.write('scrollMarginBottom', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴两侧的外扩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  scrollMarginInline(value: PropertyValue<'scrollMarginInline', T>): this {
    return this.write('scrollMarginInline', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴结束侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  scrollMarginInlineEnd(value: PropertyValue<'scrollMarginInlineEnd', T>): this {
    return this.write('scrollMarginInlineEnd', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴起始侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  scrollMarginInlineStart(value: PropertyValue<'scrollMarginInlineStart', T>): this {
    return this.write('scrollMarginInlineStart', value);
  }
  /**
   * 设置滚动目标区域左侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  scrollMarginLeft(value: PropertyValue<'scrollMarginLeft', T>): this {
    return this.write('scrollMarginLeft', value);
  }
  /**
   * 设置滚动目标区域右侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  scrollMarginRight(value: PropertyValue<'scrollMarginRight', T>): this {
    return this.write('scrollMarginRight', value);
  }
  /**
   * 设置滚动目标区域上侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  scrollMarginTop(value: PropertyValue<'scrollMarginTop', T>): this {
    return this.write('scrollMarginTop', value);
  }
  /**
   * 设置滚动容器最佳可视区域的四边内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  scrollPadding(value: PropertyValue<'scrollPadding', T>): this {
    return this.write('scrollPadding', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴两侧的内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  scrollPaddingBlock(value: PropertyValue<'scrollPaddingBlock', T>): this {
    return this.write('scrollPaddingBlock', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴结束侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  scrollPaddingBlockEnd(value: PropertyValue<'scrollPaddingBlockEnd', T>): this {
    return this.write('scrollPaddingBlockEnd', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴起始侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  scrollPaddingBlockStart(value: PropertyValue<'scrollPaddingBlockStart', T>): this {
    return this.write('scrollPaddingBlockStart', value);
  }
  /**
   * 设置滚动容器最佳可视区域下侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  scrollPaddingBottom(value: PropertyValue<'scrollPaddingBottom', T>): this {
    return this.write('scrollPaddingBottom', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴两侧的内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  scrollPaddingInline(value: PropertyValue<'scrollPaddingInline', T>): this {
    return this.write('scrollPaddingInline', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴结束侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd(value: PropertyValue<'scrollPaddingInlineEnd', T>): this {
    return this.write('scrollPaddingInlineEnd', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴起始侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  scrollPaddingInlineStart(value: PropertyValue<'scrollPaddingInlineStart', T>): this {
    return this.write('scrollPaddingInlineStart', value);
  }
  /**
   * 设置滚动容器最佳可视区域左侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  scrollPaddingLeft(value: PropertyValue<'scrollPaddingLeft', T>): this {
    return this.write('scrollPaddingLeft', value);
  }
  /**
   * 设置滚动容器最佳可视区域右侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  scrollPaddingRight(value: PropertyValue<'scrollPaddingRight', T>): this {
    return this.write('scrollPaddingRight', value);
  }
  /**
   * 设置滚动容器最佳可视区域上侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  scrollPaddingTop(value: PropertyValue<'scrollPaddingTop', T>): this {
    return this.write('scrollPaddingTop', value);
  }
  /**
   * 设置元素作为滚动吸附目标时在块轴和行内轴上的对齐位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  scrollSnapAlign(value: PropertyValue<'scrollSnapAlign', T>): this {
    return this.write('scrollSnapAlign', value);
  }
  /**
   * 设置滚动吸附区域外扩的旧名称；新代码使用 scroll-margin。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin
   */
  scrollSnapMargin(value: PropertyValue<'scrollSnapMargin', T>): this {
    return this.write('scrollSnapMargin', value);
  }
  /**
   * 设置滚动吸附区域下侧外扩的旧名称；新代码使用 scroll-margin-bottom。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-bottom
   */
  scrollSnapMarginBottom(value: PropertyValue<'scrollSnapMarginBottom', T>): this {
    return this.write('scrollSnapMarginBottom', value);
  }
  /**
   * 设置滚动吸附区域左侧外扩的旧名称；新代码使用 scroll-margin-left。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-left
   */
  scrollSnapMarginLeft(value: PropertyValue<'scrollSnapMarginLeft', T>): this {
    return this.write('scrollSnapMarginLeft', value);
  }
  /**
   * 设置滚动吸附区域右侧外扩的旧名称；新代码使用 scroll-margin-right。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-right
   */
  scrollSnapMarginRight(value: PropertyValue<'scrollSnapMarginRight', T>): this {
    return this.write('scrollSnapMarginRight', value);
  }
  /**
   * 设置滚动吸附区域上侧外扩的旧名称；新代码使用 scroll-margin-top。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-top
   */
  scrollSnapMarginTop(value: PropertyValue<'scrollSnapMarginTop', T>): this {
    return this.write('scrollSnapMarginTop', value);
  }
  /**
   * 设置滚动时是否允许越过该元素的吸附位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  scrollSnapStop(value: PropertyValue<'scrollSnapStop', T>): this {
    return this.write('scrollSnapStop', value);
  }
  /**
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.scrollSnapType("x mandatory")
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  scrollSnapType(value: PropertyValue<'scrollSnapType', T>): this {
    return this.write('scrollSnapType', value);
  }
  /**
   * 同时声明滚动进度时间线的名称和轴。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  scrollTimeline(value: PropertyValue<'scrollTimeline', T>): this {
    return this.write('scrollTimeline', value);
  }
  /**
   * 设置滚动进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：`block`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  scrollTimelineAxis(value: PropertyValue<'scrollTimelineAxis', T>): this {
    return this.write('scrollTimelineAxis', value);
  }
  /**
   * 声明基于当前容器滚动进度的时间线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  scrollTimelineName(value: PropertyValue<'scrollTimelineName', T>): this {
    return this.write('scrollTimelineName', value);
  }
  /**
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  appearance(value: PropertyValue<'appearance', T>): this {
    return this.write('appearance', value);
  }
  /**
   * 集中设置文本插入光标的颜色和形状。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  caret(value: PropertyValue<'caret', T>): this {
    return this.write('caret', value);
  }
  /**
   * 设置文本插入光标的形状。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  caretShape(value: PropertyValue<'caretShape', T>): this {
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
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * s.contentVisibility("auto")
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
   */
  contentVisibility(value: PropertyValue<'contentVisibility', T>): this {
    return this.write('contentVisibility', value);
  }
  /**
   * 设置指针位于元素上方时显示的光标。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  cursor(value: PropertyValue<'cursor', T>): this {
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
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.pointerEvents("none")
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  pointerEvents(value: PropertyValue<'pointerEvents', T>): this {
    return this.write('pointerEvents', value);
  }
  /**
   * 设置用户是否能调整元素尺寸以及可调整的方向。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  resize(value: PropertyValue<'resize', T>): this {
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
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.touchAction("pan-y")
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  touchAction(value: PropertyValue<'touchAction', T>): this {
    return this.write('touchAction', value);
  }
  /**
   * 设置用户是否可以选取元素中的文本。
   *
   * 适用场景：调整拖拽控件中的文本选取，或让代码片段整段选中。
   *
   * 常用值：`auto`、`text`、`none`、`all`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.userSelect("all")
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  userSelect(value: PropertyValue<'userSelect', T>): this {
    return this.write('userSelect', value);
  }
  /**
   * 设置元素是否可见；隐藏通常保留布局空间。
   *
   * 适用场景：需要隐藏内容但通常保留其布局占位的场景。
   *
   * 常用值：`visible`、`hidden`、`collapse`。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * s.visibility("hidden")
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
   */
  visibility(value: PropertyValue<'visibility', T>): this {
    return this.write('visibility', value);
  }
  /**
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  breakAfter(value: PropertyValue<'breakAfter', T>): this {
    return this.write('breakAfter', value);
  }
  /**
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  breakBefore(value: PropertyValue<'breakBefore', T>): this {
    return this.write('breakBefore', value);
  }
  /**
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  breakInside(value: PropertyValue<'breakInside', T>): this {
    return this.write('breakInside', value);
  }
  /**
   * 设置表格标题相对于表格的放置侧。
   *
   * CSS 规范初始值：`top`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  captionSide(value: PropertyValue<'captionSide', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.contain("content")
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  contain(value: PropertyValue<'contain', T>): this {
    return this.write('contain', value);
  }
  /**
   * 同时声明查询容器的名称和类型。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  container(value: PropertyValue<'container', T>): this {
    return this.write('container', value);
  }
  /**
   * 为查询容器命名，供 @container 条件规则选择。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  containerName(value: PropertyValue<'containerName', T>): this {
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
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.containerType("inline-size")
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  containerType(value: PropertyValue<'containerType', T>): this {
    return this.write('containerType', value);
  }
  /**
   * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  containIntrinsicBlockSize(value: PropertyValue<'containIntrinsicBlockSize', T>): this {
    return this.write('containIntrinsicBlockSize', value);
  }
  /**
   * 设置高度隔离或跳过内容渲染时使用的替代内部高度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  containIntrinsicHeight(value: PropertyValue<'containIntrinsicHeight', T>): this {
    return this.write('containIntrinsicHeight', value);
  }
  /**
   * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  containIntrinsicInlineSize(value: PropertyValue<'containIntrinsicInlineSize', T>): this {
    return this.write('containIntrinsicInlineSize', value);
  }
  /**
   * 集中设置尺寸隔离时使用的替代内部宽高。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  containIntrinsicSize(value: PropertyValue<'containIntrinsicSize', T>): this {
    return this.write('containIntrinsicSize', value);
  }
  /**
   * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  containIntrinsicWidth(value: PropertyValue<'containIntrinsicWidth', T>): this {
    return this.write('containIntrinsicWidth', value);
  }
  /**
   * 设置生成内容、替换内容或伪元素的内容。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  content(value: PropertyValue<'content', T>): this {
    return this.write('content', value);
  }
  /**
   * 增加或减少指定 CSS 计数器的值。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  counterIncrement(value: PropertyValue<'counterIncrement', T>): this {
    return this.write('counterIncrement', value);
  }
  /**
   * 创建或重置 CSS 计数器。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  counterReset(value: PropertyValue<'counterReset', T>): this {
    return this.write('counterReset', value);
  }
  /**
   * 设置已有 CSS 计数器的值，必要时创建计数器。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  counterSet(value: PropertyValue<'counterSet', T>): this {
    return this.write('counterSet', value);
  }
  /**
   * 控制分离边框表格中空单元格的边框和背景是否绘制。
   *
   * CSS 规范初始值：`show`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  emptyCells(value: PropertyValue<'emptyCells', T>): this {
    return this.write('emptyCells', value);
  }
  /**
   * 集中设置列表标记的类型、图像和位置。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  listStyle(value: PropertyValue<'listStyle', T>): this {
    return this.write('listStyle', value);
  }
  /**
   * 设置用作列表标记的图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  listStyleImage(value: PropertyValue<'listStyleImage', T>): this {
    return this.write('listStyleImage', value);
  }
  /**
   * 设置列表标记位于主块盒内部还是外部。
   *
   * CSS 规范初始值：`outside`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  listStylePosition(value: PropertyValue<'listStylePosition', T>): this {
    return this.write('listStylePosition', value);
  }
  /**
   * 设置列表标记或计数器的样式。
   *
   * CSS 规范初始值：`disc`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  listStyleType(value: PropertyValue<'listStyleType', T>): this {
    return this.write('listStyleType', value);
  }
  /**
   * 设置分页或分栏断点前需保留的最少行数。
   *
   * CSS 规范初始值：`2`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  orphans(value: PropertyValue<'orphans', T>): this {
    return this.write('orphans', value);
  }
  /**
   * 选择分页媒体中使用的命名页面类型。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  page(value: PropertyValue<'page', T>): this {
    return this.write('page', value);
  }
  /**
   * 设置表格列宽采用自动还是固定布局算法。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  tableLayout(value: PropertyValue<'tableLayout', T>): this {
    return this.write('tableLayout', value);
  }
  /**
   * 设置分页或分栏断点后需保留的最少行数。
   *
   * CSS 规范初始值：`2`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  widows(value: PropertyValue<'widows', T>): this {
    return this.write('widows', value);
  }
  /**
   * 使 SVG 文本基线相对于其基准位置偏移。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  baselineShift(value: PropertyValue<'baselineShift', T>): this {
    return this.write('baselineShift', value);
  }
  /**
   * 选择 SVG 文本布局的主导基线及基线表。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  dominantBaseline(value: PropertyValue<'dominantBaseline', T>): this {
    return this.write('dominantBaseline', value);
  }
  /**
   * 设置 SVG 图形内部的填充绘制方式。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  fill(value: PropertyValue<'fill', T>): this {
    return this.write('fill', value);
  }
  /**
   * 设置 SVG 填充的不透明度，不影响描边。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  fillOpacity(value: PropertyValue<'fillOpacity', T>): this {
    return this.write('fillOpacity', value);
  }
  /**
   * 设置复杂 SVG 路径的内部区域判定规则。
   *
   * CSS 规范初始值：`nonzero`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  fillRule(value: PropertyValue<'fillRule', T>): this {
    return this.write('fillRule', value);
  }
  /**
   * 设置 SVG feFlood 或相关滤镜的洪泛颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  floodColor(value: PropertyValue<'floodColor', T>): this {
    return this.write('floodColor', value);
  }
  /**
   * 设置 SVG 洪泛滤镜颜色的不透明度。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  floodOpacity(value: PropertyValue<'floodOpacity', T>): this {
    return this.write('floodOpacity', value);
  }
  /**
   * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  glyphOrientationVertical(value: PropertyValue<'glyphOrientationVertical', T>): this {
    return this.write('glyphOrientationVertical', value);
  }
  /**
   * 设置 SVG 光照滤镜使用的光源颜色。
   *
   * CSS 规范初始值：`white`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  lightingColor(value: PropertyValue<'lightingColor', T>): this {
    return this.write('lightingColor', value);
  }
  /**
   * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  marker(value: PropertyValue<'marker', T>): this {
    return this.write('marker', value);
  }
  /**
   * 设置 SVG 路径终点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  markerEnd(value: PropertyValue<'markerEnd', T>): this {
    return this.write('markerEnd', value);
  }
  /**
   * 设置 SVG 路径中间顶点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  markerMid(value: PropertyValue<'markerMid', T>): this {
    return this.write('markerMid', value);
  }
  /**
   * 设置 SVG 路径起点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  markerStart(value: PropertyValue<'markerStart', T>): this {
    return this.write('markerStart', value);
  }
  /**
   * 设置 SVG 填充、描边和标记的绘制先后顺序。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  paintOrder(value: PropertyValue<'paintOrder', T>): this {
    return this.write('paintOrder', value);
  }
  /**
   * 设置 SVG 渐变 stop 节点的颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  stopColor(value: PropertyValue<'stopColor', T>): this {
    return this.write('stopColor', value);
  }
  /**
   * 设置 SVG 渐变 stop 节点的不透明度。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  stopOpacity(value: PropertyValue<'stopOpacity', T>): this {
    return this.write('stopOpacity', value);
  }
  /**
   * 设置 SVG 图形轮廓的描边绘制方式。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  stroke(value: PropertyValue<'stroke', T>): this {
    return this.write('stroke', value);
  }
  /**
   * 设置 SVG 描边虚线中线段与空隙的长度序列。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  strokeDasharray(value: PropertyValue<'strokeDasharray', T>): this {
    return this.write('strokeDasharray', value);
  }
  /**
   * 设置 SVG 虚线描边相对于路径起点的偏移。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  strokeDashoffset(value: PropertyValue<'strokeDashoffset', T>): this {
    return this.write('strokeDashoffset', value);
  }
  /**
   * 设置开放 SVG 子路径端点的描边形状。
   *
   * CSS 规范初始值：`butt`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  strokeLinecap(value: PropertyValue<'strokeLinecap', T>): this {
    return this.write('strokeLinecap', value);
  }
  /**
   * 设置 SVG 路径转角处描边的连接形状。
   *
   * CSS 规范初始值：`miter`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  strokeLinejoin(value: PropertyValue<'strokeLinejoin', T>): this {
    return this.write('strokeLinejoin', value);
  }
  /**
   * 限制尖角连接的延伸比例，超过阈值时改变连接形状。
   *
   * CSS 规范初始值：`4`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  strokeMiterlimit(value: PropertyValue<'strokeMiterlimit', T>): this {
    return this.write('strokeMiterlimit', value);
  }
  /**
   * 设置 SVG 描边的不透明度，不影响填充。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  strokeOpacity(value: PropertyValue<'strokeOpacity', T>): this {
    return this.write('strokeOpacity', value);
  }
  /**
   * 设置 SVG 描边宽度。
   *
   * CSS 规范初始值：`1px`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  strokeWidth(value: PropertyValue<'strokeWidth', T>): this {
    return this.write('strokeWidth', value);
  }
  /**
   * 设置 SVG 图形变换时对描边等矢量效果的处理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  vectorEffect(value: PropertyValue<'vectorEffect', T>): this {
    return this.write('vectorEffect', value);
  }
  /**
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  boxAlign(value: PropertyValue<'boxAlign', T>): this {
    return this.write('boxAlign', value);
  }
  /**
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-direction
   */
  boxDirection(value: PropertyValue<'boxDirection', T>): this {
    return this.write('boxDirection', value);
  }
  /**
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex
   */
  boxFlex(value: PropertyValue<'boxFlex', T>): this {
    return this.write('boxFlex', value);
  }
  /**
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex-group
   */
  boxFlexGroup(value: PropertyValue<'boxFlexGroup', T>): this {
    return this.write('boxFlexGroup', value);
  }
  /**
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：`single`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  boxLines(value: PropertyValue<'boxLines', T>): this {
    return this.write('boxLines', value);
  }
  /**
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-ordinal-group
   */
  boxOrdinalGroup(value: PropertyValue<'boxOrdinalGroup', T>): this {
    return this.write('boxOrdinalGroup', value);
  }
  /**
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  boxOrient(value: PropertyValue<'boxOrient', T>): this {
    return this.write('boxOrient', value);
  }
  /**
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  boxPack(value: PropertyValue<'boxPack', T>): this {
    return this.write('boxPack', value);
  }
  /**
   * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  clip(value: PropertyValue<'clip', T>): this {
    return this.write('clip', value);
  }
  /**
   * 选择字体的宽窄字面；font-width 是其较新的名称。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  fontStretch(value: PropertyValue<'fontStretch', T>): this {
    return this.write('fontStretch', value);
  }
  /**
   * 兼容属性 grid-column-gap；优先参考标准属性 columnGap及浏览器支持范围。
   * 设置布局中相邻列之间的间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-gap
   */
  gridColumnGap(value: PropertyValue<'gridColumnGap', T>): this {
    return this.write('gridColumnGap', value);
  }
  /**
   * 兼容属性 grid-gap；优先参考标准属性 gap及浏览器支持范围。
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-gap
   */
  gridGap(value: PropertyValue<'gridGap', T>): this {
    return this.write('gridGap', value);
  }
  /**
   * 兼容属性 grid-row-gap；优先参考标准属性 rowGap及浏览器支持范围。
   * 设置布局中相邻行之间的间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-gap
   */
  gridRowGap(value: PropertyValue<'gridRowGap', T>): this {
    return this.write('gridRowGap', value);
  }
  /**
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  imeMode(value: PropertyValue<'imeMode', T>): this {
    return this.write('imeMode', value);
  }
  /**
   * 兼容属性 inset-area；优先参考标准属性 positionArea及浏览器支持范围。
   * 选择相对于锚点的定位区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  insetArea(value: PropertyValue<'insetArea', T>): this {
    return this.write('insetArea', value);
  }
  /**
   * 兼容属性 -khtml-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-align
   */
  KhtmlBoxAlign(value: PropertyValue<'KhtmlBoxAlign', T>): this {
    return this.write('KhtmlBoxAlign', value);
  }
  /**
   * 兼容属性 -khtml-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-direction
   */
  KhtmlBoxDirection(value: PropertyValue<'KhtmlBoxDirection', T>): this {
    return this.write('KhtmlBoxDirection', value);
  }
  /**
   * 兼容属性 -khtml-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-flex
   */
  KhtmlBoxFlex(value: PropertyValue<'KhtmlBoxFlex', T>): this {
    return this.write('KhtmlBoxFlex', value);
  }
  /**
   * 兼容属性 -khtml-box-flex-group；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-flex-group
   */
  KhtmlBoxFlexGroup(value: PropertyValue<'KhtmlBoxFlexGroup', T>): this {
    return this.write('KhtmlBoxFlexGroup', value);
  }
  /**
   * 兼容属性 -khtml-box-lines；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：`single`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-lines
   */
  KhtmlBoxLines(value: PropertyValue<'KhtmlBoxLines', T>): this {
    return this.write('KhtmlBoxLines', value);
  }
  /**
   * 兼容属性 -khtml-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-ordinal-group
   */
  KhtmlBoxOrdinalGroup(value: PropertyValue<'KhtmlBoxOrdinalGroup', T>): this {
    return this.write('KhtmlBoxOrdinalGroup', value);
  }
  /**
   * 兼容属性 -khtml-box-orient；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  KhtmlBoxOrient(value: PropertyValue<'KhtmlBoxOrient', T>): this {
    return this.write('KhtmlBoxOrient', value);
  }
  /**
   * 兼容属性 -khtml-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-pack
   */
  KhtmlBoxPack(value: PropertyValue<'KhtmlBoxPack', T>): this {
    return this.write('KhtmlBoxPack', value);
  }
  /**
   * 兼容属性 -khtml-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-line-break
   */
  KhtmlLineBreak(value: PropertyValue<'KhtmlLineBreak', T>): this {
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
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @example
   * s.opacity(0.5)
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-opacity
   */
  KhtmlOpacity(value: PropertyValue<'KhtmlOpacity', T>): this {
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
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.userSelect("all")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-user-select
   */
  KhtmlUserSelect(value: PropertyValue<'KhtmlUserSelect', T>): this {
    return this.write('KhtmlUserSelect', value);
  }
  /**
   * 兼容属性 -moz-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  MozAnimation(value: PropertyValue<'MozAnimation', T>): this {
    return this.write('MozAnimation', value);
  }
  /**
   * 兼容属性 -moz-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-delay
   */
  MozAnimationDelay(value: PropertyValue<'MozAnimationDelay', T>): this {
    return this.write('MozAnimationDelay', value);
  }
  /**
   * 兼容属性 -moz-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  MozAnimationDirection(value: PropertyValue<'MozAnimationDirection', T>): this {
    return this.write('MozAnimationDirection', value);
  }
  /**
   * 兼容属性 -moz-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-duration
   */
  MozAnimationDuration(value: PropertyValue<'MozAnimationDuration', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.animationFillMode("forwards")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-fill-mode
   */
  MozAnimationFillMode(value: PropertyValue<'MozAnimationFillMode', T>): this {
    return this.write('MozAnimationFillMode', value);
  }
  /**
   * 兼容属性 -moz-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-iteration-count
   */
  MozAnimationIterationCount(value: PropertyValue<'MozAnimationIterationCount', T>): this {
    return this.write('MozAnimationIterationCount', value);
  }
  /**
   * 兼容属性 -moz-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-name
   */
  MozAnimationName(value: PropertyValue<'MozAnimationName', T>): this {
    return this.write('MozAnimationName', value);
  }
  /**
   * 兼容属性 -moz-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-play-state
   */
  MozAnimationPlayState(value: PropertyValue<'MozAnimationPlayState', T>): this {
    return this.write('MozAnimationPlayState', value);
  }
  /**
   * 兼容属性 -moz-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  MozAnimationTimingFunction(value: PropertyValue<'MozAnimationTimingFunction', T>): this {
    return this.write('MozAnimationTimingFunction', value);
  }
  /**
   * 兼容属性 -moz-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  MozAppearance(value: PropertyValue<'MozAppearance', T>): this {
    return this.write('MozAppearance', value);
  }
  /**
   * 兼容属性 -moz-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-backface-visibility
   */
  MozBackfaceVisibility(value: PropertyValue<'MozBackfaceVisibility', T>): this {
    return this.write('MozBackfaceVisibility', value);
  }
  /**
   * 兼容属性 -moz-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  MozBackgroundClip(value: PropertyValue<'MozBackgroundClip', T>): this {
    return this.write('MozBackgroundClip', value);
  }
  /**
   * 兼容属性 -moz-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  MozBackgroundOrigin(value: PropertyValue<'MozBackgroundOrigin', T>): this {
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
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @example
   * s.backgroundSize("cover").backgroundPosition("center")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-size
   */
  MozBackgroundSize(value: PropertyValue<'MozBackgroundSize', T>): this {
    return this.write('MozBackgroundSize', value);
  }
  /**
   * 兼容属性 -moz-binding；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的 XBL 绑定入口；仅描述历史兼容行为，不适用于现代组件实现。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-binding
   */
  MozBinding(value: PropertyValue<'MozBinding', T>): this {
    return this.write('MozBinding', value);
  }
  /**
   * 兼容属性 -moz-border-bottom-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的下边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-bottom-colors
   */
  MozBorderBottomColors(value: PropertyValue<'MozBorderBottomColors', T>): this {
    return this.write('MozBorderBottomColors', value);
  }
  /**
   * 兼容属性 -moz-border-end-color；优先参考标准属性 borderInlineEndColor及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-color
   */
  MozBorderEndColor(value: PropertyValue<'MozBorderEndColor', T>): this {
    return this.write('MozBorderEndColor', value);
  }
  /**
   * 兼容属性 -moz-border-end-style；优先参考标准属性 borderInlineEndStyle及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  MozBorderEndStyle(value: PropertyValue<'MozBorderEndStyle', T>): this {
    return this.write('MozBorderEndStyle', value);
  }
  /**
   * 兼容属性 -moz-border-end-width；优先参考标准属性 borderInlineEndWidth及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  MozBorderEndWidth(value: PropertyValue<'MozBorderEndWidth', T>): this {
    return this.write('MozBorderEndWidth', value);
  }
  /**
   * 兼容属性 -moz-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  MozBorderImage(value: PropertyValue<'MozBorderImage', T>): this {
    return this.write('MozBorderImage', value);
  }
  /**
   * 兼容属性 -moz-border-left-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的左边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-left-colors
   */
  MozBorderLeftColors(value: PropertyValue<'MozBorderLeftColors', T>): this {
    return this.write('MozBorderLeftColors', value);
  }
  /**
   * 兼容属性 -moz-border-radius；优先参考标准属性及浏览器支持范围。
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   * @example
   * s.borderRadius("8px")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius
   */
  MozBorderRadius(value: PropertyValue<'MozBorderRadius', T>): this {
    return this.write('MozBorderRadius', value);
  }
  /**
   * 兼容属性 -moz-border-radius-bottomleft；优先参考标准属性 borderBottomLeftRadius及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-bottomleft
   */
  MozBorderRadiusBottomleft(value: PropertyValue<'MozBorderRadiusBottomleft', T>): this {
    return this.write('MozBorderRadiusBottomleft', value);
  }
  /**
   * 兼容属性 -moz-border-radius-bottomright；优先参考标准属性 borderBottomRightRadius及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-bottomright
   */
  MozBorderRadiusBottomright(value: PropertyValue<'MozBorderRadiusBottomright', T>): this {
    return this.write('MozBorderRadiusBottomright', value);
  }
  /**
   * 兼容属性 -moz-border-radius-topleft；优先参考标准属性 borderTopLeftRadius及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-topleft
   */
  MozBorderRadiusTopleft(value: PropertyValue<'MozBorderRadiusTopleft', T>): this {
    return this.write('MozBorderRadiusTopleft', value);
  }
  /**
   * 兼容属性 -moz-border-radius-topright；优先参考标准属性 borderTopRightRadius及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-topright
   */
  MozBorderRadiusTopright(value: PropertyValue<'MozBorderRadiusTopright', T>): this {
    return this.write('MozBorderRadiusTopright', value);
  }
  /**
   * 兼容属性 -moz-border-right-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的右边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-right-colors
   */
  MozBorderRightColors(value: PropertyValue<'MozBorderRightColors', T>): this {
    return this.write('MozBorderRightColors', value);
  }
  /**
   * 兼容属性 -moz-border-start-color；优先参考标准属性 borderInlineStartColor及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-color
   */
  MozBorderStartColor(value: PropertyValue<'MozBorderStartColor', T>): this {
    return this.write('MozBorderStartColor', value);
  }
  /**
   * 兼容属性 -moz-border-start-style；优先参考标准属性 borderInlineStartStyle及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  MozBorderStartStyle(value: PropertyValue<'MozBorderStartStyle', T>): this {
    return this.write('MozBorderStartStyle', value);
  }
  /**
   * 兼容属性 -moz-border-top-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的上边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-top-colors
   */
  MozBorderTopColors(value: PropertyValue<'MozBorderTopColors', T>): this {
    return this.write('MozBorderTopColors', value);
  }
  /**
   * 兼容属性 -moz-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-align
   */
  MozBoxAlign(value: PropertyValue<'MozBoxAlign', T>): this {
    return this.write('MozBoxAlign', value);
  }
  /**
   * 兼容属性 -moz-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-direction
   */
  MozBoxDirection(value: PropertyValue<'MozBoxDirection', T>): this {
    return this.write('MozBoxDirection', value);
  }
  /**
   * 兼容属性 -moz-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-flex
   */
  MozBoxFlex(value: PropertyValue<'MozBoxFlex', T>): this {
    return this.write('MozBoxFlex', value);
  }
  /**
   * 兼容属性 -moz-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-ordinal-group
   */
  MozBoxOrdinalGroup(value: PropertyValue<'MozBoxOrdinalGroup', T>): this {
    return this.write('MozBoxOrdinalGroup', value);
  }
  /**
   * 兼容属性 -moz-box-orient；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  MozBoxOrient(value: PropertyValue<'MozBoxOrient', T>): this {
    return this.write('MozBoxOrient', value);
  }
  /**
   * 兼容属性 -moz-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-pack
   */
  MozBoxPack(value: PropertyValue<'MozBoxPack', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.boxShadow("0 2px 8px rgb(0 0 0 / 0.15)")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-shadow
   */
  MozBoxShadow(value: PropertyValue<'MozBoxShadow', T>): this {
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
   * CSS 规范初始值：`content-box`，不同于浏览器默认样式表。
   * @example
   * s.boxSizing("border-box").width("20rem").padding("1rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-sizing
   */
  MozBoxSizing(value: PropertyValue<'MozBoxSizing', T>): this {
    return this.write('MozBoxSizing', value);
  }
  /**
   * 兼容属性 -moz-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-count
   */
  MozColumnCount(value: PropertyValue<'MozColumnCount', T>): this {
    return this.write('MozColumnCount', value);
  }
  /**
   * 兼容属性 -moz-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：`balance`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-fill
   */
  MozColumnFill(value: PropertyValue<'MozColumnFill', T>): this {
    return this.write('MozColumnFill', value);
  }
  /**
   * 兼容属性 -moz-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule
   */
  MozColumnRule(value: PropertyValue<'MozColumnRule', T>): this {
    return this.write('MozColumnRule', value);
  }
  /**
   * 兼容属性 -moz-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-color
   */
  MozColumnRuleColor(value: PropertyValue<'MozColumnRuleColor', T>): this {
    return this.write('MozColumnRuleColor', value);
  }
  /**
   * 兼容属性 -moz-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  MozColumnRuleStyle(value: PropertyValue<'MozColumnRuleStyle', T>): this {
    return this.write('MozColumnRuleStyle', value);
  }
  /**
   * 兼容属性 -moz-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  MozColumnRuleWidth(value: PropertyValue<'MozColumnRuleWidth', T>): this {
    return this.write('MozColumnRuleWidth', value);
  }
  /**
   * 兼容属性 -moz-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-columns
   */
  MozColumns(value: PropertyValue<'MozColumns', T>): this {
    return this.write('MozColumns', value);
  }
  /**
   * 兼容属性 -moz-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-width
   */
  MozColumnWidth(value: PropertyValue<'MozColumnWidth', T>): this {
    return this.write('MozColumnWidth', value);
  }
  /**
   * 兼容属性 -moz-context-properties；优先参考标准属性及浏览器支持范围。
   * 声明可传递给被引用 SVG 图像的上下文绘制属性，如 fill 和 stroke。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  MozContextProperties(value: PropertyValue<'MozContextProperties', T>): this {
    return this.write('MozContextProperties', value);
  }
  /**
   * 兼容属性 -moz-float-edge；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定浮动元素边缘计算使用的盒子范围。
   *
   * CSS 规范初始值：`content-box`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  MozFloatEdge(value: PropertyValue<'MozFloatEdge', T>): this {
    return this.write('MozFloatEdge', value);
  }
  /**
   * 兼容属性 -moz-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-feature-settings
   */
  MozFontFeatureSettings(value: PropertyValue<'MozFontFeatureSettings', T>): this {
    return this.write('MozFontFeatureSettings', value);
  }
  /**
   * 兼容属性 -moz-font-language-override；优先参考标准属性及浏览器支持范围。
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-language-override
   */
  MozFontLanguageOverride(value: PropertyValue<'MozFontLanguageOverride', T>): this {
    return this.write('MozFontLanguageOverride', value);
  }
  /**
   * 兼容属性 -moz-force-broken-image-icon；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中控制损坏图像占位图标的显示。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-force-broken-image-icon
   */
  MozForceBrokenImageIcon(value: PropertyValue<'MozForceBrokenImageIcon', T>): this {
    return this.write('MozForceBrokenImageIcon', value);
  }
  /**
   * 兼容属性 -moz-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-hyphens
   */
  MozHyphens(value: PropertyValue<'MozHyphens', T>): this {
    return this.write('MozHyphens', value);
  }
  /**
   * 兼容属性 -moz-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-end
   */
  MozMarginEnd(value: PropertyValue<'MozMarginEnd', T>): this {
    return this.write('MozMarginEnd', value);
  }
  /**
   * 兼容属性 -moz-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-start
   */
  MozMarginStart(value: PropertyValue<'MozMarginStart', T>): this {
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
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @example
   * s.opacity(0.5)
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-opacity
   */
  MozOpacity(value: PropertyValue<'MozOpacity', T>): this {
    return this.write('MozOpacity', value);
  }
  /**
   * 兼容属性 -moz-orient；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定特定控件的显示方向，作用依赖控件类型。
   *
   * CSS 规范初始值：`inline`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  MozOrient(value: PropertyValue<'MozOrient', T>): this {
    return this.write('MozOrient', value);
  }
  /**
   * 兼容属性 -moz-osx-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 macOS 上文字抗锯齿方式；效果依赖平台和字体渲染实现。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  MozOsxFontSmoothing(value: PropertyValue<'MozOsxFontSmoothing', T>): this {
    return this.write('MozOsxFontSmoothing', value);
  }
  /**
   * 兼容属性 -moz-outline；优先参考标准属性及浏览器支持范围。
   * 设置盒子外围轮廓线的宽度、线型和颜色，不占布局空间。
   *
   * 不占布局空间，可用 outline-offset 调整距离；键盘焦点指示不应被无替代地移除。
   *
   * 适用场景：控件焦点指示和不影响布局的轮廓。
   * @example
   * s.select(":focus-visible", s.outline("2px solid currentColor").outlineOffset("2px"))
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline
   */
  MozOutline(value: PropertyValue<'MozOutline', T>): this {
    return this.write('MozOutline', value);
  }
  /**
   * 兼容属性 -moz-outline-color；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-color
   */
  MozOutlineColor(value: PropertyValue<'MozOutlineColor', T>): this {
    return this.write('MozOutlineColor', value);
  }
  /**
   * 兼容属性 -moz-outline-radius；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的轮廓圆角简写；不同于元素边框本身的圆角。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius
   */
  MozOutlineRadius(value: PropertyValue<'MozOutlineRadius', T>): this {
    return this.write('MozOutlineRadius', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-bottomleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左下角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomleft
   */
  MozOutlineRadiusBottomleft(value: PropertyValue<'MozOutlineRadiusBottomleft', T>): this {
    return this.write('MozOutlineRadiusBottomleft', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-bottomright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右下角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomright
   */
  MozOutlineRadiusBottomright(value: PropertyValue<'MozOutlineRadiusBottomright', T>): this {
    return this.write('MozOutlineRadiusBottomright', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-topleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左上角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topleft
   */
  MozOutlineRadiusTopleft(value: PropertyValue<'MozOutlineRadiusTopleft', T>): this {
    return this.write('MozOutlineRadiusTopleft', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-topright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右上角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topright
   */
  MozOutlineRadiusTopright(value: PropertyValue<'MozOutlineRadiusTopright', T>): this {
    return this.write('MozOutlineRadiusTopright', value);
  }
  /**
   * 兼容属性 -moz-outline-style；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  MozOutlineStyle(value: PropertyValue<'MozOutlineStyle', T>): this {
    return this.write('MozOutlineStyle', value);
  }
  /**
   * 兼容属性 -moz-outline-width；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-width
   */
  MozOutlineWidth(value: PropertyValue<'MozOutlineWidth', T>): this {
    return this.write('MozOutlineWidth', value);
  }
  /**
   * 兼容属性 -moz-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-end
   */
  MozPaddingEnd(value: PropertyValue<'MozPaddingEnd', T>): this {
    return this.write('MozPaddingEnd', value);
  }
  /**
   * 兼容属性 -moz-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-start
   */
  MozPaddingStart(value: PropertyValue<'MozPaddingStart', T>): this {
    return this.write('MozPaddingStart', value);
  }
  /**
   * 兼容属性 -moz-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective
   */
  MozPerspective(value: PropertyValue<'MozPerspective', T>): this {
    return this.write('MozPerspective', value);
  }
  /**
   * 兼容属性 -moz-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  MozPerspectiveOrigin(value: PropertyValue<'MozPerspectiveOrigin', T>): this {
    return this.write('MozPerspectiveOrigin', value);
  }
  /**
   * 兼容属性 -moz-stack-sizing；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 堆叠布局中决定子项尺寸是否参与堆叠容器的尺寸计算。
   *
   * CSS 规范初始值：`stretch-to-fit`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  MozStackSizing(value: PropertyValue<'MozStackSizing', T>): this {
    return this.write('MozStackSizing', value);
  }
  /**
   * 兼容属性 -moz-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：`8`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-tab-size
   */
  MozTabSize(value: PropertyValue<'MozTabSize', T>): this {
    return this.write('MozTabSize', value);
  }
  /**
   * 兼容属性 -moz-text-align-last；优先参考标准属性及浏览器支持范围。
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  MozTextAlignLast(value: PropertyValue<'MozTextAlignLast', T>): this {
    return this.write('MozTextAlignLast', value);
  }
  /**
   * 兼容属性 -moz-text-blink；优先参考标准属性及浏览器支持范围。
   * 旧版文字闪烁效果开关；现代内容不应依赖该兼容属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-blink
   */
  MozTextBlink(value: PropertyValue<'MozTextBlink', T>): this {
    return this.write('MozTextBlink', value);
  }
  /**
   * 兼容属性 -moz-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-color
   */
  MozTextDecorationColor(value: PropertyValue<'MozTextDecorationColor', T>): this {
    return this.write('MozTextDecorationColor', value);
  }
  /**
   * 兼容属性 -moz-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  MozTextDecorationLine(value: PropertyValue<'MozTextDecorationLine', T>): this {
    return this.write('MozTextDecorationLine', value);
  }
  /**
   * 兼容属性 -moz-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：`solid`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-style
   */
  MozTextDecorationStyle(value: PropertyValue<'MozTextDecorationStyle', T>): this {
    return this.write('MozTextDecorationStyle', value);
  }
  /**
   * 兼容属性 -moz-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-size-adjust
   */
  MozTextSizeAdjust(value: PropertyValue<'MozTextSizeAdjust', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.transform("translateX(8px) scale(1.05)")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform
   */
  MozTransform(value: PropertyValue<'MozTransform', T>): this {
    return this.write('MozTransform', value);
  }
  /**
   * 兼容属性 -moz-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  MozTransformOrigin(value: PropertyValue<'MozTransformOrigin', T>): this {
    return this.write('MozTransformOrigin', value);
  }
  /**
   * 兼容属性 -moz-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：`flat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-style
   */
  MozTransformStyle(value: PropertyValue<'MozTransformStyle', T>): this {
    return this.write('MozTransformStyle', value);
  }
  /**
   * 兼容属性 -moz-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   * @example
   * s.transition("opacity 160ms ease")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  MozTransition(value: PropertyValue<'MozTransition', T>): this {
    return this.write('MozTransition', value);
  }
  /**
   * 兼容属性 -moz-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-delay
   */
  MozTransitionDelay(value: PropertyValue<'MozTransitionDelay', T>): this {
    return this.write('MozTransitionDelay', value);
  }
  /**
   * 兼容属性 -moz-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-duration
   */
  MozTransitionDuration(value: PropertyValue<'MozTransitionDuration', T>): this {
    return this.write('MozTransitionDuration', value);
  }
  /**
   * 兼容属性 -moz-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-property
   */
  MozTransitionProperty(value: PropertyValue<'MozTransitionProperty', T>): this {
    return this.write('MozTransitionProperty', value);
  }
  /**
   * 兼容属性 -moz-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  MozTransitionTimingFunction(value: PropertyValue<'MozTransitionTimingFunction', T>): this {
    return this.write('MozTransitionTimingFunction', value);
  }
  /**
   * 兼容属性 -moz-user-focus；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Gecko 元素的用户焦点行为，现代交互优先使用标准焦点机制。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  MozUserFocus(value: PropertyValue<'MozUserFocus', T>): this {
    return this.write('MozUserFocus', value);
  }
  /**
   * 兼容属性 -moz-user-input；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Gecko 元素是否接受用户输入，现代控件使用标准 disabled/readonly 等语义。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-input
   */
  MozUserInput(value: PropertyValue<'MozUserInput', T>): this {
    return this.write('MozUserInput', value);
  }
  /**
   * 兼容属性 -moz-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * CSS 规范初始值：`read-only`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  MozUserModify(value: PropertyValue<'MozUserModify', T>): this {
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
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.userSelect("all")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-select
   */
  MozUserSelect(value: PropertyValue<'MozUserSelect', T>): this {
    return this.write('MozUserSelect', value);
  }
  /**
   * 兼容属性 -moz-window-dragging；优先参考标准属性及浏览器支持范围。
   * 控制区域能否作为宿主窗口的拖动区域，作用限于支持它的特定环境。
   *
   * CSS 规范初始值：`drag`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  MozWindowDragging(value: PropertyValue<'MozWindowDragging', T>): this {
    return this.write('MozWindowDragging', value);
  }
  /**
   * 兼容属性 -moz-window-shadow；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Gecko 宿主窗口阴影的预设，效果依赖窗口与操作系统。
   *
   * CSS 规范初始值：`default`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  MozWindowShadow(value: PropertyValue<'MozWindowShadow', T>): this {
    return this.write('MozWindowShadow', value);
  }
  /**
   * 兼容属性 -ms-accelerator；优先参考标准属性及浏览器支持范围。
   * 旧版 Microsoft 浏览器中控制快捷键提示字符是否显示。
   *
   * CSS 规范初始值：`false`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-accelerator
   */
  msAccelerator(value: PropertyValue<'msAccelerator', T>): this {
    return this.write('msAccelerator', value);
  }
  /**
   * 兼容属性 -ms-block-progression；优先参考标准属性及浏览器支持范围。
   * 旧版块内容的排列方向，现代排版优先使用 writing-mode。
   *
   * CSS 规范初始值：`tb`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  msBlockProgression(value: PropertyValue<'msBlockProgression', T>): this {
    return this.write('msBlockProgression', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-chaining；优先参考标准属性及浏览器支持范围。
   * 控制缩放操作到达边界后是否继续传递给父级缩放区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-chaining
   */
  msContentZoomChaining(value: PropertyValue<'msContentZoomChaining', T>): this {
    return this.write('msContentZoomChaining', value);
  }
  /**
   * 兼容属性 -ms-content-zooming；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 触控内容缩放是否启用。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zooming
   */
  msContentZooming(value: PropertyValue<'msContentZooming', T>): this {
    return this.write('msContentZooming', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版触控内容缩放的最小和最大倍率。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit
   */
  msContentZoomLimit(value: PropertyValue<'msContentZoomLimit', T>): this {
    return this.write('msContentZoomLimit', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-limit-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最大倍率。
   *
   * CSS 规范初始值：`400%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-max
   */
  msContentZoomLimitMax(value: PropertyValue<'msContentZoomLimitMax', T>): this {
    return this.write('msContentZoomLimitMax', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-limit-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最小倍率。
   *
   * CSS 规范初始值：`100%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-min
   */
  msContentZoomLimitMin(value: PropertyValue<'msContentZoomLimitMin', T>): this {
    return this.write('msContentZoomLimitMin', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-snap；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版内容缩放吸附的方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  msContentZoomSnap(value: PropertyValue<'msContentZoomSnap', T>): this {
    return this.write('msContentZoomSnap', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-snap-points；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放操作可以吸附的倍率位置。
   *
   * CSS 规范初始值：`snapInterval(0%, 100%)`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-points
   */
  msContentZoomSnapPoints(value: PropertyValue<'msContentZoomSnapPoints', T>): this {
    return this.write('msContentZoomSnapPoints', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-snap-type；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放吸附的强制程度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-type
   */
  msContentZoomSnapType(value: PropertyValue<'msContentZoomSnapType', T>): this {
    return this.write('msContentZoomSnapType', value);
  }
  /**
   * 兼容属性 -ms-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-filter
   */
  msFilter(value: PropertyValue<'msFilter', T>): this {
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
   * @example
   * s.flex("1 1 0%")
   * @example
   * s.flex("none")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  msFlex(value: PropertyValue<'msFlex', T>): this {
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
   * CSS 规范初始值：`row`，不同于浏览器默认样式表。
   * @example
   * s.display("flex").flexDirection("column").gap("1rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-direction
   */
  msFlexDirection(value: PropertyValue<'msFlexDirection', T>): this {
    return this.write('msFlexDirection', value);
  }
  /**
   * 兼容属性 -ms-flex-positive；优先参考标准属性 flexGrow及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-positive
   */
  msFlexPositive(value: PropertyValue<'msFlexPositive', T>): this {
    return this.write('msFlexPositive', value);
  }
  /**
   * 兼容属性 -ms-flow-from；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中指定接收哪个命名内容流。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-from
   */
  msFlowFrom(value: PropertyValue<'msFlowFrom', T>): this {
    return this.write('msFlowFrom', value);
  }
  /**
   * 兼容属性 -ms-flow-into；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中把元素内容放入指定命名流。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-into
   */
  msFlowInto(value: PropertyValue<'msFlowInto', T>): this {
    return this.write('msFlowInto', value);
  }
  /**
   * 兼容属性 -ms-grid-columns；优先参考标准属性 gridTemplateColumns及浏览器支持范围。
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  msGridColumns(value: PropertyValue<'msGridColumns', T>): this {
    return this.write('msGridColumns', value);
  }
  /**
   * 兼容属性 -ms-grid-rows；优先参考标准属性 gridTemplateRows及浏览器支持范围。
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  msGridRows(value: PropertyValue<'msGridRows', T>): this {
    return this.write('msGridRows', value);
  }
  /**
   * 兼容属性 -ms-high-contrast-adjust；优先参考标准属性及浏览器支持范围。
   * 控制旧版高对比度模式是否调整作者颜色；现代环境优先使用 forced-color-adjust。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-high-contrast-adjust
   */
  msHighContrastAdjust(value: PropertyValue<'msHighContrastAdjust', T>): this {
    return this.write('msHighContrastAdjust', value);
  }
  /**
   * 兼容属性 -ms-hyphenate-limit-chars；优先参考标准属性及浏览器支持范围。
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-chars
   */
  msHyphenateLimitChars(value: PropertyValue<'msHyphenateLimitChars', T>): this {
    return this.write('msHyphenateLimitChars', value);
  }
  /**
   * 兼容属性 -ms-hyphenate-limit-lines；优先参考标准属性及浏览器支持范围。
   * 限制连续使用断字连字符的文本行数。
   *
   * CSS 规范初始值：`no-limit`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-lines
   */
  msHyphenateLimitLines(value: PropertyValue<'msHyphenateLimitLines', T>): this {
    return this.write('msHyphenateLimitLines', value);
  }
  /**
   * 兼容属性 -ms-hyphenate-limit-zone；优先参考标准属性及浏览器支持范围。
   * 指定允许开始断字处理的行末区域。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-zone
   */
  msHyphenateLimitZone(value: PropertyValue<'msHyphenateLimitZone', T>): this {
    return this.write('msHyphenateLimitZone', value);
  }
  /**
   * 兼容属性 -ms-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphens
   */
  msHyphens(value: PropertyValue<'msHyphens', T>): this {
    return this.write('msHyphens', value);
  }
  /**
   * 兼容属性 -ms-ime-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版输入法候选窗口相对于编辑区域的对齐位置。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-align
   */
  msImeAlign(value: PropertyValue<'msImeAlign', T>): this {
    return this.write('msImeAlign', value);
  }
  /**
   * 兼容属性 -ms-ime-mode；优先参考标准属性及浏览器支持范围。
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-mode
   */
  msImeMode(value: PropertyValue<'msImeMode', T>): this {
    return this.write('msImeMode', value);
  }
  /**
   * 兼容属性 -ms-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  msLineBreak(value: PropertyValue<'msLineBreak', T>): this {
    return this.write('msLineBreak', value);
  }
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
  msOrder(value: PropertyValue<'msOrder', T>): this {
    return this.write('msOrder', value);
  }
  /**
   * 兼容属性 -ms-overflow-style；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Microsoft 浏览器滚动条的呈现方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  msOverflowStyle(value: PropertyValue<'msOverflowStyle', T>): this {
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
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * s.overflowX("auto")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-x
   */
  msOverflowX(value: PropertyValue<'msOverflowX', T>): this {
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
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @example
   * s.maxHeight("20rem").overflowY("auto")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-y
   */
  msOverflowY(value: PropertyValue<'msOverflowY', T>): this {
    return this.write('msOverflowY', value);
  }
  /**
   * 兼容属性 -ms-scrollbar3dlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的亮边颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar3dlight-color
   */
  msScrollbar3dlightColor(value: PropertyValue<'msScrollbar3dlightColor', T>): this {
    return this.write('msScrollbar3dlightColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-arrow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条箭头颜色。
   *
   * CSS 规范初始值：`ButtonText`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-arrow-color
   */
  msScrollbarArrowColor(value: PropertyValue<'msScrollbarArrowColor', T>): this {
    return this.write('msScrollbarArrowColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-base-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条的基础颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-base-color
   */
  msScrollbarBaseColor(value: PropertyValue<'msScrollbarBaseColor', T>): this {
    return this.write('msScrollbarBaseColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-darkshadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的深阴影颜色。
   *
   * CSS 规范初始值：`ThreeDDarkShadow`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-darkshadow-color
   */
  msScrollbarDarkshadowColor(value: PropertyValue<'msScrollbarDarkshadowColor', T>): this {
    return this.write('msScrollbarDarkshadowColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-face-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条滑块表面颜色。
   *
   * CSS 规范初始值：`ThreeDFace`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-face-color
   */
  msScrollbarFaceColor(value: PropertyValue<'msScrollbarFaceColor', T>): this {
    return this.write('msScrollbarFaceColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条高亮边缘颜色。
   *
   * CSS 规范初始值：`ThreeDHighlight`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-highlight-color
   */
  msScrollbarHighlightColor(value: PropertyValue<'msScrollbarHighlightColor', T>): this {
    return this.write('msScrollbarHighlightColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-shadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条阴影边缘颜色。
   *
   * CSS 规范初始值：`ThreeDDarkShadow`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-shadow-color
   */
  msScrollbarShadowColor(value: PropertyValue<'msScrollbarShadowColor', T>): this {
    return this.write('msScrollbarShadowColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-track-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条轨道颜色。
   *
   * CSS 规范初始值：`Scrollbar`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-track-color
   */
  msScrollbarTrackColor(value: PropertyValue<'msScrollbarTrackColor', T>): this {
    return this.write('msScrollbarTrackColor', value);
  }
  /**
   * 兼容属性 -ms-scroll-chaining；优先参考标准属性及浏览器支持范围。
   * 控制滚动到达边界后是否传递给祖先滚动容器。
   *
   * CSS 规范初始值：`chained`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-chaining
   */
  msScrollChaining(value: PropertyValue<'msScrollChaining', T>): this {
    return this.write('msScrollChaining', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版滚动区域的水平和垂直边界。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit
   */
  msScrollLimit(value: PropertyValue<'msScrollLimit', T>): this {
    return this.write('msScrollLimit', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-x-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大水平位置。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-max
   */
  msScrollLimitXMax(value: PropertyValue<'msScrollLimitXMax', T>): this {
    return this.write('msScrollLimitXMax', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-x-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小水平位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-min
   */
  msScrollLimitXMin(value: PropertyValue<'msScrollLimitXMin', T>): this {
    return this.write('msScrollLimitXMin', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-y-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大垂直位置。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-max
   */
  msScrollLimitYMax(value: PropertyValue<'msScrollLimitYMax', T>): this {
    return this.write('msScrollLimitYMax', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-y-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小垂直位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-min
   */
  msScrollLimitYMin(value: PropertyValue<'msScrollLimitYMin', T>): this {
    return this.write('msScrollLimitYMin', value);
  }
  /**
   * 兼容属性 -ms-scroll-rails；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控滚动是否锁定主要滚动轴。
   *
   * CSS 规范初始值：`railed`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-rails
   */
  msScrollRails(value: PropertyValue<'msScrollRails', T>): this {
    return this.write('msScrollRails', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-points-x；优先参考标准属性及浏览器支持范围。
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`snapInterval(0px, 100%)`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-x
   */
  msScrollSnapPointsX(value: PropertyValue<'msScrollSnapPointsX', T>): this {
    return this.write('msScrollSnapPointsX', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-points-y；优先参考标准属性及浏览器支持范围。
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`snapInterval(0px, 100%)`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-y
   */
  msScrollSnapPointsY(value: PropertyValue<'msScrollSnapPointsY', T>): this {
    return this.write('msScrollSnapPointsY', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-type；优先参考标准属性及浏览器支持范围。
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.scrollSnapType("x mandatory")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-type
   */
  msScrollSnapType(value: PropertyValue<'msScrollSnapType', T>): this {
    return this.write('msScrollSnapType', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-x；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版水平滚动吸附方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-x
   */
  msScrollSnapX(value: PropertyValue<'msScrollSnapX', T>): this {
    return this.write('msScrollSnapX', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-y；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版垂直滚动吸附方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-y
   */
  msScrollSnapY(value: PropertyValue<'msScrollSnapY', T>): this {
    return this.write('msScrollSnapY', value);
  }
  /**
   * 兼容属性 -ms-scroll-translation；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 环境中的滚动位移呈现方式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-translation
   */
  msScrollTranslation(value: PropertyValue<'msScrollTranslation', T>): this {
    return this.write('msScrollTranslation', value);
  }
  /**
   * 兼容属性 -ms-text-autospace；优先参考标准属性及浏览器支持范围。
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  msTextAutospace(value: PropertyValue<'msTextAutospace', T>): this {
    return this.write('msTextAutospace', value);
  }
  /**
   * 兼容属性 -ms-text-combine-horizontal；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-combine-horizontal
   */
  msTextCombineHorizontal(value: PropertyValue<'msTextCombineHorizontal', T>): this {
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
   * CSS 规范初始值：`clip`，不同于浏览器默认样式表。
   * @example
   * s.maxWidth("12rem").whiteSpace("nowrap").overflow("hidden").textOverflow("ellipsis")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-overflow
   */
  msTextOverflow(value: PropertyValue<'msTextOverflow', T>): this {
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
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.touchAction("pan-y")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  msTouchAction(value: PropertyValue<'msTouchAction', T>): this {
    return this.write('msTouchAction', value);
  }
  /**
   * 兼容属性 -ms-touch-select；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控文字选择的交互方式。
   *
   * CSS 规范初始值：`grippers`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-select
   */
  msTouchSelect(value: PropertyValue<'msTouchSelect', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.transform("translateX(8px) scale(1.05)")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform
   */
  msTransform(value: PropertyValue<'msTransform', T>): this {
    return this.write('msTransform', value);
  }
  /**
   * 兼容属性 -ms-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  msTransformOrigin(value: PropertyValue<'msTransformOrigin', T>): this {
    return this.write('msTransformOrigin', value);
  }
  /**
   * 兼容属性 -ms-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   * @example
   * s.transition("opacity 160ms ease")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  msTransition(value: PropertyValue<'msTransition', T>): this {
    return this.write('msTransition', value);
  }
  /**
   * 兼容属性 -ms-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-delay
   */
  msTransitionDelay(value: PropertyValue<'msTransitionDelay', T>): this {
    return this.write('msTransitionDelay', value);
  }
  /**
   * 兼容属性 -ms-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-duration
   */
  msTransitionDuration(value: PropertyValue<'msTransitionDuration', T>): this {
    return this.write('msTransitionDuration', value);
  }
  /**
   * 兼容属性 -ms-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-property
   */
  msTransitionProperty(value: PropertyValue<'msTransitionProperty', T>): this {
    return this.write('msTransitionProperty', value);
  }
  /**
   * 兼容属性 -ms-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  msTransitionTimingFunction(value: PropertyValue<'msTransitionTimingFunction', T>): this {
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
   * CSS 规范初始值：`text`，不同于浏览器默认样式表。
   * @example
   * s.userSelect("all")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-user-select
   */
  msUserSelect(value: PropertyValue<'msUserSelect', T>): this {
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
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.wordBreak("normal")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-word-break
   */
  msWordBreak(value: PropertyValue<'msWordBreak', T>): this {
    return this.write('msWordBreak', value);
  }
  /**
   * 兼容属性 -ms-wrap-flow；优先参考标准属性及浏览器支持范围。
   * 控制旧版排斥形状周围的内容环绕方向。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  msWrapFlow(value: PropertyValue<'msWrapFlow', T>): this {
    return this.write('msWrapFlow', value);
  }
  /**
   * 兼容属性 -ms-wrap-margin；优先参考标准属性及浏览器支持范围。
   * 设置旧版排斥形状与环绕内容之间的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-margin
   */
  msWrapMargin(value: PropertyValue<'msWrapMargin', T>): this {
    return this.write('msWrapMargin', value);
  }
  /**
   * 兼容属性 -ms-wrap-through；优先参考标准属性及浏览器支持范围。
   * 控制旧版元素是否参与排斥形状的内容环绕。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-through
   */
  msWrapThrough(value: PropertyValue<'msWrapThrough', T>): this {
    return this.write('msWrapThrough', value);
  }
  /**
   * 兼容属性 -ms-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：`horizontal-tb`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  msWritingMode(value: PropertyValue<'msWritingMode', T>): this {
    return this.write('msWritingMode', value);
  }
  /**
   * 兼容属性 -o-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  OAnimation(value: PropertyValue<'OAnimation', T>): this {
    return this.write('OAnimation', value);
  }
  /**
   * 兼容属性 -o-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-delay
   */
  OAnimationDelay(value: PropertyValue<'OAnimationDelay', T>): this {
    return this.write('OAnimationDelay', value);
  }
  /**
   * 兼容属性 -o-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-direction
   */
  OAnimationDirection(value: PropertyValue<'OAnimationDirection', T>): this {
    return this.write('OAnimationDirection', value);
  }
  /**
   * 兼容属性 -o-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-duration
   */
  OAnimationDuration(value: PropertyValue<'OAnimationDuration', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.animationFillMode("forwards")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-fill-mode
   */
  OAnimationFillMode(value: PropertyValue<'OAnimationFillMode', T>): this {
    return this.write('OAnimationFillMode', value);
  }
  /**
   * 兼容属性 -o-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-iteration-count
   */
  OAnimationIterationCount(value: PropertyValue<'OAnimationIterationCount', T>): this {
    return this.write('OAnimationIterationCount', value);
  }
  /**
   * 兼容属性 -o-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-name
   */
  OAnimationName(value: PropertyValue<'OAnimationName', T>): this {
    return this.write('OAnimationName', value);
  }
  /**
   * 兼容属性 -o-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-play-state
   */
  OAnimationPlayState(value: PropertyValue<'OAnimationPlayState', T>): this {
    return this.write('OAnimationPlayState', value);
  }
  /**
   * 兼容属性 -o-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  OAnimationTimingFunction(value: PropertyValue<'OAnimationTimingFunction', T>): this {
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
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @example
   * s.backgroundSize("cover").backgroundPosition("center")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-background-size
   */
  OBackgroundSize(value: PropertyValue<'OBackgroundSize', T>): this {
    return this.write('OBackgroundSize', value);
  }
  /**
   * 兼容属性 -o-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-border-image
   */
  OBorderImage(value: PropertyValue<'OBorderImage', T>): this {
    return this.write('OBorderImage', value);
  }
  /**
   * 兼容属性 offset-block；优先参考标准属性 insetBlock及浏览器支持范围。
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block
   */
  offsetBlock(value: PropertyValue<'offsetBlock', T>): this {
    return this.write('offsetBlock', value);
  }
  /**
   * 兼容属性 offset-block-end；优先参考标准属性 insetBlockEnd及浏览器支持范围。
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block-end
   */
  offsetBlockEnd(value: PropertyValue<'offsetBlockEnd', T>): this {
    return this.write('offsetBlockEnd', value);
  }
  /**
   * 兼容属性 offset-block-start；优先参考标准属性 insetBlockStart及浏览器支持范围。
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block-start
   */
  offsetBlockStart(value: PropertyValue<'offsetBlockStart', T>): this {
    return this.write('offsetBlockStart', value);
  }
  /**
   * 兼容属性 offset-inline；优先参考标准属性 insetInline及浏览器支持范围。
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline
   */
  offsetInline(value: PropertyValue<'offsetInline', T>): this {
    return this.write('offsetInline', value);
  }
  /**
   * 兼容属性 offset-inline-end；优先参考标准属性 insetInlineEnd及浏览器支持范围。
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline-end
   */
  offsetInlineEnd(value: PropertyValue<'offsetInlineEnd', T>): this {
    return this.write('offsetInlineEnd', value);
  }
  /**
   * 兼容属性 offset-inline-start；优先参考标准属性 insetInlineStart及浏览器支持范围。
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline-start
   */
  offsetInlineStart(value: PropertyValue<'offsetInlineStart', T>): this {
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
   * CSS 规范初始值：`fill`，不同于浏览器默认样式表。
   * @example
   * s.width("80px").height("80px").objectFit("cover")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-fit
   */
  OObjectFit(value: PropertyValue<'OObjectFit', T>): this {
    return this.write('OObjectFit', value);
  }
  /**
   * 兼容属性 -o-object-position；优先参考标准属性及浏览器支持范围。
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-position
   */
  OObjectPosition(value: PropertyValue<'OObjectPosition', T>): this {
    return this.write('OObjectPosition', value);
  }
  /**
   * 兼容属性 -o-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：`8`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-tab-size
   */
  OTabSize(value: PropertyValue<'OTabSize', T>): this {
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
   * CSS 规范初始值：`clip`，不同于浏览器默认样式表。
   * @example
   * s.maxWidth("12rem").whiteSpace("nowrap").overflow("hidden").textOverflow("ellipsis")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-text-overflow
   */
  OTextOverflow(value: PropertyValue<'OTextOverflow', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.transform("translateX(8px) scale(1.05)")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform
   */
  OTransform(value: PropertyValue<'OTransform', T>): this {
    return this.write('OTransform', value);
  }
  /**
   * 兼容属性 -o-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform-origin
   */
  OTransformOrigin(value: PropertyValue<'OTransformOrigin', T>): this {
    return this.write('OTransformOrigin', value);
  }
  /**
   * 兼容属性 -o-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   * @example
   * s.transition("opacity 160ms ease")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  OTransition(value: PropertyValue<'OTransition', T>): this {
    return this.write('OTransition', value);
  }
  /**
   * 兼容属性 -o-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-delay
   */
  OTransitionDelay(value: PropertyValue<'OTransitionDelay', T>): this {
    return this.write('OTransitionDelay', value);
  }
  /**
   * 兼容属性 -o-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-duration
   */
  OTransitionDuration(value: PropertyValue<'OTransitionDuration', T>): this {
    return this.write('OTransitionDuration', value);
  }
  /**
   * 兼容属性 -o-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-property
   */
  OTransitionProperty(value: PropertyValue<'OTransitionProperty', T>): this {
    return this.write('OTransitionProperty', value);
  }
  /**
   * 兼容属性 -o-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  OTransitionTimingFunction(value: PropertyValue<'OTransitionTimingFunction', T>): this {
    return this.write('OTransitionTimingFunction', value);
  }
  /**
   * 兼容属性 page-break-after；优先参考标准属性 breakAfter及浏览器支持范围。
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  pageBreakAfter(value: PropertyValue<'pageBreakAfter', T>): this {
    return this.write('pageBreakAfter', value);
  }
  /**
   * 兼容属性 page-break-before；优先参考标准属性 breakBefore及浏览器支持范围。
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  pageBreakBefore(value: PropertyValue<'pageBreakBefore', T>): this {
    return this.write('pageBreakBefore', value);
  }
  /**
   * 兼容属性 page-break-inside；优先参考标准属性 breakInside及浏览器支持范围。
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-inside
   */
  pageBreakInside(value: PropertyValue<'pageBreakInside', T>): this {
    return this.write('pageBreakInside', value);
  }
  /**
   * 兼容属性 position-try-options；优先参考标准属性 positionTryFallbacks及浏览器支持范围。
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  positionTryOptions(value: PropertyValue<'positionTryOptions', T>): this {
    return this.write('positionTryOptions', value);
  }
  /**
   * 指定旧版滚动子项的吸附坐标，现代布局使用 scroll-snap-align。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  scrollSnapCoordinate(value: PropertyValue<'scrollSnapCoordinate', T>): this {
    return this.write('scrollSnapCoordinate', value);
  }
  /**
   * 指定旧版滚动容器中吸附位置对齐的目标坐标。
   *
   * CSS 规范初始值：`0px 0px`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  scrollSnapDestination(value: PropertyValue<'scrollSnapDestination', T>): this {
    return this.write('scrollSnapDestination', value);
  }
  /**
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-x
   */
  scrollSnapPointsX(value: PropertyValue<'scrollSnapPointsX', T>): this {
    return this.write('scrollSnapPointsX', value);
  }
  /**
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-y
   */
  scrollSnapPointsY(value: PropertyValue<'scrollSnapPointsY', T>): this {
    return this.write('scrollSnapPointsY', value);
  }
  /**
   * 控制旧版水平滚动吸附的强制程度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-x
   */
  scrollSnapTypeX(value: PropertyValue<'scrollSnapTypeX', T>): this {
    return this.write('scrollSnapTypeX', value);
  }
  /**
   * 控制旧版垂直滚动吸附的强制程度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-y
   */
  scrollSnapTypeY(value: PropertyValue<'scrollSnapTypeY', T>): this {
    return this.write('scrollSnapTypeY', value);
  }
  /**
   * 兼容属性 -webkit-align-content；优先参考标准属性及浏览器支持范围。
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  WebkitAlignContent(value: PropertyValue<'WebkitAlignContent', T>): this {
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
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.display("flex").alignItems("center")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-items
   */
  WebkitAlignItems(value: PropertyValue<'WebkitAlignItems', T>): this {
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
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.alignSelf("center")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  WebkitAlignSelf(value: PropertyValue<'WebkitAlignSelf', T>): this {
    return this.write('WebkitAlignSelf', value);
  }
  /**
   * 兼容属性 -webkit-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  WebkitAnimation(value: PropertyValue<'WebkitAnimation', T>): this {
    return this.write('WebkitAnimation', value);
  }
  /**
   * 兼容属性 -webkit-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-delay
   */
  WebkitAnimationDelay(value: PropertyValue<'WebkitAnimationDelay', T>): this {
    return this.write('WebkitAnimationDelay', value);
  }
  /**
   * 兼容属性 -webkit-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  WebkitAnimationDirection(value: PropertyValue<'WebkitAnimationDirection', T>): this {
    return this.write('WebkitAnimationDirection', value);
  }
  /**
   * 兼容属性 -webkit-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-duration
   */
  WebkitAnimationDuration(value: PropertyValue<'WebkitAnimationDuration', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.animationFillMode("forwards")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-fill-mode
   */
  WebkitAnimationFillMode(value: PropertyValue<'WebkitAnimationFillMode', T>): this {
    return this.write('WebkitAnimationFillMode', value);
  }
  /**
   * 兼容属性 -webkit-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-iteration-count
   */
  WebkitAnimationIterationCount(value: PropertyValue<'WebkitAnimationIterationCount', T>): this {
    return this.write('WebkitAnimationIterationCount', value);
  }
  /**
   * 兼容属性 -webkit-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-name
   */
  WebkitAnimationName(value: PropertyValue<'WebkitAnimationName', T>): this {
    return this.write('WebkitAnimationName', value);
  }
  /**
   * 兼容属性 -webkit-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-play-state
   */
  WebkitAnimationPlayState(value: PropertyValue<'WebkitAnimationPlayState', T>): this {
    return this.write('WebkitAnimationPlayState', value);
  }
  /**
   * 兼容属性 -webkit-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  WebkitAnimationTimingFunction(value: PropertyValue<'WebkitAnimationTimingFunction', T>): this {
    return this.write('WebkitAnimationTimingFunction', value);
  }
  /**
   * 兼容属性 -webkit-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  WebkitAppearance(value: PropertyValue<'WebkitAppearance', T>): this {
    return this.write('WebkitAppearance', value);
  }
  /**
   * 兼容属性 -webkit-backdrop-filter；优先参考标准属性及浏览器支持范围。
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backdrop-filter
   */
  WebkitBackdropFilter(value: PropertyValue<'WebkitBackdropFilter', T>): this {
    return this.write('WebkitBackdropFilter', value);
  }
  /**
   * 兼容属性 -webkit-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backface-visibility
   */
  WebkitBackfaceVisibility(value: PropertyValue<'WebkitBackfaceVisibility', T>): this {
    return this.write('WebkitBackfaceVisibility', value);
  }
  /**
   * 兼容属性 -webkit-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  WebkitBackgroundClip(value: PropertyValue<'WebkitBackgroundClip', T>): this {
    return this.write('WebkitBackgroundClip', value);
  }
  /**
   * 兼容属性 -webkit-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  WebkitBackgroundOrigin(value: PropertyValue<'WebkitBackgroundOrigin', T>): this {
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
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @example
   * s.backgroundSize("cover").backgroundPosition("center")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-size
   */
  WebkitBackgroundSize(value: PropertyValue<'WebkitBackgroundSize', T>): this {
    return this.write('WebkitBackgroundSize', value);
  }
  /**
   * 兼容属性 -webkit-border-before；优先参考标准属性 borderBlockStart及浏览器支持范围。
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before
   */
  WebkitBorderBefore(value: PropertyValue<'WebkitBorderBefore', T>): this {
    return this.write('WebkitBorderBefore', value);
  }
  /**
   * 兼容属性 -webkit-border-before-color；优先参考标准属性 borderBlockStartColor及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-color
   */
  WebkitBorderBeforeColor(value: PropertyValue<'WebkitBorderBeforeColor', T>): this {
    return this.write('WebkitBorderBeforeColor', value);
  }
  /**
   * 兼容属性 -webkit-border-before-style；优先参考标准属性 borderBlockStartStyle及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  WebkitBorderBeforeStyle(value: PropertyValue<'WebkitBorderBeforeStyle', T>): this {
    return this.write('WebkitBorderBeforeStyle', value);
  }
  /**
   * 兼容属性 -webkit-border-before-width；优先参考标准属性 borderBlockStartWidth及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  WebkitBorderBeforeWidth(value: PropertyValue<'WebkitBorderBeforeWidth', T>): this {
    return this.write('WebkitBorderBeforeWidth', value);
  }
  /**
   * 兼容属性 -webkit-border-bottom-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-left-radius
   */
  WebkitBorderBottomLeftRadius(value: PropertyValue<'WebkitBorderBottomLeftRadius', T>): this {
    return this.write('WebkitBorderBottomLeftRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-bottom-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-right-radius
   */
  WebkitBorderBottomRightRadius(value: PropertyValue<'WebkitBorderBottomRightRadius', T>): this {
    return this.write('WebkitBorderBottomRightRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  WebkitBorderImage(value: PropertyValue<'WebkitBorderImage', T>): this {
    return this.write('WebkitBorderImage', value);
  }
  /**
   * 兼容属性 -webkit-border-image-slice；优先参考标准属性及浏览器支持范围。
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：`100%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image-slice
   */
  WebkitBorderImageSlice(value: PropertyValue<'WebkitBorderImageSlice', T>): this {
    return this.write('WebkitBorderImageSlice', value);
  }
  /**
   * 兼容属性 -webkit-border-radius；优先参考标准属性及浏览器支持范围。
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。
   *
   * 1/2/3/4 个半径依次控制四角、两组对角、三组角和逐角。它裁剪自身背景，但不会单独保证裁剪所有后代内容。
   *
   * 适用场景：卡片、按钮、头像的圆角外观。
   * @example
   * s.borderRadius("8px")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-radius
   */
  WebkitBorderRadius(value: PropertyValue<'WebkitBorderRadius', T>): this {
    return this.write('WebkitBorderRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-top-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-left-radius
   */
  WebkitBorderTopLeftRadius(value: PropertyValue<'WebkitBorderTopLeftRadius', T>): this {
    return this.write('WebkitBorderTopLeftRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-top-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-right-radius
   */
  WebkitBorderTopRightRadius(value: PropertyValue<'WebkitBorderTopRightRadius', T>): this {
    return this.write('WebkitBorderTopRightRadius', value);
  }
  /**
   * 兼容属性 -webkit-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-align
   */
  WebkitBoxAlign(value: PropertyValue<'WebkitBoxAlign', T>): this {
    return this.write('WebkitBoxAlign', value);
  }
  /**
   * 兼容属性 -webkit-box-decoration-break；优先参考标准属性及浏览器支持范围。
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：`slice`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-decoration-break
   */
  WebkitBoxDecorationBreak(value: PropertyValue<'WebkitBoxDecorationBreak', T>): this {
    return this.write('WebkitBoxDecorationBreak', value);
  }
  /**
   * 兼容属性 -webkit-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-direction
   */
  WebkitBoxDirection(value: PropertyValue<'WebkitBoxDirection', T>): this {
    return this.write('WebkitBoxDirection', value);
  }
  /**
   * 兼容属性 -webkit-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-flex
   */
  WebkitBoxFlex(value: PropertyValue<'WebkitBoxFlex', T>): this {
    return this.write('WebkitBoxFlex', value);
  }
  /**
   * 兼容属性 -webkit-box-flex-group；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-flex-group
   */
  WebkitBoxFlexGroup(value: PropertyValue<'WebkitBoxFlexGroup', T>): this {
    return this.write('WebkitBoxFlexGroup', value);
  }
  /**
   * 兼容属性 -webkit-box-lines；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：`single`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-lines
   */
  WebkitBoxLines(value: PropertyValue<'WebkitBoxLines', T>): this {
    return this.write('WebkitBoxLines', value);
  }
  /**
   * 兼容属性 -webkit-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-ordinal-group
   */
  WebkitBoxOrdinalGroup(value: PropertyValue<'WebkitBoxOrdinalGroup', T>): this {
    return this.write('WebkitBoxOrdinalGroup', value);
  }
  /**
   * 指定旧版弹性盒的排列方向；仅为多行截断兼容保留，常规布局请使用 Flex/Grid。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  WebkitBoxOrient(value: PropertyValue<'WebkitBoxOrient', T>): this {
    return this.write('WebkitBoxOrient', value);
  }
  /**
   * 兼容属性 -webkit-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-pack
   */
  WebkitBoxPack(value: PropertyValue<'WebkitBoxPack', T>): this {
    return this.write('WebkitBoxPack', value);
  }
  /**
   * 兼容属性 -webkit-box-reflect；优先参考标准属性及浏览器支持范围。
   * 在指定方向生成元素的镜像，并可设置镜像间距和遮罩。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  WebkitBoxReflect(value: PropertyValue<'WebkitBoxReflect', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.boxShadow("0 2px 8px rgb(0 0 0 / 0.15)")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-shadow
   */
  WebkitBoxShadow(value: PropertyValue<'WebkitBoxShadow', T>): this {
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
   * CSS 规范初始值：`content-box`，不同于浏览器默认样式表。
   * @example
   * s.boxSizing("border-box").width("20rem").padding("1rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-sizing
   */
  WebkitBoxSizing(value: PropertyValue<'WebkitBoxSizing', T>): this {
    return this.write('WebkitBoxSizing', value);
  }
  /**
   * 兼容属性 -webkit-clip-path；优先参考标准属性及浏览器支持范围。
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  WebkitClipPath(value: PropertyValue<'WebkitClipPath', T>): this {
    return this.write('WebkitClipPath', value);
  }
  /**
   * 兼容属性 -webkit-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-count
   */
  WebkitColumnCount(value: PropertyValue<'WebkitColumnCount', T>): this {
    return this.write('WebkitColumnCount', value);
  }
  /**
   * 兼容属性 -webkit-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：`balance`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-fill
   */
  WebkitColumnFill(value: PropertyValue<'WebkitColumnFill', T>): this {
    return this.write('WebkitColumnFill', value);
  }
  /**
   * 兼容属性 -webkit-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule
   */
  WebkitColumnRule(value: PropertyValue<'WebkitColumnRule', T>): this {
    return this.write('WebkitColumnRule', value);
  }
  /**
   * 兼容属性 -webkit-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-color
   */
  WebkitColumnRuleColor(value: PropertyValue<'WebkitColumnRuleColor', T>): this {
    return this.write('WebkitColumnRuleColor', value);
  }
  /**
   * 兼容属性 -webkit-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  WebkitColumnRuleStyle(value: PropertyValue<'WebkitColumnRuleStyle', T>): this {
    return this.write('WebkitColumnRuleStyle', value);
  }
  /**
   * 兼容属性 -webkit-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  WebkitColumnRuleWidth(value: PropertyValue<'WebkitColumnRuleWidth', T>): this {
    return this.write('WebkitColumnRuleWidth', value);
  }
  /**
   * 兼容属性 -webkit-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-columns
   */
  WebkitColumns(value: PropertyValue<'WebkitColumns', T>): this {
    return this.write('WebkitColumns', value);
  }
  /**
   * 兼容属性 -webkit-column-span；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-span
   */
  WebkitColumnSpan(value: PropertyValue<'WebkitColumnSpan', T>): this {
    return this.write('WebkitColumnSpan', value);
  }
  /**
   * 兼容属性 -webkit-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-width
   */
  WebkitColumnWidth(value: PropertyValue<'WebkitColumnWidth', T>): this {
    return this.write('WebkitColumnWidth', value);
  }
  /**
   * 兼容属性 -webkit-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-filter
   */
  WebkitFilter(value: PropertyValue<'WebkitFilter', T>): this {
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
   * @example
   * s.flex("1 1 0%")
   * @example
   * s.flex("none")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  WebkitFlex(value: PropertyValue<'WebkitFlex', T>): this {
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
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.flexBasis("16rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  WebkitFlexBasis(value: PropertyValue<'WebkitFlexBasis', T>): this {
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
   * CSS 规范初始值：`row`，不同于浏览器默认样式表。
   * @example
   * s.display("flex").flexDirection("column").gap("1rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-direction
   */
  WebkitFlexDirection(value: PropertyValue<'WebkitFlexDirection', T>): this {
    return this.write('WebkitFlexDirection', value);
  }
  /**
   * 兼容属性 -webkit-flex-flow；优先参考标准属性及浏览器支持范围。
   * 同时设置弹性布局的主轴方向和换行方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  WebkitFlexFlow(value: PropertyValue<'WebkitFlexFlow', T>): this {
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
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @example
   * s.flexGrow(1)
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-grow
   */
  WebkitFlexGrow(value: PropertyValue<'WebkitFlexGrow', T>): this {
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
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @example
   * s.flexShrink(0)
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-shrink
   */
  WebkitFlexShrink(value: PropertyValue<'WebkitFlexShrink', T>): this {
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
   * CSS 规范初始值：`nowrap`，不同于浏览器默认样式表。
   * @example
   * s.display("flex").flexWrap("wrap").gap("0.5rem")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-wrap
   */
  WebkitFlexWrap(value: PropertyValue<'WebkitFlexWrap', T>): this {
    return this.write('WebkitFlexWrap', value);
  }
  /**
   * 兼容属性 -webkit-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-feature-settings
   */
  WebkitFontFeatureSettings(value: PropertyValue<'WebkitFontFeatureSettings', T>): this {
    return this.write('WebkitFontFeatureSettings', value);
  }
  /**
   * 兼容属性 -webkit-font-kerning；优先参考标准属性及浏览器支持范围。
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-kerning
   */
  WebkitFontKerning(value: PropertyValue<'WebkitFontKerning', T>): this {
    return this.write('WebkitFontKerning', value);
  }
  /**
   * 兼容属性 -webkit-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 WebKit 平台的字体平滑方式；不是通用的跨浏览器排版开关。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  WebkitFontSmoothing(value: PropertyValue<'WebkitFontSmoothing', T>): this {
    return this.write('WebkitFontSmoothing', value);
  }
  /**
   * 兼容属性 -webkit-font-variant-ligatures；优先参考标准属性及浏览器支持范围。
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  WebkitFontVariantLigatures(value: PropertyValue<'WebkitFontVariantLigatures', T>): this {
    return this.write('WebkitFontVariantLigatures', value);
  }
  /**
   * 兼容属性 -webkit-hyphenate-character；优先参考标准属性及浏览器支持范围。
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphenate-character
   */
  WebkitHyphenateCharacter(value: PropertyValue<'WebkitHyphenateCharacter', T>): this {
    return this.write('WebkitHyphenateCharacter', value);
  }
  /**
   * 兼容属性 -webkit-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphens
   */
  WebkitHyphens(value: PropertyValue<'WebkitHyphens', T>): this {
    return this.write('WebkitHyphens', value);
  }
  /**
   * 兼容属性 -webkit-initial-letter；优先参考标准属性及浏览器支持范围。
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-initial-letter
   */
  WebkitInitialLetter(value: PropertyValue<'WebkitInitialLetter', T>): this {
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
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.display("flex").justifyContent("space-between")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-justify-content
   */
  WebkitJustifyContent(value: PropertyValue<'WebkitJustifyContent', T>): this {
    return this.write('WebkitJustifyContent', value);
  }
  /**
   * 兼容属性 -webkit-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  WebkitLineBreak(value: PropertyValue<'WebkitLineBreak', T>): this {
    return this.write('WebkitLineBreak', value);
  }
  /**
   * 限制多行文本显示的行数；与 display: -webkit-box、WebkitBoxOrient('vertical') 和 overflow: hidden 配合，不删除文本内容。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-clamp
   */
  WebkitLineClamp(value: PropertyValue<'WebkitLineClamp', T>): this {
    return this.write('WebkitLineClamp', value);
  }
  /**
   * 兼容属性 -webkit-logical-height；优先参考标准属性 blockSize及浏览器支持范围。
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  WebkitLogicalHeight(value: PropertyValue<'WebkitLogicalHeight', T>): this {
    return this.write('WebkitLogicalHeight', value);
  }
  /**
   * 兼容属性 -webkit-logical-width；优先参考标准属性 inlineSize及浏览器支持范围。
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  WebkitLogicalWidth(value: PropertyValue<'WebkitLogicalWidth', T>): this {
    return this.write('WebkitLogicalWidth', value);
  }
  /**
   * 兼容属性 -webkit-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-end
   */
  WebkitMarginEnd(value: PropertyValue<'WebkitMarginEnd', T>): this {
    return this.write('WebkitMarginEnd', value);
  }
  /**
   * 兼容属性 -webkit-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-start
   */
  WebkitMarginStart(value: PropertyValue<'WebkitMarginStart', T>): this {
    return this.write('WebkitMarginStart', value);
  }
  /**
   * 兼容属性 -webkit-mask；优先参考标准属性及浏览器支持范围。
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  WebkitMask(value: PropertyValue<'WebkitMask', T>): this {
    return this.write('WebkitMask', value);
  }
  /**
   * 兼容属性 -webkit-mask-attachment；优先参考标准属性及浏览器支持范围。
   * 指定旧版遮罩图像是否随内容滚动。
   *
   * CSS 规范初始值：`scroll`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  WebkitMaskAttachment(value: PropertyValue<'WebkitMaskAttachment', T>): this {
    return this.write('WebkitMaskAttachment', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image；优先参考标准属性 maskBorder及浏览器支持范围。
   * 设置基于九宫格图像切片的边框遮罩。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  WebkitMaskBoxImage(value: PropertyValue<'WebkitMaskBoxImage', T>): this {
    return this.write('WebkitMaskBoxImage', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-outset；优先参考标准属性 maskBorderOutset及浏览器支持范围。
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-outset
   */
  WebkitMaskBoxImageOutset(value: PropertyValue<'WebkitMaskBoxImageOutset', T>): this {
    return this.write('WebkitMaskBoxImageOutset', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-repeat；优先参考标准属性 maskBorderRepeat及浏览器支持范围。
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  WebkitMaskBoxImageRepeat(value: PropertyValue<'WebkitMaskBoxImageRepeat', T>): this {
    return this.write('WebkitMaskBoxImageRepeat', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-slice；优先参考标准属性 maskBorderSlice及浏览器支持范围。
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-slice
   */
  WebkitMaskBoxImageSlice(value: PropertyValue<'WebkitMaskBoxImageSlice', T>): this {
    return this.write('WebkitMaskBoxImageSlice', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-source；优先参考标准属性 maskBorderSource及浏览器支持范围。
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-source
   */
  WebkitMaskBoxImageSource(value: PropertyValue<'WebkitMaskBoxImageSource', T>): this {
    return this.write('WebkitMaskBoxImageSource', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-width；优先参考标准属性 maskBorderWidth及浏览器支持范围。
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-width
   */
  WebkitMaskBoxImageWidth(value: PropertyValue<'WebkitMaskBoxImageWidth', T>): this {
    return this.write('WebkitMaskBoxImageWidth', value);
  }
  /**
   * 兼容属性 -webkit-mask-clip；优先参考标准属性及浏览器支持范围。
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：`border`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  WebkitMaskClip(value: PropertyValue<'WebkitMaskClip', T>): this {
    return this.write('WebkitMaskClip', value);
  }
  /**
   * 兼容属性 -webkit-mask-composite；优先参考标准属性及浏览器支持范围。
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：`source-over`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  WebkitMaskComposite(value: PropertyValue<'WebkitMaskComposite', T>): this {
    return this.write('WebkitMaskComposite', value);
  }
  /**
   * 兼容属性 -webkit-mask-image；优先参考标准属性及浏览器支持范围。
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-image
   */
  WebkitMaskImage(value: PropertyValue<'WebkitMaskImage', T>): this {
    return this.write('WebkitMaskImage', value);
  }
  /**
   * 兼容属性 -webkit-mask-origin；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：`padding`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  WebkitMaskOrigin(value: PropertyValue<'WebkitMaskOrigin', T>): this {
    return this.write('WebkitMaskOrigin', value);
  }
  /**
   * 兼容属性 -webkit-mask-position；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  WebkitMaskPosition(value: PropertyValue<'WebkitMaskPosition', T>): this {
    return this.write('WebkitMaskPosition', value);
  }
  /**
   * 兼容属性 -webkit-mask-position-x；优先参考标准属性 backgroundPositionX及浏览器支持范围。
   * 设置遮罩图像的水平位置，可使用长度、百分比或位置关键字。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  WebkitMaskPositionX(value: PropertyValue<'WebkitMaskPositionX', T>): this {
    return this.write('WebkitMaskPositionX', value);
  }
  /**
   * 兼容属性 -webkit-mask-position-y；优先参考标准属性 backgroundPositionY及浏览器支持范围。
   * 设置遮罩图像的垂直位置，可使用长度、百分比或位置关键字。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  WebkitMaskPositionY(value: PropertyValue<'WebkitMaskPositionY', T>): this {
    return this.write('WebkitMaskPositionY', value);
  }
  /**
   * 兼容属性 -webkit-mask-repeat；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  WebkitMaskRepeat(value: PropertyValue<'WebkitMaskRepeat', T>): this {
    return this.write('WebkitMaskRepeat', value);
  }
  /**
   * 兼容属性 -webkit-mask-repeat-x；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在水平方向的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  WebkitMaskRepeatX(value: PropertyValue<'WebkitMaskRepeatX', T>): this {
    return this.write('WebkitMaskRepeatX', value);
  }
  /**
   * 兼容属性 -webkit-mask-repeat-y；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在垂直方向的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  WebkitMaskRepeatY(value: PropertyValue<'WebkitMaskRepeatY', T>): this {
    return this.write('WebkitMaskRepeatY', value);
  }
  /**
   * 兼容属性 -webkit-mask-size；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-size
   */
  WebkitMaskSize(value: PropertyValue<'WebkitMaskSize', T>): this {
    return this.write('WebkitMaskSize', value);
  }
  /**
   * 兼容属性 -webkit-max-inline-size；优先参考标准属性及浏览器支持范围。
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  WebkitMaxInlineSize(value: PropertyValue<'WebkitMaxInlineSize', T>): this {
    return this.write('WebkitMaxInlineSize', value);
  }
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
  WebkitOrder(value: PropertyValue<'WebkitOrder', T>): this {
    return this.write('WebkitOrder', value);
  }
  /**
   * 兼容属性 -webkit-overflow-scrolling；优先参考标准属性及浏览器支持范围。
   * 选择特定旧版 WebKit 触控环境的滚动方式，包括惯性滚动。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-overflow-scrolling
   */
  WebkitOverflowScrolling(value: PropertyValue<'WebkitOverflowScrolling', T>): this {
    return this.write('WebkitOverflowScrolling', value);
  }
  /**
   * 兼容属性 -webkit-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-end
   */
  WebkitPaddingEnd(value: PropertyValue<'WebkitPaddingEnd', T>): this {
    return this.write('WebkitPaddingEnd', value);
  }
  /**
   * 兼容属性 -webkit-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-start
   */
  WebkitPaddingStart(value: PropertyValue<'WebkitPaddingStart', T>): this {
    return this.write('WebkitPaddingStart', value);
  }
  /**
   * 兼容属性 -webkit-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective
   */
  WebkitPerspective(value: PropertyValue<'WebkitPerspective', T>): this {
    return this.write('WebkitPerspective', value);
  }
  /**
   * 兼容属性 -webkit-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  WebkitPerspectiveOrigin(value: PropertyValue<'WebkitPerspectiveOrigin', T>): this {
    return this.write('WebkitPerspectiveOrigin', value);
  }
  /**
   * 兼容属性 -webkit-print-color-adjust；优先参考标准属性及浏览器支持范围。
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-print-color-adjust
   */
  WebkitPrintColorAdjust(value: PropertyValue<'WebkitPrintColorAdjust', T>): this {
    return this.write('WebkitPrintColorAdjust', value);
  }
  /**
   * 兼容属性 -webkit-ruby-position；优先参考标准属性及浏览器支持范围。
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：`alternate`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  WebkitRubyPosition(value: PropertyValue<'WebkitRubyPosition', T>): this {
    return this.write('WebkitRubyPosition', value);
  }
  /**
   * 兼容属性 -webkit-scroll-snap-type；优先参考标准属性及浏览器支持范围。
   * 设置滚动容器的吸附轴和吸附强度。
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.scrollSnapType("x mandatory")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-scroll-snap-type
   */
  WebkitScrollSnapType(value: PropertyValue<'WebkitScrollSnapType', T>): this {
    return this.write('WebkitScrollSnapType', value);
  }
  /**
   * 兼容属性 -webkit-shape-margin；优先参考标准属性及浏览器支持范围。
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-shape-margin
   */
  WebkitShapeMargin(value: PropertyValue<'WebkitShapeMargin', T>): this {
    return this.write('WebkitShapeMargin', value);
  }
  /**
   * 兼容属性 -webkit-tap-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置 WebKit 触控点击链接或可交互区域时的高亮颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-tap-highlight-color
   */
  WebkitTapHighlightColor(value: PropertyValue<'WebkitTapHighlightColor', T>): this {
    return this.write('WebkitTapHighlightColor', value);
  }
  /**
   * 兼容属性 -webkit-text-combine；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-combine
   */
  WebkitTextCombine(value: PropertyValue<'WebkitTextCombine', T>): this {
    return this.write('WebkitTextCombine', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-color
   */
  WebkitTextDecorationColor(value: PropertyValue<'WebkitTextDecorationColor', T>): this {
    return this.write('WebkitTextDecorationColor', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  WebkitTextDecorationLine(value: PropertyValue<'WebkitTextDecorationLine', T>): this {
    return this.write('WebkitTextDecorationLine', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-skip；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：`objects`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  WebkitTextDecorationSkip(value: PropertyValue<'WebkitTextDecorationSkip', T>): this {
    return this.write('WebkitTextDecorationSkip', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：`solid`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  WebkitTextDecorationStyle(value: PropertyValue<'WebkitTextDecorationStyle', T>): this {
    return this.write('WebkitTextDecorationStyle', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis；优先参考标准属性及浏览器支持范围。
   * 同时设置文字着重号的样式和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis
   */
  WebkitTextEmphasis(value: PropertyValue<'WebkitTextEmphasis', T>): this {
    return this.write('WebkitTextEmphasis', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis-color；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-color
   */
  WebkitTextEmphasisColor(value: PropertyValue<'WebkitTextEmphasisColor', T>): this {
    return this.write('WebkitTextEmphasisColor', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis-position；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-position
   */
  WebkitTextEmphasisPosition(value: PropertyValue<'WebkitTextEmphasisPosition', T>): this {
    return this.write('WebkitTextEmphasisPosition', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis-style；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  WebkitTextEmphasisStyle(value: PropertyValue<'WebkitTextEmphasisStyle', T>): this {
    return this.write('WebkitTextEmphasisStyle', value);
  }
  /**
   * 兼容属性 -webkit-text-fill-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形内部填充色，可独立于文字描边色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-fill-color
   */
  WebkitTextFillColor(value: PropertyValue<'WebkitTextFillColor', T>): this {
    return this.write('WebkitTextFillColor', value);
  }
  /**
   * 兼容属性 -webkit-text-orientation；优先参考标准属性及浏览器支持范围。
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：`mixed`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  WebkitTextOrientation(value: PropertyValue<'WebkitTextOrientation', T>): this {
    return this.write('WebkitTextOrientation', value);
  }
  /**
   * 兼容属性 -webkit-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-size-adjust
   */
  WebkitTextSizeAdjust(value: PropertyValue<'WebkitTextSizeAdjust', T>): this {
    return this.write('WebkitTextSizeAdjust', value);
  }
  /**
   * 兼容属性 -webkit-text-stroke；优先参考标准属性及浏览器支持范围。
   * 合并设置文字字形描边的宽度和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke
   */
  WebkitTextStroke(value: PropertyValue<'WebkitTextStroke', T>): this {
    return this.write('WebkitTextStroke', value);
  }
  /**
   * 兼容属性 -webkit-text-stroke-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-color
   */
  WebkitTextStrokeColor(value: PropertyValue<'WebkitTextStrokeColor', T>): this {
    return this.write('WebkitTextStrokeColor', value);
  }
  /**
   * 兼容属性 -webkit-text-stroke-width；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边宽度。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-width
   */
  WebkitTextStrokeWidth(value: PropertyValue<'WebkitTextStrokeWidth', T>): this {
    return this.write('WebkitTextStrokeWidth', value);
  }
  /**
   * 兼容属性 -webkit-text-underline-position；优先参考标准属性及浏览器支持范围。
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  WebkitTextUnderlinePosition(value: PropertyValue<'WebkitTextUnderlinePosition', T>): this {
    return this.write('WebkitTextUnderlinePosition', value);
  }
  /**
   * 兼容属性 -webkit-touch-callout；优先参考标准属性及浏览器支持范围。
   * 控制特定 WebKit 触控环境是否显示长按内容菜单。
   *
   * CSS 规范初始值：`default`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-touch-callout
   */
  WebkitTouchCallout(value: PropertyValue<'WebkitTouchCallout', T>): this {
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.transform("translateX(8px) scale(1.05)")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform
   */
  WebkitTransform(value: PropertyValue<'WebkitTransform', T>): this {
    return this.write('WebkitTransform', value);
  }
  /**
   * 兼容属性 -webkit-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  WebkitTransformOrigin(value: PropertyValue<'WebkitTransformOrigin', T>): this {
    return this.write('WebkitTransformOrigin', value);
  }
  /**
   * 兼容属性 -webkit-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：`flat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-style
   */
  WebkitTransformStyle(value: PropertyValue<'WebkitTransformStyle', T>): this {
    return this.write('WebkitTransformStyle', value);
  }
  /**
   * 兼容属性 -webkit-transition；优先参考标准属性及浏览器支持范围。
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。
   *
   * 只对属性变化创建过渡；不会自动触发变化。建议明确列出目标属性，避免 all 意外过渡布局变化。
   *
   * 适用场景：悬停、选中和展开状态之间的平滑变化。
   * @example
   * s.transition("opacity 160ms ease")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  WebkitTransition(value: PropertyValue<'WebkitTransition', T>): this {
    return this.write('WebkitTransition', value);
  }
  /**
   * 兼容属性 -webkit-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-delay
   */
  WebkitTransitionDelay(value: PropertyValue<'WebkitTransitionDelay', T>): this {
    return this.write('WebkitTransitionDelay', value);
  }
  /**
   * 兼容属性 -webkit-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-duration
   */
  WebkitTransitionDuration(value: PropertyValue<'WebkitTransitionDuration', T>): this {
    return this.write('WebkitTransitionDuration', value);
  }
  /**
   * 兼容属性 -webkit-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-property
   */
  WebkitTransitionProperty(value: PropertyValue<'WebkitTransitionProperty', T>): this {
    return this.write('WebkitTransitionProperty', value);
  }
  /**
   * 兼容属性 -webkit-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  WebkitTransitionTimingFunction(value: PropertyValue<'WebkitTransitionTimingFunction', T>): this {
    return this.write('WebkitTransitionTimingFunction', value);
  }
  /**
   * 兼容属性 -webkit-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * CSS 规范初始值：`read-only`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  WebkitUserModify(value: PropertyValue<'WebkitUserModify', T>): this {
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
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.userSelect("all")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-select
   */
  WebkitUserSelect(value: PropertyValue<'WebkitUserSelect', T>): this {
    return this.write('WebkitUserSelect', value);
  }
  /**
   * 兼容属性 -webkit-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：`horizontal-tb`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  WebkitWritingMode(value: PropertyValue<'WebkitWritingMode', T>): this {
    return this.write('WebkitWritingMode', value);
  }
  /**
   * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  all(value: PropertyValue<'all', T>): this {
    return this.write('all', value);
  }
  /**
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：`slice`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  boxDecorationBreak(value: PropertyValue<'boxDecorationBreak', T>): this {
    return this.write('boxDecorationBreak', value);
  }
  /**
   * 设置 SVG 圆或椭圆中心的横坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  cx(value: PropertyValue<'cx', T>): this {
    return this.write('cx', value);
  }
  /**
   * 设置 SVG 圆或椭圆中心的纵坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  cy(value: PropertyValue<'cy', T>): this {
    return this.write('cy', value);
  }
  /**
   * 设置 SVG path 元素的路径数据。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  d(value: PropertyValue<'d', T>): this {
    return this.write('d', value);
  }
  /**
   * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。
   *
   * CSS 规范初始值：`fixed`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  fieldSizing(value: PropertyValue<'fieldSizing', T>): this {
    return this.write('fieldSizing', value);
  }
  /**
   * 控制元素是否参与系统强制颜色模式的自动替换。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  forcedColorAdjust(value: PropertyValue<'forcedColorAdjust', T>): this {
    return this.write('forcedColorAdjust', value);
  }
  /**
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  hyphenateCharacter(value: PropertyValue<'hyphenateCharacter', T>): this {
    return this.write('hyphenateCharacter', value);
  }
  /**
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  hyphenateLimitChars(value: PropertyValue<'hyphenateLimitChars', T>): this {
    return this.write('hyphenateLimitChars', value);
  }
  /**
   * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。
   *
   * CSS 规范初始值：`numeric-only`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  interpolateSize(value: PropertyValue<'interpolateSize', T>): this {
    return this.write('interpolateSize', value);
  }
  /**
   * 控制元素是否建立独立的层叠上下文，隔离混合效果。
   *
   * 适用场景：建立局部层叠边界，或限制混合模式影响范围。
   *
   * 常用值：`auto`、`isolate`。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @example
   * s.isolation("isolate")
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
   */
  isolation(value: PropertyValue<'isolation', T>): this {
    return this.write('isolation', value);
  }
  /**
   * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`pack`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  masonryAutoFlow(value: PropertyValue<'masonryAutoFlow', T>): this {
    return this.write('masonryAutoFlow', value);
  }
  /**
   * 设置数学公式的嵌套深度，用于数学字号等排版计算。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  mathDepth(value: PropertyValue<'mathDepth', T>): this {
    return this.write('mathDepth', value);
  }
  /**
   * 控制数学上标采用正常还是压缩的垂直偏移。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  mathShift(value: PropertyValue<'mathShift', T>): this {
    return this.write('mathShift', value);
  }
  /**
   * 设置数学公式采用正常还是紧凑排版。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  mathStyle(value: PropertyValue<'mathStyle', T>): this {
    return this.write('mathStyle', value);
  }
  /**
   * 设置运动路径的旧式简写；对应现代 offset 属性族。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  motion(value: PropertyValue<'motion', T>): this {
    return this.write('motion', value);
  }
  /**
   * 设置沿运动路径行进距离的旧属性；对应 offset-distance。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-distance
   */
  motionDistance(value: PropertyValue<'motionDistance', T>): this {
    return this.write('motionDistance', value);
  }
  /**
   * 设置运动路径的旧属性；对应 offset-path。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  motionPath(value: PropertyValue<'motionPath', T>): this {
    return this.write('motionPath', value);
  }
  /**
   * 设置运动路径旋转方式的旧属性；对应 offset-rotate。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-rotation
   */
  motionRotation(value: PropertyValue<'motionRotation', T>): this {
    return this.write('motionRotation', value);
  }
  /**
   * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  overlay(value: PropertyValue<'overlay', T>): this {
    return this.write('overlay', value);
  }
  /**
   * 设置 SVG 圆的半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  r(value: PropertyValue<'r', T>): this {
    return this.write('r', value);
  }
  /**
   * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  rx(value: PropertyValue<'rx', T>): this {
    return this.write('rx', value);
  }
  /**
   * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  ry(value: PropertyValue<'ry', T>): this {
    return this.write('ry', value);
  }
  /**
   * 设置语音呈现时文字、数字和标点的朗读方式；使用前核对语音媒体支持。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  speakAs(value: PropertyValue<'speakAs', T>): this {
    return this.write('speakAs', value);
  }
  /**
   * 设置描边颜色的扩展属性；常规 SVG 优先使用 stroke 并核对支持情况。
   *
   * CSS 规范初始值：`transparent`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  strokeColor(value: PropertyValue<'strokeColor', T>): this {
    return this.write('strokeColor', value);
  }
  /**
   * 扩大命名动画时间线的可引用作用域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  timelineScope(value: PropertyValue<'timelineScope', T>): this {
    return this.write('timelineScope', value);
  }
  /**
   * 同时声明基于元素可见进度的时间线名称与轴。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  viewTimeline(value: PropertyValue<'viewTimeline', T>): this {
    return this.write('viewTimeline', value);
  }
  /**
   * 设置可见进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：`block`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  viewTimelineAxis(value: PropertyValue<'viewTimelineAxis', T>): this {
    return this.write('viewTimelineAxis', value);
  }
  /**
   * 设置可见进度时间线使用的滚动视口内缩范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  viewTimelineInset(value: PropertyValue<'viewTimelineInset', T>): this {
    return this.write('viewTimelineInset', value);
  }
  /**
   * 声明基于元素进入和离开滚动视口的时间线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  viewTimelineName(value: PropertyValue<'viewTimelineName', T>): this {
    return this.write('viewTimelineName', value);
  }
  /**
   * 提前告知浏览器可能发生变化的属性，便于准备优化资源。
   *
   * 仅对即将发生的变化短期使用；长期或大量声明可能占用额外资源，并提前改变层叠上下文。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  willChange(value: PropertyValue<'willChange', T>): this {
    return this.write('willChange', value);
  }
  /**
   * 设置适用 SVG 元素的水平几何坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  x(value: PropertyValue<'x', T>): this {
    return this.write('x', value);
  }
  /**
   * 设置适用 SVG 元素的垂直几何坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  y(value: PropertyValue<'y', T>): this {
    return this.write('y', value);
  }
  /**
   * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  zoom(value: PropertyValue<'zoom', T>): this {
    return this.write('zoom', value);
  }
}
