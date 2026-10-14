import { ref } from 'vue';
import {
  _component,
  bx,
  createCssContext,
  cx,
  globalCss,
  keyframes,
  SystemKeywords,
} from '@zerodep-vue/core';

const { useCss } = createCssContext(new SystemKeywords());
const image = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E';

/** 只验证 CSS 生成语义；不作为产品组件导出。 */
export const CssValues = _component(() => {
  const s = useCss();
  const x = ref(10);
  const y = ref(20);
  const label = ref('hello');
  const important = ref(true);
  const url = ref(image);
  const unrelated = ref(0);
  const memoColor = ref('black');
  let compositions = 0;
  const compose = () => {
    compositions++;
    return cx(s.color(memoColor.value), s.width(bx(x.value)));
  };
  const move = keyframes({
    from: s.transform('translateX(0px)'),
    to: s.transform(`translateX(${bx(x.value)}px)`),
  });
  // 普通类名保持原生 specificity；important 移除后，此规则应重新获胜。
  globalCss('css-value-external', {
    '.css-value-external.css-value-external': s.color('rgb(0, 0, 255)'),
  });
  return (
    <section aria-label="CSS 值验证">
      <div data-testid="css-memo" class={compose()} data-compositions={compositions}>
        组合调用验证
      </div>
      <output data-testid="css-unrelated">{unrelated.value}</output>
      <button
        onClick={() => {
          unrelated.value++;
        }}
      >
        更新无关 CSS 状态
      </button>
      <button
        onClick={() => {
          memoColor.value = 'purple';
        }}
      >
        更新 CSS 组合依赖
      </button>
      <div
        data-testid="css-template-transform"
        class={s.transform(`translate(${bx(x.value)}px, ${bx(y.value)}px)`)}
      >
        位移
      </div>
      <div
        data-testid="css-template-content"
        class={s.select('::before', s.content(`"${bx(label.value)}"`))}
      />
      <div data-testid="css-template-url" class={s.backgroundImage(`url("${bx(url.value)}")`)}>
        背景
      </div>
      <div
        data-testid="css-template-animation"
        class={s
          .animationName(move)
          .animationDuration('1s')
          .animationDelay('-1s')
          .animationFillMode('both')}
      >
        关键帧
      </div>
      <div
        data-testid="css-dynamic-important"
        class={cx(
          s.color(
            bx(important.value ? 'rgb(255, 0, 0) ! /* priority */ IMPORTANT' : 'rgb(255, 0, 0)'),
          ),
          'css-value-external',
        )}
      >
        动态优先级
      </div>
      <div
        data-testid="css-later-wins"
        class={cx(s.color('red !important'), s.color('rgb(0, 128, 0)'))}
      >
        后项覆盖
      </div>
      <button
        onClick={() => {
          x.value = 30;
          y.value = 40;
          label.value = 'updated ();';
          important.value = false;
        }}
      >
        更新 CSS 验证值
      </button>
      <button
        onClick={() => {
          important.value = true;
        }}
      >
        恢复 CSS 优先级
      </button>
    </section>
  );
});
