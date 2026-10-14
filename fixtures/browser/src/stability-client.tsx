import { createApp, KeepAlive, nextTick, onScopeDispose, ref, Transition } from 'vue';
import type { Ref } from 'vue';
import { _component, bx, createCssHost, keyframes, useCss } from '@zerodep-vue/core';

import type { StabilityReport } from './contracts.ts';
const s = useCss();

function scene(label: string) {
  const value = ref(0);
  const visible = ref(false);
  const counts = { setups: 0, disposed: 0, reads: 0 };
  let lastRef: Ref<HTMLElement | null> | undefined;
  const Cell = _component(() => {
    counts.setups++;
    onScopeDispose(() => {
      counts.disposed++;
    });
    const element = ref<HTMLElement | null>(null);
    lastRef = element;
    const read = () => {
      counts.reads++;
      return (value.value % 40) + 10;
    };
    const size = bx(read());
    const pulse = keyframes({ from: s.opacity(0.5), to: s.opacity(1) });
    const style = s
      .width(size)
      .height(size)
      .color(`rgb(${value.value % 255}, 20, 40)`)
      .animationName(pulse)
      .animationDuration('1s');
    return (
      <article data-scene={label} ref={element} class={style}>
        {label}
      </article>
    );
  });
  const App = _component(() => (visible.value ? <Cell /> : null));
  return {
    App,
    value,
    visible,
    counts,
    get element() {
      return lastRef?.value;
    },
  };
}

const root = document.getElementById('app')!;
const aContainer = document.createElement('div');
const bContainer = document.createElement('div');
const shadowContainer = document.createElement('div');
const lifecycleContainer = document.createElement('div');
root.append(aContainer, bContainer, shadowContainer, lifecycleContainer);
const shadow = shadowContainer.attachShadow({ mode: 'open' });
const shadowMount = document.createElement('div');
shadow.appendChild(shadowMount);
const a = scene('changing');
const shadowScene = scene('shadow');
const hostA = createCssHost({ maxUnusedRules: 8 });
const hostB = createCssHost({ maxUnusedRules: 8 });
const shadowHost = createCssHost({ target: shadow, maxUnusedRules: 4 });
const appA = createApp(a.App).use(hostA);
appA.mount(aContainer);
const Protected = _component(() => (
  <div data-testid="protected" class={s.color('blue')}>
    protected
  </div>
));
const appB = createApp(Protected).use(hostB);
appB.mount(bContainer);
shadowScene.visible.value = true;
let shadowApp = createApp(shadowScene.App).use(shadowHost);
shadowApp.mount(shadowMount);

const lifecycleTarget = document.createElement('div');
document.head.appendChild(lifecycleTarget);
const lifecycleHost = createCssHost({ target: lifecycleTarget, maxUnusedRules: 0 });
const leaving = ref(true);
const tab = ref('a');
let finishLeave: (() => void) | undefined;
const lifecycle = { setups: 0, disposed: 0 };
const Cached = _component(({ name }: { name: string }) => {
  lifecycle.setups++;
  onScopeDispose(() => {
    lifecycle.disposed++;
  });
  const count = ref(0);
  return (
    <button
      data-testid="cached"
      class={s.color(name === 'a' ? 'red' : 'green').width(bx(count.value + 40))}
      onClick={() => count.value++}
    >
      {name}:{count.value}
    </button>
  );
});
const Leaving = _component(() => {
  const fade = keyframes({ from: s.opacity(1), to: s.opacity(0.5) });
  return (
    <div data-testid="leaving" class={s.color('purple').animation(`${fade} 1s infinite`)}>
      leaving
    </div>
  );
});
const Lifecycle = _component(() => (
  <section>
    <Transition
      css={false}
      onLeave={(_element, done) => {
        finishLeave = done;
      }}
    >
      {leaving.value ? <Leaving /> : null}
    </Transition>
    <button
      onClick={() => {
        leaving.value = false;
      }}
    >
      开始离场
    </button>
    <KeepAlive max={2}>
      <Cached key={tab.value} name={tab.value} />
    </KeepAlive>
    <button
      onClick={() => {
        tab.value = 'a';
      }}
    >
      缓存 A
    </button>
    <button
      onClick={() => {
        tab.value = 'b';
      }}
    >
      缓存 B
    </button>
    <button
      onClick={() => {
        tab.value = 'c';
      }}
    >
      缓存 C
    </button>
  </section>
));
const lifecycleApp = createApp(Lifecycle).use(lifecycleHost);
lifecycleApp.mount(lifecycleContainer);
let aDisposed = false;
let disposed = false;
function dispose() {
  if (disposed) return;
  disposed = true;
  finishLeave?.();
  if (!aDisposed) appA.unmount();
  appB.unmount();
  shadowApp.unmount();
  lifecycleApp.unmount();
  lifecycleTarget.remove();
}

