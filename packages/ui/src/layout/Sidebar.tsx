import { ChevronLeft, ChevronRight } from '@lucide/icons';
import type { CssValue, Slot } from '@zerodep-vue/core';
import { _aside, _component, _div, _footer, _header } from '@zerodep-vue/core';
import type { Ref, VNodeChild } from 'vue';
import { computed, provide, ref } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import type { ElementProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { Drawer } from '../feedback/Drawer.tsx';
import { Button } from '../input/Button.tsx';
import type { Callback } from '../interaction/callbacks.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import { useMediaQuery } from '../interaction/media.ts';
import { Scrollbar } from './Scrollbar.tsx';
import { sidebarCompactKey } from './sidebar-context.ts';
export interface SidebarProps extends ElementProps {
  /** 桌面收窄与窄屏打开独立保存，不混用同一状态。 */
  collapsed?: Ref<boolean>;
  open?: Ref<boolean>;
  /** 进入 Drawer 模式的媒体条件；空字符串禁用响应式抽屉。 */
  media?: string;
  width?: CssValue<'width', UiTheme>;
  collapsedWidth?: CssValue<'width', UiTheme>;
  header?: VNodeChild;
  footer?: VNodeChild;
  showToggle?: boolean;
  slotHeader?: Slot<typeof _header>;
  slotFooter?: Slot<typeof _footer>;
  slotContent?: Slot<typeof Scrollbar>;
  slotToggle?: Slot<typeof Button, 'type' | 'iconOnly' | 'aria-expanded'>;
  slotDrawer?: Slot<typeof Drawer, 'open' | 'inline' | 'scrollable' | 'unmountOnHide'>;
  onCollapsedChange?: Callback<[collapsed: boolean]>;
}

/** Sidebar → Drawer/Scrollbar/Button；同一内容树跨断点移动，保留子组件与输入状态。 */
export const Sidebar = _component(
  ({
    collapsed = ref(false),
    open = ref(false),
    media = '(max-width: 48rem)',
    width = '16em',
    collapsedWidth = '4em',
    header,
    footer,
    showToggle = true,
    slotHeader,
    slotFooter,
    slotContent,
    slotToggle,
    slotDrawer,
    onCollapsedChange,
    'aria-label': label,
    css: cssProp,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: SidebarProps) => {
    const css = useCss();
    const lang = useLang();
    const mobile = useMediaQuery(() => media || 'not all');
    const compact = computed(() => !mobile.value && collapsed.value);
    provide(sidebarCompactKey, compact);
    return (
      <_aside
        css={[
          css(() => ({
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            minHeight: 0,
            maxWidth: '100%',
            width: mobile.value ? 'auto' : compact.value ? collapsedWidth : width,
            backgroundColor: '_surface',
          })),
          cssProp,
        ]}
        {...rest}
        aria-label={label ?? lang.navigation}
        data-zv-sidebar={mobile.value ? 'drawer' : 'inline'}
      >
        {mobile.value && showToggle && (
          <Button
            {...slotToggle}
            type="button"
            icon={slotToggle?.icon ?? ChevronRight}
            aria-expanded={open.value}
            aria-label={slotToggle?.['aria-label'] ?? lang.expandNavigation}
            onClick={(event) => {
              if (!event.defaultPrevented) open.value = true;
            }}
          />
        )}
        <Drawer
          {...slotDrawer}
          open={open}
          inline={!mobile.value}
          scrollable={false}
          unmountOnHide={false}
          placement={slotDrawer?.placement ?? 'start'}
          size={slotDrawer?.size ?? width}
          title={slotDrawer?.title ?? label ?? lang.navigation}
        >
          <_div
            css={css({
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 auto',
              minHeight: 0,
              height: '100%',
            })}
          >
            {header != null && (
              <_header
                css={css({
                  padding: '_small',
                  flex: '0 0 auto',
                })}
                {...slotHeader}
              >
                {header}
              </_header>
            )}
            <Scrollbar
              css={css({
                flex: '1 1 auto',
                minHeight: 0,
              })}
              {...slotContent}
            >
              {children}
            </Scrollbar>
            {(footer != null || (!mobile.value && showToggle)) && (
              <_footer
                css={css({
                  padding: '_small',
                  flex: '0 0 auto',
                })}
                {...slotFooter}
              >
                {footer}
                {!mobile.value && showToggle && (
                  <Button
                    {...slotToggle}
                    type="button"
                    variant={slotToggle?.variant ?? 'text'}
                    tone={slotToggle?.tone ?? 'neutral'}
                    icon={slotToggle?.icon ?? (compact.value ? ChevronRight : ChevronLeft)}
                    iconOnly
                    aria-expanded={!compact.value}
                    aria-label={
                      slotToggle?.['aria-label'] ??
                      (compact.value ? lang.expandNavigation : lang.collapseNavigation)
                    }
                    onClick={(event) => {
                      if (!event.defaultPrevented) {
                        collapsed.value = !collapsed.value;
                        callCallbacks(onCollapsedChange, collapsed.value);
                      }
                    }}
                  />
                )}
              </_footer>
            )}
          </_div>
        </Drawer>
      </_aside>
    );
  },
);
