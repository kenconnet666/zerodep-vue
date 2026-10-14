// 由 scripts/css/generate.mjs 从固定 csstype@3.2.3 生成；请勿手改。
import { THEME_SOURCE } from '../tokens.ts';
/** 系统关键字的主题扩展边界；子类在属性组中增加 _ 开头的主题成员。 */
export class SystemKeywords {
  readonly [THEME_SOURCE] = true as const;
  /**
   * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  declare readonly accentColor: {};
  /**
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  declare readonly alignContent: {};
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
  declare readonly alignItems: {};
  /**
   * 选择行内或 SVG 文本参与对齐时使用的基线。
   *
   * CSS 规范初始值：`baseline`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  declare readonly alignmentBaseline: {};
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
  declare readonly alignSelf: {};
  /**
   * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  declare readonly alignTracks: {};
  /**
   * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  declare readonly all: {};
  /**
   * 为元素声明锚点名称，供锚点定位的元素引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  declare readonly anchorName: {};
  /**
   * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  declare readonly anchorScope: {};
  /**
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  declare readonly animation: {};
  /**
   * 设置动画效果与底层属性值的替换、叠加或累积方式。
   *
   * CSS 规范初始值：`replace`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  declare readonly animationComposition: {};
  /**
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  declare readonly animationDelay: {};
  /**
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  declare readonly animationDirection: {};
  /**
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  declare readonly animationDuration: {};
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
  declare readonly animationFillMode: {};
  /**
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  declare readonly animationIterationCount: {};
  /**
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  declare readonly animationName: {};
  /**
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  declare readonly animationPlayState: {};
  /**
   * 设置动画附着到时间线的起止范围。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  declare readonly animationRange: {};
  /**
   * 设置动画在时间线上的附着范围终点。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  declare readonly animationRangeEnd: {};
  /**
   * 设置动画在时间线上的附着范围起点。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  declare readonly animationRangeStart: {};
  /**
   * 选择驱动动画的时间线，例如文档时间或滚动进度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  declare readonly animationTimeline: {};
  /**
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  declare readonly animationTimingFunction: {};
  /**
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  declare readonly appearance: {};
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
  declare readonly aspectRatio: {};
  /**
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  declare readonly backdropFilter: {};
  /**
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  declare readonly backfaceVisibility: {};
  /**
   * 集中设置背景颜色、图像、位置、尺寸、重复及绘制区域。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  declare readonly background: {};
  /**
   * 设置背景图像相对于视口、元素或局部滚动内容的固定方式。
   *
   * CSS 规范初始值：`scroll`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  declare readonly backgroundAttachment: {};
  /**
   * 设置背景图层彼此之间以及与背景色之间的混合模式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  declare readonly backgroundBlendMode: {};
  /**
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  declare readonly backgroundClip: {};
  /**
   * 设置元素背景颜色，位于背景图像下方。
   *
   * CSS 规范初始值：`transparent`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  declare readonly backgroundColor: {};
  /**
   * 设置一个或多个背景图像或渐变图层。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  declare readonly backgroundImage: {};
  /**
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  declare readonly backgroundOrigin: {};
  /**
   * 设置背景图像在定位区域内的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  declare readonly backgroundPosition: {};
  /**
   * 设置背景图像的水平位置。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  declare readonly backgroundPositionX: {};
  /**
   * 设置背景图像的垂直位置。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  declare readonly backgroundPositionY: {};
  /**
   * 设置背景图像在水平和垂直方向上的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  declare readonly backgroundRepeat: {};
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
  declare readonly backgroundSize: {};
  /**
   * 使 SVG 文本基线相对于其基准位置偏移。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  declare readonly baselineShift: {};
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
  declare readonly blockSize: {};
  /**
   * 同时设置四边边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  declare readonly border: {};
  /**
   * 设置逻辑块轴起始侧和结束侧的边框。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  declare readonly borderBlock: {};
  /**
   * 设置逻辑块轴两侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  declare readonly borderBlockColor: {};
  /**
   * 设置逻辑块轴结束侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  declare readonly borderBlockEnd: {};
  /**
   * 设置逻辑块轴结束侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  declare readonly borderBlockEndColor: {};
  /**
   * 设置逻辑块轴结束侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  declare readonly borderBlockEndStyle: {};
  /**
   * 设置逻辑块轴结束侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  declare readonly borderBlockEndWidth: {};
  /**
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  declare readonly borderBlockStart: {};
  /**
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  declare readonly borderBlockStartColor: {};
  /**
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  declare readonly borderBlockStartStyle: {};
  /**
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  declare readonly borderBlockStartWidth: {};
  /**
   * 设置逻辑块轴两侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  declare readonly borderBlockStyle: {};
  /**
   * 设置逻辑块轴两侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  declare readonly borderBlockWidth: {};
  /**
   * 设置下边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  declare readonly borderBottom: {};
  /**
   * 设置下边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  declare readonly borderBottomColor: {};
  /**
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  declare readonly borderBottomLeftRadius: {};
  /**
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  declare readonly borderBottomRightRadius: {};
  /**
   * 设置下边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  declare readonly borderBottomStyle: {};
  /**
   * 设置下边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  declare readonly borderBottomWidth: {};
  /**
   * 设置表格相邻单元格边框合并还是分离。
   *
   * CSS 规范初始值：`separate`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  declare readonly borderCollapse: {};
  /**
   * 设置四边边框颜色，支持按上、右、下、左顺序简写。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  declare readonly borderColor: {};
  /**
   * 设置逻辑块轴结束侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  declare readonly borderEndEndRadius: {};
  /**
   * 设置逻辑块轴结束侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  declare readonly borderEndStartRadius: {};
  /**
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  declare readonly borderImage: {};
  /**
   * 设置边框图像超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  declare readonly borderImageOutset: {};
  /**
   * 设置边框图像切片沿边框的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  declare readonly borderImageRepeat: {};
  /**
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：`100%`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  declare readonly borderImageSlice: {};
  /**
   * 指定边框使用的图像或渐变。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  declare readonly borderImageSource: {};
  /**
   * 设置边框图像各边的绘制宽度。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  declare readonly borderImageWidth: {};
  /**
   * 设置逻辑行内轴起始侧和结束侧的边框。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  declare readonly borderInline: {};
  /**
   * 设置逻辑行内轴两侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  declare readonly borderInlineColor: {};
  /**
   * 设置逻辑行内轴结束侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  declare readonly borderInlineEnd: {};
  /**
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  declare readonly borderInlineEndColor: {};
  /**
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  declare readonly borderInlineEndStyle: {};
  /**
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  declare readonly borderInlineEndWidth: {};
  /**
   * 设置逻辑行内轴起始侧边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  declare readonly borderInlineStart: {};
  /**
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  declare readonly borderInlineStartColor: {};
  /**
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  declare readonly borderInlineStartStyle: {};
  /**
   * 设置逻辑行内轴起始侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  declare readonly borderInlineStartWidth: {};
  /**
   * 设置逻辑行内轴两侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  declare readonly borderInlineStyle: {};
  /**
   * 设置逻辑行内轴两侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  declare readonly borderInlineWidth: {};
  /**
   * 设置左边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  declare readonly borderLeft: {};
  /**
   * 设置左边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  declare readonly borderLeftColor: {};
  /**
   * 设置左边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  declare readonly borderLeftStyle: {};
  /**
   * 设置左边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  declare readonly borderLeftWidth: {};
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
  declare readonly borderRadius: {};
  /**
   * 设置右边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  declare readonly borderRight: {};
  /**
   * 设置右边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  declare readonly borderRightColor: {};
  /**
   * 设置右边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  declare readonly borderRightStyle: {};
  /**
   * 设置右边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  declare readonly borderRightWidth: {};
  /**
   * 设置分离边框模型下表格单元格之间的水平和垂直间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  declare readonly borderSpacing: {};
  /**
   * 设置逻辑块轴起始侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  declare readonly borderStartEndRadius: {};
  /**
   * 设置逻辑块轴起始侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  declare readonly borderStartStartRadius: {};
  /**
   * 设置四边边框线型。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  declare readonly borderStyle: {};
  /**
   * 设置上边框的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  declare readonly borderTop: {};
  /**
   * 设置上边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  declare readonly borderTopColor: {};
  /**
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  declare readonly borderTopLeftRadius: {};
  /**
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  declare readonly borderTopRightRadius: {};
  /**
   * 设置上边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  declare readonly borderTopStyle: {};
  /**
   * 设置上边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  declare readonly borderTopWidth: {};
  /**
   * 设置四边边框宽度；可见边框通常还需要非 none 的线型。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  declare readonly borderWidth: {};
  /**
   * 设置定位元素相对于其定位参照的下侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  declare readonly bottom: {};
  /**
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  declare readonly boxAlign: {};
  /**
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：`slice`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  declare readonly boxDecorationBreak: {};
  /**
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-direction
   */
  declare readonly boxDirection: {};
  /**
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex
   */
  declare readonly boxFlex: {};
  /**
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex-group
   */
  declare readonly boxFlexGroup: {};
  /**
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：`single`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  declare readonly boxLines: {};
  /**
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-ordinal-group
   */
  declare readonly boxOrdinalGroup: {};
  /**
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  declare readonly boxOrient: {};
  /**
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  declare readonly boxPack: {};
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
  declare readonly boxShadow: {};
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
  declare readonly boxSizing: {};
  /**
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  declare readonly breakAfter: {};
  /**
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  declare readonly breakBefore: {};
  /**
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  declare readonly breakInside: {};
  /**
   * 设置表格标题相对于表格的放置侧。
   *
   * CSS 规范初始值：`top`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  declare readonly captionSide: {};
  /**
   * 集中设置文本插入光标的颜色和形状。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  declare readonly caret: {};
  /**
   * 设置可编辑内容中的文本插入光标颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  declare readonly caretColor: {};
  /**
   * 设置文本插入光标的形状。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  declare readonly caretShape: {};
  /**
   * 要求元素避让指定侧的前置浮动元素。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  declare readonly clear: {};
  /**
   * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  declare readonly clip: {};
  /**
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  declare readonly clipPath: {};
  /**
   * 设置 SVG 裁剪路径判断内部区域所用的填充规则。
   *
   * CSS 规范初始值：`nonzero`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  declare readonly clipRule: {};
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
  declare readonly color: {};
  /**
   * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  declare readonly colorAdjust: {};
  /**
   * 设置 SVG 图形颜色插值所用的色彩空间。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  declare readonly colorInterpolation: {};
  /**
   * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。
   *
   * CSS 规范初始值：`linearRGB`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  declare readonly colorInterpolationFilters: {};
  /**
   * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  declare readonly colorRendering: {};
  /**
   * 声明元素支持的配色方案，影响原生控件、滚动条等浏览器绘制内容。
   *
   * 声明支持的方案不等于为应用生成主题颜色；文字、背景和业务 token 仍需自行定义。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  declare readonly colorScheme: {};
  /**
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  declare readonly columnCount: {};
  /**
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：`balance`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  declare readonly columnFill: {};
  /**
   * 设置布局中相邻列之间的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  declare readonly columnGap: {};
  /**
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  declare readonly columnRule: {};
  /**
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  declare readonly columnRuleColor: {};
  /**
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  declare readonly columnRuleStyle: {};
  /**
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  declare readonly columnRuleWidth: {};
  /**
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  declare readonly columns: {};
  /**
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  declare readonly columnSpan: {};
  /**
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  declare readonly columnWidth: {};
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
  declare readonly contain: {};
  /**
   * 同时声明查询容器的名称和类型。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  declare readonly container: {};
  /**
   * 为查询容器命名，供 @container 条件规则选择。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  declare readonly containerName: {};
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
  declare readonly containerType: {};
  /**
   * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  declare readonly containIntrinsicBlockSize: {};
  /**
   * 设置高度隔离或跳过内容渲染时使用的替代内部高度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  declare readonly containIntrinsicHeight: {};
  /**
   * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  declare readonly containIntrinsicInlineSize: {};
  /**
   * 集中设置尺寸隔离时使用的替代内部宽高。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  declare readonly containIntrinsicSize: {};
  /**
   * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  declare readonly containIntrinsicWidth: {};
  /**
   * 设置生成内容、替换内容或伪元素的内容。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  declare readonly content: {};
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
  declare readonly contentVisibility: {};
  /**
   * 增加或减少指定 CSS 计数器的值。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  declare readonly counterIncrement: {};
  /**
   * 创建或重置 CSS 计数器。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  declare readonly counterReset: {};
  /**
   * 设置已有 CSS 计数器的值，必要时创建计数器。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  declare readonly counterSet: {};
  /**
   * 设置指针位于元素上方时显示的光标。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  declare readonly cursor: {};
  /**
   * 设置 SVG 圆或椭圆中心的横坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  declare readonly cx: {};
  /**
   * 设置 SVG 圆或椭圆中心的纵坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  declare readonly cy: {};
  /**
   * 设置 SVG path 元素的路径数据。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  declare readonly d: {};
  /**
   * 设置文本基本方向，参与双向文本及部分布局计算。
   *
   * CSS 规范初始值：`ltr`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  declare readonly direction: {};
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
  declare readonly display: {};
  /**
   * 选择 SVG 文本布局的主导基线及基线表。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  declare readonly dominantBaseline: {};
  /**
   * 控制分离边框表格中空单元格的边框和背景是否绘制。
   *
   * CSS 规范初始值：`show`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  declare readonly emptyCells: {};
  /**
   * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。
   *
   * CSS 规范初始值：`fixed`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  declare readonly fieldSizing: {};
  /**
   * 设置 SVG 图形内部的填充绘制方式。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  declare readonly fill: {};
  /**
   * 设置 SVG 填充的不透明度，不影响描边。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  declare readonly fillOpacity: {};
  /**
   * 设置复杂 SVG 路径的内部区域判定规则。
   *
   * CSS 规范初始值：`nonzero`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  declare readonly fillRule: {};
  /**
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  declare readonly filter: {};
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
  declare readonly flex: {};
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
  declare readonly flexBasis: {};
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
  declare readonly flexDirection: {};
  /**
   * 同时设置弹性布局的主轴方向和换行方式。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  declare readonly flexFlow: {};
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
  declare readonly flexGrow: {};
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
  declare readonly flexShrink: {};
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
  declare readonly flexWrap: {};
  /**
   * 将元素浮动到指定侧，使相邻行内内容围绕它排列。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  declare readonly float: {};
  /**
   * 设置 SVG feFlood 或相关滤镜的洪泛颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  declare readonly floodColor: {};
  /**
   * 设置 SVG 洪泛滤镜颜色的不透明度。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  declare readonly floodOpacity: {};
  /**
   * 集中设置字体样式、粗细、大小、行高和字体族等信息。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  declare readonly font: {};
  /**
   * 设置按优先级排列的字体族及通用字体回退。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  declare readonly fontFamily: {};
  /**
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  declare readonly fontFeatureSettings: {};
  /**
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  declare readonly fontKerning: {};
  /**
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  declare readonly fontLanguageOverride: {};
  /**
   * 控制支持光学尺寸轴的字体是否按字号优化字形。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  declare readonly fontOpticalSizing: {};
  /**
   * 选择或覆盖彩色字体使用的调色板。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  declare readonly fontPalette: {};
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
  declare readonly fontSize: {};
  /**
   * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  declare readonly fontSizeAdjust: {};
  /**
   * 控制字体平滑的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  declare readonly fontSmooth: {};
  /**
   * 选择字体的宽窄字面；font-width 是其较新的名称。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  declare readonly fontStretch: {};
  /**
   * 选择正常、斜体或倾斜字体样式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  declare readonly fontStyle: {};
  /**
   * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。
   *
   * CSS 规范初始值：`weight style small-caps position `，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  declare readonly fontSynthesis: {};
  /**
   * 控制浏览器是否可以合成上标和下标字形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  declare readonly fontSynthesisPosition: {};
  /**
   * 控制浏览器是否可以合成小型大写字形。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  declare readonly fontSynthesisSmallCaps: {};
  /**
   * 控制浏览器是否可以合成倾斜字体。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  declare readonly fontSynthesisStyle: {};
  /**
   * 控制浏览器是否可以合成加粗字体。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  declare readonly fontSynthesisWeight: {};
  /**
   * 集中设置字体的连字、大小写、数字及其他变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  declare readonly fontVariant: {};
  /**
   * 选择字体提供的替代字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  declare readonly fontVariantAlternates: {};
  /**
   * 设置小型大写等大小写字形变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  declare readonly fontVariantCaps: {};
  /**
   * 设置东亚文字字形及宽度变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  declare readonly fontVariantEastAsian: {};
  /**
   * 设置字符优先采用文本字形还是 emoji 字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  declare readonly fontVariantEmoji: {};
  /**
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  declare readonly fontVariantLigatures: {};
  /**
   * 设置数字的等宽、比例、分数及其他排版变体。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  declare readonly fontVariantNumeric: {};
  /**
   * 选择字体提供的上标或下标字形。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  declare readonly fontVariantPosition: {};
  /**
   * 直接设置可变字体各个轴的数值。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  declare readonly fontVariationSettings: {};
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
  declare readonly fontWeight: {};
  /**
   * 选择字体的宽窄字面，不是通过变换拉伸元素。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  declare readonly fontWidth: {};
  /**
   * 控制元素是否参与系统强制颜色模式的自动替换。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  declare readonly forcedColorAdjust: {};
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
  declare readonly gap: {};
  /**
   * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  declare readonly glyphOrientationVertical: {};
  /**
   * 集中设置显式和隐式网格的轨道、区域及自动放置方式。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  declare readonly grid: {};
  /**
   * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  declare readonly gridArea: {};
  /**
   * 设置隐式生成的网格列尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  declare readonly gridAutoColumns: {};
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
  declare readonly gridAutoFlow: {};
  /**
   * 设置隐式生成的网格行尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  declare readonly gridAutoRows: {};
  /**
   * 设置网格项目的列起点和列终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  declare readonly gridColumn: {};
  /**
   * 设置网格项目的列终止线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  declare readonly gridColumnEnd: {};
  /**
   * 兼容属性 grid-column-gap；优先参考标准属性 columnGap及浏览器支持范围。
   * 设置布局中相邻列之间的间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-gap
   */
  declare readonly gridColumnGap: {};
  /**
   * 设置网格项目的列起始线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  declare readonly gridColumnStart: {};
  /**
   * 兼容属性 grid-gap；优先参考标准属性 gap及浏览器支持范围。
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-gap
   */
  declare readonly gridGap: {};
  /**
   * 设置网格项目的行起点和行终点。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  declare readonly gridRow: {};
  /**
   * 设置网格项目的行终止线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  declare readonly gridRowEnd: {};
  /**
   * 兼容属性 grid-row-gap；优先参考标准属性 rowGap及浏览器支持范围。
   * 设置布局中相邻行之间的间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-gap
   */
  declare readonly gridRowGap: {};
  /**
   * 设置网格项目的行起始线或跨越范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  declare readonly gridRowStart: {};
  /**
   * 集中设置显式网格的行、列和命名区域。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  declare readonly gridTemplate: {};
  /**
   * 用区域名称矩阵定义网格布局区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  declare readonly gridTemplateAreas: {};
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
  declare readonly gridTemplateColumns: {};
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
  declare readonly gridTemplateRows: {};
  /**
   * 控制标点是否可以悬挂在行盒边缘之外。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  declare readonly hangingPunctuation: {};
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
  declare readonly height: {};
  /**
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  declare readonly hyphenateCharacter: {};
  /**
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  declare readonly hyphenateLimitChars: {};
  /**
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  declare readonly hyphens: {};
  /**
   * 设置图像是否按元数据等信息调整方向。
   *
   * CSS 规范初始值：`from-image`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  declare readonly imageOrientation: {};
  /**
   * 向浏览器指定图像缩放时的插值与清晰度偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  declare readonly imageRendering: {};
  /**
   * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。
   *
   * CSS 规范初始值：`1dppx`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  declare readonly imageResolution: {};
  /**
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  declare readonly imeMode: {};
  /**
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  declare readonly initialLetter: {};
  /**
   * 设置首字下沉时字形与正文使用的对齐基线。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  declare readonly initialLetterAlign: {};
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
  declare readonly inlineSize: {};
  /**
   * 同时设置定位元素的上、右、下、左偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  declare readonly inset: {};
  /**
   * 兼容属性 inset-area；优先参考标准属性 positionArea及浏览器支持范围。
   * 选择相对于锚点的定位区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  declare readonly insetArea: {};
  /**
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  declare readonly insetBlock: {};
  /**
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  declare readonly insetBlockEnd: {};
  /**
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  declare readonly insetBlockStart: {};
  /**
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  declare readonly insetInline: {};
  /**
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  declare readonly insetInlineEnd: {};
  /**
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  declare readonly insetInlineStart: {};
  /**
   * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。
   *
   * CSS 规范初始值：`numeric-only`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  declare readonly interpolateSize: {};
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
  declare readonly isolation: {};
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
  declare readonly justifyContent: {};
  /**
   * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。
   *
   * CSS 规范初始值：`legacy`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  declare readonly justifyItems: {};
  /**
   * 单独设置项目在其布局区域内的行内轴对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  declare readonly justifySelf: {};
  /**
   * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  declare readonly justifyTracks: {};
  /**
   * 兼容属性 -khtml-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-align
   */
  declare readonly KhtmlBoxAlign: {};
  /**
   * 兼容属性 -khtml-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-direction
   */
  declare readonly KhtmlBoxDirection: {};
  /**
   * 兼容属性 -khtml-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-flex
   */
  declare readonly KhtmlBoxFlex: {};
  /**
   * 兼容属性 -khtml-box-flex-group；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-flex-group
   */
  declare readonly KhtmlBoxFlexGroup: {};
  /**
   * 兼容属性 -khtml-box-lines；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：`single`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-lines
   */
  declare readonly KhtmlBoxLines: {};
  /**
   * 兼容属性 -khtml-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-ordinal-group
   */
  declare readonly KhtmlBoxOrdinalGroup: {};
  /**
   * 兼容属性 -khtml-box-orient；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  declare readonly KhtmlBoxOrient: {};
  /**
   * 兼容属性 -khtml-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-pack
   */
  declare readonly KhtmlBoxPack: {};
  /**
   * 兼容属性 -khtml-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-line-break
   */
  declare readonly KhtmlLineBreak: {};
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
  declare readonly KhtmlOpacity: {};
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
  declare readonly KhtmlUserSelect: {};
  /**
   * 设置定位元素相对于其定位参照的左侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  declare readonly left: {};
  /**
   * 设置字符之间额外增加或减少的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  declare readonly letterSpacing: {};
  /**
   * 设置 SVG 光照滤镜使用的光源颜色。
   *
   * CSS 规范初始值：`white`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  declare readonly lightingColor: {};
  /**
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  declare readonly lineBreak: {};
  /**
   * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  declare readonly lineClamp: {};
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
  declare readonly lineHeight: {};
  /**
   * 设置行盒高度向上取整使用的步长。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  declare readonly lineHeightStep: {};
  /**
   * 集中设置列表标记的类型、图像和位置。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  declare readonly listStyle: {};
  /**
   * 设置用作列表标记的图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  declare readonly listStyleImage: {};
  /**
   * 设置列表标记位于主块盒内部还是外部。
   *
   * CSS 规范初始值：`outside`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  declare readonly listStylePosition: {};
  /**
   * 设置列表标记或计数器的样式。
   *
   * CSS 规范初始值：`disc`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  declare readonly listStyleType: {};
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
  declare readonly margin: {};
  /**
   * 设置逻辑块轴起始侧和结束侧的外边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  declare readonly marginBlock: {};
  /**
   * 设置逻辑块轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  declare readonly marginBlockEnd: {};
  /**
   * 设置逻辑块轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  declare readonly marginBlockStart: {};
  /**
   * 设置下外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  declare readonly marginBottom: {};
  /**
   * 设置逻辑行内轴起始侧和结束侧的外边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  declare readonly marginInline: {};
  /**
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  declare readonly marginInlineEnd: {};
  /**
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  declare readonly marginInlineStart: {};
  /**
   * 设置左外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  declare readonly marginLeft: {};
  /**
   * 设置右外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  declare readonly marginRight: {};
  /**
   * 设置上外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  declare readonly marginTop: {};
  /**
   * 控制容器边缘处子元素外边距的裁减。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  declare readonly marginTrim: {};
  /**
   * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  declare readonly marker: {};
  /**
   * 设置 SVG 路径终点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  declare readonly markerEnd: {};
  /**
   * 设置 SVG 路径中间顶点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  declare readonly markerMid: {};
  /**
   * 设置 SVG 路径起点的标记图形。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  declare readonly markerStart: {};
  /**
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  declare readonly mask: {};
  /**
   * 设置基于九宫格图像切片的边框遮罩。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  declare readonly maskBorder: {};
  /**
   * 设置边框遮罩使用 alpha 还是亮度信息。
   *
   * CSS 规范初始值：`alpha`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  declare readonly maskBorderMode: {};
  /**
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  declare readonly maskBorderOutset: {};
  /**
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  declare readonly maskBorderRepeat: {};
  /**
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  declare readonly maskBorderSlice: {};
  /**
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  declare readonly maskBorderSource: {};
  /**
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  declare readonly maskBorderWidth: {};
  /**
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  declare readonly maskClip: {};
  /**
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：`add`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  declare readonly maskComposite: {};
  /**
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  declare readonly maskImage: {};
  /**
   * 设置遮罩按 alpha、亮度或源类型解释。
   *
   * CSS 规范初始值：`match-source`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  declare readonly maskMode: {};
  /**
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  declare readonly maskOrigin: {};
  /**
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  declare readonly maskPosition: {};
  /**
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  declare readonly maskRepeat: {};
  /**
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  declare readonly maskSize: {};
  /**
   * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。
   *
   * CSS 规范初始值：`luminance`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  declare readonly maskType: {};
  /**
   * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：`pack`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  declare readonly masonryAutoFlow: {};
  /**
   * 设置数学公式的嵌套深度，用于数学字号等排版计算。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  declare readonly mathDepth: {};
  /**
   * 控制数学上标采用正常还是压缩的垂直偏移。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  declare readonly mathShift: {};
  /**
   * 设置数学公式采用正常还是紧凑排版。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  declare readonly mathStyle: {};
  /**
   * 限制元素逻辑块轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  declare readonly maxBlockSize: {};
  /**
   * 限制元素的最大物理高度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  declare readonly maxHeight: {};
  /**
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  declare readonly maxInlineSize: {};
  /**
   * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  declare readonly maxLines: {};
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
  declare readonly maxWidth: {};
  /**
   * 设置元素逻辑块轴的最小尺寸。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  declare readonly minBlockSize: {};
  /**
   * 设置元素的最小物理高度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  declare readonly minHeight: {};
  /**
   * 设置元素逻辑行内轴的最小尺寸。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  declare readonly minInlineSize: {};
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
  declare readonly minWidth: {};
  /**
   * 设置元素整体与其背后内容的颜色混合方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  declare readonly mixBlendMode: {};
  /**
   * 设置运动路径的旧式简写；对应现代 offset 属性族。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  declare readonly motion: {};
  /**
   * 设置沿运动路径行进距离的旧属性；对应 offset-distance。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-distance
   */
  declare readonly motionDistance: {};
  /**
   * 设置运动路径的旧属性；对应 offset-path。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  declare readonly motionPath: {};
  /**
   * 设置运动路径旋转方式的旧属性；对应 offset-rotate。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-rotation
   */
  declare readonly motionRotation: {};
  /**
   * 兼容属性 -moz-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  declare readonly MozAnimation: {};
  /**
   * 兼容属性 -moz-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-delay
   */
  declare readonly MozAnimationDelay: {};
  /**
   * 兼容属性 -moz-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  declare readonly MozAnimationDirection: {};
  /**
   * 兼容属性 -moz-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-duration
   */
  declare readonly MozAnimationDuration: {};
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
  declare readonly MozAnimationFillMode: {};
  /**
   * 兼容属性 -moz-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-iteration-count
   */
  declare readonly MozAnimationIterationCount: {};
  /**
   * 兼容属性 -moz-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-name
   */
  declare readonly MozAnimationName: {};
  /**
   * 兼容属性 -moz-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-play-state
   */
  declare readonly MozAnimationPlayState: {};
  /**
   * 兼容属性 -moz-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  declare readonly MozAnimationTimingFunction: {};
  /**
   * 兼容属性 -moz-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  declare readonly MozAppearance: {};
  /**
   * 兼容属性 -moz-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-backface-visibility
   */
  declare readonly MozBackfaceVisibility: {};
  /**
   * 兼容属性 -moz-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  declare readonly MozBackgroundClip: {};
  /**
   * 兼容属性 -moz-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  declare readonly MozBackgroundOrigin: {};
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
  declare readonly MozBackgroundSize: {};
  /**
   * 兼容属性 -moz-binding；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的 XBL 绑定入口；仅描述历史兼容行为，不适用于现代组件实现。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-binding
   */
  declare readonly MozBinding: {};
  /**
   * 兼容属性 -moz-border-bottom-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的下边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-bottom-colors
   */
  declare readonly MozBorderBottomColors: {};
  /**
   * 兼容属性 -moz-border-end-color；优先参考标准属性 borderInlineEndColor及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-color
   */
  declare readonly MozBorderEndColor: {};
  /**
   * 兼容属性 -moz-border-end-style；优先参考标准属性 borderInlineEndStyle及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  declare readonly MozBorderEndStyle: {};
  /**
   * 兼容属性 -moz-border-end-width；优先参考标准属性 borderInlineEndWidth及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  declare readonly MozBorderEndWidth: {};
  /**
   * 兼容属性 -moz-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  declare readonly MozBorderImage: {};
  /**
   * 兼容属性 -moz-border-left-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的左边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-left-colors
   */
  declare readonly MozBorderLeftColors: {};
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
  declare readonly MozBorderRadius: {};
  /**
   * 兼容属性 -moz-border-radius-bottomleft；优先参考标准属性 borderBottomLeftRadius及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-bottomleft
   */
  declare readonly MozBorderRadiusBottomleft: {};
  /**
   * 兼容属性 -moz-border-radius-bottomright；优先参考标准属性 borderBottomRightRadius及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-bottomright
   */
  declare readonly MozBorderRadiusBottomright: {};
  /**
   * 兼容属性 -moz-border-radius-topleft；优先参考标准属性 borderTopLeftRadius及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-topleft
   */
  declare readonly MozBorderRadiusTopleft: {};
  /**
   * 兼容属性 -moz-border-radius-topright；优先参考标准属性 borderTopRightRadius及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-radius-topright
   */
  declare readonly MozBorderRadiusTopright: {};
  /**
   * 兼容属性 -moz-border-right-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的右边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-right-colors
   */
  declare readonly MozBorderRightColors: {};
  /**
   * 兼容属性 -moz-border-start-color；优先参考标准属性 borderInlineStartColor及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-color
   */
  declare readonly MozBorderStartColor: {};
  /**
   * 兼容属性 -moz-border-start-style；优先参考标准属性 borderInlineStartStyle及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  declare readonly MozBorderStartStyle: {};
  /**
   * 兼容属性 -moz-border-top-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的上边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-top-colors
   */
  declare readonly MozBorderTopColors: {};
  /**
   * 兼容属性 -moz-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-align
   */
  declare readonly MozBoxAlign: {};
  /**
   * 兼容属性 -moz-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-direction
   */
  declare readonly MozBoxDirection: {};
  /**
   * 兼容属性 -moz-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-flex
   */
  declare readonly MozBoxFlex: {};
  /**
   * 兼容属性 -moz-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-ordinal-group
   */
  declare readonly MozBoxOrdinalGroup: {};
  /**
   * 兼容属性 -moz-box-orient；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  declare readonly MozBoxOrient: {};
  /**
   * 兼容属性 -moz-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-pack
   */
  declare readonly MozBoxPack: {};
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
  declare readonly MozBoxShadow: {};
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
  declare readonly MozBoxSizing: {};
  /**
   * 兼容属性 -moz-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-count
   */
  declare readonly MozColumnCount: {};
  /**
   * 兼容属性 -moz-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：`balance`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-fill
   */
  declare readonly MozColumnFill: {};
  /**
   * 兼容属性 -moz-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule
   */
  declare readonly MozColumnRule: {};
  /**
   * 兼容属性 -moz-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-color
   */
  declare readonly MozColumnRuleColor: {};
  /**
   * 兼容属性 -moz-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  declare readonly MozColumnRuleStyle: {};
  /**
   * 兼容属性 -moz-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  declare readonly MozColumnRuleWidth: {};
  /**
   * 兼容属性 -moz-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-columns
   */
  declare readonly MozColumns: {};
  /**
   * 兼容属性 -moz-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-width
   */
  declare readonly MozColumnWidth: {};
  /**
   * 兼容属性 -moz-context-properties；优先参考标准属性及浏览器支持范围。
   * 声明可传递给被引用 SVG 图像的上下文绘制属性，如 fill 和 stroke。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  declare readonly MozContextProperties: {};
  /**
   * 兼容属性 -moz-float-edge；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定浮动元素边缘计算使用的盒子范围。
   *
   * CSS 规范初始值：`content-box`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  declare readonly MozFloatEdge: {};
  /**
   * 兼容属性 -moz-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-feature-settings
   */
  declare readonly MozFontFeatureSettings: {};
  /**
   * 兼容属性 -moz-font-language-override；优先参考标准属性及浏览器支持范围。
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-language-override
   */
  declare readonly MozFontLanguageOverride: {};
  /**
   * 兼容属性 -moz-force-broken-image-icon；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中控制损坏图像占位图标的显示。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-force-broken-image-icon
   */
  declare readonly MozForceBrokenImageIcon: {};
  /**
   * 兼容属性 -moz-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-hyphens
   */
  declare readonly MozHyphens: {};
  /**
   * 兼容属性 -moz-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-end
   */
  declare readonly MozMarginEnd: {};
  /**
   * 兼容属性 -moz-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-start
   */
  declare readonly MozMarginStart: {};
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
  declare readonly MozOpacity: {};
  /**
   * 兼容属性 -moz-orient；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定特定控件的显示方向，作用依赖控件类型。
   *
   * CSS 规范初始值：`inline`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  declare readonly MozOrient: {};
  /**
   * 兼容属性 -moz-osx-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 macOS 上文字抗锯齿方式；效果依赖平台和字体渲染实现。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  declare readonly MozOsxFontSmoothing: {};
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
  declare readonly MozOutline: {};
  /**
   * 兼容属性 -moz-outline-color；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-color
   */
  declare readonly MozOutlineColor: {};
  /**
   * 兼容属性 -moz-outline-radius；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的轮廓圆角简写；不同于元素边框本身的圆角。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius
   */
  declare readonly MozOutlineRadius: {};
  /**
   * 兼容属性 -moz-outline-radius-bottomleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左下角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomleft
   */
  declare readonly MozOutlineRadiusBottomleft: {};
  /**
   * 兼容属性 -moz-outline-radius-bottomright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右下角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomright
   */
  declare readonly MozOutlineRadiusBottomright: {};
  /**
   * 兼容属性 -moz-outline-radius-topleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左上角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topleft
   */
  declare readonly MozOutlineRadiusTopleft: {};
  /**
   * 兼容属性 -moz-outline-radius-topright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右上角的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topright
   */
  declare readonly MozOutlineRadiusTopright: {};
  /**
   * 兼容属性 -moz-outline-style；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  declare readonly MozOutlineStyle: {};
  /**
   * 兼容属性 -moz-outline-width；优先参考标准属性及浏览器支持范围。
   * 设置轮廓线宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-width
   */
  declare readonly MozOutlineWidth: {};
  /**
   * 兼容属性 -moz-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-end
   */
  declare readonly MozPaddingEnd: {};
  /**
   * 兼容属性 -moz-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-start
   */
  declare readonly MozPaddingStart: {};
  /**
   * 兼容属性 -moz-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective
   */
  declare readonly MozPerspective: {};
  /**
   * 兼容属性 -moz-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  declare readonly MozPerspectiveOrigin: {};
  /**
   * 兼容属性 -moz-stack-sizing；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 堆叠布局中决定子项尺寸是否参与堆叠容器的尺寸计算。
   *
   * CSS 规范初始值：`stretch-to-fit`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  declare readonly MozStackSizing: {};
  /**
   * 兼容属性 -moz-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：`8`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-tab-size
   */
  declare readonly MozTabSize: {};
  /**
   * 兼容属性 -moz-text-align-last；优先参考标准属性及浏览器支持范围。
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  declare readonly MozTextAlignLast: {};
  /**
   * 兼容属性 -moz-text-blink；优先参考标准属性及浏览器支持范围。
   * 旧版文字闪烁效果开关；现代内容不应依赖该兼容属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-blink
   */
  declare readonly MozTextBlink: {};
  /**
   * 兼容属性 -moz-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-color
   */
  declare readonly MozTextDecorationColor: {};
  /**
   * 兼容属性 -moz-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  declare readonly MozTextDecorationLine: {};
  /**
   * 兼容属性 -moz-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：`solid`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-style
   */
  declare readonly MozTextDecorationStyle: {};
  /**
   * 兼容属性 -moz-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-size-adjust
   */
  declare readonly MozTextSizeAdjust: {};
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
  declare readonly MozTransform: {};
  /**
   * 兼容属性 -moz-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  declare readonly MozTransformOrigin: {};
  /**
   * 兼容属性 -moz-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：`flat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-style
   */
  declare readonly MozTransformStyle: {};
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
  declare readonly MozTransition: {};
  /**
   * 兼容属性 -moz-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-delay
   */
  declare readonly MozTransitionDelay: {};
  /**
   * 兼容属性 -moz-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-duration
   */
  declare readonly MozTransitionDuration: {};
  /**
   * 兼容属性 -moz-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-property
   */
  declare readonly MozTransitionProperty: {};
  /**
   * 兼容属性 -moz-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  declare readonly MozTransitionTimingFunction: {};
  /**
   * 兼容属性 -moz-user-focus；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Gecko 元素的用户焦点行为，现代交互优先使用标准焦点机制。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  declare readonly MozUserFocus: {};
  /**
   * 兼容属性 -moz-user-input；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Gecko 元素是否接受用户输入，现代控件使用标准 disabled/readonly 等语义。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-input
   */
  declare readonly MozUserInput: {};
  /**
   * 兼容属性 -moz-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * CSS 规范初始值：`read-only`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  declare readonly MozUserModify: {};
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
  declare readonly MozUserSelect: {};
  /**
   * 兼容属性 -moz-window-dragging；优先参考标准属性及浏览器支持范围。
   * 控制区域能否作为宿主窗口的拖动区域，作用限于支持它的特定环境。
   *
   * CSS 规范初始值：`drag`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  declare readonly MozWindowDragging: {};
  /**
   * 兼容属性 -moz-window-shadow；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Gecko 宿主窗口阴影的预设，效果依赖窗口与操作系统。
   *
   * CSS 规范初始值：`default`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  declare readonly MozWindowShadow: {};
  /**
   * 兼容属性 -ms-accelerator；优先参考标准属性及浏览器支持范围。
   * 旧版 Microsoft 浏览器中控制快捷键提示字符是否显示。
   *
   * CSS 规范初始值：`false`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-accelerator
   */
  declare readonly msAccelerator: {};
  /**
   * 兼容属性 -ms-block-progression；优先参考标准属性及浏览器支持范围。
   * 旧版块内容的排列方向，现代排版优先使用 writing-mode。
   *
   * CSS 规范初始值：`tb`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  declare readonly msBlockProgression: {};
  /**
   * 兼容属性 -ms-content-zoom-chaining；优先参考标准属性及浏览器支持范围。
   * 控制缩放操作到达边界后是否继续传递给父级缩放区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-chaining
   */
  declare readonly msContentZoomChaining: {};
  /**
   * 兼容属性 -ms-content-zooming；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 触控内容缩放是否启用。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zooming
   */
  declare readonly msContentZooming: {};
  /**
   * 兼容属性 -ms-content-zoom-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版触控内容缩放的最小和最大倍率。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit
   */
  declare readonly msContentZoomLimit: {};
  /**
   * 兼容属性 -ms-content-zoom-limit-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最大倍率。
   *
   * CSS 规范初始值：`400%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-max
   */
  declare readonly msContentZoomLimitMax: {};
  /**
   * 兼容属性 -ms-content-zoom-limit-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最小倍率。
   *
   * CSS 规范初始值：`100%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-min
   */
  declare readonly msContentZoomLimitMin: {};
  /**
   * 兼容属性 -ms-content-zoom-snap；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版内容缩放吸附的方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  declare readonly msContentZoomSnap: {};
  /**
   * 兼容属性 -ms-content-zoom-snap-points；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放操作可以吸附的倍率位置。
   *
   * CSS 规范初始值：`snapInterval(0%, 100%)`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-points
   */
  declare readonly msContentZoomSnapPoints: {};
  /**
   * 兼容属性 -ms-content-zoom-snap-type；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放吸附的强制程度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-type
   */
  declare readonly msContentZoomSnapType: {};
  /**
   * 兼容属性 -ms-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-filter
   */
  declare readonly msFilter: {};
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
  declare readonly msFlex: {};
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
  declare readonly msFlexDirection: {};
  /**
   * 兼容属性 -ms-flex-positive；优先参考标准属性 flexGrow及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-positive
   */
  declare readonly msFlexPositive: {};
  /**
   * 兼容属性 -ms-flow-from；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中指定接收哪个命名内容流。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-from
   */
  declare readonly msFlowFrom: {};
  /**
   * 兼容属性 -ms-flow-into；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中把元素内容放入指定命名流。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-into
   */
  declare readonly msFlowInto: {};
  /**
   * 兼容属性 -ms-grid-columns；优先参考标准属性 gridTemplateColumns及浏览器支持范围。
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  declare readonly msGridColumns: {};
  /**
   * 兼容属性 -ms-grid-rows；优先参考标准属性 gridTemplateRows及浏览器支持范围。
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  declare readonly msGridRows: {};
  /**
   * 兼容属性 -ms-high-contrast-adjust；优先参考标准属性及浏览器支持范围。
   * 控制旧版高对比度模式是否调整作者颜色；现代环境优先使用 forced-color-adjust。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-high-contrast-adjust
   */
  declare readonly msHighContrastAdjust: {};
  /**
   * 兼容属性 -ms-hyphenate-limit-chars；优先参考标准属性及浏览器支持范围。
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-chars
   */
  declare readonly msHyphenateLimitChars: {};
  /**
   * 兼容属性 -ms-hyphenate-limit-lines；优先参考标准属性及浏览器支持范围。
   * 限制连续使用断字连字符的文本行数。
   *
   * CSS 规范初始值：`no-limit`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-lines
   */
  declare readonly msHyphenateLimitLines: {};
  /**
   * 兼容属性 -ms-hyphenate-limit-zone；优先参考标准属性及浏览器支持范围。
   * 指定允许开始断字处理的行末区域。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-zone
   */
  declare readonly msHyphenateLimitZone: {};
  /**
   * 兼容属性 -ms-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphens
   */
  declare readonly msHyphens: {};
  /**
   * 兼容属性 -ms-ime-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版输入法候选窗口相对于编辑区域的对齐位置。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-align
   */
  declare readonly msImeAlign: {};
  /**
   * 兼容属性 -ms-ime-mode；优先参考标准属性及浏览器支持范围。
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-mode
   */
  declare readonly msImeMode: {};
  /**
   * 兼容属性 -ms-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  declare readonly msLineBreak: {};
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
  declare readonly msOrder: {};
  /**
   * 兼容属性 -ms-overflow-style；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Microsoft 浏览器滚动条的呈现方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  declare readonly msOverflowStyle: {};
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
  declare readonly msOverflowX: {};
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
  declare readonly msOverflowY: {};
  /**
   * 兼容属性 -ms-scrollbar3dlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的亮边颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar3dlight-color
   */
  declare readonly msScrollbar3dlightColor: {};
  /**
   * 兼容属性 -ms-scrollbar-arrow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条箭头颜色。
   *
   * CSS 规范初始值：`ButtonText`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-arrow-color
   */
  declare readonly msScrollbarArrowColor: {};
  /**
   * 兼容属性 -ms-scrollbar-base-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条的基础颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-base-color
   */
  declare readonly msScrollbarBaseColor: {};
  /**
   * 兼容属性 -ms-scrollbar-darkshadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的深阴影颜色。
   *
   * CSS 规范初始值：`ThreeDDarkShadow`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-darkshadow-color
   */
  declare readonly msScrollbarDarkshadowColor: {};
  /**
   * 兼容属性 -ms-scrollbar-face-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条滑块表面颜色。
   *
   * CSS 规范初始值：`ThreeDFace`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-face-color
   */
  declare readonly msScrollbarFaceColor: {};
  /**
   * 兼容属性 -ms-scrollbar-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条高亮边缘颜色。
   *
   * CSS 规范初始值：`ThreeDHighlight`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-highlight-color
   */
  declare readonly msScrollbarHighlightColor: {};
  /**
   * 兼容属性 -ms-scrollbar-shadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条阴影边缘颜色。
   *
   * CSS 规范初始值：`ThreeDDarkShadow`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-shadow-color
   */
  declare readonly msScrollbarShadowColor: {};
  /**
   * 兼容属性 -ms-scrollbar-track-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条轨道颜色。
   *
   * CSS 规范初始值：`Scrollbar`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-track-color
   */
  declare readonly msScrollbarTrackColor: {};
  /**
   * 兼容属性 -ms-scroll-chaining；优先参考标准属性及浏览器支持范围。
   * 控制滚动到达边界后是否传递给祖先滚动容器。
   *
   * CSS 规范初始值：`chained`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-chaining
   */
  declare readonly msScrollChaining: {};
  /**
   * 兼容属性 -ms-scroll-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版滚动区域的水平和垂直边界。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit
   */
  declare readonly msScrollLimit: {};
  /**
   * 兼容属性 -ms-scroll-limit-x-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大水平位置。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-max
   */
  declare readonly msScrollLimitXMax: {};
  /**
   * 兼容属性 -ms-scroll-limit-x-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小水平位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-min
   */
  declare readonly msScrollLimitXMin: {};
  /**
   * 兼容属性 -ms-scroll-limit-y-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大垂直位置。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-max
   */
  declare readonly msScrollLimitYMax: {};
  /**
   * 兼容属性 -ms-scroll-limit-y-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小垂直位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-min
   */
  declare readonly msScrollLimitYMin: {};
  /**
   * 兼容属性 -ms-scroll-rails；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控滚动是否锁定主要滚动轴。
   *
   * CSS 规范初始值：`railed`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-rails
   */
  declare readonly msScrollRails: {};
  /**
   * 兼容属性 -ms-scroll-snap-points-x；优先参考标准属性及浏览器支持范围。
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`snapInterval(0px, 100%)`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-x
   */
  declare readonly msScrollSnapPointsX: {};
  /**
   * 兼容属性 -ms-scroll-snap-points-y；优先参考标准属性及浏览器支持范围。
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`snapInterval(0px, 100%)`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-y
   */
  declare readonly msScrollSnapPointsY: {};
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
  declare readonly msScrollSnapType: {};
  /**
   * 兼容属性 -ms-scroll-snap-x；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版水平滚动吸附方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-x
   */
  declare readonly msScrollSnapX: {};
  /**
   * 兼容属性 -ms-scroll-snap-y；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版垂直滚动吸附方式和位置。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-y
   */
  declare readonly msScrollSnapY: {};
  /**
   * 兼容属性 -ms-scroll-translation；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 环境中的滚动位移呈现方式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-translation
   */
  declare readonly msScrollTranslation: {};
  /**
   * 兼容属性 -ms-text-autospace；优先参考标准属性及浏览器支持范围。
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  declare readonly msTextAutospace: {};
  /**
   * 兼容属性 -ms-text-combine-horizontal；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-combine-horizontal
   */
  declare readonly msTextCombineHorizontal: {};
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
  declare readonly msTextOverflow: {};
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
  declare readonly msTouchAction: {};
  /**
   * 兼容属性 -ms-touch-select；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控文字选择的交互方式。
   *
   * CSS 规范初始值：`grippers`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-select
   */
  declare readonly msTouchSelect: {};
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
  declare readonly msTransform: {};
  /**
   * 兼容属性 -ms-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  declare readonly msTransformOrigin: {};
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
  declare readonly msTransition: {};
  /**
   * 兼容属性 -ms-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-delay
   */
  declare readonly msTransitionDelay: {};
  /**
   * 兼容属性 -ms-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-duration
   */
  declare readonly msTransitionDuration: {};
  /**
   * 兼容属性 -ms-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-property
   */
  declare readonly msTransitionProperty: {};
  /**
   * 兼容属性 -ms-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  declare readonly msTransitionTimingFunction: {};
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
  declare readonly msUserSelect: {};
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
  declare readonly msWordBreak: {};
  /**
   * 兼容属性 -ms-wrap-flow；优先参考标准属性及浏览器支持范围。
   * 控制旧版排斥形状周围的内容环绕方向。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  declare readonly msWrapFlow: {};
  /**
   * 兼容属性 -ms-wrap-margin；优先参考标准属性及浏览器支持范围。
   * 设置旧版排斥形状与环绕内容之间的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-margin
   */
  declare readonly msWrapMargin: {};
  /**
   * 兼容属性 -ms-wrap-through；优先参考标准属性及浏览器支持范围。
   * 控制旧版元素是否参与排斥形状的内容环绕。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-through
   */
  declare readonly msWrapThrough: {};
  /**
   * 兼容属性 -ms-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：`horizontal-tb`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  declare readonly msWritingMode: {};
  /**
   * 兼容属性 -o-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  declare readonly OAnimation: {};
  /**
   * 兼容属性 -o-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-delay
   */
  declare readonly OAnimationDelay: {};
  /**
   * 兼容属性 -o-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-direction
   */
  declare readonly OAnimationDirection: {};
  /**
   * 兼容属性 -o-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-duration
   */
  declare readonly OAnimationDuration: {};
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
  declare readonly OAnimationFillMode: {};
  /**
   * 兼容属性 -o-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-iteration-count
   */
  declare readonly OAnimationIterationCount: {};
  /**
   * 兼容属性 -o-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-name
   */
  declare readonly OAnimationName: {};
  /**
   * 兼容属性 -o-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-play-state
   */
  declare readonly OAnimationPlayState: {};
  /**
   * 兼容属性 -o-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  declare readonly OAnimationTimingFunction: {};
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
  declare readonly OBackgroundSize: {};
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
  declare readonly objectFit: {};
  /**
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  declare readonly objectPosition: {};
  /**
   * 设置替换元素内容的可视区域，控制用于呈现的图像范围。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  declare readonly objectViewBox: {};
  /**
   * 兼容属性 -o-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-border-image
   */
  declare readonly OBorderImage: {};
  /**
   * 集中设置运动路径、起始位置、距离、方向和锚点。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  declare readonly offset: {};
  /**
   * 设置元素沿运动路径移动时与路径相接的内部锚点。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  declare readonly offsetAnchor: {};
  /**
   * 兼容属性 offset-block；优先参考标准属性 insetBlock及浏览器支持范围。
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block
   */
  declare readonly offsetBlock: {};
  /**
   * 兼容属性 offset-block-end；优先参考标准属性 insetBlockEnd及浏览器支持范围。
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block-end
   */
  declare readonly offsetBlockEnd: {};
  /**
   * 兼容属性 offset-block-start；优先参考标准属性 insetBlockStart及浏览器支持范围。
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-block-start
   */
  declare readonly offsetBlockStart: {};
  /**
   * 设置元素沿运动路径行进的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  declare readonly offsetDistance: {};
  /**
   * 兼容属性 offset-inline；优先参考标准属性 insetInline及浏览器支持范围。
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline
   */
  declare readonly offsetInline: {};
  /**
   * 兼容属性 offset-inline-end；优先参考标准属性 insetInlineEnd及浏览器支持范围。
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline-end
   */
  declare readonly offsetInlineEnd: {};
  /**
   * 兼容属性 offset-inline-start；优先参考标准属性 insetInlineStart及浏览器支持范围。
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-inline-start
   */
  declare readonly offsetInlineStart: {};
  /**
   * 设置元素运动所沿用的路径。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  declare readonly offsetPath: {};
  /**
   * 设置运动路径的初始位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  declare readonly offsetPosition: {};
  /**
   * 设置元素沿运动路径移动时的方向和附加旋转。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  declare readonly offsetRotate: {};
  /**
   * 设置路径旋转的旧名称；新代码使用 offset-rotate。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotation
   */
  declare readonly offsetRotation: {};
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
  declare readonly OObjectFit: {};
  /**
   * 兼容属性 -o-object-position；优先参考标准属性及浏览器支持范围。
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-position
   */
  declare readonly OObjectPosition: {};
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
  declare readonly opacity: {};
  /**
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
   */
  declare readonly order: {};
  /**
   * 设置分页或分栏断点前需保留的最少行数。
   *
   * CSS 规范初始值：`2`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  declare readonly orphans: {};
  /**
   * 兼容属性 -o-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：`8`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-tab-size
   */
  declare readonly OTabSize: {};
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
  declare readonly OTextOverflow: {};
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
  declare readonly OTransform: {};
  /**
   * 兼容属性 -o-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform-origin
   */
  declare readonly OTransformOrigin: {};
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
  declare readonly OTransition: {};
  /**
   * 兼容属性 -o-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-delay
   */
  declare readonly OTransitionDelay: {};
  /**
   * 兼容属性 -o-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-duration
   */
  declare readonly OTransitionDuration: {};
  /**
   * 兼容属性 -o-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-property
   */
  declare readonly OTransitionProperty: {};
  /**
   * 兼容属性 -o-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  declare readonly OTransitionTimingFunction: {};
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
  declare readonly outline: {};
  /**
   * 设置轮廓线颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  declare readonly outlineColor: {};
  /**
   * 设置轮廓线与边框边缘之间的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  declare readonly outlineOffset: {};
  /**
   * 设置轮廓线线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  declare readonly outlineStyle: {};
  /**
   * 设置轮廓线宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  declare readonly outlineWidth: {};
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
  declare readonly overflow: {};
  /**
   * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  declare readonly overflowAnchor: {};
  /**
   * 设置逻辑块轴上的溢出行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  declare readonly overflowBlock: {};
  /**
   * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  declare readonly overflowClipBox: {};
  /**
   * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。
   *
   * CSS 规范初始值：`0px`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  declare readonly overflowClipMargin: {};
  /**
   * 设置逻辑行内轴上的溢出行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  declare readonly overflowInline: {};
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
  declare readonly overflowWrap: {};
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
  declare readonly overflowX: {};
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
  declare readonly overflowY: {};
  /**
   * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  declare readonly overlay: {};
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
  declare readonly overscrollBehavior: {};
  /**
   * 控制逻辑块轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  declare readonly overscrollBehaviorBlock: {};
  /**
   * 控制逻辑行内轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  declare readonly overscrollBehaviorInline: {};
  /**
   * 控制水平方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  declare readonly overscrollBehaviorX: {};
  /**
   * 控制垂直方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  declare readonly overscrollBehaviorY: {};
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
  declare readonly padding: {};
  /**
   * 设置逻辑块轴起始侧和结束侧的内边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  declare readonly paddingBlock: {};
  /**
   * 设置逻辑块轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  declare readonly paddingBlockEnd: {};
  /**
   * 设置逻辑块轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  declare readonly paddingBlockStart: {};
  /**
   * 设置下内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  declare readonly paddingBottom: {};
  /**
   * 设置逻辑行内轴起始侧和结束侧的内边距。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  declare readonly paddingInline: {};
  /**
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  declare readonly paddingInlineEnd: {};
  /**
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  declare readonly paddingInlineStart: {};
  /**
   * 设置左内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  declare readonly paddingLeft: {};
  /**
   * 设置右内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  declare readonly paddingRight: {};
  /**
   * 设置上内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  declare readonly paddingTop: {};
  /**
   * 选择分页媒体中使用的命名页面类型。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  declare readonly page: {};
  /**
   * 兼容属性 page-break-after；优先参考标准属性 breakAfter及浏览器支持范围。
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  declare readonly pageBreakAfter: {};
  /**
   * 兼容属性 page-break-before；优先参考标准属性 breakBefore及浏览器支持范围。
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  declare readonly pageBreakBefore: {};
  /**
   * 兼容属性 page-break-inside；优先参考标准属性 breakInside及浏览器支持范围。
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-inside
   */
  declare readonly pageBreakInside: {};
  /**
   * 设置 SVG 填充、描边和标记的绘制先后顺序。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  declare readonly paintOrder: {};
  /**
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  declare readonly perspective: {};
  /**
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  declare readonly perspectiveOrigin: {};
  /**
   * 同时设置 align-content 与 justify-content。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  declare readonly placeContent: {};
  /**
   * 同时设置 align-items 与 justify-items。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  declare readonly placeItems: {};
  /**
   * 同时设置 align-self 与 justify-self。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  declare readonly placeSelf: {};
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
  declare readonly pointerEvents: {};
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
  declare readonly position: {};
  /**
   * 选择绝对定位元素使用的默认锚点。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  declare readonly positionAnchor: {};
  /**
   * 选择相对于锚点的定位区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  declare readonly positionArea: {};
  /**
   * 同时设置锚点定位的候选回退方式及尝试顺序。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  declare readonly positionTry: {};
  /**
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  declare readonly positionTryFallbacks: {};
  /**
   * 兼容属性 position-try-options；优先参考标准属性 positionTryFallbacks及浏览器支持范围。
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  declare readonly positionTryOptions: {};
  /**
   * 设置锚点定位候选方案的尝试顺序。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  declare readonly positionTryOrder: {};
  /**
   * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。
   *
   * CSS 规范初始值：`anchors-visible`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  declare readonly positionVisibility: {};
  /**
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  declare readonly printColorAdjust: {};
  /**
   * 设置生成引号所用的开闭字符对。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  declare readonly quotes: {};
  /**
   * 设置 SVG 圆的半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  declare readonly r: {};
  /**
   * 设置用户是否能调整元素尺寸以及可调整的方向。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  declare readonly resize: {};
  /**
   * 设置定位元素相对于其定位参照的右侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  declare readonly right: {};
  /**
   * 独立设置元素旋转，不必重写 transform 中的其他变换。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  declare readonly rotate: {};
  /**
   * 设置布局中相邻行之间的间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  declare readonly rowGap: {};
  /**
   * 设置注音文字与基底文字之间剩余空间的分配方式。
   *
   * CSS 规范初始值：`space-around`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  declare readonly rubyAlign: {};
  /**
   * 设置相邻注音容器的合并方式；使用前核对目标浏览器。
   *
   * CSS 规范初始值：`separate`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  declare readonly rubyMerge: {};
  /**
   * 控制注音文字是否可以悬伸到相邻文本上方。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  declare readonly rubyOverhang: {};
  /**
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：`alternate`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  declare readonly rubyPosition: {};
  /**
   * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  declare readonly rx: {};
  /**
   * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  declare readonly ry: {};
  /**
   * 独立设置元素的缩放比例。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  declare readonly scale: {};
  /**
   * 设置滚动条滑块和轨道的颜色。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  declare readonly scrollbarColor: {};
  /**
   * 设置是否预留滚动条槽位，以减少滚动条出现时的布局变化。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  declare readonly scrollbarGutter: {};
  /**
   * 设置滚动条采用正常、较细或隐藏的外观。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  declare readonly scrollbarWidth: {};
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
  declare readonly scrollBehavior: {};
  /**
   * 将元素声明为祖先滚动容器首次呈现时的候选滚动吸附目标。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  declare readonly scrollInitialTarget: {};
  /**
   * 设置元素滚动目标区域的四边外扩距离，不改变普通布局外边距。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  declare readonly scrollMargin: {};
  /**
   * 设置滚动目标区域在逻辑块轴两侧的外扩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  declare readonly scrollMarginBlock: {};
  /**
   * 设置滚动目标区域在逻辑块轴结束侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  declare readonly scrollMarginBlockEnd: {};
  /**
   * 设置滚动目标区域在逻辑块轴起始侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  declare readonly scrollMarginBlockStart: {};
  /**
   * 设置滚动目标区域下侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  declare readonly scrollMarginBottom: {};
  /**
   * 设置滚动目标区域在逻辑行内轴两侧的外扩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  declare readonly scrollMarginInline: {};
  /**
   * 设置滚动目标区域在逻辑行内轴结束侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  declare readonly scrollMarginInlineEnd: {};
  /**
   * 设置滚动目标区域在逻辑行内轴起始侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  declare readonly scrollMarginInlineStart: {};
  /**
   * 设置滚动目标区域左侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  declare readonly scrollMarginLeft: {};
  /**
   * 设置滚动目标区域右侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  declare readonly scrollMarginRight: {};
  /**
   * 设置滚动目标区域上侧的外扩距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  declare readonly scrollMarginTop: {};
  /**
   * 设置滚动容器最佳可视区域的四边内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  declare readonly scrollPadding: {};
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴两侧的内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  declare readonly scrollPaddingBlock: {};
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴结束侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  declare readonly scrollPaddingBlockEnd: {};
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴起始侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  declare readonly scrollPaddingBlockStart: {};
  /**
   * 设置滚动容器最佳可视区域下侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  declare readonly scrollPaddingBottom: {};
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴两侧的内缩距离。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  declare readonly scrollPaddingInline: {};
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴结束侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  declare readonly scrollPaddingInlineEnd: {};
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴起始侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  declare readonly scrollPaddingInlineStart: {};
  /**
   * 设置滚动容器最佳可视区域左侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  declare readonly scrollPaddingLeft: {};
  /**
   * 设置滚动容器最佳可视区域右侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  declare readonly scrollPaddingRight: {};
  /**
   * 设置滚动容器最佳可视区域上侧的内缩距离。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  declare readonly scrollPaddingTop: {};
  /**
   * 设置元素作为滚动吸附目标时在块轴和行内轴上的对齐位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  declare readonly scrollSnapAlign: {};
  /**
   * 指定旧版滚动子项的吸附坐标，现代布局使用 scroll-snap-align。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  declare readonly scrollSnapCoordinate: {};
  /**
   * 指定旧版滚动容器中吸附位置对齐的目标坐标。
   *
   * CSS 规范初始值：`0px 0px`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  declare readonly scrollSnapDestination: {};
  /**
   * 设置滚动吸附区域外扩的旧名称；新代码使用 scroll-margin。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin
   */
  declare readonly scrollSnapMargin: {};
  /**
   * 设置滚动吸附区域下侧外扩的旧名称；新代码使用 scroll-margin-bottom。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-bottom
   */
  declare readonly scrollSnapMarginBottom: {};
  /**
   * 设置滚动吸附区域左侧外扩的旧名称；新代码使用 scroll-margin-left。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-left
   */
  declare readonly scrollSnapMarginLeft: {};
  /**
   * 设置滚动吸附区域右侧外扩的旧名称；新代码使用 scroll-margin-right。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-right
   */
  declare readonly scrollSnapMarginRight: {};
  /**
   * 设置滚动吸附区域上侧外扩的旧名称；新代码使用 scroll-margin-top。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-top
   */
  declare readonly scrollSnapMarginTop: {};
  /**
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-x
   */
  declare readonly scrollSnapPointsX: {};
  /**
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-y
   */
  declare readonly scrollSnapPointsY: {};
  /**
   * 设置滚动时是否允许越过该元素的吸附位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  declare readonly scrollSnapStop: {};
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
  declare readonly scrollSnapType: {};
  /**
   * 控制旧版水平滚动吸附的强制程度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-x
   */
  declare readonly scrollSnapTypeX: {};
  /**
   * 控制旧版垂直滚动吸附的强制程度。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-y
   */
  declare readonly scrollSnapTypeY: {};
  /**
   * 同时声明滚动进度时间线的名称和轴。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  declare readonly scrollTimeline: {};
  /**
   * 设置滚动进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：`block`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  declare readonly scrollTimelineAxis: {};
  /**
   * 声明基于当前容器滚动进度的时间线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  declare readonly scrollTimelineName: {};
  /**
   * 设置从图像 alpha 信息提取环绕形状时的阈值。
   *
   * CSS 规范初始值：`0.0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  declare readonly shapeImageThreshold: {};
  /**
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  declare readonly shapeMargin: {};
  /**
   * 设置浮动元素周围行内内容所环绕的形状。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  declare readonly shapeOutside: {};
  /**
   * 向 SVG 渲染器提供图形绘制精度与速度的偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  declare readonly shapeRendering: {};
  /**
   * 设置语音呈现时文字、数字和标点的朗读方式；使用前核对语音媒体支持。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  declare readonly speakAs: {};
  /**
   * 设置 SVG 渐变 stop 节点的颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  declare readonly stopColor: {};
  /**
   * 设置 SVG 渐变 stop 节点的不透明度。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  declare readonly stopOpacity: {};
  /**
   * 设置 SVG 图形轮廓的描边绘制方式。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  declare readonly stroke: {};
  /**
   * 设置描边颜色的扩展属性；常规 SVG 优先使用 stroke 并核对支持情况。
   *
   * CSS 规范初始值：`transparent`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  declare readonly strokeColor: {};
  /**
   * 设置 SVG 描边虚线中线段与空隙的长度序列。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  declare readonly strokeDasharray: {};
  /**
   * 设置 SVG 虚线描边相对于路径起点的偏移。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  declare readonly strokeDashoffset: {};
  /**
   * 设置开放 SVG 子路径端点的描边形状。
   *
   * CSS 规范初始值：`butt`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  declare readonly strokeLinecap: {};
  /**
   * 设置 SVG 路径转角处描边的连接形状。
   *
   * CSS 规范初始值：`miter`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  declare readonly strokeLinejoin: {};
  /**
   * 限制尖角连接的延伸比例，超过阈值时改变连接形状。
   *
   * CSS 规范初始值：`4`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  declare readonly strokeMiterlimit: {};
  /**
   * 设置 SVG 描边的不透明度，不影响填充。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  declare readonly strokeOpacity: {};
  /**
   * 设置 SVG 描边宽度。
   *
   * CSS 规范初始值：`1px`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  declare readonly strokeWidth: {};
  /**
   * 设置表格列宽采用自动还是固定布局算法。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  declare readonly tableLayout: {};
  /**
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：`8`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  declare readonly tabSize: {};
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
  declare readonly textAlign: {};
  /**
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  declare readonly textAlignLast: {};
  /**
   * 设置 SVG 文本片段相对于定位点的锚定方式。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  declare readonly textAnchor: {};
  /**
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  declare readonly textAutospace: {};
  /**
   * 同时设置文本盒边缘参照及首尾空白裁减。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  declare readonly textBox: {};
  /**
   * 选择文本盒裁减或对齐使用的字体边缘度量。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  declare readonly textBoxEdge: {};
  /**
   * 裁减文本块开头或结尾的额外行高空白。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  declare readonly textBoxTrim: {};
  /**
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  declare readonly textCombineUpright: {};
  /**
   * 集中设置文本装饰线的位置、线型、颜色及粗细。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  declare readonly textDecoration: {};
  /**
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  declare readonly textDecorationColor: {};
  /**
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  declare readonly textDecorationLine: {};
  /**
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：`objects`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  declare readonly textDecorationSkip: {};
  /**
   * 设置装饰线是否避让字形的笔画。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  declare readonly textDecorationSkipInk: {};
  /**
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：`solid`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  declare readonly textDecorationStyle: {};
  /**
   * 设置文本装饰线粗细。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  declare readonly textDecorationThickness: {};
  /**
   * 同时设置文字着重号的样式和颜色。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  declare readonly textEmphasis: {};
  /**
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  declare readonly textEmphasisColor: {};
  /**
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  declare readonly textEmphasisPosition: {};
  /**
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  declare readonly textEmphasisStyle: {};
  /**
   * 设置文本行的缩进距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  declare readonly textIndent: {};
  /**
   * 设置两端对齐时增加间距的算法。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  declare readonly textJustify: {};
  /**
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：`mixed`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  declare readonly textOrientation: {};
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
  declare readonly textOverflow: {};
  /**
   * 向渲染器提供文本速度、可读性或几何精度的偏好。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  declare readonly textRendering: {};
  /**
   * 设置文字及其装饰的阴影，可叠加多层。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  declare readonly textShadow: {};
  /**
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  declare readonly textSizeAdjust: {};
  /**
   * 设置东亚文字标点等字符周围空白的裁减。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  declare readonly textSpacingTrim: {};
  /**
   * 设置文字显示时的大小写、全角或其他字形转换。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  declare readonly textTransform: {};
  /**
   * 设置下划线相对于默认位置的偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  declare readonly textUnderlineOffset: {};
  /**
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  declare readonly textUnderlinePosition: {};
  /**
   * 同时设置文本是否换行及换行策略。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  declare readonly textWrap: {};
  /**
   * 设置文本是否允许软换行。
   *
   * CSS 规范初始值：`wrap`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  declare readonly textWrapMode: {};
  /**
   * 设置文本换行的排版策略，例如平衡各行长度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  declare readonly textWrapStyle: {};
  /**
   * 扩大命名动画时间线的可引用作用域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  declare readonly timelineScope: {};
  /**
   * 设置定位元素相对于其定位参照的上侧偏移。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  declare readonly top: {};
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
  declare readonly touchAction: {};
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
  declare readonly transform: {};
  /**
   * 设置变换及其原点所依据的参照盒。
   *
   * CSS 规范初始值：`view-box`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  declare readonly transformBox: {};
  /**
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  declare readonly transformOrigin: {};
  /**
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：`flat`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  declare readonly transformStyle: {};
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
  declare readonly transition: {};
  /**
   * 控制离散属性是否可以启动 CSS 过渡。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  declare readonly transitionBehavior: {};
  /**
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  declare readonly transitionDelay: {};
  /**
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  declare readonly transitionDuration: {};
  /**
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  declare readonly transitionProperty: {};
  /**
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  declare readonly transitionTimingFunction: {};
  /**
   * 独立设置元素在二维或三维空间中的平移。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  declare readonly translate: {};
  /**
   * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  declare readonly unicodeBidi: {};
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
  declare readonly userSelect: {};
  /**
   * 设置 SVG 图形变换时对描边等矢量效果的处理。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  declare readonly vectorEffect: {};
  /**
   * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。
   *
   * CSS 规范初始值：`baseline`，不同于浏览器默认样式表。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  declare readonly verticalAlign: {};
  /**
   * 同时声明基于元素可见进度的时间线名称与轴。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  declare readonly viewTimeline: {};
  /**
   * 设置可见进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：`block`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  declare readonly viewTimelineAxis: {};
  /**
   * 设置可见进度时间线使用的滚动视口内缩范围。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  declare readonly viewTimelineInset: {};
  /**
   * 声明基于元素进入和离开滚动视口的时间线名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  declare readonly viewTimelineName: {};
  /**
   * 为视图过渡的快照伪元素分组，以便共用样式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  declare readonly viewTransitionClass: {};
  /**
   * 为视图过渡中的元素命名，以匹配前后状态的快照。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  declare readonly viewTransitionName: {};
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
  declare readonly visibility: {};
  /**
   * 兼容属性 -webkit-align-content；优先参考标准属性及浏览器支持范围。
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  declare readonly WebkitAlignContent: {};
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
  declare readonly WebkitAlignItems: {};
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
  declare readonly WebkitAlignSelf: {};
  /**
   * 兼容属性 -webkit-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  declare readonly WebkitAnimation: {};
  /**
   * 兼容属性 -webkit-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-delay
   */
  declare readonly WebkitAnimationDelay: {};
  /**
   * 兼容属性 -webkit-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  declare readonly WebkitAnimationDirection: {};
  /**
   * 兼容属性 -webkit-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-duration
   */
  declare readonly WebkitAnimationDuration: {};
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
  declare readonly WebkitAnimationFillMode: {};
  /**
   * 兼容属性 -webkit-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-iteration-count
   */
  declare readonly WebkitAnimationIterationCount: {};
  /**
   * 兼容属性 -webkit-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-name
   */
  declare readonly WebkitAnimationName: {};
  /**
   * 兼容属性 -webkit-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：`running`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-play-state
   */
  declare readonly WebkitAnimationPlayState: {};
  /**
   * 兼容属性 -webkit-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  declare readonly WebkitAnimationTimingFunction: {};
  /**
   * 兼容属性 -webkit-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  declare readonly WebkitAppearance: {};
  /**
   * 兼容属性 -webkit-backdrop-filter；优先参考标准属性及浏览器支持范围。
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backdrop-filter
   */
  declare readonly WebkitBackdropFilter: {};
  /**
   * 兼容属性 -webkit-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：`visible`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backface-visibility
   */
  declare readonly WebkitBackfaceVisibility: {};
  /**
   * 兼容属性 -webkit-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：`border-box`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  declare readonly WebkitBackgroundClip: {};
  /**
   * 兼容属性 -webkit-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：`padding-box`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  declare readonly WebkitBackgroundOrigin: {};
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
  declare readonly WebkitBackgroundSize: {};
  /**
   * 兼容属性 -webkit-border-before；优先参考标准属性 borderBlockStart及浏览器支持范围。
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before
   */
  declare readonly WebkitBorderBefore: {};
  /**
   * 兼容属性 -webkit-border-before-color；优先参考标准属性 borderBlockStartColor及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-color
   */
  declare readonly WebkitBorderBeforeColor: {};
  /**
   * 兼容属性 -webkit-border-before-style；优先参考标准属性 borderBlockStartStyle及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  declare readonly WebkitBorderBeforeStyle: {};
  /**
   * 兼容属性 -webkit-border-before-width；优先参考标准属性 borderBlockStartWidth及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  declare readonly WebkitBorderBeforeWidth: {};
  /**
   * 兼容属性 -webkit-border-bottom-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-left-radius
   */
  declare readonly WebkitBorderBottomLeftRadius: {};
  /**
   * 兼容属性 -webkit-border-bottom-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-right-radius
   */
  declare readonly WebkitBorderBottomRightRadius: {};
  /**
   * 兼容属性 -webkit-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  declare readonly WebkitBorderImage: {};
  /**
   * 兼容属性 -webkit-border-image-slice；优先参考标准属性及浏览器支持范围。
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：`100%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image-slice
   */
  declare readonly WebkitBorderImageSlice: {};
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
  declare readonly WebkitBorderRadius: {};
  /**
   * 兼容属性 -webkit-border-top-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-left-radius
   */
  declare readonly WebkitBorderTopLeftRadius: {};
  /**
   * 兼容属性 -webkit-border-top-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-right-radius
   */
  declare readonly WebkitBorderTopRightRadius: {};
  /**
   * 兼容属性 -webkit-box-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-align
   */
  declare readonly WebkitBoxAlign: {};
  /**
   * 兼容属性 -webkit-box-decoration-break；优先参考标准属性及浏览器支持范围。
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：`slice`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-decoration-break
   */
  declare readonly WebkitBoxDecorationBreak: {};
  /**
   * 兼容属性 -webkit-box-direction；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-direction
   */
  declare readonly WebkitBoxDirection: {};
  /**
   * 兼容属性 -webkit-box-flex；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-flex
   */
  declare readonly WebkitBoxFlex: {};
  /**
   * 兼容属性 -webkit-box-flex-group；优先参考标准属性及浏览器支持范围。
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-flex-group
   */
  declare readonly WebkitBoxFlexGroup: {};
  /**
   * 兼容属性 -webkit-box-lines；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：`single`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-lines
   */
  declare readonly WebkitBoxLines: {};
  /**
   * 兼容属性 -webkit-box-ordinal-group；优先参考标准属性及浏览器支持范围。
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-ordinal-group
   */
  declare readonly WebkitBoxOrdinalGroup: {};
  /**
   * 指定旧版弹性盒的排列方向；仅为多行截断兼容保留，常规布局请使用 Flex/Grid。
   *
   * CSS 规范初始值：`inline-axis`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  declare readonly WebkitBoxOrient: {};
  /**
   * 兼容属性 -webkit-box-pack；优先参考标准属性及浏览器支持范围。
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：`start`，不同于浏览器默认样式表。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-pack
   */
  declare readonly WebkitBoxPack: {};
  /**
   * 兼容属性 -webkit-box-reflect；优先参考标准属性及浏览器支持范围。
   * 在指定方向生成元素的镜像，并可设置镜像间距和遮罩。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  declare readonly WebkitBoxReflect: {};
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
  declare readonly WebkitBoxShadow: {};
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
  declare readonly WebkitBoxSizing: {};
  /**
   * 兼容属性 -webkit-clip-path；优先参考标准属性及浏览器支持范围。
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  declare readonly WebkitClipPath: {};
  /**
   * 兼容属性 -webkit-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-count
   */
  declare readonly WebkitColumnCount: {};
  /**
   * 兼容属性 -webkit-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：`balance`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-fill
   */
  declare readonly WebkitColumnFill: {};
  /**
   * 兼容属性 -webkit-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule
   */
  declare readonly WebkitColumnRule: {};
  /**
   * 兼容属性 -webkit-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-color
   */
  declare readonly WebkitColumnRuleColor: {};
  /**
   * 兼容属性 -webkit-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  declare readonly WebkitColumnRuleStyle: {};
  /**
   * 兼容属性 -webkit-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：`medium`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  declare readonly WebkitColumnRuleWidth: {};
  /**
   * 兼容属性 -webkit-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-columns
   */
  declare readonly WebkitColumns: {};
  /**
   * 兼容属性 -webkit-column-span；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-span
   */
  declare readonly WebkitColumnSpan: {};
  /**
   * 兼容属性 -webkit-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-width
   */
  declare readonly WebkitColumnWidth: {};
  /**
   * 兼容属性 -webkit-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-filter
   */
  declare readonly WebkitFilter: {};
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
  declare readonly WebkitFlex: {};
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
  declare readonly WebkitFlexBasis: {};
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
  declare readonly WebkitFlexDirection: {};
  /**
   * 兼容属性 -webkit-flex-flow；优先参考标准属性及浏览器支持范围。
   * 同时设置弹性布局的主轴方向和换行方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  declare readonly WebkitFlexFlow: {};
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
  declare readonly WebkitFlexGrow: {};
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
  declare readonly WebkitFlexShrink: {};
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
  declare readonly WebkitFlexWrap: {};
  /**
   * 兼容属性 -webkit-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-feature-settings
   */
  declare readonly WebkitFontFeatureSettings: {};
  /**
   * 兼容属性 -webkit-font-kerning；优先参考标准属性及浏览器支持范围。
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-kerning
   */
  declare readonly WebkitFontKerning: {};
  /**
   * 兼容属性 -webkit-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 WebKit 平台的字体平滑方式；不是通用的跨浏览器排版开关。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  declare readonly WebkitFontSmoothing: {};
  /**
   * 兼容属性 -webkit-font-variant-ligatures；优先参考标准属性及浏览器支持范围。
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  declare readonly WebkitFontVariantLigatures: {};
  /**
   * 兼容属性 -webkit-hyphenate-character；优先参考标准属性及浏览器支持范围。
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphenate-character
   */
  declare readonly WebkitHyphenateCharacter: {};
  /**
   * 兼容属性 -webkit-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：`manual`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphens
   */
  declare readonly WebkitHyphens: {};
  /**
   * 兼容属性 -webkit-initial-letter；优先参考标准属性及浏览器支持范围。
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-initial-letter
   */
  declare readonly WebkitInitialLetter: {};
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
  declare readonly WebkitJustifyContent: {};
  /**
   * 兼容属性 -webkit-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  declare readonly WebkitLineBreak: {};
  /**
   * 限制多行文本显示的行数；与 display: -webkit-box、WebkitBoxOrient('vertical') 和 overflow: hidden 配合，不删除文本内容。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-clamp
   */
  declare readonly WebkitLineClamp: {};
  /**
   * 兼容属性 -webkit-logical-height；优先参考标准属性 blockSize及浏览器支持范围。
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  declare readonly WebkitLogicalHeight: {};
  /**
   * 兼容属性 -webkit-logical-width；优先参考标准属性 inlineSize及浏览器支持范围。
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  declare readonly WebkitLogicalWidth: {};
  /**
   * 兼容属性 -webkit-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-end
   */
  declare readonly WebkitMarginEnd: {};
  /**
   * 兼容属性 -webkit-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-start
   */
  declare readonly WebkitMarginStart: {};
  /**
   * 兼容属性 -webkit-mask；优先参考标准属性及浏览器支持范围。
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  declare readonly WebkitMask: {};
  /**
   * 兼容属性 -webkit-mask-attachment；优先参考标准属性及浏览器支持范围。
   * 指定旧版遮罩图像是否随内容滚动。
   *
   * CSS 规范初始值：`scroll`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  declare readonly WebkitMaskAttachment: {};
  /**
   * 兼容属性 -webkit-mask-box-image；优先参考标准属性 maskBorder及浏览器支持范围。
   * 设置基于九宫格图像切片的边框遮罩。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  declare readonly WebkitMaskBoxImage: {};
  /**
   * 兼容属性 -webkit-mask-box-image-outset；优先参考标准属性 maskBorderOutset及浏览器支持范围。
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-outset
   */
  declare readonly WebkitMaskBoxImageOutset: {};
  /**
   * 兼容属性 -webkit-mask-box-image-repeat；优先参考标准属性 maskBorderRepeat及浏览器支持范围。
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：`stretch`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  declare readonly WebkitMaskBoxImageRepeat: {};
  /**
   * 兼容属性 -webkit-mask-box-image-slice；优先参考标准属性 maskBorderSlice及浏览器支持范围。
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-slice
   */
  declare readonly WebkitMaskBoxImageSlice: {};
  /**
   * 兼容属性 -webkit-mask-box-image-source；优先参考标准属性 maskBorderSource及浏览器支持范围。
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-source
   */
  declare readonly WebkitMaskBoxImageSource: {};
  /**
   * 兼容属性 -webkit-mask-box-image-width；优先参考标准属性 maskBorderWidth及浏览器支持范围。
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-width
   */
  declare readonly WebkitMaskBoxImageWidth: {};
  /**
   * 兼容属性 -webkit-mask-clip；优先参考标准属性及浏览器支持范围。
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：`border`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  declare readonly WebkitMaskClip: {};
  /**
   * 兼容属性 -webkit-mask-composite；优先参考标准属性及浏览器支持范围。
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：`source-over`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  declare readonly WebkitMaskComposite: {};
  /**
   * 兼容属性 -webkit-mask-image；优先参考标准属性及浏览器支持范围。
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-image
   */
  declare readonly WebkitMaskImage: {};
  /**
   * 兼容属性 -webkit-mask-origin；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：`padding`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  declare readonly WebkitMaskOrigin: {};
  /**
   * 兼容属性 -webkit-mask-position；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：`0% 0%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  declare readonly WebkitMaskPosition: {};
  /**
   * 兼容属性 -webkit-mask-position-x；优先参考标准属性 backgroundPositionX及浏览器支持范围。
   * 设置遮罩图像的水平位置，可使用长度、百分比或位置关键字。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  declare readonly WebkitMaskPositionX: {};
  /**
   * 兼容属性 -webkit-mask-position-y；优先参考标准属性 backgroundPositionY及浏览器支持范围。
   * 设置遮罩图像的垂直位置，可使用长度、百分比或位置关键字。
   *
   * CSS 规范初始值：`0%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  declare readonly WebkitMaskPositionY: {};
  /**
   * 兼容属性 -webkit-mask-repeat；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  declare readonly WebkitMaskRepeat: {};
  /**
   * 兼容属性 -webkit-mask-repeat-x；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在水平方向的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  declare readonly WebkitMaskRepeatX: {};
  /**
   * 兼容属性 -webkit-mask-repeat-y；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在垂直方向的重复方式。
   *
   * CSS 规范初始值：`repeat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  declare readonly WebkitMaskRepeatY: {};
  /**
   * 兼容属性 -webkit-mask-size；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：`auto auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-size
   */
  declare readonly WebkitMaskSize: {};
  /**
   * 兼容属性 -webkit-max-inline-size；优先参考标准属性及浏览器支持范围。
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  declare readonly WebkitMaxInlineSize: {};
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
  declare readonly WebkitOrder: {};
  /**
   * 兼容属性 -webkit-overflow-scrolling；优先参考标准属性及浏览器支持范围。
   * 选择特定旧版 WebKit 触控环境的滚动方式，包括惯性滚动。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-overflow-scrolling
   */
  declare readonly WebkitOverflowScrolling: {};
  /**
   * 兼容属性 -webkit-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-end
   */
  declare readonly WebkitPaddingEnd: {};
  /**
   * 兼容属性 -webkit-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-start
   */
  declare readonly WebkitPaddingStart: {};
  /**
   * 兼容属性 -webkit-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective
   */
  declare readonly WebkitPerspective: {};
  /**
   * 兼容属性 -webkit-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：`50% 50%`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  declare readonly WebkitPerspectiveOrigin: {};
  /**
   * 兼容属性 -webkit-print-color-adjust；优先参考标准属性及浏览器支持范围。
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：`economy`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-print-color-adjust
   */
  declare readonly WebkitPrintColorAdjust: {};
  /**
   * 兼容属性 -webkit-ruby-position；优先参考标准属性及浏览器支持范围。
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：`alternate`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  declare readonly WebkitRubyPosition: {};
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
  declare readonly WebkitScrollSnapType: {};
  /**
   * 兼容属性 -webkit-shape-margin；优先参考标准属性及浏览器支持范围。
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-shape-margin
   */
  declare readonly WebkitShapeMargin: {};
  /**
   * 兼容属性 -webkit-tap-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置 WebKit 触控点击链接或可交互区域时的高亮颜色。
   *
   * CSS 规范初始值：`black`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-tap-highlight-color
   */
  declare readonly WebkitTapHighlightColor: {};
  /**
   * 兼容属性 -webkit-text-combine；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-combine
   */
  declare readonly WebkitTextCombine: {};
  /**
   * 兼容属性 -webkit-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-color
   */
  declare readonly WebkitTextDecorationColor: {};
  /**
   * 兼容属性 -webkit-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  declare readonly WebkitTextDecorationLine: {};
  /**
   * 兼容属性 -webkit-text-decoration-skip；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：`objects`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  declare readonly WebkitTextDecorationSkip: {};
  /**
   * 兼容属性 -webkit-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：`solid`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  declare readonly WebkitTextDecorationStyle: {};
  /**
   * 兼容属性 -webkit-text-emphasis；优先参考标准属性及浏览器支持范围。
   * 同时设置文字着重号的样式和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis
   */
  declare readonly WebkitTextEmphasis: {};
  /**
   * 兼容属性 -webkit-text-emphasis-color；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-color
   */
  declare readonly WebkitTextEmphasisColor: {};
  /**
   * 兼容属性 -webkit-text-emphasis-position；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-position
   */
  declare readonly WebkitTextEmphasisPosition: {};
  /**
   * 兼容属性 -webkit-text-emphasis-style；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：`none`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  declare readonly WebkitTextEmphasisStyle: {};
  /**
   * 兼容属性 -webkit-text-fill-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形内部填充色，可独立于文字描边色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-fill-color
   */
  declare readonly WebkitTextFillColor: {};
  /**
   * 兼容属性 -webkit-text-orientation；优先参考标准属性及浏览器支持范围。
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：`mixed`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  declare readonly WebkitTextOrientation: {};
  /**
   * 兼容属性 -webkit-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-size-adjust
   */
  declare readonly WebkitTextSizeAdjust: {};
  /**
   * 兼容属性 -webkit-text-stroke；优先参考标准属性及浏览器支持范围。
   * 合并设置文字字形描边的宽度和颜色。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke
   */
  declare readonly WebkitTextStroke: {};
  /**
   * 兼容属性 -webkit-text-stroke-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边颜色。
   *
   * CSS 规范初始值：`currentcolor`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-color
   */
  declare readonly WebkitTextStrokeColor: {};
  /**
   * 兼容属性 -webkit-text-stroke-width；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边宽度。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-width
   */
  declare readonly WebkitTextStrokeWidth: {};
  /**
   * 兼容属性 -webkit-text-underline-position；优先参考标准属性及浏览器支持范围。
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  declare readonly WebkitTextUnderlinePosition: {};
  /**
   * 兼容属性 -webkit-touch-callout；优先参考标准属性及浏览器支持范围。
   * 控制特定 WebKit 触控环境是否显示长按内容菜单。
   *
   * CSS 规范初始值：`default`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-touch-callout
   */
  declare readonly WebkitTouchCallout: {};
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
  declare readonly WebkitTransform: {};
  /**
   * 兼容属性 -webkit-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：`50% 50% 0`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  declare readonly WebkitTransformOrigin: {};
  /**
   * 兼容属性 -webkit-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：`flat`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-style
   */
  declare readonly WebkitTransformStyle: {};
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
  declare readonly WebkitTransition: {};
  /**
   * 兼容属性 -webkit-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-delay
   */
  declare readonly WebkitTransitionDelay: {};
  /**
   * 兼容属性 -webkit-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：`0s`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-duration
   */
  declare readonly WebkitTransitionDuration: {};
  /**
   * 兼容属性 -webkit-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-property
   */
  declare readonly WebkitTransitionProperty: {};
  /**
   * 兼容属性 -webkit-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：`ease`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  declare readonly WebkitTransitionTimingFunction: {};
  /**
   * 兼容属性 -webkit-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * CSS 规范初始值：`read-only`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  declare readonly WebkitUserModify: {};
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
  declare readonly WebkitUserSelect: {};
  /**
   * 兼容属性 -webkit-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：`horizontal-tb`，不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  declare readonly WebkitWritingMode: {};
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
  declare readonly whiteSpace: {};
  /**
   * 设置空格、制表符和换行符如何折叠或保留。
   *
   * CSS 规范初始值：`collapse`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  declare readonly whiteSpaceCollapse: {};
  /**
   * 设置分页或分栏断点后需保留的最少行数。
   *
   * CSS 规范初始值：`2`，不同于浏览器默认样式表。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  declare readonly widows: {};
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
  declare readonly width: {};
  /**
   * 提前告知浏览器可能发生变化的属性，便于准备优化资源。
   *
   * 仅对即将发生的变化短期使用；长期或大量声明可能占用额外资源，并提前改变层叠上下文。
   *
   * CSS 规范初始值：`auto`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  declare readonly willChange: {};
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
  declare readonly wordBreak: {};
  /**
   * 设置单词或词间分隔符的额外间距。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  declare readonly wordSpacing: {};
  /**
   * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。
   *
   * CSS 规范初始值：`normal`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  declare readonly wordWrap: {};
  /**
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：`horizontal-tb`，不同于浏览器默认样式表。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  declare readonly writingMode: {};
  /**
   * 设置适用 SVG 元素的水平几何坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  declare readonly x: {};
  /**
   * 设置适用 SVG 元素的垂直几何坐标。
   *
   * CSS 规范初始值：`0`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  declare readonly y: {};
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
  declare readonly zIndex: {};
  /**
   * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。
   *
   * CSS 规范初始值：`1`，不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  declare readonly zoom: {};
}
export type { SystemViews } from './keyword-views.ts';
