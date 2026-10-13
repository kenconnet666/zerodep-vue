import type { App, InjectionKey } from 'vue';
import { hash } from './resolve.ts';

export interface CssRule {
  readonly name: string;
  readonly cssText: string;
}
export interface CssHostOptions {
  /** 浏览器样式容器；null 表示仅收集 SSR。省略时在首次消费时使用 document.head。 */
  target?: HTMLElement | ShadowRoot | null;
  /** 已无消费者的规则缓存上限，不会驱逐活动规则。 */
  maxUnusedRules?: number;
  /** 可选的固定宿主 layer，不按样式组合创建动态 layer。 */
  layer?: string;
  /** 写入 style 标签的 nonce；不改变 CSS 绑定本身的协议。 */
  nonce?: string;
}

interface Entry {
  key: string;
  rule: CssRule;
  text: string;
  references: number;
  node: HTMLStyleElement;
}
interface Registry {
  target: HTMLElement | ShadowRoot;
  entries: Map<string, Entry>;
  unused: Map<string, Entry>;
  names: Map<string, { text: string; entries: number }>;
  limit: number;
}

const STORE = Symbol.for('@zerodep-vue/css/registry/v1');
/** Vue 应用/子树的可选样式宿主入口；普通使用由运行时按应用建立。 */
export const cssHostKey: InjectionKey<CssHost> = Symbol.for('@zerodep-vue/css/host/v1');

function safeText(text: string): string {
  return text
    .replace(/<\/style/gi, (value) => '<\\/' + value.slice(2))
    .replace(/\r\n?/g, '\n')
    .replace(/\0/g, '\uFFFD');
}
function escapeAttribute(text: string): string {
  return text.replace(
    /[&"<>]/g,
    (value) => ({ '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' })[value]!,
  );
}

function registry(target: HTMLElement | ShadowRoot, limit: number): Registry {
  const owner = target as (HTMLElement | ShadowRoot) & { [STORE]?: Registry };
  if (!owner[STORE])
    Object.defineProperty(owner, STORE, {
      value: {
        target,
        entries: new Map(),
        unused: new Map(),
        names: new Map(),
        limit,
      } satisfies Registry,
    });
  const result = owner[STORE]!;
  result.limit = Math.min(result.limit, limit);
  return result;
}

function prune(store: Registry) {
  while (store.unused.size > store.limit) {
    const [key, entry] = store.unused.entries().next().value!;
    store.unused.delete(key);
    store.entries.delete(key);
    const named = store.names.get(entry.rule.name)!;
    if (--named.entries === 0) store.names.delete(entry.rule.name);
    if (entry.node.parentNode === store.target) entry.node.remove();
  }
}

/** 宿主只保留规则文本及租约，不保存组件 getter 或主题 Ref。 */
export class CssHost {
  private readonly options: CssHostOptions;
  private readonly owned = new Set<() => void>();
  private readonly collected = new Map<string, { rule: CssRule; text: string }>();
  private store: Registry | undefined;

  constructor(options: CssHostOptions = {}) {
    const limit = options.maxUnusedRules ?? 256;
    if (!Number.isInteger(limit) || limit < 0) throw new Error('maxUnusedRules 必须是非负整数。');
    if (options.layer && !/^[-_a-zA-Z][\w-]*(?:\.[-_a-zA-Z][\w-]*)*$/.test(options.layer))
      throw new Error('layer 需要一个固定的 CSS 层名称。');
    this.options = { ...options, maxUnusedRules: limit };
  }

  install(app: App): void {
    app.provide(cssHostKey, this);
    app.onUnmount(() => this.dispose());
  }

  private text(rule: CssRule): string {
    const text = this.options.layer
      ? `@layer ${this.options.layer}{${rule.cssText}}`
      : rule.cssText;
    return safeText(text);
  }

  /** SSR 在实际消费时收集；为每个请求创建宿主，不接触浏览器 DOM。 */
  collect(rule: CssRule): void {
    if (!rule.cssText) return;
    const previous = this.collected.get(rule.name);
    if (previous && previous.rule.cssText !== rule.cssText)
      throw new Error(`CSS 名称碰撞：${rule.name}`);
    this.collected.set(rule.name, {
      rule: { name: rule.name, cssText: rule.cssText },
      text: this.text(rule),
    });
  }

  /** 实际挂载消费者取得租约，更新或卸载时释放；释放操作可重复调用。 */
  acquire(rule: CssRule): () => void {
    if (!rule.cssText) return () => {};
    const target =
      this.options.target === undefined ? globalThis.document?.head : this.options.target;
    if (!target) {
      this.collect(rule);
      return () => {};
    }
    const store = (this.store = registry(target, this.options.maxUnusedRules!));
    const text = this.text(rule);
    const key = hash(text);
    let entry = store.entries.get(key);
    if (entry && entry.text !== text) throw new Error('CSS 规则缓存 hash 碰撞。');
    if (!entry) {
      const named = store.names.get(rule.name);
      if (named && named.text !== rule.cssText) throw new Error(`CSS 名称碰撞：${rule.name}`);
      const existing = target.querySelector<HTMLStyleElement>(`style[data-zv-rule="${key}"]`);
      if (existing && existing.textContent !== text)
        throw new Error('SSR 样式内容与客户端不一致。');
      const node = existing ?? target.ownerDocument.createElement('style');
      if (!existing) {
        node.dataset.zvRule = key;
        if (this.options.nonce !== undefined) node.nonce = this.options.nonce;
        node.textContent = text;
        target.appendChild(node);
      }
      entry = { key, rule: { name: rule.name, cssText: rule.cssText }, text, references: 0, node };
      store.entries.set(key, entry);
      store.names.set(rule.name, { text: rule.cssText, entries: (named?.entries ?? 0) + 1 });
    }
    store.unused.delete(key);
    entry.references++;
    let released = false;
    const release = () => {
      if (released) return;
      released = true;
      this.owned.delete(release);
      if (--entry.references === 0) store.unused.set(key, entry);
      prune(store);
    };
    this.owned.add(release);
    return release;
  }

  snapshot(): CssRule[] {
    return [...this.collected.values()].map(({ rule }) => ({ ...rule }));
  }
  cssText(): string {
    return [...this.collected.values()].map(({ text }) => text).join('');
  }
  renderStyles(): string {
    const nonce =
      this.options.nonce === undefined ? '' : ` nonce="${escapeAttribute(this.options.nonce)}"`;
    return [...this.collected.values()]
      .map(({ text }) => `<style data-zv-rule="${hash(text)}"${nonce}>${text}</style>`)
      .join('');
  }
  stats() {
    const entries = [...(this.store?.entries.values() ?? [])];
    return {
      rules: entries.length,
      activeRules: entries.filter((entry) => entry.references > 0).length,
      unusedRules: this.store?.unused.size ?? 0,
      ownedReferences: this.owned.size,
      collectedRules: this.collected.size,
    };
  }
  dispose(): void {
    for (const release of [...this.owned]) release();
    this.collected.clear();
  }
}

/** 创建可通过 app.use 安装的 Vue 样式宿主。SSR 每个请求独立创建。 */
export function createCssHost(options?: CssHostOptions): CssHost {
  return new CssHost(options);
}
