import * as types from './index';

export const getUserDonationHistory = () => {
  return {
    type: types.FETCH_USER_DONATION_HISTORY
  }
};

export const getUserWalletInfo = () => {
  return {
    type: types.FETCH_USER_WALLET_INFO
  }
};

export const getUserWalletHistory = () => {
  return {
    type: types.FETCH_USER_WALLET_HISTORY
  }
};

export const topUpUserWallet = (amount: number) => {
  return {
    type: types.TOPUP_USER_WALLET,
    payload: amount
  }
};

export const clearTopUpUserWalletResponse = () => {
  return {
    type: types.CLEAR_TOPUP_USER_WALLET_RESPONSE
  }
};