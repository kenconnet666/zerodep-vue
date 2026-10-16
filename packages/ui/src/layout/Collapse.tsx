import { _component, cx } from '@zerodep-vue/core';
import { provide, ref } from 'vue';
import type { Ref } from 'vue';
import type { ElementProps } from '../config/props.ts';
import { useCss } from '../config/Provider.tsx';
import { collapseKey } from './collapse-context.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { Callback } from '../interaction/callbacks.ts';

export interface CollapseProps extends ElementProps {
  /** 可写展开项名称；省略时每个实例独立维护。 */
  expandedKeys?: Ref<readonly string[]>;
  /** 默认单开；开启后允许同时展开多个面板。 */
  multiple?: boolean;
  /** 交互产生的新状态；外部直接写 Ref 不重复通知。 */
  onExpandedChange?: Callback<[keys: readonly string[]]>;
}

/** 折叠面板组，使用稳定的 item name 管理状态。 */
export const Collapse = _component(
  ({
    expandedKeys = ref<readonly string[]>([]),
    multiple = false,
    onExpandedChange,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: CollapseProps) => {
    const s = useCss();
    const names = new Set<string>();
    provide(collapseKey, {
      expanded: (name) => expandedKeys.value.includes(name),
      toggle(name) {
        const next = expandedKeys.value.includes(name)
          ? expandedKeys.value.filter((key) => key !== name)
          : multiple
            ? [...expandedKeys.value, name]
            : [name];
        expandedKeys.value = next;
        callCallbacks(onExpandedChange, next);
      },
      register(name) {
        if (names.has(name)) throw new Error(`CollapseItem name 必须唯一：${name}`);
        names.add(name);
        return () => {
          names.delete(name);
        };
      },
    });
    return (
      <div {...rest} data-zv-collapse="" class={cx(s.display('block').minWidth(0), className)}>
        {children}
      </div>
    );
  },
);
