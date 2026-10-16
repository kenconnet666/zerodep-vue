import type { Props, Slot, _div } from '@zerodep-vue/core';

export type { DataAttributes } from '@zerodep-vue/core';

/** 通用容器属性；内容只通过 children 提供，保留原生 class/style 与独立 css。 */
export type ElementProps = Props<typeof _div, { innerHTML?: never; textContent?: never }>;

/** 默认 div 的子节点属性；其他实际目标直接使用 Slot<typeof Target, Owned>。 */
export type ElementSlotProps = Slot<typeof _div>;

/** 布局容器可直接使用的常见原生语义标签。 */
export type LayoutTag =
  'div' | 'span' | 'section' | 'main' | 'header' | 'footer' | 'aside' | 'nav' | 'ul' | 'ol' | 'li';
