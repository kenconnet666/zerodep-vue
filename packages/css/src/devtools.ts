import {
  computed,
  getCurrentInstance,
  isVNode,
  nextTick,
  onMounted,
  onUnmounted,
  onUpdated,
  ssrContextKey,
  unref,
} from 'vue';
import type { App, ComponentInternalInstance, VNode } from 'vue';
import { setupDevToolsPlugin } from '@vue/devtools-api';
import { CLASS, isCssClass } from './types.ts';
import type { Declaration } from './types.ts';
import { ANIMATION, isAnimation } from './resource-tokens.ts';
import { FALLBACK, TEMPLATE, isBinding, isFallback, isTemplate } from './values.ts';
import { isThemeReference } from './tokens.ts';
import { setInspectionHooks } from './inspection.ts';
import type { ResolvedClass } from './resolve.ts';
import type { CssHost } from './host.ts';
import { cssHostKey } from './host.ts';
import { cloneCssVNode as clone, createCssVNode as create, inspectCssVNode } from './vnode.ts';

export interface SourceLocation {
  file: string;
  line: number;
  column: number;
  kind: string;
  name?: string;
}
interface BindingSnapshot {
  source?: SourceLocation;
  consumed: boolean;
  value?: string | number | boolean | null;
}
interface DeclarationSnapshot {
  property: string;
  selector: string;
  conditions: readonly string[];
  status: '生效' | '当前省略' | '被覆盖' | '清除标记';
  values: readonly string[];
  bindings: BindingSnapshot[];
}
export interface CssSnapshot {
  className: string;
  ruleName: string;
  cssText: string;
  variables: Record<string, string>;
  resources: { name: string; cssText: string }[];
  sources: { source?: SourceLocation; declarations: DeclarationSnapshot[] }[];
  frames: CssSnapshot[];
}
const locations = new WeakMap<object, SourceLocation>();
const snapshots = new WeakMap<ResolvedClass, CssSnapshot>();
const globals = new Map<
  object,
  {
    id: string;
    name: string;
    host: WeakRef<CssHost>;
    owner?: WeakRef<ComponentInternalInstance>;
    source?: SourceLocation;
    snapshot: CssSnapshot;
  }
>();
let globalId = 0;
const inspectorId = 'zerodep-vue-css';
type DevtoolsApi = Parameters<Parameters<typeof setupDevToolsPlugin>[1]>[0];
interface AppInspection {
  app: WeakRef<App>;
  active: boolean;
  queued: boolean;
  api?: DevtoolsApi;
}
const applications = new WeakMap<App, AppInspection>();
const observedComponents = new WeakSet<ComponentInternalInstance>();
const nodeIds = new WeakMap<object, number>();
let nodeId = 0;

