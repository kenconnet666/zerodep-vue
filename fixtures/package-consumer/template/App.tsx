import { ref, shallowRef, Suspense } from 'vue';
import type { Ref, VNodeChild } from 'vue';
import {
  _component,
  For,
  bx,
  createCssContext,
  SystemKeywords,
  keyframes,
  globalCss,
} from '@zerodep-vue/core';
const { keywords, useCss } = createCssContext(new SystemKeywords());

const s = useCss();

export class Palette extends SystemKeywords {
  override readonly color = {
    /** 消费应用的强调色，保留到泛型关键字视图。 */
    _brand: '#2563eb',
  };
  constructor(brand = '#2563eb') {
    super();
    this.color._brand = brand;
  }
}
export const palettes = { light: new Palette(), dark: new Palette('#93c5fd') };
export const themedContext = createCssContext(palettes.light);
export const themed = themedContext.useCss();
export const themedKeywords = themedContext.keywords;

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
  const currentPalette = shallowRef(palettes.light);
  const themedContext = createCssContext(currentPalette);
  const themed = themedContext.useCss();
  const themedKeywords = themedContext.keywords;
  const text = ref('package-state');
  const gap = ref('12px');
  const fade = keyframes({ from: s.opacity(0.5), to: s.opacity(1) });
  globalCss('consumer-base', { body: s.margin(0) });
  return (
    <main
      class={themed
        .padding(bx(gap.value))
        .color(themedKeywords.color._brand)
        .display(keywords.display.flex)
        .animationName(fade)
        .animationDuration('1s')
        .select(':hover', themed.color('purple'))}
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
