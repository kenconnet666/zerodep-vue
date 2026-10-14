import { computed, ref, shallowRef } from 'vue';

import { Button } from '../../controls/Button.tsx';
import { ToggleButton } from '../../controls/ToggleButton.tsx';
import { TextInput } from '../../controls/TextInput.tsx';
import type { TextInputHandle } from '../../controls/TextInput.tsx';
import { ThemeRegion } from '../../controls/ThemeRegion.tsx';
import { ControlTheme } from '../../controls/theme.ts';
import { keywords, useCss as useControlCss } from '../../controls/theme.ts';
import { createCssContext, SystemKeywords } from '@zerodep-vue/core';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();
export const explicitThemeStyle = useControlCss().backgroundColor(keywords.color._brand);
export const controls = (
  <>
    <Button
      type="submit"
      variant="outline"
      class={s.padding(12)}
      onClick={(event) => event.preventDefault()}
    >
      提交
    </Button>
    <ToggleButton pressed={ref(false)} aria-label="固定" compact />
    <TextInput model={ref('draft')} label="标题" name="title" />
  </>
);
// @ts-expect-error 原生按钮类型不能任意扩展。
<Button type="link" />;
// @ts-expect-error 外观只接受已实现的有限选项。
<Button variant="unknown" />;
// @ts-expect-error 外部 class 不恢复对象作者入口。
<Button class={{ color: 'red' }} />;
// @ts-expect-error 切换状态需要可写 Ref。
<ToggleButton pressed={computed(() => false)} />;
// @ts-expect-error 输入模型必须为字符串。
<TextInput model={ref(123)} label="标题" />;

const input = shallowRef<TextInputHandle | null>(null);
export const inputContract = (
  <TextInput
    model={ref('')}
    label="标题"
    ref={input}
    required
    readonly
    maxlength={12}
    style={{ minWidth: '8rem' }}
    onCommit={(value) => value.toUpperCase()}
  />
);
input.value?.focus({ preventScroll: true });
// @ts-expect-error 公开句柄不冒充内部 input 元素。
input.value?.select();
// @ts-expect-error 编辑模型拒绝 getter-only computed。
<TextInput model={computed(() => 'readonly')} label="标题" />;
// @ts-expect-error Ref 是唯一数据来源，不另外接收普通 value。
<TextInput model={ref('')} value="competing" label="标题" />;
// @ts-expect-error 提交通知保留字符串类型。
<TextInput model={ref('')} label="标题" onCommit={(value: number) => value.toFixed()} />;
export const themedControls = (
  <ThemeRegion theme={computed(() => new ControlTheme())}>
    <TextInput model={ref('')} label="区域输入" />
  </ThemeRegion>
);
// @ts-expect-error 区域来源须包含控件主题契约。
<ThemeRegion theme={new SystemKeywords()} />;
