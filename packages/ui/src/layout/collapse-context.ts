import type { InjectionKey } from 'vue';

export interface CollapseContext {
  expanded(name: string): boolean;
  toggle(name: string): void;
  register(name: string): () => void;
}
export const collapseKey: InjectionKey<CollapseContext> = Symbol('UI collapse');
