import type { CssAnimation } from './animation-token.ts';
import { ANIMATION } from './animation-token.ts';
import type { CssDeclarations, CssStyle } from './object-types.ts';
import { objectClass } from './object.ts';
import type { CssClass } from './style-value.ts';
import { CLASS } from './style-value.ts';

type FramePosition = 'from' | 'to' | `${number}%`;
export type Keyframes = Readonly<
  Partial<Record<FramePosition | `${FramePosition},${string}`, FrameInput>>
>;
type FrameInput =
  | CssDeclarations
  | CssStyle
  | false
  | null
  | undefined
  | readonly FrameInput[]
  | (() => FrameInput);

/** 声明可复用关键帧；实际使用时才解析主题/绑定并登记规则。 */
export function keyframes(frames: Keyframes): CssAnimation {
  const result = Object.entries(frames).map(([at, style]) => {
    if (
      !at
        .split(',')
        .every(
          (value) =>
            /^(?:from|to|(?:\d+(?:\.\d+)?|\.\d+)%)$/.test(value.trim()) &&
            (!value.includes('%') || Number.parseFloat(value) <= 100),
        )
    )
      throw new Error(`无效关键帧位置：${at}`);
    const resolved: CssClass = {
      get [CLASS]() {
        const parts = objectClass(style)[CLASS];
        for (const part of parts) {
          if (typeof part === 'string') throw new Error('关键帧不能包含普通类名。');
          for (const declaration of part.declarations) {
            if (declaration.selector !== '&' || declaration.conditions.length)
              throw new Error('关键帧只接受属性声明，不接受嵌套选择器或媒体条件。');
            if (
              /animation/i.test(declaration.property) &&
              !/animationTimingFunction$/i.test(declaration.property)
            )
              throw new Error('关键帧中只支持 animationTimingFunction 动画控制属性。');
          }
        }
        return parts.map((part) =>
          typeof part === 'string' ? part : { ...part, origin: resolved },
        );
      },
    };
    return Object.freeze({ at, style: resolved });
  });
  if (!result.length) throw new Error('keyframes 至少需要一个帧。');
  const animation = Object.freeze({
    [ANIMATION]: Object.freeze(result),
    [Symbol.toPrimitive](): never {
      throw new Error('动画引用直接用于 animationName；其他动画参数使用对应 CSS 属性。');
    },
  });
  return animation;
}
