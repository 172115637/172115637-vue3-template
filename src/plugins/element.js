/*
 * @Descripttion: ElementUI
 * @version: 1.0.0
 * @Author: lizhixiang
 * @Email: admin@zjjhyzd.com
 * @Date: 2021-03-31 14:40:24
 * @LastEditors: lizhixiang
 * @LastEditTime: 2021-03-31 14:43:40
 */
import ElementPlus from "element-plus";
import "../element-variables.scss";
import locale from "element-plus/lib/locale/lang/zh-cn";

export default (app) => {
  app.use(ElementPlus, { locale });
};
