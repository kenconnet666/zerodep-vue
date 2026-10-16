import { _component, bx, cx } from '@zerodep-vue/core';
import { computed, ref, shallowRef, watch } from 'vue';
import type { Ref, VNodeChild } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { slotRest } from '../config/props.ts';
import type { ElementProps, ElementSlotProps } from '../config/props.ts';
import { usePointerDrag } from '../interaction/pointer.ts';
import { callCallbacks } from '../interaction/callbacks.ts';
import type { Callback } from '../interaction/callbacks.ts';
import { measureTrack, trackProgress } from '../interaction/track.ts';

export interface SliderProps extends Omit<ElementProps, 'onChange'> {
  /** 可写数值；省略时组件独立保存。外部越界值只在显示时裁剪，不反写来源。 */
  value?: Ref<number>;
  /** 最小值，默认 0。 */
  min?: number;
  /** 最大值，默认 100，必须大于 min。 */
  max?: number;
  /** 正数步长，默认 1；末端 max 始终可达，不要求恰好整除范围。 */
  step?: number;
  /** 水平从逻辑起点递增，竖向从下向上递增。 */
  orientation?: 'horizontal' | 'vertical';
  /** line 为细线圆柄，rail 为适合拖动确认的宽轨道。 */
  variant?: 'line' | 'rail';
  disabled?: boolean;
  /** 只读时保留键盘焦点与当前值，但不修改值。 */
  readOnly?: boolean;
  /** 是否允许直接点击轨道选择数值，默认 true；false 仍支持键盘操作。 */
  trackClick?: boolean;
  /** 滑块内部的装饰内容；不得嵌入其他可聚焦控件。 */
  thumb?: VNodeChild;
  /** 提供带单位等更易理解的辅助技术读值。 */
  formatValueText?: (value: number) => string;
  slotTrack?: ElementSlotProps;
  slotFill?: ElementSlotProps;
  slotThumb?: ElementSlotProps;
  slotLabel?: ElementSlotProps;
  /** 仅用户输入导致数值变化时通知，取消拖动恢复旧值也会通知。 */
  onValueChange?: Callback<[value: number]>;
  /** 指针成功释放或键盘改变值后通知一次；取消与卸载不提交。 */
  onValueCommit?: Callback<[value: number]>;
}

