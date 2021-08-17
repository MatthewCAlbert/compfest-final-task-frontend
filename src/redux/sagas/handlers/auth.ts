  
import { put, call } from 'redux-saga/effects';
import {
  registerUserService,
  loginUserService,
  RegisterUserRequest,
  LoginUserRequest,
} from '@/services/authService';

import * as types from '@/redux/actions'
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { authContext } from '@/utils/auth';

export function* registerSaga(payload: PayloadAction<RegisterUserRequest>) {
  try {
    const response: AxiosResponse = yield call(registerUserService, payload.payload);
    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload: PayloadAction<LoginUserRequest>) {
  try {
    const response: AxiosResponse = yield call(loginUserService, payload.payload);
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export function* logoutSaga(payload) {
  authContext.setToken("");
  yield put({ type: types.LOGOUT_USER_SUCCESS, response: "ok" });
}