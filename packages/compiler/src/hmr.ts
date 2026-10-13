/** 开发期浏览器入口，与 Babel/Node 编译实现分离；生产转换不会导入。 */
export { registerModule, compatible } from '@zerodep-vue/css/hmr';
