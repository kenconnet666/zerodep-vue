import { createCssVNode } from '../css/vnode.ts';
import type { NativeElements, VNode, VNodeChild } from 'vue';
import type { CheckCss, CssContextual, DataAttributes } from '../css/object-types.ts';
import type { TypedProps } from './props.ts';
import type { ElementDirectives, ModelDirectives } from './directives.ts';

/** @internal 基础元素直接落到原生 VNode，不创建额外组件实例。 */
export const ELEMENT = Symbol.for('@zerodep-vue/core/element/v1');
export declare const nativeProps: unique symbol;

export type NativeProps<Tag extends keyof NativeElements> = NativeElements[Tag] &
  ElementDirectives &
  (Tag extends 'input' | 'select' | 'textarea' ? ModelDirectives : {}) & {
    children?: VNodeChild;
  };

type ExactAttributes<Attrs, Base> = {
  [Key in keyof Attrs]: Key extends keyof Base | `data-${string}` | 'css' ? Attrs[Key] : never;
};
type ObservedAttributes<Tag extends keyof NativeElements, Attrs> = NativeProps<Tag> &
  Pick<Attrs, Extract<keyof Attrs, `data-${string}`>>;

/** 泛型调用捕获本次 data-* 联合值；原生 ARIA 值域始终取目标的完整契约。 */
export interface NativeElement<Tag extends keyof NativeElements> extends TypedProps<
  NativeProps<Tag>
> {
  <const Attrs extends NativeProps<Tag> & DataAttributes, const Input>(
    props: Attrs &
      ExactAttributes<Attrs, NativeProps<Tag>> & {
        readonly [nativeProps]?: true;
        css?:
          | (Input &
              NoInfer<
                CssContextual<Input, ObservedAttributes<Tag, Attrs>> &
                  CheckCss<Input, ObservedAttributes<Tag, Attrs>>
              >)
          | undefined;
      },
  ): VNode;
  readonly [ELEMENT]: Tag;
}

/** 每个标签只保存一个稳定值；正常 JSX 由编译器直接使用原生标签。 */
export function element<Tag extends keyof NativeElements>(tag: Tag): NativeElement<Tag> {
  const render = (
    props: Record<string, unknown>,
    context?: { slots?: { default?: () => VNodeChild } },
  ) => {
    const { children, ...rest } = props;
    return createCssVNode(tag, rest, children ?? context?.slots?.default?.());
  };
  // marker 的 Props 部分仅供声明消费；运行时只需原生标签身份。
  return Object.assign(render, { [ELEMENT]: tag }) as NativeElement<Tag>;
}
