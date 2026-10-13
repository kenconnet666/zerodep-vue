import { ssrContextKey } from 'vue';
import type { ComponentInternalInstance } from 'vue';
import { createCssHost, cssHostKey } from './host.ts';
import type { CssHost } from './host.ts';

const contextsKey = Symbol.for('@zerodep-vue/css/contexts/v1');
interface Contexts {
  apps: WeakMap<object, CssHost>;
  requests: WeakMap<object, CssHost>;
}
function contexts(): Contexts {
  const owner = globalThis as typeof globalThis & { [contextsKey]?: Contexts };
  if (!owner[contextsKey])
    Object.defineProperty(owner, contextsKey, {
      value: {
        apps: new WeakMap<object, CssHost>(),
        requests: new WeakMap<object, CssHost>(),
      } satisfies Contexts,
    });
  return owner[contextsKey]!;
}

/** 读取 renderToString 的本次 context 中收集到的 CSS，不跨请求共享。 */
export function getCssHost(context: object): CssHost | undefined {
  return contexts().requests.get(context);
}

/** @internal SSR 始终写入请求收集器；浏览器复用应用宿主。 */
export function hostFor(owner: ComponentInternalInstance): CssHost {
  // bundle 内外可以加载不同模块实例；按真实 app/context 弱键共享宿主，避免漏收 SSR 样式。
  // 索引不保留请求历史，也不要求修改或解冻调用方提供的 context。
  const { apps, requests } = contexts();
  const context = owner.appContext.provides[ssrContextKey as symbol] as object | undefined;
  if (context) {
    let host = requests.get(context);
    if (!host) {
      host = createCssHost({ target: null });
      requests.set(context, host);
    }
    return host;
  }
  const provided = owner.appContext.provides[cssHostKey as symbol] as CssHost | undefined;
  if (provided) return provided;
  let host = apps.get(owner.appContext);
  if (!host) {
    host = createCssHost();
    apps.set(owner.appContext, host);
    owner.appContext.app.onUnmount(() => host!.dispose());
  }
  return host;
}
