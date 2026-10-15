import { _component, createCssContext } from '@zerodep-vue/core';
import {
  computed,
  hasInjectionContext,
  inject,
  provide,
  reactive,
  readonly,
  unref,
  watchEffect,
} from 'vue';
import type {
  ComputedRef,
  DeepReadonly,
  InjectionKey,
  Ref,
  UnwrapNestedRefs,
  VNodeChild,
} from 'vue';
import { zhCN } from './lang/zhCN.ts';
import type { UiLanguage, UiLanguageInput } from './lang/types.ts';
import { LightTheme } from './theme/LightTheme.ts';
import type { UiTheme } from './theme/types.ts';

export interface ProviderProps {
  /** 完整主题实例、Ref 或 computed；省略/undefined 继承父级，不合并主题属性。 */
  theme?: UiTheme | Ref<UiTheme> | ComputedRef<UiTheme> | undefined;
  /** 文案、locale 和 timeZone 逐字段覆盖，未设置的字段继续响应父级更新。 */
  lang?: UiLanguageInput | undefined;
  /** 当前配置覆盖范围内的内容，不增加额外 DOM 容器。 */
  children?: VNodeChild;
}

// 默认配置只读共享；各 Provider 的覆盖和响应式同步由各自的组件实例持有。
const themeContext = createCssContext<UiTheme>(readonly(reactive(new LightTheme())));
const defaultLanguage: UiLanguage = readonly(reactive({ ...zhCN }));
const languageKey: InjectionKey<UiLanguage> = Symbol('UI language');

/** 取得当前区域的样式作者，在后代 setup 中使用 const s = useCss()。 */
export const useCss = themeContext.useCss;

/** 读取当前区域的只读主题对象，例如 theme.color._brand；整套替换时视图保持稳定。 */
export function useTheme(): DeepReadonly<UnwrapNestedRefs<UiTheme>> {
  return readonly(themeContext.useTheme());
}

/** 读取当前区域的稳定只读视图：lang.confirm、lang.locale、lang.timeZone。 */
export function useLang(): UiLanguage {
  return hasInjectionContext() ? inject(languageKey, defaultLanguage) : defaultLanguage;
}

/** 通过 Vue 组件树向下提供配置；同级区域和不同应用之间互不修改配置。 */
export const Provider: ReturnType<typeof _component<ProviderProps>> = _component(
  (props: ProviderProps) => {
    // 先读取父级，再注入本层配置；computed 只负责跟随整套主题来源的替换。
    const parentTheme = useTheme();
    const parentLang = useLang();
    themeContext.provideTheme(
      computed(() =>
        props.theme === undefined ? parentTheme : readonly(reactive(unref(props.theme))),
      ),
    );

    const lang = reactive({ ...parentLang });
    // 同步更新同一个对象，后代直接读 lang.xx；undefined 恢复继承，空文案仍是有效覆盖。
    watchEffect(
      () => {
        for (const key of Object.keys(lang) as (keyof UiLanguage)[]) {
          const value = props.lang?.[key];
          lang[key] = value === undefined ? parentLang[key] : value;
        }
      },
      { flush: 'sync' },
    );
    provide(languageKey, readonly(lang));
    return props.children;
  },
  { name: 'Provider', inheritAttrs: false },
);
