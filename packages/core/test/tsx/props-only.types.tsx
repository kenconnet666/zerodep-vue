import { defineComponent, ref } from 'vue';
import type { Ref, SetupContext, VNodeChild } from 'vue';
import { _component, For } from '@zerodep-vue/core';

const Owned = _component(
  ({
    value,
    inputRef,
    children,
  }: {
    value: Ref<string>;
    inputRef?: Ref<HTMLInputElement | null>;
    children?: VNodeChild;
  }) => <input ref={inputRef} v-model={value.value} aria-label={String(children)} />,
);
const value = ref('');
const element = ref<HTMLInputElement | null>(null);
// v-show 等元素指令仍使用 Vue 根节点行为，与 Props 作者通信协议独立。
<Owned value={value} v-show={true} />;
<Owned value={value} inputRef={element}>
  内容
</Owned>;
// @ts-expect-error 自有组件通过普通 Props 共享 DOM，不提供实例 ref。
<Owned value={value} ref={ref()} />;
// @ts-expect-error 自有组件的内容通过 children 或明确的渲染函数 Prop 传递。
<Owned value={value} v-slots={{ default: () => 'slot' }} />;
// @ts-expect-error 自有组件直接接收 Ref 模型，不附加 Vue 组件模型协议。
<Owned value={value} v-model={value.value} />;
const namedModel: JSX.LibraryManagedAttributes<typeof Owned, InstanceType<typeof Owned>['$props']> =
  {
    value,
    // @ts-expect-error Props 对象仍拒绝命名模型；TSX 未声明的命名属性由 TypeScript 忽略。
    'v-model:value': value.value,
  };
void namedModel;
// @ts-expect-error 模型修饰符也不能重新引入 Vue 组件模型协议。
<Owned value={value} v-model_trim={value.value} />;
// @ts-expect-error 批量模型同样改为普通 Props。
<Owned value={value} v-models={[[value.value, 'value']]} />;
// @ts-expect-error 作者初始化函数没有第二个 context 参数。
_component((_props: {}, _context: SetupContext) => null);
// @ts-expect-error For 也只通过普通 Props 接收 renderer，不暴露组件实例。
<For each={[1]} ref={ref()} children={(item) => item} />;
// @ts-expect-error For 的公开函数签名只有 Props。
For({ each: [1], children: (item) => item }, {});

const Native = defineComponent({
  props: { modelValue: String },
  emits: ['update:modelValue'],
  setup(props, { emit, slots, expose }) {
    expose({ read: () => props.modelValue });
    return () => (
      <button onClick={() => emit('update:modelValue', 'next')}>{slots.default?.()}</button>
    );
  },
});
// 普通 Vue 组件和原生节点继续使用 Vue 自己的 ref、slots 与模型指令。
<Native ref={ref()} v-model={value.value} v-slots={{ default: () => 'native' }} />;
<input ref={element} v-model_trim={value.value} />;
<For each={[1]} children={(item) => item} />;
