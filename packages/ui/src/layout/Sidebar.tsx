import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { ChevronLeft, ChevronRight } from '@lucide/icons';
import { computed, provide, ref } from 'vue';
import type { Ref, VNodeChild } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { Button } from '../input/Button.tsx';
import type { ButtonProps } from '../input/Button.tsx';
import { Drawer } from '../feedback/Drawer.tsx';
import type { DrawerProps } from '../feedback/Drawer.tsx';
import { Scrollbar } from './Scrollbar.tsx';
import type { ScrollbarProps } from './Scrollbar.tsx';
import { useMediaQuery } from '../interaction/media.ts';
import { sidebarCompactKey } from './sidebar-context.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { Callback } from '../interaction/callbacks.ts';

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
  slotHeader?: ElementSlotProps;
  slotFooter?: ElementSlotProps;
  slotContent?: Omit<ScrollbarProps, 'children'>;
  slotToggle?: Omit<ButtonProps, 'children' | 'type' | 'aria-expanded'>;
  slotDrawer?: Omit<DrawerProps, 'open' | 'inline' | 'scrollable' | 'children' | 'unmountOnHide'>;
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
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: SidebarProps) => {
    const s = useCss();
    const lang = useLang();
    const mobile = useMediaQuery(() => media || 'not all');
    const compact = computed(() => !mobile.value && collapsed.value);
    provide(sidebarCompactKey, compact);
    return (
      <aside
        {...rest}
        aria-label={label ?? lang.navigation}
        data-zv-sidebar={mobile.value ? 'drawer' : 'inline'}
        class={cx(
          s
            .display('flex')
            .flexDirection('column')
            .flexShrink(0)
            .minHeight(0)
            .maxWidth('100%')
            .width(bx(mobile.value ? 'auto' : compact.value ? collapsedWidth : width))
            .backgroundColor('_surface'),
          className,
        )}
      >
        {mobile.value && showToggle && (
          <Button
            {...slotRest(slotToggle)}
            type="button"
            icon={slotToggle?.icon ?? ChevronRight}
            aria-expanded={open.value}
            aria-label={slotToggle?.['aria-label'] ?? lang.expandNavigation}
            class={slotToggle?.class}
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
          <div
            class={s
              .display('flex')
              .flexDirection('column')
              .flex('1 1 auto')
              .minHeight(0)
              .height('100%')}
          >
            {header != null && (
              <header
                {...slotRest(slotHeader)}
                class={cx(s.padding('_small').flex('0 0 auto'), slotHeader?.class)}
              >
                {header}
              </header>
            )}
            <Scrollbar
              {...slotRest(slotContent)}
              class={cx(s.flex('1 1 auto').minHeight(0), slotContent?.class)}
            >
              {children}
            </Scrollbar>
            {(footer != null || (!mobile.value && showToggle)) && (
              <footer
                {...slotRest(slotFooter)}
                class={cx(s.padding('_small').flex('0 0 auto'), slotFooter?.class)}
              >
                {footer}
                {!mobile.value && showToggle && (
                  <Button
                    {...slotRest(slotToggle)}
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
                    class={slotToggle?.class}
                    onClick={(event) => {
                      if (!event.defaultPrevented) {
                        collapsed.value = !collapsed.value;
                        callCallbacks(onCollapsedChange, collapsed.value);
                      }
                    }}
                  />
                )}
              </footer>
            )}
          </div>
        </Drawer>
      </aside>
    );
  },
);
