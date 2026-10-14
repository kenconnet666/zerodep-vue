import { isRef, unref } from 'vue';
import type { Ref } from 'vue';
import { css as compose, create } from './core.ts';
import { SystemKeywords } from './generated/system.ts';
import type { SystemViews } from './generated/system.ts';
import { systemValues } from './generated/keywords.ts';
import { THEME, THEME_SOURCE, keyword } from './tokens.ts';
import type { CheckedTheme, ThemeReference } from './tokens.ts';
import type { CssInput, CssClass, PropertyName } from './types.ts';
import { keyframes as createKeyframes } from './animation.ts';
import type { Keyframes } from './animation.ts';
import type { CssAnimation } from './animation-token.ts';
import { globalCss as registerGlobal } from './global.ts';
import type { GlobalRules, GlobalOptions } from './global.ts';

type ThemeMembers<Group, Key extends PropertyName> = {
  readonly [Name in keyof Group]: Name extends string ? ThemeReference<Key, Name> : never;
};
/** 映射保留原主题成员的名字、类型和 JSDoc，系统关键字来自独立的固定数据。 */
export type KeywordView<T extends SystemKeywords> = {
  readonly [Key in keyof SystemViews]: SystemViews[Key] & ThemeMembers<T[Key], Key>;
};
export interface Css<T extends SystemKeywords = SystemKeywords> {
  /** 声明或组合样式，统一用于 class；同一选择器/条件/属性后项覆盖，空条件项忽略。 */
  (...inputs: readonly CssInput<T>[]): CssClass;
}
/** 批量定义具名样式；结果通过 css() 应用，成员保留 T 的作者约束。 */
export interface Cx<T extends SystemKeywords = SystemKeywords> {
  /** 批量定义具名样式；成员与 css() 的结果使用相同协议，消费时仍经 css() 组合。 */
  <const Name extends string>(
    styles: Record<Name, CssInput<T>>,
  ): { readonly [Key in Name]: CssClass };
}

/** 同一主题来源的独立作者函数；调用方按需解构，不把方法挂到 css/cx 函数上。 */
export interface CssContext<T extends SystemKeywords = SystemKeywords> {
  readonly css: Css<T>;
  readonly cx: Cx<T>;
  /** 系统值与 T 继承的主题成员共用视图，成员说明在映射中保留。 */
  readonly keywords: KeywordView<T>;
  /** 声明动画资源；使用时才求值和登记，支持 bx 和主题引用。 */
  keyframes(frames: Keyframes<T>): CssAnimation;
  /** 注册显式全局规则，返回清理函数；bx/主题更新保留节点及层叠位置。 */
  globalCss(
    name: string,
    rules: GlobalRules<T> | Ref<GlobalRules<T>>,
    options?: GlobalOptions,
  ): () => void;
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

/**
 * 使用继承 SystemKeywords 的主题实例，返回携带同一 T 的样式函数和关键字视图。
 * 多套主题使用普通实例保存；传入 Vue Ref 后，替换实例会更新实际消费它的元素。
 * 主题通过正常 TypeScript 类继承扩展；替换整个属性组时仍遵循普通对象覆盖语义。
 */
export function createTheme<T extends SystemKeywords>(source: ThemeSource<T>): CssContext<T> {
  return Object.freeze({
    css: compose,
    keywords: keywordView<T>(source),
    cx: create,
    keyframes: createKeyframes,
    globalCss: registerGlobal,
  });
}

/** 没有业务主题的默认作者仍具备完整系统关键字。 */
export const { css, cx, keywords, keyframes, globalCss } = createTheme(new SystemKeywords());
