import axios from 'axios';

// import { IUserResponse } from '@/home/interfaces';

export const getUser = async () => {
  try {
    const { data } = await axios.get('/api/auth/current_user');

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
