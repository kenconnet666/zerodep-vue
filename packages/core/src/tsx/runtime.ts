import {
  defineComponent,
  getCurrentInstance,
  isReadonly,
  onBeforeUpdate,
  shallowReadonly,
  shallowRef,
} from 'vue';
import type { ComponentInternalInstance, ComponentOptions, SetupContext } from 'vue';
import { camelize } from '@vue/shared';
import { CLASS_PROP, hasIncomingClass, inheritClass, renderCss } from '../css/vnode.ts';
import type { ClassValue } from '../css/style-value.ts';

/** 编译器与 CSS 边界共享标记，不通过组件名称猜测作者协议。 */
export const componentMarker = Symbol.for('@zerodep-vue/component');

/** @internal 编译器目标；继续使用 Vue 的真实 stateful component。 */
export function createComponent(options: ComponentOptions) {
  const declared = Array.isArray(options.props)
    ? Object.fromEntries(options.props.map((key) => [key, null]))
    : { ...options.props };
  if (Object.prototype.hasOwnProperty.call(declared, CLASS_PROP))
    throw new Error(`${CLASS_PROP} 是编译器保留字段。`);
  const declaresClass = Object.prototype.hasOwnProperty.call(declared, 'class');
  if (declaresClass)
    declared.class = { ...(typeof declared.class === 'object' ? declared.class : {}), type: null };
  declared[CLASS_PROP] = { type: null };
  const setup = options.setup;
  const component = defineComponent({
    ...options,
    props: declared,
    setup(raw, context) {
      const instance = getCurrentInstance()!;
      const finish = (value: unknown): unknown => {
        if (typeof value !== 'function') return value;
        return (...args: unknown[]) =>
          renderCss(() => {
            // children 可能已被 computed 缓存，仍须在每次渲染前检查宿主新加入的冲突。
            hasExplicitChildren(instance, context);
            const result = value(...args);
            return options.inheritAttrs !== false && !declaresClass && hasIncomingClass(instance)
              ? inheritClass(result, (raw as Props)[CLASS_PROP] as ClassValue)
              : result;
          });
      };
      // context 只供生成的 props 接线使用，不再向作者转发第二参数或实例 API。
      const result = setup?.(raw, context);
      return (result instanceof Promise ? result.then(finish) : finish(result)) as ReturnType<
        NonNullable<ComponentOptions['setup']>
      >;
    },
  });
  Object.defineProperty(component, componentMarker, { value: true });
  return component;
}

type Props = Readonly<Record<string, unknown>>;
type Defaults = Record<string, () => unknown>;
const own = (value: object, key: PropertyKey) => Object.prototype.hasOwnProperty.call(value, key);

function rejectPropsMutation(): never {
  throw new TypeError('组件 props 只读；需要写入共享状态时修改传入 Ref 的 .value。');
}

function hasExplicitChildren(
  instance: ComponentInternalInstance | null,
  context: Pick<SetupContext, 'slots'>,
) {
  const supplied = own(instance?.vnode.props ?? {}, 'children');
  if (supplied && context.slots.default)
    throw new TypeError('组件不能同时接收显式 children prop 和嵌套 children。');
  return supplied;
}

/**
 * @internal 默认值缓存属于本次 setup，父级更换/撤去输入不会创建共享 Ref。
 * 只在消费位置读取 props 或 slot，避免把 Vue 的依赖追踪提前到初始化阶段。
 */
