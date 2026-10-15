import {
  cloneVNode,
  computed,
  createVNode,
  getCurrentInstance,
  inject,
  guardReactiveProps,
  isVNode,
  normalizeClass,
  normalizeStyle,
  onUnmounted,
  onUpdated,
  onActivated,
  onDeactivated,
  ssrContextKey,
} from 'vue';
import { PatchFlags } from '@vue/shared';
import type {
  ComponentInternalInstance,
  ComputedRef,
  ObjectDirective,
  VNode,
  VNodeChild,
} from 'vue';
import { cssHostKey } from './host.ts';
import { hostFor } from './context.ts';
import type { CssHost, CssRule } from './host.ts';
import { resolveClass } from './resolve.ts';
import type { ResolvedClass } from './resolve.ts';
import { isCssClass } from './style-value.ts';
import type { ClassValue } from './style-value.ts';
import { CLASS } from './style-value.ts';

/** 仅由编译器和自有组件消费，不进入作者 JSX 或第三方组件的 props。 */
export const CLASS_PROP = '__zerodepVueClass';
const COMPONENT = Symbol.for('@zerodep-vue/component');
const DIRECTIVE = Symbol.for('@zerodep-vue/core/directive/v1');

/** 隐式 class/style 与指令要参与更新；0 的完整 diff 和负值的 Vue 特殊标记保持原样。 */
function stylePatchFlag(type: VNode['type'], flag: number): number {
  if (flag <= 0) return flag;
  if (typeof type === 'string')
    return flag | PatchFlags.CLASS | PatchFlags.STYLE | PatchFlags.NEED_PATCH;
  return flag | PatchFlags.FULL_PROPS;
}
type Props = Record<string, unknown>;
interface Plan {
  source: Props;
  resolved: ResolvedClass;
  owner: ComponentInternalInstance | null;
  host?: CssHost;
}
interface Lease {
  host: CssHost;
  name: string;
  text: string;
  owner: ComponentInternalInstance;
  vnode: VNode;
  observerRoot?: Node;
  stopObserving?: () => void;
  /** 离场动画仍保留 DOM；固定观察原根，等真实移除后再释放规则。 */
  pendingRemoval: boolean;
  release(): void;
  present(): boolean;
}
const plans = new WeakMap<VNode, Plan>();
const leases = new WeakMap<VNode, Lease>();
const owners = new WeakMap<ComponentInternalInstance, Set<Lease>>();
const observers = new WeakMap<Node, { leases: Set<Lease>; observer: MutationObserver }>();
interface ClassMemo {
  inputs: readonly unknown[];
  source: { read: () => ClassValue };
  value: ComputedRef<ClassValue>;
}
const classMemos = new WeakMap<ComponentInternalInstance, Map<string, ClassMemo[]>>();
interface RenderFrame {
  pending: Map<VNode, Props>;
  reads: Map<object, unknown>;
  owner: ComponentInternalInstance | null;
  memo: { calls?: Map<string, number> };
}
let frame: RenderFrame | undefined;

/** @internal 自有 class 表达式按 Vue 依赖缓存；位置和词法输入共同隔离循环及实例。 */
export function memoClass(
  site: string,
  readInputs: () => readonly unknown[],
  read: () => ClassValue,
): ClassValue {
  const owner = frame?.owner;
  if (!owner || !frame) return read();
  let inputs: readonly unknown[];
  try {
    inputs = readInputs();
  } catch {
    // 编译器只采样词法绑定；短路分支可能引用尚未初始化的绑定（含循环导入）。
    // 此时放弃本次缓存，让原表达式决定是否读取它；原表达式自身的错误继续抛出。
    return read();
  }
  let sites = classMemos.get(owner);
  if (!sites) {
    sites = new Map();
    classMemos.set(owner, sites);
    onUnmounted(() => classMemos.delete(owner), owner);
  }
  const calls = (frame.memo.calls ??= new Map());
  const index = calls.get(site) ?? 0;
  calls.set(site, index + 1);
  let entries = sites.get(site);
  if (!entries) {
    entries = [];
    sites.set(site, entries);
  }
  let entry = entries[index];
  if (
    !entry ||
    inputs.length !== entry.inputs.length ||
    inputs.some((input, at) => !Object.is(input, entry!.inputs[at]))
  ) {
    const source = { read };
    entry = { inputs: [...inputs], source, value: computed(() => source.read()) };
    entries[index] = entry;
  } else entry.source.read = read;
  return entry.value.value;
}

