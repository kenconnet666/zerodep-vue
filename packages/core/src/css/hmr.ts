import { computed, ReactiveEffect, shallowRef, unref } from 'vue';
import type { ShallowRef } from 'vue';
import { CLASS } from './types.ts';
import { ANIMATION } from './animation-token.ts';

type Environment = Record<string, unknown>;
type Factory = (environment: Environment, ...args: unknown[]) => any;
type Factories = Record<string, Factory>;
export interface HotContext {
  data: Record<string, unknown>;
  prune(callback: () => void): void;
  dispose(callback: () => void): void;
}
interface ModuleState {
  signature: string;
  factories: ShallowRef<Factories>;
  globals: Map<string, () => void>;
  fresh: boolean;
}
const stateKey = '__zerodepHmr';

function dispose(state: ModuleState | undefined) {
  if (state) for (const stop of state.globals.values()) stop();
  state?.globals.clear();
}

/** @internal 当前 Vite module.data 保存单个版本，不建立模块或实例历史表。 */
export function registerModule(
  hot: HotContext | undefined,
  signature: string,
  factories: Factories,
) {
  // Vitest 等执行器可能提供不完整的 import.meta.hot；此时保持普通求值，不建立更新记录。
  if (!hot?.data || typeof hot.dispose !== 'function' || typeof hot.prune !== 'function')
    return {
      render:
        (site: string, environment: Environment) =>
        (...args: unknown[]) =>
          factories[site]!(environment, ...args),
      style: (site: string, environment: Environment, _kind: string) =>
        factories[site]!(environment),
      onceGlobal: (_site: string, register: () => () => void) => register(),
    };
  let state = hot.data[stateKey] as ModuleState | undefined;
  if (!state || state.signature !== signature) {
    dispose(state);
    state = { signature, factories: shallowRef(factories), globals: new Map(), fresh: true };
    hot.data[stateKey] = state;
  } else {
    state.fresh = true;
    state.factories.value = factories;
  }
  const current = state;
  hot.prune(() => dispose(hot.data[stateKey] as ModuleState | undefined));
  hot.dispose(() => {
    current.fresh = false;
  });

  const snapshot = (site: string, environment: Environment) => {
    let version = current.factories.value;
    // 首次求值在原调用位置执行，保留 render 中的追踪、setup 快照和副作用顺序。
    let value = version[site]!(environment);
    return () => {
      const next = current.factories.value;
      if (version !== next) {
        // 热替换只重算这段样式。独立且立即停止的 Vue effect 防止普通 setup 读取
        // 意外成为消费组件的长期依赖；bx 的 getter 仍由正常 CSS 消费过程读取。
        const isolated = new ReactiveEffect(() => next[site]!(environment));
        try {
          value = isolated.run();
          version = next;
        } finally {
          isolated.stop();
        }
      }
      return value;
    };
  };
  const view = (read: () => any, token: symbol) =>
    Object.freeze({
      get [token]() {
        return read()[token];
      },
      [Symbol.toPrimitive](hint: string) {
        const value = read();
        return value[Symbol.toPrimitive] ? value[Symbol.toPrimitive](hint) : String(value);
      },
    });
  return {
    render(site: string, environment: Environment) {
      return (...args: unknown[]) => current.factories.value[site]!(environment, ...args);
    },
    style(site: string, environment: Environment, kind: string) {
      const read = snapshot(site, environment);
      if (kind === 'class') return view(read, CLASS);
      if (kind === 'keyframes') return view(read, ANIMATION);
      if (kind === 'source') return computed(() => unref(read()));
      // 具名样式成员也使用稳定视图，setup 解构后的单个 class 不会固定在旧版本。
      const members = new Map<PropertyKey, object>();
      return new Proxy(
        {},
        {
          get(_target, key) {
            if (!Object.hasOwn(read(), key)) return Reflect.get(read(), key);
            if (!members.has(key)) {
              const member = () => {
                const item = read()[key];
                if (!item)
                  throw new Error(`HMR 样式成员 ${String(key)} 已移除；请同步修改消费位置。`);
                return item;
              };
              members.set(key, view(member, CLASS));
            }
            return members.get(key);
          },
          has(_target, key) {
            return Reflect.has(read(), key);
          },
          ownKeys() {
            return Reflect.ownKeys(read());
          },
          getOwnPropertyDescriptor(_target, key) {
            return Object.hasOwn(read(), key)
              ? { configurable: true, enumerable: true }
              : undefined;
          },
        },
      );
    },
    onceGlobal(site: string, register: () => () => void) {
      if (!current.globals.has(site)) current.globals.set(site, register());
      return current.globals.get(site)!;
    },
  };
}

/** @internal 由旧模块的 accept 回调与新模块的注册签名共同决定是否保留实例。 */
export function compatible(hot: HotContext | undefined, signature: string): boolean {
  const state = hot?.data?.[stateKey] as ModuleState | undefined;
  if (state && !state.fresh) dispose(state);
  return !!state?.fresh && state.signature === signature;
}
