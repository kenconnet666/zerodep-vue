import { defineComponent, getCurrentInstance } from 'vue';
import type { ComponentOptions, SetupContext } from 'vue';

/** 编译器与 CSS 边界共享标记，不通过组件名称猜测作者协议。 */
export const componentMarker = Symbol.for('@zerodep-vue/component');

/** @internal 编译器目标；继续使用 Vue 的真实 stateful component。 */
export function createComponent(options: ComponentOptions) {
  const component = defineComponent(options);
  Object.defineProperty(component, componentMarker, { value: true });
  return component;
}

type Props = Readonly<Record<string, unknown>>;
type Defaults = Record<string, () => unknown>;
const own = (value: object, key: PropertyKey) => Object.prototype.hasOwnProperty.call(value, key);

/**
 * @internal 默认值缓存属于本次 setup，父级更换/撤去输入不会创建共享 Ref。
 * 只在消费位置读取 props 或 slot，避免把 Vue 的依赖追踪提前到初始化阶段。
 */
export function resolveProps(raw: Props, context: SetupContext, defaults: Defaults = {}): Props {
  const instance = getCurrentInstance();
  const fallback = new Map<PropertyKey, unknown>();
  const evaluating = new Set<PropertyKey>();
  if (own(instance?.vnode.props ?? {}, 'children') && context.slots.default) {
    throw new TypeError('组件不能同时接收显式 children prop 和嵌套 children。');
  }
  return new Proxy(raw, {
    get(target, key) {
      if (
        key === 'children' &&
        !own(instance?.vnode.props ?? {}, 'children') &&
        context.slots.default
      ) {
        return context.slots.default();
      }
      const value = Reflect.get(target, key);
      if (value !== undefined || !own(defaults, key)) return value;
      if (!fallback.has(key)) {
        if (evaluating.has(key)) throw new TypeError(`组件默认值存在循环依赖：${String(key)}。`);
        evaluating.add(key);
        try {
          fallback.set(key, defaults[key as string]!());
        } finally {
          evaluating.delete(key);
        }
      }
      return fallback.get(key);
    },
    set() {
      throw new TypeError('组件 props 只读；需要写入共享状态时修改传入 Ref 的 .value。');
    },
    deleteProperty() {
      throw new TypeError('组件 props 只读，不能删除。');
    },
  });
}

/** @internal rest 每次枚举当前 props/attrs，保留新增、删除和属性读取的 Vue 语义。 */
export function restProps(props: Props, context: SetupContext, excluded: readonly string[]): Props {
  const omitted = new Set(excluded);
  return new Proxy(Object.create(null) as Record<string, unknown>, {
    get(_target, key) {
      if (typeof key === 'string' && omitted.has(key)) return undefined;
      return own(props, key) ? Reflect.get(props, key) : Reflect.get(context.attrs, key);
    },
    has(_target, key) {
      return (
        !(typeof key === 'string' && omitted.has(key)) &&
        (own(props, key) || own(context.attrs, key))
      );
    },
    ownKeys() {
      return [...new Set([...Reflect.ownKeys(props), ...Reflect.ownKeys(context.attrs)])].filter(
        (key) => typeof key !== 'string' || !omitted.has(key),
      );
    },
    getOwnPropertyDescriptor(_target, key) {
      if (
        (typeof key !== 'string' || !omitted.has(key)) &&
        (own(props, key) || own(context.attrs, key))
      )
        return { configurable: true, enumerable: true };
    },
    set() {
      throw new TypeError('组件 rest props 只读。');
    },
  });
}
