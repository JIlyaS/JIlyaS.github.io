import { AxiosResponse } from 'axios';
import makeRequest from '../makeRequest';
import { IAuthResponse, ILoginRequest, IRegistrationRequest } from '@src/entities/auth';

export const fetchSignUpRequest = (
  data: IRegistrationRequest,
): Promise<AxiosResponse<IAuthResponse>> => {
  return makeRequest({
    url: '/signup',
    method: 'POST',
    data,
  });
};

export const fetchSignInRequest = (data: ILoginRequest): Promise<AxiosResponse<IAuthResponse>> => {
  return makeRequest({
    url: '/signin',
    method: 'POST',
    data,
  });
};
