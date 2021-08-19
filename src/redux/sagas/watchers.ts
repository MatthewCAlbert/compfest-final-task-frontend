import { takeLatest } from "@redux-saga/core/effects";
import * as types from '../actions';
import { getPendingFundraiserSaga, getPendingProgramSaga, getPendingWithdrawalSaga, verifyFundraiserSaga, verifyProgramSaga, verifyWithdrawalSaga } from "./handlers/adminSaga";
import { editUserSaga, getUserProfileSaga, loginSaga, logoutSaga, registerSaga } from "./handlers/authSaga";
import { createDonationProgramSaga, createProgramWithdrawalRequestSaga, getAllFundraiserProgramSaga } from "./handlers/fundraiserSaga";
import { donateDonationProgramSaga, getDonationProgramDetailSaga, getDonationProgramListSaga, searchDonationProgramSaga } from "./handlers/programSaga";
import { getUserDonationHistorySaga, getUserWalletHistorySaga, getUserWalletInfoSaga, topupUserWalletSaga } from "./handlers/userSaga";

export default function* watcherSaga(){
  // Auth
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.LOGOUT_USER, logoutSaga);
  yield takeLatest(types.EDIT_USER, editUserSaga);
  yield takeLatest(types.FETCH_USER_PROFILE, getUserProfileSaga);

  // User
  yield takeLatest(types.FETCH_USER_DONATION_HISTORY, getUserDonationHistorySaga);
  yield takeLatest(types.FETCH_USER_WALLET_INFO, getUserWalletInfoSaga);
  yield takeLatest(types.FETCH_USER_WALLET_HISTORY, getUserWalletHistorySaga);
  yield takeLatest(types.TOPUP_USER_WALLET, topupUserWalletSaga);

  // Program
  yield takeLatest(types.SEARCH_DONATION_PROGRAM, searchDonationProgramSaga);
  yield takeLatest(types.FETCH_PROGRAM_LIST, getDonationProgramListSaga);
  yield takeLatest(types.FETCH_PROGRAM_DETAIL, getDonationProgramDetailSaga);
  yield takeLatest(types.DONATE_DONATION_PROGRAM, donateDonationProgramSaga);

  // Fundraiser
  yield takeLatest(types.CREATE_DONATION_PROGRAM, createDonationProgramSaga);
  yield takeLatest(types.FETCH_ALL_FUNDRAISER_PROGRAM, getAllFundraiserProgramSaga);
  yield takeLatest(types.CREATE_PROGRAM_WITHDRAWAL_REQUEST, createProgramWithdrawalRequestSaga);
  
  // Admin
  yield takeLatest(types.VERIFY_FUNDRAISER, verifyFundraiserSaga);
  yield takeLatest(types.FETCH_PENDING_FUNDRAISER, getPendingFundraiserSaga);
  yield takeLatest(types.VERIFY_PROGRAM, verifyProgramSaga);
  yield takeLatest(types.FETCH_PENDING_PROGRAM, getPendingProgramSaga);
  yield takeLatest(types.VERIFY_WITHDRAWAL, verifyWithdrawalSaga);
  yield takeLatest(types.FETCH_PENDING_WITHDRAWAL, getPendingWithdrawalSaga);
};