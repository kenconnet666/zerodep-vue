import type { UiLanguage } from './types.ts';

/** 美式英文配置：文案、en-US 格式化区域和 UTC 时区随同一个 lang 对象切换。 */
export const enUS: UiLanguage = Object.freeze({
  confirm: 'Confirm',
  cancel: 'Cancel',
  clear: 'Clear',
  loading: 'Loading',
  expand: 'Show more',
  collapse: 'Show less',
  locale: 'en-US',
  timeZone: 'UTC',
});
