/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import makeRequest from '../makeRequest';
import { ICategoryResponse } from '@src/entities/category';

export const fetchCategoriesRequest = (): Promise<AxiosResponse<ICategoryResponse>> => {
  return makeRequest({
    url: '/categories',
    method: 'GET',
  });
};
