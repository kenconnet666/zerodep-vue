/** @jsxImportSource @zerodep-vue/tsx */
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  provide,
  ref,
  shallowReactive,
  shallowRef,
  Teleport,
} from 'vue';
import type { InjectionKey, Ref, VNodeChild } from 'vue';
import { For, _component } from '@zerodep-vue/tsx';
import { bx, css, createCss, SystemKeywords } from '@zerodep-vue/css';
import { NButton, NConfigProvider, NDataTable, NInput, NSelect } from '@fixture/naive';
import type { DataTableColumns } from '@fixture/naive';
import type { InitialState } from './contracts.ts';

const labelKey: InjectionKey<string> = Symbol('label');
const Input = _component(
  ({ model, label = '自有输入' }: { model: Ref<string>; label?: string }, { expose }) => {
    const input = ref<HTMLInputElement | null>(null);
    expose({ focus: () => input.value?.focus() });
    return (
      <input
        ref={input}
        aria-label={label}
        value={model.value}
        onInput={(event) => {
          model.value = (event.target as HTMLInputElement).value;
        }}
      />
    );
  },
);
const Label = _component(({ children }: { children?: VNodeChild }) => {
  const prefix = inject(labelKey, 'missing');
  return (
    <span data-testid="provided">
      {prefix}
      {children}
    </span>
  );
});
const AsyncContent = defineAsyncComponent(() => import('./AsyncContent.tsx'));

class RegionTheme extends SystemKeywords {
  override readonly color: { _brand: string };
  constructor(color: string) {
    super();
    this.color = { _brand: color };
  }
}
const Region = _component(({ theme, name }: { theme: Ref<RegionTheme>; name: string }) => {
  const themed = createCss(theme);
  return (
    <Teleport to="#dialogs">
      <div data-testid={`region-${name}`} class={themed({ color: themed.keywords.color._brand })}>
        {name}
      </div>
    </Teleport>
  );
});

interface Row {
  id: number;
  name: string;
}
const Content = _component(({ initial }: { initial: InitialState }) => {
  const holder = shallowReactive({ text: ref(initial.text) });
  const selected = ref<string | null>('a');
  const width = ref('120px');
  const disabled = ref(false);
  const show = ref(true);
  const asyncVisible = ref(false);
  const theme = shallowRef(new RegionTheme(initial.color));
  const otherTheme = shallowRef(new RegionTheme('blue'));
  const rows = ref<Row[]>([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
  const reversed = computed(() => [...rows.value].reverse());
  const inputHandle = ref<{ focus(): void } | null>(null);
  const columns: DataTableColumns<Row> = [
    { title: '名称', key: 'name', render: (row) => <Label>{row.name}</Label> },
  ];
  const fade = css.keyframes({ from: { opacity: 0.5 }, to: { opacity: 1 } });
  const vars = css.defineVars('browser-card', { gap: '4px' });
  css.global('browser-reset', { body: { margin: 0, fontFamily: 'sans-serif' } });
  provide(labelKey, 'user:');
  onMounted(() => {
    window.__mounted = true;
  });
  return (
    <main class={css({ padding: 24, display: 'grid', gap: 16 })}>
      <h1>真实源码编译与混用验收</h1>
      <NConfigProvider themeOverrides={{ common: { primaryColor: '#a020f0' } }}>
        <section>
          <NInput
            value={holder.text.value}
            onUpdateValue={(value: string) => {
              holder.text.value = value;
            }}
            inputProps={{ 'aria-label': 'Naive 输入' }}
          />
          <Input ref={inputHandle} model={holder.text} />
          <output data-testid="state">{holder.text.value}</output>
          <NButton
            type="primary"
            data-testid="reset"
            onClick={() => {
              holder.text.value = 'reset';
            }}
          >
            <Label>重置</Label>
          </NButton>
          <button
            onClick={() => {
              holder.text = ref('replacement');
            }}
          >
            替换 Ref
          </button>
          <button onClick={() => inputHandle.value?.focus()}>聚焦</button>
          <NSelect
            value={selected.value}
            onUpdateValue={(value: string) => {
              selected.value = value;
            }}
            options={[
              { label: 'Alpha', value: 'a' },
              { label: 'Beta', value: 'b' },
            ]}
          />
          <output data-testid="selection">{selected.value}</output>
          <NDataTable columns={columns} data={rows.value} rowKey={(row: Row) => row.id} />
        </section>
      </NConfigProvider>
      <section>
        <button
          data-testid="styled"
          disabled={disabled.value}
          class={css({
            width: bx(width.value),
            color: 'rgb(10, 20, 30)',
            backgroundColor: 'rgb(240, 240, 240)',
            ':hover': { color: 'rgb(40, 50, 60)', backgroundColor: 'rgb(200, 200, 200)' },
            ':disabled': { color: 'rgb(70, 80, 90)', backgroundColor: 'rgb(150, 150, 150)' },
          })}
        >
          样式
        </button>
        <button
          onClick={() => {
            width.value = width.value === '120px' ? '180px' : '120px';
          }}
        >
          调整宽度
        </button>
        <button
          onClick={() => {
            width.value = 'initial';
          }}
        >
          撤销宽度绑定
        </button>
        <button
          onClick={() => {
            width.value = '120px';
          }}
        >
          恢复宽度绑定
        </button>
        <button
          onClick={() => {
            disabled.value = !disabled.value;
          }}
        >
          切换禁用
        </button>
        <div
          data-testid="variables"
          class={css(css.createTheme(vars, { gap: bx(width.value) }), { padding: vars.gap })}
        />
        {show.value && (
          <div data-testid="animation" class={css({ animation: `${fade} 2s linear infinite` })}>
            动画
          </div>
        )}
        <button
          onClick={() => {
            show.value = !show.value;
          }}
        >
          切换区域
        </button>
        {show.value && <Region theme={theme} name="a" />}
        <Region theme={otherTheme} name="b" />
        <button
          onClick={() => {
            theme.value = new RegionTheme('green');
          }}
        >
          更换主题
        </button>
      </section>
      <section>
        <For each={rows.value} getKey={(row) => row.id}>
          {(row) => <input data-testid={`row-${row.id}`} value={row.name} />}
        </For>
        <button
          onClick={() => {
            rows.value = reversed.value;
          }}
        >
          反转列表
        </button>
        <button
          onClick={async () => {
            asyncVisible.value = true;
            await nextTick();
          }}
        >
          动态加载
        </button>
        {asyncVisible.value && <AsyncContent />}
      </section>
    </main>
  );
});

// 普通 Vue TSX 父组件包裹自有组件，内部继续使用 Naive 组件及旧 slot 协议。
export const App = defineComponent<{ initial: InitialState }>(
  ({ initial }) =>
    () => <Content initial={initial} />,
  { props: ['initial'] },
);