function refresh(record: AppInspection) {
  if (!record.active || record.queued || !record.api) return;
  record.queued = true;
  void nextTick(() => {
    record.queued = false;
    if (record.active) {
      record.api?.sendInspectorTree(inspectorId);
      record.api?.sendInspectorState(inspectorId);
    }
  });
}
function bindingSnapshot(
  value: unknown,
  reads: ReadonlyMap<object, unknown>,
  active: boolean,
): BindingSnapshot[] {
  const parts = isTemplate(value) ? value[TEMPLATE] : isFallback(value) ? value[FALLBACK] : [value];
  return parts
    .filter((part) => isBinding(part) || isThemeReference(part))
    .map((part) => {
      const key = part as object;
      const current = active ? reads.get(key) : undefined;
      const source = locations.get(key);
      return {
        ...(source ? { source } : {}),
        consumed: active && reads.has(key),
        ...(current === null || ['string', 'number', 'boolean'].includes(typeof current)
          ? { value: current as string | number | boolean | null }
          : {}),
      };
    });
}
setInspectionHooks({
  resolved(result, parts, values, reads, frames) {
    const active = new Set<Declaration>(result.declarations);
    snapshots.set(result, {
      className: result.className,
      ruleName: result.ruleName,
      cssText: result.cssText,
      variables: { ...result.variables },
      resources: result.resources.map((rule) => ({ ...rule })),
      frames: frames.flatMap((frame) => {
        const snapshot = snapshots.get(frame);
        return snapshot ? [snapshot] : [];
      }),
      sources: parts
        .filter((part) => typeof part !== 'string')
        .map((part) => {
          const source = locations.get(part);
          return {
            ...(source ? { source } : {}),
            declarations: part.declarations.map((declaration) => ({
              property: declaration.property,
              selector: declaration.selector,
              conditions: [...declaration.conditions],
              status:
                declaration.value === null
                  ? '清除标记'
                  : !active.has(declaration)
                    ? '被覆盖'
                    : values.has(declaration)
                      ? '生效'
                      : '当前省略',
              values: values.get(declaration) ?? [],
              bindings: bindingSnapshot(declaration.value, reads, active.has(declaration)),
            })),
          };
        }),
    });
  },
  global(token, host, name, source, result, owner) {
    if (owner?.appContext.provides[ssrContextKey as symbol]) return;
    const snapshot = snapshots.get(result);
    if (!snapshot) return;
    const location = locations.get(source);
    globals.set(token, {
      id: globals.get(token)?.id ?? `global:${globalId++}`,
      name,
      host: new WeakRef(host),
      ...(owner ? { owner: new WeakRef(owner) } : {}),
      ...(location ? { source: location } : {}),
      snapshot,
    });
    const app = owner?.appContext.app;
    if (app) {
      const record = applications.get(app);
      if (record) refresh(record);
    }
  },
  removeGlobal(token) {
    globals.delete(token);
  },
});

/** @internal 元数据包装不更改值，只标记已经创建的描述；绑定 getter 不在这里执行。 */
export function traceCss<T>(value: T, source: SourceLocation): T {
  enableInspection();
  if (!value || typeof value !== 'object') return value;
  locations.set(value, source);
  if (isCssClass(value)) {
    for (const part of value[CLASS])
      if (typeof part !== 'string' && !locations.has(part)) locations.set(part, source);
  } else if (isAnimation(value)) {
    for (const frame of value[ANIMATION]) traceCss(frame.style, { ...source, name: frame.at });
  } else if (source.kind === 'create') {
    for (const [name, item] of Object.entries(value))
      traceCss(item, { ...source, name, kind: 'class' });
  }
  return value;
}
export function traceGlobal<T>(value: T, source: SourceLocation) {
  enableInspection();
  return computed(() => {
    const current = unref(value);
    if (current && typeof current === 'object') locations.set(current, source);
    return current;
  });
}

export interface InspectedNode {
  id: string;
  label: string;
  ownerUid?: number;
  source?: SourceLocation;
  snapshot: CssSnapshot;
}
/** 仅遍历当前 VNode 树及活动全局租约。重复检查不解析 CSS，也不读取用户绑定。 */
export function inspectApp(app: App): InspectedNode[] {
  const record = applications.get(app);
  if (record && !record.active) return [];
  const result: InspectedNode[] = [];
  const seen = new WeakSet<object>();
  const seenIds = new Set<string>();
  const hosts = new Set<CssHost>();
  const provided = app._context.provides[cssHostKey as symbol] as CssHost | undefined;
  if (provided) hosts.add(provided);
  const visit = (node: VNode) => {
    if (seen.has(node)) return;
    seen.add(node);
    const plan = inspectCssVNode(node);
    if (plan?.host) hosts.add(plan.host);
    const snapshot = plan && snapshots.get(plan.result);
    if (snapshot && !plan.owner?.isUnmounted) {
      const uid = plan.owner?.uid;
      const tag = typeof node.type === 'string' ? node.type : 'component';
      const identity = (node.el as object | null) ?? node;
      if (!nodeIds.has(identity)) nodeIds.set(identity, nodeId++);
      const id = `node:${uid ?? 'unknown'}:${nodeIds.get(identity)}`;
      if (!seenIds.has(id))
        result.push({
          id,
          label: `${tag} · ${snapshot.className || '已清除样式'}`,
          ...(uid === undefined ? {} : { ownerUid: uid }),
          snapshot,
        });
      seenIds.add(id);
    }
    if (node.component && !node.component.isUnmounted) visit(node.component.subTree);
    if (node.suspense?.activeBranch) visit(node.suspense.activeBranch);
    if (Array.isArray(node.children))
      for (const child of node.children) if (isVNode(child)) visit(child);
  };
  if (app._instance && !app._instance.isUnmounted) visit(app._instance.subTree);
  for (const entry of globals.values()) {
    const owner = entry.owner?.deref();
    const host = entry.host.deref();
    if ((owner && !owner.isUnmounted && owner.appContext.app === app) || (host && hosts.has(host)))
      result.push({
        id: entry.id,
        label: `global · ${entry.name}`,
        ...(owner ? { ownerUid: owner.uid } : {}),
        ...(entry.source ? { source: entry.source } : {}),
        snapshot: entry.snapshot,
      });
  }
  return result;
}

