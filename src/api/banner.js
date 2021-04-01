/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: lizhixiang
 * @Email: admin@zjjhyzd.com
 * @Date: 2021-04-01 11:35:27
 * @LastEditors: lizhixiang
 * @LastEditTime: 2021-04-01 11:35:59
 */
import request from "@/utils/request";

export function queryBanner(id) {
  return request({
    url: "/banner/detail/" + id,
    method: "get",
  });
}
