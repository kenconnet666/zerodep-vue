import type { Props } from '@zerodep-vue/core';
import { _component, _span } from '@zerodep-vue/core';
import { onMounted, onScopeDispose, shallowRef, watchEffect } from 'vue';
import { useCss } from '../config/Provider.tsx';
import { useMediaQuery } from '../interaction/media.ts';
export type RippleProps = Props<
  typeof _span,
  {
    /** 关闭效果并立即清理正在播放的波纹。 */
    disabled?: boolean;
    /** 波纹内容由组件管理。 */
    children?: never;
    innerHTML?: never;
    textContent?: never;
    'aria-hidden'?: never;
    'data-zv-ripple'?: never;
  }
>;

/**
 * 放在 position:relative 的原生交互元素内，监听父元素的指针和键盘激活。
 * 仅负责装饰反馈，不改变事件默认行为、语义、焦点或布局尺寸。
 */
export const Ripple = _component(({ disabled = false, css: cssProp, ...rest }: RippleProps) => {
  const css = useCss();
  const root = shallowRef<HTMLSpanElement>();
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const waves = new Map<
    number | 'keyboard',
    {
      release(): void;
      dispose(): void;
    }
  >();
  const style = css({
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    overflow: 'hidden',
    pointerEvents: 'none',
    opacity: '_ripple',
    transitionDuration: '_slow',
    transitionTimingFunction: '_standard',
    '& > span': {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: 'currentColor',
      pointerEvents: 'none',
    },
    '@media (prefers-reduced-motion: reduce)': {
      display: 'none',
    },
    '@media (forced-colors: active)': {
      display: 'none',
    },
  });
  function clear() {
    for (const wave of waves.values()) wave.dispose();
    waves.clear();
  }
  watchEffect(() => {
    if (disabled || reduced.value) clear();
  });
  onMounted(() => {
    const layer = root.value;
    const parent = layer?.parentElement;
    const view = parent?.ownerDocument.defaultView;
    if (!layer || !parent || !view) return;
    const document = parent.ownerDocument;
    let stopRelease: (() => void) | undefined;
    const release = () => {
      for (const wave of waves.values()) wave.release();
    };
    const start = (id: number | 'keyboard', x?: number, y?: number) => {
      if (
        disabled ||
        reduced.value ||
        parent.matches(':disabled, [aria-disabled="true"]') ||
        !layer.animate
      )
        return;
      if (waves.size >= 6) {
        const first = waves.entries().next().value;
        if (first) {
          first[1].dispose();
          waves.delete(first[0]);
        }
      }
      waves.get(id)?.dispose();
      const rect = layer.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      // 把屏幕坐标换回元素坐标，祖先缩放时波纹仍以真实按下位置为中心。
      const width = layer.clientWidth || rect.width;
      const height = layer.clientHeight || rect.height;
      const localX =
        x === undefined
          ? width / 2
          : Math.max(0, Math.min(width, ((x - rect.left) * width) / rect.width));
      const localY =
        y === undefined
          ? height / 2
          : Math.max(0, Math.min(height, ((y - rect.top) * height) / rect.height));
      const diameter =
        Math.hypot(Math.max(localX, width - localX), Math.max(localY, height - localY)) * 2;
      const node = document.createElement('span');
      node.style.width = node.style.height = `${diameter}px`;
      node.style.left = `${localX - diameter / 2}px`;
      node.style.top = `${localY - diameter / 2}px`;
      layer.append(node);
      const computed = view.getComputedStyle(layer);
      const time = computed.transitionDuration.split(',')[0] ?? '0s';
      const duration = Math.max(0, Number.parseFloat(time) * (time.endsWith('ms') ? 1 : 1000)) || 0;
      const growth = node.animate(
        [
          {
            transform: 'scale(0)',
          },
          {
            transform: 'scale(1)',
          },
        ],
        {
          duration,
          easing: computed.transitionTimingFunction || 'ease-out',
          fill: 'forwards',
        },
      );
      let fading: Animation | undefined;
      let disposed = false;
      let released = false;
      const wave = {
        dispose() {
          disposed = true;
          growth.cancel();
          fading?.cancel();
          node.remove();
        },
        release() {
          if (released || disposed) return;
          released = true;
          void growth.finished.then(
            () => {
              if (disposed) return;
              fading = node.animate(
                [
                  {
                    opacity: 1,
                  },
                  {
                    opacity: 0,
                  },
                ],
                {
                  duration: Math.min(180, duration),
                  fill: 'forwards',
                },
              );
              void fading.finished.then(
                () => {
                  wave.dispose();
                  if (waves.get(id) === wave) waves.delete(id);
                },
                () => {},
              );
            },
            () => {},
          );
        },
      };
      waves.set(id, wave);
      if (!stopRelease) {
        const pointerEnd = (event: PointerEvent) => waves.get(event.pointerId)?.release();
        document.addEventListener('pointerup', pointerEnd);
        document.addEventListener('pointercancel', pointerEnd);
        stopRelease = () => {
          document.removeEventListener('pointerup', pointerEnd);
          document.removeEventListener('pointercancel', pointerEnd);
        };
      }
    };
    const pointerDown = (event: PointerEvent) => {
      if (event.button === 0 && !event.defaultPrevented)
        start(event.pointerId, event.clientX, event.clientY);
    };
    const keyDown = (event: KeyboardEvent) => {
      if (
        event.target === parent &&
        !event.repeat &&
        !event.defaultPrevented &&
        (event.key === 'Enter' || event.key === ' ')
      )
        start('keyboard');
    };
    const keyUp = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') waves.get('keyboard')?.release();
    };
    const click = (event: MouseEvent) => {
      if (event.detail === 0 && !event.defaultPrevented && !waves.has('keyboard')) {
        start('keyboard');
        waves.get('keyboard')?.release();
      }
    };
    parent.addEventListener('pointerdown', pointerDown);
    parent.addEventListener('keydown', keyDown);
    parent.addEventListener('keyup', keyUp);
    parent.addEventListener('click', click);
    parent.addEventListener('blur', release);
    view.addEventListener('blur', release);
    onScopeDispose(() => {
      clear();
      stopRelease?.();
      parent.removeEventListener('pointerdown', pointerDown);
      parent.removeEventListener('keydown', keyDown);
      parent.removeEventListener('keyup', keyUp);
      parent.removeEventListener('click', click);
      parent.removeEventListener('blur', release);
      view.removeEventListener('blur', release);
    });
  });
  return <_span css={[style, cssProp]} {...rest} ref={root} aria-hidden="true" data-zv-ripple="" />;
});
