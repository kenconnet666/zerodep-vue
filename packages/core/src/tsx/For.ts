import { Fragment, createVNode } from 'vue';
import type { SetupContext, VNode, VNodeChild } from 'vue';
import type { AuthorProps } from './component.ts';
import { renderCss } from '../css/vnode.ts';

export interface ForProps<T> extends AuthorProps {
  /** 数组或只读数组；空值使用 fallback。 */
  each: readonly T[] | null | undefined;
  /** 跨重排保留行身份的唯一 key；省略时按位置更新。 */
  getKey?: (item: T, index: number) => PropertyKey;
  /** 普通参数接收当前 item 和从 0 开始的 index。持久状态放在行组件中。 */
  children?: (item: T, index: number) => VNodeChild;
  /** 空列表内容，直接传 JSX。 */
  fallback?: VNodeChild;
}

/** 用 Vue keyed Fragment 组织列表，不增加 DOM 包装或改变 item 的数据类型。 */
export function For<T>(props: ForProps<T>, context: SetupContext): VNode {
  return renderCss(() => {
    const items = props.each ?? [];
    const render = props.children ?? context.slots.default;
    if (!items.length) return createVNode(Fragment, null, [props.fallback]);
    if (!render) throw new Error('[For] 非空列表需要 children renderer。');
    const keys = new Set<PropertyKey>();
    return createVNode(
      Fragment,
      null,
      items.map((item, index) => {
        const key = props.getKey ? props.getKey(item, index) : index;
        if (keys.has(key)) throw new Error(`[For] 重复 key：${String(key)}。`);
        keys.add(key);
        return createVNode(Fragment, { key }, [render(item, index)]);
      }),
    );
  }) as VNode;
}

For.props = ['each', 'getKey', 'children', 'fallback'];
For.inheritAttrs = false;
