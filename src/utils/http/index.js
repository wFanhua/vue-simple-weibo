const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'http://localhost:7000',
});

instance.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (+data.errno === 0) return data.data;

    if (data.message) return Promise.reject(new Error(data.message));
    return Promise.reject(new Error('请求错误'));
  },
  error => Promise.reject(error),
);

export default instance;
