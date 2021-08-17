import { roles } from "@/config/enums";

export interface ReduxAction{
  type: string, 
  value: any
}

export interface ActionResponse{
  type: string, 
  response: any
}

export interface InitialState{
  users: string[],
  loading: boolean,
  error: any,
}

export type ReduxReducerFunction = {(state: InitialState, action: ReduxAction): InitialState}


export interface UserObject{
  name?: string,
  username?: string,
  email?: string,
  role?: roles,
  token?: string
}

export interface DonationProgram{
  
}