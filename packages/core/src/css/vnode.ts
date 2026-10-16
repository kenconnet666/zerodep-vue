import { PatchFlags } from '@vue/shared';
import type { ComponentInternalInstance, ObjectDirective, VNode, VNodeChild } from 'vue';
import {
  cloneVNode,
  createVNode,
  getCurrentInstance,
  guardReactiveProps,
  inject,
  isVNode,
  normalizeClass,
  normalizeStyle,
  onActivated,
  onDeactivated,
  onUnmounted,
  onUpdated,
  ssrContextKey,
} from 'vue';
import { mergeAttrs, preserveCssProp, resolveSlotAttrs } from '../tsx/attrs.ts';
import { ELEMENT } from '../tsx/element.ts';
import { hostFor } from './context.ts';
import type { CssHost, CssRule } from './host.ts';
import { cssHostKey } from './host.ts';
import { objectClass } from './object.ts';
import type { ResolvedClass } from './resolve.ts';
import { resolveClass } from './resolve.ts';
import { CLASS } from './style-value.ts';

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

/** 已完成的样式求值快照；保存来源供透传/克隆使用，不持有 DOM 规则租约。 */
interface RenderPlan {
  readonly source: Props;
  readonly resolved: ResolvedClass;
  readonly owner: ComponentInternalInstance | null;
  readonly host?: CssHost;
}
interface RenderFrame {
  /** 待求值的 props 来源；属性转发和克隆先完成合并，帧结束后统一求值。 */
  readonly pending: Map<VNode, Props>;
  /** 同一帧内的相同绑定/主题对象共享读取结果，嵌套帧使用独立缓存。 */
  readonly reads: Map<object, unknown>;
  readonly owner: ComponentInternalInstance | null;
}

// 渲染侧：入口登记待求值节点，attachPlan 发布快照。
const plansByVNode = new WeakMap<VNode, RenderPlan>();
// 只有 renderCss 压入/还原当前帧；求值函数显式接收所属帧，不自行读取这个全局入口。
let activeFrame: RenderFrame | undefined;

/** 客户端规则组的所有权记录；组件更新可以把同一租约转交给新的 VNode。 */
interface DomLease {
  readonly host: CssHost;
  readonly name: string;
  readonly text: string;
  readonly owner: ComponentInternalInstance;
  /** 仅 acquireLease 在规则组复用时转移节点身份。 */
  vnode: VNode;
  /** 观察根及解绑句柄由 observeLease 成对维护。 */
  observerRoot?: Node;
  stopObserving?: () => void;
  /** 离场动画仍保留 DOM；固定观察原根，等真实移除后再释放规则。 */
  pendingRemoval: boolean;
  release(): void;
  present(): boolean;
}
// DOM 侧：三个索引共享 DomLease。申请/释放维护节点与组件索引，观察器维护 DOM 根索引。
const leasesByVNode = new WeakMap<VNode, DomLease>();
// 空集合也保留到组件回收，表示生命周期已登记，避免重新取得租约时重复注册钩子。
const leasesByOwner = new WeakMap<ComponentInternalInstance, Set<DomLease>>();
const observersByRoot = new WeakMap<Node, { leases: Set<DomLease>; observer: MutationObserver }>();

export function isOwnComponent(type: unknown): boolean {
  return (
    !!type &&
    (typeof type === 'object' || typeof type === 'function') &&
    Reflect.get(type, COMPONENT) === true
  );
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
  const lease = leasesByVNode.get(vnode);
  const root = (vnode.el as Node | null)?.getRootNode();
  if (!lease || !root || lease.observerRoot === root) return;
  const document = root.nodeType === 9 ? (root as Document) : root.ownerDocument;
  const Observer = document?.defaultView?.MutationObserver;
  if (!Observer) return;
  lease.stopObserving?.();
  let state = observersByRoot.get(root);
  if (!state) {
    const tracked = new Set<DomLease>();
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
    observersByRoot.set(root, state);
  }
  const current = state;
  current.leases.add(lease);
  lease.observerRoot = root;
  lease.stopObserving = () => {
    current.leases.delete(lease);
    if (!current.leases.size) {
      current.observer.disconnect();
      observersByRoot.delete(root);
    }
    delete lease.observerRoot;
    delete lease.stopObserving;
  };
}

