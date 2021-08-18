import { put, call } from 'redux-saga/effects';
import {
  registerUserService,
  loginUserService,
  RegisterUserRequest,
  LoginUserRequest,
  EditUserRequest,
  editUserProfileService,
} from '@/services/authService';

import * as types from '@/redux/actions'
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { authContext } from '@/utils/auth';

export function* registerSaga(payload: PayloadAction<RegisterUserRequest>) {
  try {
    const response: AxiosResponse = yield call(registerUserService, payload.payload);
    const {data} = response;
    if( data?.token ){
      authContext.setToken(data.token);
      yield [
        put({ type: types.REGISTER_USER_SUCCESS, response: data.token })
      ];
    }else
      throw new Error("token invalid");
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload: PayloadAction<LoginUserRequest>) {
  try {
    const response: AxiosResponse = yield call(loginUserService, payload.payload);
    const {data} = response;
    if( data?.token ){
      authContext.setToken(data.token);
      yield [
        put({ type: types.LOGIN_USER_SUCCESS, response: data.token })
      ];
    }else
      throw new Error("token invalid");
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export function* editUserSaga(payload: PayloadAction<EditUserRequest>) {
  try {
    const response: AxiosResponse = yield call(editUserProfileService, payload.payload);
    const {data} = response;
    yield [
      put({ type: types.EDIT_USER_SUCCESS, response: data.token })
    ];
  } catch(error) {
    yield put({ type: types.EDIT_USER_ERROR, error });
  }
}

export function* logoutSaga() {
  authContext.setToken("");
  yield put({ type: types.LOGOUT_USER_SUCCESS, response: "ok" });
}