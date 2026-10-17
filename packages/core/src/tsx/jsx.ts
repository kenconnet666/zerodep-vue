import type { NativeElements, ReservedProps, VNode, VNodeChild } from 'vue';
import type { ManagedProps } from './component.ts';
import type { ClassValue } from '../css/style-value.ts';
import type { ElementDirectives, ModelDirectives } from './directives.ts';

declare const nativeElement: unique symbol;

type Elements = {
  [Name in keyof NativeElements]: Omit<NativeElements[Name], 'class'> &
    ElementDirectives &
    (Name extends 'input' | 'textarea' | 'select' ? ModelDirectives : {}) & {
      readonly [nativeElement]?: true;
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
    // 原生元素沿用自身指令；自有与普通 Vue 组件的 Props 协议由标记分别处理。
    export type LibraryManagedAttributes<_Component, Props> =
      typeof nativeElement extends keyof Props ? Props : ManagedProps<Props>;
  }
}
export {};
