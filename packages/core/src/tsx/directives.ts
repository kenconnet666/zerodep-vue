import type { VNodeChild } from 'vue';

/** Vue JSX 支持的元素指令；结构指令 v-if/v-for/v-once/v-memo 不属于 JSX 转换入口。 */
export interface ElementDirectives {
  /** 根据值的真假切换 display，节点仍保留；需要条件创建/销毁时使用 JSX 条件表达式。 */
  'v-show'?: unknown;
  /** 将 HTML 写入 innerHTML，覆盖 children；调用方应提供可信内容。 */
  'v-html'?: string;
  /** 将值写入 textContent，覆盖 children；内容不会作为 HTML 解析。 */
  'v-text'?: string | number | null;
}

/**
 * 双向绑定使用可赋值表达式，例如 ref.value；保持 Vue 的更新事件和原生表单指令语义。
 * 任意值域由具体控件决定，赋值目标由 JSX 编译器检查，不把模型统一限制为字符串。
 */
export interface ModelDirectives {
  /**
   * 双向绑定。原生 input/textarea/select 使用 Vue 表单指令；组件使用 modelValue/onUpdate:modelValue。
   * @example <input v-model={text.value} />
   * @example <Field v-model={[text.value, 'value', ['trim']]} />
   */
  'v-model'?: unknown;
  /** 原生文本输入在 change 时写回，避免每次 input 都更新；组件需自己处理相应 modifier。 */
  'v-model_lazy'?: unknown;
  /** 原生文本输入写回前去除首尾空格；组件需自己处理相应 modifier。 */
  'v-model_trim'?: unknown;
  /** 原生文本输入按 Vue 规则尝试转为数字，无法转换时保留字符串；组件需处理相应 modifier。 */
  'v-model_number'?: unknown;
  /** 组合 lazy 和 trim：change 时去除首尾空格后写回。 */
  'v-model_lazy_trim'?: unknown;
  /** 组合 lazy 和 number：change 时尝试转换数字后写回。 */
  'v-model_lazy_number'?: unknown;
  /** 组合 trim 和 number：去除首尾空格并尝试转换数字后写回。 */
  'v-model_trim_number'?: unknown;
  /** 组合 lazy、trim、number；按 change 时机处理文本并写回。 */
  'v-model_lazy_trim_number'?: unknown;
  /** 自定义组件的 modifier，以及其他合法的 modifier 顺序；原生控件只解释 Vue 支持的项。 */
  [name: `v-model_${string}`]: unknown;
}

/** 组件模型的元组形式：[可赋值表达式, 参数名?, modifiers?]。 */
export type ModelTuple =
  | readonly [value: unknown]
  | readonly [value: unknown, modifiers: readonly string[]]
  | readonly [value: unknown, argument: string, modifiers?: readonly string[]];

/** 除元素指令外，组件还支持命名模型和显式 slots。 */
export interface ComponentDirectives extends ElementDirectives, ModelDirectives {
  /**
   * 传入具名/作用域插槽函数；回调在消费组件的渲染作用域执行。
   * @example <Panel v-slots={{ footer: () => <button>确认</button> }} />
   */
  'v-slots'?: Readonly<Record<string, ((...args: any[]) => VNodeChild) | undefined>>;
  /**
   * 批量组件双向绑定，使用二维数组字面量；每项对应一个 prop 及 onUpdate:prop。
   * @example <Field v-models={[[first.value, 'first'], [last.value, 'last']]} />
   */
  'v-models'?: readonly ModelTuple[];
  /** 命名组件双向绑定，例如 v-model:value；下划线后可以附加 modifier。 */
  [name: `v-model:${string}`]: unknown;
}
