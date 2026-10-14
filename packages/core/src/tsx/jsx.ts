import type { NativeElements, ReservedProps, VNode, VNodeChild } from 'vue';
import type { ManagedProps } from './component.ts';
import type { ClassValue } from '../css/types.ts';

type Elements = {
  [Name in keyof NativeElements]: Omit<NativeElements[Name], 'class'> & {
    children?: VNodeChild;
    class?: ClassValue;
  };
};

/** 导入 core 即注册本工程的 JSX 类型；显式 jsxImportSource: vue 的文件沿用 Vue 类型。 */
declare global {
  namespace JSX {
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
}
export {};
