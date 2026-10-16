import type { CssInput } from '@zerodep-vue/core';
import type { HTMLAttributes, VNodeChild } from 'vue';

/** UI 容器的公共原生属性；内容、class 与 DOM 替换入口使用统一约定。 */
export interface ElementProps extends /* @vue-ignore */ Omit<HTMLAttributes, 'class'> {
  /** 原生 data-* 属性也可通过 slotX 对象传入。 */
  [name: `data-${string}`]: string | number | boolean | null | undefined;
  /** 支持原生类名和链式 CSS，外部样式最后组合。 */
  class?: CssInput;
  /** 普通 TSX 内容或默认插槽。 */
  children?: VNodeChild;
  /** 内容由 children 管理。 */
  innerHTML?: never;
  textContent?: never;
}

/** 复杂组件的原生子节点属性；内容仍由所属组件管理。 */
export type ElementSlotProps = Omit<ElementProps, 'children'>;

/** 子节点 class 显式最后组合；不允许透传入口替换组件管理的内容。 */
export function slotRest<
  Props extends { class?: CssInput; children?: unknown; innerHTML?: never; textContent?: never },
>(slot: Props | undefined) {
  const {
    class: _class,
    children: _children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  } = slot ?? {};
  return rest;
}

/** 布局容器可直接使用的常见原生语义标签。 */
export type LayoutTag =
  'div' | 'span' | 'section' | 'main' | 'header' | 'footer' | 'aside' | 'nav' | 'ul' | 'ol' | 'li';
