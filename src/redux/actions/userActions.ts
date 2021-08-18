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