/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: lizhixiang
 * @Email: admin@zjjhyzd.com
 * @Date: 2021-04-01 11:25:09
 * @LastEditors: lizhixiang
 * @LastEditTime: 2021-04-01 11:47:40
 */
import axios from "axios";
import { Message } from "element-ui";
import router from "../router";

axios.defaults.withCredentials = true;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"; //证明是ajax 请求

const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 1000 * 60 * 20, // request timeout
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// service.interceptors.request.use(
//   (config) => {
//     if (config.method == "post" || config.method == "POST") {
//       config.headers = {
//         "Content-Type": "application/x-www-form-urlencoded" // 设置很关键
//       };
//       config.data = qs.stringify(config.data);
//     } else {
//       config.headers = {
//         "Content-Type": "application/json" // 设置很关键
//       };
//     }
//     return config;
//   },
//   (error) => {
//     // Do something with request error
//     console.log(error); // for debug
//     Promise.reject(error);
//   }
// );

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    switch (res.code) {
      case 200:
        return Promise.resolve(response);
      case 401:
        this.$confirm("尚未登录，登录后可以查看更多课程", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          closeOnClickModal: false,
        })
          .then(() => {
            router.push({
              path: "/login",
            });
          })
          .finally(() => {
            Promise.reject(response);
          });
        break;
      case 403:
        Message.closeAll();
        Message({
          message: "权限不足",
          type: "error",
          duration: 5 * 1000,
        });
        router.push({
          path: "/401",
        });
        return Promise.reject(response);
      default:
        Message.closeAll();
        Message({
          message: response.message,
          type: "error",
          duration: 5 * 1000,
        });
        return Promise.reject(response);
    }
  },
  // 网络错误、跨域弹出系统自带错误
  (error) => {
    Message.closeAll();
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.resolve(error);
  }
);

export default service;
