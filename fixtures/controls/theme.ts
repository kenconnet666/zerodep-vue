import { createTheme, SystemKeywords } from '@zerodep-vue/core';

/** 私有验证主题，覆盖控件共享颜色及区域替换，不作为产品主题 API 发布。 */
export class ControlTheme extends SystemKeywords {
  override readonly color: { _brand: string; _hover: string };

  constructor(brand = 'rgb(37, 99, 235)', hover = 'rgb(29, 78, 216)') {
    super();
    this.color = { _brand: brand, _hover: hover };
  }
}

export const controlTheme = createTheme(new ControlTheme());

/** 由应用主题模块封装，组件只导入自己的 useCss，不关心底层上下文对象。 */
export function useCss() {
  return controlTheme.useCss();
}
