import { AxiosError } from 'axios';
import { IUser } from '../lib/types';
import { apiInstance } from './base';

const BASE_URL = '/users/';

const getUsers = async (): Promise<IUser[] | AxiosError> => {
  try {
    const response = await apiInstance.get(BASE_URL);
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
};

const getUserById = async (id: IUser['id']): Promise<IUser | AxiosError> => {
  try {
    const response = await apiInstance.get(`${BASE_URL}${id}`);
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
};

const createUser = async (product: IUser): Promise<IUser | AxiosError> => {
  try {
    const response = await apiInstance.post(BASE_URL, { ...product });
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
};

const deleteUser = async (id: IUser['id']) => {
  try {
    const response = await apiInstance.delete(`${BASE_URL}${id}`);
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
};

export { BASE_URL, getUsers, getUserById, createUser, deleteUser };
