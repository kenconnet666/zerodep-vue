import { ChevronRight, Ellipsis as MoreIcon } from '@lucide/icons';
import type { Slot } from '@zerodep-vue/core';
import { _component, _li, _nav, _ol, _span } from '@zerodep-vue/core';
import type { VNodeChild } from 'vue';
import { computed, ref } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import type { ElementProps } from '../config/props.ts';
import { Icon } from '../display/Icon.tsx';
import { Link } from '../display/Link.tsx';
import { Popover } from '../feedback/Popover.tsx';
import { Button } from '../input/Button.tsx';
export interface BreadcrumbItem {
  key: string;
  label: VNodeChild;
  href?: string;
  slotLink?: Slot<typeof Link, 'href' | 'aria-current'>;
}
export interface BreadcrumbProps extends Omit<ElementProps, 'children'> {
  items: readonly BreadcrumbItem[];
  /** 超过时折叠中间路径；0 显示全部，其他值必须至少为 3。 */
  maxItems?: number;
  separator?: VNodeChild;
  slotList?: Slot<typeof _ol>;
  slotItem?: Slot<typeof _li, 'id'>;
  slotSeparator?: Slot<typeof _span, 'aria-hidden' | 'id'>;
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
    css: cssProp,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: BreadcrumbProps) => {
    const css = useCss();
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
          css={css({
            textDecorationLine: 'none',
            color: current ? '_textPrimary' : '_textSecondary',
          })}
          {...item.slotLink}
          href={item.href}
          aria-current={current ? 'page' : undefined}
          onClick={(event) => {
            if (!event.defaultPrevented) open.value = false;
          }}
        >
          {item.label}
        </Link>
      ) : (
        <_span aria-current={current ? 'page' : undefined}>{item.label}</_span>
      );
    return (
      <_nav
        css={[
          css({
            minWidth: 0,
          }),
          cssProp,
        ]}
        {...rest}
        aria-label={label ?? lang.breadcrumb}
      >
        <_ol
          css={css({
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5em',
            listStyleType: 'none',
            margin: 0,
            padding: 0,
          })}
          {...slotList}
        >
          {shown.value.map((item, index) => (
            <_li
              css={css({
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em',
                minWidth: 0,
              })}
              {...slotItem}
              key={item?.key ?? overflowKey}
            >
              {index > 0 && (
                <_span
                  css={css({
                    display: 'inline-flex',
                    color: '_textTertiary',
                  })}
                  {...slotSeparator}
                  aria-hidden={true}
                >
                  {separator ?? (
                    <Icon
                      css={css({
                        '&:dir(rtl)': {
                          rotate: '180deg',
                        },
                      })}
                      icon={ChevronRight}
                    />
                  )}
                </_span>
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
                  <_ol
                    css={css({
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '_small',
                    })}
                  >
                    {items.slice(1, items.length - (maxItems - 2)).map((hidden) => (
                      <_li key={hidden.key}>{crumb(hidden, false)}</_li>
                    ))}
                  </_ol>
                </Popover>
              )}
            </_li>
          ))}
        </_ol>
      </_nav>
    );
  },
);