/** 在 Vue setup/render 的真实上下文中惰性注册一次，沿用 DevTools 组件树和 inspector。 */
export function enableInspection(): void {
  const owner = getCurrentInstance();
  if (!owner || owner.appContext.provides[ssrContextKey as symbol]) return;
  const app = owner.appContext.app;
  let record = applications.get(app);
  if (!record) {
    record = { app: new WeakRef(app), active: true, queued: false };
    applications.set(app, record);
    const entry = record;
    app.onUnmount(() => {
      entry.active = false;
      delete entry.api;
    });
    setupDevToolsPlugin(
      {
        id: inspectorId,
        label: 'zerodep-vue CSS',
        packageName: '@zerodep-vue/css',
        componentStateTypes: ['zerodep-vue CSS'],
        get app() {
          return entry.app.deref()!;
        },
      },
      (api) => {
        if (!entry.active) return;
        entry.api = api;
        api.addInspector({
          id: inspectorId,
          label: 'zerodep-vue CSS',
          icon: 'palette',
          treeFilterPlaceholder: '按元素、类名或来源筛选',
          actions: [
            { icon: 'refresh', tooltip: '读取当前已消费的样式', action: () => refresh(entry) },
          ],
        });
        api.on.getInspectorTree((payload) => {
          const app = entry.app.deref();
          if (!entry.active || !app || payload.app !== app || payload.inspectorId !== inspectorId)
            return;
          payload.rootNodes = inspectApp(app)
            .filter(
              (node) =>
                !payload.filter ||
                (
                  node.label +
                  JSON.stringify(
                    node.source ?? node.snapshot.sources.map((source) => source.source),
                  )
                ).includes(payload.filter),
            )
            .map((node) => ({ id: node.id, label: node.label }));
        });
        api.on.getInspectorState((payload) => {
          const app = entry.app.deref();
          if (!entry.active || !app || payload.app !== app || payload.inspectorId !== inspectorId)
            return;
          const node = inspectApp(app).find((node) => node.id === payload.nodeId);
          payload.state = node
            ? {
                当前消费: Object.entries({
                  ownerUid: node.ownerUid,
                  source: node.source,
                  ...node.snapshot,
                }).map(([key, value]) => ({ key, value, editable: false })),
              }
            : {};
        });
        api.on.inspectComponent((payload) => {
          const app = entry.app.deref();
          if (!entry.active || !app || payload.app !== app) return;
          const nodes = inspectApp(app).filter(
            (node) => node.ownerUid === payload.componentInstance.uid,
          );
          if (nodes.length)
            payload.instanceData.state.push({
              type: 'zerodep-vue CSS',
              key: '当前样式',
              value: nodes,
              editable: false,
            });
        });
      },
    );
  }
  if (!observedComponents.has(owner)) {
    observedComponents.add(owner);
    const update = () => refresh(record!);
    onMounted(update, owner);
    onUpdated(update, owner);
    onUnmounted(update, owner);
  }
}
export function createCssVNode(...args: Parameters<typeof create>) {
  enableInspection();
  return create(...args);
}
export function cloneCssVNode(...args: Parameters<typeof clone>) {
  enableInspection();
  return clone(...args);
}

/** @internal 测试和工具读取既有快照；不会触发一次新的 CSS 解析。 */
export function inspectionSnapshot(result: ResolvedClass): CssSnapshot | undefined {
  return snapshots.get(result);
}
