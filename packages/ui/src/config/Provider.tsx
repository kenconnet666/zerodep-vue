import type { Props } from '@zerodep-vue/core';
import { _component, _div, createCssContext } from '@zerodep-vue/core';
import type {
  ComputedRef,
  DeepReadonly,
  InjectionKey,
  Ref,
  UnwrapNestedRefs,
  VNodeChild,
} from 'vue';
import { hasInjectionContext, inject, provide, reactive, readonly, unref, watchEffect } from 'vue';
import type { UiLanguage, UiLanguageInput } from './lang/types.ts';
import { zhCN } from './lang/zhCN.ts';
import { LightTheme } from './theme/LightTheme.ts';
import type { UiTheme, UiThemeInput } from './theme/types.ts';
export type ProviderProps = Props<
  typeof _div,
  {
    /** 完整主题或局部分组，支持 Ref/computed；只覆盖写出的字段，undefined 恢复继承。 */
    theme?:
      | UiThemeInput
      | Ref<UiThemeInput | undefined>
      | ComputedRef<UiThemeInput | undefined>
      | undefined;
    /** 文案、locale 和 timeZone 逐字段覆盖，支持 Ref/computed；undefined 恢复继承。 */
    lang?:
      | UiLanguageInput
      | Ref<UiLanguageInput | undefined>
      | ComputedRef<UiLanguageInput | undefined>
      | undefined;
    /** Provider 根 div 内的内容，继承本层主题和语言。 */
    children?: VNodeChild;
  }
>;

// 默认配置只读共享；各 Provider 的覆盖和响应式同步由各自的组件实例持有。
const themeContext = createCssContext<UiTheme>(readonly(reactive(new LightTheme())));
const defaultLanguage: UiLanguage = readonly(
  reactive({
    ...zhCN,
  }),
);
const languageKey: InjectionKey<UiLanguage> = Symbol('UI language');

/** 取得当前区域的样式作者，在后代 setup 中使用 const s = useCss()。 */
export const useCss = themeContext.useCss;

/** 读取当前区域的只读主题对象，例如 theme.color._primary；整套替换时视图保持稳定。 */
export function useTheme(): DeepReadonly<UnwrapNestedRefs<UiTheme>> {
  return readonly(themeContext.useTheme());
}

/** 读取当前区域的稳定只读视图：lang.confirm、lang.locale、lang.timeZone。 */
export function useLang(): UiLanguage {
  return hasInjectionContext() ? inject(languageKey, defaultLanguage) : defaultLanguage;
}

/** 通过 Vue 组件树向下提供配置；同级区域和不同应用之间互不修改配置。 */
export const Provider = _component(
  ({ theme: themeSource, lang: langSource, children, ...rest }: ProviderProps) => {
    // 先读取父级，再提供本层对象；每个 Provider 拥有自己的分组，不修改父级或调用方来源。
    const parentTheme = useTheme();
    const parentLang = useLang();
    // LightTheme 提供完整结构和 core 所需的主题身份；下面立即用父级值和本层覆盖同步所有字段。
    const theme = reactive(new LightTheme());
    const lang = reactive({
      ...parentLang,
    });
    watchEffect(
      () => {
        const ownTheme = reactive<UiThemeInput>(unref(themeSource) ?? {});
        const ownLang = reactive<UiLanguageInput>(unref(langSource) ?? {});
        // 主题仅有“CSS 属性组 → 主题名”两层，按已声明的完整结构逐字段继承。
        for (const group of Object.keys(theme) as (keyof UiThemeInput)[]) {
          const target: Record<string, string | number> = theme[group];
          const parent: Readonly<Record<string, string | number>> = parentTheme[group];
          const own: Readonly<Record<string, string | number | undefined>> | undefined =
            ownTheme[group];
          for (const key of Object.keys(target)) {
            const value = own?.[key];
            target[key] = value === undefined ? parent[key]! : value;
          }
        }
        for (const key of Object.keys(lang) as (keyof UiLanguage)[]) {
          const value = ownLang[key];
          lang[key] = value === undefined ? parentLang[key] : value;
        }
      },
      // 维持 theme、属性组和 lang 的对象身份，来源更新后直接读取就能取得新值。
      {
        flush: 'sync',
      },
    );
    themeContext.provideTheme(readonly(theme));
    provide(languageKey, readonly(lang));
    return <_div {...rest}>{children}</_div>;
  },
);
