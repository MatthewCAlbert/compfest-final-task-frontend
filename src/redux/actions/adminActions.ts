import * as types from './index';

export const getAdminNotification = () => {
  return {
    type: types.FETCH_ADMIN_NOTIFICATIONS,
  }
};

export const verifyFundraiser = (user_id: string) => {
  return {
    type: types.VERIFY_FUNDRAISER,
    payload: user_id
  }
};

export const clearVerifyFundraiserResponse = () => {
  return {
    type: types.CLEAR_VERIFY_FUNDRAISER_RESPONSE
  }
};

export const getPendingFundraiser = () => {
  return {
    type: types.FETCH_PENDING_FUNDRAISER,
  }
};

export const verifyProgram = (program_id: string) => {
  return {
    type: types.VERIFY_PROGRAM,
    payload: program_id
  }
};

export const clearVerifyProgramResponse = () => {
  return {
    type: types.CLEAR_VERIFY_PROGRAM_RESPONSE
  }
};


export const getPendingProgram = () => {
  return {
    type: types.FETCH_PENDING_PROGRAM,
  }
};

export const verifyWithdrawal = (withdrawal_id: string) => {
  return {
    type: types.VERIFY_WITHDRAWAL,
    payload: withdrawal_id
  }
};

export const clearVerifyWithdrawalResponse = () => {
  return {
    type: types.CLEAR_VERIFY_WITHDRAWAL_RESPONSE
  }
};


export const getPendingWithdrawal = () => {
  return {
    type: types.FETCH_PENDING_WITHDRAWAL,
  }
};