import { combineReducers } from 'redux';
import auth from "./authReducer";
import profile from "./userReducer";
import admin from "./adminReducer";
import program from "./programReducer";
import fundraiser from "./fundraiserReducer";
import * as types from '@/redux/actions'
import { ActionResponse } from '@/types/redux';

const allReducers = combineReducers({
  auth,
  profile,
  admin,
  program,
  fundraiser
});

const rootReducer = (state: any, action: ActionResponse) =>{
    switch (action.type) {
        case types.CLEAR_ALL_REDUCER_DATA:
            return state = undefined;
        default:
            return allReducers(state, action);
    }
}

export default rootReducer;