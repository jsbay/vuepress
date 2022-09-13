## axios 拦截器

```js
// /src/request.js

import axios from "axios";
import { ElMessageBox } from "element-plus";
// import qs from 'qs';
import { getToken } from "@/utils/auth";

import router from "../router";
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  axiosConfig: {
    error: true,
  },
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    // eslint-disable-next-line no-param-reassign
    config.headers["X-Token"] = getToken();

    // eslint-disable-next-line no-param-reassign
    // config.data = qs.stringify(config.data);

    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    // if the custom code is not 0, it is judged as an error.
    if (res.code !== 0) {
      // 配置了自动显示错误信息
      if (response.config.axiosConfig.error) {
        ElMessageBox({
          type: "error",
          title: "请求失败",
          message: res.msg || "请求接口成功, 但是接口返回了一个未知错误",
        });

        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
          // to re-login
          ElMessageBox({
            type: "error",
            title: "退出确认",
            message: "登录状态失效, 你可以点击关闭停留在本页,也可以重新登录",
            confirmButtonText: "重新登录",
            showCancelButton: true,
            cancelButtonText: "关闭",
          }).then(() => {
            router.push({
              path: "/login",
              // params:
            });
          });
        }
      }
      return Promise.reject(new Error(res.message || "Error"));
    }
    return res;
  },
  (error) => {
    console.log(`err${error}`); // for debug
    const [errcode] = /(\d*)$/.exec(error.message);
    let errMsg = "";
    if (errcode) {
      errMsg = `错误状态码: ${errcode}`;
    } else if (error.message) {
      errMsg = `错误信息: ${error.message}`;
    } else {
      errMsg =
        "请求接口时出现错误, 可能是因为网络问题, 你可以稍后重试或者联系系统维护人进行处理";
    }

    ElMessageBox.confirm(errMsg, "请求失败", {
      type: "error",
    });

    return Promise.reject(error);
  }
);

export default service;

// /src/api/xxx.js

/* eslint-disable */
import request from "@/utils/request";
/**
 * 登录
 * @param {*} data
 */
export function login(data) {
  return request.post("/api/sso/api/login", data);
}

/**
 * token 校验
 * @param {*} data
 */
export function checkToken() {
  return request.post(
    "/api/sso/api/checkToken",
    {},
    { axiosConfig: { error: false } }
  );
}
/**
 * 获取 随机名言
 * @returns
 */
export function getQuote() {
  return request.get("/api/sso/api/quote", {
    axiosConfig: { error: false },
    params: { max_length: 15, c: "k" },
  });
}

/**
 * 修改密码
 * @param {*} data
 */
export function updatePassword(data) {
  return request.post("/api/sso/api/updatePassword", data);
}
```
