import axios, {AxiosInstance} from 'axios';
import {getToken} from './token';

const TOKEN_HEADER = 'X-Token';

function createApi(baseURL: string, timeout: number): AxiosInstance {
  const api = axios.create({
    baseURL,
    timeout,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers[TOKEN_HEADER] = token;
    }

    return config;
  });

  return api;
}

export {createApi};
