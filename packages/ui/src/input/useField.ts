import {
  computed,
  getCurrentInstance,
  getCurrentScope,
  isReadonly,
  onScopeDispose,
  ref,
  shallowRef,
  useId,
  watch,
} from 'vue';
import type { ComputedRef, Ref } from 'vue';
import type { ZodType, core, input, output } from 'zod';

export interface FieldOptions {
  /** 组件内默认使用 Vue useId；组件外的 effectScope 必须显式提供。 */
  id?: string;
  name?: string;
  /** 原生 required 和标签标记；实际规则由 Zod schema 决定。 */
  required?: boolean;
  /** 默认 blur；首次离焦后继续随修改校验。submit 只由 validate() 主动触发。 */
  validateOn?: 'blur' | 'change' | 'submit';
}
export interface FieldControl<Value> {
  readonly value: Ref<Value>;
  readonly resetValue: Value;
  readonly id: string;
  readonly name: string | undefined;
  readonly required: boolean;
  readonly 'aria-labelledby': string;
  readonly 'aria-describedby': string;
  readonly 'aria-invalid': boolean;
  readonly status: 'error' | undefined;
  onFocusout(event: FocusEvent): void;
  onValueReset(): void;
}
export interface FieldViewState {
  readonly id: string;
  readonly labelId: string;
  readonly descriptionId: string;
  readonly required: boolean;
  readonly issues: ComputedRef<readonly core.$ZodIssue[]>;
  readonly pending: ComputedRef<boolean>;
  readonly failure: ComputedRef<Error | undefined>;
}
export interface FieldState<Input, Output> extends FieldViewState {
  readonly control: FieldControl<Input>;
  readonly output: ComputedRef<Output | undefined>;
  readonly touched: ComputedRef<boolean>;
  /** 使用 Object.is 比较重置基准；对象业务值按整体替换更新。 */
  readonly dirty: ComputedRef<boolean>;
  readonly valid: ComputedRef<boolean>;
  /** 只对仍属于当前值的结果返回 true；过期、失败或卸载后的结果均为 false。 */
  validate(): Promise<boolean>;
  /** 无参数恢复基准；显式传值同时更新模型和重置基准。 */
  reset(...value: [] | [Input]): void;
}

/** Zod 原生 schema + Vue Ref；解析输出单独保存，不把 trim/transform 的结果写回编辑草稿。 */
export function useField<Schema extends ZodType>(
  value: Ref<NoInfer<input<Schema>>>,
  schema: Schema,
  options: FieldOptions = {},
): FieldState<input<Schema>, output<Schema>> {
  if (!getCurrentScope()) throw new Error('useField 必须在 setup 或 effectScope 内创建。');
  if (isReadonly(value)) throw new TypeError('useField 需要可写 Ref。');
  const id = options.id ?? (getCurrentInstance() ? `zv-field-${useId()}` : undefined);
  if (!id) throw new Error('组件外的 useField 必须提供 id。');
  const baseline = shallowRef({ value: value.value });
  const touched = ref(false);
  const pending = ref(false);
  const validated = ref(false);
  const issues = shallowRef<readonly core.$ZodIssue[]>([]);
  const parsed = shallowRef<{ value: output<Schema> }>();
  const failure = shallowRef<Error>();
  let revision = 0;
  let active = true;
  const invalid = computed(() => issues.value.length > 0 || failure.value !== undefined);
  const invalidate = () => {
    revision++;
    pending.value = false;
    validated.value = false;
    parsed.value = undefined;
    issues.value = [];
    failure.value = undefined;
    return revision;
  };
  async function validate() {
    if (!active) return false;
    const request = invalidate();
    pending.value = true;
    try {
      const result = await schema.safeParseAsync(value.value);
      if (!active || request !== revision) return false;
      validated.value = true;
      if (result.success) parsed.value = { value: result.data };
      else issues.value = Object.freeze(result.error.issues.slice());
      return result.success;
    } catch (error) {
      if (active && request === revision) {
        failure.value = error instanceof Error ? error : new Error(String(error), { cause: error });
        validated.value = true;
      }
      return false;
    } finally {
      if (active && request === revision) pending.value = false;
    }
  }
  function acknowledgeReset(next: input<Schema>) {
    // 控件已完成原生 reset；这里只接受其真实基准，不能反写旧值覆盖 resetValue。
    baseline.value = { value: next };
    touched.value = false;
    invalidate();
  }
  watch(
    value,
    () => {
      const request = invalidate();
      // 合并同一轮值变化；原生 reset 的通知也能在启动异步规则前使本轮失效。
      queueMicrotask(() => {
        const mode = options.validateOn ?? 'blur';
        if (
          active &&
          request === revision &&
          (mode === 'change' || (mode === 'blur' && touched.value))
        )
          void validate();
      });
    },
    { flush: 'sync' },
  );
  onScopeDispose(() => {
    active = false;
    invalidate();
  });
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;
  // 保留普通对象，避免 reactive 自动解包 value Ref；展开时 getter 仍参与 Vue 依赖追踪。
  const control: FieldControl<input<Schema>> = Object.freeze({
    value,
    get resetValue() {
      return baseline.value.value;
    },
    id,
    get name() {
      return options.name;
    },
    get required() {
      return options.required ?? false;
    },
    'aria-labelledby': labelId,
    'aria-describedby': descriptionId,
    get 'aria-invalid'() {
      return invalid.value;
    },
    get status() {
      return invalid.value ? ('error' as const) : undefined;
    },
    onFocusout(event: FocusEvent) {
      if (event.defaultPrevented) return;
      // 组合控件内部移动焦点仍属于同一个字段；只有离开整体才触发 blur 校验。
      const target = event.currentTarget;
      const next = event.relatedTarget;
      if (target instanceof Node && next instanceof Node && target.contains(next)) return;
      touched.value = true;
      if ((options.validateOn ?? 'blur') !== 'submit') void validate();
    },
    onValueReset: () => acknowledgeReset(value.value),
  });
  return {
    id,
    labelId,
    descriptionId,
    control,
    get required() {
      return options.required ?? false;
    },
    issues: computed(() => issues.value),
    output: computed(() => parsed.value?.value),
    touched: computed(() => touched.value),
    dirty: computed(() => !Object.is(value.value, baseline.value.value)),
    pending: computed(() => pending.value),
    valid: computed(() => validated.value && !pending.value && !invalid.value),
    failure: computed(() => failure.value),
    validate,
    reset(...next) {
      const target = next.length ? next[0] : baseline.value.value;
      value.value = target;
      acknowledgeReset(target);
    },
  };
}
