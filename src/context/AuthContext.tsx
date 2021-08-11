import { createContext } from "react";
import { TokenDataInterface, UserDataInterface } from "./AuthProvider";

export interface AuthContextInterface{
  user: UserDataInterface | null,
  token: TokenDataInterface | null,
  loaded: boolean,
  login: {(data: any):void},
  updateUserData: {(data: any):void},
  updateToken: {(data: any):void},
  logout: {():void},
  isExpired: {():boolean},
  isAuthenticated: {():boolean},
}

const intialContext: AuthContextInterface = {
  user: null,
  token: null,
  loaded: false,
  updateUserData: (data: any) => { throw new Error('No provider') },
  updateToken: (data: any) => { throw new Error('No provider') },
  login: (data: any) => { throw new Error('No provider') },
  logout: () => { throw new Error('No provider') },
  isExpired: () => { throw new Error('No provider') },
  isAuthenticated: () : boolean => { throw new Error('No provider') }
}

const AuthContext = createContext(intialContext);

export default AuthContext;