import { ref, shallowRef } from 'vue';
import { z } from 'zod';
import { _component, bx } from '@zerodep-vue/core';
import {
  Button,
  Checkbox,
  Drawer,
  Field,
  Input,
  Menu,
  RadioGroup,
  Scrollbar,
  Slider,
  Split,
  Switch,
  Textarea,
  useCss,
  useField,
} from '@zerodep-vue/ui';

const s = useCss();
s.overflow('hidden');
s.color('_primaryHover');
s.color(bx('_primary'));
const chain = s.display('flex').color('_primary').padding('_medium');
chain.color('_danger');
<Button density="compact" slotContent={{ 'data-test': 'value' }} />;
<Drawer open={ref(false)} title="标题" />;
<Menu items={[{ key: 'home', label: '首页', href: '/' }]} />;
<Slider value={ref(1)} />;
<Input value={ref('')} variant="underlined" clearable />;
<Textarea value={ref('')} rows={4} maxHeight="15em" />;
<Input inputRef={shallowRef<HTMLInputElement | null>()} />;
<Button elementRef={shallowRef<HTMLElement | null>()} />;
<Scrollbar viewportRef={shallowRef<HTMLDivElement | null>()} />;
<Checkbox value={ref(false)} indeterminate />;
<Switch value={ref(true)} slotThumb={{ 'data-part': 'thumb' }} />;
const FormProbe = _component(() => {
  const field = useField(ref('daily'), z.string(), { name: 'frequency' });
  return (
    <Field state={field} label="频率">
      <RadioGroup {...field.control} options={[{ value: 'daily', label: '每天' }]} />
    </Field>
  );
});
void FormProbe;
<Split sizes={ref({ main: 100 })} />;
// @ts-expect-error 发布声明仍严格检查未知主题名。
s.color('_missing');
// @ts-expect-error 动态绑定同样保留主题约束。
s.color(bx('_missing'));
// @ts-expect-error 发布声明中的连续调用仍保留主题约束。
chain.color('_missing_chain');
// @ts-expect-error 组件值必须保留原生 Ref 类型。
<Slider value={1} />;
// @ts-expect-error 文本输入不能接收数值模型。
<Input value={ref(1)} />;
// @ts-expect-error 自有组件仅通过明确的 Props 传入 DOM 引用。
<Input ref={ref()} />;
// @ts-expect-error 内容通过 children 或渲染函数 Props 传递。
<FormProbe v-slots={{ default: () => null }} />;
// @ts-expect-error 开关使用布尔模型。
<Switch value={ref('on')} />;
// @ts-expect-error 子节点内容由组件管理。
<Button slotContent={{ innerHTML: 'bad' }} />;
