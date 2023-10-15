/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { setLoading, showError } from '../redux/app.slice';

export type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean,
};

export type IResponse = AxiosResponse & {
  config: {
    showSpinner?: boolean,
  }
};

const config: IConfig = {
  baseURL: 'https://tony-auth-express.vercel.app/api',
  timeout: 10000,
  showSpinner: false,
};

export const axiosInstance = axios.create(config);

const cancel: any = null;

export const initRequest = (store: any) => {
  let requestCount = 0;

  function countLoading() {
    requestCount -= 1;
    if (requestCount === 0) {
      store.dispatch(setLoading(false));
    }
  }

  // Add a request interceptor
  axiosInstance.interceptors.request.use(
    (config: any) => {
      // // cancel request
      // if (cancel && config.url !== '/auth') {
      //   cancel();
      // }
      // // if (config.url !== '/auth' || config.url !== '/user/refresh-token') {

      // // }

      // config.cancelToken = new axios.CancelToken((c) => {
      //   cancel = c;
      // });

      // if (config.url === '/auth' || config.url === '/user/refresh-token') {
      //   delete config?.cancelToken;
      // }

      if (config?.showSpinner) {
        // show spinner
        requestCount += 1;
        store.dispatch(setLoading(true));
      }

      const accessToken = localStorage.getItem('access_token');

      if (accessToken) {
        config.headers['x-auth-token'] = accessToken;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    (response: IResponse) => {
      if (response.config.showSpinner) {
        // hide spinner
        countLoading();
      }
      return response;
    },
    async (error) => {
      if (error?.config?.showSpinner) {
        // hide spinner
        countLoading();
      }

      // handle timeout
      if (error.code === 'ECONNABORTED') {
        store.dispatch(showError({
          isOpen: true,
          content: '504 Gateway Timeout',
        }));
      }
      // token expired
      if (error.response?.status === 401) {
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
};
