import { ActionResponse, ReducerResponse } from "@/types/redux";
import * as types from '../actions';

const initialState: {
  create?: ReducerResponse,
  fundraiserProgram?: ReducerResponse,
  requestWithdrawal?: ReducerResponse,
} = {}

export default ( state = initialState, action: ActionResponse )=>{
  const response = action?.response;
  const error = action?.error;

  switch( action.type ){
    case types.CREATE_DONATION_PROGRAM_SUCCESS:
      return {...state, create: { response } }
    case types.CREATE_DONATION_PROGRAM_ERROR:
      return {...state, create: { error } }
    case types.CLEAR_CREATE_DONATION_PROGRAM_RESPONSE:
      return {...state, create: null }

    case types.FETCH_ALL_FUNDRAISER_PROGRAM_SUCCESS:
      return {...state, fundraiserProgram: { response } }
    case types.FETCH_ALL_FUNDRAISER_PROGRAM_ERROR:
      return {...state, fundraiserProgram: { error } }

    case types.CREATE_PROGRAM_WITHDRAWAL_REQUEST_SUCCESS:
      return {...state, requestWithdrawal: { response } }
    case types.CREATE_PROGRAM_WITHDRAWAL_REQUEST_ERROR:
      return {...state, requestWithdrawal: { error } }
    case types.CLEAR_CREATE_PROGRAM_WITHDRAWAL_REQUEST_RESPONSE:
      return {...state, requestWithdrawal: null }

    default:
      return state;
  }
}