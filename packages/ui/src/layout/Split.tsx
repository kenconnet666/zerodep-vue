import { _component, bx, cx } from '@zerodep-vue/core';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from '@lucide/icons';
import type { LucideIconData } from '@lucide/icons';
import {
  Comment,
  Fragment,
  computed,
  isRef,
  isVNode,
  onMounted,
  provide,
  ref,
  shallowRef,
  useId,
  watch,
  watchPostEffect,
} from 'vue';
import type { Ref, VNode, VNodeChild } from 'vue';
import { useCss, useLang } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import { Button } from '../input/Button.tsx';
import { usePointerDrag } from '../interaction/pointer.ts';
import { SplitPane } from './SplitPane.tsx';
import type { SplitPaneProps } from './SplitPane.tsx';
import { fitSplit, splitPercent } from './split-layout.ts';
import { splitKey } from './split-context.ts';

export interface SplitResizeEvent {
  /** 各面板百分比，按稳定 name 索引。 */
  sizes: Readonly<Record<string, number>>;
  before: string;
  after: string;
  source: 'pointer' | 'keyboard';
  /** 仅 onResizeEnd 使用；取消时恢复交互前尺寸。 */
  cancelled: boolean;
}
export interface SplitProps extends ElementProps {
  /** 按名称保存的期望比例；省略项均分剩余空间。容器约束可改变实际比例。 */
  sizes?: Ref<Readonly<Record<string, number>>>;
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  /** 方向键每次移动的百分比点，默认 1；Shift 为十倍。 */
  keyboardStep?: number;
  slotSeparator?: Omit<ElementSlotProps, 'id' | 'role' | 'tabindex'>;
  onSizesChange?: (sizes: Readonly<Record<string, number>>) => void;
  onResizeStart?: (event: SplitResizeEvent) => void;
  onResizeEnd?: (event: SplitResizeEvent) => void;
  onCollapseChange?: (name: string, collapsed: boolean) => void;
}
interface Pane {
  node: VNode;
  props: SplitPaneProps;
}

