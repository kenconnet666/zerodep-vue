import { computed, ref } from 'vue';
import { useCss } from '@zerodep-vue/core';
import { Button } from '../../controls/Button.tsx';
import { ToggleButton } from '../../controls/ToggleButton.tsx';
import { TextInput } from '../../controls/TextInput.tsx';
import { keywords, useCss as useControlCss } from '../../controls/theme.ts';

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