export function isOwnComponent(type: unknown): boolean {
  return (
    !!type &&
    (typeof type === 'object' || typeof type === 'function') &&
    Reflect.get(type, COMPONENT) === true
  );
}
export function hasIncomingClass(instance: ComponentInternalInstance): boolean {
  return Object.prototype.hasOwnProperty.call(instance.vnode.props ?? {}, CLASS_PROP);
}

function containsRule(vnode: VNode, name: string, root?: Node): boolean {
  if (vnode.component) return containsRule(vnode.component.subTree, name, root);
  const element = vnode.el as Element | null;
  if (
    element?.nodeType === 1 &&
    (!root || root.contains(element)) &&
    (element.classList.contains(name) || element.querySelector('.' + name))
  )
    return true;
  return (
    Array.isArray(vnode.children) &&
    vnode.children.some((child) => isVNode(child) && containsRule(child, name, root))
  );
}

/** 旧组件可用 h() 替换带 CSS 的节点，Vue 不会调用已移除指令的卸载钩子。
 * 每个实际 DOM 根共用一个清理观察器，只回收已失去 class 的租约，不订阅业务数据。
 */
function observeLease(vnode: VNode) {
  const lease = leases.get(vnode);
  const root = (vnode.el as Node | null)?.getRootNode();
  if (!lease || !root || lease.observerRoot === root) return;
  const document = root.nodeType === 9 ? (root as Document) : root.ownerDocument;
  const Observer = document?.defaultView?.MutationObserver;
  if (!Observer) return;
  lease.stopObserving?.();
  let state = observers.get(root);
  if (!state) {
    const tracked = new Set<Lease>();
    const observer = new Observer((records) => {
      if (
        !records.some((record) =>
          record.type === 'attributes'
            ? record.oldValue?.includes('zv-')
            : record.removedNodes.length > 0,
        )
      )
        return;
      refreshLeases(tracked);
    });
    observer.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class'],
      attributeOldValue: true,
    });
    state = { leases: tracked, observer };
    observers.set(root, state);
  }
  const current = state;
  current.leases.add(lease);
  lease.observerRoot = root;
  lease.stopObserving = () => {
    current.leases.delete(lease);
    if (!current.leases.size) {
      current.observer.disconnect();
      observers.delete(root);
    }
    delete lease.observerRoot;
    delete lease.stopObserving;
  };
}

/** DOM 观察和组件生命周期共用一套回收规则，避免两个入口对租约存活作出不同判断。 */
function refreshLeases(tracked: ReadonlySet<Lease>) {
  // 释放和观察根迁移都会修改集合；本轮只处理进入时的租约快照。
  for (const lease of [...tracked]) {
    if (!lease.present()) {
      lease.release();
      continue;
    }
    if (!lease.pendingRemoval) observeLease(lease.vnode);
  }
}

function ownerLeases(owner: ComponentInternalInstance): Set<Lease> {
  let owned = owners.get(owner);
  if (!owned) {
    owned = new Set();
    owners.set(owner, owned);
    const cleanup = () => refreshLeases(owned!);
    onUpdated(cleanup, owner);
    onActivated(cleanup, owner);
    onDeactivated(cleanup, owner);
    onUnmounted(() => {
      for (const lease of [...owned!]) release(lease.vnode, true);
    }, owner);
  }
  return owned;
}

