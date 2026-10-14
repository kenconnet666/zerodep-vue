import { isRef, unref, hasInjectionContext, getCurrentInstance, inject, provide } from 'vue';
import type { Ref, InjectionKey } from 'vue';
import { Css } from './generated/author.ts';
import type { SystemKeywords } from './generated/system.ts';
import {
  colorProperties,
  getSystemValues,
  hasSystemProperty,
  systemPropertyNames,
} from './generated/keywords.ts';
import { THEME, THEME_SOURCE, keyword } from './tokens.ts';
import type { ThemeReference } from './tokens.ts';
import type { CssContext, KeywordView, PropertyName, ThemeSource } from './types.ts';

const colors = new Set<string>(colorProperties);
const invalidSource = 'createCssContext 需要继承 SystemKeywords 的真实主题实例或 Vue Ref。';
type ReadGroup = (property: PropertyName) => object | undefined;

/** 创建有真实来源的主题上下文；T 来自实例，不依靠调用方的类型断言。 */
export function createCssContext<T extends SystemKeywords>(source: ThemeSource<T>): CssContext<T> {
  checkSource(source);
  const sources = new WeakMap<object, { keywords: KeywordView<T>; author?: Css<T> }>();
  const record = (value: T | Ref<T>) => {
    let entry = sources.get(value);
    if (!entry) {
      checkSource(value);
      entry = { keywords: keywordView(value) };
      sources.set(value, entry);
    }
    return entry;
  };
  const authorFor = (value: T | Ref<T>) => {
    const entry = record(value);
    const keywords = entry.keywords;
    return (entry.author ??= new Css<T>((property, name) =>
      resolveTheme(keywords, property, name),
    ));
  };
  // inject 的默认工厂仅在无上级提供时调用，覆盖区域不会提前实例化默认作者。
  const fallback = () => authorFor(source);
  const key: InjectionKey<Css<T>> = Symbol('CSS theme');
  return Object.freeze({
    get keywords() {
      return record(source).keywords;
    },
    useCss(): Css<T> {
      return hasInjectionContext() ? inject(key, fallback, true) : fallback();
    },
    provideTheme(next: ThemeSource<T>): Css<T> {
      if (!getCurrentInstance()) throw new Error('provideTheme 必须在组件 setup 中调用。');
      const author = authorFor(next);
      provide(key, author);
      return author;
    },
  });
}

function checkSource(source: unknown): void {
  // 这里只检查容器；读取 Ref.value 留到真正使用主题时，避免唤醒未使用的 getter。
  if (
    !source ||
    typeof source !== 'object' ||
    (!isRef(source) && Reflect.get(source, THEME_SOURCE) !== true)
  )
    throw new Error(invalidSource);
}

function resolveTheme(view: object, property: string, name: string): ThemeReference {
  const own = Reflect.get(view, property);
  if (own && name in own) return Reflect.get(own, name);
  if (colors.has(property)) {
    const color = Reflect.get(view, 'color');
    if (name in color) return Reflect.get(color, name);
  }
  throw new Error(`当前主题的 ${property} 没有关键字 ${name}。`);
}

function inheritedKeys(object: object): string[] {
  const result = new Set<string>();
  for (
    let value: object | null = object;
    value && value !== Object.prototype;
    value = Object.getPrototypeOf(value)
  ) {
    for (const key of Object.getOwnPropertyNames(value)) result.add(key);
  }
  return [...result];
}

function keywordView<T extends SystemKeywords>(source: T | Ref<T>): KeywordView<T> {
  const groups = new Map<string, object>();
  const checked = new WeakSet<object>();
  const readGroup: ReadGroup = (property) => {
    const theme = isRef(source) ? source.value : source;
    if (!theme || typeof theme !== 'object' || Reflect.get(theme, THEME_SOURCE) !== true)
      throw new Error(invalidSource);
    const group: unknown = Reflect.get(theme, property);
    if (group === undefined) return undefined;
    if (!group || typeof group !== 'object') throw new Error(`主题属性组 ${property} 需要对象。`);
    if (checked.has(group)) return group;
    for (const name of inheritedKeys(group)) {
      if (name !== 'constructor' && !name.startsWith('_'))
        throw new Error(`主题关键字 ${property}.${name} 必须以 _ 开头，不能覆盖系统关键字。`);
    }
    checked.add(group);
    return group;
  };
  const exists = (key: PropertyKey) => typeof key === 'string' && hasSystemProperty(key);
  return new Proxy(
    {},
    {
      get(_target, name) {
        if (typeof name !== 'string' || !hasSystemProperty(name)) return undefined;
        let group = groups.get(name);
        if (!group) {
          group = propertyView(name as PropertyName, readGroup);
          groups.set(name, group);
        }
        return group;
      },
      ownKeys: systemPropertyNames,
      has: (_target, key) => exists(key),
      getOwnPropertyDescriptor(_target, key) {
        return exists(key) ? { configurable: true, enumerable: true } : undefined;
      },
    },
  ) as KeywordView<T>;
}

/** 一个属性组拥有自己的成员缓存；创建视图本身不读取主题组或系统字典。 */
function propertyView(property: PropertyName, readGroup: ReadGroup): object {
  const members = new Map<string, unknown>();
  const exists = (name: PropertyKey) => {
    if (typeof name !== 'string') return false;
    if (name.startsWith('_')) return name in (readGroup(property) ?? {});
    return Object.hasOwn(getSystemValues(property), name);
  };
  return new Proxy(
    {},
    {
      get(_target, name) {
        if (typeof name !== 'string') return undefined;
        if (members.has(name)) return members.get(name);
        let value: unknown;
        if (name.startsWith('_')) {
          value = themeReference(property, name, readGroup);
        } else {
          const systems = getSystemValues(property);
          if (!Object.hasOwn(systems, name)) return undefined;
          value = keyword(property, systems[name]!);
        }
        members.set(name, value);
        return value;
      },
      ownKeys() {
        const group = readGroup(property);
        const themeKeys = group ? inheritedKeys(group).filter((key) => key.startsWith('_')) : [];
        return [...new Set([...Object.keys(getSystemValues(property)), ...themeKeys])];
      },
      has: (_target, name) => exists(name),
      getOwnPropertyDescriptor(_target, name) {
        return exists(name) ? { configurable: true, enumerable: true } : undefined;
      },
    },
  );
}

function themeReference(
  property: PropertyName,
  name: string,
  readGroup: ReadGroup,
): ThemeReference {
  return Object.freeze({
    [THEME]: Object.freeze({
      property,
      name,
      read() {
        const group = readGroup(property);
        if (!group || !(name in group)) throw new Error(`当前主题缺少 ${property}.${name}。`);
        return unref(Reflect.get(group, name));
      },
    }),
    [Symbol.toPrimitive](): never {
      throw new Error('主题引用直接用于 CSS 属性或经编译的模板，不能在定义时转换成字符串。');
    },
  });
}
