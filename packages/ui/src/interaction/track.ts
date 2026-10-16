/** 屏幕坐标中的滑轨几何；同时适用于滚动条与数值滑块。 */
export interface TrackGeometry {
  start: number;
  length: number;
  thumb: number;
  reverse: boolean;
}

/** 读取实际渲染尺寸，CSS scale 后仍按指针所在位置移动。 */
export function measureTrack(
  track: HTMLElement,
  thumb: HTMLElement,
  vertical: boolean,
  reverse: boolean,
): TrackGeometry {
  const rail = track.getBoundingClientRect();
  const handle = thumb.getBoundingClientRect();
  const style = track.ownerDocument.defaultView?.getComputedStyle(track);
  const size = vertical ? track.offsetHeight : track.offsetWidth;
  const scale = size ? (vertical ? rail.height : rail.width) / size : 1;
  const before =
    Number.parseFloat((vertical ? style?.borderTopWidth : style?.borderLeftWidth) ?? '0') || 0;
  const after =
    Number.parseFloat((vertical ? style?.borderBottomWidth : style?.borderRightWidth) ?? '0') || 0;
  return {
    // absolute 子元素以 padding box 为包含块，边框不属于可移动区。
    start: (vertical ? rail.top : rail.left) + before * scale,
    length: (vertical ? rail.height : rail.width) - (before + after) * scale,
    thumb: vertical ? handle.height : handle.width,
    reverse,
  };
}

/** 保留抓取点，不把滑块边缘突然吸到指针中心；零长度轨道不产生 NaN。 */
export function trackProgress(position: number, track: TrackGeometry, grab: number): number {
  const travel = track.length - track.thumb;
  if (travel <= 0) return 0;
  const physical = Math.max(0, Math.min(1, (position - track.start - grab) / travel));
  return track.reverse ? 1 - physical : physical;
}
