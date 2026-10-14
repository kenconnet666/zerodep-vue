/** 分组只组织类型与文档；作者对象仍使用标准 camelCase 属性名。 */
export const propertyGroups = [
  [
    'Layout',
    '布局与定位',
    /^(display|position|inset|top$|right$|bottom$|left$|float$|clear$|zIndex|flex|align|justify|place|order$|grid|columns?$|column(?!Rule)|verticalAlign)/,
  ],
  ['Sizing', '尺寸与比例', /^(width|height|min|max|inlineSize|blockSize|aspectRatio|boxSizing)/],
  ['Spacing', '内外间距', /^(margin|padding|gap|rowGap|columnGap)/],
  [
    'Typography',
    '文字与排版',
    /^(font|text|line|letter|word|whiteSpace|hyphens|tabSize|writingMode|direction|unicodeBidi|ruby|initialLetter|quotes|hangingPunctuation)/,
  ],
  ['Colors', '颜色与背景', /^(color|background|accentColor|caretColor|printColorAdjust)/],
  ['Borders', '边框与轮廓', /^(border|outline|columnRule)/],
  [
    'Effects',
    '视觉效果与图像',
    /^(opacity|boxShadow|filter|backdropFilter|blend|mixBlendMode|mask|clip|object|image|shape)/,
  ],
  [
    'Motion',
    '动画与变换',
    /^(animation|transition|transform|translate|rotate|scale|perspective|backface|offset|viewTransition)/,
  ],
  ['Scrolling', '滚动与溢出', /^(scroll|overflow|overscroll)/],
  [
    'Interaction',
    '交互与显示控制',
    /^(cursor|pointerEvents|touchAction|userSelect|resize|appearance|visibility|contentVisibility|caret)/,
  ],
  [
    'Structure',
    '内容、容器与分页',
    /^(content|contain|container|counter|listStyle|tableLayout|captionSide|emptyCells|break|page|orphans|widows|anchor|positionArea|positionTry)/,
  ],
  ['Svg', 'SVG 属性', null],
  ['Compatibility', '厂商与历史兼容属性', null],
  ['Other', '其他标准属性', null],
];

export function propertyGroup(name, svg, obsolete) {
  if (/^(Webkit|Moz|ms|O|Khtml)[A-Z]/.test(name) || obsolete.has(name)) return 'Compatibility';
  // 复合属性先归属它的真实用途，避免 columnGap 被布局前缀规则截走。
  if (/^(gap|rowGap|columnGap)$/.test(name)) return 'Spacing';
  // SVG 也复用 color、display 等通用属性；它们仍按通用用途分组。
  return (
    propertyGroups.find(([, , pattern]) => pattern?.test(name))?.[0] ??
    (svg.has(name) ? 'Svg' : 'Other')
  );
}
