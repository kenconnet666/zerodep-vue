import type { UiLanguage } from './types.ts';

/** 简体中文配置：文案、zh-CN 格式化区域和 UTC 时区随同一个 lang 对象切换。 */
export const zhCN: UiLanguage = Object.freeze({
  confirm: '确认',
  cancel: '取消',
  clear: '清空',
  loading: '加载中',
  locale: 'zh-CN',
  timeZone: 'UTC',
});
