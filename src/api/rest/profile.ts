import { AxiosResponse } from 'axios';
import makeRequest from '../makeRequest';
import { IUpdateProfileRequest, Profile } from '@src/entities/profile';

export const fetchProfileRequest = (): Promise<AxiosResponse<Profile>> => {
  return makeRequest({
    url: '/profile',
    method: 'GET',
  });
};

export const fetchUpdateProfileRequest = (
  data: IUpdateProfileRequest,
): Promise<AxiosResponse<Profile>> => {
  return makeRequest({
    url: '/profile',
    method: 'PUT',
    data,
  });
};
