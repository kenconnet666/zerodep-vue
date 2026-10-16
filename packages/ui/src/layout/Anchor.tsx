import { _component, bx, cx } from '@zerodep-vue/core';
import { shallowRef, watchPostEffect } from 'vue';
import type { VNodeChild } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import { Link } from '../display/Link.tsx';
import type { LinkProps } from '../display/Link.tsx';
import { useMediaQuery } from '../interaction/media.ts';
import {
  isWindow,
  observeScroll,
  scrollElement,
  scrollTop,
  scrollToElement,
  scrollViewport,
  useScrollTarget,
} from '../interaction/scroll.ts';
import type { ScrollTarget, ScrollTargetSource } from '../interaction/scroll.ts';

export interface AnchorItem {
  /** 当前页面的片段标识，如 #installation；同时作为稳定 key。 */
  href: `#${string}`;
  label: VNodeChild;
  children?: readonly AnchorItem[];
}
export interface AnchorProps extends Omit<ElementProps, 'children'> {
  items: readonly AnchorItem[];
  target?: ScrollTargetSource;
  /** 到滚动视口上边缘的距离，单位 px，默认 16。 */
  offset?: number;
  behavior?: ScrollBehavior;
  /** 只在主动点击时修改当前地址；默认 push 保留浏览器返回能力。 */
  history?: 'push' | 'replace' | 'none';
  onActiveChange?: (href: string | undefined) => void;
  /** 只作用于根列表，避免递归列表复制同一 id。 */
  slotList?: ElementSlotProps;
  /** 所有条目共享的属性，不分配重复 id。 */
  slotItem?: Omit<ElementSlotProps, 'id'>;
  slotLink?: Omit<LinkProps, 'href' | 'children' | 'aria-current' | 'id'>;
}

/** 页内目录：保留原生链接，点击时只滚动指定容器。 */
export const Anchor = _component(
  ({
    items,
    target,
    offset = 16,
    behavior = 'smooth',
    history = 'push',
    onActiveChange,
    slotList,
    slotItem,
    slotLink,
    'aria-label': label,
    class: className,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: AnchorProps) => {
    const s = useCss();
    const lang = useLang();
    const root = shallowRef<HTMLElement>();
    const active = shallowRef<string>();
    const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
    const scrollTarget = useScrollTarget(() => target, root);
    const flatten = (entries: readonly AnchorItem[]): AnchorItem[] =>
      entries.flatMap((item) => [item, ...flatten(item.children ?? [])]);
    const elementFor = (href: string) => {
      try {
        return (
          root.value?.ownerDocument.getElementById(decodeURIComponent(href.slice(1))) ?? undefined
        );
      } catch {
        return undefined;
      }
    };
    function measure(current: ScrollTarget) {
      const entries = flatten(items)
        .map((item) => ({ item, element: elementFor(item.href) }))
        .filter((entry) => entry.element && (isWindow(current) || current.contains(entry.element)))
        .map((entry) => ({
          href: entry.item.href,
          top: entry.element!.getBoundingClientRect().top,
        }));
      entries.sort((a, b) => a.top - b.top);
      const edge = scrollViewport(current).top + offset + 1;
      let next = entries[0]?.href;
      for (const entry of entries) if (entry.top <= edge) next = entry.href;
      const scrolling = isWindow(current) ? current.document.scrollingElement : current;
      if (
        scrolling &&
        scrolling.scrollHeight > scrolling.clientHeight &&
        scrollTop(current) + scrolling.clientHeight >= scrolling.scrollHeight - 1
      )
        next = entries.at(-1)?.href;
      if (active.value !== next) {
        active.value = next;
        onActiveChange?.(next);
      }
    }
    observeScroll(scrollTarget, measure);
    watchPostEffect((cleanup) => {
      const current = scrollTarget.value;
      if (!current) return;
      const element = scrollElement(current);
      const view = element.ownerDocument.defaultView;
      if (!view) return;
      void items;
      void offset;
      let frame: number | undefined;
      const schedule = () => {
        if (frame !== undefined) return;
        frame = view.requestAnimationFrame(() => {
          frame = undefined;
          measure(current);
        });
      };
      const observer = new MutationObserver(schedule);
      observer.observe(element, { childList: true, subtree: true, characterData: true });
      const resize =
        typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(schedule);
      for (const item of flatten(items)) {
        const heading = elementFor(item.href);
        if (heading) resize?.observe(heading);
      }
      element.addEventListener('load', schedule, true);
      schedule();
      cleanup(() => {
        observer.disconnect();
        resize?.disconnect();
        element.removeEventListener('load', schedule, true);
        if (frame !== undefined) view.cancelAnimationFrame(frame);
      });
    });
    function activate(event: MouseEvent, item: AnchorItem) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        (slotLink?.target && slotLink.target !== '_self') ||
        slotLink?.download != null
      )
        return;
      const current = scrollTarget.value;
      const element = elementFor(item.href);
      if (!current || !element || (!isWindow(current) && !current.contains(element))) return;
      event.preventDefault();
      // 临时可编程焦点不进入 Tab 顺序，并保持上层原有 tabindex。
      const existing = element.getAttribute('tabindex');
      if (existing === null) element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
      if (existing === null) element.removeAttribute('tabindex');
      scrollToElement(current, element, offset, reduced.value ? 'instant' : behavior);
      const view = element.ownerDocument.defaultView;
      if (view && history !== 'none' && view.location.hash !== item.href) {
        const url = new URL(view.location.href);
        url.hash = item.href;
        if (history === 'push') view.history.pushState(view.history.state, '', url);
        else view.history.replaceState(view.history.state, '', url);
      }
    }
    const list = (entries: readonly AnchorItem[], nested = false): VNodeChild => (
      <ul
        {...slotRest(nested ? undefined : slotList)}
        class={cx(
          s
            .listStyleType('none')
            .margin(0)
            .padding(0)
            .paddingInlineStart(nested ? '1em' : 0),
          !nested && slotList?.class,
        )}
      >
        {entries.map((item) => (
          <li {...slotRest(slotItem)} key={item.href} class={slotItem?.class}>
            <Link
              {...slotRest(slotLink)}
              href={item.href}
              aria-current={active.value === item.href ? 'location' : undefined}
              onClick={(event) => activate(event, item)}
              class={cx(
                s
                  .display('block')
                  .paddingBlock('0.375em')
                  .paddingInline('0.75em')
                  .textDecorationLine('none')
                  .borderInlineStartStyle('solid')
                  .borderInlineStartWidth('0.125em')
                  .borderInlineStartColor(bx(active.value === item.href ? '_primary' : '_divider'))
                  .color(bx(active.value === item.href ? '_primary' : '_textSecondary')),
                slotLink?.class,
              )}
            >
              {item.label}
            </Link>
            {item.children?.length ? list(item.children, true) : null}
          </li>
        ))}
      </ul>
    );
    return (
      <nav
        {...rest}
        ref={root}
        aria-label={label ?? lang.navigation}
        class={cx(s.minWidth(0), className)}
      >
        {list(items)}
      </nav>
    );
  },
);
