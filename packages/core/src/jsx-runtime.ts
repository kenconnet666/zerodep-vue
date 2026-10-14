import type { NativeElements, ReservedProps, VNode, VNodeChild } from 'vue';
import type { ManagedProps } from './tsx/component.ts';
import type { ClassValue } from './css/types.ts';
export { Fragment, h as jsx, h as jsxs, h as jsxDEV } from 'vue';

type Elements = {
  [Name in keyof NativeElements]: Omit<NativeElements[Name], 'class'> & {
    children?: VNodeChild;
    class?: ClassValue;
  };
};

/** 按文件或工程选择的 JSX 类型入口，不修改全局 Vue JSX 声明。 */
export namespace JSX {
  export interface Element extends VNode {}
  export interface ElementClass {
    $props: {};
  }
  export interface ElementAttributesProperty {
    $props: {};
  }
  export interface ElementChildrenAttribute {
    children: {};
  }
  export interface IntrinsicElements extends Elements {}
  export interface IntrinsicAttributes extends ReservedProps {}
  export type LibraryManagedAttributes<_Component, Props> = ManagedProps<Props>;
}
