/*
 * @Descripttion: 工具包
 * @version: 1.0.0
 * @Author: lizhixiang
 * @Email: admin@zjjhyzd.com
 * @Date: 2021-04-01 11:33:44
 * @LastEditors: lizhixiang
 * @LastEditTime: 2021-04-01 11:46:14
 */
/**
 *
 * @param {*} obj 去掉请求对象内为空、null的属性
 * @returns
 */
export function fetchDataFilter(obj) {
  let i = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] != null && obj[key].toString().trim() != "") {
      i[key] = obj[key];
    }
  });
  return i;
}
