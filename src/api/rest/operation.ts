/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import makeRequest from '../makeRequest';
import { ICreateOperation, IOperationResponse, IUpdateOperation } from '@src/entities/operation';

export const fetchOperationsRequest = (): Promise<AxiosResponse<IOperationResponse>> => {
  return makeRequest({
    url: '/operations',
    method: 'GET',
  });
};

export const fetchAddOperationRequest = (data: ICreateOperation): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: '/operations',
    method: 'POST',
    data,
  });
};

export const fetchUpdateOperationRequest = (
  data: IUpdateOperation,
): Promise<AxiosResponse<any>> => {
  const updatedData = {
    name: data.name,
    desc: data.desc,
    amount: data.amount,
    date: data.date,
    type: data.type,
    categoryId: data.categoryId,
  };
  return makeRequest({
    url: `/operations/${data.id}`,
    method: 'PUT',
    data: updatedData,
  });
};

export const fetchCurrentOperationRequest = (id: string): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: `/operations/${id}`,
    method: 'GET',
  });
};

export const fetchDeleteOperationRequest = (id: string): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: `/operations/${id}`,
    method: 'DELETE',
  });
};
