import { ActionResponse, UserObject } from "@/types/redux";
import * as types from '../actions';

const initialState: {
  token?: string,
  user?: UserObject
} = {
  token: ""
}

export default ( state = initialState, action: ActionResponse )=>{
  const response = action?.response;
  const error = action?.error;

  switch( action.type ){
    case types.LOGIN_USER_SUCCESS:
      return {...state, token: response }
    case types.LOGIN_USER_ERROR:
      return {...state, error }

    case types.REGISTER_USER_SUCCESS:
      return { ...state, token: response };
    case types.REGISTER_USER_ERROR:
      return { ...state, error };

    case types.EDIT_USER_SUCCESS:
      return { ...state, edit: {response} };
    case types.EDIT_USER_ERROR:
      return { ...state, edit: {error} };

    case types.LOGOUT_USER_SUCCESS:
      return { ...state, token: "" };
      
    default:
      return state;
  }
}