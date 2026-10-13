import type { ComponentOptions, DefineSetupFnComponent, SetupContext, VNodeChild } from 'vue';

declare const authorProps: unique symbol;

/** 内部类型标记：增强 JSX 仅对自有组件检查 children 契约。 */
export interface AuthorProps {
  readonly [authorProps]?: true;
}

type SlotContent = (...args: any[]) => VNodeChild;
type OptionalInputs<P> = {
  [Key in keyof P]: {} extends Pick<P, Key> ? P[Key] | undefined : P[Key];
};

/** 普通 Vue 组件保留原有 VNode / 函数 / 对象 slots，不放宽自有组件的内容类型。 */
export type ManagedProps<P> = typeof authorProps extends keyof P
  ? OptionalInputs<P>
  : P & { children?: VNodeChild | SlotContent | Record<string, SlotContent | undefined> };

/**
 * 声明初始化一次的 Vue TSX 组件，直接返回的 JSX 由编译插件放入 render。
 * 参数边界的解构读取保持更新；普通局部计算仍遵循 JavaScript 的快照语义。
 * 默认值用参数的 `=` 写法，Ref 及回调保留原始身份。
 */
export function _component<Props extends object = Record<string, never>>(
  setup: (props: Props, context: SetupContext) => VNodeChild | Promise<VNodeChild>,
  options?: Pick<ComponentOptions, 'name' | 'inheritAttrs'>,
): DefineSetupFnComponent<Props & AuthorProps> {
  void setup;
  void options;
  throw new Error('[_component] 此调用需要 @zerodep-vue/compiler 转换；请检查 JSX 插件入口。');
}
