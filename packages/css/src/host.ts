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
  globals: Map<string, GlobalEntry>;
}

interface GlobalEntry {
  identity: string;
  rule: CssRule;
  text: string;
  references: number;
  node?: HTMLStyleElement;
  nonce?: string;
}
/** 可更新的命名全局规则；更新保留原 style 节点及层叠位置。 */
export interface GlobalLease {
  update(cssText: string): void;
  release(): void;
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
        globals: new Map(),
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

/** 宿主拥有样式租约与显式全局副作用的停止句柄，不保留已释放的消费者。 */
export class CssHost {
  private readonly options: CssHostOptions;
  private readonly owned = new Set<() => void>();
  private readonly collected = new Map<string, { rule: CssRule; text: string; nonce?: string }>();
  private readonly collectedNames = new Map<string, string>();
  private readonly collectedGlobals = new Map<string, GlobalEntry>();
  private readonly disposers = new Set<() => void>();
  private readonly collectionOrder = new Map<string, 'rule' | 'global'>();
  private store: Registry | undefined;
  private readonly installed = new WeakSet<App>();
  private installations = 0;

  constructor(options: CssHostOptions = {}) {
    const limit = options.maxUnusedRules ?? 256;
    if (!Number.isInteger(limit) || limit < 0) throw new Error('maxUnusedRules 必须是非负整数。');
    if (options.layer && !/^[-_a-zA-Z][\w-]*(?:\.[-_a-zA-Z][\w-]*)*$/.test(options.layer))
      throw new Error('layer 需要一个固定的 CSS 层名称。');
    this.options = { ...options, maxUnusedRules: limit };
  }

  install(app: App): void {
    if (this.installed.has(app)) return;
    this.installed.add(app);
    this.installations++;
    app.provide(cssHostKey, this);
    app.onUnmount(() => {
      if (--this.installations === 0) this.dispose();
    });
  }

  private text(rule: CssRule): string {
    const text = this.options.layer
      ? `@layer ${this.options.layer}{${rule.cssText}}`
      : rule.cssText;
    return safeText(text);
  }

  /** SSR 在实际消费时收集；为每个请求创建宿主，不接触浏览器 DOM。 */
  collect(rule: CssRule, origin: CssHost = this): void {
    if (!rule.cssText) return;
    const previous = this.collectedNames.get(rule.name);
    if (previous && previous !== rule.cssText) throw new Error(`CSS 名称碰撞：${rule.name}`);
    const text = origin.text(rule);
    this.collectedNames.set(rule.name, rule.cssText);
    const key = hash(text);
    this.collectionOrder.set(key, 'rule');
    this.collected.set(key, {
      rule: { name: rule.name, cssText: rule.cssText },
      text,
      ...(origin.options.nonce === undefined ? {} : { nonce: origin.options.nonce }),
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
    // 复用的 ShadowRoot 等容器可能已重建内容；缓存命中仍须保证样式节点存在。
    if (!target.contains(entry.node)) target.appendChild(entry.node);
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

  /** 注册显式全局副作用的清理；返回值只撤销注册，便于作用域提前释放。 */
  onDispose(stop: () => void): () => void {
    this.disposers.add(stop);
    return () => this.disposers.delete(stop);
  }

  /**
   * 命名规则保持固定插入位置。相同静态定义可共享；多个所有者不能争写不同内容。
   * origin 仅用于 SSR 将局部宿主的 layer/nonce 写入本次请求收集器。
   */
  acquireGlobal(name: string, cssText: string, origin: CssHost = this): GlobalLease {
    if (!name.trim()) throw new Error('全局规则需要稳定的非空名称。');
    const target =
      this.options.target === undefined ? globalThis.document?.head : this.options.target;
    const store = target
      ? (this.store = registry(target, this.options.maxUnusedRules!))
      : undefined;
    const entries = store?.globals ?? this.collectedGlobals;
    const identity = JSON.stringify([name, origin.options.layer ?? '']);
    const key = hash(identity);
    const text = origin.text({ name, cssText });
    let entry = entries.get(key);
    if (entry && (entry.identity !== identity || entry.text !== text))
      throw new Error(`全局规则名称冲突：${name}`);
    if (!entry) {
      const existing = target?.querySelector<HTMLStyleElement>(`style[data-zv-global="${key}"]`);
      if (existing && existing.textContent !== text)
        throw new Error(`SSR 全局规则与客户端不一致：${name}`);
      const node = existing ?? target?.ownerDocument.createElement('style');
      if (node && !existing) {
        node.dataset.zvGlobal = key;
        if (origin.options.nonce !== undefined) node.nonce = origin.options.nonce;
        node.textContent = text;
        target!.appendChild(node);
      }
      entry = {
        identity,
        rule: { name, cssText },
        text,
        references: 0,
        ...(node ? { node } : {}),
        ...(origin.options.nonce !== undefined ? { nonce: origin.options.nonce } : {}),
      };
      entries.set(key, entry);
      if (!store) this.collectionOrder.set(`global:${key}`, 'global');
    }
    if (target && entry.node && !target.contains(entry.node)) target.appendChild(entry.node);
    entry.references++;
    let released = false;
    const release = () => {
      if (released) return;
      released = true;
      this.owned.delete(release);
      if (--entry.references === 0) {
        entries.delete(key);
        if (!store) this.collectionOrder.delete(`global:${key}`);
        if (entry.node && entry.node.parentNode === target) entry.node.remove();
      }
    };
    this.owned.add(release);
    return {
      update: (cssText) => {
        if (released) throw new Error(`全局规则已释放：${name}`);
        if (target && entry.node && !target.contains(entry.node)) target.appendChild(entry.node);
        const text = origin.text({ name, cssText });
        if (entry.text === text) return;
        if (entry.references > 1)
          throw new Error(`全局规则 ${name} 有多个所有者；动态规则应只注册一次。`);
        entry.rule = { name, cssText };
        entry.text = text;
        if (entry.node) entry.node.textContent = text;
      },
      release,
    };
  }

  private orderedCollection() {
    return [...this.collectionOrder].map(([key, kind]) => {
      const id = kind === 'global' ? key.slice(7) : key;
      const entry = kind === 'global' ? this.collectedGlobals.get(id)! : this.collected.get(id)!;
      return { ...entry, id, kind };
    });
  }
  snapshot(): CssRule[] {
    return this.orderedCollection().map(({ rule }) => ({ ...rule }));
  }
  cssText(): string {
    return this.orderedCollection()
      .map(({ text }) => text)
      .join('');
  }
  renderStyles(): string {
    return this.orderedCollection()
      .map(
        ({ text, nonce, id, kind }) =>
          `<style data-zv-${kind}="${id}"${nonce === undefined ? '' : ` nonce="${escapeAttribute(nonce)}"`}>${text}</style>`,
      )
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
      globalRules: this.store?.globals.size ?? this.collectedGlobals.size,
    };
  }
  dispose(): void {
    for (const stop of [...this.disposers]) stop();
    this.disposers.clear();
    for (const release of [...this.owned]) release();
    this.collected.clear();
    this.collectedNames.clear();
    this.collectedGlobals.clear();
    this.collectionOrder.clear();
  }
}

/** 创建可通过 app.use 安装的 Vue 样式宿主。SSR 每个请求独立创建。 */
export function createCssHost(options?: CssHostOptions): CssHost {
  return new CssHost(options);
}
