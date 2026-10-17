import { computed, ref, shallowRef } from 'vue';
import { z } from 'zod';
import { _component, bx } from '@zerodep-vue/core';
import {
  Button,
  Checkbox,
  Drawer,
  Field,
  Input,
  LightTheme,
  Menu,
  RadioGroup,
  Select,
  Listbox,
  Scrollbar,
  Slider,
  Split,
  Switch,
  Textarea,
  useCss,
  useField,
  type FontSizeTokens,
  type UiThemeInput,
} from '@zerodep-vue/ui';

const s = useCss();
const users = [{ id: 1, name: 'Ada' }];
const user = shallowRef<(typeof users)[number] | null>(null);
<Select
  options={users}
  value={user}
  getKey={(item) => item.id}
  getLabel={(item) => item.name}
  renderOption={(item, state) => (state.selected ? item.name : item.name.toUpperCase())}
  onValueChange={(item) => item?.id}
/>;
<Listbox
  options={users}
  value={user}
  getKey={(item) => item.id}
  getLabel={(item) => item.name}
  aria-label="用户"
/>;
// @ts-expect-error 发布声明保持业务值字段推断。
<Select options={users} getKey={(item) => item.unknown} getLabel={(item) => item.name} />;
<Select
  options={users}
  // @ts-expect-error 发布后的泛型组件仍要求可写 Ref。
  value={computed(() => user.value)}
  getKey={(item) => item.id}
  getLabel={(item) => item.name}
/>;
s.overflow('hidden');
s.color('_primaryHover');
s.color(bx('_primary'));
s.fontSize('_medium');
s.fontSize('medium');
const fontSize: FontSizeTokens = new LightTheme().fontSize;
fontSize._medium = ref('large');
const theme: UiThemeInput = {
  fontSize: { _medium: 'medium' },
  fontWeight: { _regular: 'normal' },
  lineHeight: { _normal: 'normal' },
  zIndex: { _modal: 'auto' },
};
theme.fontSize = { _medium: ref(undefined) };
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
// @ts-expect-error 完整字号字段仍须为具体 CSS 值。
fontSize._medium = undefined;
// @ts-expect-error 原始值类型不能因复用 CSS 类型而放宽。
fontSize._medium = true;
// @ts-expect-error 过渡时长须保留单位。
const invalidTheme: UiThemeInput = { transitionDuration: { _fast: 100 } };
// @ts-expect-error 主题输入保留完整成员名检查。
const missingTheme: UiThemeInput = { fontSize: { _missing: '1rem' } };
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
