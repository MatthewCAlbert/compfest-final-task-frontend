import * as types from './index';

export const verifyFundraiser = (user_id: string) => {
  return {
    type: types.VERIFY_FUNDRAISER,
    id: user_id
  }
};