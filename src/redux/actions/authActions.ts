import { rolesEnum } from '@/config/enums';
import { EditUserRequest } from '@/services/authService';
import { UserObject } from '@/types/redux';
import * as types from './index';

interface RegisterUserObject{
  name?: string,
  username?: string,
  email?: string,
  password?: string,
  role?: rolesEnum,
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

export const editProfileAction = (data: EditUserRequest) => {
  return {
    type: types.EDIT_USER,
    payload: data
  }
};

export const clearEditProfileAction = () => {
  return {
    type: types.CLEAR_EDIT_USER_RESPONSE
  }
};


export const getUserProfileAction = () => {
  return {
    type: types.FETCH_USER_PROFILE
  }
};

export const clearAuthAction = () => {
  return {
    type: types.CLEAR_AUTH_RESPONSE
  }
};

export const logoutAction = () => {
  return {
    type: types.LOGOUT_USER,
  }
};