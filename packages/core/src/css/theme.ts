import {
  isRef,
  unref,
  reactive,
  hasInjectionContext,
  getCurrentInstance,
  inject,
  provide,
} from 'vue';
import type { Ref, InjectionKey, UnwrapNestedRefs } from 'vue';
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
  readonly theme: UnwrapNestedRefs<T>;
}

/** 一个来源共用作者与响应式映射；两者都在首次使用时创建。 */
export function createCssContext<T extends SystemKeywords>(source: ThemeSource<T>): CssContext<T> {
  checkSource(source);
  const sources = new WeakMap<object, ThemeEntry<T>>();
  const entryFor = (value: T | Ref<T>): ThemeEntry<T> => {
    const existing = sources.get(value);
    if (existing) return existing;
    checkSource(value);
    const readTheme = (): UnwrapNestedRefs<T> => {
      const theme = unref(value);
      if (!theme || typeof theme !== 'object' || Reflect.get(theme, THEME_SOURCE) !== true)
        throw new Error(invalidSource);
      // 与公开映射共用 Vue 缓存的代理，让通过 theme 修改成员也能更新现有样式。
      return reactive(theme);
    };
    let author: Css<T> | undefined;
    let theme: UnwrapNestedRefs<T> | undefined;
    const entry: ThemeEntry<T> = {
      get author() {
        return (author ??= new Css<T>(themeResolver(readTheme)));
      },
      get theme() {
        return (theme ??= isRef(value) ? liveTheme(readTheme) : readTheme());
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

/** 可替换来源只加一层转发；成员响应性和 Ref 解包全部交给实际主题的 reactive。 */
function liveTheme<T extends object>(read: () => T): T {
  return new Proxy({} as T, {
    get: (_target, key) => Reflect.get(read(), key),
    set: (_target, key, value) => Reflect.set(read(), key, value),
    deleteProperty: (_target, key) => Reflect.deleteProperty(read(), key),
    has: (_target, key) => Reflect.has(read(), key),
    ownKeys: () => Reflect.ownKeys(read()),
    getPrototypeOf: () => Reflect.getPrototypeOf(read()),
    getOwnPropertyDescriptor(_target, key) {
      const descriptor = Reflect.getOwnPropertyDescriptor(read(), key);
      // 空转发目标不拥有来源的不可配置字段，描述符必须允许下一次来源替换。
      return descriptor && { ...descriptor, configurable: true };
    },
    defineProperty(_target, key, descriptor) {
      if (descriptor.configurable !== true)
        throw new TypeError('可替换主题映射只允许可配置的字段定义；固定字段请在主题来源上声明。');
      return Reflect.defineProperty(read(), key, descriptor);
    },
    preventExtensions() {
      // 冻结空转发目标会破坏 Proxy 不变量，之后连枚举也会失败；必须在修改目标前拒绝。
      throw new TypeError('可替换主题映射不能冻结或封闭；请在主题来源上设置约束。');
    },
    setPrototypeOf() {
      throw new TypeError('可替换主题映射的原型跟随来源；请替换主题来源。');
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
  const values = new Map<string, ThemeReference>();
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
  const ownerFor = (property: string, name: string): string | undefined => {
    let owner = property;
    let group = readGroup(owner);
    if ((!group || !(name in group)) && colors.has(property) && property !== 'color') {
      owner = 'color';
      group = readGroup(owner);
    }
    return group && name in group ? owner : undefined;
  };
  return (property, name) => {
    if (!ownerFor(property, name)) throw new Error(`当前主题的 ${property} 没有关键字 ${name}。`);
    const key = `${property}:${name}`;
    let reference = references.get(key);
    if (!reference) {
      reference = Object.freeze({
        [THEME]: Object.freeze({
          property,
          name,
          read() {
            // 来源替换或分组增删后重新选择所属组，既有样式仍保持“属性自身优先”。
            const owner = ownerFor(property, name);
            if (!owner) throw new Error(`当前主题缺少 ${property}.${name}。`);
            const valueKey = `${owner}:${name}`;
            let value = values.get(valueKey);
            if (!value) {
              value = Object.freeze({
                [THEME]: Object.freeze({
                  property: owner,
                  name,
                  read() {
                    const group = readGroup(owner);
                    if (!group || !(name in group))
                      throw new Error(`当前主题缺少 ${owner}.${name}。`);
                    return unref(Reflect.get(group, name));
                  },
                }),
              });
              values.set(valueKey, value);
            }
            // 复用解析器的递归读取缓存，让共享 color 的 getter 在一次消费中仍只读一次。
            return value;
          },
        }),
      });
      references.set(key, reference);
    }
    return reference;
  };
}
