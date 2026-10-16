import type { LucideIconData } from '@lucide/icons';
import { ChevronDown, Circle } from '@lucide/icons';
import type { Slot } from '@zerodep-vue/core';
import { _component, _div, _li, _nav, _span, _ul } from '@zerodep-vue/core';
import type { InjectionKey, Ref } from 'vue';
import { computed, inject, provide, ref, shallowRef, useId, watch } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import type { ElementProps } from '../config/props.ts';
import { Icon } from '../display/Icon.tsx';
import { Link } from '../display/Link.tsx';
import type { FloatingTriggerProps } from '../feedback/Popover.tsx';
import { Popover } from '../feedback/Popover.tsx';
import { Tooltip } from '../feedback/Tooltip.tsx';
import type { ButtonProps } from '../input/Button.tsx';
import { Button } from '../input/Button.tsx';
import type { Callback } from '../interaction/callbacks.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import { usePortalStyle } from '../interaction/portal.ts';
import { CollapseTransition } from './CollapseTransition.tsx';
import { Divider } from './Divider.tsx';
import { sidebarCompactKey } from './sidebar-context.ts';
export interface MenuEntry {
  type?: 'item';
  key: string;
  label: string;
  href?: string;
  icon?: LucideIconData;
  disabled?: boolean;
  children?: readonly MenuItem[];
  /** 单个链接的原生属性，例如 target、download 和 aria-describedby。 */
  slotLink?: Slot<typeof Link, 'href' | 'aria-current' | 'elementRef'>;
}
export type MenuItem =
  | MenuEntry
  | {
      type: 'group';
      key: string;
      label: string;
      children: readonly MenuItem[];
    }
  | {
      type: 'divider';
      key: string;
    };
export interface MenuProps extends Omit<ElementProps, 'children' | 'onSelect'> {
  items: readonly MenuItem[];
  /** 当前页面/操作名称；省略时保留最近激活项。 */
  activeKey?: string;
  /** 垂直内联分组的持久展开状态；横向/收窄弹层使用独立的临时状态。 */
  expandedKeys?: Ref<readonly string[]>;
  orientation?: 'horizontal' | 'vertical';
  /** 垂直图标导航；默认显式保留 undefined，避免 Vue 布尔转换阻止 Sidebar 状态继承。 */
  collapsed?: boolean;
  /** 同级内联分组一次只展开一项，默认 false。 */
  accordion?: boolean;
  disabled?: boolean;
  /** soft 使用选中背景，line 使用边线强调。 */
  variant?: 'soft' | 'line';
  density?: ButtonProps['density'];
  slotList?: Slot<typeof _ul>;
  slotItem?: Slot<typeof _li, 'id'>;
  slotIcon?: Slot<typeof Icon, 'icon' | 'aria-hidden'>;
  onSelect?: Callback<[key: string, event: MouseEvent]>;
  onExpandedChange?: Callback<[keys: readonly string[]]>;
}
interface MenuContext {
  compact(): boolean;
  horizontal(): boolean;
  rtl(): boolean;
  disabled(): boolean;
  selected(key: string): boolean;
  expanded(key: string): boolean;
  toggle(key: string, siblings: readonly MenuItem[]): void;
  select(key: string, event: MouseEvent): void;
  variant(): 'soft' | 'line';
  density(): ButtonProps['density'];
  iconProps(): MenuProps['slotIcon'];
  itemProps(): MenuProps['slotItem'];
  selection: Ref<number>;
}
const menuKey: InjectionKey<MenuContext> = Symbol('UI menu');

