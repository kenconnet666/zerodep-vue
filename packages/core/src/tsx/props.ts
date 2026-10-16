import type { AriaAttributes, NativeElements } from 'vue';
import type { CssInput, DataAttributes } from '../css/object-types.ts';

/** @internal 只参与类型提取，不从运行时 props 选项重建 TypeScript 契约。 */
export declare const propsType: unique symbol;
export interface TypedProps<Props extends object> {
  readonly [propsType]: Props;
}

/** 优先读取作者原始类型；普通 Vue 组件沿用其公开 $props。 */
export type PropsOf<Target> =
  Target extends TypedProps<infer Props>
    ? Props
    : Target extends keyof NativeElements
      ? NativeElements[Target]
      : Target extends abstract new (...args: any[]) => { $props: infer Props extends object }
        ? typeof propsType extends keyof Props
          ? NonNullable<Props[typeof propsType]>
          : Props
        : Target extends (props: infer Props extends object, ...args: any[]) => unknown
          ? Props
          : never;

type Replace<Base, Extra> = Omit<Base, keyof Extra | 'css' | 'ref' | 'ref_for' | 'ref_key'> & Extra;

/** 同名字段由 Extra 完整替换；普通业务对象不进行递归合并。 */
export type Props<Target, Extra extends object = {}> = Replace<PropsOf<Target>, Extra> &
  DataAttributes & {
    /** 按数组和 JSX 来源顺序组合结构化 CSS；普通 class/style 继续使用 Vue 原生规则。 */
    css?: CssInput<Replace<PropsOf<Target>, Extra> & AriaAttributes>;
  };

type ProtectedSlot =
  | 'children'
  | 'innerHTML'
  | 'textContent'
  | 'ref'
  | 'ref_for'
  | 'ref_key'
  | 'key'
  | 'v-html'
  | 'v-text'
  | 'v-slots'
  | 'onVnodeBeforeMount'
  | 'onVnodeMounted'
  | 'onVnodeBeforeUpdate'
  | 'onVnodeUpdated'
  | 'onVnodeBeforeUnmount'
  | 'onVnodeUnmounted';

/** 子节点属性袋；内容、身份和 DOM 引用由所属组件管理，Owned 明确额外保留字段。 */
export type Slot<Target, Owned extends PropertyKey = never> = Partial<
  Omit<PropsOf<Target>, ProtectedSlot | Owned | 'css'>
> &
  DataAttributes & { [Key in ProtectedSlot | Owned]?: never } & {
    /** CSS 可观察目标的完整状态，包括组件拥有而调用方不能改写的属性。 */
    css?: CssInput<PropsOf<Target> & AriaAttributes>;
  };
