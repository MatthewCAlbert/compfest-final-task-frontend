import { combineReducers } from 'redux';
import auth from "./auth";
import profile from "./user";
import admin from "./admin";
import program from "./program";
import fundraiser from "./fundraiser";

const rootReducer = combineReducers({
  auth,
  profile,
  admin,
  program,
  fundraiser
});

export default rootReducer;