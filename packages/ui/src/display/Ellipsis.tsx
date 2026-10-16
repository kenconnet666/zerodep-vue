import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssInput } from '@zerodep-vue/core';
import { computed, onMounted, onUpdated, ref, shallowRef, useId, watchEffect } from 'vue';
import type { HTMLAttributes, Ref, VNodeChild } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';

export interface EllipsisProps extends /* @vue-ignore */ Omit<HTMLAttributes, 'class'> {
  /** 最大显示行数，默认 1；必须是正整数，单行和多行均保留完整内容。 */
  lines?: number | undefined;
  /** 内容溢出时显示原生展开/收起按钮；默认关闭。 */
  expandable?: boolean | undefined;
  /** 可写展开状态；省略时每个实例持有独立的 Ref(false)。 */
  expanded?: Ref<boolean>;
  /** 首次可测量及实际裁剪状态变化时调用；展开时报告 false。 */
  onOverflowChange?: (overflowing: boolean) => void;
  /** 约束外层宽度及继承样式；外部链式样式最后组合。 */
  class?: CssInput;
  /** 文字及非交互行内内容；交互控件放在裁剪区域之外。 */
  children?: VNodeChild;
  /** 内容由 children 管理，不接受替换子树的 DOM 属性。 */
  innerHTML?: never;
  textContent?: never;
}

/** CSS 裁剪与可选展开独立于基础排版；不测量字符数，也不截断字符串或 VNode。 */
export const Ellipsis = _component(
  ({
    lines = 1,
    expandable = false,
    expanded = ref(false),
    onOverflowChange,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: EllipsisProps) => {
    const s = useCss();
    const lang = useLang();
    const root = shallowRef<HTMLElement>();
    const content = shallowRef<HTMLElement>();
    const button = shallowRef<HTMLButtonElement>();
    const mounted = ref(false);
    const showToggle = ref(expanded.value);
    const needsMeasurement = computed(() => expandable || onOverflowChange !== undefined);
    const contentId = `zv-ellipsis-${useId()}`;
    const lineCount = computed(() => {
      if (!Number.isInteger(lines) || lines < 1)
        throw new RangeError('Ellipsis lines 必须是正整数。');
      return lines;
    });
    const containerStyle = s.display('block').minWidth(0).maxWidth('100%');
    const contentStyle = s.display('block').minWidth(0).overflowWrap('anywhere');
    const singleLine = s.overflow('hidden').whiteSpace('nowrap').textOverflow('ellipsis');
    const multipleLines = s
      .overflow('hidden')
      .display('-webkit-box')
      .WebkitBoxOrient('vertical')
      .WebkitLineClamp(bx(lineCount.value))
      .lineClamp(bx(lineCount.value));
    const toggleStyle = s
      .font('inherit')
      .color('_primary')
      .backgroundColor('transparent')
      .border(0)
      .borderRadius('_small')
      .margin(0)
      .padding('0.125em 0')
      .cursor('pointer')
      .textAlign('start')
      .textDecorationLine('underline')
      .textUnderlineOffset('0.15em')
      .select('&:hover', s.color('_primaryHover'))
      .select('&:active', s.color('_primaryPressed'))
      .select(
        '&:focus-visible',
        s
          .outlineColor('_focusRing')
          .outlineStyle('solid')
          .outlineWidth('0.125em')
          .outlineOffset('0.125em'),
      )
      .select(
        '@media (forced-colors: active)',
        s.select('&:focus-visible', s.outlineColor('Highlight')),
      );

    let scheduleMeasure: (() => void) | undefined;
    let lastReportedOverflow: boolean | undefined;
    onMounted(() => {
      mounted.value = true;
    });
    onUpdated(() => scheduleMeasure?.());
    watchEffect(
      (onCleanup) => {
        // 纯 CSS 省略不分配观察器；SSR 和 hydration 首屏也不读取 DOM 尺寸。
        if (!mounted.value) return;
        // 内联回调会随父级重绘更换身份，但不应重新建立测量或重复上报同一状态。
        if (!needsMeasurement.value) {
          showToggle.value = false;
          return;
        }
        const canExpand = expandable;
        const element = content.value;
        const container = root.value;
        const view = element?.ownerDocument.defaultView;
        if (!element || !container || !view) return;
        let active = true;
        let frame: number | undefined;
        const measure = () => {
          // display:none 或尚未进入布局的内容暂不报告，显示后由尺寸观察器重新测量。
          if (!element.clientWidth && !element.clientHeight) return;
          const overflowing =
            !expanded.value &&
            (element.scrollWidth > element.clientWidth ||
              element.scrollHeight > element.clientHeight);
          const nextToggle = canExpand && (expanded.value || overflowing);
          if (!nextToggle && button.value === element.ownerDocument.activeElement)
            element.focus({ preventScroll: true });
          // 测量完成后才更新按钮，展开后再收起不会短暂移除当前聚焦的按钮。
          showToggle.value = nextToggle;
          const notify = onOverflowChange;
          if (notify && lastReportedOverflow !== overflowing) {
            lastReportedOverflow = overflowing;
            notify(overflowing);
          }
        };
        const schedule = () => {
          if (!active || frame !== undefined) return;
          frame = view.requestAnimationFrame(() => {
            frame = undefined;
            if (active) measure();
          });
        };
        scheduleMeasure = schedule;
        const resize =
          typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(schedule);
        resize?.observe(container);
        resize?.observe(element);
        const mutations = new MutationObserver(schedule);
        mutations.observe(element, {
          subtree: true,
          childList: true,
          characterData: true,
          attributes: true,
        });
        // 继承字号、字重、方向等变化可能只改变 scrollWidth，而不改变内容框的宽高。
        for (
          let ancestor: HTMLElement | null = container;
          ancestor;
          ancestor = ancestor.parentElement
        )
          mutations.observe(ancestor, {
            attributes: true,
            attributeFilter: ['class', 'style', 'dir', 'hidden'],
          });
        const fonts = element.ownerDocument.fonts;
        fonts?.addEventListener('loadingdone', schedule);
        fonts?.ready.then(schedule, schedule);
        element.addEventListener('load', schedule, true);
        view.addEventListener('resize', schedule);
        schedule();
        onCleanup(() => {
          active = false;
          scheduleMeasure = undefined;
          if (frame !== undefined) view.cancelAnimationFrame(frame);
          resize?.disconnect();
          mutations.disconnect();
          fonts?.removeEventListener('loadingdone', schedule);
          element.removeEventListener('load', schedule, true);
          view.removeEventListener('resize', schedule);
        });
      },
      { flush: 'post' },
    );

    return (
      <span {...rest} ref={root} class={cx(containerStyle, className)}>
        <span
          id={contentId}
          ref={content}
          tabindex={expandable ? -1 : undefined}
          class={cx(
            contentStyle,
            !expanded.value && (lineCount.value === 1 ? singleLine : multipleLines),
          )}
        >
          {children}
        </span>
        {expandable && (expanded.value || showToggle.value) && (
          <button
            ref={button}
            type="button"
            aria-controls={contentId}
            aria-expanded={expanded.value}
            class={toggleStyle}
            onClick={() => {
              expanded.value = !expanded.value;
            }}
          >
            {expanded.value ? lang.collapse : lang.expand}
          </button>
        )}
      </span>
    );
  },
);