function release(vnode: VNode, leaving = false) {
  const lease = leases.get(vnode);
  // Vue 的 unmounted 早于 Transition 的实际 DOM 移除；保留最后一次规则，不保留订阅。
  if (leaving && lease?.observerRoot && containsRule(vnode, lease.name, lease.observerRoot)) {
    lease.pendingRemoval = true;
    return;
  }
  lease?.release();
}
function rulesOf(resolved: ResolvedClass): CssRule[] {
  return [...resolved.resources, { name: resolved.ruleName, cssText: resolved.cssText }];
}
function collect(plan: Plan) {
  if (!plan.owner) return;
  for (const rule of rulesOf(plan.resolved)) hostFor(plan.owner).collect(rule, plan.host);
}
function consume(plan: Plan, vnode: VNode, previous?: VNode | null) {
  if (!plan.resolved.cssText || !plan.owner) {
    if (previous) release(previous);
    return;
  }
  const host = plan.host ?? hostFor(plan.owner);
  const rules = rulesOf(plan.resolved);
  const text = JSON.stringify(rules);
  const old = previous && leases.get(previous);
  if (
    old &&
    old.host === host &&
    old.owner === plan.owner &&
    old.name === plan.resolved.ruleName &&
    old.text === text
  ) {
    leases.delete(previous!);
    old.vnode = vnode;
    leases.set(vnode, old);
    return;
  }
  // 先取得整组新租约，失败时回滚；共用规则不会因更新先释放而改变插入顺序。
  const releases: (() => void)[] = [];
  try {
    for (const rule of rules) releases.push(host.acquire(rule));
  } catch (error) {
    for (const done of releases) done();
    throw error;
  }
  if (previous) release(previous);
  const owned = ownerLeases(plan.owner);
  let released = false;
  const lease: Lease = {
    host,
    owner: plan.owner,
    name: plan.resolved.ruleName,
    text,
    vnode,
    pendingRemoval: false,
    release() {
      if (released) return;
      released = true;
      lease.stopObserving?.();
      if (leases.get(lease.vnode) === lease) leases.delete(lease.vnode);
      for (const done of releases) done();
      owned.delete(lease);
    },
    present() {
      return (
        !released &&
        containsRule(lease.vnode, lease.name, lease.pendingRemoval ? lease.observerRoot : undefined)
      );
    },
  };
  leases.set(vnode, lease);
  owned.add(lease);
}

const styleDirective: ObjectDirective<Element, Plan> & { [DIRECTIVE]: true } = {
  [DIRECTIVE]: true,
  beforeMount(_element, binding, vnode) {
    consume(binding.value, vnode);
  },
  mounted(_element, _binding, vnode) {
    observeLease(vnode);
  },
  beforeUpdate(_element, binding, vnode, previous) {
    consume(binding.value, vnode, previous);
  },
  updated(_element, _binding, vnode) {
    observeLease(vnode);
  },
  unmounted(_element, _binding, vnode) {
    release(vnode, true);
  },
  getSSRProps(binding) {
    collect(binding.value);
    return {};
  },
};

function planOf(vnode: VNode): Plan | undefined {
  return (
    plans.get(vnode) ??
    (vnode.dirs?.find((binding) => Reflect.get(binding.dir, DIRECTIVE))?.value as Plan | undefined)
  );
}

/** @internal 开发检查读取当前 VNode 的已求值计划，不重新解析 class 或执行绑定。 */
export function inspectCssVNode(vnode: VNode) {
  const plan = planOf(vnode);
  return plan?.resolved.hasCss
    ? { result: plan.resolved, owner: plan.owner, host: leases.get(vnode)?.host ?? plan.host }
    : undefined;
}

function snapshot(raw: Props | null | undefined): Props {
  const source = guardReactiveProps(raw ?? null);
  const result: Props = {};
  if (source) for (const key in source) result[key] = source[key];
  return result;
}

function materialize(source: Props): { props: Props; plan: Plan } {
  const resolved = resolveClass(source.class as ClassValue, frame?.reads);
  const owner = frame?.owner ?? getCurrentInstance();
  const host = owner ? inject<CssHost | undefined>(cssHostKey, undefined) : undefined;
  if (resolved.hasCss && !owner)
    throw new Error('CSS class 应在 Vue 组件的 render 中消费；样式声明本身可以放在模块中。');
  const props = { ...source };
  if ('class' in source || resolved.hasCss) props.class = resolved.className;
  if (resolved.hasCss) props.style = normalizeStyle([resolved.variables, source.style]);
  return { props, plan: { source, resolved, owner, ...(host ? { host } : {}) } };
}

