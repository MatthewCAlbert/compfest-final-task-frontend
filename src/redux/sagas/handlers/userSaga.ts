import { put, call } from 'redux-saga/effects';
import * as types from '@/redux/actions'
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { getUserDonationHistoryService, getUserWalletHistoryService, getUserWalletInfoService, topUpService } from '@/services/userService';

export function* getUserDonationHistorySaga() {
  try {
    const response: AxiosResponse = yield call(getUserDonationHistoryService);
    const {data} = response;
    yield put({ type: types.FETCH_USER_DONATION_HISTORY_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.FETCH_USER_DONATION_HISTORY_ERROR, error });
  }
}

export function* getUserWalletInfoSaga() {
  try {
    const response: AxiosResponse = yield call(getUserWalletInfoService);
    const {data: res} = response;
    yield put({ type: types.FETCH_USER_WALLET_INFO_SUCCESS, response: res?.data || 0 });
  } catch(error) {
    yield put({ type: types.FETCH_USER_WALLET_INFO_ERROR, error });
  }
}

export function* getUserWalletHistorySaga() {
  try {
    const response: AxiosResponse = yield call(getUserWalletHistoryService);
    const {data} = response;
    yield put({ type: types.FETCH_USER_WALLET_HISTORY_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.FETCH_USER_WALLET_HISTORY_ERROR, error });
  }
}

export function* topupUserWalletSaga( payload: PayloadAction<number> ) {
  try {
    const response: AxiosResponse = yield call(topUpService, payload.payload);
    const {data} = response;
    yield put({ type: types.TOPUP_USER_WALLET_SUCCESS, response: data });
  } catch(error) {
    yield put({ type: types.TOPUP_USER_WALLET_ERROR, error });
  }
}