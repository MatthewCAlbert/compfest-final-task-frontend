import { ActionResponse, ReducerResponse } from "@/types/redux";
import * as types from '../actions';

const initialState: {
  verifyFundraiser?: ReducerResponse,
  pendingFundraiser?: ReducerResponse,
  verifyProgram?: ReducerResponse,
  pendingProgram?: ReducerResponse,
  verifyWithdrawal?: ReducerResponse,
  pendingWithdrawal?: ReducerResponse,
} = {}

export default ( state = initialState, action: ActionResponse )=>{
  const response = action?.response;
  const error = action?.error;

  switch( action.type ){
    case types.VERIFY_FUNDRAISER_SUCCESS:
      return {...state, verifyFundraiser: { response } }
    case types.VERIFY_FUNDRAISER_ERROR:
      return {...state, verifyFundraiser: { error } }

    case types.FETCH_PENDING_FUNDRAISER_SUCCESS:
      return {...state, pendingFundraiser: { response } }
    case types.FETCH_PENDING_FUNDRAISER_ERROR:
      return {...state, pendingFundraiser: { error } }

    case types.VERIFY_PROGRAM_SUCCESS:
      return {...state, verifyProgram: { response } }
    case types.VERIFY_PROGRAM_ERROR:
      return {...state, verifyProgram: { error } }

    case types.FETCH_PENDING_PROGRAM_SUCCESS:
      return {...state, pendingProgram: { response } }
    case types.FETCH_PENDING_PROGRAM_ERROR:
      return {...state, pendingProgram: { error } }

    case types.VERIFY_WITHDRAWAL_SUCCESS:
      return {...state, verifyWithdrawal: { response } }
    case types.VERIFY_WITHDRAWAL_ERROR:
      return {...state, verifyWithdrawal: { error } }

    case types.FETCH_PENDING_WITHDRAWAL_SUCCESS:
      return {...state, pendingWithdrawal: { response } }
    case types.FETCH_PENDING_WITHDRAWAL_ERROR:
      return {...state, pendingWithdrawal: { error } }

    default:
      return state;
  }
}