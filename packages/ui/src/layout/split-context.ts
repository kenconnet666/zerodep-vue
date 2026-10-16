import type { InjectionKey } from 'vue';
export interface SplitContext {
  pane(name: string): { id: string; size: number; collapsed: boolean };
  focusHandle(name: string): void;
}
export const splitKey: InjectionKey<SplitContext> = Symbol('UI split');
