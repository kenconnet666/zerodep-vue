import type { CssHost } from '@zerodep-vue/core';

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
export interface StabilityReport {
  iterations: number;
  setups: number;
  disposed: number;
  maximumUnused: number;
  maximumRules: number;
  hiddenReads: number;
  sharedConsumerColor: string;
  shadowColor: string;
  shadowWidth: string;
  shadowStyleIdentity: boolean;
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
    __stability?: {
      run(iterations: number): Promise<StabilityReport>;
      finishLeave(): void;
      lifecycle(): { setups: number; disposed: number; references: number };
      dispose(): void;
    };
  }
}
