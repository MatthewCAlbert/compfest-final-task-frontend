import { combineReducers } from 'redux';
import auth from "./authReducer";
import profile from "./userReducer";
import admin from "./adminReducer";
import program from "./programReducer";
import fundraiser from "./fundraiserReducer";

const rootReducer = combineReducers({
  auth,
  profile,
  admin,
  program,
  fundraiser
});

export default rootReducer;