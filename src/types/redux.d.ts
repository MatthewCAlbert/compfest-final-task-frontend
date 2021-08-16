export interface ReduxAction{
  type:string, 
  value:any
}

export interface InitialState{
  users: string[],
  loading: boolean,
  error: any,
}

export type ReduxReducerFunction = {(state: InitialState, action: ReduxAction): InitialState}