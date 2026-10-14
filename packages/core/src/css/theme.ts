import { isRef, unref, hasInjectionContext, getCurrentInstance, inject, provide } from 'vue';
import type { Ref, InjectionKey } from 'vue';
import { Css } from './generated/author.ts';
import type { SystemKeywords, SystemViews } from './generated/system.ts';

import { getSystemValues, hasSystemProperty, systemPropertyNames } from './generated/keywords.ts';
import { THEME, THEME_SOURCE, keyword } from './tokens.ts';
import type { CheckedTheme, ThemeReference } from './tokens.ts';
import type { PropertyName } from './types.ts';

type ThemeMembers<Group, Key extends PropertyName> = {
  readonly [Name in keyof Group]: Name extends string ? ThemeReference<Key, Name> : never;
};
/** 映射保留原主题成员的名字、类型和 JSDoc，系统关键字来自独立的固定数据。 */
export type KeywordView<T extends SystemKeywords> = {
  readonly [Key in keyof SystemViews]: SystemViews[Key] & ThemeMembers<T[Key], Key>;
};
/** 同一个主题类型拥有独立注入键；覆盖只影响其逻辑子树。 */
export interface CssContext<T extends SystemKeywords> {
  /** 显式引用默认来源的关键字；常规属性链直接使用字面量自动补全。 */
  readonly keywords: KeywordView<T>;
  /** 取得当前区域的不可变作者；组件外使用该主题的默认来源。 */
  useCss(): Css<T>;
  /** 在 setup 中提供区域主题；返回相同作者供当前组件使用。 */
  provideTheme(source: ThemeSource<T>): Css<T>;
}

/** 共享工具可沿用此类型接收主题来源，同时保留成员名称和值域校验。 */
export type ThemeSource<T extends SystemKeywords> = (T | Ref<T>) &
  (CheckedTheme<T> | Ref<CheckedTheme<T>>);

function keys(object: object): string[] {
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
  const current = (): T => {
    const theme = isRef(source) ? source.value : source;
    if (!theme || typeof theme !== 'object' || Reflect.get(theme, THEME_SOURCE) !== true)
      throw new Error('createCssContext 需要继承 SystemKeywords 的真实主题实例或 Vue Ref。');
    return theme;
  };
  const groupFor = (property: PropertyName): object | undefined => {
    const group: unknown = Reflect.get(current(), property);
    if (group === undefined) return undefined;
    if (!group || typeof group !== 'object') throw new Error(`主题属性组 ${property} 需要对象。`);
    if (!checked.has(group)) {
      for (const name of keys(group))
        if (name !== 'constructor' && !name.startsWith('_'))
          throw new Error(`主题关键字 ${property}.${name} 必须以 _ 开头，不能覆盖系统关键字。`);
      checked.add(group);
    }
    return group;
  };
  return new Proxy(
    {},
    {
      get(_target, name) {
        if (typeof name !== 'string' || !hasSystemProperty(name)) return undefined;
        if (groups.has(name)) return groups.get(name);
        const property = name as PropertyName;
        const members = new Map<string, unknown>();
        const exists = (member: PropertyKey) =>
          typeof member === 'string' &&
          (member.startsWith('_')
            ? member in (groupFor(property) ?? {})
            : Object.hasOwn(getSystemValues(property), member));
        const view = new Proxy(
          {},
          {
            get(_group, member) {
              if (typeof member !== 'string') return undefined;
              if (members.has(member)) return members.get(member);
              let value: unknown;
              if (member.startsWith('_'))
                value = Object.freeze({
                  [THEME]: Object.freeze({
                    property,
                    name: member,
                    read() {
                      const group = groupFor(property) as Record<string, unknown> | undefined;
                      if (!group || !(member in group))
                        throw new Error(`当前主题缺少 ${property}.${member}。`);
                      return unref(group[member]);
                    },
                  }),
                  [Symbol.toPrimitive](): never {
                    throw new Error(
                      '主题引用直接用于 CSS 属性或经编译的模板，不能在定义时转换成字符串。',
                    );
                  },
                });
              else {
                const systems = getSystemValues(property);
                if (!Object.hasOwn(systems, member)) return undefined;
                value = keyword(property, systems[member]!);
              }
              members.set(member, value);
              return value;
            },
            ownKeys() {
              const group = groupFor(property);
              return [
                ...new Set([
                  ...Object.keys(getSystemValues(property)),
                  ...(group ? keys(group).filter((key) => key.startsWith('_')) : []),
                ]),
              ];
            },
            has(_group, member) {
              return exists(member);
            },
            getOwnPropertyDescriptor(_group, member) {
              return exists(member) ? { configurable: true, enumerable: true } : undefined;
            },
          },
        );
        groups.set(name, view);
        return view;
      },
      ownKeys() {
        return systemPropertyNames();
      },
      has(_target, key) {
        return typeof key === 'string' && hasSystemProperty(key);
      },
      getOwnPropertyDescriptor(_target, key) {
        return typeof key === 'string' && hasSystemProperty(key)
          ? { configurable: true, enumerable: true }
          : undefined;
      },
    },
  ) as KeywordView<T>;
}

/** 创建有真实来源的主题上下文；T 来自实例，不依靠调用方的类型断言。 */
export function createCssContext<T extends SystemKeywords>(source: ThemeSource<T>): CssContext<T> {
  const checkSource = (value: T | Ref<T>) => {
    if (
      !value ||
      typeof value !== 'object' ||
      (!isRef(value) && Reflect.get(value, THEME_SOURCE) !== true)
    )
      throw new Error('createCssContext 需要继承 SystemKeywords 的真实主题实例或 Vue Ref。');
  };
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
    return (entry.author ??= new Css<T>(entry.keywords));
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
