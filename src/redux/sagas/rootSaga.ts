import { takeLatest } from "@redux-saga/core/effects";
import * as types from '../actions';
import { loginSaga, logoutSaga, registerSaga } from "./handlers/auth";

export function* watcherSaga(){
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.LOGOUT_USER, logoutSaga);
};