import type { LucideIconData, LucideIconNode } from '@lucide/icons';
import type { CssValue, Props } from '@zerodep-vue/core';
import { _component, _svg, keyframes } from '@zerodep-vue/core';
import type { VNode } from 'vue';
import { h } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';

/** 常用样式直接采用 CSS 属性值类型；其余 SVG 属性和事件透传。 */
// Vue 仅解析自有字段的运行时声明；剩余 Props 通过 rest 显式转发到 SVG。
export type IconProps = Props<
  typeof _svg,
  {
    /** 按需导入的 Lucide 原始数据，或同结构的可信 SVG 节点树。 */
    icon: LucideIconData;
    /** CSS color；默认继承文字颜色，图形使用 currentColor。 */
    color?: CssValue<'color', UiTheme>;
    /** CSS fontSize；默认继承字号，1em 图标随文字等比缩放。 */
    size?: CssValue<'fontSize', UiTheme>;
    /** CSS width；覆盖默认 1em 宽度，不修改 SVG 的 viewBox。 */
    width?: CssValue<'width', UiTheme>;
    /** CSS height；覆盖默认 1em 高度，不修改 SVG 的 viewBox。 */
    height?: CssValue<'height', UiTheme>;
    /** CSS opacity；作用于整个图标，支持 _disabled 等主题名。 */
    opacity?: CssValue<'opacity', UiTheme>;
    /** CSS strokeWidth；默认 2，子节点自己的描边属性仍优先于继承值。 */
    strokeWidth?: CssValue<'strokeWidth', UiTheme>;
    /** CSS rotate，如 90deg；与 spin 的旋转叠加，不接收无单位数字。 */
    rotate?: CssValue<'rotate', UiTheme>;
    /** 持续旋转；遵循 prefers-reduced-motion，减少动态效果时停止。 */
    spin?: boolean | undefined;
    /** 保持绘制节点的描边不随 SVG 缩放；不会修改原始图标数据。 */
    nonScalingStroke?: boolean | undefined;
    /** 图标节点由 icon 管理，不接收插槽或替换子树的 DOM 属性。 */
    children?: never;
    innerHTML?: never;
    textContent?: never;
  }
>;

/**
 * 单个 SVG 图标。无名称时默认作为装饰隐藏；独立表达含义时提供 aria-label/aria-labelledby。
 * 默认随文字字号缩放；组件管理图形子树，不增加包装节点。
 */
export const Icon = _component(
  ({
    icon,
    color,
    size,
    width,
    height,
    opacity,
    strokeWidth,
    rotate,
    spin = false,
    nonScalingStroke = false,
    css: cssProp,
    role,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-hidden': ariaHidden,
    xmlns = 'http://www.w3.org/2000/svg',
    fill = 'none',
    stroke = 'currentColor',
    'stroke-linecap': strokeLinecap = 'round',
    'stroke-linejoin': strokeLinejoin = 'round',
    focusable = 'false',
    // 回退尺寸依赖当前 icon，在渲染时计算，不放入实例默认值缓存。
    viewBox,
    // 只排除这些入口，不读取 children，避免执行被忽略的插槽。
    children: _children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: IconProps) => {
    const css = useCss();
    const style = css(() => ({
      display: 'inline-block',
      verticalAlign: '-0.125em',
      flexShrink: 0,
      color: color,
      fontSize: size,
      width: width,
      height: height,
      opacity: opacity,
      strokeWidth: strokeWidth,
      rotate: rotate,
      transformOrigin: 'center',
      transformBox: 'view-box',
    }));
    const rotation = keyframes({
      from: css({
        transform: 'rotate(0deg)',
      }),
      to: css({
        transform: 'rotate(360deg)',
      }),
    });
    const spinning = css({
      animationName: rotation,
      animationDuration: '1s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      '@media (prefers-reduced-motion: reduce)': {
        animationName: 'none',
      },
    });

    // 每次渲染创建自己的 VNode，不缓存或修改可能被多个实例共用的原始节点。
    function renderNode([tag, attributes, children]: LucideIconNode): VNode {
      let props = {
        ...attributes,
      };
      if (nonScalingStroke) {
        // vector-effect 不继承，只在实际绘制节点上设置；分组和 defs 保留原样。
        switch (tag) {
          case 'path':
          case 'circle':
          case 'ellipse':
          case 'line':
          case 'polyline':
          case 'polygon':
          case 'rect':
          case 'text':
          case 'textPath':
          case 'tspan':
          case 'use':
            props = {
              ...props,
              style: [
                props.style,
                {
                  vectorEffect: 'non-scaling-stroke',
                },
              ],
            };
        }
      }
      return h(tag, props, children?.map(renderNode));
    }
    return (
      <_svg
        css={[style, spin && spinning, cssProp]}
        xmlns={xmlns}
        width="1em"
        height="1em"
        viewBox={
          viewBox === undefined
            ? `0 0 ${icon.width ?? icon.size ?? 24} ${icon.height ?? icon.size ?? 24}`
            : viewBox
        }
        fill={fill}
        stroke={stroke}
        stroke-width={2}
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
        focusable={focusable}
        {...rest}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        role={role ?? (ariaLabel?.trim() || ariaLabelledBy?.trim() ? 'img' : undefined)}
        aria-hidden={ariaHidden ?? (ariaLabel?.trim() || ariaLabelledBy?.trim() ? undefined : true)}
      >
        {icon.node.map(renderNode)}
      </_svg>
    );
  },
);
