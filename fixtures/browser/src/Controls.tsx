import { ref, shallowReactive, shallowRef, useId } from 'vue';
import type { Ref } from 'vue';
import { _component, bx, cx } from '@zerodep-vue/core';
import { Button } from '../../controls/Button.tsx';
import { ToggleButton } from '../../controls/ToggleButton.tsx';
import { TextInput } from '../../controls/TextInput.tsx';
import type { TextInputHandle } from '../../controls/TextInput.tsx';
import { ThemeRegion } from '../../controls/ThemeRegion.tsx';
import { ControlTheme, provideTheme, useCss } from '../../controls/theme.ts';

const IndependentRegion = _component(() => {
  provideTheme(new ControlTheme());
  return <Button data-testid="independent-button">独立区域</Button>;
});

/** 同一批真实组件同时进入默认/优化单测与浏览器，不用测试专用假按钮。 */
export const Controls = _component(() => {
  const palette = shallowRef(new ControlTheme());
  const s = useCss();
  provideTheme(palette);
  const state = shallowReactive({ text: ref('draft'), pressed: ref(false) });
  const clicks = ref(0);
  const submissions = ref(0);
  const submitted = ref('');
  const resets = ref(0);
  const disabled = ref(false);
  const loading = ref(false);
  const compact = ref(false);
  const override = ref(false);
  const width = ref(120);
  const fieldsetDisabled = ref(false);
  const fieldsetClicks = ref(0);
  const input = shallowRef<TextInputHandle | null>(null);
  const fieldId = useId();
  const readonly = ref(false);
  const invalid = ref(false);
  const commits = ref(0);
  const committed = ref('');
  const replaceable = shallowRef(new ControlTheme('rgb(234, 88, 12)'));
  const region = shallowReactive<{ theme: ControlTheme | Ref<ControlTheme> }>({
    theme: new ControlTheme(),
  });
  const external = s
    .padding(16)
    .backgroundColor('rgb(120, 30, 90)')
    .select('&:enabled:hover', s.backgroundColor('rgb(150, 40, 110)'));
  return (
    <section aria-label="控件验证" class={s.display('grid').gap(12)}>
      <h2>按钮与表单</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submissions.value++;
          submitted.value = state.text.value;
        }}
        onReset={(event) => {
          event.preventDefault();
          state.text.value = 'draft';
          resets.value++;
        }}
      >
        <label for={`${fieldId}-input`}>控件标题</label>
        <TextInput
          ref={input}
          id={`${fieldId}-input`}
          model={state.text}
          label="控件标题"
          name="title"
          readonly={readonly.value}
          maxlength={32}
          aria-invalid={invalid.value || undefined}
          aria-describedby={invalid.value ? `${fieldId}-help ${fieldId}-error` : `${fieldId}-help`}
          onCommit={(value) => {
            commits.value++;
            committed.value = value;
          }}
        />
        <p id={`${fieldId}-help`}>用于验证原生属性与表单模型。</p>
        {invalid.value && <p id={`${fieldId}-error`}>标题需要修改。</p>}
        <Button
          data-testid="action-button"
          disabled={disabled.value}
          loading={loading.value}
          compact={compact.value}
          class={cx(s.width(bx(width.value)), override.value && external)}
          onClick={() => {
            clicks.value++;
          }}
        >
          执行操作
        </Button>
        <ToggleButton
          data-testid="toggle-button"
          pressed={state.pressed}
          disabled={disabled.value}
          loading={loading.value}
          variant="outline"
        >
          固定项目
        </ToggleButton>
        <Button type="submit">提交控件表单</Button>
        <Button type="reset">重置控件表单</Button>
        <Button
          aria-label="增加次数"
          compact
          onClick={() => {
            clicks.value++;
          }}
        >
          <span aria-hidden="true">+</span>
        </Button>
      </form>
      <output data-testid="action-count">{clicks.value}</output>
      <output data-testid="toggle-state">{String(state.pressed.value)}</output>
      <div>
        <span
          data-testid="sibling-source"
          class={s.select(
            '& + span',
            s.color(bx(state.pressed.value ? 'rgb(37, 99, 235)' : 'black')),
          )}
        >
          状态：
        </span>
        <span data-testid="sibling-label">固定项目提示</span>
      </div>
      <output data-testid="submit-count">{submissions.value}</output>
      <output data-testid="submitted-title">{submitted.value}</output>
      <output data-testid="reset-count">{resets.value}</output>
      <output data-testid="commit-count">{commits.value}</output>
      <output data-testid="committed-title">{committed.value}</output>
      <button onClick={() => input.value?.focus()}>聚焦控件输入</button>
      <label>
        <input type="checkbox" v-model={readonly.value} />
        只读控件
      </label>
      <label>
        <input type="checkbox" v-model={invalid.value} />
        显示输入错误
      </label>
      <label>
        <input type="checkbox" v-model={disabled.value} />
        禁用控件
      </label>
      <label>
        <input type="checkbox" v-model={loading.value} />
        加载状态
      </label>
      <label>
        <input type="checkbox" v-model={compact.value} />
        紧凑按钮
      </label>
      <label>
        <input type="checkbox" v-model={override.value} />
        外部样式覆盖
      </label>
      <label>
        按钮宽度
        <input
          type="number"
          value={width.value}
          onInput={(event) => {
            width.value = Number((event.target as HTMLInputElement).value);
          }}
        />
      </label>
      <button
        onClick={() => {
          state.text = ref('replacement');
          state.pressed = ref(true);
        }}
      >
        替换控件 Ref
      </button>
      <button
        onClick={() => {
          palette.value = new ControlTheme('rgb(126, 34, 206)', 'rgb(107, 33, 168)');
        }}
      >
        切换控件主题
      </button>
      <IndependentRegion />
      <ThemeRegion theme={region.theme}>
        <Button data-testid="replaceable-region">可替换主题区域</Button>
      </ThemeRegion>
      <button
        onClick={() => {
          region.theme = new ControlTheme('rgb(22, 163, 74)');
        }}
      >
        替换区域对象
      </button>
      <button
        onClick={() => {
          region.theme = replaceable;
        }}
      >
        替换区域 Ref
      </button>
      <button
        onClick={() => {
          replaceable.value = new ControlTheme('rgb(8, 145, 178)');
        }}
      >
        更新区域 Ref
      </button>
      <label>
        <input type="checkbox" v-model={fieldsetDisabled.value} />
        禁用字段组
      </label>
      <fieldset disabled={fieldsetDisabled.value}>
        <legend>原生字段组</legend>
        <Button
          onClick={() => {
            fieldsetClicks.value++;
          }}
        >
          字段组操作
        </Button>
      </fieldset>
      <output data-testid="fieldset-count">{fieldsetClicks.value}</output>
    </section>
  );
});
