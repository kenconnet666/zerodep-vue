/** 分割面板约束；数字 0 表示零，其余尺寸必须明确单位。 */
export type SplitLength = 0 | `${number}px` | `${number}em` | `${number}rem` | `${number}%`;

export function splitPercent(
  value: SplitLength,
  available: number,
  font: number,
  rootFont: number,
): number {
  if (value === 0) return 0;
  const match = /^(\d+(?:\.\d+)?|\.\d+)(px|em|rem|%)$/.exec(value);
  if (!match) throw new RangeError(`SplitPane 尺寸必须是非负的 px/em/rem/%：${value}`);
  const number = Number(match[1]);
  if (!Number.isFinite(number)) throw new RangeError('SplitPane 尺寸必须有限。');
  if (match[2] === '%') return number;
  if (!available) return 0;
  const pixels = number * (match[2] === 'em' ? font : match[2] === 'rem' ? rootFont : 1);
  return (pixels / available) * 100;
}

export interface SplitConstraint {
  min: number;
  max: number;
  collapsed: boolean;
}

/** 约束不可满足时仍铺满容器：按比例压缩最小值，或均匀放宽非折叠项的最大值。 */
export function fitSplit(requested: readonly number[], input: readonly SplitConstraint[]) {
  const bounds = input.map(({ min, max, collapsed }) => ({
    min: collapsed ? 0 : min,
    max: collapsed ? 0 : Math.max(min, max),
    collapsed,
  }));
  const visible = bounds.filter((item) => !item.collapsed);
  if (!visible.length) return { sizes: bounds.map(() => 0), bounds };
  const minimum = bounds.reduce((sum, item) => sum + item.min, 0);
  if (minimum > 100) for (const item of bounds) item.min *= 100 / minimum;
  const maximum = bounds.reduce((sum, item) => sum + item.max, 0);
  if (maximum < 100) for (const item of visible) item.max += (100 - maximum) / visible.length;
  const weights = bounds.map((item, i) => (item.collapsed ? 0 : Math.max(0, requested[i] ?? 1)));
  const total = weights.reduce((sum, value) => sum + value, 0);
  const sizes = weights.map((weight, i) =>
    Math.max(
      bounds[i]!.min,
      Math.min(bounds[i]!.max, total ? (weight / total) * 100 : 100 / visible.length),
    ),
  );
  for (let pass = 0; pass <= sizes.length; pass++) {
    const remaining = 100 - sizes.reduce((sum, value) => sum + value, 0);
    if (Math.abs(remaining) < 1e-8) break;
    const candidates = bounds
      .map((item, i) => ({ item, i }))
      .filter(({ item, i }) => (remaining > 0 ? sizes[i]! < item.max : sizes[i]! > item.min));
    if (!candidates.length) break;
    for (const { item, i } of candidates)
      sizes[i] = Math.max(item.min, Math.min(item.max, sizes[i]! + remaining / candidates.length));
  }
  return { sizes, bounds };
}
