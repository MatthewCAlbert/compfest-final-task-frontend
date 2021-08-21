import { put, call } from 'redux-saga/effects';
import * as types from '@/redux/actions'
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { CreateDonationProgramRequest, createDonationProgramService } from '@/services/programService';
import { getAllFundraiserProgramService, requestProgramWithdrawalService } from '@/services/userService';

export function* createDonationProgramSaga(payload: PayloadAction<CreateDonationProgramRequest>) {
  try {
    const response: AxiosResponse = yield call(createDonationProgramService, payload.payload);
    const {data} = response;
    yield put({ type: types.CREATE_DONATION_PROGRAM_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.CREATE_DONATION_PROGRAM_ERROR, error });
  }
}

export function* getAllFundraiserProgramSaga() {
  try {
    const response: AxiosResponse = yield call(getAllFundraiserProgramService);
    const {data} = response;
    yield put({ type: types.FETCH_ALL_FUNDRAISER_PROGRAM_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.FETCH_ALL_FUNDRAISER_PROGRAM_ERROR, error });
  }
}

export function* createProgramWithdrawalRequestSaga(payload: PayloadAction<{program_id: string, amount: number}>) {
  try {
    const response: AxiosResponse = yield call(requestProgramWithdrawalService, payload.payload?.program_id, payload.payload?.amount);
    const {data} = response;
    yield put({ type: types.CREATE_PROGRAM_WITHDRAWAL_REQUEST_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.CREATE_PROGRAM_WITHDRAWAL_REQUEST_ERROR, error });
  }
}