/** 多面板布局；每根分隔条只调整相邻两块，约束到边界后停止，不暗中挤动远端面板。 */
export const Split = _component(
  ({
    sizes = ref<Readonly<Record<string, number>>>({}),
    direction = 'horizontal',
    disabled = false,
    keyboardStep = 1,
    slotSeparator,
    onSizesChange,
    onResizeStart,
    onResizeEnd,
    onCollapseChange,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: SplitProps) => {
    const s = useCss();
    const lang = useLang();
    const root = shallowRef<HTMLDivElement>();
    let measured = { available: 0, font: 16, rootFont: 16, rtl: false };
    const metrics = shallowRef(measured);
    const localCollapsed = shallowRef<ReadonlySet<string>>(new Set());
    const restored = new Map<string, number>();
    const id = `zv-split-${useId()}`;
    const { start, cancel, dragging } = usePointerDrag();
    const vertical = computed(() => direction === 'vertical');
    const panes = computed(() => {
      const result: Pane[] = [];
      const names = new Set<string>();
      const visit = (child: VNodeChild): void => {
        if (Array.isArray(child)) {
          child.forEach(visit);
          return;
        }
        if (
          child == null ||
          typeof child === 'boolean' ||
          (typeof child === 'string' && !child.trim())
        )
          return;
        if (!isVNode(child)) throw new Error('Split 只接受 SplitPane 和 Fragment。');
        if (child.type === Comment) return;
        if (child.type === Fragment) {
          visit(child.children as VNodeChild);
          return;
        }
        if (child.type !== SplitPane) throw new Error('Split 只接受直接 SplitPane 子节点。');
        const props = child.props as SplitPaneProps | null;
        if (!props || typeof props.name !== 'string' || !props.name || names.has(props.name))
          throw new Error('SplitPane name 必须非空且唯一。');
        if (props.collapsed !== undefined && !isRef(props.collapsed))
          throw new TypeError('SplitPane collapsed 必须是可写 Ref。');
        names.add(props.name);
        result.push({ node: child, props });
      };
      visit(children);
      return result;
    });
    const collapsed = (pane: Pane) =>
      pane.props.collapsed?.value ?? localCollapsed.value.has(pane.props.name);
    const layout = computed(() => {
      const { available, font, rootFont } = metrics.value;
      const values = panes.value.map(({ props }) =>
        Object.hasOwn(sizes.value, props.name) ? sizes.value[props.name] : undefined,
      );
      for (const value of values)
        if (value !== undefined && (!Number.isFinite(value) || value < 0))
          throw new RangeError('Split sizes 必须是非负有限百分比。');
      const supplied = values.reduce<number>((sum, value) => sum + (value ?? 0), 0);
      const missing = values.filter((value) => value === undefined).length;
      return fitSplit(
        values.map((value) => value ?? (supplied < 100 ? (100 - supplied) / missing : 1)),
        panes.value.map((pane) => ({
          min: splitPercent(pane.props.min ?? 0, available, font, rootFont),
          max:
            pane.props.max === undefined
              ? 100
              : splitPercent(pane.props.max, available, font, rootFont),
          collapsed: collapsed(pane),
        })),
      );
    });
    const record = () =>
      Object.fromEntries(
        panes.value.map((pane, index) => [pane.props.name, layout.value.sizes[index]!]),
      ) as Record<string, number>;
    provide(splitKey, {
      focusHandle(name) {
        const paneId = `${id}-${encodeURIComponent(name)}`;
        const handles = Array.from(
          root.value?.querySelectorAll<HTMLElement>('[aria-controls]') ?? [],
        );
        const candidates = handles.filter(
          (element) => element.getAttribute('aria-controls') === paneId,
        );
        const handle =
          candidates.find(
            (element) => element.tagName === 'BUTTON' && !element.hasAttribute('disabled'),
          ) ?? candidates[0];
        handle?.focus({ preventScroll: true });
      },
      pane(name) {
        const index = panes.value.findIndex((pane) => pane.props.name === name);
        // 父级删除节点后、Vue 卸载子级前，子级的同步焦点观察仍可能读取一次。
        if (index < 0) return { id: `${id}-${encodeURIComponent(name)}`, size: 0, collapsed: true };
        return {
          id: `${id}-${encodeURIComponent(name)}`,
          size: layout.value.sizes[index]!,
          collapsed: collapsed(panes.value[index]!),
        };
      },
    });
    // 默认插槽只能在 render 中求值；挂载后再观察 render 已解析的面板快照。
    onMounted(() => {
      const collapseStates = new Map<string, boolean>();
      watch(
        [
          () => sizes,
          () => direction,
          () => disabled,
          () => keyboardStep,
          () =>
            JSON.stringify(
              panes.value.map((pane) => [
                pane.props.name,
                pane.props.min,
                pane.props.max,
                pane.props.resizable,
                collapsed(pane),
              ]),
            ),
        ],
        cancel,
        { flush: 'post' },
      );
      // 正尺寸快照独立于折叠后的 0；按钮和外部 Ref 共用同一恢复路径。
      watch(
        layout,
        (current) => {
          panes.value.forEach((pane, index) => {
            const size = current.sizes[index]!;
            const name = pane.props.name;
            if (!collapsed(pane) && !collapseStates.get(name) && size > 0) restored.set(name, size);
            else if (
              !restored.has(name) &&
              Object.hasOwn(sizes.value, name) &&
              sizes.value[name]! > 0
            )
              restored.set(name, sizes.value[name]!);
          });
        },
        { immediate: true, flush: 'post' },
      );
      watch(
        () => JSON.stringify(panes.value.map((pane) => [pane.props.name, collapsed(pane)])),
        () => {
          const opening = new Map<string, number>();
          for (const pane of panes.value) {
            const name = pane.props.name;
            const current = collapsed(pane);
            const previous = collapseStates.get(name);
            collapseStates.set(name, current);
            if (previous && !current)
              opening.set(name, restored.get(name) ?? 100 / panes.value.length);
          }
          // 同一轮展开多块时一起保留快照，不能让后恢复的项再次缩小前一项。
          if (opening.size) {
            const actual = record();
            const desired = Array.from(opening.values()).reduce((sum, value) => sum + value, 0);
            const reserved = Math.min(100, desired);
            for (const [name, value] of opening)
              actual[name] = desired ? (value / desired) * reserved : 0;
            const others = panes.value.filter(
              (item) => !opening.has(item.props.name) && !collapsed(item),
            );
            const total = others.reduce((sum, item) => sum + actual[item.props.name]!, 0);
            for (const item of others)
              actual[item.props.name] = total
                ? (actual[item.props.name]! / total) * (100 - reserved)
                : (100 - reserved) / others.length;
            sizes.value = actual;
          }
          const names = new Set(panes.value.map((pane) => pane.props.name));
          for (const name of collapseStates.keys())
            if (!names.has(name)) {
              collapseStates.delete(name);
              restored.delete(name);
            }
        },
        { immediate: true, flush: 'post' },
      );
    });
    watchPostEffect((cleanup) => {
      const element = root.value;
      const view = element?.ownerDocument.defaultView;
      if (!element || !view) return;
      void direction;
      void panes.value;
      const measure = () => {
        const style = view.getComputedStyle(element);
        const bars = Array.from(element.children).filter((child) =>
          child.hasAttribute('data-zv-split-bar'),
        );
        const used = bars.reduce(
          (sum, child) =>
            sum +
            (vertical.value
              ? (child as HTMLElement).offsetHeight
              : (child as HTMLElement).offsetWidth),
          0,
        );
        const padding = vertical.value
          ? (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0)
          : (parseFloat(style.paddingLeft) || 0) + (parseFloat(style.paddingRight) || 0);
        const next = {
          available: Math.max(
            0,
            (vertical.value ? element.clientHeight : element.clientWidth) - padding - used,
          ),
          font: parseFloat(style.fontSize) || 16,
          rootFont:
            parseFloat(view.getComputedStyle(element.ownerDocument.documentElement).fontSize) || 16,
          rtl: style.direction === 'rtl',
        };
        if (next.available !== measured.available || next.rtl !== measured.rtl) cancel();
        measured = next;
        metrics.value = next;
      };
      const observer =
        typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(measure);
      observer?.observe(element);
      for (const bar of element.querySelectorAll<HTMLElement>(':scope > [data-zv-split-bar]'))
        observer?.observe(bar);
      const mutation = new MutationObserver(measure);
      for (let ancestor: HTMLElement | null = element; ancestor; ancestor = ancestor.parentElement)
        mutation.observe(ancestor, {
          attributes: true,
          attributeFilter: ['dir', 'class', 'style'],
        });
      view.addEventListener('resize', measure);
      measure();
      cleanup(() => {
        observer?.disconnect();
        mutation.disconnect();
        view.removeEventListener('resize', measure);
      });
    });
    function boundary(index: number) {
      const before = panes.value[index]!;
      const after = panes.value[index + 1]!;
      const a = layout.value.bounds[index]!;
      const b = layout.value.bounds[index + 1]!;
      const total = layout.value.sizes[index]! + layout.value.sizes[index + 1]!;
      const min = Math.max(a.min, total - b.max);
      const max = Math.min(a.max, total - b.min);
      return {
        before,
        after,
        total,
        min,
        max,
        blocked:
          disabled ||
          before.props.resizable === false ||
          after.props.resizable === false ||
          a.collapsed ||
          b.collapsed ||
          max - min < 1e-8,
      };
    }
    function change(index: number, requested: number) {
      const bounds = boundary(index);
      const value = Math.max(bounds.min, Math.min(bounds.max, requested));
      const next = record();
      next[bounds.before.props.name] = value;
      next[bounds.after.props.name] = bounds.total - value;
      sizes.value = next;
      onSizesChange?.(next);
    }
    function resizeEvent(
      index: number,
      source: SplitResizeEvent['source'],
      cancelled = false,
    ): SplitResizeEvent {
      return {
        sizes: record(),
        before: panes.value[index]!.props.name,
        after: panes.value[index + 1]!.props.name,
        source,
        cancelled,
      };
    }
    function collapse(pane: Pane) {
      if (disabled || !pane.props.collapsible) return;
      const name = pane.props.name;
      const next = !collapsed(pane);
      if (pane.props.collapsed) pane.props.collapsed.value = next;
      else {
        const set = new Set(localCollapsed.value);
        if (next) set.add(name);
        else set.delete(name);
        localCollapsed.value = set;
      }
      onCollapseChange?.(name, next);
    }
    function pointerdown(event: PointerEvent, index: number) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.isPrimary === false ||
        boundary(index).blocked ||
        !root.value ||
        !metrics.value.available
      )
        return;
      const element = root.value;
      const box = element.getBoundingClientRect();
      const axis = vertical.value;
      const scale = axis ? box.height / element.offsetHeight : box.width / element.offsetWidth;
      if (!scale) return;
      const origin = axis ? event.clientY : event.clientX;
      const initial = layout.value.sizes[index]!;
      const source = sizes;
      const previous = source.value;
      const available = metrics.value.available;
      const sign = !axis && metrics.value.rtl ? -1 : 1;
      const initialEvent = resizeEvent(index, 'pointer');
      start(
        event,
        (next) =>
          change(
            index,
            initial +
              (((axis ? next.clientY : next.clientX) - origin) / scale / available) * 100 * sign,
          ),
        (cancelled) => {
          if (cancelled && sizes === source) {
            source.value = previous;
            onSizesChange?.(record());
          }
          onResizeEnd?.({ ...initialEvent, sizes: record(), cancelled });
        },
      );
      if (dragging.value) onResizeStart?.(initialEvent);
    }
    function keydown(event: KeyboardEvent, index: number) {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || disabled)
        return;
      const bounds = boundary(index);
      if (event.key === 'Enter' && bounds.before.props.collapsible) {
        event.preventDefault();
        collapse(bounds.before);
        return;
      }
      if (bounds.blocked) return;
      if (!Number.isFinite(keyboardStep) || keyboardStep <= 0)
        throw new RangeError('Split keyboardStep 必须是正数。');
      const step = keyboardStep * (event.shiftKey ? 10 : 1);
      let requested = layout.value.sizes[index]!;
      switch (event.key) {
        case 'Home':
          requested = bounds.min;
          break;
        case 'End':
          requested = bounds.max;
          break;
        case 'ArrowUp':
          if (!vertical.value) return;
          requested -= step;
          break;
        case 'ArrowDown':
          if (!vertical.value) return;
          requested += step;
          break;
        case 'ArrowLeft':
          if (vertical.value) return;
          requested += metrics.value.rtl ? step : -step;
          break;
        case 'ArrowRight':
          if (vertical.value) return;
          requested += metrics.value.rtl ? -step : step;
          break;
        default:
          return;
      }
      event.preventDefault();
      cancel();
      onResizeStart?.(resizeEvent(index, 'keyboard'));
      change(index, requested);
      onResizeEnd?.(resizeEvent(index, 'keyboard'));
    }
    const barStyle = s.position('relative').flex('0 0 0.5em').touchAction('none');
    const handleStyle = s
      .position('absolute')
      .inset(0)
      .outlineOffset('-0.125em')
      .select(
        '&::before',
        s
          .content('""')
          .position('absolute')
          .backgroundColor('_divider')
          .borderRadius('_pill')
          .inset(bx(vertical.value ? '0.1875em 0' : '0 0.1875em')),
      )
      .select('&:hover::before, &:focus-visible::before', s.backgroundColor('_primary'))
      .select(
        '&:focus-visible',
        s.outlineStyle('solid').outlineWidth('0.125em').outlineColor('_focusRing'),
      );
    return (
      <div
        {...rest}
        ref={root}
        data-zv-split={direction}
        class={cx(
          s
            .display('flex')
            .flexDirection(bx(vertical.value ? 'column' : 'row'))
            .minWidth(0)
            .minHeight(0)
            .overflow('hidden'),
          className,
        )}
      >
        {panes.value.map((pane, index) => (
          <Fragment key={pane.props.name}>
            {pane.node}
            {index < panes.value.length - 1 && (
              <div data-zv-split-bar="" class={barStyle}>
                <div
                  {...slotRest(slotSeparator)}
                  role="separator"
                  tabindex={boundary(index).blocked ? -1 : 0}
                  aria-disabled={boundary(index).blocked || undefined}
                  aria-controls={`${id}-${encodeURIComponent(pane.props.name)}`}
                  aria-label={pane.props.label ?? `${lang.resizePanel}: ${pane.props.name}`}
                  aria-orientation={vertical.value ? 'horizontal' : 'vertical'}
                  aria-valuemin={boundary(index).min}
                  aria-valuemax={boundary(index).max}
                  aria-valuenow={layout.value.sizes[index]}
                  class={cx(
                    handleStyle,
                    s.cursor(
                      bx(
                        boundary(index).blocked
                          ? 'default'
                          : vertical.value
                            ? 'row-resize'
                            : 'col-resize',
                      ),
                    ),
                    slotSeparator?.class,
                  )}
                  onPointerdown={(event) => pointerdown(event, index)}
                  onKeydown={(event) => keydown(event, index)}
                />
                {[pane, panes.value[index + 1]!].map((item, side) => {
                  if (!item.props.collapsible) return null;
                  const towardStart = collapsed(item) ? side === 1 : side === 0;
                  let icon: LucideIconData;
                  if (vertical.value) icon = towardStart ? ChevronUp : ChevronDown;
                  else {
                    const towardLeft = metrics.value.rtl ? !towardStart : towardStart;
                    icon = towardLeft ? ChevronLeft : ChevronRight;
                  }
                  return (
                    <Button
                      key={item.props.name}
                      type="button"
                      tone="neutral"
                      variant="soft"
                      iconOnly
                      density="compact"
                      disabled={disabled}
                      aria-label={`${item.props.label ?? item.props.name}: ${collapsed(item) ? lang.expandPanel : lang.collapsePanel}`}
                      aria-expanded={!collapsed(item)}
                      aria-controls={`${id}-${encodeURIComponent(item.props.name)}`}
                      icon={icon}
                      class={s
                        .position('absolute')
                        .zIndex(1)
                        .fontSize('0.75em')
                        .minHeight('1.5em')
                        .padding(0)
                        .top(bx(vertical.value ? '-0.5em' : `calc(50% + ${(side - 1) * 1.5}em)`))
                        .insetInlineStart(
                          bx(vertical.value ? `calc(50% + ${(side - 1) * 1.5}em)` : '-0.5em'),
                        )}
                      onClick={() => collapse(item)}
                    />
                  );
                })}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    );
  },
);
