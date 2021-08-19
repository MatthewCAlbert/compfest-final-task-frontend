import { rolesEnum, statusEnum } from "@/config/enums";
import { AxiosError } from "axios";

export interface ActionResponse{
  type: string, 
  response?: any,
  error?: AxiosError
}

export interface ReducerResponse{
  response?: any,
  error?: AxiosError
}

export interface UserObject{
  name?: string,
  // username?: string,
  email?: string,
  status?: statusEnum,
  role?: rolesEnum
}

export interface DonationProgram{
  
}