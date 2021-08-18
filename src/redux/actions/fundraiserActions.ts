import { CreateDonationProgramRequest } from '@/services/programService';
import * as types from './index';

export const createDonationProgram = (data: CreateDonationProgramRequest) => {
  return {
    type: types.CREATE_DONATION_PROGRAM,
    payload: data
  }
};

export const getAllFundraiserProgram = () => {
  return {
    type: types.FETCH_ALL_FUNDRAISER_PROGRAM
  }
};

export const createProgramWithdrawalRequest = (program_id: string, amount: number) => {
  return {
    type: types.CREATE_PROGRAM_WITHDRAWAL_REQUEST,
    payload: {
      program_id,
      amount
    }
  }
};