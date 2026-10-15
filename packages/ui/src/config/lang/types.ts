/** 当前区域的文案和格式化配置；词条保持 lang.confirm 这样的两层访问。 */
export interface UiLanguage {
  /** 确认操作的文案。 */
  readonly confirm: string;
  /** 取消操作的文案。 */
  readonly cancel: string;
  /** 清空输入或选择的文案。 */
  readonly clear: string;
  /** 正在加载时的文案。 */
  readonly loading: string;
  /** 日期和数字的格式化区域，使用 BCP 47 标识，例如 zh-CN、en-GB。 */
  readonly locale: string;
  /** 日期展示和转换的时区，例如 Asia/Shanghai、Europe/London；默认 UTC。 */
  readonly timeZone: string;
}

/** 只覆盖写出的字段；显式 undefined 与省略相同，恢复读取父级配置。 */
export type UiLanguageInput = {
  -readonly [Key in keyof UiLanguage]?: UiLanguage[Key] | undefined;
};
