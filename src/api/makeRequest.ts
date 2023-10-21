/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios';

interface Auth {
  Authorization?: string;
}

interface IAxiosConfig {
  url: string;
  method: Method;
  headers?: Auth;
  params?: any;
  data?: any;
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
}

export default ({
  url = '/',
  method = 'get',
  params = {},
  data = {},
  headers = {},
  responseType = 'json',
}: IAxiosConfig) => {
  const headerObj = {
    ...headers,
  } as AxiosRequestHeaders;

  if (localStorage.getItem('token')) {
    headerObj.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  const configAxios: AxiosRequestConfig = {
    url: `${process.env.API_PATH}${url}`,
    method,
    headers: headerObj,
    params,
    data,
    responseType,
  };

  return axios(configAxios).catch((error) => {
    throw error;
  });
};
