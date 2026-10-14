import { isRef, unref, hasInjectionContext, getCurrentInstance, inject, provide } from 'vue';
import type { Ref, InjectionKey } from 'vue';
import { Css } from './generated/author.ts';
import { SystemKeywords } from './generated/system.ts';
import type { SystemViews } from './generated/system.ts';
import { systemValues } from './generated/keywords.ts';
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
export interface CssTheme<T extends SystemKeywords> {
  /** 显式引用默认来源的关键字；常规属性链直接使用字面量自动补全。 */
  readonly keywords: KeywordView<T>;
  /** 取得当前区域的不可变作者；组件外使用该主题的默认来源。 */
  useCss(): Css<T>;
  /** 在 setup 中提供区域主题；返回相同作者供当前组件使用。 */
  provide(source: ThemeSource<T>): Css<T>;
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
      throw new Error('createTheme 需要继承 SystemKeywords 的真实主题实例或 Vue Ref。');
    if (!checked.has(theme)) {
      for (const property of keys(theme)) {
        if (!Object.hasOwn(systemValues, property)) continue;
        const group = Reflect.get(theme, property);
        if (!group || typeof group !== 'object')
          throw new Error(`主题属性组 ${property} 需要对象。`);
        for (const name of keys(group))
          if (name !== 'constructor' && !name.startsWith('_'))
            throw new Error(`主题关键字 ${property}.${name} 必须以 _ 开头，不能覆盖系统关键字。`);
      }
      checked.add(theme);
    }
    return theme;
  };
  current();
  return new Proxy(
    {},
    {
      get(_target, name) {
        if (typeof name !== 'string' || !Object.hasOwn(systemValues, name)) return undefined;
        if (groups.has(name)) return groups.get(name);
        const property = name as PropertyName;
        const systems: Readonly<Record<string, string>> = systemValues[property];
        const members = new Map<string, unknown>();
        const exists = (member: PropertyKey) =>
          typeof member === 'string' &&
          (Object.hasOwn(systems, member) ||
            (member.startsWith('_') && member in (current()[property] ?? {})));
        const view = new Proxy(
          {},
          {
            get(_group, member) {
              if (typeof member !== 'string') return undefined;
              if (members.has(member)) return members.get(member);
              let value: unknown;
              if (Object.hasOwn(systems, member)) value = keyword(property, systems[member]!);
              else if (member.startsWith('_'))
                value = Object.freeze({
                  [THEME]: Object.freeze({
                    property,
                    name: member,
                    read() {
                      const group = current()[property] as Record<string, unknown> | undefined;
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
              else return undefined;
              members.set(member, value);
              return value;
            },
            ownKeys() {
              const group = current()[property];
              return [
                ...new Set([
                  ...Object.keys(systems),
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
        return Object.keys(systemValues);
      },
      has(_target, key) {
        return typeof key === 'string' && Object.hasOwn(systemValues, key);
      },
      getOwnPropertyDescriptor(_target, key) {
        return typeof key === 'string' && Object.hasOwn(systemValues, key)
          ? { configurable: true, enumerable: true }
          : undefined;
      },
    },
  ) as KeywordView<T>;
}

/** 创建有真实来源的主题上下文；T 来自实例，不依靠调用方的类型断言。 */
export function createTheme<T extends SystemKeywords>(source: ThemeSource<T>): CssTheme<T> {
  const keywords = keywordView(source);
  const fallback = new Css<T>(keywords);
  const key: InjectionKey<Css<T>> = Symbol('CSS theme');
  return Object.freeze({
    keywords,
    useCss(): Css<T> {
      return hasInjectionContext() ? inject(key, fallback) : fallback;
    },
    provide(next: ThemeSource<T>): Css<T> {
      if (!getCurrentInstance()) throw new Error('主题 provide 必须在组件 setup 中调用。');
      const author = new Css<T>(keywordView(next));
      provide(key, author);
      return author;
    },
  });
}

/** 默认作者只包含系统关键字；业务主题导出 createTheme 返回的 useCss。 */
export const { useCss, keywords } = createTheme(new SystemKeywords());
