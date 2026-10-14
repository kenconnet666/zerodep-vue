import { createCssContext, SystemKeywords } from '@zerodep-vue/core';

/** 私有验证主题，覆盖控件共享颜色及区域替换，不作为产品主题 API 发布。 */
export class ControlTheme extends SystemKeywords {
  override readonly color: {
    /** 控件主色；默认 rgb(37, 99, 235)，用于实心背景和描边。 */
    _brand: string;
    /** 悬停背景色；默认 rgb(29, 78, 216)。 */
    _hover: string;
  };

  constructor(brand = 'rgb(37, 99, 235)', hover = 'rgb(29, 78, 216)') {
    super();
    this.color = { _brand: brand, _hover: hover };
  }
}

/** 应用在主题模块直接导出已绑定的入口，组件不依赖底层上下文对象。 */
export const { useCss, provideTheme, keywords } = createCssContext(new ControlTheme());
