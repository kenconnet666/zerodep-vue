// 由 packages/core/scripts/css/generate.mjs 从固定 csstype@3.2.3 生成；请勿手改。
import type { KeywordInput, PropertyInput, PropertyValue } from '../types.ts';
import type { SystemKeywords } from './system.ts';
import { CssAuthor } from '../author.ts';
/** 不可变链式样式；每次调用返回新值，泛型 T 保留主题约束。 */
export class Css<T extends SystemKeywords = SystemKeywords> extends CssAuthor {
  /**
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  alignContent(value: KeywordInput<'alignContent', T>): this;
  /**
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  alignContent<const Value>(value: PropertyInput<'alignContent', T, Value>): this;
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
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  alignItems(value: KeywordInput<'alignItems', T>): this;
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
  alignItems<const Value>(value: PropertyInput<'alignItems', T, Value>): this;
  alignItems(value: PropertyValue<'alignItems', T>): this {
    return this.write('alignItems', value);
  }
  /**
   * 选择行内或 SVG 文本参与对齐时使用的基线。
   *
   * @default:'baseline'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  alignmentBaseline(value: KeywordInput<'alignmentBaseline', T>): this;
  /**
   * 选择行内或 SVG 文本参与对齐时使用的基线。
   *
   * @default:'baseline'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  alignmentBaseline<const Value>(value: PropertyInput<'alignmentBaseline', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  alignSelf(value: KeywordInput<'alignSelf', T>): this;
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
  alignSelf<const Value>(value: PropertyInput<'alignSelf', T, Value>): this;
  alignSelf(value: PropertyValue<'alignSelf', T>): this {
    return this.write('alignSelf', value);
  }
  /**
   * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  alignTracks(value: KeywordInput<'alignTracks', T>): this;
  /**
   * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  alignTracks<const Value>(value: PropertyInput<'alignTracks', T, Value>): this;
  alignTracks(value: PropertyValue<'alignTracks', T>): this {
    return this.write('alignTracks', value);
  }
  /**
   * 为元素声明锚点名称，供锚点定位的元素引用。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  anchorName(value: KeywordInput<'anchorName', T>): this;
  /**
   * 为元素声明锚点名称，供锚点定位的元素引用。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  anchorName<const Value>(value: PropertyInput<'anchorName', T, Value>): this;
  anchorName(value: PropertyValue<'anchorName', T>): this {
    return this.write('anchorName', value);
  }
  /**
   * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  anchorScope(value: KeywordInput<'anchorScope', T>): this;
  /**
   * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  anchorScope<const Value>(value: PropertyInput<'anchorScope', T, Value>): this;
  anchorScope(value: PropertyValue<'anchorScope', T>): this {
    return this.write('anchorScope', value);
  }
  /**
   * 设置定位元素相对于其定位参照的下侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  bottom(value: KeywordInput<'bottom', T>): this;
  /**
   * 设置定位元素相对于其定位参照的下侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  bottom<const Value>(value: PropertyInput<'bottom', T, Value>): this;
  bottom(value: PropertyValue<'bottom', T>): this {
    return this.write('bottom', value);
  }
  /**
   * 要求元素避让指定侧的前置浮动元素。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  clear(value: KeywordInput<'clear', T>): this;
  /**
   * 要求元素避让指定侧的前置浮动元素。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  clear<const Value>(value: PropertyInput<'clear', T, Value>): this;
  clear(value: PropertyValue<'clear', T>): this {
    return this.write('clear', value);
  }
  /**
   * 设置多栏布局的目标栏数。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  columnCount(value: KeywordInput<'columnCount', T>): this;
  /**
   * 设置多栏布局的目标栏数。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  columnCount<const Value>(value: PropertyInput<'columnCount', T, Value>): this;
  columnCount(value: PropertyValue<'columnCount', T>): this {
    return this.write('columnCount', value);
  }
  /**
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * @default:'balance'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  columnFill(value: KeywordInput<'columnFill', T>): this;
  /**
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * @default:'balance'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  columnFill<const Value>(value: PropertyInput<'columnFill', T, Value>): this;
  columnFill(value: PropertyValue<'columnFill', T>): this {
    return this.write('columnFill', value);
  }
  /**
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * @default:'column-width: auto；column-count: auto；column-height: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  columns(value: KeywordInput<'columns', T>): this;
  /**
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * @default:'column-width: auto；column-count: auto；column-height: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  columns<const Value>(value: PropertyInput<'columns', T, Value>): this;
  columns(value: PropertyValue<'columns', T>): this {
    return this.write('columns', value);
  }
  /**
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  columnSpan(value: KeywordInput<'columnSpan', T>): this;
  /**
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  columnSpan<const Value>(value: PropertyInput<'columnSpan', T, Value>): this;
  columnSpan(value: PropertyValue<'columnSpan', T>): this {
    return this.write('columnSpan', value);
  }
  /**
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  columnWidth(value: KeywordInput<'columnWidth', T>): this;
  /**
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  columnWidth<const Value>(value: PropertyInput<'columnWidth', T, Value>): this;
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
   * @default:'inline'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  display(value: KeywordInput<'display', T>): this;
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
  display<const Value>(value: PropertyInput<'display', T, Value>): this;
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
   *
   * @default:'flex-grow: 0；flex-shrink: 1；flex-basis: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  flex(value: KeywordInput<'flex', T>): this;
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
  flex<const Value>(value: PropertyInput<'flex', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  flexBasis(value: KeywordInput<'flexBasis', T>): this;
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
  flexBasis<const Value>(value: PropertyInput<'flexBasis', T, Value>): this;
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
   * @default:'row'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
   */
  flexDirection(value: KeywordInput<'flexDirection', T>): this;
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
  flexDirection<const Value>(value: PropertyInput<'flexDirection', T, Value>): this;
  flexDirection(value: PropertyValue<'flexDirection', T>): this {
    return this.write('flexDirection', value);
  }
  /**
   * 同时设置弹性布局的主轴方向和换行方式。
   *
   * @default:'flex-direction: row；flex-wrap: nowrap'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  flexFlow(value: KeywordInput<'flexFlow', T>): this;
  /**
   * 同时设置弹性布局的主轴方向和换行方式。
   *
   * @default:'flex-direction: row；flex-wrap: nowrap'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  flexFlow<const Value>(value: PropertyInput<'flexFlow', T, Value>): this;
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
   * @default:'0'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
   */
  flexGrow(value: KeywordInput<'flexGrow', T>): this;
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
  flexGrow<const Value>(value: PropertyInput<'flexGrow', T, Value>): this;
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
   * @default:'1'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
   */
  flexShrink(value: KeywordInput<'flexShrink', T>): this;
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
  flexShrink<const Value>(value: PropertyInput<'flexShrink', T, Value>): this;
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
   * @default:'nowrap'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  flexWrap(value: KeywordInput<'flexWrap', T>): this;
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
  flexWrap<const Value>(value: PropertyInput<'flexWrap', T, Value>): this;
  flexWrap(value: PropertyValue<'flexWrap', T>): this {
    return this.write('flexWrap', value);
  }
  /**
   * 将元素浮动到指定侧，使相邻行内内容围绕它排列。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  float(value: KeywordInput<'float', T>): this;
  /**
   * 将元素浮动到指定侧，使相邻行内内容围绕它排列。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  float<const Value>(value: PropertyInput<'float', T, Value>): this;
  float(value: PropertyValue<'float', T>): this {
    return this.write('float', value);
  }
  /**
   * 集中设置显式和隐式网格的轨道、区域及自动放置方式。
   *
   * @default:'grid-template-rows: none；grid-template-columns: none；grid-template-areas: none；grid-auto-rows: auto；grid-auto-columns: auto；grid-auto-flow: row；grid-column-gap: 0；grid-row-gap: 0；column-gap: normal；row-gap: normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  grid(value: KeywordInput<'grid', T>): this;
  /**
   * 集中设置显式和隐式网格的轨道、区域及自动放置方式。
   *
   * @default:'grid-template-rows: none；grid-template-columns: none；grid-template-areas: none；grid-auto-rows: auto；grid-auto-columns: auto；grid-auto-flow: row；grid-column-gap: 0；grid-row-gap: 0；column-gap: normal；row-gap: normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  grid<const Value>(value: PropertyInput<'grid', T, Value>): this;
  grid(value: PropertyValue<'grid', T>): this {
    return this.write('grid', value);
  }
  /**
   * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。
   *
   * @default:'grid-row-start: auto；grid-column-start: auto；grid-row-end: auto；grid-column-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  gridArea(value: KeywordInput<'gridArea', T>): this;
  /**
   * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。
   *
   * @default:'grid-row-start: auto；grid-column-start: auto；grid-row-end: auto；grid-column-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  gridArea<const Value>(value: PropertyInput<'gridArea', T, Value>): this;
  gridArea(value: PropertyValue<'gridArea', T>): this {
    return this.write('gridArea', value);
  }
  /**
   * 设置隐式生成的网格列尺寸。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  gridAutoColumns(value: KeywordInput<'gridAutoColumns', T>): this;
  /**
   * 设置隐式生成的网格列尺寸。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  gridAutoColumns<const Value>(value: PropertyInput<'gridAutoColumns', T, Value>): this;
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
   * @default:'row'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
   */
  gridAutoFlow(value: KeywordInput<'gridAutoFlow', T>): this;
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
  gridAutoFlow<const Value>(value: PropertyInput<'gridAutoFlow', T, Value>): this;
  gridAutoFlow(value: PropertyValue<'gridAutoFlow', T>): this {
    return this.write('gridAutoFlow', value);
  }
  /**
   * 设置隐式生成的网格行尺寸。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  gridAutoRows(value: KeywordInput<'gridAutoRows', T>): this;
  /**
   * 设置隐式生成的网格行尺寸。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  gridAutoRows<const Value>(value: PropertyInput<'gridAutoRows', T, Value>): this;
  gridAutoRows(value: PropertyValue<'gridAutoRows', T>): this {
    return this.write('gridAutoRows', value);
  }
  /**
   * 设置网格项目的列起点和列终点。
   *
   * @default:'grid-column-start: auto；grid-column-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  gridColumn(value: KeywordInput<'gridColumn', T>): this;
  /**
   * 设置网格项目的列起点和列终点。
   *
   * @default:'grid-column-start: auto；grid-column-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  gridColumn<const Value>(value: PropertyInput<'gridColumn', T, Value>): this;
  gridColumn(value: PropertyValue<'gridColumn', T>): this {
    return this.write('gridColumn', value);
  }
  /**
   * 设置网格项目的列终止线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  gridColumnEnd(value: KeywordInput<'gridColumnEnd', T>): this;
  /**
   * 设置网格项目的列终止线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  gridColumnEnd<const Value>(value: PropertyInput<'gridColumnEnd', T, Value>): this;
  gridColumnEnd(value: PropertyValue<'gridColumnEnd', T>): this {
    return this.write('gridColumnEnd', value);
  }
  /**
   * 设置网格项目的列起始线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  gridColumnStart(value: KeywordInput<'gridColumnStart', T>): this;
  /**
   * 设置网格项目的列起始线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  gridColumnStart<const Value>(value: PropertyInput<'gridColumnStart', T, Value>): this;
  gridColumnStart(value: PropertyValue<'gridColumnStart', T>): this {
    return this.write('gridColumnStart', value);
  }
  /**
   * 设置网格项目的行起点和行终点。
   *
   * @default:'grid-row-start: auto；grid-row-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  gridRow(value: KeywordInput<'gridRow', T>): this;
  /**
   * 设置网格项目的行起点和行终点。
   *
   * @default:'grid-row-start: auto；grid-row-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  gridRow<const Value>(value: PropertyInput<'gridRow', T, Value>): this;
  gridRow(value: PropertyValue<'gridRow', T>): this {
    return this.write('gridRow', value);
  }
  /**
   * 设置网格项目的行终止线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  gridRowEnd(value: KeywordInput<'gridRowEnd', T>): this;
  /**
   * 设置网格项目的行终止线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  gridRowEnd<const Value>(value: PropertyInput<'gridRowEnd', T, Value>): this;
  gridRowEnd(value: PropertyValue<'gridRowEnd', T>): this {
    return this.write('gridRowEnd', value);
  }
  /**
   * 设置网格项目的行起始线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  gridRowStart(value: KeywordInput<'gridRowStart', T>): this;
  /**
   * 设置网格项目的行起始线或跨越范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  gridRowStart<const Value>(value: PropertyInput<'gridRowStart', T, Value>): this;
  gridRowStart(value: PropertyValue<'gridRowStart', T>): this {
    return this.write('gridRowStart', value);
  }
  /**
   * 集中设置显式网格的行、列和命名区域。
   *
   * @default:'grid-template-columns: none；grid-template-rows: none；grid-template-areas: none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  gridTemplate(value: KeywordInput<'gridTemplate', T>): this;
  /**
   * 集中设置显式网格的行、列和命名区域。
   *
   * @default:'grid-template-columns: none；grid-template-rows: none；grid-template-areas: none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  gridTemplate<const Value>(value: PropertyInput<'gridTemplate', T, Value>): this;
  gridTemplate(value: PropertyValue<'gridTemplate', T>): this {
    return this.write('gridTemplate', value);
  }
  /**
   * 用区域名称矩阵定义网格布局区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  gridTemplateAreas(value: KeywordInput<'gridTemplateAreas', T>): this;
  /**
   * 用区域名称矩阵定义网格布局区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  gridTemplateAreas<const Value>(value: PropertyInput<'gridTemplateAreas', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  gridTemplateColumns(value: KeywordInput<'gridTemplateColumns', T>): this;
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
  gridTemplateColumns<const Value>(value: PropertyInput<'gridTemplateColumns', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  gridTemplateRows(value: KeywordInput<'gridTemplateRows', T>): this;
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
  gridTemplateRows<const Value>(value: PropertyInput<'gridTemplateRows', T, Value>): this;
  gridTemplateRows(value: PropertyValue<'gridTemplateRows', T>): this {
    return this.write('gridTemplateRows', value);
  }
  /**
   * 同时设置定位元素的上、右、下、左偏移。
   *
   * @default:'top: auto；bottom: auto；left: auto；right: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  inset(value: KeywordInput<'inset', T>): this;
  /**
   * 同时设置定位元素的上、右、下、左偏移。
   *
   * @default:'top: auto；bottom: auto；left: auto；right: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  inset<const Value>(value: PropertyInput<'inset', T, Value>): this;
  inset(value: PropertyValue<'inset', T>): this {
    return this.write('inset', value);
  }
  /**
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   *
   * @default:'inset-block-start: auto；inset-block-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  insetBlock(value: KeywordInput<'insetBlock', T>): this;
  /**
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   *
   * @default:'inset-block-start: auto；inset-block-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  insetBlock<const Value>(value: PropertyInput<'insetBlock', T, Value>): this;
  insetBlock(value: PropertyValue<'insetBlock', T>): this {
    return this.write('insetBlock', value);
  }
  /**
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  insetBlockEnd(value: KeywordInput<'insetBlockEnd', T>): this;
  /**
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  insetBlockEnd<const Value>(value: PropertyInput<'insetBlockEnd', T, Value>): this;
  insetBlockEnd(value: PropertyValue<'insetBlockEnd', T>): this {
    return this.write('insetBlockEnd', value);
  }
  /**
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  insetBlockStart(value: KeywordInput<'insetBlockStart', T>): this;
  /**
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  insetBlockStart<const Value>(value: PropertyInput<'insetBlockStart', T, Value>): this;
  insetBlockStart(value: PropertyValue<'insetBlockStart', T>): this {
    return this.write('insetBlockStart', value);
  }
  /**
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   *
   * @default:'inset-inline-start: auto；inset-inline-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  insetInline(value: KeywordInput<'insetInline', T>): this;
  /**
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   *
   * @default:'inset-inline-start: auto；inset-inline-end: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  insetInline<const Value>(value: PropertyInput<'insetInline', T, Value>): this;
  insetInline(value: PropertyValue<'insetInline', T>): this {
    return this.write('insetInline', value);
  }
  /**
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  insetInlineEnd(value: KeywordInput<'insetInlineEnd', T>): this;
  /**
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  insetInlineEnd<const Value>(value: PropertyInput<'insetInlineEnd', T, Value>): this;
  insetInlineEnd(value: PropertyValue<'insetInlineEnd', T>): this {
    return this.write('insetInlineEnd', value);
  }
  /**
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  insetInlineStart(value: KeywordInput<'insetInlineStart', T>): this;
  /**
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  insetInlineStart<const Value>(value: PropertyInput<'insetInlineStart', T, Value>): this;
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
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  justifyContent(value: KeywordInput<'justifyContent', T>): this;
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
  justifyContent<const Value>(value: PropertyInput<'justifyContent', T, Value>): this;
  justifyContent(value: PropertyValue<'justifyContent', T>): this {
    return this.write('justifyContent', value);
  }
  /**
   * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。
   *
   * @default:'legacy'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  justifyItems(value: KeywordInput<'justifyItems', T>): this;
  /**
   * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。
   *
   * @default:'legacy'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  justifyItems<const Value>(value: PropertyInput<'justifyItems', T, Value>): this;
  justifyItems(value: PropertyValue<'justifyItems', T>): this {
    return this.write('justifyItems', value);
  }
  /**
   * 单独设置项目在其布局区域内的行内轴对齐方式。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  justifySelf(value: KeywordInput<'justifySelf', T>): this;
  /**
   * 单独设置项目在其布局区域内的行内轴对齐方式。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  justifySelf<const Value>(value: PropertyInput<'justifySelf', T, Value>): this;
  justifySelf(value: PropertyValue<'justifySelf', T>): this {
    return this.write('justifySelf', value);
  }
  /**
   * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  justifyTracks(value: KeywordInput<'justifyTracks', T>): this;
  /**
   * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  justifyTracks<const Value>(value: PropertyInput<'justifyTracks', T, Value>): this;
  justifyTracks(value: PropertyValue<'justifyTracks', T>): this {
    return this.write('justifyTracks', value);
  }
  /**
   * 设置定位元素相对于其定位参照的左侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  left(value: KeywordInput<'left', T>): this;
  /**
   * 设置定位元素相对于其定位参照的左侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  left<const Value>(value: PropertyInput<'left', T, Value>): this;
  left(value: PropertyValue<'left', T>): this {
    return this.write('left', value);
  }
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
  order(value: KeywordInput<'order', T>): this;
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
  order<const Value>(value: PropertyInput<'order', T, Value>): this;
  order(value: PropertyValue<'order', T>): this {
    return this.write('order', value);
  }
  /**
   * 同时设置 align-content 与 justify-content。
   *
   * @default:'align-content: normal；justify-content: normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  placeContent(value: KeywordInput<'placeContent', T>): this;
  /**
   * 同时设置 align-content 与 justify-content。
   *
   * @default:'align-content: normal；justify-content: normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  placeContent<const Value>(value: PropertyInput<'placeContent', T, Value>): this;
  placeContent(value: PropertyValue<'placeContent', T>): this {
    return this.write('placeContent', value);
  }
  /**
   * 同时设置 align-items 与 justify-items。
   *
   * @default:'align-items: normal；justify-items: legacy'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  placeItems(value: KeywordInput<'placeItems', T>): this;
  /**
   * 同时设置 align-items 与 justify-items。
   *
   * @default:'align-items: normal；justify-items: legacy'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  placeItems<const Value>(value: PropertyInput<'placeItems', T, Value>): this;
  placeItems(value: PropertyValue<'placeItems', T>): this {
    return this.write('placeItems', value);
  }
  /**
   * 同时设置 align-self 与 justify-self。
   *
   * @default:'align-self: auto；justify-self: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  placeSelf(value: KeywordInput<'placeSelf', T>): this;
  /**
   * 同时设置 align-self 与 justify-self。
   *
   * @default:'align-self: auto；justify-self: auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  placeSelf<const Value>(value: PropertyInput<'placeSelf', T, Value>): this;
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
   * @default:'static'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  position(value: KeywordInput<'position', T>): this;
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
  position<const Value>(value: PropertyInput<'position', T, Value>): this;
  position(value: PropertyValue<'position', T>): this {
    return this.write('position', value);
  }
  /**
   * 选择绝对定位元素使用的默认锚点。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  positionAnchor(value: KeywordInput<'positionAnchor', T>): this;
  /**
   * 选择绝对定位元素使用的默认锚点。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  positionAnchor<const Value>(value: PropertyInput<'positionAnchor', T, Value>): this;
  positionAnchor(value: PropertyValue<'positionAnchor', T>): this {
    return this.write('positionAnchor', value);
  }
  /**
   * 选择相对于锚点的定位区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  positionArea(value: KeywordInput<'positionArea', T>): this;
  /**
   * 选择相对于锚点的定位区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  positionArea<const Value>(value: PropertyInput<'positionArea', T, Value>): this;
  positionArea(value: PropertyValue<'positionArea', T>): this {
    return this.write('positionArea', value);
  }
  /**
   * 同时设置锚点定位的候选回退方式及尝试顺序。
   *
   * @default:'position-try-fallbacks: none；position-try-order: normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  positionTry(value: KeywordInput<'positionTry', T>): this;
  /**
   * 同时设置锚点定位的候选回退方式及尝试顺序。
   *
   * @default:'position-try-fallbacks: none；position-try-order: normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  positionTry<const Value>(value: PropertyInput<'positionTry', T, Value>): this;
  positionTry(value: PropertyValue<'positionTry', T>): this {
    return this.write('positionTry', value);
  }
  /**
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  positionTryFallbacks(value: KeywordInput<'positionTryFallbacks', T>): this;
  /**
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  positionTryFallbacks<const Value>(value: PropertyInput<'positionTryFallbacks', T, Value>): this;
  positionTryFallbacks(value: PropertyValue<'positionTryFallbacks', T>): this {
    return this.write('positionTryFallbacks', value);
  }
  /**
   * 设置锚点定位候选方案的尝试顺序。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  positionTryOrder(value: KeywordInput<'positionTryOrder', T>): this;
  /**
   * 设置锚点定位候选方案的尝试顺序。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  positionTryOrder<const Value>(value: PropertyInput<'positionTryOrder', T, Value>): this;
  positionTryOrder(value: PropertyValue<'positionTryOrder', T>): this {
    return this.write('positionTryOrder', value);
  }
  /**
   * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。
   *
   * @default:'anchors-visible'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  positionVisibility(value: KeywordInput<'positionVisibility', T>): this;
  /**
   * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。
   *
   * @default:'anchors-visible'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  positionVisibility<const Value>(value: PropertyInput<'positionVisibility', T, Value>): this;
  positionVisibility(value: PropertyValue<'positionVisibility', T>): this {
    return this.write('positionVisibility', value);
  }
  /**
   * 设置定位元素相对于其定位参照的右侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  right(value: KeywordInput<'right', T>): this;
  /**
   * 设置定位元素相对于其定位参照的右侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  right<const Value>(value: PropertyInput<'right', T, Value>): this;
  right(value: PropertyValue<'right', T>): this {
    return this.write('right', value);
  }
  /**
   * 设置定位元素相对于其定位参照的上侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  top(value: KeywordInput<'top', T>): this;
  /**
   * 设置定位元素相对于其定位参照的上侧偏移。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  top<const Value>(value: PropertyInput<'top', T, Value>): this;
  top(value: PropertyValue<'top', T>): this {
    return this.write('top', value);
  }
  /**
   * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。
   *
   * @default:'baseline'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  verticalAlign(value: KeywordInput<'verticalAlign', T>): this;
  /**
   * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。
   *
   * @default:'baseline'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  verticalAlign<const Value>(value: PropertyInput<'verticalAlign', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
   */
  zIndex(value: KeywordInput<'zIndex', T>): this;
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
  zIndex<const Value>(value: PropertyInput<'zIndex', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
   */
  aspectRatio(value: KeywordInput<'aspectRatio', T>): this;
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
  aspectRatio<const Value>(value: PropertyInput<'aspectRatio', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  blockSize(value: KeywordInput<'blockSize', T>): this;
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
  blockSize<const Value>(value: PropertyInput<'blockSize', T, Value>): this;
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
   * @default:'content-box'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
   */
  boxSizing(value: KeywordInput<'boxSizing', T>): this;
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
  boxSizing<const Value>(value: PropertyInput<'boxSizing', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  height(value: KeywordInput<'height', T>): this;
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
  height<const Value>(value: PropertyInput<'height', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  inlineSize(value: KeywordInput<'inlineSize', T>): this;
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
  inlineSize<const Value>(value: PropertyInput<'inlineSize', T, Value>): this;
  inlineSize(value: PropertyValue<'inlineSize', T>): this {
    return this.write('inlineSize', value);
  }
  /**
   * 限制元素逻辑块轴的最大尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  maxBlockSize(value: KeywordInput<'maxBlockSize', T>): this;
  /**
   * 限制元素逻辑块轴的最大尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  maxBlockSize<const Value>(value: PropertyInput<'maxBlockSize', T, Value>): this;
  maxBlockSize(value: PropertyValue<'maxBlockSize', T>): this {
    return this.write('maxBlockSize', value);
  }
  /**
   * 限制元素的最大物理高度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  maxHeight(value: KeywordInput<'maxHeight', T>): this;
  /**
   * 限制元素的最大物理高度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  maxHeight<const Value>(value: PropertyInput<'maxHeight', T, Value>): this;
  maxHeight(value: PropertyValue<'maxHeight', T>): this {
    return this.write('maxHeight', value);
  }
  /**
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  maxInlineSize(value: KeywordInput<'maxInlineSize', T>): this;
  /**
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  maxInlineSize<const Value>(value: PropertyInput<'maxInlineSize', T, Value>): this;
  maxInlineSize(value: PropertyValue<'maxInlineSize', T>): this {
    return this.write('maxInlineSize', value);
  }
  /**
   * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  maxLines(value: KeywordInput<'maxLines', T>): this;
  /**
   * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。
   *
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  maxLines<const Value>(value: PropertyInput<'maxLines', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  maxWidth(value: KeywordInput<'maxWidth', T>): this;
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
  maxWidth<const Value>(value: PropertyInput<'maxWidth', T, Value>): this;
  maxWidth(value: PropertyValue<'maxWidth', T>): this {
    return this.write('maxWidth', value);
  }
  /**
   * 设置元素逻辑块轴的最小尺寸。
   *
   * @default:'0'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  minBlockSize(value: KeywordInput<'minBlockSize', T>): this;
  /**
   * 设置元素逻辑块轴的最小尺寸。
   *
   * @default:'0'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  minBlockSize<const Value>(value: PropertyInput<'minBlockSize', T, Value>): this;
  minBlockSize(value: PropertyValue<'minBlockSize', T>): this {
    return this.write('minBlockSize', value);
  }
  /**
   * 设置元素的最小物理高度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  minHeight(value: KeywordInput<'minHeight', T>): this;
  /**
   * 设置元素的最小物理高度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  minHeight<const Value>(value: PropertyInput<'minHeight', T, Value>): this;
  minHeight(value: PropertyValue<'minHeight', T>): this {
    return this.write('minHeight', value);
  }
  /**
   * 设置元素逻辑行内轴的最小尺寸。
   *
   * @default:'0'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  minInlineSize(value: KeywordInput<'minInlineSize', T>): this;
  /**
   * 设置元素逻辑行内轴的最小尺寸。
   *
   * @default:'0'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  minInlineSize<const Value>(value: PropertyInput<'minInlineSize', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  minWidth(value: KeywordInput<'minWidth', T>): this;
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
  minWidth<const Value>(value: PropertyInput<'minWidth', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  width(value: KeywordInput<'width', T>): this;
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
  width<const Value>(value: PropertyInput<'width', T, Value>): this;
  width(value: PropertyValue<'width', T>): this {
    return this.write('width', value);
  }
  /**
   * 设置布局中相邻列之间的间距。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  columnGap(value: KeywordInput<'columnGap', T>): this;
  /**
   * 设置布局中相邻列之间的间距。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  columnGap<const Value>(value: PropertyInput<'columnGap', T, Value>): this;
  columnGap(value: PropertyValue<'columnGap', T>): this {
    return this.write('columnGap', value);
  }
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
  gap(value: KeywordInput<'gap', T>): this;
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
  gap<const Value>(value: PropertyInput<'gap', T, Value>): this;
  gap(value: PropertyValue<'gap', T>): this {
    return this.write('gap', value);
  }
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
  margin(value: KeywordInput<'margin', T>): this;
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
  margin<const Value>(value: PropertyInput<'margin', T, Value>): this;
  margin(value: PropertyValue<'margin', T>): this {
    return this.write('margin', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的外边距。
   *
   * @default:'margin-block-start: 0；margin-block-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  marginBlock(value: KeywordInput<'marginBlock', T>): this;
  /**
   * 设置逻辑块轴起始侧和结束侧的外边距。
   *
   * @default:'margin-block-start: 0；margin-block-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  marginBlock<const Value>(value: PropertyInput<'marginBlock', T, Value>): this;
  marginBlock(value: PropertyValue<'marginBlock', T>): this {
    return this.write('marginBlock', value);
  }
  /**
   * 设置逻辑块轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  marginBlockEnd(value: KeywordInput<'marginBlockEnd', T>): this;
  /**
   * 设置逻辑块轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  marginBlockEnd<const Value>(value: PropertyInput<'marginBlockEnd', T, Value>): this;
  marginBlockEnd(value: PropertyValue<'marginBlockEnd', T>): this {
    return this.write('marginBlockEnd', value);
  }
  /**
   * 设置逻辑块轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  marginBlockStart(value: KeywordInput<'marginBlockStart', T>): this;
  /**
   * 设置逻辑块轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  marginBlockStart<const Value>(value: PropertyInput<'marginBlockStart', T, Value>): this;
  marginBlockStart(value: PropertyValue<'marginBlockStart', T>): this {
    return this.write('marginBlockStart', value);
  }
  /**
   * 设置下外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  marginBottom(value: KeywordInput<'marginBottom', T>): this;
  /**
   * 设置下外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  marginBottom<const Value>(value: PropertyInput<'marginBottom', T, Value>): this;
  marginBottom(value: PropertyValue<'marginBottom', T>): this {
    return this.write('marginBottom', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的外边距。
   *
   * @default:'margin-inline-start: 0；margin-inline-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  marginInline(value: KeywordInput<'marginInline', T>): this;
  /**
   * 设置逻辑行内轴起始侧和结束侧的外边距。
   *
   * @default:'margin-inline-start: 0；margin-inline-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  marginInline<const Value>(value: PropertyInput<'marginInline', T, Value>): this;
  marginInline(value: PropertyValue<'marginInline', T>): this {
    return this.write('marginInline', value);
  }
  /**
   * 设置逻辑行内轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  marginInlineEnd(value: KeywordInput<'marginInlineEnd', T>): this;
  /**
   * 设置逻辑行内轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  marginInlineEnd<const Value>(value: PropertyInput<'marginInlineEnd', T, Value>): this;
  marginInlineEnd(value: PropertyValue<'marginInlineEnd', T>): this {
    return this.write('marginInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  marginInlineStart(value: KeywordInput<'marginInlineStart', T>): this;
  /**
   * 设置逻辑行内轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  marginInlineStart<const Value>(value: PropertyInput<'marginInlineStart', T, Value>): this;
  marginInlineStart(value: PropertyValue<'marginInlineStart', T>): this {
    return this.write('marginInlineStart', value);
  }
  /**
   * 设置左外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  marginLeft(value: KeywordInput<'marginLeft', T>): this;
  /**
   * 设置左外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  marginLeft<const Value>(value: PropertyInput<'marginLeft', T, Value>): this;
  marginLeft(value: PropertyValue<'marginLeft', T>): this {
    return this.write('marginLeft', value);
  }
  /**
   * 设置右外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  marginRight(value: KeywordInput<'marginRight', T>): this;
  /**
   * 设置右外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  marginRight<const Value>(value: PropertyInput<'marginRight', T, Value>): this;
  marginRight(value: PropertyValue<'marginRight', T>): this {
    return this.write('marginRight', value);
  }
  /**
   * 设置上外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  marginTop(value: KeywordInput<'marginTop', T>): this;
  /**
   * 设置上外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  marginTop<const Value>(value: PropertyInput<'marginTop', T, Value>): this;
  marginTop(value: PropertyValue<'marginTop', T>): this {
    return this.write('marginTop', value);
  }
  /**
   * 控制容器边缘处子元素外边距的裁减。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  marginTrim(value: KeywordInput<'marginTrim', T>): this;
  /**
   * 控制容器边缘处子元素外边距的裁减。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  marginTrim<const Value>(value: PropertyInput<'marginTrim', T, Value>): this;
  marginTrim(value: PropertyValue<'marginTrim', T>): this {
    return this.write('marginTrim', value);
  }
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
  padding(value: KeywordInput<'padding', T>): this;
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
  padding<const Value>(value: PropertyInput<'padding', T, Value>): this;
  padding(value: PropertyValue<'padding', T>): this {
    return this.write('padding', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的内边距。
   *
   * @default:'padding-block-start: 0；padding-block-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  paddingBlock(value: KeywordInput<'paddingBlock', T>): this;
  /**
   * 设置逻辑块轴起始侧和结束侧的内边距。
   *
   * @default:'padding-block-start: 0；padding-block-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  paddingBlock<const Value>(value: PropertyInput<'paddingBlock', T, Value>): this;
  paddingBlock(value: PropertyValue<'paddingBlock', T>): this {
    return this.write('paddingBlock', value);
  }
  /**
   * 设置逻辑块轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  paddingBlockEnd(value: KeywordInput<'paddingBlockEnd', T>): this;
  /**
   * 设置逻辑块轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  paddingBlockEnd<const Value>(value: PropertyInput<'paddingBlockEnd', T, Value>): this;
  paddingBlockEnd(value: PropertyValue<'paddingBlockEnd', T>): this {
    return this.write('paddingBlockEnd', value);
  }
  /**
   * 设置逻辑块轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  paddingBlockStart(value: KeywordInput<'paddingBlockStart', T>): this;
  /**
   * 设置逻辑块轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  paddingBlockStart<const Value>(value: PropertyInput<'paddingBlockStart', T, Value>): this;
  paddingBlockStart(value: PropertyValue<'paddingBlockStart', T>): this {
    return this.write('paddingBlockStart', value);
  }
  /**
   * 设置下内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  paddingBottom(value: KeywordInput<'paddingBottom', T>): this;
  /**
   * 设置下内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  paddingBottom<const Value>(value: PropertyInput<'paddingBottom', T, Value>): this;
  paddingBottom(value: PropertyValue<'paddingBottom', T>): this {
    return this.write('paddingBottom', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的内边距。
   *
   * @default:'padding-inline-start: 0；padding-inline-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  paddingInline(value: KeywordInput<'paddingInline', T>): this;
  /**
   * 设置逻辑行内轴起始侧和结束侧的内边距。
   *
   * @default:'padding-inline-start: 0；padding-inline-end: 0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  paddingInline<const Value>(value: PropertyInput<'paddingInline', T, Value>): this;
  paddingInline(value: PropertyValue<'paddingInline', T>): this {
    return this.write('paddingInline', value);
  }
  /**
   * 设置逻辑行内轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  paddingInlineEnd(value: KeywordInput<'paddingInlineEnd', T>): this;
  /**
   * 设置逻辑行内轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  paddingInlineEnd<const Value>(value: PropertyInput<'paddingInlineEnd', T, Value>): this;
  paddingInlineEnd(value: PropertyValue<'paddingInlineEnd', T>): this {
    return this.write('paddingInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  paddingInlineStart(value: KeywordInput<'paddingInlineStart', T>): this;
  /**
   * 设置逻辑行内轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  paddingInlineStart<const Value>(value: PropertyInput<'paddingInlineStart', T, Value>): this;
  paddingInlineStart(value: PropertyValue<'paddingInlineStart', T>): this {
    return this.write('paddingInlineStart', value);
  }
  /**
   * 设置左内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  paddingLeft(value: KeywordInput<'paddingLeft', T>): this;
  /**
   * 设置左内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  paddingLeft<const Value>(value: PropertyInput<'paddingLeft', T, Value>): this;
  paddingLeft(value: PropertyValue<'paddingLeft', T>): this {
    return this.write('paddingLeft', value);
  }
  /**
   * 设置右内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  paddingRight(value: KeywordInput<'paddingRight', T>): this;
  /**
   * 设置右内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  paddingRight<const Value>(value: PropertyInput<'paddingRight', T, Value>): this;
  paddingRight(value: PropertyValue<'paddingRight', T>): this {
    return this.write('paddingRight', value);
  }
  /**
   * 设置上内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  paddingTop(value: KeywordInput<'paddingTop', T>): this;
  /**
   * 设置上内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  paddingTop<const Value>(value: PropertyInput<'paddingTop', T, Value>): this;
  paddingTop(value: PropertyValue<'paddingTop', T>): this {
    return this.write('paddingTop', value);
  }
  /**
   * 设置布局中相邻行之间的间距。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  rowGap(value: KeywordInput<'rowGap', T>): this;
  /**
   * 设置布局中相邻行之间的间距。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  rowGap<const Value>(value: PropertyInput<'rowGap', T, Value>): this;
  rowGap(value: PropertyValue<'rowGap', T>): this {
    return this.write('rowGap', value);
  }
  /**
   * 设置文本基本方向，参与双向文本及部分布局计算。
   *
   * @default:'ltr'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  direction(value: KeywordInput<'direction', T>): this;
  /**
   * 设置文本基本方向，参与双向文本及部分布局计算。
   *
   * @default:'ltr'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  direction<const Value>(value: PropertyInput<'direction', T, Value>): this;
  direction(value: PropertyValue<'direction', T>): this {
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
   * @default:'font-style: normal；font-variant: normal；font-weight: normal；font-stretch: normal；font-size: medium；line-height: normal；font-family: 由浏览器决定'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  font(value: KeywordInput<'font', T>): this;
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
  font<const Value>(value: PropertyInput<'font', T, Value>): this;
  font(value: PropertyValue<'font', T>): this {
    return this.write('font', value);
  }
  /**
   * 设置按优先级排列的字体族及通用字体回退。
   *
   * @default:'由浏览器决定'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  fontFamily(value: KeywordInput<'fontFamily', T>): this;
  /**
   * 设置按优先级排列的字体族及通用字体回退。
   *
   * @default:'由浏览器决定'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  fontFamily<const Value>(value: PropertyInput<'fontFamily', T, Value>): this;
  fontFamily(value: PropertyValue<'fontFamily', T>): this {
    return this.write('fontFamily', value);
  }
  /**
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  fontFeatureSettings(value: KeywordInput<'fontFeatureSettings', T>): this;
  /**
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  fontFeatureSettings<const Value>(value: PropertyInput<'fontFeatureSettings', T, Value>): this;
  fontFeatureSettings(value: PropertyValue<'fontFeatureSettings', T>): this {
    return this.write('fontFeatureSettings', value);
  }
  /**
   * 设置是否应用字体提供的字偶间距调整。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  fontKerning(value: KeywordInput<'fontKerning', T>): this;
  /**
   * 设置是否应用字体提供的字偶间距调整。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  fontKerning<const Value>(value: PropertyInput<'fontKerning', T, Value>): this;
  fontKerning(value: PropertyValue<'fontKerning', T>): this {
    return this.write('fontKerning', value);
  }
  /**
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  fontLanguageOverride(value: KeywordInput<'fontLanguageOverride', T>): this;
  /**
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  fontLanguageOverride<const Value>(value: PropertyInput<'fontLanguageOverride', T, Value>): this;
  fontLanguageOverride(value: PropertyValue<'fontLanguageOverride', T>): this {
    return this.write('fontLanguageOverride', value);
  }
  /**
   * 控制支持光学尺寸轴的字体是否按字号优化字形。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  fontOpticalSizing(value: KeywordInput<'fontOpticalSizing', T>): this;
  /**
   * 控制支持光学尺寸轴的字体是否按字号优化字形。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  fontOpticalSizing<const Value>(value: PropertyInput<'fontOpticalSizing', T, Value>): this;
  fontOpticalSizing(value: PropertyValue<'fontOpticalSizing', T>): this {
    return this.write('fontOpticalSizing', value);
  }
  /**
   * 选择或覆盖彩色字体使用的调色板。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  fontPalette(value: KeywordInput<'fontPalette', T>): this;
  /**
   * 选择或覆盖彩色字体使用的调色板。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  fontPalette<const Value>(value: PropertyInput<'fontPalette', T, Value>): this;
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
   * @default:'medium'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  fontSize(value: KeywordInput<'fontSize', T>): this;
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
  fontSize<const Value>(value: PropertyInput<'fontSize', T, Value>): this;
  fontSize(value: PropertyValue<'fontSize', T>): this {
    return this.write('fontSize', value);
  }
  /**
   * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  fontSizeAdjust(value: KeywordInput<'fontSizeAdjust', T>): this;
  /**
   * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  fontSizeAdjust<const Value>(value: PropertyInput<'fontSizeAdjust', T, Value>): this;
  fontSizeAdjust(value: PropertyValue<'fontSizeAdjust', T>): this {
    return this.write('fontSizeAdjust', value);
  }
  /**
   * 控制字体平滑的非标准属性；使用前核对目标浏览器。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  fontSmooth(value: KeywordInput<'fontSmooth', T>): this;
  /**
   * 控制字体平滑的非标准属性；使用前核对目标浏览器。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  fontSmooth<const Value>(value: PropertyInput<'fontSmooth', T, Value>): this;
  fontSmooth(value: PropertyValue<'fontSmooth', T>): this {
    return this.write('fontSmooth', value);
  }
  /**
   * 选择正常、斜体或倾斜字体样式。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  fontStyle(value: KeywordInput<'fontStyle', T>): this;
  /**
   * 选择正常、斜体或倾斜字体样式。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  fontStyle<const Value>(value: PropertyInput<'fontStyle', T, Value>): this;
  fontStyle(value: PropertyValue<'fontStyle', T>): this {
    return this.write('fontStyle', value);
  }
  /**
   * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。
   *
   * @default:'weight style small-caps position '
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  fontSynthesis(value: KeywordInput<'fontSynthesis', T>): this;
  /**
   * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。
   *
   * @default:'weight style small-caps position '
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  fontSynthesis<const Value>(value: PropertyInput<'fontSynthesis', T, Value>): this;
  fontSynthesis(value: PropertyValue<'fontSynthesis', T>): this {
    return this.write('fontSynthesis', value);
  }
  /**
   * 控制浏览器是否可以合成上标和下标字形。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  fontSynthesisPosition(value: KeywordInput<'fontSynthesisPosition', T>): this;
  /**
   * 控制浏览器是否可以合成上标和下标字形。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  fontSynthesisPosition<const Value>(value: PropertyInput<'fontSynthesisPosition', T, Value>): this;
  fontSynthesisPosition(value: PropertyValue<'fontSynthesisPosition', T>): this {
    return this.write('fontSynthesisPosition', value);
  }
  /**
   * 控制浏览器是否可以合成小型大写字形。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  fontSynthesisSmallCaps(value: KeywordInput<'fontSynthesisSmallCaps', T>): this;
  /**
   * 控制浏览器是否可以合成小型大写字形。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  fontSynthesisSmallCaps<const Value>(
    value: PropertyInput<'fontSynthesisSmallCaps', T, Value>,
  ): this;
  fontSynthesisSmallCaps(value: PropertyValue<'fontSynthesisSmallCaps', T>): this {
    return this.write('fontSynthesisSmallCaps', value);
  }
  /**
   * 控制浏览器是否可以合成倾斜字体。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  fontSynthesisStyle(value: KeywordInput<'fontSynthesisStyle', T>): this;
  /**
   * 控制浏览器是否可以合成倾斜字体。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  fontSynthesisStyle<const Value>(value: PropertyInput<'fontSynthesisStyle', T, Value>): this;
  fontSynthesisStyle(value: PropertyValue<'fontSynthesisStyle', T>): this {
    return this.write('fontSynthesisStyle', value);
  }
  /**
   * 控制浏览器是否可以合成加粗字体。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  fontSynthesisWeight(value: KeywordInput<'fontSynthesisWeight', T>): this;
  /**
   * 控制浏览器是否可以合成加粗字体。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  fontSynthesisWeight<const Value>(value: PropertyInput<'fontSynthesisWeight', T, Value>): this;
  fontSynthesisWeight(value: PropertyValue<'fontSynthesisWeight', T>): this {
    return this.write('fontSynthesisWeight', value);
  }
  /**
   * 集中设置字体的连字、大小写、数字及其他变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  fontVariant(value: KeywordInput<'fontVariant', T>): this;
  /**
   * 集中设置字体的连字、大小写、数字及其他变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  fontVariant<const Value>(value: PropertyInput<'fontVariant', T, Value>): this;
  fontVariant(value: PropertyValue<'fontVariant', T>): this {
    return this.write('fontVariant', value);
  }
  /**
   * 选择字体提供的替代字形。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  fontVariantAlternates(value: KeywordInput<'fontVariantAlternates', T>): this;
  /**
   * 选择字体提供的替代字形。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  fontVariantAlternates<const Value>(value: PropertyInput<'fontVariantAlternates', T, Value>): this;
  fontVariantAlternates(value: PropertyValue<'fontVariantAlternates', T>): this {
    return this.write('fontVariantAlternates', value);
  }
  /**
   * 设置小型大写等大小写字形变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  fontVariantCaps(value: KeywordInput<'fontVariantCaps', T>): this;
  /**
   * 设置小型大写等大小写字形变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  fontVariantCaps<const Value>(value: PropertyInput<'fontVariantCaps', T, Value>): this;
  fontVariantCaps(value: PropertyValue<'fontVariantCaps', T>): this {
    return this.write('fontVariantCaps', value);
  }
  /**
   * 设置东亚文字字形及宽度变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  fontVariantEastAsian(value: KeywordInput<'fontVariantEastAsian', T>): this;
  /**
   * 设置东亚文字字形及宽度变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  fontVariantEastAsian<const Value>(value: PropertyInput<'fontVariantEastAsian', T, Value>): this;
  fontVariantEastAsian(value: PropertyValue<'fontVariantEastAsian', T>): this {
    return this.write('fontVariantEastAsian', value);
  }
  /**
   * 设置字符优先采用文本字形还是 emoji 字形。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  fontVariantEmoji(value: KeywordInput<'fontVariantEmoji', T>): this;
  /**
   * 设置字符优先采用文本字形还是 emoji 字形。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  fontVariantEmoji<const Value>(value: PropertyInput<'fontVariantEmoji', T, Value>): this;
  fontVariantEmoji(value: PropertyValue<'fontVariantEmoji', T>): this {
    return this.write('fontVariantEmoji', value);
  }
  /**
   * 设置字体连字的启用方式。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  fontVariantLigatures(value: KeywordInput<'fontVariantLigatures', T>): this;
  /**
   * 设置字体连字的启用方式。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  fontVariantLigatures<const Value>(value: PropertyInput<'fontVariantLigatures', T, Value>): this;
  fontVariantLigatures(value: PropertyValue<'fontVariantLigatures', T>): this {
    return this.write('fontVariantLigatures', value);
  }
  /**
   * 设置数字的等宽、比例、分数及其他排版变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  fontVariantNumeric(value: KeywordInput<'fontVariantNumeric', T>): this;
  /**
   * 设置数字的等宽、比例、分数及其他排版变体。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  fontVariantNumeric<const Value>(value: PropertyInput<'fontVariantNumeric', T, Value>): this;
  fontVariantNumeric(value: PropertyValue<'fontVariantNumeric', T>): this {
    return this.write('fontVariantNumeric', value);
  }
  /**
   * 选择字体提供的上标或下标字形。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  fontVariantPosition(value: KeywordInput<'fontVariantPosition', T>): this;
  /**
   * 选择字体提供的上标或下标字形。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  fontVariantPosition<const Value>(value: PropertyInput<'fontVariantPosition', T, Value>): this;
  fontVariantPosition(value: PropertyValue<'fontVariantPosition', T>): this {
    return this.write('fontVariantPosition', value);
  }
  /**
   * 直接设置可变字体各个轴的数值。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  fontVariationSettings(value: KeywordInput<'fontVariationSettings', T>): this;
  /**
   * 直接设置可变字体各个轴的数值。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  fontVariationSettings<const Value>(value: PropertyInput<'fontVariationSettings', T, Value>): this;
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
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
   */
  fontWeight(value: KeywordInput<'fontWeight', T>): this;
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
  fontWeight<const Value>(value: PropertyInput<'fontWeight', T, Value>): this;
  fontWeight(value: PropertyValue<'fontWeight', T>): this {
    return this.write('fontWeight', value);
  }
  /**
   * 选择字体的宽窄字面，不是通过变换拉伸元素。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  fontWidth(value: KeywordInput<'fontWidth', T>): this;
  /**
   * 选择字体的宽窄字面，不是通过变换拉伸元素。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  fontWidth<const Value>(value: PropertyInput<'fontWidth', T, Value>): this;
  fontWidth(value: PropertyValue<'fontWidth', T>): this {
    return this.write('fontWidth', value);
  }
  /**
   * 控制标点是否可以悬挂在行盒边缘之外。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  hangingPunctuation(value: KeywordInput<'hangingPunctuation', T>): this;
  /**
   * 控制标点是否可以悬挂在行盒边缘之外。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  hangingPunctuation<const Value>(value: PropertyInput<'hangingPunctuation', T, Value>): this;
  hangingPunctuation(value: PropertyValue<'hangingPunctuation', T>): this {
    return this.write('hangingPunctuation', value);
  }
  /**
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  hyphens(value: KeywordInput<'hyphens', T>): this;
  /**
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  hyphens<const Value>(value: PropertyInput<'hyphens', T, Value>): this;
  hyphens(value: PropertyValue<'hyphens', T>): this {
    return this.write('hyphens', value);
  }
  /**
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  initialLetter(value: KeywordInput<'initialLetter', T>): this;
  /**
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  initialLetter<const Value>(value: PropertyInput<'initialLetter', T, Value>): this;
  initialLetter(value: PropertyValue<'initialLetter', T>): this {
    return this.write('initialLetter', value);
  }
  /**
   * 设置首字下沉时字形与正文使用的对齐基线。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  initialLetterAlign(value: KeywordInput<'initialLetterAlign', T>): this;
  /**
   * 设置首字下沉时字形与正文使用的对齐基线。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  initialLetterAlign<const Value>(value: PropertyInput<'initialLetterAlign', T, Value>): this;
  initialLetterAlign(value: PropertyValue<'initialLetterAlign', T>): this {
    return this.write('initialLetterAlign', value);
  }
  /**
   * 设置字符之间额外增加或减少的间距。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  letterSpacing(value: KeywordInput<'letterSpacing', T>): this;
  /**
   * 设置字符之间额外增加或减少的间距。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  letterSpacing<const Value>(value: PropertyInput<'letterSpacing', T, Value>): this;
  letterSpacing(value: PropertyValue<'letterSpacing', T>): this {
    return this.write('letterSpacing', value);
  }
  /**
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  lineBreak(value: KeywordInput<'lineBreak', T>): this;
  /**
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  lineBreak<const Value>(value: PropertyInput<'lineBreak', T, Value>): this;
  lineBreak(value: PropertyValue<'lineBreak', T>): this {
    return this.write('lineBreak', value);
  }
  /**
   * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。
   *
   * @default:'none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  lineClamp(value: KeywordInput<'lineClamp', T>): this;
  /**
   * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。
   *
   * @default:'none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  lineClamp<const Value>(value: PropertyInput<'lineClamp', T, Value>): this;
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
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
   */
  lineHeight(value: KeywordInput<'lineHeight', T>): this;
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
  lineHeight<const Value>(value: PropertyInput<'lineHeight', T, Value>): this;
  lineHeight(value: PropertyValue<'lineHeight', T>): this {
    return this.write('lineHeight', value);
  }
  /**
   * 设置行盒高度向上取整使用的步长。
   *
   * @default:'0'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  lineHeightStep(value: KeywordInput<'lineHeightStep', T>): this;
  /**
   * 设置行盒高度向上取整使用的步长。
   *
   * @default:'0'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  lineHeightStep<const Value>(value: PropertyInput<'lineHeightStep', T, Value>): this;
  lineHeightStep(value: PropertyValue<'lineHeightStep', T>): this {
    return this.write('lineHeightStep', value);
  }
  /**
   * 设置生成引号所用的开闭字符对。
   *
   * @default:'由浏览器决定'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  quotes(value: KeywordInput<'quotes', T>): this;
  /**
   * 设置生成引号所用的开闭字符对。
   *
   * @default:'由浏览器决定'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  quotes<const Value>(value: PropertyInput<'quotes', T, Value>): this;
  quotes(value: PropertyValue<'quotes', T>): this {
    return this.write('quotes', value);
  }
  /**
   * 设置注音文字与基底文字之间剩余空间的分配方式。
   *
   * @default:'space-around'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  rubyAlign(value: KeywordInput<'rubyAlign', T>): this;
  /**
   * 设置注音文字与基底文字之间剩余空间的分配方式。
   *
   * @default:'space-around'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  rubyAlign<const Value>(value: PropertyInput<'rubyAlign', T, Value>): this;
  rubyAlign(value: PropertyValue<'rubyAlign', T>): this {
    return this.write('rubyAlign', value);
  }
  /**
   * 设置相邻注音容器的合并方式；使用前核对目标浏览器。
   *
   * @default:'separate'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  rubyMerge(value: KeywordInput<'rubyMerge', T>): this;
  /**
   * 设置相邻注音容器的合并方式；使用前核对目标浏览器。
   *
   * @default:'separate'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  rubyMerge<const Value>(value: PropertyInput<'rubyMerge', T, Value>): this;
  rubyMerge(value: PropertyValue<'rubyMerge', T>): this {
    return this.write('rubyMerge', value);
  }
  /**
   * 控制注音文字是否可以悬伸到相邻文本上方。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  rubyOverhang(value: KeywordInput<'rubyOverhang', T>): this;
  /**
   * 控制注音文字是否可以悬伸到相邻文本上方。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  rubyOverhang<const Value>(value: PropertyInput<'rubyOverhang', T, Value>): this;
  rubyOverhang(value: PropertyValue<'rubyOverhang', T>): this {
    return this.write('rubyOverhang', value);
  }
  /**
   * 设置注音文字相对于基底文字的位置。
   *
   * @default:'alternate'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  rubyPosition(value: KeywordInput<'rubyPosition', T>): this;
  /**
   * 设置注音文字相对于基底文字的位置。
   *
   * @default:'alternate'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  rubyPosition<const Value>(value: PropertyInput<'rubyPosition', T, Value>): this;
  rubyPosition(value: PropertyValue<'rubyPosition', T>): this {
    return this.write('rubyPosition', value);
  }
  /**
   * 设置保留制表符时每个制表位的宽度。
   *
   * @default:'8'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  tabSize(value: KeywordInput<'tabSize', T>): this;
  /**
   * 设置保留制表符时每个制表位的宽度。
   *
   * @default:'8'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  tabSize<const Value>(value: PropertyInput<'tabSize', T, Value>): this;
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
   * @default:'随书写方向采用起始侧对齐'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  textAlign(value: KeywordInput<'textAlign', T>): this;
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
  textAlign<const Value>(value: PropertyInput<'textAlign', T, Value>): this;
  textAlign(value: PropertyValue<'textAlign', T>): this {
    return this.write('textAlign', value);
  }
  /**
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  textAlignLast(value: KeywordInput<'textAlignLast', T>): this;
  /**
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  textAlignLast<const Value>(value: PropertyInput<'textAlignLast', T, Value>): this;
  textAlignLast(value: PropertyValue<'textAlignLast', T>): this {
    return this.write('textAlignLast', value);
  }
  /**
   * 设置 SVG 文本片段相对于定位点的锚定方式。
   *
   * @default:'start'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  textAnchor(value: KeywordInput<'textAnchor', T>): this;
  /**
   * 设置 SVG 文本片段相对于定位点的锚定方式。
   *
   * @default:'start'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  textAnchor<const Value>(value: PropertyInput<'textAnchor', T, Value>): this;
  textAnchor(value: PropertyValue<'textAnchor', T>): this {
    return this.write('textAnchor', value);
  }
  /**
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  textAutospace(value: KeywordInput<'textAutospace', T>): this;
  /**
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  textAutospace<const Value>(value: PropertyInput<'textAutospace', T, Value>): this;
  textAutospace(value: PropertyValue<'textAutospace', T>): this {
    return this.write('textAutospace', value);
  }
  /**
   * 同时设置文本盒边缘参照及首尾空白裁减。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  textBox(value: KeywordInput<'textBox', T>): this;
  /**
   * 同时设置文本盒边缘参照及首尾空白裁减。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  textBox<const Value>(value: PropertyInput<'textBox', T, Value>): this;
  textBox(value: PropertyValue<'textBox', T>): this {
    return this.write('textBox', value);
  }
  /**
   * 选择文本盒裁减或对齐使用的字体边缘度量。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  textBoxEdge(value: KeywordInput<'textBoxEdge', T>): this;
  /**
   * 选择文本盒裁减或对齐使用的字体边缘度量。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  textBoxEdge<const Value>(value: PropertyInput<'textBoxEdge', T, Value>): this;
  textBoxEdge(value: PropertyValue<'textBoxEdge', T>): this {
    return this.write('textBoxEdge', value);
  }
  /**
   * 裁减文本块开头或结尾的额外行高空白。
   *
   * @default:'none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  textBoxTrim(value: KeywordInput<'textBoxTrim', T>): this;
  /**
   * 裁减文本块开头或结尾的额外行高空白。
   *
   * @default:'none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  textBoxTrim<const Value>(value: PropertyInput<'textBoxTrim', T, Value>): this;
  textBoxTrim(value: PropertyValue<'textBoxTrim', T>): this {
    return this.write('textBoxTrim', value);
  }
  /**
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  textCombineUpright(value: KeywordInput<'textCombineUpright', T>): this;
  /**
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  textCombineUpright<const Value>(value: PropertyInput<'textCombineUpright', T, Value>): this;
  textCombineUpright(value: PropertyValue<'textCombineUpright', T>): this {
    return this.write('textCombineUpright', value);
  }
  /**
   * 集中设置文本装饰线的位置、线型、颜色及粗细。
   *
   * @default:'text-decoration-color: currentcolor；text-decoration-style: solid；text-decoration-line: none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  textDecoration(value: KeywordInput<'textDecoration', T>): this;
  /**
   * 集中设置文本装饰线的位置、线型、颜色及粗细。
   *
   * @default:'text-decoration-color: currentcolor；text-decoration-style: solid；text-decoration-line: none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  textDecoration<const Value>(value: PropertyInput<'textDecoration', T, Value>): this;
  textDecoration(value: PropertyValue<'textDecoration', T>): this {
    return this.write('textDecoration', value);
  }
  /**
   * 设置文本装饰线颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  textDecorationColor(value: KeywordInput<'textDecorationColor', T>): this;
  /**
   * 设置文本装饰线颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  textDecorationColor<const Value>(value: PropertyInput<'textDecorationColor', T, Value>): this;
  textDecorationColor(value: PropertyValue<'textDecorationColor', T>): this {
    return this.write('textDecorationColor', value);
  }
  /**
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  textDecorationLine(value: KeywordInput<'textDecorationLine', T>): this;
  /**
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  textDecorationLine<const Value>(value: PropertyInput<'textDecorationLine', T, Value>): this;
  textDecorationLine(value: PropertyValue<'textDecorationLine', T>): this {
    return this.write('textDecorationLine', value);
  }
  /**
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * @default:'objects'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  textDecorationSkip(value: KeywordInput<'textDecorationSkip', T>): this;
  /**
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * @default:'objects'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  textDecorationSkip<const Value>(value: PropertyInput<'textDecorationSkip', T, Value>): this;
  textDecorationSkip(value: PropertyValue<'textDecorationSkip', T>): this {
    return this.write('textDecorationSkip', value);
  }
  /**
   * 设置装饰线是否避让字形的笔画。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  textDecorationSkipInk(value: KeywordInput<'textDecorationSkipInk', T>): this;
  /**
   * 设置装饰线是否避让字形的笔画。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  textDecorationSkipInk<const Value>(value: PropertyInput<'textDecorationSkipInk', T, Value>): this;
  textDecorationSkipInk(value: PropertyValue<'textDecorationSkipInk', T>): this {
    return this.write('textDecorationSkipInk', value);
  }
  /**
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * @default:'solid'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  textDecorationStyle(value: KeywordInput<'textDecorationStyle', T>): this;
  /**
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * @default:'solid'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  textDecorationStyle<const Value>(value: PropertyInput<'textDecorationStyle', T, Value>): this;
  textDecorationStyle(value: PropertyValue<'textDecorationStyle', T>): this {
    return this.write('textDecorationStyle', value);
  }
  /**
   * 设置文本装饰线粗细。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  textDecorationThickness(value: KeywordInput<'textDecorationThickness', T>): this;
  /**
   * 设置文本装饰线粗细。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  textDecorationThickness<const Value>(
    value: PropertyInput<'textDecorationThickness', T, Value>,
  ): this;
  textDecorationThickness(value: PropertyValue<'textDecorationThickness', T>): this {
    return this.write('textDecorationThickness', value);
  }
  /**
   * 同时设置文字着重号的样式和颜色。
   *
   * @default:'text-emphasis-style: none；text-emphasis-color: currentcolor'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  textEmphasis(value: KeywordInput<'textEmphasis', T>): this;
  /**
   * 同时设置文字着重号的样式和颜色。
   *
   * @default:'text-emphasis-style: none；text-emphasis-color: currentcolor'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  textEmphasis<const Value>(value: PropertyInput<'textEmphasis', T, Value>): this;
  textEmphasis(value: PropertyValue<'textEmphasis', T>): this {
    return this.write('textEmphasis', value);
  }
  /**
   * 设置文字着重号颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  textEmphasisColor(value: KeywordInput<'textEmphasisColor', T>): this;
  /**
   * 设置文字着重号颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  textEmphasisColor<const Value>(value: PropertyInput<'textEmphasisColor', T, Value>): this;
  textEmphasisColor(value: PropertyValue<'textEmphasisColor', T>): this {
    return this.write('textEmphasisColor', value);
  }
  /**
   * 设置文字着重号位于文字的哪一侧。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  textEmphasisPosition(value: KeywordInput<'textEmphasisPosition', T>): this;
  /**
   * 设置文字着重号位于文字的哪一侧。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  textEmphasisPosition<const Value>(value: PropertyInput<'textEmphasisPosition', T, Value>): this;
  textEmphasisPosition(value: PropertyValue<'textEmphasisPosition', T>): this {
    return this.write('textEmphasisPosition', value);
  }
  /**
   * 设置文字着重号的形状和填充方式。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  textEmphasisStyle(value: KeywordInput<'textEmphasisStyle', T>): this;
  /**
   * 设置文字着重号的形状和填充方式。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  textEmphasisStyle<const Value>(value: PropertyInput<'textEmphasisStyle', T, Value>): this;
  textEmphasisStyle(value: PropertyValue<'textEmphasisStyle', T>): this {
    return this.write('textEmphasisStyle', value);
  }
  /**
   * 设置文本行的缩进距离。
   *
   * @default:'0'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  textIndent(value: KeywordInput<'textIndent', T>): this;
  /**
   * 设置文本行的缩进距离。
   *
   * @default:'0'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  textIndent<const Value>(value: PropertyInput<'textIndent', T, Value>): this;
  textIndent(value: PropertyValue<'textIndent', T>): this {
    return this.write('textIndent', value);
  }
  /**
   * 设置两端对齐时增加间距的算法。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  textJustify(value: KeywordInput<'textJustify', T>): this;
  /**
   * 设置两端对齐时增加间距的算法。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  textJustify<const Value>(value: PropertyInput<'textJustify', T, Value>): this;
  textJustify(value: PropertyValue<'textJustify', T>): this {
    return this.write('textJustify', value);
  }
  /**
   * 设置竖排模式下字符的方向。
   *
   * @default:'mixed'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  textOrientation(value: KeywordInput<'textOrientation', T>): this;
  /**
   * 设置竖排模式下字符的方向。
   *
   * @default:'mixed'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  textOrientation<const Value>(value: PropertyInput<'textOrientation', T, Value>): this;
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
   * @default:'clip'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
   */
  textOverflow(value: KeywordInput<'textOverflow', T>): this;
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
  textOverflow<const Value>(value: PropertyInput<'textOverflow', T, Value>): this;
  textOverflow(value: PropertyValue<'textOverflow', T>): this {
    return this.write('textOverflow', value);
  }
  /**
   * 向渲染器提供文本速度、可读性或几何精度的偏好。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  textRendering(value: KeywordInput<'textRendering', T>): this;
  /**
   * 向渲染器提供文本速度、可读性或几何精度的偏好。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  textRendering<const Value>(value: PropertyInput<'textRendering', T, Value>): this;
  textRendering(value: PropertyValue<'textRendering', T>): this {
    return this.write('textRendering', value);
  }
  /**
   * 设置文字及其装饰的阴影，可叠加多层。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  textShadow(value: KeywordInput<'textShadow', T>): this;
  /**
   * 设置文字及其装饰的阴影，可叠加多层。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  textShadow<const Value>(value: PropertyInput<'textShadow', T, Value>): this;
  textShadow(value: PropertyValue<'textShadow', T>): this {
    return this.write('textShadow', value);
  }
  /**
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * @default:'支持文本放大的移动浏览器为 auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  textSizeAdjust(value: KeywordInput<'textSizeAdjust', T>): this;
  /**
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * @default:'支持文本放大的移动浏览器为 auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  textSizeAdjust<const Value>(value: PropertyInput<'textSizeAdjust', T, Value>): this;
  textSizeAdjust(value: PropertyValue<'textSizeAdjust', T>): this {
    return this.write('textSizeAdjust', value);
  }
  /**
   * 设置东亚文字标点等字符周围空白的裁减。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  textSpacingTrim(value: KeywordInput<'textSpacingTrim', T>): this;
  /**
   * 设置东亚文字标点等字符周围空白的裁减。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  textSpacingTrim<const Value>(value: PropertyInput<'textSpacingTrim', T, Value>): this;
  textSpacingTrim(value: PropertyValue<'textSpacingTrim', T>): this {
    return this.write('textSpacingTrim', value);
  }
  /**
   * 设置文字显示时的大小写、全角或其他字形转换。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  textTransform(value: KeywordInput<'textTransform', T>): this;
  /**
   * 设置文字显示时的大小写、全角或其他字形转换。
   *
   * @default:'none'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  textTransform<const Value>(value: PropertyInput<'textTransform', T, Value>): this;
  textTransform(value: PropertyValue<'textTransform', T>): this {
    return this.write('textTransform', value);
  }
  /**
   * 设置下划线相对于默认位置的偏移。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  textUnderlineOffset(value: KeywordInput<'textUnderlineOffset', T>): this;
  /**
   * 设置下划线相对于默认位置的偏移。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  textUnderlineOffset<const Value>(value: PropertyInput<'textUnderlineOffset', T, Value>): this;
  textUnderlineOffset(value: PropertyValue<'textUnderlineOffset', T>): this {
    return this.write('textUnderlineOffset', value);
  }
  /**
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  textUnderlinePosition(value: KeywordInput<'textUnderlinePosition', T>): this;
  /**
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  textUnderlinePosition<const Value>(value: PropertyInput<'textUnderlinePosition', T, Value>): this;
  textUnderlinePosition(value: PropertyValue<'textUnderlinePosition', T>): this {
    return this.write('textUnderlinePosition', value);
  }
  /**
   * 同时设置文本是否换行及换行策略。
   *
   * @default:'wrap'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  textWrap(value: KeywordInput<'textWrap', T>): this;
  /**
   * 同时设置文本是否换行及换行策略。
   *
   * @default:'wrap'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  textWrap<const Value>(value: PropertyInput<'textWrap', T, Value>): this;
  textWrap(value: PropertyValue<'textWrap', T>): this {
    return this.write('textWrap', value);
  }
  /**
   * 设置文本是否允许软换行。
   *
   * @default:'wrap'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  textWrapMode(value: KeywordInput<'textWrapMode', T>): this;
  /**
   * 设置文本是否允许软换行。
   *
   * @default:'wrap'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  textWrapMode<const Value>(value: PropertyInput<'textWrapMode', T, Value>): this;
  textWrapMode(value: PropertyValue<'textWrapMode', T>): this {
    return this.write('textWrapMode', value);
  }
  /**
   * 设置文本换行的排版策略，例如平衡各行长度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  textWrapStyle(value: KeywordInput<'textWrapStyle', T>): this;
  /**
   * 设置文本换行的排版策略，例如平衡各行长度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  textWrapStyle<const Value>(value: PropertyInput<'textWrapStyle', T, Value>): this;
  textWrapStyle(value: PropertyValue<'textWrapStyle', T>): this {
    return this.write('textWrapStyle', value);
  }
  /**
   * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  unicodeBidi(value: KeywordInput<'unicodeBidi', T>): this;
  /**
   * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  unicodeBidi<const Value>(value: PropertyInput<'unicodeBidi', T, Value>): this;
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
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  whiteSpace(value: KeywordInput<'whiteSpace', T>): this;
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
  whiteSpace<const Value>(value: PropertyInput<'whiteSpace', T, Value>): this;
  whiteSpace(value: PropertyValue<'whiteSpace', T>): this {
    return this.write('whiteSpace', value);
  }
  /**
   * 设置空格、制表符和换行符如何折叠或保留。
   *
   * @default:'collapse'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  whiteSpaceCollapse(value: KeywordInput<'whiteSpaceCollapse', T>): this;
  /**
   * 设置空格、制表符和换行符如何折叠或保留。
   *
   * @default:'collapse'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  whiteSpaceCollapse<const Value>(value: PropertyInput<'whiteSpaceCollapse', T, Value>): this;
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
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  wordBreak(value: KeywordInput<'wordBreak', T>): this;
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
  wordBreak<const Value>(value: PropertyInput<'wordBreak', T, Value>): this;
  wordBreak(value: PropertyValue<'wordBreak', T>): this {
    return this.write('wordBreak', value);
  }
  /**
   * 设置单词或词间分隔符的额外间距。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  wordSpacing(value: KeywordInput<'wordSpacing', T>): this;
  /**
   * 设置单词或词间分隔符的额外间距。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  wordSpacing<const Value>(value: PropertyInput<'wordSpacing', T, Value>): this;
  wordSpacing(value: PropertyValue<'wordSpacing', T>): this {
    return this.write('wordSpacing', value);
  }
  /**
   * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  wordWrap(value: KeywordInput<'wordWrap', T>): this;
  /**
   * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  wordWrap<const Value>(value: PropertyInput<'wordWrap', T, Value>): this;
  wordWrap(value: PropertyValue<'wordWrap', T>): this {
    return this.write('wordWrap', value);
  }
  /**
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * @default:'horizontal-tb'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  writingMode(value: KeywordInput<'writingMode', T>): this;
  /**
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * @default:'horizontal-tb'
   * @extend:'是'
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  writingMode<const Value>(value: PropertyInput<'writingMode', T, Value>): this;
  writingMode(value: PropertyValue<'writingMode', T>): this {
    return this.write('writingMode', value);
  }
  /**
   * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  accentColor(value: KeywordInput<'accentColor', T>): this;
  /**
   * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  accentColor<const Value>(value: PropertyInput<'accentColor', T, Value>): this;
  accentColor(value: PropertyValue<'accentColor', T>): this {
    return this.write('accentColor', value);
  }
  /**
   * 集中设置背景颜色、图像、位置、尺寸、重复及绘制区域。
   *
   * @default:'background-image: none；background-position: 0% 0%；background-size: auto auto；background-repeat: repeat；background-origin: padding-box；background-clip: border-box；background-attachment: scroll；background-color: transparent'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  background(value: KeywordInput<'background', T>): this;
  /**
   * 集中设置背景颜色、图像、位置、尺寸、重复及绘制区域。
   *
   * @default:'background-image: none；background-position: 0% 0%；background-size: auto auto；background-repeat: repeat；background-origin: padding-box；background-clip: border-box；background-attachment: scroll；background-color: transparent'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  background<const Value>(value: PropertyInput<'background', T, Value>): this;
  background(value: PropertyValue<'background', T>): this {
    return this.write('background', value);
  }
  /**
   * 设置背景图像相对于视口、元素或局部滚动内容的固定方式。
   *
   * @default:'scroll'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  backgroundAttachment(value: KeywordInput<'backgroundAttachment', T>): this;
  /**
   * 设置背景图像相对于视口、元素或局部滚动内容的固定方式。
   *
   * @default:'scroll'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  backgroundAttachment<const Value>(value: PropertyInput<'backgroundAttachment', T, Value>): this;
  backgroundAttachment(value: PropertyValue<'backgroundAttachment', T>): this {
    return this.write('backgroundAttachment', value);
  }
  /**
   * 设置背景图层彼此之间以及与背景色之间的混合模式。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  backgroundBlendMode(value: KeywordInput<'backgroundBlendMode', T>): this;
  /**
   * 设置背景图层彼此之间以及与背景色之间的混合模式。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  backgroundBlendMode<const Value>(value: PropertyInput<'backgroundBlendMode', T, Value>): this;
  backgroundBlendMode(value: PropertyValue<'backgroundBlendMode', T>): this {
    return this.write('backgroundBlendMode', value);
  }
  /**
   * 设置背景允许绘制到的边界区域。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  backgroundClip(value: KeywordInput<'backgroundClip', T>): this;
  /**
   * 设置背景允许绘制到的边界区域。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  backgroundClip<const Value>(value: PropertyInput<'backgroundClip', T, Value>): this;
  backgroundClip(value: PropertyValue<'backgroundClip', T>): this {
    return this.write('backgroundClip', value);
  }
  /**
   * 设置元素背景颜色，位于背景图像下方。
   *
   * @default:'transparent'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  backgroundColor(value: KeywordInput<'backgroundColor', T>): this;
  /**
   * 设置元素背景颜色，位于背景图像下方。
   *
   * @default:'transparent'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  backgroundColor<const Value>(value: PropertyInput<'backgroundColor', T, Value>): this;
  backgroundColor(value: PropertyValue<'backgroundColor', T>): this {
    return this.write('backgroundColor', value);
  }
  /**
   * 设置一个或多个背景图像或渐变图层。
   *
   * @default:'none'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  backgroundImage(value: KeywordInput<'backgroundImage', T>): this;
  /**
   * 设置一个或多个背景图像或渐变图层。
   *
   * @default:'none'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  backgroundImage<const Value>(value: PropertyInput<'backgroundImage', T, Value>): this;
  backgroundImage(value: PropertyValue<'backgroundImage', T>): this {
    return this.write('backgroundImage', value);
  }
  /**
   * 设置背景图像定位所依据的盒子区域。
   *
   * @default:'padding-box'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  backgroundOrigin(value: KeywordInput<'backgroundOrigin', T>): this;
  /**
   * 设置背景图像定位所依据的盒子区域。
   *
   * @default:'padding-box'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  backgroundOrigin<const Value>(value: PropertyInput<'backgroundOrigin', T, Value>): this;
  backgroundOrigin(value: PropertyValue<'backgroundOrigin', T>): this {
    return this.write('backgroundOrigin', value);
  }
  /**
   * 设置背景图像在定位区域内的位置。
   *
   * @default:'0% 0%'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  backgroundPosition(value: KeywordInput<'backgroundPosition', T>): this;
  /**
   * 设置背景图像在定位区域内的位置。
   *
   * @default:'0% 0%'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  backgroundPosition<const Value>(value: PropertyInput<'backgroundPosition', T, Value>): this;
  backgroundPosition(value: PropertyValue<'backgroundPosition', T>): this {
    return this.write('backgroundPosition', value);
  }
  /**
   * 设置背景图像的水平位置。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  backgroundPositionX(value: KeywordInput<'backgroundPositionX', T>): this;
  /**
   * 设置背景图像的水平位置。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  backgroundPositionX<const Value>(value: PropertyInput<'backgroundPositionX', T, Value>): this;
  backgroundPositionX(value: PropertyValue<'backgroundPositionX', T>): this {
    return this.write('backgroundPositionX', value);
  }
  /**
   * 设置背景图像的垂直位置。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  backgroundPositionY(value: KeywordInput<'backgroundPositionY', T>): this;
  /**
   * 设置背景图像的垂直位置。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  backgroundPositionY<const Value>(value: PropertyInput<'backgroundPositionY', T, Value>): this;
  backgroundPositionY(value: PropertyValue<'backgroundPositionY', T>): this {
    return this.write('backgroundPositionY', value);
  }
  /**
   * 设置背景图像在水平和垂直方向上的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  backgroundRepeat(value: KeywordInput<'backgroundRepeat', T>): this;
  /**
   * 设置背景图像在水平和垂直方向上的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  backgroundRepeat<const Value>(value: PropertyInput<'backgroundRepeat', T, Value>): this;
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
   * @default:'auto auto'
   * @extend:'否'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
   */
  backgroundSize(value: KeywordInput<'backgroundSize', T>): this;
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
  backgroundSize<const Value>(value: PropertyInput<'backgroundSize', T, Value>): this;
  backgroundSize(value: PropertyValue<'backgroundSize', T>): this {
    return this.write('backgroundSize', value);
  }
  /**
   * 设置可编辑内容中的文本插入光标颜色。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  caretColor(value: KeywordInput<'caretColor', T>): this;
  /**
   * 设置可编辑内容中的文本插入光标颜色。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  caretColor<const Value>(value: PropertyInput<'caretColor', T, Value>): this;
  caretColor(value: PropertyValue<'caretColor', T>): this {
    return this.write('caretColor', value);
  }
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
  color(value: KeywordInput<'color', T>): this;
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
  color<const Value>(value: PropertyInput<'color', T, Value>): this;
  color(value: PropertyValue<'color', T>): this {
    return this.write('color', value);
  }
  /**
   * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。
   *
   * @default:'economy'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  colorAdjust(value: KeywordInput<'colorAdjust', T>): this;
  /**
   * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。
   *
   * @default:'economy'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  colorAdjust<const Value>(value: PropertyInput<'colorAdjust', T, Value>): this;
  colorAdjust(value: PropertyValue<'colorAdjust', T>): this {
    return this.write('colorAdjust', value);
  }
  /**
   * 设置 SVG 图形颜色插值所用的色彩空间。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  colorInterpolation(value: KeywordInput<'colorInterpolation', T>): this;
  /**
   * 设置 SVG 图形颜色插值所用的色彩空间。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  colorInterpolation<const Value>(value: PropertyInput<'colorInterpolation', T, Value>): this;
  colorInterpolation(value: PropertyValue<'colorInterpolation', T>): this {
    return this.write('colorInterpolation', value);
  }
  /**
   * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。
   *
   * @default:'linearRGB'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  colorInterpolationFilters(value: KeywordInput<'colorInterpolationFilters', T>): this;
  /**
   * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。
   *
   * @default:'linearRGB'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  colorInterpolationFilters<const Value>(
    value: PropertyInput<'colorInterpolationFilters', T, Value>,
  ): this;
  colorInterpolationFilters(value: PropertyValue<'colorInterpolationFilters', T>): this {
    return this.write('colorInterpolationFilters', value);
  }
  /**
   * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  colorRendering(value: KeywordInput<'colorRendering', T>): this;
  /**
   * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  colorRendering<const Value>(value: PropertyInput<'colorRendering', T, Value>): this;
  colorRendering(value: PropertyValue<'colorRendering', T>): this {
    return this.write('colorRendering', value);
  }
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
  colorScheme(value: KeywordInput<'colorScheme', T>): this;
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
  colorScheme<const Value>(value: PropertyInput<'colorScheme', T, Value>): this;
  colorScheme(value: PropertyValue<'colorScheme', T>): this {
    return this.write('colorScheme', value);
  }
  /**
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * @default:'economy'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  printColorAdjust(value: KeywordInput<'printColorAdjust', T>): this;
  /**
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * @default:'economy'
   * @extend:'是'
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  printColorAdjust<const Value>(value: PropertyInput<'printColorAdjust', T, Value>): this;
  printColorAdjust(value: PropertyValue<'printColorAdjust', T>): this {
    return this.write('printColorAdjust', value);
  }
  /**
   * 同时设置四边边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；border-color: 见其子属性'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  border(value: KeywordInput<'border', T>): this;
  /**
   * 同时设置四边边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；border-color: 见其子属性'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  border<const Value>(value: PropertyInput<'border', T, Value>): this;
  border(value: PropertyValue<'border', T>): this {
    return this.write('border', value);
  }
  /**
   * 设置逻辑块轴起始侧和结束侧的边框。
   *
   * @default:'border-block-width: medium；border-block-style: none；border-block-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  borderBlock(value: KeywordInput<'borderBlock', T>): this;
  /**
   * 设置逻辑块轴起始侧和结束侧的边框。
   *
   * @default:'border-block-width: medium；border-block-style: none；border-block-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  borderBlock<const Value>(value: PropertyInput<'borderBlock', T, Value>): this;
  borderBlock(value: PropertyValue<'borderBlock', T>): this {
    return this.write('borderBlock', value);
  }
  /**
   * 设置逻辑块轴两侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  borderBlockColor(value: KeywordInput<'borderBlockColor', T>): this;
  /**
   * 设置逻辑块轴两侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  borderBlockColor<const Value>(value: PropertyInput<'borderBlockColor', T, Value>): this;
  borderBlockColor(value: PropertyValue<'borderBlockColor', T>): this {
    return this.write('borderBlockColor', value);
  }
  /**
   * 设置逻辑块轴结束侧边框的宽度、线型和颜色。
   *
   * @default:'border-top-width: medium；border-top-style: none；border-top-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  borderBlockEnd(value: KeywordInput<'borderBlockEnd', T>): this;
  /**
   * 设置逻辑块轴结束侧边框的宽度、线型和颜色。
   *
   * @default:'border-top-width: medium；border-top-style: none；border-top-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  borderBlockEnd<const Value>(value: PropertyInput<'borderBlockEnd', T, Value>): this;
  borderBlockEnd(value: PropertyValue<'borderBlockEnd', T>): this {
    return this.write('borderBlockEnd', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  borderBlockEndColor(value: KeywordInput<'borderBlockEndColor', T>): this;
  /**
   * 设置逻辑块轴结束侧的边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  borderBlockEndColor<const Value>(value: PropertyInput<'borderBlockEndColor', T, Value>): this;
  borderBlockEndColor(value: PropertyValue<'borderBlockEndColor', T>): this {
    return this.write('borderBlockEndColor', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  borderBlockEndStyle(value: KeywordInput<'borderBlockEndStyle', T>): this;
  /**
   * 设置逻辑块轴结束侧的边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  borderBlockEndStyle<const Value>(value: PropertyInput<'borderBlockEndStyle', T, Value>): this;
  borderBlockEndStyle(value: PropertyValue<'borderBlockEndStyle', T>): this {
    return this.write('borderBlockEndStyle', value);
  }
  /**
   * 设置逻辑块轴结束侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  borderBlockEndWidth(value: KeywordInput<'borderBlockEndWidth', T>): this;
  /**
   * 设置逻辑块轴结束侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  borderBlockEndWidth<const Value>(value: PropertyInput<'borderBlockEndWidth', T, Value>): this;
  borderBlockEndWidth(value: PropertyValue<'borderBlockEndWidth', T>): this {
    return this.write('borderBlockEndWidth', value);
  }
  /**
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  borderBlockStart(value: KeywordInput<'borderBlockStart', T>): this;
  /**
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  borderBlockStart<const Value>(value: PropertyInput<'borderBlockStart', T, Value>): this;
  borderBlockStart(value: PropertyValue<'borderBlockStart', T>): this {
    return this.write('borderBlockStart', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  borderBlockStartColor(value: KeywordInput<'borderBlockStartColor', T>): this;
  /**
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  borderBlockStartColor<const Value>(value: PropertyInput<'borderBlockStartColor', T, Value>): this;
  borderBlockStartColor(value: PropertyValue<'borderBlockStartColor', T>): this {
    return this.write('borderBlockStartColor', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  borderBlockStartStyle(value: KeywordInput<'borderBlockStartStyle', T>): this;
  /**
   * 设置逻辑块轴起始侧的边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  borderBlockStartStyle<const Value>(value: PropertyInput<'borderBlockStartStyle', T, Value>): this;
  borderBlockStartStyle(value: PropertyValue<'borderBlockStartStyle', T>): this {
    return this.write('borderBlockStartStyle', value);
  }
  /**
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  borderBlockStartWidth(value: KeywordInput<'borderBlockStartWidth', T>): this;
  /**
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  borderBlockStartWidth<const Value>(value: PropertyInput<'borderBlockStartWidth', T, Value>): this;
  borderBlockStartWidth(value: PropertyValue<'borderBlockStartWidth', T>): this {
    return this.write('borderBlockStartWidth', value);
  }
  /**
   * 设置逻辑块轴两侧的边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  borderBlockStyle(value: KeywordInput<'borderBlockStyle', T>): this;
  /**
   * 设置逻辑块轴两侧的边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  borderBlockStyle<const Value>(value: PropertyInput<'borderBlockStyle', T, Value>): this;
  borderBlockStyle(value: PropertyValue<'borderBlockStyle', T>): this {
    return this.write('borderBlockStyle', value);
  }
  /**
   * 设置逻辑块轴两侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  borderBlockWidth(value: KeywordInput<'borderBlockWidth', T>): this;
  /**
   * 设置逻辑块轴两侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  borderBlockWidth<const Value>(value: PropertyInput<'borderBlockWidth', T, Value>): this;
  borderBlockWidth(value: PropertyValue<'borderBlockWidth', T>): this {
    return this.write('borderBlockWidth', value);
  }
  /**
   * 设置下边框的宽度、线型和颜色。
   *
   * @default:'border-bottom-width: medium；border-bottom-style: none；border-bottom-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  borderBottom(value: KeywordInput<'borderBottom', T>): this;
  /**
   * 设置下边框的宽度、线型和颜色。
   *
   * @default:'border-bottom-width: medium；border-bottom-style: none；border-bottom-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  borderBottom<const Value>(value: PropertyInput<'borderBottom', T, Value>): this;
  borderBottom(value: PropertyValue<'borderBottom', T>): this {
    return this.write('borderBottom', value);
  }
  /**
   * 设置下边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  borderBottomColor(value: KeywordInput<'borderBottomColor', T>): this;
  /**
   * 设置下边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  borderBottomColor<const Value>(value: PropertyInput<'borderBottomColor', T, Value>): this;
  borderBottomColor(value: PropertyValue<'borderBottomColor', T>): this {
    return this.write('borderBottomColor', value);
  }
  /**
   * 设置左下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  borderBottomLeftRadius(value: KeywordInput<'borderBottomLeftRadius', T>): this;
  /**
   * 设置左下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  borderBottomLeftRadius<const Value>(
    value: PropertyInput<'borderBottomLeftRadius', T, Value>,
  ): this;
  borderBottomLeftRadius(value: PropertyValue<'borderBottomLeftRadius', T>): this {
    return this.write('borderBottomLeftRadius', value);
  }
  /**
   * 设置右下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  borderBottomRightRadius(value: KeywordInput<'borderBottomRightRadius', T>): this;
  /**
   * 设置右下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  borderBottomRightRadius<const Value>(
    value: PropertyInput<'borderBottomRightRadius', T, Value>,
  ): this;
  borderBottomRightRadius(value: PropertyValue<'borderBottomRightRadius', T>): this {
    return this.write('borderBottomRightRadius', value);
  }
  /**
   * 设置下边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  borderBottomStyle(value: KeywordInput<'borderBottomStyle', T>): this;
  /**
   * 设置下边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  borderBottomStyle<const Value>(value: PropertyInput<'borderBottomStyle', T, Value>): this;
  borderBottomStyle(value: PropertyValue<'borderBottomStyle', T>): this {
    return this.write('borderBottomStyle', value);
  }
  /**
   * 设置下边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  borderBottomWidth(value: KeywordInput<'borderBottomWidth', T>): this;
  /**
   * 设置下边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  borderBottomWidth<const Value>(value: PropertyInput<'borderBottomWidth', T, Value>): this;
  borderBottomWidth(value: PropertyValue<'borderBottomWidth', T>): this {
    return this.write('borderBottomWidth', value);
  }
  /**
   * 设置表格相邻单元格边框合并还是分离。
   *
   * @default:'separate'
   * @extend:'是'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  borderCollapse(value: KeywordInput<'borderCollapse', T>): this;
  /**
   * 设置表格相邻单元格边框合并还是分离。
   *
   * @default:'separate'
   * @extend:'是'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  borderCollapse<const Value>(value: PropertyInput<'borderCollapse', T, Value>): this;
  borderCollapse(value: PropertyValue<'borderCollapse', T>): this {
    return this.write('borderCollapse', value);
  }
  /**
   * 设置四边边框颜色，支持按上、右、下、左顺序简写。
   *
   * @default:'border-top-color: currentcolor；border-right-color: currentcolor；border-bottom-color: currentcolor；border-left-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  borderColor(value: KeywordInput<'borderColor', T>): this;
  /**
   * 设置四边边框颜色，支持按上、右、下、左顺序简写。
   *
   * @default:'border-top-color: currentcolor；border-right-color: currentcolor；border-bottom-color: currentcolor；border-left-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  borderColor<const Value>(value: PropertyInput<'borderColor', T, Value>): this;
  borderColor(value: PropertyValue<'borderColor', T>): this {
    return this.write('borderColor', value);
  }
  /**
   * 设置逻辑块轴结束侧与行内轴结束侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  borderEndEndRadius(value: KeywordInput<'borderEndEndRadius', T>): this;
  /**
   * 设置逻辑块轴结束侧与行内轴结束侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  borderEndEndRadius<const Value>(value: PropertyInput<'borderEndEndRadius', T, Value>): this;
  borderEndEndRadius(value: PropertyValue<'borderEndEndRadius', T>): this {
    return this.write('borderEndEndRadius', value);
  }
  /**
   * 设置逻辑块轴结束侧与行内轴起始侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  borderEndStartRadius(value: KeywordInput<'borderEndStartRadius', T>): this;
  /**
   * 设置逻辑块轴结束侧与行内轴起始侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  borderEndStartRadius<const Value>(value: PropertyInput<'borderEndStartRadius', T, Value>): this;
  borderEndStartRadius(value: PropertyValue<'borderEndStartRadius', T>): this {
    return this.write('borderEndStartRadius', value);
  }
  /**
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * @default:'border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  borderImage(value: KeywordInput<'borderImage', T>): this;
  /**
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * @default:'border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  borderImage<const Value>(value: PropertyInput<'borderImage', T, Value>): this;
  borderImage(value: PropertyValue<'borderImage', T>): this {
    return this.write('borderImage', value);
  }
  /**
   * 设置边框图像超出边框盒的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  borderImageOutset(value: KeywordInput<'borderImageOutset', T>): this;
  /**
   * 设置边框图像超出边框盒的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  borderImageOutset<const Value>(value: PropertyInput<'borderImageOutset', T, Value>): this;
  borderImageOutset(value: PropertyValue<'borderImageOutset', T>): this {
    return this.write('borderImageOutset', value);
  }
  /**
   * 设置边框图像切片沿边框的重复或拉伸方式。
   *
   * @default:'stretch'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  borderImageRepeat(value: KeywordInput<'borderImageRepeat', T>): this;
  /**
   * 设置边框图像切片沿边框的重复或拉伸方式。
   *
   * @default:'stretch'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  borderImageRepeat<const Value>(value: PropertyInput<'borderImageRepeat', T, Value>): this;
  borderImageRepeat(value: PropertyValue<'borderImageRepeat', T>): this {
    return this.write('borderImageRepeat', value);
  }
  /**
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * @default:'100%'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  borderImageSlice(value: KeywordInput<'borderImageSlice', T>): this;
  /**
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * @default:'100%'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  borderImageSlice<const Value>(value: PropertyInput<'borderImageSlice', T, Value>): this;
  borderImageSlice(value: PropertyValue<'borderImageSlice', T>): this {
    return this.write('borderImageSlice', value);
  }
  /**
   * 指定边框使用的图像或渐变。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  borderImageSource(value: KeywordInput<'borderImageSource', T>): this;
  /**
   * 指定边框使用的图像或渐变。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  borderImageSource<const Value>(value: PropertyInput<'borderImageSource', T, Value>): this;
  borderImageSource(value: PropertyValue<'borderImageSource', T>): this {
    return this.write('borderImageSource', value);
  }
  /**
   * 设置边框图像各边的绘制宽度。
   *
   * @default:'1'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  borderImageWidth(value: KeywordInput<'borderImageWidth', T>): this;
  /**
   * 设置边框图像各边的绘制宽度。
   *
   * @default:'1'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  borderImageWidth<const Value>(value: PropertyInput<'borderImageWidth', T, Value>): this;
  borderImageWidth(value: PropertyValue<'borderImageWidth', T>): this {
    return this.write('borderImageWidth', value);
  }
  /**
   * 设置逻辑行内轴起始侧和结束侧的边框。
   *
   * @default:'border-inline-width: medium；border-inline-style: none；border-inline-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  borderInline(value: KeywordInput<'borderInline', T>): this;
  /**
   * 设置逻辑行内轴起始侧和结束侧的边框。
   *
   * @default:'border-inline-width: medium；border-inline-style: none；border-inline-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  borderInline<const Value>(value: PropertyInput<'borderInline', T, Value>): this;
  borderInline(value: PropertyValue<'borderInline', T>): this {
    return this.write('borderInline', value);
  }
  /**
   * 设置逻辑行内轴两侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  borderInlineColor(value: KeywordInput<'borderInlineColor', T>): this;
  /**
   * 设置逻辑行内轴两侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  borderInlineColor<const Value>(value: PropertyInput<'borderInlineColor', T, Value>): this;
  borderInlineColor(value: PropertyValue<'borderInlineColor', T>): this {
    return this.write('borderInlineColor', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  borderInlineEnd(value: KeywordInput<'borderInlineEnd', T>): this;
  /**
   * 设置逻辑行内轴结束侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  borderInlineEnd<const Value>(value: PropertyInput<'borderInlineEnd', T, Value>): this;
  borderInlineEnd(value: PropertyValue<'borderInlineEnd', T>): this {
    return this.write('borderInlineEnd', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  borderInlineEndColor(value: KeywordInput<'borderInlineEndColor', T>): this;
  /**
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  borderInlineEndColor<const Value>(value: PropertyInput<'borderInlineEndColor', T, Value>): this;
  borderInlineEndColor(value: PropertyValue<'borderInlineEndColor', T>): this {
    return this.write('borderInlineEndColor', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  borderInlineEndStyle(value: KeywordInput<'borderInlineEndStyle', T>): this;
  /**
   * 设置逻辑行内轴结束侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  borderInlineEndStyle<const Value>(value: PropertyInput<'borderInlineEndStyle', T, Value>): this;
  borderInlineEndStyle(value: PropertyValue<'borderInlineEndStyle', T>): this {
    return this.write('borderInlineEndStyle', value);
  }
  /**
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  borderInlineEndWidth(value: KeywordInput<'borderInlineEndWidth', T>): this;
  /**
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  borderInlineEndWidth<const Value>(value: PropertyInput<'borderInlineEndWidth', T, Value>): this;
  borderInlineEndWidth(value: PropertyValue<'borderInlineEndWidth', T>): this {
    return this.write('borderInlineEndWidth', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  borderInlineStart(value: KeywordInput<'borderInlineStart', T>): this;
  /**
   * 设置逻辑行内轴起始侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  borderInlineStart<const Value>(value: PropertyInput<'borderInlineStart', T, Value>): this;
  borderInlineStart(value: PropertyValue<'borderInlineStart', T>): this {
    return this.write('borderInlineStart', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  borderInlineStartColor(value: KeywordInput<'borderInlineStartColor', T>): this;
  /**
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  borderInlineStartColor<const Value>(
    value: PropertyInput<'borderInlineStartColor', T, Value>,
  ): this;
  borderInlineStartColor(value: PropertyValue<'borderInlineStartColor', T>): this {
    return this.write('borderInlineStartColor', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  borderInlineStartStyle(value: KeywordInput<'borderInlineStartStyle', T>): this;
  /**
   * 设置逻辑行内轴起始侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  borderInlineStartStyle<const Value>(
    value: PropertyInput<'borderInlineStartStyle', T, Value>,
  ): this;
  borderInlineStartStyle(value: PropertyValue<'borderInlineStartStyle', T>): this {
    return this.write('borderInlineStartStyle', value);
  }
  /**
   * 设置逻辑行内轴起始侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  borderInlineStartWidth(value: KeywordInput<'borderInlineStartWidth', T>): this;
  /**
   * 设置逻辑行内轴起始侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  borderInlineStartWidth<const Value>(
    value: PropertyInput<'borderInlineStartWidth', T, Value>,
  ): this;
  borderInlineStartWidth(value: PropertyValue<'borderInlineStartWidth', T>): this {
    return this.write('borderInlineStartWidth', value);
  }
  /**
   * 设置逻辑行内轴两侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  borderInlineStyle(value: KeywordInput<'borderInlineStyle', T>): this;
  /**
   * 设置逻辑行内轴两侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  borderInlineStyle<const Value>(value: PropertyInput<'borderInlineStyle', T, Value>): this;
  borderInlineStyle(value: PropertyValue<'borderInlineStyle', T>): this {
    return this.write('borderInlineStyle', value);
  }
  /**
   * 设置逻辑行内轴两侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  borderInlineWidth(value: KeywordInput<'borderInlineWidth', T>): this;
  /**
   * 设置逻辑行内轴两侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  borderInlineWidth<const Value>(value: PropertyInput<'borderInlineWidth', T, Value>): this;
  borderInlineWidth(value: PropertyValue<'borderInlineWidth', T>): this {
    return this.write('borderInlineWidth', value);
  }
  /**
   * 设置左边框的宽度、线型和颜色。
   *
   * @default:'border-left-width: medium；border-left-style: none；border-left-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  borderLeft(value: KeywordInput<'borderLeft', T>): this;
  /**
   * 设置左边框的宽度、线型和颜色。
   *
   * @default:'border-left-width: medium；border-left-style: none；border-left-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  borderLeft<const Value>(value: PropertyInput<'borderLeft', T, Value>): this;
  borderLeft(value: PropertyValue<'borderLeft', T>): this {
    return this.write('borderLeft', value);
  }
  /**
   * 设置左边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  borderLeftColor(value: KeywordInput<'borderLeftColor', T>): this;
  /**
   * 设置左边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  borderLeftColor<const Value>(value: PropertyInput<'borderLeftColor', T, Value>): this;
  borderLeftColor(value: PropertyValue<'borderLeftColor', T>): this {
    return this.write('borderLeftColor', value);
  }
  /**
   * 设置左边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  borderLeftStyle(value: KeywordInput<'borderLeftStyle', T>): this;
  /**
   * 设置左边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  borderLeftStyle<const Value>(value: PropertyInput<'borderLeftStyle', T, Value>): this;
  borderLeftStyle(value: PropertyValue<'borderLeftStyle', T>): this {
    return this.write('borderLeftStyle', value);
  }
  /**
   * 设置左边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  borderLeftWidth(value: KeywordInput<'borderLeftWidth', T>): this;
  /**
   * 设置左边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  borderLeftWidth<const Value>(value: PropertyInput<'borderLeftWidth', T, Value>): this;
  borderLeftWidth(value: PropertyValue<'borderLeftWidth', T>): this {
    return this.write('borderLeftWidth', value);
  }
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
  borderRadius(value: KeywordInput<'borderRadius', T>): this;
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
  borderRadius<const Value>(value: PropertyInput<'borderRadius', T, Value>): this;
  borderRadius(value: PropertyValue<'borderRadius', T>): this {
    return this.write('borderRadius', value);
  }
  /**
   * 设置右边框的宽度、线型和颜色。
   *
   * @default:'border-right-width: medium；border-right-style: none；border-right-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  borderRight(value: KeywordInput<'borderRight', T>): this;
  /**
   * 设置右边框的宽度、线型和颜色。
   *
   * @default:'border-right-width: medium；border-right-style: none；border-right-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  borderRight<const Value>(value: PropertyInput<'borderRight', T, Value>): this;
  borderRight(value: PropertyValue<'borderRight', T>): this {
    return this.write('borderRight', value);
  }
  /**
   * 设置右边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  borderRightColor(value: KeywordInput<'borderRightColor', T>): this;
  /**
   * 设置右边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  borderRightColor<const Value>(value: PropertyInput<'borderRightColor', T, Value>): this;
  borderRightColor(value: PropertyValue<'borderRightColor', T>): this {
    return this.write('borderRightColor', value);
  }
  /**
   * 设置右边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  borderRightStyle(value: KeywordInput<'borderRightStyle', T>): this;
  /**
   * 设置右边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  borderRightStyle<const Value>(value: PropertyInput<'borderRightStyle', T, Value>): this;
  borderRightStyle(value: PropertyValue<'borderRightStyle', T>): this {
    return this.write('borderRightStyle', value);
  }
  /**
   * 设置右边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  borderRightWidth(value: KeywordInput<'borderRightWidth', T>): this;
  /**
   * 设置右边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  borderRightWidth<const Value>(value: PropertyInput<'borderRightWidth', T, Value>): this;
  borderRightWidth(value: PropertyValue<'borderRightWidth', T>): this {
    return this.write('borderRightWidth', value);
  }
  /**
   * 设置分离边框模型下表格单元格之间的水平和垂直间距。
   *
   * @default:'0'
   * @extend:'是'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  borderSpacing(value: KeywordInput<'borderSpacing', T>): this;
  /**
   * 设置分离边框模型下表格单元格之间的水平和垂直间距。
   *
   * @default:'0'
   * @extend:'是'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  borderSpacing<const Value>(value: PropertyInput<'borderSpacing', T, Value>): this;
  borderSpacing(value: PropertyValue<'borderSpacing', T>): this {
    return this.write('borderSpacing', value);
  }
  /**
   * 设置逻辑块轴起始侧与行内轴结束侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  borderStartEndRadius(value: KeywordInput<'borderStartEndRadius', T>): this;
  /**
   * 设置逻辑块轴起始侧与行内轴结束侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  borderStartEndRadius<const Value>(value: PropertyInput<'borderStartEndRadius', T, Value>): this;
  borderStartEndRadius(value: PropertyValue<'borderStartEndRadius', T>): this {
    return this.write('borderStartEndRadius', value);
  }
  /**
   * 设置逻辑块轴起始侧与行内轴起始侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  borderStartStartRadius(value: KeywordInput<'borderStartStartRadius', T>): this;
  /**
   * 设置逻辑块轴起始侧与行内轴起始侧相交角的圆角。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  borderStartStartRadius<const Value>(
    value: PropertyInput<'borderStartStartRadius', T, Value>,
  ): this;
  borderStartStartRadius(value: PropertyValue<'borderStartStartRadius', T>): this {
    return this.write('borderStartStartRadius', value);
  }
  /**
   * 设置四边边框线型。
   *
   * @default:'border-top-style: none；border-right-style: none；border-bottom-style: none；border-left-style: none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  borderStyle(value: KeywordInput<'borderStyle', T>): this;
  /**
   * 设置四边边框线型。
   *
   * @default:'border-top-style: none；border-right-style: none；border-bottom-style: none；border-left-style: none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  borderStyle<const Value>(value: PropertyInput<'borderStyle', T, Value>): this;
  borderStyle(value: PropertyValue<'borderStyle', T>): this {
    return this.write('borderStyle', value);
  }
  /**
   * 设置上边框的宽度、线型和颜色。
   *
   * @default:'border-top-width: medium；border-top-style: none；border-top-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  borderTop(value: KeywordInput<'borderTop', T>): this;
  /**
   * 设置上边框的宽度、线型和颜色。
   *
   * @default:'border-top-width: medium；border-top-style: none；border-top-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  borderTop<const Value>(value: PropertyInput<'borderTop', T, Value>): this;
  borderTop(value: PropertyValue<'borderTop', T>): this {
    return this.write('borderTop', value);
  }
  /**
   * 设置上边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  borderTopColor(value: KeywordInput<'borderTopColor', T>): this;
  /**
   * 设置上边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  borderTopColor<const Value>(value: PropertyInput<'borderTopColor', T, Value>): this;
  borderTopColor(value: PropertyValue<'borderTopColor', T>): this {
    return this.write('borderTopColor', value);
  }
  /**
   * 设置左上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  borderTopLeftRadius(value: KeywordInput<'borderTopLeftRadius', T>): this;
  /**
   * 设置左上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  borderTopLeftRadius<const Value>(value: PropertyInput<'borderTopLeftRadius', T, Value>): this;
  borderTopLeftRadius(value: PropertyValue<'borderTopLeftRadius', T>): this {
    return this.write('borderTopLeftRadius', value);
  }
  /**
   * 设置右上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  borderTopRightRadius(value: KeywordInput<'borderTopRightRadius', T>): this;
  /**
   * 设置右上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  borderTopRightRadius<const Value>(value: PropertyInput<'borderTopRightRadius', T, Value>): this;
  borderTopRightRadius(value: PropertyValue<'borderTopRightRadius', T>): this {
    return this.write('borderTopRightRadius', value);
  }
  /**
   * 设置上边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  borderTopStyle(value: KeywordInput<'borderTopStyle', T>): this;
  /**
   * 设置上边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  borderTopStyle<const Value>(value: PropertyInput<'borderTopStyle', T, Value>): this;
  borderTopStyle(value: PropertyValue<'borderTopStyle', T>): this {
    return this.write('borderTopStyle', value);
  }
  /**
   * 设置上边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  borderTopWidth(value: KeywordInput<'borderTopWidth', T>): this;
  /**
   * 设置上边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  borderTopWidth<const Value>(value: PropertyInput<'borderTopWidth', T, Value>): this;
  borderTopWidth(value: PropertyValue<'borderTopWidth', T>): this {
    return this.write('borderTopWidth', value);
  }
  /**
   * 设置四边边框宽度；可见边框通常还需要非 none 的线型。
   *
   * @default:'border-top-width: medium；border-right-width: medium；border-bottom-width: medium；border-left-width: medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  borderWidth(value: KeywordInput<'borderWidth', T>): this;
  /**
   * 设置四边边框宽度；可见边框通常还需要非 none 的线型。
   *
   * @default:'border-top-width: medium；border-right-width: medium；border-bottom-width: medium；border-left-width: medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  borderWidth<const Value>(value: PropertyInput<'borderWidth', T, Value>): this;
  borderWidth(value: PropertyValue<'borderWidth', T>): this {
    return this.write('borderWidth', value);
  }
  /**
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * @default:'column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  columnRule(value: KeywordInput<'columnRule', T>): this;
  /**
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * @default:'column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  columnRule<const Value>(value: PropertyInput<'columnRule', T, Value>): this;
  columnRule(value: PropertyValue<'columnRule', T>): this {
    return this.write('columnRule', value);
  }
  /**
   * 设置多栏分隔线的颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  columnRuleColor(value: KeywordInput<'columnRuleColor', T>): this;
  /**
   * 设置多栏分隔线的颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  columnRuleColor<const Value>(value: PropertyInput<'columnRuleColor', T, Value>): this;
  columnRuleColor(value: PropertyValue<'columnRuleColor', T>): this {
    return this.write('columnRuleColor', value);
  }
  /**
   * 设置多栏分隔线的线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  columnRuleStyle(value: KeywordInput<'columnRuleStyle', T>): this;
  /**
   * 设置多栏分隔线的线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  columnRuleStyle<const Value>(value: PropertyInput<'columnRuleStyle', T, Value>): this;
  columnRuleStyle(value: PropertyValue<'columnRuleStyle', T>): this {
    return this.write('columnRuleStyle', value);
  }
  /**
   * 设置多栏分隔线的宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  columnRuleWidth(value: KeywordInput<'columnRuleWidth', T>): this;
  /**
   * 设置多栏分隔线的宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  columnRuleWidth<const Value>(value: PropertyInput<'columnRuleWidth', T, Value>): this;
  columnRuleWidth(value: PropertyValue<'columnRuleWidth', T>): this {
    return this.write('columnRuleWidth', value);
  }
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
  outline(value: KeywordInput<'outline', T>): this;
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
  outline<const Value>(value: PropertyInput<'outline', T, Value>): this;
  outline(value: PropertyValue<'outline', T>): this {
    return this.write('outline', value);
  }
  /**
   * 设置轮廓线颜色。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  outlineColor(value: KeywordInput<'outlineColor', T>): this;
  /**
   * 设置轮廓线颜色。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  outlineColor<const Value>(value: PropertyInput<'outlineColor', T, Value>): this;
  outlineColor(value: PropertyValue<'outlineColor', T>): this {
    return this.write('outlineColor', value);
  }
  /**
   * 设置轮廓线与边框边缘之间的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  outlineOffset(value: KeywordInput<'outlineOffset', T>): this;
  /**
   * 设置轮廓线与边框边缘之间的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  outlineOffset<const Value>(value: PropertyInput<'outlineOffset', T, Value>): this;
  outlineOffset(value: PropertyValue<'outlineOffset', T>): this {
    return this.write('outlineOffset', value);
  }
  /**
   * 设置轮廓线线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  outlineStyle(value: KeywordInput<'outlineStyle', T>): this;
  /**
   * 设置轮廓线线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  outlineStyle<const Value>(value: PropertyInput<'outlineStyle', T, Value>): this;
  outlineStyle(value: PropertyValue<'outlineStyle', T>): this {
    return this.write('outlineStyle', value);
  }
  /**
   * 设置轮廓线宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  outlineWidth(value: KeywordInput<'outlineWidth', T>): this;
  /**
   * 设置轮廓线宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  outlineWidth<const Value>(value: PropertyInput<'outlineWidth', T, Value>): this;
  outlineWidth(value: PropertyValue<'outlineWidth', T>): this {
    return this.write('outlineWidth', value);
  }
  /**
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  backdropFilter(value: KeywordInput<'backdropFilter', T>): this;
  /**
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  backdropFilter<const Value>(value: PropertyInput<'backdropFilter', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
   */
  boxShadow(value: KeywordInput<'boxShadow', T>): this;
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
  boxShadow<const Value>(value: PropertyInput<'boxShadow', T, Value>): this;
  boxShadow(value: PropertyValue<'boxShadow', T>): this {
    return this.write('boxShadow', value);
  }
  /**
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  clipPath(value: KeywordInput<'clipPath', T>): this;
  /**
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  clipPath<const Value>(value: PropertyInput<'clipPath', T, Value>): this;
  clipPath(value: PropertyValue<'clipPath', T>): this {
    return this.write('clipPath', value);
  }
  /**
   * 设置 SVG 裁剪路径判断内部区域所用的填充规则。
   *
   * @default:'nonzero'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  clipRule(value: KeywordInput<'clipRule', T>): this;
  /**
   * 设置 SVG 裁剪路径判断内部区域所用的填充规则。
   *
   * @default:'nonzero'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  clipRule<const Value>(value: PropertyInput<'clipRule', T, Value>): this;
  clipRule(value: PropertyValue<'clipRule', T>): this {
    return this.write('clipRule', value);
  }
  /**
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  filter(value: KeywordInput<'filter', T>): this;
  /**
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  filter<const Value>(value: PropertyInput<'filter', T, Value>): this;
  filter(value: PropertyValue<'filter', T>): this {
    return this.write('filter', value);
  }
  /**
   * 设置图像是否按元数据等信息调整方向。
   *
   * @default:'from-image'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  imageOrientation(value: KeywordInput<'imageOrientation', T>): this;
  /**
   * 设置图像是否按元数据等信息调整方向。
   *
   * @default:'from-image'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  imageOrientation<const Value>(value: PropertyInput<'imageOrientation', T, Value>): this;
  imageOrientation(value: PropertyValue<'imageOrientation', T>): this {
    return this.write('imageOrientation', value);
  }
  /**
   * 向浏览器指定图像缩放时的插值与清晰度偏好。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  imageRendering(value: KeywordInput<'imageRendering', T>): this;
  /**
   * 向浏览器指定图像缩放时的插值与清晰度偏好。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  imageRendering<const Value>(value: PropertyInput<'imageRendering', T, Value>): this;
  imageRendering(value: PropertyValue<'imageRendering', T>): this {
    return this.write('imageRendering', value);
  }
  /**
   * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。
   *
   * @default:'1dppx'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  imageResolution(value: KeywordInput<'imageResolution', T>): this;
  /**
   * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。
   *
   * @default:'1dppx'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  imageResolution<const Value>(value: PropertyInput<'imageResolution', T, Value>): this;
  imageResolution(value: PropertyValue<'imageResolution', T>): this {
    return this.write('imageResolution', value);
  }
  /**
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   *
   * @default:'mask-image: none；mask-mode: match-source；mask-repeat: repeat；mask-position: 0% 0%；mask-clip: border-box；mask-origin: border-box；mask-size: auto；mask-composite: add'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  mask(value: KeywordInput<'mask', T>): this;
  /**
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   *
   * @default:'mask-image: none；mask-mode: match-source；mask-repeat: repeat；mask-position: 0% 0%；mask-clip: border-box；mask-origin: border-box；mask-size: auto；mask-composite: add'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  mask<const Value>(value: PropertyInput<'mask', T, Value>): this;
  mask(value: PropertyValue<'mask', T>): this {
    return this.write('mask', value);
  }
  /**
   * 设置基于九宫格图像切片的边框遮罩。
   *
   * @default:'mask-border-mode: alpha；mask-border-outset: 0；mask-border-repeat: stretch；mask-border-slice: 0；mask-border-source: none；mask-border-width: auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  maskBorder(value: KeywordInput<'maskBorder', T>): this;
  /**
   * 设置基于九宫格图像切片的边框遮罩。
   *
   * @default:'mask-border-mode: alpha；mask-border-outset: 0；mask-border-repeat: stretch；mask-border-slice: 0；mask-border-source: none；mask-border-width: auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  maskBorder<const Value>(value: PropertyInput<'maskBorder', T, Value>): this;
  maskBorder(value: PropertyValue<'maskBorder', T>): this {
    return this.write('maskBorder', value);
  }
  /**
   * 设置边框遮罩使用 alpha 还是亮度信息。
   *
   * @default:'alpha'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  maskBorderMode(value: KeywordInput<'maskBorderMode', T>): this;
  /**
   * 设置边框遮罩使用 alpha 还是亮度信息。
   *
   * @default:'alpha'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  maskBorderMode<const Value>(value: PropertyInput<'maskBorderMode', T, Value>): this;
  maskBorderMode(value: PropertyValue<'maskBorderMode', T>): this {
    return this.write('maskBorderMode', value);
  }
  /**
   * 设置边框遮罩超出边框盒的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  maskBorderOutset(value: KeywordInput<'maskBorderOutset', T>): this;
  /**
   * 设置边框遮罩超出边框盒的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  maskBorderOutset<const Value>(value: PropertyInput<'maskBorderOutset', T, Value>): this;
  maskBorderOutset(value: PropertyValue<'maskBorderOutset', T>): this {
    return this.write('maskBorderOutset', value);
  }
  /**
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * @default:'stretch'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  maskBorderRepeat(value: KeywordInput<'maskBorderRepeat', T>): this;
  /**
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * @default:'stretch'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  maskBorderRepeat<const Value>(value: PropertyInput<'maskBorderRepeat', T, Value>): this;
  maskBorderRepeat(value: PropertyValue<'maskBorderRepeat', T>): this {
    return this.write('maskBorderRepeat', value);
  }
  /**
   * 设置边框遮罩图像的切片位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  maskBorderSlice(value: KeywordInput<'maskBorderSlice', T>): this;
  /**
   * 设置边框遮罩图像的切片位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  maskBorderSlice<const Value>(value: PropertyInput<'maskBorderSlice', T, Value>): this;
  maskBorderSlice(value: PropertyValue<'maskBorderSlice', T>): this {
    return this.write('maskBorderSlice', value);
  }
  /**
   * 设置边框遮罩的源图像。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  maskBorderSource(value: KeywordInput<'maskBorderSource', T>): this;
  /**
   * 设置边框遮罩的源图像。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  maskBorderSource<const Value>(value: PropertyInput<'maskBorderSource', T, Value>): this;
  maskBorderSource(value: PropertyValue<'maskBorderSource', T>): this {
    return this.write('maskBorderSource', value);
  }
  /**
   * 设置边框遮罩各边的宽度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  maskBorderWidth(value: KeywordInput<'maskBorderWidth', T>): this;
  /**
   * 设置边框遮罩各边的宽度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  maskBorderWidth<const Value>(value: PropertyInput<'maskBorderWidth', T, Value>): this;
  maskBorderWidth(value: PropertyValue<'maskBorderWidth', T>): this {
    return this.write('maskBorderWidth', value);
  }
  /**
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  maskClip(value: KeywordInput<'maskClip', T>): this;
  /**
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  maskClip<const Value>(value: PropertyInput<'maskClip', T, Value>): this;
  maskClip(value: PropertyValue<'maskClip', T>): this {
    return this.write('maskClip', value);
  }
  /**
   * 设置多个遮罩图层之间的合成运算。
   *
   * @default:'add'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  maskComposite(value: KeywordInput<'maskComposite', T>): this;
  /**
   * 设置多个遮罩图层之间的合成运算。
   *
   * @default:'add'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  maskComposite<const Value>(value: PropertyInput<'maskComposite', T, Value>): this;
  maskComposite(value: PropertyValue<'maskComposite', T>): this {
    return this.write('maskComposite', value);
  }
  /**
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  maskImage(value: KeywordInput<'maskImage', T>): this;
  /**
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  maskImage<const Value>(value: PropertyInput<'maskImage', T, Value>): this;
  maskImage(value: PropertyValue<'maskImage', T>): this {
    return this.write('maskImage', value);
  }
  /**
   * 设置遮罩按 alpha、亮度或源类型解释。
   *
   * @default:'match-source'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  maskMode(value: KeywordInput<'maskMode', T>): this;
  /**
   * 设置遮罩按 alpha、亮度或源类型解释。
   *
   * @default:'match-source'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  maskMode<const Value>(value: PropertyInput<'maskMode', T, Value>): this;
  maskMode(value: PropertyValue<'maskMode', T>): this {
    return this.write('maskMode', value);
  }
  /**
   * 设置遮罩图像定位所依据的盒子。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  maskOrigin(value: KeywordInput<'maskOrigin', T>): this;
  /**
   * 设置遮罩图像定位所依据的盒子。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  maskOrigin<const Value>(value: PropertyInput<'maskOrigin', T, Value>): this;
  maskOrigin(value: PropertyValue<'maskOrigin', T>): this {
    return this.write('maskOrigin', value);
  }
  /**
   * 设置遮罩图像在定位区域中的位置。
   *
   * @default:'0% 0%'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  maskPosition(value: KeywordInput<'maskPosition', T>): this;
  /**
   * 设置遮罩图像在定位区域中的位置。
   *
   * @default:'0% 0%'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  maskPosition<const Value>(value: PropertyInput<'maskPosition', T, Value>): this;
  maskPosition(value: PropertyValue<'maskPosition', T>): this {
    return this.write('maskPosition', value);
  }
  /**
   * 设置遮罩图像的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  maskRepeat(value: KeywordInput<'maskRepeat', T>): this;
  /**
   * 设置遮罩图像的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  maskRepeat<const Value>(value: PropertyInput<'maskRepeat', T, Value>): this;
  maskRepeat(value: PropertyValue<'maskRepeat', T>): this {
    return this.write('maskRepeat', value);
  }
  /**
   * 设置遮罩图像的尺寸。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  maskSize(value: KeywordInput<'maskSize', T>): this;
  /**
   * 设置遮罩图像的尺寸。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  maskSize<const Value>(value: PropertyInput<'maskSize', T, Value>): this;
  maskSize(value: PropertyValue<'maskSize', T>): this {
    return this.write('maskSize', value);
  }
  /**
   * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。
   *
   * @default:'luminance'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  maskType(value: KeywordInput<'maskType', T>): this;
  /**
   * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。
   *
   * @default:'luminance'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  maskType<const Value>(value: PropertyInput<'maskType', T, Value>): this;
  maskType(value: PropertyValue<'maskType', T>): this {
    return this.write('maskType', value);
  }
  /**
   * 设置元素整体与其背后内容的颜色混合方式。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  mixBlendMode(value: KeywordInput<'mixBlendMode', T>): this;
  /**
   * 设置元素整体与其背后内容的颜色混合方式。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  mixBlendMode<const Value>(value: PropertyInput<'mixBlendMode', T, Value>): this;
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
   * @default:'fill'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  objectFit(value: KeywordInput<'objectFit', T>): this;
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
  objectFit<const Value>(value: PropertyInput<'objectFit', T, Value>): this;
  objectFit(value: PropertyValue<'objectFit', T>): this {
    return this.write('objectFit', value);
  }
  /**
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * @default:'50% 50%'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  objectPosition(value: KeywordInput<'objectPosition', T>): this;
  /**
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * @default:'50% 50%'
   * @extend:'是'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  objectPosition<const Value>(value: PropertyInput<'objectPosition', T, Value>): this;
  objectPosition(value: PropertyValue<'objectPosition', T>): this {
    return this.write('objectPosition', value);
  }
  /**
   * 设置替换元素内容的可视区域，控制用于呈现的图像范围。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  objectViewBox(value: KeywordInput<'objectViewBox', T>): this;
  /**
   * 设置替换元素内容的可视区域，控制用于呈现的图像范围。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  objectViewBox<const Value>(value: PropertyInput<'objectViewBox', T, Value>): this;
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
   * @default:'1'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
   */
  opacity(value: KeywordInput<'opacity', T>): this;
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
  opacity<const Value>(value: PropertyInput<'opacity', T, Value>): this;
  opacity(value: PropertyValue<'opacity', T>): this {
    return this.write('opacity', value);
  }
  /**
   * 设置从图像 alpha 信息提取环绕形状时的阈值。
   *
   * @default:'0.0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  shapeImageThreshold(value: KeywordInput<'shapeImageThreshold', T>): this;
  /**
   * 设置从图像 alpha 信息提取环绕形状时的阈值。
   *
   * @default:'0.0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  shapeImageThreshold<const Value>(value: PropertyInput<'shapeImageThreshold', T, Value>): this;
  shapeImageThreshold(value: PropertyValue<'shapeImageThreshold', T>): this {
    return this.write('shapeImageThreshold', value);
  }
  /**
   * 设置文字环绕形状之外的额外间距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  shapeMargin(value: KeywordInput<'shapeMargin', T>): this;
  /**
   * 设置文字环绕形状之外的额外间距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  shapeMargin<const Value>(value: PropertyInput<'shapeMargin', T, Value>): this;
  shapeMargin(value: PropertyValue<'shapeMargin', T>): this {
    return this.write('shapeMargin', value);
  }
  /**
   * 设置浮动元素周围行内内容所环绕的形状。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  shapeOutside(value: KeywordInput<'shapeOutside', T>): this;
  /**
   * 设置浮动元素周围行内内容所环绕的形状。
   *
   * @default:'none'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  shapeOutside<const Value>(value: PropertyInput<'shapeOutside', T, Value>): this;
  shapeOutside(value: PropertyValue<'shapeOutside', T>): this {
    return this.write('shapeOutside', value);
  }
  /**
   * 向 SVG 渲染器提供图形绘制精度与速度的偏好。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  shapeRendering(value: KeywordInput<'shapeRendering', T>): this;
  /**
   * 向 SVG 渲染器提供图形绘制精度与速度的偏好。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  shapeRendering<const Value>(value: PropertyInput<'shapeRendering', T, Value>): this;
  shapeRendering(value: PropertyValue<'shapeRendering', T>): this {
    return this.write('shapeRendering', value);
  }
  /**
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * @default:'animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  animation(value: KeywordInput<'animation', T>): this;
  /**
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * @default:'animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  animation<const Value>(value: PropertyInput<'animation', T, Value>): this;
  animation(value: PropertyValue<'animation', T>): this {
    return this.write('animation', value);
  }
  /**
   * 设置动画效果与底层属性值的替换、叠加或累积方式。
   *
   * @default:'replace'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  animationComposition(value: KeywordInput<'animationComposition', T>): this;
  /**
   * 设置动画效果与底层属性值的替换、叠加或累积方式。
   *
   * @default:'replace'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  animationComposition<const Value>(value: PropertyInput<'animationComposition', T, Value>): this;
  animationComposition(value: PropertyValue<'animationComposition', T>): this {
    return this.write('animationComposition', value);
  }
  /**
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  animationDelay(value: KeywordInput<'animationDelay', T>): this;
  /**
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  animationDelay<const Value>(value: PropertyInput<'animationDelay', T, Value>): this;
  animationDelay(value: PropertyValue<'animationDelay', T>): this {
    return this.write('animationDelay', value);
  }
  /**
   * 设置动画按正向、反向或交替方向播放。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  animationDirection(value: KeywordInput<'animationDirection', T>): this;
  /**
   * 设置动画按正向、反向或交替方向播放。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  animationDirection<const Value>(value: PropertyInput<'animationDirection', T, Value>): this;
  animationDirection(value: PropertyValue<'animationDirection', T>): this {
    return this.write('animationDirection', value);
  }
  /**
   * 设置动画完成一次循环的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  animationDuration(value: KeywordInput<'animationDuration', T>): this;
  /**
   * 设置动画完成一次循环的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  animationDuration<const Value>(value: PropertyInput<'animationDuration', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
   */
  animationFillMode(value: KeywordInput<'animationFillMode', T>): this;
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
  animationFillMode<const Value>(value: PropertyInput<'animationFillMode', T, Value>): this;
  animationFillMode(value: PropertyValue<'animationFillMode', T>): this {
    return this.write('animationFillMode', value);
  }
  /**
   * 设置动画循环次数，或无限循环。
   *
   * @default:'1'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  animationIterationCount(value: KeywordInput<'animationIterationCount', T>): this;
  /**
   * 设置动画循环次数，或无限循环。
   *
   * @default:'1'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  animationIterationCount<const Value>(
    value: PropertyInput<'animationIterationCount', T, Value>,
  ): this;
  animationIterationCount(value: PropertyValue<'animationIterationCount', T>): this {
    return this.write('animationIterationCount', value);
  }
  /**
   * 选择要播放的 @keyframes 动画名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  animationName(value: KeywordInput<'animationName', T>): this;
  /**
   * 选择要播放的 @keyframes 动画名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  animationName<const Value>(value: PropertyInput<'animationName', T, Value>): this;
  animationName(value: PropertyValue<'animationName', T>): this {
    return this.write('animationName', value);
  }
  /**
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * @default:'running'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  animationPlayState(value: KeywordInput<'animationPlayState', T>): this;
  /**
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * @default:'running'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  animationPlayState<const Value>(value: PropertyInput<'animationPlayState', T, Value>): this;
  animationPlayState(value: PropertyValue<'animationPlayState', T>): this {
    return this.write('animationPlayState', value);
  }
  /**
   * 设置动画附着到时间线的起止范围。
   *
   * @default:'animation-range-start: normal；animation-range-end: normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  animationRange(value: KeywordInput<'animationRange', T>): this;
  /**
   * 设置动画附着到时间线的起止范围。
   *
   * @default:'animation-range-start: normal；animation-range-end: normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  animationRange<const Value>(value: PropertyInput<'animationRange', T, Value>): this;
  animationRange(value: PropertyValue<'animationRange', T>): this {
    return this.write('animationRange', value);
  }
  /**
   * 设置动画在时间线上的附着范围终点。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  animationRangeEnd(value: KeywordInput<'animationRangeEnd', T>): this;
  /**
   * 设置动画在时间线上的附着范围终点。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  animationRangeEnd<const Value>(value: PropertyInput<'animationRangeEnd', T, Value>): this;
  animationRangeEnd(value: PropertyValue<'animationRangeEnd', T>): this {
    return this.write('animationRangeEnd', value);
  }
  /**
   * 设置动画在时间线上的附着范围起点。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  animationRangeStart(value: KeywordInput<'animationRangeStart', T>): this;
  /**
   * 设置动画在时间线上的附着范围起点。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  animationRangeStart<const Value>(value: PropertyInput<'animationRangeStart', T, Value>): this;
  animationRangeStart(value: PropertyValue<'animationRangeStart', T>): this {
    return this.write('animationRangeStart', value);
  }
  /**
   * 选择驱动动画的时间线，例如文档时间或滚动进度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  animationTimeline(value: KeywordInput<'animationTimeline', T>): this;
  /**
   * 选择驱动动画的时间线，例如文档时间或滚动进度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  animationTimeline<const Value>(value: PropertyInput<'animationTimeline', T, Value>): this;
  animationTimeline(value: PropertyValue<'animationTimeline', T>): this {
    return this.write('animationTimeline', value);
  }
  /**
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  animationTimingFunction(value: KeywordInput<'animationTimingFunction', T>): this;
  /**
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  animationTimingFunction<const Value>(
    value: PropertyInput<'animationTimingFunction', T, Value>,
  ): this;
  animationTimingFunction(value: PropertyValue<'animationTimingFunction', T>): this {
    return this.write('animationTimingFunction', value);
  }
  /**
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  backfaceVisibility(value: KeywordInput<'backfaceVisibility', T>): this;
  /**
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  backfaceVisibility<const Value>(value: PropertyInput<'backfaceVisibility', T, Value>): this;
  backfaceVisibility(value: PropertyValue<'backfaceVisibility', T>): this {
    return this.write('backfaceVisibility', value);
  }
  /**
   * 集中设置运动路径、起始位置、距离、方向和锚点。
   *
   * @default:'offset-position: normal；offset-path: none；offset-distance: 0；offset-anchor: auto；offset-rotate: auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  offset(value: KeywordInput<'offset', T>): this;
  /**
   * 集中设置运动路径、起始位置、距离、方向和锚点。
   *
   * @default:'offset-position: normal；offset-path: none；offset-distance: 0；offset-anchor: auto；offset-rotate: auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  offset<const Value>(value: PropertyInput<'offset', T, Value>): this;
  offset(value: PropertyValue<'offset', T>): this {
    return this.write('offset', value);
  }
  /**
   * 设置元素沿运动路径移动时与路径相接的内部锚点。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  offsetAnchor(value: KeywordInput<'offsetAnchor', T>): this;
  /**
   * 设置元素沿运动路径移动时与路径相接的内部锚点。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  offsetAnchor<const Value>(value: PropertyInput<'offsetAnchor', T, Value>): this;
  offsetAnchor(value: PropertyValue<'offsetAnchor', T>): this {
    return this.write('offsetAnchor', value);
  }
  /**
   * 设置元素沿运动路径行进的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  offsetDistance(value: KeywordInput<'offsetDistance', T>): this;
  /**
   * 设置元素沿运动路径行进的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  offsetDistance<const Value>(value: PropertyInput<'offsetDistance', T, Value>): this;
  offsetDistance(value: PropertyValue<'offsetDistance', T>): this {
    return this.write('offsetDistance', value);
  }
  /**
   * 设置元素运动所沿用的路径。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  offsetPath(value: KeywordInput<'offsetPath', T>): this;
  /**
   * 设置元素运动所沿用的路径。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  offsetPath<const Value>(value: PropertyInput<'offsetPath', T, Value>): this;
  offsetPath(value: PropertyValue<'offsetPath', T>): this {
    return this.write('offsetPath', value);
  }
  /**
   * 设置运动路径的初始位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  offsetPosition(value: KeywordInput<'offsetPosition', T>): this;
  /**
   * 设置运动路径的初始位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  offsetPosition<const Value>(value: PropertyInput<'offsetPosition', T, Value>): this;
  offsetPosition(value: PropertyValue<'offsetPosition', T>): this {
    return this.write('offsetPosition', value);
  }
  /**
   * 设置元素沿运动路径移动时的方向和附加旋转。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  offsetRotate(value: KeywordInput<'offsetRotate', T>): this;
  /**
   * 设置元素沿运动路径移动时的方向和附加旋转。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  offsetRotate<const Value>(value: PropertyInput<'offsetRotate', T, Value>): this;
  offsetRotate(value: PropertyValue<'offsetRotate', T>): this {
    return this.write('offsetRotate', value);
  }
  /**
   * 设置路径旋转的旧名称；新代码使用 offset-rotate。
   *
   * @default:'auto'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotation
   */
  offsetRotation(value: KeywordInput<'offsetRotation', T>): this;
  /**
   * 设置路径旋转的旧名称；新代码使用 offset-rotate。
   *
   * @default:'auto'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotation
   */
  offsetRotation<const Value>(value: PropertyInput<'offsetRotation', T, Value>): this;
  offsetRotation(value: PropertyValue<'offsetRotation', T>): this {
    return this.write('offsetRotation', value);
  }
  /**
   * 设置观察子元素三维变换时的透视距离。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  perspective(value: KeywordInput<'perspective', T>): this;
  /**
   * 设置观察子元素三维变换时的透视距离。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  perspective<const Value>(value: PropertyInput<'perspective', T, Value>): this;
  perspective(value: PropertyValue<'perspective', T>): this {
    return this.write('perspective', value);
  }
  /**
   * 设置三维透视的观察原点。
   *
   * @default:'50% 50%'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  perspectiveOrigin(value: KeywordInput<'perspectiveOrigin', T>): this;
  /**
   * 设置三维透视的观察原点。
   *
   * @default:'50% 50%'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  perspectiveOrigin<const Value>(value: PropertyInput<'perspectiveOrigin', T, Value>): this;
  perspectiveOrigin(value: PropertyValue<'perspectiveOrigin', T>): this {
    return this.write('perspectiveOrigin', value);
  }
  /**
   * 独立设置元素旋转，不必重写 transform 中的其他变换。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  rotate(value: KeywordInput<'rotate', T>): this;
  /**
   * 独立设置元素旋转，不必重写 transform 中的其他变换。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  rotate<const Value>(value: PropertyInput<'rotate', T, Value>): this;
  rotate(value: PropertyValue<'rotate', T>): this {
    return this.write('rotate', value);
  }
  /**
   * 独立设置元素的缩放比例。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  scale(value: KeywordInput<'scale', T>): this;
  /**
   * 独立设置元素的缩放比例。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  scale<const Value>(value: PropertyInput<'scale', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
   */
  transform(value: KeywordInput<'transform', T>): this;
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
  transform<const Value>(value: PropertyInput<'transform', T, Value>): this;
  transform(value: PropertyValue<'transform', T>): this {
    return this.write('transform', value);
  }
  /**
   * 设置变换及其原点所依据的参照盒。
   *
   * @default:'view-box'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  transformBox(value: KeywordInput<'transformBox', T>): this;
  /**
   * 设置变换及其原点所依据的参照盒。
   *
   * @default:'view-box'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  transformBox<const Value>(value: PropertyInput<'transformBox', T, Value>): this;
  transformBox(value: PropertyValue<'transformBox', T>): this {
    return this.write('transformBox', value);
  }
  /**
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  transformOrigin(value: KeywordInput<'transformOrigin', T>): this;
  /**
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  transformOrigin<const Value>(value: PropertyInput<'transformOrigin', T, Value>): this;
  transformOrigin(value: PropertyValue<'transformOrigin', T>): this {
    return this.write('transformOrigin', value);
  }
  /**
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * @default:'flat'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  transformStyle(value: KeywordInput<'transformStyle', T>): this;
  /**
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * @default:'flat'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  transformStyle<const Value>(value: PropertyInput<'transformStyle', T, Value>): this;
  transformStyle(value: PropertyValue<'transformStyle', T>): this {
    return this.write('transformStyle', value);
  }
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
  transition(value: KeywordInput<'transition', T>): this;
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
  transition<const Value>(value: PropertyInput<'transition', T, Value>): this;
  transition(value: PropertyValue<'transition', T>): this {
    return this.write('transition', value);
  }
  /**
   * 控制离散属性是否可以启动 CSS 过渡。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  transitionBehavior(value: KeywordInput<'transitionBehavior', T>): this;
  /**
   * 控制离散属性是否可以启动 CSS 过渡。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  transitionBehavior<const Value>(value: PropertyInput<'transitionBehavior', T, Value>): this;
  transitionBehavior(value: PropertyValue<'transitionBehavior', T>): this {
    return this.write('transitionBehavior', value);
  }
  /**
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  transitionDelay(value: KeywordInput<'transitionDelay', T>): this;
  /**
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  transitionDelay<const Value>(value: PropertyInput<'transitionDelay', T, Value>): this;
  transitionDelay(value: PropertyValue<'transitionDelay', T>): this {
    return this.write('transitionDelay', value);
  }
  /**
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  transitionDuration(value: KeywordInput<'transitionDuration', T>): this;
  /**
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  transitionDuration<const Value>(value: PropertyInput<'transitionDuration', T, Value>): this;
  transitionDuration(value: PropertyValue<'transitionDuration', T>): this {
    return this.write('transitionDuration', value);
  }
  /**
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  transitionProperty(value: KeywordInput<'transitionProperty', T>): this;
  /**
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  transitionProperty<const Value>(value: PropertyInput<'transitionProperty', T, Value>): this;
  transitionProperty(value: PropertyValue<'transitionProperty', T>): this {
    return this.write('transitionProperty', value);
  }
  /**
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  transitionTimingFunction(value: KeywordInput<'transitionTimingFunction', T>): this;
  /**
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  transitionTimingFunction<const Value>(
    value: PropertyInput<'transitionTimingFunction', T, Value>,
  ): this;
  transitionTimingFunction(value: PropertyValue<'transitionTimingFunction', T>): this {
    return this.write('transitionTimingFunction', value);
  }
  /**
   * 独立设置元素在二维或三维空间中的平移。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  translate(value: KeywordInput<'translate', T>): this;
  /**
   * 独立设置元素在二维或三维空间中的平移。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  translate<const Value>(value: PropertyInput<'translate', T, Value>): this;
  translate(value: PropertyValue<'translate', T>): this {
    return this.write('translate', value);
  }
  /**
   * 为视图过渡的快照伪元素分组，以便共用样式。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  viewTransitionClass(value: KeywordInput<'viewTransitionClass', T>): this;
  /**
   * 为视图过渡的快照伪元素分组，以便共用样式。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  viewTransitionClass<const Value>(value: PropertyInput<'viewTransitionClass', T, Value>): this;
  viewTransitionClass(value: PropertyValue<'viewTransitionClass', T>): this {
    return this.write('viewTransitionClass', value);
  }
  /**
   * 为视图过渡中的元素命名，以匹配前后状态的快照。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  viewTransitionName(value: KeywordInput<'viewTransitionName', T>): this;
  /**
   * 为视图过渡中的元素命名，以匹配前后状态的快照。
   *
   * @default:'none'
   * @extend:'否'
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  viewTransitionName<const Value>(value: PropertyInput<'viewTransitionName', T, Value>): this;
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
   * @default:'visible'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  overflow(value: KeywordInput<'overflow', T>): this;
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
  overflow<const Value>(value: PropertyInput<'overflow', T, Value>): this;
  overflow(value: PropertyValue<'overflow', T>): this {
    return this.write('overflow', value);
  }
  /**
   * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  overflowAnchor(value: KeywordInput<'overflowAnchor', T>): this;
  /**
   * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  overflowAnchor<const Value>(value: PropertyInput<'overflowAnchor', T, Value>): this;
  overflowAnchor(value: PropertyValue<'overflowAnchor', T>): this {
    return this.write('overflowAnchor', value);
  }
  /**
   * 设置逻辑块轴上的溢出行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  overflowBlock(value: KeywordInput<'overflowBlock', T>): this;
  /**
   * 设置逻辑块轴上的溢出行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  overflowBlock<const Value>(value: PropertyInput<'overflowBlock', T, Value>): this;
  overflowBlock(value: PropertyValue<'overflowBlock', T>): this {
    return this.write('overflowBlock', value);
  }
  /**
   * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。
   *
   * @default:'padding-box'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  overflowClipBox(value: KeywordInput<'overflowClipBox', T>): this;
  /**
   * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。
   *
   * @default:'padding-box'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  overflowClipBox<const Value>(value: PropertyInput<'overflowClipBox', T, Value>): this;
  overflowClipBox(value: PropertyValue<'overflowClipBox', T>): this {
    return this.write('overflowClipBox', value);
  }
  /**
   * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。
   *
   * @default:'0px'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  overflowClipMargin(value: KeywordInput<'overflowClipMargin', T>): this;
  /**
   * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。
   *
   * @default:'0px'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  overflowClipMargin<const Value>(value: PropertyInput<'overflowClipMargin', T, Value>): this;
  overflowClipMargin(value: PropertyValue<'overflowClipMargin', T>): this {
    return this.write('overflowClipMargin', value);
  }
  /**
   * 设置逻辑行内轴上的溢出行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  overflowInline(value: KeywordInput<'overflowInline', T>): this;
  /**
   * 设置逻辑行内轴上的溢出行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  overflowInline<const Value>(value: PropertyInput<'overflowInline', T, Value>): this;
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
   * @default:'normal'
   * @extend:'是'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  overflowWrap(value: KeywordInput<'overflowWrap', T>): this;
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
  overflowWrap<const Value>(value: PropertyInput<'overflowWrap', T, Value>): this;
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
   * @default:'visible'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  overflowX(value: KeywordInput<'overflowX', T>): this;
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
  overflowX<const Value>(value: PropertyInput<'overflowX', T, Value>): this;
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
   * @default:'visible'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  overflowY(value: KeywordInput<'overflowY', T>): this;
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
  overflowY<const Value>(value: PropertyInput<'overflowY', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
   */
  overscrollBehavior(value: KeywordInput<'overscrollBehavior', T>): this;
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
  overscrollBehavior<const Value>(value: PropertyInput<'overscrollBehavior', T, Value>): this;
  overscrollBehavior(value: PropertyValue<'overscrollBehavior', T>): this {
    return this.write('overscrollBehavior', value);
  }
  /**
   * 控制逻辑块轴上到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  overscrollBehaviorBlock(value: KeywordInput<'overscrollBehaviorBlock', T>): this;
  /**
   * 控制逻辑块轴上到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  overscrollBehaviorBlock<const Value>(
    value: PropertyInput<'overscrollBehaviorBlock', T, Value>,
  ): this;
  overscrollBehaviorBlock(value: PropertyValue<'overscrollBehaviorBlock', T>): this {
    return this.write('overscrollBehaviorBlock', value);
  }
  /**
   * 控制逻辑行内轴上到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  overscrollBehaviorInline(value: KeywordInput<'overscrollBehaviorInline', T>): this;
  /**
   * 控制逻辑行内轴上到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  overscrollBehaviorInline<const Value>(
    value: PropertyInput<'overscrollBehaviorInline', T, Value>,
  ): this;
  overscrollBehaviorInline(value: PropertyValue<'overscrollBehaviorInline', T>): this {
    return this.write('overscrollBehaviorInline', value);
  }
  /**
   * 控制水平方向到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  overscrollBehaviorX(value: KeywordInput<'overscrollBehaviorX', T>): this;
  /**
   * 控制水平方向到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  overscrollBehaviorX<const Value>(value: PropertyInput<'overscrollBehaviorX', T, Value>): this;
  overscrollBehaviorX(value: PropertyValue<'overscrollBehaviorX', T>): this {
    return this.write('overscrollBehaviorX', value);
  }
  /**
   * 控制垂直方向到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  overscrollBehaviorY(value: KeywordInput<'overscrollBehaviorY', T>): this;
  /**
   * 控制垂直方向到达滚动边界后的行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  overscrollBehaviorY<const Value>(value: PropertyInput<'overscrollBehaviorY', T, Value>): this;
  overscrollBehaviorY(value: PropertyValue<'overscrollBehaviorY', T>): this {
    return this.write('overscrollBehaviorY', value);
  }
  /**
   * 设置滚动条滑块和轨道的颜色。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  scrollbarColor(value: KeywordInput<'scrollbarColor', T>): this;
  /**
   * 设置滚动条滑块和轨道的颜色。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  scrollbarColor<const Value>(value: PropertyInput<'scrollbarColor', T, Value>): this;
  scrollbarColor(value: PropertyValue<'scrollbarColor', T>): this {
    return this.write('scrollbarColor', value);
  }
  /**
   * 设置是否预留滚动条槽位，以减少滚动条出现时的布局变化。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  scrollbarGutter(value: KeywordInput<'scrollbarGutter', T>): this;
  /**
   * 设置是否预留滚动条槽位，以减少滚动条出现时的布局变化。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  scrollbarGutter<const Value>(value: PropertyInput<'scrollbarGutter', T, Value>): this;
  scrollbarGutter(value: PropertyValue<'scrollbarGutter', T>): this {
    return this.write('scrollbarGutter', value);
  }
  /**
   * 设置滚动条采用正常、较细或隐藏的外观。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  scrollbarWidth(value: KeywordInput<'scrollbarWidth', T>): this;
  /**
   * 设置滚动条采用正常、较细或隐藏的外观。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  scrollbarWidth<const Value>(value: PropertyInput<'scrollbarWidth', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  scrollBehavior(value: KeywordInput<'scrollBehavior', T>): this;
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
  scrollBehavior<const Value>(value: PropertyInput<'scrollBehavior', T, Value>): this;
  scrollBehavior(value: PropertyValue<'scrollBehavior', T>): this {
    return this.write('scrollBehavior', value);
  }
  /**
   * 将元素声明为祖先滚动容器首次呈现时的候选滚动吸附目标。
   *
   * @default:'none'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  scrollInitialTarget(value: KeywordInput<'scrollInitialTarget', T>): this;
  /**
   * 将元素声明为祖先滚动容器首次呈现时的候选滚动吸附目标。
   *
   * @default:'none'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  scrollInitialTarget<const Value>(value: PropertyInput<'scrollInitialTarget', T, Value>): this;
  scrollInitialTarget(value: PropertyValue<'scrollInitialTarget', T>): this {
    return this.write('scrollInitialTarget', value);
  }
  /**
   * 设置元素滚动目标区域的四边外扩距离，不改变普通布局外边距。
   *
   * @default:'scroll-margin-bottom: 0；scroll-margin-left: 0；scroll-margin-right: 0；scroll-margin-top: 0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  scrollMargin(value: KeywordInput<'scrollMargin', T>): this;
  /**
   * 设置元素滚动目标区域的四边外扩距离，不改变普通布局外边距。
   *
   * @default:'scroll-margin-bottom: 0；scroll-margin-left: 0；scroll-margin-right: 0；scroll-margin-top: 0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  scrollMargin<const Value>(value: PropertyInput<'scrollMargin', T, Value>): this;
  scrollMargin(value: PropertyValue<'scrollMargin', T>): this {
    return this.write('scrollMargin', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴两侧的外扩距离。
   *
   * @default:'scroll-margin-block-start: 0；scroll-margin-block-end: 0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  scrollMarginBlock(value: KeywordInput<'scrollMarginBlock', T>): this;
  /**
   * 设置滚动目标区域在逻辑块轴两侧的外扩距离。
   *
   * @default:'scroll-margin-block-start: 0；scroll-margin-block-end: 0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  scrollMarginBlock<const Value>(value: PropertyInput<'scrollMarginBlock', T, Value>): this;
  scrollMarginBlock(value: PropertyValue<'scrollMarginBlock', T>): this {
    return this.write('scrollMarginBlock', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴结束侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  scrollMarginBlockEnd(value: KeywordInput<'scrollMarginBlockEnd', T>): this;
  /**
   * 设置滚动目标区域在逻辑块轴结束侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  scrollMarginBlockEnd<const Value>(value: PropertyInput<'scrollMarginBlockEnd', T, Value>): this;
  scrollMarginBlockEnd(value: PropertyValue<'scrollMarginBlockEnd', T>): this {
    return this.write('scrollMarginBlockEnd', value);
  }
  /**
   * 设置滚动目标区域在逻辑块轴起始侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  scrollMarginBlockStart(value: KeywordInput<'scrollMarginBlockStart', T>): this;
  /**
   * 设置滚动目标区域在逻辑块轴起始侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  scrollMarginBlockStart<const Value>(
    value: PropertyInput<'scrollMarginBlockStart', T, Value>,
  ): this;
  scrollMarginBlockStart(value: PropertyValue<'scrollMarginBlockStart', T>): this {
    return this.write('scrollMarginBlockStart', value);
  }
  /**
   * 设置滚动目标区域下侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  scrollMarginBottom(value: KeywordInput<'scrollMarginBottom', T>): this;
  /**
   * 设置滚动目标区域下侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  scrollMarginBottom<const Value>(value: PropertyInput<'scrollMarginBottom', T, Value>): this;
  scrollMarginBottom(value: PropertyValue<'scrollMarginBottom', T>): this {
    return this.write('scrollMarginBottom', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴两侧的外扩距离。
   *
   * @default:'scroll-margin-inline-start: 0；scroll-margin-inline-end: 0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  scrollMarginInline(value: KeywordInput<'scrollMarginInline', T>): this;
  /**
   * 设置滚动目标区域在逻辑行内轴两侧的外扩距离。
   *
   * @default:'scroll-margin-inline-start: 0；scroll-margin-inline-end: 0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  scrollMarginInline<const Value>(value: PropertyInput<'scrollMarginInline', T, Value>): this;
  scrollMarginInline(value: PropertyValue<'scrollMarginInline', T>): this {
    return this.write('scrollMarginInline', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴结束侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  scrollMarginInlineEnd(value: KeywordInput<'scrollMarginInlineEnd', T>): this;
  /**
   * 设置滚动目标区域在逻辑行内轴结束侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  scrollMarginInlineEnd<const Value>(value: PropertyInput<'scrollMarginInlineEnd', T, Value>): this;
  scrollMarginInlineEnd(value: PropertyValue<'scrollMarginInlineEnd', T>): this {
    return this.write('scrollMarginInlineEnd', value);
  }
  /**
   * 设置滚动目标区域在逻辑行内轴起始侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  scrollMarginInlineStart(value: KeywordInput<'scrollMarginInlineStart', T>): this;
  /**
   * 设置滚动目标区域在逻辑行内轴起始侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  scrollMarginInlineStart<const Value>(
    value: PropertyInput<'scrollMarginInlineStart', T, Value>,
  ): this;
  scrollMarginInlineStart(value: PropertyValue<'scrollMarginInlineStart', T>): this {
    return this.write('scrollMarginInlineStart', value);
  }
  /**
   * 设置滚动目标区域左侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  scrollMarginLeft(value: KeywordInput<'scrollMarginLeft', T>): this;
  /**
   * 设置滚动目标区域左侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  scrollMarginLeft<const Value>(value: PropertyInput<'scrollMarginLeft', T, Value>): this;
  scrollMarginLeft(value: PropertyValue<'scrollMarginLeft', T>): this {
    return this.write('scrollMarginLeft', value);
  }
  /**
   * 设置滚动目标区域右侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  scrollMarginRight(value: KeywordInput<'scrollMarginRight', T>): this;
  /**
   * 设置滚动目标区域右侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  scrollMarginRight<const Value>(value: PropertyInput<'scrollMarginRight', T, Value>): this;
  scrollMarginRight(value: PropertyValue<'scrollMarginRight', T>): this {
    return this.write('scrollMarginRight', value);
  }
  /**
   * 设置滚动目标区域上侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  scrollMarginTop(value: KeywordInput<'scrollMarginTop', T>): this;
  /**
   * 设置滚动目标区域上侧的外扩距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  scrollMarginTop<const Value>(value: PropertyInput<'scrollMarginTop', T, Value>): this;
  scrollMarginTop(value: PropertyValue<'scrollMarginTop', T>): this {
    return this.write('scrollMarginTop', value);
  }
  /**
   * 设置滚动容器最佳可视区域的四边内缩距离。
   *
   * @default:'scroll-padding-bottom: auto；scroll-padding-left: auto；scroll-padding-right: auto；scroll-padding-top: auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  scrollPadding(value: KeywordInput<'scrollPadding', T>): this;
  /**
   * 设置滚动容器最佳可视区域的四边内缩距离。
   *
   * @default:'scroll-padding-bottom: auto；scroll-padding-left: auto；scroll-padding-right: auto；scroll-padding-top: auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  scrollPadding<const Value>(value: PropertyInput<'scrollPadding', T, Value>): this;
  scrollPadding(value: PropertyValue<'scrollPadding', T>): this {
    return this.write('scrollPadding', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴两侧的内缩距离。
   *
   * @default:'scroll-padding-block-start: auto；scroll-padding-block-end: auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  scrollPaddingBlock(value: KeywordInput<'scrollPaddingBlock', T>): this;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴两侧的内缩距离。
   *
   * @default:'scroll-padding-block-start: auto；scroll-padding-block-end: auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  scrollPaddingBlock<const Value>(value: PropertyInput<'scrollPaddingBlock', T, Value>): this;
  scrollPaddingBlock(value: PropertyValue<'scrollPaddingBlock', T>): this {
    return this.write('scrollPaddingBlock', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴结束侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  scrollPaddingBlockEnd(value: KeywordInput<'scrollPaddingBlockEnd', T>): this;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴结束侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  scrollPaddingBlockEnd<const Value>(value: PropertyInput<'scrollPaddingBlockEnd', T, Value>): this;
  scrollPaddingBlockEnd(value: PropertyValue<'scrollPaddingBlockEnd', T>): this {
    return this.write('scrollPaddingBlockEnd', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴起始侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  scrollPaddingBlockStart(value: KeywordInput<'scrollPaddingBlockStart', T>): this;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴起始侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  scrollPaddingBlockStart<const Value>(
    value: PropertyInput<'scrollPaddingBlockStart', T, Value>,
  ): this;
  scrollPaddingBlockStart(value: PropertyValue<'scrollPaddingBlockStart', T>): this {
    return this.write('scrollPaddingBlockStart', value);
  }
  /**
   * 设置滚动容器最佳可视区域下侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  scrollPaddingBottom(value: KeywordInput<'scrollPaddingBottom', T>): this;
  /**
   * 设置滚动容器最佳可视区域下侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  scrollPaddingBottom<const Value>(value: PropertyInput<'scrollPaddingBottom', T, Value>): this;
  scrollPaddingBottom(value: PropertyValue<'scrollPaddingBottom', T>): this {
    return this.write('scrollPaddingBottom', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴两侧的内缩距离。
   *
   * @default:'scroll-padding-inline-start: auto；scroll-padding-inline-end: auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  scrollPaddingInline(value: KeywordInput<'scrollPaddingInline', T>): this;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴两侧的内缩距离。
   *
   * @default:'scroll-padding-inline-start: auto；scroll-padding-inline-end: auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  scrollPaddingInline<const Value>(value: PropertyInput<'scrollPaddingInline', T, Value>): this;
  scrollPaddingInline(value: PropertyValue<'scrollPaddingInline', T>): this {
    return this.write('scrollPaddingInline', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴结束侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd(value: KeywordInput<'scrollPaddingInlineEnd', T>): this;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴结束侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd<const Value>(
    value: PropertyInput<'scrollPaddingInlineEnd', T, Value>,
  ): this;
  scrollPaddingInlineEnd(value: PropertyValue<'scrollPaddingInlineEnd', T>): this {
    return this.write('scrollPaddingInlineEnd', value);
  }
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴起始侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  scrollPaddingInlineStart(value: KeywordInput<'scrollPaddingInlineStart', T>): this;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴起始侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  scrollPaddingInlineStart<const Value>(
    value: PropertyInput<'scrollPaddingInlineStart', T, Value>,
  ): this;
  scrollPaddingInlineStart(value: PropertyValue<'scrollPaddingInlineStart', T>): this {
    return this.write('scrollPaddingInlineStart', value);
  }
  /**
   * 设置滚动容器最佳可视区域左侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  scrollPaddingLeft(value: KeywordInput<'scrollPaddingLeft', T>): this;
  /**
   * 设置滚动容器最佳可视区域左侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  scrollPaddingLeft<const Value>(value: PropertyInput<'scrollPaddingLeft', T, Value>): this;
  scrollPaddingLeft(value: PropertyValue<'scrollPaddingLeft', T>): this {
    return this.write('scrollPaddingLeft', value);
  }
  /**
   * 设置滚动容器最佳可视区域右侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  scrollPaddingRight(value: KeywordInput<'scrollPaddingRight', T>): this;
  /**
   * 设置滚动容器最佳可视区域右侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  scrollPaddingRight<const Value>(value: PropertyInput<'scrollPaddingRight', T, Value>): this;
  scrollPaddingRight(value: PropertyValue<'scrollPaddingRight', T>): this {
    return this.write('scrollPaddingRight', value);
  }
  /**
   * 设置滚动容器最佳可视区域上侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  scrollPaddingTop(value: KeywordInput<'scrollPaddingTop', T>): this;
  /**
   * 设置滚动容器最佳可视区域上侧的内缩距离。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  scrollPaddingTop<const Value>(value: PropertyInput<'scrollPaddingTop', T, Value>): this;
  scrollPaddingTop(value: PropertyValue<'scrollPaddingTop', T>): this {
    return this.write('scrollPaddingTop', value);
  }
  /**
   * 设置元素作为滚动吸附目标时在块轴和行内轴上的对齐位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  scrollSnapAlign(value: KeywordInput<'scrollSnapAlign', T>): this;
  /**
   * 设置元素作为滚动吸附目标时在块轴和行内轴上的对齐位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  scrollSnapAlign<const Value>(value: PropertyInput<'scrollSnapAlign', T, Value>): this;
  scrollSnapAlign(value: PropertyValue<'scrollSnapAlign', T>): this {
    return this.write('scrollSnapAlign', value);
  }
  /**
   * 设置滚动吸附区域外扩的旧名称；新代码使用 scroll-margin。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin
   */
  scrollSnapMargin(value: KeywordInput<'scrollSnapMargin', T>): this;
  /**
   * 设置滚动吸附区域外扩的旧名称；新代码使用 scroll-margin。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin
   */
  scrollSnapMargin<const Value>(value: PropertyInput<'scrollSnapMargin', T, Value>): this;
  scrollSnapMargin(value: PropertyValue<'scrollSnapMargin', T>): this {
    return this.write('scrollSnapMargin', value);
  }
  /**
   * 设置滚动吸附区域下侧外扩的旧名称；新代码使用 scroll-margin-bottom。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-bottom
   */
  scrollSnapMarginBottom(value: KeywordInput<'scrollSnapMarginBottom', T>): this;
  /**
   * 设置滚动吸附区域下侧外扩的旧名称；新代码使用 scroll-margin-bottom。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-bottom
   */
  scrollSnapMarginBottom<const Value>(
    value: PropertyInput<'scrollSnapMarginBottom', T, Value>,
  ): this;
  scrollSnapMarginBottom(value: PropertyValue<'scrollSnapMarginBottom', T>): this {
    return this.write('scrollSnapMarginBottom', value);
  }
  /**
   * 设置滚动吸附区域左侧外扩的旧名称；新代码使用 scroll-margin-left。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-left
   */
  scrollSnapMarginLeft(value: KeywordInput<'scrollSnapMarginLeft', T>): this;
  /**
   * 设置滚动吸附区域左侧外扩的旧名称；新代码使用 scroll-margin-left。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-left
   */
  scrollSnapMarginLeft<const Value>(value: PropertyInput<'scrollSnapMarginLeft', T, Value>): this;
  scrollSnapMarginLeft(value: PropertyValue<'scrollSnapMarginLeft', T>): this {
    return this.write('scrollSnapMarginLeft', value);
  }
  /**
   * 设置滚动吸附区域右侧外扩的旧名称；新代码使用 scroll-margin-right。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-right
   */
  scrollSnapMarginRight(value: KeywordInput<'scrollSnapMarginRight', T>): this;
  /**
   * 设置滚动吸附区域右侧外扩的旧名称；新代码使用 scroll-margin-right。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-right
   */
  scrollSnapMarginRight<const Value>(value: PropertyInput<'scrollSnapMarginRight', T, Value>): this;
  scrollSnapMarginRight(value: PropertyValue<'scrollSnapMarginRight', T>): this {
    return this.write('scrollSnapMarginRight', value);
  }
  /**
   * 设置滚动吸附区域上侧外扩的旧名称；新代码使用 scroll-margin-top。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-top
   */
  scrollSnapMarginTop(value: KeywordInput<'scrollSnapMarginTop', T>): this;
  /**
   * 设置滚动吸附区域上侧外扩的旧名称；新代码使用 scroll-margin-top。
   *
   * @default:'0'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-top
   */
  scrollSnapMarginTop<const Value>(value: PropertyInput<'scrollSnapMarginTop', T, Value>): this;
  scrollSnapMarginTop(value: PropertyValue<'scrollSnapMarginTop', T>): this {
    return this.write('scrollSnapMarginTop', value);
  }
  /**
   * 设置滚动时是否允许越过该元素的吸附位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  scrollSnapStop(value: KeywordInput<'scrollSnapStop', T>): this;
  /**
   * 设置滚动时是否允许越过该元素的吸附位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  scrollSnapStop<const Value>(value: PropertyInput<'scrollSnapStop', T, Value>): this;
  scrollSnapStop(value: PropertyValue<'scrollSnapStop', T>): this {
    return this.write('scrollSnapStop', value);
  }
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
  scrollSnapType(value: KeywordInput<'scrollSnapType', T>): this;
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
  scrollSnapType<const Value>(value: PropertyInput<'scrollSnapType', T, Value>): this;
  scrollSnapType(value: PropertyValue<'scrollSnapType', T>): this {
    return this.write('scrollSnapType', value);
  }
  /**
   * 同时声明滚动进度时间线的名称和轴。
   *
   * @default:'scroll-timeline-name: none；scroll-timeline-axis: block'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  scrollTimeline(value: KeywordInput<'scrollTimeline', T>): this;
  /**
   * 同时声明滚动进度时间线的名称和轴。
   *
   * @default:'scroll-timeline-name: none；scroll-timeline-axis: block'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  scrollTimeline<const Value>(value: PropertyInput<'scrollTimeline', T, Value>): this;
  scrollTimeline(value: PropertyValue<'scrollTimeline', T>): this {
    return this.write('scrollTimeline', value);
  }
  /**
   * 设置滚动进度时间线所观察的滚动轴。
   *
   * @default:'block'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  scrollTimelineAxis(value: KeywordInput<'scrollTimelineAxis', T>): this;
  /**
   * 设置滚动进度时间线所观察的滚动轴。
   *
   * @default:'block'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  scrollTimelineAxis<const Value>(value: PropertyInput<'scrollTimelineAxis', T, Value>): this;
  scrollTimelineAxis(value: PropertyValue<'scrollTimelineAxis', T>): this {
    return this.write('scrollTimelineAxis', value);
  }
  /**
   * 声明基于当前容器滚动进度的时间线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  scrollTimelineName(value: KeywordInput<'scrollTimelineName', T>): this;
  /**
   * 声明基于当前容器滚动进度的时间线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  scrollTimelineName<const Value>(value: PropertyInput<'scrollTimelineName', T, Value>): this;
  scrollTimelineName(value: PropertyValue<'scrollTimelineName', T>): this {
    return this.write('scrollTimelineName', value);
  }
  /**
   * 控制元素是否采用平台原生控件外观。
   *
   * @default:'none'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  appearance(value: KeywordInput<'appearance', T>): this;
  /**
   * 控制元素是否采用平台原生控件外观。
   *
   * @default:'none'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  appearance<const Value>(value: PropertyInput<'appearance', T, Value>): this;
  appearance(value: PropertyValue<'appearance', T>): this {
    return this.write('appearance', value);
  }
  /**
   * 集中设置文本插入光标的颜色和形状。
   *
   * @default:'caret-color: auto；caret-animation: auto；caret-shape: auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  caret(value: KeywordInput<'caret', T>): this;
  /**
   * 集中设置文本插入光标的颜色和形状。
   *
   * @default:'caret-color: auto；caret-animation: auto；caret-shape: auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  caret<const Value>(value: PropertyInput<'caret', T, Value>): this;
  caret(value: PropertyValue<'caret', T>): this {
    return this.write('caret', value);
  }
  /**
   * 设置文本插入光标的形状。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  caretShape(value: KeywordInput<'caretShape', T>): this;
  /**
   * 设置文本插入光标的形状。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  caretShape<const Value>(value: PropertyInput<'caretShape', T, Value>): this;
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
   * @default:'visible'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
   */
  contentVisibility(value: KeywordInput<'contentVisibility', T>): this;
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
  contentVisibility<const Value>(value: PropertyInput<'contentVisibility', T, Value>): this;
  contentVisibility(value: PropertyValue<'contentVisibility', T>): this {
    return this.write('contentVisibility', value);
  }
  /**
   * 设置指针位于元素上方时显示的光标。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  cursor(value: KeywordInput<'cursor', T>): this;
  /**
   * 设置指针位于元素上方时显示的光标。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  cursor<const Value>(value: PropertyInput<'cursor', T, Value>): this;
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
   * @default:'auto'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  pointerEvents(value: KeywordInput<'pointerEvents', T>): this;
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
  pointerEvents<const Value>(value: PropertyInput<'pointerEvents', T, Value>): this;
  pointerEvents(value: PropertyValue<'pointerEvents', T>): this {
    return this.write('pointerEvents', value);
  }
  /**
   * 设置用户是否能调整元素尺寸以及可调整的方向。
   *
   * @default:'none'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  resize(value: KeywordInput<'resize', T>): this;
  /**
   * 设置用户是否能调整元素尺寸以及可调整的方向。
   *
   * @default:'none'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  resize<const Value>(value: PropertyInput<'resize', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  touchAction(value: KeywordInput<'touchAction', T>): this;
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
  touchAction<const Value>(value: PropertyInput<'touchAction', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  userSelect(value: KeywordInput<'userSelect', T>): this;
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
  userSelect<const Value>(value: PropertyInput<'userSelect', T, Value>): this;
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
   * @default:'visible'
   * @extend:'是'
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
   */
  visibility(value: KeywordInput<'visibility', T>): this;
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
  visibility<const Value>(value: PropertyInput<'visibility', T, Value>): this;
  visibility(value: PropertyValue<'visibility', T>): this {
    return this.write('visibility', value);
  }
  /**
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  breakAfter(value: KeywordInput<'breakAfter', T>): this;
  /**
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  breakAfter<const Value>(value: PropertyInput<'breakAfter', T, Value>): this;
  breakAfter(value: PropertyValue<'breakAfter', T>): this {
    return this.write('breakAfter', value);
  }
  /**
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  breakBefore(value: KeywordInput<'breakBefore', T>): this;
  /**
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  breakBefore<const Value>(value: PropertyInput<'breakBefore', T, Value>): this;
  breakBefore(value: PropertyValue<'breakBefore', T>): this {
    return this.write('breakBefore', value);
  }
  /**
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  breakInside(value: KeywordInput<'breakInside', T>): this;
  /**
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  breakInside<const Value>(value: PropertyInput<'breakInside', T, Value>): this;
  breakInside(value: PropertyValue<'breakInside', T>): this {
    return this.write('breakInside', value);
  }
  /**
   * 设置表格标题相对于表格的放置侧。
   *
   * @default:'top'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  captionSide(value: KeywordInput<'captionSide', T>): this;
  /**
   * 设置表格标题相对于表格的放置侧。
   *
   * @default:'top'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  captionSide<const Value>(value: PropertyInput<'captionSide', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  contain(value: KeywordInput<'contain', T>): this;
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
  contain<const Value>(value: PropertyInput<'contain', T, Value>): this;
  contain(value: PropertyValue<'contain', T>): this {
    return this.write('contain', value);
  }
  /**
   * 同时声明查询容器的名称和类型。
   *
   * @default:'container-name: none；container-type: normal'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  container(value: KeywordInput<'container', T>): this;
  /**
   * 同时声明查询容器的名称和类型。
   *
   * @default:'container-name: none；container-type: normal'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  container<const Value>(value: PropertyInput<'container', T, Value>): this;
  container(value: PropertyValue<'container', T>): this {
    return this.write('container', value);
  }
  /**
   * 为查询容器命名，供 @container 条件规则选择。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  containerName(value: KeywordInput<'containerName', T>): this;
  /**
   * 为查询容器命名，供 @container 条件规则选择。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  containerName<const Value>(value: PropertyInput<'containerName', T, Value>): this;
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
   * @default:'normal'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  containerType(value: KeywordInput<'containerType', T>): this;
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
  containerType<const Value>(value: PropertyInput<'containerType', T, Value>): this;
  containerType(value: PropertyValue<'containerType', T>): this {
    return this.write('containerType', value);
  }
  /**
   * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  containIntrinsicBlockSize(value: KeywordInput<'containIntrinsicBlockSize', T>): this;
  /**
   * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  containIntrinsicBlockSize<const Value>(
    value: PropertyInput<'containIntrinsicBlockSize', T, Value>,
  ): this;
  containIntrinsicBlockSize(value: PropertyValue<'containIntrinsicBlockSize', T>): this {
    return this.write('containIntrinsicBlockSize', value);
  }
  /**
   * 设置高度隔离或跳过内容渲染时使用的替代内部高度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  containIntrinsicHeight(value: KeywordInput<'containIntrinsicHeight', T>): this;
  /**
   * 设置高度隔离或跳过内容渲染时使用的替代内部高度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  containIntrinsicHeight<const Value>(
    value: PropertyInput<'containIntrinsicHeight', T, Value>,
  ): this;
  containIntrinsicHeight(value: PropertyValue<'containIntrinsicHeight', T>): this {
    return this.write('containIntrinsicHeight', value);
  }
  /**
   * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  containIntrinsicInlineSize(value: KeywordInput<'containIntrinsicInlineSize', T>): this;
  /**
   * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  containIntrinsicInlineSize<const Value>(
    value: PropertyInput<'containIntrinsicInlineSize', T, Value>,
  ): this;
  containIntrinsicInlineSize(value: PropertyValue<'containIntrinsicInlineSize', T>): this {
    return this.write('containIntrinsicInlineSize', value);
  }
  /**
   * 集中设置尺寸隔离时使用的替代内部宽高。
   *
   * @default:'contain-intrinsic-width: none；contain-intrinsic-height: none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  containIntrinsicSize(value: KeywordInput<'containIntrinsicSize', T>): this;
  /**
   * 集中设置尺寸隔离时使用的替代内部宽高。
   *
   * @default:'contain-intrinsic-width: none；contain-intrinsic-height: none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  containIntrinsicSize<const Value>(value: PropertyInput<'containIntrinsicSize', T, Value>): this;
  containIntrinsicSize(value: PropertyValue<'containIntrinsicSize', T>): this {
    return this.write('containIntrinsicSize', value);
  }
  /**
   * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  containIntrinsicWidth(value: KeywordInput<'containIntrinsicWidth', T>): this;
  /**
   * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  containIntrinsicWidth<const Value>(value: PropertyInput<'containIntrinsicWidth', T, Value>): this;
  containIntrinsicWidth(value: PropertyValue<'containIntrinsicWidth', T>): this {
    return this.write('containIntrinsicWidth', value);
  }
  /**
   * 设置生成内容、替换内容或伪元素的内容。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  content(value: KeywordInput<'content', T>): this;
  /**
   * 设置生成内容、替换内容或伪元素的内容。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  content<const Value>(value: PropertyInput<'content', T, Value>): this;
  content(value: PropertyValue<'content', T>): this {
    return this.write('content', value);
  }
  /**
   * 增加或减少指定 CSS 计数器的值。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  counterIncrement(value: KeywordInput<'counterIncrement', T>): this;
  /**
   * 增加或减少指定 CSS 计数器的值。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  counterIncrement<const Value>(value: PropertyInput<'counterIncrement', T, Value>): this;
  counterIncrement(value: PropertyValue<'counterIncrement', T>): this {
    return this.write('counterIncrement', value);
  }
  /**
   * 创建或重置 CSS 计数器。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  counterReset(value: KeywordInput<'counterReset', T>): this;
  /**
   * 创建或重置 CSS 计数器。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  counterReset<const Value>(value: PropertyInput<'counterReset', T, Value>): this;
  counterReset(value: PropertyValue<'counterReset', T>): this {
    return this.write('counterReset', value);
  }
  /**
   * 设置已有 CSS 计数器的值，必要时创建计数器。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  counterSet(value: KeywordInput<'counterSet', T>): this;
  /**
   * 设置已有 CSS 计数器的值，必要时创建计数器。
   *
   * @default:'none'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  counterSet<const Value>(value: PropertyInput<'counterSet', T, Value>): this;
  counterSet(value: PropertyValue<'counterSet', T>): this {
    return this.write('counterSet', value);
  }
  /**
   * 控制分离边框表格中空单元格的边框和背景是否绘制。
   *
   * @default:'show'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  emptyCells(value: KeywordInput<'emptyCells', T>): this;
  /**
   * 控制分离边框表格中空单元格的边框和背景是否绘制。
   *
   * @default:'show'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  emptyCells<const Value>(value: PropertyInput<'emptyCells', T, Value>): this;
  emptyCells(value: PropertyValue<'emptyCells', T>): this {
    return this.write('emptyCells', value);
  }
  /**
   * 集中设置列表标记的类型、图像和位置。
   *
   * @default:'list-style-type: disc；list-style-position: outside；list-style-image: none'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  listStyle(value: KeywordInput<'listStyle', T>): this;
  /**
   * 集中设置列表标记的类型、图像和位置。
   *
   * @default:'list-style-type: disc；list-style-position: outside；list-style-image: none'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  listStyle<const Value>(value: PropertyInput<'listStyle', T, Value>): this;
  listStyle(value: PropertyValue<'listStyle', T>): this {
    return this.write('listStyle', value);
  }
  /**
   * 设置用作列表标记的图像。
   *
   * @default:'none'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  listStyleImage(value: KeywordInput<'listStyleImage', T>): this;
  /**
   * 设置用作列表标记的图像。
   *
   * @default:'none'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  listStyleImage<const Value>(value: PropertyInput<'listStyleImage', T, Value>): this;
  listStyleImage(value: PropertyValue<'listStyleImage', T>): this {
    return this.write('listStyleImage', value);
  }
  /**
   * 设置列表标记位于主块盒内部还是外部。
   *
   * @default:'outside'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  listStylePosition(value: KeywordInput<'listStylePosition', T>): this;
  /**
   * 设置列表标记位于主块盒内部还是外部。
   *
   * @default:'outside'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  listStylePosition<const Value>(value: PropertyInput<'listStylePosition', T, Value>): this;
  listStylePosition(value: PropertyValue<'listStylePosition', T>): this {
    return this.write('listStylePosition', value);
  }
  /**
   * 设置列表标记或计数器的样式。
   *
   * @default:'disc'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  listStyleType(value: KeywordInput<'listStyleType', T>): this;
  /**
   * 设置列表标记或计数器的样式。
   *
   * @default:'disc'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  listStyleType<const Value>(value: PropertyInput<'listStyleType', T, Value>): this;
  listStyleType(value: PropertyValue<'listStyleType', T>): this {
    return this.write('listStyleType', value);
  }
  /**
   * 设置分页或分栏断点前需保留的最少行数。
   *
   * @default:'2'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  orphans(value: KeywordInput<'orphans', T>): this;
  /**
   * 设置分页或分栏断点前需保留的最少行数。
   *
   * @default:'2'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  orphans<const Value>(value: PropertyInput<'orphans', T, Value>): this;
  orphans(value: PropertyValue<'orphans', T>): this {
    return this.write('orphans', value);
  }
  /**
   * 选择分页媒体中使用的命名页面类型。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  page(value: KeywordInput<'page', T>): this;
  /**
   * 选择分页媒体中使用的命名页面类型。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  page<const Value>(value: PropertyInput<'page', T, Value>): this;
  page(value: PropertyValue<'page', T>): this {
    return this.write('page', value);
  }
  /**
   * 设置表格列宽采用自动还是固定布局算法。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  tableLayout(value: KeywordInput<'tableLayout', T>): this;
  /**
   * 设置表格列宽采用自动还是固定布局算法。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  tableLayout<const Value>(value: PropertyInput<'tableLayout', T, Value>): this;
  tableLayout(value: PropertyValue<'tableLayout', T>): this {
    return this.write('tableLayout', value);
  }
  /**
   * 设置分页或分栏断点后需保留的最少行数。
   *
   * @default:'2'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  widows(value: KeywordInput<'widows', T>): this;
  /**
   * 设置分页或分栏断点后需保留的最少行数。
   *
   * @default:'2'
   * @extend:'是'
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  widows<const Value>(value: PropertyInput<'widows', T, Value>): this;
  widows(value: PropertyValue<'widows', T>): this {
    return this.write('widows', value);
  }
  /**
   * 使 SVG 文本基线相对于其基准位置偏移。
   *
   * @default:'0'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  baselineShift(value: KeywordInput<'baselineShift', T>): this;
  /**
   * 使 SVG 文本基线相对于其基准位置偏移。
   *
   * @default:'0'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  baselineShift<const Value>(value: PropertyInput<'baselineShift', T, Value>): this;
  baselineShift(value: PropertyValue<'baselineShift', T>): this {
    return this.write('baselineShift', value);
  }
  /**
   * 选择 SVG 文本布局的主导基线及基线表。
   *
   * @default:'auto'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  dominantBaseline(value: KeywordInput<'dominantBaseline', T>): this;
  /**
   * 选择 SVG 文本布局的主导基线及基线表。
   *
   * @default:'auto'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  dominantBaseline<const Value>(value: PropertyInput<'dominantBaseline', T, Value>): this;
  dominantBaseline(value: PropertyValue<'dominantBaseline', T>): this {
    return this.write('dominantBaseline', value);
  }
  /**
   * 设置 SVG 图形内部的填充绘制方式。
   *
   * @default:'black'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  fill(value: KeywordInput<'fill', T>): this;
  /**
   * 设置 SVG 图形内部的填充绘制方式。
   *
   * @default:'black'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  fill<const Value>(value: PropertyInput<'fill', T, Value>): this;
  fill(value: PropertyValue<'fill', T>): this {
    return this.write('fill', value);
  }
  /**
   * 设置 SVG 填充的不透明度，不影响描边。
   *
   * @default:'1'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  fillOpacity(value: KeywordInput<'fillOpacity', T>): this;
  /**
   * 设置 SVG 填充的不透明度，不影响描边。
   *
   * @default:'1'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  fillOpacity<const Value>(value: PropertyInput<'fillOpacity', T, Value>): this;
  fillOpacity(value: PropertyValue<'fillOpacity', T>): this {
    return this.write('fillOpacity', value);
  }
  /**
   * 设置复杂 SVG 路径的内部区域判定规则。
   *
   * @default:'nonzero'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  fillRule(value: KeywordInput<'fillRule', T>): this;
  /**
   * 设置复杂 SVG 路径的内部区域判定规则。
   *
   * @default:'nonzero'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  fillRule<const Value>(value: PropertyInput<'fillRule', T, Value>): this;
  fillRule(value: PropertyValue<'fillRule', T>): this {
    return this.write('fillRule', value);
  }
  /**
   * 设置 SVG feFlood 或相关滤镜的洪泛颜色。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  floodColor(value: KeywordInput<'floodColor', T>): this;
  /**
   * 设置 SVG feFlood 或相关滤镜的洪泛颜色。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  floodColor<const Value>(value: PropertyInput<'floodColor', T, Value>): this;
  floodColor(value: PropertyValue<'floodColor', T>): this {
    return this.write('floodColor', value);
  }
  /**
   * 设置 SVG 洪泛滤镜颜色的不透明度。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  floodOpacity(value: KeywordInput<'floodOpacity', T>): this;
  /**
   * 设置 SVG 洪泛滤镜颜色的不透明度。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  floodOpacity<const Value>(value: PropertyInput<'floodOpacity', T, Value>): this;
  floodOpacity(value: PropertyValue<'floodOpacity', T>): this {
    return this.write('floodOpacity', value);
  }
  /**
   * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  glyphOrientationVertical(value: KeywordInput<'glyphOrientationVertical', T>): this;
  /**
   * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  glyphOrientationVertical<const Value>(
    value: PropertyInput<'glyphOrientationVertical', T, Value>,
  ): this;
  glyphOrientationVertical(value: PropertyValue<'glyphOrientationVertical', T>): this {
    return this.write('glyphOrientationVertical', value);
  }
  /**
   * 设置 SVG 光照滤镜使用的光源颜色。
   *
   * @default:'white'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  lightingColor(value: KeywordInput<'lightingColor', T>): this;
  /**
   * 设置 SVG 光照滤镜使用的光源颜色。
   *
   * @default:'white'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  lightingColor<const Value>(value: PropertyInput<'lightingColor', T, Value>): this;
  lightingColor(value: PropertyValue<'lightingColor', T>): this {
    return this.write('lightingColor', value);
  }
  /**
   * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。
   *
   * @default:'marker-start: none；marker-mid: none；marker-end: none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  marker(value: KeywordInput<'marker', T>): this;
  /**
   * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。
   *
   * @default:'marker-start: none；marker-mid: none；marker-end: none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  marker<const Value>(value: PropertyInput<'marker', T, Value>): this;
  marker(value: PropertyValue<'marker', T>): this {
    return this.write('marker', value);
  }
  /**
   * 设置 SVG 路径终点的标记图形。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  markerEnd(value: KeywordInput<'markerEnd', T>): this;
  /**
   * 设置 SVG 路径终点的标记图形。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  markerEnd<const Value>(value: PropertyInput<'markerEnd', T, Value>): this;
  markerEnd(value: PropertyValue<'markerEnd', T>): this {
    return this.write('markerEnd', value);
  }
  /**
   * 设置 SVG 路径中间顶点的标记图形。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  markerMid(value: KeywordInput<'markerMid', T>): this;
  /**
   * 设置 SVG 路径中间顶点的标记图形。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  markerMid<const Value>(value: PropertyInput<'markerMid', T, Value>): this;
  markerMid(value: PropertyValue<'markerMid', T>): this {
    return this.write('markerMid', value);
  }
  /**
   * 设置 SVG 路径起点的标记图形。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  markerStart(value: KeywordInput<'markerStart', T>): this;
  /**
   * 设置 SVG 路径起点的标记图形。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  markerStart<const Value>(value: PropertyInput<'markerStart', T, Value>): this;
  markerStart(value: PropertyValue<'markerStart', T>): this {
    return this.write('markerStart', value);
  }
  /**
   * 设置 SVG 填充、描边和标记的绘制先后顺序。
   *
   * @default:'normal'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  paintOrder(value: KeywordInput<'paintOrder', T>): this;
  /**
   * 设置 SVG 填充、描边和标记的绘制先后顺序。
   *
   * @default:'normal'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  paintOrder<const Value>(value: PropertyInput<'paintOrder', T, Value>): this;
  paintOrder(value: PropertyValue<'paintOrder', T>): this {
    return this.write('paintOrder', value);
  }
  /**
   * 设置 SVG 渐变 stop 节点的颜色。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  stopColor(value: KeywordInput<'stopColor', T>): this;
  /**
   * 设置 SVG 渐变 stop 节点的颜色。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  stopColor<const Value>(value: PropertyInput<'stopColor', T, Value>): this;
  stopColor(value: PropertyValue<'stopColor', T>): this {
    return this.write('stopColor', value);
  }
  /**
   * 设置 SVG 渐变 stop 节点的不透明度。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  stopOpacity(value: KeywordInput<'stopOpacity', T>): this;
  /**
   * 设置 SVG 渐变 stop 节点的不透明度。
   *
   * @default:'black'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  stopOpacity<const Value>(value: PropertyInput<'stopOpacity', T, Value>): this;
  stopOpacity(value: PropertyValue<'stopOpacity', T>): this {
    return this.write('stopOpacity', value);
  }
  /**
   * 设置 SVG 图形轮廓的描边绘制方式。
   *
   * @default:'stroke-dasharray: none；stroke-dashoffset: 0；stroke-linecap: butt；stroke-linejoin: miter；stroke-miterlimit: 4；stroke-opacity: 1；stroke-width: 1px'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  stroke(value: KeywordInput<'stroke', T>): this;
  /**
   * 设置 SVG 图形轮廓的描边绘制方式。
   *
   * @default:'stroke-dasharray: none；stroke-dashoffset: 0；stroke-linecap: butt；stroke-linejoin: miter；stroke-miterlimit: 4；stroke-opacity: 1；stroke-width: 1px'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  stroke<const Value>(value: PropertyInput<'stroke', T, Value>): this;
  stroke(value: PropertyValue<'stroke', T>): this {
    return this.write('stroke', value);
  }
  /**
   * 设置 SVG 描边虚线中线段与空隙的长度序列。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  strokeDasharray(value: KeywordInput<'strokeDasharray', T>): this;
  /**
   * 设置 SVG 描边虚线中线段与空隙的长度序列。
   *
   * @default:'none'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  strokeDasharray<const Value>(value: PropertyInput<'strokeDasharray', T, Value>): this;
  strokeDasharray(value: PropertyValue<'strokeDasharray', T>): this {
    return this.write('strokeDasharray', value);
  }
  /**
   * 设置 SVG 虚线描边相对于路径起点的偏移。
   *
   * @default:'0'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  strokeDashoffset(value: KeywordInput<'strokeDashoffset', T>): this;
  /**
   * 设置 SVG 虚线描边相对于路径起点的偏移。
   *
   * @default:'0'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  strokeDashoffset<const Value>(value: PropertyInput<'strokeDashoffset', T, Value>): this;
  strokeDashoffset(value: PropertyValue<'strokeDashoffset', T>): this {
    return this.write('strokeDashoffset', value);
  }
  /**
   * 设置开放 SVG 子路径端点的描边形状。
   *
   * @default:'butt'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  strokeLinecap(value: KeywordInput<'strokeLinecap', T>): this;
  /**
   * 设置开放 SVG 子路径端点的描边形状。
   *
   * @default:'butt'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  strokeLinecap<const Value>(value: PropertyInput<'strokeLinecap', T, Value>): this;
  strokeLinecap(value: PropertyValue<'strokeLinecap', T>): this {
    return this.write('strokeLinecap', value);
  }
  /**
   * 设置 SVG 路径转角处描边的连接形状。
   *
   * @default:'miter'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  strokeLinejoin(value: KeywordInput<'strokeLinejoin', T>): this;
  /**
   * 设置 SVG 路径转角处描边的连接形状。
   *
   * @default:'miter'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  strokeLinejoin<const Value>(value: PropertyInput<'strokeLinejoin', T, Value>): this;
  strokeLinejoin(value: PropertyValue<'strokeLinejoin', T>): this {
    return this.write('strokeLinejoin', value);
  }
  /**
   * 限制尖角连接的延伸比例，超过阈值时改变连接形状。
   *
   * @default:'4'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  strokeMiterlimit(value: KeywordInput<'strokeMiterlimit', T>): this;
  /**
   * 限制尖角连接的延伸比例，超过阈值时改变连接形状。
   *
   * @default:'4'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  strokeMiterlimit<const Value>(value: PropertyInput<'strokeMiterlimit', T, Value>): this;
  strokeMiterlimit(value: PropertyValue<'strokeMiterlimit', T>): this {
    return this.write('strokeMiterlimit', value);
  }
  /**
   * 设置 SVG 描边的不透明度，不影响填充。
   *
   * @default:'1'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  strokeOpacity(value: KeywordInput<'strokeOpacity', T>): this;
  /**
   * 设置 SVG 描边的不透明度，不影响填充。
   *
   * @default:'1'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  strokeOpacity<const Value>(value: PropertyInput<'strokeOpacity', T, Value>): this;
  strokeOpacity(value: PropertyValue<'strokeOpacity', T>): this {
    return this.write('strokeOpacity', value);
  }
  /**
   * 设置 SVG 描边宽度。
   *
   * @default:'1px'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  strokeWidth(value: KeywordInput<'strokeWidth', T>): this;
  /**
   * 设置 SVG 描边宽度。
   *
   * @default:'1px'
   * @extend:'是'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  strokeWidth<const Value>(value: PropertyInput<'strokeWidth', T, Value>): this;
  strokeWidth(value: PropertyValue<'strokeWidth', T>): this {
    return this.write('strokeWidth', value);
  }
  /**
   * 设置 SVG 图形变换时对描边等矢量效果的处理。
   *
   * @default:'none'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  vectorEffect(value: KeywordInput<'vectorEffect', T>): this;
  /**
   * 设置 SVG 图形变换时对描边等矢量效果的处理。
   *
   * @default:'none'
   * @extend:'否'
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  vectorEffect<const Value>(value: PropertyInput<'vectorEffect', T, Value>): this;
  vectorEffect(value: PropertyValue<'vectorEffect', T>): this {
    return this.write('vectorEffect', value);
  }
  /**
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * @default:'stretch'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  boxAlign(value: KeywordInput<'boxAlign', T>): this;
  /**
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * @default:'stretch'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  boxAlign<const Value>(value: PropertyInput<'boxAlign', T, Value>): this;
  boxAlign(value: PropertyValue<'boxAlign', T>): this {
    return this.write('boxAlign', value);
  }
  /**
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * @default:'normal'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-direction
   */
  boxDirection(value: KeywordInput<'boxDirection', T>): this;
  /**
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * @default:'normal'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-direction
   */
  boxDirection<const Value>(value: PropertyInput<'boxDirection', T, Value>): this;
  boxDirection(value: PropertyValue<'boxDirection', T>): this {
    return this.write('boxDirection', value);
  }
  /**
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex
   */
  boxFlex(value: KeywordInput<'boxFlex', T>): this;
  /**
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * @default:'0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex
   */
  boxFlex<const Value>(value: PropertyInput<'boxFlex', T, Value>): this;
  boxFlex(value: PropertyValue<'boxFlex', T>): this {
    return this.write('boxFlex', value);
  }
  /**
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex-group
   */
  boxFlexGroup(value: KeywordInput<'boxFlexGroup', T>): this;
  /**
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex-group
   */
  boxFlexGroup<const Value>(value: PropertyInput<'boxFlexGroup', T, Value>): this;
  boxFlexGroup(value: PropertyValue<'boxFlexGroup', T>): this {
    return this.write('boxFlexGroup', value);
  }
  /**
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * @default:'single'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  boxLines(value: KeywordInput<'boxLines', T>): this;
  /**
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * @default:'single'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  boxLines<const Value>(value: PropertyInput<'boxLines', T, Value>): this;
  boxLines(value: PropertyValue<'boxLines', T>): this {
    return this.write('boxLines', value);
  }
  /**
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-ordinal-group
   */
  boxOrdinalGroup(value: KeywordInput<'boxOrdinalGroup', T>): this;
  /**
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-ordinal-group
   */
  boxOrdinalGroup<const Value>(value: PropertyInput<'boxOrdinalGroup', T, Value>): this;
  boxOrdinalGroup(value: PropertyValue<'boxOrdinalGroup', T>): this {
    return this.write('boxOrdinalGroup', value);
  }
  /**
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * @default:'inline-axis'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  boxOrient(value: KeywordInput<'boxOrient', T>): this;
  /**
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * @default:'inline-axis'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  boxOrient<const Value>(value: PropertyInput<'boxOrient', T, Value>): this;
  boxOrient(value: PropertyValue<'boxOrient', T>): this {
    return this.write('boxOrient', value);
  }
  /**
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * @default:'start'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  boxPack(value: KeywordInput<'boxPack', T>): this;
  /**
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * @default:'start'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  boxPack<const Value>(value: PropertyInput<'boxPack', T, Value>): this;
  boxPack(value: PropertyValue<'boxPack', T>): this {
    return this.write('boxPack', value);
  }
  /**
   * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  clip(value: KeywordInput<'clip', T>): this;
  /**
   * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  clip<const Value>(value: PropertyInput<'clip', T, Value>): this;
  clip(value: PropertyValue<'clip', T>): this {
    return this.write('clip', value);
  }
  /**
   * 选择字体的宽窄字面；font-width 是其较新的名称。
   *
   * @default:'normal'
   * @extend:'是'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  fontStretch(value: KeywordInput<'fontStretch', T>): this;
  /**
   * 选择字体的宽窄字面；font-width 是其较新的名称。
   *
   * @default:'normal'
   * @extend:'是'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  fontStretch<const Value>(value: PropertyInput<'fontStretch', T, Value>): this;
  fontStretch(value: PropertyValue<'fontStretch', T>): this {
    return this.write('fontStretch', value);
  }
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
  gridColumnGap(value: KeywordInput<'gridColumnGap', T>): this;
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
  gridColumnGap<const Value>(value: PropertyInput<'gridColumnGap', T, Value>): this;
  gridColumnGap(value: PropertyValue<'gridColumnGap', T>): this {
    return this.write('gridColumnGap', value);
  }
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
  gridGap(value: KeywordInput<'gridGap', T>): this;
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
  gridGap<const Value>(value: PropertyInput<'gridGap', T, Value>): this;
  gridGap(value: PropertyValue<'gridGap', T>): this {
    return this.write('gridGap', value);
  }
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
  gridRowGap(value: KeywordInput<'gridRowGap', T>): this;
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
  gridRowGap<const Value>(value: PropertyInput<'gridRowGap', T, Value>): this;
  gridRowGap(value: PropertyValue<'gridRowGap', T>): this {
    return this.write('gridRowGap', value);
  }
  /**
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  imeMode(value: KeywordInput<'imeMode', T>): this;
  /**
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  imeMode<const Value>(value: PropertyInput<'imeMode', T, Value>): this;
  imeMode(value: PropertyValue<'imeMode', T>): this {
    return this.write('imeMode', value);
  }
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
  insetArea(value: KeywordInput<'insetArea', T>): this;
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
  insetArea<const Value>(value: PropertyInput<'insetArea', T, Value>): this;
  insetArea(value: PropertyValue<'insetArea', T>): this {
    return this.write('insetArea', value);
  }
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
  KhtmlBoxAlign(value: KeywordInput<'KhtmlBoxAlign', T>): this;
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
  KhtmlBoxAlign<const Value>(value: PropertyInput<'KhtmlBoxAlign', T, Value>): this;
  KhtmlBoxAlign(value: PropertyValue<'KhtmlBoxAlign', T>): this {
    return this.write('KhtmlBoxAlign', value);
  }
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
  KhtmlBoxDirection(value: KeywordInput<'KhtmlBoxDirection', T>): this;
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
  KhtmlBoxDirection<const Value>(value: PropertyInput<'KhtmlBoxDirection', T, Value>): this;
  KhtmlBoxDirection(value: PropertyValue<'KhtmlBoxDirection', T>): this {
    return this.write('KhtmlBoxDirection', value);
  }
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
  KhtmlBoxFlex(value: KeywordInput<'KhtmlBoxFlex', T>): this;
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
  KhtmlBoxFlex<const Value>(value: PropertyInput<'KhtmlBoxFlex', T, Value>): this;
  KhtmlBoxFlex(value: PropertyValue<'KhtmlBoxFlex', T>): this {
    return this.write('KhtmlBoxFlex', value);
  }
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
  KhtmlBoxFlexGroup(value: KeywordInput<'KhtmlBoxFlexGroup', T>): this;
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
  KhtmlBoxFlexGroup<const Value>(value: PropertyInput<'KhtmlBoxFlexGroup', T, Value>): this;
  KhtmlBoxFlexGroup(value: PropertyValue<'KhtmlBoxFlexGroup', T>): this {
    return this.write('KhtmlBoxFlexGroup', value);
  }
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
  KhtmlBoxLines(value: KeywordInput<'KhtmlBoxLines', T>): this;
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
  KhtmlBoxLines<const Value>(value: PropertyInput<'KhtmlBoxLines', T, Value>): this;
  KhtmlBoxLines(value: PropertyValue<'KhtmlBoxLines', T>): this {
    return this.write('KhtmlBoxLines', value);
  }
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
  KhtmlBoxOrdinalGroup(value: KeywordInput<'KhtmlBoxOrdinalGroup', T>): this;
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
  KhtmlBoxOrdinalGroup<const Value>(value: PropertyInput<'KhtmlBoxOrdinalGroup', T, Value>): this;
  KhtmlBoxOrdinalGroup(value: PropertyValue<'KhtmlBoxOrdinalGroup', T>): this {
    return this.write('KhtmlBoxOrdinalGroup', value);
  }
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
  KhtmlBoxOrient(value: KeywordInput<'KhtmlBoxOrient', T>): this;
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
  KhtmlBoxOrient<const Value>(value: PropertyInput<'KhtmlBoxOrient', T, Value>): this;
  KhtmlBoxOrient(value: PropertyValue<'KhtmlBoxOrient', T>): this {
    return this.write('KhtmlBoxOrient', value);
  }
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
  KhtmlBoxPack(value: KeywordInput<'KhtmlBoxPack', T>): this;
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
  KhtmlBoxPack<const Value>(value: PropertyInput<'KhtmlBoxPack', T, Value>): this;
  KhtmlBoxPack(value: PropertyValue<'KhtmlBoxPack', T>): this {
    return this.write('KhtmlBoxPack', value);
  }
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
  KhtmlLineBreak(value: KeywordInput<'KhtmlLineBreak', T>): this;
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
  KhtmlLineBreak<const Value>(value: PropertyInput<'KhtmlLineBreak', T, Value>): this;
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
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-opacity
   */
  KhtmlOpacity(value: KeywordInput<'KhtmlOpacity', T>): this;
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
  KhtmlOpacity<const Value>(value: PropertyInput<'KhtmlOpacity', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-user-select
   */
  KhtmlUserSelect(value: KeywordInput<'KhtmlUserSelect', T>): this;
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
  KhtmlUserSelect<const Value>(value: PropertyInput<'KhtmlUserSelect', T, Value>): this;
  KhtmlUserSelect(value: PropertyValue<'KhtmlUserSelect', T>): this {
    return this.write('KhtmlUserSelect', value);
  }
  /**
   * 兼容属性 -moz-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * @default:'animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  MozAnimation(value: KeywordInput<'MozAnimation', T>): this;
  /**
   * 兼容属性 -moz-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * @default:'animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  MozAnimation<const Value>(value: PropertyInput<'MozAnimation', T, Value>): this;
  MozAnimation(value: PropertyValue<'MozAnimation', T>): this {
    return this.write('MozAnimation', value);
  }
  /**
   * 兼容属性 -moz-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-delay
   */
  MozAnimationDelay(value: KeywordInput<'MozAnimationDelay', T>): this;
  /**
   * 兼容属性 -moz-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-delay
   */
  MozAnimationDelay<const Value>(value: PropertyInput<'MozAnimationDelay', T, Value>): this;
  MozAnimationDelay(value: PropertyValue<'MozAnimationDelay', T>): this {
    return this.write('MozAnimationDelay', value);
  }
  /**
   * 兼容属性 -moz-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  MozAnimationDirection(value: KeywordInput<'MozAnimationDirection', T>): this;
  /**
   * 兼容属性 -moz-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  MozAnimationDirection<const Value>(value: PropertyInput<'MozAnimationDirection', T, Value>): this;
  MozAnimationDirection(value: PropertyValue<'MozAnimationDirection', T>): this {
    return this.write('MozAnimationDirection', value);
  }
  /**
   * 兼容属性 -moz-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-duration
   */
  MozAnimationDuration(value: KeywordInput<'MozAnimationDuration', T>): this;
  /**
   * 兼容属性 -moz-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-duration
   */
  MozAnimationDuration<const Value>(value: PropertyInput<'MozAnimationDuration', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-fill-mode
   */
  MozAnimationFillMode(value: KeywordInput<'MozAnimationFillMode', T>): this;
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
  MozAnimationFillMode<const Value>(value: PropertyInput<'MozAnimationFillMode', T, Value>): this;
  MozAnimationFillMode(value: PropertyValue<'MozAnimationFillMode', T>): this {
    return this.write('MozAnimationFillMode', value);
  }
  /**
   * 兼容属性 -moz-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * @default:'1'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-iteration-count
   */
  MozAnimationIterationCount(value: KeywordInput<'MozAnimationIterationCount', T>): this;
  /**
   * 兼容属性 -moz-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * @default:'1'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-iteration-count
   */
  MozAnimationIterationCount<const Value>(
    value: PropertyInput<'MozAnimationIterationCount', T, Value>,
  ): this;
  MozAnimationIterationCount(value: PropertyValue<'MozAnimationIterationCount', T>): this {
    return this.write('MozAnimationIterationCount', value);
  }
  /**
   * 兼容属性 -moz-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-name
   */
  MozAnimationName(value: KeywordInput<'MozAnimationName', T>): this;
  /**
   * 兼容属性 -moz-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-name
   */
  MozAnimationName<const Value>(value: PropertyInput<'MozAnimationName', T, Value>): this;
  MozAnimationName(value: PropertyValue<'MozAnimationName', T>): this {
    return this.write('MozAnimationName', value);
  }
  /**
   * 兼容属性 -moz-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * @default:'running'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-play-state
   */
  MozAnimationPlayState(value: KeywordInput<'MozAnimationPlayState', T>): this;
  /**
   * 兼容属性 -moz-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * @default:'running'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-play-state
   */
  MozAnimationPlayState<const Value>(value: PropertyInput<'MozAnimationPlayState', T, Value>): this;
  MozAnimationPlayState(value: PropertyValue<'MozAnimationPlayState', T>): this {
    return this.write('MozAnimationPlayState', value);
  }
  /**
   * 兼容属性 -moz-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  MozAnimationTimingFunction(value: KeywordInput<'MozAnimationTimingFunction', T>): this;
  /**
   * 兼容属性 -moz-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  MozAnimationTimingFunction<const Value>(
    value: PropertyInput<'MozAnimationTimingFunction', T, Value>,
  ): this;
  MozAnimationTimingFunction(value: PropertyValue<'MozAnimationTimingFunction', T>): this {
    return this.write('MozAnimationTimingFunction', value);
  }
  /**
   * 兼容属性 -moz-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * @default:'none（浏览器默认样式表可能覆盖）'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  MozAppearance(value: KeywordInput<'MozAppearance', T>): this;
  /**
   * 兼容属性 -moz-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * @default:'none（浏览器默认样式表可能覆盖）'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  MozAppearance<const Value>(value: PropertyInput<'MozAppearance', T, Value>): this;
  MozAppearance(value: PropertyValue<'MozAppearance', T>): this {
    return this.write('MozAppearance', value);
  }
  /**
   * 兼容属性 -moz-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-backface-visibility
   */
  MozBackfaceVisibility(value: KeywordInput<'MozBackfaceVisibility', T>): this;
  /**
   * 兼容属性 -moz-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-backface-visibility
   */
  MozBackfaceVisibility<const Value>(value: PropertyInput<'MozBackfaceVisibility', T, Value>): this;
  MozBackfaceVisibility(value: PropertyValue<'MozBackfaceVisibility', T>): this {
    return this.write('MozBackfaceVisibility', value);
  }
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
  MozBackgroundClip(value: KeywordInput<'MozBackgroundClip', T>): this;
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
  MozBackgroundClip<const Value>(value: PropertyInput<'MozBackgroundClip', T, Value>): this;
  MozBackgroundClip(value: PropertyValue<'MozBackgroundClip', T>): this {
    return this.write('MozBackgroundClip', value);
  }
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
  MozBackgroundOrigin(value: KeywordInput<'MozBackgroundOrigin', T>): this;
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
  MozBackgroundOrigin<const Value>(value: PropertyInput<'MozBackgroundOrigin', T, Value>): this;
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
   * @default:'auto auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-size
   */
  MozBackgroundSize(value: KeywordInput<'MozBackgroundSize', T>): this;
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
  MozBackgroundSize<const Value>(value: PropertyInput<'MozBackgroundSize', T, Value>): this;
  MozBackgroundSize(value: PropertyValue<'MozBackgroundSize', T>): this {
    return this.write('MozBackgroundSize', value);
  }
  /**
   * 兼容属性 -moz-binding；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的 XBL 绑定入口；仅描述历史兼容行为，不适用于现代组件实现。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-binding
   */
  MozBinding(value: KeywordInput<'MozBinding', T>): this;
  /**
   * 兼容属性 -moz-binding；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的 XBL 绑定入口；仅描述历史兼容行为，不适用于现代组件实现。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-binding
   */
  MozBinding<const Value>(value: PropertyInput<'MozBinding', T, Value>): this;
  MozBinding(value: PropertyValue<'MozBinding', T>): this {
    return this.write('MozBinding', value);
  }
  /**
   * 兼容属性 -moz-border-bottom-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的下边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-bottom-colors
   */
  MozBorderBottomColors(value: KeywordInput<'MozBorderBottomColors', T>): this;
  /**
   * 兼容属性 -moz-border-bottom-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的下边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-bottom-colors
   */
  MozBorderBottomColors<const Value>(value: PropertyInput<'MozBorderBottomColors', T, Value>): this;
  MozBorderBottomColors(value: PropertyValue<'MozBorderBottomColors', T>): this {
    return this.write('MozBorderBottomColors', value);
  }
  /**
   * 兼容属性 -moz-border-end-color；优先参考标准属性 borderInlineEndColor及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-color
   */
  MozBorderEndColor(value: KeywordInput<'MozBorderEndColor', T>): this;
  /**
   * 兼容属性 -moz-border-end-color；优先参考标准属性 borderInlineEndColor及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-color
   */
  MozBorderEndColor<const Value>(value: PropertyInput<'MozBorderEndColor', T, Value>): this;
  MozBorderEndColor(value: PropertyValue<'MozBorderEndColor', T>): this {
    return this.write('MozBorderEndColor', value);
  }
  /**
   * 兼容属性 -moz-border-end-style；优先参考标准属性 borderInlineEndStyle及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  MozBorderEndStyle(value: KeywordInput<'MozBorderEndStyle', T>): this;
  /**
   * 兼容属性 -moz-border-end-style；优先参考标准属性 borderInlineEndStyle及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  MozBorderEndStyle<const Value>(value: PropertyInput<'MozBorderEndStyle', T, Value>): this;
  MozBorderEndStyle(value: PropertyValue<'MozBorderEndStyle', T>): this {
    return this.write('MozBorderEndStyle', value);
  }
  /**
   * 兼容属性 -moz-border-end-width；优先参考标准属性 borderInlineEndWidth及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  MozBorderEndWidth(value: KeywordInput<'MozBorderEndWidth', T>): this;
  /**
   * 兼容属性 -moz-border-end-width；优先参考标准属性 borderInlineEndWidth及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  MozBorderEndWidth<const Value>(value: PropertyInput<'MozBorderEndWidth', T, Value>): this;
  MozBorderEndWidth(value: PropertyValue<'MozBorderEndWidth', T>): this {
    return this.write('MozBorderEndWidth', value);
  }
  /**
   * 兼容属性 -moz-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * @default:'border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  MozBorderImage(value: KeywordInput<'MozBorderImage', T>): this;
  /**
   * 兼容属性 -moz-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * @default:'border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  MozBorderImage<const Value>(value: PropertyInput<'MozBorderImage', T, Value>): this;
  MozBorderImage(value: PropertyValue<'MozBorderImage', T>): this {
    return this.write('MozBorderImage', value);
  }
  /**
   * 兼容属性 -moz-border-left-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的左边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-left-colors
   */
  MozBorderLeftColors(value: KeywordInput<'MozBorderLeftColors', T>): this;
  /**
   * 兼容属性 -moz-border-left-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的左边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-left-colors
   */
  MozBorderLeftColors<const Value>(value: PropertyInput<'MozBorderLeftColors', T, Value>): this;
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
   *
   * @default:'border-top-left-radius: 0；border-top-right-radius: 0；border-bottom-right-radius: 0；border-bottom-left-radius: 0'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius
   */
  MozBorderRadius(value: KeywordInput<'MozBorderRadius', T>): this;
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
  MozBorderRadius<const Value>(value: PropertyInput<'MozBorderRadius', T, Value>): this;
  MozBorderRadius(value: PropertyValue<'MozBorderRadius', T>): this {
    return this.write('MozBorderRadius', value);
  }
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
  MozBorderRadiusBottomleft(value: KeywordInput<'MozBorderRadiusBottomleft', T>): this;
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
  MozBorderRadiusBottomleft<const Value>(
    value: PropertyInput<'MozBorderRadiusBottomleft', T, Value>,
  ): this;
  MozBorderRadiusBottomleft(value: PropertyValue<'MozBorderRadiusBottomleft', T>): this {
    return this.write('MozBorderRadiusBottomleft', value);
  }
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
  MozBorderRadiusBottomright(value: KeywordInput<'MozBorderRadiusBottomright', T>): this;
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
  MozBorderRadiusBottomright<const Value>(
    value: PropertyInput<'MozBorderRadiusBottomright', T, Value>,
  ): this;
  MozBorderRadiusBottomright(value: PropertyValue<'MozBorderRadiusBottomright', T>): this {
    return this.write('MozBorderRadiusBottomright', value);
  }
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
  MozBorderRadiusTopleft(value: KeywordInput<'MozBorderRadiusTopleft', T>): this;
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
  MozBorderRadiusTopleft<const Value>(
    value: PropertyInput<'MozBorderRadiusTopleft', T, Value>,
  ): this;
  MozBorderRadiusTopleft(value: PropertyValue<'MozBorderRadiusTopleft', T>): this {
    return this.write('MozBorderRadiusTopleft', value);
  }
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
  MozBorderRadiusTopright(value: KeywordInput<'MozBorderRadiusTopright', T>): this;
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
  MozBorderRadiusTopright<const Value>(
    value: PropertyInput<'MozBorderRadiusTopright', T, Value>,
  ): this;
  MozBorderRadiusTopright(value: PropertyValue<'MozBorderRadiusTopright', T>): this {
    return this.write('MozBorderRadiusTopright', value);
  }
  /**
   * 兼容属性 -moz-border-right-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的右边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-right-colors
   */
  MozBorderRightColors(value: KeywordInput<'MozBorderRightColors', T>): this;
  /**
   * 兼容属性 -moz-border-right-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的右边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-right-colors
   */
  MozBorderRightColors<const Value>(value: PropertyInput<'MozBorderRightColors', T, Value>): this;
  MozBorderRightColors(value: PropertyValue<'MozBorderRightColors', T>): this {
    return this.write('MozBorderRightColors', value);
  }
  /**
   * 兼容属性 -moz-border-start-color；优先参考标准属性 borderInlineStartColor及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-color
   */
  MozBorderStartColor(value: KeywordInput<'MozBorderStartColor', T>): this;
  /**
   * 兼容属性 -moz-border-start-color；优先参考标准属性 borderInlineStartColor及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-color
   */
  MozBorderStartColor<const Value>(value: PropertyInput<'MozBorderStartColor', T, Value>): this;
  MozBorderStartColor(value: PropertyValue<'MozBorderStartColor', T>): this {
    return this.write('MozBorderStartColor', value);
  }
  /**
   * 兼容属性 -moz-border-start-style；优先参考标准属性 borderInlineStartStyle及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  MozBorderStartStyle(value: KeywordInput<'MozBorderStartStyle', T>): this;
  /**
   * 兼容属性 -moz-border-start-style；优先参考标准属性 borderInlineStartStyle及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  MozBorderStartStyle<const Value>(value: PropertyInput<'MozBorderStartStyle', T, Value>): this;
  MozBorderStartStyle(value: PropertyValue<'MozBorderStartStyle', T>): this {
    return this.write('MozBorderStartStyle', value);
  }
  /**
   * 兼容属性 -moz-border-top-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的上边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-top-colors
   */
  MozBorderTopColors(value: KeywordInput<'MozBorderTopColors', T>): this;
  /**
   * 兼容属性 -moz-border-top-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的上边框多色列表；现代设计使用普通边框或 border-image。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-top-colors
   */
  MozBorderTopColors<const Value>(value: PropertyInput<'MozBorderTopColors', T, Value>): this;
  MozBorderTopColors(value: PropertyValue<'MozBorderTopColors', T>): this {
    return this.write('MozBorderTopColors', value);
  }
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
  MozBoxAlign(value: KeywordInput<'MozBoxAlign', T>): this;
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
  MozBoxAlign<const Value>(value: PropertyInput<'MozBoxAlign', T, Value>): this;
  MozBoxAlign(value: PropertyValue<'MozBoxAlign', T>): this {
    return this.write('MozBoxAlign', value);
  }
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
  MozBoxDirection(value: KeywordInput<'MozBoxDirection', T>): this;
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
  MozBoxDirection<const Value>(value: PropertyInput<'MozBoxDirection', T, Value>): this;
  MozBoxDirection(value: PropertyValue<'MozBoxDirection', T>): this {
    return this.write('MozBoxDirection', value);
  }
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
  MozBoxFlex(value: KeywordInput<'MozBoxFlex', T>): this;
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
  MozBoxFlex<const Value>(value: PropertyInput<'MozBoxFlex', T, Value>): this;
  MozBoxFlex(value: PropertyValue<'MozBoxFlex', T>): this {
    return this.write('MozBoxFlex', value);
  }
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
  MozBoxOrdinalGroup(value: KeywordInput<'MozBoxOrdinalGroup', T>): this;
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
  MozBoxOrdinalGroup<const Value>(value: PropertyInput<'MozBoxOrdinalGroup', T, Value>): this;
  MozBoxOrdinalGroup(value: PropertyValue<'MozBoxOrdinalGroup', T>): this {
    return this.write('MozBoxOrdinalGroup', value);
  }
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
  MozBoxOrient(value: KeywordInput<'MozBoxOrient', T>): this;
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
  MozBoxOrient<const Value>(value: PropertyInput<'MozBoxOrient', T, Value>): this;
  MozBoxOrient(value: PropertyValue<'MozBoxOrient', T>): this {
    return this.write('MozBoxOrient', value);
  }
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
  MozBoxPack(value: KeywordInput<'MozBoxPack', T>): this;
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
  MozBoxPack<const Value>(value: PropertyInput<'MozBoxPack', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-shadow
   */
  MozBoxShadow(value: KeywordInput<'MozBoxShadow', T>): this;
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
  MozBoxShadow<const Value>(value: PropertyInput<'MozBoxShadow', T, Value>): this;
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
   * @default:'content-box'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-sizing
   */
  MozBoxSizing(value: KeywordInput<'MozBoxSizing', T>): this;
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
  MozBoxSizing<const Value>(value: PropertyInput<'MozBoxSizing', T, Value>): this;
  MozBoxSizing(value: PropertyValue<'MozBoxSizing', T>): this {
    return this.write('MozBoxSizing', value);
  }
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
  MozColumnCount(value: KeywordInput<'MozColumnCount', T>): this;
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
  MozColumnCount<const Value>(value: PropertyInput<'MozColumnCount', T, Value>): this;
  MozColumnCount(value: PropertyValue<'MozColumnCount', T>): this {
    return this.write('MozColumnCount', value);
  }
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
  MozColumnFill(value: KeywordInput<'MozColumnFill', T>): this;
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
  MozColumnFill<const Value>(value: PropertyInput<'MozColumnFill', T, Value>): this;
  MozColumnFill(value: PropertyValue<'MozColumnFill', T>): this {
    return this.write('MozColumnFill', value);
  }
  /**
   * 兼容属性 -moz-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * @default:'column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule
   */
  MozColumnRule(value: KeywordInput<'MozColumnRule', T>): this;
  /**
   * 兼容属性 -moz-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * @default:'column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule
   */
  MozColumnRule<const Value>(value: PropertyInput<'MozColumnRule', T, Value>): this;
  MozColumnRule(value: PropertyValue<'MozColumnRule', T>): this {
    return this.write('MozColumnRule', value);
  }
  /**
   * 兼容属性 -moz-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-color
   */
  MozColumnRuleColor(value: KeywordInput<'MozColumnRuleColor', T>): this;
  /**
   * 兼容属性 -moz-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-color
   */
  MozColumnRuleColor<const Value>(value: PropertyInput<'MozColumnRuleColor', T, Value>): this;
  MozColumnRuleColor(value: PropertyValue<'MozColumnRuleColor', T>): this {
    return this.write('MozColumnRuleColor', value);
  }
  /**
   * 兼容属性 -moz-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  MozColumnRuleStyle(value: KeywordInput<'MozColumnRuleStyle', T>): this;
  /**
   * 兼容属性 -moz-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  MozColumnRuleStyle<const Value>(value: PropertyInput<'MozColumnRuleStyle', T, Value>): this;
  MozColumnRuleStyle(value: PropertyValue<'MozColumnRuleStyle', T>): this {
    return this.write('MozColumnRuleStyle', value);
  }
  /**
   * 兼容属性 -moz-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  MozColumnRuleWidth(value: KeywordInput<'MozColumnRuleWidth', T>): this;
  /**
   * 兼容属性 -moz-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  MozColumnRuleWidth<const Value>(value: PropertyInput<'MozColumnRuleWidth', T, Value>): this;
  MozColumnRuleWidth(value: PropertyValue<'MozColumnRuleWidth', T>): this {
    return this.write('MozColumnRuleWidth', value);
  }
  /**
   * 兼容属性 -moz-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * @default:'column-width: auto；column-count: auto；column-height: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-columns
   */
  MozColumns(value: KeywordInput<'MozColumns', T>): this;
  /**
   * 兼容属性 -moz-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * @default:'column-width: auto；column-count: auto；column-height: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-columns
   */
  MozColumns<const Value>(value: PropertyInput<'MozColumns', T, Value>): this;
  MozColumns(value: PropertyValue<'MozColumns', T>): this {
    return this.write('MozColumns', value);
  }
  /**
   * 兼容属性 -moz-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-width
   */
  MozColumnWidth(value: KeywordInput<'MozColumnWidth', T>): this;
  /**
   * 兼容属性 -moz-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-width
   */
  MozColumnWidth<const Value>(value: PropertyInput<'MozColumnWidth', T, Value>): this;
  MozColumnWidth(value: PropertyValue<'MozColumnWidth', T>): this {
    return this.write('MozColumnWidth', value);
  }
  /**
   * 兼容属性 -moz-context-properties；优先参考标准属性及浏览器支持范围。
   * 声明可传递给被引用 SVG 图像的上下文绘制属性，如 fill 和 stroke。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  MozContextProperties(value: KeywordInput<'MozContextProperties', T>): this;
  /**
   * 兼容属性 -moz-context-properties；优先参考标准属性及浏览器支持范围。
   * 声明可传递给被引用 SVG 图像的上下文绘制属性，如 fill 和 stroke。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  MozContextProperties<const Value>(value: PropertyInput<'MozContextProperties', T, Value>): this;
  MozContextProperties(value: PropertyValue<'MozContextProperties', T>): this {
    return this.write('MozContextProperties', value);
  }
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
  MozFloatEdge(value: KeywordInput<'MozFloatEdge', T>): this;
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
  MozFloatEdge<const Value>(value: PropertyInput<'MozFloatEdge', T, Value>): this;
  MozFloatEdge(value: PropertyValue<'MozFloatEdge', T>): this {
    return this.write('MozFloatEdge', value);
  }
  /**
   * 兼容属性 -moz-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-feature-settings
   */
  MozFontFeatureSettings(value: KeywordInput<'MozFontFeatureSettings', T>): this;
  /**
   * 兼容属性 -moz-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-feature-settings
   */
  MozFontFeatureSettings<const Value>(
    value: PropertyInput<'MozFontFeatureSettings', T, Value>,
  ): this;
  MozFontFeatureSettings(value: PropertyValue<'MozFontFeatureSettings', T>): this {
    return this.write('MozFontFeatureSettings', value);
  }
  /**
   * 兼容属性 -moz-font-language-override；优先参考标准属性及浏览器支持范围。
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-language-override
   */
  MozFontLanguageOverride(value: KeywordInput<'MozFontLanguageOverride', T>): this;
  /**
   * 兼容属性 -moz-font-language-override；优先参考标准属性及浏览器支持范围。
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-language-override
   */
  MozFontLanguageOverride<const Value>(
    value: PropertyInput<'MozFontLanguageOverride', T, Value>,
  ): this;
  MozFontLanguageOverride(value: PropertyValue<'MozFontLanguageOverride', T>): this {
    return this.write('MozFontLanguageOverride', value);
  }
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
  MozForceBrokenImageIcon(value: KeywordInput<'MozForceBrokenImageIcon', T>): this;
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
  MozForceBrokenImageIcon<const Value>(
    value: PropertyInput<'MozForceBrokenImageIcon', T, Value>,
  ): this;
  MozForceBrokenImageIcon(value: PropertyValue<'MozForceBrokenImageIcon', T>): this {
    return this.write('MozForceBrokenImageIcon', value);
  }
  /**
   * 兼容属性 -moz-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-hyphens
   */
  MozHyphens(value: KeywordInput<'MozHyphens', T>): this;
  /**
   * 兼容属性 -moz-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-hyphens
   */
  MozHyphens<const Value>(value: PropertyInput<'MozHyphens', T, Value>): this;
  MozHyphens(value: PropertyValue<'MozHyphens', T>): this {
    return this.write('MozHyphens', value);
  }
  /**
   * 兼容属性 -moz-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-end
   */
  MozMarginEnd(value: KeywordInput<'MozMarginEnd', T>): this;
  /**
   * 兼容属性 -moz-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-end
   */
  MozMarginEnd<const Value>(value: PropertyInput<'MozMarginEnd', T, Value>): this;
  MozMarginEnd(value: PropertyValue<'MozMarginEnd', T>): this {
    return this.write('MozMarginEnd', value);
  }
  /**
   * 兼容属性 -moz-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-start
   */
  MozMarginStart(value: KeywordInput<'MozMarginStart', T>): this;
  /**
   * 兼容属性 -moz-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-start
   */
  MozMarginStart<const Value>(value: PropertyInput<'MozMarginStart', T, Value>): this;
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
   * @default:'1'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-opacity
   */
  MozOpacity(value: KeywordInput<'MozOpacity', T>): this;
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
  MozOpacity<const Value>(value: PropertyInput<'MozOpacity', T, Value>): this;
  MozOpacity(value: PropertyValue<'MozOpacity', T>): this {
    return this.write('MozOpacity', value);
  }
  /**
   * 兼容属性 -moz-orient；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定特定控件的显示方向，作用依赖控件类型。
   *
   * @default:'inline'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  MozOrient(value: KeywordInput<'MozOrient', T>): this;
  /**
   * 兼容属性 -moz-orient；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定特定控件的显示方向，作用依赖控件类型。
   *
   * @default:'inline'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  MozOrient<const Value>(value: PropertyInput<'MozOrient', T, Value>): this;
  MozOrient(value: PropertyValue<'MozOrient', T>): this {
    return this.write('MozOrient', value);
  }
  /**
   * 兼容属性 -moz-osx-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 macOS 上文字抗锯齿方式；效果依赖平台和字体渲染实现。
   *
   * @default:'auto'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  MozOsxFontSmoothing(value: KeywordInput<'MozOsxFontSmoothing', T>): this;
  /**
   * 兼容属性 -moz-osx-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 macOS 上文字抗锯齿方式；效果依赖平台和字体渲染实现。
   *
   * @default:'auto'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  MozOsxFontSmoothing<const Value>(value: PropertyInput<'MozOsxFontSmoothing', T, Value>): this;
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
   *
   * @default:'outline-width: medium；outline-style: none；outline-color: auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline
   */
  MozOutline(value: KeywordInput<'MozOutline', T>): this;
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
  MozOutline<const Value>(value: PropertyInput<'MozOutline', T, Value>): this;
  MozOutline(value: PropertyValue<'MozOutline', T>): this {
    return this.write('MozOutline', value);
  }
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
  MozOutlineColor(value: KeywordInput<'MozOutlineColor', T>): this;
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
  MozOutlineColor<const Value>(value: PropertyInput<'MozOutlineColor', T, Value>): this;
  MozOutlineColor(value: PropertyValue<'MozOutlineColor', T>): this {
    return this.write('MozOutlineColor', value);
  }
  /**
   * 兼容属性 -moz-outline-radius；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的轮廓圆角简写；不同于元素边框本身的圆角。
   *
   * @default:'-moz-outline-radius-topleft: 0；-moz-outline-radius-topright: 0；-moz-outline-radius-bottomright: 0；-moz-outline-radius-bottomleft: 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius
   */
  MozOutlineRadius(value: KeywordInput<'MozOutlineRadius', T>): this;
  /**
   * 兼容属性 -moz-outline-radius；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的轮廓圆角简写；不同于元素边框本身的圆角。
   *
   * @default:'-moz-outline-radius-topleft: 0；-moz-outline-radius-topright: 0；-moz-outline-radius-bottomright: 0；-moz-outline-radius-bottomleft: 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius
   */
  MozOutlineRadius<const Value>(value: PropertyInput<'MozOutlineRadius', T, Value>): this;
  MozOutlineRadius(value: PropertyValue<'MozOutlineRadius', T>): this {
    return this.write('MozOutlineRadius', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-bottomleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左下角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomleft
   */
  MozOutlineRadiusBottomleft(value: KeywordInput<'MozOutlineRadiusBottomleft', T>): this;
  /**
   * 兼容属性 -moz-outline-radius-bottomleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左下角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomleft
   */
  MozOutlineRadiusBottomleft<const Value>(
    value: PropertyInput<'MozOutlineRadiusBottomleft', T, Value>,
  ): this;
  MozOutlineRadiusBottomleft(value: PropertyValue<'MozOutlineRadiusBottomleft', T>): this {
    return this.write('MozOutlineRadiusBottomleft', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-bottomright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右下角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomright
   */
  MozOutlineRadiusBottomright(value: KeywordInput<'MozOutlineRadiusBottomright', T>): this;
  /**
   * 兼容属性 -moz-outline-radius-bottomright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右下角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomright
   */
  MozOutlineRadiusBottomright<const Value>(
    value: PropertyInput<'MozOutlineRadiusBottomright', T, Value>,
  ): this;
  MozOutlineRadiusBottomright(value: PropertyValue<'MozOutlineRadiusBottomright', T>): this {
    return this.write('MozOutlineRadiusBottomright', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-topleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左上角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topleft
   */
  MozOutlineRadiusTopleft(value: KeywordInput<'MozOutlineRadiusTopleft', T>): this;
  /**
   * 兼容属性 -moz-outline-radius-topleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左上角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topleft
   */
  MozOutlineRadiusTopleft<const Value>(
    value: PropertyInput<'MozOutlineRadiusTopleft', T, Value>,
  ): this;
  MozOutlineRadiusTopleft(value: PropertyValue<'MozOutlineRadiusTopleft', T>): this {
    return this.write('MozOutlineRadiusTopleft', value);
  }
  /**
   * 兼容属性 -moz-outline-radius-topright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右上角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topright
   */
  MozOutlineRadiusTopright(value: KeywordInput<'MozOutlineRadiusTopright', T>): this;
  /**
   * 兼容属性 -moz-outline-radius-topright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右上角的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topright
   */
  MozOutlineRadiusTopright<const Value>(
    value: PropertyInput<'MozOutlineRadiusTopright', T, Value>,
  ): this;
  MozOutlineRadiusTopright(value: PropertyValue<'MozOutlineRadiusTopright', T>): this {
    return this.write('MozOutlineRadiusTopright', value);
  }
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
  MozOutlineStyle(value: KeywordInput<'MozOutlineStyle', T>): this;
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
  MozOutlineStyle<const Value>(value: PropertyInput<'MozOutlineStyle', T, Value>): this;
  MozOutlineStyle(value: PropertyValue<'MozOutlineStyle', T>): this {
    return this.write('MozOutlineStyle', value);
  }
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
  MozOutlineWidth(value: KeywordInput<'MozOutlineWidth', T>): this;
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
  MozOutlineWidth<const Value>(value: PropertyInput<'MozOutlineWidth', T, Value>): this;
  MozOutlineWidth(value: PropertyValue<'MozOutlineWidth', T>): this {
    return this.write('MozOutlineWidth', value);
  }
  /**
   * 兼容属性 -moz-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-end
   */
  MozPaddingEnd(value: KeywordInput<'MozPaddingEnd', T>): this;
  /**
   * 兼容属性 -moz-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-end
   */
  MozPaddingEnd<const Value>(value: PropertyInput<'MozPaddingEnd', T, Value>): this;
  MozPaddingEnd(value: PropertyValue<'MozPaddingEnd', T>): this {
    return this.write('MozPaddingEnd', value);
  }
  /**
   * 兼容属性 -moz-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-start
   */
  MozPaddingStart(value: KeywordInput<'MozPaddingStart', T>): this;
  /**
   * 兼容属性 -moz-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-start
   */
  MozPaddingStart<const Value>(value: PropertyInput<'MozPaddingStart', T, Value>): this;
  MozPaddingStart(value: PropertyValue<'MozPaddingStart', T>): this {
    return this.write('MozPaddingStart', value);
  }
  /**
   * 兼容属性 -moz-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective
   */
  MozPerspective(value: KeywordInput<'MozPerspective', T>): this;
  /**
   * 兼容属性 -moz-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective
   */
  MozPerspective<const Value>(value: PropertyInput<'MozPerspective', T, Value>): this;
  MozPerspective(value: PropertyValue<'MozPerspective', T>): this {
    return this.write('MozPerspective', value);
  }
  /**
   * 兼容属性 -moz-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * @default:'50% 50%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  MozPerspectiveOrigin(value: KeywordInput<'MozPerspectiveOrigin', T>): this;
  /**
   * 兼容属性 -moz-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * @default:'50% 50%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  MozPerspectiveOrigin<const Value>(value: PropertyInput<'MozPerspectiveOrigin', T, Value>): this;
  MozPerspectiveOrigin(value: PropertyValue<'MozPerspectiveOrigin', T>): this {
    return this.write('MozPerspectiveOrigin', value);
  }
  /**
   * 兼容属性 -moz-stack-sizing；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 堆叠布局中决定子项尺寸是否参与堆叠容器的尺寸计算。
   *
   * @default:'stretch-to-fit'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  MozStackSizing(value: KeywordInput<'MozStackSizing', T>): this;
  /**
   * 兼容属性 -moz-stack-sizing；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 堆叠布局中决定子项尺寸是否参与堆叠容器的尺寸计算。
   *
   * @default:'stretch-to-fit'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  MozStackSizing<const Value>(value: PropertyInput<'MozStackSizing', T, Value>): this;
  MozStackSizing(value: PropertyValue<'MozStackSizing', T>): this {
    return this.write('MozStackSizing', value);
  }
  /**
   * 兼容属性 -moz-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * @default:'8'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-tab-size
   */
  MozTabSize(value: KeywordInput<'MozTabSize', T>): this;
  /**
   * 兼容属性 -moz-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * @default:'8'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-tab-size
   */
  MozTabSize<const Value>(value: PropertyInput<'MozTabSize', T, Value>): this;
  MozTabSize(value: PropertyValue<'MozTabSize', T>): this {
    return this.write('MozTabSize', value);
  }
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
  MozTextAlignLast(value: KeywordInput<'MozTextAlignLast', T>): this;
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
  MozTextAlignLast<const Value>(value: PropertyInput<'MozTextAlignLast', T, Value>): this;
  MozTextAlignLast(value: PropertyValue<'MozTextAlignLast', T>): this {
    return this.write('MozTextAlignLast', value);
  }
  /**
   * 兼容属性 -moz-text-blink；优先参考标准属性及浏览器支持范围。
   * 旧版文字闪烁效果开关；现代内容不应依赖该兼容属性。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-blink
   */
  MozTextBlink(value: KeywordInput<'MozTextBlink', T>): this;
  /**
   * 兼容属性 -moz-text-blink；优先参考标准属性及浏览器支持范围。
   * 旧版文字闪烁效果开关；现代内容不应依赖该兼容属性。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-blink
   */
  MozTextBlink<const Value>(value: PropertyInput<'MozTextBlink', T, Value>): this;
  MozTextBlink(value: PropertyValue<'MozTextBlink', T>): this {
    return this.write('MozTextBlink', value);
  }
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
  MozTextDecorationColor(value: KeywordInput<'MozTextDecorationColor', T>): this;
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
  MozTextDecorationColor<const Value>(
    value: PropertyInput<'MozTextDecorationColor', T, Value>,
  ): this;
  MozTextDecorationColor(value: PropertyValue<'MozTextDecorationColor', T>): this {
    return this.write('MozTextDecorationColor', value);
  }
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
  MozTextDecorationLine(value: KeywordInput<'MozTextDecorationLine', T>): this;
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
  MozTextDecorationLine<const Value>(value: PropertyInput<'MozTextDecorationLine', T, Value>): this;
  MozTextDecorationLine(value: PropertyValue<'MozTextDecorationLine', T>): this {
    return this.write('MozTextDecorationLine', value);
  }
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
  MozTextDecorationStyle(value: KeywordInput<'MozTextDecorationStyle', T>): this;
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
  MozTextDecorationStyle<const Value>(
    value: PropertyInput<'MozTextDecorationStyle', T, Value>,
  ): this;
  MozTextDecorationStyle(value: PropertyValue<'MozTextDecorationStyle', T>): this {
    return this.write('MozTextDecorationStyle', value);
  }
  /**
   * 兼容属性 -moz-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * @default:'支持文本放大的移动浏览器为 auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-size-adjust
   */
  MozTextSizeAdjust(value: KeywordInput<'MozTextSizeAdjust', T>): this;
  /**
   * 兼容属性 -moz-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * @default:'支持文本放大的移动浏览器为 auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-size-adjust
   */
  MozTextSizeAdjust<const Value>(value: PropertyInput<'MozTextSizeAdjust', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform
   */
  MozTransform(value: KeywordInput<'MozTransform', T>): this;
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
  MozTransform<const Value>(value: PropertyInput<'MozTransform', T, Value>): this;
  MozTransform(value: PropertyValue<'MozTransform', T>): this {
    return this.write('MozTransform', value);
  }
  /**
   * 兼容属性 -moz-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  MozTransformOrigin(value: KeywordInput<'MozTransformOrigin', T>): this;
  /**
   * 兼容属性 -moz-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  MozTransformOrigin<const Value>(value: PropertyInput<'MozTransformOrigin', T, Value>): this;
  MozTransformOrigin(value: PropertyValue<'MozTransformOrigin', T>): this {
    return this.write('MozTransformOrigin', value);
  }
  /**
   * 兼容属性 -moz-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * @default:'flat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-style
   */
  MozTransformStyle(value: KeywordInput<'MozTransformStyle', T>): this;
  /**
   * 兼容属性 -moz-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * @default:'flat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-style
   */
  MozTransformStyle<const Value>(value: PropertyInput<'MozTransformStyle', T, Value>): this;
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
   *
   * @default:'transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  MozTransition(value: KeywordInput<'MozTransition', T>): this;
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
  MozTransition<const Value>(value: PropertyInput<'MozTransition', T, Value>): this;
  MozTransition(value: PropertyValue<'MozTransition', T>): this {
    return this.write('MozTransition', value);
  }
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
  MozTransitionDelay(value: KeywordInput<'MozTransitionDelay', T>): this;
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
  MozTransitionDelay<const Value>(value: PropertyInput<'MozTransitionDelay', T, Value>): this;
  MozTransitionDelay(value: PropertyValue<'MozTransitionDelay', T>): this {
    return this.write('MozTransitionDelay', value);
  }
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
  MozTransitionDuration(value: KeywordInput<'MozTransitionDuration', T>): this;
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
  MozTransitionDuration<const Value>(value: PropertyInput<'MozTransitionDuration', T, Value>): this;
  MozTransitionDuration(value: PropertyValue<'MozTransitionDuration', T>): this {
    return this.write('MozTransitionDuration', value);
  }
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
  MozTransitionProperty(value: KeywordInput<'MozTransitionProperty', T>): this;
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
  MozTransitionProperty<const Value>(value: PropertyInput<'MozTransitionProperty', T, Value>): this;
  MozTransitionProperty(value: PropertyValue<'MozTransitionProperty', T>): this {
    return this.write('MozTransitionProperty', value);
  }
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
  MozTransitionTimingFunction(value: KeywordInput<'MozTransitionTimingFunction', T>): this;
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
  MozTransitionTimingFunction<const Value>(
    value: PropertyInput<'MozTransitionTimingFunction', T, Value>,
  ): this;
  MozTransitionTimingFunction(value: PropertyValue<'MozTransitionTimingFunction', T>): this {
    return this.write('MozTransitionTimingFunction', value);
  }
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
  MozUserFocus(value: KeywordInput<'MozUserFocus', T>): this;
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
  MozUserFocus<const Value>(value: PropertyInput<'MozUserFocus', T, Value>): this;
  MozUserFocus(value: PropertyValue<'MozUserFocus', T>): this {
    return this.write('MozUserFocus', value);
  }
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
  MozUserInput(value: KeywordInput<'MozUserInput', T>): this;
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
  MozUserInput<const Value>(value: PropertyInput<'MozUserInput', T, Value>): this;
  MozUserInput(value: PropertyValue<'MozUserInput', T>): this {
    return this.write('MozUserInput', value);
  }
  /**
   * 兼容属性 -moz-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * @default:'read-only'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  MozUserModify(value: KeywordInput<'MozUserModify', T>): this;
  /**
   * 兼容属性 -moz-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * @default:'read-only'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  MozUserModify<const Value>(value: PropertyInput<'MozUserModify', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-select
   */
  MozUserSelect(value: KeywordInput<'MozUserSelect', T>): this;
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
  MozUserSelect<const Value>(value: PropertyInput<'MozUserSelect', T, Value>): this;
  MozUserSelect(value: PropertyValue<'MozUserSelect', T>): this {
    return this.write('MozUserSelect', value);
  }
  /**
   * 兼容属性 -moz-window-dragging；优先参考标准属性及浏览器支持范围。
   * 控制区域能否作为宿主窗口的拖动区域，作用限于支持它的特定环境。
   *
   * @default:'drag'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  MozWindowDragging(value: KeywordInput<'MozWindowDragging', T>): this;
  /**
   * 兼容属性 -moz-window-dragging；优先参考标准属性及浏览器支持范围。
   * 控制区域能否作为宿主窗口的拖动区域，作用限于支持它的特定环境。
   *
   * @default:'drag'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  MozWindowDragging<const Value>(value: PropertyInput<'MozWindowDragging', T, Value>): this;
  MozWindowDragging(value: PropertyValue<'MozWindowDragging', T>): this {
    return this.write('MozWindowDragging', value);
  }
  /**
   * 兼容属性 -moz-window-shadow；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Gecko 宿主窗口阴影的预设，效果依赖窗口与操作系统。
   *
   * @default:'default'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  MozWindowShadow(value: KeywordInput<'MozWindowShadow', T>): this;
  /**
   * 兼容属性 -moz-window-shadow；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Gecko 宿主窗口阴影的预设，效果依赖窗口与操作系统。
   *
   * @default:'default'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  MozWindowShadow<const Value>(value: PropertyInput<'MozWindowShadow', T, Value>): this;
  MozWindowShadow(value: PropertyValue<'MozWindowShadow', T>): this {
    return this.write('MozWindowShadow', value);
  }
  /**
   * 兼容属性 -ms-accelerator；优先参考标准属性及浏览器支持范围。
   * 旧版 Microsoft 浏览器中控制快捷键提示字符是否显示。
   *
   * @default:'false'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-accelerator
   */
  msAccelerator(value: KeywordInput<'msAccelerator', T>): this;
  /**
   * 兼容属性 -ms-accelerator；优先参考标准属性及浏览器支持范围。
   * 旧版 Microsoft 浏览器中控制快捷键提示字符是否显示。
   *
   * @default:'false'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-accelerator
   */
  msAccelerator<const Value>(value: PropertyInput<'msAccelerator', T, Value>): this;
  msAccelerator(value: PropertyValue<'msAccelerator', T>): this {
    return this.write('msAccelerator', value);
  }
  /**
   * 兼容属性 -ms-block-progression；优先参考标准属性及浏览器支持范围。
   * 旧版块内容的排列方向，现代排版优先使用 writing-mode。
   *
   * @default:'tb'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  msBlockProgression(value: KeywordInput<'msBlockProgression', T>): this;
  /**
   * 兼容属性 -ms-block-progression；优先参考标准属性及浏览器支持范围。
   * 旧版块内容的排列方向，现代排版优先使用 writing-mode。
   *
   * @default:'tb'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  msBlockProgression<const Value>(value: PropertyInput<'msBlockProgression', T, Value>): this;
  msBlockProgression(value: PropertyValue<'msBlockProgression', T>): this {
    return this.write('msBlockProgression', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-chaining；优先参考标准属性及浏览器支持范围。
   * 控制缩放操作到达边界后是否继续传递给父级缩放区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-chaining
   */
  msContentZoomChaining(value: KeywordInput<'msContentZoomChaining', T>): this;
  /**
   * 兼容属性 -ms-content-zoom-chaining；优先参考标准属性及浏览器支持范围。
   * 控制缩放操作到达边界后是否继续传递给父级缩放区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-chaining
   */
  msContentZoomChaining<const Value>(value: PropertyInput<'msContentZoomChaining', T, Value>): this;
  msContentZoomChaining(value: PropertyValue<'msContentZoomChaining', T>): this {
    return this.write('msContentZoomChaining', value);
  }
  /**
   * 兼容属性 -ms-content-zooming；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 触控内容缩放是否启用。
   *
   * @default:'顶层文档为 zoom，其余为 none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zooming
   */
  msContentZooming(value: KeywordInput<'msContentZooming', T>): this;
  /**
   * 兼容属性 -ms-content-zooming；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 触控内容缩放是否启用。
   *
   * @default:'顶层文档为 zoom，其余为 none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zooming
   */
  msContentZooming<const Value>(value: PropertyInput<'msContentZooming', T, Value>): this;
  msContentZooming(value: PropertyValue<'msContentZooming', T>): this {
    return this.write('msContentZooming', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版触控内容缩放的最小和最大倍率。
   *
   * @default:'-ms-content-zoom-limit-max: 400%；-ms-content-zoom-limit-min: 100%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit
   */
  msContentZoomLimit(value: KeywordInput<'msContentZoomLimit', T>): this;
  /**
   * 兼容属性 -ms-content-zoom-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版触控内容缩放的最小和最大倍率。
   *
   * @default:'-ms-content-zoom-limit-max: 400%；-ms-content-zoom-limit-min: 100%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit
   */
  msContentZoomLimit<const Value>(value: PropertyInput<'msContentZoomLimit', T, Value>): this;
  msContentZoomLimit(value: PropertyValue<'msContentZoomLimit', T>): this {
    return this.write('msContentZoomLimit', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-limit-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最大倍率。
   *
   * @default:'400%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-max
   */
  msContentZoomLimitMax(value: KeywordInput<'msContentZoomLimitMax', T>): this;
  /**
   * 兼容属性 -ms-content-zoom-limit-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最大倍率。
   *
   * @default:'400%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-max
   */
  msContentZoomLimitMax<const Value>(value: PropertyInput<'msContentZoomLimitMax', T, Value>): this;
  msContentZoomLimitMax(value: PropertyValue<'msContentZoomLimitMax', T>): this {
    return this.write('msContentZoomLimitMax', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-limit-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最小倍率。
   *
   * @default:'100%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-min
   */
  msContentZoomLimitMin(value: KeywordInput<'msContentZoomLimitMin', T>): this;
  /**
   * 兼容属性 -ms-content-zoom-limit-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最小倍率。
   *
   * @default:'100%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-min
   */
  msContentZoomLimitMin<const Value>(value: PropertyInput<'msContentZoomLimitMin', T, Value>): this;
  msContentZoomLimitMin(value: PropertyValue<'msContentZoomLimitMin', T>): this {
    return this.write('msContentZoomLimitMin', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-snap；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版内容缩放吸附的方式和位置。
   *
   * @default:'-ms-content-zoom-snap-type: none；-ms-content-zoom-snap-points: snapInterval(0%, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  msContentZoomSnap(value: KeywordInput<'msContentZoomSnap', T>): this;
  /**
   * 兼容属性 -ms-content-zoom-snap；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版内容缩放吸附的方式和位置。
   *
   * @default:'-ms-content-zoom-snap-type: none；-ms-content-zoom-snap-points: snapInterval(0%, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  msContentZoomSnap<const Value>(value: PropertyInput<'msContentZoomSnap', T, Value>): this;
  msContentZoomSnap(value: PropertyValue<'msContentZoomSnap', T>): this {
    return this.write('msContentZoomSnap', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-snap-points；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放操作可以吸附的倍率位置。
   *
   * @default:'snapInterval(0%, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-points
   */
  msContentZoomSnapPoints(value: KeywordInput<'msContentZoomSnapPoints', T>): this;
  /**
   * 兼容属性 -ms-content-zoom-snap-points；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放操作可以吸附的倍率位置。
   *
   * @default:'snapInterval(0%, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-points
   */
  msContentZoomSnapPoints<const Value>(
    value: PropertyInput<'msContentZoomSnapPoints', T, Value>,
  ): this;
  msContentZoomSnapPoints(value: PropertyValue<'msContentZoomSnapPoints', T>): this {
    return this.write('msContentZoomSnapPoints', value);
  }
  /**
   * 兼容属性 -ms-content-zoom-snap-type；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放吸附的强制程度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-type
   */
  msContentZoomSnapType(value: KeywordInput<'msContentZoomSnapType', T>): this;
  /**
   * 兼容属性 -ms-content-zoom-snap-type；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放吸附的强制程度。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-type
   */
  msContentZoomSnapType<const Value>(value: PropertyInput<'msContentZoomSnapType', T, Value>): this;
  msContentZoomSnapType(value: PropertyValue<'msContentZoomSnapType', T>): this {
    return this.write('msContentZoomSnapType', value);
  }
  /**
   * 兼容属性 -ms-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * @default:'""'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-filter
   */
  msFilter(value: KeywordInput<'msFilter', T>): this;
  /**
   * 兼容属性 -ms-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * @default:'""'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-filter
   */
  msFilter<const Value>(value: PropertyInput<'msFilter', T, Value>): this;
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
   *
   * @default:'flex-grow: 0；flex-shrink: 1；flex-basis: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  msFlex(value: KeywordInput<'msFlex', T>): this;
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
  msFlex<const Value>(value: PropertyInput<'msFlex', T, Value>): this;
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
   * @default:'row'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-direction
   */
  msFlexDirection(value: KeywordInput<'msFlexDirection', T>): this;
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
  msFlexDirection<const Value>(value: PropertyInput<'msFlexDirection', T, Value>): this;
  msFlexDirection(value: PropertyValue<'msFlexDirection', T>): this {
    return this.write('msFlexDirection', value);
  }
  /**
   * 兼容属性 -ms-flex-positive；优先参考标准属性 flexGrow及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-positive
   */
  msFlexPositive(value: KeywordInput<'msFlexPositive', T>): this;
  /**
   * 兼容属性 -ms-flex-positive；优先参考标准属性 flexGrow及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-positive
   */
  msFlexPositive<const Value>(value: PropertyInput<'msFlexPositive', T, Value>): this;
  msFlexPositive(value: PropertyValue<'msFlexPositive', T>): this {
    return this.write('msFlexPositive', value);
  }
  /**
   * 兼容属性 -ms-flow-from；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中指定接收哪个命名内容流。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-from
   */
  msFlowFrom(value: KeywordInput<'msFlowFrom', T>): this;
  /**
   * 兼容属性 -ms-flow-from；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中指定接收哪个命名内容流。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-from
   */
  msFlowFrom<const Value>(value: PropertyInput<'msFlowFrom', T, Value>): this;
  msFlowFrom(value: PropertyValue<'msFlowFrom', T>): this {
    return this.write('msFlowFrom', value);
  }
  /**
   * 兼容属性 -ms-flow-into；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中把元素内容放入指定命名流。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-into
   */
  msFlowInto(value: KeywordInput<'msFlowInto', T>): this;
  /**
   * 兼容属性 -ms-flow-into；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中把元素内容放入指定命名流。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-into
   */
  msFlowInto<const Value>(value: PropertyInput<'msFlowInto', T, Value>): this;
  msFlowInto(value: PropertyValue<'msFlowInto', T>): this {
    return this.write('msFlowInto', value);
  }
  /**
   * 兼容属性 -ms-grid-columns；优先参考标准属性 gridTemplateColumns及浏览器支持范围。
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  msGridColumns(value: KeywordInput<'msGridColumns', T>): this;
  /**
   * 兼容属性 -ms-grid-columns；优先参考标准属性 gridTemplateColumns及浏览器支持范围。
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  msGridColumns<const Value>(value: PropertyInput<'msGridColumns', T, Value>): this;
  msGridColumns(value: PropertyValue<'msGridColumns', T>): this {
    return this.write('msGridColumns', value);
  }
  /**
   * 兼容属性 -ms-grid-rows；优先参考标准属性 gridTemplateRows及浏览器支持范围。
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  msGridRows(value: KeywordInput<'msGridRows', T>): this;
  /**
   * 兼容属性 -ms-grid-rows；优先参考标准属性 gridTemplateRows及浏览器支持范围。
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  msGridRows<const Value>(value: PropertyInput<'msGridRows', T, Value>): this;
  msGridRows(value: PropertyValue<'msGridRows', T>): this {
    return this.write('msGridRows', value);
  }
  /**
   * 兼容属性 -ms-high-contrast-adjust；优先参考标准属性及浏览器支持范围。
   * 控制旧版高对比度模式是否调整作者颜色；现代环境优先使用 forced-color-adjust。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-high-contrast-adjust
   */
  msHighContrastAdjust(value: KeywordInput<'msHighContrastAdjust', T>): this;
  /**
   * 兼容属性 -ms-high-contrast-adjust；优先参考标准属性及浏览器支持范围。
   * 控制旧版高对比度模式是否调整作者颜色；现代环境优先使用 forced-color-adjust。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-high-contrast-adjust
   */
  msHighContrastAdjust<const Value>(value: PropertyInput<'msHighContrastAdjust', T, Value>): this;
  msHighContrastAdjust(value: PropertyValue<'msHighContrastAdjust', T>): this {
    return this.write('msHighContrastAdjust', value);
  }
  /**
   * 兼容属性 -ms-hyphenate-limit-chars；优先参考标准属性及浏览器支持范围。
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-chars
   */
  msHyphenateLimitChars(value: KeywordInput<'msHyphenateLimitChars', T>): this;
  /**
   * 兼容属性 -ms-hyphenate-limit-chars；优先参考标准属性及浏览器支持范围。
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-chars
   */
  msHyphenateLimitChars<const Value>(value: PropertyInput<'msHyphenateLimitChars', T, Value>): this;
  msHyphenateLimitChars(value: PropertyValue<'msHyphenateLimitChars', T>): this {
    return this.write('msHyphenateLimitChars', value);
  }
  /**
   * 兼容属性 -ms-hyphenate-limit-lines；优先参考标准属性及浏览器支持范围。
   * 限制连续使用断字连字符的文本行数。
   *
   * @default:'no-limit'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-lines
   */
  msHyphenateLimitLines(value: KeywordInput<'msHyphenateLimitLines', T>): this;
  /**
   * 兼容属性 -ms-hyphenate-limit-lines；优先参考标准属性及浏览器支持范围。
   * 限制连续使用断字连字符的文本行数。
   *
   * @default:'no-limit'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-lines
   */
  msHyphenateLimitLines<const Value>(value: PropertyInput<'msHyphenateLimitLines', T, Value>): this;
  msHyphenateLimitLines(value: PropertyValue<'msHyphenateLimitLines', T>): this {
    return this.write('msHyphenateLimitLines', value);
  }
  /**
   * 兼容属性 -ms-hyphenate-limit-zone；优先参考标准属性及浏览器支持范围。
   * 指定允许开始断字处理的行末区域。
   *
   * @default:'0'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-zone
   */
  msHyphenateLimitZone(value: KeywordInput<'msHyphenateLimitZone', T>): this;
  /**
   * 兼容属性 -ms-hyphenate-limit-zone；优先参考标准属性及浏览器支持范围。
   * 指定允许开始断字处理的行末区域。
   *
   * @default:'0'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-zone
   */
  msHyphenateLimitZone<const Value>(value: PropertyInput<'msHyphenateLimitZone', T, Value>): this;
  msHyphenateLimitZone(value: PropertyValue<'msHyphenateLimitZone', T>): this {
    return this.write('msHyphenateLimitZone', value);
  }
  /**
   * 兼容属性 -ms-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphens
   */
  msHyphens(value: KeywordInput<'msHyphens', T>): this;
  /**
   * 兼容属性 -ms-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphens
   */
  msHyphens<const Value>(value: PropertyInput<'msHyphens', T, Value>): this;
  msHyphens(value: PropertyValue<'msHyphens', T>): this {
    return this.write('msHyphens', value);
  }
  /**
   * 兼容属性 -ms-ime-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版输入法候选窗口相对于编辑区域的对齐位置。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-align
   */
  msImeAlign(value: KeywordInput<'msImeAlign', T>): this;
  /**
   * 兼容属性 -ms-ime-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版输入法候选窗口相对于编辑区域的对齐位置。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-align
   */
  msImeAlign<const Value>(value: PropertyInput<'msImeAlign', T, Value>): this;
  msImeAlign(value: PropertyValue<'msImeAlign', T>): this {
    return this.write('msImeAlign', value);
  }
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
  msImeMode(value: KeywordInput<'msImeMode', T>): this;
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
  msImeMode<const Value>(value: PropertyInput<'msImeMode', T, Value>): this;
  msImeMode(value: PropertyValue<'msImeMode', T>): this {
    return this.write('msImeMode', value);
  }
  /**
   * 兼容属性 -ms-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  msLineBreak(value: KeywordInput<'msLineBreak', T>): this;
  /**
   * 兼容属性 -ms-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  msLineBreak<const Value>(value: PropertyInput<'msLineBreak', T, Value>): this;
  msLineBreak(value: PropertyValue<'msLineBreak', T>): this {
    return this.write('msLineBreak', value);
  }
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
  msOrder(value: KeywordInput<'msOrder', T>): this;
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
  msOrder<const Value>(value: PropertyInput<'msOrder', T, Value>): this;
  msOrder(value: PropertyValue<'msOrder', T>): this {
    return this.write('msOrder', value);
  }
  /**
   * 兼容属性 -ms-overflow-style；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Microsoft 浏览器滚动条的呈现方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  msOverflowStyle(value: KeywordInput<'msOverflowStyle', T>): this;
  /**
   * 兼容属性 -ms-overflow-style；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Microsoft 浏览器滚动条的呈现方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  msOverflowStyle<const Value>(value: PropertyInput<'msOverflowStyle', T, Value>): this;
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
   * @default:'visible'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-x
   */
  msOverflowX(value: KeywordInput<'msOverflowX', T>): this;
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
  msOverflowX<const Value>(value: PropertyInput<'msOverflowX', T, Value>): this;
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
   * @default:'visible'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-y
   */
  msOverflowY(value: KeywordInput<'msOverflowY', T>): this;
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
  msOverflowY<const Value>(value: PropertyInput<'msOverflowY', T, Value>): this;
  msOverflowY(value: PropertyValue<'msOverflowY', T>): this {
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
  msScrollbar3dlightColor(value: KeywordInput<'msScrollbar3dlightColor', T>): this;
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
  ): this;
  msScrollbar3dlightColor(value: PropertyValue<'msScrollbar3dlightColor', T>): this {
    return this.write('msScrollbar3dlightColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-arrow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条箭头颜色。
   *
   * @default:'ButtonText'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-arrow-color
   */
  msScrollbarArrowColor(value: KeywordInput<'msScrollbarArrowColor', T>): this;
  /**
   * 兼容属性 -ms-scrollbar-arrow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条箭头颜色。
   *
   * @default:'ButtonText'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-arrow-color
   */
  msScrollbarArrowColor<const Value>(value: PropertyInput<'msScrollbarArrowColor', T, Value>): this;
  msScrollbarArrowColor(value: PropertyValue<'msScrollbarArrowColor', T>): this {
    return this.write('msScrollbarArrowColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-base-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条的基础颜色。
   *
   * @default:'由浏览器决定'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-base-color
   */
  msScrollbarBaseColor(value: KeywordInput<'msScrollbarBaseColor', T>): this;
  /**
   * 兼容属性 -ms-scrollbar-base-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条的基础颜色。
   *
   * @default:'由浏览器决定'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-base-color
   */
  msScrollbarBaseColor<const Value>(value: PropertyInput<'msScrollbarBaseColor', T, Value>): this;
  msScrollbarBaseColor(value: PropertyValue<'msScrollbarBaseColor', T>): this {
    return this.write('msScrollbarBaseColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-darkshadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的深阴影颜色。
   *
   * @default:'ThreeDDarkShadow'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-darkshadow-color
   */
  msScrollbarDarkshadowColor(value: KeywordInput<'msScrollbarDarkshadowColor', T>): this;
  /**
   * 兼容属性 -ms-scrollbar-darkshadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的深阴影颜色。
   *
   * @default:'ThreeDDarkShadow'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-darkshadow-color
   */
  msScrollbarDarkshadowColor<const Value>(
    value: PropertyInput<'msScrollbarDarkshadowColor', T, Value>,
  ): this;
  msScrollbarDarkshadowColor(value: PropertyValue<'msScrollbarDarkshadowColor', T>): this {
    return this.write('msScrollbarDarkshadowColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-face-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条滑块表面颜色。
   *
   * @default:'ThreeDFace'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-face-color
   */
  msScrollbarFaceColor(value: KeywordInput<'msScrollbarFaceColor', T>): this;
  /**
   * 兼容属性 -ms-scrollbar-face-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条滑块表面颜色。
   *
   * @default:'ThreeDFace'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-face-color
   */
  msScrollbarFaceColor<const Value>(value: PropertyInput<'msScrollbarFaceColor', T, Value>): this;
  msScrollbarFaceColor(value: PropertyValue<'msScrollbarFaceColor', T>): this {
    return this.write('msScrollbarFaceColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条高亮边缘颜色。
   *
   * @default:'ThreeDHighlight'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-highlight-color
   */
  msScrollbarHighlightColor(value: KeywordInput<'msScrollbarHighlightColor', T>): this;
  /**
   * 兼容属性 -ms-scrollbar-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条高亮边缘颜色。
   *
   * @default:'ThreeDHighlight'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-highlight-color
   */
  msScrollbarHighlightColor<const Value>(
    value: PropertyInput<'msScrollbarHighlightColor', T, Value>,
  ): this;
  msScrollbarHighlightColor(value: PropertyValue<'msScrollbarHighlightColor', T>): this {
    return this.write('msScrollbarHighlightColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-shadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条阴影边缘颜色。
   *
   * @default:'ThreeDDarkShadow'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-shadow-color
   */
  msScrollbarShadowColor(value: KeywordInput<'msScrollbarShadowColor', T>): this;
  /**
   * 兼容属性 -ms-scrollbar-shadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条阴影边缘颜色。
   *
   * @default:'ThreeDDarkShadow'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-shadow-color
   */
  msScrollbarShadowColor<const Value>(
    value: PropertyInput<'msScrollbarShadowColor', T, Value>,
  ): this;
  msScrollbarShadowColor(value: PropertyValue<'msScrollbarShadowColor', T>): this {
    return this.write('msScrollbarShadowColor', value);
  }
  /**
   * 兼容属性 -ms-scrollbar-track-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条轨道颜色。
   *
   * @default:'Scrollbar'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-track-color
   */
  msScrollbarTrackColor(value: KeywordInput<'msScrollbarTrackColor', T>): this;
  /**
   * 兼容属性 -ms-scrollbar-track-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条轨道颜色。
   *
   * @default:'Scrollbar'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-track-color
   */
  msScrollbarTrackColor<const Value>(value: PropertyInput<'msScrollbarTrackColor', T, Value>): this;
  msScrollbarTrackColor(value: PropertyValue<'msScrollbarTrackColor', T>): this {
    return this.write('msScrollbarTrackColor', value);
  }
  /**
   * 兼容属性 -ms-scroll-chaining；优先参考标准属性及浏览器支持范围。
   * 控制滚动到达边界后是否传递给祖先滚动容器。
   *
   * @default:'chained'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-chaining
   */
  msScrollChaining(value: KeywordInput<'msScrollChaining', T>): this;
  /**
   * 兼容属性 -ms-scroll-chaining；优先参考标准属性及浏览器支持范围。
   * 控制滚动到达边界后是否传递给祖先滚动容器。
   *
   * @default:'chained'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-chaining
   */
  msScrollChaining<const Value>(value: PropertyInput<'msScrollChaining', T, Value>): this;
  msScrollChaining(value: PropertyValue<'msScrollChaining', T>): this {
    return this.write('msScrollChaining', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版滚动区域的水平和垂直边界。
   *
   * @default:'-ms-scroll-limit-x-min: 0；-ms-scroll-limit-y-min: 0；-ms-scroll-limit-x-max: auto；-ms-scroll-limit-y-max: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit
   */
  msScrollLimit(value: KeywordInput<'msScrollLimit', T>): this;
  /**
   * 兼容属性 -ms-scroll-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版滚动区域的水平和垂直边界。
   *
   * @default:'-ms-scroll-limit-x-min: 0；-ms-scroll-limit-y-min: 0；-ms-scroll-limit-x-max: auto；-ms-scroll-limit-y-max: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit
   */
  msScrollLimit<const Value>(value: PropertyInput<'msScrollLimit', T, Value>): this;
  msScrollLimit(value: PropertyValue<'msScrollLimit', T>): this {
    return this.write('msScrollLimit', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-x-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大水平位置。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-max
   */
  msScrollLimitXMax(value: KeywordInput<'msScrollLimitXMax', T>): this;
  /**
   * 兼容属性 -ms-scroll-limit-x-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大水平位置。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-max
   */
  msScrollLimitXMax<const Value>(value: PropertyInput<'msScrollLimitXMax', T, Value>): this;
  msScrollLimitXMax(value: PropertyValue<'msScrollLimitXMax', T>): this {
    return this.write('msScrollLimitXMax', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-x-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小水平位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-min
   */
  msScrollLimitXMin(value: KeywordInput<'msScrollLimitXMin', T>): this;
  /**
   * 兼容属性 -ms-scroll-limit-x-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小水平位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-min
   */
  msScrollLimitXMin<const Value>(value: PropertyInput<'msScrollLimitXMin', T, Value>): this;
  msScrollLimitXMin(value: PropertyValue<'msScrollLimitXMin', T>): this {
    return this.write('msScrollLimitXMin', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-y-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大垂直位置。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-max
   */
  msScrollLimitYMax(value: KeywordInput<'msScrollLimitYMax', T>): this;
  /**
   * 兼容属性 -ms-scroll-limit-y-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大垂直位置。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-max
   */
  msScrollLimitYMax<const Value>(value: PropertyInput<'msScrollLimitYMax', T, Value>): this;
  msScrollLimitYMax(value: PropertyValue<'msScrollLimitYMax', T>): this {
    return this.write('msScrollLimitYMax', value);
  }
  /**
   * 兼容属性 -ms-scroll-limit-y-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小垂直位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-min
   */
  msScrollLimitYMin(value: KeywordInput<'msScrollLimitYMin', T>): this;
  /**
   * 兼容属性 -ms-scroll-limit-y-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小垂直位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-min
   */
  msScrollLimitYMin<const Value>(value: PropertyInput<'msScrollLimitYMin', T, Value>): this;
  msScrollLimitYMin(value: PropertyValue<'msScrollLimitYMin', T>): this {
    return this.write('msScrollLimitYMin', value);
  }
  /**
   * 兼容属性 -ms-scroll-rails；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控滚动是否锁定主要滚动轴。
   *
   * @default:'railed'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-rails
   */
  msScrollRails(value: KeywordInput<'msScrollRails', T>): this;
  /**
   * 兼容属性 -ms-scroll-rails；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控滚动是否锁定主要滚动轴。
   *
   * @default:'railed'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-rails
   */
  msScrollRails<const Value>(value: PropertyInput<'msScrollRails', T, Value>): this;
  msScrollRails(value: PropertyValue<'msScrollRails', T>): this {
    return this.write('msScrollRails', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-points-x；优先参考标准属性及浏览器支持范围。
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-x
   */
  msScrollSnapPointsX(value: KeywordInput<'msScrollSnapPointsX', T>): this;
  /**
   * 兼容属性 -ms-scroll-snap-points-x；优先参考标准属性及浏览器支持范围。
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-x
   */
  msScrollSnapPointsX<const Value>(value: PropertyInput<'msScrollSnapPointsX', T, Value>): this;
  msScrollSnapPointsX(value: PropertyValue<'msScrollSnapPointsX', T>): this {
    return this.write('msScrollSnapPointsX', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-points-y；优先参考标准属性及浏览器支持范围。
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-y
   */
  msScrollSnapPointsY(value: KeywordInput<'msScrollSnapPointsY', T>): this;
  /**
   * 兼容属性 -ms-scroll-snap-points-y；优先参考标准属性及浏览器支持范围。
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-y
   */
  msScrollSnapPointsY<const Value>(value: PropertyInput<'msScrollSnapPointsY', T, Value>): this;
  msScrollSnapPointsY(value: PropertyValue<'msScrollSnapPointsY', T>): this {
    return this.write('msScrollSnapPointsY', value);
  }
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
  msScrollSnapType(value: KeywordInput<'msScrollSnapType', T>): this;
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
  msScrollSnapType<const Value>(value: PropertyInput<'msScrollSnapType', T, Value>): this;
  msScrollSnapType(value: PropertyValue<'msScrollSnapType', T>): this {
    return this.write('msScrollSnapType', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-x；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版水平滚动吸附方式和位置。
   *
   * @default:'-ms-scroll-snap-type: none；-ms-scroll-snap-points-x: snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-x
   */
  msScrollSnapX(value: KeywordInput<'msScrollSnapX', T>): this;
  /**
   * 兼容属性 -ms-scroll-snap-x；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版水平滚动吸附方式和位置。
   *
   * @default:'-ms-scroll-snap-type: none；-ms-scroll-snap-points-x: snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-x
   */
  msScrollSnapX<const Value>(value: PropertyInput<'msScrollSnapX', T, Value>): this;
  msScrollSnapX(value: PropertyValue<'msScrollSnapX', T>): this {
    return this.write('msScrollSnapX', value);
  }
  /**
   * 兼容属性 -ms-scroll-snap-y；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版垂直滚动吸附方式和位置。
   *
   * @default:'-ms-scroll-snap-type: none；-ms-scroll-snap-points-y: snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-y
   */
  msScrollSnapY(value: KeywordInput<'msScrollSnapY', T>): this;
  /**
   * 兼容属性 -ms-scroll-snap-y；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版垂直滚动吸附方式和位置。
   *
   * @default:'-ms-scroll-snap-type: none；-ms-scroll-snap-points-y: snapInterval(0px, 100%)'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-y
   */
  msScrollSnapY<const Value>(value: PropertyInput<'msScrollSnapY', T, Value>): this;
  msScrollSnapY(value: PropertyValue<'msScrollSnapY', T>): this {
    return this.write('msScrollSnapY', value);
  }
  /**
   * 兼容属性 -ms-scroll-translation；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 环境中的滚动位移呈现方式。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-translation
   */
  msScrollTranslation(value: KeywordInput<'msScrollTranslation', T>): this;
  /**
   * 兼容属性 -ms-scroll-translation；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 环境中的滚动位移呈现方式。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-translation
   */
  msScrollTranslation<const Value>(value: PropertyInput<'msScrollTranslation', T, Value>): this;
  msScrollTranslation(value: PropertyValue<'msScrollTranslation', T>): this {
    return this.write('msScrollTranslation', value);
  }
  /**
   * 兼容属性 -ms-text-autospace；优先参考标准属性及浏览器支持范围。
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  msTextAutospace(value: KeywordInput<'msTextAutospace', T>): this;
  /**
   * 兼容属性 -ms-text-autospace；优先参考标准属性及浏览器支持范围。
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  msTextAutospace<const Value>(value: PropertyInput<'msTextAutospace', T, Value>): this;
  msTextAutospace(value: PropertyValue<'msTextAutospace', T>): this {
    return this.write('msTextAutospace', value);
  }
  /**
   * 兼容属性 -ms-text-combine-horizontal；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-combine-horizontal
   */
  msTextCombineHorizontal(value: KeywordInput<'msTextCombineHorizontal', T>): this;
  /**
   * 兼容属性 -ms-text-combine-horizontal；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-combine-horizontal
   */
  msTextCombineHorizontal<const Value>(
    value: PropertyInput<'msTextCombineHorizontal', T, Value>,
  ): this;
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
   * @default:'clip'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-overflow
   */
  msTextOverflow(value: KeywordInput<'msTextOverflow', T>): this;
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
  msTextOverflow<const Value>(value: PropertyInput<'msTextOverflow', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  msTouchAction(value: KeywordInput<'msTouchAction', T>): this;
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
  msTouchAction<const Value>(value: PropertyInput<'msTouchAction', T, Value>): this;
  msTouchAction(value: PropertyValue<'msTouchAction', T>): this {
    return this.write('msTouchAction', value);
  }
  /**
   * 兼容属性 -ms-touch-select；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控文字选择的交互方式。
   *
   * @default:'grippers'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-select
   */
  msTouchSelect(value: KeywordInput<'msTouchSelect', T>): this;
  /**
   * 兼容属性 -ms-touch-select；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控文字选择的交互方式。
   *
   * @default:'grippers'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-select
   */
  msTouchSelect<const Value>(value: PropertyInput<'msTouchSelect', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform
   */
  msTransform(value: KeywordInput<'msTransform', T>): this;
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
  msTransform<const Value>(value: PropertyInput<'msTransform', T, Value>): this;
  msTransform(value: PropertyValue<'msTransform', T>): this {
    return this.write('msTransform', value);
  }
  /**
   * 兼容属性 -ms-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  msTransformOrigin(value: KeywordInput<'msTransformOrigin', T>): this;
  /**
   * 兼容属性 -ms-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  msTransformOrigin<const Value>(value: PropertyInput<'msTransformOrigin', T, Value>): this;
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
   *
   * @default:'transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  msTransition(value: KeywordInput<'msTransition', T>): this;
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
  msTransition<const Value>(value: PropertyInput<'msTransition', T, Value>): this;
  msTransition(value: PropertyValue<'msTransition', T>): this {
    return this.write('msTransition', value);
  }
  /**
   * 兼容属性 -ms-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-delay
   */
  msTransitionDelay(value: KeywordInput<'msTransitionDelay', T>): this;
  /**
   * 兼容属性 -ms-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-delay
   */
  msTransitionDelay<const Value>(value: PropertyInput<'msTransitionDelay', T, Value>): this;
  msTransitionDelay(value: PropertyValue<'msTransitionDelay', T>): this {
    return this.write('msTransitionDelay', value);
  }
  /**
   * 兼容属性 -ms-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-duration
   */
  msTransitionDuration(value: KeywordInput<'msTransitionDuration', T>): this;
  /**
   * 兼容属性 -ms-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-duration
   */
  msTransitionDuration<const Value>(value: PropertyInput<'msTransitionDuration', T, Value>): this;
  msTransitionDuration(value: PropertyValue<'msTransitionDuration', T>): this {
    return this.write('msTransitionDuration', value);
  }
  /**
   * 兼容属性 -ms-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-property
   */
  msTransitionProperty(value: KeywordInput<'msTransitionProperty', T>): this;
  /**
   * 兼容属性 -ms-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-property
   */
  msTransitionProperty<const Value>(value: PropertyInput<'msTransitionProperty', T, Value>): this;
  msTransitionProperty(value: PropertyValue<'msTransitionProperty', T>): this {
    return this.write('msTransitionProperty', value);
  }
  /**
   * 兼容属性 -ms-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  msTransitionTimingFunction(value: KeywordInput<'msTransitionTimingFunction', T>): this;
  /**
   * 兼容属性 -ms-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  msTransitionTimingFunction<const Value>(
    value: PropertyInput<'msTransitionTimingFunction', T, Value>,
  ): this;
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
   * @default:'text'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-user-select
   */
  msUserSelect(value: KeywordInput<'msUserSelect', T>): this;
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
  msUserSelect<const Value>(value: PropertyInput<'msUserSelect', T, Value>): this;
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
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-word-break
   */
  msWordBreak(value: KeywordInput<'msWordBreak', T>): this;
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
  msWordBreak<const Value>(value: PropertyInput<'msWordBreak', T, Value>): this;
  msWordBreak(value: PropertyValue<'msWordBreak', T>): this {
    return this.write('msWordBreak', value);
  }
  /**
   * 兼容属性 -ms-wrap-flow；优先参考标准属性及浏览器支持范围。
   * 控制旧版排斥形状周围的内容环绕方向。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  msWrapFlow(value: KeywordInput<'msWrapFlow', T>): this;
  /**
   * 兼容属性 -ms-wrap-flow；优先参考标准属性及浏览器支持范围。
   * 控制旧版排斥形状周围的内容环绕方向。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  msWrapFlow<const Value>(value: PropertyInput<'msWrapFlow', T, Value>): this;
  msWrapFlow(value: PropertyValue<'msWrapFlow', T>): this {
    return this.write('msWrapFlow', value);
  }
  /**
   * 兼容属性 -ms-wrap-margin；优先参考标准属性及浏览器支持范围。
   * 设置旧版排斥形状与环绕内容之间的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-margin
   */
  msWrapMargin(value: KeywordInput<'msWrapMargin', T>): this;
  /**
   * 兼容属性 -ms-wrap-margin；优先参考标准属性及浏览器支持范围。
   * 设置旧版排斥形状与环绕内容之间的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-margin
   */
  msWrapMargin<const Value>(value: PropertyInput<'msWrapMargin', T, Value>): this;
  msWrapMargin(value: PropertyValue<'msWrapMargin', T>): this {
    return this.write('msWrapMargin', value);
  }
  /**
   * 兼容属性 -ms-wrap-through；优先参考标准属性及浏览器支持范围。
   * 控制旧版元素是否参与排斥形状的内容环绕。
   *
   * @default:'wrap'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-through
   */
  msWrapThrough(value: KeywordInput<'msWrapThrough', T>): this;
  /**
   * 兼容属性 -ms-wrap-through；优先参考标准属性及浏览器支持范围。
   * 控制旧版元素是否参与排斥形状的内容环绕。
   *
   * @default:'wrap'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-through
   */
  msWrapThrough<const Value>(value: PropertyInput<'msWrapThrough', T, Value>): this;
  msWrapThrough(value: PropertyValue<'msWrapThrough', T>): this {
    return this.write('msWrapThrough', value);
  }
  /**
   * 兼容属性 -ms-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * @default:'horizontal-tb'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  msWritingMode(value: KeywordInput<'msWritingMode', T>): this;
  /**
   * 兼容属性 -ms-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * @default:'horizontal-tb'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  msWritingMode<const Value>(value: PropertyInput<'msWritingMode', T, Value>): this;
  msWritingMode(value: PropertyValue<'msWritingMode', T>): this {
    return this.write('msWritingMode', value);
  }
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
  OAnimation(value: KeywordInput<'OAnimation', T>): this;
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
  OAnimation<const Value>(value: PropertyInput<'OAnimation', T, Value>): this;
  OAnimation(value: PropertyValue<'OAnimation', T>): this {
    return this.write('OAnimation', value);
  }
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
  OAnimationDelay(value: KeywordInput<'OAnimationDelay', T>): this;
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
  OAnimationDelay<const Value>(value: PropertyInput<'OAnimationDelay', T, Value>): this;
  OAnimationDelay(value: PropertyValue<'OAnimationDelay', T>): this {
    return this.write('OAnimationDelay', value);
  }
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
  OAnimationDirection(value: KeywordInput<'OAnimationDirection', T>): this;
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
  OAnimationDirection<const Value>(value: PropertyInput<'OAnimationDirection', T, Value>): this;
  OAnimationDirection(value: PropertyValue<'OAnimationDirection', T>): this {
    return this.write('OAnimationDirection', value);
  }
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
  OAnimationDuration(value: KeywordInput<'OAnimationDuration', T>): this;
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
  OAnimationDuration<const Value>(value: PropertyInput<'OAnimationDuration', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-fill-mode
   */
  OAnimationFillMode(value: KeywordInput<'OAnimationFillMode', T>): this;
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
  OAnimationFillMode<const Value>(value: PropertyInput<'OAnimationFillMode', T, Value>): this;
  OAnimationFillMode(value: PropertyValue<'OAnimationFillMode', T>): this {
    return this.write('OAnimationFillMode', value);
  }
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
  OAnimationIterationCount(value: KeywordInput<'OAnimationIterationCount', T>): this;
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
  OAnimationIterationCount<const Value>(
    value: PropertyInput<'OAnimationIterationCount', T, Value>,
  ): this;
  OAnimationIterationCount(value: PropertyValue<'OAnimationIterationCount', T>): this {
    return this.write('OAnimationIterationCount', value);
  }
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
  OAnimationName(value: KeywordInput<'OAnimationName', T>): this;
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
  OAnimationName<const Value>(value: PropertyInput<'OAnimationName', T, Value>): this;
  OAnimationName(value: PropertyValue<'OAnimationName', T>): this {
    return this.write('OAnimationName', value);
  }
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
  OAnimationPlayState(value: KeywordInput<'OAnimationPlayState', T>): this;
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
  OAnimationPlayState<const Value>(value: PropertyInput<'OAnimationPlayState', T, Value>): this;
  OAnimationPlayState(value: PropertyValue<'OAnimationPlayState', T>): this {
    return this.write('OAnimationPlayState', value);
  }
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
  OAnimationTimingFunction(value: KeywordInput<'OAnimationTimingFunction', T>): this;
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
  OAnimationTimingFunction<const Value>(
    value: PropertyInput<'OAnimationTimingFunction', T, Value>,
  ): this;
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
   * @default:'auto auto'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-background-size
   */
  OBackgroundSize(value: KeywordInput<'OBackgroundSize', T>): this;
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
  OBackgroundSize<const Value>(value: PropertyInput<'OBackgroundSize', T, Value>): this;
  OBackgroundSize(value: PropertyValue<'OBackgroundSize', T>): this {
    return this.write('OBackgroundSize', value);
  }
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
  OBorderImage(value: KeywordInput<'OBorderImage', T>): this;
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
  OBorderImage<const Value>(value: PropertyInput<'OBorderImage', T, Value>): this;
  OBorderImage(value: PropertyValue<'OBorderImage', T>): this {
    return this.write('OBorderImage', value);
  }
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
  offsetBlock(value: KeywordInput<'offsetBlock', T>): this;
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
  offsetBlock<const Value>(value: PropertyInput<'offsetBlock', T, Value>): this;
  offsetBlock(value: PropertyValue<'offsetBlock', T>): this {
    return this.write('offsetBlock', value);
  }
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
  offsetBlockEnd(value: KeywordInput<'offsetBlockEnd', T>): this;
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
  offsetBlockEnd<const Value>(value: PropertyInput<'offsetBlockEnd', T, Value>): this;
  offsetBlockEnd(value: PropertyValue<'offsetBlockEnd', T>): this {
    return this.write('offsetBlockEnd', value);
  }
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
  offsetBlockStart(value: KeywordInput<'offsetBlockStart', T>): this;
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
  offsetBlockStart<const Value>(value: PropertyInput<'offsetBlockStart', T, Value>): this;
  offsetBlockStart(value: PropertyValue<'offsetBlockStart', T>): this {
    return this.write('offsetBlockStart', value);
  }
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
  offsetInline(value: KeywordInput<'offsetInline', T>): this;
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
  offsetInline<const Value>(value: PropertyInput<'offsetInline', T, Value>): this;
  offsetInline(value: PropertyValue<'offsetInline', T>): this {
    return this.write('offsetInline', value);
  }
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
  offsetInlineEnd(value: KeywordInput<'offsetInlineEnd', T>): this;
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
  offsetInlineEnd<const Value>(value: PropertyInput<'offsetInlineEnd', T, Value>): this;
  offsetInlineEnd(value: PropertyValue<'offsetInlineEnd', T>): this {
    return this.write('offsetInlineEnd', value);
  }
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
  offsetInlineStart(value: KeywordInput<'offsetInlineStart', T>): this;
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
  offsetInlineStart<const Value>(value: PropertyInput<'offsetInlineStart', T, Value>): this;
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
   * @default:'fill'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-fit
   */
  OObjectFit(value: KeywordInput<'OObjectFit', T>): this;
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
  OObjectFit<const Value>(value: PropertyInput<'OObjectFit', T, Value>): this;
  OObjectFit(value: PropertyValue<'OObjectFit', T>): this {
    return this.write('OObjectFit', value);
  }
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
  OObjectPosition(value: KeywordInput<'OObjectPosition', T>): this;
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
  OObjectPosition<const Value>(value: PropertyInput<'OObjectPosition', T, Value>): this;
  OObjectPosition(value: PropertyValue<'OObjectPosition', T>): this {
    return this.write('OObjectPosition', value);
  }
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
  OTabSize(value: KeywordInput<'OTabSize', T>): this;
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
  OTabSize<const Value>(value: PropertyInput<'OTabSize', T, Value>): this;
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
   * @default:'clip'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-text-overflow
   */
  OTextOverflow(value: KeywordInput<'OTextOverflow', T>): this;
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
  OTextOverflow<const Value>(value: PropertyInput<'OTextOverflow', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform
   */
  OTransform(value: KeywordInput<'OTransform', T>): this;
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
  OTransform<const Value>(value: PropertyInput<'OTransform', T, Value>): this;
  OTransform(value: PropertyValue<'OTransform', T>): this {
    return this.write('OTransform', value);
  }
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
  OTransformOrigin(value: KeywordInput<'OTransformOrigin', T>): this;
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
  OTransformOrigin<const Value>(value: PropertyInput<'OTransformOrigin', T, Value>): this;
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
   *
   * @default:'transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  OTransition(value: KeywordInput<'OTransition', T>): this;
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
  OTransition<const Value>(value: PropertyInput<'OTransition', T, Value>): this;
  OTransition(value: PropertyValue<'OTransition', T>): this {
    return this.write('OTransition', value);
  }
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
  OTransitionDelay(value: KeywordInput<'OTransitionDelay', T>): this;
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
  OTransitionDelay<const Value>(value: PropertyInput<'OTransitionDelay', T, Value>): this;
  OTransitionDelay(value: PropertyValue<'OTransitionDelay', T>): this {
    return this.write('OTransitionDelay', value);
  }
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
  OTransitionDuration(value: KeywordInput<'OTransitionDuration', T>): this;
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
  OTransitionDuration<const Value>(value: PropertyInput<'OTransitionDuration', T, Value>): this;
  OTransitionDuration(value: PropertyValue<'OTransitionDuration', T>): this {
    return this.write('OTransitionDuration', value);
  }
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
  OTransitionProperty(value: KeywordInput<'OTransitionProperty', T>): this;
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
  OTransitionProperty<const Value>(value: PropertyInput<'OTransitionProperty', T, Value>): this;
  OTransitionProperty(value: PropertyValue<'OTransitionProperty', T>): this {
    return this.write('OTransitionProperty', value);
  }
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
  OTransitionTimingFunction(value: KeywordInput<'OTransitionTimingFunction', T>): this;
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
  OTransitionTimingFunction<const Value>(
    value: PropertyInput<'OTransitionTimingFunction', T, Value>,
  ): this;
  OTransitionTimingFunction(value: PropertyValue<'OTransitionTimingFunction', T>): this {
    return this.write('OTransitionTimingFunction', value);
  }
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
  pageBreakAfter(value: KeywordInput<'pageBreakAfter', T>): this;
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
  pageBreakAfter<const Value>(value: PropertyInput<'pageBreakAfter', T, Value>): this;
  pageBreakAfter(value: PropertyValue<'pageBreakAfter', T>): this {
    return this.write('pageBreakAfter', value);
  }
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
  pageBreakBefore(value: KeywordInput<'pageBreakBefore', T>): this;
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
  pageBreakBefore<const Value>(value: PropertyInput<'pageBreakBefore', T, Value>): this;
  pageBreakBefore(value: PropertyValue<'pageBreakBefore', T>): this {
    return this.write('pageBreakBefore', value);
  }
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
  pageBreakInside(value: KeywordInput<'pageBreakInside', T>): this;
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
  pageBreakInside<const Value>(value: PropertyInput<'pageBreakInside', T, Value>): this;
  pageBreakInside(value: PropertyValue<'pageBreakInside', T>): this {
    return this.write('pageBreakInside', value);
  }
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
  positionTryOptions(value: KeywordInput<'positionTryOptions', T>): this;
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
  positionTryOptions<const Value>(value: PropertyInput<'positionTryOptions', T, Value>): this;
  positionTryOptions(value: PropertyValue<'positionTryOptions', T>): this {
    return this.write('positionTryOptions', value);
  }
  /**
   * 指定旧版滚动子项的吸附坐标，现代布局使用 scroll-snap-align。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  scrollSnapCoordinate(value: KeywordInput<'scrollSnapCoordinate', T>): this;
  /**
   * 指定旧版滚动子项的吸附坐标，现代布局使用 scroll-snap-align。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  scrollSnapCoordinate<const Value>(value: PropertyInput<'scrollSnapCoordinate', T, Value>): this;
  scrollSnapCoordinate(value: PropertyValue<'scrollSnapCoordinate', T>): this {
    return this.write('scrollSnapCoordinate', value);
  }
  /**
   * 指定旧版滚动容器中吸附位置对齐的目标坐标。
   *
   * @default:'0px 0px'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  scrollSnapDestination(value: KeywordInput<'scrollSnapDestination', T>): this;
  /**
   * 指定旧版滚动容器中吸附位置对齐的目标坐标。
   *
   * @default:'0px 0px'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  scrollSnapDestination<const Value>(value: PropertyInput<'scrollSnapDestination', T, Value>): this;
  scrollSnapDestination(value: PropertyValue<'scrollSnapDestination', T>): this {
    return this.write('scrollSnapDestination', value);
  }
  /**
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-x
   */
  scrollSnapPointsX(value: KeywordInput<'scrollSnapPointsX', T>): this;
  /**
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-x
   */
  scrollSnapPointsX<const Value>(value: PropertyInput<'scrollSnapPointsX', T, Value>): this;
  scrollSnapPointsX(value: PropertyValue<'scrollSnapPointsX', T>): this {
    return this.write('scrollSnapPointsX', value);
  }
  /**
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-y
   */
  scrollSnapPointsY(value: KeywordInput<'scrollSnapPointsY', T>): this;
  /**
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-y
   */
  scrollSnapPointsY<const Value>(value: PropertyInput<'scrollSnapPointsY', T, Value>): this;
  scrollSnapPointsY(value: PropertyValue<'scrollSnapPointsY', T>): this {
    return this.write('scrollSnapPointsY', value);
  }
  /**
   * 控制旧版水平滚动吸附的强制程度。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-x
   */
  scrollSnapTypeX(value: KeywordInput<'scrollSnapTypeX', T>): this;
  /**
   * 控制旧版水平滚动吸附的强制程度。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-x
   */
  scrollSnapTypeX<const Value>(value: PropertyInput<'scrollSnapTypeX', T, Value>): this;
  scrollSnapTypeX(value: PropertyValue<'scrollSnapTypeX', T>): this {
    return this.write('scrollSnapTypeX', value);
  }
  /**
   * 控制旧版垂直滚动吸附的强制程度。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-y
   */
  scrollSnapTypeY(value: KeywordInput<'scrollSnapTypeY', T>): this;
  /**
   * 控制旧版垂直滚动吸附的强制程度。
   *
   * @default:'none'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-y
   */
  scrollSnapTypeY<const Value>(value: PropertyInput<'scrollSnapTypeY', T, Value>): this;
  scrollSnapTypeY(value: PropertyValue<'scrollSnapTypeY', T>): this {
    return this.write('scrollSnapTypeY', value);
  }
  /**
   * 兼容属性 -webkit-align-content；优先参考标准属性及浏览器支持范围。
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  WebkitAlignContent(value: KeywordInput<'WebkitAlignContent', T>): this;
  /**
   * 兼容属性 -webkit-align-content；优先参考标准属性及浏览器支持范围。
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  WebkitAlignContent<const Value>(value: PropertyInput<'WebkitAlignContent', T, Value>): this;
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
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-items
   */
  WebkitAlignItems(value: KeywordInput<'WebkitAlignItems', T>): this;
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
  WebkitAlignItems<const Value>(value: PropertyInput<'WebkitAlignItems', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  WebkitAlignSelf(value: KeywordInput<'WebkitAlignSelf', T>): this;
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
  WebkitAlignSelf<const Value>(value: PropertyInput<'WebkitAlignSelf', T, Value>): this;
  WebkitAlignSelf(value: PropertyValue<'WebkitAlignSelf', T>): this {
    return this.write('WebkitAlignSelf', value);
  }
  /**
   * 兼容属性 -webkit-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * @default:'animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  WebkitAnimation(value: KeywordInput<'WebkitAnimation', T>): this;
  /**
   * 兼容属性 -webkit-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * @default:'animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  WebkitAnimation<const Value>(value: PropertyInput<'WebkitAnimation', T, Value>): this;
  WebkitAnimation(value: PropertyValue<'WebkitAnimation', T>): this {
    return this.write('WebkitAnimation', value);
  }
  /**
   * 兼容属性 -webkit-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-delay
   */
  WebkitAnimationDelay(value: KeywordInput<'WebkitAnimationDelay', T>): this;
  /**
   * 兼容属性 -webkit-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-delay
   */
  WebkitAnimationDelay<const Value>(value: PropertyInput<'WebkitAnimationDelay', T, Value>): this;
  WebkitAnimationDelay(value: PropertyValue<'WebkitAnimationDelay', T>): this {
    return this.write('WebkitAnimationDelay', value);
  }
  /**
   * 兼容属性 -webkit-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  WebkitAnimationDirection(value: KeywordInput<'WebkitAnimationDirection', T>): this;
  /**
   * 兼容属性 -webkit-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  WebkitAnimationDirection<const Value>(
    value: PropertyInput<'WebkitAnimationDirection', T, Value>,
  ): this;
  WebkitAnimationDirection(value: PropertyValue<'WebkitAnimationDirection', T>): this {
    return this.write('WebkitAnimationDirection', value);
  }
  /**
   * 兼容属性 -webkit-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-duration
   */
  WebkitAnimationDuration(value: KeywordInput<'WebkitAnimationDuration', T>): this;
  /**
   * 兼容属性 -webkit-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-duration
   */
  WebkitAnimationDuration<const Value>(
    value: PropertyInput<'WebkitAnimationDuration', T, Value>,
  ): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-fill-mode
   */
  WebkitAnimationFillMode(value: KeywordInput<'WebkitAnimationFillMode', T>): this;
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
  WebkitAnimationFillMode<const Value>(
    value: PropertyInput<'WebkitAnimationFillMode', T, Value>,
  ): this;
  WebkitAnimationFillMode(value: PropertyValue<'WebkitAnimationFillMode', T>): this {
    return this.write('WebkitAnimationFillMode', value);
  }
  /**
   * 兼容属性 -webkit-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * @default:'1'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-iteration-count
   */
  WebkitAnimationIterationCount(value: KeywordInput<'WebkitAnimationIterationCount', T>): this;
  /**
   * 兼容属性 -webkit-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * @default:'1'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-iteration-count
   */
  WebkitAnimationIterationCount<const Value>(
    value: PropertyInput<'WebkitAnimationIterationCount', T, Value>,
  ): this;
  WebkitAnimationIterationCount(value: PropertyValue<'WebkitAnimationIterationCount', T>): this {
    return this.write('WebkitAnimationIterationCount', value);
  }
  /**
   * 兼容属性 -webkit-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-name
   */
  WebkitAnimationName(value: KeywordInput<'WebkitAnimationName', T>): this;
  /**
   * 兼容属性 -webkit-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-name
   */
  WebkitAnimationName<const Value>(value: PropertyInput<'WebkitAnimationName', T, Value>): this;
  WebkitAnimationName(value: PropertyValue<'WebkitAnimationName', T>): this {
    return this.write('WebkitAnimationName', value);
  }
  /**
   * 兼容属性 -webkit-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * @default:'running'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-play-state
   */
  WebkitAnimationPlayState(value: KeywordInput<'WebkitAnimationPlayState', T>): this;
  /**
   * 兼容属性 -webkit-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * @default:'running'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-play-state
   */
  WebkitAnimationPlayState<const Value>(
    value: PropertyInput<'WebkitAnimationPlayState', T, Value>,
  ): this;
  WebkitAnimationPlayState(value: PropertyValue<'WebkitAnimationPlayState', T>): this {
    return this.write('WebkitAnimationPlayState', value);
  }
  /**
   * 兼容属性 -webkit-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  WebkitAnimationTimingFunction(value: KeywordInput<'WebkitAnimationTimingFunction', T>): this;
  /**
   * 兼容属性 -webkit-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  WebkitAnimationTimingFunction<const Value>(
    value: PropertyInput<'WebkitAnimationTimingFunction', T, Value>,
  ): this;
  WebkitAnimationTimingFunction(value: PropertyValue<'WebkitAnimationTimingFunction', T>): this {
    return this.write('WebkitAnimationTimingFunction', value);
  }
  /**
   * 兼容属性 -webkit-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * @default:'none（浏览器默认样式表可能覆盖）'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  WebkitAppearance(value: KeywordInput<'WebkitAppearance', T>): this;
  /**
   * 兼容属性 -webkit-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * @default:'none（浏览器默认样式表可能覆盖）'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  WebkitAppearance<const Value>(value: PropertyInput<'WebkitAppearance', T, Value>): this;
  WebkitAppearance(value: PropertyValue<'WebkitAppearance', T>): this {
    return this.write('WebkitAppearance', value);
  }
  /**
   * 兼容属性 -webkit-backdrop-filter；优先参考标准属性及浏览器支持范围。
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backdrop-filter
   */
  WebkitBackdropFilter(value: KeywordInput<'WebkitBackdropFilter', T>): this;
  /**
   * 兼容属性 -webkit-backdrop-filter；优先参考标准属性及浏览器支持范围。
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backdrop-filter
   */
  WebkitBackdropFilter<const Value>(value: PropertyInput<'WebkitBackdropFilter', T, Value>): this;
  WebkitBackdropFilter(value: PropertyValue<'WebkitBackdropFilter', T>): this {
    return this.write('WebkitBackdropFilter', value);
  }
  /**
   * 兼容属性 -webkit-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backface-visibility
   */
  WebkitBackfaceVisibility(value: KeywordInput<'WebkitBackfaceVisibility', T>): this;
  /**
   * 兼容属性 -webkit-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * @default:'visible'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backface-visibility
   */
  WebkitBackfaceVisibility<const Value>(
    value: PropertyInput<'WebkitBackfaceVisibility', T, Value>,
  ): this;
  WebkitBackfaceVisibility(value: PropertyValue<'WebkitBackfaceVisibility', T>): this {
    return this.write('WebkitBackfaceVisibility', value);
  }
  /**
   * 兼容属性 -webkit-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  WebkitBackgroundClip(value: KeywordInput<'WebkitBackgroundClip', T>): this;
  /**
   * 兼容属性 -webkit-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * @default:'border-box'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  WebkitBackgroundClip<const Value>(value: PropertyInput<'WebkitBackgroundClip', T, Value>): this;
  WebkitBackgroundClip(value: PropertyValue<'WebkitBackgroundClip', T>): this {
    return this.write('WebkitBackgroundClip', value);
  }
  /**
   * 兼容属性 -webkit-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * @default:'padding-box'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  WebkitBackgroundOrigin(value: KeywordInput<'WebkitBackgroundOrigin', T>): this;
  /**
   * 兼容属性 -webkit-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * @default:'padding-box'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  WebkitBackgroundOrigin<const Value>(
    value: PropertyInput<'WebkitBackgroundOrigin', T, Value>,
  ): this;
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
   * @default:'auto auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-size
   */
  WebkitBackgroundSize(value: KeywordInput<'WebkitBackgroundSize', T>): this;
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
  WebkitBackgroundSize<const Value>(value: PropertyInput<'WebkitBackgroundSize', T, Value>): this;
  WebkitBackgroundSize(value: PropertyValue<'WebkitBackgroundSize', T>): this {
    return this.write('WebkitBackgroundSize', value);
  }
  /**
   * 兼容属性 -webkit-border-before；优先参考标准属性 borderBlockStart及浏览器支持范围。
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before
   */
  WebkitBorderBefore(value: KeywordInput<'WebkitBorderBefore', T>): this;
  /**
   * 兼容属性 -webkit-border-before；优先参考标准属性 borderBlockStart及浏览器支持范围。
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   *
   * @default:'border-width: 见其子属性；border-style: 见其子属性；color: canvastext'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before
   */
  WebkitBorderBefore<const Value>(value: PropertyInput<'WebkitBorderBefore', T, Value>): this;
  WebkitBorderBefore(value: PropertyValue<'WebkitBorderBefore', T>): this {
    return this.write('WebkitBorderBefore', value);
  }
  /**
   * 兼容属性 -webkit-border-before-color；优先参考标准属性 borderBlockStartColor及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-color
   */
  WebkitBorderBeforeColor(value: KeywordInput<'WebkitBorderBeforeColor', T>): this;
  /**
   * 兼容属性 -webkit-border-before-color；优先参考标准属性 borderBlockStartColor及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-color
   */
  WebkitBorderBeforeColor<const Value>(
    value: PropertyInput<'WebkitBorderBeforeColor', T, Value>,
  ): this;
  WebkitBorderBeforeColor(value: PropertyValue<'WebkitBorderBeforeColor', T>): this {
    return this.write('WebkitBorderBeforeColor', value);
  }
  /**
   * 兼容属性 -webkit-border-before-style；优先参考标准属性 borderBlockStartStyle及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框线型。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  WebkitBorderBeforeStyle(value: KeywordInput<'WebkitBorderBeforeStyle', T>): this;
  /**
   * 兼容属性 -webkit-border-before-style；优先参考标准属性 borderBlockStartStyle及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框线型。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  WebkitBorderBeforeStyle<const Value>(
    value: PropertyInput<'WebkitBorderBeforeStyle', T, Value>,
  ): this;
  WebkitBorderBeforeStyle(value: PropertyValue<'WebkitBorderBeforeStyle', T>): this {
    return this.write('WebkitBorderBeforeStyle', value);
  }
  /**
   * 兼容属性 -webkit-border-before-width；优先参考标准属性 borderBlockStartWidth及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  WebkitBorderBeforeWidth(value: KeywordInput<'WebkitBorderBeforeWidth', T>): this;
  /**
   * 兼容属性 -webkit-border-before-width；优先参考标准属性 borderBlockStartWidth及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * @default:'medium'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  WebkitBorderBeforeWidth<const Value>(
    value: PropertyInput<'WebkitBorderBeforeWidth', T, Value>,
  ): this;
  WebkitBorderBeforeWidth(value: PropertyValue<'WebkitBorderBeforeWidth', T>): this {
    return this.write('WebkitBorderBeforeWidth', value);
  }
  /**
   * 兼容属性 -webkit-border-bottom-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-left-radius
   */
  WebkitBorderBottomLeftRadius(value: KeywordInput<'WebkitBorderBottomLeftRadius', T>): this;
  /**
   * 兼容属性 -webkit-border-bottom-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-left-radius
   */
  WebkitBorderBottomLeftRadius<const Value>(
    value: PropertyInput<'WebkitBorderBottomLeftRadius', T, Value>,
  ): this;
  WebkitBorderBottomLeftRadius(value: PropertyValue<'WebkitBorderBottomLeftRadius', T>): this {
    return this.write('WebkitBorderBottomLeftRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-bottom-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-right-radius
   */
  WebkitBorderBottomRightRadius(value: KeywordInput<'WebkitBorderBottomRightRadius', T>): this;
  /**
   * 兼容属性 -webkit-border-bottom-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-right-radius
   */
  WebkitBorderBottomRightRadius<const Value>(
    value: PropertyInput<'WebkitBorderBottomRightRadius', T, Value>,
  ): this;
  WebkitBorderBottomRightRadius(value: PropertyValue<'WebkitBorderBottomRightRadius', T>): this {
    return this.write('WebkitBorderBottomRightRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * @default:'border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  WebkitBorderImage(value: KeywordInput<'WebkitBorderImage', T>): this;
  /**
   * 兼容属性 -webkit-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * @default:'border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  WebkitBorderImage<const Value>(value: PropertyInput<'WebkitBorderImage', T, Value>): this;
  WebkitBorderImage(value: PropertyValue<'WebkitBorderImage', T>): this {
    return this.write('WebkitBorderImage', value);
  }
  /**
   * 兼容属性 -webkit-border-image-slice；优先参考标准属性及浏览器支持范围。
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * @default:'100%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image-slice
   */
  WebkitBorderImageSlice(value: KeywordInput<'WebkitBorderImageSlice', T>): this;
  /**
   * 兼容属性 -webkit-border-image-slice；优先参考标准属性及浏览器支持范围。
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * @default:'100%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image-slice
   */
  WebkitBorderImageSlice<const Value>(
    value: PropertyInput<'WebkitBorderImageSlice', T, Value>,
  ): this;
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
   *
   * @default:'border-top-left-radius: 0；border-top-right-radius: 0；border-bottom-right-radius: 0；border-bottom-left-radius: 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-radius
   */
  WebkitBorderRadius(value: KeywordInput<'WebkitBorderRadius', T>): this;
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
  WebkitBorderRadius<const Value>(value: PropertyInput<'WebkitBorderRadius', T, Value>): this;
  WebkitBorderRadius(value: PropertyValue<'WebkitBorderRadius', T>): this {
    return this.write('WebkitBorderRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-top-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-left-radius
   */
  WebkitBorderTopLeftRadius(value: KeywordInput<'WebkitBorderTopLeftRadius', T>): this;
  /**
   * 兼容属性 -webkit-border-top-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-left-radius
   */
  WebkitBorderTopLeftRadius<const Value>(
    value: PropertyInput<'WebkitBorderTopLeftRadius', T, Value>,
  ): this;
  WebkitBorderTopLeftRadius(value: PropertyValue<'WebkitBorderTopLeftRadius', T>): this {
    return this.write('WebkitBorderTopLeftRadius', value);
  }
  /**
   * 兼容属性 -webkit-border-top-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-right-radius
   */
  WebkitBorderTopRightRadius(value: KeywordInput<'WebkitBorderTopRightRadius', T>): this;
  /**
   * 兼容属性 -webkit-border-top-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-right-radius
   */
  WebkitBorderTopRightRadius<const Value>(
    value: PropertyInput<'WebkitBorderTopRightRadius', T, Value>,
  ): this;
  WebkitBorderTopRightRadius(value: PropertyValue<'WebkitBorderTopRightRadius', T>): this {
    return this.write('WebkitBorderTopRightRadius', value);
  }
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
  WebkitBoxAlign(value: KeywordInput<'WebkitBoxAlign', T>): this;
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
  WebkitBoxAlign<const Value>(value: PropertyInput<'WebkitBoxAlign', T, Value>): this;
  WebkitBoxAlign(value: PropertyValue<'WebkitBoxAlign', T>): this {
    return this.write('WebkitBoxAlign', value);
  }
  /**
   * 兼容属性 -webkit-box-decoration-break；优先参考标准属性及浏览器支持范围。
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * @default:'slice'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-decoration-break
   */
  WebkitBoxDecorationBreak(value: KeywordInput<'WebkitBoxDecorationBreak', T>): this;
  /**
   * 兼容属性 -webkit-box-decoration-break；优先参考标准属性及浏览器支持范围。
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * @default:'slice'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-decoration-break
   */
  WebkitBoxDecorationBreak<const Value>(
    value: PropertyInput<'WebkitBoxDecorationBreak', T, Value>,
  ): this;
  WebkitBoxDecorationBreak(value: PropertyValue<'WebkitBoxDecorationBreak', T>): this {
    return this.write('WebkitBoxDecorationBreak', value);
  }
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
  WebkitBoxDirection(value: KeywordInput<'WebkitBoxDirection', T>): this;
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
  WebkitBoxDirection<const Value>(value: PropertyInput<'WebkitBoxDirection', T, Value>): this;
  WebkitBoxDirection(value: PropertyValue<'WebkitBoxDirection', T>): this {
    return this.write('WebkitBoxDirection', value);
  }
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
  WebkitBoxFlex(value: KeywordInput<'WebkitBoxFlex', T>): this;
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
  WebkitBoxFlex<const Value>(value: PropertyInput<'WebkitBoxFlex', T, Value>): this;
  WebkitBoxFlex(value: PropertyValue<'WebkitBoxFlex', T>): this {
    return this.write('WebkitBoxFlex', value);
  }
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
  WebkitBoxFlexGroup(value: KeywordInput<'WebkitBoxFlexGroup', T>): this;
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
  WebkitBoxFlexGroup<const Value>(value: PropertyInput<'WebkitBoxFlexGroup', T, Value>): this;
  WebkitBoxFlexGroup(value: PropertyValue<'WebkitBoxFlexGroup', T>): this {
    return this.write('WebkitBoxFlexGroup', value);
  }
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
  WebkitBoxLines(value: KeywordInput<'WebkitBoxLines', T>): this;
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
  WebkitBoxLines<const Value>(value: PropertyInput<'WebkitBoxLines', T, Value>): this;
  WebkitBoxLines(value: PropertyValue<'WebkitBoxLines', T>): this {
    return this.write('WebkitBoxLines', value);
  }
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
  WebkitBoxOrdinalGroup(value: KeywordInput<'WebkitBoxOrdinalGroup', T>): this;
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
  WebkitBoxOrdinalGroup<const Value>(value: PropertyInput<'WebkitBoxOrdinalGroup', T, Value>): this;
  WebkitBoxOrdinalGroup(value: PropertyValue<'WebkitBoxOrdinalGroup', T>): this {
    return this.write('WebkitBoxOrdinalGroup', value);
  }
  /**
   * 指定旧版弹性盒的排列方向；仅为多行截断兼容保留，常规布局请使用 Flex/Grid。
   *
   * @default:'inline-axis'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   *
   * 用于多行省略的兼容组合：与 display: -webkit-box（或 -webkit-inline-box）、-webkit-line-clamp 和 overflow: hidden 配合。此组合由 CSS Overflow 的兼容条款保留，不用于常规弹性布局。
   * @see https://drafts.csswg.org/css-overflow-4/#webkit-line-clamp
   */
  WebkitBoxOrient(value: 'vertical'): this;
  /**
   * 指定旧版弹性盒的排列方向；仅为多行截断兼容保留，常规布局请使用 Flex/Grid。
   *
   * @default:'inline-axis'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  WebkitBoxOrient(value: KeywordInput<'WebkitBoxOrient', T>): this;
  /**
   * 指定旧版弹性盒的排列方向；仅为多行截断兼容保留，常规布局请使用 Flex/Grid。
   *
   * @default:'inline-axis'
   * @extend:'否'
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  WebkitBoxOrient<const Value>(value: PropertyInput<'WebkitBoxOrient', T, Value>): this;
  WebkitBoxOrient(value: PropertyValue<'WebkitBoxOrient', T>): this {
    return this.write('WebkitBoxOrient', value);
  }
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
  WebkitBoxPack(value: KeywordInput<'WebkitBoxPack', T>): this;
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
  WebkitBoxPack<const Value>(value: PropertyInput<'WebkitBoxPack', T, Value>): this;
  WebkitBoxPack(value: PropertyValue<'WebkitBoxPack', T>): this {
    return this.write('WebkitBoxPack', value);
  }
  /**
   * 兼容属性 -webkit-box-reflect；优先参考标准属性及浏览器支持范围。
   * 在指定方向生成元素的镜像，并可设置镜像间距和遮罩。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  WebkitBoxReflect(value: KeywordInput<'WebkitBoxReflect', T>): this;
  /**
   * 兼容属性 -webkit-box-reflect；优先参考标准属性及浏览器支持范围。
   * 在指定方向生成元素的镜像，并可设置镜像间距和遮罩。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  WebkitBoxReflect<const Value>(value: PropertyInput<'WebkitBoxReflect', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-shadow
   */
  WebkitBoxShadow(value: KeywordInput<'WebkitBoxShadow', T>): this;
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
  WebkitBoxShadow<const Value>(value: PropertyInput<'WebkitBoxShadow', T, Value>): this;
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
   * @default:'content-box'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-sizing
   */
  WebkitBoxSizing(value: KeywordInput<'WebkitBoxSizing', T>): this;
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
  WebkitBoxSizing<const Value>(value: PropertyInput<'WebkitBoxSizing', T, Value>): this;
  WebkitBoxSizing(value: PropertyValue<'WebkitBoxSizing', T>): this {
    return this.write('WebkitBoxSizing', value);
  }
  /**
   * 兼容属性 -webkit-clip-path；优先参考标准属性及浏览器支持范围。
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  WebkitClipPath(value: KeywordInput<'WebkitClipPath', T>): this;
  /**
   * 兼容属性 -webkit-clip-path；优先参考标准属性及浏览器支持范围。
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  WebkitClipPath<const Value>(value: PropertyInput<'WebkitClipPath', T, Value>): this;
  WebkitClipPath(value: PropertyValue<'WebkitClipPath', T>): this {
    return this.write('WebkitClipPath', value);
  }
  /**
   * 兼容属性 -webkit-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-count
   */
  WebkitColumnCount(value: KeywordInput<'WebkitColumnCount', T>): this;
  /**
   * 兼容属性 -webkit-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-count
   */
  WebkitColumnCount<const Value>(value: PropertyInput<'WebkitColumnCount', T, Value>): this;
  WebkitColumnCount(value: PropertyValue<'WebkitColumnCount', T>): this {
    return this.write('WebkitColumnCount', value);
  }
  /**
   * 兼容属性 -webkit-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * @default:'balance'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-fill
   */
  WebkitColumnFill(value: KeywordInput<'WebkitColumnFill', T>): this;
  /**
   * 兼容属性 -webkit-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * @default:'balance'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-fill
   */
  WebkitColumnFill<const Value>(value: PropertyInput<'WebkitColumnFill', T, Value>): this;
  WebkitColumnFill(value: PropertyValue<'WebkitColumnFill', T>): this {
    return this.write('WebkitColumnFill', value);
  }
  /**
   * 兼容属性 -webkit-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * @default:'column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule
   */
  WebkitColumnRule(value: KeywordInput<'WebkitColumnRule', T>): this;
  /**
   * 兼容属性 -webkit-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * @default:'column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule
   */
  WebkitColumnRule<const Value>(value: PropertyInput<'WebkitColumnRule', T, Value>): this;
  WebkitColumnRule(value: PropertyValue<'WebkitColumnRule', T>): this {
    return this.write('WebkitColumnRule', value);
  }
  /**
   * 兼容属性 -webkit-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-color
   */
  WebkitColumnRuleColor(value: KeywordInput<'WebkitColumnRuleColor', T>): this;
  /**
   * 兼容属性 -webkit-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-color
   */
  WebkitColumnRuleColor<const Value>(value: PropertyInput<'WebkitColumnRuleColor', T, Value>): this;
  WebkitColumnRuleColor(value: PropertyValue<'WebkitColumnRuleColor', T>): this {
    return this.write('WebkitColumnRuleColor', value);
  }
  /**
   * 兼容属性 -webkit-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  WebkitColumnRuleStyle(value: KeywordInput<'WebkitColumnRuleStyle', T>): this;
  /**
   * 兼容属性 -webkit-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  WebkitColumnRuleStyle<const Value>(value: PropertyInput<'WebkitColumnRuleStyle', T, Value>): this;
  WebkitColumnRuleStyle(value: PropertyValue<'WebkitColumnRuleStyle', T>): this {
    return this.write('WebkitColumnRuleStyle', value);
  }
  /**
   * 兼容属性 -webkit-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  WebkitColumnRuleWidth(value: KeywordInput<'WebkitColumnRuleWidth', T>): this;
  /**
   * 兼容属性 -webkit-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * @default:'medium'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  WebkitColumnRuleWidth<const Value>(value: PropertyInput<'WebkitColumnRuleWidth', T, Value>): this;
  WebkitColumnRuleWidth(value: PropertyValue<'WebkitColumnRuleWidth', T>): this {
    return this.write('WebkitColumnRuleWidth', value);
  }
  /**
   * 兼容属性 -webkit-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * @default:'column-width: auto；column-count: auto；column-height: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-columns
   */
  WebkitColumns(value: KeywordInput<'WebkitColumns', T>): this;
  /**
   * 兼容属性 -webkit-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * @default:'column-width: auto；column-count: auto；column-height: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-columns
   */
  WebkitColumns<const Value>(value: PropertyInput<'WebkitColumns', T, Value>): this;
  WebkitColumns(value: PropertyValue<'WebkitColumns', T>): this {
    return this.write('WebkitColumns', value);
  }
  /**
   * 兼容属性 -webkit-column-span；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-span
   */
  WebkitColumnSpan(value: KeywordInput<'WebkitColumnSpan', T>): this;
  /**
   * 兼容属性 -webkit-column-span；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-span
   */
  WebkitColumnSpan<const Value>(value: PropertyInput<'WebkitColumnSpan', T, Value>): this;
  WebkitColumnSpan(value: PropertyValue<'WebkitColumnSpan', T>): this {
    return this.write('WebkitColumnSpan', value);
  }
  /**
   * 兼容属性 -webkit-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-width
   */
  WebkitColumnWidth(value: KeywordInput<'WebkitColumnWidth', T>): this;
  /**
   * 兼容属性 -webkit-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-width
   */
  WebkitColumnWidth<const Value>(value: PropertyInput<'WebkitColumnWidth', T, Value>): this;
  WebkitColumnWidth(value: PropertyValue<'WebkitColumnWidth', T>): this {
    return this.write('WebkitColumnWidth', value);
  }
  /**
   * 兼容属性 -webkit-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-filter
   */
  WebkitFilter(value: KeywordInput<'WebkitFilter', T>): this;
  /**
   * 兼容属性 -webkit-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-filter
   */
  WebkitFilter<const Value>(value: PropertyInput<'WebkitFilter', T, Value>): this;
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
   *
   * @default:'flex-grow: 0；flex-shrink: 1；flex-basis: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  WebkitFlex(value: KeywordInput<'WebkitFlex', T>): this;
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
  WebkitFlex<const Value>(value: PropertyInput<'WebkitFlex', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  WebkitFlexBasis(value: KeywordInput<'WebkitFlexBasis', T>): this;
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
  WebkitFlexBasis<const Value>(value: PropertyInput<'WebkitFlexBasis', T, Value>): this;
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
   * @default:'row'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-direction
   */
  WebkitFlexDirection(value: KeywordInput<'WebkitFlexDirection', T>): this;
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
  WebkitFlexDirection<const Value>(value: PropertyInput<'WebkitFlexDirection', T, Value>): this;
  WebkitFlexDirection(value: PropertyValue<'WebkitFlexDirection', T>): this {
    return this.write('WebkitFlexDirection', value);
  }
  /**
   * 兼容属性 -webkit-flex-flow；优先参考标准属性及浏览器支持范围。
   * 同时设置弹性布局的主轴方向和换行方式。
   *
   * @default:'flex-direction: row；flex-wrap: nowrap'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  WebkitFlexFlow(value: KeywordInput<'WebkitFlexFlow', T>): this;
  /**
   * 兼容属性 -webkit-flex-flow；优先参考标准属性及浏览器支持范围。
   * 同时设置弹性布局的主轴方向和换行方式。
   *
   * @default:'flex-direction: row；flex-wrap: nowrap'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  WebkitFlexFlow<const Value>(value: PropertyInput<'WebkitFlexFlow', T, Value>): this;
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
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-grow
   */
  WebkitFlexGrow(value: KeywordInput<'WebkitFlexGrow', T>): this;
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
  WebkitFlexGrow<const Value>(value: PropertyInput<'WebkitFlexGrow', T, Value>): this;
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
   * @default:'1'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-shrink
   */
  WebkitFlexShrink(value: KeywordInput<'WebkitFlexShrink', T>): this;
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
  WebkitFlexShrink<const Value>(value: PropertyInput<'WebkitFlexShrink', T, Value>): this;
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
   * @default:'nowrap'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-wrap
   */
  WebkitFlexWrap(value: KeywordInput<'WebkitFlexWrap', T>): this;
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
  WebkitFlexWrap<const Value>(value: PropertyInput<'WebkitFlexWrap', T, Value>): this;
  WebkitFlexWrap(value: PropertyValue<'WebkitFlexWrap', T>): this {
    return this.write('WebkitFlexWrap', value);
  }
  /**
   * 兼容属性 -webkit-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-feature-settings
   */
  WebkitFontFeatureSettings(value: KeywordInput<'WebkitFontFeatureSettings', T>): this;
  /**
   * 兼容属性 -webkit-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-feature-settings
   */
  WebkitFontFeatureSettings<const Value>(
    value: PropertyInput<'WebkitFontFeatureSettings', T, Value>,
  ): this;
  WebkitFontFeatureSettings(value: PropertyValue<'WebkitFontFeatureSettings', T>): this {
    return this.write('WebkitFontFeatureSettings', value);
  }
  /**
   * 兼容属性 -webkit-font-kerning；优先参考标准属性及浏览器支持范围。
   * 设置是否应用字体提供的字偶间距调整。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-kerning
   */
  WebkitFontKerning(value: KeywordInput<'WebkitFontKerning', T>): this;
  /**
   * 兼容属性 -webkit-font-kerning；优先参考标准属性及浏览器支持范围。
   * 设置是否应用字体提供的字偶间距调整。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-kerning
   */
  WebkitFontKerning<const Value>(value: PropertyInput<'WebkitFontKerning', T, Value>): this;
  WebkitFontKerning(value: PropertyValue<'WebkitFontKerning', T>): this {
    return this.write('WebkitFontKerning', value);
  }
  /**
   * 兼容属性 -webkit-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 WebKit 平台的字体平滑方式；不是通用的跨浏览器排版开关。
   *
   * @default:'auto'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  WebkitFontSmoothing(value: KeywordInput<'WebkitFontSmoothing', T>): this;
  /**
   * 兼容属性 -webkit-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 WebKit 平台的字体平滑方式；不是通用的跨浏览器排版开关。
   *
   * @default:'auto'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  WebkitFontSmoothing<const Value>(value: PropertyInput<'WebkitFontSmoothing', T, Value>): this;
  WebkitFontSmoothing(value: PropertyValue<'WebkitFontSmoothing', T>): this {
    return this.write('WebkitFontSmoothing', value);
  }
  /**
   * 兼容属性 -webkit-font-variant-ligatures；优先参考标准属性及浏览器支持范围。
   * 设置字体连字的启用方式。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  WebkitFontVariantLigatures(value: KeywordInput<'WebkitFontVariantLigatures', T>): this;
  /**
   * 兼容属性 -webkit-font-variant-ligatures；优先参考标准属性及浏览器支持范围。
   * 设置字体连字的启用方式。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  WebkitFontVariantLigatures<const Value>(
    value: PropertyInput<'WebkitFontVariantLigatures', T, Value>,
  ): this;
  WebkitFontVariantLigatures(value: PropertyValue<'WebkitFontVariantLigatures', T>): this {
    return this.write('WebkitFontVariantLigatures', value);
  }
  /**
   * 兼容属性 -webkit-hyphenate-character；优先参考标准属性及浏览器支持范围。
   * 设置自动断词时插入的断字符号。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphenate-character
   */
  WebkitHyphenateCharacter(value: KeywordInput<'WebkitHyphenateCharacter', T>): this;
  /**
   * 兼容属性 -webkit-hyphenate-character；优先参考标准属性及浏览器支持范围。
   * 设置自动断词时插入的断字符号。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphenate-character
   */
  WebkitHyphenateCharacter<const Value>(
    value: PropertyInput<'WebkitHyphenateCharacter', T, Value>,
  ): this;
  WebkitHyphenateCharacter(value: PropertyValue<'WebkitHyphenateCharacter', T>): this {
    return this.write('WebkitHyphenateCharacter', value);
  }
  /**
   * 兼容属性 -webkit-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphens
   */
  WebkitHyphens(value: KeywordInput<'WebkitHyphens', T>): this;
  /**
   * 兼容属性 -webkit-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * @default:'manual'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphens
   */
  WebkitHyphens<const Value>(value: PropertyInput<'WebkitHyphens', T, Value>): this;
  WebkitHyphens(value: PropertyValue<'WebkitHyphens', T>): this {
    return this.write('WebkitHyphens', value);
  }
  /**
   * 兼容属性 -webkit-initial-letter；优先参考标准属性及浏览器支持范围。
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-initial-letter
   */
  WebkitInitialLetter(value: KeywordInput<'WebkitInitialLetter', T>): this;
  /**
   * 兼容属性 -webkit-initial-letter；优先参考标准属性及浏览器支持范围。
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-initial-letter
   */
  WebkitInitialLetter<const Value>(value: PropertyInput<'WebkitInitialLetter', T, Value>): this;
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
   * @default:'normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-justify-content
   */
  WebkitJustifyContent(value: KeywordInput<'WebkitJustifyContent', T>): this;
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
  WebkitJustifyContent<const Value>(value: PropertyInput<'WebkitJustifyContent', T, Value>): this;
  WebkitJustifyContent(value: PropertyValue<'WebkitJustifyContent', T>): this {
    return this.write('WebkitJustifyContent', value);
  }
  /**
   * 兼容属性 -webkit-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  WebkitLineBreak(value: KeywordInput<'WebkitLineBreak', T>): this;
  /**
   * 兼容属性 -webkit-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  WebkitLineBreak<const Value>(value: PropertyInput<'WebkitLineBreak', T, Value>): this;
  WebkitLineBreak(value: PropertyValue<'WebkitLineBreak', T>): this {
    return this.write('WebkitLineBreak', value);
  }
  /**
   * 限制多行文本显示的行数；与 display: -webkit-box、WebkitBoxOrient('vertical') 和 overflow: hidden 配合，不删除文本内容。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-clamp
   */
  WebkitLineClamp(value: KeywordInput<'WebkitLineClamp', T>): this;
  /**
   * 限制多行文本显示的行数；与 display: -webkit-box、WebkitBoxOrient('vertical') 和 overflow: hidden 配合，不删除文本内容。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-clamp
   */
  WebkitLineClamp<const Value>(value: PropertyInput<'WebkitLineClamp', T, Value>): this;
  WebkitLineClamp(value: PropertyValue<'WebkitLineClamp', T>): this {
    return this.write('WebkitLineClamp', value);
  }
  /**
   * 兼容属性 -webkit-logical-height；优先参考标准属性 blockSize及浏览器支持范围。
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  WebkitLogicalHeight(value: KeywordInput<'WebkitLogicalHeight', T>): this;
  /**
   * 兼容属性 -webkit-logical-height；优先参考标准属性 blockSize及浏览器支持范围。
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  WebkitLogicalHeight<const Value>(value: PropertyInput<'WebkitLogicalHeight', T, Value>): this;
  WebkitLogicalHeight(value: PropertyValue<'WebkitLogicalHeight', T>): this {
    return this.write('WebkitLogicalHeight', value);
  }
  /**
   * 兼容属性 -webkit-logical-width；优先参考标准属性 inlineSize及浏览器支持范围。
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  WebkitLogicalWidth(value: KeywordInput<'WebkitLogicalWidth', T>): this;
  /**
   * 兼容属性 -webkit-logical-width；优先参考标准属性 inlineSize及浏览器支持范围。
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  WebkitLogicalWidth<const Value>(value: PropertyInput<'WebkitLogicalWidth', T, Value>): this;
  WebkitLogicalWidth(value: PropertyValue<'WebkitLogicalWidth', T>): this {
    return this.write('WebkitLogicalWidth', value);
  }
  /**
   * 兼容属性 -webkit-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-end
   */
  WebkitMarginEnd(value: KeywordInput<'WebkitMarginEnd', T>): this;
  /**
   * 兼容属性 -webkit-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-end
   */
  WebkitMarginEnd<const Value>(value: PropertyInput<'WebkitMarginEnd', T, Value>): this;
  WebkitMarginEnd(value: PropertyValue<'WebkitMarginEnd', T>): this {
    return this.write('WebkitMarginEnd', value);
  }
  /**
   * 兼容属性 -webkit-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-start
   */
  WebkitMarginStart(value: KeywordInput<'WebkitMarginStart', T>): this;
  /**
   * 兼容属性 -webkit-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-start
   */
  WebkitMarginStart<const Value>(value: PropertyInput<'WebkitMarginStart', T, Value>): this;
  WebkitMarginStart(value: PropertyValue<'WebkitMarginStart', T>): this {
    return this.write('WebkitMarginStart', value);
  }
  /**
   * 兼容属性 -webkit-mask；优先参考标准属性及浏览器支持范围。
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   *
   * @default:'-webkit-mask-image: none；-webkit-mask-repeat: repeat；-webkit-mask-attachment: scroll；-webkit-mask-position: 0% 0%；-webkit-mask-origin: padding；-webkit-mask-clip: border'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  WebkitMask(value: KeywordInput<'WebkitMask', T>): this;
  /**
   * 兼容属性 -webkit-mask；优先参考标准属性及浏览器支持范围。
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   *
   * @default:'-webkit-mask-image: none；-webkit-mask-repeat: repeat；-webkit-mask-attachment: scroll；-webkit-mask-position: 0% 0%；-webkit-mask-origin: padding；-webkit-mask-clip: border'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  WebkitMask<const Value>(value: PropertyInput<'WebkitMask', T, Value>): this;
  WebkitMask(value: PropertyValue<'WebkitMask', T>): this {
    return this.write('WebkitMask', value);
  }
  /**
   * 兼容属性 -webkit-mask-attachment；优先参考标准属性及浏览器支持范围。
   * 指定旧版遮罩图像是否随内容滚动。
   *
   * @default:'scroll'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  WebkitMaskAttachment(value: KeywordInput<'WebkitMaskAttachment', T>): this;
  /**
   * 兼容属性 -webkit-mask-attachment；优先参考标准属性及浏览器支持范围。
   * 指定旧版遮罩图像是否随内容滚动。
   *
   * @default:'scroll'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  WebkitMaskAttachment<const Value>(value: PropertyInput<'WebkitMaskAttachment', T, Value>): this;
  WebkitMaskAttachment(value: PropertyValue<'WebkitMaskAttachment', T>): this {
    return this.write('WebkitMaskAttachment', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image；优先参考标准属性 maskBorder及浏览器支持范围。
   * 设置基于九宫格图像切片的边框遮罩。
   *
   * @default:'mask-border-mode: alpha；mask-border-outset: 0；mask-border-repeat: stretch；mask-border-slice: 0；mask-border-source: none；mask-border-width: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  WebkitMaskBoxImage(value: KeywordInput<'WebkitMaskBoxImage', T>): this;
  /**
   * 兼容属性 -webkit-mask-box-image；优先参考标准属性 maskBorder及浏览器支持范围。
   * 设置基于九宫格图像切片的边框遮罩。
   *
   * @default:'mask-border-mode: alpha；mask-border-outset: 0；mask-border-repeat: stretch；mask-border-slice: 0；mask-border-source: none；mask-border-width: auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  WebkitMaskBoxImage<const Value>(value: PropertyInput<'WebkitMaskBoxImage', T, Value>): this;
  WebkitMaskBoxImage(value: PropertyValue<'WebkitMaskBoxImage', T>): this {
    return this.write('WebkitMaskBoxImage', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-outset；优先参考标准属性 maskBorderOutset及浏览器支持范围。
   * 设置边框遮罩超出边框盒的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-outset
   */
  WebkitMaskBoxImageOutset(value: KeywordInput<'WebkitMaskBoxImageOutset', T>): this;
  /**
   * 兼容属性 -webkit-mask-box-image-outset；优先参考标准属性 maskBorderOutset及浏览器支持范围。
   * 设置边框遮罩超出边框盒的距离。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-outset
   */
  WebkitMaskBoxImageOutset<const Value>(
    value: PropertyInput<'WebkitMaskBoxImageOutset', T, Value>,
  ): this;
  WebkitMaskBoxImageOutset(value: PropertyValue<'WebkitMaskBoxImageOutset', T>): this {
    return this.write('WebkitMaskBoxImageOutset', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-repeat；优先参考标准属性 maskBorderRepeat及浏览器支持范围。
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * @default:'stretch'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  WebkitMaskBoxImageRepeat(value: KeywordInput<'WebkitMaskBoxImageRepeat', T>): this;
  /**
   * 兼容属性 -webkit-mask-box-image-repeat；优先参考标准属性 maskBorderRepeat及浏览器支持范围。
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * @default:'stretch'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  WebkitMaskBoxImageRepeat<const Value>(
    value: PropertyInput<'WebkitMaskBoxImageRepeat', T, Value>,
  ): this;
  WebkitMaskBoxImageRepeat(value: PropertyValue<'WebkitMaskBoxImageRepeat', T>): this {
    return this.write('WebkitMaskBoxImageRepeat', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-slice；优先参考标准属性 maskBorderSlice及浏览器支持范围。
   * 设置边框遮罩图像的切片位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-slice
   */
  WebkitMaskBoxImageSlice(value: KeywordInput<'WebkitMaskBoxImageSlice', T>): this;
  /**
   * 兼容属性 -webkit-mask-box-image-slice；优先参考标准属性 maskBorderSlice及浏览器支持范围。
   * 设置边框遮罩图像的切片位置。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-slice
   */
  WebkitMaskBoxImageSlice<const Value>(
    value: PropertyInput<'WebkitMaskBoxImageSlice', T, Value>,
  ): this;
  WebkitMaskBoxImageSlice(value: PropertyValue<'WebkitMaskBoxImageSlice', T>): this {
    return this.write('WebkitMaskBoxImageSlice', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-source；优先参考标准属性 maskBorderSource及浏览器支持范围。
   * 设置边框遮罩的源图像。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-source
   */
  WebkitMaskBoxImageSource(value: KeywordInput<'WebkitMaskBoxImageSource', T>): this;
  /**
   * 兼容属性 -webkit-mask-box-image-source；优先参考标准属性 maskBorderSource及浏览器支持范围。
   * 设置边框遮罩的源图像。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-source
   */
  WebkitMaskBoxImageSource<const Value>(
    value: PropertyInput<'WebkitMaskBoxImageSource', T, Value>,
  ): this;
  WebkitMaskBoxImageSource(value: PropertyValue<'WebkitMaskBoxImageSource', T>): this {
    return this.write('WebkitMaskBoxImageSource', value);
  }
  /**
   * 兼容属性 -webkit-mask-box-image-width；优先参考标准属性 maskBorderWidth及浏览器支持范围。
   * 设置边框遮罩各边的宽度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-width
   */
  WebkitMaskBoxImageWidth(value: KeywordInput<'WebkitMaskBoxImageWidth', T>): this;
  /**
   * 兼容属性 -webkit-mask-box-image-width；优先参考标准属性 maskBorderWidth及浏览器支持范围。
   * 设置边框遮罩各边的宽度。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-width
   */
  WebkitMaskBoxImageWidth<const Value>(
    value: PropertyInput<'WebkitMaskBoxImageWidth', T, Value>,
  ): this;
  WebkitMaskBoxImageWidth(value: PropertyValue<'WebkitMaskBoxImageWidth', T>): this {
    return this.write('WebkitMaskBoxImageWidth', value);
  }
  /**
   * 兼容属性 -webkit-mask-clip；优先参考标准属性及浏览器支持范围。
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * @default:'border'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  WebkitMaskClip(value: KeywordInput<'WebkitMaskClip', T>): this;
  /**
   * 兼容属性 -webkit-mask-clip；优先参考标准属性及浏览器支持范围。
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * @default:'border'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  WebkitMaskClip<const Value>(value: PropertyInput<'WebkitMaskClip', T, Value>): this;
  WebkitMaskClip(value: PropertyValue<'WebkitMaskClip', T>): this {
    return this.write('WebkitMaskClip', value);
  }
  /**
   * 兼容属性 -webkit-mask-composite；优先参考标准属性及浏览器支持范围。
   * 设置多个遮罩图层之间的合成运算。
   *
   * @default:'source-over'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  WebkitMaskComposite(value: KeywordInput<'WebkitMaskComposite', T>): this;
  /**
   * 兼容属性 -webkit-mask-composite；优先参考标准属性及浏览器支持范围。
   * 设置多个遮罩图层之间的合成运算。
   *
   * @default:'source-over'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  WebkitMaskComposite<const Value>(value: PropertyInput<'WebkitMaskComposite', T, Value>): this;
  WebkitMaskComposite(value: PropertyValue<'WebkitMaskComposite', T>): this {
    return this.write('WebkitMaskComposite', value);
  }
  /**
   * 兼容属性 -webkit-mask-image；优先参考标准属性及浏览器支持范围。
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-image
   */
  WebkitMaskImage(value: KeywordInput<'WebkitMaskImage', T>): this;
  /**
   * 兼容属性 -webkit-mask-image；优先参考标准属性及浏览器支持范围。
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-image
   */
  WebkitMaskImage<const Value>(value: PropertyInput<'WebkitMaskImage', T, Value>): this;
  WebkitMaskImage(value: PropertyValue<'WebkitMaskImage', T>): this {
    return this.write('WebkitMaskImage', value);
  }
  /**
   * 兼容属性 -webkit-mask-origin；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像定位所依据的盒子。
   *
   * @default:'padding'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  WebkitMaskOrigin(value: KeywordInput<'WebkitMaskOrigin', T>): this;
  /**
   * 兼容属性 -webkit-mask-origin；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像定位所依据的盒子。
   *
   * @default:'padding'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  WebkitMaskOrigin<const Value>(value: PropertyInput<'WebkitMaskOrigin', T, Value>): this;
  WebkitMaskOrigin(value: PropertyValue<'WebkitMaskOrigin', T>): this {
    return this.write('WebkitMaskOrigin', value);
  }
  /**
   * 兼容属性 -webkit-mask-position；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像在定位区域中的位置。
   *
   * @default:'0% 0%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  WebkitMaskPosition(value: KeywordInput<'WebkitMaskPosition', T>): this;
  /**
   * 兼容属性 -webkit-mask-position；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像在定位区域中的位置。
   *
   * @default:'0% 0%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  WebkitMaskPosition<const Value>(value: PropertyInput<'WebkitMaskPosition', T, Value>): this;
  WebkitMaskPosition(value: PropertyValue<'WebkitMaskPosition', T>): this {
    return this.write('WebkitMaskPosition', value);
  }
  /**
   * 兼容属性 -webkit-mask-position-x；优先参考标准属性 backgroundPositionX及浏览器支持范围。
   * 设置遮罩图像的水平位置，可使用长度、百分比或位置关键字。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  WebkitMaskPositionX(value: KeywordInput<'WebkitMaskPositionX', T>): this;
  /**
   * 兼容属性 -webkit-mask-position-x；优先参考标准属性 backgroundPositionX及浏览器支持范围。
   * 设置遮罩图像的水平位置，可使用长度、百分比或位置关键字。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  WebkitMaskPositionX<const Value>(value: PropertyInput<'WebkitMaskPositionX', T, Value>): this;
  WebkitMaskPositionX(value: PropertyValue<'WebkitMaskPositionX', T>): this {
    return this.write('WebkitMaskPositionX', value);
  }
  /**
   * 兼容属性 -webkit-mask-position-y；优先参考标准属性 backgroundPositionY及浏览器支持范围。
   * 设置遮罩图像的垂直位置，可使用长度、百分比或位置关键字。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  WebkitMaskPositionY(value: KeywordInput<'WebkitMaskPositionY', T>): this;
  /**
   * 兼容属性 -webkit-mask-position-y；优先参考标准属性 backgroundPositionY及浏览器支持范围。
   * 设置遮罩图像的垂直位置，可使用长度、百分比或位置关键字。
   *
   * @default:'0%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  WebkitMaskPositionY<const Value>(value: PropertyInput<'WebkitMaskPositionY', T, Value>): this;
  WebkitMaskPositionY(value: PropertyValue<'WebkitMaskPositionY', T>): this {
    return this.write('WebkitMaskPositionY', value);
  }
  /**
   * 兼容属性 -webkit-mask-repeat；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  WebkitMaskRepeat(value: KeywordInput<'WebkitMaskRepeat', T>): this;
  /**
   * 兼容属性 -webkit-mask-repeat；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  WebkitMaskRepeat<const Value>(value: PropertyInput<'WebkitMaskRepeat', T, Value>): this;
  WebkitMaskRepeat(value: PropertyValue<'WebkitMaskRepeat', T>): this {
    return this.write('WebkitMaskRepeat', value);
  }
  /**
   * 兼容属性 -webkit-mask-repeat-x；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在水平方向的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  WebkitMaskRepeatX(value: KeywordInput<'WebkitMaskRepeatX', T>): this;
  /**
   * 兼容属性 -webkit-mask-repeat-x；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在水平方向的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  WebkitMaskRepeatX<const Value>(value: PropertyInput<'WebkitMaskRepeatX', T, Value>): this;
  WebkitMaskRepeatX(value: PropertyValue<'WebkitMaskRepeatX', T>): this {
    return this.write('WebkitMaskRepeatX', value);
  }
  /**
   * 兼容属性 -webkit-mask-repeat-y；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在垂直方向的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  WebkitMaskRepeatY(value: KeywordInput<'WebkitMaskRepeatY', T>): this;
  /**
   * 兼容属性 -webkit-mask-repeat-y；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在垂直方向的重复方式。
   *
   * @default:'repeat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  WebkitMaskRepeatY<const Value>(value: PropertyInput<'WebkitMaskRepeatY', T, Value>): this;
  WebkitMaskRepeatY(value: PropertyValue<'WebkitMaskRepeatY', T>): this {
    return this.write('WebkitMaskRepeatY', value);
  }
  /**
   * 兼容属性 -webkit-mask-size；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的尺寸。
   *
   * @default:'auto auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-size
   */
  WebkitMaskSize(value: KeywordInput<'WebkitMaskSize', T>): this;
  /**
   * 兼容属性 -webkit-mask-size；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的尺寸。
   *
   * @default:'auto auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-size
   */
  WebkitMaskSize<const Value>(value: PropertyInput<'WebkitMaskSize', T, Value>): this;
  WebkitMaskSize(value: PropertyValue<'WebkitMaskSize', T>): this {
    return this.write('WebkitMaskSize', value);
  }
  /**
   * 兼容属性 -webkit-max-inline-size；优先参考标准属性及浏览器支持范围。
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  WebkitMaxInlineSize(value: KeywordInput<'WebkitMaxInlineSize', T>): this;
  /**
   * 兼容属性 -webkit-max-inline-size；优先参考标准属性及浏览器支持范围。
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  WebkitMaxInlineSize<const Value>(value: PropertyInput<'WebkitMaxInlineSize', T, Value>): this;
  WebkitMaxInlineSize(value: PropertyValue<'WebkitMaxInlineSize', T>): this {
    return this.write('WebkitMaxInlineSize', value);
  }
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
  WebkitOrder(value: KeywordInput<'WebkitOrder', T>): this;
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
  WebkitOrder<const Value>(value: PropertyInput<'WebkitOrder', T, Value>): this;
  WebkitOrder(value: PropertyValue<'WebkitOrder', T>): this {
    return this.write('WebkitOrder', value);
  }
  /**
   * 兼容属性 -webkit-overflow-scrolling；优先参考标准属性及浏览器支持范围。
   * 选择特定旧版 WebKit 触控环境的滚动方式，包括惯性滚动。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-overflow-scrolling
   */
  WebkitOverflowScrolling(value: KeywordInput<'WebkitOverflowScrolling', T>): this;
  /**
   * 兼容属性 -webkit-overflow-scrolling；优先参考标准属性及浏览器支持范围。
   * 选择特定旧版 WebKit 触控环境的滚动方式，包括惯性滚动。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-overflow-scrolling
   */
  WebkitOverflowScrolling<const Value>(
    value: PropertyInput<'WebkitOverflowScrolling', T, Value>,
  ): this;
  WebkitOverflowScrolling(value: PropertyValue<'WebkitOverflowScrolling', T>): this {
    return this.write('WebkitOverflowScrolling', value);
  }
  /**
   * 兼容属性 -webkit-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-end
   */
  WebkitPaddingEnd(value: KeywordInput<'WebkitPaddingEnd', T>): this;
  /**
   * 兼容属性 -webkit-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-end
   */
  WebkitPaddingEnd<const Value>(value: PropertyInput<'WebkitPaddingEnd', T, Value>): this;
  WebkitPaddingEnd(value: PropertyValue<'WebkitPaddingEnd', T>): this {
    return this.write('WebkitPaddingEnd', value);
  }
  /**
   * 兼容属性 -webkit-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-start
   */
  WebkitPaddingStart(value: KeywordInput<'WebkitPaddingStart', T>): this;
  /**
   * 兼容属性 -webkit-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-start
   */
  WebkitPaddingStart<const Value>(value: PropertyInput<'WebkitPaddingStart', T, Value>): this;
  WebkitPaddingStart(value: PropertyValue<'WebkitPaddingStart', T>): this {
    return this.write('WebkitPaddingStart', value);
  }
  /**
   * 兼容属性 -webkit-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective
   */
  WebkitPerspective(value: KeywordInput<'WebkitPerspective', T>): this;
  /**
   * 兼容属性 -webkit-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective
   */
  WebkitPerspective<const Value>(value: PropertyInput<'WebkitPerspective', T, Value>): this;
  WebkitPerspective(value: PropertyValue<'WebkitPerspective', T>): this {
    return this.write('WebkitPerspective', value);
  }
  /**
   * 兼容属性 -webkit-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * @default:'50% 50%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  WebkitPerspectiveOrigin(value: KeywordInput<'WebkitPerspectiveOrigin', T>): this;
  /**
   * 兼容属性 -webkit-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * @default:'50% 50%'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  WebkitPerspectiveOrigin<const Value>(
    value: PropertyInput<'WebkitPerspectiveOrigin', T, Value>,
  ): this;
  WebkitPerspectiveOrigin(value: PropertyValue<'WebkitPerspectiveOrigin', T>): this {
    return this.write('WebkitPerspectiveOrigin', value);
  }
  /**
   * 兼容属性 -webkit-print-color-adjust；优先参考标准属性及浏览器支持范围。
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * @default:'economy'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-print-color-adjust
   */
  WebkitPrintColorAdjust(value: KeywordInput<'WebkitPrintColorAdjust', T>): this;
  /**
   * 兼容属性 -webkit-print-color-adjust；优先参考标准属性及浏览器支持范围。
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * @default:'economy'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-print-color-adjust
   */
  WebkitPrintColorAdjust<const Value>(
    value: PropertyInput<'WebkitPrintColorAdjust', T, Value>,
  ): this;
  WebkitPrintColorAdjust(value: PropertyValue<'WebkitPrintColorAdjust', T>): this {
    return this.write('WebkitPrintColorAdjust', value);
  }
  /**
   * 兼容属性 -webkit-ruby-position；优先参考标准属性及浏览器支持范围。
   * 设置注音文字相对于基底文字的位置。
   *
   * @default:'alternate'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  WebkitRubyPosition(value: KeywordInput<'WebkitRubyPosition', T>): this;
  /**
   * 兼容属性 -webkit-ruby-position；优先参考标准属性及浏览器支持范围。
   * 设置注音文字相对于基底文字的位置。
   *
   * @default:'alternate'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  WebkitRubyPosition<const Value>(value: PropertyInput<'WebkitRubyPosition', T, Value>): this;
  WebkitRubyPosition(value: PropertyValue<'WebkitRubyPosition', T>): this {
    return this.write('WebkitRubyPosition', value);
  }
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
  WebkitScrollSnapType(value: KeywordInput<'WebkitScrollSnapType', T>): this;
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
  WebkitScrollSnapType<const Value>(value: PropertyInput<'WebkitScrollSnapType', T, Value>): this;
  WebkitScrollSnapType(value: PropertyValue<'WebkitScrollSnapType', T>): this {
    return this.write('WebkitScrollSnapType', value);
  }
  /**
   * 兼容属性 -webkit-shape-margin；优先参考标准属性及浏览器支持范围。
   * 设置文字环绕形状之外的额外间距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-shape-margin
   */
  WebkitShapeMargin(value: KeywordInput<'WebkitShapeMargin', T>): this;
  /**
   * 兼容属性 -webkit-shape-margin；优先参考标准属性及浏览器支持范围。
   * 设置文字环绕形状之外的额外间距。
   *
   * @default:'0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-shape-margin
   */
  WebkitShapeMargin<const Value>(value: PropertyInput<'WebkitShapeMargin', T, Value>): this;
  WebkitShapeMargin(value: PropertyValue<'WebkitShapeMargin', T>): this {
    return this.write('WebkitShapeMargin', value);
  }
  /**
   * 兼容属性 -webkit-tap-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置 WebKit 触控点击链接或可交互区域时的高亮颜色。
   *
   * @default:'black'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-tap-highlight-color
   */
  WebkitTapHighlightColor(value: KeywordInput<'WebkitTapHighlightColor', T>): this;
  /**
   * 兼容属性 -webkit-tap-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置 WebKit 触控点击链接或可交互区域时的高亮颜色。
   *
   * @default:'black'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-tap-highlight-color
   */
  WebkitTapHighlightColor<const Value>(
    value: PropertyInput<'WebkitTapHighlightColor', T, Value>,
  ): this;
  WebkitTapHighlightColor(value: PropertyValue<'WebkitTapHighlightColor', T>): this {
    return this.write('WebkitTapHighlightColor', value);
  }
  /**
   * 兼容属性 -webkit-text-combine；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-combine
   */
  WebkitTextCombine(value: KeywordInput<'WebkitTextCombine', T>): this;
  /**
   * 兼容属性 -webkit-text-combine；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-combine
   */
  WebkitTextCombine<const Value>(value: PropertyInput<'WebkitTextCombine', T, Value>): this;
  WebkitTextCombine(value: PropertyValue<'WebkitTextCombine', T>): this {
    return this.write('WebkitTextCombine', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-color
   */
  WebkitTextDecorationColor(value: KeywordInput<'WebkitTextDecorationColor', T>): this;
  /**
   * 兼容属性 -webkit-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * @default:'currentcolor'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-color
   */
  WebkitTextDecorationColor<const Value>(
    value: PropertyInput<'WebkitTextDecorationColor', T, Value>,
  ): this;
  WebkitTextDecorationColor(value: PropertyValue<'WebkitTextDecorationColor', T>): this {
    return this.write('WebkitTextDecorationColor', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  WebkitTextDecorationLine(value: KeywordInput<'WebkitTextDecorationLine', T>): this;
  /**
   * 兼容属性 -webkit-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  WebkitTextDecorationLine<const Value>(
    value: PropertyInput<'WebkitTextDecorationLine', T, Value>,
  ): this;
  WebkitTextDecorationLine(value: PropertyValue<'WebkitTextDecorationLine', T>): this {
    return this.write('WebkitTextDecorationLine', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-skip；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * @default:'objects'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  WebkitTextDecorationSkip(value: KeywordInput<'WebkitTextDecorationSkip', T>): this;
  /**
   * 兼容属性 -webkit-text-decoration-skip；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * @default:'objects'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  WebkitTextDecorationSkip<const Value>(
    value: PropertyInput<'WebkitTextDecorationSkip', T, Value>,
  ): this;
  WebkitTextDecorationSkip(value: PropertyValue<'WebkitTextDecorationSkip', T>): this {
    return this.write('WebkitTextDecorationSkip', value);
  }
  /**
   * 兼容属性 -webkit-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * @default:'solid'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  WebkitTextDecorationStyle(value: KeywordInput<'WebkitTextDecorationStyle', T>): this;
  /**
   * 兼容属性 -webkit-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * @default:'solid'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  WebkitTextDecorationStyle<const Value>(
    value: PropertyInput<'WebkitTextDecorationStyle', T, Value>,
  ): this;
  WebkitTextDecorationStyle(value: PropertyValue<'WebkitTextDecorationStyle', T>): this {
    return this.write('WebkitTextDecorationStyle', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis；优先参考标准属性及浏览器支持范围。
   * 同时设置文字着重号的样式和颜色。
   *
   * @default:'text-emphasis-style: none；text-emphasis-color: currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis
   */
  WebkitTextEmphasis(value: KeywordInput<'WebkitTextEmphasis', T>): this;
  /**
   * 兼容属性 -webkit-text-emphasis；优先参考标准属性及浏览器支持范围。
   * 同时设置文字着重号的样式和颜色。
   *
   * @default:'text-emphasis-style: none；text-emphasis-color: currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis
   */
  WebkitTextEmphasis<const Value>(value: PropertyInput<'WebkitTextEmphasis', T, Value>): this;
  WebkitTextEmphasis(value: PropertyValue<'WebkitTextEmphasis', T>): this {
    return this.write('WebkitTextEmphasis', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis-color；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-color
   */
  WebkitTextEmphasisColor(value: KeywordInput<'WebkitTextEmphasisColor', T>): this;
  /**
   * 兼容属性 -webkit-text-emphasis-color；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-color
   */
  WebkitTextEmphasisColor<const Value>(
    value: PropertyInput<'WebkitTextEmphasisColor', T, Value>,
  ): this;
  WebkitTextEmphasisColor(value: PropertyValue<'WebkitTextEmphasisColor', T>): this {
    return this.write('WebkitTextEmphasisColor', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis-position；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号位于文字的哪一侧。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-position
   */
  WebkitTextEmphasisPosition(value: KeywordInput<'WebkitTextEmphasisPosition', T>): this;
  /**
   * 兼容属性 -webkit-text-emphasis-position；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号位于文字的哪一侧。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-position
   */
  WebkitTextEmphasisPosition<const Value>(
    value: PropertyInput<'WebkitTextEmphasisPosition', T, Value>,
  ): this;
  WebkitTextEmphasisPosition(value: PropertyValue<'WebkitTextEmphasisPosition', T>): this {
    return this.write('WebkitTextEmphasisPosition', value);
  }
  /**
   * 兼容属性 -webkit-text-emphasis-style；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号的形状和填充方式。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  WebkitTextEmphasisStyle(value: KeywordInput<'WebkitTextEmphasisStyle', T>): this;
  /**
   * 兼容属性 -webkit-text-emphasis-style；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号的形状和填充方式。
   *
   * @default:'none'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  WebkitTextEmphasisStyle<const Value>(
    value: PropertyInput<'WebkitTextEmphasisStyle', T, Value>,
  ): this;
  WebkitTextEmphasisStyle(value: PropertyValue<'WebkitTextEmphasisStyle', T>): this {
    return this.write('WebkitTextEmphasisStyle', value);
  }
  /**
   * 兼容属性 -webkit-text-fill-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形内部填充色，可独立于文字描边色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-fill-color
   */
  WebkitTextFillColor(value: KeywordInput<'WebkitTextFillColor', T>): this;
  /**
   * 兼容属性 -webkit-text-fill-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形内部填充色，可独立于文字描边色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-fill-color
   */
  WebkitTextFillColor<const Value>(value: PropertyInput<'WebkitTextFillColor', T, Value>): this;
  WebkitTextFillColor(value: PropertyValue<'WebkitTextFillColor', T>): this {
    return this.write('WebkitTextFillColor', value);
  }
  /**
   * 兼容属性 -webkit-text-orientation；优先参考标准属性及浏览器支持范围。
   * 设置竖排模式下字符的方向。
   *
   * @default:'mixed'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  WebkitTextOrientation(value: KeywordInput<'WebkitTextOrientation', T>): this;
  /**
   * 兼容属性 -webkit-text-orientation；优先参考标准属性及浏览器支持范围。
   * 设置竖排模式下字符的方向。
   *
   * @default:'mixed'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  WebkitTextOrientation<const Value>(value: PropertyInput<'WebkitTextOrientation', T, Value>): this;
  WebkitTextOrientation(value: PropertyValue<'WebkitTextOrientation', T>): this {
    return this.write('WebkitTextOrientation', value);
  }
  /**
   * 兼容属性 -webkit-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * @default:'支持文本放大的移动浏览器为 auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-size-adjust
   */
  WebkitTextSizeAdjust(value: KeywordInput<'WebkitTextSizeAdjust', T>): this;
  /**
   * 兼容属性 -webkit-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * @default:'支持文本放大的移动浏览器为 auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-size-adjust
   */
  WebkitTextSizeAdjust<const Value>(value: PropertyInput<'WebkitTextSizeAdjust', T, Value>): this;
  WebkitTextSizeAdjust(value: PropertyValue<'WebkitTextSizeAdjust', T>): this {
    return this.write('WebkitTextSizeAdjust', value);
  }
  /**
   * 兼容属性 -webkit-text-stroke；优先参考标准属性及浏览器支持范围。
   * 合并设置文字字形描边的宽度和颜色。
   *
   * @default:'-webkit-text-stroke-width: 0；-webkit-text-stroke-color: currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke
   */
  WebkitTextStroke(value: KeywordInput<'WebkitTextStroke', T>): this;
  /**
   * 兼容属性 -webkit-text-stroke；优先参考标准属性及浏览器支持范围。
   * 合并设置文字字形描边的宽度和颜色。
   *
   * @default:'-webkit-text-stroke-width: 0；-webkit-text-stroke-color: currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke
   */
  WebkitTextStroke<const Value>(value: PropertyInput<'WebkitTextStroke', T, Value>): this;
  WebkitTextStroke(value: PropertyValue<'WebkitTextStroke', T>): this {
    return this.write('WebkitTextStroke', value);
  }
  /**
   * 兼容属性 -webkit-text-stroke-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-color
   */
  WebkitTextStrokeColor(value: KeywordInput<'WebkitTextStrokeColor', T>): this;
  /**
   * 兼容属性 -webkit-text-stroke-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边颜色。
   *
   * @default:'currentcolor'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-color
   */
  WebkitTextStrokeColor<const Value>(value: PropertyInput<'WebkitTextStrokeColor', T, Value>): this;
  WebkitTextStrokeColor(value: PropertyValue<'WebkitTextStrokeColor', T>): this {
    return this.write('WebkitTextStrokeColor', value);
  }
  /**
   * 兼容属性 -webkit-text-stroke-width；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边宽度。
   *
   * @default:'0'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-width
   */
  WebkitTextStrokeWidth(value: KeywordInput<'WebkitTextStrokeWidth', T>): this;
  /**
   * 兼容属性 -webkit-text-stroke-width；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边宽度。
   *
   * @default:'0'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-width
   */
  WebkitTextStrokeWidth<const Value>(value: PropertyInput<'WebkitTextStrokeWidth', T, Value>): this;
  WebkitTextStrokeWidth(value: PropertyValue<'WebkitTextStrokeWidth', T>): this {
    return this.write('WebkitTextStrokeWidth', value);
  }
  /**
   * 兼容属性 -webkit-text-underline-position；优先参考标准属性及浏览器支持范围。
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  WebkitTextUnderlinePosition(value: KeywordInput<'WebkitTextUnderlinePosition', T>): this;
  /**
   * 兼容属性 -webkit-text-underline-position；优先参考标准属性及浏览器支持范围。
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  WebkitTextUnderlinePosition<const Value>(
    value: PropertyInput<'WebkitTextUnderlinePosition', T, Value>,
  ): this;
  WebkitTextUnderlinePosition(value: PropertyValue<'WebkitTextUnderlinePosition', T>): this {
    return this.write('WebkitTextUnderlinePosition', value);
  }
  /**
   * 兼容属性 -webkit-touch-callout；优先参考标准属性及浏览器支持范围。
   * 控制特定 WebKit 触控环境是否显示长按内容菜单。
   *
   * @default:'default'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-touch-callout
   */
  WebkitTouchCallout(value: KeywordInput<'WebkitTouchCallout', T>): this;
  /**
   * 兼容属性 -webkit-touch-callout；优先参考标准属性及浏览器支持范围。
   * 控制特定 WebKit 触控环境是否显示长按内容菜单。
   *
   * @default:'default'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-touch-callout
   */
  WebkitTouchCallout<const Value>(value: PropertyInput<'WebkitTouchCallout', T, Value>): this;
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
   * @default:'none'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform
   */
  WebkitTransform(value: KeywordInput<'WebkitTransform', T>): this;
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
  WebkitTransform<const Value>(value: PropertyInput<'WebkitTransform', T, Value>): this;
  WebkitTransform(value: PropertyValue<'WebkitTransform', T>): this {
    return this.write('WebkitTransform', value);
  }
  /**
   * 兼容属性 -webkit-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  WebkitTransformOrigin(value: KeywordInput<'WebkitTransformOrigin', T>): this;
  /**
   * 兼容属性 -webkit-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * @default:'50% 50% 0'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  WebkitTransformOrigin<const Value>(value: PropertyInput<'WebkitTransformOrigin', T, Value>): this;
  WebkitTransformOrigin(value: PropertyValue<'WebkitTransformOrigin', T>): this {
    return this.write('WebkitTransformOrigin', value);
  }
  /**
   * 兼容属性 -webkit-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * @default:'flat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-style
   */
  WebkitTransformStyle(value: KeywordInput<'WebkitTransformStyle', T>): this;
  /**
   * 兼容属性 -webkit-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * @default:'flat'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-style
   */
  WebkitTransformStyle<const Value>(value: PropertyInput<'WebkitTransformStyle', T, Value>): this;
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
   *
   * @default:'transition-delay: 0s；transition-duration: 0s；transition-property: all；transition-timing-function: ease；transition-behavior: normal'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  WebkitTransition(value: KeywordInput<'WebkitTransition', T>): this;
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
  WebkitTransition<const Value>(value: PropertyInput<'WebkitTransition', T, Value>): this;
  WebkitTransition(value: PropertyValue<'WebkitTransition', T>): this {
    return this.write('WebkitTransition', value);
  }
  /**
   * 兼容属性 -webkit-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-delay
   */
  WebkitTransitionDelay(value: KeywordInput<'WebkitTransitionDelay', T>): this;
  /**
   * 兼容属性 -webkit-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-delay
   */
  WebkitTransitionDelay<const Value>(value: PropertyInput<'WebkitTransitionDelay', T, Value>): this;
  WebkitTransitionDelay(value: PropertyValue<'WebkitTransitionDelay', T>): this {
    return this.write('WebkitTransitionDelay', value);
  }
  /**
   * 兼容属性 -webkit-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-duration
   */
  WebkitTransitionDuration(value: KeywordInput<'WebkitTransitionDuration', T>): this;
  /**
   * 兼容属性 -webkit-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * @default:'0s'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-duration
   */
  WebkitTransitionDuration<const Value>(
    value: PropertyInput<'WebkitTransitionDuration', T, Value>,
  ): this;
  WebkitTransitionDuration(value: PropertyValue<'WebkitTransitionDuration', T>): this {
    return this.write('WebkitTransitionDuration', value);
  }
  /**
   * 兼容属性 -webkit-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-property
   */
  WebkitTransitionProperty(value: KeywordInput<'WebkitTransitionProperty', T>): this;
  /**
   * 兼容属性 -webkit-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * @default:'all'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-property
   */
  WebkitTransitionProperty<const Value>(
    value: PropertyInput<'WebkitTransitionProperty', T, Value>,
  ): this;
  WebkitTransitionProperty(value: PropertyValue<'WebkitTransitionProperty', T>): this {
    return this.write('WebkitTransitionProperty', value);
  }
  /**
   * 兼容属性 -webkit-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  WebkitTransitionTimingFunction(value: KeywordInput<'WebkitTransitionTimingFunction', T>): this;
  /**
   * 兼容属性 -webkit-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * @default:'ease'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  WebkitTransitionTimingFunction<const Value>(
    value: PropertyInput<'WebkitTransitionTimingFunction', T, Value>,
  ): this;
  WebkitTransitionTimingFunction(value: PropertyValue<'WebkitTransitionTimingFunction', T>): this {
    return this.write('WebkitTransitionTimingFunction', value);
  }
  /**
   * 兼容属性 -webkit-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * @default:'read-only'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  WebkitUserModify(value: KeywordInput<'WebkitUserModify', T>): this;
  /**
   * 兼容属性 -webkit-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * @default:'read-only'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  WebkitUserModify<const Value>(value: PropertyInput<'WebkitUserModify', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-select
   */
  WebkitUserSelect(value: KeywordInput<'WebkitUserSelect', T>): this;
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
  WebkitUserSelect<const Value>(value: PropertyInput<'WebkitUserSelect', T, Value>): this;
  WebkitUserSelect(value: PropertyValue<'WebkitUserSelect', T>): this {
    return this.write('WebkitUserSelect', value);
  }
  /**
   * 兼容属性 -webkit-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * @default:'horizontal-tb'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  WebkitWritingMode(value: KeywordInput<'WebkitWritingMode', T>): this;
  /**
   * 兼容属性 -webkit-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * @default:'horizontal-tb'
   * @extend:'是'
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  WebkitWritingMode<const Value>(value: PropertyInput<'WebkitWritingMode', T, Value>): this;
  WebkitWritingMode(value: PropertyValue<'WebkitWritingMode', T>): this {
    return this.write('WebkitWritingMode', value);
  }
  /**
   * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。
   *
   * @default:'无独立的实际初始值'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  all(value: KeywordInput<'all', T>): this;
  /**
   * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。
   *
   * @default:'无独立的实际初始值'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  all<const Value>(value: PropertyInput<'all', T, Value>): this;
  all(value: PropertyValue<'all', T>): this {
    return this.write('all', value);
  }
  /**
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * @default:'slice'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  boxDecorationBreak(value: KeywordInput<'boxDecorationBreak', T>): this;
  /**
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * @default:'slice'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  boxDecorationBreak<const Value>(value: PropertyInput<'boxDecorationBreak', T, Value>): this;
  boxDecorationBreak(value: PropertyValue<'boxDecorationBreak', T>): this {
    return this.write('boxDecorationBreak', value);
  }
  /**
   * 设置 SVG 圆或椭圆中心的横坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  cx(value: KeywordInput<'cx', T>): this;
  /**
   * 设置 SVG 圆或椭圆中心的横坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  cx<const Value>(value: PropertyInput<'cx', T, Value>): this;
  cx(value: PropertyValue<'cx', T>): this {
    return this.write('cx', value);
  }
  /**
   * 设置 SVG 圆或椭圆中心的纵坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  cy(value: KeywordInput<'cy', T>): this;
  /**
   * 设置 SVG 圆或椭圆中心的纵坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  cy<const Value>(value: PropertyInput<'cy', T, Value>): this;
  cy(value: PropertyValue<'cy', T>): this {
    return this.write('cy', value);
  }
  /**
   * 设置 SVG path 元素的路径数据。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  d(value: KeywordInput<'d', T>): this;
  /**
   * 设置 SVG path 元素的路径数据。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  d<const Value>(value: PropertyInput<'d', T, Value>): this;
  d(value: PropertyValue<'d', T>): this {
    return this.write('d', value);
  }
  /**
   * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。
   *
   * @default:'fixed'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  fieldSizing(value: KeywordInput<'fieldSizing', T>): this;
  /**
   * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。
   *
   * @default:'fixed'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  fieldSizing<const Value>(value: PropertyInput<'fieldSizing', T, Value>): this;
  fieldSizing(value: PropertyValue<'fieldSizing', T>): this {
    return this.write('fieldSizing', value);
  }
  /**
   * 控制元素是否参与系统强制颜色模式的自动替换。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  forcedColorAdjust(value: KeywordInput<'forcedColorAdjust', T>): this;
  /**
   * 控制元素是否参与系统强制颜色模式的自动替换。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  forcedColorAdjust<const Value>(value: PropertyInput<'forcedColorAdjust', T, Value>): this;
  forcedColorAdjust(value: PropertyValue<'forcedColorAdjust', T>): this {
    return this.write('forcedColorAdjust', value);
  }
  /**
   * 设置自动断词时插入的断字符号。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  hyphenateCharacter(value: KeywordInput<'hyphenateCharacter', T>): this;
  /**
   * 设置自动断词时插入的断字符号。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  hyphenateCharacter<const Value>(value: PropertyInput<'hyphenateCharacter', T, Value>): this;
  hyphenateCharacter(value: PropertyValue<'hyphenateCharacter', T>): this {
    return this.write('hyphenateCharacter', value);
  }
  /**
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  hyphenateLimitChars(value: KeywordInput<'hyphenateLimitChars', T>): this;
  /**
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  hyphenateLimitChars<const Value>(value: PropertyInput<'hyphenateLimitChars', T, Value>): this;
  hyphenateLimitChars(value: PropertyValue<'hyphenateLimitChars', T>): this {
    return this.write('hyphenateLimitChars', value);
  }
  /**
   * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。
   *
   * @default:'numeric-only'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  interpolateSize(value: KeywordInput<'interpolateSize', T>): this;
  /**
   * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。
   *
   * @default:'numeric-only'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  interpolateSize<const Value>(value: PropertyInput<'interpolateSize', T, Value>): this;
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
   * @default:'auto'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
   */
  isolation(value: KeywordInput<'isolation', T>): this;
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
  isolation<const Value>(value: PropertyInput<'isolation', T, Value>): this;
  isolation(value: PropertyValue<'isolation', T>): this {
    return this.write('isolation', value);
  }
  /**
   * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。
   *
   * @default:'pack'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  masonryAutoFlow(value: KeywordInput<'masonryAutoFlow', T>): this;
  /**
   * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。
   *
   * @default:'pack'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  masonryAutoFlow<const Value>(value: PropertyInput<'masonryAutoFlow', T, Value>): this;
  masonryAutoFlow(value: PropertyValue<'masonryAutoFlow', T>): this {
    return this.write('masonryAutoFlow', value);
  }
  /**
   * 设置数学公式的嵌套深度，用于数学字号等排版计算。
   *
   * @default:'0'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  mathDepth(value: KeywordInput<'mathDepth', T>): this;
  /**
   * 设置数学公式的嵌套深度，用于数学字号等排版计算。
   *
   * @default:'0'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  mathDepth<const Value>(value: PropertyInput<'mathDepth', T, Value>): this;
  mathDepth(value: PropertyValue<'mathDepth', T>): this {
    return this.write('mathDepth', value);
  }
  /**
   * 控制数学上标采用正常还是压缩的垂直偏移。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  mathShift(value: KeywordInput<'mathShift', T>): this;
  /**
   * 控制数学上标采用正常还是压缩的垂直偏移。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  mathShift<const Value>(value: PropertyInput<'mathShift', T, Value>): this;
  mathShift(value: PropertyValue<'mathShift', T>): this {
    return this.write('mathShift', value);
  }
  /**
   * 设置数学公式采用正常还是紧凑排版。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  mathStyle(value: KeywordInput<'mathStyle', T>): this;
  /**
   * 设置数学公式采用正常还是紧凑排版。
   *
   * @default:'normal'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  mathStyle<const Value>(value: PropertyInput<'mathStyle', T, Value>): this;
  mathStyle(value: PropertyValue<'mathStyle', T>): this {
    return this.write('mathStyle', value);
  }
  /**
   * 设置运动路径的旧式简写；对应现代 offset 属性族。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  motion(value: KeywordInput<'motion', T>): this;
  /**
   * 设置运动路径的旧式简写；对应现代 offset 属性族。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  motion<const Value>(value: PropertyInput<'motion', T, Value>): this;
  motion(value: PropertyValue<'motion', T>): this {
    return this.write('motion', value);
  }
  /**
   * 设置沿运动路径行进距离的旧属性；对应 offset-distance。
   *
   * @default:'0'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-distance
   */
  motionDistance(value: KeywordInput<'motionDistance', T>): this;
  /**
   * 设置沿运动路径行进距离的旧属性；对应 offset-distance。
   *
   * @default:'0'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-distance
   */
  motionDistance<const Value>(value: PropertyInput<'motionDistance', T, Value>): this;
  motionDistance(value: PropertyValue<'motionDistance', T>): this {
    return this.write('motionDistance', value);
  }
  /**
   * 设置运动路径的旧属性；对应 offset-path。
   *
   * @default:'none'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  motionPath(value: KeywordInput<'motionPath', T>): this;
  /**
   * 设置运动路径的旧属性；对应 offset-path。
   *
   * @default:'none'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  motionPath<const Value>(value: PropertyInput<'motionPath', T, Value>): this;
  motionPath(value: PropertyValue<'motionPath', T>): this {
    return this.write('motionPath', value);
  }
  /**
   * 设置运动路径旋转方式的旧属性；对应 offset-rotate。
   *
   * @default:'auto'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-rotation
   */
  motionRotation(value: KeywordInput<'motionRotation', T>): this;
  /**
   * 设置运动路径旋转方式的旧属性；对应 offset-rotate。
   *
   * @default:'auto'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-rotation
   */
  motionRotation<const Value>(value: PropertyInput<'motionRotation', T, Value>): this;
  motionRotation(value: PropertyValue<'motionRotation', T>): this {
    return this.write('motionRotation', value);
  }
  /**
   * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  overlay(value: KeywordInput<'overlay', T>): this;
  /**
   * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  overlay<const Value>(value: PropertyInput<'overlay', T, Value>): this;
  overlay(value: PropertyValue<'overlay', T>): this {
    return this.write('overlay', value);
  }
  /**
   * 设置 SVG 圆的半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  r(value: KeywordInput<'r', T>): this;
  /**
   * 设置 SVG 圆的半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  r<const Value>(value: PropertyInput<'r', T, Value>): this;
  r(value: PropertyValue<'r', T>): this {
    return this.write('r', value);
  }
  /**
   * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  rx(value: KeywordInput<'rx', T>): this;
  /**
   * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  rx<const Value>(value: PropertyInput<'rx', T, Value>): this;
  rx(value: PropertyValue<'rx', T>): this {
    return this.write('rx', value);
  }
  /**
   * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  ry(value: KeywordInput<'ry', T>): this;
  /**
   * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  ry<const Value>(value: PropertyInput<'ry', T, Value>): this;
  ry(value: PropertyValue<'ry', T>): this {
    return this.write('ry', value);
  }
  /**
   * 设置语音呈现时文字、数字和标点的朗读方式；使用前核对语音媒体支持。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  speakAs(value: KeywordInput<'speakAs', T>): this;
  /**
   * 设置语音呈现时文字、数字和标点的朗读方式；使用前核对语音媒体支持。
   *
   * @default:'auto'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  speakAs<const Value>(value: PropertyInput<'speakAs', T, Value>): this;
  speakAs(value: PropertyValue<'speakAs', T>): this {
    return this.write('speakAs', value);
  }
  /**
   * 设置描边颜色的扩展属性；常规 SVG 优先使用 stroke 并核对支持情况。
   *
   * @default:'transparent'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  strokeColor(value: KeywordInput<'strokeColor', T>): this;
  /**
   * 设置描边颜色的扩展属性；常规 SVG 优先使用 stroke 并核对支持情况。
   *
   * @default:'transparent'
   * @extend:'是'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  strokeColor<const Value>(value: PropertyInput<'strokeColor', T, Value>): this;
  strokeColor(value: PropertyValue<'strokeColor', T>): this {
    return this.write('strokeColor', value);
  }
  /**
   * 扩大命名动画时间线的可引用作用域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  timelineScope(value: KeywordInput<'timelineScope', T>): this;
  /**
   * 扩大命名动画时间线的可引用作用域。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  timelineScope<const Value>(value: PropertyInput<'timelineScope', T, Value>): this;
  timelineScope(value: PropertyValue<'timelineScope', T>): this {
    return this.write('timelineScope', value);
  }
  /**
   * 同时声明基于元素可见进度的时间线名称与轴。
   *
   * @default:'view-timeline-name: none；view-timeline-axis: block'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  viewTimeline(value: KeywordInput<'viewTimeline', T>): this;
  /**
   * 同时声明基于元素可见进度的时间线名称与轴。
   *
   * @default:'view-timeline-name: none；view-timeline-axis: block'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  viewTimeline<const Value>(value: PropertyInput<'viewTimeline', T, Value>): this;
  viewTimeline(value: PropertyValue<'viewTimeline', T>): this {
    return this.write('viewTimeline', value);
  }
  /**
   * 设置可见进度时间线所观察的滚动轴。
   *
   * @default:'block'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  viewTimelineAxis(value: KeywordInput<'viewTimelineAxis', T>): this;
  /**
   * 设置可见进度时间线所观察的滚动轴。
   *
   * @default:'block'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  viewTimelineAxis<const Value>(value: PropertyInput<'viewTimelineAxis', T, Value>): this;
  viewTimelineAxis(value: PropertyValue<'viewTimelineAxis', T>): this {
    return this.write('viewTimelineAxis', value);
  }
  /**
   * 设置可见进度时间线使用的滚动视口内缩范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  viewTimelineInset(value: KeywordInput<'viewTimelineInset', T>): this;
  /**
   * 设置可见进度时间线使用的滚动视口内缩范围。
   *
   * @default:'auto'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  viewTimelineInset<const Value>(value: PropertyInput<'viewTimelineInset', T, Value>): this;
  viewTimelineInset(value: PropertyValue<'viewTimelineInset', T>): this {
    return this.write('viewTimelineInset', value);
  }
  /**
   * 声明基于元素进入和离开滚动视口的时间线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  viewTimelineName(value: KeywordInput<'viewTimelineName', T>): this;
  /**
   * 声明基于元素进入和离开滚动视口的时间线名称。
   *
   * @default:'none'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  viewTimelineName<const Value>(value: PropertyInput<'viewTimelineName', T, Value>): this;
  viewTimelineName(value: PropertyValue<'viewTimelineName', T>): this {
    return this.write('viewTimelineName', value);
  }
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
  willChange(value: KeywordInput<'willChange', T>): this;
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
  willChange<const Value>(value: PropertyInput<'willChange', T, Value>): this;
  willChange(value: PropertyValue<'willChange', T>): this {
    return this.write('willChange', value);
  }
  /**
   * 设置适用 SVG 元素的水平几何坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  x(value: KeywordInput<'x', T>): this;
  /**
   * 设置适用 SVG 元素的水平几何坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  x<const Value>(value: PropertyInput<'x', T, Value>): this;
  x(value: PropertyValue<'x', T>): this {
    return this.write('x', value);
  }
  /**
   * 设置适用 SVG 元素的垂直几何坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  y(value: KeywordInput<'y', T>): this;
  /**
   * 设置适用 SVG 元素的垂直几何坐标。
   *
   * @default:'0'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  y<const Value>(value: PropertyInput<'y', T, Value>): this;
  y(value: PropertyValue<'y', T>): this {
    return this.write('y', value);
  }
  /**
   * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。
   *
   * @default:'1'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  zoom(value: KeywordInput<'zoom', T>): this;
  /**
   * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。
   *
   * @default:'1'
   * @extend:'否'
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  zoom<const Value>(value: PropertyInput<'zoom', T, Value>): this;
  zoom(value: PropertyValue<'zoom', T>): this {
    return this.write('zoom', value);
  }
}
