import type { Ref, VNodeChild } from 'vue';

export interface SharedProps {
  value: Ref<string>;
  renderItem: (value: string) => VNodeChild;
}

export interface Choices<T> {
  items: readonly T[];
  renderItem: (value: T) => VNodeChild;
}
