import { defineComponent, getCurrentInstance, isReadonly, shallowReadonly } from 'vue';
import type { ComponentOptions, SetupContext } from 'vue';
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
      const wrapped: SetupContext = {
        get attrs() {
          return new Proxy(context.attrs, {
            get(target, key) {
              return key === 'class' && hasIncomingClass(instance)
                ? (raw as Props)[CLASS_PROP]
                : Reflect.get(target, key);
            },
          });
        },
        get slots() {
          return context.slots;
        },
        emit: context.emit,
        expose: context.expose,
      };
      const finish = (value: unknown): unknown => {
        if (typeof value !== 'function') return value;
        return (...args: unknown[]) =>
          renderCss(() => {
            const result = value(...args);
            return options.inheritAttrs !== false && !declaresClass && hasIncomingClass(instance)
              ? inheritClass(result, (raw as Props)[CLASS_PROP] as ClassValue)
              : result;
          });
      };
      const result = setup?.(raw, wrapped);
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

/**
 * @internal 默认值缓存属于本次 setup，父级更换/撤去输入不会创建共享 Ref。
 * 只在消费位置读取 props 或 slot，避免把 Vue 的依赖追踪提前到初始化阶段。
 */
export function resolveProps(
  raw: Props,
  context: SetupContext,
  defaults: Defaults = {},
  writable: readonly string[] = [],
): Props {
  const instance = getCurrentInstance();
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
  if (own(instance?.vnode.props ?? {}, 'children') && context.slots.default) {
    throw new TypeError('组件不能同时接收显式 children prop 和嵌套 children。');
  }
  return new Proxy(raw, {
    get(target, key) {
      if (key === CLASS_PROP) return undefined;
      if (
        key === 'children' &&
        !own(instance?.vnode.props ?? {}, 'children') &&
        context.slots.default
      ) {
        return context.slots.default();
      }
      const value =
        key === 'class' && instance && hasIncomingClass(instance)
          ? raw[CLASS_PROP]
          : Reflect.get(target, key);
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
    set() {
      throw new TypeError('组件 props 只读；需要写入共享状态时修改传入 Ref 的 .value。');
    },
    deleteProperty() {
      throw new TypeError('组件 props 只读，不能删除。');
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== CLASS_PROP);
    },
    has(target, key) {
      return key !== CLASS_PROP && Reflect.has(target, key);
    },
    getOwnPropertyDescriptor(target, key) {
      return key === CLASS_PROP ? undefined : Reflect.getOwnPropertyDescriptor(target, key);
    },
  });
}

/** @internal rest 每次枚举当前 props/attrs，保留新增、删除和属性读取的 Vue 语义。 */
export function restProps(props: Props, context: SetupContext, excluded: readonly string[]): Props {
  const omitted = new Set(excluded);
  omitted.add(CLASS_PROP);
  // Vue 对公开的只读代理会在构造 VNode 时复制 props。否则两个 VNode 共用实时对象，
  // diff 时旧值已消失，属性删除和监听移除就无法被观察到。
  return shallowReadonly(
    new Proxy(Object.create(null) as Record<string, unknown>, {
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
    }),
  );
}
