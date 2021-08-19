import { ActionResponse, ReducerResponse } from "@/types/redux";
import * as types from '../actions';

const initialState: {
  wallet?: ReducerResponse,
  walletHistory?: ReducerResponse,
  donationHistory?: ReducerResponse,
  topUp?: ReducerResponse,
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
      
    case types.TOPUP_USER_WALLET_SUCCESS:
      return {...state, topUp: { response } }
    case types.TOPUP_USER_WALLET_ERROR:
      return {...state, topUp: { error } }
    case types.CLEAR_TOPUP_USER_WALLET_RESPONSE:
      return {...state, topUp: null }
      
    default:
      return state;
  }
}