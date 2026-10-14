import { computed, unref } from 'vue';
import type { Ref, VNodeChild } from 'vue';
import { _component } from '@zerodep-vue/core';
import { provideTheme } from './theme.ts';
import type { ControlTheme } from './theme.ts';

/** 仅用于验证跨模块主题边界；不是已发布的组件库 Provider。 */
export const ThemeRegion = _component(
  ({
    theme,
    children,
  }: {
    theme: ControlTheme | Readonly<Ref<ControlTheme>>;
    children?: VNodeChild;
  }) => {
    // setup 的普通传参保留快照语义；getter 同时跟随 prop 容器替换及容器内值变化。
    provideTheme(computed(() => unref(theme)));
    return <>{children}</>;
  },
);
