import type { CssHost } from '@zerodep-vue/css';

export interface InitialState {
  text: string;
  color: string;
}
export interface FixtureControl {
  host: CssHost;
  unmount(): void;
}
declare global {
  interface Window {
    __initial?: InitialState;
    __hydrate?: boolean;
    __fixture?: FixtureControl;
    __beforeHydrate?: Element[];
    __mounted?: boolean;
  }
}
