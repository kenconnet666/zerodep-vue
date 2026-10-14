// 由 scripts/css/generate.mjs 从固定 csstype@3.2.3 生成；请勿手改。
import type { PropertyValue, CheckedPropertyValue } from '../types.ts';
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
  alignContent<const Value extends PropertyValue<'alignContent', T>>(
    value: Value & CheckedPropertyValue<'alignContent', T, Value>,
  ): this {
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
  alignItems<const Value extends PropertyValue<'alignItems', T>>(
    value: Value & CheckedPropertyValue<'alignItems', T, Value>,
  ): this {
    return this.write('alignItems', value);
  }
  /**
   * 选择行内或 SVG 文本参与对齐时使用的基线。
   *
   * CSS 规范初始值：`baseline`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  alignmentBaseline<const Value extends PropertyValue<'alignmentBaseline', T>>(
    value: Value & CheckedPropertyValue<'alignmentBaseline', T, Value>,
  ): this {
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
  alignSelf<const Value extends PropertyValue<'alignSelf', T>>(
    value: Value & CheckedPropertyValue<'alignSelf', T, Value>,
  ): this {
    return this.write('alignSelf', value);
  }
  /**
   * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  alignTracks<const Value extends PropertyValue<'alignTracks', T>>(
    value: Value & CheckedPropertyValue<'alignTracks', T, Value>,
  ): this {
    return this.write('alignTracks', value);
  }
  /**
   * 为元素声明锚点名称，供锚点定位的元素引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  anchorName<const Value extends PropertyValue<'anchorName', T>>(
    value: Value & CheckedPropertyValue<'anchorName', T, Value>,
  ): this {
    return this.write('anchorName', value);
  }
  /**
   * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  anchorScope<const Value extends PropertyValue<'anchorScope', T>>(
    value: Value & CheckedPropertyValue<'anchorScope', T, Value>,
  ): this {
    return this.write('anchorScope', value);
  }
  /**
   * 设置定位元素相对于其定位参照的下侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  bottom<const Value extends PropertyValue<'bottom', T>>(
    value: Value & CheckedPropertyValue<'bottom', T, Value>,
  ): this {
    return this.write('bottom', value);
  }
  /**
   * 要求元素避让指定侧的前置浮动元素。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  clear<const Value extends PropertyValue<'clear', T>>(
    value: Value & CheckedPropertyValue<'clear', T, Value>,
  ): this {
    return this.write('clear', value);
  }
  /**
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  columnCount<const Value extends PropertyValue<'columnCount', T>>(
    value: Value & CheckedPropertyValue<'columnCount', T, Value>,
  ): this {
    return this.write('columnCount', value);
  }
  /**
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：`balance`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  columnFill<const Value extends PropertyValue<'columnFill', T>>(
    value: Value & CheckedPropertyValue<'columnFill', T, Value>,
  ): this {
    return this.write('columnFill', value);
  }
  /**
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  columns<const Value extends PropertyValue<'columns', T>>(
    value: Value & CheckedPropertyValue<'columns', T, Value>,
  ): this {
    return this.write('columns', value);
  }
  /**
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  columnSpan<const Value extends PropertyValue<'columnSpan', T>>(
    value: Value & CheckedPropertyValue<'columnSpan', T, Value>,
  ): this {
    return this.write('columnSpan', value);
  }
  /**
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  columnWidth<const Value extends PropertyValue<'columnWidth', T>>(
    value: Value & CheckedPropertyValue<'columnWidth', T, Value>,
  ): this {
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
  display<const Value extends PropertyValue<'display', T>>(
    value: Value & CheckedPropertyValue<'display', T, Value>,
  ): this {
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
  flex<const Value extends PropertyValue<'flex', T>>(
    value: Value & CheckedPropertyValue<'flex', T, Value>,
  ): this {
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
  flexBasis<const Value extends PropertyValue<'flexBasis', T>>(
    value: Value & CheckedPropertyValue<'flexBasis', T, Value>,
  ): this {
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
  flexDirection<const Value extends PropertyValue<'flexDirection', T>>(
    value: Value & CheckedPropertyValue<'flexDirection', T, Value>,
  ): this {
    return this.write('flexDirection', value);
  }
  /**
   * 同时设置弹性布局的主轴方向和换行方式。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  flexFlow<const Value extends PropertyValue<'flexFlow', T>>(
    value: Value & CheckedPropertyValue<'flexFlow', T, Value>,
  ): this {
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
  flexGrow<const Value extends PropertyValue<'flexGrow', T>>(
    value: Value & CheckedPropertyValue<'flexGrow', T, Value>,
  ): this {
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
  flexShrink<const Value extends PropertyValue<'flexShrink', T>>(
    value: Value & CheckedPropertyValue<'flexShrink', T, Value>,
  ): this {
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
  flexWrap<const Value extends PropertyValue<'flexWrap', T>>(
    value: Value & CheckedPropertyValue<'flexWrap', T, Value>,
  ): this {
    return this.write('flexWrap', value);
  }
  /**
   * 将元素浮动到指定侧，使相邻行内内容围绕它排列。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  float<const Value extends PropertyValue<'float', T>>(
    value: Value & CheckedPropertyValue<'float', T, Value>,
  ): this {
    return this.write('float', value);
  }
  /**
   * 集中设置显式和隐式网格的轨道、区域及自动放置方式。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  grid<const Value extends PropertyValue<'grid', T>>(
    value: Value & CheckedPropertyValue<'grid', T, Value>,
  ): this {
    return this.write('grid', value);
  }
  /**
   * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  gridArea<const Value extends PropertyValue<'gridArea', T>>(
    value: Value & CheckedPropertyValue<'gridArea', T, Value>,
  ): this {
    return this.write('gridArea', value);
  }
  /**
   * 设置隐式生成的网格列尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  gridAutoColumns<const Value extends PropertyValue<'gridAutoColumns', T>>(
    value: Value & CheckedPropertyValue<'gridAutoColumns', T, Value>,
  ): this {
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
  gridAutoFlow<const Value extends PropertyValue<'gridAutoFlow', T>>(
    value: Value & CheckedPropertyValue<'gridAutoFlow', T, Value>,
  ): this {
    return this.write('gridAutoFlow', value);
  }
  /**
   * 设置隐式生成的网格行尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  gridAutoRows<const Value extends PropertyValue<'gridAutoRows', T>>(
    value: Value & CheckedPropertyValue<'gridAutoRows', T, Value>,
  ): this {
    return this.write('gridAutoRows', value);
  }
  /**
   * 设置网格项目的列起点和列终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  gridColumn<const Value extends PropertyValue<'gridColumn', T>>(
    value: Value & CheckedPropertyValue<'gridColumn', T, Value>,
  ): this {
    return this.write('gridColumn', value);
  }
  /**
   * 设置网格项目的列终止线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  gridColumnEnd<const Value extends PropertyValue<'gridColumnEnd', T>>(
    value: Value & CheckedPropertyValue<'gridColumnEnd', T, Value>,
  ): this {
    return this.write('gridColumnEnd', value);
  }
  /**
   * 设置网格项目的列起始线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  gridColumnStart<const Value extends PropertyValue<'gridColumnStart', T>>(
    value: Value & CheckedPropertyValue<'gridColumnStart', T, Value>,
  ): this {
    return this.write('gridColumnStart', value);
  }
  /**
   * 设置网格项目的行起点和行终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  gridRow<const Value extends PropertyValue<'gridRow', T>>(
    value: Value & CheckedPropertyValue<'gridRow', T, Value>,
  ): this {
    return this.write('gridRow', value);
  }
  /**
   * 设置网格项目的行终止线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  gridRowEnd<const Value extends PropertyValue<'gridRowEnd', T>>(
    value: Value & CheckedPropertyValue<'gridRowEnd', T, Value>,
  ): this {
    return this.write('gridRowEnd', value);
  }
  /**
   * 设置网格项目的行起始线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  gridRowStart<const Value extends PropertyValue<'gridRowStart', T>>(
    value: Value & CheckedPropertyValue<'gridRowStart', T, Value>,
  ): this {
    return this.write('gridRowStart', value);
  }
  /**
   * 集中设置显式网格的行、列和命名区域。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  gridTemplate<const Value extends PropertyValue<'gridTemplate', T>>(
    value: Value & CheckedPropertyValue<'gridTemplate', T, Value>,
  ): this {
    return this.write('gridTemplate', value);
  }
  /**
   * 用区域名称矩阵定义网格布局区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  gridTemplateAreas<const Value extends PropertyValue<'gridTemplateAreas', T>>(
    value: Value & CheckedPropertyValue<'gridTemplateAreas', T, Value>,
  ): this {
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
  gridTemplateColumns<const Value extends PropertyValue<'gridTemplateColumns', T>>(
    value: Value & CheckedPropertyValue<'gridTemplateColumns', T, Value>,
  ): this {
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
  gridTemplateRows<const Value extends PropertyValue<'gridTemplateRows', T>>(
    value: Value & CheckedPropertyValue<'gridTemplateRows', T, Value>,
  ): this {
    return this.write('gridTemplateRows', value);
  }
  /**
   * 同时设置定位元素的上、右、下、左偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  inset<const Value extends PropertyValue<'inset', T>>(
    value: Value & CheckedPropertyValue<'inset', T, Value>,
  ): this {
    return this.write('inset', value);
  }
  /**
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  insetBlock<const Value extends PropertyValue<'insetBlock', T>>(
    value: Value & CheckedPropertyValue<'insetBlock', T, Value>,
  ): this {
    return this.write('insetBlock', value);
  }
  /**
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  insetBlockEnd<const Value extends PropertyValue<'insetBlockEnd', T>>(
    value: Value & CheckedPropertyValue<'insetBlockEnd', T, Value>,
  ): this {
    return this.write('insetBlockEnd', value);
  }
  /**
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  insetBlockStart<const Value extends PropertyValue<'insetBlockStart', T>>(
    value: Value & CheckedPropertyValue<'insetBlockStart', T, Value>,
  ): this {
    return this.write('insetBlockStart', value);
  }
  /**
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  insetInline<const Value extends PropertyValue<'insetInline', T>>(
    value: Value & CheckedPropertyValue<'insetInline', T, Value>,
  ): this {
    return this.write('insetInline', value);
  }
  /**
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  insetInlineEnd<const Value extends PropertyValue<'insetInlineEnd', T>>(
    value: Value & CheckedPropertyValue<'insetInlineEnd', T, Value>,
  ): this {
    return this.write('insetInlineEnd', value);
  }
  /**
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  insetInlineStart<const Value extends PropertyValue<'insetInlineStart', T>>(
    value: Value & CheckedPropertyValue<'insetInlineStart', T, Value>,
  ): this {
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
  justifyContent<const Value extends PropertyValue<'justifyContent', T>>(
    value: Value & CheckedPropertyValue<'justifyContent', T, Value>,
  ): this {
    return this.write('justifyContent', value);
  }
  /**
   * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。
   *
   * CSS 规范初始值：`legacy`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  justifyItems<const Value extends PropertyValue<'justifyItems', T>>(
    value: Value & CheckedPropertyValue<'justifyItems', T, Value>,
  ): this {
    return this.write('justifyItems', value);
  }
  /**
   * 单独设置项目在其布局区域内的行内轴对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  justifySelf<const Value extends PropertyValue<'justifySelf', T>>(
    value: Value & CheckedPropertyValue<'justifySelf', T, Value>,
  ): this {
    return this.write('justifySelf', value);
  }
  /**
   * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  justifyTracks<const Value extends PropertyValue<'justifyTracks', T>>(
    value: Value & CheckedPropertyValue<'justifyTracks', T, Value>,
  ): this {
    return this.write('justifyTracks', value);
  }
  /**
   * 设置定位元素相对于其定位参照的左侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  left<const Value extends PropertyValue<'left', T>>(
    value: Value & CheckedPropertyValue<'left', T, Value>,
  ): this {
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
  order<const Value extends PropertyValue<'order', T>>(
    value: Value & CheckedPropertyValue<'order', T, Value>,
  ): this {
    return this.write('order', value);
  }
  /**
   * 同时设置 align-content 与 justify-content。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  placeContent<const Value extends PropertyValue<'placeContent', T>>(
    value: Value & CheckedPropertyValue<'placeContent', T, Value>,
  ): this {
    return this.write('placeContent', value);
  }
  /**
   * 同时设置 align-items 与 justify-items。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  placeItems<const Value extends PropertyValue<'placeItems', T>>(
    value: Value & CheckedPropertyValue<'placeItems', T, Value>,
  ): this {
    return this.write('placeItems', value);
  }
  /**
   * 同时设置 align-self 与 justify-self。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  placeSelf<const Value extends PropertyValue<'placeSelf', T>>(
    value: Value & CheckedPropertyValue<'placeSelf', T, Value>,
  ): this {
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
  position<const Value extends PropertyValue<'position', T>>(
    value: Value & CheckedPropertyValue<'position', T, Value>,
  ): this {
    return this.write('position', value);
  }
  /**
   * 选择绝对定位元素使用的默认锚点。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  positionAnchor<const Value extends PropertyValue<'positionAnchor', T>>(
    value: Value & CheckedPropertyValue<'positionAnchor', T, Value>,
  ): this {
    return this.write('positionAnchor', value);
  }
  /**
   * 选择相对于锚点的定位区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  positionArea<const Value extends PropertyValue<'positionArea', T>>(
    value: Value & CheckedPropertyValue<'positionArea', T, Value>,
  ): this {
    return this.write('positionArea', value);
  }
  /**
   * 同时设置锚点定位的候选回退方式及尝试顺序。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  positionTry<const Value extends PropertyValue<'positionTry', T>>(
    value: Value & CheckedPropertyValue<'positionTry', T, Value>,
  ): this {
    return this.write('positionTry', value);
  }
  /**
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  positionTryFallbacks<const Value extends PropertyValue<'positionTryFallbacks', T>>(
    value: Value & CheckedPropertyValue<'positionTryFallbacks', T, Value>,
  ): this {
    return this.write('positionTryFallbacks', value);
  }
  /**
   * 设置锚点定位候选方案的尝试顺序。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  positionTryOrder<const Value extends PropertyValue<'positionTryOrder', T>>(
    value: Value & CheckedPropertyValue<'positionTryOrder', T, Value>,
  ): this {
    return this.write('positionTryOrder', value);
  }
  /**
   * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。
   *
   * CSS 规范初始值：`anchors-visible`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  positionVisibility<const Value extends PropertyValue<'positionVisibility', T>>(
    value: Value & CheckedPropertyValue<'positionVisibility', T, Value>,
  ): this {
    return this.write('positionVisibility', value);
  }
  /**
   * 设置定位元素相对于其定位参照的右侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  right<const Value extends PropertyValue<'right', T>>(
    value: Value & CheckedPropertyValue<'right', T, Value>,
  ): this {
    return this.write('right', value);
  }
  /**
   * 设置定位元素相对于其定位参照的上侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  top<const Value extends PropertyValue<'top', T>>(
    value: Value & CheckedPropertyValue<'top', T, Value>,
  ): this {
    return this.write('top', value);
  }
  /**
   * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。
   *
   * CSS 规范初始值：`baseline`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  verticalAlign<const Value extends PropertyValue<'verticalAlign', T>>(
    value: Value & CheckedPropertyValue<'verticalAlign', T, Value>,
  ): this {
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
  zIndex<const Value extends PropertyValue<'zIndex', T>>(
    value: Value & CheckedPropertyValue<'zIndex', T, Value>,
  ): this {
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
  aspectRatio<const Value extends PropertyValue<'aspectRatio', T>>(
    value: Value & CheckedPropertyValue<'aspectRatio', T, Value>,
  ): this {
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
  blockSize<const Value extends PropertyValue<'blockSize', T>>(
    value: Value & CheckedPropertyValue<'blockSize', T, Value>,
  ): this {
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
  boxSizing<const Value extends PropertyValue<'boxSizing', T>>(
    value: Value & CheckedPropertyValue<'boxSizing', T, Value>,
  ): this {
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
  height<const Value extends PropertyValue<'height', T>>(
    value: Value & CheckedPropertyValue<'height', T, Value>,
  ): this {
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
  inlineSize<const Value extends PropertyValue<'inlineSize', T>>(
    value: Value & CheckedPropertyValue<'inlineSize', T, Value>,
  ): this {
    return this.write('inlineSize', value);
  }
  /**
   * 限制元素逻辑块轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  maxBlockSize<const Value extends PropertyValue<'maxBlockSize', T>>(
    value: Value & CheckedPropertyValue<'maxBlockSize', T, Value>,
  ): this {
    return this.write('maxBlockSize', value);
  }
  /**
   * 限制元素的最大物理高度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  maxHeight<const Value extends PropertyValue<'maxHeight', T>>(
    value: Value & CheckedPropertyValue<'maxHeight', T, Value>,
  ): this {
    return this.write('maxHeight', value);
  }
  /**
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  maxInlineSize<const Value extends PropertyValue<'maxInlineSize', T>>(
    value: Value & CheckedPropertyValue<'maxInlineSize', T, Value>,
  ): this {
    return this.write('maxInlineSize', value);
  }
  /**
   * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  maxLines<const Value extends PropertyValue<'maxLines', T>>(
    value: Value & CheckedPropertyValue<'maxLines', T, Value>,
  ): this {
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
  maxWidth<const Value extends PropertyValue<'maxWidth', T>>(
    value: Value & CheckedPropertyValue<'maxWidth', T, Value>,
  ): this {
    return this.write('maxWidth', value);
  }
  /**
   * 设置元素逻辑块轴的最小尺寸。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  minBlockSize<const Value extends PropertyValue<'minBlockSize', T>>(
    value: Value & CheckedPropertyValue<'minBlockSize', T, Value>,
  ): this {
    return this.write('minBlockSize', value);
  }
  /**
   * 设置元素的最小物理高度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  minHeight<const Value extends PropertyValue<'minHeight', T>>(
    value: Value & CheckedPropertyValue<'minHeight', T, Value>,
  ): this {
    return this.write('minHeight', value);
  }
  /**
   * 设置元素逻辑行内轴的最小尺寸。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  minInlineSize<const Value extends PropertyValue<'minInlineSize', T>>(
    value: Value & CheckedPropertyValue<'minInlineSize', T, Value>,
  ): this {
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
  minWidth<const Value extends PropertyValue<'minWidth', T>>(
    value: Value & CheckedPropertyValue<'minWidth', T, Value>,
  ): this {
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
  width<const Value extends PropertyValue<'width', T>>(
    value: Value & CheckedPropertyValue<'width', T, Value>,
  ): this {
    return this.write('width', value);
  }
  /**
   * 设置布局中相邻列之间的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  columnGap<const Value extends PropertyValue<'columnGap', T>>(
    value: Value & CheckedPropertyValue<'columnGap', T, Value>,
  ): this {
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
  gap<const Value extends PropertyValue<'gap', T>>(
    value: Value & CheckedPropertyValue<'gap', T, Value>,
  ): this {
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
  margin<const Value extends PropertyValue<'margin', T>>(
    value: Value & CheckedPropertyValue<'margin', T, Value>,
  ): this {
    return this.write('margin', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的外边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  marginBlock<const Value extends PropertyValue<'marginBlock', T>>(
    value: Value & CheckedPropertyValue<'marginBlock', T, Value>,
  ): this {
    return this.write('marginBlock', value);
  }
  /**
   * 设置逻辑块轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  marginBlockEnd<const Value extends PropertyValue<'marginBlockEnd', T>>(
    value: Value & CheckedPropertyValue<'marginBlockEnd', T, Value>,
  ): this {
    return this.write('marginBlockEnd', value);
  }
  /**
   * 设置逻辑块轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  marginBlockStart<const Value extends PropertyValue<'marginBlockStart', T>>(
    value: Value & CheckedPropertyValue<'marginBlockStart', T, Value>,
  ): this {
    return this.write('marginBlockStart', value);
  }
  /**
   * 设置下外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  marginBottom<const Value extends PropertyValue<'marginBottom', T>>(
    value: Value & CheckedPropertyValue<'marginBottom', T, Value>,
  ): this {
    return this.write('marginBottom', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的外边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  marginInline<const Value extends PropertyValue<'marginInline', T>>(
    value: Value & CheckedPropertyValue<'marginInline', T, Value>,
  ): this {
    return this.write('marginInline', value);
  }
  /**
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  marginInlineEnd<const Value extends PropertyValue<'marginInlineEnd', T>>(
    value: Value & CheckedPropertyValue<'marginInlineEnd', T, Value>,
  ): this {
    return this.write('marginInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  marginInlineStart<const Value extends PropertyValue<'marginInlineStart', T>>(
    value: Value & CheckedPropertyValue<'marginInlineStart', T, Value>,
  ): this {
    return this.write('marginInlineStart', value);
  }
  /**
   * 设置左外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  marginLeft<const Value extends PropertyValue<'marginLeft', T>>(
    value: Value & CheckedPropertyValue<'marginLeft', T, Value>,
  ): this {
    return this.write('marginLeft', value);
  }
  /**
   * 设置右外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  marginRight<const Value extends PropertyValue<'marginRight', T>>(
    value: Value & CheckedPropertyValue<'marginRight', T, Value>,
  ): this {
    return this.write('marginRight', value);
  }
  /**
   * 设置上外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  marginTop<const Value extends PropertyValue<'marginTop', T>>(
    value: Value & CheckedPropertyValue<'marginTop', T, Value>,
  ): this {
    return this.write('marginTop', value);
  }
  /**
   * 控制容器边缘处子元素外边距的裁减。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  marginTrim<const Value extends PropertyValue<'marginTrim', T>>(
    value: Value & CheckedPropertyValue<'marginTrim', T, Value>,
  ): this {
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
  padding<const Value extends PropertyValue<'padding', T>>(
    value: Value & CheckedPropertyValue<'padding', T, Value>,
  ): this {
    return this.write('padding', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的内边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  paddingBlock<const Value extends PropertyValue<'paddingBlock', T>>(
    value: Value & CheckedPropertyValue<'paddingBlock', T, Value>,
  ): this {
    return this.write('paddingBlock', value);
  }
  /**
   * 设置逻辑块轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  paddingBlockEnd<const Value extends PropertyValue<'paddingBlockEnd', T>>(
    value: Value & CheckedPropertyValue<'paddingBlockEnd', T, Value>,
  ): this {
    return this.write('paddingBlockEnd', value);
  }
  /**
   * 设置逻辑块轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  paddingBlockStart<const Value extends PropertyValue<'paddingBlockStart', T>>(
    value: Value & CheckedPropertyValue<'paddingBlockStart', T, Value>,
  ): this {
    return this.write('paddingBlockStart', value);
  }
  /**
   * 设置下内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  paddingBottom<const Value extends PropertyValue<'paddingBottom', T>>(
    value: Value & CheckedPropertyValue<'paddingBottom', T, Value>,
  ): this {
    return this.write('paddingBottom', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的内边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  paddingInline<const Value extends PropertyValue<'paddingInline', T>>(
    value: Value & CheckedPropertyValue<'paddingInline', T, Value>,
  ): this {
    return this.write('paddingInline', value);
  }
  /**
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  paddingInlineEnd<const Value extends PropertyValue<'paddingInlineEnd', T>>(
    value: Value & CheckedPropertyValue<'paddingInlineEnd', T, Value>,
  ): this {
    return this.write('paddingInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  paddingInlineStart<const Value extends PropertyValue<'paddingInlineStart', T>>(
    value: Value & CheckedPropertyValue<'paddingInlineStart', T, Value>,
  ): this {
    return this.write('paddingInlineStart', value);
  }
  /**
   * 设置左内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  paddingLeft<const Value extends PropertyValue<'paddingLeft', T>>(
    value: Value & CheckedPropertyValue<'paddingLeft', T, Value>,
  ): this {
    return this.write('paddingLeft', value);
  }
  /**
   * 设置右内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  paddingRight<const Value extends PropertyValue<'paddingRight', T>>(
    value: Value & CheckedPropertyValue<'paddingRight', T, Value>,
  ): this {
    return this.write('paddingRight', value);
  }
  /**
   * 设置上内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  paddingTop<const Value extends PropertyValue<'paddingTop', T>>(
    value: Value & CheckedPropertyValue<'paddingTop', T, Value>,
  ): this {
    return this.write('paddingTop', value);
  }
  /**
   * 设置布局中相邻行之间的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  rowGap<const Value extends PropertyValue<'rowGap', T>>(
    value: Value & CheckedPropertyValue<'rowGap', T, Value>,
  ): this {
    return this.write('rowGap', value);
  }
  /**
   * 设置文本基本方向，参与双向文本及部分布局计算。
   *
   * CSS 规范初始值：`ltr`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  direction<const Value extends PropertyValue<'direction', T>>(
    value: Value & CheckedPropertyValue<'direction', T, Value>,
  ): this {
    return this.write('direction', value);
  }
  /**
   * 集中设置字体样式、粗细、大小、行高和字体族等信息。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  font<const Value extends PropertyValue<'font', T>>(
    value: Value & CheckedPropertyValue<'font', T, Value>,
  ): this {
    return this.write('font', value);
  }
  /**
   * 设置按优先级排列的字体族及通用字体回退。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  fontFamily<const Value extends PropertyValue<'fontFamily', T>>(
    value: Value & CheckedPropertyValue<'fontFamily', T, Value>,
  ): this {
    return this.write('fontFamily', value);
  }
  /**
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  fontFeatureSettings<const Value extends PropertyValue<'fontFeatureSettings', T>>(
    value: Value & CheckedPropertyValue<'fontFeatureSettings', T, Value>,
  ): this {
    return this.write('fontFeatureSettings', value);
  }
  /**
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  fontKerning<const Value extends PropertyValue<'fontKerning', T>>(
    value: Value & CheckedPropertyValue<'fontKerning', T, Value>,
  ): this {
    return this.write('fontKerning', value);
  }
  /**
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  fontLanguageOverride<const Value extends PropertyValue<'fontLanguageOverride', T>>(
    value: Value & CheckedPropertyValue<'fontLanguageOverride', T, Value>,
  ): this {
    return this.write('fontLanguageOverride', value);
  }
  /**
   * 控制支持光学尺寸轴的字体是否按字号优化字形。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  fontOpticalSizing<const Value extends PropertyValue<'fontOpticalSizing', T>>(
    value: Value & CheckedPropertyValue<'fontOpticalSizing', T, Value>,
  ): this {
    return this.write('fontOpticalSizing', value);
  }
  /**
   * 选择或覆盖彩色字体使用的调色板。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  fontPalette<const Value extends PropertyValue<'fontPalette', T>>(
    value: Value & CheckedPropertyValue<'fontPalette', T, Value>,
  ): this {
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
  fontSize<const Value extends PropertyValue<'fontSize', T>>(
    value: Value & CheckedPropertyValue<'fontSize', T, Value>,
  ): this {
    return this.write('fontSize', value);
  }
  /**
   * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  fontSizeAdjust<const Value extends PropertyValue<'fontSizeAdjust', T>>(
    value: Value & CheckedPropertyValue<'fontSizeAdjust', T, Value>,
  ): this {
    return this.write('fontSizeAdjust', value);
  }
  /**
   * 控制字体平滑的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  fontSmooth<const Value extends PropertyValue<'fontSmooth', T>>(
    value: Value & CheckedPropertyValue<'fontSmooth', T, Value>,
  ): this {
    return this.write('fontSmooth', value);
  }
  /**
   * 选择正常、斜体或倾斜字体样式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  fontStyle<const Value extends PropertyValue<'fontStyle', T>>(
    value: Value & CheckedPropertyValue<'fontStyle', T, Value>,
  ): this {
    return this.write('fontStyle', value);
  }
  /**
   * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。
   *
   * CSS 规范初始值：`weight style small-caps position `，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  fontSynthesis<const Value extends PropertyValue<'fontSynthesis', T>>(
    value: Value & CheckedPropertyValue<'fontSynthesis', T, Value>,
  ): this {
    return this.write('fontSynthesis', value);
  }
  /**
   * 控制浏览器是否可以合成上标和下标字形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  fontSynthesisPosition<const Value extends PropertyValue<'fontSynthesisPosition', T>>(
    value: Value & CheckedPropertyValue<'fontSynthesisPosition', T, Value>,
  ): this {
    return this.write('fontSynthesisPosition', value);
  }
  /**
   * 控制浏览器是否可以合成小型大写字形。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  fontSynthesisSmallCaps<const Value extends PropertyValue<'fontSynthesisSmallCaps', T>>(
    value: Value & CheckedPropertyValue<'fontSynthesisSmallCaps', T, Value>,
  ): this {
    return this.write('fontSynthesisSmallCaps', value);
  }
  /**
   * 控制浏览器是否可以合成倾斜字体。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  fontSynthesisStyle<const Value extends PropertyValue<'fontSynthesisStyle', T>>(
    value: Value & CheckedPropertyValue<'fontSynthesisStyle', T, Value>,
  ): this {
    return this.write('fontSynthesisStyle', value);
  }
  /**
   * 控制浏览器是否可以合成加粗字体。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  fontSynthesisWeight<const Value extends PropertyValue<'fontSynthesisWeight', T>>(
    value: Value & CheckedPropertyValue<'fontSynthesisWeight', T, Value>,
  ): this {
    return this.write('fontSynthesisWeight', value);
  }
  /**
   * 集中设置字体的连字、大小写、数字及其他变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  fontVariant<const Value extends PropertyValue<'fontVariant', T>>(
    value: Value & CheckedPropertyValue<'fontVariant', T, Value>,
  ): this {
    return this.write('fontVariant', value);
  }
  /**
   * 选择字体提供的替代字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  fontVariantAlternates<const Value extends PropertyValue<'fontVariantAlternates', T>>(
    value: Value & CheckedPropertyValue<'fontVariantAlternates', T, Value>,
  ): this {
    return this.write('fontVariantAlternates', value);
  }
  /**
   * 设置小型大写等大小写字形变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  fontVariantCaps<const Value extends PropertyValue<'fontVariantCaps', T>>(
    value: Value & CheckedPropertyValue<'fontVariantCaps', T, Value>,
  ): this {
    return this.write('fontVariantCaps', value);
  }
  /**
   * 设置东亚文字字形及宽度变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  fontVariantEastAsian<const Value extends PropertyValue<'fontVariantEastAsian', T>>(
    value: Value & CheckedPropertyValue<'fontVariantEastAsian', T, Value>,
  ): this {
    return this.write('fontVariantEastAsian', value);
  }
  /**
   * 设置字符优先采用文本字形还是 emoji 字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  fontVariantEmoji<const Value extends PropertyValue<'fontVariantEmoji', T>>(
    value: Value & CheckedPropertyValue<'fontVariantEmoji', T, Value>,
  ): this {
    return this.write('fontVariantEmoji', value);
  }
  /**
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  fontVariantLigatures<const Value extends PropertyValue<'fontVariantLigatures', T>>(
    value: Value & CheckedPropertyValue<'fontVariantLigatures', T, Value>,
  ): this {
    return this.write('fontVariantLigatures', value);
  }
  /**
   * 设置数字的等宽、比例、分数及其他排版变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  fontVariantNumeric<const Value extends PropertyValue<'fontVariantNumeric', T>>(
    value: Value & CheckedPropertyValue<'fontVariantNumeric', T, Value>,
  ): this {
    return this.write('fontVariantNumeric', value);
  }
  /**
   * 选择字体提供的上标或下标字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  fontVariantPosition<const Value extends PropertyValue<'fontVariantPosition', T>>(
    value: Value & CheckedPropertyValue<'fontVariantPosition', T, Value>,
  ): this {
    return this.write('fontVariantPosition', value);
  }
  /**
   * 直接设置可变字体各个轴的数值。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  fontVariationSettings<const Value extends PropertyValue<'fontVariationSettings', T>>(
    value: Value & CheckedPropertyValue<'fontVariationSettings', T, Value>,
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
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @example
   * s.fontWeight(600)
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
   */
  fontWeight<const Value extends PropertyValue<'fontWeight', T>>(
    value: Value & CheckedPropertyValue<'fontWeight', T, Value>,
  ): this {
    return this.write('fontWeight', value);
  }
  /**
   * 选择字体的宽窄字面，不是通过变换拉伸元素。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  fontWidth<const Value extends PropertyValue<'fontWidth', T>>(
    value: Value & CheckedPropertyValue<'fontWidth', T, Value>,
  ): this {
    return this.write('fontWidth', value);
  }
  /**
   * 控制标点是否可以悬挂在行盒边缘之外。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  hangingPunctuation<const Value extends PropertyValue<'hangingPunctuation', T>>(
    value: Value & CheckedPropertyValue<'hangingPunctuation', T, Value>,
  ): this {
    return this.write('hangingPunctuation', value);
  }
  /**
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  hyphens<const Value extends PropertyValue<'hyphens', T>>(
    value: Value & CheckedPropertyValue<'hyphens', T, Value>,
  ): this {
    return this.write('hyphens', value);
  }
  /**
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  initialLetter<const Value extends PropertyValue<'initialLetter', T>>(
    value: Value & CheckedPropertyValue<'initialLetter', T, Value>,
  ): this {
    return this.write('initialLetter', value);
  }
  /**
   * 设置首字下沉时字形与正文使用的对齐基线。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  initialLetterAlign<const Value extends PropertyValue<'initialLetterAlign', T>>(
    value: Value & CheckedPropertyValue<'initialLetterAlign', T, Value>,
  ): this {
    return this.write('initialLetterAlign', value);
  }
  /**
   * 设置字符之间额外增加或减少的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  letterSpacing<const Value extends PropertyValue<'letterSpacing', T>>(
    value: Value & CheckedPropertyValue<'letterSpacing', T, Value>,
  ): this {
    return this.write('letterSpacing', value);
  }
  /**
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  lineBreak<const Value extends PropertyValue<'lineBreak', T>>(
    value: Value & CheckedPropertyValue<'lineBreak', T, Value>,
  ): this {
    return this.write('lineBreak', value);
  }
  /**
   * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  lineClamp<const Value extends PropertyValue<'lineClamp', T>>(
    value: Value & CheckedPropertyValue<'lineClamp', T, Value>,
  ): this {
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
  lineHeight<const Value extends PropertyValue<'lineHeight', T>>(
    value: Value & CheckedPropertyValue<'lineHeight', T, Value>,
  ): this {
    return this.write('lineHeight', value);
  }
  /**
   * 设置行盒高度向上取整使用的步长。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  lineHeightStep<const Value extends PropertyValue<'lineHeightStep', T>>(
    value: Value & CheckedPropertyValue<'lineHeightStep', T, Value>,
  ): this {
    return this.write('lineHeightStep', value);
  }
  /**
   * 设置生成引号所用的开闭字符对。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  quotes<const Value extends PropertyValue<'quotes', T>>(
    value: Value & CheckedPropertyValue<'quotes', T, Value>,
  ): this {
    return this.write('quotes', value);
  }
  /**
   * 设置注音文字与基底文字之间剩余空间的分配方式。
   *
   * CSS 规范初始值：`space-around`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  rubyAlign<const Value extends PropertyValue<'rubyAlign', T>>(
    value: Value & CheckedPropertyValue<'rubyAlign', T, Value>,
  ): this {
    return this.write('rubyAlign', value);
  }
  /**
   * 设置相邻注音容器的合并方式；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`separate`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  rubyMerge<const Value extends PropertyValue<'rubyMerge', T>>(
    value: Value & CheckedPropertyValue<'rubyMerge', T, Value>,
  ): this {
    return this.write('rubyMerge', value);
  }
  /**
   * 控制注音文字是否可以悬伸到相邻文本上方。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  rubyOverhang<const Value extends PropertyValue<'rubyOverhang', T>>(
    value: Value & CheckedPropertyValue<'rubyOverhang', T, Value>,
  ): this {
    return this.write('rubyOverhang', value);
  }
  /**
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：`alternate`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  rubyPosition<const Value extends PropertyValue<'rubyPosition', T>>(
    value: Value & CheckedPropertyValue<'rubyPosition', T, Value>,
  ): this {
    return this.write('rubyPosition', value);
  }
  /**
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：`8`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  tabSize<const Value extends PropertyValue<'tabSize', T>>(
    value: Value & CheckedPropertyValue<'tabSize', T, Value>,
  ): this {
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
  textAlign<const Value extends PropertyValue<'textAlign', T>>(
    value: Value & CheckedPropertyValue<'textAlign', T, Value>,
  ): this {
    return this.write('textAlign', value);
  }
  /**
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  textAlignLast<const Value extends PropertyValue<'textAlignLast', T>>(
    value: Value & CheckedPropertyValue<'textAlignLast', T, Value>,
  ): this {
    return this.write('textAlignLast', value);
  }
  /**
   * 设置 SVG 文本片段相对于定位点的锚定方式。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  textAnchor<const Value extends PropertyValue<'textAnchor', T>>(
    value: Value & CheckedPropertyValue<'textAnchor', T, Value>,
  ): this {
    return this.write('textAnchor', value);
  }
  /**
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  textAutospace<const Value extends PropertyValue<'textAutospace', T>>(
    value: Value & CheckedPropertyValue<'textAutospace', T, Value>,
  ): this {
    return this.write('textAutospace', value);
  }
  /**
   * 同时设置文本盒边缘参照及首尾空白裁减。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  textBox<const Value extends PropertyValue<'textBox', T>>(
    value: Value & CheckedPropertyValue<'textBox', T, Value>,
  ): this {
    return this.write('textBox', value);
  }
  /**
   * 选择文本盒裁减或对齐使用的字体边缘度量。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  textBoxEdge<const Value extends PropertyValue<'textBoxEdge', T>>(
    value: Value & CheckedPropertyValue<'textBoxEdge', T, Value>,
  ): this {
    return this.write('textBoxEdge', value);
  }
  /**
   * 裁减文本块开头或结尾的额外行高空白。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  textBoxTrim<const Value extends PropertyValue<'textBoxTrim', T>>(
    value: Value & CheckedPropertyValue<'textBoxTrim', T, Value>,
  ): this {
    return this.write('textBoxTrim', value);
  }
  /**
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  textCombineUpright<const Value extends PropertyValue<'textCombineUpright', T>>(
    value: Value & CheckedPropertyValue<'textCombineUpright', T, Value>,
  ): this {
    return this.write('textCombineUpright', value);
  }
  /**
   * 集中设置文本装饰线的位置、线型、颜色及粗细。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  textDecoration<const Value extends PropertyValue<'textDecoration', T>>(
    value: Value & CheckedPropertyValue<'textDecoration', T, Value>,
  ): this {
    return this.write('textDecoration', value);
  }
  /**
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  textDecorationColor<const Value extends PropertyValue<'textDecorationColor', T>>(
    value: Value & CheckedPropertyValue<'textDecorationColor', T, Value>,
  ): this {
    return this.write('textDecorationColor', value);
  }
  /**
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  textDecorationLine<const Value extends PropertyValue<'textDecorationLine', T>>(
    value: Value & CheckedPropertyValue<'textDecorationLine', T, Value>,
  ): this {
    return this.write('textDecorationLine', value);
  }
  /**
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：`objects`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  textDecorationSkip<const Value extends PropertyValue<'textDecorationSkip', T>>(
    value: Value & CheckedPropertyValue<'textDecorationSkip', T, Value>,
  ): this {
    return this.write('textDecorationSkip', value);
  }
  /**
   * 设置装饰线是否避让字形的笔画。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  textDecorationSkipInk<const Value extends PropertyValue<'textDecorationSkipInk', T>>(
    value: Value & CheckedPropertyValue<'textDecorationSkipInk', T, Value>,
  ): this {
    return this.write('textDecorationSkipInk', value);
  }
  /**
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：`solid`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  textDecorationStyle<const Value extends PropertyValue<'textDecorationStyle', T>>(
    value: Value & CheckedPropertyValue<'textDecorationStyle', T, Value>,
  ): this {
    return this.write('textDecorationStyle', value);
  }
  /**
   * 设置文本装饰线粗细。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  textDecorationThickness<const Value extends PropertyValue<'textDecorationThickness', T>>(
    value: Value & CheckedPropertyValue<'textDecorationThickness', T, Value>,
  ): this {
    return this.write('textDecorationThickness', value);
  }
  /**
   * 同时设置文字着重号的样式和颜色。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  textEmphasis<const Value extends PropertyValue<'textEmphasis', T>>(
    value: Value & CheckedPropertyValue<'textEmphasis', T, Value>,
  ): this {
    return this.write('textEmphasis', value);
  }
  /**
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  textEmphasisColor<const Value extends PropertyValue<'textEmphasisColor', T>>(
    value: Value & CheckedPropertyValue<'textEmphasisColor', T, Value>,
  ): this {
    return this.write('textEmphasisColor', value);
  }
  /**
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  textEmphasisPosition<const Value extends PropertyValue<'textEmphasisPosition', T>>(
    value: Value & CheckedPropertyValue<'textEmphasisPosition', T, Value>,
  ): this {
    return this.write('textEmphasisPosition', value);
  }
  /**
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  textEmphasisStyle<const Value extends PropertyValue<'textEmphasisStyle', T>>(
    value: Value & CheckedPropertyValue<'textEmphasisStyle', T, Value>,
  ): this {
    return this.write('textEmphasisStyle', value);
  }
  /**
   * 设置文本行的缩进距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  textIndent<const Value extends PropertyValue<'textIndent', T>>(
    value: Value & CheckedPropertyValue<'textIndent', T, Value>,
  ): this {
    return this.write('textIndent', value);
  }
  /**
   * 设置两端对齐时增加间距的算法。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  textJustify<const Value extends PropertyValue<'textJustify', T>>(
    value: Value & CheckedPropertyValue<'textJustify', T, Value>,
  ): this {
    return this.write('textJustify', value);
  }
  /**
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：`mixed`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  textOrientation<const Value extends PropertyValue<'textOrientation', T>>(
    value: Value & CheckedPropertyValue<'textOrientation', T, Value>,
  ): this {
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
  textOverflow<const Value extends PropertyValue<'textOverflow', T>>(
    value: Value & CheckedPropertyValue<'textOverflow', T, Value>,
  ): this {
    return this.write('textOverflow', value);
  }
  /**
   * 向渲染器提供文本速度、可读性或几何精度的偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  textRendering<const Value extends PropertyValue<'textRendering', T>>(
    value: Value & CheckedPropertyValue<'textRendering', T, Value>,
  ): this {
    return this.write('textRendering', value);
  }
  /**
   * 设置文字及其装饰的阴影，可叠加多层。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  textShadow<const Value extends PropertyValue<'textShadow', T>>(
    value: Value & CheckedPropertyValue<'textShadow', T, Value>,
  ): this {
    return this.write('textShadow', value);
  }
  /**
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  textSizeAdjust<const Value extends PropertyValue<'textSizeAdjust', T>>(
    value: Value & CheckedPropertyValue<'textSizeAdjust', T, Value>,
  ): this {
    return this.write('textSizeAdjust', value);
  }
  /**
   * 设置东亚文字标点等字符周围空白的裁减。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  textSpacingTrim<const Value extends PropertyValue<'textSpacingTrim', T>>(
    value: Value & CheckedPropertyValue<'textSpacingTrim', T, Value>,
  ): this {
    return this.write('textSpacingTrim', value);
  }
  /**
   * 设置文字显示时的大小写、全角或其他字形转换。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  textTransform<const Value extends PropertyValue<'textTransform', T>>(
    value: Value & CheckedPropertyValue<'textTransform', T, Value>,
  ): this {
    return this.write('textTransform', value);
  }
  /**
   * 设置下划线相对于默认位置的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  textUnderlineOffset<const Value extends PropertyValue<'textUnderlineOffset', T>>(
    value: Value & CheckedPropertyValue<'textUnderlineOffset', T, Value>,
  ): this {
    return this.write('textUnderlineOffset', value);
  }
  /**
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  textUnderlinePosition<const Value extends PropertyValue<'textUnderlinePosition', T>>(
    value: Value & CheckedPropertyValue<'textUnderlinePosition', T, Value>,
  ): this {
    return this.write('textUnderlinePosition', value);
  }
  /**
   * 同时设置文本是否换行及换行策略。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  textWrap<const Value extends PropertyValue<'textWrap', T>>(
    value: Value & CheckedPropertyValue<'textWrap', T, Value>,
  ): this {
    return this.write('textWrap', value);
  }
  /**
   * 设置文本是否允许软换行。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  textWrapMode<const Value extends PropertyValue<'textWrapMode', T>>(
    value: Value & CheckedPropertyValue<'textWrapMode', T, Value>,
  ): this {
    return this.write('textWrapMode', value);
  }
  /**
   * 设置文本换行的排版策略，例如平衡各行长度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  textWrapStyle<const Value extends PropertyValue<'textWrapStyle', T>>(
    value: Value & CheckedPropertyValue<'textWrapStyle', T, Value>,
  ): this {
    return this.write('textWrapStyle', value);
  }
  /**
   * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  unicodeBidi<const Value extends PropertyValue<'unicodeBidi', T>>(
    value: Value & CheckedPropertyValue<'unicodeBidi', T, Value>,
  ): this {
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
  whiteSpace<const Value extends PropertyValue<'whiteSpace', T>>(
    value: Value & CheckedPropertyValue<'whiteSpace', T, Value>,
  ): this {
    return this.write('whiteSpace', value);
  }
  /**
   * 设置空格、制表符和换行符如何折叠或保留。
   *
   * CSS 规范初始值：`collapse`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  whiteSpaceCollapse<const Value extends PropertyValue<'whiteSpaceCollapse', T>>(
    value: Value & CheckedPropertyValue<'whiteSpaceCollapse', T, Value>,
  ): this {
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
  wordBreak<const Value extends PropertyValue<'wordBreak', T>>(
    value: Value & CheckedPropertyValue<'wordBreak', T, Value>,
  ): this {
    return this.write('wordBreak', value);
  }
  /**
   * 设置单词或词间分隔符的额外间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  wordSpacing<const Value extends PropertyValue<'wordSpacing', T>>(
    value: Value & CheckedPropertyValue<'wordSpacing', T, Value>,
  ): this {
    return this.write('wordSpacing', value);
  }
  /**
   * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  wordWrap<const Value extends PropertyValue<'wordWrap', T>>(
    value: Value & CheckedPropertyValue<'wordWrap', T, Value>,
  ): this {
    return this.write('wordWrap', value);
  }
  /**
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：`horizontal-tb`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  writingMode<const Value extends PropertyValue<'writingMode', T>>(
    value: Value & CheckedPropertyValue<'writingMode', T, Value>,
  ): this {
    return this.write('writingMode', value);
  }
  /**
   * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  accentColor<const Value extends PropertyValue<'accentColor', T>>(
    value: Value & CheckedPropertyValue<'accentColor', T, Value>,
  ): this {
    return this.write('accentColor', value);
  }
  /**
   * 集中设置背景颜色、图像、位置、尺寸、重复及绘制区域。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  background<const Value extends PropertyValue<'background', T>>(
    value: Value & CheckedPropertyValue<'background', T, Value>,
  ): this {
    return this.write('background', value);
  }
  /**
   * 设置背景图像相对于视口、元素或局部滚动内容的固定方式。
   *
   * CSS 规范初始值：`scroll`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  backgroundAttachment<const Value extends PropertyValue<'backgroundAttachment', T>>(
    value: Value & CheckedPropertyValue<'backgroundAttachment', T, Value>,
  ): this {
    return this.write('backgroundAttachment', value);
  }
  /**
   * 设置背景图层彼此之间以及与背景色之间的混合模式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  backgroundBlendMode<const Value extends PropertyValue<'backgroundBlendMode', T>>(
    value: Value & CheckedPropertyValue<'backgroundBlendMode', T, Value>,
  ): this {
    return this.write('backgroundBlendMode', value);
  }
  /**
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  backgroundClip<const Value extends PropertyValue<'backgroundClip', T>>(
    value: Value & CheckedPropertyValue<'backgroundClip', T, Value>,
  ): this {
    return this.write('backgroundClip', value);
  }
  /**
   * 设置元素背景颜色，位于背景图像下方。
   *
   * CSS 规范初始值：`transparent`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  backgroundColor<const Value extends PropertyValue<'backgroundColor', T>>(
    value: Value & CheckedPropertyValue<'backgroundColor', T, Value>,
  ): this {
    return this.write('backgroundColor', value);
  }
  /**
   * 设置一个或多个背景图像或渐变图层。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  backgroundImage<const Value extends PropertyValue<'backgroundImage', T>>(
    value: Value & CheckedPropertyValue<'backgroundImage', T, Value>,
  ): this {
    return this.write('backgroundImage', value);
  }
  /**
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  backgroundOrigin<const Value extends PropertyValue<'backgroundOrigin', T>>(
    value: Value & CheckedPropertyValue<'backgroundOrigin', T, Value>,
  ): this {
    return this.write('backgroundOrigin', value);
  }
  /**
   * 设置背景图像在定位区域内的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  backgroundPosition<const Value extends PropertyValue<'backgroundPosition', T>>(
    value: Value & CheckedPropertyValue<'backgroundPosition', T, Value>,
  ): this {
    return this.write('backgroundPosition', value);
  }
  /**
   * 设置背景图像的水平位置。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  backgroundPositionX<const Value extends PropertyValue<'backgroundPositionX', T>>(
    value: Value & CheckedPropertyValue<'backgroundPositionX', T, Value>,
  ): this {
    return this.write('backgroundPositionX', value);
  }
  /**
   * 设置背景图像的垂直位置。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  backgroundPositionY<const Value extends PropertyValue<'backgroundPositionY', T>>(
    value: Value & CheckedPropertyValue<'backgroundPositionY', T, Value>,
  ): this {
    return this.write('backgroundPositionY', value);
  }
  /**
   * 设置背景图像在水平和垂直方向上的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  backgroundRepeat<const Value extends PropertyValue<'backgroundRepeat', T>>(
    value: Value & CheckedPropertyValue<'backgroundRepeat', T, Value>,
  ): this {
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
  backgroundSize<const Value extends PropertyValue<'backgroundSize', T>>(
    value: Value & CheckedPropertyValue<'backgroundSize', T, Value>,
  ): this {
    return this.write('backgroundSize', value);
  }
  /**
   * 设置可编辑内容中的文本插入光标颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  caretColor<const Value extends PropertyValue<'caretColor', T>>(
    value: Value & CheckedPropertyValue<'caretColor', T, Value>,
  ): this {
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
  color<const Value extends PropertyValue<'color', T>>(
    value: Value & CheckedPropertyValue<'color', T, Value>,
  ): this {
    return this.write('color', value);
  }
  /**
   * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  colorAdjust<const Value extends PropertyValue<'colorAdjust', T>>(
    value: Value & CheckedPropertyValue<'colorAdjust', T, Value>,
  ): this {
    return this.write('colorAdjust', value);
  }
  /**
   * 设置 SVG 图形颜色插值所用的色彩空间。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  colorInterpolation<const Value extends PropertyValue<'colorInterpolation', T>>(
    value: Value & CheckedPropertyValue<'colorInterpolation', T, Value>,
  ): this {
    return this.write('colorInterpolation', value);
  }
  /**
   * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。
   *
   * CSS 规范初始值：`linearRGB`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  colorInterpolationFilters<const Value extends PropertyValue<'colorInterpolationFilters', T>>(
    value: Value & CheckedPropertyValue<'colorInterpolationFilters', T, Value>,
  ): this {
    return this.write('colorInterpolationFilters', value);
  }
  /**
   * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  colorRendering<const Value extends PropertyValue<'colorRendering', T>>(
    value: Value & CheckedPropertyValue<'colorRendering', T, Value>,
  ): this {
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
  colorScheme<const Value extends PropertyValue<'colorScheme', T>>(
    value: Value & CheckedPropertyValue<'colorScheme', T, Value>,
  ): this {
    return this.write('colorScheme', value);
  }
  /**
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  printColorAdjust<const Value extends PropertyValue<'printColorAdjust', T>>(
    value: Value & CheckedPropertyValue<'printColorAdjust', T, Value>,
  ): this {
    return this.write('printColorAdjust', value);
  }
  /**
   * 同时设置四边边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  border<const Value extends PropertyValue<'border', T>>(
    value: Value & CheckedPropertyValue<'border', T, Value>,
  ): this {
    return this.write('border', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的边框。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  borderBlock<const Value extends PropertyValue<'borderBlock', T>>(
    value: Value & CheckedPropertyValue<'borderBlock', T, Value>,
  ): this {
    return this.write('borderBlock', value);
  }
  /**
   * 设置逻辑块轴两侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  borderBlockColor<const Value extends PropertyValue<'borderBlockColor', T>>(
    value: Value & CheckedPropertyValue<'borderBlockColor', T, Value>,
  ): this {
    return this.write('borderBlockColor', value);
  }
  /**
   * 设置逻辑块轴结束侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  borderBlockEnd<const Value extends PropertyValue<'borderBlockEnd', T>>(
    value: Value & CheckedPropertyValue<'borderBlockEnd', T, Value>,
  ): this {
    return this.write('borderBlockEnd', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  borderBlockEndColor<const Value extends PropertyValue<'borderBlockEndColor', T>>(
    value: Value & CheckedPropertyValue<'borderBlockEndColor', T, Value>,
  ): this {
    return this.write('borderBlockEndColor', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  borderBlockEndStyle<const Value extends PropertyValue<'borderBlockEndStyle', T>>(
    value: Value & CheckedPropertyValue<'borderBlockEndStyle', T, Value>,
  ): this {
    return this.write('borderBlockEndStyle', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  borderBlockEndWidth<const Value extends PropertyValue<'borderBlockEndWidth', T>>(
    value: Value & CheckedPropertyValue<'borderBlockEndWidth', T, Value>,
  ): this {
    return this.write('borderBlockEndWidth', value);
  }
  /**
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  borderBlockStart<const Value extends PropertyValue<'borderBlockStart', T>>(
    value: Value & CheckedPropertyValue<'borderBlockStart', T, Value>,
  ): this {
    return this.write('borderBlockStart', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  borderBlockStartColor<const Value extends PropertyValue<'borderBlockStartColor', T>>(
    value: Value & CheckedPropertyValue<'borderBlockStartColor', T, Value>,
  ): this {
    return this.write('borderBlockStartColor', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  borderBlockStartStyle<const Value extends PropertyValue<'borderBlockStartStyle', T>>(
    value: Value & CheckedPropertyValue<'borderBlockStartStyle', T, Value>,
  ): this {
    return this.write('borderBlockStartStyle', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  borderBlockStartWidth<const Value extends PropertyValue<'borderBlockStartWidth', T>>(
    value: Value & CheckedPropertyValue<'borderBlockStartWidth', T, Value>,
  ): this {
    return this.write('borderBlockStartWidth', value);
  }
  /**
   * 设置逻辑块轴两侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  borderBlockStyle<const Value extends PropertyValue<'borderBlockStyle', T>>(
    value: Value & CheckedPropertyValue<'borderBlockStyle', T, Value>,
  ): this {
    return this.write('borderBlockStyle', value);
  }
  /**
   * 设置逻辑块轴两侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  borderBlockWidth<const Value extends PropertyValue<'borderBlockWidth', T>>(
    value: Value & CheckedPropertyValue<'borderBlockWidth', T, Value>,
  ): this {
    return this.write('borderBlockWidth', value);
  }
  /**
   * 设置下边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  borderBottom<const Value extends PropertyValue<'borderBottom', T>>(
    value: Value & CheckedPropertyValue<'borderBottom', T, Value>,
  ): this {
    return this.write('borderBottom', value);
  }
  /**
   * 设置下边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  borderBottomColor<const Value extends PropertyValue<'borderBottomColor', T>>(
    value: Value & CheckedPropertyValue<'borderBottomColor', T, Value>,
  ): this {
    return this.write('borderBottomColor', value);
  }
  /**
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  borderBottomLeftRadius<const Value extends PropertyValue<'borderBottomLeftRadius', T>>(
    value: Value & CheckedPropertyValue<'borderBottomLeftRadius', T, Value>,
  ): this {
    return this.write('borderBottomLeftRadius', value);
  }
  /**
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  borderBottomRightRadius<const Value extends PropertyValue<'borderBottomRightRadius', T>>(
    value: Value & CheckedPropertyValue<'borderBottomRightRadius', T, Value>,
  ): this {
    return this.write('borderBottomRightRadius', value);
  }
  /**
   * 设置下边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  borderBottomStyle<const Value extends PropertyValue<'borderBottomStyle', T>>(
    value: Value & CheckedPropertyValue<'borderBottomStyle', T, Value>,
  ): this {
    return this.write('borderBottomStyle', value);
  }
  /**
   * 设置下边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  borderBottomWidth<const Value extends PropertyValue<'borderBottomWidth', T>>(
    value: Value & CheckedPropertyValue<'borderBottomWidth', T, Value>,
  ): this {
    return this.write('borderBottomWidth', value);
  }
  /**
   * 设置表格相邻单元格边框合并还是分离。
   *
   * CSS 规范初始值：`separate`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  borderCollapse<const Value extends PropertyValue<'borderCollapse', T>>(
    value: Value & CheckedPropertyValue<'borderCollapse', T, Value>,
  ): this {
    return this.write('borderCollapse', value);
  }
  /**
   * 设置四边边框颜色，支持按上、右、下、左顺序简写。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  borderColor<const Value extends PropertyValue<'borderColor', T>>(
    value: Value & CheckedPropertyValue<'borderColor', T, Value>,
  ): this {
    return this.write('borderColor', value);
  }
  /**
   * 设置逻辑块轴结束侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  borderEndEndRadius<const Value extends PropertyValue<'borderEndEndRadius', T>>(
    value: Value & CheckedPropertyValue<'borderEndEndRadius', T, Value>,
  ): this {
    return this.write('borderEndEndRadius', value);
  }
  /**
   * 设置逻辑块轴结束侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  borderEndStartRadius<const Value extends PropertyValue<'borderEndStartRadius', T>>(
    value: Value & CheckedPropertyValue<'borderEndStartRadius', T, Value>,
  ): this {
    return this.write('borderEndStartRadius', value);
  }
  /**
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  borderImage<const Value extends PropertyValue<'borderImage', T>>(
    value: Value & CheckedPropertyValue<'borderImage', T, Value>,
  ): this {
    return this.write('borderImage', value);
  }
  /**
   * 设置边框图像超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  borderImageOutset<const Value extends PropertyValue<'borderImageOutset', T>>(
    value: Value & CheckedPropertyValue<'borderImageOutset', T, Value>,
  ): this {
    return this.write('borderImageOutset', value);
  }
  /**
   * 设置边框图像切片沿边框的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  borderImageRepeat<const Value extends PropertyValue<'borderImageRepeat', T>>(
    value: Value & CheckedPropertyValue<'borderImageRepeat', T, Value>,
  ): this {
    return this.write('borderImageRepeat', value);
  }
  /**
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：`100%`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  borderImageSlice<const Value extends PropertyValue<'borderImageSlice', T>>(
    value: Value & CheckedPropertyValue<'borderImageSlice', T, Value>,
  ): this {
    return this.write('borderImageSlice', value);
  }
  /**
   * 指定边框使用的图像或渐变。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  borderImageSource<const Value extends PropertyValue<'borderImageSource', T>>(
    value: Value & CheckedPropertyValue<'borderImageSource', T, Value>,
  ): this {
    return this.write('borderImageSource', value);
  }
  /**
   * 设置边框图像各边的绘制宽度。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  borderImageWidth<const Value extends PropertyValue<'borderImageWidth', T>>(
    value: Value & CheckedPropertyValue<'borderImageWidth', T, Value>,
  ): this {
    return this.write('borderImageWidth', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的边框。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  borderInline<const Value extends PropertyValue<'borderInline', T>>(
    value: Value & CheckedPropertyValue<'borderInline', T, Value>,
  ): this {
    return this.write('borderInline', value);
  }
  /**
   * 设置逻辑行内轴两侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  borderInlineColor<const Value extends PropertyValue<'borderInlineColor', T>>(
    value: Value & CheckedPropertyValue<'borderInlineColor', T, Value>,
  ): this {
    return this.write('borderInlineColor', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  borderInlineEnd<const Value extends PropertyValue<'borderInlineEnd', T>>(
    value: Value & CheckedPropertyValue<'borderInlineEnd', T, Value>,
  ): this {
    return this.write('borderInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  borderInlineEndColor<const Value extends PropertyValue<'borderInlineEndColor', T>>(
    value: Value & CheckedPropertyValue<'borderInlineEndColor', T, Value>,
  ): this {
    return this.write('borderInlineEndColor', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  borderInlineEndStyle<const Value extends PropertyValue<'borderInlineEndStyle', T>>(
    value: Value & CheckedPropertyValue<'borderInlineEndStyle', T, Value>,
  ): this {
    return this.write('borderInlineEndStyle', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  borderInlineEndWidth<const Value extends PropertyValue<'borderInlineEndWidth', T>>(
    value: Value & CheckedPropertyValue<'borderInlineEndWidth', T, Value>,
  ): this {
    return this.write('borderInlineEndWidth', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  borderInlineStart<const Value extends PropertyValue<'borderInlineStart', T>>(
    value: Value & CheckedPropertyValue<'borderInlineStart', T, Value>,
  ): this {
    return this.write('borderInlineStart', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  borderInlineStartColor<const Value extends PropertyValue<'borderInlineStartColor', T>>(
    value: Value & CheckedPropertyValue<'borderInlineStartColor', T, Value>,
  ): this {
    return this.write('borderInlineStartColor', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  borderInlineStartStyle<const Value extends PropertyValue<'borderInlineStartStyle', T>>(
    value: Value & CheckedPropertyValue<'borderInlineStartStyle', T, Value>,
  ): this {
    return this.write('borderInlineStartStyle', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  borderInlineStartWidth<const Value extends PropertyValue<'borderInlineStartWidth', T>>(
    value: Value & CheckedPropertyValue<'borderInlineStartWidth', T, Value>,
  ): this {
    return this.write('borderInlineStartWidth', value);
  }
  /**
   * 设置逻辑行内轴两侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  borderInlineStyle<const Value extends PropertyValue<'borderInlineStyle', T>>(
    value: Value & CheckedPropertyValue<'borderInlineStyle', T, Value>,
  ): this {
    return this.write('borderInlineStyle', value);
  }
  /**
   * 设置逻辑行内轴两侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  borderInlineWidth<const Value extends PropertyValue<'borderInlineWidth', T>>(
    value: Value & CheckedPropertyValue<'borderInlineWidth', T, Value>,
  ): this {
    return this.write('borderInlineWidth', value);
  }
  /**
   * 设置左边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  borderLeft<const Value extends PropertyValue<'borderLeft', T>>(
    value: Value & CheckedPropertyValue<'borderLeft', T, Value>,
  ): this {
    return this.write('borderLeft', value);
  }
  /**
   * 设置左边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  borderLeftColor<const Value extends PropertyValue<'borderLeftColor', T>>(
    value: Value & CheckedPropertyValue<'borderLeftColor', T, Value>,
  ): this {
    return this.write('borderLeftColor', value);
  }
  /**
   * 设置左边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  borderLeftStyle<const Value extends PropertyValue<'borderLeftStyle', T>>(
    value: Value & CheckedPropertyValue<'borderLeftStyle', T, Value>,
  ): this {
    return this.write('borderLeftStyle', value);
  }
  /**
   * 设置左边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  borderLeftWidth<const Value extends PropertyValue<'borderLeftWidth', T>>(
    value: Value & CheckedPropertyValue<'borderLeftWidth', T, Value>,
  ): this {
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
  borderRadius<const Value extends PropertyValue<'borderRadius', T>>(
    value: Value & CheckedPropertyValue<'borderRadius', T, Value>,
  ): this {
    return this.write('borderRadius', value);
  }
  /**
   * 设置右边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  borderRight<const Value extends PropertyValue<'borderRight', T>>(
    value: Value & CheckedPropertyValue<'borderRight', T, Value>,
  ): this {
    return this.write('borderRight', value);
  }
  /**
   * 设置右边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  borderRightColor<const Value extends PropertyValue<'borderRightColor', T>>(
    value: Value & CheckedPropertyValue<'borderRightColor', T, Value>,
  ): this {
    return this.write('borderRightColor', value);
  }
  /**
   * 设置右边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  borderRightStyle<const Value extends PropertyValue<'borderRightStyle', T>>(
    value: Value & CheckedPropertyValue<'borderRightStyle', T, Value>,
  ): this {
    return this.write('borderRightStyle', value);
  }
  /**
   * 设置右边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  borderRightWidth<const Value extends PropertyValue<'borderRightWidth', T>>(
    value: Value & CheckedPropertyValue<'borderRightWidth', T, Value>,
  ): this {
    return this.write('borderRightWidth', value);
  }
  /**
   * 设置分离边框模型下表格单元格之间的水平和垂直间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  borderSpacing<const Value extends PropertyValue<'borderSpacing', T>>(
    value: Value & CheckedPropertyValue<'borderSpacing', T, Value>,
  ): this {
    return this.write('borderSpacing', value);
  }
  /**
   * 设置逻辑块轴起始侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  borderStartEndRadius<const Value extends PropertyValue<'borderStartEndRadius', T>>(
    value: Value & CheckedPropertyValue<'borderStartEndRadius', T, Value>,
  ): this {
    return this.write('borderStartEndRadius', value);
  }
  /**
   * 设置逻辑块轴起始侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  borderStartStartRadius<const Value extends PropertyValue<'borderStartStartRadius', T>>(
    value: Value & CheckedPropertyValue<'borderStartStartRadius', T, Value>,
  ): this {
    return this.write('borderStartStartRadius', value);
  }
  /**
   * 设置四边边框线型。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  borderStyle<const Value extends PropertyValue<'borderStyle', T>>(
    value: Value & CheckedPropertyValue<'borderStyle', T, Value>,
  ): this {
    return this.write('borderStyle', value);
  }
  /**
   * 设置上边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  borderTop<const Value extends PropertyValue<'borderTop', T>>(
    value: Value & CheckedPropertyValue<'borderTop', T, Value>,
  ): this {
    return this.write('borderTop', value);
  }
  /**
   * 设置上边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  borderTopColor<const Value extends PropertyValue<'borderTopColor', T>>(
    value: Value & CheckedPropertyValue<'borderTopColor', T, Value>,
  ): this {
    return this.write('borderTopColor', value);
  }
  /**
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  borderTopLeftRadius<const Value extends PropertyValue<'borderTopLeftRadius', T>>(
    value: Value & CheckedPropertyValue<'borderTopLeftRadius', T, Value>,
  ): this {
    return this.write('borderTopLeftRadius', value);
  }
  /**
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  borderTopRightRadius<const Value extends PropertyValue<'borderTopRightRadius', T>>(
    value: Value & CheckedPropertyValue<'borderTopRightRadius', T, Value>,
  ): this {
    return this.write('borderTopRightRadius', value);
  }
  /**
   * 设置上边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  borderTopStyle<const Value extends PropertyValue<'borderTopStyle', T>>(
    value: Value & CheckedPropertyValue<'borderTopStyle', T, Value>,
  ): this {
    return this.write('borderTopStyle', value);
  }
  /**
   * 设置上边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  borderTopWidth<const Value extends PropertyValue<'borderTopWidth', T>>(
    value: Value & CheckedPropertyValue<'borderTopWidth', T, Value>,
  ): this {
    return this.write('borderTopWidth', value);
  }
  /**
   * 设置四边边框宽度；可见边框通常还需要非 none 的线型。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  borderWidth<const Value extends PropertyValue<'borderWidth', T>>(
    value: Value & CheckedPropertyValue<'borderWidth', T, Value>,
  ): this {
    return this.write('borderWidth', value);
  }
  /**
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  columnRule<const Value extends PropertyValue<'columnRule', T>>(
    value: Value & CheckedPropertyValue<'columnRule', T, Value>,
  ): this {
    return this.write('columnRule', value);
  }
  /**
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  columnRuleColor<const Value extends PropertyValue<'columnRuleColor', T>>(
    value: Value & CheckedPropertyValue<'columnRuleColor', T, Value>,
  ): this {
    return this.write('columnRuleColor', value);
  }
  /**
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  columnRuleStyle<const Value extends PropertyValue<'columnRuleStyle', T>>(
    value: Value & CheckedPropertyValue<'columnRuleStyle', T, Value>,
  ): this {
    return this.write('columnRuleStyle', value);
  }
  /**
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  columnRuleWidth<const Value extends PropertyValue<'columnRuleWidth', T>>(
    value: Value & CheckedPropertyValue<'columnRuleWidth', T, Value>,
  ): this {
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
  outline<const Value extends PropertyValue<'outline', T>>(
    value: Value & CheckedPropertyValue<'outline', T, Value>,
  ): this {
    return this.write('outline', value);
  }
  /**
   * 设置轮廓线颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  outlineColor<const Value extends PropertyValue<'outlineColor', T>>(
    value: Value & CheckedPropertyValue<'outlineColor', T, Value>,
  ): this {
    return this.write('outlineColor', value);
  }
  /**
   * 设置轮廓线与边框边缘之间的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  outlineOffset<const Value extends PropertyValue<'outlineOffset', T>>(
    value: Value & CheckedPropertyValue<'outlineOffset', T, Value>,
  ): this {
    return this.write('outlineOffset', value);
  }
  /**
   * 设置轮廓线线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  outlineStyle<const Value extends PropertyValue<'outlineStyle', T>>(
    value: Value & CheckedPropertyValue<'outlineStyle', T, Value>,
  ): this {
    return this.write('outlineStyle', value);
  }
  /**
   * 设置轮廓线宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  outlineWidth<const Value extends PropertyValue<'outlineWidth', T>>(
    value: Value & CheckedPropertyValue<'outlineWidth', T, Value>,
  ): this {
    return this.write('outlineWidth', value);
  }
  /**
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  backdropFilter<const Value extends PropertyValue<'backdropFilter', T>>(
    value: Value & CheckedPropertyValue<'backdropFilter', T, Value>,
  ): this {
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
  boxShadow<const Value extends PropertyValue<'boxShadow', T>>(
    value: Value & CheckedPropertyValue<'boxShadow', T, Value>,
  ): this {
    return this.write('boxShadow', value);
  }
  /**
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  clipPath<const Value extends PropertyValue<'clipPath', T>>(
    value: Value & CheckedPropertyValue<'clipPath', T, Value>,
  ): this {
    return this.write('clipPath', value);
  }
  /**
   * 设置 SVG 裁剪路径判断内部区域所用的填充规则。
   *
   * CSS 规范初始值：`nonzero`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  clipRule<const Value extends PropertyValue<'clipRule', T>>(
    value: Value & CheckedPropertyValue<'clipRule', T, Value>,
  ): this {
    return this.write('clipRule', value);
  }
  /**
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  filter<const Value extends PropertyValue<'filter', T>>(
    value: Value & CheckedPropertyValue<'filter', T, Value>,
  ): this {
    return this.write('filter', value);
  }
  /**
   * 设置图像是否按元数据等信息调整方向。
   *
   * CSS 规范初始值：`from-image`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  imageOrientation<const Value extends PropertyValue<'imageOrientation', T>>(
    value: Value & CheckedPropertyValue<'imageOrientation', T, Value>,
  ): this {
    return this.write('imageOrientation', value);
  }
  /**
   * 向浏览器指定图像缩放时的插值与清晰度偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  imageRendering<const Value extends PropertyValue<'imageRendering', T>>(
    value: Value & CheckedPropertyValue<'imageRendering', T, Value>,
  ): this {
    return this.write('imageRendering', value);
  }
  /**
   * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。
   *
   * CSS 规范初始值：`1dppx`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  imageResolution<const Value extends PropertyValue<'imageResolution', T>>(
    value: Value & CheckedPropertyValue<'imageResolution', T, Value>,
  ): this {
    return this.write('imageResolution', value);
  }
  /**
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  mask<const Value extends PropertyValue<'mask', T>>(
    value: Value & CheckedPropertyValue<'mask', T, Value>,
  ): this {
    return this.write('mask', value);
  }
  /**
   * 设置基于九宫格图像切片的边框遮罩。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  maskBorder<const Value extends PropertyValue<'maskBorder', T>>(
    value: Value & CheckedPropertyValue<'maskBorder', T, Value>,
  ): this {
    return this.write('maskBorder', value);
  }
  /**
   * 设置边框遮罩使用 alpha 还是亮度信息。
   *
   * CSS 规范初始值：`alpha`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  maskBorderMode<const Value extends PropertyValue<'maskBorderMode', T>>(
    value: Value & CheckedPropertyValue<'maskBorderMode', T, Value>,
  ): this {
    return this.write('maskBorderMode', value);
  }
  /**
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  maskBorderOutset<const Value extends PropertyValue<'maskBorderOutset', T>>(
    value: Value & CheckedPropertyValue<'maskBorderOutset', T, Value>,
  ): this {
    return this.write('maskBorderOutset', value);
  }
  /**
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  maskBorderRepeat<const Value extends PropertyValue<'maskBorderRepeat', T>>(
    value: Value & CheckedPropertyValue<'maskBorderRepeat', T, Value>,
  ): this {
    return this.write('maskBorderRepeat', value);
  }
  /**
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  maskBorderSlice<const Value extends PropertyValue<'maskBorderSlice', T>>(
    value: Value & CheckedPropertyValue<'maskBorderSlice', T, Value>,
  ): this {
    return this.write('maskBorderSlice', value);
  }
  /**
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  maskBorderSource<const Value extends PropertyValue<'maskBorderSource', T>>(
    value: Value & CheckedPropertyValue<'maskBorderSource', T, Value>,
  ): this {
    return this.write('maskBorderSource', value);
  }
  /**
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  maskBorderWidth<const Value extends PropertyValue<'maskBorderWidth', T>>(
    value: Value & CheckedPropertyValue<'maskBorderWidth', T, Value>,
  ): this {
    return this.write('maskBorderWidth', value);
  }
  /**
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  maskClip<const Value extends PropertyValue<'maskClip', T>>(
    value: Value & CheckedPropertyValue<'maskClip', T, Value>,
  ): this {
    return this.write('maskClip', value);
  }
  /**
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：`add`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  maskComposite<const Value extends PropertyValue<'maskComposite', T>>(
    value: Value & CheckedPropertyValue<'maskComposite', T, Value>,
  ): this {
    return this.write('maskComposite', value);
  }
  /**
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  maskImage<const Value extends PropertyValue<'maskImage', T>>(
    value: Value & CheckedPropertyValue<'maskImage', T, Value>,
  ): this {
    return this.write('maskImage', value);
  }
  /**
   * 设置遮罩按 alpha、亮度或源类型解释。
   *
   * CSS 规范初始值：`match-source`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  maskMode<const Value extends PropertyValue<'maskMode', T>>(
    value: Value & CheckedPropertyValue<'maskMode', T, Value>,
  ): this {
    return this.write('maskMode', value);
  }
  /**
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  maskOrigin<const Value extends PropertyValue<'maskOrigin', T>>(
    value: Value & CheckedPropertyValue<'maskOrigin', T, Value>,
  ): this {
    return this.write('maskOrigin', value);
  }
  /**
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  maskPosition<const Value extends PropertyValue<'maskPosition', T>>(
    value: Value & CheckedPropertyValue<'maskPosition', T, Value>,
  ): this {
    return this.write('maskPosition', value);
  }
  /**
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  maskRepeat<const Value extends PropertyValue<'maskRepeat', T>>(
    value: Value & CheckedPropertyValue<'maskRepeat', T, Value>,
  ): this {
    return this.write('maskRepeat', value);
  }
  /**
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  maskSize<const Value extends PropertyValue<'maskSize', T>>(
    value: Value & CheckedPropertyValue<'maskSize', T, Value>,
  ): this {
    return this.write('maskSize', value);
  }
  /**
   * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。
   *
   * CSS 规范初始值：`luminance`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  maskType<const Value extends PropertyValue<'maskType', T>>(
    value: Value & CheckedPropertyValue<'maskType', T, Value>,
  ): this {
    return this.write('maskType', value);
  }
  /**
   * 设置元素整体与其背后内容的颜色混合方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  mixBlendMode<const Value extends PropertyValue<'mixBlendMode', T>>(
    value: Value & CheckedPropertyValue<'mixBlendMode', T, Value>,
  ): this {
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
  objectFit<const Value extends PropertyValue<'objectFit', T>>(
    value: Value & CheckedPropertyValue<'objectFit', T, Value>,
  ): this {
    return this.write('objectFit', value);
  }
  /**
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  objectPosition<const Value extends PropertyValue<'objectPosition', T>>(
    value: Value & CheckedPropertyValue<'objectPosition', T, Value>,
  ): this {
    return this.write('objectPosition', value);
  }
  /**
   * 设置替换元素内容的可视区域，控制用于呈现的图像范围。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  objectViewBox<const Value extends PropertyValue<'objectViewBox', T>>(
    value: Value & CheckedPropertyValue<'objectViewBox', T, Value>,
  ): this {
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
  opacity<const Value extends PropertyValue<'opacity', T>>(
    value: Value & CheckedPropertyValue<'opacity', T, Value>,
  ): this {
    return this.write('opacity', value);
  }
  /**
   * 设置从图像 alpha 信息提取环绕形状时的阈值。
   *
   * CSS 规范初始值：`0.0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  shapeImageThreshold<const Value extends PropertyValue<'shapeImageThreshold', T>>(
    value: Value & CheckedPropertyValue<'shapeImageThreshold', T, Value>,
  ): this {
    return this.write('shapeImageThreshold', value);
  }
  /**
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  shapeMargin<const Value extends PropertyValue<'shapeMargin', T>>(
    value: Value & CheckedPropertyValue<'shapeMargin', T, Value>,
  ): this {
    return this.write('shapeMargin', value);
  }
  /**
   * 设置浮动元素周围行内内容所环绕的形状。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  shapeOutside<const Value extends PropertyValue<'shapeOutside', T>>(
    value: Value & CheckedPropertyValue<'shapeOutside', T, Value>,
  ): this {
    return this.write('shapeOutside', value);
  }
  /**
   * 向 SVG 渲染器提供图形绘制精度与速度的偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  shapeRendering<const Value extends PropertyValue<'shapeRendering', T>>(
    value: Value & CheckedPropertyValue<'shapeRendering', T, Value>,
  ): this {
    return this.write('shapeRendering', value);
  }
  /**
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  animation<const Value extends PropertyValue<'animation', T>>(
    value: Value & CheckedPropertyValue<'animation', T, Value>,
  ): this {
    return this.write('animation', value);
  }
  /**
   * 设置动画效果与底层属性值的替换、叠加或累积方式。
   *
   * CSS 规范初始值：`replace`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  animationComposition<const Value extends PropertyValue<'animationComposition', T>>(
    value: Value & CheckedPropertyValue<'animationComposition', T, Value>,
  ): this {
    return this.write('animationComposition', value);
  }
  /**
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  animationDelay<const Value extends PropertyValue<'animationDelay', T>>(
    value: Value & CheckedPropertyValue<'animationDelay', T, Value>,
  ): this {
    return this.write('animationDelay', value);
  }
  /**
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  animationDirection<const Value extends PropertyValue<'animationDirection', T>>(
    value: Value & CheckedPropertyValue<'animationDirection', T, Value>,
  ): this {
    return this.write('animationDirection', value);
  }
  /**
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  animationDuration<const Value extends PropertyValue<'animationDuration', T>>(
    value: Value & CheckedPropertyValue<'animationDuration', T, Value>,
  ): this {
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
  animationFillMode<const Value extends PropertyValue<'animationFillMode', T>>(
    value: Value & CheckedPropertyValue<'animationFillMode', T, Value>,
  ): this {
    return this.write('animationFillMode', value);
  }
  /**
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  animationIterationCount<const Value extends PropertyValue<'animationIterationCount', T>>(
    value: Value & CheckedPropertyValue<'animationIterationCount', T, Value>,
  ): this {
    return this.write('animationIterationCount', value);
  }
  /**
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  animationName<const Value extends PropertyValue<'animationName', T>>(
    value: Value & CheckedPropertyValue<'animationName', T, Value>,
  ): this {
    return this.write('animationName', value);
  }
  /**
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  animationPlayState<const Value extends PropertyValue<'animationPlayState', T>>(
    value: Value & CheckedPropertyValue<'animationPlayState', T, Value>,
  ): this {
    return this.write('animationPlayState', value);
  }
  /**
   * 设置动画附着到时间线的起止范围。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  animationRange<const Value extends PropertyValue<'animationRange', T>>(
    value: Value & CheckedPropertyValue<'animationRange', T, Value>,
  ): this {
    return this.write('animationRange', value);
  }
  /**
   * 设置动画在时间线上的附着范围终点。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  animationRangeEnd<const Value extends PropertyValue<'animationRangeEnd', T>>(
    value: Value & CheckedPropertyValue<'animationRangeEnd', T, Value>,
  ): this {
    return this.write('animationRangeEnd', value);
  }
  /**
   * 设置动画在时间线上的附着范围起点。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  animationRangeStart<const Value extends PropertyValue<'animationRangeStart', T>>(
    value: Value & CheckedPropertyValue<'animationRangeStart', T, Value>,
  ): this {
    return this.write('animationRangeStart', value);
  }
  /**
   * 选择驱动动画的时间线，例如文档时间或滚动进度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  animationTimeline<const Value extends PropertyValue<'animationTimeline', T>>(
    value: Value & CheckedPropertyValue<'animationTimeline', T, Value>,
  ): this {
    return this.write('animationTimeline', value);
  }
  /**
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  animationTimingFunction<const Value extends PropertyValue<'animationTimingFunction', T>>(
    value: Value & CheckedPropertyValue<'animationTimingFunction', T, Value>,
  ): this {
    return this.write('animationTimingFunction', value);
  }
  /**
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  backfaceVisibility<const Value extends PropertyValue<'backfaceVisibility', T>>(
    value: Value & CheckedPropertyValue<'backfaceVisibility', T, Value>,
  ): this {
    return this.write('backfaceVisibility', value);
  }
  /**
   * 集中设置运动路径、起始位置、距离、方向和锚点。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  offset<const Value extends PropertyValue<'offset', T>>(
    value: Value & CheckedPropertyValue<'offset', T, Value>,
  ): this {
    return this.write('offset', value);
  }
  /**
   * 设置元素沿运动路径移动时与路径相接的内部锚点。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  offsetAnchor<const Value extends PropertyValue<'offsetAnchor', T>>(
    value: Value & CheckedPropertyValue<'offsetAnchor', T, Value>,
  ): this {
    return this.write('offsetAnchor', value);
  }
  /**
   * 设置元素沿运动路径行进的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  offsetDistance<const Value extends PropertyValue<'offsetDistance', T>>(
    value: Value & CheckedPropertyValue<'offsetDistance', T, Value>,
  ): this {
    return this.write('offsetDistance', value);
  }
  /**
   * 设置元素运动所沿用的路径。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  offsetPath<const Value extends PropertyValue<'offsetPath', T>>(
    value: Value & CheckedPropertyValue<'offsetPath', T, Value>,
  ): this {
    return this.write('offsetPath', value);
  }
  /**
   * 设置运动路径的初始位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  offsetPosition<const Value extends PropertyValue<'offsetPosition', T>>(
    value: Value & CheckedPropertyValue<'offsetPosition', T, Value>,
  ): this {
    return this.write('offsetPosition', value);
  }
  /**
   * 设置元素沿运动路径移动时的方向和附加旋转。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  offsetRotate<const Value extends PropertyValue<'offsetRotate', T>>(
    value: Value & CheckedPropertyValue<'offsetRotate', T, Value>,
  ): this {
    return this.write('offsetRotate', value);
  }
  /**
   * 设置路径旋转的旧名称；新代码使用 offset-rotate。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotation
   */
  offsetRotation<const Value extends PropertyValue<'offsetRotation', T>>(
    value: Value & CheckedPropertyValue<'offsetRotation', T, Value>,
  ): this {
    return this.write('offsetRotation', value);
  }
  /**
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  perspective<const Value extends PropertyValue<'perspective', T>>(
    value: Value & CheckedPropertyValue<'perspective', T, Value>,
  ): this {
    return this.write('perspective', value);
  }
  /**
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  perspectiveOrigin<const Value extends PropertyValue<'perspectiveOrigin', T>>(
    value: Value & CheckedPropertyValue<'perspectiveOrigin', T, Value>,
  ): this {
    return this.write('perspectiveOrigin', value);
  }
  /**
   * 独立设置元素旋转，不必重写 transform 中的其他变换。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  rotate<const Value extends PropertyValue<'rotate', T>>(
    value: Value & CheckedPropertyValue<'rotate', T, Value>,
  ): this {
    return this.write('rotate', value);
  }
  /**
   * 独立设置元素的缩放比例。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  scale<const Value extends PropertyValue<'scale', T>>(
    value: Value & CheckedPropertyValue<'scale', T, Value>,
  ): this {
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
  transform<const Value extends PropertyValue<'transform', T>>(
    value: Value & CheckedPropertyValue<'transform', T, Value>,
  ): this {
    return this.write('transform', value);
  }
  /**
   * 设置变换及其原点所依据的参照盒。
   *
   * CSS 规范初始值：`view-box`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  transformBox<const Value extends PropertyValue<'transformBox', T>>(
    value: Value & CheckedPropertyValue<'transformBox', T, Value>,
  ): this {
    return this.write('transformBox', value);
  }
  /**
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  transformOrigin<const Value extends PropertyValue<'transformOrigin', T>>(
    value: Value & CheckedPropertyValue<'transformOrigin', T, Value>,
  ): this {
    return this.write('transformOrigin', value);
  }
  /**
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：`flat`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  transformStyle<const Value extends PropertyValue<'transformStyle', T>>(
    value: Value & CheckedPropertyValue<'transformStyle', T, Value>,
  ): this {
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
  transition<const Value extends PropertyValue<'transition', T>>(
    value: Value & CheckedPropertyValue<'transition', T, Value>,
  ): this {
    return this.write('transition', value);
  }
  /**
   * 控制离散属性是否可以启动 CSS 过渡。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  transitionBehavior<const Value extends PropertyValue<'transitionBehavior', T>>(
    value: Value & CheckedPropertyValue<'transitionBehavior', T, Value>,
  ): this {
    return this.write('transitionBehavior', value);
  }
  /**
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  transitionDelay<const Value extends PropertyValue<'transitionDelay', T>>(
    value: Value & CheckedPropertyValue<'transitionDelay', T, Value>,
  ): this {
    return this.write('transitionDelay', value);
  }
  /**
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  transitionDuration<const Value extends PropertyValue<'transitionDuration', T>>(
    value: Value & CheckedPropertyValue<'transitionDuration', T, Value>,
  ): this {
    return this.write('transitionDuration', value);
  }
  /**
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  transitionProperty<const Value extends PropertyValue<'transitionProperty', T>>(
    value: Value & CheckedPropertyValue<'transitionProperty', T, Value>,
  ): this {
    return this.write('transitionProperty', value);
  }
  /**
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  transitionTimingFunction<const Value extends PropertyValue<'transitionTimingFunction', T>>(
    value: Value & CheckedPropertyValue<'transitionTimingFunction', T, Value>,
  ): this {
    return this.write('transitionTimingFunction', value);
  }
  /**
   * 独立设置元素在二维或三维空间中的平移。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  translate<const Value extends PropertyValue<'translate', T>>(
    value: Value & CheckedPropertyValue<'translate', T, Value>,
  ): this {
    return this.write('translate', value);
  }
  /**
   * 为视图过渡的快照伪元素分组，以便共用样式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  viewTransitionClass<const Value extends PropertyValue<'viewTransitionClass', T>>(
    value: Value & CheckedPropertyValue<'viewTransitionClass', T, Value>,
  ): this {
    return this.write('viewTransitionClass', value);
  }
  /**
   * 为视图过渡中的元素命名，以匹配前后状态的快照。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  viewTransitionName<const Value extends PropertyValue<'viewTransitionName', T>>(
    value: Value & CheckedPropertyValue<'viewTransitionName', T, Value>,
  ): this {
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
  overflow<const Value extends PropertyValue<'overflow', T>>(
    value: Value & CheckedPropertyValue<'overflow', T, Value>,
  ): this {
    return this.write('overflow', value);
  }
  /**
   * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  overflowAnchor<const Value extends PropertyValue<'overflowAnchor', T>>(
    value: Value & CheckedPropertyValue<'overflowAnchor', T, Value>,
  ): this {
    return this.write('overflowAnchor', value);
  }
  /**
   * 设置逻辑块轴上的溢出行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  overflowBlock<const Value extends PropertyValue<'overflowBlock', T>>(
    value: Value & CheckedPropertyValue<'overflowBlock', T, Value>,
  ): this {
    return this.write('overflowBlock', value);
  }
  /**
   * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  overflowClipBox<const Value extends PropertyValue<'overflowClipBox', T>>(
    value: Value & CheckedPropertyValue<'overflowClipBox', T, Value>,
  ): this {
    return this.write('overflowClipBox', value);
  }
  /**
   * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。
   *
   * CSS 规范初始值：`0px`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  overflowClipMargin<const Value extends PropertyValue<'overflowClipMargin', T>>(
    value: Value & CheckedPropertyValue<'overflowClipMargin', T, Value>,
  ): this {
    return this.write('overflowClipMargin', value);
  }
  /**
   * 设置逻辑行内轴上的溢出行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  overflowInline<const Value extends PropertyValue<'overflowInline', T>>(
    value: Value & CheckedPropertyValue<'overflowInline', T, Value>,
  ): this {
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
  overflowWrap<const Value extends PropertyValue<'overflowWrap', T>>(
    value: Value & CheckedPropertyValue<'overflowWrap', T, Value>,
  ): this {
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
  overflowX<const Value extends PropertyValue<'overflowX', T>>(
    value: Value & CheckedPropertyValue<'overflowX', T, Value>,
  ): this {
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
  overflowY<const Value extends PropertyValue<'overflowY', T>>(
    value: Value & CheckedPropertyValue<'overflowY', T, Value>,
  ): this {
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
  overscrollBehavior<const Value extends PropertyValue<'overscrollBehavior', T>>(
    value: Value & CheckedPropertyValue<'overscrollBehavior', T, Value>,
  ): this {
    return this.write('overscrollBehavior', value);
  }
  /**
   * 控制逻辑块轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  overscrollBehaviorBlock<const Value extends PropertyValue<'overscrollBehaviorBlock', T>>(
    value: Value & CheckedPropertyValue<'overscrollBehaviorBlock', T, Value>,
  ): this {
    return this.write('overscrollBehaviorBlock', value);
  }
  /**
   * 控制逻辑行内轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  overscrollBehaviorInline<const Value extends PropertyValue<'overscrollBehaviorInline', T>>(
    value: Value & CheckedPropertyValue<'overscrollBehaviorInline', T, Value>,
  ): this {
    return this.write('overscrollBehaviorInline', value);
  }
  /**
   * 控制水平方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  overscrollBehaviorX<const Value extends PropertyValue<'overscrollBehaviorX', T>>(
    value: Value & CheckedPropertyValue<'overscrollBehaviorX', T, Value>,
  ): this {
    return this.write('overscrollBehaviorX', value);
  }
  /**
   * 控制垂直方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  overscrollBehaviorY<const Value extends PropertyValue<'overscrollBehaviorY', T>>(
    value: Value & CheckedPropertyValue<'overscrollBehaviorY', T, Value>,
  ): this {
    return this.write('overscrollBehaviorY', value);
  }
  /**
   * 设置滚动条滑块和轨道的颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  scrollbarColor<const Value extends PropertyValue<'scrollbarColor', T>>(
    value: Value & CheckedPropertyValue<'scrollbarColor', T, Value>,
  ): this {
    return this.write('scrollbarColor', value);
  }
  /**
   * 设置是否预留滚动条槽位，以减少滚动条出现时的布局变化。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  scrollbarGutter<const Value extends PropertyValue<'scrollbarGutter', T>>(
    value: Value & CheckedPropertyValue<'scrollbarGutter', T, Value>,
  ): this {
    return this.write('scrollbarGutter', value);
  }
  /**
   * 设置滚动条采用正常、较细或隐藏的外观。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  scrollbarWidth<const Value extends PropertyValue<'scrollbarWidth', T>>(
    value: Value & CheckedPropertyValue<'scrollbarWidth', T, Value>,
  ): this {
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
  scrollBehavior<const Value extends PropertyValue<'scrollBehavior', T>>(
    value: Value & CheckedPropertyValue<'scrollBehavior', T, Value>,
  ): this {
    return this.write('scrollBehavior', value);
  }
  /**
   * 将元素声明为祖先滚动容器首次呈现时的候选滚动吸附目标。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  scrollInitialTarget<const Value extends PropertyValue<'scrollInitialTarget', T>>(
    value: Value & CheckedPropertyValue<'scrollInitialTarget', T, Value>,
  ): this {
    return this.write('scrollInitialTarget', value);
  }
  /**
   * 设置元素滚动目标区域的四边外扩距离，不改变普通布局外边距。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  scrollMargin<const Value extends PropertyValue<'scrollMargin', T>>(
    value: Value & CheckedPropertyValue<'scrollMargin', T, Value>,
  ): this {
    return this.write('scrollMargin', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴两侧的外扩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  scrollMarginBlock<const Value extends PropertyValue<'scrollMarginBlock', T>>(
    value: Value & CheckedPropertyValue<'scrollMarginBlock', T, Value>,
  ): this {
    return this.write('scrollMarginBlock', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴结束侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  scrollMarginBlockEnd<const Value extends PropertyValue<'scrollMarginBlockEnd', T>>(
    value: Value & CheckedPropertyValue<'scrollMarginBlockEnd', T, Value>,
  ): this {
    return this.write('scrollMarginBlockEnd', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴起始侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  scrollMarginBlockStart<const Value extends PropertyValue<'scrollMarginBlockStart', T>>(
    value: Value & CheckedPropertyValue<'scrollMarginBlockStart', T, Value>,
  ): this {
    return this.write('scrollMarginBlockStart', value);
  }
  /**
   * 设置滚动目标区域下侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  scrollMarginBottom<const Value extends PropertyValue<'scrollMarginBottom', T>>(
    value: Value & CheckedPropertyValue<'scrollMarginBottom', T, Value>,
  ): this {
    return this.write('scrollMarginBottom', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴两侧的外扩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  scrollMarginInline<const Value extends PropertyValue<'scrollMarginInline', T>>(
    value: Value & CheckedPropertyValue<'scrollMarginInline', T, Value>,
  ): this {
    return this.write('scrollMarginInline', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴结束侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  scrollMarginInlineEnd<const Value extends PropertyValue<'scrollMarginInlineEnd', T>>(
    value: Value & CheckedPropertyValue<'scrollMarginInlineEnd', T, Value>,
  ): this {
    return this.write('scrollMarginInlineEnd', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴起始侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  scrollMarginInlineStart<const Value extends PropertyValue<'scrollMarginInlineStart', T>>(
    value: Value & CheckedPropertyValue<'scrollMarginInlineStart', T, Value>,
  ): this {
    return this.write('scrollMarginInlineStart', value);
  }
  /**
   * 设置滚动目标区域左侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  scrollMarginLeft<const Value extends PropertyValue<'scrollMarginLeft', T>>(
    value: Value & CheckedPropertyValue<'scrollMarginLeft', T, Value>,
  ): this {
    return this.write('scrollMarginLeft', value);
  }
  /**
   * 设置滚动目标区域右侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  scrollMarginRight<const Value extends PropertyValue<'scrollMarginRight', T>>(
    value: Value & CheckedPropertyValue<'scrollMarginRight', T, Value>,
  ): this {
    return this.write('scrollMarginRight', value);
  }
  /**
   * 设置滚动目标区域上侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  scrollMarginTop<const Value extends PropertyValue<'scrollMarginTop', T>>(
    value: Value & CheckedPropertyValue<'scrollMarginTop', T, Value>,
  ): this {
    return this.write('scrollMarginTop', value);
  }
  /**
   * 设置滚动容器最佳可视区域的四边内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  scrollPadding<const Value extends PropertyValue<'scrollPadding', T>>(
    value: Value & CheckedPropertyValue<'scrollPadding', T, Value>,
  ): this {
    return this.write('scrollPadding', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴两侧的内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  scrollPaddingBlock<const Value extends PropertyValue<'scrollPaddingBlock', T>>(
    value: Value & CheckedPropertyValue<'scrollPaddingBlock', T, Value>,
  ): this {
    return this.write('scrollPaddingBlock', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴结束侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  scrollPaddingBlockEnd<const Value extends PropertyValue<'scrollPaddingBlockEnd', T>>(
    value: Value & CheckedPropertyValue<'scrollPaddingBlockEnd', T, Value>,
  ): this {
    return this.write('scrollPaddingBlockEnd', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴起始侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  scrollPaddingBlockStart<const Value extends PropertyValue<'scrollPaddingBlockStart', T>>(
    value: Value & CheckedPropertyValue<'scrollPaddingBlockStart', T, Value>,
  ): this {
    return this.write('scrollPaddingBlockStart', value);
  }
  /**
   * 设置滚动容器最佳可视区域下侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  scrollPaddingBottom<const Value extends PropertyValue<'scrollPaddingBottom', T>>(
    value: Value & CheckedPropertyValue<'scrollPaddingBottom', T, Value>,
  ): this {
    return this.write('scrollPaddingBottom', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴两侧的内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  scrollPaddingInline<const Value extends PropertyValue<'scrollPaddingInline', T>>(
    value: Value & CheckedPropertyValue<'scrollPaddingInline', T, Value>,
  ): this {
    return this.write('scrollPaddingInline', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴结束侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd<const Value extends PropertyValue<'scrollPaddingInlineEnd', T>>(
    value: Value & CheckedPropertyValue<'scrollPaddingInlineEnd', T, Value>,
  ): this {
    return this.write('scrollPaddingInlineEnd', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴起始侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  scrollPaddingInlineStart<const Value extends PropertyValue<'scrollPaddingInlineStart', T>>(
    value: Value & CheckedPropertyValue<'scrollPaddingInlineStart', T, Value>,
  ): this {
    return this.write('scrollPaddingInlineStart', value);
  }
  /**
   * 设置滚动容器最佳可视区域左侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  scrollPaddingLeft<const Value extends PropertyValue<'scrollPaddingLeft', T>>(
    value: Value & CheckedPropertyValue<'scrollPaddingLeft', T, Value>,
  ): this {
    return this.write('scrollPaddingLeft', value);
  }
  /**
   * 设置滚动容器最佳可视区域右侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  scrollPaddingRight<const Value extends PropertyValue<'scrollPaddingRight', T>>(
    value: Value & CheckedPropertyValue<'scrollPaddingRight', T, Value>,
  ): this {
    return this.write('scrollPaddingRight', value);
  }
  /**
   * 设置滚动容器最佳可视区域上侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  scrollPaddingTop<const Value extends PropertyValue<'scrollPaddingTop', T>>(
    value: Value & CheckedPropertyValue<'scrollPaddingTop', T, Value>,
  ): this {
    return this.write('scrollPaddingTop', value);
  }
  /**
   * 设置元素作为滚动吸附目标时在块轴和行内轴上的对齐位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  scrollSnapAlign<const Value extends PropertyValue<'scrollSnapAlign', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapAlign', T, Value>,
  ): this {
    return this.write('scrollSnapAlign', value);
  }
  /**
   * 设置滚动吸附区域外扩的旧名称；新代码使用 scroll-margin。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin
   */
  scrollSnapMargin<const Value extends PropertyValue<'scrollSnapMargin', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapMargin', T, Value>,
  ): this {
    return this.write('scrollSnapMargin', value);
  }
  /**
   * 设置滚动吸附区域下侧外扩的旧名称；新代码使用 scroll-margin-bottom。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-bottom
   */
  scrollSnapMarginBottom<const Value extends PropertyValue<'scrollSnapMarginBottom', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapMarginBottom', T, Value>,
  ): this {
    return this.write('scrollSnapMarginBottom', value);
  }
  /**
   * 设置滚动吸附区域左侧外扩的旧名称；新代码使用 scroll-margin-left。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-left
   */
  scrollSnapMarginLeft<const Value extends PropertyValue<'scrollSnapMarginLeft', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapMarginLeft', T, Value>,
  ): this {
    return this.write('scrollSnapMarginLeft', value);
  }
  /**
   * 设置滚动吸附区域右侧外扩的旧名称；新代码使用 scroll-margin-right。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-right
   */
  scrollSnapMarginRight<const Value extends PropertyValue<'scrollSnapMarginRight', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapMarginRight', T, Value>,
  ): this {
    return this.write('scrollSnapMarginRight', value);
  }
  /**
   * 设置滚动吸附区域上侧外扩的旧名称；新代码使用 scroll-margin-top。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-top
   */
  scrollSnapMarginTop<const Value extends PropertyValue<'scrollSnapMarginTop', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapMarginTop', T, Value>,
  ): this {
    return this.write('scrollSnapMarginTop', value);
  }
  /**
   * 设置滚动时是否允许越过该元素的吸附位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  scrollSnapStop<const Value extends PropertyValue<'scrollSnapStop', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapStop', T, Value>,
  ): this {
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
  scrollSnapType<const Value extends PropertyValue<'scrollSnapType', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapType', T, Value>,
  ): this {
    return this.write('scrollSnapType', value);
  }
  /**
   * 同时声明滚动进度时间线的名称和轴。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  scrollTimeline<const Value extends PropertyValue<'scrollTimeline', T>>(
    value: Value & CheckedPropertyValue<'scrollTimeline', T, Value>,
  ): this {
    return this.write('scrollTimeline', value);
  }
  /**
   * 设置滚动进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：`block`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  scrollTimelineAxis<const Value extends PropertyValue<'scrollTimelineAxis', T>>(
    value: Value & CheckedPropertyValue<'scrollTimelineAxis', T, Value>,
  ): this {
    return this.write('scrollTimelineAxis', value);
  }
  /**
   * 声明基于当前容器滚动进度的时间线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  scrollTimelineName<const Value extends PropertyValue<'scrollTimelineName', T>>(
    value: Value & CheckedPropertyValue<'scrollTimelineName', T, Value>,
  ): this {
    return this.write('scrollTimelineName', value);
  }
  /**
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  appearance<const Value extends PropertyValue<'appearance', T>>(
    value: Value & CheckedPropertyValue<'appearance', T, Value>,
  ): this {
    return this.write('appearance', value);
  }
  /**
   * 集中设置文本插入光标的颜色和形状。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  caret<const Value extends PropertyValue<'caret', T>>(
    value: Value & CheckedPropertyValue<'caret', T, Value>,
  ): this {
    return this.write('caret', value);
  }
  /**
   * 设置文本插入光标的形状。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  caretShape<const Value extends PropertyValue<'caretShape', T>>(
    value: Value & CheckedPropertyValue<'caretShape', T, Value>,
  ): this {
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
  contentVisibility<const Value extends PropertyValue<'contentVisibility', T>>(
    value: Value & CheckedPropertyValue<'contentVisibility', T, Value>,
  ): this {
    return this.write('contentVisibility', value);
  }
  /**
   * 设置指针位于元素上方时显示的光标。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  cursor<const Value extends PropertyValue<'cursor', T>>(
    value: Value & CheckedPropertyValue<'cursor', T, Value>,
  ): this {
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
  pointerEvents<const Value extends PropertyValue<'pointerEvents', T>>(
    value: Value & CheckedPropertyValue<'pointerEvents', T, Value>,
  ): this {
    return this.write('pointerEvents', value);
  }
  /**
   * 设置用户是否能调整元素尺寸以及可调整的方向。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  resize<const Value extends PropertyValue<'resize', T>>(
    value: Value & CheckedPropertyValue<'resize', T, Value>,
  ): this {
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
  touchAction<const Value extends PropertyValue<'touchAction', T>>(
    value: Value & CheckedPropertyValue<'touchAction', T, Value>,
  ): this {
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
  userSelect<const Value extends PropertyValue<'userSelect', T>>(
    value: Value & CheckedPropertyValue<'userSelect', T, Value>,
  ): this {
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
  visibility<const Value extends PropertyValue<'visibility', T>>(
    value: Value & CheckedPropertyValue<'visibility', T, Value>,
  ): this {
    return this.write('visibility', value);
  }
  /**
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  breakAfter<const Value extends PropertyValue<'breakAfter', T>>(
    value: Value & CheckedPropertyValue<'breakAfter', T, Value>,
  ): this {
    return this.write('breakAfter', value);
  }
  /**
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  breakBefore<const Value extends PropertyValue<'breakBefore', T>>(
    value: Value & CheckedPropertyValue<'breakBefore', T, Value>,
  ): this {
    return this.write('breakBefore', value);
  }
  /**
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  breakInside<const Value extends PropertyValue<'breakInside', T>>(
    value: Value & CheckedPropertyValue<'breakInside', T, Value>,
  ): this {
    return this.write('breakInside', value);
  }
  /**
   * 设置表格标题相对于表格的放置侧。
   *
   * CSS 规范初始值：`top`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  captionSide<const Value extends PropertyValue<'captionSide', T>>(
    value: Value & CheckedPropertyValue<'captionSide', T, Value>,
  ): this {
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
  contain<const Value extends PropertyValue<'contain', T>>(
    value: Value & CheckedPropertyValue<'contain', T, Value>,
  ): this {
    return this.write('contain', value);
  }
  /**
   * 同时声明查询容器的名称和类型。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  container<const Value extends PropertyValue<'container', T>>(
    value: Value & CheckedPropertyValue<'container', T, Value>,
  ): this {
    return this.write('container', value);
  }
  /**
   * 为查询容器命名，供 @container 条件规则选择。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  containerName<const Value extends PropertyValue<'containerName', T>>(
    value: Value & CheckedPropertyValue<'containerName', T, Value>,
  ): this {
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
  containerType<const Value extends PropertyValue<'containerType', T>>(
    value: Value & CheckedPropertyValue<'containerType', T, Value>,
  ): this {
    return this.write('containerType', value);
  }
  /**
   * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  containIntrinsicBlockSize<const Value extends PropertyValue<'containIntrinsicBlockSize', T>>(
    value: Value & CheckedPropertyValue<'containIntrinsicBlockSize', T, Value>,
  ): this {
    return this.write('containIntrinsicBlockSize', value);
  }
  /**
   * 设置高度隔离或跳过内容渲染时使用的替代内部高度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  containIntrinsicHeight<const Value extends PropertyValue<'containIntrinsicHeight', T>>(
    value: Value & CheckedPropertyValue<'containIntrinsicHeight', T, Value>,
  ): this {
    return this.write('containIntrinsicHeight', value);
  }
  /**
   * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  containIntrinsicInlineSize<const Value extends PropertyValue<'containIntrinsicInlineSize', T>>(
    value: Value & CheckedPropertyValue<'containIntrinsicInlineSize', T, Value>,
  ): this {
    return this.write('containIntrinsicInlineSize', value);
  }
  /**
   * 集中设置尺寸隔离时使用的替代内部宽高。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  containIntrinsicSize<const Value extends PropertyValue<'containIntrinsicSize', T>>(
    value: Value & CheckedPropertyValue<'containIntrinsicSize', T, Value>,
  ): this {
    return this.write('containIntrinsicSize', value);
  }
  /**
   * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  containIntrinsicWidth<const Value extends PropertyValue<'containIntrinsicWidth', T>>(
    value: Value & CheckedPropertyValue<'containIntrinsicWidth', T, Value>,
  ): this {
    return this.write('containIntrinsicWidth', value);
  }
  /**
   * 设置生成内容、替换内容或伪元素的内容。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  content<const Value extends PropertyValue<'content', T>>(
    value: Value & CheckedPropertyValue<'content', T, Value>,
  ): this {
    return this.write('content', value);
  }
  /**
   * 增加或减少指定 CSS 计数器的值。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  counterIncrement<const Value extends PropertyValue<'counterIncrement', T>>(
    value: Value & CheckedPropertyValue<'counterIncrement', T, Value>,
  ): this {
    return this.write('counterIncrement', value);
  }
  /**
   * 创建或重置 CSS 计数器。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  counterReset<const Value extends PropertyValue<'counterReset', T>>(
    value: Value & CheckedPropertyValue<'counterReset', T, Value>,
  ): this {
    return this.write('counterReset', value);
  }
  /**
   * 设置已有 CSS 计数器的值，必要时创建计数器。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  counterSet<const Value extends PropertyValue<'counterSet', T>>(
    value: Value & CheckedPropertyValue<'counterSet', T, Value>,
  ): this {
    return this.write('counterSet', value);
  }
  /**
   * 控制分离边框表格中空单元格的边框和背景是否绘制。
   *
   * CSS 规范初始值：`show`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  emptyCells<const Value extends PropertyValue<'emptyCells', T>>(
    value: Value & CheckedPropertyValue<'emptyCells', T, Value>,
  ): this {
    return this.write('emptyCells', value);
  }
  /**
   * 集中设置列表标记的类型、图像和位置。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  listStyle<const Value extends PropertyValue<'listStyle', T>>(
    value: Value & CheckedPropertyValue<'listStyle', T, Value>,
  ): this {
    return this.write('listStyle', value);
  }
  /**
   * 设置用作列表标记的图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  listStyleImage<const Value extends PropertyValue<'listStyleImage', T>>(
    value: Value & CheckedPropertyValue<'listStyleImage', T, Value>,
  ): this {
    return this.write('listStyleImage', value);
  }
  /**
   * 设置列表标记位于主块盒内部还是外部。
   *
   * CSS 规范初始值：`outside`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  listStylePosition<const Value extends PropertyValue<'listStylePosition', T>>(
    value: Value & CheckedPropertyValue<'listStylePosition', T, Value>,
  ): this {
    return this.write('listStylePosition', value);
  }
  /**
   * 设置列表标记或计数器的样式。
   *
   * CSS 规范初始值：`disc`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  listStyleType<const Value extends PropertyValue<'listStyleType', T>>(
    value: Value & CheckedPropertyValue<'listStyleType', T, Value>,
  ): this {
    return this.write('listStyleType', value);
  }
  /**
   * 设置分页或分栏断点前需保留的最少行数。
   *
   * CSS 规范初始值：`2`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  orphans<const Value extends PropertyValue<'orphans', T>>(
    value: Value & CheckedPropertyValue<'orphans', T, Value>,
  ): this {
    return this.write('orphans', value);
  }
  /**
   * 选择分页媒体中使用的命名页面类型。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  page<const Value extends PropertyValue<'page', T>>(
    value: Value & CheckedPropertyValue<'page', T, Value>,
  ): this {
    return this.write('page', value);
  }
  /**
   * 设置表格列宽采用自动还是固定布局算法。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  tableLayout<const Value extends PropertyValue<'tableLayout', T>>(
    value: Value & CheckedPropertyValue<'tableLayout', T, Value>,
  ): this {
    return this.write('tableLayout', value);
  }
  /**
   * 设置分页或分栏断点后需保留的最少行数。
   *
   * CSS 规范初始值：`2`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  widows<const Value extends PropertyValue<'widows', T>>(
    value: Value & CheckedPropertyValue<'widows', T, Value>,
  ): this {
    return this.write('widows', value);
  }
  /**
   * 使 SVG 文本基线相对于其基准位置偏移。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  baselineShift<const Value extends PropertyValue<'baselineShift', T>>(
    value: Value & CheckedPropertyValue<'baselineShift', T, Value>,
  ): this {
    return this.write('baselineShift', value);
  }
  /**
   * 选择 SVG 文本布局的主导基线及基线表。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  dominantBaseline<const Value extends PropertyValue<'dominantBaseline', T>>(
    value: Value & CheckedPropertyValue<'dominantBaseline', T, Value>,
  ): this {
    return this.write('dominantBaseline', value);
  }
  /**
   * 设置 SVG 图形内部的填充绘制方式。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  fill<const Value extends PropertyValue<'fill', T>>(
    value: Value & CheckedPropertyValue<'fill', T, Value>,
  ): this {
    return this.write('fill', value);
  }
  /**
   * 设置 SVG 填充的不透明度，不影响描边。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  fillOpacity<const Value extends PropertyValue<'fillOpacity', T>>(
    value: Value & CheckedPropertyValue<'fillOpacity', T, Value>,
  ): this {
    return this.write('fillOpacity', value);
  }
  /**
   * 设置复杂 SVG 路径的内部区域判定规则。
   *
   * CSS 规范初始值：`nonzero`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  fillRule<const Value extends PropertyValue<'fillRule', T>>(
    value: Value & CheckedPropertyValue<'fillRule', T, Value>,
  ): this {
    return this.write('fillRule', value);
  }
  /**
   * 设置 SVG feFlood 或相关滤镜的洪泛颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  floodColor<const Value extends PropertyValue<'floodColor', T>>(
    value: Value & CheckedPropertyValue<'floodColor', T, Value>,
  ): this {
    return this.write('floodColor', value);
  }
  /**
   * 设置 SVG 洪泛滤镜颜色的不透明度。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  floodOpacity<const Value extends PropertyValue<'floodOpacity', T>>(
    value: Value & CheckedPropertyValue<'floodOpacity', T, Value>,
  ): this {
    return this.write('floodOpacity', value);
  }
  /**
   * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  glyphOrientationVertical<const Value extends PropertyValue<'glyphOrientationVertical', T>>(
    value: Value & CheckedPropertyValue<'glyphOrientationVertical', T, Value>,
  ): this {
    return this.write('glyphOrientationVertical', value);
  }
  /**
   * 设置 SVG 光照滤镜使用的光源颜色。
   *
   * CSS 规范初始值：`white`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  lightingColor<const Value extends PropertyValue<'lightingColor', T>>(
    value: Value & CheckedPropertyValue<'lightingColor', T, Value>,
  ): this {
    return this.write('lightingColor', value);
  }
  /**
   * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  marker<const Value extends PropertyValue<'marker', T>>(
    value: Value & CheckedPropertyValue<'marker', T, Value>,
  ): this {
    return this.write('marker', value);
  }
  /**
   * 设置 SVG 路径终点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  markerEnd<const Value extends PropertyValue<'markerEnd', T>>(
    value: Value & CheckedPropertyValue<'markerEnd', T, Value>,
  ): this {
    return this.write('markerEnd', value);
  }
  /**
   * 设置 SVG 路径中间顶点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  markerMid<const Value extends PropertyValue<'markerMid', T>>(
    value: Value & CheckedPropertyValue<'markerMid', T, Value>,
  ): this {
    return this.write('markerMid', value);
  }
  /**
   * 设置 SVG 路径起点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  markerStart<const Value extends PropertyValue<'markerStart', T>>(
    value: Value & CheckedPropertyValue<'markerStart', T, Value>,
  ): this {
    return this.write('markerStart', value);
  }
  /**
   * 设置 SVG 填充、描边和标记的绘制先后顺序。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  paintOrder<const Value extends PropertyValue<'paintOrder', T>>(
    value: Value & CheckedPropertyValue<'paintOrder', T, Value>,
  ): this {
    return this.write('paintOrder', value);
  }
  /**
   * 设置 SVG 渐变 stop 节点的颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  stopColor<const Value extends PropertyValue<'stopColor', T>>(
    value: Value & CheckedPropertyValue<'stopColor', T, Value>,
  ): this {
    return this.write('stopColor', value);
  }
  /**
   * 设置 SVG 渐变 stop 节点的不透明度。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  stopOpacity<const Value extends PropertyValue<'stopOpacity', T>>(
    value: Value & CheckedPropertyValue<'stopOpacity', T, Value>,
  ): this {
    return this.write('stopOpacity', value);
  }
  /**
   * 设置 SVG 图形轮廓的描边绘制方式。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  stroke<const Value extends PropertyValue<'stroke', T>>(
    value: Value & CheckedPropertyValue<'stroke', T, Value>,
  ): this {
    return this.write('stroke', value);
  }
  /**
   * 设置 SVG 描边虚线中线段与空隙的长度序列。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  strokeDasharray<const Value extends PropertyValue<'strokeDasharray', T>>(
    value: Value & CheckedPropertyValue<'strokeDasharray', T, Value>,
  ): this {
    return this.write('strokeDasharray', value);
  }
  /**
   * 设置 SVG 虚线描边相对于路径起点的偏移。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  strokeDashoffset<const Value extends PropertyValue<'strokeDashoffset', T>>(
    value: Value & CheckedPropertyValue<'strokeDashoffset', T, Value>,
  ): this {
    return this.write('strokeDashoffset', value);
  }
  /**
   * 设置开放 SVG 子路径端点的描边形状。
   *
   * CSS 规范初始值：`butt`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  strokeLinecap<const Value extends PropertyValue<'strokeLinecap', T>>(
    value: Value & CheckedPropertyValue<'strokeLinecap', T, Value>,
  ): this {
    return this.write('strokeLinecap', value);
  }
  /**
   * 设置 SVG 路径转角处描边的连接形状。
   *
   * CSS 规范初始值：`miter`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  strokeLinejoin<const Value extends PropertyValue<'strokeLinejoin', T>>(
    value: Value & CheckedPropertyValue<'strokeLinejoin', T, Value>,
  ): this {
    return this.write('strokeLinejoin', value);
  }
  /**
   * 限制尖角连接的延伸比例，超过阈值时改变连接形状。
   *
   * CSS 规范初始值：`4`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  strokeMiterlimit<const Value extends PropertyValue<'strokeMiterlimit', T>>(
    value: Value & CheckedPropertyValue<'strokeMiterlimit', T, Value>,
  ): this {
    return this.write('strokeMiterlimit', value);
  }
  /**
   * 设置 SVG 描边的不透明度，不影响填充。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  strokeOpacity<const Value extends PropertyValue<'strokeOpacity', T>>(
    value: Value & CheckedPropertyValue<'strokeOpacity', T, Value>,
  ): this {
    return this.write('strokeOpacity', value);
  }
  /**
   * 设置 SVG 描边宽度。
   *
   * CSS 规范初始值：`1px`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  strokeWidth<const Value extends PropertyValue<'strokeWidth', T>>(
    value: Value & CheckedPropertyValue<'strokeWidth', T, Value>,
  ): this {
    return this.write('strokeWidth', value);
  }
  /**
   * 设置 SVG 图形变换时对描边等矢量效果的处理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  vectorEffect<const Value extends PropertyValue<'vectorEffect', T>>(
    value: Value & CheckedPropertyValue<'vectorEffect', T, Value>,
  ): this {
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
  boxAlign<const Value extends PropertyValue<'boxAlign', T>>(
    value: Value & CheckedPropertyValue<'boxAlign', T, Value>,
  ): this {
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
  boxDirection<const Value extends PropertyValue<'boxDirection', T>>(
    value: Value & CheckedPropertyValue<'boxDirection', T, Value>,
  ): this {
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
  boxFlex<const Value extends PropertyValue<'boxFlex', T>>(
    value: Value & CheckedPropertyValue<'boxFlex', T, Value>,
  ): this {
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
  boxFlexGroup<const Value extends PropertyValue<'boxFlexGroup', T>>(
    value: Value & CheckedPropertyValue<'boxFlexGroup', T, Value>,
  ): this {
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
  boxLines<const Value extends PropertyValue<'boxLines', T>>(
    value: Value & CheckedPropertyValue<'boxLines', T, Value>,
  ): this {
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
  boxOrdinalGroup<const Value extends PropertyValue<'boxOrdinalGroup', T>>(
    value: Value & CheckedPropertyValue<'boxOrdinalGroup', T, Value>,
  ): this {
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
  boxOrient<const Value extends PropertyValue<'boxOrient', T>>(
    value: Value & CheckedPropertyValue<'boxOrient', T, Value>,
  ): this {
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
  boxPack<const Value extends PropertyValue<'boxPack', T>>(
    value: Value & CheckedPropertyValue<'boxPack', T, Value>,
  ): this {
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
  clip<const Value extends PropertyValue<'clip', T>>(
    value: Value & CheckedPropertyValue<'clip', T, Value>,
  ): this {
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
  fontStretch<const Value extends PropertyValue<'fontStretch', T>>(
    value: Value & CheckedPropertyValue<'fontStretch', T, Value>,
  ): this {
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
  gridColumnGap<const Value extends PropertyValue<'gridColumnGap', T>>(
    value: Value & CheckedPropertyValue<'gridColumnGap', T, Value>,
  ): this {
    return this.write('gridColumnGap', value);
  }
  /**
   * 兼容属性 grid-gap；优先参考标准属性 gap及浏览器支持范围。
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-gap
   */
  gridGap<const Value extends PropertyValue<'gridGap', T>>(
    value: Value & CheckedPropertyValue<'gridGap', T, Value>,
  ): this {
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
  gridRowGap<const Value extends PropertyValue<'gridRowGap', T>>(
    value: Value & CheckedPropertyValue<'gridRowGap', T, Value>,
  ): this {
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
  imeMode<const Value extends PropertyValue<'imeMode', T>>(
    value: Value & CheckedPropertyValue<'imeMode', T, Value>,
  ): this {
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
  insetArea<const Value extends PropertyValue<'insetArea', T>>(
    value: Value & CheckedPropertyValue<'insetArea', T, Value>,
  ): this {
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
  KhtmlBoxAlign<const Value extends PropertyValue<'KhtmlBoxAlign', T>>(
    value: Value & CheckedPropertyValue<'KhtmlBoxAlign', T, Value>,
  ): this {
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
  KhtmlBoxDirection<const Value extends PropertyValue<'KhtmlBoxDirection', T>>(
    value: Value & CheckedPropertyValue<'KhtmlBoxDirection', T, Value>,
  ): this {
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
  KhtmlBoxFlex<const Value extends PropertyValue<'KhtmlBoxFlex', T>>(
    value: Value & CheckedPropertyValue<'KhtmlBoxFlex', T, Value>,
  ): this {
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
  KhtmlBoxFlexGroup<const Value extends PropertyValue<'KhtmlBoxFlexGroup', T>>(
    value: Value & CheckedPropertyValue<'KhtmlBoxFlexGroup', T, Value>,
  ): this {
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
  KhtmlBoxLines<const Value extends PropertyValue<'KhtmlBoxLines', T>>(
    value: Value & CheckedPropertyValue<'KhtmlBoxLines', T, Value>,
  ): this {
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
  KhtmlBoxOrdinalGroup<const Value extends PropertyValue<'KhtmlBoxOrdinalGroup', T>>(
    value: Value & CheckedPropertyValue<'KhtmlBoxOrdinalGroup', T, Value>,
  ): this {
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
  KhtmlBoxOrient<const Value extends PropertyValue<'KhtmlBoxOrient', T>>(
    value: Value & CheckedPropertyValue<'KhtmlBoxOrient', T, Value>,
  ): this {
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
  KhtmlBoxPack<const Value extends PropertyValue<'KhtmlBoxPack', T>>(
    value: Value & CheckedPropertyValue<'KhtmlBoxPack', T, Value>,
  ): this {
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
  KhtmlLineBreak<const Value extends PropertyValue<'KhtmlLineBreak', T>>(
    value: Value & CheckedPropertyValue<'KhtmlLineBreak', T, Value>,
  ): this {
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
  KhtmlOpacity<const Value extends PropertyValue<'KhtmlOpacity', T>>(
    value: Value & CheckedPropertyValue<'KhtmlOpacity', T, Value>,
  ): this {
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
  KhtmlUserSelect<const Value extends PropertyValue<'KhtmlUserSelect', T>>(
    value: Value & CheckedPropertyValue<'KhtmlUserSelect', T, Value>,
  ): this {
    return this.write('KhtmlUserSelect', value);
  }
  /**
   * 兼容属性 -moz-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  MozAnimation<const Value extends PropertyValue<'MozAnimation', T>>(
    value: Value & CheckedPropertyValue<'MozAnimation', T, Value>,
  ): this {
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
  MozAnimationDelay<const Value extends PropertyValue<'MozAnimationDelay', T>>(
    value: Value & CheckedPropertyValue<'MozAnimationDelay', T, Value>,
  ): this {
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
  MozAnimationDirection<const Value extends PropertyValue<'MozAnimationDirection', T>>(
    value: Value & CheckedPropertyValue<'MozAnimationDirection', T, Value>,
  ): this {
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
  MozAnimationDuration<const Value extends PropertyValue<'MozAnimationDuration', T>>(
    value: Value & CheckedPropertyValue<'MozAnimationDuration', T, Value>,
  ): this {
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
  MozAnimationFillMode<const Value extends PropertyValue<'MozAnimationFillMode', T>>(
    value: Value & CheckedPropertyValue<'MozAnimationFillMode', T, Value>,
  ): this {
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
  MozAnimationIterationCount<const Value extends PropertyValue<'MozAnimationIterationCount', T>>(
    value: Value & CheckedPropertyValue<'MozAnimationIterationCount', T, Value>,
  ): this {
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
  MozAnimationName<const Value extends PropertyValue<'MozAnimationName', T>>(
    value: Value & CheckedPropertyValue<'MozAnimationName', T, Value>,
  ): this {
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
  MozAnimationPlayState<const Value extends PropertyValue<'MozAnimationPlayState', T>>(
    value: Value & CheckedPropertyValue<'MozAnimationPlayState', T, Value>,
  ): this {
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
  MozAnimationTimingFunction<const Value extends PropertyValue<'MozAnimationTimingFunction', T>>(
    value: Value & CheckedPropertyValue<'MozAnimationTimingFunction', T, Value>,
  ): this {
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
  MozAppearance<const Value extends PropertyValue<'MozAppearance', T>>(
    value: Value & CheckedPropertyValue<'MozAppearance', T, Value>,
  ): this {
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
  MozBackfaceVisibility<const Value extends PropertyValue<'MozBackfaceVisibility', T>>(
    value: Value & CheckedPropertyValue<'MozBackfaceVisibility', T, Value>,
  ): this {
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
  MozBackgroundClip<const Value extends PropertyValue<'MozBackgroundClip', T>>(
    value: Value & CheckedPropertyValue<'MozBackgroundClip', T, Value>,
  ): this {
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
  MozBackgroundOrigin<const Value extends PropertyValue<'MozBackgroundOrigin', T>>(
    value: Value & CheckedPropertyValue<'MozBackgroundOrigin', T, Value>,
  ): this {
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
  MozBackgroundSize<const Value extends PropertyValue<'MozBackgroundSize', T>>(
    value: Value & CheckedPropertyValue<'MozBackgroundSize', T, Value>,
  ): this {
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
  MozBinding<const Value extends PropertyValue<'MozBinding', T>>(
    value: Value & CheckedPropertyValue<'MozBinding', T, Value>,
  ): this {
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
  MozBorderBottomColors<const Value extends PropertyValue<'MozBorderBottomColors', T>>(
    value: Value & CheckedPropertyValue<'MozBorderBottomColors', T, Value>,
  ): this {
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
  MozBorderEndColor<const Value extends PropertyValue<'MozBorderEndColor', T>>(
    value: Value & CheckedPropertyValue<'MozBorderEndColor', T, Value>,
  ): this {
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
  MozBorderEndStyle<const Value extends PropertyValue<'MozBorderEndStyle', T>>(
    value: Value & CheckedPropertyValue<'MozBorderEndStyle', T, Value>,
  ): this {
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
  MozBorderEndWidth<const Value extends PropertyValue<'MozBorderEndWidth', T>>(
    value: Value & CheckedPropertyValue<'MozBorderEndWidth', T, Value>,
  ): this {
    return this.write('MozBorderEndWidth', value);
  }
  /**
   * 兼容属性 -moz-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  MozBorderImage<const Value extends PropertyValue<'MozBorderImage', T>>(
    value: Value & CheckedPropertyValue<'MozBorderImage', T, Value>,
  ): this {
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
  MozBorderLeftColors<const Value extends PropertyValue<'MozBorderLeftColors', T>>(
    value: Value & CheckedPropertyValue<'MozBorderLeftColors', T, Value>,
  ): this {
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
  MozBorderRadius<const Value extends PropertyValue<'MozBorderRadius', T>>(
    value: Value & CheckedPropertyValue<'MozBorderRadius', T, Value>,
  ): this {
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
  MozBorderRadiusBottomleft<const Value extends PropertyValue<'MozBorderRadiusBottomleft', T>>(
    value: Value & CheckedPropertyValue<'MozBorderRadiusBottomleft', T, Value>,
  ): this {
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
  MozBorderRadiusBottomright<const Value extends PropertyValue<'MozBorderRadiusBottomright', T>>(
    value: Value & CheckedPropertyValue<'MozBorderRadiusBottomright', T, Value>,
  ): this {
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
  MozBorderRadiusTopleft<const Value extends PropertyValue<'MozBorderRadiusTopleft', T>>(
    value: Value & CheckedPropertyValue<'MozBorderRadiusTopleft', T, Value>,
  ): this {
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
  MozBorderRadiusTopright<const Value extends PropertyValue<'MozBorderRadiusTopright', T>>(
    value: Value & CheckedPropertyValue<'MozBorderRadiusTopright', T, Value>,
  ): this {
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
  MozBorderRightColors<const Value extends PropertyValue<'MozBorderRightColors', T>>(
    value: Value & CheckedPropertyValue<'MozBorderRightColors', T, Value>,
  ): this {
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
  MozBorderStartColor<const Value extends PropertyValue<'MozBorderStartColor', T>>(
    value: Value & CheckedPropertyValue<'MozBorderStartColor', T, Value>,
  ): this {
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
  MozBorderStartStyle<const Value extends PropertyValue<'MozBorderStartStyle', T>>(
    value: Value & CheckedPropertyValue<'MozBorderStartStyle', T, Value>,
  ): this {
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
  MozBorderTopColors<const Value extends PropertyValue<'MozBorderTopColors', T>>(
    value: Value & CheckedPropertyValue<'MozBorderTopColors', T, Value>,
  ): this {
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
  MozBoxAlign<const Value extends PropertyValue<'MozBoxAlign', T>>(
    value: Value & CheckedPropertyValue<'MozBoxAlign', T, Value>,
  ): this {
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
  MozBoxDirection<const Value extends PropertyValue<'MozBoxDirection', T>>(
    value: Value & CheckedPropertyValue<'MozBoxDirection', T, Value>,
  ): this {
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
  MozBoxFlex<const Value extends PropertyValue<'MozBoxFlex', T>>(
    value: Value & CheckedPropertyValue<'MozBoxFlex', T, Value>,
  ): this {
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
  MozBoxOrdinalGroup<const Value extends PropertyValue<'MozBoxOrdinalGroup', T>>(
    value: Value & CheckedPropertyValue<'MozBoxOrdinalGroup', T, Value>,
  ): this {
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
  MozBoxOrient<const Value extends PropertyValue<'MozBoxOrient', T>>(
    value: Value & CheckedPropertyValue<'MozBoxOrient', T, Value>,
  ): this {
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
  MozBoxPack<const Value extends PropertyValue<'MozBoxPack', T>>(
    value: Value & CheckedPropertyValue<'MozBoxPack', T, Value>,
  ): this {
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
  MozBoxShadow<const Value extends PropertyValue<'MozBoxShadow', T>>(
    value: Value & CheckedPropertyValue<'MozBoxShadow', T, Value>,
  ): this {
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
  MozBoxSizing<const Value extends PropertyValue<'MozBoxSizing', T>>(
    value: Value & CheckedPropertyValue<'MozBoxSizing', T, Value>,
  ): this {
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
  MozColumnCount<const Value extends PropertyValue<'MozColumnCount', T>>(
    value: Value & CheckedPropertyValue<'MozColumnCount', T, Value>,
  ): this {
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
  MozColumnFill<const Value extends PropertyValue<'MozColumnFill', T>>(
    value: Value & CheckedPropertyValue<'MozColumnFill', T, Value>,
  ): this {
    return this.write('MozColumnFill', value);
  }
  /**
   * 兼容属性 -moz-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule
   */
  MozColumnRule<const Value extends PropertyValue<'MozColumnRule', T>>(
    value: Value & CheckedPropertyValue<'MozColumnRule', T, Value>,
  ): this {
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
  MozColumnRuleColor<const Value extends PropertyValue<'MozColumnRuleColor', T>>(
    value: Value & CheckedPropertyValue<'MozColumnRuleColor', T, Value>,
  ): this {
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
  MozColumnRuleStyle<const Value extends PropertyValue<'MozColumnRuleStyle', T>>(
    value: Value & CheckedPropertyValue<'MozColumnRuleStyle', T, Value>,
  ): this {
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
  MozColumnRuleWidth<const Value extends PropertyValue<'MozColumnRuleWidth', T>>(
    value: Value & CheckedPropertyValue<'MozColumnRuleWidth', T, Value>,
  ): this {
    return this.write('MozColumnRuleWidth', value);
  }
  /**
   * 兼容属性 -moz-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-columns
   */
  MozColumns<const Value extends PropertyValue<'MozColumns', T>>(
    value: Value & CheckedPropertyValue<'MozColumns', T, Value>,
  ): this {
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
  MozColumnWidth<const Value extends PropertyValue<'MozColumnWidth', T>>(
    value: Value & CheckedPropertyValue<'MozColumnWidth', T, Value>,
  ): this {
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
  MozContextProperties<const Value extends PropertyValue<'MozContextProperties', T>>(
    value: Value & CheckedPropertyValue<'MozContextProperties', T, Value>,
  ): this {
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
  MozFloatEdge<const Value extends PropertyValue<'MozFloatEdge', T>>(
    value: Value & CheckedPropertyValue<'MozFloatEdge', T, Value>,
  ): this {
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
  MozFontFeatureSettings<const Value extends PropertyValue<'MozFontFeatureSettings', T>>(
    value: Value & CheckedPropertyValue<'MozFontFeatureSettings', T, Value>,
  ): this {
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
  MozFontLanguageOverride<const Value extends PropertyValue<'MozFontLanguageOverride', T>>(
    value: Value & CheckedPropertyValue<'MozFontLanguageOverride', T, Value>,
  ): this {
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
  MozForceBrokenImageIcon<const Value extends PropertyValue<'MozForceBrokenImageIcon', T>>(
    value: Value & CheckedPropertyValue<'MozForceBrokenImageIcon', T, Value>,
  ): this {
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
  MozHyphens<const Value extends PropertyValue<'MozHyphens', T>>(
    value: Value & CheckedPropertyValue<'MozHyphens', T, Value>,
  ): this {
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
  MozMarginEnd<const Value extends PropertyValue<'MozMarginEnd', T>>(
    value: Value & CheckedPropertyValue<'MozMarginEnd', T, Value>,
  ): this {
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
  MozMarginStart<const Value extends PropertyValue<'MozMarginStart', T>>(
    value: Value & CheckedPropertyValue<'MozMarginStart', T, Value>,
  ): this {
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
  MozOpacity<const Value extends PropertyValue<'MozOpacity', T>>(
    value: Value & CheckedPropertyValue<'MozOpacity', T, Value>,
  ): this {
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
  MozOrient<const Value extends PropertyValue<'MozOrient', T>>(
    value: Value & CheckedPropertyValue<'MozOrient', T, Value>,
  ): this {
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
  MozOsxFontSmoothing<const Value extends PropertyValue<'MozOsxFontSmoothing', T>>(
    value: Value & CheckedPropertyValue<'MozOsxFontSmoothing', T, Value>,
  ): this {
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
  MozOutline<const Value extends PropertyValue<'MozOutline', T>>(
    value: Value & CheckedPropertyValue<'MozOutline', T, Value>,
  ): this {
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
  MozOutlineColor<const Value extends PropertyValue<'MozOutlineColor', T>>(
    value: Value & CheckedPropertyValue<'MozOutlineColor', T, Value>,
  ): this {
    return this.write('MozOutlineColor', value);
  }
  /**
   * 兼容属性 -moz-outline-radius；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的轮廓圆角简写；不同于元素边框本身的圆角。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius
   */
  MozOutlineRadius<const Value extends PropertyValue<'MozOutlineRadius', T>>(
    value: Value & CheckedPropertyValue<'MozOutlineRadius', T, Value>,
  ): this {
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
  MozOutlineRadiusBottomleft<const Value extends PropertyValue<'MozOutlineRadiusBottomleft', T>>(
    value: Value & CheckedPropertyValue<'MozOutlineRadiusBottomleft', T, Value>,
  ): this {
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
  MozOutlineRadiusBottomright<const Value extends PropertyValue<'MozOutlineRadiusBottomright', T>>(
    value: Value & CheckedPropertyValue<'MozOutlineRadiusBottomright', T, Value>,
  ): this {
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
  MozOutlineRadiusTopleft<const Value extends PropertyValue<'MozOutlineRadiusTopleft', T>>(
    value: Value & CheckedPropertyValue<'MozOutlineRadiusTopleft', T, Value>,
  ): this {
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
  MozOutlineRadiusTopright<const Value extends PropertyValue<'MozOutlineRadiusTopright', T>>(
    value: Value & CheckedPropertyValue<'MozOutlineRadiusTopright', T, Value>,
  ): this {
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
  MozOutlineStyle<const Value extends PropertyValue<'MozOutlineStyle', T>>(
    value: Value & CheckedPropertyValue<'MozOutlineStyle', T, Value>,
  ): this {
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
  MozOutlineWidth<const Value extends PropertyValue<'MozOutlineWidth', T>>(
    value: Value & CheckedPropertyValue<'MozOutlineWidth', T, Value>,
  ): this {
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
  MozPaddingEnd<const Value extends PropertyValue<'MozPaddingEnd', T>>(
    value: Value & CheckedPropertyValue<'MozPaddingEnd', T, Value>,
  ): this {
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
  MozPaddingStart<const Value extends PropertyValue<'MozPaddingStart', T>>(
    value: Value & CheckedPropertyValue<'MozPaddingStart', T, Value>,
  ): this {
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
  MozPerspective<const Value extends PropertyValue<'MozPerspective', T>>(
    value: Value & CheckedPropertyValue<'MozPerspective', T, Value>,
  ): this {
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
  MozPerspectiveOrigin<const Value extends PropertyValue<'MozPerspectiveOrigin', T>>(
    value: Value & CheckedPropertyValue<'MozPerspectiveOrigin', T, Value>,
  ): this {
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
  MozStackSizing<const Value extends PropertyValue<'MozStackSizing', T>>(
    value: Value & CheckedPropertyValue<'MozStackSizing', T, Value>,
  ): this {
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
  MozTabSize<const Value extends PropertyValue<'MozTabSize', T>>(
    value: Value & CheckedPropertyValue<'MozTabSize', T, Value>,
  ): this {
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
  MozTextAlignLast<const Value extends PropertyValue<'MozTextAlignLast', T>>(
    value: Value & CheckedPropertyValue<'MozTextAlignLast', T, Value>,
  ): this {
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
  MozTextBlink<const Value extends PropertyValue<'MozTextBlink', T>>(
    value: Value & CheckedPropertyValue<'MozTextBlink', T, Value>,
  ): this {
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
  MozTextDecorationColor<const Value extends PropertyValue<'MozTextDecorationColor', T>>(
    value: Value & CheckedPropertyValue<'MozTextDecorationColor', T, Value>,
  ): this {
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
  MozTextDecorationLine<const Value extends PropertyValue<'MozTextDecorationLine', T>>(
    value: Value & CheckedPropertyValue<'MozTextDecorationLine', T, Value>,
  ): this {
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
  MozTextDecorationStyle<const Value extends PropertyValue<'MozTextDecorationStyle', T>>(
    value: Value & CheckedPropertyValue<'MozTextDecorationStyle', T, Value>,
  ): this {
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
  MozTextSizeAdjust<const Value extends PropertyValue<'MozTextSizeAdjust', T>>(
    value: Value & CheckedPropertyValue<'MozTextSizeAdjust', T, Value>,
  ): this {
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
  MozTransform<const Value extends PropertyValue<'MozTransform', T>>(
    value: Value & CheckedPropertyValue<'MozTransform', T, Value>,
  ): this {
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
  MozTransformOrigin<const Value extends PropertyValue<'MozTransformOrigin', T>>(
    value: Value & CheckedPropertyValue<'MozTransformOrigin', T, Value>,
  ): this {
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
  MozTransformStyle<const Value extends PropertyValue<'MozTransformStyle', T>>(
    value: Value & CheckedPropertyValue<'MozTransformStyle', T, Value>,
  ): this {
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
  MozTransition<const Value extends PropertyValue<'MozTransition', T>>(
    value: Value & CheckedPropertyValue<'MozTransition', T, Value>,
  ): this {
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
  MozTransitionDelay<const Value extends PropertyValue<'MozTransitionDelay', T>>(
    value: Value & CheckedPropertyValue<'MozTransitionDelay', T, Value>,
  ): this {
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
  MozTransitionDuration<const Value extends PropertyValue<'MozTransitionDuration', T>>(
    value: Value & CheckedPropertyValue<'MozTransitionDuration', T, Value>,
  ): this {
    return this.write('MozTransitionDuration', value);
  }
  /**
   * 兼容属性 -moz-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-property
   */
  MozTransitionProperty<const Value extends PropertyValue<'MozTransitionProperty', T>>(
    value: Value & CheckedPropertyValue<'MozTransitionProperty', T, Value>,
  ): this {
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
  MozTransitionTimingFunction<const Value extends PropertyValue<'MozTransitionTimingFunction', T>>(
    value: Value & CheckedPropertyValue<'MozTransitionTimingFunction', T, Value>,
  ): this {
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
  MozUserFocus<const Value extends PropertyValue<'MozUserFocus', T>>(
    value: Value & CheckedPropertyValue<'MozUserFocus', T, Value>,
  ): this {
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
  MozUserInput<const Value extends PropertyValue<'MozUserInput', T>>(
    value: Value & CheckedPropertyValue<'MozUserInput', T, Value>,
  ): this {
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
  MozUserModify<const Value extends PropertyValue<'MozUserModify', T>>(
    value: Value & CheckedPropertyValue<'MozUserModify', T, Value>,
  ): this {
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
  MozUserSelect<const Value extends PropertyValue<'MozUserSelect', T>>(
    value: Value & CheckedPropertyValue<'MozUserSelect', T, Value>,
  ): this {
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
  MozWindowDragging<const Value extends PropertyValue<'MozWindowDragging', T>>(
    value: Value & CheckedPropertyValue<'MozWindowDragging', T, Value>,
  ): this {
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
  MozWindowShadow<const Value extends PropertyValue<'MozWindowShadow', T>>(
    value: Value & CheckedPropertyValue<'MozWindowShadow', T, Value>,
  ): this {
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
  msAccelerator<const Value extends PropertyValue<'msAccelerator', T>>(
    value: Value & CheckedPropertyValue<'msAccelerator', T, Value>,
  ): this {
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
  msBlockProgression<const Value extends PropertyValue<'msBlockProgression', T>>(
    value: Value & CheckedPropertyValue<'msBlockProgression', T, Value>,
  ): this {
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
  msContentZoomChaining<const Value extends PropertyValue<'msContentZoomChaining', T>>(
    value: Value & CheckedPropertyValue<'msContentZoomChaining', T, Value>,
  ): this {
    return this.write('msContentZoomChaining', value);
  }
  /**
   * 兼容属性 -ms-content-zooming；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 触控内容缩放是否启用。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zooming
   */
  msContentZooming<const Value extends PropertyValue<'msContentZooming', T>>(
    value: Value & CheckedPropertyValue<'msContentZooming', T, Value>,
  ): this {
    return this.write('msContentZooming', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版触控内容缩放的最小和最大倍率。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit
   */
  msContentZoomLimit<const Value extends PropertyValue<'msContentZoomLimit', T>>(
    value: Value & CheckedPropertyValue<'msContentZoomLimit', T, Value>,
  ): this {
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
  msContentZoomLimitMax<const Value extends PropertyValue<'msContentZoomLimitMax', T>>(
    value: Value & CheckedPropertyValue<'msContentZoomLimitMax', T, Value>,
  ): this {
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
  msContentZoomLimitMin<const Value extends PropertyValue<'msContentZoomLimitMin', T>>(
    value: Value & CheckedPropertyValue<'msContentZoomLimitMin', T, Value>,
  ): this {
    return this.write('msContentZoomLimitMin', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-snap；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版内容缩放吸附的方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  msContentZoomSnap<const Value extends PropertyValue<'msContentZoomSnap', T>>(
    value: Value & CheckedPropertyValue<'msContentZoomSnap', T, Value>,
  ): this {
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
  msContentZoomSnapPoints<const Value extends PropertyValue<'msContentZoomSnapPoints', T>>(
    value: Value & CheckedPropertyValue<'msContentZoomSnapPoints', T, Value>,
  ): this {
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
  msContentZoomSnapType<const Value extends PropertyValue<'msContentZoomSnapType', T>>(
    value: Value & CheckedPropertyValue<'msContentZoomSnapType', T, Value>,
  ): this {
    return this.write('msContentZoomSnapType', value);
  }
  /**
   * 兼容属性 -ms-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-filter
   */
  msFilter<const Value extends PropertyValue<'msFilter', T>>(
    value: Value & CheckedPropertyValue<'msFilter', T, Value>,
  ): this {
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
  msFlex<const Value extends PropertyValue<'msFlex', T>>(
    value: Value & CheckedPropertyValue<'msFlex', T, Value>,
  ): this {
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
  msFlexDirection<const Value extends PropertyValue<'msFlexDirection', T>>(
    value: Value & CheckedPropertyValue<'msFlexDirection', T, Value>,
  ): this {
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
  msFlexPositive<const Value extends PropertyValue<'msFlexPositive', T>>(
    value: Value & CheckedPropertyValue<'msFlexPositive', T, Value>,
  ): this {
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
  msFlowFrom<const Value extends PropertyValue<'msFlowFrom', T>>(
    value: Value & CheckedPropertyValue<'msFlowFrom', T, Value>,
  ): this {
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
  msFlowInto<const Value extends PropertyValue<'msFlowInto', T>>(
    value: Value & CheckedPropertyValue<'msFlowInto', T, Value>,
  ): this {
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
  msGridColumns<const Value extends PropertyValue<'msGridColumns', T>>(
    value: Value & CheckedPropertyValue<'msGridColumns', T, Value>,
  ): this {
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
  msGridRows<const Value extends PropertyValue<'msGridRows', T>>(
    value: Value & CheckedPropertyValue<'msGridRows', T, Value>,
  ): this {
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
  msHighContrastAdjust<const Value extends PropertyValue<'msHighContrastAdjust', T>>(
    value: Value & CheckedPropertyValue<'msHighContrastAdjust', T, Value>,
  ): this {
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
  msHyphenateLimitChars<const Value extends PropertyValue<'msHyphenateLimitChars', T>>(
    value: Value & CheckedPropertyValue<'msHyphenateLimitChars', T, Value>,
  ): this {
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
  msHyphenateLimitLines<const Value extends PropertyValue<'msHyphenateLimitLines', T>>(
    value: Value & CheckedPropertyValue<'msHyphenateLimitLines', T, Value>,
  ): this {
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
  msHyphenateLimitZone<const Value extends PropertyValue<'msHyphenateLimitZone', T>>(
    value: Value & CheckedPropertyValue<'msHyphenateLimitZone', T, Value>,
  ): this {
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
  msHyphens<const Value extends PropertyValue<'msHyphens', T>>(
    value: Value & CheckedPropertyValue<'msHyphens', T, Value>,
  ): this {
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
  msImeAlign<const Value extends PropertyValue<'msImeAlign', T>>(
    value: Value & CheckedPropertyValue<'msImeAlign', T, Value>,
  ): this {
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
  msImeMode<const Value extends PropertyValue<'msImeMode', T>>(
    value: Value & CheckedPropertyValue<'msImeMode', T, Value>,
  ): this {
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
  msLineBreak<const Value extends PropertyValue<'msLineBreak', T>>(
    value: Value & CheckedPropertyValue<'msLineBreak', T, Value>,
  ): this {
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
  msOrder<const Value extends PropertyValue<'msOrder', T>>(
    value: Value & CheckedPropertyValue<'msOrder', T, Value>,
  ): this {
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
  msOverflowStyle<const Value extends PropertyValue<'msOverflowStyle', T>>(
    value: Value & CheckedPropertyValue<'msOverflowStyle', T, Value>,
  ): this {
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
  msOverflowX<const Value extends PropertyValue<'msOverflowX', T>>(
    value: Value & CheckedPropertyValue<'msOverflowX', T, Value>,
  ): this {
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
  msOverflowY<const Value extends PropertyValue<'msOverflowY', T>>(
    value: Value & CheckedPropertyValue<'msOverflowY', T, Value>,
  ): this {
    return this.write('msOverflowY', value);
  }
  /**
   * 兼容属性 -ms-scrollbar3dlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的亮边颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar3dlight-color
   */
  msScrollbar3dlightColor<const Value extends PropertyValue<'msScrollbar3dlightColor', T>>(
    value: Value & CheckedPropertyValue<'msScrollbar3dlightColor', T, Value>,
  ): this {
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
  msScrollbarArrowColor<const Value extends PropertyValue<'msScrollbarArrowColor', T>>(
    value: Value & CheckedPropertyValue<'msScrollbarArrowColor', T, Value>,
  ): this {
    return this.write('msScrollbarArrowColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-base-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条的基础颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-base-color
   */
  msScrollbarBaseColor<const Value extends PropertyValue<'msScrollbarBaseColor', T>>(
    value: Value & CheckedPropertyValue<'msScrollbarBaseColor', T, Value>,
  ): this {
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
  msScrollbarDarkshadowColor<const Value extends PropertyValue<'msScrollbarDarkshadowColor', T>>(
    value: Value & CheckedPropertyValue<'msScrollbarDarkshadowColor', T, Value>,
  ): this {
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
  msScrollbarFaceColor<const Value extends PropertyValue<'msScrollbarFaceColor', T>>(
    value: Value & CheckedPropertyValue<'msScrollbarFaceColor', T, Value>,
  ): this {
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
  msScrollbarHighlightColor<const Value extends PropertyValue<'msScrollbarHighlightColor', T>>(
    value: Value & CheckedPropertyValue<'msScrollbarHighlightColor', T, Value>,
  ): this {
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
  msScrollbarShadowColor<const Value extends PropertyValue<'msScrollbarShadowColor', T>>(
    value: Value & CheckedPropertyValue<'msScrollbarShadowColor', T, Value>,
  ): this {
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
  msScrollbarTrackColor<const Value extends PropertyValue<'msScrollbarTrackColor', T>>(
    value: Value & CheckedPropertyValue<'msScrollbarTrackColor', T, Value>,
  ): this {
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
  msScrollChaining<const Value extends PropertyValue<'msScrollChaining', T>>(
    value: Value & CheckedPropertyValue<'msScrollChaining', T, Value>,
  ): this {
    return this.write('msScrollChaining', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版滚动区域的水平和垂直边界。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit
   */
  msScrollLimit<const Value extends PropertyValue<'msScrollLimit', T>>(
    value: Value & CheckedPropertyValue<'msScrollLimit', T, Value>,
  ): this {
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
  msScrollLimitXMax<const Value extends PropertyValue<'msScrollLimitXMax', T>>(
    value: Value & CheckedPropertyValue<'msScrollLimitXMax', T, Value>,
  ): this {
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
  msScrollLimitXMin<const Value extends PropertyValue<'msScrollLimitXMin', T>>(
    value: Value & CheckedPropertyValue<'msScrollLimitXMin', T, Value>,
  ): this {
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
  msScrollLimitYMax<const Value extends PropertyValue<'msScrollLimitYMax', T>>(
    value: Value & CheckedPropertyValue<'msScrollLimitYMax', T, Value>,
  ): this {
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
  msScrollLimitYMin<const Value extends PropertyValue<'msScrollLimitYMin', T>>(
    value: Value & CheckedPropertyValue<'msScrollLimitYMin', T, Value>,
  ): this {
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
  msScrollRails<const Value extends PropertyValue<'msScrollRails', T>>(
    value: Value & CheckedPropertyValue<'msScrollRails', T, Value>,
  ): this {
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
  msScrollSnapPointsX<const Value extends PropertyValue<'msScrollSnapPointsX', T>>(
    value: Value & CheckedPropertyValue<'msScrollSnapPointsX', T, Value>,
  ): this {
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
  msScrollSnapPointsY<const Value extends PropertyValue<'msScrollSnapPointsY', T>>(
    value: Value & CheckedPropertyValue<'msScrollSnapPointsY', T, Value>,
  ): this {
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
  msScrollSnapType<const Value extends PropertyValue<'msScrollSnapType', T>>(
    value: Value & CheckedPropertyValue<'msScrollSnapType', T, Value>,
  ): this {
    return this.write('msScrollSnapType', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-x；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版水平滚动吸附方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-x
   */
  msScrollSnapX<const Value extends PropertyValue<'msScrollSnapX', T>>(
    value: Value & CheckedPropertyValue<'msScrollSnapX', T, Value>,
  ): this {
    return this.write('msScrollSnapX', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-y；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版垂直滚动吸附方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-y
   */
  msScrollSnapY<const Value extends PropertyValue<'msScrollSnapY', T>>(
    value: Value & CheckedPropertyValue<'msScrollSnapY', T, Value>,
  ): this {
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
  msScrollTranslation<const Value extends PropertyValue<'msScrollTranslation', T>>(
    value: Value & CheckedPropertyValue<'msScrollTranslation', T, Value>,
  ): this {
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
  msTextAutospace<const Value extends PropertyValue<'msTextAutospace', T>>(
    value: Value & CheckedPropertyValue<'msTextAutospace', T, Value>,
  ): this {
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
  msTextCombineHorizontal<const Value extends PropertyValue<'msTextCombineHorizontal', T>>(
    value: Value & CheckedPropertyValue<'msTextCombineHorizontal', T, Value>,
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
   * CSS 规范初始值：`clip`，不同于浏览器默认样式表。
   * @example
   * s.maxWidth("12rem").whiteSpace("nowrap").overflow("hidden").textOverflow("ellipsis")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-overflow
   */
  msTextOverflow<const Value extends PropertyValue<'msTextOverflow', T>>(
    value: Value & CheckedPropertyValue<'msTextOverflow', T, Value>,
  ): this {
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
  msTouchAction<const Value extends PropertyValue<'msTouchAction', T>>(
    value: Value & CheckedPropertyValue<'msTouchAction', T, Value>,
  ): this {
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
  msTouchSelect<const Value extends PropertyValue<'msTouchSelect', T>>(
    value: Value & CheckedPropertyValue<'msTouchSelect', T, Value>,
  ): this {
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
  msTransform<const Value extends PropertyValue<'msTransform', T>>(
    value: Value & CheckedPropertyValue<'msTransform', T, Value>,
  ): this {
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
  msTransformOrigin<const Value extends PropertyValue<'msTransformOrigin', T>>(
    value: Value & CheckedPropertyValue<'msTransformOrigin', T, Value>,
  ): this {
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
  msTransition<const Value extends PropertyValue<'msTransition', T>>(
    value: Value & CheckedPropertyValue<'msTransition', T, Value>,
  ): this {
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
  msTransitionDelay<const Value extends PropertyValue<'msTransitionDelay', T>>(
    value: Value & CheckedPropertyValue<'msTransitionDelay', T, Value>,
  ): this {
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
  msTransitionDuration<const Value extends PropertyValue<'msTransitionDuration', T>>(
    value: Value & CheckedPropertyValue<'msTransitionDuration', T, Value>,
  ): this {
    return this.write('msTransitionDuration', value);
  }
  /**
   * 兼容属性 -ms-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-property
   */
  msTransitionProperty<const Value extends PropertyValue<'msTransitionProperty', T>>(
    value: Value & CheckedPropertyValue<'msTransitionProperty', T, Value>,
  ): this {
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
  msTransitionTimingFunction<const Value extends PropertyValue<'msTransitionTimingFunction', T>>(
    value: Value & CheckedPropertyValue<'msTransitionTimingFunction', T, Value>,
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
   * CSS 规范初始值：`text`，不同于浏览器默认样式表。
   * @example
   * s.userSelect("all")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-user-select
   */
  msUserSelect<const Value extends PropertyValue<'msUserSelect', T>>(
    value: Value & CheckedPropertyValue<'msUserSelect', T, Value>,
  ): this {
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
  msWordBreak<const Value extends PropertyValue<'msWordBreak', T>>(
    value: Value & CheckedPropertyValue<'msWordBreak', T, Value>,
  ): this {
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
  msWrapFlow<const Value extends PropertyValue<'msWrapFlow', T>>(
    value: Value & CheckedPropertyValue<'msWrapFlow', T, Value>,
  ): this {
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
  msWrapMargin<const Value extends PropertyValue<'msWrapMargin', T>>(
    value: Value & CheckedPropertyValue<'msWrapMargin', T, Value>,
  ): this {
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
  msWrapThrough<const Value extends PropertyValue<'msWrapThrough', T>>(
    value: Value & CheckedPropertyValue<'msWrapThrough', T, Value>,
  ): this {
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
  msWritingMode<const Value extends PropertyValue<'msWritingMode', T>>(
    value: Value & CheckedPropertyValue<'msWritingMode', T, Value>,
  ): this {
    return this.write('msWritingMode', value);
  }
  /**
   * 兼容属性 -o-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  OAnimation<const Value extends PropertyValue<'OAnimation', T>>(
    value: Value & CheckedPropertyValue<'OAnimation', T, Value>,
  ): this {
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
  OAnimationDelay<const Value extends PropertyValue<'OAnimationDelay', T>>(
    value: Value & CheckedPropertyValue<'OAnimationDelay', T, Value>,
  ): this {
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
  OAnimationDirection<const Value extends PropertyValue<'OAnimationDirection', T>>(
    value: Value & CheckedPropertyValue<'OAnimationDirection', T, Value>,
  ): this {
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
  OAnimationDuration<const Value extends PropertyValue<'OAnimationDuration', T>>(
    value: Value & CheckedPropertyValue<'OAnimationDuration', T, Value>,
  ): this {
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
  OAnimationFillMode<const Value extends PropertyValue<'OAnimationFillMode', T>>(
    value: Value & CheckedPropertyValue<'OAnimationFillMode', T, Value>,
  ): this {
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
  OAnimationIterationCount<const Value extends PropertyValue<'OAnimationIterationCount', T>>(
    value: Value & CheckedPropertyValue<'OAnimationIterationCount', T, Value>,
  ): this {
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
  OAnimationName<const Value extends PropertyValue<'OAnimationName', T>>(
    value: Value & CheckedPropertyValue<'OAnimationName', T, Value>,
  ): this {
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
  OAnimationPlayState<const Value extends PropertyValue<'OAnimationPlayState', T>>(
    value: Value & CheckedPropertyValue<'OAnimationPlayState', T, Value>,
  ): this {
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
  OAnimationTimingFunction<const Value extends PropertyValue<'OAnimationTimingFunction', T>>(
    value: Value & CheckedPropertyValue<'OAnimationTimingFunction', T, Value>,
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
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @example
   * s.backgroundSize("cover").backgroundPosition("center")
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-background-size
   */
  OBackgroundSize<const Value extends PropertyValue<'OBackgroundSize', T>>(
    value: Value & CheckedPropertyValue<'OBackgroundSize', T, Value>,
  ): this {
    return this.write('OBackgroundSize', value);
  }
  /**
   * 兼容属性 -o-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-border-image
   */
  OBorderImage<const Value extends PropertyValue<'OBorderImage', T>>(
    value: Value & CheckedPropertyValue<'OBorderImage', T, Value>,
  ): this {
    return this.write('OBorderImage', value);
  }
  /**
   * 兼容属性 offset-block；优先参考标准属性 insetBlock及浏览器支持范围。
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block
   */
  offsetBlock<const Value extends PropertyValue<'offsetBlock', T>>(
    value: Value & CheckedPropertyValue<'offsetBlock', T, Value>,
  ): this {
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
  offsetBlockEnd<const Value extends PropertyValue<'offsetBlockEnd', T>>(
    value: Value & CheckedPropertyValue<'offsetBlockEnd', T, Value>,
  ): this {
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
  offsetBlockStart<const Value extends PropertyValue<'offsetBlockStart', T>>(
    value: Value & CheckedPropertyValue<'offsetBlockStart', T, Value>,
  ): this {
    return this.write('offsetBlockStart', value);
  }
  /**
   * 兼容属性 offset-inline；优先参考标准属性 insetInline及浏览器支持范围。
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline
   */
  offsetInline<const Value extends PropertyValue<'offsetInline', T>>(
    value: Value & CheckedPropertyValue<'offsetInline', T, Value>,
  ): this {
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
  offsetInlineEnd<const Value extends PropertyValue<'offsetInlineEnd', T>>(
    value: Value & CheckedPropertyValue<'offsetInlineEnd', T, Value>,
  ): this {
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
  offsetInlineStart<const Value extends PropertyValue<'offsetInlineStart', T>>(
    value: Value & CheckedPropertyValue<'offsetInlineStart', T, Value>,
  ): this {
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
  OObjectFit<const Value extends PropertyValue<'OObjectFit', T>>(
    value: Value & CheckedPropertyValue<'OObjectFit', T, Value>,
  ): this {
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
  OObjectPosition<const Value extends PropertyValue<'OObjectPosition', T>>(
    value: Value & CheckedPropertyValue<'OObjectPosition', T, Value>,
  ): this {
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
  OTabSize<const Value extends PropertyValue<'OTabSize', T>>(
    value: Value & CheckedPropertyValue<'OTabSize', T, Value>,
  ): this {
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
  OTextOverflow<const Value extends PropertyValue<'OTextOverflow', T>>(
    value: Value & CheckedPropertyValue<'OTextOverflow', T, Value>,
  ): this {
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
  OTransform<const Value extends PropertyValue<'OTransform', T>>(
    value: Value & CheckedPropertyValue<'OTransform', T, Value>,
  ): this {
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
  OTransformOrigin<const Value extends PropertyValue<'OTransformOrigin', T>>(
    value: Value & CheckedPropertyValue<'OTransformOrigin', T, Value>,
  ): this {
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
  OTransition<const Value extends PropertyValue<'OTransition', T>>(
    value: Value & CheckedPropertyValue<'OTransition', T, Value>,
  ): this {
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
  OTransitionDelay<const Value extends PropertyValue<'OTransitionDelay', T>>(
    value: Value & CheckedPropertyValue<'OTransitionDelay', T, Value>,
  ): this {
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
  OTransitionDuration<const Value extends PropertyValue<'OTransitionDuration', T>>(
    value: Value & CheckedPropertyValue<'OTransitionDuration', T, Value>,
  ): this {
    return this.write('OTransitionDuration', value);
  }
  /**
   * 兼容属性 -o-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-property
   */
  OTransitionProperty<const Value extends PropertyValue<'OTransitionProperty', T>>(
    value: Value & CheckedPropertyValue<'OTransitionProperty', T, Value>,
  ): this {
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
  OTransitionTimingFunction<const Value extends PropertyValue<'OTransitionTimingFunction', T>>(
    value: Value & CheckedPropertyValue<'OTransitionTimingFunction', T, Value>,
  ): this {
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
  pageBreakAfter<const Value extends PropertyValue<'pageBreakAfter', T>>(
    value: Value & CheckedPropertyValue<'pageBreakAfter', T, Value>,
  ): this {
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
  pageBreakBefore<const Value extends PropertyValue<'pageBreakBefore', T>>(
    value: Value & CheckedPropertyValue<'pageBreakBefore', T, Value>,
  ): this {
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
  pageBreakInside<const Value extends PropertyValue<'pageBreakInside', T>>(
    value: Value & CheckedPropertyValue<'pageBreakInside', T, Value>,
  ): this {
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
  positionTryOptions<const Value extends PropertyValue<'positionTryOptions', T>>(
    value: Value & CheckedPropertyValue<'positionTryOptions', T, Value>,
  ): this {
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
  scrollSnapCoordinate<const Value extends PropertyValue<'scrollSnapCoordinate', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapCoordinate', T, Value>,
  ): this {
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
  scrollSnapDestination<const Value extends PropertyValue<'scrollSnapDestination', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapDestination', T, Value>,
  ): this {
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
  scrollSnapPointsX<const Value extends PropertyValue<'scrollSnapPointsX', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapPointsX', T, Value>,
  ): this {
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
  scrollSnapPointsY<const Value extends PropertyValue<'scrollSnapPointsY', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapPointsY', T, Value>,
  ): this {
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
  scrollSnapTypeX<const Value extends PropertyValue<'scrollSnapTypeX', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapTypeX', T, Value>,
  ): this {
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
  scrollSnapTypeY<const Value extends PropertyValue<'scrollSnapTypeY', T>>(
    value: Value & CheckedPropertyValue<'scrollSnapTypeY', T, Value>,
  ): this {
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
  WebkitAlignContent<const Value extends PropertyValue<'WebkitAlignContent', T>>(
    value: Value & CheckedPropertyValue<'WebkitAlignContent', T, Value>,
  ): this {
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
  WebkitAlignItems<const Value extends PropertyValue<'WebkitAlignItems', T>>(
    value: Value & CheckedPropertyValue<'WebkitAlignItems', T, Value>,
  ): this {
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
  WebkitAlignSelf<const Value extends PropertyValue<'WebkitAlignSelf', T>>(
    value: Value & CheckedPropertyValue<'WebkitAlignSelf', T, Value>,
  ): this {
    return this.write('WebkitAlignSelf', value);
  }
  /**
   * 兼容属性 -webkit-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  WebkitAnimation<const Value extends PropertyValue<'WebkitAnimation', T>>(
    value: Value & CheckedPropertyValue<'WebkitAnimation', T, Value>,
  ): this {
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
  WebkitAnimationDelay<const Value extends PropertyValue<'WebkitAnimationDelay', T>>(
    value: Value & CheckedPropertyValue<'WebkitAnimationDelay', T, Value>,
  ): this {
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
  WebkitAnimationDirection<const Value extends PropertyValue<'WebkitAnimationDirection', T>>(
    value: Value & CheckedPropertyValue<'WebkitAnimationDirection', T, Value>,
  ): this {
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
  WebkitAnimationDuration<const Value extends PropertyValue<'WebkitAnimationDuration', T>>(
    value: Value & CheckedPropertyValue<'WebkitAnimationDuration', T, Value>,
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
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @example
   * s.animationFillMode("forwards")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-fill-mode
   */
  WebkitAnimationFillMode<const Value extends PropertyValue<'WebkitAnimationFillMode', T>>(
    value: Value & CheckedPropertyValue<'WebkitAnimationFillMode', T, Value>,
  ): this {
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
  WebkitAnimationIterationCount<
    const Value extends PropertyValue<'WebkitAnimationIterationCount', T>,
  >(value: Value & CheckedPropertyValue<'WebkitAnimationIterationCount', T, Value>): this {
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
  WebkitAnimationName<const Value extends PropertyValue<'WebkitAnimationName', T>>(
    value: Value & CheckedPropertyValue<'WebkitAnimationName', T, Value>,
  ): this {
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
  WebkitAnimationPlayState<const Value extends PropertyValue<'WebkitAnimationPlayState', T>>(
    value: Value & CheckedPropertyValue<'WebkitAnimationPlayState', T, Value>,
  ): this {
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
  WebkitAnimationTimingFunction<
    const Value extends PropertyValue<'WebkitAnimationTimingFunction', T>,
  >(value: Value & CheckedPropertyValue<'WebkitAnimationTimingFunction', T, Value>): this {
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
  WebkitAppearance<const Value extends PropertyValue<'WebkitAppearance', T>>(
    value: Value & CheckedPropertyValue<'WebkitAppearance', T, Value>,
  ): this {
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
  WebkitBackdropFilter<const Value extends PropertyValue<'WebkitBackdropFilter', T>>(
    value: Value & CheckedPropertyValue<'WebkitBackdropFilter', T, Value>,
  ): this {
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
  WebkitBackfaceVisibility<const Value extends PropertyValue<'WebkitBackfaceVisibility', T>>(
    value: Value & CheckedPropertyValue<'WebkitBackfaceVisibility', T, Value>,
  ): this {
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
  WebkitBackgroundClip<const Value extends PropertyValue<'WebkitBackgroundClip', T>>(
    value: Value & CheckedPropertyValue<'WebkitBackgroundClip', T, Value>,
  ): this {
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
  WebkitBackgroundOrigin<const Value extends PropertyValue<'WebkitBackgroundOrigin', T>>(
    value: Value & CheckedPropertyValue<'WebkitBackgroundOrigin', T, Value>,
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
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @example
   * s.backgroundSize("cover").backgroundPosition("center")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-size
   */
  WebkitBackgroundSize<const Value extends PropertyValue<'WebkitBackgroundSize', T>>(
    value: Value & CheckedPropertyValue<'WebkitBackgroundSize', T, Value>,
  ): this {
    return this.write('WebkitBackgroundSize', value);
  }
  /**
   * 兼容属性 -webkit-border-before；优先参考标准属性 borderBlockStart及浏览器支持范围。
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before
   */
  WebkitBorderBefore<const Value extends PropertyValue<'WebkitBorderBefore', T>>(
    value: Value & CheckedPropertyValue<'WebkitBorderBefore', T, Value>,
  ): this {
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
  WebkitBorderBeforeColor<const Value extends PropertyValue<'WebkitBorderBeforeColor', T>>(
    value: Value & CheckedPropertyValue<'WebkitBorderBeforeColor', T, Value>,
  ): this {
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
  WebkitBorderBeforeStyle<const Value extends PropertyValue<'WebkitBorderBeforeStyle', T>>(
    value: Value & CheckedPropertyValue<'WebkitBorderBeforeStyle', T, Value>,
  ): this {
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
  WebkitBorderBeforeWidth<const Value extends PropertyValue<'WebkitBorderBeforeWidth', T>>(
    value: Value & CheckedPropertyValue<'WebkitBorderBeforeWidth', T, Value>,
  ): this {
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
  WebkitBorderBottomLeftRadius<
    const Value extends PropertyValue<'WebkitBorderBottomLeftRadius', T>,
  >(value: Value & CheckedPropertyValue<'WebkitBorderBottomLeftRadius', T, Value>): this {
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
  WebkitBorderBottomRightRadius<
    const Value extends PropertyValue<'WebkitBorderBottomRightRadius', T>,
  >(value: Value & CheckedPropertyValue<'WebkitBorderBottomRightRadius', T, Value>): this {
    return this.write('WebkitBorderBottomRightRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  WebkitBorderImage<const Value extends PropertyValue<'WebkitBorderImage', T>>(
    value: Value & CheckedPropertyValue<'WebkitBorderImage', T, Value>,
  ): this {
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
  WebkitBorderImageSlice<const Value extends PropertyValue<'WebkitBorderImageSlice', T>>(
    value: Value & CheckedPropertyValue<'WebkitBorderImageSlice', T, Value>,
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
   * @example
   * s.borderRadius("8px")
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-radius
   */
  WebkitBorderRadius<const Value extends PropertyValue<'WebkitBorderRadius', T>>(
    value: Value & CheckedPropertyValue<'WebkitBorderRadius', T, Value>,
  ): this {
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
  WebkitBorderTopLeftRadius<const Value extends PropertyValue<'WebkitBorderTopLeftRadius', T>>(
    value: Value & CheckedPropertyValue<'WebkitBorderTopLeftRadius', T, Value>,
  ): this {
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
  WebkitBorderTopRightRadius<const Value extends PropertyValue<'WebkitBorderTopRightRadius', T>>(
    value: Value & CheckedPropertyValue<'WebkitBorderTopRightRadius', T, Value>,
  ): this {
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
  WebkitBoxAlign<const Value extends PropertyValue<'WebkitBoxAlign', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxAlign', T, Value>,
  ): this {
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
  WebkitBoxDecorationBreak<const Value extends PropertyValue<'WebkitBoxDecorationBreak', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxDecorationBreak', T, Value>,
  ): this {
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
  WebkitBoxDirection<const Value extends PropertyValue<'WebkitBoxDirection', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxDirection', T, Value>,
  ): this {
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
  WebkitBoxFlex<const Value extends PropertyValue<'WebkitBoxFlex', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxFlex', T, Value>,
  ): this {
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
  WebkitBoxFlexGroup<const Value extends PropertyValue<'WebkitBoxFlexGroup', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxFlexGroup', T, Value>,
  ): this {
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
  WebkitBoxLines<const Value extends PropertyValue<'WebkitBoxLines', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxLines', T, Value>,
  ): this {
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
  WebkitBoxOrdinalGroup<const Value extends PropertyValue<'WebkitBoxOrdinalGroup', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxOrdinalGroup', T, Value>,
  ): this {
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
  WebkitBoxOrient<const Value extends PropertyValue<'WebkitBoxOrient', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxOrient', T, Value>,
  ): this {
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
  WebkitBoxPack<const Value extends PropertyValue<'WebkitBoxPack', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxPack', T, Value>,
  ): this {
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
  WebkitBoxReflect<const Value extends PropertyValue<'WebkitBoxReflect', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxReflect', T, Value>,
  ): this {
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
  WebkitBoxShadow<const Value extends PropertyValue<'WebkitBoxShadow', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxShadow', T, Value>,
  ): this {
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
  WebkitBoxSizing<const Value extends PropertyValue<'WebkitBoxSizing', T>>(
    value: Value & CheckedPropertyValue<'WebkitBoxSizing', T, Value>,
  ): this {
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
  WebkitClipPath<const Value extends PropertyValue<'WebkitClipPath', T>>(
    value: Value & CheckedPropertyValue<'WebkitClipPath', T, Value>,
  ): this {
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
  WebkitColumnCount<const Value extends PropertyValue<'WebkitColumnCount', T>>(
    value: Value & CheckedPropertyValue<'WebkitColumnCount', T, Value>,
  ): this {
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
  WebkitColumnFill<const Value extends PropertyValue<'WebkitColumnFill', T>>(
    value: Value & CheckedPropertyValue<'WebkitColumnFill', T, Value>,
  ): this {
    return this.write('WebkitColumnFill', value);
  }
  /**
   * 兼容属性 -webkit-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule
   */
  WebkitColumnRule<const Value extends PropertyValue<'WebkitColumnRule', T>>(
    value: Value & CheckedPropertyValue<'WebkitColumnRule', T, Value>,
  ): this {
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
  WebkitColumnRuleColor<const Value extends PropertyValue<'WebkitColumnRuleColor', T>>(
    value: Value & CheckedPropertyValue<'WebkitColumnRuleColor', T, Value>,
  ): this {
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
  WebkitColumnRuleStyle<const Value extends PropertyValue<'WebkitColumnRuleStyle', T>>(
    value: Value & CheckedPropertyValue<'WebkitColumnRuleStyle', T, Value>,
  ): this {
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
  WebkitColumnRuleWidth<const Value extends PropertyValue<'WebkitColumnRuleWidth', T>>(
    value: Value & CheckedPropertyValue<'WebkitColumnRuleWidth', T, Value>,
  ): this {
    return this.write('WebkitColumnRuleWidth', value);
  }
  /**
   * 兼容属性 -webkit-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-columns
   */
  WebkitColumns<const Value extends PropertyValue<'WebkitColumns', T>>(
    value: Value & CheckedPropertyValue<'WebkitColumns', T, Value>,
  ): this {
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
  WebkitColumnSpan<const Value extends PropertyValue<'WebkitColumnSpan', T>>(
    value: Value & CheckedPropertyValue<'WebkitColumnSpan', T, Value>,
  ): this {
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
  WebkitColumnWidth<const Value extends PropertyValue<'WebkitColumnWidth', T>>(
    value: Value & CheckedPropertyValue<'WebkitColumnWidth', T, Value>,
  ): this {
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
  WebkitFilter<const Value extends PropertyValue<'WebkitFilter', T>>(
    value: Value & CheckedPropertyValue<'WebkitFilter', T, Value>,
  ): this {
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
  WebkitFlex<const Value extends PropertyValue<'WebkitFlex', T>>(
    value: Value & CheckedPropertyValue<'WebkitFlex', T, Value>,
  ): this {
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
  WebkitFlexBasis<const Value extends PropertyValue<'WebkitFlexBasis', T>>(
    value: Value & CheckedPropertyValue<'WebkitFlexBasis', T, Value>,
  ): this {
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
  WebkitFlexDirection<const Value extends PropertyValue<'WebkitFlexDirection', T>>(
    value: Value & CheckedPropertyValue<'WebkitFlexDirection', T, Value>,
  ): this {
    return this.write('WebkitFlexDirection', value);
  }
  /**
   * 兼容属性 -webkit-flex-flow；优先参考标准属性及浏览器支持范围。
   * 同时设置弹性布局的主轴方向和换行方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  WebkitFlexFlow<const Value extends PropertyValue<'WebkitFlexFlow', T>>(
    value: Value & CheckedPropertyValue<'WebkitFlexFlow', T, Value>,
  ): this {
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
  WebkitFlexGrow<const Value extends PropertyValue<'WebkitFlexGrow', T>>(
    value: Value & CheckedPropertyValue<'WebkitFlexGrow', T, Value>,
  ): this {
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
  WebkitFlexShrink<const Value extends PropertyValue<'WebkitFlexShrink', T>>(
    value: Value & CheckedPropertyValue<'WebkitFlexShrink', T, Value>,
  ): this {
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
  WebkitFlexWrap<const Value extends PropertyValue<'WebkitFlexWrap', T>>(
    value: Value & CheckedPropertyValue<'WebkitFlexWrap', T, Value>,
  ): this {
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
  WebkitFontFeatureSettings<const Value extends PropertyValue<'WebkitFontFeatureSettings', T>>(
    value: Value & CheckedPropertyValue<'WebkitFontFeatureSettings', T, Value>,
  ): this {
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
  WebkitFontKerning<const Value extends PropertyValue<'WebkitFontKerning', T>>(
    value: Value & CheckedPropertyValue<'WebkitFontKerning', T, Value>,
  ): this {
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
  WebkitFontSmoothing<const Value extends PropertyValue<'WebkitFontSmoothing', T>>(
    value: Value & CheckedPropertyValue<'WebkitFontSmoothing', T, Value>,
  ): this {
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
  WebkitFontVariantLigatures<const Value extends PropertyValue<'WebkitFontVariantLigatures', T>>(
    value: Value & CheckedPropertyValue<'WebkitFontVariantLigatures', T, Value>,
  ): this {
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
  WebkitHyphenateCharacter<const Value extends PropertyValue<'WebkitHyphenateCharacter', T>>(
    value: Value & CheckedPropertyValue<'WebkitHyphenateCharacter', T, Value>,
  ): this {
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
  WebkitHyphens<const Value extends PropertyValue<'WebkitHyphens', T>>(
    value: Value & CheckedPropertyValue<'WebkitHyphens', T, Value>,
  ): this {
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
  WebkitInitialLetter<const Value extends PropertyValue<'WebkitInitialLetter', T>>(
    value: Value & CheckedPropertyValue<'WebkitInitialLetter', T, Value>,
  ): this {
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
  WebkitJustifyContent<const Value extends PropertyValue<'WebkitJustifyContent', T>>(
    value: Value & CheckedPropertyValue<'WebkitJustifyContent', T, Value>,
  ): this {
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
  WebkitLineBreak<const Value extends PropertyValue<'WebkitLineBreak', T>>(
    value: Value & CheckedPropertyValue<'WebkitLineBreak', T, Value>,
  ): this {
    return this.write('WebkitLineBreak', value);
  }
  /**
   * 限制多行文本显示的行数；与 display: -webkit-box、WebkitBoxOrient('vertical') 和 overflow: hidden 配合，不删除文本内容。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-clamp
   */
  WebkitLineClamp<const Value extends PropertyValue<'WebkitLineClamp', T>>(
    value: Value & CheckedPropertyValue<'WebkitLineClamp', T, Value>,
  ): this {
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
  WebkitLogicalHeight<const Value extends PropertyValue<'WebkitLogicalHeight', T>>(
    value: Value & CheckedPropertyValue<'WebkitLogicalHeight', T, Value>,
  ): this {
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
  WebkitLogicalWidth<const Value extends PropertyValue<'WebkitLogicalWidth', T>>(
    value: Value & CheckedPropertyValue<'WebkitLogicalWidth', T, Value>,
  ): this {
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
  WebkitMarginEnd<const Value extends PropertyValue<'WebkitMarginEnd', T>>(
    value: Value & CheckedPropertyValue<'WebkitMarginEnd', T, Value>,
  ): this {
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
  WebkitMarginStart<const Value extends PropertyValue<'WebkitMarginStart', T>>(
    value: Value & CheckedPropertyValue<'WebkitMarginStart', T, Value>,
  ): this {
    return this.write('WebkitMarginStart', value);
  }
  /**
   * 兼容属性 -webkit-mask；优先参考标准属性及浏览器支持范围。
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  WebkitMask<const Value extends PropertyValue<'WebkitMask', T>>(
    value: Value & CheckedPropertyValue<'WebkitMask', T, Value>,
  ): this {
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
  WebkitMaskAttachment<const Value extends PropertyValue<'WebkitMaskAttachment', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskAttachment', T, Value>,
  ): this {
    return this.write('WebkitMaskAttachment', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image；优先参考标准属性 maskBorder及浏览器支持范围。
   * 设置基于九宫格图像切片的边框遮罩。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  WebkitMaskBoxImage<const Value extends PropertyValue<'WebkitMaskBoxImage', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskBoxImage', T, Value>,
  ): this {
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
  WebkitMaskBoxImageOutset<const Value extends PropertyValue<'WebkitMaskBoxImageOutset', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskBoxImageOutset', T, Value>,
  ): this {
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
  WebkitMaskBoxImageRepeat<const Value extends PropertyValue<'WebkitMaskBoxImageRepeat', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskBoxImageRepeat', T, Value>,
  ): this {
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
  WebkitMaskBoxImageSlice<const Value extends PropertyValue<'WebkitMaskBoxImageSlice', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskBoxImageSlice', T, Value>,
  ): this {
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
  WebkitMaskBoxImageSource<const Value extends PropertyValue<'WebkitMaskBoxImageSource', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskBoxImageSource', T, Value>,
  ): this {
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
  WebkitMaskBoxImageWidth<const Value extends PropertyValue<'WebkitMaskBoxImageWidth', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskBoxImageWidth', T, Value>,
  ): this {
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
  WebkitMaskClip<const Value extends PropertyValue<'WebkitMaskClip', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskClip', T, Value>,
  ): this {
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
  WebkitMaskComposite<const Value extends PropertyValue<'WebkitMaskComposite', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskComposite', T, Value>,
  ): this {
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
  WebkitMaskImage<const Value extends PropertyValue<'WebkitMaskImage', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskImage', T, Value>,
  ): this {
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
  WebkitMaskOrigin<const Value extends PropertyValue<'WebkitMaskOrigin', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskOrigin', T, Value>,
  ): this {
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
  WebkitMaskPosition<const Value extends PropertyValue<'WebkitMaskPosition', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskPosition', T, Value>,
  ): this {
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
  WebkitMaskPositionX<const Value extends PropertyValue<'WebkitMaskPositionX', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskPositionX', T, Value>,
  ): this {
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
  WebkitMaskPositionY<const Value extends PropertyValue<'WebkitMaskPositionY', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskPositionY', T, Value>,
  ): this {
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
  WebkitMaskRepeat<const Value extends PropertyValue<'WebkitMaskRepeat', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskRepeat', T, Value>,
  ): this {
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
  WebkitMaskRepeatX<const Value extends PropertyValue<'WebkitMaskRepeatX', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskRepeatX', T, Value>,
  ): this {
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
  WebkitMaskRepeatY<const Value extends PropertyValue<'WebkitMaskRepeatY', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskRepeatY', T, Value>,
  ): this {
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
  WebkitMaskSize<const Value extends PropertyValue<'WebkitMaskSize', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaskSize', T, Value>,
  ): this {
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
  WebkitMaxInlineSize<const Value extends PropertyValue<'WebkitMaxInlineSize', T>>(
    value: Value & CheckedPropertyValue<'WebkitMaxInlineSize', T, Value>,
  ): this {
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
  WebkitOrder<const Value extends PropertyValue<'WebkitOrder', T>>(
    value: Value & CheckedPropertyValue<'WebkitOrder', T, Value>,
  ): this {
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
  WebkitOverflowScrolling<const Value extends PropertyValue<'WebkitOverflowScrolling', T>>(
    value: Value & CheckedPropertyValue<'WebkitOverflowScrolling', T, Value>,
  ): this {
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
  WebkitPaddingEnd<const Value extends PropertyValue<'WebkitPaddingEnd', T>>(
    value: Value & CheckedPropertyValue<'WebkitPaddingEnd', T, Value>,
  ): this {
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
  WebkitPaddingStart<const Value extends PropertyValue<'WebkitPaddingStart', T>>(
    value: Value & CheckedPropertyValue<'WebkitPaddingStart', T, Value>,
  ): this {
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
  WebkitPerspective<const Value extends PropertyValue<'WebkitPerspective', T>>(
    value: Value & CheckedPropertyValue<'WebkitPerspective', T, Value>,
  ): this {
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
  WebkitPerspectiveOrigin<const Value extends PropertyValue<'WebkitPerspectiveOrigin', T>>(
    value: Value & CheckedPropertyValue<'WebkitPerspectiveOrigin', T, Value>,
  ): this {
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
  WebkitPrintColorAdjust<const Value extends PropertyValue<'WebkitPrintColorAdjust', T>>(
    value: Value & CheckedPropertyValue<'WebkitPrintColorAdjust', T, Value>,
  ): this {
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
  WebkitRubyPosition<const Value extends PropertyValue<'WebkitRubyPosition', T>>(
    value: Value & CheckedPropertyValue<'WebkitRubyPosition', T, Value>,
  ): this {
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
  WebkitScrollSnapType<const Value extends PropertyValue<'WebkitScrollSnapType', T>>(
    value: Value & CheckedPropertyValue<'WebkitScrollSnapType', T, Value>,
  ): this {
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
  WebkitShapeMargin<const Value extends PropertyValue<'WebkitShapeMargin', T>>(
    value: Value & CheckedPropertyValue<'WebkitShapeMargin', T, Value>,
  ): this {
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
  WebkitTapHighlightColor<const Value extends PropertyValue<'WebkitTapHighlightColor', T>>(
    value: Value & CheckedPropertyValue<'WebkitTapHighlightColor', T, Value>,
  ): this {
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
  WebkitTextCombine<const Value extends PropertyValue<'WebkitTextCombine', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextCombine', T, Value>,
  ): this {
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
  WebkitTextDecorationColor<const Value extends PropertyValue<'WebkitTextDecorationColor', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextDecorationColor', T, Value>,
  ): this {
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
  WebkitTextDecorationLine<const Value extends PropertyValue<'WebkitTextDecorationLine', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextDecorationLine', T, Value>,
  ): this {
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
  WebkitTextDecorationSkip<const Value extends PropertyValue<'WebkitTextDecorationSkip', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextDecorationSkip', T, Value>,
  ): this {
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
  WebkitTextDecorationStyle<const Value extends PropertyValue<'WebkitTextDecorationStyle', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextDecorationStyle', T, Value>,
  ): this {
    return this.write('WebkitTextDecorationStyle', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis；优先参考标准属性及浏览器支持范围。
   * 同时设置文字着重号的样式和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis
   */
  WebkitTextEmphasis<const Value extends PropertyValue<'WebkitTextEmphasis', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextEmphasis', T, Value>,
  ): this {
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
  WebkitTextEmphasisColor<const Value extends PropertyValue<'WebkitTextEmphasisColor', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextEmphasisColor', T, Value>,
  ): this {
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
  WebkitTextEmphasisPosition<const Value extends PropertyValue<'WebkitTextEmphasisPosition', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextEmphasisPosition', T, Value>,
  ): this {
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
  WebkitTextEmphasisStyle<const Value extends PropertyValue<'WebkitTextEmphasisStyle', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextEmphasisStyle', T, Value>,
  ): this {
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
  WebkitTextFillColor<const Value extends PropertyValue<'WebkitTextFillColor', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextFillColor', T, Value>,
  ): this {
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
  WebkitTextOrientation<const Value extends PropertyValue<'WebkitTextOrientation', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextOrientation', T, Value>,
  ): this {
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
  WebkitTextSizeAdjust<const Value extends PropertyValue<'WebkitTextSizeAdjust', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextSizeAdjust', T, Value>,
  ): this {
    return this.write('WebkitTextSizeAdjust', value);
  }
  /**
   * 兼容属性 -webkit-text-stroke；优先参考标准属性及浏览器支持范围。
   * 合并设置文字字形描边的宽度和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke
   */
  WebkitTextStroke<const Value extends PropertyValue<'WebkitTextStroke', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextStroke', T, Value>,
  ): this {
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
  WebkitTextStrokeColor<const Value extends PropertyValue<'WebkitTextStrokeColor', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextStrokeColor', T, Value>,
  ): this {
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
  WebkitTextStrokeWidth<const Value extends PropertyValue<'WebkitTextStrokeWidth', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextStrokeWidth', T, Value>,
  ): this {
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
  WebkitTextUnderlinePosition<const Value extends PropertyValue<'WebkitTextUnderlinePosition', T>>(
    value: Value & CheckedPropertyValue<'WebkitTextUnderlinePosition', T, Value>,
  ): this {
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
  WebkitTouchCallout<const Value extends PropertyValue<'WebkitTouchCallout', T>>(
    value: Value & CheckedPropertyValue<'WebkitTouchCallout', T, Value>,
  ): this {
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
  WebkitTransform<const Value extends PropertyValue<'WebkitTransform', T>>(
    value: Value & CheckedPropertyValue<'WebkitTransform', T, Value>,
  ): this {
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
  WebkitTransformOrigin<const Value extends PropertyValue<'WebkitTransformOrigin', T>>(
    value: Value & CheckedPropertyValue<'WebkitTransformOrigin', T, Value>,
  ): this {
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
  WebkitTransformStyle<const Value extends PropertyValue<'WebkitTransformStyle', T>>(
    value: Value & CheckedPropertyValue<'WebkitTransformStyle', T, Value>,
  ): this {
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
  WebkitTransition<const Value extends PropertyValue<'WebkitTransition', T>>(
    value: Value & CheckedPropertyValue<'WebkitTransition', T, Value>,
  ): this {
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
  WebkitTransitionDelay<const Value extends PropertyValue<'WebkitTransitionDelay', T>>(
    value: Value & CheckedPropertyValue<'WebkitTransitionDelay', T, Value>,
  ): this {
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
  WebkitTransitionDuration<const Value extends PropertyValue<'WebkitTransitionDuration', T>>(
    value: Value & CheckedPropertyValue<'WebkitTransitionDuration', T, Value>,
  ): this {
    return this.write('WebkitTransitionDuration', value);
  }
  /**
   * 兼容属性 -webkit-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-property
   */
  WebkitTransitionProperty<const Value extends PropertyValue<'WebkitTransitionProperty', T>>(
    value: Value & CheckedPropertyValue<'WebkitTransitionProperty', T, Value>,
  ): this {
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
  WebkitTransitionTimingFunction<
    const Value extends PropertyValue<'WebkitTransitionTimingFunction', T>,
  >(value: Value & CheckedPropertyValue<'WebkitTransitionTimingFunction', T, Value>): this {
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
  WebkitUserModify<const Value extends PropertyValue<'WebkitUserModify', T>>(
    value: Value & CheckedPropertyValue<'WebkitUserModify', T, Value>,
  ): this {
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
  WebkitUserSelect<const Value extends PropertyValue<'WebkitUserSelect', T>>(
    value: Value & CheckedPropertyValue<'WebkitUserSelect', T, Value>,
  ): this {
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
  WebkitWritingMode<const Value extends PropertyValue<'WebkitWritingMode', T>>(
    value: Value & CheckedPropertyValue<'WebkitWritingMode', T, Value>,
  ): this {
    return this.write('WebkitWritingMode', value);
  }
  /**
   * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  all<const Value extends PropertyValue<'all', T>>(
    value: Value & CheckedPropertyValue<'all', T, Value>,
  ): this {
    return this.write('all', value);
  }
  /**
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：`slice`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  boxDecorationBreak<const Value extends PropertyValue<'boxDecorationBreak', T>>(
    value: Value & CheckedPropertyValue<'boxDecorationBreak', T, Value>,
  ): this {
    return this.write('boxDecorationBreak', value);
  }
  /**
   * 设置 SVG 圆或椭圆中心的横坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  cx<const Value extends PropertyValue<'cx', T>>(
    value: Value & CheckedPropertyValue<'cx', T, Value>,
  ): this {
    return this.write('cx', value);
  }
  /**
   * 设置 SVG 圆或椭圆中心的纵坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  cy<const Value extends PropertyValue<'cy', T>>(
    value: Value & CheckedPropertyValue<'cy', T, Value>,
  ): this {
    return this.write('cy', value);
  }
  /**
   * 设置 SVG path 元素的路径数据。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  d<const Value extends PropertyValue<'d', T>>(
    value: Value & CheckedPropertyValue<'d', T, Value>,
  ): this {
    return this.write('d', value);
  }
  /**
   * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。
   *
   * CSS 规范初始值：`fixed`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  fieldSizing<const Value extends PropertyValue<'fieldSizing', T>>(
    value: Value & CheckedPropertyValue<'fieldSizing', T, Value>,
  ): this {
    return this.write('fieldSizing', value);
  }
  /**
   * 控制元素是否参与系统强制颜色模式的自动替换。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  forcedColorAdjust<const Value extends PropertyValue<'forcedColorAdjust', T>>(
    value: Value & CheckedPropertyValue<'forcedColorAdjust', T, Value>,
  ): this {
    return this.write('forcedColorAdjust', value);
  }
  /**
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  hyphenateCharacter<const Value extends PropertyValue<'hyphenateCharacter', T>>(
    value: Value & CheckedPropertyValue<'hyphenateCharacter', T, Value>,
  ): this {
    return this.write('hyphenateCharacter', value);
  }
  /**
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  hyphenateLimitChars<const Value extends PropertyValue<'hyphenateLimitChars', T>>(
    value: Value & CheckedPropertyValue<'hyphenateLimitChars', T, Value>,
  ): this {
    return this.write('hyphenateLimitChars', value);
  }
  /**
   * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。
   *
   * CSS 规范初始值：`numeric-only`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  interpolateSize<const Value extends PropertyValue<'interpolateSize', T>>(
    value: Value & CheckedPropertyValue<'interpolateSize', T, Value>,
  ): this {
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
  isolation<const Value extends PropertyValue<'isolation', T>>(
    value: Value & CheckedPropertyValue<'isolation', T, Value>,
  ): this {
    return this.write('isolation', value);
  }
  /**
   * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`pack`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  masonryAutoFlow<const Value extends PropertyValue<'masonryAutoFlow', T>>(
    value: Value & CheckedPropertyValue<'masonryAutoFlow', T, Value>,
  ): this {
    return this.write('masonryAutoFlow', value);
  }
  /**
   * 设置数学公式的嵌套深度，用于数学字号等排版计算。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  mathDepth<const Value extends PropertyValue<'mathDepth', T>>(
    value: Value & CheckedPropertyValue<'mathDepth', T, Value>,
  ): this {
    return this.write('mathDepth', value);
  }
  /**
   * 控制数学上标采用正常还是压缩的垂直偏移。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  mathShift<const Value extends PropertyValue<'mathShift', T>>(
    value: Value & CheckedPropertyValue<'mathShift', T, Value>,
  ): this {
    return this.write('mathShift', value);
  }
  /**
   * 设置数学公式采用正常还是紧凑排版。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  mathStyle<const Value extends PropertyValue<'mathStyle', T>>(
    value: Value & CheckedPropertyValue<'mathStyle', T, Value>,
  ): this {
    return this.write('mathStyle', value);
  }
  /**
   * 设置运动路径的旧式简写；对应现代 offset 属性族。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  motion<const Value extends PropertyValue<'motion', T>>(
    value: Value & CheckedPropertyValue<'motion', T, Value>,
  ): this {
    return this.write('motion', value);
  }
  /**
   * 设置沿运动路径行进距离的旧属性；对应 offset-distance。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-distance
   */
  motionDistance<const Value extends PropertyValue<'motionDistance', T>>(
    value: Value & CheckedPropertyValue<'motionDistance', T, Value>,
  ): this {
    return this.write('motionDistance', value);
  }
  /**
   * 设置运动路径的旧属性；对应 offset-path。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  motionPath<const Value extends PropertyValue<'motionPath', T>>(
    value: Value & CheckedPropertyValue<'motionPath', T, Value>,
  ): this {
    return this.write('motionPath', value);
  }
  /**
   * 设置运动路径旋转方式的旧属性；对应 offset-rotate。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-rotation
   */
  motionRotation<const Value extends PropertyValue<'motionRotation', T>>(
    value: Value & CheckedPropertyValue<'motionRotation', T, Value>,
  ): this {
    return this.write('motionRotation', value);
  }
  /**
   * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  overlay<const Value extends PropertyValue<'overlay', T>>(
    value: Value & CheckedPropertyValue<'overlay', T, Value>,
  ): this {
    return this.write('overlay', value);
  }
  /**
   * 设置 SVG 圆的半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  r<const Value extends PropertyValue<'r', T>>(
    value: Value & CheckedPropertyValue<'r', T, Value>,
  ): this {
    return this.write('r', value);
  }
  /**
   * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  rx<const Value extends PropertyValue<'rx', T>>(
    value: Value & CheckedPropertyValue<'rx', T, Value>,
  ): this {
    return this.write('rx', value);
  }
  /**
   * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  ry<const Value extends PropertyValue<'ry', T>>(
    value: Value & CheckedPropertyValue<'ry', T, Value>,
  ): this {
    return this.write('ry', value);
  }
  /**
   * 设置语音呈现时文字、数字和标点的朗读方式；使用前核对语音媒体支持。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  speakAs<const Value extends PropertyValue<'speakAs', T>>(
    value: Value & CheckedPropertyValue<'speakAs', T, Value>,
  ): this {
    return this.write('speakAs', value);
  }
  /**
   * 设置描边颜色的扩展属性；常规 SVG 优先使用 stroke 并核对支持情况。
   *
   * CSS 规范初始值：`transparent`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  strokeColor<const Value extends PropertyValue<'strokeColor', T>>(
    value: Value & CheckedPropertyValue<'strokeColor', T, Value>,
  ): this {
    return this.write('strokeColor', value);
  }
  /**
   * 扩大命名动画时间线的可引用作用域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  timelineScope<const Value extends PropertyValue<'timelineScope', T>>(
    value: Value & CheckedPropertyValue<'timelineScope', T, Value>,
  ): this {
    return this.write('timelineScope', value);
  }
  /**
   * 同时声明基于元素可见进度的时间线名称与轴。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  viewTimeline<const Value extends PropertyValue<'viewTimeline', T>>(
    value: Value & CheckedPropertyValue<'viewTimeline', T, Value>,
  ): this {
    return this.write('viewTimeline', value);
  }
  /**
   * 设置可见进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：`block`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  viewTimelineAxis<const Value extends PropertyValue<'viewTimelineAxis', T>>(
    value: Value & CheckedPropertyValue<'viewTimelineAxis', T, Value>,
  ): this {
    return this.write('viewTimelineAxis', value);
  }
  /**
   * 设置可见进度时间线使用的滚动视口内缩范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  viewTimelineInset<const Value extends PropertyValue<'viewTimelineInset', T>>(
    value: Value & CheckedPropertyValue<'viewTimelineInset', T, Value>,
  ): this {
    return this.write('viewTimelineInset', value);
  }
  /**
   * 声明基于元素进入和离开滚动视口的时间线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  viewTimelineName<const Value extends PropertyValue<'viewTimelineName', T>>(
    value: Value & CheckedPropertyValue<'viewTimelineName', T, Value>,
  ): this {
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
  willChange<const Value extends PropertyValue<'willChange', T>>(
    value: Value & CheckedPropertyValue<'willChange', T, Value>,
  ): this {
    return this.write('willChange', value);
  }
  /**
   * 设置适用 SVG 元素的水平几何坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  x<const Value extends PropertyValue<'x', T>>(
    value: Value & CheckedPropertyValue<'x', T, Value>,
  ): this {
    return this.write('x', value);
  }
  /**
   * 设置适用 SVG 元素的垂直几何坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  y<const Value extends PropertyValue<'y', T>>(
    value: Value & CheckedPropertyValue<'y', T, Value>,
  ): this {
    return this.write('y', value);
  }
  /**
   * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  zoom<const Value extends PropertyValue<'zoom', T>>(
    value: Value & CheckedPropertyValue<'zoom', T, Value>,
  ): this {
    return this.write('zoom', value);
  }
}
