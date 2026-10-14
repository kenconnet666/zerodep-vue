export const THEME = Symbol.for('@zerodep-vue/core/theme-reference/v1');
export const THEME_SOURCE = Symbol.for('@zerodep-vue/core/theme-source/v1');

/** 内部延迟读取描述；来源由上下文捕获，不作为公开 CSS 属性输入。 */
export interface ThemeReference {
  readonly [THEME]: {
    readonly property: string;
    readonly name: string;
    readonly read: () => unknown;
  };
}

export type ThemeResolver = (property: string, name: string) => ThemeReference;

export function isThemeReference(value: unknown): value is ThemeReference {
  return !!value && typeof value === 'object' && THEME in value;
}
