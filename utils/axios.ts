import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://wrap.useliquid.xyz/v1/metrics/',
  headers: {
    'ngrok-skip-browser-warning': true,
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
