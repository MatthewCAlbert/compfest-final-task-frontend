import { put, call } from 'redux-saga/effects';
import * as types from '@/redux/actions'
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { donateProgramService, getDonationProgramDetailService, getDonationProgramListService, searchDonationProgramService } from '@/services/programService';

export function* searchDonationProgramSaga(payload: PayloadAction<string>) {
  try {
    const response: AxiosResponse = yield call(searchDonationProgramService, payload.payload);
    const {data} = response;
    yield put({ type: types.SEARCH_DONATION_PROGRAM_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.SEARCH_DONATION_PROGRAM_ERROR, error });
  }
}

export function* getDonationProgramListSaga() {
  try {
    const response: AxiosResponse = yield call(getDonationProgramListService);
    const {data} = response;
    yield put({ type: types.FETCH_PROGRAM_LIST_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.FETCH_PROGRAM_LIST_ERROR, error });
  }
}

export function* getDonationProgramDetailSaga(payload: PayloadAction<string>) {
  try {
    const response: AxiosResponse = yield call(getDonationProgramDetailService, payload.payload);
    const {data} = response;
    yield put({ type: types.FETCH_PROGRAM_DETAIL_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.FETCH_PROGRAM_DETAIL_ERROR, error });
  }
}

export function* donateDonationProgramSaga(payload: PayloadAction<{
      program_id: string,
      amount: number
    }>) {
  try {
    const response: AxiosResponse = yield call(donateProgramService, payload.payload.program_id, payload.payload.amount);
    const {data} = response;
    yield put({ type: types.DONATE_DONATION_PROGRAM_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.DONATE_DONATION_PROGRAM_ERROR, error });
  }
}