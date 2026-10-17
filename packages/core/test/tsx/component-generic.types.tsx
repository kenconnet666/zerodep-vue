import { computed, ref, shallowRef } from 'vue';
import type { Ref, VNodeChild } from 'vue';
import { _component } from '@zerodep-vue/core';

interface ChoiceProps<T> {
  options: readonly T[];
  value: Ref<T | null>;
  getKey: (option: T) => PropertyKey;
  getLabel: (option: T) => string;
  renderOption?: (option: T) => VNodeChild;
  onValueChange?: (value: T | null) => void;
}

const Choice = _component(<T,>({ options, getKey, getLabel }: ChoiceProps<T>) => (
  <ul>
    {options.map((option) => (
      <li key={getKey(option)}>{getLabel(option)}</li>
    ))}
  </ul>
));
interface User {
  id: number;
  name: string;
}
const users: User[] = [{ id: 1, name: 'Ada' }];
const selected = shallowRef<User | null>(null);

<Choice
  options={users}
  value={selected}
  getKey={(option) => option.id}
  getLabel={(option) => option.name}
  renderOption={(option) => option.name}
  onValueChange={(value) => value?.name}
/>;
<Choice
  options={users}
  // @ts-expect-error 模型需要可写 Ref，不接收 getter-only computed。
  value={computed(() => selected.value)}
  getKey={(option) => option.id}
  getLabel={(option) => option.name}
/>;
<Choice
  options={users}
  value={selected}
  getKey={(option) => option.id}
  getLabel={(option) => option.name}
  // @ts-expect-error 自有泛型组件仍拒绝组件实例 ref。
  ref={ref()}
/>;
