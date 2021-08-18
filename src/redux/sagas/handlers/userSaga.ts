import { put, call } from 'redux-saga/effects';
import * as types from '@/redux/actions'
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { getUserDonationHistoryService, getUserWalletHistoryService, getUserWalletInfoService } from '@/services/userService';

export function* getUserDonationHistorySaga() {
  try {
    const response: AxiosResponse = yield call(getUserDonationHistoryService);
    const {data} = response;
    yield [
      put({ type: types.FETCH_USER_DONATION_HISTORY_SUCCESS, response: data })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_USER_DONATION_HISTORY_ERROR, error });
  }
}

export function* getUserWalletInfoSaga() {
  try {
    const response: AxiosResponse = yield call(getUserWalletInfoService);
    const {data} = response;
    yield [
      put({ type: types.FETCH_USER_WALLET_INFO_SUCCESS, response: data })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_USER_WALLET_INFO_ERROR, error });
  }
}

export function* getUserWalletHistorySaga() {
  try {
    const response: AxiosResponse = yield call(getUserWalletHistoryService);
    const {data} = response;
    yield [
      put({ type: types.FETCH_USER_WALLET_HISTORY_SUCCESS, response: data })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_USER_WALLET_HISTORY_ERROR, error });
  }
}