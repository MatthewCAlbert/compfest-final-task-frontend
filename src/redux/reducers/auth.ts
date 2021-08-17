import { ActionResponse, UserObject } from "@/types/redux";
import * as types from '../actions';

const initialState: {
  token?: string,
  user?: any
} = {
  token: ""
}

export default ( state = initialState, action: ActionResponse )=>{
  const response = action?.response;

  switch( action.type ){
    case types.LOGIN_USER_SUCCESS:
      return {...state, response }
    case types.LOGIN_USER_ERROR:
      return {...state, response }
    case types.REGISTER_USER_SUCCESS:
      return { ...state, response };
    case types.REGISTER_USER_ERROR:
      return { ...state, response };
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, token: "" };
    default:
      return state;
  }
}