import Request from "./request/index";
import { BASE_URL, TIMEOUT } from './config';
import { message as Message } from 'antd';

export default new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  interceptors: {
    requestInterceptor: (config) => checkContentType(config),
    requestInterceptorCatch: (error) => Promise.reject(error),
    responseInterceptor: (res) => checkCode(res),
    responseInterceptorCatch: (error) => checkStatus(error)
  }
});

export const checkContentType = (config) => {
  return config
}

export const checkCode = (res) => {
  if (res.status === 200) {
    if (res.data && res.data?.code) {
      return res.data
    }
    return Promise.reject(res)
  }
  return Promise.reject(res)
}

export const checkStatus = (error) => {
  let { message } = error;
  if (message === 'Network Error') {
    message = '后端接口连接异常';
  }
  if (message.includes('timeout')) {
    message = '后端接口请求超时';
  }
  if (message.includes('Request failed with status code')) {
    const code = message.substr(message.length - 3);
    message = `后端接口${code}异常`;
  }
  Message.error(message);
  return Promise.reject(error);
};