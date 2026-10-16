/** 当前区域的文案和格式化配置；词条保持 lang.confirm 这样的两层访问。 */
export interface UiLanguage {
  /** 确认操作的文案。 */
  readonly confirm: string;
  /** 取消操作的文案。 */
  readonly cancel: string;
  /** 清空输入或选择的文案。 */
  readonly clear: string;
  /** 校验规则执行异常时的提示；业务规则消息由 Zod schema 提供。 */
  readonly validationFailed: string;
  /** 正在加载时的文案。 */
  readonly loading: string;
  /** 展开被省略的完整内容。 */
  readonly expand: string;
  /** 收起已展开的内容。 */
  readonly collapse: string;
  /** 关闭浮层或抽屉。 */
  readonly close: string;
  /** 回到当前滚动区域顶部。 */
  readonly backTop: string;
  /** 默认导航区域名称。 */
  readonly navigation: string;
  /** 面包屑导航区域名称。 */
  readonly breadcrumb: string;
  /** 显示被折叠的路径。 */
  readonly morePaths: string;
  /** 展开侧边导航。 */
  readonly expandNavigation: string;
  /** 收窄侧边导航。 */
  readonly collapseNavigation: string;
  /** 分割条没有显式面板标签时的名称。 */
  readonly resizePanel: string;
  /** 展开分割面板。 */
  readonly expandPanel: string;
  /** 收起分割面板。 */
  readonly collapsePanel: string;
  /** 可键盘操作的纵向滚动滑块名称。 */
  readonly verticalScrollbar: string;
  /** 可键盘操作的横向滚动滑块名称。 */
  readonly horizontalScrollbar: string;
  /** 日期和数字的格式化区域，使用 BCP 47 标识，例如 zh-CN、en-GB。 */
  readonly locale: string;
  /** 日期展示和转换的时区，例如 Asia/Shanghai、Europe/London；默认 Asia/Shanghai。 */
  readonly timeZone: string;
}

/** 只覆盖写出的字段；显式 undefined 与省略相同，恢复读取父级配置。 */
export type UiLanguageInput = {
  -readonly [Key in keyof UiLanguage]?: UiLanguage[Key] | undefined;
};
