/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios';

export type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean,
};

const config: IConfig = {
  baseURL: 'https://tony-auth-express.vercel.app/api',
  timeout: 10000,
  showSpinner: false,
};

export const axiosInstance = axios.create(config);

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config: any) => {
    if (config?.showSpinner) {
      // show spinner
    }

    const accessToken = localStorage.getItem('access_token');
    console.log('request', {
      accessToken,
      config,
    });

    if (accessToken) {
      config.headers['x-auth-token'] = accessToken;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('response success', response);
    return response;
  },
  async (error) => {
    console.log('response error', error);

    // handle timeout
    if (error.code === 'ECONNABORTED') {
      console.log('timeout');
    }

    // token expired
    if (error.response.status === 401) {
      try {
        const result = await axiosInstance.post('/user/refresh-token', {
          data: {
            refresh_token: window.localStorage.getItem('refresh_token'),
          },
        });
        const accessToken = result.data.data.access_token;
        window.localStorage.setItem('access_token', accessToken);
        axiosInstance.defaults.headers['x-auth-token'] = accessToken;
        // api A -> expire token -> api refresh token -> auto call api A
        return axiosInstance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    // handle other error
    switch (error.response.status) {
      case 400: {
        // code logic
        break;
      }
      case 500: {
        // code logic
        break;
      }
      default:
        break;
    }

    return Promise.reject(error);
  },
);
