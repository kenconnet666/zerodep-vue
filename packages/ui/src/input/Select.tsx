import { _component, cx } from '@zerodep-vue/core';
import { ChevronDown } from '@lucide/icons';
import { computed, nextTick, ref, shallowRef, useId, watch, watchPostEffect } from 'vue';
import type { ButtonHTMLAttributes, Ref, VNodeChild } from 'vue';
import { tabbable } from 'tabbable';
import { useCss, useLang } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { DataAttributes, ElementSlotProps } from '../config/props.ts';
import { Icon } from '../display/Icon.tsx';
import type { IconProps } from '../display/Icon.tsx';
import { FloatingPanel } from '../interaction/FloatingPanel.tsx';
import type { FloatingPanelProps } from '../interaction/FloatingPanel.tsx';
import type { OverlayCloseReason } from '../interaction/layer.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { Callback } from '../interaction/callbacks.ts';
import { ControlFrame } from './ControlFrame.tsx';
import type { ControlAppearance } from './ControlFrame.tsx';
import { Listbox } from './Listbox.tsx';
import type { ListboxProps } from './Listbox.tsx';
import { useFormReset } from './form-reset.ts';
import { findOption, useOptions } from './selection.ts';
import type { OptionKey, SelectionProps } from './selection.ts';

export type SelectOpenReason = OverlayCloseReason | 'select' | 'clear' | 'reset' | 'disabled';
export interface SelectProps<T extends {}>
  extends
    SelectionProps<T>,
    ControlAppearance,
    DataAttributes,
    /* @vue-ignore */ Omit<
      ButtonHTMLAttributes,
      | keyof SelectionProps<T>
      | keyof ControlAppearance
      | 'value'
      | 'type'
      | 'role'
      | 'aria-haspopup'
      | 'aria-expanded'
      | 'aria-controls'
      | 'aria-readonly'
      | 'aria-required'
    > {
  /** 原生表单重置基准；省略时使用首次值，null 显式重置为空。 */
  resetValue?: T | null;
  /** 原生表单提交值；默认 String(getKey(option))，不序列化整个对象。 */
  getFormValue?: (option: T) => string;
  required?: boolean;
  placeholder?: string;
  open?: Ref<boolean>;
  /** 实际触发按钮的 DOM 引用。 */
  elementRef?: Ref<HTMLButtonElement | null | undefined>;
  placement?: FloatingPanelProps['placement'];
  /** 当前值的展示；名称仍由 getLabel 提供。 */
  renderValue?: (value: T) => VNodeChild;
  maxHeight?: ListboxProps<T>['maxHeight'];
  empty?: VNodeChild;
  slotTrigger?: Omit<
    ElementSlotProps,
    | 'id'
    | 'role'
    | 'tabindex'
    | 'aria-labelledby'
    | 'aria-label'
    | 'aria-haspopup'
    | 'aria-expanded'
    | 'aria-controls'
  >;
  slotPanel?: Omit<ElementSlotProps, 'id' | 'role' | 'tabindex'>;
  slotScrollbar?: ListboxProps<T>['slotScrollbar'];
  slotOption?: ListboxProps<T>['slotOption'];
  slotIcon?: Omit<IconProps, 'icon' | 'aria-hidden'>;
  onValueReset?: Callback<[value: T | null]>;
  /** 内部交互引起的开关通知；外部赋值不重复通知。 */
  onOpenChange?: Callback<[open: boolean, reason: SelectOpenReason]>;
  onClear?: Callback<[]>;
  children?: never;
  innerHTML?: never;
  textContent?: never;
}

