// 由 scripts/css/generate.mjs 从固定 csstype@3.2.3 生成。说明只进入类型声明。
import type * as CSS from 'csstype';
import type { Scalar } from '../values.ts';
type NativeProperties = CSS.Properties<Scalar>;
/** 保留字面量候选，同时接收原属性允许的自由 CSS 字符串。 */
type CssString = string & {};
export interface CssWideValues {
  /**
   * 旧版 Gecko 的初始值关键字；现代样式优先使用 initial。
   */
  readonly '-moz-initial': '-moz-initial';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   */
  readonly inherit: 'inherit';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   */
  readonly initial: 'initial';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   */
  readonly revert: 'revert';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   */
  readonly 'revert-layer': 'revert-layer';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   */
  readonly unset: 'unset';
}
export interface NamedColorValues {
  /**
   * CSS 命名颜色 aliceblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly aliceblue: 'aliceblue';
  /**
   * CSS 命名颜色 antiquewhite。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly antiquewhite: 'antiquewhite';
  /**
   * CSS 命名颜色 aqua。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly aqua: 'aqua';
  /**
   * CSS 命名颜色 aquamarine。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly aquamarine: 'aquamarine';
  /**
   * CSS 命名颜色 azure。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly azure: 'azure';
  /**
   * CSS 命名颜色 beige。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly beige: 'beige';
  /**
   * CSS 命名颜色 bisque。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly bisque: 'bisque';
  /**
   * CSS 命名颜色 black。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly black: 'black';
  /**
   * CSS 命名颜色 blanchedalmond。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly blanchedalmond: 'blanchedalmond';
  /**
   * CSS 命名颜色 blue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly blue: 'blue';
  /**
   * CSS 命名颜色 blueviolet。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly blueviolet: 'blueviolet';
  /**
   * CSS 命名颜色 brown。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly brown: 'brown';
  /**
   * CSS 命名颜色 burlywood。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly burlywood: 'burlywood';
  /**
   * CSS 命名颜色 cadetblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly cadetblue: 'cadetblue';
  /**
   * CSS 命名颜色 chartreuse。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly chartreuse: 'chartreuse';
  /**
   * CSS 命名颜色 chocolate。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly chocolate: 'chocolate';
  /**
   * CSS 命名颜色 coral。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly coral: 'coral';
  /**
   * CSS 命名颜色 cornflowerblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly cornflowerblue: 'cornflowerblue';
  /**
   * CSS 命名颜色 cornsilk。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly cornsilk: 'cornsilk';
  /**
   * CSS 命名颜色 crimson。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly crimson: 'crimson';
  /**
   * CSS 命名颜色 cyan。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly cyan: 'cyan';
  /**
   * CSS 命名颜色 darkblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkblue: 'darkblue';
  /**
   * CSS 命名颜色 darkcyan。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkcyan: 'darkcyan';
  /**
   * CSS 命名颜色 darkgoldenrod。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkgoldenrod: 'darkgoldenrod';
  /**
   * CSS 命名颜色 darkgray。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkgray: 'darkgray';
  /**
   * CSS 命名颜色 darkgreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkgreen: 'darkgreen';
  /**
   * CSS 命名颜色 darkgrey。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkgrey: 'darkgrey';
  /**
   * CSS 命名颜色 darkkhaki。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkkhaki: 'darkkhaki';
  /**
   * CSS 命名颜色 darkmagenta。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkmagenta: 'darkmagenta';
  /**
   * CSS 命名颜色 darkolivegreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkolivegreen: 'darkolivegreen';
  /**
   * CSS 命名颜色 darkorange。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkorange: 'darkorange';
  /**
   * CSS 命名颜色 darkorchid。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkorchid: 'darkorchid';
  /**
   * CSS 命名颜色 darkred。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkred: 'darkred';
  /**
   * CSS 命名颜色 darksalmon。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darksalmon: 'darksalmon';
  /**
   * CSS 命名颜色 darkseagreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkseagreen: 'darkseagreen';
  /**
   * CSS 命名颜色 darkslateblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkslateblue: 'darkslateblue';
  /**
   * CSS 命名颜色 darkslategray。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkslategray: 'darkslategray';
  /**
   * CSS 命名颜色 darkslategrey。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkslategrey: 'darkslategrey';
  /**
   * CSS 命名颜色 darkturquoise。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkturquoise: 'darkturquoise';
  /**
   * CSS 命名颜色 darkviolet。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly darkviolet: 'darkviolet';
  /**
   * CSS 命名颜色 deeppink。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly deeppink: 'deeppink';
  /**
   * CSS 命名颜色 deepskyblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly deepskyblue: 'deepskyblue';
  /**
   * CSS 命名颜色 dimgray。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly dimgray: 'dimgray';
  /**
   * CSS 命名颜色 dimgrey。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly dimgrey: 'dimgrey';
  /**
   * CSS 命名颜色 dodgerblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly dodgerblue: 'dodgerblue';
  /**
   * CSS 命名颜色 firebrick。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly firebrick: 'firebrick';
  /**
   * CSS 命名颜色 floralwhite。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly floralwhite: 'floralwhite';
  /**
   * CSS 命名颜色 forestgreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly forestgreen: 'forestgreen';
  /**
   * CSS 命名颜色 fuchsia。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly fuchsia: 'fuchsia';
  /**
   * CSS 命名颜色 gainsboro。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly gainsboro: 'gainsboro';
  /**
   * CSS 命名颜色 ghostwhite。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly ghostwhite: 'ghostwhite';
  /**
   * CSS 命名颜色 gold。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly gold: 'gold';
  /**
   * CSS 命名颜色 goldenrod。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly goldenrod: 'goldenrod';
  /**
   * CSS 命名颜色 gray。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly gray: 'gray';
  /**
   * CSS 命名颜色 green。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly green: 'green';
  /**
   * CSS 命名颜色 greenyellow。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly greenyellow: 'greenyellow';
  /**
   * CSS 命名颜色 grey。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly grey: 'grey';
  /**
   * CSS 命名颜色 honeydew。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly honeydew: 'honeydew';
  /**
   * CSS 命名颜色 hotpink。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly hotpink: 'hotpink';
  /**
   * CSS 命名颜色 indianred。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly indianred: 'indianred';
  /**
   * CSS 命名颜色 indigo。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly indigo: 'indigo';
  /**
   * CSS 命名颜色 ivory。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly ivory: 'ivory';
  /**
   * CSS 命名颜色 khaki。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly khaki: 'khaki';
  /**
   * CSS 命名颜色 lavender。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lavender: 'lavender';
  /**
   * CSS 命名颜色 lavenderblush。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lavenderblush: 'lavenderblush';
  /**
   * CSS 命名颜色 lawngreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lawngreen: 'lawngreen';
  /**
   * CSS 命名颜色 lemonchiffon。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lemonchiffon: 'lemonchiffon';
  /**
   * CSS 命名颜色 lightblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightblue: 'lightblue';
  /**
   * CSS 命名颜色 lightcoral。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightcoral: 'lightcoral';
  /**
   * CSS 命名颜色 lightcyan。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightcyan: 'lightcyan';
  /**
   * CSS 命名颜色 lightgoldenrodyellow。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightgoldenrodyellow: 'lightgoldenrodyellow';
  /**
   * CSS 命名颜色 lightgray。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightgray: 'lightgray';
  /**
   * CSS 命名颜色 lightgreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightgreen: 'lightgreen';
  /**
   * CSS 命名颜色 lightgrey。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightgrey: 'lightgrey';
  /**
   * CSS 命名颜色 lightpink。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightpink: 'lightpink';
  /**
   * CSS 命名颜色 lightsalmon。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightsalmon: 'lightsalmon';
  /**
   * CSS 命名颜色 lightseagreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightseagreen: 'lightseagreen';
  /**
   * CSS 命名颜色 lightskyblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightskyblue: 'lightskyblue';
  /**
   * CSS 命名颜色 lightslategray。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightslategray: 'lightslategray';
  /**
   * CSS 命名颜色 lightslategrey。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightslategrey: 'lightslategrey';
  /**
   * CSS 命名颜色 lightsteelblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightsteelblue: 'lightsteelblue';
  /**
   * CSS 命名颜色 lightyellow。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lightyellow: 'lightyellow';
  /**
   * CSS 命名颜色 lime。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly lime: 'lime';
  /**
   * CSS 命名颜色 limegreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly limegreen: 'limegreen';
  /**
   * CSS 命名颜色 linen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly linen: 'linen';
  /**
   * CSS 命名颜色 magenta。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly magenta: 'magenta';
  /**
   * CSS 命名颜色 maroon。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly maroon: 'maroon';
  /**
   * CSS 命名颜色 mediumaquamarine。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mediumaquamarine: 'mediumaquamarine';
  /**
   * CSS 命名颜色 mediumblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mediumblue: 'mediumblue';
  /**
   * CSS 命名颜色 mediumorchid。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mediumorchid: 'mediumorchid';
  /**
   * CSS 命名颜色 mediumpurple。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mediumpurple: 'mediumpurple';
  /**
   * CSS 命名颜色 mediumseagreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mediumseagreen: 'mediumseagreen';
  /**
   * CSS 命名颜色 mediumslateblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mediumslateblue: 'mediumslateblue';
  /**
   * CSS 命名颜色 mediumspringgreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mediumspringgreen: 'mediumspringgreen';
  /**
   * CSS 命名颜色 mediumturquoise。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mediumturquoise: 'mediumturquoise';
  /**
   * CSS 命名颜色 mediumvioletred。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mediumvioletred: 'mediumvioletred';
  /**
   * CSS 命名颜色 midnightblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly midnightblue: 'midnightblue';
  /**
   * CSS 命名颜色 mintcream。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mintcream: 'mintcream';
  /**
   * CSS 命名颜色 mistyrose。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly mistyrose: 'mistyrose';
  /**
   * CSS 命名颜色 moccasin。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly moccasin: 'moccasin';
  /**
   * CSS 命名颜色 navajowhite。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly navajowhite: 'navajowhite';
  /**
   * CSS 命名颜色 navy。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly navy: 'navy';
  /**
   * CSS 命名颜色 oldlace。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly oldlace: 'oldlace';
  /**
   * CSS 命名颜色 olive。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly olive: 'olive';
  /**
   * CSS 命名颜色 olivedrab。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly olivedrab: 'olivedrab';
  /**
   * CSS 命名颜色 orange。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly orange: 'orange';
  /**
   * CSS 命名颜色 orangered。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly orangered: 'orangered';
  /**
   * CSS 命名颜色 orchid。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly orchid: 'orchid';
  /**
   * CSS 命名颜色 palegoldenrod。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly palegoldenrod: 'palegoldenrod';
  /**
   * CSS 命名颜色 palegreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly palegreen: 'palegreen';
  /**
   * CSS 命名颜色 paleturquoise。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly paleturquoise: 'paleturquoise';
  /**
   * CSS 命名颜色 palevioletred。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly palevioletred: 'palevioletred';
  /**
   * CSS 命名颜色 papayawhip。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly papayawhip: 'papayawhip';
  /**
   * CSS 命名颜色 peachpuff。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly peachpuff: 'peachpuff';
  /**
   * CSS 命名颜色 peru。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly peru: 'peru';
  /**
   * CSS 命名颜色 pink。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly pink: 'pink';
  /**
   * CSS 命名颜色 plum。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly plum: 'plum';
  /**
   * CSS 命名颜色 powderblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly powderblue: 'powderblue';
  /**
   * CSS 命名颜色 purple。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly purple: 'purple';
  /**
   * CSS 命名颜色 rebeccapurple。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly rebeccapurple: 'rebeccapurple';
  /**
   * CSS 命名颜色 red。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly red: 'red';
  /**
   * CSS 命名颜色 rosybrown。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly rosybrown: 'rosybrown';
  /**
   * CSS 命名颜色 royalblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly royalblue: 'royalblue';
  /**
   * CSS 命名颜色 saddlebrown。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly saddlebrown: 'saddlebrown';
  /**
   * CSS 命名颜色 salmon。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly salmon: 'salmon';
  /**
   * CSS 命名颜色 sandybrown。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly sandybrown: 'sandybrown';
  /**
   * CSS 命名颜色 seagreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly seagreen: 'seagreen';
  /**
   * CSS 命名颜色 seashell。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly seashell: 'seashell';
  /**
   * CSS 命名颜色 sienna。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly sienna: 'sienna';
  /**
   * CSS 命名颜色 silver。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly silver: 'silver';
  /**
   * CSS 命名颜色 skyblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly skyblue: 'skyblue';
  /**
   * CSS 命名颜色 slateblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly slateblue: 'slateblue';
  /**
   * CSS 命名颜色 slategray。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly slategray: 'slategray';
  /**
   * CSS 命名颜色 slategrey。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly slategrey: 'slategrey';
  /**
   * CSS 命名颜色 snow。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly snow: 'snow';
  /**
   * CSS 命名颜色 springgreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly springgreen: 'springgreen';
  /**
   * CSS 命名颜色 steelblue。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly steelblue: 'steelblue';
  /**
   * CSS 命名颜色 tan。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly tan: 'tan';
  /**
   * CSS 命名颜色 teal。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly teal: 'teal';
  /**
   * CSS 命名颜色 thistle。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly thistle: 'thistle';
  /**
   * CSS 命名颜色 tomato。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly tomato: 'tomato';
  /**
   * CSS 命名颜色 turquoise。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly turquoise: 'turquoise';
  /**
   * CSS 命名颜色 violet。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly violet: 'violet';
  /**
   * CSS 命名颜色 wheat。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly wheat: 'wheat';
  /**
   * CSS 命名颜色 white。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly white: 'white';
  /**
   * CSS 命名颜色 whitesmoke。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly whitesmoke: 'whitesmoke';
  /**
   * CSS 命名颜色 yellow。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly yellow: 'yellow';
  /**
   * CSS 命名颜色 yellowgreen。
   * @see https://developer.mozilla.org/docs/Web/CSS/named-color
   */
  readonly yellowgreen: 'yellowgreen';
}
export interface SystemColorValues {
  /**
   * CSS 系统颜色 AccentColor；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly AccentColor: 'AccentColor';
  /**
   * CSS 系统颜色 AccentColorText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly AccentColorText: 'AccentColorText';
  /**
   * CSS 系统颜色 ActiveText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ActiveText: 'ActiveText';
  /**
   * CSS 系统颜色 ButtonBorder；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ButtonBorder: 'ButtonBorder';
  /**
   * CSS 系统颜色 ButtonFace；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ButtonFace: 'ButtonFace';
  /**
   * CSS 系统颜色 ButtonText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ButtonText: 'ButtonText';
  /**
   * CSS 系统颜色 Canvas；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly Canvas: 'Canvas';
  /**
   * CSS 系统颜色 CanvasText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly CanvasText: 'CanvasText';
  /**
   * CSS 系统颜色 Field；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly Field: 'Field';
  /**
   * CSS 系统颜色 FieldText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly FieldText: 'FieldText';
  /**
   * CSS 系统颜色 GrayText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly GrayText: 'GrayText';
  /**
   * CSS 系统颜色 Highlight；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly Highlight: 'Highlight';
  /**
   * CSS 系统颜色 HighlightText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly HighlightText: 'HighlightText';
  /**
   * CSS 系统颜色 LinkText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly LinkText: 'LinkText';
  /**
   * CSS 系统颜色 Mark；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly Mark: 'Mark';
  /**
   * CSS 系统颜色 MarkText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly MarkText: 'MarkText';
  /**
   * CSS 系统颜色 SelectedItem；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly SelectedItem: 'SelectedItem';
  /**
   * CSS 系统颜色 SelectedItemText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly SelectedItemText: 'SelectedItemText';
  /**
   * CSS 系统颜色 VisitedText；实际颜色由浏览器和用户环境决定。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly VisitedText: 'VisitedText';
}
export interface DeprecatedSystemColorValues {
  /**
   * CSS 系统颜色 ActiveBorder；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ActiveBorder: 'ActiveBorder';
  /**
   * CSS 系统颜色 ActiveCaption；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ActiveCaption: 'ActiveCaption';
  /**
   * CSS 系统颜色 AppWorkspace；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly AppWorkspace: 'AppWorkspace';
  /**
   * CSS 系统颜色 Background；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly Background: 'Background';
  /**
   * CSS 系统颜色 ButtonHighlight；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ButtonHighlight: 'ButtonHighlight';
  /**
   * CSS 系统颜色 ButtonShadow；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ButtonShadow: 'ButtonShadow';
  /**
   * CSS 系统颜色 CaptionText；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly CaptionText: 'CaptionText';
  /**
   * CSS 系统颜色 InactiveBorder；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly InactiveBorder: 'InactiveBorder';
  /**
   * CSS 系统颜色 InactiveCaption；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly InactiveCaption: 'InactiveCaption';
  /**
   * CSS 系统颜色 InactiveCaptionText；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly InactiveCaptionText: 'InactiveCaptionText';
  /**
   * CSS 系统颜色 InfoBackground；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly InfoBackground: 'InfoBackground';
  /**
   * CSS 系统颜色 InfoText；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly InfoText: 'InfoText';
  /**
   * CSS 系统颜色 Menu；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly Menu: 'Menu';
  /**
   * CSS 系统颜色 MenuText；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly MenuText: 'MenuText';
  /**
   * CSS 系统颜色 Scrollbar；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly Scrollbar: 'Scrollbar';
  /**
   * CSS 系统颜色 ThreeDDarkShadow；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ThreeDDarkShadow: 'ThreeDDarkShadow';
  /**
   * CSS 系统颜色 ThreeDFace；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ThreeDFace: 'ThreeDFace';
  /**
   * CSS 系统颜色 ThreeDHighlight；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ThreeDHighlight: 'ThreeDHighlight';
  /**
   * CSS 系统颜色 ThreeDLightShadow；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ThreeDLightShadow: 'ThreeDLightShadow';
  /**
   * CSS 系统颜色 ThreeDShadow；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly ThreeDShadow: 'ThreeDShadow';
  /**
   * CSS 系统颜色 Window；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly Window: 'Window';
  /**
   * CSS 系统颜色 WindowFrame；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly WindowFrame: 'WindowFrame';
  /**
   * CSS 系统颜色 WindowText；实际颜色由浏览器和用户环境决定。
   * @deprecated 历史系统颜色；优先使用现代系统颜色。
   * @see https://developer.mozilla.org/docs/Web/CSS/system-color
   */
  readonly WindowText: 'WindowText';
}
export interface AccentColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface AlignContentValues extends CssWideValues {
  /**
   * align-content 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly baseline: 'baseline';
  /**
   * align-content 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly center: 'center';
  /**
   * align-content 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly end: 'end';
  /**
   * align-content 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly 'flex-end': 'flex-end';
  /**
   * align-content 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * align-content 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly 'space-around': 'space-around';
  /**
   * align-content 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly 'space-between': 'space-between';
  /**
   * align-content 的原生 space-evenly 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly 'space-evenly': 'space-evenly';
  /**
   * align-content 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly start: 'start';
  /**
   * align-content 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  readonly stretch: 'stretch';
}
export interface AlignItemsValues extends CssWideValues {
  /**
   * 对锚点定位的元素，沿块方向与关联锚点的中心对齐；需同时具有有效的锚点定位关系。
   */
  readonly 'anchor-center': 'anchor-center';
  /**
   * 按项目的对齐基线对齐，不等同于底边对齐。
   */
  readonly baseline: 'baseline';
  /**
   * 将各项目在交叉轴或块轴的对齐区域中居中。
   *
   * 区别：justify-content 控制 Flex 主轴上的内容分布；align-items 控制交叉轴。
   *
   * 适用场景：横向图标和文字的垂直对齐。
   *
   * @example
   * css({ display: "inline-flex", alignItems: "center" })
   */
  readonly center: 'center';
  /**
   * 按对齐轴的逻辑结束侧对齐。
   */
  readonly end: 'end';
  /**
   * 在 Flex 中按交叉轴结束侧对齐。
   */
  readonly 'flex-end': 'flex-end';
  /**
   * 在 Flex 中按交叉轴起始侧对齐；交叉轴方向受换行方式影响。
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 由布局模式决定行为，许多场景类似 stretch，但存在内部尺寸等例外。
   */
  readonly normal: 'normal';
  /**
   * 按项目自身书写方向的结束侧对齐；不同于总按容器方向计算的 end。
   */
  readonly 'self-end': 'self-end';
  /**
   * 按项目自身书写方向的起始侧对齐；项目与容器书写方向不同时，结果可能不同于 start。
   */
  readonly 'self-start': 'self-start';
  /**
   * 按对齐轴的逻辑起始侧对齐。
   */
  readonly start: 'start';
  /**
   * 在自动尺寸及最小/最大约束允许时拉伸项目，不强制覆盖显式尺寸。
   *
   * 区别：center 保持项目尺寸并居中；stretch 尝试扩大自动尺寸。
   *
   * 项目在对齐轴有显式尺寸或受最小/最大尺寸约束时，不一定填满可用区域。
   *
   * @example
   * css({ display: "flex", alignItems: "stretch" })
   */
  readonly stretch: 'stretch';
}
export interface AlignmentBaselineValues extends CssWideValues {
  /**
   * alignment-baseline 的原生 alphabetic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly alphabetic: 'alphabetic';
  /**
   * alignment-baseline 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly baseline: 'baseline';
  /**
   * alignment-baseline 的原生 central 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly central: 'central';
  /**
   * alignment-baseline 的原生 ideographic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly ideographic: 'ideographic';
  /**
   * alignment-baseline 的原生 mathematical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly mathematical: 'mathematical';
  /**
   * alignment-baseline 的原生 middle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly middle: 'middle';
  /**
   * alignment-baseline 的原生 text-after-edge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly 'text-after-edge': 'text-after-edge';
  /**
   * alignment-baseline 的原生 text-before-edge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  readonly 'text-before-edge': 'text-before-edge';
}
export interface AlignSelfValues extends CssWideValues {
  /**
   * align-self 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly 'anchor-center': 'anchor-center';
  /**
   * 使用父容器的 align-items 对齐方式。
   */
  readonly auto: 'auto';
  /**
   * 让当前项目参与基线对齐，不等同于底边对齐。
   */
  readonly baseline: 'baseline';
  /**
   * align-self 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly center: 'center';
  /**
   * align-self 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly end: 'end';
  /**
   * align-self 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly 'flex-end': 'flex-end';
  /**
   * align-self 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * align-self 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly 'self-end': 'self-end';
  /**
   * align-self 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly 'self-start': 'self-start';
  /**
   * align-self 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  readonly start: 'start';
  /**
   * 在自动尺寸和最小/最大约束允许时拉伸当前项目。
   */
  readonly stretch: 'stretch';
}
export interface AlignTracksValues extends CssWideValues {
  /**
   * align-tracks 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly baseline: 'baseline';
  /**
   * align-tracks 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly center: 'center';
  /**
   * align-tracks 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly end: 'end';
  /**
   * align-tracks 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly 'flex-end': 'flex-end';
  /**
   * align-tracks 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * align-tracks 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly 'space-around': 'space-around';
  /**
   * align-tracks 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly 'space-between': 'space-between';
  /**
   * align-tracks 的原生 space-evenly 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly 'space-evenly': 'space-evenly';
  /**
   * align-tracks 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly start: 'start';
  /**
   * align-tracks 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  readonly stretch: 'stretch';
}
export interface AllValues extends CssWideValues {}
export interface AnchorNameValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface AnchorScopeValues extends CssWideValues {
  /**
   * anchor-scope 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  readonly all: 'all';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface AnimationValues extends CssWideValues {
  /**
   * animation 的原生 alternate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly alternate: 'alternate';
  /**
   * animation 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly 'alternate-reverse': 'alternate-reverse';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * animation 的原生 backwards 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly backwards: 'backwards';
  /**
   * animation 的原生 both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly both: 'both';
  /**
   * animation 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly ease: 'ease';
  /**
   * animation 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly 'ease-in': 'ease-in';
  /**
   * animation 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * animation 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly 'ease-out': 'ease-out';
  /**
   * animation 的原生 forwards 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly forwards: 'forwards';
  /**
   * animation 的原生 infinite 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly infinite: 'infinite';
  /**
   * animation 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly linear: 'linear';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * animation 的原生 paused 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly paused: 'paused';
  /**
   * animation 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly reverse: 'reverse';
  /**
   * animation 的原生 running 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly running: 'running';
  /**
   * animation 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly 'step-end': 'step-end';
  /**
   * animation 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  readonly 'step-start': 'step-start';
}
export interface AnimationCompositionValues extends CssWideValues {
  /**
   * animation-composition 的原生 accumulate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  readonly accumulate: 'accumulate';
  /**
   * animation-composition 的原生 add 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  readonly add: 'add';
  /**
   * animation-composition 的原生 replace 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  readonly replace: 'replace';
}
export interface AnimationDelayValues extends CssWideValues {}
export interface AnimationDirectionValues extends CssWideValues {
  /**
   * animation-direction 的原生 alternate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  readonly alternate: 'alternate';
  /**
   * animation-direction 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  readonly 'alternate-reverse': 'alternate-reverse';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * animation-direction 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  readonly reverse: 'reverse';
}
export interface AnimationDurationValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface AnimationFillModeValues extends CssWideValues {
  /**
   * 延迟阶段应用最先生效关键帧的效果，具体帧取决于播放方向。
   */
  readonly backwards: 'backwards';
  /**
   * 同时应用 backwards 和 forwards 的区间外效果。
   */
  readonly both: 'both';
  /**
   * 播放结束后保留最后生效关键帧的效果；最后帧取决于方向和循环次数。
   */
  readonly forwards: 'forwards';
  /**
   * 动画有效区间之外不应用动画关键帧值。
   */
  readonly none: 'none';
}
export interface AnimationIterationCountValues extends CssWideValues {
  /**
   * animation-iteration-count 的原生 infinite 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  readonly infinite: 'infinite';
}
export interface AnimationNameValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface AnimationPlayStateValues extends CssWideValues {
  /**
   * animation-play-state 的原生 paused 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  readonly paused: 'paused';
  /**
   * animation-play-state 的原生 running 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  readonly running: 'running';
}
export interface AnimationRangeValues extends CssWideValues {
  /**
   * animation-range 的原生 contain 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  readonly contain: 'contain';
  /**
   * animation-range 的原生 cover 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  readonly cover: 'cover';
  /**
   * animation-range 的原生 entry 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  readonly entry: 'entry';
  /**
   * animation-range 的原生 entry-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  readonly 'entry-crossing': 'entry-crossing';
  /**
   * animation-range 的原生 exit 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  readonly exit: 'exit';
  /**
   * animation-range 的原生 exit-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  readonly 'exit-crossing': 'exit-crossing';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface AnimationRangeEndValues extends CssWideValues {
  /**
   * animation-range-end 的原生 contain 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  readonly contain: 'contain';
  /**
   * animation-range-end 的原生 cover 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  readonly cover: 'cover';
  /**
   * animation-range-end 的原生 entry 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  readonly entry: 'entry';
  /**
   * animation-range-end 的原生 entry-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  readonly 'entry-crossing': 'entry-crossing';
  /**
   * animation-range-end 的原生 exit 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  readonly exit: 'exit';
  /**
   * animation-range-end 的原生 exit-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  readonly 'exit-crossing': 'exit-crossing';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface AnimationRangeStartValues extends CssWideValues {
  /**
   * animation-range-start 的原生 contain 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  readonly contain: 'contain';
  /**
   * animation-range-start 的原生 cover 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  readonly cover: 'cover';
  /**
   * animation-range-start 的原生 entry 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  readonly entry: 'entry';
  /**
   * animation-range-start 的原生 entry-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  readonly 'entry-crossing': 'entry-crossing';
  /**
   * animation-range-start 的原生 exit 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  readonly exit: 'exit';
  /**
   * animation-range-start 的原生 exit-crossing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  readonly 'exit-crossing': 'exit-crossing';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface AnimationTimelineValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface AnimationTimingFunctionValues extends CssWideValues {
  /**
   * animation-timing-function 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly ease: 'ease';
  /**
   * animation-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly 'ease-in': 'ease-in';
  /**
   * animation-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * animation-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly 'ease-out': 'ease-out';
  /**
   * animation-timing-function 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly linear: 'linear';
  /**
   * animation-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly 'step-end': 'step-end';
  /**
   * animation-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  readonly 'step-start': 'step-start';
}
export interface AppearanceValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * appearance 的原生 button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly button: 'button';
  /**
   * appearance 的原生 checkbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly checkbox: 'checkbox';
  /**
   * appearance 的原生 listbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly listbox: 'listbox';
  /**
   * appearance 的原生 menulist 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly menulist: 'menulist';
  /**
   * appearance 的原生 menulist-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly 'menulist-button': 'menulist-button';
  /**
   * appearance 的原生 meter 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly meter: 'meter';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * appearance 的原生 progress-bar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly 'progress-bar': 'progress-bar';
  /**
   * appearance 的原生 radio 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly radio: 'radio';
  /**
   * appearance 的原生 searchfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly searchfield: 'searchfield';
  /**
   * appearance 的原生 textarea 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly textarea: 'textarea';
  /**
   * appearance 的原生 textfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  readonly textfield: 'textfield';
}
export interface AspectRatioValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface BackdropFilterValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface BackfaceVisibilityValues extends CssWideValues {
  /**
   * backface-visibility 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  readonly hidden: 'hidden';
  /**
   * backface-visibility 的原生 visible 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  readonly visible: 'visible';
}
export interface BackgroundValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * CSS 颜色关键字 border-box；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'border-box': 'border-box';
  /**
   * CSS 颜色关键字 bottom；系统颜色会随用户环境和配色设置变化。
   */
  readonly bottom: 'bottom';
  /**
   * CSS 颜色关键字 center；系统颜色会随用户环境和配色设置变化。
   */
  readonly center: 'center';
  /**
   * CSS 颜色关键字 content-box；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'content-box': 'content-box';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 fixed；系统颜色会随用户环境和配色设置变化。
   */
  readonly fixed: 'fixed';
  /**
   * CSS 颜色关键字 left；系统颜色会随用户环境和配色设置变化。
   */
  readonly left: 'left';
  /**
   * CSS 颜色关键字 local；系统颜色会随用户环境和配色设置变化。
   */
  readonly local: 'local';
  /**
   * CSS 颜色关键字 no-repeat；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'no-repeat': 'no-repeat';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 padding-box；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'padding-box': 'padding-box';
  /**
   * CSS 颜色关键字 repeat；系统颜色会随用户环境和配色设置变化。
   */
  readonly repeat: 'repeat';
  /**
   * CSS 颜色关键字 repeat-x；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'repeat-x': 'repeat-x';
  /**
   * CSS 颜色关键字 repeat-y；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'repeat-y': 'repeat-y';
  /**
   * CSS 颜色关键字 right；系统颜色会随用户环境和配色设置变化。
   */
  readonly right: 'right';
  /**
   * CSS 颜色关键字 round；系统颜色会随用户环境和配色设置变化。
   */
  readonly round: 'round';
  /**
   * CSS 颜色关键字 scroll；系统颜色会随用户环境和配色设置变化。
   */
  readonly scroll: 'scroll';
  /**
   * CSS 颜色关键字 space；系统颜色会随用户环境和配色设置变化。
   */
  readonly space: 'space';
  /**
   * CSS 颜色关键字 top；系统颜色会随用户环境和配色设置变化。
   */
  readonly top: 'top';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BackgroundAttachmentValues extends CssWideValues {
  /**
   * background-attachment 的原生 fixed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  readonly fixed: 'fixed';
  /**
   * background-attachment 的原生 local 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  readonly local: 'local';
  /**
   * background-attachment 的原生 scroll 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  readonly scroll: 'scroll';
}
export interface BackgroundBlendModeValues extends CssWideValues {
  /**
   * background-blend-mode 的原生 color 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly color: 'color';
  /**
   * background-blend-mode 的原生 color-burn 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly 'color-burn': 'color-burn';
  /**
   * background-blend-mode 的原生 color-dodge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly 'color-dodge': 'color-dodge';
  /**
   * background-blend-mode 的原生 darken 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly darken: 'darken';
  /**
   * background-blend-mode 的原生 difference 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly difference: 'difference';
  /**
   * background-blend-mode 的原生 exclusion 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly exclusion: 'exclusion';
  /**
   * background-blend-mode 的原生 hard-light 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly 'hard-light': 'hard-light';
  /**
   * background-blend-mode 的原生 hue 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly hue: 'hue';
  /**
   * background-blend-mode 的原生 lighten 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly lighten: 'lighten';
  /**
   * background-blend-mode 的原生 luminosity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly luminosity: 'luminosity';
  /**
   * background-blend-mode 的原生 multiply 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly multiply: 'multiply';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * background-blend-mode 的原生 overlay 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly overlay: 'overlay';
  /**
   * background-blend-mode 的原生 saturation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly saturation: 'saturation';
  /**
   * background-blend-mode 的原生 screen 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly screen: 'screen';
  /**
   * background-blend-mode 的原生 soft-light 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  readonly 'soft-light': 'soft-light';
}
export interface BackgroundClipValues extends CssWideValues {
  /**
   * background-clip 的原生 border-area 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  readonly 'border-area': 'border-area';
  /**
   * background-clip 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  readonly 'border-box': 'border-box';
  /**
   * background-clip 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  readonly 'content-box': 'content-box';
  /**
   * background-clip 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  readonly 'padding-box': 'padding-box';
  /**
   * 把背景裁剪到文字字形；显示背景文字效果通常还需要透明的文字颜色。
   */
  readonly text: 'text';
}
export interface BackgroundColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BackgroundImageValues extends CssWideValues {
  /**
   * 不绘制这一层背景图像；背景颜色仍然可以显示。
   */
  readonly none: 'none';
}
export interface BackgroundOriginValues extends CssWideValues {
  /**
   * background-origin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  readonly 'border-box': 'border-box';
  /**
   * background-origin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  readonly 'content-box': 'content-box';
  /**
   * background-origin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  readonly 'padding-box': 'padding-box';
}
export interface BackgroundPositionValues extends CssWideValues {
  /**
   * background-position 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  readonly bottom: 'bottom';
  /**
   * background-position 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  readonly center: 'center';
  /**
   * background-position 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  readonly left: 'left';
  /**
   * background-position 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  readonly right: 'right';
  /**
   * background-position 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  readonly top: 'top';
}
export interface BackgroundPositionXValues extends CssWideValues {
  /**
   * background-position-x 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  readonly center: 'center';
  /**
   * background-position-x 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  readonly left: 'left';
  /**
   * background-position-x 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  readonly right: 'right';
  /**
   * background-position-x 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  readonly 'x-end': 'x-end';
  /**
   * background-position-x 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  readonly 'x-start': 'x-start';
}
export interface BackgroundPositionYValues extends CssWideValues {
  /**
   * background-position-y 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  readonly bottom: 'bottom';
  /**
   * background-position-y 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  readonly center: 'center';
  /**
   * background-position-y 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  readonly top: 'top';
  /**
   * background-position-y 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  readonly 'y-end': 'y-end';
  /**
   * background-position-y 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  readonly 'y-start': 'y-start';
}
export interface BackgroundRepeatValues extends CssWideValues {
  /**
   * background-repeat 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly 'no-repeat': 'no-repeat';
  /**
   * background-repeat 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly repeat: 'repeat';
  /**
   * background-repeat 的原生 repeat-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly 'repeat-x': 'repeat-x';
  /**
   * background-repeat 的原生 repeat-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly 'repeat-y': 'repeat-y';
  /**
   * background-repeat 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly round: 'round';
  /**
   * background-repeat 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  readonly space: 'space';
}
export interface BackgroundSizeValues extends CssWideValues {
  /**
   * 依据图像内部尺寸、比例及另一维的设置确定尺寸。
   */
  readonly auto: 'auto';
  /**
   * 保持图像比例并使整张图像容纳于定位区域，可能留下空白。
   */
  readonly contain: 'contain';
  /**
   * 保持图像比例并覆盖整个定位区域，超出部分可能被裁剪。
   */
  readonly cover: 'cover';
}
export interface BaselineShiftValues extends CssWideValues {
  /**
   * baseline-shift 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  readonly baseline: 'baseline';
  /**
   * baseline-shift 的原生 sub 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  readonly sub: 'sub';
  /**
   * baseline-shift 的原生 super 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  readonly super: 'super';
}
export interface BlockSizeValues extends CssWideValues {
  /**
   * block-size 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * block-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * block-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * 让布局算法决定尺寸，不保证等于父元素尺寸。
   */
  readonly auto: 'auto';
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   */
  readonly 'max-content': 'max-content';
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   */
  readonly 'min-content': 'min-content';
}
export interface BorderValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderBlockValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderBlockColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderBlockEndValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderBlockEndColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderBlockEndStyleValues extends CssWideValues {
  /**
   * border-block-end-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly dashed: 'dashed';
  /**
   * border-block-end-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly dotted: 'dotted';
  /**
   * border-block-end-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly double: 'double';
  /**
   * border-block-end-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly groove: 'groove';
  /**
   * border-block-end-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly hidden: 'hidden';
  /**
   * border-block-end-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-block-end-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly outset: 'outset';
  /**
   * border-block-end-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly ridge: 'ridge';
  /**
   * border-block-end-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  readonly solid: 'solid';
}
export interface BorderBlockEndWidthValues extends CssWideValues {
  /**
   * border-block-end-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  readonly medium: 'medium';
  /**
   * border-block-end-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  readonly thick: 'thick';
  /**
   * border-block-end-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  readonly thin: 'thin';
}
export interface BorderBlockStartValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderBlockStartColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderBlockStartStyleValues extends CssWideValues {
  /**
   * border-block-start-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly dashed: 'dashed';
  /**
   * border-block-start-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly dotted: 'dotted';
  /**
   * border-block-start-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly double: 'double';
  /**
   * border-block-start-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly groove: 'groove';
  /**
   * border-block-start-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly hidden: 'hidden';
  /**
   * border-block-start-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-block-start-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly outset: 'outset';
  /**
   * border-block-start-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly ridge: 'ridge';
  /**
   * border-block-start-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  readonly solid: 'solid';
}
export interface BorderBlockStartWidthValues extends CssWideValues {
  /**
   * border-block-start-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  readonly medium: 'medium';
  /**
   * border-block-start-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  readonly thick: 'thick';
  /**
   * border-block-start-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  readonly thin: 'thin';
}
export interface BorderBlockStyleValues extends CssWideValues {
  /**
   * border-block-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly dashed: 'dashed';
  /**
   * border-block-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly dotted: 'dotted';
  /**
   * border-block-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly double: 'double';
  /**
   * border-block-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly groove: 'groove';
  /**
   * border-block-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly hidden: 'hidden';
  /**
   * border-block-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-block-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly outset: 'outset';
  /**
   * border-block-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly ridge: 'ridge';
  /**
   * border-block-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  readonly solid: 'solid';
}
export interface BorderBlockWidthValues extends CssWideValues {
  /**
   * border-block-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  readonly medium: 'medium';
  /**
   * border-block-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  readonly thick: 'thick';
  /**
   * border-block-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  readonly thin: 'thin';
}
export interface BorderBottomValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderBottomColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderBottomLeftRadiusValues extends CssWideValues {}
export interface BorderBottomRightRadiusValues extends CssWideValues {}
export interface BorderBottomStyleValues extends CssWideValues {
  /**
   * border-bottom-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly dashed: 'dashed';
  /**
   * border-bottom-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly dotted: 'dotted';
  /**
   * border-bottom-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly double: 'double';
  /**
   * border-bottom-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly groove: 'groove';
  /**
   * border-bottom-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly hidden: 'hidden';
  /**
   * border-bottom-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-bottom-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly outset: 'outset';
  /**
   * border-bottom-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly ridge: 'ridge';
  /**
   * border-bottom-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  readonly solid: 'solid';
}
export interface BorderBottomWidthValues extends CssWideValues {
  /**
   * border-bottom-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  readonly medium: 'medium';
  /**
   * border-bottom-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  readonly thick: 'thick';
  /**
   * border-bottom-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  readonly thin: 'thin';
}
export interface BorderCollapseValues extends CssWideValues {
  /**
   * border-collapse 的原生 collapse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  readonly collapse: 'collapse';
  /**
   * border-collapse 的原生 separate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  readonly separate: 'separate';
}
export interface BorderColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderEndEndRadiusValues extends CssWideValues {}
export interface BorderEndStartRadiusValues extends CssWideValues {}
export interface BorderImageValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-image 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  readonly repeat: 'repeat';
  /**
   * border-image 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  readonly round: 'round';
  /**
   * border-image 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  readonly space: 'space';
  /**
   * border-image 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  readonly stretch: 'stretch';
}
export interface BorderImageOutsetValues extends CssWideValues {}
export interface BorderImageRepeatValues extends CssWideValues {
  /**
   * border-image-repeat 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  readonly repeat: 'repeat';
  /**
   * border-image-repeat 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  readonly round: 'round';
  /**
   * border-image-repeat 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  readonly space: 'space';
  /**
   * border-image-repeat 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  readonly stretch: 'stretch';
}
export interface BorderImageSliceValues extends CssWideValues {}
export interface BorderImageSourceValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface BorderImageWidthValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface BorderInlineValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderInlineColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderInlineEndValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderInlineEndColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderInlineEndStyleValues extends CssWideValues {
  /**
   * border-inline-end-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly dashed: 'dashed';
  /**
   * border-inline-end-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly dotted: 'dotted';
  /**
   * border-inline-end-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly double: 'double';
  /**
   * border-inline-end-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly groove: 'groove';
  /**
   * border-inline-end-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly hidden: 'hidden';
  /**
   * border-inline-end-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-inline-end-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly outset: 'outset';
  /**
   * border-inline-end-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly ridge: 'ridge';
  /**
   * border-inline-end-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  readonly solid: 'solid';
}
export interface BorderInlineEndWidthValues extends CssWideValues {
  /**
   * border-inline-end-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  readonly medium: 'medium';
  /**
   * border-inline-end-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  readonly thick: 'thick';
  /**
   * border-inline-end-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  readonly thin: 'thin';
}
export interface BorderInlineStartValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderInlineStartColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderInlineStartStyleValues extends CssWideValues {
  /**
   * border-inline-start-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly dashed: 'dashed';
  /**
   * border-inline-start-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly dotted: 'dotted';
  /**
   * border-inline-start-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly double: 'double';
  /**
   * border-inline-start-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly groove: 'groove';
  /**
   * border-inline-start-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly hidden: 'hidden';
  /**
   * border-inline-start-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-inline-start-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly outset: 'outset';
  /**
   * border-inline-start-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly ridge: 'ridge';
  /**
   * border-inline-start-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  readonly solid: 'solid';
}
export interface BorderInlineStartWidthValues extends CssWideValues {
  /**
   * border-inline-start-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  readonly medium: 'medium';
  /**
   * border-inline-start-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  readonly thick: 'thick';
  /**
   * border-inline-start-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  readonly thin: 'thin';
}
export interface BorderInlineStyleValues extends CssWideValues {
  /**
   * border-inline-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly dashed: 'dashed';
  /**
   * border-inline-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly dotted: 'dotted';
  /**
   * border-inline-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly double: 'double';
  /**
   * border-inline-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly groove: 'groove';
  /**
   * border-inline-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly hidden: 'hidden';
  /**
   * border-inline-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-inline-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly outset: 'outset';
  /**
   * border-inline-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly ridge: 'ridge';
  /**
   * border-inline-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  readonly solid: 'solid';
}
export interface BorderInlineWidthValues extends CssWideValues {
  /**
   * border-inline-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  readonly medium: 'medium';
  /**
   * border-inline-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  readonly thick: 'thick';
  /**
   * border-inline-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  readonly thin: 'thin';
}
export interface BorderLeftValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderLeftColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderLeftStyleValues extends CssWideValues {
  /**
   * border-left-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly dashed: 'dashed';
  /**
   * border-left-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly dotted: 'dotted';
  /**
   * border-left-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly double: 'double';
  /**
   * border-left-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly groove: 'groove';
  /**
   * border-left-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly hidden: 'hidden';
  /**
   * border-left-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-left-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly outset: 'outset';
  /**
   * border-left-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly ridge: 'ridge';
  /**
   * border-left-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  readonly solid: 'solid';
}
export interface BorderLeftWidthValues extends CssWideValues {
  /**
   * border-left-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  readonly medium: 'medium';
  /**
   * border-left-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  readonly thick: 'thick';
  /**
   * border-left-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  readonly thin: 'thin';
}
export interface BorderRadiusValues extends CssWideValues {}
export interface BorderRightValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderRightColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderRightStyleValues extends CssWideValues {
  /**
   * border-right-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly dashed: 'dashed';
  /**
   * border-right-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly dotted: 'dotted';
  /**
   * border-right-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly double: 'double';
  /**
   * border-right-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly groove: 'groove';
  /**
   * border-right-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly hidden: 'hidden';
  /**
   * border-right-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-right-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly outset: 'outset';
  /**
   * border-right-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly ridge: 'ridge';
  /**
   * border-right-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  readonly solid: 'solid';
}
export interface BorderRightWidthValues extends CssWideValues {
  /**
   * border-right-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  readonly medium: 'medium';
  /**
   * border-right-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  readonly thick: 'thick';
  /**
   * border-right-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  readonly thin: 'thin';
}
export interface BorderSpacingValues extends CssWideValues {}
export interface BorderStartEndRadiusValues extends CssWideValues {}
export interface BorderStartStartRadiusValues extends CssWideValues {}
export interface BorderStyleValues extends CssWideValues {
  /**
   * border-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  readonly dashed: 'dashed';
  /**
   * border-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  readonly dotted: 'dotted';
  /**
   * border-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  readonly double: 'double';
  /**
   * border-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  readonly groove: 'groove';
  /**
   * 通常与 none 类似；在表格边框合并冲突中优先隐藏边框。
   */
  readonly hidden: 'hidden';
  /**
   * border-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  readonly inset: 'inset';
  /**
   * 不绘制边框，并使对应边框计算宽度为零。
   */
  readonly none: 'none';
  /**
   * border-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  readonly outset: 'outset';
  /**
   * border-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  readonly ridge: 'ridge';
  /**
   * 绘制连续实线边框。
   */
  readonly solid: 'solid';
}
export interface BorderTopValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderTopColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface BorderTopLeftRadiusValues extends CssWideValues {}
export interface BorderTopRightRadiusValues extends CssWideValues {}
export interface BorderTopStyleValues extends CssWideValues {
  /**
   * border-top-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly dashed: 'dashed';
  /**
   * border-top-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly dotted: 'dotted';
  /**
   * border-top-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly double: 'double';
  /**
   * border-top-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly groove: 'groove';
  /**
   * border-top-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly hidden: 'hidden';
  /**
   * border-top-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * border-top-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly outset: 'outset';
  /**
   * border-top-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly ridge: 'ridge';
  /**
   * border-top-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  readonly solid: 'solid';
}
export interface BorderTopWidthValues extends CssWideValues {
  /**
   * border-top-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  readonly medium: 'medium';
  /**
   * border-top-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  readonly thick: 'thick';
  /**
   * border-top-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  readonly thin: 'thin';
}
export interface BorderWidthValues extends CssWideValues {
  /**
   * border-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  readonly medium: 'medium';
  /**
   * border-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  readonly thick: 'thick';
  /**
   * border-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  readonly thin: 'thin';
}
export interface BottomValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface BoxAlignValues extends CssWideValues {
  /**
   * box-align 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  readonly baseline: 'baseline';
  /**
   * box-align 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  readonly center: 'center';
  /**
   * box-align 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  readonly end: 'end';
  /**
   * box-align 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  readonly start: 'start';
  /**
   * box-align 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-align
   */
  readonly stretch: 'stretch';
}
export interface BoxDecorationBreakValues extends CssWideValues {
  /**
   * box-decoration-break 的原生 clone 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  readonly clone: 'clone';
  /**
   * box-decoration-break 的原生 slice 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  readonly slice: 'slice';
}
export interface BoxDirectionValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * box-direction 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-direction
   */
  readonly reverse: 'reverse';
}
export interface BoxFlexValues extends CssWideValues {}
export interface BoxFlexGroupValues extends CssWideValues {}
export interface BoxLinesValues extends CssWideValues {
  /**
   * box-lines 的原生 multiple 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  readonly multiple: 'multiple';
  /**
   * box-lines 的原生 single 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-lines
   */
  readonly single: 'single';
}
export interface BoxOrdinalGroupValues extends CssWideValues {}
export interface BoxOrientValues extends CssWideValues {
  /**
   * box-orient 的原生 block-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  readonly 'block-axis': 'block-axis';
  /**
   * box-orient 的原生 horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  readonly horizontal: 'horizontal';
  /**
   * box-orient 的原生 inline-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  readonly 'inline-axis': 'inline-axis';
  /**
   * box-orient 的原生 vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-orient
   */
  readonly vertical: 'vertical';
}
export interface BoxPackValues extends CssWideValues {
  /**
   * box-pack 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  readonly center: 'center';
  /**
   * box-pack 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  readonly end: 'end';
  /**
   * box-pack 的原生 justify 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  readonly justify: 'justify';
  /**
   * box-pack 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-pack
   */
  readonly start: 'start';
}
export interface BoxShadowValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface BoxSizingValues extends CssWideValues {
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
   * css({ boxSizing: "border-box", width: "20rem", padding: "1rem" })
   */
  readonly 'border-box': 'border-box';
  /**
   * 指定尺寸仅计算内容盒，内边距和边框额外增加外部尺寸。
   *
   * 适用场景：希望明确指定纯内容区尺寸时。
   *
   * @example
   * css({ boxSizing: "content-box", width: "100px", padding: "10px" })
   */
  readonly 'content-box': 'content-box';
}
export interface BreakAfterValues extends CssWideValues {
  /**
   * break-after 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly all: 'all';
  /**
   * break-after 的原生 always 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly always: 'always';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * break-after 的原生 avoid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly avoid: 'avoid';
  /**
   * break-after 的原生 avoid-column 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly 'avoid-column': 'avoid-column';
  /**
   * break-after 的原生 avoid-page 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly 'avoid-page': 'avoid-page';
  /**
   * break-after 的原生 avoid-region 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly 'avoid-region': 'avoid-region';
  /**
   * break-after 的原生 column 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly column: 'column';
  /**
   * break-after 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly left: 'left';
  /**
   * break-after 的原生 page 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly page: 'page';
  /**
   * break-after 的原生 recto 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly recto: 'recto';
  /**
   * break-after 的原生 region 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly region: 'region';
  /**
   * break-after 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly right: 'right';
  /**
   * break-after 的原生 verso 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  readonly verso: 'verso';
}
export interface BreakBeforeValues extends CssWideValues {
  /**
   * break-before 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly all: 'all';
  /**
   * break-before 的原生 always 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly always: 'always';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * break-before 的原生 avoid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly avoid: 'avoid';
  /**
   * break-before 的原生 avoid-column 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly 'avoid-column': 'avoid-column';
  /**
   * break-before 的原生 avoid-page 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly 'avoid-page': 'avoid-page';
  /**
   * break-before 的原生 avoid-region 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly 'avoid-region': 'avoid-region';
  /**
   * break-before 的原生 column 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly column: 'column';
  /**
   * break-before 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly left: 'left';
  /**
   * break-before 的原生 page 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly page: 'page';
  /**
   * break-before 的原生 recto 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly recto: 'recto';
  /**
   * break-before 的原生 region 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly region: 'region';
  /**
   * break-before 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly right: 'right';
  /**
   * break-before 的原生 verso 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  readonly verso: 'verso';
}
export interface BreakInsideValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * break-inside 的原生 avoid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  readonly avoid: 'avoid';
  /**
   * break-inside 的原生 avoid-column 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  readonly 'avoid-column': 'avoid-column';
  /**
   * break-inside 的原生 avoid-page 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  readonly 'avoid-page': 'avoid-page';
  /**
   * break-inside 的原生 avoid-region 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  readonly 'avoid-region': 'avoid-region';
}
export interface CaptionSideValues extends CssWideValues {
  /**
   * caption-side 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  readonly bottom: 'bottom';
  /**
   * caption-side 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  readonly top: 'top';
}
export interface CaretValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * CSS 颜色关键字 bar；系统颜色会随用户环境和配色设置变化。
   */
  readonly bar: 'bar';
  /**
   * CSS 颜色关键字 block；系统颜色会随用户环境和配色设置变化。
   */
  readonly block: 'block';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
  /**
   * CSS 颜色关键字 underscore；系统颜色会随用户环境和配色设置变化。
   */
  readonly underscore: 'underscore';
}
export interface CaretColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface CaretShapeValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * caret-shape 的原生 bar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  readonly bar: 'bar';
  /**
   * caret-shape 的原生 block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  readonly block: 'block';
  /**
   * caret-shape 的原生 underscore 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  readonly underscore: 'underscore';
}
export interface ClearValues extends CssWideValues {
  /**
   * clear 的原生 both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  readonly both: 'both';
  /**
   * clear 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  readonly 'inline-end': 'inline-end';
  /**
   * clear 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  readonly 'inline-start': 'inline-start';
  /**
   * clear 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  readonly left: 'left';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * clear 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  readonly right: 'right';
}
export interface ClipValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ClipPathValues extends CssWideValues {
  /**
   * clip-path 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly 'border-box': 'border-box';
  /**
   * clip-path 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly 'content-box': 'content-box';
  /**
   * clip-path 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly 'fill-box': 'fill-box';
  /**
   * clip-path 的原生 margin-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly 'margin-box': 'margin-box';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * clip-path 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly 'padding-box': 'padding-box';
  /**
   * clip-path 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * clip-path 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  readonly 'view-box': 'view-box';
}
export interface ClipRuleValues extends CssWideValues {
  /**
   * clip-rule 的原生 evenodd 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  readonly evenodd: 'evenodd';
  /**
   * clip-rule 的原生 nonzero 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  readonly nonzero: 'nonzero';
}
export interface ColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface ColorAdjustValues extends CssWideValues {
  /**
   * color-adjust 的原生 economy 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  readonly economy: 'economy';
  /**
   * color-adjust 的原生 exact 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-adjust
   */
  readonly exact: 'exact';
}
export interface ColorInterpolationValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * color-interpolation 的原生 linearRGB 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  readonly linearRGB: 'linearRGB';
  /**
   * color-interpolation 的原生 sRGB 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  readonly sRGB: 'sRGB';
}
export interface ColorInterpolationFiltersValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * color-interpolation-filters 的原生 linearRGB 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  readonly linearRGB: 'linearRGB';
  /**
   * color-interpolation-filters 的原生 sRGB 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  readonly sRGB: 'sRGB';
}
export interface ColorRenderingValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * color-rendering 的原生 optimizeQuality 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  readonly optimizeQuality: 'optimizeQuality';
  /**
   * color-rendering 的原生 optimizeSpeed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  readonly optimizeSpeed: 'optimizeSpeed';
}
export interface ColorSchemeValues extends CssWideValues {
  /**
   * color-scheme 的原生 dark 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  readonly dark: 'dark';
  /**
   * color-scheme 的原生 light 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  readonly light: 'light';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface ColumnCountValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ColumnFillValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * column-fill 的原生 balance 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  readonly balance: 'balance';
}
export interface ColumnGapValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface ColumnRuleValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface ColumnRuleColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface ColumnRuleStyleValues extends CssWideValues {
  /**
   * column-rule-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly dashed: 'dashed';
  /**
   * column-rule-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly dotted: 'dotted';
  /**
   * column-rule-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly double: 'double';
  /**
   * column-rule-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly groove: 'groove';
  /**
   * column-rule-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly hidden: 'hidden';
  /**
   * column-rule-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * column-rule-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly outset: 'outset';
  /**
   * column-rule-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly ridge: 'ridge';
  /**
   * column-rule-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  readonly solid: 'solid';
}
export interface ColumnRuleWidthValues extends CssWideValues {
  /**
   * column-rule-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  readonly medium: 'medium';
  /**
   * column-rule-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  readonly thick: 'thick';
  /**
   * column-rule-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  readonly thin: 'thin';
}
export interface ColumnsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ColumnSpanValues extends CssWideValues {
  /**
   * column-span 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  readonly all: 'all';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ColumnWidthValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ContainValues extends CssWideValues {
  /**
   * 组合 layout、style 和 paint 隔离，不包含 size 隔离。
   */
  readonly content: 'content';
  /**
   * contain 的原生 inline-size 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  readonly 'inline-size': 'inline-size';
  /**
   * contain 的原生 layout 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  readonly layout: 'layout';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 将后代绘制限制在隔离边界内。
   */
  readonly paint: 'paint';
  /**
   * 计算盒子尺寸时不依赖后代内容，通常需要显式或替代内部尺寸。
   */
  readonly size: 'size';
  /**
   * 组合 size、layout、style 和 paint 隔离；尺寸隔离可能影响自动尺寸。
   */
  readonly strict: 'strict';
  /**
   * 隔离计数器等特定样式副作用，不会阻止普通 CSS 继承或选择器匹配。
   */
  readonly style: 'style';
}
export interface ContainerValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ContainerNameValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ContainerTypeValues extends CssWideValues {
  /**
   * 建立行内轴尺寸查询容器，不同时隔离块轴尺寸。
   */
  readonly 'inline-size': 'inline-size';
  /**
   * 不建立尺寸查询容器；仍可用于支持的样式查询。
   */
  readonly normal: 'normal';
  /**
   * container-type 的原生 scroll-state 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  readonly 'scroll-state': 'scroll-state';
  /**
   * 建立两个轴的尺寸查询容器，内容不再直接决定其隔离尺寸。
   */
  readonly size: 'size';
}
export interface ContainIntrinsicBlockSizeValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ContainIntrinsicHeightValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ContainIntrinsicInlineSizeValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ContainIntrinsicSizeValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ContainIntrinsicWidthValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ContentValues extends CssWideValues {
  /**
   * content 的原生 close-quote 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  readonly 'close-quote': 'close-quote';
  /**
   * content 的原生 no-close-quote 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  readonly 'no-close-quote': 'no-close-quote';
  /**
   * content 的原生 no-open-quote 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  readonly 'no-open-quote': 'no-open-quote';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * content 的原生 open-quote 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  readonly 'open-quote': 'open-quote';
}
export interface ContentVisibilityValues extends CssWideValues {
  /**
   * 允许浏览器跳过与用户暂不相关的内容渲染，仍需维护布局和可访问性语义。
   */
  readonly auto: 'auto';
  /**
   * 跳过内容渲染，行为不同于只隐藏绘制的 visibility:hidden。
   */
  readonly hidden: 'hidden';
  /**
   * 正常渲染内容，不由此属性跳过子树。
   */
  readonly visible: 'visible';
}
export interface CounterIncrementValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface CounterResetValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface CounterSetValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface CursorValues extends CssWideValues {
  /**
   * cursor 的原生 -moz-grab 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly '-moz-grab': '-moz-grab';
  /**
   * cursor 的原生 -moz-zoom-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly '-moz-zoom-in': '-moz-zoom-in';
  /**
   * cursor 的原生 -moz-zoom-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly '-moz-zoom-out': '-moz-zoom-out';
  /**
   * cursor 的原生 -webkit-grab 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly '-webkit-grab': '-webkit-grab';
  /**
   * cursor 的原生 -webkit-grabbing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly '-webkit-grabbing': '-webkit-grabbing';
  /**
   * cursor 的原生 -webkit-zoom-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly '-webkit-zoom-in': '-webkit-zoom-in';
  /**
   * cursor 的原生 -webkit-zoom-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly '-webkit-zoom-out': '-webkit-zoom-out';
  /**
   * cursor 的原生 alias 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly alias: 'alias';
  /**
   * cursor 的原生 all-scroll 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'all-scroll': 'all-scroll';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * cursor 的原生 cell 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly cell: 'cell';
  /**
   * cursor 的原生 col-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'col-resize': 'col-resize';
  /**
   * cursor 的原生 context-menu 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'context-menu': 'context-menu';
  /**
   * cursor 的原生 copy 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly copy: 'copy';
  /**
   * cursor 的原生 crosshair 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly crosshair: 'crosshair';
  /**
   * cursor 的原生 default 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly default: 'default';
  /**
   * cursor 的原生 e-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'e-resize': 'e-resize';
  /**
   * cursor 的原生 ew-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'ew-resize': 'ew-resize';
  /**
   * cursor 的原生 grab 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly grab: 'grab';
  /**
   * cursor 的原生 grabbing 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly grabbing: 'grabbing';
  /**
   * cursor 的原生 help 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly help: 'help';
  /**
   * cursor 的原生 move 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly move: 'move';
  /**
   * cursor 的原生 n-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'n-resize': 'n-resize';
  /**
   * cursor 的原生 ne-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'ne-resize': 'ne-resize';
  /**
   * cursor 的原生 nesw-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'nesw-resize': 'nesw-resize';
  /**
   * cursor 的原生 no-drop 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'no-drop': 'no-drop';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * cursor 的原生 not-allowed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'not-allowed': 'not-allowed';
  /**
   * cursor 的原生 ns-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'ns-resize': 'ns-resize';
  /**
   * cursor 的原生 nw-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'nw-resize': 'nw-resize';
  /**
   * cursor 的原生 nwse-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'nwse-resize': 'nwse-resize';
  /**
   * cursor 的原生 pointer 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly pointer: 'pointer';
  /**
   * cursor 的原生 progress 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly progress: 'progress';
  /**
   * cursor 的原生 row-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'row-resize': 'row-resize';
  /**
   * cursor 的原生 s-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 's-resize': 's-resize';
  /**
   * cursor 的原生 se-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'se-resize': 'se-resize';
  /**
   * cursor 的原生 sw-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'sw-resize': 'sw-resize';
  /**
   * cursor 的原生 text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly text: 'text';
  /**
   * cursor 的原生 vertical-text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'vertical-text': 'vertical-text';
  /**
   * cursor 的原生 w-resize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'w-resize': 'w-resize';
  /**
   * cursor 的原生 wait 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly wait: 'wait';
  /**
   * cursor 的原生 zoom-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'zoom-in': 'zoom-in';
  /**
   * cursor 的原生 zoom-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  readonly 'zoom-out': 'zoom-out';
}
export interface CxValues extends CssWideValues {}
export interface CyValues extends CssWideValues {}
export interface DValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface DirectionValues extends CssWideValues {
  /**
   * direction 的原生 ltr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  readonly ltr: 'ltr';
  /**
   * direction 的原生 rtl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  readonly rtl: 'rtl';
}
export interface DisplayValues extends CssWideValues {
  /**
   * display 的原生 -ms-flexbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly '-ms-flexbox': '-ms-flexbox';
  /**
   * display 的原生 -ms-grid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly '-ms-grid': '-ms-grid';
  /**
   * display 的原生 -ms-inline-flexbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly '-ms-inline-flexbox': '-ms-inline-flexbox';
  /**
   * display 的原生 -ms-inline-grid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly '-ms-inline-grid': '-ms-inline-grid';
  /**
   * display 的原生 -webkit-flex 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly '-webkit-flex': '-webkit-flex';
  /**
   * display 的原生 -webkit-inline-flex 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly '-webkit-inline-flex': '-webkit-inline-flex';
  /**
   * 生成块级盒子，内部默认采用普通流布局。
   */
  readonly block: 'block';
  /**
   * 通常不生成元素自身的主盒子，让子盒子参与外层布局；背景、边框等失去承载盒，应核对可访问性行为。
   *
   * 普通元素自身不再提供主盒子，子盒子可参与外层 Flex/Grid 等布局。
   *
   * 适用场景：保留 DOM 包装节点，同时让内部项目进入外层布局。
   *
   * 替换元素等存在特殊规则；应检查语义和可访问性，不要把它当作无条件删除包装盒的替代。
   *
   * @example
   * css({ display: "contents" })
   */
  readonly contents: 'contents';
  /**
   * 生成块级弹性容器，直接子元素参与 Flex 布局。
   *
   * 容器自身以块级方式参与普通流，直接子元素成为弹性项目；可分配剩余空间、对齐和换行。
   *
   * 区别：inline-flex 使用相同的内部布局，但容器对外按行内级盒子排列。
   *
   * 适用场景：工具栏、横向导航、纵向堆叠和一维内容排列。
   *
   * 默认主轴为 row，默认不换行；主轴方向还受书写方向影响。
   *
   * @example
   * css({ display: "flex", alignItems: "center", justifyContent: "space-between" })
   */
  readonly flex: 'flex';
  /**
   * 内部使用普通流布局；是否形成新的块格式化上下文还取决于定位、浮动、溢出等条件。需要明确建立独立块格式化上下文时使用 flow-root。
   */
  readonly flow: 'flow';
  /**
   * 建立独立块格式化上下文，可包住内部浮动并隔离部分外边距折叠。
   *
   * 区别：与普通 block 相比，显式建立独立块格式化上下文；无需借助 overflow:hidden，也不会因此裁剪溢出。
   *
   * 适用场景：让容器包住内部浮动，或隔离内外的部分外边距折叠。
   *
   * @example
   * css({ display: "flow-root", padding: "1rem" })
   */
  readonly 'flow-root': 'flow-root';
  /**
   * 生成块级网格容器，直接子元素参与 Grid 布局。
   *
   * 直接子元素进入网格，行列轨道和命名区域共同决定项目位置与尺寸。
   *
   * 区别：Flex 更侧重单个主轴；Grid 可以同时控制行和列。inline-grid 则改变容器对外的显示类型。
   *
   * 适用场景：卡片网格、表单对齐和二维页面区域布局。
   *
   * @example
   * css({ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" })
   */
  readonly grid: 'grid';
  /**
   * 生成行内盒子，参与行内排版；普通非替换行内盒子的宽高不按块盒规则应用。
   */
  readonly inline: 'inline';
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
   * css({ display: "inline-block", width: "2rem", height: "2rem", verticalAlign: "middle" })
   */
  readonly 'inline-block': 'inline-block';
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
   * css({ display: "inline-flex", alignItems: "center", gap: "0.375rem" })
   */
  readonly 'inline-flex': 'inline-flex';
  /**
   * 生成行内级网格容器，内部仍使用 Grid 布局。
   *
   * 区别：与 grid 的内部网格布局相同，但容器在普通流中按行内级盒子排列。
   *
   * 适用场景：需要行列对齐并与周围文字同行的小型内容组。
   *
   * @example
   * css({ display: "inline-grid", gridTemplateColumns: "repeat(2, auto)", gap: "0.25rem" })
   */
  readonly 'inline-grid': 'inline-grid';
  /**
   * display 的原生 inline-list-item 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly 'inline-list-item': 'inline-list-item';
  /**
   * 创建行内级表格盒，可与文字同行；内部仍采用表格布局。
   */
  readonly 'inline-table': 'inline-table';
  /**
   * 生成带列表标记的主盒子，标记由 list-style 等属性控制。
   */
  readonly 'list-item': 'list-item';
  /**
   * 不生成元素及其后代的布局盒子，通常也从可访问性树中移除。
   *
   * 区别：visibility:hidden 通常保留布局空间；opacity:0 只改变透明度，通常仍能交互。
   *
   * 适用场景：从当前布局中隐藏一段内容。
   *
   * 不能靠它保留可聚焦交互；重新显示时需按组件需求管理焦点。
   *
   * @example
   * css({ display: "none" })
   */
  readonly none: 'none';
  /**
   * display 的原生 ruby 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly ruby: 'ruby';
  /**
   * display 的原生 ruby-base 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly 'ruby-base': 'ruby-base';
  /**
   * display 的原生 ruby-base-container 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly 'ruby-base-container': 'ruby-base-container';
  /**
   * display 的原生 ruby-text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly 'ruby-text': 'ruby-text';
  /**
   * display 的原生 ruby-text-container 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly 'ruby-text-container': 'ruby-text-container';
  /**
   * display 的原生 run-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly 'run-in': 'run-in';
  /**
   * 创建块级表格盒，内部按表格行列布局；不会为普通元素增加 HTML 表格的语义。
   */
  readonly table: 'table';
  /**
   * 作为表格标题盒参与布局，位置由 caption-side 控制。
   */
  readonly 'table-caption': 'table-caption';
  /**
   * 作为表格单元格参与行列尺寸计算，可使用 vertical-align 控制单元格内容的垂直对齐。
   */
  readonly 'table-cell': 'table-cell';
  /**
   * 作为表格列参与布局，用于列级尺寸和部分样式；不能把任意内容当成一列直接显示。
   */
  readonly 'table-column': 'table-column';
  /**
   * 把多个表格列组织为列组，对应 colgroup 的布局角色。
   */
  readonly 'table-column-group': 'table-column-group';
  /**
   * 作为表尾行组参与表格布局，对应 tfoot 的布局角色。
   */
  readonly 'table-footer-group': 'table-footer-group';
  /**
   * 作为表头行组参与表格布局，对应 thead 的布局角色。
   */
  readonly 'table-header-group': 'table-header-group';
  /**
   * 作为表格的一行，组织其中的单元格。
   */
  readonly 'table-row': 'table-row';
  /**
   * 把多行组织成表格主体行组，对应 tbody 的布局角色。
   */
  readonly 'table-row-group': 'table-row-group';
}
export interface DominantBaselineValues extends CssWideValues {
  /**
   * dominant-baseline 的原生 alphabetic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly alphabetic: 'alphabetic';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * dominant-baseline 的原生 central 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly central: 'central';
  /**
   * dominant-baseline 的原生 hanging 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly hanging: 'hanging';
  /**
   * dominant-baseline 的原生 ideographic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly ideographic: 'ideographic';
  /**
   * dominant-baseline 的原生 mathematical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly mathematical: 'mathematical';
  /**
   * dominant-baseline 的原生 middle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly middle: 'middle';
  /**
   * dominant-baseline 的原生 text-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly 'text-bottom': 'text-bottom';
  /**
   * dominant-baseline 的原生 text-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  readonly 'text-top': 'text-top';
}
export interface EmptyCellsValues extends CssWideValues {
  /**
   * empty-cells 的原生 hide 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  readonly hide: 'hide';
  /**
   * empty-cells 的原生 show 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  readonly show: 'show';
}
export interface FieldSizingValues extends CssWideValues {
  /**
   * field-sizing 的原生 content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  readonly content: 'content';
  /**
   * field-sizing 的原生 fixed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  readonly fixed: 'fixed';
}
export interface FillValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * CSS 颜色关键字 context-fill；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'context-fill': 'context-fill';
  /**
   * CSS 颜色关键字 context-stroke；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'context-stroke': 'context-stroke';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface FillOpacityValues extends CssWideValues {}
export interface FillRuleValues extends CssWideValues {
  /**
   * 按射线穿过路径次数的奇偶性判断内部，适合交叠或有孔路径。
   */
  readonly evenodd: 'evenodd';
  /**
   * 按有方向的绕数判断路径内部，子路径方向会影响结果。
   */
  readonly nonzero: 'nonzero';
}
export interface FilterValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface FlexValues extends CssWideValues {
  /**
   * 等价于 1 1 auto：可增长、可收缩，基础尺寸由主尺寸属性或内容决定。
   *
   * 区别：1 1 0% 以零百分比为基础分配，auto 的基础尺寸通常受内容或主尺寸属性影响。
   *
   * 适用场景：让项目以自身尺寸为基础参与剩余空间分配。
   *
   * 最终比例还受最小/最大尺寸约束，不保证所有项目等宽。
   *
   * @example
   * css({ flex: "auto" })
   */
  readonly auto: 'auto';
  /**
   * flex 的原生 content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly content: 'content';
  /**
   * flex 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly 'fit-content': 'fit-content';
  /**
   * flex 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly 'max-content': 'max-content';
  /**
   * flex 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly 'min-content': 'min-content';
  /**
   * 等价于 0 0 auto：不增长也不收缩，保留自动基础尺寸。
   *
   * 区别：auto 会增长和收缩；none 两者都不参与。
   *
   * 适用场景：防止工具栏中的图标或固定控件被压缩。
   *
   * @example
   * css({ flex: "none" })
   */
  readonly none: 'none';
}
export interface FlexBasisValues extends CssWideValues {
  /**
   * flex-basis 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * flex-basis 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * flex-basis 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * flex-basis 的原生 -webkit-auto 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly '-webkit-auto': '-webkit-auto';
  /**
   * 先参考主轴对应的 width 或 height；该值也为 auto 时由内容决定。
   */
  readonly auto: 'auto';
  /**
   * 按内容确定基础尺寸，而不直接使用 width 或 height 作为基础尺寸。
   */
  readonly content: 'content';
  /**
   * flex-basis 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly 'fit-content': 'fit-content';
  /**
   * flex-basis 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly 'max-content': 'max-content';
  /**
   * flex-basis 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  readonly 'min-content': 'min-content';
}
export interface FlexDirectionValues extends CssWideValues {
  /**
   * 主轴沿块方向排列；水平书写时通常从上到下。
   */
  readonly column: 'column';
  /**
   * 反转块方向的视觉排列，不改变 DOM 顺序。
   */
  readonly 'column-reverse': 'column-reverse';
  /**
   * 主轴沿行内方向排列；不一定是从左到右，取决于书写方向。
   */
  readonly row: 'row';
  /**
   * 反转行内方向的视觉排列，不改变 DOM 顺序。
   */
  readonly 'row-reverse': 'row-reverse';
}
export interface FlexFlowValues extends CssWideValues {
  /**
   * flex-flow 的原生 column 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly column: 'column';
  /**
   * flex-flow 的原生 column-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly 'column-reverse': 'column-reverse';
  /**
   * flex-flow 的原生 nowrap 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly nowrap: 'nowrap';
  /**
   * flex-flow 的原生 row 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly row: 'row';
  /**
   * flex-flow 的原生 row-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly 'row-reverse': 'row-reverse';
  /**
   * flex-flow 的原生 wrap 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly wrap: 'wrap';
  /**
   * flex-flow 的原生 wrap-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  readonly 'wrap-reverse': 'wrap-reverse';
}
export interface FlexGrowValues extends CssWideValues {}
export interface FlexShrinkValues extends CssWideValues {}
export interface FlexWrapValues extends CssWideValues {
  /**
   * 保持单行；项目仍可能收缩或溢出。
   */
  readonly nowrap: 'nowrap';
  /**
   * 空间不足时形成多行，沿交叉轴正常方向排列。
   *
   * 区别：nowrap 保持单行；wrap-reverse 反转交叉轴上各行的排列方向。
   *
   * 换行不会自动均分每行项目宽度，尺寸仍由各项目的 flex 配置决定。
   *
   * @example
   * css({ display: "flex", flexWrap: "wrap" })
   */
  readonly wrap: 'wrap';
  /**
   * 允许换行并反转交叉轴上各行的排列方向。
   */
  readonly 'wrap-reverse': 'wrap-reverse';
}
export interface FloatValues extends CssWideValues {
  /**
   * float 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  readonly 'inline-end': 'inline-end';
  /**
   * float 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  readonly 'inline-start': 'inline-start';
  /**
   * float 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  readonly left: 'left';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * float 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  readonly right: 'right';
}
export interface FloodColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface FloodOpacityValues extends CssWideValues {}
export interface FontValues extends CssWideValues {
  /**
   * font 的原生 caption 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  readonly caption: 'caption';
  /**
   * font 的原生 icon 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  readonly icon: 'icon';
  /**
   * font 的原生 menu 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  readonly menu: 'menu';
  /**
   * font 的原生 message-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  readonly 'message-box': 'message-box';
  /**
   * font 的原生 small-caption 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  readonly 'small-caption': 'small-caption';
  /**
   * font 的原生 status-bar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  readonly 'status-bar': 'status-bar';
}
export interface FontFamilyValues extends CssWideValues {
  /**
   * font-family 的原生 -apple-system 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly '-apple-system': '-apple-system';
  /**
   * font-family 的原生 cursive 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly cursive: 'cursive';
  /**
   * font-family 的原生 emoji 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly emoji: 'emoji';
  /**
   * font-family 的原生 fangsong 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly fangsong: 'fangsong';
  /**
   * font-family 的原生 fantasy 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly fantasy: 'fantasy';
  /**
   * font-family 的原生 math 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly math: 'math';
  /**
   * font-family 的原生 monospace 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly monospace: 'monospace';
  /**
   * font-family 的原生 sans-serif 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly 'sans-serif': 'sans-serif';
  /**
   * font-family 的原生 serif 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly serif: 'serif';
  /**
   * font-family 的原生 system-ui 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly 'system-ui': 'system-ui';
  /**
   * font-family 的原生 ui-monospace 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly 'ui-monospace': 'ui-monospace';
  /**
   * font-family 的原生 ui-rounded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly 'ui-rounded': 'ui-rounded';
  /**
   * font-family 的原生 ui-sans-serif 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly 'ui-sans-serif': 'ui-sans-serif';
  /**
   * font-family 的原生 ui-serif 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  readonly 'ui-serif': 'ui-serif';
}
export interface FontFeatureSettingsValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface FontKerningValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface FontLanguageOverrideValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface FontOpticalSizingValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface FontPaletteValues extends CssWideValues {
  /**
   * font-palette 的原生 dark 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  readonly dark: 'dark';
  /**
   * font-palette 的原生 light 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  readonly light: 'light';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface FontSizeValues extends CssWideValues {
  /**
   * font-size 的原生 large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly large: 'large';
  /**
   * font-size 的原生 larger 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly larger: 'larger';
  /**
   * font-size 的原生 math 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly math: 'math';
  /**
   * font-size 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly medium: 'medium';
  /**
   * font-size 的原生 small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly small: 'small';
  /**
   * font-size 的原生 smaller 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly smaller: 'smaller';
  /**
   * font-size 的原生 x-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly 'x-large': 'x-large';
  /**
   * font-size 的原生 x-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly 'x-small': 'x-small';
  /**
   * font-size 的原生 xx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly 'xx-large': 'xx-large';
  /**
   * font-size 的原生 xx-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly 'xx-small': 'xx-small';
  /**
   * font-size 的原生 xxx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  readonly 'xxx-large': 'xxx-large';
}
export interface FontSizeAdjustValues extends CssWideValues {
  /**
   * font-size-adjust 的原生 from-font 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  readonly 'from-font': 'from-font';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface FontSmoothValues extends CssWideValues {
  /**
   * font-smooth 的原生 always 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly always: 'always';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * font-smooth 的原生 large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly large: 'large';
  /**
   * font-smooth 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly medium: 'medium';
  /**
   * font-smooth 的原生 never 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly never: 'never';
  /**
   * font-smooth 的原生 small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly small: 'small';
  /**
   * font-smooth 的原生 x-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly 'x-large': 'x-large';
  /**
   * font-smooth 的原生 x-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly 'x-small': 'x-small';
  /**
   * font-smooth 的原生 xx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly 'xx-large': 'xx-large';
  /**
   * font-smooth 的原生 xx-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly 'xx-small': 'xx-small';
  /**
   * font-smooth 的原生 xxx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  readonly 'xxx-large': 'xxx-large';
}
export interface FontStretchValues extends CssWideValues {
  /**
   * font-stretch 的原生 condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly condensed: 'condensed';
  /**
   * font-stretch 的原生 expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly expanded: 'expanded';
  /**
   * font-stretch 的原生 extra-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly 'extra-condensed': 'extra-condensed';
  /**
   * font-stretch 的原生 extra-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly 'extra-expanded': 'extra-expanded';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * font-stretch 的原生 semi-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly 'semi-condensed': 'semi-condensed';
  /**
   * font-stretch 的原生 semi-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly 'semi-expanded': 'semi-expanded';
  /**
   * font-stretch 的原生 ultra-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly 'ultra-condensed': 'ultra-condensed';
  /**
   * font-stretch 的原生 ultra-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  readonly 'ultra-expanded': 'ultra-expanded';
}
export interface FontStyleValues extends CssWideValues {
  /**
   * font-style 的原生 italic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  readonly italic: 'italic';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * font-style 的原生 oblique 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  readonly oblique: 'oblique';
}
export interface FontSynthesisValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * font-synthesis 的原生 position 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  readonly position: 'position';
  /**
   * font-synthesis 的原生 small-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  readonly 'small-caps': 'small-caps';
  /**
   * font-synthesis 的原生 style 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  readonly style: 'style';
  /**
   * font-synthesis 的原生 weight 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  readonly weight: 'weight';
}
export interface FontSynthesisPositionValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface FontSynthesisSmallCapsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface FontSynthesisStyleValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface FontSynthesisWeightValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface FontVariantValues extends CssWideValues {
  /**
   * font-variant 的原生 all-petite-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'all-petite-caps': 'all-petite-caps';
  /**
   * font-variant 的原生 all-small-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'all-small-caps': 'all-small-caps';
  /**
   * font-variant 的原生 common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'common-ligatures': 'common-ligatures';
  /**
   * font-variant 的原生 contextual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly contextual: 'contextual';
  /**
   * font-variant 的原生 diagonal-fractions 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'diagonal-fractions': 'diagonal-fractions';
  /**
   * font-variant 的原生 discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'discretionary-ligatures': 'discretionary-ligatures';
  /**
   * font-variant 的原生 full-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'full-width': 'full-width';
  /**
   * font-variant 的原生 historical-forms 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'historical-forms': 'historical-forms';
  /**
   * font-variant 的原生 historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'historical-ligatures': 'historical-ligatures';
  /**
   * font-variant 的原生 jis04 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly jis04: 'jis04';
  /**
   * font-variant 的原生 jis78 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly jis78: 'jis78';
  /**
   * font-variant 的原生 jis83 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly jis83: 'jis83';
  /**
   * font-variant 的原生 jis90 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly jis90: 'jis90';
  /**
   * font-variant 的原生 lining-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'lining-nums': 'lining-nums';
  /**
   * font-variant 的原生 no-common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'no-common-ligatures': 'no-common-ligatures';
  /**
   * font-variant 的原生 no-contextual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'no-contextual': 'no-contextual';
  /**
   * font-variant 的原生 no-discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'no-discretionary-ligatures': 'no-discretionary-ligatures';
  /**
   * font-variant 的原生 no-historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'no-historical-ligatures': 'no-historical-ligatures';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * font-variant 的原生 oldstyle-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'oldstyle-nums': 'oldstyle-nums';
  /**
   * font-variant 的原生 ordinal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly ordinal: 'ordinal';
  /**
   * font-variant 的原生 petite-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'petite-caps': 'petite-caps';
  /**
   * font-variant 的原生 proportional-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'proportional-nums': 'proportional-nums';
  /**
   * font-variant 的原生 proportional-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'proportional-width': 'proportional-width';
  /**
   * font-variant 的原生 ruby 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly ruby: 'ruby';
  /**
   * font-variant 的原生 simplified 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly simplified: 'simplified';
  /**
   * font-variant 的原生 slashed-zero 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'slashed-zero': 'slashed-zero';
  /**
   * font-variant 的原生 small-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'small-caps': 'small-caps';
  /**
   * font-variant 的原生 stacked-fractions 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'stacked-fractions': 'stacked-fractions';
  /**
   * font-variant 的原生 tabular-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'tabular-nums': 'tabular-nums';
  /**
   * font-variant 的原生 titling-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly 'titling-caps': 'titling-caps';
  /**
   * font-variant 的原生 traditional 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly traditional: 'traditional';
  /**
   * font-variant 的原生 unicase 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  readonly unicase: 'unicase';
}
export interface FontVariantAlternatesValues extends CssWideValues {
  /**
   * font-variant-alternates 的原生 historical-forms 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  readonly 'historical-forms': 'historical-forms';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface FontVariantCapsValues extends CssWideValues {
  /**
   * font-variant-caps 的原生 all-petite-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly 'all-petite-caps': 'all-petite-caps';
  /**
   * font-variant-caps 的原生 all-small-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly 'all-small-caps': 'all-small-caps';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * font-variant-caps 的原生 petite-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly 'petite-caps': 'petite-caps';
  /**
   * font-variant-caps 的原生 small-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly 'small-caps': 'small-caps';
  /**
   * font-variant-caps 的原生 titling-caps 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly 'titling-caps': 'titling-caps';
  /**
   * font-variant-caps 的原生 unicase 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  readonly unicase: 'unicase';
}
export interface FontVariantEastAsianValues extends CssWideValues {
  /**
   * font-variant-east-asian 的原生 full-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly 'full-width': 'full-width';
  /**
   * font-variant-east-asian 的原生 jis04 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly jis04: 'jis04';
  /**
   * font-variant-east-asian 的原生 jis78 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly jis78: 'jis78';
  /**
   * font-variant-east-asian 的原生 jis83 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly jis83: 'jis83';
  /**
   * font-variant-east-asian 的原生 jis90 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly jis90: 'jis90';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * font-variant-east-asian 的原生 proportional-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly 'proportional-width': 'proportional-width';
  /**
   * font-variant-east-asian 的原生 ruby 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly ruby: 'ruby';
  /**
   * font-variant-east-asian 的原生 simplified 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly simplified: 'simplified';
  /**
   * font-variant-east-asian 的原生 traditional 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  readonly traditional: 'traditional';
}
export interface FontVariantEmojiValues extends CssWideValues {
  /**
   * font-variant-emoji 的原生 emoji 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  readonly emoji: 'emoji';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * font-variant-emoji 的原生 text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  readonly text: 'text';
  /**
   * font-variant-emoji 的原生 unicode 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  readonly unicode: 'unicode';
}
export interface FontVariantLigaturesValues extends CssWideValues {
  /**
   * font-variant-ligatures 的原生 common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly 'common-ligatures': 'common-ligatures';
  /**
   * font-variant-ligatures 的原生 contextual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly contextual: 'contextual';
  /**
   * font-variant-ligatures 的原生 discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly 'discretionary-ligatures': 'discretionary-ligatures';
  /**
   * font-variant-ligatures 的原生 historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly 'historical-ligatures': 'historical-ligatures';
  /**
   * font-variant-ligatures 的原生 no-common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly 'no-common-ligatures': 'no-common-ligatures';
  /**
   * font-variant-ligatures 的原生 no-contextual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly 'no-contextual': 'no-contextual';
  /**
   * font-variant-ligatures 的原生 no-discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly 'no-discretionary-ligatures': 'no-discretionary-ligatures';
  /**
   * font-variant-ligatures 的原生 no-historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  readonly 'no-historical-ligatures': 'no-historical-ligatures';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface FontVariantNumericValues extends CssWideValues {
  /**
   * font-variant-numeric 的原生 diagonal-fractions 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly 'diagonal-fractions': 'diagonal-fractions';
  /**
   * font-variant-numeric 的原生 lining-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly 'lining-nums': 'lining-nums';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * font-variant-numeric 的原生 oldstyle-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly 'oldstyle-nums': 'oldstyle-nums';
  /**
   * font-variant-numeric 的原生 ordinal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly ordinal: 'ordinal';
  /**
   * font-variant-numeric 的原生 proportional-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly 'proportional-nums': 'proportional-nums';
  /**
   * font-variant-numeric 的原生 slashed-zero 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly 'slashed-zero': 'slashed-zero';
  /**
   * font-variant-numeric 的原生 stacked-fractions 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly 'stacked-fractions': 'stacked-fractions';
  /**
   * font-variant-numeric 的原生 tabular-nums 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  readonly 'tabular-nums': 'tabular-nums';
}
export interface FontVariantPositionValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * font-variant-position 的原生 sub 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  readonly sub: 'sub';
  /**
   * font-variant-position 的原生 super 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  readonly super: 'super';
}
export interface FontVariationSettingsValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface FontWeightValues extends CssWideValues {
  /**
   * 粗体字重，等价于数值 700。
   */
  readonly bold: 'bold';
  /**
   * 相对于继承字重选择更粗的字重，不是简单加一个固定数值。
   */
  readonly bolder: 'bolder';
  /**
   * 相对于继承字重选择更细的字重，不是简单减一个固定数值。
   */
  readonly lighter: 'lighter';
  /**
   * 正常字重，等价于数值 400。
   */
  readonly normal: 'normal';
}
export interface FontWidthValues extends CssWideValues {
  /**
   * font-width 的原生 condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly condensed: 'condensed';
  /**
   * font-width 的原生 expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly expanded: 'expanded';
  /**
   * font-width 的原生 extra-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly 'extra-condensed': 'extra-condensed';
  /**
   * font-width 的原生 extra-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly 'extra-expanded': 'extra-expanded';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * font-width 的原生 semi-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly 'semi-condensed': 'semi-condensed';
  /**
   * font-width 的原生 semi-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly 'semi-expanded': 'semi-expanded';
  /**
   * font-width 的原生 ultra-condensed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly 'ultra-condensed': 'ultra-condensed';
  /**
   * font-width 的原生 ultra-expanded 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  readonly 'ultra-expanded': 'ultra-expanded';
}
export interface ForcedColorAdjustValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * forced-color-adjust 的原生 preserve-parent-color 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  readonly 'preserve-parent-color': 'preserve-parent-color';
}
export interface GapValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface GlyphOrientationVerticalValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface GridValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface GridAreaValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface GridAutoColumnsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * grid-auto-columns 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  readonly 'max-content': 'max-content';
  /**
   * grid-auto-columns 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  readonly 'min-content': 'min-content';
}
export interface GridAutoFlowValues extends CssWideValues {
  /**
   * 优先沿列放置项目，必要时创建新的隐式列。
   */
  readonly column: 'column';
  /**
   * 尝试回填前面留下的空洞，可能让视觉顺序与 DOM 顺序不同。
   */
  readonly dense: 'dense';
  /**
   * 优先沿行放置项目，必要时创建新的隐式行。
   */
  readonly row: 'row';
}
export interface GridAutoRowsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * grid-auto-rows 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  readonly 'max-content': 'max-content';
  /**
   * grid-auto-rows 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  readonly 'min-content': 'min-content';
}
export interface GridColumnValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface GridColumnEndValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface GridColumnGapValues extends CssWideValues {}
export interface GridColumnStartValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface GridGapValues extends CssWideValues {}
export interface GridRowValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface GridRowEndValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface GridRowGapValues extends CssWideValues {}
export interface GridRowStartValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface GridTemplateValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface GridTemplateAreasValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface GridTemplateColumnsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * grid-template-columns 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  readonly 'max-content': 'max-content';
  /**
   * grid-template-columns 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  readonly 'min-content': 'min-content';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * grid-template-columns 的原生 subgrid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  readonly subgrid: 'subgrid';
}
export interface GridTemplateRowsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * grid-template-rows 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  readonly 'max-content': 'max-content';
  /**
   * grid-template-rows 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  readonly 'min-content': 'min-content';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * grid-template-rows 的原生 subgrid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  readonly subgrid: 'subgrid';
}
export interface HangingPunctuationValues extends CssWideValues {
  /**
   * hanging-punctuation 的原生 allow-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  readonly 'allow-end': 'allow-end';
  /**
   * hanging-punctuation 的原生 first 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  readonly first: 'first';
  /**
   * hanging-punctuation 的原生 force-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  readonly 'force-end': 'force-end';
  /**
   * hanging-punctuation 的原生 last 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  readonly last: 'last';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface HeightValues extends CssWideValues {
  /**
   * height 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * height 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * height 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * height 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  readonly '-webkit-fit-content': '-webkit-fit-content';
  /**
   * 让布局算法决定尺寸，不保证等于父元素尺寸。
   */
  readonly auto: 'auto';
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   */
  readonly 'max-content': 'max-content';
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   */
  readonly 'min-content': 'min-content';
}
export interface HyphenateCharacterValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface HyphenateLimitCharsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface HyphensValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * hyphens 的原生 manual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  readonly manual: 'manual';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ImageOrientationValues extends CssWideValues {
  /**
   * image-orientation 的原生 flip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  readonly flip: 'flip';
  /**
   * image-orientation 的原生 from-image 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  readonly 'from-image': 'from-image';
}
export interface ImageRenderingValues extends CssWideValues {
  /**
   * image-rendering 的原生 -moz-crisp-edges 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  readonly '-moz-crisp-edges': '-moz-crisp-edges';
  /**
   * image-rendering 的原生 -webkit-optimize-contrast 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  readonly '-webkit-optimize-contrast': '-webkit-optimize-contrast';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * image-rendering 的原生 crisp-edges 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  readonly 'crisp-edges': 'crisp-edges';
  /**
   * image-rendering 的原生 pixelated 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  readonly pixelated: 'pixelated';
  /**
   * image-rendering 的原生 smooth 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  readonly smooth: 'smooth';
}
export interface ImageResolutionValues extends CssWideValues {
  /**
   * image-resolution 的原生 from-image 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  readonly 'from-image': 'from-image';
}
export interface ImeModeValues extends CssWideValues {
  /**
   * ime-mode 的原生 active 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  readonly active: 'active';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * ime-mode 的原生 disabled 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  readonly disabled: 'disabled';
  /**
   * ime-mode 的原生 inactive 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ime-mode
   */
  readonly inactive: 'inactive';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface InitialLetterValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface InitialLetterAlignValues extends CssWideValues {
  /**
   * initial-letter-align 的原生 alphabetic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  readonly alphabetic: 'alphabetic';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * initial-letter-align 的原生 hanging 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  readonly hanging: 'hanging';
  /**
   * initial-letter-align 的原生 ideographic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  readonly ideographic: 'ideographic';
}
export interface InlineSizeValues extends CssWideValues {
  /**
   * inline-size 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * inline-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * inline-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * inline-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  readonly '-webkit-fill-available': '-webkit-fill-available';
  /**
   * 让布局算法决定尺寸，不保证等于父元素尺寸。
   */
  readonly auto: 'auto';
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   */
  readonly 'max-content': 'max-content';
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   */
  readonly 'min-content': 'min-content';
}
export interface InsetValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface InsetAreaValues extends CssWideValues {
  /**
   * inset-area 的原生 block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'block-end': 'block-end';
  /**
   * inset-area 的原生 block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'block-start': 'block-start';
  /**
   * inset-area 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly bottom: 'bottom';
  /**
   * inset-area 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly center: 'center';
  /**
   * inset-area 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly end: 'end';
  /**
   * inset-area 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'inline-end': 'inline-end';
  /**
   * inset-area 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'inline-start': 'inline-start';
  /**
   * inset-area 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly left: 'left';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * inset-area 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly right: 'right';
  /**
   * inset-area 的原生 self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'self-block-end': 'self-block-end';
  /**
   * inset-area 的原生 self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'self-block-start': 'self-block-start';
  /**
   * inset-area 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'self-end': 'self-end';
  /**
   * inset-area 的原生 self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'self-inline-end': 'self-inline-end';
  /**
   * inset-area 的原生 self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'self-inline-start': 'self-inline-start';
  /**
   * inset-area 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'self-start': 'self-start';
  /**
   * inset-area 的原生 span-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-all': 'span-all';
  /**
   * inset-area 的原生 span-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-block-end': 'span-block-end';
  /**
   * inset-area 的原生 span-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-block-start': 'span-block-start';
  /**
   * inset-area 的原生 span-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-bottom': 'span-bottom';
  /**
   * inset-area 的原生 span-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-end': 'span-end';
  /**
   * inset-area 的原生 span-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-inline-end': 'span-inline-end';
  /**
   * inset-area 的原生 span-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-inline-start': 'span-inline-start';
  /**
   * inset-area 的原生 span-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-left': 'span-left';
  /**
   * inset-area 的原生 span-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-right': 'span-right';
  /**
   * inset-area 的原生 span-self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-self-block-end': 'span-self-block-end';
  /**
   * inset-area 的原生 span-self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-self-block-start': 'span-self-block-start';
  /**
   * inset-area 的原生 span-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-self-end': 'span-self-end';
  /**
   * inset-area 的原生 span-self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-self-inline-end': 'span-self-inline-end';
  /**
   * inset-area 的原生 span-self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-self-inline-start': 'span-self-inline-start';
  /**
   * inset-area 的原生 span-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-self-start': 'span-self-start';
  /**
   * inset-area 的原生 span-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-start': 'span-start';
  /**
   * inset-area 的原生 span-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-top': 'span-top';
  /**
   * inset-area 的原生 span-x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-x-end': 'span-x-end';
  /**
   * inset-area 的原生 span-x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-x-self-end': 'span-x-self-end';
  /**
   * inset-area 的原生 span-x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-x-self-start': 'span-x-self-start';
  /**
   * inset-area 的原生 span-x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-x-start': 'span-x-start';
  /**
   * inset-area 的原生 span-y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-y-end': 'span-y-end';
  /**
   * inset-area 的原生 span-y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-y-self-end': 'span-y-self-end';
  /**
   * inset-area 的原生 span-y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-y-self-start': 'span-y-self-start';
  /**
   * inset-area 的原生 span-y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'span-y-start': 'span-y-start';
  /**
   * inset-area 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly start: 'start';
  /**
   * inset-area 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly top: 'top';
  /**
   * inset-area 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'x-end': 'x-end';
  /**
   * inset-area 的原生 x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'x-self-end': 'x-self-end';
  /**
   * inset-area 的原生 x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'x-self-start': 'x-self-start';
  /**
   * inset-area 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'x-start': 'x-start';
  /**
   * inset-area 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'y-end': 'y-end';
  /**
   * inset-area 的原生 y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'y-self-end': 'y-self-end';
  /**
   * inset-area 的原生 y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'y-self-start': 'y-self-start';
  /**
   * inset-area 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-area
   */
  readonly 'y-start': 'y-start';
}
export interface InsetBlockValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface InsetBlockEndValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface InsetBlockStartValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface InsetInlineValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface InsetInlineEndValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface InsetInlineStartValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface InterpolateSizeValues extends CssWideValues {
  /**
   * 允许受支持的内部尺寸关键字与长度/百分比之间插值，不保证两个关键字之间可以插值。
   */
  readonly 'allow-keywords': 'allow-keywords';
  /**
   * 保持仅数值尺寸之间的插值行为。
   */
  readonly 'numeric-only': 'numeric-only';
}
export interface IsolationValues extends CssWideValues {
  /**
   * 由其他属性是否需要层叠上下文决定，不强制隔离。
   */
  readonly auto: 'auto';
  /**
   * 建立独立层叠上下文，使混合效果在该分组内处理。
   */
  readonly isolate: 'isolate';
}
export interface JustifyContentValues extends CssWideValues {
  /**
   * 将整体内容放在主轴或行内轴的中间，不改变项目内部文字对齐。
   */
  readonly center: 'center';
  /**
   * 让整体内容靠对齐容器在该轴上的逻辑结束侧排列。
   */
  readonly end: 'end';
  /**
   * Flex 内容靠主轴终点排列。
   */
  readonly 'flex-end': 'flex-end';
  /**
   * Flex 内容靠主轴起点排列；起点受 flex-direction 影响。
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 沿适用轴靠物理左侧排列，不随文字方向交换；该轴不支持左右方向时按 start 处理。
   */
  readonly left: 'left';
  /**
   * 采用布局模式的默认分布：通常按 stretch 处理；Flex 中增长由 flex-grow 控制，因此这里表现为靠起始侧排列。
   */
  readonly normal: 'normal';
  /**
   * 沿适用轴靠物理右侧排列，不随文字方向交换；该轴不支持左右方向时按 start 处理。
   */
  readonly right: 'right';
  /**
   * 每个项目两侧分配相等空间，容器边缘的空间是相邻项目间的一半。
   */
  readonly 'space-around': 'space-around';
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
   * css({ display: "flex", justifyContent: "space-between", alignItems: "center" })
   */
  readonly 'space-between': 'space-between';
  /**
   * 容器两端和相邻项目之间分配相等空间。
   *
   * 适用场景：希望容器两端和项目之间空隙一致的导航或操作组。
   *
   * @example
   * css({ display: "flex", justifyContent: "space-evenly" })
   */
  readonly 'space-evenly': 'space-evenly';
  /**
   * 让整体内容靠对齐容器在该轴上的逻辑起始侧排列；与 flex-start 的 Flex 主轴起点含义不同。
   */
  readonly start: 'start';
  /**
   * 在支持的布局中拉伸自动尺寸的内容；Flex 主轴增长通常由 flex-grow 控制。
   */
  readonly stretch: 'stretch';
}
export interface JustifyItemsValues extends CssWideValues {
  /**
   * justify-items 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly 'anchor-center': 'anchor-center';
  /**
   * justify-items 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly baseline: 'baseline';
  /**
   * justify-items 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly center: 'center';
  /**
   * justify-items 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly end: 'end';
  /**
   * justify-items 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly 'flex-end': 'flex-end';
  /**
   * justify-items 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly 'flex-start': 'flex-start';
  /**
   * justify-items 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly left: 'left';
  /**
   * justify-items 的原生 legacy 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly legacy: 'legacy';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * justify-items 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly right: 'right';
  /**
   * justify-items 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly 'self-end': 'self-end';
  /**
   * justify-items 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly 'self-start': 'self-start';
  /**
   * justify-items 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly start: 'start';
  /**
   * justify-items 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  readonly stretch: 'stretch';
}
export interface JustifySelfValues extends CssWideValues {
  /**
   * justify-self 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly 'anchor-center': 'anchor-center';
  /**
   * 采用父容器 justify-items 等上下文决定的对齐方式；不用于 Flex 项目的主轴分配。
   */
  readonly auto: 'auto';
  /**
   * justify-self 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly baseline: 'baseline';
  /**
   * justify-self 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly center: 'center';
  /**
   * justify-self 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly end: 'end';
  /**
   * justify-self 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly 'flex-end': 'flex-end';
  /**
   * justify-self 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly 'flex-start': 'flex-start';
  /**
   * justify-self 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly left: 'left';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * justify-self 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly right: 'right';
  /**
   * justify-self 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly 'self-end': 'self-end';
  /**
   * justify-self 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly 'self-start': 'self-start';
  /**
   * justify-self 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  readonly start: 'start';
  /**
   * 在自动尺寸和最小/最大约束允许时沿行内轴拉伸。
   */
  readonly stretch: 'stretch';
}
export interface JustifyTracksValues extends CssWideValues {
  /**
   * justify-tracks 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly center: 'center';
  /**
   * justify-tracks 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly end: 'end';
  /**
   * justify-tracks 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly 'flex-end': 'flex-end';
  /**
   * justify-tracks 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly 'flex-start': 'flex-start';
  /**
   * justify-tracks 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly left: 'left';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * justify-tracks 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly right: 'right';
  /**
   * justify-tracks 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly 'space-around': 'space-around';
  /**
   * justify-tracks 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly 'space-between': 'space-between';
  /**
   * justify-tracks 的原生 space-evenly 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly 'space-evenly': 'space-evenly';
  /**
   * justify-tracks 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly start: 'start';
  /**
   * justify-tracks 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  readonly stretch: 'stretch';
}
export interface KhtmlBoxAlignValues extends CssWideValues {
  /**
   * -khtml-box-align 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-align
   */
  readonly baseline: 'baseline';
  /**
   * -khtml-box-align 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-align
   */
  readonly center: 'center';
  /**
   * -khtml-box-align 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-align
   */
  readonly end: 'end';
  /**
   * -khtml-box-align 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-align
   */
  readonly start: 'start';
  /**
   * -khtml-box-align 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-align
   */
  readonly stretch: 'stretch';
}
export interface KhtmlBoxDirectionValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -khtml-box-direction 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-direction
   */
  readonly reverse: 'reverse';
}
export interface KhtmlBoxFlexValues extends CssWideValues {}
export interface KhtmlBoxFlexGroupValues extends CssWideValues {}
export interface KhtmlBoxLinesValues extends CssWideValues {
  /**
   * -khtml-box-lines 的原生 multiple 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-lines
   */
  readonly multiple: 'multiple';
  /**
   * -khtml-box-lines 的原生 single 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-lines
   */
  readonly single: 'single';
}
export interface KhtmlBoxOrdinalGroupValues extends CssWideValues {}
export interface KhtmlBoxOrientValues extends CssWideValues {
  /**
   * -khtml-box-orient 的原生 block-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  readonly 'block-axis': 'block-axis';
  /**
   * -khtml-box-orient 的原生 horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  readonly horizontal: 'horizontal';
  /**
   * -khtml-box-orient 的原生 inline-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  readonly 'inline-axis': 'inline-axis';
  /**
   * -khtml-box-orient 的原生 vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-orient
   */
  readonly vertical: 'vertical';
}
export interface KhtmlBoxPackValues extends CssWideValues {
  /**
   * -khtml-box-pack 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-pack
   */
  readonly center: 'center';
  /**
   * -khtml-box-pack 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-pack
   */
  readonly end: 'end';
  /**
   * -khtml-box-pack 的原生 justify 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-pack
   */
  readonly justify: 'justify';
  /**
   * -khtml-box-pack 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-box-pack
   */
  readonly start: 'start';
}
export interface KhtmlLineBreakValues extends CssWideValues {
  /**
   * -khtml-line-break 的原生 anywhere 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-line-break
   */
  readonly anywhere: 'anywhere';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -khtml-line-break 的原生 loose 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-line-break
   */
  readonly loose: 'loose';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -khtml-line-break 的原生 strict 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-line-break
   */
  readonly strict: 'strict';
}
export interface KhtmlOpacityValues extends CssWideValues {}
export interface KhtmlUserSelectValues extends CssWideValues {
  /**
   * -khtml-user-select 的原生 -moz-none 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-khtml-user-select
   */
  readonly '-moz-none': '-moz-none';
  /**
   * 将元素内容作为整体选取单元。
   */
  readonly all: 'all';
  /**
   * 由父级与元素上下文决定使用的选取行为。
   */
  readonly auto: 'auto';
  /**
   * 阻止常规文本选取，不是内容保护或访问控制。
   */
  readonly none: 'none';
  /**
   * 允许文本选取。
   */
  readonly text: 'text';
}
export interface LeftValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface LetterSpacingValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface LightingColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface LineBreakValues extends CssWideValues {
  /**
   * line-break 的原生 anywhere 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  readonly anywhere: 'anywhere';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * line-break 的原生 loose 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  readonly loose: 'loose';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * line-break 的原生 strict 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  readonly strict: 'strict';
}
export interface LineClampValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface LineHeightValues extends CssWideValues {
  /**
   * 由浏览器和字体度量确定行高，没有固定的跨字体倍数。
   */
  readonly normal: 'normal';
}
export interface LineHeightStepValues extends CssWideValues {}
export interface ListStyleValues extends CssWideValues {
  /**
   * list-style 的原生 inside 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  readonly inside: 'inside';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * list-style 的原生 outside 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  readonly outside: 'outside';
}
export interface ListStyleImageValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ListStylePositionValues extends CssWideValues {
  /**
   * list-style-position 的原生 inside 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  readonly inside: 'inside';
  /**
   * list-style-position 的原生 outside 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  readonly outside: 'outside';
}
export interface ListStyleTypeValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MarginValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginBlockValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginBlockEndValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginBlockStartValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginBottomValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginInlineValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginInlineEndValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginInlineStartValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginLeftValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginRightValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginTopValues extends CssWideValues {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   */
  readonly auto: 'auto';
}
export interface MarginTrimValues extends CssWideValues {
  /**
   * margin-trim 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  readonly all: 'all';
  /**
   * margin-trim 的原生 in-flow 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  readonly 'in-flow': 'in-flow';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MarkerValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MarkerEndValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MarkerMidValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MarkerStartValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MaskValues extends CssWideValues {
  /**
   * mask 的原生 add 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly add: 'add';
  /**
   * mask 的原生 alpha 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly alpha: 'alpha';
  /**
   * mask 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'border-box': 'border-box';
  /**
   * mask 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly bottom: 'bottom';
  /**
   * mask 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly center: 'center';
  /**
   * mask 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'content-box': 'content-box';
  /**
   * mask 的原生 exclude 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly exclude: 'exclude';
  /**
   * mask 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'fill-box': 'fill-box';
  /**
   * mask 的原生 intersect 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly intersect: 'intersect';
  /**
   * mask 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly left: 'left';
  /**
   * mask 的原生 luminance 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly luminance: 'luminance';
  /**
   * mask 的原生 margin-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'margin-box': 'margin-box';
  /**
   * mask 的原生 match-source 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'match-source': 'match-source';
  /**
   * mask 的原生 no-clip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'no-clip': 'no-clip';
  /**
   * mask 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'no-repeat': 'no-repeat';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * mask 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'padding-box': 'padding-box';
  /**
   * mask 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly repeat: 'repeat';
  /**
   * mask 的原生 repeat-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'repeat-x': 'repeat-x';
  /**
   * mask 的原生 repeat-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'repeat-y': 'repeat-y';
  /**
   * mask 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly right: 'right';
  /**
   * mask 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly round: 'round';
  /**
   * mask 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly space: 'space';
  /**
   * mask 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * mask 的原生 subtract 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly subtract: 'subtract';
  /**
   * mask 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly top: 'top';
  /**
   * mask 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  readonly 'view-box': 'view-box';
}
export interface MaskBorderValues extends CssWideValues {
  /**
   * mask-border 的原生 alpha 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  readonly alpha: 'alpha';
  /**
   * mask-border 的原生 luminance 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  readonly luminance: 'luminance';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * mask-border 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  readonly repeat: 'repeat';
  /**
   * mask-border 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  readonly round: 'round';
  /**
   * mask-border 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  readonly space: 'space';
  /**
   * mask-border 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  readonly stretch: 'stretch';
}
export interface MaskBorderModeValues extends CssWideValues {
  /**
   * mask-border-mode 的原生 alpha 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  readonly alpha: 'alpha';
  /**
   * mask-border-mode 的原生 luminance 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  readonly luminance: 'luminance';
}
export interface MaskBorderOutsetValues extends CssWideValues {}
export interface MaskBorderRepeatValues extends CssWideValues {
  /**
   * mask-border-repeat 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  readonly repeat: 'repeat';
  /**
   * mask-border-repeat 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  readonly round: 'round';
  /**
   * mask-border-repeat 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  readonly space: 'space';
  /**
   * mask-border-repeat 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  readonly stretch: 'stretch';
}
export interface MaskBorderSliceValues extends CssWideValues {}
export interface MaskBorderSourceValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MaskBorderWidthValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MaskClipValues extends CssWideValues {
  /**
   * mask-clip 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly 'border-box': 'border-box';
  /**
   * mask-clip 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly 'content-box': 'content-box';
  /**
   * mask-clip 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly 'fill-box': 'fill-box';
  /**
   * mask-clip 的原生 no-clip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly 'no-clip': 'no-clip';
  /**
   * mask-clip 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly 'padding-box': 'padding-box';
  /**
   * mask-clip 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * mask-clip 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  readonly 'view-box': 'view-box';
}
export interface MaskCompositeValues extends CssWideValues {
  /**
   * mask-composite 的原生 add 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  readonly add: 'add';
  /**
   * mask-composite 的原生 exclude 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  readonly exclude: 'exclude';
  /**
   * mask-composite 的原生 intersect 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  readonly intersect: 'intersect';
  /**
   * mask-composite 的原生 subtract 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  readonly subtract: 'subtract';
}
export interface MaskImageValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MaskModeValues extends CssWideValues {
  /**
   * mask-mode 的原生 alpha 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  readonly alpha: 'alpha';
  /**
   * mask-mode 的原生 luminance 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  readonly luminance: 'luminance';
  /**
   * mask-mode 的原生 match-source 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  readonly 'match-source': 'match-source';
}
export interface MaskOriginValues extends CssWideValues {
  /**
   * mask-origin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly 'border-box': 'border-box';
  /**
   * mask-origin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly 'content-box': 'content-box';
  /**
   * mask-origin 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly 'fill-box': 'fill-box';
  /**
   * mask-origin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly 'padding-box': 'padding-box';
  /**
   * mask-origin 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * mask-origin 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  readonly 'view-box': 'view-box';
}
export interface MaskPositionValues extends CssWideValues {
  /**
   * mask-position 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  readonly bottom: 'bottom';
  /**
   * mask-position 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  readonly center: 'center';
  /**
   * mask-position 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  readonly left: 'left';
  /**
   * mask-position 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  readonly right: 'right';
  /**
   * mask-position 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  readonly top: 'top';
}
export interface MaskRepeatValues extends CssWideValues {
  /**
   * mask-repeat 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly 'no-repeat': 'no-repeat';
  /**
   * mask-repeat 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly repeat: 'repeat';
  /**
   * mask-repeat 的原生 repeat-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly 'repeat-x': 'repeat-x';
  /**
   * mask-repeat 的原生 repeat-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly 'repeat-y': 'repeat-y';
  /**
   * mask-repeat 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly round: 'round';
  /**
   * mask-repeat 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  readonly space: 'space';
}
export interface MaskSizeValues extends CssWideValues {
  /**
   * 依据图像内部尺寸、比例及另一维的设置确定尺寸。
   */
  readonly auto: 'auto';
  /**
   * 保持图像比例并使整张图像容纳于定位区域，可能留下空白。
   */
  readonly contain: 'contain';
  /**
   * 保持图像比例并覆盖整个定位区域，超出部分可能被裁剪。
   */
  readonly cover: 'cover';
}
export interface MaskTypeValues extends CssWideValues {
  /**
   * mask-type 的原生 alpha 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  readonly alpha: 'alpha';
  /**
   * mask-type 的原生 luminance 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  readonly luminance: 'luminance';
}
export interface MasonryAutoFlowValues extends CssWideValues {
  /**
   * masonry-auto-flow 的原生 definite-first 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  readonly 'definite-first': 'definite-first';
  /**
   * masonry-auto-flow 的原生 next 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  readonly next: 'next';
  /**
   * masonry-auto-flow 的原生 ordered 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  readonly ordered: 'ordered';
  /**
   * masonry-auto-flow 的原生 pack 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  readonly pack: 'pack';
}
export interface MathDepthValues extends CssWideValues {
  /**
   * math-depth 的原生 auto-add 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  readonly 'auto-add': 'auto-add';
}
export interface MathShiftValues extends CssWideValues {
  /**
   * math-shift 的原生 compact 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  readonly compact: 'compact';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface MathStyleValues extends CssWideValues {
  /**
   * math-style 的原生 compact 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  readonly compact: 'compact';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface MaxBlockSizeValues extends CssWideValues {
  /**
   * max-block-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * max-block-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * max-block-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  readonly '-webkit-fill-available': '-webkit-fill-available';
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸上限。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸上限；这不是把首选尺寸直接设为该值。
   */
  readonly 'max-content': 'max-content';
  /**
   * 以内容的最小内部尺寸作为尺寸上限；文本按允许的换行机会收缩，但更大的最小尺寸约束仍优先。
   */
  readonly 'min-content': 'min-content';
  /**
   * 不由该属性设置尺寸上限；其他尺寸、最小尺寸和布局规则仍然生效。
   */
  readonly none: 'none';
}
export interface MaxHeightValues extends CssWideValues {
  /**
   * max-height 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * max-height 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * max-height 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * max-height 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly '-webkit-fit-content': '-webkit-fit-content';
  /**
   * max-height 的原生 -webkit-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly '-webkit-max-content': '-webkit-max-content';
  /**
   * max-height 的原生 -webkit-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly '-webkit-min-content': '-webkit-min-content';
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸上限。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * max-height 的原生 intrinsic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  readonly intrinsic: 'intrinsic';
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸上限；这不是把首选尺寸直接设为该值。
   */
  readonly 'max-content': 'max-content';
  /**
   * 以内容的最小内部尺寸作为尺寸上限；文本按允许的换行机会收缩，但更大的最小尺寸约束仍优先。
   */
  readonly 'min-content': 'min-content';
  /**
   * 不由该属性设置尺寸上限；其他尺寸、最小尺寸和布局规则仍然生效。
   */
  readonly none: 'none';
}
export interface MaxInlineSizeValues extends CssWideValues {
  /**
   * max-inline-size 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * max-inline-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * max-inline-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * max-inline-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  readonly '-webkit-fill-available': '-webkit-fill-available';
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸上限。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸上限；这不是把首选尺寸直接设为该值。
   */
  readonly 'max-content': 'max-content';
  /**
   * 以内容的最小内部尺寸作为尺寸上限；文本按允许的换行机会收缩，但更大的最小尺寸约束仍优先。
   */
  readonly 'min-content': 'min-content';
  /**
   * 不由该属性设置尺寸上限；其他尺寸、最小尺寸和布局规则仍然生效。
   */
  readonly none: 'none';
}
export interface MaxLinesValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MaxWidthValues extends CssWideValues {
  /**
   * max-width 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * max-width 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * max-width 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * max-width 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly '-webkit-fit-content': '-webkit-fit-content';
  /**
   * max-width 的原生 -webkit-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly '-webkit-max-content': '-webkit-max-content';
  /**
   * max-width 的原生 -webkit-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly '-webkit-min-content': '-webkit-min-content';
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸上限。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * max-width 的原生 intrinsic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  readonly intrinsic: 'intrinsic';
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸上限；这不是把首选尺寸直接设为该值。
   */
  readonly 'max-content': 'max-content';
  /**
   * 以内容的最小内部尺寸作为尺寸上限；文本按允许的换行机会收缩，但更大的最小尺寸约束仍优先。
   */
  readonly 'min-content': 'min-content';
  /**
   * 不由该属性设置尺寸上限；其他尺寸、最小尺寸和布局规则仍然生效。
   */
  readonly none: 'none';
}
export interface MinBlockSizeValues extends CssWideValues {
  /**
   * min-block-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * min-block-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * min-block-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  readonly '-webkit-fill-available': '-webkit-fill-available';
  /**
   * 自动最小尺寸由布局模式决定；Flex/Grid 项目可能受内容的最小内部尺寸限制。
   */
  readonly auto: 'auto';
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸下限；不同于带显式参数的 fit-content(...)。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸下限；长文本可能使元素超出容器。
   */
  readonly 'max-content': 'max-content';
  /**
   * 以内容的最小内部尺寸作为尺寸下限；文字会利用允许的软换行机会。
   *
   * 区别：max-content 以不进行软换行的内部尺寸为下限，可能明显撑大容器。
   *
   * 适用场景：约束最小可读尺寸；需要 Flex 项目突破自动内容下限时通常应考虑明确的 0。
   */
  readonly 'min-content': 'min-content';
}
export interface MinHeightValues extends CssWideValues {
  /**
   * min-height 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * min-height 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * min-height 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * min-height 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly '-webkit-fit-content': '-webkit-fit-content';
  /**
   * min-height 的原生 -webkit-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly '-webkit-max-content': '-webkit-max-content';
  /**
   * min-height 的原生 -webkit-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly '-webkit-min-content': '-webkit-min-content';
  /**
   * 自动最小尺寸由布局模式决定；Flex/Grid 项目可能受内容的最小内部尺寸限制。
   */
  readonly auto: 'auto';
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸下限；不同于带显式参数的 fit-content(...)。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * min-height 的原生 intrinsic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  readonly intrinsic: 'intrinsic';
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸下限；长文本可能使元素超出容器。
   */
  readonly 'max-content': 'max-content';
  /**
   * 以内容的最小内部尺寸作为尺寸下限；文字会利用允许的软换行机会。
   *
   * 区别：max-content 以不进行软换行的内部尺寸为下限，可能明显撑大容器。
   *
   * 适用场景：约束最小可读尺寸；需要 Flex 项目突破自动内容下限时通常应考虑明确的 0。
   */
  readonly 'min-content': 'min-content';
}
export interface MinInlineSizeValues extends CssWideValues {
  /**
   * min-inline-size 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * min-inline-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * min-inline-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * min-inline-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  readonly '-webkit-fill-available': '-webkit-fill-available';
  /**
   * 自动最小尺寸由布局模式决定；Flex/Grid 项目可能受内容的最小内部尺寸限制。
   */
  readonly auto: 'auto';
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸下限；不同于带显式参数的 fit-content(...)。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸下限；长文本可能使元素超出容器。
   */
  readonly 'max-content': 'max-content';
  /**
   * 以内容的最小内部尺寸作为尺寸下限；文字会利用允许的软换行机会。
   *
   * 区别：max-content 以不进行软换行的内部尺寸为下限，可能明显撑大容器。
   *
   * 适用场景：约束最小可读尺寸；需要 Flex 项目突破自动内容下限时通常应考虑明确的 0。
   */
  readonly 'min-content': 'min-content';
}
export interface MinWidthValues extends CssWideValues {
  /**
   * min-width 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * min-width 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * min-width 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * min-width 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly '-webkit-fit-content': '-webkit-fit-content';
  /**
   * min-width 的原生 -webkit-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly '-webkit-max-content': '-webkit-max-content';
  /**
   * min-width 的原生 -webkit-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly '-webkit-min-content': '-webkit-min-content';
  /**
   * 自动最小尺寸由布局模式决定；Flex/Grid 项目可能受内容的最小内部尺寸限制。
   */
  readonly auto: 'auto';
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸下限；不同于带显式参数的 fit-content(...)。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * min-width 的原生 intrinsic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly intrinsic: 'intrinsic';
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸下限；长文本可能使元素超出容器。
   */
  readonly 'max-content': 'max-content';
  /**
   * 以内容的最小内部尺寸作为尺寸下限；文字会利用允许的软换行机会。
   *
   * 区别：max-content 以不进行软换行的内部尺寸为下限，可能明显撑大容器。
   *
   * 适用场景：约束最小可读尺寸；需要 Flex 项目突破自动内容下限时通常应考虑明确的 0。
   */
  readonly 'min-content': 'min-content';
  /**
   * min-width 的原生 min-intrinsic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  readonly 'min-intrinsic': 'min-intrinsic';
}
export interface MixBlendModeValues extends CssWideValues {
  /**
   * mix-blend-mode 的原生 color 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly color: 'color';
  /**
   * mix-blend-mode 的原生 color-burn 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly 'color-burn': 'color-burn';
  /**
   * mix-blend-mode 的原生 color-dodge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly 'color-dodge': 'color-dodge';
  /**
   * mix-blend-mode 的原生 darken 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly darken: 'darken';
  /**
   * mix-blend-mode 的原生 difference 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly difference: 'difference';
  /**
   * mix-blend-mode 的原生 exclusion 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly exclusion: 'exclusion';
  /**
   * mix-blend-mode 的原生 hard-light 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly 'hard-light': 'hard-light';
  /**
   * mix-blend-mode 的原生 hue 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly hue: 'hue';
  /**
   * mix-blend-mode 的原生 lighten 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly lighten: 'lighten';
  /**
   * mix-blend-mode 的原生 luminosity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly luminosity: 'luminosity';
  /**
   * mix-blend-mode 的原生 multiply 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly multiply: 'multiply';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * mix-blend-mode 的原生 overlay 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly overlay: 'overlay';
  /**
   * mix-blend-mode 的原生 plus-darker 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly 'plus-darker': 'plus-darker';
  /**
   * mix-blend-mode 的原生 plus-lighter 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly 'plus-lighter': 'plus-lighter';
  /**
   * mix-blend-mode 的原生 saturation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly saturation: 'saturation';
  /**
   * mix-blend-mode 的原生 screen 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly screen: 'screen';
  /**
   * mix-blend-mode 的原生 soft-light 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  readonly 'soft-light': 'soft-light';
}
export interface MotionValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * motion 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly 'border-box': 'border-box';
  /**
   * motion 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly bottom: 'bottom';
  /**
   * motion 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly center: 'center';
  /**
   * motion 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly 'content-box': 'content-box';
  /**
   * motion 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly 'fill-box': 'fill-box';
  /**
   * motion 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly left: 'left';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * motion 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly 'padding-box': 'padding-box';
  /**
   * motion 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly right: 'right';
  /**
   * motion 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * motion 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly top: 'top';
  /**
   * motion 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion
   */
  readonly 'view-box': 'view-box';
}
export interface MotionDistanceValues extends CssWideValues {}
export interface MotionPathValues extends CssWideValues {
  /**
   * motion-path 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly 'border-box': 'border-box';
  /**
   * motion-path 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly 'content-box': 'content-box';
  /**
   * motion-path 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly 'fill-box': 'fill-box';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * motion-path 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly 'padding-box': 'padding-box';
  /**
   * motion-path 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * motion-path 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-path
   */
  readonly 'view-box': 'view-box';
}
export interface MotionRotationValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * motion-rotation 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/motion-rotation
   */
  readonly reverse: 'reverse';
}
export interface MozAnimationValues extends CssWideValues {
  /**
   * -moz-animation 的原生 alternate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly alternate: 'alternate';
  /**
   * -moz-animation 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly 'alternate-reverse': 'alternate-reverse';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -moz-animation 的原生 backwards 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly backwards: 'backwards';
  /**
   * -moz-animation 的原生 both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly both: 'both';
  /**
   * -moz-animation 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly ease: 'ease';
  /**
   * -moz-animation 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -moz-animation 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -moz-animation 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -moz-animation 的原生 forwards 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly forwards: 'forwards';
  /**
   * -moz-animation 的原生 infinite 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly infinite: 'infinite';
  /**
   * -moz-animation 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly linear: 'linear';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -moz-animation 的原生 paused 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly paused: 'paused';
  /**
   * -moz-animation 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly reverse: 'reverse';
  /**
   * -moz-animation 的原生 running 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly running: 'running';
  /**
   * -moz-animation 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly 'step-end': 'step-end';
  /**
   * -moz-animation 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation
   */
  readonly 'step-start': 'step-start';
}
export interface MozAnimationDelayValues extends CssWideValues {}
export interface MozAnimationDirectionValues extends CssWideValues {
  /**
   * -moz-animation-direction 的原生 alternate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  readonly alternate: 'alternate';
  /**
   * -moz-animation-direction 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  readonly 'alternate-reverse': 'alternate-reverse';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -moz-animation-direction 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-direction
   */
  readonly reverse: 'reverse';
}
export interface MozAnimationDurationValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MozAnimationFillModeValues extends CssWideValues {
  /**
   * 延迟阶段应用最先生效关键帧的效果，具体帧取决于播放方向。
   */
  readonly backwards: 'backwards';
  /**
   * 同时应用 backwards 和 forwards 的区间外效果。
   */
  readonly both: 'both';
  /**
   * 播放结束后保留最后生效关键帧的效果；最后帧取决于方向和循环次数。
   */
  readonly forwards: 'forwards';
  /**
   * 动画有效区间之外不应用动画关键帧值。
   */
  readonly none: 'none';
}
export interface MozAnimationIterationCountValues extends CssWideValues {
  /**
   * -moz-animation-iteration-count 的原生 infinite 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-iteration-count
   */
  readonly infinite: 'infinite';
}
export interface MozAnimationNameValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MozAnimationPlayStateValues extends CssWideValues {
  /**
   * -moz-animation-play-state 的原生 paused 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-play-state
   */
  readonly paused: 'paused';
  /**
   * -moz-animation-play-state 的原生 running 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-play-state
   */
  readonly running: 'running';
}
export interface MozAnimationTimingFunctionValues extends CssWideValues {
  /**
   * -moz-animation-timing-function 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly ease: 'ease';
  /**
   * -moz-animation-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -moz-animation-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -moz-animation-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -moz-animation-timing-function 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly linear: 'linear';
  /**
   * -moz-animation-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly 'step-end': 'step-end';
  /**
   * -moz-animation-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-animation-timing-function
   */
  readonly 'step-start': 'step-start';
}
export interface MozAppearanceValues extends CssWideValues {
  /**
   * -moz-appearance 的原生 -moz-mac-unified-toolbar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-mac-unified-toolbar': '-moz-mac-unified-toolbar';
  /**
   * -moz-appearance 的原生 -moz-win-borderless-glass 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-win-borderless-glass': '-moz-win-borderless-glass';
  /**
   * -moz-appearance 的原生 -moz-win-browsertabbar-toolbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-win-browsertabbar-toolbox': '-moz-win-browsertabbar-toolbox';
  /**
   * -moz-appearance 的原生 -moz-win-communications-toolbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-win-communications-toolbox': '-moz-win-communications-toolbox';
  /**
   * -moz-appearance 的原生 -moz-win-communicationstext 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-win-communicationstext': '-moz-win-communicationstext';
  /**
   * -moz-appearance 的原生 -moz-win-exclude-glass 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-win-exclude-glass': '-moz-win-exclude-glass';
  /**
   * -moz-appearance 的原生 -moz-win-glass 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-win-glass': '-moz-win-glass';
  /**
   * -moz-appearance 的原生 -moz-win-media-toolbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-win-media-toolbox': '-moz-win-media-toolbox';
  /**
   * -moz-appearance 的原生 -moz-win-mediatext 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-win-mediatext': '-moz-win-mediatext';
  /**
   * -moz-appearance 的原生 -moz-window-button-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-button-box': '-moz-window-button-box';
  /**
   * -moz-appearance 的原生 -moz-window-button-box-maximized 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-button-box-maximized': '-moz-window-button-box-maximized';
  /**
   * -moz-appearance 的原生 -moz-window-button-close 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-button-close': '-moz-window-button-close';
  /**
   * -moz-appearance 的原生 -moz-window-button-maximize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-button-maximize': '-moz-window-button-maximize';
  /**
   * -moz-appearance 的原生 -moz-window-button-minimize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-button-minimize': '-moz-window-button-minimize';
  /**
   * -moz-appearance 的原生 -moz-window-button-restore 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-button-restore': '-moz-window-button-restore';
  /**
   * -moz-appearance 的原生 -moz-window-frame-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-frame-bottom': '-moz-window-frame-bottom';
  /**
   * -moz-appearance 的原生 -moz-window-frame-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-frame-left': '-moz-window-frame-left';
  /**
   * -moz-appearance 的原生 -moz-window-frame-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-frame-right': '-moz-window-frame-right';
  /**
   * -moz-appearance 的原生 -moz-window-titlebar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-titlebar': '-moz-window-titlebar';
  /**
   * -moz-appearance 的原生 -moz-window-titlebar-maximized 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly '-moz-window-titlebar-maximized': '-moz-window-titlebar-maximized';
  /**
   * -moz-appearance 的原生 button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly button: 'button';
  /**
   * -moz-appearance 的原生 button-arrow-down 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'button-arrow-down': 'button-arrow-down';
  /**
   * -moz-appearance 的原生 button-arrow-next 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'button-arrow-next': 'button-arrow-next';
  /**
   * -moz-appearance 的原生 button-arrow-previous 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'button-arrow-previous': 'button-arrow-previous';
  /**
   * -moz-appearance 的原生 button-arrow-up 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'button-arrow-up': 'button-arrow-up';
  /**
   * -moz-appearance 的原生 button-bevel 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'button-bevel': 'button-bevel';
  /**
   * -moz-appearance 的原生 button-focus 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'button-focus': 'button-focus';
  /**
   * -moz-appearance 的原生 caret 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly caret: 'caret';
  /**
   * -moz-appearance 的原生 checkbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly checkbox: 'checkbox';
  /**
   * -moz-appearance 的原生 checkbox-container 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'checkbox-container': 'checkbox-container';
  /**
   * -moz-appearance 的原生 checkbox-label 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'checkbox-label': 'checkbox-label';
  /**
   * -moz-appearance 的原生 checkmenuitem 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly checkmenuitem: 'checkmenuitem';
  /**
   * -moz-appearance 的原生 dualbutton 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly dualbutton: 'dualbutton';
  /**
   * -moz-appearance 的原生 groupbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly groupbox: 'groupbox';
  /**
   * -moz-appearance 的原生 listbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly listbox: 'listbox';
  /**
   * -moz-appearance 的原生 listitem 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly listitem: 'listitem';
  /**
   * -moz-appearance 的原生 menuarrow 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menuarrow: 'menuarrow';
  /**
   * -moz-appearance 的原生 menubar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menubar: 'menubar';
  /**
   * -moz-appearance 的原生 menucheckbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menucheckbox: 'menucheckbox';
  /**
   * -moz-appearance 的原生 menuimage 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menuimage: 'menuimage';
  /**
   * -moz-appearance 的原生 menuitem 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menuitem: 'menuitem';
  /**
   * -moz-appearance 的原生 menuitemtext 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menuitemtext: 'menuitemtext';
  /**
   * -moz-appearance 的原生 menulist 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menulist: 'menulist';
  /**
   * -moz-appearance 的原生 menulist-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'menulist-button': 'menulist-button';
  /**
   * -moz-appearance 的原生 menulist-text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'menulist-text': 'menulist-text';
  /**
   * -moz-appearance 的原生 menulist-textfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'menulist-textfield': 'menulist-textfield';
  /**
   * -moz-appearance 的原生 menupopup 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menupopup: 'menupopup';
  /**
   * -moz-appearance 的原生 menuradio 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menuradio: 'menuradio';
  /**
   * -moz-appearance 的原生 menuseparator 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly menuseparator: 'menuseparator';
  /**
   * -moz-appearance 的原生 meterbar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly meterbar: 'meterbar';
  /**
   * -moz-appearance 的原生 meterchunk 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly meterchunk: 'meterchunk';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -moz-appearance 的原生 progressbar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly progressbar: 'progressbar';
  /**
   * -moz-appearance 的原生 progressbar-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'progressbar-vertical': 'progressbar-vertical';
  /**
   * -moz-appearance 的原生 progresschunk 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly progresschunk: 'progresschunk';
  /**
   * -moz-appearance 的原生 progresschunk-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'progresschunk-vertical': 'progresschunk-vertical';
  /**
   * -moz-appearance 的原生 radio 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly radio: 'radio';
  /**
   * -moz-appearance 的原生 radio-container 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'radio-container': 'radio-container';
  /**
   * -moz-appearance 的原生 radio-label 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'radio-label': 'radio-label';
  /**
   * -moz-appearance 的原生 radiomenuitem 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly radiomenuitem: 'radiomenuitem';
  /**
   * -moz-appearance 的原生 range 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly range: 'range';
  /**
   * -moz-appearance 的原生 range-thumb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'range-thumb': 'range-thumb';
  /**
   * -moz-appearance 的原生 resizer 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly resizer: 'resizer';
  /**
   * -moz-appearance 的原生 resizerpanel 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly resizerpanel: 'resizerpanel';
  /**
   * -moz-appearance 的原生 scale-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scale-horizontal': 'scale-horizontal';
  /**
   * -moz-appearance 的原生 scale-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scale-vertical': 'scale-vertical';
  /**
   * -moz-appearance 的原生 scalethumb-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scalethumb-horizontal': 'scalethumb-horizontal';
  /**
   * -moz-appearance 的原生 scalethumb-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scalethumb-vertical': 'scalethumb-vertical';
  /**
   * -moz-appearance 的原生 scalethumbend 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scalethumbend: 'scalethumbend';
  /**
   * -moz-appearance 的原生 scalethumbstart 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scalethumbstart: 'scalethumbstart';
  /**
   * -moz-appearance 的原生 scalethumbtick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly scalethumbtick: 'scalethumbtick';
  /**
   * -moz-appearance 的原生 scrollbarbutton-down 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scrollbarbutton-down': 'scrollbarbutton-down';
  /**
   * -moz-appearance 的原生 scrollbarbutton-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scrollbarbutton-left': 'scrollbarbutton-left';
  /**
   * -moz-appearance 的原生 scrollbarbutton-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scrollbarbutton-right': 'scrollbarbutton-right';
  /**
   * -moz-appearance 的原生 scrollbarbutton-up 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scrollbarbutton-up': 'scrollbarbutton-up';
  /**
   * -moz-appearance 的原生 scrollbarthumb-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scrollbarthumb-horizontal': 'scrollbarthumb-horizontal';
  /**
   * -moz-appearance 的原生 scrollbarthumb-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scrollbarthumb-vertical': 'scrollbarthumb-vertical';
  /**
   * -moz-appearance 的原生 scrollbartrack-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scrollbartrack-horizontal': 'scrollbartrack-horizontal';
  /**
   * -moz-appearance 的原生 scrollbartrack-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'scrollbartrack-vertical': 'scrollbartrack-vertical';
  /**
   * -moz-appearance 的原生 searchfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly searchfield: 'searchfield';
  /**
   * -moz-appearance 的原生 separator 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly separator: 'separator';
  /**
   * -moz-appearance 的原生 sheet 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly sheet: 'sheet';
  /**
   * -moz-appearance 的原生 spinner 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly spinner: 'spinner';
  /**
   * -moz-appearance 的原生 spinner-downbutton 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'spinner-downbutton': 'spinner-downbutton';
  /**
   * -moz-appearance 的原生 spinner-textfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'spinner-textfield': 'spinner-textfield';
  /**
   * -moz-appearance 的原生 spinner-upbutton 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'spinner-upbutton': 'spinner-upbutton';
  /**
   * -moz-appearance 的原生 splitter 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly splitter: 'splitter';
  /**
   * -moz-appearance 的原生 statusbar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly statusbar: 'statusbar';
  /**
   * -moz-appearance 的原生 statusbarpanel 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly statusbarpanel: 'statusbarpanel';
  /**
   * -moz-appearance 的原生 tab 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly tab: 'tab';
  /**
   * -moz-appearance 的原生 tab-scroll-arrow-back 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'tab-scroll-arrow-back': 'tab-scroll-arrow-back';
  /**
   * -moz-appearance 的原生 tab-scroll-arrow-forward 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'tab-scroll-arrow-forward': 'tab-scroll-arrow-forward';
  /**
   * -moz-appearance 的原生 tabpanel 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly tabpanel: 'tabpanel';
  /**
   * -moz-appearance 的原生 tabpanels 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly tabpanels: 'tabpanels';
  /**
   * -moz-appearance 的原生 textfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly textfield: 'textfield';
  /**
   * -moz-appearance 的原生 textfield-multiline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'textfield-multiline': 'textfield-multiline';
  /**
   * -moz-appearance 的原生 toolbar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly toolbar: 'toolbar';
  /**
   * -moz-appearance 的原生 toolbarbutton 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly toolbarbutton: 'toolbarbutton';
  /**
   * -moz-appearance 的原生 toolbarbutton-dropdown 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly 'toolbarbutton-dropdown': 'toolbarbutton-dropdown';
  /**
   * -moz-appearance 的原生 toolbargripper 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly toolbargripper: 'toolbargripper';
  /**
   * -moz-appearance 的原生 toolbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly toolbox: 'toolbox';
  /**
   * -moz-appearance 的原生 tooltip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly tooltip: 'tooltip';
  /**
   * -moz-appearance 的原生 treeheader 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly treeheader: 'treeheader';
  /**
   * -moz-appearance 的原生 treeheadercell 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly treeheadercell: 'treeheadercell';
  /**
   * -moz-appearance 的原生 treeheadersortarrow 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly treeheadersortarrow: 'treeheadersortarrow';
  /**
   * -moz-appearance 的原生 treeitem 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly treeitem: 'treeitem';
  /**
   * -moz-appearance 的原生 treeline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly treeline: 'treeline';
  /**
   * -moz-appearance 的原生 treetwisty 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly treetwisty: 'treetwisty';
  /**
   * -moz-appearance 的原生 treetwistyopen 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly treetwistyopen: 'treetwistyopen';
  /**
   * -moz-appearance 的原生 treeview 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-appearance
   */
  readonly treeview: 'treeview';
}
export interface MozBackfaceVisibilityValues extends CssWideValues {
  /**
   * -moz-backface-visibility 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-backface-visibility
   */
  readonly hidden: 'hidden';
  /**
   * -moz-backface-visibility 的原生 visible 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-backface-visibility
   */
  readonly visible: 'visible';
}
export interface MozBackgroundClipValues extends CssWideValues {
  /**
   * -moz-background-clip 的原生 border-area 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  readonly 'border-area': 'border-area';
  /**
   * -moz-background-clip 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  readonly 'border-box': 'border-box';
  /**
   * -moz-background-clip 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  readonly 'content-box': 'content-box';
  /**
   * -moz-background-clip 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-clip
   */
  readonly 'padding-box': 'padding-box';
  /**
   * 把背景裁剪到文字字形；显示背景文字效果通常还需要透明的文字颜色。
   */
  readonly text: 'text';
}
export interface MozBackgroundOriginValues extends CssWideValues {
  /**
   * -moz-background-origin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  readonly 'border-box': 'border-box';
  /**
   * -moz-background-origin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  readonly 'content-box': 'content-box';
  /**
   * -moz-background-origin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-background-origin
   */
  readonly 'padding-box': 'padding-box';
}
export interface MozBackgroundSizeValues extends CssWideValues {
  /**
   * 依据图像内部尺寸、比例及另一维的设置确定尺寸。
   */
  readonly auto: 'auto';
  /**
   * 保持图像比例并使整张图像容纳于定位区域，可能留下空白。
   */
  readonly contain: 'contain';
  /**
   * 保持图像比例并覆盖整个定位区域，超出部分可能被裁剪。
   */
  readonly cover: 'cover';
}
export interface MozBindingValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MozBorderBottomColorsValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozBorderEndColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozBorderEndStyleValues extends CssWideValues {
  /**
   * -moz-border-end-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly dashed: 'dashed';
  /**
   * -moz-border-end-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly dotted: 'dotted';
  /**
   * -moz-border-end-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly double: 'double';
  /**
   * -moz-border-end-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly groove: 'groove';
  /**
   * -moz-border-end-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly hidden: 'hidden';
  /**
   * -moz-border-end-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -moz-border-end-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly outset: 'outset';
  /**
   * -moz-border-end-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly ridge: 'ridge';
  /**
   * -moz-border-end-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-style
   */
  readonly solid: 'solid';
}
export interface MozBorderEndWidthValues extends CssWideValues {
  /**
   * -moz-border-end-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  readonly medium: 'medium';
  /**
   * -moz-border-end-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  readonly thick: 'thick';
  /**
   * -moz-border-end-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-end-width
   */
  readonly thin: 'thin';
}
export interface MozBorderImageValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -moz-border-image 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  readonly repeat: 'repeat';
  /**
   * -moz-border-image 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  readonly round: 'round';
  /**
   * -moz-border-image 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  readonly space: 'space';
  /**
   * -moz-border-image 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-image
   */
  readonly stretch: 'stretch';
}
export interface MozBorderLeftColorsValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozBorderRadiusValues extends CssWideValues {}
export interface MozBorderRadiusBottomleftValues extends CssWideValues {}
export interface MozBorderRadiusBottomrightValues extends CssWideValues {}
export interface MozBorderRadiusTopleftValues extends CssWideValues {}
export interface MozBorderRadiusToprightValues extends CssWideValues {}
export interface MozBorderRightColorsValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozBorderStartColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozBorderStartStyleValues extends CssWideValues {
  /**
   * -moz-border-start-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly dashed: 'dashed';
  /**
   * -moz-border-start-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly dotted: 'dotted';
  /**
   * -moz-border-start-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly double: 'double';
  /**
   * -moz-border-start-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly groove: 'groove';
  /**
   * -moz-border-start-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly hidden: 'hidden';
  /**
   * -moz-border-start-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -moz-border-start-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly outset: 'outset';
  /**
   * -moz-border-start-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly ridge: 'ridge';
  /**
   * -moz-border-start-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-border-start-style
   */
  readonly solid: 'solid';
}
export interface MozBorderTopColorsValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozBoxAlignValues extends CssWideValues {
  /**
   * -moz-box-align 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-align
   */
  readonly baseline: 'baseline';
  /**
   * -moz-box-align 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-align
   */
  readonly center: 'center';
  /**
   * -moz-box-align 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-align
   */
  readonly end: 'end';
  /**
   * -moz-box-align 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-align
   */
  readonly start: 'start';
  /**
   * -moz-box-align 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-align
   */
  readonly stretch: 'stretch';
}
export interface MozBoxDirectionValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -moz-box-direction 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-direction
   */
  readonly reverse: 'reverse';
}
export interface MozBoxFlexValues extends CssWideValues {}
export interface MozBoxOrdinalGroupValues extends CssWideValues {}
export interface MozBoxOrientValues extends CssWideValues {
  /**
   * -moz-box-orient 的原生 block-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  readonly 'block-axis': 'block-axis';
  /**
   * -moz-box-orient 的原生 horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  readonly horizontal: 'horizontal';
  /**
   * -moz-box-orient 的原生 inline-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  readonly 'inline-axis': 'inline-axis';
  /**
   * -moz-box-orient 的原生 vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-orient
   */
  readonly vertical: 'vertical';
}
export interface MozBoxPackValues extends CssWideValues {
  /**
   * -moz-box-pack 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-pack
   */
  readonly center: 'center';
  /**
   * -moz-box-pack 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-pack
   */
  readonly end: 'end';
  /**
   * -moz-box-pack 的原生 justify 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-pack
   */
  readonly justify: 'justify';
  /**
   * -moz-box-pack 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-box-pack
   */
  readonly start: 'start';
}
export interface MozBoxShadowValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MozBoxSizingValues extends CssWideValues {
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
   * css({ boxSizing: "border-box", width: "20rem", padding: "1rem" })
   */
  readonly 'border-box': 'border-box';
  /**
   * 指定尺寸仅计算内容盒，内边距和边框额外增加外部尺寸。
   *
   * 适用场景：希望明确指定纯内容区尺寸时。
   *
   * @example
   * css({ boxSizing: "content-box", width: "100px", padding: "10px" })
   */
  readonly 'content-box': 'content-box';
}
export interface MozColumnCountValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MozColumnFillValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -moz-column-fill 的原生 balance 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-fill
   */
  readonly balance: 'balance';
}
export interface MozColumnRuleValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozColumnRuleColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozColumnRuleStyleValues extends CssWideValues {
  /**
   * -moz-column-rule-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly dashed: 'dashed';
  /**
   * -moz-column-rule-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly dotted: 'dotted';
  /**
   * -moz-column-rule-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly double: 'double';
  /**
   * -moz-column-rule-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly groove: 'groove';
  /**
   * -moz-column-rule-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly hidden: 'hidden';
  /**
   * -moz-column-rule-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -moz-column-rule-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly outset: 'outset';
  /**
   * -moz-column-rule-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly ridge: 'ridge';
  /**
   * -moz-column-rule-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-style
   */
  readonly solid: 'solid';
}
export interface MozColumnRuleWidthValues extends CssWideValues {
  /**
   * -moz-column-rule-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  readonly medium: 'medium';
  /**
   * -moz-column-rule-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  readonly thick: 'thick';
  /**
   * -moz-column-rule-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-column-rule-width
   */
  readonly thin: 'thin';
}
export interface MozColumnsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MozColumnWidthValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MozContextPropertiesValues extends CssWideValues {
  /**
   * -moz-context-properties 的原生 fill 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  readonly fill: 'fill';
  /**
   * -moz-context-properties 的原生 fill-opacity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  readonly 'fill-opacity': 'fill-opacity';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -moz-context-properties 的原生 stroke 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  readonly stroke: 'stroke';
  /**
   * -moz-context-properties 的原生 stroke-opacity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-context-properties
   */
  readonly 'stroke-opacity': 'stroke-opacity';
}
export interface MozFloatEdgeValues extends CssWideValues {
  /**
   * -moz-float-edge 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  readonly 'border-box': 'border-box';
  /**
   * -moz-float-edge 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  readonly 'content-box': 'content-box';
  /**
   * -moz-float-edge 的原生 margin-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  readonly 'margin-box': 'margin-box';
  /**
   * -moz-float-edge 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-float-edge
   */
  readonly 'padding-box': 'padding-box';
}
export interface MozFontFeatureSettingsValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface MozFontLanguageOverrideValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface MozForceBrokenImageIconValues extends CssWideValues {}
export interface MozHyphensValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -moz-hyphens 的原生 manual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-hyphens
   */
  readonly manual: 'manual';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MozMarginEndValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MozMarginStartValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MozOpacityValues extends CssWideValues {}
export interface MozOrientValues extends CssWideValues {
  /**
   * -moz-orient 的原生 block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  readonly block: 'block';
  /**
   * -moz-orient 的原生 horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  readonly horizontal: 'horizontal';
  /**
   * -moz-orient 的原生 inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  readonly inline: 'inline';
  /**
   * -moz-orient 的原生 vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-orient
   */
  readonly vertical: 'vertical';
}
export interface MozOsxFontSmoothingValues extends CssWideValues {
  /**
   * -moz-osx-font-smoothing 的原生 always 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly always: 'always';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -moz-osx-font-smoothing 的原生 large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly large: 'large';
  /**
   * -moz-osx-font-smoothing 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly medium: 'medium';
  /**
   * -moz-osx-font-smoothing 的原生 never 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly never: 'never';
  /**
   * -moz-osx-font-smoothing 的原生 small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly small: 'small';
  /**
   * -moz-osx-font-smoothing 的原生 x-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly 'x-large': 'x-large';
  /**
   * -moz-osx-font-smoothing 的原生 x-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly 'x-small': 'x-small';
  /**
   * -moz-osx-font-smoothing 的原生 xx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly 'xx-large': 'xx-large';
  /**
   * -moz-osx-font-smoothing 的原生 xx-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly 'xx-small': 'xx-small';
  /**
   * -moz-osx-font-smoothing 的原生 xxx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-osx-font-smoothing
   */
  readonly 'xxx-large': 'xxx-large';
}
export interface MozOutlineValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozOutlineColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozOutlineRadiusValues extends CssWideValues {}
export interface MozOutlineRadiusBottomleftValues extends CssWideValues {}
export interface MozOutlineRadiusBottomrightValues extends CssWideValues {}
export interface MozOutlineRadiusTopleftValues extends CssWideValues {}
export interface MozOutlineRadiusToprightValues extends CssWideValues {}
export interface MozOutlineStyleValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -moz-outline-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  readonly dashed: 'dashed';
  /**
   * -moz-outline-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  readonly dotted: 'dotted';
  /**
   * -moz-outline-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  readonly double: 'double';
  /**
   * -moz-outline-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  readonly groove: 'groove';
  /**
   * -moz-outline-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -moz-outline-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  readonly outset: 'outset';
  /**
   * -moz-outline-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  readonly ridge: 'ridge';
  /**
   * -moz-outline-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-style
   */
  readonly solid: 'solid';
}
export interface MozOutlineWidthValues extends CssWideValues {
  /**
   * -moz-outline-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-width
   */
  readonly medium: 'medium';
  /**
   * -moz-outline-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-width
   */
  readonly thick: 'thick';
  /**
   * -moz-outline-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-outline-width
   */
  readonly thin: 'thin';
}
export interface MozPaddingEndValues extends CssWideValues {}
export interface MozPaddingStartValues extends CssWideValues {}
export interface MozPerspectiveValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MozPerspectiveOriginValues extends CssWideValues {
  /**
   * -moz-perspective-origin 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  readonly bottom: 'bottom';
  /**
   * -moz-perspective-origin 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  readonly center: 'center';
  /**
   * -moz-perspective-origin 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  readonly left: 'left';
  /**
   * -moz-perspective-origin 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  readonly right: 'right';
  /**
   * -moz-perspective-origin 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-perspective-origin
   */
  readonly top: 'top';
}
export interface MozStackSizingValues extends CssWideValues {
  /**
   * -moz-stack-sizing 的原生 ignore 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  readonly ignore: 'ignore';
  /**
   * -moz-stack-sizing 的原生 stretch-to-fit 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-stack-sizing
   */
  readonly 'stretch-to-fit': 'stretch-to-fit';
}
export interface MozTabSizeValues extends CssWideValues {}
export interface MozTextAlignLastValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -moz-text-align-last 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  readonly center: 'center';
  /**
   * -moz-text-align-last 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  readonly end: 'end';
  /**
   * -moz-text-align-last 的原生 justify 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  readonly justify: 'justify';
  /**
   * -moz-text-align-last 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  readonly left: 'left';
  /**
   * -moz-text-align-last 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  readonly right: 'right';
  /**
   * -moz-text-align-last 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-align-last
   */
  readonly start: 'start';
}
export interface MozTextBlinkValues extends CssWideValues {
  /**
   * -moz-text-blink 的原生 blink 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-blink
   */
  readonly blink: 'blink';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MozTextDecorationColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MozTextDecorationLineValues extends CssWideValues {
  /**
   * -moz-text-decoration-line 的原生 blink 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  readonly blink: 'blink';
  /**
   * -moz-text-decoration-line 的原生 grammar-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  readonly 'grammar-error': 'grammar-error';
  /**
   * -moz-text-decoration-line 的原生 line-through 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  readonly 'line-through': 'line-through';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -moz-text-decoration-line 的原生 overline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  readonly overline: 'overline';
  /**
   * -moz-text-decoration-line 的原生 spelling-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  readonly 'spelling-error': 'spelling-error';
  /**
   * -moz-text-decoration-line 的原生 underline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-line
   */
  readonly underline: 'underline';
}
export interface MozTextDecorationStyleValues extends CssWideValues {
  /**
   * -moz-text-decoration-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-style
   */
  readonly dashed: 'dashed';
  /**
   * -moz-text-decoration-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-style
   */
  readonly dotted: 'dotted';
  /**
   * -moz-text-decoration-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-style
   */
  readonly double: 'double';
  /**
   * -moz-text-decoration-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-style
   */
  readonly solid: 'solid';
  /**
   * -moz-text-decoration-style 的原生 wavy 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-text-decoration-style
   */
  readonly wavy: 'wavy';
}
export interface MozTextSizeAdjustValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MozTransformValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MozTransformOriginValues extends CssWideValues {
  /**
   * -moz-transform-origin 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  readonly bottom: 'bottom';
  /**
   * -moz-transform-origin 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  readonly center: 'center';
  /**
   * -moz-transform-origin 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  readonly left: 'left';
  /**
   * -moz-transform-origin 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  readonly right: 'right';
  /**
   * -moz-transform-origin 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transform-origin
   */
  readonly top: 'top';
}
export interface MozTransformStyleValues extends CssWideValues {
  /**
   * 将子元素的三维位置展平到当前元素的平面；这是初始行为，并非移除子元素自身的 transform。
   */
  readonly flat: 'flat';
  /**
   * 让子元素继续处于三维空间，适合多层三维场景。
   *
   * 区别：flat 会将后代展平到当前元素的平面；preserve-3d 本身不提供透视效果。
   *
   * 该属性不继承，需要在参与三维层级的中间元素上设置；opacity 小于 1、非 none 的 filter 等分组效果仍可能强制展平。
   *
   * @example
   * css({ transformStyle: "preserve-3d" })
   */
  readonly 'preserve-3d': 'preserve-3d';
}
export interface MozTransitionValues extends CssWideValues {
  /**
   * -moz-transition 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly all: 'all';
  /**
   * -moz-transition 的原生 allow-discrete 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly 'allow-discrete': 'allow-discrete';
  /**
   * -moz-transition 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly ease: 'ease';
  /**
   * -moz-transition 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -moz-transition 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -moz-transition 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -moz-transition 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly linear: 'linear';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -moz-transition 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly 'step-end': 'step-end';
  /**
   * -moz-transition 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition
   */
  readonly 'step-start': 'step-start';
}
export interface MozTransitionDelayValues extends CssWideValues {}
export interface MozTransitionDurationValues extends CssWideValues {}
export interface MozTransitionPropertyValues extends CssWideValues {
  /**
   * -moz-transition-property 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-property
   */
  readonly all: 'all';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MozTransitionTimingFunctionValues extends CssWideValues {
  /**
   * -moz-transition-timing-function 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly ease: 'ease';
  /**
   * -moz-transition-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -moz-transition-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -moz-transition-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -moz-transition-timing-function 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly linear: 'linear';
  /**
   * -moz-transition-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly 'step-end': 'step-end';
  /**
   * -moz-transition-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-transition-timing-function
   */
  readonly 'step-start': 'step-start';
}
export interface MozUserFocusValues extends CssWideValues {
  /**
   * -moz-user-focus 的原生 ignore 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly ignore: 'ignore';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -moz-user-focus 的原生 select-after 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly 'select-after': 'select-after';
  /**
   * -moz-user-focus 的原生 select-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly 'select-all': 'select-all';
  /**
   * -moz-user-focus 的原生 select-before 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly 'select-before': 'select-before';
  /**
   * -moz-user-focus 的原生 select-menu 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly 'select-menu': 'select-menu';
  /**
   * -moz-user-focus 的原生 select-same 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus
   */
  readonly 'select-same': 'select-same';
}
export interface MozUserInputValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -moz-user-input 的原生 disabled 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-input
   */
  readonly disabled: 'disabled';
  /**
   * -moz-user-input 的原生 enabled 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-input
   */
  readonly enabled: 'enabled';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MozUserModifyValues extends CssWideValues {
  /**
   * -moz-user-modify 的原生 read-only 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  readonly 'read-only': 'read-only';
  /**
   * -moz-user-modify 的原生 read-write 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  readonly 'read-write': 'read-write';
  /**
   * -moz-user-modify 的原生 write-only 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-modify
   */
  readonly 'write-only': 'write-only';
}
export interface MozUserSelectValues extends CssWideValues {
  /**
   * -moz-user-select 的原生 -moz-none 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-select
   */
  readonly '-moz-none': '-moz-none';
  /**
   * 将元素内容作为整体选取单元。
   */
  readonly all: 'all';
  /**
   * 由父级与元素上下文决定使用的选取行为。
   */
  readonly auto: 'auto';
  /**
   * 阻止常规文本选取，不是内容保护或访问控制。
   */
  readonly none: 'none';
  /**
   * 允许文本选取。
   */
  readonly text: 'text';
}
export interface MozWindowDraggingValues extends CssWideValues {
  /**
   * -moz-window-dragging 的原生 drag 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  readonly drag: 'drag';
  /**
   * -moz-window-dragging 的原生 no-drag 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-dragging
   */
  readonly 'no-drag': 'no-drag';
}
export interface MozWindowShadowValues extends CssWideValues {
  /**
   * -moz-window-shadow 的原生 default 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  readonly default: 'default';
  /**
   * -moz-window-shadow 的原生 menu 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  readonly menu: 'menu';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -moz-window-shadow 的原生 sheet 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  readonly sheet: 'sheet';
  /**
   * -moz-window-shadow 的原生 tooltip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-window-shadow
   */
  readonly tooltip: 'tooltip';
}
export interface MsAcceleratorValues extends CssWideValues {
  /**
   * -ms-accelerator 的原生 false 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-accelerator
   */
  readonly false: 'false';
  /**
   * -ms-accelerator 的原生 true 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-accelerator
   */
  readonly true: 'true';
}
export interface MsBlockProgressionValues extends CssWideValues {
  /**
   * -ms-block-progression 的原生 bt 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  readonly bt: 'bt';
  /**
   * -ms-block-progression 的原生 lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  readonly lr: 'lr';
  /**
   * -ms-block-progression 的原生 rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  readonly rl: 'rl';
  /**
   * -ms-block-progression 的原生 tb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-block-progression
   */
  readonly tb: 'tb';
}
export interface MsContentZoomChainingValues extends CssWideValues {
  /**
   * -ms-content-zoom-chaining 的原生 chained 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-chaining
   */
  readonly chained: 'chained';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsContentZoomingValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -ms-content-zooming 的原生 zoom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zooming
   */
  readonly zoom: 'zoom';
}
export interface MsContentZoomLimitValues extends CssWideValues {}
export interface MsContentZoomLimitMaxValues extends CssWideValues {}
export interface MsContentZoomLimitMinValues extends CssWideValues {}
export interface MsContentZoomSnapValues extends CssWideValues {
  /**
   * -ms-content-zoom-snap 的原生 mandatory 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  readonly mandatory: 'mandatory';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -ms-content-zoom-snap 的原生 proximity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap
   */
  readonly proximity: 'proximity';
}
export interface MsContentZoomSnapPointsValues extends CssWideValues {}
export interface MsContentZoomSnapTypeValues extends CssWideValues {
  /**
   * -ms-content-zoom-snap-type 的原生 mandatory 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-type
   */
  readonly mandatory: 'mandatory';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -ms-content-zoom-snap-type 的原生 proximity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-content-zoom-snap-type
   */
  readonly proximity: 'proximity';
}
export interface MsFilterValues extends CssWideValues {}
export interface MsFlexValues extends CssWideValues {
  /**
   * 等价于 1 1 auto：可增长、可收缩，基础尺寸由主尺寸属性或内容决定。
   *
   * 区别：1 1 0% 以零百分比为基础分配，auto 的基础尺寸通常受内容或主尺寸属性影响。
   *
   * 适用场景：让项目以自身尺寸为基础参与剩余空间分配。
   *
   * 最终比例还受最小/最大尺寸约束，不保证所有项目等宽。
   *
   * @example
   * css({ flex: "auto" })
   */
  readonly auto: 'auto';
  /**
   * -ms-flex 的原生 content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  readonly content: 'content';
  /**
   * -ms-flex 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  readonly 'fit-content': 'fit-content';
  /**
   * -ms-flex 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  readonly 'max-content': 'max-content';
  /**
   * -ms-flex 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-flex
   */
  readonly 'min-content': 'min-content';
  /**
   * 等价于 0 0 auto：不增长也不收缩，保留自动基础尺寸。
   *
   * 区别：auto 会增长和收缩；none 两者都不参与。
   *
   * 适用场景：防止工具栏中的图标或固定控件被压缩。
   *
   * @example
   * css({ flex: "none" })
   */
  readonly none: 'none';
}
export interface MsFlexDirectionValues extends CssWideValues {
  /**
   * 主轴沿块方向排列；水平书写时通常从上到下。
   */
  readonly column: 'column';
  /**
   * 反转块方向的视觉排列，不改变 DOM 顺序。
   */
  readonly 'column-reverse': 'column-reverse';
  /**
   * 主轴沿行内方向排列；不一定是从左到右，取决于书写方向。
   */
  readonly row: 'row';
  /**
   * 反转行内方向的视觉排列，不改变 DOM 顺序。
   */
  readonly 'row-reverse': 'row-reverse';
}
export interface MsFlexPositiveValues extends CssWideValues {}
export interface MsFlowFromValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsFlowIntoValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsGridColumnsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -ms-grid-columns 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  readonly 'max-content': 'max-content';
  /**
   * -ms-grid-columns 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-columns
   */
  readonly 'min-content': 'min-content';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsGridRowsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -ms-grid-rows 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  readonly 'max-content': 'max-content';
  /**
   * -ms-grid-rows 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-grid-rows
   */
  readonly 'min-content': 'min-content';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsHighContrastAdjustValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsHyphenateLimitCharsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MsHyphenateLimitLinesValues extends CssWideValues {
  /**
   * -ms-hyphenate-limit-lines 的原生 no-limit 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphenate-limit-lines
   */
  readonly 'no-limit': 'no-limit';
}
export interface MsHyphenateLimitZoneValues extends CssWideValues {}
export interface MsHyphensValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -ms-hyphens 的原生 manual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-hyphens
   */
  readonly manual: 'manual';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsImeAlignValues extends CssWideValues {
  /**
   * -ms-ime-align 的原生 after 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-align
   */
  readonly after: 'after';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MsImeModeValues extends CssWideValues {
  /**
   * -ms-ime-mode 的原生 active 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-mode
   */
  readonly active: 'active';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -ms-ime-mode 的原生 disabled 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-mode
   */
  readonly disabled: 'disabled';
  /**
   * -ms-ime-mode 的原生 inactive 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-ime-mode
   */
  readonly inactive: 'inactive';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface MsLineBreakValues extends CssWideValues {
  /**
   * -ms-line-break 的原生 anywhere 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  readonly anywhere: 'anywhere';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -ms-line-break 的原生 loose 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  readonly loose: 'loose';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -ms-line-break 的原生 strict 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-line-break
   */
  readonly strict: 'strict';
}
export interface MsOrderValues extends CssWideValues {}
export interface MsOverflowStyleValues extends CssWideValues {
  /**
   * -ms-overflow-style 的原生 -ms-autohiding-scrollbar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  readonly '-ms-autohiding-scrollbar': '-ms-autohiding-scrollbar';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -ms-overflow-style 的原生 scrollbar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-style
   */
  readonly scrollbar: 'scrollbar';
}
export interface MsOverflowXValues extends CssWideValues {
  /**
   * -ms-overflow-x 的原生 -moz-hidden-unscrollable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-x
   */
  readonly '-moz-hidden-unscrollable': '-moz-hidden-unscrollable';
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * @example
   * css({ $property: "auto" })
   */
  readonly auto: 'auto';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * @example
   * css({ $property: "clip" })
   */
  readonly clip: 'clip';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * @example
   * css({ $property: "hidden" })
   */
  readonly hidden: 'hidden';
  /**
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   */
  readonly overlay: 'overlay';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   */
  readonly scroll: 'scroll';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   */
  readonly visible: 'visible';
}
export interface MsOverflowYValues extends CssWideValues {
  /**
   * -ms-overflow-y 的原生 -moz-hidden-unscrollable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-overflow-y
   */
  readonly '-moz-hidden-unscrollable': '-moz-hidden-unscrollable';
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * @example
   * css({ $property: "auto" })
   */
  readonly auto: 'auto';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * @example
   * css({ $property: "clip" })
   */
  readonly clip: 'clip';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * @example
   * css({ $property: "hidden" })
   */
  readonly hidden: 'hidden';
  /**
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   */
  readonly overlay: 'overlay';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   */
  readonly scroll: 'scroll';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   */
  readonly visible: 'visible';
}
export interface MsScrollbar3dlightColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MsScrollbarArrowColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MsScrollbarBaseColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MsScrollbarDarkshadowColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MsScrollbarFaceColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MsScrollbarHighlightColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MsScrollbarShadowColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MsScrollbarTrackColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface MsScrollChainingValues extends CssWideValues {
  /**
   * -ms-scroll-chaining 的原生 chained 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-chaining
   */
  readonly chained: 'chained';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsScrollLimitValues extends CssWideValues {}
export interface MsScrollLimitXMaxValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MsScrollLimitXMinValues extends CssWideValues {}
export interface MsScrollLimitYMaxValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface MsScrollLimitYMinValues extends CssWideValues {}
export interface MsScrollRailsValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -ms-scroll-rails 的原生 railed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-rails
   */
  readonly railed: 'railed';
}
export interface MsScrollSnapPointsXValues extends CssWideValues {}
export interface MsScrollSnapPointsYValues extends CssWideValues {}
export interface MsScrollSnapTypeValues extends CssWideValues {
  /**
   * -ms-scroll-snap-type 的原生 mandatory 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-type
   */
  readonly mandatory: 'mandatory';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -ms-scroll-snap-type 的原生 proximity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-snap-type
   */
  readonly proximity: 'proximity';
}
export interface MsScrollSnapXValues extends CssWideValues {}
export interface MsScrollSnapYValues extends CssWideValues {}
export interface MsScrollTranslationValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -ms-scroll-translation 的原生 vertical-to-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-scroll-translation
   */
  readonly 'vertical-to-horizontal': 'vertical-to-horizontal';
}
export interface MsTextAutospaceValues extends CssWideValues {
  /**
   * -ms-text-autospace 的原生 ideograph-alpha 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  readonly 'ideograph-alpha': 'ideograph-alpha';
  /**
   * -ms-text-autospace 的原生 ideograph-numeric 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  readonly 'ideograph-numeric': 'ideograph-numeric';
  /**
   * -ms-text-autospace 的原生 ideograph-parenthesis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  readonly 'ideograph-parenthesis': 'ideograph-parenthesis';
  /**
   * -ms-text-autospace 的原生 ideograph-space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-autospace
   */
  readonly 'ideograph-space': 'ideograph-space';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsTextCombineHorizontalValues extends CssWideValues {
  /**
   * -ms-text-combine-horizontal 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-combine-horizontal
   */
  readonly all: 'all';
  /**
   * -ms-text-combine-horizontal 的原生 digits 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-text-combine-horizontal
   */
  readonly digits: 'digits';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsTextOverflowValues extends CssWideValues {
  /**
   * 直接裁剪溢出文本，不添加省略标记。
   */
  readonly clip: 'clip';
  /**
   * 用省略号提示被裁剪的行内溢出；还需要限制尺寸并配置溢出规则。
   *
   * 适用场景：给确实发生行内溢出的单行内容添加省略提示。
   *
   * 不会自动限制宽度、禁用换行或实现多行省略。Flex/Grid 子项还可能需要 min-width:0。
   *
   * @example
   * css({ minWidth: "0px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" })
   */
  readonly ellipsis: 'ellipsis';
}
export interface MsTouchActionValues extends CssWideValues {
  /**
   * -ms-touch-action 的原生 -ms-manipulation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly '-ms-manipulation': '-ms-manipulation';
  /**
   * -ms-touch-action 的原生 -ms-none 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly '-ms-none': '-ms-none';
  /**
   * -ms-touch-action 的原生 -ms-pan-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly '-ms-pan-x': '-ms-pan-x';
  /**
   * -ms-touch-action 的原生 -ms-pan-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly '-ms-pan-y': '-ms-pan-y';
  /**
   * -ms-touch-action 的原生 -ms-pinch-zoom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-action
   */
  readonly '-ms-pinch-zoom': '-ms-pinch-zoom';
  /**
   * 允许浏览器处理平移和缩放手势；最终允许的手势还受相关祖先元素的 touch-action 约束。
   */
  readonly auto: 'auto';
  /**
   * 允许平移和连续缩放，通常禁用双击缩放等额外手势。
   */
  readonly manipulation: 'manipulation';
  /**
   * 禁用浏览器在该区域处理的平移和缩放手势，可能影响用户缩放可访问性。
   */
  readonly none: 'none';
  /**
   * 允许以向下滚动开始的单指平移，即手指最初向上移动；开始后仍可反向滚动。
   */
  readonly 'pan-down': 'pan-down';
  /**
   * 允许以向左滚动开始的单指平移，手指起始移动方向相反；开始后仍可反向滚动。
   */
  readonly 'pan-left': 'pan-left';
  /**
   * 允许以向右滚动开始的单指平移，手指起始移动方向相反；开始后仍可反向滚动。
   */
  readonly 'pan-right': 'pan-right';
  /**
   * 允许以向上滚动开始的单指平移，即手指最初向下移动；开始后仍可反向滚动。
   */
  readonly 'pan-up': 'pan-up';
  /**
   * 允许浏览器处理水平单指平移。
   */
  readonly 'pan-x': 'pan-x';
  /**
   * 允许浏览器处理垂直单指平移。
   */
  readonly 'pan-y': 'pan-y';
  /**
   * 允许浏览器处理多指缩放和平移，可与 pan-x、pan-y 等单指方向规则组合。
   */
  readonly 'pinch-zoom': 'pinch-zoom';
}
export interface MsTouchSelectValues extends CssWideValues {
  /**
   * -ms-touch-select 的原生 grippers 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-touch-select
   */
  readonly grippers: 'grippers';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsTransformValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsTransformOriginValues extends CssWideValues {
  /**
   * -ms-transform-origin 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  readonly bottom: 'bottom';
  /**
   * -ms-transform-origin 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  readonly center: 'center';
  /**
   * -ms-transform-origin 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  readonly left: 'left';
  /**
   * -ms-transform-origin 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  readonly right: 'right';
  /**
   * -ms-transform-origin 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transform-origin
   */
  readonly top: 'top';
}
export interface MsTransitionValues extends CssWideValues {
  /**
   * -ms-transition 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly all: 'all';
  /**
   * -ms-transition 的原生 allow-discrete 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly 'allow-discrete': 'allow-discrete';
  /**
   * -ms-transition 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly ease: 'ease';
  /**
   * -ms-transition 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -ms-transition 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -ms-transition 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -ms-transition 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly linear: 'linear';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -ms-transition 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly 'step-end': 'step-end';
  /**
   * -ms-transition 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition
   */
  readonly 'step-start': 'step-start';
}
export interface MsTransitionDelayValues extends CssWideValues {}
export interface MsTransitionDurationValues extends CssWideValues {}
export interface MsTransitionPropertyValues extends CssWideValues {
  /**
   * -ms-transition-property 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-property
   */
  readonly all: 'all';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface MsTransitionTimingFunctionValues extends CssWideValues {
  /**
   * -ms-transition-timing-function 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly ease: 'ease';
  /**
   * -ms-transition-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -ms-transition-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -ms-transition-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -ms-transition-timing-function 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly linear: 'linear';
  /**
   * -ms-transition-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly 'step-end': 'step-end';
  /**
   * -ms-transition-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-transition-timing-function
   */
  readonly 'step-start': 'step-start';
}
export interface MsUserSelectValues extends CssWideValues {
  /**
   * -ms-user-select 的原生 element 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-user-select
   */
  readonly element: 'element';
  /**
   * 阻止常规文本选取，不是内容保护或访问控制。
   */
  readonly none: 'none';
  /**
   * 允许文本选取。
   */
  readonly text: 'text';
}
export interface MsWordBreakValues extends CssWideValues {
  /**
   * -ms-word-break 的原生 auto-phrase 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-word-break
   */
  readonly 'auto-phrase': 'auto-phrase';
  /**
   * 允许在更多字符间断行以防溢出，可能拆开普通单词。
   */
  readonly 'break-all': 'break-all';
  /**
   * -ms-word-break 的原生 break-word 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-word-break
   */
  readonly 'break-word': 'break-word';
  /**
   * 限制中日韩文字内部断行，其他文字仍按正常规则处理。
   */
  readonly 'keep-all': 'keep-all';
  /**
   * 按语言的默认断行规则处理。
   */
  readonly normal: 'normal';
}
export interface MsWrapFlowValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -ms-wrap-flow 的原生 both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  readonly both: 'both';
  /**
   * -ms-wrap-flow 的原生 clear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  readonly clear: 'clear';
  /**
   * -ms-wrap-flow 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  readonly end: 'end';
  /**
   * -ms-wrap-flow 的原生 maximum 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  readonly maximum: 'maximum';
  /**
   * -ms-wrap-flow 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-flow
   */
  readonly start: 'start';
}
export interface MsWrapMarginValues extends CssWideValues {}
export interface MsWrapThroughValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -ms-wrap-through 的原生 wrap 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-wrap-through
   */
  readonly wrap: 'wrap';
}
export interface MsWritingModeValues extends CssWideValues {
  /**
   * -ms-writing-mode 的原生 horizontal-tb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly 'horizontal-tb': 'horizontal-tb';
  /**
   * -ms-writing-mode 的原生 sideways-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly 'sideways-lr': 'sideways-lr';
  /**
   * -ms-writing-mode 的原生 sideways-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly 'sideways-rl': 'sideways-rl';
  /**
   * -ms-writing-mode 的原生 vertical-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly 'vertical-lr': 'vertical-lr';
  /**
   * -ms-writing-mode 的原生 vertical-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-ms-writing-mode
   */
  readonly 'vertical-rl': 'vertical-rl';
}
export interface OAnimationValues extends CssWideValues {
  /**
   * -o-animation 的原生 alternate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly alternate: 'alternate';
  /**
   * -o-animation 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly 'alternate-reverse': 'alternate-reverse';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -o-animation 的原生 backwards 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly backwards: 'backwards';
  /**
   * -o-animation 的原生 both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly both: 'both';
  /**
   * -o-animation 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly ease: 'ease';
  /**
   * -o-animation 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -o-animation 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -o-animation 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -o-animation 的原生 forwards 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly forwards: 'forwards';
  /**
   * -o-animation 的原生 infinite 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly infinite: 'infinite';
  /**
   * -o-animation 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly linear: 'linear';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -o-animation 的原生 paused 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly paused: 'paused';
  /**
   * -o-animation 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly reverse: 'reverse';
  /**
   * -o-animation 的原生 running 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly running: 'running';
  /**
   * -o-animation 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly 'step-end': 'step-end';
  /**
   * -o-animation 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation
   */
  readonly 'step-start': 'step-start';
}
export interface OAnimationDelayValues extends CssWideValues {}
export interface OAnimationDirectionValues extends CssWideValues {
  /**
   * -o-animation-direction 的原生 alternate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-direction
   */
  readonly alternate: 'alternate';
  /**
   * -o-animation-direction 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-direction
   */
  readonly 'alternate-reverse': 'alternate-reverse';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -o-animation-direction 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-direction
   */
  readonly reverse: 'reverse';
}
export interface OAnimationDurationValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface OAnimationFillModeValues extends CssWideValues {
  /**
   * 延迟阶段应用最先生效关键帧的效果，具体帧取决于播放方向。
   */
  readonly backwards: 'backwards';
  /**
   * 同时应用 backwards 和 forwards 的区间外效果。
   */
  readonly both: 'both';
  /**
   * 播放结束后保留最后生效关键帧的效果；最后帧取决于方向和循环次数。
   */
  readonly forwards: 'forwards';
  /**
   * 动画有效区间之外不应用动画关键帧值。
   */
  readonly none: 'none';
}
export interface OAnimationIterationCountValues extends CssWideValues {
  /**
   * -o-animation-iteration-count 的原生 infinite 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-iteration-count
   */
  readonly infinite: 'infinite';
}
export interface OAnimationNameValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface OAnimationPlayStateValues extends CssWideValues {
  /**
   * -o-animation-play-state 的原生 paused 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-play-state
   */
  readonly paused: 'paused';
  /**
   * -o-animation-play-state 的原生 running 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-play-state
   */
  readonly running: 'running';
}
export interface OAnimationTimingFunctionValues extends CssWideValues {
  /**
   * -o-animation-timing-function 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly ease: 'ease';
  /**
   * -o-animation-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -o-animation-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -o-animation-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -o-animation-timing-function 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly linear: 'linear';
  /**
   * -o-animation-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly 'step-end': 'step-end';
  /**
   * -o-animation-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-animation-timing-function
   */
  readonly 'step-start': 'step-start';
}
export interface OBackgroundSizeValues extends CssWideValues {
  /**
   * 依据图像内部尺寸、比例及另一维的设置确定尺寸。
   */
  readonly auto: 'auto';
  /**
   * 保持图像比例并使整张图像容纳于定位区域，可能留下空白。
   */
  readonly contain: 'contain';
  /**
   * 保持图像比例并覆盖整个定位区域，超出部分可能被裁剪。
   */
  readonly cover: 'cover';
}
export interface ObjectFitValues extends CssWideValues {
  /**
   * 保留宽高比并完整放入内容盒，可能留下空白。
   *
   * 区别：cover 优先填满盒子并可能裁剪；contain 优先保留完整内容。
   *
   * 适用场景：希望完整显示的商品图或图像预览。
   *
   * @example
   * css({ width: "20rem", height: "12rem", objectFit: "contain" })
   */
  readonly contain: 'contain';
  /**
   * 保留宽高比并填满内容盒，可能裁掉部分图像。
   *
   * 区别：contain 保证完整图像可见但可能留白；fill 可能改变图像比例。
   *
   * 适用场景：固定尺寸头像、卡片封面。
   *
   * 裁剪位置由 object-position 控制，盒子尺寸仍需另外设置。
   *
   * @example
   * css({ width: "80px", height: "80px", objectFit: "cover" })
   */
  readonly cover: 'cover';
  /**
   * 把内容拉伸到内容盒，可能改变原有宽高比。
   */
  readonly fill: 'fill';
  /**
   * 不按内容盒缩放替换内容。
   */
  readonly none: 'none';
  /**
   * 在 none 和 contain 中选择得到较小内容尺寸的方案。
   */
  readonly 'scale-down': 'scale-down';
}
export interface ObjectPositionValues extends CssWideValues {
  /**
   * object-position 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  readonly bottom: 'bottom';
  /**
   * object-position 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  readonly center: 'center';
  /**
   * object-position 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  readonly left: 'left';
  /**
   * object-position 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  readonly right: 'right';
  /**
   * object-position 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  readonly top: 'top';
}
export interface ObjectViewBoxValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface OBorderImageValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -o-border-image 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-border-image
   */
  readonly repeat: 'repeat';
  /**
   * -o-border-image 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-border-image
   */
  readonly round: 'round';
  /**
   * -o-border-image 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-border-image
   */
  readonly space: 'space';
  /**
   * -o-border-image 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-border-image
   */
  readonly stretch: 'stretch';
}
export interface OffsetValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * offset 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly 'border-box': 'border-box';
  /**
   * offset 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly bottom: 'bottom';
  /**
   * offset 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly center: 'center';
  /**
   * offset 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly 'content-box': 'content-box';
  /**
   * offset 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly 'fill-box': 'fill-box';
  /**
   * offset 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly left: 'left';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * offset 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly 'padding-box': 'padding-box';
  /**
   * offset 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly right: 'right';
  /**
   * offset 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * offset 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly top: 'top';
  /**
   * offset 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  readonly 'view-box': 'view-box';
}
export interface OffsetAnchorValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * offset-anchor 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  readonly bottom: 'bottom';
  /**
   * offset-anchor 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  readonly center: 'center';
  /**
   * offset-anchor 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  readonly left: 'left';
  /**
   * offset-anchor 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  readonly right: 'right';
  /**
   * offset-anchor 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  readonly top: 'top';
}
export interface OffsetBlockValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface OffsetBlockEndValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface OffsetBlockStartValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface OffsetDistanceValues extends CssWideValues {}
export interface OffsetInlineValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface OffsetInlineEndValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface OffsetInlineStartValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface OffsetPathValues extends CssWideValues {
  /**
   * offset-path 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly 'border-box': 'border-box';
  /**
   * offset-path 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly 'content-box': 'content-box';
  /**
   * offset-path 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly 'fill-box': 'fill-box';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * offset-path 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly 'padding-box': 'padding-box';
  /**
   * offset-path 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * offset-path 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  readonly 'view-box': 'view-box';
}
export interface OffsetPositionValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * offset-position 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  readonly bottom: 'bottom';
  /**
   * offset-position 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  readonly center: 'center';
  /**
   * offset-position 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  readonly left: 'left';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * offset-position 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  readonly right: 'right';
  /**
   * offset-position 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  readonly top: 'top';
}
export interface OffsetRotateValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * offset-rotate 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  readonly reverse: 'reverse';
}
export interface OffsetRotationValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * offset-rotation 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotation
   */
  readonly reverse: 'reverse';
}
export interface OObjectFitValues extends CssWideValues {
  /**
   * 保留宽高比并完整放入内容盒，可能留下空白。
   *
   * 区别：cover 优先填满盒子并可能裁剪；contain 优先保留完整内容。
   *
   * 适用场景：希望完整显示的商品图或图像预览。
   *
   * @example
   * css({ width: "20rem", height: "12rem", objectFit: "contain" })
   */
  readonly contain: 'contain';
  /**
   * 保留宽高比并填满内容盒，可能裁掉部分图像。
   *
   * 区别：contain 保证完整图像可见但可能留白；fill 可能改变图像比例。
   *
   * 适用场景：固定尺寸头像、卡片封面。
   *
   * 裁剪位置由 object-position 控制，盒子尺寸仍需另外设置。
   *
   * @example
   * css({ width: "80px", height: "80px", objectFit: "cover" })
   */
  readonly cover: 'cover';
  /**
   * 把内容拉伸到内容盒，可能改变原有宽高比。
   */
  readonly fill: 'fill';
  /**
   * 不按内容盒缩放替换内容。
   */
  readonly none: 'none';
  /**
   * 在 none 和 contain 中选择得到较小内容尺寸的方案。
   */
  readonly 'scale-down': 'scale-down';
}
export interface OObjectPositionValues extends CssWideValues {
  /**
   * -o-object-position 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-position
   */
  readonly bottom: 'bottom';
  /**
   * -o-object-position 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-position
   */
  readonly center: 'center';
  /**
   * -o-object-position 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-position
   */
  readonly left: 'left';
  /**
   * -o-object-position 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-position
   */
  readonly right: 'right';
  /**
   * -o-object-position 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-object-position
   */
  readonly top: 'top';
}
export interface OpacityValues extends CssWideValues {}
export interface OrderValues extends CssWideValues {}
export interface OrphansValues extends CssWideValues {}
export interface OTabSizeValues extends CssWideValues {}
export interface OTextOverflowValues extends CssWideValues {
  /**
   * 直接裁剪溢出文本，不添加省略标记。
   */
  readonly clip: 'clip';
  /**
   * 用省略号提示被裁剪的行内溢出；还需要限制尺寸并配置溢出规则。
   *
   * 适用场景：给确实发生行内溢出的单行内容添加省略提示。
   *
   * 不会自动限制宽度、禁用换行或实现多行省略。Flex/Grid 子项还可能需要 min-width:0。
   *
   * @example
   * css({ minWidth: "0px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" })
   */
  readonly ellipsis: 'ellipsis';
}
export interface OTransformValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface OTransformOriginValues extends CssWideValues {
  /**
   * -o-transform-origin 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform-origin
   */
  readonly bottom: 'bottom';
  /**
   * -o-transform-origin 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform-origin
   */
  readonly center: 'center';
  /**
   * -o-transform-origin 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform-origin
   */
  readonly left: 'left';
  /**
   * -o-transform-origin 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform-origin
   */
  readonly right: 'right';
  /**
   * -o-transform-origin 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transform-origin
   */
  readonly top: 'top';
}
export interface OTransitionValues extends CssWideValues {
  /**
   * -o-transition 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly all: 'all';
  /**
   * -o-transition 的原生 allow-discrete 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly 'allow-discrete': 'allow-discrete';
  /**
   * -o-transition 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly ease: 'ease';
  /**
   * -o-transition 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -o-transition 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -o-transition 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -o-transition 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly linear: 'linear';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -o-transition 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly 'step-end': 'step-end';
  /**
   * -o-transition 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition
   */
  readonly 'step-start': 'step-start';
}
export interface OTransitionDelayValues extends CssWideValues {}
export interface OTransitionDurationValues extends CssWideValues {}
export interface OTransitionPropertyValues extends CssWideValues {
  /**
   * -o-transition-property 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-property
   */
  readonly all: 'all';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface OTransitionTimingFunctionValues extends CssWideValues {
  /**
   * -o-transition-timing-function 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly ease: 'ease';
  /**
   * -o-transition-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -o-transition-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -o-transition-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -o-transition-timing-function 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly linear: 'linear';
  /**
   * -o-transition-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly 'step-end': 'step-end';
  /**
   * -o-transition-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-o-transition-timing-function
   */
  readonly 'step-start': 'step-start';
}
export interface OutlineValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface OutlineColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface OutlineOffsetValues extends CssWideValues {}
export interface OutlineStyleValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * outline-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  readonly dashed: 'dashed';
  /**
   * outline-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  readonly dotted: 'dotted';
  /**
   * outline-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  readonly double: 'double';
  /**
   * outline-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  readonly groove: 'groove';
  /**
   * outline-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * outline-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  readonly outset: 'outset';
  /**
   * outline-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  readonly ridge: 'ridge';
  /**
   * outline-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  readonly solid: 'solid';
}
export interface OutlineWidthValues extends CssWideValues {
  /**
   * outline-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  readonly medium: 'medium';
  /**
   * outline-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  readonly thick: 'thick';
  /**
   * outline-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  readonly thin: 'thin';
}
export interface OverflowValues extends CssWideValues {
  /**
   * overflow 的原生 -moz-hidden-unscrollable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  readonly '-moz-hidden-unscrollable': '-moz-hidden-unscrollable';
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * @example
   * css({ $property: "auto" })
   */
  readonly auto: 'auto';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * @example
   * css({ $property: "clip" })
   */
  readonly clip: 'clip';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * @example
   * css({ $property: "hidden" })
   */
  readonly hidden: 'hidden';
  /**
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   */
  readonly overlay: 'overlay';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   */
  readonly scroll: 'scroll';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   */
  readonly visible: 'visible';
}
export interface OverflowAnchorValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface OverflowBlockValues extends CssWideValues {
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * @example
   * css({ $property: "auto" })
   */
  readonly auto: 'auto';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * @example
   * css({ $property: "clip" })
   */
  readonly clip: 'clip';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * @example
   * css({ $property: "hidden" })
   */
  readonly hidden: 'hidden';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   */
  readonly scroll: 'scroll';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   */
  readonly visible: 'visible';
}
export interface OverflowClipBoxValues extends CssWideValues {
  /**
   * overflow-clip-box 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  readonly 'content-box': 'content-box';
  /**
   * overflow-clip-box 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  readonly 'padding-box': 'padding-box';
}
export interface OverflowClipMarginValues extends CssWideValues {
  /**
   * overflow-clip-margin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  readonly 'border-box': 'border-box';
  /**
   * overflow-clip-margin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  readonly 'content-box': 'content-box';
  /**
   * overflow-clip-margin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  readonly 'padding-box': 'padding-box';
}
export interface OverflowInlineValues extends CssWideValues {
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * @example
   * css({ $property: "auto" })
   */
  readonly auto: 'auto';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * @example
   * css({ $property: "clip" })
   */
  readonly clip: 'clip';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * @example
   * css({ $property: "hidden" })
   */
  readonly hidden: 'hidden';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   */
  readonly scroll: 'scroll';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   */
  readonly visible: 'visible';
}
export interface OverflowWrapValues extends CssWideValues {
  /**
   * 必要时允许在长文本任意位置断行，这些机会参与 min-content 尺寸计算。
   *
   * 区别：break-word 的额外断点不按 anywhere 的方式参与最小内容宽度计算；word-break:break-all 更积极地拆分普通单词。
   *
   * 适用场景：展示不可控的长 URL 或无空格文本。
   *
   * @example
   * css({ $property: "anywhere" })
   */
  readonly anywhere: 'anywhere';
  /**
   * 必要时允许长文本断行，但新增断点不按 anywhere 的方式参与 min-content 计算。
   */
  readonly 'break-word': 'break-word';
  /**
   * 只使用正常换行机会，不为长单词额外断行。
   */
  readonly normal: 'normal';
}
export interface OverflowXValues extends CssWideValues {
  /**
   * overflow-x 的原生 -moz-hidden-unscrollable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  readonly '-moz-hidden-unscrollable': '-moz-hidden-unscrollable';
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * @example
   * css({ $property: "auto" })
   */
  readonly auto: 'auto';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * @example
   * css({ $property: "clip" })
   */
  readonly clip: 'clip';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * @example
   * css({ $property: "hidden" })
   */
  readonly hidden: 'hidden';
  /**
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   */
  readonly overlay: 'overlay';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   */
  readonly scroll: 'scroll';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   */
  readonly visible: 'visible';
}
export interface OverflowYValues extends CssWideValues {
  /**
   * overflow-y 的原生 -moz-hidden-unscrollable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  readonly '-moz-hidden-unscrollable': '-moz-hidden-unscrollable';
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * @example
   * css({ $property: "auto" })
   */
  readonly auto: 'auto';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * @example
   * css({ $property: "clip" })
   */
  readonly clip: 'clip';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * @example
   * css({ $property: "hidden" })
   */
  readonly hidden: 'hidden';
  /**
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   */
  readonly overlay: 'overlay';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   */
  readonly scroll: 'scroll';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   */
  readonly visible: 'visible';
}
export interface OverlayValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface OverscrollBehaviorValues extends CssWideValues {
  /**
   * 采用默认滚动链和边界反馈。
   */
  readonly auto: 'auto';
  /**
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   */
  readonly contain: 'contain';
  /**
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   */
  readonly none: 'none';
}
export interface OverscrollBehaviorBlockValues extends CssWideValues {
  /**
   * 采用默认滚动链和边界反馈。
   */
  readonly auto: 'auto';
  /**
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   */
  readonly contain: 'contain';
  /**
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   */
  readonly none: 'none';
}
export interface OverscrollBehaviorInlineValues extends CssWideValues {
  /**
   * 采用默认滚动链和边界反馈。
   */
  readonly auto: 'auto';
  /**
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   */
  readonly contain: 'contain';
  /**
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   */
  readonly none: 'none';
}
export interface OverscrollBehaviorXValues extends CssWideValues {
  /**
   * 采用默认滚动链和边界反馈。
   */
  readonly auto: 'auto';
  /**
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   */
  readonly contain: 'contain';
  /**
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   */
  readonly none: 'none';
}
export interface OverscrollBehaviorYValues extends CssWideValues {
  /**
   * 采用默认滚动链和边界反馈。
   */
  readonly auto: 'auto';
  /**
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   */
  readonly contain: 'contain';
  /**
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   */
  readonly none: 'none';
}
export interface PaddingValues extends CssWideValues {}
export interface PaddingBlockValues extends CssWideValues {}
export interface PaddingBlockEndValues extends CssWideValues {}
export interface PaddingBlockStartValues extends CssWideValues {}
export interface PaddingBottomValues extends CssWideValues {}
export interface PaddingInlineValues extends CssWideValues {}
export interface PaddingInlineEndValues extends CssWideValues {}
export interface PaddingInlineStartValues extends CssWideValues {}
export interface PaddingLeftValues extends CssWideValues {}
export interface PaddingRightValues extends CssWideValues {}
export interface PaddingTopValues extends CssWideValues {}
export interface PageValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface PageBreakAfterValues extends CssWideValues {
  /**
   * page-break-after 的原生 always 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  readonly always: 'always';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * page-break-after 的原生 avoid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  readonly avoid: 'avoid';
  /**
   * page-break-after 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  readonly left: 'left';
  /**
   * page-break-after 的原生 recto 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  readonly recto: 'recto';
  /**
   * page-break-after 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  readonly right: 'right';
  /**
   * page-break-after 的原生 verso 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-after
   */
  readonly verso: 'verso';
}
export interface PageBreakBeforeValues extends CssWideValues {
  /**
   * page-break-before 的原生 always 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  readonly always: 'always';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * page-break-before 的原生 avoid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  readonly avoid: 'avoid';
  /**
   * page-break-before 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  readonly left: 'left';
  /**
   * page-break-before 的原生 recto 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  readonly recto: 'recto';
  /**
   * page-break-before 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  readonly right: 'right';
  /**
   * page-break-before 的原生 verso 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-before
   */
  readonly verso: 'verso';
}
export interface PageBreakInsideValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * page-break-inside 的原生 avoid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page-break-inside
   */
  readonly avoid: 'avoid';
}
export interface PaintOrderValues extends CssWideValues {
  /**
   * paint-order 的原生 fill 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  readonly fill: 'fill';
  /**
   * paint-order 的原生 markers 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  readonly markers: 'markers';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * paint-order 的原生 stroke 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  readonly stroke: 'stroke';
}
export interface PerspectiveValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface PerspectiveOriginValues extends CssWideValues {
  /**
   * perspective-origin 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  readonly bottom: 'bottom';
  /**
   * perspective-origin 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  readonly center: 'center';
  /**
   * perspective-origin 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  readonly left: 'left';
  /**
   * perspective-origin 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  readonly right: 'right';
  /**
   * perspective-origin 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  readonly top: 'top';
}
export interface PlaceContentValues extends CssWideValues {
  /**
   * place-content 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly baseline: 'baseline';
  /**
   * place-content 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly center: 'center';
  /**
   * place-content 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly end: 'end';
  /**
   * place-content 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly 'flex-end': 'flex-end';
  /**
   * place-content 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * place-content 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly 'space-around': 'space-around';
  /**
   * place-content 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly 'space-between': 'space-between';
  /**
   * place-content 的原生 space-evenly 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly 'space-evenly': 'space-evenly';
  /**
   * place-content 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly start: 'start';
  /**
   * place-content 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  readonly stretch: 'stretch';
}
export interface PlaceItemsValues extends CssWideValues {
  /**
   * place-items 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly 'anchor-center': 'anchor-center';
  /**
   * place-items 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly baseline: 'baseline';
  /**
   * place-items 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly center: 'center';
  /**
   * place-items 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly end: 'end';
  /**
   * place-items 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly 'flex-end': 'flex-end';
  /**
   * place-items 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * place-items 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly 'self-end': 'self-end';
  /**
   * place-items 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly 'self-start': 'self-start';
  /**
   * place-items 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly start: 'start';
  /**
   * place-items 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  readonly stretch: 'stretch';
}
export interface PlaceSelfValues extends CssWideValues {
  /**
   * place-self 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly 'anchor-center': 'anchor-center';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * place-self 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly baseline: 'baseline';
  /**
   * place-self 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly center: 'center';
  /**
   * place-self 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly end: 'end';
  /**
   * place-self 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly 'flex-end': 'flex-end';
  /**
   * place-self 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * place-self 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly 'self-end': 'self-end';
  /**
   * place-self 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly 'self-start': 'self-start';
  /**
   * place-self 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly start: 'start';
  /**
   * place-self 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  readonly stretch: 'stretch';
}
export interface PointerEventsValues extends CssWideValues {
  /**
   * SVG 命中规则：填充内部和描边区域都可命中，不检查 fill、stroke 或 visibility；不是禁用状态的反义词。
   */
  readonly all: 'all';
  /**
   * 采用当前元素类型的默认命中规则。
   */
  readonly auto: 'auto';
  /**
   * SVG 命中规则：填充内部可命中，不检查 fill 或 visibility 的值。
   */
  readonly fill: 'fill';
  /**
   * 元素本身不成为指针命中目标；不等于禁用，仍可能通过 Tab 获焦，后代也可恢复命中。
   *
   * 适用场景：覆盖在内容上方但不应拦截点击的装饰层。
   *
   * 后代可以恢复命中；来自后代的事件仍可能经过祖先监听器。
   *
   * @example
   * css({ pointerEvents: "none" })
   */
  readonly none: 'none';
  /**
   * SVG 命中规则：实际启用 fill 或 stroke 的区域可命中，不检查 visibility。
   */
  readonly painted: 'painted';
  /**
   * SVG 命中规则：描边区域可命中，不检查 stroke 或 visibility 的值。
   */
  readonly stroke: 'stroke';
  /**
   * SVG 命中规则：visibility 为 visible 时，填充内部和描边区域都可命中，不要求 fill 或 stroke 实际绘制。
   */
  readonly visible: 'visible';
  /**
   * SVG 命中规则：visibility 为 visible 且指针位于填充内部；fill 是否为 none 不影响命中。
   */
  readonly visibleFill: 'visibleFill';
  /**
   * SVG 命中规则：visibility 为 visible，且指针位于实际启用 fill 或 stroke 的区域；不把它当成通用 HTML 控件规则。
   */
  readonly visiblePainted: 'visiblePainted';
  /**
   * SVG 命中规则：visibility 为 visible 且指针位于描边区域；stroke 是否为 none 不影响命中。
   */
  readonly visibleStroke: 'visibleStroke';
}
export interface PositionValues extends CssWideValues {
  /**
   * position 的原生 -webkit-sticky 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly '-webkit-sticky': '-webkit-sticky';
  /**
   * 脱离普通文档流，按包含块定位；包含块通常由定位祖先或 transform 等属性建立。
   *
   * 适用场景：容器内部的角标、图标覆盖和定位装饰。
   *
   * 通常在预期的容器上设置 position:relative；元素不为自己保留普通流占位。
   *
   * @example
   * css({ position: "absolute", top: "0px", right: "0px" })
   */
  readonly absolute: 'absolute';
  /**
   * 脱离普通流，通常相对视口固定；某些祖先属性会建立不同的包含块。
   *
   * 区别：absolute 通常跟随其包含块滚动；fixed 在以视口为包含块时保持视口位置。
   *
   * 适用场景：固定工具栏或覆盖层。
   *
   * 祖先的 transform 等属性可能改变固定定位的包含块；z-index 仍受层叠上下文约束。
   *
   * @example
   * css({ position: "fixed", inset: "0px" })
   */
  readonly fixed: 'fixed';
  /**
   * 保留普通流中的原位置，再按偏移移动绘制位置；不会为偏移后的区域重新排版。
   *
   * 区别：absolute 会脱离普通流；relative 仍保留原占位。
   *
   * 适用场景：为绝对定位后代提供定位参照，或做不改变其他元素排布的视觉偏移。
   *
   * @example
   * css({ position: "relative" })
   */
  readonly relative: 'relative';
  /**
   * 参与普通文档流，top/right/bottom/left 等定位偏移不生效。
   */
  readonly static: 'static';
  /**
   * 保留流内位置，在滚动范围内按 inset 约束吸附。对应轴至少一个 inset 须非 auto，并受滚动祖先和包含块限制。
   *
   * 区别：与 fixed 不同，它保留流内占位，并受自身所在包含块的范围约束。
   *
   * 适用场景：滚动列表的分组标题、吸顶工具栏。
   *
   * 对应轴至少一个 inset 必须非 auto；祖先 overflow 可能改变滚动参照。
   *
   * @example
   * css({ position: "sticky", top: "0px" })
   */
  readonly sticky: 'sticky';
}
export interface PositionAnchorValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface PositionAreaValues extends CssWideValues {
  /**
   * position-area 的原生 block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'block-end': 'block-end';
  /**
   * position-area 的原生 block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'block-start': 'block-start';
  /**
   * position-area 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly bottom: 'bottom';
  /**
   * position-area 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly center: 'center';
  /**
   * position-area 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly end: 'end';
  /**
   * position-area 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'inline-end': 'inline-end';
  /**
   * position-area 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'inline-start': 'inline-start';
  /**
   * position-area 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly left: 'left';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * position-area 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly right: 'right';
  /**
   * position-area 的原生 self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'self-block-end': 'self-block-end';
  /**
   * position-area 的原生 self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'self-block-start': 'self-block-start';
  /**
   * position-area 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'self-end': 'self-end';
  /**
   * position-area 的原生 self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'self-inline-end': 'self-inline-end';
  /**
   * position-area 的原生 self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'self-inline-start': 'self-inline-start';
  /**
   * position-area 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'self-start': 'self-start';
  /**
   * position-area 的原生 span-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-all': 'span-all';
  /**
   * position-area 的原生 span-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-block-end': 'span-block-end';
  /**
   * position-area 的原生 span-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-block-start': 'span-block-start';
  /**
   * position-area 的原生 span-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-bottom': 'span-bottom';
  /**
   * position-area 的原生 span-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-end': 'span-end';
  /**
   * position-area 的原生 span-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-inline-end': 'span-inline-end';
  /**
   * position-area 的原生 span-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-inline-start': 'span-inline-start';
  /**
   * position-area 的原生 span-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-left': 'span-left';
  /**
   * position-area 的原生 span-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-right': 'span-right';
  /**
   * position-area 的原生 span-self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-self-block-end': 'span-self-block-end';
  /**
   * position-area 的原生 span-self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-self-block-start': 'span-self-block-start';
  /**
   * position-area 的原生 span-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-self-end': 'span-self-end';
  /**
   * position-area 的原生 span-self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-self-inline-end': 'span-self-inline-end';
  /**
   * position-area 的原生 span-self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-self-inline-start': 'span-self-inline-start';
  /**
   * position-area 的原生 span-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-self-start': 'span-self-start';
  /**
   * position-area 的原生 span-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-start': 'span-start';
  /**
   * position-area 的原生 span-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-top': 'span-top';
  /**
   * position-area 的原生 span-x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-x-end': 'span-x-end';
  /**
   * position-area 的原生 span-x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-x-self-end': 'span-x-self-end';
  /**
   * position-area 的原生 span-x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-x-self-start': 'span-x-self-start';
  /**
   * position-area 的原生 span-x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-x-start': 'span-x-start';
  /**
   * position-area 的原生 span-y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-y-end': 'span-y-end';
  /**
   * position-area 的原生 span-y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-y-self-end': 'span-y-self-end';
  /**
   * position-area 的原生 span-y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-y-self-start': 'span-y-self-start';
  /**
   * position-area 的原生 span-y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'span-y-start': 'span-y-start';
  /**
   * position-area 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly start: 'start';
  /**
   * position-area 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly top: 'top';
  /**
   * position-area 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'x-end': 'x-end';
  /**
   * position-area 的原生 x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'x-self-end': 'x-self-end';
  /**
   * position-area 的原生 x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'x-self-start': 'x-self-start';
  /**
   * position-area 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'x-start': 'x-start';
  /**
   * position-area 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'y-end': 'y-end';
  /**
   * position-area 的原生 y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'y-self-end': 'y-self-end';
  /**
   * position-area 的原生 y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'y-self-start': 'y-self-start';
  /**
   * position-area 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  readonly 'y-start': 'y-start';
}
export interface PositionTryValues extends CssWideValues {
  /**
   * position-try 的原生 block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'block-end': 'block-end';
  /**
   * position-try 的原生 block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'block-start': 'block-start';
  /**
   * position-try 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly bottom: 'bottom';
  /**
   * position-try 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly center: 'center';
  /**
   * position-try 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly end: 'end';
  /**
   * position-try 的原生 flip-block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'flip-block': 'flip-block';
  /**
   * position-try 的原生 flip-inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'flip-inline': 'flip-inline';
  /**
   * position-try 的原生 flip-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'flip-start': 'flip-start';
  /**
   * position-try 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'inline-end': 'inline-end';
  /**
   * position-try 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'inline-start': 'inline-start';
  /**
   * position-try 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly left: 'left';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * position-try 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly right: 'right';
  /**
   * position-try 的原生 self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'self-block-end': 'self-block-end';
  /**
   * position-try 的原生 self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'self-block-start': 'self-block-start';
  /**
   * position-try 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'self-end': 'self-end';
  /**
   * position-try 的原生 self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'self-inline-end': 'self-inline-end';
  /**
   * position-try 的原生 self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'self-inline-start': 'self-inline-start';
  /**
   * position-try 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'self-start': 'self-start';
  /**
   * position-try 的原生 span-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-all': 'span-all';
  /**
   * position-try 的原生 span-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-block-end': 'span-block-end';
  /**
   * position-try 的原生 span-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-block-start': 'span-block-start';
  /**
   * position-try 的原生 span-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-bottom': 'span-bottom';
  /**
   * position-try 的原生 span-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-end': 'span-end';
  /**
   * position-try 的原生 span-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-inline-end': 'span-inline-end';
  /**
   * position-try 的原生 span-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-inline-start': 'span-inline-start';
  /**
   * position-try 的原生 span-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-left': 'span-left';
  /**
   * position-try 的原生 span-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-right': 'span-right';
  /**
   * position-try 的原生 span-self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-self-block-end': 'span-self-block-end';
  /**
   * position-try 的原生 span-self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-self-block-start': 'span-self-block-start';
  /**
   * position-try 的原生 span-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-self-end': 'span-self-end';
  /**
   * position-try 的原生 span-self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-self-inline-end': 'span-self-inline-end';
  /**
   * position-try 的原生 span-self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-self-inline-start': 'span-self-inline-start';
  /**
   * position-try 的原生 span-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-self-start': 'span-self-start';
  /**
   * position-try 的原生 span-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-start': 'span-start';
  /**
   * position-try 的原生 span-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-top': 'span-top';
  /**
   * position-try 的原生 span-x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-x-end': 'span-x-end';
  /**
   * position-try 的原生 span-x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-x-self-end': 'span-x-self-end';
  /**
   * position-try 的原生 span-x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-x-self-start': 'span-x-self-start';
  /**
   * position-try 的原生 span-x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-x-start': 'span-x-start';
  /**
   * position-try 的原生 span-y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-y-end': 'span-y-end';
  /**
   * position-try 的原生 span-y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-y-self-end': 'span-y-self-end';
  /**
   * position-try 的原生 span-y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-y-self-start': 'span-y-self-start';
  /**
   * position-try 的原生 span-y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'span-y-start': 'span-y-start';
  /**
   * position-try 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly start: 'start';
  /**
   * position-try 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly top: 'top';
  /**
   * position-try 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'x-end': 'x-end';
  /**
   * position-try 的原生 x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'x-self-end': 'x-self-end';
  /**
   * position-try 的原生 x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'x-self-start': 'x-self-start';
  /**
   * position-try 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'x-start': 'x-start';
  /**
   * position-try 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'y-end': 'y-end';
  /**
   * position-try 的原生 y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'y-self-end': 'y-self-end';
  /**
   * position-try 的原生 y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'y-self-start': 'y-self-start';
  /**
   * position-try 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  readonly 'y-start': 'y-start';
}
export interface PositionTryFallbacksValues extends CssWideValues {
  /**
   * position-try-fallbacks 的原生 block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'block-end': 'block-end';
  /**
   * position-try-fallbacks 的原生 block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'block-start': 'block-start';
  /**
   * position-try-fallbacks 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly bottom: 'bottom';
  /**
   * position-try-fallbacks 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly center: 'center';
  /**
   * position-try-fallbacks 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly end: 'end';
  /**
   * position-try-fallbacks 的原生 flip-block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'flip-block': 'flip-block';
  /**
   * position-try-fallbacks 的原生 flip-inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'flip-inline': 'flip-inline';
  /**
   * position-try-fallbacks 的原生 flip-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'flip-start': 'flip-start';
  /**
   * position-try-fallbacks 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'inline-end': 'inline-end';
  /**
   * position-try-fallbacks 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'inline-start': 'inline-start';
  /**
   * position-try-fallbacks 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly left: 'left';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * position-try-fallbacks 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly right: 'right';
  /**
   * position-try-fallbacks 的原生 self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'self-block-end': 'self-block-end';
  /**
   * position-try-fallbacks 的原生 self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'self-block-start': 'self-block-start';
  /**
   * position-try-fallbacks 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'self-end': 'self-end';
  /**
   * position-try-fallbacks 的原生 self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'self-inline-end': 'self-inline-end';
  /**
   * position-try-fallbacks 的原生 self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'self-inline-start': 'self-inline-start';
  /**
   * position-try-fallbacks 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'self-start': 'self-start';
  /**
   * position-try-fallbacks 的原生 span-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-all': 'span-all';
  /**
   * position-try-fallbacks 的原生 span-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-block-end': 'span-block-end';
  /**
   * position-try-fallbacks 的原生 span-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-block-start': 'span-block-start';
  /**
   * position-try-fallbacks 的原生 span-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-bottom': 'span-bottom';
  /**
   * position-try-fallbacks 的原生 span-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-end': 'span-end';
  /**
   * position-try-fallbacks 的原生 span-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-inline-end': 'span-inline-end';
  /**
   * position-try-fallbacks 的原生 span-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-inline-start': 'span-inline-start';
  /**
   * position-try-fallbacks 的原生 span-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-left': 'span-left';
  /**
   * position-try-fallbacks 的原生 span-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-right': 'span-right';
  /**
   * position-try-fallbacks 的原生 span-self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-self-block-end': 'span-self-block-end';
  /**
   * position-try-fallbacks 的原生 span-self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-self-block-start': 'span-self-block-start';
  /**
   * position-try-fallbacks 的原生 span-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-self-end': 'span-self-end';
  /**
   * position-try-fallbacks 的原生 span-self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-self-inline-end': 'span-self-inline-end';
  /**
   * position-try-fallbacks 的原生 span-self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-self-inline-start': 'span-self-inline-start';
  /**
   * position-try-fallbacks 的原生 span-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-self-start': 'span-self-start';
  /**
   * position-try-fallbacks 的原生 span-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-start': 'span-start';
  /**
   * position-try-fallbacks 的原生 span-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-top': 'span-top';
  /**
   * position-try-fallbacks 的原生 span-x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-x-end': 'span-x-end';
  /**
   * position-try-fallbacks 的原生 span-x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-x-self-end': 'span-x-self-end';
  /**
   * position-try-fallbacks 的原生 span-x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-x-self-start': 'span-x-self-start';
  /**
   * position-try-fallbacks 的原生 span-x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-x-start': 'span-x-start';
  /**
   * position-try-fallbacks 的原生 span-y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-y-end': 'span-y-end';
  /**
   * position-try-fallbacks 的原生 span-y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-y-self-end': 'span-y-self-end';
  /**
   * position-try-fallbacks 的原生 span-y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-y-self-start': 'span-y-self-start';
  /**
   * position-try-fallbacks 的原生 span-y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'span-y-start': 'span-y-start';
  /**
   * position-try-fallbacks 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly start: 'start';
  /**
   * position-try-fallbacks 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly top: 'top';
  /**
   * position-try-fallbacks 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'x-end': 'x-end';
  /**
   * position-try-fallbacks 的原生 x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'x-self-end': 'x-self-end';
  /**
   * position-try-fallbacks 的原生 x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'x-self-start': 'x-self-start';
  /**
   * position-try-fallbacks 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'x-start': 'x-start';
  /**
   * position-try-fallbacks 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'y-end': 'y-end';
  /**
   * position-try-fallbacks 的原生 y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'y-self-end': 'y-self-end';
  /**
   * position-try-fallbacks 的原生 y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'y-self-start': 'y-self-start';
  /**
   * position-try-fallbacks 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  readonly 'y-start': 'y-start';
}
export interface PositionTryOptionsValues extends CssWideValues {
  /**
   * position-try-options 的原生 block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'block-end': 'block-end';
  /**
   * position-try-options 的原生 block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'block-start': 'block-start';
  /**
   * position-try-options 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly bottom: 'bottom';
  /**
   * position-try-options 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly center: 'center';
  /**
   * position-try-options 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly end: 'end';
  /**
   * position-try-options 的原生 flip-block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'flip-block': 'flip-block';
  /**
   * position-try-options 的原生 flip-inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'flip-inline': 'flip-inline';
  /**
   * position-try-options 的原生 flip-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'flip-start': 'flip-start';
  /**
   * position-try-options 的原生 inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'inline-end': 'inline-end';
  /**
   * position-try-options 的原生 inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'inline-start': 'inline-start';
  /**
   * position-try-options 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly left: 'left';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * position-try-options 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly right: 'right';
  /**
   * position-try-options 的原生 self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'self-block-end': 'self-block-end';
  /**
   * position-try-options 的原生 self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'self-block-start': 'self-block-start';
  /**
   * position-try-options 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'self-end': 'self-end';
  /**
   * position-try-options 的原生 self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'self-inline-end': 'self-inline-end';
  /**
   * position-try-options 的原生 self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'self-inline-start': 'self-inline-start';
  /**
   * position-try-options 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'self-start': 'self-start';
  /**
   * position-try-options 的原生 span-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-all': 'span-all';
  /**
   * position-try-options 的原生 span-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-block-end': 'span-block-end';
  /**
   * position-try-options 的原生 span-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-block-start': 'span-block-start';
  /**
   * position-try-options 的原生 span-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-bottom': 'span-bottom';
  /**
   * position-try-options 的原生 span-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-end': 'span-end';
  /**
   * position-try-options 的原生 span-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-inline-end': 'span-inline-end';
  /**
   * position-try-options 的原生 span-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-inline-start': 'span-inline-start';
  /**
   * position-try-options 的原生 span-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-left': 'span-left';
  /**
   * position-try-options 的原生 span-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-right': 'span-right';
  /**
   * position-try-options 的原生 span-self-block-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-self-block-end': 'span-self-block-end';
  /**
   * position-try-options 的原生 span-self-block-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-self-block-start': 'span-self-block-start';
  /**
   * position-try-options 的原生 span-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-self-end': 'span-self-end';
  /**
   * position-try-options 的原生 span-self-inline-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-self-inline-end': 'span-self-inline-end';
  /**
   * position-try-options 的原生 span-self-inline-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-self-inline-start': 'span-self-inline-start';
  /**
   * position-try-options 的原生 span-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-self-start': 'span-self-start';
  /**
   * position-try-options 的原生 span-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-start': 'span-start';
  /**
   * position-try-options 的原生 span-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-top': 'span-top';
  /**
   * position-try-options 的原生 span-x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-x-end': 'span-x-end';
  /**
   * position-try-options 的原生 span-x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-x-self-end': 'span-x-self-end';
  /**
   * position-try-options 的原生 span-x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-x-self-start': 'span-x-self-start';
  /**
   * position-try-options 的原生 span-x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-x-start': 'span-x-start';
  /**
   * position-try-options 的原生 span-y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-y-end': 'span-y-end';
  /**
   * position-try-options 的原生 span-y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-y-self-end': 'span-y-self-end';
  /**
   * position-try-options 的原生 span-y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-y-self-start': 'span-y-self-start';
  /**
   * position-try-options 的原生 span-y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'span-y-start': 'span-y-start';
  /**
   * position-try-options 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly start: 'start';
  /**
   * position-try-options 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly top: 'top';
  /**
   * position-try-options 的原生 x-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'x-end': 'x-end';
  /**
   * position-try-options 的原生 x-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'x-self-end': 'x-self-end';
  /**
   * position-try-options 的原生 x-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'x-self-start': 'x-self-start';
  /**
   * position-try-options 的原生 x-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'x-start': 'x-start';
  /**
   * position-try-options 的原生 y-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'y-end': 'y-end';
  /**
   * position-try-options 的原生 y-self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'y-self-end': 'y-self-end';
  /**
   * position-try-options 的原生 y-self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'y-self-start': 'y-self-start';
  /**
   * position-try-options 的原生 y-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-options
   */
  readonly 'y-start': 'y-start';
}
export interface PositionTryOrderValues extends CssWideValues {
  /**
   * position-try-order 的原生 most-block-size 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  readonly 'most-block-size': 'most-block-size';
  /**
   * position-try-order 的原生 most-height 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  readonly 'most-height': 'most-height';
  /**
   * position-try-order 的原生 most-inline-size 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  readonly 'most-inline-size': 'most-inline-size';
  /**
   * position-try-order 的原生 most-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  readonly 'most-width': 'most-width';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface PositionVisibilityValues extends CssWideValues {
  /**
   * position-visibility 的原生 always 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  readonly always: 'always';
  /**
   * position-visibility 的原生 anchors-valid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  readonly 'anchors-valid': 'anchors-valid';
  /**
   * position-visibility 的原生 anchors-visible 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  readonly 'anchors-visible': 'anchors-visible';
  /**
   * position-visibility 的原生 no-overflow 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  readonly 'no-overflow': 'no-overflow';
}
export interface PrintColorAdjustValues extends CssWideValues {
  /**
   * print-color-adjust 的原生 economy 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  readonly economy: 'economy';
  /**
   * print-color-adjust 的原生 exact 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  readonly exact: 'exact';
}
export interface QuotesValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface RValues extends CssWideValues {}
export interface ResizeValues extends CssWideValues {
  /**
   * resize 的原生 block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  readonly block: 'block';
  /**
   * resize 的原生 both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  readonly both: 'both';
  /**
   * resize 的原生 horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  readonly horizontal: 'horizontal';
  /**
   * resize 的原生 inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  readonly inline: 'inline';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * resize 的原生 vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  readonly vertical: 'vertical';
}
export interface RightValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface RotateValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface RowGapValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface RubyAlignValues extends CssWideValues {
  /**
   * ruby-align 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  readonly center: 'center';
  /**
   * ruby-align 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  readonly 'space-around': 'space-around';
  /**
   * ruby-align 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  readonly 'space-between': 'space-between';
  /**
   * ruby-align 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  readonly start: 'start';
}
export interface RubyMergeValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * ruby-merge 的原生 collapse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  readonly collapse: 'collapse';
  /**
   * ruby-merge 的原生 separate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  readonly separate: 'separate';
}
export interface RubyOverhangValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface RubyPositionValues extends CssWideValues {
  /**
   * ruby-position 的原生 alternate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  readonly alternate: 'alternate';
  /**
   * ruby-position 的原生 inter-character 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  readonly 'inter-character': 'inter-character';
  /**
   * ruby-position 的原生 over 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  readonly over: 'over';
  /**
   * ruby-position 的原生 under 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  readonly under: 'under';
}
export interface RxValues extends CssWideValues {}
export interface RyValues extends CssWideValues {}
export interface ScaleValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ScrollbarColorValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollbarGutterValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * scrollbar-gutter 的原生 stable 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  readonly stable: 'stable';
}
export interface ScrollbarWidthValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * scrollbar-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  readonly thin: 'thin';
}
export interface ScrollBehaviorValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * scroll-behavior 的原生 smooth 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  readonly smooth: 'smooth';
}
export interface ScrollInitialTargetValues extends CssWideValues {
  /**
   * scroll-initial-target 的原生 nearest 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  readonly nearest: 'nearest';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ScrollMarginValues extends CssWideValues {}
export interface ScrollMarginBlockValues extends CssWideValues {}
export interface ScrollMarginBlockEndValues extends CssWideValues {}
export interface ScrollMarginBlockStartValues extends CssWideValues {}
export interface ScrollMarginBottomValues extends CssWideValues {}
export interface ScrollMarginInlineValues extends CssWideValues {}
export interface ScrollMarginInlineEndValues extends CssWideValues {}
export interface ScrollMarginInlineStartValues extends CssWideValues {}
export interface ScrollMarginLeftValues extends CssWideValues {}
export interface ScrollMarginRightValues extends CssWideValues {}
export interface ScrollMarginTopValues extends CssWideValues {}
export interface ScrollPaddingValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollPaddingBlockValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollPaddingBlockEndValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollPaddingBlockStartValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollPaddingBottomValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollPaddingInlineValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollPaddingInlineEndValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollPaddingInlineStartValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollPaddingLeftValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollPaddingRightValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollPaddingTopValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ScrollSnapAlignValues extends CssWideValues {
  /**
   * scroll-snap-align 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  readonly center: 'center';
  /**
   * scroll-snap-align 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  readonly end: 'end';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * scroll-snap-align 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  readonly start: 'start';
}
export interface ScrollSnapCoordinateValues extends CssWideValues {
  /**
   * scroll-snap-coordinate 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  readonly bottom: 'bottom';
  /**
   * scroll-snap-coordinate 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  readonly center: 'center';
  /**
   * scroll-snap-coordinate 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  readonly left: 'left';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * scroll-snap-coordinate 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  readonly right: 'right';
  /**
   * scroll-snap-coordinate 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-coordinate
   */
  readonly top: 'top';
}
export interface ScrollSnapDestinationValues extends CssWideValues {
  /**
   * scroll-snap-destination 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  readonly bottom: 'bottom';
  /**
   * scroll-snap-destination 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  readonly center: 'center';
  /**
   * scroll-snap-destination 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  readonly left: 'left';
  /**
   * scroll-snap-destination 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  readonly right: 'right';
  /**
   * scroll-snap-destination 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-destination
   */
  readonly top: 'top';
}
export interface ScrollSnapMarginValues extends CssWideValues {}
export interface ScrollSnapMarginBottomValues extends CssWideValues {}
export interface ScrollSnapMarginLeftValues extends CssWideValues {}
export interface ScrollSnapMarginRightValues extends CssWideValues {}
export interface ScrollSnapMarginTopValues extends CssWideValues {}
export interface ScrollSnapPointsXValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ScrollSnapPointsYValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ScrollSnapStopValues extends CssWideValues {
  /**
   * scroll-snap-stop 的原生 always 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  readonly always: 'always';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface ScrollSnapTypeValues extends CssWideValues {
  /**
   * scroll-snap-type 的原生 block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  readonly block: 'block';
  /**
   * scroll-snap-type 的原生 both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  readonly both: 'both';
  /**
   * scroll-snap-type 的原生 inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  readonly inline: 'inline';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * scroll-snap-type 的原生 x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  readonly x: 'x';
  /**
   * scroll-snap-type 的原生 y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  readonly y: 'y';
}
export interface ScrollSnapTypeXValues extends CssWideValues {
  /**
   * scroll-snap-type-x 的原生 mandatory 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-x
   */
  readonly mandatory: 'mandatory';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * scroll-snap-type-x 的原生 proximity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-x
   */
  readonly proximity: 'proximity';
}
export interface ScrollSnapTypeYValues extends CssWideValues {
  /**
   * scroll-snap-type-y 的原生 mandatory 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-y
   */
  readonly mandatory: 'mandatory';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * scroll-snap-type-y 的原生 proximity 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type-y
   */
  readonly proximity: 'proximity';
}
export interface ScrollTimelineValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ScrollTimelineAxisValues extends CssWideValues {
  /**
   * scroll-timeline-axis 的原生 block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  readonly block: 'block';
  /**
   * scroll-timeline-axis 的原生 inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  readonly inline: 'inline';
  /**
   * scroll-timeline-axis 的原生 x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  readonly x: 'x';
  /**
   * scroll-timeline-axis 的原生 y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  readonly y: 'y';
}
export interface ScrollTimelineNameValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ShapeImageThresholdValues extends CssWideValues {}
export interface ShapeMarginValues extends CssWideValues {}
export interface ShapeOutsideValues extends CssWideValues {
  /**
   * shape-outside 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  readonly 'border-box': 'border-box';
  /**
   * shape-outside 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  readonly 'content-box': 'content-box';
  /**
   * shape-outside 的原生 margin-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  readonly 'margin-box': 'margin-box';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * shape-outside 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  readonly 'padding-box': 'padding-box';
}
export interface ShapeRenderingValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * shape-rendering 的原生 crispEdges 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  readonly crispEdges: 'crispEdges';
  /**
   * shape-rendering 的原生 geometricPrecision 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  readonly geometricPrecision: 'geometricPrecision';
  /**
   * shape-rendering 的原生 optimizeSpeed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  readonly optimizeSpeed: 'optimizeSpeed';
}
export interface SpeakAsValues extends CssWideValues {
  /**
   * speak-as 的原生 digits 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  readonly digits: 'digits';
  /**
   * speak-as 的原生 literal-punctuation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  readonly 'literal-punctuation': 'literal-punctuation';
  /**
   * speak-as 的原生 no-punctuation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  readonly 'no-punctuation': 'no-punctuation';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * speak-as 的原生 spell-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  readonly 'spell-out': 'spell-out';
}
export interface StopColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface StopOpacityValues extends CssWideValues {}
export interface StrokeValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * CSS 颜色关键字 context-fill；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'context-fill': 'context-fill';
  /**
   * CSS 颜色关键字 context-stroke；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'context-stroke': 'context-stroke';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface StrokeColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface StrokeDasharrayValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface StrokeDashoffsetValues extends CssWideValues {}
export interface StrokeLinecapValues extends CssWideValues {
  /**
   * 在端点处平直截断描边，不向外延伸。
   */
  readonly butt: 'butt';
  /**
   * 使用半圆端帽，向端点外延伸半个描边宽度。
   */
  readonly round: 'round';
  /**
   * 使用方形端帽，向端点外延伸半个描边宽度。
   */
  readonly square: 'square';
}
export interface StrokeLinejoinValues extends CssWideValues {
  /**
   * stroke-linejoin 的原生 arcs 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  readonly arcs: 'arcs';
  /**
   * stroke-linejoin 的原生 bevel 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  readonly bevel: 'bevel';
  /**
   * stroke-linejoin 的原生 miter 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  readonly miter: 'miter';
  /**
   * stroke-linejoin 的原生 miter-clip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  readonly 'miter-clip': 'miter-clip';
  /**
   * stroke-linejoin 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  readonly round: 'round';
}
export interface StrokeMiterlimitValues extends CssWideValues {}
export interface StrokeOpacityValues extends CssWideValues {}
export interface StrokeWidthValues extends CssWideValues {}
export interface TableLayoutValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * table-layout 的原生 fixed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  readonly fixed: 'fixed';
}
export interface TabSizeValues extends CssWideValues {}
export interface TextAlignValues extends CssWideValues {
  /**
   * text-align 的原生 -khtml-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly '-khtml-center': '-khtml-center';
  /**
   * text-align 的原生 -khtml-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly '-khtml-left': '-khtml-left';
  /**
   * text-align 的原生 -khtml-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly '-khtml-right': '-khtml-right';
  /**
   * text-align 的原生 -moz-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly '-moz-center': '-moz-center';
  /**
   * text-align 的原生 -moz-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly '-moz-left': '-moz-left';
  /**
   * text-align 的原生 -moz-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly '-moz-right': '-moz-right';
  /**
   * text-align 的原生 -webkit-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly '-webkit-center': '-webkit-center';
  /**
   * text-align 的原生 -webkit-left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly '-webkit-left': '-webkit-left';
  /**
   * text-align 的原生 -webkit-match-parent 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly '-webkit-match-parent': '-webkit-match-parent';
  /**
   * text-align 的原生 -webkit-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly '-webkit-right': '-webkit-right';
  /**
   * 将行内内容在行盒中居中，不会让块盒自身居中。
   */
  readonly center: 'center';
  /**
   * 按当前书写方向的行内结束侧对齐。
   */
  readonly end: 'end';
  /**
   * 调整行内间距使文字两端对齐；最后一行通常由 text-align-last 控制。
   */
  readonly justify: 'justify';
  /**
   * text-align 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly left: 'left';
  /**
   * text-align 的原生 match-parent 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly 'match-parent': 'match-parent';
  /**
   * text-align 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  readonly right: 'right';
  /**
   * 按当前书写方向的行内起始侧对齐。
   */
  readonly start: 'start';
}
export interface TextAlignLastValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * text-align-last 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  readonly center: 'center';
  /**
   * text-align-last 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  readonly end: 'end';
  /**
   * text-align-last 的原生 justify 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  readonly justify: 'justify';
  /**
   * text-align-last 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  readonly left: 'left';
  /**
   * text-align-last 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  readonly right: 'right';
  /**
   * text-align-last 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  readonly start: 'start';
}
export interface TextAnchorValues extends CssWideValues {
  /**
   * text-anchor 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  readonly end: 'end';
  /**
   * text-anchor 的原生 middle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  readonly middle: 'middle';
  /**
   * text-anchor 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  readonly start: 'start';
}
export interface TextAutospaceValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * text-autospace 的原生 ideograph-alpha 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly 'ideograph-alpha': 'ideograph-alpha';
  /**
   * text-autospace 的原生 ideograph-numeric 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly 'ideograph-numeric': 'ideograph-numeric';
  /**
   * text-autospace 的原生 insert 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly insert: 'insert';
  /**
   * text-autospace 的原生 no-autospace 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly 'no-autospace': 'no-autospace';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * text-autospace 的原生 punctuation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly punctuation: 'punctuation';
  /**
   * text-autospace 的原生 replace 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  readonly replace: 'replace';
}
export interface TextBoxValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * text-box 的原生 cap 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly cap: 'cap';
  /**
   * text-box 的原生 ex 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly ex: 'ex';
  /**
   * text-box 的原生 ideographic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly ideographic: 'ideographic';
  /**
   * text-box 的原生 ideographic-ink 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly 'ideographic-ink': 'ideographic-ink';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * text-box 的原生 text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly text: 'text';
  /**
   * text-box 的原生 trim-both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly 'trim-both': 'trim-both';
  /**
   * text-box 的原生 trim-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly 'trim-end': 'trim-end';
  /**
   * text-box 的原生 trim-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  readonly 'trim-start': 'trim-start';
}
export interface TextBoxEdgeValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * text-box-edge 的原生 cap 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  readonly cap: 'cap';
  /**
   * text-box-edge 的原生 ex 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  readonly ex: 'ex';
  /**
   * text-box-edge 的原生 ideographic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  readonly ideographic: 'ideographic';
  /**
   * text-box-edge 的原生 ideographic-ink 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  readonly 'ideographic-ink': 'ideographic-ink';
  /**
   * text-box-edge 的原生 text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  readonly text: 'text';
}
export interface TextBoxTrimValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * text-box-trim 的原生 trim-both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  readonly 'trim-both': 'trim-both';
  /**
   * text-box-trim 的原生 trim-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  readonly 'trim-end': 'trim-end';
  /**
   * text-box-trim 的原生 trim-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  readonly 'trim-start': 'trim-start';
}
export interface TextCombineUprightValues extends CssWideValues {
  /**
   * text-combine-upright 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  readonly all: 'all';
  /**
   * text-combine-upright 的原生 digits 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  readonly digits: 'digits';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface TextDecorationValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * CSS 颜色关键字 blink；系统颜色会随用户环境和配色设置变化。
   */
  readonly blink: 'blink';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 from-font；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'from-font': 'from-font';
  /**
   * CSS 颜色关键字 grammar-error；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'grammar-error': 'grammar-error';
  /**
   * CSS 颜色关键字 line-through；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'line-through': 'line-through';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 overline；系统颜色会随用户环境和配色设置变化。
   */
  readonly overline: 'overline';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 spelling-error；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'spelling-error': 'spelling-error';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
  /**
   * CSS 颜色关键字 underline；系统颜色会随用户环境和配色设置变化。
   */
  readonly underline: 'underline';
  /**
   * CSS 颜色关键字 wavy；系统颜色会随用户环境和配色设置变化。
   */
  readonly wavy: 'wavy';
}
export interface TextDecorationColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface TextDecorationLineValues extends CssWideValues {
  /**
   * text-decoration-line 的原生 blink 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly blink: 'blink';
  /**
   * text-decoration-line 的原生 grammar-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly 'grammar-error': 'grammar-error';
  /**
   * text-decoration-line 的原生 line-through 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly 'line-through': 'line-through';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * text-decoration-line 的原生 overline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly overline: 'overline';
  /**
   * text-decoration-line 的原生 spelling-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly 'spelling-error': 'spelling-error';
  /**
   * text-decoration-line 的原生 underline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  readonly underline: 'underline';
}
export interface TextDecorationSkipValues extends CssWideValues {
  /**
   * text-decoration-skip 的原生 box-decoration 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly 'box-decoration': 'box-decoration';
  /**
   * text-decoration-skip 的原生 edges 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly edges: 'edges';
  /**
   * text-decoration-skip 的原生 leading-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly 'leading-spaces': 'leading-spaces';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * text-decoration-skip 的原生 objects 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly objects: 'objects';
  /**
   * text-decoration-skip 的原生 spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly spaces: 'spaces';
  /**
   * text-decoration-skip 的原生 trailing-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  readonly 'trailing-spaces': 'trailing-spaces';
}
export interface TextDecorationSkipInkValues extends CssWideValues {
  /**
   * text-decoration-skip-ink 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  readonly all: 'all';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface TextDecorationStyleValues extends CssWideValues {
  /**
   * text-decoration-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  readonly dashed: 'dashed';
  /**
   * text-decoration-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  readonly dotted: 'dotted';
  /**
   * text-decoration-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  readonly double: 'double';
  /**
   * text-decoration-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  readonly solid: 'solid';
  /**
   * text-decoration-style 的原生 wavy 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  readonly wavy: 'wavy';
}
export interface TextDecorationThicknessValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * text-decoration-thickness 的原生 from-font 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  readonly 'from-font': 'from-font';
}
export interface TextEmphasisValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * CSS 颜色关键字 circle；系统颜色会随用户环境和配色设置变化。
   */
  readonly circle: 'circle';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dot；系统颜色会随用户环境和配色设置变化。
   */
  readonly dot: 'dot';
  /**
   * CSS 颜色关键字 double-circle；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'double-circle': 'double-circle';
  /**
   * CSS 颜色关键字 filled；系统颜色会随用户环境和配色设置变化。
   */
  readonly filled: 'filled';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 open；系统颜色会随用户环境和配色设置变化。
   */
  readonly open: 'open';
  /**
   * CSS 颜色关键字 sesame；系统颜色会随用户环境和配色设置变化。
   */
  readonly sesame: 'sesame';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
  /**
   * CSS 颜色关键字 triangle；系统颜色会随用户环境和配色设置变化。
   */
  readonly triangle: 'triangle';
}
export interface TextEmphasisColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface TextEmphasisPositionValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * text-emphasis-position 的原生 over 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  readonly over: 'over';
  /**
   * text-emphasis-position 的原生 under 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  readonly under: 'under';
}
export interface TextEmphasisStyleValues extends CssWideValues {
  /**
   * text-emphasis-style 的原生 circle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  readonly circle: 'circle';
  /**
   * text-emphasis-style 的原生 dot 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  readonly dot: 'dot';
  /**
   * text-emphasis-style 的原生 double-circle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  readonly 'double-circle': 'double-circle';
  /**
   * text-emphasis-style 的原生 filled 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  readonly filled: 'filled';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * text-emphasis-style 的原生 open 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  readonly open: 'open';
  /**
   * text-emphasis-style 的原生 sesame 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  readonly sesame: 'sesame';
  /**
   * text-emphasis-style 的原生 triangle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  readonly triangle: 'triangle';
}
export interface TextIndentValues extends CssWideValues {}
export interface TextJustifyValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * text-justify 的原生 distribute 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  readonly distribute: 'distribute';
  /**
   * text-justify 的原生 inter-character 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  readonly 'inter-character': 'inter-character';
  /**
   * text-justify 的原生 inter-word 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  readonly 'inter-word': 'inter-word';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface TextOrientationValues extends CssWideValues {
  /**
   * text-orientation 的原生 mixed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  readonly mixed: 'mixed';
  /**
   * text-orientation 的原生 sideways 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  readonly sideways: 'sideways';
  /**
   * text-orientation 的原生 sideways-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  readonly 'sideways-right': 'sideways-right';
  /**
   * text-orientation 的原生 upright 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  readonly upright: 'upright';
}
export interface TextOverflowValues extends CssWideValues {
  /**
   * 直接裁剪溢出文本，不添加省略标记。
   */
  readonly clip: 'clip';
  /**
   * 用省略号提示被裁剪的行内溢出；还需要限制尺寸并配置溢出规则。
   *
   * 适用场景：给确实发生行内溢出的单行内容添加省略提示。
   *
   * 不会自动限制宽度、禁用换行或实现多行省略。Flex/Grid 子项还可能需要 min-width:0。
   *
   * @example
   * css({ minWidth: "0px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" })
   */
  readonly ellipsis: 'ellipsis';
}
export interface TextRenderingValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * text-rendering 的原生 geometricPrecision 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  readonly geometricPrecision: 'geometricPrecision';
  /**
   * text-rendering 的原生 optimizeLegibility 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  readonly optimizeLegibility: 'optimizeLegibility';
  /**
   * text-rendering 的原生 optimizeSpeed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  readonly optimizeSpeed: 'optimizeSpeed';
}
export interface TextShadowValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface TextSizeAdjustValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface TextSpacingTrimValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * text-spacing-trim 的原生 space-all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  readonly 'space-all': 'space-all';
  /**
   * text-spacing-trim 的原生 space-first 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  readonly 'space-first': 'space-first';
  /**
   * text-spacing-trim 的原生 trim-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  readonly 'trim-start': 'trim-start';
}
export interface TextTransformValues extends CssWideValues {
  /**
   * text-transform 的原生 capitalize 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly capitalize: 'capitalize';
  /**
   * text-transform 的原生 full-size-kana 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly 'full-size-kana': 'full-size-kana';
  /**
   * text-transform 的原生 full-width 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly 'full-width': 'full-width';
  /**
   * text-transform 的原生 lowercase 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly lowercase: 'lowercase';
  /**
   * text-transform 的原生 math-auto 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly 'math-auto': 'math-auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * text-transform 的原生 uppercase 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  readonly uppercase: 'uppercase';
}
export interface TextUnderlineOffsetValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface TextUnderlinePositionValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * text-underline-position 的原生 from-font 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  readonly 'from-font': 'from-font';
  /**
   * text-underline-position 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  readonly left: 'left';
  /**
   * text-underline-position 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  readonly right: 'right';
  /**
   * text-underline-position 的原生 under 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  readonly under: 'under';
}
export interface TextWrapValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 尝试让各行长度更均衡，常用于标题；可处理行数由浏览器决定。
   */
  readonly balance: 'balance';
  /**
   * 禁止软换行，但不取消显式强制换行。
   */
  readonly nowrap: 'nowrap';
  /**
   * 使用偏向排版质量的换行策略，例如减少末行孤立短词。
   */
  readonly pretty: 'pretty';
  /**
   * 编辑时尽量不改变较早行的换行位置。
   */
  readonly stable: 'stable';
  /**
   * 允许软换行。
   */
  readonly wrap: 'wrap';
}
export interface TextWrapModeValues extends CssWideValues {
  /**
   * 禁止软换行，但不取消显式强制换行。
   */
  readonly nowrap: 'nowrap';
  /**
   * 允许软换行。
   */
  readonly wrap: 'wrap';
}
export interface TextWrapStyleValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 尝试让各行长度更均衡，常用于标题；可处理行数由浏览器决定。
   */
  readonly balance: 'balance';
  /**
   * 使用偏向排版质量的换行策略，例如减少末行孤立短词。
   */
  readonly pretty: 'pretty';
  /**
   * 编辑时尽量不改变较早行的换行位置。
   */
  readonly stable: 'stable';
}
export interface TimelineScopeValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface TopValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface TouchActionValues extends CssWideValues {
  /**
   * touch-action 的原生 -ms-manipulation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly '-ms-manipulation': '-ms-manipulation';
  /**
   * touch-action 的原生 -ms-none 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly '-ms-none': '-ms-none';
  /**
   * touch-action 的原生 -ms-pan-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly '-ms-pan-x': '-ms-pan-x';
  /**
   * touch-action 的原生 -ms-pan-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly '-ms-pan-y': '-ms-pan-y';
  /**
   * touch-action 的原生 -ms-pinch-zoom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  readonly '-ms-pinch-zoom': '-ms-pinch-zoom';
  /**
   * 允许浏览器处理平移和缩放手势；最终允许的手势还受相关祖先元素的 touch-action 约束。
   */
  readonly auto: 'auto';
  /**
   * 允许平移和连续缩放，通常禁用双击缩放等额外手势。
   */
  readonly manipulation: 'manipulation';
  /**
   * 禁用浏览器在该区域处理的平移和缩放手势，可能影响用户缩放可访问性。
   */
  readonly none: 'none';
  /**
   * 允许以向下滚动开始的单指平移，即手指最初向上移动；开始后仍可反向滚动。
   */
  readonly 'pan-down': 'pan-down';
  /**
   * 允许以向左滚动开始的单指平移，手指起始移动方向相反；开始后仍可反向滚动。
   */
  readonly 'pan-left': 'pan-left';
  /**
   * 允许以向右滚动开始的单指平移，手指起始移动方向相反；开始后仍可反向滚动。
   */
  readonly 'pan-right': 'pan-right';
  /**
   * 允许以向上滚动开始的单指平移，即手指最初向下移动；开始后仍可反向滚动。
   */
  readonly 'pan-up': 'pan-up';
  /**
   * 允许浏览器处理水平单指平移。
   */
  readonly 'pan-x': 'pan-x';
  /**
   * 允许浏览器处理垂直单指平移。
   */
  readonly 'pan-y': 'pan-y';
  /**
   * 允许浏览器处理多指缩放和平移，可与 pan-x、pan-y 等单指方向规则组合。
   */
  readonly 'pinch-zoom': 'pinch-zoom';
}
export interface TransformValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface TransformBoxValues extends CssWideValues {
  /**
   * transform-box 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly 'border-box': 'border-box';
  /**
   * transform-box 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly 'content-box': 'content-box';
  /**
   * transform-box 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly 'fill-box': 'fill-box';
  /**
   * transform-box 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * transform-box 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  readonly 'view-box': 'view-box';
}
export interface TransformOriginValues extends CssWideValues {
  /**
   * transform-origin 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  readonly bottom: 'bottom';
  /**
   * transform-origin 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  readonly center: 'center';
  /**
   * transform-origin 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  readonly left: 'left';
  /**
   * transform-origin 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  readonly right: 'right';
  /**
   * transform-origin 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  readonly top: 'top';
}
export interface TransformStyleValues extends CssWideValues {
  /**
   * 将子元素的三维位置展平到当前元素的平面；这是初始行为，并非移除子元素自身的 transform。
   */
  readonly flat: 'flat';
  /**
   * 让子元素继续处于三维空间，适合多层三维场景。
   *
   * 区别：flat 会将后代展平到当前元素的平面；preserve-3d 本身不提供透视效果。
   *
   * 该属性不继承，需要在参与三维层级的中间元素上设置；opacity 小于 1、非 none 的 filter 等分组效果仍可能强制展平。
   *
   * @example
   * css({ transformStyle: "preserve-3d" })
   */
  readonly 'preserve-3d': 'preserve-3d';
}
export interface TransitionValues extends CssWideValues {
  /**
   * transition 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly all: 'all';
  /**
   * transition 的原生 allow-discrete 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly 'allow-discrete': 'allow-discrete';
  /**
   * transition 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly ease: 'ease';
  /**
   * transition 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly 'ease-in': 'ease-in';
  /**
   * transition 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * transition 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly 'ease-out': 'ease-out';
  /**
   * transition 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly linear: 'linear';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * transition 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly 'step-end': 'step-end';
  /**
   * transition 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  readonly 'step-start': 'step-start';
}
export interface TransitionBehaviorValues extends CssWideValues {
  /**
   * 允许离散属性启动过渡；切换时机仍由各属性的动画规则决定。
   */
  readonly 'allow-discrete': 'allow-discrete';
  /**
   * 不为离散属性启动普通 CSS 过渡。
   */
  readonly normal: 'normal';
}
export interface TransitionDelayValues extends CssWideValues {}
export interface TransitionDurationValues extends CssWideValues {}
export interface TransitionPropertyValues extends CssWideValues {
  /**
   * transition-property 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  readonly all: 'all';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface TransitionTimingFunctionValues extends CssWideValues {
  /**
   * transition-timing-function 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly ease: 'ease';
  /**
   * transition-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly 'ease-in': 'ease-in';
  /**
   * transition-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * transition-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly 'ease-out': 'ease-out';
  /**
   * transition-timing-function 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly linear: 'linear';
  /**
   * transition-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly 'step-end': 'step-end';
  /**
   * transition-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  readonly 'step-start': 'step-start';
}
export interface TranslateValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface UnicodeBidiValues extends CssWideValues {
  /**
   * unicode-bidi 的原生 -moz-isolate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly '-moz-isolate': '-moz-isolate';
  /**
   * unicode-bidi 的原生 -moz-isolate-override 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly '-moz-isolate-override': '-moz-isolate-override';
  /**
   * unicode-bidi 的原生 -moz-plaintext 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly '-moz-plaintext': '-moz-plaintext';
  /**
   * unicode-bidi 的原生 -webkit-isolate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly '-webkit-isolate': '-webkit-isolate';
  /**
   * unicode-bidi 的原生 -webkit-isolate-override 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly '-webkit-isolate-override': '-webkit-isolate-override';
  /**
   * unicode-bidi 的原生 -webkit-plaintext 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly '-webkit-plaintext': '-webkit-plaintext';
  /**
   * unicode-bidi 的原生 bidi-override 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly 'bidi-override': 'bidi-override';
  /**
   * unicode-bidi 的原生 embed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly embed: 'embed';
  /**
   * unicode-bidi 的原生 isolate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly isolate: 'isolate';
  /**
   * unicode-bidi 的原生 isolate-override 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly 'isolate-override': 'isolate-override';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * unicode-bidi 的原生 plaintext 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  readonly plaintext: 'plaintext';
}
export interface UserSelectValues extends CssWideValues {
  /**
   * user-select 的原生 -moz-none 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  readonly '-moz-none': '-moz-none';
  /**
   * 将元素内容作为整体选取单元。
   */
  readonly all: 'all';
  /**
   * 由父级与元素上下文决定使用的选取行为。
   */
  readonly auto: 'auto';
  /**
   * 阻止常规文本选取，不是内容保护或访问控制。
   */
  readonly none: 'none';
  /**
   * 允许文本选取。
   */
  readonly text: 'text';
}
export interface VectorEffectValues extends CssWideValues {
  /**
   * vector-effect 的原生 fixed-position 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  readonly 'fixed-position': 'fixed-position';
  /**
   * vector-effect 的原生 non-rotation 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  readonly 'non-rotation': 'non-rotation';
  /**
   * vector-effect 的原生 non-scaling-size 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  readonly 'non-scaling-size': 'non-scaling-size';
  /**
   * vector-effect 的原生 non-scaling-stroke 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  readonly 'non-scaling-stroke': 'non-scaling-stroke';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface VerticalAlignValues extends CssWideValues {
  /**
   * vertical-align 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly baseline: 'baseline';
  /**
   * vertical-align 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly bottom: 'bottom';
  /**
   * vertical-align 的原生 middle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly middle: 'middle';
  /**
   * vertical-align 的原生 sub 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly sub: 'sub';
  /**
   * vertical-align 的原生 super 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly super: 'super';
  /**
   * vertical-align 的原生 text-bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly 'text-bottom': 'text-bottom';
  /**
   * vertical-align 的原生 text-top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly 'text-top': 'text-top';
  /**
   * vertical-align 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  readonly top: 'top';
}
export interface ViewTimelineValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ViewTimelineAxisValues extends CssWideValues {
  /**
   * view-timeline-axis 的原生 block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  readonly block: 'block';
  /**
   * view-timeline-axis 的原生 inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  readonly inline: 'inline';
  /**
   * view-timeline-axis 的原生 x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  readonly x: 'x';
  /**
   * view-timeline-axis 的原生 y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  readonly y: 'y';
}
export interface ViewTimelineInsetValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ViewTimelineNameValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ViewTransitionClassValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface ViewTransitionNameValues extends CssWideValues {
  /**
   * view-transition-name 的原生 match-element 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  readonly 'match-element': 'match-element';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface VisibilityValues extends CssWideValues {
  /**
   * 对表格行列等特定布局有折叠语义，其他场景通常类似 hidden；应核对具体布局行为。
   */
  readonly collapse: 'collapse';
  /**
   * 隐藏绘制但通常保留布局空间；后代可显式恢复 visible。
   *
   * 区别：display:none 不保留布局盒；opacity:0 不会以相同方式移除交互和可访问性。
   *
   * 适用场景：暂时隐藏占位内容。
   *
   * @example
   * css({ visibility: "hidden" })
   */
  readonly hidden: 'hidden';
  /**
   * 正常显示元素。
   */
  readonly visible: 'visible';
}
export interface WebkitAlignContentValues extends CssWideValues {
  /**
   * -webkit-align-content 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly baseline: 'baseline';
  /**
   * -webkit-align-content 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly center: 'center';
  /**
   * -webkit-align-content 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly end: 'end';
  /**
   * -webkit-align-content 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly 'flex-end': 'flex-end';
  /**
   * -webkit-align-content 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -webkit-align-content 的原生 space-around 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly 'space-around': 'space-around';
  /**
   * -webkit-align-content 的原生 space-between 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly 'space-between': 'space-between';
  /**
   * -webkit-align-content 的原生 space-evenly 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly 'space-evenly': 'space-evenly';
  /**
   * -webkit-align-content 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly start: 'start';
  /**
   * -webkit-align-content 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-content
   */
  readonly stretch: 'stretch';
}
export interface WebkitAlignItemsValues extends CssWideValues {
  /**
   * 对锚点定位的元素，沿块方向与关联锚点的中心对齐；需同时具有有效的锚点定位关系。
   */
  readonly 'anchor-center': 'anchor-center';
  /**
   * 按项目的对齐基线对齐，不等同于底边对齐。
   */
  readonly baseline: 'baseline';
  /**
   * 将各项目在交叉轴或块轴的对齐区域中居中。
   *
   * 区别：justify-content 控制 Flex 主轴上的内容分布；align-items 控制交叉轴。
   *
   * 适用场景：横向图标和文字的垂直对齐。
   *
   * @example
   * css({ display: "inline-flex", alignItems: "center" })
   */
  readonly center: 'center';
  /**
   * 按对齐轴的逻辑结束侧对齐。
   */
  readonly end: 'end';
  /**
   * 在 Flex 中按交叉轴结束侧对齐。
   */
  readonly 'flex-end': 'flex-end';
  /**
   * 在 Flex 中按交叉轴起始侧对齐；交叉轴方向受换行方式影响。
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 由布局模式决定行为，许多场景类似 stretch，但存在内部尺寸等例外。
   */
  readonly normal: 'normal';
  /**
   * 按项目自身书写方向的结束侧对齐；不同于总按容器方向计算的 end。
   */
  readonly 'self-end': 'self-end';
  /**
   * 按项目自身书写方向的起始侧对齐；项目与容器书写方向不同时，结果可能不同于 start。
   */
  readonly 'self-start': 'self-start';
  /**
   * 按对齐轴的逻辑起始侧对齐。
   */
  readonly start: 'start';
  /**
   * 在自动尺寸及最小/最大约束允许时拉伸项目，不强制覆盖显式尺寸。
   *
   * 区别：center 保持项目尺寸并居中；stretch 尝试扩大自动尺寸。
   *
   * 项目在对齐轴有显式尺寸或受最小/最大尺寸约束时，不一定填满可用区域。
   *
   * @example
   * css({ display: "flex", alignItems: "stretch" })
   */
  readonly stretch: 'stretch';
}
export interface WebkitAlignSelfValues extends CssWideValues {
  /**
   * -webkit-align-self 的原生 anchor-center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly 'anchor-center': 'anchor-center';
  /**
   * 使用父容器的 align-items 对齐方式。
   */
  readonly auto: 'auto';
  /**
   * 让当前项目参与基线对齐，不等同于底边对齐。
   */
  readonly baseline: 'baseline';
  /**
   * -webkit-align-self 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly center: 'center';
  /**
   * -webkit-align-self 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly end: 'end';
  /**
   * -webkit-align-self 的原生 flex-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly 'flex-end': 'flex-end';
  /**
   * -webkit-align-self 的原生 flex-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -webkit-align-self 的原生 self-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly 'self-end': 'self-end';
  /**
   * -webkit-align-self 的原生 self-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly 'self-start': 'self-start';
  /**
   * -webkit-align-self 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-align-self
   */
  readonly start: 'start';
  /**
   * 在自动尺寸和最小/最大约束允许时拉伸当前项目。
   */
  readonly stretch: 'stretch';
}
export interface WebkitAnimationValues extends CssWideValues {
  /**
   * -webkit-animation 的原生 alternate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly alternate: 'alternate';
  /**
   * -webkit-animation 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly 'alternate-reverse': 'alternate-reverse';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -webkit-animation 的原生 backwards 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly backwards: 'backwards';
  /**
   * -webkit-animation 的原生 both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly both: 'both';
  /**
   * -webkit-animation 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly ease: 'ease';
  /**
   * -webkit-animation 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -webkit-animation 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -webkit-animation 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -webkit-animation 的原生 forwards 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly forwards: 'forwards';
  /**
   * -webkit-animation 的原生 infinite 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly infinite: 'infinite';
  /**
   * -webkit-animation 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly linear: 'linear';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -webkit-animation 的原生 paused 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly paused: 'paused';
  /**
   * -webkit-animation 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly reverse: 'reverse';
  /**
   * -webkit-animation 的原生 running 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly running: 'running';
  /**
   * -webkit-animation 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly 'step-end': 'step-end';
  /**
   * -webkit-animation 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation
   */
  readonly 'step-start': 'step-start';
}
export interface WebkitAnimationDelayValues extends CssWideValues {}
export interface WebkitAnimationDirectionValues extends CssWideValues {
  /**
   * -webkit-animation-direction 的原生 alternate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  readonly alternate: 'alternate';
  /**
   * -webkit-animation-direction 的原生 alternate-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  readonly 'alternate-reverse': 'alternate-reverse';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -webkit-animation-direction 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-direction
   */
  readonly reverse: 'reverse';
}
export interface WebkitAnimationDurationValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface WebkitAnimationFillModeValues extends CssWideValues {
  /**
   * 延迟阶段应用最先生效关键帧的效果，具体帧取决于播放方向。
   */
  readonly backwards: 'backwards';
  /**
   * 同时应用 backwards 和 forwards 的区间外效果。
   */
  readonly both: 'both';
  /**
   * 播放结束后保留最后生效关键帧的效果；最后帧取决于方向和循环次数。
   */
  readonly forwards: 'forwards';
  /**
   * 动画有效区间之外不应用动画关键帧值。
   */
  readonly none: 'none';
}
export interface WebkitAnimationIterationCountValues extends CssWideValues {
  /**
   * -webkit-animation-iteration-count 的原生 infinite 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-iteration-count
   */
  readonly infinite: 'infinite';
}
export interface WebkitAnimationNameValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitAnimationPlayStateValues extends CssWideValues {
  /**
   * -webkit-animation-play-state 的原生 paused 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-play-state
   */
  readonly paused: 'paused';
  /**
   * -webkit-animation-play-state 的原生 running 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-play-state
   */
  readonly running: 'running';
}
export interface WebkitAnimationTimingFunctionValues extends CssWideValues {
  /**
   * -webkit-animation-timing-function 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly ease: 'ease';
  /**
   * -webkit-animation-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -webkit-animation-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -webkit-animation-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -webkit-animation-timing-function 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly linear: 'linear';
  /**
   * -webkit-animation-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly 'step-end': 'step-end';
  /**
   * -webkit-animation-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-animation-timing-function
   */
  readonly 'step-start': 'step-start';
}
export interface WebkitAppearanceValues extends CssWideValues {
  /**
   * -webkit-appearance 的原生 -apple-pay-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly '-apple-pay-button': '-apple-pay-button';
  /**
   * -webkit-appearance 的原生 button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly button: 'button';
  /**
   * -webkit-appearance 的原生 button-bevel 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'button-bevel': 'button-bevel';
  /**
   * -webkit-appearance 的原生 caret 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly caret: 'caret';
  /**
   * -webkit-appearance 的原生 checkbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly checkbox: 'checkbox';
  /**
   * -webkit-appearance 的原生 default-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'default-button': 'default-button';
  /**
   * -webkit-appearance 的原生 inner-spin-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'inner-spin-button': 'inner-spin-button';
  /**
   * -webkit-appearance 的原生 listbox 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly listbox: 'listbox';
  /**
   * -webkit-appearance 的原生 listitem 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly listitem: 'listitem';
  /**
   * -webkit-appearance 的原生 media-controls-background 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-controls-background': 'media-controls-background';
  /**
   * -webkit-appearance 的原生 media-controls-fullscreen-background 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-controls-fullscreen-background': 'media-controls-fullscreen-background';
  /**
   * -webkit-appearance 的原生 media-current-time-display 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-current-time-display': 'media-current-time-display';
  /**
   * -webkit-appearance 的原生 media-enter-fullscreen-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-enter-fullscreen-button': 'media-enter-fullscreen-button';
  /**
   * -webkit-appearance 的原生 media-exit-fullscreen-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-exit-fullscreen-button': 'media-exit-fullscreen-button';
  /**
   * -webkit-appearance 的原生 media-fullscreen-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-fullscreen-button': 'media-fullscreen-button';
  /**
   * -webkit-appearance 的原生 media-mute-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-mute-button': 'media-mute-button';
  /**
   * -webkit-appearance 的原生 media-overlay-play-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-overlay-play-button': 'media-overlay-play-button';
  /**
   * -webkit-appearance 的原生 media-play-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-play-button': 'media-play-button';
  /**
   * -webkit-appearance 的原生 media-seek-back-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-seek-back-button': 'media-seek-back-button';
  /**
   * -webkit-appearance 的原生 media-seek-forward-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-seek-forward-button': 'media-seek-forward-button';
  /**
   * -webkit-appearance 的原生 media-slider 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-slider': 'media-slider';
  /**
   * -webkit-appearance 的原生 media-sliderthumb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-sliderthumb': 'media-sliderthumb';
  /**
   * -webkit-appearance 的原生 media-time-remaining-display 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-time-remaining-display': 'media-time-remaining-display';
  /**
   * -webkit-appearance 的原生 media-toggle-closed-captions-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-toggle-closed-captions-button': 'media-toggle-closed-captions-button';
  /**
   * -webkit-appearance 的原生 media-volume-slider 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-volume-slider': 'media-volume-slider';
  /**
   * -webkit-appearance 的原生 media-volume-slider-container 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-volume-slider-container': 'media-volume-slider-container';
  /**
   * -webkit-appearance 的原生 media-volume-sliderthumb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'media-volume-sliderthumb': 'media-volume-sliderthumb';
  /**
   * -webkit-appearance 的原生 menulist 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly menulist: 'menulist';
  /**
   * -webkit-appearance 的原生 menulist-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'menulist-button': 'menulist-button';
  /**
   * -webkit-appearance 的原生 menulist-text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'menulist-text': 'menulist-text';
  /**
   * -webkit-appearance 的原生 menulist-textfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'menulist-textfield': 'menulist-textfield';
  /**
   * -webkit-appearance 的原生 meter 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly meter: 'meter';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-appearance 的原生 progress-bar 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'progress-bar': 'progress-bar';
  /**
   * -webkit-appearance 的原生 progress-bar-value 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'progress-bar-value': 'progress-bar-value';
  /**
   * -webkit-appearance 的原生 push-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'push-button': 'push-button';
  /**
   * -webkit-appearance 的原生 radio 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly radio: 'radio';
  /**
   * -webkit-appearance 的原生 searchfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly searchfield: 'searchfield';
  /**
   * -webkit-appearance 的原生 searchfield-cancel-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'searchfield-cancel-button': 'searchfield-cancel-button';
  /**
   * -webkit-appearance 的原生 searchfield-decoration 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'searchfield-decoration': 'searchfield-decoration';
  /**
   * -webkit-appearance 的原生 searchfield-results-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'searchfield-results-button': 'searchfield-results-button';
  /**
   * -webkit-appearance 的原生 searchfield-results-decoration 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'searchfield-results-decoration': 'searchfield-results-decoration';
  /**
   * -webkit-appearance 的原生 slider-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'slider-horizontal': 'slider-horizontal';
  /**
   * -webkit-appearance 的原生 slider-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'slider-vertical': 'slider-vertical';
  /**
   * -webkit-appearance 的原生 sliderthumb-horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'sliderthumb-horizontal': 'sliderthumb-horizontal';
  /**
   * -webkit-appearance 的原生 sliderthumb-vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'sliderthumb-vertical': 'sliderthumb-vertical';
  /**
   * -webkit-appearance 的原生 square-button 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly 'square-button': 'square-button';
  /**
   * -webkit-appearance 的原生 textarea 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly textarea: 'textarea';
  /**
   * -webkit-appearance 的原生 textfield 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-appearance
   */
  readonly textfield: 'textfield';
}
export interface WebkitBackdropFilterValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitBackfaceVisibilityValues extends CssWideValues {
  /**
   * -webkit-backface-visibility 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backface-visibility
   */
  readonly hidden: 'hidden';
  /**
   * -webkit-backface-visibility 的原生 visible 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-backface-visibility
   */
  readonly visible: 'visible';
}
export interface WebkitBackgroundClipValues extends CssWideValues {
  /**
   * -webkit-background-clip 的原生 border-area 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  readonly 'border-area': 'border-area';
  /**
   * -webkit-background-clip 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  readonly 'border-box': 'border-box';
  /**
   * -webkit-background-clip 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  readonly 'content-box': 'content-box';
  /**
   * -webkit-background-clip 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-clip
   */
  readonly 'padding-box': 'padding-box';
  /**
   * 把背景裁剪到文字字形；显示背景文字效果通常还需要透明的文字颜色。
   */
  readonly text: 'text';
}
export interface WebkitBackgroundOriginValues extends CssWideValues {
  /**
   * -webkit-background-origin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  readonly 'border-box': 'border-box';
  /**
   * -webkit-background-origin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  readonly 'content-box': 'content-box';
  /**
   * -webkit-background-origin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-background-origin
   */
  readonly 'padding-box': 'padding-box';
}
export interface WebkitBackgroundSizeValues extends CssWideValues {
  /**
   * 依据图像内部尺寸、比例及另一维的设置确定尺寸。
   */
  readonly auto: 'auto';
  /**
   * 保持图像比例并使整张图像容纳于定位区域，可能留下空白。
   */
  readonly contain: 'contain';
  /**
   * 保持图像比例并覆盖整个定位区域，超出部分可能被裁剪。
   */
  readonly cover: 'cover';
}
export interface WebkitBorderBeforeValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface WebkitBorderBeforeColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface WebkitBorderBeforeStyleValues extends CssWideValues {
  /**
   * -webkit-border-before-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly dashed: 'dashed';
  /**
   * -webkit-border-before-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly dotted: 'dotted';
  /**
   * -webkit-border-before-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly double: 'double';
  /**
   * -webkit-border-before-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly groove: 'groove';
  /**
   * -webkit-border-before-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly hidden: 'hidden';
  /**
   * -webkit-border-before-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-border-before-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly outset: 'outset';
  /**
   * -webkit-border-before-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly ridge: 'ridge';
  /**
   * -webkit-border-before-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-style
   */
  readonly solid: 'solid';
}
export interface WebkitBorderBeforeWidthValues extends CssWideValues {
  /**
   * -webkit-border-before-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  readonly medium: 'medium';
  /**
   * -webkit-border-before-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  readonly thick: 'thick';
  /**
   * -webkit-border-before-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-before-width
   */
  readonly thin: 'thin';
}
export interface WebkitBorderBottomLeftRadiusValues extends CssWideValues {}
export interface WebkitBorderBottomRightRadiusValues extends CssWideValues {}
export interface WebkitBorderImageValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-border-image 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  readonly repeat: 'repeat';
  /**
   * -webkit-border-image 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  readonly round: 'round';
  /**
   * -webkit-border-image 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  readonly space: 'space';
  /**
   * -webkit-border-image 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-border-image
   */
  readonly stretch: 'stretch';
}
export interface WebkitBorderImageSliceValues extends CssWideValues {}
export interface WebkitBorderRadiusValues extends CssWideValues {}
export interface WebkitBorderTopLeftRadiusValues extends CssWideValues {}
export interface WebkitBorderTopRightRadiusValues extends CssWideValues {}
export interface WebkitBoxAlignValues extends CssWideValues {
  /**
   * -webkit-box-align 的原生 baseline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-align
   */
  readonly baseline: 'baseline';
  /**
   * -webkit-box-align 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-align
   */
  readonly center: 'center';
  /**
   * -webkit-box-align 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-align
   */
  readonly end: 'end';
  /**
   * -webkit-box-align 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-align
   */
  readonly start: 'start';
  /**
   * -webkit-box-align 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-align
   */
  readonly stretch: 'stretch';
}
export interface WebkitBoxDecorationBreakValues extends CssWideValues {
  /**
   * -webkit-box-decoration-break 的原生 clone 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-decoration-break
   */
  readonly clone: 'clone';
  /**
   * -webkit-box-decoration-break 的原生 slice 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-decoration-break
   */
  readonly slice: 'slice';
}
export interface WebkitBoxDirectionValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -webkit-box-direction 的原生 reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-direction
   */
  readonly reverse: 'reverse';
}
export interface WebkitBoxFlexValues extends CssWideValues {}
export interface WebkitBoxFlexGroupValues extends CssWideValues {}
export interface WebkitBoxLinesValues extends CssWideValues {
  /**
   * -webkit-box-lines 的原生 multiple 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-lines
   */
  readonly multiple: 'multiple';
  /**
   * -webkit-box-lines 的原生 single 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-lines
   */
  readonly single: 'single';
}
export interface WebkitBoxOrdinalGroupValues extends CssWideValues {}
export interface WebkitBoxOrientValues extends CssWideValues {
  /**
   * -webkit-box-orient 的原生 block-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  readonly 'block-axis': 'block-axis';
  /**
   * -webkit-box-orient 的原生 horizontal 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  readonly horizontal: 'horizontal';
  /**
   * -webkit-box-orient 的原生 inline-axis 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  readonly 'inline-axis': 'inline-axis';
  /**
   * -webkit-box-orient 的原生 vertical 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-orient
   */
  readonly vertical: 'vertical';
}
export interface WebkitBoxPackValues extends CssWideValues {
  /**
   * -webkit-box-pack 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-pack
   */
  readonly center: 'center';
  /**
   * -webkit-box-pack 的原生 end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-pack
   */
  readonly end: 'end';
  /**
   * -webkit-box-pack 的原生 justify 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-pack
   */
  readonly justify: 'justify';
  /**
   * -webkit-box-pack 的原生 start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-pack
   */
  readonly start: 'start';
}
export interface WebkitBoxReflectValues extends CssWideValues {
  /**
   * -webkit-box-reflect 的原生 above 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  readonly above: 'above';
  /**
   * -webkit-box-reflect 的原生 below 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  readonly below: 'below';
  /**
   * -webkit-box-reflect 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  readonly left: 'left';
  /**
   * -webkit-box-reflect 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-box-reflect
   */
  readonly right: 'right';
}
export interface WebkitBoxShadowValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitBoxSizingValues extends CssWideValues {
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
   * css({ boxSizing: "border-box", width: "20rem", padding: "1rem" })
   */
  readonly 'border-box': 'border-box';
  /**
   * 指定尺寸仅计算内容盒，内边距和边框额外增加外部尺寸。
   *
   * 适用场景：希望明确指定纯内容区尺寸时。
   *
   * @example
   * css({ boxSizing: "content-box", width: "100px", padding: "10px" })
   */
  readonly 'content-box': 'content-box';
}
export interface WebkitClipPathValues extends CssWideValues {
  /**
   * -webkit-clip-path 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly 'border-box': 'border-box';
  /**
   * -webkit-clip-path 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly 'content-box': 'content-box';
  /**
   * -webkit-clip-path 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly 'fill-box': 'fill-box';
  /**
   * -webkit-clip-path 的原生 margin-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly 'margin-box': 'margin-box';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-clip-path 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly 'padding-box': 'padding-box';
  /**
   * -webkit-clip-path 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * -webkit-clip-path 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-clip-path
   */
  readonly 'view-box': 'view-box';
}
export interface WebkitColumnCountValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface WebkitColumnFillValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -webkit-column-fill 的原生 balance 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-fill
   */
  readonly balance: 'balance';
}
export interface WebkitColumnRuleValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dashed；系统颜色会随用户环境和配色设置变化。
   */
  readonly dashed: 'dashed';
  /**
   * CSS 颜色关键字 dotted；系统颜色会随用户环境和配色设置变化。
   */
  readonly dotted: 'dotted';
  /**
   * CSS 颜色关键字 double；系统颜色会随用户环境和配色设置变化。
   */
  readonly double: 'double';
  /**
   * CSS 颜色关键字 groove；系统颜色会随用户环境和配色设置变化。
   */
  readonly groove: 'groove';
  /**
   * CSS 颜色关键字 hidden；系统颜色会随用户环境和配色设置变化。
   */
  readonly hidden: 'hidden';
  /**
   * CSS 颜色关键字 inset；系统颜色会随用户环境和配色设置变化。
   */
  readonly inset: 'inset';
  /**
   * CSS 颜色关键字 medium；系统颜色会随用户环境和配色设置变化。
   */
  readonly medium: 'medium';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 outset；系统颜色会随用户环境和配色设置变化。
   */
  readonly outset: 'outset';
  /**
   * CSS 颜色关键字 ridge；系统颜色会随用户环境和配色设置变化。
   */
  readonly ridge: 'ridge';
  /**
   * CSS 颜色关键字 solid；系统颜色会随用户环境和配色设置变化。
   */
  readonly solid: 'solid';
  /**
   * CSS 颜色关键字 thick；系统颜色会随用户环境和配色设置变化。
   */
  readonly thick: 'thick';
  /**
   * CSS 颜色关键字 thin；系统颜色会随用户环境和配色设置变化。
   */
  readonly thin: 'thin';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface WebkitColumnRuleColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface WebkitColumnRuleStyleValues extends CssWideValues {
  /**
   * -webkit-column-rule-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly dashed: 'dashed';
  /**
   * -webkit-column-rule-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly dotted: 'dotted';
  /**
   * -webkit-column-rule-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly double: 'double';
  /**
   * -webkit-column-rule-style 的原生 groove 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly groove: 'groove';
  /**
   * -webkit-column-rule-style 的原生 hidden 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly hidden: 'hidden';
  /**
   * -webkit-column-rule-style 的原生 inset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly inset: 'inset';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-column-rule-style 的原生 outset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly outset: 'outset';
  /**
   * -webkit-column-rule-style 的原生 ridge 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly ridge: 'ridge';
  /**
   * -webkit-column-rule-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-style
   */
  readonly solid: 'solid';
}
export interface WebkitColumnRuleWidthValues extends CssWideValues {
  /**
   * -webkit-column-rule-width 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  readonly medium: 'medium';
  /**
   * -webkit-column-rule-width 的原生 thick 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  readonly thick: 'thick';
  /**
   * -webkit-column-rule-width 的原生 thin 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-rule-width
   */
  readonly thin: 'thin';
}
export interface WebkitColumnsValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface WebkitColumnSpanValues extends CssWideValues {
  /**
   * -webkit-column-span 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-column-span
   */
  readonly all: 'all';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitColumnWidthValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface WebkitFilterValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitFlexValues extends CssWideValues {
  /**
   * 等价于 1 1 auto：可增长、可收缩，基础尺寸由主尺寸属性或内容决定。
   *
   * 区别：1 1 0% 以零百分比为基础分配，auto 的基础尺寸通常受内容或主尺寸属性影响。
   *
   * 适用场景：让项目以自身尺寸为基础参与剩余空间分配。
   *
   * 最终比例还受最小/最大尺寸约束，不保证所有项目等宽。
   *
   * @example
   * css({ flex: "auto" })
   */
  readonly auto: 'auto';
  /**
   * -webkit-flex 的原生 content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  readonly content: 'content';
  /**
   * -webkit-flex 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  readonly 'fit-content': 'fit-content';
  /**
   * -webkit-flex 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  readonly 'max-content': 'max-content';
  /**
   * -webkit-flex 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex
   */
  readonly 'min-content': 'min-content';
  /**
   * 等价于 0 0 auto：不增长也不收缩，保留自动基础尺寸。
   *
   * 区别：auto 会增长和收缩；none 两者都不参与。
   *
   * 适用场景：防止工具栏中的图标或固定控件被压缩。
   *
   * @example
   * css({ flex: "none" })
   */
  readonly none: 'none';
}
export interface WebkitFlexBasisValues extends CssWideValues {
  /**
   * -webkit-flex-basis 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * -webkit-flex-basis 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * -webkit-flex-basis 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * -webkit-flex-basis 的原生 -webkit-auto 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly '-webkit-auto': '-webkit-auto';
  /**
   * 先参考主轴对应的 width 或 height；该值也为 auto 时由内容决定。
   */
  readonly auto: 'auto';
  /**
   * 按内容确定基础尺寸，而不直接使用 width 或 height 作为基础尺寸。
   */
  readonly content: 'content';
  /**
   * -webkit-flex-basis 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly 'fit-content': 'fit-content';
  /**
   * -webkit-flex-basis 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly 'max-content': 'max-content';
  /**
   * -webkit-flex-basis 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-basis
   */
  readonly 'min-content': 'min-content';
}
export interface WebkitFlexDirectionValues extends CssWideValues {
  /**
   * 主轴沿块方向排列；水平书写时通常从上到下。
   */
  readonly column: 'column';
  /**
   * 反转块方向的视觉排列，不改变 DOM 顺序。
   */
  readonly 'column-reverse': 'column-reverse';
  /**
   * 主轴沿行内方向排列；不一定是从左到右，取决于书写方向。
   */
  readonly row: 'row';
  /**
   * 反转行内方向的视觉排列，不改变 DOM 顺序。
   */
  readonly 'row-reverse': 'row-reverse';
}
export interface WebkitFlexFlowValues extends CssWideValues {
  /**
   * -webkit-flex-flow 的原生 column 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly column: 'column';
  /**
   * -webkit-flex-flow 的原生 column-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly 'column-reverse': 'column-reverse';
  /**
   * -webkit-flex-flow 的原生 nowrap 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly nowrap: 'nowrap';
  /**
   * -webkit-flex-flow 的原生 row 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly row: 'row';
  /**
   * -webkit-flex-flow 的原生 row-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly 'row-reverse': 'row-reverse';
  /**
   * -webkit-flex-flow 的原生 wrap 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly wrap: 'wrap';
  /**
   * -webkit-flex-flow 的原生 wrap-reverse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-flex-flow
   */
  readonly 'wrap-reverse': 'wrap-reverse';
}
export interface WebkitFlexGrowValues extends CssWideValues {}
export interface WebkitFlexShrinkValues extends CssWideValues {}
export interface WebkitFlexWrapValues extends CssWideValues {
  /**
   * 保持单行；项目仍可能收缩或溢出。
   */
  readonly nowrap: 'nowrap';
  /**
   * 空间不足时形成多行，沿交叉轴正常方向排列。
   *
   * 区别：nowrap 保持单行；wrap-reverse 反转交叉轴上各行的排列方向。
   *
   * 换行不会自动均分每行项目宽度，尺寸仍由各项目的 flex 配置决定。
   *
   * @example
   * css({ display: "flex", flexWrap: "wrap" })
   */
  readonly wrap: 'wrap';
  /**
   * 允许换行并反转交叉轴上各行的排列方向。
   */
  readonly 'wrap-reverse': 'wrap-reverse';
}
export interface WebkitFontFeatureSettingsValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface WebkitFontKerningValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface WebkitFontSmoothingValues extends CssWideValues {
  /**
   * -webkit-font-smoothing 的原生 always 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly always: 'always';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -webkit-font-smoothing 的原生 large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly large: 'large';
  /**
   * -webkit-font-smoothing 的原生 medium 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly medium: 'medium';
  /**
   * -webkit-font-smoothing 的原生 never 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly never: 'never';
  /**
   * -webkit-font-smoothing 的原生 small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly small: 'small';
  /**
   * -webkit-font-smoothing 的原生 x-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly 'x-large': 'x-large';
  /**
   * -webkit-font-smoothing 的原生 x-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly 'x-small': 'x-small';
  /**
   * -webkit-font-smoothing 的原生 xx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly 'xx-large': 'xx-large';
  /**
   * -webkit-font-smoothing 的原生 xx-small 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly 'xx-small': 'xx-small';
  /**
   * -webkit-font-smoothing 的原生 xxx-large 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-smoothing
   */
  readonly 'xxx-large': 'xxx-large';
}
export interface WebkitFontVariantLigaturesValues extends CssWideValues {
  /**
   * -webkit-font-variant-ligatures 的原生 common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly 'common-ligatures': 'common-ligatures';
  /**
   * -webkit-font-variant-ligatures 的原生 contextual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly contextual: 'contextual';
  /**
   * -webkit-font-variant-ligatures 的原生 discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly 'discretionary-ligatures': 'discretionary-ligatures';
  /**
   * -webkit-font-variant-ligatures 的原生 historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly 'historical-ligatures': 'historical-ligatures';
  /**
   * -webkit-font-variant-ligatures 的原生 no-common-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly 'no-common-ligatures': 'no-common-ligatures';
  /**
   * -webkit-font-variant-ligatures 的原生 no-contextual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly 'no-contextual': 'no-contextual';
  /**
   * -webkit-font-variant-ligatures 的原生 no-discretionary-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly 'no-discretionary-ligatures': 'no-discretionary-ligatures';
  /**
   * -webkit-font-variant-ligatures 的原生 no-historical-ligatures 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-font-variant-ligatures
   */
  readonly 'no-historical-ligatures': 'no-historical-ligatures';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface WebkitHyphenateCharacterValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface WebkitHyphensValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -webkit-hyphens 的原生 manual 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-hyphens
   */
  readonly manual: 'manual';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitInitialLetterValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface WebkitJustifyContentValues extends CssWideValues {
  /**
   * 将整体内容放在主轴或行内轴的中间，不改变项目内部文字对齐。
   */
  readonly center: 'center';
  /**
   * 让整体内容靠对齐容器在该轴上的逻辑结束侧排列。
   */
  readonly end: 'end';
  /**
   * Flex 内容靠主轴终点排列。
   */
  readonly 'flex-end': 'flex-end';
  /**
   * Flex 内容靠主轴起点排列；起点受 flex-direction 影响。
   */
  readonly 'flex-start': 'flex-start';
  /**
   * 沿适用轴靠物理左侧排列，不随文字方向交换；该轴不支持左右方向时按 start 处理。
   */
  readonly left: 'left';
  /**
   * 采用布局模式的默认分布：通常按 stretch 处理；Flex 中增长由 flex-grow 控制，因此这里表现为靠起始侧排列。
   */
  readonly normal: 'normal';
  /**
   * 沿适用轴靠物理右侧排列，不随文字方向交换；该轴不支持左右方向时按 start 处理。
   */
  readonly right: 'right';
  /**
   * 每个项目两侧分配相等空间，容器边缘的空间是相邻项目间的一半。
   */
  readonly 'space-around': 'space-around';
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
   * css({ display: "flex", justifyContent: "space-between", alignItems: "center" })
   */
  readonly 'space-between': 'space-between';
  /**
   * 容器两端和相邻项目之间分配相等空间。
   *
   * 适用场景：希望容器两端和项目之间空隙一致的导航或操作组。
   *
   * @example
   * css({ display: "flex", justifyContent: "space-evenly" })
   */
  readonly 'space-evenly': 'space-evenly';
  /**
   * 让整体内容靠对齐容器在该轴上的逻辑起始侧排列；与 flex-start 的 Flex 主轴起点含义不同。
   */
  readonly start: 'start';
  /**
   * 在支持的布局中拉伸自动尺寸的内容；Flex 主轴增长通常由 flex-grow 控制。
   */
  readonly stretch: 'stretch';
}
export interface WebkitLineBreakValues extends CssWideValues {
  /**
   * -webkit-line-break 的原生 anywhere 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  readonly anywhere: 'anywhere';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -webkit-line-break 的原生 loose 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  readonly loose: 'loose';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -webkit-line-break 的原生 strict 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-line-break
   */
  readonly strict: 'strict';
}
export interface WebkitLineClampValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitLogicalHeightValues extends CssWideValues {
  /**
   * -webkit-logical-height 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * -webkit-logical-height 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * -webkit-logical-height 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -webkit-logical-height 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly 'fit-content': 'fit-content';
  /**
   * -webkit-logical-height 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly 'max-content': 'max-content';
  /**
   * -webkit-logical-height 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-height
   */
  readonly 'min-content': 'min-content';
}
export interface WebkitLogicalWidthValues extends CssWideValues {
  /**
   * -webkit-logical-width 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * -webkit-logical-width 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * -webkit-logical-width 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * -webkit-logical-width 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly '-webkit-fill-available': '-webkit-fill-available';
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -webkit-logical-width 的原生 fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly 'fit-content': 'fit-content';
  /**
   * -webkit-logical-width 的原生 max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly 'max-content': 'max-content';
  /**
   * -webkit-logical-width 的原生 min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-logical-width
   */
  readonly 'min-content': 'min-content';
}
export interface WebkitMarginEndValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface WebkitMarginStartValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface WebkitMaskValues extends CssWideValues {
  /**
   * -webkit-mask 的原生 border 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly border: 'border';
  /**
   * -webkit-mask 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly 'border-box': 'border-box';
  /**
   * -webkit-mask 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly bottom: 'bottom';
  /**
   * -webkit-mask 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly center: 'center';
  /**
   * -webkit-mask 的原生 content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly content: 'content';
  /**
   * -webkit-mask 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly 'content-box': 'content-box';
  /**
   * -webkit-mask 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly left: 'left';
  /**
   * -webkit-mask 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly 'no-repeat': 'no-repeat';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-mask 的原生 padding 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly padding: 'padding';
  /**
   * -webkit-mask 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly 'padding-box': 'padding-box';
  /**
   * -webkit-mask 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly repeat: 'repeat';
  /**
   * -webkit-mask 的原生 repeat-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly 'repeat-x': 'repeat-x';
  /**
   * -webkit-mask 的原生 repeat-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly 'repeat-y': 'repeat-y';
  /**
   * -webkit-mask 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly right: 'right';
  /**
   * -webkit-mask 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly round: 'round';
  /**
   * -webkit-mask 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly space: 'space';
  /**
   * -webkit-mask 的原生 text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly text: 'text';
  /**
   * -webkit-mask 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask
   */
  readonly top: 'top';
}
export interface WebkitMaskAttachmentValues extends CssWideValues {
  /**
   * -webkit-mask-attachment 的原生 fixed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  readonly fixed: 'fixed';
  /**
   * -webkit-mask-attachment 的原生 local 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  readonly local: 'local';
  /**
   * -webkit-mask-attachment 的原生 scroll 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-attachment
   */
  readonly scroll: 'scroll';
}
export interface WebkitMaskBoxImageValues extends CssWideValues {
  /**
   * -webkit-mask-box-image 的原生 alpha 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  readonly alpha: 'alpha';
  /**
   * -webkit-mask-box-image 的原生 luminance 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  readonly luminance: 'luminance';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-mask-box-image 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  readonly repeat: 'repeat';
  /**
   * -webkit-mask-box-image 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  readonly round: 'round';
  /**
   * -webkit-mask-box-image 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  readonly space: 'space';
  /**
   * -webkit-mask-box-image 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image
   */
  readonly stretch: 'stretch';
}
export interface WebkitMaskBoxImageOutsetValues extends CssWideValues {}
export interface WebkitMaskBoxImageRepeatValues extends CssWideValues {
  /**
   * -webkit-mask-box-image-repeat 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  readonly repeat: 'repeat';
  /**
   * -webkit-mask-box-image-repeat 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  readonly round: 'round';
  /**
   * -webkit-mask-box-image-repeat 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  readonly space: 'space';
  /**
   * -webkit-mask-box-image-repeat 的原生 stretch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-box-image-repeat
   */
  readonly stretch: 'stretch';
}
export interface WebkitMaskBoxImageSliceValues extends CssWideValues {}
export interface WebkitMaskBoxImageSourceValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitMaskBoxImageWidthValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface WebkitMaskClipValues extends CssWideValues {
  /**
   * -webkit-mask-clip 的原生 border 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly border: 'border';
  /**
   * -webkit-mask-clip 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly 'border-box': 'border-box';
  /**
   * -webkit-mask-clip 的原生 content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly content: 'content';
  /**
   * -webkit-mask-clip 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly 'content-box': 'content-box';
  /**
   * -webkit-mask-clip 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly 'fill-box': 'fill-box';
  /**
   * -webkit-mask-clip 的原生 no-clip 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly 'no-clip': 'no-clip';
  /**
   * -webkit-mask-clip 的原生 padding 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly padding: 'padding';
  /**
   * -webkit-mask-clip 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly 'padding-box': 'padding-box';
  /**
   * -webkit-mask-clip 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * -webkit-mask-clip 的原生 text 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly text: 'text';
  /**
   * -webkit-mask-clip 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-clip
   */
  readonly 'view-box': 'view-box';
}
export interface WebkitMaskCompositeValues extends CssWideValues {
  /**
   * -webkit-mask-composite 的原生 clear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly clear: 'clear';
  /**
   * -webkit-mask-composite 的原生 copy 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly copy: 'copy';
  /**
   * -webkit-mask-composite 的原生 destination-atop 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly 'destination-atop': 'destination-atop';
  /**
   * -webkit-mask-composite 的原生 destination-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly 'destination-in': 'destination-in';
  /**
   * -webkit-mask-composite 的原生 destination-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly 'destination-out': 'destination-out';
  /**
   * -webkit-mask-composite 的原生 destination-over 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly 'destination-over': 'destination-over';
  /**
   * -webkit-mask-composite 的原生 source-atop 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly 'source-atop': 'source-atop';
  /**
   * -webkit-mask-composite 的原生 source-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly 'source-in': 'source-in';
  /**
   * -webkit-mask-composite 的原生 source-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly 'source-out': 'source-out';
  /**
   * -webkit-mask-composite 的原生 source-over 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly 'source-over': 'source-over';
  /**
   * -webkit-mask-composite 的原生 xor 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-composite
   */
  readonly xor: 'xor';
}
export interface WebkitMaskImageValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitMaskOriginValues extends CssWideValues {
  /**
   * -webkit-mask-origin 的原生 border 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly border: 'border';
  /**
   * -webkit-mask-origin 的原生 border-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly 'border-box': 'border-box';
  /**
   * -webkit-mask-origin 的原生 content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly content: 'content';
  /**
   * -webkit-mask-origin 的原生 content-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly 'content-box': 'content-box';
  /**
   * -webkit-mask-origin 的原生 fill-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly 'fill-box': 'fill-box';
  /**
   * -webkit-mask-origin 的原生 padding 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly padding: 'padding';
  /**
   * -webkit-mask-origin 的原生 padding-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly 'padding-box': 'padding-box';
  /**
   * -webkit-mask-origin 的原生 stroke-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly 'stroke-box': 'stroke-box';
  /**
   * -webkit-mask-origin 的原生 view-box 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-origin
   */
  readonly 'view-box': 'view-box';
}
export interface WebkitMaskPositionValues extends CssWideValues {
  /**
   * -webkit-mask-position 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  readonly bottom: 'bottom';
  /**
   * -webkit-mask-position 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  readonly center: 'center';
  /**
   * -webkit-mask-position 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  readonly left: 'left';
  /**
   * -webkit-mask-position 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  readonly right: 'right';
  /**
   * -webkit-mask-position 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position
   */
  readonly top: 'top';
}
export interface WebkitMaskPositionXValues extends CssWideValues {
  /**
   * -webkit-mask-position-x 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  readonly center: 'center';
  /**
   * -webkit-mask-position-x 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  readonly left: 'left';
  /**
   * -webkit-mask-position-x 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-x
   */
  readonly right: 'right';
}
export interface WebkitMaskPositionYValues extends CssWideValues {
  /**
   * -webkit-mask-position-y 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  readonly bottom: 'bottom';
  /**
   * -webkit-mask-position-y 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  readonly center: 'center';
  /**
   * -webkit-mask-position-y 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-position-y
   */
  readonly top: 'top';
}
export interface WebkitMaskRepeatValues extends CssWideValues {
  /**
   * -webkit-mask-repeat 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly 'no-repeat': 'no-repeat';
  /**
   * -webkit-mask-repeat 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly repeat: 'repeat';
  /**
   * -webkit-mask-repeat 的原生 repeat-x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly 'repeat-x': 'repeat-x';
  /**
   * -webkit-mask-repeat 的原生 repeat-y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly 'repeat-y': 'repeat-y';
  /**
   * -webkit-mask-repeat 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly round: 'round';
  /**
   * -webkit-mask-repeat 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat
   */
  readonly space: 'space';
}
export interface WebkitMaskRepeatXValues extends CssWideValues {
  /**
   * -webkit-mask-repeat-x 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  readonly 'no-repeat': 'no-repeat';
  /**
   * -webkit-mask-repeat-x 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  readonly repeat: 'repeat';
  /**
   * -webkit-mask-repeat-x 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  readonly round: 'round';
  /**
   * -webkit-mask-repeat-x 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x
   */
  readonly space: 'space';
}
export interface WebkitMaskRepeatYValues extends CssWideValues {
  /**
   * -webkit-mask-repeat-y 的原生 no-repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  readonly 'no-repeat': 'no-repeat';
  /**
   * -webkit-mask-repeat-y 的原生 repeat 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  readonly repeat: 'repeat';
  /**
   * -webkit-mask-repeat-y 的原生 round 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  readonly round: 'round';
  /**
   * -webkit-mask-repeat-y 的原生 space 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y
   */
  readonly space: 'space';
}
export interface WebkitMaskSizeValues extends CssWideValues {
  /**
   * 依据图像内部尺寸、比例及另一维的设置确定尺寸。
   */
  readonly auto: 'auto';
  /**
   * 保持图像比例并使整张图像容纳于定位区域，可能留下空白。
   */
  readonly contain: 'contain';
  /**
   * 保持图像比例并覆盖整个定位区域，超出部分可能被裁剪。
   */
  readonly cover: 'cover';
}
export interface WebkitMaxInlineSizeValues extends CssWideValues {
  /**
   * -webkit-max-inline-size 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * -webkit-max-inline-size 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * -webkit-max-inline-size 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * -webkit-max-inline-size 的原生 -webkit-fill-available 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-max-inline-size
   */
  readonly '-webkit-fill-available': '-webkit-fill-available';
  /**
   * 按可用空间在 min-content 与 max-content 之间夹取尺寸，并用作尺寸上限。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * 以不进行软换行的最大内部尺寸作为尺寸上限；这不是把首选尺寸直接设为该值。
   */
  readonly 'max-content': 'max-content';
  /**
   * 以内容的最小内部尺寸作为尺寸上限；文本按允许的换行机会收缩，但更大的最小尺寸约束仍优先。
   */
  readonly 'min-content': 'min-content';
  /**
   * 不由该属性设置尺寸上限；其他尺寸、最小尺寸和布局规则仍然生效。
   */
  readonly none: 'none';
}
export interface WebkitOrderValues extends CssWideValues {}
export interface WebkitOverflowScrollingValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -webkit-overflow-scrolling 的原生 touch 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-overflow-scrolling
   */
  readonly touch: 'touch';
}
export interface WebkitPaddingEndValues extends CssWideValues {}
export interface WebkitPaddingStartValues extends CssWideValues {}
export interface WebkitPerspectiveValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitPerspectiveOriginValues extends CssWideValues {
  /**
   * -webkit-perspective-origin 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  readonly bottom: 'bottom';
  /**
   * -webkit-perspective-origin 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  readonly center: 'center';
  /**
   * -webkit-perspective-origin 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  readonly left: 'left';
  /**
   * -webkit-perspective-origin 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  readonly right: 'right';
  /**
   * -webkit-perspective-origin 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-perspective-origin
   */
  readonly top: 'top';
}
export interface WebkitPrintColorAdjustValues extends CssWideValues {
  /**
   * -webkit-print-color-adjust 的原生 economy 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-print-color-adjust
   */
  readonly economy: 'economy';
  /**
   * -webkit-print-color-adjust 的原生 exact 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-print-color-adjust
   */
  readonly exact: 'exact';
}
export interface WebkitRubyPositionValues extends CssWideValues {
  /**
   * -webkit-ruby-position 的原生 alternate 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  readonly alternate: 'alternate';
  /**
   * -webkit-ruby-position 的原生 inter-character 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  readonly 'inter-character': 'inter-character';
  /**
   * -webkit-ruby-position 的原生 over 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  readonly over: 'over';
  /**
   * -webkit-ruby-position 的原生 under 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-ruby-position
   */
  readonly under: 'under';
}
export interface WebkitScrollSnapTypeValues extends CssWideValues {
  /**
   * -webkit-scroll-snap-type 的原生 block 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-scroll-snap-type
   */
  readonly block: 'block';
  /**
   * -webkit-scroll-snap-type 的原生 both 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-scroll-snap-type
   */
  readonly both: 'both';
  /**
   * -webkit-scroll-snap-type 的原生 inline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-scroll-snap-type
   */
  readonly inline: 'inline';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-scroll-snap-type 的原生 x 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-scroll-snap-type
   */
  readonly x: 'x';
  /**
   * -webkit-scroll-snap-type 的原生 y 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-scroll-snap-type
   */
  readonly y: 'y';
}
export interface WebkitShapeMarginValues extends CssWideValues {}
export interface WebkitTapHighlightColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface WebkitTextCombineValues extends CssWideValues {
  /**
   * -webkit-text-combine 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-combine
   */
  readonly all: 'all';
  /**
   * -webkit-text-combine 的原生 digits 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-combine
   */
  readonly digits: 'digits';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitTextDecorationColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface WebkitTextDecorationLineValues extends CssWideValues {
  /**
   * -webkit-text-decoration-line 的原生 blink 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly blink: 'blink';
  /**
   * -webkit-text-decoration-line 的原生 grammar-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly 'grammar-error': 'grammar-error';
  /**
   * -webkit-text-decoration-line 的原生 line-through 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly 'line-through': 'line-through';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-text-decoration-line 的原生 overline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly overline: 'overline';
  /**
   * -webkit-text-decoration-line 的原生 spelling-error 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly 'spelling-error': 'spelling-error';
  /**
   * -webkit-text-decoration-line 的原生 underline 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-line
   */
  readonly underline: 'underline';
}
export interface WebkitTextDecorationSkipValues extends CssWideValues {
  /**
   * -webkit-text-decoration-skip 的原生 box-decoration 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly 'box-decoration': 'box-decoration';
  /**
   * -webkit-text-decoration-skip 的原生 edges 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly edges: 'edges';
  /**
   * -webkit-text-decoration-skip 的原生 leading-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly 'leading-spaces': 'leading-spaces';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-text-decoration-skip 的原生 objects 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly objects: 'objects';
  /**
   * -webkit-text-decoration-skip 的原生 spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly spaces: 'spaces';
  /**
   * -webkit-text-decoration-skip 的原生 trailing-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-skip
   */
  readonly 'trailing-spaces': 'trailing-spaces';
}
export interface WebkitTextDecorationStyleValues extends CssWideValues {
  /**
   * -webkit-text-decoration-style 的原生 dashed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  readonly dashed: 'dashed';
  /**
   * -webkit-text-decoration-style 的原生 dotted 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  readonly dotted: 'dotted';
  /**
   * -webkit-text-decoration-style 的原生 double 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  readonly double: 'double';
  /**
   * -webkit-text-decoration-style 的原生 solid 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  readonly solid: 'solid';
  /**
   * -webkit-text-decoration-style 的原生 wavy 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-decoration-style
   */
  readonly wavy: 'wavy';
}
export interface WebkitTextEmphasisValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * CSS 颜色关键字 circle；系统颜色会随用户环境和配色设置变化。
   */
  readonly circle: 'circle';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * CSS 颜色关键字 dot；系统颜色会随用户环境和配色设置变化。
   */
  readonly dot: 'dot';
  /**
   * CSS 颜色关键字 double-circle；系统颜色会随用户环境和配色设置变化。
   */
  readonly 'double-circle': 'double-circle';
  /**
   * CSS 颜色关键字 filled；系统颜色会随用户环境和配色设置变化。
   */
  readonly filled: 'filled';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * CSS 颜色关键字 open；系统颜色会随用户环境和配色设置变化。
   */
  readonly open: 'open';
  /**
   * CSS 颜色关键字 sesame；系统颜色会随用户环境和配色设置变化。
   */
  readonly sesame: 'sesame';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
  /**
   * CSS 颜色关键字 triangle；系统颜色会随用户环境和配色设置变化。
   */
  readonly triangle: 'triangle';
}
export interface WebkitTextEmphasisColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface WebkitTextEmphasisPositionValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -webkit-text-emphasis-position 的原生 over 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-position
   */
  readonly over: 'over';
  /**
   * -webkit-text-emphasis-position 的原生 under 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-position
   */
  readonly under: 'under';
}
export interface WebkitTextEmphasisStyleValues extends CssWideValues {
  /**
   * -webkit-text-emphasis-style 的原生 circle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  readonly circle: 'circle';
  /**
   * -webkit-text-emphasis-style 的原生 dot 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  readonly dot: 'dot';
  /**
   * -webkit-text-emphasis-style 的原生 double-circle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  readonly 'double-circle': 'double-circle';
  /**
   * -webkit-text-emphasis-style 的原生 filled 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  readonly filled: 'filled';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * -webkit-text-emphasis-style 的原生 open 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  readonly open: 'open';
  /**
   * -webkit-text-emphasis-style 的原生 sesame 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  readonly sesame: 'sesame';
  /**
   * -webkit-text-emphasis-style 的原生 triangle 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-emphasis-style
   */
  readonly triangle: 'triangle';
}
export interface WebkitTextFillColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface WebkitTextOrientationValues extends CssWideValues {
  /**
   * -webkit-text-orientation 的原生 mixed 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  readonly mixed: 'mixed';
  /**
   * -webkit-text-orientation 的原生 sideways 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  readonly sideways: 'sideways';
  /**
   * -webkit-text-orientation 的原生 sideways-right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  readonly 'sideways-right': 'sideways-right';
  /**
   * -webkit-text-orientation 的原生 upright 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-orientation
   */
  readonly upright: 'upright';
}
export interface WebkitTextSizeAdjustValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitTextStrokeValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface WebkitTextStrokeColorValues
  extends CssWideValues, NamedColorValues, SystemColorValues, DeprecatedSystemColorValues {
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   */
  readonly currentColor: 'currentColor';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   */
  readonly transparent: 'transparent';
}
export interface WebkitTextStrokeWidthValues extends CssWideValues {}
export interface WebkitTextUnderlinePositionValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * -webkit-text-underline-position 的原生 from-font 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  readonly 'from-font': 'from-font';
  /**
   * -webkit-text-underline-position 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  readonly left: 'left';
  /**
   * -webkit-text-underline-position 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  readonly right: 'right';
  /**
   * -webkit-text-underline-position 的原生 under 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-underline-position
   */
  readonly under: 'under';
}
export interface WebkitTouchCalloutValues extends CssWideValues {
  /**
   * -webkit-touch-callout 的原生 default 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-touch-callout
   */
  readonly default: 'default';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitTransformValues extends CssWideValues {
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitTransformOriginValues extends CssWideValues {
  /**
   * -webkit-transform-origin 的原生 bottom 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  readonly bottom: 'bottom';
  /**
   * -webkit-transform-origin 的原生 center 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  readonly center: 'center';
  /**
   * -webkit-transform-origin 的原生 left 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  readonly left: 'left';
  /**
   * -webkit-transform-origin 的原生 right 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  readonly right: 'right';
  /**
   * -webkit-transform-origin 的原生 top 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transform-origin
   */
  readonly top: 'top';
}
export interface WebkitTransformStyleValues extends CssWideValues {
  /**
   * 将子元素的三维位置展平到当前元素的平面；这是初始行为，并非移除子元素自身的 transform。
   */
  readonly flat: 'flat';
  /**
   * 让子元素继续处于三维空间，适合多层三维场景。
   *
   * 区别：flat 会将后代展平到当前元素的平面；preserve-3d 本身不提供透视效果。
   *
   * 该属性不继承，需要在参与三维层级的中间元素上设置；opacity 小于 1、非 none 的 filter 等分组效果仍可能强制展平。
   *
   * @example
   * css({ transformStyle: "preserve-3d" })
   */
  readonly 'preserve-3d': 'preserve-3d';
}
export interface WebkitTransitionValues extends CssWideValues {
  /**
   * -webkit-transition 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly all: 'all';
  /**
   * -webkit-transition 的原生 allow-discrete 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly 'allow-discrete': 'allow-discrete';
  /**
   * -webkit-transition 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly ease: 'ease';
  /**
   * -webkit-transition 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -webkit-transition 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -webkit-transition 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -webkit-transition 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly linear: 'linear';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * -webkit-transition 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly 'step-end': 'step-end';
  /**
   * -webkit-transition 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition
   */
  readonly 'step-start': 'step-start';
}
export interface WebkitTransitionDelayValues extends CssWideValues {}
export interface WebkitTransitionDurationValues extends CssWideValues {}
export interface WebkitTransitionPropertyValues extends CssWideValues {
  /**
   * -webkit-transition-property 的原生 all 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-property
   */
  readonly all: 'all';
  /**
   * 关闭或移除当前属性对应的效果；具体是否影响布局取决于该属性。
   */
  readonly none: 'none';
}
export interface WebkitTransitionTimingFunctionValues extends CssWideValues {
  /**
   * -webkit-transition-timing-function 的原生 ease 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly ease: 'ease';
  /**
   * -webkit-transition-timing-function 的原生 ease-in 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly 'ease-in': 'ease-in';
  /**
   * -webkit-transition-timing-function 的原生 ease-in-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly 'ease-in-out': 'ease-in-out';
  /**
   * -webkit-transition-timing-function 的原生 ease-out 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly 'ease-out': 'ease-out';
  /**
   * -webkit-transition-timing-function 的原生 linear 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly linear: 'linear';
  /**
   * -webkit-transition-timing-function 的原生 step-end 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly 'step-end': 'step-end';
  /**
   * -webkit-transition-timing-function 的原生 step-start 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-transition-timing-function
   */
  readonly 'step-start': 'step-start';
}
export interface WebkitUserModifyValues extends CssWideValues {
  /**
   * -webkit-user-modify 的原生 read-only 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  readonly 'read-only': 'read-only';
  /**
   * -webkit-user-modify 的原生 read-write 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  readonly 'read-write': 'read-write';
  /**
   * -webkit-user-modify 的原生 read-write-plaintext-only 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-user-modify
   */
  readonly 'read-write-plaintext-only': 'read-write-plaintext-only';
}
export interface WebkitUserSelectValues extends CssWideValues {
  /**
   * 将元素内容作为整体选取单元。
   */
  readonly all: 'all';
  /**
   * 由父级与元素上下文决定使用的选取行为。
   */
  readonly auto: 'auto';
  /**
   * 阻止常规文本选取，不是内容保护或访问控制。
   */
  readonly none: 'none';
  /**
   * 允许文本选取。
   */
  readonly text: 'text';
}
export interface WebkitWritingModeValues extends CssWideValues {
  /**
   * -webkit-writing-mode 的原生 horizontal-tb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly 'horizontal-tb': 'horizontal-tb';
  /**
   * -webkit-writing-mode 的原生 sideways-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly 'sideways-lr': 'sideways-lr';
  /**
   * -webkit-writing-mode 的原生 sideways-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly 'sideways-rl': 'sideways-rl';
  /**
   * -webkit-writing-mode 的原生 vertical-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly 'vertical-lr': 'vertical-lr';
  /**
   * -webkit-writing-mode 的原生 vertical-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-writing-mode
   */
  readonly 'vertical-rl': 'vertical-rl';
}
export interface WhiteSpaceValues extends CssWideValues {
  /**
   * white-space 的原生 -moz-pre-wrap 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  readonly '-moz-pre-wrap': '-moz-pre-wrap';
  /**
   * 保留空白并允许在保留的空格后换行；行末空格占据空间。
   */
  readonly 'break-spaces': 'break-spaces';
  /**
   * 折叠连续空白和源换行；单独用于 white-space 时，未指定的换行模式取初始值 wrap。
   */
  readonly collapse: 'collapse';
  /**
   * 折叠连续空白和源换行，允许软换行。
   */
  readonly normal: 'normal';
  /**
   * 折叠空白并禁止软换行；不会自行生成省略号。
   *
   * 区别：pre 也不进行普通软换行，但会保留连续空白。
   *
   * 适用场景：单行标签；结合宽度约束、overflow 和 text-overflow 实现省略。
   *
   * @example
   * css({ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" })
   */
  readonly nowrap: 'nowrap';
  /**
   * 保留空白和源换行，不进行普通软换行。
   */
  readonly pre: 'pre';
  /**
   * 折叠空格等空白但保留源换行，同时允许软换行。
   */
  readonly 'pre-line': 'pre-line';
  /**
   * 保留空白和源换行，同时允许软换行。
   *
   * 区别：pre 不进行普通软换行；pre-line 会折叠连续空格。
   *
   * 适用场景：需要保留用户换行和空格，同时允许适应容器宽度的文本。
   *
   * @example
   * css({ whiteSpace: "pre-wrap" })
   */
  readonly 'pre-wrap': 'pre-wrap';
  /**
   * 保留空白和源换行；单独用于 white-space 时仍允许软换行，相当于 preserve wrap（pre-wrap）。
   */
  readonly preserve: 'preserve';
  /**
   * 折叠连续空格但保留源换行；单独用于 white-space 时相当于 preserve-breaks wrap（pre-line）。
   */
  readonly 'preserve-breaks': 'preserve-breaks';
  /**
   * 保留空格序列，把制表符和源换行转为空格；单独用于 white-space 时允许软换行。使用前核对目标浏览器对此值的支持。
   */
  readonly 'preserve-spaces': 'preserve-spaces';
  /**
   * 允许按正常换行机会软换行；单独用于 white-space 时空白折叠取初始值 collapse，相当于 normal。
   */
  readonly wrap: 'wrap';
}
export interface WhiteSpaceCollapseValues extends CssWideValues {
  /**
   * white-space-collapse 的原生 break-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  readonly 'break-spaces': 'break-spaces';
  /**
   * white-space-collapse 的原生 collapse 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  readonly collapse: 'collapse';
  /**
   * white-space-collapse 的原生 preserve 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  readonly preserve: 'preserve';
  /**
   * white-space-collapse 的原生 preserve-breaks 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  readonly 'preserve-breaks': 'preserve-breaks';
  /**
   * white-space-collapse 的原生 preserve-spaces 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  readonly 'preserve-spaces': 'preserve-spaces';
}
export interface WidowsValues extends CssWideValues {}
export interface WidthValues extends CssWideValues {
  /**
   * width 的原生 -moz-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly '-moz-fit-content': '-moz-fit-content';
  /**
   * width 的原生 -moz-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly '-moz-max-content': '-moz-max-content';
  /**
   * width 的原生 -moz-min-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly '-moz-min-content': '-moz-min-content';
  /**
   * width 的原生 -webkit-fit-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly '-webkit-fit-content': '-webkit-fit-content';
  /**
   * width 的原生 -webkit-max-content 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly '-webkit-max-content': '-webkit-max-content';
  /**
   * 让布局算法决定尺寸，不保证等于父元素尺寸。
   */
  readonly auto: 'auto';
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   */
  readonly 'fit-content': 'fit-content';
  /**
   * width 的原生 intrinsic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly intrinsic: 'intrinsic';
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   */
  readonly 'max-content': 'max-content';
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   */
  readonly 'min-content': 'min-content';
  /**
   * width 的原生 min-intrinsic 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  readonly 'min-intrinsic': 'min-intrinsic';
}
export interface WillChangeValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
  /**
   * will-change 的原生 contents 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  readonly contents: 'contents';
  /**
   * will-change 的原生 scroll-position 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  readonly 'scroll-position': 'scroll-position';
}
export interface WordBreakValues extends CssWideValues {
  /**
   * word-break 的原生 auto-phrase 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  readonly 'auto-phrase': 'auto-phrase';
  /**
   * 允许在更多字符间断行以防溢出，可能拆开普通单词。
   */
  readonly 'break-all': 'break-all';
  /**
   * word-break 的原生 break-word 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  readonly 'break-word': 'break-word';
  /**
   * 限制中日韩文字内部断行，其他文字仍按正常规则处理。
   */
  readonly 'keep-all': 'keep-all';
  /**
   * 按语言的默认断行规则处理。
   */
  readonly normal: 'normal';
}
export interface WordSpacingValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
}
export interface WordWrapValues extends CssWideValues {
  /**
   * 必要时允许长文本断行，但新增断点不按 anywhere 的方式参与 min-content 计算。
   */
  readonly 'break-word': 'break-word';
  /**
   * 只使用正常换行机会，不为长单词额外断行。
   */
  readonly normal: 'normal';
}
export interface WritingModeValues extends CssWideValues {
  /**
   * writing-mode 的原生 horizontal-tb 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly 'horizontal-tb': 'horizontal-tb';
  /**
   * writing-mode 的原生 sideways-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly 'sideways-lr': 'sideways-lr';
  /**
   * writing-mode 的原生 sideways-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly 'sideways-rl': 'sideways-rl';
  /**
   * writing-mode 的原生 vertical-lr 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly 'vertical-lr': 'vertical-lr';
  /**
   * writing-mode 的原生 vertical-rl 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  readonly 'vertical-rl': 'vertical-rl';
}
export interface XValues extends CssWideValues {}
export interface YValues extends CssWideValues {}
export interface ZIndexValues extends CssWideValues {
  /**
   * 由当前属性的布局或排版规则自动决定，不等同于数值 0。
   */
  readonly auto: 'auto';
}
export interface ZoomValues extends CssWideValues {
  /**
   * 使用当前属性定义的常规行为，不表示所有属性都具有相同的计算值。
   */
  readonly normal: 'normal';
  /**
   * zoom 的原生 reset 值；具体布局或绘制效果见该属性参考。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  readonly reset: 'reset';
}
/** 普通字符串作者入口：keyof 与同名关键词视图共享声明、注释和导航来源。 */
export interface KeywordValues {
  readonly accentColor:
    keyof AccentColorValues | Exclude<NativeProperties['accentColor'], string> | CssString;
  readonly alignContent:
    keyof AlignContentValues | Exclude<NativeProperties['alignContent'], string> | CssString;
  readonly alignItems:
    keyof AlignItemsValues | Exclude<NativeProperties['alignItems'], string> | CssString;
  readonly alignmentBaseline:
    keyof AlignmentBaselineValues | Exclude<NativeProperties['alignmentBaseline'], string>;
  readonly alignSelf:
    keyof AlignSelfValues | Exclude<NativeProperties['alignSelf'], string> | CssString;
  readonly alignTracks:
    keyof AlignTracksValues | Exclude<NativeProperties['alignTracks'], string> | CssString;
  readonly all: keyof AllValues | Exclude<NativeProperties['all'], string>;
  readonly anchorName:
    keyof AnchorNameValues | Exclude<NativeProperties['anchorName'], string> | CssString;
  readonly anchorScope:
    keyof AnchorScopeValues | Exclude<NativeProperties['anchorScope'], string> | CssString;
  readonly animation:
    keyof AnimationValues | Exclude<NativeProperties['animation'], string> | CssString;
  readonly animationComposition:
    | keyof AnimationCompositionValues
    | Exclude<NativeProperties['animationComposition'], string>
    | CssString;
  readonly animationDelay:
    keyof AnimationDelayValues | Exclude<NativeProperties['animationDelay'], string> | CssString;
  readonly animationDirection:
    | keyof AnimationDirectionValues
    | Exclude<NativeProperties['animationDirection'], string>
    | CssString;
  readonly animationDuration:
    | keyof AnimationDurationValues
    | Exclude<NativeProperties['animationDuration'], string>
    | CssString;
  readonly animationFillMode:
    | keyof AnimationFillModeValues
    | Exclude<NativeProperties['animationFillMode'], string>
    | CssString;
  readonly animationIterationCount:
    | keyof AnimationIterationCountValues
    | Exclude<NativeProperties['animationIterationCount'], string>
    | CssString;
  readonly animationName:
    keyof AnimationNameValues | Exclude<NativeProperties['animationName'], string> | CssString;
  readonly animationPlayState:
    | keyof AnimationPlayStateValues
    | Exclude<NativeProperties['animationPlayState'], string>
    | CssString;
  readonly animationRange:
    keyof AnimationRangeValues | Exclude<NativeProperties['animationRange'], string> | CssString;
  readonly animationRangeEnd:
    | keyof AnimationRangeEndValues
    | Exclude<NativeProperties['animationRangeEnd'], string>
    | CssString;
  readonly animationRangeStart:
    | keyof AnimationRangeStartValues
    | Exclude<NativeProperties['animationRangeStart'], string>
    | CssString;
  readonly animationTimeline:
    | keyof AnimationTimelineValues
    | Exclude<NativeProperties['animationTimeline'], string>
    | CssString;
  readonly animationTimingFunction:
    | keyof AnimationTimingFunctionValues
    | Exclude<NativeProperties['animationTimingFunction'], string>
    | CssString;
  readonly appearance: keyof AppearanceValues | Exclude<NativeProperties['appearance'], string>;
  readonly aspectRatio:
    keyof AspectRatioValues | Exclude<NativeProperties['aspectRatio'], string> | CssString;
  readonly backdropFilter:
    keyof BackdropFilterValues | Exclude<NativeProperties['backdropFilter'], string> | CssString;
  readonly backfaceVisibility:
    keyof BackfaceVisibilityValues | Exclude<NativeProperties['backfaceVisibility'], string>;
  readonly background:
    keyof BackgroundValues | Exclude<NativeProperties['background'], string> | CssString;
  readonly backgroundAttachment:
    | keyof BackgroundAttachmentValues
    | Exclude<NativeProperties['backgroundAttachment'], string>
    | CssString;
  readonly backgroundBlendMode:
    | keyof BackgroundBlendModeValues
    | Exclude<NativeProperties['backgroundBlendMode'], string>
    | CssString;
  readonly backgroundClip:
    keyof BackgroundClipValues | Exclude<NativeProperties['backgroundClip'], string> | CssString;
  readonly backgroundColor:
    keyof BackgroundColorValues | Exclude<NativeProperties['backgroundColor'], string> | CssString;
  readonly backgroundImage:
    keyof BackgroundImageValues | Exclude<NativeProperties['backgroundImage'], string> | CssString;
  readonly backgroundOrigin:
    | keyof BackgroundOriginValues
    | Exclude<NativeProperties['backgroundOrigin'], string>
    | CssString;
  readonly backgroundPosition:
    | keyof BackgroundPositionValues
    | Exclude<NativeProperties['backgroundPosition'], string>
    | CssString;
  readonly backgroundPositionX:
    | keyof BackgroundPositionXValues
    | Exclude<NativeProperties['backgroundPositionX'], string>
    | CssString;
  readonly backgroundPositionY:
    | keyof BackgroundPositionYValues
    | Exclude<NativeProperties['backgroundPositionY'], string>
    | CssString;
  readonly backgroundRepeat:
    | keyof BackgroundRepeatValues
    | Exclude<NativeProperties['backgroundRepeat'], string>
    | CssString;
  readonly backgroundSize:
    keyof BackgroundSizeValues | Exclude<NativeProperties['backgroundSize'], string> | CssString;
  readonly baselineShift:
    keyof BaselineShiftValues | Exclude<NativeProperties['baselineShift'], string> | CssString;
  readonly blockSize:
    keyof BlockSizeValues | Exclude<NativeProperties['blockSize'], string> | CssString;
  readonly border: keyof BorderValues | Exclude<NativeProperties['border'], string> | CssString;
  readonly borderBlock:
    keyof BorderBlockValues | Exclude<NativeProperties['borderBlock'], string> | CssString;
  readonly borderBlockColor:
    | keyof BorderBlockColorValues
    | Exclude<NativeProperties['borderBlockColor'], string>
    | CssString;
  readonly borderBlockEnd:
    keyof BorderBlockEndValues | Exclude<NativeProperties['borderBlockEnd'], string> | CssString;
  readonly borderBlockEndColor:
    | keyof BorderBlockEndColorValues
    | Exclude<NativeProperties['borderBlockEndColor'], string>
    | CssString;
  readonly borderBlockEndStyle:
    keyof BorderBlockEndStyleValues | Exclude<NativeProperties['borderBlockEndStyle'], string>;
  readonly borderBlockEndWidth:
    keyof BorderBlockEndWidthValues | Exclude<NativeProperties['borderBlockEndWidth'], string>;
  readonly borderBlockStart:
    | keyof BorderBlockStartValues
    | Exclude<NativeProperties['borderBlockStart'], string>
    | CssString;
  readonly borderBlockStartColor:
    | keyof BorderBlockStartColorValues
    | Exclude<NativeProperties['borderBlockStartColor'], string>
    | CssString;
  readonly borderBlockStartStyle:
    keyof BorderBlockStartStyleValues | Exclude<NativeProperties['borderBlockStartStyle'], string>;
  readonly borderBlockStartWidth:
    keyof BorderBlockStartWidthValues | Exclude<NativeProperties['borderBlockStartWidth'], string>;
  readonly borderBlockStyle:
    | keyof BorderBlockStyleValues
    | Exclude<NativeProperties['borderBlockStyle'], string>
    | CssString;
  readonly borderBlockWidth:
    | keyof BorderBlockWidthValues
    | Exclude<NativeProperties['borderBlockWidth'], string>
    | CssString;
  readonly borderBottom:
    keyof BorderBottomValues | Exclude<NativeProperties['borderBottom'], string> | CssString;
  readonly borderBottomColor:
    | keyof BorderBottomColorValues
    | Exclude<NativeProperties['borderBottomColor'], string>
    | CssString;
  readonly borderBottomLeftRadius:
    | keyof BorderBottomLeftRadiusValues
    | Exclude<NativeProperties['borderBottomLeftRadius'], string>
    | CssString;
  readonly borderBottomRightRadius:
    | keyof BorderBottomRightRadiusValues
    | Exclude<NativeProperties['borderBottomRightRadius'], string>
    | CssString;
  readonly borderBottomStyle:
    keyof BorderBottomStyleValues | Exclude<NativeProperties['borderBottomStyle'], string>;
  readonly borderBottomWidth:
    keyof BorderBottomWidthValues | Exclude<NativeProperties['borderBottomWidth'], string>;
  readonly borderCollapse:
    keyof BorderCollapseValues | Exclude<NativeProperties['borderCollapse'], string>;
  readonly borderColor:
    keyof BorderColorValues | Exclude<NativeProperties['borderColor'], string> | CssString;
  readonly borderEndEndRadius:
    | keyof BorderEndEndRadiusValues
    | Exclude<NativeProperties['borderEndEndRadius'], string>
    | CssString;
  readonly borderEndStartRadius:
    | keyof BorderEndStartRadiusValues
    | Exclude<NativeProperties['borderEndStartRadius'], string>
    | CssString;
  readonly borderImage:
    keyof BorderImageValues | Exclude<NativeProperties['borderImage'], string> | CssString;
  readonly borderImageOutset:
    | keyof BorderImageOutsetValues
    | Exclude<NativeProperties['borderImageOutset'], string>
    | CssString;
  readonly borderImageRepeat:
    | keyof BorderImageRepeatValues
    | Exclude<NativeProperties['borderImageRepeat'], string>
    | CssString;
  readonly borderImageSlice:
    | keyof BorderImageSliceValues
    | Exclude<NativeProperties['borderImageSlice'], string>
    | CssString;
  readonly borderImageSource:
    | keyof BorderImageSourceValues
    | Exclude<NativeProperties['borderImageSource'], string>
    | CssString;
  readonly borderImageWidth:
    | keyof BorderImageWidthValues
    | Exclude<NativeProperties['borderImageWidth'], string>
    | CssString;
  readonly borderInline:
    keyof BorderInlineValues | Exclude<NativeProperties['borderInline'], string> | CssString;
  readonly borderInlineColor:
    | keyof BorderInlineColorValues
    | Exclude<NativeProperties['borderInlineColor'], string>
    | CssString;
  readonly borderInlineEnd:
    keyof BorderInlineEndValues | Exclude<NativeProperties['borderInlineEnd'], string> | CssString;
  readonly borderInlineEndColor:
    | keyof BorderInlineEndColorValues
    | Exclude<NativeProperties['borderInlineEndColor'], string>
    | CssString;
  readonly borderInlineEndStyle:
    keyof BorderInlineEndStyleValues | Exclude<NativeProperties['borderInlineEndStyle'], string>;
  readonly borderInlineEndWidth:
    keyof BorderInlineEndWidthValues | Exclude<NativeProperties['borderInlineEndWidth'], string>;
  readonly borderInlineStart:
    | keyof BorderInlineStartValues
    | Exclude<NativeProperties['borderInlineStart'], string>
    | CssString;
  readonly borderInlineStartColor:
    | keyof BorderInlineStartColorValues
    | Exclude<NativeProperties['borderInlineStartColor'], string>
    | CssString;
  readonly borderInlineStartStyle:
    | keyof BorderInlineStartStyleValues
    | Exclude<NativeProperties['borderInlineStartStyle'], string>;
  readonly borderInlineStartWidth:
    | keyof BorderInlineStartWidthValues
    | Exclude<NativeProperties['borderInlineStartWidth'], string>;
  readonly borderInlineStyle:
    | keyof BorderInlineStyleValues
    | Exclude<NativeProperties['borderInlineStyle'], string>
    | CssString;
  readonly borderInlineWidth:
    | keyof BorderInlineWidthValues
    | Exclude<NativeProperties['borderInlineWidth'], string>
    | CssString;
  readonly borderLeft:
    keyof BorderLeftValues | Exclude<NativeProperties['borderLeft'], string> | CssString;
  readonly borderLeftColor:
    keyof BorderLeftColorValues | Exclude<NativeProperties['borderLeftColor'], string> | CssString;
  readonly borderLeftStyle:
    keyof BorderLeftStyleValues | Exclude<NativeProperties['borderLeftStyle'], string>;
  readonly borderLeftWidth:
    keyof BorderLeftWidthValues | Exclude<NativeProperties['borderLeftWidth'], string>;
  readonly borderRadius:
    keyof BorderRadiusValues | Exclude<NativeProperties['borderRadius'], string> | CssString;
  readonly borderRight:
    keyof BorderRightValues | Exclude<NativeProperties['borderRight'], string> | CssString;
  readonly borderRightColor:
    | keyof BorderRightColorValues
    | Exclude<NativeProperties['borderRightColor'], string>
    | CssString;
  readonly borderRightStyle:
    keyof BorderRightStyleValues | Exclude<NativeProperties['borderRightStyle'], string>;
  readonly borderRightWidth:
    keyof BorderRightWidthValues | Exclude<NativeProperties['borderRightWidth'], string>;
  readonly borderSpacing:
    keyof BorderSpacingValues | Exclude<NativeProperties['borderSpacing'], string> | CssString;
  readonly borderStartEndRadius:
    | keyof BorderStartEndRadiusValues
    | Exclude<NativeProperties['borderStartEndRadius'], string>
    | CssString;
  readonly borderStartStartRadius:
    | keyof BorderStartStartRadiusValues
    | Exclude<NativeProperties['borderStartStartRadius'], string>
    | CssString;
  readonly borderStyle:
    keyof BorderStyleValues | Exclude<NativeProperties['borderStyle'], string> | CssString;
  readonly borderTop:
    keyof BorderTopValues | Exclude<NativeProperties['borderTop'], string> | CssString;
  readonly borderTopColor:
    keyof BorderTopColorValues | Exclude<NativeProperties['borderTopColor'], string> | CssString;
  readonly borderTopLeftRadius:
    | keyof BorderTopLeftRadiusValues
    | Exclude<NativeProperties['borderTopLeftRadius'], string>
    | CssString;
  readonly borderTopRightRadius:
    | keyof BorderTopRightRadiusValues
    | Exclude<NativeProperties['borderTopRightRadius'], string>
    | CssString;
  readonly borderTopStyle:
    keyof BorderTopStyleValues | Exclude<NativeProperties['borderTopStyle'], string>;
  readonly borderTopWidth:
    keyof BorderTopWidthValues | Exclude<NativeProperties['borderTopWidth'], string>;
  readonly borderWidth:
    keyof BorderWidthValues | Exclude<NativeProperties['borderWidth'], string> | CssString;
  readonly bottom: keyof BottomValues | Exclude<NativeProperties['bottom'], string> | CssString;
  readonly boxAlign: keyof BoxAlignValues | Exclude<NativeProperties['boxAlign'], string>;
  readonly boxDecorationBreak:
    keyof BoxDecorationBreakValues | Exclude<NativeProperties['boxDecorationBreak'], string>;
  readonly boxDirection:
    keyof BoxDirectionValues | Exclude<NativeProperties['boxDirection'], string>;
  readonly boxFlex: keyof BoxFlexValues | Exclude<NativeProperties['boxFlex'], string> | CssString;
  readonly boxFlexGroup:
    keyof BoxFlexGroupValues | Exclude<NativeProperties['boxFlexGroup'], string> | CssString;
  readonly boxLines: keyof BoxLinesValues | Exclude<NativeProperties['boxLines'], string>;
  readonly boxOrdinalGroup:
    keyof BoxOrdinalGroupValues | Exclude<NativeProperties['boxOrdinalGroup'], string> | CssString;
  readonly boxOrient: keyof BoxOrientValues | Exclude<NativeProperties['boxOrient'], string>;
  readonly boxPack: keyof BoxPackValues | Exclude<NativeProperties['boxPack'], string>;
  readonly boxShadow:
    keyof BoxShadowValues | Exclude<NativeProperties['boxShadow'], string> | CssString;
  readonly boxSizing: keyof BoxSizingValues | Exclude<NativeProperties['boxSizing'], string>;
  readonly breakAfter: keyof BreakAfterValues | Exclude<NativeProperties['breakAfter'], string>;
  readonly breakBefore: keyof BreakBeforeValues | Exclude<NativeProperties['breakBefore'], string>;
  readonly breakInside: keyof BreakInsideValues | Exclude<NativeProperties['breakInside'], string>;
  readonly captionSide: keyof CaptionSideValues | Exclude<NativeProperties['captionSide'], string>;
  readonly caret: keyof CaretValues | Exclude<NativeProperties['caret'], string> | CssString;
  readonly caretColor:
    keyof CaretColorValues | Exclude<NativeProperties['caretColor'], string> | CssString;
  readonly caretShape: keyof CaretShapeValues | Exclude<NativeProperties['caretShape'], string>;
  readonly clear: keyof ClearValues | Exclude<NativeProperties['clear'], string>;
  readonly clip: keyof ClipValues | Exclude<NativeProperties['clip'], string> | CssString;
  readonly clipPath:
    keyof ClipPathValues | Exclude<NativeProperties['clipPath'], string> | CssString;
  readonly clipRule: keyof ClipRuleValues | Exclude<NativeProperties['clipRule'], string>;
  readonly color: keyof ColorValues | Exclude<NativeProperties['color'], string> | CssString;
  readonly colorAdjust: keyof ColorAdjustValues | Exclude<NativeProperties['colorAdjust'], string>;
  readonly colorInterpolation:
    keyof ColorInterpolationValues | Exclude<NativeProperties['colorInterpolation'], string>;
  readonly colorInterpolationFilters:
    | keyof ColorInterpolationFiltersValues
    | Exclude<NativeProperties['colorInterpolationFilters'], string>;
  readonly colorRendering:
    keyof ColorRenderingValues | Exclude<NativeProperties['colorRendering'], string>;
  readonly colorScheme:
    keyof ColorSchemeValues | Exclude<NativeProperties['colorScheme'], string> | CssString;
  readonly columnCount:
    keyof ColumnCountValues | Exclude<NativeProperties['columnCount'], string> | CssString;
  readonly columnFill: keyof ColumnFillValues | Exclude<NativeProperties['columnFill'], string>;
  readonly columnGap:
    keyof ColumnGapValues | Exclude<NativeProperties['columnGap'], string> | CssString;
  readonly columnRule:
    keyof ColumnRuleValues | Exclude<NativeProperties['columnRule'], string> | CssString;
  readonly columnRuleColor:
    keyof ColumnRuleColorValues | Exclude<NativeProperties['columnRuleColor'], string> | CssString;
  readonly columnRuleStyle:
    keyof ColumnRuleStyleValues | Exclude<NativeProperties['columnRuleStyle'], string> | CssString;
  readonly columnRuleWidth:
    keyof ColumnRuleWidthValues | Exclude<NativeProperties['columnRuleWidth'], string> | CssString;
  readonly columns: keyof ColumnsValues | Exclude<NativeProperties['columns'], string> | CssString;
  readonly columnSpan: keyof ColumnSpanValues | Exclude<NativeProperties['columnSpan'], string>;
  readonly columnWidth: keyof ColumnWidthValues | Exclude<NativeProperties['columnWidth'], string>;
  readonly contain: keyof ContainValues | Exclude<NativeProperties['contain'], string> | CssString;
  readonly container:
    keyof ContainerValues | Exclude<NativeProperties['container'], string> | CssString;
  readonly containerName:
    keyof ContainerNameValues | Exclude<NativeProperties['containerName'], string> | CssString;
  readonly containerType:
    keyof ContainerTypeValues | Exclude<NativeProperties['containerType'], string> | CssString;
  readonly containIntrinsicBlockSize:
    | keyof ContainIntrinsicBlockSizeValues
    | Exclude<NativeProperties['containIntrinsicBlockSize'], string>
    | CssString;
  readonly containIntrinsicHeight:
    | keyof ContainIntrinsicHeightValues
    | Exclude<NativeProperties['containIntrinsicHeight'], string>
    | CssString;
  readonly containIntrinsicInlineSize:
    | keyof ContainIntrinsicInlineSizeValues
    | Exclude<NativeProperties['containIntrinsicInlineSize'], string>
    | CssString;
  readonly containIntrinsicSize:
    | keyof ContainIntrinsicSizeValues
    | Exclude<NativeProperties['containIntrinsicSize'], string>
    | CssString;
  readonly containIntrinsicWidth:
    | keyof ContainIntrinsicWidthValues
    | Exclude<NativeProperties['containIntrinsicWidth'], string>
    | CssString;
  readonly content: keyof ContentValues | Exclude<NativeProperties['content'], string> | CssString;
  readonly contentVisibility:
    keyof ContentVisibilityValues | Exclude<NativeProperties['contentVisibility'], string>;
  readonly counterIncrement:
    | keyof CounterIncrementValues
    | Exclude<NativeProperties['counterIncrement'], string>
    | CssString;
  readonly counterReset:
    keyof CounterResetValues | Exclude<NativeProperties['counterReset'], string> | CssString;
  readonly counterSet:
    keyof CounterSetValues | Exclude<NativeProperties['counterSet'], string> | CssString;
  readonly cursor: keyof CursorValues | Exclude<NativeProperties['cursor'], string> | CssString;
  readonly cx: keyof CxValues | Exclude<NativeProperties['cx'], string> | CssString;
  readonly cy: keyof CyValues | Exclude<NativeProperties['cy'], string> | CssString;
  readonly d: keyof DValues | Exclude<NativeProperties['d'], string> | CssString;
  readonly direction: keyof DirectionValues | Exclude<NativeProperties['direction'], string>;
  readonly display: keyof DisplayValues | Exclude<NativeProperties['display'], string> | CssString;
  readonly dominantBaseline:
    keyof DominantBaselineValues | Exclude<NativeProperties['dominantBaseline'], string>;
  readonly emptyCells: keyof EmptyCellsValues | Exclude<NativeProperties['emptyCells'], string>;
  readonly fieldSizing: keyof FieldSizingValues | Exclude<NativeProperties['fieldSizing'], string>;
  readonly fill: keyof FillValues | Exclude<NativeProperties['fill'], string> | CssString;
  readonly fillOpacity:
    keyof FillOpacityValues | Exclude<NativeProperties['fillOpacity'], string> | CssString;
  readonly fillRule: keyof FillRuleValues | Exclude<NativeProperties['fillRule'], string>;
  readonly filter: keyof FilterValues | Exclude<NativeProperties['filter'], string> | CssString;
  readonly flex: keyof FlexValues | Exclude<NativeProperties['flex'], string> | CssString;
  readonly flexBasis:
    keyof FlexBasisValues | Exclude<NativeProperties['flexBasis'], string> | CssString;
  readonly flexDirection:
    keyof FlexDirectionValues | Exclude<NativeProperties['flexDirection'], string>;
  readonly flexFlow:
    keyof FlexFlowValues | Exclude<NativeProperties['flexFlow'], string> | CssString;
  readonly flexGrow:
    keyof FlexGrowValues | Exclude<NativeProperties['flexGrow'], string> | CssString;
  readonly flexShrink:
    keyof FlexShrinkValues | Exclude<NativeProperties['flexShrink'], string> | CssString;
  readonly flexWrap: keyof FlexWrapValues | Exclude<NativeProperties['flexWrap'], string>;
  readonly float: keyof FloatValues | Exclude<NativeProperties['float'], string>;
  readonly floodColor:
    keyof FloodColorValues | Exclude<NativeProperties['floodColor'], string> | CssString;
  readonly floodOpacity:
    keyof FloodOpacityValues | Exclude<NativeProperties['floodOpacity'], string> | CssString;
  readonly font: keyof FontValues | Exclude<NativeProperties['font'], string> | CssString;
  readonly fontFamily:
    keyof FontFamilyValues | Exclude<NativeProperties['fontFamily'], string> | CssString;
  readonly fontFeatureSettings:
    | keyof FontFeatureSettingsValues
    | Exclude<NativeProperties['fontFeatureSettings'], string>
    | CssString;
  readonly fontKerning: keyof FontKerningValues | Exclude<NativeProperties['fontKerning'], string>;
  readonly fontLanguageOverride:
    | keyof FontLanguageOverrideValues
    | Exclude<NativeProperties['fontLanguageOverride'], string>
    | CssString;
  readonly fontOpticalSizing:
    keyof FontOpticalSizingValues | Exclude<NativeProperties['fontOpticalSizing'], string>;
  readonly fontPalette:
    keyof FontPaletteValues | Exclude<NativeProperties['fontPalette'], string> | CssString;
  readonly fontSize:
    keyof FontSizeValues | Exclude<NativeProperties['fontSize'], string> | CssString;
  readonly fontSizeAdjust:
    keyof FontSizeAdjustValues | Exclude<NativeProperties['fontSizeAdjust'], string> | CssString;
  readonly fontSmooth: keyof FontSmoothValues | Exclude<NativeProperties['fontSmooth'], string>;
  readonly fontStretch:
    keyof FontStretchValues | Exclude<NativeProperties['fontStretch'], string> | CssString;
  readonly fontStyle:
    keyof FontStyleValues | Exclude<NativeProperties['fontStyle'], string> | CssString;
  readonly fontSynthesis:
    keyof FontSynthesisValues | Exclude<NativeProperties['fontSynthesis'], string> | CssString;
  readonly fontSynthesisPosition:
    keyof FontSynthesisPositionValues | Exclude<NativeProperties['fontSynthesisPosition'], string>;
  readonly fontSynthesisSmallCaps:
    | keyof FontSynthesisSmallCapsValues
    | Exclude<NativeProperties['fontSynthesisSmallCaps'], string>;
  readonly fontSynthesisStyle:
    keyof FontSynthesisStyleValues | Exclude<NativeProperties['fontSynthesisStyle'], string>;
  readonly fontSynthesisWeight:
    keyof FontSynthesisWeightValues | Exclude<NativeProperties['fontSynthesisWeight'], string>;
  readonly fontVariant:
    keyof FontVariantValues | Exclude<NativeProperties['fontVariant'], string> | CssString;
  readonly fontVariantAlternates:
    | keyof FontVariantAlternatesValues
    | Exclude<NativeProperties['fontVariantAlternates'], string>
    | CssString;
  readonly fontVariantCaps:
    keyof FontVariantCapsValues | Exclude<NativeProperties['fontVariantCaps'], string>;
  readonly fontVariantEastAsian:
    | keyof FontVariantEastAsianValues
    | Exclude<NativeProperties['fontVariantEastAsian'], string>
    | CssString;
  readonly fontVariantEmoji:
    keyof FontVariantEmojiValues | Exclude<NativeProperties['fontVariantEmoji'], string>;
  readonly fontVariantLigatures:
    | keyof FontVariantLigaturesValues
    | Exclude<NativeProperties['fontVariantLigatures'], string>
    | CssString;
  readonly fontVariantNumeric:
    | keyof FontVariantNumericValues
    | Exclude<NativeProperties['fontVariantNumeric'], string>
    | CssString;
  readonly fontVariantPosition:
    keyof FontVariantPositionValues | Exclude<NativeProperties['fontVariantPosition'], string>;
  readonly fontVariationSettings:
    | keyof FontVariationSettingsValues
    | Exclude<NativeProperties['fontVariationSettings'], string>
    | CssString;
  readonly fontWeight:
    keyof FontWeightValues | Exclude<NativeProperties['fontWeight'], string> | CssString;
  readonly fontWidth:
    keyof FontWidthValues | Exclude<NativeProperties['fontWidth'], string> | CssString;
  readonly forcedColorAdjust:
    keyof ForcedColorAdjustValues | Exclude<NativeProperties['forcedColorAdjust'], string>;
  readonly gap: keyof GapValues | Exclude<NativeProperties['gap'], string> | CssString;
  readonly glyphOrientationVertical:
    | keyof GlyphOrientationVerticalValues
    | Exclude<NativeProperties['glyphOrientationVertical'], string>
    | CssString;
  readonly grid: keyof GridValues | Exclude<NativeProperties['grid'], string> | CssString;
  readonly gridArea:
    keyof GridAreaValues | Exclude<NativeProperties['gridArea'], string> | CssString;
  readonly gridAutoColumns:
    keyof GridAutoColumnsValues | Exclude<NativeProperties['gridAutoColumns'], string> | CssString;
  readonly gridAutoFlow:
    keyof GridAutoFlowValues | Exclude<NativeProperties['gridAutoFlow'], string> | CssString;
  readonly gridAutoRows:
    keyof GridAutoRowsValues | Exclude<NativeProperties['gridAutoRows'], string> | CssString;
  readonly gridColumn:
    keyof GridColumnValues | Exclude<NativeProperties['gridColumn'], string> | CssString;
  readonly gridColumnEnd:
    keyof GridColumnEndValues | Exclude<NativeProperties['gridColumnEnd'], string> | CssString;
  readonly gridColumnGap:
    keyof GridColumnGapValues | Exclude<NativeProperties['gridColumnGap'], string> | CssString;
  readonly gridColumnStart:
    keyof GridColumnStartValues | Exclude<NativeProperties['gridColumnStart'], string> | CssString;
  readonly gridGap: keyof GridGapValues | Exclude<NativeProperties['gridGap'], string> | CssString;
  readonly gridRow: keyof GridRowValues | Exclude<NativeProperties['gridRow'], string> | CssString;
  readonly gridRowEnd:
    keyof GridRowEndValues | Exclude<NativeProperties['gridRowEnd'], string> | CssString;
  readonly gridRowGap:
    keyof GridRowGapValues | Exclude<NativeProperties['gridRowGap'], string> | CssString;
  readonly gridRowStart:
    keyof GridRowStartValues | Exclude<NativeProperties['gridRowStart'], string> | CssString;
  readonly gridTemplate:
    keyof GridTemplateValues | Exclude<NativeProperties['gridTemplate'], string> | CssString;
  readonly gridTemplateAreas:
    | keyof GridTemplateAreasValues
    | Exclude<NativeProperties['gridTemplateAreas'], string>
    | CssString;
  readonly gridTemplateColumns:
    | keyof GridTemplateColumnsValues
    | Exclude<NativeProperties['gridTemplateColumns'], string>
    | CssString;
  readonly gridTemplateRows:
    | keyof GridTemplateRowsValues
    | Exclude<NativeProperties['gridTemplateRows'], string>
    | CssString;
  readonly hangingPunctuation:
    | keyof HangingPunctuationValues
    | Exclude<NativeProperties['hangingPunctuation'], string>
    | CssString;
  readonly height: keyof HeightValues | Exclude<NativeProperties['height'], string> | CssString;
  readonly hyphenateCharacter:
    | keyof HyphenateCharacterValues
    | Exclude<NativeProperties['hyphenateCharacter'], string>
    | CssString;
  readonly hyphenateLimitChars:
    | keyof HyphenateLimitCharsValues
    | Exclude<NativeProperties['hyphenateLimitChars'], string>
    | CssString;
  readonly hyphens: keyof HyphensValues | Exclude<NativeProperties['hyphens'], string>;
  readonly imageOrientation:
    | keyof ImageOrientationValues
    | Exclude<NativeProperties['imageOrientation'], string>
    | CssString;
  readonly imageRendering:
    keyof ImageRenderingValues | Exclude<NativeProperties['imageRendering'], string>;
  readonly imageResolution:
    keyof ImageResolutionValues | Exclude<NativeProperties['imageResolution'], string> | CssString;
  readonly imeMode: keyof ImeModeValues | Exclude<NativeProperties['imeMode'], string>;
  readonly initialLetter:
    keyof InitialLetterValues | Exclude<NativeProperties['initialLetter'], string> | CssString;
  readonly initialLetterAlign:
    keyof InitialLetterAlignValues | Exclude<NativeProperties['initialLetterAlign'], string>;
  readonly inlineSize:
    keyof InlineSizeValues | Exclude<NativeProperties['inlineSize'], string> | CssString;
  readonly inset: keyof InsetValues | Exclude<NativeProperties['inset'], string> | CssString;
  readonly insetArea:
    keyof InsetAreaValues | Exclude<NativeProperties['insetArea'], string> | CssString;
  readonly insetBlock:
    keyof InsetBlockValues | Exclude<NativeProperties['insetBlock'], string> | CssString;
  readonly insetBlockEnd:
    keyof InsetBlockEndValues | Exclude<NativeProperties['insetBlockEnd'], string> | CssString;
  readonly insetBlockStart:
    keyof InsetBlockStartValues | Exclude<NativeProperties['insetBlockStart'], string> | CssString;
  readonly insetInline:
    keyof InsetInlineValues | Exclude<NativeProperties['insetInline'], string> | CssString;
  readonly insetInlineEnd:
    keyof InsetInlineEndValues | Exclude<NativeProperties['insetInlineEnd'], string> | CssString;
  readonly insetInlineStart:
    | keyof InsetInlineStartValues
    | Exclude<NativeProperties['insetInlineStart'], string>
    | CssString;
  readonly interpolateSize:
    keyof InterpolateSizeValues | Exclude<NativeProperties['interpolateSize'], string>;
  readonly isolation: keyof IsolationValues | Exclude<NativeProperties['isolation'], string>;
  readonly justifyContent:
    keyof JustifyContentValues | Exclude<NativeProperties['justifyContent'], string> | CssString;
  readonly justifyItems:
    keyof JustifyItemsValues | Exclude<NativeProperties['justifyItems'], string> | CssString;
  readonly justifySelf:
    keyof JustifySelfValues | Exclude<NativeProperties['justifySelf'], string> | CssString;
  readonly justifyTracks:
    keyof JustifyTracksValues | Exclude<NativeProperties['justifyTracks'], string> | CssString;
  readonly KhtmlBoxAlign:
    keyof KhtmlBoxAlignValues | Exclude<NativeProperties['KhtmlBoxAlign'], string>;
  readonly KhtmlBoxDirection:
    keyof KhtmlBoxDirectionValues | Exclude<NativeProperties['KhtmlBoxDirection'], string>;
  readonly KhtmlBoxFlex:
    keyof KhtmlBoxFlexValues | Exclude<NativeProperties['KhtmlBoxFlex'], string> | CssString;
  readonly KhtmlBoxFlexGroup:
    | keyof KhtmlBoxFlexGroupValues
    | Exclude<NativeProperties['KhtmlBoxFlexGroup'], string>
    | CssString;
  readonly KhtmlBoxLines:
    keyof KhtmlBoxLinesValues | Exclude<NativeProperties['KhtmlBoxLines'], string>;
  readonly KhtmlBoxOrdinalGroup:
    | keyof KhtmlBoxOrdinalGroupValues
    | Exclude<NativeProperties['KhtmlBoxOrdinalGroup'], string>
    | CssString;
  readonly KhtmlBoxOrient:
    keyof KhtmlBoxOrientValues | Exclude<NativeProperties['KhtmlBoxOrient'], string>;
  readonly KhtmlBoxPack:
    keyof KhtmlBoxPackValues | Exclude<NativeProperties['KhtmlBoxPack'], string>;
  readonly KhtmlLineBreak:
    keyof KhtmlLineBreakValues | Exclude<NativeProperties['KhtmlLineBreak'], string>;
  readonly KhtmlOpacity:
    keyof KhtmlOpacityValues | Exclude<NativeProperties['KhtmlOpacity'], string> | CssString;
  readonly KhtmlUserSelect:
    keyof KhtmlUserSelectValues | Exclude<NativeProperties['KhtmlUserSelect'], string>;
  readonly left: keyof LeftValues | Exclude<NativeProperties['left'], string> | CssString;
  readonly letterSpacing:
    keyof LetterSpacingValues | Exclude<NativeProperties['letterSpacing'], string>;
  readonly lightingColor:
    keyof LightingColorValues | Exclude<NativeProperties['lightingColor'], string> | CssString;
  readonly lineBreak: keyof LineBreakValues | Exclude<NativeProperties['lineBreak'], string>;
  readonly lineClamp:
    keyof LineClampValues | Exclude<NativeProperties['lineClamp'], string> | CssString;
  readonly lineHeight:
    keyof LineHeightValues | Exclude<NativeProperties['lineHeight'], string> | CssString;
  readonly lineHeightStep:
    keyof LineHeightStepValues | Exclude<NativeProperties['lineHeightStep'], string>;
  readonly listStyle:
    keyof ListStyleValues | Exclude<NativeProperties['listStyle'], string> | CssString;
  readonly listStyleImage:
    keyof ListStyleImageValues | Exclude<NativeProperties['listStyleImage'], string> | CssString;
  readonly listStylePosition:
    keyof ListStylePositionValues | Exclude<NativeProperties['listStylePosition'], string>;
  readonly listStyleType:
    keyof ListStyleTypeValues | Exclude<NativeProperties['listStyleType'], string> | CssString;
  readonly margin: keyof MarginValues | Exclude<NativeProperties['margin'], string> | CssString;
  readonly marginBlock:
    keyof MarginBlockValues | Exclude<NativeProperties['marginBlock'], string> | CssString;
  readonly marginBlockEnd:
    keyof MarginBlockEndValues | Exclude<NativeProperties['marginBlockEnd'], string> | CssString;
  readonly marginBlockStart:
    | keyof MarginBlockStartValues
    | Exclude<NativeProperties['marginBlockStart'], string>
    | CssString;
  readonly marginBottom:
    keyof MarginBottomValues | Exclude<NativeProperties['marginBottom'], string> | CssString;
  readonly marginInline:
    keyof MarginInlineValues | Exclude<NativeProperties['marginInline'], string> | CssString;
  readonly marginInlineEnd:
    keyof MarginInlineEndValues | Exclude<NativeProperties['marginInlineEnd'], string> | CssString;
  readonly marginInlineStart:
    | keyof MarginInlineStartValues
    | Exclude<NativeProperties['marginInlineStart'], string>
    | CssString;
  readonly marginLeft:
    keyof MarginLeftValues | Exclude<NativeProperties['marginLeft'], string> | CssString;
  readonly marginRight:
    keyof MarginRightValues | Exclude<NativeProperties['marginRight'], string> | CssString;
  readonly marginTop:
    keyof MarginTopValues | Exclude<NativeProperties['marginTop'], string> | CssString;
  readonly marginTrim: keyof MarginTrimValues | Exclude<NativeProperties['marginTrim'], string>;
  readonly marker: keyof MarkerValues | Exclude<NativeProperties['marker'], string> | CssString;
  readonly markerEnd:
    keyof MarkerEndValues | Exclude<NativeProperties['markerEnd'], string> | CssString;
  readonly markerMid:
    keyof MarkerMidValues | Exclude<NativeProperties['markerMid'], string> | CssString;
  readonly markerStart:
    keyof MarkerStartValues | Exclude<NativeProperties['markerStart'], string> | CssString;
  readonly mask: keyof MaskValues | Exclude<NativeProperties['mask'], string> | CssString;
  readonly maskBorder:
    keyof MaskBorderValues | Exclude<NativeProperties['maskBorder'], string> | CssString;
  readonly maskBorderMode:
    keyof MaskBorderModeValues | Exclude<NativeProperties['maskBorderMode'], string>;
  readonly maskBorderOutset:
    | keyof MaskBorderOutsetValues
    | Exclude<NativeProperties['maskBorderOutset'], string>
    | CssString;
  readonly maskBorderRepeat:
    | keyof MaskBorderRepeatValues
    | Exclude<NativeProperties['maskBorderRepeat'], string>
    | CssString;
  readonly maskBorderSlice:
    keyof MaskBorderSliceValues | Exclude<NativeProperties['maskBorderSlice'], string> | CssString;
  readonly maskBorderSource:
    | keyof MaskBorderSourceValues
    | Exclude<NativeProperties['maskBorderSource'], string>
    | CssString;
  readonly maskBorderWidth:
    keyof MaskBorderWidthValues | Exclude<NativeProperties['maskBorderWidth'], string> | CssString;
  readonly maskClip:
    keyof MaskClipValues | Exclude<NativeProperties['maskClip'], string> | CssString;
  readonly maskComposite:
    keyof MaskCompositeValues | Exclude<NativeProperties['maskComposite'], string> | CssString;
  readonly maskImage:
    keyof MaskImageValues | Exclude<NativeProperties['maskImage'], string> | CssString;
  readonly maskMode:
    keyof MaskModeValues | Exclude<NativeProperties['maskMode'], string> | CssString;
  readonly maskOrigin:
    keyof MaskOriginValues | Exclude<NativeProperties['maskOrigin'], string> | CssString;
  readonly maskPosition:
    keyof MaskPositionValues | Exclude<NativeProperties['maskPosition'], string> | CssString;
  readonly maskRepeat:
    keyof MaskRepeatValues | Exclude<NativeProperties['maskRepeat'], string> | CssString;
  readonly maskSize:
    keyof MaskSizeValues | Exclude<NativeProperties['maskSize'], string> | CssString;
  readonly maskType: keyof MaskTypeValues | Exclude<NativeProperties['maskType'], string>;
  readonly masonryAutoFlow:
    keyof MasonryAutoFlowValues | Exclude<NativeProperties['masonryAutoFlow'], string> | CssString;
  readonly mathDepth:
    keyof MathDepthValues | Exclude<NativeProperties['mathDepth'], string> | CssString;
  readonly mathShift: keyof MathShiftValues | Exclude<NativeProperties['mathShift'], string>;
  readonly mathStyle: keyof MathStyleValues | Exclude<NativeProperties['mathStyle'], string>;
  readonly maxBlockSize:
    keyof MaxBlockSizeValues | Exclude<NativeProperties['maxBlockSize'], string> | CssString;
  readonly maxHeight:
    keyof MaxHeightValues | Exclude<NativeProperties['maxHeight'], string> | CssString;
  readonly maxInlineSize:
    keyof MaxInlineSizeValues | Exclude<NativeProperties['maxInlineSize'], string> | CssString;
  readonly maxLines:
    keyof MaxLinesValues | Exclude<NativeProperties['maxLines'], string> | CssString;
  readonly maxWidth:
    keyof MaxWidthValues | Exclude<NativeProperties['maxWidth'], string> | CssString;
  readonly minBlockSize:
    keyof MinBlockSizeValues | Exclude<NativeProperties['minBlockSize'], string> | CssString;
  readonly minHeight:
    keyof MinHeightValues | Exclude<NativeProperties['minHeight'], string> | CssString;
  readonly minInlineSize:
    keyof MinInlineSizeValues | Exclude<NativeProperties['minInlineSize'], string> | CssString;
  readonly minWidth:
    keyof MinWidthValues | Exclude<NativeProperties['minWidth'], string> | CssString;
  readonly mixBlendMode:
    keyof MixBlendModeValues | Exclude<NativeProperties['mixBlendMode'], string>;
  readonly motion: keyof MotionValues | Exclude<NativeProperties['motion'], string> | CssString;
  readonly motionDistance:
    keyof MotionDistanceValues | Exclude<NativeProperties['motionDistance'], string> | CssString;
  readonly motionPath:
    keyof MotionPathValues | Exclude<NativeProperties['motionPath'], string> | CssString;
  readonly motionRotation:
    keyof MotionRotationValues | Exclude<NativeProperties['motionRotation'], string> | CssString;
  readonly MozAnimation:
    keyof MozAnimationValues | Exclude<NativeProperties['MozAnimation'], string> | CssString;
  readonly MozAnimationDelay:
    | keyof MozAnimationDelayValues
    | Exclude<NativeProperties['MozAnimationDelay'], string>
    | CssString;
  readonly MozAnimationDirection:
    | keyof MozAnimationDirectionValues
    | Exclude<NativeProperties['MozAnimationDirection'], string>
    | CssString;
  readonly MozAnimationDuration:
    | keyof MozAnimationDurationValues
    | Exclude<NativeProperties['MozAnimationDuration'], string>
    | CssString;
  readonly MozAnimationFillMode:
    | keyof MozAnimationFillModeValues
    | Exclude<NativeProperties['MozAnimationFillMode'], string>
    | CssString;
  readonly MozAnimationIterationCount:
    | keyof MozAnimationIterationCountValues
    | Exclude<NativeProperties['MozAnimationIterationCount'], string>
    | CssString;
  readonly MozAnimationName:
    | keyof MozAnimationNameValues
    | Exclude<NativeProperties['MozAnimationName'], string>
    | CssString;
  readonly MozAnimationPlayState:
    | keyof MozAnimationPlayStateValues
    | Exclude<NativeProperties['MozAnimationPlayState'], string>
    | CssString;
  readonly MozAnimationTimingFunction:
    | keyof MozAnimationTimingFunctionValues
    | Exclude<NativeProperties['MozAnimationTimingFunction'], string>
    | CssString;
  readonly MozAppearance:
    keyof MozAppearanceValues | Exclude<NativeProperties['MozAppearance'], string>;
  readonly MozBackfaceVisibility:
    keyof MozBackfaceVisibilityValues | Exclude<NativeProperties['MozBackfaceVisibility'], string>;
  readonly MozBackgroundClip:
    | keyof MozBackgroundClipValues
    | Exclude<NativeProperties['MozBackgroundClip'], string>
    | CssString;
  readonly MozBackgroundOrigin:
    | keyof MozBackgroundOriginValues
    | Exclude<NativeProperties['MozBackgroundOrigin'], string>
    | CssString;
  readonly MozBackgroundSize:
    | keyof MozBackgroundSizeValues
    | Exclude<NativeProperties['MozBackgroundSize'], string>
    | CssString;
  readonly MozBinding:
    keyof MozBindingValues | Exclude<NativeProperties['MozBinding'], string> | CssString;
  readonly MozBorderBottomColors:
    | keyof MozBorderBottomColorsValues
    | Exclude<NativeProperties['MozBorderBottomColors'], string>
    | CssString;
  readonly MozBorderEndColor:
    | keyof MozBorderEndColorValues
    | Exclude<NativeProperties['MozBorderEndColor'], string>
    | CssString;
  readonly MozBorderEndStyle:
    keyof MozBorderEndStyleValues | Exclude<NativeProperties['MozBorderEndStyle'], string>;
  readonly MozBorderEndWidth:
    keyof MozBorderEndWidthValues | Exclude<NativeProperties['MozBorderEndWidth'], string>;
  readonly MozBorderImage:
    keyof MozBorderImageValues | Exclude<NativeProperties['MozBorderImage'], string> | CssString;
  readonly MozBorderLeftColors:
    | keyof MozBorderLeftColorsValues
    | Exclude<NativeProperties['MozBorderLeftColors'], string>
    | CssString;
  readonly MozBorderRadius:
    keyof MozBorderRadiusValues | Exclude<NativeProperties['MozBorderRadius'], string> | CssString;
  readonly MozBorderRadiusBottomleft:
    | keyof MozBorderRadiusBottomleftValues
    | Exclude<NativeProperties['MozBorderRadiusBottomleft'], string>
    | CssString;
  readonly MozBorderRadiusBottomright:
    | keyof MozBorderRadiusBottomrightValues
    | Exclude<NativeProperties['MozBorderRadiusBottomright'], string>
    | CssString;
  readonly MozBorderRadiusTopleft:
    | keyof MozBorderRadiusTopleftValues
    | Exclude<NativeProperties['MozBorderRadiusTopleft'], string>
    | CssString;
  readonly MozBorderRadiusTopright:
    | keyof MozBorderRadiusToprightValues
    | Exclude<NativeProperties['MozBorderRadiusTopright'], string>
    | CssString;
  readonly MozBorderRightColors:
    | keyof MozBorderRightColorsValues
    | Exclude<NativeProperties['MozBorderRightColors'], string>
    | CssString;
  readonly MozBorderStartColor:
    | keyof MozBorderStartColorValues
    | Exclude<NativeProperties['MozBorderStartColor'], string>
    | CssString;
  readonly MozBorderStartStyle:
    keyof MozBorderStartStyleValues | Exclude<NativeProperties['MozBorderStartStyle'], string>;
  readonly MozBorderTopColors:
    | keyof MozBorderTopColorsValues
    | Exclude<NativeProperties['MozBorderTopColors'], string>
    | CssString;
  readonly MozBoxAlign: keyof MozBoxAlignValues | Exclude<NativeProperties['MozBoxAlign'], string>;
  readonly MozBoxDirection:
    keyof MozBoxDirectionValues | Exclude<NativeProperties['MozBoxDirection'], string>;
  readonly MozBoxFlex:
    keyof MozBoxFlexValues | Exclude<NativeProperties['MozBoxFlex'], string> | CssString;
  readonly MozBoxOrdinalGroup:
    | keyof MozBoxOrdinalGroupValues
    | Exclude<NativeProperties['MozBoxOrdinalGroup'], string>
    | CssString;
  readonly MozBoxOrient:
    keyof MozBoxOrientValues | Exclude<NativeProperties['MozBoxOrient'], string>;
  readonly MozBoxPack: keyof MozBoxPackValues | Exclude<NativeProperties['MozBoxPack'], string>;
  readonly MozBoxShadow:
    keyof MozBoxShadowValues | Exclude<NativeProperties['MozBoxShadow'], string> | CssString;
  readonly MozBoxSizing:
    keyof MozBoxSizingValues | Exclude<NativeProperties['MozBoxSizing'], string>;
  readonly MozColumnCount:
    keyof MozColumnCountValues | Exclude<NativeProperties['MozColumnCount'], string> | CssString;
  readonly MozColumnFill:
    keyof MozColumnFillValues | Exclude<NativeProperties['MozColumnFill'], string>;
  readonly MozColumnRule:
    keyof MozColumnRuleValues | Exclude<NativeProperties['MozColumnRule'], string> | CssString;
  readonly MozColumnRuleColor:
    | keyof MozColumnRuleColorValues
    | Exclude<NativeProperties['MozColumnRuleColor'], string>
    | CssString;
  readonly MozColumnRuleStyle:
    | keyof MozColumnRuleStyleValues
    | Exclude<NativeProperties['MozColumnRuleStyle'], string>
    | CssString;
  readonly MozColumnRuleWidth:
    | keyof MozColumnRuleWidthValues
    | Exclude<NativeProperties['MozColumnRuleWidth'], string>
    | CssString;
  readonly MozColumns:
    keyof MozColumnsValues | Exclude<NativeProperties['MozColumns'], string> | CssString;
  readonly MozColumnWidth:
    keyof MozColumnWidthValues | Exclude<NativeProperties['MozColumnWidth'], string>;
  readonly MozContextProperties:
    | keyof MozContextPropertiesValues
    | Exclude<NativeProperties['MozContextProperties'], string>
    | CssString;
  readonly MozFloatEdge:
    keyof MozFloatEdgeValues | Exclude<NativeProperties['MozFloatEdge'], string>;
  readonly MozFontFeatureSettings:
    | keyof MozFontFeatureSettingsValues
    | Exclude<NativeProperties['MozFontFeatureSettings'], string>
    | CssString;
  readonly MozFontLanguageOverride:
    | keyof MozFontLanguageOverrideValues
    | Exclude<NativeProperties['MozFontLanguageOverride'], string>
    | CssString;
  readonly MozForceBrokenImageIcon:
    | keyof MozForceBrokenImageIconValues
    | Exclude<NativeProperties['MozForceBrokenImageIcon'], string>
    | CssString;
  readonly MozHyphens: keyof MozHyphensValues | Exclude<NativeProperties['MozHyphens'], string>;
  readonly MozMarginEnd:
    keyof MozMarginEndValues | Exclude<NativeProperties['MozMarginEnd'], string> | CssString;
  readonly MozMarginStart:
    keyof MozMarginStartValues | Exclude<NativeProperties['MozMarginStart'], string> | CssString;
  readonly MozOpacity:
    keyof MozOpacityValues | Exclude<NativeProperties['MozOpacity'], string> | CssString;
  readonly MozOrient: keyof MozOrientValues | Exclude<NativeProperties['MozOrient'], string>;
  readonly MozOsxFontSmoothing:
    keyof MozOsxFontSmoothingValues | Exclude<NativeProperties['MozOsxFontSmoothing'], string>;
  readonly MozOutline:
    keyof MozOutlineValues | Exclude<NativeProperties['MozOutline'], string> | CssString;
  readonly MozOutlineColor:
    keyof MozOutlineColorValues | Exclude<NativeProperties['MozOutlineColor'], string> | CssString;
  readonly MozOutlineRadius:
    | keyof MozOutlineRadiusValues
    | Exclude<NativeProperties['MozOutlineRadius'], string>
    | CssString;
  readonly MozOutlineRadiusBottomleft:
    | keyof MozOutlineRadiusBottomleftValues
    | Exclude<NativeProperties['MozOutlineRadiusBottomleft'], string>
    | CssString;
  readonly MozOutlineRadiusBottomright:
    | keyof MozOutlineRadiusBottomrightValues
    | Exclude<NativeProperties['MozOutlineRadiusBottomright'], string>
    | CssString;
  readonly MozOutlineRadiusTopleft:
    | keyof MozOutlineRadiusTopleftValues
    | Exclude<NativeProperties['MozOutlineRadiusTopleft'], string>
    | CssString;
  readonly MozOutlineRadiusTopright:
    | keyof MozOutlineRadiusToprightValues
    | Exclude<NativeProperties['MozOutlineRadiusTopright'], string>
    | CssString;
  readonly MozOutlineStyle:
    keyof MozOutlineStyleValues | Exclude<NativeProperties['MozOutlineStyle'], string>;
  readonly MozOutlineWidth:
    keyof MozOutlineWidthValues | Exclude<NativeProperties['MozOutlineWidth'], string>;
  readonly MozPaddingEnd:
    keyof MozPaddingEndValues | Exclude<NativeProperties['MozPaddingEnd'], string> | CssString;
  readonly MozPaddingStart:
    keyof MozPaddingStartValues | Exclude<NativeProperties['MozPaddingStart'], string> | CssString;
  readonly MozPerspective:
    keyof MozPerspectiveValues | Exclude<NativeProperties['MozPerspective'], string>;
  readonly MozPerspectiveOrigin:
    | keyof MozPerspectiveOriginValues
    | Exclude<NativeProperties['MozPerspectiveOrigin'], string>
    | CssString;
  readonly MozStackSizing:
    keyof MozStackSizingValues | Exclude<NativeProperties['MozStackSizing'], string>;
  readonly MozTabSize:
    keyof MozTabSizeValues | Exclude<NativeProperties['MozTabSize'], string> | CssString;
  readonly MozTextAlignLast:
    keyof MozTextAlignLastValues | Exclude<NativeProperties['MozTextAlignLast'], string>;
  readonly MozTextBlink:
    keyof MozTextBlinkValues | Exclude<NativeProperties['MozTextBlink'], string>;
  readonly MozTextDecorationColor:
    | keyof MozTextDecorationColorValues
    | Exclude<NativeProperties['MozTextDecorationColor'], string>
    | CssString;
  readonly MozTextDecorationLine:
    | keyof MozTextDecorationLineValues
    | Exclude<NativeProperties['MozTextDecorationLine'], string>
    | CssString;
  readonly MozTextDecorationStyle:
    | keyof MozTextDecorationStyleValues
    | Exclude<NativeProperties['MozTextDecorationStyle'], string>;
  readonly MozTextSizeAdjust:
    | keyof MozTextSizeAdjustValues
    | Exclude<NativeProperties['MozTextSizeAdjust'], string>
    | CssString;
  readonly MozTransform:
    keyof MozTransformValues | Exclude<NativeProperties['MozTransform'], string> | CssString;
  readonly MozTransformOrigin:
    | keyof MozTransformOriginValues
    | Exclude<NativeProperties['MozTransformOrigin'], string>
    | CssString;
  readonly MozTransformStyle:
    keyof MozTransformStyleValues | Exclude<NativeProperties['MozTransformStyle'], string>;
  readonly MozTransition:
    keyof MozTransitionValues | Exclude<NativeProperties['MozTransition'], string> | CssString;
  readonly MozTransitionDelay:
    | keyof MozTransitionDelayValues
    | Exclude<NativeProperties['MozTransitionDelay'], string>
    | CssString;
  readonly MozTransitionDuration:
    | keyof MozTransitionDurationValues
    | Exclude<NativeProperties['MozTransitionDuration'], string>
    | CssString;
  readonly MozTransitionProperty:
    | keyof MozTransitionPropertyValues
    | Exclude<NativeProperties['MozTransitionProperty'], string>
    | CssString;
  readonly MozTransitionTimingFunction:
    | keyof MozTransitionTimingFunctionValues
    | Exclude<NativeProperties['MozTransitionTimingFunction'], string>
    | CssString;
  readonly MozUserFocus:
    keyof MozUserFocusValues | Exclude<NativeProperties['MozUserFocus'], string>;
  readonly MozUserInput:
    keyof MozUserInputValues | Exclude<NativeProperties['MozUserInput'], string>;
  readonly MozUserModify:
    keyof MozUserModifyValues | Exclude<NativeProperties['MozUserModify'], string>;
  readonly MozUserSelect:
    keyof MozUserSelectValues | Exclude<NativeProperties['MozUserSelect'], string>;
  readonly MozWindowDragging:
    keyof MozWindowDraggingValues | Exclude<NativeProperties['MozWindowDragging'], string>;
  readonly MozWindowShadow:
    keyof MozWindowShadowValues | Exclude<NativeProperties['MozWindowShadow'], string>;
  readonly msAccelerator:
    keyof MsAcceleratorValues | Exclude<NativeProperties['msAccelerator'], string>;
  readonly msBlockProgression:
    keyof MsBlockProgressionValues | Exclude<NativeProperties['msBlockProgression'], string>;
  readonly msContentZoomChaining:
    keyof MsContentZoomChainingValues | Exclude<NativeProperties['msContentZoomChaining'], string>;
  readonly msContentZooming:
    keyof MsContentZoomingValues | Exclude<NativeProperties['msContentZooming'], string>;
  readonly msContentZoomLimit:
    | keyof MsContentZoomLimitValues
    | Exclude<NativeProperties['msContentZoomLimit'], string>
    | CssString;
  readonly msContentZoomLimitMax:
    | keyof MsContentZoomLimitMaxValues
    | Exclude<NativeProperties['msContentZoomLimitMax'], string>
    | CssString;
  readonly msContentZoomLimitMin:
    | keyof MsContentZoomLimitMinValues
    | Exclude<NativeProperties['msContentZoomLimitMin'], string>
    | CssString;
  readonly msContentZoomSnap:
    | keyof MsContentZoomSnapValues
    | Exclude<NativeProperties['msContentZoomSnap'], string>
    | CssString;
  readonly msContentZoomSnapPoints:
    | keyof MsContentZoomSnapPointsValues
    | Exclude<NativeProperties['msContentZoomSnapPoints'], string>
    | CssString;
  readonly msContentZoomSnapType:
    keyof MsContentZoomSnapTypeValues | Exclude<NativeProperties['msContentZoomSnapType'], string>;
  readonly msFilter:
    keyof MsFilterValues | Exclude<NativeProperties['msFilter'], string> | CssString;
  readonly msFlex: keyof MsFlexValues | Exclude<NativeProperties['msFlex'], string> | CssString;
  readonly msFlexDirection:
    keyof MsFlexDirectionValues | Exclude<NativeProperties['msFlexDirection'], string>;
  readonly msFlexPositive:
    keyof MsFlexPositiveValues | Exclude<NativeProperties['msFlexPositive'], string> | CssString;
  readonly msFlowFrom:
    keyof MsFlowFromValues | Exclude<NativeProperties['msFlowFrom'], string> | CssString;
  readonly msFlowInto:
    keyof MsFlowIntoValues | Exclude<NativeProperties['msFlowInto'], string> | CssString;
  readonly msGridColumns:
    keyof MsGridColumnsValues | Exclude<NativeProperties['msGridColumns'], string> | CssString;
  readonly msGridRows:
    keyof MsGridRowsValues | Exclude<NativeProperties['msGridRows'], string> | CssString;
  readonly msHighContrastAdjust:
    keyof MsHighContrastAdjustValues | Exclude<NativeProperties['msHighContrastAdjust'], string>;
  readonly msHyphenateLimitChars:
    | keyof MsHyphenateLimitCharsValues
    | Exclude<NativeProperties['msHyphenateLimitChars'], string>
    | CssString;
  readonly msHyphenateLimitLines:
    | keyof MsHyphenateLimitLinesValues
    | Exclude<NativeProperties['msHyphenateLimitLines'], string>
    | CssString;
  readonly msHyphenateLimitZone:
    | keyof MsHyphenateLimitZoneValues
    | Exclude<NativeProperties['msHyphenateLimitZone'], string>
    | CssString;
  readonly msHyphens: keyof MsHyphensValues | Exclude<NativeProperties['msHyphens'], string>;
  readonly msImeAlign: keyof MsImeAlignValues | Exclude<NativeProperties['msImeAlign'], string>;
  readonly msImeMode: keyof MsImeModeValues | Exclude<NativeProperties['msImeMode'], string>;
  readonly msLineBreak: keyof MsLineBreakValues | Exclude<NativeProperties['msLineBreak'], string>;
  readonly msOrder: keyof MsOrderValues | Exclude<NativeProperties['msOrder'], string> | CssString;
  readonly msOverflowStyle:
    keyof MsOverflowStyleValues | Exclude<NativeProperties['msOverflowStyle'], string>;
  readonly msOverflowX: keyof MsOverflowXValues | Exclude<NativeProperties['msOverflowX'], string>;
  readonly msOverflowY: keyof MsOverflowYValues | Exclude<NativeProperties['msOverflowY'], string>;
  readonly msScrollbar3dlightColor:
    | keyof MsScrollbar3dlightColorValues
    | Exclude<NativeProperties['msScrollbar3dlightColor'], string>
    | CssString;
  readonly msScrollbarArrowColor:
    | keyof MsScrollbarArrowColorValues
    | Exclude<NativeProperties['msScrollbarArrowColor'], string>
    | CssString;
  readonly msScrollbarBaseColor:
    | keyof MsScrollbarBaseColorValues
    | Exclude<NativeProperties['msScrollbarBaseColor'], string>
    | CssString;
  readonly msScrollbarDarkshadowColor:
    | keyof MsScrollbarDarkshadowColorValues
    | Exclude<NativeProperties['msScrollbarDarkshadowColor'], string>
    | CssString;
  readonly msScrollbarFaceColor:
    | keyof MsScrollbarFaceColorValues
    | Exclude<NativeProperties['msScrollbarFaceColor'], string>
    | CssString;
  readonly msScrollbarHighlightColor:
    | keyof MsScrollbarHighlightColorValues
    | Exclude<NativeProperties['msScrollbarHighlightColor'], string>
    | CssString;
  readonly msScrollbarShadowColor:
    | keyof MsScrollbarShadowColorValues
    | Exclude<NativeProperties['msScrollbarShadowColor'], string>
    | CssString;
  readonly msScrollbarTrackColor:
    | keyof MsScrollbarTrackColorValues
    | Exclude<NativeProperties['msScrollbarTrackColor'], string>
    | CssString;
  readonly msScrollChaining:
    keyof MsScrollChainingValues | Exclude<NativeProperties['msScrollChaining'], string>;
  readonly msScrollLimit:
    keyof MsScrollLimitValues | Exclude<NativeProperties['msScrollLimit'], string> | CssString;
  readonly msScrollLimitXMax:
    keyof MsScrollLimitXMaxValues | Exclude<NativeProperties['msScrollLimitXMax'], string>;
  readonly msScrollLimitXMin:
    keyof MsScrollLimitXMinValues | Exclude<NativeProperties['msScrollLimitXMin'], string>;
  readonly msScrollLimitYMax:
    keyof MsScrollLimitYMaxValues | Exclude<NativeProperties['msScrollLimitYMax'], string>;
  readonly msScrollLimitYMin:
    keyof MsScrollLimitYMinValues | Exclude<NativeProperties['msScrollLimitYMin'], string>;
  readonly msScrollRails:
    keyof MsScrollRailsValues | Exclude<NativeProperties['msScrollRails'], string>;
  readonly msScrollSnapPointsX:
    | keyof MsScrollSnapPointsXValues
    | Exclude<NativeProperties['msScrollSnapPointsX'], string>
    | CssString;
  readonly msScrollSnapPointsY:
    | keyof MsScrollSnapPointsYValues
    | Exclude<NativeProperties['msScrollSnapPointsY'], string>
    | CssString;
  readonly msScrollSnapType:
    keyof MsScrollSnapTypeValues | Exclude<NativeProperties['msScrollSnapType'], string>;
  readonly msScrollSnapX:
    keyof MsScrollSnapXValues | Exclude<NativeProperties['msScrollSnapX'], string> | CssString;
  readonly msScrollSnapY:
    keyof MsScrollSnapYValues | Exclude<NativeProperties['msScrollSnapY'], string> | CssString;
  readonly msScrollTranslation:
    keyof MsScrollTranslationValues | Exclude<NativeProperties['msScrollTranslation'], string>;
  readonly msTextAutospace:
    keyof MsTextAutospaceValues | Exclude<NativeProperties['msTextAutospace'], string>;
  readonly msTextCombineHorizontal:
    | keyof MsTextCombineHorizontalValues
    | Exclude<NativeProperties['msTextCombineHorizontal'], string>
    | CssString;
  readonly msTextOverflow:
    keyof MsTextOverflowValues | Exclude<NativeProperties['msTextOverflow'], string> | CssString;
  readonly msTouchAction:
    keyof MsTouchActionValues | Exclude<NativeProperties['msTouchAction'], string> | CssString;
  readonly msTouchSelect:
    keyof MsTouchSelectValues | Exclude<NativeProperties['msTouchSelect'], string>;
  readonly msTransform:
    keyof MsTransformValues | Exclude<NativeProperties['msTransform'], string> | CssString;
  readonly msTransformOrigin:
    | keyof MsTransformOriginValues
    | Exclude<NativeProperties['msTransformOrigin'], string>
    | CssString;
  readonly msTransition:
    keyof MsTransitionValues | Exclude<NativeProperties['msTransition'], string> | CssString;
  readonly msTransitionDelay:
    | keyof MsTransitionDelayValues
    | Exclude<NativeProperties['msTransitionDelay'], string>
    | CssString;
  readonly msTransitionDuration:
    | keyof MsTransitionDurationValues
    | Exclude<NativeProperties['msTransitionDuration'], string>
    | CssString;
  readonly msTransitionProperty:
    | keyof MsTransitionPropertyValues
    | Exclude<NativeProperties['msTransitionProperty'], string>
    | CssString;
  readonly msTransitionTimingFunction:
    | keyof MsTransitionTimingFunctionValues
    | Exclude<NativeProperties['msTransitionTimingFunction'], string>
    | CssString;
  readonly msUserSelect:
    keyof MsUserSelectValues | Exclude<NativeProperties['msUserSelect'], string>;
  readonly msWordBreak: keyof MsWordBreakValues | Exclude<NativeProperties['msWordBreak'], string>;
  readonly msWrapFlow: keyof MsWrapFlowValues | Exclude<NativeProperties['msWrapFlow'], string>;
  readonly msWrapMargin:
    keyof MsWrapMarginValues | Exclude<NativeProperties['msWrapMargin'], string>;
  readonly msWrapThrough:
    keyof MsWrapThroughValues | Exclude<NativeProperties['msWrapThrough'], string>;
  readonly msWritingMode:
    keyof MsWritingModeValues | Exclude<NativeProperties['msWritingMode'], string>;
  readonly OAnimation:
    keyof OAnimationValues | Exclude<NativeProperties['OAnimation'], string> | CssString;
  readonly OAnimationDelay:
    keyof OAnimationDelayValues | Exclude<NativeProperties['OAnimationDelay'], string> | CssString;
  readonly OAnimationDirection:
    | keyof OAnimationDirectionValues
    | Exclude<NativeProperties['OAnimationDirection'], string>
    | CssString;
  readonly OAnimationDuration:
    | keyof OAnimationDurationValues
    | Exclude<NativeProperties['OAnimationDuration'], string>
    | CssString;
  readonly OAnimationFillMode:
    | keyof OAnimationFillModeValues
    | Exclude<NativeProperties['OAnimationFillMode'], string>
    | CssString;
  readonly OAnimationIterationCount:
    | keyof OAnimationIterationCountValues
    | Exclude<NativeProperties['OAnimationIterationCount'], string>
    | CssString;
  readonly OAnimationName:
    keyof OAnimationNameValues | Exclude<NativeProperties['OAnimationName'], string> | CssString;
  readonly OAnimationPlayState:
    | keyof OAnimationPlayStateValues
    | Exclude<NativeProperties['OAnimationPlayState'], string>
    | CssString;
  readonly OAnimationTimingFunction:
    | keyof OAnimationTimingFunctionValues
    | Exclude<NativeProperties['OAnimationTimingFunction'], string>
    | CssString;
  readonly OBackgroundSize:
    keyof OBackgroundSizeValues | Exclude<NativeProperties['OBackgroundSize'], string> | CssString;
  readonly objectFit: keyof ObjectFitValues | Exclude<NativeProperties['objectFit'], string>;
  readonly objectPosition:
    keyof ObjectPositionValues | Exclude<NativeProperties['objectPosition'], string> | CssString;
  readonly objectViewBox:
    keyof ObjectViewBoxValues | Exclude<NativeProperties['objectViewBox'], string> | CssString;
  readonly OBorderImage:
    keyof OBorderImageValues | Exclude<NativeProperties['OBorderImage'], string> | CssString;
  readonly offset: keyof OffsetValues | Exclude<NativeProperties['offset'], string> | CssString;
  readonly offsetAnchor:
    keyof OffsetAnchorValues | Exclude<NativeProperties['offsetAnchor'], string> | CssString;
  readonly offsetBlock:
    keyof OffsetBlockValues | Exclude<NativeProperties['offsetBlock'], string> | CssString;
  readonly offsetBlockEnd:
    keyof OffsetBlockEndValues | Exclude<NativeProperties['offsetBlockEnd'], string> | CssString;
  readonly offsetBlockStart:
    | keyof OffsetBlockStartValues
    | Exclude<NativeProperties['offsetBlockStart'], string>
    | CssString;
  readonly offsetDistance:
    keyof OffsetDistanceValues | Exclude<NativeProperties['offsetDistance'], string> | CssString;
  readonly offsetInline:
    keyof OffsetInlineValues | Exclude<NativeProperties['offsetInline'], string> | CssString;
  readonly offsetInlineEnd:
    keyof OffsetInlineEndValues | Exclude<NativeProperties['offsetInlineEnd'], string> | CssString;
  readonly offsetInlineStart:
    | keyof OffsetInlineStartValues
    | Exclude<NativeProperties['offsetInlineStart'], string>
    | CssString;
  readonly offsetPath:
    keyof OffsetPathValues | Exclude<NativeProperties['offsetPath'], string> | CssString;
  readonly offsetPosition:
    keyof OffsetPositionValues | Exclude<NativeProperties['offsetPosition'], string> | CssString;
  readonly offsetRotate:
    keyof OffsetRotateValues | Exclude<NativeProperties['offsetRotate'], string> | CssString;
  readonly offsetRotation:
    keyof OffsetRotationValues | Exclude<NativeProperties['offsetRotation'], string> | CssString;
  readonly OObjectFit: keyof OObjectFitValues | Exclude<NativeProperties['OObjectFit'], string>;
  readonly OObjectPosition:
    keyof OObjectPositionValues | Exclude<NativeProperties['OObjectPosition'], string> | CssString;
  readonly opacity: keyof OpacityValues | Exclude<NativeProperties['opacity'], string> | CssString;
  readonly order: keyof OrderValues | Exclude<NativeProperties['order'], string> | CssString;
  readonly orphans: keyof OrphansValues | Exclude<NativeProperties['orphans'], string> | CssString;
  readonly OTabSize:
    keyof OTabSizeValues | Exclude<NativeProperties['OTabSize'], string> | CssString;
  readonly OTextOverflow:
    keyof OTextOverflowValues | Exclude<NativeProperties['OTextOverflow'], string> | CssString;
  readonly OTransform:
    keyof OTransformValues | Exclude<NativeProperties['OTransform'], string> | CssString;
  readonly OTransformOrigin:
    | keyof OTransformOriginValues
    | Exclude<NativeProperties['OTransformOrigin'], string>
    | CssString;
  readonly OTransition:
    keyof OTransitionValues | Exclude<NativeProperties['OTransition'], string> | CssString;
  readonly OTransitionDelay:
    | keyof OTransitionDelayValues
    | Exclude<NativeProperties['OTransitionDelay'], string>
    | CssString;
  readonly OTransitionDuration:
    | keyof OTransitionDurationValues
    | Exclude<NativeProperties['OTransitionDuration'], string>
    | CssString;
  readonly OTransitionProperty:
    | keyof OTransitionPropertyValues
    | Exclude<NativeProperties['OTransitionProperty'], string>
    | CssString;
  readonly OTransitionTimingFunction:
    | keyof OTransitionTimingFunctionValues
    | Exclude<NativeProperties['OTransitionTimingFunction'], string>
    | CssString;
  readonly outline: keyof OutlineValues | Exclude<NativeProperties['outline'], string> | CssString;
  readonly outlineColor:
    keyof OutlineColorValues | Exclude<NativeProperties['outlineColor'], string> | CssString;
  readonly outlineOffset:
    keyof OutlineOffsetValues | Exclude<NativeProperties['outlineOffset'], string>;
  readonly outlineStyle:
    keyof OutlineStyleValues | Exclude<NativeProperties['outlineStyle'], string>;
  readonly outlineWidth:
    keyof OutlineWidthValues | Exclude<NativeProperties['outlineWidth'], string>;
  readonly overflow:
    keyof OverflowValues | Exclude<NativeProperties['overflow'], string> | CssString;
  readonly overflowAnchor:
    keyof OverflowAnchorValues | Exclude<NativeProperties['overflowAnchor'], string>;
  readonly overflowBlock:
    keyof OverflowBlockValues | Exclude<NativeProperties['overflowBlock'], string>;
  readonly overflowClipBox:
    keyof OverflowClipBoxValues | Exclude<NativeProperties['overflowClipBox'], string>;
  readonly overflowClipMargin:
    | keyof OverflowClipMarginValues
    | Exclude<NativeProperties['overflowClipMargin'], string>
    | CssString;
  readonly overflowInline:
    keyof OverflowInlineValues | Exclude<NativeProperties['overflowInline'], string>;
  readonly overflowWrap:
    keyof OverflowWrapValues | Exclude<NativeProperties['overflowWrap'], string>;
  readonly overflowX: keyof OverflowXValues | Exclude<NativeProperties['overflowX'], string>;
  readonly overflowY: keyof OverflowYValues | Exclude<NativeProperties['overflowY'], string>;
  readonly overlay: keyof OverlayValues | Exclude<NativeProperties['overlay'], string>;
  readonly overscrollBehavior:
    | keyof OverscrollBehaviorValues
    | Exclude<NativeProperties['overscrollBehavior'], string>
    | CssString;
  readonly overscrollBehaviorBlock:
    | keyof OverscrollBehaviorBlockValues
    | Exclude<NativeProperties['overscrollBehaviorBlock'], string>;
  readonly overscrollBehaviorInline:
    | keyof OverscrollBehaviorInlineValues
    | Exclude<NativeProperties['overscrollBehaviorInline'], string>;
  readonly overscrollBehaviorX:
    keyof OverscrollBehaviorXValues | Exclude<NativeProperties['overscrollBehaviorX'], string>;
  readonly overscrollBehaviorY:
    keyof OverscrollBehaviorYValues | Exclude<NativeProperties['overscrollBehaviorY'], string>;
  readonly padding: keyof PaddingValues | Exclude<NativeProperties['padding'], string> | CssString;
  readonly paddingBlock:
    keyof PaddingBlockValues | Exclude<NativeProperties['paddingBlock'], string> | CssString;
  readonly paddingBlockEnd:
    keyof PaddingBlockEndValues | Exclude<NativeProperties['paddingBlockEnd'], string> | CssString;
  readonly paddingBlockStart:
    | keyof PaddingBlockStartValues
    | Exclude<NativeProperties['paddingBlockStart'], string>
    | CssString;
  readonly paddingBottom:
    keyof PaddingBottomValues | Exclude<NativeProperties['paddingBottom'], string> | CssString;
  readonly paddingInline:
    keyof PaddingInlineValues | Exclude<NativeProperties['paddingInline'], string> | CssString;
  readonly paddingInlineEnd:
    | keyof PaddingInlineEndValues
    | Exclude<NativeProperties['paddingInlineEnd'], string>
    | CssString;
  readonly paddingInlineStart:
    | keyof PaddingInlineStartValues
    | Exclude<NativeProperties['paddingInlineStart'], string>
    | CssString;
  readonly paddingLeft:
    keyof PaddingLeftValues | Exclude<NativeProperties['paddingLeft'], string> | CssString;
  readonly paddingRight:
    keyof PaddingRightValues | Exclude<NativeProperties['paddingRight'], string> | CssString;
  readonly paddingTop:
    keyof PaddingTopValues | Exclude<NativeProperties['paddingTop'], string> | CssString;
  readonly page: keyof PageValues | Exclude<NativeProperties['page'], string> | CssString;
  readonly pageBreakAfter:
    keyof PageBreakAfterValues | Exclude<NativeProperties['pageBreakAfter'], string>;
  readonly pageBreakBefore:
    keyof PageBreakBeforeValues | Exclude<NativeProperties['pageBreakBefore'], string>;
  readonly pageBreakInside:
    keyof PageBreakInsideValues | Exclude<NativeProperties['pageBreakInside'], string>;
  readonly paintOrder:
    keyof PaintOrderValues | Exclude<NativeProperties['paintOrder'], string> | CssString;
  readonly perspective: keyof PerspectiveValues | Exclude<NativeProperties['perspective'], string>;
  readonly perspectiveOrigin:
    | keyof PerspectiveOriginValues
    | Exclude<NativeProperties['perspectiveOrigin'], string>
    | CssString;
  readonly placeContent:
    keyof PlaceContentValues | Exclude<NativeProperties['placeContent'], string> | CssString;
  readonly placeItems:
    keyof PlaceItemsValues | Exclude<NativeProperties['placeItems'], string> | CssString;
  readonly placeSelf:
    keyof PlaceSelfValues | Exclude<NativeProperties['placeSelf'], string> | CssString;
  readonly pointerEvents:
    keyof PointerEventsValues | Exclude<NativeProperties['pointerEvents'], string>;
  readonly position: keyof PositionValues | Exclude<NativeProperties['position'], string>;
  readonly positionAnchor:
    keyof PositionAnchorValues | Exclude<NativeProperties['positionAnchor'], string> | CssString;
  readonly positionArea:
    keyof PositionAreaValues | Exclude<NativeProperties['positionArea'], string> | CssString;
  readonly positionTry:
    keyof PositionTryValues | Exclude<NativeProperties['positionTry'], string> | CssString;
  readonly positionTryFallbacks:
    | keyof PositionTryFallbacksValues
    | Exclude<NativeProperties['positionTryFallbacks'], string>
    | CssString;
  readonly positionTryOptions:
    | keyof PositionTryOptionsValues
    | Exclude<NativeProperties['positionTryOptions'], string>
    | CssString;
  readonly positionTryOrder:
    keyof PositionTryOrderValues | Exclude<NativeProperties['positionTryOrder'], string>;
  readonly positionVisibility:
    | keyof PositionVisibilityValues
    | Exclude<NativeProperties['positionVisibility'], string>
    | CssString;
  readonly printColorAdjust:
    keyof PrintColorAdjustValues | Exclude<NativeProperties['printColorAdjust'], string>;
  readonly quotes: keyof QuotesValues | Exclude<NativeProperties['quotes'], string> | CssString;
  readonly r: keyof RValues | Exclude<NativeProperties['r'], string> | CssString;
  readonly resize: keyof ResizeValues | Exclude<NativeProperties['resize'], string>;
  readonly right: keyof RightValues | Exclude<NativeProperties['right'], string> | CssString;
  readonly rotate: keyof RotateValues | Exclude<NativeProperties['rotate'], string> | CssString;
  readonly rowGap: keyof RowGapValues | Exclude<NativeProperties['rowGap'], string> | CssString;
  readonly rubyAlign: keyof RubyAlignValues | Exclude<NativeProperties['rubyAlign'], string>;
  readonly rubyMerge: keyof RubyMergeValues | Exclude<NativeProperties['rubyMerge'], string>;
  readonly rubyOverhang:
    keyof RubyOverhangValues | Exclude<NativeProperties['rubyOverhang'], string>;
  readonly rubyPosition:
    keyof RubyPositionValues | Exclude<NativeProperties['rubyPosition'], string> | CssString;
  readonly rx: keyof RxValues | Exclude<NativeProperties['rx'], string> | CssString;
  readonly ry: keyof RyValues | Exclude<NativeProperties['ry'], string> | CssString;
  readonly scale: keyof ScaleValues | Exclude<NativeProperties['scale'], string> | CssString;
  readonly scrollbarColor:
    keyof ScrollbarColorValues | Exclude<NativeProperties['scrollbarColor'], string> | CssString;
  readonly scrollbarGutter:
    keyof ScrollbarGutterValues | Exclude<NativeProperties['scrollbarGutter'], string> | CssString;
  readonly scrollbarWidth:
    keyof ScrollbarWidthValues | Exclude<NativeProperties['scrollbarWidth'], string>;
  readonly scrollBehavior:
    keyof ScrollBehaviorValues | Exclude<NativeProperties['scrollBehavior'], string>;
  readonly scrollInitialTarget:
    keyof ScrollInitialTargetValues | Exclude<NativeProperties['scrollInitialTarget'], string>;
  readonly scrollMargin:
    keyof ScrollMarginValues | Exclude<NativeProperties['scrollMargin'], string> | CssString;
  readonly scrollMarginBlock:
    | keyof ScrollMarginBlockValues
    | Exclude<NativeProperties['scrollMarginBlock'], string>
    | CssString;
  readonly scrollMarginBlockEnd:
    keyof ScrollMarginBlockEndValues | Exclude<NativeProperties['scrollMarginBlockEnd'], string>;
  readonly scrollMarginBlockStart:
    | keyof ScrollMarginBlockStartValues
    | Exclude<NativeProperties['scrollMarginBlockStart'], string>;
  readonly scrollMarginBottom:
    keyof ScrollMarginBottomValues | Exclude<NativeProperties['scrollMarginBottom'], string>;
  readonly scrollMarginInline:
    | keyof ScrollMarginInlineValues
    | Exclude<NativeProperties['scrollMarginInline'], string>
    | CssString;
  readonly scrollMarginInlineEnd:
    keyof ScrollMarginInlineEndValues | Exclude<NativeProperties['scrollMarginInlineEnd'], string>;
  readonly scrollMarginInlineStart:
    | keyof ScrollMarginInlineStartValues
    | Exclude<NativeProperties['scrollMarginInlineStart'], string>;
  readonly scrollMarginLeft:
    keyof ScrollMarginLeftValues | Exclude<NativeProperties['scrollMarginLeft'], string>;
  readonly scrollMarginRight:
    keyof ScrollMarginRightValues | Exclude<NativeProperties['scrollMarginRight'], string>;
  readonly scrollMarginTop:
    keyof ScrollMarginTopValues | Exclude<NativeProperties['scrollMarginTop'], string>;
  readonly scrollPadding:
    keyof ScrollPaddingValues | Exclude<NativeProperties['scrollPadding'], string> | CssString;
  readonly scrollPaddingBlock:
    | keyof ScrollPaddingBlockValues
    | Exclude<NativeProperties['scrollPaddingBlock'], string>
    | CssString;
  readonly scrollPaddingBlockEnd:
    | keyof ScrollPaddingBlockEndValues
    | Exclude<NativeProperties['scrollPaddingBlockEnd'], string>
    | CssString;
  readonly scrollPaddingBlockStart:
    | keyof ScrollPaddingBlockStartValues
    | Exclude<NativeProperties['scrollPaddingBlockStart'], string>
    | CssString;
  readonly scrollPaddingBottom:
    | keyof ScrollPaddingBottomValues
    | Exclude<NativeProperties['scrollPaddingBottom'], string>
    | CssString;
  readonly scrollPaddingInline:
    | keyof ScrollPaddingInlineValues
    | Exclude<NativeProperties['scrollPaddingInline'], string>
    | CssString;
  readonly scrollPaddingInlineEnd:
    | keyof ScrollPaddingInlineEndValues
    | Exclude<NativeProperties['scrollPaddingInlineEnd'], string>
    | CssString;
  readonly scrollPaddingInlineStart:
    | keyof ScrollPaddingInlineStartValues
    | Exclude<NativeProperties['scrollPaddingInlineStart'], string>
    | CssString;
  readonly scrollPaddingLeft:
    | keyof ScrollPaddingLeftValues
    | Exclude<NativeProperties['scrollPaddingLeft'], string>
    | CssString;
  readonly scrollPaddingRight:
    | keyof ScrollPaddingRightValues
    | Exclude<NativeProperties['scrollPaddingRight'], string>
    | CssString;
  readonly scrollPaddingTop:
    | keyof ScrollPaddingTopValues
    | Exclude<NativeProperties['scrollPaddingTop'], string>
    | CssString;
  readonly scrollSnapAlign:
    keyof ScrollSnapAlignValues | Exclude<NativeProperties['scrollSnapAlign'], string> | CssString;
  readonly scrollSnapCoordinate:
    | keyof ScrollSnapCoordinateValues
    | Exclude<NativeProperties['scrollSnapCoordinate'], string>
    | CssString;
  readonly scrollSnapDestination:
    | keyof ScrollSnapDestinationValues
    | Exclude<NativeProperties['scrollSnapDestination'], string>
    | CssString;
  readonly scrollSnapMargin:
    | keyof ScrollSnapMarginValues
    | Exclude<NativeProperties['scrollSnapMargin'], string>
    | CssString;
  readonly scrollSnapMarginBottom:
    | keyof ScrollSnapMarginBottomValues
    | Exclude<NativeProperties['scrollSnapMarginBottom'], string>;
  readonly scrollSnapMarginLeft:
    keyof ScrollSnapMarginLeftValues | Exclude<NativeProperties['scrollSnapMarginLeft'], string>;
  readonly scrollSnapMarginRight:
    keyof ScrollSnapMarginRightValues | Exclude<NativeProperties['scrollSnapMarginRight'], string>;
  readonly scrollSnapMarginTop:
    keyof ScrollSnapMarginTopValues | Exclude<NativeProperties['scrollSnapMarginTop'], string>;
  readonly scrollSnapPointsX:
    | keyof ScrollSnapPointsXValues
    | Exclude<NativeProperties['scrollSnapPointsX'], string>
    | CssString;
  readonly scrollSnapPointsY:
    | keyof ScrollSnapPointsYValues
    | Exclude<NativeProperties['scrollSnapPointsY'], string>
    | CssString;
  readonly scrollSnapStop:
    keyof ScrollSnapStopValues | Exclude<NativeProperties['scrollSnapStop'], string>;
  readonly scrollSnapType:
    keyof ScrollSnapTypeValues | Exclude<NativeProperties['scrollSnapType'], string> | CssString;
  readonly scrollSnapTypeX:
    keyof ScrollSnapTypeXValues | Exclude<NativeProperties['scrollSnapTypeX'], string>;
  readonly scrollSnapTypeY:
    keyof ScrollSnapTypeYValues | Exclude<NativeProperties['scrollSnapTypeY'], string>;
  readonly scrollTimeline:
    keyof ScrollTimelineValues | Exclude<NativeProperties['scrollTimeline'], string> | CssString;
  readonly scrollTimelineAxis:
    | keyof ScrollTimelineAxisValues
    | Exclude<NativeProperties['scrollTimelineAxis'], string>
    | CssString;
  readonly scrollTimelineName:
    | keyof ScrollTimelineNameValues
    | Exclude<NativeProperties['scrollTimelineName'], string>
    | CssString;
  readonly shapeImageThreshold:
    | keyof ShapeImageThresholdValues
    | Exclude<NativeProperties['shapeImageThreshold'], string>
    | CssString;
  readonly shapeMargin:
    keyof ShapeMarginValues | Exclude<NativeProperties['shapeMargin'], string> | CssString;
  readonly shapeOutside:
    keyof ShapeOutsideValues | Exclude<NativeProperties['shapeOutside'], string> | CssString;
  readonly shapeRendering:
    keyof ShapeRenderingValues | Exclude<NativeProperties['shapeRendering'], string>;
  readonly speakAs: keyof SpeakAsValues | Exclude<NativeProperties['speakAs'], string> | CssString;
  readonly stopColor:
    keyof StopColorValues | Exclude<NativeProperties['stopColor'], string> | CssString;
  readonly stopOpacity:
    keyof StopOpacityValues | Exclude<NativeProperties['stopOpacity'], string> | CssString;
  readonly stroke: keyof StrokeValues | Exclude<NativeProperties['stroke'], string> | CssString;
  readonly strokeColor:
    keyof StrokeColorValues | Exclude<NativeProperties['strokeColor'], string> | CssString;
  readonly strokeDasharray:
    keyof StrokeDasharrayValues | Exclude<NativeProperties['strokeDasharray'], string> | CssString;
  readonly strokeDashoffset:
    | keyof StrokeDashoffsetValues
    | Exclude<NativeProperties['strokeDashoffset'], string>
    | CssString;
  readonly strokeLinecap:
    keyof StrokeLinecapValues | Exclude<NativeProperties['strokeLinecap'], string>;
  readonly strokeLinejoin:
    keyof StrokeLinejoinValues | Exclude<NativeProperties['strokeLinejoin'], string>;
  readonly strokeMiterlimit:
    | keyof StrokeMiterlimitValues
    | Exclude<NativeProperties['strokeMiterlimit'], string>
    | CssString;
  readonly strokeOpacity:
    keyof StrokeOpacityValues | Exclude<NativeProperties['strokeOpacity'], string> | CssString;
  readonly strokeWidth:
    keyof StrokeWidthValues | Exclude<NativeProperties['strokeWidth'], string> | CssString;
  readonly tableLayout: keyof TableLayoutValues | Exclude<NativeProperties['tableLayout'], string>;
  readonly tabSize: keyof TabSizeValues | Exclude<NativeProperties['tabSize'], string> | CssString;
  readonly textAlign: keyof TextAlignValues | Exclude<NativeProperties['textAlign'], string>;
  readonly textAlignLast:
    keyof TextAlignLastValues | Exclude<NativeProperties['textAlignLast'], string>;
  readonly textAnchor: keyof TextAnchorValues | Exclude<NativeProperties['textAnchor'], string>;
  readonly textAutospace:
    keyof TextAutospaceValues | Exclude<NativeProperties['textAutospace'], string> | CssString;
  readonly textBox: keyof TextBoxValues | Exclude<NativeProperties['textBox'], string> | CssString;
  readonly textBoxEdge:
    keyof TextBoxEdgeValues | Exclude<NativeProperties['textBoxEdge'], string> | CssString;
  readonly textBoxTrim: keyof TextBoxTrimValues | Exclude<NativeProperties['textBoxTrim'], string>;
  readonly textCombineUpright:
    | keyof TextCombineUprightValues
    | Exclude<NativeProperties['textCombineUpright'], string>
    | CssString;
  readonly textDecoration:
    keyof TextDecorationValues | Exclude<NativeProperties['textDecoration'], string> | CssString;
  readonly textDecorationColor:
    | keyof TextDecorationColorValues
    | Exclude<NativeProperties['textDecorationColor'], string>
    | CssString;
  readonly textDecorationLine:
    | keyof TextDecorationLineValues
    | Exclude<NativeProperties['textDecorationLine'], string>
    | CssString;
  readonly textDecorationSkip:
    | keyof TextDecorationSkipValues
    | Exclude<NativeProperties['textDecorationSkip'], string>
    | CssString;
  readonly textDecorationSkipInk:
    keyof TextDecorationSkipInkValues | Exclude<NativeProperties['textDecorationSkipInk'], string>;
  readonly textDecorationStyle:
    keyof TextDecorationStyleValues | Exclude<NativeProperties['textDecorationStyle'], string>;
  readonly textDecorationThickness:
    | keyof TextDecorationThicknessValues
    | Exclude<NativeProperties['textDecorationThickness'], string>
    | CssString;
  readonly textEmphasis:
    keyof TextEmphasisValues | Exclude<NativeProperties['textEmphasis'], string> | CssString;
  readonly textEmphasisColor:
    | keyof TextEmphasisColorValues
    | Exclude<NativeProperties['textEmphasisColor'], string>
    | CssString;
  readonly textEmphasisPosition:
    | keyof TextEmphasisPositionValues
    | Exclude<NativeProperties['textEmphasisPosition'], string>
    | CssString;
  readonly textEmphasisStyle:
    | keyof TextEmphasisStyleValues
    | Exclude<NativeProperties['textEmphasisStyle'], string>
    | CssString;
  readonly textIndent:
    keyof TextIndentValues | Exclude<NativeProperties['textIndent'], string> | CssString;
  readonly textJustify: keyof TextJustifyValues | Exclude<NativeProperties['textJustify'], string>;
  readonly textOrientation:
    keyof TextOrientationValues | Exclude<NativeProperties['textOrientation'], string>;
  readonly textOverflow:
    keyof TextOverflowValues | Exclude<NativeProperties['textOverflow'], string> | CssString;
  readonly textRendering:
    keyof TextRenderingValues | Exclude<NativeProperties['textRendering'], string>;
  readonly textShadow:
    keyof TextShadowValues | Exclude<NativeProperties['textShadow'], string> | CssString;
  readonly textSizeAdjust:
    keyof TextSizeAdjustValues | Exclude<NativeProperties['textSizeAdjust'], string> | CssString;
  readonly textSpacingTrim:
    keyof TextSpacingTrimValues | Exclude<NativeProperties['textSpacingTrim'], string>;
  readonly textTransform:
    keyof TextTransformValues | Exclude<NativeProperties['textTransform'], string> | CssString;
  readonly textUnderlineOffset:
    | keyof TextUnderlineOffsetValues
    | Exclude<NativeProperties['textUnderlineOffset'], string>
    | CssString;
  readonly textUnderlinePosition:
    | keyof TextUnderlinePositionValues
    | Exclude<NativeProperties['textUnderlinePosition'], string>
    | CssString;
  readonly textWrap:
    keyof TextWrapValues | Exclude<NativeProperties['textWrap'], string> | CssString;
  readonly textWrapMode:
    keyof TextWrapModeValues | Exclude<NativeProperties['textWrapMode'], string>;
  readonly textWrapStyle:
    keyof TextWrapStyleValues | Exclude<NativeProperties['textWrapStyle'], string>;
  readonly timelineScope:
    keyof TimelineScopeValues | Exclude<NativeProperties['timelineScope'], string> | CssString;
  readonly top: keyof TopValues | Exclude<NativeProperties['top'], string> | CssString;
  readonly touchAction:
    keyof TouchActionValues | Exclude<NativeProperties['touchAction'], string> | CssString;
  readonly transform:
    keyof TransformValues | Exclude<NativeProperties['transform'], string> | CssString;
  readonly transformBox:
    keyof TransformBoxValues | Exclude<NativeProperties['transformBox'], string>;
  readonly transformOrigin:
    keyof TransformOriginValues | Exclude<NativeProperties['transformOrigin'], string> | CssString;
  readonly transformStyle:
    keyof TransformStyleValues | Exclude<NativeProperties['transformStyle'], string>;
  readonly transition:
    keyof TransitionValues | Exclude<NativeProperties['transition'], string> | CssString;
  readonly transitionBehavior:
    | keyof TransitionBehaviorValues
    | Exclude<NativeProperties['transitionBehavior'], string>
    | CssString;
  readonly transitionDelay:
    keyof TransitionDelayValues | Exclude<NativeProperties['transitionDelay'], string> | CssString;
  readonly transitionDuration:
    | keyof TransitionDurationValues
    | Exclude<NativeProperties['transitionDuration'], string>
    | CssString;
  readonly transitionProperty:
    | keyof TransitionPropertyValues
    | Exclude<NativeProperties['transitionProperty'], string>
    | CssString;
  readonly transitionTimingFunction:
    | keyof TransitionTimingFunctionValues
    | Exclude<NativeProperties['transitionTimingFunction'], string>
    | CssString;
  readonly translate:
    keyof TranslateValues | Exclude<NativeProperties['translate'], string> | CssString;
  readonly unicodeBidi: keyof UnicodeBidiValues | Exclude<NativeProperties['unicodeBidi'], string>;
  readonly userSelect: keyof UserSelectValues | Exclude<NativeProperties['userSelect'], string>;
  readonly vectorEffect:
    keyof VectorEffectValues | Exclude<NativeProperties['vectorEffect'], string>;
  readonly verticalAlign:
    keyof VerticalAlignValues | Exclude<NativeProperties['verticalAlign'], string> | CssString;
  readonly viewTimeline:
    keyof ViewTimelineValues | Exclude<NativeProperties['viewTimeline'], string> | CssString;
  readonly viewTimelineAxis:
    | keyof ViewTimelineAxisValues
    | Exclude<NativeProperties['viewTimelineAxis'], string>
    | CssString;
  readonly viewTimelineInset:
    | keyof ViewTimelineInsetValues
    | Exclude<NativeProperties['viewTimelineInset'], string>
    | CssString;
  readonly viewTimelineName:
    | keyof ViewTimelineNameValues
    | Exclude<NativeProperties['viewTimelineName'], string>
    | CssString;
  readonly viewTransitionClass:
    | keyof ViewTransitionClassValues
    | Exclude<NativeProperties['viewTransitionClass'], string>
    | CssString;
  readonly viewTransitionName:
    | keyof ViewTransitionNameValues
    | Exclude<NativeProperties['viewTransitionName'], string>
    | CssString;
  readonly visibility: keyof VisibilityValues | Exclude<NativeProperties['visibility'], string>;
  readonly WebkitAlignContent:
    | keyof WebkitAlignContentValues
    | Exclude<NativeProperties['WebkitAlignContent'], string>
    | CssString;
  readonly WebkitAlignItems:
    | keyof WebkitAlignItemsValues
    | Exclude<NativeProperties['WebkitAlignItems'], string>
    | CssString;
  readonly WebkitAlignSelf:
    keyof WebkitAlignSelfValues | Exclude<NativeProperties['WebkitAlignSelf'], string> | CssString;
  readonly WebkitAnimation:
    keyof WebkitAnimationValues | Exclude<NativeProperties['WebkitAnimation'], string> | CssString;
  readonly WebkitAnimationDelay:
    | keyof WebkitAnimationDelayValues
    | Exclude<NativeProperties['WebkitAnimationDelay'], string>
    | CssString;
  readonly WebkitAnimationDirection:
    | keyof WebkitAnimationDirectionValues
    | Exclude<NativeProperties['WebkitAnimationDirection'], string>
    | CssString;
  readonly WebkitAnimationDuration:
    | keyof WebkitAnimationDurationValues
    | Exclude<NativeProperties['WebkitAnimationDuration'], string>
    | CssString;
  readonly WebkitAnimationFillMode:
    | keyof WebkitAnimationFillModeValues
    | Exclude<NativeProperties['WebkitAnimationFillMode'], string>
    | CssString;
  readonly WebkitAnimationIterationCount:
    | keyof WebkitAnimationIterationCountValues
    | Exclude<NativeProperties['WebkitAnimationIterationCount'], string>
    | CssString;
  readonly WebkitAnimationName:
    | keyof WebkitAnimationNameValues
    | Exclude<NativeProperties['WebkitAnimationName'], string>
    | CssString;
  readonly WebkitAnimationPlayState:
    | keyof WebkitAnimationPlayStateValues
    | Exclude<NativeProperties['WebkitAnimationPlayState'], string>
    | CssString;
  readonly WebkitAnimationTimingFunction:
    | keyof WebkitAnimationTimingFunctionValues
    | Exclude<NativeProperties['WebkitAnimationTimingFunction'], string>
    | CssString;
  readonly WebkitAppearance:
    keyof WebkitAppearanceValues | Exclude<NativeProperties['WebkitAppearance'], string>;
  readonly WebkitBackdropFilter:
    | keyof WebkitBackdropFilterValues
    | Exclude<NativeProperties['WebkitBackdropFilter'], string>
    | CssString;
  readonly WebkitBackfaceVisibility:
    | keyof WebkitBackfaceVisibilityValues
    | Exclude<NativeProperties['WebkitBackfaceVisibility'], string>;
  readonly WebkitBackgroundClip:
    | keyof WebkitBackgroundClipValues
    | Exclude<NativeProperties['WebkitBackgroundClip'], string>
    | CssString;
  readonly WebkitBackgroundOrigin:
    | keyof WebkitBackgroundOriginValues
    | Exclude<NativeProperties['WebkitBackgroundOrigin'], string>
    | CssString;
  readonly WebkitBackgroundSize:
    | keyof WebkitBackgroundSizeValues
    | Exclude<NativeProperties['WebkitBackgroundSize'], string>
    | CssString;
  readonly WebkitBorderBefore:
    | keyof WebkitBorderBeforeValues
    | Exclude<NativeProperties['WebkitBorderBefore'], string>
    | CssString;
  readonly WebkitBorderBeforeColor:
    | keyof WebkitBorderBeforeColorValues
    | Exclude<NativeProperties['WebkitBorderBeforeColor'], string>
    | CssString;
  readonly WebkitBorderBeforeStyle:
    | keyof WebkitBorderBeforeStyleValues
    | Exclude<NativeProperties['WebkitBorderBeforeStyle'], string>
    | CssString;
  readonly WebkitBorderBeforeWidth:
    | keyof WebkitBorderBeforeWidthValues
    | Exclude<NativeProperties['WebkitBorderBeforeWidth'], string>
    | CssString;
  readonly WebkitBorderBottomLeftRadius:
    | keyof WebkitBorderBottomLeftRadiusValues
    | Exclude<NativeProperties['WebkitBorderBottomLeftRadius'], string>
    | CssString;
  readonly WebkitBorderBottomRightRadius:
    | keyof WebkitBorderBottomRightRadiusValues
    | Exclude<NativeProperties['WebkitBorderBottomRightRadius'], string>
    | CssString;
  readonly WebkitBorderImage:
    | keyof WebkitBorderImageValues
    | Exclude<NativeProperties['WebkitBorderImage'], string>
    | CssString;
  readonly WebkitBorderImageSlice:
    | keyof WebkitBorderImageSliceValues
    | Exclude<NativeProperties['WebkitBorderImageSlice'], string>
    | CssString;
  readonly WebkitBorderRadius:
    | keyof WebkitBorderRadiusValues
    | Exclude<NativeProperties['WebkitBorderRadius'], string>
    | CssString;
  readonly WebkitBorderTopLeftRadius:
    | keyof WebkitBorderTopLeftRadiusValues
    | Exclude<NativeProperties['WebkitBorderTopLeftRadius'], string>
    | CssString;
  readonly WebkitBorderTopRightRadius:
    | keyof WebkitBorderTopRightRadiusValues
    | Exclude<NativeProperties['WebkitBorderTopRightRadius'], string>
    | CssString;
  readonly WebkitBoxAlign:
    keyof WebkitBoxAlignValues | Exclude<NativeProperties['WebkitBoxAlign'], string>;
  readonly WebkitBoxDecorationBreak:
    | keyof WebkitBoxDecorationBreakValues
    | Exclude<NativeProperties['WebkitBoxDecorationBreak'], string>;
  readonly WebkitBoxDirection:
    keyof WebkitBoxDirectionValues | Exclude<NativeProperties['WebkitBoxDirection'], string>;
  readonly WebkitBoxFlex:
    keyof WebkitBoxFlexValues | Exclude<NativeProperties['WebkitBoxFlex'], string> | CssString;
  readonly WebkitBoxFlexGroup:
    | keyof WebkitBoxFlexGroupValues
    | Exclude<NativeProperties['WebkitBoxFlexGroup'], string>
    | CssString;
  readonly WebkitBoxLines:
    keyof WebkitBoxLinesValues | Exclude<NativeProperties['WebkitBoxLines'], string>;
  readonly WebkitBoxOrdinalGroup:
    | keyof WebkitBoxOrdinalGroupValues
    | Exclude<NativeProperties['WebkitBoxOrdinalGroup'], string>
    | CssString;
  readonly WebkitBoxOrient:
    keyof WebkitBoxOrientValues | Exclude<NativeProperties['WebkitBoxOrient'], string>;
  readonly WebkitBoxPack:
    keyof WebkitBoxPackValues | Exclude<NativeProperties['WebkitBoxPack'], string>;
  readonly WebkitBoxReflect:
    | keyof WebkitBoxReflectValues
    | Exclude<NativeProperties['WebkitBoxReflect'], string>
    | CssString;
  readonly WebkitBoxShadow:
    keyof WebkitBoxShadowValues | Exclude<NativeProperties['WebkitBoxShadow'], string> | CssString;
  readonly WebkitBoxSizing:
    keyof WebkitBoxSizingValues | Exclude<NativeProperties['WebkitBoxSizing'], string>;
  readonly WebkitClipPath:
    keyof WebkitClipPathValues | Exclude<NativeProperties['WebkitClipPath'], string> | CssString;
  readonly WebkitColumnCount:
    | keyof WebkitColumnCountValues
    | Exclude<NativeProperties['WebkitColumnCount'], string>
    | CssString;
  readonly WebkitColumnFill:
    keyof WebkitColumnFillValues | Exclude<NativeProperties['WebkitColumnFill'], string>;
  readonly WebkitColumnRule:
    | keyof WebkitColumnRuleValues
    | Exclude<NativeProperties['WebkitColumnRule'], string>
    | CssString;
  readonly WebkitColumnRuleColor:
    | keyof WebkitColumnRuleColorValues
    | Exclude<NativeProperties['WebkitColumnRuleColor'], string>
    | CssString;
  readonly WebkitColumnRuleStyle:
    | keyof WebkitColumnRuleStyleValues
    | Exclude<NativeProperties['WebkitColumnRuleStyle'], string>
    | CssString;
  readonly WebkitColumnRuleWidth:
    | keyof WebkitColumnRuleWidthValues
    | Exclude<NativeProperties['WebkitColumnRuleWidth'], string>
    | CssString;
  readonly WebkitColumns:
    keyof WebkitColumnsValues | Exclude<NativeProperties['WebkitColumns'], string> | CssString;
  readonly WebkitColumnSpan:
    keyof WebkitColumnSpanValues | Exclude<NativeProperties['WebkitColumnSpan'], string>;
  readonly WebkitColumnWidth:
    keyof WebkitColumnWidthValues | Exclude<NativeProperties['WebkitColumnWidth'], string>;
  readonly WebkitFilter:
    keyof WebkitFilterValues | Exclude<NativeProperties['WebkitFilter'], string> | CssString;
  readonly WebkitFlex:
    keyof WebkitFlexValues | Exclude<NativeProperties['WebkitFlex'], string> | CssString;
  readonly WebkitFlexBasis:
    keyof WebkitFlexBasisValues | Exclude<NativeProperties['WebkitFlexBasis'], string> | CssString;
  readonly WebkitFlexDirection:
    keyof WebkitFlexDirectionValues | Exclude<NativeProperties['WebkitFlexDirection'], string>;
  readonly WebkitFlexFlow:
    keyof WebkitFlexFlowValues | Exclude<NativeProperties['WebkitFlexFlow'], string> | CssString;
  readonly WebkitFlexGrow:
    keyof WebkitFlexGrowValues | Exclude<NativeProperties['WebkitFlexGrow'], string> | CssString;
  readonly WebkitFlexShrink:
    | keyof WebkitFlexShrinkValues
    | Exclude<NativeProperties['WebkitFlexShrink'], string>
    | CssString;
  readonly WebkitFlexWrap:
    keyof WebkitFlexWrapValues | Exclude<NativeProperties['WebkitFlexWrap'], string>;
  readonly WebkitFontFeatureSettings:
    | keyof WebkitFontFeatureSettingsValues
    | Exclude<NativeProperties['WebkitFontFeatureSettings'], string>
    | CssString;
  readonly WebkitFontKerning:
    keyof WebkitFontKerningValues | Exclude<NativeProperties['WebkitFontKerning'], string>;
  readonly WebkitFontSmoothing:
    keyof WebkitFontSmoothingValues | Exclude<NativeProperties['WebkitFontSmoothing'], string>;
  readonly WebkitFontVariantLigatures:
    | keyof WebkitFontVariantLigaturesValues
    | Exclude<NativeProperties['WebkitFontVariantLigatures'], string>
    | CssString;
  readonly WebkitHyphenateCharacter:
    | keyof WebkitHyphenateCharacterValues
    | Exclude<NativeProperties['WebkitHyphenateCharacter'], string>
    | CssString;
  readonly WebkitHyphens:
    keyof WebkitHyphensValues | Exclude<NativeProperties['WebkitHyphens'], string>;
  readonly WebkitInitialLetter:
    | keyof WebkitInitialLetterValues
    | Exclude<NativeProperties['WebkitInitialLetter'], string>
    | CssString;
  readonly WebkitJustifyContent:
    | keyof WebkitJustifyContentValues
    | Exclude<NativeProperties['WebkitJustifyContent'], string>
    | CssString;
  readonly WebkitLineBreak:
    keyof WebkitLineBreakValues | Exclude<NativeProperties['WebkitLineBreak'], string>;
  readonly WebkitLineClamp:
    keyof WebkitLineClampValues | Exclude<NativeProperties['WebkitLineClamp'], string> | CssString;
  readonly WebkitLogicalHeight:
    | keyof WebkitLogicalHeightValues
    | Exclude<NativeProperties['WebkitLogicalHeight'], string>
    | CssString;
  readonly WebkitLogicalWidth:
    | keyof WebkitLogicalWidthValues
    | Exclude<NativeProperties['WebkitLogicalWidth'], string>
    | CssString;
  readonly WebkitMarginEnd:
    keyof WebkitMarginEndValues | Exclude<NativeProperties['WebkitMarginEnd'], string> | CssString;
  readonly WebkitMarginStart:
    | keyof WebkitMarginStartValues
    | Exclude<NativeProperties['WebkitMarginStart'], string>
    | CssString;
  readonly WebkitMask:
    keyof WebkitMaskValues | Exclude<NativeProperties['WebkitMask'], string> | CssString;
  readonly WebkitMaskAttachment:
    | keyof WebkitMaskAttachmentValues
    | Exclude<NativeProperties['WebkitMaskAttachment'], string>
    | CssString;
  readonly WebkitMaskBoxImage:
    | keyof WebkitMaskBoxImageValues
    | Exclude<NativeProperties['WebkitMaskBoxImage'], string>
    | CssString;
  readonly WebkitMaskBoxImageOutset:
    | keyof WebkitMaskBoxImageOutsetValues
    | Exclude<NativeProperties['WebkitMaskBoxImageOutset'], string>
    | CssString;
  readonly WebkitMaskBoxImageRepeat:
    | keyof WebkitMaskBoxImageRepeatValues
    | Exclude<NativeProperties['WebkitMaskBoxImageRepeat'], string>
    | CssString;
  readonly WebkitMaskBoxImageSlice:
    | keyof WebkitMaskBoxImageSliceValues
    | Exclude<NativeProperties['WebkitMaskBoxImageSlice'], string>
    | CssString;
  readonly WebkitMaskBoxImageSource:
    | keyof WebkitMaskBoxImageSourceValues
    | Exclude<NativeProperties['WebkitMaskBoxImageSource'], string>
    | CssString;
  readonly WebkitMaskBoxImageWidth:
    | keyof WebkitMaskBoxImageWidthValues
    | Exclude<NativeProperties['WebkitMaskBoxImageWidth'], string>
    | CssString;
  readonly WebkitMaskClip:
    keyof WebkitMaskClipValues | Exclude<NativeProperties['WebkitMaskClip'], string> | CssString;
  readonly WebkitMaskComposite:
    | keyof WebkitMaskCompositeValues
    | Exclude<NativeProperties['WebkitMaskComposite'], string>
    | CssString;
  readonly WebkitMaskImage:
    keyof WebkitMaskImageValues | Exclude<NativeProperties['WebkitMaskImage'], string> | CssString;
  readonly WebkitMaskOrigin:
    | keyof WebkitMaskOriginValues
    | Exclude<NativeProperties['WebkitMaskOrigin'], string>
    | CssString;
  readonly WebkitMaskPosition:
    | keyof WebkitMaskPositionValues
    | Exclude<NativeProperties['WebkitMaskPosition'], string>
    | CssString;
  readonly WebkitMaskPositionX:
    | keyof WebkitMaskPositionXValues
    | Exclude<NativeProperties['WebkitMaskPositionX'], string>
    | CssString;
  readonly WebkitMaskPositionY:
    | keyof WebkitMaskPositionYValues
    | Exclude<NativeProperties['WebkitMaskPositionY'], string>
    | CssString;
  readonly WebkitMaskRepeat:
    | keyof WebkitMaskRepeatValues
    | Exclude<NativeProperties['WebkitMaskRepeat'], string>
    | CssString;
  readonly WebkitMaskRepeatX:
    keyof WebkitMaskRepeatXValues | Exclude<NativeProperties['WebkitMaskRepeatX'], string>;
  readonly WebkitMaskRepeatY:
    keyof WebkitMaskRepeatYValues | Exclude<NativeProperties['WebkitMaskRepeatY'], string>;
  readonly WebkitMaskSize:
    keyof WebkitMaskSizeValues | Exclude<NativeProperties['WebkitMaskSize'], string> | CssString;
  readonly WebkitMaxInlineSize:
    | keyof WebkitMaxInlineSizeValues
    | Exclude<NativeProperties['WebkitMaxInlineSize'], string>
    | CssString;
  readonly WebkitOrder:
    keyof WebkitOrderValues | Exclude<NativeProperties['WebkitOrder'], string> | CssString;
  readonly WebkitOverflowScrolling:
    | keyof WebkitOverflowScrollingValues
    | Exclude<NativeProperties['WebkitOverflowScrolling'], string>;
  readonly WebkitPaddingEnd:
    | keyof WebkitPaddingEndValues
    | Exclude<NativeProperties['WebkitPaddingEnd'], string>
    | CssString;
  readonly WebkitPaddingStart:
    | keyof WebkitPaddingStartValues
    | Exclude<NativeProperties['WebkitPaddingStart'], string>
    | CssString;
  readonly WebkitPerspective:
    keyof WebkitPerspectiveValues | Exclude<NativeProperties['WebkitPerspective'], string>;
  readonly WebkitPerspectiveOrigin:
    | keyof WebkitPerspectiveOriginValues
    | Exclude<NativeProperties['WebkitPerspectiveOrigin'], string>
    | CssString;
  readonly WebkitPrintColorAdjust:
    | keyof WebkitPrintColorAdjustValues
    | Exclude<NativeProperties['WebkitPrintColorAdjust'], string>;
  readonly WebkitRubyPosition:
    | keyof WebkitRubyPositionValues
    | Exclude<NativeProperties['WebkitRubyPosition'], string>
    | CssString;
  readonly WebkitScrollSnapType:
    | keyof WebkitScrollSnapTypeValues
    | Exclude<NativeProperties['WebkitScrollSnapType'], string>
    | CssString;
  readonly WebkitShapeMargin:
    | keyof WebkitShapeMarginValues
    | Exclude<NativeProperties['WebkitShapeMargin'], string>
    | CssString;
  readonly WebkitTapHighlightColor:
    | keyof WebkitTapHighlightColorValues
    | Exclude<NativeProperties['WebkitTapHighlightColor'], string>
    | CssString;
  readonly WebkitTextCombine:
    | keyof WebkitTextCombineValues
    | Exclude<NativeProperties['WebkitTextCombine'], string>
    | CssString;
  readonly WebkitTextDecorationColor:
    | keyof WebkitTextDecorationColorValues
    | Exclude<NativeProperties['WebkitTextDecorationColor'], string>
    | CssString;
  readonly WebkitTextDecorationLine:
    | keyof WebkitTextDecorationLineValues
    | Exclude<NativeProperties['WebkitTextDecorationLine'], string>
    | CssString;
  readonly WebkitTextDecorationSkip:
    | keyof WebkitTextDecorationSkipValues
    | Exclude<NativeProperties['WebkitTextDecorationSkip'], string>
    | CssString;
  readonly WebkitTextDecorationStyle:
    | keyof WebkitTextDecorationStyleValues
    | Exclude<NativeProperties['WebkitTextDecorationStyle'], string>;
  readonly WebkitTextEmphasis:
    | keyof WebkitTextEmphasisValues
    | Exclude<NativeProperties['WebkitTextEmphasis'], string>
    | CssString;
  readonly WebkitTextEmphasisColor:
    | keyof WebkitTextEmphasisColorValues
    | Exclude<NativeProperties['WebkitTextEmphasisColor'], string>
    | CssString;
  readonly WebkitTextEmphasisPosition:
    | keyof WebkitTextEmphasisPositionValues
    | Exclude<NativeProperties['WebkitTextEmphasisPosition'], string>
    | CssString;
  readonly WebkitTextEmphasisStyle:
    | keyof WebkitTextEmphasisStyleValues
    | Exclude<NativeProperties['WebkitTextEmphasisStyle'], string>
    | CssString;
  readonly WebkitTextFillColor:
    | keyof WebkitTextFillColorValues
    | Exclude<NativeProperties['WebkitTextFillColor'], string>
    | CssString;
  readonly WebkitTextOrientation:
    keyof WebkitTextOrientationValues | Exclude<NativeProperties['WebkitTextOrientation'], string>;
  readonly WebkitTextSizeAdjust:
    | keyof WebkitTextSizeAdjustValues
    | Exclude<NativeProperties['WebkitTextSizeAdjust'], string>
    | CssString;
  readonly WebkitTextStroke:
    | keyof WebkitTextStrokeValues
    | Exclude<NativeProperties['WebkitTextStroke'], string>
    | CssString;
  readonly WebkitTextStrokeColor:
    | keyof WebkitTextStrokeColorValues
    | Exclude<NativeProperties['WebkitTextStrokeColor'], string>
    | CssString;
  readonly WebkitTextStrokeWidth:
    keyof WebkitTextStrokeWidthValues | Exclude<NativeProperties['WebkitTextStrokeWidth'], string>;
  readonly WebkitTextUnderlinePosition:
    | keyof WebkitTextUnderlinePositionValues
    | Exclude<NativeProperties['WebkitTextUnderlinePosition'], string>
    | CssString;
  readonly WebkitTouchCallout:
    keyof WebkitTouchCalloutValues | Exclude<NativeProperties['WebkitTouchCallout'], string>;
  readonly WebkitTransform:
    keyof WebkitTransformValues | Exclude<NativeProperties['WebkitTransform'], string> | CssString;
  readonly WebkitTransformOrigin:
    | keyof WebkitTransformOriginValues
    | Exclude<NativeProperties['WebkitTransformOrigin'], string>
    | CssString;
  readonly WebkitTransformStyle:
    keyof WebkitTransformStyleValues | Exclude<NativeProperties['WebkitTransformStyle'], string>;
  readonly WebkitTransition:
    | keyof WebkitTransitionValues
    | Exclude<NativeProperties['WebkitTransition'], string>
    | CssString;
  readonly WebkitTransitionDelay:
    | keyof WebkitTransitionDelayValues
    | Exclude<NativeProperties['WebkitTransitionDelay'], string>
    | CssString;
  readonly WebkitTransitionDuration:
    | keyof WebkitTransitionDurationValues
    | Exclude<NativeProperties['WebkitTransitionDuration'], string>
    | CssString;
  readonly WebkitTransitionProperty:
    | keyof WebkitTransitionPropertyValues
    | Exclude<NativeProperties['WebkitTransitionProperty'], string>
    | CssString;
  readonly WebkitTransitionTimingFunction:
    | keyof WebkitTransitionTimingFunctionValues
    | Exclude<NativeProperties['WebkitTransitionTimingFunction'], string>
    | CssString;
  readonly WebkitUserModify:
    keyof WebkitUserModifyValues | Exclude<NativeProperties['WebkitUserModify'], string>;
  readonly WebkitUserSelect:
    keyof WebkitUserSelectValues | Exclude<NativeProperties['WebkitUserSelect'], string>;
  readonly WebkitWritingMode:
    keyof WebkitWritingModeValues | Exclude<NativeProperties['WebkitWritingMode'], string>;
  readonly whiteSpace:
    keyof WhiteSpaceValues | Exclude<NativeProperties['whiteSpace'], string> | CssString;
  readonly whiteSpaceCollapse:
    keyof WhiteSpaceCollapseValues | Exclude<NativeProperties['whiteSpaceCollapse'], string>;
  readonly widows: keyof WidowsValues | Exclude<NativeProperties['widows'], string> | CssString;
  readonly width: keyof WidthValues | Exclude<NativeProperties['width'], string> | CssString;
  readonly willChange:
    keyof WillChangeValues | Exclude<NativeProperties['willChange'], string> | CssString;
  readonly wordBreak: keyof WordBreakValues | Exclude<NativeProperties['wordBreak'], string>;
  readonly wordSpacing: keyof WordSpacingValues | Exclude<NativeProperties['wordSpacing'], string>;
  readonly wordWrap: keyof WordWrapValues | Exclude<NativeProperties['wordWrap'], string>;
  readonly writingMode: keyof WritingModeValues | Exclude<NativeProperties['writingMode'], string>;
  readonly x: keyof XValues | Exclude<NativeProperties['x'], string> | CssString;
  readonly y: keyof YValues | Exclude<NativeProperties['y'], string> | CssString;
  readonly zIndex: keyof ZIndexValues | Exclude<NativeProperties['zIndex'], string> | CssString;
  readonly zoom: keyof ZoomValues | Exclude<NativeProperties['zoom'], string> | CssString;
}
