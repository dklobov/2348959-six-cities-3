import axios, {AxiosInstance} from 'axios';

function createApi(baseURL: string, timeout: number): AxiosInstance {
  return axios.create({
    baseURL,
    timeout,
  });
}

export {createApi};