/** 按钮打开可独立聚焦的 Listbox；原生 select 只承担表单、自动填充与校验。 */
export const Select = _component(
  <T extends {}>({
    value = shallowRef<T | null>(null),
    options,
    getKey,
    getLabel,
    getFormValue,
    isOptionDisabled,
    renderOption,
    renderValue,
    resetValue,
    open = ref(false),
    elementRef = shallowRef<HTMLButtonElement | null | undefined>(),
    disabled = false,
    readonly: readOnly = false,
    required = false,
    placeholder = '',
    onValueChange,
    onValueCommit,
    onValueReset,
    onOpenChange,
    onClear,
    placement = 'bottom-start',
    maxHeight = '16em',
    empty,
    size,
    width,
    density,
    variant,
    status,
    color,
    backgroundColor,
    borderColor,
    clearable,
    prefix,
    suffix,
    slotPrefix,
    slotSuffix,
    slotClear,
    slotTrigger,
    slotPanel,
    slotScrollbar,
    slotOption,
    slotIcon,
    class: className,
    style,
    name,
    form,
    id = `zv-select-${useId()}`,
    onFocusout,
    'aria-label': label,
    'aria-labelledby': labelledBy,
    'aria-invalid': ariaInvalid,
    children: _children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: SelectProps<T>) => {
    const s = useCss();
    const lang = useLang();
    const frame = shallowRef<HTMLSpanElement | null | undefined>();
    const panel = shallowRef<HTMLDivElement | null | undefined>();
    const native = shallowRef<HTMLSelectElement>();
    const nativeDisabled = shallowRef(false);
    const activeKey = shallowRef<OptionKey | null>(null);
    const initialValue = value.value;
    const entries = useOptions({
      options: () => options,
      getKey: (option) => getKey(option),
      getLabel: (option) => getLabel(option),
      disabled: (option) => isOptionDisabled?.(option) ?? false,
    });
    const selectedKey = computed(() => (value.value === null ? null : getKey(value.value)));
    const selected = computed(() => entries.value.find((entry) => entry.key === selectedKey.value));
    const displayValue = computed(() => selected.value?.value ?? value.value);
    const listId = computed(() => `${id}-listbox`);
    const valueId = computed(() => `${id}-value`);
    const triggerLabel = computed(() =>
      labelledBy ? `${labelledBy} ${valueId.value}` : undefined,
    );
    const formEntries = computed(() => {
      const result = entries.value.map((entry) => ({
        ...entry,
        formValue: getFormValue ? getFormValue(entry.value) : String(entry.key),
      }));
      // 异步刷新暂时移除当前选项时，仍保留显示和原生提交值。
      if (value.value !== null && !selected.value)
        result.push({
          key: getKey(value.value),
          value: value.value,
          label: getLabel(value.value),
          disabled: false,
          formValue: getFormValue ? getFormValue(value.value) : String(getKey(value.value)),
        });
      return result;
    });
    const nativeIndex = computed(
      () => formEntries.value.findIndex((entry) => entry.key === selectedKey.value) + 1,
    );
    const blocked = () => disabled || readOnly || !!elementRef.value?.matches(':disabled');
    function changeOpen(next: boolean, reason: SelectOpenReason) {
      if ((next && blocked()) || open.value === next) return;
      open.value = next;
      callCallbacks(onOpenChange, next, reason);
    }
    function prepare(last = false, preferSelected = true) {
      const available = entries.value.filter((entry) => !entry.disabled);
      activeKey.value =
        (preferSelected
          ? available.find((entry) => entry.key === selectedKey.value)?.key
          : undefined) ??
        (last ? available.at(-1) : available[0])?.key ??
        null;
    }
    watch(
      () => [disabled, readOnly, nativeDisabled.value] as const,
      () => {
        if (disabled || readOnly || nativeDisabled.value) changeOpen(false, 'disabled');
      },
    );
    watch(
      () => elementRef.value,
      (element, _old, cleanup) => {
        if (!element) {
          nativeDisabled.value = false;
          return;
        }
        const update = () => {
          nativeDisabled.value = element.matches(':disabled');
        };
        update();
        // fieldset 的 disabled 不经过组件 Props；只观察本控件祖先，避免文档级监听。
        const observer = new MutationObserver(update);
        for (let parent: HTMLElement | null = element; parent; parent = parent.parentElement)
          observer.observe(parent, { attributes: true, attributeFilter: ['disabled'] });
        cleanup(() => observer.disconnect());
      },
      { flush: 'post' },
    );
    watch(
      () => open.value,
      (next) => {
        if (next && blocked()) {
          changeOpen(false, 'disabled');
          return;
        }
        if (next && activeKey.value === null) prepare();
      },
      { immediate: true, flush: 'sync' },
    );
    watchPostEffect(() => {
      if (native.value) native.value.selectedIndex = nativeIndex.value;
    });
    useFormReset(
      () => native.value,
      () => {
        const next = resetValue === undefined ? initialValue : resetValue;
        value.value = next;
        changeOpen(false, 'reset');
        callCallbacks(onValueReset, next);
        void nextTick(() => {
          if (native.value) native.value.selectedIndex = nativeIndex.value;
        });
      },
    );
    function change(next: T | null) {
      if (!Object.is(value.value, next)) {
        value.value = next;
        callCallbacks(onValueChange, next);
      }
    }
    function clear() {
      if (blocked() || value.value === null) return;
      change(null);
      changeOpen(false, 'clear');
      callCallbacks(onValueCommit, null);
      callCallbacks(onClear);
      elementRef.value?.focus({ preventScroll: true });
    }
    function focusout(event: FocusEvent) {
      const next = event.relatedTarget;
      if (!next) {
        // 移除聚焦的 Teleport 内容时浏览器先报告空目标；等层栈恢复后再判断。
        // frame 已卸载时不再通知失去所有权的字段和业务回调。
        void nextTick(() => {
          const element = frame.value;
          const focused = element?.ownerDocument.activeElement;
          if (
            element &&
            !element.contains(focused ?? null) &&
            !panel.value?.contains(focused ?? null)
          )
            callCallbacks(onFocusout, event);
        });
        return;
      }
      if (next instanceof Node && (frame.value?.contains(next) || panel.value?.contains(next)))
        return;
      callCallbacks(onFocusout, event);
    }
    function keydown(event: KeyboardEvent) {
      if (
        event.defaultPrevented ||
        event.isComposing ||
        blocked() ||
        event.ctrlKey ||
        event.metaKey
      )
        return;
      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowUp':
        case 'Enter':
        case ' ':
          event.preventDefault();
          prepare(event.key === 'ArrowUp');
          changeOpen(true, 'trigger');
          return;
        case 'Home':
        case 'End':
          if (event.altKey) return;
          event.preventDefault();
          activeKey.value = null;
          prepare(event.key === 'End', false);
          changeOpen(true, 'trigger');
          return;
      }
      if (event.altKey || event.key.length !== 1) return;
      const match = findOption(entries.value, event.key, -1, lang.locale);
      if (match) {
        event.preventDefault();
        activeKey.value = match.key;
        changeOpen(true, 'trigger');
      }
    }
    function listKeydown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.key !== 'Tab' || event.isComposing) return;
      const trigger = elementRef.value;
      if (!trigger) return;
      const scope = trigger.closest('dialog[open]') ?? trigger.ownerDocument.body;
      const targets = tabbable(scope).filter((element) => !panel.value?.contains(element));
      const index = targets.indexOf(trigger);
      const next = targets[index + (event.shiftKey ? -1 : 1)];
      changeOpen(false, 'outside');
      // 先移焦点，再卸载面板；层栈不会把已经离开的焦点夺回触发器。
      if (next) {
        event.preventDefault();
        next.focus();
      } else {
        // 文档首尾交回浏览器默认 Tab 行为，允许离开页面；不形成循环焦点。
        trigger.focus();
      }
    }
    return (
      <>
        <ControlFrame
          {...{
            size,
            width,
            density,
            variant,
            status,
            color,
            backgroundColor,
            borderColor,
            clearable,
            prefix,
            suffix,
            slotPrefix,
            slotSuffix,
            slotClear,
            style,
          }}
          class={className}
          elementRef={frame}
          hasValue={value.value !== null}
          disabled={disabled}
          readOnly={readOnly}
          onClear={clear}
          onFocusout={focusout}
        >
          <button
            {...slotRest(slotTrigger)}
            {...rest}
            id={id}
            ref={elementRef}
            type="button"
            data-zv-control-value=""
            disabled={disabled}
            aria-disabled={readOnly || undefined}
            aria-haspopup="listbox"
            aria-expanded={open.value && !disabled && !readOnly}
            aria-controls={open.value ? listId.value : undefined}
            aria-label={
              label
                ? `${label}: ${displayValue.value === null ? placeholder : getLabel(displayValue.value)}`
                : undefined
            }
            aria-labelledby={triggerLabel.value}
            aria-invalid={status === 'error' || ariaInvalid}
            class={cx(
              s
                .font('inherit')
                .color('inherit')
                .backgroundColor('transparent')
                .border(0)
                .padding(0)
                .display('flex')
                .alignItems('center')
                .gap('0.5em')
                .width('100%')
                .minWidth(0)
                .flex('1 1 auto')
                .textAlign('start')
                .outline('none')
                .cursor('pointer')
                .select('&:disabled', s.cursor('not-allowed')),
              slotTrigger?.class,
            )}
            onKeydown={keydown}
            onClick={(event) => {
              if (!event.defaultPrevented && !blocked()) {
                prepare();
                changeOpen(!open.value, 'trigger');
              }
            }}
          >
            <span
              id={valueId.value}
              class={cx(
                s
                  .flex('1 1 auto')
                  .minWidth(0)
                  .overflow('hidden')
                  .textOverflow('ellipsis')
                  .whiteSpace('nowrap'),
                displayValue.value === null && s.color('_textPlaceholder'),
              )}
            >
              {displayValue.value === null
                ? placeholder
                : renderValue
                  ? renderValue(displayValue.value)
                  : getLabel(displayValue.value)}
            </span>
            <Icon
              {...slotRest(slotIcon)}
              icon={ChevronDown}
              aria-hidden={true}
              class={cx(s.flexShrink(0), slotIcon?.class)}
            />
          </button>
          <select
            ref={native}
            name={name}
            form={form}
            disabled={disabled}
            required={required && !readOnly}
            tabindex={-1}
            aria-hidden="true"
            class={s
              .position('absolute')
              .width('1px')
              .height('1px')
              .padding(0)
              .border(0)
              .margin('-1px')
              .overflow('hidden')
              .clipPath('inset(50%)')
              .whiteSpace('nowrap')}
            onInvalid={(event) => {
              event.preventDefault();
              elementRef.value?.focus();
            }}
            onChange={(event) => {
              const entry = formEntries.value[(native.value?.selectedIndex ?? 0) - 1];
              if (!event.defaultPrevented && !blocked() && !entry?.disabled) {
                change(entry?.value ?? null);
                callCallbacks(onValueCommit, entry?.value ?? null);
              }
              if (native.value) native.value.selectedIndex = nativeIndex.value;
            }}
          >
            <option value="" selected={value.value === null} />
            {formEntries.value.map((entry) => (
              <option
                key={entry.key}
                value={entry.formValue}
                selected={entry.key === selectedKey.value}
              >
                {entry.label}
              </option>
            ))}
          </select>
        </ControlFrame>
        {!disabled && !readOnly && !nativeDisabled.value && (
          <FloatingPanel
            {...slotRest(slotPanel)}
            elementRef={panel}
            open={open}
            reference={elementRef.value ?? undefined}
            placement={placement}
            matchWidth
            focus="first"
            scrollable={false}
            class={slotPanel?.class}
            onFocusout={focusout}
            onClose={(reason) => callCallbacks(onOpenChange, false, reason)}
          >
            <Listbox
              options={options}
              getKey={getKey}
              getLabel={getLabel}
              isOptionDisabled={(option) => blocked() || (isOptionDisabled?.(option) ?? false)}
              renderOption={renderOption}
              value={value}
              activeKey={activeKey}
              id={listId.value}
              aria-labelledby={labelledBy || id}
              aria-required={required || undefined}
              maxHeight={maxHeight}
              empty={empty}
              slotScrollbar={slotScrollbar}
              slotOption={slotOption}
              class={s.flex('1 1 auto').minHeight(0)}
              onKeydown={listKeydown}
              onValueChange={(next) => {
                callCallbacks(onValueChange, next);
              }}
              onValueCommit={(next) => {
                changeOpen(false, 'select');
                callCallbacks(onValueCommit, next);
              }}
            />
          </FloatingPanel>
        )}
      </>
    );
  },
);
