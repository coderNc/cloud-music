/**
 * by nc
 * coderWhy
 */
import axios  from "axios";

class Request {
  instance;

  interceptors;

  constructor(config) {
    // 对实例和拦截器进行初始化
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    // 注册实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 所有实例的拦截器
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }

  post(config) {
    return this.request({ ...config, method: "POST" });
  }

  patch(config) {
    return this.request({ ...config, method: "PATCH" });
  }

  delete(config) {
    return this.request({ ...config, method: "DELETE" });
  }

  upload(
    config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ) {
    return this.post({ ...config });
  }

  download(config) {
    return this.request({
      ...config,
      responseType: "blob",
      transformResponse: [(res) => res],
    });
  }
}
export default Request;