export function resolveProps(
  raw: Props,
  context: Pick<SetupContext, 'attrs' | 'slots'>,
  defaults: Defaults = {},
  writable: readonly string[] = [],
): Props {
  const instance = getCurrentInstance();
  const runtimeNames = new Map<PropertyKey, string>();
  const authorNames = new Map<PropertyKey, string>();
  const declared = instance?.type.props;
  // Vue 会规范化声明键；作者的读取、枚举和 rest 统一使用声明时的拼写。
  for (const name of Array.isArray(declared) ? declared : Object.keys(declared ?? {})) {
    const normalized = camelize(name);
    if (normalized === name) continue;
    runtimeNames.set(name, normalized);
    authorNames.set(normalized, name);
  }
  const incomingVNode = shallowRef(instance?.vnode);
  if (instance)
    onBeforeUpdate(() => {
      // Vue 已更新本次 props/slots；用输入 VNode 追踪非响应式的插槽替换与撤除。
      // 自身状态更新沿用同一 VNode，不会使仅消费 children 的 computed 无故失效。
      incomingVNode.value = instance.vnode;
    });
  const fallback = new Map<PropertyKey, unknown>();
  const evaluating = new Set<PropertyKey>();
  const editable = new Set<PropertyKey>(writable);
  const checked = (key: PropertyKey, value: unknown) => {
    if (editable.has(key) && isReadonly(value))
      throw new TypeError(
        `[ZV_READONLY_MODEL] ${String(key)} 用于 .value 编辑，不能接收只读 computed、getter toRef 或 readonly 来源；请传入 Ref 或带 get/set 的 computed。`,
      );
    return value;
  };
  hasExplicitChildren(instance, context);
  const attrs = () => {
    const value = context.attrs;
    // Vue attrs 仅在 get 时登记依赖；枚举和存在性查询也要跟随父级新增、删除属性。
    void value[CLASS_PROP];
    return value;
  };
  return new Proxy(raw, {
    get(target, key) {
      if (key === CLASS_PROP) return undefined;
      if (key === 'children') void incomingVNode.value;
      const runtimeKey = runtimeNames.get(key) ?? key;
      let value: unknown;
      if (key === 'class' && instance && hasIncomingClass(instance)) value = raw[CLASS_PROP];
      else if (own(target, runtimeKey) || !own(attrs(), key))
        value = Reflect.get(target, runtimeKey);
      else value = Reflect.get(attrs(), key);
      // 先读取实际输入，确保 computed 消费 children 时仍追踪 prop 的更新。
      if (key === 'children' && !hasExplicitChildren(instance, context) && context.slots.default) {
        return context.slots.default();
      }
      if (value !== undefined || !own(defaults, key)) return checked(key, value);
      if (!fallback.has(key)) {
        if (evaluating.has(key)) throw new TypeError(`组件默认值存在循环依赖：${String(key)}。`);
        evaluating.add(key);
        try {
          fallback.set(key, defaults[key as string]!());
        } finally {
          evaluating.delete(key);
        }
      }
      return checked(key, fallback.get(key));
    },
    set: rejectPropsMutation,
    deleteProperty: rejectPropsMutation,
    defineProperty: rejectPropsMutation,
    preventExtensions: rejectPropsMutation,
    setPrototypeOf: rejectPropsMutation,
    ownKeys(target) {
      const keys = Reflect.ownKeys(target).map((key) => authorNames.get(key) ?? key);
      return [...new Set([...keys, ...Reflect.ownKeys(attrs())])].filter(
        (key) => key !== CLASS_PROP,
      );
    },
    has(target, key) {
      return (
        key !== CLASS_PROP &&
        (Reflect.has(target, runtimeNames.get(key) ?? key) || own(attrs(), key))
      );
    },
    getOwnPropertyDescriptor(target, key) {
      if (key === CLASS_PROP) return;
      return (
        Reflect.getOwnPropertyDescriptor(target, runtimeNames.get(key) ?? key) ??
        Reflect.getOwnPropertyDescriptor(attrs(), key)
      );
    },
  });
}

/** @internal rest 仅过滤统一的 props 视图；context 参数保留已有编译产物的调用兼容。 */
export function restProps(props: Props, _context: unknown, excluded: readonly string[]): Props {
  const omitted = new Set(excluded);
  omitted.add(CLASS_PROP);
  // Vue 对公开的只读代理会在构造 VNode 时复制 props。否则两个 VNode 共用实时对象，
  // diff 时旧值已消失，属性删除和监听移除就无法被观察到。
  return shallowReadonly(
    new Proxy(Object.create(null) as Record<string, unknown>, {
      get(_target, key) {
        if (typeof key === 'string' && omitted.has(key)) return undefined;
        // 只转发实际输入，不能带出 props 的 __v_raw 等标记并绕过 rest 自己的只读代理。
        return own(props, key) ? Reflect.get(props, key) : undefined;
      },
      has(_target, key) {
        return !(typeof key === 'string' && omitted.has(key)) && Reflect.has(props, key);
      },
      ownKeys() {
        return Reflect.ownKeys(props).filter((key) => typeof key !== 'string' || !omitted.has(key));
      },
      getOwnPropertyDescriptor(_target, key) {
        if ((typeof key !== 'string' || !omitted.has(key)) && own(props, key))
          return { configurable: true, enumerable: true };
      },
      // 不能让结构写入修改空目标，否则后续 ownKeys 会违反 Proxy 不变量。
      set: rejectPropsMutation,
      deleteProperty: rejectPropsMutation,
      defineProperty: rejectPropsMutation,
      preventExtensions: rejectPropsMutation,
      setPrototypeOf: rejectPropsMutation,
    }),
  );
}
