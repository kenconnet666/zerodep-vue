import { X } from '@lucide/icons';
import type { CssValue, Slot } from '@zerodep-vue/core';
import { _component, _dialog, _div, _footer, _header, _section, _span } from '@zerodep-vue/core';
import type { Ref, VNodeChild } from 'vue';
import { Teleport, computed, onMounted, shallowRef, useId, watchPostEffect } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import type { UiTheme } from '../config/theme/types.ts';
import { Button } from '../input/Button.tsx';
import type { Callback } from '../interaction/callbacks.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { OverlayCloseReason } from '../interaction/layer.ts';
import { lockDocumentScroll, useLayer, useLayerContext } from '../interaction/layer.ts';
import { usePortalStyle } from '../interaction/portal.ts';
import { Scrollbar } from '../layout/Scrollbar.tsx';
export interface DrawerProps {
  open: Ref<boolean>;
  /** 内联时只显示内容，不启用模态交互；切换模式保留同一内容实例，供 Sidebar 组合。 */
  inline?: boolean;
  /** 默认用 Scrollbar 管理正文；已有滚动容器时可关闭。 */
  scrollable?: boolean;
  /** 使用逻辑起止边，自动适配 RTL。 */
  placement?: 'start' | 'end' | 'top' | 'bottom';
  /** 抽屉在展开方向上的尺寸，默认 24em；始终不超过可视区域。 */
  size?: CssValue<'width', UiTheme>;
  title?: VNodeChild;
  label?: string;
  footer?: VNodeChild;
  children?: VNodeChild;
  closeOnEscape?: boolean;
  closeOnOutside?: boolean;
  /** 默认保留内容状态；true 时关闭后卸载内容。 */
  unmountOnHide?: boolean;
  slotPanel?: Slot<typeof _section, 'tabindex'>;
  slotHeader?: Slot<typeof _header>;
  slotBody?: Slot<typeof _div>;
  slotScrollbar?: Slot<typeof Scrollbar, 'height'>;
  slotFooter?: Slot<typeof _footer>;
  slotClose?: Slot<typeof Button, 'type' | 'iconOnly' | 'disabled' | 'loading'>;
  onOpenChange?: Callback<[open: boolean, reason: OverlayCloseReason]>;
}