function attach(vnode: VNode, plan: Plan): VNode {
  plans.set(vnode, plan);
  // Fragment 等结构节点保留 Vue 行为，作者需明确选择实际样式接收元素。
  if (typeof vnode.type === 'symbol') return vnode;
  if (typeof vnode.type === 'string') {
    vnode.dirs = [
      {
        dir: styleDirective,
        instance: plan.owner?.proxy ?? null,
        value: plan,
        oldValue: undefined,
        arg: undefined,
        modifiers: {},
      },
      ...(vnode.dirs ?? []).filter((binding) => !Reflect.get(binding.dir, DIRECTIVE)),
    ];
  } else {
    const props = vnode.props ?? (vnode.props = {});
    const chain = (
      name:
        | 'onVnodeBeforeMount'
        | 'onVnodeMounted'
        | 'onVnodeBeforeUpdate'
        | 'onVnodeUpdated'
        | 'onVnodeUnmounted',
      hook: (...args: any[]) => void,
    ) => {
      const original = props[name];
      (props as Props)[name] = original
        ? [hook, ...(Array.isArray(original) ? original : [original])]
        : hook;
    };
    chain('onVnodeBeforeMount', (node: VNode) => consume(plan, node));
    chain('onVnodeMounted', (node: VNode) => observeLease(node));
    chain('onVnodeBeforeUpdate', (node: VNode, old: VNode) => consume(plan, node, old));
    chain('onVnodeUpdated', (node: VNode) => observeLease(node));
    chain('onVnodeUnmounted', (node: VNode) => release(node, true));
    // SSR 组件不会运行客户端 VNode hook，收集属于当前请求的规则即可。
    if (plan.owner?.appContext.provides[ssrContextKey as symbol] && plan.resolved.cssText)
      collect(plan);
  }
  return vnode;
}

/** @internal 在 Vue 归一化 class 之前保存自有值；普通组件接收常规 class/style。 */
export function createCssVNode(...args: Parameters<typeof createVNode>): VNode {
  const [type, raw, children, flag = 0, dynamic, block] = args;
  const source = snapshot(raw);
  if ('class' in source) source.class = structuredClass(source.class);
  if (isOwnComponent(type)) {
    if ('class' in source) {
      source[CLASS_PROP] = source.class;
      source.class = '';
    }
    return createVNode(
      type,
      source,
      children,
      flag >= 0 ? flag | PatchFlags.FULL_PROPS : flag,
      dynamic,
      block,
    );
  }
  if (typeof type === 'symbol') return createVNode(...args);
  if (frame) {
    const props = { ...source };
    if ('class' in props) props.class = nativeClass(props.class as ClassValue);
    const vnode = createVNode(type, props, children, flag, dynamic, block);
    frame.pending.set(vnode, source);
    return vnode;
  }
  const { props, plan } = materialize(source);
  const patched = stylePatchFlag(type, flag);
  const vnode = createVNode(type, props, children, patched, dynamic, block);
  return attach(vnode, plan);
}

/** @internal 自有组件的自动 class 透传仍在同一次描述组合中完成。 */
export function inheritClass(value: VNodeChild, incoming: ClassValue): VNodeChild {
  if (!isVNode(value) || typeof value.type === 'symbol') return value;
  const pending = frame?.pending.get(value);
  if (pending) {
    pending.class = [pending.class, incoming];
    return value;
  }
  const original = planOf(value);
  const source = snapshot(original?.source ?? value.props);
  const ownComponent = isOwnComponent(value.type);
  const local = ownComponent && CLASS_PROP in source ? source[CLASS_PROP] : source.class;
  source.class = [local, incoming];
  const copy = cloneVNode(value);
  if (ownComponent) {
    copy.props = { ...source, class: '', [CLASS_PROP]: source.class };
    copy.patchFlag = PatchFlags.FULL_PROPS;
    return copy;
  }
  if (frame) {
    frame.pending.set(copy, source);
    return copy;
  }
  const { props, plan } = materialize(source);
  copy.props = props;
  copy.patchFlag = stylePatchFlag(copy.type, copy.patchFlag);
  return attach(copy, plan);
}

