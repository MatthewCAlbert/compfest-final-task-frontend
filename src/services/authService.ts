import apiInstance from "@/config/api";
import { roles } from "@/config/enums";

export interface LoginUserRequest{
  username: string, password: string 
}

export function loginUserService( request: LoginUserRequest ) {
  const mutator = ()=>{
    return apiInstance.post("auth/login", request);
  }

  return mutator();
}

export interface RegisterUserRequest{
  email: string,
  username: string,
  name: string,
  password: string,
  role: roles 
}

export function registerUserService( registerData: RegisterUserRequest) {
  const mutator = ()=>{
    return apiInstance.post("auth/login", registerData);
  }

  return mutator();
}