/** 原生 dialog 承担模态焦点与背景 inert；内容滚动和关闭操作组合现有基础组件。 */
export const Drawer = _component(
  ({
    open,
    inline = false,
    scrollable = true,
    placement = 'end',
    size = '24em',
    title,
    label,
    footer,
    children,
    closeOnEscape = true,
    closeOnOutside = true,
    unmountOnHide = false,
    slotPanel,
    slotHeader,
    slotBody,
    slotScrollbar,
    slotFooter,
    slotClose,
    onOpenChange,
  }: DrawerProps) => {
    const css = useCss();
    const lang = useLang();
    const origin = shallowRef<HTMLSpanElement>();
    const dialog = shallowRef<HTMLDialogElement>();
    const panel = shallowRef<HTMLElement>();
    const body = shallowRef<HTMLDivElement>();
    const mounted = shallowRef(false);
    const context = useLayerContext(
      () => inline || open.value,
      computed(() => (inline ? undefined : dialog.value)),
    );
    const appearance = usePortalStyle(origin);
    const id = `zv-drawer-${useId()}`;
    const horizontal = computed(() => placement === 'start' || placement === 'end');
    const close = (reason: OverlayCloseReason) => {
      if (!open.value) return;
      open.value = false;
      callCallbacks(onOpenChange, false, reason);
    };
    useLayer({
      context,
      panel,
      enabled: () => !inline,
      escape: () => closeOnEscape,
      outside: () => closeOnOutside,
      restoreFocus: () => false,
      close,
    });
    onMounted(() => {
      mounted.value = true;
    });
    watchPostEffect((cleanup) => {
      const element = dialog.value;
      if (!element || inline || !context.active.value) return;
      const unlock = lockDocumentScroll(element.ownerDocument);
      if (!element.open) element.showModal();
      cleanup(() => {
        if (element.open) element.close();
        unlock();
      });
    });
    return (
      <>
        <_span ref={origin} hidden />
        <Teleport to={body.value ?? 'body'} disabled={inline || !body.value}>
          {(!unmountOnHide || context.active.value) && (
            <_div
              css={css(() => ({
                display: inline || (mounted.value && context.active.value) ? 'contents' : 'none',
              }))}
            >
              {children}
            </_div>
          )}
        </Teleport>
        {mounted.value && origin.value && (
          <Teleport to={origin.value.ownerDocument.body}>
            <_dialog
              css={css(() => ({
                position: 'fixed',
                inset: 0,
                margin: 0,
                padding: 0,
                border: 0,
                maxWidth: 'none',
                maxHeight: 'none',
                width: '100%',
                height: '100dvh',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                color: '_textPrimary',
                fontSize: appearance.value.fontSize,
                fontFamily: appearance.value.fontFamily,
                lineHeight: appearance.value.lineHeight,
                '&::backdrop': {
                  backgroundColor: '_backdrop',
                },
              }))}
              ref={dialog}
              dir={appearance.value.direction}
              aria-label={slotPanel?.['aria-label'] ?? label}
              aria-labelledby={title != null ? `${id}-title` : slotPanel?.['aria-labelledby']}
              onCancel={(event) => {
                event.preventDefault();
                if (closeOnEscape) close('escape');
              }}
              onClose={() => {
                if (!inline && open.value && !dialog.value?.open) close('close');
              }}
            >
              {
                <_section
                  css={css(() => ({
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                    backgroundColor: '_surfaceRaised',
                    boxShadow: '_large',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: horizontal.value ? size : '100%',
                    height: horizontal.value ? '100%' : size,
                    top: placement === 'bottom' ? 'auto' : 0,
                    bottom: placement === 'bottom' ? 0 : 'auto',
                    insetInlineStart: placement === 'end' ? 'auto' : 0,
                    insetInlineEnd: placement === 'end' ? 0 : 'auto',
                  }))}
                  {...slotPanel}
                  ref={panel}
                  tabindex={-1}
                >
                  <_header
                    css={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '_medium',
                      padding: '_medium',
                      flex: '0 0 auto',
                    })}
                    {...slotHeader}
                  >
                    <_div
                      css={css({
                        flex: '1 1 auto',
                        minWidth: 0,
                        fontWeight: '_semibold',
                      })}
                      id={`${id}-title`}
                    >
                      {title}
                    </_div>
                    <Button
                      {...slotClose}
                      type="button"
                      variant={slotClose?.variant ?? 'text'}
                      tone={slotClose?.tone ?? 'neutral'}
                      icon={slotClose?.icon ?? X}
                      iconOnly
                      disabled={false}
                      loading={false}
                      aria-label={slotClose?.['aria-label'] ?? lang.close}
                      onClick={(event) => {
                        if (!event.defaultPrevented) close('close');
                      }}
                    />
                  </_header>
                  <_div
                    css={css({
                      display: 'flex',
                      flexDirection: 'column',
                      flex: '1 1 auto',
                      minHeight: 0,
                    })}
                    {...slotBody}
                  >
                    {scrollable ? (
                      <Scrollbar
                        css={css({
                          flex: '1 1 auto',
                          minHeight: 0,
                        })}
                        slotContent={{
                          css: css({
                            padding: '_medium',
                          }),
                        }}
                        {...slotScrollbar}
                      >
                        <_div ref={body} />
                      </Scrollbar>
                    ) : (
                      <_div
                        css={css({
                          display: 'flex',
                          flexDirection: 'column',
                          flex: '1 1 auto',
                          minHeight: 0,
                        })}
                        ref={body}
                      />
                    )}
                  </_div>
                  {footer != null && (
                    <_footer
                      css={css({
                        padding: '_medium',
                        flex: '0 0 auto',
                        borderTopStyle: 'solid',
                        borderTopWidth: '0.0625em',
                        borderTopColor: '_divider',
                      })}
                      {...slotFooter}
                    >
                      {footer}
                    </_footer>
                  )}
                </_section>
              }
            </_dialog>
          </Teleport>
        )}
      </>
    );
  },
);