function nativeClass(value: ClassValue): string {
  if (isCssClass(value))
    return normalizeClass(value[CLASS].filter((part) => typeof part === 'string'));
  if (Array.isArray(value)) return normalizeClass(value.map(nativeClass));
  return normalizeClass(value);
}

/** @internal JSX 节点正常创建；class 构造的依赖缓存与最终 CSS 消费共享本次渲染边界。 */
export function renderCss(render: () => VNodeChild): VNodeChild {
  const previous = frame;
  const owner = getCurrentInstance();
  const current: RenderFrame = {
    pending: new Map(),
    reads: new Map(),
    owner,
    memo: previous?.owner === owner ? previous.memo : {},
  };
  frame = current;
  try {
    const value = render();
    for (const [vnode, source] of current.pending) {
      const { props, plan } = materialize(source);
      vnode.props = props;
      vnode.patchFlag = stylePatchFlag(vnode.type, vnode.patchFlag);
      attach(vnode, plan);
    }
    return value;
  } finally {
    if (owner && previous?.owner !== owner) {
      for (const [site, entries] of classMemos.get(owner) ?? []) {
        const used = current.memo.calls?.get(site) ?? 0;
        if (used) entries.length = used;
        else classMemos.get(owner)!.delete(site);
      }
    }
    frame = previous;
  }
}

/** @internal 保留 class 描述的 Vue cloneVNode 接口，仍由 Vue 处理 key/ref 和节点身份。 */
export function cloneCssVNode(...args: Parameters<typeof cloneVNode>): VNode {
  const [input, extra, mergeRef, cloneTransition] = args;
  // 本入口面向 Vue VDOM；内部 DOM/组件生命周期记录使用其标准 VNode 类型。
  const original = input as VNode;
  const additions = snapshot(extra);
  const pending = frame?.pending.get(original);
  const plan = planOf(original);
  const source = snapshot(pending ?? plan?.source ?? original.props);
  if (isOwnComponent(original.type) && CLASS_PROP in source) source.class = source[CLASS_PROP];
  const merged = mergeCssProps(source, additions);
  const copy = cloneVNode(
    original,
    { ...additions, class: undefined, style: undefined },
    mergeRef,
    cloneTransition,
  );
  if (isOwnComponent(copy.type)) {
    copy.props = { ...merged, class: '', [CLASS_PROP]: merged.class };
    copy.patchFlag = PatchFlags.FULL_PROPS;
  } else if (frame) {
    frame.pending.set(copy, merged);
  } else {
    const { props, plan } = materialize(merged);
    copy.props = props;
    copy.patchFlag = stylePatchFlag(copy.type, copy.patchFlag);
    attach(copy, plan);
  }
  return copy;
}

function structuredClass(value: unknown): ClassValue {
  if (isCssClass(value)) return value;
  if (Array.isArray(value)) return value.map(structuredClass);
  return normalizeClass(value);
}

/** @internal 延续 Vue mergeProps 的样式及事件规则，只延后 class 的最终归一化。 */
export function mergeCssProps(...sources: (Props | null | undefined)[]): Props {
  const result: Props = {};
  for (const source of sources) {
    if (!source) continue;
    for (const key in source) {
      const value = source[key];
      switch (key) {
        case 'class':
          // 保留有序描述，等最终消费时再解决属性覆盖及 bx 的读取。
          if (result.class !== value) result.class = [result.class, structuredClass(value)];
          break;
        case 'style':
          result.style = normalizeStyle([result.style, value]);
          break;
        case '':
          break;
        default: {
          if (!/^on[^a-z]/.test(key)) {
            result[key] = value;
            break;
          }
          // 监听器按来源顺序合并，单个监听器以引用去重，沿用 Vue mergeProps 的语义。
          const existing = result[key];
          if (
            value &&
            existing !== value &&
            !(Array.isArray(existing) && existing.includes(value))
          ) {
            result[key] = existing ? ([] as unknown[]).concat(existing, value) : value;
          }
        }
      }
    }
  }
  return result;
}
