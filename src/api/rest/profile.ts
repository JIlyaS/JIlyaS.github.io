import { AxiosResponse } from 'axios';
import makeRequest from '../makeRequest';
import { Profile } from '@src/types/profile';

export const fetchProfileRequest = (): Promise<AxiosResponse<Profile>> => {
  return makeRequest({
    url: '/profile',
    method: 'GET',
  });
};