window.__stability = {
  finishLeave: () => finishLeave?.(),
  lifecycle: () => ({ ...lifecycle, references: lifecycleHost.stats().ownedReferences }),
  dispose,
  async run(iterations): Promise<StabilityReport> {
    if (!Number.isInteger(iterations) || iterations < 1 || iterations > 5000 || aDisposed)
      throw new Error('Invalid stability run.');
    let maximumUnused = 0;
    let maximumRules = 0;
    let hiddenReads = 0;
    const originalShadowStyles = [...shadow.querySelectorAll('style')];
    for (let index = 0; index < iterations; index++) {
      a.value.value = index;
      a.visible.value = true;
      await nextTick();
      if (!a.element || getComputedStyle(a.element).width !== `${(index % 40) + 10}px`)
        throw new Error(`Mounted width mismatch at ${index}`);
      shadowScene.value.value = index + 1;
      a.value.value = index + 1;
      await nextTick();
      if (getComputedStyle(a.element).width !== `${((index + 1) % 40) + 10}px`)
        throw new Error(`Updated width mismatch at ${index}`);
      a.visible.value = false;
      await nextTick();
      const reads = a.counts.reads;
      a.value.value = index + 2;
      await nextTick();
      hiddenReads += a.counts.reads - reads;
      const stats = hostA.stats();
      maximumUnused = Math.max(maximumUnused, stats.unusedRules);
      maximumRules = Math.max(maximumRules, stats.rules);
      if (
        a.element !== null ||
        stats.ownedReferences !== 0 ||
        stats.unusedRules > 8 ||
        hiddenReads !== 0
      )
        throw new Error(`Resource/ref leak at ${index}: ${JSON.stringify(stats)}`);
    }
    const currentShadowStyles = [...shadow.querySelectorAll('style')];
    const shadowStyleIdentity =
      originalShadowStyles.length === currentShadowStyles.length &&
      originalShadowStyles.every((node, index) => node === currentShadowStyles[index]);
    appA.unmount();
    aDisposed = true;
    const sharedConsumerColor = getComputedStyle(bContainer.firstElementChild!).color;
    shadowApp.unmount();
    // 模拟自定义元素重新建立内容；样式宿主继续使用同一个 ShadowRoot。
    shadow.replaceChildren();
    const replacementMount = document.createElement('div');
    shadow.appendChild(replacementMount);
    const replacement = scene('shadow-remounted');
    replacement.visible.value = true;
    shadowApp = createApp(replacement.App).use(shadowHost);
    shadowApp.mount(replacementMount);
    await nextTick();
    const shadowColor = getComputedStyle(replacement.element!).color;
    const shadowWidth = getComputedStyle(replacement.element!).width;
    return {
      iterations,
      setups: a.counts.setups,
      disposed: a.counts.disposed,
      maximumUnused,
      maximumRules,
      hiddenReads,
      sharedConsumerColor,
      shadowColor,
      shadowWidth,
      shadowStyleIdentity,
    };
  },
};
window.__fixture = { host: hostA, unmount: dispose };
