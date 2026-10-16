import type { UiLanguage } from './types.ts';

/** 默认简体中文配置：文案、zh-CN 格式化区域和上海时区随同一个 lang 对象切换。 */
export const zhCN: UiLanguage = Object.freeze({
  confirm: '确认',
  cancel: '取消',
  clear: '清空',
  validationFailed: '校验暂未完成，请重试',
  loading: '加载中',
  expand: '展开全文',
  collapse: '收起',
  close: '关闭',
  backTop: '回到顶部',
  navigation: '导航',
  breadcrumb: '当前位置',
  morePaths: '更多路径',
  expandNavigation: '展开导航',
  collapseNavigation: '收窄导航',
  resizePanel: '调整面板大小',
  expandPanel: '展开面板',
  collapsePanel: '收起面板',
  verticalScrollbar: '纵向滚动',
  horizontalScrollbar: '横向滚动',
  locale: 'zh-CN',
  timeZone: 'Asia/Shanghai',
});
