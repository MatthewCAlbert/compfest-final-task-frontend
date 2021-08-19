import { DonationProgram } from '@/types/redux';
import * as types from './index';

export const searchDonationProgram = (query: string) => {
  return {
    type: types.SEARCH_DONATION_PROGRAM,
    payload: query
  }
};


export const getDonationProgramList = () => {
  return {
    type: types.FETCH_PROGRAM_LIST,
  }
};

export const getDonationProgramDetail = (program_id: string) => {
  return {
    type: types.FETCH_PROGRAM_DETAIL,
    payload: program_id
  }
};

export const donateDonationProgram = (program_id: string, amount: number) => {
  return {
    type: types.DONATE_DONATION_PROGRAM,
    payload: {
      program_id,
      amount
    }
  }
};

export const clearDonateDonationProgramResponse = () => {
  return {
    type: types.CLEAR_DONATE_DONATION_PROGRAM_RESPONSE
  }
};
