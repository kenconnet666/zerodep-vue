/** @jsxImportSource @zerodep-vue/tsx */
import { ref, Suspense } from 'vue';
import type { Ref, VNodeChild } from 'vue';
import { _component, For } from '@zerodep-vue/tsx';
import {
  bx,
  createCss,
  SystemKeywords,
  keywords,
  keyframes,
  defineVars,
  createTheme,
  globalCss,
} from '@zerodep-vue/css';

export class Palette extends SystemKeywords {
  override readonly color = {
    /** 消费应用的强调色，保留到泛型关键字视图。 */
    _brand: '#2563eb',
  };
}
export const { css: themed, keywords: themedKeywords } = createCss(new Palette());

export interface InputHandle {
  focus(): void;
}
export const Field = _component(
  ({ model, label = '姓名' }: { model: Ref<string>; label?: string }, { expose }) => {
    const input = ref<HTMLInputElement | null>(null);
    expose({ focus: () => input.value?.focus() } satisfies InputHandle);
    return (
      <label>
        {label}
        <input ref={input} v-model={model.value} />
      </label>
    );
  },
);
const Panel = _component(({ children, footer }: { children?: VNodeChild; footer?: VNodeChild }) => (
  <section>
    {children}
    <footer>{footer}</footer>
  </section>
));
const Async = _component(async () => {
  await Promise.resolve();
  return <strong>async-package-ready</strong>;
});
export const App = _component(() => {
  const text = ref('package-state');
  const gap = ref('12px');
  const vars = defineVars('consumer', { padding: '4px' });
  const fade = keyframes({ from: { opacity: 0.5 }, to: { opacity: 1 } });
  globalCss('consumer-base', { body: { margin: 0 } });
  return (
    <main
      class={themed(createTheme(vars, { padding: bx(gap.value) }), {
        padding: vars.padding,
        color: themedKeywords.color._brand,
        display: keywords.display.flex,
        animationName: fade,
        animationDuration: '1s',
        ':hover': { color: 'purple' },
      })}
    >
      <Panel footer={<b>footer-content</b>}>
        <Field model={text} />
      </Panel>
      <For each={[{ id: 1, label: 'typed-row' }]} getKey={(row) => row.id}>
        {(row) => <span>{row.label}</span>}
      </For>
      <Suspense>
        <Async />
      </Suspense>
    </main>
  );
});