/** 单值输入基础组件；完成滑动只表示输入提交，业务验证由上层处理。 */
export const Slider = _component(
  ({
    value = ref(0),
    min = 0,
    max = 100,
    step = 1,
    orientation = 'horizontal',
    variant = 'line',
    disabled = false,
    readOnly = false,
    trackClick = true,
    thumb,
    formatValueText,
    slotTrack,
    slotFill,
    slotThumb,
    slotLabel,
    onValueChange,
    onValueCommit,
    'aria-label': label,
    'aria-labelledby': labelledBy,
    'aria-describedby': describedBy,
    'aria-valuetext': valueText,
    tabindex = 0,
    class: className,
    children,
    innerHTML: _innerHTML,
    textContent: _textContent,
    ...rest
  }: SliderProps) => {
    const s = useCss();
    const track = shallowRef<HTMLDivElement>();
    const handle = shallowRef<HTMLDivElement>();
    const { dragging, start, cancel } = usePointerDrag();
    const vertical = computed(() => orientation === 'vertical');
    const range = computed(() => {
      if (
        ![min, max, step].every(Number.isFinite) ||
        max <= min ||
        !Number.isFinite(max - min) ||
        step <= 0
      )
        throw new RangeError('Slider 需要有限的 min < max 和正数 step。');
      return max - min;
    });
    const current = computed(() =>
      Math.max(min, Math.min(max, Number.isFinite(value.value) ? value.value : min)),
    );
    const progress = computed(() => (current.value - min) / range.value);
    const blocked = computed(() => disabled || readOnly);
    // 范围、方向或交互权限变化时，旧拖动坐标不再适用。
    watch(() => [min, max, step, orientation, disabled, readOnly, value], cancel, {
      flush: 'sync',
    });
    function update(candidate: number) {
      let next = Math.max(min, Math.min(max, candidate));
      if (next !== min && next !== max) {
        const decimals = (number: number) => {
          const [coefficient = '', exponent = '0'] = number.toString().split('e');
          return Math.max(0, (coefficient.split('.')[1]?.length ?? 0) - Number(exponent));
        };
        const precision = Math.min(100, Math.max(decimals(min), decimals(step)));
        next = Number((min + Math.round((next - min) / step) * step).toFixed(precision));
        next = Math.max(min, Math.min(max, next));
      }
      if (Object.is(value.value, next)) return false;
      value.value = next;
      callCallbacks(onValueChange, next);
      return true;
    }
    function pointerdown(event: PointerEvent, onThumb: boolean) {
      if (
        event.defaultPrevented ||
        blocked.value ||
        event.button !== 0 ||
        event.isPrimary === false ||
        (!onThumb && !trackClick)
      )
        return;
      const rail = track.value;
      const knob = handle.value;
      const view = rail?.ownerDocument.defaultView;
      if (!rail || !knob || !view) return;
      const reversed = vertical.value || view.getComputedStyle(rail).direction === 'rtl';
      const geometry = measureTrack(rail, knob, vertical.value, reversed);
      if (geometry.length <= geometry.thumb) return;
      const box = knob.getBoundingClientRect();
      const position = (input: PointerEvent) => (vertical.value ? input.clientY : input.clientX);
      const grab = onThumb
        ? position(event) - (vertical.value ? box.top : box.left)
        : geometry.thumb / 2;
      const source = value;
      const previous = source.value;
      const move = (input: PointerEvent) =>
        update(min + trackProgress(position(input), geometry, grab) * range.value);
      start(event, move, (cancelled) => {
        if (cancelled) {
          if (value === source && !Object.is(source.value, previous)) {
            source.value = previous;
            callCallbacks(onValueChange, previous);
          }
        } else callCallbacks(onValueCommit, current.value);
      });
      knob.focus({ preventScroll: true });
      if (!onThumb) move(event);
    }
    function keydown(event: KeyboardEvent) {
      if (event.defaultPrevented || blocked.value || event.altKey || event.ctrlKey || event.metaKey)
        return;
      let next: number;
      const rtl =
        handle.value?.ownerDocument.defaultView?.getComputedStyle(handle.value).direction === 'rtl';
      // 从不在刻度上的外部值或末端开始，也走向下一个刻度。
      const tick = (current.value - min) / step;
      const advance = (amount: number) =>
        min +
        (amount > 0 ? Math.floor(tick + 1e-9) + amount : Math.ceil(tick - 1e-9) + amount) * step;
      switch (event.key) {
        case 'Home':
          next = min;
          break;
        case 'End':
          next = max;
          break;
        case 'ArrowUp':
          next = advance(1);
          break;
        case 'ArrowDown':
          next = advance(-1);
          break;
        case 'ArrowRight':
          next = advance(rtl && !vertical.value ? -1 : 1);
          break;
        case 'ArrowLeft':
          next = advance(rtl && !vertical.value ? 1 : -1);
          break;
        case 'PageUp':
          next = advance(10);
          break;
        case 'PageDown':
          next = advance(-10);
          break;
        default:
          return;
      }
      event.preventDefault();
      cancel();
      if (update(next)) callCallbacks(onValueCommit, current.value);
    }
    const trackStyle = s
      .position('relative')
      .boxSizing('border-box')
      .userSelect('none')
      .borderRadius('_pill')
      .backgroundColor('_surfaceMuted')
      .cursor(bx(blocked.value ? 'not-allowed' : dragging.value ? 'grabbing' : 'pointer'))
      .touchAction(bx(vertical.value ? 'pan-x' : 'pan-y'))
      .opacity(bx(disabled ? '_disabled' : 1));
    const fillStyle = s
      .position('absolute')
      .borderRadius('inherit')
      .backgroundColor('_primary')
      .pointerEvents('none')
      .select('@media (forced-colors: active)', s.backgroundColor('Highlight'));
    const thumbStyle = s
      .position('absolute')
      .display('flex')
      .alignItems('center')
      .justifyContent('center')
      .boxSizing('border-box')
      .touchAction('none')
      .userSelect('none')
      .cursor(bx(blocked.value ? 'not-allowed' : dragging.value ? 'grabbing' : 'grab'))
      .color('_primary')
      .backgroundColor('_surface')
      .borderWidth('0.125em')
      .borderStyle('solid')
      .borderColor('_primary')
      .boxShadow('_small')
      .select(
        '&:focus-visible',
        s
          .outlineStyle('solid')
          .outlineWidth('0.125em')
          .outlineOffset('0.125em')
          .outlineColor('_focusRing'),
      )
      .select('@media (forced-colors: active)', s.borderColor('Highlight').color('Highlight'));
    return (
      <div
        {...rest}
        data-zv-slider={variant}
        data-disabled={disabled || undefined}
        data-dragging={dragging.value || undefined}
        class={cx(s.minWidth(0).padding('0.375em'), className)}
      >
        <div
          {...slotRest(slotTrack)}
          ref={track}
          data-zv-slider-track=""
          class={cx(
            trackStyle,
            vertical.value
              ? s.width(variant === 'rail' ? '2.5em' : '1.5em').height('12em')
              : s.width('100%').height(variant === 'rail' ? '2.5em' : '1.5em'),
            variant === 'line' &&
              s.backgroundColor('transparent').select(
                '&::before',
                s
                  .content('""')
                  .position('absolute')
                  .borderRadius('_pill')
                  .backgroundColor('_borderStrong')
                  .inset(bx(vertical.value ? '0 0.625em' : '0.625em 0')),
              ),
            slotTrack?.class,
          )}
          onPointerdown={(event) => pointerdown(event, false)}
        >
          <div
            {...slotRest(slotFill)}
            aria-hidden={true}
            data-zv-slider-fill=""
            class={cx(
              fillStyle,
              vertical.value
                ? s
                    .bottom(0)
                    .left(variant === 'rail' ? 0 : '0.625em')
                    .width(variant === 'rail' ? '100%' : '0.25em')
                    .height(bx(`${progress.value * 100}%`))
                : s
                    .insetInlineStart(0)
                    .top(variant === 'rail' ? 0 : '0.625em')
                    .height(variant === 'rail' ? '100%' : '0.25em')
                    .width(bx(`${progress.value * 100}%`)),
              variant === 'rail' && s.backgroundColor('_primarySubtleBackground'),
              slotFill?.class,
            )}
          />
          {children != null && (
            <div
              {...slotRest(slotLabel)}
              aria-hidden={true}
              class={cx(
                s
                  .position('absolute')
                  .inset(0)
                  .display('flex')
                  .alignItems('center')
                  .justifyContent('center')
                  .pointerEvents('none')
                  .color('_textSecondary'),
                slotLabel?.class,
              )}
            >
              {children}
            </div>
          )}
          <div
            {...slotRest(slotThumb)}
            ref={handle}
            role="slider"
            tabindex={disabled ? -1 : tabindex}
            aria-label={label}
            aria-labelledby={labelledBy}
            aria-describedby={describedBy}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={current.value}
            aria-valuetext={formatValueText?.(current.value) ?? valueText}
            aria-orientation={orientation}
            aria-disabled={disabled || undefined}
            aria-readonly={readOnly || undefined}
            class={cx(
              thumbStyle,
              s
                .width(variant === 'rail' ? '2.5em' : '1.5em')
                .height(variant === 'rail' ? '2.5em' : '1.5em')
                .borderRadius(variant === 'rail' ? '_small' : '_circle'),
              vertical.value
                ? s
                    .left(0)
                    .bottom(bx(`${progress.value * 100}%`))
                    .transform(bx(`translateY(${progress.value * 100}%)`))
                : s
                    .top(0)
                    .insetInlineStart(bx(`${progress.value * 100}%`))
                    .transform(bx(`translateX(${-progress.value * 100}%)`))
                    .select('&:dir(rtl)', s.transform(bx(`translateX(${progress.value * 100}%)`))),
              slotThumb?.class,
            )}
            onPointerdown={(event) => {
              pointerdown(event, true);
            }}
            onKeydown={keydown}
          >
            {thumb}
          </div>
        </div>
      </div>
    );
  },
);
