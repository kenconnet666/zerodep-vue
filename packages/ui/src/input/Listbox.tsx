import { _component, cx } from '@zerodep-vue/core';
import { computed, onScopeDispose, shallowRef, useId, watch, watchPostEffect } from 'vue';
import type { Ref } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import { Scrollbar } from '../layout/Scrollbar.tsx';
import type { ScrollbarProps } from '../layout/Scrollbar.tsx';
import { findOption, useOptions } from './selection.ts';
import type { OptionKey, SelectionProps } from './selection.ts';

export interface ListboxProps<T extends {}>
  extends
    SelectionProps<T>,
    /* @vue-ignore */ Omit<
      ElementProps,
      | keyof SelectionProps<T>
      | 'children'
      | 'role'
      | 'aria-activedescendant'
      | 'aria-multiselectable'
    > {
  /** 活动项与已选业务值分离；方向键只移动活动项，Enter/空格确认。 */
  activeKey?: Ref<OptionKey | null>;
  elementRef?: Ref<HTMLDivElement | null | undefined>;
  maxHeight?: ScrollbarProps['maxHeight'];
  slotScrollbar?: Omit<ScrollbarProps, 'children' | 'tabindex' | 'viewportRef' | 'role'>;
  slotOption?: Omit<
    ElementSlotProps,
    'id' | 'role' | 'tabindex' | 'aria-selected' | 'aria-disabled' | 'aria-label'
  >;
  /** 无选项时的显示内容，默认使用区域语言。 */
  empty?: ElementProps['children'];
  children?: never;
}

