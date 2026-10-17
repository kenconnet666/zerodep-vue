import { _component, bx, cx } from '@zerodep-vue/core';
import type { CssValue } from '@zerodep-vue/core';
import { X } from '@lucide/icons';
import { computed, onMounted, shallowRef, Teleport, useId, watchPostEffect } from 'vue';
import type { Ref, VNodeChild } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementSlotProps } from '../config/props.ts';
import type { UiTheme } from '../config/theme/types.ts';
import { Button } from '../input/Button.tsx';
import type { ButtonProps } from '../input/Button.tsx';
import { Scrollbar } from '../layout/Scrollbar.tsx';
import type { ScrollbarProps } from '../layout/Scrollbar.tsx';
import { lockDocumentScroll, useLayer, useLayerContext } from '../interaction/layer.ts';
import type { OverlayCloseReason } from '../interaction/layer.ts';
import { usePortalStyle } from '../interaction/portal.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { Callback } from '../interaction/callbacks.ts';

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
  slotPanel?: Omit<ElementSlotProps, 'id' | 'role' | 'tabindex'>;
  slotHeader?: ElementSlotProps;
  slotBody?: ElementSlotProps;
  slotScrollbar?: Omit<ScrollbarProps, 'children' | 'height'>;
  slotFooter?: ElementSlotProps;
  slotClose?: Omit<ButtonProps, 'children' | 'type' | 'disabled' | 'loading'>;
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
    const s = useCss();
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
        <span ref={origin} hidden />
        <Teleport to={body.value ?? 'body'} disabled={inline || !body.value}>
          {(!unmountOnHide || context.active.value) && (
            <div
              class={s.display(
                bx(inline || (mounted.value && context.active.value) ? 'contents' : 'none'),
              )}
            >
              {children}
            </div>
          )}
        </Teleport>
        {mounted.value && origin.value && (
          <Teleport to={origin.value.ownerDocument.body}>
            <dialog
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
              class={s
                .position('fixed')
                .inset(0)
                .margin(0)
                .padding(0)
                .border(0)
                .maxWidth('none')
                .maxHeight('none')
                .width('100%')
                .height('100dvh')
                .overflow('hidden')
                .backgroundColor('transparent')
                .color('_textPrimary')
                .fontSize(bx(appearance.value.fontSize))
                .fontFamily(bx(appearance.value.fontFamily))
                .lineHeight(bx(appearance.value.lineHeight))
                .select('&::backdrop', s.backgroundColor('_backdrop'))}
            >
              {
                <section
                  {...slotRest(slotPanel)}
                  ref={panel}
                  tabindex={-1}
                  class={cx(
                    s
                      .position('absolute')
                      .display('flex')
                      .flexDirection('column')
                      .boxSizing('border-box')
                      .backgroundColor('_surfaceRaised')
                      .boxShadow('_large')
                      .maxWidth('100%')
                      .maxHeight('100%')
                      .width(bx(horizontal.value ? size : '100%'))
                      .height(bx(horizontal.value ? '100%' : size))
                      .top(bx(placement === 'bottom' ? 'auto' : 0))
                      .bottom(bx(placement === 'bottom' ? 0 : 'auto'))
                      .insetInlineStart(bx(placement === 'end' ? 'auto' : 0))
                      .insetInlineEnd(bx(placement === 'end' ? 0 : 'auto')),
                    slotPanel?.class,
                  )}
                >
                  <header
                    {...slotRest(slotHeader)}
                    class={cx(
                      s
                        .display('flex')
                        .alignItems('center')
                        .gap('_medium')
                        .padding('_medium')
                        .flex('0 0 auto'),
                      slotHeader?.class,
                    )}
                  >
                    <div
                      id={`${id}-title`}
                      class={s.flex('1 1 auto').minWidth(0).fontWeight('_semibold')}
                    >
                      {title}
                    </div>
                    <Button
                      {...slotRest(slotClose)}
                      type="button"
                      variant={slotClose?.variant ?? 'text'}
                      tone={slotClose?.tone ?? 'neutral'}
                      icon={slotClose?.icon ?? X}
                      iconOnly
                      aria-label={slotClose?.['aria-label'] ?? lang.close}
                      class={slotClose?.class}
                      onClick={(event) => {
                        if (!event.defaultPrevented) close('close');
                      }}
                    />
                  </header>
                  <div
                    {...slotRest(slotBody)}
                    class={cx(
                      s.display('flex').flexDirection('column').flex('1 1 auto').minHeight(0),
                      slotBody?.class,
                    )}
                  >
                    {scrollable ? (
                      <Scrollbar
                        {...slotRest(slotScrollbar)}
                        class={cx(s.flex('1 1 auto').minHeight(0), slotScrollbar?.class)}
                        slotContent={{
                          ...slotScrollbar?.slotContent,
                          class: cx(s.padding('_medium'), slotScrollbar?.slotContent?.class),
                        }}
                      >
                        <div ref={body} />
                      </Scrollbar>
                    ) : (
                      <div
                        ref={body}
                        class={s
                          .display('flex')
                          .flexDirection('column')
                          .flex('1 1 auto')
                          .minHeight(0)}
                      />
                    )}
                  </div>
                  {footer != null && (
                    <footer
                      {...slotRest(slotFooter)}
                      class={cx(
                        s
                          .padding('_medium')
                          .flex('0 0 auto')
                          .borderTopStyle('solid')
                          .borderTopWidth('0.0625em')
                          .borderTopColor('_divider'),
                        slotFooter?.class,
                      )}
                    >
                      {footer}
                    </footer>
                  )}
                </section>
              }
            </dialog>
          </Teleport>
        )}
      </>
    );
  },
);
