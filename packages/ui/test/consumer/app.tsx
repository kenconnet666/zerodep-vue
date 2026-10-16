import { ref } from 'vue';
import { _component, bx } from '@zerodep-vue/core';
import { Button, Heading, Provider, Text, useCss } from '@zerodep-vue/ui';

export const count = ref(0);
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
    </section>
  );
});
export const App = _component(() => (
  <Provider>
    <Content />
  </Provider>
));
