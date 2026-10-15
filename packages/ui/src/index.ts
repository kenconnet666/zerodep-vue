/** UI 公共入口：第三方依赖仍由应用从原包显式导入。 */
export { Provider, useLang } from './config/Provider.tsx';
export type { ProviderProps } from './config/Provider.tsx';
export { useCss, useTheme } from './config/theme/context.ts';
export { UiTheme } from './config/theme/UiTheme.ts';
export { zhCN } from './config/lang/zhCN.ts';
export { enUS } from './config/lang/enUS.ts';
export type { UiLanguage, UiLanguageInput } from './config/lang/types.ts';
