import { ActionResponse, ReducerResponse, UserObject } from "@/types/redux";
import { AxiosError } from "axios";
import * as types from '../actions';

const initialState: {
  token?: string,
  response?: any,
  error?: AxiosError,
  user?: UserObject,
  edit?: ReducerResponse
} = {
  token: ""
} 

export default ( state = initialState, action: ActionResponse )=>{
  const response = action?.response;
  const error = action?.error;

  switch( action.type ){
    case types.LOGIN_USER_SUCCESS:
      return {...state, error: null, response, token: response }
    case types.LOGIN_USER_ERROR:
      return {...state, error }

    case types.REGISTER_USER_SUCCESS:
      return { ...state, error: null, response };
    case types.REGISTER_USER_ERROR:
      return { ...state, error };

    case types.EDIT_USER_SUCCESS:
      return { ...state, edit: {response} };
    case types.EDIT_USER_ERROR:
      return { ...state, edit: {error} };
    case types.CLEAR_EDIT_USER_RESPONSE:
      return { ...state, edit: null };

    case types.FETCH_USER_PROFILE_SUCCESS:
      return { ...state, user: response };
    case types.FETCH_USER_PROFILE_ERROR:
      return { ...state, error };

    case types.LOGOUT_USER_SUCCESS:
      return { ...state, token: null, user: null };

    case types.CLEAR_AUTH_RESPONSE:
      return { ...state, error: null, response: null };
      
    default:
      return state;
  }
}