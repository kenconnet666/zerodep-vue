import { normalizeClass, normalizeStyle } from 'vue';

type Attrs = Record<string, unknown>;
const attributeSources = new WeakMap<object, Map<string, readonly unknown[]>>();
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

/** 按来源顺序组合属性：class/style、事件遵循 Vue，css 保留声明序列。 */
export function mergeAttrs(...sources: (Attrs | null | undefined)[]): Attrs {
  const result: Attrs = {};
  const recorded = new Map<string, readonly unknown[]>();
  for (const source of sources) {
    if (!source) continue;
    for (const key in source) {
      const value = source[key];
      if (key === 'css' || slotName.test(key))
        recorded.set(key, [
          ...(recorded.get(key) ?? []),
          ...(attributeSources.get(source)?.get(key) ?? [value]),
        ]);
      switch (key) {
        case 'class':
          if (result.class !== value) result.class = normalizeClass([result.class, value]);
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
            break;
          }
          const existing = result[key];
          if (value && existing !== value && !(Array.isArray(existing) && existing.includes(value)))
            result[key] = existing ? ([] as unknown[]).concat(existing, value) : value;
        }
      }
    }
  }
  if (recorded.size) attributeSources.set(result, recorded);
  return result;
}

/** @internal 仅自有组件保留 slotX 协议；业务对象与第三方组件仍使用普通属性覆盖。 */
export function resolveSlotAttrs(raw: object | null | undefined, props: Attrs): void {
  const sources = raw && attributeSources.get(raw);
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

/** @internal 第三方的 css 是普通 Prop；合并时记录的来源保证恢复末项且不重复读取 getter。 */
export function preserveCssProp(raw: object | null | undefined, props: Attrs): void {
  const values = raw && attributeSources.get(raw)?.get('css');
  if (values) props.css = values.at(-1);
}