/** 可独立使用的单选列表；选项不进入 Tab 序列，焦点由列表节点持有。 */
export const Listbox = _component(
  <T extends {}>({
    options,
    getKey,
    getLabel,
    isOptionDisabled,
    renderOption,
    value = shallowRef<T | null>(null),
    activeKey = shallowRef<OptionKey | null>(null),
    elementRef = shallowRef<HTMLDivElement | null | undefined>(),
    disabled = false,
    readonly: readOnly = false,
    onValueChange,
    onValueCommit,
    maxHeight = '16em',
    slotScrollbar,
    slotOption,
    empty,
    id = `zv-listbox-${useId()}`,
    tabindex = 0,
    class: className,
    children: _children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: ListboxProps<T>) => {
    const s = useCss();
    const lang = useLang();
    const viewport = shallowRef<HTMLDivElement | null | undefined>();
    const entries = useOptions({
      options: () => options,
      getKey: (option) => getKey(option),
      getLabel: (option) => getLabel(option),
      disabled: (option) => isOptionDisabled?.(option) ?? false,
    });
    const selectedKey = computed(() => (value.value === null ? null : getKey(value.value)));
    const activeIndex = computed(() =>
      entries.value.findIndex((entry) => entry.key === activeKey.value && !entry.disabled),
    );
    const activeId = computed(() =>
      activeIndex.value < 0 ? undefined : `${id}-option-${activeIndex.value}`,
    );
    watch(
      entries,
      () => {
        if (activeIndex.value >= 0) return;
        activeKey.value =
          entries.value.find((entry) => entry.key === selectedKey.value && !entry.disabled)?.key ??
          entries.value.find((entry) => !entry.disabled)?.key ??
          null;
      },
      { immediate: true, flush: 'sync' },
    );
    watchPostEffect(() => {
      const element = elementRef.value;
      const scroll = viewport.value;
      const current = activeId.value && element?.ownerDocument.getElementById(activeId.value);
      if (!current || !scroll) return;
      // 只滚动所属视口，不让嵌套浮层的活动项把整个页面带走。
      const item = current.getBoundingClientRect();
      const box = scroll.getBoundingClientRect();
      if (item.top < box.top) scroll.scrollTop += item.top - box.top;
      else if (item.bottom > box.bottom) scroll.scrollTop += item.bottom - box.bottom;
    });
    let query = '';
    let timer: ReturnType<typeof setTimeout> | undefined;
    onScopeDispose(() => clearTimeout(timer));
    function choose(index: number) {
      const entry = entries.value[index];
      // 提交前重新读取禁用策略，覆盖原生 fieldset 变更到观察器通知的间隙。
      // 一旦接受此次动作，即使模型的同步 watcher 随后禁用控件，通知也应完整发出。
      if (!entry || entry.disabled || disabled || readOnly || isOptionDisabled?.(entry.value))
        return;
      activeKey.value = entry.key;
      if (!Object.is(value.value, entry.value)) {
        value.value = entry.value;
        callCallbacks(onValueChange, entry.value);
      }
      callCallbacks(onValueCommit, entry.value);
    }
    function keydown(event: KeyboardEvent) {
      if (
        event.defaultPrevented ||
        event.isComposing ||
        disabled ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      )
        return;
      const enabled = entries.value.filter((entry) => !entry.disabled);
      const index = enabled.findIndex((entry) => entry.key === activeKey.value);
      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowUp': {
          const next =
            event.key === 'ArrowDown'
              ? Math.min(index + 1, enabled.length - 1)
              : Math.max(index - 1, 0);
          activeKey.value = enabled[next]?.key ?? null;
          event.preventDefault();
          return;
        }
        case 'Home':
        case 'End':
          activeKey.value = (event.key === 'Home' ? enabled[0] : enabled.at(-1))?.key ?? null;
          event.preventDefault();
          return;
        case 'Enter':
          event.preventDefault();
          choose(activeIndex.value);
          return;
        case ' ':
          if (!query) {
            event.preventDefault();
            choose(activeIndex.value);
            return;
          }
      }
      if (event.key.length !== 1) return;
      event.preventDefault();
      clearTimeout(timer);
      query += event.key;
      const search = [...query].every((character) => character === query[0]) ? query[0]! : query;
      const start = search.length > 1 ? activeIndex.value - 1 : activeIndex.value;
      const match = findOption(entries.value, search, start, lang.locale);
      if (match) activeKey.value = match.key;
      timer = setTimeout(() => {
        query = '';
      }, 500);
    }
    return (
      <Scrollbar
        {...slotRest(slotScrollbar)}
        tabindex={-1}
        viewportRef={viewport}
        axis="vertical"
        maxHeight={maxHeight}
        class={cx(s.minHeight(0).minWidth(0), slotScrollbar?.class, className)}
      >
        <div
          {...rest}
          id={id}
          ref={elementRef}
          role="listbox"
          tabindex={disabled ? -1 : tabindex}
          aria-disabled={disabled || undefined}
          aria-readonly={readOnly || undefined}
          aria-activedescendant={activeId.value}
          onKeydown={keydown}
          class={s.padding('0.25em').outline('none')}
          onFocus={() => {
            if (activeIndex.value < 0)
              activeKey.value = entries.value.find((entry) => !entry.disabled)?.key ?? null;
          }}
        >
          {entries.value.map((entry, index) => {
            const state = {
              active: activeKey.value === entry.key,
              selected: selectedKey.value === entry.key,
              disabled: disabled || entry.disabled,
            };
            return (
              <div
                {...slotRest(slotOption)}
                key={entry.key}
                id={`${id}-option-${index}`}
                role="option"
                aria-label={entry.label}
                aria-selected={state.selected}
                aria-disabled={state.disabled || undefined}
                data-active={state.active || undefined}
                class={cx(
                  s
                    .paddingBlock('0.375em')
                    .paddingInline('0.75em')
                    .borderRadius('_small')
                    .cursor('default')
                    .color('_textPrimary')
                    .userSelect('none')
                    .select(
                      '&[aria-selected="true"]',
                      s.backgroundColor('_surfaceSelected').color('_textSelected'),
                    )
                    .select(
                      '&[data-active]',
                      s
                        .outline('0.125em solid')
                        .outlineColor('_focusRing')
                        .outlineOffset('-0.125em'),
                    )
                    .select(
                      '&[aria-disabled="true"]',
                      s.color('_textDisabled').cursor('not-allowed'),
                    )
                    .select(
                      '@media (forced-colors: active)',
                      s.select('&[data-active]', s.outlineColor('Highlight')),
                    ),
                  slotOption?.class,
                )}
                onPointermove={(event) => {
                  if (!event.defaultPrevented && event.pointerType !== 'touch' && !state.disabled)
                    activeKey.value = entry.key;
                }}
                onPointerdown={(event) => {
                  if (disabled) return;
                  if (
                    !event.defaultPrevented &&
                    event.button === 0 &&
                    event.pointerType !== 'touch'
                  ) {
                    event.preventDefault();
                    elementRef.value?.focus({ preventScroll: true });
                  }
                }}
                onClick={(event) => {
                  if (!event.defaultPrevented) choose(index);
                }}
              >
                {renderOption ? renderOption(entry.value, state) : entry.label}
              </div>
            );
          })}
        </div>
        {!entries.value.length && (
          <div role="status" class={s.padding('_small').color('_textSecondary')}>
            {empty ?? lang.noOptions}
          </div>
        )}
      </Scrollbar>
    );
  },
);
