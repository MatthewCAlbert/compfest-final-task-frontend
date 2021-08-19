import { put, call } from 'redux-saga/effects';
import * as types from '@/redux/actions'
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { getPendingFundraiserService, getPendingProgramService, getPendingWithdrawalService, verifyFundraiserService, verifyProgramService, verifyWithdrawalService } from '@/services/adminService';

export function* verifyFundraiserSaga(payload: PayloadAction<string>) {
  try {
    const response: AxiosResponse = yield call(verifyFundraiserService, payload.payload);
    const {data} = response;
    yield put({ type: types.VERIFY_FUNDRAISER_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.VERIFY_FUNDRAISER_ERROR, error });
  }
}

export function* getPendingFundraiserSaga() {
  try {
    const response: AxiosResponse = yield call(getPendingFundraiserService);
    const {data} = response;
    yield put({ type: types.FETCH_PENDING_FUNDRAISER_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.FETCH_PENDING_FUNDRAISER_ERROR, error });
  }
}

export function* verifyProgramSaga(payload: PayloadAction<string>) {
  try {
    const response: AxiosResponse = yield call(verifyProgramService, payload.payload);
    const {data} = response;
    yield put({ type: types.VERIFY_PROGRAM_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.VERIFY_PROGRAM_ERROR, error });
  }
}

export function* getPendingProgramSaga() {
  try {
    const response: AxiosResponse = yield call(getPendingProgramService);
    const {data} = response;
    yield put({ type: types.FETCH_PENDING_PROGRAM_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.FETCH_PENDING_PROGRAM_ERROR, error });
  }
}

export function* verifyWithdrawalSaga(payload: PayloadAction<string>) {
  try {
    const response: AxiosResponse = yield call(verifyWithdrawalService, payload.payload);
    const {data} = response;
    yield put({ type: types.VERIFY_WITHDRAWAL_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.VERIFY_WITHDRAWAL_ERROR, error });
  }
}

export function* getPendingWithdrawalSaga() {
  try {
    const response: AxiosResponse = yield call(getPendingWithdrawalService);
    const {data} = response;
    yield put({ type: types.FETCH_PENDING_WITHDRAWAL_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.FETCH_PENDING_WITHDRAWAL_ERROR, error });
  }
}
