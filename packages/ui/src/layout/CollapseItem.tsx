import { _component, bx, cx } from '@zerodep-vue/core';
import { ChevronDown } from '@lucide/icons';
import { computed, inject, shallowRef, useId, watch } from 'vue';
import type { VNodeChild } from 'vue';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import { slotRest } from '../config/props.ts';
import { useCss } from '../config/Provider.tsx';
import { Button } from '../input/Button.tsx';
import type { ButtonInstance, ButtonProps } from '../input/Button.tsx';
import { Icon } from '../display/Icon.tsx';
import type { IconProps } from '../display/Icon.tsx';
import { CollapseTransition } from './CollapseTransition.tsx';
import { collapseKey } from './collapse-context.ts';

export interface CollapseItemProps extends Omit<ElementProps, 'title'> {
  /** 在当前 Collapse 内唯一且稳定的名称。 */
  name: string;
  /** 标题内容；额外操作放在 extra，避免在按钮内嵌套交互元素。 */
  title: VNodeChild;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  extra?: VNodeChild;
  disabled?: boolean;
  lazy?: boolean;
  unmountOnHide?: boolean;
  /** 内容较复杂时可显式声明命名 region；默认避免过多地标。 */
  region?: boolean;
  slotHeader?: ElementSlotProps;
  slotTrigger?: Omit<
    ButtonProps,
    'children' | 'disabled' | 'type' | 'aria-controls' | 'aria-expanded'
  >;
  slotIcon?: Omit<IconProps, 'icon' | 'rotate' | 'aria-hidden'>;
  slotContent?: ElementSlotProps;
}

/** 原生标题和按钮语义；隐藏内容前先把其中的焦点移回标题。 */
export const CollapseItem = _component(
  ({
    name,
    title,
    titleAs: Title = 'h3',
    extra,
    disabled = false,
    lazy = false,
    unmountOnHide = false,
    region = false,
    slotHeader,
    slotTrigger,
    slotIcon,
    slotContent,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: CollapseItemProps) => {
    const s = useCss();
    const group = inject(collapseKey);
    if (!group) throw new Error('CollapseItem 必须放在 Collapse 内。');
    const expanded = computed(() => group.expanded(name));
    const trigger = shallowRef<ButtonInstance>();
    const root = shallowRef<HTMLDivElement>();
    const id = `zv-collapse-${useId()}`;
    watch(
      () => name,
      (value, _previous, cleanup) => {
        cleanup(group.register(value));
      },
      { immediate: true, flush: 'sync' },
    );
    watch(
      expanded,
      (opened) => {
        const panel = root.value?.ownerDocument.getElementById(id);
        if (!opened && panel?.contains(panel.ownerDocument.activeElement))
          trigger.value?.focus({ preventScroll: true });
      },
      { flush: 'sync' },
    );
    function keydown(event: KeyboardEvent) {
      if (event.defaultPrevented || !['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key))
        return;
      const element = trigger.value?.element;
      const owner = element?.closest('[data-zv-collapse]');
      if (!element || !owner) return;
      const triggers = Array.from(
        owner.querySelectorAll<HTMLButtonElement>('[data-zv-collapse-trigger]'),
      ).filter((button) => !button.disabled && button.closest('[data-zv-collapse]') === owner);
      const index = triggers.indexOf(element);
      const next =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? triggers.length - 1
            : (index + (event.key === 'ArrowDown' ? 1 : -1) + triggers.length) % triggers.length;
      event.preventDefault();
      triggers[next]?.focus();
    }
    return (
      <div {...rest} ref={root} class={cx(s.minWidth(0), className)}>
        <div
          {...slotRest(slotHeader)}
          class={cx(s.display('flex').alignItems('center').gap('_small'), slotHeader?.class)}
        >
          <Title
            class={s
              .margin(0)
              .fontSize('inherit')
              .fontWeight('_semibold')
              .flex('1 1 auto')
              .minWidth(0)}
          >
            <Button
              {...slotRest(slotTrigger)}
              ref={trigger}
              type="button"
              variant={slotTrigger?.variant ?? 'text'}
              tone={slotTrigger?.tone ?? 'neutral'}
              block
              id={`${id}-trigger`}
              data-zv-collapse-trigger=""
              disabled={disabled}
              aria-expanded={expanded.value}
              aria-controls={id}
              onClick={(event) => {
                if (!event.defaultPrevented) group.toggle(name);
              }}
              onKeydown={keydown}
              class={cx(s.justifyContent('flex-start').textAlign('start'), slotTrigger?.class)}
            >
              <Icon
                {...slotRest(slotIcon)}
                class={cx(
                  s.select('&:dir(rtl)', s.rotate(bx(expanded.value ? '0deg' : '90deg'))),
                  slotIcon?.class,
                )}
                icon={ChevronDown}
                aria-hidden={true}
                rotate={expanded.value ? '0deg' : '-90deg'}
              />
              {title}
            </Button>
          </Title>
          {extra}
        </div>
        <CollapseTransition
          show={expanded.value}
          role={region ? 'region' : undefined}
          id={id}
          aria-labelledby={`${id}-trigger`}
          lazy={lazy}
          unmountOnHide={unmountOnHide}
          slotContent={{
            ...slotContent,
            class: cx(s.paddingBlock('_small').paddingInline('_medium'), slotContent?.class),
          }}
        >
          {children}
        </CollapseTransition>
      </div>
    );
  },
);
