import axios from "axios";
import store from '@/store';
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + requesturl
  timeout: 5000,
});

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Toekn'] = getToken();
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 0) {
      console.log('接口信息报错', res.msg);
      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    console.log('接口信息报错' + error);
    return Promise.reject(error);
  }
)

export default service;