// 由 scripts/css/generate.mjs 从固定 csstype@3.2.3 生成；请勿手改。
import type { PropertyName, SystemKeywordView } from '../types.ts';
import type { SystemKeyword } from '../tokens.ts';
import type * as Values from './literal-values.ts';
export interface CssWideKeywords<Key extends PropertyName> extends SystemKeywordView<
  Pick<Values.CssWideValues, 'inherit' | 'initial' | 'revert' | 'unset'>,
  Key
> {
  /**
   * 旧版 Gecko 的初始值关键字；现代样式优先使用 initial。
   */
  readonly MozInitial: SystemKeyword<Key, '-moz-initial'>;
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   */
  readonly revertLayer: SystemKeyword<Key, 'revert-layer'>;
}
export interface NamedColorKeywords<Key extends PropertyName> extends SystemKeywordView<
  Pick<
    Values.NamedColorValues,
    | 'aliceblue'
    | 'antiquewhite'
    | 'aqua'
    | 'aquamarine'
    | 'azure'
    | 'beige'
    | 'bisque'
    | 'black'
    | 'blanchedalmond'
    | 'blue'
    | 'blueviolet'
    | 'brown'
    | 'burlywood'
    | 'cadetblue'
    | 'chartreuse'
    | 'chocolate'
    | 'coral'
    | 'cornflowerblue'
    | 'cornsilk'
    | 'crimson'
    | 'cyan'
    | 'darkblue'
    | 'darkcyan'
    | 'darkgoldenrod'
    | 'darkgray'
    | 'darkgreen'
    | 'darkgrey'
    | 'darkkhaki'
    | 'darkmagenta'
    | 'darkolivegreen'
    | 'darkorange'
    | 'darkorchid'
    | 'darkred'
    | 'darksalmon'
    | 'darkseagreen'
    | 'darkslateblue'
    | 'darkslategray'
    | 'darkslategrey'
    | 'darkturquoise'
    | 'darkviolet'
    | 'deeppink'
    | 'deepskyblue'
    | 'dimgray'
    | 'dimgrey'
    | 'dodgerblue'
    | 'firebrick'
    | 'floralwhite'
    | 'forestgreen'
    | 'fuchsia'
    | 'gainsboro'
    | 'ghostwhite'
    | 'gold'
    | 'goldenrod'
    | 'gray'
    | 'green'
    | 'greenyellow'
    | 'grey'
    | 'honeydew'
    | 'hotpink'
    | 'indianred'
    | 'indigo'
    | 'ivory'
    | 'khaki'
    | 'lavender'
    | 'lavenderblush'
    | 'lawngreen'
    | 'lemonchiffon'
    | 'lightblue'
    | 'lightcoral'
    | 'lightcyan'
    | 'lightgoldenrodyellow'
    | 'lightgray'
    | 'lightgreen'
    | 'lightgrey'
    | 'lightpink'
    | 'lightsalmon'
    | 'lightseagreen'
    | 'lightskyblue'
    | 'lightslategray'
    | 'lightslategrey'
    | 'lightsteelblue'
    | 'lightyellow'
    | 'lime'
    | 'limegreen'
    | 'linen'
    | 'magenta'
    | 'maroon'
    | 'mediumaquamarine'
    | 'mediumblue'
    | 'mediumorchid'
    | 'mediumpurple'
    | 'mediumseagreen'
    | 'mediumslateblue'
    | 'mediumspringgreen'
    | 'mediumturquoise'
    | 'mediumvioletred'
    | 'midnightblue'
    | 'mintcream'
    | 'mistyrose'
    | 'moccasin'
    | 'navajowhite'
    | 'navy'
    | 'oldlace'
    | 'olive'
    | 'olivedrab'
    | 'orange'
    | 'orangered'
    | 'orchid'
    | 'palegoldenrod'
    | 'palegreen'
    | 'paleturquoise'
    | 'palevioletred'
    | 'papayawhip'
    | 'peachpuff'
    | 'peru'
    | 'pink'
    | 'plum'
    | 'powderblue'
    | 'purple'
    | 'rebeccapurple'
    | 'red'
    | 'rosybrown'
    | 'royalblue'
    | 'saddlebrown'
    | 'salmon'
    | 'sandybrown'
    | 'seagreen'
    | 'seashell'
    | 'sienna'
    | 'silver'
    | 'skyblue'
    | 'slateblue'
    | 'slategray'
    | 'slategrey'
    | 'snow'
    | 'springgreen'
    | 'steelblue'
    | 'tan'
    | 'teal'
    | 'thistle'
    | 'tomato'
    | 'turquoise'
    | 'violet'
    | 'wheat'
    | 'white'
    | 'whitesmoke'
    | 'yellow'
    | 'yellowgreen'
  >,
  Key
> {}
export interface SystemColorKeywords<Key extends PropertyName> extends SystemKeywordView<
  Pick<
    Values.SystemColorValues,
    | 'AccentColor'
    | 'AccentColorText'
    | 'ActiveText'
    | 'ButtonBorder'
    | 'ButtonFace'
    | 'ButtonText'
    | 'Canvas'
    | 'CanvasText'
    | 'Field'
    | 'FieldText'
    | 'GrayText'
    | 'Highlight'
    | 'HighlightText'
    | 'LinkText'
    | 'Mark'
    | 'MarkText'
    | 'SelectedItem'
    | 'SelectedItemText'
    | 'VisitedText'
  >,
  Key
> {}
export interface DeprecatedSystemColorKeywords<Key extends PropertyName> extends SystemKeywordView<
  Pick<
    Values.DeprecatedSystemColorValues,
    | 'ActiveBorder'
    | 'ActiveCaption'
    | 'AppWorkspace'
    | 'Background'
    | 'ButtonHighlight'
    | 'ButtonShadow'
    | 'CaptionText'
    | 'InactiveBorder'
    | 'InactiveCaption'
    | 'InactiveCaptionText'
    | 'InfoBackground'
    | 'InfoText'
    | 'Menu'
    | 'MenuText'
    | 'Scrollbar'
    | 'ThreeDDarkShadow'
    | 'ThreeDFace'
    | 'ThreeDHighlight'
    | 'ThreeDLightShadow'
    | 'ThreeDShadow'
    | 'Window'
    | 'WindowFrame'
    | 'WindowText'
  >,
  Key
> {}
export interface AccentColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.AccentColorValues, 'auto' | 'currentColor' | 'transparent'>,
      Key
    > {}
export interface AlignContentKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.AlignContentValues,
        'baseline' | 'center' | 'end' | 'normal' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * align-content 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * align-content 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * align-content 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly spaceAround: SystemKeyword<Key, 'space-around'>;
  /**
   * align-content 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly spaceBetween: SystemKeyword<Key, 'space-between'>;
  /**
   * align-content 的原生 space-evenly 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly spaceEvenly: SystemKeyword<Key, 'space-evenly'>;
}
export interface AlignItemsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.AlignItemsValues, 'baseline' | 'center' | 'end' | 'normal' | 'start' | 'stretch'>,
      Key
    > {
  /**
   * 对锚点定位的元素，沿块方向与关联锚点的中心对齐；需同时具有有效的锚点定位关系。
   */
  readonly anchorCenter: SystemKeyword<Key, 'anchor-center'>;
  /**
   * 在 Flex 中按交叉轴结束侧对齐。
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * 在 Flex 中按交叉轴起始侧对齐；交叉轴方向受换行方式影响。
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * 按项目自身书写方向的结束侧对齐；不同于总按容器方向计算的 end。
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * 按项目自身书写方向的起始侧对齐；项目与容器书写方向不同时，结果可能不同于 start。
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
}
export interface AlignmentBaselineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.AlignmentBaselineValues,
        'alphabetic' | 'baseline' | 'central' | 'ideographic' | 'mathematical' | 'middle'
      >,
      Key
    > {
  /**
   * alignment-baseline 的原生 text-after-edge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly textAfterEdge: SystemKeyword<Key, 'text-after-edge'>;
  /**
   * alignment-baseline 的原生 text-before-edge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly textBeforeEdge: SystemKeyword<Key, 'text-before-edge'>;
}
export interface AlignSelfKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.AlignSelfValues,
        'auto' | 'baseline' | 'center' | 'end' | 'normal' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * align-self 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly anchorCenter: SystemKeyword<Key, 'anchor-center'>;
  /**
   * align-self 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * align-self 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * align-self 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * align-self 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
}
export interface AlignTracksKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.AlignTracksValues,
        'baseline' | 'center' | 'end' | 'normal' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * align-tracks 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * align-tracks 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * align-tracks 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly spaceAround: SystemKeyword<Key, 'space-around'>;
  /**
   * align-tracks 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly spaceBetween: SystemKeyword<Key, 'space-between'>;
  /**
   * align-tracks 的原生 space-evenly 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly spaceEvenly: SystemKeyword<Key, 'space-evenly'>;
}
export interface AllKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface AnchorNameKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.AnchorNameValues, 'none'>, Key> {}
export interface AnchorScopeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.AnchorScopeValues, 'all' | 'none'>, Key> {}
export interface AnimationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.AnimationValues,
        | 'alternate'
        | 'auto'
        | 'backwards'
        | 'both'
        | 'ease'
        | 'forwards'
        | 'infinite'
        | 'linear'
        | 'none'
        | 'normal'
        | 'paused'
        | 'reverse'
        | 'running'
      >,
      Key
    > {
  /**
   * animation 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly alternateReverse: SystemKeyword<Key, 'alternate-reverse'>;
  /**
   * animation 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * animation 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * animation 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * animation 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * animation 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface AnimationCompositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.AnimationCompositionValues, 'accumulate' | 'add' | 'replace'>,
      Key
    > {}
export interface AnimationDelayKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface AnimationDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.AnimationDirectionValues, 'alternate' | 'normal' | 'reverse'>,
      Key
    > {
  /**
   * animation-direction 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  readonly alternateReverse: SystemKeyword<Key, 'alternate-reverse'>;
}
export interface AnimationDurationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.AnimationDurationValues, 'auto'>, Key> {}
export interface AnimationFillModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.AnimationFillModeValues, 'backwards' | 'both' | 'forwards' | 'none'>,
      Key
    > {}
export interface AnimationIterationCountKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.AnimationIterationCountValues, 'infinite'>, Key> {}
export interface AnimationNameKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.AnimationNameValues, 'none'>, Key> {}
export interface AnimationPlayStateKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.AnimationPlayStateValues, 'paused' | 'running'>, Key> {}
export interface AnimationRangeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.AnimationRangeValues, 'contain' | 'cover' | 'entry' | 'exit' | 'normal'>,
      Key
    > {
  /**
   * animation-range 的原生 entry-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  readonly entryCrossing: SystemKeyword<Key, 'entry-crossing'>;
  /**
   * animation-range 的原生 exit-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  readonly exitCrossing: SystemKeyword<Key, 'exit-crossing'>;
}
export interface AnimationRangeEndKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.AnimationRangeEndValues, 'contain' | 'cover' | 'entry' | 'exit' | 'normal'>,
      Key
    > {
  /**
   * animation-range-end 的原生 entry-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  readonly entryCrossing: SystemKeyword<Key, 'entry-crossing'>;
  /**
   * animation-range-end 的原生 exit-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  readonly exitCrossing: SystemKeyword<Key, 'exit-crossing'>;
}
export interface AnimationRangeStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.AnimationRangeStartValues, 'contain' | 'cover' | 'entry' | 'exit' | 'normal'>,
      Key
    > {
  /**
   * animation-range-start 的原生 entry-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  readonly entryCrossing: SystemKeyword<Key, 'entry-crossing'>;
  /**
   * animation-range-start 的原生 exit-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  readonly exitCrossing: SystemKeyword<Key, 'exit-crossing'>;
}
export interface AnimationTimelineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.AnimationTimelineValues, 'auto' | 'none'>, Key> {}
export interface AnimationTimingFunctionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.AnimationTimingFunctionValues, 'ease' | 'linear'>, Key> {
  /**
   * animation-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * animation-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * animation-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * animation-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * animation-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface AppearanceKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.AppearanceValues,
        | 'auto'
        | 'button'
        | 'checkbox'
        | 'listbox'
        | 'menulist'
        | 'meter'
        | 'none'
        | 'radio'
        | 'searchfield'
        | 'textarea'
        | 'textfield'
      >,
      Key
    > {
  /**
   * appearance 的原生 menulist-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly menulistButton: SystemKeyword<Key, 'menulist-button'>;
  /**
   * appearance 的原生 progress-bar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly progressBar: SystemKeyword<Key, 'progress-bar'>;
}
export interface AspectRatioKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.AspectRatioValues, 'auto'>, Key> {}
export interface BackdropFilterKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.BackdropFilterValues, 'none'>, Key> {}
export interface BackfaceVisibilityKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BackfaceVisibilityValues, 'hidden' | 'visible'>, Key> {}
export interface BackgroundKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BackgroundValues,
        | 'bottom'
        | 'center'
        | 'currentColor'
        | 'fixed'
        | 'left'
        | 'local'
        | 'none'
        | 'repeat'
        | 'right'
        | 'round'
        | 'scroll'
        | 'space'
        | 'top'
        | 'transparent'
      >,
      Key
    > {
  /**
   * CSS 颜色关键字 border-box；系统颜色会随用户环境和配色设置变化。
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * CSS 颜色关键字 content-box；系统颜色会随用户环境和配色设置变化。
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * CSS 颜色关键字 no-repeat；系统颜色会随用户环境和配色设置变化。
   */
  readonly noRepeat: SystemKeyword<Key, 'no-repeat'>;
  /**
   * CSS 颜色关键字 padding-box；系统颜色会随用户环境和配色设置变化。
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * CSS 颜色关键字 repeat-x；系统颜色会随用户环境和配色设置变化。
   */
  readonly repeatX: SystemKeyword<Key, 'repeat-x'>;
  /**
   * CSS 颜色关键字 repeat-y；系统颜色会随用户环境和配色设置变化。
   */
  readonly repeatY: SystemKeyword<Key, 'repeat-y'>;
}
export interface BackgroundAttachmentKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BackgroundAttachmentValues, 'fixed' | 'local' | 'scroll'>, Key> {}
export interface BackgroundBlendModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BackgroundBlendModeValues,
        | 'color'
        | 'darken'
        | 'difference'
        | 'exclusion'
        | 'hue'
        | 'lighten'
        | 'luminosity'
        | 'multiply'
        | 'normal'
        | 'overlay'
        | 'saturation'
        | 'screen'
      >,
      Key
    > {
  /**
   * background-blend-mode 的原生 color-burn 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly colorBurn: SystemKeyword<Key, 'color-burn'>;
  /**
   * background-blend-mode 的原生 color-dodge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly colorDodge: SystemKeyword<Key, 'color-dodge'>;
  /**
   * background-blend-mode 的原生 hard-light 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly hardLight: SystemKeyword<Key, 'hard-light'>;
  /**
   * background-blend-mode 的原生 soft-light 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly softLight: SystemKeyword<Key, 'soft-light'>;
}
export interface BackgroundClipKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.BackgroundClipValues, 'text'>, Key> {
  /**
   * background-clip 的原生 border-area 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  readonly borderArea: SystemKeyword<Key, 'border-area'>;
  /**
   * background-clip 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * background-clip 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * background-clip 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
}
export interface BackgroundColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.BackgroundColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface BackgroundImageKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BackgroundImageValues, 'none'>, Key> {}
export interface BackgroundOriginKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * background-origin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * background-origin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * background-origin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
}
export interface BackgroundPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.BackgroundPositionValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface BackgroundPositionXKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BackgroundPositionXValues, 'center' | 'left' | 'right'>, Key> {
  /**
   * background-position-x 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  readonly xEnd: SystemKeyword<Key, 'x-end'>;
  /**
   * background-position-x 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  readonly xStart: SystemKeyword<Key, 'x-start'>;
}
export interface BackgroundPositionYKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BackgroundPositionYValues, 'bottom' | 'center' | 'top'>, Key> {
  /**
   * background-position-y 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  readonly yEnd: SystemKeyword<Key, 'y-end'>;
  /**
   * background-position-y 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  readonly yStart: SystemKeyword<Key, 'y-start'>;
}
export interface BackgroundRepeatKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BackgroundRepeatValues, 'repeat' | 'round' | 'space'>, Key> {
  /**
   * background-repeat 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly noRepeat: SystemKeyword<Key, 'no-repeat'>;
  /**
   * background-repeat 的原生 repeat-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly repeatX: SystemKeyword<Key, 'repeat-x'>;
  /**
   * background-repeat 的原生 repeat-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly repeatY: SystemKeyword<Key, 'repeat-y'>;
}
export interface BackgroundSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BackgroundSizeValues, 'auto' | 'contain' | 'cover'>, Key> {}
export interface BaselineShiftKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BaselineShiftValues, 'baseline' | 'sub' | 'super'>, Key> {}
export interface BlockSizeKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.BlockSizeValues, 'auto'>, Key> {
  /**
   * block-size 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * block-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * block-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface BorderKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderBlockKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderBlockValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderBlockColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderBlockColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface BorderBlockEndKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderBlockEndValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderBlockEndColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.BorderBlockEndColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface BorderBlockEndStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderBlockEndStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderBlockEndWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderBlockEndWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface BorderBlockStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderBlockStartValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderBlockStartColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.BorderBlockStartColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface BorderBlockStartStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderBlockStartStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderBlockStartWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderBlockStartWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface BorderBlockStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderBlockStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderBlockWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderBlockWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface BorderBottomKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderBottomValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderBottomColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderBottomColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface BorderBottomLeftRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface BorderBottomRightRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface BorderBottomStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderBottomStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderBottomWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderBottomWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface BorderCollapseKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderCollapseValues, 'collapse' | 'separate'>, Key> {}
export interface BorderColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface BorderEndEndRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface BorderEndStartRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface BorderImageKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.BorderImageValues, 'none' | 'repeat' | 'round' | 'space' | 'stretch'>,
      Key
    > {}
export interface BorderImageOutsetKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface BorderImageRepeatKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.BorderImageRepeatValues, 'repeat' | 'round' | 'space' | 'stretch'>,
      Key
    > {}
export interface BorderImageSliceKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface BorderImageSourceKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderImageSourceValues, 'none'>, Key> {}
export interface BorderImageWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderImageWidthValues, 'auto'>, Key> {}
export interface BorderInlineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderInlineValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderInlineColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderInlineColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface BorderInlineEndKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderInlineEndValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderInlineEndColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.BorderInlineEndColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface BorderInlineEndStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderInlineEndStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderInlineEndWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderInlineEndWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface BorderInlineStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderInlineStartValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderInlineStartColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.BorderInlineStartColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface BorderInlineStartStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderInlineStartStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderInlineStartWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.BorderInlineStartWidthValues, 'medium' | 'thick' | 'thin'>,
      Key
    > {}
export interface BorderInlineStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderInlineStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderInlineWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderInlineWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface BorderLeftKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderLeftValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderLeftColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderLeftColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface BorderLeftStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderLeftStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderLeftWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderLeftWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface BorderRadiusKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface BorderRightKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderRightValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderRightColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderRightColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface BorderRightStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderRightStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderRightWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderRightWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface BorderSpacingKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface BorderStartEndRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface BorderStartStartRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface BorderStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderTopKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderTopValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface BorderTopColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderTopColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface BorderTopLeftRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface BorderTopRightRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface BorderTopStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BorderTopStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface BorderTopWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderTopWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface BorderWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BorderWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface BottomKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.BottomValues, 'auto'>, Key> {}
export interface BoxAlignKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.BoxAlignValues, 'baseline' | 'center' | 'end' | 'start' | 'stretch'>,
      Key
    > {}
export interface BoxDecorationBreakKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BoxDecorationBreakValues, 'clone' | 'slice'>, Key> {}
export interface BoxDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BoxDirectionValues, 'normal' | 'reverse'>, Key> {}
export interface BoxFlexKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface BoxFlexGroupKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface BoxLinesKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BoxLinesValues, 'multiple' | 'single'>, Key> {}
export interface BoxOrdinalGroupKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface BoxOrientKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BoxOrientValues, 'horizontal' | 'vertical'>, Key> {
  /**
   * box-orient 的原生 block-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  readonly blockAxis: SystemKeyword<Key, 'block-axis'>;
  /**
   * box-orient 的原生 inline-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  readonly inlineAxis: SystemKeyword<Key, 'inline-axis'>;
}
export interface BoxPackKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BoxPackValues, 'center' | 'end' | 'justify' | 'start'>, Key> {}
export interface BoxShadowKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.BoxShadowValues, 'none'>, Key> {}
export interface BoxSizingKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * 指定尺寸包含内容、内边距和边框，但不包含外边距。
   *
   * 区别：content-box 在声明宽高之外再加内边距和边框。
   *
   * 适用场景：希望组件的指定宽高包含内边距和边框时。
   *
   * 仍不包含 margin；最小/最大尺寸和布局约束仍参与计算。
   *
   * @example
   * s.boxSizing("border-box").width("20rem").padding("1rem")
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * 指定尺寸仅计算内容盒，内边距和边框额外增加外部尺寸。
   *
   * 适用场景：希望明确指定纯内容区尺寸时。
   *
   * @example
   * s.boxSizing("content-box").width("100px").padding("10px")
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
}
export interface BreakAfterKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BreakAfterValues,
        | 'all'
        | 'always'
        | 'auto'
        | 'avoid'
        | 'column'
        | 'left'
        | 'page'
        | 'recto'
        | 'region'
        | 'right'
        | 'verso'
      >,
      Key
    > {
  /**
   * break-after 的原生 avoid-column 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly avoidColumn: SystemKeyword<Key, 'avoid-column'>;
  /**
   * break-after 的原生 avoid-page 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly avoidPage: SystemKeyword<Key, 'avoid-page'>;
  /**
   * break-after 的原生 avoid-region 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly avoidRegion: SystemKeyword<Key, 'avoid-region'>;
}
export interface BreakBeforeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.BreakBeforeValues,
        | 'all'
        | 'always'
        | 'auto'
        | 'avoid'
        | 'column'
        | 'left'
        | 'page'
        | 'recto'
        | 'region'
        | 'right'
        | 'verso'
      >,
      Key
    > {
  /**
   * break-before 的原生 avoid-column 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly avoidColumn: SystemKeyword<Key, 'avoid-column'>;
  /**
   * break-before 的原生 avoid-page 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly avoidPage: SystemKeyword<Key, 'avoid-page'>;
  /**
   * break-before 的原生 avoid-region 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly avoidRegion: SystemKeyword<Key, 'avoid-region'>;
}
export interface BreakInsideKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.BreakInsideValues, 'auto' | 'avoid'>, Key> {
  /**
   * break-inside 的原生 avoid-column 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  readonly avoidColumn: SystemKeyword<Key, 'avoid-column'>;
  /**
   * break-inside 的原生 avoid-page 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  readonly avoidPage: SystemKeyword<Key, 'avoid-page'>;
  /**
   * break-inside 的原生 avoid-region 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  readonly avoidRegion: SystemKeyword<Key, 'avoid-region'>;
}
export interface CaptionSideKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.CaptionSideValues, 'bottom' | 'top'>, Key> {}
export interface CaretKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.CaretValues,
        'auto' | 'bar' | 'block' | 'currentColor' | 'transparent' | 'underscore'
      >,
      Key
    > {}
export interface CaretColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.CaretColorValues, 'auto' | 'currentColor' | 'transparent'>,
      Key
    > {}
export interface CaretShapeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.CaretShapeValues, 'auto' | 'bar' | 'block' | 'underscore'>,
      Key
    > {}
export interface ClearKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ClearValues, 'both' | 'left' | 'none' | 'right'>, Key> {
  /**
   * clear 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  readonly inlineEnd: SystemKeyword<Key, 'inline-end'>;
  /**
   * clear 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  readonly inlineStart: SystemKeyword<Key, 'inline-start'>;
}
export interface ClipKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ClipValues, 'auto'>, Key> {}
export interface ClipPathKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ClipPathValues, 'none'>, Key> {
  /**
   * clip-path 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * clip-path 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * clip-path 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * clip-path 的原生 margin-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly marginBox: SystemKeyword<Key, 'margin-box'>;
  /**
   * clip-path 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * clip-path 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * clip-path 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface ClipRuleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ClipRuleValues, 'evenodd' | 'nonzero'>, Key> {}
export interface ColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.ColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface ColorAdjustKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ColorAdjustValues, 'economy' | 'exact'>, Key> {}
export interface ColorInterpolationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ColorInterpolationValues, 'auto' | 'linearRGB' | 'sRGB'>, Key> {}
export interface ColorInterpolationFiltersKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.ColorInterpolationFiltersValues, 'auto' | 'linearRGB' | 'sRGB'>,
      Key
    > {}
export interface ColorRenderingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.ColorRenderingValues, 'auto' | 'optimizeQuality' | 'optimizeSpeed'>,
      Key
    > {}
export interface ColorSchemeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ColorSchemeValues, 'dark' | 'light' | 'normal'>, Key> {}
export interface ColumnCountKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ColumnCountValues, 'auto'>, Key> {}
export interface ColumnFillKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ColumnFillValues, 'auto' | 'balance'>, Key> {}
export interface ColumnGapKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ColumnGapValues, 'normal'>, Key> {}
export interface ColumnRuleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.ColumnRuleValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface ColumnRuleColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.ColumnRuleColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface ColumnRuleStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.ColumnRuleStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface ColumnRuleWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ColumnRuleWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface ColumnsKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ColumnsValues, 'auto'>, Key> {}
export interface ColumnSpanKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ColumnSpanValues, 'all' | 'none'>, Key> {}
export interface ColumnWidthKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ColumnWidthValues, 'auto'>, Key> {}
export interface ContainKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.ContainValues,
        'content' | 'layout' | 'none' | 'paint' | 'size' | 'strict' | 'style'
      >,
      Key
    > {
  /**
   * contain 的原生 inline-size 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  readonly inlineSize: SystemKeyword<Key, 'inline-size'>;
}
export interface ContainerKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ContainerValues, 'none'>, Key> {}
export interface ContainerNameKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ContainerNameValues, 'none'>, Key> {}
export interface ContainerTypeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ContainerTypeValues, 'normal' | 'size'>, Key> {
  /**
   * 建立行内轴尺寸查询容器，不同时隔离块轴尺寸。
   */
  readonly inlineSize: SystemKeyword<Key, 'inline-size'>;
  /**
   * container-type 的原生 scroll-state 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  readonly scrollState: SystemKeyword<Key, 'scroll-state'>;
}
export interface ContainIntrinsicBlockSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ContainIntrinsicBlockSizeValues, 'none'>, Key> {}
export interface ContainIntrinsicHeightKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ContainIntrinsicHeightValues, 'none'>, Key> {}
export interface ContainIntrinsicInlineSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ContainIntrinsicInlineSizeValues, 'none'>, Key> {}
export interface ContainIntrinsicSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ContainIntrinsicSizeValues, 'none'>, Key> {}
export interface ContainIntrinsicWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ContainIntrinsicWidthValues, 'none'>, Key> {}
export interface ContentKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ContentValues, 'none' | 'normal'>, Key> {
  /**
   * content 的原生 close-quote 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  readonly closeQuote: SystemKeyword<Key, 'close-quote'>;
  /**
   * content 的原生 no-close-quote 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  readonly noCloseQuote: SystemKeyword<Key, 'no-close-quote'>;
  /**
   * content 的原生 no-open-quote 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  readonly noOpenQuote: SystemKeyword<Key, 'no-open-quote'>;
  /**
   * content 的原生 open-quote 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  readonly openQuote: SystemKeyword<Key, 'open-quote'>;
}
export interface ContentVisibilityKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ContentVisibilityValues, 'auto' | 'hidden' | 'visible'>, Key> {}
export interface CounterIncrementKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.CounterIncrementValues, 'none'>, Key> {}
export interface CounterResetKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.CounterResetValues, 'none'>, Key> {}
export interface CounterSetKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.CounterSetValues, 'none'>, Key> {}
export interface CursorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.CursorValues,
        | 'alias'
        | 'auto'
        | 'cell'
        | 'copy'
        | 'crosshair'
        | 'default'
        | 'grab'
        | 'grabbing'
        | 'help'
        | 'move'
        | 'none'
        | 'pointer'
        | 'progress'
        | 'text'
        | 'wait'
      >,
      Key
    > {
  /**
   * cursor 的原生 -moz-grab 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly MozGrab: SystemKeyword<Key, '-moz-grab'>;
  /**
   * cursor 的原生 -moz-zoom-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly MozZoomIn: SystemKeyword<Key, '-moz-zoom-in'>;
  /**
   * cursor 的原生 -moz-zoom-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly MozZoomOut: SystemKeyword<Key, '-moz-zoom-out'>;
  /**
   * cursor 的原生 -webkit-grab 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly WebkitGrab: SystemKeyword<Key, '-webkit-grab'>;
  /**
   * cursor 的原生 -webkit-grabbing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly WebkitGrabbing: SystemKeyword<Key, '-webkit-grabbing'>;
  /**
   * cursor 的原生 -webkit-zoom-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly WebkitZoomIn: SystemKeyword<Key, '-webkit-zoom-in'>;
  /**
   * cursor 的原生 -webkit-zoom-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly WebkitZoomOut: SystemKeyword<Key, '-webkit-zoom-out'>;
  /**
   * cursor 的原生 all-scroll 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly allScroll: SystemKeyword<Key, 'all-scroll'>;
  /**
   * cursor 的原生 col-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly colResize: SystemKeyword<Key, 'col-resize'>;
  /**
   * cursor 的原生 context-menu 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly contextMenu: SystemKeyword<Key, 'context-menu'>;
  /**
   * cursor 的原生 e-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly eResize: SystemKeyword<Key, 'e-resize'>;
  /**
   * cursor 的原生 ew-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly ewResize: SystemKeyword<Key, 'ew-resize'>;
  /**
   * cursor 的原生 n-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly nResize: SystemKeyword<Key, 'n-resize'>;
  /**
   * cursor 的原生 ne-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly neResize: SystemKeyword<Key, 'ne-resize'>;
  /**
   * cursor 的原生 nesw-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly neswResize: SystemKeyword<Key, 'nesw-resize'>;
  /**
   * cursor 的原生 no-drop 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly noDrop: SystemKeyword<Key, 'no-drop'>;
  /**
   * cursor 的原生 not-allowed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly notAllowed: SystemKeyword<Key, 'not-allowed'>;
  /**
   * cursor 的原生 ns-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly nsResize: SystemKeyword<Key, 'ns-resize'>;
  /**
   * cursor 的原生 nw-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly nwResize: SystemKeyword<Key, 'nw-resize'>;
  /**
   * cursor 的原生 nwse-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly nwseResize: SystemKeyword<Key, 'nwse-resize'>;
  /**
   * cursor 的原生 row-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly rowResize: SystemKeyword<Key, 'row-resize'>;
  /**
   * cursor 的原生 s-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly sResize: SystemKeyword<Key, 's-resize'>;
  /**
   * cursor 的原生 se-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly seResize: SystemKeyword<Key, 'se-resize'>;
  /**
   * cursor 的原生 sw-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly swResize: SystemKeyword<Key, 'sw-resize'>;
  /**
   * cursor 的原生 vertical-text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly verticalText: SystemKeyword<Key, 'vertical-text'>;
  /**
   * cursor 的原生 w-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly wResize: SystemKeyword<Key, 'w-resize'>;
  /**
   * cursor 的原生 zoom-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly zoomIn: SystemKeyword<Key, 'zoom-in'>;
  /**
   * cursor 的原生 zoom-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly zoomOut: SystemKeyword<Key, 'zoom-out'>;
}
export interface CxKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface CyKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface DKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.DValues, 'none'>, Key> {}
export interface DirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.DirectionValues, 'ltr' | 'rtl'>, Key> {}
export interface DisplayKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.DisplayValues,
        'block' | 'contents' | 'flex' | 'flow' | 'grid' | 'inline' | 'none' | 'ruby' | 'table'
      >,
      Key
    > {
  /**
   * display 的原生 -ms-flexbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly MsFlexbox: SystemKeyword<Key, '-ms-flexbox'>;
  /**
   * display 的原生 -ms-grid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly MsGrid: SystemKeyword<Key, '-ms-grid'>;
  /**
   * display 的原生 -ms-inline-flexbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly MsInlineFlexbox: SystemKeyword<Key, '-ms-inline-flexbox'>;
  /**
   * display 的原生 -ms-inline-grid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly MsInlineGrid: SystemKeyword<Key, '-ms-inline-grid'>;
  /**
   * display 的原生 -webkit-flex 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly WebkitFlex: SystemKeyword<Key, '-webkit-flex'>;
  /**
   * display 的原生 -webkit-inline-flex 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly WebkitInlineFlex: SystemKeyword<Key, '-webkit-inline-flex'>;
  /**
   * 建立独立块格式化上下文，可包住内部浮动并隔离部分外边距折叠。
   *
   * 区别：与普通 block 相比，显式建立独立块格式化上下文；无需借助 overflow:hidden，也不会因此裁剪溢出。
   *
   * 适用场景：让容器包住内部浮动，或隔离内外的部分外边距折叠。
   *
   * @example
   * s.display("flow-root").padding("1rem")
   */
  readonly flowRoot: SystemKeyword<Key, 'flow-root'>;
  /**
   * 外部参与行内排版，内部建立独立格式化上下文，可设置宽高。
   *
   * 区别：与 inline 相比可设置宽高，内部建立独立格式化上下文；与 inline-flex 相比，内部使用普通流而非 Flex。
   *
   * 适用场景：需要宽高、内边距且随文本同行排列的小盒子。
   *
   * 相邻行内级盒子之间的文本空白仍可能形成间距，vertical-align 会影响它在行内的位置。
   *
   * @example
   * s.display("inline-block").width("2rem").height("2rem").verticalAlign("middle")
   */
  readonly inlineBlock: SystemKeyword<Key, 'inline-block'>;
  /**
   * 创建行内级的 Flex 容器。
   *
   * 对外：在普通文档流中作为一个整体参与行内排版，可以与文字或其他行内内容位于同一行。
   * 对内：直接子元素使用 Flex 布局，可通过 alignItems、justifyContent、gap 等控制对齐和间距。
   *
   * 区别：与 flex 的区别是容器自身的外部排版方式，内部弹性布局机制相同；inline-flex 对应双关键字写法 inline flex。
   *
   * 适用场景：图标与文字组合、标签等需要内部弹性对齐，同时以行内方式排列的内容。
   *
   * 子项换行由 flex-wrap 控制。当容器自身是 Flex/Grid 项目时，其外部排版还受父布局控制。
   *
   * @example
   * s.display("inline-flex").alignItems("center").gap("0.375rem")
   */
  readonly inlineFlex: SystemKeyword<Key, 'inline-flex'>;
  /**
   * 生成行内级网格容器，内部仍使用 Grid 布局。
   *
   * 区别：与 grid 的内部网格布局相同，但容器在普通流中按行内级盒子排列。
   *
   * 适用场景：需要行列对齐并与周围文字同行的小型内容组。
   *
   * @example
   * s.display("inline-grid").gridTemplateColumns("repeat(2, auto)").gap("0.25rem")
   */
  readonly inlineGrid: SystemKeyword<Key, 'inline-grid'>;
  /**
   * display 的原生 inline-list-item 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly inlineListItem: SystemKeyword<Key, 'inline-list-item'>;
  /**
   * 创建行内级表格盒，可与文字同行；内部仍采用表格布局。
   */
  readonly inlineTable: SystemKeyword<Key, 'inline-table'>;
  /**
   * 生成带列表标记的主盒子，标记由 list-style 等属性控制。
   */
  readonly listItem: SystemKeyword<Key, 'list-item'>;
  /**
   * display 的原生 ruby-base 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly rubyBase: SystemKeyword<Key, 'ruby-base'>;
  /**
   * display 的原生 ruby-base-container 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly rubyBaseContainer: SystemKeyword<Key, 'ruby-base-container'>;
  /**
   * display 的原生 ruby-text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly rubyText: SystemKeyword<Key, 'ruby-text'>;
  /**
   * display 的原生 ruby-text-container 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly rubyTextContainer: SystemKeyword<Key, 'ruby-text-container'>;
  /**
   * display 的原生 run-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly runIn: SystemKeyword<Key, 'run-in'>;
  /**
   * 作为表格标题盒参与布局，位置由 caption-side 控制。
   */
  readonly tableCaption: SystemKeyword<Key, 'table-caption'>;
  /**
   * 作为表格单元格参与行列尺寸计算，可使用 vertical-align 控制单元格内容的垂直对齐。
   */
  readonly tableCell: SystemKeyword<Key, 'table-cell'>;
  /**
   * 作为表格列参与布局，用于列级尺寸和部分样式；不能把任意内容当成一列直接显示。
   */
  readonly tableColumn: SystemKeyword<Key, 'table-column'>;
  /**
   * 把多个表格列组织为列组，对应 colgroup 的布局角色。
   */
  readonly tableColumnGroup: SystemKeyword<Key, 'table-column-group'>;
  /**
   * 作为表尾行组参与表格布局，对应 tfoot 的布局角色。
   */
  readonly tableFooterGroup: SystemKeyword<Key, 'table-footer-group'>;
  /**
   * 作为表头行组参与表格布局，对应 thead 的布局角色。
   */
  readonly tableHeaderGroup: SystemKeyword<Key, 'table-header-group'>;
  /**
   * 作为表格的一行，组织其中的单元格。
   */
  readonly tableRow: SystemKeyword<Key, 'table-row'>;
  /**
   * 把多行组织成表格主体行组，对应 tbody 的布局角色。
   */
  readonly tableRowGroup: SystemKeyword<Key, 'table-row-group'>;
}
export interface DominantBaselineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.DominantBaselineValues,
        'alphabetic' | 'auto' | 'central' | 'hanging' | 'ideographic' | 'mathematical' | 'middle'
      >,
      Key
    > {
  /**
   * dominant-baseline 的原生 text-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly textBottom: SystemKeyword<Key, 'text-bottom'>;
  /**
   * dominant-baseline 的原生 text-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly textTop: SystemKeyword<Key, 'text-top'>;
}
export interface EmptyCellsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.EmptyCellsValues, 'hide' | 'show'>, Key> {}
export interface FieldSizingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FieldSizingValues, 'content' | 'fixed'>, Key> {}
export interface FillKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.FillValues, 'currentColor' | 'none' | 'transparent'>, Key> {
  /**
   * CSS 颜色关键字 context-fill；系统颜色会随用户环境和配色设置变化。
   */
  readonly contextFill: SystemKeyword<Key, 'context-fill'>;
  /**
   * CSS 颜色关键字 context-stroke；系统颜色会随用户环境和配色设置变化。
   */
  readonly contextStroke: SystemKeyword<Key, 'context-stroke'>;
}
export interface FillOpacityKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface FillRuleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FillRuleValues, 'evenodd' | 'nonzero'>, Key> {}
export interface FilterKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.FilterValues, 'none'>, Key> {}
export interface FlexKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FlexValues, 'auto' | 'content' | 'none'>, Key> {
  /**
   * flex 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * flex 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * flex 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface FlexBasisKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FlexBasisValues, 'auto' | 'content'>, Key> {
  /**
   * flex-basis 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * flex-basis 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * flex-basis 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * flex-basis 的原生 -webkit-auto 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly WebkitAuto: SystemKeyword<Key, '-webkit-auto'>;
  /**
   * flex-basis 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * flex-basis 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * flex-basis 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface FlexDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FlexDirectionValues, 'column' | 'row'>, Key> {
  /**
   * 反转块方向的视觉排列，不改变 DOM 顺序。
   */
  readonly columnReverse: SystemKeyword<Key, 'column-reverse'>;
  /**
   * 反转行内方向的视觉排列，不改变 DOM 顺序。
   */
  readonly rowReverse: SystemKeyword<Key, 'row-reverse'>;
}
export interface FlexFlowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FlexFlowValues, 'column' | 'nowrap' | 'row' | 'wrap'>, Key> {
  /**
   * flex-flow 的原生 column-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly columnReverse: SystemKeyword<Key, 'column-reverse'>;
  /**
   * flex-flow 的原生 row-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly rowReverse: SystemKeyword<Key, 'row-reverse'>;
  /**
   * flex-flow 的原生 wrap-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly wrapReverse: SystemKeyword<Key, 'wrap-reverse'>;
}
export interface FlexGrowKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface FlexShrinkKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface FlexWrapKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FlexWrapValues, 'nowrap' | 'wrap'>, Key> {
  /**
   * 允许换行并反转交叉轴上各行的排列方向。
   */
  readonly wrapReverse: SystemKeyword<Key, 'wrap-reverse'>;
}
export interface FloatKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FloatValues, 'left' | 'none' | 'right'>, Key> {
  /**
   * float 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  readonly inlineEnd: SystemKeyword<Key, 'inline-end'>;
  /**
   * float 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  readonly inlineStart: SystemKeyword<Key, 'inline-start'>;
}
export interface FloodColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.FloodColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface FloodOpacityKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface FontKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontValues, 'caption' | 'icon' | 'menu'>, Key> {
  /**
   * font 的原生 message-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  readonly messageBox: SystemKeyword<Key, 'message-box'>;
  /**
   * font 的原生 small-caption 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  readonly smallCaption: SystemKeyword<Key, 'small-caption'>;
  /**
   * font 的原生 status-bar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  readonly statusBar: SystemKeyword<Key, 'status-bar'>;
}
export interface FontFamilyKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.FontFamilyValues,
        'cursive' | 'emoji' | 'fangsong' | 'fantasy' | 'math' | 'monospace' | 'serif'
      >,
      Key
    > {
  /**
   * font-family 的原生 -apple-system 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly AppleSystem: SystemKeyword<Key, '-apple-system'>;
  /**
   * font-family 的原生 sans-serif 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly sansSerif: SystemKeyword<Key, 'sans-serif'>;
  /**
   * font-family 的原生 system-ui 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly systemUi: SystemKeyword<Key, 'system-ui'>;
  /**
   * font-family 的原生 ui-monospace 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly uiMonospace: SystemKeyword<Key, 'ui-monospace'>;
  /**
   * font-family 的原生 ui-rounded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly uiRounded: SystemKeyword<Key, 'ui-rounded'>;
  /**
   * font-family 的原生 ui-sans-serif 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly uiSansSerif: SystemKeyword<Key, 'ui-sans-serif'>;
  /**
   * font-family 的原生 ui-serif 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly uiSerif: SystemKeyword<Key, 'ui-serif'>;
}
export interface FontFeatureSettingsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontFeatureSettingsValues, 'normal'>, Key> {}
export interface FontKerningKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontKerningValues, 'auto' | 'none' | 'normal'>, Key> {}
export interface FontLanguageOverrideKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontLanguageOverrideValues, 'normal'>, Key> {}
export interface FontOpticalSizingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontOpticalSizingValues, 'auto' | 'none'>, Key> {}
export interface FontPaletteKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontPaletteValues, 'dark' | 'light' | 'normal'>, Key> {}
export interface FontSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.FontSizeValues, 'large' | 'larger' | 'math' | 'medium' | 'small' | 'smaller'>,
      Key
    > {
  /**
   * font-size 的原生 x-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly xLarge: SystemKeyword<Key, 'x-large'>;
  /**
   * font-size 的原生 x-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly xSmall: SystemKeyword<Key, 'x-small'>;
  /**
   * font-size 的原生 xx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly xxLarge: SystemKeyword<Key, 'xx-large'>;
  /**
   * font-size 的原生 xx-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly xxSmall: SystemKeyword<Key, 'xx-small'>;
  /**
   * font-size 的原生 xxx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly xxxLarge: SystemKeyword<Key, 'xxx-large'>;
}
export interface FontSizeAdjustKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.FontSizeAdjustValues, 'none'>, Key> {
  /**
   * font-size-adjust 的原生 from-font 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  readonly fromFont: SystemKeyword<Key, 'from-font'>;
}
export interface FontSmoothKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.FontSmoothValues, 'always' | 'auto' | 'large' | 'medium' | 'never' | 'small'>,
      Key
    > {
  /**
   * font-smooth 的原生 x-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly xLarge: SystemKeyword<Key, 'x-large'>;
  /**
   * font-smooth 的原生 x-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly xSmall: SystemKeyword<Key, 'x-small'>;
  /**
   * font-smooth 的原生 xx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly xxLarge: SystemKeyword<Key, 'xx-large'>;
  /**
   * font-smooth 的原生 xx-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly xxSmall: SystemKeyword<Key, 'xx-small'>;
  /**
   * font-smooth 的原生 xxx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly xxxLarge: SystemKeyword<Key, 'xxx-large'>;
}
export interface FontStretchKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontStretchValues, 'condensed' | 'expanded' | 'normal'>, Key> {
  /**
   * font-stretch 的原生 extra-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly extraCondensed: SystemKeyword<Key, 'extra-condensed'>;
  /**
   * font-stretch 的原生 extra-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly extraExpanded: SystemKeyword<Key, 'extra-expanded'>;
  /**
   * font-stretch 的原生 semi-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly semiCondensed: SystemKeyword<Key, 'semi-condensed'>;
  /**
   * font-stretch 的原生 semi-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly semiExpanded: SystemKeyword<Key, 'semi-expanded'>;
  /**
   * font-stretch 的原生 ultra-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly ultraCondensed: SystemKeyword<Key, 'ultra-condensed'>;
  /**
   * font-stretch 的原生 ultra-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly ultraExpanded: SystemKeyword<Key, 'ultra-expanded'>;
}
export interface FontStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontStyleValues, 'italic' | 'normal' | 'oblique'>, Key> {}
export interface FontSynthesisKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.FontSynthesisValues, 'none' | 'position' | 'style' | 'weight'>,
      Key
    > {
  /**
   * font-synthesis 的原生 small-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  readonly smallCaps: SystemKeyword<Key, 'small-caps'>;
}
export interface FontSynthesisPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontSynthesisPositionValues, 'auto' | 'none'>, Key> {}
export interface FontSynthesisSmallCapsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontSynthesisSmallCapsValues, 'auto' | 'none'>, Key> {}
export interface FontSynthesisStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontSynthesisStyleValues, 'auto' | 'none'>, Key> {}
export interface FontSynthesisWeightKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontSynthesisWeightValues, 'auto' | 'none'>, Key> {}
export interface FontVariantKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.FontVariantValues,
        | 'contextual'
        | 'jis04'
        | 'jis78'
        | 'jis83'
        | 'jis90'
        | 'none'
        | 'normal'
        | 'ordinal'
        | 'ruby'
        | 'simplified'
        | 'traditional'
        | 'unicase'
      >,
      Key
    > {
  /**
   * font-variant 的原生 all-petite-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly allPetiteCaps: SystemKeyword<Key, 'all-petite-caps'>;
  /**
   * font-variant 的原生 all-small-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly allSmallCaps: SystemKeyword<Key, 'all-small-caps'>;
  /**
   * font-variant 的原生 common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly commonLigatures: SystemKeyword<Key, 'common-ligatures'>;
  /**
   * font-variant 的原生 diagonal-fractions 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly diagonalFractions: SystemKeyword<Key, 'diagonal-fractions'>;
  /**
   * font-variant 的原生 discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly discretionaryLigatures: SystemKeyword<Key, 'discretionary-ligatures'>;
  /**
   * font-variant 的原生 full-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly fullWidth: SystemKeyword<Key, 'full-width'>;
  /**
   * font-variant 的原生 historical-forms 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly historicalForms: SystemKeyword<Key, 'historical-forms'>;
  /**
   * font-variant 的原生 historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly historicalLigatures: SystemKeyword<Key, 'historical-ligatures'>;
  /**
   * font-variant 的原生 lining-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly liningNums: SystemKeyword<Key, 'lining-nums'>;
  /**
   * font-variant 的原生 no-common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly noCommonLigatures: SystemKeyword<Key, 'no-common-ligatures'>;
  /**
   * font-variant 的原生 no-contextual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly noContextual: SystemKeyword<Key, 'no-contextual'>;
  /**
   * font-variant 的原生 no-discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly noDiscretionaryLigatures: SystemKeyword<Key, 'no-discretionary-ligatures'>;
  /**
   * font-variant 的原生 no-historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly noHistoricalLigatures: SystemKeyword<Key, 'no-historical-ligatures'>;
  /**
   * font-variant 的原生 oldstyle-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly oldstyleNums: SystemKeyword<Key, 'oldstyle-nums'>;
  /**
   * font-variant 的原生 petite-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly petiteCaps: SystemKeyword<Key, 'petite-caps'>;
  /**
   * font-variant 的原生 proportional-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly proportionalNums: SystemKeyword<Key, 'proportional-nums'>;
  /**
   * font-variant 的原生 proportional-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly proportionalWidth: SystemKeyword<Key, 'proportional-width'>;
  /**
   * font-variant 的原生 slashed-zero 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly slashedZero: SystemKeyword<Key, 'slashed-zero'>;
  /**
   * font-variant 的原生 small-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly smallCaps: SystemKeyword<Key, 'small-caps'>;
  /**
   * font-variant 的原生 stacked-fractions 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly stackedFractions: SystemKeyword<Key, 'stacked-fractions'>;
  /**
   * font-variant 的原生 tabular-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly tabularNums: SystemKeyword<Key, 'tabular-nums'>;
  /**
   * font-variant 的原生 titling-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly titlingCaps: SystemKeyword<Key, 'titling-caps'>;
}
export interface FontVariantAlternatesKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontVariantAlternatesValues, 'normal'>, Key> {
  /**
   * font-variant-alternates 的原生 historical-forms 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  readonly historicalForms: SystemKeyword<Key, 'historical-forms'>;
}
export interface FontVariantCapsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontVariantCapsValues, 'normal' | 'unicase'>, Key> {
  /**
   * font-variant-caps 的原生 all-petite-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly allPetiteCaps: SystemKeyword<Key, 'all-petite-caps'>;
  /**
   * font-variant-caps 的原生 all-small-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly allSmallCaps: SystemKeyword<Key, 'all-small-caps'>;
  /**
   * font-variant-caps 的原生 petite-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly petiteCaps: SystemKeyword<Key, 'petite-caps'>;
  /**
   * font-variant-caps 的原生 small-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly smallCaps: SystemKeyword<Key, 'small-caps'>;
  /**
   * font-variant-caps 的原生 titling-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly titlingCaps: SystemKeyword<Key, 'titling-caps'>;
}
export interface FontVariantEastAsianKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.FontVariantEastAsianValues,
        'jis04' | 'jis78' | 'jis83' | 'jis90' | 'normal' | 'ruby' | 'simplified' | 'traditional'
      >,
      Key
    > {
  /**
   * font-variant-east-asian 的原生 full-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly fullWidth: SystemKeyword<Key, 'full-width'>;
  /**
   * font-variant-east-asian 的原生 proportional-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly proportionalWidth: SystemKeyword<Key, 'proportional-width'>;
}
export interface FontVariantEmojiKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.FontVariantEmojiValues, 'emoji' | 'normal' | 'text' | 'unicode'>,
      Key
    > {}
export interface FontVariantLigaturesKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.FontVariantLigaturesValues, 'contextual' | 'none' | 'normal'>,
      Key
    > {
  /**
   * font-variant-ligatures 的原生 common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly commonLigatures: SystemKeyword<Key, 'common-ligatures'>;
  /**
   * font-variant-ligatures 的原生 discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly discretionaryLigatures: SystemKeyword<Key, 'discretionary-ligatures'>;
  /**
   * font-variant-ligatures 的原生 historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly historicalLigatures: SystemKeyword<Key, 'historical-ligatures'>;
  /**
   * font-variant-ligatures 的原生 no-common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly noCommonLigatures: SystemKeyword<Key, 'no-common-ligatures'>;
  /**
   * font-variant-ligatures 的原生 no-contextual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly noContextual: SystemKeyword<Key, 'no-contextual'>;
  /**
   * font-variant-ligatures 的原生 no-discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly noDiscretionaryLigatures: SystemKeyword<Key, 'no-discretionary-ligatures'>;
  /**
   * font-variant-ligatures 的原生 no-historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly noHistoricalLigatures: SystemKeyword<Key, 'no-historical-ligatures'>;
}
export interface FontVariantNumericKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontVariantNumericValues, 'normal' | 'ordinal'>, Key> {
  /**
   * font-variant-numeric 的原生 diagonal-fractions 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly diagonalFractions: SystemKeyword<Key, 'diagonal-fractions'>;
  /**
   * font-variant-numeric 的原生 lining-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly liningNums: SystemKeyword<Key, 'lining-nums'>;
  /**
   * font-variant-numeric 的原生 oldstyle-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly oldstyleNums: SystemKeyword<Key, 'oldstyle-nums'>;
  /**
   * font-variant-numeric 的原生 proportional-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly proportionalNums: SystemKeyword<Key, 'proportional-nums'>;
  /**
   * font-variant-numeric 的原生 slashed-zero 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly slashedZero: SystemKeyword<Key, 'slashed-zero'>;
  /**
   * font-variant-numeric 的原生 stacked-fractions 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly stackedFractions: SystemKeyword<Key, 'stacked-fractions'>;
  /**
   * font-variant-numeric 的原生 tabular-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly tabularNums: SystemKeyword<Key, 'tabular-nums'>;
}
export interface FontVariantPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontVariantPositionValues, 'normal' | 'sub' | 'super'>, Key> {}
export interface FontVariationSettingsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontVariationSettingsValues, 'normal'>, Key> {}
export interface FontWeightKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.FontWeightValues, 'bold' | 'bolder' | 'lighter' | 'normal'>,
      Key
    > {}
export interface FontWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.FontWidthValues, 'condensed' | 'expanded' | 'normal'>, Key> {
  /**
   * font-width 的原生 extra-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly extraCondensed: SystemKeyword<Key, 'extra-condensed'>;
  /**
   * font-width 的原生 extra-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly extraExpanded: SystemKeyword<Key, 'extra-expanded'>;
  /**
   * font-width 的原生 semi-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly semiCondensed: SystemKeyword<Key, 'semi-condensed'>;
  /**
   * font-width 的原生 semi-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly semiExpanded: SystemKeyword<Key, 'semi-expanded'>;
  /**
   * font-width 的原生 ultra-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly ultraCondensed: SystemKeyword<Key, 'ultra-condensed'>;
  /**
   * font-width 的原生 ultra-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly ultraExpanded: SystemKeyword<Key, 'ultra-expanded'>;
}
export interface ForcedColorAdjustKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ForcedColorAdjustValues, 'auto' | 'none'>, Key> {
  /**
   * forced-color-adjust 的原生 preserve-parent-color 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  readonly preserveParentColor: SystemKeyword<Key, 'preserve-parent-color'>;
}
export interface GapKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GapValues, 'normal'>, Key> {}
export interface GlyphOrientationVerticalKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.GlyphOrientationVerticalValues, 'auto'>, Key> {}
export interface GridKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GridValues, 'none'>, Key> {}
export interface GridAreaKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GridAreaValues, 'auto'>, Key> {}
export interface GridAutoColumnsKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GridAutoColumnsValues, 'auto'>, Key> {
  /**
   * grid-auto-columns 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * grid-auto-columns 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface GridAutoFlowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.GridAutoFlowValues, 'column' | 'dense' | 'row'>, Key> {}
export interface GridAutoRowsKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GridAutoRowsValues, 'auto'>, Key> {
  /**
   * grid-auto-rows 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * grid-auto-rows 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface GridColumnKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GridColumnValues, 'auto'>, Key> {}
export interface GridColumnEndKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GridColumnEndValues, 'auto'>, Key> {}
export interface GridColumnGapKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface GridColumnStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.GridColumnStartValues, 'auto'>, Key> {}
export interface GridGapKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface GridRowKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GridRowValues, 'auto'>, Key> {}
export interface GridRowEndKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GridRowEndValues, 'auto'>, Key> {}
export interface GridRowGapKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface GridRowStartKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GridRowStartValues, 'auto'>, Key> {}
export interface GridTemplateKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.GridTemplateValues, 'none'>, Key> {}
export interface GridTemplateAreasKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.GridTemplateAreasValues, 'none'>, Key> {}
export interface GridTemplateColumnsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.GridTemplateColumnsValues, 'auto' | 'none' | 'subgrid'>, Key> {
  /**
   * grid-template-columns 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * grid-template-columns 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface GridTemplateRowsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.GridTemplateRowsValues, 'auto' | 'none' | 'subgrid'>, Key> {
  /**
   * grid-template-rows 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * grid-template-rows 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface HangingPunctuationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.HangingPunctuationValues, 'first' | 'last' | 'none'>, Key> {
  /**
   * hanging-punctuation 的原生 allow-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  readonly allowEnd: SystemKeyword<Key, 'allow-end'>;
  /**
   * hanging-punctuation 的原生 force-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  readonly forceEnd: SystemKeyword<Key, 'force-end'>;
}
export interface HeightKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.HeightValues, 'auto'>, Key> {
  /**
   * height 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * height 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * height 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * height 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  readonly WebkitFitContent: SystemKeyword<Key, '-webkit-fit-content'>;
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface HyphenateCharacterKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.HyphenateCharacterValues, 'auto'>, Key> {}
export interface HyphenateLimitCharsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.HyphenateLimitCharsValues, 'auto'>, Key> {}
export interface HyphensKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.HyphensValues, 'auto' | 'manual' | 'none'>, Key> {}
export interface ImageOrientationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ImageOrientationValues, 'flip'>, Key> {
  /**
   * image-orientation 的原生 from-image 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  readonly fromImage: SystemKeyword<Key, 'from-image'>;
}
export interface ImageRenderingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ImageRenderingValues, 'auto' | 'pixelated' | 'smooth'>, Key> {
  /**
   * image-rendering 的原生 -moz-crisp-edges 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  readonly MozCrispEdges: SystemKeyword<Key, '-moz-crisp-edges'>;
  /**
   * image-rendering 的原生 -webkit-optimize-contrast 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  readonly WebkitOptimizeContrast: SystemKeyword<Key, '-webkit-optimize-contrast'>;
  /**
   * image-rendering 的原生 crisp-edges 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  readonly crispEdges: SystemKeyword<Key, 'crisp-edges'>;
}
export interface ImageResolutionKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * image-resolution 的原生 from-image 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  readonly fromImage: SystemKeyword<Key, 'from-image'>;
}
export interface ImeModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.ImeModeValues, 'active' | 'auto' | 'disabled' | 'inactive' | 'normal'>,
      Key
    > {}
export interface InitialLetterKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.InitialLetterValues, 'normal'>, Key> {}
export interface InitialLetterAlignKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.InitialLetterAlignValues, 'alphabetic' | 'auto' | 'hanging' | 'ideographic'>,
      Key
    > {}
export interface InlineSizeKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.InlineSizeValues, 'auto'>, Key> {
  /**
   * inline-size 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * inline-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * inline-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * inline-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  readonly WebkitFillAvailable: SystemKeyword<Key, '-webkit-fill-available'>;
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface InsetKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.InsetValues, 'auto'>, Key> {}
export interface InsetAreaKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.InsetAreaValues,
        'bottom' | 'center' | 'end' | 'left' | 'none' | 'right' | 'start' | 'top'
      >,
      Key
    > {
  /**
   * inset-area 的原生 block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly blockEnd: SystemKeyword<Key, 'block-end'>;
  /**
   * inset-area 的原生 block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly blockStart: SystemKeyword<Key, 'block-start'>;
  /**
   * inset-area 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly inlineEnd: SystemKeyword<Key, 'inline-end'>;
  /**
   * inset-area 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly inlineStart: SystemKeyword<Key, 'inline-start'>;
  /**
   * inset-area 的原生 self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly selfBlockEnd: SystemKeyword<Key, 'self-block-end'>;
  /**
   * inset-area 的原生 self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly selfBlockStart: SystemKeyword<Key, 'self-block-start'>;
  /**
   * inset-area 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * inset-area 的原生 self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly selfInlineEnd: SystemKeyword<Key, 'self-inline-end'>;
  /**
   * inset-area 的原生 self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly selfInlineStart: SystemKeyword<Key, 'self-inline-start'>;
  /**
   * inset-area 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
  /**
   * inset-area 的原生 span-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanAll: SystemKeyword<Key, 'span-all'>;
  /**
   * inset-area 的原生 span-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanBlockEnd: SystemKeyword<Key, 'span-block-end'>;
  /**
   * inset-area 的原生 span-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanBlockStart: SystemKeyword<Key, 'span-block-start'>;
  /**
   * inset-area 的原生 span-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanBottom: SystemKeyword<Key, 'span-bottom'>;
  /**
   * inset-area 的原生 span-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanEnd: SystemKeyword<Key, 'span-end'>;
  /**
   * inset-area 的原生 span-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanInlineEnd: SystemKeyword<Key, 'span-inline-end'>;
  /**
   * inset-area 的原生 span-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanInlineStart: SystemKeyword<Key, 'span-inline-start'>;
  /**
   * inset-area 的原生 span-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanLeft: SystemKeyword<Key, 'span-left'>;
  /**
   * inset-area 的原生 span-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanRight: SystemKeyword<Key, 'span-right'>;
  /**
   * inset-area 的原生 span-self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanSelfBlockEnd: SystemKeyword<Key, 'span-self-block-end'>;
  /**
   * inset-area 的原生 span-self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanSelfBlockStart: SystemKeyword<Key, 'span-self-block-start'>;
  /**
   * inset-area 的原生 span-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanSelfEnd: SystemKeyword<Key, 'span-self-end'>;
  /**
   * inset-area 的原生 span-self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanSelfInlineEnd: SystemKeyword<Key, 'span-self-inline-end'>;
  /**
   * inset-area 的原生 span-self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanSelfInlineStart: SystemKeyword<Key, 'span-self-inline-start'>;
  /**
   * inset-area 的原生 span-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanSelfStart: SystemKeyword<Key, 'span-self-start'>;
  /**
   * inset-area 的原生 span-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanStart: SystemKeyword<Key, 'span-start'>;
  /**
   * inset-area 的原生 span-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanTop: SystemKeyword<Key, 'span-top'>;
  /**
   * inset-area 的原生 span-x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanXEnd: SystemKeyword<Key, 'span-x-end'>;
  /**
   * inset-area 的原生 span-x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanXSelfEnd: SystemKeyword<Key, 'span-x-self-end'>;
  /**
   * inset-area 的原生 span-x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanXSelfStart: SystemKeyword<Key, 'span-x-self-start'>;
  /**
   * inset-area 的原生 span-x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanXStart: SystemKeyword<Key, 'span-x-start'>;
  /**
   * inset-area 的原生 span-y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanYEnd: SystemKeyword<Key, 'span-y-end'>;
  /**
   * inset-area 的原生 span-y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanYSelfEnd: SystemKeyword<Key, 'span-y-self-end'>;
  /**
   * inset-area 的原生 span-y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanYSelfStart: SystemKeyword<Key, 'span-y-self-start'>;
  /**
   * inset-area 的原生 span-y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly spanYStart: SystemKeyword<Key, 'span-y-start'>;
  /**
   * inset-area 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly xEnd: SystemKeyword<Key, 'x-end'>;
  /**
   * inset-area 的原生 x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly xSelfEnd: SystemKeyword<Key, 'x-self-end'>;
  /**
   * inset-area 的原生 x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly xSelfStart: SystemKeyword<Key, 'x-self-start'>;
  /**
   * inset-area 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly xStart: SystemKeyword<Key, 'x-start'>;
  /**
   * inset-area 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly yEnd: SystemKeyword<Key, 'y-end'>;
  /**
   * inset-area 的原生 y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly ySelfEnd: SystemKeyword<Key, 'y-self-end'>;
  /**
   * inset-area 的原生 y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly ySelfStart: SystemKeyword<Key, 'y-self-start'>;
  /**
   * inset-area 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly yStart: SystemKeyword<Key, 'y-start'>;
}
export interface InsetBlockKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.InsetBlockValues, 'auto'>, Key> {}
export interface InsetBlockEndKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.InsetBlockEndValues, 'auto'>, Key> {}
export interface InsetBlockStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.InsetBlockStartValues, 'auto'>, Key> {}
export interface InsetInlineKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.InsetInlineValues, 'auto'>, Key> {}
export interface InsetInlineEndKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.InsetInlineEndValues, 'auto'>, Key> {}
export interface InsetInlineStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.InsetInlineStartValues, 'auto'>, Key> {}
export interface InterpolateSizeKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * 允许受支持的内部尺寸关键字与长度/百分比之间插值，不保证两个关键字之间可以插值。
   */
  readonly allowKeywords: SystemKeyword<Key, 'allow-keywords'>;
  /**
   * 保持仅数值尺寸之间的插值行为。
   */
  readonly numericOnly: SystemKeyword<Key, 'numeric-only'>;
}
export interface IsolationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.IsolationValues, 'auto' | 'isolate'>, Key> {}
export interface JustifyContentKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.JustifyContentValues,
        'center' | 'end' | 'left' | 'normal' | 'right' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * Flex 内容靠主轴终点排列。
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * Flex 内容靠主轴起点排列；起点受 flex-direction 影响。
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * 每个项目两侧分配相等空间，容器边缘的空间是相邻项目间的一半。
   */
  readonly spaceAround: SystemKeyword<Key, 'space-around'>;
  /**
   * 首尾项目贴两端，剩余空间等分到相邻项目之间。
   *
   * 区别：space-evenly 在两端也保留等量空间；space-around 的边缘空间只有项目之间的一半。
   *
   * 适用场景：工具栏左侧标题和右侧操作分居两端。
   *
   * 只有一个项目时靠起始侧，不会自动居中。
   *
   * @example
   * s.display("flex").justifyContent("space-between").alignItems("center")
   */
  readonly spaceBetween: SystemKeyword<Key, 'space-between'>;
  /**
   * 容器两端和相邻项目之间分配相等空间。
   *
   * 适用场景：希望容器两端和项目之间空隙一致的导航或操作组。
   *
   * @example
   * s.display("flex").justifyContent("space-evenly")
   */
  readonly spaceEvenly: SystemKeyword<Key, 'space-evenly'>;
}
export interface JustifyItemsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.JustifyItemsValues,
        'baseline' | 'center' | 'end' | 'left' | 'legacy' | 'normal' | 'right' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * justify-items 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly anchorCenter: SystemKeyword<Key, 'anchor-center'>;
  /**
   * justify-items 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * justify-items 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * justify-items 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * justify-items 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
}
export interface JustifySelfKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.JustifySelfValues,
        'auto' | 'baseline' | 'center' | 'end' | 'left' | 'normal' | 'right' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * justify-self 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly anchorCenter: SystemKeyword<Key, 'anchor-center'>;
  /**
   * justify-self 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * justify-self 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * justify-self 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * justify-self 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
}
export interface JustifyTracksKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.JustifyTracksValues,
        'center' | 'end' | 'left' | 'normal' | 'right' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * justify-tracks 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * justify-tracks 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * justify-tracks 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly spaceAround: SystemKeyword<Key, 'space-around'>;
  /**
   * justify-tracks 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly spaceBetween: SystemKeyword<Key, 'space-between'>;
  /**
   * justify-tracks 的原生 space-evenly 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly spaceEvenly: SystemKeyword<Key, 'space-evenly'>;
}
export interface KhtmlBoxAlignKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.KhtmlBoxAlignValues, 'baseline' | 'center' | 'end' | 'start' | 'stretch'>,
      Key
    > {}
export interface KhtmlBoxDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.KhtmlBoxDirectionValues, 'normal' | 'reverse'>, Key> {}
export interface KhtmlBoxFlexKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface KhtmlBoxFlexGroupKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface KhtmlBoxLinesKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.KhtmlBoxLinesValues, 'multiple' | 'single'>, Key> {}
export interface KhtmlBoxOrdinalGroupKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface KhtmlBoxOrientKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.KhtmlBoxOrientValues, 'horizontal' | 'vertical'>, Key> {
  /**
   * -khtml-box-orient 的原生 block-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  readonly blockAxis: SystemKeyword<Key, 'block-axis'>;
  /**
   * -khtml-box-orient 的原生 inline-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  readonly inlineAxis: SystemKeyword<Key, 'inline-axis'>;
}
export interface KhtmlBoxPackKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.KhtmlBoxPackValues, 'center' | 'end' | 'justify' | 'start'>,
      Key
    > {}
export interface KhtmlLineBreakKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.KhtmlLineBreakValues, 'anywhere' | 'auto' | 'loose' | 'normal' | 'strict'>,
      Key
    > {}
export interface KhtmlOpacityKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface KhtmlUserSelectKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.KhtmlUserSelectValues, 'all' | 'auto' | 'none' | 'text'>, Key> {
  /**
   * -khtml-user-select 的原生 -moz-none 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-user-select
   */
  readonly MozNone: SystemKeyword<Key, '-moz-none'>;
}
export interface LeftKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.LeftValues, 'auto'>, Key> {}
export interface LetterSpacingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.LetterSpacingValues, 'normal'>, Key> {}
export interface LightingColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.LightingColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface LineBreakKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.LineBreakValues, 'anywhere' | 'auto' | 'loose' | 'normal' | 'strict'>,
      Key
    > {}
export interface LineClampKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.LineClampValues, 'none'>, Key> {}
export interface LineHeightKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.LineHeightValues, 'normal'>, Key> {}
export interface LineHeightStepKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ListStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ListStyleValues, 'inside' | 'none' | 'outside'>, Key> {}
export interface ListStyleImageKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ListStyleImageValues, 'none'>, Key> {}
export interface ListStylePositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ListStylePositionValues, 'inside' | 'outside'>, Key> {}
export interface ListStyleTypeKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ListStyleTypeValues, 'none'>, Key> {}
export interface MarginKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarginValues, 'auto'>, Key> {}
export interface MarginBlockKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarginBlockValues, 'auto'>, Key> {}
export interface MarginBlockEndKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarginBlockEndValues, 'auto'>, Key> {}
export interface MarginBlockStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MarginBlockStartValues, 'auto'>, Key> {}
export interface MarginBottomKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarginBottomValues, 'auto'>, Key> {}
export interface MarginInlineKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarginInlineValues, 'auto'>, Key> {}
export interface MarginInlineEndKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MarginInlineEndValues, 'auto'>, Key> {}
export interface MarginInlineStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MarginInlineStartValues, 'auto'>, Key> {}
export interface MarginLeftKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarginLeftValues, 'auto'>, Key> {}
export interface MarginRightKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarginRightValues, 'auto'>, Key> {}
export interface MarginTopKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarginTopValues, 'auto'>, Key> {}
export interface MarginTrimKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MarginTrimValues, 'all' | 'none'>, Key> {
  /**
   * margin-trim 的原生 in-flow 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  readonly inFlow: SystemKeyword<Key, 'in-flow'>;
}
export interface MarkerKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarkerValues, 'none'>, Key> {}
export interface MarkerEndKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarkerEndValues, 'none'>, Key> {}
export interface MarkerMidKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarkerMidValues, 'none'>, Key> {}
export interface MarkerStartKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MarkerStartValues, 'none'>, Key> {}
export interface MaskKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MaskValues,
        | 'add'
        | 'alpha'
        | 'bottom'
        | 'center'
        | 'exclude'
        | 'intersect'
        | 'left'
        | 'luminance'
        | 'none'
        | 'repeat'
        | 'right'
        | 'round'
        | 'space'
        | 'subtract'
        | 'top'
      >,
      Key
    > {
  /**
   * mask 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * mask 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * mask 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * mask 的原生 margin-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly marginBox: SystemKeyword<Key, 'margin-box'>;
  /**
   * mask 的原生 match-source 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly matchSource: SystemKeyword<Key, 'match-source'>;
  /**
   * mask 的原生 no-clip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly noClip: SystemKeyword<Key, 'no-clip'>;
  /**
   * mask 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly noRepeat: SystemKeyword<Key, 'no-repeat'>;
  /**
   * mask 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * mask 的原生 repeat-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly repeatX: SystemKeyword<Key, 'repeat-x'>;
  /**
   * mask 的原生 repeat-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly repeatY: SystemKeyword<Key, 'repeat-y'>;
  /**
   * mask 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * mask 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface MaskBorderKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MaskBorderValues,
        'alpha' | 'luminance' | 'none' | 'repeat' | 'round' | 'space' | 'stretch'
      >,
      Key
    > {}
export interface MaskBorderModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MaskBorderModeValues, 'alpha' | 'luminance'>, Key> {}
export interface MaskBorderOutsetKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MaskBorderRepeatKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MaskBorderRepeatValues, 'repeat' | 'round' | 'space' | 'stretch'>,
      Key
    > {}
export interface MaskBorderSliceKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MaskBorderSourceKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MaskBorderSourceValues, 'none'>, Key> {}
export interface MaskBorderWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MaskBorderWidthValues, 'auto'>, Key> {}
export interface MaskClipKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * mask-clip 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * mask-clip 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * mask-clip 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * mask-clip 的原生 no-clip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly noClip: SystemKeyword<Key, 'no-clip'>;
  /**
   * mask-clip 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * mask-clip 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * mask-clip 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface MaskCompositeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MaskCompositeValues, 'add' | 'exclude' | 'intersect' | 'subtract'>,
      Key
    > {}
export interface MaskImageKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MaskImageValues, 'none'>, Key> {}
export interface MaskModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MaskModeValues, 'alpha' | 'luminance'>, Key> {
  /**
   * mask-mode 的原生 match-source 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  readonly matchSource: SystemKeyword<Key, 'match-source'>;
}
export interface MaskOriginKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * mask-origin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * mask-origin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * mask-origin 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * mask-origin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * mask-origin 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * mask-origin 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface MaskPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MaskPositionValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface MaskRepeatKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MaskRepeatValues, 'repeat' | 'round' | 'space'>, Key> {
  /**
   * mask-repeat 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly noRepeat: SystemKeyword<Key, 'no-repeat'>;
  /**
   * mask-repeat 的原生 repeat-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly repeatX: SystemKeyword<Key, 'repeat-x'>;
  /**
   * mask-repeat 的原生 repeat-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly repeatY: SystemKeyword<Key, 'repeat-y'>;
}
export interface MaskSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MaskSizeValues, 'auto' | 'contain' | 'cover'>, Key> {}
export interface MaskTypeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MaskTypeValues, 'alpha' | 'luminance'>, Key> {}
export interface MasonryAutoFlowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MasonryAutoFlowValues, 'next' | 'ordered' | 'pack'>, Key> {
  /**
   * masonry-auto-flow 的原生 definite-first 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  readonly definiteFirst: SystemKeyword<Key, 'definite-first'>;
}
export interface MathDepthKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * math-depth 的原生 auto-add 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  readonly autoAdd: SystemKeyword<Key, 'auto-add'>;
}
export interface MathShiftKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MathShiftValues, 'compact' | 'normal'>, Key> {}
export interface MathStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MathStyleValues, 'compact' | 'normal'>, Key> {}
export interface MaxBlockSizeKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MaxBlockSizeValues, 'none'>, Key> {
  /**
   * max-block-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * max-block-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * max-block-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  readonly WebkitFillAvailable: SystemKeyword<Key, '-webkit-fill-available'>;
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸上限。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸上限；这不是把首选尺寸直接设为该值。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 以内容的最小内部尺寸作为尺寸上限；文本按允许的换行机会收缩，但更大的最小尺寸约束仍优先。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface MaxHeightKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MaxHeightValues, 'intrinsic' | 'none'>, Key> {
  /**
   * max-height 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * max-height 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * max-height 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * max-height 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly WebkitFitContent: SystemKeyword<Key, '-webkit-fit-content'>;
  /**
   * max-height 的原生 -webkit-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly WebkitMaxContent: SystemKeyword<Key, '-webkit-max-content'>;
  /**
   * max-height 的原生 -webkit-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly WebkitMinContent: SystemKeyword<Key, '-webkit-min-content'>;
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸上限。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸上限；这不是把首选尺寸直接设为该值。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 以内容的最小内部尺寸作为尺寸上限；文本按允许的换行机会收缩，但更大的最小尺寸约束仍优先。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface MaxInlineSizeKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MaxInlineSizeValues, 'none'>, Key> {
  /**
   * max-inline-size 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * max-inline-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * max-inline-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * max-inline-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  readonly WebkitFillAvailable: SystemKeyword<Key, '-webkit-fill-available'>;
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸上限。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸上限；这不是把首选尺寸直接设为该值。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 以内容的最小内部尺寸作为尺寸上限；文本按允许的换行机会收缩，但更大的最小尺寸约束仍优先。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface MaxLinesKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MaxLinesValues, 'none'>, Key> {}
export interface MaxWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MaxWidthValues, 'intrinsic' | 'none'>, Key> {
  /**
   * max-width 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * max-width 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * max-width 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * max-width 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly WebkitFitContent: SystemKeyword<Key, '-webkit-fit-content'>;
  /**
   * max-width 的原生 -webkit-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly WebkitMaxContent: SystemKeyword<Key, '-webkit-max-content'>;
  /**
   * max-width 的原生 -webkit-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly WebkitMinContent: SystemKeyword<Key, '-webkit-min-content'>;
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸上限。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸上限；这不是把首选尺寸直接设为该值。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 以内容的最小内部尺寸作为尺寸上限；文本按允许的换行机会收缩，但更大的最小尺寸约束仍优先。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface MinBlockSizeKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MinBlockSizeValues, 'auto'>, Key> {
  /**
   * min-block-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * min-block-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * min-block-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  readonly WebkitFillAvailable: SystemKeyword<Key, '-webkit-fill-available'>;
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸下限；不同于带显式参数的 fit-content(...)。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸下限；长文本可能使元素超出容器。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 以内容的最小内部尺寸作为尺寸下限；文字会利用允许的软换行机会。
   *
   * 区别：max-content 以不进行软换行的内部尺寸为下限，可能明显撑大容器。
   *
   * 适用场景：约束最小可读尺寸；需要 Flex 项目突破自动内容下限时通常应考虑明确的 0。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface MinHeightKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MinHeightValues, 'auto' | 'intrinsic'>, Key> {
  /**
   * min-height 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * min-height 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * min-height 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * min-height 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly WebkitFitContent: SystemKeyword<Key, '-webkit-fit-content'>;
  /**
   * min-height 的原生 -webkit-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly WebkitMaxContent: SystemKeyword<Key, '-webkit-max-content'>;
  /**
   * min-height 的原生 -webkit-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly WebkitMinContent: SystemKeyword<Key, '-webkit-min-content'>;
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸下限；不同于带显式参数的 fit-content(...)。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸下限；长文本可能使元素超出容器。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 以内容的最小内部尺寸作为尺寸下限；文字会利用允许的软换行机会。
   *
   * 区别：max-content 以不进行软换行的内部尺寸为下限，可能明显撑大容器。
   *
   * 适用场景：约束最小可读尺寸；需要 Flex 项目突破自动内容下限时通常应考虑明确的 0。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface MinInlineSizeKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MinInlineSizeValues, 'auto'>, Key> {
  /**
   * min-inline-size 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * min-inline-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * min-inline-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * min-inline-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  readonly WebkitFillAvailable: SystemKeyword<Key, '-webkit-fill-available'>;
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸下限；不同于带显式参数的 fit-content(...)。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸下限；长文本可能使元素超出容器。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 以内容的最小内部尺寸作为尺寸下限；文字会利用允许的软换行机会。
   *
   * 区别：max-content 以不进行软换行的内部尺寸为下限，可能明显撑大容器。
   *
   * 适用场景：约束最小可读尺寸；需要 Flex 项目突破自动内容下限时通常应考虑明确的 0。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface MinWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MinWidthValues, 'auto' | 'intrinsic'>, Key> {
  /**
   * min-width 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * min-width 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * min-width 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * min-width 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly WebkitFitContent: SystemKeyword<Key, '-webkit-fit-content'>;
  /**
   * min-width 的原生 -webkit-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly WebkitMaxContent: SystemKeyword<Key, '-webkit-max-content'>;
  /**
   * min-width 的原生 -webkit-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly WebkitMinContent: SystemKeyword<Key, '-webkit-min-content'>;
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸下限；不同于带显式参数的 fit-content(...)。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸下限；长文本可能使元素超出容器。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 以内容的最小内部尺寸作为尺寸下限；文字会利用允许的软换行机会。
   *
   * 区别：max-content 以不进行软换行的内部尺寸为下限，可能明显撑大容器。
   *
   * 适用场景：约束最小可读尺寸；需要 Flex 项目突破自动内容下限时通常应考虑明确的 0。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
  /**
   * min-width 的原生 min-intrinsic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly minIntrinsic: SystemKeyword<Key, 'min-intrinsic'>;
}
export interface MixBlendModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MixBlendModeValues,
        | 'color'
        | 'darken'
        | 'difference'
        | 'exclusion'
        | 'hue'
        | 'lighten'
        | 'luminosity'
        | 'multiply'
        | 'normal'
        | 'overlay'
        | 'saturation'
        | 'screen'
      >,
      Key
    > {
  /**
   * mix-blend-mode 的原生 color-burn 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly colorBurn: SystemKeyword<Key, 'color-burn'>;
  /**
   * mix-blend-mode 的原生 color-dodge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly colorDodge: SystemKeyword<Key, 'color-dodge'>;
  /**
   * mix-blend-mode 的原生 hard-light 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly hardLight: SystemKeyword<Key, 'hard-light'>;
  /**
   * mix-blend-mode 的原生 plus-darker 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly plusDarker: SystemKeyword<Key, 'plus-darker'>;
  /**
   * mix-blend-mode 的原生 plus-lighter 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly plusLighter: SystemKeyword<Key, 'plus-lighter'>;
  /**
   * mix-blend-mode 的原生 soft-light 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly softLight: SystemKeyword<Key, 'soft-light'>;
}
export interface MotionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MotionValues,
        'auto' | 'bottom' | 'center' | 'left' | 'none' | 'normal' | 'right' | 'top'
      >,
      Key
    > {
  /**
   * motion 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * motion 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * motion 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * motion 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * motion 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * motion 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface MotionDistanceKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MotionPathKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MotionPathValues, 'none'>, Key> {
  /**
   * motion-path 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * motion-path 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * motion-path 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * motion-path 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * motion-path 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * motion-path 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface MotionRotationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MotionRotationValues, 'auto' | 'reverse'>, Key> {}
export interface MozAnimationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MozAnimationValues,
        | 'alternate'
        | 'auto'
        | 'backwards'
        | 'both'
        | 'ease'
        | 'forwards'
        | 'infinite'
        | 'linear'
        | 'none'
        | 'normal'
        | 'paused'
        | 'reverse'
        | 'running'
      >,
      Key
    > {
  /**
   * -moz-animation 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly alternateReverse: SystemKeyword<Key, 'alternate-reverse'>;
  /**
   * -moz-animation 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -moz-animation 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -moz-animation 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -moz-animation 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -moz-animation 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface MozAnimationDelayKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MozAnimationDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozAnimationDirectionValues, 'alternate' | 'normal' | 'reverse'>,
      Key
    > {
  /**
   * -moz-animation-direction 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  readonly alternateReverse: SystemKeyword<Key, 'alternate-reverse'>;
}
export interface MozAnimationDurationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozAnimationDurationValues, 'auto'>, Key> {}
export interface MozAnimationFillModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozAnimationFillModeValues, 'backwards' | 'both' | 'forwards' | 'none'>,
      Key
    > {}
export interface MozAnimationIterationCountKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozAnimationIterationCountValues, 'infinite'>, Key> {}
export interface MozAnimationNameKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozAnimationNameValues, 'none'>, Key> {}
export interface MozAnimationPlayStateKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozAnimationPlayStateValues, 'paused' | 'running'>, Key> {}
export interface MozAnimationTimingFunctionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozAnimationTimingFunctionValues, 'ease' | 'linear'>, Key> {
  /**
   * -moz-animation-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -moz-animation-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -moz-animation-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -moz-animation-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -moz-animation-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface MozAppearanceKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MozAppearanceValues,
        | 'button'
        | 'caret'
        | 'checkbox'
        | 'checkmenuitem'
        | 'dualbutton'
        | 'groupbox'
        | 'listbox'
        | 'listitem'
        | 'menuarrow'
        | 'menubar'
        | 'menucheckbox'
        | 'menuimage'
        | 'menuitem'
        | 'menuitemtext'
        | 'menulist'
        | 'menupopup'
        | 'menuradio'
        | 'menuseparator'
        | 'meterbar'
        | 'meterchunk'
        | 'none'
        | 'progressbar'
        | 'progresschunk'
        | 'radio'
        | 'radiomenuitem'
        | 'range'
        | 'resizer'
        | 'resizerpanel'
        | 'scalethumbend'
        | 'scalethumbstart'
        | 'scalethumbtick'
        | 'searchfield'
        | 'separator'
        | 'sheet'
        | 'spinner'
        | 'splitter'
        | 'statusbar'
        | 'statusbarpanel'
        | 'tab'
        | 'tabpanel'
        | 'tabpanels'
        | 'textfield'
        | 'toolbar'
        | 'toolbarbutton'
        | 'toolbargripper'
        | 'toolbox'
        | 'tooltip'
        | 'treeheader'
        | 'treeheadercell'
        | 'treeheadersortarrow'
        | 'treeitem'
        | 'treeline'
        | 'treetwisty'
        | 'treetwistyopen'
        | 'treeview'
      >,
      Key
    > {
  /**
   * -moz-appearance 的原生 -moz-mac-unified-toolbar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozMacUnifiedToolbar: SystemKeyword<Key, '-moz-mac-unified-toolbar'>;
  /**
   * -moz-appearance 的原生 -moz-win-borderless-glass 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWinBorderlessGlass: SystemKeyword<Key, '-moz-win-borderless-glass'>;
  /**
   * -moz-appearance 的原生 -moz-win-browsertabbar-toolbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWinBrowsertabbarToolbox: SystemKeyword<Key, '-moz-win-browsertabbar-toolbox'>;
  /**
   * -moz-appearance 的原生 -moz-win-communications-toolbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWinCommunicationsToolbox: SystemKeyword<Key, '-moz-win-communications-toolbox'>;
  /**
   * -moz-appearance 的原生 -moz-win-communicationstext 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWinCommunicationstext: SystemKeyword<Key, '-moz-win-communicationstext'>;
  /**
   * -moz-appearance 的原生 -moz-win-exclude-glass 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWinExcludeGlass: SystemKeyword<Key, '-moz-win-exclude-glass'>;
  /**
   * -moz-appearance 的原生 -moz-win-glass 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWinGlass: SystemKeyword<Key, '-moz-win-glass'>;
  /**
   * -moz-appearance 的原生 -moz-win-media-toolbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWinMediaToolbox: SystemKeyword<Key, '-moz-win-media-toolbox'>;
  /**
   * -moz-appearance 的原生 -moz-win-mediatext 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWinMediatext: SystemKeyword<Key, '-moz-win-mediatext'>;
  /**
   * -moz-appearance 的原生 -moz-window-button-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowButtonBox: SystemKeyword<Key, '-moz-window-button-box'>;
  /**
   * -moz-appearance 的原生 -moz-window-button-box-maximized 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowButtonBoxMaximized: SystemKeyword<Key, '-moz-window-button-box-maximized'>;
  /**
   * -moz-appearance 的原生 -moz-window-button-close 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowButtonClose: SystemKeyword<Key, '-moz-window-button-close'>;
  /**
   * -moz-appearance 的原生 -moz-window-button-maximize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowButtonMaximize: SystemKeyword<Key, '-moz-window-button-maximize'>;
  /**
   * -moz-appearance 的原生 -moz-window-button-minimize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowButtonMinimize: SystemKeyword<Key, '-moz-window-button-minimize'>;
  /**
   * -moz-appearance 的原生 -moz-window-button-restore 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowButtonRestore: SystemKeyword<Key, '-moz-window-button-restore'>;
  /**
   * -moz-appearance 的原生 -moz-window-frame-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowFrameBottom: SystemKeyword<Key, '-moz-window-frame-bottom'>;
  /**
   * -moz-appearance 的原生 -moz-window-frame-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowFrameLeft: SystemKeyword<Key, '-moz-window-frame-left'>;
  /**
   * -moz-appearance 的原生 -moz-window-frame-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowFrameRight: SystemKeyword<Key, '-moz-window-frame-right'>;
  /**
   * -moz-appearance 的原生 -moz-window-titlebar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowTitlebar: SystemKeyword<Key, '-moz-window-titlebar'>;
  /**
   * -moz-appearance 的原生 -moz-window-titlebar-maximized 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozWindowTitlebarMaximized: SystemKeyword<Key, '-moz-window-titlebar-maximized'>;
  /**
   * -moz-appearance 的原生 button-arrow-down 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly buttonArrowDown: SystemKeyword<Key, 'button-arrow-down'>;
  /**
   * -moz-appearance 的原生 button-arrow-next 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly buttonArrowNext: SystemKeyword<Key, 'button-arrow-next'>;
  /**
   * -moz-appearance 的原生 button-arrow-previous 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly buttonArrowPrevious: SystemKeyword<Key, 'button-arrow-previous'>;
  /**
   * -moz-appearance 的原生 button-arrow-up 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly buttonArrowUp: SystemKeyword<Key, 'button-arrow-up'>;
  /**
   * -moz-appearance 的原生 button-bevel 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly buttonBevel: SystemKeyword<Key, 'button-bevel'>;
  /**
   * -moz-appearance 的原生 button-focus 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly buttonFocus: SystemKeyword<Key, 'button-focus'>;
  /**
   * -moz-appearance 的原生 checkbox-container 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly checkboxContainer: SystemKeyword<Key, 'checkbox-container'>;
  /**
   * -moz-appearance 的原生 checkbox-label 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly checkboxLabel: SystemKeyword<Key, 'checkbox-label'>;
  /**
   * -moz-appearance 的原生 menulist-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menulistButton: SystemKeyword<Key, 'menulist-button'>;
  /**
   * -moz-appearance 的原生 menulist-text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menulistText: SystemKeyword<Key, 'menulist-text'>;
  /**
   * -moz-appearance 的原生 menulist-textfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menulistTextfield: SystemKeyword<Key, 'menulist-textfield'>;
  /**
   * -moz-appearance 的原生 progressbar-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly progressbarVertical: SystemKeyword<Key, 'progressbar-vertical'>;
  /**
   * -moz-appearance 的原生 progresschunk-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly progresschunkVertical: SystemKeyword<Key, 'progresschunk-vertical'>;
  /**
   * -moz-appearance 的原生 radio-container 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly radioContainer: SystemKeyword<Key, 'radio-container'>;
  /**
   * -moz-appearance 的原生 radio-label 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly radioLabel: SystemKeyword<Key, 'radio-label'>;
  /**
   * -moz-appearance 的原生 range-thumb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly rangeThumb: SystemKeyword<Key, 'range-thumb'>;
  /**
   * -moz-appearance 的原生 scale-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scaleHorizontal: SystemKeyword<Key, 'scale-horizontal'>;
  /**
   * -moz-appearance 的原生 scale-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scaleVertical: SystemKeyword<Key, 'scale-vertical'>;
  /**
   * -moz-appearance 的原生 scalethumb-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scalethumbHorizontal: SystemKeyword<Key, 'scalethumb-horizontal'>;
  /**
   * -moz-appearance 的原生 scalethumb-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scalethumbVertical: SystemKeyword<Key, 'scalethumb-vertical'>;
  /**
   * -moz-appearance 的原生 scrollbarbutton-down 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scrollbarbuttonDown: SystemKeyword<Key, 'scrollbarbutton-down'>;
  /**
   * -moz-appearance 的原生 scrollbarbutton-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scrollbarbuttonLeft: SystemKeyword<Key, 'scrollbarbutton-left'>;
  /**
   * -moz-appearance 的原生 scrollbarbutton-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scrollbarbuttonRight: SystemKeyword<Key, 'scrollbarbutton-right'>;
  /**
   * -moz-appearance 的原生 scrollbarbutton-up 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scrollbarbuttonUp: SystemKeyword<Key, 'scrollbarbutton-up'>;
  /**
   * -moz-appearance 的原生 scrollbarthumb-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scrollbarthumbHorizontal: SystemKeyword<Key, 'scrollbarthumb-horizontal'>;
  /**
   * -moz-appearance 的原生 scrollbarthumb-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scrollbarthumbVertical: SystemKeyword<Key, 'scrollbarthumb-vertical'>;
  /**
   * -moz-appearance 的原生 scrollbartrack-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scrollbartrackHorizontal: SystemKeyword<Key, 'scrollbartrack-horizontal'>;
  /**
   * -moz-appearance 的原生 scrollbartrack-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scrollbartrackVertical: SystemKeyword<Key, 'scrollbartrack-vertical'>;
  /**
   * -moz-appearance 的原生 spinner-downbutton 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly spinnerDownbutton: SystemKeyword<Key, 'spinner-downbutton'>;
  /**
   * -moz-appearance 的原生 spinner-textfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly spinnerTextfield: SystemKeyword<Key, 'spinner-textfield'>;
  /**
   * -moz-appearance 的原生 spinner-upbutton 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly spinnerUpbutton: SystemKeyword<Key, 'spinner-upbutton'>;
  /**
   * -moz-appearance 的原生 tab-scroll-arrow-back 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly tabScrollArrowBack: SystemKeyword<Key, 'tab-scroll-arrow-back'>;
  /**
   * -moz-appearance 的原生 tab-scroll-arrow-forward 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly tabScrollArrowForward: SystemKeyword<Key, 'tab-scroll-arrow-forward'>;
  /**
   * -moz-appearance 的原生 textfield-multiline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly textfieldMultiline: SystemKeyword<Key, 'textfield-multiline'>;
  /**
   * -moz-appearance 的原生 toolbarbutton-dropdown 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly toolbarbuttonDropdown: SystemKeyword<Key, 'toolbarbutton-dropdown'>;
}
export interface MozBackfaceVisibilityKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozBackfaceVisibilityValues, 'hidden' | 'visible'>, Key> {}
export interface MozBackgroundClipKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozBackgroundClipValues, 'text'>, Key> {
  /**
   * -moz-background-clip 的原生 border-area 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  readonly borderArea: SystemKeyword<Key, 'border-area'>;
  /**
   * -moz-background-clip 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * -moz-background-clip 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * -moz-background-clip 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
}
export interface MozBackgroundOriginKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {
  /**
   * -moz-background-origin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * -moz-background-origin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * -moz-background-origin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
}
export interface MozBackgroundSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozBackgroundSizeValues, 'auto' | 'contain' | 'cover'>, Key> {}
export interface MozBindingKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MozBindingValues, 'none'>, Key> {}
export interface MozBorderBottomColorsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozBorderBottomColorsValues, 'currentColor' | 'none' | 'transparent'>,
      Key
    > {}
export interface MozBorderEndColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.MozBorderEndColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface MozBorderEndStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MozBorderEndStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface MozBorderEndWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozBorderEndWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface MozBorderImageKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozBorderImageValues, 'none' | 'repeat' | 'round' | 'space' | 'stretch'>,
      Key
    > {}
export interface MozBorderLeftColorsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozBorderLeftColorsValues, 'currentColor' | 'none' | 'transparent'>,
      Key
    > {}
export interface MozBorderRadiusKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MozBorderRadiusBottomleftKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozBorderRadiusBottomrightKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozBorderRadiusTopleftKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozBorderRadiusToprightKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozBorderRightColorsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozBorderRightColorsValues, 'currentColor' | 'none' | 'transparent'>,
      Key
    > {}
export interface MozBorderStartColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozBorderStartColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MozBorderStartStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MozBorderStartStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface MozBorderTopColorsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozBorderTopColorsValues, 'currentColor' | 'none' | 'transparent'>,
      Key
    > {}
export interface MozBoxAlignKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozBoxAlignValues, 'baseline' | 'center' | 'end' | 'start' | 'stretch'>,
      Key
    > {}
export interface MozBoxDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozBoxDirectionValues, 'normal' | 'reverse'>, Key> {}
export interface MozBoxFlexKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MozBoxOrdinalGroupKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozBoxOrientKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozBoxOrientValues, 'horizontal' | 'vertical'>, Key> {
  /**
   * -moz-box-orient 的原生 block-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  readonly blockAxis: SystemKeyword<Key, 'block-axis'>;
  /**
   * -moz-box-orient 的原生 inline-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  readonly inlineAxis: SystemKeyword<Key, 'inline-axis'>;
}
export interface MozBoxPackKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozBoxPackValues, 'center' | 'end' | 'justify' | 'start'>, Key> {}
export interface MozBoxShadowKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MozBoxShadowValues, 'none'>, Key> {}
export interface MozBoxSizingKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * 指定尺寸包含内容、内边距和边框，但不包含外边距。
   *
   * 区别：content-box 在声明宽高之外再加内边距和边框。
   *
   * 适用场景：希望组件的指定宽高包含内边距和边框时。
   *
   * 仍不包含 margin；最小/最大尺寸和布局约束仍参与计算。
   *
   * @example
   * s.boxSizing("border-box").width("20rem").padding("1rem")
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * 指定尺寸仅计算内容盒，内边距和边框额外增加外部尺寸。
   *
   * 适用场景：希望明确指定纯内容区尺寸时。
   *
   * @example
   * s.boxSizing("content-box").width("100px").padding("10px")
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
}
export interface MozColumnCountKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MozColumnCountValues, 'auto'>, Key> {}
export interface MozColumnFillKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozColumnFillValues, 'auto' | 'balance'>, Key> {}
export interface MozColumnRuleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MozColumnRuleValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface MozColumnRuleColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.MozColumnRuleColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface MozColumnRuleStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MozColumnRuleStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface MozColumnRuleWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozColumnRuleWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface MozColumnsKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MozColumnsValues, 'auto'>, Key> {}
export interface MozColumnWidthKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MozColumnWidthValues, 'auto'>, Key> {}
export interface MozContextPropertiesKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozContextPropertiesValues, 'fill' | 'none' | 'stroke'>, Key> {
  /**
   * -moz-context-properties 的原生 fill-opacity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  readonly fillOpacity: SystemKeyword<Key, 'fill-opacity'>;
  /**
   * -moz-context-properties 的原生 stroke-opacity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  readonly strokeOpacity: SystemKeyword<Key, 'stroke-opacity'>;
}
export interface MozFloatEdgeKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * -moz-float-edge 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * -moz-float-edge 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * -moz-float-edge 的原生 margin-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  readonly marginBox: SystemKeyword<Key, 'margin-box'>;
  /**
   * -moz-float-edge 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
}
export interface MozFontFeatureSettingsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozFontFeatureSettingsValues, 'normal'>, Key> {}
export interface MozFontLanguageOverrideKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozFontLanguageOverrideValues, 'normal'>, Key> {}
export interface MozForceBrokenImageIconKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozHyphensKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozHyphensValues, 'auto' | 'manual' | 'none'>, Key> {}
export interface MozMarginEndKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MozMarginEndValues, 'auto'>, Key> {}
export interface MozMarginStartKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MozMarginStartValues, 'auto'>, Key> {}
export interface MozOpacityKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MozOrientKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozOrientValues, 'block' | 'horizontal' | 'inline' | 'vertical'>,
      Key
    > {}
export interface MozOsxFontSmoothingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MozOsxFontSmoothingValues,
        'always' | 'auto' | 'large' | 'medium' | 'never' | 'small'
      >,
      Key
    > {
  /**
   * -moz-osx-font-smoothing 的原生 x-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly xLarge: SystemKeyword<Key, 'x-large'>;
  /**
   * -moz-osx-font-smoothing 的原生 x-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly xSmall: SystemKeyword<Key, 'x-small'>;
  /**
   * -moz-osx-font-smoothing 的原生 xx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly xxLarge: SystemKeyword<Key, 'xx-large'>;
  /**
   * -moz-osx-font-smoothing 的原生 xx-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly xxSmall: SystemKeyword<Key, 'xx-small'>;
  /**
   * -moz-osx-font-smoothing 的原生 xxx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly xxxLarge: SystemKeyword<Key, 'xxx-large'>;
}
export interface MozOutlineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MozOutlineValues,
        | 'auto'
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface MozOutlineColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozOutlineColorValues, 'auto' | 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MozOutlineRadiusKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MozOutlineRadiusBottomleftKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozOutlineRadiusBottomrightKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozOutlineRadiusTopleftKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozOutlineRadiusToprightKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozOutlineStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MozOutlineStyleValues,
        | 'auto'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface MozOutlineWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozOutlineWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface MozPaddingEndKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MozPaddingStartKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MozPerspectiveKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MozPerspectiveValues, 'none'>, Key> {}
export interface MozPerspectiveOriginKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozPerspectiveOriginValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface MozStackSizingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozStackSizingValues, 'ignore'>, Key> {
  /**
   * -moz-stack-sizing 的原生 stretch-to-fit 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  readonly stretchToFit: SystemKeyword<Key, 'stretch-to-fit'>;
}
export interface MozTabSizeKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MozTextAlignLastKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.MozTextAlignLastValues,
        'auto' | 'center' | 'end' | 'justify' | 'left' | 'right' | 'start'
      >,
      Key
    > {}
export interface MozTextBlinkKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozTextBlinkValues, 'blink' | 'none'>, Key> {}
export interface MozTextDecorationColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozTextDecorationColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MozTextDecorationLineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozTextDecorationLineValues, 'blink' | 'none' | 'overline' | 'underline'>,
      Key
    > {
  /**
   * -moz-text-decoration-line 的原生 grammar-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  readonly grammarError: SystemKeyword<Key, 'grammar-error'>;
  /**
   * -moz-text-decoration-line 的原生 line-through 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  readonly lineThrough: SystemKeyword<Key, 'line-through'>;
  /**
   * -moz-text-decoration-line 的原生 spelling-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  readonly spellingError: SystemKeyword<Key, 'spelling-error'>;
}
export interface MozTextDecorationStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozTextDecorationStyleValues, 'dashed' | 'dotted' | 'double' | 'solid' | 'wavy'>,
      Key
    > {}
export interface MozTextSizeAdjustKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozTextSizeAdjustValues, 'auto' | 'none'>, Key> {}
export interface MozTransformKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MozTransformValues, 'none'>, Key> {}
export interface MozTransformOriginKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozTransformOriginValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface MozTransformStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozTransformStyleValues, 'flat'>, Key> {
  /**
   * 让子元素继续处于三维空间，适合多层三维场景。
   *
   * 区别：flat 会将后代展平到当前元素的平面；preserve-3d 本身不提供透视效果。
   *
   * 该属性不继承，需要在参与三维层级的中间元素上设置；opacity 小于 1、非 none 的 filter 等分组效果仍可能强制展平。
   *
   * @example
   * s.transformStyle("preserve-3d")
   */
  readonly preserve3d: SystemKeyword<Key, 'preserve-3d'>;
}
export interface MozTransitionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozTransitionValues, 'all' | 'ease' | 'linear' | 'none' | 'normal'>,
      Key
    > {
  /**
   * -moz-transition 的原生 allow-discrete 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly allowDiscrete: SystemKeyword<Key, 'allow-discrete'>;
  /**
   * -moz-transition 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -moz-transition 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -moz-transition 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -moz-transition 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -moz-transition 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface MozTransitionDelayKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozTransitionDurationKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MozTransitionPropertyKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozTransitionPropertyValues, 'all' | 'none'>, Key> {}
export interface MozTransitionTimingFunctionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozTransitionTimingFunctionValues, 'ease' | 'linear'>, Key> {
  /**
   * -moz-transition-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -moz-transition-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -moz-transition-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -moz-transition-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -moz-transition-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface MozUserFocusKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozUserFocusValues, 'ignore' | 'none' | 'normal'>, Key> {
  /**
   * -moz-user-focus 的原生 select-after 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly selectAfter: SystemKeyword<Key, 'select-after'>;
  /**
   * -moz-user-focus 的原生 select-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly selectAll: SystemKeyword<Key, 'select-all'>;
  /**
   * -moz-user-focus 的原生 select-before 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly selectBefore: SystemKeyword<Key, 'select-before'>;
  /**
   * -moz-user-focus 的原生 select-menu 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly selectMenu: SystemKeyword<Key, 'select-menu'>;
  /**
   * -moz-user-focus 的原生 select-same 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly selectSame: SystemKeyword<Key, 'select-same'>;
}
export interface MozUserInputKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozUserInputValues, 'auto' | 'disabled' | 'enabled' | 'none'>,
      Key
    > {}
export interface MozUserModifyKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * -moz-user-modify 的原生 read-only 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  readonly readOnly: SystemKeyword<Key, 'read-only'>;
  /**
   * -moz-user-modify 的原生 read-write 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  readonly readWrite: SystemKeyword<Key, 'read-write'>;
  /**
   * -moz-user-modify 的原生 write-only 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  readonly writeOnly: SystemKeyword<Key, 'write-only'>;
}
export interface MozUserSelectKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozUserSelectValues, 'all' | 'auto' | 'none' | 'text'>, Key> {
  /**
   * -moz-user-select 的原生 -moz-none 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-select
   */
  readonly MozNone: SystemKeyword<Key, '-moz-none'>;
}
export interface MozWindowDraggingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MozWindowDraggingValues, 'drag'>, Key> {
  /**
   * -moz-window-dragging 的原生 no-drag 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  readonly noDrag: SystemKeyword<Key, 'no-drag'>;
}
export interface MozWindowShadowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MozWindowShadowValues, 'default' | 'menu' | 'none' | 'sheet' | 'tooltip'>,
      Key
    > {}
export interface MsAcceleratorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsAcceleratorValues, 'false' | 'true'>, Key> {}
export interface MsBlockProgressionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsBlockProgressionValues, 'bt' | 'lr' | 'rl' | 'tb'>, Key> {}
export interface MsContentZoomChainingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsContentZoomChainingValues, 'chained' | 'none'>, Key> {}
export interface MsContentZoomingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsContentZoomingValues, 'none' | 'zoom'>, Key> {}
export interface MsContentZoomLimitKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MsContentZoomLimitMaxKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MsContentZoomLimitMinKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MsContentZoomSnapKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsContentZoomSnapValues, 'mandatory' | 'none' | 'proximity'>,
      Key
    > {}
export interface MsContentZoomSnapPointsKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MsContentZoomSnapTypeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsContentZoomSnapTypeValues, 'mandatory' | 'none' | 'proximity'>,
      Key
    > {}
export interface MsFilterKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MsFlexKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsFlexValues, 'auto' | 'content' | 'none'>, Key> {
  /**
   * -ms-flex 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * -ms-flex 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * -ms-flex 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface MsFlexDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsFlexDirectionValues, 'column' | 'row'>, Key> {
  /**
   * 反转块方向的视觉排列，不改变 DOM 顺序。
   */
  readonly columnReverse: SystemKeyword<Key, 'column-reverse'>;
  /**
   * 反转行内方向的视觉排列，不改变 DOM 顺序。
   */
  readonly rowReverse: SystemKeyword<Key, 'row-reverse'>;
}
export interface MsFlexPositiveKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MsFlowFromKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MsFlowFromValues, 'none'>, Key> {}
export interface MsFlowIntoKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MsFlowIntoValues, 'none'>, Key> {}
export interface MsGridColumnsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsGridColumnsValues, 'auto' | 'none'>, Key> {
  /**
   * -ms-grid-columns 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * -ms-grid-columns 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface MsGridRowsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsGridRowsValues, 'auto' | 'none'>, Key> {
  /**
   * -ms-grid-rows 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * -ms-grid-rows 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface MsHighContrastAdjustKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsHighContrastAdjustValues, 'auto' | 'none'>, Key> {}
export interface MsHyphenateLimitCharsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsHyphenateLimitCharsValues, 'auto'>, Key> {}
export interface MsHyphenateLimitLinesKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {
  /**
   * -ms-hyphenate-limit-lines 的原生 no-limit 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-lines
   */
  readonly noLimit: SystemKeyword<Key, 'no-limit'>;
}
export interface MsHyphenateLimitZoneKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MsHyphensKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsHyphensValues, 'auto' | 'manual' | 'none'>, Key> {}
export interface MsImeAlignKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsImeAlignValues, 'after' | 'auto'>, Key> {}
export interface MsImeModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsImeModeValues, 'active' | 'auto' | 'disabled' | 'inactive' | 'normal'>,
      Key
    > {}
export interface MsLineBreakKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsLineBreakValues, 'anywhere' | 'auto' | 'loose' | 'normal' | 'strict'>,
      Key
    > {}
export interface MsOrderKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MsOverflowStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsOverflowStyleValues, 'auto' | 'none' | 'scrollbar'>, Key> {
  /**
   * -ms-overflow-style 的原生 -ms-autohiding-scrollbar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  readonly MsAutohidingScrollbar: SystemKeyword<Key, '-ms-autohiding-scrollbar'>;
}
export interface MsOverflowXKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsOverflowXValues, 'auto' | 'clip' | 'hidden' | 'overlay' | 'scroll' | 'visible'>,
      Key
    > {
  /**
   * -ms-overflow-x 的原生 -moz-hidden-unscrollable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-x
   */
  readonly MozHiddenUnscrollable: SystemKeyword<Key, '-moz-hidden-unscrollable'>;
}
export interface MsOverflowYKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsOverflowYValues, 'auto' | 'clip' | 'hidden' | 'overlay' | 'scroll' | 'visible'>,
      Key
    > {
  /**
   * -ms-overflow-y 的原生 -moz-hidden-unscrollable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-y
   */
  readonly MozHiddenUnscrollable: SystemKeyword<Key, '-moz-hidden-unscrollable'>;
}
export interface MsScrollbar3dlightColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsScrollbar3dlightColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MsScrollbarArrowColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsScrollbarArrowColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MsScrollbarBaseColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsScrollbarBaseColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MsScrollbarDarkshadowColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsScrollbarDarkshadowColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MsScrollbarFaceColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsScrollbarFaceColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MsScrollbarHighlightColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsScrollbarHighlightColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MsScrollbarShadowColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsScrollbarShadowColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MsScrollbarTrackColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsScrollbarTrackColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface MsScrollChainingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsScrollChainingValues, 'chained' | 'none'>, Key> {}
export interface MsScrollLimitKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MsScrollLimitXMaxKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsScrollLimitXMaxValues, 'auto'>, Key> {}
export interface MsScrollLimitXMinKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MsScrollLimitYMaxKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsScrollLimitYMaxValues, 'auto'>, Key> {}
export interface MsScrollLimitYMinKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MsScrollRailsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsScrollRailsValues, 'none' | 'railed'>, Key> {}
export interface MsScrollSnapPointsXKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MsScrollSnapPointsYKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MsScrollSnapTypeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsScrollSnapTypeValues, 'mandatory' | 'none' | 'proximity'>,
      Key
    > {}
export interface MsScrollSnapXKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MsScrollSnapYKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MsScrollTranslationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsScrollTranslationValues, 'none'>, Key> {
  /**
   * -ms-scroll-translation 的原生 vertical-to-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-translation
   */
  readonly verticalToHorizontal: SystemKeyword<Key, 'vertical-to-horizontal'>;
}
export interface MsTextAutospaceKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MsTextAutospaceValues, 'none'>, Key> {
  /**
   * -ms-text-autospace 的原生 ideograph-alpha 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  readonly ideographAlpha: SystemKeyword<Key, 'ideograph-alpha'>;
  /**
   * -ms-text-autospace 的原生 ideograph-numeric 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  readonly ideographNumeric: SystemKeyword<Key, 'ideograph-numeric'>;
  /**
   * -ms-text-autospace 的原生 ideograph-parenthesis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  readonly ideographParenthesis: SystemKeyword<Key, 'ideograph-parenthesis'>;
  /**
   * -ms-text-autospace 的原生 ideograph-space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  readonly ideographSpace: SystemKeyword<Key, 'ideograph-space'>;
}
export interface MsTextCombineHorizontalKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsTextCombineHorizontalValues, 'all' | 'digits' | 'none'>, Key> {}
export interface MsTextOverflowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsTextOverflowValues, 'clip' | 'ellipsis'>, Key> {}
export interface MsTouchActionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsTouchActionValues, 'auto' | 'manipulation' | 'none'>, Key> {
  /**
   * -ms-touch-action 的原生 -ms-manipulation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly MsManipulation: SystemKeyword<Key, '-ms-manipulation'>;
  /**
   * -ms-touch-action 的原生 -ms-none 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly MsNone: SystemKeyword<Key, '-ms-none'>;
  /**
   * -ms-touch-action 的原生 -ms-pan-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly MsPanX: SystemKeyword<Key, '-ms-pan-x'>;
  /**
   * -ms-touch-action 的原生 -ms-pan-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly MsPanY: SystemKeyword<Key, '-ms-pan-y'>;
  /**
   * -ms-touch-action 的原生 -ms-pinch-zoom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly MsPinchZoom: SystemKeyword<Key, '-ms-pinch-zoom'>;
  /**
   * 允许以向下滚动开始的单指平移，即手指最初向上移动；开始后仍可反向滚动。
   */
  readonly panDown: SystemKeyword<Key, 'pan-down'>;
  /**
   * 允许以向左滚动开始的单指平移，手指起始移动方向相反；开始后仍可反向滚动。
   */
  readonly panLeft: SystemKeyword<Key, 'pan-left'>;
  /**
   * 允许以向右滚动开始的单指平移，手指起始移动方向相反；开始后仍可反向滚动。
   */
  readonly panRight: SystemKeyword<Key, 'pan-right'>;
  /**
   * 允许以向上滚动开始的单指平移，即手指最初向下移动；开始后仍可反向滚动。
   */
  readonly panUp: SystemKeyword<Key, 'pan-up'>;
  /**
   * 允许浏览器处理水平单指平移。
   */
  readonly panX: SystemKeyword<Key, 'pan-x'>;
  /**
   * 允许浏览器处理垂直单指平移。
   */
  readonly panY: SystemKeyword<Key, 'pan-y'>;
  /**
   * 允许浏览器处理多指缩放和平移，可与 pan-x、pan-y 等单指方向规则组合。
   */
  readonly pinchZoom: SystemKeyword<Key, 'pinch-zoom'>;
}
export interface MsTouchSelectKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsTouchSelectValues, 'grippers' | 'none'>, Key> {}
export interface MsTransformKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MsTransformValues, 'none'>, Key> {}
export interface MsTransformOriginKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsTransformOriginValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface MsTransitionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsTransitionValues, 'all' | 'ease' | 'linear' | 'none' | 'normal'>,
      Key
    > {
  /**
   * -ms-transition 的原生 allow-discrete 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly allowDiscrete: SystemKeyword<Key, 'allow-discrete'>;
  /**
   * -ms-transition 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -ms-transition 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -ms-transition 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -ms-transition 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -ms-transition 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface MsTransitionDelayKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MsTransitionDurationKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface MsTransitionPropertyKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsTransitionPropertyValues, 'all' | 'none'>, Key> {}
export interface MsTransitionTimingFunctionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsTransitionTimingFunctionValues, 'ease' | 'linear'>, Key> {
  /**
   * -ms-transition-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -ms-transition-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -ms-transition-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -ms-transition-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -ms-transition-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface MsUserSelectKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsUserSelectValues, 'element' | 'none' | 'text'>, Key> {}
export interface MsWordBreakKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.MsWordBreakValues, 'normal'>, Key> {
  /**
   * -ms-word-break 的原生 auto-phrase 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-word-break
   */
  readonly autoPhrase: SystemKeyword<Key, 'auto-phrase'>;
  /**
   * 允许在更多字符间断行以防溢出，可能拆开普通单词。
   */
  readonly breakAll: SystemKeyword<Key, 'break-all'>;
  /**
   * -ms-word-break 的原生 break-word 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-word-break
   */
  readonly breakWord: SystemKeyword<Key, 'break-word'>;
  /**
   * 限制中日韩文字内部断行，其他文字仍按正常规则处理。
   */
  readonly keepAll: SystemKeyword<Key, 'keep-all'>;
}
export interface MsWrapFlowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.MsWrapFlowValues, 'auto' | 'both' | 'clear' | 'end' | 'maximum' | 'start'>,
      Key
    > {}
export interface MsWrapMarginKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface MsWrapThroughKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.MsWrapThroughValues, 'none' | 'wrap'>, Key> {}
export interface MsWritingModeKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * -ms-writing-mode 的原生 horizontal-tb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly horizontalTb: SystemKeyword<Key, 'horizontal-tb'>;
  /**
   * -ms-writing-mode 的原生 sideways-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly sidewaysLr: SystemKeyword<Key, 'sideways-lr'>;
  /**
   * -ms-writing-mode 的原生 sideways-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly sidewaysRl: SystemKeyword<Key, 'sideways-rl'>;
  /**
   * -ms-writing-mode 的原生 vertical-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly verticalLr: SystemKeyword<Key, 'vertical-lr'>;
  /**
   * -ms-writing-mode 的原生 vertical-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly verticalRl: SystemKeyword<Key, 'vertical-rl'>;
}
export interface OAnimationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.OAnimationValues,
        | 'alternate'
        | 'auto'
        | 'backwards'
        | 'both'
        | 'ease'
        | 'forwards'
        | 'infinite'
        | 'linear'
        | 'none'
        | 'normal'
        | 'paused'
        | 'reverse'
        | 'running'
      >,
      Key
    > {
  /**
   * -o-animation 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly alternateReverse: SystemKeyword<Key, 'alternate-reverse'>;
  /**
   * -o-animation 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -o-animation 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -o-animation 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -o-animation 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -o-animation 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface OAnimationDelayKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface OAnimationDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OAnimationDirectionValues, 'alternate' | 'normal' | 'reverse'>,
      Key
    > {
  /**
   * -o-animation-direction 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-direction
   */
  readonly alternateReverse: SystemKeyword<Key, 'alternate-reverse'>;
}
export interface OAnimationDurationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OAnimationDurationValues, 'auto'>, Key> {}
export interface OAnimationFillModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OAnimationFillModeValues, 'backwards' | 'both' | 'forwards' | 'none'>,
      Key
    > {}
export interface OAnimationIterationCountKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OAnimationIterationCountValues, 'infinite'>, Key> {}
export interface OAnimationNameKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.OAnimationNameValues, 'none'>, Key> {}
export interface OAnimationPlayStateKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OAnimationPlayStateValues, 'paused' | 'running'>, Key> {}
export interface OAnimationTimingFunctionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OAnimationTimingFunctionValues, 'ease' | 'linear'>, Key> {
  /**
   * -o-animation-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -o-animation-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -o-animation-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -o-animation-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -o-animation-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface OBackgroundSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OBackgroundSizeValues, 'auto' | 'contain' | 'cover'>, Key> {}
export interface ObjectFitKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ObjectFitValues, 'contain' | 'cover' | 'fill' | 'none'>, Key> {
  /**
   * 在 none 和 contain 中选择得到较小内容尺寸的方案。
   */
  readonly scaleDown: SystemKeyword<Key, 'scale-down'>;
}
export interface ObjectPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.ObjectPositionValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface ObjectViewBoxKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ObjectViewBoxValues, 'none'>, Key> {}
export interface OBorderImageKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OBorderImageValues, 'none' | 'repeat' | 'round' | 'space' | 'stretch'>,
      Key
    > {}
export interface OffsetKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.OffsetValues,
        'auto' | 'bottom' | 'center' | 'left' | 'none' | 'normal' | 'right' | 'top'
      >,
      Key
    > {
  /**
   * offset 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * offset 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * offset 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * offset 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * offset 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * offset 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface OffsetAnchorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OffsetAnchorValues, 'auto' | 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface OffsetBlockKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.OffsetBlockValues, 'auto'>, Key> {}
export interface OffsetBlockEndKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.OffsetBlockEndValues, 'auto'>, Key> {}
export interface OffsetBlockStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OffsetBlockStartValues, 'auto'>, Key> {}
export interface OffsetDistanceKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface OffsetInlineKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.OffsetInlineValues, 'auto'>, Key> {}
export interface OffsetInlineEndKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OffsetInlineEndValues, 'auto'>, Key> {}
export interface OffsetInlineStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OffsetInlineStartValues, 'auto'>, Key> {}
export interface OffsetPathKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.OffsetPathValues, 'none'>, Key> {
  /**
   * offset-path 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * offset-path 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * offset-path 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * offset-path 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * offset-path 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * offset-path 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface OffsetPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.OffsetPositionValues,
        'auto' | 'bottom' | 'center' | 'left' | 'normal' | 'right' | 'top'
      >,
      Key
    > {}
export interface OffsetRotateKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OffsetRotateValues, 'auto' | 'reverse'>, Key> {}
export interface OffsetRotationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OffsetRotationValues, 'auto' | 'reverse'>, Key> {}
export interface OObjectFitKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OObjectFitValues, 'contain' | 'cover' | 'fill' | 'none'>, Key> {
  /**
   * 在 none 和 contain 中选择得到较小内容尺寸的方案。
   */
  readonly scaleDown: SystemKeyword<Key, 'scale-down'>;
}
export interface OObjectPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OObjectPositionValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface OpacityKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface OrderKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface OrphansKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface OTabSizeKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface OTextOverflowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OTextOverflowValues, 'clip' | 'ellipsis'>, Key> {}
export interface OTransformKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.OTransformValues, 'none'>, Key> {}
export interface OTransformOriginKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OTransformOriginValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface OTransitionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OTransitionValues, 'all' | 'ease' | 'linear' | 'none' | 'normal'>,
      Key
    > {
  /**
   * -o-transition 的原生 allow-discrete 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly allowDiscrete: SystemKeyword<Key, 'allow-discrete'>;
  /**
   * -o-transition 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -o-transition 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -o-transition 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -o-transition 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -o-transition 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface OTransitionDelayKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface OTransitionDurationKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface OTransitionPropertyKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OTransitionPropertyValues, 'all' | 'none'>, Key> {}
export interface OTransitionTimingFunctionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OTransitionTimingFunctionValues, 'ease' | 'linear'>, Key> {
  /**
   * -o-transition-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -o-transition-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -o-transition-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -o-transition-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -o-transition-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface OutlineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.OutlineValues,
        | 'auto'
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface OutlineColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OutlineColorValues, 'auto' | 'currentColor' | 'transparent'>,
      Key
    > {}
export interface OutlineOffsetKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface OutlineStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.OutlineStyleValues,
        | 'auto'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface OutlineWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OutlineWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface OverflowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OverflowValues, 'auto' | 'clip' | 'hidden' | 'overlay' | 'scroll' | 'visible'>,
      Key
    > {
  /**
   * overflow 的原生 -moz-hidden-unscrollable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  readonly MozHiddenUnscrollable: SystemKeyword<Key, '-moz-hidden-unscrollable'>;
}
export interface OverflowAnchorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OverflowAnchorValues, 'auto' | 'none'>, Key> {}
export interface OverflowBlockKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OverflowBlockValues, 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible'>,
      Key
    > {}
export interface OverflowClipBoxKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * overflow-clip-box 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * overflow-clip-box 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
}
export interface OverflowClipMarginKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * overflow-clip-margin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * overflow-clip-margin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * overflow-clip-margin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
}
export interface OverflowInlineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OverflowInlineValues, 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible'>,
      Key
    > {}
export interface OverflowWrapKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OverflowWrapValues, 'anywhere' | 'normal'>, Key> {
  /**
   * 必要时允许长文本断行，但新增断点不按 anywhere 的方式参与 min-content 计算。
   */
  readonly breakWord: SystemKeyword<Key, 'break-word'>;
}
export interface OverflowXKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OverflowXValues, 'auto' | 'clip' | 'hidden' | 'overlay' | 'scroll' | 'visible'>,
      Key
    > {
  /**
   * overflow-x 的原生 -moz-hidden-unscrollable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  readonly MozHiddenUnscrollable: SystemKeyword<Key, '-moz-hidden-unscrollable'>;
}
export interface OverflowYKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OverflowYValues, 'auto' | 'clip' | 'hidden' | 'overlay' | 'scroll' | 'visible'>,
      Key
    > {
  /**
   * overflow-y 的原生 -moz-hidden-unscrollable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  readonly MozHiddenUnscrollable: SystemKeyword<Key, '-moz-hidden-unscrollable'>;
}
export interface OverlayKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OverlayValues, 'auto' | 'none'>, Key> {}
export interface OverscrollBehaviorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OverscrollBehaviorValues, 'auto' | 'contain' | 'none'>, Key> {}
export interface OverscrollBehaviorBlockKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OverscrollBehaviorBlockValues, 'auto' | 'contain' | 'none'>,
      Key
    > {}
export interface OverscrollBehaviorInlineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.OverscrollBehaviorInlineValues, 'auto' | 'contain' | 'none'>,
      Key
    > {}
export interface OverscrollBehaviorXKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OverscrollBehaviorXValues, 'auto' | 'contain' | 'none'>, Key> {}
export interface OverscrollBehaviorYKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.OverscrollBehaviorYValues, 'auto' | 'contain' | 'none'>, Key> {}
export interface PaddingKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface PaddingBlockKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface PaddingBlockEndKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface PaddingBlockStartKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface PaddingBottomKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface PaddingInlineKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface PaddingInlineEndKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface PaddingInlineStartKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface PaddingLeftKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface PaddingRightKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface PaddingTopKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface PageKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.PageValues, 'auto'>, Key> {}
export interface PageBreakAfterKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.PageBreakAfterValues,
        'always' | 'auto' | 'avoid' | 'left' | 'recto' | 'right' | 'verso'
      >,
      Key
    > {}
export interface PageBreakBeforeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.PageBreakBeforeValues,
        'always' | 'auto' | 'avoid' | 'left' | 'recto' | 'right' | 'verso'
      >,
      Key
    > {}
export interface PageBreakInsideKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.PageBreakInsideValues, 'auto' | 'avoid'>, Key> {}
export interface PaintOrderKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.PaintOrderValues, 'fill' | 'markers' | 'normal' | 'stroke'>,
      Key
    > {}
export interface PerspectiveKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.PerspectiveValues, 'none'>, Key> {}
export interface PerspectiveOriginKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.PerspectiveOriginValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface PlaceContentKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.PlaceContentValues,
        'baseline' | 'center' | 'end' | 'normal' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * place-content 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * place-content 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * place-content 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly spaceAround: SystemKeyword<Key, 'space-around'>;
  /**
   * place-content 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly spaceBetween: SystemKeyword<Key, 'space-between'>;
  /**
   * place-content 的原生 space-evenly 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly spaceEvenly: SystemKeyword<Key, 'space-evenly'>;
}
export interface PlaceItemsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.PlaceItemsValues, 'baseline' | 'center' | 'end' | 'normal' | 'start' | 'stretch'>,
      Key
    > {
  /**
   * place-items 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly anchorCenter: SystemKeyword<Key, 'anchor-center'>;
  /**
   * place-items 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * place-items 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * place-items 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * place-items 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
}
export interface PlaceSelfKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.PlaceSelfValues,
        'auto' | 'baseline' | 'center' | 'end' | 'normal' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * place-self 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly anchorCenter: SystemKeyword<Key, 'anchor-center'>;
  /**
   * place-self 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * place-self 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * place-self 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * place-self 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
}
export interface PointerEventsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.PointerEventsValues,
        | 'all'
        | 'auto'
        | 'fill'
        | 'none'
        | 'painted'
        | 'stroke'
        | 'visible'
        | 'visibleFill'
        | 'visiblePainted'
        | 'visibleStroke'
      >,
      Key
    > {}
export interface PositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.PositionValues, 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'>,
      Key
    > {
  /**
   * position 的原生 -webkit-sticky 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly WebkitSticky: SystemKeyword<Key, '-webkit-sticky'>;
}
export interface PositionAnchorKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.PositionAnchorValues, 'auto'>, Key> {}
export interface PositionAreaKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.PositionAreaValues,
        'bottom' | 'center' | 'end' | 'left' | 'none' | 'right' | 'start' | 'top'
      >,
      Key
    > {
  /**
   * position-area 的原生 block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly blockEnd: SystemKeyword<Key, 'block-end'>;
  /**
   * position-area 的原生 block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly blockStart: SystemKeyword<Key, 'block-start'>;
  /**
   * position-area 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly inlineEnd: SystemKeyword<Key, 'inline-end'>;
  /**
   * position-area 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly inlineStart: SystemKeyword<Key, 'inline-start'>;
  /**
   * position-area 的原生 self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly selfBlockEnd: SystemKeyword<Key, 'self-block-end'>;
  /**
   * position-area 的原生 self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly selfBlockStart: SystemKeyword<Key, 'self-block-start'>;
  /**
   * position-area 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * position-area 的原生 self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly selfInlineEnd: SystemKeyword<Key, 'self-inline-end'>;
  /**
   * position-area 的原生 self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly selfInlineStart: SystemKeyword<Key, 'self-inline-start'>;
  /**
   * position-area 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
  /**
   * position-area 的原生 span-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanAll: SystemKeyword<Key, 'span-all'>;
  /**
   * position-area 的原生 span-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanBlockEnd: SystemKeyword<Key, 'span-block-end'>;
  /**
   * position-area 的原生 span-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanBlockStart: SystemKeyword<Key, 'span-block-start'>;
  /**
   * position-area 的原生 span-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanBottom: SystemKeyword<Key, 'span-bottom'>;
  /**
   * position-area 的原生 span-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanEnd: SystemKeyword<Key, 'span-end'>;
  /**
   * position-area 的原生 span-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanInlineEnd: SystemKeyword<Key, 'span-inline-end'>;
  /**
   * position-area 的原生 span-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanInlineStart: SystemKeyword<Key, 'span-inline-start'>;
  /**
   * position-area 的原生 span-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanLeft: SystemKeyword<Key, 'span-left'>;
  /**
   * position-area 的原生 span-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanRight: SystemKeyword<Key, 'span-right'>;
  /**
   * position-area 的原生 span-self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanSelfBlockEnd: SystemKeyword<Key, 'span-self-block-end'>;
  /**
   * position-area 的原生 span-self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanSelfBlockStart: SystemKeyword<Key, 'span-self-block-start'>;
  /**
   * position-area 的原生 span-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanSelfEnd: SystemKeyword<Key, 'span-self-end'>;
  /**
   * position-area 的原生 span-self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanSelfInlineEnd: SystemKeyword<Key, 'span-self-inline-end'>;
  /**
   * position-area 的原生 span-self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanSelfInlineStart: SystemKeyword<Key, 'span-self-inline-start'>;
  /**
   * position-area 的原生 span-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanSelfStart: SystemKeyword<Key, 'span-self-start'>;
  /**
   * position-area 的原生 span-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanStart: SystemKeyword<Key, 'span-start'>;
  /**
   * position-area 的原生 span-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanTop: SystemKeyword<Key, 'span-top'>;
  /**
   * position-area 的原生 span-x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanXEnd: SystemKeyword<Key, 'span-x-end'>;
  /**
   * position-area 的原生 span-x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanXSelfEnd: SystemKeyword<Key, 'span-x-self-end'>;
  /**
   * position-area 的原生 span-x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanXSelfStart: SystemKeyword<Key, 'span-x-self-start'>;
  /**
   * position-area 的原生 span-x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanXStart: SystemKeyword<Key, 'span-x-start'>;
  /**
   * position-area 的原生 span-y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanYEnd: SystemKeyword<Key, 'span-y-end'>;
  /**
   * position-area 的原生 span-y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanYSelfEnd: SystemKeyword<Key, 'span-y-self-end'>;
  /**
   * position-area 的原生 span-y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanYSelfStart: SystemKeyword<Key, 'span-y-self-start'>;
  /**
   * position-area 的原生 span-y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly spanYStart: SystemKeyword<Key, 'span-y-start'>;
  /**
   * position-area 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly xEnd: SystemKeyword<Key, 'x-end'>;
  /**
   * position-area 的原生 x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly xSelfEnd: SystemKeyword<Key, 'x-self-end'>;
  /**
   * position-area 的原生 x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly xSelfStart: SystemKeyword<Key, 'x-self-start'>;
  /**
   * position-area 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly xStart: SystemKeyword<Key, 'x-start'>;
  /**
   * position-area 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly yEnd: SystemKeyword<Key, 'y-end'>;
  /**
   * position-area 的原生 y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly ySelfEnd: SystemKeyword<Key, 'y-self-end'>;
  /**
   * position-area 的原生 y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly ySelfStart: SystemKeyword<Key, 'y-self-start'>;
  /**
   * position-area 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly yStart: SystemKeyword<Key, 'y-start'>;
}
export interface PositionTryKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.PositionTryValues,
        'bottom' | 'center' | 'end' | 'left' | 'none' | 'right' | 'start' | 'top'
      >,
      Key
    > {
  /**
   * position-try 的原生 block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly blockEnd: SystemKeyword<Key, 'block-end'>;
  /**
   * position-try 的原生 block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly blockStart: SystemKeyword<Key, 'block-start'>;
  /**
   * position-try 的原生 flip-block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly flipBlock: SystemKeyword<Key, 'flip-block'>;
  /**
   * position-try 的原生 flip-inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly flipInline: SystemKeyword<Key, 'flip-inline'>;
  /**
   * position-try 的原生 flip-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly flipStart: SystemKeyword<Key, 'flip-start'>;
  /**
   * position-try 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly inlineEnd: SystemKeyword<Key, 'inline-end'>;
  /**
   * position-try 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly inlineStart: SystemKeyword<Key, 'inline-start'>;
  /**
   * position-try 的原生 self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly selfBlockEnd: SystemKeyword<Key, 'self-block-end'>;
  /**
   * position-try 的原生 self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly selfBlockStart: SystemKeyword<Key, 'self-block-start'>;
  /**
   * position-try 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * position-try 的原生 self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly selfInlineEnd: SystemKeyword<Key, 'self-inline-end'>;
  /**
   * position-try 的原生 self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly selfInlineStart: SystemKeyword<Key, 'self-inline-start'>;
  /**
   * position-try 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
  /**
   * position-try 的原生 span-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanAll: SystemKeyword<Key, 'span-all'>;
  /**
   * position-try 的原生 span-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanBlockEnd: SystemKeyword<Key, 'span-block-end'>;
  /**
   * position-try 的原生 span-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanBlockStart: SystemKeyword<Key, 'span-block-start'>;
  /**
   * position-try 的原生 span-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanBottom: SystemKeyword<Key, 'span-bottom'>;
  /**
   * position-try 的原生 span-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanEnd: SystemKeyword<Key, 'span-end'>;
  /**
   * position-try 的原生 span-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanInlineEnd: SystemKeyword<Key, 'span-inline-end'>;
  /**
   * position-try 的原生 span-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanInlineStart: SystemKeyword<Key, 'span-inline-start'>;
  /**
   * position-try 的原生 span-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanLeft: SystemKeyword<Key, 'span-left'>;
  /**
   * position-try 的原生 span-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanRight: SystemKeyword<Key, 'span-right'>;
  /**
   * position-try 的原生 span-self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanSelfBlockEnd: SystemKeyword<Key, 'span-self-block-end'>;
  /**
   * position-try 的原生 span-self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanSelfBlockStart: SystemKeyword<Key, 'span-self-block-start'>;
  /**
   * position-try 的原生 span-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanSelfEnd: SystemKeyword<Key, 'span-self-end'>;
  /**
   * position-try 的原生 span-self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanSelfInlineEnd: SystemKeyword<Key, 'span-self-inline-end'>;
  /**
   * position-try 的原生 span-self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanSelfInlineStart: SystemKeyword<Key, 'span-self-inline-start'>;
  /**
   * position-try 的原生 span-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanSelfStart: SystemKeyword<Key, 'span-self-start'>;
  /**
   * position-try 的原生 span-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanStart: SystemKeyword<Key, 'span-start'>;
  /**
   * position-try 的原生 span-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanTop: SystemKeyword<Key, 'span-top'>;
  /**
   * position-try 的原生 span-x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanXEnd: SystemKeyword<Key, 'span-x-end'>;
  /**
   * position-try 的原生 span-x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanXSelfEnd: SystemKeyword<Key, 'span-x-self-end'>;
  /**
   * position-try 的原生 span-x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanXSelfStart: SystemKeyword<Key, 'span-x-self-start'>;
  /**
   * position-try 的原生 span-x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanXStart: SystemKeyword<Key, 'span-x-start'>;
  /**
   * position-try 的原生 span-y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanYEnd: SystemKeyword<Key, 'span-y-end'>;
  /**
   * position-try 的原生 span-y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanYSelfEnd: SystemKeyword<Key, 'span-y-self-end'>;
  /**
   * position-try 的原生 span-y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanYSelfStart: SystemKeyword<Key, 'span-y-self-start'>;
  /**
   * position-try 的原生 span-y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly spanYStart: SystemKeyword<Key, 'span-y-start'>;
  /**
   * position-try 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly xEnd: SystemKeyword<Key, 'x-end'>;
  /**
   * position-try 的原生 x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly xSelfEnd: SystemKeyword<Key, 'x-self-end'>;
  /**
   * position-try 的原生 x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly xSelfStart: SystemKeyword<Key, 'x-self-start'>;
  /**
   * position-try 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly xStart: SystemKeyword<Key, 'x-start'>;
  /**
   * position-try 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly yEnd: SystemKeyword<Key, 'y-end'>;
  /**
   * position-try 的原生 y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly ySelfEnd: SystemKeyword<Key, 'y-self-end'>;
  /**
   * position-try 的原生 y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly ySelfStart: SystemKeyword<Key, 'y-self-start'>;
  /**
   * position-try 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly yStart: SystemKeyword<Key, 'y-start'>;
}
export interface PositionTryFallbacksKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.PositionTryFallbacksValues,
        'bottom' | 'center' | 'end' | 'left' | 'none' | 'right' | 'start' | 'top'
      >,
      Key
    > {
  /**
   * position-try-fallbacks 的原生 block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly blockEnd: SystemKeyword<Key, 'block-end'>;
  /**
   * position-try-fallbacks 的原生 block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly blockStart: SystemKeyword<Key, 'block-start'>;
  /**
   * position-try-fallbacks 的原生 flip-block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly flipBlock: SystemKeyword<Key, 'flip-block'>;
  /**
   * position-try-fallbacks 的原生 flip-inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly flipInline: SystemKeyword<Key, 'flip-inline'>;
  /**
   * position-try-fallbacks 的原生 flip-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly flipStart: SystemKeyword<Key, 'flip-start'>;
  /**
   * position-try-fallbacks 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly inlineEnd: SystemKeyword<Key, 'inline-end'>;
  /**
   * position-try-fallbacks 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly inlineStart: SystemKeyword<Key, 'inline-start'>;
  /**
   * position-try-fallbacks 的原生 self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly selfBlockEnd: SystemKeyword<Key, 'self-block-end'>;
  /**
   * position-try-fallbacks 的原生 self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly selfBlockStart: SystemKeyword<Key, 'self-block-start'>;
  /**
   * position-try-fallbacks 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * position-try-fallbacks 的原生 self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly selfInlineEnd: SystemKeyword<Key, 'self-inline-end'>;
  /**
   * position-try-fallbacks 的原生 self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly selfInlineStart: SystemKeyword<Key, 'self-inline-start'>;
  /**
   * position-try-fallbacks 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
  /**
   * position-try-fallbacks 的原生 span-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanAll: SystemKeyword<Key, 'span-all'>;
  /**
   * position-try-fallbacks 的原生 span-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanBlockEnd: SystemKeyword<Key, 'span-block-end'>;
  /**
   * position-try-fallbacks 的原生 span-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanBlockStart: SystemKeyword<Key, 'span-block-start'>;
  /**
   * position-try-fallbacks 的原生 span-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanBottom: SystemKeyword<Key, 'span-bottom'>;
  /**
   * position-try-fallbacks 的原生 span-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanEnd: SystemKeyword<Key, 'span-end'>;
  /**
   * position-try-fallbacks 的原生 span-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanInlineEnd: SystemKeyword<Key, 'span-inline-end'>;
  /**
   * position-try-fallbacks 的原生 span-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanInlineStart: SystemKeyword<Key, 'span-inline-start'>;
  /**
   * position-try-fallbacks 的原生 span-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanLeft: SystemKeyword<Key, 'span-left'>;
  /**
   * position-try-fallbacks 的原生 span-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanRight: SystemKeyword<Key, 'span-right'>;
  /**
   * position-try-fallbacks 的原生 span-self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanSelfBlockEnd: SystemKeyword<Key, 'span-self-block-end'>;
  /**
   * position-try-fallbacks 的原生 span-self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanSelfBlockStart: SystemKeyword<Key, 'span-self-block-start'>;
  /**
   * position-try-fallbacks 的原生 span-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanSelfEnd: SystemKeyword<Key, 'span-self-end'>;
  /**
   * position-try-fallbacks 的原生 span-self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanSelfInlineEnd: SystemKeyword<Key, 'span-self-inline-end'>;
  /**
   * position-try-fallbacks 的原生 span-self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanSelfInlineStart: SystemKeyword<Key, 'span-self-inline-start'>;
  /**
   * position-try-fallbacks 的原生 span-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanSelfStart: SystemKeyword<Key, 'span-self-start'>;
  /**
   * position-try-fallbacks 的原生 span-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanStart: SystemKeyword<Key, 'span-start'>;
  /**
   * position-try-fallbacks 的原生 span-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanTop: SystemKeyword<Key, 'span-top'>;
  /**
   * position-try-fallbacks 的原生 span-x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanXEnd: SystemKeyword<Key, 'span-x-end'>;
  /**
   * position-try-fallbacks 的原生 span-x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanXSelfEnd: SystemKeyword<Key, 'span-x-self-end'>;
  /**
   * position-try-fallbacks 的原生 span-x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanXSelfStart: SystemKeyword<Key, 'span-x-self-start'>;
  /**
   * position-try-fallbacks 的原生 span-x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanXStart: SystemKeyword<Key, 'span-x-start'>;
  /**
   * position-try-fallbacks 的原生 span-y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanYEnd: SystemKeyword<Key, 'span-y-end'>;
  /**
   * position-try-fallbacks 的原生 span-y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanYSelfEnd: SystemKeyword<Key, 'span-y-self-end'>;
  /**
   * position-try-fallbacks 的原生 span-y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanYSelfStart: SystemKeyword<Key, 'span-y-self-start'>;
  /**
   * position-try-fallbacks 的原生 span-y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly spanYStart: SystemKeyword<Key, 'span-y-start'>;
  /**
   * position-try-fallbacks 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly xEnd: SystemKeyword<Key, 'x-end'>;
  /**
   * position-try-fallbacks 的原生 x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly xSelfEnd: SystemKeyword<Key, 'x-self-end'>;
  /**
   * position-try-fallbacks 的原生 x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly xSelfStart: SystemKeyword<Key, 'x-self-start'>;
  /**
   * position-try-fallbacks 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly xStart: SystemKeyword<Key, 'x-start'>;
  /**
   * position-try-fallbacks 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly yEnd: SystemKeyword<Key, 'y-end'>;
  /**
   * position-try-fallbacks 的原生 y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly ySelfEnd: SystemKeyword<Key, 'y-self-end'>;
  /**
   * position-try-fallbacks 的原生 y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly ySelfStart: SystemKeyword<Key, 'y-self-start'>;
  /**
   * position-try-fallbacks 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly yStart: SystemKeyword<Key, 'y-start'>;
}
export interface PositionTryOptionsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.PositionTryOptionsValues,
        'bottom' | 'center' | 'end' | 'left' | 'none' | 'right' | 'start' | 'top'
      >,
      Key
    > {
  /**
   * position-try-options 的原生 block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly blockEnd: SystemKeyword<Key, 'block-end'>;
  /**
   * position-try-options 的原生 block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly blockStart: SystemKeyword<Key, 'block-start'>;
  /**
   * position-try-options 的原生 flip-block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly flipBlock: SystemKeyword<Key, 'flip-block'>;
  /**
   * position-try-options 的原生 flip-inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly flipInline: SystemKeyword<Key, 'flip-inline'>;
  /**
   * position-try-options 的原生 flip-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly flipStart: SystemKeyword<Key, 'flip-start'>;
  /**
   * position-try-options 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly inlineEnd: SystemKeyword<Key, 'inline-end'>;
  /**
   * position-try-options 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly inlineStart: SystemKeyword<Key, 'inline-start'>;
  /**
   * position-try-options 的原生 self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly selfBlockEnd: SystemKeyword<Key, 'self-block-end'>;
  /**
   * position-try-options 的原生 self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly selfBlockStart: SystemKeyword<Key, 'self-block-start'>;
  /**
   * position-try-options 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * position-try-options 的原生 self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly selfInlineEnd: SystemKeyword<Key, 'self-inline-end'>;
  /**
   * position-try-options 的原生 self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly selfInlineStart: SystemKeyword<Key, 'self-inline-start'>;
  /**
   * position-try-options 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
  /**
   * position-try-options 的原生 span-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanAll: SystemKeyword<Key, 'span-all'>;
  /**
   * position-try-options 的原生 span-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanBlockEnd: SystemKeyword<Key, 'span-block-end'>;
  /**
   * position-try-options 的原生 span-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanBlockStart: SystemKeyword<Key, 'span-block-start'>;
  /**
   * position-try-options 的原生 span-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanBottom: SystemKeyword<Key, 'span-bottom'>;
  /**
   * position-try-options 的原生 span-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanEnd: SystemKeyword<Key, 'span-end'>;
  /**
   * position-try-options 的原生 span-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanInlineEnd: SystemKeyword<Key, 'span-inline-end'>;
  /**
   * position-try-options 的原生 span-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanInlineStart: SystemKeyword<Key, 'span-inline-start'>;
  /**
   * position-try-options 的原生 span-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanLeft: SystemKeyword<Key, 'span-left'>;
  /**
   * position-try-options 的原生 span-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanRight: SystemKeyword<Key, 'span-right'>;
  /**
   * position-try-options 的原生 span-self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanSelfBlockEnd: SystemKeyword<Key, 'span-self-block-end'>;
  /**
   * position-try-options 的原生 span-self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanSelfBlockStart: SystemKeyword<Key, 'span-self-block-start'>;
  /**
   * position-try-options 的原生 span-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanSelfEnd: SystemKeyword<Key, 'span-self-end'>;
  /**
   * position-try-options 的原生 span-self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanSelfInlineEnd: SystemKeyword<Key, 'span-self-inline-end'>;
  /**
   * position-try-options 的原生 span-self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanSelfInlineStart: SystemKeyword<Key, 'span-self-inline-start'>;
  /**
   * position-try-options 的原生 span-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanSelfStart: SystemKeyword<Key, 'span-self-start'>;
  /**
   * position-try-options 的原生 span-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanStart: SystemKeyword<Key, 'span-start'>;
  /**
   * position-try-options 的原生 span-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanTop: SystemKeyword<Key, 'span-top'>;
  /**
   * position-try-options 的原生 span-x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanXEnd: SystemKeyword<Key, 'span-x-end'>;
  /**
   * position-try-options 的原生 span-x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanXSelfEnd: SystemKeyword<Key, 'span-x-self-end'>;
  /**
   * position-try-options 的原生 span-x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanXSelfStart: SystemKeyword<Key, 'span-x-self-start'>;
  /**
   * position-try-options 的原生 span-x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanXStart: SystemKeyword<Key, 'span-x-start'>;
  /**
   * position-try-options 的原生 span-y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanYEnd: SystemKeyword<Key, 'span-y-end'>;
  /**
   * position-try-options 的原生 span-y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanYSelfEnd: SystemKeyword<Key, 'span-y-self-end'>;
  /**
   * position-try-options 的原生 span-y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanYSelfStart: SystemKeyword<Key, 'span-y-self-start'>;
  /**
   * position-try-options 的原生 span-y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly spanYStart: SystemKeyword<Key, 'span-y-start'>;
  /**
   * position-try-options 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly xEnd: SystemKeyword<Key, 'x-end'>;
  /**
   * position-try-options 的原生 x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly xSelfEnd: SystemKeyword<Key, 'x-self-end'>;
  /**
   * position-try-options 的原生 x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly xSelfStart: SystemKeyword<Key, 'x-self-start'>;
  /**
   * position-try-options 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly xStart: SystemKeyword<Key, 'x-start'>;
  /**
   * position-try-options 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly yEnd: SystemKeyword<Key, 'y-end'>;
  /**
   * position-try-options 的原生 y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly ySelfEnd: SystemKeyword<Key, 'y-self-end'>;
  /**
   * position-try-options 的原生 y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly ySelfStart: SystemKeyword<Key, 'y-self-start'>;
  /**
   * position-try-options 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly yStart: SystemKeyword<Key, 'y-start'>;
}
export interface PositionTryOrderKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.PositionTryOrderValues, 'normal'>, Key> {
  /**
   * position-try-order 的原生 most-block-size 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  readonly mostBlockSize: SystemKeyword<Key, 'most-block-size'>;
  /**
   * position-try-order 的原生 most-height 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  readonly mostHeight: SystemKeyword<Key, 'most-height'>;
  /**
   * position-try-order 的原生 most-inline-size 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  readonly mostInlineSize: SystemKeyword<Key, 'most-inline-size'>;
  /**
   * position-try-order 的原生 most-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  readonly mostWidth: SystemKeyword<Key, 'most-width'>;
}
export interface PositionVisibilityKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.PositionVisibilityValues, 'always'>, Key> {
  /**
   * position-visibility 的原生 anchors-valid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  readonly anchorsValid: SystemKeyword<Key, 'anchors-valid'>;
  /**
   * position-visibility 的原生 anchors-visible 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  readonly anchorsVisible: SystemKeyword<Key, 'anchors-visible'>;
  /**
   * position-visibility 的原生 no-overflow 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  readonly noOverflow: SystemKeyword<Key, 'no-overflow'>;
}
export interface PrintColorAdjustKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.PrintColorAdjustValues, 'economy' | 'exact'>, Key> {}
export interface QuotesKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.QuotesValues, 'auto' | 'none'>, Key> {}
export interface RKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ResizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.ResizeValues, 'block' | 'both' | 'horizontal' | 'inline' | 'none' | 'vertical'>,
      Key
    > {}
export interface RightKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.RightValues, 'auto'>, Key> {}
export interface RotateKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.RotateValues, 'none'>, Key> {}
export interface RowGapKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.RowGapValues, 'normal'>, Key> {}
export interface RubyAlignKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.RubyAlignValues, 'center' | 'start'>, Key> {
  /**
   * ruby-align 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  readonly spaceAround: SystemKeyword<Key, 'space-around'>;
  /**
   * ruby-align 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  readonly spaceBetween: SystemKeyword<Key, 'space-between'>;
}
export interface RubyMergeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.RubyMergeValues, 'auto' | 'collapse' | 'separate'>, Key> {}
export interface RubyOverhangKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.RubyOverhangValues, 'auto' | 'none'>, Key> {}
export interface RubyPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.RubyPositionValues, 'alternate' | 'over' | 'under'>, Key> {
  /**
   * ruby-position 的原生 inter-character 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  readonly interCharacter: SystemKeyword<Key, 'inter-character'>;
}
export interface RxKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface RyKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ScaleKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ScaleValues, 'none'>, Key> {}
export interface ScrollbarColorKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ScrollbarColorValues, 'auto'>, Key> {}
export interface ScrollbarGutterKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollbarGutterValues, 'auto' | 'stable'>, Key> {}
export interface ScrollbarWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollbarWidthValues, 'auto' | 'none' | 'thin'>, Key> {}
export interface ScrollBehaviorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollBehaviorValues, 'auto' | 'smooth'>, Key> {}
export interface ScrollInitialTargetKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollInitialTargetValues, 'nearest' | 'none'>, Key> {}
export interface ScrollMarginKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ScrollMarginBlockKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ScrollMarginBlockEndKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ScrollMarginBlockStartKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ScrollMarginBottomKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ScrollMarginInlineKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ScrollMarginInlineEndKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ScrollMarginInlineStartKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ScrollMarginLeftKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ScrollMarginRightKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ScrollMarginTopKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ScrollPaddingKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ScrollPaddingValues, 'auto'>, Key> {}
export interface ScrollPaddingBlockKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollPaddingBlockValues, 'auto'>, Key> {}
export interface ScrollPaddingBlockEndKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollPaddingBlockEndValues, 'auto'>, Key> {}
export interface ScrollPaddingBlockStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollPaddingBlockStartValues, 'auto'>, Key> {}
export interface ScrollPaddingBottomKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollPaddingBottomValues, 'auto'>, Key> {}
export interface ScrollPaddingInlineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollPaddingInlineValues, 'auto'>, Key> {}
export interface ScrollPaddingInlineEndKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollPaddingInlineEndValues, 'auto'>, Key> {}
export interface ScrollPaddingInlineStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollPaddingInlineStartValues, 'auto'>, Key> {}
export interface ScrollPaddingLeftKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollPaddingLeftValues, 'auto'>, Key> {}
export interface ScrollPaddingRightKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollPaddingRightValues, 'auto'>, Key> {}
export interface ScrollPaddingTopKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollPaddingTopValues, 'auto'>, Key> {}
export interface ScrollSnapAlignKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.ScrollSnapAlignValues, 'center' | 'end' | 'none' | 'start'>,
      Key
    > {}
export interface ScrollSnapCoordinateKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.ScrollSnapCoordinateValues,
        'bottom' | 'center' | 'left' | 'none' | 'right' | 'top'
      >,
      Key
    > {}
export interface ScrollSnapDestinationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.ScrollSnapDestinationValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface ScrollSnapMarginKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ScrollSnapMarginBottomKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ScrollSnapMarginLeftKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ScrollSnapMarginRightKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ScrollSnapMarginTopKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ScrollSnapPointsXKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollSnapPointsXValues, 'none'>, Key> {}
export interface ScrollSnapPointsYKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollSnapPointsYValues, 'none'>, Key> {}
export interface ScrollSnapStopKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollSnapStopValues, 'always' | 'normal'>, Key> {}
export interface ScrollSnapTypeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.ScrollSnapTypeValues, 'block' | 'both' | 'inline' | 'none' | 'x' | 'y'>,
      Key
    > {}
export interface ScrollSnapTypeXKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.ScrollSnapTypeXValues, 'mandatory' | 'none' | 'proximity'>,
      Key
    > {}
export interface ScrollSnapTypeYKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.ScrollSnapTypeYValues, 'mandatory' | 'none' | 'proximity'>,
      Key
    > {}
export interface ScrollTimelineKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ScrollTimelineValues, 'none'>, Key> {}
export interface ScrollTimelineAxisKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollTimelineAxisValues, 'block' | 'inline' | 'x' | 'y'>, Key> {}
export interface ScrollTimelineNameKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ScrollTimelineNameValues, 'none'>, Key> {}
export interface ShapeImageThresholdKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface ShapeMarginKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ShapeOutsideKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ShapeOutsideValues, 'none'>, Key> {
  /**
   * shape-outside 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * shape-outside 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * shape-outside 的原生 margin-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  readonly marginBox: SystemKeyword<Key, 'margin-box'>;
  /**
   * shape-outside 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
}
export interface ShapeRenderingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.ShapeRenderingValues,
        'auto' | 'crispEdges' | 'geometricPrecision' | 'optimizeSpeed'
      >,
      Key
    > {}
export interface SpeakAsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.SpeakAsValues, 'digits' | 'normal'>, Key> {
  /**
   * speak-as 的原生 literal-punctuation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  readonly literalPunctuation: SystemKeyword<Key, 'literal-punctuation'>;
  /**
   * speak-as 的原生 no-punctuation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  readonly noPunctuation: SystemKeyword<Key, 'no-punctuation'>;
  /**
   * speak-as 的原生 spell-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  readonly spellOut: SystemKeyword<Key, 'spell-out'>;
}
export interface StopColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.StopColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface StopOpacityKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface StrokeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.StrokeValues, 'currentColor' | 'none' | 'transparent'>, Key> {
  /**
   * CSS 颜色关键字 context-fill；系统颜色会随用户环境和配色设置变化。
   */
  readonly contextFill: SystemKeyword<Key, 'context-fill'>;
  /**
   * CSS 颜色关键字 context-stroke；系统颜色会随用户环境和配色设置变化。
   */
  readonly contextStroke: SystemKeyword<Key, 'context-stroke'>;
}
export interface StrokeColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.StrokeColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface StrokeDasharrayKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.StrokeDasharrayValues, 'none'>, Key> {}
export interface StrokeDashoffsetKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface StrokeLinecapKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.StrokeLinecapValues, 'butt' | 'round' | 'square'>, Key> {}
export interface StrokeLinejoinKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.StrokeLinejoinValues, 'arcs' | 'bevel' | 'miter' | 'round'>,
      Key
    > {
  /**
   * stroke-linejoin 的原生 miter-clip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  readonly miterClip: SystemKeyword<Key, 'miter-clip'>;
}
export interface StrokeMiterlimitKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface StrokeOpacityKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface StrokeWidthKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface TableLayoutKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TableLayoutValues, 'auto' | 'fixed'>, Key> {}
export interface TabSizeKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface TextAlignKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextAlignValues, 'center' | 'end' | 'justify' | 'left' | 'right' | 'start'>,
      Key
    > {
  /**
   * text-align 的原生 -khtml-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly KhtmlCenter: SystemKeyword<Key, '-khtml-center'>;
  /**
   * text-align 的原生 -khtml-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly KhtmlLeft: SystemKeyword<Key, '-khtml-left'>;
  /**
   * text-align 的原生 -khtml-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly KhtmlRight: SystemKeyword<Key, '-khtml-right'>;
  /**
   * text-align 的原生 -moz-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly MozCenter: SystemKeyword<Key, '-moz-center'>;
  /**
   * text-align 的原生 -moz-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly MozLeft: SystemKeyword<Key, '-moz-left'>;
  /**
   * text-align 的原生 -moz-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly MozRight: SystemKeyword<Key, '-moz-right'>;
  /**
   * text-align 的原生 -webkit-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly WebkitCenter: SystemKeyword<Key, '-webkit-center'>;
  /**
   * text-align 的原生 -webkit-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly WebkitLeft: SystemKeyword<Key, '-webkit-left'>;
  /**
   * text-align 的原生 -webkit-match-parent 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly WebkitMatchParent: SystemKeyword<Key, '-webkit-match-parent'>;
  /**
   * text-align 的原生 -webkit-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly WebkitRight: SystemKeyword<Key, '-webkit-right'>;
  /**
   * text-align 的原生 match-parent 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly matchParent: SystemKeyword<Key, 'match-parent'>;
}
export interface TextAlignLastKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.TextAlignLastValues,
        'auto' | 'center' | 'end' | 'justify' | 'left' | 'right' | 'start'
      >,
      Key
    > {}
export interface TextAnchorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextAnchorValues, 'end' | 'middle' | 'start'>, Key> {}
export interface TextAutospaceKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextAutospaceValues, 'auto' | 'insert' | 'normal' | 'punctuation' | 'replace'>,
      Key
    > {
  /**
   * text-autospace 的原生 ideograph-alpha 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly ideographAlpha: SystemKeyword<Key, 'ideograph-alpha'>;
  /**
   * text-autospace 的原生 ideograph-numeric 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly ideographNumeric: SystemKeyword<Key, 'ideograph-numeric'>;
  /**
   * text-autospace 的原生 no-autospace 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly noAutospace: SystemKeyword<Key, 'no-autospace'>;
}
export interface TextBoxKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.TextBoxValues,
        'auto' | 'cap' | 'ex' | 'ideographic' | 'none' | 'normal' | 'text'
      >,
      Key
    > {
  /**
   * text-box 的原生 ideographic-ink 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly ideographicInk: SystemKeyword<Key, 'ideographic-ink'>;
  /**
   * text-box 的原生 trim-both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly trimBoth: SystemKeyword<Key, 'trim-both'>;
  /**
   * text-box 的原生 trim-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly trimEnd: SystemKeyword<Key, 'trim-end'>;
  /**
   * text-box 的原生 trim-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly trimStart: SystemKeyword<Key, 'trim-start'>;
}
export interface TextBoxEdgeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextBoxEdgeValues, 'auto' | 'cap' | 'ex' | 'ideographic' | 'text'>,
      Key
    > {
  /**
   * text-box-edge 的原生 ideographic-ink 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  readonly ideographicInk: SystemKeyword<Key, 'ideographic-ink'>;
}
export interface TextBoxTrimKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.TextBoxTrimValues, 'none'>, Key> {
  /**
   * text-box-trim 的原生 trim-both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  readonly trimBoth: SystemKeyword<Key, 'trim-both'>;
  /**
   * text-box-trim 的原生 trim-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  readonly trimEnd: SystemKeyword<Key, 'trim-end'>;
  /**
   * text-box-trim 的原生 trim-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  readonly trimStart: SystemKeyword<Key, 'trim-start'>;
}
export interface TextCombineUprightKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextCombineUprightValues, 'all' | 'digits' | 'none'>, Key> {}
export interface TextDecorationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.TextDecorationValues,
        | 'auto'
        | 'blink'
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'none'
        | 'overline'
        | 'solid'
        | 'transparent'
        | 'underline'
        | 'wavy'
      >,
      Key
    > {
  /**
   * CSS 颜色关键字 from-font；系统颜色会随用户环境和配色设置变化。
   */
  readonly fromFont: SystemKeyword<Key, 'from-font'>;
  /**
   * CSS 颜色关键字 grammar-error；系统颜色会随用户环境和配色设置变化。
   */
  readonly grammarError: SystemKeyword<Key, 'grammar-error'>;
  /**
   * CSS 颜色关键字 line-through；系统颜色会随用户环境和配色设置变化。
   */
  readonly lineThrough: SystemKeyword<Key, 'line-through'>;
  /**
   * CSS 颜色关键字 spelling-error；系统颜色会随用户环境和配色设置变化。
   */
  readonly spellingError: SystemKeyword<Key, 'spelling-error'>;
}
export interface TextDecorationColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextDecorationColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface TextDecorationLineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextDecorationLineValues, 'blink' | 'none' | 'overline' | 'underline'>,
      Key
    > {
  /**
   * text-decoration-line 的原生 grammar-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly grammarError: SystemKeyword<Key, 'grammar-error'>;
  /**
   * text-decoration-line 的原生 line-through 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly lineThrough: SystemKeyword<Key, 'line-through'>;
  /**
   * text-decoration-line 的原生 spelling-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly spellingError: SystemKeyword<Key, 'spelling-error'>;
}
export interface TextDecorationSkipKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextDecorationSkipValues, 'edges' | 'none' | 'objects' | 'spaces'>,
      Key
    > {
  /**
   * text-decoration-skip 的原生 box-decoration 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly boxDecoration: SystemKeyword<Key, 'box-decoration'>;
  /**
   * text-decoration-skip 的原生 leading-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly leadingSpaces: SystemKeyword<Key, 'leading-spaces'>;
  /**
   * text-decoration-skip 的原生 trailing-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly trailingSpaces: SystemKeyword<Key, 'trailing-spaces'>;
}
export interface TextDecorationSkipInkKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextDecorationSkipInkValues, 'all' | 'auto' | 'none'>, Key> {}
export interface TextDecorationStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextDecorationStyleValues, 'dashed' | 'dotted' | 'double' | 'solid' | 'wavy'>,
      Key
    > {}
export interface TextDecorationThicknessKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextDecorationThicknessValues, 'auto'>, Key> {
  /**
   * text-decoration-thickness 的原生 from-font 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  readonly fromFont: SystemKeyword<Key, 'from-font'>;
}
export interface TextEmphasisKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.TextEmphasisValues,
        | 'circle'
        | 'currentColor'
        | 'dot'
        | 'filled'
        | 'none'
        | 'open'
        | 'sesame'
        | 'transparent'
        | 'triangle'
      >,
      Key
    > {
  /**
   * CSS 颜色关键字 double-circle；系统颜色会随用户环境和配色设置变化。
   */
  readonly doubleCircle: SystemKeyword<Key, 'double-circle'>;
}
export interface TextEmphasisColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.TextEmphasisColorValues, 'currentColor' | 'transparent'>, Key> {}
export interface TextEmphasisPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextEmphasisPositionValues, 'auto' | 'over' | 'under'>, Key> {}
export interface TextEmphasisStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.TextEmphasisStyleValues,
        'circle' | 'dot' | 'filled' | 'none' | 'open' | 'sesame' | 'triangle'
      >,
      Key
    > {
  /**
   * text-emphasis-style 的原生 double-circle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  readonly doubleCircle: SystemKeyword<Key, 'double-circle'>;
}
export interface TextIndentKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface TextJustifyKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextJustifyValues, 'auto' | 'distribute' | 'none'>, Key> {
  /**
   * text-justify 的原生 inter-character 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  readonly interCharacter: SystemKeyword<Key, 'inter-character'>;
  /**
   * text-justify 的原生 inter-word 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  readonly interWord: SystemKeyword<Key, 'inter-word'>;
}
export interface TextOrientationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextOrientationValues, 'mixed' | 'sideways' | 'upright'>, Key> {
  /**
   * text-orientation 的原生 sideways-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  readonly sidewaysRight: SystemKeyword<Key, 'sideways-right'>;
}
export interface TextOverflowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextOverflowValues, 'clip' | 'ellipsis'>, Key> {}
export interface TextRenderingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.TextRenderingValues,
        'auto' | 'geometricPrecision' | 'optimizeLegibility' | 'optimizeSpeed'
      >,
      Key
    > {}
export interface TextShadowKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.TextShadowValues, 'none'>, Key> {}
export interface TextSizeAdjustKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextSizeAdjustValues, 'auto' | 'none'>, Key> {}
export interface TextSpacingTrimKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextSpacingTrimValues, 'normal'>, Key> {
  /**
   * text-spacing-trim 的原生 space-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  readonly spaceAll: SystemKeyword<Key, 'space-all'>;
  /**
   * text-spacing-trim 的原生 space-first 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  readonly spaceFirst: SystemKeyword<Key, 'space-first'>;
  /**
   * text-spacing-trim 的原生 trim-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  readonly trimStart: SystemKeyword<Key, 'trim-start'>;
}
export interface TextTransformKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextTransformValues, 'capitalize' | 'lowercase' | 'none' | 'uppercase'>,
      Key
    > {
  /**
   * text-transform 的原生 full-size-kana 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly fullSizeKana: SystemKeyword<Key, 'full-size-kana'>;
  /**
   * text-transform 的原生 full-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly fullWidth: SystemKeyword<Key, 'full-width'>;
  /**
   * text-transform 的原生 math-auto 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly mathAuto: SystemKeyword<Key, 'math-auto'>;
}
export interface TextUnderlineOffsetKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextUnderlineOffsetValues, 'auto'>, Key> {}
export interface TextUnderlinePositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextUnderlinePositionValues, 'auto' | 'left' | 'right' | 'under'>,
      Key
    > {
  /**
   * text-underline-position 的原生 from-font 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  readonly fromFont: SystemKeyword<Key, 'from-font'>;
}
export interface TextWrapKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextWrapValues, 'auto' | 'balance' | 'nowrap' | 'pretty' | 'stable' | 'wrap'>,
      Key
    > {}
export interface TextWrapModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TextWrapModeValues, 'nowrap' | 'wrap'>, Key> {}
export interface TextWrapStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TextWrapStyleValues, 'auto' | 'balance' | 'pretty' | 'stable'>,
      Key
    > {}
export interface TimelineScopeKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.TimelineScopeValues, 'none'>, Key> {}
export interface TopKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.TopValues, 'auto'>, Key> {}
export interface TouchActionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TouchActionValues, 'auto' | 'manipulation' | 'none'>, Key> {
  /**
   * touch-action 的原生 -ms-manipulation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly MsManipulation: SystemKeyword<Key, '-ms-manipulation'>;
  /**
   * touch-action 的原生 -ms-none 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly MsNone: SystemKeyword<Key, '-ms-none'>;
  /**
   * touch-action 的原生 -ms-pan-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly MsPanX: SystemKeyword<Key, '-ms-pan-x'>;
  /**
   * touch-action 的原生 -ms-pan-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly MsPanY: SystemKeyword<Key, '-ms-pan-y'>;
  /**
   * touch-action 的原生 -ms-pinch-zoom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly MsPinchZoom: SystemKeyword<Key, '-ms-pinch-zoom'>;
  /**
   * 允许以向下滚动开始的单指平移，即手指最初向上移动；开始后仍可反向滚动。
   */
  readonly panDown: SystemKeyword<Key, 'pan-down'>;
  /**
   * 允许以向左滚动开始的单指平移，手指起始移动方向相反；开始后仍可反向滚动。
   */
  readonly panLeft: SystemKeyword<Key, 'pan-left'>;
  /**
   * 允许以向右滚动开始的单指平移，手指起始移动方向相反；开始后仍可反向滚动。
   */
  readonly panRight: SystemKeyword<Key, 'pan-right'>;
  /**
   * 允许以向上滚动开始的单指平移，即手指最初向下移动；开始后仍可反向滚动。
   */
  readonly panUp: SystemKeyword<Key, 'pan-up'>;
  /**
   * 允许浏览器处理水平单指平移。
   */
  readonly panX: SystemKeyword<Key, 'pan-x'>;
  /**
   * 允许浏览器处理垂直单指平移。
   */
  readonly panY: SystemKeyword<Key, 'pan-y'>;
  /**
   * 允许浏览器处理多指缩放和平移，可与 pan-x、pan-y 等单指方向规则组合。
   */
  readonly pinchZoom: SystemKeyword<Key, 'pinch-zoom'>;
}
export interface TransformKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.TransformValues, 'none'>, Key> {}
export interface TransformBoxKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * transform-box 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * transform-box 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * transform-box 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * transform-box 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * transform-box 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface TransformOriginKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TransformOriginValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface TransformStyleKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.TransformStyleValues, 'flat'>, Key> {
  /**
   * 让子元素继续处于三维空间，适合多层三维场景。
   *
   * 区别：flat 会将后代展平到当前元素的平面；preserve-3d 本身不提供透视效果。
   *
   * 该属性不继承，需要在参与三维层级的中间元素上设置；opacity 小于 1、非 none 的 filter 等分组效果仍可能强制展平。
   *
   * @example
   * s.transformStyle("preserve-3d")
   */
  readonly preserve3d: SystemKeyword<Key, 'preserve-3d'>;
}
export interface TransitionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.TransitionValues, 'all' | 'ease' | 'linear' | 'none' | 'normal'>,
      Key
    > {
  /**
   * transition 的原生 allow-discrete 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly allowDiscrete: SystemKeyword<Key, 'allow-discrete'>;
  /**
   * transition 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * transition 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * transition 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * transition 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * transition 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface TransitionBehaviorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TransitionBehaviorValues, 'normal'>, Key> {
  /**
   * 允许离散属性启动过渡；切换时机仍由各属性的动画规则决定。
   */
  readonly allowDiscrete: SystemKeyword<Key, 'allow-discrete'>;
}
export interface TransitionDelayKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface TransitionDurationKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface TransitionPropertyKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TransitionPropertyValues, 'all' | 'none'>, Key> {}
export interface TransitionTimingFunctionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.TransitionTimingFunctionValues, 'ease' | 'linear'>, Key> {
  /**
   * transition-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * transition-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * transition-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * transition-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * transition-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface TranslateKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.TranslateValues, 'none'>, Key> {}
export interface UnicodeBidiKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.UnicodeBidiValues, 'embed' | 'isolate' | 'normal' | 'plaintext'>,
      Key
    > {
  /**
   * unicode-bidi 的原生 -moz-isolate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly MozIsolate: SystemKeyword<Key, '-moz-isolate'>;
  /**
   * unicode-bidi 的原生 -moz-isolate-override 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly MozIsolateOverride: SystemKeyword<Key, '-moz-isolate-override'>;
  /**
   * unicode-bidi 的原生 -moz-plaintext 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly MozPlaintext: SystemKeyword<Key, '-moz-plaintext'>;
  /**
   * unicode-bidi 的原生 -webkit-isolate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly WebkitIsolate: SystemKeyword<Key, '-webkit-isolate'>;
  /**
   * unicode-bidi 的原生 -webkit-isolate-override 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly WebkitIsolateOverride: SystemKeyword<Key, '-webkit-isolate-override'>;
  /**
   * unicode-bidi 的原生 -webkit-plaintext 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly WebkitPlaintext: SystemKeyword<Key, '-webkit-plaintext'>;
  /**
   * unicode-bidi 的原生 bidi-override 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly bidiOverride: SystemKeyword<Key, 'bidi-override'>;
  /**
   * unicode-bidi 的原生 isolate-override 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly isolateOverride: SystemKeyword<Key, 'isolate-override'>;
}
export interface UserSelectKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.UserSelectValues, 'all' | 'auto' | 'none' | 'text'>, Key> {
  /**
   * user-select 的原生 -moz-none 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  readonly MozNone: SystemKeyword<Key, '-moz-none'>;
}
export interface VectorEffectKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.VectorEffectValues, 'none'>, Key> {
  /**
   * vector-effect 的原生 fixed-position 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  readonly fixedPosition: SystemKeyword<Key, 'fixed-position'>;
  /**
   * vector-effect 的原生 non-rotation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  readonly nonRotation: SystemKeyword<Key, 'non-rotation'>;
  /**
   * vector-effect 的原生 non-scaling-size 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  readonly nonScalingSize: SystemKeyword<Key, 'non-scaling-size'>;
  /**
   * vector-effect 的原生 non-scaling-stroke 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  readonly nonScalingStroke: SystemKeyword<Key, 'non-scaling-stroke'>;
}
export interface VerticalAlignKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.VerticalAlignValues, 'baseline' | 'bottom' | 'middle' | 'sub' | 'super' | 'top'>,
      Key
    > {
  /**
   * vertical-align 的原生 text-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly textBottom: SystemKeyword<Key, 'text-bottom'>;
  /**
   * vertical-align 的原生 text-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly textTop: SystemKeyword<Key, 'text-top'>;
}
export interface ViewTimelineKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ViewTimelineValues, 'none'>, Key> {}
export interface ViewTimelineAxisKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ViewTimelineAxisValues, 'block' | 'inline' | 'x' | 'y'>, Key> {}
export interface ViewTimelineInsetKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ViewTimelineInsetValues, 'auto'>, Key> {}
export interface ViewTimelineNameKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ViewTimelineNameValues, 'none'>, Key> {}
export interface ViewTransitionClassKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ViewTransitionClassValues, 'none'>, Key> {}
export interface ViewTransitionNameKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ViewTransitionNameValues, 'none'>, Key> {
  /**
   * view-transition-name 的原生 match-element 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  readonly matchElement: SystemKeyword<Key, 'match-element'>;
}
export interface VisibilityKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.VisibilityValues, 'collapse' | 'hidden' | 'visible'>, Key> {}
export interface WebkitAlignContentKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitAlignContentValues,
        'baseline' | 'center' | 'end' | 'normal' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * -webkit-align-content 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * -webkit-align-content 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * -webkit-align-content 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly spaceAround: SystemKeyword<Key, 'space-around'>;
  /**
   * -webkit-align-content 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly spaceBetween: SystemKeyword<Key, 'space-between'>;
  /**
   * -webkit-align-content 的原生 space-evenly 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly spaceEvenly: SystemKeyword<Key, 'space-evenly'>;
}
export interface WebkitAlignItemsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitAlignItemsValues,
        'baseline' | 'center' | 'end' | 'normal' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * 对锚点定位的元素，沿块方向与关联锚点的中心对齐；需同时具有有效的锚点定位关系。
   */
  readonly anchorCenter: SystemKeyword<Key, 'anchor-center'>;
  /**
   * 在 Flex 中按交叉轴结束侧对齐。
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * 在 Flex 中按交叉轴起始侧对齐；交叉轴方向受换行方式影响。
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * 按项目自身书写方向的结束侧对齐；不同于总按容器方向计算的 end。
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * 按项目自身书写方向的起始侧对齐；项目与容器书写方向不同时，结果可能不同于 start。
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
}
export interface WebkitAlignSelfKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitAlignSelfValues,
        'auto' | 'baseline' | 'center' | 'end' | 'normal' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * -webkit-align-self 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly anchorCenter: SystemKeyword<Key, 'anchor-center'>;
  /**
   * -webkit-align-self 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * -webkit-align-self 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * -webkit-align-self 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly selfEnd: SystemKeyword<Key, 'self-end'>;
  /**
   * -webkit-align-self 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly selfStart: SystemKeyword<Key, 'self-start'>;
}
export interface WebkitAnimationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitAnimationValues,
        | 'alternate'
        | 'auto'
        | 'backwards'
        | 'both'
        | 'ease'
        | 'forwards'
        | 'infinite'
        | 'linear'
        | 'none'
        | 'normal'
        | 'paused'
        | 'reverse'
        | 'running'
      >,
      Key
    > {
  /**
   * -webkit-animation 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly alternateReverse: SystemKeyword<Key, 'alternate-reverse'>;
  /**
   * -webkit-animation 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -webkit-animation 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -webkit-animation 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -webkit-animation 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -webkit-animation 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface WebkitAnimationDelayKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitAnimationDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitAnimationDirectionValues, 'alternate' | 'normal' | 'reverse'>,
      Key
    > {
  /**
   * -webkit-animation-direction 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  readonly alternateReverse: SystemKeyword<Key, 'alternate-reverse'>;
}
export interface WebkitAnimationDurationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitAnimationDurationValues, 'auto'>, Key> {}
export interface WebkitAnimationFillModeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitAnimationFillModeValues, 'backwards' | 'both' | 'forwards' | 'none'>,
      Key
    > {}
export interface WebkitAnimationIterationCountKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitAnimationIterationCountValues, 'infinite'>, Key> {}
export interface WebkitAnimationNameKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitAnimationNameValues, 'none'>, Key> {}
export interface WebkitAnimationPlayStateKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitAnimationPlayStateValues, 'paused' | 'running'>, Key> {}
export interface WebkitAnimationTimingFunctionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitAnimationTimingFunctionValues, 'ease' | 'linear'>, Key> {
  /**
   * -webkit-animation-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -webkit-animation-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -webkit-animation-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -webkit-animation-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -webkit-animation-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface WebkitAppearanceKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitAppearanceValues,
        | 'button'
        | 'caret'
        | 'checkbox'
        | 'listbox'
        | 'listitem'
        | 'menulist'
        | 'meter'
        | 'none'
        | 'radio'
        | 'searchfield'
        | 'textarea'
        | 'textfield'
      >,
      Key
    > {
  /**
   * -webkit-appearance 的原生 -apple-pay-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly ApplePayButton: SystemKeyword<Key, '-apple-pay-button'>;
  /**
   * -webkit-appearance 的原生 button-bevel 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly buttonBevel: SystemKeyword<Key, 'button-bevel'>;
  /**
   * -webkit-appearance 的原生 default-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly defaultButton: SystemKeyword<Key, 'default-button'>;
  /**
   * -webkit-appearance 的原生 inner-spin-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly innerSpinButton: SystemKeyword<Key, 'inner-spin-button'>;
  /**
   * -webkit-appearance 的原生 media-controls-background 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaControlsBackground: SystemKeyword<Key, 'media-controls-background'>;
  /**
   * -webkit-appearance 的原生 media-controls-fullscreen-background 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaControlsFullscreenBackground: SystemKeyword<
    Key,
    'media-controls-fullscreen-background'
  >;
  /**
   * -webkit-appearance 的原生 media-current-time-display 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaCurrentTimeDisplay: SystemKeyword<Key, 'media-current-time-display'>;
  /**
   * -webkit-appearance 的原生 media-enter-fullscreen-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaEnterFullscreenButton: SystemKeyword<Key, 'media-enter-fullscreen-button'>;
  /**
   * -webkit-appearance 的原生 media-exit-fullscreen-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaExitFullscreenButton: SystemKeyword<Key, 'media-exit-fullscreen-button'>;
  /**
   * -webkit-appearance 的原生 media-fullscreen-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaFullscreenButton: SystemKeyword<Key, 'media-fullscreen-button'>;
  /**
   * -webkit-appearance 的原生 media-mute-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaMuteButton: SystemKeyword<Key, 'media-mute-button'>;
  /**
   * -webkit-appearance 的原生 media-overlay-play-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaOverlayPlayButton: SystemKeyword<Key, 'media-overlay-play-button'>;
  /**
   * -webkit-appearance 的原生 media-play-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaPlayButton: SystemKeyword<Key, 'media-play-button'>;
  /**
   * -webkit-appearance 的原生 media-seek-back-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaSeekBackButton: SystemKeyword<Key, 'media-seek-back-button'>;
  /**
   * -webkit-appearance 的原生 media-seek-forward-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaSeekForwardButton: SystemKeyword<Key, 'media-seek-forward-button'>;
  /**
   * -webkit-appearance 的原生 media-slider 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaSlider: SystemKeyword<Key, 'media-slider'>;
  /**
   * -webkit-appearance 的原生 media-sliderthumb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaSliderthumb: SystemKeyword<Key, 'media-sliderthumb'>;
  /**
   * -webkit-appearance 的原生 media-time-remaining-display 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaTimeRemainingDisplay: SystemKeyword<Key, 'media-time-remaining-display'>;
  /**
   * -webkit-appearance 的原生 media-toggle-closed-captions-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaToggleClosedCaptionsButton: SystemKeyword<
    Key,
    'media-toggle-closed-captions-button'
  >;
  /**
   * -webkit-appearance 的原生 media-volume-slider 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaVolumeSlider: SystemKeyword<Key, 'media-volume-slider'>;
  /**
   * -webkit-appearance 的原生 media-volume-slider-container 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaVolumeSliderContainer: SystemKeyword<Key, 'media-volume-slider-container'>;
  /**
   * -webkit-appearance 的原生 media-volume-sliderthumb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly mediaVolumeSliderthumb: SystemKeyword<Key, 'media-volume-sliderthumb'>;
  /**
   * -webkit-appearance 的原生 menulist-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly menulistButton: SystemKeyword<Key, 'menulist-button'>;
  /**
   * -webkit-appearance 的原生 menulist-text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly menulistText: SystemKeyword<Key, 'menulist-text'>;
  /**
   * -webkit-appearance 的原生 menulist-textfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly menulistTextfield: SystemKeyword<Key, 'menulist-textfield'>;
  /**
   * -webkit-appearance 的原生 progress-bar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly progressBar: SystemKeyword<Key, 'progress-bar'>;
  /**
   * -webkit-appearance 的原生 progress-bar-value 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly progressBarValue: SystemKeyword<Key, 'progress-bar-value'>;
  /**
   * -webkit-appearance 的原生 push-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly pushButton: SystemKeyword<Key, 'push-button'>;
  /**
   * -webkit-appearance 的原生 searchfield-cancel-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly searchfieldCancelButton: SystemKeyword<Key, 'searchfield-cancel-button'>;
  /**
   * -webkit-appearance 的原生 searchfield-decoration 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly searchfieldDecoration: SystemKeyword<Key, 'searchfield-decoration'>;
  /**
   * -webkit-appearance 的原生 searchfield-results-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly searchfieldResultsButton: SystemKeyword<Key, 'searchfield-results-button'>;
  /**
   * -webkit-appearance 的原生 searchfield-results-decoration 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly searchfieldResultsDecoration: SystemKeyword<Key, 'searchfield-results-decoration'>;
  /**
   * -webkit-appearance 的原生 slider-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly sliderHorizontal: SystemKeyword<Key, 'slider-horizontal'>;
  /**
   * -webkit-appearance 的原生 slider-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly sliderVertical: SystemKeyword<Key, 'slider-vertical'>;
  /**
   * -webkit-appearance 的原生 sliderthumb-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly sliderthumbHorizontal: SystemKeyword<Key, 'sliderthumb-horizontal'>;
  /**
   * -webkit-appearance 的原生 sliderthumb-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly sliderthumbVertical: SystemKeyword<Key, 'sliderthumb-vertical'>;
  /**
   * -webkit-appearance 的原生 square-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly squareButton: SystemKeyword<Key, 'square-button'>;
}
export interface WebkitBackdropFilterKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitBackdropFilterValues, 'none'>, Key> {}
export interface WebkitBackfaceVisibilityKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitBackfaceVisibilityValues, 'hidden' | 'visible'>, Key> {}
export interface WebkitBackgroundClipKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitBackgroundClipValues, 'text'>, Key> {
  /**
   * -webkit-background-clip 的原生 border-area 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  readonly borderArea: SystemKeyword<Key, 'border-area'>;
  /**
   * -webkit-background-clip 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * -webkit-background-clip 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * -webkit-background-clip 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
}
export interface WebkitBackgroundOriginKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {
  /**
   * -webkit-background-origin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * -webkit-background-origin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * -webkit-background-origin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
}
export interface WebkitBackgroundSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitBackgroundSizeValues, 'auto' | 'contain' | 'cover'>, Key> {}
export interface WebkitBorderBeforeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitBorderBeforeValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface WebkitBorderBeforeColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitBorderBeforeColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface WebkitBorderBeforeStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitBorderBeforeStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface WebkitBorderBeforeWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitBorderBeforeWidthValues, 'medium' | 'thick' | 'thin'>,
      Key
    > {}
export interface WebkitBorderBottomLeftRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitBorderBottomRightRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitBorderImageKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitBorderImageValues, 'none' | 'repeat' | 'round' | 'space' | 'stretch'>,
      Key
    > {}
export interface WebkitBorderImageSliceKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitBorderRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitBorderTopLeftRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitBorderTopRightRadiusKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitBoxAlignKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitBoxAlignValues, 'baseline' | 'center' | 'end' | 'start' | 'stretch'>,
      Key
    > {}
export interface WebkitBoxDecorationBreakKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitBoxDecorationBreakValues, 'clone' | 'slice'>, Key> {}
export interface WebkitBoxDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitBoxDirectionValues, 'normal' | 'reverse'>, Key> {}
export interface WebkitBoxFlexKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface WebkitBoxFlexGroupKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitBoxLinesKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitBoxLinesValues, 'multiple' | 'single'>, Key> {}
export interface WebkitBoxOrdinalGroupKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitBoxOrientKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitBoxOrientValues, 'horizontal' | 'vertical'>, Key> {
  /**
   * -webkit-box-orient 的原生 block-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  readonly blockAxis: SystemKeyword<Key, 'block-axis'>;
  /**
   * -webkit-box-orient 的原生 inline-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  readonly inlineAxis: SystemKeyword<Key, 'inline-axis'>;
}
export interface WebkitBoxPackKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitBoxPackValues, 'center' | 'end' | 'justify' | 'start'>,
      Key
    > {}
export interface WebkitBoxReflectKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitBoxReflectValues, 'above' | 'below' | 'left' | 'right'>,
      Key
    > {}
export interface WebkitBoxShadowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitBoxShadowValues, 'none'>, Key> {}
export interface WebkitBoxSizingKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * 指定尺寸包含内容、内边距和边框，但不包含外边距。
   *
   * 区别：content-box 在声明宽高之外再加内边距和边框。
   *
   * 适用场景：希望组件的指定宽高包含内边距和边框时。
   *
   * 仍不包含 margin；最小/最大尺寸和布局约束仍参与计算。
   *
   * @example
   * s.boxSizing("border-box").width("20rem").padding("1rem")
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * 指定尺寸仅计算内容盒，内边距和边框额外增加外部尺寸。
   *
   * 适用场景：希望明确指定纯内容区尺寸时。
   *
   * @example
   * s.boxSizing("content-box").width("100px").padding("10px")
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
}
export interface WebkitClipPathKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.WebkitClipPathValues, 'none'>, Key> {
  /**
   * -webkit-clip-path 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * -webkit-clip-path 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * -webkit-clip-path 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * -webkit-clip-path 的原生 margin-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly marginBox: SystemKeyword<Key, 'margin-box'>;
  /**
   * -webkit-clip-path 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * -webkit-clip-path 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * -webkit-clip-path 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface WebkitColumnCountKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitColumnCountValues, 'auto'>, Key> {}
export interface WebkitColumnFillKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitColumnFillValues, 'auto' | 'balance'>, Key> {}
export interface WebkitColumnRuleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitColumnRuleValues,
        | 'currentColor'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'medium'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
        | 'thick'
        | 'thin'
        | 'transparent'
      >,
      Key
    > {}
export interface WebkitColumnRuleColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitColumnRuleColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface WebkitColumnRuleStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitColumnRuleStyleValues,
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'hidden'
        | 'inset'
        | 'none'
        | 'outset'
        | 'ridge'
        | 'solid'
      >,
      Key
    > {}
export interface WebkitColumnRuleWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitColumnRuleWidthValues, 'medium' | 'thick' | 'thin'>, Key> {}
export interface WebkitColumnsKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.WebkitColumnsValues, 'auto'>, Key> {}
export interface WebkitColumnSpanKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitColumnSpanValues, 'all' | 'none'>, Key> {}
export interface WebkitColumnWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitColumnWidthValues, 'auto'>, Key> {}
export interface WebkitFilterKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.WebkitFilterValues, 'none'>, Key> {}
export interface WebkitFlexKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitFlexValues, 'auto' | 'content' | 'none'>, Key> {
  /**
   * -webkit-flex 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * -webkit-flex 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * -webkit-flex 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface WebkitFlexBasisKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitFlexBasisValues, 'auto' | 'content'>, Key> {
  /**
   * -webkit-flex-basis 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * -webkit-flex-basis 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * -webkit-flex-basis 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * -webkit-flex-basis 的原生 -webkit-auto 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly WebkitAuto: SystemKeyword<Key, '-webkit-auto'>;
  /**
   * -webkit-flex-basis 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * -webkit-flex-basis 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * -webkit-flex-basis 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface WebkitFlexDirectionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitFlexDirectionValues, 'column' | 'row'>, Key> {
  /**
   * 反转块方向的视觉排列，不改变 DOM 顺序。
   */
  readonly columnReverse: SystemKeyword<Key, 'column-reverse'>;
  /**
   * 反转行内方向的视觉排列，不改变 DOM 顺序。
   */
  readonly rowReverse: SystemKeyword<Key, 'row-reverse'>;
}
export interface WebkitFlexFlowKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitFlexFlowValues, 'column' | 'nowrap' | 'row' | 'wrap'>,
      Key
    > {
  /**
   * -webkit-flex-flow 的原生 column-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly columnReverse: SystemKeyword<Key, 'column-reverse'>;
  /**
   * -webkit-flex-flow 的原生 row-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly rowReverse: SystemKeyword<Key, 'row-reverse'>;
  /**
   * -webkit-flex-flow 的原生 wrap-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly wrapReverse: SystemKeyword<Key, 'wrap-reverse'>;
}
export interface WebkitFlexGrowKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface WebkitFlexShrinkKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface WebkitFlexWrapKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitFlexWrapValues, 'nowrap' | 'wrap'>, Key> {
  /**
   * 允许换行并反转交叉轴上各行的排列方向。
   */
  readonly wrapReverse: SystemKeyword<Key, 'wrap-reverse'>;
}
export interface WebkitFontFeatureSettingsKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitFontFeatureSettingsValues, 'normal'>, Key> {}
export interface WebkitFontKerningKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitFontKerningValues, 'auto' | 'none' | 'normal'>, Key> {}
export interface WebkitFontSmoothingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitFontSmoothingValues,
        'always' | 'auto' | 'large' | 'medium' | 'never' | 'small'
      >,
      Key
    > {
  /**
   * -webkit-font-smoothing 的原生 x-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly xLarge: SystemKeyword<Key, 'x-large'>;
  /**
   * -webkit-font-smoothing 的原生 x-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly xSmall: SystemKeyword<Key, 'x-small'>;
  /**
   * -webkit-font-smoothing 的原生 xx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly xxLarge: SystemKeyword<Key, 'xx-large'>;
  /**
   * -webkit-font-smoothing 的原生 xx-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly xxSmall: SystemKeyword<Key, 'xx-small'>;
  /**
   * -webkit-font-smoothing 的原生 xxx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly xxxLarge: SystemKeyword<Key, 'xxx-large'>;
}
export interface WebkitFontVariantLigaturesKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitFontVariantLigaturesValues, 'contextual' | 'none' | 'normal'>,
      Key
    > {
  /**
   * -webkit-font-variant-ligatures 的原生 common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly commonLigatures: SystemKeyword<Key, 'common-ligatures'>;
  /**
   * -webkit-font-variant-ligatures 的原生 discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly discretionaryLigatures: SystemKeyword<Key, 'discretionary-ligatures'>;
  /**
   * -webkit-font-variant-ligatures 的原生 historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly historicalLigatures: SystemKeyword<Key, 'historical-ligatures'>;
  /**
   * -webkit-font-variant-ligatures 的原生 no-common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly noCommonLigatures: SystemKeyword<Key, 'no-common-ligatures'>;
  /**
   * -webkit-font-variant-ligatures 的原生 no-contextual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly noContextual: SystemKeyword<Key, 'no-contextual'>;
  /**
   * -webkit-font-variant-ligatures 的原生 no-discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly noDiscretionaryLigatures: SystemKeyword<Key, 'no-discretionary-ligatures'>;
  /**
   * -webkit-font-variant-ligatures 的原生 no-historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly noHistoricalLigatures: SystemKeyword<Key, 'no-historical-ligatures'>;
}
export interface WebkitHyphenateCharacterKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitHyphenateCharacterValues, 'auto'>, Key> {}
export interface WebkitHyphensKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitHyphensValues, 'auto' | 'manual' | 'none'>, Key> {}
export interface WebkitInitialLetterKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitInitialLetterValues, 'normal'>, Key> {}
export interface WebkitJustifyContentKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitJustifyContentValues,
        'center' | 'end' | 'left' | 'normal' | 'right' | 'start' | 'stretch'
      >,
      Key
    > {
  /**
   * Flex 内容靠主轴终点排列。
   */
  readonly flexEnd: SystemKeyword<Key, 'flex-end'>;
  /**
   * Flex 内容靠主轴起点排列；起点受 flex-direction 影响。
   */
  readonly flexStart: SystemKeyword<Key, 'flex-start'>;
  /**
   * 每个项目两侧分配相等空间，容器边缘的空间是相邻项目间的一半。
   */
  readonly spaceAround: SystemKeyword<Key, 'space-around'>;
  /**
   * 首尾项目贴两端，剩余空间等分到相邻项目之间。
   *
   * 区别：space-evenly 在两端也保留等量空间；space-around 的边缘空间只有项目之间的一半。
   *
   * 适用场景：工具栏左侧标题和右侧操作分居两端。
   *
   * 只有一个项目时靠起始侧，不会自动居中。
   *
   * @example
   * s.display("flex").justifyContent("space-between").alignItems("center")
   */
  readonly spaceBetween: SystemKeyword<Key, 'space-between'>;
  /**
   * 容器两端和相邻项目之间分配相等空间。
   *
   * 适用场景：希望容器两端和项目之间空隙一致的导航或操作组。
   *
   * @example
   * s.display("flex").justifyContent("space-evenly")
   */
  readonly spaceEvenly: SystemKeyword<Key, 'space-evenly'>;
}
export interface WebkitLineBreakKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitLineBreakValues, 'anywhere' | 'auto' | 'loose' | 'normal' | 'strict'>,
      Key
    > {}
export interface WebkitLineClampKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitLineClampValues, 'none'>, Key> {}
export interface WebkitLogicalHeightKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitLogicalHeightValues, 'auto'>, Key> {
  /**
   * -webkit-logical-height 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * -webkit-logical-height 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * -webkit-logical-height 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * -webkit-logical-height 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * -webkit-logical-height 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * -webkit-logical-height 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface WebkitLogicalWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitLogicalWidthValues, 'auto'>, Key> {
  /**
   * -webkit-logical-width 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * -webkit-logical-width 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * -webkit-logical-width 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * -webkit-logical-width 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly WebkitFillAvailable: SystemKeyword<Key, '-webkit-fill-available'>;
  /**
   * -webkit-logical-width 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * -webkit-logical-width 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * -webkit-logical-width 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface WebkitMarginEndKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMarginEndValues, 'auto'>, Key> {}
export interface WebkitMarginStartKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMarginStartValues, 'auto'>, Key> {}
export interface WebkitMaskKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitMaskValues,
        | 'border'
        | 'bottom'
        | 'center'
        | 'content'
        | 'left'
        | 'none'
        | 'padding'
        | 'repeat'
        | 'right'
        | 'round'
        | 'space'
        | 'text'
        | 'top'
      >,
      Key
    > {
  /**
   * -webkit-mask 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * -webkit-mask 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * -webkit-mask 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly noRepeat: SystemKeyword<Key, 'no-repeat'>;
  /**
   * -webkit-mask 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * -webkit-mask 的原生 repeat-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly repeatX: SystemKeyword<Key, 'repeat-x'>;
  /**
   * -webkit-mask 的原生 repeat-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly repeatY: SystemKeyword<Key, 'repeat-y'>;
}
export interface WebkitMaskAttachmentKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskAttachmentValues, 'fixed' | 'local' | 'scroll'>, Key> {}
export interface WebkitMaskBoxImageKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitMaskBoxImageValues,
        'alpha' | 'luminance' | 'none' | 'repeat' | 'round' | 'space' | 'stretch'
      >,
      Key
    > {}
export interface WebkitMaskBoxImageOutsetKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitMaskBoxImageRepeatKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitMaskBoxImageRepeatValues, 'repeat' | 'round' | 'space' | 'stretch'>,
      Key
    > {}
export interface WebkitMaskBoxImageSliceKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitMaskBoxImageSourceKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskBoxImageSourceValues, 'none'>, Key> {}
export interface WebkitMaskBoxImageWidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskBoxImageWidthValues, 'auto'>, Key> {}
export interface WebkitMaskClipKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitMaskClipValues, 'border' | 'content' | 'padding' | 'text'>,
      Key
    > {
  /**
   * -webkit-mask-clip 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * -webkit-mask-clip 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * -webkit-mask-clip 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * -webkit-mask-clip 的原生 no-clip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly noClip: SystemKeyword<Key, 'no-clip'>;
  /**
   * -webkit-mask-clip 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * -webkit-mask-clip 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * -webkit-mask-clip 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface WebkitMaskCompositeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskCompositeValues, 'clear' | 'copy' | 'xor'>, Key> {
  /**
   * -webkit-mask-composite 的原生 destination-atop 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly destinationAtop: SystemKeyword<Key, 'destination-atop'>;
  /**
   * -webkit-mask-composite 的原生 destination-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly destinationIn: SystemKeyword<Key, 'destination-in'>;
  /**
   * -webkit-mask-composite 的原生 destination-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly destinationOut: SystemKeyword<Key, 'destination-out'>;
  /**
   * -webkit-mask-composite 的原生 destination-over 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly destinationOver: SystemKeyword<Key, 'destination-over'>;
  /**
   * -webkit-mask-composite 的原生 source-atop 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly sourceAtop: SystemKeyword<Key, 'source-atop'>;
  /**
   * -webkit-mask-composite 的原生 source-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly sourceIn: SystemKeyword<Key, 'source-in'>;
  /**
   * -webkit-mask-composite 的原生 source-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly sourceOut: SystemKeyword<Key, 'source-out'>;
  /**
   * -webkit-mask-composite 的原生 source-over 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly sourceOver: SystemKeyword<Key, 'source-over'>;
}
export interface WebkitMaskImageKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskImageValues, 'none'>, Key> {}
export interface WebkitMaskOriginKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskOriginValues, 'border' | 'content' | 'padding'>, Key> {
  /**
   * -webkit-mask-origin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly borderBox: SystemKeyword<Key, 'border-box'>;
  /**
   * -webkit-mask-origin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly contentBox: SystemKeyword<Key, 'content-box'>;
  /**
   * -webkit-mask-origin 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly fillBox: SystemKeyword<Key, 'fill-box'>;
  /**
   * -webkit-mask-origin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly paddingBox: SystemKeyword<Key, 'padding-box'>;
  /**
   * -webkit-mask-origin 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly strokeBox: SystemKeyword<Key, 'stroke-box'>;
  /**
   * -webkit-mask-origin 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly viewBox: SystemKeyword<Key, 'view-box'>;
}
export interface WebkitMaskPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitMaskPositionValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface WebkitMaskPositionXKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskPositionXValues, 'center' | 'left' | 'right'>, Key> {}
export interface WebkitMaskPositionYKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskPositionYValues, 'bottom' | 'center' | 'top'>, Key> {}
export interface WebkitMaskRepeatKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskRepeatValues, 'repeat' | 'round' | 'space'>, Key> {
  /**
   * -webkit-mask-repeat 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly noRepeat: SystemKeyword<Key, 'no-repeat'>;
  /**
   * -webkit-mask-repeat 的原生 repeat-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly repeatX: SystemKeyword<Key, 'repeat-x'>;
  /**
   * -webkit-mask-repeat 的原生 repeat-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly repeatY: SystemKeyword<Key, 'repeat-y'>;
}
export interface WebkitMaskRepeatXKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskRepeatXValues, 'repeat' | 'round' | 'space'>, Key> {
  /**
   * -webkit-mask-repeat-x 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  readonly noRepeat: SystemKeyword<Key, 'no-repeat'>;
}
export interface WebkitMaskRepeatYKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskRepeatYValues, 'repeat' | 'round' | 'space'>, Key> {
  /**
   * -webkit-mask-repeat-y 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  readonly noRepeat: SystemKeyword<Key, 'no-repeat'>;
}
export interface WebkitMaskSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaskSizeValues, 'auto' | 'contain' | 'cover'>, Key> {}
export interface WebkitMaxInlineSizeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitMaxInlineSizeValues, 'none'>, Key> {
  /**
   * -webkit-max-inline-size 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * -webkit-max-inline-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * -webkit-max-inline-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * -webkit-max-inline-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  readonly WebkitFillAvailable: SystemKeyword<Key, '-webkit-fill-available'>;
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸上限。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸上限；这不是把首选尺寸直接设为该值。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 以内容的最小内部尺寸作为尺寸上限；文本按允许的换行机会收缩，但更大的最小尺寸约束仍优先。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
}
export interface WebkitOrderKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface WebkitOverflowScrollingKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitOverflowScrollingValues, 'auto' | 'touch'>, Key> {}
export interface WebkitPaddingEndKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface WebkitPaddingStartKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitPerspectiveKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitPerspectiveValues, 'none'>, Key> {}
export interface WebkitPerspectiveOriginKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitPerspectiveOriginValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface WebkitPrintColorAdjustKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitPrintColorAdjustValues, 'economy' | 'exact'>, Key> {}
export interface WebkitRubyPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitRubyPositionValues, 'alternate' | 'over' | 'under'>, Key> {
  /**
   * -webkit-ruby-position 的原生 inter-character 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  readonly interCharacter: SystemKeyword<Key, 'inter-character'>;
}
export interface WebkitScrollSnapTypeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitScrollSnapTypeValues, 'block' | 'both' | 'inline' | 'none' | 'x' | 'y'>,
      Key
    > {}
export interface WebkitShapeMarginKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface WebkitTapHighlightColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTapHighlightColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface WebkitTextCombineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitTextCombineValues, 'all' | 'digits' | 'none'>, Key> {}
export interface WebkitTextDecorationColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTextDecorationColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface WebkitTextDecorationLineKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTextDecorationLineValues, 'blink' | 'none' | 'overline' | 'underline'>,
      Key
    > {
  /**
   * -webkit-text-decoration-line 的原生 grammar-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly grammarError: SystemKeyword<Key, 'grammar-error'>;
  /**
   * -webkit-text-decoration-line 的原生 line-through 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly lineThrough: SystemKeyword<Key, 'line-through'>;
  /**
   * -webkit-text-decoration-line 的原生 spelling-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly spellingError: SystemKeyword<Key, 'spelling-error'>;
}
export interface WebkitTextDecorationSkipKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTextDecorationSkipValues, 'edges' | 'none' | 'objects' | 'spaces'>,
      Key
    > {
  /**
   * -webkit-text-decoration-skip 的原生 box-decoration 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly boxDecoration: SystemKeyword<Key, 'box-decoration'>;
  /**
   * -webkit-text-decoration-skip 的原生 leading-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly leadingSpaces: SystemKeyword<Key, 'leading-spaces'>;
  /**
   * -webkit-text-decoration-skip 的原生 trailing-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly trailingSpaces: SystemKeyword<Key, 'trailing-spaces'>;
}
export interface WebkitTextDecorationStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitTextDecorationStyleValues,
        'dashed' | 'dotted' | 'double' | 'solid' | 'wavy'
      >,
      Key
    > {}
export interface WebkitTextEmphasisKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitTextEmphasisValues,
        | 'circle'
        | 'currentColor'
        | 'dot'
        | 'filled'
        | 'none'
        | 'open'
        | 'sesame'
        | 'transparent'
        | 'triangle'
      >,
      Key
    > {
  /**
   * CSS 颜色关键字 double-circle；系统颜色会随用户环境和配色设置变化。
   */
  readonly doubleCircle: SystemKeyword<Key, 'double-circle'>;
}
export interface WebkitTextEmphasisColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTextEmphasisColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface WebkitTextEmphasisPositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTextEmphasisPositionValues, 'auto' | 'over' | 'under'>,
      Key
    > {}
export interface WebkitTextEmphasisStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<
        Values.WebkitTextEmphasisStyleValues,
        'circle' | 'dot' | 'filled' | 'none' | 'open' | 'sesame' | 'triangle'
      >,
      Key
    > {
  /**
   * -webkit-text-emphasis-style 的原生 double-circle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  readonly doubleCircle: SystemKeyword<Key, 'double-circle'>;
}
export interface WebkitTextFillColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTextFillColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface WebkitTextOrientationKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTextOrientationValues, 'mixed' | 'sideways' | 'upright'>,
      Key
    > {
  /**
   * -webkit-text-orientation 的原生 sideways-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  readonly sidewaysRight: SystemKeyword<Key, 'sideways-right'>;
}
export interface WebkitTextSizeAdjustKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitTextSizeAdjustValues, 'auto' | 'none'>, Key> {}
export interface WebkitTextStrokeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitTextStrokeValues, 'currentColor' | 'transparent'>, Key> {}
export interface WebkitTextStrokeColorKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    NamedColorKeywords<Key>,
    SystemColorKeywords<Key>,
    DeprecatedSystemColorKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTextStrokeColorValues, 'currentColor' | 'transparent'>,
      Key
    > {}
export interface WebkitTextStrokeWidthKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitTextUnderlinePositionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTextUnderlinePositionValues, 'auto' | 'left' | 'right' | 'under'>,
      Key
    > {
  /**
   * -webkit-text-underline-position 的原生 from-font 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  readonly fromFont: SystemKeyword<Key, 'from-font'>;
}
export interface WebkitTouchCalloutKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitTouchCalloutValues, 'default' | 'none'>, Key> {}
export interface WebkitTransformKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitTransformValues, 'none'>, Key> {}
export interface WebkitTransformOriginKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTransformOriginValues, 'bottom' | 'center' | 'left' | 'right' | 'top'>,
      Key
    > {}
export interface WebkitTransformStyleKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitTransformStyleValues, 'flat'>, Key> {
  /**
   * 让子元素继续处于三维空间，适合多层三维场景。
   *
   * 区别：flat 会将后代展平到当前元素的平面；preserve-3d 本身不提供透视效果。
   *
   * 该属性不继承，需要在参与三维层级的中间元素上设置；opacity 小于 1、非 none 的 filter 等分组效果仍可能强制展平。
   *
   * @example
   * s.transformStyle("preserve-3d")
   */
  readonly preserve3d: SystemKeyword<Key, 'preserve-3d'>;
}
export interface WebkitTransitionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WebkitTransitionValues, 'all' | 'ease' | 'linear' | 'none' | 'normal'>,
      Key
    > {
  /**
   * -webkit-transition 的原生 allow-discrete 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly allowDiscrete: SystemKeyword<Key, 'allow-discrete'>;
  /**
   * -webkit-transition 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -webkit-transition 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -webkit-transition 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -webkit-transition 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -webkit-transition 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface WebkitTransitionDelayKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitTransitionDurationKeywords<
  Key extends PropertyName,
> extends CssWideKeywords<Key> {}
export interface WebkitTransitionPropertyKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitTransitionPropertyValues, 'all' | 'none'>, Key> {}
export interface WebkitTransitionTimingFunctionKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitTransitionTimingFunctionValues, 'ease' | 'linear'>, Key> {
  /**
   * -webkit-transition-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly easeIn: SystemKeyword<Key, 'ease-in'>;
  /**
   * -webkit-transition-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly easeInOut: SystemKeyword<Key, 'ease-in-out'>;
  /**
   * -webkit-transition-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly easeOut: SystemKeyword<Key, 'ease-out'>;
  /**
   * -webkit-transition-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly stepEnd: SystemKeyword<Key, 'step-end'>;
  /**
   * -webkit-transition-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly stepStart: SystemKeyword<Key, 'step-start'>;
}
export interface WebkitUserModifyKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * -webkit-user-modify 的原生 read-only 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  readonly readOnly: SystemKeyword<Key, 'read-only'>;
  /**
   * -webkit-user-modify 的原生 read-write 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  readonly readWrite: SystemKeyword<Key, 'read-write'>;
  /**
   * -webkit-user-modify 的原生 read-write-plaintext-only 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  readonly readWritePlaintextOnly: SystemKeyword<Key, 'read-write-plaintext-only'>;
}
export interface WebkitUserSelectKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WebkitUserSelectValues, 'all' | 'auto' | 'none' | 'text'>, Key> {}
export interface WebkitWritingModeKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * -webkit-writing-mode 的原生 horizontal-tb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly horizontalTb: SystemKeyword<Key, 'horizontal-tb'>;
  /**
   * -webkit-writing-mode 的原生 sideways-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly sidewaysLr: SystemKeyword<Key, 'sideways-lr'>;
  /**
   * -webkit-writing-mode 的原生 sideways-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly sidewaysRl: SystemKeyword<Key, 'sideways-rl'>;
  /**
   * -webkit-writing-mode 的原生 vertical-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly verticalLr: SystemKeyword<Key, 'vertical-lr'>;
  /**
   * -webkit-writing-mode 的原生 vertical-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly verticalRl: SystemKeyword<Key, 'vertical-rl'>;
}
export interface WhiteSpaceKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<
      Pick<Values.WhiteSpaceValues, 'collapse' | 'normal' | 'nowrap' | 'pre' | 'preserve' | 'wrap'>,
      Key
    > {
  /**
   * white-space 的原生 -moz-pre-wrap 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  readonly MozPreWrap: SystemKeyword<Key, '-moz-pre-wrap'>;
  /**
   * 保留空白并允许在保留的空格后换行；行末空格占据空间。
   */
  readonly breakSpaces: SystemKeyword<Key, 'break-spaces'>;
  /**
   * 折叠空格等空白但保留源换行，同时允许软换行。
   */
  readonly preLine: SystemKeyword<Key, 'pre-line'>;
  /**
   * 保留空白和源换行，同时允许软换行。
   *
   * 区别：pre 不进行普通软换行；pre-line 会折叠连续空格。
   *
   * 适用场景：需要保留用户换行和空格，同时允许适应容器宽度的文本。
   *
   * @example
   * s.whiteSpace("pre-wrap")
   */
  readonly preWrap: SystemKeyword<Key, 'pre-wrap'>;
  /**
   * 折叠连续空格但保留源换行；单独用于 white-space 时相当于 preserve-breaks wrap（pre-line）。
   */
  readonly preserveBreaks: SystemKeyword<Key, 'preserve-breaks'>;
  /**
   * 保留空格序列，把制表符和源换行转为空格；单独用于 white-space 时允许软换行。使用前核对目标浏览器对此值的支持。
   */
  readonly preserveSpaces: SystemKeyword<Key, 'preserve-spaces'>;
}
export interface WhiteSpaceCollapseKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WhiteSpaceCollapseValues, 'collapse' | 'preserve'>, Key> {
  /**
   * white-space-collapse 的原生 break-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  readonly breakSpaces: SystemKeyword<Key, 'break-spaces'>;
  /**
   * white-space-collapse 的原生 preserve-breaks 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  readonly preserveBreaks: SystemKeyword<Key, 'preserve-breaks'>;
  /**
   * white-space-collapse 的原生 preserve-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  readonly preserveSpaces: SystemKeyword<Key, 'preserve-spaces'>;
}
export interface WidowsKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface WidthKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WidthValues, 'auto' | 'intrinsic'>, Key> {
  /**
   * width 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly MozFitContent: SystemKeyword<Key, '-moz-fit-content'>;
  /**
   * width 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly MozMaxContent: SystemKeyword<Key, '-moz-max-content'>;
  /**
   * width 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly MozMinContent: SystemKeyword<Key, '-moz-min-content'>;
  /**
   * width 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly WebkitFitContent: SystemKeyword<Key, '-webkit-fit-content'>;
  /**
   * width 的原生 -webkit-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly WebkitMaxContent: SystemKeyword<Key, '-webkit-max-content'>;
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   */
  readonly fitContent: SystemKeyword<Key, 'fit-content'>;
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   */
  readonly maxContent: SystemKeyword<Key, 'max-content'>;
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   */
  readonly minContent: SystemKeyword<Key, 'min-content'>;
  /**
   * width 的原生 min-intrinsic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly minIntrinsic: SystemKeyword<Key, 'min-intrinsic'>;
}
export interface WillChangeKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.WillChangeValues, 'auto' | 'contents'>, Key> {
  /**
   * will-change 的原生 scroll-position 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  readonly scrollPosition: SystemKeyword<Key, 'scroll-position'>;
}
export interface WordBreakKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.WordBreakValues, 'normal'>, Key> {
  /**
   * word-break 的原生 auto-phrase 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  readonly autoPhrase: SystemKeyword<Key, 'auto-phrase'>;
  /**
   * 允许在更多字符间断行以防溢出，可能拆开普通单词。
   */
  readonly breakAll: SystemKeyword<Key, 'break-all'>;
  /**
   * word-break 的原生 break-word 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  readonly breakWord: SystemKeyword<Key, 'break-word'>;
  /**
   * 限制中日韩文字内部断行，其他文字仍按正常规则处理。
   */
  readonly keepAll: SystemKeyword<Key, 'keep-all'>;
}
export interface WordSpacingKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.WordSpacingValues, 'normal'>, Key> {}
export interface WordWrapKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.WordWrapValues, 'normal'>, Key> {
  /**
   * 必要时允许长文本断行，但新增断点不按 anywhere 的方式参与 min-content 计算。
   */
  readonly breakWord: SystemKeyword<Key, 'break-word'>;
}
export interface WritingModeKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {
  /**
   * writing-mode 的原生 horizontal-tb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly horizontalTb: SystemKeyword<Key, 'horizontal-tb'>;
  /**
   * writing-mode 的原生 sideways-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly sidewaysLr: SystemKeyword<Key, 'sideways-lr'>;
  /**
   * writing-mode 的原生 sideways-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly sidewaysRl: SystemKeyword<Key, 'sideways-rl'>;
  /**
   * writing-mode 的原生 vertical-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly verticalLr: SystemKeyword<Key, 'vertical-lr'>;
  /**
   * writing-mode 的原生 vertical-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly verticalRl: SystemKeyword<Key, 'vertical-rl'>;
}
export interface XKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface YKeywords<Key extends PropertyName> extends CssWideKeywords<Key> {}
export interface ZIndexKeywords<Key extends PropertyName>
  extends CssWideKeywords<Key>, SystemKeywordView<Pick<Values.ZIndexValues, 'auto'>, Key> {}
export interface ZoomKeywords<Key extends PropertyName>
  extends
    CssWideKeywords<Key>,
    SystemKeywordView<Pick<Values.ZoomValues, 'normal' | 'reset'>, Key> {}
export interface SystemViews {
  /**
   * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  readonly accentColor: AccentColorKeywords<'accentColor'>;
  /**
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly alignContent: AlignContentKeywords<'alignContent'>;
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
  readonly alignItems: AlignItemsKeywords<'alignItems'>;
  /**
   * 选择行内或 SVG 文本参与对齐时使用的基线。
   *
   * CSS 规范初始值：baseline。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly alignmentBaseline: AlignmentBaselineKeywords<'alignmentBaseline'>;
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
  readonly alignSelf: AlignSelfKeywords<'alignSelf'>;
  /**
   * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly alignTracks: AlignTracksKeywords<'alignTracks'>;
  /**
   * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。
   *
   * CSS 规范初始值：无独立的实际初始值。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  readonly all: AllKeywords<'all'>;
  /**
   * 为元素声明锚点名称，供锚点定位的元素引用。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  readonly anchorName: AnchorNameKeywords<'anchorName'>;
  /**
   * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  readonly anchorScope: AnchorScopeKeywords<'anchorScope'>;
  /**
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * CSS 规范初始值：animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly animation: AnimationKeywords<'animation'>;
  /**
   * 设置动画效果与底层属性值的替换、叠加或累积方式。
   *
   * CSS 规范初始值：replace。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  readonly animationComposition: AnimationCompositionKeywords<'animationComposition'>;
  /**
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  readonly animationDelay: AnimationDelayKeywords<'animationDelay'>;
  /**
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  readonly animationDirection: AnimationDirectionKeywords<'animationDirection'>;
  /**
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  readonly animationDuration: AnimationDurationKeywords<'animationDuration'>;
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
  readonly animationFillMode: AnimationFillModeKeywords<'animationFillMode'>;
  /**
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  readonly animationIterationCount: AnimationIterationCountKeywords<'animationIterationCount'>;
  /**
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  readonly animationName: AnimationNameKeywords<'animationName'>;
  /**
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：running。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  readonly animationPlayState: AnimationPlayStateKeywords<'animationPlayState'>;
  /**
   * 设置动画附着到时间线的起止范围。
   *
   * CSS 规范初始值：animation-range-start: normal；animation-range-end: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  readonly animationRange: AnimationRangeKeywords<'animationRange'>;
  /**
   * 设置动画在时间线上的附着范围终点。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  readonly animationRangeEnd: AnimationRangeEndKeywords<'animationRangeEnd'>;
  /**
   * 设置动画在时间线上的附着范围起点。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  readonly animationRangeStart: AnimationRangeStartKeywords<'animationRangeStart'>;
  /**
   * 选择驱动动画的时间线，例如文档时间或滚动进度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  readonly animationTimeline: AnimationTimelineKeywords<'animationTimeline'>;
  /**
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly animationTimingFunction: AnimationTimingFunctionKeywords<'animationTimingFunction'>;
  /**
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly appearance: AppearanceKeywords<'appearance'>;
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
  readonly aspectRatio: AspectRatioKeywords<'aspectRatio'>;
  /**
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  readonly backdropFilter: BackdropFilterKeywords<'backdropFilter'>;
  /**
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  readonly backfaceVisibility: BackfaceVisibilityKeywords<'backfaceVisibility'>;
  /**
   * 集中设置背景颜色、图像、位置、尺寸、重复及绘制区域。
   *
   * CSS 规范初始值：background-image: none；background-position: 0% 0%；background-size: auto auto；background-repeat: repeat；background-origin: padding-box；background-clip: border-box；background-attachment: scroll；background-color: transparent。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  readonly background: BackgroundKeywords<'background'>;
  /**
   * 设置背景图像相对于视口、元素或局部滚动内容的固定方式。
   *
   * CSS 规范初始值：scroll。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  readonly backgroundAttachment: BackgroundAttachmentKeywords<'backgroundAttachment'>;
  /**
   * 设置背景图层彼此之间以及与背景色之间的混合模式。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly backgroundBlendMode: BackgroundBlendModeKeywords<'backgroundBlendMode'>;
  /**
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：border-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  readonly backgroundClip: BackgroundClipKeywords<'backgroundClip'>;
  /**
   * 设置元素背景颜色，位于背景图像下方。
   *
   * CSS 规范初始值：transparent。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  readonly backgroundColor: BackgroundColorKeywords<'backgroundColor'>;
  /**
   * 设置一个或多个背景图像或渐变图层。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  readonly backgroundImage: BackgroundImageKeywords<'backgroundImage'>;
  /**
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：padding-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  readonly backgroundOrigin: BackgroundOriginKeywords<'backgroundOrigin'>;
  /**
   * 设置背景图像在定位区域内的位置。
   *
   * CSS 规范初始值：0% 0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  readonly backgroundPosition: BackgroundPositionKeywords<'backgroundPosition'>;
  /**
   * 设置背景图像的水平位置。
   *
   * CSS 规范初始值：0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  readonly backgroundPositionX: BackgroundPositionXKeywords<'backgroundPositionX'>;
  /**
   * 设置背景图像的垂直位置。
   *
   * CSS 规范初始值：0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  readonly backgroundPositionY: BackgroundPositionYKeywords<'backgroundPositionY'>;
  /**
   * 设置背景图像在水平和垂直方向上的重复方式。
   *
   * CSS 规范初始值：repeat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly backgroundRepeat: BackgroundRepeatKeywords<'backgroundRepeat'>;
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
  readonly backgroundSize: BackgroundSizeKeywords<'backgroundSize'>;
  /**
   * 使 SVG 文本基线相对于其基准位置偏移。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  readonly baselineShift: BaselineShiftKeywords<'baselineShift'>;
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
  readonly blockSize: BlockSizeKeywords<'blockSize'>;
  /**
   * 同时设置四边边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-width: 见其子属性；border-style: 见其子属性；border-color: 见其子属性。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  readonly border: BorderKeywords<'border'>;
  /**
   * 设置逻辑块轴起始侧和结束侧的边框。
   *
   * CSS 规范初始值：border-block-width: medium；border-block-style: none；border-block-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  readonly borderBlock: BorderBlockKeywords<'borderBlock'>;
  /**
   * 设置逻辑块轴两侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  readonly borderBlockColor: BorderBlockColorKeywords<'borderBlockColor'>;
  /**
   * 设置逻辑块轴结束侧边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-top-width: medium；border-top-style: none；border-top-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  readonly borderBlockEnd: BorderBlockEndKeywords<'borderBlockEnd'>;
  /**
   * 设置逻辑块轴结束侧的边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  readonly borderBlockEndColor: BorderBlockEndColorKeywords<'borderBlockEndColor'>;
  /**
   * 设置逻辑块轴结束侧的边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly borderBlockEndStyle: BorderBlockEndStyleKeywords<'borderBlockEndStyle'>;
  /**
   * 设置逻辑块轴结束侧的边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  readonly borderBlockEndWidth: BorderBlockEndWidthKeywords<'borderBlockEndWidth'>;
  /**
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-width: 见其子属性；border-style: 见其子属性；color: canvastext。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  readonly borderBlockStart: BorderBlockStartKeywords<'borderBlockStart'>;
  /**
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  readonly borderBlockStartColor: BorderBlockStartColorKeywords<'borderBlockStartColor'>;
  /**
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly borderBlockStartStyle: BorderBlockStartStyleKeywords<'borderBlockStartStyle'>;
  /**
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  readonly borderBlockStartWidth: BorderBlockStartWidthKeywords<'borderBlockStartWidth'>;
  /**
   * 设置逻辑块轴两侧的边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly borderBlockStyle: BorderBlockStyleKeywords<'borderBlockStyle'>;
  /**
   * 设置逻辑块轴两侧的边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  readonly borderBlockWidth: BorderBlockWidthKeywords<'borderBlockWidth'>;
  /**
   * 设置下边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-bottom-width: medium；border-bottom-style: none；border-bottom-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  readonly borderBottom: BorderBottomKeywords<'borderBottom'>;
  /**
   * 设置下边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  readonly borderBottomColor: BorderBottomColorKeywords<'borderBottomColor'>;
  /**
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  readonly borderBottomLeftRadius: BorderBottomLeftRadiusKeywords<'borderBottomLeftRadius'>;
  /**
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  readonly borderBottomRightRadius: BorderBottomRightRadiusKeywords<'borderBottomRightRadius'>;
  /**
   * 设置下边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly borderBottomStyle: BorderBottomStyleKeywords<'borderBottomStyle'>;
  /**
   * 设置下边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  readonly borderBottomWidth: BorderBottomWidthKeywords<'borderBottomWidth'>;
  /**
   * 设置表格相邻单元格边框合并还是分离。
   *
   * CSS 规范初始值：separate。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  readonly borderCollapse: BorderCollapseKeywords<'borderCollapse'>;
  /**
   * 设置四边边框颜色，支持按上、右、下、左顺序简写。
   *
   * CSS 规范初始值：border-top-color: currentcolor；border-right-color: currentcolor；border-bottom-color: currentcolor；border-left-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  readonly borderColor: BorderColorKeywords<'borderColor'>;
  /**
   * 设置逻辑块轴结束侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  readonly borderEndEndRadius: BorderEndEndRadiusKeywords<'borderEndEndRadius'>;
  /**
   * 设置逻辑块轴结束侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  readonly borderEndStartRadius: BorderEndStartRadiusKeywords<'borderEndStartRadius'>;
  /**
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * CSS 规范初始值：border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  readonly borderImage: BorderImageKeywords<'borderImage'>;
  /**
   * 设置边框图像超出边框盒的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  readonly borderImageOutset: BorderImageOutsetKeywords<'borderImageOutset'>;
  /**
   * 设置边框图像切片沿边框的重复或拉伸方式。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  readonly borderImageRepeat: BorderImageRepeatKeywords<'borderImageRepeat'>;
  /**
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：100%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  readonly borderImageSlice: BorderImageSliceKeywords<'borderImageSlice'>;
  /**
   * 指定边框使用的图像或渐变。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  readonly borderImageSource: BorderImageSourceKeywords<'borderImageSource'>;
  /**
   * 设置边框图像各边的绘制宽度。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  readonly borderImageWidth: BorderImageWidthKeywords<'borderImageWidth'>;
  /**
   * 设置逻辑行内轴起始侧和结束侧的边框。
   *
   * CSS 规范初始值：border-inline-width: medium；border-inline-style: none；border-inline-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  readonly borderInline: BorderInlineKeywords<'borderInline'>;
  /**
   * 设置逻辑行内轴两侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  readonly borderInlineColor: BorderInlineColorKeywords<'borderInlineColor'>;
  /**
   * 设置逻辑行内轴结束侧边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-width: 见其子属性；border-style: 见其子属性；color: canvastext。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  readonly borderInlineEnd: BorderInlineEndKeywords<'borderInlineEnd'>;
  /**
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  readonly borderInlineEndColor: BorderInlineEndColorKeywords<'borderInlineEndColor'>;
  /**
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly borderInlineEndStyle: BorderInlineEndStyleKeywords<'borderInlineEndStyle'>;
  /**
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  readonly borderInlineEndWidth: BorderInlineEndWidthKeywords<'borderInlineEndWidth'>;
  /**
   * 设置逻辑行内轴起始侧边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-width: 见其子属性；border-style: 见其子属性；color: canvastext。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  readonly borderInlineStart: BorderInlineStartKeywords<'borderInlineStart'>;
  /**
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  readonly borderInlineStartColor: BorderInlineStartColorKeywords<'borderInlineStartColor'>;
  /**
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly borderInlineStartStyle: BorderInlineStartStyleKeywords<'borderInlineStartStyle'>;
  /**
   * 设置逻辑行内轴起始侧边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  readonly borderInlineStartWidth: BorderInlineStartWidthKeywords<'borderInlineStartWidth'>;
  /**
   * 设置逻辑行内轴两侧边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly borderInlineStyle: BorderInlineStyleKeywords<'borderInlineStyle'>;
  /**
   * 设置逻辑行内轴两侧边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  readonly borderInlineWidth: BorderInlineWidthKeywords<'borderInlineWidth'>;
  /**
   * 设置左边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-left-width: medium；border-left-style: none；border-left-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  readonly borderLeft: BorderLeftKeywords<'borderLeft'>;
  /**
   * 设置左边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  readonly borderLeftColor: BorderLeftColorKeywords<'borderLeftColor'>;
  /**
   * 设置左边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly borderLeftStyle: BorderLeftStyleKeywords<'borderLeftStyle'>;
  /**
   * 设置左边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  readonly borderLeftWidth: BorderLeftWidthKeywords<'borderLeftWidth'>;
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
  readonly borderRadius: BorderRadiusKeywords<'borderRadius'>;
  /**
   * 设置右边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-right-width: medium；border-right-style: none；border-right-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  readonly borderRight: BorderRightKeywords<'borderRight'>;
  /**
   * 设置右边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  readonly borderRightColor: BorderRightColorKeywords<'borderRightColor'>;
  /**
   * 设置右边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly borderRightStyle: BorderRightStyleKeywords<'borderRightStyle'>;
  /**
   * 设置右边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  readonly borderRightWidth: BorderRightWidthKeywords<'borderRightWidth'>;
  /**
   * 设置分离边框模型下表格单元格之间的水平和垂直间距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  readonly borderSpacing: BorderSpacingKeywords<'borderSpacing'>;
  /**
   * 设置逻辑块轴起始侧与行内轴结束侧相交角的圆角。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  readonly borderStartEndRadius: BorderStartEndRadiusKeywords<'borderStartEndRadius'>;
  /**
   * 设置逻辑块轴起始侧与行内轴起始侧相交角的圆角。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  readonly borderStartStartRadius: BorderStartStartRadiusKeywords<'borderStartStartRadius'>;
  /**
   * 设置四边边框线型。
   *
   * CSS 规范初始值：border-top-style: none；border-right-style: none；border-bottom-style: none；border-left-style: none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  readonly borderStyle: BorderStyleKeywords<'borderStyle'>;
  /**
   * 设置上边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-top-width: medium；border-top-style: none；border-top-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  readonly borderTop: BorderTopKeywords<'borderTop'>;
  /**
   * 设置上边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  readonly borderTopColor: BorderTopColorKeywords<'borderTopColor'>;
  /**
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  readonly borderTopLeftRadius: BorderTopLeftRadiusKeywords<'borderTopLeftRadius'>;
  /**
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  readonly borderTopRightRadius: BorderTopRightRadiusKeywords<'borderTopRightRadius'>;
  /**
   * 设置上边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly borderTopStyle: BorderTopStyleKeywords<'borderTopStyle'>;
  /**
   * 设置上边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  readonly borderTopWidth: BorderTopWidthKeywords<'borderTopWidth'>;
  /**
   * 设置四边边框宽度；可见边框通常还需要非 none 的线型。
   *
   * CSS 规范初始值：border-top-width: medium；border-right-width: medium；border-bottom-width: medium；border-left-width: medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  readonly borderWidth: BorderWidthKeywords<'borderWidth'>;
  /**
   * 设置定位元素相对于其定位参照的下侧偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  readonly bottom: BottomKeywords<'bottom'>;
  /**
   * 控制旧版弹性盒子项在交叉方向上的对齐，常规布局优先使用 align-items。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  readonly boxAlign: BoxAlignKeywords<'boxAlign'>;
  /**
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：slice。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  readonly boxDecorationBreak: BoxDecorationBreakKeywords<'boxDecorationBreak'>;
  /**
   * 指定旧版弹性盒的子项排列方向是否反转。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-direction
   */
  readonly boxDirection: BoxDirectionKeywords<'boxDirection'>;
  /**
   * 指定旧版弹性盒子项分配剩余空间的比例。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex
   */
  readonly boxFlex: BoxFlexKeywords<'boxFlex'>;
  /**
   * 指定旧版弹性盒子项参与弹性分配的组。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-flex-group
   */
  readonly boxFlexGroup: BoxFlexGroupKeywords<'boxFlexGroup'>;
  /**
   * 控制旧版弹性盒是否允许子项分成多行。
   *
   * CSS 规范初始值：single。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  readonly boxLines: BoxLinesKeywords<'boxLines'>;
  /**
   * 设置旧版弹性盒的子项排列组序号，现代布局使用 order。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-ordinal-group
   */
  readonly boxOrdinalGroup: BoxOrdinalGroupKeywords<'boxOrdinalGroup'>;
  /**
   * 指定旧版弹性盒的水平或垂直排列轴，现代布局使用 flex-direction。
   *
   * CSS 规范初始值：inline-axis。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  readonly boxOrient: BoxOrientKeywords<'boxOrient'>;
  /**
   * 控制旧版弹性盒在主轴方向的空余空间分配，现代布局使用 justify-content。
   *
   * CSS 规范初始值：start。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  readonly boxPack: BoxPackKeywords<'boxPack'>;
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
  readonly boxShadow: BoxShadowKeywords<'boxShadow'>;
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
  readonly boxSizing: BoxSizingKeywords<'boxSizing'>;
  /**
   * 设置元素之后的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly breakAfter: BreakAfterKeywords<'breakAfter'>;
  /**
   * 设置元素之前的分页、分栏或区域分片行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly breakBefore: BreakBeforeKeywords<'breakBefore'>;
  /**
   * 设置元素内部是否允许分页、分栏或区域分片。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  readonly breakInside: BreakInsideKeywords<'breakInside'>;
  /**
   * 设置表格标题相对于表格的放置侧。
   *
   * CSS 规范初始值：top。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  readonly captionSide: CaptionSideKeywords<'captionSide'>;
  /**
   * 集中设置文本插入光标的颜色和形状。
   *
   * CSS 规范初始值：caret-color: auto；caret-animation: auto；caret-shape: auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  readonly caret: CaretKeywords<'caret'>;
  /**
   * 设置可编辑内容中的文本插入光标颜色。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  readonly caretColor: CaretColorKeywords<'caretColor'>;
  /**
   * 设置文本插入光标的形状。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  readonly caretShape: CaretShapeKeywords<'caretShape'>;
  /**
   * 要求元素避让指定侧的前置浮动元素。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  readonly clear: ClearKeywords<'clear'>;
  /**
   * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  readonly clip: ClipKeywords<'clip'>;
  /**
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly clipPath: ClipPathKeywords<'clipPath'>;
  /**
   * 设置 SVG 裁剪路径判断内部区域所用的填充规则。
   *
   * CSS 规范初始值：nonzero。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  readonly clipRule: ClipRuleKeywords<'clipRule'>;
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
  readonly color: ColorKeywords<'color'>;
  /**
   * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。
   *
   * CSS 规范初始值：economy。不同于浏览器默认样式表。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  readonly colorAdjust: ColorAdjustKeywords<'colorAdjust'>;
  /**
   * 设置 SVG 图形颜色插值所用的色彩空间。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  readonly colorInterpolation: ColorInterpolationKeywords<'colorInterpolation'>;
  /**
   * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。
   *
   * CSS 规范初始值：linearRGB。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  readonly colorInterpolationFilters: ColorInterpolationFiltersKeywords<'colorInterpolationFilters'>;
  /**
   * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  readonly colorRendering: ColorRenderingKeywords<'colorRendering'>;
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
  readonly colorScheme: ColorSchemeKeywords<'colorScheme'>;
  /**
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  readonly columnCount: ColumnCountKeywords<'columnCount'>;
  /**
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：balance。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  readonly columnFill: ColumnFillKeywords<'columnFill'>;
  /**
   * 设置布局中相邻列之间的间距。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  readonly columnGap: ColumnGapKeywords<'columnGap'>;
  /**
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * CSS 规范初始值：column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  readonly columnRule: ColumnRuleKeywords<'columnRule'>;
  /**
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  readonly columnRuleColor: ColumnRuleColorKeywords<'columnRuleColor'>;
  /**
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly columnRuleStyle: ColumnRuleStyleKeywords<'columnRuleStyle'>;
  /**
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  readonly columnRuleWidth: ColumnRuleWidthKeywords<'columnRuleWidth'>;
  /**
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * CSS 规范初始值：column-width: auto；column-count: auto；column-height: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  readonly columns: ColumnsKeywords<'columns'>;
  /**
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  readonly columnSpan: ColumnSpanKeywords<'columnSpan'>;
  /**
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  readonly columnWidth: ColumnWidthKeywords<'columnWidth'>;
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
  readonly contain: ContainKeywords<'contain'>;
  /**
   * 同时声明查询容器的名称和类型。
   *
   * CSS 规范初始值：container-name: none；container-type: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  readonly container: ContainerKeywords<'container'>;
  /**
   * 为查询容器命名，供 @container 条件规则选择。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  readonly containerName: ContainerNameKeywords<'containerName'>;
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
  readonly containerType: ContainerTypeKeywords<'containerType'>;
  /**
   * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  readonly containIntrinsicBlockSize: ContainIntrinsicBlockSizeKeywords<'containIntrinsicBlockSize'>;
  /**
   * 设置高度隔离或跳过内容渲染时使用的替代内部高度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  readonly containIntrinsicHeight: ContainIntrinsicHeightKeywords<'containIntrinsicHeight'>;
  /**
   * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  readonly containIntrinsicInlineSize: ContainIntrinsicInlineSizeKeywords<'containIntrinsicInlineSize'>;
  /**
   * 集中设置尺寸隔离时使用的替代内部宽高。
   *
   * CSS 规范初始值：contain-intrinsic-width: none；contain-intrinsic-height: none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  readonly containIntrinsicSize: ContainIntrinsicSizeKeywords<'containIntrinsicSize'>;
  /**
   * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  readonly containIntrinsicWidth: ContainIntrinsicWidthKeywords<'containIntrinsicWidth'>;
  /**
   * 设置生成内容、替换内容或伪元素的内容。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  readonly content: ContentKeywords<'content'>;
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
  readonly contentVisibility: ContentVisibilityKeywords<'contentVisibility'>;
  /**
   * 增加或减少指定 CSS 计数器的值。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  readonly counterIncrement: CounterIncrementKeywords<'counterIncrement'>;
  /**
   * 创建或重置 CSS 计数器。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  readonly counterReset: CounterResetKeywords<'counterReset'>;
  /**
   * 设置已有 CSS 计数器的值，必要时创建计数器。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  readonly counterSet: CounterSetKeywords<'counterSet'>;
  /**
   * 设置指针位于元素上方时显示的光标。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly cursor: CursorKeywords<'cursor'>;
  /**
   * 设置 SVG 圆或椭圆中心的横坐标。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  readonly cx: CxKeywords<'cx'>;
  /**
   * 设置 SVG 圆或椭圆中心的纵坐标。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  readonly cy: CyKeywords<'cy'>;
  /**
   * 设置 SVG path 元素的路径数据。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  readonly d: DKeywords<'d'>;
  /**
   * 设置文本基本方向，参与双向文本及部分布局计算。
   *
   * CSS 规范初始值：ltr。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  readonly direction: DirectionKeywords<'direction'>;
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
  readonly display: DisplayKeywords<'display'>;
  /**
   * 选择 SVG 文本布局的主导基线及基线表。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly dominantBaseline: DominantBaselineKeywords<'dominantBaseline'>;
  /**
   * 控制分离边框表格中空单元格的边框和背景是否绘制。
   *
   * CSS 规范初始值：show。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  readonly emptyCells: EmptyCellsKeywords<'emptyCells'>;
  /**
   * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。
   *
   * CSS 规范初始值：fixed。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  readonly fieldSizing: FieldSizingKeywords<'fieldSizing'>;
  /**
   * 设置 SVG 图形内部的填充绘制方式。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  readonly fill: FillKeywords<'fill'>;
  /**
   * 设置 SVG 填充的不透明度，不影响描边。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  readonly fillOpacity: FillOpacityKeywords<'fillOpacity'>;
  /**
   * 设置复杂 SVG 路径的内部区域判定规则。
   *
   * CSS 规范初始值：nonzero。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  readonly fillRule: FillRuleKeywords<'fillRule'>;
  /**
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  readonly filter: FilterKeywords<'filter'>;
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
  readonly flex: FlexKeywords<'flex'>;
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
  readonly flexBasis: FlexBasisKeywords<'flexBasis'>;
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
  readonly flexDirection: FlexDirectionKeywords<'flexDirection'>;
  /**
   * 同时设置弹性布局的主轴方向和换行方式。
   *
   * CSS 规范初始值：flex-direction: row；flex-wrap: nowrap。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly flexFlow: FlexFlowKeywords<'flexFlow'>;
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
  readonly flexGrow: FlexGrowKeywords<'flexGrow'>;
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
  readonly flexShrink: FlexShrinkKeywords<'flexShrink'>;
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
  readonly flexWrap: FlexWrapKeywords<'flexWrap'>;
  /**
   * 将元素浮动到指定侧，使相邻行内内容围绕它排列。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  readonly float: FloatKeywords<'float'>;
  /**
   * 设置 SVG feFlood 或相关滤镜的洪泛颜色。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  readonly floodColor: FloodColorKeywords<'floodColor'>;
  /**
   * 设置 SVG 洪泛滤镜颜色的不透明度。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  readonly floodOpacity: FloodOpacityKeywords<'floodOpacity'>;
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
  readonly font: FontKeywords<'font'>;
  /**
   * 设置按优先级排列的字体族及通用字体回退。
   *
   * CSS 规范初始值：由浏览器决定。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly fontFamily: FontFamilyKeywords<'fontFamily'>;
  /**
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  readonly fontFeatureSettings: FontFeatureSettingsKeywords<'fontFeatureSettings'>;
  /**
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  readonly fontKerning: FontKerningKeywords<'fontKerning'>;
  /**
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  readonly fontLanguageOverride: FontLanguageOverrideKeywords<'fontLanguageOverride'>;
  /**
   * 控制支持光学尺寸轴的字体是否按字号优化字形。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  readonly fontOpticalSizing: FontOpticalSizingKeywords<'fontOpticalSizing'>;
  /**
   * 选择或覆盖彩色字体使用的调色板。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  readonly fontPalette: FontPaletteKeywords<'fontPalette'>;
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
  readonly fontSize: FontSizeKeywords<'fontSize'>;
  /**
   * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  readonly fontSizeAdjust: FontSizeAdjustKeywords<'fontSizeAdjust'>;
  /**
   * 控制字体平滑的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly fontSmooth: FontSmoothKeywords<'fontSmooth'>;
  /**
   * 选择字体的宽窄字面；font-width 是其较新的名称。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly fontStretch: FontStretchKeywords<'fontStretch'>;
  /**
   * 选择正常、斜体或倾斜字体样式。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  readonly fontStyle: FontStyleKeywords<'fontStyle'>;
  /**
   * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。
   *
   * CSS 规范初始值：weight style small-caps position 。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  readonly fontSynthesis: FontSynthesisKeywords<'fontSynthesis'>;
  /**
   * 控制浏览器是否可以合成上标和下标字形。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  readonly fontSynthesisPosition: FontSynthesisPositionKeywords<'fontSynthesisPosition'>;
  /**
   * 控制浏览器是否可以合成小型大写字形。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  readonly fontSynthesisSmallCaps: FontSynthesisSmallCapsKeywords<'fontSynthesisSmallCaps'>;
  /**
   * 控制浏览器是否可以合成倾斜字体。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  readonly fontSynthesisStyle: FontSynthesisStyleKeywords<'fontSynthesisStyle'>;
  /**
   * 控制浏览器是否可以合成加粗字体。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  readonly fontSynthesisWeight: FontSynthesisWeightKeywords<'fontSynthesisWeight'>;
  /**
   * 集中设置字体的连字、大小写、数字及其他变体。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly fontVariant: FontVariantKeywords<'fontVariant'>;
  /**
   * 选择字体提供的替代字形。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  readonly fontVariantAlternates: FontVariantAlternatesKeywords<'fontVariantAlternates'>;
  /**
   * 设置小型大写等大小写字形变体。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly fontVariantCaps: FontVariantCapsKeywords<'fontVariantCaps'>;
  /**
   * 设置东亚文字字形及宽度变体。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly fontVariantEastAsian: FontVariantEastAsianKeywords<'fontVariantEastAsian'>;
  /**
   * 设置字符优先采用文本字形还是 emoji 字形。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  readonly fontVariantEmoji: FontVariantEmojiKeywords<'fontVariantEmoji'>;
  /**
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly fontVariantLigatures: FontVariantLigaturesKeywords<'fontVariantLigatures'>;
  /**
   * 设置数字的等宽、比例、分数及其他排版变体。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly fontVariantNumeric: FontVariantNumericKeywords<'fontVariantNumeric'>;
  /**
   * 选择字体提供的上标或下标字形。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  readonly fontVariantPosition: FontVariantPositionKeywords<'fontVariantPosition'>;
  /**
   * 直接设置可变字体各个轴的数值。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  readonly fontVariationSettings: FontVariationSettingsKeywords<'fontVariationSettings'>;
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
  readonly fontWeight: FontWeightKeywords<'fontWeight'>;
  /**
   * 选择字体的宽窄字面，不是通过变换拉伸元素。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly fontWidth: FontWidthKeywords<'fontWidth'>;
  /**
   * 控制元素是否参与系统强制颜色模式的自动替换。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  readonly forcedColorAdjust: ForcedColorAdjustKeywords<'forcedColorAdjust'>;
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
  readonly gap: GapKeywords<'gap'>;
  /**
   * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  readonly glyphOrientationVertical: GlyphOrientationVerticalKeywords<'glyphOrientationVertical'>;
  /**
   * 集中设置显式和隐式网格的轨道、区域及自动放置方式。
   *
   * CSS 规范初始值：grid-template-rows: none；grid-template-columns: none；grid-template-areas: none；grid-auto-rows: auto；grid-auto-columns: auto；grid-auto-flow: row；grid-column-gap: 0；grid-row-gap: 0；column-gap: normal；row-gap: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  readonly grid: GridKeywords<'grid'>;
  /**
   * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。
   *
   * CSS 规范初始值：grid-row-start: auto；grid-column-start: auto；grid-row-end: auto；grid-column-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  readonly gridArea: GridAreaKeywords<'gridArea'>;
  /**
   * 设置隐式生成的网格列尺寸。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  readonly gridAutoColumns: GridAutoColumnsKeywords<'gridAutoColumns'>;
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
  readonly gridAutoFlow: GridAutoFlowKeywords<'gridAutoFlow'>;
  /**
   * 设置隐式生成的网格行尺寸。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  readonly gridAutoRows: GridAutoRowsKeywords<'gridAutoRows'>;
  /**
   * 设置网格项目的列起点和列终点。
   *
   * CSS 规范初始值：grid-column-start: auto；grid-column-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  readonly gridColumn: GridColumnKeywords<'gridColumn'>;
  /**
   * 设置网格项目的列终止线或跨越范围。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  readonly gridColumnEnd: GridColumnEndKeywords<'gridColumnEnd'>;
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
  readonly gridColumnGap: GridColumnGapKeywords<'gridColumnGap'>;
  /**
   * 设置网格项目的列起始线或跨越范围。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  readonly gridColumnStart: GridColumnStartKeywords<'gridColumnStart'>;
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
  readonly gridGap: GridGapKeywords<'gridGap'>;
  /**
   * 设置网格项目的行起点和行终点。
   *
   * CSS 规范初始值：grid-row-start: auto；grid-row-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  readonly gridRow: GridRowKeywords<'gridRow'>;
  /**
   * 设置网格项目的行终止线或跨越范围。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  readonly gridRowEnd: GridRowEndKeywords<'gridRowEnd'>;
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
  readonly gridRowGap: GridRowGapKeywords<'gridRowGap'>;
  /**
   * 设置网格项目的行起始线或跨越范围。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  readonly gridRowStart: GridRowStartKeywords<'gridRowStart'>;
  /**
   * 集中设置显式网格的行、列和命名区域。
   *
   * CSS 规范初始值：grid-template-columns: none；grid-template-rows: none；grid-template-areas: none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  readonly gridTemplate: GridTemplateKeywords<'gridTemplate'>;
  /**
   * 用区域名称矩阵定义网格布局区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  readonly gridTemplateAreas: GridTemplateAreasKeywords<'gridTemplateAreas'>;
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
  readonly gridTemplateColumns: GridTemplateColumnsKeywords<'gridTemplateColumns'>;
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
  readonly gridTemplateRows: GridTemplateRowsKeywords<'gridTemplateRows'>;
  /**
   * 控制标点是否可以悬挂在行盒边缘之外。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  readonly hangingPunctuation: HangingPunctuationKeywords<'hangingPunctuation'>;
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
  readonly height: HeightKeywords<'height'>;
  /**
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  readonly hyphenateCharacter: HyphenateCharacterKeywords<'hyphenateCharacter'>;
  /**
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  readonly hyphenateLimitChars: HyphenateLimitCharsKeywords<'hyphenateLimitChars'>;
  /**
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：manual。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  readonly hyphens: HyphensKeywords<'hyphens'>;
  /**
   * 设置图像是否按元数据等信息调整方向。
   *
   * CSS 规范初始值：from-image。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  readonly imageOrientation: ImageOrientationKeywords<'imageOrientation'>;
  /**
   * 向浏览器指定图像缩放时的插值与清晰度偏好。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  readonly imageRendering: ImageRenderingKeywords<'imageRendering'>;
  /**
   * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。
   *
   * CSS 规范初始值：1dppx。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  readonly imageResolution: ImageResolutionKeywords<'imageResolution'>;
  /**
   * 旧版输入法状态控制，不应替代 inputmode 或正常输入交互。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  readonly imeMode: ImeModeKeywords<'imeMode'>;
  /**
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  readonly initialLetter: InitialLetterKeywords<'initialLetter'>;
  /**
   * 设置首字下沉时字形与正文使用的对齐基线。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  readonly initialLetterAlign: InitialLetterAlignKeywords<'initialLetterAlign'>;
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
  readonly inlineSize: InlineSizeKeywords<'inlineSize'>;
  /**
   * 同时设置定位元素的上、右、下、左偏移。
   *
   * CSS 规范初始值：top: auto；bottom: auto；left: auto；right: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  readonly inset: InsetKeywords<'inset'>;
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
  readonly insetArea: InsetAreaKeywords<'insetArea'>;
  /**
   * 设置定位元素沿逻辑块轴的起始和结束偏移。
   *
   * CSS 规范初始值：inset-block-start: auto；inset-block-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  readonly insetBlock: InsetBlockKeywords<'insetBlock'>;
  /**
   * 设置定位元素在逻辑块轴结束侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  readonly insetBlockEnd: InsetBlockEndKeywords<'insetBlockEnd'>;
  /**
   * 设置定位元素在逻辑块轴起始侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  readonly insetBlockStart: InsetBlockStartKeywords<'insetBlockStart'>;
  /**
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。
   *
   * CSS 规范初始值：inset-inline-start: auto；inset-inline-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  readonly insetInline: InsetInlineKeywords<'insetInline'>;
  /**
   * 设置定位元素在逻辑行内轴结束侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  readonly insetInlineEnd: InsetInlineEndKeywords<'insetInlineEnd'>;
  /**
   * 设置定位元素在逻辑行内轴起始侧的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  readonly insetInlineStart: InsetInlineStartKeywords<'insetInlineStart'>;
  /**
   * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。
   *
   * CSS 规范初始值：numeric-only。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  readonly interpolateSize: InterpolateSizeKeywords<'interpolateSize'>;
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
  readonly isolation: IsolationKeywords<'isolation'>;
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
  readonly justifyContent: JustifyContentKeywords<'justifyContent'>;
  /**
   * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。
   *
   * CSS 规范初始值：legacy。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly justifyItems: JustifyItemsKeywords<'justifyItems'>;
  /**
   * 单独设置项目在其布局区域内的行内轴对齐方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly justifySelf: JustifySelfKeywords<'justifySelf'>;
  /**
   * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly justifyTracks: JustifyTracksKeywords<'justifyTracks'>;
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
  readonly KhtmlBoxAlign: KhtmlBoxAlignKeywords<'KhtmlBoxAlign'>;
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
  readonly KhtmlBoxDirection: KhtmlBoxDirectionKeywords<'KhtmlBoxDirection'>;
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
  readonly KhtmlBoxFlex: KhtmlBoxFlexKeywords<'KhtmlBoxFlex'>;
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
  readonly KhtmlBoxFlexGroup: KhtmlBoxFlexGroupKeywords<'KhtmlBoxFlexGroup'>;
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
  readonly KhtmlBoxLines: KhtmlBoxLinesKeywords<'KhtmlBoxLines'>;
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
  readonly KhtmlBoxOrdinalGroup: KhtmlBoxOrdinalGroupKeywords<'KhtmlBoxOrdinalGroup'>;
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
  readonly KhtmlBoxOrient: KhtmlBoxOrientKeywords<'KhtmlBoxOrient'>;
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
  readonly KhtmlBoxPack: KhtmlBoxPackKeywords<'KhtmlBoxPack'>;
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
  readonly KhtmlLineBreak: KhtmlLineBreakKeywords<'KhtmlLineBreak'>;
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
  readonly KhtmlOpacity: KhtmlOpacityKeywords<'KhtmlOpacity'>;
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
  readonly KhtmlUserSelect: KhtmlUserSelectKeywords<'KhtmlUserSelect'>;
  /**
   * 设置定位元素相对于其定位参照的左侧偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  readonly left: LeftKeywords<'left'>;
  /**
   * 设置字符之间额外增加或减少的间距。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  readonly letterSpacing: LetterSpacingKeywords<'letterSpacing'>;
  /**
   * 设置 SVG 光照滤镜使用的光源颜色。
   *
   * CSS 规范初始值：white。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  readonly lightingColor: LightingColorKeywords<'lightingColor'>;
  /**
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  readonly lineBreak: LineBreakKeywords<'lineBreak'>;
  /**
   * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  readonly lineClamp: LineClampKeywords<'lineClamp'>;
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
  readonly lineHeight: LineHeightKeywords<'lineHeight'>;
  /**
   * 设置行盒高度向上取整使用的步长。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  readonly lineHeightStep: LineHeightStepKeywords<'lineHeightStep'>;
  /**
   * 集中设置列表标记的类型、图像和位置。
   *
   * CSS 规范初始值：list-style-type: disc；list-style-position: outside；list-style-image: none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  readonly listStyle: ListStyleKeywords<'listStyle'>;
  /**
   * 设置用作列表标记的图像。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  readonly listStyleImage: ListStyleImageKeywords<'listStyleImage'>;
  /**
   * 设置列表标记位于主块盒内部还是外部。
   *
   * CSS 规范初始值：outside。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  readonly listStylePosition: ListStylePositionKeywords<'listStylePosition'>;
  /**
   * 设置列表标记或计数器的样式。
   *
   * CSS 规范初始值：disc。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  readonly listStyleType: ListStyleTypeKeywords<'listStyleType'>;
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
  readonly margin: MarginKeywords<'margin'>;
  /**
   * 设置逻辑块轴起始侧和结束侧的外边距。
   *
   * CSS 规范初始值：margin-block-start: 0；margin-block-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  readonly marginBlock: MarginBlockKeywords<'marginBlock'>;
  /**
   * 设置逻辑块轴结束侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  readonly marginBlockEnd: MarginBlockEndKeywords<'marginBlockEnd'>;
  /**
   * 设置逻辑块轴起始侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  readonly marginBlockStart: MarginBlockStartKeywords<'marginBlockStart'>;
  /**
   * 设置下外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  readonly marginBottom: MarginBottomKeywords<'marginBottom'>;
  /**
   * 设置逻辑行内轴起始侧和结束侧的外边距。
   *
   * CSS 规范初始值：margin-inline-start: 0；margin-inline-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  readonly marginInline: MarginInlineKeywords<'marginInline'>;
  /**
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  readonly marginInlineEnd: MarginInlineEndKeywords<'marginInlineEnd'>;
  /**
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  readonly marginInlineStart: MarginInlineStartKeywords<'marginInlineStart'>;
  /**
   * 设置左外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  readonly marginLeft: MarginLeftKeywords<'marginLeft'>;
  /**
   * 设置右外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  readonly marginRight: MarginRightKeywords<'marginRight'>;
  /**
   * 设置上外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  readonly marginTop: MarginTopKeywords<'marginTop'>;
  /**
   * 控制容器边缘处子元素外边距的裁减。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  readonly marginTrim: MarginTrimKeywords<'marginTrim'>;
  /**
   * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。
   *
   * CSS 规范初始值：marker-start: none；marker-mid: none；marker-end: none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  readonly marker: MarkerKeywords<'marker'>;
  /**
   * 设置 SVG 路径终点的标记图形。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  readonly markerEnd: MarkerEndKeywords<'markerEnd'>;
  /**
   * 设置 SVG 路径中间顶点的标记图形。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  readonly markerMid: MarkerMidKeywords<'markerMid'>;
  /**
   * 设置 SVG 路径起点的标记图形。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  readonly markerStart: MarkerStartKeywords<'markerStart'>;
  /**
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   *
   * CSS 规范初始值：mask-image: none；mask-mode: match-source；mask-repeat: repeat；mask-position: 0% 0%；mask-clip: border-box；mask-origin: border-box；mask-size: auto；mask-composite: add。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly mask: MaskKeywords<'mask'>;
  /**
   * 设置基于九宫格图像切片的边框遮罩。
   *
   * CSS 规范初始值：mask-border-mode: alpha；mask-border-outset: 0；mask-border-repeat: stretch；mask-border-slice: 0；mask-border-source: none；mask-border-width: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  readonly maskBorder: MaskBorderKeywords<'maskBorder'>;
  /**
   * 设置边框遮罩使用 alpha 还是亮度信息。
   *
   * CSS 规范初始值：alpha。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  readonly maskBorderMode: MaskBorderModeKeywords<'maskBorderMode'>;
  /**
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  readonly maskBorderOutset: MaskBorderOutsetKeywords<'maskBorderOutset'>;
  /**
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  readonly maskBorderRepeat: MaskBorderRepeatKeywords<'maskBorderRepeat'>;
  /**
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  readonly maskBorderSlice: MaskBorderSliceKeywords<'maskBorderSlice'>;
  /**
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  readonly maskBorderSource: MaskBorderSourceKeywords<'maskBorderSource'>;
  /**
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  readonly maskBorderWidth: MaskBorderWidthKeywords<'maskBorderWidth'>;
  /**
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：border-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly maskClip: MaskClipKeywords<'maskClip'>;
  /**
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：add。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  readonly maskComposite: MaskCompositeKeywords<'maskComposite'>;
  /**
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  readonly maskImage: MaskImageKeywords<'maskImage'>;
  /**
   * 设置遮罩按 alpha、亮度或源类型解释。
   *
   * CSS 规范初始值：match-source。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  readonly maskMode: MaskModeKeywords<'maskMode'>;
  /**
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：border-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly maskOrigin: MaskOriginKeywords<'maskOrigin'>;
  /**
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：0% 0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  readonly maskPosition: MaskPositionKeywords<'maskPosition'>;
  /**
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：repeat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly maskRepeat: MaskRepeatKeywords<'maskRepeat'>;
  /**
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  readonly maskSize: MaskSizeKeywords<'maskSize'>;
  /**
   * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。
   *
   * CSS 规范初始值：luminance。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  readonly maskType: MaskTypeKeywords<'maskType'>;
  /**
   * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。
   *
   * CSS 规范初始值：pack。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  readonly masonryAutoFlow: MasonryAutoFlowKeywords<'masonryAutoFlow'>;
  /**
   * 设置数学公式的嵌套深度，用于数学字号等排版计算。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  readonly mathDepth: MathDepthKeywords<'mathDepth'>;
  /**
   * 控制数学上标采用正常还是压缩的垂直偏移。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  readonly mathShift: MathShiftKeywords<'mathShift'>;
  /**
   * 设置数学公式采用正常还是紧凑排版。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  readonly mathStyle: MathStyleKeywords<'mathStyle'>;
  /**
   * 限制元素逻辑块轴的最大尺寸。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  readonly maxBlockSize: MaxBlockSizeKeywords<'maxBlockSize'>;
  /**
   * 限制元素的最大物理高度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly maxHeight: MaxHeightKeywords<'maxHeight'>;
  /**
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  readonly maxInlineSize: MaxInlineSizeKeywords<'maxInlineSize'>;
  /**
   * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  readonly maxLines: MaxLinesKeywords<'maxLines'>;
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
  readonly maxWidth: MaxWidthKeywords<'maxWidth'>;
  /**
   * 设置元素逻辑块轴的最小尺寸。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  readonly minBlockSize: MinBlockSizeKeywords<'minBlockSize'>;
  /**
   * 设置元素的最小物理高度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly minHeight: MinHeightKeywords<'minHeight'>;
  /**
   * 设置元素逻辑行内轴的最小尺寸。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 尺寸与比例
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  readonly minInlineSize: MinInlineSizeKeywords<'minInlineSize'>;
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
  readonly minWidth: MinWidthKeywords<'minWidth'>;
  /**
   * 设置元素整体与其背后内容的颜色混合方式。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly mixBlendMode: MixBlendModeKeywords<'mixBlendMode'>;
  /**
   * 设置运动路径的旧式简写；对应现代 offset 属性族。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly motion: MotionKeywords<'motion'>;
  /**
   * 设置沿运动路径行进距离的旧属性；对应 offset-distance。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-distance
   */
  readonly motionDistance: MotionDistanceKeywords<'motionDistance'>;
  /**
   * 设置运动路径的旧属性；对应 offset-path。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly motionPath: MotionPathKeywords<'motionPath'>;
  /**
   * 设置运动路径旋转方式的旧属性；对应 offset-rotate。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-rotation
   */
  readonly motionRotation: MotionRotationKeywords<'motionRotation'>;
  /**
   * 兼容属性 -moz-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * CSS 规范初始值：animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly MozAnimation: MozAnimationKeywords<'MozAnimation'>;
  /**
   * 兼容属性 -moz-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-delay
   */
  readonly MozAnimationDelay: MozAnimationDelayKeywords<'MozAnimationDelay'>;
  /**
   * 兼容属性 -moz-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  readonly MozAnimationDirection: MozAnimationDirectionKeywords<'MozAnimationDirection'>;
  /**
   * 兼容属性 -moz-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-duration
   */
  readonly MozAnimationDuration: MozAnimationDurationKeywords<'MozAnimationDuration'>;
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
  readonly MozAnimationFillMode: MozAnimationFillModeKeywords<'MozAnimationFillMode'>;
  /**
   * 兼容属性 -moz-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-iteration-count
   */
  readonly MozAnimationIterationCount: MozAnimationIterationCountKeywords<'MozAnimationIterationCount'>;
  /**
   * 兼容属性 -moz-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-name
   */
  readonly MozAnimationName: MozAnimationNameKeywords<'MozAnimationName'>;
  /**
   * 兼容属性 -moz-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：running。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-play-state
   */
  readonly MozAnimationPlayState: MozAnimationPlayStateKeywords<'MozAnimationPlayState'>;
  /**
   * 兼容属性 -moz-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly MozAnimationTimingFunction: MozAnimationTimingFunctionKeywords<'MozAnimationTimingFunction'>;
  /**
   * 兼容属性 -moz-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：none（浏览器默认样式表可能覆盖）。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly MozAppearance: MozAppearanceKeywords<'MozAppearance'>;
  /**
   * 兼容属性 -moz-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-backface-visibility
   */
  readonly MozBackfaceVisibility: MozBackfaceVisibilityKeywords<'MozBackfaceVisibility'>;
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
  readonly MozBackgroundClip: MozBackgroundClipKeywords<'MozBackgroundClip'>;
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
  readonly MozBackgroundOrigin: MozBackgroundOriginKeywords<'MozBackgroundOrigin'>;
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
  readonly MozBackgroundSize: MozBackgroundSizeKeywords<'MozBackgroundSize'>;
  /**
   * 兼容属性 -moz-binding；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的 XBL 绑定入口；仅描述历史兼容行为，不适用于现代组件实现。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-binding
   */
  readonly MozBinding: MozBindingKeywords<'MozBinding'>;
  /**
   * 兼容属性 -moz-border-bottom-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的下边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-bottom-colors
   */
  readonly MozBorderBottomColors: MozBorderBottomColorsKeywords<'MozBorderBottomColors'>;
  /**
   * 兼容属性 -moz-border-end-color；优先参考标准属性 borderInlineEndColor及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-color
   */
  readonly MozBorderEndColor: MozBorderEndColorKeywords<'MozBorderEndColor'>;
  /**
   * 兼容属性 -moz-border-end-style；优先参考标准属性 borderInlineEndStyle及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly MozBorderEndStyle: MozBorderEndStyleKeywords<'MozBorderEndStyle'>;
  /**
   * 兼容属性 -moz-border-end-width；优先参考标准属性 borderInlineEndWidth及浏览器支持范围。
   * 设置逻辑行内轴结束侧边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  readonly MozBorderEndWidth: MozBorderEndWidthKeywords<'MozBorderEndWidth'>;
  /**
   * 兼容属性 -moz-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * CSS 规范初始值：border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  readonly MozBorderImage: MozBorderImageKeywords<'MozBorderImage'>;
  /**
   * 兼容属性 -moz-border-left-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的左边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-left-colors
   */
  readonly MozBorderLeftColors: MozBorderLeftColorsKeywords<'MozBorderLeftColors'>;
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
  readonly MozBorderRadius: MozBorderRadiusKeywords<'MozBorderRadius'>;
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
  readonly MozBorderRadiusBottomleft: MozBorderRadiusBottomleftKeywords<'MozBorderRadiusBottomleft'>;
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
  readonly MozBorderRadiusBottomright: MozBorderRadiusBottomrightKeywords<'MozBorderRadiusBottomright'>;
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
  readonly MozBorderRadiusTopleft: MozBorderRadiusTopleftKeywords<'MozBorderRadiusTopleft'>;
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
  readonly MozBorderRadiusTopright: MozBorderRadiusToprightKeywords<'MozBorderRadiusTopright'>;
  /**
   * 兼容属性 -moz-border-right-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的右边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-right-colors
   */
  readonly MozBorderRightColors: MozBorderRightColorsKeywords<'MozBorderRightColors'>;
  /**
   * 兼容属性 -moz-border-start-color；优先参考标准属性 borderInlineStartColor及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-color
   */
  readonly MozBorderStartColor: MozBorderStartColorKeywords<'MozBorderStartColor'>;
  /**
   * 兼容属性 -moz-border-start-style；优先参考标准属性 borderInlineStartStyle及浏览器支持范围。
   * 设置逻辑行内轴起始侧边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly MozBorderStartStyle: MozBorderStartStyleKeywords<'MozBorderStartStyle'>;
  /**
   * 兼容属性 -moz-border-top-colors；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的上边框多色列表；现代设计使用普通边框或 border-image。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-top-colors
   */
  readonly MozBorderTopColors: MozBorderTopColorsKeywords<'MozBorderTopColors'>;
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
  readonly MozBoxAlign: MozBoxAlignKeywords<'MozBoxAlign'>;
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
  readonly MozBoxDirection: MozBoxDirectionKeywords<'MozBoxDirection'>;
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
  readonly MozBoxFlex: MozBoxFlexKeywords<'MozBoxFlex'>;
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
  readonly MozBoxOrdinalGroup: MozBoxOrdinalGroupKeywords<'MozBoxOrdinalGroup'>;
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
  readonly MozBoxOrient: MozBoxOrientKeywords<'MozBoxOrient'>;
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
  readonly MozBoxPack: MozBoxPackKeywords<'MozBoxPack'>;
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
  readonly MozBoxShadow: MozBoxShadowKeywords<'MozBoxShadow'>;
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
  readonly MozBoxSizing: MozBoxSizingKeywords<'MozBoxSizing'>;
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
  readonly MozColumnCount: MozColumnCountKeywords<'MozColumnCount'>;
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
  readonly MozColumnFill: MozColumnFillKeywords<'MozColumnFill'>;
  /**
   * 兼容属性 -moz-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * CSS 规范初始值：column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule
   */
  readonly MozColumnRule: MozColumnRuleKeywords<'MozColumnRule'>;
  /**
   * 兼容属性 -moz-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-color
   */
  readonly MozColumnRuleColor: MozColumnRuleColorKeywords<'MozColumnRuleColor'>;
  /**
   * 兼容属性 -moz-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly MozColumnRuleStyle: MozColumnRuleStyleKeywords<'MozColumnRuleStyle'>;
  /**
   * 兼容属性 -moz-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  readonly MozColumnRuleWidth: MozColumnRuleWidthKeywords<'MozColumnRuleWidth'>;
  /**
   * 兼容属性 -moz-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * CSS 规范初始值：column-width: auto；column-count: auto；column-height: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-columns
   */
  readonly MozColumns: MozColumnsKeywords<'MozColumns'>;
  /**
   * 兼容属性 -moz-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-width
   */
  readonly MozColumnWidth: MozColumnWidthKeywords<'MozColumnWidth'>;
  /**
   * 兼容属性 -moz-context-properties；优先参考标准属性及浏览器支持范围。
   * 声明可传递给被引用 SVG 图像的上下文绘制属性，如 fill 和 stroke。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  readonly MozContextProperties: MozContextPropertiesKeywords<'MozContextProperties'>;
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
  readonly MozFloatEdge: MozFloatEdgeKeywords<'MozFloatEdge'>;
  /**
   * 兼容属性 -moz-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-feature-settings
   */
  readonly MozFontFeatureSettings: MozFontFeatureSettingsKeywords<'MozFontFeatureSettings'>;
  /**
   * 兼容属性 -moz-font-language-override；优先参考标准属性及浏览器支持范围。
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-font-language-override
   */
  readonly MozFontLanguageOverride: MozFontLanguageOverrideKeywords<'MozFontLanguageOverride'>;
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
  readonly MozForceBrokenImageIcon: MozForceBrokenImageIconKeywords<'MozForceBrokenImageIcon'>;
  /**
   * 兼容属性 -moz-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：manual。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-hyphens
   */
  readonly MozHyphens: MozHyphensKeywords<'MozHyphens'>;
  /**
   * 兼容属性 -moz-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-end
   */
  readonly MozMarginEnd: MozMarginEndKeywords<'MozMarginEnd'>;
  /**
   * 兼容属性 -moz-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-margin-start
   */
  readonly MozMarginStart: MozMarginStartKeywords<'MozMarginStart'>;
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
  readonly MozOpacity: MozOpacityKeywords<'MozOpacity'>;
  /**
   * 兼容属性 -moz-orient；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 中指定特定控件的显示方向，作用依赖控件类型。
   *
   * CSS 规范初始值：inline。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  readonly MozOrient: MozOrientKeywords<'MozOrient'>;
  /**
   * 兼容属性 -moz-osx-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 macOS 上文字抗锯齿方式；效果依赖平台和字体渲染实现。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly MozOsxFontSmoothing: MozOsxFontSmoothingKeywords<'MozOsxFontSmoothing'>;
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
  readonly MozOutline: MozOutlineKeywords<'MozOutline'>;
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
  readonly MozOutlineColor: MozOutlineColorKeywords<'MozOutlineColor'>;
  /**
   * 兼容属性 -moz-outline-radius；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 的轮廓圆角简写；不同于元素边框本身的圆角。
   *
   * CSS 规范初始值：-moz-outline-radius-topleft: 0；-moz-outline-radius-topright: 0；-moz-outline-radius-bottomright: 0；-moz-outline-radius-bottomleft: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius
   */
  readonly MozOutlineRadius: MozOutlineRadiusKeywords<'MozOutlineRadius'>;
  /**
   * 兼容属性 -moz-outline-radius-bottomleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左下角的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomleft
   */
  readonly MozOutlineRadiusBottomleft: MozOutlineRadiusBottomleftKeywords<'MozOutlineRadiusBottomleft'>;
  /**
   * 兼容属性 -moz-outline-radius-bottomright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右下角的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-bottomright
   */
  readonly MozOutlineRadiusBottomright: MozOutlineRadiusBottomrightKeywords<'MozOutlineRadiusBottomright'>;
  /**
   * 兼容属性 -moz-outline-radius-topleft；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓左上角的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topleft
   */
  readonly MozOutlineRadiusTopleft: MozOutlineRadiusTopleftKeywords<'MozOutlineRadiusTopleft'>;
  /**
   * 兼容属性 -moz-outline-radius-topright；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 轮廓右上角的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-radius-topright
   */
  readonly MozOutlineRadiusTopright: MozOutlineRadiusToprightKeywords<'MozOutlineRadiusTopright'>;
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
  readonly MozOutlineStyle: MozOutlineStyleKeywords<'MozOutlineStyle'>;
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
  readonly MozOutlineWidth: MozOutlineWidthKeywords<'MozOutlineWidth'>;
  /**
   * 兼容属性 -moz-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-end
   */
  readonly MozPaddingEnd: MozPaddingEndKeywords<'MozPaddingEnd'>;
  /**
   * 兼容属性 -moz-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-padding-start
   */
  readonly MozPaddingStart: MozPaddingStartKeywords<'MozPaddingStart'>;
  /**
   * 兼容属性 -moz-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective
   */
  readonly MozPerspective: MozPerspectiveKeywords<'MozPerspective'>;
  /**
   * 兼容属性 -moz-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：50% 50%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  readonly MozPerspectiveOrigin: MozPerspectiveOriginKeywords<'MozPerspectiveOrigin'>;
  /**
   * 兼容属性 -moz-stack-sizing；优先参考标准属性及浏览器支持范围。
   * 旧版 Gecko 堆叠布局中决定子项尺寸是否参与堆叠容器的尺寸计算。
   *
   * CSS 规范初始值：stretch-to-fit。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  readonly MozStackSizing: MozStackSizingKeywords<'MozStackSizing'>;
  /**
   * 兼容属性 -moz-tab-size；优先参考标准属性及浏览器支持范围。
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：8。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-tab-size
   */
  readonly MozTabSize: MozTabSizeKeywords<'MozTabSize'>;
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
  readonly MozTextAlignLast: MozTextAlignLastKeywords<'MozTextAlignLast'>;
  /**
   * 兼容属性 -moz-text-blink；优先参考标准属性及浏览器支持范围。
   * 旧版文字闪烁效果开关；现代内容不应依赖该兼容属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-blink
   */
  readonly MozTextBlink: MozTextBlinkKeywords<'MozTextBlink'>;
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
  readonly MozTextDecorationColor: MozTextDecorationColorKeywords<'MozTextDecorationColor'>;
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
  readonly MozTextDecorationLine: MozTextDecorationLineKeywords<'MozTextDecorationLine'>;
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
  readonly MozTextDecorationStyle: MozTextDecorationStyleKeywords<'MozTextDecorationStyle'>;
  /**
   * 兼容属性 -moz-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：支持文本放大的移动浏览器为 auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-size-adjust
   */
  readonly MozTextSizeAdjust: MozTextSizeAdjustKeywords<'MozTextSizeAdjust'>;
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
  readonly MozTransform: MozTransformKeywords<'MozTransform'>;
  /**
   * 兼容属性 -moz-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：50% 50% 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  readonly MozTransformOrigin: MozTransformOriginKeywords<'MozTransformOrigin'>;
  /**
   * 兼容属性 -moz-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：flat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-style
   */
  readonly MozTransformStyle: MozTransformStyleKeywords<'MozTransformStyle'>;
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
  readonly MozTransition: MozTransitionKeywords<'MozTransition'>;
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
  readonly MozTransitionDelay: MozTransitionDelayKeywords<'MozTransitionDelay'>;
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
  readonly MozTransitionDuration: MozTransitionDurationKeywords<'MozTransitionDuration'>;
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
  readonly MozTransitionProperty: MozTransitionPropertyKeywords<'MozTransitionProperty'>;
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
  readonly MozTransitionTimingFunction: MozTransitionTimingFunctionKeywords<'MozTransitionTimingFunction'>;
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
  readonly MozUserFocus: MozUserFocusKeywords<'MozUserFocus'>;
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
  readonly MozUserInput: MozUserInputKeywords<'MozUserInput'>;
  /**
   * 兼容属性 -moz-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * CSS 规范初始值：read-only。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  readonly MozUserModify: MozUserModifyKeywords<'MozUserModify'>;
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
  readonly MozUserSelect: MozUserSelectKeywords<'MozUserSelect'>;
  /**
   * 兼容属性 -moz-window-dragging；优先参考标准属性及浏览器支持范围。
   * 控制区域能否作为宿主窗口的拖动区域，作用限于支持它的特定环境。
   *
   * CSS 规范初始值：drag。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  readonly MozWindowDragging: MozWindowDraggingKeywords<'MozWindowDragging'>;
  /**
   * 兼容属性 -moz-window-shadow；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Gecko 宿主窗口阴影的预设，效果依赖窗口与操作系统。
   *
   * CSS 规范初始值：default。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  readonly MozWindowShadow: MozWindowShadowKeywords<'MozWindowShadow'>;
  /**
   * 兼容属性 -ms-accelerator；优先参考标准属性及浏览器支持范围。
   * 旧版 Microsoft 浏览器中控制快捷键提示字符是否显示。
   *
   * CSS 规范初始值：false。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-accelerator
   */
  readonly msAccelerator: MsAcceleratorKeywords<'msAccelerator'>;
  /**
   * 兼容属性 -ms-block-progression；优先参考标准属性及浏览器支持范围。
   * 旧版块内容的排列方向，现代排版优先使用 writing-mode。
   *
   * CSS 规范初始值：tb。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  readonly msBlockProgression: MsBlockProgressionKeywords<'msBlockProgression'>;
  /**
   * 兼容属性 -ms-content-zoom-chaining；优先参考标准属性及浏览器支持范围。
   * 控制缩放操作到达边界后是否继续传递给父级缩放区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-chaining
   */
  readonly msContentZoomChaining: MsContentZoomChainingKeywords<'msContentZoomChaining'>;
  /**
   * 兼容属性 -ms-content-zooming；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 触控内容缩放是否启用。
   *
   * CSS 规范初始值：顶层文档为 zoom，其余为 none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zooming
   */
  readonly msContentZooming: MsContentZoomingKeywords<'msContentZooming'>;
  /**
   * 兼容属性 -ms-content-zoom-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版触控内容缩放的最小和最大倍率。
   *
   * CSS 规范初始值：-ms-content-zoom-limit-max: 400%；-ms-content-zoom-limit-min: 100%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit
   */
  readonly msContentZoomLimit: MsContentZoomLimitKeywords<'msContentZoomLimit'>;
  /**
   * 兼容属性 -ms-content-zoom-limit-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最大倍率。
   *
   * CSS 规范初始值：400%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-max
   */
  readonly msContentZoomLimitMax: MsContentZoomLimitMaxKeywords<'msContentZoomLimitMax'>;
  /**
   * 兼容属性 -ms-content-zoom-limit-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版触控内容缩放的最小倍率。
   *
   * CSS 规范初始值：100%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-limit-min
   */
  readonly msContentZoomLimitMin: MsContentZoomLimitMinKeywords<'msContentZoomLimitMin'>;
  /**
   * 兼容属性 -ms-content-zoom-snap；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版内容缩放吸附的方式和位置。
   *
   * CSS 规范初始值：-ms-content-zoom-snap-type: none；-ms-content-zoom-snap-points: snapInterval(0%, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  readonly msContentZoomSnap: MsContentZoomSnapKeywords<'msContentZoomSnap'>;
  /**
   * 兼容属性 -ms-content-zoom-snap-points；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放操作可以吸附的倍率位置。
   *
   * CSS 规范初始值：snapInterval(0%, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-points
   */
  readonly msContentZoomSnapPoints: MsContentZoomSnapPointsKeywords<'msContentZoomSnapPoints'>;
  /**
   * 兼容属性 -ms-content-zoom-snap-type；优先参考标准属性及浏览器支持范围。
   * 指定旧版内容缩放吸附的强制程度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-type
   */
  readonly msContentZoomSnapType: MsContentZoomSnapTypeKeywords<'msContentZoomSnapType'>;
  /**
   * 兼容属性 -ms-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：""。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-filter
   */
  readonly msFilter: MsFilterKeywords<'msFilter'>;
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
  readonly msFlex: MsFlexKeywords<'msFlex'>;
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
  readonly msFlexDirection: MsFlexDirectionKeywords<'msFlexDirection'>;
  /**
   * 兼容属性 -ms-flex-positive；优先参考标准属性 flexGrow及浏览器支持范围。
   * 设置弹性项目分配正剩余空间时的增长系数。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex-positive
   */
  readonly msFlexPositive: MsFlexPositiveKeywords<'msFlexPositive'>;
  /**
   * 兼容属性 -ms-flow-from；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中指定接收哪个命名内容流。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-from
   */
  readonly msFlowFrom: MsFlowFromKeywords<'msFlowFrom'>;
  /**
   * 兼容属性 -ms-flow-into；优先参考标准属性及浏览器支持范围。
   * 旧版 CSS Regions 中把元素内容放入指定命名流。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flow-into
   */
  readonly msFlowInto: MsFlowIntoKeywords<'msFlowInto'>;
  /**
   * 兼容属性 -ms-grid-columns；优先参考标准属性 gridTemplateColumns及浏览器支持范围。
   * 定义显式网格的列轨道尺寸及网格线名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  readonly msGridColumns: MsGridColumnsKeywords<'msGridColumns'>;
  /**
   * 兼容属性 -ms-grid-rows；优先参考标准属性 gridTemplateRows及浏览器支持范围。
   * 定义显式网格的行轨道尺寸及网格线名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  readonly msGridRows: MsGridRowsKeywords<'msGridRows'>;
  /**
   * 兼容属性 -ms-high-contrast-adjust；优先参考标准属性及浏览器支持范围。
   * 控制旧版高对比度模式是否调整作者颜色；现代环境优先使用 forced-color-adjust。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-high-contrast-adjust
   */
  readonly msHighContrastAdjust: MsHighContrastAdjustKeywords<'msHighContrastAdjust'>;
  /**
   * 兼容属性 -ms-hyphenate-limit-chars；优先参考标准属性及浏览器支持范围。
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-chars
   */
  readonly msHyphenateLimitChars: MsHyphenateLimitCharsKeywords<'msHyphenateLimitChars'>;
  /**
   * 兼容属性 -ms-hyphenate-limit-lines；优先参考标准属性及浏览器支持范围。
   * 限制连续使用断字连字符的文本行数。
   *
   * CSS 规范初始值：no-limit。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-lines
   */
  readonly msHyphenateLimitLines: MsHyphenateLimitLinesKeywords<'msHyphenateLimitLines'>;
  /**
   * 兼容属性 -ms-hyphenate-limit-zone；优先参考标准属性及浏览器支持范围。
   * 指定允许开始断字处理的行末区域。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-zone
   */
  readonly msHyphenateLimitZone: MsHyphenateLimitZoneKeywords<'msHyphenateLimitZone'>;
  /**
   * 兼容属性 -ms-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：manual。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphens
   */
  readonly msHyphens: MsHyphensKeywords<'msHyphens'>;
  /**
   * 兼容属性 -ms-ime-align；优先参考标准属性及浏览器支持范围。
   * 控制旧版输入法候选窗口相对于编辑区域的对齐位置。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-align
   */
  readonly msImeAlign: MsImeAlignKeywords<'msImeAlign'>;
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
  readonly msImeMode: MsImeModeKeywords<'msImeMode'>;
  /**
   * 兼容属性 -ms-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  readonly msLineBreak: MsLineBreakKeywords<'msLineBreak'>;
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
  readonly msOrder: MsOrderKeywords<'msOrder'>;
  /**
   * 兼容属性 -ms-overflow-style；优先参考标准属性及浏览器支持范围。
   * 选择旧版 Microsoft 浏览器滚动条的呈现方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  readonly msOverflowStyle: MsOverflowStyleKeywords<'msOverflowStyle'>;
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
  readonly msOverflowX: MsOverflowXKeywords<'msOverflowX'>;
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
  readonly msOverflowY: MsOverflowYKeywords<'msOverflowY'>;
  /**
   * 兼容属性 -ms-scrollbar3dlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的亮边颜色。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar3dlight-color
   */
  readonly msScrollbar3dlightColor: MsScrollbar3dlightColorKeywords<'msScrollbar3dlightColor'>;
  /**
   * 兼容属性 -ms-scrollbar-arrow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条箭头颜色。
   *
   * CSS 规范初始值：ButtonText。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-arrow-color
   */
  readonly msScrollbarArrowColor: MsScrollbarArrowColorKeywords<'msScrollbarArrowColor'>;
  /**
   * 兼容属性 -ms-scrollbar-base-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条的基础颜色。
   *
   * CSS 规范初始值：由浏览器决定。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-base-color
   */
  readonly msScrollbarBaseColor: MsScrollbarBaseColorKeywords<'msScrollbarBaseColor'>;
  /**
   * 兼容属性 -ms-scrollbar-darkshadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条三维边框的深阴影颜色。
   *
   * CSS 规范初始值：ThreeDDarkShadow。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-darkshadow-color
   */
  readonly msScrollbarDarkshadowColor: MsScrollbarDarkshadowColorKeywords<'msScrollbarDarkshadowColor'>;
  /**
   * 兼容属性 -ms-scrollbar-face-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条滑块表面颜色。
   *
   * CSS 规范初始值：ThreeDFace。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-face-color
   */
  readonly msScrollbarFaceColor: MsScrollbarFaceColorKeywords<'msScrollbarFaceColor'>;
  /**
   * 兼容属性 -ms-scrollbar-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条高亮边缘颜色。
   *
   * CSS 规范初始值：ThreeDHighlight。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-highlight-color
   */
  readonly msScrollbarHighlightColor: MsScrollbarHighlightColorKeywords<'msScrollbarHighlightColor'>;
  /**
   * 兼容属性 -ms-scrollbar-shadow-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条阴影边缘颜色。
   *
   * CSS 规范初始值：ThreeDDarkShadow。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-shadow-color
   */
  readonly msScrollbarShadowColor: MsScrollbarShadowColorKeywords<'msScrollbarShadowColor'>;
  /**
   * 兼容属性 -ms-scrollbar-track-color；优先参考标准属性及浏览器支持范围。
   * 设置旧版滚动条轨道颜色。
   *
   * CSS 规范初始值：Scrollbar。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scrollbar-track-color
   */
  readonly msScrollbarTrackColor: MsScrollbarTrackColorKeywords<'msScrollbarTrackColor'>;
  /**
   * 兼容属性 -ms-scroll-chaining；优先参考标准属性及浏览器支持范围。
   * 控制滚动到达边界后是否传递给祖先滚动容器。
   *
   * CSS 规范初始值：chained。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-chaining
   */
  readonly msScrollChaining: MsScrollChainingKeywords<'msScrollChaining'>;
  /**
   * 兼容属性 -ms-scroll-limit；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版滚动区域的水平和垂直边界。
   *
   * CSS 规范初始值：-ms-scroll-limit-x-min: 0；-ms-scroll-limit-y-min: 0；-ms-scroll-limit-x-max: auto；-ms-scroll-limit-y-max: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit
   */
  readonly msScrollLimit: MsScrollLimitKeywords<'msScrollLimit'>;
  /**
   * 兼容属性 -ms-scroll-limit-x-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大水平位置。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-max
   */
  readonly msScrollLimitXMax: MsScrollLimitXMaxKeywords<'msScrollLimitXMax'>;
  /**
   * 兼容属性 -ms-scroll-limit-x-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小水平位置。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-x-min
   */
  readonly msScrollLimitXMin: MsScrollLimitXMinKeywords<'msScrollLimitXMin'>;
  /**
   * 兼容属性 -ms-scroll-limit-y-max；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最大垂直位置。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-max
   */
  readonly msScrollLimitYMax: MsScrollLimitYMaxKeywords<'msScrollLimitYMax'>;
  /**
   * 兼容属性 -ms-scroll-limit-y-min；优先参考标准属性及浏览器支持范围。
   * 限制旧版滚动区域的最小垂直位置。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-limit-y-min
   */
  readonly msScrollLimitYMin: MsScrollLimitYMinKeywords<'msScrollLimitYMin'>;
  /**
   * 兼容属性 -ms-scroll-rails；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控滚动是否锁定主要滚动轴。
   *
   * CSS 规范初始值：railed。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-rails
   */
  readonly msScrollRails: MsScrollRailsKeywords<'msScrollRails'>;
  /**
   * 兼容属性 -ms-scroll-snap-points-x；优先参考标准属性及浏览器支持范围。
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：snapInterval(0px, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-x
   */
  readonly msScrollSnapPointsX: MsScrollSnapPointsXKeywords<'msScrollSnapPointsX'>;
  /**
   * 兼容属性 -ms-scroll-snap-points-y；优先参考标准属性及浏览器支持范围。
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：snapInterval(0px, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-points-y
   */
  readonly msScrollSnapPointsY: MsScrollSnapPointsYKeywords<'msScrollSnapPointsY'>;
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
  readonly msScrollSnapType: MsScrollSnapTypeKeywords<'msScrollSnapType'>;
  /**
   * 兼容属性 -ms-scroll-snap-x；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版水平滚动吸附方式和位置。
   *
   * CSS 规范初始值：-ms-scroll-snap-type: none；-ms-scroll-snap-points-x: snapInterval(0px, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-x
   */
  readonly msScrollSnapX: MsScrollSnapXKeywords<'msScrollSnapX'>;
  /**
   * 兼容属性 -ms-scroll-snap-y；优先参考标准属性及浏览器支持范围。
   * 合并设置旧版垂直滚动吸附方式和位置。
   *
   * CSS 规范初始值：-ms-scroll-snap-type: none；-ms-scroll-snap-points-y: snapInterval(0px, 100%)。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-y
   */
  readonly msScrollSnapY: MsScrollSnapYKeywords<'msScrollSnapY'>;
  /**
   * 兼容属性 -ms-scroll-translation；优先参考标准属性及浏览器支持范围。
   * 控制旧版 Microsoft 环境中的滚动位移呈现方式。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-translation
   */
  readonly msScrollTranslation: MsScrollTranslationKeywords<'msScrollTranslation'>;
  /**
   * 兼容属性 -ms-text-autospace；优先参考标准属性及浏览器支持范围。
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  readonly msTextAutospace: MsTextAutospaceKeywords<'msTextAutospace'>;
  /**
   * 兼容属性 -ms-text-combine-horizontal；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-combine-horizontal
   */
  readonly msTextCombineHorizontal: MsTextCombineHorizontalKeywords<'msTextCombineHorizontal'>;
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
  readonly msTextOverflow: MsTextOverflowKeywords<'msTextOverflow'>;
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
  readonly msTouchAction: MsTouchActionKeywords<'msTouchAction'>;
  /**
   * 兼容属性 -ms-touch-select；优先参考标准属性及浏览器支持范围。
   * 控制旧版触控文字选择的交互方式。
   *
   * CSS 规范初始值：grippers。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-select
   */
  readonly msTouchSelect: MsTouchSelectKeywords<'msTouchSelect'>;
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
  readonly msTransform: MsTransformKeywords<'msTransform'>;
  /**
   * 兼容属性 -ms-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：50% 50% 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  readonly msTransformOrigin: MsTransformOriginKeywords<'msTransformOrigin'>;
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
  readonly msTransition: MsTransitionKeywords<'msTransition'>;
  /**
   * 兼容属性 -ms-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-delay
   */
  readonly msTransitionDelay: MsTransitionDelayKeywords<'msTransitionDelay'>;
  /**
   * 兼容属性 -ms-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-duration
   */
  readonly msTransitionDuration: MsTransitionDurationKeywords<'msTransitionDuration'>;
  /**
   * 兼容属性 -ms-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * CSS 规范初始值：all。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-property
   */
  readonly msTransitionProperty: MsTransitionPropertyKeywords<'msTransitionProperty'>;
  /**
   * 兼容属性 -ms-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly msTransitionTimingFunction: MsTransitionTimingFunctionKeywords<'msTransitionTimingFunction'>;
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
  readonly msUserSelect: MsUserSelectKeywords<'msUserSelect'>;
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
  readonly msWordBreak: MsWordBreakKeywords<'msWordBreak'>;
  /**
   * 兼容属性 -ms-wrap-flow；优先参考标准属性及浏览器支持范围。
   * 控制旧版排斥形状周围的内容环绕方向。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  readonly msWrapFlow: MsWrapFlowKeywords<'msWrapFlow'>;
  /**
   * 兼容属性 -ms-wrap-margin；优先参考标准属性及浏览器支持范围。
   * 设置旧版排斥形状与环绕内容之间的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-margin
   */
  readonly msWrapMargin: MsWrapMarginKeywords<'msWrapMargin'>;
  /**
   * 兼容属性 -ms-wrap-through；优先参考标准属性及浏览器支持范围。
   * 控制旧版元素是否参与排斥形状的内容环绕。
   *
   * CSS 规范初始值：wrap。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-through
   */
  readonly msWrapThrough: MsWrapThroughKeywords<'msWrapThrough'>;
  /**
   * 兼容属性 -ms-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：horizontal-tb。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly msWritingMode: MsWritingModeKeywords<'msWritingMode'>;
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
  readonly OAnimation: OAnimationKeywords<'OAnimation'>;
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
  readonly OAnimationDelay: OAnimationDelayKeywords<'OAnimationDelay'>;
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
  readonly OAnimationDirection: OAnimationDirectionKeywords<'OAnimationDirection'>;
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
  readonly OAnimationDuration: OAnimationDurationKeywords<'OAnimationDuration'>;
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
  readonly OAnimationFillMode: OAnimationFillModeKeywords<'OAnimationFillMode'>;
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
  readonly OAnimationIterationCount: OAnimationIterationCountKeywords<'OAnimationIterationCount'>;
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
  readonly OAnimationName: OAnimationNameKeywords<'OAnimationName'>;
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
  readonly OAnimationPlayState: OAnimationPlayStateKeywords<'OAnimationPlayState'>;
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
  readonly OAnimationTimingFunction: OAnimationTimingFunctionKeywords<'OAnimationTimingFunction'>;
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
  readonly OBackgroundSize: OBackgroundSizeKeywords<'OBackgroundSize'>;
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
  readonly objectFit: ObjectFitKeywords<'objectFit'>;
  /**
   * 设置替换元素内容在内容盒内的对齐位置。
   *
   * CSS 规范初始值：50% 50%。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  readonly objectPosition: ObjectPositionKeywords<'objectPosition'>;
  /**
   * 设置替换元素内容的可视区域，控制用于呈现的图像范围。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  readonly objectViewBox: ObjectViewBoxKeywords<'objectViewBox'>;
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
  readonly OBorderImage: OBorderImageKeywords<'OBorderImage'>;
  /**
   * 集中设置运动路径、起始位置、距离、方向和锚点。
   *
   * CSS 规范初始值：offset-position: normal；offset-path: none；offset-distance: 0；offset-anchor: auto；offset-rotate: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly offset: OffsetKeywords<'offset'>;
  /**
   * 设置元素沿运动路径移动时与路径相接的内部锚点。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  readonly offsetAnchor: OffsetAnchorKeywords<'offsetAnchor'>;
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
  readonly offsetBlock: OffsetBlockKeywords<'offsetBlock'>;
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
  readonly offsetBlockEnd: OffsetBlockEndKeywords<'offsetBlockEnd'>;
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
  readonly offsetBlockStart: OffsetBlockStartKeywords<'offsetBlockStart'>;
  /**
   * 设置元素沿运动路径行进的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  readonly offsetDistance: OffsetDistanceKeywords<'offsetDistance'>;
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
  readonly offsetInline: OffsetInlineKeywords<'offsetInline'>;
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
  readonly offsetInlineEnd: OffsetInlineEndKeywords<'offsetInlineEnd'>;
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
  readonly offsetInlineStart: OffsetInlineStartKeywords<'offsetInlineStart'>;
  /**
   * 设置元素运动所沿用的路径。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly offsetPath: OffsetPathKeywords<'offsetPath'>;
  /**
   * 设置运动路径的初始位置。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  readonly offsetPosition: OffsetPositionKeywords<'offsetPosition'>;
  /**
   * 设置元素沿运动路径移动时的方向和附加旋转。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  readonly offsetRotate: OffsetRotateKeywords<'offsetRotate'>;
  /**
   * 设置路径旋转的旧名称；新代码使用 offset-rotate。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotation
   */
  readonly offsetRotation: OffsetRotationKeywords<'offsetRotation'>;
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
  readonly OObjectFit: OObjectFitKeywords<'OObjectFit'>;
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
  readonly OObjectPosition: OObjectPositionKeywords<'OObjectPosition'>;
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
  readonly opacity: OpacityKeywords<'opacity'>;
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
  readonly order: OrderKeywords<'order'>;
  /**
   * 设置分页或分栏断点前需保留的最少行数。
   *
   * CSS 规范初始值：2。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  readonly orphans: OrphansKeywords<'orphans'>;
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
  readonly OTabSize: OTabSizeKeywords<'OTabSize'>;
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
  readonly OTextOverflow: OTextOverflowKeywords<'OTextOverflow'>;
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
  readonly OTransform: OTransformKeywords<'OTransform'>;
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
  readonly OTransformOrigin: OTransformOriginKeywords<'OTransformOrigin'>;
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
  readonly OTransition: OTransitionKeywords<'OTransition'>;
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
  readonly OTransitionDelay: OTransitionDelayKeywords<'OTransitionDelay'>;
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
  readonly OTransitionDuration: OTransitionDurationKeywords<'OTransitionDuration'>;
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
  readonly OTransitionProperty: OTransitionPropertyKeywords<'OTransitionProperty'>;
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
  readonly OTransitionTimingFunction: OTransitionTimingFunctionKeywords<'OTransitionTimingFunction'>;
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
  readonly outline: OutlineKeywords<'outline'>;
  /**
   * 设置轮廓线颜色。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  readonly outlineColor: OutlineColorKeywords<'outlineColor'>;
  /**
   * 设置轮廓线与边框边缘之间的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  readonly outlineOffset: OutlineOffsetKeywords<'outlineOffset'>;
  /**
   * 设置轮廓线线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  readonly outlineStyle: OutlineStyleKeywords<'outlineStyle'>;
  /**
   * 设置轮廓线宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 边框与轮廓
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  readonly outlineWidth: OutlineWidthKeywords<'outlineWidth'>;
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
  readonly overflow: OverflowKeywords<'overflow'>;
  /**
   * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  readonly overflowAnchor: OverflowAnchorKeywords<'overflowAnchor'>;
  /**
   * 设置逻辑块轴上的溢出行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  readonly overflowBlock: OverflowBlockKeywords<'overflowBlock'>;
  /**
   * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。
   *
   * CSS 规范初始值：padding-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  readonly overflowClipBox: OverflowClipBoxKeywords<'overflowClipBox'>;
  /**
   * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。
   *
   * CSS 规范初始值：0px。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  readonly overflowClipMargin: OverflowClipMarginKeywords<'overflowClipMargin'>;
  /**
   * 设置逻辑行内轴上的溢出行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  readonly overflowInline: OverflowInlineKeywords<'overflowInline'>;
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
  readonly overflowWrap: OverflowWrapKeywords<'overflowWrap'>;
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
  readonly overflowX: OverflowXKeywords<'overflowX'>;
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
  readonly overflowY: OverflowYKeywords<'overflowY'>;
  /**
   * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  readonly overlay: OverlayKeywords<'overlay'>;
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
  readonly overscrollBehavior: OverscrollBehaviorKeywords<'overscrollBehavior'>;
  /**
   * 控制逻辑块轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  readonly overscrollBehaviorBlock: OverscrollBehaviorBlockKeywords<'overscrollBehaviorBlock'>;
  /**
   * 控制逻辑行内轴上到达滚动边界后的行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  readonly overscrollBehaviorInline: OverscrollBehaviorInlineKeywords<'overscrollBehaviorInline'>;
  /**
   * 控制水平方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  readonly overscrollBehaviorX: OverscrollBehaviorXKeywords<'overscrollBehaviorX'>;
  /**
   * 控制垂直方向到达滚动边界后的行为。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  readonly overscrollBehaviorY: OverscrollBehaviorYKeywords<'overscrollBehaviorY'>;
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
  readonly padding: PaddingKeywords<'padding'>;
  /**
   * 设置逻辑块轴起始侧和结束侧的内边距。
   *
   * CSS 规范初始值：padding-block-start: 0；padding-block-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  readonly paddingBlock: PaddingBlockKeywords<'paddingBlock'>;
  /**
   * 设置逻辑块轴结束侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  readonly paddingBlockEnd: PaddingBlockEndKeywords<'paddingBlockEnd'>;
  /**
   * 设置逻辑块轴起始侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  readonly paddingBlockStart: PaddingBlockStartKeywords<'paddingBlockStart'>;
  /**
   * 设置下内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  readonly paddingBottom: PaddingBottomKeywords<'paddingBottom'>;
  /**
   * 设置逻辑行内轴起始侧和结束侧的内边距。
   *
   * CSS 规范初始值：padding-inline-start: 0；padding-inline-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  readonly paddingInline: PaddingInlineKeywords<'paddingInline'>;
  /**
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  readonly paddingInlineEnd: PaddingInlineEndKeywords<'paddingInlineEnd'>;
  /**
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  readonly paddingInlineStart: PaddingInlineStartKeywords<'paddingInlineStart'>;
  /**
   * 设置左内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  readonly paddingLeft: PaddingLeftKeywords<'paddingLeft'>;
  /**
   * 设置右内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  readonly paddingRight: PaddingRightKeywords<'paddingRight'>;
  /**
   * 设置上内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  readonly paddingTop: PaddingTopKeywords<'paddingTop'>;
  /**
   * 选择分页媒体中使用的命名页面类型。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  readonly page: PageKeywords<'page'>;
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
  readonly pageBreakAfter: PageBreakAfterKeywords<'pageBreakAfter'>;
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
  readonly pageBreakBefore: PageBreakBeforeKeywords<'pageBreakBefore'>;
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
  readonly pageBreakInside: PageBreakInsideKeywords<'pageBreakInside'>;
  /**
   * 设置 SVG 填充、描边和标记的绘制先后顺序。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  readonly paintOrder: PaintOrderKeywords<'paintOrder'>;
  /**
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  readonly perspective: PerspectiveKeywords<'perspective'>;
  /**
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：50% 50%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  readonly perspectiveOrigin: PerspectiveOriginKeywords<'perspectiveOrigin'>;
  /**
   * 同时设置 align-content 与 justify-content。
   *
   * CSS 规范初始值：align-content: normal；justify-content: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly placeContent: PlaceContentKeywords<'placeContent'>;
  /**
   * 同时设置 align-items 与 justify-items。
   *
   * CSS 规范初始值：align-items: normal；justify-items: legacy。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly placeItems: PlaceItemsKeywords<'placeItems'>;
  /**
   * 同时设置 align-self 与 justify-self。
   *
   * CSS 规范初始值：align-self: auto；justify-self: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly placeSelf: PlaceSelfKeywords<'placeSelf'>;
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
  readonly pointerEvents: PointerEventsKeywords<'pointerEvents'>;
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
  readonly position: PositionKeywords<'position'>;
  /**
   * 选择绝对定位元素使用的默认锚点。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  readonly positionAnchor: PositionAnchorKeywords<'positionAnchor'>;
  /**
   * 选择相对于锚点的定位区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly positionArea: PositionAreaKeywords<'positionArea'>;
  /**
   * 同时设置锚点定位的候选回退方式及尝试顺序。
   *
   * CSS 规范初始值：position-try-fallbacks: none；position-try-order: normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly positionTry: PositionTryKeywords<'positionTry'>;
  /**
   * 设置锚点定位溢出时尝试的替代位置。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly positionTryFallbacks: PositionTryFallbacksKeywords<'positionTryFallbacks'>;
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
  readonly positionTryOptions: PositionTryOptionsKeywords<'positionTryOptions'>;
  /**
   * 设置锚点定位候选方案的尝试顺序。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  readonly positionTryOrder: PositionTryOrderKeywords<'positionTryOrder'>;
  /**
   * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。
   *
   * CSS 规范初始值：anchors-visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  readonly positionVisibility: PositionVisibilityKeywords<'positionVisibility'>;
  /**
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：economy。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 颜色与背景
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  readonly printColorAdjust: PrintColorAdjustKeywords<'printColorAdjust'>;
  /**
   * 设置生成引号所用的开闭字符对。
   *
   * CSS 规范初始值：由浏览器决定。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  readonly quotes: QuotesKeywords<'quotes'>;
  /**
   * 设置 SVG 圆的半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  readonly r: RKeywords<'r'>;
  /**
   * 设置用户是否能调整元素尺寸以及可调整的方向。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 交互与显示控制
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  readonly resize: ResizeKeywords<'resize'>;
  /**
   * 设置定位元素相对于其定位参照的右侧偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  readonly right: RightKeywords<'right'>;
  /**
   * 独立设置元素旋转，不必重写 transform 中的其他变换。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  readonly rotate: RotateKeywords<'rotate'>;
  /**
   * 设置布局中相邻行之间的间距。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内外间距
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  readonly rowGap: RowGapKeywords<'rowGap'>;
  /**
   * 设置注音文字与基底文字之间剩余空间的分配方式。
   *
   * CSS 规范初始值：space-around。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  readonly rubyAlign: RubyAlignKeywords<'rubyAlign'>;
  /**
   * 设置相邻注音容器的合并方式；使用前核对目标浏览器。
   *
   * CSS 规范初始值：separate。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  readonly rubyMerge: RubyMergeKeywords<'rubyMerge'>;
  /**
   * 控制注音文字是否可以悬伸到相邻文本上方。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  readonly rubyOverhang: RubyOverhangKeywords<'rubyOverhang'>;
  /**
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：alternate。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  readonly rubyPosition: RubyPositionKeywords<'rubyPosition'>;
  /**
   * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  readonly rx: RxKeywords<'rx'>;
  /**
   * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  readonly ry: RyKeywords<'ry'>;
  /**
   * 独立设置元素的缩放比例。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  readonly scale: ScaleKeywords<'scale'>;
  /**
   * 设置滚动条滑块和轨道的颜色。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  readonly scrollbarColor: ScrollbarColorKeywords<'scrollbarColor'>;
  /**
   * 设置是否预留滚动条槽位，以减少滚动条出现时的布局变化。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  readonly scrollbarGutter: ScrollbarGutterKeywords<'scrollbarGutter'>;
  /**
   * 设置滚动条采用正常、较细或隐藏的外观。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  readonly scrollbarWidth: ScrollbarWidthKeywords<'scrollbarWidth'>;
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
  readonly scrollBehavior: ScrollBehaviorKeywords<'scrollBehavior'>;
  /**
   * 将元素声明为祖先滚动容器首次呈现时的候选滚动吸附目标。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  readonly scrollInitialTarget: ScrollInitialTargetKeywords<'scrollInitialTarget'>;
  /**
   * 设置元素滚动目标区域的四边外扩距离，不改变普通布局外边距。
   *
   * CSS 规范初始值：scroll-margin-bottom: 0；scroll-margin-left: 0；scroll-margin-right: 0；scroll-margin-top: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  readonly scrollMargin: ScrollMarginKeywords<'scrollMargin'>;
  /**
   * 设置滚动目标区域在逻辑块轴两侧的外扩距离。
   *
   * CSS 规范初始值：scroll-margin-block-start: 0；scroll-margin-block-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  readonly scrollMarginBlock: ScrollMarginBlockKeywords<'scrollMarginBlock'>;
  /**
   * 设置滚动目标区域在逻辑块轴结束侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  readonly scrollMarginBlockEnd: ScrollMarginBlockEndKeywords<'scrollMarginBlockEnd'>;
  /**
   * 设置滚动目标区域在逻辑块轴起始侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  readonly scrollMarginBlockStart: ScrollMarginBlockStartKeywords<'scrollMarginBlockStart'>;
  /**
   * 设置滚动目标区域下侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  readonly scrollMarginBottom: ScrollMarginBottomKeywords<'scrollMarginBottom'>;
  /**
   * 设置滚动目标区域在逻辑行内轴两侧的外扩距离。
   *
   * CSS 规范初始值：scroll-margin-inline-start: 0；scroll-margin-inline-end: 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  readonly scrollMarginInline: ScrollMarginInlineKeywords<'scrollMarginInline'>;
  /**
   * 设置滚动目标区域在逻辑行内轴结束侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  readonly scrollMarginInlineEnd: ScrollMarginInlineEndKeywords<'scrollMarginInlineEnd'>;
  /**
   * 设置滚动目标区域在逻辑行内轴起始侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  readonly scrollMarginInlineStart: ScrollMarginInlineStartKeywords<'scrollMarginInlineStart'>;
  /**
   * 设置滚动目标区域左侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  readonly scrollMarginLeft: ScrollMarginLeftKeywords<'scrollMarginLeft'>;
  /**
   * 设置滚动目标区域右侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  readonly scrollMarginRight: ScrollMarginRightKeywords<'scrollMarginRight'>;
  /**
   * 设置滚动目标区域上侧的外扩距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  readonly scrollMarginTop: ScrollMarginTopKeywords<'scrollMarginTop'>;
  /**
   * 设置滚动容器最佳可视区域的四边内缩距离。
   *
   * CSS 规范初始值：scroll-padding-bottom: auto；scroll-padding-left: auto；scroll-padding-right: auto；scroll-padding-top: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  readonly scrollPadding: ScrollPaddingKeywords<'scrollPadding'>;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴两侧的内缩距离。
   *
   * CSS 规范初始值：scroll-padding-block-start: auto；scroll-padding-block-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  readonly scrollPaddingBlock: ScrollPaddingBlockKeywords<'scrollPaddingBlock'>;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴结束侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  readonly scrollPaddingBlockEnd: ScrollPaddingBlockEndKeywords<'scrollPaddingBlockEnd'>;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴起始侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  readonly scrollPaddingBlockStart: ScrollPaddingBlockStartKeywords<'scrollPaddingBlockStart'>;
  /**
   * 设置滚动容器最佳可视区域下侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  readonly scrollPaddingBottom: ScrollPaddingBottomKeywords<'scrollPaddingBottom'>;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴两侧的内缩距离。
   *
   * CSS 规范初始值：scroll-padding-inline-start: auto；scroll-padding-inline-end: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  readonly scrollPaddingInline: ScrollPaddingInlineKeywords<'scrollPaddingInline'>;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴结束侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  readonly scrollPaddingInlineEnd: ScrollPaddingInlineEndKeywords<'scrollPaddingInlineEnd'>;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴起始侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  readonly scrollPaddingInlineStart: ScrollPaddingInlineStartKeywords<'scrollPaddingInlineStart'>;
  /**
   * 设置滚动容器最佳可视区域左侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  readonly scrollPaddingLeft: ScrollPaddingLeftKeywords<'scrollPaddingLeft'>;
  /**
   * 设置滚动容器最佳可视区域右侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  readonly scrollPaddingRight: ScrollPaddingRightKeywords<'scrollPaddingRight'>;
  /**
   * 设置滚动容器最佳可视区域上侧的内缩距离。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  readonly scrollPaddingTop: ScrollPaddingTopKeywords<'scrollPaddingTop'>;
  /**
   * 设置元素作为滚动吸附目标时在块轴和行内轴上的对齐位置。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  readonly scrollSnapAlign: ScrollSnapAlignKeywords<'scrollSnapAlign'>;
  /**
   * 指定旧版滚动子项的吸附坐标，现代布局使用 scroll-snap-align。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  readonly scrollSnapCoordinate: ScrollSnapCoordinateKeywords<'scrollSnapCoordinate'>;
  /**
   * 指定旧版滚动容器中吸附位置对齐的目标坐标。
   *
   * CSS 规范初始值：0px 0px。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  readonly scrollSnapDestination: ScrollSnapDestinationKeywords<'scrollSnapDestination'>;
  /**
   * 设置滚动吸附区域外扩的旧名称；新代码使用 scroll-margin。
   *
   * 初始值：当前固定数据源未记录，参见该属性规范。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin
   */
  readonly scrollSnapMargin: ScrollSnapMarginKeywords<'scrollSnapMargin'>;
  /**
   * 设置滚动吸附区域下侧外扩的旧名称；新代码使用 scroll-margin-bottom。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-bottom
   */
  readonly scrollSnapMarginBottom: ScrollSnapMarginBottomKeywords<'scrollSnapMarginBottom'>;
  /**
   * 设置滚动吸附区域左侧外扩的旧名称；新代码使用 scroll-margin-left。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-left
   */
  readonly scrollSnapMarginLeft: ScrollSnapMarginLeftKeywords<'scrollSnapMarginLeft'>;
  /**
   * 设置滚动吸附区域右侧外扩的旧名称；新代码使用 scroll-margin-right。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-right
   */
  readonly scrollSnapMarginRight: ScrollSnapMarginRightKeywords<'scrollSnapMarginRight'>;
  /**
   * 设置滚动吸附区域上侧外扩的旧名称；新代码使用 scroll-margin-top。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-margin-top
   */
  readonly scrollSnapMarginTop: ScrollSnapMarginTopKeywords<'scrollSnapMarginTop'>;
  /**
   * 指定旧版水平滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-x
   */
  readonly scrollSnapPointsX: ScrollSnapPointsXKeywords<'scrollSnapPointsX'>;
  /**
   * 指定旧版垂直滚动吸附位置列表；现代吸附使用容器和子项的吸附属性。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-points-y
   */
  readonly scrollSnapPointsY: ScrollSnapPointsYKeywords<'scrollSnapPointsY'>;
  /**
   * 设置滚动时是否允许越过该元素的吸附位置。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  readonly scrollSnapStop: ScrollSnapStopKeywords<'scrollSnapStop'>;
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
  readonly scrollSnapType: ScrollSnapTypeKeywords<'scrollSnapType'>;
  /**
   * 控制旧版水平滚动吸附的强制程度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-x
   */
  readonly scrollSnapTypeX: ScrollSnapTypeXKeywords<'scrollSnapTypeX'>;
  /**
   * 控制旧版垂直滚动吸附的强制程度。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-y
   */
  readonly scrollSnapTypeY: ScrollSnapTypeYKeywords<'scrollSnapTypeY'>;
  /**
   * 同时声明滚动进度时间线的名称和轴。
   *
   * CSS 规范初始值：scroll-timeline-name: none；scroll-timeline-axis: block。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  readonly scrollTimeline: ScrollTimelineKeywords<'scrollTimeline'>;
  /**
   * 设置滚动进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：block。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  readonly scrollTimelineAxis: ScrollTimelineAxisKeywords<'scrollTimelineAxis'>;
  /**
   * 声明基于当前容器滚动进度的时间线名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 滚动与溢出
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  readonly scrollTimelineName: ScrollTimelineNameKeywords<'scrollTimelineName'>;
  /**
   * 设置从图像 alpha 信息提取环绕形状时的阈值。
   *
   * CSS 规范初始值：0.0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  readonly shapeImageThreshold: ShapeImageThresholdKeywords<'shapeImageThreshold'>;
  /**
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  readonly shapeMargin: ShapeMarginKeywords<'shapeMargin'>;
  /**
   * 设置浮动元素周围行内内容所环绕的形状。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  readonly shapeOutside: ShapeOutsideKeywords<'shapeOutside'>;
  /**
   * 向 SVG 渲染器提供图形绘制精度与速度的偏好。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 视觉效果与图像
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  readonly shapeRendering: ShapeRenderingKeywords<'shapeRendering'>;
  /**
   * 设置语音呈现时文字、数字和标点的朗读方式；使用前核对语音媒体支持。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  readonly speakAs: SpeakAsKeywords<'speakAs'>;
  /**
   * 设置 SVG 渐变 stop 节点的颜色。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  readonly stopColor: StopColorKeywords<'stopColor'>;
  /**
   * 设置 SVG 渐变 stop 节点的不透明度。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  readonly stopOpacity: StopOpacityKeywords<'stopOpacity'>;
  /**
   * 设置 SVG 图形轮廓的描边绘制方式。
   *
   * CSS 规范初始值：stroke-dasharray: none；stroke-dashoffset: 0；stroke-linecap: butt；stroke-linejoin: miter；stroke-miterlimit: 4；stroke-opacity: 1；stroke-width: 1px。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  readonly stroke: StrokeKeywords<'stroke'>;
  /**
   * 设置描边颜色的扩展属性；常规 SVG 优先使用 stroke 并核对支持情况。
   *
   * CSS 规范初始值：transparent。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  readonly strokeColor: StrokeColorKeywords<'strokeColor'>;
  /**
   * 设置 SVG 描边虚线中线段与空隙的长度序列。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  readonly strokeDasharray: StrokeDasharrayKeywords<'strokeDasharray'>;
  /**
   * 设置 SVG 虚线描边相对于路径起点的偏移。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  readonly strokeDashoffset: StrokeDashoffsetKeywords<'strokeDashoffset'>;
  /**
   * 设置开放 SVG 子路径端点的描边形状。
   *
   * CSS 规范初始值：butt。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  readonly strokeLinecap: StrokeLinecapKeywords<'strokeLinecap'>;
  /**
   * 设置 SVG 路径转角处描边的连接形状。
   *
   * CSS 规范初始值：miter。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  readonly strokeLinejoin: StrokeLinejoinKeywords<'strokeLinejoin'>;
  /**
   * 限制尖角连接的延伸比例，超过阈值时改变连接形状。
   *
   * CSS 规范初始值：4。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  readonly strokeMiterlimit: StrokeMiterlimitKeywords<'strokeMiterlimit'>;
  /**
   * 设置 SVG 描边的不透明度，不影响填充。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  readonly strokeOpacity: StrokeOpacityKeywords<'strokeOpacity'>;
  /**
   * 设置 SVG 描边宽度。
   *
   * CSS 规范初始值：1px。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  readonly strokeWidth: StrokeWidthKeywords<'strokeWidth'>;
  /**
   * 设置表格列宽采用自动还是固定布局算法。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  readonly tableLayout: TableLayoutKeywords<'tableLayout'>;
  /**
   * 设置保留制表符时每个制表位的宽度。
   *
   * CSS 规范初始值：8。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  readonly tabSize: TabSizeKeywords<'tabSize'>;
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
  readonly textAlign: TextAlignKeywords<'textAlign'>;
  /**
   * 设置段落最后一行或强制换行前一行的对齐方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  readonly textAlignLast: TextAlignLastKeywords<'textAlignLast'>;
  /**
   * 设置 SVG 文本片段相对于定位点的锚定方式。
   *
   * CSS 规范初始值：start。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  readonly textAnchor: TextAnchorKeywords<'textAnchor'>;
  /**
   * 设置中西文、数字等不同文字系统之间的自动间距。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly textAutospace: TextAutospaceKeywords<'textAutospace'>;
  /**
   * 同时设置文本盒边缘参照及首尾空白裁减。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly textBox: TextBoxKeywords<'textBox'>;
  /**
   * 选择文本盒裁减或对齐使用的字体边缘度量。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  readonly textBoxEdge: TextBoxEdgeKeywords<'textBoxEdge'>;
  /**
   * 裁减文本块开头或结尾的额外行高空白。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  readonly textBoxTrim: TextBoxTrimKeywords<'textBoxTrim'>;
  /**
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  readonly textCombineUpright: TextCombineUprightKeywords<'textCombineUpright'>;
  /**
   * 集中设置文本装饰线的位置、线型、颜色及粗细。
   *
   * CSS 规范初始值：text-decoration-color: currentcolor；text-decoration-style: solid；text-decoration-line: none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  readonly textDecoration: TextDecorationKeywords<'textDecoration'>;
  /**
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  readonly textDecorationColor: TextDecorationColorKeywords<'textDecorationColor'>;
  /**
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly textDecorationLine: TextDecorationLineKeywords<'textDecorationLine'>;
  /**
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：objects。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly textDecorationSkip: TextDecorationSkipKeywords<'textDecorationSkip'>;
  /**
   * 设置装饰线是否避让字形的笔画。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  readonly textDecorationSkipInk: TextDecorationSkipInkKeywords<'textDecorationSkipInk'>;
  /**
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：solid。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  readonly textDecorationStyle: TextDecorationStyleKeywords<'textDecorationStyle'>;
  /**
   * 设置文本装饰线粗细。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  readonly textDecorationThickness: TextDecorationThicknessKeywords<'textDecorationThickness'>;
  /**
   * 同时设置文字着重号的样式和颜色。
   *
   * CSS 规范初始值：text-emphasis-style: none；text-emphasis-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  readonly textEmphasis: TextEmphasisKeywords<'textEmphasis'>;
  /**
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  readonly textEmphasisColor: TextEmphasisColorKeywords<'textEmphasisColor'>;
  /**
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  readonly textEmphasisPosition: TextEmphasisPositionKeywords<'textEmphasisPosition'>;
  /**
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  readonly textEmphasisStyle: TextEmphasisStyleKeywords<'textEmphasisStyle'>;
  /**
   * 设置文本行的缩进距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  readonly textIndent: TextIndentKeywords<'textIndent'>;
  /**
   * 设置两端对齐时增加间距的算法。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  readonly textJustify: TextJustifyKeywords<'textJustify'>;
  /**
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：mixed。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  readonly textOrientation: TextOrientationKeywords<'textOrientation'>;
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
  readonly textOverflow: TextOverflowKeywords<'textOverflow'>;
  /**
   * 向渲染器提供文本速度、可读性或几何精度的偏好。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  readonly textRendering: TextRenderingKeywords<'textRendering'>;
  /**
   * 设置文字及其装饰的阴影，可叠加多层。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  readonly textShadow: TextShadowKeywords<'textShadow'>;
  /**
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：支持文本放大的移动浏览器为 auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  readonly textSizeAdjust: TextSizeAdjustKeywords<'textSizeAdjust'>;
  /**
   * 设置东亚文字标点等字符周围空白的裁减。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  readonly textSpacingTrim: TextSpacingTrimKeywords<'textSpacingTrim'>;
  /**
   * 设置文字显示时的大小写、全角或其他字形转换。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly textTransform: TextTransformKeywords<'textTransform'>;
  /**
   * 设置下划线相对于默认位置的偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  readonly textUnderlineOffset: TextUnderlineOffsetKeywords<'textUnderlineOffset'>;
  /**
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  readonly textUnderlinePosition: TextUnderlinePositionKeywords<'textUnderlinePosition'>;
  /**
   * 同时设置文本是否换行及换行策略。
   *
   * CSS 规范初始值：wrap。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  readonly textWrap: TextWrapKeywords<'textWrap'>;
  /**
   * 设置文本是否允许软换行。
   *
   * CSS 规范初始值：wrap。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  readonly textWrapMode: TextWrapModeKeywords<'textWrapMode'>;
  /**
   * 设置文本换行的排版策略，例如平衡各行长度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  readonly textWrapStyle: TextWrapStyleKeywords<'textWrapStyle'>;
  /**
   * 扩大命名动画时间线的可引用作用域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  readonly timelineScope: TimelineScopeKeywords<'timelineScope'>;
  /**
   * 设置定位元素相对于其定位参照的上侧偏移。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  readonly top: TopKeywords<'top'>;
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
  readonly touchAction: TouchActionKeywords<'touchAction'>;
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
  readonly transform: TransformKeywords<'transform'>;
  /**
   * 设置变换及其原点所依据的参照盒。
   *
   * CSS 规范初始值：view-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly transformBox: TransformBoxKeywords<'transformBox'>;
  /**
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：50% 50% 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  readonly transformOrigin: TransformOriginKeywords<'transformOrigin'>;
  /**
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：flat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  readonly transformStyle: TransformStyleKeywords<'transformStyle'>;
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
  readonly transition: TransitionKeywords<'transition'>;
  /**
   * 控制离散属性是否可以启动 CSS 过渡。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  readonly transitionBehavior: TransitionBehaviorKeywords<'transitionBehavior'>;
  /**
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  readonly transitionDelay: TransitionDelayKeywords<'transitionDelay'>;
  /**
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  readonly transitionDuration: TransitionDurationKeywords<'transitionDuration'>;
  /**
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * CSS 规范初始值：all。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  readonly transitionProperty: TransitionPropertyKeywords<'transitionProperty'>;
  /**
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly transitionTimingFunction: TransitionTimingFunctionKeywords<'transitionTimingFunction'>;
  /**
   * 独立设置元素在二维或三维空间中的平移。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  readonly translate: TranslateKeywords<'translate'>;
  /**
   * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly unicodeBidi: UnicodeBidiKeywords<'unicodeBidi'>;
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
  readonly userSelect: UserSelectKeywords<'userSelect'>;
  /**
   * 设置 SVG 图形变换时对描边等矢量效果的处理。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category SVG 属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  readonly vectorEffect: VectorEffectKeywords<'vectorEffect'>;
  /**
   * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。
   *
   * CSS 规范初始值：baseline。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 布局与定位
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly verticalAlign: VerticalAlignKeywords<'verticalAlign'>;
  /**
   * 同时声明基于元素可见进度的时间线名称与轴。
   *
   * CSS 规范初始值：view-timeline-name: none；view-timeline-axis: block。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  readonly viewTimeline: ViewTimelineKeywords<'viewTimeline'>;
  /**
   * 设置可见进度时间线所观察的滚动轴。
   *
   * CSS 规范初始值：block。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  readonly viewTimelineAxis: ViewTimelineAxisKeywords<'viewTimelineAxis'>;
  /**
   * 设置可见进度时间线使用的滚动视口内缩范围。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  readonly viewTimelineInset: ViewTimelineInsetKeywords<'viewTimelineInset'>;
  /**
   * 声明基于元素进入和离开滚动视口的时间线名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  readonly viewTimelineName: ViewTimelineNameKeywords<'viewTimelineName'>;
  /**
   * 为视图过渡的快照伪元素分组，以便共用样式。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  readonly viewTransitionClass: ViewTransitionClassKeywords<'viewTransitionClass'>;
  /**
   * 为视图过渡中的元素命名，以匹配前后状态的快照。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 动画与变换
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  readonly viewTransitionName: ViewTransitionNameKeywords<'viewTransitionName'>;
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
  readonly visibility: VisibilityKeywords<'visibility'>;
  /**
   * 兼容属性 -webkit-align-content；优先参考标准属性及浏览器支持范围。
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly WebkitAlignContent: WebkitAlignContentKeywords<'WebkitAlignContent'>;
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
  readonly WebkitAlignItems: WebkitAlignItemsKeywords<'WebkitAlignItems'>;
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
  readonly WebkitAlignSelf: WebkitAlignSelfKeywords<'WebkitAlignSelf'>;
  /**
   * 兼容属性 -webkit-animation；优先参考标准属性及浏览器支持范围。
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。
   *
   * CSS 规范初始值：animation-name: none；animation-duration: 0s；animation-timing-function: ease；animation-delay: 0s；animation-iteration-count: 1；animation-direction: normal；animation-fill-mode: none；animation-play-state: running；animation-timeline: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly WebkitAnimation: WebkitAnimationKeywords<'WebkitAnimation'>;
  /**
   * 兼容属性 -webkit-animation-delay；优先参考标准属性及浏览器支持范围。
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-delay
   */
  readonly WebkitAnimationDelay: WebkitAnimationDelayKeywords<'WebkitAnimationDelay'>;
  /**
   * 兼容属性 -webkit-animation-direction；优先参考标准属性及浏览器支持范围。
   * 设置动画按正向、反向或交替方向播放。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  readonly WebkitAnimationDirection: WebkitAnimationDirectionKeywords<'WebkitAnimationDirection'>;
  /**
   * 兼容属性 -webkit-animation-duration；优先参考标准属性及浏览器支持范围。
   * 设置动画完成一次循环的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-duration
   */
  readonly WebkitAnimationDuration: WebkitAnimationDurationKeywords<'WebkitAnimationDuration'>;
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
  readonly WebkitAnimationFillMode: WebkitAnimationFillModeKeywords<'WebkitAnimationFillMode'>;
  /**
   * 兼容属性 -webkit-animation-iteration-count；优先参考标准属性及浏览器支持范围。
   * 设置动画循环次数，或无限循环。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-iteration-count
   */
  readonly WebkitAnimationIterationCount: WebkitAnimationIterationCountKeywords<'WebkitAnimationIterationCount'>;
  /**
   * 兼容属性 -webkit-animation-name；优先参考标准属性及浏览器支持范围。
   * 选择要播放的 @keyframes 动画名称。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-name
   */
  readonly WebkitAnimationName: WebkitAnimationNameKeywords<'WebkitAnimationName'>;
  /**
   * 兼容属性 -webkit-animation-play-state；优先参考标准属性及浏览器支持范围。
   * 控制动画运行或暂停，暂停后可从原位置继续。
   *
   * CSS 规范初始值：running。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-play-state
   */
  readonly WebkitAnimationPlayState: WebkitAnimationPlayStateKeywords<'WebkitAnimationPlayState'>;
  /**
   * 兼容属性 -webkit-animation-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置动画每个关键帧区间内进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly WebkitAnimationTimingFunction: WebkitAnimationTimingFunctionKeywords<'WebkitAnimationTimingFunction'>;
  /**
   * 兼容属性 -webkit-appearance；优先参考标准属性及浏览器支持范围。
   * 控制元素是否采用平台原生控件外观。
   *
   * CSS 规范初始值：none（浏览器默认样式表可能覆盖）。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly WebkitAppearance: WebkitAppearanceKeywords<'WebkitAppearance'>;
  /**
   * 兼容属性 -webkit-backdrop-filter；优先参考标准属性及浏览器支持范围。
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backdrop-filter
   */
  readonly WebkitBackdropFilter: WebkitBackdropFilterKeywords<'WebkitBackdropFilter'>;
  /**
   * 兼容属性 -webkit-backface-visibility；优先参考标准属性及浏览器支持范围。
   * 控制经过三维变换后背向观察者的元素背面是否可见。
   *
   * CSS 规范初始值：visible。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backface-visibility
   */
  readonly WebkitBackfaceVisibility: WebkitBackfaceVisibilityKeywords<'WebkitBackfaceVisibility'>;
  /**
   * 兼容属性 -webkit-background-clip；优先参考标准属性及浏览器支持范围。
   * 设置背景允许绘制到的边界区域。
   *
   * CSS 规范初始值：border-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  readonly WebkitBackgroundClip: WebkitBackgroundClipKeywords<'WebkitBackgroundClip'>;
  /**
   * 兼容属性 -webkit-background-origin；优先参考标准属性及浏览器支持范围。
   * 设置背景图像定位所依据的盒子区域。
   *
   * CSS 规范初始值：padding-box。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  readonly WebkitBackgroundOrigin: WebkitBackgroundOriginKeywords<'WebkitBackgroundOrigin'>;
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
  readonly WebkitBackgroundSize: WebkitBackgroundSizeKeywords<'WebkitBackgroundSize'>;
  /**
   * 兼容属性 -webkit-border-before；优先参考标准属性 borderBlockStart及浏览器支持范围。
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。
   *
   * CSS 规范初始值：border-width: 见其子属性；border-style: 见其子属性；color: canvastext。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before
   */
  readonly WebkitBorderBefore: WebkitBorderBeforeKeywords<'WebkitBorderBefore'>;
  /**
   * 兼容属性 -webkit-border-before-color；优先参考标准属性 borderBlockStartColor及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-color
   */
  readonly WebkitBorderBeforeColor: WebkitBorderBeforeColorKeywords<'WebkitBorderBeforeColor'>;
  /**
   * 兼容属性 -webkit-border-before-style；优先参考标准属性 borderBlockStartStyle及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly WebkitBorderBeforeStyle: WebkitBorderBeforeStyleKeywords<'WebkitBorderBeforeStyle'>;
  /**
   * 兼容属性 -webkit-border-before-width；优先参考标准属性 borderBlockStartWidth及浏览器支持范围。
   * 设置逻辑块轴起始侧的边框宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  readonly WebkitBorderBeforeWidth: WebkitBorderBeforeWidthKeywords<'WebkitBorderBeforeWidth'>;
  /**
   * 兼容属性 -webkit-border-bottom-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左下角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-left-radius
   */
  readonly WebkitBorderBottomLeftRadius: WebkitBorderBottomLeftRadiusKeywords<'WebkitBorderBottomLeftRadius'>;
  /**
   * 兼容属性 -webkit-border-bottom-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右下角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-bottom-right-radius
   */
  readonly WebkitBorderBottomRightRadius: WebkitBorderBottomRightRadiusKeywords<'WebkitBorderBottomRightRadius'>;
  /**
   * 兼容属性 -webkit-border-image；优先参考标准属性及浏览器支持范围。
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。
   *
   * CSS 规范初始值：border-image-source: none；border-image-slice: 100%；border-image-width: 1；border-image-outset: 0；border-image-repeat: stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  readonly WebkitBorderImage: WebkitBorderImageKeywords<'WebkitBorderImage'>;
  /**
   * 兼容属性 -webkit-border-image-slice；优先参考标准属性及浏览器支持范围。
   * 设置边框图像的切片位置及是否填充中间区域。
   *
   * CSS 规范初始值：100%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image-slice
   */
  readonly WebkitBorderImageSlice: WebkitBorderImageSliceKeywords<'WebkitBorderImageSlice'>;
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
  readonly WebkitBorderRadius: WebkitBorderRadiusKeywords<'WebkitBorderRadius'>;
  /**
   * 兼容属性 -webkit-border-top-left-radius；优先参考标准属性及浏览器支持范围。
   * 设置左上角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-left-radius
   */
  readonly WebkitBorderTopLeftRadius: WebkitBorderTopLeftRadiusKeywords<'WebkitBorderTopLeftRadius'>;
  /**
   * 兼容属性 -webkit-border-top-right-radius；优先参考标准属性及浏览器支持范围。
   * 设置右上角边框的圆角半径。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-top-right-radius
   */
  readonly WebkitBorderTopRightRadius: WebkitBorderTopRightRadiusKeywords<'WebkitBorderTopRightRadius'>;
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
  readonly WebkitBoxAlign: WebkitBoxAlignKeywords<'WebkitBoxAlign'>;
  /**
   * 兼容属性 -webkit-box-decoration-break；优先参考标准属性及浏览器支持范围。
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。
   *
   * CSS 规范初始值：slice。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-decoration-break
   */
  readonly WebkitBoxDecorationBreak: WebkitBoxDecorationBreakKeywords<'WebkitBoxDecorationBreak'>;
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
  readonly WebkitBoxDirection: WebkitBoxDirectionKeywords<'WebkitBoxDirection'>;
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
  readonly WebkitBoxFlex: WebkitBoxFlexKeywords<'WebkitBoxFlex'>;
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
  readonly WebkitBoxFlexGroup: WebkitBoxFlexGroupKeywords<'WebkitBoxFlexGroup'>;
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
  readonly WebkitBoxLines: WebkitBoxLinesKeywords<'WebkitBoxLines'>;
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
  readonly WebkitBoxOrdinalGroup: WebkitBoxOrdinalGroupKeywords<'WebkitBoxOrdinalGroup'>;
  /**
   * 指定旧版弹性盒的排列方向；仅为多行截断兼容保留，常规布局请使用 Flex/Grid。
   *
   * CSS 规范初始值：inline-axis。不同于浏览器默认样式表。
   * 是否继承：否。
   * @deprecated 历史属性；新代码优先使用标准替代属性。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  readonly WebkitBoxOrient: WebkitBoxOrientKeywords<'WebkitBoxOrient'>;
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
  readonly WebkitBoxPack: WebkitBoxPackKeywords<'WebkitBoxPack'>;
  /**
   * 兼容属性 -webkit-box-reflect；优先参考标准属性及浏览器支持范围。
   * 在指定方向生成元素的镜像，并可设置镜像间距和遮罩。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  readonly WebkitBoxReflect: WebkitBoxReflectKeywords<'WebkitBoxReflect'>;
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
  readonly WebkitBoxShadow: WebkitBoxShadowKeywords<'WebkitBoxShadow'>;
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
  readonly WebkitBoxSizing: WebkitBoxSizingKeywords<'WebkitBoxSizing'>;
  /**
   * 兼容属性 -webkit-clip-path；优先参考标准属性及浏览器支持范围。
   * 通过基本形状、路径或引用裁剪元素的可见区域。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly WebkitClipPath: WebkitClipPathKeywords<'WebkitClipPath'>;
  /**
   * 兼容属性 -webkit-column-count；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的目标栏数。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-count
   */
  readonly WebkitColumnCount: WebkitColumnCountKeywords<'WebkitColumnCount'>;
  /**
   * 兼容属性 -webkit-column-fill；优先参考标准属性及浏览器支持范围。
   * 设置多栏内容顺序填充还是尽量均衡栏高。
   *
   * CSS 规范初始值：balance。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-fill
   */
  readonly WebkitColumnFill: WebkitColumnFillKeywords<'WebkitColumnFill'>;
  /**
   * 兼容属性 -webkit-column-rule；优先参考标准属性及浏览器支持范围。
   * 设置多栏之间分隔线的宽度、线型和颜色。
   *
   * CSS 规范初始值：column-rule-width: medium；column-rule-style: none；column-rule-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule
   */
  readonly WebkitColumnRule: WebkitColumnRuleKeywords<'WebkitColumnRule'>;
  /**
   * 兼容属性 -webkit-column-rule-color；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-color
   */
  readonly WebkitColumnRuleColor: WebkitColumnRuleColorKeywords<'WebkitColumnRuleColor'>;
  /**
   * 兼容属性 -webkit-column-rule-style；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的线型。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly WebkitColumnRuleStyle: WebkitColumnRuleStyleKeywords<'WebkitColumnRuleStyle'>;
  /**
   * 兼容属性 -webkit-column-rule-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏分隔线的宽度。
   *
   * CSS 规范初始值：medium。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  readonly WebkitColumnRuleWidth: WebkitColumnRuleWidthKeywords<'WebkitColumnRuleWidth'>;
  /**
   * 兼容属性 -webkit-columns；优先参考标准属性及浏览器支持范围。
   * 同时设置多栏布局的首选栏宽和目标栏数。
   *
   * CSS 规范初始值：column-width: auto；column-count: auto；column-height: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-columns
   */
  readonly WebkitColumns: WebkitColumnsKeywords<'WebkitColumns'>;
  /**
   * 兼容属性 -webkit-column-span；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局中的元素是否跨越所有栏。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-span
   */
  readonly WebkitColumnSpan: WebkitColumnSpanKeywords<'WebkitColumnSpan'>;
  /**
   * 兼容属性 -webkit-column-width；优先参考标准属性及浏览器支持范围。
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-width
   */
  readonly WebkitColumnWidth: WebkitColumnWidthKeywords<'WebkitColumnWidth'>;
  /**
   * 兼容属性 -webkit-filter；优先参考标准属性及浏览器支持范围。
   * 对元素的最终图像应用模糊、亮度等滤镜。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-filter
   */
  readonly WebkitFilter: WebkitFilterKeywords<'WebkitFilter'>;
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
  readonly WebkitFlex: WebkitFlexKeywords<'WebkitFlex'>;
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
  readonly WebkitFlexBasis: WebkitFlexBasisKeywords<'WebkitFlexBasis'>;
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
  readonly WebkitFlexDirection: WebkitFlexDirectionKeywords<'WebkitFlexDirection'>;
  /**
   * 兼容属性 -webkit-flex-flow；优先参考标准属性及浏览器支持范围。
   * 同时设置弹性布局的主轴方向和换行方式。
   *
   * CSS 规范初始值：flex-direction: row；flex-wrap: nowrap。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly WebkitFlexFlow: WebkitFlexFlowKeywords<'WebkitFlexFlow'>;
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
  readonly WebkitFlexGrow: WebkitFlexGrowKeywords<'WebkitFlexGrow'>;
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
  readonly WebkitFlexShrink: WebkitFlexShrinkKeywords<'WebkitFlexShrink'>;
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
  readonly WebkitFlexWrap: WebkitFlexWrapKeywords<'WebkitFlexWrap'>;
  /**
   * 兼容属性 -webkit-font-feature-settings；优先参考标准属性及浏览器支持范围。
   * 通过 OpenType 特性标签控制字体的底层排版功能。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-feature-settings
   */
  readonly WebkitFontFeatureSettings: WebkitFontFeatureSettingsKeywords<'WebkitFontFeatureSettings'>;
  /**
   * 兼容属性 -webkit-font-kerning；优先参考标准属性及浏览器支持范围。
   * 设置是否应用字体提供的字偶间距调整。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-kerning
   */
  readonly WebkitFontKerning: WebkitFontKerningKeywords<'WebkitFontKerning'>;
  /**
   * 兼容属性 -webkit-font-smoothing；优先参考标准属性及浏览器支持范围。
   * 指定 WebKit 平台的字体平滑方式；不是通用的跨浏览器排版开关。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly WebkitFontSmoothing: WebkitFontSmoothingKeywords<'WebkitFontSmoothing'>;
  /**
   * 兼容属性 -webkit-font-variant-ligatures；优先参考标准属性及浏览器支持范围。
   * 设置字体连字的启用方式。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly WebkitFontVariantLigatures: WebkitFontVariantLigaturesKeywords<'WebkitFontVariantLigatures'>;
  /**
   * 兼容属性 -webkit-hyphenate-character；优先参考标准属性及浏览器支持范围。
   * 设置自动断词时插入的断字符号。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphenate-character
   */
  readonly WebkitHyphenateCharacter: WebkitHyphenateCharacterKeywords<'WebkitHyphenateCharacter'>;
  /**
   * 兼容属性 -webkit-hyphens；优先参考标准属性及浏览器支持范围。
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。
   *
   * CSS 规范初始值：manual。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphens
   */
  readonly WebkitHyphens: WebkitHyphensKeywords<'WebkitHyphens'>;
  /**
   * 兼容属性 -webkit-initial-letter；优先参考标准属性及浏览器支持范围。
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-initial-letter
   */
  readonly WebkitInitialLetter: WebkitInitialLetterKeywords<'WebkitInitialLetter'>;
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
  readonly WebkitJustifyContent: WebkitJustifyContentKeywords<'WebkitJustifyContent'>;
  /**
   * 兼容属性 -webkit-line-break；优先参考标准属性及浏览器支持范围。
   * 设置东亚文字标点等字符的换行严格程度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  readonly WebkitLineBreak: WebkitLineBreakKeywords<'WebkitLineBreak'>;
  /**
   * 限制多行文本显示的行数；与 display: -webkit-box、WebkitBoxOrient('vertical') 和 overflow: hidden 配合，不删除文本内容。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-clamp
   */
  readonly WebkitLineClamp: WebkitLineClampKeywords<'WebkitLineClamp'>;
  /**
   * 兼容属性 -webkit-logical-height；优先参考标准属性 blockSize及浏览器支持范围。
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly WebkitLogicalHeight: WebkitLogicalHeightKeywords<'WebkitLogicalHeight'>;
  /**
   * 兼容属性 -webkit-logical-width；优先参考标准属性 inlineSize及浏览器支持范围。
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly WebkitLogicalWidth: WebkitLogicalWidthKeywords<'WebkitLogicalWidth'>;
  /**
   * 兼容属性 -webkit-margin-end；优先参考标准属性 marginInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-end
   */
  readonly WebkitMarginEnd: WebkitMarginEndKeywords<'WebkitMarginEnd'>;
  /**
   * 兼容属性 -webkit-margin-start；优先参考标准属性 marginInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的外边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-margin-start
   */
  readonly WebkitMarginStart: WebkitMarginStartKeywords<'WebkitMarginStart'>;
  /**
   * 兼容属性 -webkit-mask；优先参考标准属性及浏览器支持范围。
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。
   *
   * CSS 规范初始值：-webkit-mask-image: none；-webkit-mask-repeat: repeat；-webkit-mask-attachment: scroll；-webkit-mask-position: 0% 0%；-webkit-mask-origin: padding；-webkit-mask-clip: border。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly WebkitMask: WebkitMaskKeywords<'WebkitMask'>;
  /**
   * 兼容属性 -webkit-mask-attachment；优先参考标准属性及浏览器支持范围。
   * 指定旧版遮罩图像是否随内容滚动。
   *
   * CSS 规范初始值：scroll。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  readonly WebkitMaskAttachment: WebkitMaskAttachmentKeywords<'WebkitMaskAttachment'>;
  /**
   * 兼容属性 -webkit-mask-box-image；优先参考标准属性 maskBorder及浏览器支持范围。
   * 设置基于九宫格图像切片的边框遮罩。
   *
   * CSS 规范初始值：mask-border-mode: alpha；mask-border-outset: 0；mask-border-repeat: stretch；mask-border-slice: 0；mask-border-source: none；mask-border-width: auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  readonly WebkitMaskBoxImage: WebkitMaskBoxImageKeywords<'WebkitMaskBoxImage'>;
  /**
   * 兼容属性 -webkit-mask-box-image-outset；优先参考标准属性 maskBorderOutset及浏览器支持范围。
   * 设置边框遮罩超出边框盒的距离。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-outset
   */
  readonly WebkitMaskBoxImageOutset: WebkitMaskBoxImageOutsetKeywords<'WebkitMaskBoxImageOutset'>;
  /**
   * 兼容属性 -webkit-mask-box-image-repeat；优先参考标准属性 maskBorderRepeat及浏览器支持范围。
   * 设置边框遮罩切片的重复或拉伸方式。
   *
   * CSS 规范初始值：stretch。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  readonly WebkitMaskBoxImageRepeat: WebkitMaskBoxImageRepeatKeywords<'WebkitMaskBoxImageRepeat'>;
  /**
   * 兼容属性 -webkit-mask-box-image-slice；优先参考标准属性 maskBorderSlice及浏览器支持范围。
   * 设置边框遮罩图像的切片位置。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-slice
   */
  readonly WebkitMaskBoxImageSlice: WebkitMaskBoxImageSliceKeywords<'WebkitMaskBoxImageSlice'>;
  /**
   * 兼容属性 -webkit-mask-box-image-source；优先参考标准属性 maskBorderSource及浏览器支持范围。
   * 设置边框遮罩的源图像。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-source
   */
  readonly WebkitMaskBoxImageSource: WebkitMaskBoxImageSourceKeywords<'WebkitMaskBoxImageSource'>;
  /**
   * 兼容属性 -webkit-mask-box-image-width；优先参考标准属性 maskBorderWidth及浏览器支持范围。
   * 设置边框遮罩各边的宽度。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-width
   */
  readonly WebkitMaskBoxImageWidth: WebkitMaskBoxImageWidthKeywords<'WebkitMaskBoxImageWidth'>;
  /**
   * 兼容属性 -webkit-mask-clip；优先参考标准属性及浏览器支持范围。
   * 设置遮罩效果允许作用的裁剪区域。
   *
   * CSS 规范初始值：border。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly WebkitMaskClip: WebkitMaskClipKeywords<'WebkitMaskClip'>;
  /**
   * 兼容属性 -webkit-mask-composite；优先参考标准属性及浏览器支持范围。
   * 设置多个遮罩图层之间的合成运算。
   *
   * CSS 规范初始值：source-over。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly WebkitMaskComposite: WebkitMaskCompositeKeywords<'WebkitMaskComposite'>;
  /**
   * 兼容属性 -webkit-mask-image；优先参考标准属性及浏览器支持范围。
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-image
   */
  readonly WebkitMaskImage: WebkitMaskImageKeywords<'WebkitMaskImage'>;
  /**
   * 兼容属性 -webkit-mask-origin；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像定位所依据的盒子。
   *
   * CSS 规范初始值：padding。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly WebkitMaskOrigin: WebkitMaskOriginKeywords<'WebkitMaskOrigin'>;
  /**
   * 兼容属性 -webkit-mask-position；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像在定位区域中的位置。
   *
   * CSS 规范初始值：0% 0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  readonly WebkitMaskPosition: WebkitMaskPositionKeywords<'WebkitMaskPosition'>;
  /**
   * 兼容属性 -webkit-mask-position-x；优先参考标准属性 backgroundPositionX及浏览器支持范围。
   * 设置遮罩图像的水平位置，可使用长度、百分比或位置关键字。
   *
   * CSS 规范初始值：0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  readonly WebkitMaskPositionX: WebkitMaskPositionXKeywords<'WebkitMaskPositionX'>;
  /**
   * 兼容属性 -webkit-mask-position-y；优先参考标准属性 backgroundPositionY及浏览器支持范围。
   * 设置遮罩图像的垂直位置，可使用长度、百分比或位置关键字。
   *
   * CSS 规范初始值：0%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  readonly WebkitMaskPositionY: WebkitMaskPositionYKeywords<'WebkitMaskPositionY'>;
  /**
   * 兼容属性 -webkit-mask-repeat；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的重复方式。
   *
   * CSS 规范初始值：repeat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly WebkitMaskRepeat: WebkitMaskRepeatKeywords<'WebkitMaskRepeat'>;
  /**
   * 兼容属性 -webkit-mask-repeat-x；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在水平方向的重复方式。
   *
   * CSS 规范初始值：repeat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  readonly WebkitMaskRepeatX: WebkitMaskRepeatXKeywords<'WebkitMaskRepeatX'>;
  /**
   * 兼容属性 -webkit-mask-repeat-y；优先参考标准属性及浏览器支持范围。
   * 控制旧版遮罩图像在垂直方向的重复方式。
   *
   * CSS 规范初始值：repeat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  readonly WebkitMaskRepeatY: WebkitMaskRepeatYKeywords<'WebkitMaskRepeatY'>;
  /**
   * 兼容属性 -webkit-mask-size；优先参考标准属性及浏览器支持范围。
   * 设置遮罩图像的尺寸。
   *
   * CSS 规范初始值：auto auto。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-size
   */
  readonly WebkitMaskSize: WebkitMaskSizeKeywords<'WebkitMaskSize'>;
  /**
   * 兼容属性 -webkit-max-inline-size；优先参考标准属性及浏览器支持范围。
   * 限制元素逻辑行内轴的最大尺寸。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  readonly WebkitMaxInlineSize: WebkitMaxInlineSizeKeywords<'WebkitMaxInlineSize'>;
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
  readonly WebkitOrder: WebkitOrderKeywords<'WebkitOrder'>;
  /**
   * 兼容属性 -webkit-overflow-scrolling；优先参考标准属性及浏览器支持范围。
   * 选择特定旧版 WebKit 触控环境的滚动方式，包括惯性滚动。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-overflow-scrolling
   */
  readonly WebkitOverflowScrolling: WebkitOverflowScrollingKeywords<'WebkitOverflowScrolling'>;
  /**
   * 兼容属性 -webkit-padding-end；优先参考标准属性 paddingInlineEnd及浏览器支持范围。
   * 设置逻辑行内轴结束侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-end
   */
  readonly WebkitPaddingEnd: WebkitPaddingEndKeywords<'WebkitPaddingEnd'>;
  /**
   * 兼容属性 -webkit-padding-start；优先参考标准属性 paddingInlineStart及浏览器支持范围。
   * 设置逻辑行内轴起始侧的内边距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-padding-start
   */
  readonly WebkitPaddingStart: WebkitPaddingStartKeywords<'WebkitPaddingStart'>;
  /**
   * 兼容属性 -webkit-perspective；优先参考标准属性及浏览器支持范围。
   * 设置观察子元素三维变换时的透视距离。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective
   */
  readonly WebkitPerspective: WebkitPerspectiveKeywords<'WebkitPerspective'>;
  /**
   * 兼容属性 -webkit-perspective-origin；优先参考标准属性及浏览器支持范围。
   * 设置三维透视的观察原点。
   *
   * CSS 规范初始值：50% 50%。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  readonly WebkitPerspectiveOrigin: WebkitPerspectiveOriginKeywords<'WebkitPerspectiveOrigin'>;
  /**
   * 兼容属性 -webkit-print-color-adjust；优先参考标准属性及浏览器支持范围。
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。
   *
   * CSS 规范初始值：economy。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-print-color-adjust
   */
  readonly WebkitPrintColorAdjust: WebkitPrintColorAdjustKeywords<'WebkitPrintColorAdjust'>;
  /**
   * 兼容属性 -webkit-ruby-position；优先参考标准属性及浏览器支持范围。
   * 设置注音文字相对于基底文字的位置。
   *
   * CSS 规范初始值：alternate。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  readonly WebkitRubyPosition: WebkitRubyPositionKeywords<'WebkitRubyPosition'>;
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
  readonly WebkitScrollSnapType: WebkitScrollSnapTypeKeywords<'WebkitScrollSnapType'>;
  /**
   * 兼容属性 -webkit-shape-margin；优先参考标准属性及浏览器支持范围。
   * 设置文字环绕形状之外的额外间距。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-shape-margin
   */
  readonly WebkitShapeMargin: WebkitShapeMarginKeywords<'WebkitShapeMargin'>;
  /**
   * 兼容属性 -webkit-tap-highlight-color；优先参考标准属性及浏览器支持范围。
   * 设置 WebKit 触控点击链接或可交互区域时的高亮颜色。
   *
   * CSS 规范初始值：black。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-tap-highlight-color
   */
  readonly WebkitTapHighlightColor: WebkitTapHighlightColorKeywords<'WebkitTapHighlightColor'>;
  /**
   * 兼容属性 -webkit-text-combine；优先参考标准属性 textCombineUpright及浏览器支持范围。
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-combine
   */
  readonly WebkitTextCombine: WebkitTextCombineKeywords<'WebkitTextCombine'>;
  /**
   * 兼容属性 -webkit-text-decoration-color；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-color
   */
  readonly WebkitTextDecorationColor: WebkitTextDecorationColorKeywords<'WebkitTextDecorationColor'>;
  /**
   * 兼容属性 -webkit-text-decoration-line；优先参考标准属性及浏览器支持范围。
   * 设置下划线、上划线或删除线等装饰线位置。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly WebkitTextDecorationLine: WebkitTextDecorationLineKeywords<'WebkitTextDecorationLine'>;
  /**
   * 兼容属性 -webkit-text-decoration-skip；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。
   *
   * CSS 规范初始值：objects。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly WebkitTextDecorationSkip: WebkitTextDecorationSkipKeywords<'WebkitTextDecorationSkip'>;
  /**
   * 兼容属性 -webkit-text-decoration-style；优先参考标准属性及浏览器支持范围。
   * 设置文本装饰线的实线、波浪线等线型。
   *
   * CSS 规范初始值：solid。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  readonly WebkitTextDecorationStyle: WebkitTextDecorationStyleKeywords<'WebkitTextDecorationStyle'>;
  /**
   * 兼容属性 -webkit-text-emphasis；优先参考标准属性及浏览器支持范围。
   * 同时设置文字着重号的样式和颜色。
   *
   * CSS 规范初始值：text-emphasis-style: none；text-emphasis-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis
   */
  readonly WebkitTextEmphasis: WebkitTextEmphasisKeywords<'WebkitTextEmphasis'>;
  /**
   * 兼容属性 -webkit-text-emphasis-color；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-color
   */
  readonly WebkitTextEmphasisColor: WebkitTextEmphasisColorKeywords<'WebkitTextEmphasisColor'>;
  /**
   * 兼容属性 -webkit-text-emphasis-position；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号位于文字的哪一侧。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-position
   */
  readonly WebkitTextEmphasisPosition: WebkitTextEmphasisPositionKeywords<'WebkitTextEmphasisPosition'>;
  /**
   * 兼容属性 -webkit-text-emphasis-style；优先参考标准属性及浏览器支持范围。
   * 设置文字着重号的形状和填充方式。
   *
   * CSS 规范初始值：none。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  readonly WebkitTextEmphasisStyle: WebkitTextEmphasisStyleKeywords<'WebkitTextEmphasisStyle'>;
  /**
   * 兼容属性 -webkit-text-fill-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形内部填充色，可独立于文字描边色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-fill-color
   */
  readonly WebkitTextFillColor: WebkitTextFillColorKeywords<'WebkitTextFillColor'>;
  /**
   * 兼容属性 -webkit-text-orientation；优先参考标准属性及浏览器支持范围。
   * 设置竖排模式下字符的方向。
   *
   * CSS 规范初始值：mixed。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  readonly WebkitTextOrientation: WebkitTextOrientationKeywords<'WebkitTextOrientation'>;
  /**
   * 兼容属性 -webkit-text-size-adjust；优先参考标准属性及浏览器支持范围。
   * 控制移动浏览器为提升可读性而进行的文字自动放大。
   *
   * CSS 规范初始值：支持文本放大的移动浏览器为 auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-size-adjust
   */
  readonly WebkitTextSizeAdjust: WebkitTextSizeAdjustKeywords<'WebkitTextSizeAdjust'>;
  /**
   * 兼容属性 -webkit-text-stroke；优先参考标准属性及浏览器支持范围。
   * 合并设置文字字形描边的宽度和颜色。
   *
   * CSS 规范初始值：-webkit-text-stroke-width: 0；-webkit-text-stroke-color: currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke
   */
  readonly WebkitTextStroke: WebkitTextStrokeKeywords<'WebkitTextStroke'>;
  /**
   * 兼容属性 -webkit-text-stroke-color；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边颜色。
   *
   * CSS 规范初始值：currentcolor。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-color
   */
  readonly WebkitTextStrokeColor: WebkitTextStrokeColorKeywords<'WebkitTextStrokeColor'>;
  /**
   * 兼容属性 -webkit-text-stroke-width；优先参考标准属性及浏览器支持范围。
   * 设置文字字形轮廓的描边宽度。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke-width
   */
  readonly WebkitTextStrokeWidth: WebkitTextStrokeWidthKeywords<'WebkitTextStrokeWidth'>;
  /**
   * 兼容属性 -webkit-text-underline-position；优先参考标准属性及浏览器支持范围。
   * 设置下划线相对于文字基线或竖排文字的放置方式。
   *
   * CSS 规范初始值：auto。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  readonly WebkitTextUnderlinePosition: WebkitTextUnderlinePositionKeywords<'WebkitTextUnderlinePosition'>;
  /**
   * 兼容属性 -webkit-touch-callout；优先参考标准属性及浏览器支持范围。
   * 控制特定 WebKit 触控环境是否显示长按内容菜单。
   *
   * CSS 规范初始值：default。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-touch-callout
   */
  readonly WebkitTouchCallout: WebkitTouchCalloutKeywords<'WebkitTouchCallout'>;
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
  readonly WebkitTransform: WebkitTransformKeywords<'WebkitTransform'>;
  /**
   * 兼容属性 -webkit-transform-origin；优先参考标准属性及浏览器支持范围。
   * 设置元素变换的原点。
   *
   * CSS 规范初始值：50% 50% 0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  readonly WebkitTransformOrigin: WebkitTransformOriginKeywords<'WebkitTransformOrigin'>;
  /**
   * 兼容属性 -webkit-transform-style；优先参考标准属性及浏览器支持范围。
   * 控制子元素的三维位置保留在三维空间还是展平。
   *
   * CSS 规范初始值：flat。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-style
   */
  readonly WebkitTransformStyle: WebkitTransformStyleKeywords<'WebkitTransformStyle'>;
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
  readonly WebkitTransition: WebkitTransitionKeywords<'WebkitTransition'>;
  /**
   * 兼容属性 -webkit-transition-delay；优先参考标准属性及浏览器支持范围。
   * 设置属性变化后开始过渡的延迟。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-delay
   */
  readonly WebkitTransitionDelay: WebkitTransitionDelayKeywords<'WebkitTransitionDelay'>;
  /**
   * 兼容属性 -webkit-transition-duration；优先参考标准属性及浏览器支持范围。
   * 设置过渡从开始到完成的时长。
   *
   * CSS 规范初始值：0s。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-duration
   */
  readonly WebkitTransitionDuration: WebkitTransitionDurationKeywords<'WebkitTransitionDuration'>;
  /**
   * 兼容属性 -webkit-transition-property；优先参考标准属性及浏览器支持范围。
   * 指定发生变化时需要过渡的 CSS 属性。
   *
   * CSS 规范初始值：all。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-property
   */
  readonly WebkitTransitionProperty: WebkitTransitionPropertyKeywords<'WebkitTransitionProperty'>;
  /**
   * 兼容属性 -webkit-transition-timing-function；优先参考标准属性及浏览器支持范围。
   * 设置过渡进度变化的缓动函数。
   *
   * CSS 规范初始值：ease。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly WebkitTransitionTimingFunction: WebkitTransitionTimingFunctionKeywords<'WebkitTransitionTimingFunction'>;
  /**
   * 兼容属性 -webkit-user-modify；优先参考标准属性及浏览器支持范围。
   * 控制内容能否被用户编辑的非标准旧接口；现代页面优先使用 contenteditable。
   *
   * CSS 规范初始值：read-only。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  readonly WebkitUserModify: WebkitUserModifyKeywords<'WebkitUserModify'>;
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
  readonly WebkitUserSelect: WebkitUserSelectKeywords<'WebkitUserSelect'>;
  /**
   * 兼容属性 -webkit-writing-mode；优先参考标准属性及浏览器支持范围。
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：horizontal-tb。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 厂商与历史兼容属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly WebkitWritingMode: WebkitWritingModeKeywords<'WebkitWritingMode'>;
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
  readonly whiteSpace: WhiteSpaceKeywords<'whiteSpace'>;
  /**
   * 设置空格、制表符和换行符如何折叠或保留。
   *
   * CSS 规范初始值：collapse。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  readonly whiteSpaceCollapse: WhiteSpaceCollapseKeywords<'whiteSpaceCollapse'>;
  /**
   * 设置分页或分栏断点后需保留的最少行数。
   *
   * CSS 规范初始值：2。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 内容、容器与分页
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  readonly widows: WidowsKeywords<'widows'>;
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
  readonly width: WidthKeywords<'width'>;
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
  readonly willChange: WillChangeKeywords<'willChange'>;
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
  readonly wordBreak: WordBreakKeywords<'wordBreak'>;
  /**
   * 设置单词或词间分隔符的额外间距。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  readonly wordSpacing: WordSpacingKeywords<'wordSpacing'>;
  /**
   * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。
   *
   * CSS 规范初始值：normal。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  readonly wordWrap: WordWrapKeywords<'wordWrap'>;
  /**
   * 设置水平或竖直书写模式，以及行和块的推进方向。
   *
   * CSS 规范初始值：horizontal-tb。不同于浏览器默认样式表。
   * 是否继承：是。
   * @category 文字与排版
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly writingMode: WritingModeKeywords<'writingMode'>;
  /**
   * 设置适用 SVG 元素的水平几何坐标。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  readonly x: XKeywords<'x'>;
  /**
   * 设置适用 SVG 元素的垂直几何坐标。
   *
   * CSS 规范初始值：0。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  readonly y: YKeywords<'y'>;
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
  readonly zIndex: ZIndexKeywords<'zIndex'>;
  /**
   * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。
   *
   * CSS 规范初始值：1。不同于浏览器默认样式表。
   * 是否继承：否。
   * @category 其他标准属性
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  readonly zoom: ZoomKeywords<'zoom'>;
}
