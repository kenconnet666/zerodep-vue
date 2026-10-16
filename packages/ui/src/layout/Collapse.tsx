import { _component, _div } from '@zerodep-vue/core';
import type { Ref } from 'vue';
import { provide, ref } from 'vue';
import { useCss } from '../config/Provider.tsx';
import type { ElementProps } from '../config/props.ts';
import type { Callback } from '../interaction/callbacks.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import { collapseKey } from './collapse-context.ts';
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
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: CollapseProps) => {
    const css = useCss();
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
      <_div
        css={[
          css({
            display: 'block',
            minWidth: 0,
          }),
          cssProp,
        ]}
        {...rest}
        data-zv-collapse=""
      >
        {children}
      </_div>
    );
  },
);
