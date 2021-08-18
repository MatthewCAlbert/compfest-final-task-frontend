import { roles } from '@/config/enums';
import { UserObject } from '@/types/redux';
import * as types from './index';

interface RegisterUserObject{
  name?: string,
  username?: string,
  email?: string,
  password?: string,
  role?: roles,
}

export const registerUserAction = (user: RegisterUserObject) => {
  return {
    type: types.REGISTER_USER,
    payload: user
  }
};

export const loginUserAction = (username: string, password: string) => {
  return {
    type: types.LOGIN_USER,
    payload: {
      username, password
    }
  }
};

export const logoutAction = () => {
  return {
    type: types.LOGOUT_USER,
  }
};