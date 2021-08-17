import { roles } from "@/config/enums";

export interface ActionResponse{
  type: string, 
  response?: any,
  error?: any
}

export interface UserObject{
  name?: string,
  username?: string,
  email?: string,
  role?: roles,
  token?: string
}

export interface DonationProgram{
  
}