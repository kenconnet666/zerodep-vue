import { normalizeClass, normalizeStyle } from 'vue';
import { isCssClass } from '../css/style-value.ts';
import type { ClassValue } from '../css/style-value.ts';

type Attrs = Record<string, unknown>;
const slotSources = new WeakMap<object, Map<string, readonly unknown[]>>();
const slotName = /^slot[A-Z]/;
const protectedSlot = new Set([
  'children',
  'innerHTML',
  'textContent',
  'ref',
  'ref_for',
  'ref_key',
  'key',
  'v-html',
  'v-text',
  'v-slots',
  'onVnodeBeforeMount',
  'onVnodeMounted',
  'onVnodeBeforeUpdate',
  'onVnodeUpdated',
  'onVnodeBeforeUnmount',
  'onVnodeUnmounted',
]);

/** @internal 迁移期保留已有结构化 class；对象 CSS 与普通 class 使用独立字段。 */
export function structuredClass(value: unknown): ClassValue {
  if (isCssClass(value)) return value;
  if (Array.isArray(value)) return value.map(structuredClass);
  return normalizeClass(value);
}

/** 按来源顺序组合属性：class/style、事件遵循 Vue，css 保留声明序列。 */
export function mergeAttrs(...sources: (Attrs | null | undefined)[]): Attrs {
  const result: Attrs = {};
  const slots = new Map<string, readonly unknown[]>();
  for (const source of sources) {
    if (!source) continue;
    for (const key in source) {
      const value = source[key];
      switch (key) {
        case 'class':
          if (result.class !== value) result.class = [result.class, structuredClass(value)];
          break;
        case 'style':
          result.style = normalizeStyle([result.style, value]);
          break;
        case 'css':
          if (result.css !== value) result.css = [result.css, value];
          break;
        case '':
          break;
        default: {
          if (!/^on[^a-z]/.test(key)) {
            result[key] = value;
            if (slotName.test(key)) {
              // 只保存已读取的来源，不提前枚举属性袋；普通 Vue 组件不会触发额外 getter。
              slots.set(key, [
                ...(slots.get(key) ?? []),
                ...(slotSources.get(source)?.get(key) ?? [value]),
              ]);
            }
            break;
          }
          const existing = result[key];
          if (value && existing !== value && !(Array.isArray(existing) && existing.includes(value)))
            result[key] = existing ? ([] as unknown[]).concat(existing, value) : value;
        }
      }
    }
  }
  if (slots.size) slotSources.set(result, slots);
  return result;
}

/** @internal 仅自有组件保留 slotX 协议；业务对象与第三方组件仍使用普通属性覆盖。 */
export function resolveSlotAttrs(raw: object | null | undefined, props: Attrs): void {
  const sources = raw && slotSources.get(raw);
  for (const key of Object.keys(props)) {
    if (!slotName.test(key)) continue;
    const bags: Attrs[] = [];
    for (const value of sources?.get(key) ?? [props[key]]) {
      if (value === undefined) continue;
      if (value === null) {
        bags.length = 0;
        continue;
      }
      if (
        typeof value !== 'object' ||
        Array.isArray(value) ||
        (Object.getPrototypeOf(value) !== Object.prototype && Object.getPrototypeOf(value) !== null)
      )
        throw new TypeError(`${key} 需要普通属性对象。`);
      bags.push(value as Attrs);
    }
    if (!bags.length) {
      props[key] = undefined;
      continue;
    }
    const merged = mergeAttrs(...bags);
    for (const name of protectedSlot) delete merged[name];
    props[key] = merged;
  }
}
