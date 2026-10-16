import { _component, bx, cx } from '@zerodep-vue/core';
import { computed, inject, shallowRef, watch } from 'vue';
import type { Ref } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import { splitKey } from './split-context.ts';
import type { SplitLength } from './split-layout.ts';

export interface SplitPaneProps extends Omit<ElementProps, 'id'> {
  /** Split 内唯一的稳定名称；尺寸记录按名称匹配，不随顺序漂移。 */
  name: string;
  /** 拖动条的可访问名称。 */
  label?: string;
  min?: SplitLength;
  max?: SplitLength;
  /** 禁止用户拖动改变本面板；容器 resize 仍重新布局。 */
  resizable?: boolean;
  collapsible?: boolean;
  /** 可选的可写折叠状态；省略时由 Split 独立维护。 */
  collapsed?: Ref<boolean>;
  slotContent?: ElementSlotProps;
}

/** 直接放在 Split 内；滚动内容按需组合 Scrollbar，避免强制嵌套滚动容器。 */
export const SplitPane = _component(
  ({
    name,
    label: _label,
    min: _min,
    max: _max,
    resizable: _resizable,
    collapsible: _collapsible,
    collapsed: _collapsed,
    slotContent,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: SplitPaneProps) => {
    const s = useCss();
    const owner = inject(splitKey);
    if (!owner) throw new Error('SplitPane 必须是 Split 的直接子节点。');
    const state = computed(() => owner.pane(name));
    const root = shallowRef<HTMLDivElement>();
    const hidden = computed(() => state.value.collapsed || state.value.size <= 0);
    watch(
      hidden,
      (value) => {
        if (value && root.value?.contains(root.value.ownerDocument.activeElement))
          owner.focusHandle(name);
      },
      { flush: 'sync' },
    );
    return (
      <div
        {...rest}
        ref={root}
        id={state.value.id}
        data-zv-split-pane={name}
        aria-hidden={hidden.value || undefined}
        inert={hidden.value || undefined}
        class={cx(
          s
            .display('flex')
            .flexDirection('column')
            .minWidth(0)
            .minHeight(0)
            .overflow('hidden')
            .flex(bx(`${state.value.size} 1 0px`)),
          className,
        )}
      >
        <div
          {...slotRest(slotContent)}
          class={cx(s.flex('1 1 auto').minWidth(0).minHeight(0), slotContent?.class)}
        >
          {children}
        </div>
      </div>
    );
  },
);
