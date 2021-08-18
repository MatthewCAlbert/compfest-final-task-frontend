import * as types from './index';

export const verifyFundraiser = (user_id: string) => {
  return {
    type: types.VERIFY_FUNDRAISER,
    payload: user_id
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

export const getPendingWithdrawal = () => {
  return {
    type: types.FETCH_PENDING_WITHDRAWAL,
  }
};