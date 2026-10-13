import { css as compose, create } from './core.ts';
import { firstThatWorks } from './values.ts';

/** 运行时 class 声明与组合；通过编译插件隐式接入对应的内联变量。 */
export const css = Object.assign(compose, { create, firstThatWorks });
export { bx } from './values.ts';
export { createCssHost, cssHostKey } from './host.ts';
export { getCssHost } from './vnode.ts';
export type { CssHost, CssHostOptions } from './host.ts';
export type { CssClass, CssObject, ClassValue, CssInput } from './types.ts';
export type { CssBinding } from './values.ts';
