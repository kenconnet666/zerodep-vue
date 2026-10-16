import type {
  ComponentOptions,
  ComputedRef,
  DefineSetupFnComponent,
  Ref,
  VNodeChild,
  WritableComputedRef,
} from 'vue';
import type { ComponentDirectives, ElementDirectives } from './directives.ts';
import type { TypedProps } from './props.ts';

declare const authorProps: unique symbol;

/** 内部类型标记：增强 JSX 仅对自有组件检查 children 契约。 */
export interface AuthorProps {
  readonly [authorProps]?: true;
}

type SlotContent = (...args: any[]) => VNodeChild;
type Same<Left, Right> =
  (<Value>() => Value extends Left ? 1 : 2) extends <Value>() => Value extends Right ? 1 : 2
    ? true
    : false;
type ComputedBrand = Exclude<keyof ComputedRef<unknown>, keyof Ref<unknown> | 'effect'>;
type WritableBrand = Exclude<keyof WritableComputedRef<unknown>, keyof ComputedRef<unknown>>;
/** 普通 Ref 不携带只读 computed 标记；可写 computed 用 Vue 自己的标记放行。 */
type WritableRefKind =
  { readonly [Key in ComputedBrand]?: never } | Pick<WritableComputedRef<unknown>, WritableBrand>;
/** 复用 Vue 的 computed 标记，拒绝 getter-only computed，不创造新的状态容器。 */
// 先检查原始 value 修饰符；先收窄为 Ref 会把只读成员交叉成可写成员，丢失区别。
type ModelInput<Value> = Value extends unknown
  ? Same<Pick<Value, 'value' & keyof Value>, { value: Value['value' & keyof Value] }> extends true
    ? Value extends Ref
      ? Value & WritableRefKind
      : Value
    : Value
  : never;
type OptionalInputs<P> = {
  [Key in keyof P]: {} extends Pick<P, Key> ? ModelInput<P[Key]> | undefined : ModelInput<P[Key]>;
};

/** 自有组件只接收普通 Props；保留 DOM 与普通 Vue 组件的原生协议。 */
export type ManagedProps<P> = typeof authorProps extends keyof P
  ? OptionalInputs<P> &
      ElementDirectives & {
        /** DOM 引用通过 elementRef/inputRef 等明确的普通 Prop 传递。 */
        ref?: never;
      } & {
        // JSX 对未声明的连字符属性不报错，显式排除这些 Vue 组件协议入口。
        [
          Name in keyof ComponentDirectives as Name extends keyof ElementDirectives ? never : Name
        ]?: never;
      }
  : P &
      ComponentDirectives & {
        children?: VNodeChild | SlotContent | Record<string, SlotContent | undefined>;
      };

/**
 * 声明初始化一次的 Vue TSX 组件，直接返回的 JSX 由编译插件放入 render。
 * 参数边界的解构读取保持更新；普通局部计算仍遵循 JavaScript 的快照语义。
 * 默认值用参数的 `=` 写法，Ref 及回调保留原始身份。
 * 作者只接收 Props；内容、渲染函数、回调与 DOM Ref 都通过普通属性传递。
 * 默认不隐式透传属性；props/rest 显式传给目标节点。组件名称从声明变量名推导。
 * async setup 的 await 在返回分支之前完成；渲染保持同步，嵌套 async 事件回调不受影响。
 */
// 无自定义 props 仍允许 Vue 的 class、style 和 key；只对自有组件禁用实例 ref。
// 类型元数据放在 $props 内，保留单一构造签名，让 TS 继续传播泛型 setup 的类型参数。
export function _component<Props extends object = {}>(
  setup: (props: Props) => VNodeChild | Promise<VNodeChild>,
  options?: Pick<ComponentOptions, 'name' | 'inheritAttrs'>,
): DefineSetupFnComponent<Props & AuthorProps & Partial<TypedProps<Props>>> {
  void setup;
  void options;
  throw new Error('[_component] 此调用需要 @zerodep-vue/compiler 转换；请检查 JSX 插件入口。');
}
