import { _component, _form, _output, _section } from '@zerodep-vue/core';
import {
  Button,
  Checkbox,
  Field,
  Heading,
  Input,
  Provider,
  RadioGroup,
  Switch,
  Text,
  Textarea,
  useCss,
  useField,
} from '@zerodep-vue/ui';
import { ref } from 'vue';
import { z } from 'zod';
export const count = ref(0);
const text = ref('installed');
const notes = ref('first\nsecond');
const accepted = ref(false);
const notifications = ref(true);
const frequency = ref<'daily' | 'weekly'>('daily');
const Content = _component(() => {
  const css = useCss();
  const field = useField(text, z.string().min(1, '请输入查询内容'), {
    id: 'query',
    name: 'query',
  });
  const frequencyField = useField(frequency, z.enum(['daily', 'weekly']), {
    name: 'frequency',
  });
  return (
    <_section
      css={css({
        padding: '_medium',
      })}
    >
      <Heading as="h1" id="title">
        安装消费
      </Heading>
      <Text
        css={css(() => ({
          color: count.value ? '_danger' : '_primary',
        }))}
        id="count"
      >
        {count.value}
      </Text>
      <Button id="increment" onClick={() => count.value++}>
        增加
      </Button>
      <_form id="fields">
        <Field state={field} label="查询">
          <Input {...field.control} clearable />
        </Field>
        <_output id="query-value">{text.value}</_output>
        <Textarea id="notes" name="notes" value={notes} aria-label="备注" />
        <_output id="notes-value">{notes.value}</_output>
        <Checkbox id="accepted" name="accepted" value={accepted}>
          同意条款
        </Checkbox>
        <Switch id="notifications" name="notifications" value={notifications}>
          通知
        </Switch>
        <Field state={frequencyField} label="频率">
          <RadioGroup
            {...frequencyField.control}
            options={[
              {
                value: 'daily',
                label: '每天',
              },
              {
                value: 'weekly',
                label: '每周',
              },
            ]}
          />
        </Field>
      </_form>
    </_section>
  );
});
export const App = _component(() => (
  <Provider>
    <Content />
  </Provider>
));
