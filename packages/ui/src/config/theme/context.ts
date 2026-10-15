import { createCssContext } from '@zerodep-vue/core';
import { reactive, readonly } from 'vue';
import type { DeepReadonly, UnwrapNestedRefs } from 'vue';
import { UiTheme } from './UiTheme.ts';

// 共享的只有不可变默认值；Provider 的可替换来源属于各自组件实例。
const context = createCssContext<UiTheme>(readonly(reactive(new UiTheme())));

/** 取得当前 UI 区域的样式作者；在后代组件 setup 中使用 const s = useCss()。 */
export const useCss = context.useCss;

/** 取得稳定的只读主题视图；在渲染或 computed 中读取字段以跟随主题替换。 */
export function useTheme(): DeepReadonly<UnwrapNestedRefs<UiTheme>> {
  return readonly(context.useTheme());
}

/** @internal Provider 的主题写入入口，不从 UI 根入口导出。 */
export const provideTheme = context.provideTheme;
