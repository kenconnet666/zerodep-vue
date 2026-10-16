import { _component, cx } from '@zerodep-vue/core';
import { ChevronRight, Ellipsis as MoreIcon } from '@lucide/icons';
import { computed, ref } from 'vue';
import type { VNodeChild } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import { Link } from '../display/Link.tsx';
import type { LinkProps } from '../display/Link.tsx';
import { Icon } from '../display/Icon.tsx';
import { Button } from '../input/Button.tsx';
import { Popover } from '../feedback/Popover.tsx';

export interface BreadcrumbItem {
  key: string;
  label: VNodeChild;
  href?: string;
  slotLink?: Omit<LinkProps, 'children' | 'href' | 'aria-current'>;
}
export interface BreadcrumbProps extends Omit<ElementProps, 'children'> {
  items: readonly BreadcrumbItem[];
  /** 超过时折叠中间路径；0 显示全部，其他值必须至少为 3。 */
  maxItems?: number;
  separator?: VNodeChild;
  slotList?: ElementSlotProps;
  slotItem?: Omit<ElementSlotProps, 'id'>;
  slotSeparator?: Omit<ElementSlotProps, 'id'>;
}
/** 最后一项使用 aria-current；中间折叠项仍可通过普通链接访问。 */
export const Breadcrumb = _component(
  ({
    items,
    maxItems = 0,
    separator,
    slotList,
    slotItem,
    slotSeparator,
    'aria-label': label,
    class: className,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: BreadcrumbProps) => {
    const s = useCss();
    const lang = useLang();
    const open = ref(false);
    const overflowKey = Symbol('breadcrumb overflow');
    const shown = computed(() => {
      if (!Number.isInteger(maxItems) || maxItems < 0 || (maxItems > 0 && maxItems < 3))
        throw new RangeError('Breadcrumb maxItems 必须为 0 或至少 3 的整数。');
      if (new Set(items.map((item) => item.key)).size !== items.length)
        throw new Error('Breadcrumb key 必须唯一。');
      return maxItems && items.length > maxItems
        ? [items[0]!, null, ...items.slice(-(maxItems - 2))]
        : items;
    });
    const crumb = (item: BreadcrumbItem, current: boolean) =>
      item.href ? (
        <Link
          {...slotRest(item.slotLink)}
          href={item.href}
          aria-current={current ? 'page' : undefined}
          class={cx(
            s.textDecorationLine('none').color(current ? '_textPrimary' : '_textSecondary'),
            item.slotLink?.class,
          )}
          onClick={(event) => {
            if (!event.defaultPrevented) open.value = false;
          }}
        >
          {item.label}
        </Link>
      ) : (
        <span aria-current={current ? 'page' : undefined}>{item.label}</span>
      );
    return (
      <nav {...rest} aria-label={label ?? lang.breadcrumb} class={cx(s.minWidth(0), className)}>
        <ol
          {...slotRest(slotList)}
          class={cx(
            s
              .display('flex')
              .alignItems('center')
              .flexWrap('wrap')
              .gap('0.5em')
              .listStyleType('none')
              .margin(0)
              .padding(0),
            slotList?.class,
          )}
        >
          {shown.value.map((item, index) => (
            <li
              {...slotRest(slotItem)}
              key={item?.key ?? overflowKey}
              class={cx(
                s.display('flex').alignItems('center').gap('0.5em').minWidth(0),
                slotItem?.class,
              )}
            >
              {index > 0 && (
                <span
                  {...slotRest(slotSeparator)}
                  aria-hidden={true}
                  class={cx(s.display('inline-flex').color('_textTertiary'), slotSeparator?.class)}
                >
                  {separator ?? (
                    <Icon icon={ChevronRight} class={s.select('&:dir(rtl)', s.rotate('180deg'))} />
                  )}
                </span>
              )}
              {item ? (
                crumb(item, item === items.at(-1))
              ) : (
                <Popover
                  open={open}
                  label={lang.morePaths}
                  trigger={(props) => (
                    <Button
                      {...props}
                      type="button"
                      variant="text"
                      tone="neutral"
                      icon={MoreIcon}
                      iconOnly
                      aria-label={lang.morePaths}
                    />
                  )}
                >
                  <ol
                    class={s
                      .listStyleType('none')
                      .padding(0)
                      .margin(0)
                      .display('flex')
                      .flexDirection('column')
                      .gap('_small')}
                  >
                    {items.slice(1, items.length - (maxItems - 2)).map((hidden) => (
                      <li key={hidden.key}>{crumb(hidden, false)}</li>
                    ))}
                  </ol>
                </Popover>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);
