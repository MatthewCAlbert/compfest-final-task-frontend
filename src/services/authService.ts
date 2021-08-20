import apiInstance from "@/config/api";
import { rolesEnum } from "@/config/enums";

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
  role: rolesEnum 
}

export function registerUserService( registerData: RegisterUserRequest) {
  const mutator = ()=>{
    return apiInstance.post("auth/register", registerData);
  }

  return mutator();
}

export interface EditUserRequest{
  name: string,
}

export function editUserProfileService( editData: EditUserRequest) {
  const mutator = ()=>{
    return apiInstance.put("api/user", editData);
  }

  return mutator();
}

export interface ChangePasswordRequest{
  currentPassword: string,
  password: string,
  confirmPassword: string,
}

export function changePasswordService( data: ChangePasswordRequest) {
  const mutator = ()=>{
    return apiInstance.put("api/user/change-password", data);
  }

  return mutator();
}