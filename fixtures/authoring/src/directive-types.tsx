import { defineComponent, ref } from 'vue';
import { _component } from '@zerodep-vue/core';

const text = ref('draft');
const visible = ref(true);
const count = ref(0);
const Field = defineComponent({
  props: ['value'],
  emits: ['update:value'],
  setup: () => () => null,
});
export const directives = (
  <>
    <input v-model={text.value} />
    <textarea v-model_trim={text.value} />
    <input v-model_lazy_number={count.value} />
    <select v-model={text.value}>
      <option value="draft">草稿</option>
    </select>
    <div v-show={visible.value} v-text={count.value} />
    <div v-html={'<b>trusted</b>'} />
    <Field v-model:value={text.value} />
    <Field v-model:value_trim={text.value} v-slots={{ default: () => text.value }} />
    <Field v-models={[[text.value, 'value']]} />
  </>
);
export const Own = _component(() => <div />);
export const ownDirective = <Own v-show={visible.value} />;
// @ts-expect-error v-html 内容需要字符串。
<div v-html={123} />;
// @ts-expect-error slots 使用具名函数，不是普通字符串。
<Field v-slots="footer" />;
// @ts-expect-error 批量模型必须使用二维元组数组。
<Field v-models={123} />;