/** DOM 观察和组件生命周期共用一套回收规则，避免两个入口对租约存活作出不同判断。 */
function refreshLeases(tracked: ReadonlySet<DomLease>) {
  // 释放和观察根迁移都会修改集合；本轮只处理进入时的租约快照。
  for (const lease of [...tracked]) {
    if (!lease.present()) {
      lease.release();
      continue;
    }
    if (!lease.pendingRemoval) observeLease(lease.vnode);
  }
}

function releaseLease(vnode: VNode, leaving = false) {
  const lease = leasesByVNode.get(vnode);
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
/** SSR 将已求值规则交给请求宿主；不创建客户端租约或 DOM 观察器。 */
function collectSsrRules(plan: RenderPlan) {
  if (!plan.owner) return;
  for (const rule of rulesOf(plan.resolved)) hostFor(plan.owner).collect(rule, plan.host);
}
/** 客户端挂载/更新只消费求值快照；不重读作者来源或当前渲染帧。 */
function acquireLease(plan: RenderPlan, vnode: VNode, previous?: VNode | null) {
  if (!plan.resolved.cssText || !plan.owner) {
    if (previous) releaseLease(previous);
    return;
  }
  const host = plan.host ?? hostFor(plan.owner);
  const rules = rulesOf(plan.resolved);
  const text = JSON.stringify(rules);
  const old = previous && leasesByVNode.get(previous);
  if (
    old &&
    old.host === host &&
    old.owner === plan.owner &&
    old.name === plan.resolved.ruleName &&
    old.text === text
  ) {
    // 规则组未变时只转交 VNode 索引，保留宿主引用计数和已有观察器。
    leasesByVNode.delete(previous!);
    old.vnode = vnode;
    leasesByVNode.set(vnode, old);
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
  if (previous) releaseLease(previous);
  const owned = leasesByOwner.get(plan.owner) ?? new Set<DomLease>();
  if (!leasesByOwner.has(plan.owner)) {
    // 组件第一次取得租约时登记生命周期；后续租约只加入同一集合。
    leasesByOwner.set(plan.owner, owned);
    const cleanup = () => refreshLeases(owned);
    onUpdated(cleanup, plan.owner);
    onActivated(cleanup, plan.owner);
    onDeactivated(cleanup, plan.owner);
    onUnmounted(() => {
      for (const lease of [...owned]) releaseLease(lease.vnode, true);
    }, plan.owner);
  }
  let released = false;
  const lease: DomLease = {
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
      if (leasesByVNode.get(lease.vnode) === lease) leasesByVNode.delete(lease.vnode);
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
  leasesByVNode.set(vnode, lease);
  owned.add(lease);
}

const styleDirective: ObjectDirective<Element, RenderPlan> & { [DIRECTIVE]: true } = {
  [DIRECTIVE]: true,
  beforeMount(_element, binding, vnode) {
    acquireLease(binding.value, vnode);
  },
  mounted(_element, _binding, vnode) {
    observeLease(vnode);
  },
  beforeUpdate(_element, binding, vnode, previous) {
    acquireLease(binding.value, vnode, previous);
  },
  updated(_element, _binding, vnode) {
    observeLease(vnode);
  },
  unmounted(_element, _binding, vnode) {
    releaseLease(vnode, true);
  },
  getSSRProps(binding) {
    collectSsrRules(binding.value);
    return {};
  },
};

function planOf(vnode: VNode): RenderPlan | undefined {
  return (
    plansByVNode.get(vnode) ??
    (vnode.dirs?.find((binding) => Reflect.get(binding.dir, DIRECTIVE))?.value as
      RenderPlan | undefined)
  );
}

/** @internal 开发检查读取当前 VNode 的已求值计划，不重新解析 class 或执行绑定。 */
export function inspectCssVNode(vnode: VNode) {
  const plan = planOf(vnode);
  return plan?.resolved.hasCss
    ? {
        result: plan.resolved,
        owner: plan.owner,
        host: leasesByVNode.get(vnode)?.host ?? plan.host,
      }
    : undefined;
}

function snapshot(raw: Props | null | undefined): Props {
  const source = guardReactiveProps(raw ?? null);
  const result: Props = {};
  if (source) for (const key in source) result[key] = source[key];
  return result;
}

/** 渲染阶段读取绑定并生成原生 props；只使用传入帧的读取缓存，不操作 DOM 租约。 */
function evaluatePlan(
  source: Props,
  renderFrame?: RenderFrame,
): { props: Props; plan: RenderPlan } {
  const objectStyle = 'css' in source ? objectClass(source.css) : undefined;
  const hasObjectStyle = objectStyle?.[CLASS].some(
    (part) => typeof part !== 'string' && part.declarations.length > 0,
  );
  const resolved = resolveClass(
    hasObjectStyle ? [normalizeClass(source.class), objectStyle!] : normalizeClass(source.class),
    renderFrame?.reads,
  );
  const owner = renderFrame?.owner ?? getCurrentInstance();
  const host = owner ? inject<CssHost | undefined>(cssHostKey, undefined) : undefined;
  if (resolved.hasCss && !owner)
    throw new Error('CSS 应在 Vue 组件的 render 中消费；样式声明本身可以放在模块中。');
  const props = { ...source };
  delete props.css;
  if ('class' in source || resolved.hasCss) props.class = resolved.className;
  const inline = normalizeStyle([source.style]);
  // 主动消费 CSS 时保护变量；普通 Vue 边界收到的 class/style 已包含合法生成变量。
  if (
    resolved.hasCss &&
    inline &&
    typeof inline === 'object' &&
    Object.keys(inline).some((name) => name.startsWith('--zv-'))
  )
    throw new TypeError('--zv-* 由 CSS 运行时管理，请使用自己的变量前缀。');
  if (resolved.hasCss) props.style = normalizeStyle([inline, resolved.variables]);
  return { props, plan: { source, resolved, owner, ...(host ? { host } : {}) } };
}

/** 求值与挂载的接线点：发布快照并安装回调，实际 DOM 租约由 Vue 生命周期取得。 */
function attachPlan(vnode: VNode, plan: RenderPlan): VNode {
  plansByVNode.set(vnode, plan);
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
    chain('onVnodeBeforeMount', (node: VNode) => acquireLease(plan, node));
    chain('onVnodeMounted', (node: VNode) => observeLease(node));
    chain('onVnodeBeforeUpdate', (node: VNode, old: VNode) => acquireLease(plan, node, old));
    chain('onVnodeUpdated', (node: VNode) => observeLease(node));
    chain('onVnodeUnmounted', (node: VNode) => releaseLease(node, true));
    // SSR 组件不会运行客户端 VNode hook，收集属于当前请求的规则即可。
    if (plan.owner?.appContext.provides[ssrContextKey as symbol] && plan.resolved.cssText)
      collectSsrRules(plan);
  }
  return vnode;
}

/** 已创建或克隆的节点共用收尾顺序：求值、更新 props/标记、安装生命周期。 */
function finalizeVNode(vnode: VNode, source: Props, renderFrame?: RenderFrame): VNode {
  const { props, plan } = evaluatePlan(source, renderFrame);
  vnode.props = props;
  vnode.patchFlag = stylePatchFlag(vnode.type, vnode.patchFlag);
  return attachPlan(vnode, plan);
}

/** @internal 在 Vue 归一化 class 之前保存自有值；普通组件接收常规 class/style。 */
export function createCssVNode(...args: Parameters<typeof createVNode>): VNode {
  let [type, raw, children, flag = 0, dynamic, block] = args;
  // 动态标签或 JSX 别名仍能识别基础元素，既不多包 DOM，也不多建组件实例。
  if (typeof type === 'function' && ELEMENT in type) {
    const tag = Reflect.get(type, ELEMENT);
    if (typeof tag !== 'string') throw new TypeError('基础元素缺少原生标签。');
    type = tag;
    if (
      children &&
      !Array.isArray(children) &&
      typeof children === 'object' &&
      'default' in children
    ) {
      const slot = children.default;
      if (typeof slot === 'function') children = slot();
    }
  }
  const source = snapshot(raw);
  if (isOwnComponent(type)) {
    resolveSlotAttrs(raw, source);
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
  // 第三方 css 可能是业务 Props；只传递原生 class/style，不解释其私有属性协议。
  if (typeof type !== 'string') {
    preserveCssProp(raw, source);
    return createVNode(type, source, children, flag, dynamic, block);
  }
  if (Object.prototype.hasOwnProperty.call(source, 'children')) {
    if (children != null)
      throw new TypeError('原生元素不能同时接收 children Prop 和嵌套 children。');
    children = source.children as VNodeChild;
    delete source.children;
  }
  if (activeFrame) {
    const props = { ...source };
    const vnode = createVNode(type, props, children, flag, dynamic, block);
    activeFrame.pending.set(vnode, source);
    return vnode;
  }
  // 帧外创建必须先完成 props 求值，再交给 Vue 构造；不能套用已有节点的收尾顺序。
  const { props, plan } = evaluatePlan(source);
  const patched = stylePatchFlag(type, flag);
  const vnode = createVNode(type, props, children, patched, dynamic, block);
  return attachPlan(vnode, plan);
}

/** @internal 每次渲染拥有独立的 CSS 求值边界；Vue 管理响应性和组件生命周期。 */
export function renderCss(render: () => VNodeChild): VNodeChild {
  const previous = activeFrame;
  const owner = getCurrentInstance();
  const current: RenderFrame = {
    pending: new Map(),
    reads: new Map(),
    owner,
  };
  activeFrame = current;
  try {
    const value = render();
    for (const [vnode, source] of current.pending) {
      finalizeVNode(vnode, source, current);
    }
    return value;
  } finally {
    activeFrame = previous;
  }
}

/** @internal 保留 class 描述的 Vue cloneVNode 接口，仍由 Vue 处理 key/ref 和节点身份。 */
export function cloneCssVNode(...args: Parameters<typeof cloneVNode>): VNode {
  const [input, extra, mergeRef, cloneTransition] = args;
  // 本入口面向 Vue VDOM；内部 DOM/组件生命周期记录使用其标准 VNode 类型。
  const original = input as VNode;
  const additions = snapshot(extra);
  if (typeof original.type !== 'string' && !isOwnComponent(original.type)) {
    preserveCssProp(extra, additions);
    return cloneVNode(original, additions, mergeRef, cloneTransition);
  }
  const pending = activeFrame?.pending.get(original);
  const plan = planOf(original);
  const source = snapshot(pending ?? plan?.source ?? original.props);
  const merged = mergeAttrs(source, additions);
  const copy = cloneVNode(
    original,
    { ...additions, class: undefined, style: undefined },
    mergeRef,
    cloneTransition,
  );
  if (isOwnComponent(copy.type)) {
    resolveSlotAttrs(merged, merged);
    copy.props = merged;
    copy.patchFlag = PatchFlags.FULL_PROPS;
    return copy;
  }
  if (activeFrame) {
    activeFrame.pending.set(copy, merged);
    return copy;
  }
  return finalizeVNode(copy, merged);
}
