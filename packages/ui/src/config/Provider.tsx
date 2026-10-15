import { _component } from '@zerodep-vue/core';
import type { ThemeSource } from '@zerodep-vue/core';
import { computed, hasInjectionContext, inject, provide, reactive, readonly, unref } from 'vue';
import type { ComputedRef, InjectionKey, VNodeChild } from 'vue';
import { zhCN } from './lang/zhCN.ts';
import type { UiLanguage, UiLanguageInput } from './lang/types.ts';
import { provideTheme, useTheme } from './theme/context.ts';
import type { UiTheme } from './theme/UiTheme.ts';

export interface ProviderProps {
  /** 完整主题实例、Ref 或 computed；省略/undefined 继承父级，不合并主题属性。 */
  theme?: ThemeSource<UiTheme> | ComputedRef<UiTheme> | undefined;
  /** 文案、locale 和 timeZone 逐字段覆盖，未设置的字段继续响应父级更新。 */
  lang?: UiLanguageInput | undefined;
  /** 当前配置覆盖范围内的内容，不增加额外 DOM 容器。 */
  children?: VNodeChild;
}

const languageKey: InjectionKey<UiLanguage> = Symbol('UI language');
const defaultLanguage: UiLanguage = readonly(reactive({ ...zhCN }));

/** 读取当前区域的稳定只读视图：lang.confirm、lang.locale、lang.timeZone。 */
export function useLang(): UiLanguage {
  return hasInjectionContext() ? inject(languageKey, defaultLanguage) : defaultLanguage;
}

/** 通过 Vue 组件树向下提供配置；同级区域和不同应用之间互不修改配置。 */
export const Provider = _component(
  (props: ProviderProps) => {
    // 先读取父级，再提供自己的记录。保存视图而非字段快照，才能在撤销覆盖后继续跟随父级。
    const parentTheme = useTheme();
    const parentLanguage = useLang();
    provideTheme(
      computed(() => {
        if (props.theme === undefined) return parentTheme;
        // ThemeSource 含属性校验交叉类型；明确来源类型，避免 unref 推断成宽泛的 CSS 值域。
        const theme = unref<UiTheme>(props.theme);
        if (!theme || typeof theme !== 'object')
          throw new TypeError('Provider.theme 需要完整主题实例或主题 Ref。');
        // 只限制后代的写入；调用方仍可更新自己的 Ref 或 reactive 主题。
        return readonly(reactive(theme));
      }),
    );

    // 每个字段分别选择当前覆盖或父级值，读取时建立 Vue 依赖，避免把继承关系变成快照。
    const readLanguage = (key: keyof UiLanguage): string => {
      const input = props.lang;
      if (input !== undefined && (!input || typeof input !== 'object'))
        throw new TypeError('Provider.lang 需要配置对象；恢复继承请使用 undefined。');
      const value = input?.[key];
      // 父级已完成校验；这里只校验本层显式值，避免嵌套 Provider 重复创建 Intl 格式化器。
      if (value === undefined) return parentLanguage[key];
      if (typeof value !== 'string') throw new TypeError(`Provider.lang.${key} 需要字符串。`);
      try {
        switch (key) {
          case 'locale': {
            const canonical = Intl.getCanonicalLocales(value)[0];
            if (!canonical) throw new RangeError('Provider.lang.locale 不能为空。');
            return canonical;
          }
          case 'timeZone':
            // 验证由宿主 Intl 支持的时区；保留原标识，避免不同 ICU 版本的别名转换造成首屏差异。
            new Intl.DateTimeFormat('en', { timeZone: value });
            return value;
          default:
            return value;
        }
      } catch (cause) {
        throw new RangeError(`Provider.lang.${key} 无效：${value}`, { cause });
      }
    };
    const locale = computed(() => readLanguage('locale'));
    const timeZone = computed(() => readLanguage('timeZone'));

    // 对象身份固定，后代直接读取 lang.confirm 等字段；只读包装不影响调用方更新自己的来源。
    const language: UiLanguage = readonly(
      reactive({
        get confirm() {
          return readLanguage('confirm');
        },
        get cancel() {
          return readLanguage('cancel');
        },
        get clear() {
          return readLanguage('clear');
        },
        get loading() {
          return readLanguage('loading');
        },
        get locale() {
          return locale.value;
        },
        get timeZone() {
          return timeZone.value;
        },
      }),
    );
    provide(languageKey, language);
    return props.children;
  },
  { name: 'Provider', inheritAttrs: false },
);
