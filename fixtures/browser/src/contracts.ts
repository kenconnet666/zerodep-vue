import type { CssHost } from '@zerodep-vue/css';

export interface InitialState {
  text: string;
  color: string;
}
export interface FixtureControl {
  host: CssHost;
  unmount(): void;
  inspectCss?(): unknown[];
  inspectorTree?(): Promise<{ id: string; label: string }[]>;
  inspectorState?(id: string): Promise<unknown>;
}
declare global {
  interface Window {
    __initial?: InitialState;
    __hydrate?: boolean;
    __fixture?: FixtureControl;
    __beforeHydrate?: Element[];
    __mounted?: boolean;
    __hmrSetups?: number;
    __hmrToken?: string;
    __inspectionReads?: () => { used: number; unused: number };
  }
}