/** 站点导航使用 nav/list/link/disclosure；不输出带另一套键盘模型的应用 menu 角色。 */
export const Menu = _component(
  ({
    items,
    activeKey,
    expandedKeys = ref<readonly string[]>([]),
    orientation = 'vertical',
    collapsed = undefined,
    accordion = false,
    disabled = false,
    variant = 'soft',
    density = 'normal',
    slotList,
    slotItem,
    slotIcon,
    onSelect,
    onExpandedChange,
    'aria-label': label,
    css: cssProp,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: MenuProps) => {
    const css = useCss();
    const lang = useLang();
    const root = shallowRef<HTMLElement>();
    const appearance = usePortalStyle(root);
    const inheritedCompact = inject(sidebarCompactKey, undefined);
    const selected = ref<string>();
    const selection = ref(0);
    const validated = computed(() => {
      const names = new Set<string>();
      const visit = (entries: readonly MenuItem[]) =>
        entries.forEach((item) => {
          if (!item.key || names.has(item.key))
            throw new Error(`Menu key 必须非空且唯一：${item.key}`);
          names.add(item.key);
          if (item.type !== 'divider' && item.children) visit(item.children);
        });
      visit(items);
      return items;
    });
    provide(menuKey, {
      compact: () => orientation === 'vertical' && (collapsed ?? inheritedCompact?.value ?? false),
      horizontal: () => orientation === 'horizontal',
      rtl: () => appearance.value.direction === 'rtl',
      disabled: () => disabled,
      selected: (key) => (activeKey ?? selected.value) === key,
      expanded: (key) => expandedKeys.value.includes(key),
      toggle(key, siblings) {
        const old = expandedKeys.value;
        const next = old.includes(key)
          ? old.filter((value) => value !== key)
          : [
              ...(accordion
                ? old.filter((value) => !siblings.some((item) => item.key === value))
                : old),
              key,
            ];
        expandedKeys.value = next;
        callCallbacks(onExpandedChange, next);
      },
      select(key, event) {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        selected.value = key;
        selection.value++;
        callCallbacks(onSelect, key, event);
      },
      variant: () => variant,
      density: () => density,
      iconProps: () => slotIcon,
      itemProps: () => slotItem,
      selection,
    });
    return (
      <_nav
        css={[
          css({
            minWidth: 0,
          }),
          cssProp,
        ]}
        {...rest}
        ref={root}
        aria-label={label ?? lang.navigation}
      >
        <_ul
          css={css(() => ({
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: orientation === 'horizontal' ? 'row' : 'column',
            flexWrap: orientation === 'horizontal' ? 'wrap' : 'nowrap',
            gap: '0.25em',
          }))}
          {...slotList}
        >
          {validated.value.map((item) => (
            <MenuNode key={item.key} item={item} siblings={validated.value} depth={0} />
          ))}
        </_ul>
      </_nav>
    );
  },
);
interface MenuNodeProps {
  item: MenuItem;
  siblings: readonly MenuItem[];
  depth: number;
}
const MenuNode = _component(({ item, siblings, depth }: MenuNodeProps) => {
  const css = useCss();
  const owner = inject(menuKey)!;
  const popup = ref(false);
  const trigger = shallowRef<HTMLButtonElement | null | undefined>();
  const id = `zv-menu-${useId()}`;
  const compact = computed(() => depth === 0 && owner.compact());
  const floating = computed(() => depth === 0 && (owner.compact() || owner.horizontal()));
  const blocked = computed(
    () => owner.disabled() || (item.type !== 'group' && item.type !== 'divider' && item.disabled),
  );
  const expanded = computed(() => !blocked.value && owner.expanded(item.key));
  const containsSelection = (entry: MenuItem): boolean =>
    owner.selected(entry.key) ||
    (entry.type !== 'divider' && !!entry.children?.some(containsSelection));
  const marked = computed(() => containsSelection(item));
  watch(
    expanded,
    (opened) => {
      const button = trigger.value;
      const panel = button?.ownerDocument.getElementById(id);
      if (!opened && panel?.contains(panel.ownerDocument.activeElement))
        button?.focus({
          preventScroll: true,
        });
    },
    {
      flush: 'sync',
    },
  );
  watch([() => owner.selection.value, floating, blocked], () => {
    popup.value = false;
  });
  const actionStyle = css(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '0.5em',
    minWidth: 0,
    width: '100%',
    boxSizing: 'border-box',
    border: 0,
    borderRadius: '_small',
    textAlign: 'start',
    textDecorationLine: 'none',
    paddingBlock:
      owner.density() === 'compact'
        ? '0.375em'
        : owner.density() === 'comfortable'
          ? '0.75em'
          : '0.5em',
    paddingInline: '0.75em',
    color: marked.value ? '_textSelected' : '_textPrimary',
    backgroundColor:
      marked.value && owner.variant() === 'soft' ? '_surfaceSelected' : 'transparent',
    '&:hover': {
      backgroundColor: '_surfaceHover',
    },
    '&[aria-disabled="true"]': {
      color: '_textDisabled',
      cursor: 'not-allowed',
    },
  }));
  const lineStyle = css(() => ({
    borderRadius: 0,
    borderInlineStartStyle: 'solid',
    borderInlineStartWidth: owner.horizontal() && depth === 0 ? 0 : '0.1875em',
    borderInlineStartColor: marked.value ? '_primary' : 'transparent',
    borderBottomStyle: 'solid',
    borderBottomWidth: owner.horizontal() && depth === 0 ? '0.1875em' : 0,
    borderBottomColor: marked.value ? '_primary' : 'transparent',
  }));
  function select(event: MouseEvent) {
    if (blocked.value) {
      event.preventDefault();
      return;
    }
    owner.select(item.key, event);
  }
  const content = (entry: MenuEntry, iconOnly = false) => (
    <>
      {(entry.icon || iconOnly) && (
        <Icon {...owner.iconProps()} icon={entry.icon ?? Circle} aria-hidden={true} />
      )}
      {!iconOnly && (
        <_span
          css={css({
            minWidth: 0,
            overflowWrap: 'anywhere',
          })}
        >
          {entry.label}
        </_span>
      )}
    </>
  );
  const link = (entry: MenuEntry, bindings?: FloatingTriggerProps, iconOnly = false) => (
    <Link
      css={[
        actionStyle,
        owner.variant() === 'line' && lineStyle,
        iconOnly &&
          css({
            justifyContent: 'center',
          }),
      ]}
      {...entry.slotLink}
      {...bindings}
      href={entry.href!}
      disabled={blocked.value}
      tabindex={blocked.value ? -1 : entry.slotLink?.tabindex}
      aria-label={iconOnly ? entry.label : entry.slotLink?.['aria-label']}
      aria-disabled={blocked.value || undefined}
      aria-current={owner.selected(entry.key) ? 'page' : undefined}
      onClick={select}
    >
      {content(entry, iconOnly)}
    </Link>
  );
  const list = (entries: readonly MenuItem[], childDepth = depth + 1) => (
    <_ul
      css={css({
        listStyleType: 'none',
        margin: 0,
        padding: 0,
      })}
      id={id}
    >
      {entries.map((child) => (
        <MenuNode key={child.key} item={child} siblings={entries} depth={childDepth} />
      ))}
    </_ul>
  );
  const disclosure = (entry: MenuEntry, bindings?: FloatingTriggerProps, iconOnly = false) => (
    <Button
      css={[
        actionStyle,
        owner.variant() === 'line' && lineStyle,
        iconOnly &&
          css({
            justifyContent: 'center',
          }),
      ]}
      {...bindings}
      elementRef={bindings?.elementRef ?? trigger}
      type="button"
      variant="text"
      tone="neutral"
      disabled={blocked.value}
      density={owner.density()}
      aria-label={iconOnly ? entry.label : undefined}
      aria-expanded={bindings ? bindings['aria-expanded'] : expanded.value}
      aria-controls={bindings ? bindings['aria-controls'] : id}
      onClick={(event) => {
        if (!bindings && !event.defaultPrevented) owner.toggle(entry.key, siblings);
      }}
    >
      {content(entry, iconOnly)}
      {!iconOnly && (
        <Icon
          icon={ChevronDown}
          aria-hidden={true}
          rotate={expanded.value || popup.value ? '180deg' : '0deg'}
        />
      )}
    </Button>
  );
  function renderEntry() {
    switch (item.type) {
      case 'divider':
        return (
          <Divider
            css={css({
              marginBlock: '0.5em',
            })}
            decorative
            orientation={owner.horizontal() && depth === 0 ? 'vertical' : 'horizontal'}
          />
        );
      case 'group':
        return (
          <>
            {compact.value ? (
              <Divider decorative />
            ) : (
              <_div
                css={css({
                  padding: '0.5em 0.75em',
                  fontSize: '0.875em',
                  color: '_textTertiary',
                })}
              >
                {item.label}
              </_div>
            )}
            {list(item.children, depth)}
          </>
        );
    }
    if (item.children?.length) {
      if (floating.value)
        return (
          <Popover
            open={popup}
            label={item.label}
            disabled={blocked.value}
            placement={
              owner.horizontal() ? 'bottom-start' : owner.rtl() ? 'left-start' : 'right-start'
            }
            trigger={(bindings) => disclosure(item, bindings, compact.value)}
            slotPanel={{
              css: css({
                minWidth: '12em',
              }),
            }}
          >
            {item.href && link(item)}
            {list(item.children)}
          </Popover>
        );
      return (
        <>
          <_div
            css={css({
              display: 'flex',
              alignItems: 'center',
            })}
          >
            {item.href ? (
              <>
                {link(item)}
                <Button
                  elementRef={trigger}
                  type="button"
                  variant="text"
                  tone="neutral"
                  icon={ChevronDown}
                  iconOnly
                  disabled={blocked.value}
                  aria-label={item.label}
                  aria-expanded={expanded.value}
                  aria-controls={id}
                  onClick={(event) => {
                    if (!event.defaultPrevented) owner.toggle(item.key, siblings);
                  }}
                />
              </>
            ) : (
              disclosure(item)
            )}
          </_div>
          <CollapseTransition
            css={css({
              paddingInlineStart: '1em',
            })}
            show={expanded.value}
          >
            {list(item.children)}
          </CollapseTransition>
        </>
      );
    }
    if (compact.value)
      return (
        <Tooltip
          content={item.label}
          trigger={(bindings) =>
            item.href ? (
              link(item, bindings, true)
            ) : (
              <Button
                css={[
                  actionStyle,
                  css({
                    justifyContent: 'center',
                  }),
                ]}
                {...bindings}
                type="button"
                variant="text"
                tone="neutral"
                disabled={blocked.value}
                aria-label={item.label}
                onClick={select}
              >
                {content(item, true)}
              </Button>
            )
          }
        />
      );
    if (item.href) return link(item);
    return (
      <Button
        css={[actionStyle, owner.variant() === 'line' && lineStyle]}
        type="button"
        variant="text"
        tone="neutral"
        density={owner.density()}
        disabled={blocked.value}
        aria-pressed={owner.selected(item.key)}
        onClick={select}
      >
        {content(item)}
      </Button>
    );
  }
  return (
    <_li
      css={css({
        minWidth: 0,
      })}
      {...owner.itemProps()}
    >
      {renderEntry()}
    </_li>
  );
});
