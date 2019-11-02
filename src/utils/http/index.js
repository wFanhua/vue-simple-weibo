import axios from 'axios';
import UserLocal from '../../domains/user/UserLocal';

const instance = axios.create({
  baseURL: 'http://localhost:7000',
  validateStatus(status) {
    return status >= 200 && status < 500;
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = UserLocal.getUserToken();
    if (token) {
      const { headers } = config;
      Object.defineProperty(headers, 'jwt-token', {
        value: token,
      });
    }
    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (+data.errno === 0) return data.data;

    return Promise.reject(new Error(data.message || '请求错误'));
  },
  () => Promise.reject(new Error('服务器错误')),
);

export default instance;
