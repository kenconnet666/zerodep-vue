import { computed } from 'vue';
import type { Ref, VNodeChild } from 'vue';
import type { Callback } from '../interaction/callbacks.ts';

/** 选项集合内唯一的稳定键；数字 1 与字符串 "1" 是不同选项。 */
export type OptionKey = string | number;

export interface OptionState {
  readonly active: boolean;
  readonly selected: boolean;
  readonly disabled: boolean;
}

export interface SelectionProps<T extends {}> {
  /** 完整业务值；null 表示未选择。选项刷新或暂时缺失不会改写模型。 */
  value?: Ref<T | null>;
  options: readonly T[];
  /** 集合内唯一的稳定键，不依赖对象引用相等。 */
  getKey: (option: T) => OptionKey;
  /** 纯文本名称，用于显示、键入定位及可访问名称。 */
  getLabel: (option: T) => string;
  isOptionDisabled?: (option: T) => boolean;
  /** 定制选项展示；不在 option 内放置按钮、链接等交互元素。 */
  renderOption?: (option: T, state: OptionState) => VNodeChild;
  disabled?: boolean;
  readonly?: boolean;
  /** 用户选择改变模型后通知；外部赋值与选项刷新不触发。 */
  onValueChange?: Callback<[value: T | null]>;
  /** 每次有效用户确认通知，包括再次确认同一选项。 */
  onValueCommit?: Callback<[value: T | null]>;
}

/** 选择控件共用键与文本校验；业务对象始终保留原始身份。 */
export function useOptions<T extends {}>(props: {
  options(): readonly T[];
  getKey(option: T): OptionKey;
  getLabel(option: T): string;
  disabled(option: T): boolean;
}) {
  return computed(() => {
    const keys = new Set<OptionKey>();
    return props.options().map((value) => {
      if (value == null) throw new TypeError('选项不能为 null 或 undefined；null 保留为空选择。');
      const key = props.getKey(value);
      if (typeof key !== 'string' && (typeof key !== 'number' || !Number.isFinite(key)))
        throw new TypeError('选项键必须是字符串或有限数字。');
      if (keys.has(key)) throw new RangeError(`选项键必须唯一：${String(key)}`);
      keys.add(key);
      const label = props.getLabel(value);
      if (typeof label !== 'string') throw new TypeError('选项名称必须是字符串。');
      return { key, value, label, disabled: props.disabled(value) };
    });
  });
}

/** 按当前语言比较前缀；同一字符连按用于轮换候选。 */
export function findOption<T extends { label: string; disabled: boolean }>(
  options: readonly T[],
  query: string,
  current: number,
  locale: string,
): T | undefined {
  const collator = new Intl.Collator(locale, { usage: 'search', sensitivity: 'base' });
  for (let offset = 1; offset <= options.length; offset++) {
    const option = options[(current + offset + options.length) % options.length]!;
    if (
      !option.disabled &&
      collator.compare(option.label.trimStart().slice(0, query.length), query) === 0
    )
      return option;
  }
  return undefined;
}
