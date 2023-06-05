import axios from 'axios';

import {
  ISignInPayload,
  ISignInResponseSuccess,
  ISignUpPayload,
  ISignUpResponseSuccess,
} from '@/auth/interfaces';

export const signIn = async (
  payload: ISignInPayload,
): Promise<ISignInResponseSuccess> => {
  try {
    const { data } = await axios.post('/api/auth/sign_in', payload);

    localStorage.setItem('access_token', data.token);
    axios.defaults.headers.access_token = data.token;

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const signUp = async (
  payload: ISignUpPayload,
): Promise<ISignUpResponseSuccess> => {
  try {
    const { data } = await axios.post('/api/auth/sign_up', payload);

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
