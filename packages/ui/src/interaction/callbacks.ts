/** 普通回调或 Vue JSX 合并出的有序回调数组。 */
export type Callback<Args extends unknown[]> =
  ((...args: Args) => void) | readonly ((...args: Args) => void)[];

/** 业务通知按组合顺序调用，原生事件仍交给 Vue DOM。 */
export function callCallbacks<Args extends unknown[]>(
  callback: Callback<Args> | undefined,
  ...args: Args
): void {
  if (typeof callback === 'function') callback(...args);
  else if (callback) for (const handler of callback) handler(...args);
}
