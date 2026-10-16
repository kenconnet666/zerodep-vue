import { ref } from 'vue';
import { _component, bx } from '@zerodep-vue/core';
import { Button, Heading, Input, Provider, Text, Textarea, useCss } from '@zerodep-vue/ui';

export const count = ref(0);
const text = ref('installed');
const notes = ref('first\nsecond');
const Content = _component(() => {
  const s = useCss();
  return (
    <section class={s.padding('_medium')}>
      <Heading as="h1" id="title">
        安装消费
      </Heading>
      <Text id="count" class={s.color(bx(count.value ? '_danger' : '_primary'))}>
        {count.value}
      </Text>
      <Button id="increment" onClick={() => count.value++}>
        增加
      </Button>
      <label for="query">查询</label>
      <Input id="query" value={text} clearable />
      <output id="query-value">{text.value}</output>
      <Textarea id="notes" value={notes} aria-label="备注" />
      <output id="notes-value">{notes.value}</output>
    </section>
  );
});
export const App = _component(() => (
  <Provider>
    <Content />
  </Provider>
));
