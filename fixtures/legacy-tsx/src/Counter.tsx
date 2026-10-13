import { defineComponent, ref } from 'vue';

// 只使用普通 Vue TSX，作为增强功能加入前的兼容对照。
export const Counter = defineComponent({
  name: 'LegacyCounter',
  props: {
    label: { type: String, default: '计数' },
    initial: { type: Number, default: 0 },
  },
  setup(props) {
    const count = ref(props.initial);
    return () => (
      <button
        type="button"
        class={['counter', { active: count.value > 0 }]}
        onClick={() => count.value++}
      >
        {props.label}：{count.value}
      </button>
    );
  },
});
