import { ssrContextKey } from 'vue';
import type { ComponentInternalInstance } from 'vue';
import { createCssHost, cssHostKey } from './host.ts';
import type { CssHost } from './host.ts';

const apps = new WeakMap<object, CssHost>();
const requests = new WeakMap<object, CssHost>();

/** 读取 renderToString 的本次 context 中收集到的 CSS，不跨请求共享。 */
export function getCssHost(context: object): CssHost | undefined {
  return requests.get(context);
}

/** @internal SSR 始终写入请求收集器；浏览器复用应用宿主。 */
export function hostFor(owner: ComponentInternalInstance): CssHost {
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
