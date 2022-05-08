import axios from 'axios';

function MyApi(apiConfig) {
  const baseURL = 'localhost:3000';

  const api = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: { 'X-header': 'guzzz', 'X-time': new Date().getTime() },
  });

  // 请求拦截
  api.interceptors.request.use(
    (config) => {
      if (localStorage.getItem('userName')) {
        config.headers['X-token'] = localStorage.getItem('userName');
      }
      return config;
    },
    (err) => {
      console.log('apiErr', err);
      Promise.reject(err);
    },
  );

  // 响应拦截
  api.interceptors.response.use(
    (res) => {
      // 请求成功对响应数据进行处理
      return res.data;
    },
    (err) => {
      // 响应错误做些什么（此处错误，到达后端后返回）
      return Promise.reject(err);
    },
  );

  return api(apiConfig);
}

export default MyApi;
