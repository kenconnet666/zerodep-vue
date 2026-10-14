import {
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  inject,
  onScopeDispose,
  ssrContextKey,
  unref,
  watchSyncEffect,
} from 'vue';
import type { Ref } from 'vue';
import selectorParser from 'postcss-selector-parser';
import { declarations } from './composition.ts';
import { CLASS } from './style-value.ts';
import type { CssNestedInput, Declaration } from './style-value.ts';
import { resolveClass } from './resolve.ts';
import { cssHostKey } from './host.ts';
import type { CssHost, GlobalLease } from './host.ts';
import { hostFor } from './context.ts';
import { validateFragment } from './syntax.ts';
import { inspectionHooks } from './inspection-hooks.ts';

/** 显式全局选择器映射；每个选择器内部沿用普通属性、状态分组和媒体条件。 */
export type GlobalRules = Readonly<Record<string, CssNestedInput>>;
export interface GlobalOptions {
  /** 组件 setup 以外必须明确提供宿主，保证更新和清理有所有者。 */
  host?: CssHost;
}

function renderGlobal(rules: GlobalRules) {
  const entries: Declaration[] = [];
  for (const [selector, style] of Object.entries(rules)) {
    validateFragment(selector);
    if (selector.trimStart().startsWith('@'))
      throw new Error('全局规则根键需要选择器；媒体条件放在选择器内部。');
    const parsed = selectorParser().astSync(selector);
    parsed.walkNesting(() => {
      throw new Error('全局选择器没有父作用域，不能在根选择器中使用 &。');
    });
    if (!parsed.nodes.length || parsed.nodes.some((node) => !node.nodes.length))
      throw new Error('全局选择器不能为空。');
    for (const node of parsed.nodes) {
      const target = node.toString();
      entries.push(...declarations(style, { selector: target, target, conditions: [] }));
    }
  }
  // 全局规则没有元素可持有内联变量；在自己的 Vue effect 中输出当前字面值。
  const resolved = resolveClass({ [CLASS]: [{ declarations: entries }] }, new Map(), {
    literal: true,
  });
  return resolved;
}

/**
 * 登记有名称和所有者的全局规则。bx/主题更新原节点；作用域或宿主释放时停止读取。
 * 返回值可提前撤销，重复调用安全。动态命名规则应由应用/区域入口注册一次。
 */
export function globalCss(
  name: string,
  source: GlobalRules | Ref<GlobalRules>,
  options: GlobalOptions = {},
): () => void {
  const instance = getCurrentInstance();
  const scope = getCurrentScope();
  if (instance && !scope)
    throw new Error('globalCss 应在 setup 或 effectScope 中注册，不能在 render 中重复注册。');
  if (!instance && !options.host) throw new Error('组件 setup 以外的 globalCss 需要显式 host。');
  const origin =
    options.host ?? (instance ? inject<CssHost | undefined>(cssHostKey, undefined) : undefined);
  const ssr = !!instance?.appContext.provides[ssrContextKey as symbol];
  const host = instance ? (ssr ? hostFor(instance) : (origin ?? hostFor(instance))) : options.host!;
  let lease: GlobalLease | undefined;
  // 首次 effect 求值也可能失败；独立作用域保证尚未返回 stop handle 时仍能清理订阅。
  const effect = effectScope(true);
  let unregister: (() => void) | undefined;
  let stopped = false;
  const inspection = inspectionHooks() ? {} : undefined;
  const stop = () => {
    if (stopped) return;
    stopped = true;
    effect.stop();
    lease?.release();
    unregister?.();
    if (inspection) inspectionHooks()?.removeGlobal(inspection);
  };
  try {
    effect.run(() =>
      watchSyncEffect(() => {
        const rules = unref(source);
        const result = renderGlobal(rules);
        const text = result.resources.map((rule) => rule.cssText).join('') + result.cssText;
        if (lease) lease.update(text);
        else lease = host.acquireGlobal(name, text, origin);
        if (inspection) inspectionHooks()?.global(inspection, host, name, rules, result, instance);
      }),
    );
    unregister = host.onDispose(stop);
    if (scope) onScopeDispose(stop);
    return stop;
  } catch (error) {
    stop();
    throw error;
  }
}
