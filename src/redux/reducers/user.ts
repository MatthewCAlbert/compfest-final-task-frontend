import { ActionResponse, ReducerResponse } from "@/types/redux";
import * as types from '../actions';

const initialState: {
  wallet?: ReducerResponse,
  walletHistory?: ReducerResponse,
  donationHistory?: ReducerResponse,
} = {}

export default ( state = initialState, action: ActionResponse )=>{
  const response = action?.response;
  const error = action?.error;

  switch( action.type ){
    case types.FETCH_USER_WALLET_INFO_SUCCESS:
      return {...state, wallet: { response } }
    case types.FETCH_USER_WALLET_INFO_ERROR:
      return {...state, wallet: { error } }
      
    case types.FETCH_USER_WALLET_HISTORY_SUCCESS:
      return {...state, walletHistory: { response } }
    case types.FETCH_USER_WALLET_HISTORY_ERROR:
      return {...state, walletHistory: { error } }
      
    case types.FETCH_USER_DONATION_HISTORY_SUCCESS:
      return {...state, donationHistory: { response } }
    case types.FETCH_USER_DONATION_HISTORY_ERROR:
      return {...state, donationHistory: { error } }
      
    default:
      return state;
  }
}