import { ActionResponse, ReducerResponse } from "@/types/redux";
import * as types from '../actions';

const initialState: {
  search?: ReducerResponse,
  programList?: ReducerResponse,
  programDetail?: ReducerResponse,
  sendDonation?: ReducerResponse,
} = {}

export default ( state = initialState, action: ActionResponse )=>{
  const response = action?.response;
  const error = action?.error;

  switch( action.type ){
    case types.SEARCH_DONATION_PROGRAM_SUCCESS:
      return {...state, search: { response } }
    case types.SEARCH_DONATION_PROGRAM_ERROR:
      return {...state, search: { error } }
    case types.CLEAR_SEARCH_DONATION_PROGRAM:
      return {...state, search: null }

    case types.FETCH_PROGRAM_LIST_SUCCESS:
      return {...state, programList: { response } }
    case types.FETCH_PROGRAM_LIST_ERROR:
      return {...state, programList: { error } }

    case types.FETCH_PROGRAM_DETAIL_SUCCESS:
      return {...state, programDetail: { response } }
    case types.FETCH_PROGRAM_DETAIL_ERROR:
      return {...state, programDetail: { error } }
    case types.CLEAR_FETCH_PROGRAM_DETAIL:
      return {...state, programDetail: null }

    case types.DONATE_DONATION_PROGRAM_SUCCESS:
      return {...state, sendDonation: { response } }
    case types.DONATE_DONATION_PROGRAM_ERROR:
      return {...state, sendDonation: { error } }

    case types.CLEAR_DONATE_DONATION_PROGRAM_RESPONSE:
      return {...state, sendDonation: null }

    default:
      return state;
  }
}