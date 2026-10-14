import { isRef, unref, toRef, hasInjectionContext, getCurrentInstance, inject, provide } from 'vue';
import type { Ref, InjectionKey } from 'vue';
import { Css } from './generated/author.ts';
import type { SystemKeywords } from './generated/system.ts';
import { colorProperties } from './generated/metadata.ts';
import { THEME, THEME_SOURCE } from './tokens.ts';
import type { ThemeReference, ThemeResolver } from './tokens.ts';
import type { CssContext, ThemeSource } from './types.ts';

const colors = new Set<string>(colorProperties);
const invalidSource = 'createCssContext 需要继承 SystemKeywords 的真实主题实例或 Vue Ref。';

interface ThemeEntry<T extends SystemKeywords> {
  readonly author: Css<T>;
  readonly theme: Readonly<Ref<T>>;
}

/** 一个来源共用作者与只读 Ref 入口；两者都在首次使用时创建。 */
export function createCssContext<T extends SystemKeywords>(source: ThemeSource<T>): CssContext<T> {
  checkSource(source);
  const sources = new WeakMap<object, ThemeEntry<T>>();
  const entryFor = (value: T | Ref<T>): ThemeEntry<T> => {
    const existing = sources.get(value);
    if (existing) return existing;
    checkSource(value);
    const readTheme = (): T => {
      const theme = unref(value);
      if (!theme || typeof theme !== 'object' || Reflect.get(theme, THEME_SOURCE) !== true)
        throw new Error(invalidSource);
      return theme;
    };
    let author: Css<T> | undefined;
    let theme: Readonly<Ref<T>> | undefined;
    const entry: ThemeEntry<T> = {
      get author() {
        return (author ??= new Css<T>(themeResolver(readTheme)));
      },
      get theme() {
        // getter Ref 不缓存主题快照，也不递归代理业务对象；只有读取 .value 才读取来源。
        return (theme ??= toRef(readTheme));
      },
    };
    sources.set(value, entry);
    return entry;
  };
  const key: InjectionKey<ThemeEntry<T>> = Symbol('CSS theme');
  const fallback = () => entryFor(source);
  // 同一注入记录让 useCss/useTheme 使用相同区域；覆盖区域不提前创建默认来源。
  const current = () => (hasInjectionContext() ? inject(key, fallback, true) : fallback());
  return Object.freeze({
    useCss: () => current().author,
    useTheme: () => current().theme,
    provideTheme(next: ThemeSource<T>): Css<T> {
      if (!getCurrentInstance()) throw new Error('provideTheme 必须在组件 setup 中调用。');
      const entry = entryFor(next);
      const author = entry.author;
      provide(key, entry);
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

/** 直接查主题组；只验证访问到的组，不生成系统关键字字典或对象视图。 */
function themeResolver(readTheme: () => SystemKeywords): ThemeResolver {
  const checked = new WeakSet<object>();
  const references = new Map<string, ThemeReference>();
  const readGroup = (property: string): object | undefined => {
    const group: unknown = Reflect.get(readTheme(), property);
    if (group === undefined) return undefined;
    if (!group || typeof group !== 'object') throw new Error(`主题属性组 ${property} 需要对象。`);
    if (checked.has(group)) return group;
    for (
      let current: object | null = group;
      current && current !== Object.prototype;
      current = Object.getPrototypeOf(current)
    ) {
      for (const name of Object.getOwnPropertyNames(current)) {
        if (name !== 'constructor' && !name.startsWith('_'))
          throw new Error(`主题关键字 ${property}.${name} 必须以 _ 开头，不能覆盖系统关键字。`);
      }
    }
    checked.add(group);
    return group;
  };
  return (property, name) => {
    let owner = property;
    let group = readGroup(owner);
    if ((!group || !(name in group)) && colors.has(property) && property !== 'color') {
      owner = 'color';
      group = readGroup(owner);
    }
    if (!group || !(name in group)) throw new Error(`当前主题的 ${property} 没有关键字 ${name}。`);
    // 同一来源的共享颜色引用保持身份，多个声明在一次消费中只读取一次。
    const key = `${owner}:${name}`;
    let reference = references.get(key);
    if (!reference) {
      reference = Object.freeze({
        [THEME]: Object.freeze({
          property: owner,
          name,
          read() {
            const current = readGroup(owner);
            if (!current || !(name in current)) throw new Error(`当前主题缺少 ${owner}.${name}。`);
            return unref(Reflect.get(current, name));
          },
        }),
      });
      references.set(key, reference);
    }
    return reference;
  };
}
