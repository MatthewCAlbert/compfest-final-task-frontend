import { DonationProgram } from '@/types/redux';
import * as types from './index';

export const getDonationProgramList = (data: DonationProgram[]) => {
  return {
    type: types.FETCH_PROGRAM_LIST,
    data
  }
};

export const getDonationProgramDetail = (data: DonationProgram) => {
  return {
    type: types.FETCH_PROGRAM_DETAIL,
    data
  }
};

export const getDonationProgramHistory = () => {
  return {
    type: types.DONATE_DONATION_PROGRAM,
  }
};