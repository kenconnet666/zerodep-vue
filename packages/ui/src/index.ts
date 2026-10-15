/** UI 公共入口：第三方依赖仍由应用从原包显式导入。 */
export { Provider, useCss, useTheme, useLang } from './config/Provider.tsx';
export type { ProviderProps } from './config/Provider.tsx';
export { BaseTheme } from './config/theme/BaseTheme.ts';
export type { UiTheme, UiThemeInput } from './config/theme/types.ts';
export { LightTheme } from './config/theme/LightTheme.ts';
export { DarkTheme } from './config/theme/DarkTheme.ts';
export { zhCN } from './config/lang/zhCN.ts';
export { enUS } from './config/lang/enUS.ts';
export type { UiLanguage, UiLanguageInput } from './config/lang/types.ts';
