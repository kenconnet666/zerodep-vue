import { afterEach, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { computed, createSSRApp, nextTick, ref, shallowReactive, shallowRef, Teleport } from 'vue';
import type { Ref } from 'vue';
import { renderToString } from '@vue/server-renderer';
import {
  _component,
  bx,
  createCssHost,
  createCssContext,
  getCssHost,
  SystemKeywords,
} from '@zerodep-vue/core';
import type { CssHost } from '@zerodep-vue/core';
import { Button } from '../../../../fixtures/controls/Button.tsx';
import { ToggleButton } from '../../../../fixtures/controls/ToggleButton.tsx';
import { TextInput } from '../../../../fixtures/controls/TextInput.tsx';
import type { TextInputHandle } from '../../../../fixtures/controls/TextInput.tsx';
import { ThemeRegion } from '../../../../fixtures/controls/ThemeRegion.tsx';
import {
  ControlTheme,
  useTheme,
  provideTheme,
  useCss as useControlCss,
} from '../../../../fixtures/controls/theme.ts';

const { useCss } = createCssContext(new SystemKeywords());

const mounted: {
  wrapper: VueWrapper;
  host: CssHost;
  target: HTMLElement;
  container: HTMLElement;
}[] = [];
afterEach(() => {
  for (const { wrapper, host, target, container } of mounted.splice(0)) {
    wrapper.unmount();
    expect(host.stats().ownedReferences).toBe(0);
    host.dispose();
    target.remove();
    container.remove();
  }
});
function render(App: Parameters<typeof mount>[0]) {
  const target = document.createElement('div');
  document.head.append(target);
  const host = createCssHost({ target, maxUnusedRules: 0 });
  const container = document.createElement('div');
  document.body.append(container);
  const wrapper = mount(App, { attachTo: container, global: { plugins: [host] } });
  mounted.push({ wrapper, host, target, container });
  return { wrapper, host, target };
}

test('button attrs, defaults and loading prevent duplicate callbacks and restore interaction', async () => {
  const loading = ref(false);
  const disabled = ref(false);
  let calls = 0;
  const App = _component(() => (
    <Button
      id="save"
      title="保存标题"
      loading={loading.value}
      disabled={disabled.value}
      onClick={() => {
        calls++;
      }}
    >
      保存
    </Button>
  ));
  const { wrapper } = render(App);
  const button = wrapper.get('button');
  expect(button.attributes()).toMatchObject({ id: 'save', title: '保存标题', type: 'button' });
  expect(button.text()).toBe('保存');
  await button.trigger('click');
  expect(calls).toBe(1);
  loading.value = true;
  await nextTick();
  expect(button.element.disabled).toBe(true);
  expect(button.attributes('aria-busy')).toBe('true');
  expect(button.get('[role=status]').attributes('aria-label')).toBe('正在处理');
  button.element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(calls).toBe(1);
  loading.value = false;
  disabled.value = true;
  await nextTick();
  expect(button.attributes('aria-busy')).toBeUndefined();
  expect(button.find('[role=status]').exists()).toBe(false);
  button.element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(calls).toBe(1);
  disabled.value = false;
  await nextTick();
  await button.trigger('click');
  expect(calls).toBe(2);
});

test('toggle and input wrappers follow replacement Refs and invoke each callback once', async () => {
  const firstPressed = ref(false);
  const firstText = ref('first');
  const holder = shallowReactive({ pressed: firstPressed, text: firstText });
  let calls = 0;
  const App = _component(() => (
    <>
      <ToggleButton
        pressed={holder.pressed}
        aria-label="固定"
        onClick={() => {
          calls++;
        }}
      >
        切换
      </ToggleButton>
      <TextInput model={holder.text} label="标题" />
    </>
  ));
  const { wrapper } = render(App);
  const toggle = wrapper.get('button');
  expect(toggle.attributes('aria-pressed')).toBe('false');
  await toggle.trigger('click');
  expect(firstPressed.value).toBe(true);
  expect(calls).toBe(1);
  await wrapper.get('input').setValue('edited');
  expect(firstText.value).toBe('edited');
  holder.pressed = ref(false);
  holder.text = ref('replacement');
  await nextTick();
  expect(toggle.attributes('aria-pressed')).toBe('false');
  expect(wrapper.get('input').element.value).toBe('replacement');
  await toggle.trigger('click');
  await wrapper.get('input').setValue('latest');
  expect(holder.pressed.value).toBe(true);
  expect(holder.text.value).toBe('latest');
  expect(firstText.value).toBe('edited');
  expect(firstPressed.value).toBe(true);
  expect(calls).toBe(2);
});

test('shared buttons preserve class forwarding, independent branches and reactive theme bindings', async () => {
  const palette = shallowRef(new ControlTheme());
  const width = ref(120);
  const compact = ref(false);
  const s = useCss();
  const App = _component(() => {
    provideTheme(palette);
    return (
      <>
        <Button data-test="base">普通</Button>
        <Button
          data-test="custom"
          compact={compact.value}
          class={s.width(bx(width.value))}
          style={{ minWidth: '80px' }}
        >
          定制
        </Button>
      </>
    );
  });
  const { wrapper, host, target } = render(App);
  const base = wrapper.get('[data-test=base]');
  const custom = wrapper.get('[data-test=custom]');
  const baseClass = base.attributes('class');
  const customClass = custom.attributes('class');
  const rules = host.stats().activeRules;
  expect(rules).toBeGreaterThan(0);
  expect(custom.attributes('style')).toContain('120px');
  expect(custom.attributes('style')).toContain('min-width: 80px');
  width.value = 180;
  palette.value = new ControlTheme('rgb(126, 34, 206)');
  await nextTick();
  expect(base.attributes('class')).toBe(baseClass);
  expect(custom.attributes('class')).toBe(customClass);
  expect(custom.attributes('style')).toContain('180px');
  expect(base.attributes('style')).toContain('rgb(126, 34, 206)');
  expect(host.stats().activeRules).toBe(rules);
  compact.value = true;
  await nextTick();
  expect(custom.attributes('class')).not.toBe(customClass);
  expect(base.attributes('class')).toBe(baseClass);
  expect(target.textContent).toContain('padding:8px 12px;');
  expect(target.textContent).toContain('padding:4px 8px;');
});

test('fixture provider follows replaced objects and Ref containers through nested regions and Teleport', async () => {
  const first = shallowRef(new ControlTheme('red'));
  const state = shallowReactive<{ theme: ControlTheme | Readonly<Ref<ControlTheme>> }>({
    theme: first,
  });
  const portal = document.createElement('div');
  document.body.append(portal);
  const Leaf = _component(() => {
    const s = useControlCss();
    const theme = useTheme();
    return (
      <>
        <span data-test="regional" class={s.color('_brand')}>
          区域
        </span>
        <span data-test="mapping" class={s.color(bx(theme.color._brand))}>
          区域映射
        </span>
        <Teleport to={portal}>
          <span data-test="portal" class={s.color('_brand')}>
            弹出内容
          </span>
        </Teleport>
      </>
    );
  });
  const App = _component(() => (
    <ThemeRegion theme={state.theme}>
      <Leaf />
      <ThemeRegion theme={new ControlTheme('purple')}>
        <Button data-test="nested">独立覆盖</Button>
      </ThemeRegion>
    </ThemeRegion>
  ));
  const { wrapper, host } = render(App);
  try {
    const regional = wrapper.get('[data-test=regional]');
    const className = regional.attributes('class');
    const rules = host.stats().activeRules;
    const expectColor = (value: string) => {
      expect(regional.attributes('style')).toContain(value);
      expect(portal.querySelector('span')?.getAttribute('style')).toContain(value);
      expect(wrapper.get('[data-test=nested]').attributes('style')).toContain('purple');
      expect(wrapper.get('[data-test=mapping]').attributes('style')).toContain(value);
      expect(regional.attributes('class')).toBe(className);
      expect(host.stats().activeRules).toBe(rules);
    };
    expectColor('red');
    first.value = new ControlTheme('blue');
    await nextTick();
    expectColor('blue');
    state.theme = new ControlTheme('green');
    await nextTick();
    expectColor('green');
    const second = shallowRef(new ControlTheme('orange'));
    state.theme = second;
    await nextTick();
    expectColor('orange');
    first.value = new ControlTheme('black');
    second.value = new ControlTheme('teal');
    await nextTick();
    expectColor('teal');
    wrapper.unmount();
    expect(portal.childNodes.length).toBe(0);
    expect(host.stats().ownedReferences).toBe(0);
  } finally {
    wrapper.unmount();
    portal.remove();
  }
});

test('fixture input forwards native attrs, exposes focus and separates model writes from commits', async () => {
  const original = ref('draft');
  let writes = 0;
  const state = shallowReactive<{ model: Ref<string> }>({
    model: computed({
      get: () => original.value,
      set: (next: string) => {
        writes++;
        original.value = next;
      },
    }),
  });
  const handle = shallowRef<TextInputHandle | null>(null);
  const show = ref(true);
  const commits: string[] = [];
  let inputs = 0;
  const attrs = shallowReactive<{ id?: string; title?: string; readonly?: boolean }>({
    id: 'native-field',
    title: '说明',
  });
  const App = _component(
    () =>
      show.value && (
        <TextInput
          {...attrs}
          ref={handle}
          model={state.model}
          label="完整输入"
          name="draft"
          required
          maxlength={12}
          aria-describedby="field-help"
          style={{ minWidth: '80px' }}
          onInput={() => {
            inputs++;
          }}
          onCommit={(value) => commits.push(value)}
        />
      ),
  );
  const { wrapper } = render(App);
  const input = wrapper.get('input');
  expect(input.attributes()).toMatchObject({
    id: 'native-field',
    title: '说明',
    name: 'draft',
    maxlength: '12',
    'aria-describedby': 'field-help',
  });
  expect(input.element.required).toBe(true);
  expect(input.element.style.minWidth).toBe('80px');
  expect(handle.value).not.toBeNull();
  handle.value!.focus();
  expect(document.activeElement).toBe(input.element);
  input.element.value = 'edited';
  await input.trigger('input');
  expect(original.value).toBe('edited');
  expect(writes).toBe(1);
  expect(inputs).toBe(1);
  expect(commits).toEqual([]);
  await input.trigger('change');
  expect(commits).toEqual(['edited']);
  original.value = 'reset';
  await nextTick();
  expect(input.element.value).toBe('reset');
  expect(commits).toEqual(['edited']);
  state.model = ref('replacement');
  delete attrs.title;
  attrs.readonly = true;
  await nextTick();
  expect(input.element.value).toBe('replacement');
  expect(input.attributes('title')).toBeUndefined();
  expect(input.element.readOnly).toBe(true);
  attrs.readonly = false;
  await nextTick();
  await input.setValue('latest');
  expect(state.model.value).toBe('latest');
  expect(original.value).toBe('reset');
  expect(writes).toBe(1);
  expect(commits).toEqual(['edited', 'latest']);
  show.value = false;
  await nextTick();
  expect(handle.value).toBeNull();
  expect(wrapper.find('input').exists()).toBe(false);
});

test('fixture input preserves native IME composition before committing a complete value', async () => {
  const model = ref('before');
  const commits: string[] = [];
  const App = _component(() => (
    <TextInput model={model} label="组合输入" onCommit={(value) => commits.push(value)} />
  ));
  const { wrapper } = render(App);
  const input = wrapper.get('input');
  await input.trigger('compositionstart');
  input.element.value = '拼';
  await input.trigger('input');
  expect(model.value).toBe('before');
  input.element.value = '拼音';
  await input.trigger('compositionend');
  expect(model.value).toBe('拼音');
  expect(commits).toEqual([]);
  await input.trigger('change');
  expect(commits).toEqual(['拼音']);
});

test('fixture provider keeps actual SSR styles isolated between concurrent requests', async () => {
  const makePage = (color: string) =>
    _component(() => (
      <ThemeRegion theme={new ControlTheme(color)}>
        <Button>SSR fixture</Button>
      </ThemeRegion>
    ));
  const first = {};
  const second = {};
  try {
    const [red, blue] = await Promise.all([
      renderToString(createSSRApp(makePage('red')), first),
      renderToString(createSSRApp(makePage('blue')), second),
    ]);
    expect(red).toContain('SSR fixture');
    expect(red).toContain('red');
    expect(red).not.toContain('blue');
    expect(blue).toContain('blue');
    expect(blue).not.toContain('red');
    expect(getCssHost(first)).toBeDefined();
    expect(getCssHost(second)).toBeDefined();
    expect(getCssHost(first)).not.toBe(getCssHost(second));
    for (const context of [first, second]) {
      const host = getCssHost(context)!;
      expect(host.renderStyles()).toContain('display:inline-flex');
      expect(host.snapshot().length).toBeGreaterThan(0);
      // SSR 结束后规则仍可输出，但不继续持有元素租约和动态订阅。
      expect(host.stats().ownedReferences).toBe(0);
    }
  } finally {
    getCssHost(first)?.dispose();
    getCssHost(second)?.dispose();
  }
});
