import { ref } from 'vue';
import { bx } from '@zerodep-vue/core';
import { Button, Drawer, Input, Menu, Slider, Split, Textarea, useCss } from '@zerodep-vue/ui';

const s = useCss();
s.overflow('hidden');
s.color('_primaryHover');
s.color(bx('_primary'));
<Button density="compact" slotContent={{ 'data-test': 'value' }} />;
<Drawer open={ref(false)} title="标题" />;
<Menu items={[{ key: 'home', label: '首页', href: '/' }]} />;
<Slider value={ref(1)} />;
<Input value={ref('')} variant="underlined" clearable />;
<Textarea value={ref('')} rows={4} maxHeight="15em" />;
<Split sizes={ref({ main: 100 })} />;
// @ts-expect-error 发布声明仍严格检查未知主题名。
s.color('_missing');
// @ts-expect-error 动态绑定同样保留主题约束。
s.color(bx('_missing'));
// @ts-expect-error 组件值必须保留原生 Ref 类型。
<Slider value={1} />;
// @ts-expect-error 文本输入不能接收数值模型。
<Input value={ref(1)} />;
// @ts-expect-error 子节点内容由组件管理。
<Button slotContent={{ innerHTML: 'bad' }} />;
